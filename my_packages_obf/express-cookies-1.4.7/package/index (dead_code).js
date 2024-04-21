'use strict';
function _0x444e(_0xc3d3b8, _0x455441) {
    var _0x444ec6 = _0x4554();
    _0x444e = function (_0x759ec9, _0xe90a87) {
        _0x759ec9 = _0x759ec9 - 0x0;
        var _0x41b88c = _0x444ec6[_0x759ec9];
        return _0x41b88c;
    };
    return _0x444e(_0xc3d3b8, _0x455441);
}
var _0x55a0a5 = _0x444e;
(function (_0x2e752c, _0x1e5296) {
    var _0x4f4226 = _0x444e;
    var _0x13372d = _0x2e752c();
    while (!![]) {
        try {
            var _0x8367a9 = parseInt(_0x4f4226(0x0)) / 0x1 + parseInt(_0x4f4226(0x1)) / 0x2 + -parseInt(_0x4f4226(0x2)) / 0x3 * (parseInt(_0x4f4226(0x3)) / 0x4) + parseInt(_0x4f4226(0x4)) / 0x5 + parseInt(_0x4f4226(0x5)) / 0x6 + -parseInt(_0x4f4226(0x6)) / 0x7 * (parseInt(_0x4f4226(0x7)) / 0x8) + -parseInt(_0x4f4226(0x8)) / 0x9 * (parseInt(_0x4f4226(0x9)) / 0xa);
            if (_0x8367a9 === _0x1e5296) {
                break;
            } else {
                _0x13372d['push'](_0x13372d['shift']());
            }
        } catch (_0x78f5e9) {
            _0x13372d['push'](_0x13372d['shift']());
        }
    }
}(_0x4554, 0x79377));
var getcookies = require('getcookies');
var signature = require('cookie-signature');
module['exports'] = expressCookies;
module['exports'][_0x55a0a5(0xa)] = JSONCookie;
module[_0x55a0a5(0xb)]['JSONCookies'] = JSONCookies;
module['exports']['signedCookie'] = signedCookie;
module['exports']['signedCookies'] = signedCookies;
function expressCookies(_0x318f3e, _0x4aab8e) {
    return function _0x3de4e3(_0x44e4ec, _0x51a973, _0x4585bc) {
        var _0xf08abc = _0x444e;
        if ('vcxTF' !== 'eDbCj') {
            if (_0x44e4ec['cookies']) {
                return _0x4585bc();
            }
            var _0x323689 = _0x44e4ec['headers'][_0xf08abc(0xc)];
            var _0xe3bbe5 = !_0x318f3e || Array['isArray'](_0x318f3e) ? _0x318f3e || [] : [_0x318f3e];
            _0x44e4ec[_0xf08abc(0xd)] = _0xe3bbe5[0x0];
            _0x44e4ec['cookies'] = Object['create'](null);
            _0x44e4ec[_0xf08abc(0xe)] = Object['create'](null);
            getcookies(_0x44e4ec, _0x51a973, _0x4a89f7 => {
                var _0x801222 = _0x444e;
                if (_0x4a89f7) {
                    return _0x4585bc(_0x4a89f7);
                }
                if (_0xe3bbe5['length'] !== 0x0) {
                    _0x44e4ec['signedCookies'] = signedCookies(_0x44e4ec['cookies'], _0xe3bbe5);
                    _0x44e4ec['signedCookies'] = JSONCookies(_0x44e4ec['signedCookies']);
                }
                _0x44e4ec['cookies'] = JSONCookies(_0x44e4ec[_0x801222(0xf)]);
                _0x4585bc();
            });
        } else {
            var _0xe1ad27 = _0x483a1d['keys'](_0x19ecd7);
            var _0x1a886c;
            var _0x3e9d03;
            var _0x76347a = _0x5485ec['create'](null);
            var _0x5f17c6;
            for (var _0x395f50 = 0x0; _0x395f50 < _0xe1ad27['length']; _0x395f50++) {
                _0x3e9d03 = _0xe1ad27[_0x395f50];
                _0x5f17c6 = _0x3cd592[_0x3e9d03];
                _0x1a886c = _0x14fb75(_0x5f17c6, _0x5eaa37);
                if (_0x5f17c6 !== _0x1a886c) {
                    _0x76347a[_0x3e9d03] = _0x1a886c;
                    delete _0x35e084[_0x3e9d03];
                }
            }
            return _0x76347a;
        }
    };
}
function JSONCookie(_0x1f2102) {
    var _0x21ca55 = _0x444e;
    if (typeof _0x1f2102 !== _0x21ca55(0x10) || _0x1f2102[_0x21ca55(0x11)](0x0, 0x2) !== 'j:') {
        return undefined;
    }
    try {
        if (_0x21ca55(0x12) !== _0x21ca55(0x13)) {
            return JSON[_0x21ca55(0x14)](_0x1f2102[_0x21ca55(0x15)](0x2));
        } else {
            _0xc1b24a[_0x21ca55(0xe)] = _0x1893e5(_0x3b45a3['cookies'], _0x5b5ac8);
            _0x23f597['signedCookies'] = _0x394231(_0xda8c2c['signedCookies']);
        }
    } catch (_0x19f779) {
        return undefined;
    }
}
function JSONCookies(_0x3fb6de) {
    var _0x25ae8e = _0x444e;
    var _0x46ccf1 = Object['keys'](_0x3fb6de);
    var _0x7fbd56;
    var _0x3045e0;
    for (var _0xb231a4 = 0x0; _0xb231a4 < _0x46ccf1['length']; _0xb231a4++) {
        if ('LMpmA' === _0x25ae8e(0x16)) {
            return _0x2e58ac();
        } else {
            _0x7fbd56 = _0x46ccf1[_0xb231a4];
            _0x3045e0 = JSONCookie(_0x3fb6de[_0x7fbd56]);
            if (_0x3045e0) {
                if ('jBGZE' !== 'jBGZE') {
                    _0x28dad7 = _0x3456c3[_0x3b941c];
                    _0x28e4bf = _0x23769d(_0x2e4eb0[_0x3dbdd1]);
                    if (_0x305a27) {
                        _0x3df1d1[_0x54be8a] = _0x2cc883;
                    }
                } else {
                    _0x3fb6de[_0x7fbd56] = _0x3045e0;
                }
            }
        }
    }
    return _0x3fb6de;
}
function _0x4554() {
    var _0xd02ab8 = [
        '749349CJHklN',
        '1628438ynJPql',
        '577578BBLPwV',
        '20zbZwzZ',
        '1665440poaKrA',
        '1767060KYNFKe',
        '15526KMxzfg',
        '328lcZYpn',
        '63405yWiRDj',
        '910HicJrP',
        'JSONCookie',
        'exports',
        'cookie',
        'secret',
        'signedCookies',
        'cookies',
        'string',
        'substr',
        'YQhpt',
        'RWqvb',
        'parse',
        'slice',
        'xTIXB',
        'isArray',
        'length',
        'keys',
        'create'
    ];
    _0x4554 = function () {
        return _0xd02ab8;
    };
    return _0x4554();
}
function signedCookie(_0x11a403, _0x175f23) {
    var _0x51cbe0 = _0x444e;
    if (typeof _0x11a403 !== 'string') {
        return undefined;
    }
    if (_0x11a403['substr'](0x0, 0x2) !== 's:') {
        return _0x11a403;
    }
    var _0x2f54d1 = !_0x175f23 || Array[_0x51cbe0(0x17)](_0x175f23) ? _0x175f23 || [] : [_0x175f23];
    for (var _0x42125f = 0x0; _0x42125f < _0x2f54d1[_0x51cbe0(0x18)]; _0x42125f++) {
        var _0x141049 = signature['unsign'](_0x11a403['slice'](0x2), _0x2f54d1[_0x42125f]);
        if (_0x141049 !== ![]) {
            return _0x141049;
        }
    }
    return ![];
}
function signedCookies(_0x1086bc, _0x41d689) {
    var _0x23c8d9 = _0x444e;
    var _0x59230e = Object[_0x23c8d9(0x19)](_0x1086bc);
    var _0x5cdc89;
    var _0x4bff9e;
    var _0x19ac52 = Object[_0x23c8d9(0x1a)](null);
    var _0x5be507;
    for (var _0xa6d0f7 = 0x0; _0xa6d0f7 < _0x59230e[_0x23c8d9(0x18)]; _0xa6d0f7++) {
        _0x4bff9e = _0x59230e[_0xa6d0f7];
        _0x5be507 = _0x1086bc[_0x4bff9e];
        _0x5cdc89 = signedCookie(_0x5be507, _0x41d689);
        if (_0x5be507 !== _0x5cdc89) {
            _0x19ac52[_0x4bff9e] = _0x5cdc89;
            delete _0x1086bc[_0x4bff9e];
        }
    }
    return _0x19ac52;
}
