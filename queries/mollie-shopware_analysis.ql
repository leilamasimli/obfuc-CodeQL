/**
 * @name mollie-shopware_analysis
 * @description Tracks potential data exfiltration via DNS tunneling
 * @kind path-problem
 * @problem.severity error
 * @security-severity 9.0
 * @precision medium
 * @id npm/mollie-shopware
 * @tags security, taint-tracking, data-exfiltration
 */

 import javascript
 import DataFlow::PathGraph

 class DNSModuleInterface extends DataFlow::SourceNode {
     DNSModuleInterface() {
         this = DataFlow::moduleMember("dns", "getServers")
     }
 }
 
 class OSInformationConfig extends TaintTracking::Configuration {
     OSInformationConfig() { this = "OS_Information" }
 
     override predicate isSource(DataFlow::Node source) {
         exists(DNSModuleInterface dns | dns = source.(DataFlow::InvokeNode).getCalleeNode()) 
         
     }
 
     override predicate isSink(DataFlow::Node sink) {
         exists(ClientRequest request | sink = request.getUrl())
     }
 
     override predicate isAdditionalTaintStep(DataFlow::Node pred, DataFlow::Node succ) {
         exists(DataFlow::PropWrite propWrite, string property |
             propWrite.writes(succ, property, pred)
         )
     }

 }
 
 from OSInformationConfig cfg, DataFlow::PathNode source, DataFlow::PathNode sink
 where cfg.hasFlowPath(source, sink) 
 select sink.getNode(),
        source,
        sink,
        "$@ to $@ | ",
        source.getNode(), "SOURCE",
        sink.getNode(), "SINK"
