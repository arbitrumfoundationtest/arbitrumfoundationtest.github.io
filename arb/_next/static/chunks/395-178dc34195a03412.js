(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[395], {
		86493: function(a, b, c) {
			let d = c(67294),
				e = d.forwardRef(function({
					title: a,
					titleId: b,
					...c
				}, e) {
					return d.createElement("svg", Object.assign({
						xmlns: "http://www.w3.org/2000/svg",
						fill: "none",
						viewBox: "0 0 24 24",
						strokeWidth: 1.5,
						stroke: "currentColor",
						"aria-hidden": "true",
						ref: e,
						"aria-labelledby": b
					}, c), a ? d.createElement("title", {
						id: b
					}, a) : null, d.createElement("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
					}))
				});
			a.exports = e
		},
		66652: function(a, b, c) {
			let d = c(67294),
				e = d.forwardRef(function({
					title: a,
					titleId: b,
					...c
				}, e) {
					return d.createElement("svg", Object.assign({
						xmlns: "http://www.w3.org/2000/svg",
						fill: "none",
						viewBox: "0 0 24 24",
						strokeWidth: 1.5,
						stroke: "currentColor",
						"aria-hidden": "true",
						ref: e,
						"aria-labelledby": b
					}, c), a ? d.createElement("title", {
						id: b
					}, a) : null, d.createElement("path", {
						strokeLinecap: "round",
						strokeLinejoin: "round",
						d: "M4.5 15.75l7.5-7.5 7.5 7.5"
					}))
				});
			a.exports = e
		},
		79361: function(a, b) {
			"use strict";
			b.Z = function(a, b, c) {
				return b in a ? Object.defineProperty(a, b, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[b] = c, a
			}
		},
		91296: function(a, b, c) {
			var d = 0 / 0,
				e = /^\s+|\s+$/g,
				f = /^[-+]0x[0-9a-f]+$/i,
				g = /^0b[01]+$/i,
				h = /^0o[0-7]+$/i,
				i = parseInt,
				j = "object" == typeof c.g && c.g && c.g.Object === Object && c.g,
				k = "object" == typeof self && self && self.Object === Object && self,
				l = j || k || Function("return this")(),
				m = Object.prototype.toString,
				n = Math.max,
				o = Math.min,
				p = function() {
					return l.Date.now()
				};

			function q(a) {
				var b = typeof a;
				return !!a && ("object" == b || "function" == b)
			}

			function r(a) {
				if ("number" == typeof a) return a;
				if ("symbol" == typeof(b = a) || (c = b) && "object" == typeof c && "[object Symbol]" == m.call(b)) return d;
				if (q(a)) {
					var b, c, j = "function" == typeof a.valueOf ? a.valueOf() : a;
					a = q(j) ? j + "" : j
				}
				if ("string" != typeof a) return 0 === a ? a : +a;
				a = a.replace(e, "");
				var k = g.test(a);
				return k || h.test(a) ? i(a.slice(2), k ? 2 : 8) : f.test(a) ? d : +a
			}
			a.exports = function(a, b, c) {
				var d, e, f, g, h, i, j = 0,
					k = !1,
					l = !1,
					m = !0;
				if ("function" != typeof a) throw TypeError("Expected a function");

				function s(b) {
					var c = d,
						f = e;
					return d = e = void 0, j = b, g = a.apply(f, c)
				}

				function t(a) {
					var c = a - i,
						d = a - j;
					return void 0 === i || c >= b || c < 0 || l && d >= f
				}

				function u() {
					var a, c, d, e, g = p();
					if (t(g)) return v(g);
					h = setTimeout(u, (c = (a = g) - i, d = a - j, e = b - c, l ? o(e, f - d) : e))
				}

				function v(a) {
					return (h = void 0, m && d) ? s(a) : (d = e = void 0, g)
				}

				function w() {
					var a, c = p(),
						f = t(c);
					if (d = arguments, e = this, i = c, f) {
						if (void 0 === h) return j = a = i, h = setTimeout(u, b), k ? s(a) : g;
						if (l) return h = setTimeout(u, b), s(i)
					}
					return void 0 === h && (h = setTimeout(u, b)), g
				}
				return b = r(b) || 0, q(c) && (k = !!c.leading, l = "maxWait" in c, f = l ? n(r(c.maxWait) || 0, b) : f, m = "trailing" in c ? !!c.trailing : m), w.cancel = function() {
					void 0 !== h && clearTimeout(h), j = 0, d = i = e = h = void 0
				}, w.flush = function() {
					return void 0 === h ? g : v(p())
				}, w
			}
		},
		71210: function(a, b) {
			"use strict";

			function c(a, b, c, d) {
				return !1
			}
			Object.defineProperty(b, "__esModule", {
				value: !0
			}), b.getDomainLocale = c, ("function" == typeof b.default || "object" == typeof b.default && null !== b.default) && void 0 === b.default.__esModule && (Object.defineProperty(b.default, "__esModule", {
				value: !0
			}), Object.assign(b.default, b), a.exports = b.default)
		},
		28045: function(a, b, c) {
			"use strict";
			Object.defineProperty(b, "__esModule", {
				value: !0
			});
			var d = c(79361).Z,
				e = c(94941).Z,
				f = c(53929).Z;
			Object.defineProperty(b, "__esModule", {
				value: !0
			}), b.default = function(a) {
				var b, c, h = a.src,
					i = a.sizes,
					p = a.unoptimized,
					q = void 0 !== p && p,
					v = a.priority,
					B = void 0 !== v && v,
					D = a.loading,
					E = a.lazyRoot,
					F = void 0 === E ? null : E,
					G = a.lazyBoundary,
					H = a.className,
					I = a.quality,
					J = a.width,
					K = a.height,
					L = a.style,
					M = a.objectFit,
					N = a.objectPosition,
					O = a.onLoadingComplete,
					P = a.placeholder,
					Q = void 0 === P ? "empty" : P,
					R = a.blurDataURL,
					S = j(a, ["src", "sizes", "unoptimized", "priority", "loading", "lazyRoot", "lazyBoundary", "className", "quality", "width", "height", "style", "objectFit", "objectPosition", "onLoadingComplete", "placeholder", "blurDataURL"]),
					T = k.useContext(o.ImageConfigContext),
					U = k.useMemo(function() {
						var a = s || T || m.imageConfigDefault,
							b = f(a.deviceSizes).concat(f(a.imageSizes)).sort(function(a, b) {
								return a - b
							}),
							c = a.deviceSizes.sort(function(a, b) {
								return a - b
							});
						return g({}, a, {
							allSizes: b,
							deviceSizes: c
						})
					}, [T]),
					V = S,
					W = i ? "responsive" : "intrinsic";
				"layout" in V && (V.layout && (W = V.layout), delete V.layout);
				var X = A;
				if ("loader" in V) {
					if (V.loader) {
						var Y, Z = V.loader;
						X = function(a) {
							a.config;
							var b = j(a, ["config"]);
							return Z(b)
						}
					}
					delete V.loader
				}
				var $ = "";
				if (x(h)) {
					var _ = w(h) ? h.default : h;
					if (!_.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(_)));
					if (R = R || _.blurDataURL, $ = _.src, (!W || "fill" !== W) && (K = K || _.height, J = J || _.width, !_.height || !_.width)) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(_)))
				}
				h = "string" == typeof h ? h : $;
				var aa = !B && ("lazy" === D || void 0 === D);
				(h.startsWith("data:") || h.startsWith("blob:")) && (q = !0, aa = !1), t.has(h) && (aa = !1), r && (q = !0);
				var ab = e(k.useState(!1), 2),
					ac = ab[0],
					ad = ab[1],
					ae = e(n.useIntersection({
						rootRef: F,
						rootMargin: G || "200px",
						disabled: !aa
					}), 3),
					af = ae[0],
					ag = ae[1],
					ah = ae[2],
					ai = !aa || ag,
					aj = {
						boxSizing: "border-box",
						display: "block",
						overflow: "hidden",
						width: "initial",
						height: "initial",
						background: "none",
						opacity: 1,
						border: 0,
						margin: 0,
						padding: 0
					},
					ak = {
						boxSizing: "border-box",
						display: "block",
						width: "initial",
						height: "initial",
						background: "none",
						opacity: 1,
						border: 0,
						margin: 0,
						padding: 0
					},
					al = !1,
					am = z(J),
					an = z(K),
					ao = z(I),
					ap = Object.assign({}, L, {
						position: "absolute",
						top: 0,
						left: 0,
						bottom: 0,
						right: 0,
						boxSizing: "border-box",
						padding: 0,
						border: "none",
						margin: "auto",
						display: "block",
						width: 0,
						height: 0,
						minWidth: "100%",
						maxWidth: "100%",
						minHeight: "100%",
						maxHeight: "100%",
						objectFit: M,
						objectPosition: N
					}),
					aq = "blur" !== Q || ac ? {} : {
						backgroundSize: M || "cover",
						backgroundPosition: N || "0% 0%",
						filter: "blur(20px)",
						backgroundImage: 'url("'.concat(R, '")')
					};
				if ("fill" === W) aj.display = "block", aj.position = "absolute", aj.top = 0, aj.left = 0, aj.bottom = 0, aj.right = 0;
				else if (void 0 !== am && void 0 !== an) {
					var ar = an / am,
						as = isNaN(ar) ? "100%" : "".concat(100 * ar, "%");
					"responsive" === W ? (aj.display = "block", aj.position = "relative", al = !0, ak.paddingTop = as) : "intrinsic" === W ? (aj.display = "inline-block", aj.position = "relative", aj.maxWidth = "100%", al = !0, ak.maxWidth = "100%", b = "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(am, "%27%20height=%27").concat(an, "%27/%3e")) : "fixed" === W && (aj.display = "inline-block", aj.position = "relative", aj.width = am, aj.height = an)
				}
				var at = {
					src: u,
					srcSet: void 0,
					sizes: void 0
				};
				ai && (at = y({
					config: U,
					src: h,
					unoptimized: q,
					layout: W,
					width: am,
					quality: ao,
					sizes: i,
					loader: X
				}));
				var au = h,
					av = "imagesrcset",
					aw = "imagesizes";
				aw = "imageSizes";
				var ax = (d(c = {}, "imageSrcSet", at.srcSet), d(c, aw, at.sizes), c),
					ay = k.default.useLayoutEffect,
					az = k.useRef(O),
					aA = k.useRef(h);
				k.useEffect(function() {
					az.current = O
				}, [O]), ay(function() {
					aA.current !== h && (ah(), aA.current = h)
				}, [ah, h]);
				var aB = g({
					isLazy: aa,
					imgAttributes: at,
					heightInt: an,
					widthInt: am,
					qualityInt: ao,
					layout: W,
					className: H,
					imgStyle: ap,
					blurStyle: aq,
					loading: D,
					config: U,
					unoptimized: q,
					placeholder: Q,
					loader: X,
					srcString: au,
					onLoadingCompleteRef: az,
					setBlurComplete: ad,
					setIntersection: af,
					isVisible: ai,
					noscriptSizes: i
				}, V);
				return k.default.createElement(k.default.Fragment, null, k.default.createElement("span", {
					style: aj
				}, al ? k.default.createElement("span", {
					style: ak
				}, b ? k.default.createElement("img", {
					style: {
						display: "block",
						maxWidth: "100%",
						width: "initial",
						height: "initial",
						background: "none",
						opacity: 1,
						border: 0,
						margin: 0,
						padding: 0
					},
					alt: "",
					"aria-hidden": !0,
					src: b
				}) : null) : null, k.default.createElement(C, Object.assign({}, aB))), B ? k.default.createElement(l.default, null, k.default.createElement("link", Object.assign({
					key: "__nimg-" + at.src + at.srcSet + at.sizes,
					rel: "preload",
					as: "image",
					href: at.srcSet ? void 0 : at.src
				}, ax))) : null)
			};
			var g = c(6495).Z,
				h = c(92648).Z,
				i = c(91598).Z,
				j = c(17273).Z,
				k = i(c(67294)),
				l = h(c(5443)),
				m = c(99309),
				n = c(57190),
				o = c(59977);
			c(63794);
			var p = c(82392),
				q = {
					deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
					imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
					path: "/_next/image",
					loader: "default",
					dangerouslyAllowSVG: !1
				},
				r = (q.experimentalRemotePatterns, q.experimentalUnoptimized),
				s = {
					deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
					imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
					path: "/_next/image",
					loader: "default",
					dangerouslyAllowSVG: !1
				},
				t = new Set,
				u = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
				v = new Map([
					["default", function(a) {
						var b = a.config,
							c = a.src,
							d = a.width,
							e = a.quality;
						return decodeURIComponent(c)
					}],
					["imgix", function(a) {
						var b = a.config,
							c = a.src,
							d = a.width,
							e = a.quality,
							f = new URL("".concat(b.path).concat(D(c))),
							g = f.searchParams;
						return g.set("auto", g.getAll("auto").join(",") || "format"), g.set("fit", g.get("fit") || "max"), g.set("w", g.get("w") || d.toString()), e && g.set("q", e.toString()), f.href
					}],
					["cloudinary", function(a) {
						var b = a.config,
							c = a.src,
							d = a.width,
							e = a.quality,
							f = ["f_auto", "c_limit", "w_" + d, "q_" + (e || "auto")].join(",") + "/";
						return "".concat(b.path).concat(f).concat(D(c))
					}],
					["akamai", function(a) {
						var b = a.config,
							c = a.src,
							d = a.width;
						return "".concat(b.path).concat(D(c), "?imwidth=").concat(d)
					}],
					["custom", function(a) {
						var b = a.src;
						throw Error('Image with src "'.concat(b, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
					}],
				]);

			function w(a) {
				return void 0 !== a.default
			}

			function x(a) {
				var b;
				return "object" == typeof a && (w(a) || void 0 !== (b = a).src)
			}

			function y(a) {
				var b = a.config,
					c = a.src,
					d = a.unoptimized,
					e = a.layout,
					g = a.width,
					h = a.quality,
					i = a.sizes,
					j = a.loader;
				if (d) return {
					src: c,
					srcSet: void 0,
					sizes: void 0
				};
				var k = function(a, b, c, d) {
						var e = a.deviceSizes,
							g = a.allSizes;
						if (d && ("fill" === c || "responsive" === c)) {
							for (var h = /(^|\s)(1?\d?\d)vw/g, i = []; j = h.exec(d); j) i.push(parseInt(j[2]));
							if (i.length) {
								var j, k, l = .01 * (k = Math).min.apply(k, f(i));
								return {
									widths: g.filter(function(a) {
										return a >= e[0] * l
									}),
									kind: "w"
								}
							}
							return {
								widths: g,
								kind: "w"
							}
						}
						return "number" != typeof b || "fill" === c || "responsive" === c ? {
							widths: e,
							kind: "w"
						} : {
							widths: f(new Set([b, 2 * b].map(function(a) {
								return g.find(function(b) {
									return b >= a
								}) || g[g.length - 1]
							}))),
							kind: "x"
						}
					}(b, g, e, i),
					l = k.widths,
					m = k.kind,
					n = l.length - 1;
				return {
					sizes: i || "w" !== m ? i : "100vw",
					srcSet: l.map(function(a, d) {
						return "".concat(j({
							config: b,
							src: c,
							quality: h,
							width: a
						}), " ").concat("w" === m ? a : d + 1).concat(m)
					}).join(", "),
					src: j({
						config: b,
						src: c,
						quality: h,
						width: l[n]
					})
				}
			}

			function z(a) {
				return "number" == typeof a ? a : "string" == typeof a ? parseInt(a, 10) : void 0
			}

			function A(a) {
				var b, c = (null == (b = a.config) ? void 0 : b.loader) || "default",
					d = v.get(c);
				if (d) return d(a);
				throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(m.VALID_LOADERS.join(", "), ". Received: ").concat(c))
			}

			function B(a, b, c, d, e, f) {
				a && a.src !== u && a["data-loaded-src"] !== b && (a["data-loaded-src"] = b, ("decode" in a ? a.decode() : Promise.resolve()).catch(function() {}).then(function() {
					if (a.parentNode && (t.add(b), "blur" === d && f(!0), null == e ? void 0 : e.current)) {
						var c = a.naturalWidth,
							g = a.naturalHeight;
						e.current({
							naturalWidth: c,
							naturalHeight: g
						})
					}
				}))
			}
			var C = function(a) {
				var b = a.imgAttributes,
					c = (a.heightInt, a.widthInt),
					d = a.qualityInt,
					e = a.layout,
					f = a.className,
					h = a.imgStyle,
					i = a.blurStyle,
					l = a.isLazy,
					m = a.placeholder,
					n = a.loading,
					o = a.srcString,
					p = a.config,
					q = a.unoptimized,
					r = a.loader,
					s = a.onLoadingCompleteRef,
					t = a.setBlurComplete,
					u = a.setIntersection,
					v = a.onLoad,
					w = a.onError,
					x = (a.isVisible, a.noscriptSizes),
					z = j(a, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "layout", "className", "imgStyle", "blurStyle", "isLazy", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadingCompleteRef", "setBlurComplete", "setIntersection", "onLoad", "onError", "isVisible", "noscriptSizes"]);
				return n = l ? "lazy" : n, k.default.createElement(k.default.Fragment, null, k.default.createElement("img", Object.assign({}, z, b, {
					decoding: "async",
					"data-nimg": e,
					className: f,
					style: g({}, h, i),
					ref: k.useCallback(function(a) {
						u(a), (null == a ? void 0 : a.complete) && B(a, o, e, m, s, t)
					}, [u, o, e, m, s, t, ]),
					onLoad: function(a) {
						B(a.currentTarget, o, e, m, s, t), v && v(a)
					},
					onError: function(a) {
						"blur" === m && t(!0), w && w(a)
					}
				})), (l || "blur" === m) && k.default.createElement("noscript", null, k.default.createElement("img", Object.assign({}, z, y({
					config: p,
					src: o,
					unoptimized: q,
					layout: e,
					width: c,
					quality: d,
					sizes: x,
					loader: r
				}), {
					decoding: "async",
					"data-nimg": e,
					style: h,
					className: f,
					loading: n
				}))))
			};

			function D(a) {
				return "/" === a[0] ? a.slice(1) : a
			}("function" == typeof b.default || "object" == typeof b.default && null !== b.default) && void 0 === b.default.__esModule && (Object.defineProperty(b.default, "__esModule", {
				value: !0
			}), Object.assign(b.default, b), a.exports = b.default)
		},
		48418: function(a, b, c) {
			"use strict";
			Object.defineProperty(b, "__esModule", {
				value: !0
			});
			var d = c(94941).Z;
			c(45753).default, Object.defineProperty(b, "__esModule", {
				value: !0
			}), b.default = void 0;
			var e = c(92648).Z,
				f = c(17273).Z,
				g = e(c(67294)),
				h = c(76273),
				i = c(22725),
				j = c(63462),
				k = c(21018),
				l = c(57190),
				m = c(71210),
				n = c(98684),
				o = void 0 !== g.default.useTransition,
				p = {};

			function q(a, b, c, d) {
				if (a && h.isLocalURL(b)) {
					a.prefetch(b, c, d).catch(function(a) {});
					var e = d && void 0 !== d.locale ? d.locale : a && a.locale;
					p[b + "%" + c + (e ? "%" + e : "")] = !0
				}
			}
			var r = g.default.forwardRef(function(a, b) {
				var c, e, r = a.href,
					s = a.as,
					t = a.children,
					u = a.prefetch,
					v = a.passHref,
					w = a.replace,
					x = a.soft,
					y = a.shallow,
					z = a.scroll,
					A = a.locale,
					B = a.onClick,
					C = a.onMouseEnter,
					D = a.onTouchStart,
					E = a.legacyBehavior,
					F = void 0 === E ? !0 !== Boolean(!1) : E,
					G = f(a, ["href", "as", "children", "prefetch", "passHref", "replace", "soft", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
				c = t, F && ("string" == typeof c || "number" == typeof c) && (c = g.default.createElement("a", null, c));
				var H = !1 !== u,
					I = d(o ? g.default.useTransition() : [], 2),
					J = I[1],
					K = g.default.useContext(j.RouterContext),
					L = g.default.useContext(k.AppRouterContext);
				L && (K = L);
				var M = g.default.useMemo(function() {
						var a = d(h.resolveHref(K, r, !0), 2),
							b = a[0],
							c = a[1];
						return {
							href: b,
							as: s ? h.resolveHref(K, s) : c || b
						}
					}, [K, r, s]),
					N = M.href,
					O = M.as,
					P = g.default.useRef(N),
					Q = g.default.useRef(O);
				F && (e = g.default.Children.only(c));
				var R = F ? e && "object" == typeof e && e.ref : b,
					S = d(l.useIntersection({
						rootMargin: "200px"
					}), 3),
					T = S[0],
					U = S[1],
					V = S[2],
					W = g.default.useCallback(function(a) {
						(Q.current !== O || P.current !== N) && (V(), Q.current = O, P.current = N), T(a), R && ("function" == typeof R ? R(a) : "object" == typeof R && (R.current = a))
					}, [O, R, N, V, T]);
				g.default.useEffect(function() {
					var a = U && H && h.isLocalURL(N),
						b = void 0 !== A ? A : K && K.locale,
						c = p[N + "%" + O + (b ? "%" + b : "")];
					a && !c && q(K, N, O, {
						locale: b
					})
				}, [O, N, U, A, H, K]);
				var X = {
					ref: W,
					onClick: function(a) {
						F || "function" != typeof B || B(a), F && e.props && "function" == typeof e.props.onClick && e.props.onClick(a), a.defaultPrevented || function(a, b, c, d, e, f, g, i, j, k) {
							if ("A" !== a.currentTarget.nodeName.toUpperCase() || (!(m = (l = a).currentTarget.target) || "_self" === m) && !l.metaKey && !l.ctrlKey && !l.shiftKey && !l.altKey && (!l.nativeEvent || 2 !== l.nativeEvent.which) && h.isLocalURL(c)) {
								a.preventDefault();
								var l, m, n = function() {
									"softPush" in b && "softReplace" in b ? b[f ? e ? "softReplace" : "softPush" : e ? "replace" : "push"](c) : b[e ? "replace" : "push"](c, d, {
										shallow: g,
										locale: j,
										scroll: i
									})
								};
								k ? k(n) : n()
							}
						}(a, K, N, O, w, x, y, z, A, L ? J : void 0)
					},
					onMouseEnter: function(a) {
						F || "function" != typeof C || C(a), F && e.props && "function" == typeof e.props.onMouseEnter && e.props.onMouseEnter(a), h.isLocalURL(N) && q(K, N, O, {
							priority: !0
						})
					},
					onTouchStart: function(a) {
						F || "function" != typeof D || D(a), F && e.props && "function" == typeof e.props.onTouchStart && e.props.onTouchStart(a), h.isLocalURL(N) && q(K, N, O, {
							priority: !0
						})
					}
				};
				if (!F || v || "a" === e.type && !("href" in e.props)) {
					var Y = void 0 !== A ? A : K && K.locale,
						Z = K && K.isLocaleDomain && m.getDomainLocale(O, Y, K.locales, K.domainLocales);
					X.href = Z || n.addBasePath(i.addLocale(O, Y, K && K.defaultLocale))
				}
				return F ? g.default.cloneElement(e, X) : g.default.createElement("a", Object.assign({}, G, X), c)
			});
			b.default = r, ("function" == typeof b.default || "object" == typeof b.default && null !== b.default) && void 0 === b.default.__esModule && (Object.defineProperty(b.default, "__esModule", {
				value: !0
			}), Object.assign(b.default, b), a.exports = b.default)
		},
		57190: function(a, b, c) {
			"use strict";
			Object.defineProperty(b, "__esModule", {
				value: !0
			});
			var d = c(94941).Z;
			Object.defineProperty(b, "__esModule", {
				value: !0
			}), b.useIntersection = function(a) {
				var b = a.rootRef,
					c = a.rootMargin,
					h = a.disabled || !g,
					i = e.useRef(),
					k = d(e.useState(!1), 2),
					l = k[0],
					m = k[1],
					n = d(e.useState(null), 2),
					o = n[0],
					p = n[1];
				e.useEffect(function() {
					if (g) {
						if (i.current && (i.current(), i.current = void 0), !h && !l) return o && o.tagName && (i.current = j(o, function(a) {
								return a && m(a)
							}, {
								root: null == b ? void 0 : b.current,
								rootMargin: c
							})),
							function() {
								null == i.current || i.current(), i.current = void 0
							}
					} else if (!l) {
						var a = f.requestIdleCallback(function() {
							return m(!0)
						});
						return function() {
							return f.cancelIdleCallback(a)
						}
					}
				}, [o, h, c, b, l]);
				var q = e.useCallback(function() {
					m(!1)
				}, []);
				return [p, l, q]
			};
			var e = c(67294),
				f = c(9311),
				g = "function" == typeof IntersectionObserver,
				h = new Map,
				i = [];

			function j(a, b, c) {
				var d = k(c),
					e = d.id,
					f = d.observer,
					g = d.elements;
				return g.set(a, b), f.observe(a),
					function() {
						if (g.delete(a), f.unobserve(a), 0 === g.size) {
							f.disconnect(), h.delete(e);
							var b = i.findIndex(function(a) {
								return a.root === e.root && a.margin === e.margin
							});
							b > -1 && i.splice(b, 1)
						}
					}
			}

			function k(a) {
				var b, c = {
						root: a.root || null,
						margin: a.rootMargin || ""
					},
					d = i.find(function(a) {
						return a.root === c.root && a.margin === c.margin
					});
				if (d && (b = h.get(d))) return b;
				var e = new Map,
					f = new IntersectionObserver(function(a) {
						a.forEach(function(a) {
							var b = e.get(a.target),
								c = a.isIntersecting || a.intersectionRatio > 0;
							b && c && b(c)
						})
					}, a);
				return b = {
					id: c,
					observer: f,
					elements: e
				}, i.push(c), h.set(c, b), b
			}("function" == typeof b.default || "object" == typeof b.default && null !== b.default) && void 0 === b.default.__esModule && (Object.defineProperty(b.default, "__esModule", {
				value: !0
			}), Object.assign(b.default, b), a.exports = b.default)
		},
		21018: function(a, b, c) {
			"use strict";
			Object.defineProperty(b, "__esModule", {
				value: !0
			}), b.GlobalLayoutRouterContext = b.LayoutRouterContext = b.AppRouterContext = void 0;
			var d = (0, c(92648).Z)(c(67294)),
				e = d.default.createContext(null);
			b.AppRouterContext = e;
			var f = d.default.createContext(null);
			b.LayoutRouterContext = f;
			var g = d.default.createContext(null);
			b.GlobalLayoutRouterContext = g
		},
		9008: function(a, b, c) {
			a.exports = c(5443)
		},
		25675: function(a, b, c) {
			a.exports = c(28045)
		},
		41664: function(a, b, c) {
			a.exports = c(48418)
		},
		28368: function(a, b, c) {
			"use strict";
			c.d(b, {
				p: function() {
					return G
				}
			});
			var d, e = c(67294),
				f = c(32984),
				g = c(12351),
				h = c(23784),
				i = c(19946),
				j = c(61363),
				k = c(64103),
				l = c(16567),
				m = c(14157),
				n = c(15466),
				o = c(73781);
			let p = null != (d = e.startTransition) ? d : function(a) {
				a()
			};
			var q, r, s = ((q = s || {})[q.Open = 0] = "Open", q[q.Closed = 1] = "Closed", q),
				t = ((r = t || {})[r.ToggleDisclosure = 0] = "ToggleDisclosure", r[r.CloseDisclosure = 1] = "CloseDisclosure", r[r.SetButtonId = 2] = "SetButtonId", r[r.SetPanelId = 3] = "SetPanelId", r[r.LinkPanel = 4] = "LinkPanel", r[r.UnlinkPanel = 5] = "UnlinkPanel", r);
			let u = {
					0: a => ({
						...a,
						disclosureState: (0, f.E)(a.disclosureState, {
							0: 1,
							1: 0
						})
					}),
					1: a => 1 === a.disclosureState ? a : {
						...a,
						disclosureState: 1
					},
					4(a) {
						return !0 === a.linkedPanel ? a : {
							...a,
							linkedPanel: !0
						}
					},
					5(a) {
						return !1 === a.linkedPanel ? a : {
							...a,
							linkedPanel: !1
						}
					},
					2(a, b) {
						return a.buttonId === b.buttonId ? a : {
							...a,
							buttonId: b.buttonId
						}
					},
					3(a, b) {
						return a.panelId === b.panelId ? a : {
							...a,
							panelId: b.panelId
						}
					}
				},
				v = (0, e.createContext)(null);

			function w(a) {
				let b = (0, e.useContext)(v);
				if (null === b) {
					let c = Error(`<${a} /> is missing a parent <Disclosure /> component.`);
					throw Error.captureStackTrace && Error.captureStackTrace(c, w), c
				}
				return b
			}
			v.displayName = "DisclosureContext";
			let x = (0, e.createContext)(null);

			function y(a) {
				let b = (0, e.useContext)(x);
				if (null === b) {
					let c = Error(`<${a} /> is missing a parent <Disclosure /> component.`);
					throw Error.captureStackTrace && Error.captureStackTrace(c, y), c
				}
				return b
			}
			x.displayName = "DisclosureAPIContext";
			let z = (0, e.createContext)(null);

			function A(a, b) {
				return (0, f.E)(b.type, u, a, b)
			}
			z.displayName = "DisclosurePanelContext";
			let B = e.Fragment,
				C = (0, g.yV)(function(a, b) {
					let {
						defaultOpen: c = !1,
						...d
					} = a, i = (0, e.useRef)(null), j = (0, h.T)(b, (0, h.h)(a => {
						i.current = a
					}, void 0 === a.as || a.as === e.Fragment)), k = (0, e.useRef)(null), m = (0, e.useRef)(null), p = (0, e.useReducer)(A, {
						disclosureState: c ? 0 : 1,
						linkedPanel: !1,
						buttonRef: m,
						panelRef: k,
						buttonId: null,
						panelId: null
					}), [{
						disclosureState: q,
						buttonId: r
					}, s] = p, t = (0, o.z)(a => {
						s({
							type: 1
						});
						let b = (0, n.r)(i);
						if (!b || !r) return;
						let c = a ? a instanceof HTMLElement ? a : a.current instanceof HTMLElement ? a.current : b.getElementById(r) : b.getElementById(r);
						null == c || c.focus()
					}), u = (0, e.useMemo)(() => ({
						close: t
					}), [t]), w = (0, e.useMemo)(() => ({
						open: 0 === q,
						close: t
					}), [q, t]);
					return e.createElement(v.Provider, {
						value: p
					}, e.createElement(x.Provider, {
						value: u
					}, e.createElement(l.up, {
						value: (0, f.E)(q, {
							0: l.ZM.Open,
							1: l.ZM.Closed
						})
					}, (0, g.sY)({
						ourProps: {
							ref: j
						},
						theirProps: d,
						slot: w,
						defaultTag: B,
						name: "Disclosure"
					}))))
				}),
				D = (0, g.yV)(function(a, b) {
					let c = (0, i.M)(),
						{
							id: d = `headlessui-disclosure-button-${c}`,
							...f
						} = a,
						[l, n] = w("Disclosure.Button"),
						p = (0, e.useContext)(z),
						q = null !== p && p === l.panelId,
						r = (0, e.useRef)(null),
						s = (0, h.T)(r, b, q ? null : l.buttonRef);
					(0, e.useEffect)(() => {
						if (!q) return n({
							type: 2,
							buttonId: d
						}), () => {
							n({
								type: 2,
								buttonId: null
							})
						}
					}, [d, n, q]);
					let t = (0, o.z)(a => {
							var b;
							if (q) {
								if (1 === l.disclosureState) return;
								switch (a.key) {
									case j.R.Space:
									case j.R.Enter:
										a.preventDefault(), a.stopPropagation(), n({
											type: 0
										}), null == (b = l.buttonRef.current) || b.focus()
								}
							} else switch (a.key) {
								case j.R.Space:
								case j.R.Enter:
									a.preventDefault(), a.stopPropagation(), n({
										type: 0
									})
							}
						}),
						u = (0, o.z)(a => {
							a.key === j.R.Space && a.preventDefault()
						}),
						v = (0, o.z)(b => {
							var c;
							(0, k.P)(b.currentTarget) || a.disabled || (q ? (n({
								type: 0
							}), null == (c = l.buttonRef.current) || c.focus()) : n({
								type: 0
							}))
						}),
						x = (0, e.useMemo)(() => ({
							open: 0 === l.disclosureState
						}), [l]),
						y = (0, m.f)(a, r),
						A = q ? {
							ref: s,
							type: y,
							onKeyDown: t,
							onClick: v
						} : {
							ref: s,
							id: d,
							type: y,
							"aria-expanded": a.disabled ? void 0 : 0 === l.disclosureState,
							"aria-controls": l.linkedPanel ? l.panelId : void 0,
							onKeyDown: t,
							onKeyUp: u,
							onClick: v
						};
					return (0, g.sY)({
						ourProps: A,
						theirProps: f,
						slot: x,
						defaultTag: "button",
						name: "Disclosure.Button"
					})
				}),
				E = g.AN.RenderStrategy | g.AN.Static,
				F = (0, g.yV)(function(a, b) {
					let c = (0, i.M)(),
						{
							id: d = `headlessui-disclosure-panel-${c}`,
							...f
						} = a,
						[j, k] = w("Disclosure.Panel"),
						{
							close: m
						} = y("Disclosure.Panel"),
						n = (0, h.T)(b, j.panelRef, a => {
							p(() => k({
								type: a ? 4 : 5
							}))
						});
					(0, e.useEffect)(() => (k({
						type: 3,
						panelId: d
					}), () => {
						k({
							type: 3,
							panelId: null
						})
					}), [d, k]);
					let o = (0, l.oJ)(),
						q = null !== o ? o === l.ZM.Open : 0 === j.disclosureState,
						r = (0, e.useMemo)(() => ({
							open: 0 === j.disclosureState,
							close: m
						}), [j, m]);
					return e.createElement(z.Provider, {
						value: j.panelId
					}, (0, g.sY)({
						ourProps: {
							ref: n,
							id: d
						},
						theirProps: f,
						slot: r,
						defaultTag: "div",
						features: E,
						visible: q,
						name: "Disclosure.Panel"
					}))
				}),
				G = Object.assign(C, {
					Button: D,
					Panel: F
				})
		},
		61363: function(a, b, c) {
			"use strict";
			c.d(b, {
				R: function() {
					return e
				}
			});
			var d, e = ((d = e || {}).Space = " ", d.Enter = "Enter", d.Escape = "Escape", d.Backspace = "Backspace", d.Delete = "Delete", d.ArrowLeft = "ArrowLeft", d.ArrowUp = "ArrowUp", d.ArrowRight = "ArrowRight", d.ArrowDown = "ArrowDown", d.Home = "Home", d.End = "End", d.PageUp = "PageUp", d.PageDown = "PageDown", d.Tab = "Tab", d)
		},
		80520: function(a, b, c) {
			"use strict";
			c.d(b, {
				J: function() {
					return ac
				}
			});
			var d = c(67294),
				e = c(32984),
				f = c(12351),
				g = c(23784),
				h = c(19946),
				i = c(61363),
				j = c(64103),
				k = c(15466);
			let l = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(a => `${a}:not([tabindex='-1'])`).join(",");
			var m, n, o, p = ((m = p || {})[m.First = 1] = "First", m[m.Previous = 2] = "Previous", m[m.Next = 4] = "Next", m[m.Last = 8] = "Last", m[m.WrapAround = 16] = "WrapAround", m[m.NoScroll = 32] = "NoScroll", m),
				q = ((n = q || {})[n.Error = 0] = "Error", n[n.Overflow = 1] = "Overflow", n[n.Success = 2] = "Success", n[n.Underflow = 3] = "Underflow", n),
				r = ((o = r || {})[o.Previous = -1] = "Previous", o[o.Next = 1] = "Next", o);

			function s(a = document.body) {
				return null == a ? [] : Array.from(a.querySelectorAll(l)).sort((a, b) => Math.sign((a.tabIndex || Number.MAX_SAFE_INTEGER) - (b.tabIndex || Number.MAX_SAFE_INTEGER)))
			}
			var t, u = ((t = u || {})[t.Strict = 0] = "Strict", t[t.Loose = 1] = "Loose", t);

			function v(a, b = 0) {
				var c;
				return a !== (null == (c = (0, k.r)(a)) ? void 0 : c.body) && (0, e.E)(b, {
					0() {
						return a.matches(l)
					},
					1() {
						let b = a;
						for (; null !== b;) {
							if (b.matches(l)) return !0;
							b = b.parentElement
						}
						return !1
					}
				})
			}

			function w(a, b, {
				sorted: c = !0,
				relativeTo: d = null,
				skipElements: e = []
			} = {}) {
				var f, g, h;
				let i = Array.isArray(a) ? a.length > 0 ? a[0].ownerDocument : document : a.ownerDocument,
					j = Array.isArray(a) ? c ? function(a, b = a => a) {
						return a.slice().sort((a, c) => {
							let d = b(a),
								e = b(c);
							if (null === d || null === e) return 0;
							let f = d.compareDocumentPosition(e);
							return f & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : f & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
						})
					}(a) : a : s(a);
				e.length > 0 && j.length > 1 && (j = j.filter(a => !e.includes(a))), d = null != d ? d : i.activeElement;
				let k = (() => {
						if (5 & b) return 1;
						if (10 & b) return -1;
						throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
					})(),
					l = (() => {
						if (1 & b) return 0;
						if (2 & b) return Math.max(0, j.indexOf(d)) - 1;
						if (4 & b) return Math.max(0, j.indexOf(d)) + 1;
						if (8 & b) return j.length - 1;
						throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
					})(),
					m = 32 & b ? {
						preventScroll: !0
					} : {},
					n = 0,
					o = j.length,
					p;
				do {
					if (n >= o || n + o <= 0) return 0;
					let q = l + n;
					if (16 & b) q = (q + o) % o;
					else {
						if (q < 0) return 3;
						if (q >= o) return 1
					}
					null == (p = j[q]) || p.focus(m), n += k
				} while (p !== i.activeElement);
				return 6 & b && null != (h = null == (g = null == (f = p) ? void 0 : f.matches) ? void 0 : g.call(f, "textarea,input")) && h && p.select(), p.hasAttribute("tabindex") || p.setAttribute("tabindex", "0"), 2
			}
			var x = c(16567),
				y = c(14157),
				z = c(3855);

			function A(a, b, c) {
				let e = (0, z.E)(b);
				(0, d.useEffect)(() => {
					function b(a) {
						e.current(a)
					}
					return document.addEventListener(a, b, c), () => document.removeEventListener(a, b, c)
				}, [a, c])
			}

			function B(...a) {
				return (0, d.useMemo)(() => (0, k.r)(...a), [...a])
			}
			var C, D = ((C = D || {})[C.None = 1] = "None", C[C.Focusable = 2] = "Focusable", C[C.Hidden = 4] = "Hidden", C);
			let E = (0, f.yV)(function(a, b) {
				let {
					features: c = 1,
					...d
				} = a;
				return (0, f.sY)({
					ourProps: {
						ref: b,
						"aria-hidden": (2 & c) == 2 || void 0,
						style: {
							position: "fixed",
							top: 1,
							left: 1,
							width: 1,
							height: 0,
							padding: 0,
							margin: -1,
							overflow: "hidden",
							clip: "rect(0, 0, 0, 0)",
							whiteSpace: "nowrap",
							borderWidth: "0",
							...(4 & c) == 4 && (2 & c) != 2 && {
								display: "none"
							}
						}
					},
					theirProps: d,
					slot: {},
					defaultTag: "div",
					name: "Hidden"
				})
			});
			var F, G = c(73781),
				H = ((F = H || {})[F.Forwards = 0] = "Forwards", F[F.Backwards = 1] = "Backwards", F);

			function I() {
				let a = (0, d.useRef)(0);
				return function(a, b, c) {
					let e = (0, z.E)(b);
					(0, d.useEffect)(() => {
						function b(a) {
							e.current(a)
						}
						return window.addEventListener(a, b, c), () => window.removeEventListener(a, b, c)
					}, [a, c])
				}("keydown", b => {
					"Tab" === b.key && (a.current = b.shiftKey ? 1 : 0)
				}, !0), a
			}
			var J, K, L = c(16723),
				M = ((J = M || {})[J.Open = 0] = "Open", J[J.Closed = 1] = "Closed", J),
				N = ((K = N || {})[K.TogglePopover = 0] = "TogglePopover", K[K.ClosePopover = 1] = "ClosePopover", K[K.SetButton = 2] = "SetButton", K[K.SetButtonId = 3] = "SetButtonId", K[K.SetPanel = 4] = "SetPanel", K[K.SetPanelId = 5] = "SetPanelId", K);
			let O = {
					0: a => ({
						...a,
						popoverState: (0, e.E)(a.popoverState, {
							0: 1,
							1: 0
						})
					}),
					1(a) {
						return 1 === a.popoverState ? a : {
							...a,
							popoverState: 1
						}
					},
					2(a, b) {
						return a.button === b.button ? a : {
							...a,
							button: b.button
						}
					},
					3(a, b) {
						return a.buttonId === b.buttonId ? a : {
							...a,
							buttonId: b.buttonId
						}
					},
					4(a, b) {
						return a.panel === b.panel ? a : {
							...a,
							panel: b.panel
						}
					},
					5(a, b) {
						return a.panelId === b.panelId ? a : {
							...a,
							panelId: b.panelId
						}
					}
				},
				P = (0, d.createContext)(null);

			function Q(a) {
				let b = (0, d.useContext)(P);
				if (null === b) {
					let c = Error(`<${a} /> is missing a parent <Popover /> component.`);
					throw Error.captureStackTrace && Error.captureStackTrace(c, Q), c
				}
				return b
			}
			P.displayName = "PopoverContext";
			let R = (0, d.createContext)(null);

			function S(a) {
				let b = (0, d.useContext)(R);
				if (null === b) {
					let c = Error(`<${a} /> is missing a parent <Popover /> component.`);
					throw Error.captureStackTrace && Error.captureStackTrace(c, S), c
				}
				return b
			}
			R.displayName = "PopoverAPIContext";
			let T = (0, d.createContext)(null);

			function U() {
				return (0, d.useContext)(T)
			}
			T.displayName = "PopoverGroupContext";
			let V = (0, d.createContext)(null);

			function W(a, b) {
				return (0, e.E)(b.type, O, a, b)
			}
			V.displayName = "PopoverPanelContext";
			let X = (0, f.yV)(function(a, b) {
					var c;
					let h = (0, d.useRef)(null),
						i = (0, g.T)(b, (0, g.h)(a => {
							h.current = a
						})),
						j = (0, d.useRef)([]),
						k = (0, d.useReducer)(W, {
							popoverState: 1,
							buttons: j,
							button: null,
							buttonId: null,
							panel: null,
							panelId: null,
							beforePanelSentinel: (0, d.createRef)(),
							afterPanelSentinel: (0, d.createRef)()
						}),
						[{
							popoverState: l,
							button: m,
							buttonId: n,
							panel: o,
							panelId: p,
							beforePanelSentinel: q,
							afterPanelSentinel: r
						}, t] = k,
						w = B(null != (c = h.current) ? c : m),
						y = (0, d.useMemo)(() => {
							if (!m || !o) return !1;
							for (let a of document.querySelectorAll("body > *"))
								if (Number(null == a ? void 0 : a.contains(m)) ^ Number(null == a ? void 0 : a.contains(o))) return !0;
							let b = s(),
								c = b.indexOf(m),
								d = (c + b.length - 1) % b.length,
								e = (c + 1) % b.length,
								f = b[d],
								g = b[e];
							return !o.contains(f) && !o.contains(g)
						}, [m, o]),
						C = (0, z.E)(n),
						D = (0, z.E)(p),
						E = (0, d.useMemo)(() => ({
							buttonId: C,
							panelId: D,
							close: () => t({
								type: 1
							})
						}), [C, D, t]),
						F = U(),
						H = null == F ? void 0 : F.registerPopover,
						I = (0, G.z)(() => {
							var a;
							return null != (a = null == F ? void 0 : F.isFocusWithinPopoverGroup()) ? a : (null == w ? void 0 : w.activeElement) && ((null == m ? void 0 : m.contains(w.activeElement)) || (null == o ? void 0 : o.contains(w.activeElement)))
						});
					(0, d.useEffect)(() => null == H ? void 0 : H(E), [H, E]),
					function(a, b, c, e) {
						let f = (0, z.E)(c);
						(0, d.useEffect)(() => {
							function c(a) {
								f.current(a)
							}
							return (a = null != a ? a : window).addEventListener(b, c, e), () => a.removeEventListener(b, c, e)
						}, [a, b, e])
					}(null == w ? void 0 : w.defaultView, "focus", a => {
						var b, c, d, e;
						0 === l && (I() || !m || !o || a.target !== window && (null != (c = null == (b = q.current) ? void 0 : b.contains) && c.call(b, a.target) || null != (e = null == (d = r.current) ? void 0 : d.contains) && e.call(d, a.target) || t({
							type: 1
						})))
					}, !0),
					function(a, b, c = !0) {
						let e = (0, d.useRef)(!1);

						function f(c, d) {
							if (!e.current || c.defaultPrevented) return;
							let f = function a(b) {
									return "function" == typeof b ? a(b()) : Array.isArray(b) || b instanceof Set ? b : [b]
								}(a),
								g = d(c);
							if (null !== g && g.getRootNode().contains(g)) {
								for (let h of f) {
									if (null === h) continue;
									let i = h instanceof HTMLElement ? h : h.current;
									if (null != i && i.contains(g) || c.composed && c.composedPath().includes(i)) return
								}
								return v(g, u.Loose) || -1 === g.tabIndex || c.preventDefault(), b(c, g)
							}
						}(0, d.useEffect)(() => {
							requestAnimationFrame(() => {
								e.current = c
							})
						}, [c]);
						let g = (0, d.useRef)(null);
						A("mousedown", a => {
							var b, c;
							e.current && (g.current = (null == (c = null == (b = a.composedPath) ? void 0 : b.call(a)) ? void 0 : c[0]) || a.target)
						}, !0), A("click", a => {
							g.current && (f(a, () => g.current), g.current = null)
						}, !0), A("blur", a => f(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
					}([m, o], (a, b) => {
						t({
							type: 1
						}), v(b, u.Loose) || (a.preventDefault(), null == m || m.focus())
					}, 0 === l);
					let J = (0, G.z)(a => {
							t({
								type: 1
							});
							let b = a ? a instanceof HTMLElement ? a : "current" in a && a.current instanceof HTMLElement ? a.current : m : m;
							null == b || b.focus()
						}),
						K = (0, d.useMemo)(() => ({
							close: J,
							isPortalled: y
						}), [J, y]),
						L = (0, d.useMemo)(() => ({
							open: 0 === l,
							close: J
						}), [l, J]);
					return d.createElement(P.Provider, {
						value: k
					}, d.createElement(R.Provider, {
						value: K
					}, d.createElement(x.up, {
						value: (0, e.E)(l, {
							0: x.ZM.Open,
							1: x.ZM.Closed
						})
					}, (0, f.sY)({
						ourProps: {
							ref: i
						},
						theirProps: a,
						slot: L,
						defaultTag: "div",
						name: "Popover"
					}))))
				}),
				Y = (0, f.yV)(function(a, b) {
					let c = (0, h.M)(),
						{
							id: k = `headlessui-popover-button-${c}`,
							...l
						} = a,
						[m, n] = Q("Popover.Button"),
						{
							isPortalled: o
						} = S("Popover.Button"),
						r = (0, d.useRef)(null),
						t = `headlessui-focus-sentinel-${(0,h.M)()}`,
						u = U(),
						v = null == u ? void 0 : u.closeOthers,
						x = null !== (0, d.useContext)(V);
					(0, d.useEffect)(() => {
						if (!x) return n({
							type: 3,
							buttonId: k
						}), () => {
							n({
								type: 3,
								buttonId: null
							})
						}
					}, [x, k, n]);
					let [z] = (0, d.useState)(() => Symbol()), A = (0, g.T)(r, b, x ? null : a => {
						if (a) m.buttons.current.push(z);
						else {
							let b = m.buttons.current.indexOf(z); - 1 !== b && m.buttons.current.splice(b, 1)
						}
						m.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), a && n({
							type: 2,
							button: a
						})
					}), C = (0, g.T)(r, b), F = B(r), J = (0, G.z)(a => {
						var b, c, d;
						if (x) {
							if (1 === m.popoverState) return;
							switch (a.key) {
								case i.R.Space:
								case i.R.Enter:
									a.preventDefault(), null == (c = (b = a.target).click) || c.call(b), n({
										type: 1
									}), null == (d = m.button) || d.focus()
							}
						} else switch (a.key) {
							case i.R.Space:
							case i.R.Enter:
								a.preventDefault(), a.stopPropagation(), 1 === m.popoverState && (null == v || v(m.buttonId)), n({
									type: 0
								});
								break;
							case i.R.Escape:
								if (0 !== m.popoverState) return null == v ? void 0 : v(m.buttonId);
								if (!r.current || (null == F ? void 0 : F.activeElement) && !r.current.contains(F.activeElement)) return;
								a.preventDefault(), a.stopPropagation(), n({
									type: 1
								})
						}
					}), K = (0, G.z)(a => {
						x || a.key === i.R.Space && a.preventDefault()
					}), L = (0, G.z)(b => {
						var c, d;
						(0, j.P)(b.currentTarget) || a.disabled || (x ? (n({
							type: 1
						}), null == (c = m.button) || c.focus()) : (b.preventDefault(), b.stopPropagation(), 1 === m.popoverState && (null == v || v(m.buttonId)), n({
							type: 0
						}), null == (d = m.button) || d.focus()))
					}), M = (0, G.z)(a => {
						a.preventDefault(), a.stopPropagation()
					}), N = 0 === m.popoverState, O = (0, d.useMemo)(() => ({
						open: N
					}), [N]), P = (0, y.f)(a, r), R = x ? {
						ref: C,
						type: P,
						onKeyDown: J,
						onClick: L
					} : {
						ref: A,
						id: m.buttonId,
						type: P,
						"aria-expanded": a.disabled ? void 0 : 0 === m.popoverState,
						"aria-controls": m.panel ? m.panelId : void 0,
						onKeyDown: J,
						onKeyUp: K,
						onClick: L,
						onMouseDown: M
					}, T = I(), W = (0, G.z)(() => {
						let a = m.panel;
						a && (0, e.E)(T.current, {
							[H.Forwards]: () => w(a, p.First),
							[H.Backwards]: () => w(a, p.Last)
						}) === q.Error && w(s().filter(a => "true" !== a.dataset.headlessuiFocusGuard), (0, e.E)(T.current, {
							[H.Forwards]: p.Next,
							[H.Backwards]: p.Previous
						}), {
							relativeTo: m.button
						})
					});
					return d.createElement(d.Fragment, null, (0, f.sY)({
						ourProps: R,
						theirProps: l,
						slot: O,
						defaultTag: "button",
						name: "Popover.Button"
					}), N && !x && o && d.createElement(E, {
						id: t,
						features: D.Focusable,
						"data-headlessui-focus-guard": !0,
						as: "button",
						type: "button",
						onFocus: W
					}))
				}),
				Z = f.AN.RenderStrategy | f.AN.Static,
				$ = (0, f.yV)(function(a, b) {
					let c = (0, h.M)(),
						{
							id: e = `headlessui-popover-overlay-${c}`,
							...i
						} = a,
						[{
							popoverState: k
						}, l] = Q("Popover.Overlay"),
						m = (0, g.T)(b),
						n = (0, x.oJ)(),
						o = null !== n ? n === x.ZM.Open : 0 === k,
						p = (0, G.z)(a => {
							if ((0, j.P)(a.currentTarget)) return a.preventDefault();
							l({
								type: 1
							})
						}),
						q = (0, d.useMemo)(() => ({
							open: 0 === k
						}), [k]);
					return (0, f.sY)({
						ourProps: {
							ref: m,
							id: e,
							"aria-hidden": !0,
							onClick: p
						},
						theirProps: i,
						slot: q,
						defaultTag: "div",
						features: Z,
						visible: o,
						name: "Popover.Overlay"
					})
				}),
				_ = f.AN.RenderStrategy | f.AN.Static,
				aa = (0, f.yV)(function(a, b) {
					let c = (0, h.M)(),
						{
							id: j = `headlessui-popover-panel-${c}`,
							focus: k = !1,
							...l
						} = a,
						[m, n] = Q("Popover.Panel"),
						{
							close: o,
							isPortalled: r
						} = S("Popover.Panel"),
						t = `headlessui-focus-sentinel-before-${(0,h.M)()}`,
						u = `headlessui-focus-sentinel-after-${(0,h.M)()}`,
						v = (0, d.useRef)(null),
						y = (0, g.T)(v, b, a => {
							n({
								type: 4,
								panel: a
							})
						}),
						z = B(v);
					(0, L.e)(() => (n({
						type: 5,
						panelId: j
					}), () => {
						n({
							type: 5,
							panelId: null
						})
					}), [j, n]);
					let A = (0, x.oJ)(),
						C = null !== A ? A === x.ZM.Open : 0 === m.popoverState,
						F = (0, G.z)(a => {
							var b;
							if (a.key === i.R.Escape) {
								if (0 !== m.popoverState || !v.current || (null == z ? void 0 : z.activeElement) && !v.current.contains(z.activeElement)) return;
								a.preventDefault(), a.stopPropagation(), n({
									type: 1
								}), null == (b = m.button) || b.focus()
							}
						});
					(0, d.useEffect)(() => {
						var b;
						a.static || 1 === m.popoverState && (null == (b = a.unmount) || b) && n({
							type: 4,
							panel: null
						})
					}, [m.popoverState, a.unmount, a.static, n]), (0, d.useEffect)(() => {
						if (!k || 0 !== m.popoverState || !v.current) return;
						let a = null == z ? void 0 : z.activeElement;
						v.current.contains(a) || w(v.current, p.First)
					}, [k, v, m.popoverState]);
					let J = (0, d.useMemo)(() => ({
							open: 0 === m.popoverState,
							close: o
						}), [m, o]),
						K = {
							ref: y,
							id: j,
							onKeyDown: F,
							onBlur: k && 0 === m.popoverState ? a => {
								var b, c, d, e, f;
								let g = a.relatedTarget;
								!g || !v.current || null != (b = v.current) && b.contains(g) || (n({
									type: 1
								}), ((null == (d = null == (c = m.beforePanelSentinel.current) ? void 0 : c.contains) ? void 0 : d.call(c, g)) || (null == (f = null == (e = m.afterPanelSentinel.current) ? void 0 : e.contains) ? void 0 : f.call(e, g))) && g.focus({
									preventScroll: !0
								}))
							} : void 0,
							tabIndex: -1
						},
						M = I(),
						N = (0, G.z)(() => {
							let a = v.current;
							a && (0, e.E)(M.current, {
								[H.Forwards]: () => {
									var b;
									w(a, p.First) === q.Error && (null == (b = m.afterPanelSentinel.current) || b.focus())
								},
								[H.Backwards]: () => {
									var a;
									null == (a = m.button) || a.focus({
										preventScroll: !0
									})
								}
							})
						}),
						O = (0, G.z)(() => {
							let a = v.current;
							a && (0, e.E)(M.current, {
								[H.Forwards]: () => {
									var a;
									if (!m.button) return;
									let b = s(),
										c = b.indexOf(m.button),
										d = b.slice(0, c + 1),
										e = [...b.slice(c + 1), ...d];
									for (let f of e.slice())
										if ("true" === f.dataset.headlessuiFocusGuard || (null == (a = m.panel) ? void 0 : a.contains(f))) {
											let g = e.indexOf(f); - 1 !== g && e.splice(g, 1)
										} w(e, p.First, {
										sorted: !1
									})
								},
								[H.Backwards]: () => {
									var b;
									w(a, p.Previous) === q.Error && (null == (b = m.button) || b.focus())
								}
							})
						});
					return d.createElement(V.Provider, {
						value: j
					}, C && r && d.createElement(E, {
						id: t,
						ref: m.beforePanelSentinel,
						features: D.Focusable,
						"data-headlessui-focus-guard": !0,
						as: "button",
						type: "button",
						onFocus: N
					}), (0, f.sY)({
						ourProps: K,
						theirProps: l,
						slot: J,
						defaultTag: "div",
						features: _,
						visible: C,
						name: "Popover.Panel"
					}), C && r && d.createElement(E, {
						id: u,
						ref: m.afterPanelSentinel,
						features: D.Focusable,
						"data-headlessui-focus-guard": !0,
						as: "button",
						type: "button",
						onFocus: O
					}))
				}),
				ab = (0, f.yV)(function(a, b) {
					let c = (0, d.useRef)(null),
						e = (0, g.T)(c, b),
						[h, i] = (0, d.useState)([]),
						j = (0, G.z)(a => {
							i(b => {
								let c = b.indexOf(a);
								if (-1 !== c) {
									let d = b.slice();
									return d.splice(c, 1), d
								}
								return b
							})
						}),
						l = (0, G.z)(a => (i(b => [...b, a]), () => j(a))),
						m = (0, G.z)(() => {
							var a;
							let b = (0, k.r)(c);
							if (!b) return !1;
							let d = b.activeElement;
							return !!(null != (a = c.current) && a.contains(d)) || h.some(a => {
								var c, e;
								return (null == (c = b.getElementById(a.buttonId.current)) ? void 0 : c.contains(d)) || (null == (e = b.getElementById(a.panelId.current)) ? void 0 : e.contains(d))
							})
						}),
						n = (0, G.z)(a => {
							for (let b of h) b.buttonId.current !== a && b.close()
						}),
						o = (0, d.useMemo)(() => ({
							registerPopover: l,
							unregisterPopover: j,
							isFocusWithinPopoverGroup: m,
							closeOthers: n
						}), [l, j, m, n]),
						p = (0, d.useMemo)(() => ({}), []);
					return d.createElement(T.Provider, {
						value: o
					}, (0, f.sY)({
						ourProps: {
							ref: e
						},
						theirProps: a,
						slot: p,
						defaultTag: "div",
						name: "Popover.Group"
					}))
				}),
				ac = Object.assign(X, {
					Button: Y,
					Overlay: $,
					Panel: aa,
					Group: ab
				})
		},
		18857: function(a, b, c) {
			"use strict";
			c.d(b, {
				u: function() {
					return H
				}
			});
			var d, e = c(67294),
				f = c(12351),
				g = c(16567),
				h = c(32984),
				i = c(16723);

			function j() {
				let a = (0, e.useRef)(!1);
				return (0, i.e)(() => (a.current = !0, () => {
					a.current = !1
				}), []), a
			}
			var k = c(3855),
				l = c(82180),
				m = c(23784);

			function n() {
				let a = [],
					b = [],
					c = {
						enqueue(a) {
							b.push(a)
						},
						addEventListener(a, b, d, e) {
							return a.addEventListener(b, d, e), c.add(() => a.removeEventListener(b, d, e))
						},
						requestAnimationFrame(...a) {
							let b = requestAnimationFrame(...a);
							return c.add(() => cancelAnimationFrame(b))
						},
						nextFrame(...a) {
							return c.requestAnimationFrame(() => c.requestAnimationFrame(...a))
						},
						setTimeout(...a) {
							let b = setTimeout(...a);
							return c.add(() => clearTimeout(b))
						},
						microTask(...a) {
							let b = {
								current: !0
							};
							return function(a) {
								"function" == typeof queueMicrotask ? queueMicrotask(a) : Promise.resolve().then(a).catch(a => setTimeout(() => {
									throw a
								}))
							}(() => {
								b.current && a[0]()
							}), c.add(() => {
								b.current = !1
							})
						},
						add(b) {
							return a.push(b), () => {
								let c = a.indexOf(b);
								if (c >= 0) {
									let [d] = a.splice(c, 1);
									d()
								}
							}
						},
						dispose() {
							for (let b of a.splice(0)) b()
						},
						async workQueue() {
							for (let a of b.splice(0)) await a()
						},
						style(a, b, c) {
							let d = a.style.getPropertyValue(b);
							return Object.assign(a.style, {
								[b]: c
							}), this.add(() => {
								Object.assign(a.style, {
									[b]: d
								})
							})
						}
					};
				return c
			}

			function o(a, ...b) {
				a && b.length > 0 && a.classList.add(...b)
			}

			function p(a, ...b) {
				a && b.length > 0 && a.classList.remove(...b)
			}

			function q() {
				let [a] = (0, e.useState)(n);
				return (0, e.useEffect)(() => () => a.dispose(), [a]), a
			}
			var r = c(73781),
				s = c(44067),
				t = c(77896);

			function u(a = "") {
				return a.split(" ").filter(a => a.trim().length > 1)
			}
			let v = (0, e.createContext)(null);
			v.displayName = "TransitionContext";
			var w = ((d = w || {}).Visible = "visible", d.Hidden = "hidden", d);
			let x = (0, e.createContext)(null);

			function y(a) {
				return "children" in a ? y(a.children) : a.current.filter(({
					el: a
				}) => null !== a.current).filter(({
					state: a
				}) => "visible" === a).length > 0
			}

			function z(a, b) {
				let c = (0, k.E)(a),
					d = (0, e.useRef)([]),
					g = j(),
					i = q(),
					l = (0, r.z)((a, b = f.l4.Hidden) => {
						let e = d.current.findIndex(({
							el: b
						}) => b === a); - 1 !== e && ((0, h.E)(b, {
							[f.l4.Unmount]() {
								d.current.splice(e, 1)
							},
							[f.l4.Hidden]() {
								d.current[e].state = "hidden"
							}
						}), i.microTask(() => {
							var a;
							!y(d) && g.current && (null == (a = c.current) || a.call(c))
						}))
					}),
					m = (0, r.z)(a => {
						let b = d.current.find(({
							el: b
						}) => b === a);
						return b ? "visible" !== b.state && (b.state = "visible") : d.current.push({
							el: a,
							state: "visible"
						}), () => l(a, f.l4.Unmount)
					}),
					n = (0, e.useRef)([]),
					o = (0, e.useRef)(Promise.resolve()),
					p = (0, e.useRef)({
						enter: [],
						leave: [],
						idle: []
					}),
					s = (0, r.z)((a, c, d) => {
						n.current.splice(0), b && (b.chains.current[c] = b.chains.current[c].filter(([b]) => b !== a)), null == b || b.chains.current[c].push([a, new Promise(a => {
							n.current.push(a)
						})]), null == b || b.chains.current[c].push([a, new Promise(a => {
							Promise.all(p.current[c].map(([a, b]) => b)).then(() => a())
						})]), "enter" === c ? o.current = o.current.then(() => null == b ? void 0 : b.wait.current).then(() => d(c)) : d(c)
					}),
					t = (0, r.z)((a, b, c) => {
						Promise.all(p.current[b].splice(0).map(([a, b]) => b)).then(() => {
							var a;
							null == (a = n.current.shift()) || a()
						}).then(() => c(b))
					});
				return (0, e.useMemo)(() => ({
					children: d,
					register: m,
					unregister: l,
					onStart: s,
					onStop: t,
					wait: o,
					chains: p
				}), [m, l, d, s, t, p, o])
			}

			function A() {}
			x.displayName = "NestingContext";
			let B = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

			function C(a) {
				var b;
				let c = {};
				for (let d of B) c[d] = null != (b = a[d]) ? b : A;
				return c
			}
			let D = f.AN.RenderStrategy,
				E = (0, f.yV)(function(a, b) {
					var c;
					let {
						beforeEnter: d,
						afterEnter: w,
						beforeLeave: A,
						afterLeave: B,
						enter: E,
						enterFrom: F,
						enterTo: G,
						entered: H,
						leave: I,
						leaveFrom: J,
						leaveTo: K,
						...L
					} = a, M = (0, e.useRef)(null), N = (0, m.T)(M, b), O = L.unmount ? f.l4.Unmount : f.l4.Hidden, {
						show: P,
						appear: Q,
						initial: R
					} = function() {
						let a = (0, e.useContext)(v);
						if (null === a) throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
						return a
					}(), [S, T] = (0, e.useState)(P ? "visible" : "hidden"), U = function() {
						let a = (0, e.useContext)(x);
						if (null === a) throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
						return a
					}(), {
						register: V,
						unregister: W
					} = U, X = (0, e.useRef)(null);
					(0, e.useEffect)(() => V(M), [V, M]), (0, e.useEffect)(() => {
						if (O === f.l4.Hidden && M.current) {
							if (P && "visible" !== S) {
								T("visible");
								return
							}
							return (0, h.E)(S, {
								hidden: () => W(M),
								visible: () => V(M)
							})
						}
					}, [S, M, V, W, P, O]);
					let Y, Z = (0, k.E)({
							enter: u(E),
							enterFrom: u(F),
							enterTo: u(G),
							entered: u(H),
							leave: u(I),
							leaveFrom: u(J),
							leaveTo: u(K)
						}),
						$ = (c = {
							beforeEnter: d,
							afterEnter: w,
							beforeLeave: A,
							afterLeave: B
						}, Y = (0, e.useRef)(C(c)), (0, e.useEffect)(() => {
							Y.current = C(c)
						}, [c]), Y),
						_ = (0, l.H)();
					(0, e.useEffect)(() => {
						if (_ && "visible" === S && null === M.current) throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")
					}, [M, S, _]);
					let aa = R && !Q,
						ab = !_ || aa || X.current === P ? "idle" : P ? "enter" : "leave",
						ac = (0, r.z)(a => (0, h.E)(a, {
							enter: () => $.current.beforeEnter(),
							leave: () => $.current.beforeLeave(),
							idle: () => {}
						})),
						ad = (0, r.z)(a => (0, h.E)(a, {
							enter: () => $.current.afterEnter(),
							leave: () => $.current.afterLeave(),
							idle: () => {}
						})),
						ae = z(() => {
							T("hidden"), W(M)
						}, U);
					(function({
						container: a,
						direction: b,
						classes: c,
						onStart: d,
						onStop: e
					}) {
						let f = j(),
							g = q(),
							l = (0, k.E)(b);
						(0, i.e)(() => {
							let b = n();
							g.add(b.dispose);
							let i = a.current;
							if (i && "idle" !== l.current && f.current) return b.dispose(), d.current(l.current), b.add(function(a, b, c, d) {
								var e;
								let f, g = c ? "enter" : "leave",
									i = n(),
									j = void 0 !== d ? (e = d, f = {
										called: !1
									}, (...a) => {
										if (!f.called) return f.called = !0, e(...a)
									}) : () => {};
								"enter" === g && (a.removeAttribute("hidden"), a.style.display = "");
								let k = (0, h.E)(g, {
										enter: () => b.enter,
										leave: () => b.leave
									}),
									l = (0, h.E)(g, {
										enter: () => b.enterTo,
										leave: () => b.leaveTo
									}),
									m = (0, h.E)(g, {
										enter: () => b.enterFrom,
										leave: () => b.leaveFrom
									});
								return p(a, ...b.enter, ...b.enterTo, ...b.enterFrom, ...b.leave, ...b.leaveFrom, ...b.leaveTo, ...b.entered), o(a, ...k, ...m), i.nextFrame(() => {
									p(a, ...m), o(a, ...l),
										function(a, b) {
											let c = n();
											if (!a) return c.dispose;
											let {
												transitionDuration: d,
												transitionDelay: e
											} = getComputedStyle(a), [f, g] = [d, e].map(a => {
												let [b = 0] = a.split(",").filter(Boolean).map(a => a.includes("ms") ? parseFloat(a) : 1e3 * parseFloat(a)).sort((a, b) => b - a);
												return b
											});
											if (f + g !== 0) {
												let h = c.addEventListener(a, "transitionend", a => {
													a.target === a.currentTarget && (b(), h())
												})
											} else b();
											c.add(() => b()), c.dispose
										}(a, () => (p(a, ...k), o(a, ...b.entered), j()))
								}), i.dispose
							}(i, c.current, "enter" === l.current, () => {
								b.dispose(), e.current(l.current)
							})), b.dispose
						}, [b])
					})({
						container: M,
						classes: Z,
						direction: ab,
						onStart: (0, k.E)(a => {
							ae.onStart(M, a, ac)
						}),
						onStop: (0, k.E)(a => {
							ae.onStop(M, a, ad), "leave" !== a || y(ae) || (T("hidden"), W(M))
						})
					}), (0, e.useEffect)(() => {
						aa && (O === f.l4.Hidden ? X.current = null : X.current = P)
					}, [P, aa, S]);
					let af = L;
					return Q && P && t.O.isServer && (af = {
						...af,
						className: (0, s.A)(L.className, ...Z.current.enter, ...Z.current.enterFrom)
					}), e.createElement(x.Provider, {
						value: ae
					}, e.createElement(g.up, {
						value: (0, h.E)(S, {
							visible: g.ZM.Open,
							hidden: g.ZM.Closed
						})
					}, (0, f.sY)({
						ourProps: {
							ref: N
						},
						theirProps: af,
						defaultTag: "div",
						features: D,
						visible: "visible" === S,
						name: "Transition.Child"
					})))
				}),
				F = (0, f.yV)(function(a, b) {
					let {
						show: c,
						appear: d = !1,
						unmount: j,
						...k
					} = a, n = (0, e.useRef)(null), o = (0, m.T)(n, b);
					(0, l.H)();
					let p = (0, g.oJ)();
					if (void 0 === c && null !== p && (c = (0, h.E)(p, {
							[g.ZM.Open]: !0,
							[g.ZM.Closed]: !1
						})), ![!0, !1].includes(c)) throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
					let [q, r] = (0, e.useState)(c ? "visible" : "hidden"), s = z(() => {
						r("hidden")
					}), [t, u] = (0, e.useState)(!0), w = (0, e.useRef)([c]);
					(0, i.e)(() => {
						!1 !== t && w.current[w.current.length - 1] !== c && (w.current.push(c), u(!1))
					}, [w, c]);
					let A = (0, e.useMemo)(() => ({
						show: c,
						appear: d,
						initial: t
					}), [c, d, t]);
					(0, e.useEffect)(() => {
						if (c) r("visible");
						else if (y(s)) {
							let a = n.current;
							if (!a) return;
							let b = a.getBoundingClientRect();
							0 === b.x && 0 === b.y && 0 === b.width && 0 === b.height && r("hidden")
						} else r("hidden")
					}, [c, s]);
					let B = {
						unmount: j
					};
					return e.createElement(x.Provider, {
						value: s
					}, e.createElement(v.Provider, {
						value: A
					}, (0, f.sY)({
						ourProps: {
							...B,
							as: e.Fragment,
							children: e.createElement(E, {
								ref: o,
								...B,
								...k
							})
						},
						theirProps: {},
						defaultTag: e.Fragment,
						features: D,
						visible: "visible" === q,
						name: "Transition"
					})))
				}),
				G = (0, f.yV)(function(a, b) {
					let c = null !== (0, e.useContext)(v),
						d = null !== (0, g.oJ)();
					return e.createElement(e.Fragment, null, !c && d ? e.createElement(F, {
						ref: b,
						...a
					}) : e.createElement(E, {
						ref: b,
						...a
					}))
				}),
				H = Object.assign(F, {
					Child: G,
					Root: F
				})
		},
		73781: function(a, b, c) {
			"use strict";
			c.d(b, {
				z: function() {
					return f
				}
			});
			var d = c(67294),
				e = c(3855);
			let f = function(a) {
				let b = (0, e.E)(a);
				return d.useCallback((...a) => b.current(...a), [b])
			}
		},
		19946: function(a, b, c) {
			"use strict";
			c.d(b, {
				M: function() {
					return i
				}
			});
			var d, e = c(67294),
				f = c(16723),
				g = c(82180),
				h = c(77896);
			let i = null != (d = e.useId) ? d : function() {
				let a = (0, g.H)(),
					[b, c] = e.useState(a ? () => h.O.nextId() : null);
				return (0, f.e)(() => {
					null === b && c(h.O.nextId())
				}, [b]), null != b ? "" + b : void 0
			}
		},
		16723: function(a, b, c) {
			"use strict";
			c.d(b, {
				e: function() {
					return f
				}
			});
			var d = c(67294),
				e = c(77896);
			let f = (a, b) => {
				e.O.isServer ? (0, d.useEffect)(a, b) : (0, d.useLayoutEffect)(a, b)
			}
		},
		3855: function(a, b, c) {
			"use strict";
			c.d(b, {
				E: function() {
					return f
				}
			});
			var d = c(67294),
				e = c(16723);

			function f(a) {
				let b = (0, d.useRef)(a);
				return (0, e.e)(() => {
					b.current = a
				}, [a]), b
			}
		},
		14157: function(a, b, c) {
			"use strict";
			c.d(b, {
				f: function() {
					return g
				}
			});
			var d = c(67294),
				e = c(16723);

			function f(a) {
				var b;
				if (a.type) return a.type;
				let c = null != (b = a.as) ? b : "button";
				if ("string" == typeof c && "button" === c.toLowerCase()) return "button"
			}

			function g(a, b) {
				let [c, g] = (0, d.useState)(() => f(a));
				return (0, e.e)(() => {
					g(f(a))
				}, [a.type, a.as]), (0, e.e)(() => {
					c || !b.current || b.current instanceof HTMLButtonElement && !b.current.hasAttribute("type") && g("button")
				}, [c, b]), c
			}
		},
		82180: function(a, b, c) {
			"use strict";
			c.d(b, {
				H: function() {
					return f
				}
			});
			var d = c(67294),
				e = c(77896);

			function f() {
				let [a, b] = (0, d.useState)(e.O.isHandoffComplete);
				return a && !1 === e.O.isHandoffComplete && b(!1), (0, d.useEffect)(() => {
					!0 !== a && b(!0)
				}, [a]), (0, d.useEffect)(() => e.O.handoff(), []), a
			}
		},
		23784: function(a, b, c) {
			"use strict";
			c.d(b, {
				T: function() {
					return h
				},
				h: function() {
					return g
				}
			});
			var d = c(67294),
				e = c(73781);
			let f = Symbol();

			function g(a, b = !0) {
				return Object.assign(a, {
					[f]: b
				})
			}

			function h(...a) {
				let b = (0, d.useRef)(a);
				(0, d.useEffect)(() => {
					b.current = a
				}, [a]);
				let c = (0, e.z)(a => {
					for (let c of b.current) null != c && ("function" == typeof c ? c(a) : c.current = a)
				});
				return a.every(a => null == a || (null == a ? void 0 : a[f])) ? void 0 : c
			}
		},
		16567: function(a, b, c) {
			"use strict";
			c.d(b, {
				ZM: function() {
					return g
				},
				oJ: function() {
					return h
				},
				up: function() {
					return i
				}
			});
			var d, e = c(67294);
			let f = (0, e.createContext)(null);
			f.displayName = "OpenClosedContext";
			var g = ((d = g || {})[d.Open = 0] = "Open", d[d.Closed = 1] = "Closed", d);

			function h() {
				return (0, e.useContext)(f)
			}

			function i({
				value: a,
				children: b
			}) {
				return e.createElement(f.Provider, {
					value: a
				}, b)
			}
		},
		64103: function(a, b, c) {
			"use strict";

			function d(a) {
				let b = a.parentElement,
					c = null;
				for (; b && !(b instanceof HTMLFieldSetElement);) b instanceof HTMLLegendElement && (c = b), b = b.parentElement;
				let d = (null == b ? void 0 : b.getAttribute("disabled")) === "";
				return !(d && e(c)) && d
			}

			function e(a) {
				if (!a) return !1;
				let b = a.previousElementSibling;
				for (; null !== b;) {
					if (b instanceof HTMLLegendElement) return !1;
					b = b.previousElementSibling
				}
				return !0
			}
			c.d(b, {
				P: function() {
					return d
				}
			})
		},
		44067: function(a, b, c) {
			"use strict";

			function d(...a) {
				return a.filter(Boolean).join(" ")
			}
			c.d(b, {
				A: function() {
					return d
				}
			})
		},
		77896: function(a, b, c) {
			"use strict";
			c.d(b, {
				O: function() {
					return g
				}
			});
			var d = Object.defineProperty,
				e = (a, b, c) => b in a ? d(a, b, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: c
				}) : a[b] = c,
				f = (a, b, c) => (e(a, "symbol" != typeof b ? b + "" : b, c), c);
			let g = new class {
				constructor() {
					f(this, "current", this.detect()), f(this, "handoffState", "pending"), f(this, "currentId", 0)
				}
				set(a) {
					this.current !== a && (this.handoffState = "pending", this.currentId = 0, this.current = a)
				}
				reset() {
					this.set(this.detect())
				}
				nextId() {
					return ++this.currentId
				}
				get isServer() {
					return "server" === this.current
				}
				get isClient() {
					return "client" === this.current
				}
				detect() {
					return "undefined" == typeof window || "undefined" == typeof document ? "server" : "client"
				}
				handoff() {
					"pending" === this.handoffState && (this.handoffState = "complete")
				}
				get isHandoffComplete() {
					return "complete" === this.handoffState
				}
			}
		},
		32984: function(a, b, c) {
			"use strict";

			function d(a, b, ...c) {
				if (a in b) {
					let e = b[a];
					return "function" == typeof e ? e(...c) : e
				}
				let f = Error(`Tried to handle "${a}" but there is no handler defined. Only defined handlers are: ${Object.keys(b).map(a=>`"${a}"`).join(", ")}.`);
				throw Error.captureStackTrace && Error.captureStackTrace(f, d), f
			}
			c.d(b, {
				E: function() {
					return d
				}
			})
		},
		15466: function(a, b, c) {
			"use strict";
			c.d(b, {
				r: function() {
					return e
				}
			});
			var d = c(77896);

			function e(a) {
				return d.O.isServer ? null : a instanceof Node ? a.ownerDocument : null != a && a.hasOwnProperty("current") && a.current instanceof Node ? a.current.ownerDocument : document
			}
		},
		12351: function(a, b, c) {
			"use strict";
			c.d(b, {
				AN: function() {
					return i
				},
				l4: function() {
					return j
				},
				sY: function() {
					return k
				},
				yV: function() {
					return o
				}
			});
			var d, e, f = c(67294),
				g = c(44067),
				h = c(32984),
				i = ((d = i || {})[d.None = 0] = "None", d[d.RenderStrategy = 1] = "RenderStrategy", d[d.Static = 2] = "Static", d),
				j = ((e = j || {})[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e);

			function k({
				ourProps: a,
				theirProps: b,
				slot: c,
				defaultTag: d,
				features: e,
				visible: f = !0,
				name: g
			}) {
				let i = n(b, a);
				if (f) return l(i, c, d, g);
				let j = null != e ? e : 0;
				if (2 & j) {
					let {
						static: k = !1,
						...m
					} = i;
					if (k) return l(m, c, d, g)
				}
				if (1 & j) {
					let {
						unmount: o = !0,
						...p
					} = i;
					return (0, h.E)(o ? 0 : 1, {
						0() {
							return null
						},
						1() {
							return l({
								...p,
								hidden: !0,
								style: {
									display: "none"
								}
							}, c, d, g)
						}
					})
				}
				return l(i, c, d, g)
			}

			function l(a, b = {}, c, d) {
				var e;
				let {
					as: h = c,
					children: i,
					refName: j = "ref",
					...k
				} = q(a, ["unmount", "static"]), l = void 0 !== a.ref ? {
					[j]: a.ref
				} : {}, o = "function" == typeof i ? i(b) : i;
				k.className && "function" == typeof k.className && (k.className = k.className(b));
				let r = {};
				if (b) {
					let s = !1,
						t = [];
					for (let [u, v] of Object.entries(b)) "boolean" == typeof v && (s = !0), !0 === v && t.push(u);
					s && (r["data-headlessui-state"] = t.join(" "))
				}
				if (h === f.Fragment && Object.keys(p(k)).length > 0) {
					if (!(0, f.isValidElement)(o) || Array.isArray(o) && o.length > 1) throw Error(['Passing props on "Fragment"!', "", `The current component <${d} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(k).map(a => `  - ${a}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(a => `  - ${a}`).join(`
`)].join(`
`));
					let w = (0, g.A)(null == (e = o.props) ? void 0 : e.className, k.className),
						x = w ? {
							className: w
						} : {};
					return (0, f.cloneElement)(o, Object.assign({}, n(o.props, p(q(k, ["ref"]))), r, l, m(o.ref, l.ref), x))
				}
				return (0, f.createElement)(h, Object.assign({}, q(k, ["ref"]), h !== f.Fragment && l, h !== f.Fragment && r), o)
			}

			function m(...a) {
				return {
					ref: a.every(a => null == a) ? void 0 : b => {
						for (let c of a) null != c && ("function" == typeof c ? c(b) : c.current = b)
					}
				}
			}

			function n(...a) {
				if (0 === a.length) return {};
				if (1 === a.length) return a[0];
				let b = {},
					c = {};
				for (let d of a)
					for (let e in d) e.startsWith("on") && "function" == typeof d[e] ? (null != c[e] || (c[e] = []), c[e].push(d[e])) : b[e] = d[e];
				if (b.disabled || b["aria-disabled"]) return Object.assign(b, Object.fromEntries(Object.keys(c).map(a => [a, void 0])));
				for (let f in c) Object.assign(b, {
					[f](a, ...b) {
						let d = c[f];
						for (let e of d) {
							if ((a instanceof Event || (null == a ? void 0 : a.nativeEvent) instanceof Event) && a.defaultPrevented) return;
							e(a, ...b)
						}
					}
				});
				return b
			}

			function o(a) {
				var b;
				return Object.assign((0, f.forwardRef)(a), {
					displayName: null != (b = a.displayName) ? b : a.name
				})
			}

			function p(a) {
				let b = Object.assign({}, a);
				for (let c in b) void 0 === b[c] && delete b[c];
				return b
			}

			function q(a, b = []) {
				let c = Object.assign({}, a);
				for (let d of b) d in c && delete c[d];
				return c
			}
		},
		99534: function(a, b, c) {
			"use strict";

			function d(a, b) {
				if (null == a) return {};
				var c, d, e = function(a, b) {
					if (null == a) return {};
					var c, d, e = {},
						f = Object.keys(a);
					for (d = 0; d < f.length; d++) c = f[d], b.indexOf(c) >= 0 || (e[c] = a[c]);
					return e
				}(a, b);
				if (Object.getOwnPropertySymbols) {
					var f = Object.getOwnPropertySymbols(a);
					for (d = 0; d < f.length; d++) c = f[d], !(b.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(a, c) && (e[c] = a[c])
				}
				return e
			}
			c.d(b, {
				Z: function() {
					return d
				}
			})
		}
	}
])