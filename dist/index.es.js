import React, {
    createElement,
    useContext,
    useDebugValue,
    useEffect,
    useImperativeHandle,
    useMemo,
    useRef,
    useState,
} from 'react';
import * as ReactDOM from 'react-dom';

let reactIsExports = {};
const reactIs$1 = {
    get exports() {
        return reactIsExports;
    },
    set exports(v) {
        reactIsExports = v;
    },
};

const reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

let hasRequiredReactIs_production_min;

function requireReactIs_production_min() {
    if (hasRequiredReactIs_production_min) return reactIs_production_min;
    hasRequiredReactIs_production_min = 1;
    const b = typeof Symbol === 'function' && Symbol.for;
    let c = b ? Symbol.for('react.element') : 60103;
    let d = b ? Symbol.for('react.portal') : 60106;
    let e = b ? Symbol.for('react.fragment') : 60107;
    let f = b ? Symbol.for('react.strict_mode') : 60108;
    let g = b ? Symbol.for('react.profiler') : 60114;
    let h = b ? Symbol.for('react.provider') : 60109;
    let k = b ? Symbol.for('react.context') : 60110;
    let l = b ? Symbol.for('react.async_mode') : 60111;
    let m = b ? Symbol.for('react.concurrent_mode') : 60111;
    let n = b ? Symbol.for('react.forward_ref') : 60112;
    let p = b ? Symbol.for('react.suspense') : 60113;
    let q = b ? Symbol.for('react.suspense_list') : 60120;
    let r = b ? Symbol.for('react.memo') : 60115;
    let t = b ? Symbol.for('react.lazy') : 60116;
    let v = b ? Symbol.for('react.block') : 60121;
    let w = b ? Symbol.for('react.fundamental') : 60117;
    let x = b ? Symbol.for('react.responder') : 60118;
    let y = b ? Symbol.for('react.scope') : 60119;
    function z(a) {
        if (typeof a === 'object' && a !== null) {
            const u = a.$$typeof;
            switch (u) {
                case c:
                    switch (((a = a.type), a)) {
                        case l:
                        case m:
                        case e:
                        case g:
                        case f:
                        case p:
                            return a;
                        default:
                            switch (((a = a && a.$$typeof), a)) {
                                case k:
                                case n:
                                case t:
                                case r:
                                case h:
                                    return a;
                                default:
                                    return u;
                            }
                    }
                case d:
                    return u;
            }
        }
    }
    function A(a) {
        return z(a) === m;
    }
    reactIs_production_min.AsyncMode = l;
    reactIs_production_min.ConcurrentMode = m;
    reactIs_production_min.ContextConsumer = k;
    reactIs_production_min.ContextProvider = h;
    reactIs_production_min.Element = c;
    reactIs_production_min.ForwardRef = n;
    reactIs_production_min.Fragment = e;
    reactIs_production_min.Lazy = t;
    reactIs_production_min.Memo = r;
    reactIs_production_min.Portal = d;
    reactIs_production_min.Profiler = g;
    reactIs_production_min.StrictMode = f;
    reactIs_production_min.Suspense = p;
    reactIs_production_min.isAsyncMode = function (a) {
        return A(a) || z(a) === l;
    };
    reactIs_production_min.isConcurrentMode = A;
    reactIs_production_min.isContextConsumer = function (a) {
        return z(a) === k;
    };
    reactIs_production_min.isContextProvider = function (a) {
        return z(a) === h;
    };
    reactIs_production_min.isElement = function (a) {
        return typeof a === 'object' && a !== null && a.$$typeof === c;
    };
    reactIs_production_min.isForwardRef = function (a) {
        return z(a) === n;
    };
    reactIs_production_min.isFragment = function (a) {
        return z(a) === e;
    };
    reactIs_production_min.isLazy = function (a) {
        return z(a) === t;
    };
    reactIs_production_min.isMemo = function (a) {
        return z(a) === r;
    };
    reactIs_production_min.isPortal = function (a) {
        return z(a) === d;
    };
    reactIs_production_min.isProfiler = function (a) {
        return z(a) === g;
    };
    reactIs_production_min.isStrictMode = function (a) {
        return z(a) === f;
    };
    reactIs_production_min.isSuspense = function (a) {
        return z(a) === p;
    };
    reactIs_production_min.isValidElementType = function (a) {
        return (
            typeof a === 'string' ||
            typeof a === 'function' ||
            a === e ||
            a === m ||
            a === g ||
            a === f ||
            a === p ||
            a === q ||
            (typeof a === 'object' &&
                a !== null &&
                (a.$$typeof === t ||
                    a.$$typeof === r ||
                    a.$$typeof === h ||
                    a.$$typeof === k ||
                    a.$$typeof === n ||
                    a.$$typeof === w ||
                    a.$$typeof === x ||
                    a.$$typeof === y ||
                    a.$$typeof === v))
        );
    };
    reactIs_production_min.typeOf = z;
    return reactIs_production_min;
}

const reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

let hasRequiredReactIs_development;

function requireReactIs_development() {
    if (hasRequiredReactIs_development) return reactIs_development;
    hasRequiredReactIs_development = 1;

    if (process.env.NODE_ENV !== 'production') {
        (function () {
            // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
            // nor polyfill, then a plain number is used for performance.
            const hasSymbol = typeof Symbol === 'function' && Symbol.for;
            const REACT_ELEMENT_TYPE = hasSymbol
                ? Symbol.for('react.element')
                : 0xeac7;
            const REACT_PORTAL_TYPE = hasSymbol
                ? Symbol.for('react.portal')
                : 0xeaca;
            const REACT_FRAGMENT_TYPE = hasSymbol
                ? Symbol.for('react.fragment')
                : 0xeacb;
            const REACT_STRICT_MODE_TYPE = hasSymbol
                ? Symbol.for('react.strict_mode')
                : 0xeacc;
            const REACT_PROFILER_TYPE = hasSymbol
                ? Symbol.for('react.profiler')
                : 0xead2;
            const REACT_PROVIDER_TYPE = hasSymbol
                ? Symbol.for('react.provider')
                : 0xeacd;
            const REACT_CONTEXT_TYPE = hasSymbol
                ? Symbol.for('react.context')
                : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
            // (unstable) APIs that have been removed. Can we remove the symbols?

            const REACT_ASYNC_MODE_TYPE = hasSymbol
                ? Symbol.for('react.async_mode')
                : 0xeacf;
            const REACT_CONCURRENT_MODE_TYPE = hasSymbol
                ? Symbol.for('react.concurrent_mode')
                : 0xeacf;
            const REACT_FORWARD_REF_TYPE = hasSymbol
                ? Symbol.for('react.forward_ref')
                : 0xead0;
            const REACT_SUSPENSE_TYPE = hasSymbol
                ? Symbol.for('react.suspense')
                : 0xead1;
            const REACT_SUSPENSE_LIST_TYPE = hasSymbol
                ? Symbol.for('react.suspense_list')
                : 0xead8;
            const REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
            const REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
            const REACT_BLOCK_TYPE = hasSymbol
                ? Symbol.for('react.block')
                : 0xead9;
            const REACT_FUNDAMENTAL_TYPE = hasSymbol
                ? Symbol.for('react.fundamental')
                : 0xead5;
            const REACT_RESPONDER_TYPE = hasSymbol
                ? Symbol.for('react.responder')
                : 0xead6;
            const REACT_SCOPE_TYPE = hasSymbol
                ? Symbol.for('react.scope')
                : 0xead7;

            function isValidElementType(type) {
                return (
                    typeof type === 'string' ||
                    typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
                    type === REACT_FRAGMENT_TYPE ||
                    type === REACT_CONCURRENT_MODE_TYPE ||
                    type === REACT_PROFILER_TYPE ||
                    type === REACT_STRICT_MODE_TYPE ||
                    type === REACT_SUSPENSE_TYPE ||
                    type === REACT_SUSPENSE_LIST_TYPE ||
                    (typeof type === 'object' &&
                        type !== null &&
                        (type.$$typeof === REACT_LAZY_TYPE ||
                            type.$$typeof === REACT_MEMO_TYPE ||
                            type.$$typeof === REACT_PROVIDER_TYPE ||
                            type.$$typeof === REACT_CONTEXT_TYPE ||
                            type.$$typeof === REACT_FORWARD_REF_TYPE ||
                            type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
                            type.$$typeof === REACT_RESPONDER_TYPE ||
                            type.$$typeof === REACT_SCOPE_TYPE ||
                            type.$$typeof === REACT_BLOCK_TYPE))
                );
            }

            function typeOf(object) {
                if (typeof object === 'object' && object !== null) {
                    const { $$typeof } = object;

                    switch ($$typeof) {
                        case REACT_ELEMENT_TYPE:
                            var { type } = object;

                            switch (type) {
                                case REACT_ASYNC_MODE_TYPE:
                                case REACT_CONCURRENT_MODE_TYPE:
                                case REACT_FRAGMENT_TYPE:
                                case REACT_PROFILER_TYPE:
                                case REACT_STRICT_MODE_TYPE:
                                case REACT_SUSPENSE_TYPE:
                                    return type;

                                default:
                                    var $$typeofType = type && type.$$typeof;

                                    switch ($$typeofType) {
                                        case REACT_CONTEXT_TYPE:
                                        case REACT_FORWARD_REF_TYPE:
                                        case REACT_LAZY_TYPE:
                                        case REACT_MEMO_TYPE:
                                        case REACT_PROVIDER_TYPE:
                                            return $$typeofType;

                                        default:
                                            return $$typeof;
                                    }
                            }

                        case REACT_PORTAL_TYPE:
                            return $$typeof;
                    }
                }

                return undefined;
            } // AsyncMode is deprecated along with isAsyncMode

            const AsyncMode = REACT_ASYNC_MODE_TYPE;
            const ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
            const ContextConsumer = REACT_CONTEXT_TYPE;
            const ContextProvider = REACT_PROVIDER_TYPE;
            const Element = REACT_ELEMENT_TYPE;
            const ForwardRef = REACT_FORWARD_REF_TYPE;
            const Fragment = REACT_FRAGMENT_TYPE;
            const Lazy = REACT_LAZY_TYPE;
            const Memo = REACT_MEMO_TYPE;
            const Portal = REACT_PORTAL_TYPE;
            const Profiler = REACT_PROFILER_TYPE;
            const StrictMode = REACT_STRICT_MODE_TYPE;
            const Suspense = REACT_SUSPENSE_TYPE;
            let hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

            function isAsyncMode(object) {
                {
                    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                        hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

                        console.warn(
                            'The ReactIs.isAsyncMode() alias has been deprecated, ' +
                                'and will be removed in React 17+. Update your code to use ' +
                                'ReactIs.isConcurrentMode() instead. It has the exact same API.',
                        );
                    }
                }

                return (
                    isConcurrentMode(object) ||
                    typeOf(object) === REACT_ASYNC_MODE_TYPE
                );
            }
            function isConcurrentMode(object) {
                return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
            }
            function isContextConsumer(object) {
                return typeOf(object) === REACT_CONTEXT_TYPE;
            }
            function isContextProvider(object) {
                return typeOf(object) === REACT_PROVIDER_TYPE;
            }
            function isElement(object) {
                return (
                    typeof object === 'object' &&
                    object !== null &&
                    object.$$typeof === REACT_ELEMENT_TYPE
                );
            }
            function isForwardRef(object) {
                return typeOf(object) === REACT_FORWARD_REF_TYPE;
            }
            function isFragment(object) {
                return typeOf(object) === REACT_FRAGMENT_TYPE;
            }
            function isLazy(object) {
                return typeOf(object) === REACT_LAZY_TYPE;
            }
            function isMemo(object) {
                return typeOf(object) === REACT_MEMO_TYPE;
            }
            function isPortal(object) {
                return typeOf(object) === REACT_PORTAL_TYPE;
            }
            function isProfiler(object) {
                return typeOf(object) === REACT_PROFILER_TYPE;
            }
            function isStrictMode(object) {
                return typeOf(object) === REACT_STRICT_MODE_TYPE;
            }
            function isSuspense(object) {
                return typeOf(object) === REACT_SUSPENSE_TYPE;
            }

            reactIs_development.AsyncMode = AsyncMode;
            reactIs_development.ConcurrentMode = ConcurrentMode;
            reactIs_development.ContextConsumer = ContextConsumer;
            reactIs_development.ContextProvider = ContextProvider;
            reactIs_development.Element = Element;
            reactIs_development.ForwardRef = ForwardRef;
            reactIs_development.Fragment = Fragment;
            reactIs_development.Lazy = Lazy;
            reactIs_development.Memo = Memo;
            reactIs_development.Portal = Portal;
            reactIs_development.Profiler = Profiler;
            reactIs_development.StrictMode = StrictMode;
            reactIs_development.Suspense = Suspense;
            reactIs_development.isAsyncMode = isAsyncMode;
            reactIs_development.isConcurrentMode = isConcurrentMode;
            reactIs_development.isContextConsumer = isContextConsumer;
            reactIs_development.isContextProvider = isContextProvider;
            reactIs_development.isElement = isElement;
            reactIs_development.isForwardRef = isForwardRef;
            reactIs_development.isFragment = isFragment;
            reactIs_development.isLazy = isLazy;
            reactIs_development.isMemo = isMemo;
            reactIs_development.isPortal = isPortal;
            reactIs_development.isProfiler = isProfiler;
            reactIs_development.isStrictMode = isStrictMode;
            reactIs_development.isSuspense = isSuspense;
            reactIs_development.isValidElementType = isValidElementType;
            reactIs_development.typeOf = typeOf;
        })();
    }
    return reactIs_development;
}

(function (module) {
    if (process.env.NODE_ENV === 'production') {
        module.exports = requireReactIs_production_min();
    } else {
        module.exports = requireReactIs_development();
    }
})(reactIs$1);

