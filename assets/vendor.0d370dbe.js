var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getAugmentedNamespace(n2) {
  if (n2.__esModule)
    return n2;
  var a = Object.defineProperty({}, "__esModule", { value: true });
  Object.keys(n2).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n2, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n2[k];
      }
    });
  });
  return a;
}
var react = { exports: {} };
var react_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from2;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from2 = Object(arguments[s]);
    for (var key in from2) {
      if (hasOwnProperty.call(from2, key)) {
        to[key] = from2[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from2);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from2, symbols[i])) {
          to[symbols[i]] = from2[symbols[i]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l = objectAssign, n$2 = 60103, p = 60106;
react_production_min.Fragment = 60107;
react_production_min.StrictMode = 60108;
react_production_min.Profiler = 60114;
var q = 60109, r$2 = 60110, t$1 = 60112;
react_production_min.Suspense = 60113;
var u = 60115, v = 60116;
if (typeof Symbol === "function" && Symbol.for) {
  var w = Symbol.for;
  n$2 = w("react.element");
  p = w("react.portal");
  react_production_min.Fragment = w("react.fragment");
  react_production_min.StrictMode = w("react.strict_mode");
  react_production_min.Profiler = w("react.profiler");
  q = w("react.provider");
  r$2 = w("react.context");
  t$1 = w("react.forward_ref");
  react_production_min.Suspense = w("react.suspense");
  u = w("react.memo");
  v = w("react.lazy");
}
var x = typeof Symbol === "function" && Symbol.iterator;
function y$1(a) {
  if (a === null || typeof a !== "object")
    return null;
  a = x && a[x] || a["@@iterator"];
  return typeof a === "function" ? a : null;
}
function z(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var A = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, B$1 = {};
function C(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B$1;
  this.updater = c || A;
}
C.prototype.isReactComponent = {};
C.prototype.setState = function(a, b) {
  if (typeof a !== "object" && typeof a !== "function" && a != null)
    throw Error(z(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};
C.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function D$1() {
}
D$1.prototype = C.prototype;
function E$2(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B$1;
  this.updater = c || A;
}
var F$1 = E$2.prototype = new D$1();
F$1.constructor = E$2;
l(F$1, C.prototype);
F$1.isPureReactComponent = true;
var G$1 = { current: null }, H$1 = Object.prototype.hasOwnProperty, I$1 = { key: true, ref: true, __self: true, __source: true };
function J(a, b, c) {
  var e, d = {}, k = null, h = null;
  if (b != null)
    for (e in b.ref !== void 0 && (h = b.ref), b.key !== void 0 && (k = "" + b.key), b)
      H$1.call(b, e) && !I$1.hasOwnProperty(e) && (d[e] = b[e]);
  var g = arguments.length - 2;
  if (g === 1)
    d.children = c;
  else if (1 < g) {
    for (var f = Array(g), m2 = 0; m2 < g; m2++)
      f[m2] = arguments[m2 + 2];
    d.children = f;
  }
  if (a && a.defaultProps)
    for (e in g = a.defaultProps, g)
      d[e] === void 0 && (d[e] = g[e]);
  return { $$typeof: n$2, type: a, key: k, ref: h, props: d, _owner: G$1.current };
}
function K(a, b) {
  return { $$typeof: n$2, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function L(a) {
  return typeof a === "object" && a !== null && a.$$typeof === n$2;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var M$1 = /\/+/g;
function N$1(a, b) {
  return typeof a === "object" && a !== null && a.key != null ? escape("" + a.key) : b.toString(36);
}
function O$1(a, b, c, e, d) {
  var k = typeof a;
  if (k === "undefined" || k === "boolean")
    a = null;
  var h = false;
  if (a === null)
    h = true;
  else
    switch (k) {
      case "string":
      case "number":
        h = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case n$2:
          case p:
            h = true;
        }
    }
  if (h)
    return h = a, d = d(h), a = e === "" ? "." + N$1(h, 0) : e, Array.isArray(d) ? (c = "", a != null && (c = a.replace(M$1, "$&/") + "/"), O$1(d, b, c, "", function(a2) {
      return a2;
    })) : d != null && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M$1, "$&/") + "/") + a)), b.push(d)), 1;
  h = 0;
  e = e === "" ? "." : e + ":";
  if (Array.isArray(a))
    for (var g = 0; g < a.length; g++) {
      k = a[g];
      var f = e + N$1(k, g);
      h += O$1(k, b, c, f, d);
    }
  else if (f = y$1(a), typeof f === "function")
    for (a = f.call(a), g = 0; !(k = a.next()).done; )
      k = k.value, f = e + N$1(k, g++), h += O$1(k, b, c, f, d);
  else if (k === "object")
    throw b = "" + a, Error(z(31, b === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
  return h;
}
function P$1(a, b, c) {
  if (a == null)
    return a;
  var e = [], d = 0;
  O$1(a, e, "", "", function(a2) {
    return b.call(c, a2, d++);
  });
  return e;
}
function Q(a) {
  if (a._status === -1) {
    var b = a._result;
    b = b();
    a._status = 0;
    a._result = b;
    b.then(function(b2) {
      a._status === 0 && (b2 = b2.default, a._status = 1, a._result = b2);
    }, function(b2) {
      a._status === 0 && (a._status = 2, a._result = b2);
    });
  }
  if (a._status === 1)
    return a._result;
  throw a._result;
}
var R$1 = { current: null };
function S$1() {
  var a = R$1.current;
  if (a === null)
    throw Error(z(321));
  return a;
}
var T$1 = { ReactCurrentDispatcher: R$1, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: G$1, IsSomeRendererActing: { current: false }, assign: l };
react_production_min.Children = { map: P$1, forEach: function(a, b, c) {
  P$1(a, function() {
    b.apply(this, arguments);
  }, c);
}, count: function(a) {
  var b = 0;
  P$1(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return P$1(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!L(a))
    throw Error(z(143));
  return a;
} };
react_production_min.Component = C;
react_production_min.PureComponent = E$2;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T$1;
react_production_min.cloneElement = function(a, b, c) {
  if (a === null || a === void 0)
    throw Error(z(267, a));
  var e = l({}, a.props), d = a.key, k = a.ref, h = a._owner;
  if (b != null) {
    b.ref !== void 0 && (k = b.ref, h = G$1.current);
    b.key !== void 0 && (d = "" + b.key);
    if (a.type && a.type.defaultProps)
      var g = a.type.defaultProps;
    for (f in b)
      H$1.call(b, f) && !I$1.hasOwnProperty(f) && (e[f] = b[f] === void 0 && g !== void 0 ? g[f] : b[f]);
  }
  var f = arguments.length - 2;
  if (f === 1)
    e.children = c;
  else if (1 < f) {
    g = Array(f);
    for (var m2 = 0; m2 < f; m2++)
      g[m2] = arguments[m2 + 2];
    e.children = g;
  }
  return {
    $$typeof: n$2,
    type: a.type,
    key: d,
    ref: k,
    props: e,
    _owner: h
  };
};
react_production_min.createContext = function(a, b) {
  b === void 0 && (b = null);
  a = { $$typeof: r$2, _calculateChangedBits: b, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null };
  a.Provider = { $$typeof: q, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = J;
react_production_min.createFactory = function(a) {
  var b = J.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: t$1, render: a };
};
react_production_min.isValidElement = L;
react_production_min.lazy = function(a) {
  return { $$typeof: v, _payload: { _status: -1, _result: a }, _init: Q };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: u, type: a, compare: b === void 0 ? null : b };
};
react_production_min.useCallback = function(a, b) {
  return S$1().useCallback(a, b);
};
react_production_min.useContext = function(a, b) {
  return S$1().useContext(a, b);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useEffect = function(a, b) {
  return S$1().useEffect(a, b);
};
react_production_min.useImperativeHandle = function(a, b, c) {
  return S$1().useImperativeHandle(a, b, c);
};
react_production_min.useLayoutEffect = function(a, b) {
  return S$1().useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return S$1().useMemo(a, b);
};
react_production_min.useReducer = function(a, b, c) {
  return S$1().useReducer(a, b, c);
};
react_production_min.useRef = function(a) {
  return S$1().useRef(a);
};
react_production_min.useState = function(a) {
  return S$1().useState(a);
};
react_production_min.version = "17.0.2";
{
  react.exports = react_production_min;
}
var React = react.exports;
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  var f, g, h, k;
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  if (typeof window === "undefined" || typeof MessageChannel !== "function") {
    var t2 = null, u2 = null, w = function() {
      if (t2 !== null)
        try {
          var a = exports.unstable_now();
          t2(true, a);
          t2 = null;
        } catch (b) {
          throw setTimeout(w, 0), b;
        }
    };
    f = function(a) {
      t2 !== null ? setTimeout(f, 0, a) : (t2 = a, setTimeout(w, 0));
    };
    g = function(a, b) {
      u2 = setTimeout(a, b);
    };
    h = function() {
      clearTimeout(u2);
    };
    exports.unstable_shouldYield = function() {
      return false;
    };
    k = exports.unstable_forceFrameRate = function() {
    };
  } else {
    var x2 = window.setTimeout, y2 = window.clearTimeout;
    if (typeof console !== "undefined") {
      var z2 = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      typeof z2 !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var A2 = false, B2 = null, C2 = -1, D2 = 5, E2 = 0;
    exports.unstable_shouldYield = function() {
      return exports.unstable_now() >= E2;
    };
    k = function() {
    };
    exports.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D2 = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    var F2 = new MessageChannel(), G2 = F2.port2;
    F2.port1.onmessage = function() {
      if (B2 !== null) {
        var a = exports.unstable_now();
        E2 = a + D2;
        try {
          B2(true, a) ? G2.postMessage(null) : (A2 = false, B2 = null);
        } catch (b) {
          throw G2.postMessage(null), b;
        }
      } else
        A2 = false;
    };
    f = function(a) {
      B2 = a;
      A2 || (A2 = true, G2.postMessage(null));
    };
    g = function(a, b) {
      C2 = x2(function() {
        a(exports.unstable_now());
      }, b);
    };
    h = function() {
      y2(C2);
      C2 = -1;
    };
  }
  function H2(a, b) {
    var c = a.length;
    a.push(b);
    a:
      for (; ; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (e !== void 0 && 0 < I2(e, b))
          a[d] = b, a[c] = e, c = d;
        else
          break a;
      }
  }
  function J2(a) {
    a = a[0];
    return a === void 0 ? null : a;
  }
  function K2(a) {
    var b = a[0];
    if (b !== void 0) {
      var c = a.pop();
      if (c !== b) {
        a[0] = c;
        a:
          for (var d = 0, e = a.length; d < e; ) {
            var m2 = 2 * (d + 1) - 1, n2 = a[m2], v2 = m2 + 1, r2 = a[v2];
            if (n2 !== void 0 && 0 > I2(n2, c))
              r2 !== void 0 && 0 > I2(r2, n2) ? (a[d] = r2, a[v2] = c, d = v2) : (a[d] = n2, a[m2] = c, d = m2);
            else if (r2 !== void 0 && 0 > I2(r2, c))
              a[d] = r2, a[v2] = c, d = v2;
            else
              break a;
          }
      }
      return b;
    }
    return null;
  }
  function I2(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return c !== 0 ? c : a.id - b.id;
  }
  var L2 = [], M2 = [], N2 = 1, O2 = null, P2 = 3, Q2 = false, R2 = false, S2 = false;
  function T2(a) {
    for (var b = J2(M2); b !== null; ) {
      if (b.callback === null)
        K2(M2);
      else if (b.startTime <= a)
        K2(M2), b.sortIndex = b.expirationTime, H2(L2, b);
      else
        break;
      b = J2(M2);
    }
  }
  function U2(a) {
    S2 = false;
    T2(a);
    if (!R2)
      if (J2(L2) !== null)
        R2 = true, f(V2);
      else {
        var b = J2(M2);
        b !== null && g(U2, b.startTime - a);
      }
  }
  function V2(a, b) {
    R2 = false;
    S2 && (S2 = false, h());
    Q2 = true;
    var c = P2;
    try {
      T2(b);
      for (O2 = J2(L2); O2 !== null && (!(O2.expirationTime > b) || a && !exports.unstable_shouldYield()); ) {
        var d = O2.callback;
        if (typeof d === "function") {
          O2.callback = null;
          P2 = O2.priorityLevel;
          var e = d(O2.expirationTime <= b);
          b = exports.unstable_now();
          typeof e === "function" ? O2.callback = e : O2 === J2(L2) && K2(L2);
          T2(b);
        } else
          K2(L2);
        O2 = J2(L2);
      }
      if (O2 !== null)
        var m2 = true;
      else {
        var n2 = J2(M2);
        n2 !== null && g(U2, n2.startTime - b);
        m2 = false;
      }
      return m2;
    } finally {
      O2 = null, P2 = c, Q2 = false;
    }
  }
  var W2 = k;
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    R2 || Q2 || (R2 = true, f(V2));
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return P2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return J2(L2);
  };
  exports.unstable_next = function(a) {
    switch (P2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = P2;
    }
    var c = P2;
    P2 = b;
    try {
      return a();
    } finally {
      P2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = W2;
  exports.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = P2;
    P2 = a;
    try {
      return b();
    } finally {
      P2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    typeof c === "object" && c !== null ? (c = c.delay, c = typeof c === "number" && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c + e;
    a = { id: N2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
    c > d ? (a.sortIndex = c, H2(M2, a), J2(L2) === null && a === J2(M2) && (S2 ? h() : S2 = true, g(U2, c - d))) : (a.sortIndex = e, H2(L2, a), R2 || Q2 || (R2 = true, f(V2)));
    return a;
  };
  exports.unstable_wrapCallback = function(a) {
    var b = P2;
    return function() {
      var c = P2;
      P2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        P2 = c;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = react.exports, m = objectAssign, r$1 = scheduler.exports;
function y(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!aa)
  throw Error(y(227));
var ba = new Set(), ca = {};
function da(a, b) {
  ea(a, b);
  ea(a + "Capture", b);
}
function ea(a, b) {
  ca[a] = b;
  for (a = 0; a < b.length; a++)
    ba.add(b[a]);
}
var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined"), ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ia = Object.prototype.hasOwnProperty, ja = {}, ka = {};
function la(a) {
  if (ia.call(ka, a))
    return true;
  if (ia.call(ja, a))
    return false;
  if (ha.test(a))
    return ka[a] = true;
  ja[a] = true;
  return false;
}
function ma(a, b, c, d) {
  if (c !== null && c.type === 0)
    return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d)
        return false;
      if (c !== null)
        return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return a !== "data-" && a !== "aria-";
    default:
      return false;
  }
}
function na(a, b, c, d) {
  if (b === null || typeof b === "undefined" || ma(a, b, c, d))
    return true;
  if (d)
    return false;
  if (c !== null)
    switch (c.type) {
      case 3:
        return !b;
      case 4:
        return b === false;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
  return false;
}
function B(a, b, c, d, e, f, g) {
  this.acceptsBooleans = b === 2 || b === 3 || b === 4;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f;
  this.removeEmptyString = g;
}
var D = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  D[a] = new B(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  D[b] = new B(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  D[a] = new B(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  D[a] = new B(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  D[a] = new B(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  D[a] = new B(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  D[a] = new B(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  D[a] = new B(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  D[a] = new B(a, 5, false, a.toLowerCase(), null, false, false);
});
var oa = /[\-:]([a-z])/g;
function pa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  D[a] = new B(a, 1, false, a.toLowerCase(), null, false, false);
});
D.xlinkHref = new B("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  D[a] = new B(a, 1, false, a.toLowerCase(), null, true, true);
});
function qa(a, b, c, d) {
  var e = D.hasOwnProperty(b) ? D[b] : null;
  var f = e !== null ? e.type === 0 : d ? false : !(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N" ? false : true;
  f || (na(b, c, e, d) && (c = null), d || e === null ? la(b) && (c === null ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = c === null ? e.type === 3 ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, c === null ? a.removeAttribute(b) : (e = e.type, c = e === 3 || e === 4 && c === true ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
}
var ra = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, sa = 60103, ta = 60106, ua = 60107, wa = 60108, xa = 60114, ya = 60109, za = 60110, Aa = 60112, Ba = 60113, Ca = 60120, Da = 60115, Ea = 60116, Fa = 60121, Ga = 60128, Ha = 60129, Ia = 60130, Ja = 60131;
if (typeof Symbol === "function" && Symbol.for) {
  var E$1 = Symbol.for;
  sa = E$1("react.element");
  ta = E$1("react.portal");
  ua = E$1("react.fragment");
  wa = E$1("react.strict_mode");
  xa = E$1("react.profiler");
  ya = E$1("react.provider");
  za = E$1("react.context");
  Aa = E$1("react.forward_ref");
  Ba = E$1("react.suspense");
  Ca = E$1("react.suspense_list");
  Da = E$1("react.memo");
  Ea = E$1("react.lazy");
  Fa = E$1("react.block");
  E$1("react.scope");
  Ga = E$1("react.opaque.id");
  Ha = E$1("react.debug_trace_mode");
  Ia = E$1("react.offscreen");
  Ja = E$1("react.legacy_hidden");
}
var Ka = typeof Symbol === "function" && Symbol.iterator;
function La(a) {
  if (a === null || typeof a !== "object")
    return null;
  a = Ka && a[Ka] || a["@@iterator"];
  return typeof a === "function" ? a : null;
}
var Ma;
function Na(a) {
  if (Ma === void 0)
    try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      Ma = b && b[1] || "";
    }
  return "\n" + Ma + a;
}
var Oa = false;
function Pa(a, b) {
  if (!a || Oa)
    return "";
  Oa = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b)
      if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (k) {
          var d = k;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (k) {
          d = k;
        }
        a.call(b.prototype);
      }
    else {
      try {
        throw Error();
      } catch (k) {
        d = k;
      }
      a();
    }
  } catch (k) {
    if (k && d && typeof k.stack === "string") {
      for (var e = k.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; )
        h--;
      for (; 1 <= g && 0 <= h; g--, h--)
        if (e[g] !== f[h]) {
          if (g !== 1 || h !== 1) {
            do
              if (g--, h--, 0 > h || e[g] !== f[h])
                return "\n" + e[g].replace(" at new ", " at ");
            while (1 <= g && 0 <= h);
          }
          break;
        }
    }
  } finally {
    Oa = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Na(a) : "";
}
function Qa(a) {
  switch (a.tag) {
    case 5:
      return Na(a.type);
    case 16:
      return Na("Lazy");
    case 13:
      return Na("Suspense");
    case 19:
      return Na("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Pa(a.type, false), a;
    case 11:
      return a = Pa(a.type.render, false), a;
    case 22:
      return a = Pa(a.type._render, false), a;
    case 1:
      return a = Pa(a.type, true), a;
    default:
      return "";
  }
}
function Ra(a) {
  if (a == null)
    return null;
  if (typeof a === "function")
    return a.displayName || a.name || null;
  if (typeof a === "string")
    return a;
  switch (a) {
    case ua:
      return "Fragment";
    case ta:
      return "Portal";
    case xa:
      return "Profiler";
    case wa:
      return "StrictMode";
    case Ba:
      return "Suspense";
    case Ca:
      return "SuspenseList";
  }
  if (typeof a === "object")
    switch (a.$$typeof) {
      case za:
        return (a.displayName || "Context") + ".Consumer";
      case ya:
        return (a._context.displayName || "Context") + ".Provider";
      case Aa:
        var b = a.render;
        b = b.displayName || b.name || "";
        return a.displayName || (b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef");
      case Da:
        return Ra(a.type);
      case Fa:
        return Ra(a._render);
      case Ea:
        b = a._payload;
        a = a._init;
        try {
          return Ra(a(b));
        } catch (c) {
        }
    }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && a.toLowerCase() === "input" && (b === "checkbox" || b === "radio");
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && typeof c !== "undefined" && typeof c.get === "function" && typeof c.set === "function") {
    var e = c.get, f = c.set;
    Object.defineProperty(a, b, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f.call(this, a2);
    } });
    Object.defineProperty(a, b, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b = a._valueTracker;
  if (!b)
    return true;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function Xa(a) {
  a = a || (typeof document !== "undefined" ? document : void 0);
  if (typeof a === "undefined")
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return m({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c != null ? c : a._wrapperState.initialChecked });
}
function Za(a, b) {
  var c = b.defaultValue == null ? "" : b.defaultValue, d = b.checked != null ? b.checked : b.defaultChecked;
  c = Sa(b.value != null ? b.value : c);
  a._wrapperState = { initialChecked: d, initialValue: c, controlled: b.type === "checkbox" || b.type === "radio" ? b.checked != null : b.value != null };
}
function $a(a, b) {
  b = b.checked;
  b != null && qa(a, "checked", b, false);
}
function ab(a, b) {
  $a(a, b);
  var c = Sa(b.value), d = b.type;
  if (c != null)
    if (d === "number") {
      if (c === 0 && a.value === "" || a.value != c)
        a.value = "" + c;
    } else
      a.value !== "" + c && (a.value = "" + c);
  else if (d === "submit" || d === "reset") {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? bb(a, b.type, c) : b.hasOwnProperty("defaultValue") && bb(a, b.type, Sa(b.defaultValue));
  b.checked == null && b.defaultChecked != null && (a.defaultChecked = !!b.defaultChecked);
}
function cb(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!(d !== "submit" && d !== "reset" || b.value !== void 0 && b.value !== null))
      return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  c !== "" && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  c !== "" && (a.name = c);
}
function bb(a, b, c) {
  if (b !== "number" || Xa(a.ownerDocument) !== a)
    c == null ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
function db(a) {
  var b = "";
  aa.Children.forEach(a, function(a2) {
    a2 != null && (b += a2);
  });
  return b;
}
function eb(a, b) {
  a = m({ children: void 0 }, b);
  if (b = db(b.children))
    a.children = b;
  return a;
}
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++)
      b["$" + c[e]] = true;
    for (c = 0; c < a.length; c++)
      e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      b !== null || a[e].disabled || (b = a[e]);
    }
    b !== null && (b.selected = true);
  }
}
function gb(a, b) {
  if (b.dangerouslySetInnerHTML != null)
    throw Error(y(91));
  return m({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b) {
  var c = b.value;
  if (c == null) {
    c = b.children;
    b = b.defaultValue;
    if (c != null) {
      if (b != null)
        throw Error(y(92));
      if (Array.isArray(c)) {
        if (!(1 >= c.length))
          throw Error(y(93));
        c = c[0];
      }
      b = c;
    }
    b == null && (b = "");
    c = b;
  }
  a._wrapperState = { initialValue: Sa(c) };
}
function ib(a, b) {
  var c = Sa(b.value), d = Sa(b.defaultValue);
  c != null && (c = "" + c, c !== a.value && (a.value = c), b.defaultValue == null && a.defaultValue !== c && (a.defaultValue = c));
  d != null && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && b !== "" && b !== null && (a.value = b);
}
var kb = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
function lb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mb(a, b) {
  return a == null || a === "http://www.w3.org/1999/xhtml" ? lb(b) : a === "http://www.w3.org/2000/svg" && b === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a;
}
var nb, ob = function(a) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e);
    });
  } : a;
}(function(a, b) {
  if (a.namespaceURI !== kb.svg || "innerHTML" in a)
    a.innerHTML = b;
  else {
    nb = nb || document.createElement("div");
    nb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = nb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b.firstChild; )
      a.appendChild(b.firstChild);
  }
});
function pb(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && c.nodeType === 3) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var qb = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, rb = ["Webkit", "ms", "Moz", "O"];
Object.keys(qb).forEach(function(a) {
  rb.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    qb[b] = qb[a];
  });
});
function sb(a, b, c) {
  return b == null || typeof b === "boolean" || b === "" ? "" : c || typeof b !== "number" || b === 0 || qb.hasOwnProperty(a) && qb[a] ? ("" + b).trim() : b + "px";
}
function tb(a, b) {
  a = a.style;
  for (var c in b)
    if (b.hasOwnProperty(c)) {
      var d = c.indexOf("--") === 0, e = sb(c, b[c], d);
      c === "float" && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
}
var ub = m({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function vb(a, b) {
  if (b) {
    if (ub[a] && (b.children != null || b.dangerouslySetInnerHTML != null))
      throw Error(y(137, a));
    if (b.dangerouslySetInnerHTML != null) {
      if (b.children != null)
        throw Error(y(60));
      if (!(typeof b.dangerouslySetInnerHTML === "object" && "__html" in b.dangerouslySetInnerHTML))
        throw Error(y(61));
    }
    if (b.style != null && typeof b.style !== "object")
      throw Error(y(62));
  }
}
function wb(a, b) {
  if (a.indexOf("-") === -1)
    return typeof b.is === "string";
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return a.nodeType === 3 ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if (typeof yb !== "function")
      throw Error(y(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b)
      for (a = 0; a < b.length; a++)
        Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb(a, b, c, d, e) {
  return a(b, c, d, e);
}
function Ib() {
}
var Jb = Gb, Kb = false, Lb = false;
function Mb() {
  if (zb !== null || Ab !== null)
    Ib(), Fb();
}
function Nb(a, b, c) {
  if (Lb)
    return a(b, c);
  Lb = true;
  try {
    return Jb(a, b, c);
  } finally {
    Lb = false, Mb();
  }
}
function Ob(a, b) {
  var c = a.stateNode;
  if (c === null)
    return null;
  var d = Db(c);
  if (d === null)
    return null;
  c = d[b];
  a:
    switch (b) {
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
        (d = !d.disabled) || (a = a.type, d = !(a === "button" || a === "input" || a === "select" || a === "textarea"));
        a = !d;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c && typeof c !== "function")
    throw Error(y(231, b, typeof c));
  return c;
}
var Pb = false;
if (fa)
  try {
    var Qb = {};
    Object.defineProperty(Qb, "passive", { get: function() {
      Pb = true;
    } });
    window.addEventListener("test", Qb, Qb);
    window.removeEventListener("test", Qb, Qb);
  } catch (a) {
    Pb = false;
  }
function Rb(a, b, c, d, e, f, g, h, k) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l2);
  } catch (n2) {
    this.onError(n2);
  }
}
var Sb = false, Tb = null, Ub = false, Vb = null, Wb = { onError: function(a) {
  Sb = true;
  Tb = a;
} };
function Xb(a, b, c, d, e, f, g, h, k) {
  Sb = false;
  Tb = null;
  Rb.apply(Wb, arguments);
}
function Yb(a, b, c, d, e, f, g, h, k) {
  Xb.apply(this, arguments);
  if (Sb) {
    if (Sb) {
      var l2 = Tb;
      Sb = false;
      Tb = null;
    } else
      throw Error(y(198));
    Ub || (Ub = true, Vb = l2);
  }
}
function Zb(a) {
  var b = a, c = a;
  if (a.alternate)
    for (; b.return; )
      b = b.return;
  else {
    a = b;
    do
      b = a, (b.flags & 1026) !== 0 && (c = b.return), a = b.return;
    while (a);
  }
  return b.tag === 3 ? c : null;
}
function $b(a) {
  if (a.tag === 13) {
    var b = a.memoizedState;
    b === null && (a = a.alternate, a !== null && (b = a.memoizedState));
    if (b !== null)
      return b.dehydrated;
  }
  return null;
}
function ac(a) {
  if (Zb(a) !== a)
    throw Error(y(188));
}
function bc(a) {
  var b = a.alternate;
  if (!b) {
    b = Zb(a);
    if (b === null)
      throw Error(y(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e = c.return;
    if (e === null)
      break;
    var f = e.alternate;
    if (f === null) {
      d = e.return;
      if (d !== null) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f.child) {
      for (f = e.child; f; ) {
        if (f === c)
          return ac(e), a;
        if (f === d)
          return ac(e), b;
        f = f.sibling;
      }
      throw Error(y(188));
    }
    if (c.return !== d.return)
      c = e, d = f;
    else {
      for (var g = false, h = e.child; h; ) {
        if (h === c) {
          g = true;
          c = e;
          d = f;
          break;
        }
        if (h === d) {
          g = true;
          d = e;
          c = f;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f.child; h; ) {
          if (h === c) {
            g = true;
            c = f;
            d = e;
            break;
          }
          if (h === d) {
            g = true;
            d = f;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g)
          throw Error(y(189));
      }
    }
    if (c.alternate !== d)
      throw Error(y(190));
  }
  if (c.tag !== 3)
    throw Error(y(188));
  return c.stateNode.current === c ? a : b;
}
function cc(a) {
  a = bc(a);
  if (!a)
    return null;
  for (var b = a; ; ) {
    if (b.tag === 5 || b.tag === 6)
      return b;
    if (b.child)
      b.child.return = b, b = b.child;
    else {
      if (b === a)
        break;
      for (; !b.sibling; ) {
        if (!b.return || b.return === a)
          return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return null;
}
function dc(a, b) {
  for (var c = a.alternate; b !== null; ) {
    if (b === a || b === c)
      return true;
    b = b.return;
  }
  return false;
}
var ec, fc, gc, hc, ic = false, jc = [], kc = null, lc = null, mc = null, nc = new Map(), oc = new Map(), pc = [], qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a, b, c, d, e) {
  return { blockedOn: a, domEventName: b, eventSystemFlags: c | 16, nativeEvent: e, targetContainers: [d] };
}
function sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      kc = null;
      break;
    case "dragenter":
    case "dragleave":
      lc = null;
      break;
    case "mouseover":
    case "mouseout":
      mc = null;
      break;
    case "pointerover":
    case "pointerout":
      nc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oc.delete(b.pointerId);
  }
}
function tc(a, b, c, d, e, f) {
  if (a === null || a.nativeEvent !== f)
    return a = rc(b, c, d, e, f), b !== null && (b = Cb(b), b !== null && fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  e !== null && b.indexOf(e) === -1 && b.push(e);
  return a;
}
function uc(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return kc = tc(kc, a, b, c, d, e), true;
    case "dragenter":
      return lc = tc(lc, a, b, c, d, e), true;
    case "mouseover":
      return mc = tc(mc, a, b, c, d, e), true;
    case "pointerover":
      var f = e.pointerId;
      nc.set(f, tc(nc.get(f) || null, a, b, c, d, e));
      return true;
    case "gotpointercapture":
      return f = e.pointerId, oc.set(f, tc(oc.get(f) || null, a, b, c, d, e)), true;
  }
  return false;
}
function vc(a) {
  var b = wc(a.target);
  if (b !== null) {
    var c = Zb(b);
    if (c !== null) {
      if (b = c.tag, b === 13) {
        if (b = $b(c), b !== null) {
          a.blockedOn = b;
          hc(a.lanePriority, function() {
            r$1.unstable_runWithPriority(a.priority, function() {
              gc(c);
            });
          });
          return;
        }
      } else if (b === 3 && c.stateNode.hydrate) {
        a.blockedOn = c.tag === 3 ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function xc(a) {
  if (a.blockedOn !== null)
    return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (c !== null)
      return b = Cb(c), b !== null && fc(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function zc(a, b, c) {
  xc(a) && c.delete(b);
}
function Ac() {
  for (ic = false; 0 < jc.length; ) {
    var a = jc[0];
    if (a.blockedOn !== null) {
      a = Cb(a.blockedOn);
      a !== null && ec(a);
      break;
    }
    for (var b = a.targetContainers; 0 < b.length; ) {
      var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
      if (c !== null) {
        a.blockedOn = c;
        break;
      }
      b.shift();
    }
    a.blockedOn === null && jc.shift();
  }
  kc !== null && xc(kc) && (kc = null);
  lc !== null && xc(lc) && (lc = null);
  mc !== null && xc(mc) && (mc = null);
  nc.forEach(zc);
  oc.forEach(zc);
}
function Bc(a, b) {
  a.blockedOn === b && (a.blockedOn = null, ic || (ic = true, r$1.unstable_scheduleCallback(r$1.unstable_NormalPriority, Ac)));
}
function Cc(a) {
  function b(b2) {
    return Bc(b2, a);
  }
  if (0 < jc.length) {
    Bc(jc[0], a);
    for (var c = 1; c < jc.length; c++) {
      var d = jc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  kc !== null && Bc(kc, a);
  lc !== null && Bc(lc, a);
  mc !== null && Bc(mc, a);
  nc.forEach(b);
  oc.forEach(b);
  for (c = 0; c < pc.length; c++)
    d = pc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < pc.length && (c = pc[0], c.blockedOn === null); )
    vc(c), c.blockedOn === null && pc.shift();
}
function Dc(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var Ec = { animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd") }, Fc = {}, Gc = {};
fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
function Hc(a) {
  if (Fc[a])
    return Fc[a];
  if (!Ec[a])
    return a;
  var b = Ec[a], c;
  for (c in b)
    if (b.hasOwnProperty(c) && c in Gc)
      return Fc[a] = b[c];
  return a;
}
var Ic = Hc("animationend"), Jc = Hc("animationiteration"), Kc = Hc("animationstart"), Lc = Hc("transitionend"), Mc = new Map(), Nc = new Map(), Oc = [
  "abort",
  "abort",
  Ic,
  "animationEnd",
  Jc,
  "animationIteration",
  Kc,
  "animationStart",
  "canplay",
  "canPlay",
  "canplaythrough",
  "canPlayThrough",
  "durationchange",
  "durationChange",
  "emptied",
  "emptied",
  "encrypted",
  "encrypted",
  "ended",
  "ended",
  "error",
  "error",
  "gotpointercapture",
  "gotPointerCapture",
  "load",
  "load",
  "loadeddata",
  "loadedData",
  "loadedmetadata",
  "loadedMetadata",
  "loadstart",
  "loadStart",
  "lostpointercapture",
  "lostPointerCapture",
  "playing",
  "playing",
  "progress",
  "progress",
  "seeking",
  "seeking",
  "stalled",
  "stalled",
  "suspend",
  "suspend",
  "timeupdate",
  "timeUpdate",
  Lc,
  "transitionEnd",
  "waiting",
  "waiting"
];
function Pc(a, b) {
  for (var c = 0; c < a.length; c += 2) {
    var d = a[c], e = a[c + 1];
    e = "on" + (e[0].toUpperCase() + e.slice(1));
    Nc.set(d, b);
    Mc.set(d, e);
    da(e, [d]);
  }
}
var Qc = r$1.unstable_now;
Qc();
var F = 8;
function Rc(a) {
  if ((1 & a) !== 0)
    return F = 15, 1;
  if ((2 & a) !== 0)
    return F = 14, 2;
  if ((4 & a) !== 0)
    return F = 13, 4;
  var b = 24 & a;
  if (b !== 0)
    return F = 12, b;
  if ((a & 32) !== 0)
    return F = 11, 32;
  b = 192 & a;
  if (b !== 0)
    return F = 10, b;
  if ((a & 256) !== 0)
    return F = 9, 256;
  b = 3584 & a;
  if (b !== 0)
    return F = 8, b;
  if ((a & 4096) !== 0)
    return F = 7, 4096;
  b = 4186112 & a;
  if (b !== 0)
    return F = 6, b;
  b = 62914560 & a;
  if (b !== 0)
    return F = 5, b;
  if (a & 67108864)
    return F = 4, 67108864;
  if ((a & 134217728) !== 0)
    return F = 3, 134217728;
  b = 805306368 & a;
  if (b !== 0)
    return F = 2, b;
  if ((1073741824 & a) !== 0)
    return F = 1, 1073741824;
  F = 8;
  return a;
}
function Sc(a) {
  switch (a) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Tc(a) {
  switch (a) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(y(358, a));
  }
}
function Uc(a, b) {
  var c = a.pendingLanes;
  if (c === 0)
    return F = 0;
  var d = 0, e = 0, f = a.expiredLanes, g = a.suspendedLanes, h = a.pingedLanes;
  if (f !== 0)
    d = f, e = F = 15;
  else if (f = c & 134217727, f !== 0) {
    var k = f & ~g;
    k !== 0 ? (d = Rc(k), e = F) : (h &= f, h !== 0 && (d = Rc(h), e = F));
  } else
    f = c & ~g, f !== 0 ? (d = Rc(f), e = F) : h !== 0 && (d = Rc(h), e = F);
  if (d === 0)
    return 0;
  d = 31 - Vc(d);
  d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;
  if (b !== 0 && b !== d && (b & g) === 0) {
    Rc(b);
    if (e <= F)
      return b;
    F = e;
  }
  b = a.entangledLanes;
  if (b !== 0)
    for (a = a.entanglements, b &= d; 0 < b; )
      c = 31 - Vc(b), e = 1 << c, d |= a[c], b &= ~e;
  return d;
}
function Wc(a) {
  a = a.pendingLanes & -1073741825;
  return a !== 0 ? a : a & 1073741824 ? 1073741824 : 0;
}
function Xc(a, b) {
  switch (a) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return a = Yc(24 & ~b), a === 0 ? Xc(10, b) : a;
    case 10:
      return a = Yc(192 & ~b), a === 0 ? Xc(8, b) : a;
    case 8:
      return a = Yc(3584 & ~b), a === 0 && (a = Yc(4186112 & ~b), a === 0 && (a = 512)), a;
    case 2:
      return b = Yc(805306368 & ~b), b === 0 && (b = 268435456), b;
  }
  throw Error(y(358, a));
}
function Yc(a) {
  return a & -a;
}
function Zc(a) {
  for (var b = [], c = 0; 31 > c; c++)
    b.push(a);
  return b;
}
function $c(a, b, c) {
  a.pendingLanes |= b;
  var d = b - 1;
  a.suspendedLanes &= d;
  a.pingedLanes &= d;
  a = a.eventTimes;
  b = 31 - Vc(b);
  a[b] = c;
}
var Vc = Math.clz32 ? Math.clz32 : ad, bd = Math.log, cd = Math.LN2;
function ad(a) {
  return a === 0 ? 32 : 31 - (bd(a) / cd | 0) | 0;
}
var dd = r$1.unstable_UserBlockingPriority, ed = r$1.unstable_runWithPriority, fd = true;
function gd(a, b, c, d) {
  Kb || Ib();
  var e = hd, f = Kb;
  Kb = true;
  try {
    Hb(e, a, b, c, d);
  } finally {
    (Kb = f) || Mb();
  }
}
function id(a, b, c, d) {
  ed(dd, hd.bind(null, a, b, c, d));
}
function hd(a, b, c, d) {
  if (fd) {
    var e;
    if ((e = (b & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a))
      a = rc(null, a, b, c, d), jc.push(a);
    else {
      var f = yc(a, b, c, d);
      if (f === null)
        e && sc(a, d);
      else {
        if (e) {
          if (-1 < qc.indexOf(a)) {
            a = rc(f, a, b, c, d);
            jc.push(a);
            return;
          }
          if (uc(f, a, b, c, d))
            return;
          sc(a, d);
        }
        jd(a, b, d, null, c);
      }
    }
  }
}
function yc(a, b, c, d) {
  var e = xb(d);
  e = wc(e);
  if (e !== null) {
    var f = Zb(e);
    if (f === null)
      e = null;
    else {
      var g = f.tag;
      if (g === 13) {
        e = $b(f);
        if (e !== null)
          return e;
        e = null;
      } else if (g === 3) {
        if (f.stateNode.hydrate)
          return f.tag === 3 ? f.stateNode.containerInfo : null;
        e = null;
      } else
        f !== e && (e = null);
    }
  }
  jd(a, b, d, e, c);
  return null;
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++)
    ;
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e[f - d]; d++)
    ;
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, a === 0 && b === 13 && (a = 13)) : a = b;
  a === 10 && (a = 13);
  return 32 <= a || a === 13 ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b(b2, d, e, f, g) {
    this._reactName = b2;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f;
    this.target = g;
    this.currentTarget = null;
    for (var c in a)
      a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
    this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === false) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  m(b.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : typeof a2.returnValue !== "unknown" && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : typeof a2.cancelBubble !== "unknown" && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = m({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = m({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return a.relatedTarget === void 0 ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && a.type === "mousemove" ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = m({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = m({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = m({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = m({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = m({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
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
}, Nd = {
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
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
}
function zd() {
  return Pd;
}
var Qd = m({}, ud, { key: function(a) {
  if (a.key) {
    var b = Md[a.key] || a.key;
    if (b !== "Unidentified")
      return b;
  }
  return a.type === "keypress" ? (a = od(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return a.type === "keypress" ? od(a) : 0;
}, keyCode: function(a) {
  return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
}, which: function(a) {
  return a.type === "keypress" ? od(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = m({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = m({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = m({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = m({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = fa && "CompositionEvent" in window, be = null;
fa && "documentMode" in document && (be = document.documentMode);
var ce = fa && "TextEvent" in window && !be, de = fa && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return $d.indexOf(b.keyCode) !== -1;
    case "keydown":
      return b.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return typeof a === "object" && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (b.which !== 32)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie)
    return a === "compositionend" || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length)
          return b.char;
        if (b.which)
          return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && b.locale !== "ko" ? null : b.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b === "input" ? !!le[a.type] : b === "textarea" ? true : false;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b))
    return a;
}
function ve(a, b) {
  if (a === "change")
    return b;
}
var we = false;
if (fa) {
  var xe;
  if (fa) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = typeof ze.oninput === "function";
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if (a.propertyName === "value" && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    a = re;
    if (Kb)
      a(b);
    else {
      Kb = true;
      try {
        Gb(a, b);
      } finally {
        Kb = false, Mb();
      }
    }
  }
}
function Ce(a, b, c) {
  a === "focusin" ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : a === "focusout" && Ae();
}
function De(a) {
  if (a === "selectionchange" || a === "keyup" || a === "keydown")
    return te(qe);
}
function Ee(a, b) {
  if (a === "click")
    return te(b);
}
function Fe(a, b) {
  if (a === "input" || a === "change")
    return te(b);
}
function Ge(a, b) {
  return a === b && (a !== 0 || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = typeof Object.is === "function" ? Object.is : Ge, Ie = Object.prototype.hasOwnProperty;
function Je(a, b) {
  if (He(a, b))
    return true;
  if (typeof a !== "object" || a === null || typeof b !== "object" || b === null)
    return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length)
    return false;
  for (d = 0; d < c.length; d++)
    if (!Ie.call(b, c[d]) || !He(a[c[d]], b[c[d]]))
      return false;
  return true;
}
function Ke(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Le(a, b) {
  var c = Ke(a);
  a = 0;
  for (var d; c; ) {
    if (c.nodeType === 3) {
      d = a + c.textContent.length;
      if (a <= b && d >= b)
        return { node: c, offset: b - a };
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Ke(c);
  }
}
function Me(a, b) {
  return a && b ? a === b ? true : a && a.nodeType === 3 ? false : b && b.nodeType === 3 ? Me(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Ne() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = typeof b.contentWindow.location.href === "string";
    } catch (d) {
      c = false;
    }
    if (c)
      a = b.contentWindow;
    else
      break;
    b = Xa(a.document);
  }
  return b;
}
function Oe(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && (b === "input" && (a.type === "text" || a.type === "search" || a.type === "tel" || a.type === "url" || a.type === "password") || b === "textarea" || a.contentEditable === "true");
}
var Pe = fa && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
  Te || Qe == null || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Oe(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Je(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Pc(Oc, 2);
for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++)
  Nc.set(Ve[We], 0);
ea("onMouseEnter", ["mouseout", "mouseover"]);
ea("onMouseLeave", ["mouseout", "mouseover"]);
ea("onPointerEnter", ["pointerout", "pointerover"]);
ea("onPointerLeave", ["pointerout", "pointerover"]);
da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Yb(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = (b & 4) !== 0;
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f = void 0;
      if (b)
        for (var g = d.length - 1; 0 <= g; g--) {
          var h = d[g], k = h.instance, l2 = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped())
            break a;
          Ze(e, h, l2);
          f = k;
        }
      else
        for (g = 0; g < d.length; g++) {
          h = d[g];
          k = h.instance;
          l2 = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped())
            break a;
          Ze(e, h, l2);
          f = k;
        }
    }
  }
  if (Ub)
    throw a = Vb, Ub = false, Vb = null, a;
}
function G(a, b) {
  var c = $e(b), d = a + "__bubble";
  c.has(d) || (af(b, a, 2, false), c.add(d));
}
var bf = "_reactListening" + Math.random().toString(36).slice(2);
function cf(a) {
  a[bf] || (a[bf] = true, ba.forEach(function(b) {
    Ye.has(b) || df(b, false, a, null);
    df(b, true, a, null);
  }));
}
function df(a, b, c, d) {
  var e = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f = c;
  a === "selectionchange" && c.nodeType !== 9 && (f = c.ownerDocument);
  if (d !== null && !b && Ye.has(a)) {
    if (a !== "scroll")
      return;
    e |= 2;
    f = d;
  }
  var g = $e(f), h = a + "__" + (b ? "capture" : "bubble");
  g.has(h) || (b && (e |= 4), af(f, a, e, b), g.add(h));
}
function af(a, b, c, d) {
  var e = Nc.get(b);
  switch (e === void 0 ? 2 : e) {
    case 0:
      e = gd;
      break;
    case 1:
      e = id;
      break;
    default:
      e = hd;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !Pb || b !== "touchstart" && b !== "touchmove" && b !== "wheel" || (e = true);
  d ? e !== void 0 ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : e !== void 0 ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
}
function jd(a, b, c, d, e) {
  var f = d;
  if ((b & 1) === 0 && (b & 2) === 0 && d !== null)
    a:
      for (; ; ) {
        if (d === null)
          return;
        var g = d.tag;
        if (g === 3 || g === 4) {
          var h = d.stateNode.containerInfo;
          if (h === e || h.nodeType === 8 && h.parentNode === e)
            break;
          if (g === 4)
            for (g = d.return; g !== null; ) {
              var k = g.tag;
              if (k === 3 || k === 4) {
                if (k = g.stateNode.containerInfo, k === e || k.nodeType === 8 && k.parentNode === e)
                  return;
              }
              g = g.return;
            }
          for (; h !== null; ) {
            g = wc(h);
            if (g === null)
              return;
            k = g.tag;
            if (k === 5 || k === 6) {
              d = f = g;
              continue a;
            }
            h = h.parentNode;
          }
        }
        d = d.return;
      }
  Nb(function() {
    var d2 = f, e2 = xb(c), g2 = [];
    a: {
      var h2 = Mc.get(a);
      if (h2 !== void 0) {
        var k2 = td, x2 = a;
        switch (a) {
          case "keypress":
            if (od(c) === 0)
              break a;
          case "keydown":
          case "keyup":
            k2 = Rd;
            break;
          case "focusin":
            x2 = "focus";
            k2 = Fd;
            break;
          case "focusout":
            x2 = "blur";
            k2 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k2 = Fd;
            break;
          case "click":
            if (c.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k2 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k2 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k2 = Vd;
            break;
          case Ic:
          case Jc:
          case Kc:
            k2 = Hd;
            break;
          case Lc:
            k2 = Xd;
            break;
          case "scroll":
            k2 = vd;
            break;
          case "wheel":
            k2 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k2 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k2 = Td;
        }
        var w = (b & 4) !== 0, z2 = !w && a === "scroll", u2 = w ? h2 !== null ? h2 + "Capture" : null : h2;
        w = [];
        for (var t2 = d2, q2; t2 !== null; ) {
          q2 = t2;
          var v2 = q2.stateNode;
          q2.tag === 5 && v2 !== null && (q2 = v2, u2 !== null && (v2 = Ob(t2, u2), v2 != null && w.push(ef(t2, v2, q2))));
          if (z2)
            break;
          t2 = t2.return;
        }
        0 < w.length && (h2 = new k2(h2, x2, null, c, e2), g2.push({ event: h2, listeners: w }));
      }
    }
    if ((b & 7) === 0) {
      a: {
        h2 = a === "mouseover" || a === "pointerover";
        k2 = a === "mouseout" || a === "pointerout";
        if (h2 && (b & 16) === 0 && (x2 = c.relatedTarget || c.fromElement) && (wc(x2) || x2[ff]))
          break a;
        if (k2 || h2) {
          h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
          if (k2) {
            if (x2 = c.relatedTarget || c.toElement, k2 = d2, x2 = x2 ? wc(x2) : null, x2 !== null && (z2 = Zb(x2), x2 !== z2 || x2.tag !== 5 && x2.tag !== 6))
              x2 = null;
          } else
            k2 = null, x2 = d2;
          if (k2 !== x2) {
            w = Bd;
            v2 = "onMouseLeave";
            u2 = "onMouseEnter";
            t2 = "mouse";
            if (a === "pointerout" || a === "pointerover")
              w = Td, v2 = "onPointerLeave", u2 = "onPointerEnter", t2 = "pointer";
            z2 = k2 == null ? h2 : ue(k2);
            q2 = x2 == null ? h2 : ue(x2);
            h2 = new w(v2, t2 + "leave", k2, c, e2);
            h2.target = z2;
            h2.relatedTarget = q2;
            v2 = null;
            wc(e2) === d2 && (w = new w(u2, t2 + "enter", x2, c, e2), w.target = q2, w.relatedTarget = z2, v2 = w);
            z2 = v2;
            if (k2 && x2)
              b: {
                w = k2;
                u2 = x2;
                t2 = 0;
                for (q2 = w; q2; q2 = gf(q2))
                  t2++;
                q2 = 0;
                for (v2 = u2; v2; v2 = gf(v2))
                  q2++;
                for (; 0 < t2 - q2; )
                  w = gf(w), t2--;
                for (; 0 < q2 - t2; )
                  u2 = gf(u2), q2--;
                for (; t2--; ) {
                  if (w === u2 || u2 !== null && w === u2.alternate)
                    break b;
                  w = gf(w);
                  u2 = gf(u2);
                }
                w = null;
              }
            else
              w = null;
            k2 !== null && hf(g2, h2, k2, w, false);
            x2 !== null && z2 !== null && hf(g2, z2, x2, w, true);
          }
        }
      }
      a: {
        h2 = d2 ? ue(d2) : window;
        k2 = h2.nodeName && h2.nodeName.toLowerCase();
        if (k2 === "select" || k2 === "input" && h2.type === "file")
          var J2 = ve;
        else if (me(h2))
          if (we)
            J2 = Fe;
          else {
            J2 = De;
            var K2 = Ce;
          }
        else
          (k2 = h2.nodeName) && k2.toLowerCase() === "input" && (h2.type === "checkbox" || h2.type === "radio") && (J2 = Ee);
        if (J2 && (J2 = J2(a, d2))) {
          ne(g2, J2, c, e2);
          break a;
        }
        K2 && K2(a, h2, d2);
        a === "focusout" && (K2 = h2._wrapperState) && K2.controlled && h2.type === "number" && bb(h2, "number", h2.value);
      }
      K2 = d2 ? ue(d2) : window;
      switch (a) {
        case "focusin":
          if (me(K2) || K2.contentEditable === "true")
            Qe = K2, Re = d2, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g2, c, e2);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g2, c, e2);
      }
      var Q2;
      if (ae)
        b: {
          switch (a) {
            case "compositionstart":
              var L2 = "onCompositionStart";
              break b;
            case "compositionend":
              L2 = "onCompositionEnd";
              break b;
            case "compositionupdate":
              L2 = "onCompositionUpdate";
              break b;
          }
          L2 = void 0;
        }
      else
        ie ? ge(a, c) && (L2 = "onCompositionEnd") : a === "keydown" && c.keyCode === 229 && (L2 = "onCompositionStart");
      L2 && (de && c.locale !== "ko" && (ie || L2 !== "onCompositionStart" ? L2 === "onCompositionEnd" && ie && (Q2 = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K2 = oe(d2, L2), 0 < K2.length && (L2 = new Ld(L2, a, null, c, e2), g2.push({ event: L2, listeners: K2 }), Q2 ? L2.data = Q2 : (Q2 = he(c), Q2 !== null && (L2.data = Q2))));
      if (Q2 = ce ? je(a, c) : ke(a, c))
        d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = Q2);
    }
    se(g2, b);
  });
}
function ef(a, b, c) {
  return { instance: a, listener: b, currentTarget: c };
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; a !== null; ) {
    var e = a, f = e.stateNode;
    e.tag === 5 && f !== null && (e = f, f = Ob(a, c), f != null && d.unshift(ef(a, f, e)), f = Ob(a, b), f != null && d.push(ef(a, f, e)));
    a = a.return;
  }
  return d;
}
function gf(a) {
  if (a === null)
    return null;
  do
    a = a.return;
  while (a && a.tag !== 5);
  return a ? a : null;
}
function hf(a, b, c, d, e) {
  for (var f = b._reactName, g = []; c !== null && c !== d; ) {
    var h = c, k = h.alternate, l2 = h.stateNode;
    if (k !== null && k === d)
      break;
    h.tag === 5 && l2 !== null && (h = l2, e ? (k = Ob(c, f), k != null && g.unshift(ef(c, k, h))) : e || (k = Ob(c, f), k != null && g.push(ef(c, k, h))));
    c = c.return;
  }
  g.length !== 0 && a.push({ event: b, listeners: g });
}
function jf() {
}
var kf = null, lf = null;
function mf(a, b) {
  switch (a) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b.autoFocus;
  }
  return false;
}
function nf(a, b) {
  return a === "textarea" || a === "option" || a === "noscript" || typeof b.children === "string" || typeof b.children === "number" || typeof b.dangerouslySetInnerHTML === "object" && b.dangerouslySetInnerHTML !== null && b.dangerouslySetInnerHTML.__html != null;
}
var of = typeof setTimeout === "function" ? setTimeout : void 0, pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
function qf(a) {
  a.nodeType === 1 ? a.textContent = "" : a.nodeType === 9 && (a = a.body, a != null && (a.textContent = ""));
}
function rf(a) {
  for (; a != null; a = a.nextSibling) {
    var b = a.nodeType;
    if (b === 1 || b === 3)
      break;
  }
  return a;
}
function sf(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (a.nodeType === 8) {
      var c = a.data;
      if (c === "$" || c === "$!" || c === "$?") {
        if (b === 0)
          return a;
        b--;
      } else
        c === "/$" && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var tf = 0;
function uf(a) {
  return { $$typeof: Ga, toString: a, valueOf: a };
}
var vf = Math.random().toString(36).slice(2), wf = "__reactFiber$" + vf, xf = "__reactProps$" + vf, ff = "__reactContainer$" + vf, yf = "__reactEvents$" + vf;
function wc(a) {
  var b = a[wf];
  if (b)
    return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[ff] || c[wf]) {
      c = b.alternate;
      if (b.child !== null || c !== null && c.child !== null)
        for (a = sf(a); a !== null; ) {
          if (c = a[wf])
            return c;
          a = sf(a);
        }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[wf] || a[ff];
  return !a || a.tag !== 5 && a.tag !== 6 && a.tag !== 13 && a.tag !== 3 ? null : a;
}
function ue(a) {
  if (a.tag === 5 || a.tag === 6)
    return a.stateNode;
  throw Error(y(33));
}
function Db(a) {
  return a[xf] || null;
}
function $e(a) {
  var b = a[yf];
  b === void 0 && (b = a[yf] = new Set());
  return b;
}
var zf = [], Af = -1;
function Bf(a) {
  return { current: a };
}
function H(a) {
  0 > Af || (a.current = zf[Af], zf[Af] = null, Af--);
}
function I(a, b) {
  Af++;
  zf[Af] = a.current;
  a.current = b;
}
var Cf = {}, M = Bf(Cf), N = Bf(false), Df = Cf;
function Ef(a, b) {
  var c = a.type.contextTypes;
  if (!c)
    return Cf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
    return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f;
  for (f in c)
    e[f] = b[f];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Ff(a) {
  a = a.childContextTypes;
  return a !== null && a !== void 0;
}
function Gf() {
  H(N);
  H(M);
}
function Hf(a, b, c) {
  if (M.current !== Cf)
    throw Error(y(168));
  I(M, b);
  I(N, c);
}
function If(a, b, c) {
  var d = a.stateNode;
  a = b.childContextTypes;
  if (typeof d.getChildContext !== "function")
    return c;
  d = d.getChildContext();
  for (var e in d)
    if (!(e in a))
      throw Error(y(108, Ra(b) || "Unknown", e));
  return m({}, c, d);
}
function Jf(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Cf;
  Df = M.current;
  I(M, a);
  I(N, N.current);
  return true;
}
function Kf(a, b, c) {
  var d = a.stateNode;
  if (!d)
    throw Error(y(169));
  c ? (a = If(a, b, Df), d.__reactInternalMemoizedMergedChildContext = a, H(N), H(M), I(M, a)) : H(N);
  I(N, c);
}
var Lf = null, Mf = null, Nf = r$1.unstable_runWithPriority, Of = r$1.unstable_scheduleCallback, Pf = r$1.unstable_cancelCallback, Qf = r$1.unstable_shouldYield, Rf = r$1.unstable_requestPaint, Sf = r$1.unstable_now, Tf = r$1.unstable_getCurrentPriorityLevel, Uf = r$1.unstable_ImmediatePriority, Vf = r$1.unstable_UserBlockingPriority, Wf = r$1.unstable_NormalPriority, Xf = r$1.unstable_LowPriority, Yf = r$1.unstable_IdlePriority, Zf = {}, $f = Rf !== void 0 ? Rf : function() {
}, ag = null, bg = null, cg = false, dg = Sf(), O = 1e4 > dg ? Sf : function() {
  return Sf() - dg;
};
function eg() {
  switch (Tf()) {
    case Uf:
      return 99;
    case Vf:
      return 98;
    case Wf:
      return 97;
    case Xf:
      return 96;
    case Yf:
      return 95;
    default:
      throw Error(y(332));
  }
}
function fg(a) {
  switch (a) {
    case 99:
      return Uf;
    case 98:
      return Vf;
    case 97:
      return Wf;
    case 96:
      return Xf;
    case 95:
      return Yf;
    default:
      throw Error(y(332));
  }
}
function gg(a, b) {
  a = fg(a);
  return Nf(a, b);
}
function hg(a, b, c) {
  a = fg(a);
  return Of(a, b, c);
}
function ig() {
  if (bg !== null) {
    var a = bg;
    bg = null;
    Pf(a);
  }
  jg();
}
function jg() {
  if (!cg && ag !== null) {
    cg = true;
    var a = 0;
    try {
      var b = ag;
      gg(99, function() {
        for (; a < b.length; a++) {
          var c = b[a];
          do
            c = c(true);
          while (c !== null);
        }
      });
      ag = null;
    } catch (c) {
      throw ag !== null && (ag = ag.slice(a + 1)), Of(Uf, ig), c;
    } finally {
      cg = false;
    }
  }
}
var kg = ra.ReactCurrentBatchConfig;
function lg(a, b) {
  if (a && a.defaultProps) {
    b = m({}, b);
    a = a.defaultProps;
    for (var c in a)
      b[c] === void 0 && (b[c] = a[c]);
    return b;
  }
  return b;
}
var mg = Bf(null), ng = null, og = null, pg = null;
function qg() {
  pg = og = ng = null;
}
function rg(a) {
  var b = mg.current;
  H(mg);
  a.type._context._currentValue = b;
}
function sg(a, b) {
  for (; a !== null; ) {
    var c = a.alternate;
    if ((a.childLanes & b) === b)
      if (c === null || (c.childLanes & b) === b)
        break;
      else
        c.childLanes |= b;
    else
      a.childLanes |= b, c !== null && (c.childLanes |= b);
    a = a.return;
  }
}
function tg(a, b) {
  ng = a;
  pg = og = null;
  a = a.dependencies;
  a !== null && a.firstContext !== null && ((a.lanes & b) !== 0 && (ug = true), a.firstContext = null);
}
function vg(a, b) {
  if (pg !== a && b !== false && b !== 0) {
    if (typeof b !== "number" || b === 1073741823)
      pg = a, b = 1073741823;
    b = { context: a, observedBits: b, next: null };
    if (og === null) {
      if (ng === null)
        throw Error(y(308));
      og = b;
      ng.dependencies = { lanes: 0, firstContext: b, responders: null };
    } else
      og = og.next = b;
  }
  return a._currentValue;
}
var wg = false;
function xg(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
}
function yg(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function zg(a, b) {
  return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
}
function Ag(a, b) {
  a = a.updateQueue;
  if (a !== null) {
    a = a.shared;
    var c = a.pending;
    c === null ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
  }
}
function Bg(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (d !== null && (d = d.updateQueue, c === d)) {
    var e = null, f = null;
    c = c.firstBaseUpdate;
    if (c !== null) {
      do {
        var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
        f === null ? e = f = g : f = f.next = g;
        c = c.next;
      } while (c !== null);
      f === null ? e = f = b : f = f.next = b;
    } else
      e = f = b;
    c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  a === null ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function Cg(a, b, c, d) {
  var e = a.updateQueue;
  wg = false;
  var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
  if (h !== null) {
    e.shared.pending = null;
    var k = h, l2 = k.next;
    k.next = null;
    g === null ? f = l2 : g.next = l2;
    g = k;
    var n2 = a.alternate;
    if (n2 !== null) {
      n2 = n2.updateQueue;
      var A2 = n2.lastBaseUpdate;
      A2 !== g && (A2 === null ? n2.firstBaseUpdate = l2 : A2.next = l2, n2.lastBaseUpdate = k);
    }
  }
  if (f !== null) {
    A2 = e.baseState;
    g = 0;
    n2 = l2 = k = null;
    do {
      h = f.lane;
      var p2 = f.eventTime;
      if ((d & h) === h) {
        n2 !== null && (n2 = n2.next = {
          eventTime: p2,
          lane: 0,
          tag: f.tag,
          payload: f.payload,
          callback: f.callback,
          next: null
        });
        a: {
          var C2 = a, x2 = f;
          h = b;
          p2 = c;
          switch (x2.tag) {
            case 1:
              C2 = x2.payload;
              if (typeof C2 === "function") {
                A2 = C2.call(p2, A2, h);
                break a;
              }
              A2 = C2;
              break a;
            case 3:
              C2.flags = C2.flags & -4097 | 64;
            case 0:
              C2 = x2.payload;
              h = typeof C2 === "function" ? C2.call(p2, A2, h) : C2;
              if (h === null || h === void 0)
                break a;
              A2 = m({}, A2, h);
              break a;
            case 2:
              wg = true;
          }
        }
        f.callback !== null && (a.flags |= 32, h = e.effects, h === null ? e.effects = [f] : h.push(f));
      } else
        p2 = { eventTime: p2, lane: h, tag: f.tag, payload: f.payload, callback: f.callback, next: null }, n2 === null ? (l2 = n2 = p2, k = A2) : n2 = n2.next = p2, g |= h;
      f = f.next;
      if (f === null)
        if (h = e.shared.pending, h === null)
          break;
        else
          f = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
    } while (1);
    n2 === null && (k = A2);
    e.baseState = k;
    e.firstBaseUpdate = l2;
    e.lastBaseUpdate = n2;
    Dg |= g;
    a.lanes = g;
    a.memoizedState = A2;
  }
}
function Eg(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (a !== null)
    for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (e !== null) {
        d.callback = null;
        d = c;
        if (typeof e !== "function")
          throw Error(y(191, e));
        e.call(d);
      }
    }
}
var Fg = new aa.Component().refs;
function Gg(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = c === null || c === void 0 ? b : m({}, b, c);
  a.memoizedState = c;
  a.lanes === 0 && (a.updateQueue.baseState = c);
}
var Kg = { isMounted: function(a) {
  return (a = a._reactInternals) ? Zb(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternals;
  var d = Hg(), e = Ig(a), f = zg(d, e);
  f.payload = b;
  c !== void 0 && c !== null && (f.callback = c);
  Ag(a, f);
  Jg(a, e, d);
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternals;
  var d = Hg(), e = Ig(a), f = zg(d, e);
  f.tag = 1;
  f.payload = b;
  c !== void 0 && c !== null && (f.callback = c);
  Ag(a, f);
  Jg(a, e, d);
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternals;
  var c = Hg(), d = Ig(a), e = zg(c, d);
  e.tag = 2;
  b !== void 0 && b !== null && (e.callback = b);
  Ag(a, e);
  Jg(a, d, c);
} };
function Lg(a, b, c, d, e, f, g) {
  a = a.stateNode;
  return typeof a.shouldComponentUpdate === "function" ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Je(c, d) || !Je(e, f) : true;
}
function Mg(a, b, c) {
  var d = false, e = Cf;
  var f = b.contextType;
  typeof f === "object" && f !== null ? f = vg(f) : (e = Ff(b) ? Df : M.current, d = b.contextTypes, f = (d = d !== null && d !== void 0) ? Ef(a, e) : Cf);
  b = new b(c, f);
  a.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null;
  b.updater = Kg;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
  return b;
}
function Ng(a, b, c, d) {
  a = b.state;
  typeof b.componentWillReceiveProps === "function" && b.componentWillReceiveProps(c, d);
  typeof b.UNSAFE_componentWillReceiveProps === "function" && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && Kg.enqueueReplaceState(b, b.state, null);
}
function Og(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = Fg;
  xg(a);
  var f = b.contextType;
  typeof f === "object" && f !== null ? e.context = vg(f) : (f = Ff(b) ? Df : M.current, e.context = Ef(a, f));
  Cg(a, c, e, d);
  e.state = a.memoizedState;
  f = b.getDerivedStateFromProps;
  typeof f === "function" && (Gg(a, b, f, c), e.state = a.memoizedState);
  typeof b.getDerivedStateFromProps === "function" || typeof e.getSnapshotBeforeUpdate === "function" || typeof e.UNSAFE_componentWillMount !== "function" && typeof e.componentWillMount !== "function" || (b = e.state, typeof e.componentWillMount === "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount === "function" && e.UNSAFE_componentWillMount(), b !== e.state && Kg.enqueueReplaceState(e, e.state, null), Cg(a, c, e, d), e.state = a.memoizedState);
  typeof e.componentDidMount === "function" && (a.flags |= 4);
}
var Pg = Array.isArray;
function Qg(a, b, c) {
  a = c.ref;
  if (a !== null && typeof a !== "function" && typeof a !== "object") {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (c.tag !== 1)
          throw Error(y(309));
        var d = c.stateNode;
      }
      if (!d)
        throw Error(y(147, a));
      var e = "" + a;
      if (b !== null && b.ref !== null && typeof b.ref === "function" && b.ref._stringRef === e)
        return b.ref;
      b = function(a2) {
        var b2 = d.refs;
        b2 === Fg && (b2 = d.refs = {});
        a2 === null ? delete b2[e] : b2[e] = a2;
      };
      b._stringRef = e;
      return b;
    }
    if (typeof a !== "string")
      throw Error(y(284));
    if (!c._owner)
      throw Error(y(290, a));
  }
  return a;
}
function Rg(a, b) {
  if (a.type !== "textarea")
    throw Error(y(31, Object.prototype.toString.call(b) === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : b));
}
function Sg(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.lastEffect;
      d2 !== null ? (d2.nextEffect = c2, b2.lastEffect = c2) : b2.firstEffect = b2.lastEffect = c2;
      c2.nextEffect = null;
      c2.flags = 8;
    }
  }
  function c(c2, d2) {
    if (!a)
      return null;
    for (; d2 !== null; )
      b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = new Map(); b2 !== null; )
      b2.key !== null ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e(a2, b2) {
    a2 = Tg(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f(b2, c2, d2) {
    b2.index = d2;
    if (!a)
      return c2;
    d2 = b2.alternate;
    if (d2 !== null)
      return d2 = d2.index, d2 < c2 ? (b2.flags = 2, c2) : d2;
    b2.flags = 2;
    return c2;
  }
  function g(b2) {
    a && b2.alternate === null && (b2.flags = 2);
    return b2;
  }
  function h(a2, b2, c2, d2) {
    if (b2 === null || b2.tag !== 6)
      return b2 = Ug(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k(a2, b2, c2, d2) {
    if (b2 !== null && b2.elementType === c2.type)
      return d2 = e(b2, c2.props), d2.ref = Qg(a2, b2, c2), d2.return = a2, d2;
    d2 = Vg(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = Qg(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l2(a2, b2, c2, d2) {
    if (b2 === null || b2.tag !== 4 || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
      return b2 = Wg(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function n2(a2, b2, c2, d2, f2) {
    if (b2 === null || b2.tag !== 7)
      return b2 = Xg(c2, a2.mode, d2, f2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function A2(a2, b2, c2) {
    if (typeof b2 === "string" || typeof b2 === "number")
      return b2 = Ug("" + b2, a2.mode, c2), b2.return = a2, b2;
    if (typeof b2 === "object" && b2 !== null) {
      switch (b2.$$typeof) {
        case sa:
          return c2 = Vg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Qg(a2, null, b2), c2.return = a2, c2;
        case ta:
          return b2 = Wg(b2, a2.mode, c2), b2.return = a2, b2;
      }
      if (Pg(b2) || La(b2))
        return b2 = Xg(b2, a2.mode, c2, null), b2.return = a2, b2;
      Rg(a2, b2);
    }
    return null;
  }
  function p2(a2, b2, c2, d2) {
    var e2 = b2 !== null ? b2.key : null;
    if (typeof c2 === "string" || typeof c2 === "number")
      return e2 !== null ? null : h(a2, b2, "" + c2, d2);
    if (typeof c2 === "object" && c2 !== null) {
      switch (c2.$$typeof) {
        case sa:
          return c2.key === e2 ? c2.type === ua ? n2(a2, b2, c2.props.children, d2, e2) : k(a2, b2, c2, d2) : null;
        case ta:
          return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
      }
      if (Pg(c2) || La(c2))
        return e2 !== null ? null : n2(a2, b2, c2, d2, null);
      Rg(a2, c2);
    }
    return null;
  }
  function C2(a2, b2, c2, d2, e2) {
    if (typeof d2 === "string" || typeof d2 === "number")
      return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
    if (typeof d2 === "object" && d2 !== null) {
      switch (d2.$$typeof) {
        case sa:
          return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, d2.type === ua ? n2(b2, a2, d2.props.children, e2, d2.key) : k(b2, a2, d2, e2);
        case ta:
          return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
      }
      if (Pg(d2) || La(d2))
        return a2 = a2.get(c2) || null, n2(b2, a2, d2, e2, null);
      Rg(b2, d2);
    }
    return null;
  }
  function x2(e2, g2, h2, k2) {
    for (var l3 = null, t2 = null, u2 = g2, z2 = g2 = 0, q2 = null; u2 !== null && z2 < h2.length; z2++) {
      u2.index > z2 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
      var n3 = p2(e2, u2, h2[z2], k2);
      if (n3 === null) {
        u2 === null && (u2 = q2);
        break;
      }
      a && u2 && n3.alternate === null && b(e2, u2);
      g2 = f(n3, g2, z2);
      t2 === null ? l3 = n3 : t2.sibling = n3;
      t2 = n3;
      u2 = q2;
    }
    if (z2 === h2.length)
      return c(e2, u2), l3;
    if (u2 === null) {
      for (; z2 < h2.length; z2++)
        u2 = A2(e2, h2[z2], k2), u2 !== null && (g2 = f(u2, g2, z2), t2 === null ? l3 = u2 : t2.sibling = u2, t2 = u2);
      return l3;
    }
    for (u2 = d(e2, u2); z2 < h2.length; z2++)
      q2 = C2(u2, e2, z2, h2[z2], k2), q2 !== null && (a && q2.alternate !== null && u2.delete(q2.key === null ? z2 : q2.key), g2 = f(q2, g2, z2), t2 === null ? l3 = q2 : t2.sibling = q2, t2 = q2);
    a && u2.forEach(function(a2) {
      return b(e2, a2);
    });
    return l3;
  }
  function w(e2, g2, h2, k2) {
    var l3 = La(h2);
    if (typeof l3 !== "function")
      throw Error(y(150));
    h2 = l3.call(h2);
    if (h2 == null)
      throw Error(y(151));
    for (var t2 = l3 = null, u2 = g2, z2 = g2 = 0, q2 = null, n3 = h2.next(); u2 !== null && !n3.done; z2++, n3 = h2.next()) {
      u2.index > z2 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
      var w2 = p2(e2, u2, n3.value, k2);
      if (w2 === null) {
        u2 === null && (u2 = q2);
        break;
      }
      a && u2 && w2.alternate === null && b(e2, u2);
      g2 = f(w2, g2, z2);
      t2 === null ? l3 = w2 : t2.sibling = w2;
      t2 = w2;
      u2 = q2;
    }
    if (n3.done)
      return c(e2, u2), l3;
    if (u2 === null) {
      for (; !n3.done; z2++, n3 = h2.next())
        n3 = A2(e2, n3.value, k2), n3 !== null && (g2 = f(n3, g2, z2), t2 === null ? l3 = n3 : t2.sibling = n3, t2 = n3);
      return l3;
    }
    for (u2 = d(e2, u2); !n3.done; z2++, n3 = h2.next())
      n3 = C2(u2, e2, z2, n3.value, k2), n3 !== null && (a && n3.alternate !== null && u2.delete(n3.key === null ? z2 : n3.key), g2 = f(n3, g2, z2), t2 === null ? l3 = n3 : t2.sibling = n3, t2 = n3);
    a && u2.forEach(function(a2) {
      return b(e2, a2);
    });
    return l3;
  }
  return function(a2, d2, f2, h2) {
    var k2 = typeof f2 === "object" && f2 !== null && f2.type === ua && f2.key === null;
    k2 && (f2 = f2.props.children);
    var l3 = typeof f2 === "object" && f2 !== null;
    if (l3)
      switch (f2.$$typeof) {
        case sa:
          a: {
            l3 = f2.key;
            for (k2 = d2; k2 !== null; ) {
              if (k2.key === l3) {
                switch (k2.tag) {
                  case 7:
                    if (f2.type === ua) {
                      c(a2, k2.sibling);
                      d2 = e(k2, f2.props.children);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                    break;
                  default:
                    if (k2.elementType === f2.type) {
                      c(a2, k2.sibling);
                      d2 = e(k2, f2.props);
                      d2.ref = Qg(a2, k2, f2);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                }
                c(a2, k2);
                break;
              } else
                b(a2, k2);
              k2 = k2.sibling;
            }
            f2.type === ua ? (d2 = Xg(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Vg(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Qg(a2, d2, f2), h2.return = a2, a2 = h2);
          }
          return g(a2);
        case ta:
          a: {
            for (k2 = f2.key; d2 !== null; ) {
              if (d2.key === k2)
                if (d2.tag === 4 && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f2.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
              else
                b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = Wg(f2, a2.mode, h2);
            d2.return = a2;
            a2 = d2;
          }
          return g(a2);
      }
    if (typeof f2 === "string" || typeof f2 === "number")
      return f2 = "" + f2, d2 !== null && d2.tag === 6 ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Ug(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2);
    if (Pg(f2))
      return x2(a2, d2, f2, h2);
    if (La(f2))
      return w(a2, d2, f2, h2);
    l3 && Rg(a2, f2);
    if (typeof f2 === "undefined" && !k2)
      switch (a2.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y(152, Ra(a2.type) || "Component"));
      }
    return c(a2, d2);
  };
}
var Yg = Sg(true), Zg = Sg(false), $g = {}, ah = Bf($g), bh = Bf($g), ch = Bf($g);
function dh(a) {
  if (a === $g)
    throw Error(y(174));
  return a;
}
function eh(a, b) {
  I(ch, b);
  I(bh, a);
  I(ah, $g);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : mb(null, "");
      break;
    default:
      a = a === 8 ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = mb(b, a);
  }
  H(ah);
  I(ah, b);
}
function fh() {
  H(ah);
  H(bh);
  H(ch);
}
function gh(a) {
  dh(ch.current);
  var b = dh(ah.current);
  var c = mb(b, a.type);
  b !== c && (I(bh, a), I(ah, c));
}
function hh(a) {
  bh.current === a && (H(ah), H(bh));
}
var P = Bf(0);
function ih(a) {
  for (var b = a; b !== null; ) {
    if (b.tag === 13) {
      var c = b.memoizedState;
      if (c !== null && (c = c.dehydrated, c === null || c.data === "$?" || c.data === "$!"))
        return b;
    } else if (b.tag === 19 && b.memoizedProps.revealOrder !== void 0) {
      if ((b.flags & 64) !== 0)
        return b;
    } else if (b.child !== null) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a)
      break;
    for (; b.sibling === null; ) {
      if (b.return === null || b.return === a)
        return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var jh = null, kh = null, lh = false;
function mh(a, b) {
  var c = nh(5, null, null, 0);
  c.elementType = "DELETED";
  c.type = "DELETED";
  c.stateNode = b;
  c.return = a;
  c.flags = 8;
  a.lastEffect !== null ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
}
function oh(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = b.nodeType !== 1 || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return b !== null ? (a.stateNode = b, true) : false;
    case 6:
      return b = a.pendingProps === "" || b.nodeType !== 3 ? null : b, b !== null ? (a.stateNode = b, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function ph(a) {
  if (lh) {
    var b = kh;
    if (b) {
      var c = b;
      if (!oh(a, b)) {
        b = rf(c.nextSibling);
        if (!b || !oh(a, b)) {
          a.flags = a.flags & -1025 | 2;
          lh = false;
          jh = a;
          return;
        }
        mh(jh, c);
      }
      jh = a;
      kh = rf(b.firstChild);
    } else
      a.flags = a.flags & -1025 | 2, lh = false, jh = a;
  }
}
function qh(a) {
  for (a = a.return; a !== null && a.tag !== 5 && a.tag !== 3 && a.tag !== 13; )
    a = a.return;
  jh = a;
}
function rh(a) {
  if (a !== jh)
    return false;
  if (!lh)
    return qh(a), lh = true, false;
  var b = a.type;
  if (a.tag !== 5 || b !== "head" && b !== "body" && !nf(b, a.memoizedProps))
    for (b = kh; b; )
      mh(a, b), b = rf(b.nextSibling);
  qh(a);
  if (a.tag === 13) {
    a = a.memoizedState;
    a = a !== null ? a.dehydrated : null;
    if (!a)
      throw Error(y(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (a.nodeType === 8) {
          var c = a.data;
          if (c === "/$") {
            if (b === 0) {
              kh = rf(a.nextSibling);
              break a;
            }
            b--;
          } else
            c !== "$" && c !== "$!" && c !== "$?" || b++;
        }
        a = a.nextSibling;
      }
      kh = null;
    }
  } else
    kh = jh ? rf(a.stateNode.nextSibling) : null;
  return true;
}
function sh() {
  kh = jh = null;
  lh = false;
}
var th = [];
function uh() {
  for (var a = 0; a < th.length; a++)
    th[a]._workInProgressVersionPrimary = null;
  th.length = 0;
}
var vh = ra.ReactCurrentDispatcher, wh = ra.ReactCurrentBatchConfig, xh = 0, R = null, S = null, T = null, yh = false, zh = false;
function Ah() {
  throw Error(y(321));
}
function Bh(a, b) {
  if (b === null)
    return false;
  for (var c = 0; c < b.length && c < a.length; c++)
    if (!He(a[c], b[c]))
      return false;
  return true;
}
function Ch(a, b, c, d, e, f) {
  xh = f;
  R = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  vh.current = a === null || a.memoizedState === null ? Dh : Eh;
  a = c(d, e);
  if (zh) {
    f = 0;
    do {
      zh = false;
      if (!(25 > f))
        throw Error(y(301));
      f += 1;
      T = S = null;
      b.updateQueue = null;
      vh.current = Fh;
      a = c(d, e);
    } while (zh);
  }
  vh.current = Gh;
  b = S !== null && S.next !== null;
  xh = 0;
  T = S = R = null;
  yh = false;
  if (b)
    throw Error(y(300));
  return a;
}
function Hh() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  T === null ? R.memoizedState = T = a : T = T.next = a;
  return T;
}
function Ih() {
  if (S === null) {
    var a = R.alternate;
    a = a !== null ? a.memoizedState : null;
  } else
    a = S.next;
  var b = T === null ? R.memoizedState : T.next;
  if (b !== null)
    T = b, S = a;
  else {
    if (a === null)
      throw Error(y(310));
    S = a;
    a = { memoizedState: S.memoizedState, baseState: S.baseState, baseQueue: S.baseQueue, queue: S.queue, next: null };
    T === null ? R.memoizedState = T = a : T = T.next = a;
  }
  return T;
}
function Jh(a, b) {
  return typeof b === "function" ? b(a) : b;
}
function Kh(a) {
  var b = Ih(), c = b.queue;
  if (c === null)
    throw Error(y(311));
  c.lastRenderedReducer = a;
  var d = S, e = d.baseQueue, f = c.pending;
  if (f !== null) {
    if (e !== null) {
      var g = e.next;
      e.next = f.next;
      f.next = g;
    }
    d.baseQueue = e = f;
    c.pending = null;
  }
  if (e !== null) {
    e = e.next;
    d = d.baseState;
    var h = g = f = null, k = e;
    do {
      var l2 = k.lane;
      if ((xh & l2) === l2)
        h !== null && (h = h.next = { lane: 0, action: k.action, eagerReducer: k.eagerReducer, eagerState: k.eagerState, next: null }), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);
      else {
        var n2 = {
          lane: l2,
          action: k.action,
          eagerReducer: k.eagerReducer,
          eagerState: k.eagerState,
          next: null
        };
        h === null ? (g = h = n2, f = d) : h = h.next = n2;
        R.lanes |= l2;
        Dg |= l2;
      }
      k = k.next;
    } while (k !== null && k !== e);
    h === null ? f = d : h.next = g;
    He(d, b.memoizedState) || (ug = true);
    b.memoizedState = d;
    b.baseState = f;
    b.baseQueue = h;
    c.lastRenderedState = d;
  }
  return [b.memoizedState, c.dispatch];
}
function Lh(a) {
  var b = Ih(), c = b.queue;
  if (c === null)
    throw Error(y(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f = b.memoizedState;
  if (e !== null) {
    c.pending = null;
    var g = e = e.next;
    do
      f = a(f, g.action), g = g.next;
    while (g !== e);
    He(f, b.memoizedState) || (ug = true);
    b.memoizedState = f;
    b.baseQueue === null && (b.baseState = f);
    c.lastRenderedState = f;
  }
  return [f, d];
}
function Mh(a, b, c) {
  var d = b._getVersion;
  d = d(b._source);
  var e = b._workInProgressVersionPrimary;
  if (e !== null)
    a = e === d;
  else if (a = a.mutableReadLanes, a = (xh & a) === a)
    b._workInProgressVersionPrimary = d, th.push(b);
  if (a)
    return c(b._source);
  th.push(b);
  throw Error(y(350));
}
function Nh(a, b, c, d) {
  var e = U;
  if (e === null)
    throw Error(y(349));
  var f = b._getVersion, g = f(b._source), h = vh.current, k = h.useState(function() {
    return Mh(e, b, c);
  }), l2 = k[1], n2 = k[0];
  k = T;
  var A2 = a.memoizedState, p2 = A2.refs, C2 = p2.getSnapshot, x2 = A2.source;
  A2 = A2.subscribe;
  var w = R;
  a.memoizedState = { refs: p2, source: b, subscribe: d };
  h.useEffect(function() {
    p2.getSnapshot = c;
    p2.setSnapshot = l2;
    var a2 = f(b._source);
    if (!He(g, a2)) {
      a2 = c(b._source);
      He(n2, a2) || (l2(a2), a2 = Ig(w), e.mutableReadLanes |= a2 & e.pendingLanes);
      a2 = e.mutableReadLanes;
      e.entangledLanes |= a2;
      for (var d2 = e.entanglements, h2 = a2; 0 < h2; ) {
        var k2 = 31 - Vc(h2), v2 = 1 << k2;
        d2[k2] |= a2;
        h2 &= ~v2;
      }
    }
  }, [c, b, d]);
  h.useEffect(function() {
    return d(b._source, function() {
      var a2 = p2.getSnapshot, c2 = p2.setSnapshot;
      try {
        c2(a2(b._source));
        var d2 = Ig(w);
        e.mutableReadLanes |= d2 & e.pendingLanes;
      } catch (q2) {
        c2(function() {
          throw q2;
        });
      }
    });
  }, [b, d]);
  He(C2, c) && He(x2, b) && He(A2, d) || (a = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n2 }, a.dispatch = l2 = Oh.bind(null, R, a), k.queue = a, k.baseQueue = null, n2 = Mh(e, b, c), k.memoizedState = k.baseState = n2);
  return n2;
}
function Ph(a, b, c) {
  var d = Ih();
  return Nh(d, a, b, c);
}
function Qh(a) {
  var b = Hh();
  typeof a === "function" && (a = a());
  b.memoizedState = b.baseState = a;
  a = b.queue = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a };
  a = a.dispatch = Oh.bind(null, R, a);
  return [b.memoizedState, a];
}
function Rh(a, b, c, d) {
  a = { tag: a, create: b, destroy: c, deps: d, next: null };
  b = R.updateQueue;
  b === null ? (b = { lastEffect: null }, R.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, c === null ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function Sh(a) {
  var b = Hh();
  a = { current: a };
  return b.memoizedState = a;
}
function Th() {
  return Ih().memoizedState;
}
function Uh(a, b, c, d) {
  var e = Hh();
  R.flags |= a;
  e.memoizedState = Rh(1 | b, c, void 0, d === void 0 ? null : d);
}
function Vh(a, b, c, d) {
  var e = Ih();
  d = d === void 0 ? null : d;
  var f = void 0;
  if (S !== null) {
    var g = S.memoizedState;
    f = g.destroy;
    if (d !== null && Bh(d, g.deps)) {
      Rh(b, c, f, d);
      return;
    }
  }
  R.flags |= a;
  e.memoizedState = Rh(1 | b, c, f, d);
}
function Wh(a, b) {
  return Uh(516, 4, a, b);
}
function Xh(a, b) {
  return Vh(516, 4, a, b);
}
function Yh(a, b) {
  return Vh(4, 2, a, b);
}
function Zh(a, b) {
  if (typeof b === "function")
    return a = a(), b(a), function() {
      b(null);
    };
  if (b !== null && b !== void 0)
    return a = a(), b.current = a, function() {
      b.current = null;
    };
}
function $h(a, b, c) {
  c = c !== null && c !== void 0 ? c.concat([a]) : null;
  return Vh(4, 2, Zh.bind(null, b, a), c);
}
function ai() {
}
function bi(a, b) {
  var c = Ih();
  b = b === void 0 ? null : b;
  var d = c.memoizedState;
  if (d !== null && b !== null && Bh(b, d[1]))
    return d[0];
  c.memoizedState = [a, b];
  return a;
}
function ci(a, b) {
  var c = Ih();
  b = b === void 0 ? null : b;
  var d = c.memoizedState;
  if (d !== null && b !== null && Bh(b, d[1]))
    return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function di(a, b) {
  var c = eg();
  gg(98 > c ? 98 : c, function() {
    a(true);
  });
  gg(97 < c ? 97 : c, function() {
    var c2 = wh.transition;
    wh.transition = 1;
    try {
      a(false), b();
    } finally {
      wh.transition = c2;
    }
  });
}
function Oh(a, b, c) {
  var d = Hg(), e = Ig(a), f = { lane: e, action: c, eagerReducer: null, eagerState: null, next: null }, g = b.pending;
  g === null ? f.next = f : (f.next = g.next, g.next = f);
  b.pending = f;
  g = a.alternate;
  if (a === R || g !== null && g === R)
    zh = yh = true;
  else {
    if (a.lanes === 0 && (g === null || g.lanes === 0) && (g = b.lastRenderedReducer, g !== null))
      try {
        var h = b.lastRenderedState, k = g(h, c);
        f.eagerReducer = g;
        f.eagerState = k;
        if (He(k, h))
          return;
      } catch (l2) {
      } finally {
      }
    Jg(a, e, d);
  }
}
var Gh = { readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false }, Dh = { readContext: vg, useCallback: function(a, b) {
  Hh().memoizedState = [a, b === void 0 ? null : b];
  return a;
}, useContext: vg, useEffect: Wh, useImperativeHandle: function(a, b, c) {
  c = c !== null && c !== void 0 ? c.concat([a]) : null;
  return Uh(4, 2, Zh.bind(null, b, a), c);
}, useLayoutEffect: function(a, b) {
  return Uh(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = Hh();
  b = b === void 0 ? null : b;
  a = a();
  c.memoizedState = [a, b];
  return a;
}, useReducer: function(a, b, c) {
  var d = Hh();
  b = c !== void 0 ? c(b) : b;
  d.memoizedState = d.baseState = b;
  a = d.queue = { pending: null, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
  a = a.dispatch = Oh.bind(null, R, a);
  return [d.memoizedState, a];
}, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Qh(a), c = b[0], d = b[1];
  Wh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Qh(false), b = a[0];
  a = di.bind(null, a[1]);
  Sh(a);
  return [a, b];
}, useMutableSource: function(a, b, c) {
  var d = Hh();
  d.memoizedState = { refs: { getSnapshot: b, setSnapshot: null }, source: a, subscribe: c };
  return Nh(d, a, b, c);
}, useOpaqueIdentifier: function() {
  if (lh) {
    var a = false, b = uf(function() {
      a || (a = true, c("r:" + (tf++).toString(36)));
      throw Error(y(355));
    }), c = Qh(b)[1];
    (R.mode & 2) === 0 && (R.flags |= 516, Rh(5, function() {
      c("r:" + (tf++).toString(36));
    }, void 0, null));
    return b;
  }
  b = "r:" + (tf++).toString(36);
  Qh(b);
  return b;
}, unstable_isNewReconciler: false }, Eh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
  return Kh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Kh(Jh), c = b[0], d = b[1];
  Xh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Kh(Jh)[0];
  return [
    Th().current,
    a
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Kh(Jh)[0];
}, unstable_isNewReconciler: false }, Fh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
  return Lh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Lh(Jh), c = b[0], d = b[1];
  Xh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Lh(Jh)[0];
  return [
    Th().current,
    a
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Lh(Jh)[0];
}, unstable_isNewReconciler: false }, ei = ra.ReactCurrentOwner, ug = false;
function fi(a, b, c, d) {
  b.child = a === null ? Zg(b, null, c, d) : Yg(b, a.child, c, d);
}
function gi(a, b, c, d, e) {
  c = c.render;
  var f = b.ref;
  tg(b, e);
  d = Ch(a, b, c, d, f, e);
  if (a !== null && !ug)
    return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
  b.flags |= 1;
  fi(a, b, d, e);
  return b.child;
}
function ii(a, b, c, d, e, f) {
  if (a === null) {
    var g = c.type;
    if (typeof g === "function" && !ji(g) && g.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0)
      return b.tag = 15, b.type = g, ki(a, b, g, d, e, f);
    a = Vg(c.type, null, d, b, b.mode, f);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  g = a.child;
  if ((e & f) === 0 && (e = g.memoizedProps, c = c.compare, c = c !== null ? c : Je, c(e, d) && a.ref === b.ref))
    return hi(a, b, f);
  b.flags |= 1;
  a = Tg(g, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function ki(a, b, c, d, e, f) {
  if (a !== null && Je(a.memoizedProps, d) && a.ref === b.ref)
    if (ug = false, (f & e) !== 0)
      (a.flags & 16384) !== 0 && (ug = true);
    else
      return b.lanes = a.lanes, hi(a, b, f);
  return li(a, b, c, d, f);
}
function mi(a, b, c) {
  var d = b.pendingProps, e = d.children, f = a !== null ? a.memoizedState : null;
  if (d.mode === "hidden" || d.mode === "unstable-defer-without-hiding")
    if ((b.mode & 4) === 0)
      b.memoizedState = { baseLanes: 0 }, ni(b, c);
    else if ((c & 1073741824) !== 0)
      b.memoizedState = { baseLanes: 0 }, ni(b, f !== null ? f.baseLanes : c);
    else
      return a = f !== null ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a }, ni(b, a), null;
  else
    f !== null ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, ni(b, d);
  fi(a, b, e, c);
  return b.child;
}
function oi(a, b) {
  var c = b.ref;
  if (a === null && c !== null || a !== null && a.ref !== c)
    b.flags |= 128;
}
function li(a, b, c, d, e) {
  var f = Ff(c) ? Df : M.current;
  f = Ef(b, f);
  tg(b, e);
  c = Ch(a, b, c, d, f, e);
  if (a !== null && !ug)
    return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
  b.flags |= 1;
  fi(a, b, c, e);
  return b.child;
}
function pi(a, b, c, d, e) {
  if (Ff(c)) {
    var f = true;
    Jf(b);
  } else
    f = false;
  tg(b, e);
  if (b.stateNode === null)
    a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2), Mg(b, c, d), Og(b, c, d, e), d = true;
  else if (a === null) {
    var g = b.stateNode, h = b.memoizedProps;
    g.props = h;
    var k = g.context, l2 = c.contextType;
    typeof l2 === "object" && l2 !== null ? l2 = vg(l2) : (l2 = Ff(c) ? Df : M.current, l2 = Ef(b, l2));
    var n2 = c.getDerivedStateFromProps, A2 = typeof n2 === "function" || typeof g.getSnapshotBeforeUpdate === "function";
    A2 || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== d || k !== l2) && Ng(b, g, d, l2);
    wg = false;
    var p2 = b.memoizedState;
    g.state = p2;
    Cg(b, d, g, e);
    k = b.memoizedState;
    h !== d || p2 !== k || N.current || wg ? (typeof n2 === "function" && (Gg(b, c, n2, d), k = b.memoizedState), (h = wg || Lg(b, c, h, d, p2, k, l2)) ? (A2 || typeof g.UNSAFE_componentWillMount !== "function" && typeof g.componentWillMount !== "function" || (typeof g.componentWillMount === "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount === "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount === "function" && (b.flags |= 4)) : (typeof g.componentDidMount === "function" && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l2, d = h) : (typeof g.componentDidMount === "function" && (b.flags |= 4), d = false);
  } else {
    g = b.stateNode;
    yg(a, b);
    h = b.memoizedProps;
    l2 = b.type === b.elementType ? h : lg(b.type, h);
    g.props = l2;
    A2 = b.pendingProps;
    p2 = g.context;
    k = c.contextType;
    typeof k === "object" && k !== null ? k = vg(k) : (k = Ff(c) ? Df : M.current, k = Ef(b, k));
    var C2 = c.getDerivedStateFromProps;
    (n2 = typeof C2 === "function" || typeof g.getSnapshotBeforeUpdate === "function") || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== A2 || p2 !== k) && Ng(b, g, d, k);
    wg = false;
    p2 = b.memoizedState;
    g.state = p2;
    Cg(b, d, g, e);
    var x2 = b.memoizedState;
    h !== A2 || p2 !== x2 || N.current || wg ? (typeof C2 === "function" && (Gg(b, c, C2, d), x2 = b.memoizedState), (l2 = wg || Lg(b, c, l2, d, p2, x2, k)) ? (n2 || typeof g.UNSAFE_componentWillUpdate !== "function" && typeof g.componentWillUpdate !== "function" || (typeof g.componentWillUpdate === "function" && g.componentWillUpdate(d, x2, k), typeof g.UNSAFE_componentWillUpdate === "function" && g.UNSAFE_componentWillUpdate(d, x2, k)), typeof g.componentDidUpdate === "function" && (b.flags |= 4), typeof g.getSnapshotBeforeUpdate === "function" && (b.flags |= 256)) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x2), g.props = d, g.state = x2, g.context = k, d = l2) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && p2 === a.memoizedState || (b.flags |= 256), d = false);
  }
  return qi(a, b, c, d, f, e);
}
function qi(a, b, c, d, e, f) {
  oi(a, b);
  var g = (b.flags & 64) !== 0;
  if (!d && !g)
    return e && Kf(b, c, false), hi(a, b, f);
  d = b.stateNode;
  ei.current = b;
  var h = g && typeof c.getDerivedStateFromError !== "function" ? null : d.render();
  b.flags |= 1;
  a !== null && g ? (b.child = Yg(b, a.child, null, f), b.child = Yg(b, null, h, f)) : fi(a, b, h, f);
  b.memoizedState = d.state;
  e && Kf(b, c, true);
  return b.child;
}
function ri(a) {
  var b = a.stateNode;
  b.pendingContext ? Hf(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Hf(a, b.context, false);
  eh(a, b.containerInfo);
}
var si = { dehydrated: null, retryLane: 0 };
function ti(a, b, c) {
  var d = b.pendingProps, e = P.current, f = false, g;
  (g = (b.flags & 64) !== 0) || (g = a !== null && a.memoizedState === null ? false : (e & 2) !== 0);
  g ? (f = true, b.flags &= -65) : a !== null && a.memoizedState === null || d.fallback === void 0 || d.unstable_avoidThisFallback === true || (e |= 1);
  I(P, e & 1);
  if (a === null) {
    d.fallback !== void 0 && ph(b);
    a = d.children;
    e = d.fallback;
    if (f)
      return a = ui(b, a, e, c), b.child.memoizedState = { baseLanes: c }, b.memoizedState = si, a;
    if (typeof d.unstable_expectedLoadTime === "number")
      return a = ui(b, a, e, c), b.child.memoizedState = { baseLanes: c }, b.memoizedState = si, b.lanes = 33554432, a;
    c = vi({ mode: "visible", children: a }, b.mode, c, null);
    c.return = b;
    return b.child = c;
  }
  if (a.memoizedState !== null) {
    if (f)
      return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = e === null ? { baseLanes: c } : { baseLanes: e.baseLanes | c }, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
    c = xi(a, b, d.children, c);
    b.memoizedState = null;
    return c;
  }
  if (f)
    return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = e === null ? { baseLanes: c } : { baseLanes: e.baseLanes | c }, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
  c = xi(a, b, d.children, c);
  b.memoizedState = null;
  return c;
}
function ui(a, b, c, d) {
  var e = a.mode, f = a.child;
  b = { mode: "hidden", children: b };
  (e & 2) === 0 && f !== null ? (f.childLanes = 0, f.pendingProps = b) : f = vi(b, e, 0, null);
  c = Xg(c, e, d, null);
  f.return = a;
  c.return = a;
  f.sibling = c;
  a.child = f;
  return c;
}
function xi(a, b, c, d) {
  var e = a.child;
  a = e.sibling;
  c = Tg(e, { mode: "visible", children: c });
  (b.mode & 2) === 0 && (c.lanes = d);
  c.return = b;
  c.sibling = null;
  a !== null && (a.nextEffect = null, a.flags = 8, b.firstEffect = b.lastEffect = a);
  return b.child = c;
}
function wi(a, b, c, d, e) {
  var f = b.mode, g = a.child;
  a = g.sibling;
  var h = { mode: "hidden", children: c };
  (f & 2) === 0 && b.child !== g ? (c = b.child, c.childLanes = 0, c.pendingProps = h, g = c.lastEffect, g !== null ? (b.firstEffect = c.firstEffect, b.lastEffect = g, g.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = Tg(g, h);
  a !== null ? d = Tg(a, d) : (d = Xg(d, f, e, null), d.flags |= 2);
  d.return = b;
  c.return = b;
  c.sibling = d;
  b.child = c;
  return d;
}
function yi(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  c !== null && (c.lanes |= b);
  sg(a.return, b);
}
function zi(a, b, c, d, e, f) {
  var g = a.memoizedState;
  g === null ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e, lastEffect: f } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailMode = e, g.lastEffect = f);
}
function Ai(a, b, c) {
  var d = b.pendingProps, e = d.revealOrder, f = d.tail;
  fi(a, b, d.children, c);
  d = P.current;
  if ((d & 2) !== 0)
    d = d & 1 | 2, b.flags |= 64;
  else {
    if (a !== null && (a.flags & 64) !== 0)
      a:
        for (a = b.child; a !== null; ) {
          if (a.tag === 13)
            a.memoizedState !== null && yi(a, c);
          else if (a.tag === 19)
            yi(a, c);
          else if (a.child !== null) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b)
            break a;
          for (; a.sibling === null; ) {
            if (a.return === null || a.return === b)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d &= 1;
  }
  I(P, d);
  if ((b.mode & 2) === 0)
    b.memoizedState = null;
  else
    switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; c !== null; )
          a = c.alternate, a !== null && ih(a) === null && (e = c), c = c.sibling;
        c = e;
        c === null ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        zi(b, false, e, c, f, b.lastEffect);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; e !== null; ) {
          a = e.alternate;
          if (a !== null && ih(a) === null) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        zi(b, true, c, null, f, b.lastEffect);
        break;
      case "together":
        zi(b, false, null, null, void 0, b.lastEffect);
        break;
      default:
        b.memoizedState = null;
    }
  return b.child;
}
function hi(a, b, c) {
  a !== null && (b.dependencies = a.dependencies);
  Dg |= b.lanes;
  if ((c & b.childLanes) !== 0) {
    if (a !== null && b.child !== a.child)
      throw Error(y(153));
    if (b.child !== null) {
      a = b.child;
      c = Tg(a, a.pendingProps);
      b.child = c;
      for (c.return = b; a.sibling !== null; )
        a = a.sibling, c = c.sibling = Tg(a, a.pendingProps), c.return = b;
      c.sibling = null;
    }
    return b.child;
  }
  return null;
}
var Bi, Ci, Di, Ei;
Bi = function(a, b) {
  for (var c = b.child; c !== null; ) {
    if (c.tag === 5 || c.tag === 6)
      a.appendChild(c.stateNode);
    else if (c.tag !== 4 && c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === b)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Ci = function() {
};
Di = function(a, b, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b.stateNode;
    dh(ah.current);
    var f = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f = [];
        break;
      case "option":
        e = eb(a, e);
        d = eb(a, d);
        f = [];
        break;
      case "select":
        e = m({}, e, { value: void 0 });
        d = m({}, d, { value: void 0 });
        f = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f = [];
        break;
      default:
        typeof e.onClick !== "function" && typeof d.onClick === "function" && (a.onclick = jf);
    }
    vb(c, d);
    var g;
    c = null;
    for (l2 in e)
      if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && e[l2] != null)
        if (l2 === "style") {
          var h = e[l2];
          for (g in h)
            h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else
          l2 !== "dangerouslySetInnerHTML" && l2 !== "children" && l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && l2 !== "autoFocus" && (ca.hasOwnProperty(l2) ? f || (f = []) : (f = f || []).push(l2, null));
    for (l2 in d) {
      var k = d[l2];
      h = e != null ? e[l2] : void 0;
      if (d.hasOwnProperty(l2) && k !== h && (k != null || h != null))
        if (l2 === "style")
          if (h) {
            for (g in h)
              !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k)
              k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
          } else
            c || (f || (f = []), f.push(l2, c)), c = k;
        else
          l2 === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, k != null && h !== k && (f = f || []).push(l2, k)) : l2 === "children" ? typeof k !== "string" && typeof k !== "number" || (f = f || []).push(l2, "" + k) : l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && (ca.hasOwnProperty(l2) ? (k != null && l2 === "onScroll" && G("scroll", a), f || h === k || (f = [])) : typeof k === "object" && k !== null && k.$$typeof === Ga ? k.toString() : (f = f || []).push(l2, k));
    }
    c && (f = f || []).push("style", c);
    var l2 = f;
    if (b.updateQueue = l2)
      b.flags |= 4;
  }
};
Ei = function(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Fi(a, b) {
  if (!lh)
    switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; b !== null; )
          b.alternate !== null && (c = b), b = b.sibling;
        c === null ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; c !== null; )
          c.alternate !== null && (d = c), c = c.sibling;
        d === null ? b || a.tail === null ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function Gi(a, b, c) {
  var d = b.pendingProps;
  switch (b.tag) {
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
      return null;
    case 1:
      return Ff(b.type) && Gf(), null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      d = b.stateNode;
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (a === null || a.child === null)
        rh(b) ? b.flags |= 4 : d.hydrate || (b.flags |= 256);
      Ci(b);
      return null;
    case 5:
      hh(b);
      var e = dh(ch.current);
      c = b.type;
      if (a !== null && b.stateNode != null)
        Di(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128);
      else {
        if (!d) {
          if (b.stateNode === null)
            throw Error(y(166));
          return null;
        }
        a = dh(ah.current);
        if (rh(b)) {
          d = b.stateNode;
          c = b.type;
          var f = b.memoizedProps;
          d[wf] = b;
          d[xf] = f;
          switch (c) {
            case "dialog":
              G("cancel", d);
              G("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", d);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Xe.length; a++)
                G(Xe[a], d);
              break;
            case "source":
              G("error", d);
              break;
            case "img":
            case "image":
            case "link":
              G("error", d);
              G("load", d);
              break;
            case "details":
              G("toggle", d);
              break;
            case "input":
              Za(d, f);
              G("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f.multiple };
              G("invalid", d);
              break;
            case "textarea":
              hb(d, f), G("invalid", d);
          }
          vb(c, f);
          a = null;
          for (var g in f)
            f.hasOwnProperty(g) && (e = f[g], g === "children" ? typeof e === "string" ? d.textContent !== e && (a = ["children", e]) : typeof e === "number" && d.textContent !== "" + e && (a = ["children", "" + e]) : ca.hasOwnProperty(g) && e != null && g === "onScroll" && G("scroll", d));
          switch (c) {
            case "input":
              Va(d);
              cb(d, f, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f.onClick === "function" && (d.onclick = jf);
          }
          d = a;
          b.updateQueue = d;
          d !== null && (b.flags |= 4);
        } else {
          g = e.nodeType === 9 ? e : e.ownerDocument;
          a === kb.html && (a = lb(c));
          a === kb.html ? c === "script" ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : typeof d.is === "string" ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), c === "select" && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[wf] = b;
          a[xf] = d;
          Bi(a, b, false, false);
          b.stateNode = a;
          g = wb(c, d);
          switch (c) {
            case "dialog":
              G("cancel", a);
              G("close", a);
              e = d;
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", a);
              e = d;
              break;
            case "video":
            case "audio":
              for (e = 0; e < Xe.length; e++)
                G(Xe[e], a);
              e = d;
              break;
            case "source":
              G("error", a);
              e = d;
              break;
            case "img":
            case "image":
            case "link":
              G("error", a);
              G("load", a);
              e = d;
              break;
            case "details":
              G("toggle", a);
              e = d;
              break;
            case "input":
              Za(a, d);
              e = Ya(a, d);
              G("invalid", a);
              break;
            case "option":
              e = eb(a, d);
              break;
            case "select":
              a._wrapperState = { wasMultiple: !!d.multiple };
              e = m({}, d, { value: void 0 });
              G("invalid", a);
              break;
            case "textarea":
              hb(a, d);
              e = gb(a, d);
              G("invalid", a);
              break;
            default:
              e = d;
          }
          vb(c, e);
          var h = e;
          for (f in h)
            if (h.hasOwnProperty(f)) {
              var k = h[f];
              f === "style" ? tb(a, k) : f === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, k != null && ob(a, k)) : f === "children" ? typeof k === "string" ? (c !== "textarea" || k !== "") && pb(a, k) : typeof k === "number" && pb(a, "" + k) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (ca.hasOwnProperty(f) ? k != null && f === "onScroll" && G("scroll", a) : k != null && qa(a, f, k, g));
            }
          switch (c) {
            case "input":
              Va(a);
              cb(a, d, false);
              break;
            case "textarea":
              Va(a);
              jb(a);
              break;
            case "option":
              d.value != null && a.setAttribute("value", "" + Sa(d.value));
              break;
            case "select":
              a.multiple = !!d.multiple;
              f = d.value;
              f != null ? fb(a, !!d.multiple, f, false) : d.defaultValue != null && fb(a, !!d.multiple, d.defaultValue, true);
              break;
            default:
              typeof e.onClick === "function" && (a.onclick = jf);
          }
          mf(c, d) && (b.flags |= 4);
        }
        b.ref !== null && (b.flags |= 128);
      }
      return null;
    case 6:
      if (a && b.stateNode != null)
        Ei(a, b, a.memoizedProps, d);
      else {
        if (typeof d !== "string" && b.stateNode === null)
          throw Error(y(166));
        c = dh(ch.current);
        dh(ah.current);
        rh(b) ? (d = b.stateNode, c = b.memoizedProps, d[wf] = b, d.nodeValue !== c && (b.flags |= 4)) : (d = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(d), d[wf] = b, b.stateNode = d);
      }
      return null;
    case 13:
      H(P);
      d = b.memoizedState;
      if ((b.flags & 64) !== 0)
        return b.lanes = c, b;
      d = d !== null;
      c = false;
      a === null ? b.memoizedProps.fallback !== void 0 && rh(b) : c = a.memoizedState !== null;
      if (d && !c && (b.mode & 2) !== 0)
        if (a === null && b.memoizedProps.unstable_avoidThisFallback !== true || (P.current & 1) !== 0)
          V === 0 && (V = 3);
        else {
          if (V === 0 || V === 3)
            V = 4;
          U === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U, W);
        }
      if (d || c)
        b.flags |= 4;
      return null;
    case 4:
      return fh(), Ci(b), a === null && cf(b.stateNode.containerInfo), null;
    case 10:
      return rg(b), null;
    case 17:
      return Ff(b.type) && Gf(), null;
    case 19:
      H(P);
      d = b.memoizedState;
      if (d === null)
        return null;
      f = (b.flags & 64) !== 0;
      g = d.rendering;
      if (g === null)
        if (f)
          Fi(d, false);
        else {
          if (V !== 0 || a !== null && (a.flags & 64) !== 0)
            for (a = b.child; a !== null; ) {
              g = ih(a);
              if (g !== null) {
                b.flags |= 64;
                Fi(d, false);
                f = g.updateQueue;
                f !== null && (b.updateQueue = f, b.flags |= 4);
                d.lastEffect === null && (b.firstEffect = null);
                b.lastEffect = d.lastEffect;
                d = c;
                for (c = b.child; c !== null; )
                  f = c, a = d, f.flags &= 2, f.nextEffect = null, f.firstEffect = null, f.lastEffect = null, g = f.alternate, g === null ? (f.childLanes = 0, f.lanes = a, f.child = null, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                I(P, P.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
          d.tail !== null && O() > Ji && (b.flags |= 64, f = true, Fi(d, false), b.lanes = 33554432);
        }
      else {
        if (!f)
          if (a = ih(g), a !== null) {
            if (b.flags |= 64, f = true, c = a.updateQueue, c !== null && (b.updateQueue = c, b.flags |= 4), Fi(d, true), d.tail === null && d.tailMode === "hidden" && !g.alternate && !lh)
              return b = b.lastEffect = d.lastEffect, b !== null && (b.nextEffect = null), null;
          } else
            2 * O() - d.renderingStartTime > Ji && c !== 1073741824 && (b.flags |= 64, f = true, Fi(d, false), b.lanes = 33554432);
        d.isBackwards ? (g.sibling = b.child, b.child = g) : (c = d.last, c !== null ? c.sibling = g : b.child = g, d.last = g);
      }
      return d.tail !== null ? (c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = O(), c.sibling = null, b = P.current, I(P, f ? b & 1 | 2 : b & 1), c) : null;
    case 23:
    case 24:
      return Ki(), a !== null && a.memoizedState !== null !== (b.memoizedState !== null) && d.mode !== "unstable-defer-without-hiding" && (b.flags |= 4), null;
  }
  throw Error(y(156, b.tag));
}
function Li(a) {
  switch (a.tag) {
    case 1:
      Ff(a.type) && Gf();
      var b = a.flags;
      return b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      b = a.flags;
      if ((b & 64) !== 0)
        throw Error(y(285));
      a.flags = b & -4097 | 64;
      return a;
    case 5:
      return hh(a), null;
    case 13:
      return H(P), b = a.flags, b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
    case 19:
      return H(P), null;
    case 4:
      return fh(), null;
    case 10:
      return rg(a), null;
    case 23:
    case 24:
      return Ki(), null;
    default:
      return null;
  }
}
function Mi(a, b) {
  try {
    var c = "", d = b;
    do
      c += Qa(d), d = d.return;
    while (d);
    var e = c;
  } catch (f) {
    e = "\nError generating stack: " + f.message + "\n" + f.stack;
  }
  return { value: a, source: b, stack: e };
}
function Ni(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Oi = typeof WeakMap === "function" ? WeakMap : Map;
function Pi(a, b, c) {
  c = zg(-1, c);
  c.tag = 3;
  c.payload = { element: null };
  var d = b.value;
  c.callback = function() {
    Qi || (Qi = true, Ri = d);
    Ni(a, b);
  };
  return c;
}
function Si(a, b, c) {
  c = zg(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if (typeof d === "function") {
    var e = b.value;
    c.payload = function() {
      Ni(a, b);
      return d(e);
    };
  }
  var f = a.stateNode;
  f !== null && typeof f.componentDidCatch === "function" && (c.callback = function() {
    typeof d !== "function" && (Ti === null ? Ti = new Set([this]) : Ti.add(this), Ni(a, b));
    var c2 = b.stack;
    this.componentDidCatch(b.value, { componentStack: c2 !== null ? c2 : "" });
  });
  return c;
}
var Ui = typeof WeakSet === "function" ? WeakSet : Set;
function Vi(a) {
  var b = a.ref;
  if (b !== null)
    if (typeof b === "function")
      try {
        b(null);
      } catch (c) {
        Wi(a, c);
      }
    else
      b.current = null;
}
function Xi(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b.flags & 256 && a !== null) {
        var c = a.memoizedProps, d = a.memoizedState;
        a = b.stateNode;
        b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : lg(b.type, c), d);
        a.__reactInternalSnapshotBeforeUpdate = b;
      }
      return;
    case 3:
      b.flags & 256 && qf(b.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y(163));
}
function Yi(a, b, c) {
  switch (c.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      b = c.updateQueue;
      b = b !== null ? b.lastEffect : null;
      if (b !== null) {
        a = b = b.next;
        do {
          if ((a.tag & 3) === 3) {
            var d = a.create;
            a.destroy = d();
          }
          a = a.next;
        } while (a !== b);
      }
      b = c.updateQueue;
      b = b !== null ? b.lastEffect : null;
      if (b !== null) {
        a = b = b.next;
        do {
          var e = a;
          d = e.next;
          e = e.tag;
          (e & 4) !== 0 && (e & 1) !== 0 && (Zi(c, a), $i(c, a));
          a = d;
        } while (a !== b);
      }
      return;
    case 1:
      a = c.stateNode;
      c.flags & 4 && (b === null ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : lg(c.type, b.memoizedProps), a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
      b = c.updateQueue;
      b !== null && Eg(c, b, a);
      return;
    case 3:
      b = c.updateQueue;
      if (b !== null) {
        a = null;
        if (c.child !== null)
          switch (c.child.tag) {
            case 5:
              a = c.child.stateNode;
              break;
            case 1:
              a = c.child.stateNode;
          }
        Eg(c, b, a);
      }
      return;
    case 5:
      a = c.stateNode;
      b === null && c.flags & 4 && mf(c.type, c.memoizedProps) && a.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      c.memoizedState === null && (c = c.alternate, c !== null && (c = c.memoizedState, c !== null && (c = c.dehydrated, c !== null && Cc(c))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(y(163));
}
function aj(a, b) {
  for (var c = a; ; ) {
    if (c.tag === 5) {
      var d = c.stateNode;
      if (b)
        d = d.style, typeof d.setProperty === "function" ? d.setProperty("display", "none", "important") : d.display = "none";
      else {
        d = c.stateNode;
        var e = c.memoizedProps.style;
        e = e !== void 0 && e !== null && e.hasOwnProperty("display") ? e.display : null;
        d.style.display = sb("display", e);
      }
    } else if (c.tag === 6)
      c.stateNode.nodeValue = b ? "" : c.memoizedProps;
    else if ((c.tag !== 23 && c.tag !== 24 || c.memoizedState === null || c === a) && c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === a)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === a)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
}
function bj(a, b) {
  if (Mf && typeof Mf.onCommitFiberUnmount === "function")
    try {
      Mf.onCommitFiberUnmount(Lf, b);
    } catch (f) {
    }
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a = b.updateQueue;
      if (a !== null && (a = a.lastEffect, a !== null)) {
        var c = a = a.next;
        do {
          var d = c, e = d.destroy;
          d = d.tag;
          if (e !== void 0)
            if ((d & 4) !== 0)
              Zi(b, c);
            else {
              d = b;
              try {
                e();
              } catch (f) {
                Wi(d, f);
              }
            }
          c = c.next;
        } while (c !== a);
      }
      break;
    case 1:
      Vi(b);
      a = b.stateNode;
      if (typeof a.componentWillUnmount === "function")
        try {
          a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
        } catch (f) {
          Wi(b, f);
        }
      break;
    case 5:
      Vi(b);
      break;
    case 4:
      cj(a, b);
  }
}
function dj(a) {
  a.alternate = null;
  a.child = null;
  a.dependencies = null;
  a.firstEffect = null;
  a.lastEffect = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.return = null;
  a.updateQueue = null;
}
function ej(a) {
  return a.tag === 5 || a.tag === 3 || a.tag === 4;
}
function fj(a) {
  a: {
    for (var b = a.return; b !== null; ) {
      if (ej(b))
        break a;
      b = b.return;
    }
    throw Error(y(160));
  }
  var c = b;
  b = c.stateNode;
  switch (c.tag) {
    case 5:
      var d = false;
      break;
    case 3:
      b = b.containerInfo;
      d = true;
      break;
    case 4:
      b = b.containerInfo;
      d = true;
      break;
    default:
      throw Error(y(161));
  }
  c.flags & 16 && (pb(b, ""), c.flags &= -17);
  a:
    b:
      for (c = a; ; ) {
        for (; c.sibling === null; ) {
          if (c.return === null || ej(c.return)) {
            c = null;
            break a;
          }
          c = c.return;
        }
        c.sibling.return = c.return;
        for (c = c.sibling; c.tag !== 5 && c.tag !== 6 && c.tag !== 18; ) {
          if (c.flags & 2)
            continue b;
          if (c.child === null || c.tag === 4)
            continue b;
          else
            c.child.return = c, c = c.child;
        }
        if (!(c.flags & 2)) {
          c = c.stateNode;
          break a;
        }
      }
  d ? gj(a, c, b) : hj(a, c, b);
}
function gj(a, b, c) {
  var d = a.tag, e = d === 5 || d === 6;
  if (e)
    a = e ? a.stateNode : a.stateNode.instance, b ? c.nodeType === 8 ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (c.nodeType === 8 ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, c !== null && c !== void 0 || b.onclick !== null || (b.onclick = jf));
  else if (d !== 4 && (a = a.child, a !== null))
    for (gj(a, b, c), a = a.sibling; a !== null; )
      gj(a, b, c), a = a.sibling;
}
function hj(a, b, c) {
  var d = a.tag, e = d === 5 || d === 6;
  if (e)
    a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (d !== 4 && (a = a.child, a !== null))
    for (hj(a, b, c), a = a.sibling; a !== null; )
      hj(a, b, c), a = a.sibling;
}
function cj(a, b) {
  for (var c = b, d = false, e, f; ; ) {
    if (!d) {
      d = c.return;
      a:
        for (; ; ) {
          if (d === null)
            throw Error(y(160));
          e = d.stateNode;
          switch (d.tag) {
            case 5:
              f = false;
              break a;
            case 3:
              e = e.containerInfo;
              f = true;
              break a;
            case 4:
              e = e.containerInfo;
              f = true;
              break a;
          }
          d = d.return;
        }
      d = true;
    }
    if (c.tag === 5 || c.tag === 6) {
      a:
        for (var g = a, h = c, k = h; ; )
          if (bj(g, k), k.child !== null && k.tag !== 4)
            k.child.return = k, k = k.child;
          else {
            if (k === h)
              break a;
            for (; k.sibling === null; ) {
              if (k.return === null || k.return === h)
                break a;
              k = k.return;
            }
            k.sibling.return = k.return;
            k = k.sibling;
          }
      f ? (g = e, h = c.stateNode, g.nodeType === 8 ? g.parentNode.removeChild(h) : g.removeChild(h)) : e.removeChild(c.stateNode);
    } else if (c.tag === 4) {
      if (c.child !== null) {
        e = c.stateNode.containerInfo;
        f = true;
        c.child.return = c;
        c = c.child;
        continue;
      }
    } else if (bj(a, c), c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === b)
        return;
      c = c.return;
      c.tag === 4 && (d = false);
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
}
function ij(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var c = b.updateQueue;
      c = c !== null ? c.lastEffect : null;
      if (c !== null) {
        var d = c = c.next;
        do
          (d.tag & 3) === 3 && (a = d.destroy, d.destroy = void 0, a !== void 0 && a()), d = d.next;
        while (d !== c);
      }
      return;
    case 1:
      return;
    case 5:
      c = b.stateNode;
      if (c != null) {
        d = b.memoizedProps;
        var e = a !== null ? a.memoizedProps : d;
        a = b.type;
        var f = b.updateQueue;
        b.updateQueue = null;
        if (f !== null) {
          c[xf] = d;
          a === "input" && d.type === "radio" && d.name != null && $a(c, d);
          wb(a, e);
          b = wb(a, d);
          for (e = 0; e < f.length; e += 2) {
            var g = f[e], h = f[e + 1];
            g === "style" ? tb(c, h) : g === "dangerouslySetInnerHTML" ? ob(c, h) : g === "children" ? pb(c, h) : qa(c, g, h, b);
          }
          switch (a) {
            case "input":
              ab(c, d);
              break;
            case "textarea":
              ib(c, d);
              break;
            case "select":
              a = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, f = d.value, f != null ? fb(c, !!d.multiple, f, false) : a !== !!d.multiple && (d.defaultValue != null ? fb(c, !!d.multiple, d.defaultValue, true) : fb(c, !!d.multiple, d.multiple ? [] : "", false));
          }
        }
      }
      return;
    case 6:
      if (b.stateNode === null)
        throw Error(y(162));
      b.stateNode.nodeValue = b.memoizedProps;
      return;
    case 3:
      c = b.stateNode;
      c.hydrate && (c.hydrate = false, Cc(c.containerInfo));
      return;
    case 12:
      return;
    case 13:
      b.memoizedState !== null && (jj = O(), aj(b.child, true));
      kj(b);
      return;
    case 19:
      kj(b);
      return;
    case 17:
      return;
    case 23:
    case 24:
      aj(b, b.memoizedState !== null);
      return;
  }
  throw Error(y(163));
}
function kj(a) {
  var b = a.updateQueue;
  if (b !== null) {
    a.updateQueue = null;
    var c = a.stateNode;
    c === null && (c = a.stateNode = new Ui());
    b.forEach(function(b2) {
      var d = lj.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
function mj(a, b) {
  return a !== null && (a = a.memoizedState, a === null || a.dehydrated !== null) ? (b = b.memoizedState, b !== null && b.dehydrated === null) : false;
}
var nj = Math.ceil, oj = ra.ReactCurrentDispatcher, pj = ra.ReactCurrentOwner, X = 0, U = null, Y = null, W = 0, qj = 0, rj = Bf(0), V = 0, sj = null, tj = 0, Dg = 0, Hi = 0, uj = 0, vj = null, jj = 0, Ji = Infinity;
function wj() {
  Ji = O() + 500;
}
var Z = null, Qi = false, Ri = null, Ti = null, xj = false, yj = null, zj = 90, Aj = [], Bj = [], Cj = null, Dj = 0, Ej = null, Fj = -1, Gj = 0, Hj = 0, Ij = null, Jj = false;
function Hg() {
  return (X & 48) !== 0 ? O() : Fj !== -1 ? Fj : Fj = O();
}
function Ig(a) {
  a = a.mode;
  if ((a & 2) === 0)
    return 1;
  if ((a & 4) === 0)
    return eg() === 99 ? 1 : 2;
  Gj === 0 && (Gj = tj);
  if (kg.transition !== 0) {
    Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
    a = Gj;
    var b = 4186112 & ~Hj;
    b &= -b;
    b === 0 && (a = 4186112 & ~a, b = a & -a, b === 0 && (b = 8192));
    return b;
  }
  a = eg();
  (X & 4) !== 0 && a === 98 ? a = Xc(12, Gj) : (a = Sc(a), a = Xc(a, Gj));
  return a;
}
function Jg(a, b, c) {
  if (50 < Dj)
    throw Dj = 0, Ej = null, Error(y(185));
  a = Kj(a, b);
  if (a === null)
    return null;
  $c(a, b, c);
  a === U && (Hi |= b, V === 4 && Ii(a, W));
  var d = eg();
  b === 1 ? (X & 8) !== 0 && (X & 48) === 0 ? Lj(a) : (Mj(a, c), X === 0 && (wj(), ig())) : ((X & 4) === 0 || d !== 98 && d !== 99 || (Cj === null ? Cj = new Set([a]) : Cj.add(a)), Mj(a, c));
  vj = a;
}
function Kj(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  c !== null && (c.lanes |= b);
  c = a;
  for (a = a.return; a !== null; )
    a.childLanes |= b, c = a.alternate, c !== null && (c.childLanes |= b), c = a, a = a.return;
  return c.tag === 3 ? c.stateNode : null;
}
function Mj(a, b) {
  for (var c = a.callbackNode, d = a.suspendedLanes, e = a.pingedLanes, f = a.expirationTimes, g = a.pendingLanes; 0 < g; ) {
    var h = 31 - Vc(g), k = 1 << h, l2 = f[h];
    if (l2 === -1) {
      if ((k & d) === 0 || (k & e) !== 0) {
        l2 = b;
        Rc(k);
        var n2 = F;
        f[h] = 10 <= n2 ? l2 + 250 : 6 <= n2 ? l2 + 5e3 : -1;
      }
    } else
      l2 <= b && (a.expiredLanes |= k);
    g &= ~k;
  }
  d = Uc(a, a === U ? W : 0);
  b = F;
  if (d === 0)
    c !== null && (c !== Zf && Pf(c), a.callbackNode = null, a.callbackPriority = 0);
  else {
    if (c !== null) {
      if (a.callbackPriority === b)
        return;
      c !== Zf && Pf(c);
    }
    b === 15 ? (c = Lj.bind(null, a), ag === null ? (ag = [c], bg = Of(Uf, jg)) : ag.push(c), c = Zf) : b === 14 ? c = hg(99, Lj.bind(null, a)) : (c = Tc(b), c = hg(c, Nj.bind(null, a)));
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Nj(a) {
  Fj = -1;
  Hj = Gj = 0;
  if ((X & 48) !== 0)
    throw Error(y(327));
  var b = a.callbackNode;
  if (Oj() && a.callbackNode !== b)
    return null;
  var c = Uc(a, a === U ? W : 0);
  if (c === 0)
    return null;
  var d = c;
  var e = X;
  X |= 16;
  var f = Pj();
  if (U !== a || W !== d)
    wj(), Qj(a, d);
  do
    try {
      Rj();
      break;
    } catch (h) {
      Sj(a, h);
    }
  while (1);
  qg();
  oj.current = f;
  X = e;
  Y !== null ? d = 0 : (U = null, W = 0, d = V);
  if ((tj & Hi) !== 0)
    Qj(a, 0);
  else if (d !== 0) {
    d === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), c = Wc(a), c !== 0 && (d = Tj(a, c)));
    if (d === 1)
      throw b = sj, Qj(a, 0), Ii(a, c), Mj(a, O()), b;
    a.finishedWork = a.current.alternate;
    a.finishedLanes = c;
    switch (d) {
      case 0:
      case 1:
        throw Error(y(345));
      case 2:
        Uj(a);
        break;
      case 3:
        Ii(a, c);
        if ((c & 62914560) === c && (d = jj + 500 - O(), 10 < d)) {
          if (Uc(a, 0) !== 0)
            break;
          e = a.suspendedLanes;
          if ((e & c) !== c) {
            Hg();
            a.pingedLanes |= a.suspendedLanes & e;
            break;
          }
          a.timeoutHandle = of(Uj.bind(null, a), d);
          break;
        }
        Uj(a);
        break;
      case 4:
        Ii(a, c);
        if ((c & 4186112) === c)
          break;
        d = a.eventTimes;
        for (e = -1; 0 < c; ) {
          var g = 31 - Vc(c);
          f = 1 << g;
          g = d[g];
          g > e && (e = g);
          c &= ~f;
        }
        c = e;
        c = O() - c;
        c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * nj(c / 1960)) - c;
        if (10 < c) {
          a.timeoutHandle = of(Uj.bind(null, a), c);
          break;
        }
        Uj(a);
        break;
      case 5:
        Uj(a);
        break;
      default:
        throw Error(y(329));
    }
  }
  Mj(a, O());
  return a.callbackNode === b ? Nj.bind(null, a) : null;
}
function Ii(a, b) {
  b &= ~uj;
  b &= ~Hi;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b; ) {
    var c = 31 - Vc(b), d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Lj(a) {
  if ((X & 48) !== 0)
    throw Error(y(327));
  Oj();
  if (a === U && (a.expiredLanes & W) !== 0) {
    var b = W;
    var c = Tj(a, b);
    (tj & Hi) !== 0 && (b = Uc(a, b), c = Tj(a, b));
  } else
    b = Uc(a, 0), c = Tj(a, b);
  a.tag !== 0 && c === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), b = Wc(a), b !== 0 && (c = Tj(a, b)));
  if (c === 1)
    throw c = sj, Qj(a, 0), Ii(a, b), Mj(a, O()), c;
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Uj(a);
  Mj(a, O());
  return null;
}
function Vj() {
  if (Cj !== null) {
    var a = Cj;
    Cj = null;
    a.forEach(function(a2) {
      a2.expiredLanes |= 24 & a2.pendingLanes;
      Mj(a2, O());
    });
  }
  ig();
}
function Wj(a, b) {
  var c = X;
  X |= 1;
  try {
    return a(b);
  } finally {
    X = c, X === 0 && (wj(), ig());
  }
}
function Xj(a, b) {
  var c = X;
  X &= -2;
  X |= 8;
  try {
    return a(b);
  } finally {
    X = c, X === 0 && (wj(), ig());
  }
}
function ni(a, b) {
  I(rj, qj);
  qj |= b;
  tj |= b;
}
function Ki() {
  qj = rj.current;
  H(rj);
}
function Qj(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  c !== -1 && (a.timeoutHandle = -1, pf(c));
  if (Y !== null)
    for (c = Y.return; c !== null; ) {
      var d = c;
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          d !== null && d !== void 0 && Gf();
          break;
        case 3:
          fh();
          H(N);
          H(M);
          uh();
          break;
        case 5:
          hh(d);
          break;
        case 4:
          fh();
          break;
        case 13:
          H(P);
          break;
        case 19:
          H(P);
          break;
        case 10:
          rg(d);
          break;
        case 23:
        case 24:
          Ki();
      }
      c = c.return;
    }
  U = a;
  Y = Tg(a.current, null);
  W = qj = tj = b;
  V = 0;
  sj = null;
  uj = Hi = Dg = 0;
}
function Sj(a, b) {
  do {
    var c = Y;
    try {
      qg();
      vh.current = Gh;
      if (yh) {
        for (var d = R.memoizedState; d !== null; ) {
          var e = d.queue;
          e !== null && (e.pending = null);
          d = d.next;
        }
        yh = false;
      }
      xh = 0;
      T = S = R = null;
      zh = false;
      pj.current = null;
      if (c === null || c.return === null) {
        V = 1;
        sj = b;
        Y = null;
        break;
      }
      a: {
        var f = a, g = c.return, h = c, k = b;
        b = W;
        h.flags |= 2048;
        h.firstEffect = h.lastEffect = null;
        if (k !== null && typeof k === "object" && typeof k.then === "function") {
          var l2 = k;
          if ((h.mode & 2) === 0) {
            var n2 = h.alternate;
            n2 ? (h.updateQueue = n2.updateQueue, h.memoizedState = n2.memoizedState, h.lanes = n2.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var A2 = (P.current & 1) !== 0, p2 = g;
          do {
            var C2;
            if (C2 = p2.tag === 13) {
              var x2 = p2.memoizedState;
              if (x2 !== null)
                C2 = x2.dehydrated !== null ? true : false;
              else {
                var w = p2.memoizedProps;
                C2 = w.fallback === void 0 ? false : w.unstable_avoidThisFallback !== true ? true : A2 ? false : true;
              }
            }
            if (C2) {
              var z2 = p2.updateQueue;
              if (z2 === null) {
                var u2 = new Set();
                u2.add(l2);
                p2.updateQueue = u2;
              } else
                z2.add(l2);
              if ((p2.mode & 2) === 0) {
                p2.flags |= 64;
                h.flags |= 16384;
                h.flags &= -2981;
                if (h.tag === 1)
                  if (h.alternate === null)
                    h.tag = 17;
                  else {
                    var t2 = zg(-1, 1);
                    t2.tag = 2;
                    Ag(h, t2);
                  }
                h.lanes |= 1;
                break a;
              }
              k = void 0;
              h = b;
              var q2 = f.pingCache;
              q2 === null ? (q2 = f.pingCache = new Oi(), k = new Set(), q2.set(l2, k)) : (k = q2.get(l2), k === void 0 && (k = new Set(), q2.set(l2, k)));
              if (!k.has(h)) {
                k.add(h);
                var v2 = Yj.bind(null, f, l2, h);
                l2.then(v2, v2);
              }
              p2.flags |= 4096;
              p2.lanes = b;
              break a;
            }
            p2 = p2.return;
          } while (p2 !== null);
          k = Error((Ra(h.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
        }
        V !== 5 && (V = 2);
        k = Mi(k, h);
        p2 = g;
        do {
          switch (p2.tag) {
            case 3:
              f = k;
              p2.flags |= 4096;
              b &= -b;
              p2.lanes |= b;
              var J2 = Pi(p2, f, b);
              Bg(p2, J2);
              break a;
            case 1:
              f = k;
              var K2 = p2.type, Q2 = p2.stateNode;
              if ((p2.flags & 64) === 0 && (typeof K2.getDerivedStateFromError === "function" || Q2 !== null && typeof Q2.componentDidCatch === "function" && (Ti === null || !Ti.has(Q2)))) {
                p2.flags |= 4096;
                b &= -b;
                p2.lanes |= b;
                var L2 = Si(p2, f, b);
                Bg(p2, L2);
                break a;
              }
          }
          p2 = p2.return;
        } while (p2 !== null);
      }
      Zj(c);
    } catch (va) {
      b = va;
      Y === c && c !== null && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Pj() {
  var a = oj.current;
  oj.current = Gh;
  return a === null ? Gh : a;
}
function Tj(a, b) {
  var c = X;
  X |= 16;
  var d = Pj();
  U === a && W === b || Qj(a, b);
  do
    try {
      ak();
      break;
    } catch (e) {
      Sj(a, e);
    }
  while (1);
  qg();
  X = c;
  oj.current = d;
  if (Y !== null)
    throw Error(y(261));
  U = null;
  W = 0;
  return V;
}
function ak() {
  for (; Y !== null; )
    bk(Y);
}
function Rj() {
  for (; Y !== null && !Qf(); )
    bk(Y);
}
function bk(a) {
  var b = ck(a.alternate, a, qj);
  a.memoizedProps = a.pendingProps;
  b === null ? Zj(a) : Y = b;
  pj.current = null;
}
function Zj(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if ((b.flags & 2048) === 0) {
      c = Gi(c, b, qj);
      if (c !== null) {
        Y = c;
        return;
      }
      c = b;
      if (c.tag !== 24 && c.tag !== 23 || c.memoizedState === null || (qj & 1073741824) !== 0 || (c.mode & 4) === 0) {
        for (var d = 0, e = c.child; e !== null; )
          d |= e.lanes | e.childLanes, e = e.sibling;
        c.childLanes = d;
      }
      a !== null && (a.flags & 2048) === 0 && (a.firstEffect === null && (a.firstEffect = b.firstEffect), b.lastEffect !== null && (a.lastEffect !== null && (a.lastEffect.nextEffect = b.firstEffect), a.lastEffect = b.lastEffect), 1 < b.flags && (a.lastEffect !== null ? a.lastEffect.nextEffect = b : a.firstEffect = b, a.lastEffect = b));
    } else {
      c = Li(b);
      if (c !== null) {
        c.flags &= 2047;
        Y = c;
        return;
      }
      a !== null && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
    }
    b = b.sibling;
    if (b !== null) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (b !== null);
  V === 0 && (V = 5);
}
function Uj(a) {
  var b = eg();
  gg(99, dk.bind(null, a, b));
  return null;
}
function dk(a, b) {
  do
    Oj();
  while (yj !== null);
  if ((X & 48) !== 0)
    throw Error(y(327));
  var c = a.finishedWork;
  if (c === null)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current)
    throw Error(y(177));
  a.callbackNode = null;
  var d = c.lanes | c.childLanes, e = d, f = a.pendingLanes & ~e;
  a.pendingLanes = e;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= e;
  a.mutableReadLanes &= e;
  a.entangledLanes &= e;
  e = a.entanglements;
  for (var g = a.eventTimes, h = a.expirationTimes; 0 < f; ) {
    var k = 31 - Vc(f), l2 = 1 << k;
    e[k] = 0;
    g[k] = -1;
    h[k] = -1;
    f &= ~l2;
  }
  Cj !== null && (d & 24) === 0 && Cj.has(a) && Cj.delete(a);
  a === U && (Y = U = null, W = 0);
  1 < c.flags ? c.lastEffect !== null ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;
  if (d !== null) {
    e = X;
    X |= 32;
    pj.current = null;
    kf = fd;
    g = Ne();
    if (Oe(g)) {
      if ("selectionStart" in g)
        h = { start: g.selectionStart, end: g.selectionEnd };
      else
        a:
          if (h = (h = g.ownerDocument) && h.defaultView || window, (l2 = h.getSelection && h.getSelection()) && l2.rangeCount !== 0) {
            h = l2.anchorNode;
            f = l2.anchorOffset;
            k = l2.focusNode;
            l2 = l2.focusOffset;
            try {
              h.nodeType, k.nodeType;
            } catch (va) {
              h = null;
              break a;
            }
            var n2 = 0, A2 = -1, p2 = -1, C2 = 0, x2 = 0, w = g, z2 = null;
            b:
              for (; ; ) {
                for (var u2; ; ) {
                  w !== h || f !== 0 && w.nodeType !== 3 || (A2 = n2 + f);
                  w !== k || l2 !== 0 && w.nodeType !== 3 || (p2 = n2 + l2);
                  w.nodeType === 3 && (n2 += w.nodeValue.length);
                  if ((u2 = w.firstChild) === null)
                    break;
                  z2 = w;
                  w = u2;
                }
                for (; ; ) {
                  if (w === g)
                    break b;
                  z2 === h && ++C2 === f && (A2 = n2);
                  z2 === k && ++x2 === l2 && (p2 = n2);
                  if ((u2 = w.nextSibling) !== null)
                    break;
                  w = z2;
                  z2 = w.parentNode;
                }
                w = u2;
              }
            h = A2 === -1 || p2 === -1 ? null : { start: A2, end: p2 };
          } else
            h = null;
      h = h || { start: 0, end: 0 };
    } else
      h = null;
    lf = { focusedElem: g, selectionRange: h };
    fd = false;
    Ij = null;
    Jj = false;
    Z = d;
    do
      try {
        ek();
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Ij = null;
    Z = d;
    do
      try {
        for (g = a; Z !== null; ) {
          var t2 = Z.flags;
          t2 & 16 && pb(Z.stateNode, "");
          if (t2 & 128) {
            var q2 = Z.alternate;
            if (q2 !== null) {
              var v2 = q2.ref;
              v2 !== null && (typeof v2 === "function" ? v2(null) : v2.current = null);
            }
          }
          switch (t2 & 1038) {
            case 2:
              fj(Z);
              Z.flags &= -3;
              break;
            case 6:
              fj(Z);
              Z.flags &= -3;
              ij(Z.alternate, Z);
              break;
            case 1024:
              Z.flags &= -1025;
              break;
            case 1028:
              Z.flags &= -1025;
              ij(Z.alternate, Z);
              break;
            case 4:
              ij(Z.alternate, Z);
              break;
            case 8:
              h = Z;
              cj(g, h);
              var J2 = h.alternate;
              dj(h);
              J2 !== null && dj(J2);
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    v2 = lf;
    q2 = Ne();
    t2 = v2.focusedElem;
    g = v2.selectionRange;
    if (q2 !== t2 && t2 && t2.ownerDocument && Me(t2.ownerDocument.documentElement, t2)) {
      g !== null && Oe(t2) && (q2 = g.start, v2 = g.end, v2 === void 0 && (v2 = q2), "selectionStart" in t2 ? (t2.selectionStart = q2, t2.selectionEnd = Math.min(v2, t2.value.length)) : (v2 = (q2 = t2.ownerDocument || document) && q2.defaultView || window, v2.getSelection && (v2 = v2.getSelection(), h = t2.textContent.length, J2 = Math.min(g.start, h), g = g.end === void 0 ? J2 : Math.min(g.end, h), !v2.extend && J2 > g && (h = g, g = J2, J2 = h), h = Le(t2, J2), f = Le(t2, g), h && f && (v2.rangeCount !== 1 || v2.anchorNode !== h.node || v2.anchorOffset !== h.offset || v2.focusNode !== f.node || v2.focusOffset !== f.offset) && (q2 = q2.createRange(), q2.setStart(h.node, h.offset), v2.removeAllRanges(), J2 > g ? (v2.addRange(q2), v2.extend(f.node, f.offset)) : (q2.setEnd(f.node, f.offset), v2.addRange(q2))))));
      q2 = [];
      for (v2 = t2; v2 = v2.parentNode; )
        v2.nodeType === 1 && q2.push({ element: v2, left: v2.scrollLeft, top: v2.scrollTop });
      typeof t2.focus === "function" && t2.focus();
      for (t2 = 0; t2 < q2.length; t2++)
        v2 = q2[t2], v2.element.scrollLeft = v2.left, v2.element.scrollTop = v2.top;
    }
    fd = !!kf;
    lf = kf = null;
    a.current = c;
    Z = d;
    do
      try {
        for (t2 = a; Z !== null; ) {
          var K2 = Z.flags;
          K2 & 36 && Yi(t2, Z.alternate, Z);
          if (K2 & 128) {
            q2 = void 0;
            var Q2 = Z.ref;
            if (Q2 !== null) {
              var L2 = Z.stateNode;
              switch (Z.tag) {
                case 5:
                  q2 = L2;
                  break;
                default:
                  q2 = L2;
              }
              typeof Q2 === "function" ? Q2(q2) : Q2.current = q2;
            }
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Z = null;
    $f();
    X = e;
  } else
    a.current = c;
  if (xj)
    xj = false, yj = a, zj = b;
  else
    for (Z = d; Z !== null; )
      b = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K2 = Z, K2.sibling = null, K2.stateNode = null), Z = b;
  d = a.pendingLanes;
  d === 0 && (Ti = null);
  d === 1 ? a === Ej ? Dj++ : (Dj = 0, Ej = a) : Dj = 0;
  c = c.stateNode;
  if (Mf && typeof Mf.onCommitFiberRoot === "function")
    try {
      Mf.onCommitFiberRoot(Lf, c, void 0, (c.current.flags & 64) === 64);
    } catch (va) {
    }
  Mj(a, O());
  if (Qi)
    throw Qi = false, a = Ri, Ri = null, a;
  if ((X & 8) !== 0)
    return null;
  ig();
  return null;
}
function ek() {
  for (; Z !== null; ) {
    var a = Z.alternate;
    Jj || Ij === null || ((Z.flags & 8) !== 0 ? dc(Z, Ij) && (Jj = true) : Z.tag === 13 && mj(a, Z) && dc(Z, Ij) && (Jj = true));
    var b = Z.flags;
    (b & 256) !== 0 && Xi(a, Z);
    (b & 512) === 0 || xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
    Z = Z.nextEffect;
  }
}
function Oj() {
  if (zj !== 90) {
    var a = 97 < zj ? 97 : zj;
    zj = 90;
    return gg(a, fk);
  }
  return false;
}
function $i(a, b) {
  Aj.push(b, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function Zi(a, b) {
  Bj.push(b, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function fk() {
  if (yj === null)
    return false;
  var a = yj;
  yj = null;
  if ((X & 48) !== 0)
    throw Error(y(331));
  var b = X;
  X |= 32;
  var c = Bj;
  Bj = [];
  for (var d = 0; d < c.length; d += 2) {
    var e = c[d], f = c[d + 1], g = e.destroy;
    e.destroy = void 0;
    if (typeof g === "function")
      try {
        g();
      } catch (k) {
        if (f === null)
          throw Error(y(330));
        Wi(f, k);
      }
  }
  c = Aj;
  Aj = [];
  for (d = 0; d < c.length; d += 2) {
    e = c[d];
    f = c[d + 1];
    try {
      var h = e.create;
      e.destroy = h();
    } catch (k) {
      if (f === null)
        throw Error(y(330));
      Wi(f, k);
    }
  }
  for (h = a.current.firstEffect; h !== null; )
    a = h.nextEffect, h.nextEffect = null, h.flags & 8 && (h.sibling = null, h.stateNode = null), h = a;
  X = b;
  ig();
  return true;
}
function gk(a, b, c) {
  b = Mi(c, b);
  b = Pi(a, b, 1);
  Ag(a, b);
  b = Hg();
  a = Kj(a, 1);
  a !== null && ($c(a, 1, b), Mj(a, b));
}
function Wi(a, b) {
  if (a.tag === 3)
    gk(a, a, b);
  else
    for (var c = a.return; c !== null; ) {
      if (c.tag === 3) {
        gk(c, a, b);
        break;
      } else if (c.tag === 1) {
        var d = c.stateNode;
        if (typeof c.type.getDerivedStateFromError === "function" || typeof d.componentDidCatch === "function" && (Ti === null || !Ti.has(d))) {
          a = Mi(b, a);
          var e = Si(c, a, 1);
          Ag(c, e);
          e = Hg();
          c = Kj(c, 1);
          if (c !== null)
            $c(c, 1, e), Mj(c, e);
          else if (typeof d.componentDidCatch === "function" && (Ti === null || !Ti.has(d)))
            try {
              d.componentDidCatch(b, a);
            } catch (f) {
            }
          break;
        }
      }
      c = c.return;
    }
}
function Yj(a, b, c) {
  var d = a.pingCache;
  d !== null && d.delete(b);
  b = Hg();
  a.pingedLanes |= a.suspendedLanes & c;
  U === a && (W & c) === c && (V === 4 || V === 3 && (W & 62914560) === W && 500 > O() - jj ? Qj(a, 0) : uj |= c);
  Mj(a, b);
}
function lj(a, b) {
  var c = a.stateNode;
  c !== null && c.delete(b);
  b = 0;
  b === 0 && (b = a.mode, (b & 2) === 0 ? b = 1 : (b & 4) === 0 ? b = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b = Yc(62914560 & ~Gj), b === 0 && (b = 4194304)));
  c = Hg();
  a = Kj(a, b);
  a !== null && ($c(a, b, c), Mj(a, c));
}
var ck;
ck = function(a, b, c) {
  var d = b.lanes;
  if (a !== null)
    if (a.memoizedProps !== b.pendingProps || N.current)
      ug = true;
    else if ((c & d) !== 0)
      ug = (a.flags & 16384) !== 0 ? true : false;
    else {
      ug = false;
      switch (b.tag) {
        case 3:
          ri(b);
          sh();
          break;
        case 5:
          gh(b);
          break;
        case 1:
          Ff(b.type) && Jf(b);
          break;
        case 4:
          eh(b, b.stateNode.containerInfo);
          break;
        case 10:
          d = b.memoizedProps.value;
          var e = b.type._context;
          I(mg, e._currentValue);
          e._currentValue = d;
          break;
        case 13:
          if (b.memoizedState !== null) {
            if ((c & b.child.childLanes) !== 0)
              return ti(a, b, c);
            I(P, P.current & 1);
            b = hi(a, b, c);
            return b !== null ? b.sibling : null;
          }
          I(P, P.current & 1);
          break;
        case 19:
          d = (c & b.childLanes) !== 0;
          if ((a.flags & 64) !== 0) {
            if (d)
              return Ai(a, b, c);
            b.flags |= 64;
          }
          e = b.memoizedState;
          e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null);
          I(P, P.current);
          if (d)
            break;
          else
            return null;
        case 23:
        case 24:
          return b.lanes = 0, mi(a, b, c);
      }
      return hi(a, b, c);
    }
  else
    ug = false;
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      d = b.type;
      a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
      a = b.pendingProps;
      e = Ef(b, M.current);
      tg(b, c);
      e = Ch(null, b, d, a, e, c);
      b.flags |= 1;
      if (typeof e === "object" && e !== null && typeof e.render === "function" && e.$$typeof === void 0) {
        b.tag = 1;
        b.memoizedState = null;
        b.updateQueue = null;
        if (Ff(d)) {
          var f = true;
          Jf(b);
        } else
          f = false;
        b.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null;
        xg(b);
        var g = d.getDerivedStateFromProps;
        typeof g === "function" && Gg(b, d, g, a);
        e.updater = Kg;
        b.stateNode = e;
        e._reactInternals = b;
        Og(b, d, a, c);
        b = qi(null, b, d, true, f, c);
      } else
        b.tag = 0, fi(null, b, e, c), b = b.child;
      return b;
    case 16:
      e = b.elementType;
      a: {
        a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
        a = b.pendingProps;
        f = e._init;
        e = f(e._payload);
        b.type = e;
        f = b.tag = hk(e);
        a = lg(e, a);
        switch (f) {
          case 0:
            b = li(null, b, e, a, c);
            break a;
          case 1:
            b = pi(null, b, e, a, c);
            break a;
          case 11:
            b = gi(null, b, e, a, c);
            break a;
          case 14:
            b = ii(null, b, e, lg(e.type, a), d, c);
            break a;
        }
        throw Error(y(306, e, ""));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), li(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), pi(a, b, d, e, c);
    case 3:
      ri(b);
      d = b.updateQueue;
      if (a === null || d === null)
        throw Error(y(282));
      d = b.pendingProps;
      e = b.memoizedState;
      e = e !== null ? e.element : null;
      yg(a, b);
      Cg(b, d, null, c);
      d = b.memoizedState.element;
      if (d === e)
        sh(), b = hi(a, b, c);
      else {
        e = b.stateNode;
        if (f = e.hydrate)
          kh = rf(b.stateNode.containerInfo.firstChild), jh = b, f = lh = true;
        if (f) {
          a = e.mutableSourceEagerHydrationData;
          if (a != null)
            for (e = 0; e < a.length; e += 2)
              f = a[e], f._workInProgressVersionPrimary = a[e + 1], th.push(f);
          c = Zg(b, null, d, c);
          for (b.child = c; c; )
            c.flags = c.flags & -3 | 1024, c = c.sibling;
        } else
          fi(a, b, d, c), sh();
        b = b.child;
      }
      return b;
    case 5:
      return gh(b), a === null && ph(b), d = b.type, e = b.pendingProps, f = a !== null ? a.memoizedProps : null, g = e.children, nf(d, e) ? g = null : f !== null && nf(d, f) && (b.flags |= 16), oi(a, b), fi(a, b, g, c), b.child;
    case 6:
      return a === null && ph(b), null;
    case 13:
      return ti(a, b, c);
    case 4:
      return eh(b, b.stateNode.containerInfo), d = b.pendingProps, a === null ? b.child = Yg(b, null, d, c) : fi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), gi(a, b, d, e, c);
    case 7:
      return fi(a, b, b.pendingProps, c), b.child;
    case 8:
      return fi(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return fi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        g = b.memoizedProps;
        f = e.value;
        var h = b.type._context;
        I(mg, h._currentValue);
        h._currentValue = f;
        if (g !== null)
          if (h = g.value, f = He(h, f) ? 0 : (typeof d._calculateChangedBits === "function" ? d._calculateChangedBits(h, f) : 1073741823) | 0, f === 0) {
            if (g.children === e.children && !N.current) {
              b = hi(a, b, c);
              break a;
            }
          } else
            for (h = b.child, h !== null && (h.return = b); h !== null; ) {
              var k = h.dependencies;
              if (k !== null) {
                g = h.child;
                for (var l2 = k.firstContext; l2 !== null; ) {
                  if (l2.context === d && (l2.observedBits & f) !== 0) {
                    h.tag === 1 && (l2 = zg(-1, c & -c), l2.tag = 2, Ag(h, l2));
                    h.lanes |= c;
                    l2 = h.alternate;
                    l2 !== null && (l2.lanes |= c);
                    sg(h.return, c);
                    k.lanes |= c;
                    break;
                  }
                  l2 = l2.next;
                }
              } else
                g = h.tag === 10 ? h.type === b.type ? null : h.child : h.child;
              if (g !== null)
                g.return = h;
              else
                for (g = h; g !== null; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  h = g.sibling;
                  if (h !== null) {
                    h.return = g.return;
                    g = h;
                    break;
                  }
                  g = g.return;
                }
              h = g;
            }
        fi(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, f = b.pendingProps, d = f.children, tg(b, c), e = vg(e, f.unstable_observedBits), d = d(e), b.flags |= 1, fi(a, b, d, c), b.child;
    case 14:
      return e = b.type, f = lg(e, b.pendingProps), f = lg(e.type, f), ii(a, b, e, f, d, c);
    case 15:
      return ki(a, b, b.type, b.pendingProps, d, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, Ff(d) ? (a = true, Jf(b)) : a = false, tg(b, c), Mg(b, d, e), Og(b, d, e, c), qi(null, b, d, true, a, c);
    case 19:
      return Ai(a, b, c);
    case 23:
      return mi(a, b, c);
    case 24:
      return mi(a, b, c);
  }
  throw Error(y(156, b.tag));
};
function ik(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.flags = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function nh(a, b, c, d) {
  return new ik(a, b, c, d);
}
function ji(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function hk(a) {
  if (typeof a === "function")
    return ji(a) ? 1 : 0;
  if (a !== void 0 && a !== null) {
    a = a.$$typeof;
    if (a === Aa)
      return 11;
    if (a === Da)
      return 14;
  }
  return 2;
}
function Tg(a, b) {
  var c = a.alternate;
  c === null ? (c = nh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = b === null ? null : { lanes: b.lanes, firstContext: b.firstContext };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function Vg(a, b, c, d, e, f) {
  var g = 2;
  d = a;
  if (typeof a === "function")
    ji(a) && (g = 1);
  else if (typeof a === "string")
    g = 5;
  else
    a:
      switch (a) {
        case ua:
          return Xg(c.children, e, f, b);
        case Ha:
          g = 8;
          e |= 16;
          break;
        case wa:
          g = 8;
          e |= 1;
          break;
        case xa:
          return a = nh(12, c, b, e | 8), a.elementType = xa, a.type = xa, a.lanes = f, a;
        case Ba:
          return a = nh(13, c, b, e), a.type = Ba, a.elementType = Ba, a.lanes = f, a;
        case Ca:
          return a = nh(19, c, b, e), a.elementType = Ca, a.lanes = f, a;
        case Ia:
          return vi(c, e, f, b);
        case Ja:
          return a = nh(24, c, b, e), a.elementType = Ja, a.lanes = f, a;
        default:
          if (typeof a === "object" && a !== null)
            switch (a.$$typeof) {
              case ya:
                g = 10;
                break a;
              case za:
                g = 9;
                break a;
              case Aa:
                g = 11;
                break a;
              case Da:
                g = 14;
                break a;
              case Ea:
                g = 16;
                d = null;
                break a;
              case Fa:
                g = 22;
                break a;
            }
          throw Error(y(130, a == null ? a : typeof a, ""));
      }
  b = nh(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f;
  return b;
}
function Xg(a, b, c, d) {
  a = nh(7, a, d, b);
  a.lanes = c;
  return a;
}
function vi(a, b, c, d) {
  a = nh(23, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  return a;
}
function Ug(a, b, c) {
  a = nh(6, a, null, b);
  a.lanes = c;
  return a;
}
function Wg(a, b, c) {
  b = nh(4, a.children !== null ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b;
}
function jk(a, b, c) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c;
  this.callbackNode = null;
  this.callbackPriority = 0;
  this.eventTimes = Zc(0);
  this.expirationTimes = Zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = Zc(0);
  this.mutableSourceEagerHydrationData = null;
}
function kk(a, b, c) {
  var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ta, key: d == null ? null : "" + d, children: a, containerInfo: b, implementation: c };
}
function lk(a, b, c, d) {
  var e = b.current, f = Hg(), g = Ig(e);
  a:
    if (c) {
      c = c._reactInternals;
      b: {
        if (Zb(c) !== c || c.tag !== 1)
          throw Error(y(170));
        var h = c;
        do {
          switch (h.tag) {
            case 3:
              h = h.stateNode.context;
              break b;
            case 1:
              if (Ff(h.type)) {
                h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h = h.return;
        } while (h !== null);
        throw Error(y(171));
      }
      if (c.tag === 1) {
        var k = c.type;
        if (Ff(k)) {
          c = If(c, k, h);
          break a;
        }
      }
      c = h;
    } else
      c = Cf;
  b.context === null ? b.context = c : b.pendingContext = c;
  b = zg(f, g);
  b.payload = { element: a };
  d = d === void 0 ? null : d;
  d !== null && (b.callback = d);
  Ag(e, b);
  Jg(e, g, f);
  return g;
}
function mk(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function nk(a, b) {
  a = a.memoizedState;
  if (a !== null && a.dehydrated !== null) {
    var c = a.retryLane;
    a.retryLane = c !== 0 && c < b ? c : b;
  }
}
function ok(a, b) {
  nk(a, b);
  (a = a.alternate) && nk(a, b);
}
function pk() {
  return null;
}
function qk(a, b, c) {
  var d = c != null && c.hydrationOptions != null && c.hydrationOptions.mutableSources || null;
  c = new jk(a, b, c != null && c.hydrate === true);
  b = nh(3, null, null, b === 2 ? 7 : b === 1 ? 3 : 0);
  c.current = b;
  b.stateNode = c;
  xg(b);
  a[ff] = c.current;
  cf(a.nodeType === 8 ? a.parentNode : a);
  if (d)
    for (a = 0; a < d.length; a++) {
      b = d[a];
      var e = b._getVersion;
      e = e(b._source);
      c.mutableSourceEagerHydrationData == null ? c.mutableSourceEagerHydrationData = [b, e] : c.mutableSourceEagerHydrationData.push(b, e);
    }
  this._internalRoot = c;
}
qk.prototype.render = function(a) {
  lk(a, this._internalRoot, null, null);
};
qk.prototype.unmount = function() {
  var a = this._internalRoot, b = a.containerInfo;
  lk(null, a, null, function() {
    b[ff] = null;
  });
};
function rk(a) {
  return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11 && (a.nodeType !== 8 || a.nodeValue !== " react-mount-point-unstable "));
}
function sk(a, b) {
  b || (b = a ? a.nodeType === 9 ? a.documentElement : a.firstChild : null, b = !(!b || b.nodeType !== 1 || !b.hasAttribute("data-reactroot")));
  if (!b)
    for (var c; c = a.lastChild; )
      a.removeChild(c);
  return new qk(a, 0, b ? { hydrate: true } : void 0);
}
function tk(a, b, c, d, e) {
  var f = c._reactRootContainer;
  if (f) {
    var g = f._internalRoot;
    if (typeof e === "function") {
      var h = e;
      e = function() {
        var a2 = mk(g);
        h.call(a2);
      };
    }
    lk(b, g, a, e);
  } else {
    f = c._reactRootContainer = sk(c, d);
    g = f._internalRoot;
    if (typeof e === "function") {
      var k = e;
      e = function() {
        var a2 = mk(g);
        k.call(a2);
      };
    }
    Xj(function() {
      lk(b, g, a, e);
    });
  }
  return mk(g);
}
ec = function(a) {
  if (a.tag === 13) {
    var b = Hg();
    Jg(a, 4, b);
    ok(a, 4);
  }
};
fc = function(a) {
  if (a.tag === 13) {
    var b = Hg();
    Jg(a, 67108864, b);
    ok(a, 67108864);
  }
};
gc = function(a) {
  if (a.tag === 13) {
    var b = Hg(), c = Ig(a);
    Jg(a, c, b);
    ok(a, c);
  }
};
hc = function(a, b) {
  return b();
};
yb = function(a, b, c) {
  switch (b) {
    case "input":
      ab(a, c);
      b = c.name;
      if (c.type === "radio" && b != null) {
        for (c = a; c.parentNode; )
          c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e)
              throw Error(y(90));
            Wa(d);
            ab(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, b != null && fb(a, !!c.multiple, b, false);
  }
};
Gb = Wj;
Hb = function(a, b, c, d, e) {
  var f = X;
  X |= 4;
  try {
    return gg(98, a.bind(null, b, c, d, e));
  } finally {
    X = f, X === 0 && (wj(), ig());
  }
};
Ib = function() {
  (X & 49) === 0 && (Vj(), Oj());
};
Jb = function(a, b) {
  var c = X;
  X |= 2;
  try {
    return a(b);
  } finally {
    X = c, X === 0 && (wj(), ig());
  }
};
function uk(a, b) {
  var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rk(b))
    throw Error(y(200));
  return kk(a, b, null, c);
}
var vk = { Events: [Cb, ue, Db, Eb, Fb, Oj, { current: false }] }, wk = { findFiberByHostInstance: wc, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" };
var xk = { bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = cc(a);
  return a === null ? null : a.stateNode;
}, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  var yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yk.isDisabled && yk.supportsFiber)
    try {
      Lf = yk.inject(xk), Mf = yk;
    } catch (a) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
reactDom_production_min.createPortal = uk;
reactDom_production_min.findDOMNode = function(a) {
  if (a == null)
    return null;
  if (a.nodeType === 1)
    return a;
  var b = a._reactInternals;
  if (b === void 0) {
    if (typeof a.render === "function")
      throw Error(y(188));
    throw Error(y(268, Object.keys(a)));
  }
  a = cc(b);
  a = a === null ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a, b) {
  var c = X;
  if ((c & 48) !== 0)
    return a(b);
  X |= 1;
  try {
    if (a)
      return gg(99, a.bind(null, b));
  } finally {
    X = c, ig();
  }
};
reactDom_production_min.hydrate = function(a, b, c) {
  if (!rk(b))
    throw Error(y(200));
  return tk(null, a, b, true, c);
};
reactDom_production_min.render = function(a, b, c) {
  if (!rk(b))
    throw Error(y(200));
  return tk(null, a, b, false, c);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!rk(a))
    throw Error(y(40));
  return a._reactRootContainer ? (Xj(function() {
    tk(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[ff] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Wj;
reactDom_production_min.unstable_createPortal = function(a, b) {
  return uk(a, b, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!rk(c))
    throw Error(y(200));
  if (a == null || a._reactInternals === void 0)
    throw Error(y(38));
  return tk(a, b, c, false, d);
};
reactDom_production_min.version = "17.0.2";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var ReactDOM = reactDom.exports;
var groups = {
  "978-0": {
    "name": "English language",
    "ranges": [
      [
        "00",
        "19"
      ],
      [
        "200",
        "699"
      ],
      [
        "7000",
        "8499"
      ],
      [
        "85000",
        "89999"
      ],
      [
        "900000",
        "949999"
      ],
      [
        "9500000",
        "9999999"
      ]
    ]
  },
  "978-1": {
    "name": "English language",
    "ranges": [
      [
        "00",
        "09"
      ],
      [
        "100",
        "399"
      ],
      [
        "4000",
        "5499"
      ],
      [
        "55000",
        "86979"
      ],
      [
        "869800",
        "998999"
      ],
      [
        "9990000",
        "9999999"
      ]
    ]
  },
  "978-2": {
    "name": "French language",
    "ranges": [
      [
        "00",
        "19"
      ],
      [
        "200",
        "349"
      ],
      [
        "35000",
        "39999"
      ],
      [
        "400",
        "699"
      ],
      [
        "7000",
        "8399"
      ],
      [
        "84000",
        "89999"
      ],
      [
        "900000",
        "949999"
      ],
      [
        "9500000",
        "9999999"
      ]
    ]
  },
  "978-3": {
    "name": "German language",
    "ranges": [
      [
        "00",
        "02"
      ],
      [
        "030",
        "033"
      ],
      [
        "0340",
        "0369"
      ],
      [
        "03700",
        "03999"
      ],
      [
        "04",
        "19"
      ],
      [
        "200",
        "699"
      ],
      [
        "7000",
        "8499"
      ],
      [
        "85000",
        "89999"
      ],
      [
        "900000",
        "949999"
      ],
      [
        "9500000",
        "9539999"
      ],
      [
        "95400",
        "96999"
      ],
      [
        "9700000",
        "9899999"
      ],
      [
        "99000",
        "99499"
      ],
      [
        "99500",
        "99999"
      ]
    ]
  },
  "978-4": {
    "name": "Japan",
    "ranges": [
      [
        "00",
        "19"
      ],
      [
        "200",
        "699"
      ],
      [
        "7000",
        "8499"
      ],
      [
        "85000",
        "89999"
      ],
      [
        "900000",
        "949999"
      ],
      [
        "9500000",
        "9999999"
      ]
    ]
  },
  "978-5": {
    "name": "former U.S.S.R",
    "ranges": [
      [
        "00000",
        "00499"
      ],
      [
        "0050",
        "0099"
      ],
      [
        "01",
        "19"
      ],
      [
        "200",
        "420"
      ],
      [
        "4210",
        "4299"
      ],
      [
        "430",
        "430"
      ],
      [
        "4310",
        "4399"
      ],
      [
        "440",
        "440"
      ],
      [
        "4410",
        "4499"
      ],
      [
        "450",
        "699"
      ],
      [
        "7000",
        "8499"
      ],
      [
        "85000",
        "89999"
      ],
      [
        "900000",
        "909999"
      ],
      [
        "91000",
        "91999"
      ],
      [
        "9200",
        "9299"
      ],
      [
        "93000",
        "94999"
      ],
      [
        "9500000",
        "9500999"
      ],
      [
        "9501",
        "9799"
      ],
      [
        "98000",
        "98999"
      ],
      [
        "9900000",
        "9909999"
      ],
      [
        "9910",
        "9999"
      ]
    ]
  },
  "978-600": {
    "name": "Iran",
    "ranges": [
      [
        "00",
        "09"
      ],
      [
        "100",
        "499"
      ],
      [
        "5000",
        "8999"
      ],
      [
        "90000",
        "99999"
      ]
    ]
  },
  "978-601": {
    "name": "Kazakhstan",
    "ranges": [
      [
        "00",
        "19"
      ],
      [
        "200",
        "699"
      ],
      [
        "7000",
        "7999"
      ],
      [
        "80000",
        "84999"
      ],
      [
        "85",
        "99"
      ]
    ]
  },
  "978-602": {
    "name": "Indonesia",
    "ranges": [
      [
        "00",
        "07"
      ],
      [
        "0800",
        "0899"
      ],
      [
        "0900",
        "1099"
      ],
      [
        "1100",
        "1199"
      ],
      [
        "1200",
        "1399"
      ],
      [
        "14000",
        "14999"
      ],
      [
        "1500",
        "1699"
      ],
      [
        "17000",
        "17999"
      ],
      [
        "18000",
        "18999"
      ],
      [
        "19000",
        "19999"
      ],
      [
        "200",
        "619"
      ],
      [
        "6200",
        "6749"
      ],
      [
        "6750",
        "6999"
      ],
      [
        "70000",
        "74999"
      ],
      [
        "7500",
        "7999"
      ],
      [
        "8000",
        "9499"
      ],
      [
        "95000",
        "99999"
      ]
    ]
  },
  "978-603": {
    "name": "Saudi Arabia",
    "ranges": [
      [
        "00",
        "04"
      ],
      [
        "05",
        "49"
      ],
      [
        "500",
        "799"
      ],
      [
        "8000",
        "8999"
      ],
      [
        "90000",
        "99999"
      ]
    ]
  },
  "978-604": {
    "name": "Vietnam",
    "ranges": [
      [
        "0",
        "4"
      ],
      [
        "50",
        "89"
      ],
      [
        "900",
        "979"
      ],
      [
        "9800",
        "9999"
      ]
    ]
  },
  "978-605": {
    "name": "Turkey",
    "ranges": [
      [
        "01",
        "02"
      ],
      [
        "030",
        "039"
      ],
      [
        "04",
        "09"
      ],
      [
        "100",
        "399"
      ],
      [
        "4000",
        "5999"
      ],
      [
        "60000",
        "89999"
      ],
      [
        "9000",
        "9999"
      ]
    ]
  },
  "978-606": {
    "name": "Romania",
    "ranges": [
      [
        "0",
        "0"
      ],
      [
        "10",
        "49"
      ],
      [
        "500",
        "799"
      ],
      [
        "8000",
        "9099"
      ],
      [
        "910",
        "919"
      ],
      [
        "92000",
        "97499"
      ],
      [
        "975",
        "999"
      ]
    ]
  },
  "978-607": {
    "name": "Mexico",
    "ranges": [
      [
        "00",
        "39"
      ],
      [
        "400",
        "749"
      ],
      [
        "7500",
        "9499"
      ],
      [
        "95000",
        "99999"
      ]
    ]
  },
  "978-608": {
    "name": "Macedonia",
    "ranges": [
      [
        "0",
        "0"
      ],
      [
        "10",
        "19"
      ],
      [
        "200",
        "449"
      ],
      [
        "4500",
        "6499"
      ],
      [
        "65000",
        "69999"
      ],
      [
        "7",
        "9"
      ]
    ]
  },
  "978-609": {
    "name": "Lithuania",
    "ranges": [
      [
        "00",
        "39"
      ],
      [
        "400",
        "799"
      ],
      [
        "8000",
        "9499"
      ],
      [
        "95000",
        "99999"
      ]
    ]
  },
  "978-611": {
    "name": "Thailand",
    "ranges": []
  },
  "978-612": {
    "name": "Peru",
    "ranges": [
      [
        "00",
        "29"
      ],
      [
        "300",
        "399"
      ],
      [
        "4000",
        "4499"
      ],
      [
        "45000",
        "49999"
      ],
      [
        "50",
        "99"
      ]
    ]
  },
  "978-613": {
    "name": "Mauritius",
    "ranges": [
      [
        "0",
        "9"
      ]
    ]
  },
  "978-614": {
    "name": "Lebanon",
    "ranges": [
      [
        "00",
        "39"
      ],
      [
        "400",
        "799"
      ],
      [
        "8000",
        "9499"
      ],
      [
        "95000",
        "99999"
      ]
    ]
  },
  "978-615": {
    "name": "Hungary",
    "ranges": [
      [
        "00",
        "09"
      ],
      [
        "100",
        "499"
      ],
      [
        "5000",
        "7999"
      ],
      [
        "80000",
        "89999"
      ]
    ]
  },
  "978-616": {
    "name": "Thailand",
    "ranges": [
      [
        "00",
        "19"
      ],
      [
        "200",
        "699"
      ],
      [
        "7000",
        "8999"
      ],
      [
        "90000",
        "99999"
      ]
    ]
  },
  "978-617": {
    "name": "Ukraine",
    "ranges": [
      [
        "00",
        "49"
      ],
      [
        "500",
        "699"
      ],
      [
        "7000",
        "8999"
      ],
      [
        "90000",
        "99999"
      ]
    ]
  },
  "978-618": {
    "name": "Greece",
    "ranges": [
      [
        "00",
        "19"
      ],
      [
        "200",
        "499"
      ],
      [
        "5000",
        "7999"
      ],
      [
        "80000",
        "99999"
      ]
    ]
  },
  "978-619": {
    "name": "Bulgaria",
    "ranges": [
      [
        "00",
        "14"
      ],
      [
        "150",
        "699"
      ],
      [
        "7000",
        "8999"
      ],
      [
        "90000",
        "99999"
      ]
    ]
  },
  "978-620": {
    "name": "Mauritius",
    "ranges": [
      [
        "0",
        "9"
      ]
    ]
  },
  "978-621": {
    "name": "Philippines",
    "ranges": [
      [
        "00",
        "29"
      ],
      [
        "400",
        "599"
      ],
      [
        "8000",
        "8999"
      ],
      [
        "95000",
        "99999"
      ]
    ]
  },
  "978-7": {
    "name": "China, People's Republic",
    "ranges": [
      [
        "00",
        "09"
      ],
      [
        "100",
        "499"
      ],
      [
        "5000",
        "7999"
      ],
      [
        "80000",
        "89999"
      ],
      [
        "900000",
        "999999"
      ]
    ]
  },
  "978-80": {
    "name": "former Czechoslovakia",
    "ranges": [
      [
        "00",
        "19"
      ],
      [
        "200",
        "699"
      ],
      [
        "7000",
        "8499"
      ],
      [
        "85000",
        "89999"
      ],
      [
        "900000",
        "999999"
      ]
    ]
  },
  "978-81": {
    "name": "India",
    "ranges": [
      [
        "00",
        "19"
      ],
      [
        "200",
        "699"
      ],
      [
        "7000",
        "8499"
      ],
      [
        "85000",
        "89999"
      ],
      [
        "900000",
        "999999"
      ]
    ]
  },
  "978-82": {
    "name": "Norway",
    "ranges": [
      [
        "00",
        "19"
      ],
      [
        "200",
        "689"
      ],
      [
        "690000",
        "699999"
      ],
      [
        "7000",
        "8999"
      ],
      [
        "90000",
        "98999"
      ],
      [
        "990000",
        "999999"
      ]
    ]
  },
  "978-83": {
    "name": "Poland",
    "ranges": [
      [
        "00",
        "19"
      ],
      [
        "200",
        "599"
      ],
      [
        "60000",
        "69999"
      ],
      [
        "7000",
        "8499"
      ],
      [
        "85000",
        "89999"
      ],
      [
        "900000",
        "999999"
      ]
    ]
  },
  "978-84": {
    "name": "Spain",
    "ranges": [
      [
        "00",
        "13"
      ],
      [
        "140",
        "149"
      ],
      [
        "15000",
        "19999"
      ],
      [
        "200",
        "699"
      ],
      [
        "7000",
        "8499"
      ],
      [
        "85000",
        "89999"
      ],
      [
        "9000",
        "9199"
      ],
      [
        "920000",
        "923999"
      ],
      [
        "92400",
        "92999"
      ],
      [
        "930000",
        "949999"
      ],
      [
        "95000",
        "96999"
      ],
      [
        "9700",
        "9999"
      ]
    ]
  },
  "978-85": {
    "name": "Brazil",
    "ranges": [
      [
        "00",
        "19"
      ],
      [
        "200",
        "549"
      ],
      [
        "5500",
        "5999"
      ],
      [
        "60000",
        "69999"
      ],
      [
        "7000",
        "8499"
      ],
      [
        "85000",
        "89999"
      ],
      [
        "900000",
        "924999"
      ],
      [
        "92500",
        "94499"
      ],
      [
        "9450",
        "9599"
      ],
      [
        "96",
        "97"
      ],
      [
        "98000",
        "99999"
      ]
    ]
  },
  "978-86": {
    "name": "former Yugoslavia",
    "ranges": [
      [
        "00",
        "29"
      ],
      [
        "300",
        "599"
      ],
      [
        "6000",
        "7999"
      ],
      [
        "80000",
        "89999"
      ],
      [
        "900000",
        "999999"
      ]
    ]
  },
  "978-87": {
    "name": "Denmark",
    "ranges": [
      [
        "00",
        "29"
      ],
      [
        "400",
        "649"
      ],
      [
        "7000",
        "7999"
      ],
      [
        "85000",
        "94999"
      ],
      [
        "970000",
        "999999"
      ]
    ]
  },
  "978-88": {
    "name": "Italy",
    "ranges": [
      [
        "00",
        "19"
      ],
      [
        "200",
        "599"
      ],
      [
        "6000",
        "8499"
      ],
      [
        "85000",
        "89999"
      ],
      [
        "900000",
        "909999"
      ],
      [
        "910",
        "929"
      ],
      [
        "9300",
        "9399"
      ],
      [
        "940000",
        "949999"
      ],
      [
        "95000",
        "99999"
      ]
    ]
  },
  "978-89": {
    "name": "Korea, Republic",
    "ranges": [
      [
        "00",
        "24"
      ],
      [
        "250",
        "549"
      ],
      [
        "5500",
        "8499"
      ],
      [
        "85000",
        "94999"
      ],
      [
        "950000",
        "969999"
      ],
      [
        "97000",
        "98999"
      ],
      [
        "990",
        "999"
      ]
    ]
  },
  "978-90": {
    "name": "Netherlands",
    "ranges": [
      [
        "00",
        "19"
      ],
      [
        "200",
        "499"
      ],
      [
        "5000",
        "6999"
      ],
      [
        "70000",
        "79999"
      ],
      [
        "800000",
        "849999"
      ],
      [
        "8500",
        "8999"
      ],
      [
        "90",
        "90"
      ],
      [
        "94",
        "94"
      ]
    ]
  },
  "978-91": {
    "name": "Sweden",
    "ranges": [
      [
        "0",
        "1"
      ],
      [
        "20",
        "49"
      ],
      [
        "500",
        "649"
      ],
      [
        "7000",
        "7999"
      ],
      [
        "85000",
        "94999"
      ],
      [
        "970000",
        "999999"
      ]
    ]
  },
  "978-92": {
    "name": "International NGO Publishers and EU Organizations",
    "ranges": [
      [
        "0",
        "5"
      ],
      [
        "60",
        "79"
      ],
      [
        "800",
        "899"
      ],
      [
        "9000",
        "9499"
      ],
      [
        "95000",
        "98999"
      ],
      [
        "990000",
        "999999"
      ]
    ]
  },
  "978-93": {
    "name": "India",
    "ranges": [
      [
        "00",
        "09"
      ],
      [
        "100",
        "499"
      ],
      [
        "5000",
        "7999"
      ],
      [
        "80000",
        "94999"
      ],
      [
        "950000",
        "999999"
      ]
    ]
  },
  "978-94": {
    "name": "Netherlands",
    "ranges": [
      [
        "000",
        "599"
      ],
      [
        "6000",
        "8999"
      ],
      [
        "90000",
        "99999"
      ]
    ]
  },
  "978-950": {
    "name": "Argentina",
    "ranges": [
      [
        "00",
        "49"
      ],
      [
        "500",
        "899"
      ],
      [
        "9000",
        "9899"
      ],
      [
        "99000",
        "99999"
      ]
    ]
  },
  "978-951": {
    "name": "Finland",
    "ranges": [
      [
        "0",
        "1"
      ],
      [
        "20",
        "54"
      ],
      [
        "550",
        "889"
      ],
      [
        "8900",
        "9499"
      ],
      [
        "95000",
        "99999"
      ]
    ]
  },
  "978-952": {
    "name": "Finland",
    "ranges": [
      [
        "00",
        "19"
      ],
      [
        "200",
        "499"
      ],
      [
        "5000",
        "5999"
      ],
      [
        "60",
        "65"
      ],
      [
        "6600",
        "6699"
      ],
      [
        "67000",
        "69999"
      ],
      [
        "7000",
        "7999"
      ],
      [
        "80",
        "94"
      ],
      [
        "9500",
        "9899"
      ],
      [
        "99000",
        "99999"
      ]
    ]
  },
  "978-953": {
    "name": "Croatia",
    "ranges": [
      [
        "0",
        "0"
      ],
      [
        "10",
        "14"
      ],
      [
        "150",
        "509"
      ],
      [
        "51",
        "54"
      ],
      [
        "55000",
        "59999"
      ],
      [
        "6000",
        "9499"
      ],
      [
        "95000",
        "99999"
      ]
    ]
  },
  "978-954": {
    "name": "Bulgaria",
    "ranges": [
      [
        "00",
        "28"
      ],
      [
        "2900",
        "2999"
      ],
      [
        "300",
        "799"
      ],
      [
        "8000",
        "8999"
      ],
      [
        "90000",
        "92999"
      ],
      [
        "9300",
        "9999"
      ]
    ]
  },
  "978-955": {
    "name": "Sri Lanka",
    "ranges": [
      [
        "0000",
        "1999"
      ],
      [
        "20",
        "38"
      ],
      [
        "3900",
        "4099"
      ],
      [
        "41000",
        "43999"
      ],
      [
        "44000",
        "44999"
      ],
      [
        "4500",
        "4999"
      ],
      [
        "50000",
        "54999"
      ],
      [
        "550",
        "749"
      ],
      [
        "7500",
        "7999"
      ],
      [
        "8000",
        "9499"
      ],
      [
        "95000",
        "99999"
      ]
    ]
  },
  "978-956": {
    "name": "Chile",
    "ranges": [
      [
        "00",
        "19"
      ],
      [
        "200",
        "699"
      ],
      [
        "7000",
        "9999"
      ]
    ]
  },
  "978-957": {
    "name": "Taiwan",
    "ranges": [
      [
        "00",
        "02"
      ],
      [
        "0300",
        "0499"
      ],
      [
        "05",
        "19"
      ],
      [
        "2000",
        "2099"
      ],
      [
        "21",
        "27"
      ],
      [
        "28000",
        "30999"
      ],
      [
        "31",
        "43"
      ],
      [
        "440",
        "819"
      ],
      [
        "8200",
        "9699"
      ],
      [
        "97000",
        "99999"
      ]
    ]
  },
  "978-958": {
    "name": "Colombia",
    "ranges": [
      [
        "00",
        "56"
      ],
      [
        "57000",
        "59999"
      ],
      [
        "600",
        "799"
      ],
      [
        "8000",
        "9499"
      ],
      [
        "95000",
        "99999"
      ]
    ]
  },
  "978-959": {
    "name": "Cuba",
    "ranges": [
      [
        "00",
        "19"
      ],
      [
        "200",
        "699"
      ],
      [
        "7000",
        "8499"
      ],
      [
        "85000",
        "99999"
      ]
    ]
  },
  "978-960": {
    "name": "Greece",
    "ranges": [
      [
        "00",
        "19"
      ],
      [
        "200",
        "659"
      ],
      [
        "6600",
        "6899"
      ],
      [
        "690",
        "699"
      ],
      [
        "7000",
        "8499"
      ],
      [
        "85000",
        "92999"
      ],
      [
        "93",
        "93"
      ],
      [
        "9400",
        "9799"
      ],
      [
        "98000",
        "99999"
      ]
    ]
  },
  "978-961": {
    "name": "Slovenia",
    "ranges": [
      [
        "00",
        "19"
      ],
      [
        "200",
        "599"
      ],
      [
        "6000",
        "8999"
      ],
      [
        "90000",
        "94999"
      ]
    ]
  },
  "978-962": {
    "name": "Hong Kong, China",
    "ranges": [
      [
        "00",
        "19"
      ],
      [
        "200",
        "699"
      ],
      [
        "7000",
        "8499"
      ],
      [
        "85000",
        "86999"
      ],
      [
        "8700",
        "8999"
      ],
      [
        "900",
        "999"
      ]
    ]
  },
  "978-963": {
    "name": "Hungary",
    "ranges": [
      [
        "00",
        "19"
      ],
      [
        "200",
        "699"
      ],
      [
        "7000",
        "8499"
      ],
      [
        "85000",
        "89999"
      ],
      [
        "9000",
        "9999"
      ]
    ]
  },
  "978-964": {
    "name": "Iran",
    "ranges": [
      [
        "00",
        "14"
      ],
      [
        "150",
        "249"
      ],
      [
        "2500",
        "2999"
      ],
      [
        "300",
        "549"
      ],
      [
        "5500",
        "8999"
      ],
      [
        "90000",
        "96999"
      ],
      [
        "970",
        "989"
      ],
      [
        "9900",
        "9999"
      ]
    ]
  },
  "978-965": {
    "name": "Israel",
    "ranges": [
      [
        "00",
        "19"
      ],
      [
        "200",
        "599"
      ],
      [
        "7000",
        "7999"
      ],
      [
        "90000",
        "99999"
      ]
    ]
  },
  "978-966": {
    "name": "Ukraine",
    "ranges": [
      [
        "00",
        "12"
      ],
      [
        "130",
        "139"
      ],
      [
        "14",
        "14"
      ],
      [
        "1500",
        "1699"
      ],
      [
        "170",
        "199"
      ],
      [
        "2000",
        "2789"
      ],
      [
        "279",
        "289"
      ],
      [
        "2900",
        "2999"
      ],
      [
        "300",
        "699"
      ],
      [
        "7000",
        "8999"
      ],
      [
        "90000",
        "90999"
      ],
      [
        "910",
        "949"
      ],
      [
        "95000",
        "97999"
      ],
      [
        "980",
        "999"
      ]
    ]
  },
  "978-967": {
    "name": "Malaysia",
    "ranges": [
      [
        "00",
        "00"
      ],
      [
        "0100",
        "0999"
      ],
      [
        "10000",
        "19999"
      ],
      [
        "2000",
        "2499"
      ],
      [
        "300",
        "499"
      ],
      [
        "5000",
        "5999"
      ],
      [
        "60",
        "89"
      ],
      [
        "900",
        "989"
      ],
      [
        "9900",
        "9989"
      ],
      [
        "99900",
        "99999"
      ]
    ]
  },
  "978-968": {
    "name": "Mexico",
    "ranges": [
      [
        "01",
        "39"
      ],
      [
        "400",
        "499"
      ],
      [
        "5000",
        "7999"
      ],
      [
        "800",
        "899"
      ],
      [
        "9000",
        "9999"
      ]
    ]
  },
  "978-969": {
    "name": "Pakistan",
    "ranges": [
      [
        "0",
        "1"
      ],
      [
        "20",
        "22"
      ],
      [
        "23000",
        "23999"
      ],
      [
        "24",
        "39"
      ],
      [
        "400",
        "749"
      ],
      [
        "7500",
        "9999"
      ]
    ]
  },
  "978-970": {
    "name": "Mexico",
    "ranges": [
      [
        "01",
        "59"
      ],
      [
        "600",
        "899"
      ],
      [
        "9000",
        "9099"
      ],
      [
        "91000",
        "96999"
      ],
      [
        "9700",
        "9999"
      ]
    ]
  },
  "978-971": {
    "name": "Philippines",
    "ranges": [
      [
        "000",
        "015"
      ],
      [
        "0160",
        "0199"
      ],
      [
        "02",
        "02"
      ],
      [
        "0300",
        "0599"
      ],
      [
        "06",
        "49"
      ],
      [
        "500",
        "849"
      ],
      [
        "8500",
        "9099"
      ],
      [
        "91000",
        "95999"
      ],
      [
        "9600",
        "9699"
      ],
      [
        "97",
        "98"
      ],
      [
        "9900",
        "9999"
      ]
    ]
  },
  "978-972": {
    "name": "Portugal",
    "ranges": [
      [
        "0",
        "1"
      ],
      [
        "20",
        "54"
      ],
      [
        "550",
        "799"
      ],
      [
        "8000",
        "9499"
      ],
      [
        "95000",
        "99999"
      ]
    ]
  },
  "978-973": {
    "name": "Romania",
    "ranges": [
      [
        "0",
        "0"
      ],
      [
        "100",
        "169"
      ],
      [
        "1700",
        "1999"
      ],
      [
        "20",
        "54"
      ],
      [
        "550",
        "759"
      ],
      [
        "7600",
        "8499"
      ],
      [
        "85000",
        "88999"
      ],
      [
        "8900",
        "9499"
      ],
      [
        "95000",
        "99999"
      ]
    ]
  },
  "978-974": {
    "name": "Thailand",
    "ranges": [
      [
        "00",
        "19"
      ],
      [
        "200",
        "699"
      ],
      [
        "7000",
        "8499"
      ],
      [
        "85000",
        "89999"
      ],
      [
        "90000",
        "94999"
      ],
      [
        "9500",
        "9999"
      ]
    ]
  },
  "978-975": {
    "name": "Turkey",
    "ranges": [
      [
        "00000",
        "01999"
      ],
      [
        "02",
        "24"
      ],
      [
        "250",
        "599"
      ],
      [
        "6000",
        "9199"
      ],
      [
        "92000",
        "98999"
      ],
      [
        "990",
        "999"
      ]
    ]
  },
  "978-976": {
    "name": "Caribbean Community",
    "ranges": [
      [
        "0",
        "3"
      ],
      [
        "40",
        "59"
      ],
      [
        "600",
        "799"
      ],
      [
        "8000",
        "9499"
      ],
      [
        "95000",
        "99999"
      ]
    ]
  },
  "978-977": {
    "name": "Egypt",
    "ranges": [
      [
        "00",
        "19"
      ],
      [
        "200",
        "499"
      ],
      [
        "5000",
        "6999"
      ],
      [
        "700",
        "849"
      ],
      [
        "85000",
        "89999"
      ],
      [
        "90",
        "99"
      ]
    ]
  },
  "978-978": {
    "name": "Nigeria",
    "ranges": [
      [
        "000",
        "199"
      ],
      [
        "2000",
        "2999"
      ],
      [
        "30000",
        "79999"
      ],
      [
        "8000",
        "8999"
      ],
      [
        "900",
        "999"
      ]
    ]
  },
  "978-979": {
    "name": "Indonesia",
    "ranges": [
      [
        "000",
        "099"
      ],
      [
        "1000",
        "1499"
      ],
      [
        "15000",
        "19999"
      ],
      [
        "20",
        "29"
      ],
      [
        "3000",
        "3999"
      ],
      [
        "400",
        "799"
      ],
      [
        "8000",
        "9499"
      ],
      [
        "95000",
        "99999"
      ]
    ]
  },
  "978-980": {
    "name": "Venezuela",
    "ranges": [
      [
        "00",
        "19"
      ],
      [
        "200",
        "599"
      ],
      [
        "6000",
        "9999"
      ]
    ]
  },
  "978-981": {
    "name": "Singapore",
    "ranges": [
      [
        "00",
        "16"
      ],
      [
        "17000",
        "19999"
      ],
      [
        "200",
        "299"
      ],
      [
        "3000",
        "3099"
      ],
      [
        "310",
        "399"
      ],
      [
        "4000",
        "9999"
      ]
    ]
  },
  "978-982": {
    "name": "South Pacific",
    "ranges": [
      [
        "00",
        "09"
      ],
      [
        "100",
        "699"
      ],
      [
        "70",
        "89"
      ],
      [
        "9000",
        "9799"
      ],
      [
        "98000",
        "99999"
      ]
    ]
  },
  "978-983": {
    "name": "Malaysia",
    "ranges": [
      [
        "00",
        "01"
      ],
      [
        "020",
        "199"
      ],
      [
        "2000",
        "3999"
      ],
      [
        "40000",
        "44999"
      ],
      [
        "45",
        "49"
      ],
      [
        "50",
        "79"
      ],
      [
        "800",
        "899"
      ],
      [
        "9000",
        "9899"
      ],
      [
        "99000",
        "99999"
      ]
    ]
  },
  "978-984": {
    "name": "Bangladesh",
    "ranges": [
      [
        "00",
        "39"
      ],
      [
        "400",
        "799"
      ],
      [
        "8000",
        "8999"
      ],
      [
        "90000",
        "99999"
      ]
    ]
  },
  "978-985": {
    "name": "Belarus",
    "ranges": [
      [
        "00",
        "39"
      ],
      [
        "400",
        "599"
      ],
      [
        "6000",
        "8999"
      ],
      [
        "90000",
        "99999"
      ]
    ]
  },
  "978-986": {
    "name": "Taiwan",
    "ranges": [
      [
        "00",
        "11"
      ],
      [
        "120",
        "559"
      ],
      [
        "5600",
        "7999"
      ],
      [
        "80000",
        "99999"
      ]
    ]
  },
  "978-987": {
    "name": "Argentina",
    "ranges": [
      [
        "00",
        "09"
      ],
      [
        "1000",
        "1999"
      ],
      [
        "20000",
        "29999"
      ],
      [
        "30",
        "35"
      ],
      [
        "3600",
        "3999"
      ],
      [
        "4000",
        "4199"
      ],
      [
        "42",
        "43"
      ],
      [
        "4400",
        "4499"
      ],
      [
        "45000",
        "48999"
      ],
      [
        "4900",
        "4999"
      ],
      [
        "500",
        "899"
      ],
      [
        "9000",
        "9499"
      ],
      [
        "95000",
        "99999"
      ]
    ]
  },
  "978-988": {
    "name": "Hong Kong, China",
    "ranges": [
      [
        "00",
        "11"
      ],
      [
        "12000",
        "14999"
      ],
      [
        "15000",
        "16999"
      ],
      [
        "17000",
        "19999"
      ],
      [
        "200",
        "769"
      ],
      [
        "77000",
        "79999"
      ],
      [
        "8000",
        "9699"
      ],
      [
        "97000",
        "99999"
      ]
    ]
  },
  "978-989": {
    "name": "Portugal",
    "ranges": [
      [
        "0",
        "1"
      ],
      [
        "20",
        "54"
      ],
      [
        "550",
        "799"
      ],
      [
        "8000",
        "9499"
      ],
      [
        "95000",
        "99999"
      ]
    ]
  },
  "978-9924": {
    "name": "Cambodia",
    "ranges": [
      [
        "30",
        "39"
      ],
      [
        "500",
        "649"
      ],
      [
        "9000",
        "9999"
      ]
    ]
  },
  "978-9925": {
    "name": "Cyprus",
    "ranges": [
      [
        "0",
        "2"
      ],
      [
        "30",
        "54"
      ],
      [
        "550",
        "734"
      ],
      [
        "7350",
        "9999"
      ]
    ]
  },
  "978-9926": {
    "name": "Bosnia and Herzegovina",
    "ranges": [
      [
        "0",
        "1"
      ],
      [
        "20",
        "39"
      ],
      [
        "400",
        "799"
      ],
      [
        "8000",
        "9999"
      ]
    ]
  },
  "978-9927": {
    "name": "Qatar",
    "ranges": [
      [
        "00",
        "09"
      ],
      [
        "100",
        "399"
      ],
      [
        "4000",
        "4999"
      ]
    ]
  },
  "978-9928": {
    "name": "Albania",
    "ranges": [
      [
        "00",
        "09"
      ],
      [
        "100",
        "399"
      ],
      [
        "4000",
        "4999"
      ]
    ]
  },
  "978-9929": {
    "name": "Guatemala",
    "ranges": [
      [
        "0",
        "3"
      ],
      [
        "40",
        "54"
      ],
      [
        "550",
        "799"
      ],
      [
        "8000",
        "9999"
      ]
    ]
  },
  "978-9930": {
    "name": "Costa Rica",
    "ranges": [
      [
        "00",
        "49"
      ],
      [
        "500",
        "939"
      ],
      [
        "9400",
        "9999"
      ]
    ]
  },
  "978-9931": {
    "name": "Algeria",
    "ranges": [
      [
        "00",
        "29"
      ],
      [
        "300",
        "899"
      ],
      [
        "9000",
        "9999"
      ]
    ]
  },
  "978-9932": {
    "name": "Lao People's Democratic Republic",
    "ranges": [
      [
        "00",
        "39"
      ],
      [
        "400",
        "849"
      ],
      [
        "8500",
        "9999"
      ]
    ]
  },
  "978-9933": {
    "name": "Syria",
    "ranges": [
      [
        "0",
        "0"
      ],
      [
        "10",
        "39"
      ],
      [
        "400",
        "899"
      ],
      [
        "9000",
        "9999"
      ]
    ]
  },
  "978-9934": {
    "name": "Latvia",
    "ranges": [
      [
        "0",
        "0"
      ],
      [
        "10",
        "49"
      ],
      [
        "500",
        "799"
      ],
      [
        "8000",
        "9999"
      ]
    ]
  },
  "978-9935": {
    "name": "Iceland",
    "ranges": [
      [
        "0",
        "0"
      ],
      [
        "10",
        "39"
      ],
      [
        "400",
        "899"
      ],
      [
        "9000",
        "9999"
      ]
    ]
  },
  "978-9936": {
    "name": "Afghanistan",
    "ranges": [
      [
        "0",
        "1"
      ],
      [
        "20",
        "39"
      ],
      [
        "400",
        "799"
      ],
      [
        "8000",
        "9999"
      ]
    ]
  },
  "978-9937": {
    "name": "Nepal",
    "ranges": [
      [
        "0",
        "2"
      ],
      [
        "30",
        "49"
      ],
      [
        "500",
        "799"
      ],
      [
        "8000",
        "9999"
      ]
    ]
  },
  "978-9938": {
    "name": "Tunisia",
    "ranges": [
      [
        "00",
        "79"
      ],
      [
        "800",
        "949"
      ],
      [
        "9500",
        "9999"
      ]
    ]
  },
  "978-9939": {
    "name": "Armenia",
    "ranges": [
      [
        "0",
        "4"
      ],
      [
        "50",
        "79"
      ],
      [
        "800",
        "899"
      ],
      [
        "9000",
        "9999"
      ]
    ]
  },
  "978-9940": {
    "name": "Montenegro",
    "ranges": [
      [
        "0",
        "1"
      ],
      [
        "20",
        "49"
      ],
      [
        "500",
        "899"
      ],
      [
        "9000",
        "9999"
      ]
    ]
  },
  "978-9941": {
    "name": "Georgia",
    "ranges": [
      [
        "0",
        "0"
      ],
      [
        "10",
        "39"
      ],
      [
        "400",
        "899"
      ],
      [
        "9000",
        "9999"
      ]
    ]
  },
  "978-9942": {
    "name": "Ecuador",
    "ranges": [
      [
        "00",
        "84"
      ],
      [
        "8500",
        "8999"
      ],
      [
        "900",
        "984"
      ],
      [
        "9850",
        "9999"
      ]
    ]
  },
  "978-9943": {
    "name": "Uzbekistan",
    "ranges": [
      [
        "00",
        "29"
      ],
      [
        "300",
        "399"
      ],
      [
        "4000",
        "9749"
      ],
      [
        "975",
        "999"
      ]
    ]
  },
  "978-9944": {
    "name": "Turkey",
    "ranges": [
      [
        "0000",
        "0999"
      ],
      [
        "100",
        "499"
      ],
      [
        "5000",
        "5999"
      ],
      [
        "60",
        "69"
      ],
      [
        "700",
        "799"
      ],
      [
        "80",
        "89"
      ],
      [
        "900",
        "999"
      ]
    ]
  },
  "978-9945": {
    "name": "Dominican Republic",
    "ranges": [
      [
        "00",
        "00"
      ],
      [
        "010",
        "079"
      ],
      [
        "08",
        "39"
      ],
      [
        "400",
        "569"
      ],
      [
        "57",
        "57"
      ],
      [
        "580",
        "849"
      ],
      [
        "8500",
        "9999"
      ]
    ]
  },
  "978-9946": {
    "name": "Korea, P.D.R.",
    "ranges": [
      [
        "0",
        "1"
      ],
      [
        "20",
        "39"
      ],
      [
        "400",
        "899"
      ],
      [
        "9000",
        "9999"
      ]
    ]
  },
  "978-9947": {
    "name": "Algeria",
    "ranges": [
      [
        "0",
        "1"
      ],
      [
        "20",
        "79"
      ],
      [
        "800",
        "999"
      ]
    ]
  },
  "978-9948": {
    "name": "United Arab Emirates",
    "ranges": [
      [
        "00",
        "39"
      ],
      [
        "400",
        "849"
      ],
      [
        "8500",
        "9999"
      ]
    ]
  },
  "978-9949": {
    "name": "Estonia",
    "ranges": [
      [
        "0",
        "0"
      ],
      [
        "10",
        "39"
      ],
      [
        "400",
        "749"
      ],
      [
        "75",
        "89"
      ],
      [
        "9000",
        "9999"
      ]
    ]
  },
  "978-9950": {
    "name": "Palestine",
    "ranges": [
      [
        "00",
        "29"
      ],
      [
        "300",
        "849"
      ],
      [
        "8500",
        "9999"
      ]
    ]
  },
  "978-9951": {
    "name": "Kosova",
    "ranges": [
      [
        "00",
        "39"
      ],
      [
        "400",
        "849"
      ],
      [
        "8500",
        "9999"
      ]
    ]
  },
  "978-9952": {
    "name": "Azerbaijan",
    "ranges": [
      [
        "0",
        "1"
      ],
      [
        "20",
        "39"
      ],
      [
        "400",
        "799"
      ],
      [
        "8000",
        "9999"
      ]
    ]
  },
  "978-9953": {
    "name": "Lebanon",
    "ranges": [
      [
        "0",
        "0"
      ],
      [
        "10",
        "39"
      ],
      [
        "400",
        "599"
      ],
      [
        "60",
        "89"
      ],
      [
        "9000",
        "9999"
      ]
    ]
  },
  "978-9954": {
    "name": "Morocco",
    "ranges": [
      [
        "0",
        "1"
      ],
      [
        "20",
        "39"
      ],
      [
        "400",
        "799"
      ],
      [
        "8000",
        "9999"
      ]
    ]
  },
  "978-9955": {
    "name": "Lithuania",
    "ranges": [
      [
        "00",
        "39"
      ],
      [
        "400",
        "929"
      ],
      [
        "9300",
        "9999"
      ]
    ]
  },
  "978-9956": {
    "name": "Cameroon",
    "ranges": [
      [
        "0",
        "0"
      ],
      [
        "10",
        "39"
      ],
      [
        "400",
        "899"
      ],
      [
        "9000",
        "9999"
      ]
    ]
  },
  "978-9957": {
    "name": "Jordan",
    "ranges": [
      [
        "00",
        "39"
      ],
      [
        "400",
        "649"
      ],
      [
        "65",
        "69"
      ],
      [
        "70",
        "84"
      ],
      [
        "8500",
        "8799"
      ],
      [
        "88",
        "99"
      ]
    ]
  },
  "978-9958": {
    "name": "Bosnia and Herzegovina",
    "ranges": [
      [
        "00",
        "01"
      ],
      [
        "020",
        "029"
      ],
      [
        "0300",
        "0399"
      ],
      [
        "040",
        "089"
      ],
      [
        "0900",
        "0999"
      ],
      [
        "10",
        "18"
      ],
      [
        "1900",
        "1999"
      ],
      [
        "20",
        "49"
      ],
      [
        "500",
        "899"
      ],
      [
        "9000",
        "9999"
      ]
    ]
  },
  "978-9959": {
    "name": "Libya",
    "ranges": [
      [
        "0",
        "1"
      ],
      [
        "20",
        "79"
      ],
      [
        "800",
        "949"
      ],
      [
        "9500",
        "9699"
      ],
      [
        "970",
        "979"
      ],
      [
        "98",
        "99"
      ]
    ]
  },
  "978-9960": {
    "name": "Saudi Arabia",
    "ranges": [
      [
        "00",
        "59"
      ],
      [
        "600",
        "899"
      ],
      [
        "9000",
        "9999"
      ]
    ]
  },
  "978-9961": {
    "name": "Algeria",
    "ranges": [
      [
        "0",
        "2"
      ],
      [
        "30",
        "69"
      ],
      [
        "700",
        "949"
      ],
      [
        "9500",
        "9999"
      ]
    ]
  },
  "978-9962": {
    "name": "Panama",
    "ranges": [
      [
        "00",
        "54"
      ],
      [
        "5500",
        "5599"
      ],
      [
        "56",
        "59"
      ],
      [
        "600",
        "849"
      ],
      [
        "8500",
        "9999"
      ]
    ]
  },
  "978-9963": {
    "name": "Cyprus",
    "ranges": [
      [
        "0",
        "1"
      ],
      [
        "2000",
        "2499"
      ],
      [
        "250",
        "279"
      ],
      [
        "2800",
        "2999"
      ],
      [
        "30",
        "54"
      ],
      [
        "550",
        "734"
      ],
      [
        "7350",
        "7499"
      ],
      [
        "7500",
        "9999"
      ]
    ]
  },
  "978-9964": {
    "name": "Ghana",
    "ranges": [
      [
        "0",
        "6"
      ],
      [
        "70",
        "94"
      ],
      [
        "950",
        "999"
      ]
    ]
  },
  "978-9965": {
    "name": "Kazakhstan",
    "ranges": [
      [
        "00",
        "39"
      ],
      [
        "400",
        "899"
      ],
      [
        "9000",
        "9999"
      ]
    ]
  },
  "978-9966": {
    "name": "Kenya",
    "ranges": [
      [
        "000",
        "149"
      ],
      [
        "1500",
        "1999"
      ],
      [
        "20",
        "69"
      ],
      [
        "7000",
        "7499"
      ],
      [
        "750",
        "959"
      ],
      [
        "9600",
        "9999"
      ]
    ]
  },
  "978-9967": {
    "name": "Kyrgyz Republic",
    "ranges": [
      [
        "00",
        "39"
      ],
      [
        "400",
        "899"
      ],
      [
        "9000",
        "9999"
      ]
    ]
  },
  "978-9968": {
    "name": "Costa Rica",
    "ranges": [
      [
        "00",
        "49"
      ],
      [
        "500",
        "939"
      ],
      [
        "9400",
        "9999"
      ]
    ]
  },
  "978-9970": {
    "name": "Uganda",
    "ranges": [
      [
        "00",
        "39"
      ],
      [
        "400",
        "899"
      ],
      [
        "9000",
        "9999"
      ]
    ]
  },
  "978-9971": {
    "name": "Singapore",
    "ranges": [
      [
        "0",
        "5"
      ],
      [
        "60",
        "89"
      ],
      [
        "900",
        "989"
      ],
      [
        "9900",
        "9999"
      ]
    ]
  },
  "978-9972": {
    "name": "Peru",
    "ranges": [
      [
        "00",
        "09"
      ],
      [
        "1",
        "1"
      ],
      [
        "200",
        "249"
      ],
      [
        "2500",
        "2999"
      ],
      [
        "30",
        "59"
      ],
      [
        "600",
        "899"
      ],
      [
        "9000",
        "9999"
      ]
    ]
  },
  "978-9973": {
    "name": "Tunisia",
    "ranges": [
      [
        "00",
        "05"
      ],
      [
        "060",
        "089"
      ],
      [
        "0900",
        "0999"
      ],
      [
        "10",
        "69"
      ],
      [
        "700",
        "969"
      ],
      [
        "9700",
        "9999"
      ]
    ]
  },
  "978-9974": {
    "name": "Uruguay",
    "ranges": [
      [
        "0",
        "2"
      ],
      [
        "30",
        "54"
      ],
      [
        "550",
        "749"
      ],
      [
        "7500",
        "9099"
      ],
      [
        "91",
        "94"
      ],
      [
        "95",
        "99"
      ]
    ]
  },
  "978-9975": {
    "name": "Moldova",
    "ranges": [
      [
        "0",
        "0"
      ],
      [
        "100",
        "299"
      ],
      [
        "3000",
        "3999"
      ],
      [
        "4000",
        "4499"
      ],
      [
        "45",
        "89"
      ],
      [
        "900",
        "949"
      ],
      [
        "9500",
        "9999"
      ]
    ]
  },
  "978-9976": {
    "name": "Tanzania",
    "ranges": [
      [
        "0",
        "5"
      ],
      [
        "60",
        "89"
      ],
      [
        "900",
        "989"
      ],
      [
        "9900",
        "9999"
      ]
    ]
  },
  "978-9977": {
    "name": "Costa Rica",
    "ranges": [
      [
        "00",
        "89"
      ],
      [
        "900",
        "989"
      ],
      [
        "9900",
        "9999"
      ]
    ]
  },
  "978-9978": {
    "name": "Ecuador",
    "ranges": [
      [
        "00",
        "29"
      ],
      [
        "300",
        "399"
      ],
      [
        "40",
        "94"
      ],
      [
        "950",
        "989"
      ],
      [
        "9900",
        "9999"
      ]
    ]
  },
  "978-9979": {
    "name": "Iceland",
    "ranges": [
      [
        "0",
        "4"
      ],
      [
        "50",
        "64"
      ],
      [
        "650",
        "659"
      ],
      [
        "66",
        "75"
      ],
      [
        "760",
        "899"
      ],
      [
        "9000",
        "9999"
      ]
    ]
  },
  "978-9980": {
    "name": "Papua New Guinea",
    "ranges": [
      [
        "0",
        "3"
      ],
      [
        "40",
        "89"
      ],
      [
        "900",
        "989"
      ],
      [
        "9900",
        "9999"
      ]
    ]
  },
  "978-9981": {
    "name": "Morocco",
    "ranges": [
      [
        "00",
        "09"
      ],
      [
        "100",
        "159"
      ],
      [
        "1600",
        "1999"
      ],
      [
        "20",
        "79"
      ],
      [
        "800",
        "949"
      ],
      [
        "9500",
        "9999"
      ]
    ]
  },
  "978-9982": {
    "name": "Zambia",
    "ranges": [
      [
        "00",
        "79"
      ],
      [
        "800",
        "989"
      ],
      [
        "9900",
        "9999"
      ]
    ]
  },
  "978-9983": {
    "name": "Gambia",
    "ranges": [
      [
        "80",
        "94"
      ],
      [
        "950",
        "989"
      ],
      [
        "9900",
        "9999"
      ]
    ]
  },
  "978-9984": {
    "name": "Latvia",
    "ranges": [
      [
        "00",
        "49"
      ],
      [
        "500",
        "899"
      ],
      [
        "9000",
        "9999"
      ]
    ]
  },
  "978-9985": {
    "name": "Estonia",
    "ranges": [
      [
        "0",
        "4"
      ],
      [
        "50",
        "79"
      ],
      [
        "800",
        "899"
      ],
      [
        "9000",
        "9999"
      ]
    ]
  },
  "978-9986": {
    "name": "Lithuania",
    "ranges": [
      [
        "00",
        "39"
      ],
      [
        "400",
        "899"
      ],
      [
        "9000",
        "9399"
      ],
      [
        "940",
        "969"
      ],
      [
        "97",
        "99"
      ]
    ]
  },
  "978-9987": {
    "name": "Tanzania",
    "ranges": [
      [
        "00",
        "39"
      ],
      [
        "400",
        "879"
      ],
      [
        "8800",
        "9999"
      ]
    ]
  },
  "978-9988": {
    "name": "Ghana",
    "ranges": [
      [
        "0",
        "2"
      ],
      [
        "30",
        "54"
      ],
      [
        "550",
        "749"
      ],
      [
        "7500",
        "9999"
      ]
    ]
  },
  "978-9989": {
    "name": "Macedonia",
    "ranges": [
      [
        "0",
        "0"
      ],
      [
        "100",
        "199"
      ],
      [
        "2000",
        "2999"
      ],
      [
        "30",
        "59"
      ],
      [
        "600",
        "949"
      ],
      [
        "9500",
        "9999"
      ]
    ]
  },
  "978-99901": {
    "name": "Bahrain",
    "ranges": [
      [
        "00",
        "49"
      ],
      [
        "500",
        "799"
      ],
      [
        "80",
        "99"
      ]
    ]
  },
  "978-99902": {
    "name": "Reserved Agency",
    "ranges": []
  },
  "978-99903": {
    "name": "Mauritius",
    "ranges": [
      [
        "0",
        "1"
      ],
      [
        "20",
        "89"
      ],
      [
        "900",
        "999"
      ]
    ]
  },
  "978-99904": {
    "name": "Cura\xE7ao",
    "ranges": [
      [
        "0",
        "5"
      ],
      [
        "60",
        "89"
      ],
      [
        "900",
        "999"
      ]
    ]
  },
  "978-99905": {
    "name": "Bolivia",
    "ranges": [
      [
        "0",
        "3"
      ],
      [
        "40",
        "79"
      ],
      [
        "800",
        "999"
      ]
    ]
  },
  "978-99906": {
    "name": "Kuwait",
    "ranges": [
      [
        "0",
        "2"
      ],
      [
        "30",
        "59"
      ],
      [
        "600",
        "699"
      ],
      [
        "70",
        "89"
      ],
      [
        "90",
        "94"
      ],
      [
        "950",
        "999"
      ]
    ]
  },
  "978-99908": {
    "name": "Malawi",
    "ranges": [
      [
        "0",
        "0"
      ],
      [
        "10",
        "89"
      ],
      [
        "900",
        "999"
      ]
    ]
  },
  "978-99909": {
    "name": "Malta",
    "ranges": [
      [
        "0",
        "3"
      ],
      [
        "40",
        "94"
      ],
      [
        "950",
        "999"
      ]
    ]
  },
  "978-99910": {
    "name": "Sierra Leone",
    "ranges": [
      [
        "0",
        "2"
      ],
      [
        "30",
        "89"
      ],
      [
        "900",
        "999"
      ]
    ]
  },
  "978-99911": {
    "name": "Lesotho",
    "ranges": [
      [
        "00",
        "59"
      ],
      [
        "600",
        "999"
      ]
    ]
  },
  "978-99912": {
    "name": "Botswana",
    "ranges": [
      [
        "0",
        "3"
      ],
      [
        "400",
        "599"
      ],
      [
        "60",
        "89"
      ],
      [
        "900",
        "999"
      ]
    ]
  },
  "978-99913": {
    "name": "Andorra",
    "ranges": [
      [
        "0",
        "2"
      ],
      [
        "30",
        "35"
      ],
      [
        "600",
        "604"
      ]
    ]
  },
  "978-99914": {
    "name": "Suriname",
    "ranges": [
      [
        "0",
        "4"
      ],
      [
        "50",
        "89"
      ],
      [
        "900",
        "999"
      ]
    ]
  },
  "978-99915": {
    "name": "Maldives",
    "ranges": [
      [
        "0",
        "4"
      ],
      [
        "50",
        "79"
      ],
      [
        "800",
        "999"
      ]
    ]
  },
  "978-99916": {
    "name": "Namibia",
    "ranges": [
      [
        "0",
        "2"
      ],
      [
        "30",
        "69"
      ],
      [
        "700",
        "999"
      ]
    ]
  },
  "978-99917": {
    "name": "Brunei Darussalam",
    "ranges": [
      [
        "0",
        "2"
      ],
      [
        "30",
        "89"
      ],
      [
        "900",
        "999"
      ]
    ]
  },
  "978-99918": {
    "name": "Faroe Islands",
    "ranges": [
      [
        "0",
        "3"
      ],
      [
        "40",
        "79"
      ],
      [
        "800",
        "999"
      ]
    ]
  },
  "978-99919": {
    "name": "Benin",
    "ranges": [
      [
        "0",
        "2"
      ],
      [
        "300",
        "399"
      ],
      [
        "40",
        "69"
      ],
      [
        "70",
        "79"
      ],
      [
        "800",
        "849"
      ],
      [
        "850",
        "899"
      ],
      [
        "900",
        "999"
      ]
    ]
  },
  "978-99920": {
    "name": "Andorra",
    "ranges": [
      [
        "0",
        "4"
      ],
      [
        "50",
        "89"
      ],
      [
        "900",
        "999"
      ]
    ]
  },
  "978-99921": {
    "name": "Qatar",
    "ranges": [
      [
        "0",
        "1"
      ],
      [
        "20",
        "69"
      ],
      [
        "700",
        "799"
      ],
      [
        "8",
        "8"
      ],
      [
        "90",
        "99"
      ]
    ]
  },
  "978-99922": {
    "name": "Guatemala",
    "ranges": [
      [
        "0",
        "3"
      ],
      [
        "40",
        "69"
      ],
      [
        "700",
        "999"
      ]
    ]
  },
  "978-99923": {
    "name": "El Salvador",
    "ranges": [
      [
        "0",
        "1"
      ],
      [
        "20",
        "79"
      ],
      [
        "800",
        "999"
      ]
    ]
  },
  "978-99924": {
    "name": "Nicaragua",
    "ranges": [
      [
        "0",
        "1"
      ],
      [
        "20",
        "79"
      ],
      [
        "800",
        "999"
      ]
    ]
  },
  "978-99925": {
    "name": "Paraguay",
    "ranges": [
      [
        "0",
        "3"
      ],
      [
        "40",
        "79"
      ],
      [
        "800",
        "999"
      ]
    ]
  },
  "978-99926": {
    "name": "Honduras",
    "ranges": [
      [
        "0",
        "0"
      ],
      [
        "10",
        "59"
      ],
      [
        "600",
        "869"
      ],
      [
        "87",
        "89"
      ],
      [
        "90",
        "99"
      ]
    ]
  },
  "978-99927": {
    "name": "Albania",
    "ranges": [
      [
        "0",
        "2"
      ],
      [
        "30",
        "59"
      ],
      [
        "600",
        "999"
      ]
    ]
  },
  "978-99928": {
    "name": "Georgia",
    "ranges": [
      [
        "0",
        "0"
      ],
      [
        "10",
        "79"
      ],
      [
        "800",
        "999"
      ]
    ]
  },
  "978-99929": {
    "name": "Mongolia",
    "ranges": [
      [
        "0",
        "4"
      ],
      [
        "50",
        "79"
      ],
      [
        "800",
        "999"
      ]
    ]
  },
  "978-99930": {
    "name": "Armenia",
    "ranges": [
      [
        "0",
        "4"
      ],
      [
        "50",
        "79"
      ],
      [
        "800",
        "999"
      ]
    ]
  },
  "978-99931": {
    "name": "Seychelles",
    "ranges": [
      [
        "0",
        "4"
      ],
      [
        "50",
        "79"
      ],
      [
        "800",
        "999"
      ]
    ]
  },
  "978-99932": {
    "name": "Malta",
    "ranges": [
      [
        "0",
        "0"
      ],
      [
        "10",
        "59"
      ],
      [
        "600",
        "699"
      ],
      [
        "7",
        "7"
      ],
      [
        "80",
        "99"
      ]
    ]
  },
  "978-99933": {
    "name": "Nepal",
    "ranges": [
      [
        "0",
        "2"
      ],
      [
        "30",
        "59"
      ],
      [
        "600",
        "999"
      ]
    ]
  },
  "978-99934": {
    "name": "Dominican Republic",
    "ranges": [
      [
        "0",
        "1"
      ],
      [
        "20",
        "79"
      ],
      [
        "800",
        "999"
      ]
    ]
  },
  "978-99935": {
    "name": "Haiti",
    "ranges": [
      [
        "0",
        "2"
      ],
      [
        "30",
        "59"
      ],
      [
        "600",
        "699"
      ],
      [
        "7",
        "8"
      ],
      [
        "90",
        "99"
      ]
    ]
  },
  "978-99936": {
    "name": "Bhutan",
    "ranges": [
      [
        "0",
        "0"
      ],
      [
        "10",
        "59"
      ],
      [
        "600",
        "999"
      ]
    ]
  },
  "978-99937": {
    "name": "Macau",
    "ranges": [
      [
        "0",
        "1"
      ],
      [
        "20",
        "59"
      ],
      [
        "600",
        "999"
      ]
    ]
  },
  "978-99938": {
    "name": "Srpska, Republic of",
    "ranges": [
      [
        "0",
        "1"
      ],
      [
        "20",
        "59"
      ],
      [
        "600",
        "899"
      ],
      [
        "90",
        "99"
      ]
    ]
  },
  "978-99939": {
    "name": "Guatemala",
    "ranges": [
      [
        "0",
        "5"
      ],
      [
        "60",
        "89"
      ],
      [
        "900",
        "999"
      ]
    ]
  },
  "978-99940": {
    "name": "Georgia",
    "ranges": [
      [
        "0",
        "0"
      ],
      [
        "10",
        "69"
      ],
      [
        "700",
        "999"
      ]
    ]
  },
  "978-99941": {
    "name": "Armenia",
    "ranges": [
      [
        "0",
        "2"
      ],
      [
        "30",
        "79"
      ],
      [
        "800",
        "999"
      ]
    ]
  },
  "978-99942": {
    "name": "Sudan",
    "ranges": [
      [
        "0",
        "4"
      ],
      [
        "50",
        "79"
      ],
      [
        "800",
        "999"
      ]
    ]
  },
  "978-99943": {
    "name": "Albania",
    "ranges": [
      [
        "0",
        "2"
      ],
      [
        "30",
        "59"
      ],
      [
        "600",
        "999"
      ]
    ]
  },
  "978-99944": {
    "name": "Ethiopia",
    "ranges": [
      [
        "0",
        "4"
      ],
      [
        "50",
        "79"
      ],
      [
        "800",
        "999"
      ]
    ]
  },
  "978-99945": {
    "name": "Namibia",
    "ranges": [
      [
        "0",
        "5"
      ],
      [
        "60",
        "89"
      ],
      [
        "900",
        "999"
      ]
    ]
  },
  "978-99946": {
    "name": "Nepal",
    "ranges": [
      [
        "0",
        "2"
      ],
      [
        "30",
        "59"
      ],
      [
        "600",
        "999"
      ]
    ]
  },
  "978-99947": {
    "name": "Tajikistan",
    "ranges": [
      [
        "0",
        "2"
      ],
      [
        "30",
        "69"
      ],
      [
        "700",
        "999"
      ]
    ]
  },
  "978-99948": {
    "name": "Eritrea",
    "ranges": [
      [
        "0",
        "4"
      ],
      [
        "50",
        "79"
      ],
      [
        "800",
        "999"
      ]
    ]
  },
  "978-99949": {
    "name": "Mauritius",
    "ranges": [
      [
        "0",
        "1"
      ],
      [
        "20",
        "89"
      ],
      [
        "900",
        "999"
      ]
    ]
  },
  "978-99950": {
    "name": "Cambodia",
    "ranges": [
      [
        "0",
        "4"
      ],
      [
        "50",
        "79"
      ],
      [
        "800",
        "999"
      ]
    ]
  },
  "978-99951": {
    "name": "Reserved Agency",
    "ranges": []
  },
  "978-99952": {
    "name": "Mali",
    "ranges": [
      [
        "0",
        "4"
      ],
      [
        "50",
        "79"
      ],
      [
        "800",
        "999"
      ]
    ]
  },
  "978-99953": {
    "name": "Paraguay",
    "ranges": [
      [
        "0",
        "2"
      ],
      [
        "30",
        "79"
      ],
      [
        "800",
        "939"
      ],
      [
        "94",
        "99"
      ]
    ]
  },
  "978-99954": {
    "name": "Bolivia",
    "ranges": [
      [
        "0",
        "2"
      ],
      [
        "30",
        "69"
      ],
      [
        "700",
        "879"
      ],
      [
        "88",
        "99"
      ]
    ]
  },
  "978-99955": {
    "name": "Srpska, Republic of",
    "ranges": [
      [
        "0",
        "1"
      ],
      [
        "20",
        "59"
      ],
      [
        "600",
        "799"
      ],
      [
        "80",
        "99"
      ]
    ]
  },
  "978-99956": {
    "name": "Albania",
    "ranges": [
      [
        "00",
        "59"
      ],
      [
        "600",
        "859"
      ],
      [
        "86",
        "99"
      ]
    ]
  },
  "978-99957": {
    "name": "Malta",
    "ranges": [
      [
        "0",
        "1"
      ],
      [
        "20",
        "79"
      ],
      [
        "800",
        "999"
      ]
    ]
  },
  "978-99958": {
    "name": "Bahrain",
    "ranges": [
      [
        "0",
        "4"
      ],
      [
        "50",
        "93"
      ],
      [
        "940",
        "949"
      ],
      [
        "950",
        "999"
      ]
    ]
  },
  "978-99959": {
    "name": "Luxembourg",
    "ranges": [
      [
        "0",
        "2"
      ],
      [
        "30",
        "59"
      ],
      [
        "600",
        "999"
      ]
    ]
  },
  "978-99960": {
    "name": "Malawi",
    "ranges": [
      [
        "0",
        "0"
      ],
      [
        "10",
        "94"
      ],
      [
        "950",
        "999"
      ]
    ]
  },
  "978-99961": {
    "name": "El Salvador",
    "ranges": [
      [
        "0",
        "3"
      ],
      [
        "40",
        "89"
      ],
      [
        "900",
        "999"
      ]
    ]
  },
  "978-99962": {
    "name": "Mongolia",
    "ranges": [
      [
        "0",
        "4"
      ],
      [
        "50",
        "79"
      ],
      [
        "800",
        "999"
      ]
    ]
  },
  "978-99963": {
    "name": "Cambodia",
    "ranges": [
      [
        "00",
        "49"
      ],
      [
        "500",
        "919"
      ],
      [
        "92",
        "99"
      ]
    ]
  },
  "978-99964": {
    "name": "Nicaragua",
    "ranges": [
      [
        "0",
        "1"
      ],
      [
        "20",
        "79"
      ],
      [
        "800",
        "999"
      ]
    ]
  },
  "978-99965": {
    "name": "Macau",
    "ranges": [
      [
        "0",
        "3"
      ],
      [
        "40",
        "62"
      ],
      [
        "630",
        "999"
      ]
    ]
  },
  "978-99966": {
    "name": "Kuwait",
    "ranges": [
      [
        "0",
        "2"
      ],
      [
        "30",
        "69"
      ],
      [
        "700",
        "799"
      ],
      [
        "80",
        "94"
      ]
    ]
  },
  "978-99967": {
    "name": "Paraguay",
    "ranges": [
      [
        "0",
        "1"
      ],
      [
        "20",
        "59"
      ],
      [
        "600",
        "899"
      ]
    ]
  },
  "978-99968": {
    "name": "Botswana",
    "ranges": [
      [
        "0",
        "3"
      ],
      [
        "400",
        "599"
      ],
      [
        "60",
        "89"
      ],
      [
        "900",
        "999"
      ]
    ]
  },
  "978-99969": {
    "name": "Oman",
    "ranges": [
      [
        "0",
        "4"
      ],
      [
        "50",
        "79"
      ],
      [
        "800",
        "999"
      ]
    ]
  },
  "978-99970": {
    "name": "Haiti",
    "ranges": [
      [
        "0",
        "4"
      ],
      [
        "50",
        "89"
      ],
      [
        "900",
        "999"
      ]
    ]
  },
  "978-99971": {
    "name": "Myanmar",
    "ranges": [
      [
        "0",
        "5"
      ],
      [
        "60",
        "84"
      ],
      [
        "850",
        "999"
      ]
    ]
  },
  "978-99972": {
    "name": "Faroe Islands",
    "ranges": [
      [
        "0",
        "4"
      ],
      [
        "50",
        "89"
      ],
      [
        "900",
        "999"
      ]
    ]
  },
  "978-99973": {
    "name": "Mongolia",
    "ranges": [
      [
        "0",
        "3"
      ],
      [
        "40",
        "79"
      ],
      [
        "800",
        "999"
      ]
    ]
  },
  "978-99974": {
    "name": "Bolivia",
    "ranges": [
      [
        "40",
        "79"
      ],
      [
        "800",
        "999"
      ]
    ]
  },
  "978-99975": {
    "name": "Tajikistan",
    "ranges": [
      [
        "0",
        "3"
      ],
      [
        "40",
        "79"
      ],
      [
        "800",
        "999"
      ]
    ]
  },
  "978-99976": {
    "name": "Srpska, Republic of",
    "ranges": [
      [
        "0",
        "1"
      ],
      [
        "20",
        "59"
      ],
      [
        "600",
        "799"
      ]
    ]
  },
  "978-99977": {
    "name": "Rwanda",
    "ranges": [
      [
        "0",
        "1"
      ],
      [
        "40",
        "69"
      ],
      [
        "700",
        "799"
      ]
    ]
  },
  "979-10": {
    "name": "France",
    "ranges": [
      [
        "00",
        "19"
      ],
      [
        "200",
        "699"
      ],
      [
        "7000",
        "8999"
      ],
      [
        "90000",
        "97599"
      ],
      [
        "976000",
        "999999"
      ]
    ]
  },
  "979-11": {
    "name": "Korea, Republic",
    "ranges": [
      [
        "00",
        "24"
      ],
      [
        "250",
        "549"
      ],
      [
        "5500",
        "8499"
      ],
      [
        "85000",
        "94999"
      ],
      [
        "950000",
        "999999"
      ]
    ]
  },
  "979-12": {
    "name": "Italy",
    "ranges": [
      [
        "200",
        "200"
      ]
    ]
  }
};
var GROUPS = groups;
var ISBN = function(val, groups2) {
  this.groups = groups2;
  this.codes = this.parse(val);
};
ISBN.prototype = {
  isValid: function() {
    return this.codes && this.codes.isValid;
  },
  isIsbn13: function() {
    return this.isValid() && this.codes.isIsbn13;
  },
  isIsbn10: function() {
    return this.isValid() && this.codes.isIsbn10;
  },
  asIsbn10: function(hyphen) {
    return this.isValid() ? hyphen ? this.codes.isbn10h : this.codes.isbn10 : null;
  },
  asIsbn13: function(hyphen) {
    return this.isValid() ? hyphen ? this.codes.isbn13h : this.codes.isbn13 : null;
  },
  merge: function(lobj, robj) {
    var key;
    if (!lobj || !robj) {
      return null;
    }
    for (key in robj) {
      if (robj.hasOwnProperty(key)) {
        lobj[key] = robj[key];
      }
    }
    return lobj;
  },
  parse: function(val) {
    var ret;
    val += "";
    ret = val.match(/^\d{9}[\dX]$/) ? this.fill(this.merge({ source: val, isValid: true, isIsbn10: true, isIsbn13: false }, this.split(val))) : val.length === 13 && val.match(/^(\d+)-(\d+)-(\d+)-([\dX])$/) ? this.fill({
      source: val,
      isValid: true,
      isIsbn10: true,
      isIsbn13: false,
      group: RegExp.$1,
      publisher: RegExp.$2,
      article: RegExp.$3,
      check: RegExp.$4
    }) : val.match(/^(978|979)(\d{9}[\dX]$)/) ? this.fill(this.merge({ source: val, isValid: true, isIsbn10: false, isIsbn13: true, prefix: RegExp.$1 }, this.split(RegExp.$1 + RegExp.$2))) : val.length === 17 && val.match(/^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/) ? this.fill({
      source: val,
      isValid: true,
      isIsbn10: false,
      isIsbn13: true,
      prefix: RegExp.$1,
      group: RegExp.$2,
      publisher: RegExp.$3,
      article: RegExp.$4,
      check: RegExp.$5
    }) : null;
    if (!ret) {
      return { source: val, isValid: false };
    }
    return this.merge(ret, { isValid: ret.check === (ret.isIsbn13 ? ret.check13 : ret.check10) });
  },
  split: function(isbn2) {
    if (isbn2) {
      if (isbn2.length === 10) {
        isbn2 = "978" + isbn2;
      }
      if (isbn2.length === 13) {
        return this.splitToObject(isbn2);
      }
    }
    return null;
  },
  splitToArray: function(isbn13) {
    var rec, key, rest, i, m2;
    rec = this.getGroupRecord(isbn13);
    if (!rec) {
      return null;
    }
    for (i = 0, m2 = rec.record.ranges.length; i < m2; i += 1) {
      key = rec.rest.substr(0, rec.record.ranges[i][0].length);
      if (rec.record.ranges[i][0] <= key && rec.record.ranges[i][1] >= key) {
        rest = rec.rest.substr(key.length);
        return [rec.group, key, rest.substr(0, rest.length - 1), rest.charAt(rest.length - 1)];
      }
    }
    return null;
  },
  splitToObject: function(isbn13) {
    var a = this.splitToArray(isbn13);
    if (!a || a.length !== 4) {
      return null;
    }
    return { group: a[0], publisher: a[1], article: a[2], check: a[3] };
  },
  fill: function(codes) {
    var rec, prefix, ck10, ck13, parts13, parts10;
    if (!codes) {
      return null;
    }
    prefix = codes.prefix ? codes.prefix : "978";
    rec = this.groups[prefix + "-" + codes.group];
    if (!rec) {
      return null;
    }
    ck10 = this.calcCheckDigit([
      codes.group,
      codes.publisher,
      codes.article
    ].join(""));
    if (!ck10) {
      return null;
    }
    ck13 = this.calcCheckDigit([prefix, codes.group, codes.publisher, codes.article].join(""));
    if (!ck13) {
      return null;
    }
    parts13 = [prefix, codes.group, codes.publisher, codes.article, ck13];
    this.merge(codes, {
      isbn13: parts13.join(""),
      isbn13h: parts13.join("-"),
      check10: ck10,
      check13: ck13,
      groupname: rec.name
    });
    if (prefix === "978") {
      parts10 = [codes.group, codes.publisher, codes.article, ck10];
      this.merge(codes, { isbn10: parts10.join(""), isbn10h: parts10.join("-") });
    }
    return codes;
  },
  getGroupRecord: function(isbn13) {
    var key;
    for (key in this.groups) {
      if (isbn13.match("^" + key.replace("-", "") + "(.+)")) {
        return { group: key.split("-")[1], record: this.groups[key], rest: RegExp.$1 };
      }
    }
    return null;
  },
  calcCheckDigit: function(isbn2) {
    var c, n2;
    if (isbn2.match(/^\d{9}[\dX]?$/)) {
      c = 0;
      for (n2 = 0; n2 < 9; n2 += 1) {
        c += (10 - n2) * isbn2.charAt(n2);
      }
      c = (11 - c % 11) % 11;
      return c === 10 ? "X" : String(c);
    } else if (isbn2.match(/(?:978|979)\d{9}[\dX]?/)) {
      c = 0;
      for (n2 = 0; n2 < 12; n2 += 2) {
        c += Number(isbn2.charAt(n2)) + 3 * isbn2.charAt(n2 + 1);
      }
      return String((10 - c % 10) % 10);
    }
    return null;
  }
};
var isbn = {
  ISBN,
  isValid: function(val, groups2) {
    var me2 = new ISBN(val, groups2 ? groups2 : GROUPS);
    return me2.isValid();
  },
  parse: function(val, groups2) {
    var me2 = new ISBN(val, groups2 ? groups2 : GROUPS);
    return me2.isValid() ? me2 : null;
  },
  hyphenate: function(val) {
    var me2 = isbn.parse(val);
    return me2 ? me2.isIsbn13() ? me2.asIsbn13(true) : me2.asIsbn10(true) : null;
  },
  asIsbn13: function(val, hyphen) {
    var me2 = isbn.parse(val);
    return me2 ? me2.asIsbn13(hyphen) : null;
  },
  asIsbn10: function(val, hyphen) {
    var me2 = isbn.parse(val);
    return me2 ? me2.asIsbn10(hyphen) : null;
  }
};
var lib = isbn;
var unorm$1 = { exports: {} };
(function(module) {
  (function(root) {
    var DEFAULT_FEATURE = [null, 0, {}];
    var CACHE_THRESHOLD = 10;
    var SBase = 44032, LBase = 4352, VBase = 4449, TBase = 4519, LCount = 19, VCount = 21, TCount = 28;
    var NCount = VCount * TCount;
    var SCount = LCount * NCount;
    var UChar = function(cp, feature) {
      this.codepoint = cp;
      this.feature = feature;
    };
    var cache = {};
    var cacheCounter = [];
    for (var i = 0; i <= 255; ++i) {
      cacheCounter[i] = 0;
    }
    function fromCache(next, cp, needFeature) {
      var ret = cache[cp];
      if (!ret) {
        ret = next(cp, needFeature);
        if (!!ret.feature && ++cacheCounter[cp >> 8 & 255] > CACHE_THRESHOLD) {
          cache[cp] = ret;
        }
      }
      return ret;
    }
    function fromData(next, cp, needFeature) {
      var hash = cp & 65280;
      var dunit = UChar.udata[hash] || {};
      var f = dunit[cp];
      return f ? new UChar(cp, f) : new UChar(cp, DEFAULT_FEATURE);
    }
    function fromCpOnly(next, cp, needFeature) {
      return !!needFeature ? next(cp, needFeature) : new UChar(cp, null);
    }
    function fromRuleBasedJamo(next, cp, needFeature) {
      var j;
      if (cp < LBase || LBase + LCount <= cp && cp < SBase || SBase + SCount < cp) {
        return next(cp, needFeature);
      }
      if (LBase <= cp && cp < LBase + LCount) {
        var c = {};
        var base = (cp - LBase) * VCount;
        for (j = 0; j < VCount; ++j) {
          c[VBase + j] = SBase + TCount * (j + base);
        }
        return new UChar(cp, [, , c]);
      }
      var SIndex = cp - SBase;
      var TIndex = SIndex % TCount;
      var feature = [];
      if (TIndex !== 0) {
        feature[0] = [SBase + SIndex - TIndex, TBase + TIndex];
      } else {
        feature[0] = [LBase + Math.floor(SIndex / NCount), VBase + Math.floor(SIndex % NCount / TCount)];
        feature[2] = {};
        for (j = 1; j < TCount; ++j) {
          feature[2][TBase + j] = cp + j;
        }
      }
      return new UChar(cp, feature);
    }
    function fromCpFilter(next, cp, needFeature) {
      return cp < 60 || 13311 < cp && cp < 42607 ? new UChar(cp, DEFAULT_FEATURE) : next(cp, needFeature);
    }
    var strategies = [fromCpFilter, fromCache, fromCpOnly, fromRuleBasedJamo, fromData];
    UChar.fromCharCode = strategies.reduceRight(function(next, strategy) {
      return function(cp, needFeature) {
        return strategy(next, cp, needFeature);
      };
    }, null);
    UChar.isHighSurrogate = function(cp) {
      return cp >= 55296 && cp <= 56319;
    };
    UChar.isLowSurrogate = function(cp) {
      return cp >= 56320 && cp <= 57343;
    };
    UChar.prototype.prepFeature = function() {
      if (!this.feature) {
        this.feature = UChar.fromCharCode(this.codepoint, true).feature;
      }
    };
    UChar.prototype.toString = function() {
      if (this.codepoint < 65536) {
        return String.fromCharCode(this.codepoint);
      } else {
        var x2 = this.codepoint - 65536;
        return String.fromCharCode(Math.floor(x2 / 1024) + 55296, x2 % 1024 + 56320);
      }
    };
    UChar.prototype.getDecomp = function() {
      this.prepFeature();
      return this.feature[0] || null;
    };
    UChar.prototype.isCompatibility = function() {
      this.prepFeature();
      return !!this.feature[1] && this.feature[1] & 1 << 8;
    };
    UChar.prototype.isExclude = function() {
      this.prepFeature();
      return !!this.feature[1] && this.feature[1] & 1 << 9;
    };
    UChar.prototype.getCanonicalClass = function() {
      this.prepFeature();
      return !!this.feature[1] ? this.feature[1] & 255 : 0;
    };
    UChar.prototype.getComposite = function(following) {
      this.prepFeature();
      if (!this.feature[2]) {
        return null;
      }
      var cp = this.feature[2][following.codepoint];
      return cp ? UChar.fromCharCode(cp) : null;
    };
    var UCharIterator = function(str) {
      this.str = str;
      this.cursor = 0;
    };
    UCharIterator.prototype.next = function() {
      if (!!this.str && this.cursor < this.str.length) {
        var cp = this.str.charCodeAt(this.cursor++);
        var d;
        if (UChar.isHighSurrogate(cp) && this.cursor < this.str.length && UChar.isLowSurrogate(d = this.str.charCodeAt(this.cursor))) {
          cp = (cp - 55296) * 1024 + (d - 56320) + 65536;
          ++this.cursor;
        }
        return UChar.fromCharCode(cp);
      } else {
        this.str = null;
        return null;
      }
    };
    var RecursDecompIterator = function(it, cano) {
      this.it = it;
      this.canonical = cano;
      this.resBuf = [];
    };
    RecursDecompIterator.prototype.next = function() {
      function recursiveDecomp(cano, uchar2) {
        var decomp = uchar2.getDecomp();
        if (!!decomp && !(cano && uchar2.isCompatibility())) {
          var ret = [];
          for (var i2 = 0; i2 < decomp.length; ++i2) {
            var a = recursiveDecomp(cano, UChar.fromCharCode(decomp[i2]));
            ret = ret.concat(a);
          }
          return ret;
        } else {
          return [uchar2];
        }
      }
      if (this.resBuf.length === 0) {
        var uchar = this.it.next();
        if (!uchar) {
          return null;
        }
        this.resBuf = recursiveDecomp(this.canonical, uchar);
      }
      return this.resBuf.shift();
    };
    var DecompIterator = function(it) {
      this.it = it;
      this.resBuf = [];
    };
    DecompIterator.prototype.next = function() {
      var cc2;
      if (this.resBuf.length === 0) {
        do {
          var uchar = this.it.next();
          if (!uchar) {
            break;
          }
          cc2 = uchar.getCanonicalClass();
          var inspt = this.resBuf.length;
          if (cc2 !== 0) {
            for (; inspt > 0; --inspt) {
              var uchar2 = this.resBuf[inspt - 1];
              var cc22 = uchar2.getCanonicalClass();
              if (cc22 <= cc2) {
                break;
              }
            }
          }
          this.resBuf.splice(inspt, 0, uchar);
        } while (cc2 !== 0);
      }
      return this.resBuf.shift();
    };
    var CompIterator = function(it) {
      this.it = it;
      this.procBuf = [];
      this.resBuf = [];
      this.lastClass = null;
    };
    CompIterator.prototype.next = function() {
      while (this.resBuf.length === 0) {
        var uchar = this.it.next();
        if (!uchar) {
          this.resBuf = this.procBuf;
          this.procBuf = [];
          break;
        }
        if (this.procBuf.length === 0) {
          this.lastClass = uchar.getCanonicalClass();
          this.procBuf.push(uchar);
        } else {
          var starter = this.procBuf[0];
          var composite = starter.getComposite(uchar);
          var cc2 = uchar.getCanonicalClass();
          if (!!composite && (this.lastClass < cc2 || this.lastClass === 0)) {
            this.procBuf[0] = composite;
          } else {
            if (cc2 === 0) {
              this.resBuf = this.procBuf;
              this.procBuf = [];
            }
            this.lastClass = cc2;
            this.procBuf.push(uchar);
          }
        }
      }
      return this.resBuf.shift();
    };
    var createIterator = function(mode, str) {
      switch (mode) {
        case "NFD":
          return new DecompIterator(new RecursDecompIterator(new UCharIterator(str), true));
        case "NFKD":
          return new DecompIterator(new RecursDecompIterator(new UCharIterator(str), false));
        case "NFC":
          return new CompIterator(new DecompIterator(new RecursDecompIterator(new UCharIterator(str), true)));
        case "NFKC":
          return new CompIterator(new DecompIterator(new RecursDecompIterator(new UCharIterator(str), false)));
      }
      throw mode + " is invalid";
    };
    var normalize = function(mode, str) {
      var it = createIterator(mode, str);
      var ret = "";
      var uchar;
      while (!!(uchar = it.next())) {
        ret += uchar.toString();
      }
      return ret;
    };
    function nfd(str) {
      return normalize("NFD", str);
    }
    function nfkd(str) {
      return normalize("NFKD", str);
    }
    function nfc(str) {
      return normalize("NFC", str);
    }
    function nfkc(str) {
      return normalize("NFKC", str);
    }
    UChar.udata = {
      0: { 60: [, , { 824: 8814 }], 61: [, , { 824: 8800 }], 62: [, , { 824: 8815 }], 65: [, , { 768: 192, 769: 193, 770: 194, 771: 195, 772: 256, 774: 258, 775: 550, 776: 196, 777: 7842, 778: 197, 780: 461, 783: 512, 785: 514, 803: 7840, 805: 7680, 808: 260 }], 66: [, , { 775: 7682, 803: 7684, 817: 7686 }], 67: [, , { 769: 262, 770: 264, 775: 266, 780: 268, 807: 199 }], 68: [, , { 775: 7690, 780: 270, 803: 7692, 807: 7696, 813: 7698, 817: 7694 }], 69: [, , { 768: 200, 769: 201, 770: 202, 771: 7868, 772: 274, 774: 276, 775: 278, 776: 203, 777: 7866, 780: 282, 783: 516, 785: 518, 803: 7864, 807: 552, 808: 280, 813: 7704, 816: 7706 }], 70: [, , { 775: 7710 }], 71: [, , { 769: 500, 770: 284, 772: 7712, 774: 286, 775: 288, 780: 486, 807: 290 }], 72: [, , { 770: 292, 775: 7714, 776: 7718, 780: 542, 803: 7716, 807: 7720, 814: 7722 }], 73: [, , { 768: 204, 769: 205, 770: 206, 771: 296, 772: 298, 774: 300, 775: 304, 776: 207, 777: 7880, 780: 463, 783: 520, 785: 522, 803: 7882, 808: 302, 816: 7724 }], 74: [, , { 770: 308 }], 75: [, , { 769: 7728, 780: 488, 803: 7730, 807: 310, 817: 7732 }], 76: [, , { 769: 313, 780: 317, 803: 7734, 807: 315, 813: 7740, 817: 7738 }], 77: [, , { 769: 7742, 775: 7744, 803: 7746 }], 78: [, , { 768: 504, 769: 323, 771: 209, 775: 7748, 780: 327, 803: 7750, 807: 325, 813: 7754, 817: 7752 }], 79: [, , { 768: 210, 769: 211, 770: 212, 771: 213, 772: 332, 774: 334, 775: 558, 776: 214, 777: 7886, 779: 336, 780: 465, 783: 524, 785: 526, 795: 416, 803: 7884, 808: 490 }], 80: [, , { 769: 7764, 775: 7766 }], 82: [, , { 769: 340, 775: 7768, 780: 344, 783: 528, 785: 530, 803: 7770, 807: 342, 817: 7774 }], 83: [, , { 769: 346, 770: 348, 775: 7776, 780: 352, 803: 7778, 806: 536, 807: 350 }], 84: [, , { 775: 7786, 780: 356, 803: 7788, 806: 538, 807: 354, 813: 7792, 817: 7790 }], 85: [, , { 768: 217, 769: 218, 770: 219, 771: 360, 772: 362, 774: 364, 776: 220, 777: 7910, 778: 366, 779: 368, 780: 467, 783: 532, 785: 534, 795: 431, 803: 7908, 804: 7794, 808: 370, 813: 7798, 816: 7796 }], 86: [, , { 771: 7804, 803: 7806 }], 87: [, , { 768: 7808, 769: 7810, 770: 372, 775: 7814, 776: 7812, 803: 7816 }], 88: [, , { 775: 7818, 776: 7820 }], 89: [, , { 768: 7922, 769: 221, 770: 374, 771: 7928, 772: 562, 775: 7822, 776: 376, 777: 7926, 803: 7924 }], 90: [, , { 769: 377, 770: 7824, 775: 379, 780: 381, 803: 7826, 817: 7828 }], 97: [, , { 768: 224, 769: 225, 770: 226, 771: 227, 772: 257, 774: 259, 775: 551, 776: 228, 777: 7843, 778: 229, 780: 462, 783: 513, 785: 515, 803: 7841, 805: 7681, 808: 261 }], 98: [, , { 775: 7683, 803: 7685, 817: 7687 }], 99: [, , { 769: 263, 770: 265, 775: 267, 780: 269, 807: 231 }], 100: [, , { 775: 7691, 780: 271, 803: 7693, 807: 7697, 813: 7699, 817: 7695 }], 101: [, , { 768: 232, 769: 233, 770: 234, 771: 7869, 772: 275, 774: 277, 775: 279, 776: 235, 777: 7867, 780: 283, 783: 517, 785: 519, 803: 7865, 807: 553, 808: 281, 813: 7705, 816: 7707 }], 102: [, , { 775: 7711 }], 103: [, , { 769: 501, 770: 285, 772: 7713, 774: 287, 775: 289, 780: 487, 807: 291 }], 104: [, , { 770: 293, 775: 7715, 776: 7719, 780: 543, 803: 7717, 807: 7721, 814: 7723, 817: 7830 }], 105: [, , { 768: 236, 769: 237, 770: 238, 771: 297, 772: 299, 774: 301, 776: 239, 777: 7881, 780: 464, 783: 521, 785: 523, 803: 7883, 808: 303, 816: 7725 }], 106: [, , { 770: 309, 780: 496 }], 107: [, , { 769: 7729, 780: 489, 803: 7731, 807: 311, 817: 7733 }], 108: [, , { 769: 314, 780: 318, 803: 7735, 807: 316, 813: 7741, 817: 7739 }], 109: [, , { 769: 7743, 775: 7745, 803: 7747 }], 110: [, , { 768: 505, 769: 324, 771: 241, 775: 7749, 780: 328, 803: 7751, 807: 326, 813: 7755, 817: 7753 }], 111: [, , { 768: 242, 769: 243, 770: 244, 771: 245, 772: 333, 774: 335, 775: 559, 776: 246, 777: 7887, 779: 337, 780: 466, 783: 525, 785: 527, 795: 417, 803: 7885, 808: 491 }], 112: [, , { 769: 7765, 775: 7767 }], 114: [, , { 769: 341, 775: 7769, 780: 345, 783: 529, 785: 531, 803: 7771, 807: 343, 817: 7775 }], 115: [, , { 769: 347, 770: 349, 775: 7777, 780: 353, 803: 7779, 806: 537, 807: 351 }], 116: [, , { 775: 7787, 776: 7831, 780: 357, 803: 7789, 806: 539, 807: 355, 813: 7793, 817: 7791 }], 117: [, , { 768: 249, 769: 250, 770: 251, 771: 361, 772: 363, 774: 365, 776: 252, 777: 7911, 778: 367, 779: 369, 780: 468, 783: 533, 785: 535, 795: 432, 803: 7909, 804: 7795, 808: 371, 813: 7799, 816: 7797 }], 118: [, , { 771: 7805, 803: 7807 }], 119: [, , { 768: 7809, 769: 7811, 770: 373, 775: 7815, 776: 7813, 778: 7832, 803: 7817 }], 120: [, , { 775: 7819, 776: 7821 }], 121: [, , { 768: 7923, 769: 253, 770: 375, 771: 7929, 772: 563, 775: 7823, 776: 255, 777: 7927, 778: 7833, 803: 7925 }], 122: [, , { 769: 378, 770: 7825, 775: 380, 780: 382, 803: 7827, 817: 7829 }], 160: [[32], 256], 168: [[32, 776], 256, { 768: 8173, 769: 901, 834: 8129 }], 170: [[97], 256], 175: [[32, 772], 256], 178: [[50], 256], 179: [[51], 256], 180: [[32, 769], 256], 181: [[956], 256], 184: [[32, 807], 256], 185: [[49], 256], 186: [[111], 256], 188: [[49, 8260, 52], 256], 189: [[49, 8260, 50], 256], 190: [[51, 8260, 52], 256], 192: [[65, 768]], 193: [[65, 769]], 194: [[65, 770], , { 768: 7846, 769: 7844, 771: 7850, 777: 7848 }], 195: [[65, 771]], 196: [[65, 776], , { 772: 478 }], 197: [[65, 778], , { 769: 506 }], 198: [, , { 769: 508, 772: 482 }], 199: [[67, 807], , { 769: 7688 }], 200: [[69, 768]], 201: [[69, 769]], 202: [[69, 770], , { 768: 7872, 769: 7870, 771: 7876, 777: 7874 }], 203: [[69, 776]], 204: [[73, 768]], 205: [[73, 769]], 206: [[73, 770]], 207: [[73, 776], , { 769: 7726 }], 209: [[78, 771]], 210: [[79, 768]], 211: [[79, 769]], 212: [[79, 770], , { 768: 7890, 769: 7888, 771: 7894, 777: 7892 }], 213: [[79, 771], , { 769: 7756, 772: 556, 776: 7758 }], 214: [[79, 776], , { 772: 554 }], 216: [, , { 769: 510 }], 217: [[85, 768]], 218: [[85, 769]], 219: [[85, 770]], 220: [[85, 776], , { 768: 475, 769: 471, 772: 469, 780: 473 }], 221: [[89, 769]], 224: [[97, 768]], 225: [[97, 769]], 226: [[97, 770], , { 768: 7847, 769: 7845, 771: 7851, 777: 7849 }], 227: [[97, 771]], 228: [[97, 776], , { 772: 479 }], 229: [[97, 778], , { 769: 507 }], 230: [, , { 769: 509, 772: 483 }], 231: [[99, 807], , { 769: 7689 }], 232: [[101, 768]], 233: [[101, 769]], 234: [[101, 770], , { 768: 7873, 769: 7871, 771: 7877, 777: 7875 }], 235: [[101, 776]], 236: [[105, 768]], 237: [[105, 769]], 238: [[105, 770]], 239: [[105, 776], , { 769: 7727 }], 241: [[110, 771]], 242: [[111, 768]], 243: [[111, 769]], 244: [[111, 770], , { 768: 7891, 769: 7889, 771: 7895, 777: 7893 }], 245: [[111, 771], , { 769: 7757, 772: 557, 776: 7759 }], 246: [[111, 776], , { 772: 555 }], 248: [, , { 769: 511 }], 249: [[117, 768]], 250: [[117, 769]], 251: [[117, 770]], 252: [[117, 776], , { 768: 476, 769: 472, 772: 470, 780: 474 }], 253: [[121, 769]], 255: [[121, 776]] },
      256: { 256: [[65, 772]], 257: [[97, 772]], 258: [[65, 774], , { 768: 7856, 769: 7854, 771: 7860, 777: 7858 }], 259: [[97, 774], , { 768: 7857, 769: 7855, 771: 7861, 777: 7859 }], 260: [[65, 808]], 261: [[97, 808]], 262: [[67, 769]], 263: [[99, 769]], 264: [[67, 770]], 265: [[99, 770]], 266: [[67, 775]], 267: [[99, 775]], 268: [[67, 780]], 269: [[99, 780]], 270: [[68, 780]], 271: [[100, 780]], 274: [[69, 772], , { 768: 7700, 769: 7702 }], 275: [[101, 772], , { 768: 7701, 769: 7703 }], 276: [[69, 774]], 277: [[101, 774]], 278: [[69, 775]], 279: [[101, 775]], 280: [[69, 808]], 281: [[101, 808]], 282: [[69, 780]], 283: [[101, 780]], 284: [[71, 770]], 285: [[103, 770]], 286: [[71, 774]], 287: [[103, 774]], 288: [[71, 775]], 289: [[103, 775]], 290: [[71, 807]], 291: [[103, 807]], 292: [[72, 770]], 293: [[104, 770]], 296: [[73, 771]], 297: [[105, 771]], 298: [[73, 772]], 299: [[105, 772]], 300: [[73, 774]], 301: [[105, 774]], 302: [[73, 808]], 303: [[105, 808]], 304: [[73, 775]], 306: [[73, 74], 256], 307: [[105, 106], 256], 308: [[74, 770]], 309: [[106, 770]], 310: [[75, 807]], 311: [[107, 807]], 313: [[76, 769]], 314: [[108, 769]], 315: [[76, 807]], 316: [[108, 807]], 317: [[76, 780]], 318: [[108, 780]], 319: [[76, 183], 256], 320: [[108, 183], 256], 323: [[78, 769]], 324: [[110, 769]], 325: [[78, 807]], 326: [[110, 807]], 327: [[78, 780]], 328: [[110, 780]], 329: [[700, 110], 256], 332: [[79, 772], , { 768: 7760, 769: 7762 }], 333: [[111, 772], , { 768: 7761, 769: 7763 }], 334: [[79, 774]], 335: [[111, 774]], 336: [[79, 779]], 337: [[111, 779]], 340: [[82, 769]], 341: [[114, 769]], 342: [[82, 807]], 343: [[114, 807]], 344: [[82, 780]], 345: [[114, 780]], 346: [[83, 769], , { 775: 7780 }], 347: [[115, 769], , { 775: 7781 }], 348: [[83, 770]], 349: [[115, 770]], 350: [[83, 807]], 351: [[115, 807]], 352: [[83, 780], , { 775: 7782 }], 353: [[115, 780], , { 775: 7783 }], 354: [[84, 807]], 355: [[116, 807]], 356: [[84, 780]], 357: [[116, 780]], 360: [[85, 771], , { 769: 7800 }], 361: [[117, 771], , { 769: 7801 }], 362: [[85, 772], , { 776: 7802 }], 363: [[117, 772], , { 776: 7803 }], 364: [[85, 774]], 365: [[117, 774]], 366: [[85, 778]], 367: [[117, 778]], 368: [[85, 779]], 369: [[117, 779]], 370: [[85, 808]], 371: [[117, 808]], 372: [[87, 770]], 373: [[119, 770]], 374: [[89, 770]], 375: [[121, 770]], 376: [[89, 776]], 377: [[90, 769]], 378: [[122, 769]], 379: [[90, 775]], 380: [[122, 775]], 381: [[90, 780]], 382: [[122, 780]], 383: [[115], 256, { 775: 7835 }], 416: [[79, 795], , { 768: 7900, 769: 7898, 771: 7904, 777: 7902, 803: 7906 }], 417: [[111, 795], , { 768: 7901, 769: 7899, 771: 7905, 777: 7903, 803: 7907 }], 431: [[85, 795], , { 768: 7914, 769: 7912, 771: 7918, 777: 7916, 803: 7920 }], 432: [[117, 795], , { 768: 7915, 769: 7913, 771: 7919, 777: 7917, 803: 7921 }], 439: [, , { 780: 494 }], 452: [[68, 381], 256], 453: [[68, 382], 256], 454: [[100, 382], 256], 455: [[76, 74], 256], 456: [[76, 106], 256], 457: [[108, 106], 256], 458: [[78, 74], 256], 459: [[78, 106], 256], 460: [[110, 106], 256], 461: [[65, 780]], 462: [[97, 780]], 463: [[73, 780]], 464: [[105, 780]], 465: [[79, 780]], 466: [[111, 780]], 467: [[85, 780]], 468: [[117, 780]], 469: [[220, 772]], 470: [[252, 772]], 471: [[220, 769]], 472: [[252, 769]], 473: [[220, 780]], 474: [[252, 780]], 475: [[220, 768]], 476: [[252, 768]], 478: [[196, 772]], 479: [[228, 772]], 480: [[550, 772]], 481: [[551, 772]], 482: [[198, 772]], 483: [[230, 772]], 486: [[71, 780]], 487: [[103, 780]], 488: [[75, 780]], 489: [[107, 780]], 490: [[79, 808], , { 772: 492 }], 491: [[111, 808], , { 772: 493 }], 492: [[490, 772]], 493: [[491, 772]], 494: [[439, 780]], 495: [[658, 780]], 496: [[106, 780]], 497: [[68, 90], 256], 498: [[68, 122], 256], 499: [[100, 122], 256], 500: [[71, 769]], 501: [[103, 769]], 504: [[78, 768]], 505: [[110, 768]], 506: [[197, 769]], 507: [[229, 769]], 508: [[198, 769]], 509: [[230, 769]], 510: [[216, 769]], 511: [[248, 769]], 66045: [, 220] },
      512: { 512: [[65, 783]], 513: [[97, 783]], 514: [[65, 785]], 515: [[97, 785]], 516: [[69, 783]], 517: [[101, 783]], 518: [[69, 785]], 519: [[101, 785]], 520: [[73, 783]], 521: [[105, 783]], 522: [[73, 785]], 523: [[105, 785]], 524: [[79, 783]], 525: [[111, 783]], 526: [[79, 785]], 527: [[111, 785]], 528: [[82, 783]], 529: [[114, 783]], 530: [[82, 785]], 531: [[114, 785]], 532: [[85, 783]], 533: [[117, 783]], 534: [[85, 785]], 535: [[117, 785]], 536: [[83, 806]], 537: [[115, 806]], 538: [[84, 806]], 539: [[116, 806]], 542: [[72, 780]], 543: [[104, 780]], 550: [[65, 775], , { 772: 480 }], 551: [[97, 775], , { 772: 481 }], 552: [[69, 807], , { 774: 7708 }], 553: [[101, 807], , { 774: 7709 }], 554: [[214, 772]], 555: [[246, 772]], 556: [[213, 772]], 557: [[245, 772]], 558: [[79, 775], , { 772: 560 }], 559: [[111, 775], , { 772: 561 }], 560: [[558, 772]], 561: [[559, 772]], 562: [[89, 772]], 563: [[121, 772]], 658: [, , { 780: 495 }], 688: [[104], 256], 689: [[614], 256], 690: [[106], 256], 691: [[114], 256], 692: [[633], 256], 693: [[635], 256], 694: [[641], 256], 695: [[119], 256], 696: [[121], 256], 728: [[32, 774], 256], 729: [[32, 775], 256], 730: [[32, 778], 256], 731: [[32, 808], 256], 732: [[32, 771], 256], 733: [[32, 779], 256], 736: [[611], 256], 737: [[108], 256], 738: [[115], 256], 739: [[120], 256], 740: [[661], 256], 66272: [, 220] },
      768: { 768: [, 230], 769: [, 230], 770: [, 230], 771: [, 230], 772: [, 230], 773: [, 230], 774: [, 230], 775: [, 230], 776: [, 230, { 769: 836 }], 777: [, 230], 778: [, 230], 779: [, 230], 780: [, 230], 781: [, 230], 782: [, 230], 783: [, 230], 784: [, 230], 785: [, 230], 786: [, 230], 787: [, 230], 788: [, 230], 789: [, 232], 790: [, 220], 791: [, 220], 792: [, 220], 793: [, 220], 794: [, 232], 795: [, 216], 796: [, 220], 797: [, 220], 798: [, 220], 799: [, 220], 800: [, 220], 801: [, 202], 802: [, 202], 803: [, 220], 804: [, 220], 805: [, 220], 806: [, 220], 807: [, 202], 808: [, 202], 809: [, 220], 810: [, 220], 811: [, 220], 812: [, 220], 813: [, 220], 814: [, 220], 815: [, 220], 816: [, 220], 817: [, 220], 818: [, 220], 819: [, 220], 820: [, 1], 821: [, 1], 822: [, 1], 823: [, 1], 824: [, 1], 825: [, 220], 826: [, 220], 827: [, 220], 828: [, 220], 829: [, 230], 830: [, 230], 831: [, 230], 832: [[768], 230], 833: [[769], 230], 834: [, 230], 835: [[787], 230], 836: [[776, 769], 230], 837: [, 240], 838: [, 230], 839: [, 220], 840: [, 220], 841: [, 220], 842: [, 230], 843: [, 230], 844: [, 230], 845: [, 220], 846: [, 220], 848: [, 230], 849: [, 230], 850: [, 230], 851: [, 220], 852: [, 220], 853: [, 220], 854: [, 220], 855: [, 230], 856: [, 232], 857: [, 220], 858: [, 220], 859: [, 230], 860: [, 233], 861: [, 234], 862: [, 234], 863: [, 233], 864: [, 234], 865: [, 234], 866: [, 233], 867: [, 230], 868: [, 230], 869: [, 230], 870: [, 230], 871: [, 230], 872: [, 230], 873: [, 230], 874: [, 230], 875: [, 230], 876: [, 230], 877: [, 230], 878: [, 230], 879: [, 230], 884: [[697]], 890: [[32, 837], 256], 894: [[59]], 900: [[32, 769], 256], 901: [[168, 769]], 902: [[913, 769]], 903: [[183]], 904: [[917, 769]], 905: [[919, 769]], 906: [[921, 769]], 908: [[927, 769]], 910: [[933, 769]], 911: [[937, 769]], 912: [[970, 769]], 913: [, , { 768: 8122, 769: 902, 772: 8121, 774: 8120, 787: 7944, 788: 7945, 837: 8124 }], 917: [, , { 768: 8136, 769: 904, 787: 7960, 788: 7961 }], 919: [, , { 768: 8138, 769: 905, 787: 7976, 788: 7977, 837: 8140 }], 921: [, , { 768: 8154, 769: 906, 772: 8153, 774: 8152, 776: 938, 787: 7992, 788: 7993 }], 927: [, , { 768: 8184, 769: 908, 787: 8008, 788: 8009 }], 929: [, , { 788: 8172 }], 933: [, , { 768: 8170, 769: 910, 772: 8169, 774: 8168, 776: 939, 788: 8025 }], 937: [, , { 768: 8186, 769: 911, 787: 8040, 788: 8041, 837: 8188 }], 938: [[921, 776]], 939: [[933, 776]], 940: [[945, 769], , { 837: 8116 }], 941: [[949, 769]], 942: [[951, 769], , { 837: 8132 }], 943: [[953, 769]], 944: [[971, 769]], 945: [, , { 768: 8048, 769: 940, 772: 8113, 774: 8112, 787: 7936, 788: 7937, 834: 8118, 837: 8115 }], 949: [, , { 768: 8050, 769: 941, 787: 7952, 788: 7953 }], 951: [, , { 768: 8052, 769: 942, 787: 7968, 788: 7969, 834: 8134, 837: 8131 }], 953: [, , { 768: 8054, 769: 943, 772: 8145, 774: 8144, 776: 970, 787: 7984, 788: 7985, 834: 8150 }], 959: [, , { 768: 8056, 769: 972, 787: 8e3, 788: 8001 }], 961: [, , { 787: 8164, 788: 8165 }], 965: [, , { 768: 8058, 769: 973, 772: 8161, 774: 8160, 776: 971, 787: 8016, 788: 8017, 834: 8166 }], 969: [, , { 768: 8060, 769: 974, 787: 8032, 788: 8033, 834: 8182, 837: 8179 }], 970: [[953, 776], , { 768: 8146, 769: 912, 834: 8151 }], 971: [[965, 776], , { 768: 8162, 769: 944, 834: 8167 }], 972: [[959, 769]], 973: [[965, 769]], 974: [[969, 769], , { 837: 8180 }], 976: [[946], 256], 977: [[952], 256], 978: [[933], 256, { 769: 979, 776: 980 }], 979: [[978, 769]], 980: [[978, 776]], 981: [[966], 256], 982: [[960], 256], 1008: [[954], 256], 1009: [[961], 256], 1010: [[962], 256], 1012: [[920], 256], 1013: [[949], 256], 1017: [[931], 256], 66422: [, 230], 66423: [, 230], 66424: [, 230], 66425: [, 230], 66426: [, 230] },
      1024: { 1024: [[1045, 768]], 1025: [[1045, 776]], 1027: [[1043, 769]], 1030: [, , { 776: 1031 }], 1031: [[1030, 776]], 1036: [[1050, 769]], 1037: [[1048, 768]], 1038: [[1059, 774]], 1040: [, , { 774: 1232, 776: 1234 }], 1043: [, , { 769: 1027 }], 1045: [, , { 768: 1024, 774: 1238, 776: 1025 }], 1046: [, , { 774: 1217, 776: 1244 }], 1047: [, , { 776: 1246 }], 1048: [, , { 768: 1037, 772: 1250, 774: 1049, 776: 1252 }], 1049: [[1048, 774]], 1050: [, , { 769: 1036 }], 1054: [, , { 776: 1254 }], 1059: [, , { 772: 1262, 774: 1038, 776: 1264, 779: 1266 }], 1063: [, , { 776: 1268 }], 1067: [, , { 776: 1272 }], 1069: [, , { 776: 1260 }], 1072: [, , { 774: 1233, 776: 1235 }], 1075: [, , { 769: 1107 }], 1077: [, , { 768: 1104, 774: 1239, 776: 1105 }], 1078: [, , { 774: 1218, 776: 1245 }], 1079: [, , { 776: 1247 }], 1080: [, , { 768: 1117, 772: 1251, 774: 1081, 776: 1253 }], 1081: [[1080, 774]], 1082: [, , { 769: 1116 }], 1086: [, , { 776: 1255 }], 1091: [, , { 772: 1263, 774: 1118, 776: 1265, 779: 1267 }], 1095: [, , { 776: 1269 }], 1099: [, , { 776: 1273 }], 1101: [, , { 776: 1261 }], 1104: [[1077, 768]], 1105: [[1077, 776]], 1107: [[1075, 769]], 1110: [, , { 776: 1111 }], 1111: [[1110, 776]], 1116: [[1082, 769]], 1117: [[1080, 768]], 1118: [[1091, 774]], 1140: [, , { 783: 1142 }], 1141: [, , { 783: 1143 }], 1142: [[1140, 783]], 1143: [[1141, 783]], 1155: [, 230], 1156: [, 230], 1157: [, 230], 1158: [, 230], 1159: [, 230], 1217: [[1046, 774]], 1218: [[1078, 774]], 1232: [[1040, 774]], 1233: [[1072, 774]], 1234: [[1040, 776]], 1235: [[1072, 776]], 1238: [[1045, 774]], 1239: [[1077, 774]], 1240: [, , { 776: 1242 }], 1241: [, , { 776: 1243 }], 1242: [[1240, 776]], 1243: [[1241, 776]], 1244: [[1046, 776]], 1245: [[1078, 776]], 1246: [[1047, 776]], 1247: [[1079, 776]], 1250: [[1048, 772]], 1251: [[1080, 772]], 1252: [[1048, 776]], 1253: [[1080, 776]], 1254: [[1054, 776]], 1255: [[1086, 776]], 1256: [, , { 776: 1258 }], 1257: [, , { 776: 1259 }], 1258: [[1256, 776]], 1259: [[1257, 776]], 1260: [[1069, 776]], 1261: [[1101, 776]], 1262: [[1059, 772]], 1263: [[1091, 772]], 1264: [[1059, 776]], 1265: [[1091, 776]], 1266: [[1059, 779]], 1267: [[1091, 779]], 1268: [[1063, 776]], 1269: [[1095, 776]], 1272: [[1067, 776]], 1273: [[1099, 776]] },
      1280: { 1415: [[1381, 1410], 256], 1425: [, 220], 1426: [, 230], 1427: [, 230], 1428: [, 230], 1429: [, 230], 1430: [, 220], 1431: [, 230], 1432: [, 230], 1433: [, 230], 1434: [, 222], 1435: [, 220], 1436: [, 230], 1437: [, 230], 1438: [, 230], 1439: [, 230], 1440: [, 230], 1441: [, 230], 1442: [, 220], 1443: [, 220], 1444: [, 220], 1445: [, 220], 1446: [, 220], 1447: [, 220], 1448: [, 230], 1449: [, 230], 1450: [, 220], 1451: [, 230], 1452: [, 230], 1453: [, 222], 1454: [, 228], 1455: [, 230], 1456: [, 10], 1457: [, 11], 1458: [, 12], 1459: [, 13], 1460: [, 14], 1461: [, 15], 1462: [, 16], 1463: [, 17], 1464: [, 18], 1465: [, 19], 1466: [, 19], 1467: [, 20], 1468: [, 21], 1469: [, 22], 1471: [, 23], 1473: [, 24], 1474: [, 25], 1476: [, 230], 1477: [, 220], 1479: [, 18] },
      1536: { 1552: [, 230], 1553: [, 230], 1554: [, 230], 1555: [, 230], 1556: [, 230], 1557: [, 230], 1558: [, 230], 1559: [, 230], 1560: [, 30], 1561: [, 31], 1562: [, 32], 1570: [[1575, 1619]], 1571: [[1575, 1620]], 1572: [[1608, 1620]], 1573: [[1575, 1621]], 1574: [[1610, 1620]], 1575: [, , { 1619: 1570, 1620: 1571, 1621: 1573 }], 1608: [, , { 1620: 1572 }], 1610: [, , { 1620: 1574 }], 1611: [, 27], 1612: [, 28], 1613: [, 29], 1614: [, 30], 1615: [, 31], 1616: [, 32], 1617: [, 33], 1618: [, 34], 1619: [, 230], 1620: [, 230], 1621: [, 220], 1622: [, 220], 1623: [, 230], 1624: [, 230], 1625: [, 230], 1626: [, 230], 1627: [, 230], 1628: [, 220], 1629: [, 230], 1630: [, 230], 1631: [, 220], 1648: [, 35], 1653: [[1575, 1652], 256], 1654: [[1608, 1652], 256], 1655: [[1735, 1652], 256], 1656: [[1610, 1652], 256], 1728: [[1749, 1620]], 1729: [, , { 1620: 1730 }], 1730: [[1729, 1620]], 1746: [, , { 1620: 1747 }], 1747: [[1746, 1620]], 1749: [, , { 1620: 1728 }], 1750: [, 230], 1751: [, 230], 1752: [, 230], 1753: [, 230], 1754: [, 230], 1755: [, 230], 1756: [, 230], 1759: [, 230], 1760: [, 230], 1761: [, 230], 1762: [, 230], 1763: [, 220], 1764: [, 230], 1767: [, 230], 1768: [, 230], 1770: [, 220], 1771: [, 230], 1772: [, 230], 1773: [, 220] },
      1792: { 1809: [, 36], 1840: [, 230], 1841: [, 220], 1842: [, 230], 1843: [, 230], 1844: [, 220], 1845: [, 230], 1846: [, 230], 1847: [, 220], 1848: [, 220], 1849: [, 220], 1850: [, 230], 1851: [, 220], 1852: [, 220], 1853: [, 230], 1854: [, 220], 1855: [, 230], 1856: [, 230], 1857: [, 230], 1858: [, 220], 1859: [, 230], 1860: [, 220], 1861: [, 230], 1862: [, 220], 1863: [, 230], 1864: [, 220], 1865: [, 230], 1866: [, 230], 2027: [, 230], 2028: [, 230], 2029: [, 230], 2030: [, 230], 2031: [, 230], 2032: [, 230], 2033: [, 230], 2034: [, 220], 2035: [, 230] },
      2048: { 2070: [, 230], 2071: [, 230], 2072: [, 230], 2073: [, 230], 2075: [, 230], 2076: [, 230], 2077: [, 230], 2078: [, 230], 2079: [, 230], 2080: [, 230], 2081: [, 230], 2082: [, 230], 2083: [, 230], 2085: [, 230], 2086: [, 230], 2087: [, 230], 2089: [, 230], 2090: [, 230], 2091: [, 230], 2092: [, 230], 2093: [, 230], 2137: [, 220], 2138: [, 220], 2139: [, 220], 2276: [, 230], 2277: [, 230], 2278: [, 220], 2279: [, 230], 2280: [, 230], 2281: [, 220], 2282: [, 230], 2283: [, 230], 2284: [, 230], 2285: [, 220], 2286: [, 220], 2287: [, 220], 2288: [, 27], 2289: [, 28], 2290: [, 29], 2291: [, 230], 2292: [, 230], 2293: [, 230], 2294: [, 220], 2295: [, 230], 2296: [, 230], 2297: [, 220], 2298: [, 220], 2299: [, 230], 2300: [, 230], 2301: [, 230], 2302: [, 230], 2303: [, 230] },
      2304: { 2344: [, , { 2364: 2345 }], 2345: [[2344, 2364]], 2352: [, , { 2364: 2353 }], 2353: [[2352, 2364]], 2355: [, , { 2364: 2356 }], 2356: [[2355, 2364]], 2364: [, 7], 2381: [, 9], 2385: [, 230], 2386: [, 220], 2387: [, 230], 2388: [, 230], 2392: [[2325, 2364], 512], 2393: [[2326, 2364], 512], 2394: [[2327, 2364], 512], 2395: [[2332, 2364], 512], 2396: [[2337, 2364], 512], 2397: [[2338, 2364], 512], 2398: [[2347, 2364], 512], 2399: [[2351, 2364], 512], 2492: [, 7], 2503: [, , { 2494: 2507, 2519: 2508 }], 2507: [[2503, 2494]], 2508: [[2503, 2519]], 2509: [, 9], 2524: [[2465, 2492], 512], 2525: [[2466, 2492], 512], 2527: [[2479, 2492], 512] },
      2560: { 2611: [[2610, 2620], 512], 2614: [[2616, 2620], 512], 2620: [, 7], 2637: [, 9], 2649: [[2582, 2620], 512], 2650: [[2583, 2620], 512], 2651: [[2588, 2620], 512], 2654: [[2603, 2620], 512], 2748: [, 7], 2765: [, 9], 68109: [, 220], 68111: [, 230], 68152: [, 230], 68153: [, 1], 68154: [, 220], 68159: [, 9], 68325: [, 230], 68326: [, 220] },
      2816: { 2876: [, 7], 2887: [, , { 2878: 2891, 2902: 2888, 2903: 2892 }], 2888: [[2887, 2902]], 2891: [[2887, 2878]], 2892: [[2887, 2903]], 2893: [, 9], 2908: [[2849, 2876], 512], 2909: [[2850, 2876], 512], 2962: [, , { 3031: 2964 }], 2964: [[2962, 3031]], 3014: [, , { 3006: 3018, 3031: 3020 }], 3015: [, , { 3006: 3019 }], 3018: [[3014, 3006]], 3019: [[3015, 3006]], 3020: [[3014, 3031]], 3021: [, 9] },
      3072: { 3142: [, , { 3158: 3144 }], 3144: [[3142, 3158]], 3149: [, 9], 3157: [, 84], 3158: [, 91], 3260: [, 7], 3263: [, , { 3285: 3264 }], 3264: [[3263, 3285]], 3270: [, , { 3266: 3274, 3285: 3271, 3286: 3272 }], 3271: [[3270, 3285]], 3272: [[3270, 3286]], 3274: [[3270, 3266], , { 3285: 3275 }], 3275: [[3274, 3285]], 3277: [, 9] },
      3328: { 3398: [, , { 3390: 3402, 3415: 3404 }], 3399: [, , { 3390: 3403 }], 3402: [[3398, 3390]], 3403: [[3399, 3390]], 3404: [[3398, 3415]], 3405: [, 9], 3530: [, 9], 3545: [, , { 3530: 3546, 3535: 3548, 3551: 3550 }], 3546: [[3545, 3530]], 3548: [[3545, 3535], , { 3530: 3549 }], 3549: [[3548, 3530]], 3550: [[3545, 3551]] },
      3584: { 3635: [[3661, 3634], 256], 3640: [, 103], 3641: [, 103], 3642: [, 9], 3656: [, 107], 3657: [, 107], 3658: [, 107], 3659: [, 107], 3763: [[3789, 3762], 256], 3768: [, 118], 3769: [, 118], 3784: [, 122], 3785: [, 122], 3786: [, 122], 3787: [, 122], 3804: [[3755, 3737], 256], 3805: [[3755, 3745], 256] },
      3840: { 3852: [[3851], 256], 3864: [, 220], 3865: [, 220], 3893: [, 220], 3895: [, 220], 3897: [, 216], 3907: [[3906, 4023], 512], 3917: [[3916, 4023], 512], 3922: [[3921, 4023], 512], 3927: [[3926, 4023], 512], 3932: [[3931, 4023], 512], 3945: [[3904, 4021], 512], 3953: [, 129], 3954: [, 130], 3955: [[3953, 3954], 512], 3956: [, 132], 3957: [[3953, 3956], 512], 3958: [[4018, 3968], 512], 3959: [[4018, 3969], 256], 3960: [[4019, 3968], 512], 3961: [[4019, 3969], 256], 3962: [, 130], 3963: [, 130], 3964: [, 130], 3965: [, 130], 3968: [, 130], 3969: [[3953, 3968], 512], 3970: [, 230], 3971: [, 230], 3972: [, 9], 3974: [, 230], 3975: [, 230], 3987: [[3986, 4023], 512], 3997: [[3996, 4023], 512], 4002: [[4001, 4023], 512], 4007: [[4006, 4023], 512], 4012: [[4011, 4023], 512], 4025: [[3984, 4021], 512], 4038: [, 220] },
      4096: { 4133: [, , { 4142: 4134 }], 4134: [[4133, 4142]], 4151: [, 7], 4153: [, 9], 4154: [, 9], 4237: [, 220], 4348: [[4316], 256], 69702: [, 9], 69759: [, 9], 69785: [, , { 69818: 69786 }], 69786: [[69785, 69818]], 69787: [, , { 69818: 69788 }], 69788: [[69787, 69818]], 69797: [, , { 69818: 69803 }], 69803: [[69797, 69818]], 69817: [, 9], 69818: [, 7] },
      4352: { 69888: [, 230], 69889: [, 230], 69890: [, 230], 69934: [[69937, 69927]], 69935: [[69938, 69927]], 69937: [, , { 69927: 69934 }], 69938: [, , { 69927: 69935 }], 69939: [, 9], 69940: [, 9], 70003: [, 7], 70080: [, 9] },
      4608: { 70197: [, 9], 70198: [, 7], 70377: [, 7], 70378: [, 9] },
      4864: { 4957: [, 230], 4958: [, 230], 4959: [, 230], 70460: [, 7], 70471: [, , { 70462: 70475, 70487: 70476 }], 70475: [[70471, 70462]], 70476: [[70471, 70487]], 70477: [, 9], 70502: [, 230], 70503: [, 230], 70504: [, 230], 70505: [, 230], 70506: [, 230], 70507: [, 230], 70508: [, 230], 70512: [, 230], 70513: [, 230], 70514: [, 230], 70515: [, 230], 70516: [, 230] },
      5120: { 70841: [, , { 70832: 70844, 70842: 70843, 70845: 70846 }], 70843: [[70841, 70842]], 70844: [[70841, 70832]], 70846: [[70841, 70845]], 70850: [, 9], 70851: [, 7] },
      5376: { 71096: [, , { 71087: 71098 }], 71097: [, , { 71087: 71099 }], 71098: [[71096, 71087]], 71099: [[71097, 71087]], 71103: [, 9], 71104: [, 7] },
      5632: { 71231: [, 9], 71350: [, 9], 71351: [, 7] },
      5888: { 5908: [, 9], 5940: [, 9], 6098: [, 9], 6109: [, 230] },
      6144: { 6313: [, 228] },
      6400: { 6457: [, 222], 6458: [, 230], 6459: [, 220] },
      6656: { 6679: [, 230], 6680: [, 220], 6752: [, 9], 6773: [, 230], 6774: [, 230], 6775: [, 230], 6776: [, 230], 6777: [, 230], 6778: [, 230], 6779: [, 230], 6780: [, 230], 6783: [, 220], 6832: [, 230], 6833: [, 230], 6834: [, 230], 6835: [, 230], 6836: [, 230], 6837: [, 220], 6838: [, 220], 6839: [, 220], 6840: [, 220], 6841: [, 220], 6842: [, 220], 6843: [, 230], 6844: [, 230], 6845: [, 220] },
      6912: { 6917: [, , { 6965: 6918 }], 6918: [[6917, 6965]], 6919: [, , { 6965: 6920 }], 6920: [[6919, 6965]], 6921: [, , { 6965: 6922 }], 6922: [[6921, 6965]], 6923: [, , { 6965: 6924 }], 6924: [[6923, 6965]], 6925: [, , { 6965: 6926 }], 6926: [[6925, 6965]], 6929: [, , { 6965: 6930 }], 6930: [[6929, 6965]], 6964: [, 7], 6970: [, , { 6965: 6971 }], 6971: [[6970, 6965]], 6972: [, , { 6965: 6973 }], 6973: [[6972, 6965]], 6974: [, , { 6965: 6976 }], 6975: [, , { 6965: 6977 }], 6976: [[6974, 6965]], 6977: [[6975, 6965]], 6978: [, , { 6965: 6979 }], 6979: [[6978, 6965]], 6980: [, 9], 7019: [, 230], 7020: [, 220], 7021: [, 230], 7022: [, 230], 7023: [, 230], 7024: [, 230], 7025: [, 230], 7026: [, 230], 7027: [, 230], 7082: [, 9], 7083: [, 9], 7142: [, 7], 7154: [, 9], 7155: [, 9] },
      7168: { 7223: [, 7], 7376: [, 230], 7377: [, 230], 7378: [, 230], 7380: [, 1], 7381: [, 220], 7382: [, 220], 7383: [, 220], 7384: [, 220], 7385: [, 220], 7386: [, 230], 7387: [, 230], 7388: [, 220], 7389: [, 220], 7390: [, 220], 7391: [, 220], 7392: [, 230], 7394: [, 1], 7395: [, 1], 7396: [, 1], 7397: [, 1], 7398: [, 1], 7399: [, 1], 7400: [, 1], 7405: [, 220], 7412: [, 230], 7416: [, 230], 7417: [, 230] },
      7424: { 7468: [[65], 256], 7469: [[198], 256], 7470: [[66], 256], 7472: [[68], 256], 7473: [[69], 256], 7474: [[398], 256], 7475: [[71], 256], 7476: [[72], 256], 7477: [[73], 256], 7478: [[74], 256], 7479: [[75], 256], 7480: [[76], 256], 7481: [[77], 256], 7482: [[78], 256], 7484: [[79], 256], 7485: [[546], 256], 7486: [[80], 256], 7487: [[82], 256], 7488: [[84], 256], 7489: [[85], 256], 7490: [[87], 256], 7491: [[97], 256], 7492: [[592], 256], 7493: [[593], 256], 7494: [[7426], 256], 7495: [[98], 256], 7496: [[100], 256], 7497: [[101], 256], 7498: [[601], 256], 7499: [[603], 256], 7500: [[604], 256], 7501: [[103], 256], 7503: [[107], 256], 7504: [[109], 256], 7505: [[331], 256], 7506: [[111], 256], 7507: [[596], 256], 7508: [[7446], 256], 7509: [[7447], 256], 7510: [[112], 256], 7511: [[116], 256], 7512: [[117], 256], 7513: [[7453], 256], 7514: [[623], 256], 7515: [[118], 256], 7516: [[7461], 256], 7517: [[946], 256], 7518: [[947], 256], 7519: [[948], 256], 7520: [[966], 256], 7521: [[967], 256], 7522: [[105], 256], 7523: [[114], 256], 7524: [[117], 256], 7525: [[118], 256], 7526: [[946], 256], 7527: [[947], 256], 7528: [[961], 256], 7529: [[966], 256], 7530: [[967], 256], 7544: [[1085], 256], 7579: [[594], 256], 7580: [[99], 256], 7581: [[597], 256], 7582: [[240], 256], 7583: [[604], 256], 7584: [[102], 256], 7585: [[607], 256], 7586: [[609], 256], 7587: [[613], 256], 7588: [[616], 256], 7589: [[617], 256], 7590: [[618], 256], 7591: [[7547], 256], 7592: [[669], 256], 7593: [[621], 256], 7594: [[7557], 256], 7595: [[671], 256], 7596: [[625], 256], 7597: [[624], 256], 7598: [[626], 256], 7599: [[627], 256], 7600: [[628], 256], 7601: [[629], 256], 7602: [[632], 256], 7603: [[642], 256], 7604: [[643], 256], 7605: [[427], 256], 7606: [[649], 256], 7607: [[650], 256], 7608: [[7452], 256], 7609: [[651], 256], 7610: [[652], 256], 7611: [[122], 256], 7612: [[656], 256], 7613: [[657], 256], 7614: [[658], 256], 7615: [[952], 256], 7616: [, 230], 7617: [, 230], 7618: [, 220], 7619: [, 230], 7620: [, 230], 7621: [, 230], 7622: [, 230], 7623: [, 230], 7624: [, 230], 7625: [, 230], 7626: [, 220], 7627: [, 230], 7628: [, 230], 7629: [, 234], 7630: [, 214], 7631: [, 220], 7632: [, 202], 7633: [, 230], 7634: [, 230], 7635: [, 230], 7636: [, 230], 7637: [, 230], 7638: [, 230], 7639: [, 230], 7640: [, 230], 7641: [, 230], 7642: [, 230], 7643: [, 230], 7644: [, 230], 7645: [, 230], 7646: [, 230], 7647: [, 230], 7648: [, 230], 7649: [, 230], 7650: [, 230], 7651: [, 230], 7652: [, 230], 7653: [, 230], 7654: [, 230], 7655: [, 230], 7656: [, 230], 7657: [, 230], 7658: [, 230], 7659: [, 230], 7660: [, 230], 7661: [, 230], 7662: [, 230], 7663: [, 230], 7664: [, 230], 7665: [, 230], 7666: [, 230], 7667: [, 230], 7668: [, 230], 7669: [, 230], 7676: [, 233], 7677: [, 220], 7678: [, 230], 7679: [, 220] },
      7680: { 7680: [[65, 805]], 7681: [[97, 805]], 7682: [[66, 775]], 7683: [[98, 775]], 7684: [[66, 803]], 7685: [[98, 803]], 7686: [[66, 817]], 7687: [[98, 817]], 7688: [[199, 769]], 7689: [[231, 769]], 7690: [[68, 775]], 7691: [[100, 775]], 7692: [[68, 803]], 7693: [[100, 803]], 7694: [[68, 817]], 7695: [[100, 817]], 7696: [[68, 807]], 7697: [[100, 807]], 7698: [[68, 813]], 7699: [[100, 813]], 7700: [[274, 768]], 7701: [[275, 768]], 7702: [[274, 769]], 7703: [[275, 769]], 7704: [[69, 813]], 7705: [[101, 813]], 7706: [[69, 816]], 7707: [[101, 816]], 7708: [[552, 774]], 7709: [[553, 774]], 7710: [[70, 775]], 7711: [[102, 775]], 7712: [[71, 772]], 7713: [[103, 772]], 7714: [[72, 775]], 7715: [[104, 775]], 7716: [[72, 803]], 7717: [[104, 803]], 7718: [[72, 776]], 7719: [[104, 776]], 7720: [[72, 807]], 7721: [[104, 807]], 7722: [[72, 814]], 7723: [[104, 814]], 7724: [[73, 816]], 7725: [[105, 816]], 7726: [[207, 769]], 7727: [[239, 769]], 7728: [[75, 769]], 7729: [[107, 769]], 7730: [[75, 803]], 7731: [[107, 803]], 7732: [[75, 817]], 7733: [[107, 817]], 7734: [[76, 803], , { 772: 7736 }], 7735: [[108, 803], , { 772: 7737 }], 7736: [[7734, 772]], 7737: [[7735, 772]], 7738: [[76, 817]], 7739: [[108, 817]], 7740: [[76, 813]], 7741: [[108, 813]], 7742: [[77, 769]], 7743: [[109, 769]], 7744: [[77, 775]], 7745: [[109, 775]], 7746: [[77, 803]], 7747: [[109, 803]], 7748: [[78, 775]], 7749: [[110, 775]], 7750: [[78, 803]], 7751: [[110, 803]], 7752: [[78, 817]], 7753: [[110, 817]], 7754: [[78, 813]], 7755: [[110, 813]], 7756: [[213, 769]], 7757: [[245, 769]], 7758: [[213, 776]], 7759: [[245, 776]], 7760: [[332, 768]], 7761: [[333, 768]], 7762: [[332, 769]], 7763: [[333, 769]], 7764: [[80, 769]], 7765: [[112, 769]], 7766: [[80, 775]], 7767: [[112, 775]], 7768: [[82, 775]], 7769: [[114, 775]], 7770: [[82, 803], , { 772: 7772 }], 7771: [[114, 803], , { 772: 7773 }], 7772: [[7770, 772]], 7773: [[7771, 772]], 7774: [[82, 817]], 7775: [[114, 817]], 7776: [[83, 775]], 7777: [[115, 775]], 7778: [[83, 803], , { 775: 7784 }], 7779: [[115, 803], , { 775: 7785 }], 7780: [[346, 775]], 7781: [[347, 775]], 7782: [[352, 775]], 7783: [[353, 775]], 7784: [[7778, 775]], 7785: [[7779, 775]], 7786: [[84, 775]], 7787: [[116, 775]], 7788: [[84, 803]], 7789: [[116, 803]], 7790: [[84, 817]], 7791: [[116, 817]], 7792: [[84, 813]], 7793: [[116, 813]], 7794: [[85, 804]], 7795: [[117, 804]], 7796: [[85, 816]], 7797: [[117, 816]], 7798: [[85, 813]], 7799: [[117, 813]], 7800: [[360, 769]], 7801: [[361, 769]], 7802: [[362, 776]], 7803: [[363, 776]], 7804: [[86, 771]], 7805: [[118, 771]], 7806: [[86, 803]], 7807: [[118, 803]], 7808: [[87, 768]], 7809: [[119, 768]], 7810: [[87, 769]], 7811: [[119, 769]], 7812: [[87, 776]], 7813: [[119, 776]], 7814: [[87, 775]], 7815: [[119, 775]], 7816: [[87, 803]], 7817: [[119, 803]], 7818: [[88, 775]], 7819: [[120, 775]], 7820: [[88, 776]], 7821: [[120, 776]], 7822: [[89, 775]], 7823: [[121, 775]], 7824: [[90, 770]], 7825: [[122, 770]], 7826: [[90, 803]], 7827: [[122, 803]], 7828: [[90, 817]], 7829: [[122, 817]], 7830: [[104, 817]], 7831: [[116, 776]], 7832: [[119, 778]], 7833: [[121, 778]], 7834: [[97, 702], 256], 7835: [[383, 775]], 7840: [[65, 803], , { 770: 7852, 774: 7862 }], 7841: [[97, 803], , { 770: 7853, 774: 7863 }], 7842: [[65, 777]], 7843: [[97, 777]], 7844: [[194, 769]], 7845: [[226, 769]], 7846: [[194, 768]], 7847: [[226, 768]], 7848: [[194, 777]], 7849: [[226, 777]], 7850: [[194, 771]], 7851: [[226, 771]], 7852: [[7840, 770]], 7853: [[7841, 770]], 7854: [[258, 769]], 7855: [[259, 769]], 7856: [[258, 768]], 7857: [[259, 768]], 7858: [[258, 777]], 7859: [[259, 777]], 7860: [[258, 771]], 7861: [[259, 771]], 7862: [[7840, 774]], 7863: [[7841, 774]], 7864: [[69, 803], , { 770: 7878 }], 7865: [[101, 803], , { 770: 7879 }], 7866: [[69, 777]], 7867: [[101, 777]], 7868: [[69, 771]], 7869: [[101, 771]], 7870: [[202, 769]], 7871: [[234, 769]], 7872: [[202, 768]], 7873: [[234, 768]], 7874: [[202, 777]], 7875: [[234, 777]], 7876: [[202, 771]], 7877: [[234, 771]], 7878: [[7864, 770]], 7879: [[7865, 770]], 7880: [[73, 777]], 7881: [[105, 777]], 7882: [[73, 803]], 7883: [[105, 803]], 7884: [[79, 803], , { 770: 7896 }], 7885: [[111, 803], , { 770: 7897 }], 7886: [[79, 777]], 7887: [[111, 777]], 7888: [[212, 769]], 7889: [[244, 769]], 7890: [[212, 768]], 7891: [[244, 768]], 7892: [[212, 777]], 7893: [[244, 777]], 7894: [[212, 771]], 7895: [[244, 771]], 7896: [[7884, 770]], 7897: [[7885, 770]], 7898: [[416, 769]], 7899: [[417, 769]], 7900: [[416, 768]], 7901: [[417, 768]], 7902: [[416, 777]], 7903: [[417, 777]], 7904: [[416, 771]], 7905: [[417, 771]], 7906: [[416, 803]], 7907: [[417, 803]], 7908: [[85, 803]], 7909: [[117, 803]], 7910: [[85, 777]], 7911: [[117, 777]], 7912: [[431, 769]], 7913: [[432, 769]], 7914: [[431, 768]], 7915: [[432, 768]], 7916: [[431, 777]], 7917: [[432, 777]], 7918: [[431, 771]], 7919: [[432, 771]], 7920: [[431, 803]], 7921: [[432, 803]], 7922: [[89, 768]], 7923: [[121, 768]], 7924: [[89, 803]], 7925: [[121, 803]], 7926: [[89, 777]], 7927: [[121, 777]], 7928: [[89, 771]], 7929: [[121, 771]] },
      7936: { 7936: [[945, 787], , { 768: 7938, 769: 7940, 834: 7942, 837: 8064 }], 7937: [[945, 788], , { 768: 7939, 769: 7941, 834: 7943, 837: 8065 }], 7938: [[7936, 768], , { 837: 8066 }], 7939: [[7937, 768], , { 837: 8067 }], 7940: [[7936, 769], , { 837: 8068 }], 7941: [[7937, 769], , { 837: 8069 }], 7942: [[7936, 834], , { 837: 8070 }], 7943: [[7937, 834], , { 837: 8071 }], 7944: [[913, 787], , { 768: 7946, 769: 7948, 834: 7950, 837: 8072 }], 7945: [[913, 788], , { 768: 7947, 769: 7949, 834: 7951, 837: 8073 }], 7946: [[7944, 768], , { 837: 8074 }], 7947: [[7945, 768], , { 837: 8075 }], 7948: [[7944, 769], , { 837: 8076 }], 7949: [[7945, 769], , { 837: 8077 }], 7950: [[7944, 834], , { 837: 8078 }], 7951: [[7945, 834], , { 837: 8079 }], 7952: [[949, 787], , { 768: 7954, 769: 7956 }], 7953: [[949, 788], , { 768: 7955, 769: 7957 }], 7954: [[7952, 768]], 7955: [[7953, 768]], 7956: [[7952, 769]], 7957: [[7953, 769]], 7960: [[917, 787], , { 768: 7962, 769: 7964 }], 7961: [[917, 788], , { 768: 7963, 769: 7965 }], 7962: [[7960, 768]], 7963: [[7961, 768]], 7964: [[7960, 769]], 7965: [[7961, 769]], 7968: [[951, 787], , { 768: 7970, 769: 7972, 834: 7974, 837: 8080 }], 7969: [[951, 788], , { 768: 7971, 769: 7973, 834: 7975, 837: 8081 }], 7970: [[7968, 768], , { 837: 8082 }], 7971: [[7969, 768], , { 837: 8083 }], 7972: [[7968, 769], , { 837: 8084 }], 7973: [[7969, 769], , { 837: 8085 }], 7974: [[7968, 834], , { 837: 8086 }], 7975: [[7969, 834], , { 837: 8087 }], 7976: [[919, 787], , { 768: 7978, 769: 7980, 834: 7982, 837: 8088 }], 7977: [[919, 788], , { 768: 7979, 769: 7981, 834: 7983, 837: 8089 }], 7978: [[7976, 768], , { 837: 8090 }], 7979: [[7977, 768], , { 837: 8091 }], 7980: [[7976, 769], , { 837: 8092 }], 7981: [[7977, 769], , { 837: 8093 }], 7982: [[7976, 834], , { 837: 8094 }], 7983: [[7977, 834], , { 837: 8095 }], 7984: [[953, 787], , { 768: 7986, 769: 7988, 834: 7990 }], 7985: [[953, 788], , { 768: 7987, 769: 7989, 834: 7991 }], 7986: [[7984, 768]], 7987: [[7985, 768]], 7988: [[7984, 769]], 7989: [[7985, 769]], 7990: [[7984, 834]], 7991: [[7985, 834]], 7992: [[921, 787], , { 768: 7994, 769: 7996, 834: 7998 }], 7993: [[921, 788], , { 768: 7995, 769: 7997, 834: 7999 }], 7994: [[7992, 768]], 7995: [[7993, 768]], 7996: [[7992, 769]], 7997: [[7993, 769]], 7998: [[7992, 834]], 7999: [[7993, 834]], 8e3: [[959, 787], , { 768: 8002, 769: 8004 }], 8001: [[959, 788], , { 768: 8003, 769: 8005 }], 8002: [[8e3, 768]], 8003: [[8001, 768]], 8004: [[8e3, 769]], 8005: [[8001, 769]], 8008: [[927, 787], , { 768: 8010, 769: 8012 }], 8009: [[927, 788], , { 768: 8011, 769: 8013 }], 8010: [[8008, 768]], 8011: [[8009, 768]], 8012: [[8008, 769]], 8013: [[8009, 769]], 8016: [[965, 787], , { 768: 8018, 769: 8020, 834: 8022 }], 8017: [[965, 788], , { 768: 8019, 769: 8021, 834: 8023 }], 8018: [[8016, 768]], 8019: [[8017, 768]], 8020: [[8016, 769]], 8021: [[8017, 769]], 8022: [[8016, 834]], 8023: [[8017, 834]], 8025: [[933, 788], , { 768: 8027, 769: 8029, 834: 8031 }], 8027: [[8025, 768]], 8029: [[8025, 769]], 8031: [[8025, 834]], 8032: [[969, 787], , { 768: 8034, 769: 8036, 834: 8038, 837: 8096 }], 8033: [[969, 788], , { 768: 8035, 769: 8037, 834: 8039, 837: 8097 }], 8034: [[8032, 768], , { 837: 8098 }], 8035: [[8033, 768], , { 837: 8099 }], 8036: [[8032, 769], , { 837: 8100 }], 8037: [[8033, 769], , { 837: 8101 }], 8038: [[8032, 834], , { 837: 8102 }], 8039: [[8033, 834], , { 837: 8103 }], 8040: [[937, 787], , { 768: 8042, 769: 8044, 834: 8046, 837: 8104 }], 8041: [[937, 788], , { 768: 8043, 769: 8045, 834: 8047, 837: 8105 }], 8042: [[8040, 768], , { 837: 8106 }], 8043: [[8041, 768], , { 837: 8107 }], 8044: [[8040, 769], , { 837: 8108 }], 8045: [[8041, 769], , { 837: 8109 }], 8046: [[8040, 834], , { 837: 8110 }], 8047: [[8041, 834], , { 837: 8111 }], 8048: [[945, 768], , { 837: 8114 }], 8049: [[940]], 8050: [[949, 768]], 8051: [[941]], 8052: [[951, 768], , { 837: 8130 }], 8053: [[942]], 8054: [[953, 768]], 8055: [[943]], 8056: [[959, 768]], 8057: [[972]], 8058: [[965, 768]], 8059: [[973]], 8060: [[969, 768], , { 837: 8178 }], 8061: [[974]], 8064: [[7936, 837]], 8065: [[7937, 837]], 8066: [[7938, 837]], 8067: [[7939, 837]], 8068: [[7940, 837]], 8069: [[7941, 837]], 8070: [[7942, 837]], 8071: [[7943, 837]], 8072: [[7944, 837]], 8073: [[7945, 837]], 8074: [[7946, 837]], 8075: [[7947, 837]], 8076: [[7948, 837]], 8077: [[7949, 837]], 8078: [[7950, 837]], 8079: [[7951, 837]], 8080: [[7968, 837]], 8081: [[7969, 837]], 8082: [[7970, 837]], 8083: [[7971, 837]], 8084: [[7972, 837]], 8085: [[7973, 837]], 8086: [[7974, 837]], 8087: [[7975, 837]], 8088: [[7976, 837]], 8089: [[7977, 837]], 8090: [[7978, 837]], 8091: [[7979, 837]], 8092: [[7980, 837]], 8093: [[7981, 837]], 8094: [[7982, 837]], 8095: [[7983, 837]], 8096: [[8032, 837]], 8097: [[8033, 837]], 8098: [[8034, 837]], 8099: [[8035, 837]], 8100: [[8036, 837]], 8101: [[8037, 837]], 8102: [[8038, 837]], 8103: [[8039, 837]], 8104: [[8040, 837]], 8105: [[8041, 837]], 8106: [[8042, 837]], 8107: [[8043, 837]], 8108: [[8044, 837]], 8109: [[8045, 837]], 8110: [[8046, 837]], 8111: [[8047, 837]], 8112: [[945, 774]], 8113: [[945, 772]], 8114: [[8048, 837]], 8115: [[945, 837]], 8116: [[940, 837]], 8118: [[945, 834], , { 837: 8119 }], 8119: [[8118, 837]], 8120: [[913, 774]], 8121: [[913, 772]], 8122: [[913, 768]], 8123: [[902]], 8124: [[913, 837]], 8125: [[32, 787], 256], 8126: [[953]], 8127: [[32, 787], 256, { 768: 8141, 769: 8142, 834: 8143 }], 8128: [[32, 834], 256], 8129: [[168, 834]], 8130: [[8052, 837]], 8131: [[951, 837]], 8132: [[942, 837]], 8134: [[951, 834], , { 837: 8135 }], 8135: [[8134, 837]], 8136: [[917, 768]], 8137: [[904]], 8138: [[919, 768]], 8139: [[905]], 8140: [[919, 837]], 8141: [[8127, 768]], 8142: [[8127, 769]], 8143: [[8127, 834]], 8144: [[953, 774]], 8145: [[953, 772]], 8146: [[970, 768]], 8147: [[912]], 8150: [[953, 834]], 8151: [[970, 834]], 8152: [[921, 774]], 8153: [[921, 772]], 8154: [[921, 768]], 8155: [[906]], 8157: [[8190, 768]], 8158: [[8190, 769]], 8159: [[8190, 834]], 8160: [[965, 774]], 8161: [[965, 772]], 8162: [[971, 768]], 8163: [[944]], 8164: [[961, 787]], 8165: [[961, 788]], 8166: [[965, 834]], 8167: [[971, 834]], 8168: [[933, 774]], 8169: [[933, 772]], 8170: [[933, 768]], 8171: [[910]], 8172: [[929, 788]], 8173: [[168, 768]], 8174: [[901]], 8175: [[96]], 8178: [[8060, 837]], 8179: [[969, 837]], 8180: [[974, 837]], 8182: [[969, 834], , { 837: 8183 }], 8183: [[8182, 837]], 8184: [[927, 768]], 8185: [[908]], 8186: [[937, 768]], 8187: [[911]], 8188: [[937, 837]], 8189: [[180]], 8190: [[32, 788], 256, { 768: 8157, 769: 8158, 834: 8159 }] },
      8192: { 8192: [[8194]], 8193: [[8195]], 8194: [[32], 256], 8195: [[32], 256], 8196: [[32], 256], 8197: [[32], 256], 8198: [[32], 256], 8199: [[32], 256], 8200: [[32], 256], 8201: [[32], 256], 8202: [[32], 256], 8209: [[8208], 256], 8215: [[32, 819], 256], 8228: [[46], 256], 8229: [[46, 46], 256], 8230: [[46, 46, 46], 256], 8239: [[32], 256], 8243: [[8242, 8242], 256], 8244: [[8242, 8242, 8242], 256], 8246: [[8245, 8245], 256], 8247: [[8245, 8245, 8245], 256], 8252: [[33, 33], 256], 8254: [[32, 773], 256], 8263: [[63, 63], 256], 8264: [[63, 33], 256], 8265: [[33, 63], 256], 8279: [[8242, 8242, 8242, 8242], 256], 8287: [[32], 256], 8304: [[48], 256], 8305: [[105], 256], 8308: [[52], 256], 8309: [[53], 256], 8310: [[54], 256], 8311: [[55], 256], 8312: [[56], 256], 8313: [[57], 256], 8314: [[43], 256], 8315: [[8722], 256], 8316: [[61], 256], 8317: [[40], 256], 8318: [[41], 256], 8319: [[110], 256], 8320: [[48], 256], 8321: [[49], 256], 8322: [[50], 256], 8323: [[51], 256], 8324: [[52], 256], 8325: [[53], 256], 8326: [[54], 256], 8327: [[55], 256], 8328: [[56], 256], 8329: [[57], 256], 8330: [[43], 256], 8331: [[8722], 256], 8332: [[61], 256], 8333: [[40], 256], 8334: [[41], 256], 8336: [[97], 256], 8337: [[101], 256], 8338: [[111], 256], 8339: [[120], 256], 8340: [[601], 256], 8341: [[104], 256], 8342: [[107], 256], 8343: [[108], 256], 8344: [[109], 256], 8345: [[110], 256], 8346: [[112], 256], 8347: [[115], 256], 8348: [[116], 256], 8360: [[82, 115], 256], 8400: [, 230], 8401: [, 230], 8402: [, 1], 8403: [, 1], 8404: [, 230], 8405: [, 230], 8406: [, 230], 8407: [, 230], 8408: [, 1], 8409: [, 1], 8410: [, 1], 8411: [, 230], 8412: [, 230], 8417: [, 230], 8421: [, 1], 8422: [, 1], 8423: [, 230], 8424: [, 220], 8425: [, 230], 8426: [, 1], 8427: [, 1], 8428: [, 220], 8429: [, 220], 8430: [, 220], 8431: [, 220], 8432: [, 230] },
      8448: { 8448: [[97, 47, 99], 256], 8449: [[97, 47, 115], 256], 8450: [[67], 256], 8451: [[176, 67], 256], 8453: [[99, 47, 111], 256], 8454: [[99, 47, 117], 256], 8455: [[400], 256], 8457: [[176, 70], 256], 8458: [[103], 256], 8459: [[72], 256], 8460: [[72], 256], 8461: [[72], 256], 8462: [[104], 256], 8463: [[295], 256], 8464: [[73], 256], 8465: [[73], 256], 8466: [[76], 256], 8467: [[108], 256], 8469: [[78], 256], 8470: [[78, 111], 256], 8473: [[80], 256], 8474: [[81], 256], 8475: [[82], 256], 8476: [[82], 256], 8477: [[82], 256], 8480: [[83, 77], 256], 8481: [[84, 69, 76], 256], 8482: [[84, 77], 256], 8484: [[90], 256], 8486: [[937]], 8488: [[90], 256], 8490: [[75]], 8491: [[197]], 8492: [[66], 256], 8493: [[67], 256], 8495: [[101], 256], 8496: [[69], 256], 8497: [[70], 256], 8499: [[77], 256], 8500: [[111], 256], 8501: [[1488], 256], 8502: [[1489], 256], 8503: [[1490], 256], 8504: [[1491], 256], 8505: [[105], 256], 8507: [[70, 65, 88], 256], 8508: [[960], 256], 8509: [[947], 256], 8510: [[915], 256], 8511: [[928], 256], 8512: [[8721], 256], 8517: [[68], 256], 8518: [[100], 256], 8519: [[101], 256], 8520: [[105], 256], 8521: [[106], 256], 8528: [[49, 8260, 55], 256], 8529: [[49, 8260, 57], 256], 8530: [[49, 8260, 49, 48], 256], 8531: [[49, 8260, 51], 256], 8532: [[50, 8260, 51], 256], 8533: [[49, 8260, 53], 256], 8534: [[50, 8260, 53], 256], 8535: [[51, 8260, 53], 256], 8536: [[52, 8260, 53], 256], 8537: [[49, 8260, 54], 256], 8538: [[53, 8260, 54], 256], 8539: [[49, 8260, 56], 256], 8540: [[51, 8260, 56], 256], 8541: [[53, 8260, 56], 256], 8542: [[55, 8260, 56], 256], 8543: [[49, 8260], 256], 8544: [[73], 256], 8545: [[73, 73], 256], 8546: [[73, 73, 73], 256], 8547: [[73, 86], 256], 8548: [[86], 256], 8549: [[86, 73], 256], 8550: [[86, 73, 73], 256], 8551: [[86, 73, 73, 73], 256], 8552: [[73, 88], 256], 8553: [[88], 256], 8554: [[88, 73], 256], 8555: [[88, 73, 73], 256], 8556: [[76], 256], 8557: [[67], 256], 8558: [[68], 256], 8559: [[77], 256], 8560: [[105], 256], 8561: [[105, 105], 256], 8562: [[105, 105, 105], 256], 8563: [[105, 118], 256], 8564: [[118], 256], 8565: [[118, 105], 256], 8566: [[118, 105, 105], 256], 8567: [[118, 105, 105, 105], 256], 8568: [[105, 120], 256], 8569: [[120], 256], 8570: [[120, 105], 256], 8571: [[120, 105, 105], 256], 8572: [[108], 256], 8573: [[99], 256], 8574: [[100], 256], 8575: [[109], 256], 8585: [[48, 8260, 51], 256], 8592: [, , { 824: 8602 }], 8594: [, , { 824: 8603 }], 8596: [, , { 824: 8622 }], 8602: [[8592, 824]], 8603: [[8594, 824]], 8622: [[8596, 824]], 8653: [[8656, 824]], 8654: [[8660, 824]], 8655: [[8658, 824]], 8656: [, , { 824: 8653 }], 8658: [, , { 824: 8655 }], 8660: [, , { 824: 8654 }] },
      8704: { 8707: [, , { 824: 8708 }], 8708: [[8707, 824]], 8712: [, , { 824: 8713 }], 8713: [[8712, 824]], 8715: [, , { 824: 8716 }], 8716: [[8715, 824]], 8739: [, , { 824: 8740 }], 8740: [[8739, 824]], 8741: [, , { 824: 8742 }], 8742: [[8741, 824]], 8748: [[8747, 8747], 256], 8749: [[8747, 8747, 8747], 256], 8751: [[8750, 8750], 256], 8752: [[8750, 8750, 8750], 256], 8764: [, , { 824: 8769 }], 8769: [[8764, 824]], 8771: [, , { 824: 8772 }], 8772: [[8771, 824]], 8773: [, , { 824: 8775 }], 8775: [[8773, 824]], 8776: [, , { 824: 8777 }], 8777: [[8776, 824]], 8781: [, , { 824: 8813 }], 8800: [[61, 824]], 8801: [, , { 824: 8802 }], 8802: [[8801, 824]], 8804: [, , { 824: 8816 }], 8805: [, , { 824: 8817 }], 8813: [[8781, 824]], 8814: [[60, 824]], 8815: [[62, 824]], 8816: [[8804, 824]], 8817: [[8805, 824]], 8818: [, , { 824: 8820 }], 8819: [, , { 824: 8821 }], 8820: [[8818, 824]], 8821: [[8819, 824]], 8822: [, , { 824: 8824 }], 8823: [, , { 824: 8825 }], 8824: [[8822, 824]], 8825: [[8823, 824]], 8826: [, , { 824: 8832 }], 8827: [, , { 824: 8833 }], 8828: [, , { 824: 8928 }], 8829: [, , { 824: 8929 }], 8832: [[8826, 824]], 8833: [[8827, 824]], 8834: [, , { 824: 8836 }], 8835: [, , { 824: 8837 }], 8836: [[8834, 824]], 8837: [[8835, 824]], 8838: [, , { 824: 8840 }], 8839: [, , { 824: 8841 }], 8840: [[8838, 824]], 8841: [[8839, 824]], 8849: [, , { 824: 8930 }], 8850: [, , { 824: 8931 }], 8866: [, , { 824: 8876 }], 8872: [, , { 824: 8877 }], 8873: [, , { 824: 8878 }], 8875: [, , { 824: 8879 }], 8876: [[8866, 824]], 8877: [[8872, 824]], 8878: [[8873, 824]], 8879: [[8875, 824]], 8882: [, , { 824: 8938 }], 8883: [, , { 824: 8939 }], 8884: [, , { 824: 8940 }], 8885: [, , { 824: 8941 }], 8928: [[8828, 824]], 8929: [[8829, 824]], 8930: [[8849, 824]], 8931: [[8850, 824]], 8938: [[8882, 824]], 8939: [[8883, 824]], 8940: [[8884, 824]], 8941: [[8885, 824]] },
      8960: { 9001: [[12296]], 9002: [[12297]] },
      9216: { 9312: [[49], 256], 9313: [[50], 256], 9314: [[51], 256], 9315: [[52], 256], 9316: [[53], 256], 9317: [[54], 256], 9318: [[55], 256], 9319: [[56], 256], 9320: [[57], 256], 9321: [[49, 48], 256], 9322: [[49, 49], 256], 9323: [[49, 50], 256], 9324: [[49, 51], 256], 9325: [[49, 52], 256], 9326: [[49, 53], 256], 9327: [[49, 54], 256], 9328: [[49, 55], 256], 9329: [[49, 56], 256], 9330: [[49, 57], 256], 9331: [[50, 48], 256], 9332: [[40, 49, 41], 256], 9333: [[40, 50, 41], 256], 9334: [[40, 51, 41], 256], 9335: [[40, 52, 41], 256], 9336: [[40, 53, 41], 256], 9337: [[40, 54, 41], 256], 9338: [[40, 55, 41], 256], 9339: [[40, 56, 41], 256], 9340: [[40, 57, 41], 256], 9341: [[40, 49, 48, 41], 256], 9342: [[40, 49, 49, 41], 256], 9343: [[40, 49, 50, 41], 256], 9344: [[40, 49, 51, 41], 256], 9345: [[40, 49, 52, 41], 256], 9346: [[40, 49, 53, 41], 256], 9347: [[40, 49, 54, 41], 256], 9348: [[40, 49, 55, 41], 256], 9349: [[40, 49, 56, 41], 256], 9350: [[40, 49, 57, 41], 256], 9351: [[40, 50, 48, 41], 256], 9352: [[49, 46], 256], 9353: [[50, 46], 256], 9354: [[51, 46], 256], 9355: [[52, 46], 256], 9356: [[53, 46], 256], 9357: [[54, 46], 256], 9358: [[55, 46], 256], 9359: [[56, 46], 256], 9360: [[57, 46], 256], 9361: [[49, 48, 46], 256], 9362: [[49, 49, 46], 256], 9363: [[49, 50, 46], 256], 9364: [[49, 51, 46], 256], 9365: [[49, 52, 46], 256], 9366: [[49, 53, 46], 256], 9367: [[49, 54, 46], 256], 9368: [[49, 55, 46], 256], 9369: [[49, 56, 46], 256], 9370: [[49, 57, 46], 256], 9371: [[50, 48, 46], 256], 9372: [[40, 97, 41], 256], 9373: [[40, 98, 41], 256], 9374: [[40, 99, 41], 256], 9375: [[40, 100, 41], 256], 9376: [[40, 101, 41], 256], 9377: [[40, 102, 41], 256], 9378: [[40, 103, 41], 256], 9379: [[40, 104, 41], 256], 9380: [[40, 105, 41], 256], 9381: [[40, 106, 41], 256], 9382: [[40, 107, 41], 256], 9383: [[40, 108, 41], 256], 9384: [[40, 109, 41], 256], 9385: [[40, 110, 41], 256], 9386: [[40, 111, 41], 256], 9387: [[40, 112, 41], 256], 9388: [[40, 113, 41], 256], 9389: [[40, 114, 41], 256], 9390: [[40, 115, 41], 256], 9391: [[40, 116, 41], 256], 9392: [[40, 117, 41], 256], 9393: [[40, 118, 41], 256], 9394: [[40, 119, 41], 256], 9395: [[40, 120, 41], 256], 9396: [[40, 121, 41], 256], 9397: [[40, 122, 41], 256], 9398: [[65], 256], 9399: [[66], 256], 9400: [[67], 256], 9401: [[68], 256], 9402: [[69], 256], 9403: [[70], 256], 9404: [[71], 256], 9405: [[72], 256], 9406: [[73], 256], 9407: [[74], 256], 9408: [[75], 256], 9409: [[76], 256], 9410: [[77], 256], 9411: [[78], 256], 9412: [[79], 256], 9413: [[80], 256], 9414: [[81], 256], 9415: [[82], 256], 9416: [[83], 256], 9417: [[84], 256], 9418: [[85], 256], 9419: [[86], 256], 9420: [[87], 256], 9421: [[88], 256], 9422: [[89], 256], 9423: [[90], 256], 9424: [[97], 256], 9425: [[98], 256], 9426: [[99], 256], 9427: [[100], 256], 9428: [[101], 256], 9429: [[102], 256], 9430: [[103], 256], 9431: [[104], 256], 9432: [[105], 256], 9433: [[106], 256], 9434: [[107], 256], 9435: [[108], 256], 9436: [[109], 256], 9437: [[110], 256], 9438: [[111], 256], 9439: [[112], 256], 9440: [[113], 256], 9441: [[114], 256], 9442: [[115], 256], 9443: [[116], 256], 9444: [[117], 256], 9445: [[118], 256], 9446: [[119], 256], 9447: [[120], 256], 9448: [[121], 256], 9449: [[122], 256], 9450: [[48], 256] },
      10752: { 10764: [[8747, 8747, 8747, 8747], 256], 10868: [[58, 58, 61], 256], 10869: [[61, 61], 256], 10870: [[61, 61, 61], 256], 10972: [[10973, 824], 512] },
      11264: { 11388: [[106], 256], 11389: [[86], 256], 11503: [, 230], 11504: [, 230], 11505: [, 230] },
      11520: { 11631: [[11617], 256], 11647: [, 9], 11744: [, 230], 11745: [, 230], 11746: [, 230], 11747: [, 230], 11748: [, 230], 11749: [, 230], 11750: [, 230], 11751: [, 230], 11752: [, 230], 11753: [, 230], 11754: [, 230], 11755: [, 230], 11756: [, 230], 11757: [, 230], 11758: [, 230], 11759: [, 230], 11760: [, 230], 11761: [, 230], 11762: [, 230], 11763: [, 230], 11764: [, 230], 11765: [, 230], 11766: [, 230], 11767: [, 230], 11768: [, 230], 11769: [, 230], 11770: [, 230], 11771: [, 230], 11772: [, 230], 11773: [, 230], 11774: [, 230], 11775: [, 230] },
      11776: { 11935: [[27597], 256], 12019: [[40863], 256] },
      12032: { 12032: [[19968], 256], 12033: [[20008], 256], 12034: [[20022], 256], 12035: [[20031], 256], 12036: [[20057], 256], 12037: [[20101], 256], 12038: [[20108], 256], 12039: [[20128], 256], 12040: [[20154], 256], 12041: [[20799], 256], 12042: [[20837], 256], 12043: [[20843], 256], 12044: [[20866], 256], 12045: [[20886], 256], 12046: [[20907], 256], 12047: [[20960], 256], 12048: [[20981], 256], 12049: [[20992], 256], 12050: [[21147], 256], 12051: [[21241], 256], 12052: [[21269], 256], 12053: [[21274], 256], 12054: [[21304], 256], 12055: [[21313], 256], 12056: [[21340], 256], 12057: [[21353], 256], 12058: [[21378], 256], 12059: [[21430], 256], 12060: [[21448], 256], 12061: [[21475], 256], 12062: [[22231], 256], 12063: [[22303], 256], 12064: [[22763], 256], 12065: [[22786], 256], 12066: [[22794], 256], 12067: [[22805], 256], 12068: [[22823], 256], 12069: [[22899], 256], 12070: [[23376], 256], 12071: [[23424], 256], 12072: [[23544], 256], 12073: [[23567], 256], 12074: [[23586], 256], 12075: [[23608], 256], 12076: [[23662], 256], 12077: [[23665], 256], 12078: [[24027], 256], 12079: [[24037], 256], 12080: [[24049], 256], 12081: [[24062], 256], 12082: [[24178], 256], 12083: [[24186], 256], 12084: [[24191], 256], 12085: [[24308], 256], 12086: [[24318], 256], 12087: [[24331], 256], 12088: [[24339], 256], 12089: [[24400], 256], 12090: [[24417], 256], 12091: [[24435], 256], 12092: [[24515], 256], 12093: [[25096], 256], 12094: [[25142], 256], 12095: [[25163], 256], 12096: [[25903], 256], 12097: [[25908], 256], 12098: [[25991], 256], 12099: [[26007], 256], 12100: [[26020], 256], 12101: [[26041], 256], 12102: [[26080], 256], 12103: [[26085], 256], 12104: [[26352], 256], 12105: [[26376], 256], 12106: [[26408], 256], 12107: [[27424], 256], 12108: [[27490], 256], 12109: [[27513], 256], 12110: [[27571], 256], 12111: [[27595], 256], 12112: [[27604], 256], 12113: [[27611], 256], 12114: [[27663], 256], 12115: [[27668], 256], 12116: [[27700], 256], 12117: [[28779], 256], 12118: [[29226], 256], 12119: [[29238], 256], 12120: [[29243], 256], 12121: [[29247], 256], 12122: [[29255], 256], 12123: [[29273], 256], 12124: [[29275], 256], 12125: [[29356], 256], 12126: [[29572], 256], 12127: [[29577], 256], 12128: [[29916], 256], 12129: [[29926], 256], 12130: [[29976], 256], 12131: [[29983], 256], 12132: [[29992], 256], 12133: [[3e4], 256], 12134: [[30091], 256], 12135: [[30098], 256], 12136: [[30326], 256], 12137: [[30333], 256], 12138: [[30382], 256], 12139: [[30399], 256], 12140: [[30446], 256], 12141: [[30683], 256], 12142: [[30690], 256], 12143: [[30707], 256], 12144: [[31034], 256], 12145: [[31160], 256], 12146: [[31166], 256], 12147: [[31348], 256], 12148: [[31435], 256], 12149: [[31481], 256], 12150: [[31859], 256], 12151: [[31992], 256], 12152: [[32566], 256], 12153: [[32593], 256], 12154: [[32650], 256], 12155: [[32701], 256], 12156: [[32769], 256], 12157: [[32780], 256], 12158: [[32786], 256], 12159: [[32819], 256], 12160: [[32895], 256], 12161: [[32905], 256], 12162: [[33251], 256], 12163: [[33258], 256], 12164: [[33267], 256], 12165: [[33276], 256], 12166: [[33292], 256], 12167: [[33307], 256], 12168: [[33311], 256], 12169: [[33390], 256], 12170: [[33394], 256], 12171: [[33400], 256], 12172: [[34381], 256], 12173: [[34411], 256], 12174: [[34880], 256], 12175: [[34892], 256], 12176: [[34915], 256], 12177: [[35198], 256], 12178: [[35211], 256], 12179: [[35282], 256], 12180: [[35328], 256], 12181: [[35895], 256], 12182: [[35910], 256], 12183: [[35925], 256], 12184: [[35960], 256], 12185: [[35997], 256], 12186: [[36196], 256], 12187: [[36208], 256], 12188: [[36275], 256], 12189: [[36523], 256], 12190: [[36554], 256], 12191: [[36763], 256], 12192: [[36784], 256], 12193: [[36789], 256], 12194: [[37009], 256], 12195: [[37193], 256], 12196: [[37318], 256], 12197: [[37324], 256], 12198: [[37329], 256], 12199: [[38263], 256], 12200: [[38272], 256], 12201: [[38428], 256], 12202: [[38582], 256], 12203: [[38585], 256], 12204: [[38632], 256], 12205: [[38737], 256], 12206: [[38750], 256], 12207: [[38754], 256], 12208: [[38761], 256], 12209: [[38859], 256], 12210: [[38893], 256], 12211: [[38899], 256], 12212: [[38913], 256], 12213: [[39080], 256], 12214: [[39131], 256], 12215: [[39135], 256], 12216: [[39318], 256], 12217: [[39321], 256], 12218: [[39340], 256], 12219: [[39592], 256], 12220: [[39640], 256], 12221: [[39647], 256], 12222: [[39717], 256], 12223: [[39727], 256], 12224: [[39730], 256], 12225: [[39740], 256], 12226: [[39770], 256], 12227: [[40165], 256], 12228: [[40565], 256], 12229: [[40575], 256], 12230: [[40613], 256], 12231: [[40635], 256], 12232: [[40643], 256], 12233: [[40653], 256], 12234: [[40657], 256], 12235: [[40697], 256], 12236: [[40701], 256], 12237: [[40718], 256], 12238: [[40723], 256], 12239: [[40736], 256], 12240: [[40763], 256], 12241: [[40778], 256], 12242: [[40786], 256], 12243: [[40845], 256], 12244: [[40860], 256], 12245: [[40864], 256] },
      12288: { 12288: [[32], 256], 12330: [, 218], 12331: [, 228], 12332: [, 232], 12333: [, 222], 12334: [, 224], 12335: [, 224], 12342: [[12306], 256], 12344: [[21313], 256], 12345: [[21316], 256], 12346: [[21317], 256], 12358: [, , { 12441: 12436 }], 12363: [, , { 12441: 12364 }], 12364: [[12363, 12441]], 12365: [, , { 12441: 12366 }], 12366: [[12365, 12441]], 12367: [, , { 12441: 12368 }], 12368: [[12367, 12441]], 12369: [, , { 12441: 12370 }], 12370: [[12369, 12441]], 12371: [, , { 12441: 12372 }], 12372: [[12371, 12441]], 12373: [, , { 12441: 12374 }], 12374: [[12373, 12441]], 12375: [, , { 12441: 12376 }], 12376: [[12375, 12441]], 12377: [, , { 12441: 12378 }], 12378: [[12377, 12441]], 12379: [, , { 12441: 12380 }], 12380: [[12379, 12441]], 12381: [, , { 12441: 12382 }], 12382: [[12381, 12441]], 12383: [, , { 12441: 12384 }], 12384: [[12383, 12441]], 12385: [, , { 12441: 12386 }], 12386: [[12385, 12441]], 12388: [, , { 12441: 12389 }], 12389: [[12388, 12441]], 12390: [, , { 12441: 12391 }], 12391: [[12390, 12441]], 12392: [, , { 12441: 12393 }], 12393: [[12392, 12441]], 12399: [, , { 12441: 12400, 12442: 12401 }], 12400: [[12399, 12441]], 12401: [[12399, 12442]], 12402: [, , { 12441: 12403, 12442: 12404 }], 12403: [[12402, 12441]], 12404: [[12402, 12442]], 12405: [, , { 12441: 12406, 12442: 12407 }], 12406: [[12405, 12441]], 12407: [[12405, 12442]], 12408: [, , { 12441: 12409, 12442: 12410 }], 12409: [[12408, 12441]], 12410: [[12408, 12442]], 12411: [, , { 12441: 12412, 12442: 12413 }], 12412: [[12411, 12441]], 12413: [[12411, 12442]], 12436: [[12358, 12441]], 12441: [, 8], 12442: [, 8], 12443: [[32, 12441], 256], 12444: [[32, 12442], 256], 12445: [, , { 12441: 12446 }], 12446: [[12445, 12441]], 12447: [[12424, 12426], 256], 12454: [, , { 12441: 12532 }], 12459: [, , { 12441: 12460 }], 12460: [[12459, 12441]], 12461: [, , { 12441: 12462 }], 12462: [[12461, 12441]], 12463: [, , { 12441: 12464 }], 12464: [[12463, 12441]], 12465: [, , { 12441: 12466 }], 12466: [[12465, 12441]], 12467: [, , { 12441: 12468 }], 12468: [[12467, 12441]], 12469: [, , { 12441: 12470 }], 12470: [[12469, 12441]], 12471: [, , { 12441: 12472 }], 12472: [[12471, 12441]], 12473: [, , { 12441: 12474 }], 12474: [[12473, 12441]], 12475: [, , { 12441: 12476 }], 12476: [[12475, 12441]], 12477: [, , { 12441: 12478 }], 12478: [[12477, 12441]], 12479: [, , { 12441: 12480 }], 12480: [[12479, 12441]], 12481: [, , { 12441: 12482 }], 12482: [[12481, 12441]], 12484: [, , { 12441: 12485 }], 12485: [[12484, 12441]], 12486: [, , { 12441: 12487 }], 12487: [[12486, 12441]], 12488: [, , { 12441: 12489 }], 12489: [[12488, 12441]], 12495: [, , { 12441: 12496, 12442: 12497 }], 12496: [[12495, 12441]], 12497: [[12495, 12442]], 12498: [, , { 12441: 12499, 12442: 12500 }], 12499: [[12498, 12441]], 12500: [[12498, 12442]], 12501: [, , { 12441: 12502, 12442: 12503 }], 12502: [[12501, 12441]], 12503: [[12501, 12442]], 12504: [, , { 12441: 12505, 12442: 12506 }], 12505: [[12504, 12441]], 12506: [[12504, 12442]], 12507: [, , { 12441: 12508, 12442: 12509 }], 12508: [[12507, 12441]], 12509: [[12507, 12442]], 12527: [, , { 12441: 12535 }], 12528: [, , { 12441: 12536 }], 12529: [, , { 12441: 12537 }], 12530: [, , { 12441: 12538 }], 12532: [[12454, 12441]], 12535: [[12527, 12441]], 12536: [[12528, 12441]], 12537: [[12529, 12441]], 12538: [[12530, 12441]], 12541: [, , { 12441: 12542 }], 12542: [[12541, 12441]], 12543: [[12467, 12488], 256] },
      12544: { 12593: [[4352], 256], 12594: [[4353], 256], 12595: [[4522], 256], 12596: [[4354], 256], 12597: [[4524], 256], 12598: [[4525], 256], 12599: [[4355], 256], 12600: [[4356], 256], 12601: [[4357], 256], 12602: [[4528], 256], 12603: [[4529], 256], 12604: [[4530], 256], 12605: [[4531], 256], 12606: [[4532], 256], 12607: [[4533], 256], 12608: [[4378], 256], 12609: [[4358], 256], 12610: [[4359], 256], 12611: [[4360], 256], 12612: [[4385], 256], 12613: [[4361], 256], 12614: [[4362], 256], 12615: [[4363], 256], 12616: [[4364], 256], 12617: [[4365], 256], 12618: [[4366], 256], 12619: [[4367], 256], 12620: [[4368], 256], 12621: [[4369], 256], 12622: [[4370], 256], 12623: [[4449], 256], 12624: [[4450], 256], 12625: [[4451], 256], 12626: [[4452], 256], 12627: [[4453], 256], 12628: [[4454], 256], 12629: [[4455], 256], 12630: [[4456], 256], 12631: [[4457], 256], 12632: [[4458], 256], 12633: [[4459], 256], 12634: [[4460], 256], 12635: [[4461], 256], 12636: [[4462], 256], 12637: [[4463], 256], 12638: [[4464], 256], 12639: [[4465], 256], 12640: [[4466], 256], 12641: [[4467], 256], 12642: [[4468], 256], 12643: [[4469], 256], 12644: [[4448], 256], 12645: [[4372], 256], 12646: [[4373], 256], 12647: [[4551], 256], 12648: [[4552], 256], 12649: [[4556], 256], 12650: [[4558], 256], 12651: [[4563], 256], 12652: [[4567], 256], 12653: [[4569], 256], 12654: [[4380], 256], 12655: [[4573], 256], 12656: [[4575], 256], 12657: [[4381], 256], 12658: [[4382], 256], 12659: [[4384], 256], 12660: [[4386], 256], 12661: [[4387], 256], 12662: [[4391], 256], 12663: [[4393], 256], 12664: [[4395], 256], 12665: [[4396], 256], 12666: [[4397], 256], 12667: [[4398], 256], 12668: [[4399], 256], 12669: [[4402], 256], 12670: [[4406], 256], 12671: [[4416], 256], 12672: [[4423], 256], 12673: [[4428], 256], 12674: [[4593], 256], 12675: [[4594], 256], 12676: [[4439], 256], 12677: [[4440], 256], 12678: [[4441], 256], 12679: [[4484], 256], 12680: [[4485], 256], 12681: [[4488], 256], 12682: [[4497], 256], 12683: [[4498], 256], 12684: [[4500], 256], 12685: [[4510], 256], 12686: [[4513], 256], 12690: [[19968], 256], 12691: [[20108], 256], 12692: [[19977], 256], 12693: [[22235], 256], 12694: [[19978], 256], 12695: [[20013], 256], 12696: [[19979], 256], 12697: [[30002], 256], 12698: [[20057], 256], 12699: [[19993], 256], 12700: [[19969], 256], 12701: [[22825], 256], 12702: [[22320], 256], 12703: [[20154], 256] },
      12800: { 12800: [[40, 4352, 41], 256], 12801: [[40, 4354, 41], 256], 12802: [[40, 4355, 41], 256], 12803: [[40, 4357, 41], 256], 12804: [[40, 4358, 41], 256], 12805: [[40, 4359, 41], 256], 12806: [[40, 4361, 41], 256], 12807: [[40, 4363, 41], 256], 12808: [[40, 4364, 41], 256], 12809: [[40, 4366, 41], 256], 12810: [[40, 4367, 41], 256], 12811: [[40, 4368, 41], 256], 12812: [[40, 4369, 41], 256], 12813: [[40, 4370, 41], 256], 12814: [[40, 4352, 4449, 41], 256], 12815: [[40, 4354, 4449, 41], 256], 12816: [[40, 4355, 4449, 41], 256], 12817: [[40, 4357, 4449, 41], 256], 12818: [[40, 4358, 4449, 41], 256], 12819: [[40, 4359, 4449, 41], 256], 12820: [[40, 4361, 4449, 41], 256], 12821: [[40, 4363, 4449, 41], 256], 12822: [[40, 4364, 4449, 41], 256], 12823: [[40, 4366, 4449, 41], 256], 12824: [[40, 4367, 4449, 41], 256], 12825: [[40, 4368, 4449, 41], 256], 12826: [[40, 4369, 4449, 41], 256], 12827: [[40, 4370, 4449, 41], 256], 12828: [[40, 4364, 4462, 41], 256], 12829: [[40, 4363, 4457, 4364, 4453, 4523, 41], 256], 12830: [[40, 4363, 4457, 4370, 4462, 41], 256], 12832: [[40, 19968, 41], 256], 12833: [[40, 20108, 41], 256], 12834: [[40, 19977, 41], 256], 12835: [[40, 22235, 41], 256], 12836: [[40, 20116, 41], 256], 12837: [[40, 20845, 41], 256], 12838: [[40, 19971, 41], 256], 12839: [[40, 20843, 41], 256], 12840: [[40, 20061, 41], 256], 12841: [[40, 21313, 41], 256], 12842: [[40, 26376, 41], 256], 12843: [[40, 28779, 41], 256], 12844: [[40, 27700, 41], 256], 12845: [[40, 26408, 41], 256], 12846: [[40, 37329, 41], 256], 12847: [[40, 22303, 41], 256], 12848: [[40, 26085, 41], 256], 12849: [[40, 26666, 41], 256], 12850: [[40, 26377, 41], 256], 12851: [[40, 31038, 41], 256], 12852: [[40, 21517, 41], 256], 12853: [[40, 29305, 41], 256], 12854: [[40, 36001, 41], 256], 12855: [[40, 31069, 41], 256], 12856: [[40, 21172, 41], 256], 12857: [[40, 20195, 41], 256], 12858: [[40, 21628, 41], 256], 12859: [[40, 23398, 41], 256], 12860: [[40, 30435, 41], 256], 12861: [[40, 20225, 41], 256], 12862: [[40, 36039, 41], 256], 12863: [[40, 21332, 41], 256], 12864: [[40, 31085, 41], 256], 12865: [[40, 20241, 41], 256], 12866: [[40, 33258, 41], 256], 12867: [[40, 33267, 41], 256], 12868: [[21839], 256], 12869: [[24188], 256], 12870: [[25991], 256], 12871: [[31631], 256], 12880: [[80, 84, 69], 256], 12881: [[50, 49], 256], 12882: [[50, 50], 256], 12883: [[50, 51], 256], 12884: [[50, 52], 256], 12885: [[50, 53], 256], 12886: [[50, 54], 256], 12887: [[50, 55], 256], 12888: [[50, 56], 256], 12889: [[50, 57], 256], 12890: [[51, 48], 256], 12891: [[51, 49], 256], 12892: [[51, 50], 256], 12893: [[51, 51], 256], 12894: [[51, 52], 256], 12895: [[51, 53], 256], 12896: [[4352], 256], 12897: [[4354], 256], 12898: [[4355], 256], 12899: [[4357], 256], 12900: [[4358], 256], 12901: [[4359], 256], 12902: [[4361], 256], 12903: [[4363], 256], 12904: [[4364], 256], 12905: [[4366], 256], 12906: [[4367], 256], 12907: [[4368], 256], 12908: [[4369], 256], 12909: [[4370], 256], 12910: [[4352, 4449], 256], 12911: [[4354, 4449], 256], 12912: [[4355, 4449], 256], 12913: [[4357, 4449], 256], 12914: [[4358, 4449], 256], 12915: [[4359, 4449], 256], 12916: [[4361, 4449], 256], 12917: [[4363, 4449], 256], 12918: [[4364, 4449], 256], 12919: [[4366, 4449], 256], 12920: [[4367, 4449], 256], 12921: [[4368, 4449], 256], 12922: [[4369, 4449], 256], 12923: [[4370, 4449], 256], 12924: [[4366, 4449, 4535, 4352, 4457], 256], 12925: [[4364, 4462, 4363, 4468], 256], 12926: [[4363, 4462], 256], 12928: [[19968], 256], 12929: [[20108], 256], 12930: [[19977], 256], 12931: [[22235], 256], 12932: [[20116], 256], 12933: [[20845], 256], 12934: [[19971], 256], 12935: [[20843], 256], 12936: [[20061], 256], 12937: [[21313], 256], 12938: [[26376], 256], 12939: [[28779], 256], 12940: [[27700], 256], 12941: [[26408], 256], 12942: [[37329], 256], 12943: [[22303], 256], 12944: [[26085], 256], 12945: [[26666], 256], 12946: [[26377], 256], 12947: [[31038], 256], 12948: [[21517], 256], 12949: [[29305], 256], 12950: [[36001], 256], 12951: [[31069], 256], 12952: [[21172], 256], 12953: [[31192], 256], 12954: [[30007], 256], 12955: [[22899], 256], 12956: [[36969], 256], 12957: [[20778], 256], 12958: [[21360], 256], 12959: [[27880], 256], 12960: [[38917], 256], 12961: [[20241], 256], 12962: [[20889], 256], 12963: [[27491], 256], 12964: [[19978], 256], 12965: [[20013], 256], 12966: [[19979], 256], 12967: [[24038], 256], 12968: [[21491], 256], 12969: [[21307], 256], 12970: [[23447], 256], 12971: [[23398], 256], 12972: [[30435], 256], 12973: [[20225], 256], 12974: [[36039], 256], 12975: [[21332], 256], 12976: [[22812], 256], 12977: [[51, 54], 256], 12978: [[51, 55], 256], 12979: [[51, 56], 256], 12980: [[51, 57], 256], 12981: [[52, 48], 256], 12982: [[52, 49], 256], 12983: [[52, 50], 256], 12984: [[52, 51], 256], 12985: [[52, 52], 256], 12986: [[52, 53], 256], 12987: [[52, 54], 256], 12988: [[52, 55], 256], 12989: [[52, 56], 256], 12990: [[52, 57], 256], 12991: [[53, 48], 256], 12992: [[49, 26376], 256], 12993: [[50, 26376], 256], 12994: [[51, 26376], 256], 12995: [[52, 26376], 256], 12996: [[53, 26376], 256], 12997: [[54, 26376], 256], 12998: [[55, 26376], 256], 12999: [[56, 26376], 256], 13e3: [[57, 26376], 256], 13001: [[49, 48, 26376], 256], 13002: [[49, 49, 26376], 256], 13003: [[49, 50, 26376], 256], 13004: [[72, 103], 256], 13005: [[101, 114, 103], 256], 13006: [[101, 86], 256], 13007: [[76, 84, 68], 256], 13008: [[12450], 256], 13009: [[12452], 256], 13010: [[12454], 256], 13011: [[12456], 256], 13012: [[12458], 256], 13013: [[12459], 256], 13014: [[12461], 256], 13015: [[12463], 256], 13016: [[12465], 256], 13017: [[12467], 256], 13018: [[12469], 256], 13019: [[12471], 256], 13020: [[12473], 256], 13021: [[12475], 256], 13022: [[12477], 256], 13023: [[12479], 256], 13024: [[12481], 256], 13025: [[12484], 256], 13026: [[12486], 256], 13027: [[12488], 256], 13028: [[12490], 256], 13029: [[12491], 256], 13030: [[12492], 256], 13031: [[12493], 256], 13032: [[12494], 256], 13033: [[12495], 256], 13034: [[12498], 256], 13035: [[12501], 256], 13036: [[12504], 256], 13037: [[12507], 256], 13038: [[12510], 256], 13039: [[12511], 256], 13040: [[12512], 256], 13041: [[12513], 256], 13042: [[12514], 256], 13043: [[12516], 256], 13044: [[12518], 256], 13045: [[12520], 256], 13046: [[12521], 256], 13047: [[12522], 256], 13048: [[12523], 256], 13049: [[12524], 256], 13050: [[12525], 256], 13051: [[12527], 256], 13052: [[12528], 256], 13053: [[12529], 256], 13054: [[12530], 256] },
      13056: { 13056: [[12450, 12497, 12540, 12488], 256], 13057: [[12450, 12523, 12501, 12449], 256], 13058: [[12450, 12531, 12506, 12450], 256], 13059: [[12450, 12540, 12523], 256], 13060: [[12452, 12491, 12531, 12464], 256], 13061: [[12452, 12531, 12481], 256], 13062: [[12454, 12457, 12531], 256], 13063: [[12456, 12473, 12463, 12540, 12489], 256], 13064: [[12456, 12540, 12459, 12540], 256], 13065: [[12458, 12531, 12473], 256], 13066: [[12458, 12540, 12512], 256], 13067: [[12459, 12452, 12522], 256], 13068: [[12459, 12521, 12483, 12488], 256], 13069: [[12459, 12525, 12522, 12540], 256], 13070: [[12460, 12525, 12531], 256], 13071: [[12460, 12531, 12510], 256], 13072: [[12462, 12460], 256], 13073: [[12462, 12491, 12540], 256], 13074: [[12461, 12517, 12522, 12540], 256], 13075: [[12462, 12523, 12480, 12540], 256], 13076: [[12461, 12525], 256], 13077: [[12461, 12525, 12464, 12521, 12512], 256], 13078: [[12461, 12525, 12513, 12540, 12488, 12523], 256], 13079: [[12461, 12525, 12527, 12483, 12488], 256], 13080: [[12464, 12521, 12512], 256], 13081: [[12464, 12521, 12512, 12488, 12531], 256], 13082: [[12463, 12523, 12476, 12452, 12525], 256], 13083: [[12463, 12525, 12540, 12493], 256], 13084: [[12465, 12540, 12473], 256], 13085: [[12467, 12523, 12490], 256], 13086: [[12467, 12540, 12509], 256], 13087: [[12469, 12452, 12463, 12523], 256], 13088: [[12469, 12531, 12481, 12540, 12512], 256], 13089: [[12471, 12522, 12531, 12464], 256], 13090: [[12475, 12531, 12481], 256], 13091: [[12475, 12531, 12488], 256], 13092: [[12480, 12540, 12473], 256], 13093: [[12487, 12471], 256], 13094: [[12489, 12523], 256], 13095: [[12488, 12531], 256], 13096: [[12490, 12494], 256], 13097: [[12494, 12483, 12488], 256], 13098: [[12495, 12452, 12484], 256], 13099: [[12497, 12540, 12475, 12531, 12488], 256], 13100: [[12497, 12540, 12484], 256], 13101: [[12496, 12540, 12524, 12523], 256], 13102: [[12500, 12450, 12473, 12488, 12523], 256], 13103: [[12500, 12463, 12523], 256], 13104: [[12500, 12467], 256], 13105: [[12499, 12523], 256], 13106: [[12501, 12449, 12521, 12483, 12489], 256], 13107: [[12501, 12451, 12540, 12488], 256], 13108: [[12502, 12483, 12471, 12455, 12523], 256], 13109: [[12501, 12521, 12531], 256], 13110: [[12504, 12463, 12479, 12540, 12523], 256], 13111: [[12506, 12477], 256], 13112: [[12506, 12491, 12498], 256], 13113: [[12504, 12523, 12484], 256], 13114: [[12506, 12531, 12473], 256], 13115: [[12506, 12540, 12472], 256], 13116: [[12505, 12540, 12479], 256], 13117: [[12509, 12452, 12531, 12488], 256], 13118: [[12508, 12523, 12488], 256], 13119: [[12507, 12531], 256], 13120: [[12509, 12531, 12489], 256], 13121: [[12507, 12540, 12523], 256], 13122: [[12507, 12540, 12531], 256], 13123: [[12510, 12452, 12463, 12525], 256], 13124: [[12510, 12452, 12523], 256], 13125: [[12510, 12483, 12495], 256], 13126: [[12510, 12523, 12463], 256], 13127: [[12510, 12531, 12471, 12519, 12531], 256], 13128: [[12511, 12463, 12525, 12531], 256], 13129: [[12511, 12522], 256], 13130: [[12511, 12522, 12496, 12540, 12523], 256], 13131: [[12513, 12460], 256], 13132: [[12513, 12460, 12488, 12531], 256], 13133: [[12513, 12540, 12488, 12523], 256], 13134: [[12516, 12540, 12489], 256], 13135: [[12516, 12540, 12523], 256], 13136: [[12518, 12450, 12531], 256], 13137: [[12522, 12483, 12488, 12523], 256], 13138: [[12522, 12521], 256], 13139: [[12523, 12500, 12540], 256], 13140: [[12523, 12540, 12502, 12523], 256], 13141: [[12524, 12512], 256], 13142: [[12524, 12531, 12488, 12466, 12531], 256], 13143: [[12527, 12483, 12488], 256], 13144: [[48, 28857], 256], 13145: [[49, 28857], 256], 13146: [[50, 28857], 256], 13147: [[51, 28857], 256], 13148: [[52, 28857], 256], 13149: [[53, 28857], 256], 13150: [[54, 28857], 256], 13151: [[55, 28857], 256], 13152: [[56, 28857], 256], 13153: [[57, 28857], 256], 13154: [[49, 48, 28857], 256], 13155: [[49, 49, 28857], 256], 13156: [[49, 50, 28857], 256], 13157: [[49, 51, 28857], 256], 13158: [[49, 52, 28857], 256], 13159: [[49, 53, 28857], 256], 13160: [[49, 54, 28857], 256], 13161: [[49, 55, 28857], 256], 13162: [[49, 56, 28857], 256], 13163: [[49, 57, 28857], 256], 13164: [[50, 48, 28857], 256], 13165: [[50, 49, 28857], 256], 13166: [[50, 50, 28857], 256], 13167: [[50, 51, 28857], 256], 13168: [[50, 52, 28857], 256], 13169: [[104, 80, 97], 256], 13170: [[100, 97], 256], 13171: [[65, 85], 256], 13172: [[98, 97, 114], 256], 13173: [[111, 86], 256], 13174: [[112, 99], 256], 13175: [[100, 109], 256], 13176: [[100, 109, 178], 256], 13177: [[100, 109, 179], 256], 13178: [[73, 85], 256], 13179: [[24179, 25104], 256], 13180: [[26157, 21644], 256], 13181: [[22823, 27491], 256], 13182: [[26126, 27835], 256], 13183: [[26666, 24335, 20250, 31038], 256], 13184: [[112, 65], 256], 13185: [[110, 65], 256], 13186: [[956, 65], 256], 13187: [[109, 65], 256], 13188: [[107, 65], 256], 13189: [[75, 66], 256], 13190: [[77, 66], 256], 13191: [[71, 66], 256], 13192: [[99, 97, 108], 256], 13193: [[107, 99, 97, 108], 256], 13194: [[112, 70], 256], 13195: [[110, 70], 256], 13196: [[956, 70], 256], 13197: [[956, 103], 256], 13198: [[109, 103], 256], 13199: [[107, 103], 256], 13200: [[72, 122], 256], 13201: [[107, 72, 122], 256], 13202: [[77, 72, 122], 256], 13203: [[71, 72, 122], 256], 13204: [[84, 72, 122], 256], 13205: [[956, 8467], 256], 13206: [[109, 8467], 256], 13207: [[100, 8467], 256], 13208: [[107, 8467], 256], 13209: [[102, 109], 256], 13210: [[110, 109], 256], 13211: [[956, 109], 256], 13212: [[109, 109], 256], 13213: [[99, 109], 256], 13214: [[107, 109], 256], 13215: [[109, 109, 178], 256], 13216: [[99, 109, 178], 256], 13217: [[109, 178], 256], 13218: [[107, 109, 178], 256], 13219: [[109, 109, 179], 256], 13220: [[99, 109, 179], 256], 13221: [[109, 179], 256], 13222: [[107, 109, 179], 256], 13223: [[109, 8725, 115], 256], 13224: [[109, 8725, 115, 178], 256], 13225: [[80, 97], 256], 13226: [[107, 80, 97], 256], 13227: [[77, 80, 97], 256], 13228: [[71, 80, 97], 256], 13229: [[114, 97, 100], 256], 13230: [[114, 97, 100, 8725, 115], 256], 13231: [[114, 97, 100, 8725, 115, 178], 256], 13232: [[112, 115], 256], 13233: [[110, 115], 256], 13234: [[956, 115], 256], 13235: [[109, 115], 256], 13236: [[112, 86], 256], 13237: [[110, 86], 256], 13238: [[956, 86], 256], 13239: [[109, 86], 256], 13240: [[107, 86], 256], 13241: [[77, 86], 256], 13242: [[112, 87], 256], 13243: [[110, 87], 256], 13244: [[956, 87], 256], 13245: [[109, 87], 256], 13246: [[107, 87], 256], 13247: [[77, 87], 256], 13248: [[107, 937], 256], 13249: [[77, 937], 256], 13250: [[97, 46, 109, 46], 256], 13251: [[66, 113], 256], 13252: [[99, 99], 256], 13253: [[99, 100], 256], 13254: [[67, 8725, 107, 103], 256], 13255: [[67, 111, 46], 256], 13256: [[100, 66], 256], 13257: [[71, 121], 256], 13258: [[104, 97], 256], 13259: [[72, 80], 256], 13260: [[105, 110], 256], 13261: [[75, 75], 256], 13262: [[75, 77], 256], 13263: [[107, 116], 256], 13264: [[108, 109], 256], 13265: [[108, 110], 256], 13266: [[108, 111, 103], 256], 13267: [[108, 120], 256], 13268: [[109, 98], 256], 13269: [[109, 105, 108], 256], 13270: [[109, 111, 108], 256], 13271: [[80, 72], 256], 13272: [[112, 46, 109, 46], 256], 13273: [[80, 80, 77], 256], 13274: [[80, 82], 256], 13275: [[115, 114], 256], 13276: [[83, 118], 256], 13277: [[87, 98], 256], 13278: [[86, 8725, 109], 256], 13279: [[65, 8725, 109], 256], 13280: [[49, 26085], 256], 13281: [[50, 26085], 256], 13282: [[51, 26085], 256], 13283: [[52, 26085], 256], 13284: [[53, 26085], 256], 13285: [[54, 26085], 256], 13286: [[55, 26085], 256], 13287: [[56, 26085], 256], 13288: [[57, 26085], 256], 13289: [[49, 48, 26085], 256], 13290: [[49, 49, 26085], 256], 13291: [[49, 50, 26085], 256], 13292: [[49, 51, 26085], 256], 13293: [[49, 52, 26085], 256], 13294: [[49, 53, 26085], 256], 13295: [[49, 54, 26085], 256], 13296: [[49, 55, 26085], 256], 13297: [[49, 56, 26085], 256], 13298: [[49, 57, 26085], 256], 13299: [[50, 48, 26085], 256], 13300: [[50, 49, 26085], 256], 13301: [[50, 50, 26085], 256], 13302: [[50, 51, 26085], 256], 13303: [[50, 52, 26085], 256], 13304: [[50, 53, 26085], 256], 13305: [[50, 54, 26085], 256], 13306: [[50, 55, 26085], 256], 13307: [[50, 56, 26085], 256], 13308: [[50, 57, 26085], 256], 13309: [[51, 48, 26085], 256], 13310: [[51, 49, 26085], 256], 13311: [[103, 97, 108], 256] },
      27136: { 92912: [, 1], 92913: [, 1], 92914: [, 1], 92915: [, 1], 92916: [, 1] },
      27392: { 92976: [, 230], 92977: [, 230], 92978: [, 230], 92979: [, 230], 92980: [, 230], 92981: [, 230], 92982: [, 230] },
      42496: { 42607: [, 230], 42612: [, 230], 42613: [, 230], 42614: [, 230], 42615: [, 230], 42616: [, 230], 42617: [, 230], 42618: [, 230], 42619: [, 230], 42620: [, 230], 42621: [, 230], 42652: [[1098], 256], 42653: [[1100], 256], 42655: [, 230], 42736: [, 230], 42737: [, 230] },
      42752: { 42864: [[42863], 256], 43e3: [[294], 256], 43001: [[339], 256] },
      43008: { 43014: [, 9], 43204: [, 9], 43232: [, 230], 43233: [, 230], 43234: [, 230], 43235: [, 230], 43236: [, 230], 43237: [, 230], 43238: [, 230], 43239: [, 230], 43240: [, 230], 43241: [, 230], 43242: [, 230], 43243: [, 230], 43244: [, 230], 43245: [, 230], 43246: [, 230], 43247: [, 230], 43248: [, 230], 43249: [, 230] },
      43264: { 43307: [, 220], 43308: [, 220], 43309: [, 220], 43347: [, 9], 43443: [, 7], 43456: [, 9] },
      43520: { 43696: [, 230], 43698: [, 230], 43699: [, 230], 43700: [, 220], 43703: [, 230], 43704: [, 230], 43710: [, 230], 43711: [, 230], 43713: [, 230], 43766: [, 9] },
      43776: { 43868: [[42791], 256], 43869: [[43831], 256], 43870: [[619], 256], 43871: [[43858], 256], 44013: [, 9] },
      48128: { 113822: [, 1] },
      53504: { 119134: [[119127, 119141], 512], 119135: [[119128, 119141], 512], 119136: [[119135, 119150], 512], 119137: [[119135, 119151], 512], 119138: [[119135, 119152], 512], 119139: [[119135, 119153], 512], 119140: [[119135, 119154], 512], 119141: [, 216], 119142: [, 216], 119143: [, 1], 119144: [, 1], 119145: [, 1], 119149: [, 226], 119150: [, 216], 119151: [, 216], 119152: [, 216], 119153: [, 216], 119154: [, 216], 119163: [, 220], 119164: [, 220], 119165: [, 220], 119166: [, 220], 119167: [, 220], 119168: [, 220], 119169: [, 220], 119170: [, 220], 119173: [, 230], 119174: [, 230], 119175: [, 230], 119176: [, 230], 119177: [, 230], 119178: [, 220], 119179: [, 220], 119210: [, 230], 119211: [, 230], 119212: [, 230], 119213: [, 230], 119227: [[119225, 119141], 512], 119228: [[119226, 119141], 512], 119229: [[119227, 119150], 512], 119230: [[119228, 119150], 512], 119231: [[119227, 119151], 512], 119232: [[119228, 119151], 512] },
      53760: { 119362: [, 230], 119363: [, 230], 119364: [, 230] },
      54272: { 119808: [[65], 256], 119809: [[66], 256], 119810: [[67], 256], 119811: [[68], 256], 119812: [[69], 256], 119813: [[70], 256], 119814: [[71], 256], 119815: [[72], 256], 119816: [[73], 256], 119817: [[74], 256], 119818: [[75], 256], 119819: [[76], 256], 119820: [[77], 256], 119821: [[78], 256], 119822: [[79], 256], 119823: [[80], 256], 119824: [[81], 256], 119825: [[82], 256], 119826: [[83], 256], 119827: [[84], 256], 119828: [[85], 256], 119829: [[86], 256], 119830: [[87], 256], 119831: [[88], 256], 119832: [[89], 256], 119833: [[90], 256], 119834: [[97], 256], 119835: [[98], 256], 119836: [[99], 256], 119837: [[100], 256], 119838: [[101], 256], 119839: [[102], 256], 119840: [[103], 256], 119841: [[104], 256], 119842: [[105], 256], 119843: [[106], 256], 119844: [[107], 256], 119845: [[108], 256], 119846: [[109], 256], 119847: [[110], 256], 119848: [[111], 256], 119849: [[112], 256], 119850: [[113], 256], 119851: [[114], 256], 119852: [[115], 256], 119853: [[116], 256], 119854: [[117], 256], 119855: [[118], 256], 119856: [[119], 256], 119857: [[120], 256], 119858: [[121], 256], 119859: [[122], 256], 119860: [[65], 256], 119861: [[66], 256], 119862: [[67], 256], 119863: [[68], 256], 119864: [[69], 256], 119865: [[70], 256], 119866: [[71], 256], 119867: [[72], 256], 119868: [[73], 256], 119869: [[74], 256], 119870: [[75], 256], 119871: [[76], 256], 119872: [[77], 256], 119873: [[78], 256], 119874: [[79], 256], 119875: [[80], 256], 119876: [[81], 256], 119877: [[82], 256], 119878: [[83], 256], 119879: [[84], 256], 119880: [[85], 256], 119881: [[86], 256], 119882: [[87], 256], 119883: [[88], 256], 119884: [[89], 256], 119885: [[90], 256], 119886: [[97], 256], 119887: [[98], 256], 119888: [[99], 256], 119889: [[100], 256], 119890: [[101], 256], 119891: [[102], 256], 119892: [[103], 256], 119894: [[105], 256], 119895: [[106], 256], 119896: [[107], 256], 119897: [[108], 256], 119898: [[109], 256], 119899: [[110], 256], 119900: [[111], 256], 119901: [[112], 256], 119902: [[113], 256], 119903: [[114], 256], 119904: [[115], 256], 119905: [[116], 256], 119906: [[117], 256], 119907: [[118], 256], 119908: [[119], 256], 119909: [[120], 256], 119910: [[121], 256], 119911: [[122], 256], 119912: [[65], 256], 119913: [[66], 256], 119914: [[67], 256], 119915: [[68], 256], 119916: [[69], 256], 119917: [[70], 256], 119918: [[71], 256], 119919: [[72], 256], 119920: [[73], 256], 119921: [[74], 256], 119922: [[75], 256], 119923: [[76], 256], 119924: [[77], 256], 119925: [[78], 256], 119926: [[79], 256], 119927: [[80], 256], 119928: [[81], 256], 119929: [[82], 256], 119930: [[83], 256], 119931: [[84], 256], 119932: [[85], 256], 119933: [[86], 256], 119934: [[87], 256], 119935: [[88], 256], 119936: [[89], 256], 119937: [[90], 256], 119938: [[97], 256], 119939: [[98], 256], 119940: [[99], 256], 119941: [[100], 256], 119942: [[101], 256], 119943: [[102], 256], 119944: [[103], 256], 119945: [[104], 256], 119946: [[105], 256], 119947: [[106], 256], 119948: [[107], 256], 119949: [[108], 256], 119950: [[109], 256], 119951: [[110], 256], 119952: [[111], 256], 119953: [[112], 256], 119954: [[113], 256], 119955: [[114], 256], 119956: [[115], 256], 119957: [[116], 256], 119958: [[117], 256], 119959: [[118], 256], 119960: [[119], 256], 119961: [[120], 256], 119962: [[121], 256], 119963: [[122], 256], 119964: [[65], 256], 119966: [[67], 256], 119967: [[68], 256], 119970: [[71], 256], 119973: [[74], 256], 119974: [[75], 256], 119977: [[78], 256], 119978: [[79], 256], 119979: [[80], 256], 119980: [[81], 256], 119982: [[83], 256], 119983: [[84], 256], 119984: [[85], 256], 119985: [[86], 256], 119986: [[87], 256], 119987: [[88], 256], 119988: [[89], 256], 119989: [[90], 256], 119990: [[97], 256], 119991: [[98], 256], 119992: [[99], 256], 119993: [[100], 256], 119995: [[102], 256], 119997: [[104], 256], 119998: [[105], 256], 119999: [[106], 256], 12e4: [[107], 256], 120001: [[108], 256], 120002: [[109], 256], 120003: [[110], 256], 120005: [[112], 256], 120006: [[113], 256], 120007: [[114], 256], 120008: [[115], 256], 120009: [[116], 256], 120010: [[117], 256], 120011: [[118], 256], 120012: [[119], 256], 120013: [[120], 256], 120014: [[121], 256], 120015: [[122], 256], 120016: [[65], 256], 120017: [[66], 256], 120018: [[67], 256], 120019: [[68], 256], 120020: [[69], 256], 120021: [[70], 256], 120022: [[71], 256], 120023: [[72], 256], 120024: [[73], 256], 120025: [[74], 256], 120026: [[75], 256], 120027: [[76], 256], 120028: [[77], 256], 120029: [[78], 256], 120030: [[79], 256], 120031: [[80], 256], 120032: [[81], 256], 120033: [[82], 256], 120034: [[83], 256], 120035: [[84], 256], 120036: [[85], 256], 120037: [[86], 256], 120038: [[87], 256], 120039: [[88], 256], 120040: [[89], 256], 120041: [[90], 256], 120042: [[97], 256], 120043: [[98], 256], 120044: [[99], 256], 120045: [[100], 256], 120046: [[101], 256], 120047: [[102], 256], 120048: [[103], 256], 120049: [[104], 256], 120050: [[105], 256], 120051: [[106], 256], 120052: [[107], 256], 120053: [[108], 256], 120054: [[109], 256], 120055: [[110], 256], 120056: [[111], 256], 120057: [[112], 256], 120058: [[113], 256], 120059: [[114], 256], 120060: [[115], 256], 120061: [[116], 256], 120062: [[117], 256], 120063: [[118], 256] },
      54528: { 120064: [[119], 256], 120065: [[120], 256], 120066: [[121], 256], 120067: [[122], 256], 120068: [[65], 256], 120069: [[66], 256], 120071: [[68], 256], 120072: [[69], 256], 120073: [[70], 256], 120074: [[71], 256], 120077: [[74], 256], 120078: [[75], 256], 120079: [[76], 256], 120080: [[77], 256], 120081: [[78], 256], 120082: [[79], 256], 120083: [[80], 256], 120084: [[81], 256], 120086: [[83], 256], 120087: [[84], 256], 120088: [[85], 256], 120089: [[86], 256], 120090: [[87], 256], 120091: [[88], 256], 120092: [[89], 256], 120094: [[97], 256], 120095: [[98], 256], 120096: [[99], 256], 120097: [[100], 256], 120098: [[101], 256], 120099: [[102], 256], 120100: [[103], 256], 120101: [[104], 256], 120102: [[105], 256], 120103: [[106], 256], 120104: [[107], 256], 120105: [[108], 256], 120106: [[109], 256], 120107: [[110], 256], 120108: [[111], 256], 120109: [[112], 256], 120110: [[113], 256], 120111: [[114], 256], 120112: [[115], 256], 120113: [[116], 256], 120114: [[117], 256], 120115: [[118], 256], 120116: [[119], 256], 120117: [[120], 256], 120118: [[121], 256], 120119: [[122], 256], 120120: [[65], 256], 120121: [[66], 256], 120123: [[68], 256], 120124: [[69], 256], 120125: [[70], 256], 120126: [[71], 256], 120128: [[73], 256], 120129: [[74], 256], 120130: [[75], 256], 120131: [[76], 256], 120132: [[77], 256], 120134: [[79], 256], 120138: [[83], 256], 120139: [[84], 256], 120140: [[85], 256], 120141: [[86], 256], 120142: [[87], 256], 120143: [[88], 256], 120144: [[89], 256], 120146: [[97], 256], 120147: [[98], 256], 120148: [[99], 256], 120149: [[100], 256], 120150: [[101], 256], 120151: [[102], 256], 120152: [[103], 256], 120153: [[104], 256], 120154: [[105], 256], 120155: [[106], 256], 120156: [[107], 256], 120157: [[108], 256], 120158: [[109], 256], 120159: [[110], 256], 120160: [[111], 256], 120161: [[112], 256], 120162: [[113], 256], 120163: [[114], 256], 120164: [[115], 256], 120165: [[116], 256], 120166: [[117], 256], 120167: [[118], 256], 120168: [[119], 256], 120169: [[120], 256], 120170: [[121], 256], 120171: [[122], 256], 120172: [[65], 256], 120173: [[66], 256], 120174: [[67], 256], 120175: [[68], 256], 120176: [[69], 256], 120177: [[70], 256], 120178: [[71], 256], 120179: [[72], 256], 120180: [[73], 256], 120181: [[74], 256], 120182: [[75], 256], 120183: [[76], 256], 120184: [[77], 256], 120185: [[78], 256], 120186: [[79], 256], 120187: [[80], 256], 120188: [[81], 256], 120189: [[82], 256], 120190: [[83], 256], 120191: [[84], 256], 120192: [[85], 256], 120193: [[86], 256], 120194: [[87], 256], 120195: [[88], 256], 120196: [[89], 256], 120197: [[90], 256], 120198: [[97], 256], 120199: [[98], 256], 120200: [[99], 256], 120201: [[100], 256], 120202: [[101], 256], 120203: [[102], 256], 120204: [[103], 256], 120205: [[104], 256], 120206: [[105], 256], 120207: [[106], 256], 120208: [[107], 256], 120209: [[108], 256], 120210: [[109], 256], 120211: [[110], 256], 120212: [[111], 256], 120213: [[112], 256], 120214: [[113], 256], 120215: [[114], 256], 120216: [[115], 256], 120217: [[116], 256], 120218: [[117], 256], 120219: [[118], 256], 120220: [[119], 256], 120221: [[120], 256], 120222: [[121], 256], 120223: [[122], 256], 120224: [[65], 256], 120225: [[66], 256], 120226: [[67], 256], 120227: [[68], 256], 120228: [[69], 256], 120229: [[70], 256], 120230: [[71], 256], 120231: [[72], 256], 120232: [[73], 256], 120233: [[74], 256], 120234: [[75], 256], 120235: [[76], 256], 120236: [[77], 256], 120237: [[78], 256], 120238: [[79], 256], 120239: [[80], 256], 120240: [[81], 256], 120241: [[82], 256], 120242: [[83], 256], 120243: [[84], 256], 120244: [[85], 256], 120245: [[86], 256], 120246: [[87], 256], 120247: [[88], 256], 120248: [[89], 256], 120249: [[90], 256], 120250: [[97], 256], 120251: [[98], 256], 120252: [[99], 256], 120253: [[100], 256], 120254: [[101], 256], 120255: [[102], 256], 120256: [[103], 256], 120257: [[104], 256], 120258: [[105], 256], 120259: [[106], 256], 120260: [[107], 256], 120261: [[108], 256], 120262: [[109], 256], 120263: [[110], 256], 120264: [[111], 256], 120265: [[112], 256], 120266: [[113], 256], 120267: [[114], 256], 120268: [[115], 256], 120269: [[116], 256], 120270: [[117], 256], 120271: [[118], 256], 120272: [[119], 256], 120273: [[120], 256], 120274: [[121], 256], 120275: [[122], 256], 120276: [[65], 256], 120277: [[66], 256], 120278: [[67], 256], 120279: [[68], 256], 120280: [[69], 256], 120281: [[70], 256], 120282: [[71], 256], 120283: [[72], 256], 120284: [[73], 256], 120285: [[74], 256], 120286: [[75], 256], 120287: [[76], 256], 120288: [[77], 256], 120289: [[78], 256], 120290: [[79], 256], 120291: [[80], 256], 120292: [[81], 256], 120293: [[82], 256], 120294: [[83], 256], 120295: [[84], 256], 120296: [[85], 256], 120297: [[86], 256], 120298: [[87], 256], 120299: [[88], 256], 120300: [[89], 256], 120301: [[90], 256], 120302: [[97], 256], 120303: [[98], 256], 120304: [[99], 256], 120305: [[100], 256], 120306: [[101], 256], 120307: [[102], 256], 120308: [[103], 256], 120309: [[104], 256], 120310: [[105], 256], 120311: [[106], 256], 120312: [[107], 256], 120313: [[108], 256], 120314: [[109], 256], 120315: [[110], 256], 120316: [[111], 256], 120317: [[112], 256], 120318: [[113], 256], 120319: [[114], 256] },
      54784: { 120320: [[115], 256], 120321: [[116], 256], 120322: [[117], 256], 120323: [[118], 256], 120324: [[119], 256], 120325: [[120], 256], 120326: [[121], 256], 120327: [[122], 256], 120328: [[65], 256], 120329: [[66], 256], 120330: [[67], 256], 120331: [[68], 256], 120332: [[69], 256], 120333: [[70], 256], 120334: [[71], 256], 120335: [[72], 256], 120336: [[73], 256], 120337: [[74], 256], 120338: [[75], 256], 120339: [[76], 256], 120340: [[77], 256], 120341: [[78], 256], 120342: [[79], 256], 120343: [[80], 256], 120344: [[81], 256], 120345: [[82], 256], 120346: [[83], 256], 120347: [[84], 256], 120348: [[85], 256], 120349: [[86], 256], 120350: [[87], 256], 120351: [[88], 256], 120352: [[89], 256], 120353: [[90], 256], 120354: [[97], 256], 120355: [[98], 256], 120356: [[99], 256], 120357: [[100], 256], 120358: [[101], 256], 120359: [[102], 256], 120360: [[103], 256], 120361: [[104], 256], 120362: [[105], 256], 120363: [[106], 256], 120364: [[107], 256], 120365: [[108], 256], 120366: [[109], 256], 120367: [[110], 256], 120368: [[111], 256], 120369: [[112], 256], 120370: [[113], 256], 120371: [[114], 256], 120372: [[115], 256], 120373: [[116], 256], 120374: [[117], 256], 120375: [[118], 256], 120376: [[119], 256], 120377: [[120], 256], 120378: [[121], 256], 120379: [[122], 256], 120380: [[65], 256], 120381: [[66], 256], 120382: [[67], 256], 120383: [[68], 256], 120384: [[69], 256], 120385: [[70], 256], 120386: [[71], 256], 120387: [[72], 256], 120388: [[73], 256], 120389: [[74], 256], 120390: [[75], 256], 120391: [[76], 256], 120392: [[77], 256], 120393: [[78], 256], 120394: [[79], 256], 120395: [[80], 256], 120396: [[81], 256], 120397: [[82], 256], 120398: [[83], 256], 120399: [[84], 256], 120400: [[85], 256], 120401: [[86], 256], 120402: [[87], 256], 120403: [[88], 256], 120404: [[89], 256], 120405: [[90], 256], 120406: [[97], 256], 120407: [[98], 256], 120408: [[99], 256], 120409: [[100], 256], 120410: [[101], 256], 120411: [[102], 256], 120412: [[103], 256], 120413: [[104], 256], 120414: [[105], 256], 120415: [[106], 256], 120416: [[107], 256], 120417: [[108], 256], 120418: [[109], 256], 120419: [[110], 256], 120420: [[111], 256], 120421: [[112], 256], 120422: [[113], 256], 120423: [[114], 256], 120424: [[115], 256], 120425: [[116], 256], 120426: [[117], 256], 120427: [[118], 256], 120428: [[119], 256], 120429: [[120], 256], 120430: [[121], 256], 120431: [[122], 256], 120432: [[65], 256], 120433: [[66], 256], 120434: [[67], 256], 120435: [[68], 256], 120436: [[69], 256], 120437: [[70], 256], 120438: [[71], 256], 120439: [[72], 256], 120440: [[73], 256], 120441: [[74], 256], 120442: [[75], 256], 120443: [[76], 256], 120444: [[77], 256], 120445: [[78], 256], 120446: [[79], 256], 120447: [[80], 256], 120448: [[81], 256], 120449: [[82], 256], 120450: [[83], 256], 120451: [[84], 256], 120452: [[85], 256], 120453: [[86], 256], 120454: [[87], 256], 120455: [[88], 256], 120456: [[89], 256], 120457: [[90], 256], 120458: [[97], 256], 120459: [[98], 256], 120460: [[99], 256], 120461: [[100], 256], 120462: [[101], 256], 120463: [[102], 256], 120464: [[103], 256], 120465: [[104], 256], 120466: [[105], 256], 120467: [[106], 256], 120468: [[107], 256], 120469: [[108], 256], 120470: [[109], 256], 120471: [[110], 256], 120472: [[111], 256], 120473: [[112], 256], 120474: [[113], 256], 120475: [[114], 256], 120476: [[115], 256], 120477: [[116], 256], 120478: [[117], 256], 120479: [[118], 256], 120480: [[119], 256], 120481: [[120], 256], 120482: [[121], 256], 120483: [[122], 256], 120484: [[305], 256], 120485: [[567], 256], 120488: [[913], 256], 120489: [[914], 256], 120490: [[915], 256], 120491: [[916], 256], 120492: [[917], 256], 120493: [[918], 256], 120494: [[919], 256], 120495: [[920], 256], 120496: [[921], 256], 120497: [[922], 256], 120498: [[923], 256], 120499: [[924], 256], 120500: [[925], 256], 120501: [[926], 256], 120502: [[927], 256], 120503: [[928], 256], 120504: [[929], 256], 120505: [[1012], 256], 120506: [[931], 256], 120507: [[932], 256], 120508: [[933], 256], 120509: [[934], 256], 120510: [[935], 256], 120511: [[936], 256], 120512: [[937], 256], 120513: [[8711], 256], 120514: [[945], 256], 120515: [[946], 256], 120516: [[947], 256], 120517: [[948], 256], 120518: [[949], 256], 120519: [[950], 256], 120520: [[951], 256], 120521: [[952], 256], 120522: [[953], 256], 120523: [[954], 256], 120524: [[955], 256], 120525: [[956], 256], 120526: [[957], 256], 120527: [[958], 256], 120528: [[959], 256], 120529: [[960], 256], 120530: [[961], 256], 120531: [[962], 256], 120532: [[963], 256], 120533: [[964], 256], 120534: [[965], 256], 120535: [[966], 256], 120536: [[967], 256], 120537: [[968], 256], 120538: [[969], 256], 120539: [[8706], 256], 120540: [[1013], 256], 120541: [[977], 256], 120542: [[1008], 256], 120543: [[981], 256], 120544: [[1009], 256], 120545: [[982], 256], 120546: [[913], 256], 120547: [[914], 256], 120548: [[915], 256], 120549: [[916], 256], 120550: [[917], 256], 120551: [[918], 256], 120552: [[919], 256], 120553: [[920], 256], 120554: [[921], 256], 120555: [[922], 256], 120556: [[923], 256], 120557: [[924], 256], 120558: [[925], 256], 120559: [[926], 256], 120560: [[927], 256], 120561: [[928], 256], 120562: [[929], 256], 120563: [[1012], 256], 120564: [[931], 256], 120565: [[932], 256], 120566: [[933], 256], 120567: [[934], 256], 120568: [[935], 256], 120569: [[936], 256], 120570: [[937], 256], 120571: [[8711], 256], 120572: [[945], 256], 120573: [[946], 256], 120574: [[947], 256], 120575: [[948], 256] },
      55040: { 120576: [[949], 256], 120577: [[950], 256], 120578: [[951], 256], 120579: [[952], 256], 120580: [[953], 256], 120581: [[954], 256], 120582: [[955], 256], 120583: [[956], 256], 120584: [[957], 256], 120585: [[958], 256], 120586: [[959], 256], 120587: [[960], 256], 120588: [[961], 256], 120589: [[962], 256], 120590: [[963], 256], 120591: [[964], 256], 120592: [[965], 256], 120593: [[966], 256], 120594: [[967], 256], 120595: [[968], 256], 120596: [[969], 256], 120597: [[8706], 256], 120598: [[1013], 256], 120599: [[977], 256], 120600: [[1008], 256], 120601: [[981], 256], 120602: [[1009], 256], 120603: [[982], 256], 120604: [[913], 256], 120605: [[914], 256], 120606: [[915], 256], 120607: [[916], 256], 120608: [[917], 256], 120609: [[918], 256], 120610: [[919], 256], 120611: [[920], 256], 120612: [[921], 256], 120613: [[922], 256], 120614: [[923], 256], 120615: [[924], 256], 120616: [[925], 256], 120617: [[926], 256], 120618: [[927], 256], 120619: [[928], 256], 120620: [[929], 256], 120621: [[1012], 256], 120622: [[931], 256], 120623: [[932], 256], 120624: [[933], 256], 120625: [[934], 256], 120626: [[935], 256], 120627: [[936], 256], 120628: [[937], 256], 120629: [[8711], 256], 120630: [[945], 256], 120631: [[946], 256], 120632: [[947], 256], 120633: [[948], 256], 120634: [[949], 256], 120635: [[950], 256], 120636: [[951], 256], 120637: [[952], 256], 120638: [[953], 256], 120639: [[954], 256], 120640: [[955], 256], 120641: [[956], 256], 120642: [[957], 256], 120643: [[958], 256], 120644: [[959], 256], 120645: [[960], 256], 120646: [[961], 256], 120647: [[962], 256], 120648: [[963], 256], 120649: [[964], 256], 120650: [[965], 256], 120651: [[966], 256], 120652: [[967], 256], 120653: [[968], 256], 120654: [[969], 256], 120655: [[8706], 256], 120656: [[1013], 256], 120657: [[977], 256], 120658: [[1008], 256], 120659: [[981], 256], 120660: [[1009], 256], 120661: [[982], 256], 120662: [[913], 256], 120663: [[914], 256], 120664: [[915], 256], 120665: [[916], 256], 120666: [[917], 256], 120667: [[918], 256], 120668: [[919], 256], 120669: [[920], 256], 120670: [[921], 256], 120671: [[922], 256], 120672: [[923], 256], 120673: [[924], 256], 120674: [[925], 256], 120675: [[926], 256], 120676: [[927], 256], 120677: [[928], 256], 120678: [[929], 256], 120679: [[1012], 256], 120680: [[931], 256], 120681: [[932], 256], 120682: [[933], 256], 120683: [[934], 256], 120684: [[935], 256], 120685: [[936], 256], 120686: [[937], 256], 120687: [[8711], 256], 120688: [[945], 256], 120689: [[946], 256], 120690: [[947], 256], 120691: [[948], 256], 120692: [[949], 256], 120693: [[950], 256], 120694: [[951], 256], 120695: [[952], 256], 120696: [[953], 256], 120697: [[954], 256], 120698: [[955], 256], 120699: [[956], 256], 120700: [[957], 256], 120701: [[958], 256], 120702: [[959], 256], 120703: [[960], 256], 120704: [[961], 256], 120705: [[962], 256], 120706: [[963], 256], 120707: [[964], 256], 120708: [[965], 256], 120709: [[966], 256], 120710: [[967], 256], 120711: [[968], 256], 120712: [[969], 256], 120713: [[8706], 256], 120714: [[1013], 256], 120715: [[977], 256], 120716: [[1008], 256], 120717: [[981], 256], 120718: [[1009], 256], 120719: [[982], 256], 120720: [[913], 256], 120721: [[914], 256], 120722: [[915], 256], 120723: [[916], 256], 120724: [[917], 256], 120725: [[918], 256], 120726: [[919], 256], 120727: [[920], 256], 120728: [[921], 256], 120729: [[922], 256], 120730: [[923], 256], 120731: [[924], 256], 120732: [[925], 256], 120733: [[926], 256], 120734: [[927], 256], 120735: [[928], 256], 120736: [[929], 256], 120737: [[1012], 256], 120738: [[931], 256], 120739: [[932], 256], 120740: [[933], 256], 120741: [[934], 256], 120742: [[935], 256], 120743: [[936], 256], 120744: [[937], 256], 120745: [[8711], 256], 120746: [[945], 256], 120747: [[946], 256], 120748: [[947], 256], 120749: [[948], 256], 120750: [[949], 256], 120751: [[950], 256], 120752: [[951], 256], 120753: [[952], 256], 120754: [[953], 256], 120755: [[954], 256], 120756: [[955], 256], 120757: [[956], 256], 120758: [[957], 256], 120759: [[958], 256], 120760: [[959], 256], 120761: [[960], 256], 120762: [[961], 256], 120763: [[962], 256], 120764: [[963], 256], 120765: [[964], 256], 120766: [[965], 256], 120767: [[966], 256], 120768: [[967], 256], 120769: [[968], 256], 120770: [[969], 256], 120771: [[8706], 256], 120772: [[1013], 256], 120773: [[977], 256], 120774: [[1008], 256], 120775: [[981], 256], 120776: [[1009], 256], 120777: [[982], 256], 120778: [[988], 256], 120779: [[989], 256], 120782: [[48], 256], 120783: [[49], 256], 120784: [[50], 256], 120785: [[51], 256], 120786: [[52], 256], 120787: [[53], 256], 120788: [[54], 256], 120789: [[55], 256], 120790: [[56], 256], 120791: [[57], 256], 120792: [[48], 256], 120793: [[49], 256], 120794: [[50], 256], 120795: [[51], 256], 120796: [[52], 256], 120797: [[53], 256], 120798: [[54], 256], 120799: [[55], 256], 120800: [[56], 256], 120801: [[57], 256], 120802: [[48], 256], 120803: [[49], 256], 120804: [[50], 256], 120805: [[51], 256], 120806: [[52], 256], 120807: [[53], 256], 120808: [[54], 256], 120809: [[55], 256], 120810: [[56], 256], 120811: [[57], 256], 120812: [[48], 256], 120813: [[49], 256], 120814: [[50], 256], 120815: [[51], 256], 120816: [[52], 256], 120817: [[53], 256], 120818: [[54], 256], 120819: [[55], 256], 120820: [[56], 256], 120821: [[57], 256], 120822: [[48], 256], 120823: [[49], 256], 120824: [[50], 256], 120825: [[51], 256], 120826: [[52], 256], 120827: [[53], 256], 120828: [[54], 256], 120829: [[55], 256], 120830: [[56], 256], 120831: [[57], 256] },
      59392: { 125136: [, 220], 125137: [, 220], 125138: [, 220], 125139: [, 220], 125140: [, 220], 125141: [, 220], 125142: [, 220] },
      60928: { 126464: [[1575], 256], 126465: [[1576], 256], 126466: [[1580], 256], 126467: [[1583], 256], 126469: [[1608], 256], 126470: [[1586], 256], 126471: [[1581], 256], 126472: [[1591], 256], 126473: [[1610], 256], 126474: [[1603], 256], 126475: [[1604], 256], 126476: [[1605], 256], 126477: [[1606], 256], 126478: [[1587], 256], 126479: [[1593], 256], 126480: [[1601], 256], 126481: [[1589], 256], 126482: [[1602], 256], 126483: [[1585], 256], 126484: [[1588], 256], 126485: [[1578], 256], 126486: [[1579], 256], 126487: [[1582], 256], 126488: [[1584], 256], 126489: [[1590], 256], 126490: [[1592], 256], 126491: [[1594], 256], 126492: [[1646], 256], 126493: [[1722], 256], 126494: [[1697], 256], 126495: [[1647], 256], 126497: [[1576], 256], 126498: [[1580], 256], 126500: [[1607], 256], 126503: [[1581], 256], 126505: [[1610], 256], 126506: [[1603], 256], 126507: [[1604], 256], 126508: [[1605], 256], 126509: [[1606], 256], 126510: [[1587], 256], 126511: [[1593], 256], 126512: [[1601], 256], 126513: [[1589], 256], 126514: [[1602], 256], 126516: [[1588], 256], 126517: [[1578], 256], 126518: [[1579], 256], 126519: [[1582], 256], 126521: [[1590], 256], 126523: [[1594], 256], 126530: [[1580], 256], 126535: [[1581], 256], 126537: [[1610], 256], 126539: [[1604], 256], 126541: [[1606], 256], 126542: [[1587], 256], 126543: [[1593], 256], 126545: [[1589], 256], 126546: [[1602], 256], 126548: [[1588], 256], 126551: [[1582], 256], 126553: [[1590], 256], 126555: [[1594], 256], 126557: [[1722], 256], 126559: [[1647], 256], 126561: [[1576], 256], 126562: [[1580], 256], 126564: [[1607], 256], 126567: [[1581], 256], 126568: [[1591], 256], 126569: [[1610], 256], 126570: [[1603], 256], 126572: [[1605], 256], 126573: [[1606], 256], 126574: [[1587], 256], 126575: [[1593], 256], 126576: [[1601], 256], 126577: [[1589], 256], 126578: [[1602], 256], 126580: [[1588], 256], 126581: [[1578], 256], 126582: [[1579], 256], 126583: [[1582], 256], 126585: [[1590], 256], 126586: [[1592], 256], 126587: [[1594], 256], 126588: [[1646], 256], 126590: [[1697], 256], 126592: [[1575], 256], 126593: [[1576], 256], 126594: [[1580], 256], 126595: [[1583], 256], 126596: [[1607], 256], 126597: [[1608], 256], 126598: [[1586], 256], 126599: [[1581], 256], 126600: [[1591], 256], 126601: [[1610], 256], 126603: [[1604], 256], 126604: [[1605], 256], 126605: [[1606], 256], 126606: [[1587], 256], 126607: [[1593], 256], 126608: [[1601], 256], 126609: [[1589], 256], 126610: [[1602], 256], 126611: [[1585], 256], 126612: [[1588], 256], 126613: [[1578], 256], 126614: [[1579], 256], 126615: [[1582], 256], 126616: [[1584], 256], 126617: [[1590], 256], 126618: [[1592], 256], 126619: [[1594], 256], 126625: [[1576], 256], 126626: [[1580], 256], 126627: [[1583], 256], 126629: [[1608], 256], 126630: [[1586], 256], 126631: [[1581], 256], 126632: [[1591], 256], 126633: [[1610], 256], 126635: [[1604], 256], 126636: [[1605], 256], 126637: [[1606], 256], 126638: [[1587], 256], 126639: [[1593], 256], 126640: [[1601], 256], 126641: [[1589], 256], 126642: [[1602], 256], 126643: [[1585], 256], 126644: [[1588], 256], 126645: [[1578], 256], 126646: [[1579], 256], 126647: [[1582], 256], 126648: [[1584], 256], 126649: [[1590], 256], 126650: [[1592], 256], 126651: [[1594], 256] },
      61696: { 127232: [[48, 46], 256], 127233: [[48, 44], 256], 127234: [[49, 44], 256], 127235: [[50, 44], 256], 127236: [[51, 44], 256], 127237: [[52, 44], 256], 127238: [[53, 44], 256], 127239: [[54, 44], 256], 127240: [[55, 44], 256], 127241: [[56, 44], 256], 127242: [[57, 44], 256], 127248: [[40, 65, 41], 256], 127249: [[40, 66, 41], 256], 127250: [[40, 67, 41], 256], 127251: [[40, 68, 41], 256], 127252: [[40, 69, 41], 256], 127253: [[40, 70, 41], 256], 127254: [[40, 71, 41], 256], 127255: [[40, 72, 41], 256], 127256: [[40, 73, 41], 256], 127257: [[40, 74, 41], 256], 127258: [[40, 75, 41], 256], 127259: [[40, 76, 41], 256], 127260: [[40, 77, 41], 256], 127261: [[40, 78, 41], 256], 127262: [[40, 79, 41], 256], 127263: [[40, 80, 41], 256], 127264: [[40, 81, 41], 256], 127265: [[40, 82, 41], 256], 127266: [[40, 83, 41], 256], 127267: [[40, 84, 41], 256], 127268: [[40, 85, 41], 256], 127269: [[40, 86, 41], 256], 127270: [[40, 87, 41], 256], 127271: [[40, 88, 41], 256], 127272: [[40, 89, 41], 256], 127273: [[40, 90, 41], 256], 127274: [[12308, 83, 12309], 256], 127275: [[67], 256], 127276: [[82], 256], 127277: [[67, 68], 256], 127278: [[87, 90], 256], 127280: [[65], 256], 127281: [[66], 256], 127282: [[67], 256], 127283: [[68], 256], 127284: [[69], 256], 127285: [[70], 256], 127286: [[71], 256], 127287: [[72], 256], 127288: [[73], 256], 127289: [[74], 256], 127290: [[75], 256], 127291: [[76], 256], 127292: [[77], 256], 127293: [[78], 256], 127294: [[79], 256], 127295: [[80], 256], 127296: [[81], 256], 127297: [[82], 256], 127298: [[83], 256], 127299: [[84], 256], 127300: [[85], 256], 127301: [[86], 256], 127302: [[87], 256], 127303: [[88], 256], 127304: [[89], 256], 127305: [[90], 256], 127306: [[72, 86], 256], 127307: [[77, 86], 256], 127308: [[83, 68], 256], 127309: [[83, 83], 256], 127310: [[80, 80, 86], 256], 127311: [[87, 67], 256], 127338: [[77, 67], 256], 127339: [[77, 68], 256], 127376: [[68, 74], 256] },
      61952: { 127488: [[12411, 12363], 256], 127489: [[12467, 12467], 256], 127490: [[12469], 256], 127504: [[25163], 256], 127505: [[23383], 256], 127506: [[21452], 256], 127507: [[12487], 256], 127508: [[20108], 256], 127509: [[22810], 256], 127510: [[35299], 256], 127511: [[22825], 256], 127512: [[20132], 256], 127513: [[26144], 256], 127514: [[28961], 256], 127515: [[26009], 256], 127516: [[21069], 256], 127517: [[24460], 256], 127518: [[20877], 256], 127519: [[26032], 256], 127520: [[21021], 256], 127521: [[32066], 256], 127522: [[29983], 256], 127523: [[36009], 256], 127524: [[22768], 256], 127525: [[21561], 256], 127526: [[28436], 256], 127527: [[25237], 256], 127528: [[25429], 256], 127529: [[19968], 256], 127530: [[19977], 256], 127531: [[36938], 256], 127532: [[24038], 256], 127533: [[20013], 256], 127534: [[21491], 256], 127535: [[25351], 256], 127536: [[36208], 256], 127537: [[25171], 256], 127538: [[31105], 256], 127539: [[31354], 256], 127540: [[21512], 256], 127541: [[28288], 256], 127542: [[26377], 256], 127543: [[26376], 256], 127544: [[30003], 256], 127545: [[21106], 256], 127546: [[21942], 256], 127552: [[12308, 26412, 12309], 256], 127553: [[12308, 19977, 12309], 256], 127554: [[12308, 20108, 12309], 256], 127555: [[12308, 23433, 12309], 256], 127556: [[12308, 28857, 12309], 256], 127557: [[12308, 25171, 12309], 256], 127558: [[12308, 30423, 12309], 256], 127559: [[12308, 21213, 12309], 256], 127560: [[12308, 25943, 12309], 256], 127568: [[24471], 256], 127569: [[21487], 256] },
      63488: { 194560: [[20029]], 194561: [[20024]], 194562: [[20033]], 194563: [[131362]], 194564: [[20320]], 194565: [[20398]], 194566: [[20411]], 194567: [[20482]], 194568: [[20602]], 194569: [[20633]], 194570: [[20711]], 194571: [[20687]], 194572: [[13470]], 194573: [[132666]], 194574: [[20813]], 194575: [[20820]], 194576: [[20836]], 194577: [[20855]], 194578: [[132380]], 194579: [[13497]], 194580: [[20839]], 194581: [[20877]], 194582: [[132427]], 194583: [[20887]], 194584: [[20900]], 194585: [[20172]], 194586: [[20908]], 194587: [[20917]], 194588: [[168415]], 194589: [[20981]], 194590: [[20995]], 194591: [[13535]], 194592: [[21051]], 194593: [[21062]], 194594: [[21106]], 194595: [[21111]], 194596: [[13589]], 194597: [[21191]], 194598: [[21193]], 194599: [[21220]], 194600: [[21242]], 194601: [[21253]], 194602: [[21254]], 194603: [[21271]], 194604: [[21321]], 194605: [[21329]], 194606: [[21338]], 194607: [[21363]], 194608: [[21373]], 194609: [[21375]], 194610: [[21375]], 194611: [[21375]], 194612: [[133676]], 194613: [[28784]], 194614: [[21450]], 194615: [[21471]], 194616: [[133987]], 194617: [[21483]], 194618: [[21489]], 194619: [[21510]], 194620: [[21662]], 194621: [[21560]], 194622: [[21576]], 194623: [[21608]], 194624: [[21666]], 194625: [[21750]], 194626: [[21776]], 194627: [[21843]], 194628: [[21859]], 194629: [[21892]], 194630: [[21892]], 194631: [[21913]], 194632: [[21931]], 194633: [[21939]], 194634: [[21954]], 194635: [[22294]], 194636: [[22022]], 194637: [[22295]], 194638: [[22097]], 194639: [[22132]], 194640: [[20999]], 194641: [[22766]], 194642: [[22478]], 194643: [[22516]], 194644: [[22541]], 194645: [[22411]], 194646: [[22578]], 194647: [[22577]], 194648: [[22700]], 194649: [[136420]], 194650: [[22770]], 194651: [[22775]], 194652: [[22790]], 194653: [[22810]], 194654: [[22818]], 194655: [[22882]], 194656: [[136872]], 194657: [[136938]], 194658: [[23020]], 194659: [[23067]], 194660: [[23079]], 194661: [[23e3]], 194662: [[23142]], 194663: [[14062]], 194664: [[14076]], 194665: [[23304]], 194666: [[23358]], 194667: [[23358]], 194668: [[137672]], 194669: [[23491]], 194670: [[23512]], 194671: [[23527]], 194672: [[23539]], 194673: [[138008]], 194674: [[23551]], 194675: [[23558]], 194676: [[24403]], 194677: [[23586]], 194678: [[14209]], 194679: [[23648]], 194680: [[23662]], 194681: [[23744]], 194682: [[23693]], 194683: [[138724]], 194684: [[23875]], 194685: [[138726]], 194686: [[23918]], 194687: [[23915]], 194688: [[23932]], 194689: [[24033]], 194690: [[24034]], 194691: [[14383]], 194692: [[24061]], 194693: [[24104]], 194694: [[24125]], 194695: [[24169]], 194696: [[14434]], 194697: [[139651]], 194698: [[14460]], 194699: [[24240]], 194700: [[24243]], 194701: [[24246]], 194702: [[24266]], 194703: [[172946]], 194704: [[24318]], 194705: [[140081]], 194706: [[140081]], 194707: [[33281]], 194708: [[24354]], 194709: [[24354]], 194710: [[14535]], 194711: [[144056]], 194712: [[156122]], 194713: [[24418]], 194714: [[24427]], 194715: [[14563]], 194716: [[24474]], 194717: [[24525]], 194718: [[24535]], 194719: [[24569]], 194720: [[24705]], 194721: [[14650]], 194722: [[14620]], 194723: [[24724]], 194724: [[141012]], 194725: [[24775]], 194726: [[24904]], 194727: [[24908]], 194728: [[24910]], 194729: [[24908]], 194730: [[24954]], 194731: [[24974]], 194732: [[25010]], 194733: [[24996]], 194734: [[25007]], 194735: [[25054]], 194736: [[25074]], 194737: [[25078]], 194738: [[25104]], 194739: [[25115]], 194740: [[25181]], 194741: [[25265]], 194742: [[25300]], 194743: [[25424]], 194744: [[142092]], 194745: [[25405]], 194746: [[25340]], 194747: [[25448]], 194748: [[25475]], 194749: [[25572]], 194750: [[142321]], 194751: [[25634]], 194752: [[25541]], 194753: [[25513]], 194754: [[14894]], 194755: [[25705]], 194756: [[25726]], 194757: [[25757]], 194758: [[25719]], 194759: [[14956]], 194760: [[25935]], 194761: [[25964]], 194762: [[143370]], 194763: [[26083]], 194764: [[26360]], 194765: [[26185]], 194766: [[15129]], 194767: [[26257]], 194768: [[15112]], 194769: [[15076]], 194770: [[20882]], 194771: [[20885]], 194772: [[26368]], 194773: [[26268]], 194774: [[32941]], 194775: [[17369]], 194776: [[26391]], 194777: [[26395]], 194778: [[26401]], 194779: [[26462]], 194780: [[26451]], 194781: [[144323]], 194782: [[15177]], 194783: [[26618]], 194784: [[26501]], 194785: [[26706]], 194786: [[26757]], 194787: [[144493]], 194788: [[26766]], 194789: [[26655]], 194790: [[26900]], 194791: [[15261]], 194792: [[26946]], 194793: [[27043]], 194794: [[27114]], 194795: [[27304]], 194796: [[145059]], 194797: [[27355]], 194798: [[15384]], 194799: [[27425]], 194800: [[145575]], 194801: [[27476]], 194802: [[15438]], 194803: [[27506]], 194804: [[27551]], 194805: [[27578]], 194806: [[27579]], 194807: [[146061]], 194808: [[138507]], 194809: [[146170]], 194810: [[27726]], 194811: [[146620]], 194812: [[27839]], 194813: [[27853]], 194814: [[27751]], 194815: [[27926]] },
      63744: { 63744: [[35912]], 63745: [[26356]], 63746: [[36554]], 63747: [[36040]], 63748: [[28369]], 63749: [[20018]], 63750: [[21477]], 63751: [[40860]], 63752: [[40860]], 63753: [[22865]], 63754: [[37329]], 63755: [[21895]], 63756: [[22856]], 63757: [[25078]], 63758: [[30313]], 63759: [[32645]], 63760: [[34367]], 63761: [[34746]], 63762: [[35064]], 63763: [[37007]], 63764: [[27138]], 63765: [[27931]], 63766: [[28889]], 63767: [[29662]], 63768: [[33853]], 63769: [[37226]], 63770: [[39409]], 63771: [[20098]], 63772: [[21365]], 63773: [[27396]], 63774: [[29211]], 63775: [[34349]], 63776: [[40478]], 63777: [[23888]], 63778: [[28651]], 63779: [[34253]], 63780: [[35172]], 63781: [[25289]], 63782: [[33240]], 63783: [[34847]], 63784: [[24266]], 63785: [[26391]], 63786: [[28010]], 63787: [[29436]], 63788: [[37070]], 63789: [[20358]], 63790: [[20919]], 63791: [[21214]], 63792: [[25796]], 63793: [[27347]], 63794: [[29200]], 63795: [[30439]], 63796: [[32769]], 63797: [[34310]], 63798: [[34396]], 63799: [[36335]], 63800: [[38706]], 63801: [[39791]], 63802: [[40442]], 63803: [[30860]], 63804: [[31103]], 63805: [[32160]], 63806: [[33737]], 63807: [[37636]], 63808: [[40575]], 63809: [[35542]], 63810: [[22751]], 63811: [[24324]], 63812: [[31840]], 63813: [[32894]], 63814: [[29282]], 63815: [[30922]], 63816: [[36034]], 63817: [[38647]], 63818: [[22744]], 63819: [[23650]], 63820: [[27155]], 63821: [[28122]], 63822: [[28431]], 63823: [[32047]], 63824: [[32311]], 63825: [[38475]], 63826: [[21202]], 63827: [[32907]], 63828: [[20956]], 63829: [[20940]], 63830: [[31260]], 63831: [[32190]], 63832: [[33777]], 63833: [[38517]], 63834: [[35712]], 63835: [[25295]], 63836: [[27138]], 63837: [[35582]], 63838: [[20025]], 63839: [[23527]], 63840: [[24594]], 63841: [[29575]], 63842: [[30064]], 63843: [[21271]], 63844: [[30971]], 63845: [[20415]], 63846: [[24489]], 63847: [[19981]], 63848: [[27852]], 63849: [[25976]], 63850: [[32034]], 63851: [[21443]], 63852: [[22622]], 63853: [[30465]], 63854: [[33865]], 63855: [[35498]], 63856: [[27578]], 63857: [[36784]], 63858: [[27784]], 63859: [[25342]], 63860: [[33509]], 63861: [[25504]], 63862: [[30053]], 63863: [[20142]], 63864: [[20841]], 63865: [[20937]], 63866: [[26753]], 63867: [[31975]], 63868: [[33391]], 63869: [[35538]], 63870: [[37327]], 63871: [[21237]], 63872: [[21570]], 63873: [[22899]], 63874: [[24300]], 63875: [[26053]], 63876: [[28670]], 63877: [[31018]], 63878: [[38317]], 63879: [[39530]], 63880: [[40599]], 63881: [[40654]], 63882: [[21147]], 63883: [[26310]], 63884: [[27511]], 63885: [[36706]], 63886: [[24180]], 63887: [[24976]], 63888: [[25088]], 63889: [[25754]], 63890: [[28451]], 63891: [[29001]], 63892: [[29833]], 63893: [[31178]], 63894: [[32244]], 63895: [[32879]], 63896: [[36646]], 63897: [[34030]], 63898: [[36899]], 63899: [[37706]], 63900: [[21015]], 63901: [[21155]], 63902: [[21693]], 63903: [[28872]], 63904: [[35010]], 63905: [[35498]], 63906: [[24265]], 63907: [[24565]], 63908: [[25467]], 63909: [[27566]], 63910: [[31806]], 63911: [[29557]], 63912: [[20196]], 63913: [[22265]], 63914: [[23527]], 63915: [[23994]], 63916: [[24604]], 63917: [[29618]], 63918: [[29801]], 63919: [[32666]], 63920: [[32838]], 63921: [[37428]], 63922: [[38646]], 63923: [[38728]], 63924: [[38936]], 63925: [[20363]], 63926: [[31150]], 63927: [[37300]], 63928: [[38584]], 63929: [[24801]], 63930: [[20102]], 63931: [[20698]], 63932: [[23534]], 63933: [[23615]], 63934: [[26009]], 63935: [[27138]], 63936: [[29134]], 63937: [[30274]], 63938: [[34044]], 63939: [[36988]], 63940: [[40845]], 63941: [[26248]], 63942: [[38446]], 63943: [[21129]], 63944: [[26491]], 63945: [[26611]], 63946: [[27969]], 63947: [[28316]], 63948: [[29705]], 63949: [[30041]], 63950: [[30827]], 63951: [[32016]], 63952: [[39006]], 63953: [[20845]], 63954: [[25134]], 63955: [[38520]], 63956: [[20523]], 63957: [[23833]], 63958: [[28138]], 63959: [[36650]], 63960: [[24459]], 63961: [[24900]], 63962: [[26647]], 63963: [[29575]], 63964: [[38534]], 63965: [[21033]], 63966: [[21519]], 63967: [[23653]], 63968: [[26131]], 63969: [[26446]], 63970: [[26792]], 63971: [[27877]], 63972: [[29702]], 63973: [[30178]], 63974: [[32633]], 63975: [[35023]], 63976: [[35041]], 63977: [[37324]], 63978: [[38626]], 63979: [[21311]], 63980: [[28346]], 63981: [[21533]], 63982: [[29136]], 63983: [[29848]], 63984: [[34298]], 63985: [[38563]], 63986: [[40023]], 63987: [[40607]], 63988: [[26519]], 63989: [[28107]], 63990: [[33256]], 63991: [[31435]], 63992: [[31520]], 63993: [[31890]], 63994: [[29376]], 63995: [[28825]], 63996: [[35672]], 63997: [[20160]], 63998: [[33590]], 63999: [[21050]], 194816: [[27966]], 194817: [[28023]], 194818: [[27969]], 194819: [[28009]], 194820: [[28024]], 194821: [[28037]], 194822: [[146718]], 194823: [[27956]], 194824: [[28207]], 194825: [[28270]], 194826: [[15667]], 194827: [[28363]], 194828: [[28359]], 194829: [[147153]], 194830: [[28153]], 194831: [[28526]], 194832: [[147294]], 194833: [[147342]], 194834: [[28614]], 194835: [[28729]], 194836: [[28702]], 194837: [[28699]], 194838: [[15766]], 194839: [[28746]], 194840: [[28797]], 194841: [[28791]], 194842: [[28845]], 194843: [[132389]], 194844: [[28997]], 194845: [[148067]], 194846: [[29084]], 194847: [[148395]], 194848: [[29224]], 194849: [[29237]], 194850: [[29264]], 194851: [[149e3]], 194852: [[29312]], 194853: [[29333]], 194854: [[149301]], 194855: [[149524]], 194856: [[29562]], 194857: [[29579]], 194858: [[16044]], 194859: [[29605]], 194860: [[16056]], 194861: [[16056]], 194862: [[29767]], 194863: [[29788]], 194864: [[29809]], 194865: [[29829]], 194866: [[29898]], 194867: [[16155]], 194868: [[29988]], 194869: [[150582]], 194870: [[30014]], 194871: [[150674]], 194872: [[30064]], 194873: [[139679]], 194874: [[30224]], 194875: [[151457]], 194876: [[151480]], 194877: [[151620]], 194878: [[16380]], 194879: [[16392]], 194880: [[30452]], 194881: [[151795]], 194882: [[151794]], 194883: [[151833]], 194884: [[151859]], 194885: [[30494]], 194886: [[30495]], 194887: [[30495]], 194888: [[30538]], 194889: [[16441]], 194890: [[30603]], 194891: [[16454]], 194892: [[16534]], 194893: [[152605]], 194894: [[30798]], 194895: [[30860]], 194896: [[30924]], 194897: [[16611]], 194898: [[153126]], 194899: [[31062]], 194900: [[153242]], 194901: [[153285]], 194902: [[31119]], 194903: [[31211]], 194904: [[16687]], 194905: [[31296]], 194906: [[31306]], 194907: [[31311]], 194908: [[153980]], 194909: [[154279]], 194910: [[154279]], 194911: [[31470]], 194912: [[16898]], 194913: [[154539]], 194914: [[31686]], 194915: [[31689]], 194916: [[16935]], 194917: [[154752]], 194918: [[31954]], 194919: [[17056]], 194920: [[31976]], 194921: [[31971]], 194922: [[32e3]], 194923: [[155526]], 194924: [[32099]], 194925: [[17153]], 194926: [[32199]], 194927: [[32258]], 194928: [[32325]], 194929: [[17204]], 194930: [[156200]], 194931: [[156231]], 194932: [[17241]], 194933: [[156377]], 194934: [[32634]], 194935: [[156478]], 194936: [[32661]], 194937: [[32762]], 194938: [[32773]], 194939: [[156890]], 194940: [[156963]], 194941: [[32864]], 194942: [[157096]], 194943: [[32880]], 194944: [[144223]], 194945: [[17365]], 194946: [[32946]], 194947: [[33027]], 194948: [[17419]], 194949: [[33086]], 194950: [[23221]], 194951: [[157607]], 194952: [[157621]], 194953: [[144275]], 194954: [[144284]], 194955: [[33281]], 194956: [[33284]], 194957: [[36766]], 194958: [[17515]], 194959: [[33425]], 194960: [[33419]], 194961: [[33437]], 194962: [[21171]], 194963: [[33457]], 194964: [[33459]], 194965: [[33469]], 194966: [[33510]], 194967: [[158524]], 194968: [[33509]], 194969: [[33565]], 194970: [[33635]], 194971: [[33709]], 194972: [[33571]], 194973: [[33725]], 194974: [[33767]], 194975: [[33879]], 194976: [[33619]], 194977: [[33738]], 194978: [[33740]], 194979: [[33756]], 194980: [[158774]], 194981: [[159083]], 194982: [[158933]], 194983: [[17707]], 194984: [[34033]], 194985: [[34035]], 194986: [[34070]], 194987: [[160714]], 194988: [[34148]], 194989: [[159532]], 194990: [[17757]], 194991: [[17761]], 194992: [[159665]], 194993: [[159954]], 194994: [[17771]], 194995: [[34384]], 194996: [[34396]], 194997: [[34407]], 194998: [[34409]], 194999: [[34473]], 195e3: [[34440]], 195001: [[34574]], 195002: [[34530]], 195003: [[34681]], 195004: [[34600]], 195005: [[34667]], 195006: [[34694]], 195007: [[17879]], 195008: [[34785]], 195009: [[34817]], 195010: [[17913]], 195011: [[34912]], 195012: [[34915]], 195013: [[161383]], 195014: [[35031]], 195015: [[35038]], 195016: [[17973]], 195017: [[35066]], 195018: [[13499]], 195019: [[161966]], 195020: [[162150]], 195021: [[18110]], 195022: [[18119]], 195023: [[35488]], 195024: [[35565]], 195025: [[35722]], 195026: [[35925]], 195027: [[162984]], 195028: [[36011]], 195029: [[36033]], 195030: [[36123]], 195031: [[36215]], 195032: [[163631]], 195033: [[133124]], 195034: [[36299]], 195035: [[36284]], 195036: [[36336]], 195037: [[133342]], 195038: [[36564]], 195039: [[36664]], 195040: [[165330]], 195041: [[165357]], 195042: [[37012]], 195043: [[37105]], 195044: [[37137]], 195045: [[165678]], 195046: [[37147]], 195047: [[37432]], 195048: [[37591]], 195049: [[37592]], 195050: [[37500]], 195051: [[37881]], 195052: [[37909]], 195053: [[166906]], 195054: [[38283]], 195055: [[18837]], 195056: [[38327]], 195057: [[167287]], 195058: [[18918]], 195059: [[38595]], 195060: [[23986]], 195061: [[38691]], 195062: [[168261]], 195063: [[168474]], 195064: [[19054]], 195065: [[19062]], 195066: [[38880]], 195067: [[168970]], 195068: [[19122]], 195069: [[169110]], 195070: [[38923]], 195071: [[38923]] },
      64e3: { 64e3: [[20999]], 64001: [[24230]], 64002: [[25299]], 64003: [[31958]], 64004: [[23429]], 64005: [[27934]], 64006: [[26292]], 64007: [[36667]], 64008: [[34892]], 64009: [[38477]], 64010: [[35211]], 64011: [[24275]], 64012: [[20800]], 64013: [[21952]], 64016: [[22618]], 64018: [[26228]], 64021: [[20958]], 64022: [[29482]], 64023: [[30410]], 64024: [[31036]], 64025: [[31070]], 64026: [[31077]], 64027: [[31119]], 64028: [[38742]], 64029: [[31934]], 64030: [[32701]], 64032: [[34322]], 64034: [[35576]], 64037: [[36920]], 64038: [[37117]], 64042: [[39151]], 64043: [[39164]], 64044: [[39208]], 64045: [[40372]], 64046: [[37086]], 64047: [[38583]], 64048: [[20398]], 64049: [[20711]], 64050: [[20813]], 64051: [[21193]], 64052: [[21220]], 64053: [[21329]], 64054: [[21917]], 64055: [[22022]], 64056: [[22120]], 64057: [[22592]], 64058: [[22696]], 64059: [[23652]], 64060: [[23662]], 64061: [[24724]], 64062: [[24936]], 64063: [[24974]], 64064: [[25074]], 64065: [[25935]], 64066: [[26082]], 64067: [[26257]], 64068: [[26757]], 64069: [[28023]], 64070: [[28186]], 64071: [[28450]], 64072: [[29038]], 64073: [[29227]], 64074: [[29730]], 64075: [[30865]], 64076: [[31038]], 64077: [[31049]], 64078: [[31048]], 64079: [[31056]], 64080: [[31062]], 64081: [[31069]], 64082: [[31117]], 64083: [[31118]], 64084: [[31296]], 64085: [[31361]], 64086: [[31680]], 64087: [[32244]], 64088: [[32265]], 64089: [[32321]], 64090: [[32626]], 64091: [[32773]], 64092: [[33261]], 64093: [[33401]], 64094: [[33401]], 64095: [[33879]], 64096: [[35088]], 64097: [[35222]], 64098: [[35585]], 64099: [[35641]], 64100: [[36051]], 64101: [[36104]], 64102: [[36790]], 64103: [[36920]], 64104: [[38627]], 64105: [[38911]], 64106: [[38971]], 64107: [[24693]], 64108: [[148206]], 64109: [[33304]], 64112: [[20006]], 64113: [[20917]], 64114: [[20840]], 64115: [[20352]], 64116: [[20805]], 64117: [[20864]], 64118: [[21191]], 64119: [[21242]], 64120: [[21917]], 64121: [[21845]], 64122: [[21913]], 64123: [[21986]], 64124: [[22618]], 64125: [[22707]], 64126: [[22852]], 64127: [[22868]], 64128: [[23138]], 64129: [[23336]], 64130: [[24274]], 64131: [[24281]], 64132: [[24425]], 64133: [[24493]], 64134: [[24792]], 64135: [[24910]], 64136: [[24840]], 64137: [[24974]], 64138: [[24928]], 64139: [[25074]], 64140: [[25140]], 64141: [[25540]], 64142: [[25628]], 64143: [[25682]], 64144: [[25942]], 64145: [[26228]], 64146: [[26391]], 64147: [[26395]], 64148: [[26454]], 64149: [[27513]], 64150: [[27578]], 64151: [[27969]], 64152: [[28379]], 64153: [[28363]], 64154: [[28450]], 64155: [[28702]], 64156: [[29038]], 64157: [[30631]], 64158: [[29237]], 64159: [[29359]], 64160: [[29482]], 64161: [[29809]], 64162: [[29958]], 64163: [[30011]], 64164: [[30237]], 64165: [[30239]], 64166: [[30410]], 64167: [[30427]], 64168: [[30452]], 64169: [[30538]], 64170: [[30528]], 64171: [[30924]], 64172: [[31409]], 64173: [[31680]], 64174: [[31867]], 64175: [[32091]], 64176: [[32244]], 64177: [[32574]], 64178: [[32773]], 64179: [[33618]], 64180: [[33775]], 64181: [[34681]], 64182: [[35137]], 64183: [[35206]], 64184: [[35222]], 64185: [[35519]], 64186: [[35576]], 64187: [[35531]], 64188: [[35585]], 64189: [[35582]], 64190: [[35565]], 64191: [[35641]], 64192: [[35722]], 64193: [[36104]], 64194: [[36664]], 64195: [[36978]], 64196: [[37273]], 64197: [[37494]], 64198: [[38524]], 64199: [[38627]], 64200: [[38742]], 64201: [[38875]], 64202: [[38911]], 64203: [[38923]], 64204: [[38971]], 64205: [[39698]], 64206: [[40860]], 64207: [[141386]], 64208: [[141380]], 64209: [[144341]], 64210: [[15261]], 64211: [[16408]], 64212: [[16441]], 64213: [[152137]], 64214: [[154832]], 64215: [[163539]], 64216: [[40771]], 64217: [[40846]], 195072: [[38953]], 195073: [[169398]], 195074: [[39138]], 195075: [[19251]], 195076: [[39209]], 195077: [[39335]], 195078: [[39362]], 195079: [[39422]], 195080: [[19406]], 195081: [[170800]], 195082: [[39698]], 195083: [[4e4]], 195084: [[40189]], 195085: [[19662]], 195086: [[19693]], 195087: [[40295]], 195088: [[172238]], 195089: [[19704]], 195090: [[172293]], 195091: [[172558]], 195092: [[172689]], 195093: [[40635]], 195094: [[19798]], 195095: [[40697]], 195096: [[40702]], 195097: [[40709]], 195098: [[40719]], 195099: [[40726]], 195100: [[40763]], 195101: [[173568]] },
      64256: { 64256: [[102, 102], 256], 64257: [[102, 105], 256], 64258: [[102, 108], 256], 64259: [[102, 102, 105], 256], 64260: [[102, 102, 108], 256], 64261: [[383, 116], 256], 64262: [[115, 116], 256], 64275: [[1396, 1398], 256], 64276: [[1396, 1381], 256], 64277: [[1396, 1387], 256], 64278: [[1406, 1398], 256], 64279: [[1396, 1389], 256], 64285: [[1497, 1460], 512], 64286: [, 26], 64287: [[1522, 1463], 512], 64288: [[1506], 256], 64289: [[1488], 256], 64290: [[1491], 256], 64291: [[1492], 256], 64292: [[1499], 256], 64293: [[1500], 256], 64294: [[1501], 256], 64295: [[1512], 256], 64296: [[1514], 256], 64297: [[43], 256], 64298: [[1513, 1473], 512], 64299: [[1513, 1474], 512], 64300: [[64329, 1473], 512], 64301: [[64329, 1474], 512], 64302: [[1488, 1463], 512], 64303: [[1488, 1464], 512], 64304: [[1488, 1468], 512], 64305: [[1489, 1468], 512], 64306: [[1490, 1468], 512], 64307: [[1491, 1468], 512], 64308: [[1492, 1468], 512], 64309: [[1493, 1468], 512], 64310: [[1494, 1468], 512], 64312: [[1496, 1468], 512], 64313: [[1497, 1468], 512], 64314: [[1498, 1468], 512], 64315: [[1499, 1468], 512], 64316: [[1500, 1468], 512], 64318: [[1502, 1468], 512], 64320: [[1504, 1468], 512], 64321: [[1505, 1468], 512], 64323: [[1507, 1468], 512], 64324: [[1508, 1468], 512], 64326: [[1510, 1468], 512], 64327: [[1511, 1468], 512], 64328: [[1512, 1468], 512], 64329: [[1513, 1468], 512], 64330: [[1514, 1468], 512], 64331: [[1493, 1465], 512], 64332: [[1489, 1471], 512], 64333: [[1499, 1471], 512], 64334: [[1508, 1471], 512], 64335: [[1488, 1500], 256], 64336: [[1649], 256], 64337: [[1649], 256], 64338: [[1659], 256], 64339: [[1659], 256], 64340: [[1659], 256], 64341: [[1659], 256], 64342: [[1662], 256], 64343: [[1662], 256], 64344: [[1662], 256], 64345: [[1662], 256], 64346: [[1664], 256], 64347: [[1664], 256], 64348: [[1664], 256], 64349: [[1664], 256], 64350: [[1658], 256], 64351: [[1658], 256], 64352: [[1658], 256], 64353: [[1658], 256], 64354: [[1663], 256], 64355: [[1663], 256], 64356: [[1663], 256], 64357: [[1663], 256], 64358: [[1657], 256], 64359: [[1657], 256], 64360: [[1657], 256], 64361: [[1657], 256], 64362: [[1700], 256], 64363: [[1700], 256], 64364: [[1700], 256], 64365: [[1700], 256], 64366: [[1702], 256], 64367: [[1702], 256], 64368: [[1702], 256], 64369: [[1702], 256], 64370: [[1668], 256], 64371: [[1668], 256], 64372: [[1668], 256], 64373: [[1668], 256], 64374: [[1667], 256], 64375: [[1667], 256], 64376: [[1667], 256], 64377: [[1667], 256], 64378: [[1670], 256], 64379: [[1670], 256], 64380: [[1670], 256], 64381: [[1670], 256], 64382: [[1671], 256], 64383: [[1671], 256], 64384: [[1671], 256], 64385: [[1671], 256], 64386: [[1677], 256], 64387: [[1677], 256], 64388: [[1676], 256], 64389: [[1676], 256], 64390: [[1678], 256], 64391: [[1678], 256], 64392: [[1672], 256], 64393: [[1672], 256], 64394: [[1688], 256], 64395: [[1688], 256], 64396: [[1681], 256], 64397: [[1681], 256], 64398: [[1705], 256], 64399: [[1705], 256], 64400: [[1705], 256], 64401: [[1705], 256], 64402: [[1711], 256], 64403: [[1711], 256], 64404: [[1711], 256], 64405: [[1711], 256], 64406: [[1715], 256], 64407: [[1715], 256], 64408: [[1715], 256], 64409: [[1715], 256], 64410: [[1713], 256], 64411: [[1713], 256], 64412: [[1713], 256], 64413: [[1713], 256], 64414: [[1722], 256], 64415: [[1722], 256], 64416: [[1723], 256], 64417: [[1723], 256], 64418: [[1723], 256], 64419: [[1723], 256], 64420: [[1728], 256], 64421: [[1728], 256], 64422: [[1729], 256], 64423: [[1729], 256], 64424: [[1729], 256], 64425: [[1729], 256], 64426: [[1726], 256], 64427: [[1726], 256], 64428: [[1726], 256], 64429: [[1726], 256], 64430: [[1746], 256], 64431: [[1746], 256], 64432: [[1747], 256], 64433: [[1747], 256], 64467: [[1709], 256], 64468: [[1709], 256], 64469: [[1709], 256], 64470: [[1709], 256], 64471: [[1735], 256], 64472: [[1735], 256], 64473: [[1734], 256], 64474: [[1734], 256], 64475: [[1736], 256], 64476: [[1736], 256], 64477: [[1655], 256], 64478: [[1739], 256], 64479: [[1739], 256], 64480: [[1733], 256], 64481: [[1733], 256], 64482: [[1737], 256], 64483: [[1737], 256], 64484: [[1744], 256], 64485: [[1744], 256], 64486: [[1744], 256], 64487: [[1744], 256], 64488: [[1609], 256], 64489: [[1609], 256], 64490: [[1574, 1575], 256], 64491: [[1574, 1575], 256], 64492: [[1574, 1749], 256], 64493: [[1574, 1749], 256], 64494: [[1574, 1608], 256], 64495: [[1574, 1608], 256], 64496: [[1574, 1735], 256], 64497: [[1574, 1735], 256], 64498: [[1574, 1734], 256], 64499: [[1574, 1734], 256], 64500: [[1574, 1736], 256], 64501: [[1574, 1736], 256], 64502: [[1574, 1744], 256], 64503: [[1574, 1744], 256], 64504: [[1574, 1744], 256], 64505: [[1574, 1609], 256], 64506: [[1574, 1609], 256], 64507: [[1574, 1609], 256], 64508: [[1740], 256], 64509: [[1740], 256], 64510: [[1740], 256], 64511: [[1740], 256] },
      64512: { 64512: [[1574, 1580], 256], 64513: [[1574, 1581], 256], 64514: [[1574, 1605], 256], 64515: [[1574, 1609], 256], 64516: [[1574, 1610], 256], 64517: [[1576, 1580], 256], 64518: [[1576, 1581], 256], 64519: [[1576, 1582], 256], 64520: [[1576, 1605], 256], 64521: [[1576, 1609], 256], 64522: [[1576, 1610], 256], 64523: [[1578, 1580], 256], 64524: [[1578, 1581], 256], 64525: [[1578, 1582], 256], 64526: [[1578, 1605], 256], 64527: [[1578, 1609], 256], 64528: [[1578, 1610], 256], 64529: [[1579, 1580], 256], 64530: [[1579, 1605], 256], 64531: [[1579, 1609], 256], 64532: [[1579, 1610], 256], 64533: [[1580, 1581], 256], 64534: [[1580, 1605], 256], 64535: [[1581, 1580], 256], 64536: [[1581, 1605], 256], 64537: [[1582, 1580], 256], 64538: [[1582, 1581], 256], 64539: [[1582, 1605], 256], 64540: [[1587, 1580], 256], 64541: [[1587, 1581], 256], 64542: [[1587, 1582], 256], 64543: [[1587, 1605], 256], 64544: [[1589, 1581], 256], 64545: [[1589, 1605], 256], 64546: [[1590, 1580], 256], 64547: [[1590, 1581], 256], 64548: [[1590, 1582], 256], 64549: [[1590, 1605], 256], 64550: [[1591, 1581], 256], 64551: [[1591, 1605], 256], 64552: [[1592, 1605], 256], 64553: [[1593, 1580], 256], 64554: [[1593, 1605], 256], 64555: [[1594, 1580], 256], 64556: [[1594, 1605], 256], 64557: [[1601, 1580], 256], 64558: [[1601, 1581], 256], 64559: [[1601, 1582], 256], 64560: [[1601, 1605], 256], 64561: [[1601, 1609], 256], 64562: [[1601, 1610], 256], 64563: [[1602, 1581], 256], 64564: [[1602, 1605], 256], 64565: [[1602, 1609], 256], 64566: [[1602, 1610], 256], 64567: [[1603, 1575], 256], 64568: [[1603, 1580], 256], 64569: [[1603, 1581], 256], 64570: [[1603, 1582], 256], 64571: [[1603, 1604], 256], 64572: [[1603, 1605], 256], 64573: [[1603, 1609], 256], 64574: [[1603, 1610], 256], 64575: [[1604, 1580], 256], 64576: [[1604, 1581], 256], 64577: [[1604, 1582], 256], 64578: [[1604, 1605], 256], 64579: [[1604, 1609], 256], 64580: [[1604, 1610], 256], 64581: [[1605, 1580], 256], 64582: [[1605, 1581], 256], 64583: [[1605, 1582], 256], 64584: [[1605, 1605], 256], 64585: [[1605, 1609], 256], 64586: [[1605, 1610], 256], 64587: [[1606, 1580], 256], 64588: [[1606, 1581], 256], 64589: [[1606, 1582], 256], 64590: [[1606, 1605], 256], 64591: [[1606, 1609], 256], 64592: [[1606, 1610], 256], 64593: [[1607, 1580], 256], 64594: [[1607, 1605], 256], 64595: [[1607, 1609], 256], 64596: [[1607, 1610], 256], 64597: [[1610, 1580], 256], 64598: [[1610, 1581], 256], 64599: [[1610, 1582], 256], 64600: [[1610, 1605], 256], 64601: [[1610, 1609], 256], 64602: [[1610, 1610], 256], 64603: [[1584, 1648], 256], 64604: [[1585, 1648], 256], 64605: [[1609, 1648], 256], 64606: [[32, 1612, 1617], 256], 64607: [[32, 1613, 1617], 256], 64608: [[32, 1614, 1617], 256], 64609: [[32, 1615, 1617], 256], 64610: [[32, 1616, 1617], 256], 64611: [[32, 1617, 1648], 256], 64612: [[1574, 1585], 256], 64613: [[1574, 1586], 256], 64614: [[1574, 1605], 256], 64615: [[1574, 1606], 256], 64616: [[1574, 1609], 256], 64617: [[1574, 1610], 256], 64618: [[1576, 1585], 256], 64619: [[1576, 1586], 256], 64620: [[1576, 1605], 256], 64621: [[1576, 1606], 256], 64622: [[1576, 1609], 256], 64623: [[1576, 1610], 256], 64624: [[1578, 1585], 256], 64625: [[1578, 1586], 256], 64626: [[1578, 1605], 256], 64627: [[1578, 1606], 256], 64628: [[1578, 1609], 256], 64629: [[1578, 1610], 256], 64630: [[1579, 1585], 256], 64631: [[1579, 1586], 256], 64632: [[1579, 1605], 256], 64633: [[1579, 1606], 256], 64634: [[1579, 1609], 256], 64635: [[1579, 1610], 256], 64636: [[1601, 1609], 256], 64637: [[1601, 1610], 256], 64638: [[1602, 1609], 256], 64639: [[1602, 1610], 256], 64640: [[1603, 1575], 256], 64641: [[1603, 1604], 256], 64642: [[1603, 1605], 256], 64643: [[1603, 1609], 256], 64644: [[1603, 1610], 256], 64645: [[1604, 1605], 256], 64646: [[1604, 1609], 256], 64647: [[1604, 1610], 256], 64648: [[1605, 1575], 256], 64649: [[1605, 1605], 256], 64650: [[1606, 1585], 256], 64651: [[1606, 1586], 256], 64652: [[1606, 1605], 256], 64653: [[1606, 1606], 256], 64654: [[1606, 1609], 256], 64655: [[1606, 1610], 256], 64656: [[1609, 1648], 256], 64657: [[1610, 1585], 256], 64658: [[1610, 1586], 256], 64659: [[1610, 1605], 256], 64660: [[1610, 1606], 256], 64661: [[1610, 1609], 256], 64662: [[1610, 1610], 256], 64663: [[1574, 1580], 256], 64664: [[1574, 1581], 256], 64665: [[1574, 1582], 256], 64666: [[1574, 1605], 256], 64667: [[1574, 1607], 256], 64668: [[1576, 1580], 256], 64669: [[1576, 1581], 256], 64670: [[1576, 1582], 256], 64671: [[1576, 1605], 256], 64672: [[1576, 1607], 256], 64673: [[1578, 1580], 256], 64674: [[1578, 1581], 256], 64675: [[1578, 1582], 256], 64676: [[1578, 1605], 256], 64677: [[1578, 1607], 256], 64678: [[1579, 1605], 256], 64679: [[1580, 1581], 256], 64680: [[1580, 1605], 256], 64681: [[1581, 1580], 256], 64682: [[1581, 1605], 256], 64683: [[1582, 1580], 256], 64684: [[1582, 1605], 256], 64685: [[1587, 1580], 256], 64686: [[1587, 1581], 256], 64687: [[1587, 1582], 256], 64688: [[1587, 1605], 256], 64689: [[1589, 1581], 256], 64690: [[1589, 1582], 256], 64691: [[1589, 1605], 256], 64692: [[1590, 1580], 256], 64693: [[1590, 1581], 256], 64694: [[1590, 1582], 256], 64695: [[1590, 1605], 256], 64696: [[1591, 1581], 256], 64697: [[1592, 1605], 256], 64698: [[1593, 1580], 256], 64699: [[1593, 1605], 256], 64700: [[1594, 1580], 256], 64701: [[1594, 1605], 256], 64702: [[1601, 1580], 256], 64703: [[1601, 1581], 256], 64704: [[1601, 1582], 256], 64705: [[1601, 1605], 256], 64706: [[1602, 1581], 256], 64707: [[1602, 1605], 256], 64708: [[1603, 1580], 256], 64709: [[1603, 1581], 256], 64710: [[1603, 1582], 256], 64711: [[1603, 1604], 256], 64712: [[1603, 1605], 256], 64713: [[1604, 1580], 256], 64714: [[1604, 1581], 256], 64715: [[1604, 1582], 256], 64716: [[1604, 1605], 256], 64717: [[1604, 1607], 256], 64718: [[1605, 1580], 256], 64719: [[1605, 1581], 256], 64720: [[1605, 1582], 256], 64721: [[1605, 1605], 256], 64722: [[1606, 1580], 256], 64723: [[1606, 1581], 256], 64724: [[1606, 1582], 256], 64725: [[1606, 1605], 256], 64726: [[1606, 1607], 256], 64727: [[1607, 1580], 256], 64728: [[1607, 1605], 256], 64729: [[1607, 1648], 256], 64730: [[1610, 1580], 256], 64731: [[1610, 1581], 256], 64732: [[1610, 1582], 256], 64733: [[1610, 1605], 256], 64734: [[1610, 1607], 256], 64735: [[1574, 1605], 256], 64736: [[1574, 1607], 256], 64737: [[1576, 1605], 256], 64738: [[1576, 1607], 256], 64739: [[1578, 1605], 256], 64740: [[1578, 1607], 256], 64741: [[1579, 1605], 256], 64742: [[1579, 1607], 256], 64743: [[1587, 1605], 256], 64744: [[1587, 1607], 256], 64745: [[1588, 1605], 256], 64746: [[1588, 1607], 256], 64747: [[1603, 1604], 256], 64748: [[1603, 1605], 256], 64749: [[1604, 1605], 256], 64750: [[1606, 1605], 256], 64751: [[1606, 1607], 256], 64752: [[1610, 1605], 256], 64753: [[1610, 1607], 256], 64754: [[1600, 1614, 1617], 256], 64755: [[1600, 1615, 1617], 256], 64756: [[1600, 1616, 1617], 256], 64757: [[1591, 1609], 256], 64758: [[1591, 1610], 256], 64759: [[1593, 1609], 256], 64760: [[1593, 1610], 256], 64761: [[1594, 1609], 256], 64762: [[1594, 1610], 256], 64763: [[1587, 1609], 256], 64764: [[1587, 1610], 256], 64765: [[1588, 1609], 256], 64766: [[1588, 1610], 256], 64767: [[1581, 1609], 256] },
      64768: { 64768: [[1581, 1610], 256], 64769: [[1580, 1609], 256], 64770: [[1580, 1610], 256], 64771: [[1582, 1609], 256], 64772: [[1582, 1610], 256], 64773: [[1589, 1609], 256], 64774: [[1589, 1610], 256], 64775: [[1590, 1609], 256], 64776: [[1590, 1610], 256], 64777: [[1588, 1580], 256], 64778: [[1588, 1581], 256], 64779: [[1588, 1582], 256], 64780: [[1588, 1605], 256], 64781: [[1588, 1585], 256], 64782: [[1587, 1585], 256], 64783: [[1589, 1585], 256], 64784: [[1590, 1585], 256], 64785: [[1591, 1609], 256], 64786: [[1591, 1610], 256], 64787: [[1593, 1609], 256], 64788: [[1593, 1610], 256], 64789: [[1594, 1609], 256], 64790: [[1594, 1610], 256], 64791: [[1587, 1609], 256], 64792: [[1587, 1610], 256], 64793: [[1588, 1609], 256], 64794: [[1588, 1610], 256], 64795: [[1581, 1609], 256], 64796: [[1581, 1610], 256], 64797: [[1580, 1609], 256], 64798: [[1580, 1610], 256], 64799: [[1582, 1609], 256], 64800: [[1582, 1610], 256], 64801: [[1589, 1609], 256], 64802: [[1589, 1610], 256], 64803: [[1590, 1609], 256], 64804: [[1590, 1610], 256], 64805: [[1588, 1580], 256], 64806: [[1588, 1581], 256], 64807: [[1588, 1582], 256], 64808: [[1588, 1605], 256], 64809: [[1588, 1585], 256], 64810: [[1587, 1585], 256], 64811: [[1589, 1585], 256], 64812: [[1590, 1585], 256], 64813: [[1588, 1580], 256], 64814: [[1588, 1581], 256], 64815: [[1588, 1582], 256], 64816: [[1588, 1605], 256], 64817: [[1587, 1607], 256], 64818: [[1588, 1607], 256], 64819: [[1591, 1605], 256], 64820: [[1587, 1580], 256], 64821: [[1587, 1581], 256], 64822: [[1587, 1582], 256], 64823: [[1588, 1580], 256], 64824: [[1588, 1581], 256], 64825: [[1588, 1582], 256], 64826: [[1591, 1605], 256], 64827: [[1592, 1605], 256], 64828: [[1575, 1611], 256], 64829: [[1575, 1611], 256], 64848: [[1578, 1580, 1605], 256], 64849: [[1578, 1581, 1580], 256], 64850: [[1578, 1581, 1580], 256], 64851: [[1578, 1581, 1605], 256], 64852: [[1578, 1582, 1605], 256], 64853: [[1578, 1605, 1580], 256], 64854: [[1578, 1605, 1581], 256], 64855: [[1578, 1605, 1582], 256], 64856: [[1580, 1605, 1581], 256], 64857: [[1580, 1605, 1581], 256], 64858: [[1581, 1605, 1610], 256], 64859: [[1581, 1605, 1609], 256], 64860: [[1587, 1581, 1580], 256], 64861: [[1587, 1580, 1581], 256], 64862: [[1587, 1580, 1609], 256], 64863: [[1587, 1605, 1581], 256], 64864: [[1587, 1605, 1581], 256], 64865: [[1587, 1605, 1580], 256], 64866: [[1587, 1605, 1605], 256], 64867: [[1587, 1605, 1605], 256], 64868: [[1589, 1581, 1581], 256], 64869: [[1589, 1581, 1581], 256], 64870: [[1589, 1605, 1605], 256], 64871: [[1588, 1581, 1605], 256], 64872: [[1588, 1581, 1605], 256], 64873: [[1588, 1580, 1610], 256], 64874: [[1588, 1605, 1582], 256], 64875: [[1588, 1605, 1582], 256], 64876: [[1588, 1605, 1605], 256], 64877: [[1588, 1605, 1605], 256], 64878: [[1590, 1581, 1609], 256], 64879: [[1590, 1582, 1605], 256], 64880: [[1590, 1582, 1605], 256], 64881: [[1591, 1605, 1581], 256], 64882: [[1591, 1605, 1581], 256], 64883: [[1591, 1605, 1605], 256], 64884: [[1591, 1605, 1610], 256], 64885: [[1593, 1580, 1605], 256], 64886: [[1593, 1605, 1605], 256], 64887: [[1593, 1605, 1605], 256], 64888: [[1593, 1605, 1609], 256], 64889: [[1594, 1605, 1605], 256], 64890: [[1594, 1605, 1610], 256], 64891: [[1594, 1605, 1609], 256], 64892: [[1601, 1582, 1605], 256], 64893: [[1601, 1582, 1605], 256], 64894: [[1602, 1605, 1581], 256], 64895: [[1602, 1605, 1605], 256], 64896: [[1604, 1581, 1605], 256], 64897: [[1604, 1581, 1610], 256], 64898: [[1604, 1581, 1609], 256], 64899: [[1604, 1580, 1580], 256], 64900: [[1604, 1580, 1580], 256], 64901: [[1604, 1582, 1605], 256], 64902: [[1604, 1582, 1605], 256], 64903: [[1604, 1605, 1581], 256], 64904: [[1604, 1605, 1581], 256], 64905: [[1605, 1581, 1580], 256], 64906: [[1605, 1581, 1605], 256], 64907: [[1605, 1581, 1610], 256], 64908: [[1605, 1580, 1581], 256], 64909: [[1605, 1580, 1605], 256], 64910: [[1605, 1582, 1580], 256], 64911: [[1605, 1582, 1605], 256], 64914: [[1605, 1580, 1582], 256], 64915: [[1607, 1605, 1580], 256], 64916: [[1607, 1605, 1605], 256], 64917: [[1606, 1581, 1605], 256], 64918: [[1606, 1581, 1609], 256], 64919: [[1606, 1580, 1605], 256], 64920: [[1606, 1580, 1605], 256], 64921: [[1606, 1580, 1609], 256], 64922: [[1606, 1605, 1610], 256], 64923: [[1606, 1605, 1609], 256], 64924: [[1610, 1605, 1605], 256], 64925: [[1610, 1605, 1605], 256], 64926: [[1576, 1582, 1610], 256], 64927: [[1578, 1580, 1610], 256], 64928: [[1578, 1580, 1609], 256], 64929: [[1578, 1582, 1610], 256], 64930: [[1578, 1582, 1609], 256], 64931: [[1578, 1605, 1610], 256], 64932: [[1578, 1605, 1609], 256], 64933: [[1580, 1605, 1610], 256], 64934: [[1580, 1581, 1609], 256], 64935: [[1580, 1605, 1609], 256], 64936: [[1587, 1582, 1609], 256], 64937: [[1589, 1581, 1610], 256], 64938: [[1588, 1581, 1610], 256], 64939: [[1590, 1581, 1610], 256], 64940: [[1604, 1580, 1610], 256], 64941: [[1604, 1605, 1610], 256], 64942: [[1610, 1581, 1610], 256], 64943: [[1610, 1580, 1610], 256], 64944: [[1610, 1605, 1610], 256], 64945: [[1605, 1605, 1610], 256], 64946: [[1602, 1605, 1610], 256], 64947: [[1606, 1581, 1610], 256], 64948: [[1602, 1605, 1581], 256], 64949: [[1604, 1581, 1605], 256], 64950: [[1593, 1605, 1610], 256], 64951: [[1603, 1605, 1610], 256], 64952: [[1606, 1580, 1581], 256], 64953: [[1605, 1582, 1610], 256], 64954: [[1604, 1580, 1605], 256], 64955: [[1603, 1605, 1605], 256], 64956: [[1604, 1580, 1605], 256], 64957: [[1606, 1580, 1581], 256], 64958: [[1580, 1581, 1610], 256], 64959: [[1581, 1580, 1610], 256], 64960: [[1605, 1580, 1610], 256], 64961: [[1601, 1605, 1610], 256], 64962: [[1576, 1581, 1610], 256], 64963: [[1603, 1605, 1605], 256], 64964: [[1593, 1580, 1605], 256], 64965: [[1589, 1605, 1605], 256], 64966: [[1587, 1582, 1610], 256], 64967: [[1606, 1580, 1610], 256], 65008: [[1589, 1604, 1746], 256], 65009: [[1602, 1604, 1746], 256], 65010: [[1575, 1604, 1604, 1607], 256], 65011: [[1575, 1603, 1576, 1585], 256], 65012: [[1605, 1581, 1605, 1583], 256], 65013: [[1589, 1604, 1593, 1605], 256], 65014: [[1585, 1587, 1608, 1604], 256], 65015: [[1593, 1604, 1610, 1607], 256], 65016: [[1608, 1587, 1604, 1605], 256], 65017: [[1589, 1604, 1609], 256], 65018: [[1589, 1604, 1609, 32, 1575, 1604, 1604, 1607, 32, 1593, 1604, 1610, 1607, 32, 1608, 1587, 1604, 1605], 256], 65019: [[1580, 1604, 32, 1580, 1604, 1575, 1604, 1607], 256], 65020: [[1585, 1740, 1575, 1604], 256] },
      65024: { 65040: [[44], 256], 65041: [[12289], 256], 65042: [[12290], 256], 65043: [[58], 256], 65044: [[59], 256], 65045: [[33], 256], 65046: [[63], 256], 65047: [[12310], 256], 65048: [[12311], 256], 65049: [[8230], 256], 65056: [, 230], 65057: [, 230], 65058: [, 230], 65059: [, 230], 65060: [, 230], 65061: [, 230], 65062: [, 230], 65063: [, 220], 65064: [, 220], 65065: [, 220], 65066: [, 220], 65067: [, 220], 65068: [, 220], 65069: [, 220], 65072: [[8229], 256], 65073: [[8212], 256], 65074: [[8211], 256], 65075: [[95], 256], 65076: [[95], 256], 65077: [[40], 256], 65078: [[41], 256], 65079: [[123], 256], 65080: [[125], 256], 65081: [[12308], 256], 65082: [[12309], 256], 65083: [[12304], 256], 65084: [[12305], 256], 65085: [[12298], 256], 65086: [[12299], 256], 65087: [[12296], 256], 65088: [[12297], 256], 65089: [[12300], 256], 65090: [[12301], 256], 65091: [[12302], 256], 65092: [[12303], 256], 65095: [[91], 256], 65096: [[93], 256], 65097: [[8254], 256], 65098: [[8254], 256], 65099: [[8254], 256], 65100: [[8254], 256], 65101: [[95], 256], 65102: [[95], 256], 65103: [[95], 256], 65104: [[44], 256], 65105: [[12289], 256], 65106: [[46], 256], 65108: [[59], 256], 65109: [[58], 256], 65110: [[63], 256], 65111: [[33], 256], 65112: [[8212], 256], 65113: [[40], 256], 65114: [[41], 256], 65115: [[123], 256], 65116: [[125], 256], 65117: [[12308], 256], 65118: [[12309], 256], 65119: [[35], 256], 65120: [[38], 256], 65121: [[42], 256], 65122: [[43], 256], 65123: [[45], 256], 65124: [[60], 256], 65125: [[62], 256], 65126: [[61], 256], 65128: [[92], 256], 65129: [[36], 256], 65130: [[37], 256], 65131: [[64], 256], 65136: [[32, 1611], 256], 65137: [[1600, 1611], 256], 65138: [[32, 1612], 256], 65140: [[32, 1613], 256], 65142: [[32, 1614], 256], 65143: [[1600, 1614], 256], 65144: [[32, 1615], 256], 65145: [[1600, 1615], 256], 65146: [[32, 1616], 256], 65147: [[1600, 1616], 256], 65148: [[32, 1617], 256], 65149: [[1600, 1617], 256], 65150: [[32, 1618], 256], 65151: [[1600, 1618], 256], 65152: [[1569], 256], 65153: [[1570], 256], 65154: [[1570], 256], 65155: [[1571], 256], 65156: [[1571], 256], 65157: [[1572], 256], 65158: [[1572], 256], 65159: [[1573], 256], 65160: [[1573], 256], 65161: [[1574], 256], 65162: [[1574], 256], 65163: [[1574], 256], 65164: [[1574], 256], 65165: [[1575], 256], 65166: [[1575], 256], 65167: [[1576], 256], 65168: [[1576], 256], 65169: [[1576], 256], 65170: [[1576], 256], 65171: [[1577], 256], 65172: [[1577], 256], 65173: [[1578], 256], 65174: [[1578], 256], 65175: [[1578], 256], 65176: [[1578], 256], 65177: [[1579], 256], 65178: [[1579], 256], 65179: [[1579], 256], 65180: [[1579], 256], 65181: [[1580], 256], 65182: [[1580], 256], 65183: [[1580], 256], 65184: [[1580], 256], 65185: [[1581], 256], 65186: [[1581], 256], 65187: [[1581], 256], 65188: [[1581], 256], 65189: [[1582], 256], 65190: [[1582], 256], 65191: [[1582], 256], 65192: [[1582], 256], 65193: [[1583], 256], 65194: [[1583], 256], 65195: [[1584], 256], 65196: [[1584], 256], 65197: [[1585], 256], 65198: [[1585], 256], 65199: [[1586], 256], 65200: [[1586], 256], 65201: [[1587], 256], 65202: [[1587], 256], 65203: [[1587], 256], 65204: [[1587], 256], 65205: [[1588], 256], 65206: [[1588], 256], 65207: [[1588], 256], 65208: [[1588], 256], 65209: [[1589], 256], 65210: [[1589], 256], 65211: [[1589], 256], 65212: [[1589], 256], 65213: [[1590], 256], 65214: [[1590], 256], 65215: [[1590], 256], 65216: [[1590], 256], 65217: [[1591], 256], 65218: [[1591], 256], 65219: [[1591], 256], 65220: [[1591], 256], 65221: [[1592], 256], 65222: [[1592], 256], 65223: [[1592], 256], 65224: [[1592], 256], 65225: [[1593], 256], 65226: [[1593], 256], 65227: [[1593], 256], 65228: [[1593], 256], 65229: [[1594], 256], 65230: [[1594], 256], 65231: [[1594], 256], 65232: [[1594], 256], 65233: [[1601], 256], 65234: [[1601], 256], 65235: [[1601], 256], 65236: [[1601], 256], 65237: [[1602], 256], 65238: [[1602], 256], 65239: [[1602], 256], 65240: [[1602], 256], 65241: [[1603], 256], 65242: [[1603], 256], 65243: [[1603], 256], 65244: [[1603], 256], 65245: [[1604], 256], 65246: [[1604], 256], 65247: [[1604], 256], 65248: [[1604], 256], 65249: [[1605], 256], 65250: [[1605], 256], 65251: [[1605], 256], 65252: [[1605], 256], 65253: [[1606], 256], 65254: [[1606], 256], 65255: [[1606], 256], 65256: [[1606], 256], 65257: [[1607], 256], 65258: [[1607], 256], 65259: [[1607], 256], 65260: [[1607], 256], 65261: [[1608], 256], 65262: [[1608], 256], 65263: [[1609], 256], 65264: [[1609], 256], 65265: [[1610], 256], 65266: [[1610], 256], 65267: [[1610], 256], 65268: [[1610], 256], 65269: [[1604, 1570], 256], 65270: [[1604, 1570], 256], 65271: [[1604, 1571], 256], 65272: [[1604, 1571], 256], 65273: [[1604, 1573], 256], 65274: [[1604, 1573], 256], 65275: [[1604, 1575], 256], 65276: [[1604, 1575], 256] },
      65280: { 65281: [[33], 256], 65282: [[34], 256], 65283: [[35], 256], 65284: [[36], 256], 65285: [[37], 256], 65286: [[38], 256], 65287: [[39], 256], 65288: [[40], 256], 65289: [[41], 256], 65290: [[42], 256], 65291: [[43], 256], 65292: [[44], 256], 65293: [[45], 256], 65294: [[46], 256], 65295: [[47], 256], 65296: [[48], 256], 65297: [[49], 256], 65298: [[50], 256], 65299: [[51], 256], 65300: [[52], 256], 65301: [[53], 256], 65302: [[54], 256], 65303: [[55], 256], 65304: [[56], 256], 65305: [[57], 256], 65306: [[58], 256], 65307: [[59], 256], 65308: [[60], 256], 65309: [[61], 256], 65310: [[62], 256], 65311: [[63], 256], 65312: [[64], 256], 65313: [[65], 256], 65314: [[66], 256], 65315: [[67], 256], 65316: [[68], 256], 65317: [[69], 256], 65318: [[70], 256], 65319: [[71], 256], 65320: [[72], 256], 65321: [[73], 256], 65322: [[74], 256], 65323: [[75], 256], 65324: [[76], 256], 65325: [[77], 256], 65326: [[78], 256], 65327: [[79], 256], 65328: [[80], 256], 65329: [[81], 256], 65330: [[82], 256], 65331: [[83], 256], 65332: [[84], 256], 65333: [[85], 256], 65334: [[86], 256], 65335: [[87], 256], 65336: [[88], 256], 65337: [[89], 256], 65338: [[90], 256], 65339: [[91], 256], 65340: [[92], 256], 65341: [[93], 256], 65342: [[94], 256], 65343: [[95], 256], 65344: [[96], 256], 65345: [[97], 256], 65346: [[98], 256], 65347: [[99], 256], 65348: [[100], 256], 65349: [[101], 256], 65350: [[102], 256], 65351: [[103], 256], 65352: [[104], 256], 65353: [[105], 256], 65354: [[106], 256], 65355: [[107], 256], 65356: [[108], 256], 65357: [[109], 256], 65358: [[110], 256], 65359: [[111], 256], 65360: [[112], 256], 65361: [[113], 256], 65362: [[114], 256], 65363: [[115], 256], 65364: [[116], 256], 65365: [[117], 256], 65366: [[118], 256], 65367: [[119], 256], 65368: [[120], 256], 65369: [[121], 256], 65370: [[122], 256], 65371: [[123], 256], 65372: [[124], 256], 65373: [[125], 256], 65374: [[126], 256], 65375: [[10629], 256], 65376: [[10630], 256], 65377: [[12290], 256], 65378: [[12300], 256], 65379: [[12301], 256], 65380: [[12289], 256], 65381: [[12539], 256], 65382: [[12530], 256], 65383: [[12449], 256], 65384: [[12451], 256], 65385: [[12453], 256], 65386: [[12455], 256], 65387: [[12457], 256], 65388: [[12515], 256], 65389: [[12517], 256], 65390: [[12519], 256], 65391: [[12483], 256], 65392: [[12540], 256], 65393: [[12450], 256], 65394: [[12452], 256], 65395: [[12454], 256], 65396: [[12456], 256], 65397: [[12458], 256], 65398: [[12459], 256], 65399: [[12461], 256], 65400: [[12463], 256], 65401: [[12465], 256], 65402: [[12467], 256], 65403: [[12469], 256], 65404: [[12471], 256], 65405: [[12473], 256], 65406: [[12475], 256], 65407: [[12477], 256], 65408: [[12479], 256], 65409: [[12481], 256], 65410: [[12484], 256], 65411: [[12486], 256], 65412: [[12488], 256], 65413: [[12490], 256], 65414: [[12491], 256], 65415: [[12492], 256], 65416: [[12493], 256], 65417: [[12494], 256], 65418: [[12495], 256], 65419: [[12498], 256], 65420: [[12501], 256], 65421: [[12504], 256], 65422: [[12507], 256], 65423: [[12510], 256], 65424: [[12511], 256], 65425: [[12512], 256], 65426: [[12513], 256], 65427: [[12514], 256], 65428: [[12516], 256], 65429: [[12518], 256], 65430: [[12520], 256], 65431: [[12521], 256], 65432: [[12522], 256], 65433: [[12523], 256], 65434: [[12524], 256], 65435: [[12525], 256], 65436: [[12527], 256], 65437: [[12531], 256], 65438: [[12441], 256], 65439: [[12442], 256], 65440: [[12644], 256], 65441: [[12593], 256], 65442: [[12594], 256], 65443: [[12595], 256], 65444: [[12596], 256], 65445: [[12597], 256], 65446: [[12598], 256], 65447: [[12599], 256], 65448: [[12600], 256], 65449: [[12601], 256], 65450: [[12602], 256], 65451: [[12603], 256], 65452: [[12604], 256], 65453: [[12605], 256], 65454: [[12606], 256], 65455: [[12607], 256], 65456: [[12608], 256], 65457: [[12609], 256], 65458: [[12610], 256], 65459: [[12611], 256], 65460: [[12612], 256], 65461: [[12613], 256], 65462: [[12614], 256], 65463: [[12615], 256], 65464: [[12616], 256], 65465: [[12617], 256], 65466: [[12618], 256], 65467: [[12619], 256], 65468: [[12620], 256], 65469: [[12621], 256], 65470: [[12622], 256], 65474: [[12623], 256], 65475: [[12624], 256], 65476: [[12625], 256], 65477: [[12626], 256], 65478: [[12627], 256], 65479: [[12628], 256], 65482: [[12629], 256], 65483: [[12630], 256], 65484: [[12631], 256], 65485: [[12632], 256], 65486: [[12633], 256], 65487: [[12634], 256], 65490: [[12635], 256], 65491: [[12636], 256], 65492: [[12637], 256], 65493: [[12638], 256], 65494: [[12639], 256], 65495: [[12640], 256], 65498: [[12641], 256], 65499: [[12642], 256], 65500: [[12643], 256], 65504: [[162], 256], 65505: [[163], 256], 65506: [[172], 256], 65507: [[175], 256], 65508: [[166], 256], 65509: [[165], 256], 65510: [[8361], 256], 65512: [[9474], 256], 65513: [[8592], 256], 65514: [[8593], 256], 65515: [[8594], 256], 65516: [[8595], 256], 65517: [[9632], 256], 65518: [[9675], 256] }
    };
    var unorm2 = {
      nfc,
      nfd,
      nfkc,
      nfkd
    };
    {
      module.exports = unorm2;
    }
    unorm2.shimApplied = false;
    if (!String.prototype.normalize) {
      Object.defineProperty(String.prototype, "normalize", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function normalize2() {
          var str = "" + this;
          var form = arguments[0] === void 0 ? "NFC" : arguments[0];
          if (this === null || this === void 0) {
            throw new TypeError("Cannot call method on " + Object.prototype.toString.call(this));
          }
          if (form === "NFC") {
            return unorm2.nfc(str);
          } else if (form === "NFD") {
            return unorm2.nfd(str);
          } else if (form === "NFKC") {
            return unorm2.nfkc(str);
          } else if (form === "NFKD") {
            return unorm2.nfkd(str);
          } else {
            throw new RangeError("Invalid normalization form: " + form);
          }
        }
      });
      unorm2.shimApplied = true;
    }
  })();
})(unorm$1);
var unorm = unorm$1.exports;
function n$1(n2, t2) {
  for (var r2 in t2)
    n2[r2] = t2[r2];
  return n2;
}
function createStore(t2) {
  var r2 = [];
  function u2(n2) {
    for (var t3 = [], u3 = 0; u3 < r2.length; u3++)
      r2[u3] === n2 ? n2 = null : t3.push(r2[u3]);
    r2 = t3;
  }
  function e(u3, e2, f) {
    t2 = e2 ? u3 : n$1(n$1({}, t2), u3);
    for (var i = r2, o3 = 0; o3 < i.length; o3++)
      i[o3](t2, f);
  }
  return t2 = t2 || {}, { action: function(n2) {
    function r3(t3) {
      e(t3, false, n2);
    }
    return function() {
      for (var u3 = arguments, e2 = [t2], f = 0; f < arguments.length; f++)
        e2.push(u3[f]);
      var i = n2.apply(this, e2);
      if (i != null)
        return i.then ? i.then(r3) : r3(i);
    };
  }, setState: e, subscribe: function(n2) {
    return r2.push(n2), function() {
      u2(n2);
    };
  }, unsubscribe: u2, getState: function() {
    return t2;
  } };
}
var Provider;
var connect;
var t = react.exports;
function n(t2, n2) {
  for (var r2 in n2)
    t2[r2] = n2[r2];
  return t2;
}
var r = { store: function() {
} }, o$1 = function(n2) {
  function r2() {
    n2.apply(this, arguments);
  }
  return n2 && (r2.__proto__ = n2), (r2.prototype = Object.create(n2 && n2.prototype)).constructor = r2, r2.prototype.getChildContext = function() {
    return { store: this.props.store };
  }, r2.prototype.render = function() {
    return t.Children.only(this.props.children);
  }, r2;
}(t.Component);
o$1.childContextTypes = r, connect = function(o3, e) {
  var i;
  return typeof o3 != "function" && (typeof (i = o3 || []) == "string" && (i = i.split(/\s*,\s*/)), o3 = function(t2) {
    for (var n2 = {}, r2 = 0; r2 < i.length; r2++)
      n2[i[r2]] = t2[i[r2]];
    return n2;
  }), function(i2) {
    function c(r2, c2) {
      var p2 = this;
      t.Component.call(this, r2, c2);
      var u2 = c2.store, s = o3(u2 ? u2.getState() : {}, r2), f = e ? function(t2, n2) {
        typeof t2 == "function" && (t2 = t2(n2));
        var r3 = {};
        for (var o4 in t2)
          r3[o4] = n2.action(t2[o4]);
        return r3;
      }(e, u2) : { store: u2 }, a = function() {
        var t2 = o3(u2 ? u2.getState() : {}, r2);
        for (var n2 in t2)
          if (t2[n2] !== s[n2])
            return s = t2, p2.forceUpdate();
        for (var e2 in s)
          if (!(e2 in t2))
            return s = t2, p2.forceUpdate();
      };
      this.UNSAFE_componentWillReceiveProps = function(t2) {
        r2 = t2, a();
      }, this.componentDidMount = function() {
        u2.subscribe(a);
      }, this.componentWillUnmount = function() {
        u2.unsubscribe(a);
      }, this.render = function() {
        return t.createElement(i2, n(n(n({}, f), p2.props), s));
      };
    }
    return c.contextTypes = r, (c.prototype = Object.create(t.Component.prototype)).constructor = c;
  };
}, Provider = o$1;
var tinyEmitter = { exports: {} };
function E() {
}
E.prototype = {
  on: function(name, callback, ctx) {
    var e = this.e || (this.e = {});
    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx
    });
    return this;
  },
  once: function(name, callback, ctx) {
    var self2 = this;
    function listener() {
      self2.off(name, listener);
      callback.apply(ctx, arguments);
    }
    listener._ = callback;
    return this.on(name, listener, ctx);
  },
  emit: function(name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;
    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }
    return this;
  },
  off: function(name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];
    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }
    liveEvents.length ? e[name] = liveEvents : delete e[name];
    return this;
  }
};
tinyEmitter.exports = E;
tinyEmitter.exports.TinyEmitter = E;
var Emitter = tinyEmitter.exports;
function toNumber(number) {
  var result;
  if (typeof number === "number") {
    result = number;
  } else if (typeof number === "string") {
    result = number.indexOf(".") > -1 ? parseFloat(number) : parseInt(number, 10);
  }
  return result;
}
function invertNumber(number) {
  return -1 * toNumber(number);
}
var _errors;
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ERROR = "ERROR";
var ERROR_DIV_ZERO = "DIV/0";
var ERROR_NAME = "NAME";
var ERROR_NOT_AVAILABLE = "N/A";
var ERROR_NULL = "NULL";
var ERROR_NUM = "NUM";
var ERROR_REF = "REF";
var ERROR_VALUE = "VALUE";
var errors = (_errors = {}, _defineProperty(_errors, ERROR, "#ERROR!"), _defineProperty(_errors, ERROR_DIV_ZERO, "#DIV/0!"), _defineProperty(_errors, ERROR_NAME, "#NAME?"), _defineProperty(_errors, ERROR_NOT_AVAILABLE, "#N/A"), _defineProperty(_errors, ERROR_NULL, "#NULL!"), _defineProperty(_errors, ERROR_NUM, "#NUM!"), _defineProperty(_errors, ERROR_REF, "#REF!"), _defineProperty(_errors, ERROR_VALUE, "#VALUE!"), _errors);
function error$4(type) {
  var result;
  type = (type + "").replace(/#|!|\?/g, "");
  if (errors[type]) {
    result = errors[type];
  }
  return result ? result : null;
}
function isValidStrict(type) {
  var valid = false;
  for (var i in errors) {
    if (Object.prototype.hasOwnProperty.call(errors, i) && errors[i] === type) {
      valid = true;
      break;
    }
  }
  return valid;
}
var SYMBOL$c = "+";
function func$c(first) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }
  var result = rest.reduce(function(acc, value) {
    return acc + toNumber(value);
  }, toNumber(first));
  if (isNaN(result)) {
    throw Error(ERROR_VALUE);
  }
  return result;
}
func$c.SYMBOL = SYMBOL$c;
var SYMBOL$b = "&";
function func$b() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }
  return params.reduce(function(acc, value) {
    return acc + value.toString();
  }, "");
}
func$b.SYMBOL = SYMBOL$b;
var SYMBOL$a = "/";
function func$a(first) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }
  var result = rest.reduce(function(acc, value) {
    return acc / toNumber(value);
  }, toNumber(first));
  if (result === Infinity) {
    throw Error(ERROR_DIV_ZERO);
  }
  if (isNaN(result)) {
    throw Error(ERROR_VALUE);
  }
  return result;
}
func$a.SYMBOL = SYMBOL$a;
var SYMBOL$9 = "=";
function func$9(exp1, exp2) {
  return exp1 === exp2;
}
func$9.SYMBOL = SYMBOL$9;
var formulajs = {};
var compatibility = {};
var mathTrig$1 = {};
var common = {};
var error$3 = {};
error$3.nil = new Error("#NULL!");
error$3.div0 = new Error("#DIV/0!");
error$3.value = new Error("#VALUE!");
error$3.ref = new Error("#REF!");
error$3.name = new Error("#NAME?");
error$3.num = new Error("#NUM!");
error$3.na = new Error("#N/A");
error$3.error = new Error("#ERROR!");
error$3.data = new Error("#GETTING_DATA");
(function(exports) {
  var error2 = error$3;
  exports.flattenShallow = function(array) {
    if (!array || !array.reduce) {
      return array;
    }
    return array.reduce(function(a, b) {
      var aIsArray = Array.isArray(a);
      var bIsArray = Array.isArray(b);
      if (aIsArray && bIsArray) {
        return a.concat(b);
      }
      if (aIsArray) {
        a.push(b);
        return a;
      }
      if (bIsArray) {
        return [a].concat(b);
      }
      return [a, b];
    });
  };
  exports.isFlat = function(array) {
    if (!array) {
      return false;
    }
    for (var i = 0; i < array.length; ++i) {
      if (Array.isArray(array[i])) {
        return false;
      }
    }
    return true;
  };
  exports.flatten = function() {
    var result = exports.argsToArray.apply(null, arguments);
    while (!exports.isFlat(result)) {
      result = exports.flattenShallow(result);
    }
    return result;
  };
  exports.argsToArray = function(args) {
    var result = [];
    exports.arrayEach(args, function(value) {
      result.push(value);
    });
    return result;
  };
  exports.numbers = function() {
    var possibleNumbers = this.flatten.apply(null, arguments);
    return possibleNumbers.filter(function(el) {
      return typeof el === "number";
    });
  };
  exports.cleanFloat = function(number) {
    var power = 1e14;
    return Math.round(number * power) / power;
  };
  exports.parseBool = function(bool) {
    if (typeof bool === "boolean") {
      return bool;
    }
    if (bool instanceof Error) {
      return bool;
    }
    if (typeof bool === "number") {
      return bool !== 0;
    }
    if (typeof bool === "string") {
      var up = bool.toUpperCase();
      if (up === "TRUE") {
        return true;
      }
      if (up === "FALSE") {
        return false;
      }
    }
    if (bool instanceof Date && !isNaN(bool)) {
      return true;
    }
    return error2.value;
  };
  exports.parseNumber = function(string) {
    if (string === void 0 || string === "") {
      return error2.value;
    }
    if (!isNaN(string)) {
      return parseFloat(string);
    }
    return error2.value;
  };
  exports.parseNumberArray = function(arr) {
    var len;
    if (!arr || (len = arr.length) === 0) {
      return error2.value;
    }
    var parsed;
    while (len--) {
      parsed = exports.parseNumber(arr[len]);
      if (parsed === error2.value) {
        return parsed;
      }
      arr[len] = parsed;
    }
    return arr;
  };
  exports.parseMatrix = function(matrix) {
    if (!matrix || matrix.length === 0) {
      return error2.value;
    }
    var pnarr;
    for (var i = 0; i < matrix.length; i++) {
      pnarr = exports.parseNumberArray(matrix[i]);
      matrix[i] = pnarr;
      if (pnarr instanceof Error) {
        return pnarr;
      }
    }
    return matrix;
  };
  var d1900 = new Date(Date.UTC(1900, 0, 1));
  exports.parseDate = function(date) {
    if (!isNaN(date)) {
      if (date instanceof Date) {
        return new Date(date);
      }
      var d = parseInt(date, 10);
      if (d < 0) {
        return error2.num;
      }
      if (d <= 60) {
        return new Date(d1900.getTime() + (d - 1) * 864e5);
      }
      return new Date(d1900.getTime() + (d - 2) * 864e5);
    }
    if (typeof date === "string") {
      date = new Date(date);
      if (!isNaN(date)) {
        return date;
      }
    }
    return error2.value;
  };
  exports.parseDateArray = function(arr) {
    var len = arr.length;
    var parsed;
    while (len--) {
      parsed = this.parseDate(arr[len]);
      if (parsed === error2.value) {
        return parsed;
      }
      arr[len] = parsed;
    }
    return arr;
  };
  exports.anyIsError = function() {
    var n2 = arguments.length;
    while (n2--) {
      if (arguments[n2] instanceof Error) {
        return true;
      }
    }
    return false;
  };
  exports.arrayValuesToNumbers = function(arr) {
    var n2 = arr.length;
    var el;
    while (n2--) {
      el = arr[n2];
      if (typeof el === "number") {
        continue;
      }
      if (el === true) {
        arr[n2] = 1;
        continue;
      }
      if (el === false) {
        arr[n2] = 0;
        continue;
      }
      if (typeof el === "string") {
        var number = this.parseNumber(el);
        if (number instanceof Error) {
          arr[n2] = 0;
        } else {
          arr[n2] = number;
        }
      }
    }
    return arr;
  };
  exports.rest = function(array, idx) {
    idx = idx || 1;
    if (!array || typeof array.slice !== "function") {
      return array;
    }
    return array.slice(idx);
  };
  exports.initial = function(array, idx) {
    idx = idx || 1;
    if (!array || typeof array.slice !== "function") {
      return array;
    }
    return array.slice(0, array.length - idx);
  };
  exports.arrayEach = function(array, iteratee) {
    var index = -1, length = array.length;
    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  };
  exports.transpose = function(matrix) {
    if (!matrix) {
      return error2.value;
    }
    return matrix[0].map(function(col, i) {
      return matrix.map(function(row) {
        return row[i];
      });
    });
  };
})(common);
var statistical$1 = {};
var text = {};
(function(exports) {
  var utils2 = common;
  var error2 = error$3;
  exports.ASC = function() {
    throw new Error("ASC is not implemented");
  };
  exports.BAHTTEXT = function() {
    throw new Error("BAHTTEXT is not implemented");
  };
  exports.CHAR = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    return String.fromCharCode(number);
  };
  exports.CLEAN = function(text2) {
    text2 = text2 || "";
    var re2 = /[\0-\x1F]/g;
    return text2.replace(re2, "");
  };
  exports.CODE = function(text2) {
    text2 = text2 || "";
    var result = text2.charCodeAt(0);
    if (isNaN(result)) {
      result = error2.na;
    }
    return result;
  };
  exports.CONCATENATE = function() {
    var args = utils2.flatten(arguments);
    var trueFound = 0;
    while ((trueFound = args.indexOf(true)) > -1) {
      args[trueFound] = "TRUE";
    }
    var falseFound = 0;
    while ((falseFound = args.indexOf(false)) > -1) {
      args[falseFound] = "FALSE";
    }
    return args.join("");
  };
  exports.DBCS = function() {
    throw new Error("DBCS is not implemented");
  };
  exports.DOLLAR = function() {
    throw new Error("DOLLAR is not implemented");
  };
  exports.EXACT = function(text1, text2) {
    if (arguments.length !== 2) {
      return error2.na;
    }
    return text1 === text2;
  };
  exports.FIND = function(find_text, within_text, position) {
    if (arguments.length < 2) {
      return error2.na;
    }
    position = position === void 0 ? 0 : position;
    return within_text ? within_text.indexOf(find_text, position - 1) + 1 : null;
  };
  exports.FIXED = function() {
    throw new Error("FIXED is not implemented");
  };
  exports.HTML2TEXT = function(value) {
    var result = "";
    if (value) {
      if (value instanceof Array) {
        value.forEach(function(line) {
          if (result !== "") {
            result += "\n";
          }
          result += line.replace(/<(?:.|\n)*?>/gm, "");
        });
      } else {
        result = value.replace(/<(?:.|\n)*?>/gm, "");
      }
    }
    return result;
  };
  exports.LEFT = function(text2, number) {
    number = number === void 0 ? 1 : number;
    number = utils2.parseNumber(number);
    if (number instanceof Error || typeof text2 !== "string") {
      return error2.value;
    }
    return text2 ? text2.substring(0, number) : null;
  };
  exports.LEN = function(text2) {
    if (arguments.length === 0) {
      return error2.error;
    }
    if (typeof text2 === "string") {
      return text2 ? text2.length : 0;
    }
    if (text2.length) {
      return text2.length;
    }
    return error2.value;
  };
  exports.LOWER = function(text2) {
    if (typeof text2 !== "string") {
      return error2.value;
    }
    return text2 ? text2.toLowerCase() : text2;
  };
  exports.MID = function(text2, start, number) {
    start = utils2.parseNumber(start);
    number = utils2.parseNumber(number);
    if (utils2.anyIsError(start, number) || typeof text2 !== "string") {
      return number;
    }
    var begin = start - 1;
    var end = begin + number;
    return text2.substring(begin, end);
  };
  exports.NUMBERVALUE = function(text2, decimal_separator, group_separator) {
    decimal_separator = typeof decimal_separator === "undefined" ? "." : decimal_separator;
    group_separator = typeof group_separator === "undefined" ? "," : group_separator;
    return Number(text2.replace(decimal_separator, ".").replace(group_separator, ""));
  };
  exports.PRONETIC = function() {
    throw new Error("PRONETIC is not implemented");
  };
  exports.PROPER = function(text2) {
    if (text2 === void 0 || text2.length === 0) {
      return error2.value;
    }
    if (text2 === true) {
      text2 = "TRUE";
    }
    if (text2 === false) {
      text2 = "FALSE";
    }
    if (isNaN(text2) && typeof text2 === "number") {
      return error2.value;
    }
    if (typeof text2 === "number") {
      text2 = "" + text2;
    }
    return text2.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };
  exports.REGEXEXTRACT = function(text2, regular_expression) {
    if (arguments.length < 2) {
      return error2.na;
    }
    var match2 = text2.match(new RegExp(regular_expression));
    return match2 ? match2[match2.length > 1 ? match2.length - 1 : 0] : null;
  };
  exports.REGEXMATCH = function(text2, regular_expression, full) {
    if (arguments.length < 2) {
      return error2.na;
    }
    var match2 = text2.match(new RegExp(regular_expression));
    return full ? match2 : !!match2;
  };
  exports.REGEXREPLACE = function(text2, regular_expression, replacement) {
    if (arguments.length < 3) {
      return error2.na;
    }
    return text2.replace(new RegExp(regular_expression), replacement);
  };
  exports.REPLACE = function(text2, position, length, new_text) {
    position = utils2.parseNumber(position);
    length = utils2.parseNumber(length);
    if (utils2.anyIsError(position, length) || typeof text2 !== "string" || typeof new_text !== "string") {
      return error2.value;
    }
    return text2.substr(0, position - 1) + new_text + text2.substr(position - 1 + length);
  };
  exports.REPT = function(text2, number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    return new Array(number + 1).join(text2);
  };
  exports.RIGHT = function(text2, number) {
    number = number === void 0 ? 1 : number;
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    return text2 ? text2.substring(text2.length - number) : error2.na;
  };
  exports.SEARCH = function(find_text, within_text, position) {
    var foundAt;
    if (typeof find_text !== "string" || typeof within_text !== "string") {
      return error2.value;
    }
    position = position === void 0 ? 0 : position;
    foundAt = within_text.toLowerCase().indexOf(find_text.toLowerCase(), position - 1) + 1;
    return foundAt === 0 ? error2.value : foundAt;
  };
  exports.SPLIT = function(text2, separator) {
    return text2.split(separator);
  };
  exports.SUBSTITUTE = function(text2, old_text, new_text, occurrence) {
    if (arguments.length < 2) {
      return error2.na;
    }
    if (!text2 || !old_text || !new_text) {
      return text2;
    } else if (occurrence === void 0) {
      return text2.replace(new RegExp(old_text, "g"), new_text);
    } else {
      var index = 0;
      var i = 0;
      while (text2.indexOf(old_text, index) > 0) {
        index = text2.indexOf(old_text, index + 1);
        i++;
        if (i === occurrence) {
          return text2.substring(0, index) + new_text + text2.substring(index + old_text.length);
        }
      }
    }
  };
  exports.T = function(value) {
    return typeof value === "string" ? value : "";
  };
  exports.TEXT = function() {
    throw new Error("TEXT is not implemented");
  };
  exports.TRIM = function(text2) {
    if (typeof text2 !== "string") {
      return error2.value;
    }
    return text2.replace(/ +/g, " ").trim();
  };
  exports.UNICHAR = exports.CHAR;
  exports.UNICODE = exports.CODE;
  exports.UPPER = function(text2) {
    if (typeof text2 !== "string") {
      return error2.value;
    }
    return text2.toUpperCase();
  };
  exports.VALUE = function() {
    throw new Error("VALUE is not implemented");
  };
})(text);
var jstat = { exports: {} };
(function(module, exports) {
  (function(window2, factory) {
    {
      module.exports = factory();
    }
  })(commonjsGlobal, function() {
    var jStat = function(Math2, undefined$12) {
      var concat2 = Array.prototype.concat;
      var slice2 = Array.prototype.slice;
      var toString = Object.prototype.toString;
      function calcRdx(n2, m2) {
        var val = n2 > m2 ? n2 : m2;
        return Math2.pow(10, 17 - ~~(Math2.log(val > 0 ? val : -val) * Math2.LOG10E));
      }
      var isArray2 = Array.isArray || function isArray3(arg) {
        return toString.call(arg) === "[object Array]";
      };
      function isFunction2(arg) {
        return toString.call(arg) === "[object Function]";
      }
      function isNumber2(num) {
        return typeof num === "number" ? num - num === 0 : false;
      }
      function toVector(arr) {
        return concat2.apply([], arr);
      }
      function jStat2() {
        return new jStat2._init(arguments);
      }
      jStat2.fn = jStat2.prototype;
      jStat2._init = function _init(args) {
        if (isArray2(args[0])) {
          if (isArray2(args[0][0])) {
            if (isFunction2(args[1]))
              args[0] = jStat2.map(args[0], args[1]);
            for (var i = 0; i < args[0].length; i++)
              this[i] = args[0][i];
            this.length = args[0].length;
          } else {
            this[0] = isFunction2(args[1]) ? jStat2.map(args[0], args[1]) : args[0];
            this.length = 1;
          }
        } else if (isNumber2(args[0])) {
          this[0] = jStat2.seq.apply(null, args);
          this.length = 1;
        } else if (args[0] instanceof jStat2) {
          return jStat2(args[0].toArray());
        } else {
          this[0] = [];
          this.length = 1;
        }
        return this;
      };
      jStat2._init.prototype = jStat2.prototype;
      jStat2._init.constructor = jStat2;
      jStat2.utils = {
        calcRdx,
        isArray: isArray2,
        isFunction: isFunction2,
        isNumber: isNumber2,
        toVector
      };
      jStat2._random_fn = Math2.random;
      jStat2.setRandom = function setRandom(fn) {
        if (typeof fn !== "function")
          throw new TypeError("fn is not a function");
        jStat2._random_fn = fn;
      };
      jStat2.extend = function extend(obj) {
        var i, j;
        if (arguments.length === 1) {
          for (j in obj)
            jStat2[j] = obj[j];
          return this;
        }
        for (i = 1; i < arguments.length; i++) {
          for (j in arguments[i])
            obj[j] = arguments[i][j];
        }
        return obj;
      };
      jStat2.rows = function rows(arr) {
        return arr.length || 1;
      };
      jStat2.cols = function cols(arr) {
        return arr[0].length || 1;
      };
      jStat2.dimensions = function dimensions(arr) {
        return {
          rows: jStat2.rows(arr),
          cols: jStat2.cols(arr)
        };
      };
      jStat2.row = function row(arr, index) {
        if (isArray2(index)) {
          return index.map(function(i) {
            return jStat2.row(arr, i);
          });
        }
        return arr[index];
      };
      jStat2.rowa = function rowa(arr, i) {
        return jStat2.row(arr, i);
      };
      jStat2.col = function col(arr, index) {
        if (isArray2(index)) {
          var submat = jStat2.arange(arr.length).map(function() {
            return new Array(index.length);
          });
          index.forEach(function(ind, i2) {
            jStat2.arange(arr.length).forEach(function(j) {
              submat[j][i2] = arr[j][ind];
            });
          });
          return submat;
        }
        var column = new Array(arr.length);
        for (var i = 0; i < arr.length; i++)
          column[i] = [arr[i][index]];
        return column;
      };
      jStat2.cola = function cola(arr, i) {
        return jStat2.col(arr, i).map(function(a) {
          return a[0];
        });
      };
      jStat2.diag = function diag(arr) {
        var nrow = jStat2.rows(arr);
        var res = new Array(nrow);
        for (var row = 0; row < nrow; row++)
          res[row] = [arr[row][row]];
        return res;
      };
      jStat2.antidiag = function antidiag(arr) {
        var nrow = jStat2.rows(arr) - 1;
        var res = new Array(nrow);
        for (var i = 0; nrow >= 0; nrow--, i++)
          res[i] = [arr[i][nrow]];
        return res;
      };
      jStat2.transpose = function transpose(arr) {
        var obj = [];
        var objArr, rows, cols, j, i;
        if (!isArray2(arr[0]))
          arr = [arr];
        rows = arr.length;
        cols = arr[0].length;
        for (i = 0; i < cols; i++) {
          objArr = new Array(rows);
          for (j = 0; j < rows; j++)
            objArr[j] = arr[j][i];
          obj.push(objArr);
        }
        return obj.length === 1 ? obj[0] : obj;
      };
      jStat2.map = function map2(arr, func2, toAlter) {
        var row, nrow, ncol, res, col;
        if (!isArray2(arr[0]))
          arr = [arr];
        nrow = arr.length;
        ncol = arr[0].length;
        res = toAlter ? arr : new Array(nrow);
        for (row = 0; row < nrow; row++) {
          if (!res[row])
            res[row] = new Array(ncol);
          for (col = 0; col < ncol; col++)
            res[row][col] = func2(arr[row][col], row, col);
        }
        return res.length === 1 ? res[0] : res;
      };
      jStat2.cumreduce = function cumreduce(arr, func2, toAlter) {
        var row, nrow, ncol, res, col;
        if (!isArray2(arr[0]))
          arr = [arr];
        nrow = arr.length;
        ncol = arr[0].length;
        res = toAlter ? arr : new Array(nrow);
        for (row = 0; row < nrow; row++) {
          if (!res[row])
            res[row] = new Array(ncol);
          if (ncol > 0)
            res[row][0] = arr[row][0];
          for (col = 1; col < ncol; col++)
            res[row][col] = func2(res[row][col - 1], arr[row][col]);
        }
        return res.length === 1 ? res[0] : res;
      };
      jStat2.alter = function alter(arr, func2) {
        return jStat2.map(arr, func2, true);
      };
      jStat2.create = function create(rows, cols, func2) {
        var res = new Array(rows);
        var i, j;
        if (isFunction2(cols)) {
          func2 = cols;
          cols = rows;
        }
        for (i = 0; i < rows; i++) {
          res[i] = new Array(cols);
          for (j = 0; j < cols; j++)
            res[i][j] = func2(i, j);
        }
        return res;
      };
      function retZero() {
        return 0;
      }
      jStat2.zeros = function zeros(rows, cols) {
        if (!isNumber2(cols))
          cols = rows;
        return jStat2.create(rows, cols, retZero);
      };
      function retOne() {
        return 1;
      }
      jStat2.ones = function ones(rows, cols) {
        if (!isNumber2(cols))
          cols = rows;
        return jStat2.create(rows, cols, retOne);
      };
      jStat2.rand = function rand(rows, cols) {
        if (!isNumber2(cols))
          cols = rows;
        return jStat2.create(rows, cols, jStat2._random_fn);
      };
      function retIdent(i, j) {
        return i === j ? 1 : 0;
      }
      jStat2.identity = function identity(rows, cols) {
        if (!isNumber2(cols))
          cols = rows;
        return jStat2.create(rows, cols, retIdent);
      };
      jStat2.symmetric = function symmetric(arr) {
        var size2 = arr.length;
        var row, col;
        if (arr.length !== arr[0].length)
          return false;
        for (row = 0; row < size2; row++) {
          for (col = 0; col < size2; col++)
            if (arr[col][row] !== arr[row][col])
              return false;
        }
        return true;
      };
      jStat2.clear = function clear2(arr) {
        return jStat2.alter(arr, retZero);
      };
      jStat2.seq = function seq(min2, max2, length, func2) {
        if (!isFunction2(func2))
          func2 = false;
        var arr = [];
        var hival = calcRdx(min2, max2);
        var step = (max2 * hival - min2 * hival) / ((length - 1) * hival);
        var current = min2;
        var cnt;
        for (cnt = 0; current <= max2 && cnt < length; cnt++, current = (min2 * hival + step * hival * cnt) / hival) {
          arr.push(func2 ? func2(current, cnt) : current);
        }
        return arr;
      };
      jStat2.arange = function arange(start, end, step) {
        var rl = [];
        var i;
        step = step || 1;
        if (end === undefined$12) {
          end = start;
          start = 0;
        }
        if (start === end || step === 0) {
          return [];
        }
        if (start < end && step < 0) {
          return [];
        }
        if (start > end && step > 0) {
          return [];
        }
        if (step > 0) {
          for (i = start; i < end; i += step) {
            rl.push(i);
          }
        } else {
          for (i = start; i > end; i += step) {
            rl.push(i);
          }
        }
        return rl;
      };
      jStat2.slice = function() {
        function _slice(list, start, end, step) {
          var i;
          var rl = [];
          var length = list.length;
          if (start === undefined$12 && end === undefined$12 && step === undefined$12) {
            return jStat2.copy(list);
          }
          start = start || 0;
          end = end || list.length;
          start = start >= 0 ? start : length + start;
          end = end >= 0 ? end : length + end;
          step = step || 1;
          if (start === end || step === 0) {
            return [];
          }
          if (start < end && step < 0) {
            return [];
          }
          if (start > end && step > 0) {
            return [];
          }
          if (step > 0) {
            for (i = start; i < end; i += step) {
              rl.push(list[i]);
            }
          } else {
            for (i = start; i > end; i += step) {
              rl.push(list[i]);
            }
          }
          return rl;
        }
        function slice3(list, rcSlice) {
          var colSlice, rowSlice;
          rcSlice = rcSlice || {};
          if (isNumber2(rcSlice.row)) {
            if (isNumber2(rcSlice.col))
              return list[rcSlice.row][rcSlice.col];
            var row = jStat2.rowa(list, rcSlice.row);
            colSlice = rcSlice.col || {};
            return _slice(row, colSlice.start, colSlice.end, colSlice.step);
          }
          if (isNumber2(rcSlice.col)) {
            var col = jStat2.cola(list, rcSlice.col);
            rowSlice = rcSlice.row || {};
            return _slice(col, rowSlice.start, rowSlice.end, rowSlice.step);
          }
          rowSlice = rcSlice.row || {};
          colSlice = rcSlice.col || {};
          var rows = _slice(list, rowSlice.start, rowSlice.end, rowSlice.step);
          return rows.map(function(row2) {
            return _slice(row2, colSlice.start, colSlice.end, colSlice.step);
          });
        }
        return slice3;
      }();
      jStat2.sliceAssign = function sliceAssign(A2, rcSlice, B2) {
        var nl, ml;
        if (isNumber2(rcSlice.row)) {
          if (isNumber2(rcSlice.col))
            return A2[rcSlice.row][rcSlice.col] = B2;
          rcSlice.col = rcSlice.col || {};
          rcSlice.col.start = rcSlice.col.start || 0;
          rcSlice.col.end = rcSlice.col.end || A2[0].length;
          rcSlice.col.step = rcSlice.col.step || 1;
          nl = jStat2.arange(rcSlice.col.start, Math2.min(A2.length, rcSlice.col.end), rcSlice.col.step);
          var m2 = rcSlice.row;
          nl.forEach(function(n3, i) {
            A2[m2][n3] = B2[i];
          });
          return A2;
        }
        if (isNumber2(rcSlice.col)) {
          rcSlice.row = rcSlice.row || {};
          rcSlice.row.start = rcSlice.row.start || 0;
          rcSlice.row.end = rcSlice.row.end || A2.length;
          rcSlice.row.step = rcSlice.row.step || 1;
          ml = jStat2.arange(rcSlice.row.start, Math2.min(A2[0].length, rcSlice.row.end), rcSlice.row.step);
          var n2 = rcSlice.col;
          ml.forEach(function(m3, j) {
            A2[m3][n2] = B2[j];
          });
          return A2;
        }
        if (B2[0].length === undefined$12) {
          B2 = [B2];
        }
        rcSlice.row.start = rcSlice.row.start || 0;
        rcSlice.row.end = rcSlice.row.end || A2.length;
        rcSlice.row.step = rcSlice.row.step || 1;
        rcSlice.col.start = rcSlice.col.start || 0;
        rcSlice.col.end = rcSlice.col.end || A2[0].length;
        rcSlice.col.step = rcSlice.col.step || 1;
        ml = jStat2.arange(rcSlice.row.start, Math2.min(A2.length, rcSlice.row.end), rcSlice.row.step);
        nl = jStat2.arange(rcSlice.col.start, Math2.min(A2[0].length, rcSlice.col.end), rcSlice.col.step);
        ml.forEach(function(m3, i) {
          nl.forEach(function(n3, j) {
            A2[m3][n3] = B2[i][j];
          });
        });
        return A2;
      };
      jStat2.diagonal = function diagonal(diagArray) {
        var mat = jStat2.zeros(diagArray.length, diagArray.length);
        diagArray.forEach(function(t2, i) {
          mat[i][i] = t2;
        });
        return mat;
      };
      jStat2.copy = function copy2(A2) {
        return A2.map(function(row) {
          if (isNumber2(row))
            return row;
          return row.map(function(t2) {
            return t2;
          });
        });
      };
      var jProto = jStat2.prototype;
      jProto.length = 0;
      jProto.push = Array.prototype.push;
      jProto.sort = Array.prototype.sort;
      jProto.splice = Array.prototype.splice;
      jProto.slice = Array.prototype.slice;
      jProto.toArray = function toArray2() {
        return this.length > 1 ? slice2.call(this) : slice2.call(this)[0];
      };
      jProto.map = function map2(func2, toAlter) {
        return jStat2(jStat2.map(this, func2, toAlter));
      };
      jProto.cumreduce = function cumreduce(func2, toAlter) {
        return jStat2(jStat2.cumreduce(this, func2, toAlter));
      };
      jProto.alter = function alter(func2) {
        jStat2.alter(this, func2);
        return this;
      };
      (function(funcs) {
        for (var i = 0; i < funcs.length; i++)
          (function(passfunc) {
            jProto[passfunc] = function(func2) {
              var self2 = this, results;
              if (func2) {
                setTimeout(function() {
                  func2.call(self2, jProto[passfunc].call(self2));
                });
                return this;
              }
              results = jStat2[passfunc](this);
              return isArray2(results) ? jStat2(results) : results;
            };
          })(funcs[i]);
      })("transpose clear symmetric rows cols dimensions diag antidiag".split(" "));
      (function(funcs) {
        for (var i = 0; i < funcs.length; i++)
          (function(passfunc) {
            jProto[passfunc] = function(index, func2) {
              var self2 = this;
              if (func2) {
                setTimeout(function() {
                  func2.call(self2, jProto[passfunc].call(self2, index));
                });
                return this;
              }
              return jStat2(jStat2[passfunc](this, index));
            };
          })(funcs[i]);
      })("row col".split(" "));
      (function(funcs) {
        for (var i = 0; i < funcs.length; i++)
          (function(passfunc) {
            jProto[passfunc] = function() {
              return jStat2(jStat2[passfunc].apply(null, arguments));
            };
          })(funcs[i]);
      })("create zeros ones rand identity".split(" "));
      return jStat2;
    }(Math);
    (function(jStat2, Math2) {
      var isFunction2 = jStat2.utils.isFunction;
      function ascNum(a, b) {
        return a - b;
      }
      function clip(arg, min2, max2) {
        return Math2.max(min2, Math2.min(arg, max2));
      }
      jStat2.sum = function sum(arr) {
        var sum2 = 0;
        var i = arr.length;
        while (--i >= 0)
          sum2 += arr[i];
        return sum2;
      };
      jStat2.sumsqrd = function sumsqrd(arr) {
        var sum = 0;
        var i = arr.length;
        while (--i >= 0)
          sum += arr[i] * arr[i];
        return sum;
      };
      jStat2.sumsqerr = function sumsqerr(arr) {
        var mean = jStat2.mean(arr);
        var sum = 0;
        var i = arr.length;
        var tmp;
        while (--i >= 0) {
          tmp = arr[i] - mean;
          sum += tmp * tmp;
        }
        return sum;
      };
      jStat2.sumrow = function sumrow(arr) {
        var sum = 0;
        var i = arr.length;
        while (--i >= 0)
          sum += arr[i];
        return sum;
      };
      jStat2.product = function product(arr) {
        var prod = 1;
        var i = arr.length;
        while (--i >= 0)
          prod *= arr[i];
        return prod;
      };
      jStat2.min = function min2(arr) {
        var low = arr[0];
        var i = 0;
        while (++i < arr.length)
          if (arr[i] < low)
            low = arr[i];
        return low;
      };
      jStat2.max = function max2(arr) {
        var high = arr[0];
        var i = 0;
        while (++i < arr.length)
          if (arr[i] > high)
            high = arr[i];
        return high;
      };
      jStat2.unique = function unique(arr) {
        var hash = {}, _arr = [];
        for (var i = 0; i < arr.length; i++) {
          if (!hash[arr[i]]) {
            hash[arr[i]] = true;
            _arr.push(arr[i]);
          }
        }
        return _arr;
      };
      jStat2.mean = function mean(arr) {
        return jStat2.sum(arr) / arr.length;
      };
      jStat2.meansqerr = function meansqerr(arr) {
        return jStat2.sumsqerr(arr) / arr.length;
      };
      jStat2.geomean = function geomean(arr) {
        return Math2.pow(jStat2.product(arr), 1 / arr.length);
      };
      jStat2.median = function median(arr) {
        var arrlen = arr.length;
        var _arr = arr.slice().sort(ascNum);
        return !(arrlen & 1) ? (_arr[arrlen / 2 - 1] + _arr[arrlen / 2]) / 2 : _arr[arrlen / 2 | 0];
      };
      jStat2.cumsum = function cumsum(arr) {
        return jStat2.cumreduce(arr, function(a, b) {
          return a + b;
        });
      };
      jStat2.cumprod = function cumprod(arr) {
        return jStat2.cumreduce(arr, function(a, b) {
          return a * b;
        });
      };
      jStat2.diff = function diff(arr) {
        var diffs = [];
        var arrLen = arr.length;
        var i;
        for (i = 1; i < arrLen; i++)
          diffs.push(arr[i] - arr[i - 1]);
        return diffs;
      };
      jStat2.rank = function(arr) {
        var i;
        var distinctNumbers = [];
        var numberCounts = {};
        for (i = 0; i < arr.length; i++) {
          var number = arr[i];
          if (numberCounts[number]) {
            numberCounts[number]++;
          } else {
            numberCounts[number] = 1;
            distinctNumbers.push(number);
          }
        }
        var sortedDistinctNumbers = distinctNumbers.sort(ascNum);
        var numberRanks = {};
        var currentRank = 1;
        for (i = 0; i < sortedDistinctNumbers.length; i++) {
          var number = sortedDistinctNumbers[i];
          var count = numberCounts[number];
          var first = currentRank;
          var last = currentRank + count - 1;
          var rank = (first + last) / 2;
          numberRanks[number] = rank;
          currentRank += count;
        }
        return arr.map(function(number2) {
          return numberRanks[number2];
        });
      };
      jStat2.mode = function mode(arr) {
        var arrLen = arr.length;
        var _arr = arr.slice().sort(ascNum);
        var count = 1;
        var maxCount = 0;
        var numMaxCount = 0;
        var mode_arr = [];
        var i;
        for (i = 0; i < arrLen; i++) {
          if (_arr[i] === _arr[i + 1]) {
            count++;
          } else {
            if (count > maxCount) {
              mode_arr = [_arr[i]];
              maxCount = count;
              numMaxCount = 0;
            } else if (count === maxCount) {
              mode_arr.push(_arr[i]);
              numMaxCount++;
            }
            count = 1;
          }
        }
        return numMaxCount === 0 ? mode_arr[0] : mode_arr;
      };
      jStat2.range = function range2(arr) {
        return jStat2.max(arr) - jStat2.min(arr);
      };
      jStat2.variance = function variance(arr, flag) {
        return jStat2.sumsqerr(arr) / (arr.length - (flag ? 1 : 0));
      };
      jStat2.pooledvariance = function pooledvariance(arr) {
        var sumsqerr = arr.reduce(function(a, samples) {
          return a + jStat2.sumsqerr(samples);
        }, 0);
        var count = arr.reduce(function(a, samples) {
          return a + samples.length;
        }, 0);
        return sumsqerr / (count - arr.length);
      };
      jStat2.deviation = function(arr) {
        var mean = jStat2.mean(arr);
        var arrlen = arr.length;
        var dev = new Array(arrlen);
        for (var i = 0; i < arrlen; i++) {
          dev[i] = arr[i] - mean;
        }
        return dev;
      };
      jStat2.stdev = function stdev(arr, flag) {
        return Math2.sqrt(jStat2.variance(arr, flag));
      };
      jStat2.pooledstdev = function pooledstdev(arr) {
        return Math2.sqrt(jStat2.pooledvariance(arr));
      };
      jStat2.meandev = function meandev(arr) {
        var mean = jStat2.mean(arr);
        var a = [];
        for (var i = arr.length - 1; i >= 0; i--) {
          a.push(Math2.abs(arr[i] - mean));
        }
        return jStat2.mean(a);
      };
      jStat2.meddev = function meddev(arr) {
        var median = jStat2.median(arr);
        var a = [];
        for (var i = arr.length - 1; i >= 0; i--) {
          a.push(Math2.abs(arr[i] - median));
        }
        return jStat2.median(a);
      };
      jStat2.coeffvar = function coeffvar(arr) {
        return jStat2.stdev(arr) / jStat2.mean(arr);
      };
      jStat2.quartiles = function quartiles(arr) {
        var arrlen = arr.length;
        var _arr = arr.slice().sort(ascNum);
        return [
          _arr[Math2.round(arrlen / 4) - 1],
          _arr[Math2.round(arrlen / 2) - 1],
          _arr[Math2.round(arrlen * 3 / 4) - 1]
        ];
      };
      jStat2.quantiles = function quantiles(arr, quantilesArray, alphap, betap) {
        var sortedArray = arr.slice().sort(ascNum);
        var quantileVals = [quantilesArray.length];
        var n2 = arr.length;
        var i, p2, m2, aleph, k, gamma;
        if (typeof alphap === "undefined")
          alphap = 3 / 8;
        if (typeof betap === "undefined")
          betap = 3 / 8;
        for (i = 0; i < quantilesArray.length; i++) {
          p2 = quantilesArray[i];
          m2 = alphap + p2 * (1 - alphap - betap);
          aleph = n2 * p2 + m2;
          k = Math2.floor(clip(aleph, 1, n2 - 1));
          gamma = clip(aleph - k, 0, 1);
          quantileVals[i] = (1 - gamma) * sortedArray[k - 1] + gamma * sortedArray[k];
        }
        return quantileVals;
      };
      jStat2.percentile = function percentile(arr, k, exclusive) {
        var _arr = arr.slice().sort(ascNum);
        var realIndex = k * (_arr.length + (exclusive ? 1 : -1)) + (exclusive ? 0 : 1);
        var index = parseInt(realIndex);
        var frac = realIndex - index;
        if (index + 1 < _arr.length) {
          return _arr[index - 1] + frac * (_arr[index] - _arr[index - 1]);
        } else {
          return _arr[index - 1];
        }
      };
      jStat2.percentileOfScore = function percentileOfScore(arr, score, kind) {
        var counter = 0;
        var len = arr.length;
        var strict = false;
        var value, i;
        if (kind === "strict")
          strict = true;
        for (i = 0; i < len; i++) {
          value = arr[i];
          if (strict && value < score || !strict && value <= score) {
            counter++;
          }
        }
        return counter / len;
      };
      jStat2.histogram = function histogram(arr, binCnt) {
        binCnt = binCnt || 4;
        var first = jStat2.min(arr);
        var binWidth = (jStat2.max(arr) - first) / binCnt;
        var len = arr.length;
        var bins = [];
        var i;
        for (i = 0; i < binCnt; i++)
          bins[i] = 0;
        for (i = 0; i < len; i++)
          bins[Math2.min(Math2.floor((arr[i] - first) / binWidth), binCnt - 1)] += 1;
        return bins;
      };
      jStat2.covariance = function covariance(arr1, arr2) {
        var u2 = jStat2.mean(arr1);
        var v2 = jStat2.mean(arr2);
        var arr1Len = arr1.length;
        var sq_dev = new Array(arr1Len);
        var i;
        for (i = 0; i < arr1Len; i++)
          sq_dev[i] = (arr1[i] - u2) * (arr2[i] - v2);
        return jStat2.sum(sq_dev) / (arr1Len - 1);
      };
      jStat2.corrcoeff = function corrcoeff(arr1, arr2) {
        return jStat2.covariance(arr1, arr2) / jStat2.stdev(arr1, 1) / jStat2.stdev(arr2, 1);
      };
      jStat2.spearmancoeff = function(arr1, arr2) {
        arr1 = jStat2.rank(arr1);
        arr2 = jStat2.rank(arr2);
        return jStat2.corrcoeff(arr1, arr2);
      };
      jStat2.stanMoment = function stanMoment(arr, n2) {
        var mu = jStat2.mean(arr);
        var sigma = jStat2.stdev(arr);
        var len = arr.length;
        var skewSum = 0;
        for (var i = 0; i < len; i++)
          skewSum += Math2.pow((arr[i] - mu) / sigma, n2);
        return skewSum / arr.length;
      };
      jStat2.skewness = function skewness(arr) {
        return jStat2.stanMoment(arr, 3);
      };
      jStat2.kurtosis = function kurtosis(arr) {
        return jStat2.stanMoment(arr, 4) - 3;
      };
      var jProto = jStat2.prototype;
      (function(funcs) {
        for (var i = 0; i < funcs.length; i++)
          (function(passfunc) {
            jProto[passfunc] = function(fullbool, func2) {
              var arr = [];
              var i2 = 0;
              var tmpthis = this;
              if (isFunction2(fullbool)) {
                func2 = fullbool;
                fullbool = false;
              }
              if (func2) {
                setTimeout(function() {
                  func2.call(tmpthis, jProto[passfunc].call(tmpthis, fullbool));
                });
                return this;
              }
              if (this.length > 1) {
                tmpthis = fullbool === true ? this : this.transpose();
                for (; i2 < tmpthis.length; i2++)
                  arr[i2] = jStat2[passfunc](tmpthis[i2]);
                return arr;
              }
              return jStat2[passfunc](this[0], fullbool);
            };
          })(funcs[i]);
      })("cumsum cumprod".split(" "));
      (function(funcs) {
        for (var i = 0; i < funcs.length; i++)
          (function(passfunc) {
            jProto[passfunc] = function(fullbool, func2) {
              var arr = [];
              var i2 = 0;
              var tmpthis = this;
              if (isFunction2(fullbool)) {
                func2 = fullbool;
                fullbool = false;
              }
              if (func2) {
                setTimeout(function() {
                  func2.call(tmpthis, jProto[passfunc].call(tmpthis, fullbool));
                });
                return this;
              }
              if (this.length > 1) {
                if (passfunc !== "sumrow")
                  tmpthis = fullbool === true ? this : this.transpose();
                for (; i2 < tmpthis.length; i2++)
                  arr[i2] = jStat2[passfunc](tmpthis[i2]);
                return fullbool === true ? jStat2[passfunc](jStat2.utils.toVector(arr)) : arr;
              }
              return jStat2[passfunc](this[0], fullbool);
            };
          })(funcs[i]);
      })("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" "));
      (function(funcs) {
        for (var i = 0; i < funcs.length; i++)
          (function(passfunc) {
            jProto[passfunc] = function() {
              var arr = [];
              var i2 = 0;
              var tmpthis = this;
              var args = Array.prototype.slice.call(arguments);
              var callbackFunction;
              if (isFunction2(args[args.length - 1])) {
                callbackFunction = args[args.length - 1];
                var argsToPass = args.slice(0, args.length - 1);
                setTimeout(function() {
                  callbackFunction.call(tmpthis, jProto[passfunc].apply(tmpthis, argsToPass));
                });
                return this;
              } else {
                callbackFunction = void 0;
                var curriedFunction = function curriedFunction2(vector) {
                  return jStat2[passfunc].apply(tmpthis, [vector].concat(args));
                };
              }
              if (this.length > 1) {
                tmpthis = tmpthis.transpose();
                for (; i2 < tmpthis.length; i2++)
                  arr[i2] = curriedFunction(tmpthis[i2]);
                return arr;
              }
              return curriedFunction(this[0]);
            };
          })(funcs[i]);
      })("quantiles percentileOfScore".split(" "));
    })(jStat, Math);
    (function(jStat2, Math2) {
      jStat2.gammaln = function gammaln(x2) {
        var j = 0;
        var cof = [
          76.18009172947146,
          -86.50532032941678,
          24.01409824083091,
          -1.231739572450155,
          0.001208650973866179,
          -5395239384953e-18
        ];
        var ser = 1.000000000190015;
        var xx, y2, tmp;
        tmp = (y2 = xx = x2) + 5.5;
        tmp -= (xx + 0.5) * Math2.log(tmp);
        for (; j < 6; j++)
          ser += cof[j] / ++y2;
        return Math2.log(2.5066282746310007 * ser / xx) - tmp;
      };
      jStat2.loggam = function loggam(x2) {
        var x0, x22, xp, gl, gl0;
        var k, n2;
        var a = [
          0.08333333333333333,
          -0.002777777777777778,
          7936507936507937e-19,
          -5952380952380952e-19,
          8417508417508418e-19,
          -0.001917526917526918,
          0.00641025641025641,
          -0.02955065359477124,
          0.1796443723688307,
          -1.3924322169059
        ];
        x0 = x2;
        n2 = 0;
        if (x2 == 1 || x2 == 2) {
          return 0;
        }
        if (x2 <= 7) {
          n2 = Math2.floor(7 - x2);
          x0 = x2 + n2;
        }
        x22 = 1 / (x0 * x0);
        xp = 2 * Math2.PI;
        gl0 = a[9];
        for (k = 8; k >= 0; k--) {
          gl0 *= x22;
          gl0 += a[k];
        }
        gl = gl0 / x0 + 0.5 * Math2.log(xp) + (x0 - 0.5) * Math2.log(x0) - x0;
        if (x2 <= 7) {
          for (k = 1; k <= n2; k++) {
            gl -= Math2.log(x0 - 1);
            x0 -= 1;
          }
        }
        return gl;
      };
      jStat2.gammafn = function gammafn(x2) {
        var p2 = [
          -1.716185138865495,
          24.76565080557592,
          -379.80425647094563,
          629.3311553128184,
          866.9662027904133,
          -31451.272968848367,
          -36144.413418691176,
          66456.14382024054
        ];
        var q2 = [
          -30.8402300119739,
          315.35062697960416,
          -1015.1563674902192,
          -3107.771671572311,
          22538.11842098015,
          4755.846277527881,
          -134659.9598649693,
          -115132.2596755535
        ];
        var fact = false;
        var n2 = 0;
        var xden = 0;
        var xnum = 0;
        var y2 = x2;
        var i, z2, yi2, res;
        if (x2 > 171.6243769536076) {
          return Infinity;
        }
        if (y2 <= 0) {
          res = y2 % 1 + 36e-17;
          if (res) {
            fact = (!(y2 & 1) ? 1 : -1) * Math2.PI / Math2.sin(Math2.PI * res);
            y2 = 1 - y2;
          } else {
            return Infinity;
          }
        }
        yi2 = y2;
        if (y2 < 1) {
          z2 = y2++;
        } else {
          z2 = (y2 -= n2 = (y2 | 0) - 1) - 1;
        }
        for (i = 0; i < 8; ++i) {
          xnum = (xnum + p2[i]) * z2;
          xden = xden * z2 + q2[i];
        }
        res = xnum / xden + 1;
        if (yi2 < y2) {
          res /= yi2;
        } else if (yi2 > y2) {
          for (i = 0; i < n2; ++i) {
            res *= y2;
            y2++;
          }
        }
        if (fact) {
          res = fact / res;
        }
        return res;
      };
      jStat2.gammap = function gammap(a, x2) {
        return jStat2.lowRegGamma(a, x2) * jStat2.gammafn(a);
      };
      jStat2.lowRegGamma = function lowRegGamma(a, x2) {
        var aln = jStat2.gammaln(a);
        var ap = a;
        var sum = 1 / a;
        var del = sum;
        var b = x2 + 1 - a;
        var c = 1 / 1e-30;
        var d = 1 / b;
        var h = d;
        var i = 1;
        var ITMAX = -~(Math2.log(a >= 1 ? a : 1 / a) * 8.5 + a * 0.4 + 17);
        var an;
        if (x2 < 0 || a <= 0) {
          return NaN;
        } else if (x2 < a + 1) {
          for (; i <= ITMAX; i++) {
            sum += del *= x2 / ++ap;
          }
          return sum * Math2.exp(-x2 + a * Math2.log(x2) - aln);
        }
        for (; i <= ITMAX; i++) {
          an = -i * (i - a);
          b += 2;
          d = an * d + b;
          c = b + an / c;
          d = 1 / d;
          h *= d * c;
        }
        return 1 - h * Math2.exp(-x2 + a * Math2.log(x2) - aln);
      };
      jStat2.factorialln = function factorialln(n2) {
        return n2 < 0 ? NaN : jStat2.gammaln(n2 + 1);
      };
      jStat2.factorial = function factorial(n2) {
        return n2 < 0 ? NaN : jStat2.gammafn(n2 + 1);
      };
      jStat2.combination = function combination(n2, m2) {
        return n2 > 170 || m2 > 170 ? Math2.exp(jStat2.combinationln(n2, m2)) : jStat2.factorial(n2) / jStat2.factorial(m2) / jStat2.factorial(n2 - m2);
      };
      jStat2.combinationln = function combinationln(n2, m2) {
        return jStat2.factorialln(n2) - jStat2.factorialln(m2) - jStat2.factorialln(n2 - m2);
      };
      jStat2.permutation = function permutation(n2, m2) {
        return jStat2.factorial(n2) / jStat2.factorial(n2 - m2);
      };
      jStat2.betafn = function betafn(x2, y2) {
        if (x2 <= 0 || y2 <= 0)
          return void 0;
        return x2 + y2 > 170 ? Math2.exp(jStat2.betaln(x2, y2)) : jStat2.gammafn(x2) * jStat2.gammafn(y2) / jStat2.gammafn(x2 + y2);
      };
      jStat2.betaln = function betaln(x2, y2) {
        return jStat2.gammaln(x2) + jStat2.gammaln(y2) - jStat2.gammaln(x2 + y2);
      };
      jStat2.betacf = function betacf(x2, a, b) {
        var fpmin = 1e-30;
        var m2 = 1;
        var qab = a + b;
        var qap = a + 1;
        var qam = a - 1;
        var c = 1;
        var d = 1 - qab * x2 / qap;
        var m22, aa2, del, h;
        if (Math2.abs(d) < fpmin)
          d = fpmin;
        d = 1 / d;
        h = d;
        for (; m2 <= 100; m2++) {
          m22 = 2 * m2;
          aa2 = m2 * (b - m2) * x2 / ((qam + m22) * (a + m22));
          d = 1 + aa2 * d;
          if (Math2.abs(d) < fpmin)
            d = fpmin;
          c = 1 + aa2 / c;
          if (Math2.abs(c) < fpmin)
            c = fpmin;
          d = 1 / d;
          h *= d * c;
          aa2 = -(a + m2) * (qab + m2) * x2 / ((a + m22) * (qap + m22));
          d = 1 + aa2 * d;
          if (Math2.abs(d) < fpmin)
            d = fpmin;
          c = 1 + aa2 / c;
          if (Math2.abs(c) < fpmin)
            c = fpmin;
          d = 1 / d;
          del = d * c;
          h *= del;
          if (Math2.abs(del - 1) < 3e-7)
            break;
        }
        return h;
      };
      jStat2.gammapinv = function gammapinv(p2, a) {
        var j = 0;
        var a1 = a - 1;
        var EPS = 1e-8;
        var gln = jStat2.gammaln(a);
        var x2, err, t2, u2, pp, lna1, afac;
        if (p2 >= 1)
          return Math2.max(100, a + 100 * Math2.sqrt(a));
        if (p2 <= 0)
          return 0;
        if (a > 1) {
          lna1 = Math2.log(a1);
          afac = Math2.exp(a1 * (lna1 - 1) - gln);
          pp = p2 < 0.5 ? p2 : 1 - p2;
          t2 = Math2.sqrt(-2 * Math2.log(pp));
          x2 = (2.30753 + t2 * 0.27061) / (1 + t2 * (0.99229 + t2 * 0.04481)) - t2;
          if (p2 < 0.5)
            x2 = -x2;
          x2 = Math2.max(1e-3, a * Math2.pow(1 - 1 / (9 * a) - x2 / (3 * Math2.sqrt(a)), 3));
        } else {
          t2 = 1 - a * (0.253 + a * 0.12);
          if (p2 < t2)
            x2 = Math2.pow(p2 / t2, 1 / a);
          else
            x2 = 1 - Math2.log(1 - (p2 - t2) / (1 - t2));
        }
        for (; j < 12; j++) {
          if (x2 <= 0)
            return 0;
          err = jStat2.lowRegGamma(a, x2) - p2;
          if (a > 1)
            t2 = afac * Math2.exp(-(x2 - a1) + a1 * (Math2.log(x2) - lna1));
          else
            t2 = Math2.exp(-x2 + a1 * Math2.log(x2) - gln);
          u2 = err / t2;
          x2 -= t2 = u2 / (1 - 0.5 * Math2.min(1, u2 * ((a - 1) / x2 - 1)));
          if (x2 <= 0)
            x2 = 0.5 * (x2 + t2);
          if (Math2.abs(t2) < EPS * x2)
            break;
        }
        return x2;
      };
      jStat2.erf = function erf(x2) {
        var cof = [
          -1.3026537197817094,
          0.6419697923564902,
          0.019476473204185836,
          -0.00956151478680863,
          -946595344482036e-18,
          366839497852761e-18,
          42523324806907e-18,
          -20278578112534e-18,
          -1624290004647e-18,
          130365583558e-17,
          15626441722e-18,
          -85238095915e-18,
          6529054439e-18,
          5059343495e-18,
          -991364156e-18,
          -227365122e-18,
          96467911e-18,
          2394038e-18,
          -6886027e-18,
          894487e-18,
          313092e-18,
          -112708e-18,
          381e-18,
          7106e-18,
          -1523e-18,
          -94e-18,
          121e-18,
          -28e-18
        ];
        var j = cof.length - 1;
        var isneg = false;
        var d = 0;
        var dd2 = 0;
        var t2, ty, tmp, res;
        if (x2 < 0) {
          x2 = -x2;
          isneg = true;
        }
        t2 = 2 / (2 + x2);
        ty = 4 * t2 - 2;
        for (; j > 0; j--) {
          tmp = d;
          d = ty * d - dd2 + cof[j];
          dd2 = tmp;
        }
        res = t2 * Math2.exp(-x2 * x2 + 0.5 * (cof[0] + ty * d) - dd2);
        return isneg ? res - 1 : 1 - res;
      };
      jStat2.erfc = function erfc(x2) {
        return 1 - jStat2.erf(x2);
      };
      jStat2.erfcinv = function erfcinv(p2) {
        var j = 0;
        var x2, err, t2, pp;
        if (p2 >= 2)
          return -100;
        if (p2 <= 0)
          return 100;
        pp = p2 < 1 ? p2 : 2 - p2;
        t2 = Math2.sqrt(-2 * Math2.log(pp / 2));
        x2 = -0.70711 * ((2.30753 + t2 * 0.27061) / (1 + t2 * (0.99229 + t2 * 0.04481)) - t2);
        for (; j < 2; j++) {
          err = jStat2.erfc(x2) - pp;
          x2 += err / (1.1283791670955126 * Math2.exp(-x2 * x2) - x2 * err);
        }
        return p2 < 1 ? x2 : -x2;
      };
      jStat2.ibetainv = function ibetainv(p2, a, b) {
        var EPS = 1e-8;
        var a1 = a - 1;
        var b1 = b - 1;
        var j = 0;
        var lna, lnb, pp, t2, u2, err, x2, al, h, w, afac;
        if (p2 <= 0)
          return 0;
        if (p2 >= 1)
          return 1;
        if (a >= 1 && b >= 1) {
          pp = p2 < 0.5 ? p2 : 1 - p2;
          t2 = Math2.sqrt(-2 * Math2.log(pp));
          x2 = (2.30753 + t2 * 0.27061) / (1 + t2 * (0.99229 + t2 * 0.04481)) - t2;
          if (p2 < 0.5)
            x2 = -x2;
          al = (x2 * x2 - 3) / 6;
          h = 2 / (1 / (2 * a - 1) + 1 / (2 * b - 1));
          w = x2 * Math2.sqrt(al + h) / h - (1 / (2 * b - 1) - 1 / (2 * a - 1)) * (al + 5 / 6 - 2 / (3 * h));
          x2 = a / (a + b * Math2.exp(2 * w));
        } else {
          lna = Math2.log(a / (a + b));
          lnb = Math2.log(b / (a + b));
          t2 = Math2.exp(a * lna) / a;
          u2 = Math2.exp(b * lnb) / b;
          w = t2 + u2;
          if (p2 < t2 / w)
            x2 = Math2.pow(a * w * p2, 1 / a);
          else
            x2 = 1 - Math2.pow(b * w * (1 - p2), 1 / b);
        }
        afac = -jStat2.gammaln(a) - jStat2.gammaln(b) + jStat2.gammaln(a + b);
        for (; j < 10; j++) {
          if (x2 === 0 || x2 === 1)
            return x2;
          err = jStat2.ibeta(x2, a, b) - p2;
          t2 = Math2.exp(a1 * Math2.log(x2) + b1 * Math2.log(1 - x2) + afac);
          u2 = err / t2;
          x2 -= t2 = u2 / (1 - 0.5 * Math2.min(1, u2 * (a1 / x2 - b1 / (1 - x2))));
          if (x2 <= 0)
            x2 = 0.5 * (x2 + t2);
          if (x2 >= 1)
            x2 = 0.5 * (x2 + t2 + 1);
          if (Math2.abs(t2) < EPS * x2 && j > 0)
            break;
        }
        return x2;
      };
      jStat2.ibeta = function ibeta(x2, a, b) {
        var bt = x2 === 0 || x2 === 1 ? 0 : Math2.exp(jStat2.gammaln(a + b) - jStat2.gammaln(a) - jStat2.gammaln(b) + a * Math2.log(x2) + b * Math2.log(1 - x2));
        if (x2 < 0 || x2 > 1)
          return false;
        if (x2 < (a + 1) / (a + b + 2))
          return bt * jStat2.betacf(x2, a, b) / a;
        return 1 - bt * jStat2.betacf(1 - x2, b, a) / b;
      };
      jStat2.randn = function randn(n2, m2) {
        var u2, v2, x2, y2, q2;
        if (!m2)
          m2 = n2;
        if (n2)
          return jStat2.create(n2, m2, function() {
            return jStat2.randn();
          });
        do {
          u2 = jStat2._random_fn();
          v2 = 1.7156 * (jStat2._random_fn() - 0.5);
          x2 = u2 - 0.449871;
          y2 = Math2.abs(v2) + 0.386595;
          q2 = x2 * x2 + y2 * (0.196 * y2 - 0.25472 * x2);
        } while (q2 > 0.27597 && (q2 > 0.27846 || v2 * v2 > -4 * Math2.log(u2) * u2 * u2));
        return v2 / u2;
      };
      jStat2.randg = function randg(shape, n2, m2) {
        var oalph = shape;
        var a1, a2, u2, v2, x2, mat;
        if (!m2)
          m2 = n2;
        if (!shape)
          shape = 1;
        if (n2) {
          mat = jStat2.zeros(n2, m2);
          mat.alter(function() {
            return jStat2.randg(shape);
          });
          return mat;
        }
        if (shape < 1)
          shape += 1;
        a1 = shape - 1 / 3;
        a2 = 1 / Math2.sqrt(9 * a1);
        do {
          do {
            x2 = jStat2.randn();
            v2 = 1 + a2 * x2;
          } while (v2 <= 0);
          v2 = v2 * v2 * v2;
          u2 = jStat2._random_fn();
        } while (u2 > 1 - 0.331 * Math2.pow(x2, 4) && Math2.log(u2) > 0.5 * x2 * x2 + a1 * (1 - v2 + Math2.log(v2)));
        if (shape == oalph)
          return a1 * v2;
        do {
          u2 = jStat2._random_fn();
        } while (u2 === 0);
        return Math2.pow(u2, 1 / oalph) * a1 * v2;
      };
      (function(funcs) {
        for (var i = 0; i < funcs.length; i++)
          (function(passfunc) {
            jStat2.fn[passfunc] = function() {
              return jStat2(jStat2.map(this, function(value) {
                return jStat2[passfunc](value);
              }));
            };
          })(funcs[i]);
      })("gammaln gammafn factorial factorialln".split(" "));
      (function(funcs) {
        for (var i = 0; i < funcs.length; i++)
          (function(passfunc) {
            jStat2.fn[passfunc] = function() {
              return jStat2(jStat2[passfunc].apply(null, arguments));
            };
          })(funcs[i]);
      })("randn".split(" "));
    })(jStat, Math);
    (function(jStat2, Math2) {
      (function(list) {
        for (var i = 0; i < list.length; i++)
          (function(func2) {
            jStat2[func2] = function f(a, b, c) {
              if (!(this instanceof f))
                return new f(a, b, c);
              this._a = a;
              this._b = b;
              this._c = c;
              return this;
            };
            jStat2.fn[func2] = function(a, b, c) {
              var newthis = jStat2[func2](a, b, c);
              newthis.data = this;
              return newthis;
            };
            jStat2[func2].prototype.sample = function(arr) {
              var a = this._a;
              var b = this._b;
              var c = this._c;
              if (arr)
                return jStat2.alter(arr, function() {
                  return jStat2[func2].sample(a, b, c);
                });
              else
                return jStat2[func2].sample(a, b, c);
            };
            (function(vals) {
              for (var i2 = 0; i2 < vals.length; i2++)
                (function(fnfunc) {
                  jStat2[func2].prototype[fnfunc] = function(x2) {
                    var a = this._a;
                    var b = this._b;
                    var c = this._c;
                    if (!x2 && x2 !== 0)
                      x2 = this.data;
                    if (typeof x2 !== "number") {
                      return jStat2.fn.map.call(x2, function(x3) {
                        return jStat2[func2][fnfunc](x3, a, b, c);
                      });
                    }
                    return jStat2[func2][fnfunc](x2, a, b, c);
                  };
                })(vals[i2]);
            })("pdf cdf inv".split(" "));
            (function(vals) {
              for (var i2 = 0; i2 < vals.length; i2++)
                (function(fnfunc) {
                  jStat2[func2].prototype[fnfunc] = function() {
                    return jStat2[func2][fnfunc](this._a, this._b, this._c);
                  };
                })(vals[i2]);
            })("mean median mode variance".split(" "));
          })(list[i]);
      })("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" "));
      jStat2.extend(jStat2.beta, {
        pdf: function pdf(x2, alpha, beta) {
          if (x2 > 1 || x2 < 0)
            return 0;
          if (alpha == 1 && beta == 1)
            return 1;
          if (alpha < 512 && beta < 512) {
            return Math2.pow(x2, alpha - 1) * Math2.pow(1 - x2, beta - 1) / jStat2.betafn(alpha, beta);
          } else {
            return Math2.exp((alpha - 1) * Math2.log(x2) + (beta - 1) * Math2.log(1 - x2) - jStat2.betaln(alpha, beta));
          }
        },
        cdf: function cdf(x2, alpha, beta) {
          return x2 > 1 || x2 < 0 ? (x2 > 1) * 1 : jStat2.ibeta(x2, alpha, beta);
        },
        inv: function inv(x2, alpha, beta) {
          return jStat2.ibetainv(x2, alpha, beta);
        },
        mean: function mean(alpha, beta) {
          return alpha / (alpha + beta);
        },
        median: function median(alpha, beta) {
          return jStat2.ibetainv(0.5, alpha, beta);
        },
        mode: function mode(alpha, beta) {
          return (alpha - 1) / (alpha + beta - 2);
        },
        sample: function sample(alpha, beta) {
          var u2 = jStat2.randg(alpha);
          return u2 / (u2 + jStat2.randg(beta));
        },
        variance: function variance(alpha, beta) {
          return alpha * beta / (Math2.pow(alpha + beta, 2) * (alpha + beta + 1));
        }
      });
      jStat2.extend(jStat2.centralF, {
        pdf: function pdf(x2, df1, df2) {
          var p2, q2, f;
          if (x2 < 0)
            return 0;
          if (df1 <= 2) {
            if (x2 === 0 && df1 < 2) {
              return Infinity;
            }
            if (x2 === 0 && df1 === 2) {
              return 1;
            }
            return 1 / jStat2.betafn(df1 / 2, df2 / 2) * Math2.pow(df1 / df2, df1 / 2) * Math2.pow(x2, df1 / 2 - 1) * Math2.pow(1 + df1 / df2 * x2, -(df1 + df2) / 2);
          }
          p2 = df1 * x2 / (df2 + x2 * df1);
          q2 = df2 / (df2 + x2 * df1);
          f = df1 * q2 / 2;
          return f * jStat2.binomial.pdf((df1 - 2) / 2, (df1 + df2 - 2) / 2, p2);
        },
        cdf: function cdf(x2, df1, df2) {
          if (x2 < 0)
            return 0;
          return jStat2.ibeta(df1 * x2 / (df1 * x2 + df2), df1 / 2, df2 / 2);
        },
        inv: function inv(x2, df1, df2) {
          return df2 / (df1 * (1 / jStat2.ibetainv(x2, df1 / 2, df2 / 2) - 1));
        },
        mean: function mean(df1, df2) {
          return df2 > 2 ? df2 / (df2 - 2) : void 0;
        },
        mode: function mode(df1, df2) {
          return df1 > 2 ? df2 * (df1 - 2) / (df1 * (df2 + 2)) : void 0;
        },
        sample: function sample(df1, df2) {
          var x1 = jStat2.randg(df1 / 2) * 2;
          var x2 = jStat2.randg(df2 / 2) * 2;
          return x1 / df1 / (x2 / df2);
        },
        variance: function variance(df1, df2) {
          if (df2 <= 4)
            return void 0;
          return 2 * df2 * df2 * (df1 + df2 - 2) / (df1 * (df2 - 2) * (df2 - 2) * (df2 - 4));
        }
      });
      jStat2.extend(jStat2.cauchy, {
        pdf: function pdf(x2, local, scale) {
          if (scale < 0) {
            return 0;
          }
          return scale / (Math2.pow(x2 - local, 2) + Math2.pow(scale, 2)) / Math2.PI;
        },
        cdf: function cdf(x2, local, scale) {
          return Math2.atan((x2 - local) / scale) / Math2.PI + 0.5;
        },
        inv: function(p2, local, scale) {
          return local + scale * Math2.tan(Math2.PI * (p2 - 0.5));
        },
        median: function median(local) {
          return local;
        },
        mode: function mode(local) {
          return local;
        },
        sample: function sample(local, scale) {
          return jStat2.randn() * Math2.sqrt(1 / (2 * jStat2.randg(0.5))) * scale + local;
        }
      });
      jStat2.extend(jStat2.chisquare, {
        pdf: function pdf(x2, dof) {
          if (x2 < 0)
            return 0;
          return x2 === 0 && dof === 2 ? 0.5 : Math2.exp((dof / 2 - 1) * Math2.log(x2) - x2 / 2 - dof / 2 * Math2.log(2) - jStat2.gammaln(dof / 2));
        },
        cdf: function cdf(x2, dof) {
          if (x2 < 0)
            return 0;
          return jStat2.lowRegGamma(dof / 2, x2 / 2);
        },
        inv: function(p2, dof) {
          return 2 * jStat2.gammapinv(p2, 0.5 * dof);
        },
        mean: function(dof) {
          return dof;
        },
        median: function median(dof) {
          return dof * Math2.pow(1 - 2 / (9 * dof), 3);
        },
        mode: function mode(dof) {
          return dof - 2 > 0 ? dof - 2 : 0;
        },
        sample: function sample(dof) {
          return jStat2.randg(dof / 2) * 2;
        },
        variance: function variance(dof) {
          return 2 * dof;
        }
      });
      jStat2.extend(jStat2.exponential, {
        pdf: function pdf(x2, rate) {
          return x2 < 0 ? 0 : rate * Math2.exp(-rate * x2);
        },
        cdf: function cdf(x2, rate) {
          return x2 < 0 ? 0 : 1 - Math2.exp(-rate * x2);
        },
        inv: function(p2, rate) {
          return -Math2.log(1 - p2) / rate;
        },
        mean: function(rate) {
          return 1 / rate;
        },
        median: function(rate) {
          return 1 / rate * Math2.log(2);
        },
        mode: function mode() {
          return 0;
        },
        sample: function sample(rate) {
          return -1 / rate * Math2.log(jStat2._random_fn());
        },
        variance: function(rate) {
          return Math2.pow(rate, -2);
        }
      });
      jStat2.extend(jStat2.gamma, {
        pdf: function pdf(x2, shape, scale) {
          if (x2 < 0)
            return 0;
          return x2 === 0 && shape === 1 ? 1 / scale : Math2.exp((shape - 1) * Math2.log(x2) - x2 / scale - jStat2.gammaln(shape) - shape * Math2.log(scale));
        },
        cdf: function cdf(x2, shape, scale) {
          if (x2 < 0)
            return 0;
          return jStat2.lowRegGamma(shape, x2 / scale);
        },
        inv: function(p2, shape, scale) {
          return jStat2.gammapinv(p2, shape) * scale;
        },
        mean: function(shape, scale) {
          return shape * scale;
        },
        mode: function mode(shape, scale) {
          if (shape > 1)
            return (shape - 1) * scale;
          return void 0;
        },
        sample: function sample(shape, scale) {
          return jStat2.randg(shape) * scale;
        },
        variance: function variance(shape, scale) {
          return shape * scale * scale;
        }
      });
      jStat2.extend(jStat2.invgamma, {
        pdf: function pdf(x2, shape, scale) {
          if (x2 <= 0)
            return 0;
          return Math2.exp(-(shape + 1) * Math2.log(x2) - scale / x2 - jStat2.gammaln(shape) + shape * Math2.log(scale));
        },
        cdf: function cdf(x2, shape, scale) {
          if (x2 <= 0)
            return 0;
          return 1 - jStat2.lowRegGamma(shape, scale / x2);
        },
        inv: function(p2, shape, scale) {
          return scale / jStat2.gammapinv(1 - p2, shape);
        },
        mean: function(shape, scale) {
          return shape > 1 ? scale / (shape - 1) : void 0;
        },
        mode: function mode(shape, scale) {
          return scale / (shape + 1);
        },
        sample: function sample(shape, scale) {
          return scale / jStat2.randg(shape);
        },
        variance: function variance(shape, scale) {
          if (shape <= 2)
            return void 0;
          return scale * scale / ((shape - 1) * (shape - 1) * (shape - 2));
        }
      });
      jStat2.extend(jStat2.kumaraswamy, {
        pdf: function pdf(x2, alpha, beta) {
          if (x2 === 0 && alpha === 1)
            return beta;
          else if (x2 === 1 && beta === 1)
            return alpha;
          return Math2.exp(Math2.log(alpha) + Math2.log(beta) + (alpha - 1) * Math2.log(x2) + (beta - 1) * Math2.log(1 - Math2.pow(x2, alpha)));
        },
        cdf: function cdf(x2, alpha, beta) {
          if (x2 < 0)
            return 0;
          else if (x2 > 1)
            return 1;
          return 1 - Math2.pow(1 - Math2.pow(x2, alpha), beta);
        },
        inv: function inv(p2, alpha, beta) {
          return Math2.pow(1 - Math2.pow(1 - p2, 1 / beta), 1 / alpha);
        },
        mean: function(alpha, beta) {
          return beta * jStat2.gammafn(1 + 1 / alpha) * jStat2.gammafn(beta) / jStat2.gammafn(1 + 1 / alpha + beta);
        },
        median: function median(alpha, beta) {
          return Math2.pow(1 - Math2.pow(2, -1 / beta), 1 / alpha);
        },
        mode: function mode(alpha, beta) {
          if (!(alpha >= 1 && beta >= 1 && (alpha !== 1 && beta !== 1)))
            return void 0;
          return Math2.pow((alpha - 1) / (alpha * beta - 1), 1 / alpha);
        },
        variance: function variance() {
          throw new Error("variance not yet implemented");
        }
      });
      jStat2.extend(jStat2.lognormal, {
        pdf: function pdf(x2, mu, sigma) {
          if (x2 <= 0)
            return 0;
          return Math2.exp(-Math2.log(x2) - 0.5 * Math2.log(2 * Math2.PI) - Math2.log(sigma) - Math2.pow(Math2.log(x2) - mu, 2) / (2 * sigma * sigma));
        },
        cdf: function cdf(x2, mu, sigma) {
          if (x2 < 0)
            return 0;
          return 0.5 + 0.5 * jStat2.erf((Math2.log(x2) - mu) / Math2.sqrt(2 * sigma * sigma));
        },
        inv: function(p2, mu, sigma) {
          return Math2.exp(-1.4142135623730951 * sigma * jStat2.erfcinv(2 * p2) + mu);
        },
        mean: function mean(mu, sigma) {
          return Math2.exp(mu + sigma * sigma / 2);
        },
        median: function median(mu) {
          return Math2.exp(mu);
        },
        mode: function mode(mu, sigma) {
          return Math2.exp(mu - sigma * sigma);
        },
        sample: function sample(mu, sigma) {
          return Math2.exp(jStat2.randn() * sigma + mu);
        },
        variance: function variance(mu, sigma) {
          return (Math2.exp(sigma * sigma) - 1) * Math2.exp(2 * mu + sigma * sigma);
        }
      });
      jStat2.extend(jStat2.noncentralt, {
        pdf: function pdf(x2, dof, ncp) {
          var tol = 1e-14;
          if (Math2.abs(ncp) < tol)
            return jStat2.studentt.pdf(x2, dof);
          if (Math2.abs(x2) < tol) {
            return Math2.exp(jStat2.gammaln((dof + 1) / 2) - ncp * ncp / 2 - 0.5 * Math2.log(Math2.PI * dof) - jStat2.gammaln(dof / 2));
          }
          return dof / x2 * (jStat2.noncentralt.cdf(x2 * Math2.sqrt(1 + 2 / dof), dof + 2, ncp) - jStat2.noncentralt.cdf(x2, dof, ncp));
        },
        cdf: function cdf(x2, dof, ncp) {
          var tol = 1e-14;
          var min_iterations = 200;
          if (Math2.abs(ncp) < tol)
            return jStat2.studentt.cdf(x2, dof);
          var flip = false;
          if (x2 < 0) {
            flip = true;
            ncp = -ncp;
          }
          var prob = jStat2.normal.cdf(-ncp, 0, 1);
          var value = tol + 1;
          var lastvalue = value;
          var y2 = x2 * x2 / (x2 * x2 + dof);
          var j = 0;
          var p2 = Math2.exp(-ncp * ncp / 2);
          var q2 = Math2.exp(-ncp * ncp / 2 - 0.5 * Math2.log(2) - jStat2.gammaln(3 / 2)) * ncp;
          while (j < min_iterations || lastvalue > tol || value > tol) {
            lastvalue = value;
            if (j > 0) {
              p2 *= ncp * ncp / (2 * j);
              q2 *= ncp * ncp / (2 * (j + 1 / 2));
            }
            value = p2 * jStat2.beta.cdf(y2, j + 0.5, dof / 2) + q2 * jStat2.beta.cdf(y2, j + 1, dof / 2);
            prob += 0.5 * value;
            j++;
          }
          return flip ? 1 - prob : prob;
        }
      });
      jStat2.extend(jStat2.normal, {
        pdf: function pdf(x2, mean, std) {
          return Math2.exp(-0.5 * Math2.log(2 * Math2.PI) - Math2.log(std) - Math2.pow(x2 - mean, 2) / (2 * std * std));
        },
        cdf: function cdf(x2, mean, std) {
          return 0.5 * (1 + jStat2.erf((x2 - mean) / Math2.sqrt(2 * std * std)));
        },
        inv: function(p2, mean, std) {
          return -1.4142135623730951 * std * jStat2.erfcinv(2 * p2) + mean;
        },
        mean: function(mean) {
          return mean;
        },
        median: function median(mean) {
          return mean;
        },
        mode: function(mean) {
          return mean;
        },
        sample: function sample(mean, std) {
          return jStat2.randn() * std + mean;
        },
        variance: function(mean, std) {
          return std * std;
        }
      });
      jStat2.extend(jStat2.pareto, {
        pdf: function pdf(x2, scale, shape) {
          if (x2 < scale)
            return 0;
          return shape * Math2.pow(scale, shape) / Math2.pow(x2, shape + 1);
        },
        cdf: function cdf(x2, scale, shape) {
          if (x2 < scale)
            return 0;
          return 1 - Math2.pow(scale / x2, shape);
        },
        inv: function inv(p2, scale, shape) {
          return scale / Math2.pow(1 - p2, 1 / shape);
        },
        mean: function mean(scale, shape) {
          if (shape <= 1)
            return void 0;
          return shape * Math2.pow(scale, shape) / (shape - 1);
        },
        median: function median(scale, shape) {
          return scale * (shape * Math2.SQRT2);
        },
        mode: function mode(scale) {
          return scale;
        },
        variance: function(scale, shape) {
          if (shape <= 2)
            return void 0;
          return scale * scale * shape / (Math2.pow(shape - 1, 2) * (shape - 2));
        }
      });
      jStat2.extend(jStat2.studentt, {
        pdf: function pdf(x2, dof) {
          dof = dof > 1e100 ? 1e100 : dof;
          return 1 / (Math2.sqrt(dof) * jStat2.betafn(0.5, dof / 2)) * Math2.pow(1 + x2 * x2 / dof, -((dof + 1) / 2));
        },
        cdf: function cdf(x2, dof) {
          var dof2 = dof / 2;
          return jStat2.ibeta((x2 + Math2.sqrt(x2 * x2 + dof)) / (2 * Math2.sqrt(x2 * x2 + dof)), dof2, dof2);
        },
        inv: function(p2, dof) {
          var x2 = jStat2.ibetainv(2 * Math2.min(p2, 1 - p2), 0.5 * dof, 0.5);
          x2 = Math2.sqrt(dof * (1 - x2) / x2);
          return p2 > 0.5 ? x2 : -x2;
        },
        mean: function mean(dof) {
          return dof > 1 ? 0 : void 0;
        },
        median: function median() {
          return 0;
        },
        mode: function mode() {
          return 0;
        },
        sample: function sample(dof) {
          return jStat2.randn() * Math2.sqrt(dof / (2 * jStat2.randg(dof / 2)));
        },
        variance: function variance(dof) {
          return dof > 2 ? dof / (dof - 2) : dof > 1 ? Infinity : void 0;
        }
      });
      jStat2.extend(jStat2.weibull, {
        pdf: function pdf(x2, scale, shape) {
          if (x2 < 0 || scale < 0 || shape < 0)
            return 0;
          return shape / scale * Math2.pow(x2 / scale, shape - 1) * Math2.exp(-Math2.pow(x2 / scale, shape));
        },
        cdf: function cdf(x2, scale, shape) {
          return x2 < 0 ? 0 : 1 - Math2.exp(-Math2.pow(x2 / scale, shape));
        },
        inv: function(p2, scale, shape) {
          return scale * Math2.pow(-Math2.log(1 - p2), 1 / shape);
        },
        mean: function(scale, shape) {
          return scale * jStat2.gammafn(1 + 1 / shape);
        },
        median: function median(scale, shape) {
          return scale * Math2.pow(Math2.log(2), 1 / shape);
        },
        mode: function mode(scale, shape) {
          if (shape <= 1)
            return 0;
          return scale * Math2.pow((shape - 1) / shape, 1 / shape);
        },
        sample: function sample(scale, shape) {
          return scale * Math2.pow(-Math2.log(jStat2._random_fn()), 1 / shape);
        },
        variance: function variance(scale, shape) {
          return scale * scale * jStat2.gammafn(1 + 2 / shape) - Math2.pow(jStat2.weibull.mean(scale, shape), 2);
        }
      });
      jStat2.extend(jStat2.uniform, {
        pdf: function pdf(x2, a, b) {
          return x2 < a || x2 > b ? 0 : 1 / (b - a);
        },
        cdf: function cdf(x2, a, b) {
          if (x2 < a)
            return 0;
          else if (x2 < b)
            return (x2 - a) / (b - a);
          return 1;
        },
        inv: function(p2, a, b) {
          return a + p2 * (b - a);
        },
        mean: function mean(a, b) {
          return 0.5 * (a + b);
        },
        median: function median(a, b) {
          return jStat2.mean(a, b);
        },
        mode: function mode() {
          throw new Error("mode is not yet implemented");
        },
        sample: function sample(a, b) {
          return a / 2 + b / 2 + (b / 2 - a / 2) * (2 * jStat2._random_fn() - 1);
        },
        variance: function variance(a, b) {
          return Math2.pow(b - a, 2) / 12;
        }
      });
      function betinc(x2, a, b, eps) {
        var a0 = 0;
        var b0 = 1;
        var a1 = 1;
        var b1 = 1;
        var m9 = 0;
        var a2 = 0;
        var c9;
        while (Math2.abs((a1 - a2) / a1) > eps) {
          a2 = a1;
          c9 = -(a + m9) * (a + b + m9) * x2 / (a + 2 * m9) / (a + 2 * m9 + 1);
          a0 = a1 + c9 * a0;
          b0 = b1 + c9 * b0;
          m9 = m9 + 1;
          c9 = m9 * (b - m9) * x2 / (a + 2 * m9 - 1) / (a + 2 * m9);
          a1 = a0 + c9 * a1;
          b1 = b0 + c9 * b1;
          a0 = a0 / b1;
          b0 = b0 / b1;
          a1 = a1 / b1;
          b1 = 1;
        }
        return a1 / a;
      }
      jStat2.extend(jStat2.binomial, {
        pdf: function pdf(k, n2, p2) {
          return p2 === 0 || p2 === 1 ? n2 * p2 === k ? 1 : 0 : jStat2.combination(n2, k) * Math2.pow(p2, k) * Math2.pow(1 - p2, n2 - k);
        },
        cdf: function cdf(x2, n2, p2) {
          var betacdf;
          var eps = 1e-10;
          if (x2 < 0)
            return 0;
          if (x2 >= n2)
            return 1;
          if (p2 < 0 || p2 > 1 || n2 <= 0)
            return NaN;
          x2 = Math2.floor(x2);
          var z2 = p2;
          var a = x2 + 1;
          var b = n2 - x2;
          var s = a + b;
          var bt = Math2.exp(jStat2.gammaln(s) - jStat2.gammaln(b) - jStat2.gammaln(a) + a * Math2.log(z2) + b * Math2.log(1 - z2));
          if (z2 < (a + 1) / (s + 2))
            betacdf = bt * betinc(z2, a, b, eps);
          else
            betacdf = 1 - bt * betinc(1 - z2, b, a, eps);
          return Math2.round((1 - betacdf) * (1 / eps)) / (1 / eps);
        }
      });
      jStat2.extend(jStat2.negbin, {
        pdf: function pdf(k, r2, p2) {
          if (k !== k >>> 0)
            return false;
          if (k < 0)
            return 0;
          return jStat2.combination(k + r2 - 1, r2 - 1) * Math2.pow(1 - p2, k) * Math2.pow(p2, r2);
        },
        cdf: function cdf(x2, r2, p2) {
          var sum = 0, k = 0;
          if (x2 < 0)
            return 0;
          for (; k <= x2; k++) {
            sum += jStat2.negbin.pdf(k, r2, p2);
          }
          return sum;
        }
      });
      jStat2.extend(jStat2.hypgeom, {
        pdf: function pdf(k, N2, m2, n2) {
          if (k !== k | 0) {
            return false;
          } else if (k < 0 || k < m2 - (N2 - n2)) {
            return 0;
          } else if (k > n2 || k > m2) {
            return 0;
          } else if (m2 * 2 > N2) {
            if (n2 * 2 > N2) {
              return jStat2.hypgeom.pdf(N2 - m2 - n2 + k, N2, N2 - m2, N2 - n2);
            } else {
              return jStat2.hypgeom.pdf(n2 - k, N2, N2 - m2, n2);
            }
          } else if (n2 * 2 > N2) {
            return jStat2.hypgeom.pdf(m2 - k, N2, m2, N2 - n2);
          } else if (m2 < n2) {
            return jStat2.hypgeom.pdf(k, N2, n2, m2);
          } else {
            var scaledPDF = 1;
            var samplesDone = 0;
            for (var i = 0; i < k; i++) {
              while (scaledPDF > 1 && samplesDone < n2) {
                scaledPDF *= 1 - m2 / (N2 - samplesDone);
                samplesDone++;
              }
              scaledPDF *= (n2 - i) * (m2 - i) / ((i + 1) * (N2 - m2 - n2 + i + 1));
            }
            for (; samplesDone < n2; samplesDone++) {
              scaledPDF *= 1 - m2 / (N2 - samplesDone);
            }
            return Math2.min(1, Math2.max(0, scaledPDF));
          }
        },
        cdf: function cdf(x2, N2, m2, n2) {
          if (x2 < 0 || x2 < m2 - (N2 - n2)) {
            return 0;
          } else if (x2 >= n2 || x2 >= m2) {
            return 1;
          } else if (m2 * 2 > N2) {
            if (n2 * 2 > N2) {
              return jStat2.hypgeom.cdf(N2 - m2 - n2 + x2, N2, N2 - m2, N2 - n2);
            } else {
              return 1 - jStat2.hypgeom.cdf(n2 - x2 - 1, N2, N2 - m2, n2);
            }
          } else if (n2 * 2 > N2) {
            return 1 - jStat2.hypgeom.cdf(m2 - x2 - 1, N2, m2, N2 - n2);
          } else if (m2 < n2) {
            return jStat2.hypgeom.cdf(x2, N2, n2, m2);
          } else {
            var scaledCDF = 1;
            var scaledPDF = 1;
            var samplesDone = 0;
            for (var i = 0; i < x2; i++) {
              while (scaledCDF > 1 && samplesDone < n2) {
                var factor = 1 - m2 / (N2 - samplesDone);
                scaledPDF *= factor;
                scaledCDF *= factor;
                samplesDone++;
              }
              scaledPDF *= (n2 - i) * (m2 - i) / ((i + 1) * (N2 - m2 - n2 + i + 1));
              scaledCDF += scaledPDF;
            }
            for (; samplesDone < n2; samplesDone++) {
              scaledCDF *= 1 - m2 / (N2 - samplesDone);
            }
            return Math2.min(1, Math2.max(0, scaledCDF));
          }
        }
      });
      jStat2.extend(jStat2.poisson, {
        pdf: function pdf(k, l2) {
          if (l2 < 0 || k % 1 !== 0 || k < 0) {
            return 0;
          }
          return Math2.pow(l2, k) * Math2.exp(-l2) / jStat2.factorial(k);
        },
        cdf: function cdf(x2, l2) {
          var sumarr = [], k = 0;
          if (x2 < 0)
            return 0;
          for (; k <= x2; k++) {
            sumarr.push(jStat2.poisson.pdf(k, l2));
          }
          return jStat2.sum(sumarr);
        },
        mean: function(l2) {
          return l2;
        },
        variance: function(l2) {
          return l2;
        },
        sampleSmall: function sampleSmall(l2) {
          var p2 = 1, k = 0, L2 = Math2.exp(-l2);
          do {
            k++;
            p2 *= jStat2._random_fn();
          } while (p2 > L2);
          return k - 1;
        },
        sampleLarge: function sampleLarge(l2) {
          var lam = l2;
          var k;
          var U2, V2, slam, loglam, a, b, invalpha, vr, us;
          slam = Math2.sqrt(lam);
          loglam = Math2.log(lam);
          b = 0.931 + 2.53 * slam;
          a = -0.059 + 0.02483 * b;
          invalpha = 1.1239 + 1.1328 / (b - 3.4);
          vr = 0.9277 - 3.6224 / (b - 2);
          while (1) {
            U2 = Math2.random() - 0.5;
            V2 = Math2.random();
            us = 0.5 - Math2.abs(U2);
            k = Math2.floor((2 * a / us + b) * U2 + lam + 0.43);
            if (us >= 0.07 && V2 <= vr) {
              return k;
            }
            if (k < 0 || us < 0.013 && V2 > us) {
              continue;
            }
            if (Math2.log(V2) + Math2.log(invalpha) - Math2.log(a / (us * us) + b) <= -lam + k * loglam - jStat2.loggam(k + 1)) {
              return k;
            }
          }
        },
        sample: function sample(l2) {
          if (l2 < 10)
            return this.sampleSmall(l2);
          else
            return this.sampleLarge(l2);
        }
      });
      jStat2.extend(jStat2.triangular, {
        pdf: function pdf(x2, a, b, c) {
          if (b <= a || c < a || c > b) {
            return NaN;
          } else {
            if (x2 < a || x2 > b) {
              return 0;
            } else if (x2 < c) {
              return 2 * (x2 - a) / ((b - a) * (c - a));
            } else if (x2 === c) {
              return 2 / (b - a);
            } else {
              return 2 * (b - x2) / ((b - a) * (b - c));
            }
          }
        },
        cdf: function cdf(x2, a, b, c) {
          if (b <= a || c < a || c > b)
            return NaN;
          if (x2 <= a)
            return 0;
          else if (x2 >= b)
            return 1;
          if (x2 <= c)
            return Math2.pow(x2 - a, 2) / ((b - a) * (c - a));
          else
            return 1 - Math2.pow(b - x2, 2) / ((b - a) * (b - c));
        },
        inv: function inv(p2, a, b, c) {
          if (b <= a || c < a || c > b) {
            return NaN;
          } else {
            if (p2 <= (c - a) / (b - a)) {
              return a + (b - a) * Math2.sqrt(p2 * ((c - a) / (b - a)));
            } else {
              return a + (b - a) * (1 - Math2.sqrt((1 - p2) * (1 - (c - a) / (b - a))));
            }
          }
        },
        mean: function mean(a, b, c) {
          return (a + b + c) / 3;
        },
        median: function median(a, b, c) {
          if (c <= (a + b) / 2) {
            return b - Math2.sqrt((b - a) * (b - c)) / Math2.sqrt(2);
          } else if (c > (a + b) / 2) {
            return a + Math2.sqrt((b - a) * (c - a)) / Math2.sqrt(2);
          }
        },
        mode: function mode(a, b, c) {
          return c;
        },
        sample: function sample(a, b, c) {
          var u2 = jStat2._random_fn();
          if (u2 < (c - a) / (b - a))
            return a + Math2.sqrt(u2 * (b - a) * (c - a));
          return b - Math2.sqrt((1 - u2) * (b - a) * (b - c));
        },
        variance: function variance(a, b, c) {
          return (a * a + b * b + c * c - a * b - a * c - b * c) / 18;
        }
      });
      jStat2.extend(jStat2.arcsine, {
        pdf: function pdf(x2, a, b) {
          if (b <= a)
            return NaN;
          return x2 <= a || x2 >= b ? 0 : 2 / Math2.PI * Math2.pow(Math2.pow(b - a, 2) - Math2.pow(2 * x2 - a - b, 2), -0.5);
        },
        cdf: function cdf(x2, a, b) {
          if (x2 < a)
            return 0;
          else if (x2 < b)
            return 2 / Math2.PI * Math2.asin(Math2.sqrt((x2 - a) / (b - a)));
          return 1;
        },
        inv: function(p2, a, b) {
          return a + (0.5 - 0.5 * Math2.cos(Math2.PI * p2)) * (b - a);
        },
        mean: function mean(a, b) {
          if (b <= a)
            return NaN;
          return (a + b) / 2;
        },
        median: function median(a, b) {
          if (b <= a)
            return NaN;
          return (a + b) / 2;
        },
        mode: function mode() {
          throw new Error("mode is not yet implemented");
        },
        sample: function sample(a, b) {
          return (a + b) / 2 + (b - a) / 2 * Math2.sin(2 * Math2.PI * jStat2.uniform.sample(0, 1));
        },
        variance: function variance(a, b) {
          if (b <= a)
            return NaN;
          return Math2.pow(b - a, 2) / 8;
        }
      });
      function laplaceSign(x2) {
        return x2 / Math2.abs(x2);
      }
      jStat2.extend(jStat2.laplace, {
        pdf: function pdf(x2, mu, b) {
          return b <= 0 ? 0 : Math2.exp(-Math2.abs(x2 - mu) / b) / (2 * b);
        },
        cdf: function cdf(x2, mu, b) {
          if (b <= 0) {
            return 0;
          }
          if (x2 < mu) {
            return 0.5 * Math2.exp((x2 - mu) / b);
          } else {
            return 1 - 0.5 * Math2.exp(-(x2 - mu) / b);
          }
        },
        mean: function(mu) {
          return mu;
        },
        median: function(mu) {
          return mu;
        },
        mode: function(mu) {
          return mu;
        },
        variance: function(mu, b) {
          return 2 * b * b;
        },
        sample: function sample(mu, b) {
          var u2 = jStat2._random_fn() - 0.5;
          return mu - b * laplaceSign(u2) * Math2.log(1 - 2 * Math2.abs(u2));
        }
      });
      function tukeyWprob(w, rr, cc2) {
        var nleg = 12;
        var ihalf = 6;
        var C1 = -30;
        var C2 = -50;
        var C3 = 60;
        var bb2 = 8;
        var wlar = 3;
        var wincr1 = 2;
        var wincr2 = 3;
        var xleg = [
          0.9815606342467192,
          0.9041172563704749,
          0.7699026741943047,
          0.5873179542866175,
          0.3678314989981802,
          0.1252334085114689
        ];
        var aleg = [
          0.04717533638651183,
          0.10693932599531843,
          0.16007832854334622,
          0.20316742672306592,
          0.2334925365383548,
          0.24914704581340277
        ];
        var qsqz = w * 0.5;
        if (qsqz >= bb2)
          return 1;
        var pr_w = 2 * jStat2.normal.cdf(qsqz, 0, 1, 1, 0) - 1;
        if (pr_w >= Math2.exp(C2 / cc2))
          pr_w = Math2.pow(pr_w, cc2);
        else
          pr_w = 0;
        var wincr;
        if (w > wlar)
          wincr = wincr1;
        else
          wincr = wincr2;
        var blb = qsqz;
        var binc = (bb2 - qsqz) / wincr;
        var bub = blb + binc;
        var einsum = 0;
        var cc1 = cc2 - 1;
        for (var wi2 = 1; wi2 <= wincr; wi2++) {
          var elsum = 0;
          var a = 0.5 * (bub + blb);
          var b = 0.5 * (bub - blb);
          for (var jj2 = 1; jj2 <= nleg; jj2++) {
            var j, xx;
            if (ihalf < jj2) {
              j = nleg - jj2 + 1;
              xx = xleg[j - 1];
            } else {
              j = jj2;
              xx = -xleg[j - 1];
            }
            var c = b * xx;
            var ac2 = a + c;
            var qexpo = ac2 * ac2;
            if (qexpo > C3)
              break;
            var pplus = 2 * jStat2.normal.cdf(ac2, 0, 1, 1, 0);
            var pminus = 2 * jStat2.normal.cdf(ac2, w, 1, 1, 0);
            var rinsum = pplus * 0.5 - pminus * 0.5;
            if (rinsum >= Math2.exp(C1 / cc1)) {
              rinsum = aleg[j - 1] * Math2.exp(-(0.5 * qexpo)) * Math2.pow(rinsum, cc1);
              elsum += rinsum;
            }
          }
          elsum *= 2 * b * cc2 / Math2.sqrt(2 * Math2.PI);
          einsum += elsum;
          blb = bub;
          bub += binc;
        }
        pr_w += einsum;
        if (pr_w <= Math2.exp(C1 / rr))
          return 0;
        pr_w = Math2.pow(pr_w, rr);
        if (pr_w >= 1)
          return 1;
        return pr_w;
      }
      function tukeyQinv(p2, c, v2) {
        var p0 = 0.322232421088;
        var q0 = 0.099348462606;
        var p1 = -1;
        var q1 = 0.588581570495;
        var p22 = -0.342242088547;
        var q2 = 0.531103462366;
        var p3 = -0.204231210125;
        var q3 = 0.10353775285;
        var p4 = -453642210148e-16;
        var q4 = 0.0038560700634;
        var c1 = 0.8832;
        var c2 = 0.2368;
        var c3 = 1.214;
        var c4 = 1.208;
        var c5 = 1.4142;
        var vmax = 120;
        var ps = 0.5 - 0.5 * p2;
        var yi2 = Math2.sqrt(Math2.log(1 / (ps * ps)));
        var t2 = yi2 + ((((yi2 * p4 + p3) * yi2 + p22) * yi2 + p1) * yi2 + p0) / ((((yi2 * q4 + q3) * yi2 + q2) * yi2 + q1) * yi2 + q0);
        if (v2 < vmax)
          t2 += (t2 * t2 * t2 + t2) / v2 / 4;
        var q5 = c1 - c2 * t2;
        if (v2 < vmax)
          q5 += -c3 / v2 + c4 * t2 / v2;
        return t2 * (q5 * Math2.log(c - 1) + c5);
      }
      jStat2.extend(jStat2.tukey, {
        cdf: function cdf(q2, nmeans, df2) {
          var rr = 1;
          var cc2 = nmeans;
          var nlegq = 16;
          var ihalfq = 8;
          var eps1 = -30;
          var eps2 = 1e-14;
          var dhaf = 100;
          var dquar = 800;
          var deigh = 5e3;
          var dlarg = 25e3;
          var ulen1 = 1;
          var ulen2 = 0.5;
          var ulen3 = 0.25;
          var ulen4 = 0.125;
          var xlegq = [
            0.9894009349916499,
            0.9445750230732326,
            0.8656312023878318,
            0.755404408355003,
            0.6178762444026438,
            0.45801677765722737,
            0.2816035507792589,
            0.09501250983763744
          ];
          var alegq = [
            0.027152459411754096,
            0.062253523938647894,
            0.09515851168249279,
            0.12462897125553388,
            0.14959598881657674,
            0.16915651939500254,
            0.18260341504492358,
            0.1894506104550685
          ];
          if (q2 <= 0)
            return 0;
          if (df2 < 2 || rr < 1 || cc2 < 2)
            return NaN;
          if (!Number.isFinite(q2))
            return 1;
          if (df2 > dlarg)
            return tukeyWprob(q2, rr, cc2);
          var f2 = df2 * 0.5;
          var f2lf = f2 * Math2.log(df2) - df2 * Math2.log(2) - jStat2.gammaln(f2);
          var f21 = f2 - 1;
          var ff4 = df2 * 0.25;
          var ulen;
          if (df2 <= dhaf)
            ulen = ulen1;
          else if (df2 <= dquar)
            ulen = ulen2;
          else if (df2 <= deigh)
            ulen = ulen3;
          else
            ulen = ulen4;
          f2lf += Math2.log(ulen);
          var ans = 0;
          for (var i = 1; i <= 50; i++) {
            var otsum = 0;
            var twa1 = (2 * i - 1) * ulen;
            for (var jj2 = 1; jj2 <= nlegq; jj2++) {
              var j, t1;
              if (ihalfq < jj2) {
                j = jj2 - ihalfq - 1;
                t1 = f2lf + f21 * Math2.log(twa1 + xlegq[j] * ulen) - (xlegq[j] * ulen + twa1) * ff4;
              } else {
                j = jj2 - 1;
                t1 = f2lf + f21 * Math2.log(twa1 - xlegq[j] * ulen) + (xlegq[j] * ulen - twa1) * ff4;
              }
              var qsqz;
              if (t1 >= eps1) {
                if (ihalfq < jj2) {
                  qsqz = q2 * Math2.sqrt((xlegq[j] * ulen + twa1) * 0.5);
                } else {
                  qsqz = q2 * Math2.sqrt((-(xlegq[j] * ulen) + twa1) * 0.5);
                }
                var wprb = tukeyWprob(qsqz, rr, cc2);
                var rotsum = wprb * alegq[j] * Math2.exp(t1);
                otsum += rotsum;
              }
            }
            if (i * ulen >= 1 && otsum <= eps2)
              break;
            ans += otsum;
          }
          if (otsum > eps2) {
            throw new Error("tukey.cdf failed to converge");
          }
          if (ans > 1)
            ans = 1;
          return ans;
        },
        inv: function(p2, nmeans, df2) {
          var rr = 1;
          var cc2 = nmeans;
          var eps = 1e-4;
          var maxiter = 50;
          if (df2 < 2 || rr < 1 || cc2 < 2)
            return NaN;
          if (p2 < 0 || p2 > 1)
            return NaN;
          if (p2 === 0)
            return 0;
          if (p2 === 1)
            return Infinity;
          var x0 = tukeyQinv(p2, cc2, df2);
          var valx0 = jStat2.tukey.cdf(x0, nmeans, df2) - p2;
          var x1;
          if (valx0 > 0)
            x1 = Math2.max(0, x0 - 1);
          else
            x1 = x0 + 1;
          var valx1 = jStat2.tukey.cdf(x1, nmeans, df2) - p2;
          var ans;
          for (var iter = 1; iter < maxiter; iter++) {
            ans = x1 - valx1 * (x1 - x0) / (valx1 - valx0);
            valx0 = valx1;
            x0 = x1;
            if (ans < 0) {
              ans = 0;
              valx1 = -p2;
            }
            valx1 = jStat2.tukey.cdf(ans, nmeans, df2) - p2;
            x1 = ans;
            var xabs = Math2.abs(x1 - x0);
            if (xabs < eps)
              return ans;
          }
          throw new Error("tukey.inv failed to converge");
        }
      });
    })(jStat, Math);
    (function(jStat2, Math2) {
      var push = Array.prototype.push;
      var isArray2 = jStat2.utils.isArray;
      function isUsable(arg) {
        return isArray2(arg) || arg instanceof jStat2;
      }
      jStat2.extend({
        add: function add2(arr, arg) {
          if (isUsable(arg)) {
            if (!isUsable(arg[0]))
              arg = [arg];
            return jStat2.map(arr, function(value, row, col) {
              return value + arg[row][col];
            });
          }
          return jStat2.map(arr, function(value) {
            return value + arg;
          });
        },
        subtract: function subtract(arr, arg) {
          if (isUsable(arg)) {
            if (!isUsable(arg[0]))
              arg = [arg];
            return jStat2.map(arr, function(value, row, col) {
              return value - arg[row][col] || 0;
            });
          }
          return jStat2.map(arr, function(value) {
            return value - arg;
          });
        },
        divide: function divide(arr, arg) {
          if (isUsable(arg)) {
            if (!isUsable(arg[0]))
              arg = [arg];
            return jStat2.multiply(arr, jStat2.inv(arg));
          }
          return jStat2.map(arr, function(value) {
            return value / arg;
          });
        },
        multiply: function multiply(arr, arg) {
          var row, col, nrescols, sum, nrow, ncol, res, rescols;
          if (arr.length === void 0 && arg.length === void 0) {
            return arr * arg;
          }
          nrow = arr.length, ncol = arr[0].length, res = jStat2.zeros(nrow, nrescols = isUsable(arg) ? arg[0].length : ncol), rescols = 0;
          if (isUsable(arg)) {
            for (; rescols < nrescols; rescols++) {
              for (row = 0; row < nrow; row++) {
                sum = 0;
                for (col = 0; col < ncol; col++)
                  sum += arr[row][col] * arg[col][rescols];
                res[row][rescols] = sum;
              }
            }
            return nrow === 1 && rescols === 1 ? res[0][0] : res;
          }
          return jStat2.map(arr, function(value) {
            return value * arg;
          });
        },
        outer: function outer(A2, B2) {
          return jStat2.multiply(A2.map(function(t2) {
            return [t2];
          }), [B2]);
        },
        dot: function dot(arr, arg) {
          if (!isUsable(arr[0]))
            arr = [arr];
          if (!isUsable(arg[0]))
            arg = [arg];
          var left = arr[0].length === 1 && arr.length !== 1 ? jStat2.transpose(arr) : arr, right = arg[0].length === 1 && arg.length !== 1 ? jStat2.transpose(arg) : arg, res = [], row = 0, nrow = left.length, ncol = left[0].length, sum, col;
          for (; row < nrow; row++) {
            res[row] = [];
            sum = 0;
            for (col = 0; col < ncol; col++)
              sum += left[row][col] * right[row][col];
            res[row] = sum;
          }
          return res.length === 1 ? res[0] : res;
        },
        pow: function pow(arr, arg) {
          return jStat2.map(arr, function(value) {
            return Math2.pow(value, arg);
          });
        },
        exp: function exp(arr) {
          return jStat2.map(arr, function(value) {
            return Math2.exp(value);
          });
        },
        log: function exp(arr) {
          return jStat2.map(arr, function(value) {
            return Math2.log(value);
          });
        },
        abs: function abs4(arr) {
          return jStat2.map(arr, function(value) {
            return Math2.abs(value);
          });
        },
        norm: function norm(arr, p2) {
          var nnorm = 0, i = 0;
          if (isNaN(p2))
            p2 = 2;
          if (isUsable(arr[0]))
            arr = arr[0];
          for (; i < arr.length; i++) {
            nnorm += Math2.pow(Math2.abs(arr[i]), p2);
          }
          return Math2.pow(nnorm, 1 / p2);
        },
        angle: function angle(arr, arg) {
          return Math2.acos(jStat2.dot(arr, arg) / (jStat2.norm(arr) * jStat2.norm(arg)));
        },
        aug: function aug(a, b) {
          var newarr = [];
          var i;
          for (i = 0; i < a.length; i++) {
            newarr.push(a[i].slice());
          }
          for (i = 0; i < newarr.length; i++) {
            push.apply(newarr[i], b[i]);
          }
          return newarr;
        },
        inv: function inv(a) {
          var rows = a.length;
          var cols = a[0].length;
          var b = jStat2.identity(rows, cols);
          var c = jStat2.gauss_jordan(a, b);
          var result = [];
          var i = 0;
          var j;
          for (; i < rows; i++) {
            result[i] = [];
            for (j = cols; j < c[0].length; j++)
              result[i][j - cols] = c[i][j];
          }
          return result;
        },
        det: function det(a) {
          var alen = a.length, alend = alen * 2, vals = new Array(alend), rowshift = alen - 1, colshift = alend - 1, mrow = rowshift - alen + 1, mcol = colshift, i = 0, result = 0, j;
          if (alen === 2) {
            return a[0][0] * a[1][1] - a[0][1] * a[1][0];
          }
          for (; i < alend; i++) {
            vals[i] = 1;
          }
          for (i = 0; i < alen; i++) {
            for (j = 0; j < alen; j++) {
              vals[mrow < 0 ? mrow + alen : mrow] *= a[i][j];
              vals[mcol < alen ? mcol + alen : mcol] *= a[i][j];
              mrow++;
              mcol--;
            }
            mrow = --rowshift - alen + 1;
            mcol = --colshift;
          }
          for (i = 0; i < alen; i++) {
            result += vals[i];
          }
          for (; i < alend; i++) {
            result -= vals[i];
          }
          return result;
        },
        gauss_elimination: function gauss_elimination(a, b) {
          var i = 0, j = 0, n2 = a.length, m2 = a[0].length, factor = 1, sum = 0, x2 = [], maug, pivot, temp, k;
          a = jStat2.aug(a, b);
          maug = a[0].length;
          for (i = 0; i < n2; i++) {
            pivot = a[i][i];
            j = i;
            for (k = i + 1; k < m2; k++) {
              if (pivot < Math2.abs(a[k][i])) {
                pivot = a[k][i];
                j = k;
              }
            }
            if (j != i) {
              for (k = 0; k < maug; k++) {
                temp = a[i][k];
                a[i][k] = a[j][k];
                a[j][k] = temp;
              }
            }
            for (j = i + 1; j < n2; j++) {
              factor = a[j][i] / a[i][i];
              for (k = i; k < maug; k++) {
                a[j][k] = a[j][k] - factor * a[i][k];
              }
            }
          }
          for (i = n2 - 1; i >= 0; i--) {
            sum = 0;
            for (j = i + 1; j <= n2 - 1; j++) {
              sum = sum + x2[j] * a[i][j];
            }
            x2[i] = (a[i][maug - 1] - sum) / a[i][i];
          }
          return x2;
        },
        gauss_jordan: function gauss_jordan(a, b) {
          var m2 = jStat2.aug(a, b);
          var h = m2.length;
          var w = m2[0].length;
          var c = 0;
          var x2, y2, y22;
          for (y2 = 0; y2 < h; y2++) {
            var maxrow = y2;
            for (y22 = y2 + 1; y22 < h; y22++) {
              if (Math2.abs(m2[y22][y2]) > Math2.abs(m2[maxrow][y2]))
                maxrow = y22;
            }
            var tmp = m2[y2];
            m2[y2] = m2[maxrow];
            m2[maxrow] = tmp;
            for (y22 = y2 + 1; y22 < h; y22++) {
              c = m2[y22][y2] / m2[y2][y2];
              for (x2 = y2; x2 < w; x2++) {
                m2[y22][x2] -= m2[y2][x2] * c;
              }
            }
          }
          for (y2 = h - 1; y2 >= 0; y2--) {
            c = m2[y2][y2];
            for (y22 = 0; y22 < y2; y22++) {
              for (x2 = w - 1; x2 > y2 - 1; x2--) {
                m2[y22][x2] -= m2[y2][x2] * m2[y22][y2] / c;
              }
            }
            m2[y2][y2] /= c;
            for (x2 = h; x2 < w; x2++) {
              m2[y2][x2] /= c;
            }
          }
          return m2;
        },
        triaUpSolve: function triaUpSolve(A2, b) {
          var size2 = A2[0].length;
          var x2 = jStat2.zeros(1, size2)[0];
          var parts;
          var matrix_mode = false;
          if (b[0].length != void 0) {
            b = b.map(function(i) {
              return i[0];
            });
            matrix_mode = true;
          }
          jStat2.arange(size2 - 1, -1, -1).forEach(function(i) {
            parts = jStat2.arange(i + 1, size2).map(function(j) {
              return x2[j] * A2[i][j];
            });
            x2[i] = (b[i] - jStat2.sum(parts)) / A2[i][i];
          });
          if (matrix_mode)
            return x2.map(function(i) {
              return [i];
            });
          return x2;
        },
        triaLowSolve: function triaLowSolve(A2, b) {
          var size2 = A2[0].length;
          var x2 = jStat2.zeros(1, size2)[0];
          var parts;
          var matrix_mode = false;
          if (b[0].length != void 0) {
            b = b.map(function(i) {
              return i[0];
            });
            matrix_mode = true;
          }
          jStat2.arange(size2).forEach(function(i) {
            parts = jStat2.arange(i).map(function(j) {
              return A2[i][j] * x2[j];
            });
            x2[i] = (b[i] - jStat2.sum(parts)) / A2[i][i];
          });
          if (matrix_mode)
            return x2.map(function(i) {
              return [i];
            });
          return x2;
        },
        lu: function lu(A2) {
          var size2 = A2.length;
          var L2 = jStat2.identity(size2);
          var R2 = jStat2.zeros(A2.length, A2[0].length);
          var parts;
          jStat2.arange(size2).forEach(function(t2) {
            R2[0][t2] = A2[0][t2];
          });
          jStat2.arange(1, size2).forEach(function(l2) {
            jStat2.arange(l2).forEach(function(i) {
              parts = jStat2.arange(i).map(function(jj2) {
                return L2[l2][jj2] * R2[jj2][i];
              });
              L2[l2][i] = (A2[l2][i] - jStat2.sum(parts)) / R2[i][i];
            });
            jStat2.arange(l2, size2).forEach(function(j) {
              parts = jStat2.arange(l2).map(function(jj2) {
                return L2[l2][jj2] * R2[jj2][j];
              });
              R2[l2][j] = A2[parts.length][j] - jStat2.sum(parts);
            });
          });
          return [L2, R2];
        },
        cholesky: function cholesky(A2) {
          var size2 = A2.length;
          var T2 = jStat2.zeros(A2.length, A2[0].length);
          var parts;
          jStat2.arange(size2).forEach(function(i) {
            parts = jStat2.arange(i).map(function(t2) {
              return Math2.pow(T2[i][t2], 2);
            });
            T2[i][i] = Math2.sqrt(A2[i][i] - jStat2.sum(parts));
            jStat2.arange(i + 1, size2).forEach(function(j) {
              parts = jStat2.arange(i).map(function(t2) {
                return T2[i][t2] * T2[j][t2];
              });
              T2[j][i] = (A2[i][j] - jStat2.sum(parts)) / T2[i][i];
            });
          });
          return T2;
        },
        gauss_jacobi: function gauss_jacobi(a, b, x2, r2) {
          var i = 0;
          var j = 0;
          var n2 = a.length;
          var l2 = [];
          var u2 = [];
          var d = [];
          var xv, c, h, xk2;
          for (; i < n2; i++) {
            l2[i] = [];
            u2[i] = [];
            d[i] = [];
            for (j = 0; j < n2; j++) {
              if (i > j) {
                l2[i][j] = a[i][j];
                u2[i][j] = d[i][j] = 0;
              } else if (i < j) {
                u2[i][j] = a[i][j];
                l2[i][j] = d[i][j] = 0;
              } else {
                d[i][j] = a[i][j];
                l2[i][j] = u2[i][j] = 0;
              }
            }
          }
          h = jStat2.multiply(jStat2.multiply(jStat2.inv(d), jStat2.add(l2, u2)), -1);
          c = jStat2.multiply(jStat2.inv(d), b);
          xv = x2;
          xk2 = jStat2.add(jStat2.multiply(h, x2), c);
          i = 2;
          while (Math2.abs(jStat2.norm(jStat2.subtract(xk2, xv))) > r2) {
            xv = xk2;
            xk2 = jStat2.add(jStat2.multiply(h, xv), c);
            i++;
          }
          return xk2;
        },
        gauss_seidel: function gauss_seidel(a, b, x2, r2) {
          var i = 0;
          var n2 = a.length;
          var l2 = [];
          var u2 = [];
          var d = [];
          var j, xv, c, h, xk2;
          for (; i < n2; i++) {
            l2[i] = [];
            u2[i] = [];
            d[i] = [];
            for (j = 0; j < n2; j++) {
              if (i > j) {
                l2[i][j] = a[i][j];
                u2[i][j] = d[i][j] = 0;
              } else if (i < j) {
                u2[i][j] = a[i][j];
                l2[i][j] = d[i][j] = 0;
              } else {
                d[i][j] = a[i][j];
                l2[i][j] = u2[i][j] = 0;
              }
            }
          }
          h = jStat2.multiply(jStat2.multiply(jStat2.inv(jStat2.add(d, l2)), u2), -1);
          c = jStat2.multiply(jStat2.inv(jStat2.add(d, l2)), b);
          xv = x2;
          xk2 = jStat2.add(jStat2.multiply(h, x2), c);
          i = 2;
          while (Math2.abs(jStat2.norm(jStat2.subtract(xk2, xv))) > r2) {
            xv = xk2;
            xk2 = jStat2.add(jStat2.multiply(h, xv), c);
            i = i + 1;
          }
          return xk2;
        },
        SOR: function SOR(a, b, x2, r2, w) {
          var i = 0;
          var n2 = a.length;
          var l2 = [];
          var u2 = [];
          var d = [];
          var j, xv, c, h, xk2;
          for (; i < n2; i++) {
            l2[i] = [];
            u2[i] = [];
            d[i] = [];
            for (j = 0; j < n2; j++) {
              if (i > j) {
                l2[i][j] = a[i][j];
                u2[i][j] = d[i][j] = 0;
              } else if (i < j) {
                u2[i][j] = a[i][j];
                l2[i][j] = d[i][j] = 0;
              } else {
                d[i][j] = a[i][j];
                l2[i][j] = u2[i][j] = 0;
              }
            }
          }
          h = jStat2.multiply(jStat2.inv(jStat2.add(d, jStat2.multiply(l2, w))), jStat2.subtract(jStat2.multiply(d, 1 - w), jStat2.multiply(u2, w)));
          c = jStat2.multiply(jStat2.multiply(jStat2.inv(jStat2.add(d, jStat2.multiply(l2, w))), b), w);
          xv = x2;
          xk2 = jStat2.add(jStat2.multiply(h, x2), c);
          i = 2;
          while (Math2.abs(jStat2.norm(jStat2.subtract(xk2, xv))) > r2) {
            xv = xk2;
            xk2 = jStat2.add(jStat2.multiply(h, xv), c);
            i++;
          }
          return xk2;
        },
        householder: function householder(a) {
          var m2 = a.length;
          var n2 = a[0].length;
          var i = 0;
          var w = [];
          var p2 = [];
          var alpha, r2, k, j, factor;
          for (; i < m2 - 1; i++) {
            alpha = 0;
            for (j = i + 1; j < n2; j++)
              alpha += a[j][i] * a[j][i];
            factor = a[i + 1][i] > 0 ? -1 : 1;
            alpha = factor * Math2.sqrt(alpha);
            r2 = Math2.sqrt((alpha * alpha - a[i + 1][i] * alpha) / 2);
            w = jStat2.zeros(m2, 1);
            w[i + 1][0] = (a[i + 1][i] - alpha) / (2 * r2);
            for (k = i + 2; k < m2; k++)
              w[k][0] = a[k][i] / (2 * r2);
            p2 = jStat2.subtract(jStat2.identity(m2, n2), jStat2.multiply(jStat2.multiply(w, jStat2.transpose(w)), 2));
            a = jStat2.multiply(p2, jStat2.multiply(a, p2));
          }
          return a;
        },
        QR: function() {
          var sum = jStat2.sum;
          var range2 = jStat2.arange;
          function qr2(x2) {
            var n2 = x2.length;
            var p2 = x2[0].length;
            var r2 = jStat2.zeros(p2, p2);
            x2 = jStat2.copy(x2);
            var i, j, k;
            for (j = 0; j < p2; j++) {
              r2[j][j] = Math2.sqrt(sum(range2(n2).map(function(i2) {
                return x2[i2][j] * x2[i2][j];
              })));
              for (i = 0; i < n2; i++) {
                x2[i][j] = x2[i][j] / r2[j][j];
              }
              for (k = j + 1; k < p2; k++) {
                r2[j][k] = sum(range2(n2).map(function(i2) {
                  return x2[i2][j] * x2[i2][k];
                }));
                for (i = 0; i < n2; i++) {
                  x2[i][k] = x2[i][k] - x2[i][j] * r2[j][k];
                }
              }
            }
            return [x2, r2];
          }
          return qr2;
        }(),
        lstsq: function() {
          function R_I(A2) {
            A2 = jStat2.copy(A2);
            var size2 = A2.length;
            var I2 = jStat2.identity(size2);
            jStat2.arange(size2 - 1, -1, -1).forEach(function(i) {
              jStat2.sliceAssign(I2, { row: i }, jStat2.divide(jStat2.slice(I2, { row: i }), A2[i][i]));
              jStat2.sliceAssign(A2, { row: i }, jStat2.divide(jStat2.slice(A2, { row: i }), A2[i][i]));
              jStat2.arange(i).forEach(function(j) {
                var c = jStat2.multiply(A2[j][i], -1);
                var Aj2 = jStat2.slice(A2, { row: j });
                var cAi = jStat2.multiply(jStat2.slice(A2, { row: i }), c);
                jStat2.sliceAssign(A2, { row: j }, jStat2.add(Aj2, cAi));
                var Ij2 = jStat2.slice(I2, { row: j });
                var cIi = jStat2.multiply(jStat2.slice(I2, { row: i }), c);
                jStat2.sliceAssign(I2, { row: j }, jStat2.add(Ij2, cIi));
              });
            });
            return I2;
          }
          function qr_solve(A2, b) {
            var array_mode = false;
            if (b[0].length === void 0) {
              b = b.map(function(x3) {
                return [x3];
              });
              array_mode = true;
            }
            var QR = jStat2.QR(A2);
            var Q2 = QR[0];
            var R2 = QR[1];
            var attrs = A2[0].length;
            var Q1 = jStat2.slice(Q2, { col: { end: attrs } });
            var R1 = jStat2.slice(R2, { row: { end: attrs } });
            var RI = R_I(R1);
            var Q22 = jStat2.transpose(Q1);
            if (Q22[0].length === void 0) {
              Q22 = [Q22];
            }
            var x2 = jStat2.multiply(jStat2.multiply(RI, Q22), b);
            if (x2.length === void 0) {
              x2 = [[x2]];
            }
            if (array_mode)
              return x2.map(function(i) {
                return i[0];
              });
            return x2;
          }
          return qr_solve;
        }(),
        jacobi: function jacobi(a) {
          var condition = 1;
          var n2 = a.length;
          var e = jStat2.identity(n2, n2);
          var ev = [];
          var b, i, j, p2, q2, maxim, theta, s;
          while (condition === 1) {
            maxim = a[0][1];
            p2 = 0;
            q2 = 1;
            for (i = 0; i < n2; i++) {
              for (j = 0; j < n2; j++) {
                if (i != j) {
                  if (maxim < Math2.abs(a[i][j])) {
                    maxim = Math2.abs(a[i][j]);
                    p2 = i;
                    q2 = j;
                  }
                }
              }
            }
            if (a[p2][p2] === a[q2][q2])
              theta = a[p2][q2] > 0 ? Math2.PI / 4 : -Math2.PI / 4;
            else
              theta = Math2.atan(2 * a[p2][q2] / (a[p2][p2] - a[q2][q2])) / 2;
            s = jStat2.identity(n2, n2);
            s[p2][p2] = Math2.cos(theta);
            s[p2][q2] = -Math2.sin(theta);
            s[q2][p2] = Math2.sin(theta);
            s[q2][q2] = Math2.cos(theta);
            e = jStat2.multiply(e, s);
            b = jStat2.multiply(jStat2.multiply(jStat2.inv(s), a), s);
            a = b;
            condition = 0;
            for (i = 1; i < n2; i++) {
              for (j = 1; j < n2; j++) {
                if (i != j && Math2.abs(a[i][j]) > 1e-3) {
                  condition = 1;
                }
              }
            }
          }
          for (i = 0; i < n2; i++)
            ev.push(a[i][i]);
          return [e, ev];
        },
        rungekutta: function rungekutta(f, h, p2, t_j, u_j, order) {
          var k1, k2, u_j1, k3, k4;
          if (order === 2) {
            while (t_j <= p2) {
              k1 = h * f(t_j, u_j);
              k2 = h * f(t_j + h, u_j + k1);
              u_j1 = u_j + (k1 + k2) / 2;
              u_j = u_j1;
              t_j = t_j + h;
            }
          }
          if (order === 4) {
            while (t_j <= p2) {
              k1 = h * f(t_j, u_j);
              k2 = h * f(t_j + h / 2, u_j + k1 / 2);
              k3 = h * f(t_j + h / 2, u_j + k2 / 2);
              k4 = h * f(t_j + h, u_j + k3);
              u_j1 = u_j + (k1 + 2 * k2 + 2 * k3 + k4) / 6;
              u_j = u_j1;
              t_j = t_j + h;
            }
          }
          return u_j;
        },
        romberg: function romberg(f, a, b, order) {
          var i = 0;
          var h = (b - a) / 2;
          var x2 = [];
          var h1 = [];
          var g = [];
          var m2, a1, j, k, I2;
          while (i < order / 2) {
            I2 = f(a);
            for (j = a, k = 0; j <= b; j = j + h, k++)
              x2[k] = j;
            m2 = x2.length;
            for (j = 1; j < m2 - 1; j++) {
              I2 += (j % 2 !== 0 ? 4 : 2) * f(x2[j]);
            }
            I2 = h / 3 * (I2 + f(b));
            g[i] = I2;
            h /= 2;
            i++;
          }
          a1 = g.length;
          m2 = 1;
          while (a1 !== 1) {
            for (j = 0; j < a1 - 1; j++)
              h1[j] = (Math2.pow(4, m2) * g[j + 1] - g[j]) / (Math2.pow(4, m2) - 1);
            a1 = h1.length;
            g = h1;
            h1 = [];
            m2++;
          }
          return g;
        },
        richardson: function richardson(X2, f, x2, h) {
          function pos(X3, x3) {
            var i2 = 0;
            var n2 = X3.length;
            var p2;
            for (; i2 < n2; i2++)
              if (X3[i2] === x3)
                p2 = i2;
            return p2;
          }
          var h_min = Math2.abs(x2 - X2[pos(X2, x2) + 1]);
          var i = 0;
          var g = [];
          var h1 = [];
          var y1, y2, m2, a, j;
          while (h >= h_min) {
            y1 = pos(X2, x2 + h);
            y2 = pos(X2, x2);
            g[i] = (f[y1] - 2 * f[y2] + f[2 * y2 - y1]) / (h * h);
            h /= 2;
            i++;
          }
          a = g.length;
          m2 = 1;
          while (a != 1) {
            for (j = 0; j < a - 1; j++)
              h1[j] = (Math2.pow(4, m2) * g[j + 1] - g[j]) / (Math2.pow(4, m2) - 1);
            a = h1.length;
            g = h1;
            h1 = [];
            m2++;
          }
          return g;
        },
        simpson: function simpson(f, a, b, n2) {
          var h = (b - a) / n2;
          var I2 = f(a);
          var x2 = [];
          var j = a;
          var k = 0;
          var i = 1;
          var m2;
          for (; j <= b; j = j + h, k++)
            x2[k] = j;
          m2 = x2.length;
          for (; i < m2 - 1; i++) {
            I2 += (i % 2 !== 0 ? 4 : 2) * f(x2[i]);
          }
          return h / 3 * (I2 + f(b));
        },
        hermite: function hermite(X2, F2, dF, value) {
          var n2 = X2.length;
          var p2 = 0;
          var i = 0;
          var l2 = [];
          var dl = [];
          var A2 = [];
          var B2 = [];
          var j;
          for (; i < n2; i++) {
            l2[i] = 1;
            for (j = 0; j < n2; j++) {
              if (i != j)
                l2[i] *= (value - X2[j]) / (X2[i] - X2[j]);
            }
            dl[i] = 0;
            for (j = 0; j < n2; j++) {
              if (i != j)
                dl[i] += 1 / (X2[i] - X2[j]);
            }
            A2[i] = (1 - 2 * (value - X2[i]) * dl[i]) * (l2[i] * l2[i]);
            B2[i] = (value - X2[i]) * (l2[i] * l2[i]);
            p2 += A2[i] * F2[i] + B2[i] * dF[i];
          }
          return p2;
        },
        lagrange: function lagrange(X2, F2, value) {
          var p2 = 0;
          var i = 0;
          var j, l2;
          var n2 = X2.length;
          for (; i < n2; i++) {
            l2 = F2[i];
            for (j = 0; j < n2; j++) {
              if (i != j)
                l2 *= (value - X2[j]) / (X2[i] - X2[j]);
            }
            p2 += l2;
          }
          return p2;
        },
        cubic_spline: function cubic_spline(X2, F2, value) {
          var n2 = X2.length;
          var i = 0, j;
          var A2 = [];
          var B2 = [];
          var alpha = [];
          var c = [];
          var h = [];
          var b = [];
          var d = [];
          for (; i < n2 - 1; i++)
            h[i] = X2[i + 1] - X2[i];
          alpha[0] = 0;
          for (i = 1; i < n2 - 1; i++) {
            alpha[i] = 3 / h[i] * (F2[i + 1] - F2[i]) - 3 / h[i - 1] * (F2[i] - F2[i - 1]);
          }
          for (i = 1; i < n2 - 1; i++) {
            A2[i] = [];
            B2[i] = [];
            A2[i][i - 1] = h[i - 1];
            A2[i][i] = 2 * (h[i - 1] + h[i]);
            A2[i][i + 1] = h[i];
            B2[i][0] = alpha[i];
          }
          c = jStat2.multiply(jStat2.inv(A2), B2);
          for (j = 0; j < n2 - 1; j++) {
            b[j] = (F2[j + 1] - F2[j]) / h[j] - h[j] * (c[j + 1][0] + 2 * c[j][0]) / 3;
            d[j] = (c[j + 1][0] - c[j][0]) / (3 * h[j]);
          }
          for (j = 0; j < n2; j++) {
            if (X2[j] > value)
              break;
          }
          j -= 1;
          return F2[j] + (value - X2[j]) * b[j] + jStat2.sq(value - X2[j]) * c[j] + (value - X2[j]) * jStat2.sq(value - X2[j]) * d[j];
        },
        gauss_quadrature: function gauss_quadrature() {
          throw new Error("gauss_quadrature not yet implemented");
        },
        PCA: function PCA(X2) {
          var m2 = X2.length;
          var n2 = X2[0].length;
          var i = 0;
          var j, temp1;
          var u2 = [];
          var D2 = [];
          var result = [];
          var temp2 = [];
          var Y2 = [];
          var Bt = [];
          var B2 = [];
          var C2 = [];
          var V2 = [];
          var Vt = [];
          for (i = 0; i < m2; i++) {
            u2[i] = jStat2.sum(X2[i]) / n2;
          }
          for (i = 0; i < n2; i++) {
            B2[i] = [];
            for (j = 0; j < m2; j++) {
              B2[i][j] = X2[j][i] - u2[j];
            }
          }
          B2 = jStat2.transpose(B2);
          for (i = 0; i < m2; i++) {
            C2[i] = [];
            for (j = 0; j < m2; j++) {
              C2[i][j] = jStat2.dot([B2[i]], [B2[j]]) / (n2 - 1);
            }
          }
          result = jStat2.jacobi(C2);
          V2 = result[0];
          D2 = result[1];
          Vt = jStat2.transpose(V2);
          for (i = 0; i < D2.length; i++) {
            for (j = i; j < D2.length; j++) {
              if (D2[i] < D2[j]) {
                temp1 = D2[i];
                D2[i] = D2[j];
                D2[j] = temp1;
                temp2 = Vt[i];
                Vt[i] = Vt[j];
                Vt[j] = temp2;
              }
            }
          }
          Bt = jStat2.transpose(B2);
          for (i = 0; i < m2; i++) {
            Y2[i] = [];
            for (j = 0; j < Bt.length; j++) {
              Y2[i][j] = jStat2.dot([Vt[i]], [Bt[j]]);
            }
          }
          return [X2, D2, Vt, Y2];
        }
      });
      (function(funcs) {
        for (var i = 0; i < funcs.length; i++)
          (function(passfunc) {
            jStat2.fn[passfunc] = function(arg, func2) {
              var tmpthis = this;
              if (func2) {
                setTimeout(function() {
                  func2.call(tmpthis, jStat2.fn[passfunc].call(tmpthis, arg));
                }, 15);
                return this;
              }
              if (typeof jStat2[passfunc](this, arg) === "number")
                return jStat2[passfunc](this, arg);
              else
                return jStat2(jStat2[passfunc](this, arg));
            };
          })(funcs[i]);
      })("add divide multiply subtract dot pow exp log abs norm angle".split(" "));
    })(jStat, Math);
    (function(jStat2, Math2) {
      var slice2 = [].slice;
      var isNumber2 = jStat2.utils.isNumber;
      var isArray2 = jStat2.utils.isArray;
      jStat2.extend({
        zscore: function zscore() {
          var args = slice2.call(arguments);
          if (isNumber2(args[1])) {
            return (args[0] - args[1]) / args[2];
          }
          return (args[0] - jStat2.mean(args[1])) / jStat2.stdev(args[1], args[2]);
        },
        ztest: function ztest() {
          var args = slice2.call(arguments);
          var z2;
          if (isArray2(args[1])) {
            z2 = jStat2.zscore(args[0], args[1], args[3]);
            return args[2] === 1 ? jStat2.normal.cdf(-Math2.abs(z2), 0, 1) : jStat2.normal.cdf(-Math2.abs(z2), 0, 1) * 2;
          } else {
            if (args.length > 2) {
              z2 = jStat2.zscore(args[0], args[1], args[2]);
              return args[3] === 1 ? jStat2.normal.cdf(-Math2.abs(z2), 0, 1) : jStat2.normal.cdf(-Math2.abs(z2), 0, 1) * 2;
            } else {
              z2 = args[0];
              return args[1] === 1 ? jStat2.normal.cdf(-Math2.abs(z2), 0, 1) : jStat2.normal.cdf(-Math2.abs(z2), 0, 1) * 2;
            }
          }
        }
      });
      jStat2.extend(jStat2.fn, {
        zscore: function zscore(value, flag) {
          return (value - this.mean()) / this.stdev(flag);
        },
        ztest: function ztest(value, sides, flag) {
          var zscore = Math2.abs(this.zscore(value, flag));
          return sides === 1 ? jStat2.normal.cdf(-zscore, 0, 1) : jStat2.normal.cdf(-zscore, 0, 1) * 2;
        }
      });
      jStat2.extend({
        tscore: function tscore() {
          var args = slice2.call(arguments);
          return args.length === 4 ? (args[0] - args[1]) / (args[2] / Math2.sqrt(args[3])) : (args[0] - jStat2.mean(args[1])) / (jStat2.stdev(args[1], true) / Math2.sqrt(args[1].length));
        },
        ttest: function ttest() {
          var args = slice2.call(arguments);
          var tscore;
          if (args.length === 5) {
            tscore = Math2.abs(jStat2.tscore(args[0], args[1], args[2], args[3]));
            return args[4] === 1 ? jStat2.studentt.cdf(-tscore, args[3] - 1) : jStat2.studentt.cdf(-tscore, args[3] - 1) * 2;
          }
          if (isNumber2(args[1])) {
            tscore = Math2.abs(args[0]);
            return args[2] == 1 ? jStat2.studentt.cdf(-tscore, args[1] - 1) : jStat2.studentt.cdf(-tscore, args[1] - 1) * 2;
          }
          tscore = Math2.abs(jStat2.tscore(args[0], args[1]));
          return args[2] == 1 ? jStat2.studentt.cdf(-tscore, args[1].length - 1) : jStat2.studentt.cdf(-tscore, args[1].length - 1) * 2;
        }
      });
      jStat2.extend(jStat2.fn, {
        tscore: function tscore(value) {
          return (value - this.mean()) / (this.stdev(true) / Math2.sqrt(this.cols()));
        },
        ttest: function ttest(value, sides) {
          return sides === 1 ? 1 - jStat2.studentt.cdf(Math2.abs(this.tscore(value)), this.cols() - 1) : jStat2.studentt.cdf(-Math2.abs(this.tscore(value)), this.cols() - 1) * 2;
        }
      });
      jStat2.extend({
        anovafscore: function anovafscore() {
          var args = slice2.call(arguments), expVar, sample, sampMean, sampSampMean, tmpargs, unexpVar, i, j;
          if (args.length === 1) {
            tmpargs = new Array(args[0].length);
            for (i = 0; i < args[0].length; i++) {
              tmpargs[i] = args[0][i];
            }
            args = tmpargs;
          }
          sample = new Array();
          for (i = 0; i < args.length; i++) {
            sample = sample.concat(args[i]);
          }
          sampMean = jStat2.mean(sample);
          expVar = 0;
          for (i = 0; i < args.length; i++) {
            expVar = expVar + args[i].length * Math2.pow(jStat2.mean(args[i]) - sampMean, 2);
          }
          expVar /= args.length - 1;
          unexpVar = 0;
          for (i = 0; i < args.length; i++) {
            sampSampMean = jStat2.mean(args[i]);
            for (j = 0; j < args[i].length; j++) {
              unexpVar += Math2.pow(args[i][j] - sampSampMean, 2);
            }
          }
          unexpVar /= sample.length - args.length;
          return expVar / unexpVar;
        },
        anovaftest: function anovaftest() {
          var args = slice2.call(arguments), df1, df2, n2, i;
          if (isNumber2(args[0])) {
            return 1 - jStat2.centralF.cdf(args[0], args[1], args[2]);
          }
          var anovafscore = jStat2.anovafscore(args);
          df1 = args.length - 1;
          n2 = 0;
          for (i = 0; i < args.length; i++) {
            n2 = n2 + args[i].length;
          }
          df2 = n2 - df1 - 1;
          return 1 - jStat2.centralF.cdf(anovafscore, df1, df2);
        },
        ftest: function ftest(fscore, df1, df2) {
          return 1 - jStat2.centralF.cdf(fscore, df1, df2);
        }
      });
      jStat2.extend(jStat2.fn, {
        anovafscore: function anovafscore() {
          return jStat2.anovafscore(this.toArray());
        },
        anovaftes: function anovaftes() {
          var n2 = 0;
          var i;
          for (i = 0; i < this.length; i++) {
            n2 = n2 + this[i].length;
          }
          return jStat2.ftest(this.anovafscore(), this.length - 1, n2 - this.length);
        }
      });
      jStat2.extend({
        qscore: function qscore() {
          var args = slice2.call(arguments);
          var mean1, mean2, n1, n2, sd2;
          if (isNumber2(args[0])) {
            mean1 = args[0];
            mean2 = args[1];
            n1 = args[2];
            n2 = args[3];
            sd2 = args[4];
          } else {
            mean1 = jStat2.mean(args[0]);
            mean2 = jStat2.mean(args[1]);
            n1 = args[0].length;
            n2 = args[1].length;
            sd2 = args[2];
          }
          return Math2.abs(mean1 - mean2) / (sd2 * Math2.sqrt((1 / n1 + 1 / n2) / 2));
        },
        qtest: function qtest() {
          var args = slice2.call(arguments);
          var qscore;
          if (args.length === 3) {
            qscore = args[0];
            args = args.slice(1);
          } else if (args.length === 7) {
            qscore = jStat2.qscore(args[0], args[1], args[2], args[3], args[4]);
            args = args.slice(5);
          } else {
            qscore = jStat2.qscore(args[0], args[1], args[2]);
            args = args.slice(3);
          }
          var n2 = args[0];
          var k = args[1];
          return 1 - jStat2.tukey.cdf(qscore, k, n2 - k);
        },
        tukeyhsd: function tukeyhsd(arrays) {
          var sd2 = jStat2.pooledstdev(arrays);
          var means = arrays.map(function(arr) {
            return jStat2.mean(arr);
          });
          var n2 = arrays.reduce(function(n3, arr) {
            return n3 + arr.length;
          }, 0);
          var results = [];
          for (var i = 0; i < arrays.length; ++i) {
            for (var j = i + 1; j < arrays.length; ++j) {
              var p2 = jStat2.qtest(means[i], means[j], arrays[i].length, arrays[j].length, sd2, n2, arrays.length);
              results.push([[i, j], p2]);
            }
          }
          return results;
        }
      });
      jStat2.extend({
        normalci: function normalci() {
          var args = slice2.call(arguments), ans = new Array(2), change;
          if (args.length === 4) {
            change = Math2.abs(jStat2.normal.inv(args[1] / 2, 0, 1) * args[2] / Math2.sqrt(args[3]));
          } else {
            change = Math2.abs(jStat2.normal.inv(args[1] / 2, 0, 1) * jStat2.stdev(args[2]) / Math2.sqrt(args[2].length));
          }
          ans[0] = args[0] - change;
          ans[1] = args[0] + change;
          return ans;
        },
        tci: function tci() {
          var args = slice2.call(arguments), ans = new Array(2), change;
          if (args.length === 4) {
            change = Math2.abs(jStat2.studentt.inv(args[1] / 2, args[3] - 1) * args[2] / Math2.sqrt(args[3]));
          } else {
            change = Math2.abs(jStat2.studentt.inv(args[1] / 2, args[2].length - 1) * jStat2.stdev(args[2], true) / Math2.sqrt(args[2].length));
          }
          ans[0] = args[0] - change;
          ans[1] = args[0] + change;
          return ans;
        },
        significant: function significant(pvalue, alpha) {
          return pvalue < alpha;
        }
      });
      jStat2.extend(jStat2.fn, {
        normalci: function normalci(value, alpha) {
          return jStat2.normalci(value, alpha, this.toArray());
        },
        tci: function tci(value, alpha) {
          return jStat2.tci(value, alpha, this.toArray());
        }
      });
      function differenceOfProportions(p1, n1, p2, n2) {
        if (p1 > 1 || p2 > 1 || p1 <= 0 || p2 <= 0) {
          throw new Error("Proportions should be greater than 0 and less than 1");
        }
        var pooled = (p1 * n1 + p2 * n2) / (n1 + n2);
        var se2 = Math2.sqrt(pooled * (1 - pooled) * (1 / n1 + 1 / n2));
        return (p1 - p2) / se2;
      }
      jStat2.extend(jStat2.fn, {
        oneSidedDifferenceOfProportions: function oneSidedDifferenceOfProportions(p1, n1, p2, n2) {
          var z2 = differenceOfProportions(p1, n1, p2, n2);
          return jStat2.ztest(z2, 1);
        },
        twoSidedDifferenceOfProportions: function twoSidedDifferenceOfProportions(p1, n1, p2, n2) {
          var z2 = differenceOfProportions(p1, n1, p2, n2);
          return jStat2.ztest(z2, 2);
        }
      });
    })(jStat, Math);
    jStat.models = function() {
      function sub_regress(exog) {
        var var_count = exog[0].length;
        var modelList = jStat.arange(var_count).map(function(endog_index) {
          var exog_index = jStat.arange(var_count).filter(function(i) {
            return i !== endog_index;
          });
          return ols(jStat.col(exog, endog_index).map(function(x2) {
            return x2[0];
          }), jStat.col(exog, exog_index));
        });
        return modelList;
      }
      function ols(endog, exog) {
        var nobs = endog.length;
        var df_model = exog[0].length - 1;
        var df_resid = nobs - df_model - 1;
        var coef = jStat.lstsq(exog, endog);
        var predict = jStat.multiply(exog, coef.map(function(x2) {
          return [x2];
        })).map(function(p2) {
          return p2[0];
        });
        var resid = jStat.subtract(endog, predict);
        var ybar = jStat.mean(endog);
        var SSE = jStat.sum(predict.map(function(f) {
          return Math.pow(f - ybar, 2);
        }));
        var SSR = jStat.sum(endog.map(function(y2, i) {
          return Math.pow(y2 - predict[i], 2);
        }));
        var SST = SSE + SSR;
        var R2 = SSE / SST;
        return {
          exog,
          endog,
          nobs,
          df_model,
          df_resid,
          coef,
          predict,
          resid,
          ybar,
          SST,
          SSE,
          SSR,
          R2
        };
      }
      function t_test(model) {
        var subModelList = sub_regress(model.exog);
        var sigmaHat = Math.sqrt(model.SSR / model.df_resid);
        var seBetaHat = subModelList.map(function(mod) {
          var SST = mod.SST;
          var R2 = mod.R2;
          return sigmaHat / Math.sqrt(SST * (1 - R2));
        });
        var tStatistic = model.coef.map(function(coef, i) {
          return (coef - 0) / seBetaHat[i];
        });
        var pValue = tStatistic.map(function(t2) {
          var leftppf = jStat.studentt.cdf(t2, model.df_resid);
          return (leftppf > 0.5 ? 1 - leftppf : leftppf) * 2;
        });
        var c = jStat.studentt.inv(0.975, model.df_resid);
        var interval95 = model.coef.map(function(coef, i) {
          var d = c * seBetaHat[i];
          return [coef - d, coef + d];
        });
        return {
          se: seBetaHat,
          t: tStatistic,
          p: pValue,
          sigmaHat,
          interval95
        };
      }
      function F_test(model) {
        var F_statistic = model.R2 / model.df_model / ((1 - model.R2) / model.df_resid);
        var fcdf = function(x2, n1, n2) {
          return jStat.beta.cdf(x2 / (n2 / n1 + x2), n1 / 2, n2 / 2);
        };
        var pvalue = 1 - fcdf(F_statistic, model.df_model, model.df_resid);
        return { F_statistic, pvalue };
      }
      function ols_wrap(endog, exog) {
        var model = ols(endog, exog);
        var ttest = t_test(model);
        var ftest = F_test(model);
        var adjust_R2 = 1 - (1 - model.R2) * ((model.nobs - 1) / model.df_resid);
        model.t = ttest;
        model.f = ftest;
        model.adjust_R2 = adjust_R2;
        return model;
      }
      return { ols: ols_wrap };
    }();
    jStat.extend({
      buildxmatrix: function buildxmatrix() {
        var matrixRows = new Array(arguments.length);
        for (var i = 0; i < arguments.length; i++) {
          var array = [1];
          matrixRows[i] = array.concat(arguments[i]);
        }
        return jStat(matrixRows);
      },
      builddxmatrix: function builddxmatrix() {
        var matrixRows = new Array(arguments[0].length);
        for (var i = 0; i < arguments[0].length; i++) {
          var array = [1];
          matrixRows[i] = array.concat(arguments[0][i]);
        }
        return jStat(matrixRows);
      },
      buildjxmatrix: function buildjxmatrix(jMat) {
        var pass = new Array(jMat.length);
        for (var i = 0; i < jMat.length; i++) {
          pass[i] = jMat[i];
        }
        return jStat.builddxmatrix(pass);
      },
      buildymatrix: function buildymatrix(array) {
        return jStat(array).transpose();
      },
      buildjymatrix: function buildjymatrix(jMat) {
        return jMat.transpose();
      },
      matrixmult: function matrixmult(A2, B2) {
        var i, j, k, result, sum;
        if (A2.cols() == B2.rows()) {
          if (B2.rows() > 1) {
            result = [];
            for (i = 0; i < A2.rows(); i++) {
              result[i] = [];
              for (j = 0; j < B2.cols(); j++) {
                sum = 0;
                for (k = 0; k < A2.cols(); k++) {
                  sum += A2.toArray()[i][k] * B2.toArray()[k][j];
                }
                result[i][j] = sum;
              }
            }
            return jStat(result);
          }
          result = [];
          for (i = 0; i < A2.rows(); i++) {
            result[i] = [];
            for (j = 0; j < B2.cols(); j++) {
              sum = 0;
              for (k = 0; k < A2.cols(); k++) {
                sum += A2.toArray()[i][k] * B2.toArray()[j];
              }
              result[i][j] = sum;
            }
          }
          return jStat(result);
        }
      },
      regress: function regress(jMatX, jMatY) {
        var innerinv = jStat.xtranspxinv(jMatX);
        var xtransp = jMatX.transpose();
        var next = jStat.matrixmult(jStat(innerinv), xtransp);
        return jStat.matrixmult(next, jMatY);
      },
      regresst: function regresst(jMatX, jMatY, sides) {
        var beta = jStat.regress(jMatX, jMatY);
        var compile = {};
        compile.anova = {};
        var jMatYBar = jStat.jMatYBar(jMatX, beta);
        compile.yBar = jMatYBar;
        var yAverage = jMatY.mean();
        compile.anova.residuals = jStat.residuals(jMatY, jMatYBar);
        compile.anova.ssr = jStat.ssr(jMatYBar, yAverage);
        compile.anova.msr = compile.anova.ssr / (jMatX[0].length - 1);
        compile.anova.sse = jStat.sse(jMatY, jMatYBar);
        compile.anova.mse = compile.anova.sse / (jMatY.length - (jMatX[0].length - 1) - 1);
        compile.anova.sst = jStat.sst(jMatY, yAverage);
        compile.anova.mst = compile.anova.sst / (jMatY.length - 1);
        compile.anova.r2 = 1 - compile.anova.sse / compile.anova.sst;
        if (compile.anova.r2 < 0)
          compile.anova.r2 = 0;
        compile.anova.fratio = compile.anova.msr / compile.anova.mse;
        compile.anova.pvalue = jStat.anovaftest(compile.anova.fratio, jMatX[0].length - 1, jMatY.length - (jMatX[0].length - 1) - 1);
        compile.anova.rmse = Math.sqrt(compile.anova.mse);
        compile.anova.r2adj = 1 - compile.anova.mse / compile.anova.mst;
        if (compile.anova.r2adj < 0)
          compile.anova.r2adj = 0;
        compile.stats = new Array(jMatX[0].length);
        var covar = jStat.xtranspxinv(jMatX);
        var sds, ts, ps;
        for (var i = 0; i < beta.length; i++) {
          sds = Math.sqrt(compile.anova.mse * Math.abs(covar[i][i]));
          ts = Math.abs(beta[i] / sds);
          ps = jStat.ttest(ts, jMatY.length - jMatX[0].length - 1, sides);
          compile.stats[i] = [beta[i], sds, ts, ps];
        }
        compile.regress = beta;
        return compile;
      },
      xtranspx: function xtranspx(jMatX) {
        return jStat.matrixmult(jMatX.transpose(), jMatX);
      },
      xtranspxinv: function xtranspxinv(jMatX) {
        var inner = jStat.matrixmult(jMatX.transpose(), jMatX);
        var innerinv = jStat.inv(inner);
        return innerinv;
      },
      jMatYBar: function jMatYBar(jMatX, beta) {
        var yBar = jStat.matrixmult(jMatX, beta);
        return new jStat(yBar);
      },
      residuals: function residuals(jMatY, jMatYBar) {
        return jStat.matrixsubtract(jMatY, jMatYBar);
      },
      ssr: function ssr(jMatYBar, yAverage) {
        var ssr2 = 0;
        for (var i = 0; i < jMatYBar.length; i++) {
          ssr2 += Math.pow(jMatYBar[i] - yAverage, 2);
        }
        return ssr2;
      },
      sse: function sse(jMatY, jMatYBar) {
        var sse2 = 0;
        for (var i = 0; i < jMatY.length; i++) {
          sse2 += Math.pow(jMatY[i] - jMatYBar[i], 2);
        }
        return sse2;
      },
      sst: function sst(jMatY, yAverage) {
        var sst2 = 0;
        for (var i = 0; i < jMatY.length; i++) {
          sst2 += Math.pow(jMatY[i] - yAverage, 2);
        }
        return sst2;
      },
      matrixsubtract: function matrixsubtract(A2, B2) {
        var ans = new Array(A2.length);
        for (var i = 0; i < A2.length; i++) {
          ans[i] = new Array(A2[i].length);
          for (var j = 0; j < A2[i].length; j++) {
            ans[i][j] = A2[i][j] - B2[i][j];
          }
        }
        return jStat(ans);
      }
    });
    jStat.jStat = jStat;
    return jStat;
  });
})(jstat);
var criteriaEval = {};
var defaultOperator = "=";
var validSymbols = [">", ">=", "<", "<=", "=", "<>"];
var TOKEN_TYPE_OPERATOR = "operator";
var TOKEN_TYPE_LITERAL = "literal";
var SUPPORTED_TOKENS = [TOKEN_TYPE_OPERATOR, TOKEN_TYPE_LITERAL];
criteriaEval.TOKEN_TYPE_OPERATOR = TOKEN_TYPE_OPERATOR;
criteriaEval.TOKEN_TYPE_LITERAL = TOKEN_TYPE_LITERAL;
function createToken(value, type) {
  if (SUPPORTED_TOKENS.indexOf(type) === -1) {
    throw new Error("Unsupported token type: " + type);
  }
  return {
    value,
    type
  };
}
function castValueToCorrectType(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (/^\d+(\.\d+)?$/.test(value)) {
    value = value.indexOf(".") === -1 ? parseInt(value, 10) : parseFloat(value);
  }
  return value;
}
function tokenizeExpression(expression) {
  var expressionLength = expression.length;
  var tokens = [];
  var cursorIndex = 0;
  var processedValue = "";
  var processedSymbol = "";
  while (cursorIndex < expressionLength) {
    var char = expression.charAt(cursorIndex);
    switch (char) {
      case ">":
      case "<":
      case "=":
        processedSymbol = processedSymbol + char;
        if (processedValue.length > 0) {
          tokens.push(processedValue);
          processedValue = "";
        }
        break;
      default:
        if (processedSymbol.length > 0) {
          tokens.push(processedSymbol);
          processedSymbol = "";
        }
        processedValue = processedValue + char;
        break;
    }
    cursorIndex++;
  }
  if (processedValue.length > 0) {
    tokens.push(processedValue);
  }
  if (processedSymbol.length > 0) {
    tokens.push(processedSymbol);
  }
  return tokens;
}
function analyzeTokens(tokens) {
  var literalValue = "";
  var analyzedTokens = [];
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];
    if (i === 0 && validSymbols.indexOf(token) >= 0) {
      analyzedTokens.push(createToken(token, TOKEN_TYPE_OPERATOR));
    } else {
      literalValue += token;
    }
  }
  if (literalValue.length > 0) {
    analyzedTokens.push(createToken(castValueToCorrectType(literalValue), TOKEN_TYPE_LITERAL));
  }
  if (analyzedTokens.length > 0 && analyzedTokens[0].type !== TOKEN_TYPE_OPERATOR) {
    analyzedTokens.unshift(createToken(defaultOperator, TOKEN_TYPE_OPERATOR));
  }
  return analyzedTokens;
}
function computeExpression(tokens) {
  var values = [];
  var operator;
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];
    switch (token.type) {
      case TOKEN_TYPE_OPERATOR:
        operator = token.value;
        break;
      case TOKEN_TYPE_LITERAL:
        values.push(token.value);
        break;
    }
  }
  return evaluate(values, operator);
}
function evaluate(values, operator) {
  var result = false;
  switch (operator) {
    case ">":
      result = values[0] > values[1];
      break;
    case ">=":
      result = values[0] >= values[1];
      break;
    case "<":
      result = values[0] < values[1];
      break;
    case "<=":
      result = values[0] <= values[1];
      break;
    case "=":
      result = values[0] == values[1];
      break;
    case "<>":
      result = values[0] != values[1];
      break;
  }
  return result;
}
criteriaEval.parse = function(expression) {
  return analyzeTokens(tokenizeExpression(expression));
};
criteriaEval.createToken = createToken;
criteriaEval.compute = computeExpression;
var miscellaneous = {};
var utils$2 = common;
var error$2 = error$3;
miscellaneous.UNIQUE = function() {
  var result = [];
  for (var i = 0; i < arguments.length; ++i) {
    var hasElement = false;
    var element = arguments[i];
    for (var j = 0; j < result.length; ++j) {
      hasElement = result[j] === element;
      if (hasElement) {
        break;
      }
    }
    if (!hasElement) {
      result.push(element);
    }
  }
  return result;
};
miscellaneous.FLATTEN = utils$2.flatten;
miscellaneous.ARGS2ARRAY = function() {
  return Array.prototype.slice.call(arguments, 0);
};
miscellaneous.REFERENCE = function(context, reference) {
  if (!arguments.length) {
    return error$2.error;
  }
  try {
    var path = reference.split(".");
    var result = context;
    for (var i = 0; i < path.length; ++i) {
      var step = path[i];
      if (step[step.length - 1] === "]") {
        var opening = step.indexOf("[");
        var index = step.substring(opening + 1, step.length - 1);
        result = result[step.substring(0, opening)][index];
      } else {
        result = result[step];
      }
    }
    return result;
  } catch (error2) {
  }
};
miscellaneous.JOIN = function(array, separator) {
  return array.join(separator);
};
miscellaneous.NUMBERS = function() {
  var possibleNumbers = utils$2.flatten(arguments);
  return possibleNumbers.filter(function(el) {
    return typeof el === "number";
  });
};
(function(exports) {
  var mathTrig2 = mathTrig$1;
  var text$1 = text;
  var jStat = jstat.exports;
  var utils2 = common;
  var evalExpression = criteriaEval;
  var error2 = error$3;
  var misc = miscellaneous;
  var SQRT2PI = 2.5066282746310002;
  exports.AVEDEV = function() {
    var range2 = utils2.parseNumberArray(utils2.flatten(arguments));
    if (range2 instanceof Error) {
      return range2;
    }
    return jStat.sum(jStat(range2).subtract(jStat.mean(range2)).abs()[0]) / range2.length;
  };
  exports.AVERAGE = function() {
    var range2 = utils2.numbers(utils2.flatten(arguments));
    var n2 = range2.length;
    var sum = 0;
    var count = 0;
    var result;
    for (var i = 0; i < n2; i++) {
      sum += range2[i];
      count += 1;
    }
    result = sum / count;
    if (isNaN(result)) {
      result = error2.num;
    }
    return result;
  };
  exports.AVERAGEA = function() {
    var range2 = utils2.flatten(arguments);
    var n2 = range2.length;
    var sum = 0;
    var count = 0;
    var result;
    for (var i = 0; i < n2; i++) {
      var el = range2[i];
      if (typeof el === "number") {
        sum += el;
      }
      if (el === true) {
        sum++;
      }
      if (el !== null) {
        count++;
      }
    }
    result = sum / count;
    if (isNaN(result)) {
      result = error2.num;
    }
    return result;
  };
  exports.AVERAGEIF = function(range2, criteria, average_range) {
    if (arguments.length <= 1) {
      return error2.na;
    }
    average_range = average_range || range2;
    range2 = utils2.flatten(range2);
    average_range = utils2.parseNumberArray(utils2.flatten(average_range));
    if (average_range instanceof Error) {
      return average_range;
    }
    var average_count = 0;
    var result = 0;
    var isWildcard = criteria === void 0 || criteria === "*";
    var tokenizedCriteria = isWildcard ? null : evalExpression.parse(criteria + "");
    for (var i = 0; i < range2.length; i++) {
      var value = range2[i];
      if (isWildcard) {
        result += average_range[i];
        average_count++;
      } else {
        var tokens = [evalExpression.createToken(value, evalExpression.TOKEN_TYPE_LITERAL)].concat(tokenizedCriteria);
        if (evalExpression.compute(tokens)) {
          result += average_range[i];
          average_count++;
        }
      }
    }
    return result / average_count;
  };
  exports.AVERAGEIFS = function() {
    var args = utils2.argsToArray(arguments);
    var criteriaLength = (args.length - 1) / 2;
    var range2 = utils2.flatten(args[0]);
    var count = 0;
    var result = 0;
    for (var i = 0; i < range2.length; i++) {
      var isMeetCondition = false;
      for (var j = 0; j < criteriaLength; j++) {
        var value = args[2 * j + 1][i];
        var criteria = args[2 * j + 2];
        var isWildcard = criteria === void 0 || criteria === "*";
        var computedResult = false;
        if (isWildcard) {
          computedResult = true;
        } else {
          var tokenizedCriteria = evalExpression.parse(criteria + "");
          var tokens = [evalExpression.createToken(value, evalExpression.TOKEN_TYPE_LITERAL)].concat(tokenizedCriteria);
          computedResult = evalExpression.compute(tokens);
        }
        if (!computedResult) {
          isMeetCondition = false;
          break;
        }
        isMeetCondition = true;
      }
      if (isMeetCondition) {
        result += range2[i];
        count++;
      }
    }
    var average = result / count;
    if (isNaN(average)) {
      return 0;
    } else {
      return average;
    }
  };
  exports.BETA = {};
  exports.BETA.DIST = function(x2, alpha, beta, cumulative, A2, B2) {
    if (arguments.length < 4) {
      return error2.value;
    }
    A2 = A2 === void 0 ? 0 : A2;
    B2 = B2 === void 0 ? 1 : B2;
    x2 = utils2.parseNumber(x2);
    alpha = utils2.parseNumber(alpha);
    beta = utils2.parseNumber(beta);
    A2 = utils2.parseNumber(A2);
    B2 = utils2.parseNumber(B2);
    if (utils2.anyIsError(x2, alpha, beta, A2, B2)) {
      return error2.value;
    }
    x2 = (x2 - A2) / (B2 - A2);
    return cumulative ? jStat.beta.cdf(x2, alpha, beta) : jStat.beta.pdf(x2, alpha, beta);
  };
  exports.BETA.INV = function(probability, alpha, beta, A2, B2) {
    A2 = A2 === void 0 ? 0 : A2;
    B2 = B2 === void 0 ? 1 : B2;
    probability = utils2.parseNumber(probability);
    alpha = utils2.parseNumber(alpha);
    beta = utils2.parseNumber(beta);
    A2 = utils2.parseNumber(A2);
    B2 = utils2.parseNumber(B2);
    if (utils2.anyIsError(probability, alpha, beta, A2, B2)) {
      return error2.value;
    }
    return jStat.beta.inv(probability, alpha, beta) * (B2 - A2) + A2;
  };
  exports.BINOM = {};
  exports.BINOM.DIST = function(successes, trials, probability, cumulative) {
    successes = utils2.parseNumber(successes);
    trials = utils2.parseNumber(trials);
    probability = utils2.parseNumber(probability);
    cumulative = utils2.parseNumber(cumulative);
    if (utils2.anyIsError(successes, trials, probability, cumulative)) {
      return error2.value;
    }
    return cumulative ? jStat.binomial.cdf(successes, trials, probability) : jStat.binomial.pdf(successes, trials, probability);
  };
  exports.BINOM.DIST.RANGE = function(trials, probability, successes, successes2) {
    successes2 = successes2 === void 0 ? successes : successes2;
    trials = utils2.parseNumber(trials);
    probability = utils2.parseNumber(probability);
    successes = utils2.parseNumber(successes);
    successes2 = utils2.parseNumber(successes2);
    if (utils2.anyIsError(trials, probability, successes, successes2)) {
      return error2.value;
    }
    var result = 0;
    for (var i = successes; i <= successes2; i++) {
      result += mathTrig2.COMBIN(trials, i) * Math.pow(probability, i) * Math.pow(1 - probability, trials - i);
    }
    return result;
  };
  exports.BINOM.INV = function(trials, probability, alpha) {
    trials = utils2.parseNumber(trials);
    probability = utils2.parseNumber(probability);
    alpha = utils2.parseNumber(alpha);
    if (utils2.anyIsError(trials, probability, alpha)) {
      return error2.value;
    }
    var x2 = 0;
    while (x2 <= trials) {
      if (jStat.binomial.cdf(x2, trials, probability) >= alpha) {
        return x2;
      }
      x2++;
    }
  };
  exports.CHISQ = {};
  exports.CHISQ.DIST = function(x2, k, cumulative) {
    x2 = utils2.parseNumber(x2);
    k = utils2.parseNumber(k);
    if (utils2.anyIsError(x2, k)) {
      return error2.value;
    }
    return cumulative ? jStat.chisquare.cdf(x2, k) : jStat.chisquare.pdf(x2, k);
  };
  exports.CHISQ.DIST.RT = function(x2, k) {
    if (!x2 | !k) {
      return error2.na;
    }
    if (x2 < 1 || k > Math.pow(10, 10)) {
      return error2.num;
    }
    if (typeof x2 !== "number" || typeof k !== "number") {
      return error2.value;
    }
    return 1 - jStat.chisquare.cdf(x2, k);
  };
  exports.CHISQ.INV = function(probability, k) {
    probability = utils2.parseNumber(probability);
    k = utils2.parseNumber(k);
    if (utils2.anyIsError(probability, k)) {
      return error2.value;
    }
    return jStat.chisquare.inv(probability, k);
  };
  exports.CHISQ.INV.RT = function(p2, k) {
    if (!p2 | !k) {
      return error2.na;
    }
    if (p2 < 0 || p2 > 1 || k < 1 || k > Math.pow(10, 10)) {
      return error2.num;
    }
    if (typeof p2 !== "number" || typeof k !== "number") {
      return error2.value;
    }
    return jStat.chisquare.inv(1 - p2, k);
  };
  exports.CHISQ.TEST = function(observed, expected) {
    if (arguments.length !== 2) {
      return error2.na;
    }
    if (!(observed instanceof Array) || !(expected instanceof Array)) {
      return error2.value;
    }
    if (observed.length !== expected.length) {
      return error2.value;
    }
    if (observed[0] && expected[0] && observed[0].length !== expected[0].length) {
      return error2.value;
    }
    var row = observed.length;
    var tmp, i, j;
    for (i = 0; i < row; i++) {
      if (!(observed[i] instanceof Array)) {
        tmp = observed[i];
        observed[i] = [];
        observed[i].push(tmp);
      }
      if (!(expected[i] instanceof Array)) {
        tmp = expected[i];
        expected[i] = [];
        expected[i].push(tmp);
      }
    }
    var col = observed[0].length;
    var dof = col === 1 ? row - 1 : (row - 1) * (col - 1);
    var xsqr = 0;
    var Pi2 = Math.PI;
    for (i = 0; i < row; i++) {
      for (j = 0; j < col; j++) {
        xsqr += Math.pow(observed[i][j] - expected[i][j], 2) / expected[i][j];
      }
    }
    function ChiSq(xsqr2, dof2) {
      var p2 = Math.exp(-0.5 * xsqr2);
      if (dof2 % 2 === 1) {
        p2 = p2 * Math.sqrt(2 * xsqr2 / Pi2);
      }
      var k = dof2;
      while (k >= 2) {
        p2 = p2 * xsqr2 / k;
        k = k - 2;
      }
      var t2 = p2;
      var a = dof2;
      while (t2 > 1e-10 * p2) {
        a = a + 2;
        t2 = t2 * xsqr2 / a;
        p2 = p2 + t2;
      }
      return 1 - p2;
    }
    return Math.round(ChiSq(xsqr, dof) * 1e6) / 1e6;
  };
  exports.COLUMN = function(matrix, index) {
    if (arguments.length !== 2) {
      return error2.na;
    }
    if (index < 0) {
      return error2.num;
    }
    if (!(matrix instanceof Array) || typeof index !== "number") {
      return error2.value;
    }
    if (matrix.length === 0) {
      return void 0;
    }
    return jStat.col(matrix, index);
  };
  exports.COLUMNS = function(matrix) {
    if (arguments.length !== 1) {
      return error2.na;
    }
    if (!(matrix instanceof Array)) {
      return error2.value;
    }
    if (matrix.length === 0) {
      return 0;
    }
    return jStat.cols(matrix);
  };
  exports.CONFIDENCE = {};
  exports.CONFIDENCE.NORM = function(alpha, sd2, n2) {
    alpha = utils2.parseNumber(alpha);
    sd2 = utils2.parseNumber(sd2);
    n2 = utils2.parseNumber(n2);
    if (utils2.anyIsError(alpha, sd2, n2)) {
      return error2.value;
    }
    return jStat.normalci(1, alpha, sd2, n2)[1] - 1;
  };
  exports.CONFIDENCE.T = function(alpha, sd2, n2) {
    alpha = utils2.parseNumber(alpha);
    sd2 = utils2.parseNumber(sd2);
    n2 = utils2.parseNumber(n2);
    if (utils2.anyIsError(alpha, sd2, n2)) {
      return error2.value;
    }
    return jStat.tci(1, alpha, sd2, n2)[1] - 1;
  };
  exports.CORREL = function(array1, array2) {
    array1 = utils2.parseNumberArray(utils2.flatten(array1));
    array2 = utils2.parseNumberArray(utils2.flatten(array2));
    if (utils2.anyIsError(array1, array2)) {
      return error2.value;
    }
    return jStat.corrcoeff(array1, array2);
  };
  exports.COUNT = function() {
    return utils2.numbers(utils2.flatten(arguments)).length;
  };
  exports.COUNTA = function() {
    var range2 = utils2.flatten(arguments);
    return range2.length - exports.COUNTBLANK(range2);
  };
  exports.COUNTIN = function(range2, value) {
    var result = 0;
    range2 = utils2.flatten(range2);
    for (var i = 0; i < range2.length; i++) {
      if (range2[i] === value) {
        result++;
      }
    }
    return result;
  };
  exports.COUNTBLANK = function() {
    var range2 = utils2.flatten(arguments);
    var blanks = 0;
    var element;
    for (var i = 0; i < range2.length; i++) {
      element = range2[i];
      if (element === null || element === "") {
        blanks++;
      }
    }
    return blanks;
  };
  exports.COUNTIF = function(range2, criteria) {
    range2 = utils2.flatten(range2);
    var isWildcard = criteria === void 0 || criteria === "*";
    if (isWildcard) {
      return range2.length;
    }
    var matches = 0;
    var tokenizedCriteria = evalExpression.parse(criteria + "");
    for (var i = 0; i < range2.length; i++) {
      var value = range2[i];
      var tokens = [evalExpression.createToken(value, evalExpression.TOKEN_TYPE_LITERAL)].concat(tokenizedCriteria);
      if (evalExpression.compute(tokens)) {
        matches++;
      }
    }
    return matches;
  };
  exports.COUNTIFS = function() {
    var args = utils2.argsToArray(arguments);
    var results = new Array(utils2.flatten(args[0]).length);
    for (var i = 0; i < results.length; i++) {
      results[i] = true;
    }
    for (i = 0; i < args.length; i += 2) {
      var range2 = utils2.flatten(args[i]);
      var criteria = args[i + 1];
      var isWildcard = criteria === void 0 || criteria === "*";
      if (!isWildcard) {
        var tokenizedCriteria = evalExpression.parse(criteria + "");
        for (var j = 0; j < range2.length; j++) {
          var value = range2[j];
          var tokens = [evalExpression.createToken(value, evalExpression.TOKEN_TYPE_LITERAL)].concat(tokenizedCriteria);
          results[j] = results[j] && evalExpression.compute(tokens);
        }
      }
    }
    var result = 0;
    for (i = 0; i < results.length; i++) {
      if (results[i]) {
        result++;
      }
    }
    return result;
  };
  exports.COUNTUNIQUE = function() {
    return misc.UNIQUE.apply(null, utils2.flatten(arguments)).length;
  };
  exports.COVARIANCE = {};
  exports.COVARIANCE.P = function(array1, array2) {
    array1 = utils2.parseNumberArray(utils2.flatten(array1));
    array2 = utils2.parseNumberArray(utils2.flatten(array2));
    if (utils2.anyIsError(array1, array2)) {
      return error2.value;
    }
    var mean1 = jStat.mean(array1);
    var mean2 = jStat.mean(array2);
    var result = 0;
    var n2 = array1.length;
    for (var i = 0; i < n2; i++) {
      result += (array1[i] - mean1) * (array2[i] - mean2);
    }
    return result / n2;
  };
  exports.COVARIANCE.S = function(array1, array2) {
    array1 = utils2.parseNumberArray(utils2.flatten(array1));
    array2 = utils2.parseNumberArray(utils2.flatten(array2));
    if (utils2.anyIsError(array1, array2)) {
      return error2.value;
    }
    return jStat.covariance(array1, array2);
  };
  exports.DEVSQ = function() {
    var range2 = utils2.parseNumberArray(utils2.flatten(arguments));
    if (range2 instanceof Error) {
      return range2;
    }
    var mean = jStat.mean(range2);
    var result = 0;
    for (var i = 0; i < range2.length; i++) {
      result += Math.pow(range2[i] - mean, 2);
    }
    return result;
  };
  exports.EXPON = {};
  exports.EXPON.DIST = function(x2, lambda, cumulative) {
    x2 = utils2.parseNumber(x2);
    lambda = utils2.parseNumber(lambda);
    if (utils2.anyIsError(x2, lambda)) {
      return error2.value;
    }
    return cumulative ? jStat.exponential.cdf(x2, lambda) : jStat.exponential.pdf(x2, lambda);
  };
  exports.F = {};
  exports.F.DIST = function(x2, d1, d2, cumulative) {
    x2 = utils2.parseNumber(x2);
    d1 = utils2.parseNumber(d1);
    d2 = utils2.parseNumber(d2);
    if (utils2.anyIsError(x2, d1, d2)) {
      return error2.value;
    }
    return cumulative ? jStat.centralF.cdf(x2, d1, d2) : jStat.centralF.pdf(x2, d1, d2);
  };
  exports.F.DIST.RT = function(x2, d1, d2) {
    if (arguments.length !== 3) {
      return error2.na;
    }
    if (x2 < 0 || d1 < 1 || d2 < 1) {
      return error2.num;
    }
    if (typeof x2 !== "number" || typeof d1 !== "number" || typeof d2 !== "number") {
      return error2.value;
    }
    return 1 - jStat.centralF.cdf(x2, d1, d2);
  };
  exports.F.INV = function(probability, d1, d2) {
    probability = utils2.parseNumber(probability);
    d1 = utils2.parseNumber(d1);
    d2 = utils2.parseNumber(d2);
    if (utils2.anyIsError(probability, d1, d2)) {
      return error2.value;
    }
    if (probability <= 0 || probability > 1) {
      return error2.num;
    }
    return jStat.centralF.inv(probability, d1, d2);
  };
  exports.F.INV.RT = function(p2, d1, d2) {
    if (arguments.length !== 3) {
      return error2.na;
    }
    if (p2 < 0 || p2 > 1 || d1 < 1 || d1 > Math.pow(10, 10) || d2 < 1 || d2 > Math.pow(10, 10)) {
      return error2.num;
    }
    if (typeof p2 !== "number" || typeof d1 !== "number" || typeof d2 !== "number") {
      return error2.value;
    }
    return jStat.centralF.inv(1 - p2, d1, d2);
  };
  exports.F.TEST = function(array1, array2) {
    if (!array1 || !array2) {
      return error2.na;
    }
    if (!(array1 instanceof Array) || !(array2 instanceof Array)) {
      return error2.na;
    }
    if (array1.length < 2 || array2.length < 2) {
      return error2.div0;
    }
    var sumOfSquares = function(values, x12) {
      var sum = 0;
      for (var i = 0; i < values.length; i++) {
        sum += Math.pow(values[i] - x12, 2);
      }
      return sum;
    };
    var x1 = mathTrig2.SUM(array1) / array1.length;
    var x2 = mathTrig2.SUM(array2) / array2.length;
    var sum1 = sumOfSquares(array1, x1) / (array1.length - 1);
    var sum2 = sumOfSquares(array2, x2) / (array2.length - 1);
    return sum1 / sum2;
  };
  exports.FISHER = function(x2) {
    x2 = utils2.parseNumber(x2);
    if (x2 instanceof Error) {
      return x2;
    }
    return Math.log((1 + x2) / (1 - x2)) / 2;
  };
  exports.FISHERINV = function(y2) {
    y2 = utils2.parseNumber(y2);
    if (y2 instanceof Error) {
      return y2;
    }
    var e2y = Math.exp(2 * y2);
    return (e2y - 1) / (e2y + 1);
  };
  exports.FORECAST = function(x2, data_y, data_x) {
    x2 = utils2.parseNumber(x2);
    data_y = utils2.parseNumberArray(utils2.flatten(data_y));
    data_x = utils2.parseNumberArray(utils2.flatten(data_x));
    if (utils2.anyIsError(x2, data_y, data_x)) {
      return error2.value;
    }
    var xmean = jStat.mean(data_x);
    var ymean = jStat.mean(data_y);
    var n2 = data_x.length;
    var num = 0;
    var den = 0;
    for (var i = 0; i < n2; i++) {
      num += (data_x[i] - xmean) * (data_y[i] - ymean);
      den += Math.pow(data_x[i] - xmean, 2);
    }
    var b = num / den;
    var a = ymean - b * xmean;
    return a + b * x2;
  };
  exports.FREQUENCY = function(data, bins) {
    data = utils2.parseNumberArray(utils2.flatten(data));
    bins = utils2.parseNumberArray(utils2.flatten(bins));
    if (utils2.anyIsError(data, bins)) {
      return error2.value;
    }
    var n2 = data.length;
    var b = bins.length;
    var r2 = [];
    for (var i = 0; i <= b; i++) {
      r2[i] = 0;
      for (var j = 0; j < n2; j++) {
        if (i === 0) {
          if (data[j] <= bins[0]) {
            r2[0] += 1;
          }
        } else if (i < b) {
          if (data[j] > bins[i - 1] && data[j] <= bins[i]) {
            r2[i] += 1;
          }
        } else if (i === b) {
          if (data[j] > bins[b - 1]) {
            r2[b] += 1;
          }
        }
      }
    }
    return r2;
  };
  exports.GAMMA = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    if (number === 0) {
      return error2.num;
    }
    if (parseInt(number, 10) === number && number < 0) {
      return error2.num;
    }
    return jStat.gammafn(number);
  };
  exports.GAMMA.DIST = function(value, alpha, beta, cumulative) {
    if (arguments.length !== 4) {
      return error2.na;
    }
    if (value < 0 || alpha <= 0 || beta <= 0) {
      return error2.value;
    }
    if (typeof value !== "number" || typeof alpha !== "number" || typeof beta !== "number") {
      return error2.value;
    }
    return cumulative ? jStat.gamma.cdf(value, alpha, beta, true) : jStat.gamma.pdf(value, alpha, beta, false);
  };
  exports.GAMMA.INV = function(probability, alpha, beta) {
    if (arguments.length !== 3) {
      return error2.na;
    }
    if (probability < 0 || probability > 1 || alpha <= 0 || beta <= 0) {
      return error2.num;
    }
    if (typeof probability !== "number" || typeof alpha !== "number" || typeof beta !== "number") {
      return error2.value;
    }
    return jStat.gamma.inv(probability, alpha, beta);
  };
  exports.GAMMALN = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    return jStat.gammaln(number);
  };
  exports.GAMMALN.PRECISE = function(x2) {
    if (arguments.length !== 1) {
      return error2.na;
    }
    if (x2 <= 0) {
      return error2.num;
    }
    if (typeof x2 !== "number") {
      return error2.value;
    }
    return jStat.gammaln(x2);
  };
  exports.GAUSS = function(z2) {
    z2 = utils2.parseNumber(z2);
    if (z2 instanceof Error) {
      return z2;
    }
    return jStat.normal.cdf(z2, 0, 1) - 0.5;
  };
  exports.GEOMEAN = function() {
    var args = utils2.parseNumberArray(utils2.flatten(arguments));
    if (args instanceof Error) {
      return args;
    }
    return jStat.geomean(args);
  };
  exports.GROWTH = function(known_y, known_x, new_x, use_const) {
    known_y = utils2.parseNumberArray(known_y);
    if (known_y instanceof Error) {
      return known_y;
    }
    var i;
    if (known_x === void 0) {
      known_x = [];
      for (i = 1; i <= known_y.length; i++) {
        known_x.push(i);
      }
    }
    if (new_x === void 0) {
      new_x = [];
      for (i = 1; i <= known_y.length; i++) {
        new_x.push(i);
      }
    }
    known_x = utils2.parseNumberArray(known_x);
    new_x = utils2.parseNumberArray(new_x);
    if (utils2.anyIsError(known_x, new_x)) {
      return error2.value;
    }
    if (use_const === void 0) {
      use_const = true;
    }
    var n2 = known_y.length;
    var avg_x = 0;
    var avg_y = 0;
    var avg_xy = 0;
    var avg_xx = 0;
    for (i = 0; i < n2; i++) {
      var x2 = known_x[i];
      var y2 = Math.log(known_y[i]);
      avg_x += x2;
      avg_y += y2;
      avg_xy += x2 * y2;
      avg_xx += x2 * x2;
    }
    avg_x /= n2;
    avg_y /= n2;
    avg_xy /= n2;
    avg_xx /= n2;
    var beta;
    var alpha;
    if (use_const) {
      beta = (avg_xy - avg_x * avg_y) / (avg_xx - avg_x * avg_x);
      alpha = avg_y - beta * avg_x;
    } else {
      beta = avg_xy / avg_xx;
      alpha = 0;
    }
    var new_y = [];
    for (i = 0; i < new_x.length; i++) {
      new_y.push(Math.exp(alpha + beta * new_x[i]));
    }
    return new_y;
  };
  exports.HARMEAN = function() {
    var range2 = utils2.parseNumberArray(utils2.flatten(arguments));
    if (range2 instanceof Error) {
      return range2;
    }
    var n2 = range2.length;
    var den = 0;
    for (var i = 0; i < n2; i++) {
      den += 1 / range2[i];
    }
    return n2 / den;
  };
  exports.HYPGEOM = {};
  exports.HYPGEOM.DIST = function(x2, n2, M2, N2, cumulative) {
    x2 = utils2.parseNumber(x2);
    n2 = utils2.parseNumber(n2);
    M2 = utils2.parseNumber(M2);
    N2 = utils2.parseNumber(N2);
    if (utils2.anyIsError(x2, n2, M2, N2)) {
      return error2.value;
    }
    function pdf(x3, n3, M3, N3) {
      return mathTrig2.COMBIN(M3, x3) * mathTrig2.COMBIN(N3 - M3, n3 - x3) / mathTrig2.COMBIN(N3, n3);
    }
    function cdf(x3, n3, M3, N3) {
      var result = 0;
      for (var i = 0; i <= x3; i++) {
        result += pdf(i, n3, M3, N3);
      }
      return result;
    }
    return cumulative ? cdf(x2, n2, M2, N2) : pdf(x2, n2, M2, N2);
  };
  exports.INTERCEPT = function(known_y, known_x) {
    known_y = utils2.parseNumberArray(known_y);
    known_x = utils2.parseNumberArray(known_x);
    if (utils2.anyIsError(known_y, known_x)) {
      return error2.value;
    }
    if (known_y.length !== known_x.length) {
      return error2.na;
    }
    return exports.FORECAST(0, known_y, known_x);
  };
  exports.KURT = function() {
    var range2 = utils2.parseNumberArray(utils2.flatten(arguments));
    if (range2 instanceof Error) {
      return range2;
    }
    var mean = jStat.mean(range2);
    var n2 = range2.length;
    var sigma = 0;
    for (var i = 0; i < n2; i++) {
      sigma += Math.pow(range2[i] - mean, 4);
    }
    sigma = sigma / Math.pow(jStat.stdev(range2, true), 4);
    return n2 * (n2 + 1) / ((n2 - 1) * (n2 - 2) * (n2 - 3)) * sigma - 3 * (n2 - 1) * (n2 - 1) / ((n2 - 2) * (n2 - 3));
  };
  exports.LARGE = function(range2, k) {
    range2 = utils2.parseNumberArray(utils2.flatten(range2));
    k = utils2.parseNumber(k);
    if (utils2.anyIsError(range2, k)) {
      return range2;
    }
    return range2.sort(function(a, b) {
      return b - a;
    })[k - 1];
  };
  exports.LINEST = function(data_y, data_x) {
    data_y = utils2.parseNumberArray(utils2.flatten(data_y));
    data_x = utils2.parseNumberArray(utils2.flatten(data_x));
    if (utils2.anyIsError(data_y, data_x)) {
      return error2.value;
    }
    var ymean = jStat.mean(data_y);
    var xmean = jStat.mean(data_x);
    var n2 = data_x.length;
    var num = 0;
    var den = 0;
    for (var i = 0; i < n2; i++) {
      num += (data_x[i] - xmean) * (data_y[i] - ymean);
      den += Math.pow(data_x[i] - xmean, 2);
    }
    var m2 = num / den;
    var b = ymean - m2 * xmean;
    return [m2, b];
  };
  exports.LOGEST = function(data_y, data_x) {
    data_y = utils2.parseNumberArray(utils2.flatten(data_y));
    data_x = utils2.parseNumberArray(utils2.flatten(data_x));
    if (utils2.anyIsError(data_y, data_x)) {
      return error2.value;
    }
    for (var i = 0; i < data_y.length; i++) {
      data_y[i] = Math.log(data_y[i]);
    }
    var result = exports.LINEST(data_y, data_x);
    result[0] = Math.round(Math.exp(result[0]) * 1e6) / 1e6;
    result[1] = Math.round(Math.exp(result[1]) * 1e6) / 1e6;
    return result;
  };
  exports.LOGNORM = {};
  exports.LOGNORM.DIST = function(x2, mean, sd2, cumulative) {
    x2 = utils2.parseNumber(x2);
    mean = utils2.parseNumber(mean);
    sd2 = utils2.parseNumber(sd2);
    if (utils2.anyIsError(x2, mean, sd2)) {
      return error2.value;
    }
    return cumulative ? jStat.lognormal.cdf(x2, mean, sd2) : jStat.lognormal.pdf(x2, mean, sd2);
  };
  exports.LOGNORM.INV = function(probability, mean, sd2) {
    probability = utils2.parseNumber(probability);
    mean = utils2.parseNumber(mean);
    sd2 = utils2.parseNumber(sd2);
    if (utils2.anyIsError(probability, mean, sd2)) {
      return error2.value;
    }
    return jStat.lognormal.inv(probability, mean, sd2);
  };
  exports.MAX = function() {
    var range2 = utils2.numbers(utils2.flatten(arguments));
    return range2.length === 0 ? 0 : Math.max.apply(Math, range2);
  };
  exports.MAXA = function() {
    var range2 = utils2.arrayValuesToNumbers(utils2.flatten(arguments));
    return range2.length === 0 ? 0 : Math.max.apply(Math, range2);
  };
  exports.MEDIAN = function() {
    var range2 = utils2.arrayValuesToNumbers(utils2.flatten(arguments));
    var result = jStat.median(range2);
    if (isNaN(result)) {
      result = error2.num;
    }
    return result;
  };
  exports.MIN = function() {
    var range2 = utils2.numbers(utils2.flatten(arguments));
    return range2.length === 0 ? 0 : Math.min.apply(Math, range2);
  };
  exports.MINA = function() {
    var range2 = utils2.arrayValuesToNumbers(utils2.flatten(arguments));
    return range2.length === 0 ? 0 : Math.min.apply(Math, range2);
  };
  exports.MODE = {};
  exports.MODE.MULT = function() {
    var range2 = utils2.parseNumberArray(utils2.flatten(arguments));
    if (range2 instanceof Error) {
      return range2;
    }
    var n2 = range2.length;
    var count = {};
    var maxItems = [];
    var max2 = 0;
    var currentItem;
    for (var i = 0; i < n2; i++) {
      currentItem = range2[i];
      count[currentItem] = count[currentItem] ? count[currentItem] + 1 : 1;
      if (count[currentItem] > max2) {
        max2 = count[currentItem];
        maxItems = [];
      }
      if (count[currentItem] === max2) {
        maxItems[maxItems.length] = currentItem;
      }
    }
    return maxItems;
  };
  exports.MODE.SNGL = function() {
    var range2 = utils2.parseNumberArray(utils2.flatten(arguments));
    if (range2 instanceof Error) {
      return range2;
    }
    return exports.MODE.MULT(range2).sort(function(a, b) {
      return a - b;
    })[0];
  };
  exports.NEGBINOM = {};
  exports.NEGBINOM.DIST = function(k, r2, p2, cumulative) {
    k = utils2.parseNumber(k);
    r2 = utils2.parseNumber(r2);
    p2 = utils2.parseNumber(p2);
    if (utils2.anyIsError(k, r2, p2)) {
      return error2.value;
    }
    return cumulative ? jStat.negbin.cdf(k, r2, p2) : jStat.negbin.pdf(k, r2, p2);
  };
  exports.NORM = {};
  exports.NORM.DIST = function(x2, mean, sd2, cumulative) {
    x2 = utils2.parseNumber(x2);
    mean = utils2.parseNumber(mean);
    sd2 = utils2.parseNumber(sd2);
    if (utils2.anyIsError(x2, mean, sd2)) {
      return error2.value;
    }
    if (sd2 <= 0) {
      return error2.num;
    }
    return cumulative ? jStat.normal.cdf(x2, mean, sd2) : jStat.normal.pdf(x2, mean, sd2);
  };
  exports.NORM.INV = function(probability, mean, sd2) {
    probability = utils2.parseNumber(probability);
    mean = utils2.parseNumber(mean);
    sd2 = utils2.parseNumber(sd2);
    if (utils2.anyIsError(probability, mean, sd2)) {
      return error2.value;
    }
    return jStat.normal.inv(probability, mean, sd2);
  };
  exports.NORM.S = {};
  exports.NORM.S.DIST = function(z2, cumulative) {
    z2 = utils2.parseNumber(z2);
    if (z2 instanceof Error) {
      return error2.value;
    }
    return cumulative ? jStat.normal.cdf(z2, 0, 1) : jStat.normal.pdf(z2, 0, 1);
  };
  exports.NORM.S.INV = function(probability) {
    probability = utils2.parseNumber(probability);
    if (probability instanceof Error) {
      return error2.value;
    }
    return jStat.normal.inv(probability, 0, 1);
  };
  exports.PEARSON = function(data_x, data_y) {
    data_y = utils2.parseNumberArray(utils2.flatten(data_y));
    data_x = utils2.parseNumberArray(utils2.flatten(data_x));
    if (utils2.anyIsError(data_y, data_x)) {
      return error2.value;
    }
    var xmean = jStat.mean(data_x);
    var ymean = jStat.mean(data_y);
    var n2 = data_x.length;
    var num = 0;
    var den1 = 0;
    var den2 = 0;
    for (var i = 0; i < n2; i++) {
      num += (data_x[i] - xmean) * (data_y[i] - ymean);
      den1 += Math.pow(data_x[i] - xmean, 2);
      den2 += Math.pow(data_y[i] - ymean, 2);
    }
    return num / Math.sqrt(den1 * den2);
  };
  exports.PERCENTILE = {};
  exports.PERCENTILE.EXC = function(array, k) {
    array = utils2.parseNumberArray(utils2.flatten(array));
    k = utils2.parseNumber(k);
    if (utils2.anyIsError(array, k)) {
      return error2.value;
    }
    array = array.sort(function(a, b) {
      {
        return a - b;
      }
    });
    var n2 = array.length;
    if (k < 1 / (n2 + 1) || k > 1 - 1 / (n2 + 1)) {
      return error2.num;
    }
    var l2 = k * (n2 + 1) - 1;
    var fl = Math.floor(l2);
    return utils2.cleanFloat(l2 === fl ? array[l2] : array[fl] + (l2 - fl) * (array[fl + 1] - array[fl]));
  };
  exports.PERCENTILE.INC = function(array, k) {
    array = utils2.parseNumberArray(utils2.flatten(array));
    k = utils2.parseNumber(k);
    if (utils2.anyIsError(array, k)) {
      return error2.value;
    }
    array = array.sort(function(a, b) {
      return a - b;
    });
    var n2 = array.length;
    var l2 = k * (n2 - 1);
    var fl = Math.floor(l2);
    return utils2.cleanFloat(l2 === fl ? array[l2] : array[fl] + (l2 - fl) * (array[fl + 1] - array[fl]));
  };
  exports.PERCENTRANK = {};
  exports.PERCENTRANK.EXC = function(array, x2, significance) {
    significance = significance === void 0 ? 3 : significance;
    array = utils2.parseNumberArray(utils2.flatten(array));
    x2 = utils2.parseNumber(x2);
    significance = utils2.parseNumber(significance);
    if (utils2.anyIsError(array, x2, significance)) {
      return error2.value;
    }
    array = array.sort(function(a, b) {
      return a - b;
    });
    var uniques = misc.UNIQUE.apply(null, array);
    var n2 = array.length;
    var m2 = uniques.length;
    var power = Math.pow(10, significance);
    var result = 0;
    var match2 = false;
    var i = 0;
    while (!match2 && i < m2) {
      if (x2 === uniques[i]) {
        result = (array.indexOf(uniques[i]) + 1) / (n2 + 1);
        match2 = true;
      } else if (x2 >= uniques[i] && (x2 < uniques[i + 1] || i === m2 - 1)) {
        result = (array.indexOf(uniques[i]) + 1 + (x2 - uniques[i]) / (uniques[i + 1] - uniques[i])) / (n2 + 1);
        match2 = true;
      }
      i++;
    }
    return Math.floor(result * power) / power;
  };
  exports.PERCENTRANK.INC = function(array, x2, significance) {
    significance = significance === void 0 ? 3 : significance;
    array = utils2.parseNumberArray(utils2.flatten(array));
    x2 = utils2.parseNumber(x2);
    significance = utils2.parseNumber(significance);
    if (utils2.anyIsError(array, x2, significance)) {
      return error2.value;
    }
    array = array.sort(function(a, b) {
      return a - b;
    });
    var uniques = misc.UNIQUE.apply(null, array);
    var n2 = array.length;
    var m2 = uniques.length;
    var power = Math.pow(10, significance);
    var result = 0;
    var match2 = false;
    var i = 0;
    while (!match2 && i < m2) {
      if (x2 === uniques[i]) {
        result = array.indexOf(uniques[i]) / (n2 - 1);
        match2 = true;
      } else if (x2 >= uniques[i] && (x2 < uniques[i + 1] || i === m2 - 1)) {
        result = (array.indexOf(uniques[i]) + (x2 - uniques[i]) / (uniques[i + 1] - uniques[i])) / (n2 - 1);
        match2 = true;
      }
      i++;
    }
    return Math.floor(result * power) / power;
  };
  exports.PERMUT = function(number, number_chosen) {
    number = utils2.parseNumber(number);
    number_chosen = utils2.parseNumber(number_chosen);
    if (utils2.anyIsError(number, number_chosen)) {
      return error2.value;
    }
    return mathTrig2.FACT(number) / mathTrig2.FACT(number - number_chosen);
  };
  exports.PERMUTATIONA = function(number, number_chosen) {
    number = utils2.parseNumber(number);
    number_chosen = utils2.parseNumber(number_chosen);
    if (utils2.anyIsError(number, number_chosen)) {
      return error2.value;
    }
    return Math.pow(number, number_chosen);
  };
  exports.PHI = function(x2) {
    x2 = utils2.parseNumber(x2);
    if (x2 instanceof Error) {
      return error2.value;
    }
    return Math.exp(-0.5 * x2 * x2) / SQRT2PI;
  };
  exports.POISSON = {};
  exports.POISSON.DIST = function(x2, mean, cumulative) {
    x2 = utils2.parseNumber(x2);
    mean = utils2.parseNumber(mean);
    if (utils2.anyIsError(x2, mean)) {
      return error2.value;
    }
    return cumulative ? jStat.poisson.cdf(x2, mean) : jStat.poisson.pdf(x2, mean);
  };
  exports.PROB = function(range2, probability, lower, upper) {
    if (lower === void 0) {
      return 0;
    }
    upper = upper === void 0 ? lower : upper;
    range2 = utils2.parseNumberArray(utils2.flatten(range2));
    probability = utils2.parseNumberArray(utils2.flatten(probability));
    lower = utils2.parseNumber(lower);
    upper = utils2.parseNumber(upper);
    if (utils2.anyIsError(range2, probability, lower, upper)) {
      return error2.value;
    }
    if (lower === upper) {
      return range2.indexOf(lower) >= 0 ? probability[range2.indexOf(lower)] : 0;
    }
    var sorted = range2.sort(function(a, b) {
      return a - b;
    });
    var n2 = sorted.length;
    var result = 0;
    for (var i = 0; i < n2; i++) {
      if (sorted[i] >= lower && sorted[i] <= upper) {
        result += probability[range2.indexOf(sorted[i])];
      }
    }
    return result;
  };
  exports.QUARTILE = {};
  exports.QUARTILE.EXC = function(range2, quart) {
    range2 = utils2.parseNumberArray(utils2.flatten(range2));
    quart = utils2.parseNumber(quart);
    if (utils2.anyIsError(range2, quart)) {
      return error2.value;
    }
    switch (quart) {
      case 1:
        return exports.PERCENTILE.EXC(range2, 0.25);
      case 2:
        return exports.PERCENTILE.EXC(range2, 0.5);
      case 3:
        return exports.PERCENTILE.EXC(range2, 0.75);
      default:
        return error2.num;
    }
  };
  exports.QUARTILE.INC = function(range2, quart) {
    range2 = utils2.parseNumberArray(utils2.flatten(range2));
    quart = utils2.parseNumber(quart);
    if (utils2.anyIsError(range2, quart)) {
      return error2.value;
    }
    switch (quart) {
      case 1:
        return exports.PERCENTILE.INC(range2, 0.25);
      case 2:
        return exports.PERCENTILE.INC(range2, 0.5);
      case 3:
        return exports.PERCENTILE.INC(range2, 0.75);
      default:
        return error2.num;
    }
  };
  exports.RANK = {};
  exports.RANK.AVG = function(number, range2, order) {
    number = utils2.parseNumber(number);
    range2 = utils2.parseNumberArray(utils2.flatten(range2));
    if (utils2.anyIsError(number, range2)) {
      return error2.value;
    }
    range2 = utils2.flatten(range2);
    order = order || false;
    var sort = order ? function(a, b) {
      return a - b;
    } : function(a, b) {
      return b - a;
    };
    range2 = range2.sort(sort);
    var length = range2.length;
    var count = 0;
    for (var i = 0; i < length; i++) {
      if (range2[i] === number) {
        count++;
      }
    }
    return count > 1 ? (2 * range2.indexOf(number) + count + 1) / 2 : range2.indexOf(number) + 1;
  };
  exports.RANK.EQ = function(number, range2, order) {
    number = utils2.parseNumber(number);
    range2 = utils2.parseNumberArray(utils2.flatten(range2));
    if (utils2.anyIsError(number, range2)) {
      return error2.value;
    }
    order = order || false;
    var sort = order ? function(a, b) {
      return a - b;
    } : function(a, b) {
      return b - a;
    };
    range2 = range2.sort(sort);
    return range2.indexOf(number) + 1;
  };
  exports.ROW = function(matrix, index) {
    if (arguments.length !== 2) {
      return error2.na;
    }
    if (index < 0) {
      return error2.num;
    }
    if (!(matrix instanceof Array) || typeof index !== "number") {
      return error2.value;
    }
    if (matrix.length === 0) {
      return void 0;
    }
    return jStat.row(matrix, index);
  };
  exports.ROWS = function(matrix) {
    if (arguments.length !== 1) {
      return error2.na;
    }
    if (!(matrix instanceof Array)) {
      return error2.value;
    }
    if (matrix.length === 0) {
      return 0;
    }
    return jStat.rows(matrix);
  };
  exports.RSQ = function(data_x, data_y) {
    data_x = utils2.parseNumberArray(utils2.flatten(data_x));
    data_y = utils2.parseNumberArray(utils2.flatten(data_y));
    if (utils2.anyIsError(data_x, data_y)) {
      return error2.value;
    }
    return Math.pow(exports.PEARSON(data_x, data_y), 2);
  };
  exports.SKEW = function() {
    var range2 = utils2.parseNumberArray(utils2.flatten(arguments));
    if (range2 instanceof Error) {
      return range2;
    }
    var mean = jStat.mean(range2);
    var n2 = range2.length;
    var sigma = 0;
    for (var i = 0; i < n2; i++) {
      sigma += Math.pow(range2[i] - mean, 3);
    }
    return n2 * sigma / ((n2 - 1) * (n2 - 2) * Math.pow(jStat.stdev(range2, true), 3));
  };
  exports.SKEW.P = function() {
    var range2 = utils2.parseNumberArray(utils2.flatten(arguments));
    if (range2 instanceof Error) {
      return range2;
    }
    var mean = jStat.mean(range2);
    var n2 = range2.length;
    var m2 = 0;
    var m3 = 0;
    for (var i = 0; i < n2; i++) {
      m3 += Math.pow(range2[i] - mean, 3);
      m2 += Math.pow(range2[i] - mean, 2);
    }
    m3 = m3 / n2;
    m2 = m2 / n2;
    return m3 / Math.pow(m2, 3 / 2);
  };
  exports.SLOPE = function(data_y, data_x) {
    data_y = utils2.parseNumberArray(utils2.flatten(data_y));
    data_x = utils2.parseNumberArray(utils2.flatten(data_x));
    if (utils2.anyIsError(data_y, data_x)) {
      return error2.value;
    }
    var xmean = jStat.mean(data_x);
    var ymean = jStat.mean(data_y);
    var n2 = data_x.length;
    var num = 0;
    var den = 0;
    for (var i = 0; i < n2; i++) {
      num += (data_x[i] - xmean) * (data_y[i] - ymean);
      den += Math.pow(data_x[i] - xmean, 2);
    }
    return num / den;
  };
  exports.SMALL = function(range2, k) {
    range2 = utils2.parseNumberArray(utils2.flatten(range2));
    k = utils2.parseNumber(k);
    if (utils2.anyIsError(range2, k)) {
      return range2;
    }
    return range2.sort(function(a, b) {
      return a - b;
    })[k - 1];
  };
  exports.STANDARDIZE = function(x2, mean, sd2) {
    x2 = utils2.parseNumber(x2);
    mean = utils2.parseNumber(mean);
    sd2 = utils2.parseNumber(sd2);
    if (utils2.anyIsError(x2, mean, sd2)) {
      return error2.value;
    }
    return (x2 - mean) / sd2;
  };
  exports.STDEV = {};
  exports.STDEV.P = function() {
    var v2 = exports.VAR.P.apply(this, arguments);
    var result = Math.sqrt(v2);
    if (isNaN(result)) {
      result = error2.num;
    }
    return result;
  };
  exports.STDEV.S = function() {
    var v2 = exports.VAR.S.apply(this, arguments);
    var result = Math.sqrt(v2);
    return result;
  };
  exports.STDEVA = function() {
    var v2 = exports.VARA.apply(this, arguments);
    var result = Math.sqrt(v2);
    return result;
  };
  exports.STDEVPA = function() {
    var v2 = exports.VARPA.apply(this, arguments);
    var result = Math.sqrt(v2);
    if (isNaN(result)) {
      result = error2.num;
    }
    return result;
  };
  exports.STEYX = function(data_y, data_x) {
    data_y = utils2.parseNumberArray(utils2.flatten(data_y));
    data_x = utils2.parseNumberArray(utils2.flatten(data_x));
    if (utils2.anyIsError(data_y, data_x)) {
      return error2.value;
    }
    var xmean = jStat.mean(data_x);
    var ymean = jStat.mean(data_y);
    var n2 = data_x.length;
    var lft = 0;
    var num = 0;
    var den = 0;
    for (var i = 0; i < n2; i++) {
      lft += Math.pow(data_y[i] - ymean, 2);
      num += (data_x[i] - xmean) * (data_y[i] - ymean);
      den += Math.pow(data_x[i] - xmean, 2);
    }
    return Math.sqrt((lft - num * num / den) / (n2 - 2));
  };
  exports.TRANSPOSE = function(matrix) {
    if (!matrix) {
      return error2.na;
    }
    return jStat.transpose(matrix);
  };
  exports.T = text$1.T;
  exports.T.DIST = function(x2, df2, cumulative) {
    x2 = utils2.parseNumber(x2);
    df2 = utils2.parseNumber(df2);
    if (utils2.anyIsError(x2, df2)) {
      return error2.value;
    }
    return cumulative ? jStat.studentt.cdf(x2, df2) : jStat.studentt.pdf(x2, df2);
  };
  exports.T.DIST["2T"] = function(x2, df2) {
    if (arguments.length !== 2) {
      return error2.na;
    }
    if (x2 < 0 || df2 < 1) {
      return error2.num;
    }
    if (typeof x2 !== "number" || typeof df2 !== "number") {
      return error2.value;
    }
    return (1 - jStat.studentt.cdf(x2, df2)) * 2;
  };
  exports.T.DIST.RT = function(x2, df2) {
    if (arguments.length !== 2) {
      return error2.na;
    }
    if (x2 < 0 || df2 < 1) {
      return error2.num;
    }
    if (typeof x2 !== "number" || typeof df2 !== "number") {
      return error2.value;
    }
    return 1 - jStat.studentt.cdf(x2, df2);
  };
  exports.T.INV = function(probability, df2) {
    probability = utils2.parseNumber(probability);
    df2 = utils2.parseNumber(df2);
    if (utils2.anyIsError(probability, df2)) {
      return error2.value;
    }
    return jStat.studentt.inv(probability, df2);
  };
  exports.T.INV["2T"] = function(probability, df2) {
    probability = utils2.parseNumber(probability);
    df2 = utils2.parseNumber(df2);
    if (probability <= 0 || probability > 1 || df2 < 1) {
      return error2.num;
    }
    if (utils2.anyIsError(probability, df2)) {
      return error2.value;
    }
    return Math.abs(jStat.studentt.inv(probability / 2, df2));
  };
  exports.T.TEST = function(data_x, data_y) {
    data_x = utils2.parseNumberArray(utils2.flatten(data_x));
    data_y = utils2.parseNumberArray(utils2.flatten(data_y));
    if (utils2.anyIsError(data_x, data_y)) {
      return error2.value;
    }
    var mean_x = jStat.mean(data_x);
    var mean_y = jStat.mean(data_y);
    var s_x = 0;
    var s_y = 0;
    var i;
    for (i = 0; i < data_x.length; i++) {
      s_x += Math.pow(data_x[i] - mean_x, 2);
    }
    for (i = 0; i < data_y.length; i++) {
      s_y += Math.pow(data_y[i] - mean_y, 2);
    }
    s_x = s_x / (data_x.length - 1);
    s_y = s_y / (data_y.length - 1);
    var t2 = Math.abs(mean_x - mean_y) / Math.sqrt(s_x / data_x.length + s_y / data_y.length);
    return exports.T.DIST["2T"](t2, data_x.length + data_y.length - 2);
  };
  exports.TREND = function(data_y, data_x, new_data_x) {
    data_y = utils2.parseNumberArray(utils2.flatten(data_y));
    data_x = utils2.parseNumberArray(utils2.flatten(data_x));
    new_data_x = utils2.parseNumberArray(utils2.flatten(new_data_x));
    if (utils2.anyIsError(data_y, data_x, new_data_x)) {
      return error2.value;
    }
    var linest = exports.LINEST(data_y, data_x);
    var m2 = linest[0];
    var b = linest[1];
    var result = [];
    new_data_x.forEach(function(x2) {
      result.push(m2 * x2 + b);
    });
    return result;
  };
  exports.TRIMMEAN = function(range2, percent) {
    range2 = utils2.parseNumberArray(utils2.flatten(range2));
    percent = utils2.parseNumber(percent);
    if (utils2.anyIsError(range2, percent)) {
      return error2.value;
    }
    var trim = mathTrig2.FLOOR(range2.length * percent, 2) / 2;
    return jStat.mean(utils2.initial(utils2.rest(range2.sort(function(a, b) {
      return a - b;
    }), trim), trim));
  };
  exports.VAR = {};
  exports.VAR.P = function() {
    var range2 = utils2.numbers(utils2.flatten(arguments));
    var n2 = range2.length;
    var sigma = 0;
    var mean = exports.AVERAGE(range2);
    var result;
    for (var i = 0; i < n2; i++) {
      sigma += Math.pow(range2[i] - mean, 2);
    }
    result = sigma / n2;
    if (isNaN(result)) {
      result = error2.num;
    }
    return result;
  };
  exports.VAR.S = function() {
    var range2 = utils2.numbers(utils2.flatten(arguments));
    var n2 = range2.length;
    var sigma = 0;
    var mean = exports.AVERAGE(range2);
    for (var i = 0; i < n2; i++) {
      sigma += Math.pow(range2[i] - mean, 2);
    }
    return sigma / (n2 - 1);
  };
  exports.VARA = function() {
    var range2 = utils2.flatten(arguments);
    var n2 = range2.length;
    var sigma = 0;
    var count = 0;
    var mean = exports.AVERAGEA(range2);
    for (var i = 0; i < n2; i++) {
      var el = range2[i];
      if (typeof el === "number") {
        sigma += Math.pow(el - mean, 2);
      } else if (el === true) {
        sigma += Math.pow(1 - mean, 2);
      } else {
        sigma += Math.pow(0 - mean, 2);
      }
      if (el !== null) {
        count++;
      }
    }
    return sigma / (count - 1);
  };
  exports.VARPA = function() {
    var range2 = utils2.flatten(arguments);
    var n2 = range2.length;
    var sigma = 0;
    var count = 0;
    var mean = exports.AVERAGEA(range2);
    var result;
    for (var i = 0; i < n2; i++) {
      var el = range2[i];
      if (typeof el === "number") {
        sigma += Math.pow(el - mean, 2);
      } else if (el === true) {
        sigma += Math.pow(1 - mean, 2);
      } else {
        sigma += Math.pow(0 - mean, 2);
      }
      if (el !== null) {
        count++;
      }
    }
    result = sigma / count;
    if (isNaN(result)) {
      result = error2.num;
    }
    return result;
  };
  exports.WEIBULL = {};
  exports.WEIBULL.DIST = function(x2, alpha, beta, cumulative) {
    x2 = utils2.parseNumber(x2);
    alpha = utils2.parseNumber(alpha);
    beta = utils2.parseNumber(beta);
    if (utils2.anyIsError(x2, alpha, beta)) {
      return error2.value;
    }
    return cumulative ? 1 - Math.exp(-Math.pow(x2 / beta, alpha)) : Math.pow(x2, alpha - 1) * Math.exp(-Math.pow(x2 / beta, alpha)) * alpha / Math.pow(beta, alpha);
  };
  exports.Z = {};
  exports.Z.TEST = function(range2, x2, sd2) {
    range2 = utils2.parseNumberArray(utils2.flatten(range2));
    x2 = utils2.parseNumber(x2);
    if (utils2.anyIsError(range2, x2)) {
      return error2.value;
    }
    sd2 = sd2 || exports.STDEV.S(range2);
    var n2 = range2.length;
    return 1 - exports.NORM.S.DIST((exports.AVERAGE(range2) - x2) / (sd2 / Math.sqrt(n2)), true);
  };
})(statistical$1);
var information$1 = {};
(function(exports) {
  var error2 = error$3;
  exports.CELL = function() {
    throw new Error("CELL is not implemented");
  };
  exports.ERROR = {};
  exports.ERROR.TYPE = function(error_val) {
    switch (error_val) {
      case error2.nil:
        return 1;
      case error2.div0:
        return 2;
      case error2.value:
        return 3;
      case error2.ref:
        return 4;
      case error2.name:
        return 5;
      case error2.num:
        return 6;
      case error2.na:
        return 7;
      case error2.data:
        return 8;
    }
    return error2.na;
  };
  exports.INFO = function() {
    throw new Error("INFO is not implemented");
  };
  exports.ISBLANK = function(value) {
    return value === null;
  };
  exports.ISBINARY = function(number) {
    return /^[01]{1,10}$/.test(number);
  };
  exports.ISERR = function(value) {
    return [error2.value, error2.ref, error2.div0, error2.num, error2.name, error2.nil].indexOf(value) >= 0 || typeof value === "number" && (isNaN(value) || !isFinite(value));
  };
  exports.ISERROR = function(value) {
    return exports.ISERR(value) || value === error2.na;
  };
  exports.ISEVEN = function(number) {
    return Math.floor(Math.abs(number)) & 1 ? false : true;
  };
  exports.ISFORMULA = function() {
    throw new Error("ISFORMULA is not implemented");
  };
  exports.ISLOGICAL = function(value) {
    return value === true || value === false;
  };
  exports.ISNA = function(value) {
    return value === error2.na;
  };
  exports.ISNONTEXT = function(value) {
    return typeof value !== "string";
  };
  exports.ISNUMBER = function(value) {
    return typeof value === "number" && !isNaN(value) && isFinite(value);
  };
  exports.ISODD = function(number) {
    return Math.floor(Math.abs(number)) & 1 ? true : false;
  };
  exports.ISREF = function() {
    throw new Error("ISREF is not implemented");
  };
  exports.ISTEXT = function(value) {
    return typeof value === "string";
  };
  exports.N = function(value) {
    if (this.ISNUMBER(value)) {
      return value;
    }
    if (value instanceof Date) {
      return value.getTime();
    }
    if (value === true) {
      return 1;
    }
    if (value === false) {
      return 0;
    }
    if (this.ISERROR(value)) {
      return value;
    }
    return 0;
  };
  exports.NA = function() {
    return error2.na;
  };
  exports.SHEET = function() {
    throw new Error("SHEET is not implemented");
  };
  exports.SHEETS = function() {
    throw new Error("SHEETS is not implemented");
  };
  exports.TYPE = function(value) {
    if (this.ISNUMBER(value)) {
      return 1;
    }
    if (this.ISTEXT(value)) {
      return 2;
    }
    if (this.ISLOGICAL(value)) {
      return 4;
    }
    if (this.ISERROR(value)) {
      return 16;
    }
    if (Array.isArray(value)) {
      return 64;
    }
  };
})(information$1);
(function(exports) {
  var utils2 = common;
  var error2 = error$3;
  var statistical2 = statistical$1;
  var information2 = information$1;
  var evalExpression = criteriaEval;
  exports.ABS = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    var result = Math.abs(number);
    return result;
  };
  exports.ACOS = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    var result = Math.acos(number);
    if (isNaN(result)) {
      result = error2.num;
    }
    return result;
  };
  exports.ACOSH = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    var result = Math.log(number + Math.sqrt(number * number - 1));
    if (isNaN(result)) {
      result = error2.num;
    }
    return result;
  };
  exports.ACOT = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    var result = Math.atan(1 / number);
    return result;
  };
  exports.ACOTH = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    var result = 0.5 * Math.log((number + 1) / (number - 1));
    if (isNaN(result)) {
      result = error2.num;
    }
    return result;
  };
  exports.AGGREGATE = function(function_num, options, ref1, ref2) {
    function_num = utils2.parseNumber(function_num);
    options = utils2.parseNumber(function_num);
    if (utils2.anyIsError(function_num, options)) {
      return error2.value;
    }
    switch (function_num) {
      case 1:
        return statistical2.AVERAGE(ref1);
      case 2:
        return statistical2.COUNT(ref1);
      case 3:
        return statistical2.COUNTA(ref1);
      case 4:
        return statistical2.MAX(ref1);
      case 5:
        return statistical2.MIN(ref1);
      case 6:
        return exports.PRODUCT(ref1);
      case 7:
        return statistical2.STDEV.S(ref1);
      case 8:
        return statistical2.STDEV.P(ref1);
      case 9:
        return exports.SUM(ref1);
      case 10:
        return statistical2.VAR.S(ref1);
      case 11:
        return statistical2.VAR.P(ref1);
      case 12:
        return statistical2.MEDIAN(ref1);
      case 13:
        return statistical2.MODE.SNGL(ref1);
      case 14:
        return statistical2.LARGE(ref1, ref2);
      case 15:
        return statistical2.SMALL(ref1, ref2);
      case 16:
        return statistical2.PERCENTILE.INC(ref1, ref2);
      case 17:
        return statistical2.QUARTILE.INC(ref1, ref2);
      case 18:
        return statistical2.PERCENTILE.EXC(ref1, ref2);
      case 19:
        return statistical2.QUARTILE.EXC(ref1, ref2);
    }
  };
  exports.ARABIC = function(text2) {
    if (!/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/.test(text2)) {
      return error2.value;
    }
    var r2 = 0;
    text2.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, function(i) {
      r2 += {
        M: 1e3,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
      }[i];
    });
    return r2;
  };
  exports.ASIN = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    var result = Math.asin(number);
    if (isNaN(result)) {
      result = error2.num;
    }
    return result;
  };
  exports.ASINH = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    return Math.log(number + Math.sqrt(number * number + 1));
  };
  exports.ATAN = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    return Math.atan(number);
  };
  exports.ATAN2 = function(number_x, number_y) {
    number_x = utils2.parseNumber(number_x);
    number_y = utils2.parseNumber(number_y);
    if (utils2.anyIsError(number_x, number_y)) {
      return error2.value;
    }
    return Math.atan2(number_x, number_y);
  };
  exports.ATANH = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    var result = Math.log((1 + number) / (1 - number)) / 2;
    if (isNaN(result)) {
      result = error2.num;
    }
    return result;
  };
  exports.BASE = function(number, radix, min_length) {
    min_length = min_length || 0;
    number = utils2.parseNumber(number);
    radix = utils2.parseNumber(radix);
    min_length = utils2.parseNumber(min_length);
    if (utils2.anyIsError(number, radix, min_length)) {
      return error2.value;
    }
    min_length = min_length === void 0 ? 0 : min_length;
    var result = number.toString(radix);
    return new Array(Math.max(min_length + 1 - result.length, 0)).join("0") + result;
  };
  exports.CEILING = function(number, significance, mode) {
    significance = significance === void 0 ? 1 : Math.abs(significance);
    mode = mode || 0;
    number = utils2.parseNumber(number);
    significance = utils2.parseNumber(significance);
    mode = utils2.parseNumber(mode);
    if (utils2.anyIsError(number, significance, mode)) {
      return error2.value;
    }
    if (significance === 0) {
      return 0;
    }
    var precision = -Math.floor(Math.log(significance) / Math.log(10));
    if (number >= 0) {
      return exports.ROUND(Math.ceil(number / significance) * significance, precision);
    } else {
      if (mode === 0) {
        return -exports.ROUND(Math.floor(Math.abs(number) / significance) * significance, precision);
      } else {
        return -exports.ROUND(Math.ceil(Math.abs(number) / significance) * significance, precision);
      }
    }
  };
  exports.CEILING.MATH = exports.CEILING;
  exports.CEILING.PRECISE = exports.CEILING;
  exports.COMBIN = function(number, number_chosen) {
    number = utils2.parseNumber(number);
    number_chosen = utils2.parseNumber(number_chosen);
    if (utils2.anyIsError(number, number_chosen)) {
      return error2.value;
    }
    return exports.FACT(number) / (exports.FACT(number_chosen) * exports.FACT(number - number_chosen));
  };
  exports.COMBINA = function(number, number_chosen) {
    number = utils2.parseNumber(number);
    number_chosen = utils2.parseNumber(number_chosen);
    if (utils2.anyIsError(number, number_chosen)) {
      return error2.value;
    }
    return number === 0 && number_chosen === 0 ? 1 : exports.COMBIN(number + number_chosen - 1, number - 1);
  };
  exports.COS = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    return Math.cos(number);
  };
  exports.COSH = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    return (Math.exp(number) + Math.exp(-number)) / 2;
  };
  exports.COT = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    return 1 / Math.tan(number);
  };
  exports.COTH = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    var e2 = Math.exp(2 * number);
    return (e2 + 1) / (e2 - 1);
  };
  exports.CSC = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    return 1 / Math.sin(number);
  };
  exports.CSCH = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    return 2 / (Math.exp(number) - Math.exp(-number));
  };
  exports.DECIMAL = function(number, radix) {
    if (arguments.length < 1) {
      return error2.value;
    }
    return parseInt(number, radix);
  };
  exports.DEGREES = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    return number * 180 / Math.PI;
  };
  exports.EVEN = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    return exports.CEILING(number, -2, -1);
  };
  exports.EXP = function(number) {
    if (arguments.length < 1) {
      return error2.na;
    }
    if (typeof number !== "number" || arguments.length > 1) {
      return error2.error;
    }
    number = Math.exp(number);
    return number;
  };
  var MEMOIZED_FACT = [];
  exports.FACT = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    var n2 = Math.floor(number);
    if (n2 === 0 || n2 === 1) {
      return 1;
    } else if (MEMOIZED_FACT[n2] > 0) {
      return MEMOIZED_FACT[n2];
    } else {
      MEMOIZED_FACT[n2] = exports.FACT(n2 - 1) * n2;
      return MEMOIZED_FACT[n2];
    }
  };
  exports.FACTDOUBLE = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    var n2 = Math.floor(number);
    if (n2 <= 0) {
      return 1;
    } else {
      return n2 * exports.FACTDOUBLE(n2 - 2);
    }
  };
  exports.FLOOR = function(number, significance) {
    number = utils2.parseNumber(number);
    significance = utils2.parseNumber(significance);
    if (utils2.anyIsError(number, significance)) {
      return error2.value;
    }
    if (significance === 0) {
      return 0;
    }
    if (!(number > 0 && significance > 0) && !(number < 0 && significance < 0)) {
      return error2.num;
    }
    significance = Math.abs(significance);
    var precision = -Math.floor(Math.log(significance) / Math.log(10));
    if (number >= 0) {
      return exports.ROUND(Math.floor(number / significance) * significance, precision);
    } else {
      return -exports.ROUND(Math.ceil(Math.abs(number) / significance), precision);
    }
  };
  exports.FLOOR.MATH = function(number, significance, mode) {
    significance = significance === void 0 ? 1 : significance;
    mode = mode === void 0 ? 0 : mode;
    number = utils2.parseNumber(number);
    significance = utils2.parseNumber(significance);
    mode = utils2.parseNumber(mode);
    if (utils2.anyIsError(number, significance, mode)) {
      return error2.value;
    }
    if (significance === 0) {
      return 0;
    }
    significance = significance ? Math.abs(significance) : 1;
    var precision = -Math.floor(Math.log(significance) / Math.log(10));
    if (number >= 0) {
      return exports.ROUND(Math.floor(number / significance) * significance, precision);
    } else if (mode === 0 || mode === void 0) {
      return -exports.ROUND(Math.ceil(Math.abs(number) / significance) * significance, precision);
    }
    return -exports.ROUND(Math.floor(Math.abs(number) / significance) * significance, precision);
  };
  exports.FLOOR.PRECISE = exports.FLOOR.MATH;
  exports.GCD = function() {
    var range2 = utils2.parseNumberArray(utils2.flatten(arguments));
    if (range2 instanceof Error) {
      return range2;
    }
    var n2 = range2.length;
    var r0 = range2[0];
    var x2 = r0 < 0 ? -r0 : r0;
    for (var i = 1; i < n2; i++) {
      var ri2 = range2[i];
      var y2 = ri2 < 0 ? -ri2 : ri2;
      while (x2 && y2) {
        if (x2 > y2) {
          x2 %= y2;
        } else {
          y2 %= x2;
        }
      }
      x2 += y2;
    }
    return x2;
  };
  exports.INT = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    return Math.floor(number);
  };
  exports.ISO = {
    CEILING: exports.CEILING
  };
  exports.LCM = function() {
    var o3 = utils2.parseNumberArray(utils2.flatten(arguments));
    if (o3 instanceof Error) {
      return o3;
    }
    for (var i, j, n2, d, r2 = 1; (n2 = o3.pop()) !== void 0; ) {
      while (n2 > 1) {
        if (n2 % 2) {
          for (i = 3, j = Math.floor(Math.sqrt(n2)); i <= j && n2 % i; i += 2) {
          }
          d = i <= j ? i : n2;
        } else {
          d = 2;
        }
        for (n2 /= d, r2 *= d, i = o3.length; i; o3[--i] % d === 0 && (o3[i] /= d) === 1 && o3.splice(i, 1)) {
        }
      }
    }
    return r2;
  };
  exports.LN = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    return Math.log(number);
  };
  exports.LN10 = function() {
    return Math.log(10);
  };
  exports.LN2 = function() {
    return Math.log(2);
  };
  exports.LOG10E = function() {
    return Math.LOG10E;
  };
  exports.LOG2E = function() {
    return Math.LOG2E;
  };
  exports.LOG = function(number, base) {
    number = utils2.parseNumber(number);
    base = utils2.parseNumber(base);
    if (utils2.anyIsError(number, base)) {
      return error2.value;
    }
    base = base === void 0 ? 10 : base;
    return Math.log(number) / Math.log(base);
  };
  exports.LOG10 = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    return Math.log(number) / Math.log(10);
  };
  exports.MOD = function(dividend, divisor) {
    dividend = utils2.parseNumber(dividend);
    divisor = utils2.parseNumber(divisor);
    if (utils2.anyIsError(dividend, divisor)) {
      return error2.value;
    }
    if (divisor === 0) {
      return error2.div0;
    }
    var modulus = Math.abs(dividend % divisor);
    return divisor > 0 ? modulus : -modulus;
  };
  exports.MROUND = function(number, multiple) {
    number = utils2.parseNumber(number);
    multiple = utils2.parseNumber(multiple);
    if (utils2.anyIsError(number, multiple)) {
      return error2.value;
    }
    if (number * multiple < 0) {
      return error2.num;
    }
    return Math.round(number / multiple) * multiple;
  };
  exports.MULTINOMIAL = function() {
    var args = utils2.parseNumberArray(utils2.flatten(arguments));
    if (args instanceof Error) {
      return args;
    }
    var sum = 0;
    var divisor = 1;
    for (var i = 0; i < args.length; i++) {
      sum += args[i];
      divisor *= exports.FACT(args[i]);
    }
    return exports.FACT(sum) / divisor;
  };
  exports.ODD = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    var temp = Math.ceil(Math.abs(number));
    temp = temp & 1 ? temp : temp + 1;
    return number > 0 ? temp : -temp;
  };
  exports.PI = function() {
    return Math.PI;
  };
  exports.E = function() {
    return Math.E;
  };
  exports.POWER = function(number, power) {
    number = utils2.parseNumber(number);
    power = utils2.parseNumber(power);
    if (utils2.anyIsError(number, power)) {
      return error2.value;
    }
    var result = Math.pow(number, power);
    if (isNaN(result)) {
      return error2.num;
    }
    return result;
  };
  exports.PRODUCT = function() {
    var args = utils2.parseNumberArray(utils2.flatten(arguments));
    if (args instanceof Error) {
      return args;
    }
    var result = 1;
    for (var i = 0; i < args.length; i++) {
      result *= args[i];
    }
    return result;
  };
  exports.QUOTIENT = function(numerator, denominator) {
    numerator = utils2.parseNumber(numerator);
    denominator = utils2.parseNumber(denominator);
    if (utils2.anyIsError(numerator, denominator)) {
      return error2.value;
    }
    return parseInt(numerator / denominator, 10);
  };
  exports.RADIANS = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    return number * Math.PI / 180;
  };
  exports.RAND = function() {
    return Math.random();
  };
  exports.RANDBETWEEN = function(bottom, top) {
    bottom = utils2.parseNumber(bottom);
    top = utils2.parseNumber(top);
    if (utils2.anyIsError(bottom, top)) {
      return error2.value;
    }
    return bottom + Math.ceil((top - bottom + 1) * Math.random()) - 1;
  };
  exports.ROMAN = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    var digits = String(number).split("");
    var key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    var roman = "";
    var i = 3;
    while (i--) {
      roman = (key[+digits.pop() + i * 10] || "") + roman;
    }
    return new Array(+digits.join("") + 1).join("M") + roman;
  };
  exports.ROUND = function(number, digits) {
    number = utils2.parseNumber(number);
    digits = utils2.parseNumber(digits);
    if (utils2.anyIsError(number, digits)) {
      return error2.value;
    }
    return Math.round(number * Math.pow(10, digits)) / Math.pow(10, digits);
  };
  exports.ROUNDDOWN = function(number, digits) {
    number = utils2.parseNumber(number);
    digits = utils2.parseNumber(digits);
    if (utils2.anyIsError(number, digits)) {
      return error2.value;
    }
    var sign3 = number > 0 ? 1 : -1;
    return sign3 * Math.floor(Math.abs(number) * Math.pow(10, digits)) / Math.pow(10, digits);
  };
  exports.ROUNDUP = function(number, digits) {
    number = utils2.parseNumber(number);
    digits = utils2.parseNumber(digits);
    if (utils2.anyIsError(number, digits)) {
      return error2.value;
    }
    var sign3 = number > 0 ? 1 : -1;
    return sign3 * Math.ceil(Math.abs(number) * Math.pow(10, digits)) / Math.pow(10, digits);
  };
  exports.SEC = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    return 1 / Math.cos(number);
  };
  exports.SECH = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    return 2 / (Math.exp(number) + Math.exp(-number));
  };
  exports.SERIESSUM = function(x2, n2, m2, coefficients) {
    x2 = utils2.parseNumber(x2);
    n2 = utils2.parseNumber(n2);
    m2 = utils2.parseNumber(m2);
    coefficients = utils2.parseNumberArray(coefficients);
    if (utils2.anyIsError(x2, n2, m2, coefficients)) {
      return error2.value;
    }
    var result = coefficients[0] * Math.pow(x2, n2);
    for (var i = 1; i < coefficients.length; i++) {
      result += coefficients[i] * Math.pow(x2, n2 + i * m2);
    }
    return result;
  };
  exports.SIGN = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    if (number < 0) {
      return -1;
    } else if (number === 0) {
      return 0;
    } else {
      return 1;
    }
  };
  exports.SIN = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    return Math.sin(number);
  };
  exports.SINH = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    return (Math.exp(number) - Math.exp(-number)) / 2;
  };
  exports.SQRT = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    if (number < 0) {
      return error2.num;
    }
    return Math.sqrt(number);
  };
  exports.SQRTPI = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    return Math.sqrt(number * Math.PI);
  };
  exports.SQRT1_2 = function() {
    return 1 / Math.sqrt(2);
  };
  exports.SQRT2 = function() {
    return Math.sqrt(2);
  };
  exports.SUBTOTAL = function(function_code, ref1) {
    function_code = utils2.parseNumber(function_code);
    if (function_code instanceof Error) {
      return function_code;
    }
    switch (function_code) {
      case 1:
        return statistical2.AVERAGE(ref1);
      case 2:
        return statistical2.COUNT(ref1);
      case 3:
        return statistical2.COUNTA(ref1);
      case 4:
        return statistical2.MAX(ref1);
      case 5:
        return statistical2.MIN(ref1);
      case 6:
        return exports.PRODUCT(ref1);
      case 7:
        return statistical2.STDEV.S(ref1);
      case 8:
        return statistical2.STDEV.P(ref1);
      case 9:
        return exports.SUM(ref1);
      case 10:
        return statistical2.VAR.S(ref1);
      case 11:
        return statistical2.VAR.P(ref1);
      case 101:
        return statistical2.AVERAGE(ref1);
      case 102:
        return statistical2.COUNT(ref1);
      case 103:
        return statistical2.COUNTA(ref1);
      case 104:
        return statistical2.MAX(ref1);
      case 105:
        return statistical2.MIN(ref1);
      case 106:
        return exports.PRODUCT(ref1);
      case 107:
        return statistical2.STDEV.S(ref1);
      case 108:
        return statistical2.STDEV.P(ref1);
      case 109:
        return exports.SUM(ref1);
      case 110:
        return statistical2.VAR.S(ref1);
      case 111:
        return statistical2.VAR.P(ref1);
    }
  };
  exports.ADD = function(num1, num2) {
    if (arguments.length !== 2) {
      return error2.na;
    }
    num1 = utils2.parseNumber(num1);
    num2 = utils2.parseNumber(num2);
    if (utils2.anyIsError(num1, num2)) {
      return error2.value;
    }
    return num1 + num2;
  };
  exports.MINUS = function(num1, num2) {
    if (arguments.length !== 2) {
      return error2.na;
    }
    num1 = utils2.parseNumber(num1);
    num2 = utils2.parseNumber(num2);
    if (utils2.anyIsError(num1, num2)) {
      return error2.value;
    }
    return num1 - num2;
  };
  exports.DIVIDE = function(dividend, divisor) {
    if (arguments.length !== 2) {
      return error2.na;
    }
    dividend = utils2.parseNumber(dividend);
    divisor = utils2.parseNumber(divisor);
    if (utils2.anyIsError(dividend, divisor)) {
      return error2.value;
    }
    if (divisor === 0) {
      return error2.div0;
    }
    return dividend / divisor;
  };
  exports.MULTIPLY = function(factor1, factor2) {
    if (arguments.length !== 2) {
      return error2.na;
    }
    factor1 = utils2.parseNumber(factor1);
    factor2 = utils2.parseNumber(factor2);
    if (utils2.anyIsError(factor1, factor2)) {
      return error2.value;
    }
    return factor1 * factor2;
  };
  exports.GTE = function(num1, num2) {
    if (arguments.length !== 2) {
      return error2.na;
    }
    num1 = utils2.parseNumber(num1);
    num2 = utils2.parseNumber(num2);
    if (utils2.anyIsError(num1, num2)) {
      return error2.error;
    }
    return num1 >= num2;
  };
  exports.LT = function(num1, num2) {
    if (arguments.length !== 2) {
      return error2.na;
    }
    num1 = utils2.parseNumber(num1);
    num2 = utils2.parseNumber(num2);
    if (utils2.anyIsError(num1, num2)) {
      return error2.error;
    }
    return num1 < num2;
  };
  exports.LTE = function(num1, num2) {
    if (arguments.length !== 2) {
      return error2.na;
    }
    num1 = utils2.parseNumber(num1);
    num2 = utils2.parseNumber(num2);
    if (utils2.anyIsError(num1, num2)) {
      return error2.error;
    }
    return num1 <= num2;
  };
  exports.EQ = function(value1, value2) {
    if (arguments.length !== 2) {
      return error2.na;
    }
    return value1 === value2;
  };
  exports.NE = function(value1, value2) {
    if (arguments.length !== 2) {
      return error2.na;
    }
    return value1 !== value2;
  };
  exports.POW = function(base, exponent) {
    if (arguments.length !== 2) {
      return error2.na;
    }
    base = utils2.parseNumber(base);
    exponent = utils2.parseNumber(exponent);
    if (utils2.anyIsError(base, exponent)) {
      return error2.error;
    }
    return exports.POWER(base, exponent);
  };
  exports.SUM = function() {
    var result = 0;
    utils2.arrayEach(utils2.argsToArray(arguments), function(value) {
      if (typeof value === "number") {
        result += value;
      } else if (typeof value === "string") {
        var parsed = parseFloat(value);
        !isNaN(parsed) && (result += parsed);
      } else if (Array.isArray(value)) {
        result += exports.SUM.apply(null, value);
      }
    });
    return result;
  };
  exports.SUMIF = function(range2, criteria) {
    range2 = utils2.parseNumberArray(utils2.flatten(range2));
    if (range2 instanceof Error) {
      return range2;
    }
    var result = 0;
    var isWildcard = criteria === void 0 || criteria === "*";
    var tokenizedCriteria = isWildcard ? null : evalExpression.parse(criteria + "");
    for (var i = 0; i < range2.length; i++) {
      var value = range2[i];
      if (isWildcard) {
        result += value;
      } else {
        var tokens = [evalExpression.createToken(value, evalExpression.TOKEN_TYPE_LITERAL)].concat(tokenizedCriteria);
        result += evalExpression.compute(tokens) ? value : 0;
      }
    }
    return result;
  };
  exports.SUMIFS = function() {
    var args = utils2.argsToArray(arguments);
    var range2 = utils2.parseNumberArray(utils2.flatten(args.shift()));
    if (range2 instanceof Error) {
      return range2;
    }
    var criterias = args;
    var n_range_elements = range2.length;
    var criteriaLength = criterias.length;
    var result = 0;
    for (var i = 0; i < n_range_elements; i++) {
      var value = range2[i];
      var isMeetCondition = false;
      for (var j = 0; j < criteriaLength; j++) {
        var criteria = criterias[j];
        var isWildcard = criteria === void 0 || criteria === "*";
        var computedResult = false;
        if (isWildcard) {
          computedResult = true;
        } else {
          var tokenizedCriteria = evalExpression.parse(criteria + "");
          var tokens = [evalExpression.createToken(value, evalExpression.TOKEN_TYPE_LITERAL)].concat(tokenizedCriteria);
          computedResult = evalExpression.compute(tokens);
        }
        if (!computedResult) {
          isMeetCondition = false;
          break;
        }
        isMeetCondition = true;
      }
      if (isMeetCondition) {
        result += value;
      }
    }
    return result;
  };
  exports.SUMPRODUCT = function() {
    if (!arguments || arguments.length === 0) {
      return error2.value;
    }
    var arrays = arguments.length + 1;
    var result = 0;
    var product;
    var k;
    var _i;
    var _ij;
    for (var i = 0; i < arguments[0].length; i++) {
      if (!(arguments[0][i] instanceof Array)) {
        product = 1;
        for (k = 1; k < arrays; k++) {
          _i = utils2.parseNumber(arguments[k - 1][i]);
          if (_i instanceof Error) {
            return _i;
          }
          product *= _i;
        }
        result += product;
      } else {
        for (var j = 0; j < arguments[0][i].length; j++) {
          product = 1;
          for (k = 1; k < arrays; k++) {
            _ij = utils2.parseNumber(arguments[k - 1][i][j]);
            if (_ij instanceof Error) {
              return _ij;
            }
            product *= _ij;
          }
          result += product;
        }
      }
    }
    return result;
  };
  exports.SUMSQ = function() {
    var numbers = utils2.parseNumberArray(utils2.flatten(arguments));
    if (numbers instanceof Error) {
      return numbers;
    }
    var result = 0;
    var length = numbers.length;
    for (var i = 0; i < length; i++) {
      result += information2.ISNUMBER(numbers[i]) ? numbers[i] * numbers[i] : 0;
    }
    return result;
  };
  exports.SUMX2MY2 = function(array_x, array_y) {
    array_x = utils2.parseNumberArray(utils2.flatten(array_x));
    array_y = utils2.parseNumberArray(utils2.flatten(array_y));
    if (utils2.anyIsError(array_x, array_y)) {
      return error2.value;
    }
    var result = 0;
    for (var i = 0; i < array_x.length; i++) {
      result += array_x[i] * array_x[i] - array_y[i] * array_y[i];
    }
    return result;
  };
  exports.SUMX2PY2 = function(array_x, array_y) {
    array_x = utils2.parseNumberArray(utils2.flatten(array_x));
    array_y = utils2.parseNumberArray(utils2.flatten(array_y));
    if (utils2.anyIsError(array_x, array_y)) {
      return error2.value;
    }
    var result = 0;
    array_x = utils2.parseNumberArray(utils2.flatten(array_x));
    array_y = utils2.parseNumberArray(utils2.flatten(array_y));
    for (var i = 0; i < array_x.length; i++) {
      result += array_x[i] * array_x[i] + array_y[i] * array_y[i];
    }
    return result;
  };
  exports.SUMXMY2 = function(array_x, array_y) {
    array_x = utils2.parseNumberArray(utils2.flatten(array_x));
    array_y = utils2.parseNumberArray(utils2.flatten(array_y));
    if (utils2.anyIsError(array_x, array_y)) {
      return error2.value;
    }
    var result = 0;
    array_x = utils2.flatten(array_x);
    array_y = utils2.flatten(array_y);
    for (var i = 0; i < array_x.length; i++) {
      result += Math.pow(array_x[i] - array_y[i], 2);
    }
    return result;
  };
  exports.TAN = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    return Math.tan(number);
  };
  exports.TANH = function(number) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    var e2 = Math.exp(2 * number);
    return (e2 - 1) / (e2 + 1);
  };
  exports.TRUNC = function(number, digits) {
    digits = digits === void 0 ? 0 : digits;
    number = utils2.parseNumber(number);
    digits = utils2.parseNumber(digits);
    if (utils2.anyIsError(number, digits)) {
      return error2.value;
    }
    var sign3 = number > 0 ? 1 : -1;
    return sign3 * Math.floor(Math.abs(number) * Math.pow(10, digits)) / Math.pow(10, digits);
  };
})(mathTrig$1);
var engineering$1 = {};
var bessel = {};
(function(exports) {
  (function(factory) {
    if (typeof DO_NOT_EXPORT_BESSEL === "undefined") {
      {
        factory(exports);
      }
    } else {
      factory({});
    }
  })(function(BESSEL) {
    BESSEL.version = "1.0.2";
    var M2 = Math;
    function _horner(arr, v2) {
      for (var i = 0, z2 = 0; i < arr.length; ++i)
        z2 = v2 * z2 + arr[i];
      return z2;
    }
    function _bessel_iter(x2, n2, f0, f1, sign3) {
      if (n2 === 0)
        return f0;
      if (n2 === 1)
        return f1;
      var tdx = 2 / x2, f2 = f1;
      for (var o3 = 1; o3 < n2; ++o3) {
        f2 = f1 * o3 * tdx + sign3 * f0;
        f0 = f1;
        f1 = f2;
      }
      return f2;
    }
    function _bessel_wrap(bessel0, bessel1, name, nonzero, sign3) {
      return function bessel2(x2, n2) {
        if (nonzero) {
          if (x2 === 0)
            return nonzero == 1 ? -Infinity : Infinity;
          else if (x2 < 0)
            return NaN;
        }
        if (n2 === 0)
          return bessel0(x2);
        if (n2 === 1)
          return bessel1(x2);
        if (n2 < 0)
          return NaN;
        n2 |= 0;
        var b0 = bessel0(x2), b1 = bessel1(x2);
        return _bessel_iter(x2, n2, b0, b1, sign3);
      };
    }
    var besselj = function() {
      var W2 = 0.636619772;
      var b0_a1a = [57568490574, -13362590354, 6516196407e-1, -1121442418e-2, 77392.33017, -184.9052456].reverse();
      var b0_a2a = [57568490411, 1029532985, 9494680718e-3, 59272.64853, 267.8532712, 1].reverse();
      var b0_a1b = [1, -0.001098628627, 2734510407e-14, -2073370639e-15, 2093887211e-16].reverse();
      var b0_a2b = [-0.01562499995, 1430488765e-13, -6911147651e-15, 7621095161e-16, -934935152e-16].reverse();
      function bessel0(x2) {
        var a = 0, a1 = 0, a2 = 0, y2 = x2 * x2;
        if (x2 < 8) {
          a1 = _horner(b0_a1a, y2);
          a2 = _horner(b0_a2a, y2);
          a = a1 / a2;
        } else {
          var xx = x2 - 0.785398164;
          y2 = 64 / y2;
          a1 = _horner(b0_a1b, y2);
          a2 = _horner(b0_a2b, y2);
          a = M2.sqrt(W2 / x2) * (M2.cos(xx) * a1 - M2.sin(xx) * a2 * 8 / x2);
        }
        return a;
      }
      var b1_a1a = [72362614232, -7895059235, 2423968531e-1, -2972611439e-3, 15704.4826, -30.16036606].reverse();
      var b1_a2a = [144725228442, 2300535178, 1858330474e-2, 99447.43394, 376.9991397, 1].reverse();
      var b1_a1b = [1, 183105e-8, -3516396496e-14, 2457520174e-15, -240337019e-15].reverse();
      var b1_a2b = [0.04687499995, -2002690873e-13, 8449199096e-15, -88228987e-14, 105787412e-15].reverse();
      function bessel1(x2) {
        var a = 0, a1 = 0, a2 = 0, y2 = x2 * x2, xx = M2.abs(x2) - 2.356194491;
        if (Math.abs(x2) < 8) {
          a1 = x2 * _horner(b1_a1a, y2);
          a2 = _horner(b1_a2a, y2);
          a = a1 / a2;
        } else {
          y2 = 64 / y2;
          a1 = _horner(b1_a1b, y2);
          a2 = _horner(b1_a2b, y2);
          a = M2.sqrt(W2 / M2.abs(x2)) * (M2.cos(xx) * a1 - M2.sin(xx) * a2 * 8 / M2.abs(x2));
          if (x2 < 0)
            a = -a;
        }
        return a;
      }
      return function besselj2(x2, n2) {
        n2 = Math.round(n2);
        if (!isFinite(x2))
          return isNaN(x2) ? x2 : 0;
        if (n2 < 0)
          return (n2 % 2 ? -1 : 1) * besselj2(x2, -n2);
        if (x2 < 0)
          return (n2 % 2 ? -1 : 1) * besselj2(-x2, n2);
        if (n2 === 0)
          return bessel0(x2);
        if (n2 === 1)
          return bessel1(x2);
        if (x2 === 0)
          return 0;
        var ret = 0;
        if (x2 > n2) {
          ret = _bessel_iter(x2, n2, bessel0(x2), bessel1(x2), -1);
        } else {
          var m2 = 2 * M2.floor((n2 + M2.floor(M2.sqrt(40 * n2))) / 2);
          var jsum = false;
          var bjp = 0, sum = 0;
          var bj2 = 1, bjm = 0;
          var tox = 2 / x2;
          for (var j = m2; j > 0; j--) {
            bjm = j * tox * bj2 - bjp;
            bjp = bj2;
            bj2 = bjm;
            if (M2.abs(bj2) > 1e10) {
              bj2 *= 1e-10;
              bjp *= 1e-10;
              ret *= 1e-10;
              sum *= 1e-10;
            }
            if (jsum)
              sum += bj2;
            jsum = !jsum;
            if (j == n2)
              ret = bjp;
          }
          sum = 2 * sum - bj2;
          ret /= sum;
        }
        return ret;
      };
    }();
    var bessely = function() {
      var W2 = 0.636619772;
      var b0_a1a = [-2957821389, 7062834065, -5123598036e-1, 1087988129e-2, -86327.92757, 228.4622733].reverse();
      var b0_a2a = [40076544269, 7452499648e-1, 7189466438e-3, 47447.2647, 226.1030244, 1].reverse();
      var b0_a1b = [1, -0.001098628627, 2734510407e-14, -2073370639e-15, 2093887211e-16].reverse();
      var b0_a2b = [-0.01562499995, 1430488765e-13, -6911147651e-15, 7621095161e-16, -934945152e-16].reverse();
      function bessel0(x2) {
        var a = 0, a1 = 0, a2 = 0, y2 = x2 * x2, xx = x2 - 0.785398164;
        if (x2 < 8) {
          a1 = _horner(b0_a1a, y2);
          a2 = _horner(b0_a2a, y2);
          a = a1 / a2 + W2 * besselj(x2, 0) * M2.log(x2);
        } else {
          y2 = 64 / y2;
          a1 = _horner(b0_a1b, y2);
          a2 = _horner(b0_a2b, y2);
          a = M2.sqrt(W2 / x2) * (M2.sin(xx) * a1 + M2.cos(xx) * a2 * 8 / x2);
        }
        return a;
      }
      var b1_a1a = [-4900604943e3, 127527439e4, -51534381390, 7349264551e-1, -4237922726e-3, 8511.937935].reverse();
      var b1_a2a = [249958057e5, 424441966400, 3733650367, 2245904002e-2, 102042.605, 354.9632885, 1].reverse();
      var b1_a1b = [1, 183105e-8, -3516396496e-14, 2457520174e-15, -240337019e-15].reverse();
      var b1_a2b = [0.04687499995, -2002690873e-13, 8449199096e-15, -88228987e-14, 105787412e-15].reverse();
      function bessel1(x2) {
        var a = 0, a1 = 0, a2 = 0, y2 = x2 * x2, xx = x2 - 2.356194491;
        if (x2 < 8) {
          a1 = x2 * _horner(b1_a1a, y2);
          a2 = _horner(b1_a2a, y2);
          a = a1 / a2 + W2 * (besselj(x2, 1) * M2.log(x2) - 1 / x2);
        } else {
          y2 = 64 / y2;
          a1 = _horner(b1_a1b, y2);
          a2 = _horner(b1_a2b, y2);
          a = M2.sqrt(W2 / x2) * (M2.sin(xx) * a1 + M2.cos(xx) * a2 * 8 / x2);
        }
        return a;
      }
      return _bessel_wrap(bessel0, bessel1, "BESSELY", 1, -1);
    }();
    var besseli = function() {
      var b0_a = [1, 3.5156229, 3.0899424, 1.2067492, 0.2659732, 0.0360768, 45813e-7].reverse();
      var b0_b = [0.39894228, 0.01328592, 225319e-8, -157565e-8, 916281e-8, -0.02057706, 0.02635537, -0.01647633, 392377e-8].reverse();
      function bessel0(x2) {
        if (x2 <= 3.75)
          return _horner(b0_a, x2 * x2 / (3.75 * 3.75));
        return M2.exp(M2.abs(x2)) / M2.sqrt(M2.abs(x2)) * _horner(b0_b, 3.75 / M2.abs(x2));
      }
      var b1_a = [0.5, 0.87890594, 0.51498869, 0.15084934, 0.02658733, 301532e-8, 32411e-8].reverse();
      var b1_b = [0.39894228, -0.03988024, -362018e-8, 163801e-8, -0.01031555, 0.02282967, -0.02895312, 0.01787654, -420059e-8].reverse();
      function bessel1(x2) {
        if (x2 < 3.75)
          return x2 * _horner(b1_a, x2 * x2 / (3.75 * 3.75));
        return (x2 < 0 ? -1 : 1) * M2.exp(M2.abs(x2)) / M2.sqrt(M2.abs(x2)) * _horner(b1_b, 3.75 / M2.abs(x2));
      }
      return function besseli2(x2, n2) {
        n2 = Math.round(n2);
        if (n2 === 0)
          return bessel0(x2);
        if (n2 === 1)
          return bessel1(x2);
        if (n2 < 0)
          return NaN;
        if (M2.abs(x2) === 0)
          return 0;
        if (x2 == Infinity)
          return Infinity;
        var ret = 0, j, tox = 2 / M2.abs(x2), bip = 0, bi2 = 1, bim = 0;
        var m2 = 2 * M2.round((n2 + M2.round(M2.sqrt(40 * n2))) / 2);
        for (j = m2; j > 0; j--) {
          bim = j * tox * bi2 + bip;
          bip = bi2;
          bi2 = bim;
          if (M2.abs(bi2) > 1e10) {
            bi2 *= 1e-10;
            bip *= 1e-10;
            ret *= 1e-10;
          }
          if (j == n2)
            ret = bip;
        }
        ret *= besseli2(x2, 0) / bi2;
        return x2 < 0 && n2 % 2 ? -ret : ret;
      };
    }();
    var besselk = function() {
      var b0_a = [-0.57721566, 0.4227842, 0.23069756, 0.0348859, 262698e-8, 1075e-7, 74e-7].reverse();
      var b0_b = [1.25331414, -0.07832358, 0.02189568, -0.01062446, 587872e-8, -25154e-7, 53208e-8].reverse();
      function bessel0(x2) {
        if (x2 <= 2)
          return -M2.log(x2 / 2) * besseli(x2, 0) + _horner(b0_a, x2 * x2 / 4);
        return M2.exp(-x2) / M2.sqrt(x2) * _horner(b0_b, 2 / x2);
      }
      var b1_a = [1, 0.15443144, -0.67278579, -0.18156897, -0.01919402, -110404e-8, -4686e-8].reverse();
      var b1_b = [1.25331414, 0.23498619, -0.0365562, 0.01504268, -780353e-8, 325614e-8, -68245e-8].reverse();
      function bessel1(x2) {
        if (x2 <= 2)
          return M2.log(x2 / 2) * besseli(x2, 1) + 1 / x2 * _horner(b1_a, x2 * x2 / 4);
        return M2.exp(-x2) / M2.sqrt(x2) * _horner(b1_b, 2 / x2);
      }
      return _bessel_wrap(bessel0, bessel1, "BESSELK", 2, 1);
    }();
    BESSEL.besselj = besselj;
    BESSEL.bessely = bessely;
    BESSEL.besseli = besseli;
    BESSEL.besselk = besselk;
  });
})(bessel);
(function(exports) {
  var error2 = error$3;
  var jStat = jstat.exports;
  var text$1 = text;
  var utils2 = common;
  var bessel$1 = bessel;
  function isValidBinaryNumber(number) {
    return /^[01]{1,10}$/.test(number);
  }
  exports.BESSELI = function(x2, n2) {
    x2 = utils2.parseNumber(x2);
    n2 = utils2.parseNumber(n2);
    if (utils2.anyIsError(x2, n2)) {
      return error2.value;
    }
    return bessel$1.besseli(x2, n2);
  };
  exports.BESSELJ = function(x2, n2) {
    x2 = utils2.parseNumber(x2);
    n2 = utils2.parseNumber(n2);
    if (utils2.anyIsError(x2, n2)) {
      return error2.value;
    }
    return bessel$1.besselj(x2, n2);
  };
  exports.BESSELK = function(x2, n2) {
    x2 = utils2.parseNumber(x2);
    n2 = utils2.parseNumber(n2);
    if (utils2.anyIsError(x2, n2)) {
      return error2.value;
    }
    return bessel$1.besselk(x2, n2);
  };
  exports.BESSELY = function(x2, n2) {
    x2 = utils2.parseNumber(x2);
    n2 = utils2.parseNumber(n2);
    if (utils2.anyIsError(x2, n2)) {
      return error2.value;
    }
    return bessel$1.bessely(x2, n2);
  };
  exports.BIN2DEC = function(number) {
    if (!isValidBinaryNumber(number)) {
      return error2.num;
    }
    var result = parseInt(number, 2);
    var stringified = number.toString();
    if (stringified.length === 10 && stringified.substring(0, 1) === "1") {
      return parseInt(stringified.substring(1), 2) - 512;
    } else {
      return result;
    }
  };
  exports.BIN2HEX = function(number, places) {
    if (!isValidBinaryNumber(number)) {
      return error2.num;
    }
    var stringified = number.toString();
    if (stringified.length === 10 && stringified.substring(0, 1) === "1") {
      return (1099511627264 + parseInt(stringified.substring(1), 2)).toString(16);
    }
    var result = parseInt(number, 2).toString(16);
    if (places === void 0) {
      return result;
    } else {
      if (isNaN(places)) {
        return error2.value;
      }
      if (places < 0) {
        return error2.num;
      }
      places = Math.floor(places);
      return places >= result.length ? text$1.REPT("0", places - result.length) + result : error2.num;
    }
  };
  exports.BIN2OCT = function(number, places) {
    if (!isValidBinaryNumber(number)) {
      return error2.num;
    }
    var stringified = number.toString();
    if (stringified.length === 10 && stringified.substring(0, 1) === "1") {
      return (1073741312 + parseInt(stringified.substring(1), 2)).toString(8);
    }
    var result = parseInt(number, 2).toString(8);
    if (places === void 0) {
      return result;
    } else {
      if (isNaN(places)) {
        return error2.value;
      }
      if (places < 0) {
        return error2.num;
      }
      places = Math.floor(places);
      return places >= result.length ? text$1.REPT("0", places - result.length) + result : error2.num;
    }
  };
  exports.BITAND = function(number1, number2) {
    number1 = utils2.parseNumber(number1);
    number2 = utils2.parseNumber(number2);
    if (utils2.anyIsError(number1, number2)) {
      return error2.value;
    }
    if (number1 < 0 || number2 < 0) {
      return error2.num;
    }
    if (Math.floor(number1) !== number1 || Math.floor(number2) !== number2) {
      return error2.num;
    }
    if (number1 > 281474976710655 || number2 > 281474976710655) {
      return error2.num;
    }
    return number1 & number2;
  };
  exports.BITLSHIFT = function(number, shift) {
    number = utils2.parseNumber(number);
    shift = utils2.parseNumber(shift);
    if (utils2.anyIsError(number, shift)) {
      return error2.value;
    }
    if (number < 0) {
      return error2.num;
    }
    if (Math.floor(number) !== number) {
      return error2.num;
    }
    if (number > 281474976710655) {
      return error2.num;
    }
    if (Math.abs(shift) > 53) {
      return error2.num;
    }
    return shift >= 0 ? number << shift : number >> -shift;
  };
  exports.BITOR = function(number1, number2) {
    number1 = utils2.parseNumber(number1);
    number2 = utils2.parseNumber(number2);
    if (utils2.anyIsError(number1, number2)) {
      return error2.value;
    }
    if (number1 < 0 || number2 < 0) {
      return error2.num;
    }
    if (Math.floor(number1) !== number1 || Math.floor(number2) !== number2) {
      return error2.num;
    }
    if (number1 > 281474976710655 || number2 > 281474976710655) {
      return error2.num;
    }
    return number1 | number2;
  };
  exports.BITRSHIFT = function(number, shift) {
    number = utils2.parseNumber(number);
    shift = utils2.parseNumber(shift);
    if (utils2.anyIsError(number, shift)) {
      return error2.value;
    }
    if (number < 0) {
      return error2.num;
    }
    if (Math.floor(number) !== number) {
      return error2.num;
    }
    if (number > 281474976710655) {
      return error2.num;
    }
    if (Math.abs(shift) > 53) {
      return error2.num;
    }
    return shift >= 0 ? number >> shift : number << -shift;
  };
  exports.BITXOR = function(number1, number2) {
    number1 = utils2.parseNumber(number1);
    number2 = utils2.parseNumber(number2);
    if (utils2.anyIsError(number1, number2)) {
      return error2.value;
    }
    if (number1 < 0 || number2 < 0) {
      return error2.num;
    }
    if (Math.floor(number1) !== number1 || Math.floor(number2) !== number2) {
      return error2.num;
    }
    if (number1 > 281474976710655 || number2 > 281474976710655) {
      return error2.num;
    }
    return number1 ^ number2;
  };
  exports.COMPLEX = function(real, imaginary, suffix) {
    real = utils2.parseNumber(real);
    imaginary = utils2.parseNumber(imaginary);
    if (utils2.anyIsError(real, imaginary)) {
      return real;
    }
    suffix = suffix === void 0 ? "i" : suffix;
    if (suffix !== "i" && suffix !== "j") {
      return error2.value;
    }
    if (real === 0 && imaginary === 0) {
      return 0;
    } else if (real === 0) {
      return imaginary === 1 ? suffix : imaginary.toString() + suffix;
    } else if (imaginary === 0) {
      return real.toString();
    } else {
      var sign3 = imaginary > 0 ? "+" : "";
      return real.toString() + sign3 + (imaginary === 1 ? suffix : imaginary.toString() + suffix);
    }
  };
  exports.CONVERT = function(number, from_unit, to_unit) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    var units = [
      ["a.u. of action", "?", null, "action", false, false, 105457168181818e-48],
      ["a.u. of charge", "e", null, "electric_charge", false, false, 160217653141414e-33],
      ["a.u. of energy", "Eh", null, "energy", false, false, 435974417757576e-32],
      ["a.u. of length", "a?", null, "length", false, false, 529177210818182e-25],
      ["a.u. of mass", "m?", null, "mass", false, false, 910938261616162e-45],
      ["a.u. of time", "?/Eh", null, "time", false, false, 241888432650516e-31],
      ["admiralty knot", "admkn", null, "speed", false, true, 0.514773333],
      ["ampere", "A", null, "electric_current", true, false, 1],
      ["ampere per meter", "A/m", null, "magnetic_field_intensity", true, false, 1],
      ["\xE5ngstr\xF6m", "\xC5", ["ang"], "length", false, true, 1e-10],
      ["are", "ar", null, "area", false, true, 100],
      ["astronomical unit", "ua", null, "length", false, false, 149597870691667e-25],
      ["bar", "bar", null, "pressure", false, false, 1e5],
      ["barn", "b", null, "area", false, false, 1e-28],
      ["becquerel", "Bq", null, "radioactivity", true, false, 1],
      ["bit", "bit", ["b"], "information", false, true, 1],
      ["btu", "BTU", ["btu"], "energy", false, true, 1055.05585262],
      ["byte", "byte", null, "information", false, true, 8],
      ["candela", "cd", null, "luminous_intensity", true, false, 1],
      ["candela per square metre", "cd/m?", null, "luminance", true, false, 1],
      ["coulomb", "C", null, "electric_charge", true, false, 1],
      ["cubic \xE5ngstr\xF6m", "ang3", ["ang^3"], "volume", false, true, 1e-30],
      ["cubic foot", "ft3", ["ft^3"], "volume", false, true, 0.028316846592],
      ["cubic inch", "in3", ["in^3"], "volume", false, true, 16387064e-12],
      ["cubic light-year", "ly3", ["ly^3"], "volume", false, true, 846786664623715e-61],
      ["cubic metre", "m?", null, "volume", true, true, 1],
      ["cubic mile", "mi3", ["mi^3"], "volume", false, true, 416818182544058e-5],
      ["cubic nautical mile", "Nmi3", ["Nmi^3"], "volume", false, true, 6352182208],
      ["cubic Pica", "Pica3", ["Picapt3", "Pica^3", "Picapt^3"], "volume", false, true, 758660370370369e-22],
      ["cubic yard", "yd3", ["yd^3"], "volume", false, true, 0.764554857984],
      ["cup", "cup", null, "volume", false, true, 2365882365e-13],
      ["dalton", "Da", ["u"], "mass", false, false, 166053886282828e-41],
      ["day", "d", ["day"], "time", false, true, 86400],
      ["degree", "\xB0", null, "angle", false, false, 0.0174532925199433],
      ["degrees Rankine", "Rank", null, "temperature", false, true, 0.555555555555556],
      ["dyne", "dyn", ["dy"], "force", false, true, 1e-5],
      ["electronvolt", "eV", ["ev"], "energy", false, true, 1.60217656514141],
      ["ell", "ell", null, "length", false, true, 1.143],
      ["erg", "erg", ["e"], "energy", false, true, 1e-7],
      ["farad", "F", null, "electric_capacitance", true, false, 1],
      ["fluid ounce", "oz", null, "volume", false, true, 295735295625e-16],
      ["foot", "ft", null, "length", false, true, 0.3048],
      ["foot-pound", "flb", null, "energy", false, true, 1.3558179483314],
      ["gal", "Gal", null, "acceleration", false, false, 0.01],
      ["gallon", "gal", null, "volume", false, true, 0.003785411784],
      ["gauss", "G", ["ga"], "magnetic_flux_density", false, true, 1],
      ["grain", "grain", null, "mass", false, true, 647989e-10],
      ["gram", "g", null, "mass", false, true, 1e-3],
      ["gray", "Gy", null, "absorbed_dose", true, false, 1],
      ["gross registered ton", "GRT", ["regton"], "volume", false, true, 2.8316846592],
      ["hectare", "ha", null, "area", false, true, 1e4],
      ["henry", "H", null, "inductance", true, false, 1],
      ["hertz", "Hz", null, "frequency", true, false, 1],
      ["horsepower", "HP", ["h"], "power", false, true, 745.69987158227],
      ["horsepower-hour", "HPh", ["hh", "hph"], "energy", false, true, 2684519538e-3],
      ["hour", "h", ["hr"], "time", false, true, 3600],
      ["imperial gallon (U.K.)", "uk_gal", null, "volume", false, true, 454609e-8],
      ["imperial hundredweight", "lcwt", ["uk_cwt", "hweight"], "mass", false, true, 50.802345],
      ["imperial quart (U.K)", "uk_qt", null, "volume", false, true, 0.0011365225],
      ["imperial ton", "brton", ["uk_ton", "LTON"], "mass", false, true, 1016.046909],
      ["inch", "in", null, "length", false, true, 0.0254],
      ["international acre", "uk_acre", null, "area", false, true, 4046.8564224],
      ["IT calorie", "cal", null, "energy", false, true, 4.1868],
      ["joule", "J", null, "energy", true, true, 1],
      ["katal", "kat", null, "catalytic_activity", true, false, 1],
      ["kelvin", "K", ["kel"], "temperature", true, true, 1],
      ["kilogram", "kg", null, "mass", true, true, 1],
      ["knot", "kn", null, "speed", false, true, 0.514444444444444],
      ["light-year", "ly", null, "length", false, true, 9460730472580800],
      ["litre", "L", ["l", "lt"], "volume", false, true, 1e-3],
      ["lumen", "lm", null, "luminous_flux", true, false, 1],
      ["lux", "lx", null, "illuminance", true, false, 1],
      ["maxwell", "Mx", null, "magnetic_flux", false, false, 1e-18],
      ["measurement ton", "MTON", null, "volume", false, true, 1.13267386368],
      ["meter per hour", "m/h", ["m/hr"], "speed", false, true, 27777777777778e-17],
      ["meter per second", "m/s", ["m/sec"], "speed", true, true, 1],
      ["meter per second squared", "m?s??", null, "acceleration", true, false, 1],
      ["parsec", "pc", ["parsec"], "length", false, true, 30856775814671900],
      ["meter squared per second", "m?/s", null, "kinematic_viscosity", true, false, 1],
      ["metre", "m", null, "length", true, true, 1],
      ["miles per hour", "mph", null, "speed", false, true, 0.44704],
      ["millimetre of mercury", "mmHg", null, "pressure", false, false, 133.322],
      ["minute", "?", null, "angle", false, false, 290888208665722e-18],
      ["minute", "min", ["mn"], "time", false, true, 60],
      ["modern teaspoon", "tspm", null, "volume", false, true, 5e-6],
      ["mole", "mol", null, "amount_of_substance", true, false, 1],
      ["morgen", "Morgen", null, "area", false, true, 2500],
      ["n.u. of action", "?", null, "action", false, false, 105457168181818e-48],
      ["n.u. of mass", "m?", null, "mass", false, false, 910938261616162e-45],
      ["n.u. of speed", "c?", null, "speed", false, false, 299792458],
      ["n.u. of time", "?/(me?c??)", null, "time", false, false, 128808866778687e-35],
      ["nautical mile", "M", ["Nmi"], "length", false, true, 1852],
      ["newton", "N", null, "force", true, true, 1],
      ["\u0153rsted", "Oe ", null, "magnetic_field_intensity", false, false, 79.5774715459477],
      ["ohm", "\u03A9", null, "electric_resistance", true, false, 1],
      ["ounce mass", "ozm", null, "mass", false, true, 0.028349523125],
      ["pascal", "Pa", null, "pressure", true, false, 1],
      ["pascal second", "Pa?s", null, "dynamic_viscosity", true, false, 1],
      ["pferdest\xE4rke", "PS", null, "power", false, true, 735.49875],
      ["phot", "ph", null, "illuminance", false, false, 1e-4],
      ["pica (1/6 inch)", "pica", null, "length", false, true, 35277777777778e-17],
      ["pica (1/72 inch)", "Pica", ["Picapt"], "length", false, true, 0.00423333333333333],
      ["poise", "P", null, "dynamic_viscosity", false, false, 0.1],
      ["pond", "pond", null, "force", false, true, 980665e-8],
      ["pound force", "lbf", null, "force", false, true, 4.4482216152605],
      ["pound mass", "lbm", null, "mass", false, true, 0.45359237],
      ["quart", "qt", null, "volume", false, true, 946352946e-12],
      ["radian", "rad", null, "angle", true, false, 1],
      ["second", "?", null, "angle", false, false, 484813681109536e-20],
      ["second", "s", ["sec"], "time", true, true, 1],
      ["short hundredweight", "cwt", ["shweight"], "mass", false, true, 45.359237],
      ["siemens", "S", null, "electrical_conductance", true, false, 1],
      ["sievert", "Sv", null, "equivalent_dose", true, false, 1],
      ["slug", "sg", null, "mass", false, true, 14.59390294],
      ["square \xE5ngstr\xF6m", "ang2", ["ang^2"], "area", false, true, 1e-20],
      ["square foot", "ft2", ["ft^2"], "area", false, true, 0.09290304],
      ["square inch", "in2", ["in^2"], "area", false, true, 64516e-8],
      ["square light-year", "ly2", ["ly^2"], "area", false, true, 895054210748189e17],
      ["square meter", "m?", null, "area", true, true, 1],
      ["square mile", "mi2", ["mi^2"], "area", false, true, 2589988110336e-6],
      ["square nautical mile", "Nmi2", ["Nmi^2"], "area", false, true, 3429904],
      ["square Pica", "Pica2", ["Picapt2", "Pica^2", "Picapt^2"], "area", false, true, 1792111111111e-17],
      ["square yard", "yd2", ["yd^2"], "area", false, true, 0.83612736],
      ["statute mile", "mi", null, "length", false, true, 1609.344],
      ["steradian", "sr", null, "solid_angle", true, false, 1],
      ["stilb", "sb", null, "luminance", false, false, 1e-4],
      ["stokes", "St", null, "kinematic_viscosity", false, false, 1e-4],
      ["stone", "stone", null, "mass", false, true, 6.35029318],
      ["tablespoon", "tbs", null, "volume", false, true, 147868e-10],
      ["teaspoon", "tsp", null, "volume", false, true, 492892e-11],
      ["tesla", "T", null, "magnetic_flux_density", true, true, 1],
      ["thermodynamic calorie", "c", null, "energy", false, true, 4.184],
      ["ton", "ton", null, "mass", false, true, 907.18474],
      ["tonne", "t", null, "mass", false, false, 1e3],
      ["U.K. pint", "uk_pt", null, "volume", false, true, 56826125e-11],
      ["U.S. bushel", "bushel", null, "volume", false, true, 0.03523907],
      ["U.S. oil barrel", "barrel", null, "volume", false, true, 0.158987295],
      ["U.S. pint", "pt", ["us_pt"], "volume", false, true, 473176473e-12],
      ["U.S. survey mile", "survey_mi", null, "length", false, true, 1609.347219],
      ["U.S. survey/statute acre", "us_acre", null, "area", false, true, 4046.87261],
      ["volt", "V", null, "voltage", true, false, 1],
      ["watt", "W", null, "power", true, true, 1],
      ["watt-hour", "Wh", ["wh"], "energy", false, true, 3600],
      ["weber", "Wb", null, "magnetic_flux", true, false, 1],
      ["yard", "yd", null, "length", false, true, 0.9144],
      ["year", "yr", null, "time", false, true, 31557600]
    ];
    var binary_prefixes = {
      Yi: ["yobi", 80, 12089258196146292e8, "Yi", "yotta"],
      Zi: ["zebi", 70, 11805916207174113e5, "Zi", "zetta"],
      Ei: ["exbi", 60, 1152921504606847e3, "Ei", "exa"],
      Pi: ["pebi", 50, 1125899906842624, "Pi", "peta"],
      Ti: ["tebi", 40, 1099511627776, "Ti", "tera"],
      Gi: ["gibi", 30, 1073741824, "Gi", "giga"],
      Mi: ["mebi", 20, 1048576, "Mi", "mega"],
      ki: ["kibi", 10, 1024, "ki", "kilo"]
    };
    var unit_prefixes = {
      Y: ["yotta", 1e24, "Y"],
      Z: ["zetta", 1e21, "Z"],
      E: ["exa", 1e18, "E"],
      P: ["peta", 1e15, "P"],
      T: ["tera", 1e12, "T"],
      G: ["giga", 1e9, "G"],
      M: ["mega", 1e6, "M"],
      k: ["kilo", 1e3, "k"],
      h: ["hecto", 100, "h"],
      e: ["dekao", 10, "e"],
      d: ["deci", 0.1, "d"],
      c: ["centi", 0.01, "c"],
      m: ["milli", 1e-3, "m"],
      u: ["micro", 1e-6, "u"],
      n: ["nano", 1e-9, "n"],
      p: ["pico", 1e-12, "p"],
      f: ["femto", 1e-15, "f"],
      a: ["atto", 1e-18, "a"],
      z: ["zepto", 1e-21, "z"],
      y: ["yocto", 1e-24, "y"]
    };
    var from2 = null;
    var to = null;
    var base_from_unit = from_unit;
    var base_to_unit = to_unit;
    var from_multiplier = 1;
    var to_multiplier = 1;
    var alt;
    for (var i = 0; i < units.length; i++) {
      alt = units[i][2] === null ? [] : units[i][2];
      if (units[i][1] === base_from_unit || alt.indexOf(base_from_unit) >= 0) {
        from2 = units[i];
      }
      if (units[i][1] === base_to_unit || alt.indexOf(base_to_unit) >= 0) {
        to = units[i];
      }
    }
    if (from2 === null) {
      var from_binary_prefix = binary_prefixes[from_unit.substring(0, 2)];
      var from_unit_prefix = unit_prefixes[from_unit.substring(0, 1)];
      if (from_unit.substring(0, 2) === "da") {
        from_unit_prefix = ["dekao", 10, "da"];
      }
      if (from_binary_prefix) {
        from_multiplier = from_binary_prefix[2];
        base_from_unit = from_unit.substring(2);
      } else if (from_unit_prefix) {
        from_multiplier = from_unit_prefix[1];
        base_from_unit = from_unit.substring(from_unit_prefix[2].length);
      }
      for (var j = 0; j < units.length; j++) {
        alt = units[j][2] === null ? [] : units[j][2];
        if (units[j][1] === base_from_unit || alt.indexOf(base_from_unit) >= 0) {
          from2 = units[j];
        }
      }
    }
    if (to === null) {
      var to_binary_prefix = binary_prefixes[to_unit.substring(0, 2)];
      var to_unit_prefix = unit_prefixes[to_unit.substring(0, 1)];
      if (to_unit.substring(0, 2) === "da") {
        to_unit_prefix = ["dekao", 10, "da"];
      }
      if (to_binary_prefix) {
        to_multiplier = to_binary_prefix[2];
        base_to_unit = to_unit.substring(2);
      } else if (to_unit_prefix) {
        to_multiplier = to_unit_prefix[1];
        base_to_unit = to_unit.substring(to_unit_prefix[2].length);
      }
      for (var k = 0; k < units.length; k++) {
        alt = units[k][2] === null ? [] : units[k][2];
        if (units[k][1] === base_to_unit || alt.indexOf(base_to_unit) >= 0) {
          to = units[k];
        }
      }
    }
    if (from2 === null || to === null) {
      return error2.na;
    }
    if (from2[3] !== to[3]) {
      return error2.na;
    }
    return number * from2[6] * from_multiplier / (to[6] * to_multiplier);
  };
  exports.DEC2BIN = function(number, places) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    if (!/^-?[0-9]{1,3}$/.test(number) || number < -512 || number > 511) {
      return error2.num;
    }
    if (number < 0) {
      return "1" + text$1.REPT("0", 9 - (512 + number).toString(2).length) + (512 + number).toString(2);
    }
    var result = parseInt(number, 10).toString(2);
    if (typeof places === "undefined") {
      return result;
    } else {
      if (isNaN(places)) {
        return error2.value;
      }
      if (places < 0) {
        return error2.num;
      }
      places = Math.floor(places);
      return places >= result.length ? text$1.REPT("0", places - result.length) + result : error2.num;
    }
  };
  exports.DEC2HEX = function(number, places) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    if (!/^-?[0-9]{1,12}$/.test(number) || number < -549755813888 || number > 549755813887) {
      return error2.num;
    }
    if (number < 0) {
      return (1099511627776 + number).toString(16);
    }
    var result = parseInt(number, 10).toString(16);
    if (typeof places === "undefined") {
      return result;
    } else {
      if (isNaN(places)) {
        return error2.value;
      }
      if (places < 0) {
        return error2.num;
      }
      places = Math.floor(places);
      return places >= result.length ? text$1.REPT("0", places - result.length) + result : error2.num;
    }
  };
  exports.DEC2OCT = function(number, places) {
    number = utils2.parseNumber(number);
    if (number instanceof Error) {
      return number;
    }
    if (!/^-?[0-9]{1,9}$/.test(number) || number < -536870912 || number > 536870911) {
      return error2.num;
    }
    if (number < 0) {
      return (1073741824 + number).toString(8);
    }
    var result = parseInt(number, 10).toString(8);
    if (typeof places === "undefined") {
      return result;
    } else {
      if (isNaN(places)) {
        return error2.value;
      }
      if (places < 0) {
        return error2.num;
      }
      places = Math.floor(places);
      return places >= result.length ? text$1.REPT("0", places - result.length) + result : error2.num;
    }
  };
  exports.DELTA = function(number1, number2) {
    number2 = number2 === void 0 ? 0 : number2;
    number1 = utils2.parseNumber(number1);
    number2 = utils2.parseNumber(number2);
    if (utils2.anyIsError(number1, number2)) {
      return error2.value;
    }
    return number1 === number2 ? 1 : 0;
  };
  exports.ERF = function(lower_bound, upper_bound) {
    upper_bound = upper_bound === void 0 ? 0 : upper_bound;
    lower_bound = utils2.parseNumber(lower_bound);
    upper_bound = utils2.parseNumber(upper_bound);
    if (utils2.anyIsError(lower_bound, upper_bound)) {
      return error2.value;
    }
    return jStat.erf(lower_bound);
  };
  exports.ERF.PRECISE = function() {
    throw new Error("ERF.PRECISE is not implemented");
  };
  exports.ERFC = function(x2) {
    if (isNaN(x2)) {
      return error2.value;
    }
    return jStat.erfc(x2);
  };
  exports.ERFC.PRECISE = function() {
    throw new Error("ERFC.PRECISE is not implemented");
  };
  exports.GESTEP = function(number, step) {
    step = step || 0;
    number = utils2.parseNumber(number);
    if (utils2.anyIsError(step, number)) {
      return number;
    }
    return number >= step ? 1 : 0;
  };
  exports.HEX2BIN = function(number, places) {
    if (!/^[0-9A-Fa-f]{1,10}$/.test(number)) {
      return error2.num;
    }
    var negative = number.length === 10 && number.substring(0, 1).toLowerCase() === "f" ? true : false;
    var decimal = negative ? parseInt(number, 16) - 1099511627776 : parseInt(number, 16);
    if (decimal < -512 || decimal > 511) {
      return error2.num;
    }
    if (negative) {
      return "1" + text$1.REPT("0", 9 - (512 + decimal).toString(2).length) + (512 + decimal).toString(2);
    }
    var result = decimal.toString(2);
    if (places === void 0) {
      return result;
    } else {
      if (isNaN(places)) {
        return error2.value;
      }
      if (places < 0) {
        return error2.num;
      }
      places = Math.floor(places);
      return places >= result.length ? text$1.REPT("0", places - result.length) + result : error2.num;
    }
  };
  exports.HEX2DEC = function(number) {
    if (!/^[0-9A-Fa-f]{1,10}$/.test(number)) {
      return error2.num;
    }
    var decimal = parseInt(number, 16);
    return decimal >= 549755813888 ? decimal - 1099511627776 : decimal;
  };
  exports.HEX2OCT = function(number, places) {
    if (!/^[0-9A-Fa-f]{1,10}$/.test(number)) {
      return error2.num;
    }
    var decimal = parseInt(number, 16);
    if (decimal > 536870911 && decimal < 1098974756864) {
      return error2.num;
    }
    if (decimal >= 1098974756864) {
      return (decimal - 1098437885952).toString(8);
    }
    var result = decimal.toString(8);
    if (places === void 0) {
      return result;
    } else {
      if (isNaN(places)) {
        return error2.value;
      }
      if (places < 0) {
        return error2.num;
      }
      places = Math.floor(places);
      return places >= result.length ? text$1.REPT("0", places - result.length) + result : error2.num;
    }
  };
  exports.IMABS = function(inumber) {
    var x2 = exports.IMREAL(inumber);
    var y2 = exports.IMAGINARY(inumber);
    if (utils2.anyIsError(x2, y2)) {
      return error2.value;
    }
    return Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
  };
  exports.IMAGINARY = function(inumber) {
    if (inumber === void 0 || inumber === true || inumber === false) {
      return error2.value;
    }
    if (inumber === 0 || inumber === "0") {
      return 0;
    }
    if (["i", "j"].indexOf(inumber) >= 0) {
      return 1;
    }
    inumber = inumber.replace("+i", "+1i").replace("-i", "-1i").replace("+j", "+1j").replace("-j", "-1j");
    var plus = inumber.indexOf("+");
    var minus = inumber.indexOf("-");
    if (plus === 0) {
      plus = inumber.indexOf("+", 1);
    }
    if (minus === 0) {
      minus = inumber.indexOf("-", 1);
    }
    var last = inumber.substring(inumber.length - 1, inumber.length);
    var unit = last === "i" || last === "j";
    if (plus >= 0 || minus >= 0) {
      if (!unit) {
        return error2.num;
      }
      if (plus >= 0) {
        return isNaN(inumber.substring(0, plus)) || isNaN(inumber.substring(plus + 1, inumber.length - 1)) ? error2.num : Number(inumber.substring(plus + 1, inumber.length - 1));
      } else {
        return isNaN(inumber.substring(0, minus)) || isNaN(inumber.substring(minus + 1, inumber.length - 1)) ? error2.num : -Number(inumber.substring(minus + 1, inumber.length - 1));
      }
    } else {
      if (unit) {
        return isNaN(inumber.substring(0, inumber.length - 1)) ? error2.num : inumber.substring(0, inumber.length - 1);
      } else {
        return isNaN(inumber) ? error2.num : 0;
      }
    }
  };
  exports.IMARGUMENT = function(inumber) {
    var x2 = exports.IMREAL(inumber);
    var y2 = exports.IMAGINARY(inumber);
    if (utils2.anyIsError(x2, y2)) {
      return error2.value;
    }
    if (x2 === 0 && y2 === 0) {
      return error2.div0;
    }
    if (x2 === 0 && y2 > 0) {
      return Math.PI / 2;
    }
    if (x2 === 0 && y2 < 0) {
      return -Math.PI / 2;
    }
    if (y2 === 0 && x2 > 0) {
      return 0;
    }
    if (y2 === 0 && x2 < 0) {
      return -Math.PI;
    }
    if (x2 > 0) {
      return Math.atan(y2 / x2);
    } else if (x2 < 0 && y2 >= 0) {
      return Math.atan(y2 / x2) + Math.PI;
    } else {
      return Math.atan(y2 / x2) - Math.PI;
    }
  };
  exports.IMCONJUGATE = function(inumber) {
    var x2 = exports.IMREAL(inumber);
    var y2 = exports.IMAGINARY(inumber);
    if (utils2.anyIsError(x2, y2)) {
      return error2.value;
    }
    var unit = inumber.substring(inumber.length - 1);
    unit = unit === "i" || unit === "j" ? unit : "i";
    return y2 !== 0 ? exports.COMPLEX(x2, -y2, unit) : inumber;
  };
  exports.IMCOS = function(inumber) {
    var x2 = exports.IMREAL(inumber);
    var y2 = exports.IMAGINARY(inumber);
    if (utils2.anyIsError(x2, y2)) {
      return error2.value;
    }
    var unit = inumber.substring(inumber.length - 1);
    unit = unit === "i" || unit === "j" ? unit : "i";
    return exports.COMPLEX(Math.cos(x2) * (Math.exp(y2) + Math.exp(-y2)) / 2, -Math.sin(x2) * (Math.exp(y2) - Math.exp(-y2)) / 2, unit);
  };
  exports.IMCOSH = function(inumber) {
    var x2 = exports.IMREAL(inumber);
    var y2 = exports.IMAGINARY(inumber);
    if (utils2.anyIsError(x2, y2)) {
      return error2.value;
    }
    var unit = inumber.substring(inumber.length - 1);
    unit = unit === "i" || unit === "j" ? unit : "i";
    return exports.COMPLEX(Math.cos(y2) * (Math.exp(x2) + Math.exp(-x2)) / 2, Math.sin(y2) * (Math.exp(x2) - Math.exp(-x2)) / 2, unit);
  };
  exports.IMCOT = function(inumber) {
    var x2 = exports.IMREAL(inumber);
    var y2 = exports.IMAGINARY(inumber);
    if (utils2.anyIsError(x2, y2)) {
      return error2.value;
    }
    return exports.IMDIV(exports.IMCOS(inumber), exports.IMSIN(inumber));
  };
  exports.IMDIV = function(inumber1, inumber2) {
    var a = exports.IMREAL(inumber1);
    var b = exports.IMAGINARY(inumber1);
    var c = exports.IMREAL(inumber2);
    var d = exports.IMAGINARY(inumber2);
    if (utils2.anyIsError(a, b, c, d)) {
      return error2.value;
    }
    var unit1 = inumber1.substring(inumber1.length - 1);
    var unit2 = inumber2.substring(inumber2.length - 1);
    var unit = "i";
    if (unit1 === "j") {
      unit = "j";
    } else if (unit2 === "j") {
      unit = "j";
    }
    if (c === 0 && d === 0) {
      return error2.num;
    }
    var den = c * c + d * d;
    return exports.COMPLEX((a * c + b * d) / den, (b * c - a * d) / den, unit);
  };
  exports.IMEXP = function(inumber) {
    var x2 = exports.IMREAL(inumber);
    var y2 = exports.IMAGINARY(inumber);
    if (utils2.anyIsError(x2, y2)) {
      return error2.value;
    }
    var unit = inumber.substring(inumber.length - 1);
    unit = unit === "i" || unit === "j" ? unit : "i";
    var e = Math.exp(x2);
    return exports.COMPLEX(e * Math.cos(y2), e * Math.sin(y2), unit);
  };
  exports.IMLN = function(inumber) {
    var x2 = exports.IMREAL(inumber);
    var y2 = exports.IMAGINARY(inumber);
    if (utils2.anyIsError(x2, y2)) {
      return error2.value;
    }
    var unit = inumber.substring(inumber.length - 1);
    unit = unit === "i" || unit === "j" ? unit : "i";
    return exports.COMPLEX(Math.log(Math.sqrt(x2 * x2 + y2 * y2)), Math.atan(y2 / x2), unit);
  };
  exports.IMLOG10 = function(inumber) {
    var x2 = exports.IMREAL(inumber);
    var y2 = exports.IMAGINARY(inumber);
    if (utils2.anyIsError(x2, y2)) {
      return error2.value;
    }
    var unit = inumber.substring(inumber.length - 1);
    unit = unit === "i" || unit === "j" ? unit : "i";
    return exports.COMPLEX(Math.log(Math.sqrt(x2 * x2 + y2 * y2)) / Math.log(10), Math.atan(y2 / x2) / Math.log(10), unit);
  };
  exports.IMLOG2 = function(inumber) {
    var x2 = exports.IMREAL(inumber);
    var y2 = exports.IMAGINARY(inumber);
    if (utils2.anyIsError(x2, y2)) {
      return error2.value;
    }
    var unit = inumber.substring(inumber.length - 1);
    unit = unit === "i" || unit === "j" ? unit : "i";
    return exports.COMPLEX(Math.log(Math.sqrt(x2 * x2 + y2 * y2)) / Math.log(2), Math.atan(y2 / x2) / Math.log(2), unit);
  };
  exports.IMPOWER = function(inumber, number) {
    number = utils2.parseNumber(number);
    var x2 = exports.IMREAL(inumber);
    var y2 = exports.IMAGINARY(inumber);
    if (utils2.anyIsError(number, x2, y2)) {
      return error2.value;
    }
    var unit = inumber.substring(inumber.length - 1);
    unit = unit === "i" || unit === "j" ? unit : "i";
    var p2 = Math.pow(exports.IMABS(inumber), number);
    var t2 = exports.IMARGUMENT(inumber);
    return exports.COMPLEX(p2 * Math.cos(number * t2), p2 * Math.sin(number * t2), unit);
  };
  exports.IMPRODUCT = function() {
    var result = arguments[0];
    if (!arguments.length) {
      return error2.value;
    }
    for (var i = 1; i < arguments.length; i++) {
      var a = exports.IMREAL(result);
      var b = exports.IMAGINARY(result);
      var c = exports.IMREAL(arguments[i]);
      var d = exports.IMAGINARY(arguments[i]);
      if (utils2.anyIsError(a, b, c, d)) {
        return error2.value;
      }
      result = exports.COMPLEX(a * c - b * d, a * d + b * c);
    }
    return result;
  };
  exports.IMREAL = function(inumber) {
    if (inumber === void 0 || inumber === true || inumber === false) {
      return error2.value;
    }
    if (inumber === 0 || inumber === "0") {
      return 0;
    }
    if (["i", "+i", "1i", "+1i", "-i", "-1i", "j", "+j", "1j", "+1j", "-j", "-1j"].indexOf(inumber) >= 0) {
      return 0;
    }
    var plus = inumber.indexOf("+");
    var minus = inumber.indexOf("-");
    if (plus === 0) {
      plus = inumber.indexOf("+", 1);
    }
    if (minus === 0) {
      minus = inumber.indexOf("-", 1);
    }
    var last = inumber.substring(inumber.length - 1, inumber.length);
    var unit = last === "i" || last === "j";
    if (plus >= 0 || minus >= 0) {
      if (!unit) {
        return error2.num;
      }
      if (plus >= 0) {
        return isNaN(inumber.substring(0, plus)) || isNaN(inumber.substring(plus + 1, inumber.length - 1)) ? error2.num : Number(inumber.substring(0, plus));
      } else {
        return isNaN(inumber.substring(0, minus)) || isNaN(inumber.substring(minus + 1, inumber.length - 1)) ? error2.num : Number(inumber.substring(0, minus));
      }
    } else {
      if (unit) {
        return isNaN(inumber.substring(0, inumber.length - 1)) ? error2.num : 0;
      } else {
        return isNaN(inumber) ? error2.num : inumber;
      }
    }
  };
  exports.IMSEC = function(inumber) {
    if (inumber === true || inumber === false) {
      return error2.value;
    }
    var x2 = exports.IMREAL(inumber);
    var y2 = exports.IMAGINARY(inumber);
    if (utils2.anyIsError(x2, y2)) {
      return error2.value;
    }
    return exports.IMDIV("1", exports.IMCOS(inumber));
  };
  exports.IMSECH = function(inumber) {
    var x2 = exports.IMREAL(inumber);
    var y2 = exports.IMAGINARY(inumber);
    if (utils2.anyIsError(x2, y2)) {
      return error2.value;
    }
    return exports.IMDIV("1", exports.IMCOSH(inumber));
  };
  exports.IMSIN = function(inumber) {
    var x2 = exports.IMREAL(inumber);
    var y2 = exports.IMAGINARY(inumber);
    if (utils2.anyIsError(x2, y2)) {
      return error2.value;
    }
    var unit = inumber.substring(inumber.length - 1);
    unit = unit === "i" || unit === "j" ? unit : "i";
    return exports.COMPLEX(Math.sin(x2) * (Math.exp(y2) + Math.exp(-y2)) / 2, Math.cos(x2) * (Math.exp(y2) - Math.exp(-y2)) / 2, unit);
  };
  exports.IMSINH = function(inumber) {
    var x2 = exports.IMREAL(inumber);
    var y2 = exports.IMAGINARY(inumber);
    if (utils2.anyIsError(x2, y2)) {
      return error2.value;
    }
    var unit = inumber.substring(inumber.length - 1);
    unit = unit === "i" || unit === "j" ? unit : "i";
    return exports.COMPLEX(Math.cos(y2) * (Math.exp(x2) - Math.exp(-x2)) / 2, Math.sin(y2) * (Math.exp(x2) + Math.exp(-x2)) / 2, unit);
  };
  exports.IMSQRT = function(inumber) {
    var x2 = exports.IMREAL(inumber);
    var y2 = exports.IMAGINARY(inumber);
    if (utils2.anyIsError(x2, y2)) {
      return error2.value;
    }
    var unit = inumber.substring(inumber.length - 1);
    unit = unit === "i" || unit === "j" ? unit : "i";
    var s = Math.sqrt(exports.IMABS(inumber));
    var t2 = exports.IMARGUMENT(inumber);
    return exports.COMPLEX(s * Math.cos(t2 / 2), s * Math.sin(t2 / 2), unit);
  };
  exports.IMCSC = function(inumber) {
    if (inumber === true || inumber === false) {
      return error2.value;
    }
    var x2 = exports.IMREAL(inumber);
    var y2 = exports.IMAGINARY(inumber);
    if (utils2.anyIsError(x2, y2)) {
      return error2.num;
    }
    return exports.IMDIV("1", exports.IMSIN(inumber));
  };
  exports.IMCSCH = function(inumber) {
    if (inumber === true || inumber === false) {
      return error2.value;
    }
    var x2 = exports.IMREAL(inumber);
    var y2 = exports.IMAGINARY(inumber);
    if (utils2.anyIsError(x2, y2)) {
      return error2.num;
    }
    return exports.IMDIV("1", exports.IMSINH(inumber));
  };
  exports.IMSUB = function(inumber1, inumber2) {
    var a = this.IMREAL(inumber1);
    var b = this.IMAGINARY(inumber1);
    var c = this.IMREAL(inumber2);
    var d = this.IMAGINARY(inumber2);
    if (utils2.anyIsError(a, b, c, d)) {
      return error2.value;
    }
    var unit1 = inumber1.substring(inumber1.length - 1);
    var unit2 = inumber2.substring(inumber2.length - 1);
    var unit = "i";
    if (unit1 === "j") {
      unit = "j";
    } else if (unit2 === "j") {
      unit = "j";
    }
    return this.COMPLEX(a - c, b - d, unit);
  };
  exports.IMSUM = function() {
    if (!arguments.length) {
      return error2.value;
    }
    var args = utils2.flatten(arguments);
    var result = args[0];
    for (var i = 1; i < args.length; i++) {
      var a = this.IMREAL(result);
      var b = this.IMAGINARY(result);
      var c = this.IMREAL(args[i]);
      var d = this.IMAGINARY(args[i]);
      if (utils2.anyIsError(a, b, c, d)) {
        return error2.value;
      }
      result = this.COMPLEX(a + c, b + d);
    }
    return result;
  };
  exports.IMTAN = function(inumber) {
    if (inumber === true || inumber === false) {
      return error2.value;
    }
    var x2 = exports.IMREAL(inumber);
    var y2 = exports.IMAGINARY(inumber);
    if (utils2.anyIsError(x2, y2)) {
      return error2.value;
    }
    return this.IMDIV(this.IMSIN(inumber), this.IMCOS(inumber));
  };
  exports.OCT2BIN = function(number, places) {
    if (!/^[0-7]{1,10}$/.test(number)) {
      return error2.num;
    }
    var negative = number.length === 10 && number.substring(0, 1) === "7" ? true : false;
    var decimal = negative ? parseInt(number, 8) - 1073741824 : parseInt(number, 8);
    if (decimal < -512 || decimal > 511) {
      return error2.num;
    }
    if (negative) {
      return "1" + text$1.REPT("0", 9 - (512 + decimal).toString(2).length) + (512 + decimal).toString(2);
    }
    var result = decimal.toString(2);
    if (typeof places === "undefined") {
      return result;
    } else {
      if (isNaN(places)) {
        return error2.value;
      }
      if (places < 0) {
        return error2.num;
      }
      places = Math.floor(places);
      return places >= result.length ? text$1.REPT("0", places - result.length) + result : error2.num;
    }
  };
  exports.OCT2DEC = function(number) {
    if (!/^[0-7]{1,10}$/.test(number)) {
      return error2.num;
    }
    var decimal = parseInt(number, 8);
    return decimal >= 536870912 ? decimal - 1073741824 : decimal;
  };
  exports.OCT2HEX = function(number, places) {
    if (!/^[0-7]{1,10}$/.test(number)) {
      return error2.num;
    }
    var decimal = parseInt(number, 8);
    if (decimal >= 536870912) {
      return "ff" + (decimal + 3221225472).toString(16);
    }
    var result = decimal.toString(16);
    if (places === void 0) {
      return result;
    } else {
      if (isNaN(places)) {
        return error2.value;
      }
      if (places < 0) {
        return error2.num;
      }
      places = Math.floor(places);
      return places >= result.length ? text$1.REPT("0", places - result.length) + result : error2.num;
    }
  };
})(engineering$1);
var dateTime$1 = {};
(function(exports) {
  var error2 = error$3;
  var utils2 = common;
  var d1900 = new Date(Date.UTC(1900, 0, 1));
  var WEEK_STARTS = [
    void 0,
    0,
    1,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    1,
    2,
    3,
    4,
    5,
    6,
    0
  ];
  var WEEK_TYPES = [
    [],
    [1, 2, 3, 4, 5, 6, 7],
    [7, 1, 2, 3, 4, 5, 6],
    [6, 0, 1, 2, 3, 4, 5],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [7, 1, 2, 3, 4, 5, 6],
    [6, 7, 1, 2, 3, 4, 5],
    [5, 6, 7, 1, 2, 3, 4],
    [4, 5, 6, 7, 1, 2, 3],
    [3, 4, 5, 6, 7, 1, 2],
    [2, 3, 4, 5, 6, 7, 1],
    [1, 2, 3, 4, 5, 6, 7]
  ];
  var WEEKEND_TYPES = [
    [],
    [6, 0],
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    void 0,
    void 0,
    void 0,
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
    [6, 6]
  ];
  exports.DATE = function(year, month, day) {
    var result;
    year = utils2.parseNumber(year);
    month = utils2.parseNumber(month);
    day = utils2.parseNumber(day);
    if (utils2.anyIsError(year, month, day)) {
      result = error2.value;
    } else if (year < 0 || month < 0 || day < 0) {
      result = error2.num;
    } else {
      result = new Date(year, month - 1, day);
    }
    return result;
  };
  exports.DATEVALUE = function(date_text) {
    var modifier = 2;
    var date;
    if (typeof date_text !== "string") {
      return error2.value;
    }
    date = Date.parse(date_text);
    if (isNaN(date)) {
      return error2.value;
    }
    if (date <= -22038912e5) {
      modifier = 1;
    }
    return Math.ceil((date - d1900) / 864e5) + modifier;
  };
  exports.DAY = function(serial_number) {
    var date = utils2.parseDate(serial_number);
    if (date instanceof Error) {
      return date;
    }
    return date.getDate();
  };
  exports.DAYS = function(end_date, start_date) {
    end_date = utils2.parseDate(end_date);
    start_date = utils2.parseDate(start_date);
    if (end_date instanceof Error) {
      return end_date;
    }
    if (start_date instanceof Error) {
      return start_date;
    }
    return serial(end_date) - serial(start_date);
  };
  exports.DAYS360 = function(start_date, end_date, method) {
    method = utils2.parseBool(method);
    start_date = utils2.parseDate(start_date);
    end_date = utils2.parseDate(end_date);
    if (start_date instanceof Error) {
      return start_date;
    }
    if (end_date instanceof Error) {
      return end_date;
    }
    if (method instanceof Error) {
      return method;
    }
    var sm = start_date.getMonth();
    var em = end_date.getMonth();
    var sd2, ed2;
    if (method) {
      sd2 = start_date.getDate() === 31 ? 30 : start_date.getDate();
      ed2 = end_date.getDate() === 31 ? 30 : end_date.getDate();
    } else {
      var smd = new Date(start_date.getFullYear(), sm + 1, 0).getDate();
      var emd = new Date(end_date.getFullYear(), em + 1, 0).getDate();
      sd2 = start_date.getDate() === smd ? 30 : start_date.getDate();
      if (end_date.getDate() === emd) {
        if (sd2 < 30) {
          em++;
          ed2 = 1;
        } else {
          ed2 = 30;
        }
      } else {
        ed2 = end_date.getDate();
      }
    }
    return 360 * (end_date.getFullYear() - start_date.getFullYear()) + 30 * (em - sm) + (ed2 - sd2);
  };
  exports.EDATE = function(start_date, months) {
    start_date = utils2.parseDate(start_date);
    if (start_date instanceof Error) {
      return start_date;
    }
    if (isNaN(months)) {
      return error2.value;
    }
    months = parseInt(months, 10);
    start_date.setMonth(start_date.getMonth() + months);
    return serial(start_date);
  };
  exports.EOMONTH = function(start_date, months) {
    start_date = utils2.parseDate(start_date);
    if (start_date instanceof Error) {
      return start_date;
    }
    if (isNaN(months)) {
      return error2.value;
    }
    months = parseInt(months, 10);
    return serial(new Date(start_date.getFullYear(), start_date.getMonth() + months + 1, 0));
  };
  exports.HOUR = function(serial_number) {
    serial_number = utils2.parseDate(serial_number);
    if (serial_number instanceof Error) {
      return serial_number;
    }
    return serial_number.getHours();
  };
  exports.INTERVAL = function(second) {
    if (typeof second !== "number" && typeof second !== "string") {
      return error2.value;
    } else {
      second = parseInt(second, 10);
    }
    var year = Math.floor(second / 94608e4);
    second = second % 94608e4;
    var month = Math.floor(second / 2592e3);
    second = second % 2592e3;
    var day = Math.floor(second / 86400);
    second = second % 86400;
    var hour = Math.floor(second / 3600);
    second = second % 3600;
    var min2 = Math.floor(second / 60);
    second = second % 60;
    var sec = second;
    year = year > 0 ? year + "Y" : "";
    month = month > 0 ? month + "M" : "";
    day = day > 0 ? day + "D" : "";
    hour = hour > 0 ? hour + "H" : "";
    min2 = min2 > 0 ? min2 + "M" : "";
    sec = sec > 0 ? sec + "S" : "";
    return "P" + year + month + day + "T" + hour + min2 + sec;
  };
  exports.ISOWEEKNUM = function(date) {
    date = utils2.parseDate(date);
    if (date instanceof Error) {
      return date;
    }
    date.setHours(0, 0, 0);
    date.setDate(date.getDate() + 4 - (date.getDay() || 7));
    var yearStart = new Date(date.getFullYear(), 0, 1);
    return Math.ceil(((date - yearStart) / 864e5 + 1) / 7);
  };
  exports.MINUTE = function(serial_number) {
    serial_number = utils2.parseDate(serial_number);
    if (serial_number instanceof Error) {
      return serial_number;
    }
    return serial_number.getMinutes();
  };
  exports.MONTH = function(serial_number) {
    serial_number = utils2.parseDate(serial_number);
    if (serial_number instanceof Error) {
      return serial_number;
    }
    return serial_number.getMonth() + 1;
  };
  exports.NETWORKDAYS = function(start_date, end_date, holidays) {
    return this.NETWORKDAYS.INTL(start_date, end_date, 1, holidays);
  };
  exports.NETWORKDAYS.INTL = function(start_date, end_date, weekend, holidays) {
    start_date = utils2.parseDate(start_date);
    if (start_date instanceof Error) {
      return start_date;
    }
    end_date = utils2.parseDate(end_date);
    if (end_date instanceof Error) {
      return end_date;
    }
    if (weekend === void 0) {
      weekend = WEEKEND_TYPES[1];
    } else {
      weekend = WEEKEND_TYPES[weekend];
    }
    if (!(weekend instanceof Array)) {
      return error2.value;
    }
    if (holidays === void 0) {
      holidays = [];
    } else if (!(holidays instanceof Array)) {
      holidays = [holidays];
    }
    for (var i = 0; i < holidays.length; i++) {
      var h = utils2.parseDate(holidays[i]);
      if (h instanceof Error) {
        return h;
      }
      holidays[i] = h;
    }
    var days = (end_date - start_date) / (1e3 * 60 * 60 * 24) + 1;
    var total = days;
    var day = start_date;
    for (i = 0; i < days; i++) {
      var d = new Date().getTimezoneOffset() > 0 ? day.getUTCDay() : day.getDay();
      var dec = false;
      if (d === weekend[0] || d === weekend[1]) {
        dec = true;
      }
      for (var j = 0; j < holidays.length; j++) {
        var holiday = holidays[j];
        if (holiday.getDate() === day.getDate() && holiday.getMonth() === day.getMonth() && holiday.getFullYear() === day.getFullYear()) {
          dec = true;
          break;
        }
      }
      if (dec) {
        total--;
      }
      day.setDate(day.getDate() + 1);
    }
    return total;
  };
  exports.NOW = function() {
    return new Date();
  };
  exports.SECOND = function(serial_number) {
    serial_number = utils2.parseDate(serial_number);
    if (serial_number instanceof Error) {
      return serial_number;
    }
    return serial_number.getSeconds();
  };
  exports.TIME = function(hour, minute, second) {
    hour = utils2.parseNumber(hour);
    minute = utils2.parseNumber(minute);
    second = utils2.parseNumber(second);
    if (utils2.anyIsError(hour, minute, second)) {
      return error2.value;
    }
    if (hour < 0 || minute < 0 || second < 0) {
      return error2.num;
    }
    return (3600 * hour + 60 * minute + second) / 86400;
  };
  exports.TIMEVALUE = function(time_text) {
    time_text = utils2.parseDate(time_text);
    if (time_text instanceof Error) {
      return time_text;
    }
    return (3600 * time_text.getHours() + 60 * time_text.getMinutes() + time_text.getSeconds()) / 86400;
  };
  exports.TODAY = function() {
    return new Date();
  };
  exports.WEEKDAY = function(serial_number, return_type) {
    serial_number = utils2.parseDate(serial_number);
    if (serial_number instanceof Error) {
      return serial_number;
    }
    if (return_type === void 0) {
      return_type = 1;
    }
    var day = serial_number.getDay();
    return WEEK_TYPES[return_type][day];
  };
  exports.WEEKNUM = function(serial_number, return_type) {
    serial_number = utils2.parseDate(serial_number);
    if (serial_number instanceof Error) {
      return serial_number;
    }
    if (return_type === void 0) {
      return_type = 1;
    }
    if (return_type === 21) {
      return this.ISOWEEKNUM(serial_number);
    }
    var week_start = WEEK_STARTS[return_type];
    var jan = new Date(serial_number.getFullYear(), 0, 1);
    var inc = jan.getDay() < week_start ? 1 : 0;
    jan -= Math.abs(jan.getDay() - week_start) * 24 * 60 * 60 * 1e3;
    return Math.floor((serial_number - jan) / (1e3 * 60 * 60 * 24) / 7 + 1) + inc;
  };
  exports.WORKDAY = function(start_date, days, holidays) {
    return this.WORKDAY.INTL(start_date, days, 1, holidays);
  };
  exports.WORKDAY.INTL = function(start_date, days, weekend, holidays) {
    start_date = utils2.parseDate(start_date);
    if (start_date instanceof Error) {
      return start_date;
    }
    days = utils2.parseNumber(days);
    if (days instanceof Error) {
      return days;
    }
    if (days < 0) {
      return error2.num;
    }
    if (weekend === void 0) {
      weekend = WEEKEND_TYPES[1];
    } else {
      weekend = WEEKEND_TYPES[weekend];
    }
    if (!(weekend instanceof Array)) {
      return error2.value;
    }
    if (holidays === void 0) {
      holidays = [];
    } else if (!(holidays instanceof Array)) {
      holidays = [holidays];
    }
    for (var i = 0; i < holidays.length; i++) {
      var h = utils2.parseDate(holidays[i]);
      if (h instanceof Error) {
        return h;
      }
      holidays[i] = h;
    }
    var d = 0;
    while (d < days) {
      start_date.setDate(start_date.getDate() + 1);
      var day = start_date.getDay();
      if (day === weekend[0] || day === weekend[1]) {
        continue;
      }
      for (var j = 0; j < holidays.length; j++) {
        var holiday = holidays[j];
        if (holiday.getDate() === start_date.getDate() && holiday.getMonth() === start_date.getMonth() && holiday.getFullYear() === start_date.getFullYear()) {
          d--;
          break;
        }
      }
      d++;
    }
    return start_date;
  };
  exports.YEAR = function(serial_number) {
    serial_number = utils2.parseDate(serial_number);
    if (serial_number instanceof Error) {
      return serial_number;
    }
    return serial_number.getFullYear();
  };
  function isLeapYear(year) {
    return new Date(year, 1, 29).getMonth() === 1;
  }
  function daysBetween(start_date, end_date) {
    return Math.ceil((end_date - start_date) / 1e3 / 60 / 60 / 24);
  }
  exports.YEARFRAC = function(start_date, end_date, basis) {
    start_date = utils2.parseDate(start_date);
    if (start_date instanceof Error) {
      return start_date;
    }
    end_date = utils2.parseDate(end_date);
    if (end_date instanceof Error) {
      return end_date;
    }
    basis = basis || 0;
    var sd2 = start_date.getDate();
    var sm = start_date.getMonth() + 1;
    var sy = start_date.getFullYear();
    var ed2 = end_date.getDate();
    var em = end_date.getMonth() + 1;
    var ey = end_date.getFullYear();
    switch (basis) {
      case 0:
        if (sd2 === 31 && ed2 === 31) {
          sd2 = 30;
          ed2 = 30;
        } else if (sd2 === 31) {
          sd2 = 30;
        } else if (sd2 === 30 && ed2 === 31) {
          ed2 = 30;
        }
        return (ed2 + em * 30 + ey * 360 - (sd2 + sm * 30 + sy * 360)) / 360;
      case 1:
        var feb29Between = function(date1, date2) {
          var year1 = date1.getFullYear();
          var mar1year1 = new Date(year1, 2, 1);
          if (isLeapYear(year1) && date1 < mar1year1 && date2 >= mar1year1) {
            return true;
          }
          var year2 = date2.getFullYear();
          var mar1year2 = new Date(year2, 2, 1);
          return isLeapYear(year2) && date2 >= mar1year2 && date1 < mar1year2;
        };
        var ylength = 365;
        if (sy === ey || sy + 1 === ey && (sm > em || sm === em && sd2 >= ed2)) {
          if (sy === ey && isLeapYear(sy) || feb29Between(start_date, end_date) || em === 1 && ed2 === 29) {
            ylength = 366;
          }
          return daysBetween(start_date, end_date) / ylength;
        }
        var years = ey - sy + 1;
        var days = (new Date(ey + 1, 0, 1) - new Date(sy, 0, 1)) / 1e3 / 60 / 60 / 24;
        var average = days / years;
        return daysBetween(start_date, end_date) / average;
      case 2:
        return daysBetween(start_date, end_date) / 360;
      case 3:
        return daysBetween(start_date, end_date) / 365;
      case 4:
        return (ed2 + em * 30 + ey * 360 - (sd2 + sm * 30 + sy * 360)) / 360;
    }
  };
  function serial(date) {
    var addOn = date > -22038912e5 ? 2 : 1;
    return Math.ceil((date - d1900) / 864e5) + addOn;
  }
})(dateTime$1);
var mathTrig = mathTrig$1;
var statistical = statistical$1;
var engineering = engineering$1;
var dateTime = dateTime$1;
function set$2(fn, root) {
  if (root) {
    for (var i in root) {
      fn[i] = root[i];
    }
  }
  return fn;
}
compatibility.BETADIST = statistical.BETA.DIST;
compatibility.BETAINV = statistical.BETA.INV;
compatibility.BINOMDIST = statistical.BINOM.DIST;
compatibility.CEILING = compatibility.ISOCEILING = set$2(mathTrig.CEILING.MATH, mathTrig.CEILING);
compatibility.CEILINGMATH = mathTrig.CEILING.MATH;
compatibility.CEILINGPRECISE = mathTrig.CEILING.PRECISE;
compatibility.CHIDIST = statistical.CHISQ.DIST;
compatibility.CHIDISTRT = statistical.CHISQ.DIST.RT;
compatibility.CHIINV = statistical.CHISQ.INV;
compatibility.CHIINVRT = statistical.CHISQ.INV.RT;
compatibility.CHITEST = statistical.CHISQ.TEST;
compatibility.CONFIDENCE = set$2(statistical.CONFIDENCE.NORM, statistical.CONFIDENCE);
compatibility.COVAR = statistical.COVARIANCE.P;
compatibility.COVARIANCEP = statistical.COVARIANCE.P;
compatibility.COVARIANCES = statistical.COVARIANCE.S;
compatibility.CRITBINOM = statistical.BINOM.INV;
compatibility.EXPONDIST = statistical.EXPON.DIST;
compatibility.ERFCPRECISE = engineering.ERFC.PRECISE;
compatibility.ERFPRECISE = engineering.ERF.PRECISE;
compatibility.FDIST = statistical.F.DIST;
compatibility.FDISTRT = statistical.F.DIST.RT;
compatibility.FINVRT = statistical.F.INV.RT;
compatibility.FINV = statistical.F.INV;
compatibility.FLOOR = set$2(mathTrig.FLOOR.MATH, mathTrig.FLOOR);
compatibility.FLOORMATH = mathTrig.FLOOR.MATH;
compatibility.FLOORPRECISE = mathTrig.FLOOR.PRECISE;
compatibility.FTEST = statistical.F.TEST;
compatibility.GAMMADIST = statistical.GAMMA.DIST;
compatibility.GAMMAINV = statistical.GAMMA.INV;
compatibility.GAMMALNPRECISE = statistical.GAMMALN.PRECISE;
compatibility.HYPGEOMDIST = statistical.HYPGEOM.DIST;
compatibility.LOGINV = statistical.LOGNORM.INV;
compatibility.LOGNORMINV = statistical.LOGNORM.INV;
compatibility.LOGNORMDIST = statistical.LOGNORM.DIST;
compatibility.MODE = set$2(statistical.MODE.SNGL, statistical.MODE);
compatibility.MODEMULT = statistical.MODE.MULT;
compatibility.MODESNGL = statistical.MODE.SNGL;
compatibility.NEGBINOMDIST = statistical.NEGBINOM.DIST;
compatibility.NETWORKDAYSINTL = dateTime.NETWORKDAYS.INTL;
compatibility.NORMDIST = statistical.NORM.DIST;
compatibility.NORMINV = statistical.NORM.INV;
compatibility.NORMSDIST = statistical.NORM.S.DIST;
compatibility.NORMSINV = statistical.NORM.S.INV;
compatibility.PERCENTILE = set$2(statistical.PERCENTILE.EXC, statistical.PERCENTILE);
compatibility.PERCENTILEEXC = statistical.PERCENTILE.EXC;
compatibility.PERCENTILEINC = statistical.PERCENTILE.INC;
compatibility.PERCENTRANK = set$2(statistical.PERCENTRANK.INC, statistical.PERCENTRANK);
compatibility.PERCENTRANKEXC = statistical.PERCENTRANK.EXC;
compatibility.PERCENTRANKINC = statistical.PERCENTRANK.INC;
compatibility.POISSON = set$2(statistical.POISSON.DIST, statistical.POISSON);
compatibility.POISSONDIST = statistical.POISSON.DIST;
compatibility.QUARTILE = set$2(statistical.QUARTILE.INC, statistical.QUARTILE);
compatibility.QUARTILEEXC = statistical.QUARTILE.EXC;
compatibility.QUARTILEINC = statistical.QUARTILE.INC;
compatibility.RANK = set$2(statistical.RANK.EQ, statistical.RANK);
compatibility.RANKAVG = statistical.RANK.AVG;
compatibility.RANKEQ = statistical.RANK.EQ;
compatibility.SKEWP = statistical.SKEW.P;
compatibility.STDEV = set$2(statistical.STDEV.S, statistical.STDEV);
compatibility.STDEVP = statistical.STDEV.P;
compatibility.STDEVS = statistical.STDEV.S;
compatibility.TDIST = statistical.T.DIST;
compatibility.TDISTRT = statistical.T.DIST.RT;
compatibility.TINV = statistical.T.INV;
compatibility.TTEST = statistical.T.TEST;
compatibility.VAR = set$2(statistical.VAR.S, statistical.VAR);
compatibility.VARP = statistical.VAR.P;
compatibility.VARS = statistical.VAR.S;
compatibility.WEIBULL = set$2(statistical.WEIBULL.DIST, statistical.WEIBULL);
compatibility.WEIBULLDIST = statistical.WEIBULL.DIST;
compatibility.WORKDAYINTL = dateTime.WORKDAY.INTL;
compatibility.ZTEST = statistical.Z.TEST;
var database = {};
(function(exports) {
  var error2 = error$3;
  var stats = statistical$1;
  var maths = mathTrig$1;
  var utils2 = common;
  var evalExpression = criteriaEval;
  function compact(array) {
    var result = [];
    utils2.arrayEach(array, function(value) {
      if (value) {
        result.push(value);
      }
    });
    return result;
  }
  exports.FINDFIELD = function(database2, title) {
    var index = null;
    utils2.arrayEach(database2, function(value, i) {
      if (value[0] === title) {
        index = i;
        return false;
      }
    });
    if (index == null) {
      return error2.value;
    }
    return index;
  };
  function findResultIndex(database2, criterias) {
    var matches = {};
    for (var i = 1; i < database2[0].length; ++i) {
      matches[i] = true;
    }
    var maxCriteriaLength = criterias[0].length;
    for (i = 1; i < criterias.length; ++i) {
      if (criterias[i].length > maxCriteriaLength) {
        maxCriteriaLength = criterias[i].length;
      }
    }
    for (var k = 1; k < database2.length; ++k) {
      for (var l2 = 1; l2 < database2[k].length; ++l2) {
        var currentCriteriaResult = false;
        var hasMatchingCriteria = false;
        for (var j = 0; j < criterias.length; ++j) {
          var criteria = criterias[j];
          if (criteria.length < maxCriteriaLength) {
            continue;
          }
          var criteriaField = criteria[0];
          if (database2[k][0] !== criteriaField) {
            continue;
          }
          hasMatchingCriteria = true;
          for (var p2 = 1; p2 < criteria.length; ++p2) {
            if (!currentCriteriaResult) {
              var isWildcard = criteria[p2] === void 0 || criteria[p2] === "*";
              if (isWildcard) {
                currentCriteriaResult = true;
              } else {
                var tokenizedCriteria = evalExpression.parse(criteria[p2] + "");
                var tokens = [evalExpression.createToken(database2[k][l2], evalExpression.TOKEN_TYPE_LITERAL)].concat(tokenizedCriteria);
                currentCriteriaResult = evalExpression.compute(tokens);
              }
            }
          }
        }
        if (hasMatchingCriteria) {
          matches[l2] = matches[l2] && currentCriteriaResult;
        }
      }
    }
    var result = [];
    for (var n2 = 0; n2 < database2[0].length; ++n2) {
      if (matches[n2]) {
        result.push(n2 - 1);
      }
    }
    return result;
  }
  exports.DAVERAGE = function(database2, field, criteria) {
    if (isNaN(field) && typeof field !== "string") {
      return error2.value;
    }
    var resultIndexes = findResultIndex(database2, criteria);
    var targetFields = [];
    if (typeof field === "string") {
      var index = exports.FINDFIELD(database2, field);
      targetFields = utils2.rest(database2[index]);
    } else {
      targetFields = utils2.rest(database2[field]);
    }
    var sum = 0;
    utils2.arrayEach(resultIndexes, function(value) {
      sum += targetFields[value];
    });
    return resultIndexes.length === 0 ? error2.div0 : sum / resultIndexes.length;
  };
  exports.DCOUNT = function(database2, field, criteria) {
    if (isNaN(field) && typeof field !== "string") {
      return error2.value;
    }
    var resultIndexes = findResultIndex(database2, criteria);
    var targetFields = [];
    if (typeof field === "string") {
      var index = exports.FINDFIELD(database2, field);
      targetFields = utils2.rest(database2[index]);
    } else {
      targetFields = utils2.rest(database2[field]);
    }
    var targetValues = [];
    utils2.arrayEach(resultIndexes, function(value) {
      targetValues.push(targetFields[value]);
    });
    return stats.COUNT(targetValues);
  };
  exports.DCOUNTA = function(database2, field, criteria) {
    if (isNaN(field) && typeof field !== "string") {
      return error2.value;
    }
    var resultIndexes = findResultIndex(database2, criteria);
    var targetFields = [];
    if (typeof field === "string") {
      var index = exports.FINDFIELD(database2, field);
      targetFields = utils2.rest(database2[index]);
    } else {
      targetFields = utils2.rest(database2[field]);
    }
    var targetValues = [];
    utils2.arrayEach(resultIndexes, function(value) {
      targetValues.push(targetFields[value]);
    });
    return stats.COUNTA(targetValues);
  };
  exports.DGET = function(database2, field, criteria) {
    if (isNaN(field) && typeof field !== "string") {
      return error2.value;
    }
    var resultIndexes = findResultIndex(database2, criteria);
    var targetFields = [];
    if (typeof field === "string") {
      var index = exports.FINDFIELD(database2, field);
      targetFields = utils2.rest(database2[index]);
    } else {
      targetFields = utils2.rest(database2[field]);
    }
    if (resultIndexes.length === 0) {
      return error2.value;
    }
    if (resultIndexes.length > 1) {
      return error2.num;
    }
    return targetFields[resultIndexes[0]];
  };
  exports.DMAX = function(database2, field, criteria) {
    if (isNaN(field) && typeof field !== "string") {
      return error2.value;
    }
    var resultIndexes = findResultIndex(database2, criteria);
    var targetFields = [];
    if (typeof field === "string") {
      var index = exports.FINDFIELD(database2, field);
      targetFields = utils2.rest(database2[index]);
    } else {
      targetFields = utils2.rest(database2[field]);
    }
    var maxValue = targetFields[resultIndexes[0]];
    utils2.arrayEach(resultIndexes, function(value) {
      if (maxValue < targetFields[value]) {
        maxValue = targetFields[value];
      }
    });
    return maxValue;
  };
  exports.DMIN = function(database2, field, criteria) {
    if (isNaN(field) && typeof field !== "string") {
      return error2.value;
    }
    var resultIndexes = findResultIndex(database2, criteria);
    var targetFields = [];
    if (typeof field === "string") {
      var index = exports.FINDFIELD(database2, field);
      targetFields = utils2.rest(database2[index]);
    } else {
      targetFields = utils2.rest(database2[field]);
    }
    var minValue = targetFields[resultIndexes[0]];
    utils2.arrayEach(resultIndexes, function(value) {
      if (minValue > targetFields[value]) {
        minValue = targetFields[value];
      }
    });
    return minValue;
  };
  exports.DPRODUCT = function(database2, field, criteria) {
    if (isNaN(field) && typeof field !== "string") {
      return error2.value;
    }
    var resultIndexes = findResultIndex(database2, criteria);
    var targetFields = [];
    if (typeof field === "string") {
      var index = exports.FINDFIELD(database2, field);
      targetFields = utils2.rest(database2[index]);
    } else {
      targetFields = utils2.rest(database2[field]);
    }
    var targetValues = [];
    utils2.arrayEach(resultIndexes, function(value) {
      targetValues.push(targetFields[value]);
    });
    targetValues = compact(targetValues);
    var result = 1;
    utils2.arrayEach(targetValues, function(value) {
      result *= value;
    });
    return result;
  };
  exports.DSTDEV = function(database2, field, criteria) {
    if (isNaN(field) && typeof field !== "string") {
      return error2.value;
    }
    var resultIndexes = findResultIndex(database2, criteria);
    var targetFields = [];
    if (typeof field === "string") {
      var index = exports.FINDFIELD(database2, field);
      targetFields = utils2.rest(database2[index]);
    } else {
      targetFields = utils2.rest(database2[field]);
    }
    var targetValues = [];
    utils2.arrayEach(resultIndexes, function(value) {
      targetValues.push(targetFields[value]);
    });
    targetValues = compact(targetValues);
    return stats.STDEV.S(targetValues);
  };
  exports.DSTDEVP = function(database2, field, criteria) {
    if (isNaN(field) && typeof field !== "string") {
      return error2.value;
    }
    var resultIndexes = findResultIndex(database2, criteria);
    var targetFields = [];
    if (typeof field === "string") {
      var index = exports.FINDFIELD(database2, field);
      targetFields = utils2.rest(database2[index]);
    } else {
      targetFields = utils2.rest(database2[field]);
    }
    var targetValues = [];
    utils2.arrayEach(resultIndexes, function(value) {
      targetValues.push(targetFields[value]);
    });
    targetValues = compact(targetValues);
    return stats.STDEV.P(targetValues);
  };
  exports.DSUM = function(database2, field, criteria) {
    if (isNaN(field) && typeof field !== "string") {
      return error2.value;
    }
    var resultIndexes = findResultIndex(database2, criteria);
    var targetFields = [];
    if (typeof field === "string") {
      var index = exports.FINDFIELD(database2, field);
      targetFields = utils2.rest(database2[index]);
    } else {
      targetFields = utils2.rest(database2[field]);
    }
    var targetValues = [];
    utils2.arrayEach(resultIndexes, function(value) {
      targetValues.push(targetFields[value]);
    });
    return maths.SUM(targetValues);
  };
  exports.DVAR = function(database2, field, criteria) {
    if (isNaN(field) && typeof field !== "string") {
      return error2.value;
    }
    var resultIndexes = findResultIndex(database2, criteria);
    var targetFields = [];
    if (typeof field === "string") {
      var index = exports.FINDFIELD(database2, field);
      targetFields = utils2.rest(database2[index]);
    } else {
      targetFields = utils2.rest(database2[field]);
    }
    var targetValues = [];
    utils2.arrayEach(resultIndexes, function(value) {
      targetValues.push(targetFields[value]);
    });
    return stats.VAR.S(targetValues);
  };
  exports.DVARP = function(database2, field, criteria) {
    if (isNaN(field) && typeof field !== "string") {
      return error2.value;
    }
    var resultIndexes = findResultIndex(database2, criteria);
    var targetFields = [];
    if (typeof field === "string") {
      var index = exports.FINDFIELD(database2, field);
      targetFields = utils2.rest(database2[index]);
    } else {
      targetFields = utils2.rest(database2[field]);
    }
    var targetValues = [];
    utils2.arrayEach(resultIndexes, function(value) {
      targetValues.push(targetFields[value]);
    });
    return stats.VAR.P(targetValues);
  };
})(database);
var logical = {};
var error$1 = error$3;
var utils$1 = common;
var information = information$1;
logical.AND = function() {
  var args = utils$1.flatten(arguments);
  var result = true;
  for (var i = 0; i < args.length; i++) {
    if (!args[i]) {
      result = false;
    }
  }
  return result;
};
logical.CHOOSE = function() {
  if (arguments.length < 2) {
    return error$1.na;
  }
  var index = arguments[0];
  if (index < 1 || index > 254) {
    return error$1.value;
  }
  if (arguments.length < index + 1) {
    return error$1.value;
  }
  return arguments[index];
};
logical.FALSE = function() {
  return false;
};
logical.IF = function(test, then_value, otherwise_value) {
  return test ? then_value : otherwise_value;
};
logical.IFERROR = function(value, valueIfError) {
  if (information.ISERROR(value)) {
    return valueIfError;
  }
  return value;
};
logical.IFNA = function(value, value_if_na) {
  return value === error$1.na ? value_if_na : value;
};
logical.NOT = function(logical2) {
  return !logical2;
};
logical.OR = function() {
  var args = utils$1.flatten(arguments);
  var result = false;
  for (var i = 0; i < args.length; i++) {
    if (args[i]) {
      result = true;
    }
  }
  return result;
};
logical.TRUE = function() {
  return true;
};
logical.XOR = function() {
  var args = utils$1.flatten(arguments);
  var result = 0;
  for (var i = 0; i < args.length; i++) {
    if (args[i]) {
      result++;
    }
  }
  return Math.floor(Math.abs(result)) & 1 ? true : false;
};
logical.SWITCH = function() {
  var result;
  if (arguments.length > 0) {
    var targetValue = arguments[0];
    var argc = arguments.length - 1;
    var switchCount = Math.floor(argc / 2);
    var switchSatisfied = false;
    var hasDefaultClause = argc % 2 !== 0;
    var defaultClause = argc % 2 === 0 ? null : arguments[arguments.length - 1];
    if (switchCount) {
      for (var index = 0; index < switchCount; index++) {
        if (targetValue === arguments[index * 2 + 1]) {
          result = arguments[index * 2 + 2];
          switchSatisfied = true;
          break;
        }
      }
    }
    if (!switchSatisfied) {
      result = hasDefaultClause ? defaultClause : error$1.na;
    }
  } else {
    result = error$1.value;
  }
  return result;
};
var financial = {};
(function(exports) {
  var error2 = error$3;
  var dateTime2 = dateTime$1;
  var utils2 = common;
  function validDate(d) {
    return d && d.getTime && !isNaN(d.getTime());
  }
  function ensureDate(d) {
    return d instanceof Date ? d : new Date(d);
  }
  exports.ACCRINT = function(issue, first, settlement, rate, par, frequency, basis) {
    issue = ensureDate(issue);
    first = ensureDate(first);
    settlement = ensureDate(settlement);
    if (!validDate(issue) || !validDate(first) || !validDate(settlement)) {
      return error2.value;
    }
    if (rate <= 0 || par <= 0) {
      return error2.num;
    }
    if ([1, 2, 4].indexOf(frequency) === -1) {
      return error2.num;
    }
    if ([0, 1, 2, 3, 4].indexOf(basis) === -1) {
      return error2.num;
    }
    if (settlement <= issue) {
      return error2.num;
    }
    par = par || 0;
    basis = basis || 0;
    return par * rate * dateTime2.YEARFRAC(issue, settlement, basis);
  };
  exports.ACCRINTM = function() {
    throw new Error("ACCRINTM is not implemented");
  };
  exports.AMORDEGRC = function() {
    throw new Error("AMORDEGRC is not implemented");
  };
  exports.AMORLINC = function() {
    throw new Error("AMORLINC is not implemented");
  };
  exports.COUPDAYBS = function() {
    throw new Error("COUPDAYBS is not implemented");
  };
  exports.COUPDAYS = function() {
    throw new Error("COUPDAYS is not implemented");
  };
  exports.COUPDAYSNC = function() {
    throw new Error("COUPDAYSNC is not implemented");
  };
  exports.COUPNCD = function() {
    throw new Error("COUPNCD is not implemented");
  };
  exports.COUPNUM = function() {
    throw new Error("COUPNUM is not implemented");
  };
  exports.COUPPCD = function() {
    throw new Error("COUPPCD is not implemented");
  };
  exports.CUMIPMT = function(rate, periods, value, start, end, type) {
    rate = utils2.parseNumber(rate);
    periods = utils2.parseNumber(periods);
    value = utils2.parseNumber(value);
    if (utils2.anyIsError(rate, periods, value)) {
      return error2.value;
    }
    if (rate <= 0 || periods <= 0 || value <= 0) {
      return error2.num;
    }
    if (start < 1 || end < 1 || start > end) {
      return error2.num;
    }
    if (type !== 0 && type !== 1) {
      return error2.num;
    }
    var payment = exports.PMT(rate, periods, value, 0, type);
    var interest = 0;
    if (start === 1) {
      if (type === 0) {
        interest = -value;
        start++;
      }
    }
    for (var i = start; i <= end; i++) {
      if (type === 1) {
        interest += exports.FV(rate, i - 2, payment, value, 1) - payment;
      } else {
        interest += exports.FV(rate, i - 1, payment, value, 0);
      }
    }
    interest *= rate;
    return interest;
  };
  exports.CUMPRINC = function(rate, periods, value, start, end, type) {
    rate = utils2.parseNumber(rate);
    periods = utils2.parseNumber(periods);
    value = utils2.parseNumber(value);
    if (utils2.anyIsError(rate, periods, value)) {
      return error2.value;
    }
    if (rate <= 0 || periods <= 0 || value <= 0) {
      return error2.num;
    }
    if (start < 1 || end < 1 || start > end) {
      return error2.num;
    }
    if (type !== 0 && type !== 1) {
      return error2.num;
    }
    var payment = exports.PMT(rate, periods, value, 0, type);
    var principal = 0;
    if (start === 1) {
      if (type === 0) {
        principal = payment + value * rate;
      } else {
        principal = payment;
      }
      start++;
    }
    for (var i = start; i <= end; i++) {
      if (type > 0) {
        principal += payment - (exports.FV(rate, i - 2, payment, value, 1) - payment) * rate;
      } else {
        principal += payment - exports.FV(rate, i - 1, payment, value, 0) * rate;
      }
    }
    return principal;
  };
  exports.DB = function(cost, salvage, life, period, month) {
    month = month === void 0 ? 12 : month;
    cost = utils2.parseNumber(cost);
    salvage = utils2.parseNumber(salvage);
    life = utils2.parseNumber(life);
    period = utils2.parseNumber(period);
    month = utils2.parseNumber(month);
    if (utils2.anyIsError(cost, salvage, life, period, month)) {
      return error2.value;
    }
    if (cost < 0 || salvage < 0 || life < 0 || period < 0) {
      return error2.num;
    }
    if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].indexOf(month) === -1) {
      return error2.num;
    }
    if (period > life) {
      return error2.num;
    }
    if (salvage >= cost) {
      return 0;
    }
    var rate = (1 - Math.pow(salvage / cost, 1 / life)).toFixed(3);
    var initial = cost * rate * month / 12;
    var total = initial;
    var current = 0;
    var ceiling = period === life ? life - 1 : period;
    for (var i = 2; i <= ceiling; i++) {
      current = (cost - total) * rate;
      total += current;
    }
    if (period === 1) {
      return initial;
    } else if (period === life) {
      return (cost - total) * rate;
    } else {
      return current;
    }
  };
  exports.DDB = function(cost, salvage, life, period, factor) {
    factor = factor === void 0 ? 2 : factor;
    cost = utils2.parseNumber(cost);
    salvage = utils2.parseNumber(salvage);
    life = utils2.parseNumber(life);
    period = utils2.parseNumber(period);
    factor = utils2.parseNumber(factor);
    if (utils2.anyIsError(cost, salvage, life, period, factor)) {
      return error2.value;
    }
    if (cost < 0 || salvage < 0 || life < 0 || period < 0 || factor <= 0) {
      return error2.num;
    }
    if (period > life) {
      return error2.num;
    }
    if (salvage >= cost) {
      return 0;
    }
    var total = 0;
    var current = 0;
    for (var i = 1; i <= period; i++) {
      current = Math.min((cost - total) * (factor / life), cost - salvage - total);
      total += current;
    }
    return current;
  };
  exports.DISC = function() {
    throw new Error("DISC is not implemented");
  };
  exports.DOLLARDE = function(dollar, fraction) {
    dollar = utils2.parseNumber(dollar);
    fraction = utils2.parseNumber(fraction);
    if (utils2.anyIsError(dollar, fraction)) {
      return error2.value;
    }
    if (fraction < 0) {
      return error2.num;
    }
    if (fraction >= 0 && fraction < 1) {
      return error2.div0;
    }
    fraction = parseInt(fraction, 10);
    var result = parseInt(dollar, 10);
    result += dollar % 1 * Math.pow(10, Math.ceil(Math.log(fraction) / Math.LN10)) / fraction;
    var power = Math.pow(10, Math.ceil(Math.log(fraction) / Math.LN2) + 1);
    result = Math.round(result * power) / power;
    return result;
  };
  exports.DOLLARFR = function(dollar, fraction) {
    dollar = utils2.parseNumber(dollar);
    fraction = utils2.parseNumber(fraction);
    if (utils2.anyIsError(dollar, fraction)) {
      return error2.value;
    }
    if (fraction < 0) {
      return error2.num;
    }
    if (fraction >= 0 && fraction < 1) {
      return error2.div0;
    }
    fraction = parseInt(fraction, 10);
    var result = parseInt(dollar, 10);
    result += dollar % 1 * Math.pow(10, -Math.ceil(Math.log(fraction) / Math.LN10)) * fraction;
    return result;
  };
  exports.DURATION = function() {
    throw new Error("DURATION is not implemented");
  };
  exports.EFFECT = function(rate, periods) {
    rate = utils2.parseNumber(rate);
    periods = utils2.parseNumber(periods);
    if (utils2.anyIsError(rate, periods)) {
      return error2.value;
    }
    if (rate <= 0 || periods < 1) {
      return error2.num;
    }
    periods = parseInt(periods, 10);
    return Math.pow(1 + rate / periods, periods) - 1;
  };
  exports.FV = function(rate, periods, payment, value, type) {
    value = value || 0;
    type = type || 0;
    rate = utils2.parseNumber(rate);
    periods = utils2.parseNumber(periods);
    payment = utils2.parseNumber(payment);
    value = utils2.parseNumber(value);
    type = utils2.parseNumber(type);
    if (utils2.anyIsError(rate, periods, payment, value, type)) {
      return error2.value;
    }
    var result;
    if (rate === 0) {
      result = value + payment * periods;
    } else {
      var term = Math.pow(1 + rate, periods);
      if (type === 1) {
        result = value * term + payment * (1 + rate) * (term - 1) / rate;
      } else {
        result = value * term + payment * (term - 1) / rate;
      }
    }
    return -result;
  };
  exports.FVSCHEDULE = function(principal, schedule) {
    principal = utils2.parseNumber(principal);
    schedule = utils2.parseNumberArray(utils2.flatten(schedule));
    if (utils2.anyIsError(principal, schedule)) {
      return error2.value;
    }
    var n2 = schedule.length;
    var future = principal;
    for (var i = 0; i < n2; i++) {
      future *= 1 + schedule[i];
    }
    return future;
  };
  exports.INTRATE = function() {
    throw new Error("INTRATE is not implemented");
  };
  exports.IPMT = function(rate, period, periods, present, future, type) {
    future = future || 0;
    type = type || 0;
    rate = utils2.parseNumber(rate);
    period = utils2.parseNumber(period);
    periods = utils2.parseNumber(periods);
    present = utils2.parseNumber(present);
    future = utils2.parseNumber(future);
    type = utils2.parseNumber(type);
    if (utils2.anyIsError(rate, period, periods, present, future, type)) {
      return error2.value;
    }
    var payment = exports.PMT(rate, periods, present, future, type);
    var interest;
    if (period === 1) {
      if (type === 1) {
        interest = 0;
      } else {
        interest = -present;
      }
    } else {
      if (type === 1) {
        interest = exports.FV(rate, period - 2, payment, present, 1) - payment;
      } else {
        interest = exports.FV(rate, period - 1, payment, present, 0);
      }
    }
    return interest * rate;
  };
  exports.IRR = function(values, guess) {
    guess = guess || 0;
    values = utils2.parseNumberArray(utils2.flatten(values));
    guess = utils2.parseNumber(guess);
    if (utils2.anyIsError(values, guess)) {
      return error2.value;
    }
    var irrResult = function(values2, dates2, rate) {
      var r2 = rate + 1;
      var result = values2[0];
      for (var i2 = 1; i2 < values2.length; i2++) {
        result += values2[i2] / Math.pow(r2, (dates2[i2] - dates2[0]) / 365);
      }
      return result;
    };
    var irrResultDeriv = function(values2, dates2, rate) {
      var r2 = rate + 1;
      var result = 0;
      for (var i2 = 1; i2 < values2.length; i2++) {
        var frac = (dates2[i2] - dates2[0]) / 365;
        result -= frac * values2[i2] / Math.pow(r2, frac + 1);
      }
      return result;
    };
    var dates = [];
    var positive = false;
    var negative = false;
    for (var i = 0; i < values.length; i++) {
      dates[i] = i === 0 ? 0 : dates[i - 1] + 365;
      if (values[i] > 0) {
        positive = true;
      }
      if (values[i] < 0) {
        negative = true;
      }
    }
    if (!positive || !negative) {
      return error2.num;
    }
    guess = guess === void 0 ? 0.1 : guess;
    var resultRate = guess;
    var epsMax = 1e-10;
    var newRate, epsRate, resultValue;
    var contLoop = true;
    do {
      resultValue = irrResult(values, dates, resultRate);
      newRate = resultRate - resultValue / irrResultDeriv(values, dates, resultRate);
      epsRate = Math.abs(newRate - resultRate);
      resultRate = newRate;
      contLoop = epsRate > epsMax && Math.abs(resultValue) > epsMax;
    } while (contLoop);
    return resultRate;
  };
  exports.ISPMT = function(rate, period, periods, value) {
    rate = utils2.parseNumber(rate);
    period = utils2.parseNumber(period);
    periods = utils2.parseNumber(periods);
    value = utils2.parseNumber(value);
    if (utils2.anyIsError(rate, period, periods, value)) {
      return error2.value;
    }
    return value * rate * (period / periods - 1);
  };
  exports.MDURATION = function() {
    throw new Error("MDURATION is not implemented");
  };
  exports.MIRR = function(values, finance_rate, reinvest_rate) {
    values = utils2.parseNumberArray(utils2.flatten(values));
    finance_rate = utils2.parseNumber(finance_rate);
    reinvest_rate = utils2.parseNumber(reinvest_rate);
    if (utils2.anyIsError(values, finance_rate, reinvest_rate)) {
      return error2.value;
    }
    var n2 = values.length;
    var payments = [];
    var incomes = [];
    for (var i = 0; i < n2; i++) {
      if (values[i] < 0) {
        payments.push(values[i]);
      } else {
        incomes.push(values[i]);
      }
    }
    var num = -exports.NPV(reinvest_rate, incomes) * Math.pow(1 + reinvest_rate, n2 - 1);
    var den = exports.NPV(finance_rate, payments) * (1 + finance_rate);
    return Math.pow(num / den, 1 / (n2 - 1)) - 1;
  };
  exports.NOMINAL = function(rate, periods) {
    rate = utils2.parseNumber(rate);
    periods = utils2.parseNumber(periods);
    if (utils2.anyIsError(rate, periods)) {
      return error2.value;
    }
    if (rate <= 0 || periods < 1) {
      return error2.num;
    }
    periods = parseInt(periods, 10);
    return (Math.pow(rate + 1, 1 / periods) - 1) * periods;
  };
  exports.NPER = function(rate, payment, present, future, type) {
    type = type === void 0 ? 0 : type;
    future = future === void 0 ? 0 : future;
    rate = utils2.parseNumber(rate);
    payment = utils2.parseNumber(payment);
    present = utils2.parseNumber(present);
    future = utils2.parseNumber(future);
    type = utils2.parseNumber(type);
    if (utils2.anyIsError(rate, payment, present, future, type)) {
      return error2.value;
    }
    var num = payment * (1 + rate * type) - future * rate;
    var den = present * rate + payment * (1 + rate * type);
    return Math.log(num / den) / Math.log(1 + rate);
  };
  exports.NPV = function() {
    var args = utils2.parseNumberArray(utils2.flatten(arguments));
    if (args instanceof Error) {
      return args;
    }
    var rate = args[0];
    var value = 0;
    for (var j = 1; j < args.length; j++) {
      value += args[j] / Math.pow(1 + rate, j);
    }
    return value;
  };
  exports.ODDFPRICE = function() {
    throw new Error("ODDFPRICE is not implemented");
  };
  exports.ODDFYIELD = function() {
    throw new Error("ODDFYIELD is not implemented");
  };
  exports.ODDLPRICE = function() {
    throw new Error("ODDLPRICE is not implemented");
  };
  exports.ODDLYIELD = function() {
    throw new Error("ODDLYIELD is not implemented");
  };
  exports.PDURATION = function(rate, present, future) {
    rate = utils2.parseNumber(rate);
    present = utils2.parseNumber(present);
    future = utils2.parseNumber(future);
    if (utils2.anyIsError(rate, present, future)) {
      return error2.value;
    }
    if (rate <= 0) {
      return error2.num;
    }
    return (Math.log(future) - Math.log(present)) / Math.log(1 + rate);
  };
  exports.PMT = function(rate, periods, present, future, type) {
    future = future || 0;
    type = type || 0;
    rate = utils2.parseNumber(rate);
    periods = utils2.parseNumber(periods);
    present = utils2.parseNumber(present);
    future = utils2.parseNumber(future);
    type = utils2.parseNumber(type);
    if (utils2.anyIsError(rate, periods, present, future, type)) {
      return error2.value;
    }
    var result;
    if (rate === 0) {
      result = (present + future) / periods;
    } else {
      var term = Math.pow(1 + rate, periods);
      if (type === 1) {
        result = (future * rate / (term - 1) + present * rate / (1 - 1 / term)) / (1 + rate);
      } else {
        result = future * rate / (term - 1) + present * rate / (1 - 1 / term);
      }
    }
    return -result;
  };
  exports.PPMT = function(rate, period, periods, present, future, type) {
    future = future || 0;
    type = type || 0;
    rate = utils2.parseNumber(rate);
    periods = utils2.parseNumber(periods);
    present = utils2.parseNumber(present);
    future = utils2.parseNumber(future);
    type = utils2.parseNumber(type);
    if (utils2.anyIsError(rate, periods, present, future, type)) {
      return error2.value;
    }
    return exports.PMT(rate, periods, present, future, type) - exports.IPMT(rate, period, periods, present, future, type);
  };
  exports.PRICE = function() {
    throw new Error("PRICE is not implemented");
  };
  exports.PRICEDISC = function() {
    throw new Error("PRICEDISC is not implemented");
  };
  exports.PRICEMAT = function() {
    throw new Error("PRICEMAT is not implemented");
  };
  exports.PV = function(rate, periods, payment, future, type) {
    future = future || 0;
    type = type || 0;
    rate = utils2.parseNumber(rate);
    periods = utils2.parseNumber(periods);
    payment = utils2.parseNumber(payment);
    future = utils2.parseNumber(future);
    type = utils2.parseNumber(type);
    if (utils2.anyIsError(rate, periods, payment, future, type)) {
      return error2.value;
    }
    if (rate === 0) {
      return -payment * periods - future;
    } else {
      return ((1 - Math.pow(1 + rate, periods)) / rate * payment * (1 + rate * type) - future) / Math.pow(1 + rate, periods);
    }
  };
  exports.RATE = function(periods, payment, present, future, type, guess) {
    guess = guess === void 0 ? 0.01 : guess;
    future = future === void 0 ? 0 : future;
    type = type === void 0 ? 0 : type;
    periods = utils2.parseNumber(periods);
    payment = utils2.parseNumber(payment);
    present = utils2.parseNumber(present);
    future = utils2.parseNumber(future);
    type = utils2.parseNumber(type);
    guess = utils2.parseNumber(guess);
    if (utils2.anyIsError(periods, payment, present, future, type, guess)) {
      return error2.value;
    }
    var epsMax = 1e-10;
    var iterMax = 50;
    var y2, y0, y1, x0, x1 = 0, f = 0, i = 0;
    var rate = guess;
    if (Math.abs(rate) < epsMax) {
      y2 = present * (1 + periods * rate) + payment * (1 + rate * type) * periods + future;
    } else {
      f = Math.exp(periods * Math.log(1 + rate));
      y2 = present * f + payment * (1 / rate + type) * (f - 1) + future;
    }
    y0 = present + payment * periods + future;
    y1 = present * f + payment * (1 / rate + type) * (f - 1) + future;
    i = x0 = 0;
    x1 = rate;
    while (Math.abs(y0 - y1) > epsMax && i < iterMax) {
      rate = (y1 * x0 - y0 * x1) / (y1 - y0);
      x0 = x1;
      x1 = rate;
      if (Math.abs(rate) < epsMax) {
        y2 = present * (1 + periods * rate) + payment * (1 + rate * type) * periods + future;
      } else {
        f = Math.exp(periods * Math.log(1 + rate));
        y2 = present * f + payment * (1 / rate + type) * (f - 1) + future;
      }
      y0 = y1;
      y1 = y2;
      ++i;
    }
    return rate;
  };
  exports.RECEIVED = function() {
    throw new Error("RECEIVED is not implemented");
  };
  exports.RRI = function(periods, present, future) {
    periods = utils2.parseNumber(periods);
    present = utils2.parseNumber(present);
    future = utils2.parseNumber(future);
    if (utils2.anyIsError(periods, present, future)) {
      return error2.value;
    }
    if (periods === 0 || present === 0) {
      return error2.num;
    }
    return Math.pow(future / present, 1 / periods) - 1;
  };
  exports.SLN = function(cost, salvage, life) {
    cost = utils2.parseNumber(cost);
    salvage = utils2.parseNumber(salvage);
    life = utils2.parseNumber(life);
    if (utils2.anyIsError(cost, salvage, life)) {
      return error2.value;
    }
    if (life === 0) {
      return error2.num;
    }
    return (cost - salvage) / life;
  };
  exports.SYD = function(cost, salvage, life, period) {
    cost = utils2.parseNumber(cost);
    salvage = utils2.parseNumber(salvage);
    life = utils2.parseNumber(life);
    period = utils2.parseNumber(period);
    if (utils2.anyIsError(cost, salvage, life, period)) {
      return error2.value;
    }
    if (life === 0) {
      return error2.num;
    }
    if (period < 1 || period > life) {
      return error2.num;
    }
    period = parseInt(period, 10);
    return (cost - salvage) * (life - period + 1) * 2 / (life * (life + 1));
  };
  exports.TBILLEQ = function(settlement, maturity, discount) {
    settlement = utils2.parseDate(settlement);
    maturity = utils2.parseDate(maturity);
    discount = utils2.parseNumber(discount);
    if (utils2.anyIsError(settlement, maturity, discount)) {
      return error2.value;
    }
    if (discount <= 0) {
      return error2.num;
    }
    if (settlement > maturity) {
      return error2.num;
    }
    if (maturity - settlement > 365 * 24 * 60 * 60 * 1e3) {
      return error2.num;
    }
    return 365 * discount / (360 - discount * dateTime2.DAYS360(settlement, maturity, false));
  };
  exports.TBILLPRICE = function(settlement, maturity, discount) {
    settlement = utils2.parseDate(settlement);
    maturity = utils2.parseDate(maturity);
    discount = utils2.parseNumber(discount);
    if (utils2.anyIsError(settlement, maturity, discount)) {
      return error2.value;
    }
    if (discount <= 0) {
      return error2.num;
    }
    if (settlement > maturity) {
      return error2.num;
    }
    if (maturity - settlement > 365 * 24 * 60 * 60 * 1e3) {
      return error2.num;
    }
    return 100 * (1 - discount * dateTime2.DAYS360(settlement, maturity, false) / 360);
  };
  exports.TBILLYIELD = function(settlement, maturity, price) {
    settlement = utils2.parseDate(settlement);
    maturity = utils2.parseDate(maturity);
    price = utils2.parseNumber(price);
    if (utils2.anyIsError(settlement, maturity, price)) {
      return error2.value;
    }
    if (price <= 0) {
      return error2.num;
    }
    if (settlement > maturity) {
      return error2.num;
    }
    if (maturity - settlement > 365 * 24 * 60 * 60 * 1e3) {
      return error2.num;
    }
    return (100 - price) * 360 / (price * dateTime2.DAYS360(settlement, maturity, false));
  };
  exports.VDB = function() {
    throw new Error("VDB is not implemented");
  };
  exports.XNPV = function(rate, values, dates) {
    rate = utils2.parseNumber(rate);
    values = utils2.parseNumberArray(utils2.flatten(values));
    dates = utils2.parseDateArray(utils2.flatten(dates));
    if (utils2.anyIsError(rate, values, dates)) {
      return error2.value;
    }
    var result = 0;
    for (var i = 0; i < values.length; i++) {
      result += values[i] / Math.pow(1 + rate, dateTime2.DAYS(dates[i], dates[0]) / 365);
    }
    return result;
  };
  exports.YIELD = function() {
    throw new Error("YIELD is not implemented");
  };
  exports.YIELDDISC = function() {
    throw new Error("YIELDDISC is not implemented");
  };
  exports.YIELDMAT = function() {
    throw new Error("YIELDMAT is not implemented");
  };
})(financial);
var lookupReference = {};
var error = error$3;
var utils = common;
lookupReference.MATCH = function(lookupValue, lookupArray, matchType) {
  if (!lookupValue && !lookupArray) {
    return error.na;
  }
  if (arguments.length === 2) {
    matchType = 1;
  }
  if (!(lookupArray instanceof Array)) {
    return error.na;
  }
  if (matchType !== -1 && matchType !== 0 && matchType !== 1) {
    return error.na;
  }
  var index;
  var indexValue;
  for (var idx = 0; idx < lookupArray.length; idx++) {
    if (matchType === 1) {
      if (lookupArray[idx] === lookupValue) {
        return idx + 1;
      } else if (lookupArray[idx] < lookupValue) {
        if (!indexValue) {
          index = idx + 1;
          indexValue = lookupArray[idx];
        } else if (lookupArray[idx] > indexValue) {
          index = idx + 1;
          indexValue = lookupArray[idx];
        }
      }
    } else if (matchType === 0) {
      if (typeof lookupValue === "string") {
        lookupValue = lookupValue.replace(/\?/g, ".");
        if (lookupArray[idx].toLowerCase().match(lookupValue.toLowerCase())) {
          return idx + 1;
        }
      } else {
        if (lookupArray[idx] === lookupValue) {
          return idx + 1;
        }
      }
    } else if (matchType === -1) {
      if (lookupArray[idx] === lookupValue) {
        return idx + 1;
      } else if (lookupArray[idx] > lookupValue) {
        if (!indexValue) {
          index = idx + 1;
          indexValue = lookupArray[idx];
        } else if (lookupArray[idx] < indexValue) {
          index = idx + 1;
          indexValue = lookupArray[idx];
        }
      }
    }
  }
  return index ? index : error.na;
};
lookupReference.VLOOKUP = function(needle, table, index, rangeLookup) {
  if (!needle || !table || !index) {
    return error.na;
  }
  rangeLookup = rangeLookup || false;
  for (var i = 0; i < table.length; i++) {
    var row = table[i];
    if (!rangeLookup && row[0] === needle || (row[0] === needle || rangeLookup && typeof row[0] === "string" && row[0].toLowerCase().indexOf(needle.toLowerCase()) !== -1)) {
      return index < row.length + 1 ? row[index - 1] : error.ref;
    }
  }
  return error.na;
};
lookupReference.HLOOKUP = function(needle, table, index, rangeLookup) {
  if (!needle || !table || !index) {
    return error.na;
  }
  rangeLookup = rangeLookup || false;
  var transposedTable = utils.transpose(table);
  for (var i = 0; i < transposedTable.length; i++) {
    var row = transposedTable[i];
    if (!rangeLookup && row[0] === needle || (row[0] === needle || rangeLookup && typeof row[0] === "string" && row[0].toLowerCase().indexOf(needle.toLowerCase()) !== -1)) {
      return index < row.length + 1 ? row[index - 1] : error.ref;
    }
  }
  return error.na;
};
(function(exports) {
  var categories = [
    compatibility,
    database,
    engineering$1,
    logical,
    mathTrig$1,
    text,
    dateTime$1,
    financial,
    information$1,
    lookupReference,
    statistical$1,
    miscellaneous
  ];
  for (var c in categories) {
    var category = categories[c];
    for (var f in category) {
      exports[f] = exports[f] || category[f];
    }
  }
})(formulajs);
var SUPPORTED_FORMULAS = ["ABS", "ACCRINT", "ACOS", "ACOSH", "ACOT", "ACOTH", "ADD", "AGGREGATE", "AND", "ARABIC", "ARGS2ARRAY", "ASIN", "ASINH", "ATAN", "ATAN2", "ATANH", "AVEDEV", "AVERAGE", "AVERAGEA", "AVERAGEIF", "AVERAGEIFS", "BASE", "BESSELI", "BESSELJ", "BESSELK", "BESSELY", "BETA.DIST", "BETA.INV", "BETADIST", "BETAINV", "BIN2DEC", "BIN2HEX", "BIN2OCT", "BINOM.DIST", "BINOM.DIST.RANGE", "BINOM.INV", "BINOMDIST", "BITAND", "BITLSHIFT", "BITOR", "BITRSHIFT", "BITXOR", "CEILING", "CEILINGMATH", "CEILINGPRECISE", "CHAR", "CHISQ.DIST", "CHISQ.DIST.RT", "CHISQ.INV", "CHISQ.INV.RT", "CHOOSE", "CHOOSE", "CLEAN", "CODE", "COLUMN", "COLUMNS", "COMBIN", "COMBINA", "COMPLEX", "CONCATENATE", "CONFIDENCE", "CONFIDENCE.NORM", "CONFIDENCE.T", "CONVERT", "CORREL", "COS", "COSH", "COT", "COTH", "COUNT", "COUNTA", "COUNTBLANK", "COUNTIF", "COUNTIFS", "COUNTIN", "COUNTUNIQUE", "COVARIANCE.P", "COVARIANCE.S", "CSC", "CSCH", "CUMIPMT", "CUMPRINC", "DATE", "DATEVALUE", "DAY", "DAYS", "DAYS360", "DB", "DDB", "DEC2BIN", "DEC2HEX", "DEC2OCT", "DECIMAL", "DEGREES", "DELTA", "DEVSQ", "DIVIDE", "DOLLARDE", "DOLLARFR", "E", "EDATE", "EFFECT", "EOMONTH", "EQ", "ERF", "ERFC", "EVEN", "EXACT", "EXP", "EXPON.DIST", "EXPONDIST", "F.DIST", "F.DIST.RT", "F.INV", "F.INV.RT", "FACT", "FACTDOUBLE", "FALSE", "FDIST", "FDISTRT", "FIND", "FINV", "FINVRT", "FISHER", "FISHERINV", "FLATTEN", "FLOOR", "FORECAST", "FREQUENCY", "FV", "FVSCHEDULE", "GAMMA", "GAMMA.DIST", "GAMMA.INV", "GAMMADIST", "GAMMAINV", "GAMMALN", "GAMMALN.PRECISE", "GAUSS", "GCD", "GEOMEAN", "GESTEP", "GROWTH", "GTE", "HARMEAN", "HEX2BIN", "HEX2DEC", "HEX2OCT", "HOUR", "HTML2TEXT", "HYPGEOM.DIST", "HYPGEOMDIST", "IF", "IMABS", "IMAGINARY", "IMARGUMENT", "IMCONJUGATE", "IMCOS", "IMCOSH", "IMCOT", "IMCSC", "IMCSCH", "IMDIV", "IMEXP", "IMLN", "IMLOG10", "IMLOG2", "IMPOWER", "IMPRODUCT", "IMREAL", "IMSEC", "IMSECH", "IMSIN", "IMSINH", "IMSQRT", "IMSUB", "IMSUM", "IMTAN", "INT", "INTERCEPT", "INTERVAL", "IPMT", "IRR", "ISBINARY", "ISBLANK", "ISEVEN", "ISLOGICAL", "ISNONTEXT", "ISNUMBER", "ISODD", "ISODD", "ISOWEEKNUM", "ISPMT", "ISTEXT", "JOIN", "KURT", "LARGE", "LCM", "LEFT", "LEN", "LINEST", "LN", "LOG", "LOG10", "LOGEST", "LOGNORM.DIST", "LOGNORM.INV", "LOGNORMDIST", "LOGNORMINV", "LOWER", "LT", "LTE", "MATCH", "MAX", "MAXA", "MEDIAN", "MID", "MIN", "MINA", "MINUS", "MINUTE", "MIRR", "MOD", "MODE.MULT", "MODE.SNGL", "MODEMULT", "MODESNGL", "MONTH", "MROUND", "MULTINOMIAL", "MULTIPLY", "NE", "NEGBINOM.DIST", "NEGBINOMDIST", "NETWORKDAYS", "NOMINAL", "NORM.DIST", "NORM.INV", "NORM.S.DIST", "NORM.S.INV", "NORMDIST", "NORMINV", "NORMSDIST", "NORMSINV", "NOT", "NOW", "NPER", "NPV", "NUMBERS", "OCT2BIN", "OCT2DEC", "OCT2HEX", "ODD", "OR", "PDURATION", "PEARSON", "PERCENTILEEXC", "PERCENTILEINC", "PERCENTRANKEXC", "PERCENTRANKINC", "PERMUT", "PERMUTATIONA", "PHI", "PI", "PMT", "POISSON.DIST", "POISSONDIST", "POW", "POWER", "PPMT", "PROB", "PRODUCT", "PROPER", "PV", "QUARTILE.EXC", "QUARTILE.INC", "QUARTILEEXC", "QUARTILEINC", "QUOTIENT", "RADIANS", "RAND", "RANDBETWEEN", "RANK.AVG", "RANK.EQ", "RANKAVG", "RANKEQ", "RATE", "REFERENCE", "REGEXEXTRACT", "REGEXMATCH", "REGEXREPLACE", "REPLACE", "REPT", "RIGHT", "ROMAN", "ROUND", "ROUNDDOWN", "ROUNDUP", "ROW", "ROWS", "RRI", "RSQ", "SEARCH", "SEC", "SECH", "SECOND", "SERIESSUM", "SIGN", "SIN", "SINH", "SKEW", "SKEW.P", "SKEWP", "SLN", "SLOPE", "SMALL", "SPLIT", "SPLIT", "SQRT", "SQRTPI", "STANDARDIZE", "STDEV.P", "STDEV.S", "STDEVA", "STDEVP", "STDEVPA", "STDEVS", "STEYX", "SUBSTITUTE", "SUBTOTAL", "SUM", "SUMIF", "SUMIFS", "SUMPRODUCT", "SUMSQ", "SUMX2MY2", "SUMX2PY2", "SUMXMY2", "SWITCH", "SYD", "T", "T.DIST", "T.DIST.2T", "T.DIST.RT", "T.INV", "T.INV.2T", "TAN", "TANH", "TBILLEQ", "TBILLPRICE", "TBILLYIELD", "TDIST", "TDIST2T", "TDISTRT", "TIME", "TIMEVALUE", "TINV", "TINV2T", "TODAY", "TRANSPOSE", "TREND", "TRIM", "TRIMMEAN", "TRUE", "TRUNC", "UNICHAR", "UNICODE", "UNIQUE", "UPPER", "VAR.P", "VAR.S", "VARA", "VARP", "VARPA", "VARS", "WEEKDAY", "WEEKNUM", "WEIBULL.DIST", "WEIBULLDIST", "WORKDAY", "XIRR", "XNPV", "XOR", "YEAR", "YEARFRAC"];
var SYMBOL$8 = SUPPORTED_FORMULAS;
function func$8(symbol) {
  return function __formulaFunction() {
    symbol = symbol.toUpperCase();
    var symbolParts = symbol.split(".");
    var foundFormula = false;
    var result;
    if (symbolParts.length === 1) {
      if (formulajs[symbolParts[0]]) {
        foundFormula = true;
        result = formulajs[symbolParts[0]].apply(formulajs, arguments);
      }
    } else {
      var length = symbolParts.length;
      var index = 0;
      var nestedFormula = formulajs;
      while (index < length) {
        nestedFormula = nestedFormula[symbolParts[index]];
        index++;
        if (!nestedFormula) {
          nestedFormula = null;
          break;
        }
      }
      if (nestedFormula) {
        foundFormula = true;
        result = nestedFormula.apply(void 0, arguments);
      }
    }
    if (!foundFormula) {
      throw Error(ERROR_NAME);
    }
    return result;
  };
}
func$8.isFactory = true;
func$8.SYMBOL = SYMBOL$8;
var SYMBOL$7 = ">";
function func$7(exp1, exp2) {
  return exp1 > exp2;
}
func$7.SYMBOL = SYMBOL$7;
var SYMBOL$6 = ">=";
function func$6(exp1, exp2) {
  return exp1 >= exp2;
}
func$6.SYMBOL = SYMBOL$6;
var SYMBOL$5 = "<";
function func$5(exp1, exp2) {
  return exp1 < exp2;
}
func$5.SYMBOL = SYMBOL$5;
var SYMBOL$4 = "<=";
function func$4(exp1, exp2) {
  return exp1 <= exp2;
}
func$4.SYMBOL = SYMBOL$4;
var SYMBOL$3 = "-";
function func$3(first) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }
  var result = rest.reduce(function(acc, value) {
    return acc - toNumber(value);
  }, toNumber(first));
  if (isNaN(result)) {
    throw Error(ERROR_VALUE);
  }
  return result;
}
func$3.SYMBOL = SYMBOL$3;
var SYMBOL$2 = "*";
function func$2(first) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }
  var result = rest.reduce(function(acc, value) {
    return acc * toNumber(value);
  }, toNumber(first));
  if (isNaN(result)) {
    throw Error(ERROR_VALUE);
  }
  return result;
}
func$2.SYMBOL = SYMBOL$2;
var SYMBOL$1 = "<>";
function func$1(exp1, exp2) {
  return exp1 !== exp2;
}
func$1.SYMBOL = SYMBOL$1;
var SYMBOL = "^";
function func(exp1, exp2) {
  var result = Math.pow(toNumber(exp1), toNumber(exp2));
  if (isNaN(result)) {
    throw Error(ERROR_VALUE);
  }
  return result;
}
func.SYMBOL = SYMBOL;
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$2(o3, minLen) {
  if (!o3)
    return;
  if (typeof o3 === "string")
    return _arrayLikeToArray$2(o3, minLen);
  var n2 = Object.prototype.toString.call(o3).slice(8, -1);
  if (n2 === "Object" && o3.constructor)
    n2 = o3.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o3);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$2(o3, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$2(arr);
}
function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var availableOperators = Object.create(null);
function evaluateByOperator(operator) {
  var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  operator = operator.toUpperCase();
  if (!availableOperators[operator]) {
    throw Error(ERROR_NAME);
  }
  return availableOperators[operator].apply(availableOperators, _toConsumableArray(params));
}
function registerOperation(symbol, func2) {
  if (!Array.isArray(symbol)) {
    symbol = [symbol.toUpperCase()];
  }
  symbol.forEach(function(s) {
    if (func2.isFactory) {
      availableOperators[s] = func2(s);
    } else {
      availableOperators[s] = func2;
    }
  });
}
registerOperation(func$c.SYMBOL, func$c);
registerOperation(func$b.SYMBOL, func$b);
registerOperation(func$a.SYMBOL, func$a);
registerOperation(func$9.SYMBOL, func$9);
registerOperation(func.SYMBOL, func);
registerOperation(func$8.SYMBOL, func$8);
registerOperation(func$7.SYMBOL, func$7);
registerOperation(func$6.SYMBOL, func$6);
registerOperation(func$5.SYMBOL, func$5);
registerOperation(func$4.SYMBOL, func$4);
registerOperation(func$2.SYMBOL, func$2);
registerOperation(func$1.SYMBOL, func$1);
registerOperation(func$3.SYMBOL, func$3);
var o = function o2(k, v2, _o, l2) {
  for (_o = _o || {}, l2 = k.length; l2--; _o[k[l2]] = v2) {
  }
  return _o;
}, $V0 = [1, 5], $V1 = [1, 8], $V2 = [1, 6], $V3 = [1, 7], $V4 = [1, 9], $V5 = [1, 14], $V6 = [1, 15], $V7 = [1, 16], $V8 = [1, 12], $V9 = [1, 13], $Va = [1, 17], $Vb = [1, 19], $Vc = [1, 20], $Vd = [1, 21], $Ve = [1, 22], $Vf = [1, 23], $Vg = [1, 24], $Vh = [1, 25], $Vi = [1, 26], $Vj = [1, 27], $Vk = [1, 28], $Vl = [5, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 29, 30], $Vm = [5, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 29, 30, 32], $Vn = [5, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 29, 30, 34], $Vo = [5, 10, 11, 13, 14, 15, 16, 17, 29, 30], $Vp = [5, 10, 13, 14, 15, 16, 29, 30], $Vq = [5, 10, 11, 13, 14, 15, 16, 17, 18, 19, 29, 30], $Vr = [13, 29, 30];
var parser = {
  trace: function trace() {
  },
  yy: {},
  symbols_: {
    "error": 2,
    "expressions": 3,
    "expression": 4,
    "EOF": 5,
    "variableSequence": 6,
    "number": 7,
    "STRING": 8,
    "&": 9,
    "=": 10,
    "+": 11,
    "(": 12,
    ")": 13,
    "<": 14,
    ">": 15,
    "NOT": 16,
    "-": 17,
    "*": 18,
    "/": 19,
    "^": 20,
    "FUNCTION": 21,
    "expseq": 22,
    "cell": 23,
    "ABSOLUTE_CELL": 24,
    "RELATIVE_CELL": 25,
    "MIXED_CELL": 26,
    ":": 27,
    "ARRAY": 28,
    ";": 29,
    ",": 30,
    "VARIABLE": 31,
    "DECIMAL": 32,
    "NUMBER": 33,
    "%": 34,
    "ERROR": 35,
    "$accept": 0,
    "$end": 1
  },
  terminals_: {
    5: "EOF",
    8: "STRING",
    9: "&",
    10: "=",
    11: "+",
    12: "(",
    13: ")",
    14: "<",
    15: ">",
    16: "NOT",
    17: "-",
    18: "*",
    19: "/",
    20: "^",
    21: "FUNCTION",
    24: "ABSOLUTE_CELL",
    25: "RELATIVE_CELL",
    26: "MIXED_CELL",
    27: ":",
    28: "ARRAY",
    29: ";",
    30: ",",
    31: "VARIABLE",
    32: "DECIMAL",
    33: "NUMBER",
    34: "%",
    35: "ERROR"
  },
  productions_: [0, [3, 2], [4, 1], [4, 1], [4, 1], [4, 3], [4, 3], [4, 3], [4, 3], [4, 4], [4, 4], [4, 4], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 2], [4, 2], [4, 3], [4, 4], [4, 1], [4, 1], [4, 2], [23, 1], [23, 1], [23, 1], [23, 3], [23, 3], [23, 3], [23, 3], [23, 3], [23, 3], [23, 3], [23, 3], [23, 3], [22, 1], [22, 1], [22, 3], [22, 3], [6, 1], [6, 3], [7, 1], [7, 3], [7, 2], [2, 1]],
  performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
    var $0 = $$.length - 1;
    switch (yystate) {
      case 1:
        return $$[$0 - 1];
      case 2:
        this.$ = yy.callVariable($$[$0][0]);
        break;
      case 3:
        this.$ = yy.toNumber($$[$0]);
        break;
      case 4:
        this.$ = yy.trimEdges($$[$0]);
        break;
      case 5:
        this.$ = yy.evaluateByOperator("&", [$$[$0 - 2], $$[$0]]);
        break;
      case 6:
        this.$ = yy.evaluateByOperator("=", [$$[$0 - 2], $$[$0]]);
        break;
      case 7:
        this.$ = yy.evaluateByOperator("+", [$$[$0 - 2], $$[$0]]);
        break;
      case 8:
        this.$ = $$[$0 - 1];
        break;
      case 9:
        this.$ = yy.evaluateByOperator("<=", [$$[$0 - 3], $$[$0]]);
        break;
      case 10:
        this.$ = yy.evaluateByOperator(">=", [$$[$0 - 3], $$[$0]]);
        break;
      case 11:
        this.$ = yy.evaluateByOperator("<>", [$$[$0 - 3], $$[$0]]);
        break;
      case 12:
        this.$ = yy.evaluateByOperator("NOT", [$$[$0 - 2], $$[$0]]);
        break;
      case 13:
        this.$ = yy.evaluateByOperator(">", [$$[$0 - 2], $$[$0]]);
        break;
      case 14:
        this.$ = yy.evaluateByOperator("<", [$$[$0 - 2], $$[$0]]);
        break;
      case 15:
        this.$ = yy.evaluateByOperator("-", [$$[$0 - 2], $$[$0]]);
        break;
      case 16:
        this.$ = yy.evaluateByOperator("*", [$$[$0 - 2], $$[$0]]);
        break;
      case 17:
        this.$ = yy.evaluateByOperator("/", [$$[$0 - 2], $$[$0]]);
        break;
      case 18:
        this.$ = yy.evaluateByOperator("^", [$$[$0 - 2], $$[$0]]);
        break;
      case 19:
        var n1 = yy.invertNumber($$[$0]);
        this.$ = n1;
        if (isNaN(this.$)) {
          this.$ = 0;
        }
        break;
      case 20:
        var n1 = yy.toNumber($$[$0]);
        this.$ = n1;
        if (isNaN(this.$)) {
          this.$ = 0;
        }
        break;
      case 21:
        this.$ = yy.callFunction($$[$0 - 2]);
        break;
      case 22:
        this.$ = yy.callFunction($$[$0 - 3], $$[$0 - 1]);
        break;
      case 26:
      case 27:
      case 28:
        this.$ = yy.cellValue($$[$0]);
        break;
      case 29:
      case 30:
      case 31:
      case 32:
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
        this.$ = yy.rangeValue($$[$0 - 2], $$[$0]);
        break;
      case 38:
      case 42:
        this.$ = [$$[$0]];
        break;
      case 39:
        this.$ = yy.trimEdges(yytext).split(",");
        break;
      case 40:
      case 41:
        $$[$0 - 2].push($$[$0]);
        this.$ = $$[$0 - 2];
        break;
      case 43:
        this.$ = Array.isArray($$[$0 - 2]) ? $$[$0 - 2] : [$$[$0 - 2]];
        this.$.push($$[$0]);
        break;
      case 44:
        this.$ = $$[$0];
        break;
      case 45:
        this.$ = ($$[$0 - 2] + "." + $$[$0]) * 1;
        break;
      case 46:
        this.$ = $$[$0 - 1] * 0.01;
        break;
      case 47:
        this.$ = yy.throwError($$[$0]);
        break;
    }
  },
  table: [{
    2: 11,
    3: 1,
    4: 2,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    1: [3]
  }, {
    5: [1, 18],
    9: $Vb,
    10: $Vc,
    11: $Vd,
    14: $Ve,
    15: $Vf,
    16: $Vg,
    17: $Vh,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }, o($Vl, [2, 2], {
    32: [1, 29]
  }), o($Vl, [2, 3], {
    34: [1, 30]
  }), o($Vl, [2, 4]), {
    2: 11,
    4: 31,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 32,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 33,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    12: [1, 34]
  }, o($Vl, [2, 23]), o($Vl, [2, 24], {
    2: 35,
    35: $Va
  }), o($Vm, [2, 42]), o($Vn, [2, 44], {
    32: [1, 36]
  }), o($Vl, [2, 26], {
    27: [1, 37]
  }), o($Vl, [2, 27], {
    27: [1, 38]
  }), o($Vl, [2, 28], {
    27: [1, 39]
  }), o([5, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 29, 30, 35], [2, 47]), {
    1: [2, 1]
  }, {
    2: 11,
    4: 40,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 41,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 42,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 45,
    6: 3,
    7: 4,
    8: $V0,
    10: [1, 43],
    11: $V1,
    12: $V2,
    15: [1, 44],
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 47,
    6: 3,
    7: 4,
    8: $V0,
    10: [1, 46],
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 48,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 49,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 50,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 51,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 52,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    31: [1, 53]
  }, o($Vn, [2, 46]), {
    9: $Vb,
    10: $Vc,
    11: $Vd,
    13: [1, 54],
    14: $Ve,
    15: $Vf,
    16: $Vg,
    17: $Vh,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }, o($Vo, [2, 19], {
    9: $Vb,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }), o($Vo, [2, 20], {
    9: $Vb,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }), {
    2: 11,
    4: 57,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    13: [1, 55],
    17: $V3,
    21: $V4,
    22: 56,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    28: [1, 58],
    31: $V8,
    33: $V9,
    35: $Va
  }, o($Vl, [2, 25]), {
    33: [1, 59]
  }, {
    24: [1, 60],
    25: [1, 61],
    26: [1, 62]
  }, {
    24: [1, 63],
    25: [1, 64],
    26: [1, 65]
  }, {
    24: [1, 66],
    25: [1, 67],
    26: [1, 68]
  }, o($Vl, [2, 5]), o([5, 10, 13, 29, 30], [2, 6], {
    9: $Vb,
    11: $Vd,
    14: $Ve,
    15: $Vf,
    16: $Vg,
    17: $Vh,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }), o($Vo, [2, 7], {
    9: $Vb,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }), {
    2: 11,
    4: 69,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 70,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, o($Vp, [2, 14], {
    9: $Vb,
    11: $Vd,
    17: $Vh,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }), {
    2: 11,
    4: 71,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, o($Vp, [2, 13], {
    9: $Vb,
    11: $Vd,
    17: $Vh,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }), o([5, 10, 13, 16, 29, 30], [2, 12], {
    9: $Vb,
    11: $Vd,
    14: $Ve,
    15: $Vf,
    17: $Vh,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }), o($Vo, [2, 15], {
    9: $Vb,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }), o($Vq, [2, 16], {
    9: $Vb,
    20: $Vk
  }), o($Vq, [2, 17], {
    9: $Vb,
    20: $Vk
  }), o([5, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 29, 30], [2, 18], {
    9: $Vb
  }), o($Vm, [2, 43]), o($Vl, [2, 8]), o($Vl, [2, 21]), {
    13: [1, 72],
    29: [1, 73],
    30: [1, 74]
  }, o($Vr, [2, 38], {
    9: $Vb,
    10: $Vc,
    11: $Vd,
    14: $Ve,
    15: $Vf,
    16: $Vg,
    17: $Vh,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }), o($Vr, [2, 39]), o($Vn, [2, 45]), o($Vl, [2, 29]), o($Vl, [2, 30]), o($Vl, [2, 31]), o($Vl, [2, 32]), o($Vl, [2, 33]), o($Vl, [2, 34]), o($Vl, [2, 35]), o($Vl, [2, 36]), o($Vl, [2, 37]), o($Vp, [2, 9], {
    9: $Vb,
    11: $Vd,
    17: $Vh,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }), o($Vp, [2, 11], {
    9: $Vb,
    11: $Vd,
    17: $Vh,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }), o($Vp, [2, 10], {
    9: $Vb,
    11: $Vd,
    17: $Vh,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }), o($Vl, [2, 22]), {
    2: 11,
    4: 75,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, {
    2: 11,
    4: 76,
    6: 3,
    7: 4,
    8: $V0,
    11: $V1,
    12: $V2,
    17: $V3,
    21: $V4,
    23: 10,
    24: $V5,
    25: $V6,
    26: $V7,
    31: $V8,
    33: $V9,
    35: $Va
  }, o($Vr, [2, 40], {
    9: $Vb,
    10: $Vc,
    11: $Vd,
    14: $Ve,
    15: $Vf,
    16: $Vg,
    17: $Vh,
    18: $Vi,
    19: $Vj,
    20: $Vk
  }), o($Vr, [2, 41], {
    9: $Vb,
    10: $Vc,
    11: $Vd,
    14: $Ve,
    15: $Vf,
    16: $Vg,
    17: $Vh,
    18: $Vi,
    19: $Vj,
    20: $Vk
  })],
  defaultActions: {
    18: [2, 1]
  },
  parseError: function parseError(str, hash) {
    if (hash.recoverable) {
      this.trace(str);
    } else {
      var error2 = new Error(str);
      error2.hash = hash;
      throw error2;
    }
  },
  parse: function parse(input) {
    var self2 = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer2 = Object.create(this.lexer);
    var sharedState = {
      yy: {}
    };
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }
    lexer2.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer2;
    sharedState.yy.parser = this;
    if (typeof lexer2.yylloc == "undefined") {
      lexer2.yylloc = {};
    }
    var yyloc = lexer2.yylloc;
    lstack.push(yyloc);
    var ranges = lexer2.options && lexer2.options.ranges;
    if (typeof sharedState.yy.parseError === "function") {
      this.parseError = sharedState.yy.parseError;
    } else {
      this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n2) {
      stack.length = stack.length - 2 * n2;
      vstack.length = vstack.length - n2;
      lstack.length = lstack.length - n2;
    }
    var lex = function lex2() {
      var token;
      token = lexer2.lex() || EOF;
      if (typeof token !== "number") {
        token = self2.symbols_[token] || token;
      }
      return token;
    };
    var symbol, preErrorSymbol, state, action, r2, yyval = {}, p2, len, newState, expected;
    while (true) {
      state = stack[stack.length - 1];
      if (this.defaultActions[state]) {
        action = this.defaultActions[state];
      } else {
        if (symbol === null || typeof symbol == "undefined") {
          symbol = lex();
        }
        action = table[state] && table[state][symbol];
      }
      if (typeof action === "undefined" || !action.length || !action[0]) {
        var locateNearestErrorRecoveryRule = function locateNearestErrorRecoveryRule2(state2) {
          var stack_probe = stack.length - 1;
          var depth = 0;
          for (; ; ) {
            if (TERROR.toString() in table[state2]) {
              return depth;
            }
            if (state2 === 0 || stack_probe < 2) {
              return false;
            }
            stack_probe -= 2;
            state2 = stack[stack_probe];
            ++depth;
          }
        };
        var error_rule_depth;
        var errStr = "";
        if (!recovering) {
          error_rule_depth = locateNearestErrorRecoveryRule(state);
          expected = [];
          for (p2 in table[state]) {
            if (this.terminals_[p2] && p2 > TERROR) {
              expected.push("'" + this.terminals_[p2] + "'");
            }
          }
          if (lexer2.showPosition) {
            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + lexer2.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
          } else {
            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == EOF ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
          }
          this.parseError(errStr, {
            text: lexer2.match,
            token: this.terminals_[symbol] || symbol,
            line: lexer2.yylineno,
            loc: yyloc,
            expected,
            recoverable: error_rule_depth !== false
          });
        } else if (preErrorSymbol !== EOF) {
          error_rule_depth = locateNearestErrorRecoveryRule(state);
        }
        if (recovering == 3) {
          if (symbol === EOF || preErrorSymbol === EOF) {
            throw new Error(errStr || "Parsing halted while starting to recover from another error.");
          }
          yyleng = lexer2.yyleng;
          yytext = lexer2.yytext;
          yylineno = lexer2.yylineno;
          yyloc = lexer2.yylloc;
          symbol = lex();
        }
        if (error_rule_depth === false) {
          throw new Error(errStr || "Parsing halted. No suitable error recovery rule available.");
        }
        popStack(error_rule_depth);
        preErrorSymbol = symbol == TERROR ? null : symbol;
        symbol = TERROR;
        state = stack[stack.length - 1];
        action = table[state] && table[state][TERROR];
        recovering = 3;
      }
      if (action[0] instanceof Array && action.length > 1) {
        throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
      }
      switch (action[0]) {
        case 1:
          stack.push(symbol);
          vstack.push(lexer2.yytext);
          lstack.push(lexer2.yylloc);
          stack.push(action[1]);
          symbol = null;
          if (!preErrorSymbol) {
            yyleng = lexer2.yyleng;
            yytext = lexer2.yytext;
            yylineno = lexer2.yylineno;
            yyloc = lexer2.yylloc;
            if (recovering > 0) {
              recovering--;
            }
          } else {
            symbol = preErrorSymbol;
            preErrorSymbol = null;
          }
          break;
        case 2:
          len = this.productions_[action[1]][1];
          yyval.$ = vstack[vstack.length - len];
          yyval._$ = {
            first_line: lstack[lstack.length - (len || 1)].first_line,
            last_line: lstack[lstack.length - 1].last_line,
            first_column: lstack[lstack.length - (len || 1)].first_column,
            last_column: lstack[lstack.length - 1].last_column
          };
          if (ranges) {
            yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
          }
          r2 = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));
          if (typeof r2 !== "undefined") {
            return r2;
          }
          if (len) {
            stack = stack.slice(0, -1 * len * 2);
            vstack = vstack.slice(0, -1 * len);
            lstack = lstack.slice(0, -1 * len);
          }
          stack.push(this.productions_[action[1]][0]);
          vstack.push(yyval.$);
          lstack.push(yyval._$);
          newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
          stack.push(newState);
          break;
        case 3:
          return true;
      }
    }
    return true;
  }
};
var lexer = function() {
  var lexer2 = {
    EOF: 1,
    parseError: function parseError2(str, hash) {
      if (this.yy.parser) {
        this.yy.parser.parseError(str, hash);
      } else {
        throw new Error(str);
      }
    },
    setInput: function setInput(input, yy) {
      this.yy = yy || this.yy || {};
      this._input = input;
      this._more = this._backtrack = this.done = false;
      this.yylineno = this.yyleng = 0;
      this.yytext = this.matched = this.match = "";
      this.conditionStack = ["INITIAL"];
      this.yylloc = {
        first_line: 1,
        first_column: 0,
        last_line: 1,
        last_column: 0
      };
      if (this.options.ranges) {
        this.yylloc.range = [0, 0];
      }
      this.offset = 0;
      return this;
    },
    input: function input() {
      var ch2 = this._input[0];
      this.yytext += ch2;
      this.yyleng++;
      this.offset++;
      this.match += ch2;
      this.matched += ch2;
      var lines = ch2.match(/(?:\r\n?|\n).*/g);
      if (lines) {
        this.yylineno++;
        this.yylloc.last_line++;
      } else {
        this.yylloc.last_column++;
      }
      if (this.options.ranges) {
        this.yylloc.range[1]++;
      }
      this._input = this._input.slice(1);
      return ch2;
    },
    unput: function unput(ch2) {
      var len = ch2.length;
      var lines = ch2.split(/(?:\r\n?|\n)/g);
      this._input = ch2 + this._input;
      this.yytext = this.yytext.substr(0, this.yytext.length - len);
      this.offset -= len;
      var oldLines = this.match.split(/(?:\r\n?|\n)/g);
      this.match = this.match.substr(0, this.match.length - 1);
      this.matched = this.matched.substr(0, this.matched.length - 1);
      if (lines.length - 1) {
        this.yylineno -= lines.length - 1;
      }
      var r2 = this.yylloc.range;
      this.yylloc = {
        first_line: this.yylloc.first_line,
        last_line: this.yylineno + 1,
        first_column: this.yylloc.first_column,
        last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
      };
      if (this.options.ranges) {
        this.yylloc.range = [r2[0], r2[0] + this.yyleng - len];
      }
      this.yyleng = this.yytext.length;
      return this;
    },
    more: function more() {
      this._more = true;
      return this;
    },
    reject: function reject() {
      if (this.options.backtrack_lexer) {
        this._backtrack = true;
      } else {
        return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }
      return this;
    },
    less: function less(n2) {
      this.unput(this.match.slice(n2));
    },
    pastInput: function pastInput() {
      var past = this.matched.substr(0, this.matched.length - this.match.length);
      return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
    },
    upcomingInput: function upcomingInput() {
      var next = this.match;
      if (next.length < 20) {
        next += this._input.substr(0, 20 - next.length);
      }
      return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
    },
    showPosition: function showPosition() {
      var pre = this.pastInput();
      var c = new Array(pre.length + 1).join("-");
      return pre + this.upcomingInput() + "\n" + c + "^";
    },
    test_match: function test_match(match2, indexed_rule) {
      var token, lines, backup;
      if (this.options.backtrack_lexer) {
        backup = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        };
        if (this.options.ranges) {
          backup.yylloc.range = this.yylloc.range.slice(0);
        }
      }
      lines = match2[0].match(/(?:\r\n?|\n).*/g);
      if (lines) {
        this.yylineno += lines.length;
      }
      this.yylloc = {
        first_line: this.yylloc.last_line,
        last_line: this.yylineno + 1,
        first_column: this.yylloc.last_column,
        last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match2[0].length
      };
      this.yytext += match2[0];
      this.match += match2[0];
      this.matches = match2;
      this.yyleng = this.yytext.length;
      if (this.options.ranges) {
        this.yylloc.range = [this.offset, this.offset += this.yyleng];
      }
      this._more = false;
      this._backtrack = false;
      this._input = this._input.slice(match2[0].length);
      this.matched += match2[0];
      token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
      if (this.done && this._input) {
        this.done = false;
      }
      if (token) {
        return token;
      } else if (this._backtrack) {
        for (var k in backup) {
          this[k] = backup[k];
        }
        return false;
      }
      return false;
    },
    next: function next() {
      if (this.done) {
        return this.EOF;
      }
      if (!this._input) {
        this.done = true;
      }
      var token, match2, tempMatch, index;
      if (!this._more) {
        this.yytext = "";
        this.match = "";
      }
      var rules = this._currentRules();
      for (var i = 0; i < rules.length; i++) {
        tempMatch = this._input.match(this.rules[rules[i]]);
        if (tempMatch && (!match2 || tempMatch[0].length > match2[0].length)) {
          match2 = tempMatch;
          index = i;
          if (this.options.backtrack_lexer) {
            token = this.test_match(tempMatch, rules[i]);
            if (token !== false) {
              return token;
            } else if (this._backtrack) {
              match2 = false;
              continue;
            } else {
              return false;
            }
          } else if (!this.options.flex) {
            break;
          }
        }
      }
      if (match2) {
        token = this.test_match(match2, rules[index]);
        if (token !== false) {
          return token;
        }
        return false;
      }
      if (this._input === "") {
        return this.EOF;
      } else {
        return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      }
    },
    lex: function lex() {
      var r2 = this.next();
      if (r2) {
        return r2;
      } else {
        return this.lex();
      }
    },
    begin: function begin(condition) {
      this.conditionStack.push(condition);
    },
    popState: function popState() {
      var n2 = this.conditionStack.length - 1;
      if (n2 > 0) {
        return this.conditionStack.pop();
      } else {
        return this.conditionStack[0];
      }
    },
    _currentRules: function _currentRules() {
      if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
      } else {
        return this.conditions["INITIAL"].rules;
      }
    },
    topState: function topState(n2) {
      n2 = this.conditionStack.length - 1 - Math.abs(n2 || 0);
      if (n2 >= 0) {
        return this.conditionStack[n2];
      } else {
        return "INITIAL";
      }
    },
    pushState: function pushState(condition) {
      this.begin(condition);
    },
    stateStackSize: function stateStackSize() {
      return this.conditionStack.length;
    },
    options: {},
    performAction: function anonymous2(yy, yy_, $avoiding_name_collisions, YY_START) {
      switch ($avoiding_name_collisions) {
        case 0:
          break;
        case 1:
          return 8;
        case 2:
          return 8;
        case 3:
          return 21;
        case 4:
          return 35;
        case 5:
          return 24;
        case 6:
          return 26;
        case 7:
          return 26;
        case 8:
          return 25;
        case 9:
          return 21;
        case 10:
          return 31;
        case 11:
          return 31;
        case 12:
          return 33;
        case 13:
          return 28;
        case 14:
          return 9;
        case 15:
          return " ";
        case 16:
          return 32;
        case 17:
          return 27;
        case 18:
          return 29;
        case 19:
          return 30;
        case 20:
          return 18;
        case 21:
          return 19;
        case 22:
          return 17;
        case 23:
          return 11;
        case 24:
          return 20;
        case 25:
          return 12;
        case 26:
          return 13;
        case 27:
          return 15;
        case 28:
          return 14;
        case 29:
          return 16;
        case 30:
          return '"';
        case 31:
          return "'";
        case 32:
          return "!";
        case 33:
          return 10;
        case 34:
          return 34;
        case 35:
          return "#";
        case 36:
          return 5;
      }
    },
    rules: [/^(?:\s+)/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:[A-Za-z]{1,}[A-Za-z_0-9\.]+(?=[(]))/, /^(?:#[A-Z0-9\/]+(!|\?)?)/, /^(?:\$[A-Za-z]+\$[0-9]+)/, /^(?:\$[A-Za-z]+[0-9]+)/, /^(?:[A-Za-z]+\$[0-9]+)/, /^(?:[A-Za-z]+[0-9]+)/, /^(?:[A-Za-z\.]+(?=[(]))/, /^(?:[A-Za-z]{1,}[A-Za-z_0-9]+)/, /^(?:[A-Za-z_]+)/, /^(?:[0-9]+)/, /^(?:\[(.*)?\])/, /^(?:&)/, /^(?: )/, /^(?:[.])/, /^(?::)/, /^(?:;)/, /^(?:,)/, /^(?:\*)/, /^(?:\/)/, /^(?:-)/, /^(?:\+)/, /^(?:\^)/, /^(?:\()/, /^(?:\))/, /^(?:>)/, /^(?:<)/, /^(?:NOT\b)/, /^(?:")/, /^(?:')/, /^(?:!)/, /^(?:=)/, /^(?:%)/, /^(?:[#])/, /^(?:$)/],
    conditions: {
      "INITIAL": {
        "rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
        "inclusive": true
      }
    }
  };
  return lexer2;
}();
parser.lexer = lexer;
function Parser$1() {
  this.yy = {};
}
Parser$1.prototype = parser;
parser.Parser = Parser$1;
function trimEdges(string) {
  var margin = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  string = string.substring(margin, string.length - margin);
  return string;
}
function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
}
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(o3, minLen) {
  if (!o3)
    return;
  if (typeof o3 === "string")
    return _arrayLikeToArray$1(o3, minLen);
  var n2 = Object.prototype.toString.call(o3).slice(8, -1);
  if (n2 === "Object" && o3.constructor)
    n2 = o3.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o3);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$1(o3, minLen);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit$1(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr))
    return arr;
}
function rowLabelToIndex(label) {
  var result = parseInt(label, 10);
  if (isNaN(result)) {
    result = -1;
  } else {
    result = Math.max(result - 1, -1);
  }
  return result;
}
function rowIndexToLabel(row) {
  var result = "";
  if (row >= 0) {
    result = "".concat(row + 1);
  }
  return result;
}
var COLUMN_LABEL_BASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var COLUMN_LABEL_BASE_LENGTH = COLUMN_LABEL_BASE.length;
function columnLabelToIndex(label) {
  var result = 0;
  if (typeof label === "string") {
    label = label.toUpperCase();
    for (var i = 0, j = label.length - 1; i < label.length; i += 1, j -= 1) {
      result += Math.pow(COLUMN_LABEL_BASE_LENGTH, j) * (COLUMN_LABEL_BASE.indexOf(label[i]) + 1);
    }
  }
  --result;
  return result;
}
function columnIndexToLabel(column) {
  var result = "";
  while (column >= 0) {
    result = String.fromCharCode(column % COLUMN_LABEL_BASE_LENGTH + 97) + result;
    column = Math.floor(column / COLUMN_LABEL_BASE_LENGTH) - 1;
  }
  return result.toUpperCase();
}
var LABEL_EXTRACT_REGEXP = /^([$])?([A-Za-z]+)([$])?([0-9]+)$/;
function extractLabel(label) {
  if (typeof label !== "string" || !LABEL_EXTRACT_REGEXP.test(label)) {
    return [];
  }
  var _label$toUpperCase$ma = label.toUpperCase().match(LABEL_EXTRACT_REGEXP), _label$toUpperCase$ma2 = _slicedToArray$1(_label$toUpperCase$ma, 5), columnAbs = _label$toUpperCase$ma2[1], column = _label$toUpperCase$ma2[2], rowAbs = _label$toUpperCase$ma2[3], row = _label$toUpperCase$ma2[4];
  return [{
    index: rowLabelToIndex(row),
    label: row,
    isAbsolute: rowAbs === "$"
  }, {
    index: columnLabelToIndex(column),
    label: column,
    isAbsolute: columnAbs === "$"
  }];
}
function toLabel(row, column) {
  var rowLabel = (row.isAbsolute ? "$" : "") + rowIndexToLabel(row.index);
  var columnLabel = (column.isAbsolute ? "$" : "") + columnIndexToLabel(column.index);
  return columnLabel + rowLabel;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o3, minLen) {
  if (!o3)
    return;
  if (typeof o3 === "string")
    return _arrayLikeToArray(o3, minLen);
  var n2 = Object.prototype.toString.call(o3).slice(8, -1);
  if (n2 === "Object" && o3.constructor)
    n2 = o3.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o3);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o3, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o3, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o4, p3) {
    o4.__proto__ = p3;
    return o4;
  };
  return _setPrototypeOf(o3, p2);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self2, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self2);
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o3) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o4) {
    return o4.__proto__ || Object.getPrototypeOf(o4);
  };
  return _getPrototypeOf(o3);
}
var Parser = /* @__PURE__ */ function(_Emitter) {
  _inherits(Parser2, _Emitter);
  var _super = _createSuper(Parser2);
  function Parser2() {
    var _this;
    _classCallCheck(this, Parser2);
    _this = _super.call(this);
    _this.parser = new Parser$1();
    _this.parser.yy = {
      toNumber,
      trimEdges,
      invertNumber,
      throwError: function throwError(errorName) {
        return _this._throwError(errorName);
      },
      callVariable: function callVariable(variable) {
        return _this._callVariable(variable);
      },
      evaluateByOperator,
      callFunction: function callFunction(name, params) {
        return _this._callFunction(name, params);
      },
      cellValue: function cellValue(value) {
        return _this._callCellValue(value);
      },
      rangeValue: function rangeValue(start, end) {
        return _this._callRangeValue(start, end);
      }
    };
    _this.variables = Object.create(null);
    _this.functions = Object.create(null);
    _this.setVariable("TRUE", true).setVariable("FALSE", false).setVariable("NULL", null);
    return _this;
  }
  _createClass(Parser2, [{
    key: "parse",
    value: function parse2(expression) {
      var result = null;
      var error2 = null;
      try {
        if (expression === "") {
          result = "";
        } else {
          result = this.parser.parse(expression);
        }
      } catch (ex) {
        var message = error$4(ex.message);
        if (message) {
          error2 = message;
        } else {
          error2 = error$4(ERROR);
        }
      }
      if (result instanceof Error) {
        error2 = error$4(result.message) || error$4(ERROR);
        result = null;
      }
      return {
        error: error2,
        result
      };
    }
  }, {
    key: "setVariable",
    value: function setVariable(name, value) {
      this.variables[name] = value;
      return this;
    }
  }, {
    key: "getVariable",
    value: function getVariable(name) {
      return this.variables[name];
    }
  }, {
    key: "_callVariable",
    value: function _callVariable(name) {
      var value = this.getVariable(name);
      this.emit("callVariable", name, function(newValue) {
        if (newValue !== void 0) {
          value = newValue;
        }
      });
      if (value === void 0) {
        throw Error(ERROR_NAME);
      }
      return value;
    }
  }, {
    key: "setFunction",
    value: function setFunction(name, fn) {
      this.functions[name] = fn;
      return this;
    }
  }, {
    key: "getFunction",
    value: function getFunction(name) {
      return this.functions[name];
    }
  }, {
    key: "_callFunction",
    value: function _callFunction(name) {
      var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      var fn = this.getFunction(name);
      var value;
      if (fn) {
        value = fn(params);
      }
      this.emit("callFunction", name, params, function(newValue) {
        if (newValue !== void 0) {
          value = newValue;
        }
      });
      return value === void 0 ? evaluateByOperator(name, params) : value;
    }
  }, {
    key: "_callCellValue",
    value: function _callCellValue(label) {
      label = label.toUpperCase();
      var _extractLabel = extractLabel(label), _extractLabel2 = _slicedToArray(_extractLabel, 2), row = _extractLabel2[0], column = _extractLabel2[1];
      var value = void 0;
      this.emit("callCellValue", {
        label,
        row,
        column
      }, function(_value) {
        value = _value;
      });
      return value;
    }
  }, {
    key: "_callRangeValue",
    value: function _callRangeValue(startLabel, endLabel) {
      startLabel = startLabel.toUpperCase();
      endLabel = endLabel.toUpperCase();
      var _extractLabel3 = extractLabel(startLabel), _extractLabel4 = _slicedToArray(_extractLabel3, 2), startRow = _extractLabel4[0], startColumn = _extractLabel4[1];
      var _extractLabel5 = extractLabel(endLabel), _extractLabel6 = _slicedToArray(_extractLabel5, 2), endRow = _extractLabel6[0], endColumn = _extractLabel6[1];
      var startCell = {};
      var endCell = {};
      if (startRow.index <= endRow.index) {
        startCell.row = startRow;
        endCell.row = endRow;
      } else {
        startCell.row = endRow;
        endCell.row = startRow;
      }
      if (startColumn.index <= endColumn.index) {
        startCell.column = startColumn;
        endCell.column = endColumn;
      } else {
        startCell.column = endColumn;
        endCell.column = startColumn;
      }
      startCell.label = toLabel(startCell.row, startCell.column);
      endCell.label = toLabel(endCell.row, endCell.column);
      var value = [];
      this.emit("callRangeValue", startCell, endCell, function() {
        var _value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        value = _value;
      });
      return value;
    }
  }, {
    key: "_throwError",
    value: function _throwError(errorName) {
      if (isValidStrict(errorName)) {
        throw Error(errorName);
      }
      throw Error(ERROR);
    }
  }]);
  return Parser2;
}(Emitter);
var classnames$1 = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn2 = {}.hasOwnProperty;
    function classNames() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString === Object.prototype.toString) {
            for (var key in arg) {
              if (hasOwn2.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          } else {
            classes.push(arg.toString());
          }
        }
      }
      return classes.join(" ");
    }
    if (module.exports) {
      classNames.default = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames$1);
var classnames = classnames$1.exports;
var toStr$9 = Object.prototype.toString;
var isArguments = function isArguments2(value) {
  var str = toStr$9.call(value);
  var isArgs2 = str === "[object Arguments]";
  if (!isArgs2) {
    isArgs2 = str !== "[object Array]" && value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && toStr$9.call(value.callee) === "[object Function]";
  }
  return isArgs2;
};
var keysShim$1;
if (!Object.keys) {
  var has$b = Object.prototype.hasOwnProperty;
  var toStr$8 = Object.prototype.toString;
  var isArgs$1 = isArguments;
  var isEnumerable$1 = Object.prototype.propertyIsEnumerable;
  var hasDontEnumBug = !isEnumerable$1.call({ toString: null }, "toString");
  var hasProtoEnumBug = isEnumerable$1.call(function() {
  }, "prototype");
  var dontEnums = [
    "toString",
    "toLocaleString",
    "valueOf",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "constructor"
  ];
  var equalsConstructorPrototype = function(o3) {
    var ctor = o3.constructor;
    return ctor && ctor.prototype === o3;
  };
  var excludedKeys = {
    $applicationCache: true,
    $console: true,
    $external: true,
    $frame: true,
    $frameElement: true,
    $frames: true,
    $innerHeight: true,
    $innerWidth: true,
    $onmozfullscreenchange: true,
    $onmozfullscreenerror: true,
    $outerHeight: true,
    $outerWidth: true,
    $pageXOffset: true,
    $pageYOffset: true,
    $parent: true,
    $scrollLeft: true,
    $scrollTop: true,
    $scrollX: true,
    $scrollY: true,
    $self: true,
    $webkitIndexedDB: true,
    $webkitStorageInfo: true,
    $window: true
  };
  var hasAutomationEqualityBug = function() {
    if (typeof window === "undefined") {
      return false;
    }
    for (var k in window) {
      try {
        if (!excludedKeys["$" + k] && has$b.call(window, k) && window[k] !== null && typeof window[k] === "object") {
          try {
            equalsConstructorPrototype(window[k]);
          } catch (e) {
            return true;
          }
        }
      } catch (e) {
        return true;
      }
    }
    return false;
  }();
  var equalsConstructorPrototypeIfNotBuggy = function(o3) {
    if (typeof window === "undefined" || !hasAutomationEqualityBug) {
      return equalsConstructorPrototype(o3);
    }
    try {
      return equalsConstructorPrototype(o3);
    } catch (e) {
      return false;
    }
  };
  keysShim$1 = function keys3(object) {
    var isObject = object !== null && typeof object === "object";
    var isFunction2 = toStr$8.call(object) === "[object Function]";
    var isArguments3 = isArgs$1(object);
    var isString2 = isObject && toStr$8.call(object) === "[object String]";
    var theKeys = [];
    if (!isObject && !isFunction2 && !isArguments3) {
      throw new TypeError("Object.keys called on a non-object");
    }
    var skipProto = hasProtoEnumBug && isFunction2;
    if (isString2 && object.length > 0 && !has$b.call(object, 0)) {
      for (var i = 0; i < object.length; ++i) {
        theKeys.push(String(i));
      }
    }
    if (isArguments3 && object.length > 0) {
      for (var j = 0; j < object.length; ++j) {
        theKeys.push(String(j));
      }
    } else {
      for (var name in object) {
        if (!(skipProto && name === "prototype") && has$b.call(object, name)) {
          theKeys.push(String(name));
        }
      }
    }
    if (hasDontEnumBug) {
      var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
      for (var k = 0; k < dontEnums.length; ++k) {
        if (!(skipConstructor && dontEnums[k] === "constructor") && has$b.call(object, dontEnums[k])) {
          theKeys.push(dontEnums[k]);
        }
      }
    }
    return theKeys;
  };
}
var implementation$5 = keysShim$1;
var slice$2 = Array.prototype.slice;
var isArgs = isArguments;
var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o3) {
  return origKeys(o3);
} : implementation$5;
var originalKeys = Object.keys;
keysShim.shim = function shimObjectKeys() {
  if (Object.keys) {
    var keysWorksWithArguments = function() {
      var args = Object.keys(arguments);
      return args && args.length === arguments.length;
    }(1, 2);
    if (!keysWorksWithArguments) {
      Object.keys = function keys3(object) {
        if (isArgs(object)) {
          return originalKeys(slice$2.call(object));
        }
        return originalKeys(object);
      };
    }
  } else {
    Object.keys = keysShim;
  }
  return Object.keys || keysShim;
};
var objectKeys = keysShim;
var keys2 = objectKeys;
var hasSymbols$5 = typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
var toStr$7 = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;
var isFunction = function(fn) {
  return typeof fn === "function" && toStr$7.call(fn) === "[object Function]";
};
var arePropertyDescriptorsSupported = function() {
  var obj = {};
  try {
    origDefineProperty(obj, "x", { enumerable: false, value: obj });
    for (var _ in obj) {
      return false;
    }
    return obj.x === obj;
  } catch (e) {
    return false;
  }
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();
var defineProperty = function(object, name, value, predicate) {
  if (name in object && (!isFunction(predicate) || !predicate())) {
    return;
  }
  if (supportsDescriptors) {
    origDefineProperty(object, name, {
      configurable: true,
      enumerable: false,
      value,
      writable: true
    });
  } else {
    object[name] = value;
  }
};
var defineProperties = function(object, map2) {
  var predicates2 = arguments.length > 2 ? arguments[2] : {};
  var props = keys2(map2);
  if (hasSymbols$5) {
    props = concat.call(props, Object.getOwnPropertySymbols(map2));
  }
  for (var i = 0; i < props.length; i += 1) {
    defineProperty(object, props[i], map2[props[i]], predicates2[props[i]]);
  }
};
defineProperties.supportsDescriptors = !!supportsDescriptors;
var defineProperties_1 = defineProperties;
var callBind$3 = { exports: {} };
var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
var slice$1 = Array.prototype.slice;
var toStr$6 = Object.prototype.toString;
var funcType = "[object Function]";
var implementation$4 = function bind(that) {
  var target = this;
  if (typeof target !== "function" || toStr$6.call(target) !== funcType) {
    throw new TypeError(ERROR_MESSAGE + target);
  }
  var args = slice$1.call(arguments, 1);
  var bound;
  var binder = function() {
    if (this instanceof bound) {
      var result = target.apply(this, args.concat(slice$1.call(arguments)));
      if (Object(result) === result) {
        return result;
      }
      return this;
    } else {
      return target.apply(that, args.concat(slice$1.call(arguments)));
    }
  };
  var boundLength = Math.max(0, target.length - args.length);
  var boundArgs = [];
  for (var i = 0; i < boundLength; i++) {
    boundArgs.push("$" + i);
  }
  bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
  if (target.prototype) {
    var Empty = function Empty2() {
    };
    Empty.prototype = target.prototype;
    bound.prototype = new Empty();
    Empty.prototype = null;
  }
  return bound;
};
var implementation$3 = implementation$4;
var functionBind = Function.prototype.bind || implementation$3;
var shams = function hasSymbols() {
  if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
    return false;
  }
  if (typeof Symbol.iterator === "symbol") {
    return true;
  }
  var obj = {};
  var sym = Symbol("test");
  var symObj = Object(sym);
  if (typeof sym === "string") {
    return false;
  }
  if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
    return false;
  }
  if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
    return false;
  }
  var symVal = 42;
  obj[sym] = symVal;
  for (sym in obj) {
    return false;
  }
  if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
    return false;
  }
  if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
    return false;
  }
  var syms = Object.getOwnPropertySymbols(obj);
  if (syms.length !== 1 || syms[0] !== sym) {
    return false;
  }
  if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
    return false;
  }
  if (typeof Object.getOwnPropertyDescriptor === "function") {
    var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
    if (descriptor.value !== symVal || descriptor.enumerable !== true) {
      return false;
    }
  }
  return true;
};
var origSymbol = typeof Symbol !== "undefined" && Symbol;
var hasSymbolSham = shams;
var hasSymbols$4 = function hasNativeSymbols() {
  if (typeof origSymbol !== "function") {
    return false;
  }
  if (typeof Symbol !== "function") {
    return false;
  }
  if (typeof origSymbol("foo") !== "symbol") {
    return false;
  }
  if (typeof Symbol("bar") !== "symbol") {
    return false;
  }
  return hasSymbolSham();
};
var bind$1 = functionBind;
var src = bind$1.call(Function.call, Object.prototype.hasOwnProperty);
var undefined$1;
var $SyntaxError$1 = SyntaxError;
var $Function = Function;
var $TypeError$g = TypeError;
var getEvalledConstructor = function(expressionSyntax) {
  try {
    return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
  } catch (e) {
  }
};
var $gOPD$2 = Object.getOwnPropertyDescriptor;
if ($gOPD$2) {
  try {
    $gOPD$2({}, "");
  } catch (e) {
    $gOPD$2 = null;
  }
}
var throwTypeError = function() {
  throw new $TypeError$g();
};
var ThrowTypeError = $gOPD$2 ? function() {
  try {
    arguments.callee;
    return throwTypeError;
  } catch (calleeThrows) {
    try {
      return $gOPD$2(arguments, "callee").get;
    } catch (gOPDthrows) {
      return throwTypeError;
    }
  }
}() : throwTypeError;
var hasSymbols$3 = hasSymbols$4();
var getProto = Object.getPrototypeOf || function(x2) {
  return x2.__proto__;
};
var needsEval = {};
var TypedArray = typeof Uint8Array === "undefined" ? undefined$1 : getProto(Uint8Array);
var INTRINSICS = {
  "%AggregateError%": typeof AggregateError === "undefined" ? undefined$1 : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined$1 : ArrayBuffer,
  "%ArrayIteratorPrototype%": hasSymbols$3 ? getProto([][Symbol.iterator]()) : undefined$1,
  "%AsyncFromSyncIteratorPrototype%": undefined$1,
  "%AsyncFunction%": needsEval,
  "%AsyncGenerator%": needsEval,
  "%AsyncGeneratorFunction%": needsEval,
  "%AsyncIteratorPrototype%": needsEval,
  "%Atomics%": typeof Atomics === "undefined" ? undefined$1 : Atomics,
  "%BigInt%": typeof BigInt === "undefined" ? undefined$1 : BigInt,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView === "undefined" ? undefined$1 : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array === "undefined" ? undefined$1 : Float32Array,
  "%Float64Array%": typeof Float64Array === "undefined" ? undefined$1 : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined$1 : FinalizationRegistry,
  "%Function%": $Function,
  "%GeneratorFunction%": needsEval,
  "%Int8Array%": typeof Int8Array === "undefined" ? undefined$1 : Int8Array,
  "%Int16Array%": typeof Int16Array === "undefined" ? undefined$1 : Int16Array,
  "%Int32Array%": typeof Int32Array === "undefined" ? undefined$1 : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": hasSymbols$3 ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
  "%JSON%": typeof JSON === "object" ? JSON : undefined$1,
  "%Map%": typeof Map === "undefined" ? undefined$1 : Map,
  "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols$3 ? undefined$1 : getProto(new Map()[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise === "undefined" ? undefined$1 : Promise,
  "%Proxy%": typeof Proxy === "undefined" ? undefined$1 : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect === "undefined" ? undefined$1 : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set === "undefined" ? undefined$1 : Set,
  "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols$3 ? undefined$1 : getProto(new Set()[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined$1 : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": hasSymbols$3 ? getProto(""[Symbol.iterator]()) : undefined$1,
  "%Symbol%": hasSymbols$3 ? Symbol : undefined$1,
  "%SyntaxError%": $SyntaxError$1,
  "%ThrowTypeError%": ThrowTypeError,
  "%TypedArray%": TypedArray,
  "%TypeError%": $TypeError$g,
  "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined$1 : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined$1 : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined$1 : Uint16Array,
  "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined$1 : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap === "undefined" ? undefined$1 : WeakMap,
  "%WeakRef%": typeof WeakRef === "undefined" ? undefined$1 : WeakRef,
  "%WeakSet%": typeof WeakSet === "undefined" ? undefined$1 : WeakSet
};
var doEval = function doEval2(name) {
  var value;
  if (name === "%AsyncFunction%") {
    value = getEvalledConstructor("async function () {}");
  } else if (name === "%GeneratorFunction%") {
    value = getEvalledConstructor("function* () {}");
  } else if (name === "%AsyncGeneratorFunction%") {
    value = getEvalledConstructor("async function* () {}");
  } else if (name === "%AsyncGenerator%") {
    var fn = doEval2("%AsyncGeneratorFunction%");
    if (fn) {
      value = fn.prototype;
    }
  } else if (name === "%AsyncIteratorPrototype%") {
    var gen = doEval2("%AsyncGenerator%");
    if (gen) {
      value = getProto(gen.prototype);
    }
  }
  INTRINSICS[name] = value;
  return value;
};
var LEGACY_ALIASES = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
};
var bind2 = functionBind;
var hasOwn$1 = src;
var $concat = bind2.call(Function.call, Array.prototype.concat);
var $spliceApply = bind2.call(Function.apply, Array.prototype.splice);
var $replace$1 = bind2.call(Function.call, String.prototype.replace);
var $strSlice$1 = bind2.call(Function.call, String.prototype.slice);
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = function stringToPath2(string) {
  var first = $strSlice$1(string, 0, 1);
  var last = $strSlice$1(string, -1);
  if (first === "%" && last !== "%") {
    throw new $SyntaxError$1("invalid intrinsic syntax, expected closing `%`");
  } else if (last === "%" && first !== "%") {
    throw new $SyntaxError$1("invalid intrinsic syntax, expected opening `%`");
  }
  var result = [];
  $replace$1(string, rePropName, function(match2, number, quote2, subString) {
    result[result.length] = quote2 ? $replace$1(subString, reEscapeChar, "$1") : number || match2;
  });
  return result;
};
var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
  var intrinsicName = name;
  var alias;
  if (hasOwn$1(LEGACY_ALIASES, intrinsicName)) {
    alias = LEGACY_ALIASES[intrinsicName];
    intrinsicName = "%" + alias[0] + "%";
  }
  if (hasOwn$1(INTRINSICS, intrinsicName)) {
    var value = INTRINSICS[intrinsicName];
    if (value === needsEval) {
      value = doEval(intrinsicName);
    }
    if (typeof value === "undefined" && !allowMissing) {
      throw new $TypeError$g("intrinsic " + name + " exists, but is not available. Please file an issue!");
    }
    return {
      alias,
      name: intrinsicName,
      value
    };
  }
  throw new $SyntaxError$1("intrinsic " + name + " does not exist!");
};
var getIntrinsic = function GetIntrinsic(name, allowMissing) {
  if (typeof name !== "string" || name.length === 0) {
    throw new $TypeError$g("intrinsic name must be a non-empty string");
  }
  if (arguments.length > 1 && typeof allowMissing !== "boolean") {
    throw new $TypeError$g('"allowMissing" argument must be a boolean');
  }
  var parts = stringToPath(name);
  var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
  var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
  var intrinsicRealName = intrinsic.name;
  var value = intrinsic.value;
  var skipFurtherCaching = false;
  var alias = intrinsic.alias;
  if (alias) {
    intrinsicBaseName = alias[0];
    $spliceApply(parts, $concat([0, 1], alias));
  }
  for (var i = 1, isOwn = true; i < parts.length; i += 1) {
    var part = parts[i];
    var first = $strSlice$1(part, 0, 1);
    var last = $strSlice$1(part, -1);
    if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
      throw new $SyntaxError$1("property names with quotes must have matching quotes");
    }
    if (part === "constructor" || !isOwn) {
      skipFurtherCaching = true;
    }
    intrinsicBaseName += "." + part;
    intrinsicRealName = "%" + intrinsicBaseName + "%";
    if (hasOwn$1(INTRINSICS, intrinsicRealName)) {
      value = INTRINSICS[intrinsicRealName];
    } else if (value != null) {
      if (!(part in value)) {
        if (!allowMissing) {
          throw new $TypeError$g("base intrinsic for " + name + " exists, but the property is not available.");
        }
        return void 0;
      }
      if ($gOPD$2 && i + 1 >= parts.length) {
        var desc = $gOPD$2(value, part);
        isOwn = !!desc;
        if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
          value = desc.get;
        } else {
          value = value[part];
        }
      } else {
        isOwn = hasOwn$1(value, part);
        value = value[part];
      }
      if (isOwn && !skipFurtherCaching) {
        INTRINSICS[intrinsicRealName] = value;
      }
    }
  }
  return value;
};
(function(module) {
  var bind3 = functionBind;
  var GetIntrinsic3 = getIntrinsic;
  var $apply2 = GetIntrinsic3("%Function.prototype.apply%");
  var $call = GetIntrinsic3("%Function.prototype.call%");
  var $reflectApply = GetIntrinsic3("%Reflect.apply%", true) || bind3.call($call, $apply2);
  var $gOPD2 = GetIntrinsic3("%Object.getOwnPropertyDescriptor%", true);
  var $defineProperty2 = GetIntrinsic3("%Object.defineProperty%", true);
  var $max = GetIntrinsic3("%Math.max%");
  if ($defineProperty2) {
    try {
      $defineProperty2({}, "a", { value: 1 });
    } catch (e) {
      $defineProperty2 = null;
    }
  }
  module.exports = function callBind2(originalFunction) {
    var func2 = $reflectApply(bind3, $call, arguments);
    if ($gOPD2 && $defineProperty2) {
      var desc = $gOPD2(func2, "length");
      if (desc.configurable) {
        $defineProperty2(func2, "length", { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) });
      }
    }
    return func2;
  };
  var applyBind = function applyBind2() {
    return $reflectApply(bind3, $apply2, arguments);
  };
  if ($defineProperty2) {
    $defineProperty2(module.exports, "apply", { value: applyBind });
  } else {
    module.exports.apply = applyBind;
  }
})(callBind$3);
var __viteBrowserExternal = new Proxy({}, {
  get() {
    throw new Error('Module "" has been externalized for browser compatibility and cannot be accessed in client code.');
  }
});
var __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": __viteBrowserExternal
});
var require$$0 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var hasMap = typeof Map === "function" && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === "function" && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var match = String.prototype.match;
var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
var isEnumerable = Object.prototype.propertyIsEnumerable;
var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O2) {
  return O2.__proto__;
} : null);
var inspectCustom = require$$0.custom;
var inspectSymbol = inspectCustom && isSymbol$2(inspectCustom) ? inspectCustom : null;
var toStringTag = typeof Symbol === "function" && typeof Symbol.toStringTag !== "undefined" ? Symbol.toStringTag : null;
var objectInspect = function inspect_(obj, options, depth, seen) {
  var opts = options || {};
  if (has$a(opts, "quoteStyle") && (opts.quoteStyle !== "single" && opts.quoteStyle !== "double")) {
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  }
  if (has$a(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  }
  var customInspect = has$a(opts, "customInspect") ? opts.customInspect : true;
  if (typeof customInspect !== "boolean") {
    throw new TypeError('option "customInspect", if provided, must be `true` or `false`');
  }
  if (has$a(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
    throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
  }
  if (typeof obj === "undefined") {
    return "undefined";
  }
  if (obj === null) {
    return "null";
  }
  if (typeof obj === "boolean") {
    return obj ? "true" : "false";
  }
  if (typeof obj === "string") {
    return inspectString(obj, opts);
  }
  if (typeof obj === "number") {
    if (obj === 0) {
      return Infinity / obj > 0 ? "0" : "-0";
    }
    return String(obj);
  }
  if (typeof obj === "bigint") {
    return String(obj) + "n";
  }
  var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
  if (typeof depth === "undefined") {
    depth = 0;
  }
  if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
    return isArray(obj) ? "[Array]" : "[Object]";
  }
  var indent = getIndent(opts, depth);
  if (typeof seen === "undefined") {
    seen = [];
  } else if (indexOf(seen, obj) >= 0) {
    return "[Circular]";
  }
  function inspect2(value, from2, noIndent) {
    if (from2) {
      seen = seen.slice();
      seen.push(from2);
    }
    if (noIndent) {
      var newOpts = {
        depth: opts.depth
      };
      if (has$a(opts, "quoteStyle")) {
        newOpts.quoteStyle = opts.quoteStyle;
      }
      return inspect_(value, newOpts, depth + 1, seen);
    }
    return inspect_(value, opts, depth + 1, seen);
  }
  if (typeof obj === "function") {
    var name = nameOf(obj);
    var keys3 = arrObjKeys(obj, inspect2);
    return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys3.length > 0 ? " { " + keys3.join(", ") + " }" : "");
  }
  if (isSymbol$2(obj)) {
    var symString = hasShammedSymbols ? String(obj).replace(/^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
    return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
  }
  if (isElement(obj)) {
    var s = "<" + String(obj.nodeName).toLowerCase();
    var attrs = obj.attributes || [];
    for (var i = 0; i < attrs.length; i++) {
      s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
    }
    s += ">";
    if (obj.childNodes && obj.childNodes.length) {
      s += "...";
    }
    s += "</" + String(obj.nodeName).toLowerCase() + ">";
    return s;
  }
  if (isArray(obj)) {
    if (obj.length === 0) {
      return "[]";
    }
    var xs = arrObjKeys(obj, inspect2);
    if (indent && !singleLineValues(xs)) {
      return "[" + indentedJoin(xs, indent) + "]";
    }
    return "[ " + xs.join(", ") + " ]";
  }
  if (isError(obj)) {
    var parts = arrObjKeys(obj, inspect2);
    if (parts.length === 0) {
      return "[" + String(obj) + "]";
    }
    return "{ [" + String(obj) + "] " + parts.join(", ") + " }";
  }
  if (typeof obj === "object" && customInspect) {
    if (inspectSymbol && typeof obj[inspectSymbol] === "function") {
      return obj[inspectSymbol]();
    } else if (typeof obj.inspect === "function") {
      return obj.inspect();
    }
  }
  if (isMap(obj)) {
    var mapParts = [];
    mapForEach.call(obj, function(value, key) {
      mapParts.push(inspect2(key, obj, true) + " => " + inspect2(value, obj));
    });
    return collectionOf("Map", mapSize.call(obj), mapParts, indent);
  }
  if (isSet(obj)) {
    var setParts = [];
    setForEach.call(obj, function(value) {
      setParts.push(inspect2(value, obj));
    });
    return collectionOf("Set", setSize.call(obj), setParts, indent);
  }
  if (isWeakMap(obj)) {
    return weakCollectionOf("WeakMap");
  }
  if (isWeakSet(obj)) {
    return weakCollectionOf("WeakSet");
  }
  if (isWeakRef(obj)) {
    return weakCollectionOf("WeakRef");
  }
  if (isNumber(obj)) {
    return markBoxed(inspect2(Number(obj)));
  }
  if (isBigInt(obj)) {
    return markBoxed(inspect2(bigIntValueOf.call(obj)));
  }
  if (isBoolean(obj)) {
    return markBoxed(booleanValueOf.call(obj));
  }
  if (isString(obj)) {
    return markBoxed(inspect2(String(obj)));
  }
  if (!isDate$1(obj) && !isRegExp(obj)) {
    var ys = arrObjKeys(obj, inspect2);
    var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
    var protoTag = obj instanceof Object ? "" : "null prototype";
    var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? toStr$5(obj).slice(8, -1) : protoTag ? "Object" : "";
    var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
    var tag = constructorTag + (stringTag || protoTag ? "[" + [].concat(stringTag || [], protoTag || []).join(": ") + "] " : "");
    if (ys.length === 0) {
      return tag + "{}";
    }
    if (indent) {
      return tag + "{" + indentedJoin(ys, indent) + "}";
    }
    return tag + "{ " + ys.join(", ") + " }";
  }
  return String(obj);
};
function wrapQuotes(s, defaultStyle, opts) {
  var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
  return quoteChar + s + quoteChar;
}
function quote(s) {
  return String(s).replace(/"/g, "&quot;");
}
function isArray(obj) {
  return toStr$5(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isDate$1(obj) {
  return toStr$5(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isRegExp(obj) {
  return toStr$5(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isError(obj) {
  return toStr$5(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isString(obj) {
  return toStr$5(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isNumber(obj) {
  return toStr$5(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isBoolean(obj) {
  return toStr$5(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isSymbol$2(obj) {
  if (hasShammedSymbols) {
    return obj && typeof obj === "object" && obj instanceof Symbol;
  }
  if (typeof obj === "symbol") {
    return true;
  }
  if (!obj || typeof obj !== "object" || !symToString) {
    return false;
  }
  try {
    symToString.call(obj);
    return true;
  } catch (e) {
  }
  return false;
}
function isBigInt(obj) {
  if (!obj || typeof obj !== "object" || !bigIntValueOf) {
    return false;
  }
  try {
    bigIntValueOf.call(obj);
    return true;
  } catch (e) {
  }
  return false;
}
var hasOwn = Object.prototype.hasOwnProperty || function(key) {
  return key in this;
};
function has$a(obj, key) {
  return hasOwn.call(obj, key);
}
function toStr$5(obj) {
  return objectToString.call(obj);
}
function nameOf(f) {
  if (f.name) {
    return f.name;
  }
  var m2 = match.call(functionToString.call(f), /^function\s*([\w$]+)/);
  if (m2) {
    return m2[1];
  }
  return null;
}
function indexOf(xs, x2) {
  if (xs.indexOf) {
    return xs.indexOf(x2);
  }
  for (var i = 0, l2 = xs.length; i < l2; i++) {
    if (xs[i] === x2) {
      return i;
    }
  }
  return -1;
}
function isMap(x2) {
  if (!mapSize || !x2 || typeof x2 !== "object") {
    return false;
  }
  try {
    mapSize.call(x2);
    try {
      setSize.call(x2);
    } catch (s) {
      return true;
    }
    return x2 instanceof Map;
  } catch (e) {
  }
  return false;
}
function isWeakMap(x2) {
  if (!weakMapHas || !x2 || typeof x2 !== "object") {
    return false;
  }
  try {
    weakMapHas.call(x2, weakMapHas);
    try {
      weakSetHas.call(x2, weakSetHas);
    } catch (s) {
      return true;
    }
    return x2 instanceof WeakMap;
  } catch (e) {
  }
  return false;
}
function isWeakRef(x2) {
  if (!weakRefDeref || !x2 || typeof x2 !== "object") {
    return false;
  }
  try {
    weakRefDeref.call(x2);
    return true;
  } catch (e) {
  }
  return false;
}
function isSet(x2) {
  if (!setSize || !x2 || typeof x2 !== "object") {
    return false;
  }
  try {
    setSize.call(x2);
    try {
      mapSize.call(x2);
    } catch (m2) {
      return true;
    }
    return x2 instanceof Set;
  } catch (e) {
  }
  return false;
}
function isWeakSet(x2) {
  if (!weakSetHas || !x2 || typeof x2 !== "object") {
    return false;
  }
  try {
    weakSetHas.call(x2, weakSetHas);
    try {
      weakMapHas.call(x2, weakMapHas);
    } catch (s) {
      return true;
    }
    return x2 instanceof WeakSet;
  } catch (e) {
  }
  return false;
}
function isElement(x2) {
  if (!x2 || typeof x2 !== "object") {
    return false;
  }
  if (typeof HTMLElement !== "undefined" && x2 instanceof HTMLElement) {
    return true;
  }
  return typeof x2.nodeName === "string" && typeof x2.getAttribute === "function";
}
function inspectString(str, opts) {
  if (str.length > opts.maxStringLength) {
    var remaining = str.length - opts.maxStringLength;
    var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
    return inspectString(str.slice(0, opts.maxStringLength), opts) + trailer;
  }
  var s = str.replace(/(['\\])/g, "\\$1").replace(/[\x00-\x1f]/g, lowbyte);
  return wrapQuotes(s, "single", opts);
}
function lowbyte(c) {
  var n2 = c.charCodeAt(0);
  var x2 = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[n2];
  if (x2) {
    return "\\" + x2;
  }
  return "\\x" + (n2 < 16 ? "0" : "") + n2.toString(16).toUpperCase();
}
function markBoxed(str) {
  return "Object(" + str + ")";
}
function weakCollectionOf(type) {
  return type + " { ? }";
}
function collectionOf(type, size2, entries, indent) {
  var joinedEntries = indent ? indentedJoin(entries, indent) : entries.join(", ");
  return type + " (" + size2 + ") {" + joinedEntries + "}";
}
function singleLineValues(xs) {
  for (var i = 0; i < xs.length; i++) {
    if (indexOf(xs[i], "\n") >= 0) {
      return false;
    }
  }
  return true;
}
function getIndent(opts, depth) {
  var baseIndent;
  if (opts.indent === "	") {
    baseIndent = "	";
  } else if (typeof opts.indent === "number" && opts.indent > 0) {
    baseIndent = Array(opts.indent + 1).join(" ");
  } else {
    return null;
  }
  return {
    base: baseIndent,
    prev: Array(depth + 1).join(baseIndent)
  };
}
function indentedJoin(xs, indent) {
  if (xs.length === 0) {
    return "";
  }
  var lineJoiner = "\n" + indent.prev + indent.base;
  return lineJoiner + xs.join("," + lineJoiner) + "\n" + indent.prev;
}
function arrObjKeys(obj, inspect2) {
  var isArr = isArray(obj);
  var xs = [];
  if (isArr) {
    xs.length = obj.length;
    for (var i = 0; i < obj.length; i++) {
      xs[i] = has$a(obj, i) ? inspect2(obj[i], obj) : "";
    }
  }
  var syms = typeof gOPS === "function" ? gOPS(obj) : [];
  var symMap;
  if (hasShammedSymbols) {
    symMap = {};
    for (var k = 0; k < syms.length; k++) {
      symMap["$" + syms[k]] = syms[k];
    }
  }
  for (var key in obj) {
    if (!has$a(obj, key)) {
      continue;
    }
    if (isArr && String(Number(key)) === key && key < obj.length) {
      continue;
    }
    if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
      continue;
    } else if (/[^\w$]/.test(key)) {
      xs.push(inspect2(key, obj) + ": " + inspect2(obj[key], obj));
    } else {
      xs.push(key + ": " + inspect2(obj[key], obj));
    }
  }
  if (typeof gOPS === "function") {
    for (var j = 0; j < syms.length; j++) {
      if (isEnumerable.call(obj, syms[j])) {
        xs.push("[" + inspect2(syms[j]) + "]: " + inspect2(obj[syms[j]], obj));
      }
    }
  }
  return xs;
}
var IsPropertyKey$6 = function IsPropertyKey(argument) {
  return typeof argument === "string" || typeof argument === "symbol";
};
var Type$d = function Type(x2) {
  if (x2 === null) {
    return "Null";
  }
  if (typeof x2 === "undefined") {
    return "Undefined";
  }
  if (typeof x2 === "function" || typeof x2 === "object") {
    return "Object";
  }
  if (typeof x2 === "number") {
    return "Number";
  }
  if (typeof x2 === "boolean") {
    return "Boolean";
  }
  if (typeof x2 === "string") {
    return "String";
  }
};
var ES5Type = Type$d;
var Type$c = function Type2(x2) {
  if (typeof x2 === "symbol") {
    return "Symbol";
  }
  if (typeof x2 === "bigint") {
    return "BigInt";
  }
  return ES5Type(x2);
};
var GetIntrinsic$s = getIntrinsic;
var $TypeError$f = GetIntrinsic$s("%TypeError%");
var inspect = objectInspect;
var IsPropertyKey$5 = IsPropertyKey$6;
var Type$b = Type$c;
var Get$4 = function Get(O2, P2) {
  if (Type$b(O2) !== "Object") {
    throw new $TypeError$f("Assertion failed: Type(O) is not Object");
  }
  if (!IsPropertyKey$5(P2)) {
    throw new $TypeError$f("Assertion failed: IsPropertyKey(P) is not true, got " + inspect(P2));
  }
  return O2[P2];
};
var GetIntrinsic$r = getIntrinsic;
var callBind$2 = callBind$3.exports;
var $indexOf = callBind$2(GetIntrinsic$r("String.prototype.indexOf"));
var callBound$5 = function callBoundIntrinsic(name, allowMissing) {
  var intrinsic = GetIntrinsic$r(name, !!allowMissing);
  if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
    return callBind$2(intrinsic);
  }
  return intrinsic;
};
var GetIntrinsic$q = getIntrinsic;
var $Array$1 = GetIntrinsic$q("%Array%");
var toStr$4 = !$Array$1.isArray && callBound$5("Object.prototype.toString");
var IsArray$4 = $Array$1.isArray || function IsArray(argument) {
  return toStr$4(argument) === "[object Array]";
};
var IsConstructor$1 = { exports: {} };
var GetIntrinsic$p = getIntrinsic;
var GetIntrinsic$o = getIntrinsic;
var has$9 = src;
var $TypeError$e = GetIntrinsic$o("%TypeError%");
var isPropertyDescriptor$1 = function IsPropertyDescriptor(ES, Desc) {
  if (ES.Type(Desc) !== "Object") {
    return false;
  }
  var allowed = {
    "[[Configurable]]": true,
    "[[Enumerable]]": true,
    "[[Get]]": true,
    "[[Set]]": true,
    "[[Value]]": true,
    "[[Writable]]": true
  };
  for (var key in Desc) {
    if (has$9(Desc, key) && !allowed[key]) {
      return false;
    }
  }
  if (ES.IsDataDescriptor(Desc) && ES.IsAccessorDescriptor(Desc)) {
    throw new $TypeError$e("Property Descriptors may not be both accessor and data descriptors");
  }
  return true;
};
var GetIntrinsic$n = getIntrinsic;
var $defineProperty = GetIntrinsic$n("%Object.defineProperty%", true);
if ($defineProperty) {
  try {
    $defineProperty({}, "a", { value: 1 });
  } catch (e) {
    $defineProperty = null;
  }
}
var callBound$4 = callBound$5;
var $isEnumerable$1 = callBound$4("Object.prototype.propertyIsEnumerable");
var DefineOwnProperty$2 = function DefineOwnProperty(IsDataDescriptor3, SameValue3, FromPropertyDescriptor3, O2, P2, desc) {
  if (!$defineProperty) {
    if (!IsDataDescriptor3(desc)) {
      return false;
    }
    if (!desc["[[Configurable]]"] || !desc["[[Writable]]"]) {
      return false;
    }
    if (P2 in O2 && $isEnumerable$1(O2, P2) !== !!desc["[[Enumerable]]"]) {
      return false;
    }
    var V2 = desc["[[Value]]"];
    O2[P2] = V2;
    return SameValue3(O2[P2], V2);
  }
  $defineProperty(O2, P2, FromPropertyDescriptor3(desc));
  return true;
};
var GetIntrinsic$m = getIntrinsic;
var $TypeError$d = GetIntrinsic$m("%TypeError%");
var $SyntaxError = GetIntrinsic$m("%SyntaxError%");
var has$8 = src;
var predicates = {
  "Property Descriptor": function isPropertyDescriptor(Type4, Desc) {
    if (Type4(Desc) !== "Object") {
      return false;
    }
    var allowed = {
      "[[Configurable]]": true,
      "[[Enumerable]]": true,
      "[[Get]]": true,
      "[[Set]]": true,
      "[[Value]]": true,
      "[[Writable]]": true
    };
    for (var key in Desc) {
      if (has$8(Desc, key) && !allowed[key]) {
        return false;
      }
    }
    var isData = has$8(Desc, "[[Value]]");
    var IsAccessor = has$8(Desc, "[[Get]]") || has$8(Desc, "[[Set]]");
    if (isData && IsAccessor) {
      throw new $TypeError$d("Property Descriptors may not be both accessor and data descriptors");
    }
    return true;
  }
};
var assertRecord$3 = function assertRecord(Type4, recordType, argumentName, value) {
  var predicate = predicates[recordType];
  if (typeof predicate !== "function") {
    throw new $SyntaxError("unknown record type: " + recordType);
  }
  if (!predicate(Type4, value)) {
    throw new $TypeError$d(argumentName + " must be a " + recordType);
  }
};
var assertRecord$2 = assertRecord$3;
var Type$a = Type$c;
var FromPropertyDescriptor$2 = function FromPropertyDescriptor(Desc) {
  if (typeof Desc === "undefined") {
    return Desc;
  }
  assertRecord$2(Type$a, "Property Descriptor", "Desc", Desc);
  var obj = {};
  if ("[[Value]]" in Desc) {
    obj.value = Desc["[[Value]]"];
  }
  if ("[[Writable]]" in Desc) {
    obj.writable = Desc["[[Writable]]"];
  }
  if ("[[Get]]" in Desc) {
    obj.get = Desc["[[Get]]"];
  }
  if ("[[Set]]" in Desc) {
    obj.set = Desc["[[Set]]"];
  }
  if ("[[Enumerable]]" in Desc) {
    obj.enumerable = Desc["[[Enumerable]]"];
  }
  if ("[[Configurable]]" in Desc) {
    obj.configurable = Desc["[[Configurable]]"];
  }
  return obj;
};
var has$7 = src;
var assertRecord$1 = assertRecord$3;
var Type$9 = Type$c;
var IsAccessorDescriptor$1 = function IsAccessorDescriptor(Desc) {
  if (typeof Desc === "undefined") {
    return false;
  }
  assertRecord$1(Type$9, "Property Descriptor", "Desc", Desc);
  if (!has$7(Desc, "[[Get]]") && !has$7(Desc, "[[Set]]")) {
    return false;
  }
  return true;
};
var has$6 = src;
var assertRecord2 = assertRecord$3;
var Type$8 = Type$c;
var IsDataDescriptor$2 = function IsDataDescriptor(Desc) {
  if (typeof Desc === "undefined") {
    return false;
  }
  assertRecord2(Type$8, "Property Descriptor", "Desc", Desc);
  if (!has$6(Desc, "[[Value]]") && !has$6(Desc, "[[Writable]]")) {
    return false;
  }
  return true;
};
var _isNaN = Number.isNaN || function isNaN2(a) {
  return a !== a;
};
var $isNaN$3 = _isNaN;
var SameValue$2 = function SameValue(x2, y2) {
  if (x2 === y2) {
    if (x2 === 0) {
      return 1 / x2 === 1 / y2;
    }
    return true;
  }
  return $isNaN$3(x2) && $isNaN$3(y2);
};
var ToBoolean$2 = function ToBoolean(value) {
  return !!value;
};
var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
var badArrayLike$1;
var isCallableMarker;
if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") {
  try {
    badArrayLike$1 = Object.defineProperty({}, "length", {
      get: function() {
        throw isCallableMarker;
      }
    });
    isCallableMarker = {};
    reflectApply(function() {
      throw 42;
    }, null, badArrayLike$1);
  } catch (_) {
    if (_ !== isCallableMarker) {
      reflectApply = null;
    }
  }
} else {
  reflectApply = null;
}
var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
  try {
    var fnStr = fnToStr.call(value);
    return constructorRegex.test(fnStr);
  } catch (e) {
    return false;
  }
};
var tryFunctionObject = function tryFunctionToStr(value) {
  try {
    if (isES6ClassFn(value)) {
      return false;
    }
    fnToStr.call(value);
    return true;
  } catch (e) {
    return false;
  }
};
var toStr$3 = Object.prototype.toString;
var fnClass = "[object Function]";
var genClass = "[object GeneratorFunction]";
var hasToStringTag$2 = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
var documentDotAll = typeof document === "object" && typeof document.all === "undefined" && document.all !== void 0 ? document.all : {};
var isCallable$2 = reflectApply ? function isCallable(value) {
  if (value === documentDotAll) {
    return true;
  }
  if (!value) {
    return false;
  }
  if (typeof value !== "function" && typeof value !== "object") {
    return false;
  }
  if (typeof value === "function" && !value.prototype) {
    return true;
  }
  try {
    reflectApply(value, null, badArrayLike$1);
  } catch (e) {
    if (e !== isCallableMarker) {
      return false;
    }
  }
  return !isES6ClassFn(value);
} : function isCallable2(value) {
  if (value === documentDotAll) {
    return true;
  }
  if (!value) {
    return false;
  }
  if (typeof value !== "function" && typeof value !== "object") {
    return false;
  }
  if (typeof value === "function" && !value.prototype) {
    return true;
  }
  if (hasToStringTag$2) {
    return tryFunctionObject(value);
  }
  if (isES6ClassFn(value)) {
    return false;
  }
  var strClass = toStr$3.call(value);
  return strClass === fnClass || strClass === genClass;
};
var IsCallable$2 = isCallable$2;
var has$5 = src;
var GetIntrinsic$l = getIntrinsic;
var $TypeError$c = GetIntrinsic$l("%TypeError%");
var Type$7 = Type$c;
var ToBoolean$1 = ToBoolean$2;
var IsCallable$1 = IsCallable$2;
var ToPropertyDescriptor$2 = function ToPropertyDescriptor(Obj) {
  if (Type$7(Obj) !== "Object") {
    throw new $TypeError$c("ToPropertyDescriptor requires an object");
  }
  var desc = {};
  if (has$5(Obj, "enumerable")) {
    desc["[[Enumerable]]"] = ToBoolean$1(Obj.enumerable);
  }
  if (has$5(Obj, "configurable")) {
    desc["[[Configurable]]"] = ToBoolean$1(Obj.configurable);
  }
  if (has$5(Obj, "value")) {
    desc["[[Value]]"] = Obj.value;
  }
  if (has$5(Obj, "writable")) {
    desc["[[Writable]]"] = ToBoolean$1(Obj.writable);
  }
  if (has$5(Obj, "get")) {
    var getter = Obj.get;
    if (typeof getter !== "undefined" && !IsCallable$1(getter)) {
      throw new $TypeError$c("getter must be a function");
    }
    desc["[[Get]]"] = getter;
  }
  if (has$5(Obj, "set")) {
    var setter = Obj.set;
    if (typeof setter !== "undefined" && !IsCallable$1(setter)) {
      throw new $TypeError$c("setter must be a function");
    }
    desc["[[Set]]"] = setter;
  }
  if ((has$5(desc, "[[Get]]") || has$5(desc, "[[Set]]")) && (has$5(desc, "[[Value]]") || has$5(desc, "[[Writable]]"))) {
    throw new $TypeError$c("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
  }
  return desc;
};
var GetIntrinsic$k = getIntrinsic;
var $TypeError$b = GetIntrinsic$k("%TypeError%");
var isPropertyDescriptor2 = isPropertyDescriptor$1;
var DefineOwnProperty$1 = DefineOwnProperty$2;
var FromPropertyDescriptor$1 = FromPropertyDescriptor$2;
var IsAccessorDescriptor2 = IsAccessorDescriptor$1;
var IsDataDescriptor$1 = IsDataDescriptor$2;
var IsPropertyKey$4 = IsPropertyKey$6;
var SameValue$1 = SameValue$2;
var ToPropertyDescriptor$1 = ToPropertyDescriptor$2;
var Type$6 = Type$c;
var DefinePropertyOrThrow$1 = function DefinePropertyOrThrow(O2, P2, desc) {
  if (Type$6(O2) !== "Object") {
    throw new $TypeError$b("Assertion failed: Type(O) is not Object");
  }
  if (!IsPropertyKey$4(P2)) {
    throw new $TypeError$b("Assertion failed: IsPropertyKey(P) is not true");
  }
  var Desc = isPropertyDescriptor2({
    Type: Type$6,
    IsDataDescriptor: IsDataDescriptor$1,
    IsAccessorDescriptor: IsAccessorDescriptor2
  }, desc) ? desc : ToPropertyDescriptor$1(desc);
  if (!isPropertyDescriptor2({
    Type: Type$6,
    IsDataDescriptor: IsDataDescriptor$1,
    IsAccessorDescriptor: IsAccessorDescriptor2
  }, Desc)) {
    throw new $TypeError$b("Assertion failed: Desc is not a valid Property Descriptor");
  }
  return DefineOwnProperty$1(IsDataDescriptor$1, SameValue$1, FromPropertyDescriptor$1, O2, P2, Desc);
};
var GetIntrinsic$j = GetIntrinsic$p;
var $construct = GetIntrinsic$j("%Reflect.construct%", true);
var DefinePropertyOrThrow2 = DefinePropertyOrThrow$1;
try {
  DefinePropertyOrThrow2({}, "", { "[[Get]]": function() {
  } });
} catch (e) {
  DefinePropertyOrThrow2 = null;
}
if (DefinePropertyOrThrow2 && $construct) {
  var isConstructorMarker = {};
  var badArrayLike = {};
  DefinePropertyOrThrow2(badArrayLike, "length", {
    "[[Get]]": function() {
      throw isConstructorMarker;
    },
    "[[Enumerable]]": true
  });
  IsConstructor$1.exports = function IsConstructor2(argument) {
    try {
      $construct(argument, badArrayLike);
    } catch (err) {
      return err === isConstructorMarker;
    }
  };
} else {
  IsConstructor$1.exports = function IsConstructor2(argument) {
    return typeof argument === "function" && !!argument.prototype;
  };
}
var GetIntrinsic$i = getIntrinsic;
var $abs$1 = GetIntrinsic$i("%Math.abs%");
var abs$3 = function abs(x2) {
  return $abs$1(x2);
};
var $floor$1 = Math.floor;
var floor$3 = function floor(x2) {
  return $floor$1(x2);
};
var $isNaN$2 = Number.isNaN || function(a) {
  return a !== a;
};
var _isFinite = Number.isFinite || function(x2) {
  return typeof x2 === "number" && !$isNaN$2(x2) && x2 !== Infinity && x2 !== -Infinity;
};
var abs$2 = abs$3;
var floor$2 = floor$3;
var $isNaN$1 = _isNaN;
var $isFinite$1 = _isFinite;
var IsInteger$1 = function IsInteger(argument) {
  if (typeof argument !== "number" || $isNaN$1(argument) || !$isFinite$1(argument)) {
    return false;
  }
  var absValue = abs$2(argument);
  return floor$2(absValue) === absValue;
};
var GetIntrinsic$h = getIntrinsic;
var $Array = GetIntrinsic$h("%Array%");
var $species = GetIntrinsic$h("%Symbol.species%", true);
var $TypeError$a = GetIntrinsic$h("%TypeError%");
var Get$3 = Get$4;
var IsArray$3 = IsArray$4;
var IsConstructor = IsConstructor$1.exports;
var IsInteger2 = IsInteger$1;
var Type$5 = Type$c;
var ArraySpeciesCreate$1 = function ArraySpeciesCreate(originalArray, length) {
  if (!IsInteger2(length) || length < 0) {
    throw new $TypeError$a("Assertion failed: length must be an integer >= 0");
  }
  var len = length === 0 ? 0 : length;
  var C2;
  var isArray2 = IsArray$3(originalArray);
  if (isArray2) {
    C2 = Get$3(originalArray, "constructor");
    if ($species && Type$5(C2) === "Object") {
      C2 = Get$3(C2, $species);
      if (C2 === null) {
        C2 = void 0;
      }
    }
  }
  if (typeof C2 === "undefined") {
    return $Array(len);
  }
  if (!IsConstructor(C2)) {
    throw new $TypeError$a("C must be a constructor");
  }
  return new C2(len);
};
var GetIntrinsic$g = getIntrinsic;
var $Math = GetIntrinsic$g("%Math%");
var $Number$1 = GetIntrinsic$g("%Number%");
var maxSafeInteger = $Number$1.MAX_SAFE_INTEGER || $Math.pow(2, 53) - 1;
var GetIntrinsic$f = getIntrinsic;
var callBound$3 = callBound$5;
var $TypeError$9 = GetIntrinsic$f("%TypeError%");
var IsArray$2 = IsArray$4;
var $apply = GetIntrinsic$f("%Reflect.apply%", true) || callBound$3("%Function.prototype.apply%");
var Call$1 = function Call(F2, V2) {
  var argumentsList = arguments.length > 2 ? arguments[2] : [];
  if (!IsArray$2(argumentsList)) {
    throw new $TypeError$9("Assertion failed: optional `argumentsList`, if provided, must be a List");
  }
  return $apply(F2, V2, argumentsList);
};
var GetIntrinsic$e = getIntrinsic;
var $gOPD$1 = GetIntrinsic$e("%Object.getOwnPropertyDescriptor%");
if ($gOPD$1) {
  try {
    $gOPD$1([], "length");
  } catch (e) {
    $gOPD$1 = null;
  }
}
var getOwnPropertyDescriptor = $gOPD$1;
var callBound$2 = callBound$5;
var hasSymbols$2 = shams();
var hasToStringTag$1 = hasSymbols$2 && !!Symbol.toStringTag;
var has$4;
var $exec;
var isRegexMarker;
var badStringifier;
if (hasToStringTag$1) {
  has$4 = callBound$2("Object.prototype.hasOwnProperty");
  $exec = callBound$2("RegExp.prototype.exec");
  isRegexMarker = {};
  var throwRegexMarker = function() {
    throw isRegexMarker;
  };
  badStringifier = {
    toString: throwRegexMarker,
    valueOf: throwRegexMarker
  };
  if (typeof Symbol.toPrimitive === "symbol") {
    badStringifier[Symbol.toPrimitive] = throwRegexMarker;
  }
}
var $toString = callBound$2("Object.prototype.toString");
var gOPD = Object.getOwnPropertyDescriptor;
var regexClass = "[object RegExp]";
var isRegex = hasToStringTag$1 ? function isRegex2(value) {
  if (!value || typeof value !== "object") {
    return false;
  }
  var descriptor = gOPD(value, "lastIndex");
  var hasLastIndexDataProperty = descriptor && has$4(descriptor, "value");
  if (!hasLastIndexDataProperty) {
    return false;
  }
  try {
    $exec(value, badStringifier);
  } catch (e) {
    return e === isRegexMarker;
  }
} : function isRegex3(value) {
  if (!value || typeof value !== "object" && typeof value !== "function") {
    return false;
  }
  return $toString(value) === regexClass;
};
var GetIntrinsic$d = getIntrinsic;
var $match = GetIntrinsic$d("%Symbol.match%", true);
var hasRegExpMatcher = isRegex;
var ToBoolean2 = ToBoolean$2;
var IsRegExp$1 = function IsRegExp(argument) {
  if (!argument || typeof argument !== "object") {
    return false;
  }
  if ($match) {
    var isRegExp2 = argument[$match];
    if (typeof isRegExp2 !== "undefined") {
      return ToBoolean2(isRegExp2);
    }
  }
  return hasRegExpMatcher(argument);
};
var GetIntrinsic$c = getIntrinsic;
var $gOPD = getOwnPropertyDescriptor;
var $TypeError$8 = GetIntrinsic$c("%TypeError%");
var callBound$1 = callBound$5;
var $isEnumerable = callBound$1("Object.prototype.propertyIsEnumerable");
var has$3 = src;
var IsArray$1 = IsArray$4;
var IsPropertyKey$3 = IsPropertyKey$6;
var IsRegExp2 = IsRegExp$1;
var ToPropertyDescriptor2 = ToPropertyDescriptor$2;
var Type$4 = Type$c;
var OrdinaryGetOwnProperty$1 = function OrdinaryGetOwnProperty(O2, P2) {
  if (Type$4(O2) !== "Object") {
    throw new $TypeError$8("Assertion failed: O must be an Object");
  }
  if (!IsPropertyKey$3(P2)) {
    throw new $TypeError$8("Assertion failed: P must be a Property Key");
  }
  if (!has$3(O2, P2)) {
    return void 0;
  }
  if (!$gOPD) {
    var arrayLength = IsArray$1(O2) && P2 === "length";
    var regexLastIndex = IsRegExp2(O2) && P2 === "lastIndex";
    return {
      "[[Configurable]]": !(arrayLength || regexLastIndex),
      "[[Enumerable]]": $isEnumerable(O2, P2),
      "[[Value]]": O2[P2],
      "[[Writable]]": true
    };
  }
  return ToPropertyDescriptor2($gOPD(O2, P2));
};
var isPrimitive$5 = function isPrimitive(value) {
  return value === null || typeof value !== "function" && typeof value !== "object";
};
var GetIntrinsic$b = getIntrinsic;
var $Object$1 = GetIntrinsic$b("%Object%");
var isPrimitive$4 = isPrimitive$5;
var $preventExtensions = $Object$1.preventExtensions;
var $isExtensible = $Object$1.isExtensible;
var IsExtensible$1 = $preventExtensions ? function IsExtensible(obj) {
  return !isPrimitive$4(obj) && $isExtensible(obj);
} : function IsExtensible2(obj) {
  return !isPrimitive$4(obj);
};
var GetIntrinsic$a = getIntrinsic;
var $TypeError$7 = GetIntrinsic$a("%TypeError%");
var DefineOwnProperty2 = DefineOwnProperty$2;
var FromPropertyDescriptor2 = FromPropertyDescriptor$2;
var OrdinaryGetOwnProperty2 = OrdinaryGetOwnProperty$1;
var IsDataDescriptor2 = IsDataDescriptor$2;
var IsExtensible3 = IsExtensible$1;
var IsPropertyKey$2 = IsPropertyKey$6;
var SameValue2 = SameValue$2;
var Type$3 = Type$c;
var CreateDataProperty$1 = function CreateDataProperty(O2, P2, V2) {
  if (Type$3(O2) !== "Object") {
    throw new $TypeError$7("Assertion failed: Type(O) is not Object");
  }
  if (!IsPropertyKey$2(P2)) {
    throw new $TypeError$7("Assertion failed: IsPropertyKey(P) is not true");
  }
  var oldDesc = OrdinaryGetOwnProperty2(O2, P2);
  var extensible = !oldDesc || IsExtensible3(O2);
  var immutable = oldDesc && (!oldDesc["[[Writable]]"] || !oldDesc["[[Configurable]]"]);
  if (immutable || !extensible) {
    return false;
  }
  return DefineOwnProperty2(IsDataDescriptor2, SameValue2, FromPropertyDescriptor2, O2, P2, {
    "[[Configurable]]": true,
    "[[Enumerable]]": true,
    "[[Value]]": V2,
    "[[Writable]]": true
  });
};
var GetIntrinsic$9 = getIntrinsic;
var $TypeError$6 = GetIntrinsic$9("%TypeError%");
var CreateDataProperty2 = CreateDataProperty$1;
var IsPropertyKey$1 = IsPropertyKey$6;
var Type$2 = Type$c;
var CreateDataPropertyOrThrow$1 = function CreateDataPropertyOrThrow(O2, P2, V2) {
  if (Type$2(O2) !== "Object") {
    throw new $TypeError$6("Assertion failed: Type(O) is not Object");
  }
  if (!IsPropertyKey$1(P2)) {
    throw new $TypeError$6("Assertion failed: IsPropertyKey(P) is not true");
  }
  var success = CreateDataProperty2(O2, P2, V2);
  if (!success) {
    throw new $TypeError$6("unable to create data property");
  }
  return success;
};
var GetIntrinsic$8 = getIntrinsic;
var $TypeError$5 = GetIntrinsic$8("%TypeError%");
var IsPropertyKey2 = IsPropertyKey$6;
var Type$1 = Type$c;
var HasProperty$1 = function HasProperty(O2, P2) {
  if (Type$1(O2) !== "Object") {
    throw new $TypeError$5("Assertion failed: `O` must be an Object");
  }
  if (!IsPropertyKey2(P2)) {
    throw new $TypeError$5("Assertion failed: `P` must be a Property Key");
  }
  return P2 in O2;
};
var GetIntrinsic$7 = getIntrinsic;
var $abs = GetIntrinsic$7("%Math.abs%");
var abs$1 = function abs2(x2) {
  return $abs(x2);
};
var $floor = Math.floor;
var floor$1 = function floor2(x2) {
  return $floor(x2);
};
var isPrimitive$3 = function isPrimitive2(value) {
  return value === null || typeof value !== "function" && typeof value !== "object";
};
var toStr$2 = Object.prototype.toString;
var isPrimitive$2 = isPrimitive$3;
var isCallable$1 = isCallable$2;
var ES5internalSlots = {
  "[[DefaultValue]]": function(O2) {
    var actualHint;
    if (arguments.length > 1) {
      actualHint = arguments[1];
    } else {
      actualHint = toStr$2.call(O2) === "[object Date]" ? String : Number;
    }
    if (actualHint === String || actualHint === Number) {
      var methods = actualHint === String ? ["toString", "valueOf"] : ["valueOf", "toString"];
      var value, i;
      for (i = 0; i < methods.length; ++i) {
        if (isCallable$1(O2[methods[i]])) {
          value = O2[methods[i]]();
          if (isPrimitive$2(value)) {
            return value;
          }
        }
      }
      throw new TypeError("No default value");
    }
    throw new TypeError("invalid [[DefaultValue]] hint supplied");
  }
};
var es5 = function ToPrimitive(input) {
  if (isPrimitive$2(input)) {
    return input;
  }
  if (arguments.length > 1) {
    return ES5internalSlots["[[DefaultValue]]"](input, arguments[1]);
  }
  return ES5internalSlots["[[DefaultValue]]"](input);
};
var ToPrimitive$3 = es5;
var ToPrimitive$2 = ToPrimitive$3;
var ToNumber$3 = function ToNumber(value) {
  var prim = ToPrimitive$2(value, Number);
  if (typeof prim !== "string") {
    return +prim;
  }
  var trimmed = prim.replace(/^[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+|[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+$/g, "");
  if (/^0[ob]|^[+-]0x/.test(trimmed)) {
    return NaN;
  }
  return +trimmed;
};
var sign = function sign2(number) {
  return number >= 0 ? 1 : -1;
};
var abs3 = abs$1;
var floor3 = floor$1;
var ToNumber$2 = ToNumber$3;
var $isNaN = _isNaN;
var $isFinite = _isFinite;
var $sign = sign;
var ToInteger$2 = function ToInteger(value) {
  var number = ToNumber$2(value);
  if ($isNaN(number)) {
    return 0;
  }
  if (number === 0 || !$isFinite(number)) {
    return number;
  }
  return $sign(number) * floor3(abs3(number));
};
var GetIntrinsic$6 = getIntrinsic;
var $test = GetIntrinsic$6("RegExp.prototype.test");
var callBind$1 = callBind$3.exports;
var regexTester$1 = function regexTester(regex) {
  return callBind$1($test, regex);
};
var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateGetDayCall(value) {
  try {
    getDay.call(value);
    return true;
  } catch (e) {
    return false;
  }
};
var toStr$1 = Object.prototype.toString;
var dateClass = "[object Date]";
var hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag;
var isDateObject = function isDateObject2(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  return hasToStringTag ? tryDateObject(value) : toStr$1.call(value) === dateClass;
};
var isSymbol$1 = { exports: {} };
var toStr = Object.prototype.toString;
var hasSymbols$1 = hasSymbols$4();
if (hasSymbols$1) {
  var symToStr = Symbol.prototype.toString;
  var symStringRegex = /^Symbol\(.*\)$/;
  var isSymbolObject = function isRealSymbolObject(value) {
    if (typeof value.valueOf() !== "symbol") {
      return false;
    }
    return symStringRegex.test(symToStr.call(value));
  };
  isSymbol$1.exports = function isSymbol2(value) {
    if (typeof value === "symbol") {
      return true;
    }
    if (toStr.call(value) !== "[object Symbol]") {
      return false;
    }
    try {
      return isSymbolObject(value);
    } catch (e) {
      return false;
    }
  };
} else {
  isSymbol$1.exports = function isSymbol2(value) {
    return false;
  };
}
var hasSymbols2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol";
var isPrimitive$1 = isPrimitive$3;
var isCallable3 = isCallable$2;
var isDate = isDateObject;
var isSymbol = isSymbol$1.exports;
var ordinaryToPrimitive = function OrdinaryToPrimitive(O2, hint) {
  if (typeof O2 === "undefined" || O2 === null) {
    throw new TypeError("Cannot call method on " + O2);
  }
  if (typeof hint !== "string" || hint !== "number" && hint !== "string") {
    throw new TypeError('hint must be "string" or "number"');
  }
  var methodNames = hint === "string" ? ["toString", "valueOf"] : ["valueOf", "toString"];
  var method, result, i;
  for (i = 0; i < methodNames.length; ++i) {
    method = O2[methodNames[i]];
    if (isCallable3(method)) {
      result = method.call(O2);
      if (isPrimitive$1(result)) {
        return result;
      }
    }
  }
  throw new TypeError("No default value");
};
var GetMethod = function GetMethod2(O2, P2) {
  var func2 = O2[P2];
  if (func2 !== null && typeof func2 !== "undefined") {
    if (!isCallable3(func2)) {
      throw new TypeError(func2 + " returned for property " + P2 + " of object " + O2 + " is not a function");
    }
    return func2;
  }
  return void 0;
};
var es2015 = function ToPrimitive2(input) {
  if (isPrimitive$1(input)) {
    return input;
  }
  var hint = "default";
  if (arguments.length > 1) {
    if (arguments[1] === String) {
      hint = "string";
    } else if (arguments[1] === Number) {
      hint = "number";
    }
  }
  var exoticToPrim;
  if (hasSymbols2) {
    if (Symbol.toPrimitive) {
      exoticToPrim = GetMethod(input, Symbol.toPrimitive);
    } else if (isSymbol(input)) {
      exoticToPrim = Symbol.prototype.valueOf;
    }
  }
  if (typeof exoticToPrim !== "undefined") {
    var result = exoticToPrim.call(input, hint);
    if (isPrimitive$1(result)) {
      return result;
    }
    throw new TypeError("unable to convert exotic object to primitive");
  }
  if (hint === "default" && (isDate(input) || isSymbol(input))) {
    hint = "string";
  }
  return ordinaryToPrimitive(input, hint === "default" ? "number" : hint);
};
var toPrimitive = es2015;
var ToPrimitive$1 = function ToPrimitive3(input) {
  if (arguments.length > 1) {
    return toPrimitive(input, arguments[1]);
  }
  return toPrimitive(input);
};
var GetIntrinsic$5 = getIntrinsic;
var $TypeError$4 = GetIntrinsic$5("%TypeError%");
var $Number = GetIntrinsic$5("%Number%");
var $RegExp = GetIntrinsic$5("%RegExp%");
var $parseInteger = GetIntrinsic$5("%parseInt%");
var callBound = callBound$5;
var regexTester2 = regexTester$1;
var isPrimitive3 = isPrimitive$5;
var $strSlice = callBound("String.prototype.slice");
var isBinary = regexTester2(/^0b[01]+$/i);
var isOctal = regexTester2(/^0o[0-7]+$/i);
var isInvalidHexLiteral = regexTester2(/^[-+]0x[0-9a-f]+$/i);
var nonWS = ["\x85", "\u200B", "\uFFFE"].join("");
var nonWSregex = new $RegExp("[" + nonWS + "]", "g");
var hasNonWS = regexTester2(nonWSregex);
var ws = [
  "	\n\v\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003",
  "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028",
  "\u2029\uFEFF"
].join("");
var trimRegex = new RegExp("(^[" + ws + "]+)|([" + ws + "]+$)", "g");
var $replace = callBound("String.prototype.replace");
var $trim = function(value) {
  return $replace(value, trimRegex, "");
};
var ToPrimitive4 = ToPrimitive$1;
var ToNumber$1 = function ToNumber2(argument) {
  var value = isPrimitive3(argument) ? argument : ToPrimitive4(argument, $Number);
  if (typeof value === "symbol") {
    throw new $TypeError$4("Cannot convert a Symbol value to a number");
  }
  if (typeof value === "bigint") {
    throw new $TypeError$4("Conversion from 'BigInt' to 'number' is not allowed.");
  }
  if (typeof value === "string") {
    if (isBinary(value)) {
      return ToNumber2($parseInteger($strSlice(value, 2), 2));
    } else if (isOctal(value)) {
      return ToNumber2($parseInteger($strSlice(value, 2), 8));
    } else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
      return NaN;
    } else {
      var trimmed = $trim(value);
      if (trimmed !== value) {
        return ToNumber2(trimmed);
      }
    }
  }
  return $Number(value);
};
var ES5ToInteger = ToInteger$2;
var ToNumber3 = ToNumber$1;
var ToInteger$1 = function ToInteger2(value) {
  var number = ToNumber3(value);
  if (number !== 0) {
    number = ES5ToInteger(number);
  }
  return number === 0 ? 0 : number;
};
var MAX_SAFE_INTEGER$1 = maxSafeInteger;
var ToInteger3 = ToInteger$1;
var ToLength$2 = function ToLength(argument) {
  var len = ToInteger3(argument);
  if (len <= 0) {
    return 0;
  }
  if (len > MAX_SAFE_INTEGER$1) {
    return MAX_SAFE_INTEGER$1;
  }
  return len;
};
var GetIntrinsic$4 = getIntrinsic;
var $TypeError$3 = GetIntrinsic$4("%TypeError%");
var Get$2 = Get$4;
var ToLength$1 = ToLength$2;
var Type3 = Type$c;
var LengthOfArrayLike$1 = function LengthOfArrayLike(obj) {
  if (Type3(obj) !== "Object") {
    throw new $TypeError$3("Assertion failed: `obj` must be an Object");
  }
  return ToLength$1(Get$2(obj, "length"));
};
var GetIntrinsic$3 = getIntrinsic;
var $String = GetIntrinsic$3("%String%");
var $TypeError$2 = GetIntrinsic$3("%TypeError%");
var ToString$1 = function ToString(argument) {
  if (typeof argument === "symbol") {
    throw new $TypeError$2("Cannot convert a Symbol value to a string");
  }
  return $String(argument);
};
var GetIntrinsic$2 = getIntrinsic;
var $TypeError$1 = GetIntrinsic$2("%TypeError%");
var MAX_SAFE_INTEGER = maxSafeInteger;
var Call2 = Call$1;
var CreateDataPropertyOrThrow2 = CreateDataPropertyOrThrow$1;
var Get$1 = Get$4;
var HasProperty2 = HasProperty$1;
var IsArray2 = IsArray$4;
var LengthOfArrayLike2 = LengthOfArrayLike$1;
var ToString2 = ToString$1;
var FlattenIntoArray$1 = function FlattenIntoArray(target, source, sourceLen, start, depth) {
  var mapperFunction;
  if (arguments.length > 5) {
    mapperFunction = arguments[5];
  }
  var targetIndex = start;
  var sourceIndex = 0;
  while (sourceIndex < sourceLen) {
    var P2 = ToString2(sourceIndex);
    var exists = HasProperty2(source, P2);
    if (exists === true) {
      var element = Get$1(source, P2);
      if (typeof mapperFunction !== "undefined") {
        if (arguments.length <= 6) {
          throw new $TypeError$1("Assertion failed: thisArg is required when mapperFunction is provided");
        }
        element = Call2(mapperFunction, arguments[6], [element, sourceIndex, source]);
      }
      var shouldFlatten = false;
      if (depth > 0) {
        shouldFlatten = IsArray2(element);
      }
      if (shouldFlatten) {
        var elementLen = LengthOfArrayLike2(element);
        targetIndex = FlattenIntoArray(target, element, elementLen, targetIndex, depth - 1);
      } else {
        if (targetIndex >= MAX_SAFE_INTEGER) {
          throw new $TypeError$1("index too large");
        }
        CreateDataPropertyOrThrow2(target, ToString2(targetIndex), element);
        targetIndex += 1;
      }
    }
    sourceIndex += 1;
  }
  return targetIndex;
};
var GetIntrinsic$1 = getIntrinsic;
var $TypeError = GetIntrinsic$1("%TypeError%");
var CheckObjectCoercible = function CheckObjectCoercible2(value, optMessage) {
  if (value == null) {
    throw new $TypeError(optMessage || "Cannot call method on " + value);
  }
  return value;
};
var RequireObjectCoercible$1 = CheckObjectCoercible;
var GetIntrinsic2 = getIntrinsic;
var $Object = GetIntrinsic2("%Object%");
var RequireObjectCoercible = RequireObjectCoercible$1;
var ToObject$1 = function ToObject(value) {
  RequireObjectCoercible(value);
  return $Object(value);
};
var ArraySpeciesCreate2 = ArraySpeciesCreate$1;
var FlattenIntoArray2 = FlattenIntoArray$1;
var Get2 = Get$4;
var IsCallable = IsCallable$2;
var ToLength2 = ToLength$2;
var ToObject2 = ToObject$1;
var implementation$2 = function flatMap(mapperFunction) {
  var O2 = ToObject2(this);
  var sourceLen = ToLength2(Get2(O2, "length"));
  if (!IsCallable(mapperFunction)) {
    throw new TypeError("mapperFunction must be a function");
  }
  var T2;
  if (arguments.length > 1) {
    T2 = arguments[1];
  }
  var A2 = ArraySpeciesCreate2(O2, 0);
  FlattenIntoArray2(A2, O2, sourceLen, 0, 1, mapperFunction, T2);
  return A2;
};
var implementation$1 = implementation$2;
var polyfill$1 = function getPolyfill() {
  return Array.prototype.flatMap || implementation$1;
};
var define$1 = defineProperties_1;
var getPolyfill$1 = polyfill$1;
var shim$1 = function shimFlatMap() {
  var polyfill2 = getPolyfill$1();
  define$1(Array.prototype, { flatMap: polyfill2 }, { flatMap: function() {
    return Array.prototype.flatMap !== polyfill2;
  } });
  return polyfill2;
};
var define = defineProperties_1;
var callBind = callBind$3.exports;
var implementation = implementation$2;
var getPolyfill2 = polyfill$1;
var polyfill = getPolyfill2();
var shim = shim$1;
var boundFlatMap = callBind(polyfill);
define(boundFlatMap, {
  getPolyfill: getPolyfill2,
  implementation,
  shim
});
var array_prototype_flatmap = boundFlatMap;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p2 in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p2))
        d2[p2] = b2[p2];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t2[p2] = s[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t2 = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e.indexOf(p2) < 0)
      t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
}
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t2[0] & 1)
      throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f, y2, t2, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
          return t2;
        if (y2 = 0, t2)
          op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t2[1]) {
              _.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _.label < t2[2]) {
              _.label = t2[2];
              _.ops.push(op);
              break;
            }
            if (t2[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y2 = 0;
      } finally {
        f = t2 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __values(o3) {
  var s = typeof Symbol === "function" && Symbol.iterator, m2 = s && o3[s], i = 0;
  if (m2)
    return m2.call(o3);
  if (o3 && typeof o3.length === "number")
    return {
      next: function() {
        if (o3 && i >= o3.length)
          o3 = void 0;
        return { value: o3 && o3[i++], done: !o3 };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o3, n2) {
  var m2 = typeof Symbol === "function" && o3[Symbol.iterator];
  if (!m2)
    return o3;
  var i = m2.call(o3), r2, ar = [], e;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r2 = i.next()).done)
      ar.push(r2.value);
  } catch (error2) {
    e = { error: error2 };
  } finally {
    try {
      if (r2 && !r2.done && (m2 = i["return"]))
        m2.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function set(point, value, map2) {
  var _a, _b;
  return __assign(__assign({}, map2), (_a = {}, _a[point.row] = __assign(__assign({}, map2[point.row]), (_b = {}, _b[point.column] = value, _b)), _a));
}
function unset(_a, map2) {
  var _b;
  var row = _a.row, column = _a.column;
  if (!(row in map2) || !(column in map2[row])) {
    return map2;
  }
  var _c = map2, _d = String(row), _e = _c[_d], _f = String(column);
  _e[_f];
  var nextRow = __rest(_e, [typeof _f === "symbol" ? _f : _f + ""]), nextMap = __rest(_c, [typeof _d === "symbol" ? _d : _d + ""]);
  if (Object.keys(nextRow).length === 0) {
    return nextMap;
  }
  return __assign(__assign({}, nextMap), (_b = {}, _b[row] = nextRow, _b));
}
function get(point, map2) {
  return map2[point.row] && map2[point.row][point.column];
}
function has(point, map2) {
  return point.row in map2 && point.column in map2[point.row];
}
var EMPTY = {};
function from(pairs) {
  return pairs.reduce(function(acc, _a) {
    var _b = __read(_a, 2), point = _b[0], value = _b[1];
    return set(point, value, acc);
  }, EMPTY);
}
function fromMatrix(matrix) {
  return matrix.reduce(function(rowAcc, data, row) {
    return data.reduce(function(colAcc, cell, column) {
      return cell ? set({ row, column }, cell, colAcc) : colAcc;
    }, rowAcc);
  }, EMPTY);
}
function size(map2) {
  var acc = 0;
  var _map_keys = Object.keys(map2);
  for (var i = 0; i < _map_keys.length; i++) {
    var row = Number(_map_keys[i]);
    var columns = map2[row];
    acc += Object.keys(columns).length;
  }
  return acc;
}
function reduce(func2, map2, initialValue) {
  var acc = initialValue;
  var _map_keys = Object.keys(map2);
  for (var i = 0; i < _map_keys.length; i++) {
    var row = Number(_map_keys[i]);
    var columns = map2[row];
    var _columns_keys = Object.keys(columns);
    for (var j = 0; j < _columns_keys.length; j++) {
      var column = Number(_columns_keys[j]);
      var value = columns[column];
      acc = func2(acc, value, { row, column });
    }
  }
  return acc;
}
function map(func2, map2) {
  return reduce(function(acc, value, point) {
    return set(point, func2(value), acc);
  }, map2, from([]));
}
function filter(predicate, map2) {
  return reduce(function(acc, value, point) {
    if (predicate(value, point)) {
      return set(point, value, acc);
    }
    return acc;
  }, map2, from([]));
}
var add = function(set$12, point) {
  return set(point, true, set$12);
};
var remove = function(set2, point) {
  return unset(point, set2);
};
var has$1 = function(set2, point) {
  return has(point, set2);
};
var size$1 = function(set2) {
  return size(set2);
};
function reduce$1(func2, set2, initialValue) {
  return reduce(function(acc, _, point) {
    return func2(acc, point);
  }, set2, initialValue);
}
function filter$1(func2, set2) {
  return filter(function(_, point) {
    return func2(point);
  }, set2);
}
var minKey = function(object) {
  return Math.min.apply(Math, __spread(Object.keys(object)));
};
function min(set2) {
  var row = minKey(set2);
  return { row, column: minKey(set2[row]) };
}
var maxKey = function(object) {
  return Math.max.apply(Math, __spread(Object.keys(object)));
};
function max(set2) {
  var row = maxKey(set2);
  return { row, column: maxKey(set2[row]) };
}
function from$1(points) {
  return points.reduce(add, from([]));
}
function toArray(set2) {
  return reduce$1(function(acc, point) {
    return __spread(acc, [point]);
  }, set2, []);
}
var NO_EDGE = {
  left: false,
  right: false,
  top: false,
  bottom: false
};
function onEdge(set2, point) {
  if (!has$1(set2, point)) {
    return NO_EDGE;
  }
  var hasNot = function(rowDelta, columnDelta) {
    return !has$1(set2, {
      row: point.row + rowDelta,
      column: point.column + columnDelta
    });
  };
  return {
    left: hasNot(0, -1),
    right: hasNot(0, 1),
    top: hasNot(-1, 0),
    bottom: hasNot(1, 0)
  };
}
function getEdgeValue(set2, field, delta) {
  var compare = Math.sign(delta) === -1 ? Math.min : Math.max;
  if (size$1(set2) === 0) {
    throw new Error("getEdgeValue() should never be called with an empty set");
  }
  var result = reduce$1(function(acc, point) {
    if (acc === null) {
      return point[field];
    }
    return compare(acc, point[field]);
  }, set2, null);
  if (result === null) {
    throw new Error("Unexpected value");
  }
  return result;
}
function extendEdge(set2, field, delta) {
  var oppositeField = field === "row" ? "column" : "row";
  var edgeValue = getEdgeValue(set2, field, delta);
  return reduce$1(function(acc, point) {
    var _a;
    if (point[field] === edgeValue) {
      return add(acc, (_a = {}, _a[field] = edgeValue + delta, _a[oppositeField] = point[oppositeField], _a));
    }
    return acc;
  }, set2, set2);
}
function shrinkEdge(set2, field, delta) {
  var edgeValue = getEdgeValue(set2, field, delta);
  return reduce$1(function(acc, point) {
    if (point[field] === edgeValue) {
      return remove(acc, point);
    }
    return acc;
  }, set2, set2);
}
var moveCursorToEnd = function(el) {
  el.selectionStart = el.selectionEnd = el.value.length;
};
function memoizeOne(fn) {
  var lastArgument;
  var lastResult;
  return function(argument) {
    if (lastArgument !== argument) {
      lastArgument = argument;
      lastResult = fn.call(this, argument);
    }
    return lastResult;
  };
}
function range(end, start, step) {
  if (start === void 0) {
    start = 0;
  }
  if (step === void 0) {
    step = 1;
  }
  var array = [];
  if (Math.sign(end - start) === -1) {
    for (var element = start; element > end; element -= step) {
      array.push(element);
    }
    return array;
  }
  for (var element = start; element < end; element += step) {
    array.push(element);
  }
  return array;
}
function updateData(data, cellDescriptor) {
  var row = data[cellDescriptor.row];
  var nextData = __spread(data);
  var nextRow = row ? __spread(row) : [];
  nextRow[cellDescriptor.column] = cellDescriptor.data;
  nextData[cellDescriptor.row] = nextRow;
  return nextData;
}
function isActive(active, _a) {
  var row = _a.row, column = _a.column;
  return Boolean(active && column === active.column && row === active.row);
}
var getOffsetRect = function(element) {
  return {
    width: element.offsetWidth,
    height: element.offsetHeight,
    left: element.offsetLeft,
    top: element.offsetTop
  };
};
var writeTextToClipboard = function(event, data) {
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", data);
  }
};
var readTextFromClipboard = function(event) {
  if (window.clipboardData && window.clipboardData.getData) {
    return window.clipboardData.getData("Text");
  }
  if (event.clipboardData && event.clipboardData.getData) {
    return event.clipboardData.getData("text/plain");
  }
  return "";
};
var getCellDimensions = function(point, state) {
  var rowDimensions = state.rowDimensions[point.row];
  var columnDimensions = state.columnDimensions[point.column];
  return rowDimensions && columnDimensions && __assign(__assign({}, rowDimensions), columnDimensions);
};
function getComputedValue(_a) {
  var cell = _a.cell, formulaParser = _a.formulaParser;
  if (cell === void 0) {
    return null;
  }
  var rawValue = cell.value;
  if (typeof rawValue === "string" && rawValue.startsWith("=")) {
    var _b = formulaParser.parse(rawValue.slice(1)), result = _b.result, error2 = _b.error;
    return error2 || result;
  }
  return rawValue;
}
function get$1(row, column, matrix) {
  var columns = matrix[row];
  if (columns === void 0) {
    return void 0;
  }
  return columns[column];
}
function slice(startPoint, endPoint, matrix) {
  var sliced = [];
  var columns = endPoint.column - startPoint.column;
  for (var row = startPoint.row; row <= endPoint.row; row++) {
    var slicedRow = row - startPoint.row;
    sliced[slicedRow] = sliced[slicedRow] || Array(columns);
    for (var column = startPoint.column; column <= endPoint.column; column++) {
      sliced[slicedRow][column - startPoint.column] = get$1(row, column, matrix);
    }
  }
  return sliced;
}
function set$1(row, column, value, matrix) {
  var nextMatrix = __spread(matrix);
  var firstRow = matrix[0];
  var nextFirstRow = firstRow ? __spread(firstRow) : [];
  if (nextFirstRow.length - 1 < column) {
    nextFirstRow[column] = void 0;
    nextMatrix[0] = nextFirstRow;
  }
  var nextRow = matrix[row] ? __spread(matrix[row]) : [];
  nextRow[column] = value;
  nextMatrix[row] = nextRow;
  return nextMatrix;
}
function mutableSet(row, column, value, matrix) {
  var firstRow = matrix[0];
  if (!firstRow) {
    firstRow = [];
    matrix[0] = firstRow;
  }
  if (!(row in matrix)) {
    matrix[row] = [];
  }
  if (!(column in firstRow)) {
    firstRow[column] = void 0;
  }
  matrix[row][column] = value;
}
function unset$1(row, column, matrix) {
  if (!has$2(row, column, matrix)) {
    return matrix;
  }
  var nextMatrix = __spread(matrix);
  var nextRow = __spread(matrix[row]);
  nextRow[column] = void 0;
  nextMatrix[row] = nextRow;
  return nextMatrix;
}
function map$1(func2, matrix) {
  var e_1, _a, e_2, _b;
  var newMatrix = [];
  try {
    for (var _c = __values(matrix.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
      var _e = __read(_d.value, 2), row = _e[0], values = _e[1];
      try {
        for (var _f = (e_2 = void 0, __values(values.entries())), _g = _f.next(); !_g.done; _g = _f.next()) {
          var _h = __read(_g.value, 2), column = _h[0], value = _h[1];
          var point = { row, column };
          mutableSet(row, column, func2(value, point), newMatrix);
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (_g && !_g.done && (_b = _f["return"]))
            _b.call(_f);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (_d && !_d.done && (_a = _c["return"]))
        _a.call(_c);
    } finally {
      if (e_1)
        throw e_1.error;
    }
  }
  return newMatrix;
}
function join(matrix, horizontalSeparator, verticalSeparator) {
  if (horizontalSeparator === void 0) {
    horizontalSeparator = "	";
  }
  if (verticalSeparator === void 0) {
    verticalSeparator = "\n";
  }
  var joined = "";
  var _a = getSize(matrix), rows = _a.rows, columns = _a.columns;
  for (var row = 0; row < rows; row++) {
    if (row) {
      joined += verticalSeparator;
    }
    for (var column = 0; column < columns; column++) {
      if (column) {
        joined += horizontalSeparator;
      }
      if (matrix[row] && column in matrix[row]) {
        joined += String(matrix[row][column]);
      }
    }
  }
  return joined;
}
function split(csv, transform, horizontalSeparator, verticalSeparator) {
  if (horizontalSeparator === void 0) {
    horizontalSeparator = "	";
  }
  if (verticalSeparator === void 0) {
    verticalSeparator = /\r\n|\n|\r/;
  }
  return csv.split(verticalSeparator).map(function(row) {
    return row.split(horizontalSeparator).map(transform);
  });
}
function has$2(row, column, matrix) {
  var firstRow = matrix[0];
  return firstRow && row >= 0 && column >= 0 && Number.isInteger(row) && Number.isInteger(column) && column < firstRow.length && row < matrix.length;
}
function getSize(matrix) {
  var firstRow = matrix[0];
  return {
    columns: firstRow ? firstRow.length : 0,
    rows: matrix.length
  };
}
function padRows(matrix, totalRows) {
  var _a = getSize(matrix), rows = _a.rows, columns = _a.columns;
  if (rows >= totalRows) {
    return matrix;
  }
  var missingRows = totalRows - rows;
  var emptyRow = Array(columns).fill(void 0);
  var emptyRows = Array(missingRows).fill(emptyRow);
  return __spread(matrix, emptyRows);
}
function range$1(endPoint, startPoint) {
  var points = [];
  var columnsRange = startPoint.column !== endPoint.column ? range(endPoint.column, startPoint.column) : startPoint.row !== endPoint.row ? [startPoint.column] : [];
  var rowsRange = startPoint.row !== endPoint.row ? range(endPoint.row, startPoint.row) : startPoint.column !== endPoint.column ? [startPoint.row] : [];
  for (var i = 0; i < rowsRange.length; i++) {
    var row = rowsRange[i];
    for (var j = 0; j < columnsRange.length; j++) {
      var column = columnsRange[j];
      points.push({ row, column });
    }
  }
  return points;
}
var inclusiveRange = function(endPoint, startPoint) {
  return range$1({
    row: endPoint.row + Math.sign(endPoint.row - startPoint.row),
    column: endPoint.column + Math.sign(endPoint.column - startPoint.column)
  }, startPoint);
};
function toArray$1(matrix, transform) {
  var array = [];
  for (var row = 0; row < matrix.length; row++) {
    for (var column = 0; column < matrix.length; column++) {
      var value = matrix[row][column];
      array.push(transform ? transform(value, { row, column }) : value);
    }
  }
  return array;
}
var setData = function(state, data) {
  var nextActive = state.active && has$2(state.active.row, state.active.column, data) ? state.active : null;
  var nextSelected = filter$1(function(point) {
    return has$2(point.row, point.column, data);
  }, state.selected);
  var nextBindings = map(function(bindings) {
    return filter$1(function(point) {
      return has$2(point.row, point.column, data);
    }, bindings);
  }, filter(function(_, point) {
    return has$2(point.row, point.column, data);
  }, state.bindings));
  return {
    data,
    active: nextActive,
    selected: nextSelected,
    bindings: nextBindings
  };
};
var select = function(state, cellPointer) {
  if (state.active && !isActive(state.active, cellPointer)) {
    return {
      selected: from$1(inclusiveRange({ row: cellPointer.row, column: cellPointer.column }, { row: state.active.row, column: state.active.column })),
      mode: "view"
    };
  }
  return null;
};
var activate = function(state, cellPointer) {
  return {
    selected: from$1([cellPointer]),
    active: cellPointer,
    mode: isActive(state.active, cellPointer) ? "edit" : "view"
  };
};
function setCellData(state, active, data, bindings) {
  if (isActiveReadOnly(state)) {
    return null;
  }
  return {
    mode: "edit",
    data: updateData(state.data, __assign(__assign({}, active), { data })),
    lastChanged: active,
    bindings: set(active, from$1(bindings), state.bindings)
  };
}
function setCellDimensions(state, point, dimensions) {
  var _a, _b;
  var prevRowDimensions = state.rowDimensions[point.row];
  var prevColumnDimensions = state.columnDimensions[point.column];
  if (prevRowDimensions && prevColumnDimensions && prevRowDimensions.top === dimensions.top && prevRowDimensions.height === dimensions.height && prevColumnDimensions.left === dimensions.left && prevColumnDimensions.width === dimensions.width) {
    return null;
  }
  return {
    rowDimensions: __assign(__assign({}, state.rowDimensions), (_a = {}, _a[point.row] = { top: dimensions.top, height: dimensions.height }, _a)),
    columnDimensions: __assign(__assign({}, state.columnDimensions), (_b = {}, _b[point.column] = { left: dimensions.left, width: dimensions.width }, _b))
  };
}
function copy(state) {
  return {
    copied: reduce$1(function(acc, point) {
      var value = get$1(point.row, point.column, state.data);
      return value === void 0 ? acc : set(point, value, acc);
    }, state.selected, from([])),
    cut: false,
    hasPasted: false
  };
}
function cut(state) {
  return __assign(__assign({}, copy(state)), { cut: true });
}
function paste(state, text2) {
  return __awaiter(this, void 0, void 0, function() {
    var active, copiedMatrix, copied, minPoint, requiredRows, paddedData, _a, data, selected, commit2;
    return __generator(this, function(_b) {
      active = state.active;
      if (!text2 || !active) {
        return [2, null];
      }
      copiedMatrix = split(text2, function(value) {
        return { value };
      });
      copied = fromMatrix(copiedMatrix);
      minPoint = min(copied);
      requiredRows = active.row + getSize(copiedMatrix).rows;
      paddedData = padRows(state.data, requiredRows);
      _a = reduce(function(acc, value, _a2) {
        var row = _a2.row, column = _a2.column;
        var commit3 = acc.commit || [];
        var nextRow = row - minPoint.row + active.row;
        var nextColumn = column - minPoint.column + active.column;
        var nextData = state.cut ? unset$1(row, column, acc.data) : acc.data;
        if (state.cut) {
          commit3 = __spread(commit3, [{ prevCell: value, nextCell: null }]);
        }
        if (!has$2(nextRow, nextColumn, paddedData)) {
          return { data: nextData, selected: acc.selected, commit: commit3 };
        }
        var currentValue = get$1(nextRow, nextColumn, nextData) || null;
        commit3 = __spread(commit3, [
          {
            prevCell: currentValue,
            nextCell: value
          }
        ]);
        return {
          data: set$1(nextRow, nextColumn, __assign(__assign({}, currentValue), value), nextData),
          selected: add(acc.selected, {
            row: nextRow,
            column: nextColumn
          }),
          commit: commit3
        };
      }, copied, { data: paddedData, selected: from$1([]), commit: [] }), data = _a.data, selected = _a.selected, commit2 = _a.commit;
      return [2, {
        data,
        selected,
        cut: false,
        hasPasted: true,
        mode: "view",
        lastCommit: commit2
      }];
    });
  });
}
var edit = function(state) {
  if (isActiveReadOnly(state)) {
    return null;
  }
  return { mode: "edit" };
};
var view = function() {
  return {
    mode: "view"
  };
};
var clear = function(state) {
  if (!state.active) {
    return null;
  }
  var changes = toArray(state.selected).map(function(point) {
    var cell = get$1(point.row, point.column, state.data);
    return {
      prevCell: cell || null,
      nextCell: null
    };
  });
  return __assign({ data: reduce$1(function(acc, point) {
    return updateData(acc, __assign(__assign({}, point), { data: void 0 }));
  }, state.selected, state.data) }, commit(state, changes));
};
var go = function(rowDelta, columnDelta) {
  return function(state) {
    if (!state.active) {
      return null;
    }
    var nextActive = {
      row: state.active.row + rowDelta,
      column: state.active.column + columnDelta
    };
    if (!has$2(nextActive.row, nextActive.column, state.data)) {
      return { mode: "view" };
    }
    return {
      active: nextActive,
      selected: from$1([nextActive]),
      mode: "view"
    };
  };
};
var modifyEdge = function(field, delta) {
  return function(state, event) {
    var _a;
    var active = state.active;
    if (!active) {
      return null;
    }
    var edgeOffsets = has$1(state.selected, __assign(__assign({}, active), (_a = {}, _a[field] = active[field] + delta * -1, _a)));
    var nextSelected = edgeOffsets ? shrinkEdge(state.selected, field, delta * -1) : extendEdge(state.selected, field, delta);
    return {
      selected: filter$1(function(point) {
        return has$2(point.row, point.column, state.data);
      }, nextSelected)
    };
  };
};
var blur = function() {
  return {
    active: null
  };
};
var keyDownHandlers = {
  ArrowUp: go(-1, 0),
  ArrowDown: go(1, 0),
  ArrowLeft: go(0, -1),
  ArrowRight: go(0, 1),
  Tab: go(0, 1),
  Enter: edit,
  Backspace: clear,
  Escape: blur
};
var editKeyDownHandlers = {
  Escape: view,
  Tab: keyDownHandlers.Tab,
  Enter: keyDownHandlers.ArrowDown
};
var editShiftKeyDownHandlers = {
  Tab: go(0, -1)
};
var shiftKeyDownHandlers = {
  ArrowUp: modifyEdge("row", -1),
  ArrowDown: modifyEdge("row", 1),
  ArrowLeft: modifyEdge("column", -1),
  ArrowRight: modifyEdge("column", 1),
  Tab: go(0, -1)
};
var shiftMetaKeyDownHandlers = {};
var metaKeyDownHandlers = {};
function getActive(state) {
  var activeCell = state.active && get$1(state.active.row, state.active.column, state.data);
  return activeCell || null;
}
var isActiveReadOnly = function(state) {
  var activeCell = getActive(state);
  return Boolean(activeCell && activeCell.readOnly);
};
function keyPress(state, event) {
  if (isActiveReadOnly(state) || event.metaKey) {
    return null;
  }
  if (state.mode === "view" && state.active) {
    return { mode: "edit" };
  }
  return null;
}
function getKeyDownHandler(state, event) {
  var key = event.key;
  var handlers;
  if (state.mode === "edit") {
    if (event.shiftKey) {
      handlers = editShiftKeyDownHandlers;
    } else {
      handlers = editKeyDownHandlers;
    }
  } else if (event.shiftKey && event.metaKey) {
    handlers = shiftMetaKeyDownHandlers;
  } else if (event.shiftKey) {
    handlers = shiftKeyDownHandlers;
  } else if (event.metaKey) {
    handlers = metaKeyDownHandlers;
  } else {
    handlers = keyDownHandlers;
  }
  return handlers[key];
}
function keyDown(state, event) {
  var handler = getKeyDownHandler(state, event);
  if (handler) {
    return handler(state, event);
  }
  return null;
}
function dragStart(state) {
  return { dragging: true };
}
function dragEnd(state) {
  return { dragging: false };
}
function commit(state, changes) {
  return { lastCommit: changes };
}
var Table = function(_a) {
  var children = _a.children, columns = _a.columns, hideColumnIndicators = _a.hideColumnIndicators;
  var columnCount = columns + (hideColumnIndicators ? 0 : 1);
  var columnNodes = range(columnCount).map(function(i) {
    return react.exports.createElement("col", { key: i });
  });
  return react.exports.createElement("table", { className: "Spreadsheet__table" }, react.exports.createElement("colgroup", null, columnNodes), react.exports.createElement("tbody", null, children));
};
var Row = "tr";
function CornerIndicator(props) {
  return react.exports.createElement("th", { className: "Spreadsheet__header" });
}
var ColumnIndicator = function(_a) {
  var column = _a.column, label = _a.label;
  return react.exports.createElement("th", { className: "Spreadsheet__header" }, label !== void 0 ? label : columnIndexToLabel(String(column)));
};
var RowIndicator = function(_a) {
  var row = _a.row, label = _a.label;
  return react.exports.createElement("th", { className: "Spreadsheet__header" }, label !== void 0 ? label : row + 1);
};
var Cell = function(_a) {
  var row = _a.row, column = _a.column, setCellDimensions2 = _a.setCellDimensions, select2 = _a.select, activate2 = _a.activate, mode = _a.mode, dragging = _a.dragging, formulaParser = _a.formulaParser, selected = _a.selected, active = _a.active, DataViewer2 = _a.DataViewer, data = _a.data;
  var rootRef = react.exports.useRef(null);
  var root = rootRef.current;
  var handleMouseDown = react.exports.useCallback(function(event) {
    if (mode === "view") {
      setCellDimensions2({ row, column }, getOffsetRect(event.currentTarget));
      if (event.shiftKey) {
        select2({ row, column });
      } else {
        activate2({ row, column });
      }
    }
  }, [mode, setCellDimensions2, row, column, select2, activate2]);
  var handleMouseOver = react.exports.useCallback(function(event) {
    if (dragging) {
      setCellDimensions2({ row, column }, getOffsetRect(event.currentTarget));
      select2({ row, column });
    }
  }, [setCellDimensions2, select2, dragging, row, column]);
  react.exports.useEffect(function() {
    if (selected && root) {
      setCellDimensions2({ row, column }, getOffsetRect(root));
    }
    if (root && active && mode === "view") {
      root.focus();
    }
  }, [setCellDimensions2, root, select2, active, mode, column, row, selected]);
  if (data && data.DataViewer) {
    DataViewer2 = data.DataViewer;
  }
  return react.exports.createElement("td", { ref: rootRef, className: classnames("Spreadsheet__cell", data === null || data === void 0 ? void 0 : data.className, {
    "Spreadsheet__cell--readonly": data === null || data === void 0 ? void 0 : data.readOnly
  }), onMouseOver: handleMouseOver, onMouseDown: handleMouseDown, tabIndex: 0 }, react.exports.createElement(DataViewer2, { row, column, cell: data, formulaParser }));
};
function mapStateToProps(_a, _b) {
  var data = _a.data, active = _a.active, selected = _a.selected, copied = _a.copied, mode = _a.mode, dragging = _a.dragging, lastChanged = _a.lastChanged, bindings = _a.bindings;
  var column = _b.column, row = _b.row;
  var point = { row, column };
  var cellIsActive = isActive(active, point);
  var cellBindings = get(point, bindings);
  return {
    active: cellIsActive,
    selected: has$1(selected, point),
    copied: has(point, copied),
    mode: cellIsActive ? mode : "view",
    data: get$1(row, column, data),
    dragging,
    _bindingChanged: cellBindings && lastChanged && has$1(cellBindings, lastChanged) ? {} : null
  };
}
var enhance = connect(mapStateToProps, function() {
  return {
    select,
    activate,
    setCellDimensions
  };
});
var toView = function(value) {
  if (value === false) {
    return react.exports.createElement("span", { className: "Spreadsheet__data-viewer--boolean" }, "FALSE");
  }
  if (value === true) {
    return react.exports.createElement("span", { className: "Spreadsheet__data-viewer--boolean" }, "TRUE");
  }
  return react.exports.createElement("span", { className: "Spreadsheet__data-viewer" }, value);
};
var DataViewer = function(_a) {
  var cell = _a.cell, formulaParser = _a.formulaParser;
  return toView(getComputedValue({ cell, formulaParser }));
};
var DataEditor = function(_a) {
  var onChange = _a.onChange, cell = _a.cell;
  var inputRef = react.exports.useRef(null);
  var handleChange = react.exports.useCallback(function(e) {
    onChange(__assign(__assign({}, cell), { value: e.target.value }));
  }, [onChange, cell]);
  react.exports.useEffect(function() {
    if (inputRef.current) {
      moveCursorToEnd(inputRef.current);
    }
  }, [inputRef]);
  var value = (cell === null || cell === void 0 ? void 0 : cell.value) || "";
  return react.exports.createElement("div", { className: "Spreadsheet__data-editor" }, react.exports.createElement("input", { ref: inputRef, type: "text", onChange: handleChange, value, autoFocus: true }));
};
DataEditor.defaultProps = {
  cell: {
    value: ""
  }
};
function ActiveCell(props) {
  var row = props.row, column = props.column, cell = props.cell, width = props.width, height = props.height, top = props.top, left = props.left, hidden = props.hidden, mode = props.mode, edit2 = props.edit, setCellData2 = props.setCellData, getBindingsForCell2 = props.getBindingsForCell, commit2 = props.commit, data = props.data;
  var initialCellRef = react.exports.useRef(null);
  var prevPropsRef = react.exports.useRef(null);
  var handleChange = react.exports.useCallback(function(cell2) {
    var bindings = getBindingsForCell2(cell2, data);
    setCellData2({ row, column }, cell2, bindings);
  }, [getBindingsForCell2, setCellData2, row, column, data]);
  react.exports.useEffect(function() {
    var prevProps = prevPropsRef.current;
    prevPropsRef.current = props;
    if (!prevProps) {
      return;
    }
    var coordsChanged = row !== prevProps.row || column !== prevProps.column;
    var exitedEditMode = mode !== "edit";
    if (coordsChanged || exitedEditMode) {
      var initialCell = initialCellRef.current;
      if (prevProps.cell !== initialCell) {
        commit2([
          {
            prevCell: initialCell,
            nextCell: prevProps.cell
          }
        ]);
      } else if (!coordsChanged && cell !== prevProps.cell) {
        commit2([
          {
            prevCell: prevProps.cell,
            nextCell: cell
          }
        ]);
      }
      initialCellRef.current = cell;
    }
  });
  var DataEditor2 = cell && cell.DataEditor || props.DataEditor;
  var readOnly = cell && cell.readOnly;
  return hidden ? null : react.exports.createElement("div", { className: classnames("Spreadsheet__active-cell", "Spreadsheet__active-cell--" + mode), style: { width, height, top, left }, onClick: mode === "view" && !readOnly ? edit2 : void 0 }, mode === "edit" && react.exports.createElement(DataEditor2, {
    row,
    column,
    cell,
    onChange: handleChange
  }));
}
function mapStateToProps$1(state) {
  var dimensions = state.active && getCellDimensions(state.active, state);
  if (!state.active || !dimensions) {
    return { hidden: true };
  }
  return __assign(__assign({}, state.active), { hidden: false, cell: get$1(state.active.row, state.active.column, state.data), width: dimensions.width, height: dimensions.height, top: dimensions.top, left: dimensions.left, mode: state.mode, data: state.data });
}
var ActiveCell$1 = connect(mapStateToProps$1, {
  setCellData,
  edit,
  commit
})(ActiveCell);
var FloatingRect = function(_a) {
  var _b;
  var width = _a.width, height = _a.height, top = _a.top, left = _a.left, dragging = _a.dragging, hidden = _a.hidden, variant = _a.variant;
  return react.exports.createElement("div", { className: classnames("Spreadsheet__floating-rect", (_b = {}, _b["Spreadsheet__floating-rect--" + variant] = variant, _b["Spreadsheet__floating-rect--dragging"] = dragging, _b["Spreadsheet__floating-rect--hidden"] = hidden, _b)), style: { width, height, top, left } });
};
var getRangeDimensions = function(points, state) {
  var _a = reduce$1(function(acc, point) {
    var isOnEdge = onEdge(points, point);
    var dimensions = getCellDimensions(point, state);
    if (dimensions) {
      acc.width = isOnEdge.top ? acc.width + dimensions.width : acc.width;
      acc.height = isOnEdge.left ? acc.height + dimensions.height : acc.height;
      acc.left = isOnEdge.left && isOnEdge.top ? dimensions.left : acc.left;
      acc.top = isOnEdge.left && isOnEdge.top ? dimensions.top : acc.top;
    }
    return acc;
  }, points, { left: 0, top: 0, width: 0, height: 0 }), width = _a.width, height = _a.height, left = _a.left, top = _a.top;
  return { left, top, width, height };
};
var mapStateToProps$2 = function(state, cells) {
  return __assign(__assign({}, getRangeDimensions(cells, state)), { hidden: size$1(cells) === 0 });
};
var Selected = function(props) {
  return react.exports.createElement(FloatingRect, __assign({}, props, { variant: "selected" }));
};
var Selected$1 = connect(function(state) {
  var cells = state.selected;
  var props = mapStateToProps$2(state, cells);
  return __assign(__assign({}, props), { hidden: props.hidden || size$1(cells) === 1, dragging: state.dragging });
})(Selected);
var Copied = function(props) {
  return react.exports.createElement(FloatingRect, __assign({}, props, { variant: "copied" }));
};
var Copied$1 = connect(function(state) {
  var cells = state.hasPasted ? from$1([]) : map(function() {
    return true;
  }, state.copied);
  return __assign(__assign({}, mapStateToProps$2(state, cells)), { dragging: false });
})(Copied);
var FORMULA_REFERENCES = /\$?[A-Z]+\$?[0-9]+/g;
function isFormula(value) {
  return typeof value === "string" && value.startsWith("=");
}
function getFormula(cell) {
  if (cell && cell.value && isFormula(cell.value)) {
    return cell.value;
  }
  return null;
}
function getReferences(formula) {
  var match2 = formula.match(FORMULA_REFERENCES);
  return match2 ? match2.map(function(substr) {
    var _a = __read(extractLabel(substr), 2), row = _a[0], column = _a[1];
    return { row: row.index, column: column.index };
  }) : [];
}
function getBindingsForCell(cell, data) {
  var formula = getFormula(cell);
  if (!formula) {
    return [];
  }
  var references = getReferences(formula);
  return array_prototype_flatmap(references, function(coords) {
    var dependency = get$1(coords.row, coords.column, data);
    var dependencyBindings = dependency ? getBindingsForCell(dependency, data) : [];
    return __spread([coords], dependencyBindings);
  });
}
function styleInject(css, ref) {
  if (ref === void 0)
    ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === "undefined") {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
var css_248z = ".Spreadsheet {\n  position: relative;\n  overflow: visible;\n  background: white;\n  color: black;\n  display: inline-block;\n}\n\n.Spreadsheet__active-cell {\n  position: absolute;\n  border: 2px solid #4285f4;\n  box-sizing: border-box;\n}\n\n.Spreadsheet__active-cell--edit {\n  background: white;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);\n}\n\n.Spreadsheet__table {\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n\n.Spreadsheet__cell,\n.Spreadsheet__active-cell {\n  cursor: cell;\n}\n\n.Spreadsheet__cell,\n.Spreadsheet__cell input {\n  outline: none;\n}\n\n.Spreadsheet__cell--readonly {\n  color: #999;\n}\n\n.Spreadsheet__cell,\n.Spreadsheet__header {\n  min-width: 6em;\n  min-height: 1.9em;\n  height: 1.9em;\n  max-height: 1.9em;\n  border: 1px solid rgb(231, 231, 231);\n  overflow: hidden;\n  word-break: keep-all;\n  white-space: nowrap;\n  text-align: left;\n  box-sizing: border-box;\n  user-select: none;\n}\n\n.Spreadsheet__header {\n  background: #f5f5f5;\n  color: #999;\n  text-align: center;\n  font: inherit;\n}\n\n.Spreadsheet__header,\n.Spreadsheet__data-viewer,\n.Spreadsheet__data-editor input {\n  padding: 4px;\n  box-sizing: border-box;\n}\n\n.Spreadsheet__data-editor,\n.Spreadsheet__data-editor input {\n  width: 98%;\n  height: 98%;\n}\n\n.Spreadsheet__data-editor input {\n  font: inherit;\n  background: none;\n  border: none;\n  outline: none;\n  margin: 0;\n}\n\n.Spreadsheet__data-viewer--boolean {\n  text-align: center;\n}\n\n.Spreadsheet__floating-rect {\n  position: absolute;\n  pointer-events: none;\n  box-sizing: border-box;\n}\n\n.Spreadsheet__floating-rect--hidden {\n  display: none;\n}\n\n.Spreadsheet__floating-rect--selected {\n  background: rgba(160, 195, 255, 0.2);\n  border: 2px #4285f4 solid;\n}\n.Spreadsheet__floating-rect--dragging {\n  border: none;\n}\n\n.Spreadsheet__floating-rect--copied {\n  border: 2px #4285f4 dashed;\n}\n";
styleInject(css_248z);
var Spreadsheet = function(_super) {
  __extends(Spreadsheet2, _super);
  function Spreadsheet2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.formulaParser = _this.props.formulaParser || new Parser();
    _this.clip = function(event) {
      var store = _this.props.store;
      var _a = store.getState(), data = _a.data, selected = _a.selected;
      var startPoint = min(selected);
      var endPoint = max(selected);
      var slicedMatrix = slice(startPoint, endPoint, data);
      var valueMatrix = map$1(function(cell) {
        return cell && cell.value || "";
      }, slicedMatrix);
      var csv = join(valueMatrix);
      writeTextToClipboard(event, csv);
    };
    _this.handleCopy = function(event) {
      if (_this.isFocused()) {
        event.preventDefault();
        event.stopPropagation();
        _this.clip(event);
        _this.props.copy();
      }
    };
    _this.handlePaste = function(event) {
      return __awaiter(_this, void 0, void 0, function() {
        var text2;
        return __generator(this, function(_a) {
          if (this.props.mode === "view" && this.isFocused()) {
            event.preventDefault();
            event.stopPropagation();
            if (event.clipboardData) {
              text2 = readTextFromClipboard(event);
              this.props.paste(text2);
            }
          }
          return [2];
        });
      });
    };
    _this.handleCut = function(event) {
      if (_this.isFocused()) {
        event.preventDefault();
        event.stopPropagation();
        _this.clip(event);
        _this.props.cut();
      }
    };
    _this.handleKeyDown = function(event) {
      var _a = _this.props, store = _a.store, onKeyDown = _a.onKeyDown, onKeyDownAction = _a.onKeyDownAction;
      if (onKeyDown) {
        onKeyDown(event);
      }
      if (!event.defaultPrevented) {
        if (getKeyDownHandler(store.getState(), event)) {
          event.nativeEvent.preventDefault();
        }
        onKeyDownAction(event);
      }
    };
    _this.handleMouseUp = function() {
      _this.props.onDragEnd();
      document.removeEventListener("mouseup", _this.handleMouseUp);
    };
    _this.handleMouseMove = function(event) {
      if (!_this.props.store.getState().dragging && event.buttons === 1) {
        _this.props.onDragStart();
        document.addEventListener("mouseup", _this.handleMouseUp);
      }
    };
    _this.root = null;
    _this.handleRoot = function(root) {
      _this.root = root;
    };
    _this.getCellComponent = memoizeOne(enhance);
    return _this;
  }
  Spreadsheet2.prototype.isFocused = function() {
    var activeElement = document.activeElement;
    return this.props.mode === "view" && this.root ? this.root === activeElement || this.root.contains(activeElement) : false;
  };
  Spreadsheet2.prototype.componentWillUnmount = function() {
    document.removeEventListener("cut", this.handleCut);
    document.removeEventListener("copy", this.handleCopy);
    document.removeEventListener("paste", this.handlePaste);
  };
  Spreadsheet2.prototype.componentDidMount = function() {
    var _this = this;
    var store = this.props.store;
    document.addEventListener("cut", this.handleCut);
    document.addEventListener("copy", this.handleCopy);
    document.addEventListener("paste", this.handlePaste);
    this.formulaParser.on("callCellValue", function(cellCoord, done) {
      var value;
      try {
        var cell = get$1(cellCoord.row.index, cellCoord.column.index, store.getState().data);
        value = getComputedValue({
          cell,
          formulaParser: _this.formulaParser
        });
      } catch (error2) {
        console.error(error2);
      } finally {
        done(value);
      }
    });
    this.formulaParser.on("callRangeValue", function(startCellCoord, endCellCoord, done) {
      var startPoint = {
        row: startCellCoord.row.index,
        column: startCellCoord.column.index
      };
      var endPoint = {
        row: endCellCoord.row.index,
        column: endCellCoord.column.index
      };
      var values = toArray$1(slice(startPoint, endPoint, store.getState().data), function(cell) {
        return getComputedValue({
          cell,
          formulaParser: _this.formulaParser
        });
      });
      done(values);
    });
  };
  Spreadsheet2.prototype.render = function() {
    var _this = this;
    var _a = this.props, columnLabels = _a.columnLabels, rowLabels = _a.rowLabels, rows = _a.rows, columns = _a.columns, onKeyPress = _a.onKeyPress, hideColumnIndicators = _a.hideColumnIndicators, hideRowIndicators = _a.hideRowIndicators, _b = _a.Table, Table$1 = _b === void 0 ? Table : _b, _c = _a.Row, Row$1 = _c === void 0 ? Row : _c, _d = _a.CornerIndicator, CornerIndicator$1 = _d === void 0 ? CornerIndicator : _d, _e = _a.DataEditor, DataEditor$1 = _e === void 0 ? DataEditor : _e, _f = _a.DataViewer, DataViewer$1 = _f === void 0 ? DataViewer : _f, _g = _a.getBindingsForCell, getBindingsForCell$1 = _g === void 0 ? getBindingsForCell : _g, _h = _a.RowIndicator, RowIndicator$1 = _h === void 0 ? RowIndicator : _h, _j = _a.ColumnIndicator, ColumnIndicator$1 = _j === void 0 ? ColumnIndicator : _j;
    var Cell$1 = this.getCellComponent(this.props.Cell || Cell);
    return react.exports.createElement("div", { ref: this.handleRoot, className: "Spreadsheet", onKeyPress, onKeyDown: this.handleKeyDown, onMouseMove: this.handleMouseMove }, react.exports.createElement(Table$1, { columns, hideColumnIndicators }, react.exports.createElement(Row$1, null, !hideRowIndicators && !hideColumnIndicators && react.exports.createElement(CornerIndicator$1, null), !hideColumnIndicators && range(columns).map(function(columnNumber) {
      return columnLabels ? react.exports.createElement(ColumnIndicator$1, { key: columnNumber, column: columnNumber, label: columnNumber in columnLabels ? columnLabels[columnNumber] : null }) : react.exports.createElement(ColumnIndicator$1, { key: columnNumber, column: columnNumber });
    })), range(rows).map(function(rowNumber) {
      return react.exports.createElement(Row$1, { key: rowNumber }, !hideRowIndicators && (rowLabels ? react.exports.createElement(RowIndicator$1, { key: rowNumber, row: rowNumber, label: rowNumber in rowLabels ? rowLabels[rowNumber] : null }) : react.exports.createElement(RowIndicator$1, { key: rowNumber, row: rowNumber })), range(columns).map(function(columnNumber) {
        return react.exports.createElement(Cell$1, {
          key: columnNumber,
          row: rowNumber,
          column: columnNumber,
          DataViewer: DataViewer$1,
          formulaParser: _this.formulaParser
        });
      }));
    })), react.exports.createElement(ActiveCell$1, {
      DataEditor: DataEditor$1,
      getBindingsForCell: getBindingsForCell$1
    }), react.exports.createElement(Selected$1, null), react.exports.createElement(Copied$1, null));
  };
  return Spreadsheet2;
}(react.exports.PureComponent);
var mapStateToProps$3 = function(_a, _b) {
  var data = _a.data, mode = _a.mode;
  var columnLabels = _b.columnLabels;
  var _c = getSize(data), columns = _c.columns, rows = _c.rows;
  return {
    mode,
    rows,
    columns: columnLabels ? Math.max(columns, columnLabels.length) : columns
  };
};
var Spreadsheet$1 = connect(mapStateToProps$3, {
  copy,
  cut,
  paste,
  onKeyDownAction: keyDown,
  onKeyPress: keyPress,
  onDragStart: dragStart,
  onDragEnd: dragEnd
})(Spreadsheet);
var INITIAL_STATE = {
  active: null,
  mode: "view",
  rowDimensions: {},
  columnDimensions: {},
  lastChanged: null,
  hasPasted: false,
  cut: false,
  dragging: false
};
var SpreadsheetStateProvider = function(_super) {
  __extends(SpreadsheetStateProvider2, _super);
  function SpreadsheetStateProvider2(props) {
    var _this = _super.call(this, props) || this;
    var state = __assign(__assign({}, INITIAL_STATE), { data: _this.props.data, selected: from$1([]), copied: from([]), bindings: from([]), lastCommit: null });
    _this.store = createStore(state);
    _this.prevState = state;
    return _this;
  }
  SpreadsheetStateProvider2.prototype.componentDidMount = function() {
    var _this = this;
    var _a = this.props, onChange = _a.onChange, onModeChange = _a.onModeChange, onSelect = _a.onSelect, onActivate = _a.onActivate, onCellCommit = _a.onCellCommit;
    this.unsubscribe = this.store.subscribe(function(state) {
      var e_1, _a2;
      var prevState = _this.prevState;
      if (state.lastCommit && state.lastCommit !== prevState.lastCommit) {
        try {
          for (var _b = __values(state.lastCommit), _c = _b.next(); !_c.done; _c = _b.next()) {
            var change = _c.value;
            onCellCommit(change.prevCell, change.nextCell, state.active);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a2 = _b["return"]))
              _a2.call(_b);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
      }
      if (state.data !== prevState.data && state.data !== _this.props.data) {
        onChange(state.data);
      }
      if (state.mode !== prevState.mode) {
        onModeChange(state.mode);
      }
      if (state.selected !== prevState.selected) {
        onSelect(toArray(state.selected));
      }
      if (state.active !== prevState.active && state.active) {
        onActivate(state.active);
      }
      _this.prevState = state;
    });
  };
  SpreadsheetStateProvider2.prototype.componentDidUpdate = function(prevProps) {
    if (this.props.data !== this.prevState.data) {
      var previousState = this.store.getState();
      var nextState = setData(previousState, this.props.data);
      this.store.setState(__assign(__assign({}, previousState), nextState));
    }
  };
  SpreadsheetStateProvider2.prototype.componentWillUnmount = function() {
    this.unsubscribe();
  };
  SpreadsheetStateProvider2.prototype.render = function() {
    var _a = this.props;
    _a.data;
    var rest = __rest(_a, ["data"]);
    return react.exports.createElement(Provider, { store: this.store }, react.exports.createElement(Spreadsheet$1, __assign({}, rest, { store: this.store })));
  };
  SpreadsheetStateProvider2.defaultProps = {
    onChange: function() {
    },
    onModeChange: function() {
    },
    onSelect: function() {
    },
    onActivate: function() {
    },
    onCellCommit: function() {
    }
  };
  return SpreadsheetStateProvider2;
}(react.exports.PureComponent);
export { React as R, SpreadsheetStateProvider as S, ReactDOM as a, lib as l, react as r, unorm as u };
