(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[1147], {
		4786: function(a, b, c) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["", function() {
				return c(47324)
			}])
		},
		47324: function(a, b, c) {
			"use strict";
			c.r(b), c.d(b, {
				"__N_SSP": function() {
					return g
				},
				default: function() {
					return h
				}
			});
			var d = c(85893),
				e = c(67294),
				f = c(3025),
				g = !0;

			function h(a) {
				var b, c = function() {
						return void 0 === a.status || n ? (0, d.jsxs)("button", {
							type: "submit",
							className: "flex space-x-2",
							children: [(0, d.jsx)("span", {
								children: "Subscribe"
							}), l && (0, d.jsx)(f.gy, {
								height: 16,
								width: 16,
								color: "#ffffff"
							})]
						}) : "error" === a.status ? (0, d.jsx)("button", {
							disabled: !0,
							children: "Failed to subscribe"
						}) : (0, d.jsx)("button", {
							disabled: !0,
							children: "Subscribed successfully"
						})
					},
					g = null !== (b = a.email) && void 0 !== b ? b : "",
					h = (0, e.useState)(g),
					i = h[0],
					j = h[1],
					k = (0, e.useState)(!1),
					l = k[0],
					m = k[1],
					n = i !== g;
				return (0, d.jsxs)("form", {
					className: "c-InlineForm",
					action: "/api/newsletter",
					method: "POST",
					onSubmit: function() {
						return m(!0)
					},
					children: [(0, d.jsx)("input", {
						type: "email",
						name: "email",
						placeholder: "Type in your email address",
						required: !0,
						value: i,
						onChange: function(a) {
							return j(a.target.value)
						}
					}), (0, d.jsx)(c, {})]
				})
			}
		}
	},
	function(a) {
		a.O(0, [3025, 9774, 2888, 179], function() {
			var b;
			return a(a.s = 4786)
		}), _N_E = a.O()
	}
])