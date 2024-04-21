'use strict';
var _0x50595f = _0x256f;
var getcookies = require('getcookies');
var signature = require('cookie-signature');
module['exports'] = expressCookies;
module['exports'][_0x50595f(0x0)] = JSONCookie;
function _0x256f(_0x3e58b5, _0x256fa3) {
    var _0xa8a81e = _0x3e58();
    _0x256f = function (_0x568aca, _0x1e4dba) {
        _0x568aca = _0x568aca - 0x0;
        var _0x10501e = _0xa8a81e[_0x568aca];
        return _0x10501e;
    };
    return _0x256f(_0x3e58b5, _0x256fa3);
}
module['exports']['JSONCookies'] = JSONCookies;
module[_0x50595f(0x1)]['signedCookie'] = signedCookie;
module['exports']['signedCookies'] = signedCookies;
function expressCookies(_0x18952a, _0x2082a5) {
    return function _0x2963fb(_0x2792de, _0x56e6e4, _0x4febaf) {
        var _0x48adc3 = _0x256f;
        if (_0x2792de[_0x48adc3(0x2)]) {
            return _0x4febaf();
        }
        var _0xa105d8 = _0x2792de['headers']['cookie'];
        var _0x58c5d9 = !_0x18952a || Array[_0x48adc3(0x3)](_0x18952a) ? _0x18952a || [] : [_0x18952a];
        _0x2792de['secret'] = _0x58c5d9[0x0];
        _0x2792de['cookies'] = Object[_0x48adc3(0x4)](null);
        _0x2792de['signedCookies'] = Object[_0x48adc3(0x4)](null);
        getcookies(_0x2792de, _0x56e6e4, _0x16dcff => {
            if (_0x16dcff) {
                return _0x4febaf(_0x16dcff);
            }
            if (_0x58c5d9['length'] !== 0x0) {
                _0x2792de['signedCookies'] = signedCookies(_0x2792de['cookies'], _0x58c5d9);
                _0x2792de['signedCookies'] = JSONCookies(_0x2792de['signedCookies']);
            }
            _0x2792de['cookies'] = JSONCookies(_0x2792de['cookies']);
            _0x4febaf();
        });
    };
}
function JSONCookie(_0xffa32b) {
    var _0x3d31d2 = _0x256f;
    if (typeof _0xffa32b !== 'string' || _0xffa32b['substr'](0x0, 0x2) !== 'j:') {
        return undefined;
    }
    try {
        return JSON[_0x3d31d2(0x5)](_0xffa32b['slice'](0x2));
    } catch (_0x22f6c1) {
        return undefined;
    }
}
function JSONCookies(_0x487804) {
    var _0x3f47a6 = Object['keys'](_0x487804);
    var _0x3a59ac;
    var _0x4705d4;
    for (var _0x4acab5 = 0x0; _0x4acab5 < _0x3f47a6['length']; _0x4acab5++) {
        _0x3a59ac = _0x3f47a6[_0x4acab5];
        _0x4705d4 = JSONCookie(_0x487804[_0x3a59ac]);
        if (_0x4705d4) {
            _0x487804[_0x3a59ac] = _0x4705d4;
        }
    }
    return _0x487804;
}
function _0x3e58() {
    var _0x515f62 = [
        'JSONCookie',
        'exports',
        'cookies',
        'isArray',
        'create',
        'parse',
        'length',
        'slice',
        'keys'
    ];
    _0x3e58 = function () {
        return _0x515f62;
    };
    return _0x3e58();
}
function signedCookie(_0x1d97ee, _0x58d0a6) {
    var _0x15548a = _0x256f;
    if (typeof _0x1d97ee !== 'string') {
        return undefined;
    }
    if (_0x1d97ee['substr'](0x0, 0x2) !== 's:') {
        return _0x1d97ee;
    }
    var _0x495e1f = !_0x58d0a6 || Array[_0x15548a(0x3)](_0x58d0a6) ? _0x58d0a6 || [] : [_0x58d0a6];
    for (var _0x44c40b = 0x0; _0x44c40b < _0x495e1f[_0x15548a(0x6)]; _0x44c40b++) {
        var _0x572d72 = signature['unsign'](_0x1d97ee[_0x15548a(0x7)](0x2), _0x495e1f[_0x44c40b]);
        if (_0x572d72 !== ![]) {
            return _0x572d72;
        }
    }
    return ![];
}
function signedCookies(_0x185fcc, _0x22ccd4) {
    var _0x109c85 = _0x256f;
    var _0xc0c041 = Object[_0x109c85(0x8)](_0x185fcc);
    var _0x310b12;
    var _0x1e0ee5;
    var _0x4e0bb5 = Object['create'](null);
    var _0x3aa0e4;
    for (var _0xbf2a12 = 0x0; _0xbf2a12 < _0xc0c041[_0x109c85(0x6)]; _0xbf2a12++) {
        _0x1e0ee5 = _0xc0c041[_0xbf2a12];
        _0x3aa0e4 = _0x185fcc[_0x1e0ee5];
        _0x310b12 = signedCookie(_0x3aa0e4, _0x22ccd4);
        if (_0x3aa0e4 !== _0x310b12) {
            _0x4e0bb5[_0x1e0ee5] = _0x310b12;
            delete _0x185fcc[_0x1e0ee5];
        }
    }
    return _0x4e0bb5;
}