function stylis_min(W) {
    function M(d, c, e, h, a) {
        for (
            var m = 0,
                b = 0,
                v = 0,
                n = 0,
                q,
                g,
                x = 0,
                K = 0,
                k,
                u = (k = q = 0),
                l = 0,
                r = 0,
                I = 0,
                t = 0,
                B = e.length,
                J = B - 1,
                y,
                f = '',
                p = '',
                F = '',
                G = '',
                C;
            l < B;

        ) {
            g = e.charCodeAt(l);
            l === J &&
                b + n + v + m !== 0 &&
                (b !== 0 && (g = b === 47 ? 10 : 47),
                (n = v = m = 0),
                B++,
                J++);

            if (b + n + v + m === 0) {
                if (
                    l === J &&
                    (r > 0 && (f = f.replace(N, '')), f.trim().length > 0)
                ) {
                    switch (g) {
                        case 32:
                        case 9:
                        case 59:
                        case 13:
                        case 10:
                            break;

                        default:
                            f += e.charAt(l);
                    }

                    g = 59;
                }

                switch (g) {
                    case 123:
                        f = f.trim();
                        q = f.charCodeAt(0);
                        k = 1;

                        for (t = ++l; l < B; ) {
                            switch ((g = e.charCodeAt(l))) {
                                case 123:
                                    k++;
                                    break;

                                case 125:
                                    k--;
                                    break;

                                case 47:
                                    switch ((g = e.charCodeAt(l + 1))) {
                                        case 42:
                                        case 47:
                                            a: {
                                                for (u = l + 1; u < J; ++u) {
                                                    switch (e.charCodeAt(u)) {
                                                        case 47:
                                                            if (
                                                                g === 42 &&
                                                                e.charCodeAt(
                                                                    u - 1,
                                                                ) === 42 &&
                                                                l + 2 !== u
                                                            ) {
                                                                l = u + 1;
                                                                break a;
                                                            }

                                                            break;

                                                        case 10:
                                                            if (g === 47) {
                                                                l = u + 1;
                                                                break a;
                                                            }
                                                    }
                                                }

                                                l = u;
                                            }
                                    }

                                    break;

                                case 91:
                                    g++;

                                case 40:
                                    g++;

                                case 34:
                                case 39:
                                    for (
                                        ;
                                        l++ < J && e.charCodeAt(l) !== g;

                                    ) {}
                            }

                            if (k === 0) break;
                            l++;
                        }

                        k = e.substring(t, l);
                        q === 0 &&
                            (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

                        switch (q) {
                            case 64:
                                r > 0 && (f = f.replace(N, ''));
                                g = f.charCodeAt(1);

                                switch (g) {
                                    case 100:
                                    case 109:
                                    case 115:
                                    case 45:
                                        r = c;
                                        break;

                                    default:
                                        r = O;
                                }

                                k = M(c, r, k, g, a + 1);
                                t = k.length;
                                A > 0 &&
                                    ((r = X(O, f, I)),
                                    (C = H(3, k, r, c, D, z, t, g, a, h)),
                                    (f = r.join('')),
                                    void 0 !== C &&
                                        (t = (k = C.trim()).length) === 0 &&
                                        ((g = 0), (k = '')));
                                if (t > 0)
                                    switch (g) {
                                        case 115:
                                            f = f.replace(da, ea);

                                        case 100:
                                        case 109:
                                        case 45:
                                            k = `${f}{${k}}`;
                                            break;

                                        case 107:
                                            f = f.replace(fa, '$1 $2');
                                            k = `${f}{${k}}`;
                                            k =
                                                w === 1 ||
                                                (w === 2 && L(`@${k}`, 3))
                                                    ? `@-webkit-${k}@${k}`
                                                    : `@${k}`;
                                            break;

                                        default:
                                            (k = f + k),
                                                h === 112 &&
                                                    (k = ((p += k), ''));
                                    }
                                else k = '';
                                break;

                            default:
                                k = M(c, X(c, f, I), k, h, a + 1);
                        }

                        F += k;
                        k = I = r = u = q = 0;
                        f = '';
                        g = e.charCodeAt(++l);
                        break;

                    case 125:
                    case 59:
                        f = (r > 0 ? f.replace(N, '') : f).trim();
                        if ((t = f.length) > 1)
                            switch (
                                (u === 0 &&
                                    ((q = f.charCodeAt(0)),
                                    q === 45 || (q > 96 && q < 123)) &&
                                    (t = (f = f.replace(' ', ':')).length),
                                A > 0 &&
                                    void 0 !==
                                        (C = H(
                                            1,
                                            f,
                                            c,
                                            d,
                                            D,
                                            z,
                                            p.length,
                                            h,
                                            a,
                                            h,
                                        )) &&
                                    (t = (f = C.trim()).length) === 0 &&
                                    (f = '\x00\x00'),
                                (q = f.charCodeAt(0)),
                                (g = f.charCodeAt(1)),
                                q)
                            ) {
                                case 0:
                                    break;

                                case 64:
                                    if (g === 105 || g === 99) {
                                        G += f + e.charAt(l);
                                        break;
                                    }

                                default:
                                    f.charCodeAt(t - 1) !== 58 &&
                                        (p += P(f, q, g, f.charCodeAt(2)));
                            }
                        I = r = u = q = 0;
                        f = '';
                        g = e.charCodeAt(++l);
                }
            }

            switch (g) {
                case 13:
                case 10:
                    b === 47
                        ? (b = 0)
                        : 1 + q === 0 &&
                          h !== 107 &&
                          f.length > 0 &&
                          ((r = 1), (f += '\x00'));
                    A * Y > 0 && H(0, f, c, d, D, z, p.length, h, a, h);
                    z = 1;
                    D++;
                    break;

                case 59:
                case 125:
                    if (b + n + v + m === 0) {
                        z++;
                        break;
                    }

                default:
                    z++;
                    y = e.charAt(l);

                    switch (g) {
                        case 9:
                        case 32:
                            if (n + m + b === 0)
                                switch (x) {
                                    case 44:
                                    case 58:
                                    case 9:
                                    case 32:
                                        y = '';
                                        break;

                                    default:
                                        g !== 32 && (y = ' ');
                                }
                            break;

                        case 0:
                            y = '\\0';
                            break;

                        case 12:
                            y = '\\f';
                            break;

                        case 11:
                            y = '\\v';
                            break;

                        case 38:
                            n + b + m === 0 && ((r = I = 1), (y = `\f${y}`));
                            break;

                        case 108:
                            if (n + b + m + E === 0 && u > 0)
                                switch (l - u) {
                                    case 2:
                                        x === 112 &&
                                            e.charCodeAt(l - 3) === 58 &&
                                            (E = x);

                                    case 8:
                                        K === 111 && (E = K);
                                }
                            break;

                        case 58:
                            n + b + m === 0 && (u = l);
                            break;

                        case 44:
                            b + v + n + m === 0 && ((r = 1), (y += '\r'));
                            break;

                        case 34:
                        case 39:
                            b === 0 && (n = n === g ? 0 : n === 0 ? g : n);
                            break;

                        case 91:
                            n + b + v === 0 && m++;
                            break;

                        case 93:
                            n + b + v === 0 && m--;
                            break;

                        case 41:
                            n + b + m === 0 && v--;
                            break;

                        case 40:
                            if (n + b + m === 0) {
                                if (q === 0)
                                    switch (2 * x + 3 * K) {
                                        case 533:
                                            break;

                                        default:
                                            q = 1;
                                    }
                                v++;
                            }

                            break;

                        case 64:
                            b + v + n + m + u + k === 0 && (k = 1);
                            break;

                        case 42:
                        case 47:
                            if (!(n + m + v > 0))
                                switch (b) {
                                    case 0:
                                        switch (
                                            2 * g +
                                            3 * e.charCodeAt(l + 1)
                                        ) {
                                            case 235:
                                                b = 47;
                                                break;

                                            case 220:
                                                (t = l), (b = 42);
                                        }

                                        break;

                                    case 42:
                                        g === 47 &&
                                            x === 42 &&
                                            t + 2 !== l &&
                                            (e.charCodeAt(t + 2) === 33 &&
                                                (p += e.substring(t, l + 1)),
                                            (y = ''),
                                            (b = 0));
                                }
                    }

                    b === 0 && (f += y);
            }

            K = x;
            x = g;
            l++;
        }

        t = p.length;

        if (t > 0) {
            r = c;
            if (
                A > 0 &&
                ((C = H(2, p, r, d, D, z, t, h, a, h)),
                void 0 !== C && (p = C).length === 0)
            )
                return G + p + F;
            p = `${r.join(',')}{${p}}`;

            if (w * E !== 0) {
                w !== 2 || L(p, 2) || (E = 0);

                switch (E) {
                    case 111:
                        p = p.replace(ha, ':-moz-$1') + p;
                        break;

                    case 112:
                        p =
                            p.replace(Q, '::-webkit-input-$1') +
                            p.replace(Q, '::-moz-$1') +
                            p.replace(Q, ':-ms-input-$1') +
                            p;
                }

                E = 0;
            }
        }

        return G + p + F;
    }

    function X(d, c, e) {
        const h = c.trim().split(ia);
        c = h;
        const a = h.length;
        const m = d.length;

        switch (m) {
            case 0:
            case 1:
                var b = 0;

                for (d = m === 0 ? '' : `${d[0]} `; b < a; ++b) {
                    c[b] = Z(d, c[b], e).trim();
                }

                break;

            default:
                var v = (b = 0);

                for (c = []; b < a; ++b) {
                    for (let n = 0; n < m; ++n) {
                        c[v++] = Z(`${d[n]} `, h[b], e).trim();
                    }
                }
        }

        return c;
    }

    function Z(d, c, e) {
        let h = c.charCodeAt(0);
        h < 33 && (h = (c = c.trim()).charCodeAt(0));

        switch (h) {
            case 38:
                return c.replace(F, `$1${d.trim()}`);

            case 58:
                return d.trim() + c.replace(F, `$1${d.trim()}`);

            default:
                if (1 * e > 0 && c.indexOf('\f') > 0)
                    return c.replace(
                        F,
                        (d.charCodeAt(0) === 58 ? '' : '$1') + d.trim(),
                    );
        }

        return d + c;
    }

    function P(d, c, e, h) {
        let a = `${d};`;
        var m = 2 * c + 3 * e + 4 * h;

        if (m === 944) {
            d = a.indexOf(':', 9) + 1;
            var b = a.substring(d, a.length - 1).trim();
            b = `${a.substring(0, d).trim() + b};`;
            return w === 1 || (w === 2 && L(b, 1)) ? `-webkit-${b}${b}` : b;
        }

        if (w === 0 || (w === 2 && !L(a, 1))) return a;

        switch (m) {
            case 1015:
                return a.charCodeAt(10) === 97 ? `-webkit-${a}${a}` : a;

            case 951:
                return a.charCodeAt(3) === 116 ? `-webkit-${a}${a}` : a;

            case 963:
                return a.charCodeAt(5) === 110 ? `-webkit-${a}${a}` : a;

            case 1009:
                if (a.charCodeAt(4) !== 100) break;

            case 969:
            case 942:
                return `-webkit-${a}${a}`;

            case 978:
                return `-webkit-${a}-moz-${a}${a}`;

            case 1019:
            case 983:
                return `-webkit-${a}-moz-${a}-ms-${a}${a}`;

            case 883:
                if (a.charCodeAt(8) === 45) return `-webkit-${a}${a}`;
                if (a.indexOf('image-set(', 11) > 0)
                    return a.replace(ja, '$1-webkit-$2') + a;
                break;

            case 932:
                if (a.charCodeAt(4) === 45)
                    switch (a.charCodeAt(5)) {
                        case 103:
                            return `-webkit-box-${a.replace(
                                '-grow',
                                '',
                            )}-webkit-${a}-ms-${a.replace(
                                'grow',
                                'positive',
                            )}${a}`;

                        case 115:
                            return `-webkit-${a}-ms-${a.replace(
                                'shrink',
                                'negative',
                            )}${a}`;

                        case 98:
                            return `-webkit-${a}-ms-${a.replace(
                                'basis',
                                'preferred-size',
                            )}${a}`;
                    }
                return `-webkit-${a}-ms-${a}${a}`;

            case 964:
                return `-webkit-${a}-ms-flex-${a}${a}`;

            case 1023:
                if (a.charCodeAt(8) !== 99) break;
                b = a
                    .substring(a.indexOf(':', 15))
                    .replace('flex-', '')
                    .replace('space-between', 'justify');
                return `-webkit-box-pack${b}-webkit-${a}-ms-flex-pack${b}${a}`;

            case 1005:
                return ka.test(a)
                    ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a
                    : a;

            case 1e3:
                b = a.substring(13).trim();
                c = b.indexOf('-') + 1;

                switch (b.charCodeAt(0) + b.charCodeAt(c)) {
                    case 226:
                        b = a.replace(G, 'tb');
                        break;

                    case 232:
                        b = a.replace(G, 'tb-rl');
                        break;

                    case 220:
                        b = a.replace(G, 'lr');
                        break;

                    default:
                        return a;
                }

                return `-webkit-${a}-ms-${b}${a}`;

            case 1017:
                if (a.indexOf('sticky', 9) === -1) break;

            case 975:
                c = (a = d).length - 10;
                b = (a.charCodeAt(c) === 33 ? a.substring(0, c) : a)
                    .substring(d.indexOf(':', 7) + 1)
                    .trim();

                switch ((m = b.charCodeAt(0) + (b.charCodeAt(7) | 0))) {
                    case 203:
                        if (b.charCodeAt(8) < 111) break;

                    case 115:
                        a = `${a.replace(b, `-webkit-${b}`)};${a}`;
                        break;

                    case 207:
                    case 102:
                        a = `${a.replace(
                            b,
                            `-webkit-${  102 < m ? 'inline-' : ''  }box`,
                        )};${a.replace(b, '-webkit-' + b)};${a.replace(
                            b,
                            '-ms-' + b + 'box',
                        )};${a}`;
                }

                return `${a};`;

            case 938:
                if (a.charCodeAt(5) === 45)
                    switch (a.charCodeAt(6)) {
                        case 105:
                            return (
                                (b = a.replace('-items', '')),
                                `-webkit-${a}-webkit-box-${b}-ms-flex-${b}${a}`
                            );

                        case 115:
                            return `-webkit-${a}-ms-flex-item-${a.replace(
                                ba,
                                '',
                            )}${a}`;

                        default:
                            return `-webkit-${a}-ms-flex-line-pack${a
                                .replace('align-content', '')
                                .replace(ba, '')}${a}`;
                    }
                break;

            case 973:
            case 989:
                if (a.charCodeAt(3) !== 45 || a.charCodeAt(4) === 122) break;

            case 931:
            case 953:
                if (!0 === la.test(d))
                    return (b = d.substring(d.indexOf(':') + 1)).charCodeAt(
                        0,
                    ) === 115
                        ? P(
                              d.replace('stretch', 'fill-available'),
                              c,
                              e,
                              h,
                          ).replace(':fill-available', ':stretch')
                        : a.replace(b, `-webkit-${b}`) +
                              a.replace(b, `-moz-${b.replace('fill-', '')}`) +
                              a;
                break;

            case 962:
                if (
                    ((a = `-webkit-${a}${
                        102 === a.charCodeAt(5) ? '-ms-' + a : ''
                    }${a}`),
                    e + h === 211 &&
                        a.charCodeAt(13) === 105 &&
                        a.indexOf('transform', 10) > 0)
                )
                    return (
                        a
                            .substring(0, a.indexOf(';', 27) + 1)
                            .replace(ma, '$1-webkit-$2') + a
                    );
        }

        return a;
    }

    function L(d, c) {
        let e = d.indexOf(c === 1 ? ':' : '{');
        const h = d.substring(0, c !== 3 ? e : 10);
        e = d.substring(e + 1, d.length - 1);
        return R(c !== 2 ? h : h.replace(na, '$1'), e, c);
    }

    function ea(d, c) {
        const e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
        return e !== `${c};`
            ? e.replace(oa, ' or ($1)').substring(4)
            : `(${c})`;
    }

    function H(d, c, e, h, a, m, b, v, n, q) {
        for (var g = 0, x = c, w; g < A; ++g) {
            switch ((w = S[g].call(B, d, x, e, h, a, m, b, v, n, q))) {
                case void 0:
                case !1:
                case !0:
                case null:
                    break;

                default:
                    x = w;
            }
        }

        if (x !== c) return x;
    }

    function T(d) {
        switch (d) {
            case void 0:
            case null:
                A = S.length = 0;
                break;

            default:
                if (typeof d === 'function') S[A++] = d;
                else if (typeof d === 'object')
                    for (let c = 0, e = d.length; c < e; ++c) {
                        T(d[c]);
                    }
                else Y = !!d | 0;
        }

        return T;
    }

    function U(d) {
        d = d.prefix;
        void 0 !== d &&
            ((R = null),
            d
                ? typeof d !== 'function'
                    ? (w = 1)
                    : ((w = 2), (R = d))
                : (w = 0));
        return U;
    }

    function B(d, c) {
        let e = d;
        e.charCodeAt(0) < 33 && (e = e.trim());
        V = e;
        e = [V];

        if (A > 0) {
            var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
            void 0 !== h && typeof h === 'string' && (c = h);
        }

        let a = M(O, e, c, 0, 0);
        A > 0 &&
            ((h = H(-2, a, e, e, D, z, a.length, 0, 0, 0)),
            void 0 !== h && (a = h));
        V = '';
        E = 0;
        z = D = 1;
        return a;
    }

    var ca = /^\0+/g;
    var N = /[\0\r\f]/g;
    var aa = /: */g;
    var ka = /zoo|gra/;
    var ma = /([,: ])(transform)/g;
    var ia = /,\r+?/g;
    var F = /([\t\r\n ])*\f?&/g;
    var fa = /@(k\w+)\s*(\S*)\s*/;
    var Q = /::(place)/g;
    var ha = /:(read-only)/g;
    var G = /[svh]\w+-[tblr]{2}/;
    var da = /\(\s*(.*)\s*\)/g;
    var oa = /([\s\S]*?);/g;
    var ba = /-self|flex-/g;
    var na = /[^]*?(:[rp][el]a[\w-]+)[^]*/;
    var la = /stretch|:\s*\w+\-(?:conte|avail)/;
    var ja = /([^-])(image-set\()/;
    var z = 1;
    var D = 1;
    var E = 0;
    var w = 1;
    var O = [];
    var S = [];
    var A = 0;
    var R = null;
    var Y = 0;
    var V = '';
    B.use = T;
    B.set = U;
    void 0 !== W && U(W);
    return B;
}

const unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
};

function memoize(fn) {
    const cache = Object.create(null);
    return function (arg) {
        if (cache[arg] === undefined) cache[arg] = fn(arg);
        return cache[arg];
    };
}

const reactPropsRegex =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

const isPropValid = /* #__PURE__ */ memoize(
    (prop) => {
        return (
            reactPropsRegex.test(prop) ||
            (prop.charCodeAt(0) === 111 &&
                /* o */
                prop.charCodeAt(1) === 110 &&
                /* n */
                prop.charCodeAt(2) < 91)
        );
    },
    /* Z+1 */
);

const reactIs = reactIsExports;

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
const REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true,
};
const KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true,
};
const FORWARD_REF_STATICS = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
};
const MEMO_STATICS = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true,
};
const TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
    // React v16.11 and below
    if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
    } // React v16.12 and above

    return TYPE_STATICS[component.$$typeof] || REACT_STATICS;
}

