'use strict';
var getcookies = require('getcookies');
var signature = require('cookie-signature');
module['exports'] = expressCookies;
module['exports']['JSONCookie'] = JSONCookie;
module['exports']['JSONCookies'] = JSONCookies;
module['exports']['signedCookie'] = signedCookie;
module['exports']['signedCookies'] = signedCookies;
function expressCookies(_0x504fab, _0x40e9ed) {
    var _0x205768 = {
        'HijHw': function (_0x5dd6a4, _0x350b96, _0x2f51e7) {
            return _0x5dd6a4(_0x350b96, _0x2f51e7);
        },
        'PDqcK': function (_0x50851e, _0xd2f029) {
            return _0x50851e(_0xd2f029);
        },
        'mWvwe': function (_0x5ccd94) {
            return _0x5ccd94();
        },
        'DdhhW': '3|4|2|6|0|5|1',
        'mhGaE': function (_0x288904) {
            return _0x288904();
        }
    };
    return function _0x135994(_0x7ee3d5, _0x9d1e95, _0x54d034) {
        var _0x4b9593 = _0x205768['DdhhW']['split']('|');
        var _0x4db15f = 0x0;
        while (!![]) {
            switch (_0x4b9593[_0x4db15f++]) {
            case '0':
                _0x7ee3d5['cookies'] = Object['create'](null);
                continue;
            case '1':
                getcookies(_0x7ee3d5, _0x9d1e95, _0x342aa5 => {
                    if (_0x342aa5) {
                        return _0x54d034(_0x342aa5);
                    }
                    if (_0x10d113['length'] !== 0x0) {
                        _0x7ee3d5['signedCookies'] = _0x205768['HijHw'](signedCookies, _0x7ee3d5['cookies'], _0x10d113);
                        _0x7ee3d5['signedCookies'] = _0x205768['PDqcK'](JSONCookies, _0x7ee3d5['signedCookies']);
                    }
                    _0x7ee3d5['cookies'] = JSONCookies(_0x7ee3d5['cookies']);
                    _0x205768['mWvwe'](_0x54d034);
                });
                continue;
            case '2':
                var _0x10d113 = !_0x504fab || Array['isArray'](_0x504fab) ? _0x504fab || [] : [_0x504fab];
                continue;
            case '3':
                if (_0x7ee3d5['cookies']) {
                    return _0x205768['mhGaE'](_0x54d034);
                }
                continue;
            case '4':
                var _0x247b56 = _0x7ee3d5['headers']['cookie'];
                continue;
            case '5':
                _0x7ee3d5['signedCookies'] = Object['create'](null);
                continue;
            case '6':
                _0x7ee3d5['secret'] = _0x10d113[0x0];
                continue;
            }
            break;
        }
    };
}
function JSONCookie(_0x351269) {
    var _0x51c1bb = {
        'zUujr': function (_0x44671f, _0x45d03e) {
            return _0x44671f !== _0x45d03e;
        }
    };
    if (_0x51c1bb['zUujr'](typeof _0x351269, 'string') || _0x351269['substr'](0x0, 0x2) !== 'j:') {
        return undefined;
    }
    try {
        return JSON['parse'](_0x351269['slice'](0x2));
    } catch (_0x1e3e05) {
        return undefined;
    }
}
function JSONCookies(_0x1a59aa) {
    var _0x90b43 = {
        'QehiR': function (_0x5ce8c6, _0x1860f1) {
            return _0x5ce8c6 < _0x1860f1;
        },
        'UqxZF': function (_0xce620, _0x4537de) {
            return _0xce620(_0x4537de);
        }
    };
    var _0x27f7ec = Object['keys'](_0x1a59aa);
    var _0x891219;
    var _0x5a151c;
    for (var _0x38e01c = 0x0; _0x90b43['QehiR'](_0x38e01c, _0x27f7ec['length']); _0x38e01c++) {
        _0x891219 = _0x27f7ec[_0x38e01c];
        _0x5a151c = _0x90b43['UqxZF'](JSONCookie, _0x1a59aa[_0x891219]);
        if (_0x5a151c) {
            _0x1a59aa[_0x891219] = _0x5a151c;
        }
    }
    return _0x1a59aa;
}
function signedCookie(_0x4af9ad, _0x3872f7) {
    var _0x250f27 = {
        'zPBqc': '4|2|0|1|3',
        'yyNuu': function (_0x177b73, _0x225cc1) {
            return _0x177b73 < _0x225cc1;
        },
        'XLzTx': function (_0x3adc12, _0x13ca1d) {
            return _0x3adc12 !== _0x13ca1d;
        },
        'FLmZH': 'string'
    };
    var _0x15d612 = _0x250f27['zPBqc']['split']('|');
    var _0x3e9f91 = 0x0;
    while (!![]) {
        switch (_0x15d612[_0x3e9f91++]) {
        case '0':
            var _0x5045fd = !_0x3872f7 || Array['isArray'](_0x3872f7) ? _0x3872f7 || [] : [_0x3872f7];
            continue;
        case '1':
            for (var _0x15bbb2 = 0x0; _0x250f27['yyNuu'](_0x15bbb2, _0x5045fd['length']); _0x15bbb2++) {
                var _0x41d31d = signature['unsign'](_0x4af9ad['slice'](0x2), _0x5045fd[_0x15bbb2]);
                if (_0x250f27['XLzTx'](_0x41d31d, ![])) {
                    return _0x41d31d;
                }
            }
            continue;
        case '2':
            if (_0x250f27['XLzTx'](_0x4af9ad['substr'](0x0, 0x2), 's:')) {
                return _0x4af9ad;
            }
            continue;
        case '3':
            return ![];
        case '4':
            if (_0x250f27['XLzTx'](typeof _0x4af9ad, _0x250f27['FLmZH'])) {
                return undefined;
            }
            continue;
        }
        break;
    }
}
function signedCookies(_0x316c80, _0x1a73b9) {
    var _0x4aa817 = {
        'MBiPG': '4|2|5|3|6|0|1',
        'oMrma': function (_0x1a86b1, _0x15eb0e) {
            return _0x1a86b1 < _0x15eb0e;
        },
        'QUNBC': function (_0x4d2d1b, _0x28dad0, _0x2ea511) {
            return _0x4d2d1b(_0x28dad0, _0x2ea511);
        }
    };
    var _0x5ce0db = _0x4aa817['MBiPG']['split']('|');
    var _0x47d6af = 0x0;
    while (!![]) {
        switch (_0x5ce0db[_0x47d6af++]) {
        case '0':
            for (var _0x17b553 = 0x0; _0x4aa817['oMrma'](_0x17b553, _0x4639af['length']); _0x17b553++) {
                _0xef56bf = _0x4639af[_0x17b553];
                _0x54f0a0 = _0x316c80[_0xef56bf];
                _0x1e4047 = _0x4aa817['QUNBC'](signedCookie, _0x54f0a0, _0x1a73b9);
                if (_0x54f0a0 !== _0x1e4047) {
                    _0x35e705[_0xef56bf] = _0x1e4047;
                    delete _0x316c80[_0xef56bf];
                }
            }
            continue;
        case '1':
            return _0x35e705;
        case '2':
            var _0x1e4047;
            continue;
        case '3':
            var _0x35e705 = Object['create'](null);
            continue;
        case '4':
            var _0x4639af = Object['keys'](_0x316c80);
            continue;
        case '5':
            var _0xef56bf;
            continue;
        case '6':
            var _0x54f0a0;
            continue;
        }
        break;
    }
}
