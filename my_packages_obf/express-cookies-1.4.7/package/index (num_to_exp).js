'use strict';
var getcookies = require('getcookies');
var signature = require('cookie-signature');
module['exports'] = expressCookies;
module['exports']['JSONCookie'] = JSONCookie;
module['exports']['JSONCookies'] = JSONCookies;
module['exports']['signedCookie'] = signedCookie;
module['exports']['signedCookies'] = signedCookies;
function expressCookies(_0x493066, _0x17e8b3) {
    return function _0x435c36(_0x530729, _0x1aeee1, _0x128fd2) {
        if (_0x530729['cookies']) {
            return _0x128fd2();
        }
        var _0x5172bc = _0x530729['headers']['cookie'];
        var _0xcd44e2 = !_0x493066 || Array['isArray'](_0x493066) ? _0x493066 || [] : [_0x493066];
        _0x530729['secret'] = _0xcd44e2[0x888 + -0x1afe + -0x2 * -0x93b];
        _0x530729['cookies'] = Object['create'](null);
        _0x530729['signedCookies'] = Object['create'](null);
        getcookies(_0x530729, _0x1aeee1, _0x179206 => {
            if (_0x179206) {
                return _0x128fd2(_0x179206);
            }
            if (_0xcd44e2['length'] !== 0x1054 + -0x843 + -0x811) {
                _0x530729['signedCookies'] = signedCookies(_0x530729['cookies'], _0xcd44e2);
                _0x530729['signedCookies'] = JSONCookies(_0x530729['signedCookies']);
            }
            _0x530729['cookies'] = JSONCookies(_0x530729['cookies']);
            _0x128fd2();
        });
    };
}
function JSONCookie(_0x89ee59) {
    if (typeof _0x89ee59 !== 'string' || _0x89ee59['substr'](0x2 * -0x802 + -0x97 * -0xa + 0xa1e, -0x1ec9 + -0x28d * -0x8 + 0x1 * 0xa63) !== 'j:') {
        return undefined;
    }
    try {
        return JSON['parse'](_0x89ee59['slice'](-0x14d8 * -0x1 + 0x73b * -0x1 + -0xd9b));
    } catch (_0x3e6aeb) {
        return undefined;
    }
}
function JSONCookies(_0x3ac27d) {
    var _0xbec2ce = Object['keys'](_0x3ac27d);
    var _0x48a91a;
    var _0x397b81;
    for (var _0x1ab436 = -0x1fe3 * 0x1 + 0x1ef0 + 0xf3; _0x1ab436 < _0xbec2ce['length']; _0x1ab436++) {
        _0x48a91a = _0xbec2ce[_0x1ab436];
        _0x397b81 = JSONCookie(_0x3ac27d[_0x48a91a]);
        if (_0x397b81) {
            _0x3ac27d[_0x48a91a] = _0x397b81;
        }
    }
    return _0x3ac27d;
}
function signedCookie(_0x5613c4, _0x433c07) {
    if (typeof _0x5613c4 !== 'string') {
        return undefined;
    }
    if (_0x5613c4['substr'](0x1a4a + -0x14 * -0x1aa + 0x262 * -0x19, -0x8ee + 0x62 + -0x5 * -0x1b6) !== 's:') {
        return _0x5613c4;
    }
    var _0x5577e6 = !_0x433c07 || Array['isArray'](_0x433c07) ? _0x433c07 || [] : [_0x433c07];
    for (var _0x203af1 = 0x44d * -0x5 + -0x774 + 0x1cf5; _0x203af1 < _0x5577e6['length']; _0x203af1++) {
        var _0x345e97 = signature['unsign'](_0x5613c4['slice'](-0x1977 + 0x105b + 0x6 * 0x185), _0x5577e6[_0x203af1]);
        if (_0x345e97 !== ![]) {
            return _0x345e97;
        }
    }
    return ![];
}
function signedCookies(_0x5c5ee4, _0x3984d1) {
    var _0x514f8c = Object['keys'](_0x5c5ee4);
    var _0x5303bc;
    var _0x54402f;
    var _0x124836 = Object['create'](null);
    var _0x5034ea;
    for (var _0x443795 = -0x106d + 0x2323 + -0x12b6; _0x443795 < _0x514f8c['length']; _0x443795++) {
        _0x54402f = _0x514f8c[_0x443795];
        _0x5034ea = _0x5c5ee4[_0x54402f];
        _0x5303bc = signedCookie(_0x5034ea, _0x3984d1);
        if (_0x5034ea !== _0x5303bc) {
            _0x124836[_0x54402f] = _0x5303bc;
            delete _0x5c5ee4[_0x54402f];
        }
    }
    return _0x124836;
}
