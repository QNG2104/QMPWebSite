(function() {
    const a = document.createElement("link").relList;
    if (a && a.supports && a.supports("modulepreload")) return;
    for (const c of document.querySelectorAll('link[rel="modulepreload"]')) f(c);
    new MutationObserver(c => {
        for (const p of c)
            if (p.type === "childList")
                for (const w of p.addedNodes) w.tagName === "LINK" && w.rel === "modulepreload" && f(w)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function s(c) {
        const p = {};
        return c.integrity && (p.integrity = c.integrity), c.referrerPolicy && (p.referrerPolicy = c.referrerPolicy), c.crossOrigin === "use-credentials" ? p.credentials = "include" : c.crossOrigin === "anonymous" ? p.credentials = "omit" : p.credentials = "same-origin", p
    }

    function f(c) {
        if (c.ep) return;
        c.ep = !0;
        const p = s(c);
        fetch(c.href, p)
    }
})();

function Yc(i) {
    return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i
}
var gu = {
        exports: {}
    },
    Yr = {},
    yu = {
        exports: {}
    },
    ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kc;

function d0() {
    if (kc) return ce;
    kc = 1;
    var i = Symbol.for("react.element"),
        a = Symbol.for("react.portal"),
        s = Symbol.for("react.fragment"),
        f = Symbol.for("react.strict_mode"),
        c = Symbol.for("react.profiler"),
        p = Symbol.for("react.provider"),
        w = Symbol.for("react.context"),
        C = Symbol.for("react.forward_ref"),
        x = Symbol.for("react.suspense"),
        S = Symbol.for("react.memo"),
        T = Symbol.for("react.lazy"),
        j = Symbol.iterator;

    function R(v) {
        return v === null || typeof v != "object" ? null : (v = j && v[j] || v["@@iterator"], typeof v == "function" ? v : null)
    }
    var I = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        z = Object.assign,
        A = {};

    function F(v, P, re) {
        this.props = v, this.context = P, this.refs = A, this.updater = re || I
    }
    F.prototype.isReactComponent = {}, F.prototype.setState = function(v, P) {
        if (typeof v != "object" && typeof v != "function" && v != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, v, P, "setState")
    }, F.prototype.forceUpdate = function(v) {
        this.updater.enqueueForceUpdate(this, v, "forceUpdate")
    };

    function U() {}
    U.prototype = F.prototype;

    function q(v, P, re) {
        this.props = v, this.context = P, this.refs = A, this.updater = re || I
    }
    var Y = q.prototype = new U;
    Y.constructor = q, z(Y, F.prototype), Y.isPureReactComponent = !0;
    var ee = Array.isArray,
        se = Object.prototype.hasOwnProperty,
        de = {
            current: null
        },
        fe = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function we(v, P, re) {
        var te, ie = {},
            ae = null,
            he = null;
        if (P != null)
            for (te in P.ref !== void 0 && (he = P.ref), P.key !== void 0 && (ae = "" + P.key), P) se.call(P, te) && !fe.hasOwnProperty(te) && (ie[te] = P[te]);
        var ve = arguments.length - 2;
        if (ve === 1) ie.children = re;
        else if (1 < ve) {
            for (var xe = Array(ve), $e = 0; $e < ve; $e++) xe[$e] = arguments[$e + 2];
            ie.children = xe
        }
        if (v && v.defaultProps)
            for (te in ve = v.defaultProps, ve) ie[te] === void 0 && (ie[te] = ve[te]);
        return {
            $$typeof: i,
            type: v,
            key: ae,
            ref: he,
            props: ie,
            _owner: de.current
        }
    }

    function W(v, P) {
        return {
            $$typeof: i,
            type: v.type,
            key: P,
            ref: v.ref,
            props: v.props,
            _owner: v._owner
        }
    }

    function ye(v) {
        return typeof v == "object" && v !== null && v.$$typeof === i
    }

    function Ae(v) {
        var P = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + v.replace(/[=:]/g, function(re) {
            return P[re]
        })
    }
    var ze = /\/+/g;

    function Re(v, P) {
        return typeof v == "object" && v !== null && v.key != null ? Ae("" + v.key) : P.toString(36)
    }

    function Ne(v, P, re, te, ie) {
        var ae = typeof v;
        (ae === "undefined" || ae === "boolean") && (v = null);
        var he = !1;
        if (v === null) he = !0;
        else switch (ae) {
            case "string":
            case "number":
                he = !0;
                break;
            case "object":
                switch (v.$$typeof) {
                    case i:
                    case a:
                        he = !0
                }
        }
        if (he) return he = v, ie = ie(he), v = te === "" ? "." + Re(he, 0) : te, ee(ie) ? (re = "", v != null && (re = v.replace(ze, "$&/") + "/"), Ne(ie, P, re, "", function($e) {
            return $e
        })) : ie != null && (ye(ie) && (ie = W(ie, re + (!ie.key || he && he.key === ie.key ? "" : ("" + ie.key).replace(ze, "$&/") + "/") + v)), P.push(ie)), 1;
        if (he = 0, te = te === "" ? "." : te + ":", ee(v))
            for (var ve = 0; ve < v.length; ve++) {
                ae = v[ve];
                var xe = te + Re(ae, ve);
                he += Ne(ae, P, re, xe, ie)
            } else if (xe = R(v), typeof xe == "function")
                for (v = xe.call(v), ve = 0; !(ae = v.next()).done;) ae = ae.value, xe = te + Re(ae, ve++), he += Ne(ae, P, re, xe, ie);
            else if (ae === "object") throw P = String(v), Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.");
        return he
    }

    function Oe(v, P, re) {
        if (v == null) return v;
        var te = [],
            ie = 0;
        return Ne(v, te, "", "", function(ae) {
            return P.call(re, ae, ie++)
        }), te
    }

    function Ee(v) {
        if (v._status === -1) {
            var P = v._result;
            P = P(), P.then(function(re) {
                (v._status === 0 || v._status === -1) && (v._status = 1, v._result = re)
            }, function(re) {
                (v._status === 0 || v._status === -1) && (v._status = 2, v._result = re)
            }), v._status === -1 && (v._status = 0, v._result = P)
        }
        if (v._status === 1) return v._result.default;
        throw v._result
    }
    var pe = {
            current: null
        },
        M = {
            transition: null
        },
        Z = {
            ReactCurrentDispatcher: pe,
            ReactCurrentBatchConfig: M,
            ReactCurrentOwner: de
        };

    function $() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return ce.Children = {
        map: Oe,
        forEach: function(v, P, re) {
            Oe(v, function() {
                P.apply(this, arguments)
            }, re)
        },
        count: function(v) {
            var P = 0;
            return Oe(v, function() {
                P++
            }), P
        },
        toArray: function(v) {
            return Oe(v, function(P) {
                return P
            }) || []
        },
        only: function(v) {
            if (!ye(v)) throw Error("React.Children.only expected to receive a single React element child.");
            return v
        }
    }, ce.Component = F, ce.Fragment = s, ce.Profiler = c, ce.PureComponent = q, ce.StrictMode = f, ce.Suspense = x, ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z, ce.act = $, ce.cloneElement = function(v, P, re) {
        if (v == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + v + ".");
        var te = z({}, v.props),
            ie = v.key,
            ae = v.ref,
            he = v._owner;
        if (P != null) {
            if (P.ref !== void 0 && (ae = P.ref, he = de.current), P.key !== void 0 && (ie = "" + P.key), v.type && v.type.defaultProps) var ve = v.type.defaultProps;
            for (xe in P) se.call(P, xe) && !fe.hasOwnProperty(xe) && (te[xe] = P[xe] === void 0 && ve !== void 0 ? ve[xe] : P[xe])
        }
        var xe = arguments.length - 2;
        if (xe === 1) te.children = re;
        else if (1 < xe) {
            ve = Array(xe);
            for (var $e = 0; $e < xe; $e++) ve[$e] = arguments[$e + 2];
            te.children = ve
        }
        return {
            $$typeof: i,
            type: v.type,
            key: ie,
            ref: ae,
            props: te,
            _owner: he
        }
    }, ce.createContext = function(v) {
        return v = {
            $$typeof: w,
            _currentValue: v,
            _currentValue2: v,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, v.Provider = {
            $$typeof: p,
            _context: v
        }, v.Consumer = v
    }, ce.createElement = we, ce.createFactory = function(v) {
        var P = we.bind(null, v);
        return P.type = v, P
    }, ce.createRef = function() {
        return {
            current: null
        }
    }, ce.forwardRef = function(v) {
        return {
            $$typeof: C,
            render: v
        }
    }, ce.isValidElement = ye, ce.lazy = function(v) {
        return {
            $$typeof: T,
            _payload: {
                _status: -1,
                _result: v
            },
            _init: Ee
        }
    }, ce.memo = function(v, P) {
        return {
            $$typeof: S,
            type: v,
            compare: P === void 0 ? null : P
        }
    }, ce.startTransition = function(v) {
        var P = M.transition;
        M.transition = {};
        try {
            v()
        } finally {
            M.transition = P
        }
    }, ce.unstable_act = $, ce.useCallback = function(v, P) {
        return pe.current.useCallback(v, P)
    }, ce.useContext = function(v) {
        return pe.current.useContext(v)
    }, ce.useDebugValue = function() {}, ce.useDeferredValue = function(v) {
        return pe.current.useDeferredValue(v)
    }, ce.useEffect = function(v, P) {
        return pe.current.useEffect(v, P)
    }, ce.useId = function() {
        return pe.current.useId()
    }, ce.useImperativeHandle = function(v, P, re) {
        return pe.current.useImperativeHandle(v, P, re)
    }, ce.useInsertionEffect = function(v, P) {
        return pe.current.useInsertionEffect(v, P)
    }, ce.useLayoutEffect = function(v, P) {
        return pe.current.useLayoutEffect(v, P)
    }, ce.useMemo = function(v, P) {
        return pe.current.useMemo(v, P)
    }, ce.useReducer = function(v, P, re) {
        return pe.current.useReducer(v, P, re)
    }, ce.useRef = function(v) {
        return pe.current.useRef(v)
    }, ce.useState = function(v) {
        return pe.current.useState(v)
    }, ce.useSyncExternalStore = function(v, P, re) {
        return pe.current.useSyncExternalStore(v, P, re)
    }, ce.useTransition = function() {
        return pe.current.useTransition()
    }, ce.version = "18.3.1", ce
}
var Ec;

function Mu() {
    return Ec || (Ec = 1, yu.exports = d0()), yu.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cc;

function p0() {
    if (Cc) return Yr;
    Cc = 1;
    var i = Mu(),
        a = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        f = Object.prototype.hasOwnProperty,
        c = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        p = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function w(C, x, S) {
        var T, j = {},
            R = null,
            I = null;
        S !== void 0 && (R = "" + S), x.key !== void 0 && (R = "" + x.key), x.ref !== void 0 && (I = x.ref);
        for (T in x) f.call(x, T) && !p.hasOwnProperty(T) && (j[T] = x[T]);
        if (C && C.defaultProps)
            for (T in x = C.defaultProps, x) j[T] === void 0 && (j[T] = x[T]);
        return {
            $$typeof: a,
            type: C,
            key: R,
            ref: I,
            props: j,
            _owner: c.current
        }
    }
    return Yr.Fragment = s, Yr.jsx = w, Yr.jsxs = w, Yr
}
var Lc;

function h0() {
    return Lc || (Lc = 1, gu.exports = p0()), gu.exports
}
var g = h0(),
    N = Mu();
const Vt = Yc(N);
var go = {},
    wu = {
        exports: {}
    },
    ot = {},
    xu = {
        exports: {}
    },
    Su = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nc;

function m0() {
    return Nc || (Nc = 1, function(i) {
        function a(M, Z) {
            var $ = M.length;
            M.push(Z);
            e: for (; 0 < $;) {
                var v = $ - 1 >>> 1,
                    P = M[v];
                if (0 < c(P, Z)) M[v] = Z, M[$] = P, $ = v;
                else break e
            }
        }

        function s(M) {
            return M.length === 0 ? null : M[0]
        }

        function f(M) {
            if (M.length === 0) return null;
            var Z = M[0],
                $ = M.pop();
            if ($ !== Z) {
                M[0] = $;
                e: for (var v = 0, P = M.length, re = P >>> 1; v < re;) {
                    var te = 2 * (v + 1) - 1,
                        ie = M[te],
                        ae = te + 1,
                        he = M[ae];
                    if (0 > c(ie, $)) ae < P && 0 > c(he, ie) ? (M[v] = he, M[ae] = $, v = ae) : (M[v] = ie, M[te] = $, v = te);
                    else if (ae < P && 0 > c(he, $)) M[v] = he, M[ae] = $, v = ae;
                    else break e
                }
            }
            return Z
        }

        function c(M, Z) {
            var $ = M.sortIndex - Z.sortIndex;
            return $ !== 0 ? $ : M.id - Z.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var p = performance;
            i.unstable_now = function() {
                return p.now()
            }
        } else {
            var w = Date,
                C = w.now();
            i.unstable_now = function() {
                return w.now() - C
            }
        }
        var x = [],
            S = [],
            T = 1,
            j = null,
            R = 3,
            I = !1,
            z = !1,
            A = !1,
            F = typeof setTimeout == "function" ? setTimeout : null,
            U = typeof clearTimeout == "function" ? clearTimeout : null,
            q = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

        function Y(M) {
            for (var Z = s(S); Z !== null;) {
                if (Z.callback === null) f(S);
                else if (Z.startTime <= M) f(S), Z.sortIndex = Z.expirationTime, a(x, Z);
                else break;
                Z = s(S)
            }
        }

        function ee(M) {
            if (A = !1, Y(M), !z)
                if (s(x) !== null) z = !0, Ee(se);
                else {
                    var Z = s(S);
                    Z !== null && pe(ee, Z.startTime - M)
                }
        }

        function se(M, Z) {
            z = !1, A && (A = !1, U(we), we = -1), I = !0;
            var $ = R;
            try {
                for (Y(Z), j = s(x); j !== null && (!(j.expirationTime > Z) || M && !Ae());) {
                    var v = j.callback;
                    if (typeof v == "function") {
                        j.callback = null, R = j.priorityLevel;
                        var P = v(j.expirationTime <= Z);
                        Z = i.unstable_now(), typeof P == "function" ? j.callback = P : j === s(x) && f(x), Y(Z)
                    } else f(x);
                    j = s(x)
                }
                if (j !== null) var re = !0;
                else {
                    var te = s(S);
                    te !== null && pe(ee, te.startTime - Z), re = !1
                }
                return re
            } finally {
                j = null, R = $, I = !1
            }
        }
        var de = !1,
            fe = null,
            we = -1,
            W = 5,
            ye = -1;

        function Ae() {
            return !(i.unstable_now() - ye < W)
        }

        function ze() {
            if (fe !== null) {
                var M = i.unstable_now();
                ye = M;
                var Z = !0;
                try {
                    Z = fe(!0, M)
                } finally {
                    Z ? Re() : (de = !1, fe = null)
                }
            } else de = !1
        }
        var Re;
        if (typeof q == "function") Re = function() {
            q(ze)
        };
        else if (typeof MessageChannel < "u") {
            var Ne = new MessageChannel,
                Oe = Ne.port2;
            Ne.port1.onmessage = ze, Re = function() {
                Oe.postMessage(null)
            }
        } else Re = function() {
            F(ze, 0)
        };

        function Ee(M) {
            fe = M, de || (de = !0, Re())
        }

        function pe(M, Z) {
            we = F(function() {
                M(i.unstable_now())
            }, Z)
        }
        i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(M) {
            M.callback = null
        }, i.unstable_continueExecution = function() {
            z || I || (z = !0, Ee(se))
        }, i.unstable_forceFrameRate = function(M) {
            0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < M ? Math.floor(1e3 / M) : 5
        }, i.unstable_getCurrentPriorityLevel = function() {
            return R
        }, i.unstable_getFirstCallbackNode = function() {
            return s(x)
        }, i.unstable_next = function(M) {
            switch (R) {
                case 1:
                case 2:
                case 3:
                    var Z = 3;
                    break;
                default:
                    Z = R
            }
            var $ = R;
            R = Z;
            try {
                return M()
            } finally {
                R = $
            }
        }, i.unstable_pauseExecution = function() {}, i.unstable_requestPaint = function() {}, i.unstable_runWithPriority = function(M, Z) {
            switch (M) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    M = 3
            }
            var $ = R;
            R = M;
            try {
                return Z()
            } finally {
                R = $
            }
        }, i.unstable_scheduleCallback = function(M, Z, $) {
            var v = i.unstable_now();
            switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? v + $ : v) : $ = v, M) {
                case 1:
                    var P = -1;
                    break;
                case 2:
                    P = 250;
                    break;
                case 5:
                    P = 1073741823;
                    break;
                case 4:
                    P = 1e4;
                    break;
                default:
                    P = 5e3
            }
            return P = $ + P, M = {
                id: T++,
                callback: Z,
                priorityLevel: M,
                startTime: $,
                expirationTime: P,
                sortIndex: -1
            }, $ > v ? (M.sortIndex = $, a(S, M), s(x) === null && M === s(S) && (A ? (U(we), we = -1) : A = !0, pe(ee, $ - v))) : (M.sortIndex = P, a(x, M), z || I || (z = !0, Ee(se))), M
        }, i.unstable_shouldYield = Ae, i.unstable_wrapCallback = function(M) {
            var Z = R;
            return function() {
                var $ = R;
                R = Z;
                try {
                    return M.apply(this, arguments)
                } finally {
                    R = $
                }
            }
        }
    }(Su)), Su
}
var Pc;

function v0() {
    return Pc || (Pc = 1, xu.exports = m0()), xu.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rc;

function g0() {
    if (Rc) return ot;
    Rc = 1;
    var i = Mu(),
        a = v0();

    function s(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var f = new Set,
        c = {};

    function p(e, t) {
        w(e, t), w(e + "Capture", t)
    }

    function w(e, t) {
        for (c[e] = t, e = 0; e < t.length; e++) f.add(t[e])
    }
    var C = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        x = Object.prototype.hasOwnProperty,
        S = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        T = {},
        j = {};

    function R(e) {
        return x.call(j, e) ? !0 : x.call(T, e) ? !1 : S.test(e) ? j[e] = !0 : (T[e] = !0, !1)
    }

    function I(e, t, n, r) {
        if (n !== null && n.type === 0) return !1;
        switch (typeof t) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
            default:
                return !1
        }
    }

    function z(e, t, n, r) {
        if (t === null || typeof t > "u" || I(e, t, n, r)) return !0;
        if (r) return !1;
        if (n !== null) switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
        }
        return !1
    }

    function A(e, t, n, r, l, o, u) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = u
    }
    var F = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        F[e] = new A(e, 0, !1, e, null, !1, !1)
    }), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach(function(e) {
        var t = e[0];
        F[t] = new A(t, 1, !1, e[1], null, !1, !1)
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
        F[e] = new A(e, 2, !1, e.toLowerCase(), null, !1, !1)
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
        F[e] = new A(e, 2, !1, e, null, !1, !1)
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        F[e] = new A(e, 3, !1, e.toLowerCase(), null, !1, !1)
    }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        F[e] = new A(e, 3, !0, e, null, !1, !1)
    }), ["capture", "download"].forEach(function(e) {
        F[e] = new A(e, 4, !1, e, null, !1, !1)
    }), ["cols", "rows", "size", "span"].forEach(function(e) {
        F[e] = new A(e, 6, !1, e, null, !1, !1)
    }), ["rowSpan", "start"].forEach(function(e) {
        F[e] = new A(e, 5, !1, e.toLowerCase(), null, !1, !1)
    });
    var U = /[\-:]([a-z])/g;

    function q(e) {
        return e[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(U, q);
        F[t] = new A(t, 1, !1, e, null, !1, !1)
    }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(U, q);
        F[t] = new A(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
    }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var t = e.replace(U, q);
        F[t] = new A(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
        F[e] = new A(e, 1, !1, e.toLowerCase(), null, !1, !1)
    }), F.xlinkHref = new A("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
        F[e] = new A(e, 1, !1, e.toLowerCase(), null, !0, !0)
    });

    function Y(e, t, n, r) {
        var l = F.hasOwnProperty(t) ? F[t] : null;
        (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (z(t, n, l, r) && (n = null), r || l === null ? R(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
    }
    var ee = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        se = Symbol.for("react.element"),
        de = Symbol.for("react.portal"),
        fe = Symbol.for("react.fragment"),
        we = Symbol.for("react.strict_mode"),
        W = Symbol.for("react.profiler"),
        ye = Symbol.for("react.provider"),
        Ae = Symbol.for("react.context"),
        ze = Symbol.for("react.forward_ref"),
        Re = Symbol.for("react.suspense"),
        Ne = Symbol.for("react.suspense_list"),
        Oe = Symbol.for("react.memo"),
        Ee = Symbol.for("react.lazy"),
        pe = Symbol.for("react.offscreen"),
        M = Symbol.iterator;

    function Z(e) {
        return e === null || typeof e != "object" ? null : (e = M && e[M] || e["@@iterator"], typeof e == "function" ? e : null)
    }
    var $ = Object.assign,
        v;

    function P(e) {
        if (v === void 0) try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            v = t && t[1] || ""
        }
        return `
` + v + e
    }
    var re = !1;

    function te(e, t) {
        if (!e || re) return "";
        re = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (t = function() {
                        throw Error()
                    }, Object.defineProperty(t.prototype, "props", {
                        set: function() {
                            throw Error()
                        }
                    }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(t, [])
                    } catch (L) {
                        var r = L
                    }
                    Reflect.construct(e, [], t)
                } else {
                    try {
                        t.call()
                    } catch (L) {
                        r = L
                    }
                    e.call(t.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (L) {
                    r = L
                }
                e()
            }
        } catch (L) {
            if (L && r && typeof L.stack == "string") {
                for (var l = L.stack.split(`
`), o = r.stack.split(`
`), u = l.length - 1, d = o.length - 1; 1 <= u && 0 <= d && l[u] !== o[d];) d--;
                for (; 1 <= u && 0 <= d; u--, d--)
                    if (l[u] !== o[d]) {
                        if (u !== 1 || d !== 1)
                            do
                                if (u--, d--, 0 > d || l[u] !== o[d]) {
                                    var m = `
` + l[u].replace(" at new ", " at ");
                                    return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), m
                                }
                        while (1 <= u && 0 <= d);
                        break
                    }
            }
        } finally {
            re = !1, Error.prepareStackTrace = n
        }
        return (e = e ? e.displayName || e.name : "") ? P(e) : ""
    }

    function ie(e) {
        switch (e.tag) {
            case 5:
                return P(e.type);
            case 16:
                return P("Lazy");
            case 13:
                return P("Suspense");
            case 19:
                return P("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = te(e.type, !1), e;
            case 11:
                return e = te(e.type.render, !1), e;
            case 1:
                return e = te(e.type, !0), e;
            default:
                return ""
        }
    }

    function ae(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case fe:
                return "Fragment";
            case de:
                return "Portal";
            case W:
                return "Profiler";
            case we:
                return "StrictMode";
            case Re:
                return "Suspense";
            case Ne:
                return "SuspenseList"
        }
        if (typeof e == "object") switch (e.$$typeof) {
            case Ae:
                return (e.displayName || "Context") + ".Consumer";
            case ye:
                return (e._context.displayName || "Context") + ".Provider";
            case ze:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case Oe:
                return t = e.displayName || null, t !== null ? t : ae(e.type) || "Memo";
            case Ee:
                t = e._payload, e = e._init;
                try {
                    return ae(e(t))
                } catch {}
        }
        return null
    }

    function he(e) {
        var t = e.type;
        switch (e.tag) {
            case 24:
                return "Cache";
            case 9:
                return (t.displayName || "Context") + ".Consumer";
            case 10:
                return (t._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
            case 7:
                return "Fragment";
            case 5:
                return t;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return ae(t);
            case 8:
                return t === we ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof t == "function") return t.displayName || t.name || null;
                if (typeof t == "string") return t
        }
        return null
    }

    function ve(e) {
        switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return ""
        }
    }

    function xe(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function $e(e) {
        var t = xe(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
            var l = n.get,
                o = n.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return l.call(this)
                },
                set: function(u) {
                    r = "" + u, o.call(this, u)
                }
            }), Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }), {
                getValue: function() {
                    return r
                },
                setValue: function(u) {
                    r = "" + u
                },
                stopTracking: function() {
                    e._valueTracker = null, delete e[t]
                }
            }
        }
    }

    function Tn(e) {
        e._valueTracker || (e._valueTracker = $e(e))
    }

    function rl(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
            r = "";
        return e && (r = xe(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
    }

    function zn(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }

    function rr(e, t) {
        var n = t.checked;
        return $({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked
        })
    }

    function ll(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue,
            r = t.checked != null ? t.checked : t.defaultChecked;
        n = ve(t.value != null ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
    }

    function lr(e, t) {
        t = t.checked, t != null && Y(e, "checked", t, !1)
    }

    function or(e, t) {
        lr(e, t);
        var n = ve(t.value),
            r = t.type;
        if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return
        }
        t.hasOwnProperty("value") ? Mn(e, t.type, n) : t.hasOwnProperty("defaultValue") && Mn(e, t.type, ve(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
    }

    function ir(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
        }
        n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
    }

    function Mn(e, t, n) {
        (t !== "number" || zn(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
    }
    var Qt = Array.isArray;

    function Lt(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
            for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + ve(n), t = null, l = 0; l < e.length; l++) {
                if (e[l].value === n) {
                    e[l].selected = !0, r && (e[l].defaultSelected = !0);
                    return
                }
                t !== null || e[l].disabled || (t = e[l])
            }
            t !== null && (t.selected = !0)
        }
    }

    function ur(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
        return $({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }

    function ol(e, t) {
        var n = t.value;
        if (n == null) {
            if (n = t.children, t = t.defaultValue, n != null) {
                if (t != null) throw Error(s(92));
                if (Qt(n)) {
                    if (1 < n.length) throw Error(s(93));
                    n = n[0]
                }
                t = n
            }
            t == null && (t = ""), n = t
        }
        e._wrapperState = {
            initialValue: ve(n)
        }
    }

    function il(e, t) {
        var n = ve(t.value),
            r = ve(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
    }

    function ul(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
    }

    function sl(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function sr(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? sl(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
    }
    var V, h = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, r, l)
            })
        } : e
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for (V = V || document.createElement("div"), V.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = V.firstChild; e.firstChild;) e.removeChild(e.firstChild);
            for (; t.firstChild;) e.appendChild(t.firstChild)
        }
    });

    function H(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var G = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        ne = ["Webkit", "ms", "Moz", "O"];
    Object.keys(G).forEach(function(e) {
        ne.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), G[t] = G[e]
        })
    });

    function ct(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || G.hasOwnProperty(e) && G[e] ? ("" + t).trim() : t + "px"
    }

    function Nt(e, t) {
        e = e.style;
        for (var n in t)
            if (t.hasOwnProperty(n)) {
                var r = n.indexOf("--") === 0,
                    l = ct(n, t[n], r);
                n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
            }
    }
    var Pt = $({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function Yt(e, t) {
        if (t) {
            if (Pt[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(s(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(s(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61))
            }
            if (t.style != null && typeof t.style != "object") throw Error(s(62))
        }
    }

    function ar(e, t) {
        if (e.indexOf("-") === -1) return typeof t.is == "string";
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var _n = null;

    function Me(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
    }
    var cr = null,
        Rt = null,
        gt = null;

    function Uu(e) {
        if (e = Mr(e)) {
            if (typeof cr != "function") throw Error(s(280));
            var t = e.stateNode;
            t && (t = zl(t), cr(e.stateNode, e.type, t))
        }
    }

    function Bu(e) {
        Rt ? gt ? gt.push(e) : gt = [e] : Rt = e
    }

    function Hu() {
        if (Rt) {
            var e = Rt,
                t = gt;
            if (gt = Rt = null, Uu(e), t)
                for (e = 0; e < t.length; e++) Uu(t[e])
        }
    }

    function Wu(e, t) {
        return e(t)
    }

    function Vu() {}
    var Oo = !1;

    function Gu(e, t, n) {
        if (Oo) return e(t, n);
        Oo = !0;
        try {
            return Wu(e, t, n)
        } finally {
            Oo = !1, (Rt !== null || gt !== null) && (Vu(), Hu())
        }
    }

    function fr(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = zl(n);
        if (r === null) return null;
        n = r[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (n && typeof n != "function") throw Error(s(231, t, typeof n));
        return n
    }
    var Fo = !1;
    if (C) try {
        var dr = {};
        Object.defineProperty(dr, "passive", {
            get: function() {
                Fo = !0
            }
        }), window.addEventListener("test", dr, dr), window.removeEventListener("test", dr, dr)
    } catch {
        Fo = !1
    }

    function yf(e, t, n, r, l, o, u, d, m) {
        var L = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, L)
        } catch (O) {
            this.onError(O)
        }
    }
    var pr = !1,
        al = null,
        cl = !1,
        Do = null,
        wf = {
            onError: function(e) {
                pr = !0, al = e
            }
        };

    function xf(e, t, n, r, l, o, u, d, m) {
        pr = !1, al = null, yf.apply(wf, arguments)
    }

    function Sf(e, t, n, r, l, o, u, d, m) {
        if (xf.apply(this, arguments), pr) {
            if (pr) {
                var L = al;
                pr = !1, al = null
            } else throw Error(s(198));
            cl || (cl = !0, Do = L)
        }
    }

    function gn(e) {
        var t = e,
            n = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            e = t;
            do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
        }
        return t.tag === 3 ? n : null
    }

    function $u(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function Qu(e) {
        if (gn(e) !== e) throw Error(s(188))
    }

    function kf(e) {
        var t = e.alternate;
        if (!t) {
            if (t = gn(e), t === null) throw Error(s(188));
            return t !== e ? null : e
        }
        for (var n = e, r = t;;) {
            var l = n.return;
            if (l === null) break;
            var o = l.alternate;
            if (o === null) {
                if (r = l.return, r !== null) {
                    n = r;
                    continue
                }
                break
            }
            if (l.child === o.child) {
                for (o = l.child; o;) {
                    if (o === n) return Qu(l), e;
                    if (o === r) return Qu(l), t;
                    o = o.sibling
                }
                throw Error(s(188))
            }
            if (n.return !== r.return) n = l, r = o;
            else {
                for (var u = !1, d = l.child; d;) {
                    if (d === n) {
                        u = !0, n = l, r = o;
                        break
                    }
                    if (d === r) {
                        u = !0, r = l, n = o;
                        break
                    }
                    d = d.sibling
                }
                if (!u) {
                    for (d = o.child; d;) {
                        if (d === n) {
                            u = !0, n = o, r = l;
                            break
                        }
                        if (d === r) {
                            u = !0, r = o, n = l;
                            break
                        }
                        d = d.sibling
                    }
                    if (!u) throw Error(s(189))
                }
            }
            if (n.alternate !== r) throw Error(s(190))
        }
        if (n.tag !== 3) throw Error(s(188));
        return n.stateNode.current === n ? e : t
    }

    function Yu(e) {
        return e = kf(e), e !== null ? Ku(e) : null
    }

    function Ku(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null;) {
            var t = Ku(e);
            if (t !== null) return t;
            e = e.sibling
        }
        return null
    }
    var Xu = a.unstable_scheduleCallback,
        Zu = a.unstable_cancelCallback,
        Ef = a.unstable_shouldYield,
        Cf = a.unstable_requestPaint,
        Fe = a.unstable_now,
        Lf = a.unstable_getCurrentPriorityLevel,
        Io = a.unstable_ImmediatePriority,
        qu = a.unstable_UserBlockingPriority,
        fl = a.unstable_NormalPriority,
        Nf = a.unstable_LowPriority,
        Ju = a.unstable_IdlePriority,
        dl = null,
        jt = null;

    function Pf(e) {
        if (jt && typeof jt.onCommitFiberRoot == "function") try {
            jt.onCommitFiberRoot(dl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
    }
    var yt = Math.clz32 ? Math.clz32 : Tf,
        Rf = Math.log,
        jf = Math.LN2;

    function Tf(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (Rf(e) / jf | 0) | 0
    }
    var pl = 64,
        hl = 4194304;

    function hr(e) {
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return e & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return e
        }
    }

    function ml(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0,
            l = e.suspendedLanes,
            o = e.pingedLanes,
            u = n & 268435455;
        if (u !== 0) {
            var d = u & ~l;
            d !== 0 ? r = hr(d) : (o &= u, o !== 0 && (r = hr(o)))
        } else u = n & ~l, u !== 0 ? r = hr(u) : o !== 0 && (r = hr(o));
        if (r === 0) return 0;
        if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
        if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
            for (e = e.entanglements, t &= r; 0 < t;) n = 31 - yt(t), l = 1 << n, r |= e[n], t &= ~l;
        return r
    }

    function zf(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
                return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function Mf(e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
            var u = 31 - yt(o),
                d = 1 << u,
                m = l[u];
            m === -1 ? (!(d & n) || d & r) && (l[u] = zf(d, t)) : m <= t && (e.expiredLanes |= d), o &= ~d
        }
    }

    function Ao(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }

    function bu() {
        var e = pl;
        return pl <<= 1, !(pl & 4194240) && (pl = 64), e
    }

    function Uo(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t
    }

    function mr(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - yt(t), e[t] = n
    }

    function _f(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for (e = e.expirationTimes; 0 < n;) {
            var l = 31 - yt(n),
                o = 1 << l;
            t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o
        }
    }

    function Bo(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n;) {
            var r = 31 - yt(n),
                l = 1 << r;
            l & t | e[r] & t && (e[r] |= t), n &= ~l
        }
    }
    var Se = 0;

    function es(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
    }
    var ts, Ho, ns, rs, ls, Wo = !1,
        vl = [],
        Kt = null,
        Xt = null,
        Zt = null,
        vr = new Map,
        gr = new Map,
        qt = [],
        Of = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

    function os(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                Kt = null;
                break;
            case "dragenter":
            case "dragleave":
                Xt = null;
                break;
            case "mouseover":
            case "mouseout":
                Zt = null;
                break;
            case "pointerover":
            case "pointerout":
                vr.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                gr.delete(t.pointerId)
        }
    }

    function yr(e, t, n, r, l, o) {
        return e === null || e.nativeEvent !== o ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: o,
            targetContainers: [l]
        }, t !== null && (t = Mr(t), t !== null && Ho(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
    }

    function Ff(e, t, n, r, l) {
        switch (t) {
            case "focusin":
                return Kt = yr(Kt, e, t, n, r, l), !0;
            case "dragenter":
                return Xt = yr(Xt, e, t, n, r, l), !0;
            case "mouseover":
                return Zt = yr(Zt, e, t, n, r, l), !0;
            case "pointerover":
                var o = l.pointerId;
                return vr.set(o, yr(vr.get(o) || null, e, t, n, r, l)), !0;
            case "gotpointercapture":
                return o = l.pointerId, gr.set(o, yr(gr.get(o) || null, e, t, n, r, l)), !0
        }
        return !1
    }

    function is(e) {
        var t = yn(e.target);
        if (t !== null) {
            var n = gn(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = $u(n), t !== null) {
                        e.blockedOn = t, ls(e.priority, function() {
                            ns(n)
                        });
                        return
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }

    function gl(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var n = Go(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type, n);
                _n = r, n.target.dispatchEvent(r), _n = null
            } else return t = Mr(n), t !== null && Ho(t), e.blockedOn = n, !1;
            t.shift()
        }
        return !0
    }

    function us(e, t, n) {
        gl(e) && n.delete(t)
    }

    function Df() {
        Wo = !1, Kt !== null && gl(Kt) && (Kt = null), Xt !== null && gl(Xt) && (Xt = null), Zt !== null && gl(Zt) && (Zt = null), vr.forEach(us), gr.forEach(us)
    }

    function wr(e, t) {
        e.blockedOn === t && (e.blockedOn = null, Wo || (Wo = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Df)))
    }

    function xr(e) {
        function t(l) {
            return wr(l, e)
        }
        if (0 < vl.length) {
            wr(vl[0], e);
            for (var n = 1; n < vl.length; n++) {
                var r = vl[n];
                r.blockedOn === e && (r.blockedOn = null)
            }
        }
        for (Kt !== null && wr(Kt, e), Xt !== null && wr(Xt, e), Zt !== null && wr(Zt, e), vr.forEach(t), gr.forEach(t), n = 0; n < qt.length; n++) r = qt[n], r.blockedOn === e && (r.blockedOn = null);
        for (; 0 < qt.length && (n = qt[0], n.blockedOn === null);) is(n), n.blockedOn === null && qt.shift()
    }
    var On = ee.ReactCurrentBatchConfig,
        yl = !0;

    function If(e, t, n, r) {
        var l = Se,
            o = On.transition;
        On.transition = null;
        try {
            Se = 1, Vo(e, t, n, r)
        } finally {
            Se = l, On.transition = o
        }
    }

    function Af(e, t, n, r) {
        var l = Se,
            o = On.transition;
        On.transition = null;
        try {
            Se = 4, Vo(e, t, n, r)
        } finally {
            Se = l, On.transition = o
        }
    }

    function Vo(e, t, n, r) {
        if (yl) {
            var l = Go(e, t, n, r);
            if (l === null) ui(e, t, r, wl, n), os(e, r);
            else if (Ff(l, e, t, n, r)) r.stopPropagation();
            else if (os(e, r), t & 4 && -1 < Of.indexOf(e)) {
                for (; l !== null;) {
                    var o = Mr(l);
                    if (o !== null && ts(o), o = Go(e, t, n, r), o === null && ui(e, t, r, wl, n), o === l) break;
                    l = o
                }
                l !== null && r.stopPropagation()
            } else ui(e, t, r, null, n)
        }
    }
    var wl = null;

    function Go(e, t, n, r) {
        if (wl = null, e = Me(r), e = yn(e), e !== null)
            if (t = gn(e), t === null) e = null;
            else if (n = t.tag, n === 13) {
            if (e = $u(t), e !== null) return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else t !== e && (e = null);
        return wl = e, null
    }

    function ss(e) {
        switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 4;
            case "message":
                switch (Lf()) {
                    case Io:
                        return 1;
                    case qu:
                        return 4;
                    case fl:
                    case Nf:
                        return 16;
                    case Ju:
                        return 536870912;
                    default:
                        return 16
                }
            default:
                return 16
        }
    }
    var Jt = null,
        $o = null,
        xl = null;

    function as() {
        if (xl) return xl;
        var e, t = $o,
            n = t.length,
            r, l = "value" in Jt ? Jt.value : Jt.textContent,
            o = l.length;
        for (e = 0; e < n && t[e] === l[e]; e++);
        var u = n - e;
        for (r = 1; r <= u && t[n - r] === l[o - r]; r++);
        return xl = l.slice(e, 1 < r ? 1 - r : void 0)
    }

    function Sl(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
    }

    function kl() {
        return !0
    }

    function cs() {
        return !1
    }

    function it(e) {
        function t(n, r, l, o, u) {
            this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = u, this.currentTarget = null;
            for (var d in e) e.hasOwnProperty(d) && (n = e[d], this[d] = n ? n(o) : o[d]);
            return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? kl : cs, this.isPropagationStopped = cs, this
        }
        return $(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = kl)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = kl)
            },
            persist: function() {},
            isPersistent: kl
        }), t
    }
    var Fn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        Qo = it(Fn),
        Sr = $({}, Fn, {
            view: 0,
            detail: 0
        }),
        Uf = it(Sr),
        Yo, Ko, kr, El = $({}, Sr, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Zo,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== kr && (kr && e.type === "mousemove" ? (Yo = e.screenX - kr.screenX, Ko = e.screenY - kr.screenY) : Ko = Yo = 0, kr = e), Yo)
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : Ko
            }
        }),
        fs = it(El),
        Bf = $({}, El, {
            dataTransfer: 0
        }),
        Hf = it(Bf),
        Wf = $({}, Sr, {
            relatedTarget: 0
        }),
        Xo = it(Wf),
        Vf = $({}, Fn, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Gf = it(Vf),
        $f = $({}, Fn, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        Qf = it($f),
        Yf = $({}, Fn, {
            data: 0
        }),
        ds = it(Yf),
        Kf = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        Xf = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        Zf = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function qf(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Zf[e]) ? !!t[e] : !1
    }

    function Zo() {
        return qf
    }
    var Jf = $({}, Sr, {
            key: function(e) {
                if (e.key) {
                    var t = Kf[e.key] || e.key;
                    if (t !== "Unidentified") return t
                }
                return e.type === "keypress" ? (e = Sl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Xf[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Zo,
            charCode: function(e) {
                return e.type === "keypress" ? Sl(e) : 0
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            },
            which: function(e) {
                return e.type === "keypress" ? Sl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            }
        }),
        bf = it(Jf),
        ed = $({}, El, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        ps = it(ed),
        td = $({}, Sr, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Zo
        }),
        nd = it(td),
        rd = $({}, Fn, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        ld = it(rd),
        od = $({}, El, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        id = it(od),
        ud = [9, 13, 27, 32],
        qo = C && "CompositionEvent" in window,
        Er = null;
    C && "documentMode" in document && (Er = document.documentMode);
    var sd = C && "TextEvent" in window && !Er,
        hs = C && (!qo || Er && 8 < Er && 11 >= Er),
        ms = " ",
        vs = !1;

    function gs(e, t) {
        switch (e) {
            case "keyup":
                return ud.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function ys(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
    }
    var Dn = !1;

    function ad(e, t) {
        switch (e) {
            case "compositionend":
                return ys(t);
            case "keypress":
                return t.which !== 32 ? null : (vs = !0, ms);
            case "textInput":
                return e = t.data, e === ms && vs ? null : e;
            default:
                return null
        }
    }

    function cd(e, t) {
        if (Dn) return e === "compositionend" || !qo && gs(e, t) ? (e = as(), xl = $o = Jt = null, Dn = !1, e) : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                }
                return null;
            case "compositionend":
                return hs && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }
    var fd = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function ws(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!fd[e.type] : t === "textarea"
    }

    function xs(e, t, n, r) {
        Bu(r), t = Rl(t, "onChange"), 0 < t.length && (n = new Qo("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
        }))
    }
    var Cr = null,
        Lr = null;

    function dd(e) {
        As(e, 0)
    }

    function Cl(e) {
        var t = Hn(e);
        if (rl(t)) return e
    }

    function pd(e, t) {
        if (e === "change") return t
    }
    var Ss = !1;
    if (C) {
        var Jo;
        if (C) {
            var bo = "oninput" in document;
            if (!bo) {
                var ks = document.createElement("div");
                ks.setAttribute("oninput", "return;"), bo = typeof ks.oninput == "function"
            }
            Jo = bo
        } else Jo = !1;
        Ss = Jo && (!document.documentMode || 9 < document.documentMode)
    }

    function Es() {
        Cr && (Cr.detachEvent("onpropertychange", Cs), Lr = Cr = null)
    }

    function Cs(e) {
        if (e.propertyName === "value" && Cl(Lr)) {
            var t = [];
            xs(t, Lr, e, Me(e)), Gu(dd, t)
        }
    }

    function hd(e, t, n) {
        e === "focusin" ? (Es(), Cr = t, Lr = n, Cr.attachEvent("onpropertychange", Cs)) : e === "focusout" && Es()
    }

    function md(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return Cl(Lr)
    }

    function vd(e, t) {
        if (e === "click") return Cl(t)
    }

    function gd(e, t) {
        if (e === "input" || e === "change") return Cl(t)
    }

    function yd(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var wt = typeof Object.is == "function" ? Object.is : yd;

    function Nr(e, t) {
        if (wt(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) {
            var l = n[r];
            if (!x.call(t, l) || !wt(e[l], t[l])) return !1
        }
        return !0
    }

    function Ls(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function Ns(e, t) {
        var n = Ls(e);
        e = 0;
        for (var r; n;) {
            if (n.nodeType === 3) {
                if (r = e + n.textContent.length, e <= t && r >= t) return {
                    node: n,
                    offset: t - e
                };
                e = r
            }
            e: {
                for (; n;) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = Ls(n)
        }
    }

    function Ps(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ps(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function Rs() {
        for (var e = window, t = zn(); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = typeof t.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n) e = t.contentWindow;
            else break;
            t = zn(e.document)
        }
        return t
    }

    function ei(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }

    function wd(e) {
        var t = Rs(),
            n = e.focusedElem,
            r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && Ps(n.ownerDocument.documentElement, n)) {
            if (r !== null && ei(n)) {
                if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var l = n.textContent.length,
                        o = Math.min(r.start, l);
                    r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Ns(n, o);
                    var u = Ns(n, r);
                    l && u && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== u.node || e.focusOffset !== u.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(u.node, u.offset)) : (t.setEnd(u.node, u.offset), e.addRange(t)))
                }
            }
            for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
            for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
        }
    }
    var xd = C && "documentMode" in document && 11 >= document.documentMode,
        In = null,
        ti = null,
        Pr = null,
        ni = !1;

    function js(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        ni || In == null || In !== zn(r) || (r = In, "selectionStart" in r && ei(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), Pr && Nr(Pr, r) || (Pr = r, r = Rl(ti, "onSelect"), 0 < r.length && (t = new Qo("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
        }), t.target = In)))
    }

    function Ll(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
    }
    var An = {
            animationend: Ll("Animation", "AnimationEnd"),
            animationiteration: Ll("Animation", "AnimationIteration"),
            animationstart: Ll("Animation", "AnimationStart"),
            transitionend: Ll("Transition", "TransitionEnd")
        },
        ri = {},
        Ts = {};
    C && (Ts = document.createElement("div").style, "AnimationEvent" in window || (delete An.animationend.animation, delete An.animationiteration.animation, delete An.animationstart.animation), "TransitionEvent" in window || delete An.transitionend.transition);

    function Nl(e) {
        if (ri[e]) return ri[e];
        if (!An[e]) return e;
        var t = An[e],
            n;
        for (n in t)
            if (t.hasOwnProperty(n) && n in Ts) return ri[e] = t[n];
        return e
    }
    var zs = Nl("animationend"),
        Ms = Nl("animationiteration"),
        _s = Nl("animationstart"),
        Os = Nl("transitionend"),
        Fs = new Map,
        Ds = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

    function bt(e, t) {
        Fs.set(e, t), p(t, [e])
    }
    for (var li = 0; li < Ds.length; li++) {
        var oi = Ds[li],
            Sd = oi.toLowerCase(),
            kd = oi[0].toUpperCase() + oi.slice(1);
        bt(Sd, "on" + kd)
    }
    bt(zs, "onAnimationEnd"), bt(Ms, "onAnimationIteration"), bt(_s, "onAnimationStart"), bt("dblclick", "onDoubleClick"), bt("focusin", "onFocus"), bt("focusout", "onBlur"), bt(Os, "onTransitionEnd"), w("onMouseEnter", ["mouseout", "mouseover"]), w("onMouseLeave", ["mouseout", "mouseover"]), w("onPointerEnter", ["pointerout", "pointerover"]), w("onPointerLeave", ["pointerout", "pointerover"]), p("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), p("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), p("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), p("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), p("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), p("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Rr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        Ed = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));

    function Is(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, Sf(r, t, void 0, e), e.currentTarget = null
    }

    function As(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                l = r.event;
            r = r.listeners;
            e: {
                var o = void 0;
                if (t)
                    for (var u = r.length - 1; 0 <= u; u--) {
                        var d = r[u],
                            m = d.instance,
                            L = d.currentTarget;
                        if (d = d.listener, m !== o && l.isPropagationStopped()) break e;
                        Is(l, d, L), o = m
                    } else
                        for (u = 0; u < r.length; u++) {
                            if (d = r[u], m = d.instance, L = d.currentTarget, d = d.listener, m !== o && l.isPropagationStopped()) break e;
                            Is(l, d, L), o = m
                        }
            }
        }
        if (cl) throw e = Do, cl = !1, Do = null, e
    }

    function Ce(e, t) {
        var n = t[pi];
        n === void 0 && (n = t[pi] = new Set);
        var r = e + "__bubble";
        n.has(r) || (Us(t, e, 2, !1), n.add(r))
    }

    function ii(e, t, n) {
        var r = 0;
        t && (r |= 4), Us(n, e, r, t)
    }
    var Pl = "_reactListening" + Math.random().toString(36).slice(2);

    function jr(e) {
        if (!e[Pl]) {
            e[Pl] = !0, f.forEach(function(n) {
                n !== "selectionchange" && (Ed.has(n) || ii(n, !1, e), ii(n, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Pl] || (t[Pl] = !0, ii("selectionchange", !1, t))
        }
    }

    function Us(e, t, n, r) {
        switch (ss(t)) {
            case 1:
                var l = If;
                break;
            case 4:
                l = Af;
                break;
            default:
                l = Vo
        }
        n = l.bind(null, t, n, e), l = void 0, !Fo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: l
        }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
            passive: l
        }) : e.addEventListener(t, n, !1)
    }

    function ui(e, t, n, r, l) {
        var o = r;
        if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
            if (r === null) return;
            var u = r.tag;
            if (u === 3 || u === 4) {
                var d = r.stateNode.containerInfo;
                if (d === l || d.nodeType === 8 && d.parentNode === l) break;
                if (u === 4)
                    for (u = r.return; u !== null;) {
                        var m = u.tag;
                        if ((m === 3 || m === 4) && (m = u.stateNode.containerInfo, m === l || m.nodeType === 8 && m.parentNode === l)) return;
                        u = u.return
                    }
                for (; d !== null;) {
                    if (u = yn(d), u === null) return;
                    if (m = u.tag, m === 5 || m === 6) {
                        r = o = u;
                        continue e
                    }
                    d = d.parentNode
                }
            }
            r = r.return
        }
        Gu(function() {
            var L = o,
                O = Me(n),
                D = [];
            e: {
                var _ = Fs.get(e);
                if (_ !== void 0) {
                    var Q = Qo,
                        X = e;
                    switch (e) {
                        case "keypress":
                            if (Sl(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            Q = bf;
                            break;
                        case "focusin":
                            X = "focus", Q = Xo;
                            break;
                        case "focusout":
                            X = "blur", Q = Xo;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            Q = Xo;
                            break;
                        case "click":
                            if (n.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            Q = fs;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            Q = Hf;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            Q = nd;
                            break;
                        case zs:
                        case Ms:
                        case _s:
                            Q = Gf;
                            break;
                        case Os:
                            Q = ld;
                            break;
                        case "scroll":
                            Q = Uf;
                            break;
                        case "wheel":
                            Q = id;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            Q = Qf;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            Q = ps
                    }
                    var J = (t & 4) !== 0,
                        De = !J && e === "scroll",
                        k = J ? _ !== null ? _ + "Capture" : null : _;
                    J = [];
                    for (var y = L, E; y !== null;) {
                        E = y;
                        var B = E.stateNode;
                        if (E.tag === 5 && B !== null && (E = B, k !== null && (B = fr(y, k), B != null && J.push(Tr(y, B, E)))), De) break;
                        y = y.return
                    }
                    0 < J.length && (_ = new Q(_, X, null, n, O), D.push({
                        event: _,
                        listeners: J
                    }))
                }
            }
            if (!(t & 7)) {
                e: {
                    if (_ = e === "mouseover" || e === "pointerover", Q = e === "mouseout" || e === "pointerout", _ && n !== _n && (X = n.relatedTarget || n.fromElement) && (yn(X) || X[Ft])) break e;
                    if ((Q || _) && (_ = O.window === O ? O : (_ = O.ownerDocument) ? _.defaultView || _.parentWindow : window, Q ? (X = n.relatedTarget || n.toElement, Q = L, X = X ? yn(X) : null, X !== null && (De = gn(X), X !== De || X.tag !== 5 && X.tag !== 6) && (X = null)) : (Q = null, X = L), Q !== X)) {
                        if (J = fs, B = "onMouseLeave", k = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (J = ps, B = "onPointerLeave", k = "onPointerEnter", y = "pointer"), De = Q == null ? _ : Hn(Q), E = X == null ? _ : Hn(X), _ = new J(B, y + "leave", Q, n, O), _.target = De, _.relatedTarget = E, B = null, yn(O) === L && (J = new J(k, y + "enter", X, n, O), J.target = E, J.relatedTarget = De, B = J), De = B, Q && X) t: {
                            for (J = Q, k = X, y = 0, E = J; E; E = Un(E)) y++;
                            for (E = 0, B = k; B; B = Un(B)) E++;
                            for (; 0 < y - E;) J = Un(J),
                            y--;
                            for (; 0 < E - y;) k = Un(k),
                            E--;
                            for (; y--;) {
                                if (J === k || k !== null && J === k.alternate) break t;
                                J = Un(J), k = Un(k)
                            }
                            J = null
                        }
                        else J = null;
                        Q !== null && Bs(D, _, Q, J, !1), X !== null && De !== null && Bs(D, De, X, J, !0)
                    }
                }
                e: {
                    if (_ = L ? Hn(L) : window, Q = _.nodeName && _.nodeName.toLowerCase(), Q === "select" || Q === "input" && _.type === "file") var b = pd;
                    else if (ws(_))
                        if (Ss) b = gd;
                        else {
                            b = md;
                            var le = hd
                        }
                    else(Q = _.nodeName) && Q.toLowerCase() === "input" && (_.type === "checkbox" || _.type === "radio") && (b = vd);
                    if (b && (b = b(e, L))) {
                        xs(D, b, n, O);
                        break e
                    }
                    le && le(e, _, L),
                    e === "focusout" && (le = _._wrapperState) && le.controlled && _.type === "number" && Mn(_, "number", _.value)
                }
                switch (le = L ? Hn(L) : window, e) {
                    case "focusin":
                        (ws(le) || le.contentEditable === "true") && (In = le, ti = L, Pr = null);
                        break;
                    case "focusout":
                        Pr = ti = In = null;
                        break;
                    case "mousedown":
                        ni = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        ni = !1, js(D, n, O);
                        break;
                    case "selectionchange":
                        if (xd) break;
                    case "keydown":
                    case "keyup":
                        js(D, n, O)
                }
                var oe;
                if (qo) e: {
                    switch (e) {
                        case "compositionstart":
                            var ue = "onCompositionStart";
                            break e;
                        case "compositionend":
                            ue = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            ue = "onCompositionUpdate";
                            break e
                    }
                    ue = void 0
                }
                else Dn ? gs(e, n) && (ue = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ue = "onCompositionStart");ue && (hs && n.locale !== "ko" && (Dn || ue !== "onCompositionStart" ? ue === "onCompositionEnd" && Dn && (oe = as()) : (Jt = O, $o = "value" in Jt ? Jt.value : Jt.textContent, Dn = !0)), le = Rl(L, ue), 0 < le.length && (ue = new ds(ue, e, null, n, O), D.push({
                    event: ue,
                    listeners: le
                }), oe ? ue.data = oe : (oe = ys(n), oe !== null && (ue.data = oe)))),
                (oe = sd ? ad(e, n) : cd(e, n)) && (L = Rl(L, "onBeforeInput"), 0 < L.length && (O = new ds("onBeforeInput", "beforeinput", null, n, O), D.push({
                    event: O,
                    listeners: L
                }), O.data = oe))
            }
            As(D, t)
        })
    }

    function Tr(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }

    function Rl(e, t) {
        for (var n = t + "Capture", r = []; e !== null;) {
            var l = e,
                o = l.stateNode;
            l.tag === 5 && o !== null && (l = o, o = fr(e, n), o != null && r.unshift(Tr(e, o, l)), o = fr(e, t), o != null && r.push(Tr(e, o, l))), e = e.return
        }
        return r
    }

    function Un(e) {
        if (e === null) return null;
        do e = e.return; while (e && e.tag !== 5);
        return e || null
    }

    function Bs(e, t, n, r, l) {
        for (var o = t._reactName, u = []; n !== null && n !== r;) {
            var d = n,
                m = d.alternate,
                L = d.stateNode;
            if (m !== null && m === r) break;
            d.tag === 5 && L !== null && (d = L, l ? (m = fr(n, o), m != null && u.unshift(Tr(n, m, d))) : l || (m = fr(n, o), m != null && u.push(Tr(n, m, d)))), n = n.return
        }
        u.length !== 0 && e.push({
            event: t,
            listeners: u
        })
    }
    var Cd = /\r\n?/g,
        Ld = /\u0000|\uFFFD/g;

    function Hs(e) {
        return (typeof e == "string" ? e : "" + e).replace(Cd, `
`).replace(Ld, "")
    }

    function jl(e, t, n) {
        if (t = Hs(t), Hs(e) !== t && n) throw Error(s(425))
    }

    function Tl() {}
    var si = null,
        ai = null;

    function ci(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var fi = typeof setTimeout == "function" ? setTimeout : void 0,
        Nd = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Ws = typeof Promise == "function" ? Promise : void 0,
        Pd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ws < "u" ? function(e) {
            return Ws.resolve(null).then(e).catch(Rd)
        } : fi;

    function Rd(e) {
        setTimeout(function() {
            throw e
        })
    }

    function di(e, t) {
        var n = t,
            r = 0;
        do {
            var l = n.nextSibling;
            if (e.removeChild(n), l && l.nodeType === 8)
                if (n = l.data, n === "/$") {
                    if (r === 0) {
                        e.removeChild(l), xr(t);
                        return
                    }
                    r--
                } else n !== "$" && n !== "$?" && n !== "$!" || r++;
            n = l
        } while (n);
        xr(t)
    }

    function en(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
                if (t === "/$") return null
            }
        }
        return e
    }

    function Vs(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (t === 0) return e;
                    t--
                } else n === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var Bn = Math.random().toString(36).slice(2),
        Tt = "__reactFiber$" + Bn,
        zr = "__reactProps$" + Bn,
        Ft = "__reactContainer$" + Bn,
        pi = "__reactEvents$" + Bn,
        jd = "__reactListeners$" + Bn,
        Td = "__reactHandles$" + Bn;

    function yn(e) {
        var t = e[Tt];
        if (t) return t;
        for (var n = e.parentNode; n;) {
            if (t = n[Ft] || n[Tt]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                    for (e = Vs(e); e !== null;) {
                        if (n = e[Tt]) return n;
                        e = Vs(e)
                    }
                return t
            }
            e = n, n = e.parentNode
        }
        return null
    }

    function Mr(e) {
        return e = e[Tt] || e[Ft], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
    }

    function Hn(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(s(33))
    }

    function zl(e) {
        return e[zr] || null
    }
    var hi = [],
        Wn = -1;

    function tn(e) {
        return {
            current: e
        }
    }

    function Le(e) {
        0 > Wn || (e.current = hi[Wn], hi[Wn] = null, Wn--)
    }

    function ke(e, t) {
        Wn++, hi[Wn] = e.current, e.current = t
    }
    var nn = {},
        Ke = tn(nn),
        et = tn(!1),
        wn = nn;

    function Vn(e, t) {
        var n = e.type.contextTypes;
        if (!n) return nn;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var l = {},
            o;
        for (o in n) l[o] = t[o];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
    }

    function tt(e) {
        return e = e.childContextTypes, e != null
    }

    function Ml() {
        Le(et), Le(Ke)
    }

    function Gs(e, t, n) {
        if (Ke.current !== nn) throw Error(s(168));
        ke(Ke, t), ke(et, n)
    }

    function $s(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for (var l in r)
            if (!(l in t)) throw Error(s(108, he(e) || "Unknown", l));
        return $({}, n, r)
    }

    function _l(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || nn, wn = Ke.current, ke(Ke, e), ke(et, et.current), !0
    }

    function Qs(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(s(169));
        n ? (e = $s(e, t, wn), r.__reactInternalMemoizedMergedChildContext = e, Le(et), Le(Ke), ke(Ke, e)) : Le(et), ke(et, n)
    }
    var Dt = null,
        Ol = !1,
        mi = !1;

    function Ys(e) {
        Dt === null ? Dt = [e] : Dt.push(e)
    }

    function zd(e) {
        Ol = !0, Ys(e)
    }

    function rn() {
        if (!mi && Dt !== null) {
            mi = !0;
            var e = 0,
                t = Se;
            try {
                var n = Dt;
                for (Se = 1; e < n.length; e++) {
                    var r = n[e];
                    do r = r(!0); while (r !== null)
                }
                Dt = null, Ol = !1
            } catch (l) {
                throw Dt !== null && (Dt = Dt.slice(e + 1)), Xu(Io, rn), l
            } finally {
                Se = t, mi = !1
            }
        }
        return null
    }
    var Gn = [],
        $n = 0,
        Fl = null,
        Dl = 0,
        ft = [],
        dt = 0,
        xn = null,
        It = 1,
        At = "";

    function Sn(e, t) {
        Gn[$n++] = Dl, Gn[$n++] = Fl, Fl = e, Dl = t
    }

    function Ks(e, t, n) {
        ft[dt++] = It, ft[dt++] = At, ft[dt++] = xn, xn = e;
        var r = It;
        e = At;
        var l = 32 - yt(r) - 1;
        r &= ~(1 << l), n += 1;
        var o = 32 - yt(t) + l;
        if (30 < o) {
            var u = l - l % 5;
            o = (r & (1 << u) - 1).toString(32), r >>= u, l -= u, It = 1 << 32 - yt(t) + l | n << l | r, At = o + e
        } else It = 1 << o | n << l | r, At = e
    }

    function vi(e) {
        e.return !== null && (Sn(e, 1), Ks(e, 1, 0))
    }

    function gi(e) {
        for (; e === Fl;) Fl = Gn[--$n], Gn[$n] = null, Dl = Gn[--$n], Gn[$n] = null;
        for (; e === xn;) xn = ft[--dt], ft[dt] = null, At = ft[--dt], ft[dt] = null, It = ft[--dt], ft[dt] = null
    }
    var ut = null,
        st = null,
        Pe = !1,
        xt = null;

    function Xs(e, t) {
        var n = vt(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
    }

    function Zs(e, t) {
        switch (e.tag) {
            case 5:
                var n = e.type;
                return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ut = e, st = en(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ut = e, st = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (n = xn !== null ? {
                    id: It,
                    overflow: At
                } : null, e.memoizedState = {
                    dehydrated: t,
                    treeContext: n,
                    retryLane: 1073741824
                }, n = vt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ut = e, st = null, !0) : !1;
            default:
                return !1
        }
    }

    function yi(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0
    }

    function wi(e) {
        if (Pe) {
            var t = st;
            if (t) {
                var n = t;
                if (!Zs(e, t)) {
                    if (yi(e)) throw Error(s(418));
                    t = en(n.nextSibling);
                    var r = ut;
                    t && Zs(e, t) ? Xs(r, n) : (e.flags = e.flags & -4097 | 2, Pe = !1, ut = e)
                }
            } else {
                if (yi(e)) throw Error(s(418));
                e.flags = e.flags & -4097 | 2, Pe = !1, ut = e
            }
        }
    }

    function qs(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
        ut = e
    }

    function Il(e) {
        if (e !== ut) return !1;
        if (!Pe) return qs(e), Pe = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ci(e.type, e.memoizedProps)), t && (t = st)) {
            if (yi(e)) throw Js(), Error(s(418));
            for (; t;) Xs(e, t), t = en(t.nextSibling)
        }
        if (qs(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                st = en(e.nextSibling);
                                break e
                            }
                            t--
                        } else n !== "$" && n !== "$!" && n !== "$?" || t++
                    }
                    e = e.nextSibling
                }
                st = null
            }
        } else st = ut ? en(e.stateNode.nextSibling) : null;
        return !0
    }

    function Js() {
        for (var e = st; e;) e = en(e.nextSibling)
    }

    function Qn() {
        st = ut = null, Pe = !1
    }

    function xi(e) {
        xt === null ? xt = [e] : xt.push(e)
    }
    var Md = ee.ReactCurrentBatchConfig;

    function _r(e, t, n) {
        if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
            if (n._owner) {
                if (n = n._owner, n) {
                    if (n.tag !== 1) throw Error(s(309));
                    var r = n.stateNode
                }
                if (!r) throw Error(s(147, e));
                var l = r,
                    o = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(u) {
                    var d = l.refs;
                    u === null ? delete d[o] : d[o] = u
                }, t._stringRef = o, t)
            }
            if (typeof e != "string") throw Error(s(284));
            if (!n._owner) throw Error(s(290, e))
        }
        return e
    }

    function Al(e, t) {
        throw e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
    }

    function bs(e) {
        var t = e._init;
        return t(e._payload)
    }

    function ea(e) {
        function t(k, y) {
            if (e) {
                var E = k.deletions;
                E === null ? (k.deletions = [y], k.flags |= 16) : E.push(y)
            }
        }

        function n(k, y) {
            if (!e) return null;
            for (; y !== null;) t(k, y), y = y.sibling;
            return null
        }

        function r(k, y) {
            for (k = new Map; y !== null;) y.key !== null ? k.set(y.key, y) : k.set(y.index, y), y = y.sibling;
            return k
        }

        function l(k, y) {
            return k = dn(k, y), k.index = 0, k.sibling = null, k
        }

        function o(k, y, E) {
            return k.index = E, e ? (E = k.alternate, E !== null ? (E = E.index, E < y ? (k.flags |= 2, y) : E) : (k.flags |= 2, y)) : (k.flags |= 1048576, y)
        }

        function u(k) {
            return e && k.alternate === null && (k.flags |= 2), k
        }

        function d(k, y, E, B) {
            return y === null || y.tag !== 6 ? (y = fu(E, k.mode, B), y.return = k, y) : (y = l(y, E), y.return = k, y)
        }

        function m(k, y, E, B) {
            var b = E.type;
            return b === fe ? O(k, y, E.props.children, B, E.key) : y !== null && (y.elementType === b || typeof b == "object" && b !== null && b.$$typeof === Ee && bs(b) === y.type) ? (B = l(y, E.props), B.ref = _r(k, y, E), B.return = k, B) : (B = so(E.type, E.key, E.props, null, k.mode, B), B.ref = _r(k, y, E), B.return = k, B)
        }

        function L(k, y, E, B) {
            return y === null || y.tag !== 4 || y.stateNode.containerInfo !== E.containerInfo || y.stateNode.implementation !== E.implementation ? (y = du(E, k.mode, B), y.return = k, y) : (y = l(y, E.children || []), y.return = k, y)
        }

        function O(k, y, E, B, b) {
            return y === null || y.tag !== 7 ? (y = jn(E, k.mode, B, b), y.return = k, y) : (y = l(y, E), y.return = k, y)
        }

        function D(k, y, E) {
            if (typeof y == "string" && y !== "" || typeof y == "number") return y = fu("" + y, k.mode, E), y.return = k, y;
            if (typeof y == "object" && y !== null) {
                switch (y.$$typeof) {
                    case se:
                        return E = so(y.type, y.key, y.props, null, k.mode, E), E.ref = _r(k, null, y), E.return = k, E;
                    case de:
                        return y = du(y, k.mode, E), y.return = k, y;
                    case Ee:
                        var B = y._init;
                        return D(k, B(y._payload), E)
                }
                if (Qt(y) || Z(y)) return y = jn(y, k.mode, E, null), y.return = k, y;
                Al(k, y)
            }
            return null
        }

        function _(k, y, E, B) {
            var b = y !== null ? y.key : null;
            if (typeof E == "string" && E !== "" || typeof E == "number") return b !== null ? null : d(k, y, "" + E, B);
            if (typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                    case se:
                        return E.key === b ? m(k, y, E, B) : null;
                    case de:
                        return E.key === b ? L(k, y, E, B) : null;
                    case Ee:
                        return b = E._init, _(k, y, b(E._payload), B)
                }
                if (Qt(E) || Z(E)) return b !== null ? null : O(k, y, E, B, null);
                Al(k, E)
            }
            return null
        }

        function Q(k, y, E, B, b) {
            if (typeof B == "string" && B !== "" || typeof B == "number") return k = k.get(E) || null, d(y, k, "" + B, b);
            if (typeof B == "object" && B !== null) {
                switch (B.$$typeof) {
                    case se:
                        return k = k.get(B.key === null ? E : B.key) || null, m(y, k, B, b);
                    case de:
                        return k = k.get(B.key === null ? E : B.key) || null, L(y, k, B, b);
                    case Ee:
                        var le = B._init;
                        return Q(k, y, E, le(B._payload), b)
                }
                if (Qt(B) || Z(B)) return k = k.get(E) || null, O(y, k, B, b, null);
                Al(y, B)
            }
            return null
        }

        function X(k, y, E, B) {
            for (var b = null, le = null, oe = y, ue = y = 0, Ge = null; oe !== null && ue < E.length; ue++) {
                oe.index > ue ? (Ge = oe, oe = null) : Ge = oe.sibling;
                var ge = _(k, oe, E[ue], B);
                if (ge === null) {
                    oe === null && (oe = Ge);
                    break
                }
                e && oe && ge.alternate === null && t(k, oe), y = o(ge, y, ue), le === null ? b = ge : le.sibling = ge, le = ge, oe = Ge
            }
            if (ue === E.length) return n(k, oe), Pe && Sn(k, ue), b;
            if (oe === null) {
                for (; ue < E.length; ue++) oe = D(k, E[ue], B), oe !== null && (y = o(oe, y, ue), le === null ? b = oe : le.sibling = oe, le = oe);
                return Pe && Sn(k, ue), b
            }
            for (oe = r(k, oe); ue < E.length; ue++) Ge = Q(oe, k, ue, E[ue], B), Ge !== null && (e && Ge.alternate !== null && oe.delete(Ge.key === null ? ue : Ge.key), y = o(Ge, y, ue), le === null ? b = Ge : le.sibling = Ge, le = Ge);
            return e && oe.forEach(function(pn) {
                return t(k, pn)
            }), Pe && Sn(k, ue), b
        }

        function J(k, y, E, B) {
            var b = Z(E);
            if (typeof b != "function") throw Error(s(150));
            if (E = b.call(E), E == null) throw Error(s(151));
            for (var le = b = null, oe = y, ue = y = 0, Ge = null, ge = E.next(); oe !== null && !ge.done; ue++, ge = E.next()) {
                oe.index > ue ? (Ge = oe, oe = null) : Ge = oe.sibling;
                var pn = _(k, oe, ge.value, B);
                if (pn === null) {
                    oe === null && (oe = Ge);
                    break
                }
                e && oe && pn.alternate === null && t(k, oe), y = o(pn, y, ue), le === null ? b = pn : le.sibling = pn, le = pn, oe = Ge
            }
            if (ge.done) return n(k, oe), Pe && Sn(k, ue), b;
            if (oe === null) {
                for (; !ge.done; ue++, ge = E.next()) ge = D(k, ge.value, B), ge !== null && (y = o(ge, y, ue), le === null ? b = ge : le.sibling = ge, le = ge);
                return Pe && Sn(k, ue), b
            }
            for (oe = r(k, oe); !ge.done; ue++, ge = E.next()) ge = Q(oe, k, ue, ge.value, B), ge !== null && (e && ge.alternate !== null && oe.delete(ge.key === null ? ue : ge.key), y = o(ge, y, ue), le === null ? b = ge : le.sibling = ge, le = ge);
            return e && oe.forEach(function(f0) {
                return t(k, f0)
            }), Pe && Sn(k, ue), b
        }

        function De(k, y, E, B) {
            if (typeof E == "object" && E !== null && E.type === fe && E.key === null && (E = E.props.children), typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                    case se:
                        e: {
                            for (var b = E.key, le = y; le !== null;) {
                                if (le.key === b) {
                                    if (b = E.type, b === fe) {
                                        if (le.tag === 7) {
                                            n(k, le.sibling), y = l(le, E.props.children), y.return = k, k = y;
                                            break e
                                        }
                                    } else if (le.elementType === b || typeof b == "object" && b !== null && b.$$typeof === Ee && bs(b) === le.type) {
                                        n(k, le.sibling), y = l(le, E.props), y.ref = _r(k, le, E), y.return = k, k = y;
                                        break e
                                    }
                                    n(k, le);
                                    break
                                } else t(k, le);
                                le = le.sibling
                            }
                            E.type === fe ? (y = jn(E.props.children, k.mode, B, E.key), y.return = k, k = y) : (B = so(E.type, E.key, E.props, null, k.mode, B), B.ref = _r(k, y, E), B.return = k, k = B)
                        }
                        return u(k);
                    case de:
                        e: {
                            for (le = E.key; y !== null;) {
                                if (y.key === le)
                                    if (y.tag === 4 && y.stateNode.containerInfo === E.containerInfo && y.stateNode.implementation === E.implementation) {
                                        n(k, y.sibling), y = l(y, E.children || []), y.return = k, k = y;
                                        break e
                                    } else {
                                        n(k, y);
                                        break
                                    }
                                else t(k, y);
                                y = y.sibling
                            }
                            y = du(E, k.mode, B),
                            y.return = k,
                            k = y
                        }
                        return u(k);
                    case Ee:
                        return le = E._init, De(k, y, le(E._payload), B)
                }
                if (Qt(E)) return X(k, y, E, B);
                if (Z(E)) return J(k, y, E, B);
                Al(k, E)
            }
            return typeof E == "string" && E !== "" || typeof E == "number" ? (E = "" + E, y !== null && y.tag === 6 ? (n(k, y.sibling), y = l(y, E), y.return = k, k = y) : (n(k, y), y = fu(E, k.mode, B), y.return = k, k = y), u(k)) : n(k, y)
        }
        return De
    }
    var Yn = ea(!0),
        ta = ea(!1),
        Ul = tn(null),
        Bl = null,
        Kn = null,
        Si = null;

    function ki() {
        Si = Kn = Bl = null
    }

    function Ei(e) {
        var t = Ul.current;
        Le(Ul), e._currentValue = t
    }

    function Ci(e, t, n) {
        for (; e !== null;) {
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
            e = e.return
        }
    }

    function Xn(e, t) {
        Bl = e, Si = Kn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (nt = !0), e.firstContext = null)
    }

    function pt(e) {
        var t = e._currentValue;
        if (Si !== e)
            if (e = {
                    context: e,
                    memoizedValue: t,
                    next: null
                }, Kn === null) {
                if (Bl === null) throw Error(s(308));
                Kn = e, Bl.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
            } else Kn = Kn.next = e;
        return t
    }
    var kn = null;

    function Li(e) {
        kn === null ? kn = [e] : kn.push(e)
    }

    function na(e, t, n, r) {
        var l = t.interleaved;
        return l === null ? (n.next = n, Li(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ut(e, r)
    }

    function Ut(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null
    }
    var ln = !1;

    function Ni(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }

    function ra(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
    }

    function Bt(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function on(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (r = r.shared, me & 2) {
            var l = r.pending;
            return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ut(e, n)
        }
        return l = r.interleaved, l === null ? (t.next = t, Li(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ut(e, n)
    }

    function Hl(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, Bo(e, n)
        }
    }

    function la(e, t) {
        var n = e.updateQueue,
            r = e.alternate;
        if (r !== null && (r = r.updateQueue, n === r)) {
            var l = null,
                o = null;
            if (n = n.firstBaseUpdate, n !== null) {
                do {
                    var u = {
                        eventTime: n.eventTime,
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: n.callback,
                        next: null
                    };
                    o === null ? l = o = u : o = o.next = u, n = n.next
                } while (n !== null);
                o === null ? l = o = t : o = o.next = t
            } else l = o = t;
            n = {
                baseState: r.baseState,
                firstBaseUpdate: l,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects
            }, e.updateQueue = n;
            return
        }
        e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
    }

    function Wl(e, t, n, r) {
        var l = e.updateQueue;
        ln = !1;
        var o = l.firstBaseUpdate,
            u = l.lastBaseUpdate,
            d = l.shared.pending;
        if (d !== null) {
            l.shared.pending = null;
            var m = d,
                L = m.next;
            m.next = null, u === null ? o = L : u.next = L, u = m;
            var O = e.alternate;
            O !== null && (O = O.updateQueue, d = O.lastBaseUpdate, d !== u && (d === null ? O.firstBaseUpdate = L : d.next = L, O.lastBaseUpdate = m))
        }
        if (o !== null) {
            var D = l.baseState;
            u = 0, O = L = m = null, d = o;
            do {
                var _ = d.lane,
                    Q = d.eventTime;
                if ((r & _) === _) {
                    O !== null && (O = O.next = {
                        eventTime: Q,
                        lane: 0,
                        tag: d.tag,
                        payload: d.payload,
                        callback: d.callback,
                        next: null
                    });
                    e: {
                        var X = e,
                            J = d;
                        switch (_ = t, Q = n, J.tag) {
                            case 1:
                                if (X = J.payload, typeof X == "function") {
                                    D = X.call(Q, D, _);
                                    break e
                                }
                                D = X;
                                break e;
                            case 3:
                                X.flags = X.flags & -65537 | 128;
                            case 0:
                                if (X = J.payload, _ = typeof X == "function" ? X.call(Q, D, _) : X, _ == null) break e;
                                D = $({}, D, _);
                                break e;
                            case 2:
                                ln = !0
                        }
                    }
                    d.callback !== null && d.lane !== 0 && (e.flags |= 64, _ = l.effects, _ === null ? l.effects = [d] : _.push(d))
                } else Q = {
                    eventTime: Q,
                    lane: _,
                    tag: d.tag,
                    payload: d.payload,
                    callback: d.callback,
                    next: null
                }, O === null ? (L = O = Q, m = D) : O = O.next = Q, u |= _;
                if (d = d.next, d === null) {
                    if (d = l.shared.pending, d === null) break;
                    _ = d, d = _.next, _.next = null, l.lastBaseUpdate = _, l.shared.pending = null
                }
            } while (!0);
            if (O === null && (m = D), l.baseState = m, l.firstBaseUpdate = L, l.lastBaseUpdate = O, t = l.shared.interleaved, t !== null) {
                l = t;
                do u |= l.lane, l = l.next; while (l !== t)
            } else o === null && (l.shared.lanes = 0);
            Ln |= u, e.lanes = u, e.memoizedState = D
        }
    }

    function oa(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null)
            for (t = 0; t < e.length; t++) {
                var r = e[t],
                    l = r.callback;
                if (l !== null) {
                    if (r.callback = null, r = n, typeof l != "function") throw Error(s(191, l));
                    l.call(r)
                }
            }
    }
    var Or = {},
        zt = tn(Or),
        Fr = tn(Or),
        Dr = tn(Or);

    function En(e) {
        if (e === Or) throw Error(s(174));
        return e
    }

    function Pi(e, t) {
        switch (ke(Dr, t), ke(Fr, e), ke(zt, Or), e = t.nodeType, e) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : sr(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = sr(t, e)
        }
        Le(zt), ke(zt, t)
    }

    function Zn() {
        Le(zt), Le(Fr), Le(Dr)
    }

    function ia(e) {
        En(Dr.current);
        var t = En(zt.current),
            n = sr(t, e.type);
        t !== n && (ke(Fr, e), ke(zt, n))
    }

    function Ri(e) {
        Fr.current === e && (Le(zt), Le(Fr))
    }
    var je = tn(0);

    function Vl(e) {
        for (var t = e; t !== null;) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if (t.flags & 128) return t
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }
    var ji = [];

    function Ti() {
        for (var e = 0; e < ji.length; e++) ji[e]._workInProgressVersionPrimary = null;
        ji.length = 0
    }
    var Gl = ee.ReactCurrentDispatcher,
        zi = ee.ReactCurrentBatchConfig,
        Cn = 0,
        Te = null,
        Ue = null,
        We = null,
        $l = !1,
        Ir = !1,
        Ar = 0,
        _d = 0;

    function Xe() {
        throw Error(s(321))
    }

    function Mi(e, t) {
        if (t === null) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!wt(e[n], t[n])) return !1;
        return !0
    }

    function _i(e, t, n, r, l, o) {
        if (Cn = o, Te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Gl.current = e === null || e.memoizedState === null ? Id : Ad, e = n(r, l), Ir) {
            o = 0;
            do {
                if (Ir = !1, Ar = 0, 25 <= o) throw Error(s(301));
                o += 1, We = Ue = null, t.updateQueue = null, Gl.current = Ud, e = n(r, l)
            } while (Ir)
        }
        if (Gl.current = Kl, t = Ue !== null && Ue.next !== null, Cn = 0, We = Ue = Te = null, $l = !1, t) throw Error(s(300));
        return e
    }

    function Oi() {
        var e = Ar !== 0;
        return Ar = 0, e
    }

    function Mt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return We === null ? Te.memoizedState = We = e : We = We.next = e, We
    }

    function ht() {
        if (Ue === null) {
            var e = Te.alternate;
            e = e !== null ? e.memoizedState : null
        } else e = Ue.next;
        var t = We === null ? Te.memoizedState : We.next;
        if (t !== null) We = t, Ue = e;
        else {
            if (e === null) throw Error(s(310));
            Ue = e, e = {
                memoizedState: Ue.memoizedState,
                baseState: Ue.baseState,
                baseQueue: Ue.baseQueue,
                queue: Ue.queue,
                next: null
            }, We === null ? Te.memoizedState = We = e : We = We.next = e
        }
        return We
    }

    function Ur(e, t) {
        return typeof t == "function" ? t(e) : t
    }

    function Fi(e) {
        var t = ht(),
            n = t.queue;
        if (n === null) throw Error(s(311));
        n.lastRenderedReducer = e;
        var r = Ue,
            l = r.baseQueue,
            o = n.pending;
        if (o !== null) {
            if (l !== null) {
                var u = l.next;
                l.next = o.next, o.next = u
            }
            r.baseQueue = l = o, n.pending = null
        }
        if (l !== null) {
            o = l.next, r = r.baseState;
            var d = u = null,
                m = null,
                L = o;
            do {
                var O = L.lane;
                if ((Cn & O) === O) m !== null && (m = m.next = {
                    lane: 0,
                    action: L.action,
                    hasEagerState: L.hasEagerState,
                    eagerState: L.eagerState,
                    next: null
                }), r = L.hasEagerState ? L.eagerState : e(r, L.action);
                else {
                    var D = {
                        lane: O,
                        action: L.action,
                        hasEagerState: L.hasEagerState,
                        eagerState: L.eagerState,
                        next: null
                    };
                    m === null ? (d = m = D, u = r) : m = m.next = D, Te.lanes |= O, Ln |= O
                }
                L = L.next
            } while (L !== null && L !== o);
            m === null ? u = r : m.next = d, wt(r, t.memoizedState) || (nt = !0), t.memoizedState = r, t.baseState = u, t.baseQueue = m, n.lastRenderedState = r
        }
        if (e = n.interleaved, e !== null) {
            l = e;
            do o = l.lane, Te.lanes |= o, Ln |= o, l = l.next; while (l !== e)
        } else l === null && (n.lanes = 0);
        return [t.memoizedState, n.dispatch]
    }

    function Di(e) {
        var t = ht(),
            n = t.queue;
        if (n === null) throw Error(s(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
            l = n.pending,
            o = t.memoizedState;
        if (l !== null) {
            n.pending = null;
            var u = l = l.next;
            do o = e(o, u.action), u = u.next; while (u !== l);
            wt(o, t.memoizedState) || (nt = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
        }
        return [o, r]
    }

    function ua() {}

    function sa(e, t) {
        var n = Te,
            r = ht(),
            l = t(),
            o = !wt(r.memoizedState, l);
        if (o && (r.memoizedState = l, nt = !0), r = r.queue, Ii(fa.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || We !== null && We.memoizedState.tag & 1) {
            if (n.flags |= 2048, Br(9, ca.bind(null, n, r, l, t), void 0, null), Ve === null) throw Error(s(349));
            Cn & 30 || aa(n, t, l)
        }
        return l
    }

    function aa(e, t, n) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: n
        }, t = Te.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, Te.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
    }

    function ca(e, t, n, r) {
        t.value = n, t.getSnapshot = r, da(t) && pa(e)
    }

    function fa(e, t, n) {
        return n(function() {
            da(t) && pa(e)
        })
    }

    function da(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !wt(e, n)
        } catch {
            return !0
        }
    }

    function pa(e) {
        var t = Ut(e, 1);
        t !== null && Ct(t, e, 1, -1)
    }

    function ha(e) {
        var t = Mt();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ur,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = Dd.bind(null, Te, e), [t.memoizedState, e]
    }

    function Br(e, t, n, r) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
        }, t = Te.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, Te.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
    }

    function ma() {
        return ht().memoizedState
    }

    function Ql(e, t, n, r) {
        var l = Mt();
        Te.flags |= e, l.memoizedState = Br(1 | t, n, void 0, r === void 0 ? null : r)
    }

    function Yl(e, t, n, r) {
        var l = ht();
        r = r === void 0 ? null : r;
        var o = void 0;
        if (Ue !== null) {
            var u = Ue.memoizedState;
            if (o = u.destroy, r !== null && Mi(r, u.deps)) {
                l.memoizedState = Br(t, n, o, r);
                return
            }
        }
        Te.flags |= e, l.memoizedState = Br(1 | t, n, o, r)
    }

    function va(e, t) {
        return Ql(8390656, 8, e, t)
    }

    function Ii(e, t) {
        return Yl(2048, 8, e, t)
    }

    function ga(e, t) {
        return Yl(4, 2, e, t)
    }

    function ya(e, t) {
        return Yl(4, 4, e, t)
    }

    function wa(e, t) {
        if (typeof t == "function") return e = e(), t(e),
            function() {
                t(null)
            };
        if (t != null) return e = e(), t.current = e,
            function() {
                t.current = null
            }
    }

    function xa(e, t, n) {
        return n = n != null ? n.concat([e]) : null, Yl(4, 4, wa.bind(null, t, e), n)
    }

    function Ai() {}

    function Sa(e, t) {
        var n = ht();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && Mi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
    }

    function ka(e, t) {
        var n = ht();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && Mi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
    }

    function Ea(e, t, n) {
        return Cn & 21 ? (wt(n, t) || (n = bu(), Te.lanes |= n, Ln |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, nt = !0), e.memoizedState = n)
    }

    function Od(e, t) {
        var n = Se;
        Se = n !== 0 && 4 > n ? n : 4, e(!0);
        var r = zi.transition;
        zi.transition = {};
        try {
            e(!1), t()
        } finally {
            Se = n, zi.transition = r
        }
    }

    function Ca() {
        return ht().memoizedState
    }

    function Fd(e, t, n) {
        var r = cn(e);
        if (n = {
                lane: r,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, La(e)) Na(t, n);
        else if (n = na(e, t, n, r), n !== null) {
            var l = be();
            Ct(n, e, r, l), Pa(n, t, r)
        }
    }

    function Dd(e, t, n) {
        var r = cn(e),
            l = {
                lane: r,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
        if (La(e)) Na(t, l);
        else {
            var o = e.alternate;
            if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
                var u = t.lastRenderedState,
                    d = o(u, n);
                if (l.hasEagerState = !0, l.eagerState = d, wt(d, u)) {
                    var m = t.interleaved;
                    m === null ? (l.next = l, Li(t)) : (l.next = m.next, m.next = l), t.interleaved = l;
                    return
                }
            } catch {} finally {}
            n = na(e, t, l, r), n !== null && (l = be(), Ct(n, e, r, l), Pa(n, t, r))
        }
    }

    function La(e) {
        var t = e.alternate;
        return e === Te || t !== null && t === Te
    }

    function Na(e, t) {
        Ir = $l = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
    }

    function Pa(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, Bo(e, n)
        }
    }
    var Kl = {
            readContext: pt,
            useCallback: Xe,
            useContext: Xe,
            useEffect: Xe,
            useImperativeHandle: Xe,
            useInsertionEffect: Xe,
            useLayoutEffect: Xe,
            useMemo: Xe,
            useReducer: Xe,
            useRef: Xe,
            useState: Xe,
            useDebugValue: Xe,
            useDeferredValue: Xe,
            useTransition: Xe,
            useMutableSource: Xe,
            useSyncExternalStore: Xe,
            useId: Xe,
            unstable_isNewReconciler: !1
        },
        Id = {
            readContext: pt,
            useCallback: function(e, t) {
                return Mt().memoizedState = [e, t === void 0 ? null : t], e
            },
            useContext: pt,
            useEffect: va,
            useImperativeHandle: function(e, t, n) {
                return n = n != null ? n.concat([e]) : null, Ql(4194308, 4, wa.bind(null, t, e), n)
            },
            useLayoutEffect: function(e, t) {
                return Ql(4194308, 4, e, t)
            },
            useInsertionEffect: function(e, t) {
                return Ql(4, 2, e, t)
            },
            useMemo: function(e, t) {
                var n = Mt();
                return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
            },
            useReducer: function(e, t, n) {
                var r = Mt();
                return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                }, r.queue = e, e = e.dispatch = Fd.bind(null, Te, e), [r.memoizedState, e]
            },
            useRef: function(e) {
                var t = Mt();
                return e = {
                    current: e
                }, t.memoizedState = e
            },
            useState: ha,
            useDebugValue: Ai,
            useDeferredValue: function(e) {
                return Mt().memoizedState = e
            },
            useTransition: function() {
                var e = ha(!1),
                    t = e[0];
                return e = Od.bind(null, e[1]), Mt().memoizedState = e, [t, e]
            },
            useMutableSource: function() {},
            useSyncExternalStore: function(e, t, n) {
                var r = Te,
                    l = Mt();
                if (Pe) {
                    if (n === void 0) throw Error(s(407));
                    n = n()
                } else {
                    if (n = t(), Ve === null) throw Error(s(349));
                    Cn & 30 || aa(r, t, n)
                }
                l.memoizedState = n;
                var o = {
                    value: n,
                    getSnapshot: t
                };
                return l.queue = o, va(fa.bind(null, r, o, e), [e]), r.flags |= 2048, Br(9, ca.bind(null, r, o, n, t), void 0, null), n
            },
            useId: function() {
                var e = Mt(),
                    t = Ve.identifierPrefix;
                if (Pe) {
                    var n = At,
                        r = It;
                    n = (r & ~(1 << 32 - yt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ar++, 0 < n && (t += "H" + n.toString(32)), t += ":"
                } else n = _d++, t = ":" + t + "r" + n.toString(32) + ":";
                return e.memoizedState = t
            },
            unstable_isNewReconciler: !1
        },
        Ad = {
            readContext: pt,
            useCallback: Sa,
            useContext: pt,
            useEffect: Ii,
            useImperativeHandle: xa,
            useInsertionEffect: ga,
            useLayoutEffect: ya,
            useMemo: ka,
            useReducer: Fi,
            useRef: ma,
            useState: function() {
                return Fi(Ur)
            },
            useDebugValue: Ai,
            useDeferredValue: function(e) {
                var t = ht();
                return Ea(t, Ue.memoizedState, e)
            },
            useTransition: function() {
                var e = Fi(Ur)[0],
                    t = ht().memoizedState;
                return [e, t]
            },
            useMutableSource: ua,
            useSyncExternalStore: sa,
            useId: Ca,
            unstable_isNewReconciler: !1
        },
        Ud = {
            readContext: pt,
            useCallback: Sa,
            useContext: pt,
            useEffect: Ii,
            useImperativeHandle: xa,
            useInsertionEffect: ga,
            useLayoutEffect: ya,
            useMemo: ka,
            useReducer: Di,
            useRef: ma,
            useState: function() {
                return Di(Ur)
            },
            useDebugValue: Ai,
            useDeferredValue: function(e) {
                var t = ht();
                return Ue === null ? t.memoizedState = e : Ea(t, Ue.memoizedState, e)
            },
            useTransition: function() {
                var e = Di(Ur)[0],
                    t = ht().memoizedState;
                return [e, t]
            },
            useMutableSource: ua,
            useSyncExternalStore: sa,
            useId: Ca,
            unstable_isNewReconciler: !1
        };

    function St(e, t) {
        if (e && e.defaultProps) {
            t = $({}, t), e = e.defaultProps;
            for (var n in e) t[n] === void 0 && (t[n] = e[n]);
            return t
        }
        return t
    }

    function Ui(e, t, n, r) {
        t = e.memoizedState, n = n(r, t), n = n == null ? t : $({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
    }
    var Xl = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? gn(e) === e : !1
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = be(),
                l = cn(e),
                o = Bt(r, l);
            o.payload = t, n != null && (o.callback = n), t = on(e, o, l), t !== null && (Ct(t, e, l, r), Hl(t, e, l))
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = be(),
                l = cn(e),
                o = Bt(r, l);
            o.tag = 1, o.payload = t, n != null && (o.callback = n), t = on(e, o, l), t !== null && (Ct(t, e, l, r), Hl(t, e, l))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = be(),
                r = cn(e),
                l = Bt(n, r);
            l.tag = 2, t != null && (l.callback = t), t = on(e, l, r), t !== null && (Ct(t, e, r, n), Hl(t, e, r))
        }
    };

    function Ra(e, t, n, r, l, o, u) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, u) : t.prototype && t.prototype.isPureReactComponent ? !Nr(n, r) || !Nr(l, o) : !0
    }

    function ja(e, t, n) {
        var r = !1,
            l = nn,
            o = t.contextType;
        return typeof o == "object" && o !== null ? o = pt(o) : (l = tt(t) ? wn : Ke.current, r = t.contextTypes, o = (r = r != null) ? Vn(e, l) : nn), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Xl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t
    }

    function Ta(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Xl.enqueueReplaceState(t, t.state, null)
    }

    function Bi(e, t, n, r) {
        var l = e.stateNode;
        l.props = n, l.state = e.memoizedState, l.refs = {}, Ni(e);
        var o = t.contextType;
        typeof o == "object" && o !== null ? l.context = pt(o) : (o = tt(t) ? wn : Ke.current, l.context = Vn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Ui(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Xl.enqueueReplaceState(l, l.state, null), Wl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
    }

    function qn(e, t) {
        try {
            var n = "",
                r = t;
            do n += ie(r), r = r.return; while (r);
            var l = n
        } catch (o) {
            l = `
Error generating stack: ` + o.message + `
` + o.stack
        }
        return {
            value: e,
            source: t,
            stack: l,
            digest: null
        }
    }

    function Hi(e, t, n) {
        return {
            value: e,
            source: null,
            stack: n ?? null,
            digest: t ?? null
        }
    }

    function Wi(e, t) {
        try {
            console.error(t.value)
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }
    var Bd = typeof WeakMap == "function" ? WeakMap : Map;

    function za(e, t, n) {
        n = Bt(-1, n), n.tag = 3, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            no || (no = !0, ru = r), Wi(e, t)
        }, n
    }

    function Ma(e, t, n) {
        n = Bt(-1, n), n.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var l = t.value;
            n.payload = function() {
                return r(l)
            }, n.callback = function() {
                Wi(e, t)
            }
        }
        var o = e.stateNode;
        return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
            Wi(e, t), typeof r != "function" && (sn === null ? sn = new Set([this]) : sn.add(this));
            var u = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: u !== null ? u : ""
            })
        }), n
    }

    function _a(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new Bd;
            var l = new Set;
            r.set(t, l)
        } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
        l.has(n) || (l.add(n), e = e0.bind(null, e, t, n), t.then(e, e))
    }

    function Oa(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
            e = e.return
        } while (e !== null);
        return null
    }

    function Fa(e, t, n, r, l) {
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Bt(-1, 1), t.tag = 2, on(n, t, 1))), n.lanes |= 1), e)
    }
    var Hd = ee.ReactCurrentOwner,
        nt = !1;

    function Je(e, t, n, r) {
        t.child = e === null ? ta(t, null, n, r) : Yn(t, e.child, n, r)
    }

    function Da(e, t, n, r, l) {
        n = n.render;
        var o = t.ref;
        return Xn(t, l), r = _i(e, t, n, r, o, l), n = Oi(), e !== null && !nt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ht(e, t, l)) : (Pe && n && vi(t), t.flags |= 1, Je(e, t, r, l), t.child)
    }

    function Ia(e, t, n, r, l) {
        if (e === null) {
            var o = n.type;
            return typeof o == "function" && !cu(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Aa(e, t, o, r, l)) : (e = so(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
        }
        if (o = e.child, !(e.lanes & l)) {
            var u = o.memoizedProps;
            if (n = n.compare, n = n !== null ? n : Nr, n(u, r) && e.ref === t.ref) return Ht(e, t, l)
        }
        return t.flags |= 1, e = dn(o, r), e.ref = t.ref, e.return = t, t.child = e
    }

    function Aa(e, t, n, r, l) {
        if (e !== null) {
            var o = e.memoizedProps;
            if (Nr(o, r) && e.ref === t.ref)
                if (nt = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (nt = !0);
                else return t.lanes = e.lanes, Ht(e, t, l)
        }
        return Vi(e, t, n, r, l)
    }

    function Ua(e, t, n) {
        var r = t.pendingProps,
            l = r.children,
            o = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden")
            if (!(t.mode & 1)) t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, ke(bn, at), at |= n;
            else {
                if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                }, t.updateQueue = null, ke(bn, at), at |= e, null;
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, r = o !== null ? o.baseLanes : n, ke(bn, at), at |= r
            }
        else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, ke(bn, at), at |= r;
        return Je(e, t, l, n), t.child
    }

    function Ba(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
    }

    function Vi(e, t, n, r, l) {
        var o = tt(n) ? wn : Ke.current;
        return o = Vn(t, o), Xn(t, l), n = _i(e, t, n, r, o, l), r = Oi(), e !== null && !nt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ht(e, t, l)) : (Pe && r && vi(t), t.flags |= 1, Je(e, t, n, l), t.child)
    }

    function Ha(e, t, n, r, l) {
        if (tt(n)) {
            var o = !0;
            _l(t)
        } else o = !1;
        if (Xn(t, l), t.stateNode === null) ql(e, t), ja(t, n, r), Bi(t, n, r, l), r = !0;
        else if (e === null) {
            var u = t.stateNode,
                d = t.memoizedProps;
            u.props = d;
            var m = u.context,
                L = n.contextType;
            typeof L == "object" && L !== null ? L = pt(L) : (L = tt(n) ? wn : Ke.current, L = Vn(t, L));
            var O = n.getDerivedStateFromProps,
                D = typeof O == "function" || typeof u.getSnapshotBeforeUpdate == "function";
            D || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (d !== r || m !== L) && Ta(t, u, r, L), ln = !1;
            var _ = t.memoizedState;
            u.state = _, Wl(t, r, u, l), m = t.memoizedState, d !== r || _ !== m || et.current || ln ? (typeof O == "function" && (Ui(t, n, O, r), m = t.memoizedState), (d = ln || Ra(t, n, d, r, _, m, L)) ? (D || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = m), u.props = r, u.state = m, u.context = L, r = d) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
        } else {
            u = t.stateNode, ra(e, t), d = t.memoizedProps, L = t.type === t.elementType ? d : St(t.type, d), u.props = L, D = t.pendingProps, _ = u.context, m = n.contextType, typeof m == "object" && m !== null ? m = pt(m) : (m = tt(n) ? wn : Ke.current, m = Vn(t, m));
            var Q = n.getDerivedStateFromProps;
            (O = typeof Q == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (d !== D || _ !== m) && Ta(t, u, r, m), ln = !1, _ = t.memoizedState, u.state = _, Wl(t, r, u, l);
            var X = t.memoizedState;
            d !== D || _ !== X || et.current || ln ? (typeof Q == "function" && (Ui(t, n, Q, r), X = t.memoizedState), (L = ln || Ra(t, n, L, r, _, X, m) || !1) ? (O || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, X, m), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, X, m)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || d === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = X), u.props = r, u.state = X, u.context = m, r = L) : (typeof u.componentDidUpdate != "function" || d === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), r = !1)
        }
        return Gi(e, t, n, r, o, l)
    }

    function Gi(e, t, n, r, l, o) {
        Ba(e, t);
        var u = (t.flags & 128) !== 0;
        if (!r && !u) return l && Qs(t, n, !1), Ht(e, t, o);
        r = t.stateNode, Hd.current = t;
        var d = u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && u ? (t.child = Yn(t, e.child, null, o), t.child = Yn(t, null, d, o)) : Je(e, t, d, o), t.memoizedState = r.state, l && Qs(t, n, !0), t.child
    }

    function Wa(e) {
        var t = e.stateNode;
        t.pendingContext ? Gs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Gs(e, t.context, !1), Pi(e, t.containerInfo)
    }

    function Va(e, t, n, r, l) {
        return Qn(), xi(l), t.flags |= 256, Je(e, t, n, r), t.child
    }
    var $i = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };

    function Qi(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }
    }

    function Ga(e, t, n) {
        var r = t.pendingProps,
            l = je.current,
            o = !1,
            u = (t.flags & 128) !== 0,
            d;
        if ((d = u) || (d = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), d ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ke(je, l & 1), e === null) return wi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (u = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, u = {
            mode: "hidden",
            children: u
        }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = u) : o = ao(u, r, 0, null), e = jn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Qi(n), t.memoizedState = $i, e) : Yi(t, u));
        if (l = e.memoizedState, l !== null && (d = l.dehydrated, d !== null)) return Wd(e, t, u, r, d, l, n);
        if (o) {
            o = r.fallback, u = t.mode, l = e.child, d = l.sibling;
            var m = {
                mode: "hidden",
                children: r.children
            };
            return !(u & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = m, t.deletions = null) : (r = dn(l, m), r.subtreeFlags = l.subtreeFlags & 14680064), d !== null ? o = dn(d, o) : (o = jn(o, u, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, u = e.child.memoizedState, u = u === null ? Qi(n) : {
                baseLanes: u.baseLanes | n,
                cachePool: null,
                transitions: u.transitions
            }, o.memoizedState = u, o.childLanes = e.childLanes & ~n, t.memoizedState = $i, r
        }
        return o = e.child, e = o.sibling, r = dn(o, {
            mode: "visible",
            children: r.children
        }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
    }

    function Yi(e, t) {
        return t = ao({
            mode: "visible",
            children: t
        }, e.mode, 0, null), t.return = e, e.child = t
    }

    function Zl(e, t, n, r) {
        return r !== null && xi(r), Yn(t, e.child, null, n), e = Yi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
    }

    function Wd(e, t, n, r, l, o, u) {
        if (n) return t.flags & 256 ? (t.flags &= -257, r = Hi(Error(s(422))), Zl(e, t, u, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = ao({
            mode: "visible",
            children: r.children
        }, l, 0, null), o = jn(o, l, u, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Yn(t, e.child, null, u), t.child.memoizedState = Qi(u), t.memoizedState = $i, o);
        if (!(t.mode & 1)) return Zl(e, t, u, null);
        if (l.data === "$!") {
            if (r = l.nextSibling && l.nextSibling.dataset, r) var d = r.dgst;
            return r = d, o = Error(s(419)), r = Hi(o, r, void 0), Zl(e, t, u, r)
        }
        if (d = (u & e.childLanes) !== 0, nt || d) {
            if (r = Ve, r !== null) {
                switch (u & -u) {
                    case 4:
                        l = 2;
                        break;
                    case 16:
                        l = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        l = 32;
                        break;
                    case 536870912:
                        l = 268435456;
                        break;
                    default:
                        l = 0
                }
                l = l & (r.suspendedLanes | u) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Ut(e, l), Ct(r, e, l, -1))
            }
            return au(), r = Hi(Error(s(421))), Zl(e, t, u, r)
        }
        return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = t0.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, st = en(l.nextSibling), ut = t, Pe = !0, xt = null, e !== null && (ft[dt++] = It, ft[dt++] = At, ft[dt++] = xn, It = e.id, At = e.overflow, xn = t), t = Yi(t, r.children), t.flags |= 4096, t)
    }

    function $a(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), Ci(e.return, t, n)
    }

    function Ki(e, t, n, r, l) {
        var o = e.memoizedState;
        o === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: l
        } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l)
    }

    function Qa(e, t, n) {
        var r = t.pendingProps,
            l = r.revealOrder,
            o = r.tail;
        if (Je(e, t, r.children, n), r = je.current, r & 2) r = r & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
                if (e.tag === 13) e.memoizedState !== null && $a(e, n, t);
                else if (e.tag === 19) $a(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            r &= 1
        }
        if (ke(je, r), !(t.mode & 1)) t.memoizedState = null;
        else switch (l) {
            case "forwards":
                for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && Vl(e) === null && (l = n), n = n.sibling;
                n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Ki(t, !1, l, n, o);
                break;
            case "backwards":
                for (n = null, l = t.child, t.child = null; l !== null;) {
                    if (e = l.alternate, e !== null && Vl(e) === null) {
                        t.child = l;
                        break
                    }
                    e = l.sibling, l.sibling = n, n = l, l = e
                }
                Ki(t, !0, n, null, o);
                break;
            case "together":
                Ki(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function ql(e, t) {
        !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
    }

    function Ht(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), Ln |= t.lanes, !(n & t.childLanes)) return null;
        if (e !== null && t.child !== e.child) throw Error(s(153));
        if (t.child !== null) {
            for (e = t.child, n = dn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = dn(e, e.pendingProps), n.return = t;
            n.sibling = null
        }
        return t.child
    }

    function Vd(e, t, n) {
        switch (t.tag) {
            case 3:
                Wa(t), Qn();
                break;
            case 5:
                ia(t);
                break;
            case 1:
                tt(t.type) && _l(t);
                break;
            case 4:
                Pi(t, t.stateNode.containerInfo);
                break;
            case 10:
                var r = t.type._context,
                    l = t.memoizedProps.value;
                ke(Ul, r._currentValue), r._currentValue = l;
                break;
            case 13:
                if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (ke(je, je.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ga(e, t, n) : (ke(je, je.current & 1), e = Ht(e, t, n), e !== null ? e.sibling : null);
                ke(je, je.current & 1);
                break;
            case 19:
                if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                    if (r) return Qa(e, t, n);
                    t.flags |= 128
                }
                if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ke(je, je.current), r) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, Ua(e, t, n)
        }
        return Ht(e, t, n)
    }
    var Ya, Xi, Ka, Xa;
    Ya = function(e, t) {
        for (var n = t.child; n !== null;) {
            if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
            else if (n.tag !== 4 && n.child !== null) {
                n.child.return = n, n = n.child;
                continue
            }
            if (n === t) break;
            for (; n.sibling === null;) {
                if (n.return === null || n.return === t) return;
                n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
        }
    }, Xi = function() {}, Ka = function(e, t, n, r) {
        var l = e.memoizedProps;
        if (l !== r) {
            e = t.stateNode, En(zt.current);
            var o = null;
            switch (n) {
                case "input":
                    l = rr(e, l), r = rr(e, r), o = [];
                    break;
                case "select":
                    l = $({}, l, {
                        value: void 0
                    }), r = $({}, r, {
                        value: void 0
                    }), o = [];
                    break;
                case "textarea":
                    l = ur(e, l), r = ur(e, r), o = [];
                    break;
                default:
                    typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Tl)
            }
            Yt(n, r);
            var u;
            n = null;
            for (L in l)
                if (!r.hasOwnProperty(L) && l.hasOwnProperty(L) && l[L] != null)
                    if (L === "style") {
                        var d = l[L];
                        for (u in d) d.hasOwnProperty(u) && (n || (n = {}), n[u] = "")
                    } else L !== "dangerouslySetInnerHTML" && L !== "children" && L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && L !== "autoFocus" && (c.hasOwnProperty(L) ? o || (o = []) : (o = o || []).push(L, null));
            for (L in r) {
                var m = r[L];
                if (d = l != null ? l[L] : void 0, r.hasOwnProperty(L) && m !== d && (m != null || d != null))
                    if (L === "style")
                        if (d) {
                            for (u in d) !d.hasOwnProperty(u) || m && m.hasOwnProperty(u) || (n || (n = {}), n[u] = "");
                            for (u in m) m.hasOwnProperty(u) && d[u] !== m[u] && (n || (n = {}), n[u] = m[u])
                        } else n || (o || (o = []), o.push(L, n)), n = m;
                else L === "dangerouslySetInnerHTML" ? (m = m ? m.__html : void 0, d = d ? d.__html : void 0, m != null && d !== m && (o = o || []).push(L, m)) : L === "children" ? typeof m != "string" && typeof m != "number" || (o = o || []).push(L, "" + m) : L !== "suppressContentEditableWarning" && L !== "suppressHydrationWarning" && (c.hasOwnProperty(L) ? (m != null && L === "onScroll" && Ce("scroll", e), o || d === m || (o = [])) : (o = o || []).push(L, m))
            }
            n && (o = o || []).push("style", n);
            var L = o;
            (t.updateQueue = L) && (t.flags |= 4)
        }
    }, Xa = function(e, t, n, r) {
        n !== r && (t.flags |= 4)
    };

    function Hr(e, t) {
        if (!Pe) switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
    }

    function Ze(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            n = 0,
            r = 0;
        if (t)
            for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
        else
            for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t
    }

    function Gd(e, t, n) {
        var r = t.pendingProps;
        switch (gi(t), t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return Ze(t), null;
            case 1:
                return tt(t.type) && Ml(), Ze(t), null;
            case 3:
                return r = t.stateNode, Zn(), Le(et), Le(Ke), Ti(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Il(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, xt !== null && (iu(xt), xt = null))), Xi(e, t), Ze(t), null;
            case 5:
                Ri(t);
                var l = En(Dr.current);
                if (n = t.type, e !== null && t.stateNode != null) Ka(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(s(166));
                        return Ze(t), null
                    }
                    if (e = En(zt.current), Il(t)) {
                        r = t.stateNode, n = t.type;
                        var o = t.memoizedProps;
                        switch (r[Tt] = t, r[zr] = o, e = (t.mode & 1) !== 0, n) {
                            case "dialog":
                                Ce("cancel", r), Ce("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Ce("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < Rr.length; l++) Ce(Rr[l], r);
                                break;
                            case "source":
                                Ce("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Ce("error", r), Ce("load", r);
                                break;
                            case "details":
                                Ce("toggle", r);
                                break;
                            case "input":
                                ll(r, o), Ce("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!o.multiple
                                }, Ce("invalid", r);
                                break;
                            case "textarea":
                                ol(r, o), Ce("invalid", r)
                        }
                        Yt(n, o), l = null;
                        for (var u in o)
                            if (o.hasOwnProperty(u)) {
                                var d = o[u];
                                u === "children" ? typeof d == "string" ? r.textContent !== d && (o.suppressHydrationWarning !== !0 && jl(r.textContent, d, e), l = ["children", d]) : typeof d == "number" && r.textContent !== "" + d && (o.suppressHydrationWarning !== !0 && jl(r.textContent, d, e), l = ["children", "" + d]) : c.hasOwnProperty(u) && d != null && u === "onScroll" && Ce("scroll", r)
                            }
                        switch (n) {
                            case "input":
                                Tn(r), ir(r, o, !0);
                                break;
                            case "textarea":
                                Tn(r), ul(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof o.onClick == "function" && (r.onclick = Tl)
                        }
                        r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
                    } else {
                        u = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = sl(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = u.createElement(n, {
                            is: r.is
                        }) : (e = u.createElement(n), n === "select" && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[Tt] = t, e[zr] = r, Ya(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch (u = ar(n, r), n) {
                                case "dialog":
                                    Ce("cancel", e), Ce("close", e), l = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    Ce("load", e), l = r;
                                    break;
                                case "video":
                                case "audio":
                                    for (l = 0; l < Rr.length; l++) Ce(Rr[l], e);
                                    l = r;
                                    break;
                                case "source":
                                    Ce("error", e), l = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    Ce("error", e), Ce("load", e), l = r;
                                    break;
                                case "details":
                                    Ce("toggle", e), l = r;
                                    break;
                                case "input":
                                    ll(e, r), l = rr(e, r), Ce("invalid", e);
                                    break;
                                case "option":
                                    l = r;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!r.multiple
                                    }, l = $({}, r, {
                                        value: void 0
                                    }), Ce("invalid", e);
                                    break;
                                case "textarea":
                                    ol(e, r), l = ur(e, r), Ce("invalid", e);
                                    break;
                                default:
                                    l = r
                            }
                            Yt(n, l),
                            d = l;
                            for (o in d)
                                if (d.hasOwnProperty(o)) {
                                    var m = d[o];
                                    o === "style" ? Nt(e, m) : o === "dangerouslySetInnerHTML" ? (m = m ? m.__html : void 0, m != null && h(e, m)) : o === "children" ? typeof m == "string" ? (n !== "textarea" || m !== "") && H(e, m) : typeof m == "number" && H(e, "" + m) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (c.hasOwnProperty(o) ? m != null && o === "onScroll" && Ce("scroll", e) : m != null && Y(e, o, m, u))
                                }
                            switch (n) {
                                case "input":
                                    Tn(e), ir(e, r, !1);
                                    break;
                                case "textarea":
                                    Tn(e), ul(e);
                                    break;
                                case "option":
                                    r.value != null && e.setAttribute("value", "" + ve(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, o = r.value, o != null ? Lt(e, !!r.multiple, o, !1) : r.defaultValue != null && Lt(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    typeof l.onClick == "function" && (e.onclick = Tl)
                            }
                            switch (n) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    r = !!r.autoFocus;
                                    break e;
                                case "img":
                                    r = !0;
                                    break e;
                                default:
                                    r = !1
                            }
                        }
                        r && (t.flags |= 4)
                    }
                    t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
                }
                return Ze(t), null;
            case 6:
                if (e && t.stateNode != null) Xa(e, t, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && t.stateNode === null) throw Error(s(166));
                    if (n = En(Dr.current), En(zt.current), Il(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[Tt] = t, (o = r.nodeValue !== n) && (e = ut, e !== null)) switch (e.tag) {
                            case 3:
                                jl(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && jl(r.nodeValue, n, (e.mode & 1) !== 0)
                        }
                        o && (t.flags |= 4)
                    } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Tt] = t, t.stateNode = r
                }
                return Ze(t), null;
            case 13:
                if (Le(je), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (Pe && st !== null && t.mode & 1 && !(t.flags & 128)) Js(), Qn(), t.flags |= 98560, o = !1;
                    else if (o = Il(t), r !== null && r.dehydrated !== null) {
                        if (e === null) {
                            if (!o) throw Error(s(318));
                            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(s(317));
                            o[Tt] = t
                        } else Qn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                        Ze(t), o = !1
                    } else xt !== null && (iu(xt), xt = null), o = !0;
                    if (!o) return t.flags & 65536 ? t : null
                }
                return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || je.current & 1 ? Be === 0 && (Be = 3) : au())), t.updateQueue !== null && (t.flags |= 4), Ze(t), null);
            case 4:
                return Zn(), Xi(e, t), e === null && jr(t.stateNode.containerInfo), Ze(t), null;
            case 10:
                return Ei(t.type._context), Ze(t), null;
            case 17:
                return tt(t.type) && Ml(), Ze(t), null;
            case 19:
                if (Le(je), o = t.memoizedState, o === null) return Ze(t), null;
                if (r = (t.flags & 128) !== 0, u = o.rendering, u === null)
                    if (r) Hr(o, !1);
                    else {
                        if (Be !== 0 || e !== null && e.flags & 128)
                            for (e = t.child; e !== null;) {
                                if (u = Vl(e), u !== null) {
                                    for (t.flags |= 128, Hr(o, !1), r = u.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, u = o.alternate, u === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = u.childLanes, o.lanes = u.lanes, o.child = u.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = u.memoizedProps, o.memoizedState = u.memoizedState, o.updateQueue = u.updateQueue, o.type = u.type, e = u.dependencies, o.dependencies = e === null ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }), n = n.sibling;
                                    return ke(je, je.current & 1 | 2), t.child
                                }
                                e = e.sibling
                            }
                        o.tail !== null && Fe() > er && (t.flags |= 128, r = !0, Hr(o, !1), t.lanes = 4194304)
                    }
                else {
                    if (!r)
                        if (e = Vl(u), e !== null) {
                            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Hr(o, !0), o.tail === null && o.tailMode === "hidden" && !u.alternate && !Pe) return Ze(t), null
                        } else 2 * Fe() - o.renderingStartTime > er && n !== 1073741824 && (t.flags |= 128, r = !0, Hr(o, !1), t.lanes = 4194304);
                    o.isBackwards ? (u.sibling = t.child, t.child = u) : (n = o.last, n !== null ? n.sibling = u : t.child = u, o.last = u)
                }
                return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Fe(), t.sibling = null, n = je.current, ke(je, r ? n & 1 | 2 : n & 1), t) : (Ze(t), null);
            case 22:
            case 23:
                return su(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? at & 1073741824 && (Ze(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ze(t), null;
            case 24:
                return null;
            case 25:
                return null
        }
        throw Error(s(156, t.tag))
    }

    function $d(e, t) {
        switch (gi(t), t.tag) {
            case 1:
                return tt(t.type) && Ml(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return Zn(), Le(et), Le(Ke), Ti(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return Ri(t), null;
            case 13:
                if (Le(je), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(s(340));
                    Qn()
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return Le(je), null;
            case 4:
                return Zn(), null;
            case 10:
                return Ei(t.type._context), null;
            case 22:
            case 23:
                return su(), null;
            case 24:
                return null;
            default:
                return null
        }
    }
    var Jl = !1,
        qe = !1,
        Qd = typeof WeakSet == "function" ? WeakSet : Set,
        K = null;

    function Jn(e, t) {
        var n = e.ref;
        if (n !== null)
            if (typeof n == "function") try {
                n(null)
            } catch (r) {
                _e(e, t, r)
            } else n.current = null
    }

    function Zi(e, t, n) {
        try {
            n()
        } catch (r) {
            _e(e, t, r)
        }
    }
    var Za = !1;

    function Yd(e, t) {
        if (si = yl, e = Rs(), ei(e)) {
            if ("selectionStart" in e) var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
            else e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset,
                        o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var u = 0,
                        d = -1,
                        m = -1,
                        L = 0,
                        O = 0,
                        D = e,
                        _ = null;
                    t: for (;;) {
                        for (var Q; D !== n || l !== 0 && D.nodeType !== 3 || (d = u + l), D !== o || r !== 0 && D.nodeType !== 3 || (m = u + r), D.nodeType === 3 && (u += D.nodeValue.length), (Q = D.firstChild) !== null;) _ = D, D = Q;
                        for (;;) {
                            if (D === e) break t;
                            if (_ === n && ++L === l && (d = u), _ === o && ++O === r && (m = u), (Q = D.nextSibling) !== null) break;
                            D = _, _ = D.parentNode
                        }
                        D = Q
                    }
                    n = d === -1 || m === -1 ? null : {
                        start: d,
                        end: m
                    }
                } else n = null
            }
            n = n || {
                start: 0,
                end: 0
            }
        } else n = null;
        for (ai = {
                focusedElem: e,
                selectionRange: n
            }, yl = !1, K = t; K !== null;)
            if (t = K, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, K = e;
            else
                for (; K !== null;) {
                    t = K;
                    try {
                        var X = t.alternate;
                        if (t.flags & 1024) switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (X !== null) {
                                    var J = X.memoizedProps,
                                        De = X.memoizedState,
                                        k = t.stateNode,
                                        y = k.getSnapshotBeforeUpdate(t.elementType === t.type ? J : St(t.type, J), De);
                                    k.__reactInternalSnapshotBeforeUpdate = y
                                }
                                break;
                            case 3:
                                var E = t.stateNode.containerInfo;
                                E.nodeType === 1 ? E.textContent = "" : E.nodeType === 9 && E.documentElement && E.removeChild(E.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(s(163))
                        }
                    } catch (B) {
                        _e(t, t.return, B)
                    }
                    if (e = t.sibling, e !== null) {
                        e.return = t.return, K = e;
                        break
                    }
                    K = t.return
                }
        return X = Za, Za = !1, X
    }

    function Wr(e, t, n) {
        var r = t.updateQueue;
        if (r = r !== null ? r.lastEffect : null, r !== null) {
            var l = r = r.next;
            do {
                if ((l.tag & e) === e) {
                    var o = l.destroy;
                    l.destroy = void 0, o !== void 0 && Zi(t, n, o)
                }
                l = l.next
            } while (l !== r)
        }
    }

    function bl(e, t) {
        if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var r = n.create;
                    n.destroy = r()
                }
                n = n.next
            } while (n !== t)
        }
    }

    function qi(e) {
        var t = e.ref;
        if (t !== null) {
            var n = e.stateNode;
            switch (e.tag) {
                case 5:
                    e = n;
                    break;
                default:
                    e = n
            }
            typeof t == "function" ? t(e) : t.current = e
        }
    }

    function qa(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, qa(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Tt], delete t[zr], delete t[pi], delete t[jd], delete t[Td])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }

    function Ja(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4
    }

    function ba(e) {
        e: for (;;) {
            for (; e.sibling === null;) {
                if (e.return === null || Ja(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child
            }
            if (!(e.flags & 2)) return e.stateNode
        }
    }

    function Ji(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Tl));
        else if (r !== 4 && (e = e.child, e !== null))
            for (Ji(e, t, n), e = e.sibling; e !== null;) Ji(e, t, n), e = e.sibling
    }

    function bi(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null))
            for (bi(e, t, n), e = e.sibling; e !== null;) bi(e, t, n), e = e.sibling
    }
    var Qe = null,
        kt = !1;

    function un(e, t, n) {
        for (n = n.child; n !== null;) ec(e, t, n), n = n.sibling
    }

    function ec(e, t, n) {
        if (jt && typeof jt.onCommitFiberUnmount == "function") try {
            jt.onCommitFiberUnmount(dl, n)
        } catch {}
        switch (n.tag) {
            case 5:
                qe || Jn(n, t);
            case 6:
                var r = Qe,
                    l = kt;
                Qe = null, un(e, t, n), Qe = r, kt = l, Qe !== null && (kt ? (e = Qe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Qe.removeChild(n.stateNode));
                break;
            case 18:
                Qe !== null && (kt ? (e = Qe, n = n.stateNode, e.nodeType === 8 ? di(e.parentNode, n) : e.nodeType === 1 && di(e, n), xr(e)) : di(Qe, n.stateNode));
                break;
            case 4:
                r = Qe, l = kt, Qe = n.stateNode.containerInfo, kt = !0, un(e, t, n), Qe = r, kt = l;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!qe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                    l = r = r.next;
                    do {
                        var o = l,
                            u = o.destroy;
                        o = o.tag, u !== void 0 && (o & 2 || o & 4) && Zi(n, t, u), l = l.next
                    } while (l !== r)
                }
                un(e, t, n);
                break;
            case 1:
                if (!qe && (Jn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                    r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
                } catch (d) {
                    _e(n, t, d)
                }
                un(e, t, n);
                break;
            case 21:
                un(e, t, n);
                break;
            case 22:
                n.mode & 1 ? (qe = (r = qe) || n.memoizedState !== null, un(e, t, n), qe = r) : un(e, t, n);
                break;
            default:
                un(e, t, n)
        }
    }

    function tc(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new Qd), t.forEach(function(r) {
                var l = n0.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(l, l))
            })
        }
    }

    function Et(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var r = 0; r < n.length; r++) {
                var l = n[r];
                try {
                    var o = e,
                        u = t,
                        d = u;
                    e: for (; d !== null;) {
                        switch (d.tag) {
                            case 5:
                                Qe = d.stateNode, kt = !1;
                                break e;
                            case 3:
                                Qe = d.stateNode.containerInfo, kt = !0;
                                break e;
                            case 4:
                                Qe = d.stateNode.containerInfo, kt = !0;
                                break e
                        }
                        d = d.return
                    }
                    if (Qe === null) throw Error(s(160));
                    ec(o, u, l), Qe = null, kt = !1;
                    var m = l.alternate;
                    m !== null && (m.return = null), l.return = null
                } catch (L) {
                    _e(l, t, L)
                }
            }
        if (t.subtreeFlags & 12854)
            for (t = t.child; t !== null;) nc(t, e), t = t.sibling
    }

    function nc(e, t) {
        var n = e.alternate,
            r = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (Et(t, e), _t(e), r & 4) {
                    try {
                        Wr(3, e, e.return), bl(3, e)
                    } catch (J) {
                        _e(e, e.return, J)
                    }
                    try {
                        Wr(5, e, e.return)
                    } catch (J) {
                        _e(e, e.return, J)
                    }
                }
                break;
            case 1:
                Et(t, e), _t(e), r & 512 && n !== null && Jn(n, n.return);
                break;
            case 5:
                if (Et(t, e), _t(e), r & 512 && n !== null && Jn(n, n.return), e.flags & 32) {
                    var l = e.stateNode;
                    try {
                        H(l, "")
                    } catch (J) {
                        _e(e, e.return, J)
                    }
                }
                if (r & 4 && (l = e.stateNode, l != null)) {
                    var o = e.memoizedProps,
                        u = n !== null ? n.memoizedProps : o,
                        d = e.type,
                        m = e.updateQueue;
                    if (e.updateQueue = null, m !== null) try {
                        d === "input" && o.type === "radio" && o.name != null && lr(l, o), ar(d, u);
                        var L = ar(d, o);
                        for (u = 0; u < m.length; u += 2) {
                            var O = m[u],
                                D = m[u + 1];
                            O === "style" ? Nt(l, D) : O === "dangerouslySetInnerHTML" ? h(l, D) : O === "children" ? H(l, D) : Y(l, O, D, L)
                        }
                        switch (d) {
                            case "input":
                                or(l, o);
                                break;
                            case "textarea":
                                il(l, o);
                                break;
                            case "select":
                                var _ = l._wrapperState.wasMultiple;
                                l._wrapperState.wasMultiple = !!o.multiple;
                                var Q = o.value;
                                Q != null ? Lt(l, !!o.multiple, Q, !1) : _ !== !!o.multiple && (o.defaultValue != null ? Lt(l, !!o.multiple, o.defaultValue, !0) : Lt(l, !!o.multiple, o.multiple ? [] : "", !1))
                        }
                        l[zr] = o
                    } catch (J) {
                        _e(e, e.return, J)
                    }
                }
                break;
            case 6:
                if (Et(t, e), _t(e), r & 4) {
                    if (e.stateNode === null) throw Error(s(162));
                    l = e.stateNode, o = e.memoizedProps;
                    try {
                        l.nodeValue = o
                    } catch (J) {
                        _e(e, e.return, J)
                    }
                }
                break;
            case 3:
                if (Et(t, e), _t(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    xr(t.containerInfo)
                } catch (J) {
                    _e(e, e.return, J)
                }
                break;
            case 4:
                Et(t, e), _t(e);
                break;
            case 13:
                Et(t, e), _t(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (nu = Fe())), r & 4 && tc(e);
                break;
            case 22:
                if (O = n !== null && n.memoizedState !== null, e.mode & 1 ? (qe = (L = qe) || O, Et(t, e), qe = L) : Et(t, e), _t(e), r & 8192) {
                    if (L = e.memoizedState !== null, (e.stateNode.isHidden = L) && !O && e.mode & 1)
                        for (K = e, O = e.child; O !== null;) {
                            for (D = K = O; K !== null;) {
                                switch (_ = K, Q = _.child, _.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        Wr(4, _, _.return);
                                        break;
                                    case 1:
                                        Jn(_, _.return);
                                        var X = _.stateNode;
                                        if (typeof X.componentWillUnmount == "function") {
                                            r = _, n = _.return;
                                            try {
                                                t = r, X.props = t.memoizedProps, X.state = t.memoizedState, X.componentWillUnmount()
                                            } catch (J) {
                                                _e(r, n, J)
                                            }
                                        }
                                        break;
                                    case 5:
                                        Jn(_, _.return);
                                        break;
                                    case 22:
                                        if (_.memoizedState !== null) {
                                            oc(D);
                                            continue
                                        }
                                }
                                Q !== null ? (Q.return = _, K = Q) : oc(D)
                            }
                            O = O.sibling
                        }
                    e: for (O = null, D = e;;) {
                        if (D.tag === 5) {
                            if (O === null) {
                                O = D;
                                try {
                                    l = D.stateNode, L ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (d = D.stateNode, m = D.memoizedProps.style, u = m != null && m.hasOwnProperty("display") ? m.display : null, d.style.display = ct("display", u))
                                } catch (J) {
                                    _e(e, e.return, J)
                                }
                            }
                        } else if (D.tag === 6) {
                            if (O === null) try {
                                D.stateNode.nodeValue = L ? "" : D.memoizedProps
                            } catch (J) {
                                _e(e, e.return, J)
                            }
                        } else if ((D.tag !== 22 && D.tag !== 23 || D.memoizedState === null || D === e) && D.child !== null) {
                            D.child.return = D, D = D.child;
                            continue
                        }
                        if (D === e) break e;
                        for (; D.sibling === null;) {
                            if (D.return === null || D.return === e) break e;
                            O === D && (O = null), D = D.return
                        }
                        O === D && (O = null), D.sibling.return = D.return, D = D.sibling
                    }
                }
                break;
            case 19:
                Et(t, e), _t(e), r & 4 && tc(e);
                break;
            case 21:
                break;
            default:
                Et(t, e), _t(e)
        }
    }

    function _t(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for (var n = e.return; n !== null;) {
                        if (Ja(n)) {
                            var r = n;
                            break e
                        }
                        n = n.return
                    }
                    throw Error(s(160))
                }
                switch (r.tag) {
                    case 5:
                        var l = r.stateNode;
                        r.flags & 32 && (H(l, ""), r.flags &= -33);
                        var o = ba(e);
                        bi(e, o, l);
                        break;
                    case 3:
                    case 4:
                        var u = r.stateNode.containerInfo,
                            d = ba(e);
                        Ji(e, d, u);
                        break;
                    default:
                        throw Error(s(161))
                }
            }
            catch (m) {
                _e(e, e.return, m)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }

    function Kd(e, t, n) {
        K = e, rc(e)
    }

    function rc(e, t, n) {
        for (var r = (e.mode & 1) !== 0; K !== null;) {
            var l = K,
                o = l.child;
            if (l.tag === 22 && r) {
                var u = l.memoizedState !== null || Jl;
                if (!u) {
                    var d = l.alternate,
                        m = d !== null && d.memoizedState !== null || qe;
                    d = Jl;
                    var L = qe;
                    if (Jl = u, (qe = m) && !L)
                        for (K = l; K !== null;) u = K, m = u.child, u.tag === 22 && u.memoizedState !== null ? ic(l) : m !== null ? (m.return = u, K = m) : ic(l);
                    for (; o !== null;) K = o, rc(o), o = o.sibling;
                    K = l, Jl = d, qe = L
                }
                lc(e)
            } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, K = o) : lc(e)
        }
    }

    function lc(e) {
        for (; K !== null;) {
            var t = K;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            qe || bl(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !qe)
                                if (n === null) r.componentDidMount();
                                else {
                                    var l = t.elementType === t.type ? n.memoizedProps : St(t.type, n.memoizedProps);
                                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                }
                            var o = t.updateQueue;
                            o !== null && oa(t, o, r);
                            break;
                        case 3:
                            var u = t.updateQueue;
                            if (u !== null) {
                                if (n = null, t.child !== null) switch (t.child.tag) {
                                    case 5:
                                        n = t.child.stateNode;
                                        break;
                                    case 1:
                                        n = t.child.stateNode
                                }
                                oa(t, u, n)
                            }
                            break;
                        case 5:
                            var d = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = d;
                                var m = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        m.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        m.src && (n.src = m.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var L = t.alternate;
                                if (L !== null) {
                                    var O = L.memoizedState;
                                    if (O !== null) {
                                        var D = O.dehydrated;
                                        D !== null && xr(D)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(s(163))
                    }
                    qe || t.flags & 512 && qi(t)
                } catch (_) {
                    _e(t, t.return, _)
                }
            }
            if (t === e) {
                K = null;
                break
            }
            if (n = t.sibling, n !== null) {
                n.return = t.return, K = n;
                break
            }
            K = t.return
        }
    }

    function oc(e) {
        for (; K !== null;) {
            var t = K;
            if (t === e) {
                K = null;
                break
            }
            var n = t.sibling;
            if (n !== null) {
                n.return = t.return, K = n;
                break
            }
            K = t.return
        }
    }

    function ic(e) {
        for (; K !== null;) {
            var t = K;
            try {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            bl(4, t)
                        } catch (m) {
                            _e(t, n, m)
                        }
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (typeof r.componentDidMount == "function") {
                            var l = t.return;
                            try {
                                r.componentDidMount()
                            } catch (m) {
                                _e(t, l, m)
                            }
                        }
                        var o = t.return;
                        try {
                            qi(t)
                        } catch (m) {
                            _e(t, o, m)
                        }
                        break;
                    case 5:
                        var u = t.return;
                        try {
                            qi(t)
                        } catch (m) {
                            _e(t, u, m)
                        }
                }
            } catch (m) {
                _e(t, t.return, m)
            }
            if (t === e) {
                K = null;
                break
            }
            var d = t.sibling;
            if (d !== null) {
                d.return = t.return, K = d;
                break
            }
            K = t.return
        }
    }
    var Xd = Math.ceil,
        eo = ee.ReactCurrentDispatcher,
        eu = ee.ReactCurrentOwner,
        mt = ee.ReactCurrentBatchConfig,
        me = 0,
        Ve = null,
        Ie = null,
        Ye = 0,
        at = 0,
        bn = tn(0),
        Be = 0,
        Vr = null,
        Ln = 0,
        to = 0,
        tu = 0,
        Gr = null,
        rt = null,
        nu = 0,
        er = 1 / 0,
        Wt = null,
        no = !1,
        ru = null,
        sn = null,
        ro = !1,
        an = null,
        lo = 0,
        $r = 0,
        lu = null,
        oo = -1,
        io = 0;

    function be() {
        return me & 6 ? Fe() : oo !== -1 ? oo : oo = Fe()
    }

    function cn(e) {
        return e.mode & 1 ? me & 2 && Ye !== 0 ? Ye & -Ye : Md.transition !== null ? (io === 0 && (io = bu()), io) : (e = Se, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ss(e.type)), e) : 1
    }

    function Ct(e, t, n, r) {
        if (50 < $r) throw $r = 0, lu = null, Error(s(185));
        mr(e, n, r), (!(me & 2) || e !== Ve) && (e === Ve && (!(me & 2) && (to |= n), Be === 4 && fn(e, Ye)), lt(e, r), n === 1 && me === 0 && !(t.mode & 1) && (er = Fe() + 500, Ol && rn()))
    }

    function lt(e, t) {
        var n = e.callbackNode;
        Mf(e, t);
        var r = ml(e, e === Ve ? Ye : 0);
        if (r === 0) n !== null && Zu(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (n != null && Zu(n), t === 1) e.tag === 0 ? zd(sc.bind(null, e)) : Ys(sc.bind(null, e)), Pd(function() {
                !(me & 6) && rn()
            }), n = null;
            else {
                switch (es(r)) {
                    case 1:
                        n = Io;
                        break;
                    case 4:
                        n = qu;
                        break;
                    case 16:
                        n = fl;
                        break;
                    case 536870912:
                        n = Ju;
                        break;
                    default:
                        n = fl
                }
                n = vc(n, uc.bind(null, e))
            }
            e.callbackPriority = t, e.callbackNode = n
        }
    }

    function uc(e, t) {
        if (oo = -1, io = 0, me & 6) throw Error(s(327));
        var n = e.callbackNode;
        if (tr() && e.callbackNode !== n) return null;
        var r = ml(e, e === Ve ? Ye : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = uo(e, r);
        else {
            t = r;
            var l = me;
            me |= 2;
            var o = cc();
            (Ve !== e || Ye !== t) && (Wt = null, er = Fe() + 500, Pn(e, t));
            do try {
                Jd();
                break
            } catch (d) {
                ac(e, d)
            }
            while (!0);
            ki(), eo.current = o, me = l, Ie !== null ? t = 0 : (Ve = null, Ye = 0, t = Be)
        }
        if (t !== 0) {
            if (t === 2 && (l = Ao(e), l !== 0 && (r = l, t = ou(e, l))), t === 1) throw n = Vr, Pn(e, 0), fn(e, r), lt(e, Fe()), n;
            if (t === 6) fn(e, r);
            else {
                if (l = e.current.alternate, !(r & 30) && !Zd(l) && (t = uo(e, r), t === 2 && (o = Ao(e), o !== 0 && (r = o, t = ou(e, o))), t === 1)) throw n = Vr, Pn(e, 0), fn(e, r), lt(e, Fe()), n;
                switch (e.finishedWork = l, e.finishedLanes = r, t) {
                    case 0:
                    case 1:
                        throw Error(s(345));
                    case 2:
                        Rn(e, rt, Wt);
                        break;
                    case 3:
                        if (fn(e, r), (r & 130023424) === r && (t = nu + 500 - Fe(), 10 < t)) {
                            if (ml(e, 0) !== 0) break;
                            if (l = e.suspendedLanes, (l & r) !== r) {
                                be(), e.pingedLanes |= e.suspendedLanes & l;
                                break
                            }
                            e.timeoutHandle = fi(Rn.bind(null, e, rt, Wt), t);
                            break
                        }
                        Rn(e, rt, Wt);
                        break;
                    case 4:
                        if (fn(e, r), (r & 4194240) === r) break;
                        for (t = e.eventTimes, l = -1; 0 < r;) {
                            var u = 31 - yt(r);
                            o = 1 << u, u = t[u], u > l && (l = u), r &= ~o
                        }
                        if (r = l, r = Fe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Xd(r / 1960)) - r, 10 < r) {
                            e.timeoutHandle = fi(Rn.bind(null, e, rt, Wt), r);
                            break
                        }
                        Rn(e, rt, Wt);
                        break;
                    case 5:
                        Rn(e, rt, Wt);
                        break;
                    default:
                        throw Error(s(329))
                }
            }
        }
        return lt(e, Fe()), e.callbackNode === n ? uc.bind(null, e) : null
    }

    function ou(e, t) {
        var n = Gr;
        return e.current.memoizedState.isDehydrated && (Pn(e, t).flags |= 256), e = uo(e, t), e !== 2 && (t = rt, rt = n, t !== null && iu(t)), e
    }

    function iu(e) {
        rt === null ? rt = e : rt.push.apply(rt, e)
    }

    function Zd(e) {
        for (var t = e;;) {
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && (n = n.stores, n !== null))
                    for (var r = 0; r < n.length; r++) {
                        var l = n[r],
                            o = l.getSnapshot;
                        l = l.value;
                        try {
                            if (!wt(o(), l)) return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
            else {
                if (t === e) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return !0
    }

    function fn(e, t) {
        for (t &= ~tu, t &= ~to, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
            var n = 31 - yt(t),
                r = 1 << n;
            e[n] = -1, t &= ~r
        }
    }

    function sc(e) {
        if (me & 6) throw Error(s(327));
        tr();
        var t = ml(e, 0);
        if (!(t & 1)) return lt(e, Fe()), null;
        var n = uo(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = Ao(e);
            r !== 0 && (t = r, n = ou(e, r))
        }
        if (n === 1) throw n = Vr, Pn(e, 0), fn(e, t), lt(e, Fe()), n;
        if (n === 6) throw Error(s(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, Rn(e, rt, Wt), lt(e, Fe()), null
    }

    function uu(e, t) {
        var n = me;
        me |= 1;
        try {
            return e(t)
        } finally {
            me = n, me === 0 && (er = Fe() + 500, Ol && rn())
        }
    }

    function Nn(e) {
        an !== null && an.tag === 0 && !(me & 6) && tr();
        var t = me;
        me |= 1;
        var n = mt.transition,
            r = Se;
        try {
            if (mt.transition = null, Se = 1, e) return e()
        } finally {
            Se = r, mt.transition = n, me = t, !(me & 6) && rn()
        }
    }

    function su() {
        at = bn.current, Le(bn)
    }

    function Pn(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, Nd(n)), Ie !== null)
            for (n = Ie.return; n !== null;) {
                var r = n;
                switch (gi(r), r.tag) {
                    case 1:
                        r = r.type.childContextTypes, r != null && Ml();
                        break;
                    case 3:
                        Zn(), Le(et), Le(Ke), Ti();
                        break;
                    case 5:
                        Ri(r);
                        break;
                    case 4:
                        Zn();
                        break;
                    case 13:
                        Le(je);
                        break;
                    case 19:
                        Le(je);
                        break;
                    case 10:
                        Ei(r.type._context);
                        break;
                    case 22:
                    case 23:
                        su()
                }
                n = n.return
            }
        if (Ve = e, Ie = e = dn(e.current, null), Ye = at = t, Be = 0, Vr = null, tu = to = Ln = 0, rt = Gr = null, kn !== null) {
            for (t = 0; t < kn.length; t++)
                if (n = kn[t], r = n.interleaved, r !== null) {
                    n.interleaved = null;
                    var l = r.next,
                        o = n.pending;
                    if (o !== null) {
                        var u = o.next;
                        o.next = l, r.next = u
                    }
                    n.pending = r
                }
            kn = null
        }
        return e
    }

    function ac(e, t) {
        do {
            var n = Ie;
            try {
                if (ki(), Gl.current = Kl, $l) {
                    for (var r = Te.memoizedState; r !== null;) {
                        var l = r.queue;
                        l !== null && (l.pending = null), r = r.next
                    }
                    $l = !1
                }
                if (Cn = 0, We = Ue = Te = null, Ir = !1, Ar = 0, eu.current = null, n === null || n.return === null) {
                    Be = 1, Vr = t, Ie = null;
                    break
                }
                e: {
                    var o = e,
                        u = n.return,
                        d = n,
                        m = t;
                    if (t = Ye, d.flags |= 32768, m !== null && typeof m == "object" && typeof m.then == "function") {
                        var L = m,
                            O = d,
                            D = O.tag;
                        if (!(O.mode & 1) && (D === 0 || D === 11 || D === 15)) {
                            var _ = O.alternate;
                            _ ? (O.updateQueue = _.updateQueue, O.memoizedState = _.memoizedState, O.lanes = _.lanes) : (O.updateQueue = null, O.memoizedState = null)
                        }
                        var Q = Oa(u);
                        if (Q !== null) {
                            Q.flags &= -257, Fa(Q, u, d, o, t), Q.mode & 1 && _a(o, L, t), t = Q, m = L;
                            var X = t.updateQueue;
                            if (X === null) {
                                var J = new Set;
                                J.add(m), t.updateQueue = J
                            } else X.add(m);
                            break e
                        } else {
                            if (!(t & 1)) {
                                _a(o, L, t), au();
                                break e
                            }
                            m = Error(s(426))
                        }
                    } else if (Pe && d.mode & 1) {
                        var De = Oa(u);
                        if (De !== null) {
                            !(De.flags & 65536) && (De.flags |= 256), Fa(De, u, d, o, t), xi(qn(m, d));
                            break e
                        }
                    }
                    o = m = qn(m, d),
                    Be !== 4 && (Be = 2),
                    Gr === null ? Gr = [o] : Gr.push(o),
                    o = u;do {
                        switch (o.tag) {
                            case 3:
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var k = za(o, m, t);
                                la(o, k);
                                break e;
                            case 1:
                                d = m;
                                var y = o.type,
                                    E = o.stateNode;
                                if (!(o.flags & 128) && (typeof y.getDerivedStateFromError == "function" || E !== null && typeof E.componentDidCatch == "function" && (sn === null || !sn.has(E)))) {
                                    o.flags |= 65536, t &= -t, o.lanes |= t;
                                    var B = Ma(o, d, t);
                                    la(o, B);
                                    break e
                                }
                        }
                        o = o.return
                    } while (o !== null)
                }
                dc(n)
            } catch (b) {
                t = b, Ie === n && n !== null && (Ie = n = n.return);
                continue
            }
            break
        } while (!0)
    }

    function cc() {
        var e = eo.current;
        return eo.current = Kl, e === null ? Kl : e
    }

    function au() {
        (Be === 0 || Be === 3 || Be === 2) && (Be = 4), Ve === null || !(Ln & 268435455) && !(to & 268435455) || fn(Ve, Ye)
    }

    function uo(e, t) {
        var n = me;
        me |= 2;
        var r = cc();
        (Ve !== e || Ye !== t) && (Wt = null, Pn(e, t));
        do try {
            qd();
            break
        } catch (l) {
            ac(e, l)
        }
        while (!0);
        if (ki(), me = n, eo.current = r, Ie !== null) throw Error(s(261));
        return Ve = null, Ye = 0, Be
    }

    function qd() {
        for (; Ie !== null;) fc(Ie)
    }

    function Jd() {
        for (; Ie !== null && !Ef();) fc(Ie)
    }

    function fc(e) {
        var t = mc(e.alternate, e, at);
        e.memoizedProps = e.pendingProps, t === null ? dc(e) : Ie = t, eu.current = null
    }

    function dc(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return, t.flags & 32768) {
                if (n = $d(n, t), n !== null) {
                    n.flags &= 32767, Ie = n;
                    return
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    Be = 6, Ie = null;
                    return
                }
            } else if (n = Gd(n, t, at), n !== null) {
                Ie = n;
                return
            }
            if (t = t.sibling, t !== null) {
                Ie = t;
                return
            }
            Ie = t = e
        } while (t !== null);
        Be === 0 && (Be = 5)
    }

    function Rn(e, t, n) {
        var r = Se,
            l = mt.transition;
        try {
            mt.transition = null, Se = 1, bd(e, t, n, r)
        } finally {
            mt.transition = l, Se = r
        }
        return null
    }

    function bd(e, t, n, r) {
        do tr(); while (an !== null);
        if (me & 6) throw Error(s(327));
        n = e.finishedWork;
        var l = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(s(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var o = n.lanes | n.childLanes;
        if (_f(e, o), e === Ve && (Ie = Ve = null, Ye = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ro || (ro = !0, vc(fl, function() {
                return tr(), null
            })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
            o = mt.transition, mt.transition = null;
            var u = Se;
            Se = 1;
            var d = me;
            me |= 4, eu.current = null, Yd(e, n), nc(n, e), wd(ai), yl = !!si, ai = si = null, e.current = n, Kd(n), Cf(), me = d, Se = u, mt.transition = o
        } else e.current = n;
        if (ro && (ro = !1, an = e, lo = l), o = e.pendingLanes, o === 0 && (sn = null), Pf(n.stateNode), lt(e, Fe()), t !== null)
            for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
                componentStack: l.stack,
                digest: l.digest
            });
        if (no) throw no = !1, e = ru, ru = null, e;
        return lo & 1 && e.tag !== 0 && tr(), o = e.pendingLanes, o & 1 ? e === lu ? $r++ : ($r = 0, lu = e) : $r = 0, rn(), null
    }

    function tr() {
        if (an !== null) {
            var e = es(lo),
                t = mt.transition,
                n = Se;
            try {
                if (mt.transition = null, Se = 16 > e ? 16 : e, an === null) var r = !1;
                else {
                    if (e = an, an = null, lo = 0, me & 6) throw Error(s(331));
                    var l = me;
                    for (me |= 4, K = e.current; K !== null;) {
                        var o = K,
                            u = o.child;
                        if (K.flags & 16) {
                            var d = o.deletions;
                            if (d !== null) {
                                for (var m = 0; m < d.length; m++) {
                                    var L = d[m];
                                    for (K = L; K !== null;) {
                                        var O = K;
                                        switch (O.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                Wr(8, O, o)
                                        }
                                        var D = O.child;
                                        if (D !== null) D.return = O, K = D;
                                        else
                                            for (; K !== null;) {
                                                O = K;
                                                var _ = O.sibling,
                                                    Q = O.return;
                                                if (qa(O), O === L) {
                                                    K = null;
                                                    break
                                                }
                                                if (_ !== null) {
                                                    _.return = Q, K = _;
                                                    break
                                                }
                                                K = Q
                                            }
                                    }
                                }
                                var X = o.alternate;
                                if (X !== null) {
                                    var J = X.child;
                                    if (J !== null) {
                                        X.child = null;
                                        do {
                                            var De = J.sibling;
                                            J.sibling = null, J = De
                                        } while (J !== null)
                                    }
                                }
                                K = o
                            }
                        }
                        if (o.subtreeFlags & 2064 && u !== null) u.return = o, K = u;
                        else e: for (; K !== null;) {
                            if (o = K, o.flags & 2048) switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Wr(9, o, o.return)
                            }
                            var k = o.sibling;
                            if (k !== null) {
                                k.return = o.return, K = k;
                                break e
                            }
                            K = o.return
                        }
                    }
                    var y = e.current;
                    for (K = y; K !== null;) {
                        u = K;
                        var E = u.child;
                        if (u.subtreeFlags & 2064 && E !== null) E.return = u, K = E;
                        else e: for (u = y; K !== null;) {
                            if (d = K, d.flags & 2048) try {
                                switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        bl(9, d)
                                }
                            } catch (b) {
                                _e(d, d.return, b)
                            }
                            if (d === u) {
                                K = null;
                                break e
                            }
                            var B = d.sibling;
                            if (B !== null) {
                                B.return = d.return, K = B;
                                break e
                            }
                            K = d.return
                        }
                    }
                    if (me = l, rn(), jt && typeof jt.onPostCommitFiberRoot == "function") try {
                        jt.onPostCommitFiberRoot(dl, e)
                    } catch {}
                    r = !0
                }
                return r
            } finally {
                Se = n, mt.transition = t
            }
        }
        return !1
    }

    function pc(e, t, n) {
        t = qn(n, t), t = za(e, t, 1), e = on(e, t, 1), t = be(), e !== null && (mr(e, 1, t), lt(e, t))
    }

    function _e(e, t, n) {
        if (e.tag === 3) pc(e, e, n);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    pc(t, e, n);
                    break
                } else if (t.tag === 1) {
                    var r = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (sn === null || !sn.has(r))) {
                        e = qn(n, e), e = Ma(t, e, 1), t = on(t, e, 1), e = be(), t !== null && (mr(t, 1, e), lt(t, e));
                        break
                    }
                }
                t = t.return
            }
    }

    function e0(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = be(), e.pingedLanes |= e.suspendedLanes & n, Ve === e && (Ye & n) === n && (Be === 4 || Be === 3 && (Ye & 130023424) === Ye && 500 > Fe() - nu ? Pn(e, 0) : tu |= n), lt(e, t)
    }

    function hc(e, t) {
        t === 0 && (e.mode & 1 ? (t = hl, hl <<= 1, !(hl & 130023424) && (hl = 4194304)) : t = 1);
        var n = be();
        e = Ut(e, t), e !== null && (mr(e, t, n), lt(e, n))
    }

    function t0(e) {
        var t = e.memoizedState,
            n = 0;
        t !== null && (n = t.retryLane), hc(e, n)
    }

    function n0(e, t) {
        var n = 0;
        switch (e.tag) {
            case 13:
                var r = e.stateNode,
                    l = e.memoizedState;
                l !== null && (n = l.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            default:
                throw Error(s(314))
        }
        r !== null && r.delete(t), hc(e, n)
    }
    var mc;
    mc = function(e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || et.current) nt = !0;
            else {
                if (!(e.lanes & n) && !(t.flags & 128)) return nt = !1, Vd(e, t, n);
                nt = !!(e.flags & 131072)
            }
        else nt = !1, Pe && t.flags & 1048576 && Ks(t, Dl, t.index);
        switch (t.lanes = 0, t.tag) {
            case 2:
                var r = t.type;
                ql(e, t), e = t.pendingProps;
                var l = Vn(t, Ke.current);
                Xn(t, n), l = _i(null, t, r, e, l, n);
                var o = Oi();
                return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, tt(r) ? (o = !0, _l(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ni(t), l.updater = Xl, t.stateNode = l, l._reactInternals = t, Bi(t, r, e, n), t = Gi(null, t, r, !0, o, n)) : (t.tag = 0, Pe && o && vi(t), Je(null, t, l, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch (ql(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = l0(r), e = St(r, e), l) {
                        case 0:
                            t = Vi(null, t, r, e, n);
                            break e;
                        case 1:
                            t = Ha(null, t, r, e, n);
                            break e;
                        case 11:
                            t = Da(null, t, r, e, n);
                            break e;
                        case 14:
                            t = Ia(null, t, r, St(r.type, e), n);
                            break e
                    }
                    throw Error(s(306, r, ""))
                }
                return t;
            case 0:
                return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : St(r, l), Vi(e, t, r, l, n);
            case 1:
                return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : St(r, l), Ha(e, t, r, l, n);
            case 3:
                e: {
                    if (Wa(t), e === null) throw Error(s(387));r = t.pendingProps,
                    o = t.memoizedState,
                    l = o.element,
                    ra(e, t),
                    Wl(t, r, null, n);
                    var u = t.memoizedState;
                    if (r = u.element, o.isDehydrated)
                        if (o = {
                                element: r,
                                isDehydrated: !1,
                                cache: u.cache,
                                pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                                transitions: u.transitions
                            }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                            l = qn(Error(s(423)), t), t = Va(e, t, r, n, l);
                            break e
                        } else if (r !== l) {
                        l = qn(Error(s(424)), t), t = Va(e, t, r, n, l);
                        break e
                    } else
                        for (st = en(t.stateNode.containerInfo.firstChild), ut = t, Pe = !0, xt = null, n = ta(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                    else {
                        if (Qn(), r === l) {
                            t = Ht(e, t, n);
                            break e
                        }
                        Je(e, t, r, n)
                    }
                    t = t.child
                }
                return t;
            case 5:
                return ia(t), e === null && wi(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, u = l.children, ci(r, l) ? u = null : o !== null && ci(r, o) && (t.flags |= 32), Ba(e, t), Je(e, t, u, n), t.child;
            case 6:
                return e === null && wi(t), null;
            case 13:
                return Ga(e, t, n);
            case 4:
                return Pi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Yn(t, null, r, n) : Je(e, t, r, n), t.child;
            case 11:
                return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : St(r, l), Da(e, t, r, l, n);
            case 7:
                return Je(e, t, t.pendingProps, n), t.child;
            case 8:
                return Je(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return Je(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, u = l.value, ke(Ul, r._currentValue), r._currentValue = u, o !== null)
                        if (wt(o.value, u)) {
                            if (o.children === l.children && !et.current) {
                                t = Ht(e, t, n);
                                break e
                            }
                        } else
                            for (o = t.child, o !== null && (o.return = t); o !== null;) {
                                var d = o.dependencies;
                                if (d !== null) {
                                    u = o.child;
                                    for (var m = d.firstContext; m !== null;) {
                                        if (m.context === r) {
                                            if (o.tag === 1) {
                                                m = Bt(-1, n & -n), m.tag = 2;
                                                var L = o.updateQueue;
                                                if (L !== null) {
                                                    L = L.shared;
                                                    var O = L.pending;
                                                    O === null ? m.next = m : (m.next = O.next, O.next = m), L.pending = m
                                                }
                                            }
                                            o.lanes |= n, m = o.alternate, m !== null && (m.lanes |= n), Ci(o.return, n, t), d.lanes |= n;
                                            break
                                        }
                                        m = m.next
                                    }
                                } else if (o.tag === 10) u = o.type === t.type ? null : o.child;
                                else if (o.tag === 18) {
                                    if (u = o.return, u === null) throw Error(s(341));
                                    u.lanes |= n, d = u.alternate, d !== null && (d.lanes |= n), Ci(u, n, t), u = o.sibling
                                } else u = o.child;
                                if (u !== null) u.return = o;
                                else
                                    for (u = o; u !== null;) {
                                        if (u === t) {
                                            u = null;
                                            break
                                        }
                                        if (o = u.sibling, o !== null) {
                                            o.return = u.return, u = o;
                                            break
                                        }
                                        u = u.return
                                    }
                                o = u
                            }
                    Je(e, t, l.children, n),
                    t = t.child
                }
                return t;
            case 9:
                return l = t.type, r = t.pendingProps.children, Xn(t, n), l = pt(l), r = r(l), t.flags |= 1, Je(e, t, r, n), t.child;
            case 14:
                return r = t.type, l = St(r, t.pendingProps), l = St(r.type, l), Ia(e, t, r, l, n);
            case 15:
                return Aa(e, t, t.type, t.pendingProps, n);
            case 17:
                return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : St(r, l), ql(e, t), t.tag = 1, tt(r) ? (e = !0, _l(t)) : e = !1, Xn(t, n), ja(t, r, l), Bi(t, r, l, n), Gi(null, t, r, !0, e, n);
            case 19:
                return Qa(e, t, n);
            case 22:
                return Ua(e, t, n)
        }
        throw Error(s(156, t.tag))
    };

    function vc(e, t) {
        return Xu(e, t)
    }

    function r0(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function vt(e, t, n, r) {
        return new r0(e, t, n, r)
    }

    function cu(e) {
        return e = e.prototype, !(!e || !e.isReactComponent)
    }

    function l0(e) {
        if (typeof e == "function") return cu(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === ze) return 11;
            if (e === Oe) return 14
        }
        return 2
    }

    function dn(e, t) {
        var n = e.alternate;
        return n === null ? (n = vt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
    }

    function so(e, t, n, r, l, o) {
        var u = 2;
        if (r = e, typeof e == "function") cu(e) && (u = 1);
        else if (typeof e == "string") u = 5;
        else e: switch (e) {
            case fe:
                return jn(n.children, l, o, t);
            case we:
                u = 8, l |= 8;
                break;
            case W:
                return e = vt(12, n, t, l | 2), e.elementType = W, e.lanes = o, e;
            case Re:
                return e = vt(13, n, t, l), e.elementType = Re, e.lanes = o, e;
            case Ne:
                return e = vt(19, n, t, l), e.elementType = Ne, e.lanes = o, e;
            case pe:
                return ao(n, l, o, t);
            default:
                if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                    case ye:
                        u = 10;
                        break e;
                    case Ae:
                        u = 9;
                        break e;
                    case ze:
                        u = 11;
                        break e;
                    case Oe:
                        u = 14;
                        break e;
                    case Ee:
                        u = 16, r = null;
                        break e
                }
                throw Error(s(130, e == null ? e : typeof e, ""))
        }
        return t = vt(u, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t
    }

    function jn(e, t, n, r) {
        return e = vt(7, e, r, t), e.lanes = n, e
    }

    function ao(e, t, n, r) {
        return e = vt(22, e, r, t), e.elementType = pe, e.lanes = n, e.stateNode = {
            isHidden: !1
        }, e
    }

    function fu(e, t, n) {
        return e = vt(6, e, null, t), e.lanes = n, e
    }

    function du(e, t, n) {
        return t = vt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }

    function o0(e, t, n, r, l) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Uo(0), this.expirationTimes = Uo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Uo(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
    }

    function pu(e, t, n, r, l, o, u, d, m) {
        return e = new o0(e, t, n, d, m), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = vt(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, Ni(o), e
    }

    function i0(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: de,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        }
    }

    function gc(e) {
        if (!e) return nn;
        e = e._reactInternals;
        e: {
            if (gn(e) !== e || e.tag !== 1) throw Error(s(170));
            var t = e;do {
                switch (t.tag) {
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if (tt(t.type)) {
                            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e
                        }
                }
                t = t.return
            } while (t !== null);
            throw Error(s(171))
        }
        if (e.tag === 1) {
            var n = e.type;
            if (tt(n)) return $s(e, n, t)
        }
        return t
    }

    function yc(e, t, n, r, l, o, u, d, m) {
        return e = pu(n, r, !0, e, l, o, u, d, m), e.context = gc(null), n = e.current, r = be(), l = cn(n), o = Bt(r, l), o.callback = t ?? null, on(n, o, l), e.current.lanes = l, mr(e, l, r), lt(e, r), e
    }

    function co(e, t, n, r) {
        var l = t.current,
            o = be(),
            u = cn(l);
        return n = gc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Bt(o, u), t.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = on(l, t, u), e !== null && (Ct(e, l, u, o), Hl(e, l, u)), u
    }

    function fo(e) {
        if (e = e.current, !e.child) return null;
        switch (e.child.tag) {
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode
        }
    }

    function wc(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t
        }
    }

    function hu(e, t) {
        wc(e, t), (e = e.alternate) && wc(e, t)
    }

    function u0() {
        return null
    }
    var xc = typeof reportError == "function" ? reportError : function(e) {
        console.error(e)
    };

    function mu(e) {
        this._internalRoot = e
    }
    po.prototype.render = mu.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(s(409));
        co(e, t, null, null)
    }, po.prototype.unmount = mu.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Nn(function() {
                co(null, e, null, null)
            }), t[Ft] = null
        }
    };

    function po(e) {
        this._internalRoot = e
    }
    po.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = rs();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var n = 0; n < qt.length && t !== 0 && t < qt[n].priority; n++);
            qt.splice(n, 0, e), n === 0 && is(e)
        }
    };

    function vu(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }

    function ho(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    }

    function Sc() {}

    function s0(e, t, n, r, l) {
        if (l) {
            if (typeof r == "function") {
                var o = r;
                r = function() {
                    var L = fo(u);
                    o.call(L)
                }
            }
            var u = yc(t, r, e, 0, null, !1, !1, "", Sc);
            return e._reactRootContainer = u, e[Ft] = u.current, jr(e.nodeType === 8 ? e.parentNode : e), Nn(), u
        }
        for (; l = e.lastChild;) e.removeChild(l);
        if (typeof r == "function") {
            var d = r;
            r = function() {
                var L = fo(m);
                d.call(L)
            }
        }
        var m = pu(e, 0, !1, null, null, !1, !1, "", Sc);
        return e._reactRootContainer = m, e[Ft] = m.current, jr(e.nodeType === 8 ? e.parentNode : e), Nn(function() {
            co(t, m, n, r)
        }), m
    }

    function mo(e, t, n, r, l) {
        var o = n._reactRootContainer;
        if (o) {
            var u = o;
            if (typeof l == "function") {
                var d = l;
                l = function() {
                    var m = fo(u);
                    d.call(m)
                }
            }
            co(t, u, e, l)
        } else u = s0(n, t, e, l, r);
        return fo(u)
    }
    ts = function(e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = hr(t.pendingLanes);
                    n !== 0 && (Bo(t, n | 1), lt(t, Fe()), !(me & 6) && (er = Fe() + 500, rn()))
                }
                break;
            case 13:
                Nn(function() {
                    var r = Ut(e, 1);
                    if (r !== null) {
                        var l = be();
                        Ct(r, e, 1, l)
                    }
                }), hu(e, 1)
        }
    }, Ho = function(e) {
        if (e.tag === 13) {
            var t = Ut(e, 134217728);
            if (t !== null) {
                var n = be();
                Ct(t, e, 134217728, n)
            }
            hu(e, 134217728)
        }
    }, ns = function(e) {
        if (e.tag === 13) {
            var t = cn(e),
                n = Ut(e, t);
            if (n !== null) {
                var r = be();
                Ct(n, e, t, r)
            }
            hu(e, t)
        }
    }, rs = function() {
        return Se
    }, ls = function(e, t) {
        var n = Se;
        try {
            return Se = e, t()
        } finally {
            Se = n
        }
    }, cr = function(e, t, n) {
        switch (t) {
            case "input":
                if (or(e, n), t = n.name, n.type === "radio" && t != null) {
                    for (n = e; n.parentNode;) n = n.parentNode;
                    for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var l = zl(r);
                            if (!l) throw Error(s(90));
                            rl(r), or(r, l)
                        }
                    }
                }
                break;
            case "textarea":
                il(e, n);
                break;
            case "select":
                t = n.value, t != null && Lt(e, !!n.multiple, t, !1)
        }
    }, Wu = uu, Vu = Nn;
    var a0 = {
            usingClientEntryPoint: !1,
            Events: [Mr, Hn, zl, Bu, Hu, uu]
        },
        Qr = {
            findFiberByHostInstance: yn,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom"
        },
        c0 = {
            bundleType: Qr.bundleType,
            version: Qr.version,
            rendererPackageName: Qr.rendererPackageName,
            rendererConfig: Qr.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: ee.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(e) {
                return e = Yu(e), e === null ? null : e.stateNode
            },
            findFiberByHostInstance: Qr.findFiberByHostInstance || u0,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var vo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!vo.isDisabled && vo.supportsFiber) try {
            dl = vo.inject(c0), jt = vo
        } catch {}
    }
    return ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = a0, ot.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!vu(t)) throw Error(s(200));
        return i0(e, t, null, n)
    }, ot.createRoot = function(e, t) {
        if (!vu(e)) throw Error(s(299));
        var n = !1,
            r = "",
            l = xc;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = pu(e, 1, !1, null, null, n, !1, r, l), e[Ft] = t.current, jr(e.nodeType === 8 ? e.parentNode : e), new mu(t)
    }, ot.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
        return e = Yu(t), e = e === null ? null : e.stateNode, e
    }, ot.flushSync = function(e) {
        return Nn(e)
    }, ot.hydrate = function(e, t, n) {
        if (!ho(t)) throw Error(s(200));
        return mo(null, e, t, !0, n)
    }, ot.hydrateRoot = function(e, t, n) {
        if (!vu(e)) throw Error(s(405));
        var r = n != null && n.hydratedSources || null,
            l = !1,
            o = "",
            u = xc;
        if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (u = n.onRecoverableError)), t = yc(t, null, e, 1, n ?? null, l, !1, o, u), e[Ft] = t.current, jr(e), r)
            for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
        return new po(t)
    }, ot.render = function(e, t, n) {
        if (!ho(t)) throw Error(s(200));
        return mo(null, e, t, !1, n)
    }, ot.unmountComponentAtNode = function(e) {
        if (!ho(e)) throw Error(s(40));
        return e._reactRootContainer ? (Nn(function() {
            mo(null, null, e, !1, function() {
                e._reactRootContainer = null, e[Ft] = null
            })
        }), !0) : !1
    }, ot.unstable_batchedUpdates = uu, ot.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!ho(n)) throw Error(s(200));
        if (e == null || e._reactInternals === void 0) throw Error(s(38));
        return mo(e, t, n, !1, r)
    }, ot.version = "18.3.1-next-f1338f8080-20240426", ot
}
var jc;

