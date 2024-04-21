import javascript

// Define source: Call to 'exec' function
class ExecSource extends CallExpr {
  ExecSource() {
    exists(CallExpr execCall |
      execCall.getTarget().getName() = "exec" and
      this = execCall.getAnArgument()
    )
  }
}

// Define sink: 'exec' call where command is derived from base64-encoded data
class ExecSink extends CallExpr {
  ExecSink() {
    exists(CallExpr base64Decode |
      base64Decode.getTarget().getName() = "Buffer.from" and
      base64Decode.getArgument().getValue().matches("%base64%") and
      exists(CallExpr execCall |
        this = execCall and
        execCall.getTarget().getName() = "exec" and
        base64Decode = execCall.getArgument(0)
      )
    )
  }
}

// Define flow from source to sink
from ExecSource source, ExecSink sink
where
  source.getLocation().getFile().getDeclaredType() = sink.getLocation().getFile().getDeclaredType()
select source, sink, "Potential command execution from base64-encoded data"
