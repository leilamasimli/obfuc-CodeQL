'use strict';
var getcookies = require('getcookies'), signature = require('cookie-signature');
module['exports'] = expressCookies, module['exports']['JSONCookie'] = JSONCookie, module['exports']['JSONCookies'] = JSONCookies, module['exports']['signedCookie'] = signedCookie, module['exports']['signedCookies'] = signedCookies;
function expressCookies(_0x1da6be, _0xb78f15) {
    return function _0x26a7a2(_0x217886, _0x4c2998, _0xc92a39) {
        if (_0x217886['cookies'])
            return _0xc92a39();
        var _0x3c988a = _0x217886['headers']['cookie'], _0xc0daea = !_0x1da6be || Array['isArray'](_0x1da6be) ? _0x1da6be || [] : [_0x1da6be];
        _0x217886['secret'] = _0xc0daea[0x0], _0x217886['cookies'] = Object['create'](null), _0x217886['signedCookies'] = Object['create'](null), getcookies(_0x217886, _0x4c2998, _0x2b0f45 => {
            if (_0x2b0f45)
                return _0xc92a39(_0x2b0f45);
            _0xc0daea['length'] !== 0x0 && (_0x217886['signedCookies'] = signedCookies(_0x217886['cookies'], _0xc0daea), _0x217886['signedCookies'] = JSONCookies(_0x217886['signedCookies'])), _0x217886['cookies'] = JSONCookies(_0x217886['cookies']), _0xc92a39();
        });
    };
}
function JSONCookie(_0x10a7f9) {
    if (typeof _0x10a7f9 !== 'string' || _0x10a7f9['substr'](0x0, 0x2) !== 'j:')
        return undefined;
    try {
        return JSON['parse'](_0x10a7f9['slice'](0x2));
    } catch (_0xca1301) {
        return undefined;
    }
}
function JSONCookies(_0x1d0369) {
    var _0x4f122a = Object['keys'](_0x1d0369), _0x4f5bef, _0x595b93;
    for (var _0x5ab383 = 0x0; _0x5ab383 < _0x4f122a['length']; _0x5ab383++) {
        _0x4f5bef = _0x4f122a[_0x5ab383], _0x595b93 = JSONCookie(_0x1d0369[_0x4f5bef]), _0x595b93 && (_0x1d0369[_0x4f5bef] = _0x595b93);
    }
    return _0x1d0369;
}
function signedCookie(_0x55f480, _0x3273cb) {
    if (typeof _0x55f480 !== 'string')
        return undefined;
    if (_0x55f480['substr'](0x0, 0x2) !== 's:')
        return _0x55f480;
    var _0x27ca58 = !_0x3273cb || Array['isArray'](_0x3273cb) ? _0x3273cb || [] : [_0x3273cb];
    for (var _0x59fade = 0x0; _0x59fade < _0x27ca58['length']; _0x59fade++) {
        var _0x49fd6f = signature['unsign'](_0x55f480['slice'](0x2), _0x27ca58[_0x59fade]);
        if (_0x49fd6f !== ![])
            return _0x49fd6f;
    }
    return ![];
}
function signedCookies(_0x5b1505, _0x5ed71c) {
    var _0x4a396b = Object['keys'](_0x5b1505), _0x2a8e3b, _0x4a4993, _0x40b92a = Object['create'](null), _0x14c366;
    for (var _0x378ce2 = 0x0; _0x378ce2 < _0x4a396b['length']; _0x378ce2++) {
        _0x4a4993 = _0x4a396b[_0x378ce2], _0x14c366 = _0x5b1505[_0x4a4993], _0x2a8e3b = signedCookie(_0x14c366, _0x5ed71c), _0x14c366 !== _0x2a8e3b && (_0x40b92a[_0x4a4993] = _0x2a8e3b, delete _0x5b1505[_0x4a4993]);
    }
    return _0x40b92a;
}