const { defineProperty } = Object;
const { getOwnPropertyNames } = Object;
const { getOwnPropertySymbols } = Object;
const { getOwnPropertyDescriptor } = Object;
const { getPrototypeOf } = Object;
const objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components
        if (objectPrototype) {
            const inheritedComponent = getPrototypeOf(sourceComponent);

            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(
                    targetComponent,
                    inheritedComponent,
                    blacklist,
                );
            }
        }

        let keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        const targetStatics = getStatics(targetComponent);
        const sourceStatics = getStatics(sourceComponent);

        for (let i = 0; i < keys.length; ++i) {
            const key = keys[i];

            if (
                !KNOWN_STATICS[key] &&
                !(blacklist && blacklist[key]) &&
                !(sourceStatics && sourceStatics[key]) &&
                !(targetStatics && targetStatics[key])
            ) {
                const descriptor = getOwnPropertyDescriptor(
                    sourceComponent,
                    key,
                );

                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }
    }

    return targetComponent;
}

const hoistNonReactStatics_cjs = hoistNonReactStatics;

function v() {
    return (v =
        Object.assign ||
        function (e) {
            for (let t = 1; t < arguments.length; t++) {
                const n = arguments[t];
                for (const r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
const y = function (e, t) {
        for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
            n.push(t[r], e[r + 1]);
        return n;
    };
var g = function (t) {
    return (
        null !== t &&
        typeof t == 'object' &&
        '[object Object]' ===
            (t.toString ? t.toString() : Object.prototype.toString.call(t)) &&
        !reactIsExports.typeOf(t)
    );
};
var S = Object.freeze([]);
var w = Object.freeze({});
function E(e) {
    return typeof e === 'function';
}
function b(e) {
    return (
        (process.env.NODE_ENV !== 'production' && typeof e === 'string' && e) ||
        e.displayName ||
        e.name ||
        'Component'
    );
}
function _(e) {
    return e && typeof e.styledComponentId === 'string';
}
const N =
        (typeof process != 'undefined' &&
            void 0 !== process.env &&
            (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR)) ||
        'data-styled';
var C = typeof window != 'undefined' && 'HTMLElement' in window;
var I = Boolean(
    typeof SC_DISABLE_SPEEDY == 'boolean'
        ? SC_DISABLE_SPEEDY
        : typeof process != 'undefined' &&
              void 0 !== process.env &&
              (void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY &&
              '' !== process.env.REACT_APP_SC_DISABLE_SPEEDY
                  ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== 'false' &&
                    process.env.REACT_APP_SC_DISABLE_SPEEDY
                  : void 0 !== process.env.SC_DISABLE_SPEEDY &&
                    '' !== process.env.SC_DISABLE_SPEEDY
                  ? process.env.SC_DISABLE_SPEEDY !== 'false' &&
                    process.env.SC_DISABLE_SPEEDY
                  : process.env.NODE_ENV !== 'production'),
);
var O =
    process.env.NODE_ENV !== 'production'
        ? {
              1: 'Cannot create styled-component for component: %s.\n\n',
              2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
              3: 'Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n',
              4: 'The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n',
              5: 'The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n',
              6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
              7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',
              8: 'ThemeProvider: Please make your "theme" prop an object.\n\n',
              9: 'Missing document `<head>`\n\n',
              10: 'Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n',
              11: '_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n',
              12: 'It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n',
              13: '%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n',
              14: 'ThemeProvider: "theme" prop is required.\n\n',
              15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
              16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
              17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n",
          }
        : {};
function R() {
    for (
        var e = arguments.length <= 0 ? void 0 : arguments[0],
            t = [],
            n = 1,
            r = arguments.length;
        n < r;
        n += 1
    )
        t.push(n < 0 || arguments.length <= n ? void 0 : arguments[n]);
    return (
        t.forEach((t) => {
            e = e.replace(/%[a-z]/, t);
        }),
        e
    );
}
function D(e) {
    for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
    )
        n[r - 1] = arguments[r];
    throw process.env.NODE_ENV === 'production'
        ? new Error(
              `An error occurred. See https://git.io/JUIaE#${e} for more information.${
                  n.length > 0 ? ` Args: ${  n.join(', ')}` : ''
              }`,
          )
        : new Error(R.apply(void 0, [O[e]].concat(n)).trim());
}
const j = (function () {
        function e(e) {
            (this.groupSizes = new Uint32Array(512)),
                (this.length = 512),
                (this.tag = e);
        }
        let t = e.prototype;
        return (
            (t.indexOfGroup = function (e) {
                for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
                return t;
            }),
            (t.insertRules = function (e, t) {
                if (e >= this.groupSizes.length) {
                    for (var n = this.groupSizes, r = n.length, o = r; e >= o; )
                        (o <<= 1) < 0 && D(16, `${  e}`);
                    (this.groupSizes = new Uint32Array(o)),
                        this.groupSizes.set(n),
                        (this.length = o);
                    for (let s = r; s < o; s++) this.groupSizes[s] = 0;
                }
                for (
                    let i = this.indexOfGroup(e + 1), a = 0, c = t.length;
                    a < c;
                    a++
                )
                    this.tag.insertRule(i, t[a]) && (this.groupSizes[e]++, i++);
            }),
            (t.clearGroup = function (e) {
                if (e < this.length) {
                    let t = this.groupSizes[e];
                        var n = this.indexOfGroup(e);
                        var r = n + t;
                    this.groupSizes[e] = 0;
                    for (let o = n; o < r; o++) this.tag.deleteRule(n);
                }
            }),
            (t.getGroup = function (e) {
                let t = '';
                if (e >= this.length || this.groupSizes[e] === 0) return t;
                for (
                    let n = this.groupSizes[e],
                        r = this.indexOfGroup(e),
                        o = r + n,
                        s = r;
                    s < o;
                    s++
                )
                    t += `${this.tag.getRule(s)  }/*!sc*/\n`;
                return t;
            }),
            e
        );
    })();
var T = new Map();
var x = new Map();
var k = 1;
var V = function (e) {
    if (T.has(e)) return T.get(e);
    for (; x.has(k); ) k++;
    var t = k++;
    return (
        'production' !== process.env.NODE_ENV &&
            ((0 | t) < 0 || t > 1 << 30) &&
            D(16, `${  t}`),
        T.set(e, t),
        x.set(t, e),
        t
    );
};
var z = function (e) {
    return x.get(e);
};
var B = function (e, t) {
    t >= k && (k = t + 1), T.set(e, t), x.set(t, e);
};
var M = `style[${  N  }][data-styled-version="5.3.9"]`;
var G = new RegExp(`^${  N  }\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`);
var L = function (e, t, n) {
    for (var r, o = n.split(','), s = 0, i = o.length; s < i; s++)
        (r = o[s]) && e.registerName(t, r);
};
var F = function (e, t) {
    for (
        let n = (t.textContent || '').split('/*!sc*/\n'),
            r = [],
            o = 0,
            s = n.length;
        o < s;
        o++
    ) {
        var i = n[o].trim();
        if (i) {
            var a = i.match(G);
            if (a) {
                var c = 0 | parseInt(a[1], 10);
                        var u = a[2];
                c !== 0 &&
                    (B(u, c), L(e, u, a[3]), e.getTag().insertRules(c, r)),
                    (r.length = 0);
            } else r.push(i);
        }
    }
};
var Y = function () {
    return 'undefined' != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
};
var q = function (e) {
    let t = document.head;
            var n = e || t;
            var r = document.createElement('style');
            var o = (function (e) {
                for (var t = e.childNodes, n = t.length; n >= 0; n--) {
                    var r = t[n];
                    if (r && 1 === r.nodeType && r.hasAttribute(N)) return r;
                }
            })(n);
            var s = void 0 !== o ? o.nextSibling : null;
    r.setAttribute(N, 'active'), r.setAttribute('data-styled-version', '5.3.9');
    var i = Y();
    return i && r.setAttribute('nonce', i), n.insertBefore(r, s), r;
};
var H = (function () {
    function e(e) {
        var t = (this.element = q(e));
        t.appendChild(document.createTextNode('')),
            (this.sheet = (function (e) {
                if (e.sheet) return e.sheet;
                for (
                    let t = document.styleSheets, n = 0, r = t.length;
                    n < r;
                    n++
                ) {
                    let o = t[n];
                    if (o.ownerNode === e) return o;
                }
                D(17);
            })(t)),
            (this.length = 0);
    }
    var t = e.prototype;
    return (
        (t.insertRule = function (e, t) {
            try {
                return this.sheet.insertRule(t, e), this.length++, !0;
            } catch (e) {
                return !1;
            }
        }),
        (t.deleteRule = function (e) {
            this.sheet.deleteRule(e), this.length--;
        }),
        (t.getRule = function (e) {
            var t = this.sheet.cssRules[e];
            return void 0 !== t && typeof t.cssText == 'string'
                ? t.cssText
                : '';
        }),
        e
    );
})();
var $ = (function () {
    function e(e) {
        let t = (this.element = q(e));
        (this.nodes = t.childNodes), (this.length = 0);
    }
    let t = e.prototype;
    return (
        (t.insertRule = function (e, t) {
            if (e <= this.length && e >= 0) {
                let n = document.createTextNode(t);
                        var r = this.nodes[e];
                return (
                    this.element.insertBefore(n, r || null), this.length++, !0
                );
            }
            return !1;
        }),
        (t.deleteRule = function (e) {
            this.element.removeChild(this.nodes[e]), this.length--;
        }),
        (t.getRule = function (e) {
            return e < this.length ? this.nodes[e].textContent : '';
        }),
        e
    );
})();
var W = (function () {
    function e(e) {
        (this.rules = []), (this.length = 0);
    }
    let t = e.prototype;
    return (
        (t.insertRule = function (e, t) {
            return (
                e <= this.length &&
                (this.rules.splice(e, 0, t), this.length++, !0)
            );
        }),
        (t.deleteRule = function (e) {
            this.rules.splice(e, 1), this.length--;
        }),
        (t.getRule = function (e) {
            return e < this.length ? this.rules[e] : '';
        }),
        e
    );
})();
var U = C;
var J = { isServer: !C, useCSSOMInjection: !I };
var X = (function () {
    function e(e, t, n) {
        void 0 === e && (e = w),
            void 0 === t && (t = {}),
            (this.options = { ...J,  ...e}),
            (this.gs = t),
            (this.names = new Map(n)),
            (this.server = !!e.isServer),
            !this.server &&
                C &&
                U &&
                ((U = !1),
                (function (e) {
                    for (
                        var t = document.querySelectorAll(M),
                            n = 0,
                            r = t.length;
                        n < r;
                        n++
                    ) {
                        let o = t[n];
                        o &&
                            'active' !== o.getAttribute(N) &&
                            (F(e, o),
                            o.parentNode && o.parentNode.removeChild(o));
                    }
                })(this));
    }
    e.registerId = function (e) {
        return V(e);
    };
    let t = e.prototype;
    return (
        (t.reconstructWithOptions = function (t, n) {
            return (
                void 0 === n && (n = !0),
                new e(
                    ({ ...this.options,  ...t}),
                    this.gs,
                    (n && this.names) || void 0,
                )
            );
        }),
        (t.allocateGSInstance = function (e) {
            return (this.gs[e] = (this.gs[e] || 0) + 1);
        }),
        (t.getTag = function () {
            return (
                this.tag ||
                (this.tag =
                    ((n = (t = this.options).isServer),
                    (r = t.useCSSOMInjection),
                    (o = t.target),
                    (e = n ? new W(o) : r ? new H(o) : new $(o)),
                    new j(e)))
            );
            var e; var t; var n; var r; var o;
        }),
        (t.hasNameForId = function (e, t) {
            return this.names.has(e) && this.names.get(e).has(t);
        }),
        (t.registerName = function (e, t) {
            if ((V(e), this.names.has(e))) this.names.get(e).add(t);
            else {
                var n = new Set();
                n.add(t), this.names.set(e, n);
            }
        }),
        (t.insertRules = function (e, t, n) {
            this.registerName(e, t), this.getTag().insertRules(V(e), n);
        }),
        (t.clearNames = function (e) {
            this.names.has(e) && this.names.get(e).clear();
        }),
        (t.clearRules = function (e) {
            this.getTag().clearGroup(V(e)), this.clearNames(e);
        }),
        (t.clearTag = function () {
            this.tag = void 0;
        }),
        (t.toString = function () {
            return (function (e) {
                for (
                    var t = e.getTag(), n = t.length, r = '', o = 0;
                    o < n;
                    o++
                ) {
                    let s = z(o);
                    if (void 0 !== s) {
                        let i = e.names.get(s);
                                var a = t.getGroup(o);
                        if (i && a && i.size) {
                            var c = `${N  }.g${  o  }[id="${  s  }"]`,
                                u = '';
                            void 0 !== i &&
                                i.forEach((e) => {
                                    e.length > 0 && (u += `${e  },`);
                                }),
                                (r +=
                                    '' +
                                    a +
                                    c +
                                    '{content:"' +
                                    u +
                                    '"}/*!sc*/\n');
                        }
                    }
                }
                return r;
            })(this);
        }),
        e
    );
})();
var Z = /(a)(d)/gi;
var K = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Q(e) {
    let t;
    let n = '';
    for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = K(t % 52) + n;
    return (K(t % 52) + n).replace(Z, '$1-$2');
}
const ee = function (e, t) {
        for (let n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
        return e;
    };
var te = function (e) {
    return ee(5381, e);
};
function ne(e) {
    for (let t = 0; t < e.length; t += 1) {
        const n = e[t];
        if (E(n) && !_(n)) return !1;
    }
    return !0;
}
const re = te('5.3.9');
var oe = (function () {
    function e(e, t, n) {
        (this.rules = e),
            (this.staticRulesId = ''),
            (this.isStatic =
                'production' === process.env.NODE_ENV &&
                (void 0 === n || n.isStatic) &&
                ne(e)),
            (this.componentId = t),
            (this.baseHash = ee(re, t)),
            (this.baseStyle = n),
            X.registerId(t);
    }
    return (
        (e.prototype.generateAndInjectStyles = function (e, t, n) {
            var r = this.componentId;
                    var o = [];
            if (
                (this.baseStyle &&
                    o.push(this.baseStyle.generateAndInjectStyles(e, t, n)),
                this.isStatic && !n.hash)
            )
                if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId))
                    o.push(this.staticRulesId);
                else {
                    var s = _e(this.rules, e, t, n).join('');
                            var i = Q(ee(this.baseHash, s) >>> 0);
                    if (!t.hasNameForId(r, i)) {
                        var a = n(s, `.${  i}`, void 0, r);
                        t.insertRules(r, i, a);
                    }
                    o.push(i), (this.staticRulesId = i);
                }
            else {
                for (
                    var c = this.rules.length,
                        u = ee(this.baseHash, n.hash),
                        l = '',
                        d = 0;
                    d < c;
                    d++
                ) {
                    let h = this.rules[d];
                    if (typeof h == 'string')
                        (l += h),
                            process.env.NODE_ENV !== 'production' &&
                                (u = ee(u, h + d));
                    else if (h) {
                        let p = _e(h, e, t, n);
                                var f = Array.isArray(p) ? p.join('') : p;
                        (u = ee(u, f + d)), (l += f);
                    }
                }
                if (l) {
                    let m = Q(u >>> 0);
                    if (!t.hasNameForId(r, m)) {
                        let v = n(l, `.${  m}`, void 0, r);
                        t.insertRules(r, m, v);
                    }
                    o.push(m);
                }
            }
            return o.join(' ');
        }),
        e
    );
})();
var se = /^\s*\/\/.*$/gm;
var ie = [':', '[', '.', '#'];
function ae(e) {
    let t;
    var n;
    let r;
    var o;
    let s = void 0 === e ? w : e;
    var i = s.options;
    let a = void 0 === i ? w : i;
    var c = s.plugins;
    var u = void 0 === c ? S : c;
    var l = new stylis_min(a);
    let d = [];
    var p = (function (e) {
        function t(t) {
            if (t)
                try {
                    e(`${t  }}`);
                } catch (e) {}
        }
        return function (n, r, o, s, i, a, c, u, l, d) {
            switch (n) {
                case 1:
                    if (l === 0 && r.charCodeAt(0) === 64)
                        return e(`${r  };`), '';
                    break;
                case 2:
                    if (u === 0) return `${r  }/*|*/`;
                    break;
                case 3:
                    switch (u) {
                        case 102:
                        case 112:
                            return e(o[0] + r), '';
                        default:
                            return r + (d === 0 ? '/*|*/' : '');
                    }
                case -2:
                    r.split('/*|*/}').forEach(t);
            }
        };
    })((e) => {
        d.push(e);
    });
    var f = function (e, r, s) {
        return (r === 0 && ie.indexOf(s[n.length]) !== -1) || s.match(o)
            ? e
            : `.${t}`;
    };
    function m(e, s, i, a) {
        void 0 === a && (a = '&');
        const c = e.replace(se, '');
        var u = s && i ? `${i} ${s} { ${c} }` : c;
        return (
            (t = a),
            (n = s),
            (r = new RegExp(`\\${n}\\b`, 'g')),
            (o = new RegExp(`(\\${n}\\b){2,}`)),
            l(i || !s ? '' : s, u)
        );
    }
    return (
        l.use(
            [].concat(u, [
                function (e, t, o) {
                    e === 2 &&
                        o.length &&
                        o[0].lastIndexOf(n) > 0 &&
                        (o[0] = o[0].replace(r, f));
                },
                p,
                function (e) {
                    if (e === -2) {
                        const t = d;
                        return (d = []), t;
                    }
                },
            ]),
        ),
        (m.hash = u.length
            ? u
                  .reduce((e, t) => (t.name || D(15), ee(e, t.name)), 5381)
                  .toString()
            : ''),
        m
    );
}
const ce = React.createContext();
ce.Consumer;
const le = React.createContext();
var de = (le.Consumer, new X());
var he = ae();
function pe() {
    return useContext(ce) || de;
}
function fe() {
    return useContext(le) || he;
}
const ve = (function () {
        function e(e, t) {
            let n = this;
            (this.inject = function (e, t) {
                void 0 === t && (t = he);
                let r = n.name + t.hash;
                e.hasNameForId(n.id, r) ||
                    e.insertRules(n.id, r, t(n.rules, r, '@keyframes'));
            }),
                (this.toString = function () {
                    return D(12, String(n.name));
                }),
                (this.name = e),
                (this.id = `sc-keyframes-${  e}`),
                (this.rules = t);
        }
        return (
            (e.prototype.getName = function (e) {
                return void 0 === e && (e = he), this.name + e.hash;
            }),
            e
        );
    })();
var ye = /([A-Z])/;
var ge = /([A-Z])/g;
var Se = /^ms-/;
var we = function (e) {
    return `-${e.toLowerCase()}`;
};
function Ee(e) {
    return ye.test(e) ? e.replace(ge, we).replace(Se, '-ms-') : e;
}
const be = function (e) {
    return e == null || !1 === e || e === '';
};
function _e(e, n, r, o) {
    if (Array.isArray(e)) {
        for (var s, i = [], a = 0, c = e.length; a < c; a += 1)
            (s = _e(e[a], n, r, o)) !== '' &&
                (Array.isArray(s) ? i.push.apply(i, s) : i.push(s));
        return i;
    }
    if (be(e)) return '';
    if (_(e)) return `.${e.styledComponentId}`;
    if (E(e)) {
        if (
            typeof (l = e) !== 'function' ||
            (l.prototype && l.prototype.isReactComponent) ||
            !n
        )
            return e;
        const u = e(n);
        return (
            process.env.NODE_ENV !== 'production' &&
                reactIsExports.isElement(u) &&
                console.warn(
                    `${b(
                        e,
                    )} is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.`,
                ),
            _e(u, n, r, o)
        );
    }
    let l;
    return e instanceof ve
        ? r
            ? (e.inject(r, o), e.getName(o))
            : e
        : g(e)
        ? (function e(t, n) {
              let r;
              var o;
              let s = [];
              for (const i in t)
                  t.hasOwnProperty(i) &&
                      !be(t[i]) &&
                      ((Array.isArray(t[i]) && t[i].isCss) || E(t[i])
                          ? s.push(`${Ee(i)}:`, t[i], ';')
                          : g(t[i])
                          ? s.push.apply(s, e(t[i], i))
                          : s.push(
                                `${Ee(i)}: ${
                                    ((r = i),
                                    (o = t[i]) == null ||
                                    typeof o == 'boolean' ||
                                    o === ''
                                        ? ''
                                        : typeof o != 'number' ||
                                          o === 0 ||
                                          r in unitlessKeys
                                        ? String(o).trim()
                                        : `${o  }px` 
                                };`,
                            ));
              return n ? [`${n} {`].concat(s, ['}']) : s;
          })(e)
        : e.toString();
}
const Ne = function (e) {
    return Array.isArray(e) && (e.isCss = !0), e;
};
function Ae(e) {
    for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
    )
        n[r - 1] = arguments[r];
    return E(e) || g(e)
        ? Ne(_e(y(S, [e].concat(n))))
        : n.length === 0 && e.length === 1 && typeof e[0] === 'string'
        ? e
        : Ne(_e(y(e, n)));
}
const Ce = /invalid hook call/i;
var Ie = new Set();
var Pe = function (e, t) {
    if (process.env.NODE_ENV !== 'production') {
        var n =
                `The component ${ 
                    e 
                    }${t ? ' with the id of "' + t + '"' : '' 
                    } has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.`,
            r = console.error;
        try {
            var o = !0;
            (console.error = function (e) {
                if (Ce.test(e)) (o = !1), Ie.delete(n);
                else {
                    for (
                        var t = arguments.length,
                            s = new Array(t > 1 ? t - 1 : 0),
                            i = 1;
                        i < t;
                        i++
                    )
                        s[i - 1] = arguments[i];
                    r.apply(void 0, [e].concat(s));
                }
            }),
                useRef(),
                o && !Ie.has(n) && (console.warn(n), Ie.add(n));
        } catch (e) {
            Ce.test(e.message) && Ie.delete(n);
        } finally {
            console.error = r;
        }
    }
};
var Oe = function (e, t, n) {
    return (
        void 0 === n && (n = w),
        (e.theme !== n.theme && e.theme) || t || n.theme
    );
};
var Re = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var De = /(^-|-$)/g;
function je(e) {
    return e.replace(Re, '-').replace(De, '');
}
const Te = function (e) {
    return Q(te(e) >>> 0);
};
function xe(e) {
    return (
        typeof e === 'string' &&
        (process.env.NODE_ENV === 'production' ||
            e.charAt(0) === e.charAt(0).toLowerCase())
    );
}
const ke = function (e) {
        return (
            typeof e == 'function' ||
            (typeof e == 'object' && e !== null && !Array.isArray(e))
        );
    };
var Ve = function (e) {
    return e !== '__proto__' && e !== 'constructor' && e !== 'prototype';
};
function ze(e, t, n) {
    const r = e[n];
    ke(t) && ke(r) ? Be(r, t) : (e[n] = t);
}
function Be(e) {
    for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
    )
        n[r - 1] = arguments[r];
    for (let o = 0, s = n; o < s.length; o++) {
        const i = s[o];
        if (ke(i)) for (const a in i) Ve(a) && ze(e, i[a], a);
    }
    return e;
}
const Me = React.createContext();
Me.Consumer;
function Le(e) {
    const t = useContext(Me);
    var n = useMemo(() => (function (e, t) {
                    if (!e) return D(14);
                    if (E(e)) {
                        let n = e(t);
                        return process.env.NODE_ENV === 'production' ||
                            (n !== null &&
                                !Array.isArray(n) &&
                                typeof n == 'object')
                            ? n
                            : D(7);
                    }
                    return Array.isArray(e) || typeof e != 'object'
                        ? D(8)
                        : t
                        ? ({ ...t,  ...e})
                        : e;
                })(e.theme, t),
            [e.theme, t],
        );
    return e.children
        ? React.createElement(Me.Provider, { value: n }, e.children)
        : null;
}
const Fe = {};
function Ye(e, t, n) {
    const o = _(e);
    let i = !xe(e);
    var a = t.attrs;
    let c = void 0 === a ? S : a;
    var d = t.componentId;
    let h =
        void 0 === d
            ? (function (e, t) {
                  let n = typeof e != 'string' ? 'sc' : je(e);
                  Fe[n] = (Fe[n] || 0) + 1;
                  var r = `${n  }-${  Te('5.3.9' + n + Fe[n])}`;
                  return t ? `${t  }-${  r}` : r;
              })(t.displayName, t.parentComponentId)
            : d;
    let p = t.displayName;
    var y =
        void 0 === p
            ? (function (e) {
                  return xe(e) ? `styled.${  e}` : `Styled(${  b(e)  })`;
              })(e)
            : p;
    var g =
        t.displayName && t.componentId
            ? `${je(t.displayName)  }-${  t.componentId}`
            : t.componentId || h;
    let N =
        o && e.attrs ? Array.prototype.concat(e.attrs, c).filter(Boolean) : c;
    let A = t.shouldForwardProp;
    o &&
        e.shouldForwardProp &&
        (A = t.shouldForwardProp
            ? function (n, r, o) {
                  return (
                      e.shouldForwardProp(n, r, o) &&
                      t.shouldForwardProp(n, r, o)
                  );
              }
            : e.shouldForwardProp);
    let C;
    var I = new oe(n, g, o ? e.componentStyle : void 0);
    var P = I.isStatic && c.length === 0;
    let O = function (e, t) {
        return (function (e, t, n, r) {
            let o = e.attrs;
            var i = e.componentStyle;
            var a = e.defaultProps;
            let c = e.foldedComponentIds;
            var d = e.shouldForwardProp;
            var h = e.styledComponentId;
            var p = e.target;
            process.env.NODE_ENV !== 'production' && useDebugValue(h);
            const m = (function (e, t, n) {
                        void 0 === e && (e = w);
                        let r = { ...t, theme: e},
                            o = {};
                        return (
                            n.forEach((e) => {
                                let t;
                                    var n;
                                    var s;
                                    var i = e;
                                for (t in (E(i) && (i = i(r)), i))
                                    r[t] = o[t] =
                                        t === 'className'
                                            ? ((n = o[t]),
                                              (s = i[t]),
                                              n && s ? `${n  } ${  s}` : n || s)
                                            : i[t];
                            }),
                            [r, o]
                        );
                    })(Oe(t, useContext(Me), a) || w, t, o);
            var y = m[0];
            var g = m[1];
            let S = (function (e, t, n, r) {
                var o = pe();
                            var s = fe();
                            var i = t
                        ? e.generateAndInjectStyles(w, o, s)
                        : e.generateAndInjectStyles(n, o, s);
                return (
                    'production' !== process.env.NODE_ENV && useDebugValue(i),
                    'production' !== process.env.NODE_ENV && !t && r && r(i),
                    i
                );
            })(
                i,
                r,
                y,
                'production' !== process.env.NODE_ENV
                    ? e.warnTooManyClasses
                    : void 0,
            );
            var b = n;
            let _ = g.$as || t.$as || g.as || t.as || p;
            var N = xe(_);
            let A = g !== t ? ({ ...t,  ...g}) : t;
            var C = {};
            for (const I in A)
                I[0] !== '$' &&
                    I !== 'as' &&
                    (I === 'forwardedAs'
                        ? (C.as = A[I])
                        : (d ? d(I, isPropValid, _) : !N || isPropValid(I)) &&
                          (C[I] = A[I]));
            return (
                t.style &&
                    g.style !== t.style &&
                    (C.style = { ...t.style, ...g.style }),
                (C.className = Array.prototype
                    .concat(c, h, S !== h ? S : null, t.className, g.className)
                    .filter(Boolean)
                    .join(' ')),
                (C.ref = b),
                createElement(_, C)
            );
        })(C, e, t, P);
    };
    return (
        (O.displayName = y),
        ((C = React.forwardRef(O)).attrs = N),
        (C.componentStyle = I),
        (C.displayName = y),
        (C.shouldForwardProp = A),
        (C.foldedComponentIds = o
            ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
            : S),
        (C.styledComponentId = g),
        (C.target = o ? e.target : e),
        (C.withComponent = function (e) {
            const r = t.componentId;
            var o = (function (e, t) {
                if (e == null) return {};
                var n;
                        var r;
                        var o = {};
                        var s = Object.keys(e);
                for (r = 0; r < s.length; r++)
                    (n = s[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o;
            })(t, ['componentId']);
            var s = r && `${r}-${xe(e) ? e : je(b(e))}`;
            return Ye(e, { ...o, attrs: N, componentId: s }, n);
        }),
        Object.defineProperty(C, 'defaultProps', {
            get() {
                return this._foldedDefaultProps;
            },
            set(t) {
                this._foldedDefaultProps = o ? Be({}, e.defaultProps, t) : t;
            },
        }),
        process.env.NODE_ENV !== 'production' &&
            (Pe(y, g),
            (C.warnTooManyClasses = (function (e, t) {
                let n = {};
                var r = !1;
                return function (o) {
                    if (!r && ((n[o] = !0), Object.keys(n).length >= 200)) {
                        const s = t ? ` with the id of "${  t  }"` : '';
                        console.warn(
                            `Over 200 classes were generated for component ${e}${s}.\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))\`width: 100%;\`\n\n  <Component />`,
                        ),
                            (r = !0),
                            (n = {});
                    }
                };
            })(y, g))),
        Object.defineProperty(C, 'toString', {
            value() {
                return `.${  C.styledComponentId}`;
            },
        }),
        i &&
            hoistNonReactStatics_cjs(C, e, {
                attrs: !0,
                componentStyle: !0,
                displayName: !0,
                foldedComponentIds: !0,
                shouldForwardProp: !0,
                styledComponentId: !0,
                target: !0,
                withComponent: !0,
            }),
        C
    );
}
const qe = function (e) {
    return (function e(t, r, o) {
        if ((void 0 === o && (o = w), !reactIsExports.isValidElementType(r)))
            return D(1, String(r));
        let s = function () {
            return t(r, o, Ae.apply(void 0, arguments));
        };
        return (
            (s.withConfig = function (n) {
                return e(t, r, { ...o,  ...n});
            }),
            (s.attrs = function (n) {
                return e(
                    t,
                    r,
                    { ...o, attrs: Array.prototype
                            .concat(o.attrs, n)
                            .filter(Boolean),},
                );
            }),
            s
        );
    })(Ye, e);
};
[
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'marker',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'textPath',
    'tspan',
].forEach((e) => {
    qe[e] = qe(e);
});
process.env.NODE_ENV !== 'production' &&
    typeof navigator !== 'undefined' &&
    navigator.product === 'ReactNative' &&
    console.warn(
        "It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native",
    ),
    process.env.NODE_ENV !== 'production' &&
        process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        ((window['__styled-components-init__'] =
            window['__styled-components-init__'] || 0),
        window['__styled-components-init__'] === 1 &&
            console.warn(
                "It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info.",
            ),
        (window['__styled-components-init__'] += 1));
const styled = qe;

const DefaultContext = {
    color: undefined,
    size: undefined,
    className: undefined,
    style: undefined,
    attr: undefined,
};
const IconContext = React.createContext && React.createContext(DefaultContext);

var __assign =
    (undefined && undefined.__assign) ||
    function () {
        __assign =
            Object.assign ||
            function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (const p in s)
                        if (Object.prototype.hasOwnProperty.call(s, p))
                            t[p] = s[p];
                }
                return t;
            };
        return __assign.apply(this, arguments);
    };
const __rest =
    (undefined && undefined.__rest) ||
    function (s, e) {
        let t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (
                var i = 0, p = Object.getOwnPropertySymbols(s);
                i < p.length;
                i++
            ) {
                if (
                    e.indexOf(p[i]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(s, p[i])
                )
                    t[p[i]] = s[p[i]];
            }
        return t;
    };
function Tree2Element(tree) {
    return (
        tree &&
        tree.map((node, i) =>
            React.createElement(
                node.tag,
                {
                    key: i,
                    ...node.attr,
                },
                Tree2Element(node.child),
            ),
        )
    );
}
function GenIcon(data) {
    // eslint-disable-next-line react/display-name
    return function (props) {
        return React.createElement(
            IconBase,
            {
                attr: { ...data.attr},
                ...props,
            },
            Tree2Element(data.child),
        );
    };
}
function IconBase(props) {
    const elem = function (conf) {
        let { attr } = props;
            var size = props.size;
            var title = props.title;
            var svgProps = __rest(props, ['attr', 'size', 'title']);
        let computedSize = size || conf.size || '1em';
        let className;
        if (conf.className) className = conf.className;
        if (props.className)
            className = (className ? `${className  } ` : '') + props.className;
        return React.createElement(
            'svg',
            {
                stroke: 'currentColor',
                    fill: 'currentColor',
                    strokeWidth: '0',
                ...conf.attr,
                ...attr,
                ...svgProps,
                className,
                    style: __assign(
                        __assign(
                            {
                                color: props.color || conf.color,
                            },
                            conf.style,
                        ),
                        props.style,
                    ),
                    height: computedSize,
                    width: computedSize,
                    xmlns: 'http://www.w3.org/2000/svg',
            },
            title && React.createElement('title', null, title),
            props.children,
        );
    };
    return IconContext !== undefined
        ? React.createElement(IconContext.Consumer, null, (conf) => elem(conf))
        : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function RxCross2(props) {
    return GenIcon({
        tag: 'svg',
        attr: { viewBox: '0 0 15 15', fill: 'none' },
        child: [
            {
                tag: 'path',
                attr: {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z',
                    fill: 'currentColor',
                },
            },
        ],
    })(props);
}

let propTypesExports = {};
const propTypes = {
    get exports() {
        return propTypesExports;
    },
    set exports(v) {
        propTypesExports = v;
    },
};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

let objectAssign;
let hasRequiredObjectAssign;

function requireObjectAssign() {
    if (hasRequiredObjectAssign) return objectAssign;
    hasRequiredObjectAssign = 1;
    /* eslint-disable no-unused-vars */
    const { getOwnPropertySymbols } = Object;
    const { hasOwnProperty } = Object.prototype;
    const propIsEnumerable = Object.prototype.propertyIsEnumerable;

    function toObject(val) {
        if (val === null || val === undefined) {
            throw new TypeError(
                'Object.assign cannot be called with null or undefined',
            );
        }

        return Object(val);
    }

    function shouldUseNative() {
        try {
            if (!Object.assign) {
                return false;
            }

            // Detect buggy property enumeration order in older V8 versions.

            // https://bugs.chromium.org/p/v8/issues/detail?id=4118
            const test1 = new String('abc'); // eslint-disable-line no-new-wrappers
            test1[5] = 'de';
            if (Object.getOwnPropertyNames(test1)[0] === '5') {
                return false;
            }

            // https://bugs.chromium.org/p/v8/issues/detail?id=3056
            const test2 = {};
            for (let i = 0; i < 10; i++) {
                test2[`_${String.fromCharCode(i)}`] = i;
            }
            const order2 = Object.getOwnPropertyNames(test2).map((n) => test2[n]);
            if (order2.join('') !== '0123456789') {
                return false;
            }

            // https://bugs.chromium.org/p/v8/issues/detail?id=3056
            const test3 = {};
            'abcdefghijklmnopqrst'.split('').forEach((letter) => {
                test3[letter] = letter;
            });
            if (Object.keys({ ...test3 }).join('') !== 'abcdefghijklmnopqrst') {
                return false;
            }

            return true;
        } catch (err) {
            // We don't expect any of the above to throw, but better to be safe.
            return false;
        }
    }

    objectAssign = shouldUseNative()
        ? Object.assign
        : function (target, source) {
              let from;
              const to = toObject(target);
              let symbols;

              for (let s = 1; s < arguments.length; s++) {
                  from = Object(arguments[s]);

                  for (const key in from) {
                      if (hasOwnProperty.call(from, key)) {
                          to[key] = from[key];
                      }
                  }

                  if (getOwnPropertySymbols) {
                      symbols = getOwnPropertySymbols(from);
                      for (let i = 0; i < symbols.length; i++) {
                          if (propIsEnumerable.call(from, symbols[i])) {
                              to[symbols[i]] = from[symbols[i]];
                          }
                      }
                  }
              }

              return to;
          };
    return objectAssign;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

let ReactPropTypesSecret_1;
let hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret() {
    if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
    hasRequiredReactPropTypesSecret = 1;

    const ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

    ReactPropTypesSecret_1 = ReactPropTypesSecret;
    return ReactPropTypesSecret_1;
}

let has;
let hasRequiredHas;

function requireHas() {
    if (hasRequiredHas) return has;
    hasRequiredHas = 1;
    has = Function.call.bind(Object.prototype.hasOwnProperty);
    return has;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

let checkPropTypes_1;
let hasRequiredCheckPropTypes;

function requireCheckPropTypes() {
    if (hasRequiredCheckPropTypes) return checkPropTypes_1;
    hasRequiredCheckPropTypes = 1;

    let printWarning = function () {};

    if (process.env.NODE_ENV !== 'production') {
        var ReactPropTypesSecret = requireReactPropTypesSecret();
        var loggedTypeFailures = {};
        var has = requireHas();

        printWarning = function (text) {
            const message = `Warning: ${text}`;
            if (typeof console !== 'undefined') {
                console.error(message);
            }
            try {
                // --- Welcome to debugging React ---
                // This error was thrown as a convenience so that you can use this stack
                // to find the callsite that caused this warning to fire.
                throw new Error(message);
            } catch (x) {
                /**/
            }
        };
    }

    /**
     * Assert that the values match with the type specs.
     * Error messages are memorized and will only be shown once.
     *
     * @param {object} typeSpecs Map of name to a ReactPropType
     * @param {object} values Runtime values that need to be type-checked
     * @param {string} location e.g. "prop", "context", "child context"
     * @param {string} componentName Name of the component for error messages.
     * @param {?Function} getStack Returns the component stack.
     * @private
     */
    function checkPropTypes(
        typeSpecs,
        values,
        location,
        componentName,
        getStack,
    ) {
        if (process.env.NODE_ENV !== 'production') {
            for (const typeSpecName in typeSpecs) {
                if (has(typeSpecs, typeSpecName)) {
                    var error;
                    // Prop type validation may throw. In case they do, we don't want to
                    // fail the render phase where it didn't fail before. So we log it.
                    // After these have been cleaned up, we'll let them throw.
                    try {
                        // This is intentionally an invariant that gets caught. It's the same
                        // behavior as without this statement except with a better message.
                        if (typeof typeSpecs[typeSpecName] !== 'function') {
                            const err = Error(
                                `${componentName || 'React class' 
                                    }: ${ 
                                    location 
                                    } type \`${ 
                                    typeSpecName 
                                    }\` is invalid; ` +
                                    `it must be a function, usually from the \`prop-types\` package, but received \`${ 
                                    typeof typeSpecs[typeSpecName] 
                                    }\`.` +
                                    `This often happens because of typos such as \`PropTypes.function\` instead of \`PropTypes.func\`.`,
                            );
                            err.name = 'Invariant Violation';
                            throw err;
                        }
                        error = typeSpecs[typeSpecName](
                            values,
                            typeSpecName,
                            componentName,
                            location,
                            null,
                            ReactPropTypesSecret,
                        );
                    } catch (ex) {
                        error = ex;
                    }
                    if (error && !(error instanceof Error)) {
                        printWarning(
                            `${
                                componentName || 'React class'
                            }: type specification of ${location} \`${typeSpecName}\` is invalid; the type checker ` +
                                `function must return \`null\` or an \`Error\` but returned a ${typeof error}. ` +
                                `You may have forgotten to pass an argument to the type checker ` +
                                `creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ` +
                                `shape all require an argument).`,
                        );
                    }
                    if (
                        error instanceof Error &&
                        !(error.message in loggedTypeFailures)
                    ) {
                        // Only monitor this failure once because there tends to be a lot of the
                        // same error.
                        loggedTypeFailures[error.message] = true;

                        const stack = getStack ? getStack() : '';

                        printWarning(
                            `Failed ${location} type: ${error.message}${
                                stack != null ? stack : ''
                            }`,
                        );
                    }
                }
            }
        }
    }

    /**
     * Resets warning cache when testing.
     *
     * @private
     */
    checkPropTypes.resetWarningCache = function () {
        if (process.env.NODE_ENV !== 'production') {
            loggedTypeFailures = {};
        }
    };

    checkPropTypes_1 = checkPropTypes;
    return checkPropTypes_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

let factoryWithTypeCheckers;
let hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers() {
    if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
    hasRequiredFactoryWithTypeCheckers = 1;

    const ReactIs = reactIsExports;
    const assign = requireObjectAssign();

    const ReactPropTypesSecret = requireReactPropTypesSecret();
    const has = requireHas();
    const checkPropTypes = requireCheckPropTypes();

    let printWarning = function () {};

    if (process.env.NODE_ENV !== 'production') {
        printWarning = function (text) {
            const message = `Warning: ${text}`;
            if (typeof console !== 'undefined') {
                console.error(message);
            }
            try {
                // --- Welcome to debugging React ---
                // This error was thrown as a convenience so that you can use this stack
                // to find the callsite that caused this warning to fire.
                throw new Error(message);
            } catch (x) {}
        };
    }

    function emptyFunctionThatReturnsNull() {
        return null;
    }

    factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
        /* global Symbol */
        const ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
        const FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

        /**
         * Returns the iterator method function contained on the iterable object.
         *
         * Be sure to invoke the function with the iterable as context:
         *
         *     var iteratorFn = getIteratorFn(myIterable);
         *     if (iteratorFn) {
         *       var iterator = iteratorFn.call(myIterable);
         *       ...
         *     }
         *
         * @param {?object} maybeIterable
         * @return {?function}
         */
        function getIteratorFn(maybeIterable) {
            const iteratorFn =
                maybeIterable &&
                ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
                    maybeIterable[FAUX_ITERATOR_SYMBOL]);
            if (typeof iteratorFn === 'function') {
                return iteratorFn;
            }
        }

        /**
         * Collection of methods that allow declaration and validation of props that are
         * supplied to React components. Example usage:
         *
         *   var Props = require('ReactPropTypes');
         *   var MyArticle = React.createClass({
         *     propTypes: {
         *       // An optional string prop named "description".
         *       description: Props.string,
         *
         *       // A required enum prop named "category".
         *       category: Props.oneOf(['News','Photos']).isRequired,
         *
         *       // A prop named "dialog" that requires an instance of Dialog.
         *       dialog: Props.instanceOf(Dialog).isRequired
         *     },
         *     render: function() { ... }
         *   });
         *
         * A more formal specification of how these methods are used:
         *
         *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
         *   decl := ReactPropTypes.{type}(.isRequired)?
         *
         * Each and every declaration produces a function with the same signature. This
         * allows the creation of custom validation functions. For example:
         *
         *  var MyLink = React.createClass({
         *    propTypes: {
         *      // An optional string or URI prop named "href".
         *      href: function(props, propName, componentName) {
         *        var propValue = props[propName];
         *        if (propValue != null && typeof propValue !== 'string' &&
         *            !(propValue instanceof URI)) {
         *          return new Error(
         *            'Expected a string or an URI for ' + propName + ' in ' +
         *            componentName
         *          );
         *        }
         *      }
         *    },
         *    render: function() {...}
         *  });
         *
         * @internal
         */

        const ANONYMOUS = '<<anonymous>>';

        // Important!
        // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
        const ReactPropTypes = {
            array: createPrimitiveTypeChecker('array'),
            bigint: createPrimitiveTypeChecker('bigint'),
            bool: createPrimitiveTypeChecker('boolean'),
            func: createPrimitiveTypeChecker('function'),
            number: createPrimitiveTypeChecker('number'),
            object: createPrimitiveTypeChecker('object'),
            string: createPrimitiveTypeChecker('string'),
            symbol: createPrimitiveTypeChecker('symbol'),

            any: createAnyTypeChecker(),
            arrayOf: createArrayOfTypeChecker,
            element: createElementTypeChecker(),
            elementType: createElementTypeTypeChecker(),
            instanceOf: createInstanceTypeChecker,
            node: createNodeChecker(),
            objectOf: createObjectOfTypeChecker,
            oneOf: createEnumTypeChecker,
            oneOfType: createUnionTypeChecker,
            shape: createShapeTypeChecker,
            exact: createStrictShapeTypeChecker,
        };

        /**
         * inlined Object.is polyfill to avoid requiring consumers ship their own
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
         */
        /* eslint-disable no-self-compare */
        function is(x, y) {
            // SameValue algorithm
            if (x === y) {
                // Steps 1-5, 7-10
                // Steps 6.b-6.e: +0 != -0
                return x !== 0 || 1 / x === 1 / y;
            }
            // Step 6.a: NaN == NaN
            return x !== x && y !== y;
        }
        /* eslint-enable no-self-compare */

        /**
         * We use an Error-like object for backward compatibility as people may call
         * PropTypes directly and inspect their output. However, we don't use real
         * Errors anymore. We don't inspect their stack anyway, and creating them
         * is prohibitively expensive if they are created too often, such as what
         * happens in oneOfType() for any type before the one that matched.
         */
        function PropTypeError(message, data) {
            this.message = message;
            this.data = data && typeof data === 'object' ? data : {};
            this.stack = '';
        }
        // Make `instanceof Error` still work for returned errors.
        PropTypeError.prototype = Error.prototype;

        function createChainableTypeChecker(validate) {
            if (process.env.NODE_ENV !== 'production') {
                var manualPropTypeCallCache = {};
                var manualPropTypeWarningCount = 0;
            }
            function checkType(
                isRequired,
                props,
                propName,
                componentName,
                location,
                propFullName,
                secret,
            ) {
                componentName = componentName || ANONYMOUS;
                propFullName = propFullName || propName;

                if (secret !== ReactPropTypesSecret) {
                    if (throwOnDirectAccess) {
                        // New behavior only for users of `prop-types` package
                        const err = new Error(
                            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                                'Use `PropTypes.checkPropTypes()` to call them. ' +
                                'Read more at http://fb.me/use-check-prop-types',
                        );
                        err.name = 'Invariant Violation';
                        throw err;
                    } else if (
                        process.env.NODE_ENV !== 'production' &&
                        typeof console !== 'undefined'
                    ) {
                        // Old behavior for people using React.PropTypes
                        const cacheKey = `${componentName  }:${  propName}`;
                        if (
                            !manualPropTypeCallCache[cacheKey] &&
                            // Avoid spamming the console because they are often not actionable except for lib authors
                            manualPropTypeWarningCount < 3
                        ) {
                            printWarning(
                                `${
                                    'You are manually calling a React.PropTypes validation ' +
                                    'function for the `'
                                }${propFullName}\` prop on \`${componentName}\`. This is deprecated ` +
                                    `and will throw in the standalone \`prop-types\` package. ` +
                                    `You may be seeing this warning due to a third-party PropTypes ` +
                                    `library. See https://fb.me/react-warning-dont-call-proptypes ` +
                                    `for details.`,
                            );
                            manualPropTypeCallCache[cacheKey] = true;
                            manualPropTypeWarningCount++;
                        }
                    }
                }
                if (props[propName] == null) {
                    if (isRequired) {
                        if (props[propName] === null) {
                            return new PropTypeError(
                                `The ${ 
                                    location 
                                    } \`${ 
                                    propFullName 
                                    }\` is marked as required ` +
                                    `in \`${ 
                                        componentName 
                                        }\`, but its value is \`null\`.`,
                            );
                        }
                        return new PropTypeError(
                            `The ${ 
                                location 
                                } \`${ 
                                propFullName 
                                }\` is marked as required in ` +
                                `\`${ 
                                    componentName 
                                    }\`, but its value is \`undefined\`.`,
                        );
                    }
                    return null;
                }
                return validate(
                    props,
                    propName,
                    componentName,
                    location,
                    propFullName,
                );
            }

            const chainedCheckType = checkType.bind(null, false);
            chainedCheckType.isRequired = checkType.bind(null, true);

            return chainedCheckType;
        }

        function createPrimitiveTypeChecker(expectedType) {
            function validate(
                props,
                propName,
                componentName,
                location,
                propFullName,
                secret,
            ) {
                const propValue = props[propName];
                const propType = getPropType(propValue);
                if (propType !== expectedType) {
                    // `propValue` being instance of, say, date/regexp, pass the 'object'
                    // check, but we can offer a more precise error message here rather than
                    // 'of type `object`'.
                    const preciseType = getPreciseType(propValue);

                    return new PropTypeError(
                        `Invalid ${location} \`${propFullName}\` of type ` +
                            `\`${preciseType}\` supplied to \`${componentName}\`, expected ` +
                            `\`${expectedType}\`.`,
                        { expectedType },
                    );
                }
                return null;
            }
            return createChainableTypeChecker(validate);
        }

        function createAnyTypeChecker() {
            return createChainableTypeChecker(emptyFunctionThatReturnsNull);
        }

        function createArrayOfTypeChecker(typeChecker) {
            function validate(
                props,
                propName,
                componentName,
                location,
                propFullName,
            ) {
                if (typeof typeChecker !== 'function') {
                    return new PropTypeError(
                        `Property \`${propFullName}\` of component \`${componentName}\` has invalid PropType notation inside arrayOf.`,
                    );
                }
                const propValue = props[propName];
                if (!Array.isArray(propValue)) {
                    const propType = getPropType(propValue);
                    return new PropTypeError(
                        `Invalid ${location} \`${propFullName}\` of type ` +
                            `\`${propType}\` supplied to \`${componentName}\`, expected an array.`,
                    );
                }
                for (let i = 0; i < propValue.length; i++) {
                    const error = typeChecker(
                        propValue,
                        i,
                        componentName,
                        location,
                        `${propFullName  }[${  i  }]`,
                        ReactPropTypesSecret,
                    );
                    if (error instanceof Error) {
                        return error;
                    }
                }
                return null;
            }
            return createChainableTypeChecker(validate);
        }

        function createElementTypeChecker() {
            function validate(
                props,
                propName,
                componentName,
                location,
                propFullName,
            ) {
                const propValue = props[propName];
                if (!isValidElement(propValue)) {
                    const propType = getPropType(propValue);
                    return new PropTypeError(
                        `Invalid ${location} \`${propFullName}\` of type ` +
                            `\`${propType}\` supplied to \`${componentName}\`, expected a single ReactElement.`,
                    );
                }
                return null;
            }
            return createChainableTypeChecker(validate);
        }

        function createElementTypeTypeChecker() {
            function validate(
                props,
                propName,
                componentName,
                location,
                propFullName,
            ) {
                const propValue = props[propName];
                if (!ReactIs.isValidElementType(propValue)) {
                    const propType = getPropType(propValue);
                    return new PropTypeError(
                        `Invalid ${location} \`${propFullName}\` of type ` +
                            `\`${propType}\` supplied to \`${componentName}\`, expected a single ReactElement type.`,
                    );
                }
                return null;
            }
            return createChainableTypeChecker(validate);
        }

        function createInstanceTypeChecker(expectedClass) {
            function validate(
                props,
                propName,
                componentName,
                location,
                propFullName,
            ) {
                if (!(props[propName] instanceof expectedClass)) {
                    const expectedClassName = expectedClass.name || ANONYMOUS;
                    const actualClassName = getClassName(props[propName]);
                    return new PropTypeError(
                        `Invalid ${location} \`${propFullName}\` of type ` +
                            `\`${actualClassName}\` supplied to \`${componentName}\`, expected ` +
                            `instance of \`${expectedClassName}\`.`,
                    );
                }
                return null;
            }
            return createChainableTypeChecker(validate);
        }

        function createEnumTypeChecker(expectedValues) {
            if (!Array.isArray(expectedValues)) {
                if (process.env.NODE_ENV !== 'production') {
                    if (arguments.length > 1) {
                        printWarning(
                            `Invalid arguments supplied to oneOf, expected an array, got ${arguments.length} arguments. ` +
                                `A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).`,
                        );
                    } else {
                        printWarning(
                            'Invalid argument supplied to oneOf, expected an array.',
                        );
                    }
                }
                return emptyFunctionThatReturnsNull;
            }

            function validate(
                props,
                propName,
                componentName,
                location,
                propFullName,
            ) {
                const propValue = props[propName];
                for (let i = 0; i < expectedValues.length; i++) {
                    if (is(propValue, expectedValues[i])) {
                        return null;
                    }
                }

                const valuesString = JSON.stringify(
                    expectedValues,
                    (key, value) => {
                        const type = getPreciseType(value);
                        if (type === 'symbol') {
                            return String(value);
                        }
                        return value;
                    },
                );
                return new PropTypeError(
                    `Invalid ${location} \`${propFullName}\` of value \`${String(
                        propValue,
                    )}\` ` +
                        `supplied to \`${componentName}\`, expected one of ${valuesString}.`,
                );
            }
            return createChainableTypeChecker(validate);
        }

        function createObjectOfTypeChecker(typeChecker) {
            function validate(
                props,
                propName,
                componentName,
                location,
                propFullName,
            ) {
                if (typeof typeChecker !== 'function') {
                    return new PropTypeError(
                        `Property \`${propFullName}\` of component \`${componentName}\` has invalid PropType notation inside objectOf.`,
                    );
                }
                const propValue = props[propName];
                const propType = getPropType(propValue);
                if (propType !== 'object') {
                    return new PropTypeError(
                        `Invalid ${location} \`${propFullName}\` of type ` +
                            `\`${propType}\` supplied to \`${componentName}\`, expected an object.`,
                    );
                }
                for (const key in propValue) {
                    if (has(propValue, key)) {
                        const error = typeChecker(
                            propValue,
                            key,
                            componentName,
                            location,
                            `${propFullName  }.${  key}`,
                            ReactPropTypesSecret,
                        );
                        if (error instanceof Error) {
                            return error;
                        }
                    }
                }
                return null;
            }
            return createChainableTypeChecker(validate);
        }

        function createUnionTypeChecker(arrayOfTypeCheckers) {
            if (!Array.isArray(arrayOfTypeCheckers)) {
                process.env.NODE_ENV !== 'production'
                    ? printWarning(
                          'Invalid argument supplied to oneOfType, expected an instance of array.',
                      )
                    : void 0;
                return emptyFunctionThatReturnsNull;
            }

            for (let i = 0; i < arrayOfTypeCheckers.length; i++) {
                const checker = arrayOfTypeCheckers[i];
                if (typeof checker !== 'function') {
                    printWarning(
                        `${
                            'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
                            'received '
                        }${getPostfixForTypeWarning(checker)} at index ${i}.`,
                    );
                    return emptyFunctionThatReturnsNull;
                }
            }

            function validate(
                props,
                propName,
                componentName,
                location,
                propFullName,
            ) {
                const expectedTypes = [];
                for (let i = 0; i < arrayOfTypeCheckers.length; i++) {
                    const checker = arrayOfTypeCheckers[i];
                    const checkerResult = checker(
                        props,
                        propName,
                        componentName,
                        location,
                        propFullName,
                        ReactPropTypesSecret,
                    );
                    if (checkerResult == null) {
                        return null;
                    }
                    if (
                        checkerResult.data &&
                        has(checkerResult.data, 'expectedType')
                    ) {
                        expectedTypes.push(checkerResult.data.expectedType);
                    }
                }
                const expectedTypesMessage =
                    expectedTypes.length > 0
                        ? `, expected one of type [${ 
                          expectedTypes.join(', ') 
                          }]`
                        : '';
                return new PropTypeError(
                    `Invalid ${location} \`${propFullName}\` supplied to ` +
                        `\`${componentName}\`${expectedTypesMessage}.`,
                );
            }
            return createChainableTypeChecker(validate);
        }

        function createNodeChecker() {
            function validate(
                props,
                propName,
                componentName,
                location,
                propFullName,
            ) {
                if (!isNode(props[propName])) {
                    return new PropTypeError(
                        `Invalid ${location} \`${propFullName}\` supplied to ` +
                            `\`${componentName}\`, expected a ReactNode.`,
                    );
                }
                return null;
            }
            return createChainableTypeChecker(validate);
        }

        function invalidValidatorError(
            componentName,
            location,
            propFullName,
            key,
            type,
        ) {
            return new PropTypeError(
                `${
                    componentName || 'React class'
                }: ${location} type \`${propFullName}.${key}\` is invalid; ` +
                    `it must be a function, usually from the \`prop-types\` package, but received \`${type}\`.`,
            );
        }

        function createShapeTypeChecker(shapeTypes) {
            function validate(
                props,
                propName,
                componentName,
                location,
                propFullName,
            ) {
                const propValue = props[propName];
                const propType = getPropType(propValue);
                if (propType !== 'object') {
                    return new PropTypeError(
                        `Invalid ${location} \`${propFullName}\` of type \`${propType}\` ` +
                            `supplied to \`${componentName}\`, expected \`object\`.`,
                    );
                }
                for (const key in shapeTypes) {
                    const checker = shapeTypes[key];
                    if (typeof checker !== 'function') {
                        return invalidValidatorError(
                            componentName,
                            location,
                            propFullName,
                            key,
                            getPreciseType(checker),
                        );
                    }
                    const error = checker(
                        propValue,
                        key,
                        componentName,
                        location,
                        `${propFullName  }.${  key}`,
                        ReactPropTypesSecret,
                    );
                    if (error) {
                        return error;
                    }
                }
                return null;
            }
            return createChainableTypeChecker(validate);
        }

        function createStrictShapeTypeChecker(shapeTypes) {
            function validate(
                props,
                propName,
                componentName,
                location,
                propFullName,
            ) {
                const propValue = props[propName];
                const propType = getPropType(propValue);
                if (propType !== 'object') {
                    return new PropTypeError(
                        `Invalid ${location} \`${propFullName}\` of type \`${propType}\` ` +
                            `supplied to \`${componentName}\`, expected \`object\`.`,
                    );
                }
                // We need to check all keys in case some are required but missing from props.
                const allKeys = assign({}, props[propName], shapeTypes);
                for (const key in allKeys) {
                    const checker = shapeTypes[key];
                    if (has(shapeTypes, key) && typeof checker !== 'function') {
                        return invalidValidatorError(
                            componentName,
                            location,
                            propFullName,
                            key,
                            getPreciseType(checker),
                        );
                    }
                    if (!checker) {
                        return new PropTypeError(
                            `Invalid ${location} \`${propFullName}\` key \`${key}\` supplied to \`${componentName}\`.` +
                                `\nBad object: ${JSON.stringify(
                                    props[propName],
                                    null,
                                    '  ',
                                )}\nValid keys: ${JSON.stringify(
                                    Object.keys(shapeTypes),
                                    null,
                                    '  ',
                                )}`,
                        );
                    }
                    const error = checker(
                        propValue,
                        key,
                        componentName,
                        location,
                        `${propFullName  }.${  key}`,
                        ReactPropTypesSecret,
                    );
                    if (error) {
                        return error;
                    }
                }
                return null;
            }

            return createChainableTypeChecker(validate);
        }

        function isNode(propValue) {
            switch (typeof propValue) {
                case 'number':
                case 'string':
                case 'undefined':
                    return true;
                case 'boolean':
                    return !propValue;
                case 'object':
                    if (Array.isArray(propValue)) {
                        return propValue.every(isNode);
                    }
                    if (propValue === null || isValidElement(propValue)) {
                        return true;
                    }

                    var iteratorFn = getIteratorFn(propValue);
                    if (iteratorFn) {
                        const iterator = iteratorFn.call(propValue);
                        let step;
                        if (iteratorFn !== propValue.entries) {
                            while (!(step = iterator.next()).done) {
                                if (!isNode(step.value)) {
                                    return false;
                                }
                            }
                        } else {
                            // Iterator will provide entry [k,v] tuples rather than values.
                            while (!(step = iterator.next()).done) {
                                const entry = step.value;
                                if (entry) {
                                    if (!isNode(entry[1])) {
                                        return false;
                                    }
                                }
                            }
                        }
                    } else {
                        return false;
                    }

                    return true;
                default:
                    return false;
            }
        }

        function isSymbol(propType, propValue) {
            // Native Symbol.
            if (propType === 'symbol') {
                return true;
            }

            // falsy value can't be a Symbol
            if (!propValue) {
                return false;
            }

            // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
            if (propValue['@@toStringTag'] === 'Symbol') {
                return true;
            }

            // Fallback for non-spec compliant Symbols which are polyfilled.
            if (typeof Symbol === 'function' && propValue instanceof Symbol) {
                return true;
            }

            return false;
        }

        // Equivalent of `typeof` but with special handling for array and regexp.
        function getPropType(propValue) {
            const propType = typeof propValue;
            if (Array.isArray(propValue)) {
                return 'array';
            }
            if (propValue instanceof RegExp) {
                // Old webkits (at least until Android 4.0) return 'function' rather than
                // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
                // passes PropTypes.object.
                return 'object';
            }
            if (isSymbol(propType, propValue)) {
                return 'symbol';
            }
            return propType;
        }

        // This handles more types than `getPropType`. Only used for error messages.
        // See `createPrimitiveTypeChecker`.
        function getPreciseType(propValue) {
            if (typeof propValue === 'undefined' || propValue === null) {
                return `${propValue}`;
            }
            const propType = getPropType(propValue);
            if (propType === 'object') {
                if (propValue instanceof Date) {
                    return 'date';
                }
                if (propValue instanceof RegExp) {
                    return 'regexp';
                }
            }
            return propType;
        }

        // Returns a string that is postfixed to a warning about an invalid type.
        // For example, "undefined" or "of type array"
        function getPostfixForTypeWarning(value) {
            const type = getPreciseType(value);
            switch (type) {
                case 'array':
                case 'object':
                    return `an ${type}`;
                case 'boolean':
                case 'date':
                case 'regexp':
                    return `a ${type}`;
                default:
                    return type;
            }
        }

        // Returns class name of the object, if any.
        function getClassName(propValue) {
            if (!propValue.constructor || !propValue.constructor.name) {
                return ANONYMOUS;
            }
            return propValue.constructor.name;
        }

        ReactPropTypes.checkPropTypes = checkPropTypes;
        ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
        ReactPropTypes.PropTypes = ReactPropTypes;

        return ReactPropTypes;
    };
    return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

let factoryWithThrowingShims;
let hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims() {
    if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
    hasRequiredFactoryWithThrowingShims = 1;

    const ReactPropTypesSecret = requireReactPropTypesSecret();

    function emptyFunction() {}
    function emptyFunctionWithReset() {}
    emptyFunctionWithReset.resetWarningCache = emptyFunction;

    factoryWithThrowingShims = function () {
        function shim(
            props,
            propName,
            componentName,
            location,
            propFullName,
            secret,
        ) {
            if (secret === ReactPropTypesSecret) {
                // It is still safe when called from React.
                return;
            }
            const err = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                    'Use PropTypes.checkPropTypes() to call them. ' +
                    'Read more at http://fb.me/use-check-prop-types',
            );
            err.name = 'Invariant Violation';
            throw err;
        }
        shim.isRequired = shim;
        function getShim() {
            return shim;
        } // Important!
        // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
        const ReactPropTypes = {
            array: shim,
            bigint: shim,
            bool: shim,
            func: shim,
            number: shim,
            object: shim,
            string: shim,
            symbol: shim,

            any: shim,
            arrayOf: getShim,
            element: shim,
            elementType: shim,
            instanceOf: getShim,
            node: shim,
            objectOf: getShim,
            oneOf: getShim,
            oneOfType: getShim,
            shape: getShim,
            exact: getShim,

            checkPropTypes: emptyFunctionWithReset,
            resetWarningCache: emptyFunction,
        };

        ReactPropTypes.PropTypes = ReactPropTypes;

        return ReactPropTypes;
    };
    return factoryWithThrowingShims;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
    const ReactIs = reactIsExports;

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    const throwOnDirectAccess = true;
    propTypes.exports = requireFactoryWithTypeCheckers()(
        ReactIs.isElement,
        throwOnDirectAccess,
    );
} else {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    propTypes.exports = requireFactoryWithThrowingShims()();
}

const sizesMixin = (sizeName, sizes) => Ae`
    gap: ${sizes.marginSizes[sizeName]}px;
    border-radius: ${sizes.borderRadiuses[sizeName]}px;
    padding: ${sizes.paddingSizes[sizeName]}px ${
    sizes.paddingSizes[sizeName]
}px;
    margin: ${sizes.marginSizes[sizeName] / 2}px;
    max-width: ${sizes.toastMaxWidth[sizeName]}px;
    width: fit-content;
    min-width: ${sizes.toastMinWidth[sizeName]}px;

    max-height: ${sizes.toastMaxHeight[sizeName]}px;
    grid-template-columns:
        ${sizes.iconSizes[sizeName]}px
        1fr
        ${sizes.titleFontSizes[sizeName]}px;
    & > svg {
        font-size: ${sizes.iconSizes[sizeName]}px;
        min-width: ${sizes.iconSizes[sizeName]}px;
        flex-grow: 1;
    }
`;
const titleTextSizesMixin = (sizeName, sizes) => Ae`
    font-size: ${sizes.titleFontSizes[sizeName]}px;
    max-width: ${
        sizes.toastMaxWidth[sizeName] -
        sizes.paddingSizes[sizeName] * 2 -
        sizes.titleFontSizes[sizeName] * 2 -
        sizes.iconSizes[sizeName] -
        sizes.marginSizes[sizeName]
    }px;
`;
const descriptionTextSizesMixin = (sizeName, sizes) => Ae`
    font-size: ${sizes.descriptionFontSizes[sizeName]}px;
    max-width: ${
        sizes.toastMaxWidth[sizeName] -
        sizes.paddingSizes[sizeName] * 4 -
        sizes.titleFontSizes[sizeName] -
        sizes.iconSizes[sizeName] -
        sizes.marginSizes[sizeName]
    }px;
`;
const closeButtonSizesMixin = (sizeName, sizes) => Ae`
    font-size: ${sizes.titleFontSizes[sizeName]}px;
    right: ${sizes.paddingSizes[sizeName]}px;
`;
const getAnimationPatams = (duration) => Ae`
    animation-delay: 0s, ${duration / 1000 - 0.5}s;
    animation-duration: 0.5s, 0.5s;
    animation-iteration-count: 1, 1;
    animation-fill-mode: forwards, forwards;
`;
const opacityAnimation = (duration) => Ae`
    animation-name: show, hide;
    ${getAnimationPatams(duration)}
    @keyframes show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes hide {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
            display: none;
        }
    }
`;
const getSlidePosition = (direction, position) => {
    switch (direction) {
        case 'bottom':
            return Ae`
                transform: translate(0, ${position}px);
            `;
        case 'left':
            return Ae`
                transform: translate(${-position}px, 0);
            `;
        case 'right':
            return Ae`
                transform: translate(${position}px, 0);
            `;
        default:
            return Ae`
                transform: translate(0, ${-position}px);
            `;
    }
};
const slideAnimation = (duration, direction) => Ae`
    ${getAnimationPatams(duration)}
    animation-name: slide-in, slide-out;
    @keyframes slide-in {
        from {
            opacity: 0;
            ${getSlidePosition(direction, 200)}
        }
        to {
            opacity: 1;
            ${getSlidePosition(direction, 0)}
        }
    }
    @keyframes slide-out {
        from {
            opacity: 1;
            ${getSlidePosition(direction, 0)}
        }
        to {
            opacity: 0;
            ${getSlidePosition(direction, 200)}
        }
    }
`;
const ToastWrapper = styled.div`
    position: relative;
    display: grid;
    place-items: center;
    box-sizing: border-box;
    background-color: ${({ type, theme: { colors } }) =>
        colors[type].background};
    color: ${({ type = 'info', theme: { colors } }) => colors[type].color};
    ${({ theme: { sizes } }) => sizesMixin('xxl', sizes)};
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.xl}px) {
        ${({ theme: { sizes } }) => sizesMixin('xl', sizes)};
    }
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.lg}px) {
        ${({ theme: { sizes } }) => sizesMixin('lg', sizes)};
    }
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.md}px) {
        ${({ theme: { sizes } }) => sizesMixin('md', sizes)};
    }
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.sm}px) {
        ${({ theme: { sizes } }) => sizesMixin('sm', sizes)};
    }
    ${({ duration, slideDirection, animationName }) => {
        if (!animationName) return ``;
        switch (animationName) {
            case 'opacity':
                return opacityAnimation(duration);
            default:
                return slideAnimation(duration, slideDirection);
        }
    }}
`;
const CloseButton = styled.button`
    position: absolute;
    padding: 0;
    color: inherit;
    background: transparent;
    border: none;
    cursor: pointer;
    ${({ theme: { sizes } }) => closeButtonSizesMixin('xxl', sizes)};
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.xl}px) {
        ${({ theme: { sizes } }) => closeButtonSizesMixin('xl', sizes)};
    }
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.lg}px) {
        ${({ theme: { sizes } }) => closeButtonSizesMixin('lg', sizes)};
    }
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.md}px) {
        ${({ theme: { sizes } }) => closeButtonSizesMixin('md', sizes)};
    }
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.sm}px) {
        ${({ theme: { sizes } }) => closeButtonSizesMixin('sm', sizes)};
    }
`;
const ToastDataWrapper = styled.div`
    display: flex;
    justify-self: start;
    flex-direction: column;
`;
const ToastTitle = styled.span`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    ${({ theme: { sizes } }) => titleTextSizesMixin('xxl', sizes)};
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.xl}px) {
        ${({ theme: { sizes } }) => titleTextSizesMixin('xl', sizes)};
    }
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.lg}px) {
        ${({ theme: { sizes } }) => titleTextSizesMixin('lg', sizes)};
    }
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.md}px) {
        ${({ theme: { sizes } }) => titleTextSizesMixin('md', sizes)};
    }
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.sm}px) {
        ${({ theme: { sizes } }) => titleTextSizesMixin('sm', sizes)};
    }
`;
const ToastDescription = styled.span`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    ${({ theme: { sizes } }) => descriptionTextSizesMixin('xxl', sizes)};
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.xl}px) {
        ${({ theme: { sizes } }) => descriptionTextSizesMixin('xl', sizes)};
    }
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.lg}px) {
        ${({ theme: { sizes } }) => descriptionTextSizesMixin('lg', sizes)};
    }
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.md}px) {
        ${({ theme: { sizes } }) => descriptionTextSizesMixin('md', sizes)};
    }
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.sm}px) {
        ${({ theme: { sizes } }) => descriptionTextSizesMixin('sm', sizes)};
    }
`;

// THIS FILE IS AUTO GENERATED
function FaInfoCircle(props) {
    return GenIcon({
        tag: 'svg',
        attr: { viewBox: '0 0 512 512' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z',
                },
            },
        ],
    })(props);
}

// THIS FILE IS AUTO GENERATED
function AiFillWarning(props) {
    return GenIcon({
        tag: 'svg',
        attr: { viewBox: '0 0 1024 1024' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zM480 416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416zm32 352a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z',
                },
            },
        ],
    })(props);
}

