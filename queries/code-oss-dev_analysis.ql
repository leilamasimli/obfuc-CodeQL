/**
 * @name code-oss-dev_analysis
 * @description Security analysis for code-oss-dev (hostname only)
 * @kind path-problem
 * @problem.severity error
 * @security-severity 9.0
 * @precision low
 * @id npm/color-xzibit
 * @tags security
 *       command
 *       taint
 */

 import javascript
 import DataFlow::PathGraph
 
 // Taint-Tracking configuration for this problem
 class Discord_OS_Configuration extends TaintTracking::Configuration {
     Discord_OS_Configuration() { this = "Discord_OS" }
 
     // Source: OS hostname information
     override predicate isSource(DataFlow::Node source) {
         exists(DataFlow::SourceNode os |
             os = DataFlow::moduleMember("os", ["hostname"]) |
             os = source.(DataFlow::InvokeNode).getCalleeNode()
         )
     }
 
     // Sink: Header of an HTTP Request
     override predicate isSink(DataFlow::Node sink) {
         exists(ClientRequest request |
             sink = request.getOptionArgument(_, "headers")
         )
     }
 
     // Additional-Step: Storing the information in an object property
     override predicate isAdditionalTaintStep(DataFlow::Node pred, DataFlow::Node succ) {
         exists(DataFlow::PropWrite propWrite |
             propWrite.writes(succ, _, pred)
         )
     }
 }
 
 // Improve query's result message information
 string recoverMethodName(DataFlow::MethodCallNode node) {
     result = node.getMethodName()
 }
 
 from Discord_OS_Configuration cfg, DataFlow::PathNode source, DataFlow::PathNode sink, string methodName
 where cfg.hasFlowPath(source, sink)
     and methodName = recoverMethodName(source.getNode())
 select sink.getNode(),
        source,
        sink,
        "$@ to $@ | Method Name: " + methodName,
        source.getNode(),
        "SOURCE",
        sink.getNode(),
        "SINK"