function y0() {
    if (jc) return wu.exports;
    jc = 1;

    function i() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
        } catch (a) {
            console.error(a)
        }
    }
    return i(), wu.exports = g0(), wu.exports
}
var Tc;

function w0() {
    if (Tc) return go;
    Tc = 1;
    var i = y0();
    return go.createRoot = i.createRoot, go.hydrateRoot = i.hydrateRoot, go
}
var x0 = w0();
const S0 = Yc(x0);
var Kr = {},
    zc;

function k0() {
    if (zc) return Kr;
    zc = 1, Object.defineProperty(Kr, "__esModule", {
        value: !0
    }), Kr.parse = w, Kr.serialize = S;
    const i = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
        a = /^[\u0021-\u003A\u003C-\u007E]*$/,
        s = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
        f = /^[\u0020-\u003A\u003D-\u007E]*$/,
        c = Object.prototype.toString,
        p = (() => {
            const R = function() {};
            return R.prototype = Object.create(null), R
        })();

    function w(R, I) {
        const z = new p,
            A = R.length;
        if (A < 2) return z;
        const F = (I == null ? void 0 : I.decode) || T;
        let U = 0;
        do {
            const q = R.indexOf("=", U);
            if (q === -1) break;
            const Y = R.indexOf(";", U),
                ee = Y === -1 ? A : Y;
            if (q > ee) {
                U = R.lastIndexOf(";", q - 1) + 1;
                continue
            }
            const se = C(R, U, q),
                de = x(R, q, se),
                fe = R.slice(se, de);
            if (z[fe] === void 0) {
                let we = C(R, q + 1, ee),
                    W = x(R, ee, we);
                const ye = F(R.slice(we, W));
                z[fe] = ye
            }
            U = ee + 1
        } while (U < A);
        return z
    }

    function C(R, I, z) {
        do {
            const A = R.charCodeAt(I);
            if (A !== 32 && A !== 9) return I
        } while (++I < z);
        return z
    }

    function x(R, I, z) {
        for (; I > z;) {
            const A = R.charCodeAt(--I);
            if (A !== 32 && A !== 9) return I + 1
        }
        return z
    }

    function S(R, I, z) {
        const A = (z == null ? void 0 : z.encode) || encodeURIComponent;
        if (!i.test(R)) throw new TypeError(`argument name is invalid: ${R}`);
        const F = A(I);
        if (!a.test(F)) throw new TypeError(`argument val is invalid: ${I}`);
        let U = R + "=" + F;
        if (!z) return U;
        if (z.maxAge !== void 0) {
            if (!Number.isInteger(z.maxAge)) throw new TypeError(`option maxAge is invalid: ${z.maxAge}`);
            U += "; Max-Age=" + z.maxAge
        }
        if (z.domain) {
            if (!s.test(z.domain)) throw new TypeError(`option domain is invalid: ${z.domain}`);
            U += "; Domain=" + z.domain
        }
        if (z.path) {
            if (!f.test(z.path)) throw new TypeError(`option path is invalid: ${z.path}`);
            U += "; Path=" + z.path
        }
        if (z.expires) {
            if (!j(z.expires) || !Number.isFinite(z.expires.valueOf())) throw new TypeError(`option expires is invalid: ${z.expires}`);
            U += "; Expires=" + z.expires.toUTCString()
        }
        if (z.httpOnly && (U += "; HttpOnly"), z.secure && (U += "; Secure"), z.partitioned && (U += "; Partitioned"), z.priority) switch (typeof z.priority == "string" ? z.priority.toLowerCase() : void 0) {
            case "low":
                U += "; Priority=Low";
                break;
            case "medium":
                U += "; Priority=Medium";
                break;
            case "high":
                U += "; Priority=High";
                break;
            default:
                throw new TypeError(`option priority is invalid: ${z.priority}`)
        }
        if (z.sameSite) switch (typeof z.sameSite == "string" ? z.sameSite.toLowerCase() : z.sameSite) {
            case !0:
            case "strict":
                U += "; SameSite=Strict";
                break;
            case "lax":
                U += "; SameSite=Lax";
                break;
            case "none":
                U += "; SameSite=None";
                break;
            default:
                throw new TypeError(`option sameSite is invalid: ${z.sameSite}`)
        }
        return U
    }

    function T(R) {
        if (R.indexOf("%") === -1) return R;
        try {
            return decodeURIComponent(R)
        } catch {
            return R
        }
    }

    function j(R) {
        return c.call(R) === "[object Date]"
    }
    return Kr
}
k0();
/**
 * react-router v7.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var Mc = "popstate";

function E0(i = {}) {
    function a(f, c) {
        let {
            pathname: p,
            search: w,
            hash: C
        } = f.location;
        return Ru("", {
            pathname: p,
            search: w,
            hash: C
        }, c.state && c.state.usr || null, c.state && c.state.key || "default")
    }

    function s(f, c) {
        return typeof c == "string" ? c : qr(c)
    }
    return L0(a, s, null, i)
}

function He(i, a) {
    if (i === !1 || i === null || typeof i > "u") throw new Error(a)
}

function mn(i, a) {
    if (!i) {
        typeof console < "u" && console.warn(a);
        try {
            throw new Error(a)
        } catch {}
    }
}

function C0() {
    return Math.random().toString(36).substring(2, 10)
}

function _c(i, a) {
    return {
        usr: i.state,
        key: i.key,
        idx: a
    }
}

function Ru(i, a, s = null, f) {
    return {
        pathname: typeof i == "string" ? i : i.pathname,
        search: "",
        hash: "",
        ...typeof a == "string" ? br(a) : a,
        state: s,
        key: a && a.key || f || C0()
    }
}

function qr({
    pathname: i = "/",
    search: a = "",
    hash: s = ""
}) {
    return a && a !== "?" && (i += a.charAt(0) === "?" ? a : "?" + a), s && s !== "#" && (i += s.charAt(0) === "#" ? s : "#" + s), i
}

function br(i) {
    let a = {};
    if (i) {
        let s = i.indexOf("#");
        s >= 0 && (a.hash = i.substring(s), i = i.substring(0, s));
        let f = i.indexOf("?");
        f >= 0 && (a.search = i.substring(f), i = i.substring(0, f)), i && (a.pathname = i)
    }
    return a
}

function L0(i, a, s, f = {}) {
    let {
        window: c = document.defaultView,
        v5Compat: p = !1
    } = f, w = c.history, C = "POP", x = null, S = T();
    S == null && (S = 0, w.replaceState({ ...w.state,
        idx: S
    }, ""));

    function T() {
        return (w.state || {
            idx: null
        }).idx
    }

    function j() {
        C = "POP";
        let F = T(),
            U = F == null ? null : F - S;
        S = F, x && x({
            action: C,
            location: A.location,
            delta: U
        })
    }

    function R(F, U) {
        C = "PUSH";
        let q = Ru(A.location, F, U);
        S = T() + 1;
        let Y = _c(q, S),
            ee = A.createHref(q);
        try {
            w.pushState(Y, "", ee)
        } catch (se) {
            if (se instanceof DOMException && se.name === "DataCloneError") throw se;
            c.location.assign(ee)
        }
        p && x && x({
            action: C,
            location: A.location,
            delta: 1
        })
    }

    function I(F, U) {
        C = "REPLACE";
        let q = Ru(A.location, F, U);
        S = T();
        let Y = _c(q, S),
            ee = A.createHref(q);
        w.replaceState(Y, "", ee), p && x && x({
            action: C,
            location: A.location,
            delta: 0
        })
    }

    function z(F) {
        let U = c.location.origin !== "null" ? c.location.origin : c.location.href,
            q = typeof F == "string" ? F : qr(F);
        return q = q.replace(/ $/, "%20"), He(U, `No window.location.(origin|href) available to create URL for href: ${q}`), new URL(q, U)
    }
    let A = {
        get action() {
            return C
        },
        get location() {
            return i(c, w)
        },
        listen(F) {
            if (x) throw new Error("A history only accepts one active listener");
            return c.addEventListener(Mc, j), x = F, () => {
                c.removeEventListener(Mc, j), x = null
            }
        },
        createHref(F) {
            return a(c, F)
        },
        createURL: z,
        encodeLocation(F) {
            let U = z(F);
            return {
                pathname: U.pathname,
                search: U.search,
                hash: U.hash
            }
        },
        push: R,
        replace: I,
        go(F) {
            return w.go(F)
        }
    };
    return A
}

function Kc(i, a, s = "/") {
    return N0(i, a, s, !1)
}

function N0(i, a, s, f) {
    let c = typeof a == "string" ? br(a) : a,
        p = hn(c.pathname || "/", s);
    if (p == null) return null;
    let w = Xc(i);
    P0(w);
    let C = null;
    for (let x = 0; C == null && x < w.length; ++x) {
        let S = A0(p);
        C = D0(w[x], S, f)
    }
    return C
}

function Xc(i, a = [], s = [], f = "") {
    let c = (p, w, C) => {
        let x = {
            relativePath: C === void 0 ? p.path || "" : C,
            caseSensitive: p.caseSensitive === !0,
            childrenIndex: w,
            route: p
        };
        x.relativePath.startsWith("/") && (He(x.relativePath.startsWith(f), `Absolute route path "${x.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), x.relativePath = x.relativePath.slice(f.length));
        let S = Gt([f, x.relativePath]),
            T = s.concat(x);
        p.children && p.children.length > 0 && (He(p.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${S}".`), Xc(p.children, a, T, S)), !(p.path == null && !p.index) && a.push({
            path: S,
            score: O0(S, p.index),
            routesMeta: T
        })
    };
    return i.forEach((p, w) => {
        var C;
        if (p.path === "" || !((C = p.path) != null && C.includes("?"))) c(p, w);
        else
            for (let x of Zc(p.path)) c(p, w, x)
    }), a
}

function Zc(i) {
    let a = i.split("/");
    if (a.length === 0) return [];
    let [s, ...f] = a, c = s.endsWith("?"), p = s.replace(/\?$/, "");
    if (f.length === 0) return c ? [p, ""] : [p];
    let w = Zc(f.join("/")),
        C = [];
    return C.push(...w.map(x => x === "" ? p : [p, x].join("/"))), c && C.push(...w), C.map(x => i.startsWith("/") && x === "" ? "/" : x)
}

function P0(i) {
    i.sort((a, s) => a.score !== s.score ? s.score - a.score : F0(a.routesMeta.map(f => f.childrenIndex), s.routesMeta.map(f => f.childrenIndex)))
}
var R0 = /^:[\w-]+$/,
    j0 = 3,
    T0 = 2,
    z0 = 1,
    M0 = 10,
    _0 = -2,
    Oc = i => i === "*";

function O0(i, a) {
    let s = i.split("/"),
        f = s.length;
    return s.some(Oc) && (f += _0), a && (f += T0), s.filter(c => !Oc(c)).reduce((c, p) => c + (R0.test(p) ? j0 : p === "" ? z0 : M0), f)
}

function F0(i, a) {
    return i.length === a.length && i.slice(0, -1).every((f, c) => f === a[c]) ? i[i.length - 1] - a[a.length - 1] : 0
}

function D0(i, a, s = !1) {
    let {
        routesMeta: f
    } = i, c = {}, p = "/", w = [];
    for (let C = 0; C < f.length; ++C) {
        let x = f[C],
            S = C === f.length - 1,
            T = p === "/" ? a : a.slice(p.length) || "/",
            j = Eo({
                path: x.relativePath,
                caseSensitive: x.caseSensitive,
                end: S
            }, T),
            R = x.route;
        if (!j && S && s && !f[f.length - 1].route.index && (j = Eo({
                path: x.relativePath,
                caseSensitive: x.caseSensitive,
                end: !1
            }, T)), !j) return null;
        Object.assign(c, j.params), w.push({
            params: c,
            pathname: Gt([p, j.pathname]),
            pathnameBase: W0(Gt([p, j.pathnameBase])),
            route: R
        }), j.pathnameBase !== "/" && (p = Gt([p, j.pathnameBase]))
    }
    return w
}

function Eo(i, a) {
    typeof i == "string" && (i = {
        path: i,
        caseSensitive: !1,
        end: !0
    });
    let [s, f] = I0(i.path, i.caseSensitive, i.end), c = a.match(s);
    if (!c) return null;
    let p = c[0],
        w = p.replace(/(.)\/+$/, "$1"),
        C = c.slice(1);
    return {
        params: f.reduce((S, {
            paramName: T,
            isOptional: j
        }, R) => {
            if (T === "*") {
                let z = C[R] || "";
                w = p.slice(0, p.length - z.length).replace(/(.)\/+$/, "$1")
            }
            const I = C[R];
            return j && !I ? S[T] = void 0 : S[T] = (I || "").replace(/%2F/g, "/"), S
        }, {}),
        pathname: p,
        pathnameBase: w,
        pattern: i
    }
}

function I0(i, a = !1, s = !0) {
    mn(i === "*" || !i.endsWith("*") || i.endsWith("/*"), `Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);
    let f = [],
        c = "^" + i.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (w, C, x) => (f.push({
            paramName: C,
            isOptional: x != null
        }), x ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return i.endsWith("*") ? (f.push({
        paramName: "*"
    }), c += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? c += "\\/*$" : i !== "" && i !== "/" && (c += "(?:(?=\\/|$))"), [new RegExp(c, a ? void 0 : "i"), f]
}

function A0(i) {
    try {
        return i.split("/").map(a => decodeURIComponent(a).replace(/\//g, "%2F")).join("/")
    } catch (a) {
        return mn(!1, `The URL path "${i}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`), i
    }
}

function hn(i, a) {
    if (a === "/") return i;
    if (!i.toLowerCase().startsWith(a.toLowerCase())) return null;
    let s = a.endsWith("/") ? a.length - 1 : a.length,
        f = i.charAt(s);
    return f && f !== "/" ? null : i.slice(s) || "/"
}

function U0(i, a = "/") {
    let {
        pathname: s,
        search: f = "",
        hash: c = ""
    } = typeof i == "string" ? br(i) : i;
    return {
        pathname: s ? s.startsWith("/") ? s : B0(s, a) : a,
        search: V0(f),
        hash: G0(c)
    }
}

function B0(i, a) {
    let s = a.replace(/\/+$/, "").split("/");
    return i.split("/").forEach(c => {
        c === ".." ? s.length > 1 && s.pop() : c !== "." && s.push(c)
    }), s.length > 1 ? s.join("/") : "/"
}

function ku(i, a, s, f) {
    return `Cannot include a '${i}' character in a manually specified \`to.${a}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}

function H0(i) {
    return i.filter((a, s) => s === 0 || a.route.path && a.route.path.length > 0)
}

function qc(i) {
    let a = H0(i);
    return a.map((s, f) => f === a.length - 1 ? s.pathname : s.pathnameBase)
}

function Jc(i, a, s, f = !1) {
    let c;
    typeof i == "string" ? c = br(i) : (c = { ...i
    }, He(!c.pathname || !c.pathname.includes("?"), ku("?", "pathname", "search", c)), He(!c.pathname || !c.pathname.includes("#"), ku("#", "pathname", "hash", c)), He(!c.search || !c.search.includes("#"), ku("#", "search", "hash", c)));
    let p = i === "" || c.pathname === "",
        w = p ? "/" : c.pathname,
        C;
    if (w == null) C = s;
    else {
        let j = a.length - 1;
        if (!f && w.startsWith("..")) {
            let R = w.split("/");
            for (; R[0] === "..";) R.shift(), j -= 1;
            c.pathname = R.join("/")
        }
        C = j >= 0 ? a[j] : "/"
    }
    let x = U0(c, C),
        S = w && w !== "/" && w.endsWith("/"),
        T = (p || w === ".") && s.endsWith("/");
    return !x.pathname.endsWith("/") && (S || T) && (x.pathname += "/"), x
}
var Gt = i => i.join("/").replace(/\/\/+/g, "/"),
    W0 = i => i.replace(/\/+$/, "").replace(/^\/*/, "/"),
    V0 = i => !i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i,
    G0 = i => !i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i;

