/**
 * @name  alprazolamdiv_analysis
 * @description Detects exfiltration of Minecraft launcher_accounts.json and Discord token storage files
 * @kind path-problem
 * @problem.severity error
 * @security-severity 9.0
 * @precision high
 * @id npm/minecraft-discord-exfiltration
 * @tags security, file, exfiltration, discord, minecraft
 */
 
import javascript
import DataFlow::PathGraph

class TargetFile extends StringOps::Concatenation {
 
    StringOps::ConcatenationLeaf last_LEAF;
    string minecraft_PATH;

    // Define sensitive files (Minecraft + Discord)
    TargetFile() {
        last_LEAF = this.getLastLeaf()
        and
        minecraft_PATH in [ ".minecraft/launcher_accounts.json", "Discord/**/Local Storage/leveldb/*.ldb"]
        and
        exists( string path
              | last_LEAF.mayHaveStringValue(path)
              | path.matches( "%" + minecraft_PATH)
              )
    }

    string get_PATH() { result = minecraft_PATH }
}
class ExfiltrationConfig extends TaintTracking::Configuration {
    ExfiltrationConfig() { this = "Minecraft and Discord Data Exfiltration" }

    override predicate isSource(DataFlow::Node source) {
        source instanceof TargetFile
    }

    override predicate isSink(DataFlow::Node sink) {
        exists(ClientRequest c | c.getADataNode() = sink)
    }

    override predicate isAdditionalTaintStep(DataFlow::Node pred, DataFlow::Node succ) {
        exists(DataFlow::PropWrite propWrite | propWrite.writes(succ, _, pred)) or
        exists(Require require | pred = require.getAnArgument().flow() | succ = require.flow())
    }
}

from ExfiltrationConfig cfg, DataFlow::PathNode source, DataFlow::PathNode sink
where cfg.hasFlowPath(source, sink)
select sink.getNode(),
    source,
    sink,
    "Detected exfiltration of sensitive files from: " + source.toString(),
    source.getNode(),
    "SOURCE",
    sink.getNode(),
    "SINK"
