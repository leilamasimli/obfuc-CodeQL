/**
 * @name tkinter_analysis
 * @description Security analysis for tkinter
 * @kind path-problem
 * @problem.severity error
 * @security-severity 9.0
 * @precision medium
 * @id npm/tkinter
 * @tags security
 *       taint-tracking
 *       data-exfiltration
 */


 import javascript
 import DataFlow::PathGraph
 
 // Taint-Tracking configuration for detecting exfiltration of process.env
 class ProcessENV_Configuration extends TaintTracking::Configuration {
     ProcessENV_Configuration() { this = "Process_ENV" }
 
     // Source: Access to 'process.env'
     override predicate isSource(DataFlow::Node source) {
         source = DataFlow::globalVarRef("process").getAPropertyRead("env")
     }
 
     // Sink: Data being written to an HTTP request
     override predicate isSink(DataFlow::Node sink) {
         exists(ClientRequest client |
             client.getAMemberCall("write").getAnArgument() = sink
         )
     }
 
     // Additional taint step: Tracking object property assignments
     override predicate isAdditionalTaintStep(DataFlow::Node pred, DataFlow::Node succ) {
         exists(DataFlow::PropWrite propWrite |
             propWrite.writes(succ, _, pred)
         )
     }
 }
 
 // Query to detect tainted flow from process.env to an HTTP request
 from ProcessENV_Configuration cfg, DataFlow::PathNode source, DataFlow::PathNode sink
 where cfg.hasFlowPath(source, sink)
 select sink.getNode(), source, sink, "$@ to $@ | ", source.getNode(), "SOURCE", sink.getNode(), "SINK" 
