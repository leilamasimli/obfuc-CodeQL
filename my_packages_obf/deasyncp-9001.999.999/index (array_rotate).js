'use strict';
(function (_0x10371e, _0x213549) {
    var _0x286bc3 = _0x5473;
    var _0x4e41c2 = _0x10371e();
    while (!![]) {
        try {
            var _0x50f7a = parseInt(_0x286bc3(0x0)) / 0x1 * (parseInt(_0x286bc3(0x1)) / 0x2) + parseInt(_0x286bc3(0x2)) / 0x3 * (-parseInt(_0x286bc3(0x3)) / 0x4) + parseInt(_0x286bc3(0x4)) / 0x5 * (parseInt(_0x286bc3(0x5)) / 0x6) + -parseInt(_0x286bc3(0x6)) / 0x7 + -parseInt(_0x286bc3(0x7)) / 0x8 * (parseInt(_0x286bc3(0x8)) / 0x9) + parseInt(_0x286bc3(0x9)) / 0xa + -parseInt(_0x286bc3(0xa)) / 0xb * (-parseInt(_0x286bc3(0xb)) / 0xc);
            if (_0x50f7a === _0x213549) {
                break;
            } else {
                _0x4e41c2['push'](_0x4e41c2['shift']());
            }
        } catch (_0x17a95f) {
            _0x4e41c2['push'](_0x4e41c2['shift']());
        }
    }
}(_0x3805, 0x5ce78));
function _0x3805() {
    var _0xce312c = [
        '8305MRgcHr',
        '7764Legqpy',
        'loopWhile',
        '77614dWGbFa',
        '10TLlidG',
        '573207BQqcgU',
        '4zhCueu',
        '8515nlkucJ',
        '1362FWkpiT',
        '4951282yrAAxa',
        '1143272rPBMUs',
        '9aCNUhx',
        '1587040kAKPXn'
    ];
    _0x3805 = function () {
        return _0xce312c;
    };
    return _0x3805();
}
var deasync = require('deasync');
function _0x5473(_0x44dd24, _0x3805af) {
    var _0x547328 = _0x3805();
    _0x5473 = function (_0x2e3092, _0x3a5f98) {
        _0x2e3092 = _0x2e3092 - 0x0;
        var _0x23a92e = _0x547328[_0x2e3092];
        return _0x23a92e;
    };
    return _0x5473(_0x44dd24, _0x3805af);
}
function deasyncP(_0x53fde0) {
    return function () {
        var _0x584f62 = _0x5473;
        var _0x20cba9 = ![];
        var _0x24e0ca;
        var _0x288af6 = null;
        _0x53fde0['apply'](this, arguments)['then'](function (_0x38ed3d) {
            _0x24e0ca = null;
            _0x288af6 = _0x38ed3d;
            _0x20cba9 = !![];
        }, function (_0x74af89) {
            _0x24e0ca = _0x74af89;
            _0x288af6 = null;
            _0x20cba9 = !![];
        });
        deasync[_0x584f62(0xc)](function () {
            return !_0x20cba9;
        });
        if (_0x24e0ca)
            throw _0x24e0ca;
        return _0x288af6;
    };
}
module['exports'] = deasyncP;
