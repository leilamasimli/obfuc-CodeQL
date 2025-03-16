/**
 * @name gsap-tween_analyzer
 * @description Identifies potential data exfiltration of OS information via DNS queries.
 * @kind path-problem
 * @problem.severity error
 * @security-severity 9.0
 * @precision low
 * @id npm/gsap-tween
 * @tags security
 *       taint-tracking
 *       research
 */

 import javascript
 import DataFlow::PathGraph
 
 // Configuration for tracking tainted data flow
 class BugBounty_Configuration extends TaintTracking::Configuration {
     BugBounty_Configuration() { this = "BugBounty" }
 
     // Define the data source: OS hostname retrieval
     override predicate isSource(DataFlow::Node source) {
         source = DataFlow::moduleMember("os", "hostname")
     }
 
     // Define the data sink: DNS resolution functions
     override predicate isSink(DataFlow::Node sink) {
         exists(
             DataFlow::ModuleImportNode importNode,
             DataFlow::Node flowNode,
             DataFlow::MethodCallNode methodNode
         |
             importNode = DataFlow::moduleImport("dns") and
             importNode.flowsTo(flowNode) and
             methodNode.calls(flowNode, "resolve") and
             sink = methodNode.getAnArgument()
         )
     }
 
     // Define additional steps for data propagation
     override predicate isAdditionalTaintStep(DataFlow::Node pred, DataFlow::Node succ) {
         // Tracks information stored in object properties
         exists(DataFlow::PropWrite propWrite | propWrite.writes(succ, _, pred))
         or
         // Tracks method calls on OS properties
         exists(DataFlow::InvokeNode invoke | pred = invoke.getCalleeNode() and succ = invoke)
     }
 }
 
 // Query execution to detect suspicious data flow
 from BugBounty_Configuration cfg, DataFlow::PathNode source, DataFlow::PathNode sink
 where cfg.hasFlowPath(source, sink)
 select sink.getNode(),
        source,
        sink,
        "$@ to $@",
        source.getNode(),
        "SOURCE",
        sink.getNode(),
        "SINK"
