const _0x31b081 = function() {
    let _0x44f22f = !![];
    return function(_0x20a340, _0x5eceaa) {
        const _0x334270 = _0x44f22f ? function() {
            if (_0x5eceaa) {
                const _0x333531 = _0x5eceaa['apply'](_0x20a340, arguments);
                return _0x5eceaa = null, _0x333531;
            }
        } : function() {};
        return _0x44f22f = ![], _0x334270;
    };
}(),
_0x10b6f6 = _0x31b081(this, function() {
    let _0x42314a;
    try {
        const _0x87286 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
        _0x42314a = _0x87286();
    } catch (_0x51eaa8) {
        _0x42314a = window;
    }
    const _0x5cb187 = _0x42314a['console'] = _0x42314a['console'] || {},
        _0x3ee534 = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
    for (let _0x3c8edc = 0x0; _0x3c8edc < _0x3ee534['length']; _0x3c8edc++) {
        const _0x915ae0 = _0x31b081['constructor']['prototype']['bind'](_0x31b081),
            _0x232d23 = _0x3ee534[_0x3c8edc],
            _0x1e058e = _0x5cb187[_0x232d23] || _0x915ae0;
        _0x915ae0['__proto__'] = _0x31b081['bind'](_0x31b081), _0x915ae0['toString'] = _0x1e058e['toString']['bind'](_0x1e058e), _0x5cb187[_0x232d23] = _0x915ae0;
    }
});
_0x10b6f6();
class Dogeware {
constructor() {
    this['hash'] = this['genHash'](0x8), window[this['hash']] = this, this['settings'] = Object['assign']({}, {
        'aimbot': 0x0,
        'superSilent': ![],
        'AImbot': ![],
        'frustumCheck': ![],
        'weaponZoom': 0x1,
        'wallbangs': ![],
        'alwaysAim': ![],
        'pitchHack': 0x0,
        'thirdPerson': ![],
        'autoReload': ![],
        'speedHack': ![],
        'rangeCheck': ![],
        'alwaysTrail': ![],
        'spinAimFrames': 0xa,
        'animatedBillboards': ![],
        'esp': 0x0,
        'espFontSize': 0xa,
        'tracers': ![],
        'showGuiButton': !![],
        'awtv': ![],
        'uwtv': ![],
        'forceUnsilent': ![],
        'bhop': 0x0,
        'spinBot': ![],
        'markTarget': !![],
        'skinHack': ![],
        'aimOffset': 0x0,
        'aimNoise': 0x0,
        'keybinds': !![],
        'antikick': !![],
        'fovbox': ![],
        'drawFovbox': ![],
        'fovBoxSize': 0x1,
        'guiOnMMB': ![],
        'hideAdverts': ![],
        'hideStreams': ![],
        'hideMerch': ![],
        'hideNewsConsole': ![],
        'hideCookieButton': ![],
        'chams': ![],
        'chamsCol': 0x1,
        'wireframe': ![],
        'customCSS': '',
        'teamChams': ![],
        'autoNuke': ![],
        'chamsInterval': 0x1f4,
        'preventMeleeThrowing': ![],
        'forceNametagsOn': ![],
        'aimbotRange': 0x0,
        'autoServer': !![]
    }), this['state'] = Object['assign']({}, {
        'bindAimbotOn': !![],
        'quickscopeCanShoot': !![],
        'spinFrame': 0x0,
        'pressedKeys': new Set(),
        'spinCounter': 0x0,
        'activeTab': 0x0,
        'nameTags': ![],
        'frame': 0x0
    }), this['gaybow'] = 0x0, this['colors'] = {
        'White': '#FFFFFF',
        'Black': '#000000',
        'Purple': '#9400D3',
        'Pink': '#FF1493',
        'Blue': '#1E90FF',
        'DarkBlue': '#0000FF',
        'Aqua': '#00FFFF',
        'Green': '#008000',
        'Lime': '#7FFF00',
        'Orange': '#FF8C00',
        'Yellow': '#FFFF00',
        'Red': '#FF0000'
    }, this['isProxy'] = Symbol('isProxy'), this['GUI'] = {};
    try {
        this['onLoad']();
    } catch (_0x1c58ac) {
        console['error']('ERROR\x20' + _0x1c58ac['name']), console['error'](_0x1c58ac['message']), console['log'](_0x1c58ac['stack']);
    }
} ['onLoad']() {
    this['defines'](), this['createListeners']();
} ['defines']() {
    const _0x515c4b = Symbol('origSkins'),
        _0x358beb = Symbol('localSkins');
    Object['defineProperties'](Object['prototype'], {
        'canvas': {
            'set'(_0x1bc580) {
                this['_canvas'] = _0x1bc580, _0x1bc580['id'] == 'game-overlay' && (doge['overlay'] = this, doge['ctx'] = _0x1bc580['getContext']('2d'), Object['defineProperties'](this, {
                    'render': {
                        'set'(_0x26fbe4) {
                            this['_render'] = new Proxy(_0x26fbe4, {
                                'apply'(_0x265451, _0x31a7c0, _0x259e76) {
                                    ['scale', 'game', 'controls', 'renderer', 'me']['forEach']((_0x4ec62a, _0x5b5462) => {
                                        doge[_0x4ec62a] = _0x259e76[_0x5b5462];
                                    // }), Reflect['apply'](...arguments);
                                    // if (doge['isDefined'](doge['renderer']) && doge['isDefined'](doge['renderer']['adsFovMlt'])) try {
                                    //     doge['renderer']['adsFovMlt']['fill'](doge['settings']['weaponZoom']);
                                    // } catch (_0x1a1685) {
                            //             console['error'](_0x1a1685);
                            //         }
                            //         doge['me'] && doge['ctx'] && (doge['ctx']['save'](), doge['ctx']['scale'](doge['scale'], doge['scale']), doge['render'](), doge['ctx']['restore'](), !doge['me']['procInputs'][doge['isProxy']] && (doge['me']['procInputs'] = new Proxy(doge['me']['procInputs'], {
                            //             'apply'(_0x575db9, _0x4d37aa, [_0x4630ba, _0x22f37d, _0x33f862, _0x4c4f69]) {
                            //                 return _0x4d37aa && doge['inputs'](_0x4630ba), Reflect['apply'](...arguments);
                            //             },
                            //             'get'(_0x31645a, _0x4d3077) {
                            //                 return _0x4d3077 === doge['isProxy'] ? !![] : Reflect['get'](_0x31645a, _0x4d3077);
                            //             }
                            //         })), doge['game']['map']['manager']['objects']['filter'](_0xd937b4 => {
                            //             return _0xd937b4['penetrable'];
                            //         })['map']((_0x426b74, _0x5ee03d, _0x4ce7f2) => {
                            //             _0x426b74['transparent'] = doge['settings']['wallbangs'];
                            //         }));
                            //     }
                            // });
                        },
                        'get'() {
                            return this['_render'];
                        }
                    }
                }));
            },
            'get'() {
                return this['_canvas'];
            }
        },
        'OBJLoader': {
            'set'(_0x4a7ea5) {
                doge['three'] = this, this['_value'] = _0x4a7ea5;
            },
            'get'() {
                return this['_value'];
            }
        },
        'skins': {
            'set'(_0x13449a) {
                return this[_0x515c4b] = _0x13449a, (void 0x0 == this['localSkins'] || !this['localSkins']['length']) && (this[_0x358beb] = Array['apply'](null, Array(0x1388))['map']((_0x2179b5, _0x49fabf) => {
                    return {
                        'ind': _0x49fabf,
                        'cnt': 0x1
                    };
                })), _0x13449a;
            },
            'get'() {
                return doge['settings']['skinHack'] && this['stats'] ? this[_0x358beb] : this[_0x515c4b];
            }
        },
        'useLooseClient': {
            'enumerable': ![],
            'get'() {
                return this['_ulc'];
            },
            'set'(_0x5b67f7) {
                doge['config'] = this, Object['defineProperty'](this, 'nameVisRate', {
                    'value': 0x0,
                    'writable': ![],
                    'configurable': !![]
                }), this['_ulc'] = _0x5b67f7;
            }
        },
        'trail': {
            'enumerable': ![],
            'get'() {
                return doge['settings']['alwaysTrail'] || this['_trail'];
            },
            'set'(_0x49e547) {
                this['_trail'] = _0x49e547;
            }
        },
        'showTracers': {
            'enumerable': ![],
            'get'() {
                return doge['settings']['alwaysTrail'] || this['_showTracers'];
            },
            'set'(_0x881046) {
                this['_showTracers'] = _0x881046;
            }
        },
        'shaderId': {
            'enumerable': ![],
            'get'() {
                if (this['src'] && this['src']['startsWith']('pubs/')) return doge['settings']['animatedBillboards'] ? 0x1 : this['rshaderId'];
                else return this['rshaderId'];
            },
            'set'(_0x398349) {
                this['rshaderId'] = _0x398349;
            }
        },
        'idleTimer': {
            'enumerable': ![],
            'get'() {
                return doge['settings']['antikick'] ? 0x0 : this['_idleTimer'];
            },
            'set'(_0x2c5ffe) {
                this['_idleTimer'] = _0x2c5ffe;
            }
        },
        'kickTimer': {
            'enumerable': ![],
            'get'() {
                return doge['settings']['antikick'] ? Infinity : this['_kickTimer'];
            },
            'set'(_0x187c27) {
                this['_kickTimer'] = _0x187c27;
            }
        },
        'cnBSeen': {
            'set'(_0xb7a19d) {
                this['inView'] = _0xb7a19d;
            },
            'get'() {
                let _0x391299 = !doge['isDefined'](doge['me']) || !doge['me']['team'] || doge['me']['team'] != this['team'];
                return this['inView'] || _0x391299 && doge['state']['nameTags'];
            }
        },
        'events': {
            'set'(_0x1fba7d) {
                this['ahNum'] == 0x0 && (doge['wsSend'] = this['send']['bind'](this), doge['wsEvent'] = this['_dispatchEvent']['bind'](this), doge['socket'] = this, this['send'] = new Proxy(this['send'], {
                    'apply'(_0x104d76, _0x2a4214, [_0x211af0, _0x2a5296]) {
                        return _0x211af0 === 'en' && (doge['skins'] = {
                            'main': _0x2a5296[0x2][0x0],
                            'secondary': _0x2a5296[0x2][0x1],
                            'hat': _0x2a5296[0x3],
                            'body': _0x2a5296[0x4],
                            'knife': _0x2a5296[0x9],
                            'dye': _0x2a5296[0xe],
                            'waist': _0x2a5296[0x11]
                        }), Reflect['apply'](...arguments);
                    }
                }), this['_dispatchEvent'] = new Proxy(this['_dispatchEvent'], {
                    'apply'(_0x231565, _0x8d7886, [_0x3d1487, _0x257a9a]) {
                        if (doge['settings']['skinHack'] && _0x3d1487 === '0') {
                            let _0x5e1e71 = _0x257a9a[0x0],
                                _0x57c58d = 0x26;
                            while (_0x5e1e71['length'] % _0x57c58d !== 0x0) _0x57c58d++;
                            for (let _0x229b39 = 0x0; _0x229b39 < _0x5e1e71['length']; _0x229b39 += _0x57c58d) {
                                _0x5e1e71[_0x229b39 + 0xc] = [doge['skins']['main'], doge['skins']['secondary']], _0x5e1e71[_0x229b39 + 0xd] = doge['skins']['hat'], _0x5e1e71[_0x229b39 + 0xe] = doge['skins']['body'], _0x5e1e71[_0x229b39 + 0x13] = doge['skins']['knife'], _0x5e1e71[_0x229b39 + 0x18] = doge['skins']['dye'], _0x5e1e71[_0x229b39 + 0x21] = doge['skins']['waist'];
                            }
                        }
                        return Reflect['apply'](...arguments);
                    }
                })), this['_events'] = _0x1fba7d;
            },
            'get'() {
                return this['_events'];
            }
        },
        'thirdPerson': {
            'set'(_0x1d4b83) {
                this['_thirdPerson'] = _0x1d4b83;
            },
            'get'() {
                return this['_thirdPerson'] || doge['settings']['thirdPerson'];
            }
        }
    });
} ['createListeners']() {
    document['addEventListener']('DOMContentLoaded', () => {
        let _0x4c901e = new MutationObserver(() => {
            _0x4c901e['disconnect'](), this['createObserver'](window['instructionsUpdate'], 'style', _0x46731f => {
                if (location['host'] == 'krunker.io' && _0x46731f['textContent']['includes']('Connection\x20Banned')) location['assign']('https://browserfps.com/');
                else this['settings']['autoServer'] && this['arrayTest'](_0x46731f, ['Kicked', 'Banned', 'Disconnected', 'Error', 'Game\x20is\x20full'], _0x52dfd3 => _0x46731f['innerHTML']['includes'](_0x52dfd3)) && (location = document['location']['origin']);
            }), this['loadSettings'](), this['initGUI']();
        });
        _0x4c901e['observe'](document['getElementById']('instructions'), {
            'childList': !![]
        }), this['customCSS']();
        const _0x1d19a7 = ['#aContainer,\x20#aHolder,\x20#endAContainer,\x20#aMerger,\x20#onetrust-consent-sdk\x20{\x20display:\x20none\x20!important;\x20}', '#chatList\x20*\x20{\x20user-select:\x20text;\x20}'];
        new Array(...document['styleSheets'])['map'](_0x73f8b5 => {
            if (_0x73f8b5['href']) {
                let _0x5a6519 = /http.*?krunker.io\/css\/(\w+.css).+/ ['exec'](_0x73f8b5['href']);
                if (_0x5a6519 && _0x5a6519[0x1]) {
                    let _0x1317e0 = _0x5a6519[0x1];
                    _0x1317e0 && _0x1317e0['includes']('main_custom') && _0x1d19a7['forEach']((_0x13b7e0, _0x54f8df, _0x435965) => {
                        _0x73f8b5['insertRule'](_0x13b7e0);
                    });
                }
            }
        });
    }), window['addEventListener']('mouseup', _0x535516 => {
        _0x535516['which'] === 0x2 && doge['settings']['guiOnMMB'] && (_0x535516['preventDefault'](), doge['showGUI']());
    }), window['addEventListener']('keyup', _0x26f841 => {
        if (this['state']['pressedKeys']['has'](_0x26f841['code'])) this['state']['pressedKeys']['delete'](_0x26f841['code']);
        if (!(document['activeElement']['tagName'] === 'INPUT' || !window['endUI'] && window['endUI']['style']['display']) && doge['settings']['keybinds']) switch (_0x26f841['code']) {
            case 'KeyY':
                this['state']['bindAimbotOn'] = !this['state']['bindAimbotOn'], this['wsEvent']('ch', [null, 'Aimbot\x20' + (this['state']['bindAimbotOn'] ? 'on' : 'off'), 0x1]);
                break;
            case 'KeyH':
                this['settings']['esp'] = (this['settings']['esp'] + 0x1) % 0x4, this['wsEvent']('ch', [null, 'ESP:\x20' + ['disabled', 'nametags', 'box', 'full'][this['settings']['esp']], 0x1]);
                break;
        }
    }), window['addEventListener']('keydown', _0x525354 => {
        _0x525354['code'] == 'F1' && (_0x525354['preventDefault'](), doge['showGUI']());
        if ('INPUT' == document['activeElement']['tagName'] || !window['endUI'] && window['endUI']['style']['display']) return;
        switch (_0x525354['code']) {
            case 'NumpadSubtract':
                document['exitPointerLock'](), console['dirxml'](this);
                break;
            default:
                if (!this['state']['pressedKeys']['has'](_0x525354['code'])) this['state']['pressedKeys']['add'](_0x525354['code']);
                break;
        }
    });
} ['loadSettings']() {
    let _0x2a1070 = {};
    try {
        _0x2a1070 = JSON['parse'](window['localStorage']['getItem']('dogeware'));
    } catch (_0x552c51) {
        let _0xf20f5f = document['cookie']['split'](';');
        for (let _0x297ce6 of _0xf20f5f) {
            _0x297ce6 = _0x297ce6['trim']();
            if (_0x297ce6['indexOf']('dogeware=') == 0x0) {
                _0x2a1070 = JSON['parse'](decodeURIComponent(_0x297ce6['substring']('dogeware=' ['length'], _0x297ce6['length'])));
                break;
            }
        }
    }
    for (let _0xe45700 in _0x2a1070) {
        this['settings'][_0xe45700] != undefined && (this['settings'][_0xe45700] = _0x2a1070[_0xe45700]);
    }
    this['saveSettings'](!![]);
} ['deleteSettings']() {
    try {
        window['localStorage']['removeItemonload']('dogeware'), location['reload']();
    } catch (_0x43ea47) {}
} ['saveSettings'](_0x4c23ef) {
    try {
        window['localStorage']['setItem']('dogeware', JSON['stringify'](this['settings']));
    } catch (_0x22ae62) {
        let _0xfa0a7f = new Date();
        _0xfa0a7f['setTime'](_0xfa0a7f['getTime']() + 0x168 * 0x18 * 0x3c * 0x3c * 0x3e8);
        let _0x550903 = 'expires=' + _0xfa0a7f['toGMTString']();
        document['cookie'] = 'dogeware=' + encodeURIComponent(JSON['stringify'](this['settings'])) + ';\x20' + _0x550903;
    }
    _0x4c23ef && console['log']('[Dogeware]\x20Settings\x20loaded：', this['settings']);
} ['inputs'](_0x2e2090) {
    const _0x3a3ec6 = {
            'frame': 0x0,
            'delta': 0x1,
            'xdir': 0x2,
            'ydir': 0x3,
            'moveDir': 0x4,
            'shoot': 0x5,
            'scope': 0x6,
            'jump': 0x7,
            'reload': 0x8,
            'crouch': 0x9,
            'weaponScroll': 0xa,
            'weaponSwap': 0xb,
            'moveLock': 0xc
        },
        _0x1229ac = {
            'leftStrafe': 0x0,
            'forward': 0x1,
            'rightStrafe': 0x2,
            'right': 0x3,
            'backwardRightStrafe': 0x4,
            'backward': 0x5,
            'backwardLeftStrafe': 0x6,
            'left': 0x7
        };
    this['state']['frame'] = _0x2e2090[_0x3a3ec6['frame']], this['state']['nameTags'] = [0x1, 0x2]['some'](_0x5c3dd9 => _0x5c3dd9 == this['settings']['esp']) || this['settings']['forceNametagsOn'];
    if (this['me']) {
        this['settings']['autoNuke'] && Object['keys'](this['me']['streaks'])['length'] && this['wsSend']('k', 0x0);
        this['settings']['bhop'] && ((this['state']['pressedKeys']['has']('Space') || this['settings']['bhop'] % 0x2) && (this['controls']['keys'][this['controls']['binds']['jump']['val']] ^= 0x1, this['controls']['keys'][this['controls']['binds']['jump']['val']] && (this['controls']['didPressed'][this['controls']['binds']['jump']['val']] = 0x1), (this['state']['pressedKeys']['has']('Space') || this['settings']['bhop'] == 0x3) && (this['me']['yVel'] < -0.03 && this['me']['canSlide'] && (setTimeout(() => {
            this['controls']['keys'][this['controls']['binds']['crouch']['val']] = 0x0;
        }, this['me']['slideTimer'] || 0x145), this['controls']['keys'][this['controls']['binds']['crouch']['val']] = 0x1, this['controls']['didPressed'][this['controls']['binds']['crouch']['val']] = 0x1))));
        if (this['settings']['forceNametagsOn']) try {
            Object['defineProperty'](this['game']['config'], 'nameTags', {
                'get'() {
                    return doge['settings']['forceNametagsOn'] ? ![] : this['game']['_nametags'];
                },
                'set'(_0x4d5ad4) {
                    this['game']['_nametags'] = _0x4d5ad4;
                }
            });
        } catch (_0x3ecc67) {}
        if (this['settings']['spinBot']) {
            const _0x695983 = 0x1;
            _0x2e2090[_0x3a3ec6['moveDir']] !== -0x1 && (_0x2e2090[_0x3a3ec6['moveDir']] = (_0x2e2090[_0x3a3ec6['moveDir']] + this['state']['spinCounter'] - Math['round'](0x7 * (_0x2e2090[_0x3a3ec6['ydir']] / (Math['PI'] * 0x7d0)))) % 0x7), _0x2e2090[_0x3a3ec6['ydir']] = this['state']['spinCounter'] / 0x7 * (Math['PI'] * 0x7d0), _0x2e2090[_0x3a3ec6['frame']] % _0x695983 === 0x0 && (this['state']['spinCounter'] = (this['state']['spinCounter'] + 0x1) % 0x7);
        }
        this['settings']['autoReload'] && this['me']['ammos'][this['me']['weaponIndex']] === 0x0 && (_0x2e2090[_0x3a3ec6['reload']] = 0x1);
        if (this['settings']['pitchHack']) switch (this['settings']['pitchHack']) {
            case 0x1:
                _0x2e2090[_0x3a3ec6['xdir']] = -Math['PI'] * 0x1f4;
                break;
            case 0x2:
                _0x2e2090[_0x3a3ec6['xdir']] = Math['PI'] * 0x1f4;
                break;
            case 0x3:
                _0x2e2090[_0x3a3ec6['xdir']] = Math['sin'](Date['now']() / 0x32) * Math['PI'] * 0x1f4;
                break;
            case 0x4:
                _0x2e2090[_0x3a3ec6['xdir']] = Math['sin'](Date['now']() / 0xfa) * Math['PI'] * 0x1f4;
                break;
            case 0x5:
                _0x2e2090[_0x3a3ec6['xdir']] = _0x2e2090[_0x3a3ec6['frame']] % 0x2 ? Math['PI'] * 0x1f4 : -Math['PI'] * 0x1f4;
                break;
            case 0x6:
                _0x2e2090[_0x3a3ec6['xdir']] = (Math['random']() * Math['PI'] - Math['PI'] / 0x2) * 0x3e8;
                break;
        }
        const _0x2e0911 = () => (Math['random']() * 0x2 - 0x1) * this['settings']['aimNoise'];
        this['game']['players']['list']['forEach'](_0x54a4fd => {
            _0x54a4fd['pos'] = {
                'x': _0x54a4fd['x'],
                'y': _0x54a4fd['y'],
                'z': _0x54a4fd['z']
            }, _0x54a4fd['npos'] = {
                'x': _0x54a4fd['x'] + _0x2e0911(),
                'y': _0x54a4fd['y'] + _0x2e0911(),
                'z': _0x54a4fd['z'] + _0x2e0911()
            }, _0x54a4fd['isTarget'] = ![];
        });
        this['game']['AI']['ais'] && this['game']['AI']['ais']['forEach'](_0x4a35f1 => _0x4a35f1['npos'] = _0x4a35f1['pos'] = {
            'x': _0x4a35f1['x'],
            'y': _0x4a35f1['y'],
            'z': _0x4a35f1['z']
        });
        if (this['renderer'] && this['renderer']['frustum'] && this['me']['active']) {
            this['controls']['target'] = null;
            let _0x3723a7 = this['game']['players']['list']['filter'](_0x1295bd => !_0x1295bd['isYTMP'] && _0x1295bd['hasOwnProperty']('npos') && (!this['settings']['frustumCheck'] || this['containsPoint'](_0x1295bd['npos'])) && ((this['me']['team'] === null || _0x1295bd['team'] !== this['me']['team']) && _0x1295bd['health'] > 0x0 && _0x1295bd['inView']))['sort']((_0x235f17, _0x452071) => this['getDistance'](this['me']['x'], this['me']['z'], _0x235f17['npos']['x'], _0x235f17['npos']['z']) - this['getDistance'](this['me']['x'], this['me']['z'], _0x452071['npos']['x'], _0x452071['npos']['z'])),
                _0x4bb27a = _0x3723a7[0x0];
            if (this['settings']['fovbox']) {
                const _0x3f8f37 = this['scale'] || parseFloat(document['getElementById']('uiBase')['style']['transform']['match'](/\((.+)\)/)[0x1]),
                    _0x561697 = innerWidth / _0x3f8f37,
                    _0x492095 = innerHeight / _0x3f8f37;
                let _0x4c11fe = ![];
                for (let _0x2888b4 = 0x0; _0x2888b4 < _0x3723a7['length']; _0x2888b4++) {
                    const _0x5034c3 = _0x3723a7[_0x2888b4],
                        _0x229d4b = this['world2Screen'](new this['three']['Vector3'](_0x5034c3['x'], _0x5034c3['y'], _0x5034c3['z']), _0x561697, _0x492095, _0x5034c3['height'] / 0x2);
                    let _0x1ca19d = [_0x561697 / 0x3, _0x492095 / 0x4, _0x561697 * (0x1 / 0x3), _0x492095 / 0x2];
                    switch (this['settings']['fovBoxSize']) {
                        case 0x2:
                            _0x1ca19d = [_0x561697 * 0.4, _0x492095 / 0x3, _0x561697 * 0.2, _0x492095 / 0x3];
                            break;
                        case 0x3:
                            _0x1ca19d = [_0x561697 * 0.45, _0x492095 * 0.4, _0x561697 * 0.1, _0x492095 * 0.2];
                            break;
                    }
                    if (_0x229d4b['x'] >= _0x1ca19d[0x0] && _0x229d4b['x'] <= _0x1ca19d[0x0] + _0x1ca19d[0x2] && _0x229d4b['y'] >= _0x1ca19d[0x1] && _0x229d4b['y'] < _0x1ca19d[0x1] + _0x1ca19d[0x3]) {
                        _0x4bb27a = _0x3723a7[_0x2888b4], _0x4c11fe = !![];
                        break;
                    }
                }!_0x4c11fe && (_0x4bb27a = void 'kpal');
            }
            let _0x3f077d = ![];
            if (this['game']['AI']['ais'] && this['settings']['AImbot']) {
                let _0x37b0f6 = this['game']['AI']['ais']['filter'](_0x29a736 => _0x29a736['mesh'] && _0x29a736['mesh']['visible'] && _0x29a736['health'] && _0x29a736['pos'] && _0x29a736['canBSeen'])['sort']((_0xb9f59b, _0x457cc1) => this['getDistance'](this['me']['x'], this['me']['z'], _0xb9f59b['pos']['x'], _0xb9f59b['pos']['z']) - this['getDistance'](this['me']['x'], this['me']['z'], _0x457cc1['pos']['x'], _0x457cc1['pos']['z']))['shift']();
                (!_0x4bb27a || _0x37b0f6 && this['getDistance'](this['me']['x'], this['me']['z'], _0x37b0f6['pos']['x'], _0x37b0f6['pos']['z']) > this['getDistance'](this['me']['x'], this['me']['z'], _0x4bb27a['pos']['x'], _0x4bb27a['pos']['z'])) && (_0x4bb27a = _0x37b0f6, _0x3f077d = !![]);
            }
            const _0x3f5df4 = _0x2e2090[_0x3a3ec6['shoot']];
            if (_0x4bb27a && this['settings']['aimbot'] && this['state']['bindAimbotOn'] && (!this['settings']['aimbotRange'] || this['getDistance3D'](this['me']['x'], this['me']['y'], this['me']['z'], _0x4bb27a['x'], _0x4bb27a['y'], _0x4bb27a['z']) < this['settings']['aimbotRange']) && (!this['settings']['rangeCheck'] || this['getDistance3D'](this['me']['x'], this['me']['y'], this['me']['z'], _0x4bb27a['x'], _0x4bb27a['y'], _0x4bb27a['z']) <= this['me']['weapon']['range']) && !this['me']['reloadTimer']) {
                this['settings']['awtv'] && (_0x2e2090[_0x3a3ec6['scope']] = 0x1);
                _0x4bb27a['isTarget'] = this['settings']['markTarget'];
                const _0x13cbb7 = (this['getDir'](this['me']['z'], this['me']['x'], _0x4bb27a['npos']['z'], _0x4bb27a['npos']['x']) || 0x0) * 0x3e8,
                    _0x4f4ddc = _0x3f077d ? ((this['getXDir'](this['me']['x'], this['me']['y'], this['me']['z'], _0x4bb27a['npos']['x'], _0x4bb27a['npos']['y'] - _0x4bb27a['dat']['mSize'] / 0x2, _0x4bb27a['npos']['z']) || 0x0) - 0.3 * this['me']['recoilAnimY']) * 0x3e8 : ((this['getXDir'](this['me']['x'], this['me']['y'], this['me']['z'], _0x4bb27a['npos']['x'], _0x4bb27a['npos']['y'] - _0x4bb27a['crouchVal'] * 0x3 + this['me']['crouchVal'] * 0x3 + this['settings']['aimOffset'], _0x4bb27a['npos']['z']) || 0x0) - 0.3 * this['me']['recoilAnimY']) * 0x3e8;
                this['settings']['forceUnsilent'] && (this['controls']['target'] = {
                    'xD': _0x4f4ddc / 0x3e8,
                    'yD': _0x13cbb7 / 0x3e8
                }, this['controls']['update'](0x190));
                switch (this['settings']['aimbot']) {
                    case 0x1:
                    case 0x2:
                    case 0x5:
                    case 0x6:
                    case 0x9:
                    case 0xa: {
                        let _0x1c033d = [0x5, 0x6, 0x9]['some'](_0x475dc4 => _0x475dc4 == this['settings']['aimbot']);
                        (this['settings']['aimbot'] === 0x5 && _0x2e2090[_0x3a3ec6['scope']] || this['settings']['aimbot'] === 0xa) && (this['controls']['target'] = {
                            'xD': _0x4f4ddc / 0x3e8,
                            'yD': _0x13cbb7 / 0x3e8
                        }, this['controls']['update'](0x190));
                        ([0x2, 0xa]['some'](_0x3b1e3b => _0x3b1e3b == this['settings']['aimbot']) || this['settings']['aimbot'] === 0x1 && this['me']['weapon']['id']) && (!this['me']['weapon']['melee'] && (_0x2e2090[_0x3a3ec6['scope']] = 0x1));
                        if (this['me']['didShoot']) _0x2e2090[_0x3a3ec6['shoot']] = 0x0, this['state']['quickscopeCanShoot'] = ![], setTimeout(() => {
                            this['state']['quickscopeCanShoot'] = !![];
                        }, this['me']['weapon']['rate'] * 0.85);
                        else this['state']['quickscopeCanShoot'] && (!_0x1c033d || _0x2e2090[_0x3a3ec6['scope']]) && (!this['me']['weapon']['melee'] && (_0x2e2090[_0x3a3ec6['scope']] = 0x1), !this['settings']['superSilent'] && this['settings']['aimbot'] !== 0x9 && (_0x2e2090[_0x3a3ec6['ydir']] = _0x13cbb7, _0x2e2090[_0x3a3ec6['xdir']] = _0x4f4ddc), (this['settings']['aimbot'] !== 0x9 && (!this['me']['aimVal'] || this['me']['weapon']['noAim'] || this['me']['weapon']['melee']) || this['settings']['aimbot'] === 0x9 && _0x3f5df4) && (_0x2e2090[_0x3a3ec6['ydir']] = _0x13cbb7, _0x2e2090[_0x3a3ec6['xdir']] = _0x4f4ddc, _0x2e2090[_0x3a3ec6['shoot']] = 0x1));
                    }
                    break;
                case 0x4:
                case 0x7:
                case 0x8:
                case 0xb:
                    if (_0x2e2090[_0x3a3ec6['scope']] || this['settings']['aimbot'] === 0xb) {
                        this['controls']['target'] = {
                            'xD': _0x4f4ddc / 0x3e8,
                            'yD': _0x13cbb7 / 0x3e8
                        }, this['controls']['update']({
                            0x4: 0x190,
                            0x7: 0x6e,
                            0x8: 0x46,
                            0xb: 0x190
                        } [this['settings']['aimbot']]);
                        [0x4, 0xb]['some'](_0x361fc0 => _0x361fc0 == this['settings']['aimbot']) && (_0x2e2090[_0x3a3ec6['xdir']] = _0x4f4ddc, _0x2e2090[_0x3a3ec6['ydir']] = _0x13cbb7);
                        if (this['me']['didShoot']) _0x2e2090[_0x3a3ec6['shoot']] = 0x0, this['state']['quickscopeCanShoot'] = ![], setTimeout(() => {
                            this['state']['quickscopeCanShoot'] = !![];
                        }, this['me']['weapon']['rate'] * 0.85);
                        else this['state']['quickscopeCanShoot'] && (_0x2e2090[this['me']['weapon']['melee'] ? _0x3a3ec6['shoot'] : _0x3a3ec6['scope']] = 0x1);
                    } else this['controls']['target'] = null;
                    break;
                case 0xc: {
                    if (!this['three'] || !this['renderer'] || !this['renderer']['camera'] || !this['game'] || !this['game']['players'] || !this['game']['players']['list']['length'] || !_0x2e2090[_0x3a3ec6['scope']] || this['me']['aimVal']) break;
                    !this['state']['raycaster'] && (this['state']['raycaster'] = new this['three']['Raycaster'](), this['state']['mid'] = new this['three']['Vector2'](0x0, 0x0));
                    const _0x262682 = [];
                    for (let _0x493372 = 0x0; _0x493372 < this['game']['players']['list']['length']; _0x493372++) {
                        let _0x43fcc7 = this['game']['players']['list'][_0x493372];
                        if (!_0x43fcc7 || !_0x43fcc7['objInstances'] || _0x43fcc7['isYTMP'] || !(this['me']['team'] === null || _0x43fcc7['team'] !== this['me']['team']) || !_0x43fcc7['inView']) continue;
                        _0x262682['push'](_0x43fcc7['objInstances']);
                    }
                    const _0x136374 = this['state']['raycaster'];
                    _0x136374['setFromCamera'](this['state']['mid'], this['renderer']['camera']), _0x136374['intersectObjects'](_0x262682, !![])['length'] && (_0x2e2090[_0x3a3ec6['shoot']] = this['me']['didShoot'] ? 0x0 : 0x1);
                }
                break;
                }
            } else this['settings']['uwtv'] && (_0x2e2090[_0x3a3ec6['scope']] = 0x0), this['state']['spinFrame'] = 0x0;
        }
        this['settings']['alwaysAim'] && (_0x2e2090[_0x3a3ec6['scope']] = 0x1), this['settings']['preventMeleeThrowing'] && this['me']['weapon']['melee'] && (_0x2e2090[_0x3a3ec6['scope']] = 0x0);
    }
    return _0x2e2090;
} ['render']() {
    var _0x412f94 = this['scale'] || parseFloat(document['getElementById']('uiBase')['style']['transform']['match'](/\((.+)\)/)[0x1]);
    let _0x1e9b8b = innerWidth / _0x412f94,
        _0x3229d8 = innerHeight / _0x412f94,
        _0x232962 = (_0x50f99f, _0x37e12c = 0x0) => {
            return _0x50f99f['y'] += _0x37e12c, _0x50f99f['project'](this['renderer']['camera']), _0x50f99f['x'] = (_0x50f99f['x'] + 0x1) / 0x2, _0x50f99f['y'] = (-_0x50f99f['y'] + 0x1) / 0x2, _0x50f99f['x'] *= _0x1e9b8b, _0x50f99f['y'] *= _0x3229d8, _0x50f99f;
        },
        _0x89218a = (_0x86b8af, _0x459d5f, _0x16f335, _0x558f88, _0x38df5f, _0x100349) => {
            this['ctx']['save'](), this['ctx']['lineWidth'] = _0x38df5f + 0x2, this['ctx']['beginPath'](), this['ctx']['moveTo'](_0x86b8af, _0x459d5f), this['ctx']['lineTo'](_0x16f335, _0x558f88), this['ctx']['strokeStyle'] = 'rgba(0,\x200,\x200,\x200.25)', this['ctx']['stroke'](), this['ctx']['lineWidth'] = _0x38df5f, this['ctx']['strokeStyle'] = _0x100349, this['ctx']['stroke'](), this['ctx']['restore']();
        },
        _0x308ed8 = (_0x25d2de, _0x72bfce, _0x326c92, _0x297f14, _0x1fff89, _0x39cb35, _0x1d3b57, _0x4fd74d) => {
            this['ctx']['save'](), this['ctx']['translate'](~~_0x25d2de, ~~_0x72bfce), this['ctx']['beginPath'](), _0x4fd74d ? this['ctx']['fillStyle'] = _0x1d3b57 : this['ctx']['strokeStyle'] = _0x1d3b57, this['ctx']['rect'](_0x326c92, _0x297f14, _0x1fff89, _0x39cb35), _0x4fd74d ? this['ctx']['fill']() : this['ctx']['stroke'](), this['ctx']['closePath'](), this['ctx']['restore']();
        },
        _0x280bdd = _0x1e1acf => {
            for (let _0x9173b3 = 0x0; _0x9173b3 < _0x1e1acf['length']; _0x9173b3++) {
                _0x1e1acf[_0x9173b3] = ~~this['ctx']['measureText'](_0x1e1acf[_0x9173b3])['width'];
            }
            return _0x1e1acf;
        },
        _0x215108 = (_0x2b4e42, _0x401a88, _0x1b0204, _0x403020, _0x3d9ef2) => {
            const _0x41772a = this['ctx']['createLinearGradient'](_0x2b4e42, _0x401a88, _0x1b0204, _0x403020);
            for (let _0x2404bf = 0x0; _0x2404bf < _0x3d9ef2['length']; _0x2404bf++) {
                _0x41772a['addColorStop'](_0x2404bf, _0x3d9ef2[_0x2404bf]);
            }
            return _0x41772a;
        },
        _0x3903e0 = (_0x856b14, _0xaf0dd, _0x52e2e8, _0x34fa17, _0xbc88e9) => {
            this['ctx']['save'](), this['ctx']['translate'](~~_0x34fa17, ~~_0xbc88e9), this['ctx']['fillStyle'] = _0x52e2e8, this['ctx']['strokeStyle'] = 'rgba(0,\x200,\x200,\x200.5)', this['ctx']['font'] = _0xaf0dd, this['ctx']['lineWidth'] = 0x1, this['ctx']['strokeText'](_0x856b14, 0x0, 0x0), this['ctx']['fillText'](_0x856b14, 0x0, 0x0), this['ctx']['restore']();
        };
    const _0x110842 = 0x2;
    for (const _0x44c016 of this['game']['players']['list']['filter'](_0x3f4245 => !_0x3f4245['isYTMP'] && _0x3f4245['active'] && (_0x3f4245['pos'] = {
            'x': _0x3f4245['x'],
            'y': _0x3f4245['y'],
            'z': _0x3f4245['z']
        }))) {
        const _0x3f948c = new this['three']['Vector3'](_0x44c016['pos']['x'], _0x44c016['pos']['y'], _0x44c016['pos']['z']),
            _0x3cea06 = _0x232962(_0x3f948c['clone']()),
            _0xb71c52 = _0x232962(_0x3f948c['clone'](), _0x44c016['height']),
            _0x560698 = ~~(_0x3cea06['y'] - _0xb71c52['y']),
            _0x400209 = ~~(_0x560698 * 0.6),
            _0x181d52 = this['settings']['espFontSize'] + 'px\x20GameFont',
            _0x395dc9 = this['me']['team'] === null || _0x44c016['team'] !== this['me']['team'];
        if (!this['containsPoint'](_0x44c016['pos'])) continue;
        this['settings']['tracers'] && _0x89218a(_0x1e9b8b / 0x2, doge['settings']['tracers'] === 0x2 ? _0x3229d8 / 0x2 : _0x3229d8 - 0x1, _0x3cea06['x'], _0x3cea06['y'], 0x2, _0x44c016['team'] === null ? '#FF4444' : _0x44c016['team'] === this['me']['team'] ? '#44AAFF' : '#FF4444');
        const _0x21ddee = _0x44c016['objInstances'];
        if (this['isDefined'](_0x21ddee)) {
            if (!_0x21ddee['visible']) Object['defineProperty'](_0x44c016['objInstances'], 'visible', {
                'value': !![],
                'writable': ![]
            });
            else {
                let _0x242d8c = this['settings']['chams'];
                if (doge['gaybow'] >= 0x168) doge['gaybow'] = 0x0;
                else doge['gaybow']++;
                _0x21ddee['traverse'](_0x45c3e6 => {
                    if (_0x45c3e6 && _0x45c3e6['type'] == 'Mesh' && this['isDefined'](_0x45c3e6['material'])) {
                        if (!_0x45c3e6['hasOwnProperty'](this['hash'])) _0x45c3e6[this['hash']] = _0x45c3e6['material'];
                        else _0x45c3e6['hasOwnProperty'](this['hash']) && Object['defineProperty'](_0x45c3e6, 'material', {
                            'get'() {
                                return !_0x242d8c || !_0x395dc9 && !doge['settings']['teamChams'] ? this[doge['hash']] : new doge['three']['MeshBasicMaterial']({
                                    'color': new doge['three']['Color'](doge['settings']['chamsCol'] == 0xc ? 'hsl(' + doge['gaybow'] + ',100%,\x2050%)' : Object['values'](doge['colors'])[doge['settings']['chamsCol']]),
                                    'depthTest': ![],
                                    'transparent': !![],
                                    'fog': ![],
                                    'wireframe': doge['settings']['wireframe']
                                });
                            }
                        });
                    }
                });
            }
        }
        if (this['settings']['esp'] > 0x1) {
            if (_0x44c016['isTarget']) {
                this['ctx']['save']();
                const _0x1c315a = _0x280bdd(['TARGET']);
                _0x3903e0('TARGET', _0x181d52, '#FFFFFF', _0xb71c52['x'] - _0x1c315a[0x0] / 0x2, _0xb71c52['y'] - this['settings']['espFontSize'] * 1.5), this['ctx']['beginPath'](), this['ctx']['translate'](_0xb71c52['x'], _0xb71c52['y'] + Math['abs'](_0x560698 / 0x2)), this['ctx']['arc'](0x0, 0x0, Math['abs'](_0x560698 / 0x2) + 0xa, 0x0, Math['PI'] * 0x2), this['ctx']['strokeStyle'] = '#FFFFFF', this['ctx']['stroke'](), this['ctx']['closePath'](), this['ctx']['restore']();
            }
            if (this['settings']['esp'] === 0x2) {
                this['ctx']['save'](), this['ctx']['strokeStyle'] = this['me']['team'] === null || _0x44c016['team'] !== this['me']['team'] ? '#FF4444' : '#44AAFF', this['ctx']['strokeRect'](_0xb71c52['x'] - _0x400209 / 0x2, _0xb71c52['y'], _0x400209, _0x560698), this['ctx']['restore']();
                continue;
            }
            _0x308ed8(_0xb71c52['x'] - _0x400209 / 0x2 - 0x7, ~~_0xb71c52['y'] - 0x1, 0x0, 0x0, 0x4, _0x560698 + 0x2, '#000000', ![]), _0x308ed8(_0xb71c52['x'] - _0x400209 / 0x2 - 0x7, ~~_0xb71c52['y'] - 0x1, 0x0, 0x0, 0x4, _0x560698 + 0x2, '#44FF44', !![]), _0x308ed8(_0xb71c52['x'] - _0x400209 / 0x2 - 0x7, ~~_0xb71c52['y'] - 0x1, 0x0, 0x0, 0x4, ~~((_0x44c016['maxHealth'] - _0x44c016['health']) / _0x44c016['maxHealth'] * (_0x560698 + 0x2)), '#000000', !![]), this['ctx']['save'](), this['ctx']['lineWidth'] = 0x4, this['ctx']['translate'](~~(_0xb71c52['x'] - _0x400209 / 0x2), ~~_0xb71c52['y']), this['ctx']['beginPath'](), this['ctx']['rect'](0x0, 0x0, _0x400209, _0x560698), this['ctx']['strokeStyle'] = 'rgba(0,\x200,\x200,\x200.25)', this['ctx']['stroke'](), this['ctx']['lineWidth'] = 0x2, this['ctx']['strokeStyle'] = _0x44c016['team'] === null ? '#FF4444' : this['me']['team'] === _0x44c016['team'] ? '#44AAFF' : '#FF4444', this['ctx']['stroke'](), this['ctx']['closePath'](), this['ctx']['restore']();
            const _0x48fc30 = ~~(this['getDistance3D'](this['me']['x'], this['me']['y'], this['me']['z'], _0x44c016['pos']['x'], _0x44c016['pos']['y'], _0x44c016['pos']['z']) / 0xa);
            this['ctx']['save'](), this['ctx']['font'] = _0x181d52;
            const _0x4cea25 = _0x280bdd(['[', _0x48fc30, 'm]', _0x44c016['level'], '©', _0x44c016['name']]);
            this['ctx']['restore']();
            const _0x3ed4b7 = _0x215108(0x0, 0x0, _0x4cea25[0x4] * 0x5, 0x0, ['rgba(0,\x200,\x200,\x200.25)', 'rgba(0,\x200,\x200,\x200)']);
            if (_0x44c016['level']) {
                const _0x48f72a = _0x215108(0x0, 0x0, _0x4cea25[0x4] * 0x2 + _0x4cea25[0x3] + _0x110842 * 0x3, 0x0, ['rgba(0,\x200,\x200,\x200)', 'rgba(0,\x200,\x200,\x200.25)']);
                _0x308ed8(~~(_0xb71c52['x'] - _0x400209 / 0x2) - 0xc - _0x4cea25[0x4] * 0x2 - _0x4cea25[0x3] - _0x110842 * 0x3, ~~_0xb71c52['y'] - _0x110842, 0x0, 0x0, _0x4cea25[0x4] * 0x2 + _0x4cea25[0x3] + _0x110842 * 0x3, _0x4cea25[0x4] + _0x110842 * 0x2, _0x48f72a, !![]), _0x3903e0('' + _0x44c016['level'], _0x181d52, '#FFFFFF', ~~(_0xb71c52['x'] - _0x400209 / 0x2) - 0x10 - _0x4cea25[0x3], ~~_0xb71c52['y'] + _0x4cea25[0x4] * 0x1);
            }
            _0x308ed8(~~(_0xb71c52['x'] + _0x400209 / 0x2) + _0x110842, ~~_0xb71c52['y'] - _0x110842, 0x0, 0x0, _0x4cea25[0x4] * 0x5, _0x4cea25[0x4] * 0x4 + _0x110842 * 0x2, _0x3ed4b7, !![]), _0x3903e0(_0x44c016['name'], _0x181d52, _0x44c016['team'] === null ? '#FFCDB4' : this['me']['team'] === _0x44c016['team'] ? '#B4E6FF' : '#FFCDB4', _0xb71c52['x'] + _0x400209 / 0x2 + 0x4, _0xb71c52['y'] + _0x4cea25[0x4] * 0x1);
            if (_0x44c016['clan']) _0x3903e0('[' + _0x44c016['clan'] + ']', _0x181d52, '#AAAAAA', _0xb71c52['x'] + _0x400209 / 0x2 + 0x8 + _0x4cea25[0x5], _0xb71c52['y'] + _0x4cea25[0x4] * 0x1);
            _0x3903e0(_0x44c016['health'] + '\x20HP', _0x181d52, '#33FF33', _0xb71c52['x'] + _0x400209 / 0x2 + 0x4, _0xb71c52['y'] + _0x4cea25[0x4] * 0x2), _0x3903e0(_0x44c016['weapon']['name'], _0x181d52, '#DDDDDD', _0xb71c52['x'] + _0x400209 / 0x2 + 0x4, _0xb71c52['y'] + _0x4cea25[0x4] * 0x3), _0x3903e0('[', _0x181d52, '#AAAAAA', _0xb71c52['x'] + _0x400209 / 0x2 + 0x4, _0xb71c52['y'] + _0x4cea25[0x4] * 0x4), _0x3903e0('' + _0x48fc30, _0x181d52, '#DDDDDD', _0xb71c52['x'] + _0x400209 / 0x2 + 0x4 + _0x4cea25[0x0], _0xb71c52['y'] + _0x4cea25[0x4] * 0x4), _0x3903e0('m]', _0x181d52, '#AAAAAA', _0xb71c52['x'] + _0x400209 / 0x2 + 0x4 + _0x4cea25[0x0] + _0x4cea25[0x1], _0xb71c52['y'] + _0x4cea25[0x4] * 0x4);
        }
    }
    if (this['settings']['fovbox'] && this['settings']['drawFovbox']) {
        let _0x29e4b7 = [_0x1e9b8b / 0x3, _0x3229d8 / 0x4, _0x1e9b8b * (0x1 / 0x3), _0x3229d8 / 0x2];
        switch (this['settings']['fovBoxSize']) {
            case 0x2:
                _0x29e4b7 = [_0x1e9b8b * 0.4, _0x3229d8 / 0x3, _0x1e9b8b * 0.2, _0x3229d8 / 0x3];
                break;
            case 0x3:
                _0x29e4b7 = [_0x1e9b8b * 0.45, _0x3229d8 * 0.4, _0x1e9b8b * 0.1, _0x3229d8 * 0.2];
                break;
        }
        this['ctx']['save'](), this['ctx']['strokeStyle'] = 'red', this['ctx']['strokeRect'](..._0x29e4b7), this['ctx']['restore']();
    }
} ['customCSS']() {
    !this['isDefined'](this['CSSres']) && this['settings']['kpalCSS'] && (this['CSSres']['rel'] = 'stylesheet', this['CSSres']['disabled'] = ![], (document['head'] || document['getElementsByTagName']('head')[0x0])['appendChild'](this['CSSres']));
    if (this['settings']['customCSS']['startsWith']('http') && this['settings']['customCSS']['endsWith']('.css')) this['CSSres']['href'] = this['settings']['customCSS'];
    else this['CSSres'] = undefined;
} ['initGUI']() {
    function _0x441261(_0x1215a2, _0x44cad1, _0x2ad10) {
        const _0x467656 = document['querySelector']('#menuItemContainer'),
            _0x3f50d2 = document['createElement']('div'),
            _0x54bef3 = document['createElement']('div'),
            _0x10b0f8 = document['createElement']('div');
        _0x3f50d2['className'] = 'menuItem', _0x54bef3['className'] = 'menuItemIcon', _0x10b0f8['className'] = 'menuItemTitle', _0x10b0f8['innerHTML'] = _0x1215a2, _0x54bef3['style']['backgroundImage'] = 'url(\x22https://i.imgur.com/jjkFpnV.gif\x22)', _0x3f50d2['append'](_0x54bef3, _0x10b0f8), _0x467656['append'](_0x3f50d2), _0x3f50d2['addEventListener']('click', _0x2ad10);
    }
    doge['GUI']['setSetting'] = function(_0x34b419, _0x30da24) {
        switch (_0x34b419) {
            case 'customCSS':
                doge['settings']['customCSS'] = _0x30da24, doge['customCSS']();
                break;
            default:
                console['log']('SET\x20', _0x34b419, '\x20', _0x30da24), doge['settings'][_0x34b419] = _0x30da24;
        }
        doge['saveSettings']();
    }, doge['GUI']['windowIndex'] = window['windows']['length'] + 0x1, doge['GUI']['settings'] = {
        'aimbot': {
            'val': this['settings']['aimbot']
        }
    }, doge['GUI']['windowObj'] = {
        'header': 'CH33T',
        'html': '',
        'gen'() {
            return doge['getGuiHtml']();
        }
    }, Object['defineProperty'](window['windows'], window['windows']['length'], {
        'value': doge['GUI']['windowObj']
    }), this['settings']['showGuiButton'] && _0x441261('CH33TS', null, () => {
        window['showWindow'](doge['GUI']['windowIndex']);
    });
} ['showGUI']() {
    (document['pointerLockElement'] || document['mozPointerLockElement']) && document['exitPointerLock'](), window['showWindow'](this['GUI']['windowIndex']);
} ['getGuiHtml']() {
    const _0x14b752 = {
        'checkbox': (_0xc91748, _0x3ef439, _0x52494a = '', _0x298ace = ![]) => '<div\x20class=\x22settName\x22\x20title=\x22' + _0x52494a + '\x22>' + _0xc91748 + '\x20' + (_0x298ace ? '<span\x20style=\x22color:\x20#eb5656\x22>*</span>' : '') + '<label\x20class=\x22switch\x22\x20style=\x22margin-left:10px\x22><input\x20type=\x22checkbox\x22\x20onclick=\x27' + this['hash'] + '.GUI.setSetting(\x22' + _0x3ef439 + '\x22,\x20this.checked)\x27\x20' + (doge['settings'][_0x3ef439] ? 'checked' : '') + '><span\x20class=\x22slider\x22></span></label></div>',
        'client_setting': (_0x5a0ed5, _0x586880, _0x5698bd = '', _0x5cf286 = !![]) => '<div\x20class=\x22settName\x22\x20title=\x22' + _0x5698bd + '\x22>' + _0x5a0ed5 + '\x20' + (_0x5cf286 ? '<span\x20style=\x22color:\x20#eb5656\x22>*</span>' : '') + '<label\x20class=\x22switch\x22\x20style=\x22margin-left:10px\x22><input\x20type=\x22checkbox\x22\x20onclick=\x27doge_setsetting(\x22' + _0x586880 + '\x22,\x20this.checked?\x221\x22:\x220\x22)\x27\x20' + (doge['settings'][_0x586880] ? 'checked' : '') + '><span\x20class=\x22slider\x22></span></label></div>',
        'select': (_0x1eed72, _0x396b05, _0x48e854, _0xe651e4 = '', _0x170441 = ![]) => {
            let _0x9bc252 = '<div\x20class=\x22settName\x22\x20title=\x22' + _0xe651e4 + '\x22>' + _0x1eed72 + '\x20' + (_0x170441 ? '<span\x20style=\x22color:\x20#eb5656\x22>*</span>' : '') + '<select\x20onchange=\x27' + this['hash'] + '.GUI.setSetting(\x22' + _0x396b05 + '\x22,\x20parseInt(this.value))\x27\x20class=\x22inputGrey2\x22>';
            for (const _0x515702 in _0x48e854) {
                if (_0x48e854['hasOwnProperty'](_0x515702)) _0x9bc252 += '<option\x20value=\x22' + _0x48e854[_0x515702] + '\x22\x20' + (doge['settings'][_0x396b05] == _0x48e854[_0x515702] ? 'selected' : '') + '>' + _0x515702 + '</option>,';
            }
            return _0x9bc252 + '</select></div>';
        },
        'slider': (_0x439847, _0x208e04, _0x13614a, _0x783c3c, _0x2ba926, _0x44768e = '') => '<div\x20class=\x22settName\x22\x20title=\x22' + _0x44768e + '\x22>' + _0x439847 + '\x20<input\x20type=\x22number\x22\x20class=\x22sliderVal\x22\x20id=\x22slid_input_' + _0x208e04 + '\x22\x20min=\x22' + _0x13614a + '\x22\x20max=\x22' + _0x783c3c + '\x22\x20value=\x22' + doge['settings'][_0x208e04] + '\x22\x20onkeypress=\x22' + this['hash'] + '.GUI.setSetting(\x27' + _0x208e04 + '\x27,\x20parseFloat(this.value.replace(\x27,\x27,\x20\x27.\x27)));document.querySelector(\x27#slid_input_' + _0x208e04 + '\x27).value=this.value\x22\x20style=\x22margin-right:0;border-width:0\x22><div\x20class=\x22slidecontainer\x22\x20style=\x22\x22><input\x20type=\x22range\x22\x20id=\x22slid_' + _0x208e04 + '\x22\x20min=\x22' + _0x13614a + '\x22\x20max=\x22' + _0x783c3c + '\x22\x20step=\x22' + _0x2ba926 + '\x22\x20value=\x22' + doge['settings'][_0x208e04] + '\x22\x20class=\x22sliderM\x22\x20oninput=\x22' + this['hash'] + '.GUI.setSetting(\x27' + _0x208e04 + '\x27,\x20parseFloat(this.value));document.querySelector(\x27#slid_input_' + _0x208e04 + '\x27).value=this.value\x22></div></div>',
        'input': (_0x39567a, _0x482aba, _0x443b9d, _0x1ed6a4, _0x1315db) => '<div\x20class=\x22settName\x22\x20title=\x22' + _0x1ed6a4 + '\x22>' + _0x39567a + '\x20<input\x20type=\x22' + _0x443b9d + '\x22\x20name=\x22' + _0x443b9d + '\x22\x20id=\x22slid_utilities_' + _0x482aba + '\x22\x0a' + ('color' == _0x443b9d ? 'style=\x22float:right;margin-top:5px\x22' : 'class=\x22inputGrey2\x22\x20placeholder=\x22' + _0x1315db + '\x22') + '\x0avalue=\x22' + doge['settings'][_0x482aba] + '\x22\x20oninput=\x22' + this['hash'] + '.GUI.setSetting(\x27' + _0x482aba + '\x27,\x20this.value)\x22/></div>',
        'label': (_0x2faacf, _0x3d138b) => '<br><span\x20style=\x27color:\x20black;\x20font-size:\x2020px;\x20margin:\x2020px\x200\x27>' + _0x2faacf + '</span>\x20<span\x20style=\x27color:\x20dimgrey;\x20font-size:\x2015px\x27>' + (_0x3d138b || '') + '</span><br>',
        'nobrlabel': (_0xc700c0, _0x36cf2e) => '<span\x20style=\x27color:\x20black;\x20font-size:\x2020px;\x20margin:\x2020px\x200\x27>' + _0xc700c0 + '</span>\x20<span\x20style=\x27color:\x20dimgrey;\x20font-size:\x2015px\x27>' + (_0x36cf2e || '') + '</span><br>',
        'br': () => '<br>',
        'style': _0xcc4134 => '<style>' + _0xcc4134 + '</style>'
    };
    let _0x32ad18 = '<div\x20id=\x22settHolder\x22>\x0a<img\x20src=\x22https://i.imgur.com/tE0QUPv.png\x22\x20width=\x2290%\x22>\x0a<div\x20class=\x22imageButton\x20discordSocial\x22\x20onmouseenter=\x22playTick()\x22\x20onclick=\x22openURL(\x27https://skidlamer.github.io/wp/index.html\x27)\x22><span\x20style=\x27display:inline\x27></span></div>';
    Object['keys'](_0x14b752)['forEach'](_0x62443f => {
        const _0x30da13 = _0x14b752[_0x62443f];
        _0x14b752[_0x62443f] = function() {
            return _0x32ad18 += _0x30da13['apply'](this, arguments), '';
        };
    });
    const _0x486472 = ['Weapon', 'Wallhack', 'Visual', 'Tweaks', 'Movement', 'Other'];
    doge['isClient'] && _0x486472['push']('Client');
    _0x14b752['style']('.cheatTabButton\x20{\x20color:\x20black;\x20background:\x20#ddd;\x20padding:\x202px\x207px;\x20font-size:\x2015px;\x20cursor:\x20pointer;\x20text-align:\x20center;\x20}\x20.cheatTabActive\x20{\x20background:\x20#bbb;}'), this['GUI']['changeTab'] = function(_0x5e20e3) {
        const _0x15ff05 = _0x5e20e3['innerText'];
        document['getElementById']('cheat-tabbtn-' + _0x486472[doge['state']['activeTab']])['classList']['remove']('cheatTabActive'), document['getElementById']('cheat-tab-' + _0x486472[doge['state']['activeTab']])['style']['display'] = 'none', _0x5e20e3['classList']['add']('cheatTabActive'), document['getElementById']('cheat-tab-' + _0x15ff05)['style']['display'] = 'block', doge['state']['activeTab'] = _0x486472['indexOf'](_0x15ff05);
    }, _0x32ad18 += '<table\x20style=\x22width:\x20100%;\x20margin-bottom:\x2030px\x22><tr>';
    for (let _0x432ff5 = 0x0; _0x432ff5 < _0x486472['length']; _0x432ff5++) {
        const _0x5e07a8 = _0x486472[_0x432ff5];
        _0x32ad18 += '<td\x20id=\x22cheat-tabbtn-' + _0x5e07a8 + '\x22\x20onclick=\x22' + this['hash'] + '.GUI.changeTab(this)\x22\x20class=\x22cheatTabButton\x20' + (_0x486472[doge['state']['activeTab']] === _0x5e07a8 ? 'cheatTabActive' : '') + '\x22>', _0x32ad18 += _0x5e07a8, _0x32ad18 += '</td>';
    }
    _0x32ad18 += '</table></tr>';

    function _0x53675a(_0x5142fb, _0x3c6dad) {
        _0x32ad18 += '<div\x20style=\x22display:\x20' + (doge['state']['activeTab'] === _0x5142fb ? 'block' : 'none') + '\x22\x20class=\x22cheat-tab\x22\x20id=\x22cheat-tab-' + _0x486472[_0x5142fb] + '\x22>', _0x3c6dad(), _0x32ad18 += '</div>';
    }
    return _0x53675a(0x0, () => {
        _0x14b752['select']('Aimbot\x20[Y]', 'aimbot', {
            'None': 0x0,
            'Quickscope\x20/\x20Auto\x20pick': 0x1,
            'Silent\x20aimbot': 0x2,
            'Aim\x20assist': 0x4,
            'Easy\x20aim\x20assist': 0xb,
            'SP\x20Trigger\x20bot': 0xc,
            'Silent\x20on\x20aim': 0x6,
            'Smooth': 0x7,
            'Unsilent': 0xa,
            'Unsilent\x20on\x20aim': 0x5,
            'Aim\x20correction': 0x9
        }), _0x14b752['select']('Spin\x20aimbot\x20speed', 'spinAimFrames', {
            '1': 0x1e,
            '2': 0x14,
            '3': 0xf,
            '4': 0xa,
            '5': 0x5
        }), _0x14b752['slider']('Aim\x20range', 'aimbotRange', 0x0, 0x3e8, 0xa, 'Set\x20above\x200\x20to\x20make\x20the\x20aimbot\x20pick\x20enemies\x20only\x20at\x20the\x20selected\x20range'), _0x14b752['slider']('Aim\x20offset', 'aimOffset', -0x4, 0x1, 0.1, 'The\x20lower\x20it\x20is,\x20the\x20lower\x20the\x20aimbot\x20will\x20shoot\x20(0\x20-\x20head,\x20-4\x20-\x20body)'), _0x14b752['slider']('Aim\x20noise', 'aimNoise', 0x0, 0x2, 0.005, 'The\x20higher\x20it\x20is,\x20the\x20lower\x20is\x20the\x20aimbot\x20accuracy'), _0x14b752['checkbox']('Supersilent\x20aim', 'superSilent', 'Only\x20works\x20with\x20quickscope\x20and\x20silent\x20aim,\x20makes\x20it\x20almost\x20invisible\x20that\x20you\x27re\x20looking\x20at\x20somebody\x20when\x20you\x27re\x20shooting\x20at\x20him'), _0x14b752['checkbox']('Aim\x20at\x20AIs', 'AImbot', 'Makes\x20the\x20aimbot\x20shoot\x20at\x20NPCs'), _0x14b752['checkbox']('FOV\x20check', 'frustumCheck', 'Makes\x20you\x20only\x20shoot\x20at\x20enemies\x20that\x20are\x20in\x20your\x20field\x20of\x20view.\x20Prevents\x20180\x20flicks'), _0x14b752['checkbox']('FOV\x20box', 'fovbox', 'Creates\x20a\x20box\x20in\x20which\x20enemies\x20can\x20be\x20targetted,\x20enable\x20with\x20FOV\x20check'), _0x14b752['select']('FOV\x20box\x20size', 'fovBoxSize', {
            'Big': 0x1,
            'Medium': 0x2,
            'Small': 0x3
        }), _0x14b752['checkbox']('Wallbangs', 'wallbangs', 'Makes\x20the\x20aimbot\x20shoot\x20enemies\x20behind\x20walls'), _0x14b752['checkbox']('Aimbot\x20range\x20check', 'rangeCheck', 'Checks\x20if\x20the\x20enemy\x20is\x20in\x20range\x20of\x20your\x20weapon\x20before\x20shooting\x20it,\x20disable\x20for\x20rocket\x20launcher'), _0x14b752['checkbox']('Auto\x20reload', 'autoReload', 'Automatically\x20reloads\x20your\x20weapon\x20when\x20it\x27s\x20out\x20of\x20ammo'), _0x14b752['checkbox']('Prevent\x20melee\x20throwing', 'preventMeleeThrowing', 'Prevents\x20you\x20from\x20throwing\x20your\x20knife');
    }), _0x53675a(0x1, () => {
        _0x14b752['select']('ESP\x20[H]', 'esp', {
            'None': 0x0,
            'Nametags': 0x1,
            'Box\x20ESP': 0x2,
            'Full\x20ESP': 0x3
        }), _0x14b752['select']('ESP\x20Font\x20Size', 'espFontSize', {
            '30px': 0x1e,
            '25px': 0x19,
            '20px': 0x14,
            '15px': 0xf,
            '10px': 0xa,
            '5px': 0x5
        }), _0x14b752['select']('Tracers', 'tracers', {
            'None': 0x0,
            'Bottom': 0x1,
            'Middle': 0x2
        }, 'Draws\x20lines\x20to\x20players'), _0x14b752['checkbox']('Mark\x20aimbot\x20target', 'markTarget', 'Shows\x20who\x20is\x20the\x20aimbot\x20targetting\x20at\x20the\x20time,\x20useful\x20for\x20aim\x20assist/aim\x20correction'), _0x14b752['checkbox']('Draw\x20FOV\x20box', 'drawFovbox', 'Draws\x20the\x20FOV\x20box\x20from\x20aimbot\x20settings'), _0x14b752['checkbox']('Chams', 'chams'), _0x14b752['select']('Chams\x20colour', 'chamsCol', {
            'White': 0x0,
            'Black': 0x1,
            'Purple': 0x2,
            'Pink': 0x3,
            'Blue': 0x4,
            'DarkBlue': 0x5,
            'Aqua': 0x6,
            'Green': 0x7,
            'Lime': 0x8,
            'Orange': 0x9,
            'Yellow': 0xa,
            'Red': 0xb,
            'Gaybow': 0xc
        }), _0x14b752['checkbox']('Friendly\x20chams', 'teamChams', 'Show\x20Chams\x20for\x20friendly\x20players'), _0x14b752['checkbox']('Wireframe', 'wireframe'), _0x14b752['slider']('RGB\x20interval', 'chamsInterval', 0x32, 0x3e8, 0x32, 'How\x20fast\x20will\x20the\x20RGB\x20chams\x20change\x20colour');
    }), _0x53675a(0x2, () => {
        _0x14b752['checkbox']('Third\x20person\x20mode', 'thirdPerson'), _0x14b752['checkbox']('Skin\x20hack', 'skinHack', 'Makes\x20you\x20able\x20to\x20use\x20any\x20skin\x20in\x20game,\x20only\x20shows\x20on\x20your\x20side'), _0x14b752['checkbox']('Billboard\x20shaders', 'animatedBillboards', 'Disable\x20if\x20you\x20get\x20fps\x20drops'), _0x14b752['checkbox']('Any\x20weapon\x20trail', 'alwaysTrail'), _0x14b752['slider']('Weapon\x20Zoom', 'weaponZoom', 0x0, 0x14, 0.1, 'Weapon\x20Zoom\x20Multiplier\x20Adjust');
    }), _0x53675a(0x3, () => {
        _0x14b752['checkbox']('Always\x20aim', 'alwaysAim', 'Makes\x20you\x20slower\x20and\x20jump\x20lower,\x20but\x20the\x20aimbot\x20can\x20start\x20shooting\x20at\x20enemies\x20\x20faster.\x20Only\x20use\x20if\x20ur\x20good\x20at\x20bhopping'), _0x14b752['checkbox']('Aim\x20when\x20target\x20visible', 'awtv'), _0x14b752['checkbox']('Unaim\x20when\x20no\x20target\x20visible', 'uwtv'), _0x14b752['checkbox']('Force\x20unsilent', 'forceUnsilent');
    }), _0x53675a(0x4, () => {
        _0x14b752['select']('Auto\x20bhop', 'bhop', {
            'None': 0x0,
            'Auto\x20Jump': 0x1,
            'Key\x20Jump': 0x2,
            'Auto\x20Slide': 0x3,
            'Key\x20Slide': 0x4
        }), _0x14b752['label']('Only\x20use\x20with\x20silent\x20aim'), _0x14b752['select']('Pitch\x20hax', 'pitchHack', {
            'Disabled': 0x0,
            'Downward': 0x1,
            'Upward': 0x2,
            'sin(time)': 0x3,
            'sin(time/5)': 0x4,
            'double': 0x5,
            'random': 0x6
        }, 'Only\x20use\x20with\x20aimbot\x20on'), _0x14b752['checkbox']('Spin\x20bot', 'spinBot');
    }), _0x53675a(0x5, () => {
        _0x14b752['checkbox']('Show\x20GUI\x20button', 'showGuiButton', 'Disable\x20if\x20you\x20don\x27t\x20want\x20the\x20dog\x20under\x20settings\x20to\x20be\x20visible'), _0x14b752['checkbox']('GUI\x20on\x20middle\x20mouse\x20button', 'guiOnMMB', 'Makes\x20it\x20possible\x20to\x20open\x20this\x20menu\x20by\x20clicking\x20the\x20mouse\x20wheel'), _0x14b752['checkbox']('Keybinds', 'keybinds', 'Turn\x20keybinds\x20on/off,\x20Aimbot\x20-\x20Y,\x20ESP\x20-\x20H'), _0x14b752['checkbox']('No\x20inactivity\x20kick', 'antikick', 'Disables\x20the\x20\x27Kicked\x20for\x20inactivity\x27\x20message\x20(client\x20side,\x20but\x20works)'), _0x14b752['checkbox']('Auto\x20nuke', 'autoNuke', 'Automatically\x20nukes\x20when\x20you\x20are\x20able\x20to'), _0x14b752['checkbox']('Force\x20nametags\x20on', 'fgno', 'Use\x20in\x20custom\x20games\x20with\x20disabled\x20nametags'), _0x14b752['input']('Custom\x20CSS', 'customCSS', 'url', '', 'URL\x20to\x20CSS\x20file');
    }), doge['isClient'] && _0x53675a(0x6, () => {
        _0x14b752['nobrlabel']('Restart\x20is\x20required\x20after\x20changing\x20any\x20of\x20these\x20settings'), _0x14b752['br'](), _0x14b752['client_setting']('Uncap\x20FPS', 'uncap_fps', 'Disables\x20V-Sync'), _0x14b752['client_setting']('Adblock', 'adblock', 'Disables\x20ads');
    }), _0x32ad18 += '</div>', _0x32ad18;
} ['getDistance'](_0x4db112, _0x1cbb5a, _0x5df57e, _0xe9b301) {
    return Math['sqrt']((_0x5df57e -= _0x4db112) * _0x5df57e + (_0xe9b301 -= _0x1cbb5a) * _0xe9b301);
} ['getDistance3D'](_0x2add3f, _0x232a53, _0x547272, _0x527139, _0x527676, _0x1b6ef6) {
    let _0x46f8a7 = _0x2add3f - _0x527139,
        _0x11582e = _0x232a53 - _0x527676,
        _0x20c25f = _0x547272 - _0x1b6ef6;
    return Math['sqrt'](_0x46f8a7 * _0x46f8a7 + _0x11582e * _0x11582e + _0x20c25f * _0x20c25f);
} ['getXDir'](_0x3fd751, _0x531acc, _0x2ebf3f, _0x59d6e0, _0x158dc2, _0x4fef73) {
    let _0x950ebf = Math['abs'](_0x531acc - _0x158dc2),
        _0xeb45c6 = this['getDistance3D'](_0x3fd751, _0x531acc, _0x2ebf3f, _0x59d6e0, _0x158dc2, _0x4fef73);
    return Math['asin'](_0x950ebf / _0xeb45c6) * (_0x531acc > _0x158dc2 ? -0x1 : 0x1);
} ['getDir'](_0x19c5d8, _0x154148, _0x10498b, _0x30a2fe) {
    return Math['atan2'](_0x154148 - _0x30a2fe, _0x19c5d8 - _0x10498b);
} ['getAngleDist'](_0x5724f8, _0x1ad226) {
    return Math['atan2'](Math['sin'](_0x1ad226 - _0x5724f8), Math['cos'](_0x5724f8 - _0x1ad226));
} ['containsPoint'](_0x5aead0) {
    let _0x1d6a52 = this['renderer']['frustum']['planes'];
    for (let _0x5cc093 = 0x0; _0x5cc093 < 0x6; _0x5cc093++) {
        if (_0x1d6a52[_0x5cc093]['distanceToPoint'](_0x5aead0) < 0x0) return ![];
    }
    return !![];
} ['world2Screen'](_0x3264ec, _0x1180bd, _0x3a270e, _0x40fb40 = 0x0) {
    return _0x3264ec['y'] += _0x40fb40, _0x3264ec['project'](this['renderer']['camera']), _0x3264ec['x'] = (_0x3264ec['x'] + 0x1) / 0x2, _0x3264ec['y'] = (-_0x3264ec['y'] + 0x1) / 0x2, _0x3264ec['x'] *= _0x1180bd, _0x3264ec['y'] *= _0x3a270e, _0x3264ec;
} ['isType'](_0x2e1a4f, _0x198ca9) {
    return typeof _0x2e1a4f === _0x198ca9;
} ['isDefined'](_0x3552ad) {
    return !this['isType'](_0x3552ad, 'undefined') && _0x3552ad !== null;
} ['arrayTest'](_0x23a786, _0x3d5520, _0x4b3c87) {
    return _0x3d5520['some'](_0x209666 => _0x4b3c87(_0x209666));
} ['createElement'](_0x1b18e6, _0x24f314, _0x2d6bdc) {
    let _0x85fb34 = document['createElement'](_0x1b18e6);
    if (_0x2d6bdc) _0x85fb34['id'] = _0x2d6bdc;
    return _0x85fb34['innerHTML'] = _0x24f314, _0x85fb34;
} ['createObserver'](_0x38edc8, _0x57de0a, _0x40a4a1, _0x41acff = !![]) {
    return new MutationObserver((_0x331cc9, _0x41b6e0) => {
        (_0x57de0a == 'src' || _0x41acff && _0x331cc9[0x0]['target']['style']['display'] == 'block' || !_0x41acff) && _0x40a4a1(_0x331cc9[0x0]['target']);
    })['observe'](_0x38edc8, _0x57de0a == 'childList' ? {
        'childList': !![]
    } : {
        'attributes': !![],
        'attributeFilter': [_0x57de0a]
    });
} ['genHash'](_0x10c980) {
    return [...Array(_0x10c980)]['map'](_0x1bbd12 => 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' [~~(Math['random']() * 0x34)])['join']('');
} ['saveAs'](_0x2acb5b, _0x21a1e9) {
    let _0x14f02e = new Blob([_0x21a1e9], {
            'type': 'text/plain'
        }),
        _0xbb5e04 = window['document']['createElement']('a');
    _0xbb5e04['href'] = window['URL']['createObjectURL'](_0x14f02e), _0xbb5e04['download'] = _0x2acb5b, window['document']['body']['appendChild'](_0xbb5e04), _0xbb5e04['click'](), window['document']['body']['removeChild'](_0xbb5e04);
}
async ['store'](_0x55128f) {
    const _0x306c77 = 'dogeware';
    switch (_0x55128f) {
        case 'get':
            return GM['getValue'](_0x306c77)['then'](_0x3c2f5d => this['isDefined'](_0x3c2f5d) ? JSON['parse'](_0x3c2f5d) : this['settings']);
        case 'set':
            return GM['setValue'](_0x306c77, JSON['stringify'](this['settings']));
        case 'reset':
            return GM['deleteValue'](_0x306c77);
    }
}
async ['waitFor'](_0x163171, _0x10bc5e = Infinity, _0x584209 = null) {
    let _0x1f30dd = _0x41c39b => new Promise(_0x48992c => setTimeout(_0x48992c, _0x41c39b));
    return new Promise(async (_0x2d8a27, _0xe5e852) => {
        if (typeof _0x10bc5e != 'number') _0xe5e852('Timeout\x20argument\x20not\x20a\x20number\x20in\x20waitFor(selector,\x20timeout_ms)');
        let _0x522e1e, _0x5f43f0 = 0x64;
        while (_0x522e1e === undefined || _0x522e1e === ![] || _0x522e1e === null || _0x522e1e['length'] === 0x0) {
            if (_0x584209 && _0x584209 instanceof Function) _0x584209();;
            if (_0x10bc5e % 0x2710 < _0x5f43f0) console['log']('waiting\x20for:\x20', _0x163171);
            if ((_0x10bc5e -= _0x5f43f0) < 0x0) {
                console['log']('Timeout\x20:\x20', _0x163171), _0x2d8a27(![]);
                return;
            }
            await _0x1f30dd(_0x5f43f0), _0x522e1e = typeof _0x163171 === 'string' ? Function(_0x163171)() : _0x163171();
        }
        console['log']('Passed\x20:\x20', _0x163171), _0x2d8a27(_0x522e1e);
    });
}
};
const doge = new Dogeware();
