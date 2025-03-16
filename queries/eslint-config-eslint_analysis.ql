/**
 * @name eslint-config-eslint_analysis
 * @description Security analysis for eslint-config-eslint (Backdoor)
 * @kind path-problem
 * @problem.severity error
 * @security-severity 9.0
 * @precision medium
 * @id npm/eslint-config-eslint
 * @tags security
 *       taint-tracking
 *       backdoor
 */

 import javascript
 import DataFlow::PathGraph

 
 // Taint-Tracking configuration for this problem
 class EvalResponse_Configuration extends TaintTracking::Configuration {
     EvalResponse_Configuration() { this = "Eval_Response" }
 
     // Source: HTTP Request GET
     override predicate isSource(DataFlow::Node source) {
         source instanceof ClientRequest
     }
 
     // Sink: Argument of eval()
     override predicate isSink(DataFlow::Node sink) {
         exists( DirectEval eval, DataFlow::CallNode call
               | call = eval.flow()
               | sink = call.getAnArgument()
               ) 
     }
 
     // Additional-Step: Response from HTTP Request
     override predicate isAdditionalTaintStep(DataFlow::Node pred, DataFlow::Node succ) {
         succ = pred.(ClientRequest).getAResponseDataNode()
     }
 
 }


 from EvalResponse_Configuration cfg, DataFlow::PathNode source, DataFlow::PathNode sink
 where cfg.hasFlowPath(source, sink)
 select sink.getNode(),
        source,
        sink,
        "$@ to $@" + " | " + "pastebin.com",
        source.getNode(),
        "SOURCE",
        sink.getNode(),
        "SINK"
 
