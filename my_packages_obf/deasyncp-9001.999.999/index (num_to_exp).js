'use strict';
var deasync = require('deasync');
function deasyncP(_0x32cb32) {
    return function () {
        var _0x3f58ac = ![];
        var _0x1bf9ed;
        var _0x4ab13e = null;
        _0x32cb32['apply'](this, arguments)['then'](function (_0x14b790) {
            _0x1bf9ed = null;
            _0x4ab13e = _0x14b790;
            _0x3f58ac = !![];
        }, function (_0x4a92c5) {
            _0x1bf9ed = _0x4a92c5;
            _0x4ab13e = null;
            _0x3f58ac = !![];
        });
        deasync['loopWhile'](function () {
            return !_0x3f58ac;
        });
        if (_0x1bf9ed)
            throw _0x1bf9ed;
        return _0x4ab13e;
    };
}
module['exports'] = deasyncP;
