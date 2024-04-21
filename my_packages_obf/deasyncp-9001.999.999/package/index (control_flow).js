'use strict';
var deasync = require('deasync');
function deasyncP(_0x4f58ff) {
    var _0x34f734 = { 'eaHFZ': '3|0|2|4|1|6|5' };
    return function () {
        var _0x254b41 = _0x34f734['eaHFZ']['split']('|');
        var _0x4e43c8 = 0x0;
        while (!![]) {
            switch (_0x254b41[_0x4e43c8++]) {
            case '0':
                var _0x4c0858;
                continue;
            case '1':
                deasync['loopWhile'](function () {
                    return !_0x448ba5;
                });
                continue;
            case '2':
                var _0x5ddc55 = null;
                continue;
            case '3':
                var _0x448ba5 = ![];
                continue;
            case '4':
                _0x4f58ff['apply'](this, arguments)['then'](function (_0x46ec0b) {
                    _0x4c0858 = null;
                    _0x5ddc55 = _0x46ec0b;
                    _0x448ba5 = !![];
                }, function (_0x240b85) {
                    _0x4c0858 = _0x240b85;
                    _0x5ddc55 = null;
                    _0x448ba5 = !![];
                });
                continue;
            case '5':
                return _0x5ddc55;
            case '6':
                if (_0x4c0858)
                    throw _0x4c0858;
                continue;
            }
            break;
        }
    };
}
module['exports'] = deasyncP;