function $0(i) {
    return i != null && typeof i.status == "number" && typeof i.statusText == "string" && typeof i.internal == "boolean" && "data" in i
}
var bc = ["POST", "PUT", "PATCH", "DELETE"];
new Set(bc);
var Q0 = ["GET", ...bc];
new Set(Q0);
var nr = N.createContext(null);
nr.displayName = "DataRouter";
var jo = N.createContext(null);
jo.displayName = "DataRouterState";
var ef = N.createContext({
    isTransitioning: !1
});
ef.displayName = "ViewTransition";
var Y0 = N.createContext(new Map);
Y0.displayName = "Fetchers";
var K0 = N.createContext(null);
K0.displayName = "Await";
var Ot = N.createContext(null);
Ot.displayName = "Navigation";
var To = N.createContext(null);
To.displayName = "Location";
var $t = N.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
$t.displayName = "Route";
var _u = N.createContext(null);
_u.displayName = "RouteError";

function X0(i, {
    relative: a
} = {}) {
    He(el(), "useHref() may be used only in the context of a <Router> component.");
    let {
        basename: s,
        navigator: f
    } = N.useContext(Ot), {
        hash: c,
        pathname: p,
        search: w
    } = tl(i, {
        relative: a
    }), C = p;
    return s !== "/" && (C = p === "/" ? s : Gt([s, p])), f.createHref({
        pathname: C,
        search: w,
        hash: c
    })
}

