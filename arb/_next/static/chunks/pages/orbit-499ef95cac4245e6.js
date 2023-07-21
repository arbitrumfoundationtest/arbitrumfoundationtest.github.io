(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[8852], {
		93096: function(a, b, c) {
			var d = "Expected a function",
				e = 0 / 0,
				f = /^\s+|\s+$/g,
				g = /^[-+]0x[0-9a-f]+$/i,
				h = /^0b[01]+$/i,
				i = /^0o[0-7]+$/i,
				j = parseInt,
				k = "object" == typeof c.g && c.g && c.g.Object === Object && c.g,
				l = "object" == typeof self && self && self.Object === Object && self,
				m = k || l || Function("return this")(),
				n = Object.prototype.toString,
				o = Math.max,
				p = Math.min,
				q = function() {
					return m.Date.now()
				};

			function r(a) {
				var b = typeof a;
				return !!a && ("object" == b || "function" == b)
			}

			function s(a) {
				if ("number" == typeof a) return a;
				if ("symbol" == typeof(b = a) || (c = b) && "object" == typeof c && "[object Symbol]" == n.call(b)) return e;
				if (r(a)) {
					var b, c, d = "function" == typeof a.valueOf ? a.valueOf() : a;
					a = r(d) ? d + "" : d
				}
				if ("string" != typeof a) return 0 === a ? a : +a;
				a = a.replace(f, "");
				var k = h.test(a);
				return k || i.test(a) ? j(a.slice(2), k ? 2 : 8) : g.test(a) ? e : +a
			}
			a.exports = function(a, b, c) {
				var e = !0,
					f = !0;
				if ("function" != typeof a) throw TypeError(d);
				return r(c) && (e = "leading" in c ? !!c.leading : e, f = "trailing" in c ? !!c.trailing : f),
					function(a, b, c) {
						var e, f, g, h, i, j, k = 0,
							l = !1,
							m = !1,
							n = !0;
						if ("function" != typeof a) throw TypeError(d);

						function t(b) {
							var c = e,
								d = f;
							return e = f = void 0, k = b, h = a.apply(d, c)
						}

						function u(a) {
							var c = a - j,
								d = a - k;
							return void 0 === j || c >= b || c < 0 || m && d >= g
						}

						function v() {
							var a, c, d, e, f = q();
							if (u(f)) return w(f);
							i = setTimeout(v, (c = (a = f) - j, d = a - k, e = b - c, m ? p(e, g - d) : e))
						}

						function w(a) {
							return (i = void 0, n && e) ? t(a) : (e = f = void 0, h)
						}

						function x() {
							var a, c = q(),
								d = u(c);
							if (e = arguments, f = this, j = c, d) {
								if (void 0 === i) return k = a = j, i = setTimeout(v, b), l ? t(a) : h;
								if (m) return i = setTimeout(v, b), t(j)
							}
							return void 0 === i && (i = setTimeout(v, b)), h
						}
						return b = s(b) || 0, r(c) && (l = !!c.leading, m = "maxWait" in c, g = m ? o(s(c.maxWait) || 0, b) : g, n = "trailing" in c ? !!c.trailing : n), x.cancel = function() {
							void 0 !== i && clearTimeout(i), k = 0, e = j = f = i = void 0
						}, x.flush = function() {
							return void 0 === i ? h : w(q())
						}, x
					}(a, b, {
						leading: e,
						maxWait: b,
						trailing: f
					})
			}
		},
		88737: function(a, b, c) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/orbit", function() {
				return c(58561)
			}])
		},
		58561: function(a, b, c) {
			"use strict";
			c.r(b), c.d(b, {
				default: function() {
					return v
				}
			});
			var d = c(85893),
				e = c(9008),
				f = c.n(e),
				g = c(25186),
				h = c(60487),
				i = c(2292),
				j = c(82508),
				k = c(39605),
				l = c(67294),
				m = function(a) {
					a.forEach(function(a) {
						a.isIntersecting ? a.target.classList.add("is-visible") : a.target.classList.remove("is-visible")
					})
				};

			function n() {
				var a = (0, l.useRef)(null);
				return (0, l.useEffect)(function() {
					if (null === (b = a.current) || void 0 === b ? void 0 : b.children) {
						var b, c = new IntersectionObserver(m, {
							rootMargin: "0% 0% -30% 0%",
							threshold: 1
						});
						return Array.from(a.current.children).forEach(function(a) {
								c.observe(a)
							}),
							function() {
								c.disconnect()
							}
					}
				}, [a]), (0, d.jsx)("div", {
					children: (0, d.jsxs)("p", {
						className: "c-AnimateTextOnScroll",
						ref: a,
						children: [(0, d.jsx)("span", {
							children: "Arbitrum"
						}), " ", (0, d.jsx)("span", {
							children: "Orbit"
						}), " ", (0, d.jsx)("span", {
							children: "offers"
						}), " ", (0, d.jsx)("span", {
							children: "a"
						}), " ", (0, d.jsx)("span", {
							children: "powerful"
						}), " ", (0, d.jsx)("span", {
							children: "new"
						}), " ", (0, d.jsx)("span", {
							children: "way"
						}), " ", (0, d.jsx)("span", {
							children: "to"
						}), " ", (0, d.jsx)("span", {
							children: "build"
						}), " ", (0, d.jsx)("span", {
							children: "on"
						}), " ", (0, d.jsx)("span", {
							children: "Arbitrum."
						}), " ", (0, d.jsx)("span", {
							children: "Layer"
						}), " ", (0, d.jsx)("span", {
							children: "3"
						}), " ", (0, d.jsx)("span", {
							children: "chains,"
						}), " ", (0, d.jsx)("span", {
							children: "new"
						}), " ", (0, d.jsx)("span", {
							children: "applications,"
						}), " ", (0, d.jsx)("span", {
							children: "protocol"
						}), " ", (0, d.jsx)("span", {
							children: "innovations;"
						}), " ", (0, d.jsx)("span", {
							className: "font-semibold",
							children: "the"
						}), " ", (0, d.jsx)("span", {
							className: "font-semibold",
							children: "floodgates"
						}), " ", (0, d.jsx)("span", {
							className: "font-semibold",
							children: "are"
						}), " ", (0, d.jsx)("span", {
							className: "font-semibold",
							children: "open."
						}), " ", (0, d.jsx)("span", {
							children: "Welcome"
						}), " ", (0, d.jsx)("span", {
							children: "to"
						}), " ", (0, d.jsx)("span", {
							children: "the"
						}), " ", (0, d.jsx)("span", {
							children: "world"
						}), " ", (0, d.jsx)("span", {
							children: "of"
						}), " ", (0, d.jsx)("span", {
							children: "faster,"
						}), " ", (0, d.jsx)("span", {
							children: "cheaper,"
						}), " ", (0, d.jsx)("span", {
							children: "and"
						}), " ", (0, d.jsx)("span", {
							children: "more"
						}), " ", (0, d.jsx)("span", {
							children: "secure"
						}), " ", (0, d.jsx)("span", {
							children: "deployment."
						})]
					})
				})
			}
			var o = c(8151),
				p = {
					sizes: ["/planet_6.svg"],
					alt: "Planet",
					width: 80,
					height: 80
				},
				q = {
					sizes: ["/story_1.webp"],
					alt: "Arbitrum Rollup",
					width: 261,
					height: 200
				},
				r = {
					sizes: ["/illustration_1.webp"],
					alt: "Arbitrum AnyTrust",
					width: 300,
					height: 200
				},
				s = {
					sizes: ["/story_2.webp"],
					alt: "Build your own",
					width: 200,
					height: 200
				},
				t = {
					sizes: ["/illustration_10.webp"],
					alt: "Rockets",
					width: 200,
					height: 200
				},
				u = [{
					image: {
						sizes: ["/planet_5.svg"],
						alt: "#"
					},
					transformOffset: .5,
					width: "clamp(350px, 75vw, 900px)",
					height: "clamp(350px, 75vw, 900px)",
					inset: "40vh 0 0 67vw",
					setBack: !0
				}, {
					image: {
						sizes: ["/planet_4.svg"],
						alt: "#"
					},
					transformOffset: .75,
					width: "clamp(600px, 90vw, 1500px)",
					height: "clamp(600px, 90vw, 1500px)",
					inset: "90vh 0 0 0"
				}, {
					image: {
						sizes: ["/planet_3.svg"],
						alt: "#"
					},
					transformOffset: .15,
					width: "clamp(120px, 20vw, 280px)",
					height: "clamp(120px, 20vw, 280px)",
					inset: "82vh 0 0 35vw",
					setBack: !0
				}, ];

			function v() {
				return (0, d.jsxs)(d.Fragment, {
					children: [(0, d.jsxs)(f(), {
						children: [(0, d.jsx)("title", {
							children: "Arbitrum Orbit — Launch new chains in the Arbitrum ecosystem"
						}), (0, d.jsx)("meta", {
							name: "description",
							content: "Launch chains using Arbitrum’s battle-tested Nitro technology, with fully-functioning fraud proofs, advanced compression, and EVM compatibility."
						}), (0, d.jsx)("meta", {
							name: "viewport",
							content: "width=device-width, initial-scale=1, minimum-scale=1"
						})]
					}), (0, d.jsxs)("main", {
						children: [(0, d.jsx)(g.h4, {
							hideButtons: !0
						}), (0, d.jsxs)("section", {
							className: "relative [ l-Section ] !max-w-none orbit-hero",
							children: [(0, d.jsxs)("div", {
								className: "orbits",
								children: [(0, d.jsx)("div", {
									className: "orbit-1"
								}), (0, d.jsx)("div", {
									className: "planet-1",
									children: (0, d.jsx)(k.Z, {
										imageObj: p
									})
								})]
							}), (0, d.jsxs)("div", {
								className: "orbit-hero-content relative flex flex-col items-center justify-center px-5 max-w-5xl m-auto text-center",
								children: [(0, d.jsx)("h1", {
									className: "l-Hero__heading",
									children: "Launch a chain into Orbit"
								}), (0, d.jsx)("h2", {
									className: "l-Hero__sub-heading mb-10",
									children: "Arbitrum Orbit is a path for launching new chains in the Arbitrum ecosystem"
								}), (0, d.jsxs)("div", {
									className: "flex gap-6 md:gap-10 flex-row",
									children: [(0, d.jsx)(j.d, {
										href: "".concat(o.r$, "/launch-orbit-chain/orbit-gentle-introduction"),
										className: "[ c-Button c-Button--blue ]",
										children: "Start Building"
									}), (0, d.jsx)(j.d, {
										href: "https://forms.gle/L6qEyo837BegopNe9",
										className: "[ c-Button c-Button--outline ]",
										children: "Get in touch"
									})]
								})]
							})]
						}), (0, d.jsxs)("section", {
							className: "relative [ l-Section ] transparent-bg px-5",
							children: [(0, d.jsxs)("div", {
								className: "flex flex-col justify-center max-w-6xl mx-auto mb-6",
								children: [(0, d.jsx)("h3", {
									className: "deploy-title",
									children: "Deploy Layer-3 chains on Arbitrum"
								}), (0, d.jsx)("p", {
									className: "deploy-desc",
									children: "Arbitrum offers Rollup and AnyTrust technology for maximum flexibility in building your ideal L3"
								})]
							}), (0, d.jsxs)("div", {
								className: "orbit-features",
								children: [(0, d.jsxs)("div", {
									className: "orbit-feat",
									children: [(0, d.jsx)(k.Z, {
										imageObj: q,
										className: "orbit-feat--img",
										layout: "fill"
									}), (0, d.jsxs)("div", {
										className: "orbit-feat--content",
										children: [(0, d.jsx)("span", {
											className: "[ c-Label c-Label--dark ]",
											children: "Arbitrum Rollup"
										}), (0, d.jsxs)("p", {
											children: ["Launch L3 Rollup chains ", (0, d.jsx)("i", {
												children: "(like Arbitrum One)"
											}), ", with Ethereum-level security, to further increase scalability"]
										})]
									})]
								}), (0, d.jsxs)("div", {
									className: "orbit-feat",
									children: [(0, d.jsx)(k.Z, {
										imageObj: r,
										className: "orbit-feat--img",
										layout: "fill"
									}), (0, d.jsxs)("div", {
										className: "orbit-feat--content",
										children: [(0, d.jsx)("span", {
											className: "[ c-Label c-Label--dark ]",
											children: "Arbitrum AnyTrust"
										}), (0, d.jsxs)("p", {
											children: ["Launch L3 AnyTrust chains ", (0, d.jsx)("i", {
												children: "(like Arbitrum Nova)"
											}), ", with minimal trust assumptions while enabling ultra-low transaction costs for high-volume applications"]
										})]
									})]
								}), (0, d.jsxs)("div", {
									className: "orbit-feat",
									children: [(0, d.jsx)(k.Z, {
										imageObj: s,
										className: "orbit-feat--img",
										layout: "fill"
									}), (0, d.jsxs)("div", {
										className: "orbit-feat--content",
										children: [(0, d.jsx)("span", {
											className: "[ c-Label c-Label--dark ]",
											children: "Make Modifications"
										}), (0, d.jsx)("p", {
											children: "Build and customize an L3 with the Arbitrum Nitro core for application-specific needs."
										})]
									})]
								})]
							}), (0, d.jsxs)("div", {
								className: "nitro-base",
								children: [(0, d.jsx)("span", {
									className: "[ c-Label c-Label--dark ]",
									children: "Arbitrum Nitro"
								}), (0, d.jsx)("p", {
									className: "mt-5 text-white",
									children: "The technical stack powering all Arbitrum products"
								})]
							})]
						}), (0, d.jsxs)("section", {
							className: "[ l-Section l-Section--adjacent-image-text-reverse ]",
							children: [(0, d.jsxs)("div", {
								children: [(0, d.jsx)("h3", {
									className: "l-Section__heading",
									children: "Build chains powered by Nitro"
								}), (0, d.jsx)("p", {
									className: "l-Section__lede",
									children: "Launch chains using Arbitrum’s battle-tested technology. Enjoy fully-functioning fraud proofs, advanced compression, and EVM compatibility."
								})]
							}), (0, d.jsx)("div", {
								children: (0, d.jsx)(k.Z, {
									imageObj: t
								})
							})]
						}), (0, d.jsx)("section", {
							className: "relative [ l-Section ] transparent-bg !mt-12",
							children: (0, d.jsxs)("div", {
								className: "flex items-center justify-center flex-col p-5",
								children: [(0, d.jsx)("h3", {
									className: "l-Section__heading !mb-0",
									children: "Community Controlled"
								}), (0, d.jsxs)("div", {
									className: "section-card community-involvement-card",
									children: [(0, d.jsx)("p", {
										className: "text-left",
										children: "While Layer-3 chains can deploy permissionlessly, launching a Layer-2 chain on Ethereum will require submitting a proposal to the Arbitrum DAO"
									}), (0, d.jsx)("div", {
										className: "shooting-star"
									})]
								}), (0, d.jsx)(j.d, {
									href: "".concat(o.l9, "/new-arb-chains"),
									className: "[ c-Button c-Button--blue ]",
									children: "Learn More"
								})]
							})
						}), (0, d.jsx)("section", {
							className: "[ l-Section l-Section--animate-text-on-scroll ] transparent-bg !mt-24 md:!mt-60",
							children: (0, d.jsx)(n, {})
						}), (0, d.jsx)("section", {
							className: "flex justify-center items-center px-5",
							children: (0, d.jsxs)("div", {
								className: "section-card rounded-xl",
								children: [(0, d.jsx)("p", {
									children: "Start building a new chain today. Learn how by visiting the developer docs, or getting in touch with the team."
								}), (0, d.jsx)(j.d, {
									href: "https://forms.gle/L6qEyo837BegopNe9",
									className: "[ c-Button c-Button--blue ] mt-4",
									children: "Get in touch"
								})]
							})
						}), (0, d.jsx)(i.Z, {
							elements: u
						}), (0, d.jsx)(h.Z, {})]
					})]
				})
			}
		},
		60487: function(a, b, c) {
			"use strict";
			c.d(b, {
				Z: function() {
					return h
				}
			});
			var d = c(85893),
				e = c(41664),
				f = c.n(e),
				g = c(82508);

			function h() {
				var a = function() {
					window.scrollTo({
						top: 0,
						behavior: "smooth"
					})
				};
				return (0, d.jsxs)(d.Fragment, {
					children: [(0, d.jsx)("hr", {
						className: "margin-top-xxlarge"
					}), (0, d.jsx)("footer", {
						children: (0, d.jsxs)("div", {
							className: "l-Footer",
							children: [(0, d.jsxs)("div", {
								className: "l-Footer__links",
								children: [(0, d.jsxs)("ul", {
									children: [(0, d.jsx)("li", {
										className: "l-Footer__label",
										children: "Learn More"
									}), (0, d.jsx)("li", {
										children: (0, d.jsx)(g.d, {
											href: "https://forum.arbitrum.foundation/",
											children: "View Proposals"
										})
									}), (0, d.jsx)("li", {
										children: (0, d.jsx)(g.d, {
											href: "https://arbitrumfoundation.medium.com/arbitrum-the-next-phase-of-decentralization-e7f8b37b5226",
											children: "Read the Vision"
										})
									}), (0, d.jsx)("li", {
										children: (0, d.jsx)(g.d, {
											href: "https://developer.arbitrum.io",
											children: "Read Developer Docs"
										})
									})]
								}), (0, d.jsxs)("ul", {
									children: [(0, d.jsx)("li", {
										className: "l-Footer__label",
										children: "Resources"
									}), (0, d.jsx)("li", {
										children: (0, d.jsx)(g.d, {
											href: "https://arbitrumfoundation.medium.com",
											children: "Blog"
										})
									}), (0, d.jsx)("li", {
										children: (0, d.jsx)(f(), {
											href: "/tos",
											children: "Terms of Service"
										})
									}), (0, d.jsx)("li", {
										children: (0, d.jsx)(f(), {
											href: "/privacy",
											children: "Privacy Notice"
										})
									})]
								}), (0, d.jsxs)("ul", {
									children: [(0, d.jsx)("li", {
										className: "l-Footer__label",
										children: "Ecosystem"
									}), (0, d.jsx)("li", {
										children: (0, d.jsx)(g.d, {
											href: "https://portal.arbitrum.io",
											children: "App Portal"
										})
									}), (0, d.jsx)("li", {
										children: (0, d.jsx)(g.d, {
											href: "https://bridge.arbitrum.io",
											children: "Bridge"
										})
									}), (0, d.jsx)("li", {
										children: (0, d.jsx)(g.d, {
											href: "https://research.arbitrum.io",
											children: "Research Forum"
										})
									})]
								}), (0, d.jsxs)("ul", {
									children: [(0, d.jsx)("li", {
										className: "l-Footer__label",
										children: "Talk to us"
									}), (0, d.jsx)("li", {
										children: (0, d.jsx)("a", {
											href: "mailto:info@arbitrum.foundation",
											children: "info@arbitrum.foundation"
										})
									}), (0, d.jsx)("li", {
										children: (0, d.jsx)(g.d, {
											href: "https://discord.gg/arbitrum",
											children: "Discord"
										})
									}), (0, d.jsx)("li", {
										children: (0, d.jsx)(g.d, {
											href: "https://twitter.com/arbitrum",
											children: "Twitter"
										})
									})]
								})]
							}), (0, d.jsxs)("div", {
								className: "l-Footer__subscribe",
								children: [(0, d.jsxs)("div", {
									children: [(0, d.jsx)("span", {
										className: "l-Footer__label",
										children: "Join the community"
									}), (0, d.jsx)("p", {
										className: "l-Footer__subscribe-lede",
										children: "Sign up to our newsletter for updates, announcements, and more."
									}), (0, d.jsx)("iframe", {
										title: "Form",
										src: "",
										width: "100%"
									})]
								}), (0, d.jsx)("button", {
									onClick: a,
									className: "c-BackToTop mt-8",
									children: "Back to top"
								})]
							})]
						})
					})]
				})
			}
		},
		39605: function(a, b, c) {
			"use strict";
			c.d(b, {
				Z: function() {
					return g
				}
			});
			var d = c(85893);
			c(77090);
			var e = c(25675),
				f = c.n(e);

			function g(a) {
				var b = a.imageObj,
					c = a.layout,
					e = void 0 === c ? "responsive" : c,
					g = a.hasPadding,
					h = void 0 !== g && g,
					i = a.className;
				return (0, d.jsx)("div", {
					className: "c-LazyImage ".concat("fill" !== e || h ? "" : "is-contained", " ").concat("fill" === e && h ? "has-padding" : "").concat(i ? " " + i : ""),
					style: {
						paddingBottom: h ? "".concat(b.height / b.width * 100, "%") : void 0
					},
					children: (0, d.jsx)(f(), {
						layout: e,
						className: "lazyload",
						"data-src": b.sizes[0],
						src: b.sizes[0],
						width: "fill" === e ? void 0 : b.width,
						height: "fill" === e ? void 0 : b.height,
						alt: b.alt,
						lazyBoundary: "500px"
					})
				})
			}
		},
		2292: function(a, b, c) {
			"use strict";
			c.d(b, {
				Z: function() {
					return l
				}
			});
			var d = c(41799),
				e = c(69396),
				f = c(85893),
				g = c(93096),
				h = c.n(g),
				i = c(67294),
				j = c(85518),
				k = c(39605);

			function l(a) {
				var b = a.elements,
					c = (0, i.useState)(0),
					g = c[0],
					l = c[1],
					m = (0, i.useState)(!1),
					n = m[0],
					o = m[1],
					p = function() {
						return l(window.scrollY)
					};
				return (0, i.useEffect)(function() {
					var a = h()(p, 10);
					return window.removeEventListener("scroll", a), window.addEventListener("scroll", a, {
							passive: !0
						}),
						function() {
							return window.removeEventListener("scroll", a)
						}
				}, []), (0, i.useEffect)(function() {
					o(!0)
				}, []), (0, f.jsx)(f.Fragment, {
					children: n && (0, f.jsx)(f.Fragment, {
						children: b.map(function(a, b) {
							var c;
							return (0, f.jsx)("div", {
								className: "c-ParallaxElement ".concat(a.setBack ? "" : "scroll-touch"),
								style: {
									transform: (c = a.transformOffset, j.tq && c ? "scale(.5) translateY(0)" : "scale(.5) translateY(-".concat(g * c, "px)")),
									width: a.width,
									height: a.height,
									inset: a.inset,
									zIndex: a.setBack ? "-2" : "-1"
								},
								children: (0, f.jsx)(k.Z, {
									layout: "fill",
									imageObj: (0, e.Z)((0, d.Z)({}, a.image), {
										width: 100,
										height: 100
									})
								})
							}, b)
						})
					})
				})
			}
		}
	},
	function(a) {
		a.O(0, [395, 5149, 5186, 9774, 2888, 179], function() {
			var b;
			return a(a.s = 88737)
		}), _N_E = a.O()
	}
])