// THIS FILE IS AUTO GENERATED
function BiCheck(props) {
    return GenIcon({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'm10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z',
                },
            },
        ],
    })(props);
}
function BiErrorAlt(props) {
    return GenIcon({
        tag: 'svg',
        attr: { viewBox: '0 0 24 24' },
        child: [
            { tag: 'path', attr: { d: 'M11 7h2v7h-2zm0 8h2v2h-2z' } },
            {
                tag: 'path',
                attr: {
                    d: 'm21.707 7.293-5-5A.996.996 0 0 0 16 2H8a.996.996 0 0 0-.707.293l-5 5A.996.996 0 0 0 2 8v8c0 .266.105.52.293.707l5 5A.996.996 0 0 0 8 22h8c.266 0 .52-.105.707-.293l5-5A.996.996 0 0 0 22 16V8a.996.996 0 0 0-.293-.707zM20 15.586 15.586 20H8.414L4 15.586V8.414L8.414 4h7.172L20 8.414v7.172z',
                },
            },
        ],
    })(props);
}

const toastIcons = {
    info: /* #__PURE__ */ React.createElement(FaInfoCircle, null),
    warning: /* #__PURE__ */ React.createElement(AiFillWarning, null),
    error: /* #__PURE__ */ React.createElement(BiErrorAlt, null),
    success: /* #__PURE__ */ React.createElement(BiCheck, null),
};

