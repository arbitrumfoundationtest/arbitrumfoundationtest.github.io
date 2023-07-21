"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[5186], {
		30621: function(a, b, c) {
			c.d(b, {
				Z: function() {
					return q
				}
			});
			var d = c(41799),
				e = c(69396),
				f = c(99534),
				g = c(828),
				h = c(85893),
				i = c(67294),
				j = c(50817),
				k = c(69077),
				l = c(86493),
				m = c(25675),
				n = c.n(m),
				o = c(8151),
				p = c(49521);

			function q(a) {
				a.children;
				var b = a.showSign,
					c = (0, f.Z)(a, ["children", "showSign"]),
					m = (0, k.mA)(),
					q = m.address,
					r = m.isConnected,
					s = (0, g.Z)((0, p.g)(), 2),
					t = s[0].address,
					u = s[1],
					v = (0, k.LN)().chain,
					w = (0, k.g0)({
						chainId: o.TA
					}).switchNetwork,
					x = (0, i.useMemo)(function() {
						return void 0 !== v && v.id !== o.TA
					}, [v]),
					y = (0, i.useCallback)(function(a) {
						void 0 !== w && w(a)
					}, [w]);
				return ((0, i.useEffect)(function() {
					if (void 0 === q && void 0 !== t) {
						u({
							address: void 0
						});
						return
					}
					u({
						address: q
					})
				}, [q, t, u]), (0, i.useEffect)(function() {
					x && y(o.TA)
				}, [v, x, y]), !r && void 0 !== b && b) ? (0, h.jsx)(j.NL.Custom, {
					children: function(a) {
						var b = a.openConnectModal,
							f = a.mounted,
							g = f;
						return (0, h.jsx)("div", (0, e.Z)((0, d.Z)({}, !g && {
							"aria-hidden": !0,
							style: {
								opacity: 0,
								pointerEvents: "none",
								userSelect: "none"
							}
						}), {
							children: (0, h.jsxs)("button", (0, e.Z)((0, d.Z)({
								class:"interract-button",
								type: "button"
							}, c), {
								children: [(0, h.jsx)("span", {}), "Connect Wallet"]
							}))
						}))
					}
				}) : (0, h.jsx)(j.NL.Custom, {
					children: function(a) {
						var b, c = a.account,
							f = a.chain,
							g = a.openAccountModal,
							i = a.openConnectModal,
							j = a.mounted,
							k = j && c && f;
						return (0, h.jsx)("div", (0, e.Z)((0, d.Z)({}, !j && {
							"aria-hidden": !0,
							style: {
								opacity: 0,
								pointerEvents: "none",
								userSelect: "none"
							}
						}), {
							children: k ? x ? (0, h.jsx)("button", {
								type: "button",
								className: "c-rk-ConnectButton bg-[var(--rk-colors-connectButtonBackgroundError)]",
								disabled: !0,
								children: "Wrong network"
							}) : (0, h.jsxs)("div", {
								className: "flex gap-3",
								children: [(0, h.jsx)("button", {
									className: "c-rk-ConnectButton bg-[#030303] !px-[6px] !lg:px-2",
									type: "button",
									disabled: !0,
									children: !x && (0, h.jsx)("div", {
										className: "c-rk-Chain",
										children: (0, h.jsx)(n(), {
											alt: null !== (b = f.name) && void 0 !== b ? b : "Chain icon",
											src: "/ArbitrumOneLogo.svg",
											width: "20",
											height: "20"
										})
									})
								}), (0, h.jsxs)("button", {
									className: "c-rk-ConnectButton bg-[#030303]",
									onClick: g,
									type: "button",
									children: [c.displayName, (0, h.jsx)(l, {
										className: "w-4 h-4 mr-[-4px]"
									})]
								})]
							}) : (0, h.jsx)("button", {
								
								type: "button",
								className: "c-rk-ConnectButton bg-[var(--blue)] interact-button",
								children: "Connect Wallet"
							})
						}))
					}
				})
			}
		},
		82508: function(a, b, c) {
			c.d(b, {
				d: function() {
					return h
				}
			});
			var d = c(41799),
				e = c(69396),
				f = c(99534),
				g = c(85893);

			function h(a) {
				var b = a.children,
					c = (0, f.Z)(a, ["children"]);
				return (0, g.jsx)("a", (0, e.Z)((0, d.Z)({
					target: "_blank",
					rel: "noopener noreferrer"
				}, c), {
					children: b
				}))
			}
		},
		25186: function(a, b, c) {
			c.d(b, {
				h4: function() {
					return G
				}
			});
			var d = c(41799),
				e = c(69396),
				f = c(99534),
				g = c(85893),
				h = c(67294);
			c(73935);
			var i = c(28368),
				j = c(91296),
				k = c.n(j),
				l = c(25675),
				m = c.n(l),
				n = c(41664),
				o = c.n(n),
				p = c(828),
				q = c(18857);

			function r(a) {
				var b = a.duration,
					c = a.show,
					f = a.children;
				return (0, g.jsx)(q.u, (0, e.Z)((0, d.Z)({
					appear: !0,
					as: h.Fragment,
					show: c
				}, function() {
					var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "fast",
						b = (0, p.Z)(function(a) {
							switch (a) {
								case "fast":
									return [150, 100];
								case "normal":
									return [300, 200]
							}
						}(a), 2),
						c = b[0],
						d = b[1];
					return {
						enter: "transition ease-out duration-".concat(c),
						enterFrom: "opacity-0",
						enterTo: "opacity-100",
						leave: "transition ease-out duration-".concat(d),
						leaveFrom: "opacity-100",
						leaveTo: "opacity-0"
					}
				}(void 0 === b ? "fast" : b)), {
					children: (0, g.jsx)("div", {
						children: f
					})
				}))
			}
			var s = c(82508),
				t = c(80520),
				u = c(86493),
				v = c(66652);

			function w(a) {
				var b;
				return (0, g.jsxs)(t.J, {
					as: "div",
					className: "relative inline-block text-left text-base",
					children: [(0, g.jsx)("div", {
						children: (0, g.jsxs)(t.J.Button, {
							className: "font-semibold arb-hover hidden items-center whitespace-nowrap rounded-md text-base text-white lg:inline-flex lg:p-1",
							children: [a.children, (null === (b = a.items) || void 0 === b ? void 0 : b.length) && (0, g.jsx)(u, {
								className: "ml-1 h-4 w-4 shrink-0 grow-0 text-white"
							})]
						})
					}), (0, g.jsx)(r, {
						children: (0, g.jsx)(t.J.Panel, {
							className: "absolute -left-4 z-50 mt-4 w-80 rounded-md bg-white shadow-lg",
							children: (0, g.jsx)("div", {
								className: "px-6 py-4",
								children: a.items.map(function(a, b) {
									if (void 0 !== a.anchorProps) return (0, g.jsx)("a", (0, e.Z)((0, d.Z)({}, a.anchorProps), {
										target: "_blank",
										rel: "noreferrer",
										className: "-mx-6 block cursor-pointer px-6 py-1 font-semibold hover:bg-blue-arbitrum hover:text-white",
										children: a.title
									}), b);
									var c = a.items || [];
									return (0, g.jsxs)("div", {
										children: [(0, g.jsx)("div", {
											className: "py-1",
											children: (0, g.jsx)("span", {
												className: "font-semibold",
												children: a.title
											})
										}), (0, g.jsx)("div", {
											children: c.map(function(a, c) {
												var d;
												return (0, g.jsx)("a", {
													href: null === (d = a.anchorProps) || void 0 === d ? void 0 : d.href,
													target: "_blank",
													rel: "noreferrer",
													className: "-mx-6 block py-1 pl-10 pr-6 font-light hover:bg-blue-arbitrum hover:text-white",
													children: a.title
												}, "".concat(b, ".").concat(c))
											})
										})]
									}, b)
								})
							})
						})
					})]
				})
			}

			function x(a) {
				return (0, g.jsx)(i.p, {
					children: function(b) {
						var c, d = b.open;
						return (0, g.jsxs)("div", {
							className: "w-full",
							children: [(0, g.jsxs)(i.p.Button, {
								className: "arb-hover flex w-full items-center justify-start p-4 ".concat(d && "bg-white"),
								children: [(0, g.jsx)("span", {
									className: "flex flex-row flex-nowrap items-center space-x-4 text-2xl font-medium text-white ".concat(d && "text-blue-arbitrum"),
									children: a.children
								}), (null === (c = a.items) || void 0 === c ? void 0 : c.length) && (0, g.jsx)(g.Fragment, {
									children: d ? (0, g.jsx)(v, {
										className: "ml-2 h-4 w-4 shrink-0 grow-0 text-dark"
									}) : (0, g.jsx)(u, {
										className: "ml-2 h-4 w-4 shrink-0 grow-0 text-white"
									})
								})]
							}), (0, g.jsx)(i.p.Panel, {
								children: (0, g.jsx)("ul", {
									className: "space-y-4 !py-3 flex-col !items-start",
									children: a.items.map(function(a, b) {
										var c;
										return (0, g.jsx)("li", {
											className: "w-full px-[4rem] py-2 text-left text-lg font-light text-white !m-0",
											children: (0, g.jsx)(s.d, {
												href: null === (c = a.anchorProps) || void 0 === c ? void 0 : c.href,
												className: "hover:underline focus:underline",
												children: a.title
											})
										}, b)
									})
								})
							})]
						})
					}
				})
			}
			var y = c(8151);

			function z() {
				return (0, g.jsx)(o(), {
					href: "/",
					children: (0, g.jsx)("a", {
						className: "c-Logo",
						children: "Arbitrum"
					})
				})
			}
			var A = c(30621);

			function B(a) {
				return {
					items: a.map(function(a) {
						return {
							title: a.title,
							anchorProps: {
								href: a.link
							}
						}
					})
				}
			}
			var C = B([{
					title: "Governance Docs",
					link: null !== y.l9 && void 0 !== y.l9 ? y.l9 : ""
				}, {
					title: "Developer Docs",
					link: "https://developer.arbitrum.io"
				}, {
					title: "About Arbitrum",
					link: "https://developer.arbitrum.io/intro/"
				}, ]),
				D = B([{
					title: "Arbitrum One",
					link: "https://arbiscan.io"
				}, {
					title: "Arbitrum Nova",
					link: "https://nova.arbiscan.io"
				}, {
					title: "Arbitrum Goerli",
					link: "https://goerli.arbiscan.io"
				}, ]),
				E = {
					Open: function() {
						return (0, g.jsxs)("svg", {
							width: "40",
							height: "24",
							viewBox: "0 0 40 26",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg",
							children: [(0, g.jsx)("line", {
								x1: "8",
								y1: "1",
								x2: "40",
								y2: "1",
								stroke: "#FFFFFF",
								strokeWidth: "2"
							}), (0, g.jsx)("line", {
								x1: "8",
								y1: "13",
								x2: "40",
								y2: "13",
								stroke: "#FFFFFF",
								strokeWidth: "2"
							}), (0, g.jsx)("line", {
								x1: "8",
								y1: "25",
								x2: "40",
								y2: "25",
								stroke: "#FFFFFF",
								strokeWidth: "2"
							})]
						})
					},
					Close: function() {
						return (0, g.jsx)("svg", {
							width: "24",
							height: "24",
							viewBox: "0 0 29 28",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg",
							children: (0, g.jsx)("path", {
								fillRule: "evenodd",
								clipRule: "evenodd",
								d: "M16.8285 14.0005L27.4145 3.4145C28.1965 2.6325 28.1965 1.3685 27.4145 0.5865C26.6325 -0.1955 25.3685 -0.1955 24.5865 0.5865L14.0005 11.1725L3.4145 0.5865C2.6325 -0.1955 1.3685 -0.1955 0.5865 0.5865C-0.1955 1.3685 -0.1955 2.6325 0.5865 3.4145L11.1725 14.0005L0.5865 24.5865C-0.1955 25.3685 -0.1955 26.6325 0.5865 27.4145C0.9765 27.8045 1.4885 28.0005 2.0005 28.0005C2.5125 28.0005 3.0245 27.8045 3.4145 27.4145L14.0005 16.8285L24.5865 27.4145C24.9765 27.8045 25.4885 28.0005 26.0005 28.0005C26.5125 28.0005 27.0245 27.8045 27.4145 27.4145C28.1965 26.6325 28.1965 25.3685 27.4145 24.5865L16.8285 14.0005Z",
								fill: "white"
							})
						})
					}
				};

			function F(a) {
				var b = a.children,
					c = a.href,
					h = (0, f.Z)(a, ["children", "href"]);
				return (0, g.jsx)(o(), (0, e.Z)((0, d.Z)({
					href: void 0 === c ? "" : c
				}, h), {
					legacyBehavior: !0,
					children: (0, g.jsx)("a", {
						className: "arb-hover hidden whitespace-nowrap font-semibold text-base text-white lg:block lg:pr-4",
						children: b
					})
				}))
			}

			function G(a) {
				var b = a.stickyHeader,
					c = void 0 === b || b,
					f = a.hideButtons,
					j = void 0 !== f && f,
					l = a.hideMenu,
					m = (0, h.useState)(!1),
					n = m[0],
					o = m[1];
				return (0, h.useEffect)(function() {
					var a = function() {
							c && o(window.scrollY > 0)
						},
						b = k()(a, 100);
					return window.addEventListener("scroll", b, {
							passive: !0
						}),
						function() {
							return window.removeEventListener("scroll", b)
						}
				}, [c]), (0, g.jsx)("header", {
					id: "header",
					className: "".concat(n ? "is-sticky" : ""),
					children: (0, g.jsx)("div", {
						className: "l-Header".concat(j ? " collapsed" : ""),
						children: (0, g.jsxs)("div", {
							className: "l-Header__inner",
							children: [(0, g.jsxs)("div", {
								className: "flex items-center",
								children: [(0, g.jsx)(z, {}), (0, g.jsxs)("div", {
									className: "items-center lg:flex lg:space-x-2 xl:space-x-6 ".concat(void 0 !== l && l ? " !hidden" : ""),
									children: [(0, g.jsx)(w, (0, e.Z)((0, d.Z)({}, C), {
										children: "Learn"
									})), (0, g.jsx)(w, {
										items: [{
											title: "Arbitrum One Portal",
											anchorProps: {
												href: "https://portal.arbitrum.one"
											}
										}, {
											title: "Arbitrum Nova Portal",
											anchorProps: {
												href: "https://portal-nova.arbitrum.io"
											}
										}, {
											title: "Arbitrum Bridge",
											anchorProps: {
												href: "https://bridge.arbitrum.io"
											}
										}, {
											title: "Explorers",
											items: D.items
										}, ],
										children: "Ecosystem"
									}), (0, g.jsx)(F, {
										href: "/orbit",
										children: "Arbitrum Orbit"
									})]
								})]
							}), (0, g.jsxs)("div", {
								className: "items-center justify-end lg:flex lg:space-x-2 xl:space-x-4",
								children: [(0, g.jsx)("div", {
									id: "header-content-root",
									className: "flex space-x-2 xl:space-x-4"
								}), (0, g.jsx)("nav", {
									className: "l-Header__connect",
									children: (0, g.jsxs)("ul", {
										children: [(0, g.jsx)("li", {
											children: (0, g.jsx)(A.Z, {
												className: "[ c-Button c-Button--blue ]"
											})
										}), (0, g.jsx)("li", {
											className: "only-desktop",
											hidden: j,
											children: (0, g.jsx)(s.d, {
												href: "https://twitter.com/arbitrum",
												title: "Twitter",
												className: "[ l-Header__connect-icon ] [ twitter-icon ]",
												children: (0, g.jsx)("svg", {
													xmlns: "http://www.w3.org/2000/svg",
													width: "25",
													height: "20.317",
													viewBox: "0 0 25 20.317",
													children: (0, g.jsx)("path", {
														id: "iconmonstr-twitter-1",
														d: "M25,4.653a10.24,10.24,0,0,1-2.946.807,5.137,5.137,0,0,0,2.255-2.838,10.275,10.275,0,0,1-3.257,1.245,5.132,5.132,0,0,0-8.741,4.677A14.561,14.561,0,0,1,1.741,3.187a5.136,5.136,0,0,0,1.586,6.848,5.107,5.107,0,0,1-2.322-.642,5.133,5.133,0,0,0,4.114,5.094,5.141,5.141,0,0,1-2.317.087,5.133,5.133,0,0,0,4.792,3.561A10.313,10.313,0,0,1,0,20.261a14.52,14.52,0,0,0,7.862,2.3A14.506,14.506,0,0,0,22.441,7.308,10.442,10.442,0,0,0,25,4.653Z",
														transform: "translate(0 -2.248)",
														fill: "#fff"
													})
												})
											})
										}), (0, g.jsx)("li", {
											className: "only-desktop",
											hidden: j,
											children: (0, g.jsx)(s.d, {
												href: "https://discord.gg/arbitrum",
												title: "Discord",
												className: "[ l-Header__connect-icon ] [ discord-icon ]",
												children: (0, g.jsxs)("svg", {
													xmlns: "http://www.w3.org/2000/svg",
													xmlnsXlink: "http://www.w3.org/1999/xlink",
													width: "27.81",
													height: "20",
													viewBox: "0 0 27.81 20",
													children: [(0, g.jsx)("defs", {
														children: (0, g.jsx)("clipPath", {
															children: (0, g.jsx)("rect", {
																width: "27.81",
																height: "20",
																fill: "#fff"
															})
														})
													}), (0, g.jsx)("g", {
														transform: "translate(0 0)",
														children: (0, g.jsx)("g", {
															transform: "translate(0 0)",
															clipPath: "url(#clip-path)",
															children: (0, g.jsx)("path", {
																d: "M24.381,2.5A11.774,11.774,0,0,0,17.69,0l-.333.381A15.846,15.846,0,0,1,23.286,3.4a19.409,19.409,0,0,0-7.167-2.286,20.146,20.146,0,0,0-4.81.048l-.4.048a17.88,17.88,0,0,0-5.4,1.5c-.881.4-1.4.69-1.4.69A16.063,16.063,0,0,1,10.357.286L10.119,0a11.774,11.774,0,0,0-6.69,2.5A31.885,31.885,0,0,0,0,16.381S2,19.833,7.262,20c0,0,.881-1.071,1.6-1.976a7.405,7.405,0,0,1-4.167-2.81l.667.4.1.071.093.054.028.012.093.054a13.954,13.954,0,0,0,1.738.81,19.987,19.987,0,0,0,3.5,1.024,16.679,16.679,0,0,0,6.167.024,15.671,15.671,0,0,0,3.452-1.024,13.625,13.625,0,0,0,2.738-1.4,7.513,7.513,0,0,1-4.31,2.833c.714.9,1.571,1.929,1.571,1.929,5.262-.167,7.286-3.619,7.286-3.619A31.885,31.885,0,0,0,24.381,2.5M9.452,14.167a2.552,2.552,0,0,1-2.429-2.643A2.537,2.537,0,0,1,9.452,8.881a2.521,2.521,0,0,1,2.429,2.643,2.537,2.537,0,0,1-2.429,2.643m8.69,0a2.552,2.552,0,0,1-2.429-2.643,2.537,2.537,0,0,1,2.429-2.643,2.537,2.537,0,0,1,2.429,2.643,2.537,2.537,0,0,1-2.429,2.643",
																transform: "translate(0 0)",
																fill: "#fff"
															})
														})
													})]
												})
											})
										}), (0, g.jsx)("li", {
											className: "only-desktop",
											hidden: j,
											children: (0, g.jsx)(s.d, {
												href: "https://t.me/arbitrum",
												title: "Telegram",
												className: "[ l-Header__connect-icon ] [ telegram-icon ]",
												children: (0, g.jsx)("svg", {
													xmlns: "http://www.w3.org/2000/svg",
													width: "24.001",
													height: "20",
													viewBox: "0 0 24.001 20",
													children: (0, g.jsx)("path", {
														id: "telegram-1",
														d: "M18.384,22.779a1.189,1.189,0,0,0,1.107.145,1.16,1.16,0,0,0,.724-.84C21.084,18,23.192,7.663,23.983,3.948a.781.781,0,0,0-.26-.758.8.8,0,0,0-.8-.14C18.733,4.6,5.82,9.447.542,11.4a.822.822,0,0,0,.051,1.563c2.367.708,5.474,1.693,5.474,1.693s1.452,4.385,2.209,6.615a.876.876,0,0,0,.6.576.866.866,0,0,0,.811-.207l3.1-2.923s3.572,2.619,5.6,4.062ZM7.374,14.1,9.053,19.64l.373-3.507L19.611,6.947a.277.277,0,0,0,.033-.377.284.284,0,0,0-.376-.064L7.374,14.1Z",
														transform: "translate(0 -3)",
														fill: "#fff",
														fillRule: "evenodd"
													})
												})
											})
										}), (0, g.jsx)("li", {
											className: "only-mobile",
											children: (0, g.jsx)(i.p, {
												children: function(a) {
													var b = a.open;
													return (0, g.jsxs)("div", {
														className: "flex items-center",
														children: [b ? (0, g.jsx)(i.p.Button, {
															className: "text-white lg:hidden ml-5 mr-1",
															children: (0, g.jsx)(E.Close, {})
														}) : (0, g.jsx)(i.p.Button, {
															className: "lg:hidden ml-2",
															"aria-label": "Menu Toggle Button",
															children: (0, g.jsx)(E.Open, {})
														}), (0, g.jsx)(i.p.Panel, {
															children: (0, g.jsx)(r, {
																children: (0, g.jsx)(J, {})
															})
														})]
													})
												}
											})
										})]
									})
								})]
							})]
						})
					})
				})
			}

			function H(a) {
				var b = a.children,
					c = a.href;
				return (0, g.jsx)(o(), {
					href: void 0 === c ? "" : c,
					legacyBehavior: !0,
					children: (0, g.jsx)("a", {
						className: "arb-hover flex w-full flex-row flex-nowrap items-center space-x-4 p-4 py-3 text-2xl font-medium text-white",
						children: b
					})
				})
			}
			var I = function(a) {
				var b = a.src,
					c = a.alt;
				return (0, g.jsx)("span", {
					className: "flex items-center mr-4",
					children: (0, g.jsx)(m(), {
						src: b,
						alt: c,
						width: 32,
						height: 32
					})
				})
			};

			function J() {
				return (0, g.jsx)("div", {
					className: "absolute left-0 top-[50px] z-50 min-h-screen w-full lg:hidden",
					children: (0, g.jsxs)("div", {
						className: "flex min-h-screen flex-col items-center space-y-3 bg-default-black",
						children: [(0, g.jsx)("div", {
							id: "header-content-root",
							className: "flex w-full flex-col-reverse items-center space-y-3"
						}), (0, g.jsxs)(x, (0, e.Z)((0, d.Z)({}, C), {
							children: [(0, g.jsx)(I, {
								src: "/images/header/headerLogo_learn.webp",
								alt: "Learn"
							}), "Learn"]
						})), (0, g.jsxs)(x, {
							items: [{
								title: "Arbitrum One Portal",
								anchorProps: {
									href: "https://portal.arbitrum.one"
								}
							}, {
								title: "Arbitrum Nova Portal",
								anchorProps: {
									href: "https://portal-nova.arbitrum.io"
								}
							}, {
								title: "Arbitrum Bridge",
								anchorProps: {
									href: "https://bridge.arbitrum.io"
								}
							}, ],
							children: [(0, g.jsx)(I, {
								src: "/images/header/headerLogo_ecosystem.webp",
								alt: "Ecosystem"
							}), "Ecosystem"]
						}), (0, g.jsxs)(x, (0, e.Z)((0, d.Z)({}, D), {
							children: [(0, g.jsx)(I, {
								src: "/images/header/headerLogo_explorers.webp",
								alt: "Explorers"
							}), "Explorers"]
						})), (0, g.jsx)(H, {
							href: "/orbit",
							children: (0, g.jsxs)(g.Fragment, {
								children: [(0, g.jsx)("span", {
									className: "bg-[#8d8e8e] flex rounded-full items-center justify-center mr-4",
									children: (0, g.jsx)(m(), {
										src: "/images/header/headerLogo_orbit.svg",
										alt: "Arbitrum Orbit",
										width: 32,
										height: 32
									})
								}), "Arbitrum Orbit"]
							})
						})]
					})
				})
			}
		}
	}
])