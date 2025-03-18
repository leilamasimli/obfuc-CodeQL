/**
 * @name colorajs_analysis
 * @description Detects download and execution of a_1.exe virus file via shell commands
 * @kind path-problem
 * @problem.severity error
 * @security-severity 10.0
 * @precision medium
 * @id npm/virus-exe-download
 * @tags security
 *       malware
 *       virus
 */

 import javascript
 import DataFlow::PathGraph
 
 
 // Taint-Tracking configuration for this problem
 class VirusExeDownloadConfig extends TaintTracking::Configuration {
    VirusExeDownloadConfig() { this = "VirusExeDownloadConfig" }
 
     // Source: Suspicious URL
     override predicate isSource(DataFlow::Node source) {
         exists( string s
               | source.mayHaveStringValue(s)
               | s.matches("%a_1.exe -o a.exe%")
               )
     }
 
     // Sink: CURL Command
     override predicate isSink(DataFlow::Node sink) {
         exists( SystemCommandExecution exec, string command
               | exec.getACommandArgument().mayHaveStringValue(command) and command.matches(["curl", "curl %"])
               | sink = [ exec.getACommandArgument(), exec.getArgumentList(), exec.getOptionsArg() ]
               )
     }
 }
 
 
 from VirusExeDownloadConfig cfg, DataFlow::PathNode source, DataFlow::PathNode sink
 where cfg.hasFlowPath(source, sink)
 select sink.getNode(),
        source,
        sink,
        "$@ to $@",
        source.getNode(),
        "SOURCE",
        sink.getNode(),
        "SINK"