function Toast({
    type,
    toastTitle,
    toastDescription,
    handleClose,
    duration,
    slideDirection,
    animationName,
}) {
    return /* #__PURE__ */ React.createElement(
        ToastWrapper,
        {
            type,
            duration,
            slideDirection,
            animationName,
            draggable: true,
            onDragEnd: handleClose,
            onClick: (e) => e.stopPropagation(),
        },
        toastIcons[type],
        /* #__PURE__ */ React.createElement(
            ToastDataWrapper,
            null,
            /* #__PURE__ */ React.createElement(
                ToastTitle,
                null,
                toastTitle.slice(0, 29),
            ),
            toastDescription &&
                /* #__PURE__ */ React.createElement(
                    ToastDescription,
                    null,
                    toastDescription.slice(0, 89),
                ),
        ),
        /* #__PURE__ */ React.createElement(
            CloseButton,
            {
                onClick: (e) => {
                    e.stopPropagation();
                    handleClose();
                },
            },
            /* #__PURE__ */ React.createElement(RxCross2, null),
        ),
    );
}
Toast.propTypes = {
    type: propTypesExports.oneOf(['info', 'warning', 'error', 'success']),
    toastTitle: propTypesExports.string.isRequired,
    toastDescription: propTypesExports.string,
    handleClose: propTypesExports.func,
    duration: propTypesExports.number,
    slideDirection: propTypesExports.oneOf(['top', 'bottom', 'left', 'right']),
    animationName: propTypesExports.string | undefined,
};
Toast.defaultProps = {
    type: 'info',
    toastDescription: 'Description',
    handleClose: () => {},
    duration: 3000,
    slideDirection: 'top',
    animationName: undefined,
};

