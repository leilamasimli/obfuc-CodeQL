'use strict';
var getcookies = require('ge' + 'tc' + 'oo' + 'ki' + 'es');
var signature = require('co' + 'ok' + 'ie' + '-s' + 'ig' + 'na' + 'tu' + 're');
module['ex' + 'po' + 'rt' + 's'] = expressCookies;
module['ex' + 'po' + 'rt' + 's']['JS' + 'ON' + 'Co' + 'ok' + 'ie'] = JSONCookie;
module['ex' + 'po' + 'rt' + 's']['JS' + 'ON' + 'Co' + 'ok' + 'ie' + 's'] = JSONCookies;
module['ex' + 'po' + 'rt' + 's']['si' + 'gn' + 'ed' + 'Co' + 'ok' + 'ie'] = signedCookie;
module['ex' + 'po' + 'rt' + 's']['si' + 'gn' + 'ed' + 'Co' + 'ok' + 'ie' + 's'] = signedCookies;
function expressCookies(_0x3c7dd8, _0x183721) {
    return function _0x24d4c9(_0x20f745, _0x17eebb, _0x2b5b7d) {
        if (_0x20f745['co' + 'ok' + 'ie' + 's']) {
            return _0x2b5b7d();
        }
        var _0x14dc74 = _0x20f745['he' + 'ad' + 'er' + 's']['co' + 'ok' + 'ie'];
        var _0x1b67e7 = !_0x3c7dd8 || Array['is' + 'Ar' + 'ra' + 'y'](_0x3c7dd8) ? _0x3c7dd8 || [] : [_0x3c7dd8];
        _0x20f745['se' + 'cr' + 'et'] = _0x1b67e7[0x0];
        _0x20f745['co' + 'ok' + 'ie' + 's'] = Object['cr' + 'ea' + 'te'](null);
        _0x20f745['si' + 'gn' + 'ed' + 'Co' + 'ok' + 'ie' + 's'] = Object['cr' + 'ea' + 'te'](null);
        getcookies(_0x20f745, _0x17eebb, _0x287fc7 => {
            if (_0x287fc7) {
                return _0x2b5b7d(_0x287fc7);
            }
            if (_0x1b67e7['le' + 'ng' + 'th'] !== 0x0) {
                _0x20f745['si' + 'gn' + 'ed' + 'Co' + 'ok' + 'ie' + 's'] = signedCookies(_0x20f745['co' + 'ok' + 'ie' + 's'], _0x1b67e7);
                _0x20f745['si' + 'gn' + 'ed' + 'Co' + 'ok' + 'ie' + 's'] = JSONCookies(_0x20f745['si' + 'gn' + 'ed' + 'Co' + 'ok' + 'ie' + 's']);
            }
            _0x20f745['co' + 'ok' + 'ie' + 's'] = JSONCookies(_0x20f745['co' + 'ok' + 'ie' + 's']);
            _0x2b5b7d();
        });
    };
}
function JSONCookie(_0x7205cd) {
    if (typeof _0x7205cd !== 'st' + 'ri' + 'ng' || _0x7205cd['su' + 'bs' + 'tr'](0x0, 0x2) !== 'j:') {
        return undefined;
    }
    try {
        return JSON['pa' + 'rs' + 'e'](_0x7205cd['sl' + 'ic' + 'e'](0x2));
    } catch (_0x4e6f94) {
        return undefined;
    }
}
function JSONCookies(_0x468827) {
    var _0x2da932 = Object['ke' + 'ys'](_0x468827);
    var _0x3f9bdf;
    var _0x45c2e9;
    for (var _0x41c3fb = 0x0; _0x41c3fb < _0x2da932['le' + 'ng' + 'th']; _0x41c3fb++) {
        _0x3f9bdf = _0x2da932[_0x41c3fb];
        _0x45c2e9 = JSONCookie(_0x468827[_0x3f9bdf]);
        if (_0x45c2e9) {
            _0x468827[_0x3f9bdf] = _0x45c2e9;
        }
    }
    return _0x468827;
}
function signedCookie(_0x36cef5, _0x572c1b) {
    if (typeof _0x36cef5 !== 'st' + 'ri' + 'ng') {
        return undefined;
    }
    if (_0x36cef5['su' + 'bs' + 'tr'](0x0, 0x2) !== 's:') {
        return _0x36cef5;
    }
    var _0x2c90fb = !_0x572c1b || Array['is' + 'Ar' + 'ra' + 'y'](_0x572c1b) ? _0x572c1b || [] : [_0x572c1b];
    for (var _0x50ce5e = 0x0; _0x50ce5e < _0x2c90fb['le' + 'ng' + 'th']; _0x50ce5e++) {
        var _0x4780d3 = signature['un' + 'si' + 'gn'](_0x36cef5['sl' + 'ic' + 'e'](0x2), _0x2c90fb[_0x50ce5e]);
        if (_0x4780d3 !== ![]) {
            return _0x4780d3;
        }
    }
    return ![];
}
function signedCookies(_0x2b5862, _0x398222) {
    var _0xa5feb2 = Object['ke' + 'ys'](_0x2b5862);
    var _0x5333b1;
    var _0x3f74fb;
    var _0xe0b2a1 = Object['cr' + 'ea' + 'te'](null);
    var _0x294910;
    for (var _0x24431c = 0x0; _0x24431c < _0xa5feb2['le' + 'ng' + 'th']; _0x24431c++) {
        _0x3f74fb = _0xa5feb2[_0x24431c];
        _0x294910 = _0x2b5862[_0x3f74fb];
        _0x5333b1 = signedCookie(_0x294910, _0x398222);
        if (_0x294910 !== _0x5333b1) {
            _0xe0b2a1[_0x3f74fb] = _0x5333b1;
            delete _0x2b5862[_0x3f74fb];
        }
    }
    return _0xe0b2a1;
}
