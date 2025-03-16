/**
 * @name component-emiter_analysis
 * @description Detects potentially dangerous function invocation patterns
 * @kind path-problem
 * @problem.severity error
 * @security-severity 9.0
 * @precision low
 * @id npm/commander-js
 * @tags security, concat, test
 */

 import javascript
 import DataFlow::PathGraph
 
 // Taint-Tracking configuration for function obfuscation
 class ObscureFunction extends TaintTracking::Configuration {
     ObscureFunction() { this = "ObscureFunction" }
 
     // Source: typeof(...) operation
     override predicate isSource(DataFlow::Node source) {
         exists(TypeofExpr typeof | source = typeof.flow())
     }
 
     // Sink: .toUpperCase() invocation
     override predicate isSink(DataFlow::Node sink) {
         exists(DataFlow::MethodCallNode toUpperCase | 
                toUpperCase.calls(_, "toUpperCase") |
                sink = toUpperCase)
     }
 
     // Additional Taint Step: .charAt() method
     override predicate isAdditionalTaintStep(DataFlow::Node pred, DataFlow::Node succ) {
         exists(DataFlow::MethodCallNode charAt |
                charAt.calls(pred, ["charAt"]) |
                succ = charAt)
     }
 }
 
 // Taint-Tracking configuration for slice() manipulation
 class SliceManipulation extends TaintTracking::Configuration {
     SliceManipulation() { this = "SliceManipulation" }
 
     // Source: typeof(...) operation
     override predicate isSource(DataFlow::Node source) {
         exists(TypeofExpr typeof | source = typeof.flow())
     }
 
     // Sink: .slice() invocation
     override predicate isSink(DataFlow::Node sink) {
         exists(DataFlow::MethodCallNode slice | 
                slice.calls(_, "slice") |
                sink = slice)
     }
 }
 
 // Taint-Tracking configuration for function invocation via string concatenation
 class InvokeFunction extends TaintTracking::Configuration {
     InvokeFunction() { this = "InvokeFunction" }
 
     // Source: String Concatenation
     override predicate isSource(DataFlow::Node source) {
         source instanceof StringOps::Concatenation
     }
 
     // Sink: Function Invocation
     override predicate isSink(DataFlow::Node sink) {
         exists(DataFlow::InvokeNode invoke | 
                sink = invoke.getCalleeNode())
     }
 
     // Additional Step: Property Read/Write
     override predicate isAdditionalTaintStep(DataFlow::Node pred, DataFlow::Node succ) {
         exists(DataFlow::PropRef prop, Expr expr |
                expr = prop.getPropertyNameExpr() |
                pred = expr.flow() and succ = prop)
     }
 }
 
 // Taint-Tracking configuration for executing HTTP response data
 class ResponseExec extends TaintTracking::Configuration {
     ResponseExec() { this = "ResponseExec" }
 
     // Source: HTTP Response
     override predicate isSource(DataFlow::Node source) {
         exists(ClientRequest c | source = c.getAResponseDataNode())
     }
 
     // Sink: Executing Response Data
     override predicate isSink(DataFlow::Node sink) {
         exists(DataFlow::InvokeNode invoke | 
                sink = invoke.getAnArgument())
     }
 }
 
 from
     ObscureFunction cfg_HEAD,
     SliceManipulation cfg_TAIL,
     StringOps::Concatenation concat_OP,
     InvokeFunction cfg_NEW,
     DataFlow::Node sink_NEW,
     ResponseExec cfg_EXE,
     DataFlow::PathNode source_EXE,
     DataFlow::PathNode sink_EXE
 
 where
     cfg_HEAD.hasFlow(_, concat_OP.getFirstOperand())
     and cfg_TAIL.hasFlow(_, concat_OP.getLastOperand())
     and cfg_NEW.hasFlow(concat_OP, sink_NEW)
     and cfg_EXE.hasFlowPath(source_EXE, sink_EXE)
     and exists(DataFlow::InvokeNode invoke |
                sink_NEW = invoke.getCalleeNode() |
                sink_EXE.getNode() = invoke.getAnArgument())
 select sink_EXE.getNode(),
        source_EXE,
        sink_EXE,
        "$@ to $@ ($@)",
        source_EXE.getNode(),
        "SOURCE",
        sink_EXE.getNode(),
        "SINK",
        concat_OP,
        "String Concat"
 
