/**
 * @name bleeding-edge-css__analysis
 * @description Detects potential backdoor using reverse shell execution.
 * @kind path-problem
 * @problem.severity error
 * @security-severity 9.0
 * @precision high
 * @id npm/reverse-shell-detection
 * @tags security, taint-tracking, backdoor
 */

 import javascript
 import DataFlow::PathGraph
 
 // Taint-Tracking configuration for reverse shell detection
 class ReverseShellConfig extends TaintTracking::Configuration {
   ReverseShellConfig() { this = "ReverseShell" }
 
   // Source: Commands initiating a shell subprocess
   override predicate isSource(DataFlow::Node source) {
     exists(DataFlow::CallNode call |
       call.getCalleeName() = "spawn" and
       call.getAnArgument().mayHaveStringValue(["/bin/sh"]) and
       source = call.getAnArgument()
     )
   }
 
   // Sink: Data piped to STDIN of the shell process
   override predicate isSink(DataFlow::Node sink) {
     exists(DataFlow::MethodCallNode method |
       method.getMethodName() = "pipe" and
       sink = method.getAnArgument()
     ) and
     sink.(DataFlow::PropRef).getPropertyName() = "stdin"
   }
 
   // Additional taint step: Passing arguments to a shell subprocess
   override predicate isAdditionalTaintStep(DataFlow::Node pred, DataFlow::Node succ) {
     pred = succ.(SystemCommandExecution).getACommandArgument()
   }
 }
 
 // Query execution: Detects taint flow from shell execution to network
 from ReverseShellConfig cfg, DataFlow::PathNode source, DataFlow::PathNode sink
 where cfg.hasFlowPath(source, sink)
 select sink.getNode(),
        source,
        sink,
        "$@ to $@",
        source.getNode(),
        "SOURCE",
        sink.getNode(),
        "SINK" 
 
