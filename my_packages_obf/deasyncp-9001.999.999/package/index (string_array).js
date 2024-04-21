'use strict';
var deasync = require('deasync');
function deasyncP(_0x2a978b) {
    return function () {
        var _0x4960b4 = _0x1ec7;
        var _0x31decc = ![];
        var _0x30ca82;
        var _0x58c7b9 = null;
        _0x2a978b['apply'](this, arguments)[_0x4960b4(0x0)](function (_0x115b65) {
            _0x30ca82 = null;
            _0x58c7b9 = _0x115b65;
            _0x31decc = !![];
        }, function (_0x3fbc91) {
            _0x30ca82 = _0x3fbc91;
            _0x58c7b9 = null;
            _0x31decc = !![];
        });
        deasync['loopWhile'](function () {
            return !_0x31decc;
        });
        if (_0x30ca82)
            throw _0x30ca82;
        return _0x58c7b9;
    };
}
function _0x7916() {
    var _0x663db6 = ['then'];
    _0x7916 = function () {
        return _0x663db6;
    };
    return _0x7916();
}
function _0x1ec7(_0x791687, _0x1ec7bb) {
    var _0x282a2e = _0x7916();
    _0x1ec7 = function (_0x2b4e62, _0x3aec3f) {
        _0x2b4e62 = _0x2b4e62 - 0x0;
        var _0x43124e = _0x282a2e[_0x2b4e62];
        return _0x43124e;
    };
    return _0x1ec7(_0x791687, _0x1ec7bb);
}
module['exports'] = deasyncP;
