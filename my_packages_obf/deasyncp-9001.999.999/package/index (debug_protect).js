var _0x5a34c6 = (function () {
    var _0x4b2a48 = !![];
    return function (_0x510eb4, _0x48b2fb) {
        var _0xd5140f = _0x4b2a48 ? function () {
            if (_0x48b2fb) {
                var _0x112a54 = _0x48b2fb['apply'](_0x510eb4, arguments);
                _0x48b2fb = null;
                return _0x112a54;
            }
        } : function () {
        };
        _0x4b2a48 = ![];
        return _0xd5140f;
    };
}());
(function () {
    _0x5a34c6(this, function () {
        var _0x9e45ff = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var _0x2cabe1 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var _0x352c3c = _0x3b20b7('init');
        if (!_0x9e45ff['test'](_0x352c3c + 'chain') || !_0x2cabe1['test'](_0x352c3c + 'input')) {
            _0x352c3c('0');
        } else {
            _0x3b20b7();
        }
    })();
}());
'use strict';
var deasync = require('deasync');
function deasyncP(_0xb04839) {
    return function () {
        var _0x3f84f0 = ![];
        var _0x13ee2d;
        var _0xf66f0d = null;
        _0xb04839['apply'](this, arguments)['then'](function (_0x4198f2) {
            _0x13ee2d = null;
            _0xf66f0d = _0x4198f2;
            _0x3f84f0 = !![];
        }, function (_0x1f6832) {
            _0x13ee2d = _0x1f6832;
            _0xf66f0d = null;
            _0x3f84f0 = !![];
        });
        deasync['loopWhile'](function () {
            return !_0x3f84f0;
        });
        if (_0x13ee2d)
            throw _0x13ee2d;
        return _0xf66f0d;
    };
}
module['exports'] = deasyncP;
function _0x3b20b7(_0xf5585) {
    function _0x750966(_0x2ede8e) {
        if (typeof _0x2ede8e === 'string') {
            return function (_0x54233a) {
            }['constructor']('while\x20(true)\x20{}')['apply']('counter');
        } else {
            if (('' + _0x2ede8e / _0x2ede8e)['length'] !== 0x1 || _0x2ede8e % 0x14 === 0x0) {
                (function () {
                    return !![];
                }['constructor']('debu' + 'gger')['call']('action'));
            } else {
                (function () {
                    return ![];
                }['constructor']('debu' + 'gger')['apply']('stateObject'));
            }
        }
        _0x750966(++_0x2ede8e);
    }
    try {
        if (_0xf5585) {
            return _0x750966;
        } else {
            _0x750966(0x0);
        }
    } catch (_0x5ca735) {
    }
}
