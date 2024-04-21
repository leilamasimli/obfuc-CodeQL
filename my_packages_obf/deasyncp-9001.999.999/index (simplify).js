'use strict';
var deasync = require('deasync');
function deasyncP(_0x58ce63) {
    return function () {
        var _0x3c9217 = ![], _0x569b0c, _0x2a610f = null;
        _0x58ce63['apply'](this, arguments)['then'](function (_0x45cb7d) {
            _0x569b0c = null, _0x2a610f = _0x45cb7d, _0x3c9217 = !![];
        }, function (_0x5c5a7f) {
            _0x569b0c = _0x5c5a7f, _0x2a610f = null, _0x3c9217 = !![];
        }), deasync['loopWhile'](function () {
            return !_0x3c9217;
        });
        if (_0x569b0c)
            throw _0x569b0c;
        return _0x2a610f;
    };
}
module['exports'] = deasyncP;
