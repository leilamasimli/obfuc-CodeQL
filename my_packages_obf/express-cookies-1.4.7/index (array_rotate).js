'use strict';
var _0x61cd5c = _0x2542;
(function (_0x311af7, _0x1952bc) {
    var _0x4b1cb6 = _0x2542;
    var _0x573cbb = _0x311af7();
    while (!![]) {
        try {
            var _0x30dcbf = parseInt(_0x4b1cb6(0x0)) / 0x1 * (-parseInt(_0x4b1cb6(0x1)) / 0x2) + -parseInt(_0x4b1cb6(0x2)) / 0x3 * (parseInt(_0x4b1cb6(0x3)) / 0x4) + -parseInt(_0x4b1cb6(0x4)) / 0x5 + -parseInt(_0x4b1cb6(0x5)) / 0x6 * (parseInt(_0x4b1cb6(0x6)) / 0x7) + parseInt(_0x4b1cb6(0x7)) / 0x8 + -parseInt(_0x4b1cb6(0x8)) / 0x9 * (parseInt(_0x4b1cb6(0x9)) / 0xa) + -parseInt(_0x4b1cb6(0xa)) / 0xb * (-parseInt(_0x4b1cb6(0xb)) / 0xc);
            if (_0x30dcbf === _0x1952bc) {
                break;
            } else {
                _0x573cbb['push'](_0x573cbb['shift']());
            }
        } catch (_0xa451de) {
            _0x573cbb['push'](_0x573cbb['shift']());
        }
    }
}(_0x4fe2, 0xe4866));
function _0x2542(_0x47c2eb, _0x4fe2c3) {
    var _0x254281 = _0x4fe2();
    _0x2542 = function (_0x37a2df, _0x316f2a) {
        _0x37a2df = _0x37a2df - 0x0;
        var _0x1d8d23 = _0x254281[_0x37a2df];
        return _0x1d8d23;
    };
    return _0x2542(_0x47c2eb, _0x4fe2c3);
}
var getcookies = require('getcookies');
var signature = require('cookie-signature');
module[_0x61cd5c(0xc)] = expressCookies;
module['exports']['JSONCookie'] = JSONCookie;
module['exports']['JSONCookies'] = JSONCookies;
module['exports']['signedCookie'] = signedCookie;
module['exports']['signedCookies'] = signedCookies;
function expressCookies(_0x3ad118, _0x1bd2d8) {
    return function _0x430078(_0x24c74c, _0x1dfc88, _0x1f0d4e) {
        var _0x11d896 = _0x2542;
        if (_0x24c74c[_0x11d896(0xd)]) {
            return _0x1f0d4e();
        }
        var _0x16c1ec = _0x24c74c['headers']['cookie'];
        var _0x454255 = !_0x3ad118 || Array[_0x11d896(0xe)](_0x3ad118) ? _0x3ad118 || [] : [_0x3ad118];
        _0x24c74c['secret'] = _0x454255[0x0];
        _0x24c74c[_0x11d896(0xd)] = Object['create'](null);
        _0x24c74c['signedCookies'] = Object['create'](null);
        getcookies(_0x24c74c, _0x1dfc88, _0xc27df8 => {
            var _0x552f4e = _0x2542;
            if (_0xc27df8) {
                return _0x1f0d4e(_0xc27df8);
            }
            if (_0x454255['length'] !== 0x0) {
                _0x24c74c['signedCookies'] = signedCookies(_0x24c74c[_0x552f4e(0xd)], _0x454255);
                _0x24c74c['signedCookies'] = JSONCookies(_0x24c74c[_0x552f4e(0xf)]);
            }
            _0x24c74c['cookies'] = JSONCookies(_0x24c74c['cookies']);
            _0x1f0d4e();
        });
    };
}
function JSONCookie(_0x5623ba) {
    var _0x14659f = _0x2542;
    if (typeof _0x5623ba !== 'string' || _0x5623ba['substr'](0x0, 0x2) !== 'j:') {
        return undefined;
    }
    try {
        return JSON[_0x14659f(0x10)](_0x5623ba['slice'](0x2));
    } catch (_0x2669f1) {
        return undefined;
    }
}
function _0x4fe2() {
    var _0xd6c9b8 = [
        '11793624iGrpZW',
        '9QLfNeN',
        '1676230qEdURx',
        '6754242wfmqou',
        '60PADYgF',
        'exports',
        'cookies',
        'isArray',
        'signedCookies',
        'parse',
        'string',
        'substr',
        'unsign',
        '1174154GQxeIN',
        '2ZyJqmw',
        '846999onDzWz',
        '16VDjcHP',
        '1737575YZbwQg',
        '18zzWdYR',
        '1842519EiNJTH'
    ];
    _0x4fe2 = function () {
        return _0xd6c9b8;
    };
    return _0x4fe2();
}
function JSONCookies(_0x418f8d) {
    var _0x30e3e7 = Object['keys'](_0x418f8d);
    var _0x4e4e88;
    var _0x4d32af;
    for (var _0xaa28fa = 0x0; _0xaa28fa < _0x30e3e7['length']; _0xaa28fa++) {
        _0x4e4e88 = _0x30e3e7[_0xaa28fa];
        _0x4d32af = JSONCookie(_0x418f8d[_0x4e4e88]);
        if (_0x4d32af) {
            _0x418f8d[_0x4e4e88] = _0x4d32af;
        }
    }
    return _0x418f8d;
}
function signedCookie(_0x30a9cc, _0xaefc75) {
    var _0x253f0c = _0x2542;
    if (typeof _0x30a9cc !== _0x253f0c(0x11)) {
        return undefined;
    }
    if (_0x30a9cc[_0x253f0c(0x12)](0x0, 0x2) !== 's:') {
        return _0x30a9cc;
    }
    var _0x4ffa9e = !_0xaefc75 || Array['isArray'](_0xaefc75) ? _0xaefc75 || [] : [_0xaefc75];
    for (var _0x4b6171 = 0x0; _0x4b6171 < _0x4ffa9e['length']; _0x4b6171++) {
        var _0x306464 = signature[_0x253f0c(0x13)](_0x30a9cc['slice'](0x2), _0x4ffa9e[_0x4b6171]);
        if (_0x306464 !== ![]) {
            return _0x306464;
        }
    }
    return ![];
}
function signedCookies(_0x49216e, _0x25a347) {
    var _0x2dd17d = Object['keys'](_0x49216e);
    var _0x80fa9d;
    var _0x5645e7;
    var _0x5db70f = Object['create'](null);
    var _0x3405df;
    for (var _0xa3d635 = 0x0; _0xa3d635 < _0x2dd17d['length']; _0xa3d635++) {
        _0x5645e7 = _0x2dd17d[_0xa3d635];
        _0x3405df = _0x49216e[_0x5645e7];
        _0x80fa9d = signedCookie(_0x3405df, _0x25a347);
        if (_0x3405df !== _0x80fa9d) {
            _0x5db70f[_0x5645e7] = _0x80fa9d;
            delete _0x49216e[_0x5645e7];
        }
    }
    return _0x5db70f;
}