function el() {
    return N.useContext(To) != null
}

function vn() {
    return He(el(), "useLocation() may be used only in the context of a <Router> component."), N.useContext(To).location
}
var tf = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";

function nf(i) {
    N.useContext(Ot).static || N.useLayoutEffect(i)
}

function Z0() {
    let {
        isDataRoute: i
    } = N.useContext($t);
    return i ? a2() : q0()
}

function q0() {
    He(el(), "useNavigate() may be used only in the context of a <Router> component.");
    let i = N.useContext(nr),
        {
            basename: a,
            navigator: s
        } = N.useContext(Ot),
        {
            matches: f
        } = N.useContext($t),
        {
            pathname: c
        } = vn(),
        p = JSON.stringify(qc(f)),
        w = N.useRef(!1);
    return nf(() => {
        w.current = !0
    }), N.useCallback((x, S = {}) => {
        if (mn(w.current, tf), !w.current) return;
        if (typeof x == "number") {
            s.go(x);
            return
        }
        let T = Jc(x, JSON.parse(p), c, S.relative === "path");
        i == null && a !== "/" && (T.pathname = T.pathname === "/" ? a : Gt([a, T.pathname])), (S.replace ? s.replace : s.push)(T, S.state, S)
    }, [a, s, p, c, i])
}
N.createContext(null);