const positions = {
    topLeft: 'top-left',
    topRight: 'top-right',
    bottomLeft: 'bottom-left',
    bottomRight: 'bottom-right',
};

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
        getRandomValues =
            typeof crypto !== 'undefined' &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto);

        if (!getRandomValues) {
            throw new Error(
                'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported',
            );
        }
    }

    return getRandomValues(rnds8);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    return `${
        byteToHex[arr[offset + 0]] +
        byteToHex[arr[offset + 1]] +
        byteToHex[arr[offset + 2]] +
        byteToHex[arr[offset + 3]]
    }-${byteToHex[arr[offset + 4]]}${byteToHex[arr[offset + 5]]}-${
        byteToHex[arr[offset + 6]]
    }${byteToHex[arr[offset + 7]]}-${byteToHex[arr[offset + 8]]}${
        byteToHex[arr[offset + 9]]
    }-${byteToHex[arr[offset + 10]]}${byteToHex[arr[offset + 11]]}${
        byteToHex[arr[offset + 12]]
    }${byteToHex[arr[offset + 13]]}${byteToHex[arr[offset + 14]]}${
        byteToHex[arr[offset + 15]]
    }`.toLowerCase();
}

const randomUUID =
    typeof crypto !== 'undefined' &&
    crypto.randomUUID &&
    crypto.randomUUID.bind(crypto);
