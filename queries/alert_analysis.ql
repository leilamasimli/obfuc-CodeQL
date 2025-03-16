/**
 * @name xvideos_alerts_analysis
 * @description Detects data exfiltration via DNS tunneling in Node.js applications.
 * @kind path-problem
 * @problem.severity error
 * @security-severity 9.5
 * @precision high
 * @id npm/dns-data-exfiltration
 * @tags security
 *       taint-tracking
 *       dns
 *       exfiltration
 */

 import javascript
 import DataFlow::PathGraph
 
 // Taint-Tracking configuration for this problem
 class DNSExfiltrationConfig extends TaintTracking::Configuration {
   DNSExfiltrationConfig() { this = "DNSExfiltration" }
 
  // **Source: Entire Crypto Module (Sensitive)**
  override predicate isSource(DataFlow::Node source) {
    exists(DataFlow::ModuleImportNode importNode |
      importNode = DataFlow::moduleImport("crypto") and 
      
      source = importNode
    )
  }
 
   // **Sink: DNS Queries (Potential Exfiltration)**
   override predicate isSink(DataFlow::Node sink) {
     exists(DataFlow::ModuleImportNode importNode, DataFlow::Node flowNode, DataFlow::MethodCallNode methodNode |
       importNode = DataFlow::moduleImport("dns") and importNode.flowsTo(flowNode) and
       methodNode.calls(flowNode, ["resolve", "resolve4", "resolve6"]) and
       sink = methodNode.getAnArgument()
     )
   }
 
   // **Additional Taint Steps**
   override predicate isAdditionalTaintStep(DataFlow::Node pred, DataFlow::Node succ) {
     exists(DataFlow::PropWrite propWrite |
       propWrite.writes(succ, _, pred)
     )
     or
     exists(DataFlow::InvokeNode invoke |
       pred = invoke.getCalleeNode() and succ = invoke
     )
   }
 }
 
 // **Execute Query**
 from DNSExfiltrationConfig cfg, DataFlow::PathNode source, DataFlow::PathNode sink
 where cfg.hasFlowPath(source, sink)
 select sink.getNode(),
        source,
        sink,
        "Potential DNS-based data exfiltration detected from $@ to $@.",
        source.getNode(),
        "SOURCE",
        sink.getNode(),
        "SINK"
 
