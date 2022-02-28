!function (g, t) {
    "object" == typeof exports ? module.exports = exports = t() : "function" == typeof define && define.amd ? define([], t) : g.KeyouCryptography = t()
}(this, function () {
    var _global_ = {};
    if (this) {
        _global_ = this;
    }
    var KJUR = {};
    function g(t, A, C) {
        if (!(this instanceof g)) return new g(t, A, C);
        null != t && ("number" == typeof t ? this.fromNumber(t, A, C) : null == A && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, A))
    }

    function t(g) {
        return K.charAt(g)
    }

    function A(g, t) {
        var A = N[g.charCodeAt(t)];
        return null == A ? -1 : A
    }

    function C(t) {
        var A = new g;
        return A.fromInt(t), A
    }

    function I(g) {
        var t, A = 1;
        return 0 != (t = g >>> 16) && (g = t, A += 16), 0 != (t = g >> 8) && (g = t, A += 8), 0 != (t = g >> 4) && (g = t, A += 4), 0 != (t = g >> 2) && (g = t, A += 2), 0 != (t = g >> 1) && (g = t, A += 1), A
    }

    function e(g) {
        this.m = g
    }

    function r(g) {
        this.m = g, this.mp = g.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << g.DB - 15) - 1, this.mt2 = 2 * g.t
    }

    function i(g, t) {
        return g & t
    }

    function n(g, t) {
        return g | t
    }

    function s(g, t) {
        return g ^ t
    }

    function o(g, t) {
        return g & ~t
    }

    function a(g) {
        if (0 == g) return -1;
        var t = 0;
        return 0 == (65535 & g) && (g >>= 16, t += 16), 0 == (255 & g) && (g >>= 8, t += 8), 0 == (15 & g) && (g >>= 4, t += 4), 0 == (3 & g) && (g >>= 2, t += 2), 0 == (1 & g) && ++t, t
    }

    function h(g) {
        for (var t = 0; 0 != g;) g &= g - 1, ++t;
        return t
    }

    function u() {
    }

    function c(g) {
        return g
    }

    function l(t) {
        this.r2 = new g, this.q3 = new g, g.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t), this.m = t
    }

    function f() {
        this.i = 0, this.j = 0, this.S = new Array
    }

    function d() {
        return new f
    }

    function p(g) {
        k[H++] ^= 255 & g, k[H++] ^= g >> 8 & 255, k[H++] ^= g >> 16 & 255, k[H++] ^= g >> 24 & 255, H >= L && (H -= L)
    }

    function F() {
        p((new Date).getTime())
    }

    function y() {
        if (null == M) {
            for (F(), (M = d()).init(k), H = 0; H < k.length; ++H) k[H] = 0;
            H = 0
        }
        return M.next()
    }

    function m() {
    }

    function b(g, t) {
        this.x = t, this.q = g
    }

    function w(t, A, C, I) {
        this.curve = t, this.x = A, this.y = C, this.z = null == I ? g.ONE : I, this.zinv = null
    }

    function S(g, t, A) {
        this.q = g, this.a = this.fromBigInteger(t), this.b = this.fromBigInteger(A), this.infinity = new w(this, null, null)
    }

    function D() {
        this.BYTE_LENGTH = 64, this.xBuf = new Array, this.xBufOff = 0, this.byteCount = 0, this.DIGEST_LENGTH = 32, this.v0 = [1937774191, 1226093241, 388252375, 3666478592, 2842636476, 372324522, 3817729613, 2969243214], this.v0 = [1937774191, 1226093241, 388252375, -628488704, -1452330820, 372324522, -477237683, -1325724082], this.v = new Array(8), this.v_ = new Array(8), this.X0 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.X = new Array(68), this.xOff = 0, this.T_00_15 = 2043430169, this.T_16_63 = 2055708042, arguments.length > 0 ? this.InitDigest(arguments[0]) : this.Init()
    }

    var x = x || function (g) {
        var t = {};
        return t.util = {}, t.algorithm = {}, t.AsymmetricAlg = {
            RSA: { name: "RSA" },
            SM2: { name: "SM2" }
        }, t.SymmetricAlg = {
            SM4: { name: "SM4", size: 16 },
            DES64: { name: "DES", size: 8 },
            DES128: { name: "DES", size: 16 },
            DES192: { name: "DES", size: 24 },
            AES128: { name: "AES", size: 16 },
            AES192: { name: "AES", size: 24 },
            AES256: { name: "AES", size: 32 }
        }, t.Pad = {
            padPKCS5: "PKCS5",
            padLV0: "LV0",
            pad0x00: "0x00",
            pad0x80: "0x80"
        }, t.Hasher = {
            NONE: { name: "NONE", DER_OID: "" },
            SHA1: { name: "SHA1", DER_OID: "3021300906052b0E03021A05000414" },
            SHA224: { name: "SHA224", DER_OID: "302D300D06096086480165030402040500041C" },
            SHA256: { name: "SHA256", DER_OID: "3031300D060960864801650304020105000420" },
            SHA384: { name: "SHA384", DER_OID: "3041300D060960864801650304020205000430" },
            SHA512: { name: "SHA512", DER_OID: "3051300D060960864801650304020305000440" },
            MD5: { name: "MD5", DER_OID: "3020300C06082A864886F70d020505000410" }
        }, t
    }();
    x.util.Checker = {
        name: "Checker", checkOnlyPrintChar: function (g) {
            return /^[\u0020-\u007E]+$/.test(g)
        }, checkHasChinese: function (g) {
            return /.*[\u2E80-\u9FFF]+.*$/.test(g)
        }, checkArgument: function (g, t) {
            if (!g) throw new TypeError("Illegal Argument:" + t)
        }, checkExist: function (g, t) {
            if (void 0 === typeof g || null === g) throw new TypeError("object is undefined or object is null. " + t);
            return g
        }, checkNotEmpty: function (g, t) {
            if (void 0 === typeof g || null === g) throw new TypeError("object is empty." + t);
            if (void 0 !== typeof g.length && 0 === g.length) throw new TypeError("object is empty." + t);
            return g
        }, checkState: function (g, t) {
            if (!g) throw new Error("Illegal State:" + t)
        }
    }, function () {
        var g = x.util, t = g.Checker;
        g.Hex = {
            name: "Hex", stringify: function (g) {
                for (var t = [], A = g.length, C = 0; C < A; C++) {
                    var I = g[C];
                    t.push((I >>> 4).toString(16)), t.push((15 & I).toString(16))
                }
                return t.join("").toUpperCase()
            }, encode: function (g) {
                return this.stringify(g)
            }, parse: function (g) {
                var A = [];
                t.checkArgument(void 0 != g && g.length % 2 == 0, "illegal Hex string:" + g);
                var C = new RegExp("[A-Fa-f0-9]+$", "g");
                t.checkArgument(g.match(C), "illegal Hex string:" + g);
                for (var I = g.length / 2, e = 0; e < I; e++) A[e] = parseInt(g.substring(2 * e, 2 * e + 2), 16);
                return A
            }, decode: function (g) {
                return this.parse(g)
            }
        }
    }();
    var E = E || function (g, t) {
        var A = {}, C = A.lib = {}, I = C.Base = function () {
            function g() {
            }

            return {
                extend: function (t) {
                    g.prototype = this;
                    var A = new g;
                    return t && A.mixIn(t), A.hasOwnProperty("init") || (A.init = function () {
                        A.$super.init.apply(this, arguments)
                    }), A.init.prototype = A, A.$super = this, A
                }, create: function () {
                    var g = this.extend();
                    return g.init.apply(g, arguments), g
                }, init: function () {
                }, mixIn: function (g) {
                    for (var t in g) g.hasOwnProperty(t) && (this[t] = g[t]);
                    g.hasOwnProperty("toString") && (this.toString = g.toString)
                }, clone: function () {
                    return this.init.prototype.extend(this)
                }
            }
        }(), e = C.WordArray = I.extend({
            init: function (g, t) {
                g = this.words = g || [], this.sigBytes = void 0 != t ? t : 4 * g.length
            }, toString: function (g) {
                return (g || i).stringify(this)
            }, concat: function (g) {
                var t = this.words, A = g.words, C = this.sigBytes, I = g.sigBytes;
                if (this.clamp(), C % 4) for (r = 0; r < I; r++) {
                    var e = A[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                    t[C + r >>> 2] |= e << 24 - (C + r) % 4 * 8
                } else if (A.length > 65535) for (var r = 0; r < I; r += 4) t[C + r >>> 2] = A[r >>> 2]; else t.push.apply(t, A);
                return this.sigBytes += I, this
            }, clamp: function () {
                var t = this.words, A = this.sigBytes;
                t[A >>> 2] &= 4294967295 << 32 - A % 4 * 8, t.length = g.ceil(A / 4)
            }, clone: function () {
                var g = I.clone.call(this);
                return g.words = this.words.slice(0), g
            }, random: function (t) {
                for (var A = [], C = 0; C < t; C += 4) A.push(4294967296 * g.random() | 0);
                return new e.init(A, t)
            }
        }), r = A.enc = {}, i = r.Hex = {
            stringify: function (g) {
                for (var t = g.words, A = g.sigBytes, C = [], I = 0; I < A; I++) {
                    var e = t[I >>> 2] >>> 24 - I % 4 * 8 & 255;
                    C.push((e >>> 4).toString(16)), C.push((15 & e).toString(16))
                }
                return C.join("")
            }, parse: function (g) {
                for (var t = g.length, A = [], C = 0; C < t; C += 2) A[C >>> 3] |= parseInt(g.substr(C, 2), 16) << 24 - C % 8 * 4;
                return new e.init(A, t / 2)
            }
        }, n = r.Latin1 = {
            stringify: function (g) {
                for (var t = g.words, A = g.sigBytes, C = [], I = 0; I < A; I++) {
                    var e = t[I >>> 2] >>> 24 - I % 4 * 8 & 255;
                    C.push(String.fromCharCode(e))
                }
                return C.join("")
            }, parse: function (g) {
                for (var t = g.length, A = [], C = 0; C < t; C++) A[C >>> 2] |= (255 & g.charCodeAt(C)) << 24 - C % 4 * 8;
                return new e.init(A, t)
            }
        }, s = r.Utf8 = {
            stringify: function (g) {
                try {
                    return decodeURIComponent(escape(n.stringify(g)))
                } catch (g) {
                    throw new Error("Malformed UTF-8 data")
                }
            }, parse: function (g) {
                return n.parse(unescape(encodeURIComponent(g)))
            }
        }, o = C.BufferedBlockAlgorithm = I.extend({
            reset: function () {
                this._data = new e.init, this._nDataBytes = 0
            }, _append: function (g) {
                "string" == typeof g && (g = s.parse(g)), this._data.concat(g), this._nDataBytes += g.sigBytes
            }, _process: function (t) {
                var A = this._data, C = A.words, I = A.sigBytes, r = this.blockSize, i = I / (4 * r),
                    n = (i = t ? g.ceil(i) : g.max((0 | i) - this._minBufferSize, 0)) * r, s = g.min(4 * n, I);
                if (n) {
                    for (var o = 0; o < n; o += r) this._doProcessBlock(C, o);
                    var a = C.splice(0, n);
                    A.sigBytes -= s
                }
                return new e.init(a, s)
            }, clone: function () {
                var g = I.clone.call(this);
                return g._data = this._data.clone(), g
            }, _minBufferSize: 0
        }), a = (C.Hasher = o.extend({
            cfg: I.extend(), init: function (g) {
                this.cfg = this.cfg.extend(g), this.reset()
            }, reset: function () {
                o.reset.call(this), this._doReset()
            }, update: function (g) {
                return this._append(g), this._process(), this
            }, finalize: function (g) {
                return g && this._append(g), this._doFinalize()
            }, blockSize: 16, _createHelper: function (g) {
                return function (t, A) {
                    return new g.init(A).finalize(t)
                }
            }, _createHmacHelper: function (g) {
                return function (t, A) {
                    return new a.HMAC.init(g, A).finalize(t)
                }
            }
        }), A.algo = {});
        return A
    }(Math);
    E.lib.Cipher || function (g) {
        var t = E, A = t.lib, C = A.Base, I = A.WordArray, e = A.BufferedBlockAlgorithm, r = t.enc,
            i = (r.Utf8, r.Base64), n = t.algo.EvpKDF, s = A.Cipher = e.extend({
                cfg: C.extend(), createEncryptor: function (g, t) {
                    return this.create(this._ENC_XFORM_MODE, g, t)
                }, createDecryptor: function (g, t) {
                    return this.create(this._DEC_XFORM_MODE, g, t)
                }, init: function (g, t, A) {
                    this.cfg = this.cfg.extend(A), this._xformMode = g, this._key = t, this.reset()
                }, reset: function () {
                    e.reset.call(this), this._doReset()
                }, process: function (g) {
                    return this._append(g), this._process()
                }, finalize: function (g) {
                    return g && this._append(g), this._doFinalize()
                }, keySize: 4, ivSize: 4, _ENC_XFORM_MODE: 1, _DEC_XFORM_MODE: 2, _createHelper: function () {
                    function g(g) {
                        return "string" == typeof g ? p : f
                    }

                    return function (t) {
                        return {
                            encrypt: function (A, C, I) {
                                return g(C).encrypt(t, A, C, I)
                            }, decrypt: function (A, C, I) {
                                return g(C).decrypt(t, A, C, I)
                            }
                        }
                    }
                }()
            }), o = (A.StreamCipher = s.extend({
                _doFinalize: function () {
                    return this._process(!0)
                }, blockSize: 1
            }), t.mode = {}), a = A.BlockCipherMode = C.extend({
                createEncryptor: function (g, t) {
                    return this.Encryptor.create(g, t)
                }, createDecryptor: function (g, t) {
                    return this.Decryptor.create(g, t)
                }, init: function (g, t) {
                    this._cipher = g, this._iv = t
                }
            }), h = o.CBC = function () {
                function t(t, A, C) {
                    var I = this._iv;
                    if (I) {
                        e = I;
                        this._iv = g
                    } else var e = this._prevBlock;
                    for (var r = 0; r < C; r++) t[A + r] ^= e[r]
                }

                var A = a.extend();
                return A.Encryptor = A.extend({
                    processBlock: function (g, A) {
                        var C = this._cipher, I = C.blockSize;
                        t.call(this, g, A, I), C.encryptBlock(g, A), this._prevBlock = g.slice(A, A + I)
                    }
                }), A.Decryptor = A.extend({
                    processBlock: function (g, A) {
                        var C = this._cipher, I = C.blockSize, e = g.slice(A, A + I);
                        C.decryptBlock(g, A), t.call(this, g, A, I), this._prevBlock = e
                    }
                }), A
            }(), u = (t.pad = {}).Pkcs7 = {
                pad: function (g, t) {
                    for (var A = 4 * t, C = A - g.sigBytes % A, e = C << 24 | C << 16 | C << 8 | C, r = [], i = 0; i < C; i += 4) r.push(e);
                    var n = I.create(r, C);
                    g.concat(n)
                }, unpad: function (g) {
                    var t = 255 & g.words[g.sigBytes - 1 >>> 2];
                    g.sigBytes -= t
                }
            }, c = (A.BlockCipher = s.extend({
                cfg: s.cfg.extend({ mode: h, padding: u }), reset: function () {
                    s.reset.call(this);
                    var g = this.cfg, t = g.iv, A = g.mode;
                    if (this._xformMode == this._ENC_XFORM_MODE) C = A.createEncryptor; else {
                        var C = A.createDecryptor;
                        this._minBufferSize = 1
                    }
                    this._mode = C.call(A, this, t && t.words)
                }, _doProcessBlock: function (g, t) {
                    this._mode.processBlock(g, t)
                }, _doFinalize: function () {
                    var g = this.cfg.padding;
                    if (this._xformMode == this._ENC_XFORM_MODE) {
                        g.pad(this._data, this.blockSize);
                        t = this._process(!0)
                    } else {
                        var t = this._process(!0);
                        g.unpad(t)
                    }
                    return t
                }, blockSize: 4
            }), A.CipherParams = C.extend({
                init: function (g) {
                    this.mixIn(g)
                }, toString: function (g) {
                    return (g || this.formatter).stringify(this)
                }
            })), l = (t.format = {}).OpenSSL = {
                stringify: function (g) {
                    var t = g.ciphertext, A = g.salt;
                    if (A) C = I.create([1398893684, 1701076831]).concat(A).concat(t); else var C = t;
                    return C.toString(i)
                }, parse: function (g) {
                    var t = i.parse(g), A = t.words;
                    if (1398893684 == A[0] && 1701076831 == A[1]) {
                        var C = I.create(A.slice(2, 4));
                        A.splice(0, 4), t.sigBytes -= 16
                    }
                    return c.create({ ciphertext: t, salt: C })
                }
            }, f = A.SerializableCipher = C.extend({
                cfg: C.extend({ format: l }), encrypt: function (g, t, A, C) {
                    C = this.cfg.extend(C);
                    var I = g.createEncryptor(A, C), e = I.finalize(t), r = I.cfg;
                    return c.create({
                        ciphertext: e,
                        key: A,
                        iv: r.iv,
                        algorithm: g,
                        mode: r.mode,
                        padding: r.padding,
                        blockSize: g.blockSize,
                        formatter: C.format
                    })
                }, decrypt: function (g, t, A, C) {
                    return C = this.cfg.extend(C), t = this._parse(t, C.format), g.createDecryptor(A, C).finalize(t.ciphertext)
                }, _parse: function (g, t) {
                    return "string" == typeof g ? t.parse(g, this) : g
                }
            }), d = (t.kdf = {}).OpenSSL = {
                execute: function (g, t, A, C) {
                    C || (C = I.random(8));
                    var e = n.create({ keySize: t + A }).compute(g, C), r = I.create(e.words.slice(t), 4 * A);
                    return e.sigBytes = 4 * t, c.create({ key: e, iv: r, salt: C })
                }
            }, p = A.PasswordBasedCipher = f.extend({
                cfg: f.cfg.extend({ kdf: d }), encrypt: function (g, t, A, C) {
                    var I = (C = this.cfg.extend(C)).kdf.execute(A, g.keySize, g.ivSize);
                    C.iv = I.iv;
                    var e = f.encrypt.call(this, g, t, I.key, C);
                    return e.mixIn(I), e
                }, decrypt: function (g, t, A, C) {
                    C = this.cfg.extend(C), t = this._parse(t, C.format);
                    var I = C.kdf.execute(A, g.keySize, g.ivSize, t.salt);
                    return C.iv = I.iv, f.decrypt.call(this, g, t, I.key, C)
                }
            })
    }(), function () {
        function g(g, t) {
            var A = (this._lBlock >>> g ^ this._rBlock) & t;
            this._rBlock ^= A, this._lBlock ^= A << g
        }

        function t(g, t) {
            var A = (this._rBlock >>> g ^ this._lBlock) & t;
            this._lBlock ^= A, this._rBlock ^= A << g
        }

        var A = E, C = A.lib, I = C.WordArray, e = C.BlockCipher, r = A.algo,
            i = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4],
            n = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32],
            s = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], o = [{
                0: 8421888,
                268435456: 32768,
                536870912: 8421378,
                805306368: 2,
                1073741824: 512,
                1342177280: 8421890,
                1610612736: 8389122,
                1879048192: 8388608,
                2147483648: 514,
                2415919104: 8389120,
                2684354560: 33280,
                2952790016: 8421376,
                3221225472: 32770,
                3489660928: 8388610,
                3758096384: 0,
                4026531840: 33282,
                134217728: 0,
                402653184: 8421890,
                671088640: 33282,
                939524096: 32768,
                1207959552: 8421888,
                1476395008: 512,
                1744830464: 8421378,
                2013265920: 2,
                2281701376: 8389120,
                2550136832: 33280,
                2818572288: 8421376,
                3087007744: 8389122,
                3355443200: 8388610,
                3623878656: 32770,
                3892314112: 514,
                4160749568: 8388608,
                1: 32768,
                268435457: 2,
                536870913: 8421888,
                805306369: 8388608,
                1073741825: 8421378,
                1342177281: 33280,
                1610612737: 512,
                1879048193: 8389122,
                2147483649: 8421890,
                2415919105: 8421376,
                2684354561: 8388610,
                2952790017: 33282,
                3221225473: 514,
                3489660929: 8389120,
                3758096385: 32770,
                4026531841: 0,
                134217729: 8421890,
                402653185: 8421376,
                671088641: 8388608,
                939524097: 512,
                1207959553: 32768,
                1476395009: 8388610,
                1744830465: 2,
                2013265921: 33282,
                2281701377: 32770,
                2550136833: 8389122,
                2818572289: 514,
                3087007745: 8421888,
                3355443201: 8389120,
                3623878657: 0,
                3892314113: 33280,
                4160749569: 8421378
            }, {
                0: 1074282512,
                16777216: 16384,
                33554432: 524288,
                50331648: 1074266128,
                67108864: 1073741840,
                83886080: 1074282496,
                100663296: 1073758208,
                117440512: 16,
                134217728: 540672,
                150994944: 1073758224,
                167772160: 1073741824,
                184549376: 540688,
                201326592: 524304,
                218103808: 0,
                234881024: 16400,
                251658240: 1074266112,
                8388608: 1073758208,
                25165824: 540688,
                41943040: 16,
                58720256: 1073758224,
                75497472: 1074282512,
                92274688: 1073741824,
                109051904: 524288,
                125829120: 1074266128,
                142606336: 524304,
                159383552: 0,
                176160768: 16384,
                192937984: 1074266112,
                209715200: 1073741840,
                226492416: 540672,
                243269632: 1074282496,
                260046848: 16400,
                268435456: 0,
                285212672: 1074266128,
                301989888: 1073758224,
                318767104: 1074282496,
                335544320: 1074266112,
                352321536: 16,
                369098752: 540688,
                385875968: 16384,
                402653184: 16400,
                419430400: 524288,
                436207616: 524304,
                452984832: 1073741840,
                469762048: 540672,
                486539264: 1073758208,
                503316480: 1073741824,
                520093696: 1074282512,
                276824064: 540688,
                293601280: 524288,
                310378496: 1074266112,
                327155712: 16384,
                343932928: 1073758208,
                360710144: 1074282512,
                377487360: 16,
                394264576: 1073741824,
                411041792: 1074282496,
                427819008: 1073741840,
                444596224: 1073758224,
                461373440: 524304,
                478150656: 0,
                494927872: 16400,
                511705088: 1074266128,
                528482304: 540672
            }, {
                0: 260,
                1048576: 0,
                2097152: 67109120,
                3145728: 65796,
                4194304: 65540,
                5242880: 67108868,
                6291456: 67174660,
                7340032: 67174400,
                8388608: 67108864,
                9437184: 67174656,
                10485760: 65792,
                11534336: 67174404,
                12582912: 67109124,
                13631488: 65536,
                14680064: 4,
                15728640: 256,
                524288: 67174656,
                1572864: 67174404,
                2621440: 0,
                3670016: 67109120,
                4718592: 67108868,
                5767168: 65536,
                6815744: 65540,
                7864320: 260,
                8912896: 4,
                9961472: 256,
                11010048: 67174400,
                12058624: 65796,
                13107200: 65792,
                14155776: 67109124,
                15204352: 67174660,
                16252928: 67108864,
                16777216: 67174656,
                17825792: 65540,
                18874368: 65536,
                19922944: 67109120,
                20971520: 256,
                22020096: 67174660,
                23068672: 67108868,
                24117248: 0,
                25165824: 67109124,
                26214400: 67108864,
                27262976: 4,
                28311552: 65792,
                29360128: 67174400,
                30408704: 260,
                31457280: 65796,
                32505856: 67174404,
                17301504: 67108864,
                18350080: 260,
                19398656: 67174656,
                20447232: 0,
                21495808: 65540,
                22544384: 67109120,
                23592960: 256,
                24641536: 67174404,
                25690112: 65536,
                26738688: 67174660,
                27787264: 65796,
                28835840: 67108868,
                29884416: 67109124,
                30932992: 67174400,
                31981568: 4,
                33030144: 65792
            }, {
                0: 2151682048,
                65536: 2147487808,
                131072: 4198464,
                196608: 2151677952,
                262144: 0,
                327680: 4198400,
                393216: 2147483712,
                458752: 4194368,
                524288: 2147483648,
                589824: 4194304,
                655360: 64,
                720896: 2147487744,
                786432: 2151678016,
                851968: 4160,
                917504: 4096,
                983040: 2151682112,
                32768: 2147487808,
                98304: 64,
                163840: 2151678016,
                229376: 2147487744,
                294912: 4198400,
                360448: 2151682112,
                425984: 0,
                491520: 2151677952,
                557056: 4096,
                622592: 2151682048,
                688128: 4194304,
                753664: 4160,
                819200: 2147483648,
                884736: 4194368,
                950272: 4198464,
                1015808: 2147483712,
                1048576: 4194368,
                1114112: 4198400,
                1179648: 2147483712,
                1245184: 0,
                1310720: 4160,
                1376256: 2151678016,
                1441792: 2151682048,
                1507328: 2147487808,
                1572864: 2151682112,
                1638400: 2147483648,
                1703936: 2151677952,
                1769472: 4198464,
                1835008: 2147487744,
                1900544: 4194304,
                1966080: 64,
                2031616: 4096,
                1081344: 2151677952,
                1146880: 2151682112,
                1212416: 0,
                1277952: 4198400,
                1343488: 4194368,
                1409024: 2147483648,
                1474560: 2147487808,
                1540096: 64,
                1605632: 2147483712,
                1671168: 4096,
                1736704: 2147487744,
                1802240: 2151678016,
                1867776: 4160,
                1933312: 2151682048,
                1998848: 4194304,
                2064384: 4198464
            }, {
                0: 128,
                4096: 17039360,
                8192: 262144,
                12288: 536870912,
                16384: 537133184,
                20480: 16777344,
                24576: 553648256,
                28672: 262272,
                32768: 16777216,
                36864: 537133056,
                40960: 536871040,
                45056: 553910400,
                49152: 553910272,
                53248: 0,
                57344: 17039488,
                61440: 553648128,
                2048: 17039488,
                6144: 553648256,
                10240: 128,
                14336: 17039360,
                18432: 262144,
                22528: 537133184,
                26624: 553910272,
                30720: 536870912,
                34816: 537133056,
                38912: 0,
                43008: 553910400,
                47104: 16777344,
                51200: 536871040,
                55296: 553648128,
                59392: 16777216,
                63488: 262272,
                65536: 262144,
                69632: 128,
                73728: 536870912,
                77824: 553648256,
                81920: 16777344,
                86016: 553910272,
                90112: 537133184,
                94208: 16777216,
                98304: 553910400,
                102400: 553648128,
                106496: 17039360,
                110592: 537133056,
                114688: 262272,
                118784: 536871040,
                122880: 0,
                126976: 17039488,
                67584: 553648256,
                71680: 16777216,
                75776: 17039360,
                79872: 537133184,
                83968: 536870912,
                88064: 17039488,
                92160: 128,
                96256: 553910272,
                100352: 262272,
                104448: 553910400,
                108544: 0,
                112640: 553648128,
                116736: 16777344,
                120832: 262144,
                124928: 537133056,
                129024: 536871040
            }, {
                0: 268435464,
                256: 8192,
                512: 270532608,
                768: 270540808,
                1024: 268443648,
                1280: 2097152,
                1536: 2097160,
                1792: 268435456,
                2048: 0,
                2304: 268443656,
                2560: 2105344,
                2816: 8,
                3072: 270532616,
                3328: 2105352,
                3584: 8200,
                3840: 270540800,
                128: 270532608,
                384: 270540808,
                640: 8,
                896: 2097152,
                1152: 2105352,
                1408: 268435464,
                1664: 268443648,
                1920: 8200,
                2176: 2097160,
                2432: 8192,
                2688: 268443656,
                2944: 270532616,
                3200: 0,
                3456: 270540800,
                3712: 2105344,
                3968: 268435456,
                4096: 268443648,
                4352: 270532616,
                4608: 270540808,
                4864: 8200,
                5120: 2097152,
                5376: 268435456,
                5632: 268435464,
                5888: 2105344,
                6144: 2105352,
                6400: 0,
                6656: 8,
                6912: 270532608,
                7168: 8192,
                7424: 268443656,
                7680: 270540800,
                7936: 2097160,
                4224: 8,
                4480: 2105344,
                4736: 2097152,
                4992: 268435464,
                5248: 268443648,
                5504: 8200,
                5760: 270540808,
                6016: 270532608,
                6272: 270540800,
                6528: 270532616,
                6784: 8192,
                7040: 2105352,
                7296: 2097160,
                7552: 0,
                7808: 268435456,
                8064: 268443656
            }, {
                0: 1048576,
                16: 33555457,
                32: 1024,
                48: 1049601,
                64: 34604033,
                80: 0,
                96: 1,
                112: 34603009,
                128: 33555456,
                144: 1048577,
                160: 33554433,
                176: 34604032,
                192: 34603008,
                208: 1025,
                224: 1049600,
                240: 33554432,
                8: 34603009,
                24: 0,
                40: 33555457,
                56: 34604032,
                72: 1048576,
                88: 33554433,
                104: 33554432,
                120: 1025,
                136: 1049601,
                152: 33555456,
                168: 34603008,
                184: 1048577,
                200: 1024,
                216: 34604033,
                232: 1,
                248: 1049600,
                256: 33554432,
                272: 1048576,
                288: 33555457,
                304: 34603009,
                320: 1048577,
                336: 33555456,
                352: 34604032,
                368: 1049601,
                384: 1025,
                400: 34604033,
                416: 1049600,
                432: 1,
                448: 0,
                464: 34603008,
                480: 33554433,
                496: 1024,
                264: 1049600,
                280: 33555457,
                296: 34603009,
                312: 1,
                328: 33554432,
                344: 1048576,
                360: 1025,
                376: 34604032,
                392: 33554433,
                408: 34603008,
                424: 0,
                440: 34604033,
                456: 1049601,
                472: 1024,
                488: 33555456,
                504: 1048577
            }, {
                0: 134219808,
                1: 131072,
                2: 134217728,
                3: 32,
                4: 131104,
                5: 134350880,
                6: 134350848,
                7: 2048,
                8: 134348800,
                9: 134219776,
                10: 133120,
                11: 134348832,
                12: 2080,
                13: 0,
                14: 134217760,
                15: 133152,
                2147483648: 2048,
                2147483649: 134350880,
                2147483650: 134219808,
                2147483651: 134217728,
                2147483652: 134348800,
                2147483653: 133120,
                2147483654: 133152,
                2147483655: 32,
                2147483656: 134217760,
                2147483657: 2080,
                2147483658: 131104,
                2147483659: 134350848,
                2147483660: 0,
                2147483661: 134348832,
                2147483662: 134219776,
                2147483663: 131072,
                16: 133152,
                17: 134350848,
                18: 32,
                19: 2048,
                20: 134219776,
                21: 134217760,
                22: 134348832,
                23: 131072,
                24: 0,
                25: 131104,
                26: 134348800,
                27: 134219808,
                28: 134350880,
                29: 133120,
                30: 2080,
                31: 134217728,
                2147483664: 131072,
                2147483665: 2048,
                2147483666: 134348832,
                2147483667: 133152,
                2147483668: 32,
                2147483669: 134348800,
                2147483670: 134217728,
                2147483671: 134219808,
                2147483672: 134350880,
                2147483673: 134217760,
                2147483674: 134219776,
                2147483675: 0,
                2147483676: 133120,
                2147483677: 2080,
                2147483678: 131104,
                2147483679: 134350848
            }], a = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679], h = r.DES = e.extend({
                _doReset: function () {
                    for (var g = this._key.words, t = [], A = 0; A < 56; A++) {
                        var C = i[A] - 1;
                        t[A] = g[C >>> 5] >>> 31 - C % 32 & 1
                    }
                    for (var I = this._subKeys = [], e = 0; e < 16; e++) {
                        for (var r = I[e] = [], o = s[e], A = 0; A < 24; A++) r[A / 6 | 0] |= t[(n[A] - 1 + o) % 28] << 31 - A % 6, r[4 + (A / 6 | 0)] |= t[28 + (n[A + 24] - 1 + o) % 28] << 31 - A % 6;
                        r[0] = r[0] << 1 | r[0] >>> 31;
                        for (A = 1; A < 7; A++) r[A] = r[A] >>> 4 * (A - 1) + 3;
                        r[7] = r[7] << 5 | r[7] >>> 27
                    }
                    for (var a = this._invSubKeys = [], A = 0; A < 16; A++) a[A] = I[15 - A]
                }, encryptBlock: function (g, t) {
                    this._doCryptBlock(g, t, this._subKeys)
                }, decryptBlock: function (g, t) {
                    this._doCryptBlock(g, t, this._invSubKeys)
                }, _doCryptBlock: function (A, C, I) {
                    this._lBlock = A[C], this._rBlock = A[C + 1], g.call(this, 4, 252645135), g.call(this, 16, 65535), t.call(this, 2, 858993459), t.call(this, 8, 16711935), g.call(this, 1, 1431655765);
                    for (var e = 0; e < 16; e++) {
                        for (var r = I[e], i = this._lBlock, n = this._rBlock, s = 0, h = 0; h < 8; h++) s |= o[h][((n ^ r[h]) & a[h]) >>> 0];
                        this._lBlock = n, this._rBlock = i ^ s
                    }
                    var u = this._lBlock;
                    this._lBlock = this._rBlock, this._rBlock = u, g.call(this, 1, 1431655765), t.call(this, 8, 16711935), t.call(this, 2, 858993459), g.call(this, 16, 65535), g.call(this, 4, 252645135), A[C] = this._lBlock, A[C + 1] = this._rBlock
                }, keySize: 2, ivSize: 2, blockSize: 2
            });
        A.DES = e._createHelper(h);
        var u = r.TripleDES = e.extend({
            _doReset: function () {
                var g = this._key.words;
                this._des1 = h.createEncryptor(I.create(g.slice(0, 2))), this._des2 = h.createEncryptor(I.create(g.slice(2, 4))), this._des3 = h.createEncryptor(I.create(g.slice(4, 6)))
            }, encryptBlock: function (g, t) {
                this._des1.encryptBlock(g, t), this._des2.decryptBlock(g, t), this._des3.encryptBlock(g, t)
            }, decryptBlock: function (g, t) {
                this._des3.decryptBlock(g, t), this._des2.encryptBlock(g, t), this._des1.decryptBlock(g, t)
            }, keySize: 6, ivSize: 2, blockSize: 2
        });
        A.TripleDES = e._createHelper(u)
    }(), function () {
        var g = E, t = g.lib.WordArray;
        g.enc.Base64 = {
            stringify: function (g) {
                var t = g.words, A = g.sigBytes, C = this._map;
                g.clamp();
                for (var I = [], e = 0; e < A; e += 3) for (var r = (t[e >>> 2] >>> 24 - e % 4 * 8 & 255) << 16 | (t[e + 1 >>> 2] >>> 24 - (e + 1) % 4 * 8 & 255) << 8 | t[e + 2 >>> 2] >>> 24 - (e + 2) % 4 * 8 & 255, i = 0; i < 4 && e + .75 * i < A; i++) I.push(C.charAt(r >>> 6 * (3 - i) & 63));
                var n = C.charAt(64);
                if (n) for (; I.length % 4;) I.push(n);
                return I.join("")
            }, parse: function (g) {
                var A = g.length, C = this._map, I = C.charAt(64);
                if (I) {
                    var e = g.indexOf(I);
                    -1 != e && (A = e)
                }
                for (var r = [], i = 0, n = 0; n < A; n++) if (n % 4) {
                    var s = C.indexOf(g.charAt(n - 1)) << n % 4 * 2, o = C.indexOf(g.charAt(n)) >>> 6 - n % 4 * 2;
                    r[i >>> 2] |= (s | o) << 24 - i % 4 * 8, i++
                }
                return t.create(r, i)
            }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        }
    }();
    var B = g.prototype;
    g.prototype.am = function (g, t, A, C, I, e) {
        for (; --e >= 0;) {
            var r = t * this[g++] + A[C] + I;
            I = Math.floor(r / 67108864), A[C++] = 67108863 & r
        }
        return I
    }, g.prototype.DB = 26, g.prototype.DM = 67108863;
    var T = g.prototype.DV = 1 << 26;
    g.prototype.FV = Math.pow(2, 52), g.prototype.F1 = 26, g.prototype.F2 = 0;
    var R, P, K = "0123456789abcdefghijklmnopqrstuvwxyz", N = new Array;
    for (R = "0".charCodeAt(0), P = 0; P <= 9; ++P) N[R++] = P;
    for (R = "a".charCodeAt(0), P = 10; P < 36; ++P) N[R++] = P;
    for (R = "A".charCodeAt(0), P = 10; P < 36; ++P) N[R++] = P;
    e.prototype.convert = function (g) {
        return g.s < 0 || g.compareTo(this.m) >= 0 ? g.mod(this.m) : g
    }, e.prototype.revert = function (g) {
        return g
    }, e.prototype.reduce = function (g) {
        g.divRemTo(this.m, null, g)
    }, e.prototype.mulTo = function (g, t, A) {
        g.multiplyTo(t, A), this.reduce(A)
    }, e.prototype.sqrTo = function (g, t) {
        g.squareTo(t), this.reduce(t)
    }, r.prototype.convert = function (t) {
        var A = new g;
        return t.abs().dlShiftTo(this.m.t, A), A.divRemTo(this.m, null, A), t.s < 0 && A.compareTo(g.ZERO) > 0 && this.m.subTo(A, A), A
    }, r.prototype.revert = function (t) {
        var A = new g;
        return t.copyTo(A), this.reduce(A), A
    }, r.prototype.reduce = function (g) {
        for (; g.t <= this.mt2;) g[g.t++] = 0;
        for (var t = 0; t < this.m.t; ++t) {
            var A = 32767 & g[t], C = A * this.mpl + ((A * this.mph + (g[t] >> 15) * this.mpl & this.um) << 15) & g.DM;
            for (g[A = t + this.m.t] += this.m.am(0, C, g, t, 0, this.m.t); g[A] >= g.DV;) g[A] -= g.DV, g[++A]++
        }
        g.clamp(), g.drShiftTo(this.m.t, g), g.compareTo(this.m) >= 0 && g.subTo(this.m, g)
    }, r.prototype.mulTo = function (g, t, A) {
        g.multiplyTo(t, A), this.reduce(A)
    }, r.prototype.sqrTo = function (g, t) {
        g.squareTo(t), this.reduce(t)
    }, B.copyTo = function (g) {
        for (var t = this.t - 1; t >= 0; --t) g[t] = this[t];
        g.t = this.t, g.s = this.s
    }, B.fromInt = function (g) {
        this.t = 1, this.s = g < 0 ? -1 : 0, g > 0 ? this[0] = g : g < -1 ? this[0] = g + T : this.t = 0
    }, B.fromString = function (t, C) {
        var I, e = this;
        if (16 == C) I = 4; else if (8 == C) I = 3; else if (256 == C) I = 8; else if (2 == C) I = 1; else if (32 == C) I = 5; else {
            if (4 != C) return void e.fromRadix(t, C);
            I = 2
        }
        e.t = 0, e.s = 0;
        for (var r = t.length, i = !1, n = 0; --r >= 0;) {
            var s = 8 == I ? 255 & t[r] : A(t, r);
            s < 0 ? "-" == t.charAt(r) && (i = !0) : (i = !1, 0 == n ? e[e.t++] = s : n + I > e.DB ? (e[e.t - 1] |= (s & (1 << e.DB - n) - 1) << n, e[e.t++] = s >> e.DB - n) : e[e.t - 1] |= s << n, (n += I) >= e.DB && (n -= e.DB))
        }
        8 == I && 0 != (128 & t[0]) && (e.s = -1, n > 0 && (e[e.t - 1] |= (1 << e.DB - n) - 1 << n)), e.clamp(), i && g.ZERO.subTo(e, e)
    }, B.clamp = function () {
        for (var g = this.s & this.DM; this.t > 0 && this[this.t - 1] == g;) --this.t
    }, B.dlShiftTo = function (g, t) {
        var A;
        for (A = this.t - 1; A >= 0; --A) t[A + g] = this[A];
        for (A = g - 1; A >= 0; --A) t[A] = 0;
        t.t = this.t + g, t.s = this.s
    }, B.drShiftTo = function (g, t) {
        for (var A = g; A < this.t; ++A) t[A - g] = this[A];
        t.t = Math.max(this.t - g, 0), t.s = this.s
    }, B.lShiftTo = function (g, t) {
        var A, C = this, I = g % C.DB, e = C.DB - I, r = (1 << e) - 1, i = Math.floor(g / C.DB), n = C.s << I & C.DM;
        for (A = C.t - 1; A >= 0; --A) t[A + i + 1] = C[A] >> e | n, n = (C[A] & r) << I;
        for (A = i - 1; A >= 0; --A) t[A] = 0;
        t[i] = n, t.t = C.t + i + 1, t.s = C.s, t.clamp()
    }, B.rShiftTo = function (g, t) {
        var A = this;
        t.s = A.s;
        var C = Math.floor(g / A.DB);
        if (C >= A.t) t.t = 0; else {
            var I = g % A.DB, e = A.DB - I, r = (1 << I) - 1;
            t[0] = A[C] >> I;
            for (var i = C + 1; i < A.t; ++i) t[i - C - 1] |= (A[i] & r) << e, t[i - C] = A[i] >> I;
            I > 0 && (t[A.t - C - 1] |= (A.s & r) << e), t.t = A.t - C, t.clamp()
        }
    }, B.subTo = function (g, t) {
        for (var A = this, C = 0, I = 0, e = Math.min(g.t, A.t); C < e;) I += A[C] - g[C], t[C++] = I & A.DM, I >>= A.DB;
        if (g.t < A.t) {
            for (I -= g.s; C < A.t;) I += A[C], t[C++] = I & A.DM, I >>= A.DB;
            I += A.s
        } else {
            for (I += A.s; C < g.t;) I -= g[C], t[C++] = I & A.DM, I >>= A.DB;
            I -= g.s
        }
        t.s = I < 0 ? -1 : 0, I < -1 ? t[C++] = A.DV + I : I > 0 && (t[C++] = I), t.t = C, t.clamp()
    }, B.multiplyTo = function (t, A) {
        var C = this.abs(), I = t.abs(), e = C.t;
        for (A.t = e + I.t; --e >= 0;) A[e] = 0;
        for (e = 0; e < I.t; ++e) A[e + C.t] = C.am(0, I[e], A, e, 0, C.t);
        A.s = 0, A.clamp(), this.s != t.s && g.ZERO.subTo(A, A)
    }, B.squareTo = function (g) {
        for (var t = this.abs(), A = g.t = 2 * t.t; --A >= 0;) g[A] = 0;
        for (A = 0; A < t.t - 1; ++A) {
            var C = t.am(A, t[A], g, 2 * A, 0, 1);
            (g[A + t.t] += t.am(A + 1, 2 * t[A], g, 2 * A + 1, C, t.t - A - 1)) >= t.DV && (g[A + t.t] -= t.DV, g[A + t.t + 1] = 1)
        }
        g.t > 0 && (g[g.t - 1] += t.am(A, t[A], g, 2 * A, 0, 1)), g.s = 0, g.clamp()
    }, B.divRemTo = function (t, A, C) {
        var e = this, r = t.abs();
        if (!(r.t <= 0)) {
            var i = e.abs();
            if (i.t < r.t) return null != A && A.fromInt(0), void (null != C && e.copyTo(C));
            null == C && (C = new g);
            var n = new g, s = e.s, o = t.s, a = e.DB - I(r[r.t - 1]);
            a > 0 ? (r.lShiftTo(a, n), i.lShiftTo(a, C)) : (r.copyTo(n), i.copyTo(C));
            var h = n.t, u = n[h - 1];
            if (0 != u) {
                var c = u * (1 << e.F1) + (h > 1 ? n[h - 2] >> e.F2 : 0), l = e.FV / c, f = (1 << e.F1) / c,
                    d = 1 << e.F2, p = C.t, F = p - h, v = null == A ? new g : A;
                for (n.dlShiftTo(F, v), C.compareTo(v) >= 0 && (C[C.t++] = 1, C.subTo(v, C)), g.ONE.dlShiftTo(h, v), v.subTo(n, n); n.t < h;) n[n.t++] = 0;
                for (; --F >= 0;) {
                    var y = C[--p] == u ? e.DM : Math.floor(C[p] * l + (C[p - 1] + d) * f);
                    if ((C[p] += n.am(0, y, C, F, 0, h)) < y) for (n.dlShiftTo(F, v), C.subTo(v, C); C[p] < --y;) C.subTo(v, C)
                }
                null != A && (C.drShiftTo(h, A), s != o && g.ZERO.subTo(A, A)), C.t = h, C.clamp(), a > 0 && C.rShiftTo(a, C), s < 0 && g.ZERO.subTo(C, C)
            }
        }
    }, B.invDigit = function () {
        if (this.t < 1) return 0;
        var g = this[0];
        if (0 == (1 & g)) return 0;
        var t = 3 & g;
        return t = t * (2 - (15 & g) * t) & 15, t = t * (2 - (255 & g) * t) & 255, t = t * (2 - ((65535 & g) * t & 65535)) & 65535, (t = t * (2 - g * t % this.DV) % this.DV) > 0 ? this.DV - t : -t
    }, B.isEven = function () {
        return 0 == (this.t > 0 ? 1 & this[0] : this.s)
    }, B.exp = function (t, A) {
        if (t > 4294967295 || t < 1) return g.ONE;
        var C = new g, e = new g, r = A.convert(this), i = I(t) - 1;
        for (r.copyTo(C); --i >= 0;) if (A.sqrTo(C, e), (t & 1 << i) > 0) A.mulTo(e, r, C); else {
            var n = C;
            C = e, e = n
        }
        return A.revert(C)
    }, B.toString = function (g) {
        var A = this;
        if (A.s < 0) return "-" + A.negate().toString(g);
        var C;
        if (16 == g) C = 4; else if (8 == g) C = 3; else if (2 == g) C = 1; else if (32 == g) C = 5; else {
            if (4 != g) return A.toRadix(g);
            C = 2
        }
        var I, e = (1 << C) - 1, r = !1, i = "", n = A.t, s = A.DB - n * A.DB % C;
        if (n-- > 0) for (s < A.DB && (I = A[n] >> s) > 0 && (r = !0, i = t(I)); n >= 0;) s < C ? (I = (A[n] & (1 << s) - 1) << C - s, I |= A[--n] >> (s += A.DB - C)) : (I = A[n] >> (s -= C) & e, s <= 0 && (s += A.DB, --n)), I > 0 && (r = !0), r && (i += t(I));
        return r ? i : "0"
    }, B.negate = function () {
        var t = new g;
        return g.ZERO.subTo(this, t), t
    }, B.abs = function () {
        return this.s < 0 ? this.negate() : this
    }, B.compareTo = function (g) {
        var t = this.s - g.s;
        if (0 != t) return t;
        var A = this.t;
        if (0 != (t = A - g.t)) return this.s < 0 ? -t : t;
        for (; --A >= 0;) if (0 != (t = this[A] - g[A])) return t;
        return 0
    }, B.bitLength = function () {
        return this.t <= 0 ? 0 : this.DB * (this.t - 1) + I(this[this.t - 1] ^ this.s & this.DM)
    }, B.byteLength = function () {
        return this.bitLength() >> 3
    }, B.mod = function (t) {
        var A = new g;
        return this.abs().divRemTo(t, null, A), this.s < 0 && A.compareTo(g.ZERO) > 0 && t.subTo(A, A), A
    }, B.modPowInt = function (g, t) {
        var A;
        return A = g < 256 || t.isEven() ? new e(t) : new r(t), this.exp(g, A)
    }, g.ZERO = C(0), g.ONE = C(1), u.prototype.convert = c, u.prototype.revert = c, u.prototype.mulTo = function (g, t, A) {
        g.multiplyTo(t, A)
    }, u.prototype.sqrTo = function (g, t) {
        g.squareTo(t)
    }, l.prototype.convert = function (t) {
        if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
        if (t.compareTo(this.m) < 0) return t;
        var A = new g;
        return t.copyTo(A), this.reduce(A), A
    }, l.prototype.revert = function (g) {
        return g
    }, l.prototype.reduce = function (g) {
        var t = this;
        for (g.drShiftTo(t.m.t - 1, t.r2), g.t > t.m.t + 1 && (g.t = t.m.t + 1, g.clamp()), t.mu.multiplyUpperTo(t.r2, t.m.t + 1, t.q3), t.m.multiplyLowerTo(t.q3, t.m.t + 1, t.r2); g.compareTo(t.r2) < 0;) g.dAddOffset(1, t.m.t + 1);
        for (g.subTo(t.r2, g); g.compareTo(t.m) >= 0;) g.subTo(t.m, g)
    }, l.prototype.mulTo = function (g, t, A) {
        g.multiplyTo(t, A), this.reduce(A)
    }, l.prototype.sqrTo = function (g, t) {
        g.squareTo(t), this.reduce(t)
    };
    var O = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
        U = (1 << 26) / O[O.length - 1];
    B.chunkSize = function (g) {
        return Math.floor(Math.LN2 * this.DB / Math.log(g))
    }, B.toRadix = function (t) {
        if (null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36) return "0";
        var A = this.chunkSize(t), I = Math.pow(t, A), e = C(I), r = new g, i = new g, n = "";
        for (this.divRemTo(e, r, i); r.signum() > 0;) n = (I + i.intValue()).toString(t).substr(1) + n, r.divRemTo(e, r, i);
        return i.intValue().toString(t) + n
    }, B.fromRadix = function (t, C) {
        var I = this;
        I.fromInt(0), null == C && (C = 10);
        for (var e = I.chunkSize(C), r = Math.pow(C, e), i = !1, n = 0, s = 0, o = 0; o < t.length; ++o) {
            var a = A(t, o);
            a < 0 ? "-" == t.charAt(o) && 0 == I.signum() && (i = !0) : (s = C * s + a, ++n >= e && (I.dMultiply(r), I.dAddOffset(s, 0), n = 0, s = 0))
        }
        n > 0 && (I.dMultiply(Math.pow(C, n)), I.dAddOffset(s, 0)), i && g.ZERO.subTo(I, I)
    }, B.fromNumber = function (t, A, C) {
        var I = this;
        if ("number" == typeof A) if (t < 2) I.fromInt(1); else for (I.fromNumber(t, C), I.testBit(t - 1) || I.bitwiseTo(g.ONE.shiftLeft(t - 1), n, I), I.isEven() && I.dAddOffset(1, 0); !I.isProbablePrime(A);) I.dAddOffset(2, 0), I.bitLength() > t && I.subTo(g.ONE.shiftLeft(t - 1), I); else {
            var e = new Array, r = 7 & t;
            e.length = 1 + (t >> 3), A.nextBytes(e), r > 0 ? e[0] &= (1 << r) - 1 : e[0] = 0, I.fromString(e, 256)
        }
    }, B.bitwiseTo = function (g, t, A) {
        var C, I, e = this, r = Math.min(g.t, e.t);
        for (C = 0; C < r; ++C) A[C] = t(e[C], g[C]);
        if (g.t < e.t) {
            for (I = g.s & e.DM, C = r; C < e.t; ++C) A[C] = t(e[C], I);
            A.t = e.t
        } else {
            for (I = e.s & e.DM, C = r; C < g.t; ++C) A[C] = t(I, g[C]);
            A.t = g.t
        }
        A.s = t(e.s, g.s), A.clamp()
    }, B.changeBit = function (t, A) {
        var C = g.ONE.shiftLeft(t);
        return this.bitwiseTo(C, A, C), C
    }, B.addTo = function (g, t) {
        for (var A = this, C = 0, I = 0, e = Math.min(g.t, A.t); C < e;) I += A[C] + g[C], t[C++] = I & A.DM, I >>= A.DB;
        if (g.t < A.t) {
            for (I += g.s; C < A.t;) I += A[C], t[C++] = I & A.DM, I >>= A.DB;
            I += A.s
        } else {
            for (I += A.s; C < g.t;) I += g[C], t[C++] = I & A.DM, I >>= A.DB;
            I += g.s
        }
        t.s = I < 0 ? -1 : 0, I > 0 ? t[C++] = I : I < -1 && (t[C++] = A.DV + I), t.t = C, t.clamp()
    }, B.dMultiply = function (g) {
        this[this.t] = this.am(0, g - 1, this, 0, 0, this.t), ++this.t, this.clamp()
    }, B.dAddOffset = function (g, t) {
        if (0 != g) {
            for (; this.t <= t;) this[this.t++] = 0;
            for (this[t] += g; this[t] >= this.DV;) this[t] -= this.DV, ++t >= this.t && (this[this.t++] = 0), ++this[t]
        }
    }, B.multiplyLowerTo = function (g, t, A) {
        var C = Math.min(this.t + g.t, t);
        for (A.s = 0, A.t = C; C > 0;) A[--C] = 0;
        var I;
        for (I = A.t - this.t; C < I; ++C) A[C + this.t] = this.am(0, g[C], A, C, 0, this.t);
        for (I = Math.min(g.t, t); C < I; ++C) this.am(0, g[C], A, C, 0, t - C);
        A.clamp()
    }, B.multiplyUpperTo = function (g, t, A) {
        --t;
        var C = A.t = this.t + g.t - t;
        for (A.s = 0; --C >= 0;) A[C] = 0;
        for (C = Math.max(t - this.t, 0); C < g.t; ++C) A[this.t + C - t] = this.am(t - C, g[C], A, 0, 0, this.t + C - t);
        A.clamp(), A.drShiftTo(1, A)
    }, B.modInt = function (g) {
        if (g <= 0) return 0;
        var t = this.DV % g, A = this.s < 0 ? g - 1 : 0;
        if (this.t > 0) if (0 == t) A = this[0] % g; else for (var C = this.t - 1; C >= 0; --C) A = (t * A + this[C]) % g;
        return A
    }, B.millerRabin = function (t) {
        var A = this.subtract(g.ONE), C = A.getLowestSetBit();
        if (C <= 0) return !1;
        var I = A.shiftRight(C);
        (t = t + 1 >> 1) > O.length && (t = O.length);
        for (var e = new g(null), r = [], i = 0; i < t; ++i) {
            for (; s = O[Math.floor(Math.random() * O.length)], -1 != r.indexOf(s););
            r.push(s), e.fromInt(s);
            var n = e.modPow(I, this);
            if (0 != n.compareTo(g.ONE) && 0 != n.compareTo(A)) {
                for (var s = 1; s++ < C && 0 != n.compareTo(A);) if (0 == (n = n.modPowInt(2, this)).compareTo(g.ONE)) return !1;
                if (0 != n.compareTo(A)) return !1
            }
        }
        return !0
    }, B.clone = function () {
        var t = new g;
        return this.copyTo(t), t
    }, B.intValue = function () {
        if (this.s < 0) {
            if (1 == this.t) return this[0] - this.DV;
            if (0 == this.t) return -1
        } else {
            if (1 == this.t) return this[0];
            if (0 == this.t) return 0
        }
        return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
    }, B.byteValue = function () {
        return 0 == this.t ? this.s : this[0] << 24 >> 24
    }, B.shortValue = function () {
        return 0 == this.t ? this.s : this[0] << 16 >> 16
    }, B.signum = function () {
        return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
    }, B.toByteArray = function () {
        var g = this, t = g.t, A = new Array;
        A[0] = g.s;
        var C, I = g.DB - t * g.DB % 8, e = 0;
        if (t-- > 0) for (I < g.DB && (C = g[t] >> I) != (g.s & g.DM) >> I && (A[e++] = C | g.s << g.DB - I); t >= 0;) I < 8 ? (C = (g[t] & (1 << I) - 1) << 8 - I, C |= g[--t] >> (I += g.DB - 8)) : (C = g[t] >> (I -= 8) & 255, I <= 0 && (I += g.DB, --t)), 0 != (128 & C) && (C |= -256), 0 === e && (128 & g.s) != (128 & C) && ++e, (e > 0 || C != g.s) && (A[e++] = C);
        return A
    }, B.equals = function (g) {
        return 0 == this.compareTo(g)
    }, B.min = function (g) {
        return this.compareTo(g) < 0 ? this : g
    }, B.max = function (g) {
        return this.compareTo(g) > 0 ? this : g
    }, B.and = function (t) {
        var A = new g;
        return this.bitwiseTo(t, i, A), A
    }, B.or = function (t) {
        var A = new g;
        return this.bitwiseTo(t, n, A), A
    }, B.xor = function (t) {
        var A = new g;
        return this.bitwiseTo(t, s, A), A
    }, B.andNot = function (t) {
        var A = new g;
        return this.bitwiseTo(t, o, A), A
    }, B.not = function () {
        for (var t = new g, A = 0; A < this.t; ++A) t[A] = this.DM & ~this[A];
        return t.t = this.t, t.s = ~this.s, t
    }, B.shiftLeft = function (t) {
        var A = new g;
        return t < 0 ? this.rShiftTo(-t, A) : this.lShiftTo(t, A), A
    }, B.shiftRight = function (t) {
        var A = new g;
        return t < 0 ? this.lShiftTo(-t, A) : this.rShiftTo(t, A), A
    }, B.getLowestSetBit = function () {
        for (var g = 0; g < this.t; ++g) if (0 != this[g]) return g * this.DB + a(this[g]);
        return this.s < 0 ? this.t * this.DB : -1
    }, B.bitCount = function () {
        for (var g = 0, t = this.s & this.DM, A = 0; A < this.t; ++A) g += h(this[A] ^ t);
        return g
    }, B.testBit = function (g) {
        var t = Math.floor(g / this.DB);
        return t >= this.t ? 0 != this.s : 0 != (this[t] & 1 << g % this.DB)
    }, B.setBit = function (g) {
        return this.changeBit(g, n)
    }, B.clearBit = function (g) {
        return this.changeBit(g, o)
    }, B.flipBit = function (g) {
        return this.changeBit(g, s)
    }, B.add = function (t) {
        var A = new g;
        return this.addTo(t, A), A
    }, B.subtract = function (t) {
        var A = new g;
        return this.subTo(t, A), A
    }, B.multiply = function (t) {
        var A = new g;
        return this.multiplyTo(t, A), A
    }, B.divide = function (t) {
        var A = new g;
        return this.divRemTo(t, A, null), A
    }, B.remainder = function (t) {
        var A = new g;
        return this.divRemTo(t, null, A), A
    }, B.divideAndRemainder = function (t) {
        var A = new g, C = new g;
        return this.divRemTo(t, A, C), new Array(A, C)
    }, B.modPow = function (t, A) {
        var i, n, s = t.bitLength(), o = C(1);
        if (s <= 0) return o;
        i = s < 18 ? 1 : s < 48 ? 3 : s < 144 ? 4 : s < 768 ? 5 : 6, n = s < 8 ? new e(A) : A.isEven() ? new l(A) : new r(A);
        var a = new Array, h = 3, u = i - 1, c = (1 << i) - 1;
        if (a[1] = n.convert(this), i > 1) {
            var f = new g;
            for (n.sqrTo(a[1], f); h <= c;) a[h] = new g, n.mulTo(f, a[h - 2], a[h]), h += 2
        }
        var d, p, F = t.t - 1, v = !0, y = new g;
        for (s = I(t[F]) - 1; F >= 0;) {
            for (s >= u ? d = t[F] >> s - u & c : (d = (t[F] & (1 << s + 1) - 1) << u - s, F > 0 && (d |= t[F - 1] >> this.DB + s - u)), h = i; 0 == (1 & d);) d >>= 1, --h;
            if ((s -= h) < 0 && (s += this.DB, --F), v) a[d].copyTo(o), v = !1; else {
                for (; h > 1;) n.sqrTo(o, y), n.sqrTo(y, o), h -= 2;
                h > 0 ? n.sqrTo(o, y) : (p = o, o = y, y = p), n.mulTo(y, a[d], o)
            }
            for (; F >= 0 && 0 == (t[F] & 1 << s);) n.sqrTo(o, y), p = o, o = y, y = p, --s < 0 && (s = this.DB - 1, --F)
        }
        return n.revert(o)
    }, B.modInverse = function (t) {
        var A = t.isEven();
        if (0 === this.signum()) throw new Error("division by zero");
        if (this.isEven() && A || 0 == t.signum()) return g.ZERO;
        for (var I = t.clone(), e = this.clone(), r = C(1), i = C(0), n = C(0), s = C(1); 0 != I.signum();) {
            for (; I.isEven();) I.rShiftTo(1, I), A ? (r.isEven() && i.isEven() || (r.addTo(this, r), i.subTo(t, i)), r.rShiftTo(1, r)) : i.isEven() || i.subTo(t, i), i.rShiftTo(1, i);
            for (; e.isEven();) e.rShiftTo(1, e), A ? (n.isEven() && s.isEven() || (n.addTo(this, n), s.subTo(t, s)), n.rShiftTo(1, n)) : s.isEven() || s.subTo(t, s), s.rShiftTo(1, s);
            I.compareTo(e) >= 0 ? (I.subTo(e, I), A && r.subTo(n, r), i.subTo(s, i)) : (e.subTo(I, e), A && n.subTo(r, n), s.subTo(i, s))
        }
        if (0 != e.compareTo(g.ONE)) return g.ZERO;
        for (; s.compareTo(t) >= 0;) s.subTo(t, s);
        for (; s.signum() < 0;) s.addTo(t, s);
        return s
    }, B.pow = function (g) {
        return this.exp(g, new u)
    }, B.gcd = function (g) {
        var t = this.s < 0 ? this.negate() : this.clone(), A = g.s < 0 ? g.negate() : g.clone();
        if (t.compareTo(A) < 0) {
            var C = t;
            t = A, A = C
        }
        var I = t.getLowestSetBit(), e = A.getLowestSetBit();
        if (e < 0) return t;
        for (I < e && (e = I), e > 0 && (t.rShiftTo(e, t), A.rShiftTo(e, A)); t.signum() > 0;) (I = t.getLowestSetBit()) > 0 && t.rShiftTo(I, t), (I = A.getLowestSetBit()) > 0 && A.rShiftTo(I, A), t.compareTo(A) >= 0 ? (t.subTo(A, t), t.rShiftTo(1, t)) : (A.subTo(t, A), A.rShiftTo(1, A));
        return e > 0 && A.lShiftTo(e, A), A
    }, B.isProbablePrime = function (g) {
        var t, A = this.abs();
        if (1 == A.t && A[0] <= O[O.length - 1]) {
            for (t = 0; t < O.length; ++t) if (A[0] == O[t]) return !0;
            return !1
        }
        if (A.isEven()) return !1;
        for (t = 1; t < O.length;) {
            for (var C = O[t], I = t + 1; I < O.length && C < U;) C *= O[I++];
            for (C = A.modInt(C); t < I;) if (C % O[t++] == 0) return !1
        }
        return A.millerRabin(g)
    }, B.square = function () {
        var t = new g;
        return this.squareTo(t), t
    }, f.prototype.init = function (g) {
        var t, A, C;
        for (t = 0; t < 256; ++t) this.S[t] = t;
        for (A = 0, t = 0; t < 256; ++t) A = A + this.S[t] + g[t % g.length] & 255, C = this.S[t], this.S[t] = this.S[A], this.S[A] = C;
        this.i = 0, this.j = 0
    }, f.prototype.next = function () {
        var g;
        return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, g = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = g, this.S[g + this.S[this.i] & 255]
    };
    var M, k, H, L = 256;
    if (null == k) {
        k = new Array(32), H = 0;
        var J;
        for (J = 0; J < 32; ++J) k[H++] = 255 & Math.random(10);
        for (; H < L;) J = Math.floor(65536 * Math.random()), k[H++] = J >>> 8, k[H++] = 255 & J;
        H = 0, F()
    }
    
    return m.prototype.nextBytes = function (g) {
        var t;
        for (t = 0; t < g.length; ++t) g[t] = y()
    }, 
    "undefined" != typeof KJUR && KJUR || (KJUR = {}), void 0 !== KJUR.crypto && KJUR.crypto || (KJUR.crypto = {}), 
    
    KJUR.crypto.OID = new function () {
        this.oidhex2name = {
            "2a864886f70d010101": "rsaEncryption",
            "2a8648ce3d0201": "ecPublicKey",
            "2a8648ce380401": "dsa",
            "2a8648ce3d030107": "secp256r1",
            "2b8104001f": "secp192k1",
            "2b81040021": "secp224r1",
            "2b8104000a": "secp256k1",
            "2b81040023": "secp521r1",
            "2b81040022": "secp384r1",
            "2a8648ce380403": "SHA1withDSA",
            "608648016503040301": "SHA224withDSA",
            "608648016503040302": "SHA256withDSA"
        }
    }, b.prototype.equals = function (g) {
        return g == this || this.q.equals(g.q) && this.x.equals(g.x)
    }, b.prototype.toBigInteger = function () {
        return this.x
    }, b.prototype.negate = function () {
        return new b(this.q, this.x.negate().mod(this.q))
    }, b.prototype.add = function (g) {
        return new b(this.q, this.x.add(g.toBigInteger()).mod(this.q))
    }, b.prototype.subtract = function (g) {
        return new b(this.q, this.x.subtract(g.toBigInteger()).mod(this.q))
    }, b.prototype.multiply = function (g) {
        return new b(this.q, this.x.multiply(g.toBigInteger()).mod(this.q))
    }, b.prototype.square = function () {
        return new b(this.q, this.x.square().mod(this.q))
    }, b.prototype.divide = function (g) {
        return new b(this.q, this.x.multiply(g.toBigInteger().modInverse(this.q)).mod(this.q))
    }, w.prototype.getX = function () {
        return null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q)), this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q))
    }, w.prototype.getY = function () {
        return null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q)), this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q))
    }, w.prototype.equals = function (t) {
        if (t == this) return !0;
        if (this.isInfinity()) return t.isInfinity();
        if (t.isInfinity()) return this.isInfinity();
        return !!t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(g.ZERO) && t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(g.ZERO)
    }, w.prototype.isInfinity = function () {
        return null == this.x && null == this.y || this.z.equals(g.ZERO) && !this.y.toBigInteger().equals(g.ZERO)
    }, w.prototype.negate = function () {
        return new w(this.curve, this.x, this.y.negate(), this.z)
    }, w.prototype.add = function (t) {
        if (this.isInfinity()) return t;
        if (t.isInfinity()) return this;
        var A = t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q),
            C = t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q);
        if (g.ZERO.equals(C)) return g.ZERO.equals(A) ? this.twice() : this.curve.getInfinity();
        var I = new g("3"), e = this.x.toBigInteger(), r = this.y.toBigInteger(),
            i = (t.x.toBigInteger(), t.y.toBigInteger(), C.square()), n = i.multiply(C), s = e.multiply(i),
            o = A.square().multiply(this.z),
            a = o.subtract(s.shiftLeft(1)).multiply(t.z).subtract(n).multiply(C).mod(this.curve.q),
            h = s.multiply(I).multiply(A).subtract(r.multiply(n)).subtract(o.multiply(A)).multiply(t.z).add(A.multiply(n)).mod(this.curve.q),
            u = n.multiply(this.z).multiply(t.z).mod(this.curve.q);
        return new w(this.curve, this.curve.fromBigInteger(a), this.curve.fromBigInteger(h), u)
    }, w.prototype.twice = function () {
        if (this.isInfinity()) return this;
        if (0 == this.y.toBigInteger().signum()) return this.curve.getInfinity();
        var t = new g("3"), A = this.x.toBigInteger(), C = this.y.toBigInteger(), I = C.multiply(this.z),
            e = I.multiply(C).mod(this.curve.q), r = this.curve.a.toBigInteger(), i = A.square().multiply(t);
        g.ZERO.equals(r) || (i = i.add(this.z.square().multiply(r)));
        var n = (i = i.mod(this.curve.q)).square().subtract(A.shiftLeft(3).multiply(e)).shiftLeft(1).multiply(I).mod(this.curve.q),
            s = i.multiply(t).multiply(A).subtract(e.shiftLeft(1)).shiftLeft(2).multiply(e).subtract(i.square().multiply(i)).mod(this.curve.q),
            o = I.square().multiply(I).shiftLeft(3).mod(this.curve.q);
        return new w(this.curve, this.curve.fromBigInteger(n), this.curve.fromBigInteger(s), o)
    }, 
    w.prototype.multiply = function (t) {
        if (this.isInfinity()) return this;
        if (0 == t.signum()) return this.curve.getInfinity();
        var A, C = t, I = C.multiply(new g("3")), e = this.negate(), r = this;
        for (A = I.bitLength() - 2; A > 0; --A) {
            r = r.twice();
            var i = I.testBit(A);
            i != C.testBit(A) && (r = r.add(i ? this : e))
        }
        return r
    },
    S.prototype.fromBigInteger = function (g) {
        return new b(this.q, g)
    }, S.prototype.decodePointHex = function (t) {
        switch (parseInt(t.substr(0, 2), 16)) {
            case 0:
                return this.infinity;
            case 2:
            case 3:
                return null;
            case 4:
            case 6:
            case 7:
                var A = (t.length - 2) / 2, C = t.substr(2, A), I = t.substr(A + 2, A);
                return new w(this, this.fromBigInteger(new g(C, 16)), this.fromBigInteger(new g(I, 16)));
            default:
                return null
        }
    }, 
    
    w.decodeFromHex = function (t, A) {
        A.substr(0, 2);
        var C = A.length - 2, I = A.substr(2, C / 2), e = A.substr(2 + C / 2, C / 2), r = new g(I, 16),
            i = new g(e, 16);
        return new w(t, t.fromBigInteger(r), t.fromBigInteger(i))
    },
    
    "undefined" != typeof KJUR && KJUR || (KJUR = {}), void 0 !== KJUR.crypto && KJUR.crypto || (KJUR.crypto = {}), 
    KJUR.crypto.ECDSA = function (t) {
        var A = new m;
        this.type = "EC", this.getBigRandom = function (t) {
            return new g(t.bitLength(), A).mod(t.subtract(g.ONE)).add(g.ONE)
        }, this.setNamedCurve = function (g) {
            this.ecparams = KJUR.crypto.ECParameterDB.getByName(g), this.prvKeyHex = null, this.pubKeyHex = null, this.curveName = g
        }, this.setPrivateKeyHex = function (g) {
            this.isPrivate = !0, this.prvKeyHex = g
        }, this.setPublicKeyHex = function (g) {
            this.isPublic = !0, this.pubKeyHex = g
        }, this.generateKeyPairHex = function () {
            var g = this.ecparams.n, t = this.getBigRandom(g), A = this.ecparams.G.multiply(t),
                C = A.getX().toBigInteger(), I = A.getY().toBigInteger(), e = this.ecparams.keylen / 4,
                r = ("0000000000" + t.toString(16)).slice(-e),
                i = "04" + ("0000000000" + C.toString(16)).slice(-e) + ("0000000000" + I.toString(16)).slice(-e);
            return this.setPrivateKeyHex(r), this.setPublicKeyHex(i), { ecprvhex: r, ecpubhex: i }
        }, this.signWithMessageHash = function (g) {
            return this.signHex(g, this.prvKeyHex)
        }, this.signHex = function (t, A) {
            var C = new g(A, 16), I = this.ecparams.n, e = new g(t, 16);
            do {
                var r = this.getBigRandom(I), i = this.ecparams.G.multiply(r).getX().toBigInteger().mod(I)
            } while (i.compareTo(g.ZERO) <= 0);
            var n = r.modInverse(I).multiply(e.add(C.multiply(i))).mod(I);
            return KJUR.crypto.ECDSA.biRSSigToASN1Sig(i, n)
        }, this.sign = function (t, A) {
            var C = A, I = this.ecparams.n, e = g.fromByteArrayUnsigned(t);
            do {
                var r = this.getBigRandom(I), i = this.ecparams.G.multiply(r).getX().toBigInteger().mod(I)
            } while (i.compareTo(g.ZERO) <= 0);
            var n = r.modInverse(I).multiply(e.add(C.multiply(i))).mod(I);
            return this.serializeSig(i, n)
        }, this.verifyWithMessageHash = function (g, t) {
            return this.verifyHex(g, t, this.pubKeyHex)
        }, this.verifyHex = function (t, A, C) {
            var I, e, r = KJUR.crypto.ECDSA.parseSigHex(A);
            I = r.r, e = r.s;
            var i;
            i = w.decodeFromHex(this.ecparams.curve, C);
            var n = new g(t, 16);
            return this.verifyRaw(n, I, e, i)
        }, this.verify = function (t, A, C) {
            var I, e;
            if (Bitcoin.Util.isArray(A)) {
                var r = this.parseSig(A);
                I = r.r, e = r.s
            } else {
                if ("object" != typeof A || !A.r || !A.s) throw "Invalid value for signature";
                I = A.r, e = A.s
            }
            var i;
            if (C instanceof w) i = C; else {
                if (!Bitcoin.Util.isArray(C)) throw "Invalid format for pubkey value, must be byte array or ECPointFp";
                i = w.decodeFrom(this.ecparams.curve, C)
            }
            var n = g.fromByteArrayUnsigned(t);
            return this.verifyRaw(n, I, e, i)
        }, this.verifyRaw = function (t, A, C, I) {
            var e = this.ecparams.n, r = this.ecparams.G;
            if (A.compareTo(g.ONE) < 0 || A.compareTo(e) >= 0) return !1;
            if (C.compareTo(g.ONE) < 0 || C.compareTo(e) >= 0) return !1;
            var i = C.modInverse(e), n = t.multiply(i).mod(e), s = A.multiply(i).mod(e);
            return r.multiply(n).add(I.multiply(s)).getX().toBigInteger().mod(e).equals(A)
        }, this.serializeSig = function (g, t) {
            var A = g.toByteArraySigned(), C = t.toByteArraySigned(), I = [];
            return I.push(2), I.push(A.length), (I = I.concat(A)).push(2), I.push(C.length), (I = I.concat(C)).unshift(I.length), I.unshift(48), I
        }, this.parseSig = function (t) {
            var A;
            if (48 != t[0]) throw new Error("Signature not a valid DERSequence");
            if (A = 2, 2 != t[A]) throw new Error("First element in signature must be a DERInteger");
            var C = t.slice(A + 2, A + 2 + t[A + 1]);
            if (A += 2 + t[A + 1], 2 != t[A]) throw new Error("Second element in signature must be a DERInteger");
            var I = t.slice(A + 2, A + 2 + t[A + 1]);
            return A += 2 + t[A + 1], { r: g.fromByteArrayUnsigned(C), s: g.fromByteArrayUnsigned(I) }
        }, this.parseSigCompact = function (t) {
            if (65 !== t.length) throw "Signature has the wrong length";
            var A = t[0] - 27;
            if (A < 0 || A > 7) throw "Invalid signature type";
            var C = this.ecparams.n;
            return {
                r: g.fromByteArrayUnsigned(t.slice(1, 33)).mod(C),
                s: g.fromByteArrayUnsigned(t.slice(33, 65)).mod(C),
                i: A
            }
        }, void 0 !== t && void 0 !== t.curve && (this.curveName = t.curve), void 0 === this.curveName && (this.curveName = "secp256r1"), this.setNamedCurve(this.curveName), void 0 !== t && (void 0 !== t.prv && this.setPrivateKeyHex(t.prv), void 0 !== t.pub && this.setPublicKeyHex(t.pub))
    },
    D.prototype = {
        Init: function () {
            this.xBuf = new Array(4), this.Reset()
        }, InitDigest: function (g) {
            this.xBuf = new Array(g.xBuf.length), Array.Copy(g.xBuf, 0, this.xBuf, 0, g.xBuf.length), this.xBufOff = g.xBufOff, this.byteCount = g.byteCount, Array.Copy(g.X, 0, this.X, 0, g.X.length), this.xOff = g.xOff, Array.Copy(g.v, 0, this.v, 0, g.v.length)
        }, GetDigestSize: function () {
            return this.DIGEST_LENGTH
        }, Reset: function () {
            this.byteCount = 0, this.xBufOff = 0, Array.Clear(this.xBuf, 0, this.xBuf.length), Array.Copy(this.v0, 0, this.v, 0, this.v0.length), this.xOff = 0, Array.Copy(this.X0, 0, this.X, 0, this.X0.length)
        }, GetByteLength: function () {
            return this.BYTE_LENGTH
        }, ProcessBlock: function () {
            var g, t = this.X, A = new Array(64);
            for (g = 16; g < 68; g++) t[g] = this.P1(t[g - 16] ^ t[g - 9] ^ this.ROTATE(t[g - 3], 15)) ^ this.ROTATE(t[g - 13], 7) ^ t[g - 6];
            for (g = 0; g < 64; g++) A[g] = t[g] ^ t[g + 4];
            var C = this.v, I = this.v_;
            Array.Copy(C, 0, I, 0, this.v0.length);
            var e, r, i, n, s;
            for (g = 0; g < 16; g++) s = this.ROTATE(I[0], 12), e = _global_.Int32.parse(_global_.Int32.parse(s + I[4]) + this.ROTATE(this.T_00_15, g)), r = (e = this.ROTATE(e, 7)) ^ s, i = _global_.Int32.parse(_global_.Int32.parse(this.FF_00_15(I[0], I[1], I[2]) + I[3]) + r) + A[g], n = _global_.Int32.parse(_global_.Int32.parse(this.GG_00_15(I[4], I[5], I[6]) + I[7]) + e) + t[g], I[3] = I[2], I[2] = this.ROTATE(I[1], 9), I[1] = I[0], I[0] = i, I[7] = I[6], I[6] = this.ROTATE(I[5], 19), I[5] = I[4], I[4] = this.P0(n);
            for (g = 16; g < 64; g++) s = this.ROTATE(I[0], 12), e = _global_.Int32.parse(_global_.Int32.parse(s + I[4]) + this.ROTATE(this.T_16_63, g)), r = (e = this.ROTATE(e, 7)) ^ s, i = _global_.Int32.parse(_global_.Int32.parse(this.FF_16_63(I[0], I[1], I[2]) + I[3]) + r) + A[g], n = _global_.Int32.parse(_global_.Int32.parse(this.GG_16_63(I[4], I[5], I[6]) + I[7]) + e) + t[g], I[3] = I[2], I[2] = this.ROTATE(I[1], 9), I[1] = I[0], I[0] = i, I[7] = I[6], I[6] = this.ROTATE(I[5], 19), I[5] = I[4], I[4] = this.P0(n);
            for (g = 0; g < 8; g++) C[g] ^= _global_.Int32.parse(I[g]);
            this.xOff = 0, Array.Copy(this.X0, 0, this.X, 0, this.X0.length)
        }, ProcessWord: function (g, t) {
            var A = g[t] << 24;
            A |= (255 & g[++t]) << 16, A |= (255 & g[++t]) << 8, A |= 255 & g[++t], this.X[this.xOff] = A, 16 == ++this.xOff && this.ProcessBlock()
        }, ProcessLength: function (g) {
            this.xOff > 14 && this.ProcessBlock(), this.X[14] = this.URShiftLong(g, 32), this.X[15] = 4294967295 & g
        }, IntToBigEndian: function (g, t, A) {
            t[A] = _global_.Int32.parseByte(this.URShift(g, 24)), t[++A] = _global_.Int32.parseByte(this.URShift(g, 16)), t[++A] = _global_.Int32.parseByte(this.URShift(g, 8)), t[++A] = _global_.Int32.parseByte(g)
        }, DoFinal: function (g, t) {
            this.Finish();
            for (var A = 0; A < 8; A++) this.IntToBigEndian(this.v[A], g, t + 4 * A);
            this.Reset();
            var C = g.length;
            for (A = 0; A < C; A++) g[A] &= 255;
            return this.DIGEST_LENGTH
        }, Update: function (g) {
            this.xBuf[this.xBufOff++] = g, this.xBufOff == this.xBuf.length && (this.ProcessWord(this.xBuf, 0), this.xBufOff = 0), this.byteCount++
        }, BlockUpdate: function (g, t, A) {
            for (; 0 != this.xBufOff && A > 0;) this.Update(g[t]), t++, A--;
            for (; A > this.xBuf.length;) this.ProcessWord(g, t), t += this.xBuf.length, A -= this.xBuf.length, this.byteCount += this.xBuf.length;
            for (; A > 0;) this.Update(g[t]), t++, A--
        }, Finish: function () {
            var g = this.byteCount << 3;
            for (this.Update(128); 0 != this.xBufOff;) this.Update(0);
            this.ProcessLength(g), this.ProcessBlock()
        }, ROTATE: function (g, t) {
            return g << t | this.URShift(g, 32 - t)
        }, P0: function (g) {
            return g ^ this.ROTATE(g, 9) ^ this.ROTATE(g, 17)
        }, P1: function (g) {
            return g ^ this.ROTATE(g, 15) ^ this.ROTATE(g, 23)
        }, FF_00_15: function (g, t, A) {
            return g ^ t ^ A
        }, FF_16_63: function (g, t, A) {
            return g & t | g & A | t & A
        }, GG_00_15: function (g, t, A) {
            return g ^ t ^ A
        }, GG_16_63: function (g, t, A) {
            return g & t | ~g & A
        }, URShift: function (g, t) {
            return (g > _global_.Int32.maxValue || g < _global_.Int32.minValue) && (g = _global_.Int32.parse(g)), g >= 0 ? g >> t : (g >> t) + (2 << ~t)
        }, URShiftLong: function (t, A) {
            var C, I = new g;
            if (I.fromInt(t), I.signum() >= 0) C = I.shiftRight(A).intValue(); else {
                var e = new g;
                e.fromInt(2);
                var r = ~A, i = "";
                if (r < 0) {
                    for (var n = 64 + r, s = 0; s < n; s++) i += "0";
                    var o = new g;
                    o.fromInt(t >> A);
                    var a = new g("10" + i, 2);
                    i = a.toRadix(10), C = a.add(o).toRadix(10)
                } else C = (t >> A) + (i = e.shiftLeft(~A).intValue())
            }
            return C
        }, GetZ: function (g, t) {
            var A = E.enc.Utf8.parse("1234567812345678"), C = 4 * A.words.length * 8;
            this.Update(C >> 8 & 255), this.Update(255 & C);
            var I = this.GetWords(A.toString());
            this.BlockUpdate(I, 0, I.length);
            var e = this.GetWords(g.curve.a.toBigInteger().toRadix(16)),
                r = this.GetWords(g.curve.b.toBigInteger().toRadix(16)),
                i = this.GetWords(g.getX().toBigInteger().toRadix(16)),
                n = this.GetWords(g.getY().toBigInteger().toRadix(16)), s = this.GetWords(t.substr(0, 64)),
                o = this.GetWords(t.substr(64, 64));
            this.BlockUpdate(e, 0, e.length), this.BlockUpdate(r, 0, r.length), this.BlockUpdate(i, 0, i.length), this.BlockUpdate(n, 0, n.length), this.BlockUpdate(s, 0, s.length), this.BlockUpdate(o, 0, o.length);
            var a = new Array(this.GetDigestSize());
            return this.DoFinal(a, 0), a
        }, GetWords: function (g) {
            for (var t = [], A = g.length, C = 0; C < A; C += 2) t[t.length] = parseInt(g.substr(C, 2), 16);
            return t
        }, GetHex: function (g) {
            for (var t = [], A = 0, C = 0; C < 2 * g.length; C += 2) t[C >>> 3] |= parseInt(g[A]) << 24 - C % 8 * 4, A++;
            return new E.lib.WordArray.init(t, g.length)
        }
    }, Array.Clear = function (g, t, A) {
        for (_global_.elm in g) g[_global_.elm] = null
    }, Array.Copy = function (g, t, A, C, I) {
        for (var e = g.slice(t, t + I), r = 0; r < e.length; r++) A[C] = e[r], C++
    }, _global_.Int32 = {
        minValue: -parseInt("10000000000000000000000000000000", 2),
        maxValue: parseInt("01111111111111111111111111111111", 2),
        parse: function (g) {
            if (g < this.minValue) {
                for (var t = (e = (I = new Number(-g)).toString(2)).substr(e.length - 31, 31), A = "", C = 0; C < t.length; C++) A += "0" == (r = t.substr(C, 1)) ? "1" : "0";
                return (i = parseInt(A, 2)) + 1
            }
            if (g > this.maxValue) {
                for (var I = Number(g), e = I.toString(2), t = e.substr(e.length - 31, 31), A = "", C = 0; C < t.length; C++) {
                    var r = t.substr(C, 1);
                    A += "0" == r ? "1" : "0"
                }
                var i = parseInt(A, 2);
                return -(i + 1)
            }
            return g
        },
        parseByte: function (g) {
            if (g < 0) {
                for (var t = (e = (I = new Number(-g)).toString(2)).substr(e.length - 8, 8), A = "", C = 0; C < t.length; C++) A += "0" == t.substr(C, 1) ? "1" : "0";
                return parseInt(A, 2) + 1
            }
            if (g > 255) {
                var I = Number(g), e = I.toString(2);
                return parseInt(e.substr(e.length - 8, 8), 2)
            }
            return g
        }
    }, 
    
    "undefined" != typeof KJUR && KJUR || (KJUR = {}), void 0 !== KJUR.crypto && KJUR.crypto || (KJUR.crypto = {}), 

    KJUR.crypto.ECParameterDB = new function () {
        function t(t) {
            return new g(t, 16)
        }

        var A = {}, C = {};
        this.getByName = function (g) {
            var t = g;
            if (void 0 !== C[t] && (t = C[g]), void 0 !== A[t]) return A[t];
            throw "unregistered EC curve name: " + t
        }, this.regist = function (g, I, e, r, i, n, s, o, a, h, u, c) {
            A[g] = {};
            var l = t(e), f = t(r), d = t(i), p = t(n), F = t(s), v = new S(l, f, d),
                y = v.decodePointHex("04" + o + a);
            A[g].name = g, A[g].keylen = I, A[g].curve = v, A[g].G = y, A[g].n = p, A[g].h = F, A[g].oid = u, A[g].info = c;
            for (var m = 0; m < h.length; m++) C[h[m]] = g
        }
    },
    KJUR.crypto.ECParameterDB.regist("sm2", 256, "FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFF", "FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFC", 
    "28E9FA9E9D9F5E344D5A9E4BCF6509A7F39789F515AB8F92DDBCBD414D940E93", 
    "FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFF7203DF6B21C6052B53BBF40939D54123", "1", 
    "32C4AE2C1F1981195F9904466A39C9948FE30BBFF2660BE1715A4589334C74C7", 
    "BC3736A2F4F6779C59BDCEE36B692153D0A9877CC62A474002DF32E52139F0A0", ["sm2", "SM2"]),
    
    function (t) {
        var A = function (g) {
            this.ct = 1, this.p2 = null, this.sm3keybase = null, this.sm3c3 = null, this.key = new Array(32), this.keyOff = 0, this.cipherMode = void 0 !== g ? g : _global_.SM2CipherMode.C1C3C2
        };
        A.prototype = {
            Reset: function () {
                this.sm3keybase = new D, this.sm3c3 = new D;
                for (var g = this.p2.getX().toBigInteger().toRadix(16); g.length < 64;) g = "0" + g;
                for (var t = this.GetWords(g), A = this.p2.getY().toBigInteger().toRadix(16); A.length < 64;) A = "0" + A;
                var C = this.GetWords(A);
                this.sm3keybase.BlockUpdate(t, 0, t.length), this.sm3c3.BlockUpdate(t, 0, t.length), this.sm3keybase.BlockUpdate(C, 0, C.length), this.ct = 1, this.NextKey()
            }, NextKey: function () {
                var g = new D(this.sm3keybase);
                g.Update(this.ct >> 24 & 255), g.Update(this.ct >> 16 & 255), g.Update(this.ct >> 8 & 255), g.Update(255 & this.ct), g.DoFinal(this.key, 0), this.keyOff = 0, this.ct++
            }, KDF: function (g) {
                for (var t = new Array(g), A = new D, C = new Array(32), I = 1, e = g / 32, r = g % 32, i = this.p2.getX().toBigInteger().toRadix(16); i.length < 64;) i = "0" + i;
                for (var n = this.GetWords(i), s = this.p2.getY().toBigInteger().toRadix(16); s.length < 64;) s = "0" + s;
                for (var o = this.GetWords(s), a = 0, h = 0; h < e; h++) A.BlockUpdate(n, 0, n.length), A.BlockUpdate(o, 0, o.length), A.Update(I >> 24 & 255), A.Update(I >> 16 & 255), A.Update(I >> 8 & 255), A.Update(255 & I), A.DoFinal(t, a), a += 32, I++;
                0 != r && (A.BlockUpdate(n, 0, n.length), A.BlockUpdate(o, 0, o.length), A.Update(I >> 24 & 255), A.Update(I >> 16 & 255), A.Update(I >> 8 & 255), A.Update(255 & I), A.DoFinal(C, 0)), Array.Copy(C, 0, t, a, r);
                for (h = 0; h < t.length; h++) t[h] = 255 & t[h];
                return t
            }, InitEncipher: function (t) {
                var A = null, C = null, I = new KJUR.crypto.ECDSA({ curve: "sm2" }), e = I.generateKeyPairHex();
                A = new g(e.ecprvhex, 16);
                var r = e.ecpubhex;
                return C = w.decodeFromHex(I.ecparams.curve, r), this.p2 = t.multiply(A), this.Reset(), C
            }, EncryptBlock: function (g) {
                this.sm3c3.BlockUpdate(g, 0, g.length);
                for (var t = this.KDF(g.length), A = 0; A < g.length; A++) g[A] = this.XORForTV(g[A], t[A])
            }, InitDecipher: function (g, t) {
                this.p2 = t.multiply(g);
                this.p2.getX().toBigInteger().toRadix(16), this.p2.getY().toBigInteger().toRadix(16);
                this.Reset()
            }, DecryptBlock: function (g) {
                var t = this.KDF(g.length), A = 0;
                for (A = 0; A < t.length; A++) t[A].toString(16);
                for (A = 0; A < g.length; A++) g[A] ^= t[A];
                this.sm3c3.BlockUpdate(g, 0, g.length)
            }, Dofinal: function (g) {
                for (var t = this.p2.getY().toBigInteger().toRadix(16); t.length < 64;) t = "0" + t;
                var A = this.GetWords(t);
                this.sm3c3.BlockUpdate(A, 0, A.length), this.sm3c3.DoFinal(g, 0), this.Reset()
            }, Encrypt: function (g, t) {
                var A = new Array(t.length);
                Array.Copy(t, 0, A, 0, t.length);
                var C = this.InitEncipher(g);
                this.EncryptBlock(A);
                var I = new Array(32);
                this.Dofinal(I);
                for (var e = C.getX().toBigInteger().toRadix(16), r = C.getY().toBigInteger().toRadix(16); e.length < 64;) e = "0" + e;
                for (; r.length < 64;) r = "0" + r;
                var i = e + r, n = this.GetHex(A).toString();
                n.length % 2 != 0 && (n = "0" + n);
                var s = this.GetHex(I).toString(), o = i + n + s;
                return this.cipherMode == _global_.SM2CipherMode.C1C3C2 && (o = i + s + n), o
            }, GetWords: function (g) {
                for (var t = [], A = g.length, C = 0; C < A; C += 2) t[t.length] = parseInt(g.substr(C, 2), 16);
                return t
            }, GetHex: function (g) {
                for (var t = [], A = 0, C = 0; C < 2 * g.length; C += 2) t[C >>> 3] |= parseInt(g[A]) << 24 - C % 8 * 4, A++;
                return new E.lib.WordArray.init(t, g.length)
            }, Decrypt: function (g, t) {
                var A = t, C = A.substr(0, 64), I = A.substr(0 + C.length, 64),
                    e = A.substr(C.length + I.length, A.length - C.length - I.length - 64), r = A.substr(A.length - 64);
                this.cipherMode == _global_.SM2CipherMode.C1C3C2 && (r = A.substr(C.length + I.length, 64), e = A.substr(C.length + I.length + 64));
                var i = this.GetWords(e), n = this.CreatePoint(C, I);
                this.InitDecipher(g, n), this.DecryptBlock(i);
                var s = new Array(32);
                return this.Dofinal(s), this.GetHex(s).toString() == r ? this.GetHex(i).toString() : ""
            }, CreatePoint: function (g, t) {
                var A = new KJUR.crypto.ECDSA({ curve: "sm2" }), C = (A.ecparams.curve, "04" + g + t);
                return w.decodeFromHex(A.ecparams.curve, C)
            }, XORForTV: function (g, t) {
                var A = g.toString(2), C = t.toString(2), I = A.split(""), e = C.split(""), r = "";
                if (I.length >= e.length) for (n = I.length; n > 0; n--) {
                    s = I.length - n;
                    if (e.length < n) r += I[s]; else {
                        var i = I.length - e.length;
                        I[s] == e[s - i] ? r += "0" : r += "1"
                    }
                } else for (var n = e.length; n > 0; n--) {
                    var s = e.length - n;
                    I.length < n ? r += e[s] : I[s - (i = e.length - I.length)] == e[s] ? r += "0" : r += "1"
                }
                return parseInt(r, 2)
            }
        }, t.SM2Cipher = A
    }(_global_), _global_.SM2CipherMode = { C1C2C3: "0", C1C3C2: "1" }, 
    function () {
        var t = x.algorithm, A = x.util.Hex, C = x.util.Checker;
        t.SM2 = {
            generate: function () {
                var g = new KJUR.crypto.ECDSA({ curve: "SM2" }).generateKeyPairHex();
                return { publicKey: A.parse(g.ecpubhex.substring(2, 130)), privateKey: A.parse(g.ecprvhex) }
            },
            encrypt: function (g, t) {
                C.checkNotEmpty(g, "plaintext is empty."), C.checkNotEmpty(t, "publicKey is empty."), C.checkArgument(64 == t.length, "illegal SM2 public key:" + A.stringify(t));
                var I = A.stringify(t), e = I.substring(0, 64), r = I.substring(64, 128),
                    i = _global_.SM2CipherMode.C1C3C2,
                    n = new _global_.SM2Cipher(i), s = n.CreatePoint(e, r), o = n.Encrypt(s, g);
                return A.parse(o)
            },
            decrypt: function (t, I) {
                C.checkArgument(void 0 != t && t.length > 0, "illegal ciphertext:" + A.stringify(t)), C.checkArgument(void 0 != I && 32 == I.length, "illegal SM2 public key:" + A.stringify(I));
                var e = A.stringify(t).toLowerCase(), r = _global_.SM2CipherMode.C1C3C2, i = new _global_.SM2Cipher(r),
                    n = new g(A.stringify(I), 16), s = i.Decrypt(n, e);
                return A.parse(s)
            },
            name: "SM2 algorithm",
            mode: "C1C3C2",
            testKeypair: {
                publicKey: "C5F171CC415C5C2759FE4668F51C0D7DA2CB85AE754F29135FED90D50C3B437D2EEA0F54163C3880C13618FF0F7CA67201DFF244016F09F19F7C1EC5D4033546",
                privateKey: "32803B68C49C9285F31577ACA17B7EE92E0828707F12FF8EE74442F75D68C5C8"
            },
            SM2_KEY_SIZE: 32
        }
    }(),  
    function (g) {
        function t(g, A, C) {
            if (!(this instanceof t)) return new t(g, A, C);
            null != g && ("number" == typeof g ? this.fromNumber(g, A, C) : null == A && "string" != typeof g ? this.fromString(g, 256) : this.fromString(g, A))
        }

        function A(g) {
            return R.charAt(g)
        }

        function C(g, t) {
            var A = P[g.charCodeAt(t)];
            return null == A ? -1 : A
        }

        function I(g) {
            var A = new t;
            return A.fromInt(g), A
        }

        function e(g) {
            var t, A = 1;
            return 0 != (t = g >>> 16) && (g = t, A += 16), 0 != (t = g >> 8) && (g = t, A += 8), 0 != (t = g >> 4) && (g = t, A += 4), 0 != (t = g >> 2) && (g = t, A += 2), 0 != (t = g >> 1) && (g = t, A += 1), A
        }

        function r(g) {
            this.m = g
        }

        function i(g) {
            this.m = g, this.mp = g.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << g.DB - 15) - 1, this.mt2 = 2 * g.t
        }

        function n(g, t) {
            return g & t
        }

        function s(g, t) {
            return g | t
        }

        function o(g, t) {
            return g ^ t
        }

        function a(g, t) {
            return g & ~t
        }

        function h(g) {
            if (0 == g) return -1;
            var t = 0;
            return 0 == (65535 & g) && (g >>= 16, t += 16), 0 == (255 & g) && (g >>= 8, t += 8), 0 == (15 & g) && (g >>= 4, t += 4), 0 == (3 & g) && (g >>= 2, t += 2), 0 == (1 & g) && ++t, t
        }

        function u(g) {
            for (var t = 0; 0 != g;) g &= g - 1, ++t;
            return t
        }

        function c() {
        }

        function l(g) {
            return g
        }

        function f(g) {
            this.r2 = new t, this.q3 = new t, t.ONE.dlShiftTo(2 * g.t, this.r2), this.mu = this.r2.divide(g), this.m = g
        }

        function d() {
            this.i = 0, this.j = 0, this.S = new Array
        }

        function p() {
            return new d
        }

        function F() {
            if (null == O) {
                for (O = p(); M < k;) {
                    var g = Math.floor(65536 * Math.random());
                    U[M++] = 255 & g
                }
                for (O.init(U), M = 0; M < U.length; ++M) U[M] = 0;
                M = 0
            }
            return O.next()
        }

        function v() {
        }

        function y(g, A) {
            return new t(g, A)
        }

        function m(g, A, C) {
            if (A < g.length + 11) return console.error("Message too long for RSA"), null;
            for (var I = new Array, e = g.length - 1; e >= 0 && A > 0;) I[--A] = g[e--];
            if (I[--A] = 0, C && "sign" === C) {
                for (; A > 2;) I[--A] = 255;
                I[--A] = 1
            } else {
                for (var r = new v, i = new Array; A > 2;) {
                    for (i[0] = 0; 0 == i[0];) r.nextBytes(i);
                    I[--A] = i[0]
                }
                I[--A] = 2
            }
            return I[--A] = 0, new t(I)
        }

        function b() {
            this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null
        }

        function w(g, t) {
            for (var A = g.toByteArray(), C = 0; C < A.length && 0 == A[C];) ++C;
            if (A.length - C != t - 1 || 2 != A[C] && 1 != A[C]) return console.error("unpad PKCS#1 failed."), null;
            ++C;
            for (var I = 0; 0 != A[C];) if (I++, ++C >= A.length) return console.error("unpad PKCS#1 failed."), null;
            if (I < 8) return console.error("unpad PKCS#1 failed."), null;
            for (var e = []; ++C < A.length;) e.push(255 & A[C]);
            return e
        }

        function S(g) {
            var t, A, C = "";
            for (t = 0; t + 3 <= g.length; t += 3) A = parseInt(g.substring(t, t + 3), 16), C += J.charAt(A >> 6) + J.charAt(63 & A);
            for (t + 1 == g.length ? (A = parseInt(g.substring(t, t + 1), 16), C += J.charAt(A << 2)) : t + 2 == g.length && (A = parseInt(g.substring(t, t + 2), 16), C += J.charAt(A >> 2) + J.charAt((3 & A) << 4)); (3 & C.length) > 0;) C += V;
            return C
        }

        var D = t.prototype;
        t.prototype.am = function (g, t, A, C, I, e) {
            for (; --e >= 0;) {
                var r = t * this[g++] + A[C] + I;
                I = Math.floor(r / 67108864), A[C++] = 67108863 & r
            }
            return I
        }, t.prototype.DB = 26, t.prototype.DM = 67108863;
        var x = t.prototype.DV = 1 << 26;
        t.prototype.FV = Math.pow(2, 52), t.prototype.F1 = 26, t.prototype.F2 = 0;
        var B, T, R = "0123456789abcdefghijklmnopqrstuvwxyz", P = new Array;
        for (B = "0".charCodeAt(0), T = 0; T <= 9; ++T) P[B++] = T;
        for (B = "a".charCodeAt(0), T = 10; T < 36; ++T) P[B++] = T;
        for (B = "A".charCodeAt(0), T = 10; T < 36; ++T) P[B++] = T;
        r.prototype.convert = function (g) {
            return g.s < 0 || g.compareTo(this.m) >= 0 ? g.mod(this.m) : g
        }, r.prototype.revert = function (g) {
            return g
        }, r.prototype.reduce = function (g) {
            g.divRemTo(this.m, null, g)
        }, r.prototype.mulTo = function (g, t, A) {
            g.multiplyTo(t, A), this.reduce(A)
        }, r.prototype.sqrTo = function (g, t) {
            g.squareTo(t), this.reduce(t)
        }, i.prototype.convert = function (g) {
            var A = new t;
            return g.abs().dlShiftTo(this.m.t, A), A.divRemTo(this.m, null, A), g.s < 0 && A.compareTo(t.ZERO) > 0 && this.m.subTo(A, A), A
        }, i.prototype.revert = function (g) {
            var A = new t;
            return g.copyTo(A), this.reduce(A), A
        }, i.prototype.reduce = function (g) {
            for (; g.t <= this.mt2;) g[g.t++] = 0;
            for (var t = 0; t < this.m.t; ++t) {
                var A = 32767 & g[t],
                    C = A * this.mpl + ((A * this.mph + (g[t] >> 15) * this.mpl & this.um) << 15) & g.DM;
                for (g[A = t + this.m.t] += this.m.am(0, C, g, t, 0, this.m.t); g[A] >= g.DV;) g[A] -= g.DV, g[++A]++
            }
            g.clamp(), g.drShiftTo(this.m.t, g), g.compareTo(this.m) >= 0 && g.subTo(this.m, g)
        }, i.prototype.mulTo = function (g, t, A) {
            g.multiplyTo(t, A), this.reduce(A)
        }, i.prototype.sqrTo = function (g, t) {
            g.squareTo(t), this.reduce(t)
        }, D.copyTo = function (g) {
            for (var t = this.t - 1; t >= 0; --t) g[t] = this[t];
            g.t = this.t, g.s = this.s
        }, D.fromInt = function (g) {
            this.t = 1, this.s = g < 0 ? -1 : 0, g > 0 ? this[0] = g : g < -1 ? this[0] = g + x : this.t = 0
        }, D.fromString = function (g, A) {
            var I, e = this;
            if (16 == A) I = 4; else if (8 == A) I = 3; else if (256 == A) I = 8; else if (2 == A) I = 1; else if (32 == A) I = 5; else {
                if (4 != A) return void e.fromRadix(g, A);
                I = 2
            }
            e.t = 0, e.s = 0;
            for (var r = g.length, i = !1, n = 0; --r >= 0;) {
                var s = 8 == I ? 255 & g[r] : C(g, r);
                s < 0 ? "-" == g.charAt(r) && (i = !0) : (i = !1, 0 == n ? e[e.t++] = s : n + I > e.DB ? (e[e.t - 1] |= (s & (1 << e.DB - n) - 1) << n, e[e.t++] = s >> e.DB - n) : e[e.t - 1] |= s << n, (n += I) >= e.DB && (n -= e.DB))
            }
            8 == I && 0 != (128 & g[0]) && (e.s = -1, n > 0 && (e[e.t - 1] |= (1 << e.DB - n) - 1 << n)), e.clamp(), i && t.ZERO.subTo(e, e)
        }, D.clamp = function () {
            for (var g = this.s & this.DM; this.t > 0 && this[this.t - 1] == g;) --this.t
        }, D.dlShiftTo = function (g, t) {
            var A;
            for (A = this.t - 1; A >= 0; --A) t[A + g] = this[A];
            for (A = g - 1; A >= 0; --A) t[A] = 0;
            t.t = this.t + g, t.s = this.s
        }, D.drShiftTo = function (g, t) {
            for (var A = g; A < this.t; ++A) t[A - g] = this[A];
            t.t = Math.max(this.t - g, 0), t.s = this.s
        }, D.lShiftTo = function (g, t) {
            var A, C = this, I = g % C.DB, e = C.DB - I, r = (1 << e) - 1, i = Math.floor(g / C.DB),
                n = C.s << I & C.DM;
            for (A = C.t - 1; A >= 0; --A) t[A + i + 1] = C[A] >> e | n, n = (C[A] & r) << I;
            for (A = i - 1; A >= 0; --A) t[A] = 0;
            t[i] = n, t.t = C.t + i + 1, t.s = C.s, t.clamp()
        }, D.rShiftTo = function (g, t) {
            var A = this;
            t.s = A.s;
            var C = Math.floor(g / A.DB);
            if (C >= A.t) t.t = 0; else {
                var I = g % A.DB, e = A.DB - I, r = (1 << I) - 1;
                t[0] = A[C] >> I;
                for (var i = C + 1; i < A.t; ++i) t[i - C - 1] |= (A[i] & r) << e, t[i - C] = A[i] >> I;
                I > 0 && (t[A.t - C - 1] |= (A.s & r) << e), t.t = A.t - C, t.clamp()
            }
        }, D.subTo = function (g, t) {
            for (var A = this, C = 0, I = 0, e = Math.min(g.t, A.t); C < e;) I += A[C] - g[C], t[C++] = I & A.DM, I >>= A.DB;
            if (g.t < A.t) {
                for (I -= g.s; C < A.t;) I += A[C], t[C++] = I & A.DM, I >>= A.DB;
                I += A.s
            } else {
                for (I += A.s; C < g.t;) I -= g[C], t[C++] = I & A.DM, I >>= A.DB;
                I -= g.s
            }
            t.s = I < 0 ? -1 : 0, I < -1 ? t[C++] = A.DV + I : I > 0 && (t[C++] = I), t.t = C, t.clamp()
        }, D.multiplyTo = function (g, A) {
            var C = this.abs(), I = g.abs(), e = C.t;
            for (A.t = e + I.t; --e >= 0;) A[e] = 0;
            for (e = 0; e < I.t; ++e) A[e + C.t] = C.am(0, I[e], A, e, 0, C.t);
            A.s = 0, A.clamp(), this.s != g.s && t.ZERO.subTo(A, A)
        }, D.squareTo = function (g) {
            for (var t = this.abs(), A = g.t = 2 * t.t; --A >= 0;) g[A] = 0;
            for (A = 0; A < t.t - 1; ++A) {
                var C = t.am(A, t[A], g, 2 * A, 0, 1);
                (g[A + t.t] += t.am(A + 1, 2 * t[A], g, 2 * A + 1, C, t.t - A - 1)) >= t.DV && (g[A + t.t] -= t.DV, g[A + t.t + 1] = 1)
            }
            g.t > 0 && (g[g.t - 1] += t.am(A, t[A], g, 2 * A, 0, 1)), g.s = 0, g.clamp()
        }, D.divRemTo = function (g, A, C) {
            var I = this, r = g.abs();
            if (!(r.t <= 0)) {
                var i = I.abs();
                if (i.t < r.t) return null != A && A.fromInt(0), void (null != C && I.copyTo(C));
                null == C && (C = new t);
                var n = new t, s = I.s, o = g.s, a = I.DB - e(r[r.t - 1]);
                a > 0 ? (r.lShiftTo(a, n), i.lShiftTo(a, C)) : (r.copyTo(n), i.copyTo(C));
                var h = n.t, u = n[h - 1];
                if (0 != u) {
                    var c = u * (1 << I.F1) + (h > 1 ? n[h - 2] >> I.F2 : 0), l = I.FV / c, f = (1 << I.F1) / c,
                        d = 1 << I.F2, p = C.t, F = p - h, v = null == A ? new t : A;
                    for (n.dlShiftTo(F, v), C.compareTo(v) >= 0 && (C[C.t++] = 1, C.subTo(v, C)), t.ONE.dlShiftTo(h, v), v.subTo(n, n); n.t < h;) n[n.t++] = 0;
                    for (; --F >= 0;) {
                        var y = C[--p] == u ? I.DM : Math.floor(C[p] * l + (C[p - 1] + d) * f);
                        if ((C[p] += n.am(0, y, C, F, 0, h)) < y) for (n.dlShiftTo(F, v), C.subTo(v, C); C[p] < --y;) C.subTo(v, C)
                    }
                    null != A && (C.drShiftTo(h, A), s != o && t.ZERO.subTo(A, A)), C.t = h, C.clamp(), a > 0 && C.rShiftTo(a, C), s < 0 && t.ZERO.subTo(C, C)
                }
            }
        }, D.invDigit = function () {
            if (this.t < 1) return 0;
            var g = this[0];
            if (0 == (1 & g)) return 0;
            var t = 3 & g;
            return t = t * (2 - (15 & g) * t) & 15, t = t * (2 - (255 & g) * t) & 255, t = t * (2 - ((65535 & g) * t & 65535)) & 65535, (t = t * (2 - g * t % this.DV) % this.DV) > 0 ? this.DV - t : -t
        }, D.isEven = function () {
            return 0 == (this.t > 0 ? 1 & this[0] : this.s)
        }, D.exp = function (g, A) {
            if (g > 4294967295 || g < 1) return t.ONE;
            var C = new t, I = new t, r = A.convert(this), i = e(g) - 1;
            for (r.copyTo(C); --i >= 0;) if (A.sqrTo(C, I), (g & 1 << i) > 0) A.mulTo(I, r, C); else {
                var n = C;
                C = I, I = n
            }
            return A.revert(C)
        }, D.toString = function (g) {
            var t = this;
            if (t.s < 0) return "-" + t.negate().toString(g);
            var C;
            if (16 == g) C = 4; else if (8 == g) C = 3; else if (2 == g) C = 1; else if (32 == g) C = 5; else {
                if (4 != g) return t.toRadix(g);
                C = 2
            }
            var I, e = (1 << C) - 1, r = !1, i = "", n = t.t, s = t.DB - n * t.DB % C;
            if (n-- > 0) for (s < t.DB && (I = t[n] >> s) > 0 && (r = !0, i = A(I)); n >= 0;) s < C ? (I = (t[n] & (1 << s) - 1) << C - s, I |= t[--n] >> (s += t.DB - C)) : (I = t[n] >> (s -= C) & e, s <= 0 && (s += t.DB, --n)), I > 0 && (r = !0), r && (i += A(I));
            return r ? i : "0"
        }, D.negate = function () {
            var g = new t;
            return t.ZERO.subTo(this, g), g
        }, D.abs = function () {
            return this.s < 0 ? this.negate() : this
        }, D.compareTo = function (g) {
            var t = this.s - g.s;
            if (0 != t) return t;
            var A = this.t;
            if (0 != (t = A - g.t)) return this.s < 0 ? -t : t;
            for (; --A >= 0;) if (0 != (t = this[A] - g[A])) return t;
            return 0
        }, D.bitLength = function () {
            return this.t <= 0 ? 0 : this.DB * (this.t - 1) + e(this[this.t - 1] ^ this.s & this.DM)
        }, D.byteLength = function () {
            return this.bitLength() >> 3
        }, D.mod = function (g) {
            var A = new t;
            return this.abs().divRemTo(g, null, A), this.s < 0 && A.compareTo(t.ZERO) > 0 && g.subTo(A, A), A
        }, D.modPowInt = function (g, t) {
            var A;
            return A = g < 256 || t.isEven() ? new r(t) : new i(t), this.exp(g, A)
        }, c.prototype.convert = l, c.prototype.revert = l, c.prototype.mulTo = function (g, t, A) {
            g.multiplyTo(t, A)
        }, c.prototype.sqrTo = function (g, t) {
            g.squareTo(t)
        }, f.prototype.convert = function (g) {
            if (g.s < 0 || g.t > 2 * this.m.t) return g.mod(this.m);
            if (g.compareTo(this.m) < 0) return g;
            var A = new t;
            return g.copyTo(A), this.reduce(A), A
        }, f.prototype.revert = function (g) {
            return g
        }, f.prototype.reduce = function (g) {
            var t = this;
            for (g.drShiftTo(t.m.t - 1, t.r2), g.t > t.m.t + 1 && (g.t = t.m.t + 1, g.clamp()), t.mu.multiplyUpperTo(t.r2, t.m.t + 1, t.q3), t.m.multiplyLowerTo(t.q3, t.m.t + 1, t.r2); g.compareTo(t.r2) < 0;) g.dAddOffset(1, t.m.t + 1);
            for (g.subTo(t.r2, g); g.compareTo(t.m) >= 0;) g.subTo(t.m, g)
        }, f.prototype.mulTo = function (g, t, A) {
            g.multiplyTo(t, A), this.reduce(A)
        }, f.prototype.sqrTo = function (g, t) {
            g.squareTo(t), this.reduce(t)
        };
        var K = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
            N = (1 << 26) / K[K.length - 1];
        D.chunkSize = function (g) {
            return Math.floor(Math.LN2 * this.DB / Math.log(g))
        }, D.toRadix = function (g) {
            if (null == g && (g = 10), 0 == this.signum() || g < 2 || g > 36) return "0";
            var A = this.chunkSize(g), C = Math.pow(g, A), e = I(C), r = new t, i = new t, n = "";
            for (this.divRemTo(e, r, i); r.signum() > 0;) n = (C + i.intValue()).toString(g).substr(1) + n, r.divRemTo(e, r, i);
            return i.intValue().toString(g) + n
        }, D.fromRadix = function (g, A) {
            var I = this;
            I.fromInt(0), null == A && (A = 10);
            for (var e = I.chunkSize(A), r = Math.pow(A, e), i = !1, n = 0, s = 0, o = 0; o < g.length; ++o) {
                var a = C(g, o);
                a < 0 ? "-" == g.charAt(o) && 0 == I.signum() && (i = !0) : (s = A * s + a, ++n >= e && (I.dMultiply(r), I.dAddOffset(s, 0), n = 0, s = 0))
            }
            n > 0 && (I.dMultiply(Math.pow(A, n)), I.dAddOffset(s, 0)), i && t.ZERO.subTo(I, I)
        }, D.fromNumber = function (g, A, C) {
            var I = this;
            if ("number" == typeof A) if (g < 2) I.fromInt(1); else for (I.fromNumber(g, C), I.testBit(g - 1) || I.bitwiseTo(t.ONE.shiftLeft(g - 1), s, I), I.isEven() && I.dAddOffset(1, 0); !I.isProbablePrime(A);) I.dAddOffset(2, 0), I.bitLength() > g && I.subTo(t.ONE.shiftLeft(g - 1), I); else {
                var e = new Array, r = 7 & g;
                e.length = 1 + (g >> 3), A.nextBytes(e), r > 0 ? e[0] &= (1 << r) - 1 : e[0] = 0, I.fromString(e, 256)
            }
        }, D.bitwiseTo = function (g, t, A) {
            var C, I, e = this, r = Math.min(g.t, e.t);
            for (C = 0; C < r; ++C) A[C] = t(e[C], g[C]);
            if (g.t < e.t) {
                for (I = g.s & e.DM, C = r; C < e.t; ++C) A[C] = t(e[C], I);
                A.t = e.t
            } else {
                for (I = e.s & e.DM, C = r; C < g.t; ++C) A[C] = t(I, g[C]);
                A.t = g.t
            }
            A.s = t(e.s, g.s), A.clamp()
        }, D.changeBit = function (g, A) {
            var C = t.ONE.shiftLeft(g);
            return this.bitwiseTo(C, A, C), C
        }, D.addTo = function (g, t) {
            for (var A = this, C = 0, I = 0, e = Math.min(g.t, A.t); C < e;) I += A[C] + g[C], t[C++] = I & A.DM, I >>= A.DB;
            if (g.t < A.t) {
                for (I += g.s; C < A.t;) I += A[C], t[C++] = I & A.DM, I >>= A.DB;
                I += A.s
            } else {
                for (I += A.s; C < g.t;) I += g[C], t[C++] = I & A.DM, I >>= A.DB;
                I += g.s
            }
            t.s = I < 0 ? -1 : 0, I > 0 ? t[C++] = I : I < -1 && (t[C++] = A.DV + I), t.t = C, t.clamp()
        }, D.dMultiply = function (g) {
            this[this.t] = this.am(0, g - 1, this, 0, 0, this.t), ++this.t, this.clamp()
        }, D.dAddOffset = function (g, t) {
            if (0 != g) {
                for (; this.t <= t;) this[this.t++] = 0;
                for (this[t] += g; this[t] >= this.DV;) this[t] -= this.DV, ++t >= this.t && (this[this.t++] = 0), ++this[t]
            }
        }, D.multiplyLowerTo = function (g, t, A) {
            var C = Math.min(this.t + g.t, t);
            for (A.s = 0, A.t = C; C > 0;) A[--C] = 0;
            var I;
            for (I = A.t - this.t; C < I; ++C) A[C + this.t] = this.am(0, g[C], A, C, 0, this.t);
            for (I = Math.min(g.t, t); C < I; ++C) this.am(0, g[C], A, C, 0, t - C);
            A.clamp()
        }, D.multiplyUpperTo = function (g, t, A) {
            --t;
            var C = A.t = this.t + g.t - t;
            for (A.s = 0; --C >= 0;) A[C] = 0;
            for (C = Math.max(t - this.t, 0); C < g.t; ++C) A[this.t + C - t] = this.am(t - C, g[C], A, 0, 0, this.t + C - t);
            A.clamp(), A.drShiftTo(1, A)
        }, D.modInt = function (g) {
            if (g <= 0) return 0;
            var t = this.DV % g, A = this.s < 0 ? g - 1 : 0;
            if (this.t > 0) if (0 == t) A = this[0] % g; else for (var C = this.t - 1; C >= 0; --C) A = (t * A + this[C]) % g;
            return A
        }, D.millerRabin = function (g) {
            var A = this.subtract(t.ONE), C = A.getLowestSetBit();
            if (C <= 0) return !1;
            var I = A.shiftRight(C);
            (g = g + 1 >> 1) > K.length && (g = K.length);
            for (var e = new t(null), r = [], i = 0; i < g; ++i) {
                for (; s = K[Math.floor(Math.random() * K.length)], -1 != r.indexOf(s););
                r.push(s), e.fromInt(s);
                var n = e.modPow(I, this);
                if (0 != n.compareTo(t.ONE) && 0 != n.compareTo(A)) {
                    for (var s = 1; s++ < C && 0 != n.compareTo(A);) if (0 == (n = n.modPowInt(2, this)).compareTo(t.ONE)) return !1;
                    if (0 != n.compareTo(A)) return !1
                }
            }
            return !0
        }, D.clone = function () {
            var g = new t;
            return this.copyTo(g), g
        }, D.intValue = function () {
            if (this.s < 0) {
                if (1 == this.t) return this[0] - this.DV;
                if (0 == this.t) return -1
            } else {
                if (1 == this.t) return this[0];
                if (0 == this.t) return 0
            }
            return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
        }, D.byteValue = function () {
            return 0 == this.t ? this.s : this[0] << 24 >> 24
        }, D.shortValue = function () {
            return 0 == this.t ? this.s : this[0] << 16 >> 16
        }, D.signum = function () {
            return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
        }, D.toByteArray = function () {
            var g = this, t = g.t, A = new Array;
            A[0] = g.s;
            var C, I = g.DB - t * g.DB % 8, e = 0;
            if (t-- > 0) for (I < g.DB && (C = g[t] >> I) != (g.s & g.DM) >> I && (A[e++] = C | g.s << g.DB - I); t >= 0;) I < 8 ? (C = (g[t] & (1 << I) - 1) << 8 - I, C |= g[--t] >> (I += g.DB - 8)) : (C = g[t] >> (I -= 8) & 255, I <= 0 && (I += g.DB, --t)), 0 != (128 & C) && (C |= -256), 0 === e && (128 & g.s) != (128 & C) && ++e, (e > 0 || C != g.s) && (A[e++] = C);
            return A
        }, D.equals = function (g) {
            return 0 == this.compareTo(g)
        }, D.min = function (g) {
            return this.compareTo(g) < 0 ? this : g
        }, D.max = function (g) {
            return this.compareTo(g) > 0 ? this : g
        }, D.and = function (g) {
            var A = new t;
            return this.bitwiseTo(g, n, A), A
        }, D.or = function (g) {
            var A = new t;
            return this.bitwiseTo(g, s, A), A
        }, D.xor = function (g) {
            var A = new t;
            return this.bitwiseTo(g, o, A), A
        }, D.andNot = function (g) {
            var A = new t;
            return this.bitwiseTo(g, a, A), A
        }, D.not = function () {
            for (var g = new t, A = 0; A < this.t; ++A) g[A] = this.DM & ~this[A];
            return g.t = this.t, g.s = ~this.s, g
        }, D.shiftLeft = function (g) {
            var A = new t;
            return g < 0 ? this.rShiftTo(-g, A) : this.lShiftTo(g, A), A
        }, D.shiftRight = function (g) {
            var A = new t;
            return g < 0 ? this.lShiftTo(-g, A) : this.rShiftTo(g, A), A
        }, D.getLowestSetBit = function () {
            for (var g = 0; g < this.t; ++g) if (0 != this[g]) return g * this.DB + h(this[g]);
            return this.s < 0 ? this.t * this.DB : -1
        }, D.bitCount = function () {
            for (var g = 0, t = this.s & this.DM, A = 0; A < this.t; ++A) g += u(this[A] ^ t);
            return g
        }, D.testBit = function (g) {
            var t = Math.floor(g / this.DB);
            return t >= this.t ? 0 != this.s : 0 != (this[t] & 1 << g % this.DB)
        }, D.setBit = function (g) {
            return this.changeBit(g, s)
        }, D.clearBit = function (g) {
            return this.changeBit(g, a)
        }, D.flipBit = function (g) {
            return this.changeBit(g, o)
        }, D.add = function (g) {
            var A = new t;
            return this.addTo(g, A), A
        }, D.subtract = function (g) {
            var A = new t;
            return this.subTo(g, A), A
        }, D.multiply = function (g) {
            var A = new t;
            return this.multiplyTo(g, A), A
        }, D.divide = function (g) {
            var A = new t;
            return this.divRemTo(g, A, null), A
        }, D.remainder = function (g) {
            var A = new t;
            return this.divRemTo(g, null, A), A
        }, D.divideAndRemainder = function (g) {
            var A = new t, C = new t;
            return this.divRemTo(g, A, C), new Array(A, C)
        }, D.modPow = function (g, A) {
            var C, n, s = g.bitLength(), o = I(1);
            if (s <= 0) return o;
            C = s < 18 ? 1 : s < 48 ? 3 : s < 144 ? 4 : s < 768 ? 5 : 6, n = s < 8 ? new r(A) : A.isEven() ? new f(A) : new i(A);
            var a = new Array, h = 3, u = C - 1, c = (1 << C) - 1;
            if (a[1] = n.convert(this), C > 1) {
                var l = new t;
                for (n.sqrTo(a[1], l); h <= c;) a[h] = new t, n.mulTo(l, a[h - 2], a[h]), h += 2
            }
            var d, p, F = g.t - 1, v = !0, y = new t;
            for (s = e(g[F]) - 1; F >= 0;) {
                for (s >= u ? d = g[F] >> s - u & c : (d = (g[F] & (1 << s + 1) - 1) << u - s, F > 0 && (d |= g[F - 1] >> this.DB + s - u)), h = C; 0 == (1 & d);) d >>= 1, --h;
                if ((s -= h) < 0 && (s += this.DB, --F), v) a[d].copyTo(o), v = !1; else {
                    for (; h > 1;) n.sqrTo(o, y), n.sqrTo(y, o), h -= 2;
                    h > 0 ? n.sqrTo(o, y) : (p = o, o = y, y = p), n.mulTo(y, a[d], o)
                }
                for (; F >= 0 && 0 == (g[F] & 1 << s);) n.sqrTo(o, y), p = o, o = y, y = p, --s < 0 && (s = this.DB - 1, --F)
            }
            return n.revert(o)
        }, D.modInverse = function (g) {
            var A = g.isEven();
            if (0 === this.signum()) throw new Error("division by zero");
            if (this.isEven() && A || 0 == g.signum()) return t.ZERO;
            for (var C = g.clone(), e = this.clone(), r = I(1), i = I(0), n = I(0), s = I(1); 0 != C.signum();) {
                for (; C.isEven();) C.rShiftTo(1, C), A ? (r.isEven() && i.isEven() || (r.addTo(this, r), i.subTo(g, i)), r.rShiftTo(1, r)) : i.isEven() || i.subTo(g, i), i.rShiftTo(1, i);
                for (; e.isEven();) e.rShiftTo(1, e), A ? (n.isEven() && s.isEven() || (n.addTo(this, n), s.subTo(g, s)), n.rShiftTo(1, n)) : s.isEven() || s.subTo(g, s), s.rShiftTo(1, s);
                C.compareTo(e) >= 0 ? (C.subTo(e, C), A && r.subTo(n, r), i.subTo(s, i)) : (e.subTo(C, e), A && n.subTo(r, n), s.subTo(i, s))
            }
            if (0 != e.compareTo(t.ONE)) return t.ZERO;
            for (; s.compareTo(g) >= 0;) s.subTo(g, s);
            for (; s.signum() < 0;) s.addTo(g, s);
            return s
        }, D.pow = function (g) {
            return this.exp(g, new c)
        }, D.gcd = function (g) {
            var t = this.s < 0 ? this.negate() : this.clone(), A = g.s < 0 ? g.negate() : g.clone();
            if (t.compareTo(A) < 0) {
                var C = t;
                t = A, A = C
            }
            var I = t.getLowestSetBit(), e = A.getLowestSetBit();
            if (e < 0) return t;
            for (I < e && (e = I), e > 0 && (t.rShiftTo(e, t), A.rShiftTo(e, A)); t.signum() > 0;) (I = t.getLowestSetBit()) > 0 && t.rShiftTo(I, t), (I = A.getLowestSetBit()) > 0 && A.rShiftTo(I, A), t.compareTo(A) >= 0 ? (t.subTo(A, t), t.rShiftTo(1, t)) : (A.subTo(t, A), A.rShiftTo(1, A));
            return e > 0 && A.lShiftTo(e, A), A
        }, D.isProbablePrime = function (g) {
            var t, A = this.abs();
            if (1 == A.t && A[0] <= K[K.length - 1]) {
                for (t = 0; t < K.length; ++t) if (A[0] == K[t]) return !0;
                return !1
            }
            if (A.isEven()) return !1;
            for (t = 1; t < K.length;) {
                for (var C = K[t], I = t + 1; I < K.length && C < N;) C *= K[I++];
                for (C = A.modInt(C); t < I;) if (C % K[t++] == 0) return !1
            }
            return A.millerRabin(g)
        }, D.square = function () {
            var g = new t;
            return this.squareTo(g), g
        }, t.ZERO = I(0), t.ONE = I(1), d.prototype.init = function (g) {
            var t, A, C;
            for (t = 0; t < 256; ++t) this.S[t] = t;
            for (A = 0, t = 0; t < 256; ++t) A = A + this.S[t] + g[t % g.length] & 255, C = this.S[t], this.S[t] = this.S[A], this.S[A] = C;
            this.i = 0, this.j = 0
        }, d.prototype.next = function () {
            var g;
            return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, g = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = g, this.S[g + this.S[this.i] & 255]
        };
        var O, U, M, k = 256;
        if (null == U) {
            U = new Array, M = 0;
            var H, L = new Array(256);
            for (H = 0; H < L.length; ++H) L[H] = Math.random(10), U[M++] = 255 & L[H]
        }
        v.prototype.nextBytes = function (g) {
            var t;
            for (t = 0; t < g.length; ++t) g[t] = F()
        }, b.prototype.sign = function (g) {
            var t = m(g, this.n.bitLength() + 7 >> 3, "sign");
            if (null == t) return null;
            var A = this.doPrivate(t);
            if (null == A) return null;
            var C = A.toString(16);
            return 0 == (1 & C.length) ? C : "0" + C
        }, b.prototype.verify = function (g, t) {
            var A = y(g, 16), C = this.doPublic(A);
            return null == C ? null : w(C, this.n.bitLength() + 7 >> 3).toString() === t.toString()
        }, b.prototype.doPublic = function (g) {
            return g.modPowInt(this.e, this.n)
        }, b.prototype.setPublic = function (g, t) {
            null != g && null != t && g.length > 0 && t.length > 0 ? (this.n = y(g, 16), this.e = parseInt(t, 16)) : console.error("Invalid RSA public key")
        }, b.prototype.encrypt = function (g) {
            var t = m(g, this.n.bitLength() + 7 >> 3);
            if (null == t) return null;
            var A = this.doPublic(t);
            if (null == A) return null;
            var C = A.toString(16);
            return 0 == (1 & C.length) ? C : "0" + C
        }, b.prototype.doPrivate = function (g) {
            if (null == this.p || null == this.q) return g.modPow(this.d, this.n);
            for (var t = g.mod(this.p).modPow(this.dmp1, this.p), A = g.mod(this.q).modPow(this.dmq1, this.q); t.compareTo(A) < 0;) t = t.add(this.p);
            return t.subtract(A).multiply(this.coeff).mod(this.p).multiply(this.q).add(A)
        }, b.prototype.setPrivate = function (g, t, A) {
            null != g && null != t && g.length > 0 && t.length > 0 ? (this.n = y(g, 16), this.e = parseInt(t, 16), this.d = y(A, 16)) : console.error("Invalid RSA private key")
        }, b.prototype.setPrivateEx = function (g, t, A, C, I, e, r, i) {
            null != g && null != t && g.length > 0 && t.length > 0 ? (this.n = y(g, 16), this.e = parseInt(t, 16), this.d = y(A, 16), this.p = y(C, 16), this.q = y(I, 16), this.dmp1 = y(e, 16), this.dmq1 = y(r, 16), this.coeff = y(i, 16)) : console.error("Invalid RSA private key")
        }, b.prototype.generate = function (g, A) {
            var C = new v, I = g >> 1;
            this.e = parseInt(A, 16);
            for (var e = new t(A, 16); ;) {
                for (; this.p = new t(g - I, 1, C), 0 != this.p.subtract(t.ONE).gcd(e).compareTo(t.ONE) || !this.p.isProbablePrime(10););
                for (; this.q = new t(I, 1, C), 0 != this.q.subtract(t.ONE).gcd(e).compareTo(t.ONE) || !this.q.isProbablePrime(10););
                if (this.p.compareTo(this.q) <= 0) {
                    var r = this.p;
                    this.p = this.q, this.q = r
                }
                var i = this.p.subtract(t.ONE), n = this.q.subtract(t.ONE), s = i.multiply(n);
                if (0 == s.gcd(e).compareTo(t.ONE)) {
                    this.n = this.p.multiply(this.q), this.d = e.modInverse(s), this.dmp1 = this.d.mod(i), this.dmq1 = this.d.mod(n), this.coeff = this.q.modInverse(this.p);
                    break
                }
            }
        }, b.prototype.decrypt = function (g) {
            var t = y(g, 16), A = this.doPrivate(t);
            return null == A ? null : w(A, this.n.bitLength() + 7 >> 3)
        }, function () {
            b.prototype.generateAsync = function (g, A, C) {
                var I = new v, e = g >> 1;
                this.e = parseInt(A, 16);
                var r = new t(A, 16), i = this, n = function () {
                    var A = function () {
                        if (i.p.compareTo(i.q) <= 0) {
                            var g = i.p;
                            i.p = i.q, i.q = g
                        }
                        var A = i.p.subtract(t.ONE), I = i.q.subtract(t.ONE), e = A.multiply(I);
                        0 == e.gcd(r).compareTo(t.ONE) ? (i.n = i.p.multiply(i.q), i.d = r.modInverse(e), i.dmp1 = i.d.mod(A), i.dmq1 = i.d.mod(I), i.coeff = i.q.modInverse(i.p), setTimeout(function () {
                            C()
                        }, 0)) : setTimeout(n, 0)
                    }, s = function () {
                        i.q = nbi(), i.q.fromNumberAsync(e, 1, I, function () {
                            i.q.subtract(t.ONE).gcda(r, function (g) {
                                0 == g.compareTo(t.ONE) && i.q.isProbablePrime(10) ? setTimeout(A, 0) : setTimeout(s, 0)
                            })
                        })
                    }, o = function () {
                        i.p = nbi(), i.p.fromNumberAsync(g - e, 1, I, function () {
                            i.p.subtract(t.ONE).gcda(r, function (g) {
                                0 == g.compareTo(t.ONE) && i.p.isProbablePrime(10) ? setTimeout(s, 0) : setTimeout(o, 0)
                            })
                        })
                    };
                    setTimeout(o, 0)
                };
                setTimeout(n, 0)
            };
            t.prototype.gcda = function (g, t) {
                var A = this.s < 0 ? this.negate() : this.clone(), C = g.s < 0 ? g.negate() : g.clone();
                if (A.compareTo(C) < 0) {
                    var I = A;
                    A = C, C = I
                }
                var e = A.getLowestSetBit(), r = C.getLowestSetBit();
                if (r < 0) t(A); else {
                    e < r && (r = e), r > 0 && (A.rShiftTo(r, A), C.rShiftTo(r, C));
                    var i = function () {
                        (e = A.getLowestSetBit()) > 0 && A.rShiftTo(e, A), (e = C.getLowestSetBit()) > 0 && C.rShiftTo(e, C), A.compareTo(C) >= 0 ? (A.subTo(C, A), A.rShiftTo(1, A)) : (C.subTo(A, C), C.rShiftTo(1, C)), A.signum() > 0 ? setTimeout(i, 0) : (r > 0 && C.lShiftTo(r, C), setTimeout(function () {
                            t(C)
                        }, 0))
                    };
                    setTimeout(i, 10)
                }
            };
            t.prototype.fromNumberAsync = function (g, A, C, I) {
                if ("number" == typeof A) if (g < 2) this.fromInt(1); else {
                    this.fromNumber(g, C), this.testBit(g - 1) || this.bitwiseTo(t.ONE.shiftLeft(g - 1), s, this), this.isEven() && this.dAddOffset(1, 0);
                    var e = this, r = function () {
                        e.dAddOffset(2, 0), e.bitLength() > g && e.subTo(t.ONE.shiftLeft(g - 1), e), e.isProbablePrime(A) ? setTimeout(function () {
                            I()
                        }, 0) : setTimeout(r, 0)
                    };
                    setTimeout(r, 0)
                } else {
                    var i = new Array, n = 7 & g;
                    i.length = 1 + (g >> 3), A.nextBytes(i), n > 0 ? i[0] &= (1 << n) - 1 : i[0] = 0, this.fromString(i, 256)
                }
            }
        }();
        var J = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", V = "=", W = W || {};
        W.env = W.env || {};
        var j = W, Z = Object.prototype;
        W.extend = function (g, t, A) {
            if (!t || !g) throw new Error("extend failed, please check that all dependencies are included.");
            var C, I = function () {
            };
            if (I.prototype = t.prototype, g.prototype = new I, g.prototype.constructor = g, g.superclass = t.prototype, t.prototype.constructor == Z.constructor && (t.prototype.constructor = t), A) {
                for (C in A) j.hasOwnProperty(A, C) && (g.prototype[C] = A[C]);
                j._IEEnumFix(g.prototype, A)
            }
        }, "undefined" != typeof KJUR && KJUR || (KJUR = {}), void 0 !== KJUR.asn1 && KJUR.asn1 || (KJUR.asn1 = {}), KJUR.asn1.ASN1Util = new function () {
            this.integerToByteHex = function (g) {
                var t = g.toString(16);
                return t.length % 2 == 1 && (t = "0" + t), t
            }, this.bigIntToMinTwosComplementsHex = function (g) {
                var A = g.toString(16);
                if ("-" != A.substr(0, 1)) A.length % 2 == 1 ? A = "0" + A : A.match(/^[0-7]/) || (A = "00" + A); else {
                    var C = A.substr(1).length;
                    C % 2 == 1 ? C += 1 : A.match(/^[0-7]/) || (C += 2);
                    for (var I = "", e = 0; e < C; e++) I += "f";
                    A = new t(I, 16).xor(g).add(t.ONE).toString(16).replace(/^-/, "")
                }
                return A
            }, this.getPEMStringFromHex = function (g, t) {
                var A = E.enc.Hex.parse(g), C = E.enc.Base64.stringify(A).replace(/(.{64})/g, "$1\r\n");
                return C = C.replace(/\r\n$/, ""), "-----BEGIN " + t + "-----\r\n" + C + "\r\n-----END " + t + "-----\r\n"
            }
        }, KJUR.asn1.ASN1Object = function () {
            this.getLengthHexFromValue = function () {
                if (void 0 === this.hV || null == this.hV) throw "this.hV is null or undefined.";
                if (this.hV.length % 2 == 1) throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
                var g = this.hV.length / 2, t = g.toString(16);
                if (t.length % 2 == 1 && (t = "0" + t), g < 128) return t;
                var A = t.length / 2;
                if (A > 15) throw "ASN.1 length too long to represent by 8x: n = " + g.toString(16);
                return (128 + A).toString(16) + t
            }, this.getEncodedHex = function () {
                return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1), this.hTLV
            }, this.getValueHex = function () {
                return this.getEncodedHex(), this.hV
            }, this.getFreshValueHex = function () {
                return ""
            }
        }, KJUR.asn1.DERAbstractString = function (g) {
            KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
            this.getString = function () {
                return this.s
            }, this.setString = function (g) {
                this.hTLV = null, this.isModified = !0, this.s = g, this.hV = stohex(this.s)
            }, this.setStringHex = function (g) {
                this.hTLV = null, this.isModified = !0, this.s = null, this.hV = g
            }, this.getFreshValueHex = function () {
                return this.hV
            }, void 0 !== g && (void 0 !== g.str ? this.setString(g.str) : void 0 !== g.hex && this.setStringHex(g.hex))
        }, W.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object), KJUR.asn1.DERAbstractTime = function (g) {
            KJUR.asn1.DERAbstractTime.superclass.constructor.call(this);
            this.localDateToUTC = function (g) {
                return utc = g.getTime() + 6e4 * g.getTimezoneOffset(), new Date(utc)
            }, this.formatDate = function (g, t) {
                var A = this.zeroPadding, C = this.localDateToUTC(g), I = String(C.getFullYear());
                return "utc" == t && (I = I.substr(2, 2)), I + A(String(C.getMonth() + 1), 2) + A(String(C.getDate()), 2) + A(String(C.getHours()), 2) + A(String(C.getMinutes()), 2) + A(String(C.getSeconds()), 2) + "Z"
            }, this.zeroPadding = function (g, t) {
                return g.length >= t ? g : new Array(t - g.length + 1).join("0") + g
            }, this.getString = function () {
                return this.s
            }, this.setString = function (g) {
                this.hTLV = null, this.isModified = !0, this.s = g, this.hV = stohex(this.s)
            }, this.setByDateValue = function (g, t, A, C, I, e) {
                var r = new Date(Date.UTC(g, t - 1, A, C, I, e, 0));
                this.setByDate(r)
            }, this.getFreshValueHex = function () {
                return this.hV
            }
        }, W.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object), KJUR.asn1.DERAbstractStructured = function (g) {
            KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
            this.setByASN1ObjectArray = function (g) {
                this.hTLV = null, this.isModified = !0, this.asn1Array = g
            }, this.appendASN1Object = function (g) {
                this.hTLV = null, this.isModified = !0, this.asn1Array.push(g)
            }, this.asn1Array = new Array, void 0 !== g && void 0 !== g.array && (this.asn1Array = g.array)
        }, W.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object), KJUR.asn1.DERBoolean = function () {
            KJUR.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = "0101ff"
        }, W.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object), KJUR.asn1.DERInteger = function (g) {
            KJUR.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function (g) {
                this.hTLV = null, this.isModified = !0, this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(g)
            }, this.setByInteger = function (g) {
                var A = new t(String(g), 10);
                this.setByBigInteger(A)
            }, this.setValueHex = function (g) {
                this.hV = g
            }, this.getFreshValueHex = function () {
                return this.hV
            }, void 0 !== g && (void 0 !== g.bigint ? this.setByBigInteger(g.bigint) : void 0 !== g.int ? this.setByInteger(g.int) : void 0 !== g.hex && this.setValueHex(g.hex))
        }, W.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object), KJUR.asn1.DERBitString = function (g) {
            KJUR.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function (g) {
                this.hTLV = null, this.isModified = !0, this.hV = g
            }, this.setUnusedBitsAndHexValue = function (g, t) {
                if (g < 0 || 7 < g) throw "unused bits shall be from 0 to 7: u = " + g;
                var A = "0" + g;
                this.hTLV = null, this.isModified = !0, this.hV = A + t
            }, this.setByBinaryString = function (g) {
                var t = 8 - (g = g.replace(/0+$/, "")).length % 8;
                8 == t && (t = 0);
                for (C = 0; C <= t; C++) g += "0";
                for (var A = "", C = 0; C < g.length - 1; C += 8) {
                    var I = g.substr(C, 8), e = parseInt(I, 2).toString(16);
                    1 == e.length && (e = "0" + e), A += e
                }
                this.hTLV = null, this.isModified = !0, this.hV = "0" + t + A
            }, this.setByBooleanArray = function (g) {
                for (var t = "", A = 0; A < g.length; A++) 1 == g[A] ? t += "1" : t += "0";
                this.setByBinaryString(t)
            }, this.newFalseArray = function (g) {
                for (var t = new Array(g), A = 0; A < g; A++) t[A] = !1;
                return t
            }, this.getFreshValueHex = function () {
                return this.hV
            }, void 0 !== g && (void 0 !== g.hex ? this.setHexValueIncludingUnusedBits(g.hex) : void 0 !== g.bin ? this.setByBinaryString(g.bin) : void 0 !== g.array && this.setByBooleanArray(g.array))
        }, W.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object), KJUR.asn1.DEROctetString = function (g) {
            KJUR.asn1.DEROctetString.superclass.constructor.call(this, g), this.hT = "04"
        }, W.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString), KJUR.asn1.DERNull = function () {
            KJUR.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500"
        }, W.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object), KJUR.asn1.DERObjectIdentifier = function (g) {
            var A = function (g) {
                var t = g.toString(16);
                return 1 == t.length && (t = "0" + t), t
            }, C = function (g) {
                var C = "", I = new t(g, 10).toString(2), e = 7 - I.length % 7;
                7 == e && (e = 0);
                for (var r = "", i = 0; i < e; i++) r += "0";
                I = r + I;
                for (i = 0; i < I.length - 1; i += 7) {
                    var n = I.substr(i, 7);
                    i != I.length - 7 && (n = "1" + n), C += A(parseInt(n, 2))
                }
                return C
            };
            KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function (g) {
                this.hTLV = null, this.isModified = !0, this.s = null, this.hV = g
            }, this.setValueOidString = function (g) {
                if (!g.match(/^[0-9.]+$/)) throw "malformed oid string: " + g;
                var t = "", I = g.split("."), e = 40 * parseInt(I[0]) + parseInt(I[1]);
                t += A(e), I.splice(0, 2);
                for (var r = 0; r < I.length; r++) t += C(I[r]);
                this.hTLV = null, this.isModified = !0, this.s = null, this.hV = t
            }, this.setValueName = function (g) {
                if (void 0 === KJUR.asn1.x509.OID.name2oidList[g]) throw "DERObjectIdentifier oidName undefined: " + g;
                var t = KJUR.asn1.x509.OID.name2oidList[g];
                this.setValueOidString(t)
            }, this.getFreshValueHex = function () {
                return this.hV
            }, void 0 !== g && (void 0 !== g.oid ? this.setValueOidString(g.oid) : void 0 !== g.hex ? this.setValueHex(g.hex) : void 0 !== g.name && this.setValueName(g.name))
        }, W.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object), KJUR.asn1.DERUTF8String = function (g) {
            KJUR.asn1.DERUTF8String.superclass.constructor.call(this, g), this.hT = "0c"
        }, W.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString), KJUR.asn1.DERNumericString = function (g) {
            KJUR.asn1.DERNumericString.superclass.constructor.call(this, g), this.hT = "12"
        }, W.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString), KJUR.asn1.DERPrintableString = function (g) {
            KJUR.asn1.DERPrintableString.superclass.constructor.call(this, g), this.hT = "13"
        }, W.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString), KJUR.asn1.DERTeletexString = function (g) {
            KJUR.asn1.DERTeletexString.superclass.constructor.call(this, g), this.hT = "14"
        }, W.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString), KJUR.asn1.DERIA5String = function (g) {
            KJUR.asn1.DERIA5String.superclass.constructor.call(this, g), this.hT = "16"
        }, W.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString), KJUR.asn1.DERUTCTime = function (g) {
            KJUR.asn1.DERUTCTime.superclass.constructor.call(this, g), this.hT = "17", this.setByDate = function (g) {
                this.hTLV = null, this.isModified = !0, this.date = g, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s)
            }, void 0 !== g && (void 0 !== g.str ? this.setString(g.str) : void 0 !== g.hex ? this.setStringHex(g.hex) : void 0 !== g.date && this.setByDate(g.date))
        }, W.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime), KJUR.asn1.DERGeneralizedTime = function (g) {
            KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, g), this.hT = "18", this.setByDate = function (g) {
                this.hTLV = null, this.isModified = !0, this.date = g, this.s = this.formatDate(this.date, "gen"), this.hV = stohex(this.s)
            }, void 0 !== g && (void 0 !== g.str ? this.setString(g.str) : void 0 !== g.hex ? this.setStringHex(g.hex) : void 0 !== g.date && this.setByDate(g.date))
        }, W.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime), KJUR.asn1.DERSequence = function (g) {
            KJUR.asn1.DERSequence.superclass.constructor.call(this, g), this.hT = "30", this.getFreshValueHex = function () {
                for (var g = "", t = 0; t < this.asn1Array.length; t++) g += this.asn1Array[t].getEncodedHex();
                return this.hV = g, this.hV
            }
        }, W.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured), KJUR.asn1.DERSet = function (g) {
            KJUR.asn1.DERSet.superclass.constructor.call(this, g), this.hT = "31", this.getFreshValueHex = function () {
                for (var g = new Array, t = 0; t < this.asn1Array.length; t++) {
                    var A = this.asn1Array[t];
                    g.push(A.getEncodedHex())
                }
                return g.sort(), this.hV = g.join(""), this.hV
            }
        }, W.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured), KJUR.asn1.DERTaggedObject = function (g) {
            KJUR.asn1.DERTaggedObject.superclass.constructor.call(this), this.hT = "a0", this.hV = "", this.isExplicit = !0, this.asn1Object = null, this.setASN1Object = function (g, t, A) {
                this.hT = t, this.isExplicit = g, this.asn1Object = A, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = A.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, t), this.isModified = !1)
            }, this.getFreshValueHex = function () {
                return this.hV
            }, void 0 !== g && (void 0 !== g.tag && (this.hT = g.tag), void 0 !== g.explicit && (this.isExplicit = g.explicit), void 0 !== g.obj && (this.asn1Object = g.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
        }, W.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object), function (g) {
            "use strict";
            var t, A = {};
            A.decode = function (g) {
                var A;
                if (void 0 === t) {
                    var C = "0123456789ABCDEF", I = " \f\n\r\t \u2028\u2029";
                    for (t = [], A = 0; A < 16; ++A) t[C.charAt(A)] = A;
                    for (C = C.toLowerCase(), A = 10; A < 16; ++A) t[C.charAt(A)] = A;
                    for (A = 0; A < I.length; ++A) t[I.charAt(A)] = -1
                }
                var e = [], r = 0, i = 0;
                for (A = 0; A < g.length; ++A) {
                    var n = g.charAt(A);
                    if ("=" == n) break;
                    if (-1 != (n = t[n])) {
                        if (void 0 === n) throw "Illegal character at offset " + A;
                        r |= n, ++i >= 2 ? (e[e.length] = r, r = 0, i = 0) : r <<= 4
                    }
                }
                if (i) throw "Hex encoding incomplete: 4 bits missing";
                return e
            }, g.UnionHex = A
        }(_global_), function (g) {
            "use strict";
            var t, A = {};
            A.decode = function (g) {
                var A;
                if (void 0 === t) {
                    var C = "= \f\n\r\t \u2028\u2029";
                    for (t = [], A = 0; A < 64; ++A) t["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(A)] = A;
                    for (A = 0; A < C.length; ++A) t[C.charAt(A)] = -1
                }
                var I = [], e = 0, r = 0;
                for (A = 0; A < g.length; ++A) {
                    var i = g.charAt(A);
                    if ("=" == i) break;
                    if (-1 != (i = t[i])) {
                        if (void 0 === i) throw "Illegal character at offset " + A;
                        e |= i, ++r >= 4 ? (I[I.length] = e >> 16, I[I.length] = e >> 8 & 255, I[I.length] = 255 & e, e = 0, r = 0) : e <<= 6
                    }
                }
                switch (r) {
                    case 1:
                        throw "Base64 encoding incomplete: at least 2 bits missing";
                    case 2:
                        I[I.length] = e >> 10;
                        break;
                    case 3:
                        I[I.length] = e >> 16, I[I.length] = e >> 8 & 255
                }
                return I
            }, A.re = /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/, A.unarmor = function (g) {
                var t = A.re.exec(g);
                if (t) if (t[1]) g = t[1]; else {
                    if (!t[2]) throw "RegExp out of sync";
                    g = t[2]
                }
                return A.decode(g)
            }, g.UnionBase64 = A
        }(_global_), function (g) {
            "use strict";

            function t(g, A) {
                g instanceof t ? (this.enc = g.enc, this.pos = g.pos) : (this.enc = g, this.pos = A)
            }

            var A = {
                tag: function (g, t) {
                    var A = document.createElement(g);
                    return A.className = t, A
                }, text: function (g) {
                    return document.createTextNode(g)
                }
            };
            t.prototype.get = function (g) {
                if (void 0 === g && (g = this.pos++), g >= this.enc.length) throw "Requesting byte offset " + g + " on a stream of length " + this.enc.length;
                return this.enc[g]
            }, t.prototype.hexDigits = "0123456789ABCDEF", t.prototype.hexByte = function (g) {
                return this.hexDigits.charAt(g >> 4 & 15) + this.hexDigits.charAt(15 & g)
            }, t.prototype.hexDump = function (g, t, A) {
                for (var C = "", I = g; I < t; ++I) if (C += this.hexByte(this.get(I)), !0 !== A) switch (15 & I) {
                    case 7:
                        C += "  ";
                        break;
                    case 15:
                        C += "\n";
                        break;
                    default:
                        C += " "
                }
                return C
            }, t.prototype.parseStringISO = function (g, t) {
                for (var A = "", C = g; C < t; ++C) A += String.fromCharCode(this.get(C));
                return A
            }, t.prototype.parseStringUTF = function (g, t) {
                for (var A = "", C = g; C < t;) {
                    var I = this.get(C++);
                    A += I < 128 ? String.fromCharCode(I) : I > 191 && I < 224 ? String.fromCharCode((31 & I) << 6 | 63 & this.get(C++)) : String.fromCharCode((15 & I) << 12 | (63 & this.get(C++)) << 6 | 63 & this.get(C++))
                }
                return A
            }, t.prototype.parseStringBMP = function (g, t) {
                for (var A = "", C = g; C < t; C += 2) {
                    var I = this.get(C), e = this.get(C + 1);
                    A += String.fromCharCode((I << 8) + e)
                }
                return A
            }, t.prototype.reTime = /^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/, t.prototype.parseTime = function (g, t) {
                var A = this.parseStringISO(g, t), C = this.reTime.exec(A);
                return C ? (A = C[1] + "-" + C[2] + "-" + C[3] + " " + C[4], C[5] && (A += ":" + C[5], C[6] && (A += ":" + C[6], C[7] && (A += "." + C[7]))), C[8] && (A += " UTC", "Z" != C[8] && (A += C[8], C[9] && (A += ":" + C[9]))), A) : "Unrecognized time: " + A
            }, t.prototype.parseInteger = function (g, t) {
                var A = t - g;
                if (A > 4) {
                    A <<= 3;
                    var C = this.get(g);
                    if (0 === C) A -= 8; else for (; C < 128;) C <<= 1, --A;
                    return "(" + A + " bit)"
                }
                for (var I = 0, e = g; e < t; ++e) I = I << 8 | this.get(e);
                return I
            }, t.prototype.parseBitString = function (g, t) {
                var A = this.get(g), C = (t - g - 1 << 3) - A, I = "(" + C + " bit)";
                if (C <= 20) {
                    var e = A;
                    I += " ";
                    for (var r = t - 1; r > g; --r) {
                        for (var i = this.get(r), n = e; n < 8; ++n) I += i >> n & 1 ? "1" : "0";
                        e = 0
                    }
                }
                return I
            }, t.prototype.parseOctetString = function (g, t) {
                var A = t - g, C = "(" + A + " byte) ";
                A > 100 && (t = g + 100);
                for (var I = g; I < t; ++I) C += this.hexByte(this.get(I));
                return A > 100 && (C += "…"), C
            }, t.prototype.parseOID = function (g, t) {
                for (var A = "", C = 0, I = 0, e = g; e < t; ++e) {
                    var r = this.get(e);
                    if (C = C << 7 | 127 & r, I += 7, !(128 & r)) {
                        if ("" === A) {
                            var i = C < 80 ? C < 40 ? 0 : 1 : 2;
                            A = i + "." + (C - 40 * i)
                        } else A += "." + (I >= 31 ? "bigint" : C);
                        C = I = 0
                    }
                }
                return A
            };
            var C = function (g, t, A, C, I) {
                this.stream = g, this.header = t, this.length = A, this.tag = C, this.sub = I
            };
            C.prototype.typeName = function () {
                if (void 0 === this.tag) return "unknown";
                var g = this.tag >> 6, t = (this.tag, 31 & this.tag);
                switch (g) {
                    case 0:
                        switch (t) {
                            case 0:
                                return "EOC";
                            case 1:
                                return "BOOLEAN";
                            case 2:
                                return "INTEGER";
                            case 3:
                                return "BIT_STRING";
                            case 4:
                                return "OCTET_STRING";
                            case 5:
                                return "NULL";
                            case 6:
                                return "OBJECT_IDENTIFIER";
                            case 7:
                                return "ObjectDescriptor";
                            case 8:
                                return "EXTERNAL";
                            case 9:
                                return "REAL";
                            case 10:
                                return "ENUMERATED";
                            case 11:
                                return "EMBEDDED_PDV";
                            case 12:
                                return "UTF8String";
                            case 16:
                                return "SEQUENCE";
                            case 17:
                                return "SET";
                            case 18:
                                return "NumericString";
                            case 19:
                                return "PrintableString";
                            case 20:
                                return "TeletexString";
                            case 21:
                                return "VideotexString";
                            case 22:
                                return "IA5String";
                            case 23:
                                return "UTCTime";
                            case 24:
                                return "GeneralizedTime";
                            case 25:
                                return "GraphicString";
                            case 26:
                                return "VisibleString";
                            case 27:
                                return "GeneralString";
                            case 28:
                                return "UniversalString";
                            case 30:
                                return "BMPString";
                            default:
                                return "Universal_" + t.toString(16)
                        }
                    case 1:
                        return "Application_" + t.toString(16);
                    case 2:
                        return "[" + t + "]";
                    case 3:
                        return "Private_" + t.toString(16)
                }
            }, C.prototype.reSeemsASCII = /^[ -~]+$/, C.prototype.content = function () {
                if (void 0 === this.tag) return null;
                var g = this.tag >> 6, t = 31 & this.tag, A = this.posContent(), C = Math.abs(this.length);
                if (0 !== g) {
                    if (null !== this.sub) return "(" + this.sub.length + " elem)";
                    var I = this.stream.parseStringISO(A, A + Math.min(C, 100));
                    return this.reSeemsASCII.test(I) ? I.substring(0, 200) + (I.length > 200 ? "…" : "") : this.stream.parseOctetString(A, A + C)
                }
                switch (t) {
                    case 1:
                        return 0 === this.stream.get(A) ? "false" : "true";
                    case 2:
                        return this.stream.parseInteger(A, A + C);
                    case 3:
                        return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(A, A + C);
                    case 4:
                        return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(A, A + C);
                    case 6:
                        return this.stream.parseOID(A, A + C);
                    case 16:
                    case 17:
                        return "(" + this.sub.length + " elem)";
                    case 12:
                        return this.stream.parseStringUTF(A, A + C);
                    case 18:
                    case 19:
                    case 20:
                    case 21:
                    case 22:
                    case 26:
                        return this.stream.parseStringISO(A, A + C);
                    case 30:
                        return this.stream.parseStringBMP(A, A + C);
                    case 23:
                    case 24:
                        return this.stream.parseTime(A, A + C)
                }
                return null
            }, C.prototype.toString = function () {
                return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
            }, C.prototype.print = function (g) {
                if (void 0 === g && (g = ""), document.writeln(g + this), null !== this.sub) {
                    g += "  ";
                    for (var t = 0, A = this.sub.length; t < A; ++t) this.sub[t].print(g)
                }
            }, C.prototype.toPrettyString = function (g) {
                void 0 === g && (g = "");
                var t = g + this.typeName() + " @" + this.stream.pos;
                if (this.length >= 0 && (t += "+"), t += this.length, 32 & this.tag ? t += " (constructed)" : 3 != this.tag && 4 != this.tag || null === this.sub || (t += " (encapsulates)"), t += "\n", null !== this.sub) {
                    g += "  ";
                    for (var A = 0, C = this.sub.length; A < C; ++A) t += this.sub[A].toPrettyString(g)
                }
                return t
            }, C.prototype.toDOM = function () {
                var g = A.tag("div", "node");
                g.asn1 = this;
                var t = A.tag("div", "head"), C = this.typeName().replace(/_/g, " ");
                t.innerHTML = C;
                var I = this.content();
                if (null !== I) {
                    I = String(I).replace(/</g, "&lt;");
                    var e = A.tag("span", "preview");
                    e.appendChild(A.text(I)), t.appendChild(e)
                }
                g.appendChild(t), this.node = g, this.head = t;
                var r = A.tag("div", "value");
                if (C = "Offset: " + this.stream.pos + "<br/>", C += "Length: " + this.header + "+", this.length >= 0 ? C += this.length : C += -this.length + " (undefined)", 32 & this.tag ? C += "<br/>(constructed)" : 3 != this.tag && 4 != this.tag || null === this.sub || (C += "<br/>(encapsulates)"), null !== I && (C += "<br/>Value:<br/><b>" + I + "</b>", "object" == typeof oids && 6 == this.tag)) {
                    var i = oids[I];
                    i && (i.d && (C += "<br/>" + i.d), i.c && (C += "<br/>" + i.c), i.w && (C += "<br/>(warning!)"))
                }
                r.innerHTML = C, g.appendChild(r);
                var n = A.tag("div", "sub");
                if (null !== this.sub) for (var s = 0, o = this.sub.length; s < o; ++s) n.appendChild(this.sub[s].toDOM());
                return g.appendChild(n), t.onclick = function () {
                    g.className = "node collapsed" == g.className ? "node" : "node collapsed"
                }, g
            }, C.prototype.posStart = function () {
                return this.stream.pos
            }, C.prototype.posContent = function () {
                return this.stream.pos + this.header
            }, C.prototype.posEnd = function () {
                return this.stream.pos + this.header + Math.abs(this.length)
            }, C.prototype.fakeHover = function (g) {
                this.node.className += " hover", g && (this.head.className += " hover")
            }, C.prototype.fakeOut = function (g) {
                var t = / ?hover/;
                this.node.className = this.node.className.replace(t, ""), g && (this.head.className = this.head.className.replace(t, ""))
            }, C.prototype.toHexDOM_sub = function (g, t, C, I, e) {
                if (!(I >= e)) {
                    var r = A.tag("span", t);
                    r.appendChild(A.text(C.hexDump(I, e))), g.appendChild(r)
                }
            }, C.prototype.toHexDOM = function (g) {
                var t = A.tag("span", "hex");
                if (void 0 === g && (g = t), this.head.hexNode = t, this.head.onmouseover = function () {
                    this.hexNode.className = "hexCurrent"
                }, this.head.onmouseout = function () {
                    this.hexNode.className = "hex"
                }, t.asn1 = this, t.onmouseover = function () {
                    var t = !g.selected;
                    t && (g.selected = this.asn1, this.className = "hexCurrent"), this.asn1.fakeHover(t)
                }, t.onmouseout = function () {
                    var t = g.selected == this.asn1;
                    this.asn1.fakeOut(t), t && (g.selected = null, this.className = "hex")
                }, this.toHexDOM_sub(t, "tag", this.stream, this.posStart(), this.posStart() + 1), this.toHexDOM_sub(t, this.length >= 0 ? "dlen" : "ulen", this.stream, this.posStart() + 1, this.posContent()), null === this.sub) t.appendChild(A.text(this.stream.hexDump(this.posContent(), this.posEnd()))); else if (this.sub.length > 0) {
                    var C = this.sub[0], I = this.sub[this.sub.length - 1];
                    this.toHexDOM_sub(t, "intro", this.stream, this.posContent(), C.posStart());
                    for (var e = 0, r = this.sub.length; e < r; ++e) t.appendChild(this.sub[e].toHexDOM(g));
                    this.toHexDOM_sub(t, "outro", this.stream, I.posEnd(), this.posEnd())
                }
                return t
            }, C.prototype.toHexString = function (g) {
                return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
            }, C.decodeLength = function (g) {
                var t = g.get(), A = 127 & t;
                if (A == t) return A;
                if (A > 3) throw "Length over 24 bits not supported at position " + (g.pos - 1);
                if (0 === A) return -1;
                t = 0;
                for (var C = 0; C < A; ++C) t = t << 8 | g.get();
                return t
            }, C.hasContent = function (g, A, I) {
                if (32 & g) return !0;
                if (g < 3 || g > 4) return !1;
                var e = new t(I);
                if (3 == g && e.get(), e.get() >> 6 & 1) return !1;
                try {
                    var r = C.decodeLength(e);
                    return e.pos - I.pos + r == A
                } catch (g) {
                    return !1
                }
            }, C.decode = function (g) {
                g instanceof t || (g = new t(g, 0));
                var A = new t(g), I = g.get(), e = C.decodeLength(g), r = g.pos - A.pos, i = null;
                if (C.hasContent(I, e, g)) {
                    var n = g.pos;
                    if (3 == I && g.get(), i = [], e >= 0) {
                        for (var s = n + e; g.pos < s;) i[i.length] = C.decode(g);
                        if (g.pos != s) throw "Content size is not correct for container starting at offset " + n
                    } else try {
                        for (; ;) {
                            var o = C.decode(g);
                            if (0 === o.tag) break;
                            i[i.length] = o
                        }
                        e = n - g.pos
                    } catch (g) {
                        throw "Exception while decoding undefined length content: " + g
                    }
                } else g.pos += e;
                return new C(A, r, e, I, i)
            }, C.test = function () {
                for (var g = [{ value: [39], expected: 39 }, {
                    value: [129, 201],
                    expected: 201
                }, { value: [131, 254, 220, 186], expected: 16702650 }], A = 0, I = g.length; A < I; ++A) {
                    var e = new t(g[A].value, 0), r = C.decodeLength(e);
                    r != g[A].expected && document.write("In test[" + A + "] expected " + g[A].expected + " got " + r + "\n")
                }
            }, g.ASN1 = C
        }(_global_), _global_.ASN1.prototype.getHexStringValue = function () {
            var g = this.toHexString(), t = 2 * this.header, A = 2 * this.length;
            return g.substr(t, A)
        }, b.prototype.parseKey = function (g) {
            try {
                var t, A = 0, C = 0,
                    I = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(g) ? _global_.UnionHex.decode(g) : _global_.UnionBase64.unarmor(g);
                try {
                    t = _global_.ASN1.decode(I)
                } catch (t) {
                    return this.e = 65537, this.n = y("00" + g, 16), !0
                }
                if (3 === t.sub.length && (t = t.sub[2].sub[0]), 9 === t.sub.length) {
                    A = t.sub[1].getHexStringValue(), this.n = y(A, 16), C = t.sub[2].getHexStringValue(), this.e = parseInt(C, 16);
                    var e = t.sub[3].getHexStringValue();
                    this.d = y(e, 16);
                    var r = t.sub[4].getHexStringValue();
                    this.p = y(r, 16);
                    var i = t.sub[5].getHexStringValue();
                    this.q = y(i, 16);
                    var n = t.sub[6].getHexStringValue();
                    this.dmp1 = y(n, 16);
                    var s = t.sub[7].getHexStringValue();
                    this.dmq1 = y(s, 16);
                    var o = t.sub[8].getHexStringValue();
                    this.coeff = y(o, 16)
                } else {
                    if (2 !== t.sub.length) return !1;
                    A = t.sub[0].getHexStringValue(), this.n = y(A, 16), C = t.sub[1].getHexStringValue(), this.e = parseInt(C, 16)
                }
                return !0
            } catch (g) {
                return !1
            }
        }, b.prototype.getPrivateBaseKey = function () {
            var g = { array: [new KJUR.asn1.DERInteger({ int: 0 }), new KJUR.asn1.DERInteger({ bigint: this.n }), new KJUR.asn1.DERInteger({ int: this.e }), new KJUR.asn1.DERInteger({ bigint: this.d }), new KJUR.asn1.DERInteger({ bigint: this.p }), new KJUR.asn1.DERInteger({ bigint: this.q }), new KJUR.asn1.DERInteger({ bigint: this.dmp1 }), new KJUR.asn1.DERInteger({ bigint: this.dmq1 }), new KJUR.asn1.DERInteger({ bigint: this.coeff })] };
            return new KJUR.asn1.DERSequence(g).getEncodedHex()
        }, b.prototype.getPrivateBaseKeyB64 = function () {
            return S(this.getPrivateBaseKey())
        }, b.prototype.getPublicBaseKey = function () {
            var g = { array: [new KJUR.asn1.DERObjectIdentifier({ oid: "1.2.840.113549.1.1.1" }), new KJUR.asn1.DERNull] },
                t = new KJUR.asn1.DERSequence(g);
            return g = { array: [new KJUR.asn1.DERInteger({ bigint: this.n }), new KJUR.asn1.DERInteger({ int: this.e })] }, g = { hex: "00" + new KJUR.asn1.DERSequence(g).getEncodedHex() }, g = { array: [t, new KJUR.asn1.DERBitString(g)] }, new KJUR.asn1.DERSequence(g).getEncodedHex()
        }, b.prototype.getPublicBaseKeyB64 = function () {
            return S(this.getPublicBaseKey())
        }, b.prototype.wordwrap = function (g, t) {
            if (t = t || 64, !g) return g;
            var A = "(.{1," + t + "})( +|$\n?)|(.{1," + t + "})";
            return g.match(RegExp(A, "g")).join("\n")
        }, b.prototype.getPrivateKey = function () {
            var g = "-----BEGIN RSA PRIVATE KEY-----\n";
            return g += this.wordwrap(this.getPrivateBaseKeyB64()) + "\n", g += "-----END RSA PRIVATE KEY-----"
        }, b.prototype.getPublicKey = function () {
            var g = "-----BEGIN PUBLIC KEY-----\n";
            return g += this.wordwrap(this.getPublicBaseKeyB64()) + "\n", g += "-----END PUBLIC KEY-----"
        }, b.prototype.hasPublicKeyProperty = function (g) {
            return (g = g || {}).hasOwnProperty("n") && g.hasOwnProperty("e")
        }, b.prototype.hasPrivateKeyProperty = function (g) {
            return (g = g || {}).hasOwnProperty("n") && g.hasOwnProperty("e") && g.hasOwnProperty("d") && g.hasOwnProperty("p") && g.hasOwnProperty("q") && g.hasOwnProperty("dmp1") && g.hasOwnProperty("dmq1") && g.hasOwnProperty("coeff")
        }, b.prototype.parsePropertiesFrom = function (g) {
            this.n = g.n, this.e = g.e, g.hasOwnProperty("d") && (this.d = g.d, this.p = g.p, this.q = g.q, this.dmp1 = g.dmp1, this.dmq1 = g.dmq1, this.coeff = g.coeff)
        };
        var z = function (g) {
            b.call(this), g && ("string" == typeof g ? this.parseKey(g) : (this.hasPrivateKeyProperty(g) || this.hasPublicKeyProperty(g)) && this.parsePropertiesFrom(g))
        };
        (z.prototype = new b).constructor = z;
        var G = function (g) {
            g = g || {}, this.default_key_size = parseInt(g.default_key_size) || 1024, this.default_public_exponent = g.default_public_exponent || "010001", this.log = g.log || !1, this.key = null
        };
        G.prototype.setKey = function (g) {
            this.log && this.key && console.warn("A key was already set, overriding existing."), this.key = new z(g)
        }, G.prototype.setPrivateKey = function (g) {
            this.setKey(g)
        }, G.prototype.setPublicKey = function (g) {
            this.setKey(g)
        }, G.prototype.decrypt = function (g) {
            try {
                return this.getKey().decrypt(g)
            } catch (g) {
                return !1
            }
        }, G.prototype.encrypt = function (g) {
            try {
                return this.getKey().encrypt(g)
            } catch (g) {
                return !1
            }
        }, G.prototype.getKey = function (g) {
            if (!this.key) {
                if (this.key = new z, g && "[object Function]" === {}.toString.call(g)) return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, g);
                this.key.generate(this.default_key_size, this.default_public_exponent)
            }
            return this.key
        }, G.prototype.getPrivateKey = function () {
            return this.getKey().getPrivateKey()
        }, G.prototype.getPrivateKeyB64 = function () {
            return this.getKey().getPrivateBaseKeyB64()
        }, G.prototype.getPublicKey = function () {
            return this.getKey().getPublicKey()
        }, G.prototype.getPublicKeyB64 = function () {
            return this.getKey().getPublicBaseKeyB64()
        }, G.version = "2.3.1", g.JSEncrypt = G
    }(_global_), function () {
        var g = x, t = x.algorithm, A = (x.util.Checker, x.util.Hex);
        x.util.UTF8, x.util.Helper, t.RSA = {
            DEFAULT_PUBLIC_EXPONENT: 65537,
            generate: function (g, t) {
                var C = new _global_.JSEncrypt({ default_key_size: g, default_public_exponent: t }).getKey();
                return { publicKey: A.parse(C.getPublicBaseKey()), privateKey: A.parse(C.getPrivateBaseKey()) }
            },
            encrypt: function (g, t) {
                var C = new _global_.JSEncrypt;
                return C.setPublicKey(A.stringify(t)), A.parse(C.encrypt(g))
            },
            decrypt: function (g, t) {
                var C = new _global_.JSEncrypt;
                return C.setPrivateKey(A.stringify(t)), C.decrypt(A.stringify(g))
            },
            _sign: function (g, t) {
                var C = new _global_.JSEncrypt;
                C.setPrivateKey(A.stringify(t));
                var I = C.getKey().sign(g);
                return A.parse(I)
            },
            _verify: function (g, t, C) {
                var I = new _global_.JSEncrypt;
                return I.setPublicKey(A.stringify(C)), I.getKey().verify(A.stringify(g), t)
            },
            sign: function (C, I, e) {
                if (e.name === g.Hasher.NONE.name) return this._sign(C, I);
                var r = t[e.name].digest(C), i = A.parse(e.DER_OID).concat(r);
                return this._sign(i, I)
            },
            verify: function (C, I, e, r) {
                if (r.name === g.Hasher.NONE.name) return this._verify(C, I, e);
                var i = t[r.name].digest(I), n = A.parse(r.DER_OID).concat(i);
                return this._verify(C, n, e)
            },
            testKeypair: {
                publicKey: "308189028181009F43B5203FB2A2E20E97D1A985AA3D86F66274922304E9ED6698BA94B7903AD7F3741EDE9078DF3EBA27FCD1A38F9B608499A7E5CD3EF6FC658BAA231028B40033F3A11AB0B286541CA385B758D4C87D052216B14547B28265AC3243549378ECAAA5CEEAA7CB38DA2F78C3D6634A3BEA1745923E452E3C4ABA0D967D67DCABD50203010001",
                privateKey: "3082025D020100028181009F43B5203FB2A2E20E97D1A985AA3D86F66274922304E9ED6698BA94B7903AD7F3741EDE9078DF3EBA27FCD1A38F9B608499A7E5CD3EF6FC658BAA231028B40033F3A11AB0B286541CA385B758D4C87D052216B14547B28265AC3243549378ECAAA5CEEAA7CB38DA2F78C3D6634A3BEA1745923E452E3C4ABA0D967D67DCABD502030100010281806B37D1C01C21CEB610CCF44103D3500883E65443ED7F695C812D60AEADC55357FE75B6326F60702A7278692358D15CF0E553EC4C3098AAFDCFFEEE531C95CA5728B4CA81F25CF1B88E476F246882BD311DAD00463DEBAE2F0275F1C4538E9216DB70A19DC78DFE875E7EFE35EBFCFB459DFF9EA821A20178C5FE3EC53571BA21024100CE0D43DDE1383EA9827EF3A5F684573F58FAAE294693A48DC56B77489E0A3E86DE74BDE3D43A684C6F15AB21E5ED2B781CBD880246EA99F2A960079AA715AD13024100C5DF02E9ECAE7A3B268377372BC6EAA67838DFAB6C497FDA1216EDCB7962B6D0AB0D33AA13233B19ACDAB0CA86A165A7B96BF9D995643FA431F74A423650E87702410092D2FAF820E2FE2BB57416D3BCCC628B1E314A66D9069DABF3EFF6C884ECD1CF32B6C7149006AA89446291560F4BA7BCE7E5DA039D5AD0260CB103DA1C932287024100BD0E14019F6321644CAB0587D02AF15DF6B61876F832CD9674FC355DD8EFC94E5C7073B187317D314DE7714D400F0B4A92AE28FD8C7049223F9F4FF32D646687024003D59FD40D99C7A67E33836DB66A933432CBBC34D958BA7E233672EBA6174E7AAEC3AF2821A899A667CBBD48283C7BB59BBF77C8A8232CD9F0F17DBDC2629118"
            }
        }
    }(), function () {
        var g = x.util, t = g.Hex, A = g.Helper, C = g.Checker, I = "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF";
        g.PinPadding = {
            padWithMode2: function (g) {
                C.checkArgument(C.checkOnlyPrintChar(g), "illegal PIN: has illegal character.");
                var t = new Array(32);
                g.length < 16 ? (t[0] = (g.length >>> 4 & 255).toString(16).toUpperCase().charCodeAt(0), t[1] = (255 & g.length).toString(16).toUpperCase().charCodeAt(0)) : (t[0] = (255 & g.length).toString(16).toUpperCase().charCodeAt(0), t[1] = (255 & g.length).toString(16).toUpperCase().charCodeAt(1));
                for (var A = 0, I = g.length; A < I; A++) t[A + 2] = g.charCodeAt(A);
                for (A = g.length + 2; A < 32; A++) t[A] = 70;
                return t
            }, padWithXOR: function (g) {
                C.checkArgument(C.checkOnlyPrintChar(g), "illegal PIN: has illegal character.");
                var t = new Array(g.length + 2);
                g.length < 16 ? (t[0] = (g.length >>> 4 & 255).toString(16).toUpperCase().charCodeAt(0), t[1] = (255 & g.length).toString(16).toUpperCase().charCodeAt(0)) : (t[0] = (255 & g.length).toString(16).toUpperCase().charCodeAt(0), t[1] = (255 & g.length).toString(16).toUpperCase().charCodeAt(1));
                for (var I = A.getRandom(g.length), e = 0, r = g.length; e < r; e++) t[e + 2] = g.charCodeAt(e) ^ I[e];
                return t.concat(I)
            }
        }
    }(), function () {
        var g = x, t = x.util.Helper, A = x.util.Hex, C = x.algorithm.RSA, I = x.algorithm.DES, e = x.algorithm.SM2,
            r = x.algorithm.SM3, i = x.util.PinPadding, n = x.util.DataPadding, s = x.algorithm.SHA384,
            o = g.Keyboard = function (g, t, A) {
                var maxH = 260;
                this.maxlen = g || 12, this.random = t || !1, this.plainText = A || !1, this.$password = new Array, this.length = 0, this.isPC = h(), this.isOpenKeyboardTitle = !0, this.opacity = "0.5", this.config = {
                    blockPrevention: !0,
                    openSymbolKeyboard: !1,
                    showLogoInTitle: !1,
                    showLogoInSpace: !1,
                    showNumberWithSymbol: !0,
                    global: { height: maxH, width: 1 / 1 * 100 + "%" },
                    maxH: maxH,
                    title: {
                        fontSize: 22,
                        logo: "../img/logo.png",
                        color: "#343434",
                        text: "安全键盘，为您护航",
                        col: .01 * 375,
                        row: .01 * maxH
                    },
                    number: { fontSize: 22, col: 0, row: 0 },
                    letter: { fontSize: 20, col: .01 * 375, row: .01 * maxH },
                    images: {
                        logo: "",
                        deleteIco: "",
                        shift: ""
                    }
                }
            }, a = function (g) {
                return document.getElementById(g)
            }, h = function () {
                for (var g = '', t = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], A = !0, C = 0; C < t.length; C++) if (g.indexOf(t[C]) > 0) {
                    A = !1;
                    break
                }
                return A
            };
        o.prototype.config = function (g) {
            this.config = g
        }, o.prototype.bind = function (g, t) {
            this.onlyNumber = t || !1, this.inputInstance = g, this.onlyNumber && (this.maxlen = 6), a(g).setAttribute("readOnly", "true"), this.showKeyboards()
        }, o.prototype.setRegex = function (g) {
            this.regex = g
        }, o.prototype.onInput = function (g) {
            this.inputEvent = g
        }, o.prototype.onDelete = function (g) {
            this.deleteEvent = g
        }, o.prototype.onSure = function (g) {
            this.sureEvent = g
        }, o.prototype.onShow = function (g) {
            this.showEvent = g
        }, o.prototype.onHide = function (g) {
            this.hideEvent = g
        }, o.prototype.close = function () {
            E(this)
        }, o.prototype.clear = function () {
            this.password = new Array, this.length = 0
        }, o.prototype.match = function () {
            var g = f(this);
            return this.regex.test(g)
        }, o.prototype.getUUID = function () {
            var g = f(this);
            if (!g) return "";
            for (var t = new Array, C = 0; C < g.length; C++) t[C] = 83 ^ g.charCodeAt(C) ^ 255 & C;
            return A.stringify(r.hmac(A.parse("F47809E612CD9899FA2FCDEEBBB7E3B5"), t))
        }, o.prototype.hashCode = function () {
            var g = f(this);
            return g ? A.stringify(s.digest(t.ascstr2array(g))) : ""
        }, o.prototype.passwordStrength = function () {
            var g = function (g) {
                for (var t = g.length - 1; t >= 0; t--) if (g[t] <= "9" && g[t] >= "0") return 1;
                return 0
            }, t = function (g) {
                for (var t = g.length - 1; t >= 0; t--) if (g[t] >= "A" && g <= "Z" || g[t] >= "a" && g[t] <= "z") return 1;
                return 0
            }, A = f(this);
            if (0 === A.length) return 0;
            if (A.length <= 5) return 1;
            var C = g(A) + function (A) {
                for (var C = A.length - 1; C >= 0; C--) if (!g(A[C]) && !t(A[C])) return 1;
                return 0
            }(A) + t(A);
            return 6 === A.length && 1 === C && 1 === g(A) ? 5 : A.length >= 6 && 2 === C && 1 === g(A) && 1 == t(A) ? 6 : 1 === C ? 2 : 2 === C ? 3 : 3 === C ? 4 : 0
        }, o.prototype.containNumber = function () {
            for (var g = f(this), t = g.length - 1; t >= 0; t--) if (g[t] <= "9" && g[t] >= "0") return 1;
            return 0
        }, o.prototype.containUpCaseLetter = function () {
            for (var g = f(this), t = g.length - 1; t >= 0; t--) if (g[t] >= "A" && g[t] <= "Z") return 1;
            return 0
        }, o.prototype.containLowCaseLetter = function () {
            for (var g = f(this), t = g.length - 1; t >= 0; t--) if (g[t] >= "a" && g[t] <= "z") return 1;
            return 0
        }, o.prototype.containSymbol = function () {
            for (var g = f(this), t = g.length - 1; t >= 0; t--) if (!this.containNumber(g[t]) && !this.containUpCaseLetter(g[t]) && !this.containLowCaseLetter(g[t])) return 1;
            return 0
        }, o.prototype.getCipherWithSM2 = function (g, t, text) {
            var C = {
                success: !1,
                isXOR: t,
                passwordType: this.onlyNumber ? "trade pin" : "login pin",
                algorithm: "SM2",
                publicKey: g,
                ciphertext: "",
                remark: ""
            }, I = text || f(this);
            if (0 === I.length) return C.remark = "password is empty", C;
            if (e) {
                var r = t ? i.padWithXOR(I) : i.padWithMode2(I), n = e.encrypt(r, A.parse(g));
                if (n.length > 96) return C.success = !0, C.ciphertext = A.stringify(n), C
            }

            return C.remark = "RSA algorithm is undefined.", C
        };
    }(), x
});
