import * as e from "react";
import t from "@emotion/styled";
import { ThemeContext as n, css as r, keyframes as i } from "@emotion/react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region \0rolldown/runtime.js
var s = Object.create, c = Object.defineProperty, l = Object.getOwnPropertyDescriptor, u = Object.getOwnPropertyNames, d = Object.getPrototypeOf, f = Object.prototype.hasOwnProperty, p = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), m = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = u(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !f.call(e, s) && s !== n && c(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = l(t, s)) || r.enumerable
	});
	return e;
}, h = (e, t, n) => (n = e == null ? {} : s(d(e)), m(t || !e || !e.__esModule || !f.call(e, "default") ? c(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), g = /* @__PURE__ */ p(((e) => {
	var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
	function b(e) {
		if (typeof e == "object" && e) {
			var t = e.$$typeof;
			switch (t) {
				case n: switch (e = e.type, e) {
					case l:
					case u:
					case i:
					case o:
					case a:
					case f: return e;
					default: switch (e &&= e.$$typeof, e) {
						case c:
						case d:
						case h:
						case m:
						case s: return e;
						default: return t;
					}
				}
				case r: return t;
			}
		}
	}
	function x(e) {
		return b(e) === u;
	}
	e.AsyncMode = l, e.ConcurrentMode = u, e.ContextConsumer = c, e.ContextProvider = s, e.Element = n, e.ForwardRef = d, e.Fragment = i, e.Lazy = h, e.Memo = m, e.Portal = r, e.Profiler = o, e.StrictMode = a, e.Suspense = f, e.isAsyncMode = function(e) {
		return x(e) || b(e) === l;
	}, e.isConcurrentMode = x, e.isContextConsumer = function(e) {
		return b(e) === c;
	}, e.isContextProvider = function(e) {
		return b(e) === s;
	}, e.isElement = function(e) {
		return typeof e == "object" && !!e && e.$$typeof === n;
	}, e.isForwardRef = function(e) {
		return b(e) === d;
	}, e.isFragment = function(e) {
		return b(e) === i;
	}, e.isLazy = function(e) {
		return b(e) === h;
	}, e.isMemo = function(e) {
		return b(e) === m;
	}, e.isPortal = function(e) {
		return b(e) === r;
	}, e.isProfiler = function(e) {
		return b(e) === o;
	}, e.isStrictMode = function(e) {
		return b(e) === a;
	}, e.isSuspense = function(e) {
		return b(e) === f;
	}, e.isValidElementType = function(e) {
		return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
	}, e.typeOf = b;
})), _ = /* @__PURE__ */ p(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
		function b(e) {
			return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
		}
		function x(e) {
			if (typeof e == "object" && e) {
				var t = e.$$typeof;
				switch (t) {
					case n:
						var p = e.type;
						switch (p) {
							case l:
							case u:
							case i:
							case o:
							case a:
							case f: return p;
							default:
								var g = p && p.$$typeof;
								switch (g) {
									case c:
									case d:
									case h:
									case m:
									case s: return g;
									default: return t;
								}
						}
					case r: return t;
				}
			}
		}
		var S = l, C = u, w = c, ee = s, te = n, T = d, ne = i, re = h, E = m, D = r, O = o, k = a, A = f, j = !1;
		function ie(e) {
			return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ae(e) || x(e) === l;
		}
		function ae(e) {
			return x(e) === u;
		}
		function oe(e) {
			return x(e) === c;
		}
		function se(e) {
			return x(e) === s;
		}
		function ce(e) {
			return typeof e == "object" && !!e && e.$$typeof === n;
		}
		function le(e) {
			return x(e) === d;
		}
		function M(e) {
			return x(e) === i;
		}
		function ue(e) {
			return x(e) === h;
		}
		function N(e) {
			return x(e) === m;
		}
		function P(e) {
			return x(e) === r;
		}
		function de(e) {
			return x(e) === o;
		}
		function F(e) {
			return x(e) === a;
		}
		function fe(e) {
			return x(e) === f;
		}
		e.AsyncMode = S, e.ConcurrentMode = C, e.ContextConsumer = w, e.ContextProvider = ee, e.Element = te, e.ForwardRef = T, e.Fragment = ne, e.Lazy = re, e.Memo = E, e.Portal = D, e.Profiler = O, e.StrictMode = k, e.Suspense = A, e.isAsyncMode = ie, e.isConcurrentMode = ae, e.isContextConsumer = oe, e.isContextProvider = se, e.isElement = ce, e.isForwardRef = le, e.isFragment = M, e.isLazy = ue, e.isMemo = N, e.isPortal = P, e.isProfiler = de, e.isStrictMode = F, e.isSuspense = fe, e.isValidElementType = b, e.typeOf = x;
	})();
})), v = /* @__PURE__ */ p(((e, t) => {
	t.exports = process.env.NODE_ENV === "production" ? g() : _();
})), y = /* @__PURE__ */ p(((e, t) => {
	var n = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
	function a(e) {
		if (e == null) throw TypeError("Object.assign cannot be called with null or undefined");
		return Object(e);
	}
	function o() {
		try {
			if (!Object.assign) return !1;
			var e = /* @__PURE__ */ new String("abc");
			if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5") return !1;
			for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
			if (Object.getOwnPropertyNames(t).map(function(e) {
				return t[e];
			}).join("") !== "0123456789") return !1;
			var r = {};
			return "abcdefghijklmnopqrst".split("").forEach(function(e) {
				r[e] = e;
			}), Object.keys(Object.assign({}, r)).join("") === "abcdefghijklmnopqrst";
		} catch {
			return !1;
		}
	}
	t.exports = o() ? Object.assign : function(e, t) {
		for (var o, s = a(e), c, l = 1; l < arguments.length; l++) {
			for (var u in o = Object(arguments[l]), o) r.call(o, u) && (s[u] = o[u]);
			if (n) {
				c = n(o);
				for (var d = 0; d < c.length; d++) i.call(o, c[d]) && (s[c[d]] = o[c[d]]);
			}
		}
		return s;
	};
})), b = /* @__PURE__ */ p(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), x = /* @__PURE__ */ p(((e, t) => {
	t.exports = Function.call.bind(Object.prototype.hasOwnProperty);
})), S = /* @__PURE__ */ p(((e, t) => {
	var n = function() {};
	if (process.env.NODE_ENV !== "production") {
		var r = b(), i = {}, a = x();
		n = function(e) {
			var t = "Warning: " + e;
			typeof console < "u" && console.error(t);
			try {
				throw Error(t);
			} catch {}
		};
	}
	function o(e, t, o, s, c) {
		if (process.env.NODE_ENV !== "production") {
			for (var l in e) if (a(e, l)) {
				var u;
				try {
					if (typeof e[l] != "function") {
						var d = Error((s || "React class") + ": " + o + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
						throw d.name = "Invariant Violation", d;
					}
					u = e[l](t, l, s, o, null, r);
				} catch (e) {
					u = e;
				}
				if (u && !(u instanceof Error) && n((s || "React class") + ": type specification of " + o + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), u instanceof Error && !(u.message in i)) {
					i[u.message] = !0;
					var f = c ? c() : "";
					n("Failed " + o + " type: " + u.message + (f ?? ""));
				}
			}
		}
	}
	o.resetWarningCache = function() {
		process.env.NODE_ENV !== "production" && (i = {});
	}, t.exports = o;
})), C = /* @__PURE__ */ p(((e, t) => {
	var n = v(), r = y(), i = b(), a = x(), o = S(), s = function() {};
	process.env.NODE_ENV !== "production" && (s = function(e) {
		var t = "Warning: " + e;
		typeof console < "u" && console.error(t);
		try {
			throw Error(t);
		} catch {}
	});
	function c() {
		return null;
	}
	t.exports = function(e, t) {
		var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
		function d(e) {
			var t = e && (l && e[l] || e[u]);
			if (typeof t == "function") return t;
		}
		var f = "<<anonymous>>", p = {
			array: _("array"),
			bigint: _("bigint"),
			bool: _("boolean"),
			func: _("function"),
			number: _("number"),
			object: _("object"),
			string: _("string"),
			symbol: _("symbol"),
			any: v(),
			arrayOf: y,
			element: b(),
			elementType: x(),
			instanceOf: S,
			node: te(),
			objectOf: w,
			oneOf: C,
			oneOfType: ee,
			shape: ne,
			exact: re
		};
		function m(e, t) {
			return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
		}
		function h(e, t) {
			this.message = e, this.data = t && typeof t == "object" ? t : {}, this.stack = "";
		}
		h.prototype = Error.prototype;
		function g(e) {
			if (process.env.NODE_ENV !== "production") var n = {}, r = 0;
			function a(a, o, c, l, u, d, p) {
				if (l ||= f, d ||= c, p !== i) {
					if (t) {
						var m = /* @__PURE__ */ Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
						throw m.name = "Invariant Violation", m;
					}
					if (process.env.NODE_ENV !== "production" && typeof console < "u") {
						var g = l + ":" + c;
						!n[g] && r < 3 && (s("You are manually calling a React.PropTypes validation function for the `" + d + "` prop on `" + l + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), n[g] = !0, r++);
					}
				}
				return o[c] == null ? a ? o[c] === null ? new h("The " + u + " `" + d + "` is marked as required " + ("in `" + l + "`, but its value is `null`.")) : new h("The " + u + " `" + d + "` is marked as required in " + ("`" + l + "`, but its value is `undefined`.")) : null : e(o, c, l, u, d);
			}
			var o = a.bind(null, !1);
			return o.isRequired = a.bind(null, !0), o;
		}
		function _(e) {
			function t(t, n, r, i, a, o) {
				var s = t[n];
				if (O(s) !== e) {
					var c = k(s);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected ") + ("`" + e + "`."), { expectedType: e });
				}
				return null;
			}
			return g(t);
		}
		function v() {
			return g(c);
		}
		function y(e) {
			function t(t, n, r, a, o) {
				if (typeof e != "function") return new h("Property `" + o + "` of component `" + r + "` has invalid PropType notation inside arrayOf.");
				var s = t[n];
				if (!Array.isArray(s)) {
					var c = O(s);
					return new h("Invalid " + a + " `" + o + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected an array."));
				}
				for (var l = 0; l < s.length; l++) {
					var u = e(s, l, r, a, o + "[" + l + "]", i);
					if (u instanceof Error) return u;
				}
				return null;
			}
			return g(t);
		}
		function b() {
			function t(t, n, r, i, a) {
				var o = t[n];
				if (!e(o)) {
					var s = O(o);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected a single ReactElement."));
				}
				return null;
			}
			return g(t);
		}
		function x() {
			function e(e, t, r, i, a) {
				var o = e[t];
				if (!n.isValidElementType(o)) {
					var s = O(o);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected a single ReactElement type."));
				}
				return null;
			}
			return g(e);
		}
		function S(e) {
			function t(t, n, r, i, a) {
				if (!(t[n] instanceof e)) {
					var o = e.name || f, s = j(t[n]);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected ") + ("instance of `" + o + "`."));
				}
				return null;
			}
			return g(t);
		}
		function C(e) {
			if (!Array.isArray(e)) return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).") : s("Invalid argument supplied to oneOf, expected an array.")), c;
			function t(t, n, r, i, a) {
				for (var o = t[n], s = 0; s < e.length; s++) if (m(o, e[s])) return null;
				var c = JSON.stringify(e, function(e, t) {
					return k(t) === "symbol" ? String(t) : t;
				});
				return new h("Invalid " + i + " `" + a + "` of value `" + String(o) + "` " + ("supplied to `" + r + "`, expected one of " + c + "."));
			}
			return g(t);
		}
		function w(e) {
			function t(t, n, r, o, s) {
				if (typeof e != "function") return new h("Property `" + s + "` of component `" + r + "` has invalid PropType notation inside objectOf.");
				var c = t[n], l = O(c);
				if (l !== "object") return new h("Invalid " + o + " `" + s + "` of type " + ("`" + l + "` supplied to `" + r + "`, expected an object."));
				for (var u in c) if (a(c, u)) {
					var d = e(c, u, r, o, s + "." + u, i);
					if (d instanceof Error) return d;
				}
				return null;
			}
			return g(t);
		}
		function ee(e) {
			if (!Array.isArray(e)) return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), c;
			for (var t = 0; t < e.length; t++) {
				var n = e[t];
				if (typeof n != "function") return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + A(n) + " at index " + t + "."), c;
			}
			function r(t, n, r, o, s) {
				for (var c = [], l = 0; l < e.length; l++) {
					var u = e[l], d = u(t, n, r, o, s, i);
					if (d == null) return null;
					d.data && a(d.data, "expectedType") && c.push(d.data.expectedType);
				}
				var f = c.length > 0 ? ", expected one of type [" + c.join(", ") + "]" : "";
				return new h("Invalid " + o + " `" + s + "` supplied to " + ("`" + r + "`" + f + "."));
			}
			return g(r);
		}
		function te() {
			function e(e, t, n, r, i) {
				return E(e[t]) ? null : new h("Invalid " + r + " `" + i + "` supplied to " + ("`" + n + "`, expected a ReactNode."));
			}
			return g(e);
		}
		function T(e, t, n, r, i) {
			return new h((e || "React class") + ": " + t + " type `" + n + "." + r + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + i + "`.");
		}
		function ne(e) {
			function t(t, n, r, a, o) {
				var s = t[n], c = O(s);
				if (c !== "object") return new h("Invalid " + a + " `" + o + "` of type `" + c + "` " + ("supplied to `" + r + "`, expected `object`."));
				for (var l in e) {
					var u = e[l];
					if (typeof u != "function") return T(r, a, o, l, k(u));
					var d = u(s, l, r, a, o + "." + l, i);
					if (d) return d;
				}
				return null;
			}
			return g(t);
		}
		function re(e) {
			function t(t, n, o, s, c) {
				var l = t[n], u = O(l);
				if (u !== "object") return new h("Invalid " + s + " `" + c + "` of type `" + u + "` " + ("supplied to `" + o + "`, expected `object`."));
				for (var d in r({}, t[n], e)) {
					var f = e[d];
					if (a(e, d) && typeof f != "function") return T(o, s, c, d, k(f));
					if (!f) return new h("Invalid " + s + " `" + c + "` key `" + d + "` supplied to `" + o + "`.\nBad object: " + JSON.stringify(t[n], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
					var p = f(l, d, o, s, c + "." + d, i);
					if (p) return p;
				}
				return null;
			}
			return g(t);
		}
		function E(t) {
			switch (typeof t) {
				case "number":
				case "string":
				case "undefined": return !0;
				case "boolean": return !t;
				case "object":
					if (Array.isArray(t)) return t.every(E);
					if (t === null || e(t)) return !0;
					var n = d(t);
					if (n) {
						var r = n.call(t), i;
						if (n !== t.entries) {
							for (; !(i = r.next()).done;) if (!E(i.value)) return !1;
						} else for (; !(i = r.next()).done;) {
							var a = i.value;
							if (a && !E(a[1])) return !1;
						}
					} else return !1;
					return !0;
				default: return !1;
			}
		}
		function D(e, t) {
			return e === "symbol" ? !0 : t ? t["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && t instanceof Symbol : !1;
		}
		function O(e) {
			var t = typeof e;
			return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : D(t, e) ? "symbol" : t;
		}
		function k(e) {
			if (e == null) return "" + e;
			var t = O(e);
			if (t === "object") {
				if (e instanceof Date) return "date";
				if (e instanceof RegExp) return "regexp";
			}
			return t;
		}
		function A(e) {
			var t = k(e);
			switch (t) {
				case "array":
				case "object": return "an " + t;
				case "boolean":
				case "date":
				case "regexp": return "a " + t;
				default: return t;
			}
		}
		function j(e) {
			return !e.constructor || !e.constructor.name ? f : e.constructor.name;
		}
		return p.checkPropTypes = o, p.resetWarningCache = o.resetWarningCache, p.PropTypes = p, p;
	};
})), w = /* @__PURE__ */ p(((e, t) => {
	var n = b();
	function r() {}
	function i() {}
	i.resetWarningCache = r, t.exports = function() {
		function e(e, t, r, i, a, o) {
			if (o !== n) {
				var s = /* @__PURE__ */ Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
				throw s.name = "Invariant Violation", s;
			}
		}
		e.isRequired = e;
		function t() {
			return e;
		}
		var a = {
			array: e,
			bigint: e,
			bool: e,
			func: e,
			number: e,
			object: e,
			string: e,
			symbol: e,
			any: e,
			arrayOf: t,
			element: e,
			elementType: e,
			instanceOf: t,
			node: e,
			objectOf: t,
			oneOf: t,
			oneOfType: t,
			shape: t,
			exact: t,
			checkPropTypes: i,
			resetWarningCache: r
		};
		return a.PropTypes = a, a;
	};
})), ee = /* @__PURE__ */ p(((e, t) => {
	if (process.env.NODE_ENV !== "production") {
		var n = v();
		t.exports = C()(n.isElement, !0);
	} else t.exports = w()();
}));
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function te(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = te(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function T() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = te(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/@mui/utils/resolveProps/resolveProps.mjs
function ne(e, t, n = !1) {
	let r = { ...t };
	for (let i in e) if (Object.prototype.hasOwnProperty.call(e, i)) {
		let a = i;
		if (a === "components" || a === "slots") r[a] = {
			...e[a],
			...r[a]
		};
		else if (a === "componentsProps" || a === "slotProps") {
			let i = e[a], o = t[a];
			if (!o) r[a] = i || {};
			else if (!i) r[a] = o;
			else {
				r[a] = { ...o };
				for (let e in i) if (Object.prototype.hasOwnProperty.call(i, e)) {
					let t = e, s = i[t], c = o[t];
					typeof s == "function" || typeof c == "function" ? r[a][t] = (...e) => ne((typeof s == "function" ? s(...e) : s) ?? {}, (typeof c == "function" ? c(...e) : c) ?? {}, n) : r[a][t] = ne(s ?? {}, c ?? {}, n);
				}
			}
		} else a === "className" && n && t.className !== void 0 ? r.className = T(e?.className, t?.className) : a === "style" && n && t.style ? r.style = {
			...e?.style,
			...t?.style
		} : r[a] === void 0 && (r[a] = e[a]);
	}
	return r;
}
//#endregion
//#region node_modules/@mui/utils/composeClasses/composeClasses.mjs
function re(e, t, n = void 0) {
	let r = {};
	for (let i in e) {
		let a = e[i], o = "", s = !0;
		for (let e = 0; e < a.length; e += 1) {
			let r = a[e];
			r && (o += (s === !0 ? "" : " ") + t(r), s = !1, n && n[r] && (o += " " + n[r]));
		}
		r[i] = o;
	}
	return r;
}
//#endregion
//#region node_modules/@mui/utils/ClassNameGenerator/ClassNameGenerator.mjs
var E = (e) => e, D = (() => {
	let e = E;
	return {
		configure(t) {
			e = t;
		},
		generate(t) {
			return e(t);
		},
		reset() {
			e = E;
		}
	};
})();
//#endregion
//#region node_modules/@mui/utils/formatMuiErrorMessage/formatMuiErrorMessage.mjs
function O(e, ...t) {
	let n = new URL(`https://mui.com/production-error/?code=${e}`);
	return t.forEach((e) => n.searchParams.append("args[]", e)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
//#endregion
//#region node_modules/@mui/utils/capitalize/capitalize.mjs
function k(e) {
	if (typeof e != "string") throw Error(process.env.NODE_ENV === "production" ? O(7) : "MUI: `capitalize(string)` expects a string argument.");
	return e.charAt(0).toUpperCase() + e.slice(1);
}
//#endregion
//#region node_modules/@mui/material/utils/capitalize.mjs
var A = k;
//#endregion
//#region node_modules/@mui/utils/fastDeepAssign/fastDeepAssign.mjs
function j(e, t) {
	let n = Array.isArray(t), r = Array.isArray(e);
	return ce(t) ? t : le(e) ? M(t) : n && r ? oe(e, t) : n === r ? ue(e, t) : M(t);
}
function ie(e) {
	let t = 0, n = e.length, r = Array(n);
	for (t = 0; t < n; t += 1) r[t] = M(e[t]);
	return r;
}
function ae(e) {
	let t = {};
	for (let n in e) n !== "__proto__" && n !== "constructor" && n !== "prototype" && (t[n] = M(e[n]));
	return t;
}
function oe(e, t) {
	let n = e.length;
	for (let r = 0; r < t.length; r += 1) e[n + r] = M(t[r]);
	return e;
}
function se(e) {
	return typeof e == "object" && !!e && !(e instanceof RegExp) && !(e instanceof Date);
}
function ce(e) {
	return typeof e != "object" || !e;
}
function le(e) {
	return typeof e != "object" || !e || e instanceof RegExp || e instanceof Date;
}
function M(e) {
	return se(e) ? Array.isArray(e) ? ie(e) : ae(e) : e;
}
function ue(e, t) {
	for (let n in t) n !== "__proto__" && n !== "constructor" && n !== "prototype" && (e[n] = n in e ? j(e[n], t[n]) : M(t[n]));
	return e;
}
//#endregion
//#region node_modules/@mui/system/responsivePropType/responsivePropType.mjs
var N = /* @__PURE__ */ h(ee(), 1), P = process.env.NODE_ENV === "production" ? {} : N.default.oneOfType([
	N.default.number,
	N.default.string,
	N.default.object,
	N.default.array
]);
//#endregion
//#region node_modules/@mui/utils/isObjectEmpty/isObjectEmpty.mjs
function de(e) {
	if (e == null) return !0;
	for (let t in e) return !1;
	return !0;
}
//#endregion
//#region node_modules/react-is/cjs/react-is.production.js
var F = /* @__PURE__ */ p(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.view_transition"), m = Symbol.for("react.client.reference");
	function h(e) {
		if (typeof e == "object" && e) {
			var m = e.$$typeof;
			switch (m) {
				case t: switch (e = e.type, e) {
					case r:
					case a:
					case i:
					case l:
					case u:
					case p: return e;
					default: switch (e &&= e.$$typeof, e) {
						case s:
						case c:
						case f:
						case d: return e;
						case o: return e;
						default: return m;
					}
				}
				case n: return m;
			}
		}
	}
	e.ContextConsumer = o, e.ContextProvider = s, e.Element = t, e.ForwardRef = c, e.Fragment = r, e.Lazy = f, e.Memo = d, e.Portal = n, e.Profiler = a, e.StrictMode = i, e.Suspense = l, e.SuspenseList = u, e.isContextConsumer = function(e) {
		return h(e) === o;
	}, e.isContextProvider = function(e) {
		return h(e) === s;
	}, e.isElement = function(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}, e.isForwardRef = function(e) {
		return h(e) === c;
	}, e.isFragment = function(e) {
		return h(e) === r;
	}, e.isLazy = function(e) {
		return h(e) === f;
	}, e.isMemo = function(e) {
		return h(e) === d;
	}, e.isPortal = function(e) {
		return h(e) === n;
	}, e.isProfiler = function(e) {
		return h(e) === a;
	}, e.isStrictMode = function(e) {
		return h(e) === i;
	}, e.isSuspense = function(e) {
		return h(e) === l;
	}, e.isSuspenseList = function(e) {
		return h(e) === u;
	}, e.isValidElementType = function(e) {
		return !!(typeof e == "string" || typeof e == "function" || e === r || e === a || e === i || e === l || e === u || e === p || typeof e == "object" && e && (e.$$typeof === f || e.$$typeof === d || e.$$typeof === s || e.$$typeof === o || e.$$typeof === c || e.$$typeof === m || e.getModuleId !== void 0));
	}, e.typeOf = h;
})), fe = /* @__PURE__ */ p(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (typeof e == "object" && e) {
				var t = e.$$typeof;
				switch (t) {
					case n: switch (e = e.type, e) {
						case i:
						case o:
						case a:
						case u:
						case d:
						case m: return e;
						default: switch (e &&= e.$$typeof, e) {
							case c:
							case l:
							case p:
							case f: return e;
							case s: return e;
							default: return t;
						}
					}
					case r: return t;
				}
			}
		}
		var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
		e.ContextConsumer = s, e.ContextProvider = c, e.Element = n, e.ForwardRef = l, e.Fragment = i, e.Lazy = p, e.Memo = f, e.Portal = r, e.Profiler = o, e.StrictMode = a, e.Suspense = u, e.SuspenseList = d, e.isContextConsumer = function(e) {
			return t(e) === s;
		}, e.isContextProvider = function(e) {
			return t(e) === c;
		}, e.isElement = function(e) {
			return typeof e == "object" && !!e && e.$$typeof === n;
		}, e.isForwardRef = function(e) {
			return t(e) === l;
		}, e.isFragment = function(e) {
			return t(e) === i;
		}, e.isLazy = function(e) {
			return t(e) === p;
		}, e.isMemo = function(e) {
			return t(e) === f;
		}, e.isPortal = function(e) {
			return t(e) === r;
		}, e.isProfiler = function(e) {
			return t(e) === o;
		}, e.isStrictMode = function(e) {
			return t(e) === a;
		}, e.isSuspense = function(e) {
			return t(e) === u;
		}, e.isSuspenseList = function(e) {
			return t(e) === d;
		}, e.isValidElementType = function(e) {
			return !!(typeof e == "string" || typeof e == "function" || e === i || e === o || e === a || e === u || e === d || e === m || typeof e == "object" && e && (e.$$typeof === p || e.$$typeof === f || e.$$typeof === c || e.$$typeof === s || e.$$typeof === l || e.$$typeof === h || e.getModuleId !== void 0));
		}, e.typeOf = t;
	})();
})), I = (/* @__PURE__ */ p(((e, t) => {
	t.exports = process.env.NODE_ENV === "production" ? F() : fe();
})))();
function L(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function pe(t) {
	if (/*#__PURE__*/ e.isValidElement(t) || (0, I.isValidElementType)(t) || !L(t)) return t;
	let n = {};
	return Object.keys(t).forEach((e) => {
		n[e] = pe(t[e]);
	}), n;
}
function R(t, n, r = { clone: !0 }) {
	let i = r.clone ? { ...t } : t;
	return L(t) && L(n) && Object.keys(n).forEach((a) => {
		/*#__PURE__*/ e.isValidElement(n[a]) || (0, I.isValidElementType)(n[a]) ? i[a] = n[a] : L(n[a]) && Object.prototype.hasOwnProperty.call(t, a) && L(t[a]) ? i[a] = R(t[a], n[a], r) : r.clone ? i[a] = L(n[a]) ? pe(n[a]) : n[a] : i[a] = n[a];
	}), i;
}
//#endregion
//#region node_modules/@mui/system/cssContainerQueries/cssContainerQueries.mjs
var me = /min-width:\s*([0-9.]+)/;
function he(e, t) {
	if (!e.containerQueries || !ge(t)) return t;
	let n = [];
	for (let e in t) e.startsWith("@container") && n.push(e);
	n.sort((e, t) => +(e.match(me)?.[1] || 0) - (t.match(me)?.[1] || 0));
	let r = t;
	for (let e = 0; e < n.length; e += 1) {
		let t = n[e], i = r[t];
		delete r[t], r[t] = i;
	}
	return r;
}
function ge(e) {
	for (let t in e) if (t.startsWith("@container")) return !0;
	return !1;
}
function _e(e, t) {
	return t === "@" || t.startsWith("@") && (e.some((e) => t.startsWith(`@${e}`)) || !!t.match(/^@\d/));
}
function ve(e, t) {
	let n = t.match(/^@([^/]+)?\/?(.+)?$/);
	if (!n) {
		if (process.env.NODE_ENV !== "production") throw Error(`MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.\nFor example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.`);
		return null;
	}
	let [, r, i] = n, a = Number.isNaN(+r) ? r || 0 : +r;
	return e.containerQueries(i).up(a);
}
function ye(e) {
	let t = (e, t) => e.replace("@media", t ? `@container ${t}` : "@container");
	function n(n, r) {
		n.up = (...n) => t(e.breakpoints.up(...n), r), n.down = (...n) => t(e.breakpoints.down(...n), r), n.between = (...n) => t(e.breakpoints.between(...n), r), n.only = (...n) => t(e.breakpoints.only(...n), r), n.not = (...n) => {
			let i = t(e.breakpoints.not(...n), r);
			return i.includes("not all and") ? i.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : i;
		};
	}
	let r = {}, i = (e) => (n(r, e), r);
	return n(i), {
		...e,
		containerQueries: i
	};
}
//#endregion
//#region node_modules/@mui/system/createBreakpoints/createBreakpoints.mjs
var be = (e) => {
	let t = Object.keys(e).map((t) => ({
		key: t,
		val: e[t]
	})) || [];
	return t.sort((e, t) => e.val - t.val), t.reduce((e, t) => ({
		...e,
		[t.key]: t.val
	}), {});
};
function xe(e) {
	let { values: t = {
		xs: 0,
		sm: 600,
		md: 900,
		lg: 1200,
		xl: 1536
	}, unit: n = "px", step: r = 5, ...i } = e, a = be(t), o = Object.keys(a);
	function s(e) {
		return `@media (min-width:${typeof t[e] == "number" ? t[e] : e}${n})`;
	}
	function c(e) {
		return `@media (max-width:${(typeof t[e] == "number" ? t[e] : e) - r / 100}${n})`;
	}
	function l(e, i) {
		let a = o.indexOf(i);
		return `@media (min-width:${typeof t[e] == "number" ? t[e] : e}${n}) and (max-width:${(a !== -1 && typeof t[o[a]] == "number" ? t[o[a]] : i) - r / 100}${n})`;
	}
	function u(e) {
		return o.indexOf(e) + 1 < o.length ? l(e, o[o.indexOf(e) + 1]) : s(e);
	}
	function d(e) {
		let t = o.indexOf(e);
		return t === 0 ? s(o[1]) : t === o.length - 1 ? c(o[t]) : l(e, o[o.indexOf(e) + 1]).replace("@media", "@media not all and");
	}
	let f = [];
	for (let e = 0; e < o.length; e += 1) f.push(s(o[e]));
	return {
		keys: o,
		values: a,
		up: s,
		down: c,
		between: l,
		only: u,
		not: d,
		unit: n,
		internal_mediaKeys: f,
		...i
	};
}
//#endregion
//#region node_modules/@mui/system/breakpoints/breakpoints.mjs
var Se = {}, Ce = {
	xs: 0,
	sm: 600,
	md: 900,
	lg: 1200,
	xl: 1536
}, we = xe({ values: Ce }), Te = { containerQueries: (e) => ({ up: (t) => {
	let n = typeof t == "number" ? t : Ce[t] || t;
	return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
} }) };
function Ee(e, t, n) {
	let r = {};
	return De(r, e.theme, t, (e, t, i) => {
		let a = n(t, i);
		e ? r[e] = a : j(r, a);
	});
}
function De(e, t, n, r) {
	if (t ??= Se, Array.isArray(n)) {
		let i = t.breakpoints ?? we;
		for (let t = 0; t < n.length; t += 1) Oe(e, i.up(i.keys[t]), n[t], void 0, r);
		return e;
	}
	if (typeof n == "object") {
		let i = t.breakpoints ?? we, a = i.values ?? Ce;
		for (let o in n) if (_e(i.keys, o)) {
			let i = ve(t.containerQueries ? t : Te, o);
			i && Oe(e, i, n[o], o, r);
		} else if (o in a) Oe(e, i.up(o), n[o], o, r);
		else {
			let t = o;
			e[t] = n[t];
		}
		return e;
	}
	return r(void 0, n), e;
}
function Oe(e, t, n, r, i) {
	e[t] ??= {}, i(t, n, r);
}
function ke(e = we) {
	let { internal_mediaKeys: t } = e, n = {};
	for (let e = 0; e < t.length; e += 1) n[t[e]] = {};
	return n;
}
function Ae(e, t) {
	let n = e.internal_mediaKeys;
	for (let e = 0; e < n.length; e += 1) {
		let r = n[e];
		de(t[r]) && delete t[r];
	}
	return t;
}
function je(e, t) {
	if (Array.isArray(t)) return !0;
	if (typeof t == "object" && t) {
		for (let n = 0; n < e.keys.length; n += 1) if (e.keys[n] in t) return !0;
		let n = Object.keys(t);
		for (let t = 0; t < n.length; t += 1) if (_e(e.keys, n[t])) return !0;
	}
	return !1;
}
//#endregion
//#region node_modules/@mui/system/style/style.mjs
function Me(e, t, n, r) {
	let i;
	return i = typeof e == "function" ? e(n) : Array.isArray(e) ? e[n] || n : typeof n == "string" && Ne(e, n, !0, r) || n, t && (i = t(i, n, e)), i;
}
function Ne(e, t, n = !0, r = void 0) {
	if (!e || !t) return null;
	let i = t.split(".");
	if (e.vars && n) {
		let t = Pe(e.vars, i, r);
		if (t != null) return t;
	}
	return Pe(e, i, r);
}
function Pe(e, t, n = void 0) {
	let r, i = e, a = 0;
	for (; a < t.length;) {
		if (i == null) return i;
		r = i, i = i[t[a]], a += 1;
	}
	if (n && i === void 0) {
		let e = t[t.length - 1], i = `${n}${e === "default" ? "" : k(e)}`;
		return r?.[i];
	}
	return i;
}
function z(e) {
	let { prop: t, cssProperty: n = e.prop, themeKey: r, transform: i } = e, a = (e) => {
		if (e[t] == null) return null;
		let a = e[t], o = e.theme, s = Ne(o, r) || {};
		return Ee(e, a, (e) => {
			let r = Me(s, i, e, t);
			return n === !1 ? r : { [n]: r };
		});
	};
	return a.propTypes = process.env.NODE_ENV === "production" ? {} : { [t]: P }, a.filterProps = [t], a;
}
//#endregion
//#region node_modules/@mui/system/spacing/spacing.mjs
var Fe = { internal_cache: {} }, Ie = {
	m: "margin",
	p: "padding"
}, Le = {
	t: "Top",
	r: "Right",
	b: "Bottom",
	l: "Left",
	x: ["Left", "Right"],
	y: ["Top", "Bottom"]
}, Re = {
	marginX: "mx",
	marginY: "my",
	paddingX: "px",
	paddingY: "py"
}, ze = {};
for (let e in Ie) ze[e] = [Ie[e]];
for (let e in Ie) for (let t in Le) {
	let n = Ie[e], r = Le[t], i = Array.isArray(r) ? r.map((e) => n + e) : [n + r];
	ze[e + t] = i;
}
for (let e in Re) ze[e] = ze[Re[e]];
var Be = /* @__PURE__ */ new Set([
	"m",
	"mt",
	"mr",
	"mb",
	"ml",
	"mx",
	"my",
	"margin",
	"marginTop",
	"marginRight",
	"marginBottom",
	"marginLeft",
	"marginX",
	"marginY",
	"marginInline",
	"marginInlineStart",
	"marginInlineEnd",
	"marginBlock",
	"marginBlockStart",
	"marginBlockEnd"
]), Ve = /* @__PURE__ */ new Set([
	"p",
	"pt",
	"pr",
	"pb",
	"pl",
	"px",
	"py",
	"padding",
	"paddingTop",
	"paddingRight",
	"paddingBottom",
	"paddingLeft",
	"paddingX",
	"paddingY",
	"paddingInline",
	"paddingInlineStart",
	"paddingInlineEnd",
	"paddingBlock",
	"paddingBlockStart",
	"paddingBlockEnd"
]), He = /* @__PURE__ */ new Set([...Be, ...Ve]);
function Ue(e, t, n, r) {
	let i = Ne(e, t, !0) ?? n;
	return typeof i == "number" || typeof i == "string" ? (e) => typeof e == "string" ? e : (process.env.NODE_ENV !== "production" && typeof e != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${e}.`), typeof i == "string" ? i.startsWith("var(") && e === 0 ? 0 : i.startsWith("var(") && e === 1 ? i : `calc(${e} * ${i})` : i * e) : Array.isArray(i) ? (e) => {
		if (typeof e == "string") return e;
		let n = Math.abs(e);
		process.env.NODE_ENV !== "production" && (Number.isInteger(n) ? n > i.length - 1 && console.error([
			`MUI: The value provided (${n}) overflows.`,
			`The supported values are: ${JSON.stringify(i)}.`,
			`${n} > ${i.length - 1}, you need to add the missing values.`
		].join("\n")) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join("\n")));
		let r = i[n];
		return e >= 0 ? r : typeof r == "number" ? -r : typeof r == "string" && r.startsWith("var(") ? `calc(-1 * ${r})` : `-${r}`;
	} : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join("\n")), () => void 0);
}
function We(e) {
	return Ue(e, "spacing", 8, "spacing");
}
function Ge(e, t) {
	return typeof t == "string" || t == null ? t : e(t);
}
var Ke = [""];
function qe(e, t) {
	let n = e.theme ?? Fe, r = n?.internal_cache?.unarySpacing ?? We(n), i = {};
	for (let n in e) {
		if (!t.has(n)) continue;
		let a = ze[n] ?? (Ke[0] = n, Ke), o = e[n];
		De(i, e.theme, o, (e, t) => {
			let n = e ? i[e] : i;
			for (let e = 0; e < a.length; e += 1) n[a[e]] = Ge(r, t);
		});
	}
	return i;
}
function Je(e) {
	return qe(e, Be);
}
Je.propTypes = process.env.NODE_ENV === "production" ? {} : Array.from(Be).reduce((e, t) => (e[t] = P, e), {}), Je.filterProps = Be;
var B = Je;
function Ye(e) {
	return qe(e, Ve);
}
Ye.propTypes = process.env.NODE_ENV === "production" ? {} : Array.from(Ve).reduce((e, t) => (e[t] = P, e), {}), Ye.filterProps = Ve;
var V = Ye;
process.env.NODE_ENV === "production" || Array.from(He).reduce((e, t) => (e[t] = P, e), {});
//#endregion
//#region node_modules/@mui/system/compose/compose.mjs
function Xe(...e) {
	let t = e.reduce((e, t) => (t.filterProps.forEach((n) => {
		e[n] = t;
	}), e), {}), n = (e) => {
		let n = {};
		for (let r in e) t[r] && j(n, t[r](e));
		return n;
	};
	return n.propTypes = process.env.NODE_ENV === "production" ? {} : e.reduce((e, t) => Object.assign(e, t.propTypes), {}), n.filterProps = e.reduce((e, t) => e.concat(t.filterProps), []), n;
}
//#endregion
//#region node_modules/@mui/system/borders/borders.mjs
function H(e) {
	return typeof e == "number" ? `${e}px solid` : e;
}
function U(e, t) {
	return z({
		prop: e,
		themeKey: "borders",
		transform: t
	});
}
var Ze = U("border", H), Qe = U("borderTop", H), $e = U("borderRight", H), et = U("borderBottom", H), tt = U("borderLeft", H), nt = U("borderColor"), rt = U("borderTopColor"), it = U("borderRightColor"), at = U("borderBottomColor"), ot = U("borderLeftColor"), st = U("outline", H), ct = U("outlineColor"), lt = (e) => {
	if (e.borderRadius !== void 0 && e.borderRadius !== null) {
		let t = Ue(e.theme, "shape.borderRadius", 4, "borderRadius");
		return Ee(e, e.borderRadius, (e) => ({ borderRadius: Ge(t, e) }));
	}
	return null;
};
lt.propTypes = process.env.NODE_ENV === "production" ? {} : { borderRadius: P }, lt.filterProps = ["borderRadius"], Xe(Ze, Qe, $e, et, tt, nt, rt, it, at, ot, lt, st, ct);
//#endregion
//#region node_modules/@mui/system/cssGrid/cssGrid.mjs
var ut = (e) => {
	if (e.gap !== void 0 && e.gap !== null) {
		let t = Ue(e.theme, "spacing", 8, "gap");
		return Ee(e, e.gap, (e) => ({ gap: Ge(t, e) }));
	}
	return null;
};
ut.propTypes = process.env.NODE_ENV === "production" ? {} : { gap: P }, ut.filterProps = ["gap"];
var dt = (e) => {
	if (e.columnGap !== void 0 && e.columnGap !== null) {
		let t = Ue(e.theme, "spacing", 8, "columnGap");
		return Ee(e, e.columnGap, (e) => ({ columnGap: Ge(t, e) }));
	}
	return null;
};
dt.propTypes = process.env.NODE_ENV === "production" ? {} : { columnGap: P }, dt.filterProps = ["columnGap"];
var ft = (e) => {
	if (e.rowGap !== void 0 && e.rowGap !== null) {
		let t = Ue(e.theme, "spacing", 8, "rowGap");
		return Ee(e, e.rowGap, (e) => ({ rowGap: Ge(t, e) }));
	}
	return null;
};
ft.propTypes = process.env.NODE_ENV === "production" ? {} : { rowGap: P }, ft.filterProps = ["rowGap"], Xe(ut, dt, ft, z({ prop: "gridColumn" }), z({ prop: "gridRow" }), z({ prop: "gridAutoFlow" }), z({ prop: "gridAutoColumns" }), z({ prop: "gridAutoRows" }), z({ prop: "gridTemplateColumns" }), z({ prop: "gridTemplateRows" }), z({ prop: "gridTemplateAreas" }), z({ prop: "gridArea" }));
//#endregion
//#region node_modules/@mui/system/palette/palette.mjs
function pt(e, t) {
	return t === "grey" ? t : e;
}
Xe(z({
	prop: "color",
	themeKey: "palette",
	transform: pt
}), z({
	prop: "bgcolor",
	cssProperty: "backgroundColor",
	themeKey: "palette",
	transform: pt
}), z({
	prop: "backgroundColor",
	themeKey: "palette",
	transform: pt
}));
//#endregion
//#region node_modules/@mui/system/sizing/sizing.mjs
var mt = Ce;
function W(e) {
	return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
var ht = z({
	prop: "width",
	transform: W
}), gt = (e) => e.maxWidth !== void 0 && e.maxWidth !== null ? Ee(e, e.maxWidth, (t) => {
	let n = e.theme?.breakpoints?.values?.[t] || mt[t];
	return n ? e.theme?.breakpoints?.unit === "px" ? { maxWidth: n } : { maxWidth: `${n}${e.theme.breakpoints.unit}` } : { maxWidth: W(t) };
}) : null;
gt.filterProps = ["maxWidth"];
var _t = z({
	prop: "minWidth",
	transform: W
}), vt = z({
	prop: "height",
	transform: W
}), yt = z({
	prop: "maxHeight",
	transform: W
}), bt = z({
	prop: "minHeight",
	transform: W
});
z({
	prop: "size",
	cssProperty: "width",
	transform: W
}), z({
	prop: "size",
	cssProperty: "height",
	transform: W
}), Xe(ht, gt, _t, vt, yt, bt, z({ prop: "boxSizing" }));
//#endregion
//#region node_modules/@mui/system/styleFunctionSx/defaultSxConfig.mjs
var xt = {
	border: {
		themeKey: "borders",
		transform: H
	},
	borderTop: {
		themeKey: "borders",
		transform: H
	},
	borderRight: {
		themeKey: "borders",
		transform: H
	},
	borderBottom: {
		themeKey: "borders",
		transform: H
	},
	borderLeft: {
		themeKey: "borders",
		transform: H
	},
	borderColor: { themeKey: "palette" },
	borderTopColor: { themeKey: "palette" },
	borderRightColor: { themeKey: "palette" },
	borderBottomColor: { themeKey: "palette" },
	borderLeftColor: { themeKey: "palette" },
	outline: {
		themeKey: "borders",
		transform: H
	},
	outlineColor: { themeKey: "palette" },
	borderRadius: {
		themeKey: "shape.borderRadius",
		style: lt
	},
	color: {
		themeKey: "palette",
		transform: pt
	},
	bgcolor: {
		themeKey: "palette",
		cssProperty: "backgroundColor",
		transform: pt
	},
	backgroundColor: {
		themeKey: "palette",
		transform: pt
	},
	p: { style: V },
	pt: { style: V },
	pr: { style: V },
	pb: { style: V },
	pl: { style: V },
	px: { style: V },
	py: { style: V },
	padding: { style: V },
	paddingTop: { style: V },
	paddingRight: { style: V },
	paddingBottom: { style: V },
	paddingLeft: { style: V },
	paddingX: { style: V },
	paddingY: { style: V },
	paddingInline: { style: V },
	paddingInlineStart: { style: V },
	paddingInlineEnd: { style: V },
	paddingBlock: { style: V },
	paddingBlockStart: { style: V },
	paddingBlockEnd: { style: V },
	m: { style: B },
	mt: { style: B },
	mr: { style: B },
	mb: { style: B },
	ml: { style: B },
	mx: { style: B },
	my: { style: B },
	margin: { style: B },
	marginTop: { style: B },
	marginRight: { style: B },
	marginBottom: { style: B },
	marginLeft: { style: B },
	marginX: { style: B },
	marginY: { style: B },
	marginInline: { style: B },
	marginInlineStart: { style: B },
	marginInlineEnd: { style: B },
	marginBlock: { style: B },
	marginBlockStart: { style: B },
	marginBlockEnd: { style: B },
	displayPrint: {
		cssProperty: !1,
		transform: (e) => ({ "@media print": { display: e } })
	},
	display: {},
	overflow: {},
	textOverflow: {},
	visibility: {},
	whiteSpace: {},
	flexBasis: {},
	flexDirection: {},
	flexWrap: {},
	justifyContent: {},
	alignItems: {},
	alignContent: {},
	order: {},
	flex: {},
	flexGrow: {},
	flexShrink: {},
	alignSelf: {},
	justifyItems: {},
	justifySelf: {},
	gap: { style: ut },
	rowGap: { style: ft },
	columnGap: { style: dt },
	gridColumn: {},
	gridRow: {},
	gridAutoFlow: {},
	gridAutoColumns: {},
	gridAutoRows: {},
	gridTemplateColumns: {},
	gridTemplateRows: {},
	gridTemplateAreas: {},
	gridArea: {},
	position: {},
	zIndex: { themeKey: "zIndex" },
	top: {},
	right: {},
	bottom: {},
	left: {},
	boxShadow: { themeKey: "shadows" },
	width: { transform: W },
	maxWidth: { style: gt },
	minWidth: { transform: W },
	height: { transform: W },
	maxHeight: { transform: W },
	minHeight: { transform: W },
	boxSizing: {},
	font: { themeKey: "font" },
	fontFamily: { themeKey: "typography" },
	fontSize: { themeKey: "typography" },
	fontStyle: { themeKey: "typography" },
	fontWeight: { themeKey: "typography" },
	letterSpacing: {},
	textTransform: {},
	lineHeight: {},
	textAlign: {},
	typography: {
		cssProperty: !1,
		themeKey: "typography"
	}
}, St = {};
function Ct() {
	function e(t) {
		if (!t.sx) return null;
		let { sx: n, theme: r = St, nested: i } = t, a = r.unstable_sxConfig ?? xt, o = {
			sx: null,
			theme: r,
			nested: !0
		};
		function s(n) {
			let s = n;
			if (typeof n == "function") s = n(r);
			else if (typeof n != "object") return n;
			if (!s) return null;
			let c = r.breakpoints ?? we, l = ke(c);
			for (let n in s) {
				let i = Et(s[n], r);
				if (i != null) {
					if (typeof i != "object") {
						Tt(l, n, i, r, a);
						continue;
					}
					if (a[n]) {
						Tt(l, n, i, r, a);
						continue;
					}
					je(c, i) ? De(l, t.theme, i, (e, t) => {
						l[e][n] = t;
					}) : (o.sx = i, l[n] = e(o));
				}
			}
			return !i && r.modularCssLayers ? { "@layer sx": he(r, Ae(c, l)) } : he(r, Ae(c, l));
		}
		return Array.isArray(n) ? n.map(s) : s(n);
	}
	return e.filterProps = ["sx"], e;
}
var wt = Ct();
function Tt(e, t, n, r, i) {
	let a = i[t];
	if (!a) {
		e[t] = n;
		return;
	}
	if (n == null) return;
	let { themeKey: o } = a;
	if (o === "typography" && n === "inherit") {
		e[t] = n;
		return;
	}
	let { style: s } = a;
	if (s) {
		j(e, s({
			[t]: n,
			theme: r
		}));
		return;
	}
	let { cssProperty: c = t, transform: l } = a, u = Ne(r, o);
	De(e, r, n, (n, r) => {
		let i = Me(u, l, r, t);
		c === !1 ? j(n ? e[n] : e, i) : n ? e[n][c] = i : e[c] = i;
	});
}
function Et(e, t) {
	return typeof e == "function" ? e(t) : e;
}
//#endregion
//#region node_modules/@emotion/hash/dist/emotion-hash.esm.js
function Dt(e) {
	for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4) n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= n >>> 24, t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
	switch (i) {
		case 3: t ^= (e.charCodeAt(r + 2) & 255) << 16;
		case 2: t ^= (e.charCodeAt(r + 1) & 255) << 8;
		case 1: t ^= e.charCodeAt(r) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
	}
	return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
//#endregion
//#region node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var Ot = {
	animationIterationCount: 1,
	aspectRatio: 1,
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
	scale: 1,
	tabSize: 1,
	widows: 1,
	zIndex: 1,
	zoom: 1,
	WebkitLineClamp: 1,
	fillOpacity: 1,
	floodOpacity: 1,
	stopOpacity: 1,
	strokeDasharray: 1,
	strokeDashoffset: 1,
	strokeMiterlimit: 1,
	strokeOpacity: 1,
	strokeWidth: 1
};
//#endregion
//#region node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function kt(e) {
	var t = Object.create(null);
	return function(n) {
		return t[n] === void 0 && (t[n] = e(n)), t[n];
	};
}
//#endregion
//#region node_modules/@emotion/serialize/dist/emotion-serialize.esm.js
var At = /[A-Z]|^ms/g, jt = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Mt = function(e) {
	return e.charCodeAt(1) === 45;
}, Nt = function(e) {
	return e != null && typeof e != "boolean";
}, Pt = /* #__PURE__ */ kt(function(e) {
	return Mt(e) ? e : e.replace(At, "-$&").toLowerCase();
}), Ft = function(e, t) {
	switch (e) {
		case "animation":
		case "animationName": if (typeof t == "string") return t.replace(jt, function(e, t, n) {
			return G = {
				name: t,
				styles: n,
				next: G
			}, t;
		});
	}
	return Ot[e] !== 1 && !Mt(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
function It(e, t, n) {
	if (n == null) return "";
	var r = n;
	if (r.__emotion_styles !== void 0) return r;
	switch (typeof n) {
		case "boolean": return "";
		case "object":
			var i = n;
			if (i.anim === 1) return G = {
				name: i.name,
				styles: i.styles,
				next: G
			}, i.name;
			var a = n;
			if (a.styles !== void 0) {
				var o = a.next;
				if (o !== void 0) for (; o !== void 0;) G = {
					name: o.name,
					styles: o.styles,
					next: G
				}, o = o.next;
				return a.styles + ";";
			}
			return Lt(e, t, n);
		case "function": if (e !== void 0) {
			var s = G, c = n(e);
			return G = s, It(e, t, c);
		}
	}
	var l = n;
	if (t == null) return l;
	var u = t[l];
	return u === void 0 ? l : u;
}
function Lt(e, t, n) {
	var r = "";
	if (Array.isArray(n)) for (var i = 0; i < n.length; i++) r += It(e, t, n[i]) + ";";
	else for (var a in n) {
		var o = n[a];
		if (typeof o != "object") {
			var s = o;
			t != null && t[s] !== void 0 ? r += a + "{" + t[s] + "}" : Nt(s) && (r += Pt(a) + ":" + Ft(a, s) + ";");
		} else if (Array.isArray(o) && typeof o[0] == "string" && (t == null || t[o[0]] === void 0)) for (var c = 0; c < o.length; c++) Nt(o[c]) && (r += Pt(a) + ":" + Ft(a, o[c]) + ";");
		else {
			var l = It(e, t, o);
			switch (a) {
				case "animation":
				case "animationName":
					r += Pt(a) + ":" + l + ";";
					break;
				default: r += a + "{" + l + "}";
			}
		}
	}
	return r;
}
var Rt = /label:\s*([^\s;{]+)\s*(;|$)/g, G;
function zt(e, t, n) {
	if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0) return e[0];
	var r = !0, i = "";
	G = void 0;
	var a = e[0];
	a == null || a.raw === void 0 ? (r = !1, i += It(n, t, a)) : i += a[0];
	for (var o = 1; o < e.length; o++) i += It(n, t, e[o]), r && (i += a[o]);
	Rt.lastIndex = 0;
	for (var s = "", c; (c = Rt.exec(i)) !== null;) s += "-" + c[1];
	return {
		name: Dt(i) + s,
		styles: i,
		next: G
	};
}
//#endregion
//#region node_modules/@mui/styled-engine/index.mjs
function Bt(e, n) {
	let r = t(e, n);
	return process.env.NODE_ENV === "production" ? r : (...t) => {
		let n = typeof e == "string" ? `"${e}"` : "component";
		return t.length === 0 ? console.error([`MUI: Seems like you called \`styled(${n})()\` without a \`style\` argument.`, "You must provide a `styles` argument: `styled(\"div\")(styleYouForgotToPass)`."].join("\n")) : t.some((e) => e === void 0) && console.error(`MUI: the styled(${n})(...args) API requires all its args to be defined.`), r(...t);
	};
}
function Vt(e, t) {
	Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
var Ht = [];
function Ut(e) {
	return Ht[0] = e, zt(Ht);
}
//#endregion
//#region node_modules/@mui/system/createTheme/shape.mjs
var Wt = { borderRadius: 4 };
//#endregion
//#region node_modules/@mui/system/createTheme/createSpacing.mjs
function Gt(e = 8, t = We({ spacing: e })) {
	if (e.mui) return e;
	let n = (...e) => (process.env.NODE_ENV !== "production" && (e.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${e.length}`)), (e.length === 0 ? [1] : e).map((e) => {
		let n = t(e);
		return typeof n == "number" ? `${n}px` : n;
	}).join(" "));
	return n.mui = !0, n;
}
//#endregion
//#region node_modules/@mui/system/createTheme/applyStyles.mjs
function Kt(e, t) {
	let n = this;
	if (n.vars) {
		if (!n.colorSchemes?.[e] || typeof n.getColorSchemeSelector != "function") return {};
		let r = n.getColorSchemeSelector(e);
		return r === "&" ? t : ((r.includes("data-") || r.includes(".")) && (r = `*:where(${r.replace(/\s*&$/, "")}) &`), { [r]: t });
	}
	return n.palette.mode === e ? t : {};
}
//#endregion
//#region node_modules/@mui/system/createTheme/createTheme.mjs
function qt(e = {}, ...t) {
	let { breakpoints: n = {}, palette: r = {}, spacing: i, shape: a = {}, ...o } = e, s = xe(n), c = Gt(i), l = R({
		breakpoints: s,
		direction: "ltr",
		components: {},
		palette: {
			mode: "light",
			...r
		},
		spacing: c,
		shape: {
			...Wt,
			...a
		}
	}, o);
	return l = ye(l), l.applyStyles = Kt, l = t.reduce((e, t) => R(e, t), l), l.unstable_sxConfig = {
		...xt,
		...o?.unstable_sxConfig
	}, l.unstable_sx = function(e) {
		return wt({
			sx: e,
			theme: this
		});
	}, l.internal_cache = {}, l;
}
//#endregion
//#region node_modules/@mui/system/useThemeWithoutDefault/useThemeWithoutDefault.mjs
function Jt(e) {
	return Object.keys(e).length === 0;
}
function Yt(t = null) {
	let r = e.useContext(n);
	return !r || Jt(r) ? t : r;
}
//#endregion
//#region node_modules/@mui/system/useTheme/useTheme.mjs
var Xt = qt();
function Zt(e = Xt) {
	return Yt(e);
}
//#endregion
//#region node_modules/@mui/utils/generateUtilityClass/generateUtilityClass.mjs
var Qt = {
	active: "active",
	checked: "checked",
	completed: "completed",
	disabled: "disabled",
	error: "error",
	expanded: "expanded",
	focused: "focused",
	focusVisible: "focusVisible",
	open: "open",
	readOnly: "readOnly",
	required: "required",
	selected: "selected"
};
function $t(e, t, n = "Mui") {
	let r = Qt[t];
	return r ? `${n}-${r}` : `${D.generate(e)}-${t}`;
}
//#endregion
//#region node_modules/@mui/utils/generateUtilityClasses/generateUtilityClasses.mjs
function en(e, t, n = "Mui") {
	let r = {};
	return t.forEach((t) => {
		r[t] = $t(e, t, n);
	}), r;
}
//#endregion
//#region node_modules/@mui/utils/getDisplayName/getDisplayName.mjs
function tn(e, t = "") {
	return e.displayName || e.name || t;
}
function nn(e, t, n) {
	let r = tn(t);
	return e.displayName || (r === "" ? n : `${n}(${r})`);
}
function rn(e) {
	if (e != null) {
		if (typeof e == "string") return e;
		if (typeof e == "function") return tn(e, "Component");
		if (typeof e == "object") switch (e.$$typeof) {
			case I.ForwardRef: return nn(e, e.render, "ForwardRef");
			case I.Memo: return nn(e, e.type, "memo");
			default: return;
		}
	}
}
//#endregion
//#region node_modules/@mui/system/preprocessStyles.mjs
function an(e) {
	let { variants: t, ...n } = e, r = {
		variants: t,
		style: Ut(n),
		isProcessed: !0
	};
	return r.style === n || t && t.forEach((e) => {
		typeof e.style != "function" && (e.style = Ut(e.style));
	}), r;
}
//#endregion
//#region node_modules/@mui/system/createStyled/createStyled.mjs
var on = qt();
function sn(e) {
	return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function cn(e, t) {
	return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function ln(e) {
	return e ? (t, n) => n[e] : null;
}
function un(e, t, n) {
	e.theme = de(e.theme) ? n : e.theme[t] || e.theme;
}
function dn(e, t, n) {
	let r = typeof t == "function" ? t(e) : t;
	if (Array.isArray(r)) return r.flatMap((t) => dn(e, t, n));
	if (Array.isArray(r?.variants)) {
		let t;
		if (r.isProcessed) t = n ? cn(r.style, n) : r.style;
		else {
			let { variants: e, ...i } = r;
			t = n ? cn(Ut(i), n) : i;
		}
		return fn(e, r.variants, [t], n);
	}
	return r?.isProcessed ? n ? cn(Ut(r.style), n) : r.style : n ? cn(Ut(r), n) : r;
}
function fn(e, t, n = [], r = void 0) {
	let i;
	variantLoop: for (let a = 0; a < t.length; a += 1) {
		let o = t[a];
		if (typeof o.props == "function") {
			if (i ??= {
				...e,
				...e.ownerState,
				ownerState: e.ownerState
			}, !o.props(i)) continue;
		} else for (let t in o.props) if (e[t] !== o.props[t] && e.ownerState?.[t] !== o.props[t]) continue variantLoop;
		typeof o.style == "function" ? (i ??= {
			...e,
			...e.ownerState,
			ownerState: e.ownerState
		}, n.push(r ? cn(Ut(o.style(i)), r) : o.style(i))) : n.push(r ? cn(Ut(o.style), r) : o.style);
	}
	return n;
}
function pn(e = {}) {
	let { themeId: t, defaultTheme: n = on, rootShouldForwardProp: r = sn, slotShouldForwardProp: i = sn } = e;
	function a(e) {
		un(e, t, n);
	}
	return (e, t = {}) => {
		Vt(e, (e) => e.filter((e) => e !== wt));
		let { name: n, slot: o, skipVariantsResolver: s, skipSx: c, overridesResolver: l = ln(_n(o)), ...u } = t, d = n && n.startsWith("Mui") || o ? "components" : "custom", f = s === void 0 ? o && o !== "Root" && o !== "root" || !1 : s, p = c || !1, m = sn;
		o === "Root" || o === "root" ? m = r : o ? m = i : gn(e) && (m = void 0);
		let h = Bt(e, {
			shouldForwardProp: m,
			label: hn(n, o),
			...u
		}), g = (e) => {
			if (e.__emotion_real === e) return e;
			if (typeof e == "function") return function(t) {
				return dn(t, e, t.theme.modularCssLayers ? d : void 0);
			};
			if (L(e)) {
				let t = an(e);
				return function(e) {
					return t.variants ? dn(e, t, e.theme.modularCssLayers ? d : void 0) : e.theme.modularCssLayers ? cn(t.style, d) : t.style;
				};
			}
			return e;
		}, _ = (...t) => {
			let r = [], i = t.map(g), s = [];
			if (r.push(a), n && l && s.push(function(e) {
				let t = e.theme.components?.[n]?.styleOverrides;
				if (!t) return null;
				let r = {};
				for (let n in t) r[n] = dn(e, t[n], e.theme.modularCssLayers ? "theme" : void 0);
				return l(e, r);
			}), n && !f && s.push(function(e) {
				let t = e.theme?.components?.[n]?.variants;
				return t ? fn(e, t, [], e.theme.modularCssLayers ? "theme" : void 0) : null;
			}), p || s.push(wt), Array.isArray(i[0])) {
				let e = i.shift(), t = Array(r.length).fill(""), n = Array(s.length).fill(""), a;
				a = [
					...t,
					...e,
					...n
				], a.raw = [
					...t,
					...e.raw,
					...n
				], r.unshift(a);
			}
			let c = [
				...r,
				...i,
				...s
			], u = h(...c);
			return e.muiName && (u.muiName = e.muiName), process.env.NODE_ENV !== "production" && (u.displayName = mn(n, o, e)), u;
		};
		return h.withConfig && (_.withConfig = h.withConfig), _;
	};
}
function mn(e, t, n) {
	return e ? `${e}${k(t || "")}` : `Styled(${rn(n)})`;
}
function hn(e, t) {
	let n;
	return process.env.NODE_ENV !== "production" && e && (n = `${e}-${_n(t || "Root")}`), n;
}
function gn(e) {
	return typeof e == "string" && e.charCodeAt(0) > 96;
}
function _n(e) {
	return e && e.charAt(0).toLowerCase() + e.slice(1);
}
//#endregion
//#region node_modules/@mui/utils/useEnhancedEffect/useEnhancedEffect.mjs
var vn = typeof window < "u" ? e.useLayoutEffect : e.useEffect;
//#endregion
//#region node_modules/@mui/utils/clamp/clamp.mjs
function yn(e, t = -(2 ** 53 - 1), n = 2 ** 53 - 1) {
	return Math.max(t, Math.min(e, n));
}
//#endregion
//#region node_modules/@mui/system/colorManipulator/colorManipulator.mjs
function bn(e, t = 0, n = 1) {
	return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), yn(e, t, n);
}
function xn(e) {
	e = e.slice(1);
	let t = RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g"), n = e.match(t);
	return n && n[0].length === 1 && (n = n.map((e) => e + e)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((e, t) => t < 3 ? parseInt(e, 16) : Math.round(parseInt(e, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Sn(e) {
	if (e.type) return e;
	if (e.charAt(0) === "#") return Sn(xn(e));
	let t = e.indexOf("("), n = e.substring(0, t);
	if (![
		"rgb",
		"rgba",
		"hsl",
		"hsla",
		"color"
	].includes(n)) throw Error(process.env.NODE_ENV === "production" ? O(9, e) : `MUI: Unsupported \`${e}\` color.\nThe following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().`);
	let r = e.substring(t + 1, e.length - 1), i;
	if (n === "color") {
		if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ![
			"srgb",
			"display-p3",
			"a98-rgb",
			"prophoto-rgb",
			"rec-2020"
		].includes(i)) throw Error(process.env.NODE_ENV === "production" ? O(10, i) : `MUI: unsupported \`${i}\` color space.\nThe following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.`);
	} else r = r.split(",");
	return r = r.map((e) => parseFloat(e)), {
		type: n,
		values: r,
		colorSpace: i
	};
}
var Cn = (e) => {
	let t = Sn(e);
	return t.values.slice(0, 3).map((e, n) => t.type.includes("hsl") && n !== 0 ? `${e}%` : e).join(" ");
}, wn = (e, t) => {
	try {
		return Cn(e);
	} catch {
		return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
	}
};
function Tn(e) {
	let { type: t, colorSpace: n } = e, { values: r } = e;
	return t.includes("rgb") ? r = r.map((e, t) => t < 3 ? parseInt(e, 10) : e) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), r = t.includes("color") ? `${n} ${r.join(" ")}` : `${r.join(", ")}`, `${t}(${r})`;
}
function En(e) {
	e = Sn(e);
	let { values: t } = e, n = t[0], r = t[1] / 100, i = t[2] / 100, a = r * Math.min(i, 1 - i), o = (e, t = (e + n / 30) % 12) => i - a * Math.max(Math.min(t - 3, 9 - t, 1), -1), s = "rgb", c = [
		Math.round(o(0) * 255),
		Math.round(o(8) * 255),
		Math.round(o(4) * 255)
	];
	return e.type === "hsla" && (s += "a", c.push(t[3])), Tn({
		type: s,
		values: c
	});
}
function Dn(e) {
	e = Sn(e);
	let t = e.type === "hsl" || e.type === "hsla" ? Sn(En(e)).values : e.values;
	return t = t.map((t) => (e.type !== "color" && (t /= 255), t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4)), Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3));
}
function On(e, t) {
	let n = Dn(e), r = Dn(t);
	return (Math.max(n, r) + .05) / (Math.min(n, r) + .05);
}
function kn(e, t) {
	return e = Sn(e), t = bn(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Tn(e);
}
function An(e, t, n) {
	try {
		return kn(e, t);
	} catch {
		return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
	}
}
function jn(e, t) {
	if (e = Sn(e), t = bn(t), e.type.includes("hsl")) e.values[2] *= 1 - t;
	else if (e.type.includes("rgb") || e.type.includes("color")) for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
	return Tn(e);
}
function K(e, t, n) {
	try {
		return jn(e, t);
	} catch {
		return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
	}
}
function Mn(e, t) {
	if (e = Sn(e), t = bn(t), e.type.includes("hsl")) e.values[2] += (100 - e.values[2]) * t;
	else if (e.type.includes("rgb")) for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
	else if (e.type.includes("color")) for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
	return Tn(e);
}
function q(e, t, n) {
	try {
		return Mn(e, t);
	} catch {
		return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
	}
}
function Nn(e, t = .15) {
	return Dn(e) > .5 ? jn(e, t) : Mn(e, t);
}
function Pn(e, t, n) {
	try {
		return Nn(e, t);
	} catch {
		return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
	}
}
//#endregion
//#region node_modules/@mui/system/DefaultPropsProvider/DefaultPropsProvider.mjs
var Fn = /*#__PURE__*/ e.createContext(void 0);
process.env.NODE_ENV !== "production" && (N.default.node, N.default.object);
function In(e) {
	let { theme: t, name: n, props: r } = e;
	if (!t || !t.components || !t.components[n]) return r;
	let i = t.components[n];
	return i.defaultProps ? ne(i.defaultProps, r, t.components.mergeClassNameAndStyle) : !i.styleOverrides && !i.variants ? ne(i, r, t.components.mergeClassNameAndStyle) : r;
}
function Ln({ props: t, name: n }) {
	return In({
		props: t,
		name: n,
		theme: { components: e.useContext(Fn) }
	});
}
//#endregion
//#region node_modules/@mui/utils/useId/useId.mjs
var Rn = 0;
function zn(t) {
	let [n, r] = e.useState(t), i = t || n;
	return e.useEffect(() => {
		n ?? (Rn += 1, r(`mui-${Rn}`));
	}, [n]), i;
}
var Bn = { ...e }.useId;
function Vn(e) {
	if (Bn !== void 0) {
		let t = Bn();
		return e ?? t;
	}
	return zn(e);
}
//#endregion
//#region node_modules/@mui/system/memoTheme.mjs
var Hn = { theme: void 0 };
function Un(e) {
	let t, n;
	return function(r) {
		let i = t;
		return (i === void 0 || r.theme !== n) && (Hn.theme = r.theme, i = an(e(Hn)), t = i, n = r.theme), i;
	};
}
//#endregion
//#region node_modules/@mui/system/cssVars/createGetCssVar.mjs
function Wn(e = "") {
	function t(...n) {
		if (!n.length) return "";
		let r = n[0];
		return typeof r == "string" && !r.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${r}${t(...n.slice(1))})` : `, ${r}`;
	}
	return (n, ...r) => `var(--${e ? `${e}-` : ""}${n}${t(...r)})`;
}
//#endregion
//#region node_modules/@mui/system/cssVars/cssVarsParser.mjs
var Gn = /* @__PURE__ */ new Set([
	"__proto__",
	"constructor",
	"prototype"
]), Kn = (e, t, n, r = []) => {
	let i = e;
	for (let e = 0; e < t.length; e += 1) {
		let a = t[e];
		if (Gn.has(a)) break;
		e === t.length - 1 ? Array.isArray(i) ? i[Number(a)] = n : i && typeof i == "object" && (i[a] = n) : i && typeof i == "object" && (i[a] || (i[a] = r.includes(a) ? [] : {}), i = i[a]);
	}
}, qn = (e, t, n) => {
	function r(e, i = [], a = []) {
		Object.entries(e).forEach(([e, o]) => {
			(!n || n && !n([...i, e])) && o != null && (typeof o == "object" && Object.keys(o).length > 0 ? r(o, [...i, e], Array.isArray(o) ? [...a, e] : a) : t([...i, e], o, a));
		});
	}
	r(e);
}, Jn = (e, t) => typeof t == "number" ? [
	"lineHeight",
	"fontWeight",
	"opacity",
	"zIndex"
].some((t) => e.includes(t)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Yn(e, t) {
	let { prefix: n, shouldSkipGeneratingVar: r } = t || {}, i = {}, a = {}, o = {};
	return qn(e, (e, t, s) => {
		if ((typeof t == "string" || typeof t == "number") && (!r || !r(e, t))) {
			let r = `--${n ? `${n}-` : ""}${e.join("-")}`, c = Jn(e, t);
			Object.assign(i, { [r]: c }), Kn(a, e, `var(${r})`, s), Kn(o, e, `var(${r}, ${c})`, s);
		}
	}, (e) => e[0] === "vars"), {
		css: i,
		vars: a,
		varsWithDefaults: o
	};
}
//#endregion
//#region node_modules/@mui/system/cssVars/prepareCssVars.mjs
function Xn(e, t = {}) {
	let { getSelector: n = _, disableCssColorScheme: r, colorSchemeSelector: i, enableContrastVars: a } = t, { colorSchemes: o = {}, components: s, defaultColorScheme: c = "light", ...l } = e, { vars: u, css: d, varsWithDefaults: f } = Yn(l, t), p = f, m = {}, { [c]: h, ...g } = o;
	if (Object.entries(g || {}).forEach(([e, n]) => {
		let { vars: r, css: i, varsWithDefaults: a } = Yn(n, t);
		p = R(p, a), m[e] = {
			css: i,
			vars: r
		};
	}), h) {
		let { css: e, vars: n, varsWithDefaults: r } = Yn(h, t);
		p = R(p, r), m[c] = {
			css: e,
			vars: n
		};
	}
	function _(t, n) {
		let r = i;
		if (i === "class" && (r = ".%s"), i === "data" && (r = "[data-%s]"), i?.startsWith("data-") && !i.includes("%s") && (r = `[${i}="%s"]`), t) {
			if (r === "media") return e.defaultColorScheme === t ? ":root" : { [`@media (prefers-color-scheme: ${o[t]?.palette?.mode || t})`]: { ":root": n } };
			if (r) return e.defaultColorScheme === t ? `:root, ${r.replace("%s", String(t))}` : r.replace("%s", String(t));
		}
		return ":root";
	}
	return {
		vars: p,
		generateThemeVars: () => {
			let e = { ...u };
			return Object.entries(m).forEach(([, { vars: t }]) => {
				e = R(e, t);
			}), e;
		},
		generateStyleSheets: () => {
			let t = [], i = e.defaultColorScheme || "light";
			function s(e, n) {
				Object.keys(n).length && t.push(typeof e == "string" ? { [e]: { ...n } } : e);
			}
			s(n(void 0, { ...d }), d);
			let { [i]: c, ...l } = m;
			if (c) {
				let { css: e } = c, t = o[i]?.palette?.mode, a = !r && t ? {
					colorScheme: t,
					...e
				} : { ...e };
				s(n(i, { ...a }), a);
			}
			return Object.entries(l).forEach(([e, { css: t }]) => {
				let i = o[e]?.palette?.mode, a = !r && i ? {
					colorScheme: i,
					...t
				} : { ...t };
				s(n(e, { ...a }), a);
			}), a && t.push({ ":root": {
				"--__l-threshold": "0.7",
				"--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
				"--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
			} }), t;
		}
	};
}
//#endregion
//#region node_modules/@mui/system/cssVars/getColorSchemeSelector.mjs
function Zn(e) {
	return function(t) {
		return e === "media" ? (process.env.NODE_ENV !== "production" && t !== "light" && t !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${t}'.`), `@media (prefers-color-scheme: ${t})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${t}"] &` : e === "class" ? `.${t} &` : e === "data" ? `[data-${t}] &` : `${e.replace("%s", t)} &` : "&";
	};
}
//#endregion
//#region node_modules/@mui/material/colors/common.mjs
var Qn = {
	black: "#000",
	white: "#fff"
}, $n = {
	50: "#fafafa",
	100: "#f5f5f5",
	200: "#eeeeee",
	300: "#e0e0e0",
	400: "#bdbdbd",
	500: "#9e9e9e",
	600: "#757575",
	700: "#616161",
	800: "#424242",
	900: "#212121",
	A100: "#f5f5f5",
	A200: "#eeeeee",
	A400: "#bdbdbd",
	A700: "#616161"
}, er = {
	50: "#f3e5f5",
	100: "#e1bee7",
	200: "#ce93d8",
	300: "#ba68c8",
	400: "#ab47bc",
	500: "#9c27b0",
	600: "#8e24aa",
	700: "#7b1fa2",
	800: "#6a1b9a",
	900: "#4a148c",
	A100: "#ea80fc",
	A200: "#e040fb",
	A400: "#d500f9",
	A700: "#aa00ff"
}, tr = {
	50: "#ffebee",
	100: "#ffcdd2",
	200: "#ef9a9a",
	300: "#e57373",
	400: "#ef5350",
	500: "#f44336",
	600: "#e53935",
	700: "#d32f2f",
	800: "#c62828",
	900: "#b71c1c",
	A100: "#ff8a80",
	A200: "#ff5252",
	A400: "#ff1744",
	A700: "#d50000"
}, nr = {
	50: "#fff3e0",
	100: "#ffe0b2",
	200: "#ffcc80",
	300: "#ffb74d",
	400: "#ffa726",
	500: "#ff9800",
	600: "#fb8c00",
	700: "#f57c00",
	800: "#ef6c00",
	900: "#e65100",
	A100: "#ffd180",
	A200: "#ffab40",
	A400: "#ff9100",
	A700: "#ff6d00"
}, rr = {
	50: "#e3f2fd",
	100: "#bbdefb",
	200: "#90caf9",
	300: "#64b5f6",
	400: "#42a5f5",
	500: "#2196f3",
	600: "#1e88e5",
	700: "#1976d2",
	800: "#1565c0",
	900: "#0d47a1",
	A100: "#82b1ff",
	A200: "#448aff",
	A400: "#2979ff",
	A700: "#2962ff"
}, ir = {
	50: "#e1f5fe",
	100: "#b3e5fc",
	200: "#81d4fa",
	300: "#4fc3f7",
	400: "#29b6f6",
	500: "#03a9f4",
	600: "#039be5",
	700: "#0288d1",
	800: "#0277bd",
	900: "#01579b",
	A100: "#80d8ff",
	A200: "#40c4ff",
	A400: "#00b0ff",
	A700: "#0091ea"
}, ar = {
	50: "#e8f5e9",
	100: "#c8e6c9",
	200: "#a5d6a7",
	300: "#81c784",
	400: "#66bb6a",
	500: "#4caf50",
	600: "#43a047",
	700: "#388e3c",
	800: "#2e7d32",
	900: "#1b5e20",
	A100: "#b9f6ca",
	A200: "#69f0ae",
	A400: "#00e676",
	A700: "#00c853"
};
//#endregion
//#region node_modules/@mui/material/styles/createPalette.mjs
function or() {
	return {
		text: {
			primary: "rgba(0, 0, 0, 0.87)",
			secondary: "rgba(0, 0, 0, 0.6)",
			disabled: "rgba(0, 0, 0, 0.38)"
		},
		divider: "rgba(0, 0, 0, 0.12)",
		background: {
			paper: Qn.white,
			default: Qn.white
		},
		action: {
			active: "rgba(0, 0, 0, 0.54)",
			hover: "rgba(0, 0, 0, 0.04)",
			hoverOpacity: .04,
			selected: "rgba(0, 0, 0, 0.08)",
			selectedOpacity: .08,
			disabled: "rgba(0, 0, 0, 0.26)",
			disabledBackground: "rgba(0, 0, 0, 0.12)",
			disabledOpacity: .38,
			focus: "rgba(0, 0, 0, 0.12)",
			focusOpacity: .12,
			activatedOpacity: .12
		}
	};
}
var sr = or();
function cr() {
	return {
		text: {
			primary: Qn.white,
			secondary: "rgba(255, 255, 255, 0.7)",
			disabled: "rgba(255, 255, 255, 0.5)",
			icon: "rgba(255, 255, 255, 0.5)"
		},
		divider: "rgba(255, 255, 255, 0.12)",
		background: {
			paper: "#121212",
			default: "#121212"
		},
		action: {
			active: Qn.white,
			hover: "rgba(255, 255, 255, 0.08)",
			hoverOpacity: .08,
			selected: "rgba(255, 255, 255, 0.16)",
			selectedOpacity: .16,
			disabled: "rgba(255, 255, 255, 0.3)",
			disabledBackground: "rgba(255, 255, 255, 0.12)",
			disabledOpacity: .38,
			focus: "rgba(255, 255, 255, 0.12)",
			focusOpacity: .12,
			activatedOpacity: .24
		}
	};
}
var lr = cr();
function ur(e, t, n, r) {
	let i = r.light || r, a = r.dark || r * 1.5;
	e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Mn(e.main, i) : t === "dark" && (e.dark = jn(e.main, a)));
}
function dr(e, t, n, r, i) {
	let a = i.light || i, o = i.dark || i * 1.5;
	t[n] || (t.hasOwnProperty(r) ? t[n] = t[r] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(a * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(o * 100).toFixed(0)}%)`));
}
function fr(e = "light") {
	return e === "dark" ? {
		main: rr[200],
		light: rr[50],
		dark: rr[400]
	} : {
		main: rr[700],
		light: rr[400],
		dark: rr[800]
	};
}
function pr(e = "light") {
	return e === "dark" ? {
		main: er[200],
		light: er[50],
		dark: er[400]
	} : {
		main: er[500],
		light: er[300],
		dark: er[700]
	};
}
function mr(e = "light") {
	return e === "dark" ? {
		main: tr[500],
		light: tr[300],
		dark: tr[700]
	} : {
		main: tr[700],
		light: tr[400],
		dark: tr[800]
	};
}
function hr(e = "light") {
	return e === "dark" ? {
		main: ir[400],
		light: ir[300],
		dark: ir[700]
	} : {
		main: ir[700],
		light: ir[500],
		dark: ir[900]
	};
}
function gr(e = "light") {
	return e === "dark" ? {
		main: ar[400],
		light: ar[300],
		dark: ar[700]
	} : {
		main: ar[800],
		light: ar[500],
		dark: ar[900]
	};
}
function _r(e = "light") {
	return e === "dark" ? {
		main: nr[400],
		light: nr[300],
		dark: nr[700]
	} : {
		main: "#ed6c02",
		light: nr[500],
		dark: nr[900]
	};
}
function vr(e) {
	return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function yr(e) {
	let { mode: t = "light", contrastThreshold: n = 3, tonalOffset: r = .2, colorSpace: i, ...a } = e, o = e.primary || fr(t), s = e.secondary || pr(t), c = e.error || mr(t), l = e.info || hr(t), u = e.success || gr(t), d = e.warning || _r(t);
	function f(e) {
		if (i) return vr(e);
		let t = On(e, lr.text.primary) >= n ? lr.text.primary : sr.text.primary;
		if (process.env.NODE_ENV !== "production") {
			let n = On(e, t);
			n < 3 && console.error([
				`MUI: The contrast ratio of ${n}:1 for ${t} on ${e}`,
				"falls below the WCAG recommended absolute minimum contrast ratio of 3:1.",
				"https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"
			].join("\n"));
		}
		return t;
	}
	let p = ({ color: e, name: t, mainShade: n = 500, lightShade: a = 300, darkShade: o = 700 }) => {
		if (e = { ...e }, !e.main && e[n] && (e.main = e[n]), !e.hasOwnProperty("main")) throw Error(process.env.NODE_ENV === "production" ? O(11, t ? ` (${t})` : "", n) : `MUI: The color${t ? ` (${t})` : ""} provided to augmentColor(color) is invalid.\nThe color object needs to have a \`main\` property or a \`${n}\` property.`);
		if (typeof e.main != "string") throw Error(process.env.NODE_ENV === "production" ? O(12, t ? ` (${t})` : "", JSON.stringify(e.main)) : `MUI: The color${t ? ` (${t})` : ""} provided to augmentColor(color) is invalid.\n\`color.main\` should be a string, but \`${JSON.stringify(e.main)}\` was provided instead.\n
Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });`);
		return i ? (dr(i, e, "light", a, r), dr(i, e, "dark", o, r)) : (ur(e, "light", a, r), ur(e, "dark", o, r)), e.contrastText || (e.contrastText = f(e.main)), e;
	}, m;
	return t === "light" ? m = or() : t === "dark" && (m = cr()), process.env.NODE_ENV !== "production" && (m || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), R({
		common: { ...Qn },
		mode: t,
		primary: p({
			color: o,
			name: "primary"
		}),
		secondary: p({
			color: s,
			name: "secondary",
			mainShade: "A400",
			lightShade: "A200",
			darkShade: "A700"
		}),
		error: p({
			color: c,
			name: "error"
		}),
		warning: p({
			color: d,
			name: "warning"
		}),
		info: p({
			color: l,
			name: "info"
		}),
		success: p({
			color: u,
			name: "success"
		}),
		grey: $n,
		contrastThreshold: n,
		getContrastText: f,
		augmentColor: p,
		tonalOffset: r,
		...m
	}, a);
}
//#endregion
//#region node_modules/@mui/material/styles/focusVisible.mjs
var br = "--_focusVisible-offset", xr = "--_focusVisible-behavior", Sr = "--_focusVisible-shadow", Cr = `var(${br}, 1)`, wr = `var(${xr}, )`, Tr = {
	[br]: 1,
	[xr]: "initial"
};
function Er(e, t) {
	return t.reduce((e, t) => t && "focusVisible" in t ? R(e, { focusVisible: t.focusVisible }) : e, { focusVisible: e }).focusVisible;
}
function Dr(e) {
	return typeof e == "object" && !!e && typeof e.outlineOffset == "string" && e.outlineOffset.includes(br);
}
function Or(e, t) {
	return kr({
		outlineStyle: "solid",
		outlineColor: t,
		outlineWidth: 2,
		outlineOffset: 2,
		boxShadow: `var(${Sr}, 0 0)`,
		...e === !0 ? null : e
	});
}
function kr(e) {
	let t = e.outlineOffset ?? 0;
	(typeof t != "string" || !t.includes(br)) && (e.outlineOffset = `calc(${Cr} * ${typeof t == "number" ? `${t}px` : t})`);
	let n = /* @__PURE__ */ new Set([
		"none",
		"initial",
		"inherit",
		"unset",
		"revert",
		"revert-layer"
	]);
	return typeof e.boxShadow == "string" && !n.has(e.boxShadow.trim().toLowerCase()) && !/\binset\b/.test(e.boxShadow) && !e.boxShadow.includes(xr) && (e.boxShadow = `${wr} ${e.boxShadow}`), e;
}
//#endregion
//#region node_modules/@mui/system/cssVars/prepareTypographyVars.mjs
function Ar(e) {
	let t = {};
	return Object.entries(e).forEach((e) => {
		let [n, r] = e;
		typeof r == "object" && (t[n] = `${r.fontStyle ? `${r.fontStyle} ` : ""}${r.fontVariant ? `${r.fontVariant} ` : ""}${r.fontWeight ? `${r.fontWeight} ` : ""}${r.fontStretch ? `${r.fontStretch} ` : ""}${r.fontSize || ""}${r.lineHeight ? `/${r.lineHeight} ` : ""}${r.fontFamily || ""}`);
	}), t;
}
//#endregion
//#region node_modules/@mui/material/styles/createMixins.mjs
function jr(e, t) {
	return {
		toolbar: {
			minHeight: 56,
			[e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
			[e.up("sm")]: { minHeight: 64 }
		},
		...t
	};
}
//#endregion
//#region node_modules/@mui/material/styles/createTypography.mjs
function Mr(e) {
	return Math.round(e * 1e5) / 1e5;
}
var Nr = { textTransform: "uppercase" }, Pr = "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif";
function Fr(e, t) {
	let { fontFamily: n = Pr, fontSize: r = 14, fontWeightLight: i = 300, fontWeightRegular: a = 400, fontWeightMedium: o = 500, fontWeightBold: s = 700, htmlFontSize: c = 16, allVariants: l, pxToRem: u, ...d } = typeof t == "function" ? t(e) : t;
	process.env.NODE_ENV !== "production" && (typeof r != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
	let f = r / 14, p = u || ((e) => `${e / c * f}rem`), m = (e, t, r, i, a) => ({
		fontFamily: n,
		fontWeight: e,
		fontSize: p(t),
		lineHeight: r,
		...n === Pr ? { letterSpacing: `${Mr(i / t)}em` } : {},
		...a,
		...l
	});
	return R({
		htmlFontSize: c,
		pxToRem: p,
		fontFamily: n,
		fontSize: r,
		fontWeightLight: i,
		fontWeightRegular: a,
		fontWeightMedium: o,
		fontWeightBold: s,
		h1: m(i, 96, 1.167, -1.5),
		h2: m(i, 60, 1.2, -.5),
		h3: m(a, 48, 1.167, 0),
		h4: m(a, 34, 1.235, .25),
		h5: m(a, 24, 1.334, 0),
		h6: m(o, 20, 1.6, .15),
		subtitle1: m(a, 16, 1.75, .15),
		subtitle2: m(o, 14, 1.57, .1),
		body1: m(a, 16, 1.5, .15),
		body2: m(a, 14, 1.43, .15),
		button: m(o, 14, 1.75, .4, Nr),
		caption: m(a, 12, 1.66, .4),
		overline: m(a, 12, 2.66, 1, Nr),
		inherit: {
			fontFamily: "inherit",
			fontWeight: "inherit",
			fontSize: "inherit",
			lineHeight: "inherit",
			letterSpacing: "inherit"
		}
	}, d, { clone: !1 });
}
//#endregion
//#region node_modules/@mui/material/styles/shadows.mjs
var Ir = .2, Lr = .14, Rr = .12;
function J(...e) {
	return [
		`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Ir})`,
		`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Lr})`,
		`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Rr})`
	].join(",");
}
var zr = [
	"none",
	J(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
	J(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
	J(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
	J(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
	J(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
	J(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
	J(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
	J(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
	J(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
	J(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
	J(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
	J(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
	J(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
	J(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
	J(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
	J(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
	J(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
	J(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
	J(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
	J(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
	J(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
	J(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
	J(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
	J(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
], Br = ["all"], Vr = {}, Hr = {
	easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
	easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
	easeIn: "cubic-bezier(0.4, 0, 1, 1)",
	sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Ur = {
	shortest: 150,
	shorter: 200,
	short: 250,
	standard: 300,
	complex: 375,
	enteringScreen: 225,
	leavingScreen: 195
};
function Wr(e) {
	return `${Math.round(e)}ms`;
}
function Gr(e) {
	if (!e) return 0;
	let t = e / 36;
	return Math.min(Math.round((4 + 15 * t ** .25 + t / 5) * 10), 3e3);
}
function Kr(e) {
	let t = { ...e };
	delete t.reducedMotion;
	let n = {
		...Hr,
		...t.easing
	}, r = {
		...Ur,
		...t.duration
	};
	return {
		getAutoHeightDuration: Gr,
		create: t.create ?? ((e = Br, t = Vr) => {
			let { duration: i = r.standard, easing: a = n.easeInOut, delay: o = 0, ...s } = t;
			if (process.env.NODE_ENV !== "production") {
				let n = (e) => typeof e == "string", r = (e) => !Number.isNaN(parseFloat(e));
				!n(e) && !Array.isArray(e) && console.error("MUI: Argument \"props\" must be a string or Array."), !r(i) && !n(i) && console.error(`MUI: Argument "duration" must be a number or a string but found ${i}.`), n(a) || console.error("MUI: Argument \"easing\" must be a string."), !r(o) && !n(o) && console.error("MUI: Argument \"delay\" must be a number or a string."), typeof t != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join("\n")), Object.keys(s).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(s).join(",")}].`);
			}
			return (Array.isArray(e) ? e : [e]).map((e) => `${e} ${typeof i == "string" ? i : Wr(i)} ${a} ${typeof o == "string" ? o : Wr(o)}`).join(",");
		}),
		...t,
		easing: n,
		duration: r
	};
}
//#endregion
//#region node_modules/@mui/material/styles/createMotion.mjs
var qr = {};
function Jr(e = qr) {
	return {
		reducedMotion: "never",
		...e
	};
}
//#endregion
//#region node_modules/@mui/material/styles/zIndex.mjs
var Yr = {
	mobileStepper: 1e3,
	fab: 1050,
	speedDial: 1050,
	appBar: 1100,
	drawer: 1200,
	modal: 1300,
	snackbar: 1400,
	tooltip: 1500
};
//#endregion
//#region node_modules/@mui/material/styles/stringifyTheme.mjs
function Xr(e) {
	return L(e) || e === void 0 || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Zr(e = {}) {
	let t = { ...e };
	function n(e) {
		let t = Object.entries(e);
		for (let r = 0; r < t.length; r++) {
			let [i, a] = t[r];
			!Xr(a) || i.startsWith("unstable_") || i.startsWith("internal_") ? delete e[i] : L(a) && (e[i] = { ...a }, n(e[i]));
		}
	}
	return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.motion = { reducedMotion: 'never', ...theme.motion };
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
//#endregion
//#region node_modules/@mui/material/styles/createThemeNoVars.mjs
function Qr(e) {
	return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
var $r = (e) => {
	if (!Number.isNaN(+e)) return +e;
	let t = e.match(/\d*\.?\d+/g);
	if (!t) return 0;
	let n = 0;
	for (let e = 0; e < t.length; e += 1) n += +t[e];
	return n;
};
function ei(e) {
	Object.assign(e, {
		alpha(t, n) {
			let r = this || e;
			return r.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : kn(t, $r(n));
		},
		lighten(t, n) {
			let r = this || e;
			return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${Qr(n)})` : Mn(t, n);
		},
		darken(t, n) {
			let r = this || e;
			return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${Qr(n)})` : jn(t, n);
		}
	});
}
function ti(e = {}, ...t) {
	let { breakpoints: n, mixins: r = {}, spacing: i, palette: a = {}, motion: o = {}, transitions: s = {}, typography: c = {}, shape: l, colorSpace: u, ...d } = e;
	if (e.vars && e.generateThemeVars === void 0) throw Error(process.env.NODE_ENV === "production" ? O(22) : "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature.");
	let f = yr({
		...a,
		colorSpace: u
	}), p = qt(e), m = R(p, {
		mixins: jr(p.breakpoints, r),
		palette: f,
		shadows: zr.slice(),
		typography: Fr(f, c),
		motion: Jr(o),
		transitions: Kr(s),
		zIndex: { ...Yr }
	});
	if (m = R(m, d), m = t.reduce((e, t) => R(e, t), m), delete m.transitions.reducedMotion, m.focusVisible != null && m.focusVisible !== !1 && (m.focusVisible = Or(m.focusVisible, m.palette.primary.main)), process.env.NODE_ENV !== "production") {
		let e = [
			"active",
			"checked",
			"completed",
			"disabled",
			"error",
			"expanded",
			"focused",
			"focusVisible",
			"required",
			"selected"
		], t = (t, n) => {
			let r;
			for (r in t) {
				let i = t[r];
				if (e.includes(r) && Object.keys(i).length > 0) {
					if (process.env.NODE_ENV !== "production") {
						let e = $t("", r);
						console.error([
							`MUI: The \`${n}\` component increases the CSS specificity of the \`${r}\` internal state.`,
							"You can not override it like this: ",
							JSON.stringify(t, null, 2),
							"",
							`Instead, you need to use the '&.${e}' syntax:`,
							JSON.stringify({ root: { [`&.${e}`]: i } }, null, 2),
							"",
							"https://mui.com/r/state-classes-guide"
						].join("\n"));
					}
					t[r] = {};
				}
			}
		};
		Object.keys(m.components).forEach((e) => {
			let n = m.components[e].styleOverrides;
			n && e.startsWith("Mui") && t(n, e);
		});
	}
	return m.unstable_sxConfig = {
		...xt,
		...d?.unstable_sxConfig
	}, m.unstable_sx = function(e) {
		return wt({
			sx: e,
			theme: this
		});
	}, m.toRuntimeSource = Zr, ei(m), m;
}
//#endregion
//#region node_modules/@mui/material/styles/getOverlayAlpha.mjs
function ni(e) {
	let t;
	return t = e < 1 ? 5.11916 * e ** 2 : 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
//#endregion
//#region node_modules/@mui/material/styles/createColorScheme.mjs
var ri = [...Array(25)].map((e, t) => {
	if (t === 0) return "none";
	let n = ni(t);
	return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function ii(e) {
	return {
		inputPlaceholder: e === "dark" ? .5 : .42,
		inputUnderline: e === "dark" ? .7 : .42,
		switchTrackDisabled: e === "dark" ? .2 : .12,
		switchTrack: e === "dark" ? .3 : .38
	};
}
function ai(e) {
	return e === "dark" ? ri : [];
}
function oi(e) {
	let { palette: t = { mode: "light" }, opacity: n, overlays: r, colorSpace: i, ...a } = e, o = yr({
		...t,
		colorSpace: i
	});
	return {
		palette: o,
		opacity: {
			...ii(o.mode),
			...n
		},
		overlays: r || ai(o.mode),
		...a
	};
}
//#endregion
//#region node_modules/@mui/material/styles/shouldSkipGeneratingVar.mjs
function si(e) {
	return e[0] === "motion" || e[0] === "focusVisible" || !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
//#endregion
//#region node_modules/@mui/material/styles/excludeVariablesFromRoot.mjs
var ci = (e) => [
	...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`),
	`--${e ? `${e}-` : ""}palette-AppBar-darkBg`,
	`--${e ? `${e}-` : ""}palette-AppBar-darkColor`
], li = (e) => (t, n) => {
	let r = e.rootSelector || ":root", i = e.colorSchemeSelector, a = i;
	if (i === "class" && (a = ".%s"), i === "data" && (a = "[data-%s]"), i?.startsWith("data-") && !i.includes("%s") && (a = `[${i}="%s"]`), e.defaultColorScheme === t) {
		if (t === "dark") {
			let i = {};
			return ci(e.cssVarPrefix).forEach((e) => {
				i[e] = n[e], delete n[e];
			}), a === "media" ? {
				[r]: n,
				"@media (prefers-color-scheme: dark)": { [r]: i }
			} : a ? {
				[a.replace("%s", t)]: i,
				[`${r}, ${a.replace("%s", t)}`]: n
			} : { [r]: {
				...n,
				...i
			} };
		}
		if (a && a !== "media") return `${r}, ${a.replace("%s", String(t))}`;
	} else if (t) {
		if (a === "media") return { [`@media (prefers-color-scheme: ${String(t)})`]: { [r]: n } };
		if (a) return a.replace("%s", String(t));
	}
	return r;
};
//#endregion
//#region node_modules/@mui/material/styles/createThemeWithVars.mjs
function ui(e, t) {
	t.forEach((t) => {
		e[t] || (e[t] = {});
	});
}
function Y(e, t, n) {
	!e[t] && n && (e[t] = n);
}
function di(e) {
	return typeof e != "string" || !e.startsWith("hsl") ? e : En(e);
}
function fi(e, t) {
	`${t}Channel` in e || (e[`${t}Channel`] = wn(di(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function pi(e) {
	return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
var X = (e) => {
	try {
		return e();
	} catch {}
}, mi = (e = "mui") => Wn(e);
function hi(e, t, n, r, i) {
	if (!n) return;
	n = n === !0 ? {} : n;
	let a = i === "dark" ? "dark" : "light";
	if (!r) {
		t[i] = oi({
			...n,
			palette: {
				mode: a,
				...n?.palette
			},
			colorSpace: e
		});
		return;
	}
	let { palette: o, ...s } = ti({
		...r,
		palette: {
			mode: a,
			...n?.palette
		},
		colorSpace: e
	});
	return t[i] = {
		...n,
		palette: o,
		opacity: {
			...ii(a),
			...n?.opacity
		},
		overlays: n?.overlays || ai(a)
	}, s;
}
function gi(e = {}, ...t) {
	let { colorSchemes: n = { light: !0 }, defaultColorScheme: r, disableCssColorScheme: i = !1, cssVarPrefix: a = "mui", nativeColor: o = !1, shouldSkipGeneratingVar: s = si, colorSchemeSelector: c = n.light && n.dark ? "media" : void 0, rootSelector: l = ":root", ...u } = e, d = Object.keys(n)[0], f = r || (n.light && d !== "light" ? "light" : d), p = mi(a), { [f]: m, light: h, dark: g, ..._ } = n, v = { ..._ }, y = m;
	if ((f === "dark" && !("dark" in n) || f === "light" && !("light" in n)) && (y = !0), !y) throw Error(process.env.NODE_ENV === "production" ? O(21, f) : `MUI: The \`colorSchemes.${f}\` option is either missing or invalid.`);
	let b;
	o && (b = "oklch");
	let x = hi(b, v, y, u, f);
	h && !v.light && hi(b, v, h, void 0, "light"), g && !v.dark && hi(b, v, g, void 0, "dark");
	let S = {
		defaultColorScheme: f,
		...x,
		cssVarPrefix: a,
		colorSchemeSelector: c,
		rootSelector: l,
		getCssVar: p,
		colorSchemes: v,
		font: {
			...Ar(x.typography),
			...x.font
		},
		spacing: pi(u.spacing)
	};
	Object.keys(S.colorSchemes).forEach((e) => {
		let t = S.colorSchemes[e].palette, n = (e) => {
			let n = e.split("-"), r = n[1], i = n[2];
			return p(e, t[r][i]);
		};
		t.mode === "light" && (Y(t.common, "background", "#fff"), Y(t.common, "onBackground", "#000")), t.mode === "dark" && (Y(t.common, "background", "#000"), Y(t.common, "onBackground", "#fff"));
		function r(e, t, n) {
			if (b) {
				let r;
				return e === An && (r = `transparent ${((1 - n) * 100).toFixed(0)}%`), e === K && (r = `#000 ${(n * 100).toFixed(0)}%`), e === q && (r = `#fff ${(n * 100).toFixed(0)}%`), `color-mix(in ${b}, ${t}, ${r})`;
			}
			return e(t, n);
		}
		if (ui(t, [
			"Alert",
			"AppBar",
			"Avatar",
			"Button",
			"Chip",
			"FilledInput",
			"LinearProgress",
			"Skeleton",
			"Slider",
			"SnackbarContent",
			"SpeedDialAction",
			"StepConnector",
			"StepContent",
			"Switch",
			"TableCell",
			"Tooltip"
		]), t.mode === "light") {
			Y(t.Alert, "errorColor", r(K, o ? p("palette-error-light") : t.error.light, .6)), Y(t.Alert, "infoColor", r(K, o ? p("palette-info-light") : t.info.light, .6)), Y(t.Alert, "successColor", r(K, o ? p("palette-success-light") : t.success.light, .6)), Y(t.Alert, "warningColor", r(K, o ? p("palette-warning-light") : t.warning.light, .6)), Y(t.Alert, "errorFilledBg", n("palette-error-main")), Y(t.Alert, "infoFilledBg", n("palette-info-main")), Y(t.Alert, "successFilledBg", n("palette-success-main")), Y(t.Alert, "warningFilledBg", n("palette-warning-main")), Y(t.Alert, "errorFilledColor", X(() => t.getContrastText(t.error.main))), Y(t.Alert, "infoFilledColor", X(() => t.getContrastText(t.info.main))), Y(t.Alert, "successFilledColor", X(() => t.getContrastText(t.success.main))), Y(t.Alert, "warningFilledColor", X(() => t.getContrastText(t.warning.main))), Y(t.Alert, "errorStandardBg", r(q, o ? p("palette-error-light") : t.error.light, .9)), Y(t.Alert, "infoStandardBg", r(q, o ? p("palette-info-light") : t.info.light, .9)), Y(t.Alert, "successStandardBg", r(q, o ? p("palette-success-light") : t.success.light, .9)), Y(t.Alert, "warningStandardBg", r(q, o ? p("palette-warning-light") : t.warning.light, .9)), Y(t.Alert, "errorIconColor", n("palette-error-main")), Y(t.Alert, "infoIconColor", n("palette-info-main")), Y(t.Alert, "successIconColor", n("palette-success-main")), Y(t.Alert, "warningIconColor", n("palette-warning-main")), Y(t.AppBar, "defaultBg", n("palette-grey-100")), Y(t.Avatar, "defaultBg", n("palette-grey-400")), Y(t.Button, "inheritContainedBg", n("palette-grey-300")), Y(t.Button, "inheritContainedHoverBg", n("palette-grey-A100")), Y(t.Chip, "defaultBorder", n("palette-grey-400")), Y(t.Chip, "defaultAvatarColor", n("palette-grey-700")), Y(t.Chip, "defaultIconColor", n("palette-grey-700")), Y(t.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), Y(t.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), Y(t.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), Y(t.LinearProgress, "primaryBg", r(q, o ? p("palette-primary-main") : t.primary.main, .62)), Y(t.LinearProgress, "secondaryBg", r(q, o ? p("palette-secondary-main") : t.secondary.main, .62)), Y(t.LinearProgress, "errorBg", r(q, o ? p("palette-error-main") : t.error.main, .62)), Y(t.LinearProgress, "infoBg", r(q, o ? p("palette-info-main") : t.info.main, .62)), Y(t.LinearProgress, "successBg", r(q, o ? p("palette-success-main") : t.success.main, .62)), Y(t.LinearProgress, "warningBg", r(q, o ? p("palette-warning-light") : t.warning.main, .62)), Y(t.Skeleton, "bg", b ? r(An, o ? p("palette-text-primary") : t.text.primary, .11) : `rgba(${n("palette-text-primaryChannel")} / 0.11)`), Y(t.Slider, "primaryTrack", r(q, o ? p("palette-primary-main") : t.primary.main, .62)), Y(t.Slider, "secondaryTrack", r(q, o ? p("palette-secondary-main") : t.secondary.main, .62)), Y(t.Slider, "errorTrack", r(q, o ? p("palette-error-main") : t.error.main, .62)), Y(t.Slider, "infoTrack", r(q, o ? p("palette-info-main") : t.info.main, .62)), Y(t.Slider, "successTrack", r(q, o ? p("palette-success-main") : t.success.main, .62)), Y(t.Slider, "warningTrack", r(q, o ? p("palette-warning-main") : t.warning.main, .62));
			let e = b ? r(K, o ? p("palette-background-default") : t.background.default, .6825) : Pn(t.background.default, .8);
			Y(t.SnackbarContent, "bg", e), Y(t.SnackbarContent, "color", X(() => b ? lr.text.primary : t.getContrastText(e))), Y(t.SpeedDialAction, "fabHoverBg", Pn(t.background.paper, .15)), Y(t.StepConnector, "border", n("palette-grey-400")), Y(t.StepContent, "border", n("palette-grey-400")), Y(t.Switch, "defaultColor", n("palette-common-white")), Y(t.Switch, "defaultDisabledColor", n("palette-grey-100")), Y(t.Switch, "primaryDisabledColor", r(q, o ? p("palette-primary-main") : t.primary.main, .62)), Y(t.Switch, "secondaryDisabledColor", r(q, o ? p("palette-secondary-main") : t.secondary.main, .62)), Y(t.Switch, "errorDisabledColor", r(q, o ? p("palette-error-main") : t.error.main, .62)), Y(t.Switch, "infoDisabledColor", r(q, o ? p("palette-info-main") : t.info.main, .62)), Y(t.Switch, "successDisabledColor", r(q, o ? p("palette-success-main") : t.success.main, .62)), Y(t.Switch, "warningDisabledColor", r(q, o ? p("palette-warning-main") : t.warning.main, .62)), Y(t.TableCell, "border", r(q, An(o ? p("palette-divider") : t.divider, 1), .88)), Y(t.Tooltip, "bg", r(An, o ? p("palette-grey-700") : t.grey[700], .92));
		}
		if (t.mode === "dark") {
			Y(t.Alert, "errorColor", r(q, o ? p("palette-error-light") : t.error.light, .6)), Y(t.Alert, "infoColor", r(q, o ? p("palette-info-light") : t.info.light, .6)), Y(t.Alert, "successColor", r(q, o ? p("palette-success-light") : t.success.light, .6)), Y(t.Alert, "warningColor", r(q, o ? p("palette-warning-light") : t.warning.light, .6)), Y(t.Alert, "errorFilledBg", n("palette-error-dark")), Y(t.Alert, "infoFilledBg", n("palette-info-dark")), Y(t.Alert, "successFilledBg", n("palette-success-dark")), Y(t.Alert, "warningFilledBg", n("palette-warning-dark")), Y(t.Alert, "errorFilledColor", X(() => t.getContrastText(t.error.dark))), Y(t.Alert, "infoFilledColor", X(() => t.getContrastText(t.info.dark))), Y(t.Alert, "successFilledColor", X(() => t.getContrastText(t.success.dark))), Y(t.Alert, "warningFilledColor", X(() => t.getContrastText(t.warning.dark))), Y(t.Alert, "errorStandardBg", r(K, o ? p("palette-error-light") : t.error.light, .9)), Y(t.Alert, "infoStandardBg", r(K, o ? p("palette-info-light") : t.info.light, .9)), Y(t.Alert, "successStandardBg", r(K, o ? p("palette-success-light") : t.success.light, .9)), Y(t.Alert, "warningStandardBg", r(K, o ? p("palette-warning-light") : t.warning.light, .9)), Y(t.Alert, "errorIconColor", n("palette-error-main")), Y(t.Alert, "infoIconColor", n("palette-info-main")), Y(t.Alert, "successIconColor", n("palette-success-main")), Y(t.Alert, "warningIconColor", n("palette-warning-main")), Y(t.AppBar, "defaultBg", n("palette-grey-900")), Y(t.AppBar, "darkBg", n("palette-background-paper")), Y(t.AppBar, "darkColor", n("palette-text-primary")), Y(t.Avatar, "defaultBg", n("palette-grey-600")), Y(t.Button, "inheritContainedBg", n("palette-grey-800")), Y(t.Button, "inheritContainedHoverBg", n("palette-grey-700")), Y(t.Chip, "defaultBorder", n("palette-grey-700")), Y(t.Chip, "defaultAvatarColor", n("palette-grey-300")), Y(t.Chip, "defaultIconColor", n("palette-grey-300")), Y(t.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), Y(t.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), Y(t.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), Y(t.LinearProgress, "primaryBg", r(K, o ? p("palette-primary-main") : t.primary.main, .5)), Y(t.LinearProgress, "secondaryBg", r(K, o ? p("palette-secondary-main") : t.secondary.main, .5)), Y(t.LinearProgress, "errorBg", r(K, o ? p("palette-error-main") : t.error.main, .5)), Y(t.LinearProgress, "infoBg", r(K, o ? p("palette-info-main") : t.info.main, .5)), Y(t.LinearProgress, "successBg", r(K, o ? p("palette-success-main") : t.success.main, .5)), Y(t.LinearProgress, "warningBg", r(K, o ? p("palette-warning-main") : t.warning.main, .5)), Y(t.Skeleton, "bg", b ? r(An, o ? p("palette-text-primary") : t.text.primary, .13) : `rgba(${n("palette-text-primaryChannel")} / 0.13)`), Y(t.Slider, "primaryTrack", r(K, o ? p("palette-primary-main") : t.primary.main, .5)), Y(t.Slider, "secondaryTrack", r(K, o ? p("palette-secondary-main") : t.secondary.main, .5)), Y(t.Slider, "errorTrack", r(K, o ? p("palette-error-main") : t.error.main, .5)), Y(t.Slider, "infoTrack", r(K, o ? p("palette-info-main") : t.info.main, .5)), Y(t.Slider, "successTrack", r(K, o ? p("palette-success-main") : t.success.main, .5)), Y(t.Slider, "warningTrack", r(K, o ? p("palette-warning-light") : t.warning.main, .5));
			let e = b ? r(q, o ? p("palette-background-default") : t.background.default, .985) : Pn(t.background.default, .98);
			Y(t.SnackbarContent, "bg", e), Y(t.SnackbarContent, "color", X(() => b ? sr.text.primary : t.getContrastText(e))), Y(t.SpeedDialAction, "fabHoverBg", Pn(t.background.paper, .15)), Y(t.StepConnector, "border", n("palette-grey-600")), Y(t.StepContent, "border", n("palette-grey-600")), Y(t.Switch, "defaultColor", n("palette-grey-300")), Y(t.Switch, "defaultDisabledColor", n("palette-grey-600")), Y(t.Switch, "primaryDisabledColor", r(K, o ? p("palette-primary-main") : t.primary.main, .55)), Y(t.Switch, "secondaryDisabledColor", r(K, o ? p("palette-secondary-main") : t.secondary.main, .55)), Y(t.Switch, "errorDisabledColor", r(K, o ? p("palette-error-main") : t.error.main, .55)), Y(t.Switch, "infoDisabledColor", r(K, o ? p("palette-info-main") : t.info.main, .55)), Y(t.Switch, "successDisabledColor", r(K, o ? p("palette-success-main") : t.success.main, .55)), Y(t.Switch, "warningDisabledColor", r(K, o ? p("palette-warning-light") : t.warning.main, .55)), Y(t.TableCell, "border", r(K, An(o ? p("palette-divider") : t.divider, 1), .68)), Y(t.Tooltip, "bg", r(An, o ? p("palette-grey-700") : t.grey[700], .92));
		}
		o || (fi(t.background, "default"), fi(t.background, "paper"), fi(t.common, "background"), fi(t.common, "onBackground"), fi(t, "divider")), Object.keys(t).forEach((e) => {
			let n = t[e];
			e !== "tonalOffset" && !o && n && typeof n == "object" && (n.main && Y(t[e], "mainChannel", wn(di(n.main))), n.light && Y(t[e], "lightChannel", wn(di(n.light))), n.dark && Y(t[e], "darkChannel", wn(di(n.dark))), n.contrastText && Y(t[e], "contrastTextChannel", wn(di(n.contrastText))), e === "text" && (fi(t[e], "primary"), fi(t[e], "secondary")), e === "action" && (n.active && fi(t[e], "active"), n.selected && fi(t[e], "selected")));
		});
	}), S = t.reduce((e, t) => R(e, t), S);
	let C = Er(e.focusVisible, t);
	C != null && C !== !1 && (S.focusVisible = Or(C, p("palette-primary-main")));
	let w = {
		prefix: a,
		disableCssColorScheme: i,
		shouldSkipGeneratingVar: s,
		getSelector: li(S),
		enableContrastVars: o
	}, { vars: ee, generateThemeVars: te, generateStyleSheets: T } = Xn(S, w);
	return S.vars = ee, Object.entries(S.colorSchemes[S.defaultColorScheme]).forEach(([e, t]) => {
		S[e] = t;
	}), S.generateThemeVars = te, S.generateStyleSheets = T, S.generateSpacing = function() {
		return Gt(u.spacing, We(this));
	}, S.getColorSchemeSelector = Zn(c), S.spacing = S.generateSpacing(), S.shouldSkipGeneratingVar = s, S.unstable_sxConfig = {
		...xt,
		...u?.unstable_sxConfig
	}, S.unstable_sx = function(e) {
		return wt({
			sx: e,
			theme: this
		});
	}, S.internal_cache = {}, S.toRuntimeSource = Zr, S;
}
//#endregion
//#region node_modules/@mui/material/styles/createTheme.mjs
function _i(e, t, n) {
	e.colorSchemes && n && (e.colorSchemes[t] = {
		...n !== !0 && n,
		palette: yr({
			...n === !0 ? {} : n.palette,
			mode: t
		})
	});
}
function vi(e = {}, ...t) {
	let { palette: n, cssVariables: r = !1, colorSchemes: i = n ? void 0 : { light: !0 }, defaultColorScheme: a = n?.mode, ...o } = e, s = a || "light", c = i?.[s], l = {
		...i,
		...n ? { [s]: {
			...typeof c != "boolean" && c,
			palette: n
		} } : void 0
	};
	if (r === !1) {
		if (!("colorSchemes" in e)) return ti(e, ...t);
		let r = n;
		"palette" in e || l[s] && (l[s] === !0 ? s === "dark" && (r = { mode: "dark" }) : r = l[s].palette);
		let i = ti({
			...e,
			palette: r
		}, ...t);
		if (i.defaultColorScheme = s, i.colorSchemes = l, i.palette.mode === "light" && (i.colorSchemes.light = {
			...l.light !== !0 && l.light,
			palette: i.palette
		}, _i(i, "dark", l.dark)), i.palette.mode === "dark" && (i.colorSchemes.dark = {
			...l.dark !== !0 && l.dark,
			palette: i.palette
		}, _i(i, "light", l.light)), i.focusVisible != null && i.focusVisible !== !1) {
			let n = i.focusVisible, r = Er(e.focusVisible, t), a = r && typeof r == "object" ? r.outlineColor : void 0;
			if (!a || Dr(r) && a === i.palette.primary.main) {
				let { outlineColor: e, ...t } = n;
				n = t;
			}
			Object.keys(i.colorSchemes).forEach((e) => {
				let t = i.colorSchemes?.[e]?.palette;
				t?.primary && (i.colorSchemes[e].focusVisible = Or(n, t.primary.main));
			});
		}
		return i;
	}
	return !n && !("light" in l) && s === "light" && (l.light = !0), gi({
		...o,
		colorSchemes: l,
		defaultColorScheme: s,
		...typeof r != "boolean" && r
	}, ...t);
}
//#endregion
//#region node_modules/@mui/material/styles/defaultTheme.mjs
var yi = vi(), bi = "$$material";
//#endregion
//#region node_modules/@mui/material/styles/useTheme.mjs
function xi() {
	let t = Zt(yi);
	return process.env.NODE_ENV !== "production" && e.useDebugValue(t), t.$$material || t;
}
//#endregion
//#region node_modules/@mui/material/styles/slotShouldForwardProp.mjs
function Si(e) {
	return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
//#endregion
//#region node_modules/@mui/material/styles/rootShouldForwardProp.mjs
var Ci = (e) => Si(e) && e !== "classes", Z = pn({
	themeId: bi,
	defaultTheme: yi,
	rootShouldForwardProp: Ci
}), wi = Un;
process.env.NODE_ENV !== "production" && (N.default.node, N.default.object.isRequired);
function Ti(e) {
	return Ln(e);
}
//#endregion
//#region node_modules/@mui/material/styles/reducedMotion.mjs
var Ei = { transition: "none" };
function Di(e, t) {
	return e === "always" ? t : e === "system" ? { "@media (prefers-reduced-motion: reduce)": t } : null;
}
//#endregion
//#region node_modules/@mui/material/transitions/utils.mjs
var Oi = {}, ki = ["all"], Ai = {};
function ji(e, t) {
	let n = t ?? Ei;
	return Di(e.motion?.reducedMotion, n);
}
function Mi(e, t = ki, n = Ai) {
	let r = e.transitions?.create?.(t, n), i = ji(e);
	if (r === void 0) return i ?? Oi;
	let a = { transition: r };
	return i ? {
		...a,
		...i
	} : a;
}
//#endregion
//#region node_modules/@mui/material/utils/useId.mjs
var Ni = Vn;
//#endregion
//#region node_modules/@mui/utils/useEventCallback/useEventCallback.mjs
function Pi(t) {
	let n = e.useRef(t);
	return vn(() => {
		n.current = t;
	}), e.useRef((...e) => (0, n.current)(...e)).current;
}
//#endregion
//#region node_modules/@mui/material/utils/useEventCallback.mjs
var Fi = Pi;
//#endregion
//#region node_modules/@mui/utils/useForkRef/useForkRef.mjs
function Ii(...t) {
	let n = e.useRef(void 0), r = e.useCallback((e) => {
		let n = t.map((t) => {
			if (t == null) return null;
			if (typeof t == "function") {
				let n = t, r = n(e);
				return typeof r == "function" ? r : () => {
					n(null);
				};
			}
			return t.current = e, () => {
				t.current = null;
			};
		});
		return () => {
			n.forEach((e) => e?.());
		};
	}, t);
	return e.useMemo(() => t.every((e) => e == null) ? null : (e) => {
		n.current &&= (n.current(), void 0), e != null && (n.current = r(e));
	}, t);
}
//#endregion
//#region node_modules/@mui/material/utils/useForkRef.mjs
var Li = Ii, Ri = N.default.oneOfType([N.default.func, N.default.object]);
//#endregion
//#region node_modules/@mui/utils/chainPropTypes/chainPropTypes.mjs
function zi(e, t) {
	return process.env.NODE_ENV === "production" ? () => null : function(...n) {
		return e(...n) || t(...n);
	};
}
//#endregion
//#region node_modules/@mui/utils/elementTypeAcceptingRef/elementTypeAcceptingRef.mjs
function Bi(e) {
	let { prototype: t = {} } = e;
	return !!t.isReactComponent;
}
function Vi(t, n, r, i, a) {
	let o = t[n], s = a || n;
	if (o == null || typeof window > "u") return null;
	let c;
	return typeof o == "function" && !Bi(o) && (c = "Did you accidentally provide a plain function component instead?"), o === e.Fragment && (c = "Did you accidentally provide a React.Fragment instead?"), c === void 0 ? null : /* @__PURE__ */ Error(`Invalid ${i} \`${s}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`);
}
var Hi = zi(N.default.elementType, Vi);
//#endregion
//#region node_modules/@mui/utils/isFocusVisible/isFocusVisible.mjs
function Ui(e) {
	try {
		return e.matches(":focus-visible");
	} catch {
		process.env.NODE_ENV !== "production" && !window.navigator.userAgent.includes("jsdom") && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join("\n"));
	}
	return !1;
}
//#endregion
//#region node_modules/@mui/material/utils/useFocusableWhenDisabled.mjs
function Wi(t) {
	let { focusableWhenDisabled: n, disabled: r, composite: i = !1, tabIndex: a = 0, isNativeButton: o } = t, s = i && n !== !1, c = i && n === !1;
	return e.useMemo(() => {
		let e = { onKeyDown(e) {
			r && n && e.key !== "Tab" && e.preventDefault();
		} };
		return i || (e.tabIndex = a, !o && r && (e.tabIndex = n ? a : -1)), (o && (n || s) || !o && r) && (e["aria-disabled"] = r), o && (!n || c) && (e.disabled = r), e;
	}, [
		i,
		r,
		n,
		s,
		c,
		o,
		a
	]);
}
//#endregion
//#region node_modules/@mui/material/ButtonBase/useButtonBase.mjs
var Gi = {};
function Ki(t) {
	let { nativeButton: n, nativeButtonProp: r, internalNativeButton: i = n, allowInferredHostMismatch: a = !1, disabled: o, type: s, hasFormAction: c = !1, tabIndex: l = 0, focusableWhenDisabled: u, stopEventPropagation: d = !1, onBeforeKeyDown: f, onBeforeKeyUp: p } = t, m = e.useRef(null), h = u === !0, g = Wi({
		focusableWhenDisabled: h,
		disabled: o,
		isNativeButton: n,
		tabIndex: l
	});
	process.env.NODE_ENV !== "production" && e.useEffect(() => {
		let e = m.current;
		if (e == null) return;
		let t = e.tagName === "BUTTON";
		if (r !== void 0) {
			r && !t && console.error("MUI: A component that acts as a button expected a native <button> because the `nativeButton` prop is true. Rendering a non-<button> removes native button semantics, which can impact forms and accessibility. Render a real <button> or set `nativeButton` to `false`."), !r && t && console.error("MUI: A component that acts as a button expected a non-<button> because the `nativeButton` prop is false. Rendering a <button> keeps native behavior while additionally applies non-native attributes and handlers, which can add unintended extra attributes (such as `role` or `aria-disabled`). Render a non-<button> such as <div>, or set `nativeButton` to `true`.");
			return;
		}
		a || (i && !t && console.error("MUI: A component rendering a native <button> resolved to a non-<button> element, but `nativeButton={false}` was not specified and the resolved root is a non-<button>. When rendering a custom component, set `nativeButton={false}` explicitly or render a <button> element."), !i && t && console.error("MUI: A component that acts as a non-native button resolved to a native <button> element, but `nativeButton={true}` was not specified. When rendering a custom component, set `nativeButton={true}` explicitly or render a non-<button> element."));
	}, [
		a,
		i,
		r
	]);
	let _ = e.useCallback(() => {
		let e = m.current;
		return e == null ? n : e.tagName === "BUTTON" || !!(e.tagName === "A" && e.href);
	}, [n]), v = e.useMemo(() => {
		let e = h ? {} : { tabIndex: o ? -1 : l };
		return n ? (e.type = s === void 0 && !c ? "button" : s, h || (e.disabled = o)) : (e.role = "button", !h && o && (e["aria-disabled"] = o)), h ? {
			...e,
			...g
		} : e;
	}, [
		o,
		h,
		g,
		c,
		n,
		l,
		s
	]);
	return {
		getButtonProps: e.useCallback((e = Gi) => {
			let { onClick: t, onKeyDown: n, onKeyUp: r, ...i } = e, a = (e) => {
				if (d && e.stopPropagation(), o) {
					e.preventDefault();
					return;
				}
				t?.(e);
			}, s = (e) => {
				if (h && g.onKeyDown(e), !o && (f?.(e), n?.(e), !(e.target !== e.currentTarget || _()))) {
					if (e.key === " ") {
						e.preventDefault();
						return;
					}
					e.key === "Enter" && (e.preventDefault(), e.currentTarget.click());
				}
			}, c = (e) => {
				o || (p?.(e), r?.(e), e.target === e.currentTarget && !_() && e.key === " " && !e.defaultPrevented && e.currentTarget.click());
			};
			return {
				...v,
				...i,
				onClick: a,
				onKeyDown: s,
				onKeyUp: c
			};
		}, [
			v,
			o,
			h,
			g,
			_,
			f,
			p,
			d
		]),
		rootRef: m
	};
}
//#endregion
//#region node_modules/@mui/utils/useLazyRef/useLazyRef.mjs
var qi = {};
function Ji(t, n) {
	let r = e.useRef(qi);
	return r.current === qi && (r.current = t(n)), r;
}
//#endregion
//#region node_modules/@mui/material/useLazyRipple/useLazyRipple.mjs
var Yi = class t {
	static create() {
		return new t();
	}
	static use() {
		let n = Ji(t.create).current, [r, i] = e.useState(!1);
		return n.shouldMount = r, n.setShouldMount = i, e.useEffect(n.mountEffect, [r]), n;
	}
	constructor() {
		this.ref = { current: null }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
	}
	mount() {
		return this.mounted || (this.mounted = Zi(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
	}
	mountEffect = () => {
		this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
	};
	start(...e) {
		this.mount().then(() => this.ref.current?.start(...e));
	}
	stop(...e) {
		this.mount().then(() => this.ref.current?.stop(...e));
	}
	pulsate(...e) {
		this.mount().then(() => this.ref.current?.pulsate(...e));
	}
};
function Xi() {
	return Yi.use();
}
function Zi() {
	let e, t, n = new Promise((n, r) => {
		e = n, t = r;
	});
	return n.resolve = e, n.reject = t, n;
}
//#endregion
//#region node_modules/@mui/utils/useOnMount/useOnMount.mjs
var Qi = [];
function $i(t) {
	e.useEffect(t, Qi);
}
//#endregion
//#region node_modules/@mui/utils/useTimeout/useTimeout.mjs
var ea = class e {
	static create() {
		return new e();
	}
	currentId = null;
	start(e, t) {
		this.clear(), this.currentId = setTimeout(() => {
			this.currentId = null, t();
		}, e);
	}
	clear = () => {
		this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
	};
	disposeEffect = () => this.clear;
};
function ta() {
	let e = Ji(ea.create).current;
	return $i(e.disposeEffect), e;
}
//#endregion
//#region node_modules/@mui/material/ButtonBase/Ripple.mjs
function na(t) {
	let { className: n, classes: r, pulsate: i = !1, rippleX: o, rippleY: s, rippleSize: c, in: l, onExited: u, timeout: d } = t, [f, p] = e.useState(!1), m = ta(), h = e.useRef(!1), g = e.useRef(u);
	g.current = u;
	let _ = u != null, v = T(n, r.ripple, r.rippleVisible, i && r.ripplePulsate), y = {
		width: c,
		height: c,
		top: -(c / 2) + s,
		left: -(c / 2) + o
	}, b = T(r.child, f && r.childLeaving, i && r.childPulsate);
	return !l && !f && p(!0), e.useEffect(() => {
		!l && _ ? h.current || (h.current = !0, m.start(d, () => {
			h.current = !1, g.current?.();
		})) : (h.current = !1, m.clear());
	}, [
		m,
		_,
		l,
		d
	]), /*#__PURE__*/ a("span", {
		className: v,
		style: y,
		children: /*#__PURE__*/ a("span", { className: b })
	});
}
process.env.NODE_ENV !== "production" && (na.propTypes = {
	classes: N.default.object.isRequired,
	className: N.default.string,
	in: N.default.bool,
	onExited: N.default.func,
	pulsate: N.default.bool,
	rippleSize: N.default.number,
	rippleX: N.default.number,
	rippleY: N.default.number,
	timeout: N.default.number.isRequired
});
//#endregion
//#region node_modules/@mui/material/ButtonBase/touchRippleClasses.mjs
var Q = en("MuiTouchRipple", [
	"root",
	"ripple",
	"rippleVisible",
	"ripplePulsate",
	"child",
	"childLeaving",
	"childPulsate"
]), ra = "(prefers-reduced-motion: reduce)", ia = 0, aa = "0ms", oa = () => {}, sa = () => !1, ca = () => !0, la = () => oa;
function ua(t) {
	let [n, r] = e.useState(() => ({
		enabled: t,
		matches: t ? null : !1
	})), i = n.matches;
	return n.enabled !== t && (i = null, t || (i = !1)), vn(() => {
		let e = (e) => {
			r((n) => n.enabled === t && n.matches === e ? n : {
				enabled: t,
				matches: e
			});
		};
		if (!t) {
			n.enabled && e(!1);
			return;
		}
		if (typeof window > "u" || typeof window.matchMedia != "function") {
			e(!1);
			return;
		}
		let i = window.matchMedia(ra), a = () => {
			e(i.matches);
		};
		return a(), i.addEventListener("change", a), () => {
			i.removeEventListener("change", a);
		};
	}, [t, n.enabled]), i;
}
var da = { ...e }.useSyncExternalStore;
function fa(t) {
	let n = t ? ca : sa, [r, i] = e.useMemo(() => {
		if (!t || typeof window > "u" || typeof window.matchMedia != "function") return [sa, la];
		let e = window.matchMedia(ra);
		return [() => e.matches, (t) => (e.addEventListener("change", t), () => {
			e.removeEventListener("change", t);
		})];
	}, [t]);
	return da(i, r, n);
}
var pa = da === void 0 ? ua : fa;
function ma(t, n) {
	let r = pa(!n && t === "system"), i = !n && (t === "always" || t === "system" && r !== !1);
	return e.useMemo(() => ({
		shouldReduceMotion: i,
		getTransitionTiming(e) {
			return i ? {
				duration: ia,
				delay: aa
			} : e;
		}
	}), [i]);
}
//#endregion
//#region node_modules/@mui/material/ButtonBase/TouchRipple.mjs
var ha = 550, ga = {}, _a = [], va = () => {};
function ya(e, t) {
	let n = new Set(t), r = /* @__PURE__ */ new Map(), i = [];
	for (let t of e) n.has(t) ? i.length > 0 && (r.set(t, i), i = []) : i.push(t);
	let a = [];
	for (let e of t) {
		let t = r.get(e);
		t && a.push(...t), a.push(e);
	}
	return a.push(...i), a;
}
function ba({ event: e, element: t, center: n }) {
	let r = t ? t.getBoundingClientRect() : {
		width: 0,
		height: 0,
		left: 0,
		top: 0
	}, i, a;
	if (n || e === void 0 || e.clientX === 0 && e.clientY === 0 || !e.clientX && !e.touches) i = Math.round(r.width / 2), a = Math.round(r.height / 2);
	else {
		let { clientX: t, clientY: n } = e.touches && e.touches.length > 0 ? e.touches[0] : e;
		i = Math.round(t - r.left), a = Math.round(n - r.top);
	}
	let o;
	if (n) o = Math.sqrt((2 * r.width ** 2 + r.height ** 2) / 3), o % 2 == 0 && (o += 1);
	else {
		let e = Math.max(Math.abs((t ? t.clientWidth : 0) - i), i) * 2 + 2, n = Math.max(Math.abs((t ? t.clientHeight : 0) - a), a) * 2 + 2;
		o = Math.sqrt(e ** 2 + n ** 2);
	}
	return {
		rippleX: i,
		rippleY: a,
		rippleSize: o
	};
}
var xa = i`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Sa = i`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Ca = i`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`;
function wa(e) {
	if (e.motion.reducedMotion === "always") return null;
	let t = r`
    &.${Q.rippleVisible} {
      animation-name: ${xa};
      animation-duration: ${ha}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${Q.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${Q.childLeaving} {
      animation-name: ${Sa};
      animation-duration: ${ha}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${Q.childPulsate} {
      animation-name: ${Ca};
      animation-duration: 2500ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;
	return e.motion.reducedMotion === "system" ? r`
      @media (prefers-reduced-motion: no-preference) {
        ${t}
      }
    ` : t;
}
var Ta = Z("span", {
	name: "MuiTouchRipple",
	slot: "Root"
})({
	overflow: "hidden",
	pointerEvents: "none",
	position: "absolute",
	zIndex: 0,
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	borderRadius: "inherit"
}), Ea = Z(na, {
	name: "MuiTouchRipple",
	slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Q.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
  }

  /*
   * Order matters: 'child', 'childLeaving' and 'childPulsate' apply to the same
   * element with equal specificity, so the later rule wins. 'child' must come
   * before 'childLeaving' so the leaving 'opacity: 0' takes precedence. A focus
   * (pulsate) ripple keeps 'pulsateKeyframe' (no opacity animation) on exit, so
   * it relies on this static 'opacity: 0' to disappear on blur instead of
   * lingering until removal.
   */
  & .${Q.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Q.childLeaving} {
    opacity: 0;
  }

  & .${Q.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({ theme: e }) => wa(e)}
`, Da = /*#__PURE__*/ e.forwardRef(function(t, n) {
	let r = Ti({
		props: t,
		name: "MuiTouchRipple"
	}), i = ma(xi().motion.reducedMotion, !1), { center: o = !1, classes: s = ga, className: c, ...l } = r, [u, d] = e.useState({
		items: _a,
		order: _a
	}), f = u.items, p = e.useRef(0), m = e.useRef(null), h = e.useRef(!1);
	$i(() => (h.current = !0, () => {
		h.current = !1;
	})), e.useEffect(() => {
		m.current &&= (m.current(), null);
	}, [f]);
	let g = e.useRef(!1), _ = ta(), v = e.useRef(null), y = e.useRef(null), b = Fi((e) => {
		h.current && d((t) => {
			let n = t.items.filter((t) => t.key !== e);
			return {
				items: n,
				order: ya(t.order.filter((t) => t !== e), n.filter((e) => !e.exiting).map((e) => e.key))
			};
		});
	}), x = Fi((e) => {
		let { pulsate: t, rippleX: n, rippleY: r, rippleSize: i, cb: a } = e, o = p.current;
		p.current += 1, d((e) => {
			let a = [...e.items, {
				key: o,
				pulsate: t,
				rippleX: n,
				rippleY: r,
				rippleSize: i,
				exiting: !1
			}];
			return {
				items: a,
				order: ya(e.order, a.filter((e) => !e.exiting).map((e) => e.key))
			};
		}), m.current = a;
	}), S = Fi((e = ga, t = ga, n = va) => {
		let { pulsate: r = !1, center: i = o || t.pulsate, fakeElement: a = !1 } = t;
		if (e?.type === "mousedown" && g.current) {
			g.current = !1;
			return;
		}
		e?.type === "touchstart" && (g.current = !0);
		let { rippleX: s, rippleY: c, rippleSize: l } = ba({
			event: e,
			element: a ? null : y.current,
			center: i
		});
		e?.touches ? v.current === null && (v.current = () => {
			x({
				pulsate: r,
				rippleX: s,
				rippleY: c,
				rippleSize: l,
				cb: n
			});
		}, _.start(80, () => {
			v.current &&= (v.current(), null);
		})) : x({
			pulsate: r,
			rippleX: s,
			rippleY: c,
			rippleSize: l,
			cb: n
		});
	}), C = Fi(() => {
		S(ga, { pulsate: !0 });
	}), w = Fi((e, t) => {
		if (_.clear(), e?.type === "touchend" && v.current) {
			v.current(), v.current = null, _.start(0, () => {
				w(e, t);
			});
			return;
		}
		v.current = null, d((e) => {
			let t = e.items.findIndex((e) => !e.exiting);
			if (t === -1) return e;
			let n = e.items.slice();
			return n[t] = {
				...n[t],
				exiting: !0
			}, {
				items: n,
				order: ya(e.order, n.filter((e) => !e.exiting).map((e) => e.key))
			};
		}), m.current = t;
	});
	e.useImperativeHandle(n, () => ({
		pulsate: C,
		start: S,
		stop: w
	}), [
		C,
		S,
		w
	]);
	let ee = new Map(f.map((e) => [e.key, e])), te = u.order.map((e) => ee.get(e)).filter(Boolean);
	return /*#__PURE__*/ a(Ta, {
		className: T(Q.root, s.root, c),
		ref: y,
		...l,
		children: te.map((e) => /*#__PURE__*/ a(Ea, {
			classes: {
				ripple: T(s.ripple, Q.ripple),
				rippleVisible: T(s.rippleVisible, Q.rippleVisible),
				ripplePulsate: T(s.ripplePulsate, Q.ripplePulsate),
				child: T(s.child, Q.child),
				childLeaving: T(s.childLeaving, Q.childLeaving),
				childPulsate: T(s.childPulsate, Q.childPulsate)
			},
			timeout: i.shouldReduceMotion ? 0 : ha,
			pulsate: e.pulsate,
			rippleX: e.rippleX,
			rippleY: e.rippleY,
			rippleSize: e.rippleSize,
			in: !e.exiting,
			onExited: () => b(e.key)
		}, e.key))
	});
});
process.env.NODE_ENV !== "production" && (Da.propTypes = {
	center: N.default.bool,
	classes: N.default.object,
	className: N.default.string
});
//#endregion
//#region node_modules/@mui/material/ButtonBase/buttonBaseClasses.mjs
function Oa(e) {
	return $t("MuiButtonBase", e);
}
var ka = en("MuiButtonBase", [
	"root",
	"disabled",
	"focusVisible"
]), Aa = (e) => {
	let { disabled: t, focusVisible: n, focusVisibleClassName: r, suppressFocusVisible: i, classes: a } = e, o = re({ root: [
		"root",
		t && "disabled",
		n && !i && "focusVisible"
	] }, Oa, a);
	return n && !i && r && (o.root += ` ${r}`), o;
}, ja = Z("button", {
	name: "MuiButtonBase",
	slot: "Root"
})(wi(({ theme: e }) => ({
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	position: "relative",
	boxSizing: "border-box",
	WebkitTapHighlightColor: "transparent",
	backgroundColor: "transparent",
	outline: 0,
	border: 0,
	margin: 0,
	borderRadius: 0,
	padding: 0,
	cursor: "pointer",
	userSelect: "none",
	verticalAlign: "middle",
	MozAppearance: "none",
	WebkitAppearance: "none",
	textDecoration: "none",
	color: "inherit",
	"&::-moz-focus-inner": { borderStyle: "none" },
	[`&.${ka.disabled}`]: {
		pointerEvents: "none",
		cursor: "default"
	},
	"@media print": { colorAdjust: "exact" },
	variants: [{
		props: { internalDisabledThemeFocusVisible: !1 },
		style: e.focusVisible && {
			...Tr,
			[`&.${ka.focusVisible}`]: e.focusVisible
		}
	}]
}))), Ma = /*#__PURE__*/ e.forwardRef(function(t, n) {
	let r = Ti({
		props: t,
		name: "MuiButtonBase"
	}), { action: i, centerRipple: s = !1, children: c, className: l, component: u = "button", disabled: d = !1, disableRipple: f = !1, disableTouchRipple: p = !1, focusRipple: m = !1, focusVisibleClassName: h, focusableWhenDisabled: g, suppressFocusVisible: _ = !1, internalNativeButton: v, internalDisabledThemeFocusVisible: y = !1, LinkComponent: b = "a", nativeButton: x, onBlur: S, onClick: C, onContextMenu: w, onDragLeave: ee, onFocus: te, onFocusVisible: ne, onKeyDown: re, onKeyUp: E, onMouseDown: D, onMouseLeave: O, onMouseUp: k, onTouchEnd: A, onTouchMove: j, onTouchStart: ie, tabIndex: ae = 0, TouchRippleProps: oe, touchRippleRef: se, type: ce, ...le } = r, M = !!(le.href || le.to), ue = !!le.formAction, N = u;
	N === "button" && M && (N = b);
	let P = typeof N == "string" ? N === "button" : v ?? !1, de = x ?? P, F = Xi(), fe = Li(F.ref, se), [I, L] = e.useState(!1);
	(d || _) && I && L(!1);
	let pe = Fi((e) => {
		m && !e.repeat && I && e.key === " " && F.stop(e, () => {
			F.start(e);
		});
	}), R = Fi((e) => {
		m && e.key === " " && I && !e.defaultPrevented && F.stop(e, () => {
			F.pulsate(e);
		});
	}), { getButtonProps: me, rootRef: he } = Ki({
		nativeButton: de,
		nativeButtonProp: x,
		internalNativeButton: P,
		allowInferredHostMismatch: M || typeof N == "string",
		disabled: d,
		type: ce,
		hasFormAction: ue,
		tabIndex: ae,
		onBeforeKeyDown: pe,
		onBeforeKeyUp: R
	}), { onClick: ge, onKeyDown: _e, onKeyUp: ve, ...ye } = me({
		onClick: C,
		onKeyDown: re,
		onKeyUp: E
	});
	e.useImperativeHandle(i, () => ({ focusVisible: () => {
		L(!0), he.current.focus();
	} }), [he]);
	let be = F.shouldMount && !f && !d;
	e.useEffect(() => {
		I && m && !f && F.pulsate();
	}, [
		f,
		m,
		I,
		F
	]);
	let xe = Na(F, "start", D, p), Se = Na(F, "stop", w, p), Ce = Na(F, "stop", ee, p), we = Na(F, "stop", k, p), Te = Na(F, "stop", (e) => {
		I && e.preventDefault(), O && O(e);
	}, p), Ee = Na(F, "start", ie, p), De = Na(F, "stop", A, p), Oe = Na(F, "stop", j, p), ke = Na(F, "stop", (e) => {
		Ui(e.target) || L(!1), S && S(e);
	}, !1), Ae = Fi((e) => {
		he.current ||= e.currentTarget, !_ && Ui(e.target) && (L(!0), ne && ne(e)), te && te(e);
	}), je = {};
	M && (je.tabIndex = d ? -1 : ae, d && (je["aria-disabled"] = d), je.type = ce);
	let Me = Li(n, he), Ne = {
		...r,
		centerRipple: s,
		component: u,
		disabled: d,
		disableRipple: f,
		disableTouchRipple: p,
		focusRipple: m,
		suppressFocusVisible: _,
		tabIndex: ae,
		focusVisible: I,
		internalDisabledThemeFocusVisible: y
	}, Pe = Aa(Ne);
	return /*#__PURE__*/ o(ja, {
		as: N,
		className: T(Pe.root, l),
		ownerState: Ne,
		onBlur: ke,
		onClick: ge,
		onContextMenu: Se,
		onFocus: Ae,
		onKeyDown: _e,
		onKeyUp: ve,
		onMouseDown: xe,
		onMouseLeave: Te,
		onMouseUp: we,
		onDragLeave: Ce,
		onTouchEnd: De,
		onTouchMove: Oe,
		onTouchStart: Ee,
		ref: Me,
		...M ? je : ye,
		...le,
		children: [c, be ? /*#__PURE__*/ a(Da, {
			ref: fe,
			center: s,
			...oe
		}) : null]
	});
});
function Na(e, t, n, r = !1) {
	return Fi((i) => (n && n(i), r || e[t](i), !0));
}
process.env.NODE_ENV !== "production" && (Ma.propTypes = {
	action: Ri,
	centerRipple: N.default.bool,
	children: N.default.node,
	classes: N.default.object,
	className: N.default.string,
	component: Hi,
	disabled: N.default.bool,
	disableRipple: N.default.bool,
	disableTouchRipple: N.default.bool,
	focusRipple: N.default.bool,
	focusVisibleClassName: N.default.string,
	formAction: N.default.oneOfType([N.default.func, N.default.string]),
	href: N.default.any,
	LinkComponent: N.default.elementType,
	nativeButton: N.default.bool,
	onBlur: N.default.func,
	onClick: N.default.func,
	onContextMenu: N.default.func,
	onDragLeave: N.default.func,
	onFocus: N.default.func,
	onFocusVisible: N.default.func,
	onKeyDown: N.default.func,
	onKeyUp: N.default.func,
	onMouseDown: N.default.func,
	onMouseLeave: N.default.func,
	onMouseUp: N.default.func,
	onTouchEnd: N.default.func,
	onTouchMove: N.default.func,
	onTouchStart: N.default.func,
	sx: N.default.oneOfType([
		N.default.arrayOf(N.default.oneOfType([
			N.default.func,
			N.default.object,
			N.default.bool
		])),
		N.default.func,
		N.default.object
	]),
	tabIndex: N.default.number,
	TouchRippleProps: N.default.object,
	touchRippleRef: N.default.oneOfType([N.default.func, N.default.shape({ current: N.default.shape({
		pulsate: N.default.func.isRequired,
		start: N.default.func.isRequired,
		stop: N.default.func.isRequired
	}) })]),
	type: N.default.string
});
//#endregion
//#region node_modules/@mui/material/utils/createSimplePaletteValueFilter.mjs
function Pa(e) {
	return typeof e.main == "string";
}
function Fa(e, t = []) {
	if (!Pa(e)) return !1;
	for (let n of t) if (!e.hasOwnProperty(n) || typeof e[n] != "string") return !1;
	return !0;
}
function Ia(e = []) {
	return ([, t]) => t && Fa(t, e);
}
//#endregion
//#region node_modules/@mui/material/CircularProgress/circularProgressClasses.mjs
function La(e) {
	return $t("MuiCircularProgress", e);
}
en("MuiCircularProgress", [
	"root",
	"determinate",
	"indeterminate",
	"colorPrimary",
	"colorSecondary",
	"svg",
	"track",
	"circle",
	"circleDisableShrink"
]);
//#endregion
//#region node_modules/@mui/material/CircularProgress/CircularProgress.mjs
var $ = 44, Ra = !1, za = !1, Ba = i`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Va = i`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, Ha = typeof Ba == "string" ? null : r`
        animation: ${Ba} 1.4s linear infinite;
      `, Ua = typeof Va == "string" ? null : r`
        animation: ${Va} 1.4s ease-in-out infinite;
      `, Wa = (e) => {
	let { classes: t, variant: n, color: r, disableShrink: i } = e;
	return re({
		root: [
			"root",
			n,
			`color${A(r)}`
		],
		svg: ["svg"],
		track: ["track"],
		circle: ["circle", i && "circleDisableShrink"]
	}, La, t);
}, Ga = Z("span", {
	name: "MuiCircularProgress",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			t[n.variant],
			t[`color${A(n.color)}`]
		];
	}
})(wi(({ theme: e }) => {
	let t = ji(e, { animation: "none" });
	return {
		display: "inline-block",
		variants: [
			{
				props: { variant: "determinate" },
				style: { ...Mi(e, "transform") }
			},
			{
				props: { variant: "indeterminate" },
				style: Ha || { animation: `${Ba} 1.4s linear infinite` }
			},
			...t ? [{
				props: { variant: "indeterminate" },
				style: t
			}] : [],
			...Object.entries(e.palette).filter(Ia()).map(([t]) => ({
				props: { color: t },
				style: { color: (e.vars || e).palette[t].main }
			}))
		]
	};
})), Ka = Z("svg", {
	name: "MuiCircularProgress",
	slot: "Svg"
})({ display: "block" }), qa = Z("circle", {
	name: "MuiCircularProgress",
	slot: "Circle",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [t.circle, n.disableShrink && t.circleDisableShrink];
	}
})(wi(({ theme: e }) => {
	let t = ji(e, { animation: "none" });
	return {
		stroke: "currentColor",
		variants: [
			{
				props: { variant: "determinate" },
				style: { ...Mi(e, "stroke-dashoffset") }
			},
			{
				props: { variant: "indeterminate" },
				style: {
					strokeDasharray: "80px, 200px",
					strokeDashoffset: 0
				}
			},
			{
				props: ({ ownerState: e }) => e.variant === "indeterminate" && !e.disableShrink,
				style: Ua || { animation: `${Va} 1.4s ease-in-out infinite` }
			},
			...t ? [{
				props: ({ ownerState: e }) => e.variant === "indeterminate" && !e.disableShrink,
				style: t
			}] : []
		]
	};
})), Ja = Z("circle", {
	name: "MuiCircularProgress",
	slot: "Track"
})(wi(({ theme: e }) => ({
	stroke: "currentColor",
	opacity: (e.vars || e).palette.action.activatedOpacity
}))), Ya = /*#__PURE__*/ e.forwardRef(function(e, t) {
	let n = Ti({
		props: e,
		name: "MuiCircularProgress"
	}), { className: r, color: i = "primary", disableShrink: s = !1, enableTrackSlot: c = !1, min: l, max: u, size: d = 40, style: f, thickness: p = 3.6, value: m = n.min ?? 0, variant: h = "indeterminate", ...g } = n;
	process.env.NODE_ENV !== "production" && !Ra && h === "indeterminate" && (l !== void 0 || u !== void 0) && (console.warn("MUI: You have provided the `min` or `max` props with an 'indeterminate' variant. These props will have no effect."), Ra = !0);
	let _ = l ?? 0, v = u ?? 100, y = {
		...n,
		color: i,
		disableShrink: s,
		size: d,
		thickness: p,
		value: m,
		variant: h,
		enableTrackSlot: c
	}, b = Wa(y), x = {}, S = {}, C = {};
	if (h === "determinate") {
		let e = 2 * Math.PI * (($ - p) / 2);
		process.env.NODE_ENV !== "production" && !za && (m < _ || m > v || _ >= v) && (console.error(`MUI: The min, max, and value props in CircularProgress should be numbers where min < max and min <= value <= max. Received min=${_}, max=${v}, value=${m}.`), za = !0);
		let t = v - _;
		x.strokeDasharray = e.toFixed(3), x.strokeDashoffset = t > 0 ? `${((v - m) / t * e).toFixed(3)}px` : `${e.toFixed(3)}px`, S.transform = "rotate(-90deg)", C["aria-valuenow"] = m, C["aria-valuemin"] = _, C["aria-valuemax"] = v;
	}
	return /*#__PURE__*/ a(Ga, {
		className: T(b.root, r),
		style: {
			width: d,
			height: d,
			...S,
			...f
		},
		ownerState: y,
		ref: t,
		role: "progressbar",
		...C,
		...g,
		children: /*#__PURE__*/ o(Ka, {
			className: b.svg,
			ownerState: y,
			viewBox: `${$ / 2} ${$ / 2} ${$} ${$}`,
			children: [c ? /*#__PURE__*/ a(Ja, {
				className: b.track,
				ownerState: y,
				cx: $,
				cy: $,
				r: ($ - p) / 2,
				fill: "none",
				strokeWidth: p,
				"aria-hidden": "true"
			}) : null, /*#__PURE__*/ a(qa, {
				className: b.circle,
				style: x,
				ownerState: y,
				cx: $,
				cy: $,
				r: ($ - p) / 2,
				fill: "none",
				strokeWidth: p
			})]
		})
	});
});
process.env.NODE_ENV !== "production" && (Ya.propTypes = {
	classes: N.default.object,
	className: N.default.string,
	color: N.default.oneOfType([N.default.oneOf([
		"inherit",
		"primary",
		"secondary",
		"error",
		"info",
		"success",
		"warning"
	]), N.default.string]),
	disableShrink: zi(N.default.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? /* @__PURE__ */ Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
	enableTrackSlot: N.default.bool,
	max: N.default.number,
	min: N.default.number,
	size: N.default.oneOfType([N.default.number, N.default.string]),
	style: N.default.object,
	sx: N.default.oneOfType([
		N.default.arrayOf(N.default.oneOfType([
			N.default.func,
			N.default.object,
			N.default.bool
		])),
		N.default.func,
		N.default.object
	]),
	thickness: N.default.number,
	value: N.default.number,
	variant: N.default.oneOf(["determinate", "indeterminate"])
});
//#endregion
//#region node_modules/@mui/material/Button/buttonClasses.mjs
function Xa(e) {
	return $t("MuiButton", e);
}
var Za = en("MuiButton", /* @__PURE__ */ "root.text.outlined.contained.disableElevation.focusVisible.disabled.colorInherit.colorPrimary.colorSecondary.colorSuccess.colorError.colorInfo.colorWarning.sizeMedium.sizeSmall.sizeLarge.fullWidth.startIcon.endIcon.icon.loading.loadingWrapper.loadingIconPlaceholder.loadingIndicator.loadingPositionCenter.loadingPositionStart.loadingPositionEnd".split(".")), Qa = /*#__PURE__*/ e.createContext({});
process.env.NODE_ENV !== "production" && (Qa.displayName = "ButtonGroupContext");
//#endregion
//#region node_modules/@mui/material/ButtonGroup/ButtonGroupButtonContext.mjs
var $a = /*#__PURE__*/ e.createContext(void 0);
process.env.NODE_ENV !== "production" && ($a.displayName = "ButtonGroupButtonContext");
//#endregion
//#region node_modules/@mui/material/Button/Button.mjs
var eo = (e) => {
	let { color: t, disableElevation: n, fullWidth: r, size: i, variant: a, loading: o, loadingPosition: s, classes: c } = e, l = re({
		root: [
			"root",
			o && "loading",
			a,
			`size${A(i)}`,
			`color${A(t)}`,
			n && "disableElevation",
			r && "fullWidth",
			o && `loadingPosition${A(s)}`
		],
		startIcon: ["icon", "startIcon"],
		endIcon: ["icon", "endIcon"],
		loadingIndicator: ["loadingIndicator"],
		loadingWrapper: ["loadingWrapper"]
	}, Xa, c);
	return {
		...c,
		...l
	};
}, to = [
	{
		props: { size: "small" },
		style: { "& > *:nth-of-type(1)": { fontSize: 18 } }
	},
	{
		props: { size: "medium" },
		style: { "& > *:nth-of-type(1)": { fontSize: 20 } }
	},
	{
		props: { size: "large" },
		style: { "& > *:nth-of-type(1)": { fontSize: 22 } }
	}
], no = Z(Ma, {
	shouldForwardProp: (e) => Ci(e) || e === "classes",
	name: "MuiButton",
	slot: "Root",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [
			t.root,
			t[n.variant],
			t[`size${A(n.size)}`],
			n.color === "inherit" && t.colorInherit,
			n.disableElevation && t.disableElevation,
			n.fullWidth && t.fullWidth,
			n.loading && t.loading
		];
	}
})(wi(({ theme: e }) => {
	let t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], n = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
	return {
		...e.typography.button,
		minWidth: 64,
		padding: "6px 16px",
		border: 0,
		borderRadius: (e.vars || e).shape.borderRadius,
		...Mi(e, [
			"background-color",
			"box-shadow",
			"border-color",
			"color"
		], { duration: e.transitions.duration.short }),
		"&:hover": { textDecoration: "none" },
		[`&.${Za.disabled}`]: { color: (e.vars || e).palette.action.disabled },
		variants: [
			{
				props: { variant: "contained" },
				style: {
					color: "var(--variant-containedColor)",
					backgroundColor: "var(--variant-containedBg)",
					boxShadow: (e.vars || e).shadows[2],
					"&:hover": {
						boxShadow: (e.vars || e).shadows[4],
						"@media (hover: none)": { boxShadow: (e.vars || e).shadows[2] }
					},
					"&:active": { boxShadow: (e.vars || e).shadows[8] },
					[`&.${Za.focusVisible}`]: {
						...e.focusVisible,
						boxShadow: e.focusVisible?.boxShadow ? `${(e.vars || e).shadows[6]}, ${e.focusVisible.boxShadow}` : (e.vars || e).shadows[6]
					},
					[`&.${Za.disabled}`]: {
						color: (e.vars || e).palette.action.disabled,
						boxShadow: (e.vars || e).shadows[0],
						backgroundColor: (e.vars || e).palette.action.disabledBackground
					}
				}
			},
			{
				props: { variant: "outlined" },
				style: {
					padding: "5px 15px",
					border: "1px solid currentColor",
					borderColor: "var(--variant-outlinedBorder, currentColor)",
					backgroundColor: "var(--variant-outlinedBg)",
					color: "var(--variant-outlinedColor)",
					[`&.${Za.disabled}`]: { border: `1px solid ${(e.vars || e).palette.action.disabledBackground}` }
				}
			},
			{
				props: { variant: "text" },
				style: {
					padding: "6px 8px",
					color: "var(--variant-textColor)",
					backgroundColor: "var(--variant-textBg)"
				}
			},
			...Object.entries(e.palette).filter(Ia()).map(([t]) => ({
				props: { color: t },
				style: {
					"--variant-textColor": (e.vars || e).palette[t].main,
					"--variant-outlinedColor": (e.vars || e).palette[t].main,
					"--variant-outlinedBorder": e.alpha((e.vars || e).palette[t].main, .5),
					"--variant-containedColor": (e.vars || e).palette[t].contrastText,
					"--variant-containedBg": (e.vars || e).palette[t].main,
					"@media (hover: hover)": { "&:hover": {
						"--variant-containedBg": (e.vars || e).palette[t].dark,
						"--variant-textBg": e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity),
						"--variant-outlinedBorder": (e.vars || e).palette[t].main,
						"--variant-outlinedBg": e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity)
					} }
				}
			})),
			{
				props: { color: "inherit" },
				style: {
					color: "inherit",
					borderColor: "currentColor",
					"--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
					"@media (hover: hover)": { "&:hover": {
						"--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : n,
						"--variant-textBg": e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity),
						"--variant-outlinedBg": e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity)
					} }
				}
			},
			{
				props: {
					size: "small",
					variant: "text"
				},
				style: {
					padding: "4px 5px",
					fontSize: e.typography.pxToRem(13)
				}
			},
			{
				props: {
					size: "large",
					variant: "text"
				},
				style: {
					padding: "8px 11px",
					fontSize: e.typography.pxToRem(15)
				}
			},
			{
				props: {
					size: "small",
					variant: "outlined"
				},
				style: {
					padding: "3px 9px",
					fontSize: e.typography.pxToRem(13)
				}
			},
			{
				props: {
					size: "large",
					variant: "outlined"
				},
				style: {
					padding: "7px 21px",
					fontSize: e.typography.pxToRem(15)
				}
			},
			{
				props: {
					size: "small",
					variant: "contained"
				},
				style: {
					padding: "4px 10px",
					fontSize: e.typography.pxToRem(13)
				}
			},
			{
				props: {
					size: "large",
					variant: "contained"
				},
				style: {
					padding: "8px 22px",
					fontSize: e.typography.pxToRem(15)
				}
			},
			{
				props: { disableElevation: !0 },
				style: {
					boxShadow: "none",
					"&:hover": { boxShadow: "none" },
					[`&.${Za.focusVisible}`]: { boxShadow: e.focusVisible?.boxShadow ?? "none" },
					"&:active": { boxShadow: "none" },
					[`&.${Za.disabled}`]: { boxShadow: "none" }
				}
			},
			{
				props: { fullWidth: !0 },
				style: { width: "100%" }
			},
			{
				props: { loadingPosition: "center" },
				style: {
					...Mi(e, [
						"background-color",
						"box-shadow",
						"border-color"
					], { duration: e.transitions.duration.short }),
					[`&.${Za.loading}`]: { color: "transparent" }
				}
			}
		]
	};
})), ro = Z("span", {
	name: "MuiButton",
	slot: "StartIcon",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [t.startIcon, n.loading && t.startIconLoadingStart];
	}
})(({ theme: e }) => ({
	display: "inherit",
	alignItems: "center",
	marginRight: 8,
	marginLeft: -4,
	"&::before": {
		content: "\"\\200b\"",
		width: 0,
		overflow: "hidden"
	},
	variants: [
		{
			props: { size: "small" },
			style: { marginLeft: -2 }
		},
		{
			props: {
				loadingPosition: "start",
				loading: !0
			},
			style: {
				...Mi(e, ["opacity"], { duration: e.transitions.duration.short }),
				opacity: 0
			}
		},
		{
			props: {
				loadingPosition: "start",
				loading: !0,
				fullWidth: !0
			},
			style: { marginRight: -8 }
		},
		...to
	]
})), io = Z("span", {
	name: "MuiButton",
	slot: "EndIcon",
	overridesResolver: (e, t) => {
		let { ownerState: n } = e;
		return [t.endIcon, n.loading && t.endIconLoadingEnd];
	}
})(({ theme: e }) => ({
	display: "inherit",
	marginRight: -4,
	marginLeft: 8,
	variants: [
		{
			props: { size: "small" },
			style: { marginRight: -2 }
		},
		{
			props: {
				loadingPosition: "end",
				loading: !0
			},
			style: {
				...Mi(e, ["opacity"], { duration: e.transitions.duration.short }),
				opacity: 0
			}
		},
		{
			props: {
				loadingPosition: "end",
				loading: !0,
				fullWidth: !0
			},
			style: { marginLeft: -8 }
		},
		...to
	]
})), ao = Z("span", {
	name: "MuiButton",
	slot: "LoadingIndicator"
})(({ theme: e }) => ({
	display: "none",
	position: "absolute",
	visibility: "visible",
	variants: [
		{
			props: { loading: !0 },
			style: { display: "flex" }
		},
		{
			props: { loadingPosition: "start" },
			style: { left: 14 }
		},
		{
			props: {
				loadingPosition: "start",
				size: "small"
			},
			style: { left: 10 }
		},
		{
			props: {
				variant: "text",
				loadingPosition: "start"
			},
			style: { left: 6 }
		},
		{
			props: { loadingPosition: "center" },
			style: {
				left: "50%",
				transform: "translate(-50%)",
				color: (e.vars || e).palette.action.disabled
			}
		},
		{
			props: { loadingPosition: "end" },
			style: { right: 14 }
		},
		{
			props: {
				loadingPosition: "end",
				size: "small"
			},
			style: { right: 10 }
		},
		{
			props: {
				variant: "text",
				loadingPosition: "end"
			},
			style: { right: 6 }
		},
		{
			props: {
				loadingPosition: "start",
				fullWidth: !0
			},
			style: {
				position: "relative",
				left: -10
			}
		},
		{
			props: {
				loadingPosition: "end",
				fullWidth: !0
			},
			style: {
				position: "relative",
				right: -10
			}
		}
	]
})), oo = Z("span", {
	name: "MuiButton",
	slot: "LoadingIconPlaceholder"
})({
	display: "inline-block",
	width: "1em",
	height: "1em"
}), so = /*#__PURE__*/ e.forwardRef(function(t, n) {
	let r = e.useContext(Qa), i = e.useContext($a), s = Ti({
		props: ne(r, t),
		name: "MuiButton"
	}), { children: c, color: l = "primary", component: u = "button", className: d, disabled: f = !1, disableElevation: p = !1, disableFocusRipple: m = !1, endIcon: h, focusVisibleClassName: g, fullWidth: _ = !1, id: v, loading: y = null, loadingIndicator: b, loadingPosition: x = "center", size: S = "medium", startIcon: C, type: w, variant: ee = "text", ...te } = s, re = Ni(v), E = b ?? /*#__PURE__*/ a(Ya, {
		"aria-labelledby": re,
		color: "inherit",
		size: 16
	}), D = {
		...s,
		color: l,
		component: u,
		disabled: f,
		disableElevation: p,
		disableFocusRipple: m,
		fullWidth: _,
		loading: y,
		loadingIndicator: E,
		loadingPosition: x,
		size: S,
		type: w,
		variant: ee
	}, O = eo(D), k = (C || y && x === "start") && /*#__PURE__*/ a(ro, {
		className: O.startIcon,
		ownerState: D,
		children: C || /*#__PURE__*/ a(oo, {
			className: O.loadingIconPlaceholder,
			ownerState: D
		})
	}), A = (h || y && x === "end") && /*#__PURE__*/ a(io, {
		className: O.endIcon,
		ownerState: D,
		children: h || /*#__PURE__*/ a(oo, {
			className: O.loadingIconPlaceholder,
			ownerState: D
		})
	}), j = i || "", ie = typeof y == "boolean" ? /*#__PURE__*/ a("span", {
		className: O.loadingWrapper,
		style: { display: "contents" },
		children: y && /*#__PURE__*/ a(ao, {
			className: O.loadingIndicator,
			ownerState: D,
			children: E
		})
	}) : null, { root: ae, ...oe } = O;
	return /*#__PURE__*/ o(no, {
		ownerState: D,
		className: T(r.className, O.root, d, j),
		component: u,
		disabled: f || y,
		focusRipple: !m,
		focusVisibleClassName: T(O.focusVisible, g),
		ref: n,
		internalNativeButton: !0,
		type: w,
		id: y ? re : v,
		...te,
		classes: oe,
		children: [
			k,
			x !== "end" && ie,
			c,
			x === "end" && ie,
			A
		]
	});
});
process.env.NODE_ENV !== "production" && (so.propTypes = {
	children: N.default.node,
	classes: N.default.object,
	className: N.default.string,
	color: N.default.oneOfType([N.default.oneOf([
		"inherit",
		"primary",
		"secondary",
		"success",
		"error",
		"info",
		"warning"
	]), N.default.string]),
	component: N.default.elementType,
	disabled: N.default.bool,
	disableElevation: N.default.bool,
	disableFocusRipple: N.default.bool,
	disableRipple: N.default.bool,
	endIcon: N.default.node,
	focusVisibleClassName: N.default.string,
	fullWidth: N.default.bool,
	href: N.default.string,
	id: N.default.string,
	loading: N.default.bool,
	loadingIndicator: N.default.node,
	loadingPosition: N.default.oneOf([
		"center",
		"end",
		"start"
	]),
	size: N.default.oneOfType([N.default.oneOf([
		"small",
		"medium",
		"large"
	]), N.default.string]),
	startIcon: N.default.node,
	sx: N.default.oneOfType([
		N.default.arrayOf(N.default.oneOfType([
			N.default.func,
			N.default.object,
			N.default.bool
		])),
		N.default.func,
		N.default.object
	]),
	type: N.default.string,
	variant: N.default.oneOfType([N.default.oneOf([
		"contained",
		"outlined",
		"text"
	]), N.default.string])
});
//#endregion
//#region src/components/CustomButton/CustomButton.tsx
var co = ({ label: e, onClick: t }) => /* @__PURE__ */ a(so, {
	variant: "contained",
	onClick: t,
	children: e
});
//#endregion
export { co as CustomButton };