function tl(i, {
    relative: a
} = {}) {
    let {
        matches: s
    } = N.useContext($t), {
        pathname: f
    } = vn(), c = JSON.stringify(qc(s));
    return N.useMemo(() => Jc(i, JSON.parse(c), f, a === "path"), [i, c, f, a])
}

function J0(i, a, s, f) {
    He(el(), "useRoutes() may be used only in the context of a <Router> component.");
    let {
        navigator: c
    } = N.useContext(Ot), {
        matches: p
    } = N.useContext($t), w = p[p.length - 1], C = w ? w.params : {};
    w && w.pathname;
    let x = w ? w.pathnameBase : "/";
    w && w.route;
    let S = vn(),
        T;
    T = S;
    let j = T.pathname || "/",
        R = j;
    if (x !== "/") {
        let A = x.replace(/^\//, "").split("/");
        R = "/" + j.replace(/^\//, "").split("/").slice(A.length).join("/")
    }
    let I = Kc(i, {
        pathname: R
    });
    return r2(I && I.map(A => Object.assign({}, A, {
        params: Object.assign({}, C, A.params),
        pathname: Gt([x, c.encodeLocation ? c.encodeLocation(A.pathname).pathname : A.pathname]),
        pathnameBase: A.pathnameBase === "/" ? x : Gt([x, c.encodeLocation ? c.encodeLocation(A.pathnameBase).pathname : A.pathnameBase])
    })), p, s, f)
}

function b0() {
    let i = s2(),
        a = $0(i) ? `${i.status} ${i.statusText}` : i instanceof Error ? i.message : JSON.stringify(i),
        s = i instanceof Error ? i.stack : null,
        c = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return N.createElement(N.Fragment, null, N.createElement("h2", null, "Unexpected Application Error!"), N.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, a), s ? N.createElement("pre", {
        style: c
    }, s) : null, null)
}
var e2 = N.createElement(b0, null),
    t2 = class extends N.Component {
        constructor(i) {
            super(i), this.state = {
                location: i.location,
                revalidation: i.revalidation,
                error: i.error
            }
        }
        static getDerivedStateFromError(i) {
            return {
                error: i
            }
        }
        static getDerivedStateFromProps(i, a) {
            return a.location !== i.location || a.revalidation !== "idle" && i.revalidation === "idle" ? {
                error: i.error,
                location: i.location,
                revalidation: i.revalidation
            } : {
                error: i.error !== void 0 ? i.error : a.error,
                location: a.location,
                revalidation: i.revalidation || a.revalidation
            }
        }
        componentDidCatch(i, a) {
            console.error("React Router caught the following error during render", i, a)
        }
        render() {
            return this.state.error !== void 0 ? N.createElement($t.Provider, {
                value: this.props.routeContext
            }, N.createElement(_u.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children
        }
    };

function n2({
    routeContext: i,
    match: a,
    children: s
}) {
    let f = N.useContext(nr);
    return f && f.static && f.staticContext && (a.route.errorElement || a.route.ErrorBoundary) && (f.staticContext._deepestRenderedBoundaryId = a.route.id), N.createElement($t.Provider, {
        value: i
    }, s)
}

function r2(i, a = [], s = null, f = null) {
    if (i == null) {
        if (!s) return null;
        if (s.errors) i = s.matches;
        else if (a.length === 0 && !s.initialized && s.matches.length > 0) i = s.matches;
        else return null
    }
    let c = i,
        p = s == null ? void 0 : s.errors;
    if (p != null) {
        let x = c.findIndex(S => S.route.id && (p == null ? void 0 : p[S.route.id]) !== void 0);
        He(x >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`), c = c.slice(0, Math.min(c.length, x + 1))
    }
    let w = !1,
        C = -1;
    if (s)
        for (let x = 0; x < c.length; x++) {
            let S = c[x];
            if ((S.route.HydrateFallback || S.route.hydrateFallbackElement) && (C = x), S.route.id) {
                let {
                    loaderData: T,
                    errors: j
                } = s, R = S.route.loader && !T.hasOwnProperty(S.route.id) && (!j || j[S.route.id] === void 0);
                if (S.route.lazy || R) {
                    w = !0, C >= 0 ? c = c.slice(0, C + 1) : c = [c[0]];
                    break
                }
            }
        }
    return c.reduceRight((x, S, T) => {
        let j, R = !1,
            I = null,
            z = null;
        s && (j = p && S.route.id ? p[S.route.id] : void 0, I = S.route.errorElement || e2, w && (C < 0 && T === 0 ? (c2("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), R = !0, z = null) : C === T && (R = !0, z = S.route.hydrateFallbackElement || null)));
        let A = a.concat(c.slice(0, T + 1)),
            F = () => {
                let U;
                return j ? U = I : R ? U = z : S.route.Component ? U = N.createElement(S.route.Component, null) : S.route.element ? U = S.route.element : U = x, N.createElement(n2, {
                    match: S,
                    routeContext: {
                        outlet: x,
                        matches: A,
                        isDataRoute: s != null
                    },
                    children: U
                })
            };
        return s && (S.route.ErrorBoundary || S.route.errorElement || T === 0) ? N.createElement(t2, {
            location: s.location,
            revalidation: s.revalidation,
            component: I,
            error: j,
            children: F(),
            routeContext: {
                outlet: null,
                matches: A,
                isDataRoute: !0
            }
        }) : F()
    }, null)
}

function Ou(i) {
    return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function l2(i) {
    let a = N.useContext(nr);
    return He(a, Ou(i)), a
}

function o2(i) {
    let a = N.useContext(jo);
    return He(a, Ou(i)), a
}

function i2(i) {
    let a = N.useContext($t);
    return He(a, Ou(i)), a
}

function Fu(i) {
    let a = i2(i),
        s = a.matches[a.matches.length - 1];
    return He(s.route.id, `${i} can only be used on routes that contain a unique "id"`), s.route.id
}

function u2() {
    return Fu("useRouteId")
}

function s2() {
    var f;
    let i = N.useContext(_u),
        a = o2("useRouteError"),
        s = Fu("useRouteError");
    return i !== void 0 ? i : (f = a.errors) == null ? void 0 : f[s]
}

function a2() {
    let {
        router: i
    } = l2("useNavigate"), a = Fu("useNavigate"), s = N.useRef(!1);
    return nf(() => {
        s.current = !0
    }), N.useCallback(async (c, p = {}) => {
        mn(s.current, tf), s.current && (typeof c == "number" ? i.navigate(c) : await i.navigate(c, {
            fromRouteId: a,
            ...p
        }))
    }, [i, a])
}
var Fc = {};

function c2(i, a, s) {
    Fc[i] || (Fc[i] = !0, mn(!1, s))
}
N.memo(f2);

function f2({
    routes: i,
    future: a,
    state: s
}) {
    return J0(i, void 0, s, a)
}

function d2({
    basename: i = "/",
    children: a = null,
    location: s,
    navigationType: f = "POP",
    navigator: c,
    static: p = !1
}) {
    He(!el(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let w = i.replace(/^\/*/, "/"),
        C = N.useMemo(() => ({
            basename: w,
            navigator: c,
            static: p,
            future: {}
        }), [w, c, p]);
    typeof s == "string" && (s = br(s));
    let {
        pathname: x = "/",
        search: S = "",
        hash: T = "",
        state: j = null,
        key: R = "default"
    } = s, I = N.useMemo(() => {
        let z = hn(x, w);
        return z == null ? null : {
            location: {
                pathname: z,
                search: S,
                hash: T,
                state: j,
                key: R
            },
            navigationType: f
        }
    }, [w, x, S, T, j, R, f]);
    return mn(I != null, `<Router basename="${w}"> is not able to match the URL "${x}${S}${T}" because it does not start with the basename, so the <Router> won't render anything.`), I == null ? null : N.createElement(Ot.Provider, {
        value: C
    }, N.createElement(To.Provider, {
        children: a,
        value: I
    }))
}
var xo = "get",
    So = "application/x-www-form-urlencoded";

function zo(i) {
    return i != null && typeof i.tagName == "string"
}

function p2(i) {
    return zo(i) && i.tagName.toLowerCase() === "button"
}

function h2(i) {
    return zo(i) && i.tagName.toLowerCase() === "form"
}

function m2(i) {
    return zo(i) && i.tagName.toLowerCase() === "input"
}

function v2(i) {
    return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey)
}

function g2(i, a) {
    return i.button === 0 && (!a || a === "_self") && !v2(i)
}
var yo = null;

function y2() {
    if (yo === null) try {
        new FormData(document.createElement("form"), 0), yo = !1
    } catch {
        yo = !0
    }
    return yo
}
var w2 = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

function Eu(i) {
    return i != null && !w2.has(i) ? (mn(!1, `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${So}"`), null) : i
}

function x2(i, a) {
    let s, f, c, p, w;
    if (h2(i)) {
        let C = i.getAttribute("action");
        f = C ? hn(C, a) : null, s = i.getAttribute("method") || xo, c = Eu(i.getAttribute("enctype")) || So, p = new FormData(i)
    } else if (p2(i) || m2(i) && (i.type === "submit" || i.type === "image")) {
        let C = i.form;
        if (C == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let x = i.getAttribute("formaction") || C.getAttribute("action");
        if (f = x ? hn(x, a) : null, s = i.getAttribute("formmethod") || C.getAttribute("method") || xo, c = Eu(i.getAttribute("formenctype")) || Eu(C.getAttribute("enctype")) || So, p = new FormData(C, i), !y2()) {
            let {
                name: S,
                type: T,
                value: j
            } = i;
            if (T === "image") {
                let R = S ? `${S}.` : "";
                p.append(`${R}x`, "0"), p.append(`${R}y`, "0")
            } else S && p.append(S, j)
        }
    } else {
        if (zo(i)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        s = xo, f = null, c = So, w = i
    }
    return p && c === "text/plain" && (w = p, p = void 0), {
        action: f,
        method: s.toLowerCase(),
        encType: c,
        formData: p,
        body: w
    }
}

function Du(i, a) {
    if (i === !1 || i === null || typeof i > "u") throw new Error(a)
}
async function S2(i, a) {
    if (i.id in a) return a[i.id];
    try {
        let s = await
        import (i.module);
        return a[i.id] = s, s
    } catch (s) {
        return console.error(`Error loading route module \`${i.module}\`, reloading page...`), console.error(s), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {})
    }
}

function k2(i) {
    return i == null ? !1 : i.href == null ? i.rel === "preload" && typeof i.imageSrcSet == "string" && typeof i.imageSizes == "string" : typeof i.rel == "string" && typeof i.href == "string"
}
async function E2(i, a, s) {
    let f = await Promise.all(i.map(async c => {
        let p = a.routes[c.route.id];
        if (p) {
            let w = await S2(p, s);
            return w.links ? w.links() : []
        }
        return []
    }));
    return P2(f.flat(1).filter(k2).filter(c => c.rel === "stylesheet" || c.rel === "preload").map(c => c.rel === "stylesheet" ? { ...c,
        rel: "prefetch",
        as: "style"
    } : { ...c,
        rel: "prefetch"
    }))
}

function Dc(i, a, s, f, c, p) {
    let w = (x, S) => s[S] ? x.route.id !== s[S].route.id : !0,
        C = (x, S) => {
            var T;
            return s[S].pathname !== x.pathname || ((T = s[S].route.path) == null ? void 0 : T.endsWith("*")) && s[S].params["*"] !== x.params["*"]
        };
    return p === "assets" ? a.filter((x, S) => w(x, S) || C(x, S)) : p === "data" ? a.filter((x, S) => {
        var j;
        let T = f.routes[x.route.id];
        if (!T || !T.hasLoader) return !1;
        if (w(x, S) || C(x, S)) return !0;
        if (x.route.shouldRevalidate) {
            let R = x.route.shouldRevalidate({
                currentUrl: new URL(c.pathname + c.search + c.hash, window.origin),
                currentParams: ((j = s[0]) == null ? void 0 : j.params) || {},
                nextUrl: new URL(i, window.origin),
                nextParams: x.params,
                defaultShouldRevalidate: !0
            });
            if (typeof R == "boolean") return R
        }
        return !0
    }) : []
}

function C2(i, a) {
    return L2(i.map(s => {
        let f = a.routes[s.route.id];
        if (!f) return [];
        let c = [f.module];
        return f.imports && (c = c.concat(f.imports)), c
    }).flat(1))
}

function L2(i) {
    return [...new Set(i)]
}

function N2(i) {
    let a = {},
        s = Object.keys(i).sort();
    for (let f of s) a[f] = i[f];
    return a
}

function P2(i, a) {
    let s = new Set;
    return new Set(a), i.reduce((f, c) => {
        let p = JSON.stringify(N2(c));
        return s.has(p) || (s.add(p), f.push({
            key: p,
            link: c
        })), f
    }, [])
}

function R2(i) {
    let a = typeof i == "string" ? new URL(i, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : i;
    return a.pathname === "/" ? a.pathname = "_root.data" : a.pathname = `${a.pathname.replace(/\/$/,"")}.data`, a
}

function j2() {
    let i = N.useContext(nr);
    return Du(i, "You must render this element inside a <DataRouterContext.Provider> element"), i
}

function T2() {
    let i = N.useContext(jo);
    return Du(i, "You must render this element inside a <DataRouterStateContext.Provider> element"), i
}
var Iu = N.createContext(void 0);
Iu.displayName = "FrameworkContext";

function rf() {
    let i = N.useContext(Iu);
    return Du(i, "You must render this element inside a <HydratedRouter> element"), i
}

function z2(i, a) {
    let s = N.useContext(Iu),
        [f, c] = N.useState(!1),
        [p, w] = N.useState(!1),
        {
            onFocus: C,
            onBlur: x,
            onMouseEnter: S,
            onMouseLeave: T,
            onTouchStart: j
        } = a,
        R = N.useRef(null);
    N.useEffect(() => {
        if (i === "render" && w(!0), i === "viewport") {
            let A = U => {
                    U.forEach(q => {
                        w(q.isIntersecting)
                    })
                },
                F = new IntersectionObserver(A, {
                    threshold: .5
                });
            return R.current && F.observe(R.current), () => {
                F.disconnect()
            }
        }
    }, [i]), N.useEffect(() => {
        if (f) {
            let A = setTimeout(() => {
                w(!0)
            }, 100);
            return () => {
                clearTimeout(A)
            }
        }
    }, [f]);
    let I = () => {
            c(!0)
        },
        z = () => {
            c(!1), w(!1)
        };
    return s ? i !== "intent" ? [p, R, {}] : [p, R, {
        onFocus: Xr(C, I),
        onBlur: Xr(x, z),
        onMouseEnter: Xr(S, I),
        onMouseLeave: Xr(T, z),
        onTouchStart: Xr(j, I)
    }] : [!1, R, {}]
}

function Xr(i, a) {
    return s => {
        i && i(s), s.defaultPrevented || a(s)
    }
}

function M2({
    page: i,
    ...a
}) {
    let {
        router: s
    } = j2(), f = N.useMemo(() => Kc(s.routes, i, s.basename), [s.routes, i, s.basename]);
    return f ? N.createElement(O2, {
        page: i,
        matches: f,
        ...a
    }) : (console.warn(`Tried to prefetch ${i} but no routes matched.`), null)
}

function _2(i) {
    let {
        manifest: a,
        routeModules: s
    } = rf(), [f, c] = N.useState([]);
    return N.useEffect(() => {
        let p = !1;
        return E2(i, a, s).then(w => {
            p || c(w)
        }), () => {
            p = !0
        }
    }, [i, a, s]), f
}

function O2({
    page: i,
    matches: a,
    ...s
}) {
    let f = vn(),
        {
            manifest: c,
            routeModules: p
        } = rf(),
        {
            loaderData: w,
            matches: C
        } = T2(),
        x = N.useMemo(() => Dc(i, a, C, c, f, "data"), [i, a, C, c, f]),
        S = N.useMemo(() => Dc(i, a, C, c, f, "assets"), [i, a, C, c, f]),
        T = N.useMemo(() => {
            if (i === f.pathname + f.search + f.hash) return [];
            let I = new Set,
                z = !1;
            if (a.forEach(F => {
                    var q;
                    let U = c.routes[F.route.id];
                    !U || !U.hasLoader || (!x.some(Y => Y.route.id === F.route.id) && F.route.id in w && ((q = p[F.route.id]) != null && q.shouldRevalidate) || U.hasClientLoader ? z = !0 : I.add(F.route.id))
                }), I.size === 0) return [];
            let A = R2(i);
            return z && I.size > 0 && A.searchParams.set("_routes", a.filter(F => I.has(F.route.id)).map(F => F.route.id).join(",")), [A.pathname + A.search]
        }, [w, f, c, x, a, i, p]),
        j = N.useMemo(() => C2(S, c), [S, c]),
        R = _2(S);
    return N.createElement(N.Fragment, null, T.map(I => N.createElement("link", {
        key: I,
        rel: "prefetch",
        as: "fetch",
        href: I,
        ...s
    })), j.map(I => N.createElement("link", {
        key: I,
        rel: "modulepreload",
        href: I,
        ...s
    })), R.map(({
        key: I,
        link: z
    }) => N.createElement("link", {
        key: I,
        ...z
    })))
}

function F2(...i) {
    return a => {
        i.forEach(s => {
            typeof s == "function" ? s(a) : s != null && (s.current = a)
        })
    }
}
var lf = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    lf && (window.__reactRouterVersion = "7.0.1")
} catch {}

function D2({
    basename: i,
    children: a,
    window: s
}) {
    let f = N.useRef();
    f.current == null && (f.current = E0({
        window: s,
        v5Compat: !0
    }));
    let c = f.current,
        [p, w] = N.useState({
            action: c.action,
            location: c.location
        }),
        C = N.useCallback(x => {
            N.startTransition(() => w(x))
        }, [w]);
    return N.useLayoutEffect(() => c.listen(C), [c, C]), N.createElement(d2, {
        basename: i,
        children: a,
        location: p.location,
        navigationType: p.action,
        navigator: c
    })
}
var of = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, uf = N.forwardRef(function({
    onClick: a,
    discover: s = "render",
    prefetch: f = "none",
    relative: c,
    reloadDocument: p,
    replace: w,
    state: C,
    target: x,
    to: S,
    preventScrollReset: T,
    viewTransition: j,
    ...R
}, I) {
    let {
        basename: z
    } = N.useContext(Ot), A = typeof S == "string" && of .test(S), F, U = !1;
    if (typeof S == "string" && A && (F = S, lf)) try {
        let W = new URL(window.location.href),
            ye = S.startsWith("//") ? new URL(W.protocol + S) : new URL(S),
            Ae = hn(ye.pathname, z);
        ye.origin === W.origin && Ae != null ? S = Ae + ye.search + ye.hash : U = !0
    } catch {
        mn(!1, `<Link to="${S}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
    }
    let q = X0(S, {
            relative: c
        }),
        [Y, ee, se] = z2(f, R),
        de = B2(S, {
            replace: w,
            state: C,
            target: x,
            preventScrollReset: T,
            relative: c,
            viewTransition: j
        });

    function fe(W) {
        a && a(W), W.defaultPrevented || de(W)
    }
    let we = N.createElement("a", { ...R,
        ...se,
        href: F || q,
        onClick: U || p ? a : fe,
        ref: F2(I, ee),
        target: x,
        "data-discover": !A && s === "render" ? "true" : void 0
    });
    return Y && !A ? N.createElement(N.Fragment, null, we, N.createElement(M2, {
        page: q
    })) : we
});
uf.displayName = "Link";
var I2 = N.forwardRef(function({
    "aria-current": a = "page",
    caseSensitive: s = !1,
    className: f = "",
    end: c = !1,
    style: p,
    to: w,
    viewTransition: C,
    children: x,
    ...S
}, T) {
    let j = tl(w, {
            relative: S.relative
        }),
        R = vn(),
        I = N.useContext(jo),
        {
            navigator: z,
            basename: A
        } = N.useContext(Ot),
        F = I != null && $2(j) && C === !0,
        U = z.encodeLocation ? z.encodeLocation(j).pathname : j.pathname,
        q = R.pathname,
        Y = I && I.navigation && I.navigation.location ? I.navigation.location.pathname : null;
    s || (q = q.toLowerCase(), Y = Y ? Y.toLowerCase() : null, U = U.toLowerCase()), Y && A && (Y = hn(Y, A) || Y);
    const ee = U !== "/" && U.endsWith("/") ? U.length - 1 : U.length;
    let se = q === U || !c && q.startsWith(U) && q.charAt(ee) === "/",
        de = Y != null && (Y === U || !c && Y.startsWith(U) && Y.charAt(U.length) === "/"),
        fe = {
            isActive: se,
            isPending: de,
            isTransitioning: F
        },
        we = se ? a : void 0,
        W;
    typeof f == "function" ? W = f(fe) : W = [f, se ? "active" : null, de ? "pending" : null, F ? "transitioning" : null].filter(Boolean).join(" ");
    let ye = typeof p == "function" ? p(fe) : p;
    return N.createElement(uf, { ...S,
        "aria-current": we,
        className: W,
        ref: T,
        style: ye,
        to: w,
        viewTransition: C
    }, typeof x == "function" ? x(fe) : x)
});
I2.displayName = "NavLink";
var A2 = N.forwardRef(({
    discover: i = "render",
    fetcherKey: a,
    navigate: s,
    reloadDocument: f,
    replace: c,
    state: p,
    method: w = xo,
    action: C,
    onSubmit: x,
    relative: S,
    preventScrollReset: T,
    viewTransition: j,
    ...R
}, I) => {
    let z = V2(),
        A = G2(C, {
            relative: S
        }),
        F = w.toLowerCase() === "get" ? "get" : "post",
        U = typeof C == "string" && of .test(C),
        q = Y => {
            if (x && x(Y), Y.defaultPrevented) return;
            Y.preventDefault();
            let ee = Y.nativeEvent.submitter,
                se = (ee == null ? void 0 : ee.getAttribute("formmethod")) || w;
            z(ee || Y.currentTarget, {
                fetcherKey: a,
                method: se,
                navigate: s,
                replace: c,
                state: p,
                relative: S,
                preventScrollReset: T,
                viewTransition: j
            })
        };
    return N.createElement("form", {
        ref: I,
        method: F,
        action: A,
        onSubmit: f ? x : q,
        ...R,
        "data-discover": !U && i === "render" ? "true" : void 0
    })
});
A2.displayName = "Form";

function U2(i) {
    return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function sf(i) {
    let a = N.useContext(nr);
    return He(a, U2(i)), a
}

function B2(i, {
    target: a,
    replace: s,
    state: f,
    preventScrollReset: c,
    relative: p,
    viewTransition: w
} = {}) {
    let C = Z0(),
        x = vn(),
        S = tl(i, {
            relative: p
        });
    return N.useCallback(T => {
        if (g2(T, a)) {
            T.preventDefault();
            let j = s !== void 0 ? s : qr(x) === qr(S);
            C(i, {
                replace: j,
                state: f,
                preventScrollReset: c,
                relative: p,
                viewTransition: w
            })
        }
    }, [x, C, S, s, f, a, i, c, p, w])
}
var H2 = 0,
    W2 = () => `__${String(++H2)}__`;

function V2() {
    let {
        router: i
    } = sf("useSubmit"), {
        basename: a
    } = N.useContext(Ot), s = u2();
    return N.useCallback(async (f, c = {}) => {
        let {
            action: p,
            method: w,
            encType: C,
            formData: x,
            body: S
        } = x2(f, a);
        if (c.navigate === !1) {
            let T = c.fetcherKey || W2();
            await i.fetch(T, s, c.action || p, {
                preventScrollReset: c.preventScrollReset,
                formData: x,
                body: S,
                formMethod: c.method || w,
                formEncType: c.encType || C,
                flushSync: c.flushSync
            })
        } else await i.navigate(c.action || p, {
            preventScrollReset: c.preventScrollReset,
            formData: x,
            body: S,
            formMethod: c.method || w,
            formEncType: c.encType || C,
            replace: c.replace,
            state: c.state,
            fromRouteId: s,
            flushSync: c.flushSync,
            viewTransition: c.viewTransition
        })
    }, [i, a, s])
}

function G2(i, {
    relative: a
} = {}) {
    let {
        basename: s
    } = N.useContext(Ot), f = N.useContext($t);
    He(f, "useFormAction must be used inside a RouteContext");
    let [c] = f.matches.slice(-1), p = { ...tl(i || ".", {
            relative: a
        })
    }, w = vn();
    if (i == null) {
        p.search = w.search;
        let C = new URLSearchParams(p.search),
            x = C.getAll("index");
        if (x.some(T => T === "")) {
            C.delete("index"), x.filter(j => j).forEach(j => C.append("index", j));
            let T = C.toString();
            p.search = T ? `?${T}` : ""
        }
    }
    return (!i || i === ".") && c.route.index && (p.search = p.search ? p.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (p.pathname = p.pathname === "/" ? s : Gt([s, p.pathname])), qr(p)
}

function $2(i, a = {}) {
    let s = N.useContext(ef);
    He(s != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {
        basename: f
    } = sf("useViewTransitionState"), c = tl(i, {
        relative: a.relative
    });
    if (!s.isTransitioning) return !1;
    let p = hn(s.currentLocation.pathname, f) || s.currentLocation.pathname,
        w = hn(s.nextLocation.pathname, f) || s.nextLocation.pathname;
    return Eo(c.pathname, w) != null || Eo(c.pathname, p) != null
}
new TextEncoder;
var ko = {
        exports: {}
    },
    Q2 = ko.exports,
    Ic;

function Y2() {
    return Ic || (Ic = 1, function(i, a) {
        (function(f, c) {
            i.exports = c()
        })(Q2, function() {
            return function(s) {
                var f = {};

                function c(p) {
                    if (f[p]) return f[p].exports;
                    var w = f[p] = {
                        i: p,
                        l: !1,
                        exports: {}
                    };
                    return s[p].call(w.exports, w, w.exports, c), w.l = !0, w.exports
                }
                return c.m = s, c.c = f, c.d = function(p, w, C) {
                    c.o(p, w) || Object.defineProperty(p, w, {
                        enumerable: !0,
                        get: C
                    })
                }, c.r = function(p) {
                    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(p, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(p, "__esModule", {
                        value: !0
                    })
                }, c.t = function(p, w) {
                    if (w & 1 && (p = c(p)), w & 8 || w & 4 && typeof p == "object" && p && p.__esModule) return p;
                    var C = Object.create(null);
                    if (c.r(C), Object.defineProperty(C, "default", {
                            enumerable: !0,
                            value: p
                        }), w & 2 && typeof p != "string")
                        for (var x in p) c.d(C, x, (function(S) {
                            return p[S]
                        }).bind(null, x));
                    return C
                }, c.n = function(p) {
                    var w = p && p.__esModule ? function() {
                        return p.default
                    } : function() {
                        return p
                    };
                    return c.d(w, "a", w), w
                }, c.o = function(p, w) {
                    return Object.prototype.hasOwnProperty.call(p, w)
                }, c.p = "", c(c.s = 0)
            }([function(s, f, c) {
                c.r(f);
                var p = function(h) {
                        return Array.isArray(h) ? h : [h]
                    },
                    w = function(h) {
                        return h instanceof Node
                    },
                    C = function(h) {
                        return h instanceof NodeList
                    },
                    x = function(h, H) {
                        if (h && H) {
                            h = C(h) ? h : [h];
                            for (var G = 0; G < h.length && H(h[G], G, h.length) !== !0; G++);
                        }
                    },
                    S = function(h) {
                        return console.error("[scroll-lock] ".concat(h))
                    },
                    T = function(h) {
                        if (Array.isArray(h)) {
                            var H = h.join(", ");
                            return H
                        }
                    },
                    j = function(h) {
                        var H = [];
                        return x(h, function(G) {
                            return H.push(G)
                        }), H
                    },
                    R = function(h, H) {
                        var G = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
                            ne = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : document;
                        if (G && j(ne.querySelectorAll(H)).indexOf(h) !== -1) return h;
                        for (;
                            (h = h.parentElement) && j(ne.querySelectorAll(H)).indexOf(h) === -1;);
                        return h
                    },
                    I = function(h, H) {
                        var G = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : document,
                            ne = j(G.querySelectorAll(H)).indexOf(h) !== -1;
                        return ne
                    },
                    z = function(h) {
                        if (h) {
                            var H = getComputedStyle(h),
                                G = H.overflow === "hidden";
                            return G
                        }
                    },
                    A = function(h) {
                        if (h) {
                            if (z(h)) return !0;
                            var H = h.scrollTop;
                            return H <= 0
                        }
                    },
                    F = function(h) {
                        if (h) {
                            if (z(h)) return !0;
                            var H = h.scrollTop,
                                G = h.scrollHeight,
                                ne = H + h.offsetHeight;
                            return ne >= G
                        }
                    },
                    U = function(h) {
                        if (h) {
                            if (z(h)) return !0;
                            var H = h.scrollLeft;
                            return H <= 0
                        }
                    },
                    q = function(h) {
                        if (h) {
                            if (z(h)) return !0;
                            var H = h.scrollLeft,
                                G = h.scrollWidth,
                                ne = H + h.offsetWidth;
                            return ne >= G
                        }
                    },
                    Y = function(h) {
                        var H = 'textarea, [contenteditable="true"]';
                        return I(h, H)
                    },
                    ee = function(h) {
                        var H = 'input[type="range"]';
                        return I(h, H)
                    };
                c.d(f, "disablePageScroll", function() {
                    return ye
                }), c.d(f, "enablePageScroll", function() {
                    return Ae
                }), c.d(f, "getScrollState", function() {
                    return ze
                }), c.d(f, "clearQueueScrollLocks", function() {
                    return Re
                }), c.d(f, "getTargetScrollBarWidth", function() {
                    return Ne
                }), c.d(f, "getCurrentTargetScrollBarWidth", function() {
                    return Oe
                }), c.d(f, "getPageScrollBarWidth", function() {
                    return Ee
                }), c.d(f, "getCurrentPageScrollBarWidth", function() {
                    return pe
                }), c.d(f, "addScrollableTarget", function() {
                    return M
                }), c.d(f, "removeScrollableTarget", function() {
                    return Z
                }), c.d(f, "addScrollableSelector", function() {
                    return $
                }), c.d(f, "removeScrollableSelector", function() {
                    return v
                }), c.d(f, "addLockableTarget", function() {
                    return P
                }), c.d(f, "addLockableSelector", function() {
                    return re
                }), c.d(f, "setFillGapMethod", function() {
                    return te
                }), c.d(f, "addFillGapTarget", function() {
                    return ie
                }), c.d(f, "removeFillGapTarget", function() {
                    return ae
                }), c.d(f, "addFillGapSelector", function() {
                    return he
                }), c.d(f, "removeFillGapSelector", function() {
                    return ve
                }), c.d(f, "refillGaps", function() {
                    return xe
                });

                function se(V) {
                    for (var h = 1; h < arguments.length; h++) {
                        var H = arguments[h] != null ? arguments[h] : {},
                            G = Object.keys(H);
                        typeof Object.getOwnPropertySymbols == "function" && (G = G.concat(Object.getOwnPropertySymbols(H).filter(function(ne) {
                            return Object.getOwnPropertyDescriptor(H, ne).enumerable
                        }))), G.forEach(function(ne) {
                            de(V, ne, H[ne])
                        })
                    }
                    return V
                }

                function de(V, h, H) {
                    return h in V ? Object.defineProperty(V, h, {
                        value: H,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : V[h] = H, V
                }
                var fe = ["padding", "margin", "width", "max-width", "none"],
                    we = 3,
                    W = {
                        scroll: !0,
                        queue: 0,
                        scrollableSelectors: ["[data-scroll-lock-scrollable]"],
                        lockableSelectors: ["body", "[data-scroll-lock-lockable]"],
                        fillGapSelectors: ["body", "[data-scroll-lock-fill-gap]", "[data-scroll-lock-lockable]"],
                        fillGapMethod: fe[0],
                        startTouchY: 0,
                        startTouchX: 0
                    },
                    ye = function(h) {
                        W.queue <= 0 && (W.scroll = !1, $e(), lr()), M(h), W.queue++
                    },
                    Ae = function(h) {
                        W.queue > 0 && W.queue--, W.queue <= 0 && (W.scroll = !0, Tn(), or()), Z(h)
                    },
                    ze = function() {
                        return W.scroll
                    },
                    Re = function() {
                        W.queue = 0
                    },
                    Ne = function(h) {
                        var H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                        if (w(h)) {
                            var G = h.style.overflowY;
                            H ? ze() || (h.style.overflowY = h.getAttribute("data-scroll-lock-saved-overflow-y-property")) : h.style.overflowY = "scroll";
                            var ne = Oe(h);
                            return h.style.overflowY = G, ne
                        } else return 0
                    },
                    Oe = function(h) {
                        if (w(h))
                            if (h === document.body) {
                                var H = document.documentElement.clientWidth,
                                    G = window.innerWidth,
                                    ne = G - H;
                                return ne
                            } else {
                                var ct = h.style.borderLeftWidth,
                                    Nt = h.style.borderRightWidth;
                                h.style.borderLeftWidth = "0px", h.style.borderRightWidth = "0px";
                                var Pt = h.offsetWidth - h.clientWidth;
                                return h.style.borderLeftWidth = ct, h.style.borderRightWidth = Nt, Pt
                            }
                        else return 0
                    },
                    Ee = function() {
                        var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                        return Ne(document.body, h)
                    },
                    pe = function() {
                        return Oe(document.body)
                    },
                    M = function(h) {
                        if (h) {
                            var H = p(h);
                            H.map(function(G) {
                                x(G, function(ne) {
                                    w(ne) ? ne.setAttribute("data-scroll-lock-scrollable", "") : S('"'.concat(ne, '" is not a Element.'))
                                })
                            })
                        }
                    },
                    Z = function(h) {
                        if (h) {
                            var H = p(h);
                            H.map(function(G) {
                                x(G, function(ne) {
                                    w(ne) ? ne.removeAttribute("data-scroll-lock-scrollable") : S('"'.concat(ne, '" is not a Element.'))
                                })
                            })
                        }
                    },
                    $ = function(h) {
                        if (h) {
                            var H = p(h);
                            H.map(function(G) {
                                W.scrollableSelectors.push(G)
                            })
                        }
                    },
                    v = function(h) {
                        if (h) {
                            var H = p(h);
                            H.map(function(G) {
                                W.scrollableSelectors = W.scrollableSelectors.filter(function(ne) {
                                    return ne !== G
                                })
                            })
                        }
                    },
                    P = function(h) {
                        if (h) {
                            var H = p(h);
                            H.map(function(G) {
                                x(G, function(ne) {
                                    w(ne) ? ne.setAttribute("data-scroll-lock-lockable", "") : S('"'.concat(ne, '" is not a Element.'))
                                })
                            }), ze() || $e()
                        }
                    },
                    re = function(h) {
                        if (h) {
                            var H = p(h);
                            H.map(function(G) {
                                W.lockableSelectors.push(G)
                            }), ze() || $e(), he(h)
                        }
                    },
                    te = function(h) {
                        if (h)
                            if (fe.indexOf(h) !== -1) W.fillGapMethod = h, xe();
                            else {
                                var H = fe.join(", ");
                                S('"'.concat(h, `" method is not available!
Available fill gap methods: `).concat(H, "."))
                            }
                    },
                    ie = function(h) {
                        if (h) {
                            var H = p(h);
                            H.map(function(G) {
                                x(G, function(ne) {
                                    w(ne) ? (ne.setAttribute("data-scroll-lock-fill-gap", ""), W.scroll || Mn(ne)) : S('"'.concat(ne, '" is not a Element.'))
                                })
                            })
                        }
                    },
                    ae = function(h) {
                        if (h) {
                            var H = p(h);
                            H.map(function(G) {
                                x(G, function(ne) {
                                    w(ne) ? (ne.removeAttribute("data-scroll-lock-fill-gap"), W.scroll || Lt(ne)) : S('"'.concat(ne, '" is not a Element.'))
                                })
                            })
                        }
                    },
                    he = function(h) {
                        if (h) {
                            var H = p(h);
                            H.map(function(G) {
                                W.fillGapSelectors.indexOf(G) === -1 && (W.fillGapSelectors.push(G), W.scroll || ir(G))
                            })
                        }
                    },
                    ve = function(h) {
                        if (h) {
                            var H = p(h);
                            H.map(function(G) {
                                W.fillGapSelectors = W.fillGapSelectors.filter(function(ne) {
                                    return ne !== G
                                }), W.scroll || Qt(G)
                            })
                        }
                    },
                    xe = function() {
                        W.scroll || lr()
                    },
                    $e = function() {
                        var h = T(W.lockableSelectors);
                        rl(h)
                    },
                    Tn = function() {
                        var h = T(W.lockableSelectors);
                        zn(h)
                    },
                    rl = function(h) {
                        var H = document.querySelectorAll(h);
                        x(H, function(G) {
                            rr(G)
                        })
                    },
                    zn = function(h) {
                        var H = document.querySelectorAll(h);
                        x(H, function(G) {
                            ll(G)
                        })
                    },
                    rr = function(h) {
                        if (w(h) && h.getAttribute("data-scroll-lock-locked") !== "true") {
                            var H = window.getComputedStyle(h);
                            h.setAttribute("data-scroll-lock-saved-overflow-y-property", H.overflowY), h.setAttribute("data-scroll-lock-saved-inline-overflow-property", h.style.overflow), h.setAttribute("data-scroll-lock-saved-inline-overflow-y-property", h.style.overflowY), h.style.overflow = "hidden", h.setAttribute("data-scroll-lock-locked", "true")
                        }
                    },
                    ll = function(h) {
                        w(h) && h.getAttribute("data-scroll-lock-locked") === "true" && (h.style.overflow = h.getAttribute("data-scroll-lock-saved-inline-overflow-property"), h.style.overflowY = h.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"), h.removeAttribute("data-scroll-lock-saved-overflow-property"), h.removeAttribute("data-scroll-lock-saved-inline-overflow-property"), h.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"), h.removeAttribute("data-scroll-lock-locked"))
                    },
                    lr = function() {
                        W.fillGapSelectors.map(function(h) {
                            ir(h)
                        })
                    },
                    or = function() {
                        W.fillGapSelectors.map(function(h) {
                            Qt(h)
                        })
                    },
                    ir = function(h) {
                        var H = document.querySelectorAll(h),
                            G = W.lockableSelectors.indexOf(h) !== -1;
                        x(H, function(ne) {
                            Mn(ne, G)
                        })
                    },
                    Mn = function(h) {
                        var H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                        if (w(h)) {
                            var G;
                            if (h.getAttribute("data-scroll-lock-lockable") === "" || H) G = Ne(h, !0);
                            else {
                                var ne = R(h, T(W.lockableSelectors));
                                G = Ne(ne, !0)
                            }
                            h.getAttribute("data-scroll-lock-filled-gap") === "true" && Lt(h);
                            var ct = window.getComputedStyle(h);
                            if (h.setAttribute("data-scroll-lock-filled-gap", "true"), h.setAttribute("data-scroll-lock-current-fill-gap-method", W.fillGapMethod), W.fillGapMethod === "margin") {
                                var Nt = parseFloat(ct.marginRight);
                                h.style.marginRight = "".concat(Nt + G, "px")
                            } else if (W.fillGapMethod === "width") h.style.width = "calc(100% - ".concat(G, "px)");
                            else if (W.fillGapMethod === "max-width") h.style.maxWidth = "calc(100% - ".concat(G, "px)");
                            else if (W.fillGapMethod === "padding") {
                                var Pt = parseFloat(ct.paddingRight);
                                h.style.paddingRight = "".concat(Pt + G, "px")
                            }
                        }
                    },
                    Qt = function(h) {
                        var H = document.querySelectorAll(h);
                        x(H, function(G) {
                            Lt(G)
                        })
                    },
                    Lt = function(h) {
                        if (w(h) && h.getAttribute("data-scroll-lock-filled-gap") === "true") {
                            var H = h.getAttribute("data-scroll-lock-current-fill-gap-method");
                            h.removeAttribute("data-scroll-lock-filled-gap"), h.removeAttribute("data-scroll-lock-current-fill-gap-method"), H === "margin" ? h.style.marginRight = "" : H === "width" ? h.style.width = "" : H === "max-width" ? h.style.maxWidth = "" : H === "padding" && (h.style.paddingRight = "")
                        }
                    },
                    ur = function(h) {
                        xe()
                    },
                    ol = function(h) {
                        W.scroll || (W.startTouchY = h.touches[0].clientY, W.startTouchX = h.touches[0].clientX)
                    },
                    il = function(h) {
                        if (!W.scroll) {
                            var H = W.startTouchY,
                                G = W.startTouchX,
                                ne = h.touches[0].clientY,
                                ct = h.touches[0].clientX;
                            if (h.touches.length < 2) {
                                var Nt = T(W.scrollableSelectors),
                                    Pt = {
                                        up: H < ne,
                                        down: H > ne,
                                        left: G < ct,
                                        right: G > ct
                                    },
                                    Yt = {
                                        up: H + we < ne,
                                        down: H - we > ne,
                                        left: G + we < ct,
                                        right: G - we > ct
                                    },
                                    ar = function _n(Me) {
                                        var cr = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                                        if (Me) {
                                            var Rt = R(Me, Nt, !1);
                                            if (ee(Me)) return !1;
                                            if (cr || Y(Me) && R(Me, Nt) || I(Me, Nt)) {
                                                var gt = !1;
                                                U(Me) && q(Me) ? (Pt.up && A(Me) || Pt.down && F(Me)) && (gt = !0) : A(Me) && F(Me) ? (Pt.left && U(Me) || Pt.right && q(Me)) && (gt = !0) : (Yt.up && A(Me) || Yt.down && F(Me) || Yt.left && U(Me) || Yt.right && q(Me)) && (gt = !0), gt && (Rt ? _n(Rt, !0) : h.cancelable && h.preventDefault())
                                            } else _n(Rt)
                                        } else h.cancelable && h.preventDefault()
                                    };
                                ar(h.target)
                            }
                        }
                    },
                    ul = function(h) {
                        W.scroll || (W.startTouchY = 0, W.startTouchX = 0)
                    };
                typeof window < "u" && window.addEventListener("resize", ur), typeof document < "u" && (document.addEventListener("touchstart", ol), document.addEventListener("touchmove", il, {
                    passive: !1
                }), document.addEventListener("touchend", ul));
                var sl = {
                        hide: function(h) {
                            S(`"hide" is deprecated! Use "disablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget`), ye(h)
                        },
                        show: function(h) {
                            S(`"show" is deprecated! Use "enablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget`), Ae(h)
                        },
                        toggle: function(h) {
                            S('"toggle" is deprecated! Do not use it.'), ze() ? ye() : Ae(h)
                        },
                        getState: function() {
                            return S(`"getState" is deprecated! Use "getScrollState" instead. 
 https://github.com/FL3NKEY/scroll-lock#getscrollstate`), ze()
                        },
                        getWidth: function() {
                            return S(`"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth`), Ee()
                        },
                        getCurrentWidth: function() {
                            return S(`"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth`), pe()
                        },
                        setScrollableTargets: function(h) {
                            S(`"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget`), M(h)
                        },
                        setFillGapSelectors: function(h) {
                            S(`"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector`), he(h)
                        },
                        setFillGapTargets: function(h) {
                            S(`"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget`), ie(h)
                        },
                        clearQueue: function() {
                            S(`"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. 
 https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks`), Re()
                        }
                    },
                    sr = se({
                        disablePageScroll: ye,
                        enablePageScroll: Ae,
                        getScrollState: ze,
                        clearQueueScrollLocks: Re,
                        getTargetScrollBarWidth: Ne,
                        getCurrentTargetScrollBarWidth: Oe,
                        getPageScrollBarWidth: Ee,
                        getCurrentPageScrollBarWidth: pe,
                        addScrollableSelector: $,
                        removeScrollableSelector: v,
                        addScrollableTarget: M,
                        removeScrollableTarget: Z,
                        addLockableSelector: re,
                        addLockableTarget: P,
                        addFillGapSelector: he,
                        removeFillGapSelector: ve,
                        addFillGapTarget: ie,
                        removeFillGapTarget: ae,
                        setFillGapMethod: te,
                        refillGaps: xe,
                        _state: W
                    }, sl);
                f.default = sr
            }]).default
        })
    }(ko)), ko.exports
}
var Cu = Y2();
const K2 = "./assets/background-BF0zYYBx.jpg",
    X2 = "./assets/curve-DplsLMf8.png",
    Ac = "/QMPWebSite/assets/card-el9N4KSZ.jpg",
    Z2 = "data:image/svg+xml,%3Csvg fill='%23000000' viewBox='0 0 32 32' id='Camada_1' version='1.1' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Cpath d='M5,19.5c0-4.6,2.3-9.4,5-9.4c1.5,0,2.7,0.9,4.6,3.6c-1.8,2.8-2.9,4.5-2.9,4.5c-2.4,3.8-3.2,4.6-4.5,4.6 C5.9,22.9,5,21.7,5,19.5 M20.7,17.8L19,15c-0.4-0.7-0.9-1.4-1.3-2c1.5-2.3,2.7-3.5,4.2-3.5c3,0,5.4,4.5,5.4,10.1 c0,2.1-0.7,3.3-2.1,3.3S23.3,22,20.7,17.8 M16.4,11c-2.2-2.9-4.1-4-6.3-4C5.5,7,2,13.1,2,19.5c0,4,1.9,6.5,5.1,6.5 c2.3,0,3.9-1.1,6.9-6.3c0,0,1.2-2.2,2.1-3.7c0.3,0.5,0.6,1,0.9,1.6l1.4,2.4c2.7,4.6,4.2,6.1,6.9,6.1c3.1,0,4.8-2.6,4.8-6.7 C30,12.6,26.4,7,22.1,7C19.8,7,18,8.8,16.4,11'%3E%3C/path%3E%3C/g%3E%3C/svg%3E",
    q2 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000000'%20height='800px'%20width='800px'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20310%20310'%20xml:space='preserve'%3e%3cg%20id='XMLID_801_'%3e%3cpath%20id='XMLID_802_'%20d='M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73%20C77.16,101.969,74.922,99.73,72.16,99.73z'/%3e%3cpath%20id='XMLID_803_'%20d='M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4%20c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z'/%3e%3cpath%20id='XMLID_804_'%20d='M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599%20c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319%20c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995%20C310,145.43,300.549,94.761,230.454,94.761z'/%3e%3c/g%3e%3c/svg%3e",
    J2 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000000'%20width='800px'%20height='800px'%20viewBox='0%200%201920%201920'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1920%20428.266v1189.54l-464.16-580.146-88.203%2070.585%20468.679%20585.904H83.684l468.679-585.904-88.202-70.585L0%201617.805V428.265l959.944%20832.441L1920%20428.266ZM1919.932%20226v52.627l-959.943%20832.44L.045%20278.628V226h1919.887Z'%20fill-rule='evenodd'/%3e%3c/svg%3e",
    b2 = "./assets/altium-D1AR6MXm.svg",
    ep = "data:image/svg+xml,%3csvg%20id='svg2'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20224.5%20224.5'%20enable-background='new%200%200%20224.5%20224.5'%20width='2500'%20height='2500'%3e%3cstyle%3e.st0{fill:url(%23rect4839_1_)}.st1{opacity:.3;filter:url(%23filter4644);enable-background:new}.st2{fill:%23fbe8e2}.st3{fill:%23201112}.st4{fill:%23371615}.st5{fill:url(%23path4751_1_)}.st6{fill:url(%23rect4710_1_)}.st7{fill:%23551512}.st8{fill:url(%23rect4727_1_)}.st9{fill:url(%23rect4710-9_1_)}.st10{fill:%23a51e23}.st11{fill:%23421413}.st12{fill:%23af2526}.st13{fill:%23ca2e28}%3c/style%3e%3cfilter%20height='4.822'%20id='filter4644'%20width='1.189'%20x='-.094'%20y='-1.911'%20color-interpolation-filters='sRGB'%3e%3cfeGaussianBlur%20id='feGaussianBlur4646'%20stdDeviation='4.786'/%3e%3c/filter%3e%3cg%20id='layer2'%20transform='translate(-10.565%20-1.332)'%3e%3clinearGradient%20id='rect4839_1_'%20gradientUnits='userSpaceOnUse'%20x1='133.425'%20y1='25.712'%20x2='133.425'%20y2='184.104'%20gradientTransform='matrix(1%200%200%20-1%20-10.565%20227.332)'%3e%3cstop%20offset='0'%20stop-color='%23e04448'/%3e%3cstop%20offset='1'%20stop-color='%23f6cec6'/%3e%3c/linearGradient%3e%3cpath%20id='rect4839'%20class='st0'%20d='M10.6%201.3h224.5v224.5H10.6z'/%3e%3cellipse%20cx='122.8'%20cy='183'%20rx='60.8'%20ry='3'%20id='path4608'%20class='st1'/%3e%3cpath%20id='rect4852'%20class='st2'%20d='M10.6%201.3h224.5v67.5C137.8%20120%207.9%2061.6%2010.6%2017.9V1.3z'/%3e%3cpath%20id='path4721'%20class='st3'%20d='M57.6%20158.2l14.4.8-3.6-21-10.8%2020.2z'/%3e%3cpath%20id='path4745'%20class='st4'%20d='M164.9%20159l23.7-.8-29.8-56.1%206.1%2056.9z'/%3e%3clinearGradient%20id='path4751_1_'%20gradientUnits='userSpaceOnUse'%20x1='130.083'%20y1='126.422'%20x2='130.083'%20y2='176.627'%20gradientTransform='matrix(1%200%200%20-1%20-10.56%20227.75)'%3e%3cstop%20offset='0'%20stop-color='%23c93129'/%3e%3cstop%20offset='1'%20stop-color='%23de472f'/%3e%3c/linearGradient%3e%3cpath%20id='path4751'%20class='st5'%20d='M123%2034.6l15.8%2076.8-38.5%2014.4L123%2034.6z'/%3e%3clinearGradient%20id='rect4710_1_'%20gradientUnits='userSpaceOnUse'%20x1='106.222'%20y1='180.392'%20x2='106.222'%20y2='75.74'%20gradientTransform='matrix(1%200%200%20-1%20-10.56%20227.75)'%3e%3cstop%20offset='0'%20stop-color='%23ab1f24'/%3e%3cstop%20offset='.398'%20stop-color='%23be2927'/%3e%3cstop%20offset='.669'%20stop-color='%2384161b'/%3e%3cstop%20offset='1'%20stop-color='%237e141a'/%3e%3c/linearGradient%3e%3cpath%20id='rect4710'%20class='st6'%20d='M68.3%20137.9L123%2034.6l-20.6%2089.9-7.7%2033.7-5.4%2023.7-17.3-2.7-3.7-41.3z'/%3e%3cpath%20id='path4724'%20class='st7'%20d='M70.7%20158.2l1.3%2021-14.4-21h13.1z'/%3e%3clinearGradient%20id='rect4727_1_'%20gradientUnits='userSpaceOnUse'%20x1='130.281'%20y1='103.131'%20x2='130.281'%20y2='76.614'%20gradientTransform='matrix(1%200%200%20-1%20-10.56%20227.75)'%3e%3cstop%20offset='0'%20stop-color='%238a191c'/%3e%3cstop%20offset='1'%20stop-color='%23781316'/%3e%3c/linearGradient%3e%3cpath%20id='rect4727'%20class='st8'%20d='M102.4%20124.5l34.6-13.7%207.8%2047.4h-50l7.6-33.7z'/%3e%3clinearGradient%20id='rect4710-9_1_'%20gradientUnits='userSpaceOnUse'%20x1='157.024'%20y1='180.392'%20x2='157.024'%20y2='75.74'%20gradientTransform='matrix(1%200%200%20-1%20-10.56%20227.75)'%3e%3cstop%20offset='0'%20stop-color='%23ab1f24'/%3e%3cstop%20offset='.398'%20stop-color='%23be2927'/%3e%3cstop%20offset='.669'%20stop-color='%2384161b'/%3e%3cstop%20offset='1'%20stop-color='%237e141a'/%3e%3c/linearGradient%3e%3cpath%20id='rect4710-9'%20class='st9'%20d='M158.8%20102.1L123%2034.6l14%2076.2%207.3%2047.3%204.2%2023.8%2021.5-2.5-3.1-21.2-8.1-56.1z'/%3e%3cpath%20id='path4748'%20class='st10'%20d='M166.9%20158.2h21.7L170%20179.5l-3.1-21.3z'/%3e%3cpath%20id='rect4754'%20class='st11'%20d='M137%20110.8l21.9-8.7%208.1%2056.1h-22.6l-7.4-47.4z'/%3e%3cpath%20id='rect4758'%20class='st10'%20d='M68.3%20137.9l34.1-13.4-7.7%2033.7H70.1l-1.8-20.3z'/%3e%3cpath%20id='rect4779'%20class='st12'%20d='M72%20179.2l17.3%202.7%205.4-23.7H70.1l1.9%2021z'/%3e%3cpath%20id='rect4782'%20class='st13'%20d='M144.3%20158.2h22.6l3.1%2021.2-21.5%202.5-4.2-23.7z'/%3e%3c/g%3e%3c/svg%3e",
    tp = "data:image/svg+xml,%3csvg%20viewBox='32.18585611720149%2020.47%20223.6851360941233%20247.05999999999997'%20xmlns='http://www.w3.org/2000/svg'%20width='2113'%20height='2500'%3e%3cpath%20d='M252.71%2093.61a21.67%2021.67%200%200%200-2.65-10.87%2020.74%2020.74%200%200%200-7.87-7.67Q198.77%2050%20155.32%2025c-7.8-4.51-15.36-4.35-23.11.23C120.69%2032%2063%2065.09%2045.81%2075.06c-7.08%204.1-10.52%2010.38-10.52%2018.54v100.8a21.77%2021.77%200%200%200%202.55%2010.66%2020.63%2020.63%200%200%200%208%207.88c17.19%2010%2074.89%2043.05%2086.41%2049.85%207.75%204.58%2015.31%204.74%2023.12.23q43.41-25.08%2086.87-50.09a20.63%2020.63%200%200%200%208-7.88%2021.77%2021.77%200%200%200%202.55-10.66V93.61z'%20fill='%23004482'/%3e%3cpath%20d='M252.73%20194.4a21.72%2021.72%200%200%201-2.55%2010.66%2018.58%2018.58%200%200%201-1.45%202.24L144%20144l98.19-68.93a20.72%2020.72%200%200%201%207.86%207.67%2021.57%2021.57%200%200%201%202.66%2010.87c.02%2033.6.02%20100.79.02%20100.79z'%20fill='%2300599c'/%3e%3cpath%20d='M250.05%2082.74L37.81%20205.06a21.75%2021.75%200%200%201-2.53-10.65V93.6c0-8.16%203.45-14.44%2010.52-18.54C63%2065.09%20120.69%2032%20132.22%2025.21c7.73-4.58%2015.3-4.74%2023.1-.23q43.41%2025.08%2086.87%2050.09a20.72%2020.72%200%200%201%207.86%207.67z'%20fill='%23659ad2'/%3e%3cpath%20d='M148.2%20184.72a39.91%2039.91%200%200%201-35-20.63q-.53-.94-1-1.92A39.94%2039.94%200%200%201%20179%20119.4c.53.64%201%201.31%201.53%202%20.24.33.48.66.7%201l35.07-20.2q-1.28-2.06-2.68-4c-.49-.69-1-1.35-1.48-2A79.9%2079.9%200%200%200%2078%20181.92c.34.64.69%201.27%201%201.9a79.91%2079.91%200%200%200%20136.86%203.62l-34.29-20.73a39.88%2039.88%200%200%201-33.37%2018.01z'%20fill='%23fff'/%3e%3c/svg%3e",
    np = "data:image/svg+xml,%3csvg%20width='2222'%20height='2500'%20viewBox='0%200%20256%20288'%20xmlns='http://www.w3.org/2000/svg'%20preserveAspectRatio='xMinYMin%20meet'%3e%3cpath%20d='M255.569%2084.72c-.002-4.83-1.035-9.098-3.124-12.761-2.052-3.602-5.125-6.621-9.247-9.008-34.025-19.619-68.083-39.178-102.097-58.817-9.17-5.294-18.061-5.101-27.163.269C100.395%2012.39%2032.59%2051.237%2012.385%2062.94%204.064%2067.757.015%2075.129.013%2084.711%200%20124.166.013%20163.62%200%20203.076c.002%204.724.991%208.909%202.988%2012.517%202.053%203.711%205.169%206.813%209.386%209.254%2020.206%2011.703%2088.02%2050.547%20101.56%2058.536%209.106%205.373%2017.997%205.565%2027.17.269%2034.015-19.64%2068.075-39.198%20102.105-58.817%204.217-2.44%207.333-5.544%209.386-9.252%201.994-3.608%202.985-7.793%202.987-12.518%200%200%200-78.889-.013-118.345'%20fill='%235C8DBC'/%3e%3cpath%20d='M128.182%20143.509L2.988%20215.593c2.053%203.711%205.169%206.813%209.386%209.254%2020.206%2011.703%2088.02%2050.547%20101.56%2058.536%209.106%205.373%2017.997%205.565%2027.17.269%2034.015-19.64%2068.075-39.198%20102.105-58.817%204.217-2.44%207.333-5.544%209.386-9.252l-124.413-72.074'%20fill='%231A4674'/%3e%3cpath%20d='M91.101%20164.861c7.285%2012.718%2020.98%2021.296%2036.69%2021.296%2015.807%200%2029.58-8.687%2036.828-21.541l-36.437-21.107-37.081%2021.352'%20fill='%231A4674'/%3e%3cpath%20d='M255.569%2084.72c-.002-4.83-1.035-9.098-3.124-12.761l-124.263%2071.55%20124.413%2072.074c1.994-3.608%202.985-7.793%202.987-12.518%200%200%200-78.889-.013-118.345'%20fill='%231B598E'/%3e%3cpath%20d='M248.728%20148.661h-9.722v9.724h-9.724v-9.724h-9.721v-9.721h9.721v-9.722h9.724v9.722h9.722v9.721M213.253%20148.661h-9.721v9.724h-9.722v-9.724h-9.722v-9.721h9.722v-9.722h9.722v9.722h9.721v9.721'%20fill='%23FFF'/%3e%3cpath%20d='M164.619%20164.616c-7.248%2012.854-21.021%2021.541-36.828%2021.541-15.71%200-29.405-8.578-36.69-21.296a42.062%2042.062%200%200%201-5.574-20.968c0-23.341%2018.923-42.263%2042.264-42.263%2015.609%200%2029.232%208.471%2036.553%2021.059l36.941-21.272c-14.683-25.346-42.096-42.398-73.494-42.398-46.876%200-84.875%2038-84.875%2084.874%200%2015.378%204.091%2029.799%2011.241%2042.238%2014.646%2025.48%2042.137%2042.637%2073.634%2042.637%2031.555%200%2059.089-17.226%2073.714-42.781l-36.886-21.371'%20fill='%23FFF'/%3e%3c/svg%3e",
    rp = "data:image/svg+xml,%3csvg%20fill='none'%20height='2500'%20width='2183'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20124%20141.53'%3e%3cpath%20d='M10.383%20126.892L0%200l124%20.255-10.979%20126.637-50.553%2014.638z'%20fill='%231b73ba'/%3e%3cpath%20d='M62.468%20129.275V12.085l51.064.17-9.106%20104.85z'%20fill='%231c88c7'/%3e%3cpath%20d='M100.851%2027.064H22.298l2.128%2015.318h37.276l-36.68%2015.745%202.127%2014.808h54.043l-1.958%2020.68-18.298%203.575-16.595-4.255-1.277-11.745H27.83l2.042%2024.426%2032.681%209.106%2031.32-9.957%204-47.745H64.765l36.085-14.978z'%20fill='%23fff'/%3e%3c/svg%3e",
    lp = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%20width='64'%20height='64'%3e%3cpath%20d='M32%2024.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365%207.257c-.613.873-1.256%201.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214%201.86-.105%202.535.88l4.765%206.435%204.8-6.4c.615-.873%201.276-1.205%202.38-.883l-2.48%203.288-3.36%204.375c-.4.5-.345.842.023%201.325L32%2024.795zM.008%2015.427l.562-2.764C2.1%207.193%208.37%204.92%2012.694%208.3c2.527%201.988%203.155%204.8%203.03%207.95H1.48c-.214%205.67%203.867%209.092%209.07%207.346%201.825-.613%202.9-2.042%203.438-3.83.273-.896.725-1.036%201.567-.78-.43%202.236-1.4%204.104-3.45%205.273-3.063%201.75-7.435%201.184-9.735-1.248C1%2021.6.434%2019.812.18%2017.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58%202.813-6.746%207.037z'/%3e%3c/svg%3e",
    op = "data:image/svg+xml,%3csvg%20fill='none'%20height='2500'%20width='2183'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20124%20141.53199999999998'%3e%3cpath%20d='M10.383%20126.894L0%200l124%20.255-10.979%20126.639-50.553%2014.638z'%20fill='%23e34f26'/%3e%3cpath%20d='M62.468%20129.277V12.085l51.064.17-9.106%20104.851z'%20fill='%23ef652a'/%3e%3cpath%20d='M99.49%2041.362l1.446-15.49H22.383l4.34%2047.49h54.213L78.81%2093.617l-17.362%204.68-17.617-5.106-.936-12.085H27.319l2.128%2024.681%2032%208.936%2032.255-8.936%204.34-48.17H41.107L39.49%2041.362z'%20fill='%23fff'/%3e%3c/svg%3e",
    ip = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='2500'%20height='2500'%20viewBox='0%200%201052%201052'%3e%3cpath%20fill='%23f0db4f'%20d='M0%200h1052v1052H0z'/%3e%3cpath%20d='M965.9%20801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8%206.9-27.9%2040.2-36.6%2066.6-28.6%2017%205.7%2033.1%2018.801%2042.8%2039.7%2045.4-29.399%2045.3-29.2%2077-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3%201.3-20.699%202.699-31%204-29.699%207.5-58%2023.1-74.6%2044-49.8%2056.5-35.6%20155.399%2025%20196.1%2059.7%2044.8%20147.4%2055%20158.6%2096.9%2010.9%2051.3-37.699%2067.899-86%2062-35.6-7.4-55.399-25.5-76.8-58.4-39.399%2022.8-39.399%2022.8-79.899%2046.1%209.6%2021%2019.699%2030.5%2035.8%2048.7%2076.2%2077.3%20266.899%2073.5%20301.1-43.5%201.399-4.001%2010.6-30.801%203.199-72.101zm-394-317.6h-98.4c0%2085-.399%20169.4-.399%20254.4%200%2054.1%202.8%20103.7-6%20118.9-14.4%2029.899-51.7%2026.2-68.7%2020.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699%2016.3-53.3%2032.699-80%2049%2013.301%2027.3%2032.9%2051%2058%2066.399%2037.5%2022.5%2087.9%2029.4%20140.601%2017.3%2034.3-10%2063.899-30.699%2079.399-62.199%2022.4-41.3%2017.6-91.3%2017.4-146.6.5-90.2%200-180.4%200-270.9z'%20fill='%23323330'/%3e%3c/svg%3e",
    up = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2048%2048'%20height='64'%20width='64'%3e%3cdefs%3e%3cpath%20d='M-69.65%20120.638a139.301%20139.301%20120%201%201%20139.301%200L27.71%2047.993a55.418%2055.418%20120%201%200-55.418%200z'%20id='A'/%3e%3c/defs%3e%3cg%20transform='matrix(1.275322%200%200%201.275322%20-38.047246%20-14.965624)'%3e%3cuse%20transform='matrix(.063405%200%200%20.063405%2029.66229%2012.95855)'%20y='140'%20x='298'%20xlink:href='%23A'%20fill='%23ff0101'/%3e%3cuse%20transform='matrix(-.063405%200%200%20-.063405%2087.614835%2065.58504)'%20y='415'%20x='457'%20xlink:href='%23A'%20fill='%230101ff'/%3e%3cuse%20transform='matrix(-.031703%20-.054911%20.054911%20-.031703%2020.379704%2060.225737)'%20y='415'%20x='142'%20xlink:href='%23A'%20fill='%2301ff01'/%3e%3c/g%3e%3c/svg%3e",
    sp = "./assets/python-BwtkQa2m.svg",
    ap = "./assets/solidworks-Bg363g_t.svg",
    cp = "data:image/svg+xml,%3csvg%20height='1499'%20viewBox='.15%20.13%20799.7%20479.69'%20width='2500'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m400%20.13c-106.63%200-173.27%2053.3-199.93%20159.89%2039.99-53.3%2086.64-73.28%20139.95-59.96%2030.42%207.6%2052.16%2029.67%2076.23%2054.09%2039.2%2039.78%2084.57%2085.82%20183.68%2085.82%20106.62%200%20173.27-53.3%20199.92-159.9-39.98%2053.3-86.63%2073.29-139.95%2059.97-30.41-7.6-52.15-29.67-76.22-54.09-39.2-39.78-84.58-85.82-183.68-85.82zm-199.93%20239.84c-106.62%200-173.27%2053.3-199.92%20159.9%2039.98-53.3%2086.63-73.29%20139.95-59.96%2030.41%207.61%2052.15%2029.67%2076.22%2054.08%2039.2%2039.78%2084.58%2085.83%20183.68%2085.83%20106.63%200%20173.27-53.3%20199.93-159.9-39.99%2053.3-86.64%2073.29-139.95%2059.96-30.42-7.59-52.16-29.67-76.23-54.08-39.2-39.78-84.57-85.83-183.68-85.83z'%20fill='%2306b6d4'/%3e%3c/svg%3e",
    fp = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='720'%20height='490'%20stroke='%2300979c'%3e%3cg%20fill='none'%3e%3cpath%20d='M174%2030C78.9%2022.43-1%20135%2038%20222c38%2094.4%20181%20120%20249%2044.4%2065.9-64.6%2091.3-164%20172-215%2082-56%20214-3.12%20230%2096.4%2015.6%2095.3-87.1%20188-180%20160-68.7-15.5-118-74.2-146-136-34.5-59-79.6-122-150-138-12.5-2.84-25.4-3.96-38.2-3.94z'%20stroke-width='59'/%3e%3cpath%20d='m118%20165h120'%20stroke-width='25'/%3e%3cpath%20d='m486%20165h100m-51-50v100'%20stroke-width='32'/%3e%3c/g%3e%3cpath%20d='M84%20485l-6.4-23H37l-6.6%2023H8.7l34.4-116h30.6l34.4%20116zm-26.4-95l-15.3%2054.1h30.4zM180%20485s-11.7-27.6-18.3-41c-3.83-5.76-11.4-8.02-18-7.1-.6%2015.7-.48%2048.1-.48%2048.1h-21.9V369s33-.97%2049.4%201.2c34.7%203.92%2037%2054.4%202.13%2059.7%206.54%202.6%2010.5%208.65%2013.3%2014.8l17.5%2036.2c1.23%202.48%201.2%204.4-2.34%204.38zm-5.42-82.1c-.1-17.9-18-15.9-31.3-16v32.8c15.7.53%2031-1.07%2031.3-16.8zM302%20455c-10.6%2024.5-33.8%2030.2-55.8%2029.8h-26.9v-116l40.9.2c50.6%201.65%2052.4%2056.2%2041.7%2086.4zm-28-61.3c-10.2-8.76-21.4-6.97-32.8-6.97v79.7c10%200%2020.9.8%2029.4-5.4%2018.1-11.4%2015.8-54.6%203.35-67.3zM407%20442c2.17%2058.6-81.5%2058.4-84%2012.7-1.53-14-.27-28-.68-42v-44.2h21.9l.4%2083c2.57%2022.9%2033%2020.9%2037.6%208.2%204.66-10.1%202.5-21.5%202.98-32.3v-58.9h21.9V442zm21-56v-17.9h73.5V386h-25.6v80.4h25.6v18.1H428v-18.1h25.6V386zm155%2099l-37.6-84.4V485h-19.9V369h26.9l37.4%2083.6c.1-6%20.04-83.6.04-83.6h19.9v116zm117-10c-24.3%2020.9-66.7%2016.3-75.1-24.9-11.5-62.6%2022.4-98.6%2069.6-77.6%2029%2016.3%2027.4%2083.4%205.5%20103zm-29.3-88.7c-20.7-.55-23.7%2020.6-24.5%2030.8-.17%2019.3-1.88%2051.4%2024.9%2050%208.3%200%2015.5-6.02%2018.2-13.7%205.45-12.1%209.56-68.1-18.6-67.1zM676%2013.4v2.34h5.15v13.6h2.66v-13.6h5.2V13.4zm14.8%200v15.9h2.43V15.7l4.3%2013.6h2.4l4.1-13.3v13.3h2.4V13.4h-3.8l-3.9%2012.7-4-12.7z'%20fill='%2300979c'/%3e%3ctitle%3ewiki:Behnam%20N%3c/title%3e%3c/svg%3e",
    dp = "./assets/microchip-lE4jBHKx.svg",
    pp = "./assets/stm32-cltgE_LY.png",
    hp = [{
        id: "0",
        title: "Facebook",
        iconUrl: Z2,
        url: "https://www.facebook.com/qgngh.pham/"
    }, {
        id: "1",
        title: "Mail",
        iconUrl: J2,
        url: "mailto:quang.mpham2104@gmail.com"
    }, {
        id: "2",
        title: "LinkedIn",
        iconUrl: q2,
        url: "https://www.linkedin.com/in/quangmpham2104/"
    }],
    mp = [{
        id: "0",
        title: "Home",
        url: "#home"
    }, {
        id: "1",
        title: "About",
        url: "#about"
    }, {
        id: "2",
        title: "Skills",
        url: "#skills"
    }, {
        id: "3",
        title: "Contacts",
        url: "#contacts"
    }],
    vp = [{
        id: "1",
        title: "C++ Software Development",
        text: "Proficient in building robust software solutions and adapting quickly to new challenges. I aspire to create high-performance products that can use the following language and tools:",
        backgroundUrl: "./src/assets/benefits/card-2.svg",
        icons: [{
            src: np,
            alt: "cpp"
        }, {
            src: tp,
            alt: "c"
        }, {
            src: sp,
            alt: "python"
        }, {
            src: up,
            alt: "opencv"
        }, {
            src: ap,
            alt: "solidworks"
        }, {
            src: ep,
            alt: "autocad"
        }, {
            src: b2,
            alt: "altium"
        }, {
            src: fp,
            alt: "arduino"
        }, {
            src: dp,
            alt: "microchip"
        }, {
            src: pp,
            alt: "stm32"
        }],
        imageUrl: Ac,
        light: !0
    }, {
        id: "0",
        title: "This website",
        text: "This website was created for my programming hobby, it created by using the following technology:",
        backgroundUrl: "./src/assets/benefits/card-1.svg",
        icons: [{
            src: rp,
            alt: "css"
        }, {
            src: op,
            alt: "html"
        }, {
            src: ip,
            alt: "js"
        }, {
            src: cp,
            alt: "tailwind"
        }, {
            src: lp,
            alt: "expressjs"
        }],
        imageUrl: Ac
    }],
    Uc = i => g.jsxs(g.Fragment, {
        children: [g.jsx("svg", {
            className: "absolute top-0 left-0",
            width: "21",
            height: "44",
            viewBox: "0 0 21 44",
            children: g.jsx("path", {
                fill: i ? "white" : "none",
                stroke: i ? "white" : "url(#btn-left)",
                strokeWidth: "2",
                d: "M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1"
            })
        }), g.jsx("svg", {
            className: "absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]",
            height: "44",
            viewBox: "0 0 100 44",
            preserveAspectRatio: "none",
            fill: i ? "white" : "none",
            children: i ? g.jsx("polygon", {
                fill: "white",
                fillRule: "nonzero",
                points: "100 0 100 44 0 44 0 0"
            }) : g.jsxs(g.Fragment, {
                children: [g.jsx("polygon", {
                    fill: "url(#btn-top)",
                    fillRule: "nonzero",
                    points: "100 42 100 44 0 44 0 42"
                }), g.jsx("polygon", {
                    fill: "url(#btn-bottom)",
                    fillRule: "nonzero",
                    points: "100 0 100 2 0 2 0 0"
                })]
            })
        }), g.jsx("svg", {
            className: "absolute top-0 right-0",
            width: "21",
            height: "44",
            viewBox: "0 0 21 44",
            children: g.jsx("path", {
                fill: i ? "white" : "none",
                stroke: i ? "white" : "url(#btn-right)",
                strokeWidth: "2",
                d: "M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1"
            })
        })]
    }),
    af = ({
        className: i,
        href: a,
        onClick: s,
        children: f,
        px: c,
        white: p
    }) => {
        const w = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${c||"px-7"} ${p?"text-n-8":"text-n-1"} ${i||""}`,
            C = "relative z-10";
        return a ? g.jsxs("a", {
            href: a,
            className: w,
            children: [g.jsx("span", {
                className: C,
                children: f
            }), Uc(p)]
        }) : g.jsxs("button", {
            className: w,
            onClick: s,
            children: [g.jsx("span", {
                className: C,
                children: f
            }), Uc(p)]
        })
    },
    gp = ({
        openNavigation: i
    }) => g.jsxs("svg", {
        className: "overflow-visible",
        width: "20",
        height: "12",
        viewBox: "0 0 20 12",
        children: [g.jsx("rect", {
            className: "transition-all origin-center",
            y: i ? "5" : "0",
            width: "20",
            height: "2",
            rx: "1",
            fill: "white",
            transform: `rotate(${i?"45":"0"})`
        }), g.jsx("rect", {
            className: "transition-all origin-center",
            y: i ? "5" : "10",
            width: "20",
            height: "2",
            rx: "1",
            fill: "white",
            transform: `rotate(${i?"-45":"0"})`
        })]
    }),
    yp = () => g.jsxs("div", {
        className: "absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2",
        children: [g.jsx("div", {
            className: "absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"
        }), g.jsx("div", {
            className: "absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"
        })]
    }),
    wp = () => g.jsxs(g.Fragment, {
        children: [g.jsx("div", {
            className: "absolute top-0 left-5 w-0.25 h-full bg-n-6"
        }), g.jsx("div", {
            className: "absolute top-0 right-5 w-0.25 h-full bg-n-6"
        })]
    }),
    xp = () => g.jsxs(g.Fragment, {
        children: [g.jsx("div", {
            className: "absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full"
        }), g.jsx("div", {
            className: "absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full"
        }), g.jsx("div", {
            className: "absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"
        })]
    }),
    Sp = () => g.jsxs("div", {
        className: "absolute inset-0 pointer-events-none lg:hidden",
        children: [g.jsx("div", {
            className: "absolute inset-0 opacity-[.03]",
            children: g.jsx("img", {
                className: "w-full h-full object-cover",
                src: K2,
                width: 688,
                height: 953,
                alt: "Background"
            })
        }), g.jsx(yp, {}), g.jsx(wp, {}), g.jsx(xp, {})]
    });

function kp() {
    const i = vn(),
        [a, s] = N.useState(!1),
        f = () => {
            a ? (s(!1), Cu.enablePageScroll()) : (s(!0), Cu.disablePageScroll())
        },
        c = () => {
            a && (Cu.enablePageScroll(), s(!1))
        };
    return g.jsx("div", {
        className: `fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${a?"bg-n-8":"bg-n-8/90 backdrop-blur-sm"}`,
        children: g.jsxs("div", {
            className: "flex items-center px-3 lg:px-5 xl:px-7 max-lg:py-2",
            children: [g.jsx("a", {
                className: "block w-[10rem] xl:mr-8",
                href: "#home",
                children: "Pham Minh Quang"
            }), g.jsxs("nav", {
                className: `${a?"flex":"hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex ml-auto lg:bg-transparent`,
                children: [g.jsx("div", {
                    className: "relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row",
                    children: mp.map(p => g.jsx("a", {
                        href: p.url,
                        onClick: c,
                        className: `block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${p.onlyMobile?"lg:hidden":""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${p.url===i.hash?"z-2 lg:text-n-1":"lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12`,
                        children: p.title
                    }, p.id))
                }), g.jsx(Sp, {})]
            }), g.jsx(af, {
                className: "ml-auto lg:hidden",
                px: "px-3",
                onClick: f,
                children: g.jsx(gp, {
                    openNavigation: a
                })
            })]
        })
    })
}
const Co = ({
        className: i = ""
    }) => g.jsx("svg", {
        className: `${i} || ""`,
        width: "11",
        height: "11",
        fill: "none",
        children: g.jsx("path", {
            d: "M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V1z",
            fill: "#ada8c4"
        })
    }),
    Ep = ({
        crossesOffset: i
    }) => g.jsxs(g.Fragment, {
        children: [g.jsx(Co, {
            className: `hidden absolute -top-[0.3125rem] left-[1.5625rem] ${i&&i} pointer-events-none lg:block xl:left-[2.1875rem]`
        }), g.jsx(Co, {
            className: `hidden absolute  -top-[0.3125rem] right-[1.5625rem] ${i&&i} pointer-events-none lg:block xl:right-[2.1875rem]`
        })]
    }),
    Mo = ({
        className: i,
        id: a,
        crosses: s,
        crossesOffset: f,
        customPaddings: c,
        children: p
    }) => g.jsxs("div", {
        id: a,
        className: `
      relative 
      ${c||`py-10 lg:py-16 xl:py-20 ${s?"lg:py-32 xl:py-40":""}`} 
      ${i||""}`,
        children: [p, g.jsx("div", {
            className: "hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10"
        }), g.jsx("div", {
            className: "hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10"
        }), s && g.jsxs(g.Fragment, {
            children: [g.jsx("div", {
                className: `hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${f&&f} pointer-events-none lg:block xl:left-10 right-10`
            }), g.jsx(Ep, {
                crossesOffset: f
            })]
        })]
    }),
    Cp = typeof performance < "u" ? () => performance.now() : () => Date.now(),
    cf = typeof window < "u" ? i => window.requestAnimationFrame(i) : i => setTimeout(() => i(Cp()), 16.666666666666668);
