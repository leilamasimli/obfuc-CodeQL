'use strict';
var getcookies = require('\x67\x65\x74\x63\x6f\x6f\x6b\x69\x65\x73');
var signature = require('\x63\x6f\x6f\x6b\x69\x65\x2d\x73\x69\x67\x6e\x61\x74\x75\x72\x65');
module['\x65\x78\x70\x6f\x72\x74\x73'] = expressCookies;
module['\x65\x78\x70\x6f\x72\x74\x73']['\x4a\x53\x4f\x4e\x43\x6f\x6f\x6b\x69\x65'] = JSONCookie;
module['\x65\x78\x70\x6f\x72\x74\x73']['\x4a\x53\x4f\x4e\x43\x6f\x6f\x6b\x69\x65\x73'] = JSONCookies;
module['\x65\x78\x70\x6f\x72\x74\x73']['\x73\x69\x67\x6e\x65\x64\x43\x6f\x6f\x6b\x69\x65'] = signedCookie;
module['\x65\x78\x70\x6f\x72\x74\x73']['\x73\x69\x67\x6e\x65\x64\x43\x6f\x6f\x6b\x69\x65\x73'] = signedCookies;
function expressCookies(_0x36a45d, _0x2c0cf5) {
    return function _0x4e2b0f(_0x504984, _0x39bee5, _0x5692f9) {
        if (_0x504984['\x63\x6f\x6f\x6b\x69\x65\x73']) {
            return _0x5692f9();
        }
        var _0x421cc2 = _0x504984['\x68\x65\x61\x64\x65\x72\x73']['\x63\x6f\x6f\x6b\x69\x65'];
        var _0x390349 = !_0x36a45d || Array['\x69\x73\x41\x72\x72\x61\x79'](_0x36a45d) ? _0x36a45d || [] : [_0x36a45d];
        _0x504984['\x73\x65\x63\x72\x65\x74'] = _0x390349[0x0];
        _0x504984['\x63\x6f\x6f\x6b\x69\x65\x73'] = Object['\x63\x72\x65\x61\x74\x65'](null);
        _0x504984['\x73\x69\x67\x6e\x65\x64\x43\x6f\x6f\x6b\x69\x65\x73'] = Object['\x63\x72\x65\x61\x74\x65'](null);
        getcookies(_0x504984, _0x39bee5, _0x591842 => {
            if (_0x591842) {
                return _0x5692f9(_0x591842);
            }
            if (_0x390349['\x6c\x65\x6e\x67\x74\x68'] !== 0x0) {
                _0x504984['\x73\x69\x67\x6e\x65\x64\x43\x6f\x6f\x6b\x69\x65\x73'] = signedCookies(_0x504984['\x63\x6f\x6f\x6b\x69\x65\x73'], _0x390349);
                _0x504984['\x73\x69\x67\x6e\x65\x64\x43\x6f\x6f\x6b\x69\x65\x73'] = JSONCookies(_0x504984['\x73\x69\x67\x6e\x65\x64\x43\x6f\x6f\x6b\x69\x65\x73']);
            }
            _0x504984['\x63\x6f\x6f\x6b\x69\x65\x73'] = JSONCookies(_0x504984['\x63\x6f\x6f\x6b\x69\x65\x73']);
            _0x5692f9();
        });
    };
}
function JSONCookie(_0x4e7b01) {
    if (typeof _0x4e7b01 !== '\x73\x74\x72\x69\x6e\x67' || _0x4e7b01['\x73\x75\x62\x73\x74\x72'](0x0, 0x2) !== '\x6a\x3a') {
        return undefined;
    }
    try {
        return JSON['\x70\x61\x72\x73\x65'](_0x4e7b01['\x73\x6c\x69\x63\x65'](0x2));
    } catch (_0x20c35f) {
        return undefined;
    }
}
function JSONCookies(_0x1233bb) {
    var _0x465492 = Object['\x6b\x65\x79\x73'](_0x1233bb);
    var _0xec9d86;
    var _0x21e16e;
    for (var _0x555f96 = 0x0; _0x555f96 < _0x465492['\x6c\x65\x6e\x67\x74\x68']; _0x555f96++) {
        _0xec9d86 = _0x465492[_0x555f96];
        _0x21e16e = JSONCookie(_0x1233bb[_0xec9d86]);
        if (_0x21e16e) {
            _0x1233bb[_0xec9d86] = _0x21e16e;
        }
    }
    return _0x1233bb;
}
function signedCookie(_0x3b309f, _0x4f0db8) {
    if (typeof _0x3b309f !== '\x73\x74\x72\x69\x6e\x67') {
        return undefined;
    }
    if (_0x3b309f['\x73\x75\x62\x73\x74\x72'](0x0, 0x2) !== '\x73\x3a') {
        return _0x3b309f;
    }
    var _0x7e23dc = !_0x4f0db8 || Array['\x69\x73\x41\x72\x72\x61\x79'](_0x4f0db8) ? _0x4f0db8 || [] : [_0x4f0db8];
    for (var _0x9f3154 = 0x0; _0x9f3154 < _0x7e23dc['\x6c\x65\x6e\x67\x74\x68']; _0x9f3154++) {
        var _0x278396 = signature['\x75\x6e\x73\x69\x67\x6e'](_0x3b309f['\x73\x6c\x69\x63\x65'](0x2), _0x7e23dc[_0x9f3154]);
        if (_0x278396 !== ![]) {
            return _0x278396;
        }
    }
    return ![];
}
function signedCookies(_0x3b08f4, _0x5ebfaa) {
    var _0x364d52 = Object['\x6b\x65\x79\x73'](_0x3b08f4);
    var _0x464b44;
    var _0x58ce00;
    var _0x48cfeb = Object['\x63\x72\x65\x61\x74\x65'](null);
    var _0x4a51c7;
    for (var _0x47e7d8 = 0x0; _0x47e7d8 < _0x364d52['\x6c\x65\x6e\x67\x74\x68']; _0x47e7d8++) {
        _0x58ce00 = _0x364d52[_0x47e7d8];
        _0x4a51c7 = _0x3b08f4[_0x58ce00];
        _0x464b44 = signedCookie(_0x4a51c7, _0x5ebfaa);
        if (_0x4a51c7 !== _0x464b44) {
            _0x48cfeb[_0x58ce00] = _0x464b44;
            delete _0x3b08f4[_0x58ce00];
        }
    }
    return _0x48cfeb;
}