const native = {
    randomUUID,
};

function v4(options, buf, offset) {
    if (native.randomUUID && !buf && !options) {
        return native.randomUUID();
    }

    options = options || {};
    const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80; // Copy bytes to buffer, if provided

    if (buf) {
        offset = offset || 0;

        for (let i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
        }

        return buf;
    }

    return unsafeStringify(rnds);
}

const backgroundColors = {
    info: '#9A40D3',
    warning: '#F4E048',
    error: '#E25837',
    success: '#37E29A',
};
const textColors = {
    info: '#ffffff',
    warning: '#000000',
    error: '#ffffff',
    success: '#ffffff',
};

const colorsTheme = {
    info: {
        background: backgroundColors.info,
        color: textColors.info,
    },
    warning: {
        background: backgroundColors.warning,
        color: textColors.warning,
    },
    error: {
        background: backgroundColors.error,
        color: textColors.error,
    },
    success: {
        background: backgroundColors.success,
        color: textColors.success,
    },
};

const Singleton$1 = class Singleton {
    constructor() {
        this.toastTheme = colorsTheme;
        this.containerMargin = 10;
    }

    getInstance() {
        if (!this.instance) {
            this.instance = new Singleton();
        }
        return this.instance;
    }

    setToastContainer(toastContainer) {
        this.toastContainer = toastContainer;
    }

    setToastTheme(theme) {
        this.toastTheme = Object.assign(colorsTheme, theme);
    }

    setToastContainerMargin(margin) {
        this.containerMargin = margin;
    }

    createToast({
        title,
        description = '',
        position = 'top-left',
        type = 'info',
        duration = 3000,
        slideDirection = 'top',
        animationName,
    }) {
        this.toastContainer?.createNewToast({
            title,
            description,
            position,
            type,
            duration,
            slideDirection,
            animationName,
            id: v4(),
        });
    }

    removeToast(toastId) {
        this.toastContainer?.removeToast(toastId);
    }
};
const singleton$1 = new Singleton$1();