let ju = !0,
    Jr = !1,
    Tu = !1;
const Zr = {
        delta: 0,
        timestamp: 0
    },
    nl = ["read", "update", "preRender", "render", "postRender"],
    _o = nl.reduce((i, a) => (i[a] = function(s) {
        let f = [],
            c = [],
            p = 0,
            w = !1,
            C = !1;
        const x = new WeakSet,
            S = {
                schedule: (T, j = !1, R = !1) => {
                    const I = R && w,
                        z = I ? f : c;
                    return j && x.add(T), z.indexOf(T) === -1 && (z.push(T), I && w && (p = f.length)), T
                },
                cancel: T => {
                    const j = c.indexOf(T);
                    j !== -1 && c.splice(j, 1), x.delete(T)
                },
                process: T => {
                    if (w) C = !0;
                    else {
                        if (w = !0, [f, c] = [c, f], c.length = 0, p = f.length, p)
                            for (let j = 0; j < p; j++) {
                                const R = f[j];
                                R(T), x.has(R) && (S.schedule(R), s())
                            }
                        w = !1, C && (C = !1, S.process(T))
                    }
                }
            };
        return S
    }(() => Jr = !0), i), {}),
    Lo = nl.reduce((i, a) => {
        const s = _o[a];
        return i[a] = (f, c = !1, p = !1) => (Jr || Np(), s.schedule(f, c, p)), i
    }, {}),
    No = nl.reduce((i, a) => (i[a] = _o[a].cancel, i), {});
