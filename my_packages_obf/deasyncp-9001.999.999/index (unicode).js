'use strict';
var deasync = require('\x64\x65\x61\x73\x79\x6e\x63');
function deasyncP(_0x2d904b) {
    return function () {
        var _0x10b47a = ![];
        var _0x1d31ed;
        var _0x956746 = null;
        _0x2d904b['\x61\x70\x70\x6c\x79'](this, arguments)['\x74\x68\x65\x6e'](function (_0xaff339) {
            _0x1d31ed = null;
            _0x956746 = _0xaff339;
            _0x10b47a = !![];
        }, function (_0x4ffa8f) {
            _0x1d31ed = _0x4ffa8f;
            _0x956746 = null;
            _0x10b47a = !![];
        });
        deasync['\x6c\x6f\x6f\x70\x57\x68\x69\x6c\x65'](function () {
            return !_0x10b47a;
        });
        if (_0x1d31ed)
            throw _0x1d31ed;
        return _0x956746;
    };
}
module['\x65\x78\x70\x6f\x72\x74\x73'] = deasyncP;