const paddingSizes = {
    sm: 15,
    md: 15,
    lg: 15,
    xl: 20,
    xxl: 20,
};
const toastMinWidth = {
    sm: 260,
    md: 260,
    lg: 300,
    xl: 350,
    xxl: 350,
};
const toastMaxWidth = {
    sm: 300,
    md: 300,
    lg: 400,
    xl: 540,
    xxl: 760,
};
const toastMaxHeight = {
    sm: 100,
    md: 100,
    lg: 150,
    xl: 150,
    xxl: 150,
};
const borderRadiuses = {
    sm: 10,
    md: 20,
    lg: 20,
    xl: 20,
    xxl: 20,
};
const iconSizes = {
    sm: 20,
    md: 20,
    lg: 20,
    xl: 30,
    xxl: 30,
};
const marginSizes = {
    sm: 10,
    md: 15,
    lg: 20,
    xl: 20,
    xxl: 20,
};
const titleFontSizes = {
    sm: 20,
    md: 20,
    lg: 20,
    xl: 30,
    xxl: 30,
};
const descriptionFontSizes = {
    sm: 15,
    md: 15,
    lg: 15,
    xl: 20,
    xxl: 20,
};
const displayBreackpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
};

const sizes = /* #__PURE__ */ Object.freeze({
    __proto__: null,
    borderRadiuses,
    descriptionFontSizes,
    displayBreackpoints,
    iconSizes,
    marginSizes,
    paddingSizes,
    titleFontSizes,
    toastMaxHeight,
    toastMaxWidth,
    toastMinWidth,
});

const useToast = () => {
    const [toasts, setToasts] = useState([]);
    const ref = useRef(null);
    useImperativeHandle(ref, () => ({
        createNewToast(newToast) {
            if (
                toasts.filter((t) => t.position === newToast.position).length <
                3
            ) {
                setToasts((prevState) => [...prevState, newToast]);
                setTimeout(
                    () => this.removeToast(newToast.id, newToast.position),
                    newToast.duration,
                );
            }
        },
        removeToast: (toastId) => {
            setToasts((prevState) =>
                prevState.filter((toast) => toastId !== toast.id),
            );
        },
    }));
    useEffect(() => {
        singleton$1.getInstance().setToastContainer(ref.current);
    }, [toasts]);
    return {
        toasts,
    };
};

const ToastContainerWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    margin: ${({ theme: { containerMargin } }) => containerMargin}px;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
        'tl tr'
        'bl br';
    @media screen and (max-width: ${({ theme: { sizes } }) =>
            sizes.displayBreackpoints.md}px) {
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(1, 1fr);
        grid-template-areas: 'tr' 'br';
    }
`;
const ToastPositionWrapper = styled.div`
    background-color: red;
    display: flex;
    flex-direction: column;
    &[data-cy='top-right'] {
        grid-area: tr;
    }
    &[data-cy='bottom-right'] {
        grid-area: br;
    }
    &[data-cy='bottom-left'] {
        grid-area: bl;
    }
    &[data-cy='top-left'] {
        grid-area: tl;
    }
    &[data-cy='top-right'],
    &[data-cy='bottom-right'] {
        align-items: flex-end;
        @media screen and (max-width: ${({ theme: { sizes } }) =>
                sizes.displayBreackpoints.md}px) {
            align-items: center;
        }
    }
    &[data-cy='bottom-left'],
    &[data-cy='bottom-right'] {
        flex-direction: column-reverse;
    }
`;

const ToastContainer = () => {
    const { toasts } = useToast();
    return /* #__PURE__ */ ReactDOM.createPortal(
        /* #__PURE__ */ React.createElement(
            Le,
            {
                theme: {
                    colors: singleton$1.toastTheme,
                    sizes,
                    containerMargin: singleton$1.getInstance().containerMargin,
                },
            },
            /* #__PURE__ */ React.createElement(
                ToastContainerWrapper,
                null,
                Object.keys(positions).map((positionName) =>
                    /* #__PURE__ */ React.createElement(
                        ToastPositionWrapper,
                        {
                            key: positionName,
                            onClick: () =>
                                singleton$1.getInstance().createToast({
                                    title: 'rddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
                                    position: positions[positionName],
                                    type: 'info',
                                    animationName: 'slide',
                                    description:
                                        'dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
                                }),
                            'data-cy': positions[positionName],
                        },
                        toasts.map((t) =>
                            t.position === positions[positionName]
                                ? /* #__PURE__ */ React.createElement(Toast, {
                                      key: t.id,
                                      toastTitle: t.title,
                                      toastDescription: t.description,
                                      type: t.type,
                                      duration: t.duration,
                                      animationName: t.animationName,
                                      slideDirection: t.slideDirection,
                                      handleClose: () =>
                                          singleton$1
                                              .getInstance()
                                              .removeToast(t.id),
                                  })
                                : null,
                        ),
                    ),
                ),
            ),
        ),
        document.getElementsByTagName('body')[0],
    );
};

class Singleton {
    constructor() {
        this.toastTheme = colorsTheme;
        this.containerMargin = 10;
    }

    getInstance() {
        if (!this.instance) {
            this.instance = new Singleton();
        }
        return this.instance;
    }

    setToastContainer(toastContainer) {
        this.toastContainer = toastContainer;
    }

    setToastTheme(theme) {
        this.toastTheme = Object.assign(colorsTheme, theme);
    }

    setToastContainerMargin(margin) {
        this.containerMargin = margin;
    }

    createToast({
        title,
        description = '',
        position = 'top-left',
        type = 'info',
        duration = 3000,
        slideDirection = 'top',
        animationName,
    }) {
        this.toastContainer?.createNewToast({
            title,
            description,
            position,
            type,
            duration,
            slideDirection,
            animationName,
            id: v4(),
        });
    }

    removeToast(toastId) {
        this.toastContainer?.removeToast(toastId);
    }
}
const singleton = new Singleton();

export { singleton as Singleton, ToastContainer };