nl.reduce((i, a) => (i[a] = () => _o[a].process(Zr), i), {});
const Lp = i => _o[i].process(Zr),
    ff = i => {
        Jr = !1, Zr.delta = ju ? 16.666666666666668 : Math.max(Math.min(i - Zr.timestamp, 40), 1), Zr.timestamp = i, Tu = !0, nl.forEach(Lp), Tu = !1, Jr && (ju = !1, cf(ff))
    },
    Np = () => {
        Jr = !0, ju = !0, Tu || cf(ff)
    };
var wo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
    Pp = /^\s+|\s+$/g,
    Rp = /^[-+]0x[0-9a-f]+$/i,
    jp = /^0b[01]+$/i,
    Tp = /^0o[0-7]+$/i,
    zp = parseInt,
    Mp = typeof wo == "object" && wo && wo.Object === Object && wo,
    _p = typeof self == "object" && self && self.Object === Object && self,
    Op = Mp || _p || Function("return this")(),
    Fp = Object.prototype.toString,
    Dp = Math.max,
    Ip = Math.min,
    Lu = function() {
        return Op.Date.now()
    };

function zu(i) {
    var a = typeof i;
    return !!i && (a == "object" || a == "function")
}

function Bc(i) {
    if (typeof i == "number") return i;
    if (function(f) {
            return typeof f == "symbol" || function(c) {
                return !!c && typeof c == "object"
            }(f) && Fp.call(f) == "[object Symbol]"
        }(i)) return NaN;
    if (zu(i)) {
        var a = typeof i.valueOf == "function" ? i.valueOf() : i;
        i = zu(a) ? a + "" : a
    }
    if (typeof i != "string") return i === 0 ? i : +i;
    i = i.replace(Pp, "");
    var s = jp.test(i);
    return s || Tp.test(i) ? zp(i.slice(2), s ? 2 : 8) : Rp.test(i) ? NaN : +i
}
var Au = function(i, a, s) {
        var f, c, p, w, C, x, S = 0,
            T = !1,
            j = !1,
            R = !0;
        if (typeof i != "function") throw new TypeError("Expected a function");

        function I(Y) {
            var ee = f,
                se = c;
            return f = c = void 0, S = Y, w = i.apply(se, ee)
        }

        function z(Y) {
            return S = Y, C = setTimeout(F, a), T ? I(Y) : w
        }

        function A(Y) {
            var ee = Y - x;
            return x === void 0 || ee >= a || ee < 0 || j && Y - S >= p
        }

        function F() {
            var Y = Lu();
            if (A(Y)) return U(Y);
            C = setTimeout(F, function(ee) {
                var se = a - (ee - x);
                return j ? Ip(se, p - (ee - S)) : se
            }(Y))
        }

        function U(Y) {
            return C = void 0, R && f ? I(Y) : (f = c = void 0, w)
        }

        function q() {
            var Y = Lu(),
                ee = A(Y);
            if (f = arguments, c = this, x = Y, ee) {
                if (C === void 0) return z(x);
                if (j) return C = setTimeout(F, a), I(x)
            }
            return C === void 0 && (C = setTimeout(F, a)), w
        }
        return a = Bc(a) || 0, zu(s) && (T = !!s.leading, p = (j = "maxWait" in s) ? Dp(Bc(s.maxWait) || 0, a) : p, R = "trailing" in s ? !!s.trailing : R), q.cancel = function() {
            C !== void 0 && clearTimeout(C), S = 0, f = x = c = C = void 0
        }, q.flush = function() {
            return C === void 0 ? w : U(Lu())
        }, q
    },
    Po = {
        exports: {}
    },
    Hc = typeof document < "u" ? document.createElement("p").style : {},
    Wc = ["O", "ms", "Moz", "Webkit"],
    Nu = /([A-Z])/g,
    Pu = {};

function Vc(i) {
    if (i = i.replace(/-([a-z])/g, function(c, p) {
            return p.toUpperCase()
        }), Hc[i] !== void 0) return i;
    for (var a = i.charAt(0).toUpperCase() + i.slice(1), s = Wc.length; s--;) {
        var f = Wc[s] + a;
        if (Hc[f] !== void 0) return f
    }
    return i
}
Po.exports = function(i) {
    return i in Pu ? Pu[i] : Pu[i] = Vc(i)
}, Po.exports.dash = function(i) {
    return i = Vc(i), Nu.test(i) && (i = "-" + i.replace(Nu, "-$1"), Nu.lastIndex = 0), i.toLowerCase()
};
const Gc = {
        isReady: !1,
        scrollbarWidth: 0,
        windowHeight: 0,
        windowWidth: 0
    },
    df = () => {
        const [i, a] = N.useState(Gc), s = N.useRef(Gc), f = N.useCallback(() => {
            const c = {
                isReady: !0,
                scrollbarWidth: window.innerWidth - document.documentElement.clientWidth,
                windowHeight: window.innerHeight,
                windowWidth: window.innerWidth
            };
            a(c), s.current = c
        }, []);
        return N.useEffect(() => {
            const c = Au(f, 100);
            return window.addEventListener("resize", c), f(), () => {
                window.removeEventListener("resize", c)
            }
        }, [f]), {
            windowSize: i,
            windowSizeRef: s
        }
    },
    Ro = (i, a, s) => i + (a - i) * s;
class Ap extends class {
    addEventListener(a, s) {
        this._listeners === void 0 && (this._listeners = {});
        const f = this._listeners;
        f[a] === void 0 && (f[a] = []), f[a].indexOf(s) === -1 && f[a].push(s)
    }
    hasEventListener(a, s) {
        if (this._listeners === void 0) return !1;
        const f = this._listeners;
        return f[a] !== void 0 && f[a].indexOf(s) !== -1
    }
    removeEventListener(a, s) {
        if (this._listeners === void 0) return;
        const f = this._listeners[a];
        if (f !== void 0) {
            const c = f.indexOf(s);
            c !== -1 && f.splice(c, 1)
        }
    }
    dispatchEvent(a) {
        if (this._listeners === void 0) return;
        const s = this._listeners[a.type];
        if (s !== void 0) {
            a.target = this;
            const f = s.slice(0);
            for (let c = 0, p = f.length; c < p; c++) f[c].call(this, a);
            a.target = null
        }
    }
} {
    constructor() {
        super(), this._mouseLast = {
            x: 0,
            y: 0
        }, this._isTouching = !1, this.mouse = {
            x: 0,
            y: 0
        }, this._shouldUpdate = !1, this._onTouchDown = a => {
            this._shouldUpdate && (this._isTouching = !0, this._mouseLast.x = "touches" in a ? a.touches[0].clientX : a.clientX, this._mouseLast.y = "touches" in a ? a.touches[0].clientY : a.clientY, this.mouse.x = this._mouseLast.x, this.mouse.y = this._mouseLast.y, this.dispatchEvent({
                type: "down"
            }), this.dispatchEvent({
                type: "mousemove"
            }))
        }, this._onTouchMove = a => {
            if (!this._shouldUpdate) return;
            const s = "touches" in a ? a.touches[0].clientX : a.clientX,
                f = "touches" in a ? a.touches[0].clientY : a.clientY,
                c = s - this._mouseLast.x,
                p = f - this._mouseLast.y;
            this._mouseLast.x = s, this._mouseLast.y = f, this.mouse.x += c, this.mouse.y += p, this.dispatchEvent({
                type: "mousemove"
            })
        }, this._onTouchUp = () => {
            this._shouldUpdate && (this._isTouching = !1, this.dispatchEvent({
                type: "up"
            }), this.dispatchEvent({
                type: "mousemove"
            }))
        }, this._onMouseLeave = () => {
            this.dispatchEvent({
                type: "left"
            })
        }
    }
    _addEvents() {
        this._targetEl.addEventListener("mousedown", this._onTouchDown), this._targetEl.addEventListener("mousemove", this._onTouchMove, {
            passive: !0
        }), this._targetEl.addEventListener("mouseup", this._onTouchUp), this._targetEl.addEventListener("touchstart", this._onTouchDown, {
            passive: !0
        }), this._targetEl.addEventListener("touchmove", this._onTouchMove, {
            passive: !0
        }), this._targetEl.addEventListener("touchend", this._onTouchUp), this._targetEl.addEventListener("mouseout", this._onMouseLeave)
    }
    _removeEvents() {
        this._targetEl.removeEventListener("mousedown", this._onTouchDown), this._targetEl.removeEventListener("mousemove", this._onTouchMove), this._targetEl.removeEventListener("mouseup", this._onTouchUp), this._targetEl.removeEventListener("touchstart", this._onTouchDown), this._targetEl.removeEventListener("touchmove", this._onTouchMove), this._targetEl.removeEventListener("touchend", this._onTouchUp), this._targetEl.removeEventListener("mouseout", this._onMouseLeave)
    }
    init(a) {
        this._targetEl = window, a && a.current && (this._targetEl = a.current), this._addEvents()
    }
    destroy() {
        this._removeEvents()
    }
    setShouldUpdate(a) {
        this._shouldUpdate = a
    }
    update() {
        this._mouseLast.x = this.mouse.x, this._mouseLast.y = this.mouse.y
    }
}
const pf = () => typeof window < "u" && ("ontouchstart" in window || "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0),
    Up = {
        height: 1,
        width: 1,
        x: 1,
        y: 1
    },
    Bp = i => {
        const {
            children: a,
            strength: s = .14,
            parallaxContainerRef: f = null,
            scrollContainerRef: c = null,
            shouldResetPosition: p = !1,
            enableOnTouchDevice: w = !1,
            isAbsolutelyPositioned: C = !1,
            lerpEase: x = .06,
            zIndex: S = null,
            shouldPause: T = !0
        } = i, {
            windowSizeRef: j
        } = df(), R = N.useRef(null), I = N.useRef(null), z = N.useRef(0), A = N.useRef(0), F = N.useRef(0), U = N.useRef(0), q = N.useRef(null), Y = N.useRef(null), ee = N.useRef(!0), se = N.useRef(Up), de = N.useRef(new Ap), fe = N.useRef(null), we = N.useRef(Po.exports("transform")), W = () => {
            ee.current && R.current && (R.current.style.willChange = "transform", q.current = Lo.render(Ae, !0), Y.current = Lo.update(ze, !0))
        }, ye = () => {
            R.current && (R.current.style.willChange = "auto", q.current && No.render(q.current), Y.current && No.update(Y.current))
        }, Ae = () => {
            if (!R.current) return;
            let v = j.current.windowWidth,
                P = j.current.windowHeight;
            f && f.current && (v = se.current.width, P = se.current.height), v *= .5, P *= .5, v *= s, P *= s, R.current.style[we.current] = `translate3d(${z.current*v}px, ${A.current*P}px, 0px)`
        }, ze = ({
            delta: v
        }) => {
            const P = Math.abs(F.current - z.current),
                re = Math.abs(U.current - A.current);
            if (P < .001 && re < .001) return;
            let te = v / 16.666666666666668;
            de.current.update();
            const ie = Math.round(te);
            ie >= 1 && (te = ie);
            const ae = Ro(z.current, F.current, x * te);
            z.current = ae;
            const he = Ro(A.current, U.current, x * te);
            A.current = he
        }, Re = () => {
            document.hidden ? ye() : W()
        }, Ne = (v, P) => {
            let re = j.current.windowWidth,
                te = j.current.windowHeight,
                ie = v,
                ae = P;
            return f && f.current && (re = se.current.width, te = se.current.height, ie = v - se.current.x, ae = P - se.current.y), {
                x: ie / re * 2 - 1,
                y: ae / te * 2 - 1
            }
        }, Oe = v => {
            const P = v.target.mouse.x,
                re = v.target.mouse.y,
                {
                    x: te,
                    y: ie
                } = Ne(P, re);
            F.current = te, U.current = ie
        }, Ee = () => {
            p && (F.current = 0, U.current = 0)
        }, pe = v => {
            const P = "touches" in v ? v.touches[0].clientX : v.clientX,
                re = "touches" in v ? v.touches[0].clientY : v.clientY,
                {
                    x: te,
                    y: ie
                } = Ne(P, re);
            (te <= -1 || te >= 1 || ie >= 1 || ie <= -1) && Ee()
        }, M = () => {
            if (!f || !f.current) return;
            const v = f.current.getBoundingClientRect();
            se.current = {
                x: v.x,
                y: v.y,
                width: f.current.clientWidth,
                height: f.current.clientHeight
            }
        }, Z = Au(M, 150), $ = v => {
            if (v[0].isIntersecting) ee.current = !0, W(), de.current.setShouldUpdate(!0);
            else {
                if (!T) return;
                ee.current = !1, ye(), de.current.setShouldUpdate(!1)
            }
        };
        return N.useEffect(() => {
            if (!w && pf()) return;
            de.current.init(f), W();
            let v = window,
                P = window;
            return c && c.current && (P = c.current), f && f.current && (M(), v = f.current, P.addEventListener("scroll", Z, {
                passive: !0
            }), window.addEventListener("resize", Z, {
                passive: !0
            })), de.current.addEventListener("mousemove", Oe), window.addEventListener("visibilitychange", Re), window.addEventListener("touchstart", pe, {
                passive: !0
            }), v.addEventListener("mouseout", Ee), fe.current = new IntersectionObserver($, {
                threshold: .5
            }), I.current && fe.current.observe(I.current), () => {
                ye(), f && f.current && (P.removeEventListener("scroll", Z), window.removeEventListener("resize", Z)), de.current.removeEventListener("mousemove", Oe), window.removeEventListener("visibilitychange", Re), window.removeEventListener("touchstart", pe), v.removeEventListener("mouseout", Ee), I.current && fe.current && fe.current.unobserve(I.current), de.current.destroy()
            }
        }, []), Vt.createElement(Vt.Fragment, null, Vt.createElement("span", {
            ref: I,
            style: {
                width: "100%",
                height: "100%",
                display: "inline-block",
                userSelect: "none",
                pointerEvents: "none",
                position: C ? "absolute" : "relative",
                top: 0,
                left: 0,
                zIndex: S || "initial"
            }
        }, Vt.createElement("span", {
            ref: R,
            style: {
                backfaceVisibility: "hidden",
                position: "relative",
                width: "100%",
                height: "100%",
                display: "inline-block",
                userSelect: "initial",
                pointerEvents: "initial"
            }
        }, a)))
    },
    Hp = {
        xMaxOffset: 1,
        xOffset: 1,
        yMaxOffset: 1,
        yOffset: 1
    },
    $c = N.forwardRef((i, a) => {
        N.useImperativeHandle(a, () => ({
            updateValues: Ne
        }));
        const {
            children: s,
            strength: f = .14,
            scrollContainerRef: c = null,
            enableOnTouchDevice: p = !0,
            lerpEase: w = .06,
            isHorizontal: C = !1,
            isAbsolutelyPositioned: x = !1,
            zIndex: S = null,
            shouldPause: T = !0
        } = i, j = N.useRef(null), R = N.useRef(null), I = N.useRef(1), z = N.useRef(1), A = N.useRef(1), F = N.useRef(1), U = N.useRef(null), q = N.useRef(null), Y = N.useRef(!0), ee = N.useRef(Hp), se = N.useRef(1), de = N.useRef(1), {
            windowSizeRef: fe
        } = df(), we = N.useRef(Po.exports("transform")), W = () => {
            j.current && (j.current.style.willChange = "transform", U.current = Lo.render(Ae, !0), q.current = Lo.update(ze, !0))
        }, ye = () => {
            j.current && (j.current.style.willChange = "auto", U.current && No.render(U.current), q.current && No.update(q.current))
        }, Ae = () => {
            if (!Y.current || !j.current) return;
            let M = C ? 1 : 0;
            j.current.style[we.current] = `translate3d(${I.current*f*M}px, ${z.current*f*(1-M)}px, 0px)`
        }, ze = ({
            delta: M
        }) => {
            if (!Y.current) return;
            const Z = Math.abs(A.current - I.current),
                $ = Math.abs(F.current - z.current);
            if (Z < .001 && $ < .001) return;
            let v = M / 16.666666666666668;
            const P = Math.round(v);
            P >= 1 && (v = P);
            const re = Ro(I.current, A.current, w * v);
            I.current = re;
            const te = Ro(z.current, F.current, w * v);
            z.current = te
        }, Re = () => {
            document.hidden ? ye() : W()
        }, Ne = () => {
            (() => {
                if (!R || !R.current) return;
                Ee();
                const M = R.current.getBoundingClientRect();
                se.current = ee.current.xOffset + M.x + .5 * M.width, de.current = ee.current.yOffset + M.y + .5 * M.height
            })(), pe()
        }, Oe = Au(Ne, 150), Ee = () => {
            var M;
            c && c.current ? ee.current = {
                xOffset: (M = c.current).scrollLeft,
                yOffset: M.scrollTop,
                xMaxOffset: M.scrollWidth - M.offsetWidth,
                yMaxOffset: M.scrollHeight - M.offsetHeight
            } : ee.current = {
                xOffset: window.pageXOffset,
                yOffset: window.pageYOffset,
                xMaxOffset: document.body.clientWidth - window.innerWidth,
                yMaxOffset: document.body.clientHeight - window.innerHeight
            }
        }, pe = () => {
            Ee();
            let M = ee.current.xOffset - se.current,
                Z = ee.current.yOffset - de.current;
            if (M += .5 * fe.current.windowWidth, Z += .5 * fe.current.windowHeight, A.current = M, F.current = Z, Math.abs(F.current) > 1.5 * fe.current.windowHeight || Math.abs(A.current) > 1.5 * fe.current.windowWidth) {
                if (!T) return;
                Y.current = !1
            } else Y.current = !0
        };
        return N.useEffect(() => {
            if (!p && pf()) return;
            W();
            let M = window;
            return c && c.current && (M = c.current), M.addEventListener("scroll", pe, {
                passive: !0
            }), window.addEventListener("visibilitychange", Re), window.addEventListener("resize", Oe), Ne(), () => {
                ye(), M.removeEventListener("scroll", pe), window.removeEventListener("visibilitychange", Re), window.removeEventListener("resize", Oe)
            }
        }, []), Vt.createElement(Vt.Fragment, null, Vt.createElement("span", {
            ref: R,
            style: {
                width: "100%",
                height: "100%",
                display: "inline-block",
                userSelect: "none",
                pointerEvents: "none",
                position: x ? "absolute" : "relative",
                top: 0,
                left: 0,
                zIndex: S || "initial"
            }
        }, Vt.createElement("span", {
            ref: j,
            style: {
                backfaceVisibility: "hidden",
                position: "relative",
                width: "100%",
                height: "100%",
                display: "inline-block",
                userSelect: "initial",
                pointerEvents: "initial"
            }
        }, s)))
    }),
    Wp = () => g.jsxs(g.Fragment, {
        children: [g.jsx("div", {
            className: "relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8"
        }), g.jsx("div", {
            className: "relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20"
        })]
    }),
    hf = () => g.jsxs(g.Fragment, {
        children: [g.jsx("div", {
            className: "hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block"
        }), g.jsx(Co, {
            className: "hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block"
        }), g.jsx(Co, {
            className: "hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block"
        })]
    }),
    Vp = () => g.jsxs(g.Fragment, {
        children: [g.jsx("div", {
            className: "absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"
        }), g.jsx("div", {
            className: "absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"
        }), g.jsx("div", {
            className: "absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"
        }), g.jsx("div", {
            className: "absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"
        })]
    }),
    mf = ({
        parallaxRef: i
    }) => {
        const [a, s] = N.useState(!1);
        return N.useEffect(() => {
            s(!0)
        }, []), g.jsxs("div", {
            className: "absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]",
            children: [g.jsx(Vp, {}), g.jsxs(Bp, {
                strength: .07,
                parallaxContainerRef: i,
                children: [g.jsx("div", {
                    className: "absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]",
                    children: g.jsx("div", {
                        className: `w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${a?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`
                    })
                }), g.jsx("div", {
                    className: "absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]",
                    children: g.jsx("div", {
                        className: `w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${a?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`
                    })
                }), g.jsx("div", {
                    className: "absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]",
                    children: g.jsx("div", {
                        className: `hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out ${a?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`
                    })
                }), g.jsx("div", {
                    className: "absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]",
                    children: g.jsx("div", {
                        className: `w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${a?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`
                    })
                }), g.jsx("div", {
                    className: "absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]",
                    children: g.jsx("div", {
                        className: `w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${a?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`
                    })
                }), g.jsx("div", {
                    className: "absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]",
                    children: g.jsx("div", {
                        className: `w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${a?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`
                    })
                })]
            })]
        })
    },
    Gp = ({
        text: i,
        delay: a = 500,
        pauseDelay: s = 1e4
    }) => {
        const [f, c] = N.useState(" "), [p, w] = N.useState(!0), [C, x] = N.useState("");
        return i = "​" + i, N.useEffect(() => {
            let S = 0;
            const T = setInterval(() => {
                S < i.length && (c(i.slice(0, S + 1)), w(!0), x(""), S++, S == i.length && x("blinking"))
            }, a);
            return () => clearInterval(T)
        }, [i, 0]), g.jsxs("p", {
            children: [f, g.jsx("span", {
                className: `cursor ${C}`,
                children: "|"
            }), " "]
        })
    },
    $p = () => {
        const i = N.useRef(null);
        return g.jsxs(Mo, {
            className: "pt-[12rem] -mt-[5.25rem]",
            crosses: !0,
            crossesOffset: "lg:translate-y-[5.25rem]",
            customPaddings: !0,
            id: "home",
            children: [g.jsx("div", {
                className: "container relative",
                ref: i,
                children: g.jsxs("div", {
                    className: "relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]",
                    children: [g.jsxs("h1", {
                        className: "h1 mb-6",
                        children: ["Pham Minh Quang ", "", g.jsxs("span", {
                            className: "inline-block relative",
                            children: [" ", g.jsx("img", {
                                src: X2,
                                className: "absolute top-full left-0 w-full xl:-mt-2",
                                width: 624,
                                height: 28,
                                alt: "Curve"
                            })]
                        })]
                    }), g.jsxs("p", {
                        className: "body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 sm:text-2lg md:text-2xl",
                        children: ["I am a", g.jsx(Gp, {
                            text: " C++ Software Engineer.",
                            delay: 100
                        })]
                    }), g.jsxs("div", {
                        children: [g.jsx("br", {}), g.jsx("br", {}), g.jsx("br", {})]
                    }), g.jsx(af, {
                        href: "#about",
                        white: !0,
                        children: "Get started"
                    })]
                })
            }), g.jsx(hf, {})]
        })
    },
    Qp = () => g.jsx("svg", {
        className: "block",
        width: 0,
        height: 0,
        children: g.jsxs("defs", {
            children: [g.jsxs("linearGradient", {
                id: "btn-left",
                x1: "50%",
                x2: "50%",
                y1: "0%",
                y2: "100%",
                children: [g.jsx("stop", {
                    offset: "0%",
                    stopColor: "#89F9E8"
                }), g.jsx("stop", {
                    offset: "100%",
                    stopColor: "#FACB7B"
                })]
            }), g.jsxs("linearGradient", {
                id: "btn-top",
                x1: "100%",
                x2: "0%",
                y1: "50%",
                y2: "50%",
                children: [g.jsx("stop", {
                    offset: "0%",
                    stopColor: "#D87CEE"
                }), g.jsx("stop", {
                    offset: "100%",
                    stopColor: "#FACB7B"
                })]
            }), g.jsxs("linearGradient", {
                id: "btn-bottom",
                x1: "100%",
                x2: "0%",
                y1: "50%",
                y2: "50%",
                children: [g.jsx("stop", {
                    offset: "0%",
                    stopColor: "#9099FC"
                }), g.jsx("stop", {
                    offset: "100%",
                    stopColor: "#89F9E8"
                })]
            }), g.jsxs("linearGradient", {
                id: "btn-right",
                x1: "14.635%",
                x2: "14.635%",
                y1: "0%",
                y2: "100%",
                children: [g.jsx("stop", {
                    offset: "0%",
                    stopColor: "#9099FC"
                }), g.jsx("stop", {
                    offset: "100%",
                    stopColor: "#D87CEE"
                })]
            })]
        })
    }),
    vf = ({
        children: i,
        className: a = "",
        threshold: s = .5
    }) => {
        const [f, c] = N.useState(!1), p = N.useRef(null);
        return N.useEffect(() => {
            const w = new IntersectionObserver(([C]) => {
                C.isIntersecting && c(!0)
            }, {
                threshold: s
            });
            return p.current && w.observe(p.current), () => {
                p.current && w.unobserve(p.current)
            }
        }, [s]), g.jsx("div", {
            ref: p,
            className: `${a} ${f?"popup":""}`,
            children: i
        })
    },
    Qc = i => i === "left" ? g.jsxs("svg", {
        width: "5",
        height: "14",
        viewBox: "0 0 5 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [g.jsx("path", {
            d: "M5 0.822266H1V12.8223H5",
            stroke: "url(#brackets-left)"
        }), g.jsx("defs", {
            children: g.jsxs("linearGradient", {
                id: "brackets-left",
                x1: "50%",
                x2: "50%",
                y1: "0%",
                y2: "100%",
                children: [g.jsx("stop", {
                    offset: "0%",
                    stopColor: "#89F9E8"
                }), g.jsx("stop", {
                    offset: "100%",
                    stopColor: "#FACB7B"
                })]
            })
        })]
    }) : g.jsxs("svg", {
        width: "5",
        height: "14",
        viewBox: "0 0 5 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [g.jsx("path", {
            d: "M-2.98023e-08 0.822266H4V12.8223H-2.98023e-08",
            stroke: "url(#brackets-right)"
        }), g.jsx("defs", {
            children: g.jsxs("linearGradient", {
                id: "brackets-right",
                x1: "14.635%",
                x2: "14.635%",
                y1: "0%",
                y2: "100%",
                children: [g.jsx("stop", {
                    offset: "0%",
                    stopColor: "#9099FC"
                }), g.jsx("stop", {
                    offset: "100%",
                    stopColor: "#D87CEE"
                })]
            })
        })]
    }),
    Yp = ({
        className: i,
        children: a
    }) => g.jsxs("div", {
        className: `tagline flex items-center ${i||""}`,
        children: [Qc("left"), g.jsx("div", {
            className: "mx-3 text-n-3",
            children: a
        }), Qc("right")]
    }),
    gf = ({
        className: i,
        title: a,
        text: s,
        tag: f
    }) => g.jsxs("div", {
        className: `${i} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`,
        children: [f && g.jsx(Yp, {
            className: "mb-4 md:justify-center",
            children: f
        }), a && g.jsx("h2", {
            className: "h2",
            children: a
        }), s && g.jsx("p", {
            className: "body-2 mt-4 text-n-4",
            children: s
        })]
    }),
    Kp = () => {
        const a = (() => {
            const c = new Date().getHours();
            return c > 5 && c <= 7 ? "Why you get up so early? Great morning ya?" : c > 7 && c <= 11 ? "Good morning 🌞" : c > 11 && c <= 13 ? "Btw, did you have a lunch?" : c > 13 && c <= 17 ? "Good afternoon!" : c > 17 && c <= 20 ? "Good everning🌙" : c > 20 && c <= 23 ? "Good night✨" : "Btw, why are you still here this time 😨?"
        })();
        N.useRef(null);
        const s = "I am a software engineer with nearly three years of experience in developing and maintaining efficient, high-performance applications. Skilled in low level programing, system optimization, and software architecture, with a strong problem-solving mindset.",
            f = a;
        return g.jsxs(Mo, {
            className: "pt-[12rem] -mt-[5.25rem]",
            crosses: !0,
            crossesOffset: "lg:translate-y-[5.25rem]",
            customPaddings: !0,
            id: "about",
            children: [g.jsx("div", {
                className: "relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24",
                children: g.jsxs("div", {
                    className: "relative z-1 p-0.5 rounded-2xl bg-conic-gradient",
                    children: [g.jsxs("div", {
                        className: "relative bg-n-8 rounded-[1rem]",
                        children: [g.jsx("div", {
                            className: "h-[1.4rem] bg-n-10 rounded-t-[0.9rem]"
                        }), g.jsx(vf, {
                            children: g.jsx("div", {
                                className: "aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] relative flex items-center justify-center text-top",
                                children: g.jsxs("h1", {
                                    className: "p-1 text-lg md:text-xl lg:text-2xl leading-relaxed",
                                    children: [s, g.jsx("br", {}), g.jsx("br", {}), f]
                                })
                            })
                        }), g.jsx($c, {
                            isAbsolutelyPositioned: !0,
                            children: g.jsx("a", {
                                href: "https://drive.usercontent.google.com/uc?id=1wDYI4u8WRzjq_GhUw5rEReG9OaU9BtJj&export=download",
                                className: "flex items-center space-x-3 font-semibold text-lg hover:text-n-1 transition-colors duration-300",
                                children: g.jsx("ul", {
                                    className: "hidden absolute -left-[6.0rem] bottom-[1.5rem] px-4 py-3 bg-n-9/40 backdrop-blur border border-n-1/20 rounded-2xl xl:flex items-center space-x-3 text-white",
                                    children: g.jsx("li", {
                                        className: "flex items-center space-x-3",
                                        children: g.jsx("span", {
                                            children: "My CV"
                                        })
                                    })
                                })
                            })
                        }), g.jsx($c, {
                            isAbsolutelyPositioned: !0,
                            children: g.jsx("a", {
                                href: "#contacts",
                                className: "flex items-center space-x-3 font-semibold text-lg hover:text-n-1 transition-colors duration-300",
                                children: g.jsx("ul", {
                                    className: "hidden absolute -left-[6.0rem] bottom-[5.5rem] px-4 py-3 bg-n-9/40 backdrop-blur border border-n-1/20 rounded-2xl xl:flex items-center space-x-3 text-white",
                                    children: g.jsx("li", {
                                        className: "flex items-center space-x-3",
                                        children: g.jsx("span", {
                                            children: "Contact"
                                        })
                                    })
                                })
                            })
                        })]
                    }), g.jsx(Wp, {})]
                })
            }), g.jsx(mf, {}), g.jsx(hf, {})]
        })
    },
    Xp = () => g.jsx("div", {
        className: "absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none"
    }),
    Zp = () => g.jsx("svg", {
        className: "block",
        width: 0,
        height: 0,
        children: g.jsx("clipPath", {
            id: "benefits",
            clipPathUnits: "objectBoundingBox",
            children: g.jsx("path", {
                d: "M0.079,0 h0.756 a0.079,0.083,0,0,1,0.058,0.026 l0.086,0.096 A0.079,0.083,0,0,1,1,0.179 V0.917 c0,0.046,-0.035,0.083,-0.079,0.083 H0.079 c-0.044,0,-0.079,-0.037,-0.079,-0.083 V0.083 C0,0.037,0.035,0,0.079,0"
            })
        })
    }),
    qp = () => g.jsxs(Mo, {
        id: "skills",
        children: [g.jsxs("div", {
            className: "container relative z-2",
            children: [g.jsx(gf, {
                className: "md:max-w-md lg:max-w-2xl",
                title: "My skills"
            }), g.jsx(vf, {
                children: g.jsxs("div", {
                    className: "flex flex-wrap justify-center items-center gap-4 mb-10",
                    children: [" ", vp.map(i => g.jsxs("div", {
                        className: "block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]",
                        style: {
                            backgroundImage: `url(${i.backgroundUrl})`
                        },
                        children: [g.jsxs("div", {
                            className: "relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none",
                            children: [g.jsx("h5", {
                                className: "h5 mb-5",
                                children: i.title
                            }), g.jsx("p", {
                                className: "body-2 mb-6 text-n-3",
                                children: i.text
                            }), g.jsxs("div", {
                                className: "flex flex-wrap justify-center items-center gap-4 mt-auto",
                                children: [" ", i.icons.map((a, s) => g.jsx("img", {
                                    src: a.src,
                                    alt: a.alt,
                                    width: 24,
                                    height: 24,
                                    className: "icon-class",
                                    style: {
                                        marginRight: s === i.icons.length - 1 ? 0 : "10px"
                                    }
                                }, s))]
                            })]
                        }), i.light && g.jsx(Xp, {}), g.jsx("div", {
                            className: "absolute inset-0.5 bg-n-8",
                            style: {
                                clipPath: "url(#benefits)"
                            },
                            children: g.jsx("div", {
                                className: "absolute inset-0 opacity-0 transition-opacity hover:opacity-10",
                                children: i.imageUrl && g.jsx("img", {
                                    src: i.imageUrl,
                                    width: 380,
                                    height: 362,
                                    alt: i.title,
                                    className: "w-full h-full object-cover"
                                })
                            })
                        }), g.jsx(Zp, {})]
                    }, i.id))]
                })
            })]
        }), g.jsx(mf, {})]
    });
new Date().getFullYear();

function Jp() {
    return g.jsxs(Mo, {
        className: "pt-[12rem] -mt-[5.25rem]",
        crosses: !0,
        crossesOffset: "lg:translate-y-[5.25rem]",
        customPaddings: !0,
        id: "contacts",
        children: [g.jsx(gf, {
            title: "Contact Information"
        }), g.jsx("ul", {
            className: "flex justify-center items-center gap-5 flex-wrap",
            children: hp.map(i => g.jsx("a", {
                href: i.url,
                target: "_blank",
                className: "flex items-center justify-center w-14 h-14 bg-n-4 rounded-full transition-colors hover:bg-n-1",
                children: g.jsx("img", {
                    src: i.iconUrl,
                    width: 24,
                    height: 24,
                    alt: i.title
                })
            }, i.id))
        })]
    })
}

function bp() {
    return g.jsx(g.Fragment, {
        children: g.jsxs("div", {
            className: "pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden",
            children: [g.jsx(kp, {}), g.jsx($p, {}), g.jsx(Kp, {}), g.jsx(qp, {}), g.jsx(Jp, {}), g.jsx(Qp, {})]
        })
    })
}
S0.createRoot(document.getElementById("root")).render(g.jsx(Vt.StrictMode, {
    children: g.jsx(D2, {
        children: g.jsx(bp, {})
    })
}));