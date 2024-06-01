var ten4 = (() => {
  var Aa = Object.create;
  var ut = Object.defineProperty;
  var Oa = Object.getOwnPropertyDescriptor;
  var Da = Object.getOwnPropertyNames;
  var za = Object.getPrototypeOf,
    Ba = Object.prototype.hasOwnProperty;
  var _r = (e, t) => () => (
      t ||
        e(
          (t = {
            exports: {},
          }).exports,
          t
        ),
      t.exports
    ),
    Na = (e, t) => {
      for (var n in t)
        ut(e, n, {
          get: t[n],
          enumerable: !0,
        });
    },
    Ir = (e, t, n, r) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of Da(t))
          !Ba.call(e, i) &&
            i !== n &&
            ut(e, i, {
              get: () => t[i],
              enumerable: !(r = Oa(t, i)) || r.enumerable,
            });
      return e;
    };
  var Ar = (e, t, n) => (
      (n = e != null ? Aa(za(e)) : {}),
      Ir(
        t || !e || !e.__esModule
          ? ut(n, "default", {
              value: e,
              enumerable: !0,
            })
          : n,
        e
      )
    ),
    Ha = (e) =>
      Ir(
        ut({}, "__esModule", {
          value: !0,
        }),
        e
      );
  var Dr = _r((It, Or) => {
    (function (e, t) {
      typeof It == "object" && typeof Or < "u"
        ? t()
        : typeof define == "function" && define.amd
        ? define(t)
        : t();
    })(It, function () {
      "use strict";
      function e(n) {
        var r = !0,
          i = !1,
          a = null,
          c = {
            text: !0,
            search: !0,
            url: !0,
            tel: !0,
            email: !0,
            password: !0,
            number: !0,
            date: !0,
            month: !0,
            week: !0,
            time: !0,
            datetime: !0,
            "datetime-local": !0,
          };
        function u(m) {
          return !!(
            m &&
            m !== document &&
            m.nodeName !== "HTML" &&
            m.nodeName !== "BODY" &&
            "classList" in m &&
            "contains" in m.classList
          );
        }
        function o(m) {
          var $ = m.type,
            C = m.tagName;
          return !!(
            (C === "INPUT" && c[$] && !m.readOnly) ||
            (C === "TEXTAREA" && !m.readOnly) ||
            m.isContentEditable
          );
        }
        function d(m) {
          m.classList.contains("focus-visible") ||
            (m.classList.add("focus-visible"),
            m.setAttribute("data-focus-visible-added", ""));
        }
        function l(m) {
          !m.hasAttribute("data-focus-visible-added") ||
            (m.classList.remove("focus-visible"),
            m.removeAttribute("data-focus-visible-added"));
        }
        function s(m) {
          m.metaKey ||
            m.altKey ||
            m.ctrlKey ||
            (u(n.activeElement) && d(n.activeElement), (r = !0));
        }
        function f(m) {
          r = !1;
        }
        function v(m) {
          !u(m.target) || ((r || o(m.target)) && d(m.target));
        }
        function g(m) {
          !u(m.target) ||
            ((m.target.classList.contains("focus-visible") ||
              m.target.hasAttribute("data-focus-visible-added")) &&
              ((i = !0),
              window.clearTimeout(a),
              (a = window.setTimeout(function () {
                i = !1;
              }, 100)),
              l(m.target)));
        }
        function h(m) {
          document.visibilityState === "hidden" && (i && (r = !0), p());
        }
        function p() {
          document.addEventListener("mousemove", x),
            document.addEventListener("mousedown", x),
            document.addEventListener("mouseup", x),
            document.addEventListener("pointermove", x),
            document.addEventListener("pointerdown", x),
            document.addEventListener("pointerup", x),
            document.addEventListener("touchmove", x),
            document.addEventListener("touchstart", x),
            document.addEventListener("touchend", x);
        }
        function E() {
          document.removeEventListener("mousemove", x),
            document.removeEventListener("mousedown", x),
            document.removeEventListener("mouseup", x),
            document.removeEventListener("pointermove", x),
            document.removeEventListener("pointerdown", x),
            document.removeEventListener("pointerup", x),
            document.removeEventListener("touchmove", x),
            document.removeEventListener("touchstart", x),
            document.removeEventListener("touchend", x);
        }
        function x(m) {
          (m.target.nodeName && m.target.nodeName.toLowerCase() === "html") ||
            ((r = !1), E());
        }
        document.addEventListener("keydown", s, !0),
          document.addEventListener("mousedown", f, !0),
          document.addEventListener("pointerdown", f, !0),
          document.addEventListener("touchstart", f, !0),
          document.addEventListener("visibilitychange", h, !0),
          p(),
          n.addEventListener("focus", v, !0),
          n.addEventListener("blur", g, !0),
          n.nodeType === Node.DOCUMENT_FRAGMENT_NODE && n.host
            ? n.host.setAttribute("data-js-focus-visible", "")
            : n.nodeType === Node.DOCUMENT_NODE &&
              (document.documentElement.classList.add("js-focus-visible"),
              document.documentElement.setAttribute(
                "data-js-focus-visible",
                ""
              ));
      }
      if (typeof window < "u" && typeof document < "u") {
        window.applyFocusVisiblePolyfill = e;
        var t;
        try {
          t = new CustomEvent("focus-visible-polyfill-ready");
        } catch {
          (t = document.createEvent("CustomEvent")),
            t.initCustomEvent("focus-visible-polyfill-ready", !1, !1, {});
        }
        window.dispatchEvent(t);
      }
      typeof document < "u" && e(document);
    });
  });
  var ra = _r((pr, mr) => {
    (function (e, t) {
      typeof pr == "object" && typeof mr < "u"
        ? (mr.exports = t())
        : typeof define == "function" && define.amd
        ? define(t)
        : ((e = e || self).barba = t());
    })(pr, function () {
      function e(w, T) {
        for (var y = 0; y < T.length; y++) {
          var b = T[y];
          (b.enumerable = b.enumerable || !1),
            (b.configurable = !0),
            "value" in b && (b.writable = !0),
            Object.defineProperty(w, b.key, b);
        }
      }
      function t(w, T, y) {
        return T && e(w.prototype, T), y && e(w, y), w;
      }
      function n() {
        return (n =
          Object.assign ||
          function (w) {
            for (var T = 1; T < arguments.length; T++) {
              var y = arguments[T];
              for (var b in y)
                Object.prototype.hasOwnProperty.call(y, b) && (w[b] = y[b]);
            }
            return w;
          }).apply(this, arguments);
      }
      function r(w, T) {
        (w.prototype = Object.create(T.prototype)),
          (w.prototype.constructor = w),
          (w.__proto__ = T);
      }
      function i(w) {
        return (i = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (T) {
              return T.__proto__ || Object.getPrototypeOf(T);
            })(w);
      }
      function a(w, T) {
        return (a =
          Object.setPrototypeOf ||
          function (y, b) {
            return (y.__proto__ = b), y;
          })(w, T);
      }
      function c(w, T, y) {
        return (c = (function () {
          if (
            typeof Reflect > "u" ||
            !Reflect.construct ||
            Reflect.construct.sham
          )
            return !1;
          if (typeof Proxy == "function") return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch {
            return !1;
          }
        })()
          ? Reflect.construct
          : function (b, M, A) {
              var O = [null];
              O.push.apply(O, M);
              var G = new (Function.bind.apply(b, O))();
              return A && a(G, A.prototype), G;
            }).apply(null, arguments);
      }
      function u(w) {
        var T = typeof Map == "function" ? new Map() : void 0;
        return (u = function (y) {
          if (
            y === null ||
            Function.toString.call(y).indexOf("[native code]") === -1
          )
            return y;
          if (typeof y != "function")
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if (T !== void 0) {
            if (T.has(y)) return T.get(y);
            T.set(y, b);
          }
          function b() {
            return c(y, arguments, i(this).constructor);
          }
          return (
            (b.prototype = Object.create(y.prototype, {
              constructor: {
                value: b,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            a(b, y)
          );
        })(w);
      }
      function o(w, T) {
        try {
          var y = w();
        } catch (b) {
          return T(b);
        }
        return y && y.then ? y.then(void 0, T) : y;
      }
      typeof Symbol < "u" &&
        (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
        typeof Symbol < "u" &&
          (Symbol.asyncIterator ||
            (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
      var d,
        l = "2.9.7",
        s = function () {};
      (function (w) {
        (w[(w.off = 0)] = "off"),
          (w[(w.error = 1)] = "error"),
          (w[(w.warning = 2)] = "warning"),
          (w[(w.info = 3)] = "info"),
          (w[(w.debug = 4)] = "debug");
      })(d || (d = {}));
      var f = d.off,
        v = (function () {
          function w(y) {
            this.t = y;
          }
          (w.getLevel = function () {
            return f;
          }),
            (w.setLevel = function (y) {
              return (f = d[y]);
            });
          var T = w.prototype;
          return (
            (T.error = function () {
              for (
                var y = arguments.length, b = new Array(y), M = 0;
                M < y;
                M++
              )
                b[M] = arguments[M];
              this.i(console.error, d.error, b);
            }),
            (T.warn = function () {
              for (
                var y = arguments.length, b = new Array(y), M = 0;
                M < y;
                M++
              )
                b[M] = arguments[M];
              this.i(console.warn, d.warning, b);
            }),
            (T.info = function () {
              for (
                var y = arguments.length, b = new Array(y), M = 0;
                M < y;
                M++
              )
                b[M] = arguments[M];
              this.i(console.info, d.info, b);
            }),
            (T.debug = function () {
              for (
                var y = arguments.length, b = new Array(y), M = 0;
                M < y;
                M++
              )
                b[M] = arguments[M];
              this.i(console.log, d.debug, b);
            }),
            (T.i = function (y, b, M) {
              b <= w.getLevel() &&
                y.apply(console, ["[" + this.t + "] "].concat(M));
            }),
            w
          );
        })(),
        g = S,
        h = I,
        p = C,
        E = _,
        x = k,
        m = "/",
        $ = new RegExp(
          [
            "(\\\\.)",
            "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?",
          ].join("|"),
          "g"
        );
      function C(w, T) {
        for (
          var y,
            b = [],
            M = 0,
            A = 0,
            O = "",
            G = (T && T.delimiter) || m,
            X = (T && T.whitelist) || void 0,
            V = !1;
          (y = $.exec(w)) !== null;

        ) {
          var F = y[0],
            re = y[1],
            Z = y.index;
          if (((O += w.slice(A, Z)), (A = Z + F.length), re))
            (O += re[1]), (V = !0);
          else {
            var ne = "",
              le = y[2],
              ge = y[3],
              ze = y[4],
              Ce = y[5];
            if (!V && O.length) {
              var qe = O.length - 1,
                Re = O[qe];
              (!X || X.indexOf(Re) > -1) && ((ne = Re), (O = O.slice(0, qe)));
            }
            O && (b.push(O), (O = ""), (V = !1));
            var we = ge || ze,
              xe = ne || G;
            b.push({
              name: le || M++,
              prefix: ne,
              delimiter: xe,
              optional: Ce === "?" || Ce === "*",
              repeat: Ce === "+" || Ce === "*",
              pattern: we ? H(we) : "[^" + D(xe === G ? xe : xe + G) + "]+?",
            });
          }
        }
        return (O || A < w.length) && b.push(O + w.substr(A)), b;
      }
      function I(w, T) {
        return function (y, b) {
          var M = w.exec(y);
          if (!M) return !1;
          for (
            var A = M[0],
              O = M.index,
              G = {},
              X = (b && b.decode) || decodeURIComponent,
              V = 1;
            V < M.length;
            V++
          )
            if (M[V] !== void 0) {
              var F = T[V - 1];
              G[F.name] = F.repeat
                ? M[V].split(F.delimiter).map(function (re) {
                    return X(re, F);
                  })
                : X(M[V], F);
            }
          return {
            path: A,
            index: O,
            params: G,
          };
        };
      }
      function _(w, T) {
        for (var y = new Array(w.length), b = 0; b < w.length; b++)
          typeof w[b] == "object" &&
            (y[b] = new RegExp("^(?:" + w[b].pattern + ")$", z(T)));
        return function (M, A) {
          for (
            var O = "",
              G = (A && A.encode) || encodeURIComponent,
              X = !A || A.validate !== !1,
              V = 0;
            V < w.length;
            V++
          ) {
            var F = w[V];
            if (typeof F != "string") {
              var re,
                Z = M ? M[F.name] : void 0;
              if (Array.isArray(Z)) {
                if (!F.repeat)
                  throw new TypeError(
                    'Expected "' + F.name + '" to not repeat, but got array'
                  );
                if (Z.length === 0) {
                  if (F.optional) continue;
                  throw new TypeError(
                    'Expected "' + F.name + '" to not be empty'
                  );
                }
                for (var ne = 0; ne < Z.length; ne++) {
                  if (((re = G(Z[ne], F)), X && !y[V].test(re)))
                    throw new TypeError(
                      'Expected all "' +
                        F.name +
                        '" to match "' +
                        F.pattern +
                        '"'
                    );
                  O += (ne === 0 ? F.prefix : F.delimiter) + re;
                }
              } else if (
                typeof Z != "string" &&
                typeof Z != "number" &&
                typeof Z != "boolean"
              ) {
                if (!F.optional)
                  throw new TypeError(
                    'Expected "' +
                      F.name +
                      '" to be ' +
                      (F.repeat ? "an array" : "a string")
                  );
              } else {
                if (((re = G(String(Z), F)), X && !y[V].test(re)))
                  throw new TypeError(
                    'Expected "' +
                      F.name +
                      '" to match "' +
                      F.pattern +
                      '", but got "' +
                      re +
                      '"'
                  );
                O += F.prefix + re;
              }
            } else O += F;
          }
          return O;
        };
      }
      function D(w) {
        return w.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      }
      function H(w) {
        return w.replace(/([=!:$/()])/g, "\\$1");
      }
      function z(w) {
        return w && w.sensitive ? "" : "i";
      }
      function k(w, T, y) {
        for (
          var b = (y = y || {}).strict,
            M = y.start !== !1,
            A = y.end !== !1,
            O = y.delimiter || m,
            G = []
              .concat(y.endsWith || [])
              .map(D)
              .concat("$")
              .join("|"),
            X = M ? "^" : "",
            V = 0;
          V < w.length;
          V++
        ) {
          var F = w[V];
          if (typeof F == "string") X += D(F);
          else {
            var re = F.repeat
              ? "(?:" +
                F.pattern +
                ")(?:" +
                D(F.delimiter) +
                "(?:" +
                F.pattern +
                "))*"
              : F.pattern;
            T && T.push(F),
              (X += F.optional
                ? F.prefix
                  ? "(?:" + D(F.prefix) + "(" + re + "))?"
                  : "(" + re + ")?"
                : D(F.prefix) + "(" + re + ")");
          }
        }
        if (A)
          b || (X += "(?:" + D(O) + ")?"),
            (X += G === "$" ? "$" : "(?=" + G + ")");
        else {
          var Z = w[w.length - 1],
            ne = typeof Z == "string" ? Z[Z.length - 1] === O : Z === void 0;
          b || (X += "(?:" + D(O) + "(?=" + G + "))?"),
            ne || (X += "(?=" + D(O) + "|" + G + ")");
        }
        return new RegExp(X, z(y));
      }
      function S(w, T, y) {
        return w instanceof RegExp
          ? (function (b, M) {
              if (!M) return b;
              var A = b.source.match(/\((?!\?)/g);
              if (A)
                for (var O = 0; O < A.length; O++)
                  M.push({
                    name: O,
                    prefix: null,
                    delimiter: null,
                    optional: !1,
                    repeat: !1,
                    pattern: null,
                  });
              return b;
            })(w, T)
          : Array.isArray(w)
          ? (function (b, M, A) {
              for (var O = [], G = 0; G < b.length; G++)
                O.push(S(b[G], M, A).source);
              return new RegExp("(?:" + O.join("|") + ")", z(A));
            })(w, T, y)
          : (function (b, M, A) {
              return k(C(b, A), M, A);
            })(w, T, y);
      }
      (g.match = function (w, T) {
        var y = [];
        return I(S(w, y, T), y);
      }),
        (g.regexpToFunction = h),
        (g.parse = p),
        (g.compile = function (w, T) {
          return _(C(w, T), T);
        }),
        (g.tokensToFunction = E),
        (g.tokensToRegExp = x);
      var L = {
          container: "container",
          history: "history",
          namespace: "namespace",
          prefix: "data-barba",
          prevent: "prevent",
          wrapper: "wrapper",
        },
        q = new ((function () {
          function w() {
            (this.o = L), (this.u = new DOMParser());
          }
          var T = w.prototype;
          return (
            (T.toString = function (y) {
              return y.outerHTML;
            }),
            (T.toDocument = function (y) {
              return this.u.parseFromString(y, "text/html");
            }),
            (T.toElement = function (y) {
              var b = document.createElement("div");
              return (b.innerHTML = y), b;
            }),
            (T.getHtml = function (y) {
              return (
                y === void 0 && (y = document), this.toString(y.documentElement)
              );
            }),
            (T.getWrapper = function (y) {
              return (
                y === void 0 && (y = document),
                y.querySelector(
                  "[" + this.o.prefix + '="' + this.o.wrapper + '"]'
                )
              );
            }),
            (T.getContainer = function (y) {
              return (
                y === void 0 && (y = document),
                y.querySelector(
                  "[" + this.o.prefix + '="' + this.o.container + '"]'
                )
              );
            }),
            (T.removeContainer = function (y) {
              document.body.contains(y) && y.parentNode.removeChild(y);
            }),
            (T.addContainer = function (y, b) {
              var M = this.getContainer();
              M ? this.s(y, M) : b.appendChild(y);
            }),
            (T.getNamespace = function (y) {
              y === void 0 && (y = document);
              var b = y.querySelector(
                "[" + this.o.prefix + "-" + this.o.namespace + "]"
              );
              return b
                ? b.getAttribute(this.o.prefix + "-" + this.o.namespace)
                : null;
            }),
            (T.getHref = function (y) {
              if (y.tagName && y.tagName.toLowerCase() === "a") {
                if (typeof y.href == "string") return y.href;
                var b = y.getAttribute("href") || y.getAttribute("xlink:href");
                if (b) return this.resolveUrl(b.baseVal || b);
              }
              return null;
            }),
            (T.resolveUrl = function () {
              for (
                var y = arguments.length, b = new Array(y), M = 0;
                M < y;
                M++
              )
                b[M] = arguments[M];
              var A = b.length;
              if (A === 0)
                throw new Error(
                  "resolveUrl requires at least one argument; got none."
                );
              var O = document.createElement("base");
              if (((O.href = arguments[0]), A === 1)) return O.href;
              var G = document.getElementsByTagName("head")[0];
              G.insertBefore(O, G.firstChild);
              for (var X, V = document.createElement("a"), F = 1; F < A; F++)
                (V.href = arguments[F]), (O.href = X = V.href);
              return G.removeChild(O), X;
            }),
            (T.s = function (y, b) {
              b.parentNode.insertBefore(y, b.nextSibling);
            }),
            w
          );
        })())(),
        j = new ((function () {
          function w() {
            (this.h = []), (this.v = -1);
          }
          var T = w.prototype;
          return (
            (T.init = function (y, b) {
              this.l = "barba";
              var M = {
                ns: b,
                scroll: {
                  x: window.scrollX,
                  y: window.scrollY,
                },
                url: y,
              };
              this.h.push(M), (this.v = 0);
              var A = {
                from: this.l,
                index: 0,
                states: [].concat(this.h),
              };
              window.history && window.history.replaceState(A, "", y);
            }),
            (T.change = function (y, b, M) {
              if (M && M.state) {
                var A = M.state,
                  O = A.index;
                (b = this.m(this.v - O)), this.replace(A.states), (this.v = O);
              } else this.add(y, b);
              return b;
            }),
            (T.add = function (y, b) {
              var M = this.size,
                A = this.p(b),
                O = {
                  ns: "tmp",
                  scroll: {
                    x: window.scrollX,
                    y: window.scrollY,
                  },
                  url: y,
                };
              this.h.push(O), (this.v = M);
              var G = {
                from: this.l,
                index: M,
                states: [].concat(this.h),
              };
              switch (A) {
                case "push":
                  window.history && window.history.pushState(G, "", y);
                  break;
                case "replace":
                  window.history && window.history.replaceState(G, "", y);
              }
            }),
            (T.update = function (y, b) {
              var M = b || this.v,
                A = n({}, this.get(M), {}, y);
              this.set(M, A);
            }),
            (T.remove = function (y) {
              y ? this.h.splice(y, 1) : this.h.pop(), this.v--;
            }),
            (T.clear = function () {
              (this.h = []), (this.v = -1);
            }),
            (T.replace = function (y) {
              this.h = y;
            }),
            (T.get = function (y) {
              return this.h[y];
            }),
            (T.set = function (y, b) {
              return (this.h[y] = b);
            }),
            (T.p = function (y) {
              var b = "push",
                M = y,
                A = L.prefix + "-" + L.history;
              return (
                M.hasAttribute && M.hasAttribute(A) && (b = M.getAttribute(A)),
                b
              );
            }),
            (T.m = function (y) {
              return Math.abs(y) > 1
                ? y > 0
                  ? "forward"
                  : "back"
                : y === 0
                ? "popstate"
                : y > 0
                ? "back"
                : "forward";
            }),
            t(w, [
              {
                key: "current",
                get: function () {
                  return this.h[this.v];
                },
              },
              {
                key: "state",
                get: function () {
                  return this.h[this.h.length - 1];
                },
              },
              {
                key: "previous",
                get: function () {
                  return this.v < 1 ? null : this.h[this.v - 1];
                },
              },
              {
                key: "size",
                get: function () {
                  return this.h.length;
                },
              },
            ]),
            w
          );
        })())(),
        P = function (w, T) {
          try {
            var y = (function () {
              if (!T.next.html)
                return Promise.resolve(w).then(function (b) {
                  var M = T.next;
                  if (b) {
                    var A = q.toElement(b);
                    (M.namespace = q.getNamespace(A)),
                      (M.container = q.getContainer(A)),
                      (M.html = b),
                      j.update({
                        ns: M.namespace,
                      });
                    var O = q.toDocument(b);
                    document.title = O.title;
                  }
                });
            })();
            return Promise.resolve(
              y && y.then ? y.then(function () {}) : void 0
            );
          } catch (b) {
            return Promise.reject(b);
          }
        },
        N = g,
        B = {
          __proto__: null,
          update: P,
          nextTick: function () {
            return new Promise(function (w) {
              window.requestAnimationFrame(w);
            });
          },
          pathToRegexp: N,
        },
        W = function () {
          return window.location.origin;
        },
        Y = function (w) {
          return w === void 0 && (w = window.location.href), ae(w).port;
        },
        ae = function (w) {
          var T,
            y = w.match(/:\d+/);
          if (y === null)
            /^http/.test(w) && (T = 80), /^https/.test(w) && (T = 443);
          else {
            var b = y[0].substring(1);
            T = parseInt(b, 10);
          }
          var M,
            A = w.replace(W(), ""),
            O = {},
            G = A.indexOf("#");
          G >= 0 && ((M = A.slice(G + 1)), (A = A.slice(0, G)));
          var X = A.indexOf("?");
          return (
            X >= 0 && ((O = ve(A.slice(X + 1))), (A = A.slice(0, X))),
            {
              hash: M,
              path: A,
              port: T,
              query: O,
            }
          );
        },
        ve = function (w) {
          return w.split("&").reduce(function (T, y) {
            var b = y.split("=");
            return (T[b[0]] = b[1]), T;
          }, {});
        },
        Se = function (w) {
          return (
            w === void 0 && (w = window.location.href),
            w.replace(/(\/#.*|\/|#.*)$/, "")
          );
        },
        me = {
          __proto__: null,
          getHref: function () {
            return window.location.href;
          },
          getOrigin: W,
          getPort: Y,
          getPath: function (w) {
            return w === void 0 && (w = window.location.href), ae(w).path;
          },
          parse: ae,
          parseQuery: ve,
          clean: Se,
        };
      function de(w, T, y) {
        return (
          T === void 0 && (T = 2e3),
          new Promise(function (b, M) {
            var A = new XMLHttpRequest();
            (A.onreadystatechange = function () {
              if (A.readyState === XMLHttpRequest.DONE) {
                if (A.status === 200) b(A.responseText);
                else if (A.status) {
                  var O = {
                    status: A.status,
                    statusText: A.statusText,
                  };
                  y(w, O), M(O);
                }
              }
            }),
              (A.ontimeout = function () {
                var O = new Error("Timeout error [" + T + "]");
                y(w, O), M(O);
              }),
              (A.onerror = function () {
                var O = new Error("Fetch error");
                y(w, O), M(O);
              }),
              A.open("GET", w),
              (A.timeout = T),
              A.setRequestHeader(
                "Accept",
                "text/html,application/xhtml+xml,application/xml"
              ),
              A.setRequestHeader("x-barba", "yes"),
              A.send();
          })
        );
      }
      var oe = function (w) {
        return (
          !!w &&
          (typeof w == "object" || typeof w == "function") &&
          typeof w.then == "function"
        );
      };
      function Q(w, T) {
        return (
          T === void 0 && (T = {}),
          function () {
            for (var y = arguments.length, b = new Array(y), M = 0; M < y; M++)
              b[M] = arguments[M];
            var A = !1,
              O = new Promise(function (G, X) {
                T.async = function () {
                  return (
                    (A = !0),
                    function (F, re) {
                      F ? X(F) : G(re);
                    }
                  );
                };
                var V = w.apply(T, b);
                A || (oe(V) ? V.then(G, X) : G(V));
              });
            return O;
          }
        );
      }
      var ee = new ((function (w) {
          function T() {
            var b;
            return (
              ((b = w.call(this) || this).logger = new v("@barba/core")),
              (b.all = [
                "ready",
                "page",
                "reset",
                "currentAdded",
                "currentRemoved",
                "nextAdded",
                "nextRemoved",
                "beforeOnce",
                "once",
                "afterOnce",
                "before",
                "beforeLeave",
                "leave",
                "afterLeave",
                "beforeEnter",
                "enter",
                "afterEnter",
                "after",
              ]),
              (b.registered = new Map()),
              b.init(),
              b
            );
          }
          r(T, w);
          var y = T.prototype;
          return (
            (y.init = function () {
              var b = this;
              this.registered.clear(),
                this.all.forEach(function (M) {
                  b[M] ||
                    (b[M] = function (A, O) {
                      b.registered.has(M) || b.registered.set(M, new Set()),
                        b.registered.get(M).add({
                          ctx: O || {},
                          fn: A,
                        });
                    });
                });
            }),
            (y.do = function (b) {
              for (
                var M = this,
                  A = arguments.length,
                  O = new Array(A > 1 ? A - 1 : 0),
                  G = 1;
                G < A;
                G++
              )
                O[G - 1] = arguments[G];
              if (this.registered.has(b)) {
                var X = Promise.resolve();
                return (
                  this.registered.get(b).forEach(function (V) {
                    X = X.then(function () {
                      return Q(V.fn, V.ctx).apply(void 0, O);
                    });
                  }),
                  X.catch(function (V) {
                    M.logger.debug("Hook error [" + b + "]"), M.logger.error(V);
                  })
                );
              }
              return Promise.resolve();
            }),
            (y.clear = function () {
              var b = this;
              this.all.forEach(function (M) {
                delete b[M];
              }),
                this.init();
            }),
            (y.help = function () {
              this.logger.info("Available hooks: " + this.all.join(","));
              var b = [];
              this.registered.forEach(function (M, A) {
                return b.push(A);
              }),
                this.logger.info("Registered hooks: " + b.join(","));
            }),
            T
          );
        })(s))(),
        ue = (function () {
          function w(T) {
            if (((this.P = []), typeof T == "boolean")) this.g = T;
            else {
              var y = Array.isArray(T) ? T : [T];
              this.P = y.map(function (b) {
                return N(b);
              });
            }
          }
          return (
            (w.prototype.checkHref = function (T) {
              if (typeof this.g == "boolean") return this.g;
              var y = ae(T).path;
              return this.P.some(function (b) {
                return b.exec(y) !== null;
              });
            }),
            w
          );
        })(),
        K = (function (w) {
          function T(b) {
            var M;
            return ((M = w.call(this, b) || this).k = new Map()), M;
          }
          r(T, w);
          var y = T.prototype;
          return (
            (y.set = function (b, M, A) {
              return (
                this.k.set(b, {
                  action: A,
                  request: M,
                }),
                {
                  action: A,
                  request: M,
                }
              );
            }),
            (y.get = function (b) {
              return this.k.get(b);
            }),
            (y.getRequest = function (b) {
              return this.k.get(b).request;
            }),
            (y.getAction = function (b) {
              return this.k.get(b).action;
            }),
            (y.has = function (b) {
              return !this.checkHref(b) && this.k.has(b);
            }),
            (y.delete = function (b) {
              return this.k.delete(b);
            }),
            (y.update = function (b, M) {
              var A = n({}, this.k.get(b), {}, M);
              return this.k.set(b, A), A;
            }),
            T
          );
        })(ue),
        ce = function () {
          return !window.history.pushState;
        },
        ye = function (w) {
          return !w.el || !w.href;
        },
        se = function (w) {
          var T = w.event;
          return (
            T.which > 1 || T.metaKey || T.ctrlKey || T.shiftKey || T.altKey
          );
        },
        be = function (w) {
          var T = w.el;
          return T.hasAttribute("target") && T.target === "_blank";
        },
        Pe = function (w) {
          var T = w.el;
          return (
            (T.protocol !== void 0 &&
              window.location.protocol !== T.protocol) ||
            (T.hostname !== void 0 && window.location.hostname !== T.hostname)
          );
        },
        Xe = function (w) {
          var T = w.el;
          return T.port !== void 0 && Y() !== Y(T.href);
        },
        dt = function (w) {
          var T = w.el;
          return (
            T.getAttribute && typeof T.getAttribute("download") == "string"
          );
        },
        Mt = function (w) {
          return w.el.hasAttribute(L.prefix + "-" + L.prevent);
        },
        kt = function (w) {
          return Boolean(
            w.el.closest("[" + L.prefix + "-" + L.prevent + '="all"]')
          );
        },
        Lt = function (w) {
          var T = w.href;
          return Se(T) === Se() && Y(T) === Y();
        },
        La = (function (w) {
          function T(b) {
            var M;
            return (
              ((M = w.call(this, b) || this).suite = []),
              (M.tests = new Map()),
              M.init(),
              M
            );
          }
          r(T, w);
          var y = T.prototype;
          return (
            (y.init = function () {
              this.add("pushState", ce),
                this.add("exists", ye),
                this.add("newTab", se),
                this.add("blank", be),
                this.add("corsDomain", Pe),
                this.add("corsPort", Xe),
                this.add("download", dt),
                this.add("preventSelf", Mt),
                this.add("preventAll", kt),
                this.add("sameUrl", Lt, !1);
            }),
            (y.add = function (b, M, A) {
              A === void 0 && (A = !0),
                this.tests.set(b, M),
                A && this.suite.push(b);
            }),
            (y.run = function (b, M, A, O) {
              return this.tests.get(b)({
                el: M,
                event: A,
                href: O,
              });
            }),
            (y.checkLink = function (b, M, A) {
              var O = this;
              return this.suite.some(function (G) {
                return O.run(G, b, M, A);
              });
            }),
            T
          );
        })(ue),
        Pt = (function (w) {
          function T(y, b) {
            var M;
            b === void 0 && (b = "Barba error");
            for (
              var A = arguments.length, O = new Array(A > 2 ? A - 2 : 0), G = 2;
              G < A;
              G++
            )
              O[G - 2] = arguments[G];
            return (
              ((M = w.call.apply(w, [this].concat(O)) || this).error = y),
              (M.label = b),
              Error.captureStackTrace &&
                Error.captureStackTrace(
                  (function (X) {
                    if (X === void 0)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return X;
                  })(M),
                  T
                ),
              (M.name = "BarbaError"),
              M
            );
          }
          return r(T, w), T;
        })(u(Error)),
        Pa = (function () {
          function w(y) {
            y === void 0 && (y = []),
              (this.logger = new v("@barba/core")),
              (this.all = []),
              (this.page = []),
              (this.once = []),
              (this.A = [
                {
                  name: "namespace",
                  type: "strings",
                },
                {
                  name: "custom",
                  type: "function",
                },
              ]),
              y && (this.all = this.all.concat(y)),
              this.update();
          }
          var T = w.prototype;
          return (
            (T.add = function (y, b) {
              switch (y) {
                case "rule":
                  this.A.splice(b.position || 0, 0, b.value);
                  break;
                case "transition":
                default:
                  this.all.push(b);
              }
              this.update();
            }),
            (T.resolve = function (y, b) {
              var M = this;
              b === void 0 && (b = {});
              var A = b.once ? this.once : this.page;
              A = A.filter(
                b.self
                  ? function (Z) {
                      return Z.name && Z.name === "self";
                    }
                  : function (Z) {
                      return !Z.name || Z.name !== "self";
                    }
              );
              var O = new Map(),
                G = A.find(function (Z) {
                  var ne = !0,
                    le = {};
                  return (
                    !(!b.self || Z.name !== "self") ||
                    (M.A.reverse().forEach(function (ge) {
                      ne &&
                        ((ne = M.R(Z, ge, y, le)),
                        Z.from &&
                          Z.to &&
                          (ne =
                            M.R(Z, ge, y, le, "from") &&
                            M.R(Z, ge, y, le, "to")),
                        Z.from && !Z.to && (ne = M.R(Z, ge, y, le, "from")),
                        !Z.from && Z.to && (ne = M.R(Z, ge, y, le, "to")));
                    }),
                    O.set(Z, le),
                    ne)
                  );
                }),
                X = O.get(G),
                V = [];
              if (
                (V.push(b.once ? "once" : "page"), b.self && V.push("self"), X)
              ) {
                var F,
                  re = [G];
                Object.keys(X).length > 0 && re.push(X),
                  (F = this.logger).info.apply(
                    F,
                    ["Transition found [" + V.join(",") + "]"].concat(re)
                  );
              } else
                this.logger.info("No transition found [" + V.join(",") + "]");
              return G;
            }),
            (T.update = function () {
              var y = this;
              (this.all = this.all
                .map(function (b) {
                  return y.T(b);
                })
                .sort(function (b, M) {
                  return b.priority - M.priority;
                })
                .reverse()
                .map(function (b) {
                  return delete b.priority, b;
                })),
                (this.page = this.all.filter(function (b) {
                  return b.leave !== void 0 || b.enter !== void 0;
                })),
                (this.once = this.all.filter(function (b) {
                  return b.once !== void 0;
                }));
            }),
            (T.R = function (y, b, M, A, O) {
              var G = !0,
                X = !1,
                V = y,
                F = b.name,
                re = F,
                Z = F,
                ne = F,
                le = O ? V[O] : V,
                ge = O === "to" ? M.next : M.current;
              if (O ? le && le[F] : le[F]) {
                switch (b.type) {
                  case "strings":
                  default:
                    var ze = Array.isArray(le[re]) ? le[re] : [le[re]];
                    ge[re] && ze.indexOf(ge[re]) !== -1 && (X = !0),
                      ze.indexOf(ge[re]) === -1 && (G = !1);
                    break;
                  case "object":
                    var Ce = Array.isArray(le[Z]) ? le[Z] : [le[Z]];
                    ge[Z]
                      ? (ge[Z].name &&
                          Ce.indexOf(ge[Z].name) !== -1 &&
                          (X = !0),
                        Ce.indexOf(ge[Z].name) === -1 && (G = !1))
                      : (G = !1);
                    break;
                  case "function":
                    le[ne](M) ? (X = !0) : (G = !1);
                }
                X &&
                  (O
                    ? ((A[O] = A[O] || {}), (A[O][F] = V[O][F]))
                    : (A[F] = V[F]));
              }
              return G;
            }),
            (T.O = function (y, b, M) {
              var A = 0;
              return (
                (y[b] || (y.from && y.from[b]) || (y.to && y.to[b])) &&
                  ((A += Math.pow(10, M)),
                  y.from && y.from[b] && (A += 1),
                  y.to && y.to[b] && (A += 2)),
                A
              );
            }),
            (T.T = function (y) {
              var b = this;
              y.priority = 0;
              var M = 0;
              return (
                this.A.forEach(function (A, O) {
                  M += b.O(y, A.name, O + 1);
                }),
                (y.priority = M),
                y
              );
            }),
            w
          );
        })(),
        wa = (function () {
          function w(y) {
            y === void 0 && (y = []),
              (this.logger = new v("@barba/core")),
              (this.S = !1),
              (this.store = new Pa(y));
          }
          var T = w.prototype;
          return (
            (T.get = function (y, b) {
              return this.store.resolve(y, b);
            }),
            (T.doOnce = function (y) {
              var b = y.data,
                M = y.transition;
              try {
                var A = function () {
                    O.S = !1;
                  },
                  O = this,
                  G = M || {};
                O.S = !0;
                var X = o(
                  function () {
                    return Promise.resolve(O.j("beforeOnce", b, G)).then(
                      function () {
                        return Promise.resolve(O.once(b, G)).then(function () {
                          return Promise.resolve(O.j("afterOnce", b, G)).then(
                            function () {}
                          );
                        });
                      }
                    );
                  },
                  function (V) {
                    (O.S = !1),
                      O.logger.debug("Transition error [before/after/once]"),
                      O.logger.error(V);
                  }
                );
                return Promise.resolve(X && X.then ? X.then(A) : A());
              } catch (V) {
                return Promise.reject(V);
              }
            }),
            (T.doPage = function (y) {
              var b = y.data,
                M = y.transition,
                A = y.page,
                O = y.wrapper;
              try {
                var G = function (ne) {
                    if (X) return ne;
                    V.S = !1;
                  },
                  X = !1,
                  V = this,
                  F = M || {},
                  re = F.sync === !0 || !1;
                V.S = !0;
                var Z = o(
                  function () {
                    function ne() {
                      return Promise.resolve(V.j("before", b, F)).then(
                        function () {
                          var ge = !1;
                          function ze(qe) {
                            return ge
                              ? qe
                              : Promise.resolve(V.remove(b)).then(function () {
                                  return Promise.resolve(
                                    V.j("after", b, F)
                                  ).then(function () {});
                                });
                          }
                          var Ce = (function () {
                            if (re)
                              return o(
                                function () {
                                  return Promise.resolve(V.add(b, O)).then(
                                    function () {
                                      return Promise.resolve(
                                        V.j("beforeLeave", b, F)
                                      ).then(function () {
                                        return Promise.resolve(
                                          V.j("beforeEnter", b, F)
                                        ).then(function () {
                                          return Promise.resolve(
                                            Promise.all([
                                              V.leave(b, F),
                                              V.enter(b, F),
                                            ])
                                          ).then(function () {
                                            return Promise.resolve(
                                              V.j("afterLeave", b, F)
                                            ).then(function () {
                                              return Promise.resolve(
                                                V.j("afterEnter", b, F)
                                              ).then(function () {});
                                            });
                                          });
                                        });
                                      });
                                    }
                                  );
                                },
                                function (xe) {
                                  if (V.M(xe))
                                    throw new Pt(xe, "Transition error [sync]");
                                }
                              );
                            var qe = function (xe) {
                                return ge
                                  ? xe
                                  : o(
                                      function () {
                                        var je = (function () {
                                          if (Re !== !1)
                                            return Promise.resolve(
                                              V.add(b, O)
                                            ).then(function () {
                                              return Promise.resolve(
                                                V.j("beforeEnter", b, F)
                                              ).then(function () {
                                                return Promise.resolve(
                                                  V.enter(b, F, Re)
                                                ).then(function () {
                                                  return Promise.resolve(
                                                    V.j("afterEnter", b, F)
                                                  ).then(function () {});
                                                });
                                              });
                                            });
                                        })();
                                        if (je && je.then)
                                          return je.then(function () {});
                                      },
                                      function (je) {
                                        if (V.M(je))
                                          throw new Pt(
                                            je,
                                            "Transition error [before/after/enter]"
                                          );
                                      }
                                    );
                              },
                              Re = !1,
                              we = o(
                                function () {
                                  return Promise.resolve(
                                    V.j("beforeLeave", b, F)
                                  ).then(function () {
                                    return Promise.resolve(
                                      Promise.all([
                                        V.leave(b, F),
                                        P(A, b),
                                      ]).then(function (xe) {
                                        return xe[0];
                                      })
                                    ).then(function (xe) {
                                      return (
                                        (Re = xe),
                                        Promise.resolve(
                                          V.j("afterLeave", b, F)
                                        ).then(function () {})
                                      );
                                    });
                                  });
                                },
                                function (xe) {
                                  if (V.M(xe))
                                    throw new Pt(
                                      xe,
                                      "Transition error [before/after/leave]"
                                    );
                                }
                              );
                            return we && we.then ? we.then(qe) : qe(we);
                          })();
                          return Ce && Ce.then ? Ce.then(ze) : ze(Ce);
                        }
                      );
                    }
                    var le = (function () {
                      if (re)
                        return Promise.resolve(P(A, b)).then(function () {});
                    })();
                    return le && le.then ? le.then(ne) : ne();
                  },
                  function (ne) {
                    throw (
                      ((V.S = !1),
                      ne.name && ne.name === "BarbaError"
                        ? (V.logger.debug(ne.label),
                          V.logger.error(ne.error),
                          ne)
                        : (V.logger.debug("Transition error [page]"),
                          V.logger.error(ne),
                          ne))
                    );
                  }
                );
                return Promise.resolve(Z && Z.then ? Z.then(G) : G(Z));
              } catch (ne) {
                return Promise.reject(ne);
              }
            }),
            (T.once = function (y, b) {
              try {
                return Promise.resolve(ee.do("once", y, b)).then(function () {
                  return b.once ? Q(b.once, b)(y) : Promise.resolve();
                });
              } catch (M) {
                return Promise.reject(M);
              }
            }),
            (T.leave = function (y, b) {
              try {
                return Promise.resolve(ee.do("leave", y, b)).then(function () {
                  return b.leave ? Q(b.leave, b)(y) : Promise.resolve();
                });
              } catch (M) {
                return Promise.reject(M);
              }
            }),
            (T.enter = function (y, b, M) {
              try {
                return Promise.resolve(ee.do("enter", y, b)).then(function () {
                  return b.enter ? Q(b.enter, b)(y, M) : Promise.resolve();
                });
              } catch (A) {
                return Promise.reject(A);
              }
            }),
            (T.add = function (y, b) {
              try {
                return (
                  q.addContainer(y.next.container, b),
                  ee.do("nextAdded", y),
                  Promise.resolve()
                );
              } catch (M) {
                return Promise.reject(M);
              }
            }),
            (T.remove = function (y) {
              try {
                return (
                  q.removeContainer(y.current.container),
                  ee.do("currentRemoved", y),
                  Promise.resolve()
                );
              } catch (b) {
                return Promise.reject(b);
              }
            }),
            (T.M = function (y) {
              return y.message
                ? !/Timeout error|Fetch error/.test(y.message)
                : !y.status;
            }),
            (T.j = function (y, b, M) {
              try {
                return Promise.resolve(ee.do(y, b, M)).then(function () {
                  return M[y] ? Q(M[y], M)(b) : Promise.resolve();
                });
              } catch (A) {
                return Promise.reject(A);
              }
            }),
            t(w, [
              {
                key: "isRunning",
                get: function () {
                  return this.S;
                },
                set: function (y) {
                  this.S = y;
                },
              },
              {
                key: "hasOnce",
                get: function () {
                  return this.store.once.length > 0;
                },
              },
              {
                key: "hasSelf",
                get: function () {
                  return this.store.all.some(function (y) {
                    return y.name === "self";
                  });
                },
              },
              {
                key: "shouldWait",
                get: function () {
                  return this.store.all.some(function (y) {
                    return (y.to && !y.to.route) || y.sync;
                  });
                },
              },
            ]),
            w
          );
        })(),
        _a = (function () {
          function w(T) {
            var y = this;
            (this.names = [
              "beforeLeave",
              "afterLeave",
              "beforeEnter",
              "afterEnter",
            ]),
              (this.byNamespace = new Map()),
              T.length !== 0 &&
                (T.forEach(function (b) {
                  y.byNamespace.set(b.namespace, b);
                }),
                this.names.forEach(function (b) {
                  ee[b](y.L(b));
                }));
          }
          return (
            (w.prototype.L = function (T) {
              var y = this;
              return function (b) {
                var M = T.match(/enter/i) ? b.next : b.current,
                  A = y.byNamespace.get(M.namespace);
                return A && A[T] ? Q(A[T], A)(b) : Promise.resolve();
              };
            }),
            w
          );
        })();
      Element.prototype.matches ||
        (Element.prototype.matches =
          Element.prototype.msMatchesSelector ||
          Element.prototype.webkitMatchesSelector),
        Element.prototype.closest ||
          (Element.prototype.closest = function (w) {
            var T = this;
            do {
              if (T.matches(w)) return T;
              T = T.parentElement || T.parentNode;
            } while (T !== null && T.nodeType === 1);
            return null;
          });
      var Ia = {
        container: null,
        html: "",
        namespace: "",
        url: {
          hash: "",
          href: "",
          path: "",
          port: null,
          query: {},
        },
      };
      return new ((function () {
        function w() {
          (this.version = l),
            (this.schemaPage = Ia),
            (this.Logger = v),
            (this.logger = new v("@barba/core")),
            (this.plugins = []),
            (this.hooks = ee),
            (this.dom = q),
            (this.helpers = B),
            (this.history = j),
            (this.request = de),
            (this.url = me);
        }
        var T = w.prototype;
        return (
          (T.use = function (y, b) {
            var M = this.plugins;
            M.indexOf(y) > -1
              ? this.logger.warn("Plugin [" + y.name + "] already installed.")
              : typeof y.install == "function"
              ? (y.install(this, b), M.push(y))
              : this.logger.warn(
                  "Plugin [" + y.name + '] has no "install" method.'
                );
          }),
          (T.init = function (y) {
            var b = y === void 0 ? {} : y,
              M = b.transitions,
              A = M === void 0 ? [] : M,
              O = b.views,
              G = O === void 0 ? [] : O,
              X = b.schema,
              V = X === void 0 ? L : X,
              F = b.requestError,
              re = b.timeout,
              Z = re === void 0 ? 2e3 : re,
              ne = b.cacheIgnore,
              le = ne !== void 0 && ne,
              ge = b.prefetchIgnore,
              ze = ge !== void 0 && ge,
              Ce = b.preventRunning,
              qe = Ce !== void 0 && Ce,
              Re = b.prevent,
              we = Re === void 0 ? null : Re,
              xe = b.debug,
              je = b.logLevel;
            if (
              (v.setLevel(
                (xe !== void 0 && xe) === !0
                  ? "debug"
                  : je === void 0
                  ? "off"
                  : je
              ),
              this.logger.info(this.version),
              Object.keys(V).forEach(function (rt) {
                L[rt] && (L[rt] = V[rt]);
              }),
              (this.$ = F),
              (this.timeout = Z),
              (this.cacheIgnore = le),
              (this.prefetchIgnore = ze),
              (this.preventRunning = qe),
              (this._ = this.dom.getWrapper()),
              !this._)
            )
              throw new Error("[@barba/core] No Barba wrapper found");
            this._.setAttribute("aria-live", "polite"), this.q();
            var wt = this.data.current;
            if (!wt.container)
              throw new Error("[@barba/core] No Barba container found");
            if (
              ((this.cache = new K(le)),
              (this.prevent = new La(ze)),
              (this.transitions = new wa(A)),
              (this.views = new _a(G)),
              we !== null)
            ) {
              if (typeof we != "function")
                throw new Error("[@barba/core] Prevent should be a function");
              this.prevent.add("preventCustom", we);
            }
            this.history.init(wt.url.href, wt.namespace),
              (this.B = this.B.bind(this)),
              (this.U = this.U.bind(this)),
              (this.D = this.D.bind(this)),
              this.F(),
              this.plugins.forEach(function (rt) {
                return rt.init();
              });
            var Qe = this.data;
            (Qe.trigger = "barba"),
              (Qe.next = Qe.current),
              (Qe.current = n({}, this.schemaPage)),
              this.hooks.do("ready", Qe),
              this.once(Qe),
              this.q();
          }),
          (T.destroy = function () {
            this.q(),
              this.H(),
              this.history.clear(),
              this.hooks.clear(),
              (this.plugins = []);
          }),
          (T.force = function (y) {
            window.location.assign(y);
          }),
          (T.go = function (y, b, M) {
            var A;
            if ((b === void 0 && (b = "barba"), this.transitions.isRunning))
              this.force(y);
            else if (
              !(A =
                b === "popstate"
                  ? this.history.current &&
                    this.url.getPath(this.history.current.url) ===
                      this.url.getPath(y)
                  : this.prevent.run("sameUrl", null, null, y)) ||
              this.transitions.hasSelf
            )
              return (
                (b = this.history.change(y, b, M)),
                M && (M.stopPropagation(), M.preventDefault()),
                this.page(y, b, A)
              );
          }),
          (T.once = function (y) {
            try {
              var b = this;
              return Promise.resolve(b.hooks.do("beforeEnter", y)).then(
                function () {
                  function M() {
                    return Promise.resolve(b.hooks.do("afterEnter", y)).then(
                      function () {}
                    );
                  }
                  var A = (function () {
                    if (b.transitions.hasOnce) {
                      var O = b.transitions.get(y, {
                        once: !0,
                      });
                      return Promise.resolve(
                        b.transitions.doOnce({
                          transition: O,
                          data: y,
                        })
                      ).then(function () {});
                    }
                  })();
                  return A && A.then ? A.then(M) : M();
                }
              );
            } catch (M) {
              return Promise.reject(M);
            }
          }),
          (T.page = function (y, b, M) {
            try {
              var A = function () {
                  var V = O.data;
                  return Promise.resolve(O.hooks.do("page", V)).then(
                    function () {
                      var F = o(
                        function () {
                          var re = O.transitions.get(V, {
                            once: !1,
                            self: M,
                          });
                          return Promise.resolve(
                            O.transitions.doPage({
                              data: V,
                              page: G,
                              transition: re,
                              wrapper: O._,
                            })
                          ).then(function () {
                            O.q();
                          });
                        },
                        function () {
                          v.getLevel() === 0 && O.force(V.current.url.href);
                        }
                      );
                      if (F && F.then) return F.then(function () {});
                    }
                  );
                },
                O = this;
              (O.data.next.url = n(
                {
                  href: y,
                },
                O.url.parse(y)
              )),
                (O.data.trigger = b);
              var G = O.cache.has(y)
                  ? O.cache.update(y, {
                      action: "click",
                    }).request
                  : O.cache.set(
                      y,
                      O.request(y, O.timeout, O.onRequestError.bind(O, b)),
                      "click"
                    ).request,
                X = (function () {
                  if (O.transitions.shouldWait)
                    return Promise.resolve(P(G, O.data)).then(function () {});
                })();
              return Promise.resolve(X && X.then ? X.then(A) : A());
            } catch (V) {
              return Promise.reject(V);
            }
          }),
          (T.onRequestError = function (y) {
            this.transitions.isRunning = !1;
            for (
              var b = arguments.length, M = new Array(b > 1 ? b - 1 : 0), A = 1;
              A < b;
              A++
            )
              M[A - 1] = arguments[A];
            var O = M[0],
              G = M[1],
              X = this.cache.getAction(O);
            return (
              this.cache.delete(O),
              !(
                (this.$ && this.$(y, X, O, G) === !1) ||
                (X === "click" && this.force(O), 1)
              )
            );
          }),
          (T.prefetch = function (y) {
            var b = this;
            this.cache.has(y) ||
              this.cache.set(
                y,
                this.request(
                  y,
                  this.timeout,
                  this.onRequestError.bind(this, "barba")
                ).catch(function (M) {
                  b.logger.error(M);
                }),
                "prefetch"
              );
          }),
          (T.F = function () {
            this.prefetchIgnore !== !0 &&
              (document.addEventListener("mouseover", this.B),
              document.addEventListener("touchstart", this.B)),
              document.addEventListener("click", this.U),
              window.addEventListener("popstate", this.D);
          }),
          (T.H = function () {
            this.prefetchIgnore !== !0 &&
              (document.removeEventListener("mouseover", this.B),
              document.removeEventListener("touchstart", this.B)),
              document.removeEventListener("click", this.U),
              window.removeEventListener("popstate", this.D);
          }),
          (T.B = function (y) {
            var b = this,
              M = this.I(y);
            if (M) {
              var A = this.dom.getHref(M);
              this.prevent.checkHref(A) ||
                this.cache.has(A) ||
                this.cache.set(
                  A,
                  this.request(
                    A,
                    this.timeout,
                    this.onRequestError.bind(this, M)
                  ).catch(function (O) {
                    b.logger.error(O);
                  }),
                  "enter"
                );
            }
          }),
          (T.U = function (y) {
            var b = this.I(y);
            if (b)
              return this.transitions.isRunning && this.preventRunning
                ? (y.preventDefault(), void y.stopPropagation())
                : void this.go(this.dom.getHref(b), b, y);
          }),
          (T.D = function (y) {
            this.go(this.url.getHref(), "popstate", y);
          }),
          (T.I = function (y) {
            for (var b = y.target; b && !this.dom.getHref(b); )
              b = b.parentNode;
            if (b && !this.prevent.checkLink(b, y, this.dom.getHref(b)))
              return b;
          }),
          (T.q = function () {
            var y = this.url.getHref(),
              b = {
                container: this.dom.getContainer(),
                html: this.dom.getHtml(),
                namespace: this.dom.getNamespace(),
                url: n(
                  {
                    href: y,
                  },
                  this.url.parse(y)
                ),
              };
            (this.C = {
              current: b,
              next: n({}, this.schemaPage),
              trigger: void 0,
            }),
              this.hooks.do("reset", this.data);
          }),
          t(w, [
            {
              key: "data",
              get: function () {
                return this.C;
              },
            },
            {
              key: "wrapper",
              get: function () {
                return this._;
              },
            },
          ]),
          w
        );
      })())();
    });
  });
  var cs = {};
  Na(cs, {
    CookieConsentManager: () => wr,
  });
  var _t = {
    a: {
      width: "default",
      unit: "px",
      grids: [16, 12, 10],
    },
    b: {
      width: 1449,
      unit: "px",
      grids: null,
    },
    c: {
      width: 1279,
      unit: "px",
      grids: [12],
    },
    d: {
      width: 1099,
      unit: "px",
      grids: null,
    },
    e: {
      width: 979,
      unit: "px",
      grids: [6],
    },
    f: {
      width: 799,
      unit: "px",
      grids: [6],
    },
    g: {
      width: 649,
      unit: "px",
      grids: null,
    },
    h: {
      width: 449,
      unit: "px",
      grids: null,
    },
  };
  var uh = Ar(Dr());
  function Ra(e, t, n, r, i) {
    return r + (i - r) * ((e - t) / (n - t));
  }
  function Ot(e) {
    return typeof e == "number";
  }
  function zr(e) {
    return typeof e == "string";
  }
  function At(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
  }
  function ja(e) {
    return Array.isArray(e);
  }
  function Br(e) {
    return At(e) || ja(e);
  }
  function fe(e) {
    return Math.abs(e);
  }
  function Dt(e) {
    return e ? e / fe(e) : 0;
  }
  function it(e, t) {
    return fe(e - t);
  }
  function Va(e, t) {
    if (e === 0 || t === 0 || fe(e) <= fe(t)) return 0;
    var n = it(fe(e), fe(t));
    return fe(n / e);
  }
  function Fa(e) {
    var t = Math.pow(10, e);
    return function (n) {
      return Math.round(n * t) / t;
    };
  }
  function at(e) {
    return Ye(e).map(Number);
  }
  function Ve(e) {
    return e[ht(e)];
  }
  function ht(e) {
    return Math.max(0, e.length - 1);
  }
  function Ye(e) {
    return Object.keys(e);
  }
  function Nr(e, t) {
    return [e, t].reduce(function (n, r) {
      return (
        Ye(r).forEach(function (i) {
          var a = n[i],
            c = r[i],
            u = At(a) && At(c);
          n[i] = u ? Nr(a, c) : c;
        }),
        n
      );
    }, {});
  }
  function Hr(e, t) {
    var n = Ye(e),
      r = Ye(t);
    return n.length !== r.length
      ? !1
      : n.every(function (i) {
          var a = e[i],
            c = t[i];
          return typeof a == "function"
            ? "".concat(a) === "".concat(c)
            : !Br(a) || !Br(c)
            ? a === c
            : Hr(a, c);
        });
  }
  function Ga(e, t) {
    var n = {
      start: r,
      center: i,
      end: a,
    };
    function r() {
      return 0;
    }
    function i(d) {
      return a(d) / 2;
    }
    function a(d) {
      return t - d;
    }
    function c() {
      return t * Number(e);
    }
    function u(d) {
      return Ot(e) ? c() : n[e](d);
    }
    var o = {
      measure: u,
    };
    return o;
  }
  function Wa(e) {
    var t = 0;
    function n(c, u) {
      return function () {
        c === !!t && u();
      };
    }
    function r() {
      t = window.requestAnimationFrame(e);
    }
    function i() {
      window.cancelAnimationFrame(t), (t = 0);
    }
    var a = {
      proceed: n(!0, r),
      start: n(!1, r),
      stop: n(!0, i),
    };
    return a;
  }
  function Xa(e, t) {
    var n = e === "y" ? "y" : "x",
      r = e === "y" ? "x" : "y",
      i = u(),
      a = o();
    function c(l) {
      var s = l.width,
        f = l.height;
      return n === "x" ? s : f;
    }
    function u() {
      return n === "y" ? "top" : t === "rtl" ? "right" : "left";
    }
    function o() {
      return n === "y" ? "bottom" : t === "rtl" ? "left" : "right";
    }
    var d = {
      scroll: n,
      cross: r,
      startEdge: i,
      endEdge: a,
      measureSize: c,
    };
    return d;
  }
  function Je(e, t) {
    var n = fe(e - t);
    function r(d) {
      return d < e;
    }
    function i(d) {
      return d > t;
    }
    function a(d) {
      return r(d) || i(d);
    }
    function c(d) {
      return a(d) ? (r(d) ? e : t) : d;
    }
    function u(d) {
      return n ? d - n * Math.ceil((d - t) / n) : d;
    }
    var o = {
      length: n,
      max: t,
      min: e,
      constrain: c,
      reachedAny: a,
      reachedMax: i,
      reachedMin: r,
      removeOffset: u,
    };
    return o;
  }
  function qr(e, t, n) {
    var r = Je(0, e),
      i = r.min,
      a = r.constrain,
      c = e + 1,
      u = o(t);
    function o(g) {
      return n ? fe((c + g) % c) : a(g);
    }
    function d() {
      return u;
    }
    function l(g) {
      return (u = o(g)), v;
    }
    function s(g) {
      return l(d() + g);
    }
    function f() {
      return qr(e, d(), n);
    }
    var v = {
      add: s,
      clone: f,
      get: d,
      set: l,
      min: i,
      max: e,
    };
    return v;
  }
  function Ya(e) {
    var t = e === "rtl" ? -1 : 1;
    function n(i) {
      return i * t;
    }
    var r = {
      apply: n,
    };
    return r;
  }
  function ft() {
    var e = [];
    function t(i, a, c, u) {
      return (
        u === void 0 &&
          (u = {
            passive: !0,
          }),
        i.addEventListener(a, c, u),
        e.push(function () {
          return i.removeEventListener(a, c, u);
        }),
        r
      );
    }
    function n() {
      return (
        (e = e.filter(function (i) {
          return i();
        })),
        r
      );
    }
    var r = {
      add: t,
      removeAll: n,
    };
    return r;
  }
  function We(e) {
    var t = e;
    function n() {
      return t;
    }
    function r(s) {
      return (t = d(s)), l;
    }
    function i(s) {
      return (t += d(s)), l;
    }
    function a(s) {
      return (t -= d(s)), l;
    }
    function c(s) {
      return (t *= s), l;
    }
    function u(s) {
      return (t /= s), l;
    }
    function o() {
      return t !== 0 && u(t), l;
    }
    function d(s) {
      return Ot(s) ? s : s.get();
    }
    var l = {
      add: i,
      divide: u,
      get: n,
      multiply: c,
      normalize: o,
      set: r,
      subtract: a,
    };
    return l;
  }
  function Ua(e, t, n, r, i, a, c, u, o, d, l, s, f, v, g, h) {
    var p = e.cross,
      E = ["INPUT", "SELECT", "TEXTAREA"],
      x = {
        passive: !1,
      },
      m = We(0),
      $ = ft(),
      C = ft(),
      I = f.measure(20),
      _ = {
        mouse: 300,
        touch: 400,
      },
      D = {
        mouse: 500,
        touch: 600,
      },
      H = g ? 5 : 16,
      z = 1,
      k = 0,
      S = 0,
      L = !1,
      q = !1,
      j = !1,
      P = !1;
    function N() {
      var K = n;
      $.add(
        K,
        "dragstart",
        function (ce) {
          return ce.preventDefault();
        },
        x
      )
        .add(K, "touchmove", function () {}, x)
        .add(K, "touchend", function () {})
        .add(K, "touchstart", Se)
        .add(K, "mousedown", Se)
        .add(K, "touchcancel", de)
        .add(K, "contextmenu", de)
        .add(K, "click", oe, !0);
    }
    function B() {
      var K = P ? document : n;
      C.add(K, "touchmove", me, x)
        .add(K, "touchend", de)
        .add(K, "mousemove", me, x)
        .add(K, "mouseup", de);
    }
    function W() {
      $.removeAll(), C.removeAll();
    }
    function Y(K) {
      var ce = K.nodeName || "";
      return E.indexOf(ce) > -1;
    }
    function ae() {
      var K = g ? D : _,
        ce = P ? "mouse" : "touch";
      return K[ce];
    }
    function ve(K, ce) {
      var ye = l.clone().add(Dt(K) * -1),
        se = ye.get() === l.min || ye.get() === l.max,
        be = d.byDistance(K, !g).distance;
      return g || fe(K) < I
        ? be
        : !v && se
        ? be * 0.4
        : h && ce
        ? be * 0.5
        : d.byIndex(ye.get(), 0).distance;
    }
    function Se(K) {
      if (((P = !i.isTouchEvent(K)), !(P && K.button !== 0) && !Y(K.target))) {
        var ce = it(r.get(), a.get()) >= 2,
          ye = P || !ce;
        (L = !0),
          i.pointerDown(K),
          m.set(r),
          r.set(a),
          o.useBaseMass().useSpeed(80),
          B(),
          (k = i.readPoint(K)),
          (S = i.readPoint(K, p)),
          s.emit("pointerDown"),
          ye && (j = !1);
      }
    }
    function me(K) {
      if (!q && !P) {
        if (!K.cancelable) return de(K);
        var ce = i.readPoint(K),
          ye = i.readPoint(K, p),
          se = it(ce, k),
          be = it(ye, S);
        if (((q = se > be), !q && !j)) return de(K);
      }
      var Pe = i.pointerMove(K);
      !j && Pe && (j = !0), c.start(), r.add(t.apply(Pe)), K.preventDefault();
    }
    function de(K) {
      var ce = d.byDistance(0, !1),
        ye = ce.index !== l.get(),
        se = i.pointerUp(K) * ae(),
        be = ve(t.apply(se), ye),
        Pe = Va(se, be),
        Xe = it(r.get(), m.get()) >= 0.5,
        dt = ye && Pe > 0.75,
        Mt = fe(se) < I,
        kt = dt ? 10 : H,
        Lt = dt ? z + 2.5 * Pe : z;
      Xe && !P && (j = !0),
        (q = !1),
        (L = !1),
        C.removeAll(),
        o.useSpeed(Mt ? 9 : kt).useMass(Lt),
        u.distance(be, !g),
        (P = !1),
        s.emit("pointerUp");
    }
    function oe(K) {
      j && (K.stopPropagation(), K.preventDefault());
    }
    function Q() {
      return !j;
    }
    function ee() {
      return L;
    }
    var ue = {
      addActivationEvents: N,
      clickAllowed: Q,
      pointerDown: ee,
      removeAllEvents: W,
    };
    return ue;
  }
  function Ka(e) {
    var t = 170,
      n,
      r;
    function i(s) {
      return typeof TouchEvent < "u" && s instanceof TouchEvent;
    }
    function a(s) {
      return s.timeStamp;
    }
    function c(s, f) {
      var v = f || e.scroll,
        g = "client".concat(v === "x" ? "X" : "Y");
      return (i(s) ? s.touches[0] : s)[g];
    }
    function u(s) {
      return (n = s), (r = s), c(s);
    }
    function o(s) {
      var f = c(s) - c(r),
        v = a(s) - a(n) > t;
      return (r = s), v && (n = s), f;
    }
    function d(s) {
      if (!n || !r) return 0;
      var f = c(r) - c(n),
        v = a(s) - a(n),
        g = a(s) - a(r) > t,
        h = f / v,
        p = v && !g && fe(h) > 0.1;
      return p ? h : 0;
    }
    var l = {
      isTouchEvent: i,
      pointerDown: u,
      pointerMove: o,
      pointerUp: d,
      readPoint: c,
    };
    return l;
  }
  function Za(e) {
    function t(r) {
      return e * (r / 100);
    }
    var n = {
      measure: t,
    };
    return n;
  }
  function Qa(e, t, n) {
    var r = Fa(2),
      i = We(0),
      a = We(0),
      c = We(0),
      u = 0,
      o = t,
      d = n;
    function l() {
      i.add(a), e.add(i), a.multiply(0);
    }
    function s($) {
      $.divide(d), a.add($);
    }
    function f($) {
      c.set($).subtract(e);
      var C = Ra(c.get(), 0, 100, 0, o);
      return (u = Dt(c.get())), c.normalize().multiply(C).subtract(i), s(c), m;
    }
    function v($) {
      var C = $.get() - e.get(),
        I = !r(C);
      return I && e.set($), I;
    }
    function g() {
      return u;
    }
    function h() {
      return E(t);
    }
    function p() {
      return x(n);
    }
    function E($) {
      return (o = $), m;
    }
    function x($) {
      return (d = $), m;
    }
    var m = {
      direction: g,
      seek: f,
      settle: v,
      update: l,
      useBaseMass: p,
      useBaseSpeed: h,
      useMass: x,
      useSpeed: E,
    };
    return m;
  }
  function Ja(e, t, n, r, i) {
    var a = i.measure(10),
      c = i.measure(50),
      u = 0.85,
      o = !1;
    function d() {
      return !(o || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
    }
    function l(v) {
      if (!!d()) {
        var g = e.reachedMin(t.get()) ? "min" : "max",
          h = fe(e[g] - t.get()),
          p = n.get() - t.get(),
          E = Math.min(h / c, u);
        n.subtract(p * E),
          !v &&
            fe(p) < a &&
            (n.set(e.constrain(n.get())), r.useSpeed(10).useMass(3));
      }
    }
    function s(v) {
      o = !v;
    }
    var f = {
      constrain: l,
      toggleActive: s,
    };
    return f;
  }
  function eo(e, t, n, r) {
    var i = Je(-t + e, n[0]),
      a = n.map(i.constrain),
      c = o();
    function u() {
      var l = a[0],
        s = Ve(a),
        f = a.lastIndexOf(l),
        v = a.indexOf(s) + 1;
      return Je(f, v);
    }
    function o() {
      if (t <= e) return [i.max];
      if (r === "keepSnaps") return a;
      var l = u(),
        s = l.min,
        f = l.max;
      return a.slice(s, f);
    }
    var d = {
      snapsContained: c,
    };
    return d;
  }
  function to(e, t, n) {
    var r = i();
    function i() {
      var c = t[0],
        u = Ve(t),
        o = n ? c - e : u,
        d = c;
      return Je(o, d);
    }
    var a = {
      limit: r,
    };
    return a;
  }
  function no(e, t, n, r) {
    var i = 0.1,
      a = t.min + i,
      c = t.max + i,
      u = Je(a, c),
      o = u.reachedMin,
      d = u.reachedMax;
    function l(v) {
      return v === 1 ? d(n.get()) : v === -1 ? o(n.get()) : !1;
    }
    function s(v) {
      if (!!l(v)) {
        var g = e * (v * -1);
        r.forEach(function (h) {
          return h.add(g);
        });
      }
    }
    var f = {
      loop: s,
    };
    return f;
  }
  function ro(e) {
    var t = e.max,
      n = e.length;
    function r(a) {
      var c = a - t;
      return c / -n;
    }
    var i = {
      get: r,
    };
    return i;
  }
  function io(e, t, n, r, i, a, c) {
    var u = e.startEdge,
      o = e.endEdge,
      d = a.groupSlides,
      l = v().map(t.measure),
      s = g(),
      f = h();
    function v() {
      return d(r)
        .map(function (E) {
          return Ve(E)[o] - E[0][u];
        })
        .map(fe);
    }
    function g() {
      return r
        .map(function (E) {
          return n[u] - E[u];
        })
        .map(function (E) {
          return -fe(E);
        });
    }
    function h() {
      var E = 0,
        x = Ve(s) - Ve(i);
      return d(s)
        .map(function (m) {
          return m[0];
        })
        .map(function (m, $, C) {
          var I = !$,
            _ = $ === ht(C);
          return c && I ? E : c && _ ? x : m + l[$];
        });
    }
    var p = {
      snaps: s,
      snapsAligned: f,
    };
    return p;
  }
  function ao(e, t, n, r, i) {
    var a = r.reachedAny,
      c = r.removeOffset,
      u = r.constrain;
    function o(g) {
      return g.concat().sort(function (h, p) {
        return fe(h) - fe(p);
      })[0];
    }
    function d(g) {
      var h = e ? c(g) : u(g),
        p = t
          .map(function (x) {
            return x - h;
          })
          .map(function (x) {
            return l(x, 0);
          })
          .map(function (x, m) {
            return {
              diff: x,
              index: m,
            };
          })
          .sort(function (x, m) {
            return fe(x.diff) - fe(m.diff);
          }),
        E = p[0].index;
      return {
        index: E,
        distance: h,
      };
    }
    function l(g, h) {
      var p = [g, g + n, g - n];
      if (!e) return p[0];
      if (!h) return o(p);
      var E = p.filter(function (x) {
        return Dt(x) === h;
      });
      return o(E);
    }
    function s(g, h) {
      var p = t[g] - i.get(),
        E = l(p, h);
      return {
        index: g,
        distance: E,
      };
    }
    function f(g, h) {
      var p = i.get() + g,
        E = d(p),
        x = E.index,
        m = E.distance,
        $ = !e && a(p);
      if (!h || $)
        return {
          index: x,
          distance: g,
        };
      var C = t[x] - m,
        I = g + l(C, 0);
      return {
        index: x,
        distance: I,
      };
    }
    var v = {
      byDistance: f,
      byIndex: s,
      shortcut: l,
    };
    return v;
  }
  function oo(e, t, n, r, i, a) {
    function c(l) {
      var s = l.distance,
        f = l.index !== t.get();
      s && (e.start(), i.add(s)),
        f && (n.set(t.get()), t.set(l.index), a.emit("select"));
    }
    function u(l, s) {
      var f = r.byDistance(l, s);
      c(f);
    }
    function o(l, s) {
      var f = t.clone().set(l),
        v = r.byIndex(f.get(), s);
      c(v);
    }
    var d = {
      distance: u,
      index: o,
    };
    return d;
  }
  function Rr(e, t, n) {
    var r = e.scroll === "x" ? c : u,
      i = n.style,
      a = !1;
    function c(f) {
      return "translate3d(".concat(f, "px,0px,0px)");
    }
    function u(f) {
      return "translate3d(0px,".concat(f, "px,0px)");
    }
    function o(f) {
      a || (i.transform = r(t.apply(f.get())));
    }
    function d(f) {
      a = !f;
    }
    function l() {
      a ||
        ((i.transform = ""),
        n.getAttribute("style") || n.removeAttribute("style"));
    }
    var s = {
      clear: l,
      to: o,
      toggleActive: d,
    };
    return s;
  }
  function so(e, t, n, r, i, a, c, u, o) {
    var d = at(i),
      l = at(i).reverse(),
      s = h().concat(p());
    function f(C, I) {
      return C.reduce(function (_, D) {
        return _ - i[D];
      }, I);
    }
    function v(C, I) {
      return C.reduce(function (_, D) {
        var H = f(_, I);
        return H > 0 ? _.concat([D]) : _;
      }, []);
    }
    function g(C, I) {
      var _ = I === "start",
        D = _ ? -r : r,
        H = c.findSlideBounds([D]);
      return C.map(function (z) {
        var k = _ ? 0 : -r,
          S = _ ? r : 0,
          L = H.filter(function (W) {
            return W.index === z;
          })[0],
          q = L[_ ? "end" : "start"],
          j = We(-1),
          P = We(-1),
          N = Rr(e, t, o[z]),
          B = function () {
            return j.set(u.get() > q ? k : S);
          };
        return {
          index: z,
          location: P,
          translate: N,
          target: B,
        };
      });
    }
    function h() {
      var C = a[0] - 1,
        I = v(l, C);
      return g(I, "end");
    }
    function p() {
      var C = n - a[0] - 1,
        I = v(d, C);
      return g(I, "start");
    }
    function E() {
      return s.every(function (C) {
        var I = C.index,
          _ = d.filter(function (D) {
            return D !== I;
          });
        return f(_, n) <= 0.1;
      });
    }
    function x() {
      s.forEach(function (C) {
        var I = C.target,
          _ = C.translate,
          D = C.location,
          H = I();
        H.get() !== D.get() && (H.get() === 0 ? _.clear() : _.to(H), D.set(H));
      });
    }
    function m() {
      s.forEach(function (C) {
        return C.translate.clear();
      });
    }
    var $ = {
      canLoop: E,
      clear: m,
      loop: x,
      loopPoints: s,
    };
    return $;
  }
  function lo(e, t, n, r, i, a, c) {
    var u = i.removeOffset,
      o = i.constrain,
      d = 0.5,
      l = a ? [0, t, -t] : [0],
      s = v(l, c);
    function f(p) {
      var E = p || 0;
      return n.map(function (x) {
        var m = Je(d, x - d);
        return m.constrain(x * E);
      });
    }
    function v(p, E) {
      var x = p || l,
        m = f(E);
      return x.reduce(function ($, C) {
        var I = r.map(function (_, D) {
          return {
            start: _ - n[D] + m[D] + C,
            end: _ + e - m[D] + C,
            index: D,
          };
        });
        return $.concat(I);
      }, []);
    }
    function g(p, E) {
      var x = a ? u(p) : o(p),
        m = E || s;
      return m.reduce(function ($, C) {
        var I = C.index,
          _ = C.start,
          D = C.end,
          H = $.indexOf(I) !== -1,
          z = _ < x && D > x;
        return !H && z ? $.concat([I]) : $;
      }, []);
    }
    var h = {
      check: g,
      findSlideBounds: v,
    };
    return h;
  }
  function co(e, t, n, r, i) {
    var a = e.measureSize,
      c = e.startEdge,
      u = e.endEdge,
      o = n[0] && i,
      d = v(),
      l = g(),
      s = n.map(a),
      f = h();
    function v() {
      if (!o) return 0;
      var E = n[0];
      return fe(t[c] - E[c]);
    }
    function g() {
      if (!o) return 0;
      var E = window.getComputedStyle(Ve(r));
      return parseFloat(E.getPropertyValue("margin-".concat(u)));
    }
    function h() {
      return n
        .map(function (E, x, m) {
          var $ = !x,
            C = x === ht(m);
          return $ ? s[x] + d : C ? s[x] + l : m[x + 1][c] - E[c];
        })
        .map(fe);
    }
    var p = {
      slideSizes: s,
      slideSizesWithGaps: f,
    };
    return p;
  }
  function uo(e, t, n) {
    var r = Ot(n);
    function i(o, d) {
      return at(o)
        .filter(function (l) {
          return l % d === 0;
        })
        .map(function (l) {
          return o.slice(l, l + d);
        });
    }
    function a(o) {
      return at(o)
        .reduce(function (d, l) {
          var s = t.slice(Ve(d), l + 1),
            f = s.reduce(function (v, g) {
              return v + g;
            }, 0);
          return !l || f > e ? d.concat(l) : d;
        }, [])
        .map(function (d, l, s) {
          return o.slice(d, s[l + 1]);
        });
    }
    function c(o) {
      return r ? i(o, n) : a(o);
    }
    var u = {
      groupSlides: c,
    };
    return u;
  }
  function fo(e, t, n, r, i) {
    var a = r.align,
      c = r.axis,
      u = r.direction,
      o = r.startIndex,
      d = r.inViewThreshold,
      l = r.loop,
      s = r.speed,
      f = r.dragFree,
      v = r.slidesToScroll,
      g = r.skipSnaps,
      h = r.containScroll,
      p = t.getBoundingClientRect(),
      E = n.map(function (be) {
        return be.getBoundingClientRect();
      }),
      x = Ya(u),
      m = Xa(c, u),
      $ = m.measureSize(p),
      C = Za($),
      I = Ga(a, $),
      _ = !l && h !== "",
      D = l || h !== "",
      H = co(m, p, E, n, D),
      z = H.slideSizes,
      k = H.slideSizesWithGaps,
      S = uo($, k, v),
      L = io(m, I, p, E, k, S, _),
      q = L.snaps,
      j = L.snapsAligned,
      P = -Ve(q) + Ve(k),
      N = eo($, P, j, h).snapsContained,
      B = _ ? N : j,
      W = to(P, B, l).limit,
      Y = qr(ht(B), o, l),
      ae = Y.clone(),
      ve = at(n),
      Se = function () {
        l || se.scrollBounds.constrain(se.dragHandler.pointerDown()),
          se.scrollBody.seek(Q).update();
        var be = se.scrollBody.settle(Q);
        be &&
          !se.dragHandler.pointerDown() &&
          (se.animation.stop(), i.emit("settle")),
          be || i.emit("scroll"),
          l &&
            (se.scrollLooper.loop(se.scrollBody.direction()),
            se.slideLooper.loop()),
          se.translate.to(oe),
          se.animation.proceed();
      },
      me = Wa(Se),
      de = B[Y.get()],
      oe = We(de),
      Q = We(de),
      ee = Qa(oe, s, 1),
      ue = ao(l, B, P, W, Q),
      K = oo(me, Y, ae, ue, Q, i),
      ce = lo($, P, z, q, W, l, d),
      ye = Ua(m, x, e, Q, Ka(m), oe, me, K, ee, ue, Y, i, C, l, f, g),
      se = {
        containerRect: p,
        slideRects: E,
        animation: me,
        axis: m,
        direction: x,
        dragHandler: ye,
        eventStore: ft(),
        percentOfView: C,
        index: Y,
        indexPrevious: ae,
        limit: W,
        location: oe,
        options: r,
        scrollBody: ee,
        scrollBounds: Ja(W, oe, Q, ee, C),
        scrollLooper: no(P, W, oe, [oe, Q]),
        scrollProgress: ro(W),
        scrollSnaps: B,
        scrollTarget: ue,
        scrollTo: K,
        slideLooper: so(m, x, $, P, k, B, ce, oe, n),
        slidesToScroll: S,
        slidesInView: ce,
        slideIndexes: ve,
        target: Q,
        translate: Rr(m, x, t),
      };
    return se;
  }
  function ho() {
    var e = {};
    function t(c) {
      return e[c] || [];
    }
    function n(c) {
      return (
        t(c).forEach(function (u) {
          return u(c);
        }),
        a
      );
    }
    function r(c, u) {
      return (e[c] = t(c).concat([u])), a;
    }
    function i(c, u) {
      return (
        (e[c] = t(c).filter(function (o) {
          return o !== u;
        })),
        a
      );
    }
    var a = {
      emit: n,
      off: i,
      on: r,
    };
    return a;
  }
  var po = {
    align: "center",
    axis: "x",
    container: null,
    slides: null,
    containScroll: "",
    direction: "ltr",
    slidesToScroll: 1,
    breakpoints: {},
    dragFree: !1,
    draggable: !0,
    inViewThreshold: 0,
    loop: !1,
    skipSnaps: !1,
    speed: 10,
    startIndex: 0,
    active: !0,
  };
  function zt() {
    function e(i, a) {
      return Nr(i, a || {});
    }
    function t(i, a) {
      var c = JSON.stringify(Ye(i.breakpoints || {})),
        u = JSON.stringify(Ye(a.breakpoints || {}));
      return c !== u ? !1 : Hr(i, a);
    }
    function n(i) {
      var a = i.breakpoints || {},
        c = Ye(a)
          .filter(function (u) {
            return window.matchMedia(u).matches;
          })
          .map(function (u) {
            return a[u];
          })
          .reduce(function (u, o) {
            return e(u, o);
          }, {});
      return e(i, c);
    }
    var r = {
      merge: e,
      areEqual: t,
      atMedia: n,
    };
    return r;
  }
  function mo() {
    var e = zt(),
      t = e.atMedia,
      n = e.areEqual,
      r = [],
      i = [];
    function a() {
      return i.some(function (l) {
        return l();
      });
    }
    function c(l) {
      var s = t(l.options);
      return function () {
        return !n(s, t(l.options));
      };
    }
    function u(l, s) {
      return (
        (i = l.map(c)),
        (r = l.filter(function (f) {
          return t(f.options).active;
        })),
        r.forEach(function (f) {
          return f.init(s);
        }),
        l.reduce(function (f, v) {
          var g;
          return Object.assign(f, ((g = {}), (g[v.name] = v), g));
        }, {})
      );
    }
    function o() {
      r = r.filter(function (l) {
        return l.destroy();
      });
    }
    var d = {
      init: u,
      destroy: o,
      haveChanged: a,
    };
    return d;
  }
  function _e(e, t, n) {
    var r = ft(),
      i = zt(),
      a = mo(),
      c = ho(),
      u = c.on,
      o = c.off,
      d = C,
      l = !1,
      s,
      f = i.merge(po, _e.globalOptions),
      v = i.merge(f),
      g = [],
      h,
      p = 0,
      E,
      x;
    function m() {
      var Q = v.container,
        ee = v.slides,
        ue = zr(Q) ? e.querySelector(Q) : Q;
      E = ue || e.children[0];
      var K = zr(ee) ? E.querySelectorAll(ee) : ee;
      x = [].slice.call(K || E.children);
    }
    function $(Q, ee) {
      if (!l) {
        if (
          ((f = i.merge(f, Q)),
          (v = i.atMedia(f)),
          m(),
          (s = fo(e, E, x, v, c)),
          (p = s.axis.measureSize(e.getBoundingClientRect())),
          !v.active)
        )
          return I();
        if (
          (s.translate.to(s.location),
          (g = ee || g),
          (h = a.init(g, oe)),
          v.loop)
        ) {
          if (!s.slideLooper.canLoop()) {
            I(),
              $(
                {
                  loop: !1,
                },
                ee
              ),
              (f = i.merge(f, {
                loop: !0,
              }));
            return;
          }
          s.slideLooper.loop();
        }
        v.draggable &&
          E.offsetParent &&
          x.length &&
          s.dragHandler.addActivationEvents();
      }
    }
    function C(Q, ee) {
      var ue = B();
      I(),
        $(
          i.merge(
            {
              startIndex: ue,
            },
            Q
          ),
          ee
        ),
        c.emit("reInit");
    }
    function I() {
      s.dragHandler.removeAllEvents(),
        s.animation.stop(),
        s.eventStore.removeAll(),
        s.translate.clear(),
        s.slideLooper.clear(),
        a.destroy();
    }
    function _() {
      l || ((l = !0), r.removeAll(), I(), c.emit("destroy"));
    }
    function D() {
      var Q = i.atMedia(f),
        ee = !i.areEqual(Q, v),
        ue = s.axis.measureSize(e.getBoundingClientRect()),
        K = p !== ue,
        ce = a.haveChanged();
      (K || ee || ce) && C(), c.emit("resize");
    }
    function H(Q) {
      var ee = s[Q ? "target" : "location"].get(),
        ue = v.loop ? "removeOffset" : "constrain";
      return s.slidesInView.check(s.limit[ue](ee));
    }
    function z(Q) {
      var ee = H(Q);
      return s.slideIndexes.filter(function (ue) {
        return ee.indexOf(ue) === -1;
      });
    }
    function k(Q, ee, ue) {
      !v.active ||
        l ||
        (s.scrollBody.useBaseMass().useSpeed(ee ? 100 : v.speed),
        s.scrollTo.index(Q, ue || 0));
    }
    function S(Q) {
      var ee = s.index.clone().add(1);
      k(ee.get(), Q === !0, -1);
    }
    function L(Q) {
      var ee = s.index.clone().add(-1);
      k(ee.get(), Q === !0, 1);
    }
    function q() {
      var Q = s.index.clone().add(1);
      return Q.get() !== B();
    }
    function j() {
      var Q = s.index.clone().add(-1);
      return Q.get() !== B();
    }
    function P() {
      return s.scrollSnaps.map(s.scrollProgress.get);
    }
    function N() {
      return s.scrollProgress.get(s.location.get());
    }
    function B() {
      return s.index.get();
    }
    function W() {
      return s.indexPrevious.get();
    }
    function Y() {
      return s.dragHandler.clickAllowed();
    }
    function ae() {
      return h;
    }
    function ve() {
      return s;
    }
    function Se() {
      return e;
    }
    function me() {
      return E;
    }
    function de() {
      return x;
    }
    var oe = {
      canScrollNext: q,
      canScrollPrev: j,
      clickAllowed: Y,
      containerNode: me,
      internalEngine: ve,
      destroy: _,
      off: o,
      on: u,
      plugins: ae,
      previousScrollSnap: W,
      reInit: d,
      rootNode: Se,
      scrollNext: S,
      scrollPrev: L,
      scrollProgress: N,
      scrollSnapList: P,
      scrollTo: k,
      selectedScrollSnap: B,
      slideNodes: de,
      slidesInView: H,
      slidesNotInView: z,
    };
    return (
      $(t, n),
      r.add(window, "resize", D),
      setTimeout(function () {
        return c.emit("init");
      }, 0),
      oe
    );
  }
  _e.globalOptions = void 0;
  _e.optionsHandler = zt;
  var go = {
    active: !0,
    breakpoints: {},
    delay: 4e3,
    jump: !1,
    playOnInit: !0,
    stopOnInteraction: !0,
    stopOnMouseEnter: !1,
    stopOnLastSnap: !1,
    rootNode: null,
  };
  function pt(e) {
    var t = _e.optionsHandler(),
      n = t.merge(go, pt.globalOptions),
      r,
      i,
      a,
      c = 0,
      u = !1;
    function o(h) {
      (i = h),
        (r = t.atMedia(g.options)),
        (u = r.jump),
        (a = r.stopOnInteraction ? d : s);
      var p = i.internalEngine().eventStore,
        E = i.rootNode(),
        x = (r.rootNode && r.rootNode(E)) || E;
      i.on("pointerDown", a),
        r.stopOnInteraction || i.on("pointerUp", f),
        r.stopOnMouseEnter &&
          (p.add(x, "mouseenter", a),
          r.stopOnInteraction || p.add(x, "mouseleave", f)),
        p.add(document, "visibilitychange", function () {
          if (document.visibilityState === "hidden") return s();
          f();
        }),
        p.add(window, "pagehide", function (m) {
          m.persisted && s();
        }),
        r.playOnInit && l();
    }
    function d() {
      i.off("pointerDown", a),
        r.stopOnInteraction || i.off("pointerUp", f),
        s(),
        (c = 0);
    }
    function l(h) {
      s(), typeof h < "u" && (u = h), (c = window.setTimeout(v, r.delay));
    }
    function s() {
      !c || window.clearTimeout(c);
    }
    function f() {
      !c || (s(), l());
    }
    function v() {
      var h = i.internalEngine().index,
        p = r.stopOnLastSnap && h.get() === h.max;
      if (p) return d();
      i.canScrollNext() ? i.scrollNext(u) : i.scrollTo(0, u), l();
    }
    var g = {
      name: "autoplay",
      options: t.merge(n, e),
      init: o,
      destroy: d,
      play: l,
      stop: s,
      reset: f,
    };
    return g;
  }
  pt.globalOptions = void 0;
  var vo = {
    active: !0,
    breakpoints: {},
    selected: "is-selected",
    draggable: "is-draggable",
    dragging: "is-dragging",
  };
  function mt(e, t) {
    var n = e.classList;
    t && n.contains(t) && n.remove(t);
  }
  function Bt(e, t) {
    var n = e.classList;
    t && !n.contains(t) && n.add(t);
  }
  function et(e) {
    var t = _e.optionsHandler(),
      n = t.merge(vo, et.globalOptions),
      r,
      i,
      a,
      c,
      u = ["select", "pointerUp"],
      o = ["pointerDown", "pointerUp"];
    function d(g) {
      (i = g),
        (r = t.atMedia(v.options)),
        (a = i.rootNode()),
        (c = i.slideNodes());
      var h = i.internalEngine().options.draggable;
      h && Bt(a, r.draggable),
        r.dragging &&
          o.forEach(function (p) {
            return i.on(p, s);
          }),
        r.selected &&
          (u.forEach(function (p) {
            return i.on(p, f);
          }),
          f());
    }
    function l() {
      mt(a, r.draggable),
        o.forEach(function (g) {
          return i.off(g, s);
        }),
        u.forEach(function (g) {
          return i.off(g, f);
        }),
        c.forEach(function (g) {
          return mt(g, r.selected);
        });
    }
    function s(g) {
      g === "pointerDown" ? Bt(a, r.dragging) : mt(a, r.dragging);
    }
    function f() {
      var g = i.slidesInView(!0),
        h = i.slidesNotInView(!0);
      h.forEach(function (p) {
        return mt(c[p], r.selected);
      }),
        g.forEach(function (p) {
          return Bt(c[p], r.selected);
        });
    }
    var v = {
      name: "classNames",
      options: t.merge(n, e),
      init: d,
      destroy: l,
    };
    return v;
  }
  et.globalOptions = void 0;
  function Nt() {
    return window.innerWidth || document.documentElement.clientWidth;
  }
  function Ht(e, t, n) {
    e.addEventListener(
      "click",
      () => {
        n.scrollPrev();
      },
      !1
    ),
      t.addEventListener(
        "click",
        () => {
          n.scrollNext();
        },
        !1
      );
  }
  function jr(e, t) {
    e.forEach((n, r) => {
      n.classList.contains("carousel__pip--selectable") &&
        n.addEventListener("click", () => t.scrollTo(r), !1);
    });
  }
  function Vr(e) {
    return () => {
      let t = e.slideNodes(),
        n = t[e.selectedScrollSnap()],
        r = t[e.previousScrollSnap()],
        i = n.querySelectorAll(".stagger"),
        a = r.querySelectorAll(".stagger");
      i.forEach((c, u) => {
        setTimeout(
          () => {
            c.classList.remove("stagger--hidden");
          },
          u === 0 ? 500 : 0
        );
      }),
        a.forEach((c) => {
          c.classList.add("stagger--hidden");
        });
    };
  }
  function Fr(e, t) {
    return function () {
      let n = t.previousScrollSnap(),
        r = t.selectedScrollSnap();
      e[n].classList.remove("is-selected"), e[r].classList.add("is-selected");
    };
  }
  function qt(e, t, n) {
    return () => {
      n.canScrollPrev()
        ? e.removeAttribute("disabled")
        : e.setAttribute("disabled", "disabled"),
        n.canScrollNext()
          ? t.removeAttribute("disabled")
          : t.setAttribute("disabled", "disabled");
    };
  }
  function Gr(e, t) {
    return () => {
      let r = t.slideNodes()[t.selectedScrollSnap()].dataset.heading;
      e.innerHTML = r;
    };
  }
  function Wr(e, t) {
    return () => {
      let n = e.slideNodes()[e.previousScrollSnap()],
        r = e.slideNodes()[e.selectedScrollSnap()];
      r.classList.contains(t) &&
        (r
          .querySelector(".video-in-slideshow")
          .classList.toggle("video-in-slideshow--paused", !1),
        r.querySelector("video").play()),
        n.classList.contains("carousel__slide--video_slide") &&
          (n
            .querySelector(".video-in-slideshow")
            .classList.toggle("video-in-slideshow--paused", !0),
          n.querySelector("video").pause());
    };
  }
  function Xr(e) {
    return () => {
      let t = e.slideNodes()[e.previousScrollSnap()],
        n = e.slideNodes()[e.selectedScrollSnap()];
      n.classList.contains("carousel__slide--video") &&
        n.querySelector("video").play(),
        t.classList.contains("") && t.querySelector("video").pause();
    };
  }
  function Yr(e, t) {
    let n = !1;
    return function () {
      n ||
        (e.call(),
        (n = !0),
        setTimeout(() => {
          n = !1;
        }, t));
    };
  }
  function Ur() {
    let e = document.querySelectorAll("video[autoplay]");
    !e.length ||
      e.forEach((t) => {
        (t.paused || t.ended) && t.play();
      });
  }
  function Kr() {
    if (!document.querySelector(".pipedriveWebForms")) return;
    let t = document.createElement("script");
    (t.src = "https://webforms.pipedrive.com/f/loader"),
      (t.defer = !0),
      document.body.appendChild(t);
  }
  function Rt() {
    let e = [];
    for (let n = 1; n <= 10; n++) {
      let r = n / 10;
      e.push(r);
    }
    return e.push(0), e;
  }
  function Zr(e) {
    let n = ("; " + document.cookie).split("; " + e + "=");
    return n.length === 2 ? n.pop().split(";").shift() : "";
  }
  function Qr(e, t, n) {
    let r = JSON.stringify(t);
    document.cookie =
      e + "=" + r + ";path=/;expires=" + n + ";SameSite=Lax;Secure";
  }
  function Jr(e) {
    return (
      e !== null &&
      typeof e == "object" &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function jt(e = {}, t = {}) {
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : Jr(t[n]) &&
          Jr(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          jt(e[n], t[n]);
    });
  }
  var ei = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
      blur() {},
      nodeName: "",
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return {
        initEvent() {},
      };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName() {
          return [];
        },
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function ie() {
    let e = typeof document < "u" ? document : {};
    return jt(e, ei), e;
  }
  var yo = {
    document: ei,
    navigator: {
      userAgent: "",
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: {
      replaceState() {},
      pushState() {},
      go() {},
      back() {},
    },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        },
      };
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
      return {};
    },
    requestAnimationFrame(e) {
      return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame(e) {
      typeof setTimeout > "u" || clearTimeout(e);
    },
  };
  function J() {
    let e = typeof window < "u" ? window : {};
    return jt(e, yo), e;
  }
  function bo(e) {
    let t = e.__proto__;
    Object.defineProperty(e, "__proto__", {
      get() {
        return t;
      },
      set(n) {
        t.__proto__ = n;
      },
    });
  }
  var Be = class extends Array {
    constructor(t) {
      typeof t == "number" ? super(t) : (super(...(t || [])), bo(this));
    }
  };
  function ot(e = []) {
    let t = [];
    return (
      e.forEach((n) => {
        Array.isArray(n) ? t.push(...ot(n)) : t.push(n);
      }),
      t
    );
  }
  function ti(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function xo(e) {
    let t = [];
    for (let n = 0; n < e.length; n += 1)
      t.indexOf(e[n]) === -1 && t.push(e[n]);
    return t;
  }
  function Eo(e, t) {
    if (typeof e != "string") return [e];
    let n = [],
      r = t.querySelectorAll(e);
    for (let i = 0; i < r.length; i += 1) n.push(r[i]);
    return n;
  }
  function te(e, t) {
    let n = J(),
      r = ie(),
      i = [];
    if (!t && e instanceof Be) return e;
    if (!e) return new Be(i);
    if (typeof e == "string") {
      let a = e.trim();
      if (a.indexOf("<") >= 0 && a.indexOf(">") >= 0) {
        let c = "div";
        a.indexOf("<li") === 0 && (c = "ul"),
          a.indexOf("<tr") === 0 && (c = "tbody"),
          (a.indexOf("<td") === 0 || a.indexOf("<th") === 0) && (c = "tr"),
          a.indexOf("<tbody") === 0 && (c = "table"),
          a.indexOf("<option") === 0 && (c = "select");
        let u = r.createElement(c);
        u.innerHTML = a;
        for (let o = 0; o < u.childNodes.length; o += 1)
          i.push(u.childNodes[o]);
      } else i = Eo(e.trim(), t || r);
    } else if (e.nodeType || e === n || e === r) i.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof Be) return e;
      i = e;
    }
    return new Be(xo(i));
  }
  te.fn = Be.prototype;
  function ni(...e) {
    let t = ot(e.map((n) => n.split(" ")));
    return (
      this.forEach((n) => {
        n.classList.add(...t);
      }),
      this
    );
  }
  function ri(...e) {
    let t = ot(e.map((n) => n.split(" ")));
    return (
      this.forEach((n) => {
        n.classList.remove(...t);
      }),
      this
    );
  }
  function ii(...e) {
    let t = ot(e.map((n) => n.split(" ")));
    this.forEach((n) => {
      t.forEach((r) => {
        n.classList.toggle(r);
      });
    });
  }
  function ai(...e) {
    let t = ot(e.map((n) => n.split(" ")));
    return (
      ti(this, (n) => t.filter((r) => n.classList.contains(r)).length > 0)
        .length > 0
    );
  }
  function oi(e, t) {
    if (arguments.length === 1 && typeof e == "string")
      return this[0] ? this[0].getAttribute(e) : void 0;
    for (let n = 0; n < this.length; n += 1)
      if (arguments.length === 2) this[n].setAttribute(e, t);
      else for (let r in e) (this[n][r] = e[r]), this[n].setAttribute(r, e[r]);
    return this;
  }
  function si(e) {
    for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
    return this;
  }
  function li(e) {
    for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
    return this;
  }
  function ci(e) {
    for (let t = 0; t < this.length; t += 1)
      this[t].style.transitionDuration = typeof e != "string" ? `${e}ms` : e;
    return this;
  }
  function di(...e) {
    let [t, n, r, i] = e;
    typeof e[1] == "function" && (([t, r, i] = e), (n = void 0)), i || (i = !1);
    function a(d) {
      let l = d.target;
      if (!l) return;
      let s = d.target.dom7EventData || [];
      if ((s.indexOf(d) < 0 && s.unshift(d), te(l).is(n))) r.apply(l, s);
      else {
        let f = te(l).parents();
        for (let v = 0; v < f.length; v += 1)
          te(f[v]).is(n) && r.apply(f[v], s);
      }
    }
    function c(d) {
      let l = d && d.target ? d.target.dom7EventData || [] : [];
      l.indexOf(d) < 0 && l.unshift(d), r.apply(this, l);
    }
    let u = t.split(" "),
      o;
    for (let d = 0; d < this.length; d += 1) {
      let l = this[d];
      if (n)
        for (o = 0; o < u.length; o += 1) {
          let s = u[o];
          l.dom7LiveListeners || (l.dom7LiveListeners = {}),
            l.dom7LiveListeners[s] || (l.dom7LiveListeners[s] = []),
            l.dom7LiveListeners[s].push({
              listener: r,
              proxyListener: a,
            }),
            l.addEventListener(s, a, i);
        }
      else
        for (o = 0; o < u.length; o += 1) {
          let s = u[o];
          l.dom7Listeners || (l.dom7Listeners = {}),
            l.dom7Listeners[s] || (l.dom7Listeners[s] = []),
            l.dom7Listeners[s].push({
              listener: r,
              proxyListener: c,
            }),
            l.addEventListener(s, c, i);
        }
    }
    return this;
  }
  function ui(...e) {
    let [t, n, r, i] = e;
    typeof e[1] == "function" && (([t, r, i] = e), (n = void 0)), i || (i = !1);
    let a = t.split(" ");
    for (let c = 0; c < a.length; c += 1) {
      let u = a[c];
      for (let o = 0; o < this.length; o += 1) {
        let d = this[o],
          l;
        if (
          (!n && d.dom7Listeners
            ? (l = d.dom7Listeners[u])
            : n && d.dom7LiveListeners && (l = d.dom7LiveListeners[u]),
          l && l.length)
        )
          for (let s = l.length - 1; s >= 0; s -= 1) {
            let f = l[s];
            (r && f.listener === r) ||
            (r &&
              f.listener &&
              f.listener.dom7proxy &&
              f.listener.dom7proxy === r)
              ? (d.removeEventListener(u, f.proxyListener, i), l.splice(s, 1))
              : r ||
                (d.removeEventListener(u, f.proxyListener, i), l.splice(s, 1));
          }
      }
    }
    return this;
  }
  function fi(...e) {
    let t = J(),
      n = e[0].split(" "),
      r = e[1];
    for (let i = 0; i < n.length; i += 1) {
      let a = n[i];
      for (let c = 0; c < this.length; c += 1) {
        let u = this[c];
        if (t.CustomEvent) {
          let o = new t.CustomEvent(a, {
            detail: r,
            bubbles: !0,
            cancelable: !0,
          });
          (u.dom7EventData = e.filter((d, l) => l > 0)),
            u.dispatchEvent(o),
            (u.dom7EventData = []),
            delete u.dom7EventData;
        }
      }
    }
    return this;
  }
  function hi(e) {
    let t = this;
    function n(r) {
      r.target === this && (e.call(this, r), t.off("transitionend", n));
    }
    return e && t.on("transitionend", n), this;
  }
  function pi(e) {
    if (this.length > 0) {
      if (e) {
        let t = this.styles();
        return (
          this[0].offsetWidth +
          parseFloat(t.getPropertyValue("margin-right")) +
          parseFloat(t.getPropertyValue("margin-left"))
        );
      }
      return this[0].offsetWidth;
    }
    return null;
  }
  function mi(e) {
    if (this.length > 0) {
      if (e) {
        let t = this.styles();
        return (
          this[0].offsetHeight +
          parseFloat(t.getPropertyValue("margin-top")) +
          parseFloat(t.getPropertyValue("margin-bottom"))
        );
      }
      return this[0].offsetHeight;
    }
    return null;
  }
  function gi() {
    if (this.length > 0) {
      let e = J(),
        t = ie(),
        n = this[0],
        r = n.getBoundingClientRect(),
        i = t.body,
        a = n.clientTop || i.clientTop || 0,
        c = n.clientLeft || i.clientLeft || 0,
        u = n === e ? e.scrollY : n.scrollTop,
        o = n === e ? e.scrollX : n.scrollLeft;
      return {
        top: r.top + u - a,
        left: r.left + o - c,
      };
    }
    return null;
  }
  function vi() {
    let e = J();
    return this[0] ? e.getComputedStyle(this[0], null) : {};
  }
  function yi(e, t) {
    let n = J(),
      r;
    if (arguments.length === 1)
      if (typeof e == "string") {
        if (this[0])
          return n.getComputedStyle(this[0], null).getPropertyValue(e);
      } else {
        for (r = 0; r < this.length; r += 1)
          for (let i in e) this[r].style[i] = e[i];
        return this;
      }
    if (arguments.length === 2 && typeof e == "string") {
      for (r = 0; r < this.length; r += 1) this[r].style[e] = t;
      return this;
    }
    return this;
  }
  function bi(e) {
    return e
      ? (this.forEach((t, n) => {
          e.apply(t, [t, n]);
        }),
        this)
      : this;
  }
  function xi(e) {
    let t = ti(this, e);
    return te(t);
  }
  function Ei(e) {
    if (typeof e > "u") return this[0] ? this[0].innerHTML : null;
    for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
    return this;
  }
  function Si(e) {
    if (typeof e > "u") return this[0] ? this[0].textContent.trim() : null;
    for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
    return this;
  }
  function Ti(e) {
    let t = J(),
      n = ie(),
      r = this[0],
      i,
      a;
    if (!r || typeof e > "u") return !1;
    if (typeof e == "string") {
      if (r.matches) return r.matches(e);
      if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
      if (r.msMatchesSelector) return r.msMatchesSelector(e);
      for (i = te(e), a = 0; a < i.length; a += 1) if (i[a] === r) return !0;
      return !1;
    }
    if (e === n) return r === n;
    if (e === t) return r === t;
    if (e.nodeType || e instanceof Be) {
      for (i = e.nodeType ? [e] : e, a = 0; a < i.length; a += 1)
        if (i[a] === r) return !0;
      return !1;
    }
    return !1;
  }
  function Ci() {
    let e = this[0],
      t;
    if (e) {
      for (t = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (t += 1);
      return t;
    }
  }
  function $i(e) {
    if (typeof e > "u") return this;
    let t = this.length;
    if (e > t - 1) return te([]);
    if (e < 0) {
      let n = t + e;
      return n < 0 ? te([]) : te([this[n]]);
    }
    return te([this[e]]);
  }
  function Mi(...e) {
    let t,
      n = ie();
    for (let r = 0; r < e.length; r += 1) {
      t = e[r];
      for (let i = 0; i < this.length; i += 1)
        if (typeof t == "string") {
          let a = n.createElement("div");
          for (a.innerHTML = t; a.firstChild; )
            this[i].appendChild(a.firstChild);
        } else if (t instanceof Be)
          for (let a = 0; a < t.length; a += 1) this[i].appendChild(t[a]);
        else this[i].appendChild(t);
    }
    return this;
  }
  function ki(e) {
    let t = ie(),
      n,
      r;
    for (n = 0; n < this.length; n += 1)
      if (typeof e == "string") {
        let i = t.createElement("div");
        for (i.innerHTML = e, r = i.childNodes.length - 1; r >= 0; r -= 1)
          this[n].insertBefore(i.childNodes[r], this[n].childNodes[0]);
      } else if (e instanceof Be)
        for (r = 0; r < e.length; r += 1)
          this[n].insertBefore(e[r], this[n].childNodes[0]);
      else this[n].insertBefore(e, this[n].childNodes[0]);
    return this;
  }
  function Li(e) {
    return this.length > 0
      ? e
        ? this[0].nextElementSibling && te(this[0].nextElementSibling).is(e)
          ? te([this[0].nextElementSibling])
          : te([])
        : this[0].nextElementSibling
        ? te([this[0].nextElementSibling])
        : te([])
      : te([]);
  }
  function Pi(e) {
    let t = [],
      n = this[0];
    if (!n) return te([]);
    for (; n.nextElementSibling; ) {
      let r = n.nextElementSibling;
      e ? te(r).is(e) && t.push(r) : t.push(r), (n = r);
    }
    return te(t);
  }
  function wi(e) {
    if (this.length > 0) {
      let t = this[0];
      return e
        ? t.previousElementSibling && te(t.previousElementSibling).is(e)
          ? te([t.previousElementSibling])
          : te([])
        : t.previousElementSibling
        ? te([t.previousElementSibling])
        : te([]);
    }
    return te([]);
  }
  function _i(e) {
    let t = [],
      n = this[0];
    if (!n) return te([]);
    for (; n.previousElementSibling; ) {
      let r = n.previousElementSibling;
      e ? te(r).is(e) && t.push(r) : t.push(r), (n = r);
    }
    return te(t);
  }
  function Ii(e) {
    let t = [];
    for (let n = 0; n < this.length; n += 1)
      this[n].parentNode !== null &&
        (e
          ? te(this[n].parentNode).is(e) && t.push(this[n].parentNode)
          : t.push(this[n].parentNode));
    return te(t);
  }
  function Ai(e) {
    let t = [];
    for (let n = 0; n < this.length; n += 1) {
      let r = this[n].parentNode;
      for (; r; ) e ? te(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
    }
    return te(t);
  }
  function Oi(e) {
    let t = this;
    return typeof e > "u" ? te([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
  }
  function Di(e) {
    let t = [];
    for (let n = 0; n < this.length; n += 1) {
      let r = this[n].querySelectorAll(e);
      for (let i = 0; i < r.length; i += 1) t.push(r[i]);
    }
    return te(t);
  }
  function zi(e) {
    let t = [];
    for (let n = 0; n < this.length; n += 1) {
      let r = this[n].children;
      for (let i = 0; i < r.length; i += 1)
        (!e || te(r[i]).is(e)) && t.push(r[i]);
    }
    return te(t);
  }
  function Bi() {
    for (let e = 0; e < this.length; e += 1)
      this[e].parentNode && this[e].parentNode.removeChild(this[e]);
    return this;
  }
  var So = "resize scroll".split(" ");
  function he(e) {
    function t(...n) {
      if (typeof n[0] > "u") {
        for (let r = 0; r < this.length; r += 1)
          So.indexOf(e) < 0 &&
            (e in this[r] ? this[r][e]() : te(this[r]).trigger(e));
        return this;
      }
      return this.on(e, ...n);
    }
    return t;
  }
  var xs = he("click"),
    Es = he("blur"),
    Ss = he("focus"),
    Ts = he("focusin"),
    Cs = he("focusout"),
    $s = he("keyup"),
    Ms = he("keydown"),
    ks = he("keypress"),
    Ls = he("submit"),
    Ps = he("change"),
    ws = he("mousedown"),
    _s = he("mousemove"),
    Is = he("mouseup"),
    As = he("mouseenter"),
    Os = he("mouseleave"),
    Ds = he("mouseout"),
    zs = he("mouseover"),
    Bs = he("touchstart"),
    Ns = he("touchend"),
    Hs = he("touchmove"),
    qs = he("resize"),
    Rs = he("scroll");
  var Ni = {
    addClass: ni,
    removeClass: ri,
    hasClass: ai,
    toggleClass: ii,
    attr: oi,
    removeAttr: si,
    transform: li,
    transition: ci,
    on: di,
    off: ui,
    trigger: fi,
    transitionEnd: hi,
    outerWidth: pi,
    outerHeight: mi,
    styles: vi,
    offset: gi,
    css: yi,
    each: bi,
    html: Ei,
    text: Si,
    is: Ti,
    index: Ci,
    eq: $i,
    append: Mi,
    prepend: ki,
    next: Li,
    nextAll: Pi,
    prev: wi,
    prevAll: _i,
    parent: Ii,
    parents: Ai,
    closest: Oi,
    find: Di,
    children: zi,
    filter: xi,
    remove: Bi,
  };
  Object.keys(Ni).forEach((e) => {
    Object.defineProperty(te.fn, e, {
      value: Ni[e],
      writable: !0,
    });
  });
  var R = te;
  function Hi(e) {
    let t = e;
    Object.keys(t).forEach((n) => {
      try {
        t[n] = null;
      } catch {}
      try {
        delete t[n];
      } catch {}
    });
  }
  function $e(e, t = 0) {
    return setTimeout(e, t);
  }
  function Ee() {
    return Date.now();
  }
  function To(e) {
    let t = J(),
      n;
    return (
      t.getComputedStyle && (n = t.getComputedStyle(e, null)),
      !n && e.currentStyle && (n = e.currentStyle),
      n || (n = e.style),
      n
    );
  }
  function st(e, t = "x") {
    let n = J(),
      r,
      i,
      a,
      c = To(e, null);
    return (
      n.WebKitCSSMatrix
        ? ((i = c.transform || c.webkitTransform),
          i.split(",").length > 6 &&
            (i = i
              .split(", ")
              .map((u) => u.replace(",", "."))
              .join(", ")),
          (a = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
        : ((a =
            c.MozTransform ||
            c.OTransform ||
            c.MsTransform ||
            c.msTransform ||
            c.transform ||
            c
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (r = a.toString().split(","))),
      t === "x" &&
        (n.WebKitCSSMatrix
          ? (i = a.m41)
          : r.length === 16
          ? (i = parseFloat(r[12]))
          : (i = parseFloat(r[4]))),
      t === "y" &&
        (n.WebKitCSSMatrix
          ? (i = a.m42)
          : r.length === 16
          ? (i = parseFloat(r[13]))
          : (i = parseFloat(r[5]))),
      i || 0
    );
  }
  function tt(e) {
    return (
      typeof e == "object" &&
      e !== null &&
      e.constructor &&
      Object.prototype.toString.call(e).slice(8, -1) === "Object"
    );
  }
  function Co(e) {
    return typeof window < "u" && typeof window.HTMLElement < "u"
      ? e instanceof HTMLElement
      : e && (e.nodeType === 1 || e.nodeType === 11);
  }
  function Te(...e) {
    let t = Object(e[0]),
      n = ["__proto__", "constructor", "prototype"];
    for (let r = 1; r < e.length; r += 1) {
      let i = e[r];
      if (i != null && !Co(i)) {
        let a = Object.keys(Object(i)).filter((c) => n.indexOf(c) < 0);
        for (let c = 0, u = a.length; c < u; c += 1) {
          let o = a[c],
            d = Object.getOwnPropertyDescriptor(i, o);
          d !== void 0 &&
            d.enumerable &&
            (tt(t[o]) && tt(i[o])
              ? i[o].__swiper__
                ? (t[o] = i[o])
                : Te(t[o], i[o])
              : !tt(t[o]) && tt(i[o])
              ? ((t[o] = {}), i[o].__swiper__ ? (t[o] = i[o]) : Te(t[o], i[o]))
              : (t[o] = i[o]));
        }
      }
    }
    return t;
  }
  function Ue(e, t, n) {
    e.style.setProperty(t, n);
  }
  function gt({ swiper: e, targetPosition: t, side: n }) {
    let r = J(),
      i = -e.translate,
      a = null,
      c,
      u = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      r.cancelAnimationFrame(e.cssModeFrameID);
    let o = t > i ? "next" : "prev",
      d = (s, f) => (o === "next" && s >= f) || (o === "prev" && s <= f),
      l = () => {
        (c = new Date().getTime()), a === null && (a = c);
        let s = Math.max(Math.min((c - a) / u, 1), 0),
          f = 0.5 - Math.cos(s * Math.PI) / 2,
          v = i + f * (t - i);
        if (
          (d(v, t) && (v = t),
          e.wrapperEl.scrollTo({
            [n]: v,
          }),
          d(v, t))
        ) {
          (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({
                  [n]: v,
                });
            }),
            r.cancelAnimationFrame(e.cssModeFrameID);
          return;
        }
        e.cssModeFrameID = r.requestAnimationFrame(l);
      };
    l();
  }
  var Vt;
  function $o() {
    let e = J(),
      t = ie();
    return {
      smoothScroll:
        t.documentElement && "scrollBehavior" in t.documentElement.style,
      touch: !!(
        "ontouchstart" in e ||
        (e.DocumentTouch && t instanceof e.DocumentTouch)
      ),
      passiveListener: (function () {
        let r = !1;
        try {
          let i = Object.defineProperty({}, "passive", {
            get() {
              r = !0;
            },
          });
          e.addEventListener("testPassiveListener", null, i);
        } catch {}
        return r;
      })(),
      gestures: (function () {
        return "ongesturestart" in e;
      })(),
    };
  }
  function vt() {
    return Vt || (Vt = $o()), Vt;
  }
  var Ft;
  function Mo({ userAgent: e } = {}) {
    let t = vt(),
      n = J(),
      r = n.navigator.platform,
      i = e || n.navigator.userAgent,
      a = {
        ios: !1,
        android: !1,
      },
      c = n.screen.width,
      u = n.screen.height,
      o = i.match(/(Android);?[\s\/]+([\d.]+)?/),
      d = i.match(/(iPad).*OS\s([\d_]+)/),
      l = i.match(/(iPod)(.*OS\s([\d_]+))?/),
      s = !d && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
      f = r === "Win32",
      v = r === "MacIntel",
      g = [
        "1024x1366",
        "1366x1024",
        "834x1194",
        "1194x834",
        "834x1112",
        "1112x834",
        "768x1024",
        "1024x768",
        "820x1180",
        "1180x820",
        "810x1080",
        "1080x810",
      ];
    return (
      !d &&
        v &&
        t.touch &&
        g.indexOf(`${c}x${u}`) >= 0 &&
        ((d = i.match(/(Version)\/([\d.]+)/)),
        d || (d = [0, 1, "13_0_0"]),
        (v = !1)),
      o && !f && ((a.os = "android"), (a.android = !0)),
      (d || s || l) && ((a.os = "ios"), (a.ios = !0)),
      a
    );
  }
  function qi(e = {}) {
    return Ft || (Ft = Mo(e)), Ft;
  }
  var Gt;
  function ko() {
    let e = J();
    function t() {
      let n = e.navigator.userAgent.toLowerCase();
      return (
        n.indexOf("safari") >= 0 &&
        n.indexOf("chrome") < 0 &&
        n.indexOf("android") < 0
      );
    }
    return {
      isSafari: t(),
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        e.navigator.userAgent
      ),
    };
  }
  function Ri() {
    return Gt || (Gt = ko()), Gt;
  }
  function Wt({ swiper: e, on: t, emit: n }) {
    let r = J(),
      i = null,
      a = null,
      c = () => {
        !e || e.destroyed || !e.initialized || (n("beforeResize"), n("resize"));
      },
      u = () => {
        !e ||
          e.destroyed ||
          !e.initialized ||
          ((i = new ResizeObserver((l) => {
            a = r.requestAnimationFrame(() => {
              let { width: s, height: f } = e,
                v = s,
                g = f;
              l.forEach(({ contentBoxSize: h, contentRect: p, target: E }) => {
                (E && E !== e.el) ||
                  ((v = p ? p.width : (h[0] || h).inlineSize),
                  (g = p ? p.height : (h[0] || h).blockSize));
              }),
                (v !== s || g !== f) && c();
            });
          })),
          i.observe(e.el));
      },
      o = () => {
        a && r.cancelAnimationFrame(a),
          i && i.unobserve && e.el && (i.unobserve(e.el), (i = null));
      },
      d = () => {
        !e || e.destroyed || !e.initialized || n("orientationchange");
      };
    t("init", () => {
      if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
        u();
        return;
      }
      r.addEventListener("resize", c),
        r.addEventListener("orientationchange", d);
    }),
      t("destroy", () => {
        o(),
          r.removeEventListener("resize", c),
          r.removeEventListener("orientationchange", d);
      });
  }
  function Xt({ swiper: e, extendParams: t, on: n, emit: r }) {
    let i = [],
      a = J(),
      c = (d, l = {}) => {
        let s = a.MutationObserver || a.WebkitMutationObserver,
          f = new s((v) => {
            if (v.length === 1) {
              r("observerUpdate", v[0]);
              return;
            }
            let g = function () {
              r("observerUpdate", v[0]);
            };
            a.requestAnimationFrame
              ? a.requestAnimationFrame(g)
              : a.setTimeout(g, 0);
          });
        f.observe(d, {
          attributes: typeof l.attributes > "u" ? !0 : l.attributes,
          childList: typeof l.childList > "u" ? !0 : l.childList,
          characterData: typeof l.characterData > "u" ? !0 : l.characterData,
        }),
          i.push(f);
      },
      u = () => {
        if (!!e.params.observer) {
          if (e.params.observeParents) {
            let d = e.$el.parents();
            for (let l = 0; l < d.length; l += 1) c(d[l]);
          }
          c(e.$el[0], {
            childList: e.params.observeSlideChildren,
          }),
            c(e.$wrapperEl[0], {
              attributes: !1,
            });
        }
      },
      o = () => {
        i.forEach((d) => {
          d.disconnect();
        }),
          i.splice(0, i.length);
      };
    t({
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1,
    }),
      n("init", u),
      n("destroy", o);
  }
  var ji = {
    on(e, t, n) {
      let r = this;
      if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
      let i = n ? "unshift" : "push";
      return (
        e.split(" ").forEach((a) => {
          r.eventsListeners[a] || (r.eventsListeners[a] = []),
            r.eventsListeners[a][i](t);
        }),
        r
      );
    },
    once(e, t, n) {
      let r = this;
      if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
      function i(...a) {
        r.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(r, a);
      }
      return (i.__emitterProxy = t), r.on(e, i, n);
    },
    onAny(e, t) {
      let n = this;
      if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
      let r = t ? "unshift" : "push";
      return (
        n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
      );
    },
    offAny(e) {
      let t = this;
      if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
      let n = t.eventsAnyListeners.indexOf(e);
      return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
    },
    off(e, t) {
      let n = this;
      return (
        !n.eventsListeners ||
          n.destroyed ||
          !n.eventsListeners ||
          e.split(" ").forEach((r) => {
            typeof t > "u"
              ? (n.eventsListeners[r] = [])
              : n.eventsListeners[r] &&
                n.eventsListeners[r].forEach((i, a) => {
                  (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                    n.eventsListeners[r].splice(a, 1);
                });
          }),
        n
      );
    },
    emit(...e) {
      let t = this;
      if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
      let n, r, i;
      return (
        typeof e[0] == "string" || Array.isArray(e[0])
          ? ((n = e[0]), (r = e.slice(1, e.length)), (i = t))
          : ((n = e[0].events), (r = e[0].data), (i = e[0].context || t)),
        r.unshift(i),
        (Array.isArray(n) ? n : n.split(" ")).forEach((c) => {
          t.eventsAnyListeners &&
            t.eventsAnyListeners.length &&
            t.eventsAnyListeners.forEach((u) => {
              u.apply(i, [c, ...r]);
            }),
            t.eventsListeners &&
              t.eventsListeners[c] &&
              t.eventsListeners[c].forEach((u) => {
                u.apply(i, r);
              });
        }),
        t
      );
    },
  };
  function Yt() {
    let e = this,
      t,
      n,
      r = e.$el;
    typeof e.params.width < "u" && e.params.width !== null
      ? (t = e.params.width)
      : (t = r[0].clientWidth),
      typeof e.params.height < "u" && e.params.height !== null
        ? (n = e.params.height)
        : (n = r[0].clientHeight),
      !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
        ((t =
          t -
          parseInt(r.css("padding-left") || 0, 10) -
          parseInt(r.css("padding-right") || 0, 10)),
        (n =
          n -
          parseInt(r.css("padding-top") || 0, 10) -
          parseInt(r.css("padding-bottom") || 0, 10)),
        Number.isNaN(t) && (t = 0),
        Number.isNaN(n) && (n = 0),
        Object.assign(e, {
          width: t,
          height: n,
          size: e.isHorizontal() ? t : n,
        }));
  }
  function Ut() {
    let e = this;
    function t(z) {
      return e.isHorizontal()
        ? z
        : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom",
          }[z];
    }
    function n(z, k) {
      return parseFloat(z.getPropertyValue(t(k)) || 0);
    }
    let r = e.params,
      { $wrapperEl: i, size: a, rtlTranslate: c, wrongRTL: u } = e,
      o = e.virtual && r.virtual.enabled,
      d = o ? e.virtual.slides.length : e.slides.length,
      l = i.children(`.${e.params.slideClass}`),
      s = o ? e.virtual.slides.length : l.length,
      f = [],
      v = [],
      g = [],
      h = r.slidesOffsetBefore;
    typeof h == "function" && (h = r.slidesOffsetBefore.call(e));
    let p = r.slidesOffsetAfter;
    typeof p == "function" && (p = r.slidesOffsetAfter.call(e));
    let E = e.snapGrid.length,
      x = e.slidesGrid.length,
      m = r.spaceBetween,
      $ = -h,
      C = 0,
      I = 0;
    if (typeof a > "u") return;
    typeof m == "string" &&
      m.indexOf("%") >= 0 &&
      (m = (parseFloat(m.replace("%", "")) / 100) * a),
      (e.virtualSize = -m),
      c
        ? l.css({
            marginLeft: "",
            marginBottom: "",
            marginTop: "",
          })
        : l.css({
            marginRight: "",
            marginBottom: "",
            marginTop: "",
          }),
      r.centeredSlides &&
        r.cssMode &&
        (Ue(e.wrapperEl, "--swiper-centered-offset-before", ""),
        Ue(e.wrapperEl, "--swiper-centered-offset-after", ""));
    let _ = r.grid && r.grid.rows > 1 && e.grid;
    _ && e.grid.initSlides(s);
    let D,
      H =
        r.slidesPerView === "auto" &&
        r.breakpoints &&
        Object.keys(r.breakpoints).filter(
          (z) => typeof r.breakpoints[z].slidesPerView < "u"
        ).length > 0;
    for (let z = 0; z < s; z += 1) {
      D = 0;
      let k = l.eq(z);
      if ((_ && e.grid.updateSlide(z, k, s, t), k.css("display") !== "none")) {
        if (r.slidesPerView === "auto") {
          H && (l[z].style[t("width")] = "");
          let S = getComputedStyle(k[0]),
            L = k[0].style.transform,
            q = k[0].style.webkitTransform;
          if (
            (L && (k[0].style.transform = "none"),
            q && (k[0].style.webkitTransform = "none"),
            r.roundLengths)
          )
            D = e.isHorizontal() ? k.outerWidth(!0) : k.outerHeight(!0);
          else {
            let j = n(S, "width"),
              P = n(S, "padding-left"),
              N = n(S, "padding-right"),
              B = n(S, "margin-left"),
              W = n(S, "margin-right"),
              Y = S.getPropertyValue("box-sizing");
            if (Y && Y === "border-box") D = j + B + W;
            else {
              let { clientWidth: ae, offsetWidth: ve } = k[0];
              D = j + P + N + B + W + (ve - ae);
            }
          }
          L && (k[0].style.transform = L),
            q && (k[0].style.webkitTransform = q),
            r.roundLengths && (D = Math.floor(D));
        } else
          (D = (a - (r.slidesPerView - 1) * m) / r.slidesPerView),
            r.roundLengths && (D = Math.floor(D)),
            l[z] && (l[z].style[t("width")] = `${D}px`);
        l[z] && (l[z].swiperSlideSize = D),
          g.push(D),
          r.centeredSlides
            ? (($ = $ + D / 2 + C / 2 + m),
              C === 0 && z !== 0 && ($ = $ - a / 2 - m),
              z === 0 && ($ = $ - a / 2 - m),
              Math.abs($) < 1 / 1e3 && ($ = 0),
              r.roundLengths && ($ = Math.floor($)),
              I % r.slidesPerGroup === 0 && f.push($),
              v.push($))
            : (r.roundLengths && ($ = Math.floor($)),
              (I - Math.min(e.params.slidesPerGroupSkip, I)) %
                e.params.slidesPerGroup ===
                0 && f.push($),
              v.push($),
              ($ = $ + D + m)),
          (e.virtualSize += D + m),
          (C = D),
          (I += 1);
      }
    }
    if (
      ((e.virtualSize = Math.max(e.virtualSize, a) + p),
      c &&
        u &&
        (r.effect === "slide" || r.effect === "coverflow") &&
        i.css({
          width: `${e.virtualSize + r.spaceBetween}px`,
        }),
      r.setWrapperSize &&
        i.css({
          [t("width")]: `${e.virtualSize + r.spaceBetween}px`,
        }),
      _ && e.grid.updateWrapperSize(D, f, t),
      !r.centeredSlides)
    ) {
      let z = [];
      for (let k = 0; k < f.length; k += 1) {
        let S = f[k];
        r.roundLengths && (S = Math.floor(S)),
          f[k] <= e.virtualSize - a && z.push(S);
      }
      (f = z),
        Math.floor(e.virtualSize - a) - Math.floor(f[f.length - 1]) > 1 &&
          f.push(e.virtualSize - a);
    }
    if ((f.length === 0 && (f = [0]), r.spaceBetween !== 0)) {
      let z = e.isHorizontal() && c ? "marginLeft" : t("marginRight");
      l.filter((k, S) => (r.cssMode ? S !== l.length - 1 : !0)).css({
        [z]: `${m}px`,
      });
    }
    if (r.centeredSlides && r.centeredSlidesBounds) {
      let z = 0;
      g.forEach((S) => {
        z += S + (r.spaceBetween ? r.spaceBetween : 0);
      }),
        (z -= r.spaceBetween);
      let k = z - a;
      f = f.map((S) => (S < 0 ? -h : S > k ? k + p : S));
    }
    if (r.centerInsufficientSlides) {
      let z = 0;
      if (
        (g.forEach((k) => {
          z += k + (r.spaceBetween ? r.spaceBetween : 0);
        }),
        (z -= r.spaceBetween),
        z < a)
      ) {
        let k = (a - z) / 2;
        f.forEach((S, L) => {
          f[L] = S - k;
        }),
          v.forEach((S, L) => {
            v[L] = S + k;
          });
      }
    }
    if (
      (Object.assign(e, {
        slides: l,
        snapGrid: f,
        slidesGrid: v,
        slidesSizesGrid: g,
      }),
      r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
    ) {
      Ue(e.wrapperEl, "--swiper-centered-offset-before", `${-f[0]}px`),
        Ue(
          e.wrapperEl,
          "--swiper-centered-offset-after",
          `${e.size / 2 - g[g.length - 1] / 2}px`
        );
      let z = -e.snapGrid[0],
        k = -e.slidesGrid[0];
      (e.snapGrid = e.snapGrid.map((S) => S + z)),
        (e.slidesGrid = e.slidesGrid.map((S) => S + k));
    }
    if (
      (s !== d && e.emit("slidesLengthChange"),
      f.length !== E &&
        (e.params.watchOverflow && e.checkOverflow(),
        e.emit("snapGridLengthChange")),
      v.length !== x && e.emit("slidesGridLengthChange"),
      r.watchSlidesProgress && e.updateSlidesOffset(),
      !o && !r.cssMode && (r.effect === "slide" || r.effect === "fade"))
    ) {
      let z = `${r.containerModifierClass}backface-hidden`,
        k = e.$el.hasClass(z);
      s <= r.maxBackfaceHiddenSlides
        ? k || e.$el.addClass(z)
        : k && e.$el.removeClass(z);
    }
  }
  function Kt(e) {
    let t = this,
      n = [],
      r = t.virtual && t.params.virtual.enabled,
      i = 0,
      a;
    typeof e == "number"
      ? t.setTransition(e)
      : e === !0 && t.setTransition(t.params.speed);
    let c = (u) =>
      r
        ? t.slides.filter(
            (o) => parseInt(o.getAttribute("data-swiper-slide-index"), 10) === u
          )[0]
        : t.slides.eq(u)[0];
    if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
      if (t.params.centeredSlides)
        (t.visibleSlides || R([])).each((u) => {
          n.push(u);
        });
      else
        for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
          let u = t.activeIndex + a;
          if (u > t.slides.length && !r) break;
          n.push(c(u));
        }
    else n.push(c(t.activeIndex));
    for (a = 0; a < n.length; a += 1)
      if (typeof n[a] < "u") {
        let u = n[a].offsetHeight;
        i = u > i ? u : i;
      }
    (i || i === 0) && t.$wrapperEl.css("height", `${i}px`);
  }
  function Zt() {
    let e = this,
      t = e.slides;
    for (let n = 0; n < t.length; n += 1)
      t[n].swiperSlideOffset = e.isHorizontal()
        ? t[n].offsetLeft
        : t[n].offsetTop;
  }
  function Qt(e = (this && this.translate) || 0) {
    let t = this,
      n = t.params,
      { slides: r, rtlTranslate: i, snapGrid: a } = t;
    if (r.length === 0) return;
    typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
    let c = -e;
    i && (c = e),
      r.removeClass(n.slideVisibleClass),
      (t.visibleSlidesIndexes = []),
      (t.visibleSlides = []);
    for (let u = 0; u < r.length; u += 1) {
      let o = r[u],
        d = o.swiperSlideOffset;
      n.cssMode && n.centeredSlides && (d -= r[0].swiperSlideOffset);
      let l =
          (c + (n.centeredSlides ? t.minTranslate() : 0) - d) /
          (o.swiperSlideSize + n.spaceBetween),
        s =
          (c - a[0] + (n.centeredSlides ? t.minTranslate() : 0) - d) /
          (o.swiperSlideSize + n.spaceBetween),
        f = -(c - d),
        v = f + t.slidesSizesGrid[u];
      ((f >= 0 && f < t.size - 1) ||
        (v > 1 && v <= t.size) ||
        (f <= 0 && v >= t.size)) &&
        (t.visibleSlides.push(o),
        t.visibleSlidesIndexes.push(u),
        r.eq(u).addClass(n.slideVisibleClass)),
        (o.progress = i ? -l : l),
        (o.originalProgress = i ? -s : s);
    }
    t.visibleSlides = R(t.visibleSlides);
  }
  function Jt(e) {
    let t = this;
    if (typeof e > "u") {
      let d = t.rtlTranslate ? -1 : 1;
      e = (t && t.translate && t.translate * d) || 0;
    }
    let n = t.params,
      r = t.maxTranslate() - t.minTranslate(),
      { progress: i, isBeginning: a, isEnd: c } = t,
      u = a,
      o = c;
    r === 0
      ? ((i = 0), (a = !0), (c = !0))
      : ((i = (e - t.minTranslate()) / r), (a = i <= 0), (c = i >= 1)),
      Object.assign(t, {
        progress: i,
        isBeginning: a,
        isEnd: c,
      }),
      (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
        t.updateSlidesProgress(e),
      a && !u && t.emit("reachBeginning toEdge"),
      c && !o && t.emit("reachEnd toEdge"),
      ((u && !a) || (o && !c)) && t.emit("fromEdge"),
      t.emit("progress", i);
  }
  function en() {
    let e = this,
      { slides: t, params: n, $wrapperEl: r, activeIndex: i, realIndex: a } = e,
      c = e.virtual && n.virtual.enabled;
    t.removeClass(
      `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
    );
    let u;
    c
      ? (u = e.$wrapperEl.find(
          `.${n.slideClass}[data-swiper-slide-index="${i}"]`
        ))
      : (u = t.eq(i)),
      u.addClass(n.slideActiveClass),
      n.loop &&
        (u.hasClass(n.slideDuplicateClass)
          ? r
              .children(
                `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${a}"]`
              )
              .addClass(n.slideDuplicateActiveClass)
          : r
              .children(
                `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${a}"]`
              )
              .addClass(n.slideDuplicateActiveClass));
    let o = u.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
    n.loop && o.length === 0 && ((o = t.eq(0)), o.addClass(n.slideNextClass));
    let d = u.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
    n.loop && d.length === 0 && ((d = t.eq(-1)), d.addClass(n.slidePrevClass)),
      n.loop &&
        (o.hasClass(n.slideDuplicateClass)
          ? r
              .children(
                `.${n.slideClass}:not(.${
                  n.slideDuplicateClass
                })[data-swiper-slide-index="${o.attr(
                  "data-swiper-slide-index"
                )}"]`
              )
              .addClass(n.slideDuplicateNextClass)
          : r
              .children(
                `.${n.slideClass}.${
                  n.slideDuplicateClass
                }[data-swiper-slide-index="${o.attr(
                  "data-swiper-slide-index"
                )}"]`
              )
              .addClass(n.slideDuplicateNextClass),
        d.hasClass(n.slideDuplicateClass)
          ? r
              .children(
                `.${n.slideClass}:not(.${
                  n.slideDuplicateClass
                })[data-swiper-slide-index="${d.attr(
                  "data-swiper-slide-index"
                )}"]`
              )
              .addClass(n.slideDuplicatePrevClass)
          : r
              .children(
                `.${n.slideClass}.${
                  n.slideDuplicateClass
                }[data-swiper-slide-index="${d.attr(
                  "data-swiper-slide-index"
                )}"]`
              )
              .addClass(n.slideDuplicatePrevClass)),
      e.emitSlidesClasses();
  }
  function tn(e) {
    let t = this,
      n = t.rtlTranslate ? t.translate : -t.translate,
      {
        slidesGrid: r,
        snapGrid: i,
        params: a,
        activeIndex: c,
        realIndex: u,
        snapIndex: o,
      } = t,
      d = e,
      l;
    if (typeof d > "u") {
      for (let f = 0; f < r.length; f += 1)
        typeof r[f + 1] < "u"
          ? n >= r[f] && n < r[f + 1] - (r[f + 1] - r[f]) / 2
            ? (d = f)
            : n >= r[f] && n < r[f + 1] && (d = f + 1)
          : n >= r[f] && (d = f);
      a.normalizeSlideIndex && (d < 0 || typeof d > "u") && (d = 0);
    }
    if (i.indexOf(n) >= 0) l = i.indexOf(n);
    else {
      let f = Math.min(a.slidesPerGroupSkip, d);
      l = f + Math.floor((d - f) / a.slidesPerGroup);
    }
    if ((l >= i.length && (l = i.length - 1), d === c)) {
      l !== o && ((t.snapIndex = l), t.emit("snapIndexChange"));
      return;
    }
    let s = parseInt(t.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
    Object.assign(t, {
      snapIndex: l,
      realIndex: s,
      previousIndex: c,
      activeIndex: d,
    }),
      t.emit("activeIndexChange"),
      t.emit("snapIndexChange"),
      u !== s && t.emit("realIndexChange"),
      (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
  }
  function nn(e) {
    let t = this,
      n = t.params,
      r = R(e).closest(`.${n.slideClass}`)[0],
      i = !1,
      a;
    if (r) {
      for (let c = 0; c < t.slides.length; c += 1)
        if (t.slides[c] === r) {
          (i = !0), (a = c);
          break;
        }
    }
    if (r && i)
      (t.clickedSlide = r),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              R(r).attr("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = a);
    else {
      (t.clickedSlide = void 0), (t.clickedIndex = void 0);
      return;
    }
    n.slideToClickedSlide &&
      t.clickedIndex !== void 0 &&
      t.clickedIndex !== t.activeIndex &&
      t.slideToClickedSlide();
  }
  var Vi = {
    updateSize: Yt,
    updateSlides: Ut,
    updateAutoHeight: Kt,
    updateSlidesOffset: Zt,
    updateSlidesProgress: Qt,
    updateProgress: Jt,
    updateSlidesClasses: en,
    updateActiveIndex: tn,
    updateClickedSlide: nn,
  };
  function rn(e = this.isHorizontal() ? "x" : "y") {
    let t = this,
      { params: n, rtlTranslate: r, translate: i, $wrapperEl: a } = t;
    if (n.virtualTranslate) return r ? -i : i;
    if (n.cssMode) return i;
    let c = st(a[0], e);
    return r && (c = -c), c || 0;
  }
  function an(e, t) {
    let n = this,
      {
        rtlTranslate: r,
        params: i,
        $wrapperEl: a,
        wrapperEl: c,
        progress: u,
      } = n,
      o = 0,
      d = 0,
      l = 0;
    n.isHorizontal() ? (o = r ? -e : e) : (d = e),
      i.roundLengths && ((o = Math.floor(o)), (d = Math.floor(d))),
      i.cssMode
        ? (c[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
            ? -o
            : -d)
        : i.virtualTranslate ||
          a.transform(`translate3d(${o}px, ${d}px, ${l}px)`),
      (n.previousTranslate = n.translate),
      (n.translate = n.isHorizontal() ? o : d);
    let s,
      f = n.maxTranslate() - n.minTranslate();
    f === 0 ? (s = 0) : (s = (e - n.minTranslate()) / f),
      s !== u && n.updateProgress(e),
      n.emit("setTranslate", n.translate, t);
  }
  function on() {
    return -this.snapGrid[0];
  }
  function sn() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function ln(e = 0, t = this.params.speed, n = !0, r = !0, i) {
    let a = this,
      { params: c, wrapperEl: u } = a;
    if (a.animating && c.preventInteractionOnTransition) return !1;
    let o = a.minTranslate(),
      d = a.maxTranslate(),
      l;
    if (
      (r && e > o ? (l = o) : r && e < d ? (l = d) : (l = e),
      a.updateProgress(l),
      c.cssMode)
    ) {
      let s = a.isHorizontal();
      if (t === 0) u[s ? "scrollLeft" : "scrollTop"] = -l;
      else {
        if (!a.support.smoothScroll)
          return (
            gt({
              swiper: a,
              targetPosition: -l,
              side: s ? "left" : "top",
            }),
            !0
          );
        u.scrollTo({
          [s ? "left" : "top"]: -l,
          behavior: "smooth",
        });
      }
      return !0;
    }
    return (
      t === 0
        ? (a.setTransition(0),
          a.setTranslate(l),
          n && (a.emit("beforeTransitionStart", t, i), a.emit("transitionEnd")))
        : (a.setTransition(t),
          a.setTranslate(l),
          n &&
            (a.emit("beforeTransitionStart", t, i), a.emit("transitionStart")),
          a.animating ||
            ((a.animating = !0),
            a.onTranslateToWrapperTransitionEnd ||
              (a.onTranslateToWrapperTransitionEnd = function (f) {
                !a ||
                  a.destroyed ||
                  (f.target === this &&
                    (a.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      a.onTranslateToWrapperTransitionEnd
                    ),
                    a.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      a.onTranslateToWrapperTransitionEnd
                    ),
                    (a.onTranslateToWrapperTransitionEnd = null),
                    delete a.onTranslateToWrapperTransitionEnd,
                    n && a.emit("transitionEnd")));
              }),
            a.$wrapperEl[0].addEventListener(
              "transitionend",
              a.onTranslateToWrapperTransitionEnd
            ),
            a.$wrapperEl[0].addEventListener(
              "webkitTransitionEnd",
              a.onTranslateToWrapperTransitionEnd
            ))),
      !0
    );
  }
  var Fi = {
    getTranslate: rn,
    setTranslate: an,
    minTranslate: on,
    maxTranslate: sn,
    translateTo: ln,
  };
  function cn(e, t) {
    let n = this;
    n.params.cssMode || n.$wrapperEl.transition(e),
      n.emit("setTransition", e, t);
  }
  function lt({ swiper: e, runCallbacks: t, direction: n, step: r }) {
    let { activeIndex: i, previousIndex: a } = e,
      c = n;
    if (
      (c || (i > a ? (c = "next") : i < a ? (c = "prev") : (c = "reset")),
      e.emit(`transition${r}`),
      t && i !== a)
    ) {
      if (c === "reset") {
        e.emit(`slideResetTransition${r}`);
        return;
      }
      e.emit(`slideChangeTransition${r}`),
        c === "next"
          ? e.emit(`slideNextTransition${r}`)
          : e.emit(`slidePrevTransition${r}`);
    }
  }
  function dn(e = !0, t) {
    let n = this,
      { params: r } = n;
    r.cssMode ||
      (r.autoHeight && n.updateAutoHeight(),
      lt({
        swiper: n,
        runCallbacks: e,
        direction: t,
        step: "Start",
      }));
  }
  function un(e = !0, t) {
    let n = this,
      { params: r } = n;
    (n.animating = !1),
      !r.cssMode &&
        (n.setTransition(0),
        lt({
          swiper: n,
          runCallbacks: e,
          direction: t,
          step: "End",
        }));
  }
  var Gi = {
    setTransition: cn,
    transitionStart: dn,
    transitionEnd: un,
  };
  function fn(e = 0, t = this.params.speed, n = !0, r, i) {
    if (typeof e != "number" && typeof e != "string")
      throw new Error(
        `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
      );
    if (typeof e == "string") {
      let m = parseInt(e, 10);
      if (!isFinite(m))
        throw new Error(
          `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
        );
      e = m;
    }
    let a = this,
      c = e;
    c < 0 && (c = 0);
    let {
      params: u,
      snapGrid: o,
      slidesGrid: d,
      previousIndex: l,
      activeIndex: s,
      rtlTranslate: f,
      wrapperEl: v,
      enabled: g,
    } = a;
    if ((a.animating && u.preventInteractionOnTransition) || (!g && !r && !i))
      return !1;
    let h = Math.min(a.params.slidesPerGroupSkip, c),
      p = h + Math.floor((c - h) / a.params.slidesPerGroup);
    p >= o.length && (p = o.length - 1);
    let E = -o[p];
    if (u.normalizeSlideIndex)
      for (let m = 0; m < d.length; m += 1) {
        let $ = -Math.floor(E * 100),
          C = Math.floor(d[m] * 100),
          I = Math.floor(d[m + 1] * 100);
        typeof d[m + 1] < "u"
          ? $ >= C && $ < I - (I - C) / 2
            ? (c = m)
            : $ >= C && $ < I && (c = m + 1)
          : $ >= C && (c = m);
      }
    if (
      a.initialized &&
      c !== s &&
      ((!a.allowSlideNext && E < a.translate && E < a.minTranslate()) ||
        (!a.allowSlidePrev &&
          E > a.translate &&
          E > a.maxTranslate() &&
          (s || 0) !== c))
    )
      return !1;
    c !== (l || 0) && n && a.emit("beforeSlideChangeStart"),
      a.updateProgress(E);
    let x;
    if (
      (c > s ? (x = "next") : c < s ? (x = "prev") : (x = "reset"),
      (f && -E === a.translate) || (!f && E === a.translate))
    )
      return (
        a.updateActiveIndex(c),
        u.autoHeight && a.updateAutoHeight(),
        a.updateSlidesClasses(),
        u.effect !== "slide" && a.setTranslate(E),
        x !== "reset" && (a.transitionStart(n, x), a.transitionEnd(n, x)),
        !1
      );
    if (u.cssMode) {
      let m = a.isHorizontal(),
        $ = f ? E : -E;
      if (t === 0) {
        let C = a.virtual && a.params.virtual.enabled;
        C &&
          ((a.wrapperEl.style.scrollSnapType = "none"),
          (a._immediateVirtual = !0)),
          (v[m ? "scrollLeft" : "scrollTop"] = $),
          C &&
            requestAnimationFrame(() => {
              (a.wrapperEl.style.scrollSnapType = ""),
                (a._swiperImmediateVirtual = !1);
            });
      } else {
        if (!a.support.smoothScroll)
          return (
            gt({
              swiper: a,
              targetPosition: $,
              side: m ? "left" : "top",
            }),
            !0
          );
        v.scrollTo({
          [m ? "left" : "top"]: $,
          behavior: "smooth",
        });
      }
      return !0;
    }
    return (
      a.setTransition(t),
      a.setTranslate(E),
      a.updateActiveIndex(c),
      a.updateSlidesClasses(),
      a.emit("beforeTransitionStart", t, r),
      a.transitionStart(n, x),
      t === 0
        ? a.transitionEnd(n, x)
        : a.animating ||
          ((a.animating = !0),
          a.onSlideToWrapperTransitionEnd ||
            (a.onSlideToWrapperTransitionEnd = function ($) {
              !a ||
                a.destroyed ||
                ($.target === this &&
                  (a.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    a.onSlideToWrapperTransitionEnd
                  ),
                  a.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    a.onSlideToWrapperTransitionEnd
                  ),
                  (a.onSlideToWrapperTransitionEnd = null),
                  delete a.onSlideToWrapperTransitionEnd,
                  a.transitionEnd(n, x)));
            }),
          a.$wrapperEl[0].addEventListener(
            "transitionend",
            a.onSlideToWrapperTransitionEnd
          ),
          a.$wrapperEl[0].addEventListener(
            "webkitTransitionEnd",
            a.onSlideToWrapperTransitionEnd
          )),
      !0
    );
  }
  function hn(e = 0, t = this.params.speed, n = !0, r) {
    if (typeof e == "string") {
      let c = parseInt(e, 10);
      if (!isFinite(c))
        throw new Error(
          `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
        );
      e = c;
    }
    let i = this,
      a = e;
    return i.params.loop && (a += i.loopedSlides), i.slideTo(a, t, n, r);
  }
  function pn(e = this.params.speed, t = !0, n) {
    let r = this,
      { animating: i, enabled: a, params: c } = r;
    if (!a) return r;
    let u = c.slidesPerGroup;
    c.slidesPerView === "auto" &&
      c.slidesPerGroup === 1 &&
      c.slidesPerGroupAuto &&
      (u = Math.max(r.slidesPerViewDynamic("current", !0), 1));
    let o = r.activeIndex < c.slidesPerGroupSkip ? 1 : u;
    if (c.loop) {
      if (i && c.loopPreventsSlide) return !1;
      r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
    }
    return c.rewind && r.isEnd
      ? r.slideTo(0, e, t, n)
      : r.slideTo(r.activeIndex + o, e, t, n);
  }
  function mn(e = this.params.speed, t = !0, n) {
    let r = this,
      {
        params: i,
        animating: a,
        snapGrid: c,
        slidesGrid: u,
        rtlTranslate: o,
        enabled: d,
      } = r;
    if (!d) return r;
    if (i.loop) {
      if (a && i.loopPreventsSlide) return !1;
      r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
    }
    let l = o ? r.translate : -r.translate;
    function s(p) {
      return p < 0 ? -Math.floor(Math.abs(p)) : Math.floor(p);
    }
    let f = s(l),
      v = c.map((p) => s(p)),
      g = c[v.indexOf(f) - 1];
    if (typeof g > "u" && i.cssMode) {
      let p;
      c.forEach((E, x) => {
        f >= E && (p = x);
      }),
        typeof p < "u" && (g = c[p > 0 ? p - 1 : p]);
    }
    let h = 0;
    if (
      (typeof g < "u" &&
        ((h = u.indexOf(g)),
        h < 0 && (h = r.activeIndex - 1),
        i.slidesPerView === "auto" &&
          i.slidesPerGroup === 1 &&
          i.slidesPerGroupAuto &&
          ((h = h - r.slidesPerViewDynamic("previous", !0) + 1),
          (h = Math.max(h, 0)))),
      i.rewind && r.isBeginning)
    ) {
      let p =
        r.params.virtual && r.params.virtual.enabled && r.virtual
          ? r.virtual.slides.length - 1
          : r.slides.length - 1;
      return r.slideTo(p, e, t, n);
    }
    return r.slideTo(h, e, t, n);
  }
  function gn(e = this.params.speed, t = !0, n) {
    let r = this;
    return r.slideTo(r.activeIndex, e, t, n);
  }
  function vn(e = this.params.speed, t = !0, n, r = 0.5) {
    let i = this,
      a = i.activeIndex,
      c = Math.min(i.params.slidesPerGroupSkip, a),
      u = c + Math.floor((a - c) / i.params.slidesPerGroup),
      o = i.rtlTranslate ? i.translate : -i.translate;
    if (o >= i.snapGrid[u]) {
      let d = i.snapGrid[u],
        l = i.snapGrid[u + 1];
      o - d > (l - d) * r && (a += i.params.slidesPerGroup);
    } else {
      let d = i.snapGrid[u - 1],
        l = i.snapGrid[u];
      o - d <= (l - d) * r && (a -= i.params.slidesPerGroup);
    }
    return (
      (a = Math.max(a, 0)),
      (a = Math.min(a, i.slidesGrid.length - 1)),
      i.slideTo(a, e, t, n)
    );
  }
  function yn() {
    let e = this,
      { params: t, $wrapperEl: n } = e,
      r =
        t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView,
      i = e.clickedIndex,
      a;
    if (t.loop) {
      if (e.animating) return;
      (a = parseInt(R(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
        t.centeredSlides
          ? i < e.loopedSlides - r / 2 ||
            i > e.slides.length - e.loopedSlides + r / 2
            ? (e.loopFix(),
              (i = n
                .children(
                  `.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`
                )
                .eq(0)
                .index()),
              $e(() => {
                e.slideTo(i);
              }))
            : e.slideTo(i)
          : i > e.slides.length - r
          ? (e.loopFix(),
            (i = n
              .children(
                `.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`
              )
              .eq(0)
              .index()),
            $e(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i);
    } else e.slideTo(i);
  }
  var Wi = {
    slideTo: fn,
    slideToLoop: hn,
    slideNext: pn,
    slidePrev: mn,
    slideReset: gn,
    slideToClosest: vn,
    slideToClickedSlide: yn,
  };
  function bn() {
    let e = this,
      t = ie(),
      { params: n, $wrapperEl: r } = e,
      i = r.children().length > 0 ? R(r.children()[0].parentNode) : r;
    i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
    let a = i.children(`.${n.slideClass}`);
    if (n.loopFillGroupWithBlank) {
      let o = n.slidesPerGroup - (a.length % n.slidesPerGroup);
      if (o !== n.slidesPerGroup) {
        for (let d = 0; d < o; d += 1) {
          let l = R(t.createElement("div")).addClass(
            `${n.slideClass} ${n.slideBlankClass}`
          );
          i.append(l);
        }
        a = i.children(`.${n.slideClass}`);
      }
    }
    n.slidesPerView === "auto" &&
      !n.loopedSlides &&
      (n.loopedSlides = a.length),
      (e.loopedSlides = Math.ceil(
        parseFloat(n.loopedSlides || n.slidesPerView, 10)
      )),
      (e.loopedSlides += n.loopAdditionalSlides),
      e.loopedSlides > a.length &&
        e.params.loopedSlidesLimit &&
        (e.loopedSlides = a.length);
    let c = [],
      u = [];
    a.each((o, d) => {
      R(o).attr("data-swiper-slide-index", d);
    });
    for (let o = 0; o < e.loopedSlides; o += 1) {
      let d = o - Math.floor(o / a.length) * a.length;
      u.push(a.eq(d)[0]), c.unshift(a.eq(a.length - d - 1)[0]);
    }
    for (let o = 0; o < u.length; o += 1)
      i.append(R(u[o].cloneNode(!0)).addClass(n.slideDuplicateClass));
    for (let o = c.length - 1; o >= 0; o -= 1)
      i.prepend(R(c[o].cloneNode(!0)).addClass(n.slideDuplicateClass));
  }
  function xn() {
    let e = this;
    e.emit("beforeLoopFix");
    let {
        activeIndex: t,
        slides: n,
        loopedSlides: r,
        allowSlidePrev: i,
        allowSlideNext: a,
        snapGrid: c,
        rtlTranslate: u,
      } = e,
      o;
    (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
    let l = -c[t] - e.getTranslate();
    t < r
      ? ((o = n.length - r * 3 + t),
        (o += r),
        e.slideTo(o, 0, !1, !0) &&
          l !== 0 &&
          e.setTranslate((u ? -e.translate : e.translate) - l))
      : t >= n.length - r &&
        ((o = -n.length + t + r),
        (o += r),
        e.slideTo(o, 0, !1, !0) &&
          l !== 0 &&
          e.setTranslate((u ? -e.translate : e.translate) - l)),
      (e.allowSlidePrev = i),
      (e.allowSlideNext = a),
      e.emit("loopFix");
  }
  function En() {
    let e = this,
      { $wrapperEl: t, params: n, slides: r } = e;
    t
      .children(
        `.${n.slideClass}.${n.slideDuplicateClass},.${n.slideClass}.${n.slideBlankClass}`
      )
      .remove(),
      r.removeAttr("data-swiper-slide-index");
  }
  var Xi = {
    loopCreate: bn,
    loopFix: xn,
    loopDestroy: En,
  };
  function Sn(e) {
    let t = this;
    if (
      t.support.touch ||
      !t.params.simulateTouch ||
      (t.params.watchOverflow && t.isLocked) ||
      t.params.cssMode
    )
      return;
    let n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
    (n.style.cursor = "move"), (n.style.cursor = e ? "grabbing" : "grab");
  }
  function Tn() {
    let e = this;
    e.support.touch ||
      (e.params.watchOverflow && e.isLocked) ||
      e.params.cssMode ||
      (e[
        e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
      ].style.cursor = "");
  }
  var Yi = {
    setGrabCursor: Sn,
    unsetGrabCursor: Tn,
  };
  function Lo(e, t = this) {
    function n(r) {
      if (!r || r === ie() || r === J()) return null;
      r.assignedSlot && (r = r.assignedSlot);
      let i = r.closest(e);
      return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
    }
    return n(t);
  }
  function Cn(e) {
    let t = this,
      n = ie(),
      r = J(),
      i = t.touchEventsData,
      { params: a, touches: c, enabled: u } = t;
    if (!u || (t.animating && a.preventInteractionOnTransition)) return;
    !t.animating && a.cssMode && a.loop && t.loopFix();
    let o = e;
    o.originalEvent && (o = o.originalEvent);
    let d = R(o.target);
    if (
      (a.touchEventsTarget === "wrapper" && !d.closest(t.wrapperEl).length) ||
      ((i.isTouchEvent = o.type === "touchstart"),
      !i.isTouchEvent && "which" in o && o.which === 3) ||
      (!i.isTouchEvent && "button" in o && o.button > 0) ||
      (i.isTouched && i.isMoved)
    )
      return;
    let l = !!a.noSwipingClass && a.noSwipingClass !== "",
      s = e.composedPath ? e.composedPath() : e.path;
    l && o.target && o.target.shadowRoot && s && (d = R(s[0]));
    let f = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
      v = !!(o.target && o.target.shadowRoot);
    if (a.noSwiping && (v ? Lo(f, d[0]) : d.closest(f)[0])) {
      t.allowClick = !0;
      return;
    }
    if (a.swipeHandler && !d.closest(a.swipeHandler)[0]) return;
    (c.currentX = o.type === "touchstart" ? o.targetTouches[0].pageX : o.pageX),
      (c.currentY =
        o.type === "touchstart" ? o.targetTouches[0].pageY : o.pageY);
    let g = c.currentX,
      h = c.currentY,
      p = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
      E = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
    if (p && (g <= E || g >= r.innerWidth - E))
      if (p === "prevent") e.preventDefault();
      else return;
    if (
      (Object.assign(i, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
      (c.startX = g),
      (c.startY = h),
      (i.touchStartTime = Ee()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      a.threshold > 0 && (i.allowThresholdMove = !1),
      o.type !== "touchstart")
    ) {
      let x = !0;
      d.is(i.focusableElements) &&
        ((x = !1), d[0].nodeName === "SELECT" && (i.isTouched = !1)),
        n.activeElement &&
          R(n.activeElement).is(i.focusableElements) &&
          n.activeElement !== d[0] &&
          n.activeElement.blur();
      let m = x && t.allowTouchMove && a.touchStartPreventDefault;
      (a.touchStartForcePreventDefault || m) &&
        !d[0].isContentEditable &&
        o.preventDefault();
    }
    t.params.freeMode &&
      t.params.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !a.cssMode &&
      t.freeMode.onTouchStart(),
      t.emit("touchStart", o);
  }
  function $n(e) {
    let t = ie(),
      n = this,
      r = n.touchEventsData,
      { params: i, touches: a, rtlTranslate: c, enabled: u } = n;
    if (!u) return;
    let o = e;
    if ((o.originalEvent && (o = o.originalEvent), !r.isTouched)) {
      r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", o);
      return;
    }
    if (r.isTouchEvent && o.type !== "touchmove") return;
    let d =
        o.type === "touchmove" &&
        o.targetTouches &&
        (o.targetTouches[0] || o.changedTouches[0]),
      l = o.type === "touchmove" ? d.pageX : o.pageX,
      s = o.type === "touchmove" ? d.pageY : o.pageY;
    if (o.preventedByNestedSwiper) {
      (a.startX = l), (a.startY = s);
      return;
    }
    if (!n.allowTouchMove) {
      R(o.target).is(r.focusableElements) || (n.allowClick = !1),
        r.isTouched &&
          (Object.assign(a, {
            startX: l,
            startY: s,
            currentX: l,
            currentY: s,
          }),
          (r.touchStartTime = Ee()));
      return;
    }
    if (r.isTouchEvent && i.touchReleaseOnEdges && !i.loop) {
      if (n.isVertical()) {
        if (
          (s < a.startY && n.translate <= n.maxTranslate()) ||
          (s > a.startY && n.translate >= n.minTranslate())
        ) {
          (r.isTouched = !1), (r.isMoved = !1);
          return;
        }
      } else if (
        (l < a.startX && n.translate <= n.maxTranslate()) ||
        (l > a.startX && n.translate >= n.minTranslate())
      )
        return;
    }
    if (
      r.isTouchEvent &&
      t.activeElement &&
      o.target === t.activeElement &&
      R(o.target).is(r.focusableElements)
    ) {
      (r.isMoved = !0), (n.allowClick = !1);
      return;
    }
    if (
      (r.allowTouchCallbacks && n.emit("touchMove", o),
      o.targetTouches && o.targetTouches.length > 1)
    )
      return;
    (a.currentX = l), (a.currentY = s);
    let f = a.currentX - a.startX,
      v = a.currentY - a.startY;
    if (n.params.threshold && Math.sqrt(f ** 2 + v ** 2) < n.params.threshold)
      return;
    if (typeof r.isScrolling > "u") {
      let E;
      (n.isHorizontal() && a.currentY === a.startY) ||
      (n.isVertical() && a.currentX === a.startX)
        ? (r.isScrolling = !1)
        : f * f + v * v >= 25 &&
          ((E = (Math.atan2(Math.abs(v), Math.abs(f)) * 180) / Math.PI),
          (r.isScrolling = n.isHorizontal()
            ? E > i.touchAngle
            : 90 - E > i.touchAngle));
    }
    if (
      (r.isScrolling && n.emit("touchMoveOpposite", o),
      typeof r.startMoving > "u" &&
        (a.currentX !== a.startX || a.currentY !== a.startY) &&
        (r.startMoving = !0),
      r.isScrolling)
    ) {
      r.isTouched = !1;
      return;
    }
    if (!r.startMoving) return;
    (n.allowClick = !1),
      !i.cssMode && o.cancelable && o.preventDefault(),
      i.touchMoveStopPropagation && !i.nested && o.stopPropagation(),
      r.isMoved ||
        (i.loop && !i.cssMode && n.loopFix(),
        (r.startTranslate = n.getTranslate()),
        n.setTransition(0),
        n.animating &&
          n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        (r.allowMomentumBounce = !1),
        i.grabCursor &&
          (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
          n.setGrabCursor(!0),
        n.emit("sliderFirstMove", o)),
      n.emit("sliderMove", o),
      (r.isMoved = !0);
    let g = n.isHorizontal() ? f : v;
    (a.diff = g),
      (g *= i.touchRatio),
      c && (g = -g),
      (n.swipeDirection = g > 0 ? "prev" : "next"),
      (r.currentTranslate = g + r.startTranslate);
    let h = !0,
      p = i.resistanceRatio;
    if (
      (i.touchReleaseOnEdges && (p = 0),
      g > 0 && r.currentTranslate > n.minTranslate()
        ? ((h = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + g) ** p))
        : g < 0 &&
          r.currentTranslate < n.maxTranslate() &&
          ((h = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - g) ** p)),
      h && (o.preventedByNestedSwiper = !0),
      !n.allowSlideNext &&
        n.swipeDirection === "next" &&
        r.currentTranslate < r.startTranslate &&
        (r.currentTranslate = r.startTranslate),
      !n.allowSlidePrev &&
        n.swipeDirection === "prev" &&
        r.currentTranslate > r.startTranslate &&
        (r.currentTranslate = r.startTranslate),
      !n.allowSlidePrev &&
        !n.allowSlideNext &&
        (r.currentTranslate = r.startTranslate),
      i.threshold > 0)
    )
      if (Math.abs(g) > i.threshold || r.allowThresholdMove) {
        if (!r.allowThresholdMove) {
          (r.allowThresholdMove = !0),
            (a.startX = a.currentX),
            (a.startY = a.currentY),
            (r.currentTranslate = r.startTranslate),
            (a.diff = n.isHorizontal()
              ? a.currentX - a.startX
              : a.currentY - a.startY);
          return;
        }
      } else {
        r.currentTranslate = r.startTranslate;
        return;
      }
    !i.followFinger ||
      i.cssMode ||
      (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
        i.watchSlidesProgress) &&
        (n.updateActiveIndex(), n.updateSlidesClasses()),
      n.params.freeMode &&
        i.freeMode.enabled &&
        n.freeMode &&
        n.freeMode.onTouchMove(),
      n.updateProgress(r.currentTranslate),
      n.setTranslate(r.currentTranslate));
  }
  function Mn(e) {
    let t = this,
      n = t.touchEventsData,
      { params: r, touches: i, rtlTranslate: a, slidesGrid: c, enabled: u } = t;
    if (!u) return;
    let o = e;
    if (
      (o.originalEvent && (o = o.originalEvent),
      n.allowTouchCallbacks && t.emit("touchEnd", o),
      (n.allowTouchCallbacks = !1),
      !n.isTouched)
    ) {
      n.isMoved && r.grabCursor && t.setGrabCursor(!1),
        (n.isMoved = !1),
        (n.startMoving = !1);
      return;
    }
    r.grabCursor &&
      n.isMoved &&
      n.isTouched &&
      (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
      t.setGrabCursor(!1);
    let d = Ee(),
      l = d - n.touchStartTime;
    if (t.allowClick) {
      let x = o.path || (o.composedPath && o.composedPath());
      t.updateClickedSlide((x && x[0]) || o.target),
        t.emit("tap click", o),
        l < 300 &&
          d - n.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", o);
    }
    if (
      ((n.lastClickTime = Ee()),
      $e(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !n.isTouched ||
        !n.isMoved ||
        !t.swipeDirection ||
        i.diff === 0 ||
        n.currentTranslate === n.startTranslate)
    ) {
      (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
      return;
    }
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    let s;
    if (
      (r.followFinger
        ? (s = a ? t.translate : -t.translate)
        : (s = -n.currentTranslate),
      r.cssMode)
    )
      return;
    if (t.params.freeMode && r.freeMode.enabled) {
      t.freeMode.onTouchEnd({
        currentPos: s,
      });
      return;
    }
    let f = 0,
      v = t.slidesSizesGrid[0];
    for (
      let x = 0;
      x < c.length;
      x += x < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
    ) {
      let m = x < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
      typeof c[x + m] < "u"
        ? s >= c[x] && s < c[x + m] && ((f = x), (v = c[x + m] - c[x]))
        : s >= c[x] && ((f = x), (v = c[c.length - 1] - c[c.length - 2]));
    }
    let g = null,
      h = null;
    r.rewind &&
      (t.isBeginning
        ? (h =
            t.params.virtual && t.params.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (g = 0));
    let p = (s - c[f]) / v,
      E = f < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    if (l > r.longSwipesMs) {
      if (!r.longSwipes) {
        t.slideTo(t.activeIndex);
        return;
      }
      t.swipeDirection === "next" &&
        (p >= r.longSwipesRatio
          ? t.slideTo(r.rewind && t.isEnd ? g : f + E)
          : t.slideTo(f)),
        t.swipeDirection === "prev" &&
          (p > 1 - r.longSwipesRatio
            ? t.slideTo(f + E)
            : h !== null && p < 0 && Math.abs(p) > r.longSwipesRatio
            ? t.slideTo(h)
            : t.slideTo(f));
    } else {
      if (!r.shortSwipes) {
        t.slideTo(t.activeIndex);
        return;
      }
      t.navigation &&
      (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl)
        ? o.target === t.navigation.nextEl
          ? t.slideTo(f + E)
          : t.slideTo(f)
        : (t.swipeDirection === "next" && t.slideTo(g !== null ? g : f + E),
          t.swipeDirection === "prev" && t.slideTo(h !== null ? h : f));
    }
  }
  function yt() {
    let e = this,
      { params: t, el: n } = e;
    if (n && n.offsetWidth === 0) return;
    t.breakpoints && e.setBreakpoint();
    let { allowSlideNext: r, allowSlidePrev: i, snapGrid: a } = e;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses(),
      (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
      e.isEnd &&
      !e.isBeginning &&
      !e.params.centeredSlides
        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
      (e.allowSlidePrev = i),
      (e.allowSlideNext = r),
      e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
  }
  function kn(e) {
    let t = this;
    !t.enabled ||
      t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation()));
  }
  function Ln() {
    let e = this,
      { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
    if (!r) return;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      e.translate === 0 && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    let i,
      a = e.maxTranslate() - e.minTranslate();
    a === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / a),
      i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  var Ui = !1;
  function Po() {}
  var Ki = (e, t) => {
    let n = ie(),
      {
        params: r,
        touchEvents: i,
        el: a,
        wrapperEl: c,
        device: u,
        support: o,
      } = e,
      d = !!r.nested,
      l = t === "on" ? "addEventListener" : "removeEventListener",
      s = t;
    if (!o.touch)
      a[l](i.start, e.onTouchStart, !1),
        n[l](i.move, e.onTouchMove, d),
        n[l](i.end, e.onTouchEnd, !1);
    else {
      let f =
        i.start === "touchstart" && o.passiveListener && r.passiveListeners
          ? {
              passive: !0,
              capture: !1,
            }
          : !1;
      a[l](i.start, e.onTouchStart, f),
        a[l](
          i.move,
          e.onTouchMove,
          o.passiveListener
            ? {
                passive: !1,
                capture: d,
              }
            : d
        ),
        a[l](i.end, e.onTouchEnd, f),
        i.cancel && a[l](i.cancel, e.onTouchEnd, f);
    }
    (r.preventClicks || r.preventClicksPropagation) &&
      a[l]("click", e.onClick, !0),
      r.cssMode && c[l]("scroll", e.onScroll),
      r.updateOnWindowResize
        ? e[s](
            u.ios || u.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            yt,
            !0
          )
        : e[s]("observerUpdate", yt, !0);
  };
  function wo() {
    let e = this,
      t = ie(),
      { params: n, support: r } = e;
    (e.onTouchStart = Cn.bind(e)),
      (e.onTouchMove = $n.bind(e)),
      (e.onTouchEnd = Mn.bind(e)),
      n.cssMode && (e.onScroll = Ln.bind(e)),
      (e.onClick = kn.bind(e)),
      r.touch && !Ui && (t.addEventListener("touchstart", Po), (Ui = !0)),
      Ki(e, "on");
  }
  function _o() {
    Ki(this, "off");
  }
  var Zi = {
    attachEvents: wo,
    detachEvents: _o,
  };
  var Qi = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  function Pn() {
    let e = this,
      {
        activeIndex: t,
        initialized: n,
        loopedSlides: r = 0,
        params: i,
        $el: a,
      } = e,
      c = i.breakpoints;
    if (!c || (c && Object.keys(c).length === 0)) return;
    let u = e.getBreakpoint(c, e.params.breakpointsBase, e.el);
    if (!u || e.currentBreakpoint === u) return;
    let d = (u in c ? c[u] : void 0) || e.originalParams,
      l = Qi(e, i),
      s = Qi(e, d),
      f = i.enabled;
    l && !s
      ? (a.removeClass(
          `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
        ),
        e.emitContainerClasses())
      : !l &&
        s &&
        (a.addClass(`${i.containerModifierClass}grid`),
        ((d.grid.fill && d.grid.fill === "column") ||
          (!d.grid.fill && i.grid.fill === "column")) &&
          a.addClass(`${i.containerModifierClass}grid-column`),
        e.emitContainerClasses()),
      ["navigation", "pagination", "scrollbar"].forEach((p) => {
        let E = i[p] && i[p].enabled,
          x = d[p] && d[p].enabled;
        E && !x && e[p].disable(), !E && x && e[p].enable();
      });
    let v = d.direction && d.direction !== i.direction,
      g = i.loop && (d.slidesPerView !== i.slidesPerView || v);
    v && n && e.changeDirection(), Te(e.params, d);
    let h = e.params.enabled;
    Object.assign(e, {
      allowTouchMove: e.params.allowTouchMove,
      allowSlideNext: e.params.allowSlideNext,
      allowSlidePrev: e.params.allowSlidePrev,
    }),
      f && !h ? e.disable() : !f && h && e.enable(),
      (e.currentBreakpoint = u),
      e.emit("_beforeBreakpoint", d),
      g &&
        n &&
        (e.loopDestroy(),
        e.loopCreate(),
        e.updateSlides(),
        e.slideTo(t - r + e.loopedSlides, 0, !1)),
      e.emit("breakpoint", d);
  }
  function wn(e, t = "window", n) {
    if (!e || (t === "container" && !n)) return;
    let r = !1,
      i = J(),
      a = t === "window" ? i.innerHeight : n.clientHeight,
      c = Object.keys(e).map((u) => {
        if (typeof u == "string" && u.indexOf("@") === 0) {
          let o = parseFloat(u.substr(1));
          return {
            value: a * o,
            point: u,
          };
        }
        return {
          value: u,
          point: u,
        };
      });
    c.sort((u, o) => parseInt(u.value, 10) - parseInt(o.value, 10));
    for (let u = 0; u < c.length; u += 1) {
      let { point: o, value: d } = c[u];
      t === "window"
        ? i.matchMedia(`(min-width: ${d}px)`).matches && (r = o)
        : d <= n.clientWidth && (r = o);
    }
    return r || "max";
  }
  var Ji = {
    setBreakpoint: Pn,
    getBreakpoint: wn,
  };
  function Io(e, t) {
    let n = [];
    return (
      e.forEach((r) => {
        typeof r == "object"
          ? Object.keys(r).forEach((i) => {
              r[i] && n.push(t + i);
            })
          : typeof r == "string" && n.push(t + r);
      }),
      n
    );
  }
  function _n() {
    let e = this,
      { classNames: t, params: n, rtl: r, $el: i, device: a, support: c } = e,
      u = Io(
        [
          "initialized",
          n.direction,
          {
            "pointer-events": !c.touch,
          },
          {
            "free-mode": e.params.freeMode && n.freeMode.enabled,
          },
          {
            autoheight: n.autoHeight,
          },
          {
            rtl: r,
          },
          {
            grid: n.grid && n.grid.rows > 1,
          },
          {
            "grid-column":
              n.grid && n.grid.rows > 1 && n.grid.fill === "column",
          },
          {
            android: a.android,
          },
          {
            ios: a.ios,
          },
          {
            "css-mode": n.cssMode,
          },
          {
            centered: n.cssMode && n.centeredSlides,
          },
          {
            "watch-progress": n.watchSlidesProgress,
          },
        ],
        n.containerModifierClass
      );
    t.push(...u), i.addClass([...t].join(" ")), e.emitContainerClasses();
  }
  function In() {
    let e = this,
      { $el: t, classNames: n } = e;
    t.removeClass(n.join(" ")), e.emitContainerClasses();
  }
  var ea = {
    addClasses: _n,
    removeClasses: In,
  };
  function An(e, t, n, r, i, a) {
    let c = J(),
      u;
    function o() {
      a && a();
    }
    !R(e).parent("picture")[0] && (!e.complete || !i) && t
      ? ((u = new c.Image()),
        (u.onload = o),
        (u.onerror = o),
        r && (u.sizes = r),
        n && (u.srcset = n),
        t && (u.src = t))
      : o();
  }
  function On() {
    let e = this;
    e.imagesToLoad = e.$el.find("img");
    function t() {
      typeof e > "u" ||
        e === null ||
        !e ||
        e.destroyed ||
        (e.imagesLoaded !== void 0 && (e.imagesLoaded += 1),
        e.imagesLoaded === e.imagesToLoad.length &&
          (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
    }
    for (let n = 0; n < e.imagesToLoad.length; n += 1) {
      let r = e.imagesToLoad[n];
      e.loadImage(
        r,
        r.currentSrc || r.getAttribute("src"),
        r.srcset || r.getAttribute("srcset"),
        r.sizes || r.getAttribute("sizes"),
        !0,
        t
      );
    }
  }
  var ta = {
    loadImage: An,
    preloadImages: On,
  };
  function Ao() {
    let e = this,
      { isLocked: t, params: n } = e,
      { slidesOffsetBefore: r } = n;
    if (r) {
      let i = e.slides.length - 1,
        a = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
      e.isLocked = e.size > a;
    } else e.isLocked = e.snapGrid.length === 1;
    n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
      n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
      t && t !== e.isLocked && (e.isEnd = !1),
      t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
  }
  var na = {
    checkOverflow: Ao,
  };
  var Dn = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopedSlidesLimit: !0,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function zn(e, t) {
    return function (r = {}) {
      let i = Object.keys(r)[0],
        a = r[i];
      if (typeof a != "object" || a === null) {
        Te(t, r);
        return;
      }
      if (
        (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
          e[i] === !0 &&
          (e[i] = {
            auto: !0,
          }),
        !(i in e && "enabled" in a))
      ) {
        Te(t, r);
        return;
      }
      e[i] === !0 &&
        (e[i] = {
          enabled: !0,
        }),
        typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
        e[i] ||
          (e[i] = {
            enabled: !1,
          }),
        Te(t, r);
    };
  }
  var Bn = {
      eventsEmitter: ji,
      update: Vi,
      translate: Fi,
      transition: Gi,
      slide: Wi,
      loop: Xi,
      grabCursor: Yi,
      events: Zi,
      breakpoints: Ji,
      checkOverflow: na,
      classes: ea,
      images: ta,
    },
    Nn = {},
    Me = class {
      constructor(...t) {
        let n, r;
        if (
          (t.length === 1 &&
          t[0].constructor &&
          Object.prototype.toString.call(t[0]).slice(8, -1) === "Object"
            ? (r = t[0])
            : ([n, r] = t),
          r || (r = {}),
          (r = Te({}, r)),
          n && !r.el && (r.el = n),
          r.el && R(r.el).length > 1)
        ) {
          let u = [];
          return (
            R(r.el).each((o) => {
              let d = Te({}, r, {
                el: o,
              });
              u.push(new Me(d));
            }),
            u
          );
        }
        let i = this;
        (i.__swiper__ = !0),
          (i.support = vt()),
          (i.device = qi({
            userAgent: r.userAgent,
          })),
          (i.browser = Ri()),
          (i.eventsListeners = {}),
          (i.eventsAnyListeners = []),
          (i.modules = [...i.__modules__]),
          r.modules && Array.isArray(r.modules) && i.modules.push(...r.modules);
        let a = {};
        i.modules.forEach((u) => {
          u({
            swiper: i,
            extendParams: zn(r, a),
            on: i.on.bind(i),
            once: i.once.bind(i),
            off: i.off.bind(i),
            emit: i.emit.bind(i),
          });
        });
        let c = Te({}, Dn, a);
        return (
          (i.params = Te({}, c, Nn, r)),
          (i.originalParams = Te({}, i.params)),
          (i.passedParams = Te({}, r)),
          i.params &&
            i.params.on &&
            Object.keys(i.params.on).forEach((u) => {
              i.on(u, i.params.on[u]);
            }),
          i.params && i.params.onAny && i.onAny(i.params.onAny),
          (i.$ = R),
          Object.assign(i, {
            enabled: i.params.enabled,
            el: n,
            classNames: [],
            slides: R(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
              return i.params.direction === "horizontal";
            },
            isVertical() {
              return i.params.direction === "vertical";
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: i.params.allowSlideNext,
            allowSlidePrev: i.params.allowSlidePrev,
            touchEvents: (function () {
              let o = ["touchstart", "touchmove", "touchend", "touchcancel"],
                d = ["pointerdown", "pointermove", "pointerup"];
              return (
                (i.touchEventsTouch = {
                  start: o[0],
                  move: o[1],
                  end: o[2],
                  cancel: o[3],
                }),
                (i.touchEventsDesktop = {
                  start: d[0],
                  move: d[1],
                  end: d[2],
                }),
                i.support.touch || !i.params.simulateTouch
                  ? i.touchEventsTouch
                  : i.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: i.params.focusableElements,
              lastClickTime: Ee(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: i.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          i.emit("_swiper"),
          i.params.init && i.init(),
          i
        );
      }
      enable() {
        let t = this;
        t.enabled ||
          ((t.enabled = !0),
          t.params.grabCursor && t.setGrabCursor(),
          t.emit("enable"));
      }
      disable() {
        let t = this;
        !t.enabled ||
          ((t.enabled = !1),
          t.params.grabCursor && t.unsetGrabCursor(),
          t.emit("disable"));
      }
      setProgress(t, n) {
        let r = this;
        t = Math.min(Math.max(t, 0), 1);
        let i = r.minTranslate(),
          c = (r.maxTranslate() - i) * t + i;
        r.translateTo(c, typeof n > "u" ? 0 : n),
          r.updateActiveIndex(),
          r.updateSlidesClasses();
      }
      emitContainerClasses() {
        let t = this;
        if (!t.params._emitClasses || !t.el) return;
        let n = t.el.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper") === 0 ||
              r.indexOf(t.params.containerModifierClass) === 0
          );
        t.emit("_containerClasses", n.join(" "));
      }
      getSlideClasses(t) {
        let n = this;
        return n.destroyed
          ? ""
          : t.className
              .split(" ")
              .filter(
                (r) =>
                  r.indexOf("swiper-slide") === 0 ||
                  r.indexOf(n.params.slideClass) === 0
              )
              .join(" ");
      }
      emitSlidesClasses() {
        let t = this;
        if (!t.params._emitClasses || !t.el) return;
        let n = [];
        t.slides.each((r) => {
          let i = t.getSlideClasses(r);
          n.push({
            slideEl: r,
            classNames: i,
          }),
            t.emit("_slideClass", r, i);
        }),
          t.emit("_slideClasses", n);
      }
      slidesPerViewDynamic(t = "current", n = !1) {
        let r = this,
          {
            params: i,
            slides: a,
            slidesGrid: c,
            slidesSizesGrid: u,
            size: o,
            activeIndex: d,
          } = r,
          l = 1;
        if (i.centeredSlides) {
          let s = a[d].swiperSlideSize,
            f;
          for (let v = d + 1; v < a.length; v += 1)
            a[v] &&
              !f &&
              ((s += a[v].swiperSlideSize), (l += 1), s > o && (f = !0));
          for (let v = d - 1; v >= 0; v -= 1)
            a[v] &&
              !f &&
              ((s += a[v].swiperSlideSize), (l += 1), s > o && (f = !0));
        } else if (t === "current")
          for (let s = d + 1; s < a.length; s += 1)
            (n ? c[s] + u[s] - c[d] < o : c[s] - c[d] < o) && (l += 1);
        else for (let s = d - 1; s >= 0; s -= 1) c[d] - c[s] < o && (l += 1);
        return l;
      }
      update() {
        let t = this;
        if (!t || t.destroyed) return;
        let { snapGrid: n, params: r } = t;
        r.breakpoints && t.setBreakpoint(),
          t.updateSize(),
          t.updateSlides(),
          t.updateProgress(),
          t.updateSlidesClasses();
        function i() {
          let c = t.rtlTranslate ? t.translate * -1 : t.translate,
            u = Math.min(Math.max(c, t.maxTranslate()), t.minTranslate());
          t.setTranslate(u), t.updateActiveIndex(), t.updateSlidesClasses();
        }
        let a;
        t.params.freeMode && t.params.freeMode.enabled
          ? (i(), t.params.autoHeight && t.updateAutoHeight())
          : ((t.params.slidesPerView === "auto" ||
              t.params.slidesPerView > 1) &&
            t.isEnd &&
            !t.params.centeredSlides
              ? (a = t.slideTo(t.slides.length - 1, 0, !1, !0))
              : (a = t.slideTo(t.activeIndex, 0, !1, !0)),
            a || i()),
          r.watchOverflow && n !== t.snapGrid && t.checkOverflow(),
          t.emit("update");
      }
      changeDirection(t, n = !0) {
        let r = this,
          i = r.params.direction;
        return (
          t || (t = i === "horizontal" ? "vertical" : "horizontal"),
          t === i ||
            (t !== "horizontal" && t !== "vertical") ||
            (r.$el
              .removeClass(`${r.params.containerModifierClass}${i}`)
              .addClass(`${r.params.containerModifierClass}${t}`),
            r.emitContainerClasses(),
            (r.params.direction = t),
            r.slides.each((a) => {
              t === "vertical" ? (a.style.width = "") : (a.style.height = "");
            }),
            r.emit("changeDirection"),
            n && r.update()),
          r
        );
      }
      changeLanguageDirection(t) {
        let n = this;
        (n.rtl && t === "rtl") ||
          (!n.rtl && t === "ltr") ||
          ((n.rtl = t === "rtl"),
          (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
          n.rtl
            ? (n.$el.addClass(`${n.params.containerModifierClass}rtl`),
              (n.el.dir = "rtl"))
            : (n.$el.removeClass(`${n.params.containerModifierClass}rtl`),
              (n.el.dir = "ltr")),
          n.update());
      }
      mount(t) {
        let n = this;
        if (n.mounted) return !0;
        let r = R(t || n.params.el);
        if (((t = r[0]), !t)) return !1;
        t.swiper = n;
        let i = () =>
            `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`,
          c = (() => {
            if (t && t.shadowRoot && t.shadowRoot.querySelector) {
              let u = R(t.shadowRoot.querySelector(i()));
              return (u.children = (o) => r.children(o)), u;
            }
            return r.children ? r.children(i()) : R(r).children(i());
          })();
        if (c.length === 0 && n.params.createElements) {
          let o = ie().createElement("div");
          (c = R(o)),
            (o.className = n.params.wrapperClass),
            r.append(o),
            r.children(`.${n.params.slideClass}`).each((d) => {
              c.append(d);
            });
        }
        return (
          Object.assign(n, {
            $el: r,
            el: t,
            $wrapperEl: c,
            wrapperEl: c[0],
            mounted: !0,
            rtl: t.dir.toLowerCase() === "rtl" || r.css("direction") === "rtl",
            rtlTranslate:
              n.params.direction === "horizontal" &&
              (t.dir.toLowerCase() === "rtl" || r.css("direction") === "rtl"),
            wrongRTL: c.css("display") === "-webkit-box",
          }),
          !0
        );
      }
      init(t) {
        let n = this;
        return (
          n.initialized ||
            n.mount(t) === !1 ||
            (n.emit("beforeInit"),
            n.params.breakpoints && n.setBreakpoint(),
            n.addClasses(),
            n.params.loop && n.loopCreate(),
            n.updateSize(),
            n.updateSlides(),
            n.params.watchOverflow && n.checkOverflow(),
            n.params.grabCursor && n.enabled && n.setGrabCursor(),
            n.params.preloadImages && n.preloadImages(),
            n.params.loop
              ? n.slideTo(
                  n.params.initialSlide + n.loopedSlides,
                  0,
                  n.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : n.slideTo(
                  n.params.initialSlide,
                  0,
                  n.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            n.attachEvents(),
            (n.initialized = !0),
            n.emit("init"),
            n.emit("afterInit")),
          n
        );
      }
      destroy(t = !0, n = !0) {
        let r = this,
          { params: i, $el: a, $wrapperEl: c, slides: u } = r;
        return (
          typeof r.params > "u" ||
            r.destroyed ||
            (r.emit("beforeDestroy"),
            (r.initialized = !1),
            r.detachEvents(),
            i.loop && r.loopDestroy(),
            n &&
              (r.removeClasses(),
              a.removeAttr("style"),
              c.removeAttr("style"),
              u &&
                u.length &&
                u
                  .removeClass(
                    [
                      i.slideVisibleClass,
                      i.slideActiveClass,
                      i.slideNextClass,
                      i.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            r.emit("destroy"),
            Object.keys(r.eventsListeners).forEach((o) => {
              r.off(o);
            }),
            t !== !1 && ((r.$el[0].swiper = null), Hi(r)),
            (r.destroyed = !0)),
          null
        );
      }
      static extendDefaults(t) {
        Te(Nn, t);
      }
      static get extendedDefaults() {
        return Nn;
      }
      static get defaults() {
        return Dn;
      }
      static installModule(t) {
        Me.prototype.__modules__ || (Me.prototype.__modules__ = []);
        let n = Me.prototype.__modules__;
        typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
      }
      static use(t) {
        return Array.isArray(t)
          ? (t.forEach((n) => Me.installModule(n)), Me)
          : (Me.installModule(t), Me);
      }
    };
  Object.keys(Bn).forEach((e) => {
    Object.keys(Bn[e]).forEach((t) => {
      Me.prototype[t] = Bn[e][t];
    });
  });
  Me.use([Wt, Xt]);
  var nt = Me;
  function Hn({ swiper: e, extendParams: t, on: n, emit: r }) {
    t({
      virtual: {
        enabled: !1,
        slides: [],
        cache: !0,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: !0,
        addSlidesBefore: 0,
        addSlidesAfter: 0,
      },
    });
    let i;
    e.virtual = {
      cache: {},
      from: void 0,
      to: void 0,
      slides: [],
      offset: 0,
      slidesGrid: [],
    };
    function a(s, f) {
      let v = e.params.virtual;
      if (v.cache && e.virtual.cache[f]) return e.virtual.cache[f];
      let g = v.renderSlide
        ? R(v.renderSlide.call(e, s, f))
        : R(
            `<div class="${e.params.slideClass}" data-swiper-slide-index="${f}">${s}</div>`
          );
      return (
        g.attr("data-swiper-slide-index") ||
          g.attr("data-swiper-slide-index", f),
        v.cache && (e.virtual.cache[f] = g),
        g
      );
    }
    function c(s) {
      let { slidesPerView: f, slidesPerGroup: v, centeredSlides: g } = e.params,
        { addSlidesBefore: h, addSlidesAfter: p } = e.params.virtual,
        { from: E, to: x, slides: m, slidesGrid: $, offset: C } = e.virtual;
      e.params.cssMode || e.updateActiveIndex();
      let I = e.activeIndex || 0,
        _;
      e.rtlTranslate ? (_ = "right") : (_ = e.isHorizontal() ? "left" : "top");
      let D, H;
      g
        ? ((D = Math.floor(f / 2) + v + p), (H = Math.floor(f / 2) + v + h))
        : ((D = f + (v - 1) + p), (H = v + h));
      let z = Math.max((I || 0) - H, 0),
        k = Math.min((I || 0) + D, m.length - 1),
        S = (e.slidesGrid[z] || 0) - (e.slidesGrid[0] || 0);
      Object.assign(e.virtual, {
        from: z,
        to: k,
        offset: S,
        slidesGrid: e.slidesGrid,
      });
      function L() {
        e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.lazy && e.params.lazy.enabled && e.lazy.load(),
          r("virtualUpdate");
      }
      if (E === z && x === k && !s) {
        e.slidesGrid !== $ && S !== C && e.slides.css(_, `${S}px`),
          e.updateProgress(),
          r("virtualUpdate");
        return;
      }
      if (e.params.virtual.renderExternal) {
        e.params.virtual.renderExternal.call(e, {
          offset: S,
          from: z,
          to: k,
          slides: (function () {
            let N = [];
            for (let B = z; B <= k; B += 1) N.push(m[B]);
            return N;
          })(),
        }),
          e.params.virtual.renderExternalUpdate ? L() : r("virtualUpdate");
        return;
      }
      let q = [],
        j = [];
      if (s) e.$wrapperEl.find(`.${e.params.slideClass}`).remove();
      else
        for (let P = E; P <= x; P += 1)
          (P < z || P > k) &&
            e.$wrapperEl
              .find(`.${e.params.slideClass}[data-swiper-slide-index="${P}"]`)
              .remove();
      for (let P = 0; P < m.length; P += 1)
        P >= z &&
          P <= k &&
          (typeof x > "u" || s
            ? j.push(P)
            : (P > x && j.push(P), P < E && q.push(P)));
      j.forEach((P) => {
        e.$wrapperEl.append(a(m[P], P));
      }),
        q
          .sort((P, N) => N - P)
          .forEach((P) => {
            e.$wrapperEl.prepend(a(m[P], P));
          }),
        e.$wrapperEl.children(".swiper-slide").css(_, `${S}px`),
        L();
    }
    function u(s) {
      if (typeof s == "object" && "length" in s)
        for (let f = 0; f < s.length; f += 1)
          s[f] && e.virtual.slides.push(s[f]);
      else e.virtual.slides.push(s);
      c(!0);
    }
    function o(s) {
      let f = e.activeIndex,
        v = f + 1,
        g = 1;
      if (Array.isArray(s)) {
        for (let h = 0; h < s.length; h += 1)
          s[h] && e.virtual.slides.unshift(s[h]);
        (v = f + s.length), (g = s.length);
      } else e.virtual.slides.unshift(s);
      if (e.params.virtual.cache) {
        let h = e.virtual.cache,
          p = {};
        Object.keys(h).forEach((E) => {
          let x = h[E],
            m = x.attr("data-swiper-slide-index");
          m && x.attr("data-swiper-slide-index", parseInt(m, 10) + g),
            (p[parseInt(E, 10) + g] = x);
        }),
          (e.virtual.cache = p);
      }
      c(!0), e.slideTo(v, 0);
    }
    function d(s) {
      if (typeof s > "u" || s === null) return;
      let f = e.activeIndex;
      if (Array.isArray(s))
        for (let v = s.length - 1; v >= 0; v -= 1)
          e.virtual.slides.splice(s[v], 1),
            e.params.virtual.cache && delete e.virtual.cache[s[v]],
            s[v] < f && (f -= 1),
            (f = Math.max(f, 0));
      else
        e.virtual.slides.splice(s, 1),
          e.params.virtual.cache && delete e.virtual.cache[s],
          s < f && (f -= 1),
          (f = Math.max(f, 0));
      c(!0), e.slideTo(f, 0);
    }
    function l() {
      (e.virtual.slides = []),
        e.params.virtual.cache && (e.virtual.cache = {}),
        c(!0),
        e.slideTo(0, 0);
    }
    n("beforeInit", () => {
      !e.params.virtual.enabled ||
        ((e.virtual.slides = e.params.virtual.slides),
        e.classNames.push(`${e.params.containerModifierClass}virtual`),
        (e.params.watchSlidesProgress = !0),
        (e.originalParams.watchSlidesProgress = !0),
        e.params.initialSlide || c());
    }),
      n("setTranslate", () => {
        !e.params.virtual.enabled ||
          (e.params.cssMode && !e._immediateVirtual
            ? (clearTimeout(i),
              (i = setTimeout(() => {
                c();
              }, 100)))
            : c());
      }),
      n("init update resize", () => {
        !e.params.virtual.enabled ||
          (e.params.cssMode &&
            Ue(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`));
      }),
      Object.assign(e.virtual, {
        appendSlide: u,
        prependSlide: o,
        removeSlide: d,
        removeAllSlides: l,
        update: c,
      });
  }
  function qn({ swiper: e, extendParams: t, on: n, emit: r }) {
    let i = ie(),
      a = J();
    (e.keyboard = {
      enabled: !1,
    }),
      t({
        keyboard: {
          enabled: !1,
          onlyInViewport: !0,
          pageUpDown: !0,
        },
      });
    function c(d) {
      if (!e.enabled) return;
      let { rtlTranslate: l } = e,
        s = d;
      s.originalEvent && (s = s.originalEvent);
      let f = s.keyCode || s.charCode,
        v = e.params.keyboard.pageUpDown,
        g = v && f === 33,
        h = v && f === 34,
        p = f === 37,
        E = f === 39,
        x = f === 38,
        m = f === 40;
      if (
        (!e.allowSlideNext &&
          ((e.isHorizontal() && E) || (e.isVertical() && m) || h)) ||
        (!e.allowSlidePrev &&
          ((e.isHorizontal() && p) || (e.isVertical() && x) || g))
      )
        return !1;
      if (
        !(s.shiftKey || s.altKey || s.ctrlKey || s.metaKey) &&
        !(
          i.activeElement &&
          i.activeElement.nodeName &&
          (i.activeElement.nodeName.toLowerCase() === "input" ||
            i.activeElement.nodeName.toLowerCase() === "textarea")
        )
      ) {
        if (e.params.keyboard.onlyInViewport && (g || h || p || E || x || m)) {
          let $ = !1;
          if (
            e.$el.parents(`.${e.params.slideClass}`).length > 0 &&
            e.$el.parents(`.${e.params.slideActiveClass}`).length === 0
          )
            return;
          let C = e.$el,
            I = C[0].clientWidth,
            _ = C[0].clientHeight,
            D = a.innerWidth,
            H = a.innerHeight,
            z = e.$el.offset();
          l && (z.left -= e.$el[0].scrollLeft);
          let k = [
            [z.left, z.top],
            [z.left + I, z.top],
            [z.left, z.top + _],
            [z.left + I, z.top + _],
          ];
          for (let S = 0; S < k.length; S += 1) {
            let L = k[S];
            if (L[0] >= 0 && L[0] <= D && L[1] >= 0 && L[1] <= H) {
              if (L[0] === 0 && L[1] === 0) continue;
              $ = !0;
            }
          }
          if (!$) return;
        }
        e.isHorizontal()
          ? ((g || h || p || E) &&
              (s.preventDefault ? s.preventDefault() : (s.returnValue = !1)),
            (((h || E) && !l) || ((g || p) && l)) && e.slideNext(),
            (((g || p) && !l) || ((h || E) && l)) && e.slidePrev())
          : ((g || h || x || m) &&
              (s.preventDefault ? s.preventDefault() : (s.returnValue = !1)),
            (h || m) && e.slideNext(),
            (g || x) && e.slidePrev()),
          r("keyPress", f);
      }
    }
    function u() {
      e.keyboard.enabled || (R(i).on("keydown", c), (e.keyboard.enabled = !0));
    }
    function o() {
      !e.keyboard.enabled ||
        (R(i).off("keydown", c), (e.keyboard.enabled = !1));
    }
    n("init", () => {
      e.params.keyboard.enabled && u();
    }),
      n("destroy", () => {
        e.keyboard.enabled && o();
      }),
      Object.assign(e.keyboard, {
        enable: u,
        disable: o,
      });
  }
  function Rn({ swiper: e, extendParams: t, on: n, emit: r }) {
    let i = J();
    t({
      mousewheel: {
        enabled: !1,
        releaseOnEdges: !1,
        invert: !1,
        forceToAxis: !1,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null,
      },
    }),
      (e.mousewheel = {
        enabled: !1,
      });
    let a,
      c = Ee(),
      u,
      o = [];
    function d(x) {
      let I = 0,
        _ = 0,
        D = 0,
        H = 0;
      return (
        "detail" in x && (_ = x.detail),
        "wheelDelta" in x && (_ = -x.wheelDelta / 120),
        "wheelDeltaY" in x && (_ = -x.wheelDeltaY / 120),
        "wheelDeltaX" in x && (I = -x.wheelDeltaX / 120),
        "axis" in x && x.axis === x.HORIZONTAL_AXIS && ((I = _), (_ = 0)),
        (D = I * 10),
        (H = _ * 10),
        "deltaY" in x && (H = x.deltaY),
        "deltaX" in x && (D = x.deltaX),
        x.shiftKey && !D && ((D = H), (H = 0)),
        (D || H) &&
          x.deltaMode &&
          (x.deltaMode === 1
            ? ((D *= 40), (H *= 40))
            : ((D *= 800), (H *= 800))),
        D && !I && (I = D < 1 ? -1 : 1),
        H && !_ && (_ = H < 1 ? -1 : 1),
        {
          spinX: I,
          spinY: _,
          pixelX: D,
          pixelY: H,
        }
      );
    }
    function l() {
      !e.enabled || (e.mouseEntered = !0);
    }
    function s() {
      !e.enabled || (e.mouseEntered = !1);
    }
    function f(x) {
      return (e.params.mousewheel.thresholdDelta &&
        x.delta < e.params.mousewheel.thresholdDelta) ||
        (e.params.mousewheel.thresholdTime &&
          Ee() - c < e.params.mousewheel.thresholdTime)
        ? !1
        : x.delta >= 6 && Ee() - c < 60
        ? !0
        : (x.direction < 0
            ? (!e.isEnd || e.params.loop) &&
              !e.animating &&
              (e.slideNext(), r("scroll", x.raw))
            : (!e.isBeginning || e.params.loop) &&
              !e.animating &&
              (e.slidePrev(), r("scroll", x.raw)),
          (c = new i.Date().getTime()),
          !1);
    }
    function v(x) {
      let m = e.params.mousewheel;
      if (x.direction < 0) {
        if (e.isEnd && !e.params.loop && m.releaseOnEdges) return !0;
      } else if (e.isBeginning && !e.params.loop && m.releaseOnEdges) return !0;
      return !1;
    }
    function g(x) {
      let m = x,
        $ = !0;
      if (!e.enabled) return;
      let C = e.params.mousewheel;
      e.params.cssMode && m.preventDefault();
      let I = e.$el;
      if (
        (e.params.mousewheel.eventsTarget !== "container" &&
          (I = R(e.params.mousewheel.eventsTarget)),
        !e.mouseEntered && !I[0].contains(m.target) && !C.releaseOnEdges)
      )
        return !0;
      m.originalEvent && (m = m.originalEvent);
      let _ = 0,
        D = e.rtlTranslate ? -1 : 1,
        H = d(m);
      if (C.forceToAxis)
        if (e.isHorizontal())
          if (Math.abs(H.pixelX) > Math.abs(H.pixelY)) _ = -H.pixelX * D;
          else return !0;
        else if (Math.abs(H.pixelY) > Math.abs(H.pixelX)) _ = -H.pixelY;
        else return !0;
      else
        _ = Math.abs(H.pixelX) > Math.abs(H.pixelY) ? -H.pixelX * D : -H.pixelY;
      if (_ === 0) return !0;
      C.invert && (_ = -_);
      let z = e.getTranslate() + _ * C.sensitivity;
      if (
        (z >= e.minTranslate() && (z = e.minTranslate()),
        z <= e.maxTranslate() && (z = e.maxTranslate()),
        ($ = e.params.loop
          ? !0
          : !(z === e.minTranslate() || z === e.maxTranslate())),
        $ && e.params.nested && m.stopPropagation(),
        !e.params.freeMode || !e.params.freeMode.enabled)
      ) {
        let k = {
          time: Ee(),
          delta: Math.abs(_),
          direction: Math.sign(_),
          raw: x,
        };
        o.length >= 2 && o.shift();
        let S = o.length ? o[o.length - 1] : void 0;
        if (
          (o.push(k),
          S
            ? (k.direction !== S.direction ||
                k.delta > S.delta ||
                k.time > S.time + 150) &&
              f(k)
            : f(k),
          v(k))
        )
          return !0;
      } else {
        let k = {
            time: Ee(),
            delta: Math.abs(_),
            direction: Math.sign(_),
          },
          S =
            u &&
            k.time < u.time + 500 &&
            k.delta <= u.delta &&
            k.direction === u.direction;
        if (!S) {
          (u = void 0), e.params.loop && e.loopFix();
          let L = e.getTranslate() + _ * C.sensitivity,
            q = e.isBeginning,
            j = e.isEnd;
          if (
            (L >= e.minTranslate() && (L = e.minTranslate()),
            L <= e.maxTranslate() && (L = e.maxTranslate()),
            e.setTransition(0),
            e.setTranslate(L),
            e.updateProgress(),
            e.updateActiveIndex(),
            e.updateSlidesClasses(),
            ((!q && e.isBeginning) || (!j && e.isEnd)) &&
              e.updateSlidesClasses(),
            e.params.freeMode.sticky)
          ) {
            clearTimeout(a), (a = void 0), o.length >= 15 && o.shift();
            let P = o.length ? o[o.length - 1] : void 0,
              N = o[0];
            if (
              (o.push(k),
              P && (k.delta > P.delta || k.direction !== P.direction))
            )
              o.splice(0);
            else if (
              o.length >= 15 &&
              k.time - N.time < 500 &&
              N.delta - k.delta >= 1 &&
              k.delta <= 6
            ) {
              let B = _ > 0 ? 0.8 : 0.2;
              (u = k),
                o.splice(0),
                (a = $e(() => {
                  e.slideToClosest(e.params.speed, !0, void 0, B);
                }, 0));
            }
            a ||
              (a = $e(() => {
                (u = k),
                  o.splice(0),
                  e.slideToClosest(e.params.speed, !0, void 0, 0.5);
              }, 500));
          }
          if (
            (S || r("scroll", m),
            e.params.autoplay &&
              e.params.autoplayDisableOnInteraction &&
              e.autoplay.stop(),
            L === e.minTranslate() || L === e.maxTranslate())
          )
            return !0;
        }
      }
      return m.preventDefault ? m.preventDefault() : (m.returnValue = !1), !1;
    }
    function h(x) {
      let m = e.$el;
      e.params.mousewheel.eventsTarget !== "container" &&
        (m = R(e.params.mousewheel.eventsTarget)),
        m[x]("mouseenter", l),
        m[x]("mouseleave", s),
        m[x]("wheel", g);
    }
    function p() {
      return e.params.cssMode
        ? (e.wrapperEl.removeEventListener("wheel", g), !0)
        : e.mousewheel.enabled
        ? !1
        : (h("on"), (e.mousewheel.enabled = !0), !0);
    }
    function E() {
      return e.params.cssMode
        ? (e.wrapperEl.addEventListener(event, g), !0)
        : e.mousewheel.enabled
        ? (h("off"), (e.mousewheel.enabled = !1), !0)
        : !1;
    }
    n("init", () => {
      !e.params.mousewheel.enabled && e.params.cssMode && E(),
        e.params.mousewheel.enabled && p();
    }),
      n("destroy", () => {
        e.params.cssMode && p(), e.mousewheel.enabled && E();
      }),
      Object.assign(e.mousewheel, {
        enable: p,
        disable: E,
      });
  }
  function Ke(e, t, n, r) {
    let i = ie();
    return (
      e.params.createElements &&
        Object.keys(r).forEach((a) => {
          if (!n[a] && n.auto === !0) {
            let c = e.$el.children(`.${r[a]}`)[0];
            c ||
              ((c = i.createElement("div")),
              (c.className = r[a]),
              e.$el.append(c)),
              (n[a] = c),
              (t[a] = c);
          }
        }),
      n
    );
  }
  function jn({ swiper: e, extendParams: t, on: n, emit: r }) {
    t({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled",
      },
    }),
      (e.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null,
      });
    function i(v) {
      let g;
      return (
        v &&
          ((g = R(v)),
          e.params.uniqueNavElements &&
            typeof v == "string" &&
            g.length > 1 &&
            e.$el.find(v).length === 1 &&
            (g = e.$el.find(v))),
        g
      );
    }
    function a(v, g) {
      let h = e.params.navigation;
      v &&
        v.length > 0 &&
        (v[g ? "addClass" : "removeClass"](h.disabledClass),
        v[0] && v[0].tagName === "BUTTON" && (v[0].disabled = g),
        e.params.watchOverflow &&
          e.enabled &&
          v[e.isLocked ? "addClass" : "removeClass"](h.lockClass));
    }
    function c() {
      if (e.params.loop) return;
      let { $nextEl: v, $prevEl: g } = e.navigation;
      a(g, e.isBeginning && !e.params.rewind),
        a(v, e.isEnd && !e.params.rewind);
    }
    function u(v) {
      v.preventDefault(),
        !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
          (e.slidePrev(), r("navigationPrev"));
    }
    function o(v) {
      v.preventDefault(),
        !(e.isEnd && !e.params.loop && !e.params.rewind) &&
          (e.slideNext(), r("navigationNext"));
    }
    function d() {
      let v = e.params.navigation;
      if (
        ((e.params.navigation = Ke(
          e,
          e.originalParams.navigation,
          e.params.navigation,
          {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev",
          }
        )),
        !(v.nextEl || v.prevEl))
      )
        return;
      let g = i(v.nextEl),
        h = i(v.prevEl);
      g && g.length > 0 && g.on("click", o),
        h && h.length > 0 && h.on("click", u),
        Object.assign(e.navigation, {
          $nextEl: g,
          nextEl: g && g[0],
          $prevEl: h,
          prevEl: h && h[0],
        }),
        e.enabled ||
          (g && g.addClass(v.lockClass), h && h.addClass(v.lockClass));
    }
    function l() {
      let { $nextEl: v, $prevEl: g } = e.navigation;
      v &&
        v.length &&
        (v.off("click", o), v.removeClass(e.params.navigation.disabledClass)),
        g &&
          g.length &&
          (g.off("click", u), g.removeClass(e.params.navigation.disabledClass));
    }
    n("init", () => {
      e.params.navigation.enabled === !1 ? f() : (d(), c());
    }),
      n("toEdge fromEdge lock unlock", () => {
        c();
      }),
      n("destroy", () => {
        l();
      }),
      n("enable disable", () => {
        let { $nextEl: v, $prevEl: g } = e.navigation;
        v &&
          v[e.enabled ? "removeClass" : "addClass"](
            e.params.navigation.lockClass
          ),
          g &&
            g[e.enabled ? "removeClass" : "addClass"](
              e.params.navigation.lockClass
            );
      }),
      n("click", (v, g) => {
        let { $nextEl: h, $prevEl: p } = e.navigation,
          E = g.target;
        if (e.params.navigation.hideOnClick && !R(E).is(p) && !R(E).is(h)) {
          if (
            e.pagination &&
            e.params.pagination &&
            e.params.pagination.clickable &&
            (e.pagination.el === E || e.pagination.el.contains(E))
          )
            return;
          let x;
          h
            ? (x = h.hasClass(e.params.navigation.hiddenClass))
            : p && (x = p.hasClass(e.params.navigation.hiddenClass)),
            r(x === !0 ? "navigationShow" : "navigationHide"),
            h && h.toggleClass(e.params.navigation.hiddenClass),
            p && p.toggleClass(e.params.navigation.hiddenClass);
        }
      });
    let s = () => {
        e.$el.removeClass(e.params.navigation.navigationDisabledClass),
          d(),
          c();
      },
      f = () => {
        e.$el.addClass(e.params.navigation.navigationDisabledClass), l();
      };
    Object.assign(e.navigation, {
      enable: s,
      disable: f,
      update: c,
      init: d,
      destroy: l,
    });
  }
  function Le(e = "") {
    return `.${e
      .trim()
      .replace(/([\.:!\/])/g, "\\$1")
      .replace(/ /g, ".")}`;
  }
  function Vn({ swiper: e, extendParams: t, on: n, emit: r }) {
    let i = "swiper-pagination";
    t({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: (h) => h,
        formatFractionTotal: (h) => h,
        bulletClass: `${i}-bullet`,
        bulletActiveClass: `${i}-bullet-active`,
        modifierClass: `${i}-`,
        currentClass: `${i}-current`,
        totalClass: `${i}-total`,
        hiddenClass: `${i}-hidden`,
        progressbarFillClass: `${i}-progressbar-fill`,
        progressbarOppositeClass: `${i}-progressbar-opposite`,
        clickableClass: `${i}-clickable`,
        lockClass: `${i}-lock`,
        horizontalClass: `${i}-horizontal`,
        verticalClass: `${i}-vertical`,
        paginationDisabledClass: `${i}-disabled`,
      },
    }),
      (e.pagination = {
        el: null,
        $el: null,
        bullets: [],
      });
    let a,
      c = 0;
    function u() {
      return (
        !e.params.pagination.el ||
        !e.pagination.el ||
        !e.pagination.$el ||
        e.pagination.$el.length === 0
      );
    }
    function o(h, p) {
      let { bulletActiveClass: E } = e.params.pagination;
      h[p]().addClass(`${E}-${p}`)[p]().addClass(`${E}-${p}-${p}`);
    }
    function d() {
      let h = e.rtl,
        p = e.params.pagination;
      if (u()) return;
      let E =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        x = e.pagination.$el,
        m,
        $ = e.params.loop
          ? Math.ceil((E - e.loopedSlides * 2) / e.params.slidesPerGroup)
          : e.snapGrid.length;
      if (
        (e.params.loop
          ? ((m = Math.ceil(
              (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
            )),
            m > E - 1 - e.loopedSlides * 2 && (m -= E - e.loopedSlides * 2),
            m > $ - 1 && (m -= $),
            m < 0 && e.params.paginationType !== "bullets" && (m = $ + m))
          : typeof e.snapIndex < "u"
          ? (m = e.snapIndex)
          : (m = e.activeIndex || 0),
        p.type === "bullets" &&
          e.pagination.bullets &&
          e.pagination.bullets.length > 0)
      ) {
        let C = e.pagination.bullets,
          I,
          _,
          D;
        if (
          (p.dynamicBullets &&
            ((a = C.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
            x.css(
              e.isHorizontal() ? "width" : "height",
              `${a * (p.dynamicMainBullets + 4)}px`
            ),
            p.dynamicMainBullets > 1 &&
              e.previousIndex !== void 0 &&
              ((c += m - (e.previousIndex - e.loopedSlides || 0)),
              c > p.dynamicMainBullets - 1
                ? (c = p.dynamicMainBullets - 1)
                : c < 0 && (c = 0)),
            (I = Math.max(m - c, 0)),
            (_ = I + (Math.min(C.length, p.dynamicMainBullets) - 1)),
            (D = (_ + I) / 2)),
          C.removeClass(
            ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
              .map((H) => `${p.bulletActiveClass}${H}`)
              .join(" ")
          ),
          x.length > 1)
        )
          C.each((H) => {
            let z = R(H),
              k = z.index();
            k === m && z.addClass(p.bulletActiveClass),
              p.dynamicBullets &&
                (k >= I && k <= _ && z.addClass(`${p.bulletActiveClass}-main`),
                k === I && o(z, "prev"),
                k === _ && o(z, "next"));
          });
        else {
          let H = C.eq(m),
            z = H.index();
          if ((H.addClass(p.bulletActiveClass), p.dynamicBullets)) {
            let k = C.eq(I),
              S = C.eq(_);
            for (let L = I; L <= _; L += 1)
              C.eq(L).addClass(`${p.bulletActiveClass}-main`);
            if (e.params.loop)
              if (z >= C.length) {
                for (let L = p.dynamicMainBullets; L >= 0; L -= 1)
                  C.eq(C.length - L).addClass(`${p.bulletActiveClass}-main`);
                C.eq(C.length - p.dynamicMainBullets - 1).addClass(
                  `${p.bulletActiveClass}-prev`
                );
              } else o(k, "prev"), o(S, "next");
            else o(k, "prev"), o(S, "next");
          }
        }
        if (p.dynamicBullets) {
          let H = Math.min(C.length, p.dynamicMainBullets + 4),
            z = (a * H - a) / 2 - D * a,
            k = h ? "right" : "left";
          C.css(e.isHorizontal() ? k : "top", `${z}px`);
        }
      }
      if (
        (p.type === "fraction" &&
          (x.find(Le(p.currentClass)).text(p.formatFractionCurrent(m + 1)),
          x.find(Le(p.totalClass)).text(p.formatFractionTotal($))),
        p.type === "progressbar")
      ) {
        let C;
        p.progressbarOpposite
          ? (C = e.isHorizontal() ? "vertical" : "horizontal")
          : (C = e.isHorizontal() ? "horizontal" : "vertical");
        let I = (m + 1) / $,
          _ = 1,
          D = 1;
        C === "horizontal" ? (_ = I) : (D = I),
          x
            .find(Le(p.progressbarFillClass))
            .transform(`translate3d(0,0,0) scaleX(${_}) scaleY(${D})`)
            .transition(e.params.speed);
      }
      p.type === "custom" && p.renderCustom
        ? (x.html(p.renderCustom(e, m + 1, $)), r("paginationRender", x[0]))
        : r("paginationUpdate", x[0]),
        e.params.watchOverflow &&
          e.enabled &&
          x[e.isLocked ? "addClass" : "removeClass"](p.lockClass);
    }
    function l() {
      let h = e.params.pagination;
      if (u()) return;
      let p =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        E = e.pagination.$el,
        x = "";
      if (h.type === "bullets") {
        let m = e.params.loop
          ? Math.ceil((p - e.loopedSlides * 2) / e.params.slidesPerGroup)
          : e.snapGrid.length;
        e.params.freeMode &&
          e.params.freeMode.enabled &&
          !e.params.loop &&
          m > p &&
          (m = p);
        for (let $ = 0; $ < m; $ += 1)
          h.renderBullet
            ? (x += h.renderBullet.call(e, $, h.bulletClass))
            : (x += `<${h.bulletElement} class="${h.bulletClass}"></${h.bulletElement}>`);
        E.html(x), (e.pagination.bullets = E.find(Le(h.bulletClass)));
      }
      h.type === "fraction" &&
        (h.renderFraction
          ? (x = h.renderFraction.call(e, h.currentClass, h.totalClass))
          : (x = `<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),
        E.html(x)),
        h.type === "progressbar" &&
          (h.renderProgressbar
            ? (x = h.renderProgressbar.call(e, h.progressbarFillClass))
            : (x = `<span class="${h.progressbarFillClass}"></span>`),
          E.html(x)),
        h.type !== "custom" && r("paginationRender", e.pagination.$el[0]);
    }
    function s() {
      e.params.pagination = Ke(
        e,
        e.originalParams.pagination,
        e.params.pagination,
        {
          el: "swiper-pagination",
        }
      );
      let h = e.params.pagination;
      if (!h.el) return;
      let p = R(h.el);
      p.length !== 0 &&
        (e.params.uniqueNavElements &&
          typeof h.el == "string" &&
          p.length > 1 &&
          ((p = e.$el.find(h.el)),
          p.length > 1 &&
            (p = p.filter((E) => R(E).parents(".swiper")[0] === e.el))),
        h.type === "bullets" && h.clickable && p.addClass(h.clickableClass),
        p.addClass(h.modifierClass + h.type),
        p.addClass(e.isHorizontal() ? h.horizontalClass : h.verticalClass),
        h.type === "bullets" &&
          h.dynamicBullets &&
          (p.addClass(`${h.modifierClass}${h.type}-dynamic`),
          (c = 0),
          h.dynamicMainBullets < 1 && (h.dynamicMainBullets = 1)),
        h.type === "progressbar" &&
          h.progressbarOpposite &&
          p.addClass(h.progressbarOppositeClass),
        h.clickable &&
          p.on("click", Le(h.bulletClass), function (x) {
            x.preventDefault();
            let m = R(this).index() * e.params.slidesPerGroup;
            e.params.loop && (m += e.loopedSlides), e.slideTo(m);
          }),
        Object.assign(e.pagination, {
          $el: p,
          el: p[0],
        }),
        e.enabled || p.addClass(h.lockClass));
    }
    function f() {
      let h = e.params.pagination;
      if (u()) return;
      let p = e.pagination.$el;
      p.removeClass(h.hiddenClass),
        p.removeClass(h.modifierClass + h.type),
        p.removeClass(e.isHorizontal() ? h.horizontalClass : h.verticalClass),
        e.pagination.bullets &&
          e.pagination.bullets.removeClass &&
          e.pagination.bullets.removeClass(h.bulletActiveClass),
        h.clickable && p.off("click", Le(h.bulletClass));
    }
    n("init", () => {
      e.params.pagination.enabled === !1 ? g() : (s(), l(), d());
    }),
      n("activeIndexChange", () => {
        (e.params.loop || typeof e.snapIndex > "u") && d();
      }),
      n("snapIndexChange", () => {
        e.params.loop || d();
      }),
      n("slidesLengthChange", () => {
        e.params.loop && (l(), d());
      }),
      n("snapGridLengthChange", () => {
        e.params.loop || (l(), d());
      }),
      n("destroy", () => {
        f();
      }),
      n("enable disable", () => {
        let { $el: h } = e.pagination;
        h &&
          h[e.enabled ? "removeClass" : "addClass"](
            e.params.pagination.lockClass
          );
      }),
      n("lock unlock", () => {
        d();
      }),
      n("click", (h, p) => {
        let E = p.target,
          { $el: x } = e.pagination;
        if (
          e.params.pagination.el &&
          e.params.pagination.hideOnClick &&
          x &&
          x.length > 0 &&
          !R(E).hasClass(e.params.pagination.bulletClass)
        ) {
          if (
            e.navigation &&
            ((e.navigation.nextEl && E === e.navigation.nextEl) ||
              (e.navigation.prevEl && E === e.navigation.prevEl))
          )
            return;
          let m = x.hasClass(e.params.pagination.hiddenClass);
          r(m === !0 ? "paginationShow" : "paginationHide"),
            x.toggleClass(e.params.pagination.hiddenClass);
        }
      });
    let v = () => {
        e.$el.removeClass(e.params.pagination.paginationDisabledClass),
          e.pagination.$el &&
            e.pagination.$el.removeClass(
              e.params.pagination.paginationDisabledClass
            ),
          s(),
          l(),
          d();
      },
      g = () => {
        e.$el.addClass(e.params.pagination.paginationDisabledClass),
          e.pagination.$el &&
            e.pagination.$el.addClass(
              e.params.pagination.paginationDisabledClass
            ),
          f();
      };
    Object.assign(e.pagination, {
      enable: v,
      disable: g,
      render: l,
      update: d,
      init: s,
      destroy: f,
    });
  }
  function Fn({ swiper: e, extendParams: t, on: n, emit: r }) {
    let i = ie(),
      a = !1,
      c = null,
      u = null,
      o,
      d,
      l,
      s;
    t({
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag",
        scrollbarDisabledClass: "swiper-scrollbar-disabled",
        horizontalClass: "swiper-scrollbar-horizontal",
        verticalClass: "swiper-scrollbar-vertical",
      },
    }),
      (e.scrollbar = {
        el: null,
        dragEl: null,
        $el: null,
        $dragEl: null,
      });
    function f() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      let { scrollbar: k, rtlTranslate: S, progress: L } = e,
        { $dragEl: q, $el: j } = k,
        P = e.params.scrollbar,
        N = d,
        B = (l - d) * L;
      S
        ? ((B = -B), B > 0 ? ((N = d - B), (B = 0)) : -B + d > l && (N = l + B))
        : B < 0
        ? ((N = d + B), (B = 0))
        : B + d > l && (N = l - B),
        e.isHorizontal()
          ? (q.transform(`translate3d(${B}px, 0, 0)`),
            (q[0].style.width = `${N}px`))
          : (q.transform(`translate3d(0px, ${B}px, 0)`),
            (q[0].style.height = `${N}px`)),
        P.hide &&
          (clearTimeout(c),
          (j[0].style.opacity = 1),
          (c = setTimeout(() => {
            (j[0].style.opacity = 0), j.transition(400);
          }, 1e3)));
    }
    function v(k) {
      !e.params.scrollbar.el ||
        !e.scrollbar.el ||
        e.scrollbar.$dragEl.transition(k);
    }
    function g() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      let { scrollbar: k } = e,
        { $dragEl: S, $el: L } = k;
      (S[0].style.width = ""),
        (S[0].style.height = ""),
        (l = e.isHorizontal() ? L[0].offsetWidth : L[0].offsetHeight),
        (s =
          e.size /
          (e.virtualSize +
            e.params.slidesOffsetBefore -
            (e.params.centeredSlides ? e.snapGrid[0] : 0))),
        e.params.scrollbar.dragSize === "auto"
          ? (d = l * s)
          : (d = parseInt(e.params.scrollbar.dragSize, 10)),
        e.isHorizontal()
          ? (S[0].style.width = `${d}px`)
          : (S[0].style.height = `${d}px`),
        s >= 1 ? (L[0].style.display = "none") : (L[0].style.display = ""),
        e.params.scrollbar.hide && (L[0].style.opacity = 0),
        e.params.watchOverflow &&
          e.enabled &&
          k.$el[e.isLocked ? "addClass" : "removeClass"](
            e.params.scrollbar.lockClass
          );
    }
    function h(k) {
      return e.isHorizontal()
        ? k.type === "touchstart" || k.type === "touchmove"
          ? k.targetTouches[0].clientX
          : k.clientX
        : k.type === "touchstart" || k.type === "touchmove"
        ? k.targetTouches[0].clientY
        : k.clientY;
    }
    function p(k) {
      let { scrollbar: S, rtlTranslate: L } = e,
        { $el: q } = S,
        j;
      (j =
        (h(k) -
          q.offset()[e.isHorizontal() ? "left" : "top"] -
          (o !== null ? o : d / 2)) /
        (l - d)),
        (j = Math.max(Math.min(j, 1), 0)),
        L && (j = 1 - j);
      let P = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * j;
      e.updateProgress(P),
        e.setTranslate(P),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    }
    function E(k) {
      let S = e.params.scrollbar,
        { scrollbar: L, $wrapperEl: q } = e,
        { $el: j, $dragEl: P } = L;
      (a = !0),
        (o =
          k.target === P[0] || k.target === P
            ? h(k) -
              k.target.getBoundingClientRect()[
                e.isHorizontal() ? "left" : "top"
              ]
            : null),
        k.preventDefault(),
        k.stopPropagation(),
        q.transition(100),
        P.transition(100),
        p(k),
        clearTimeout(u),
        j.transition(0),
        S.hide && j.css("opacity", 1),
        e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"),
        r("scrollbarDragStart", k);
    }
    function x(k) {
      let { scrollbar: S, $wrapperEl: L } = e,
        { $el: q, $dragEl: j } = S;
      !a ||
        (k.preventDefault ? k.preventDefault() : (k.returnValue = !1),
        p(k),
        L.transition(0),
        q.transition(0),
        j.transition(0),
        r("scrollbarDragMove", k));
    }
    function m(k) {
      let S = e.params.scrollbar,
        { scrollbar: L, $wrapperEl: q } = e,
        { $el: j } = L;
      !a ||
        ((a = !1),
        e.params.cssMode &&
          (e.$wrapperEl.css("scroll-snap-type", ""), q.transition("")),
        S.hide &&
          (clearTimeout(u),
          (u = $e(() => {
            j.css("opacity", 0), j.transition(400);
          }, 1e3))),
        r("scrollbarDragEnd", k),
        S.snapOnRelease && e.slideToClosest());
    }
    function $(k) {
      let {
          scrollbar: S,
          touchEventsTouch: L,
          touchEventsDesktop: q,
          params: j,
          support: P,
        } = e,
        N = S.$el;
      if (!N) return;
      let B = N[0],
        W =
          P.passiveListener && j.passiveListeners
            ? {
                passive: !1,
                capture: !1,
              }
            : !1,
        Y =
          P.passiveListener && j.passiveListeners
            ? {
                passive: !0,
                capture: !1,
              }
            : !1;
      if (!B) return;
      let ae = k === "on" ? "addEventListener" : "removeEventListener";
      P.touch
        ? (B[ae](L.start, E, W), B[ae](L.move, x, W), B[ae](L.end, m, Y))
        : (B[ae](q.start, E, W), i[ae](q.move, x, W), i[ae](q.end, m, Y));
    }
    function C() {
      !e.params.scrollbar.el || !e.scrollbar.el || $("on");
    }
    function I() {
      !e.params.scrollbar.el || !e.scrollbar.el || $("off");
    }
    function _() {
      let { scrollbar: k, $el: S } = e;
      e.params.scrollbar = Ke(
        e,
        e.originalParams.scrollbar,
        e.params.scrollbar,
        {
          el: "swiper-scrollbar",
        }
      );
      let L = e.params.scrollbar;
      if (!L.el) return;
      let q = R(L.el);
      e.params.uniqueNavElements &&
        typeof L.el == "string" &&
        q.length > 1 &&
        S.find(L.el).length === 1 &&
        (q = S.find(L.el)),
        q.addClass(e.isHorizontal() ? L.horizontalClass : L.verticalClass);
      let j = q.find(`.${e.params.scrollbar.dragClass}`);
      j.length === 0 &&
        ((j = R(`<div class="${e.params.scrollbar.dragClass}"></div>`)),
        q.append(j)),
        Object.assign(k, {
          $el: q,
          el: q[0],
          $dragEl: j,
          dragEl: j[0],
        }),
        L.draggable && C(),
        q &&
          q[e.enabled ? "removeClass" : "addClass"](
            e.params.scrollbar.lockClass
          );
    }
    function D() {
      let k = e.params.scrollbar,
        S = e.scrollbar.$el;
      S &&
        S.removeClass(e.isHorizontal() ? k.horizontalClass : k.verticalClass),
        I();
    }
    n("init", () => {
      e.params.scrollbar.enabled === !1 ? z() : (_(), g(), f());
    }),
      n("update resize observerUpdate lock unlock", () => {
        g();
      }),
      n("setTranslate", () => {
        f();
      }),
      n("setTransition", (k, S) => {
        v(S);
      }),
      n("enable disable", () => {
        let { $el: k } = e.scrollbar;
        k &&
          k[e.enabled ? "removeClass" : "addClass"](
            e.params.scrollbar.lockClass
          );
      }),
      n("destroy", () => {
        D();
      });
    let H = () => {
        e.$el.removeClass(e.params.scrollbar.scrollbarDisabledClass),
          e.scrollbar.$el &&
            e.scrollbar.$el.removeClass(
              e.params.scrollbar.scrollbarDisabledClass
            ),
          _(),
          g(),
          f();
      },
      z = () => {
        e.$el.addClass(e.params.scrollbar.scrollbarDisabledClass),
          e.scrollbar.$el &&
            e.scrollbar.$el.addClass(e.params.scrollbar.scrollbarDisabledClass),
          D();
      };
    Object.assign(e.scrollbar, {
      enable: H,
      disable: z,
      updateSize: g,
      setTranslate: f,
      init: _,
      destroy: D,
    });
  }
  function Gn({ swiper: e, extendParams: t, on: n }) {
    t({
      parallax: {
        enabled: !1,
      },
    });
    let r = (c, u) => {
        let { rtl: o } = e,
          d = R(c),
          l = o ? -1 : 1,
          s = d.attr("data-swiper-parallax") || "0",
          f = d.attr("data-swiper-parallax-x"),
          v = d.attr("data-swiper-parallax-y"),
          g = d.attr("data-swiper-parallax-scale"),
          h = d.attr("data-swiper-parallax-opacity");
        if (
          (f || v
            ? ((f = f || "0"), (v = v || "0"))
            : e.isHorizontal()
            ? ((f = s), (v = "0"))
            : ((v = s), (f = "0")),
          f.indexOf("%") >= 0
            ? (f = `${parseInt(f, 10) * u * l}%`)
            : (f = `${f * u * l}px`),
          v.indexOf("%") >= 0
            ? (v = `${parseInt(v, 10) * u}%`)
            : (v = `${v * u}px`),
          typeof h < "u" && h !== null)
        ) {
          let p = h - (h - 1) * (1 - Math.abs(u));
          d[0].style.opacity = p;
        }
        if (typeof g > "u" || g === null)
          d.transform(`translate3d(${f}, ${v}, 0px)`);
        else {
          let p = g - (g - 1) * (1 - Math.abs(u));
          d.transform(`translate3d(${f}, ${v}, 0px) scale(${p})`);
        }
      },
      i = () => {
        let { $el: c, slides: u, progress: o, snapGrid: d } = e;
        c
          .children(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          )
          .each((l) => {
            r(l, o);
          }),
          u.each((l, s) => {
            let f = l.progress;
            e.params.slidesPerGroup > 1 &&
              e.params.slidesPerView !== "auto" &&
              (f += Math.ceil(s / 2) - o * (d.length - 1)),
              (f = Math.min(Math.max(f, -1), 1)),
              R(l)
                .find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                )
                .each((v) => {
                  r(v, f);
                });
          });
      },
      a = (c = e.params.speed) => {
        let { $el: u } = e;
        u.find(
          "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
        ).each((o) => {
          let d = R(o),
            l = parseInt(d.attr("data-swiper-parallax-duration"), 10) || c;
          c === 0 && (l = 0), d.transition(l);
        });
      };
    n("beforeInit", () => {
      !e.params.parallax.enabled ||
        ((e.params.watchSlidesProgress = !0),
        (e.originalParams.watchSlidesProgress = !0));
    }),
      n("init", () => {
        !e.params.parallax.enabled || i();
      }),
      n("setTranslate", () => {
        !e.params.parallax.enabled || i();
      }),
      n("setTransition", (c, u) => {
        !e.params.parallax.enabled || a(u);
      });
  }
  function Wn({ swiper: e, extendParams: t, on: n, emit: r }) {
    let i = J();
    t({
      zoom: {
        enabled: !1,
        maxRatio: 3,
        minRatio: 1,
        toggle: !0,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed",
      },
    }),
      (e.zoom = {
        enabled: !1,
      });
    let a = 1,
      c = !1,
      u,
      o,
      d,
      l = {
        $slideEl: void 0,
        slideWidth: void 0,
        slideHeight: void 0,
        $imageEl: void 0,
        $imageWrapEl: void 0,
        maxRatio: 3,
      },
      s = {
        isTouched: void 0,
        isMoved: void 0,
        currentX: void 0,
        currentY: void 0,
        minX: void 0,
        minY: void 0,
        maxX: void 0,
        maxY: void 0,
        width: void 0,
        height: void 0,
        startX: void 0,
        startY: void 0,
        touchesStart: {},
        touchesCurrent: {},
      },
      f = {
        x: void 0,
        y: void 0,
        prevPositionX: void 0,
        prevPositionY: void 0,
        prevTime: void 0,
      },
      v = 1;
    Object.defineProperty(e.zoom, "scale", {
      get() {
        return v;
      },
      set(P) {
        if (v !== P) {
          let N = l.$imageEl ? l.$imageEl[0] : void 0,
            B = l.$slideEl ? l.$slideEl[0] : void 0;
          r("zoomChange", P, N, B);
        }
        v = P;
      },
    });
    function g(P) {
      if (P.targetTouches.length < 2) return 1;
      let N = P.targetTouches[0].pageX,
        B = P.targetTouches[0].pageY,
        W = P.targetTouches[1].pageX,
        Y = P.targetTouches[1].pageY;
      return Math.sqrt((W - N) ** 2 + (Y - B) ** 2);
    }
    function h(P) {
      let N = e.support,
        B = e.params.zoom;
      if (((o = !1), (d = !1), !N.gestures)) {
        if (
          P.type !== "touchstart" ||
          (P.type === "touchstart" && P.targetTouches.length < 2)
        )
          return;
        (o = !0), (l.scaleStart = g(P));
      }
      if (
        (!l.$slideEl || !l.$slideEl.length) &&
        ((l.$slideEl = R(P.target).closest(`.${e.params.slideClass}`)),
        l.$slideEl.length === 0 && (l.$slideEl = e.slides.eq(e.activeIndex)),
        (l.$imageEl = l.$slideEl
          .find(`.${B.containerClass}`)
          .eq(0)
          .find("picture, img, svg, canvas, .swiper-zoom-target")
          .eq(0)),
        (l.$imageWrapEl = l.$imageEl.parent(`.${B.containerClass}`)),
        (l.maxRatio = l.$imageWrapEl.attr("data-swiper-zoom") || B.maxRatio),
        l.$imageWrapEl.length === 0)
      ) {
        l.$imageEl = void 0;
        return;
      }
      l.$imageEl && l.$imageEl.transition(0), (c = !0);
    }
    function p(P) {
      let N = e.support,
        B = e.params.zoom,
        W = e.zoom;
      if (!N.gestures) {
        if (
          P.type !== "touchmove" ||
          (P.type === "touchmove" && P.targetTouches.length < 2)
        )
          return;
        (d = !0), (l.scaleMove = g(P));
      }
      if (!l.$imageEl || l.$imageEl.length === 0) {
        P.type === "gesturechange" && h(P);
        return;
      }
      N.gestures
        ? (W.scale = P.scale * a)
        : (W.scale = (l.scaleMove / l.scaleStart) * a),
        W.scale > l.maxRatio &&
          (W.scale = l.maxRatio - 1 + (W.scale - l.maxRatio + 1) ** 0.5),
        W.scale < B.minRatio &&
          (W.scale = B.minRatio + 1 - (B.minRatio - W.scale + 1) ** 0.5),
        l.$imageEl.transform(`translate3d(0,0,0) scale(${W.scale})`);
    }
    function E(P) {
      let N = e.device,
        B = e.support,
        W = e.params.zoom,
        Y = e.zoom;
      if (!B.gestures) {
        if (
          !o ||
          !d ||
          P.type !== "touchend" ||
          (P.type === "touchend" && P.changedTouches.length < 2 && !N.android)
        )
          return;
        (o = !1), (d = !1);
      }
      !l.$imageEl ||
        l.$imageEl.length === 0 ||
        ((Y.scale = Math.max(Math.min(Y.scale, l.maxRatio), W.minRatio)),
        l.$imageEl
          .transition(e.params.speed)
          .transform(`translate3d(0,0,0) scale(${Y.scale})`),
        (a = Y.scale),
        (c = !1),
        Y.scale === 1 && (l.$slideEl = void 0));
    }
    function x(P) {
      let N = e.device;
      !l.$imageEl ||
        l.$imageEl.length === 0 ||
        s.isTouched ||
        (N.android && P.cancelable && P.preventDefault(),
        (s.isTouched = !0),
        (s.touchesStart.x =
          P.type === "touchstart" ? P.targetTouches[0].pageX : P.pageX),
        (s.touchesStart.y =
          P.type === "touchstart" ? P.targetTouches[0].pageY : P.pageY));
    }
    function m(P) {
      let N = e.zoom;
      if (
        !l.$imageEl ||
        l.$imageEl.length === 0 ||
        ((e.allowClick = !1), !s.isTouched || !l.$slideEl)
      )
        return;
      s.isMoved ||
        ((s.width = l.$imageEl[0].offsetWidth),
        (s.height = l.$imageEl[0].offsetHeight),
        (s.startX = st(l.$imageWrapEl[0], "x") || 0),
        (s.startY = st(l.$imageWrapEl[0], "y") || 0),
        (l.slideWidth = l.$slideEl[0].offsetWidth),
        (l.slideHeight = l.$slideEl[0].offsetHeight),
        l.$imageWrapEl.transition(0));
      let B = s.width * N.scale,
        W = s.height * N.scale;
      if (!(B < l.slideWidth && W < l.slideHeight)) {
        if (
          ((s.minX = Math.min(l.slideWidth / 2 - B / 2, 0)),
          (s.maxX = -s.minX),
          (s.minY = Math.min(l.slideHeight / 2 - W / 2, 0)),
          (s.maxY = -s.minY),
          (s.touchesCurrent.x =
            P.type === "touchmove" ? P.targetTouches[0].pageX : P.pageX),
          (s.touchesCurrent.y =
            P.type === "touchmove" ? P.targetTouches[0].pageY : P.pageY),
          !s.isMoved && !c)
        ) {
          if (
            e.isHorizontal() &&
            ((Math.floor(s.minX) === Math.floor(s.startX) &&
              s.touchesCurrent.x < s.touchesStart.x) ||
              (Math.floor(s.maxX) === Math.floor(s.startX) &&
                s.touchesCurrent.x > s.touchesStart.x))
          ) {
            s.isTouched = !1;
            return;
          }
          if (
            !e.isHorizontal() &&
            ((Math.floor(s.minY) === Math.floor(s.startY) &&
              s.touchesCurrent.y < s.touchesStart.y) ||
              (Math.floor(s.maxY) === Math.floor(s.startY) &&
                s.touchesCurrent.y > s.touchesStart.y))
          ) {
            s.isTouched = !1;
            return;
          }
        }
        P.cancelable && P.preventDefault(),
          P.stopPropagation(),
          (s.isMoved = !0),
          (s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
          (s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
          s.currentX < s.minX &&
            (s.currentX = s.minX + 1 - (s.minX - s.currentX + 1) ** 0.8),
          s.currentX > s.maxX &&
            (s.currentX = s.maxX - 1 + (s.currentX - s.maxX + 1) ** 0.8),
          s.currentY < s.minY &&
            (s.currentY = s.minY + 1 - (s.minY - s.currentY + 1) ** 0.8),
          s.currentY > s.maxY &&
            (s.currentY = s.maxY - 1 + (s.currentY - s.maxY + 1) ** 0.8),
          f.prevPositionX || (f.prevPositionX = s.touchesCurrent.x),
          f.prevPositionY || (f.prevPositionY = s.touchesCurrent.y),
          f.prevTime || (f.prevTime = Date.now()),
          (f.x =
            (s.touchesCurrent.x - f.prevPositionX) /
            (Date.now() - f.prevTime) /
            2),
          (f.y =
            (s.touchesCurrent.y - f.prevPositionY) /
            (Date.now() - f.prevTime) /
            2),
          Math.abs(s.touchesCurrent.x - f.prevPositionX) < 2 && (f.x = 0),
          Math.abs(s.touchesCurrent.y - f.prevPositionY) < 2 && (f.y = 0),
          (f.prevPositionX = s.touchesCurrent.x),
          (f.prevPositionY = s.touchesCurrent.y),
          (f.prevTime = Date.now()),
          l.$imageWrapEl.transform(
            `translate3d(${s.currentX}px, ${s.currentY}px,0)`
          );
      }
    }
    function $() {
      let P = e.zoom;
      if (!l.$imageEl || l.$imageEl.length === 0) return;
      if (!s.isTouched || !s.isMoved) {
        (s.isTouched = !1), (s.isMoved = !1);
        return;
      }
      (s.isTouched = !1), (s.isMoved = !1);
      let N = 300,
        B = 300,
        W = f.x * N,
        Y = s.currentX + W,
        ae = f.y * B,
        ve = s.currentY + ae;
      f.x !== 0 && (N = Math.abs((Y - s.currentX) / f.x)),
        f.y !== 0 && (B = Math.abs((ve - s.currentY) / f.y));
      let Se = Math.max(N, B);
      (s.currentX = Y), (s.currentY = ve);
      let me = s.width * P.scale,
        de = s.height * P.scale;
      (s.minX = Math.min(l.slideWidth / 2 - me / 2, 0)),
        (s.maxX = -s.minX),
        (s.minY = Math.min(l.slideHeight / 2 - de / 2, 0)),
        (s.maxY = -s.minY),
        (s.currentX = Math.max(Math.min(s.currentX, s.maxX), s.minX)),
        (s.currentY = Math.max(Math.min(s.currentY, s.maxY), s.minY)),
        l.$imageWrapEl
          .transition(Se)
          .transform(`translate3d(${s.currentX}px, ${s.currentY}px,0)`);
    }
    function C() {
      let P = e.zoom;
      l.$slideEl &&
        e.previousIndex !== e.activeIndex &&
        (l.$imageEl && l.$imageEl.transform("translate3d(0,0,0) scale(1)"),
        l.$imageWrapEl && l.$imageWrapEl.transform("translate3d(0,0,0)"),
        (P.scale = 1),
        (a = 1),
        (l.$slideEl = void 0),
        (l.$imageEl = void 0),
        (l.$imageWrapEl = void 0));
    }
    function I(P) {
      let N = e.zoom,
        B = e.params.zoom;
      if (
        (l.$slideEl ||
          (P &&
            P.target &&
            (l.$slideEl = R(P.target).closest(`.${e.params.slideClass}`)),
          l.$slideEl ||
            (e.params.virtual && e.params.virtual.enabled && e.virtual
              ? (l.$slideEl = e.$wrapperEl.children(
                  `.${e.params.slideActiveClass}`
                ))
              : (l.$slideEl = e.slides.eq(e.activeIndex))),
          (l.$imageEl = l.$slideEl
            .find(`.${B.containerClass}`)
            .eq(0)
            .find("picture, img, svg, canvas, .swiper-zoom-target")
            .eq(0)),
          (l.$imageWrapEl = l.$imageEl.parent(`.${B.containerClass}`))),
        !l.$imageEl ||
          l.$imageEl.length === 0 ||
          !l.$imageWrapEl ||
          l.$imageWrapEl.length === 0)
      )
        return;
      e.params.cssMode &&
        ((e.wrapperEl.style.overflow = "hidden"),
        (e.wrapperEl.style.touchAction = "none")),
        l.$slideEl.addClass(`${B.zoomedSlideClass}`);
      let W, Y, ae, ve, Se, me, de, oe, Q, ee, ue, K, ce, ye, se, be, Pe, Xe;
      typeof s.touchesStart.x > "u" && P
        ? ((W = P.type === "touchend" ? P.changedTouches[0].pageX : P.pageX),
          (Y = P.type === "touchend" ? P.changedTouches[0].pageY : P.pageY))
        : ((W = s.touchesStart.x), (Y = s.touchesStart.y)),
        (N.scale = l.$imageWrapEl.attr("data-swiper-zoom") || B.maxRatio),
        (a = l.$imageWrapEl.attr("data-swiper-zoom") || B.maxRatio),
        P
          ? ((Pe = l.$slideEl[0].offsetWidth),
            (Xe = l.$slideEl[0].offsetHeight),
            (ae = l.$slideEl.offset().left + i.scrollX),
            (ve = l.$slideEl.offset().top + i.scrollY),
            (Se = ae + Pe / 2 - W),
            (me = ve + Xe / 2 - Y),
            (Q = l.$imageEl[0].offsetWidth),
            (ee = l.$imageEl[0].offsetHeight),
            (ue = Q * N.scale),
            (K = ee * N.scale),
            (ce = Math.min(Pe / 2 - ue / 2, 0)),
            (ye = Math.min(Xe / 2 - K / 2, 0)),
            (se = -ce),
            (be = -ye),
            (de = Se * N.scale),
            (oe = me * N.scale),
            de < ce && (de = ce),
            de > se && (de = se),
            oe < ye && (oe = ye),
            oe > be && (oe = be))
          : ((de = 0), (oe = 0)),
        l.$imageWrapEl
          .transition(300)
          .transform(`translate3d(${de}px, ${oe}px,0)`),
        l.$imageEl
          .transition(300)
          .transform(`translate3d(0,0,0) scale(${N.scale})`);
    }
    function _() {
      let P = e.zoom,
        N = e.params.zoom;
      l.$slideEl ||
        (e.params.virtual && e.params.virtual.enabled && e.virtual
          ? (l.$slideEl = e.$wrapperEl.children(
              `.${e.params.slideActiveClass}`
            ))
          : (l.$slideEl = e.slides.eq(e.activeIndex)),
        (l.$imageEl = l.$slideEl
          .find(`.${N.containerClass}`)
          .eq(0)
          .find("picture, img, svg, canvas, .swiper-zoom-target")
          .eq(0)),
        (l.$imageWrapEl = l.$imageEl.parent(`.${N.containerClass}`))),
        !(
          !l.$imageEl ||
          l.$imageEl.length === 0 ||
          !l.$imageWrapEl ||
          l.$imageWrapEl.length === 0
        ) &&
          (e.params.cssMode &&
            ((e.wrapperEl.style.overflow = ""),
            (e.wrapperEl.style.touchAction = "")),
          (P.scale = 1),
          (a = 1),
          l.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
          l.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
          l.$slideEl.removeClass(`${N.zoomedSlideClass}`),
          (l.$slideEl = void 0));
    }
    function D(P) {
      let N = e.zoom;
      N.scale && N.scale !== 1 ? _() : I(P);
    }
    function H() {
      let P = e.support,
        N =
          e.touchEvents.start === "touchstart" &&
          P.passiveListener &&
          e.params.passiveListeners
            ? {
                passive: !0,
                capture: !1,
              }
            : !1,
        B = P.passiveListener
          ? {
              passive: !1,
              capture: !0,
            }
          : !0;
      return {
        passiveListener: N,
        activeListenerWithCapture: B,
      };
    }
    function z() {
      return `.${e.params.slideClass}`;
    }
    function k(P) {
      let { passiveListener: N } = H(),
        B = z();
      e.$wrapperEl[P]("gesturestart", B, h, N),
        e.$wrapperEl[P]("gesturechange", B, p, N),
        e.$wrapperEl[P]("gestureend", B, E, N);
    }
    function S() {
      u || ((u = !0), k("on"));
    }
    function L() {
      !u || ((u = !1), k("off"));
    }
    function q() {
      let P = e.zoom;
      if (P.enabled) return;
      P.enabled = !0;
      let N = e.support,
        { passiveListener: B, activeListenerWithCapture: W } = H(),
        Y = z();
      N.gestures
        ? (e.$wrapperEl.on(e.touchEvents.start, S, B),
          e.$wrapperEl.on(e.touchEvents.end, L, B))
        : e.touchEvents.start === "touchstart" &&
          (e.$wrapperEl.on(e.touchEvents.start, Y, h, B),
          e.$wrapperEl.on(e.touchEvents.move, Y, p, W),
          e.$wrapperEl.on(e.touchEvents.end, Y, E, B),
          e.touchEvents.cancel &&
            e.$wrapperEl.on(e.touchEvents.cancel, Y, E, B)),
        e.$wrapperEl.on(
          e.touchEvents.move,
          `.${e.params.zoom.containerClass}`,
          m,
          W
        );
    }
    function j() {
      let P = e.zoom;
      if (!P.enabled) return;
      let N = e.support;
      P.enabled = !1;
      let { passiveListener: B, activeListenerWithCapture: W } = H(),
        Y = z();
      N.gestures
        ? (e.$wrapperEl.off(e.touchEvents.start, S, B),
          e.$wrapperEl.off(e.touchEvents.end, L, B))
        : e.touchEvents.start === "touchstart" &&
          (e.$wrapperEl.off(e.touchEvents.start, Y, h, B),
          e.$wrapperEl.off(e.touchEvents.move, Y, p, W),
          e.$wrapperEl.off(e.touchEvents.end, Y, E, B),
          e.touchEvents.cancel &&
            e.$wrapperEl.off(e.touchEvents.cancel, Y, E, B)),
        e.$wrapperEl.off(
          e.touchEvents.move,
          `.${e.params.zoom.containerClass}`,
          m,
          W
        );
    }
    n("init", () => {
      e.params.zoom.enabled && q();
    }),
      n("destroy", () => {
        j();
      }),
      n("touchStart", (P, N) => {
        !e.zoom.enabled || x(N);
      }),
      n("touchEnd", (P, N) => {
        !e.zoom.enabled || $(N);
      }),
      n("doubleTap", (P, N) => {
        !e.animating &&
          e.params.zoom.enabled &&
          e.zoom.enabled &&
          e.params.zoom.toggle &&
          D(N);
      }),
      n("transitionEnd", () => {
        e.zoom.enabled && e.params.zoom.enabled && C();
      }),
      n("slideChange", () => {
        e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && C();
      }),
      Object.assign(e.zoom, {
        enable: q,
        disable: j,
        in: I,
        out: _,
        toggle: D,
      });
  }
  function Xn({ swiper: e, extendParams: t, on: n, emit: r }) {
    t({
      lazy: {
        checkInView: !1,
        enabled: !1,
        loadPrevNext: !1,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: !1,
        scrollingElement: "",
        elementClass: "swiper-lazy",
        loadingClass: "swiper-lazy-loading",
        loadedClass: "swiper-lazy-loaded",
        preloaderClass: "swiper-lazy-preloader",
      },
    }),
      (e.lazy = {});
    let i = !1,
      a = !1;
    function c(d, l = !0) {
      let s = e.params.lazy;
      if (typeof d > "u" || e.slides.length === 0) return;
      let v =
          e.virtual && e.params.virtual.enabled
            ? e.$wrapperEl.children(
                `.${e.params.slideClass}[data-swiper-slide-index="${d}"]`
              )
            : e.slides.eq(d),
        g = v.find(
          `.${s.elementClass}:not(.${s.loadedClass}):not(.${s.loadingClass})`
        );
      v.hasClass(s.elementClass) &&
        !v.hasClass(s.loadedClass) &&
        !v.hasClass(s.loadingClass) &&
        g.push(v[0]),
        g.length !== 0 &&
          g.each((h) => {
            let p = R(h);
            p.addClass(s.loadingClass);
            let E = p.attr("data-background"),
              x = p.attr("data-src"),
              m = p.attr("data-srcset"),
              $ = p.attr("data-sizes"),
              C = p.parent("picture");
            e.loadImage(p[0], x || E, m, $, !1, () => {
              if (
                !(
                  typeof e > "u" ||
                  e === null ||
                  !e ||
                  (e && !e.params) ||
                  e.destroyed
                )
              ) {
                if (
                  (E
                    ? (p.css("background-image", `url("${E}")`),
                      p.removeAttr("data-background"))
                    : (m && (p.attr("srcset", m), p.removeAttr("data-srcset")),
                      $ && (p.attr("sizes", $), p.removeAttr("data-sizes")),
                      C.length &&
                        C.children("source").each((I) => {
                          let _ = R(I);
                          _.attr("data-srcset") &&
                            (_.attr("srcset", _.attr("data-srcset")),
                            _.removeAttr("data-srcset"));
                        }),
                      x && (p.attr("src", x), p.removeAttr("data-src"))),
                  p.addClass(s.loadedClass).removeClass(s.loadingClass),
                  v.find(`.${s.preloaderClass}`).remove(),
                  e.params.loop && l)
                ) {
                  let I = v.attr("data-swiper-slide-index");
                  if (v.hasClass(e.params.slideDuplicateClass)) {
                    let _ = e.$wrapperEl.children(
                      `[data-swiper-slide-index="${I}"]:not(.${e.params.slideDuplicateClass})`
                    );
                    c(_.index(), !1);
                  } else {
                    let _ = e.$wrapperEl.children(
                      `.${e.params.slideDuplicateClass}[data-swiper-slide-index="${I}"]`
                    );
                    c(_.index(), !1);
                  }
                }
                r("lazyImageReady", v[0], p[0]),
                  e.params.autoHeight && e.updateAutoHeight();
              }
            }),
              r("lazyImageLoad", v[0], p[0]);
          });
    }
    function u() {
      let { $wrapperEl: d, params: l, slides: s, activeIndex: f } = e,
        v = e.virtual && l.virtual.enabled,
        g = l.lazy,
        h = l.slidesPerView;
      h === "auto" && (h = 0);
      function p(x) {
        if (v) {
          if (
            d.children(`.${l.slideClass}[data-swiper-slide-index="${x}"]`)
              .length
          )
            return !0;
        } else if (s[x]) return !0;
        return !1;
      }
      function E(x) {
        return v ? R(x).attr("data-swiper-slide-index") : R(x).index();
      }
      if ((a || (a = !0), e.params.watchSlidesProgress))
        d.children(`.${l.slideVisibleClass}`).each((x) => {
          let m = v ? R(x).attr("data-swiper-slide-index") : R(x).index();
          c(m);
        });
      else if (h > 1) for (let x = f; x < f + h; x += 1) p(x) && c(x);
      else c(f);
      if (g.loadPrevNext)
        if (h > 1 || (g.loadPrevNextAmount && g.loadPrevNextAmount > 1)) {
          let x = g.loadPrevNextAmount,
            m = Math.ceil(h),
            $ = Math.min(f + m + Math.max(x, m), s.length),
            C = Math.max(f - Math.max(m, x), 0);
          for (let I = f + m; I < $; I += 1) p(I) && c(I);
          for (let I = C; I < f; I += 1) p(I) && c(I);
        } else {
          let x = d.children(`.${l.slideNextClass}`);
          x.length > 0 && c(E(x));
          let m = d.children(`.${l.slidePrevClass}`);
          m.length > 0 && c(E(m));
        }
    }
    function o() {
      let d = J();
      if (!e || e.destroyed) return;
      let l = e.params.lazy.scrollingElement
          ? R(e.params.lazy.scrollingElement)
          : R(d),
        s = l[0] === d,
        f = s ? d.innerWidth : l[0].offsetWidth,
        v = s ? d.innerHeight : l[0].offsetHeight,
        g = e.$el.offset(),
        { rtlTranslate: h } = e,
        p = !1;
      h && (g.left -= e.$el[0].scrollLeft);
      let E = [
        [g.left, g.top],
        [g.left + e.width, g.top],
        [g.left, g.top + e.height],
        [g.left + e.width, g.top + e.height],
      ];
      for (let m = 0; m < E.length; m += 1) {
        let $ = E[m];
        if ($[0] >= 0 && $[0] <= f && $[1] >= 0 && $[1] <= v) {
          if ($[0] === 0 && $[1] === 0) continue;
          p = !0;
        }
      }
      let x =
        e.touchEvents.start === "touchstart" &&
        e.support.passiveListener &&
        e.params.passiveListeners
          ? {
              passive: !0,
              capture: !1,
            }
          : !1;
      p ? (u(), l.off("scroll", o, x)) : i || ((i = !0), l.on("scroll", o, x));
    }
    n("beforeInit", () => {
      e.params.lazy.enabled &&
        e.params.preloadImages &&
        (e.params.preloadImages = !1);
    }),
      n("init", () => {
        e.params.lazy.enabled && (e.params.lazy.checkInView ? o() : u());
      }),
      n("scroll", () => {
        e.params.freeMode &&
          e.params.freeMode.enabled &&
          !e.params.freeMode.sticky &&
          u();
      }),
      n("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
        e.params.lazy.enabled && (e.params.lazy.checkInView ? o() : u());
      }),
      n("transitionStart", () => {
        e.params.lazy.enabled &&
          (e.params.lazy.loadOnTransitionStart ||
            (!e.params.lazy.loadOnTransitionStart && !a)) &&
          (e.params.lazy.checkInView ? o() : u());
      }),
      n("transitionEnd", () => {
        e.params.lazy.enabled &&
          !e.params.lazy.loadOnTransitionStart &&
          (e.params.lazy.checkInView ? o() : u());
      }),
      n("slideChange", () => {
        let {
          lazy: d,
          cssMode: l,
          watchSlidesProgress: s,
          touchReleaseOnEdges: f,
          resistanceRatio: v,
        } = e.params;
        d.enabled && (l || (s && (f || v === 0))) && u();
      }),
      n("destroy", () => {
        !e.$el ||
          e.$el
            .find(`.${e.params.lazy.loadingClass}`)
            .removeClass(e.params.lazy.loadingClass);
      }),
      Object.assign(e.lazy, {
        load: u,
        loadInSlide: c,
      });
  }
  function Yn({ swiper: e, extendParams: t, on: n }) {
    t({
      controller: {
        control: void 0,
        inverse: !1,
        by: "slide",
      },
    }),
      (e.controller = {
        control: void 0,
      });
    function r(o, d) {
      let l = (function () {
        let g, h, p;
        return (E, x) => {
          for (h = -1, g = E.length; g - h > 1; )
            (p = (g + h) >> 1), E[p] <= x ? (h = p) : (g = p);
          return g;
        };
      })();
      (this.x = o), (this.y = d), (this.lastIndex = o.length - 1);
      let s, f;
      return (
        (this.interpolate = function (g) {
          return g
            ? ((f = l(this.x, g)),
              (s = f - 1),
              ((g - this.x[s]) * (this.y[f] - this.y[s])) /
                (this.x[f] - this.x[s]) +
                this.y[s])
            : 0;
        }),
        this
      );
    }
    function i(o) {
      e.controller.spline ||
        (e.controller.spline = e.params.loop
          ? new r(e.slidesGrid, o.slidesGrid)
          : new r(e.snapGrid, o.snapGrid));
    }
    function a(o, d) {
      let l = e.controller.control,
        s,
        f,
        v = e.constructor;
      function g(h) {
        let p = e.rtlTranslate ? -e.translate : e.translate;
        e.params.controller.by === "slide" &&
          (i(h), (f = -e.controller.spline.interpolate(-p))),
          (!f || e.params.controller.by === "container") &&
            ((s =
              (h.maxTranslate() - h.minTranslate()) /
              (e.maxTranslate() - e.minTranslate())),
            (f = (p - e.minTranslate()) * s + h.minTranslate())),
          e.params.controller.inverse && (f = h.maxTranslate() - f),
          h.updateProgress(f),
          h.setTranslate(f, e),
          h.updateActiveIndex(),
          h.updateSlidesClasses();
      }
      if (Array.isArray(l))
        for (let h = 0; h < l.length; h += 1)
          l[h] !== d && l[h] instanceof v && g(l[h]);
      else l instanceof v && d !== l && g(l);
    }
    function c(o, d) {
      let l = e.constructor,
        s = e.controller.control,
        f;
      function v(g) {
        g.setTransition(o, e),
          o !== 0 &&
            (g.transitionStart(),
            g.params.autoHeight &&
              $e(() => {
                g.updateAutoHeight();
              }),
            g.$wrapperEl.transitionEnd(() => {
              !s ||
                (g.params.loop &&
                  e.params.controller.by === "slide" &&
                  g.loopFix(),
                g.transitionEnd());
            }));
      }
      if (Array.isArray(s))
        for (f = 0; f < s.length; f += 1)
          s[f] !== d && s[f] instanceof l && v(s[f]);
      else s instanceof l && d !== s && v(s);
    }
    function u() {
      !e.controller.control ||
        (e.controller.spline &&
          ((e.controller.spline = void 0), delete e.controller.spline));
    }
    n("beforeInit", () => {
      e.controller.control = e.params.controller.control;
    }),
      n("update", () => {
        u();
      }),
      n("resize", () => {
        u();
      }),
      n("observerUpdate", () => {
        u();
      }),
      n("setTranslate", (o, d, l) => {
        !e.controller.control || e.controller.setTranslate(d, l);
      }),
      n("setTransition", (o, d, l) => {
        !e.controller.control || e.controller.setTransition(d, l);
      }),
      Object.assign(e.controller, {
        setTranslate: a,
        setTransition: c,
      });
  }
  function Un({ swiper: e, extendParams: t, on: n }) {
    t({
      a11y: {
        enabled: !0,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
        slideLabelMessage: "{{index}} / {{slidesLength}}",
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        itemRoleDescriptionMessage: null,
        slideRole: "group",
        id: null,
      },
    }),
      (e.a11y = {
        clicked: !1,
      });
    let r = null;
    function i(S) {
      let L = r;
      L.length !== 0 && (L.html(""), L.html(S));
    }
    function a(S = 16) {
      let L = () => Math.round(16 * Math.random()).toString(16);
      return "x".repeat(S).replace(/x/g, L);
    }
    function c(S) {
      S.attr("tabIndex", "0");
    }
    function u(S) {
      S.attr("tabIndex", "-1");
    }
    function o(S, L) {
      S.attr("role", L);
    }
    function d(S, L) {
      S.attr("aria-roledescription", L);
    }
    function l(S, L) {
      S.attr("aria-controls", L);
    }
    function s(S, L) {
      S.attr("aria-label", L);
    }
    function f(S, L) {
      S.attr("id", L);
    }
    function v(S, L) {
      S.attr("aria-live", L);
    }
    function g(S) {
      S.attr("aria-disabled", !0);
    }
    function h(S) {
      S.attr("aria-disabled", !1);
    }
    function p(S) {
      if (S.keyCode !== 13 && S.keyCode !== 32) return;
      let L = e.params.a11y,
        q = R(S.target);
      e.navigation &&
        e.navigation.$nextEl &&
        q.is(e.navigation.$nextEl) &&
        ((e.isEnd && !e.params.loop) || e.slideNext(),
        e.isEnd ? i(L.lastSlideMessage) : i(L.nextSlideMessage)),
        e.navigation &&
          e.navigation.$prevEl &&
          q.is(e.navigation.$prevEl) &&
          ((e.isBeginning && !e.params.loop) || e.slidePrev(),
          e.isBeginning ? i(L.firstSlideMessage) : i(L.prevSlideMessage)),
        e.pagination &&
          q.is(Le(e.params.pagination.bulletClass)) &&
          q[0].click();
    }
    function E() {
      if (e.params.loop || e.params.rewind || !e.navigation) return;
      let { $nextEl: S, $prevEl: L } = e.navigation;
      L && L.length > 0 && (e.isBeginning ? (g(L), u(L)) : (h(L), c(L))),
        S && S.length > 0 && (e.isEnd ? (g(S), u(S)) : (h(S), c(S)));
    }
    function x() {
      return (
        e.pagination && e.pagination.bullets && e.pagination.bullets.length
      );
    }
    function m() {
      return x() && e.params.pagination.clickable;
    }
    function $() {
      let S = e.params.a11y;
      !x() ||
        e.pagination.bullets.each((L) => {
          let q = R(L);
          e.params.pagination.clickable &&
            (c(q),
            e.params.pagination.renderBullet ||
              (o(q, "button"),
              s(
                q,
                S.paginationBulletMessage.replace(
                  /\{\{index\}\}/,
                  q.index() + 1
                )
              ))),
            q.is(`.${e.params.pagination.bulletActiveClass}`)
              ? q.attr("aria-current", "true")
              : q.removeAttr("aria-current");
        });
    }
    let C = (S, L, q) => {
        c(S),
          S[0].tagName !== "BUTTON" && (o(S, "button"), S.on("keydown", p)),
          s(S, q),
          l(S, L);
      },
      I = () => {
        e.a11y.clicked = !0;
      },
      _ = () => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            e.destroyed || (e.a11y.clicked = !1);
          });
        });
      },
      D = (S) => {
        if (e.a11y.clicked) return;
        let L = S.target.closest(`.${e.params.slideClass}`);
        if (!L || !e.slides.includes(L)) return;
        let q = e.slides.indexOf(L) === e.activeIndex,
          j =
            e.params.watchSlidesProgress &&
            e.visibleSlides &&
            e.visibleSlides.includes(L);
        q ||
          j ||
          (S.sourceCapabilities && S.sourceCapabilities.firesTouchEvents) ||
          (e.isHorizontal() ? (e.el.scrollLeft = 0) : (e.el.scrollTop = 0),
          e.slideTo(e.slides.indexOf(L), 0));
      },
      H = () => {
        let S = e.params.a11y;
        S.itemRoleDescriptionMessage &&
          d(R(e.slides), S.itemRoleDescriptionMessage),
          S.slideRole && o(R(e.slides), S.slideRole);
        let L = e.params.loop
          ? e.slides.filter(
              (q) => !q.classList.contains(e.params.slideDuplicateClass)
            ).length
          : e.slides.length;
        S.slideLabelMessage &&
          e.slides.each((q, j) => {
            let P = R(q),
              N = e.params.loop
                ? parseInt(P.attr("data-swiper-slide-index"), 10)
                : j,
              B = S.slideLabelMessage
                .replace(/\{\{index\}\}/, N + 1)
                .replace(/\{\{slidesLength\}\}/, L);
            s(P, B);
          });
      },
      z = () => {
        let S = e.params.a11y;
        e.$el.append(r);
        let L = e.$el;
        S.containerRoleDescriptionMessage &&
          d(L, S.containerRoleDescriptionMessage),
          S.containerMessage && s(L, S.containerMessage);
        let q = e.$wrapperEl,
          j = S.id || q.attr("id") || `swiper-wrapper-${a(16)}`,
          P = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
        f(q, j), v(q, P), H();
        let N, B;
        e.navigation && e.navigation.$nextEl && (N = e.navigation.$nextEl),
          e.navigation && e.navigation.$prevEl && (B = e.navigation.$prevEl),
          N && N.length && C(N, j, S.nextSlideMessage),
          B && B.length && C(B, j, S.prevSlideMessage),
          m() &&
            e.pagination.$el.on(
              "keydown",
              Le(e.params.pagination.bulletClass),
              p
            ),
          e.$el.on("focus", D, !0),
          e.$el.on("pointerdown", I, !0),
          e.$el.on("pointerup", _, !0);
      };
    function k() {
      r && r.length > 0 && r.remove();
      let S, L;
      e.navigation && e.navigation.$nextEl && (S = e.navigation.$nextEl),
        e.navigation && e.navigation.$prevEl && (L = e.navigation.$prevEl),
        S && S.off("keydown", p),
        L && L.off("keydown", p),
        m() &&
          e.pagination.$el.off(
            "keydown",
            Le(e.params.pagination.bulletClass),
            p
          ),
        e.$el.off("focus", D, !0),
        e.$el.off("pointerdown", I, !0),
        e.$el.off("pointerup", _, !0);
    }
    n("beforeInit", () => {
      r = R(
        `<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
      );
    }),
      n("afterInit", () => {
        !e.params.a11y.enabled || z();
      }),
      n(
        "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
        () => {
          !e.params.a11y.enabled || H();
        }
      ),
      n("fromEdge toEdge afterInit lock unlock", () => {
        !e.params.a11y.enabled || E();
      }),
      n("paginationUpdate", () => {
        !e.params.a11y.enabled || $();
      }),
      n("destroy", () => {
        !e.params.a11y.enabled || k();
      });
  }
  function Kn({ swiper: e, extendParams: t, on: n }) {
    t({
      history: {
        enabled: !1,
        root: "",
        replaceState: !1,
        key: "slides",
        keepQuery: !1,
      },
    });
    let r = !1,
      i = {},
      a = (f) =>
        f
          .toString()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, ""),
      c = (f) => {
        let v = J(),
          g;
        f ? (g = new URL(f)) : (g = v.location);
        let h = g.pathname
            .slice(1)
            .split("/")
            .filter((m) => m !== ""),
          p = h.length,
          E = h[p - 2],
          x = h[p - 1];
        return {
          key: E,
          value: x,
        };
      },
      u = (f, v) => {
        let g = J();
        if (!r || !e.params.history.enabled) return;
        let h;
        e.params.url ? (h = new URL(e.params.url)) : (h = g.location);
        let p = e.slides.eq(v),
          E = a(p.attr("data-history"));
        if (e.params.history.root.length > 0) {
          let m = e.params.history.root;
          m[m.length - 1] === "/" && (m = m.slice(0, m.length - 1)),
            (E = `${m}/${f}/${E}`);
        } else h.pathname.includes(f) || (E = `${f}/${E}`);
        e.params.history.keepQuery && (E += h.search);
        let x = g.history.state;
        (x && x.value === E) ||
          (e.params.history.replaceState
            ? g.history.replaceState(
                {
                  value: E,
                },
                null,
                E
              )
            : g.history.pushState(
                {
                  value: E,
                },
                null,
                E
              ));
      },
      o = (f, v, g) => {
        if (v)
          for (let h = 0, p = e.slides.length; h < p; h += 1) {
            let E = e.slides.eq(h);
            if (
              a(E.attr("data-history")) === v &&
              !E.hasClass(e.params.slideDuplicateClass)
            ) {
              let m = E.index();
              e.slideTo(m, f, g);
            }
          }
        else e.slideTo(0, f, g);
      },
      d = () => {
        (i = c(e.params.url)), o(e.params.speed, i.value, !1);
      },
      l = () => {
        let f = J();
        if (!!e.params.history) {
          if (!f.history || !f.history.pushState) {
            (e.params.history.enabled = !1),
              (e.params.hashNavigation.enabled = !0);
            return;
          }
          (r = !0),
            (i = c(e.params.url)),
            !(!i.key && !i.value) &&
              (o(0, i.value, e.params.runCallbacksOnInit),
              e.params.history.replaceState ||
                f.addEventListener("popstate", d));
        }
      },
      s = () => {
        let f = J();
        e.params.history.replaceState || f.removeEventListener("popstate", d);
      };
    n("init", () => {
      e.params.history.enabled && l();
    }),
      n("destroy", () => {
        e.params.history.enabled && s();
      }),
      n("transitionEnd _freeModeNoMomentumRelease", () => {
        r && u(e.params.history.key, e.activeIndex);
      }),
      n("slideChange", () => {
        r && e.params.cssMode && u(e.params.history.key, e.activeIndex);
      });
  }
  function Zn({ swiper: e, extendParams: t, emit: n, on: r }) {
    let i = !1,
      a = ie(),
      c = J();
    t({
      hashNavigation: {
        enabled: !1,
        replaceState: !1,
        watchState: !1,
      },
    });
    let u = () => {
        n("hashChange");
        let s = a.location.hash.replace("#", ""),
          f = e.slides.eq(e.activeIndex).attr("data-hash");
        if (s !== f) {
          let v = e.$wrapperEl
            .children(`.${e.params.slideClass}[data-hash="${s}"]`)
            .index();
          if (typeof v > "u") return;
          e.slideTo(v);
        }
      },
      o = () => {
        if (!(!i || !e.params.hashNavigation.enabled))
          if (
            e.params.hashNavigation.replaceState &&
            c.history &&
            c.history.replaceState
          )
            c.history.replaceState(
              null,
              null,
              `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || ""
            ),
              n("hashSet");
          else {
            let s = e.slides.eq(e.activeIndex),
              f = s.attr("data-hash") || s.attr("data-history");
            (a.location.hash = f || ""), n("hashSet");
          }
      },
      d = () => {
        if (
          !e.params.hashNavigation.enabled ||
          (e.params.history && e.params.history.enabled)
        )
          return;
        i = !0;
        let s = a.location.hash.replace("#", "");
        if (s)
          for (let v = 0, g = e.slides.length; v < g; v += 1) {
            let h = e.slides.eq(v);
            if (
              (h.attr("data-hash") || h.attr("data-history")) === s &&
              !h.hasClass(e.params.slideDuplicateClass)
            ) {
              let E = h.index();
              e.slideTo(E, 0, e.params.runCallbacksOnInit, !0);
            }
          }
        e.params.hashNavigation.watchState && R(c).on("hashchange", u);
      },
      l = () => {
        e.params.hashNavigation.watchState && R(c).off("hashchange", u);
      };
    r("init", () => {
      e.params.hashNavigation.enabled && d();
    }),
      r("destroy", () => {
        e.params.hashNavigation.enabled && l();
      }),
      r("transitionEnd _freeModeNoMomentumRelease", () => {
        i && o();
      }),
      r("slideChange", () => {
        i && e.params.cssMode && o();
      });
  }
  function Qn({ swiper: e, extendParams: t, on: n, emit: r }) {
    let i;
    (e.autoplay = {
      running: !1,
      paused: !1,
    }),
      t({
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1,
          pauseOnMouseEnter: !1,
        },
      });
    function a() {
      if (!e.size) {
        (e.autoplay.running = !1), (e.autoplay.paused = !1);
        return;
      }
      let h = e.slides.eq(e.activeIndex),
        p = e.params.autoplay.delay;
      h.attr("data-swiper-autoplay") &&
        (p = h.attr("data-swiper-autoplay") || e.params.autoplay.delay),
        clearTimeout(i),
        (i = $e(() => {
          let E;
          e.params.autoplay.reverseDirection
            ? e.params.loop
              ? (e.loopFix(),
                (E = e.slidePrev(e.params.speed, !0, !0)),
                r("autoplay"))
              : e.isBeginning
              ? e.params.autoplay.stopOnLastSlide
                ? u()
                : ((E = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0)),
                  r("autoplay"))
              : ((E = e.slidePrev(e.params.speed, !0, !0)), r("autoplay"))
            : e.params.loop
            ? (e.loopFix(),
              (E = e.slideNext(e.params.speed, !0, !0)),
              r("autoplay"))
            : e.isEnd
            ? e.params.autoplay.stopOnLastSlide
              ? u()
              : ((E = e.slideTo(0, e.params.speed, !0, !0)), r("autoplay"))
            : ((E = e.slideNext(e.params.speed, !0, !0)), r("autoplay")),
            ((e.params.cssMode && e.autoplay.running) || E === !1) && a();
        }, p));
    }
    function c() {
      return typeof i < "u" || e.autoplay.running
        ? !1
        : ((e.autoplay.running = !0), r("autoplayStart"), a(), !0);
    }
    function u() {
      return !e.autoplay.running || typeof i > "u"
        ? !1
        : (i && (clearTimeout(i), (i = void 0)),
          (e.autoplay.running = !1),
          r("autoplayStop"),
          !0);
    }
    function o(h) {
      !e.autoplay.running ||
        e.autoplay.paused ||
        (i && clearTimeout(i),
        (e.autoplay.paused = !0),
        h === 0 || !e.params.autoplay.waitForTransition
          ? ((e.autoplay.paused = !1), a())
          : ["transitionend", "webkitTransitionEnd"].forEach((p) => {
              e.$wrapperEl[0].addEventListener(p, l);
            }));
    }
    function d() {
      let h = ie();
      h.visibilityState === "hidden" && e.autoplay.running && o(),
        h.visibilityState === "visible" &&
          e.autoplay.paused &&
          (a(), (e.autoplay.paused = !1));
    }
    function l(h) {
      !e ||
        e.destroyed ||
        !e.$wrapperEl ||
        (h.target === e.$wrapperEl[0] &&
          (["transitionend", "webkitTransitionEnd"].forEach((p) => {
            e.$wrapperEl[0].removeEventListener(p, l);
          }),
          (e.autoplay.paused = !1),
          e.autoplay.running ? a() : u()));
    }
    function s() {
      e.params.autoplay.disableOnInteraction ? u() : (r("autoplayPause"), o()),
        ["transitionend", "webkitTransitionEnd"].forEach((h) => {
          e.$wrapperEl[0].removeEventListener(h, l);
        });
    }
    function f() {
      e.params.autoplay.disableOnInteraction ||
        ((e.autoplay.paused = !1), r("autoplayResume"), a());
    }
    function v() {
      e.params.autoplay.pauseOnMouseEnter &&
        (e.$el.on("mouseenter", s), e.$el.on("mouseleave", f));
    }
    function g() {
      e.$el.off("mouseenter", s), e.$el.off("mouseleave", f);
    }
    n("init", () => {
      e.params.autoplay.enabled &&
        (c(), ie().addEventListener("visibilitychange", d), v());
    }),
      n("beforeTransitionStart", (h, p, E) => {
        e.autoplay.running &&
          (E || !e.params.autoplay.disableOnInteraction
            ? e.autoplay.pause(p)
            : u());
      }),
      n("sliderFirstMove", () => {
        e.autoplay.running &&
          (e.params.autoplay.disableOnInteraction ? u() : o());
      }),
      n("touchEnd", () => {
        e.params.cssMode &&
          e.autoplay.paused &&
          !e.params.autoplay.disableOnInteraction &&
          a();
      }),
      n("destroy", () => {
        g(),
          e.autoplay.running && u(),
          ie().removeEventListener("visibilitychange", d);
      }),
      Object.assign(e.autoplay, {
        pause: o,
        run: a,
        start: c,
        stop: u,
      });
  }
  function Jn({ swiper: e, extendParams: t, on: n }) {
    t({
      thumbs: {
        swiper: null,
        multipleActiveThumbs: !0,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-thumbs",
      },
    });
    let r = !1,
      i = !1;
    e.thumbs = {
      swiper: null,
    };
    function a() {
      let o = e.thumbs.swiper;
      if (!o || o.destroyed) return;
      let d = o.clickedIndex,
        l = o.clickedSlide;
      if (
        (l && R(l).hasClass(e.params.thumbs.slideThumbActiveClass)) ||
        typeof d > "u" ||
        d === null
      )
        return;
      let s;
      if (
        (o.params.loop
          ? (s = parseInt(
              R(o.clickedSlide).attr("data-swiper-slide-index"),
              10
            ))
          : (s = d),
        e.params.loop)
      ) {
        let f = e.activeIndex;
        e.slides.eq(f).hasClass(e.params.slideDuplicateClass) &&
          (e.loopFix(),
          (e._clientLeft = e.$wrapperEl[0].clientLeft),
          (f = e.activeIndex));
        let v = e.slides
            .eq(f)
            .prevAll(`[data-swiper-slide-index="${s}"]`)
            .eq(0)
            .index(),
          g = e.slides
            .eq(f)
            .nextAll(`[data-swiper-slide-index="${s}"]`)
            .eq(0)
            .index();
        typeof v > "u"
          ? (s = g)
          : typeof g > "u"
          ? (s = v)
          : g - f < f - v
          ? (s = g)
          : (s = v);
      }
      e.slideTo(s);
    }
    function c() {
      let { thumbs: o } = e.params;
      if (r) return !1;
      r = !0;
      let d = e.constructor;
      if (o.swiper instanceof d)
        (e.thumbs.swiper = o.swiper),
          Object.assign(e.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
          Object.assign(e.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          });
      else if (tt(o.swiper)) {
        let l = Object.assign({}, o.swiper);
        Object.assign(l, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1,
        }),
          (e.thumbs.swiper = new d(l)),
          (i = !0);
      }
      return (
        e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
        e.thumbs.swiper.on("tap", a),
        !0
      );
    }
    function u(o) {
      let d = e.thumbs.swiper;
      if (!d || d.destroyed) return;
      let l =
          d.params.slidesPerView === "auto"
            ? d.slidesPerViewDynamic()
            : d.params.slidesPerView,
        s = 1,
        f = e.params.thumbs.slideThumbActiveClass;
      if (
        (e.params.slidesPerView > 1 &&
          !e.params.centeredSlides &&
          (s = e.params.slidesPerView),
        e.params.thumbs.multipleActiveThumbs || (s = 1),
        (s = Math.floor(s)),
        d.slides.removeClass(f),
        d.params.loop || (d.params.virtual && d.params.virtual.enabled))
      )
        for (let h = 0; h < s; h += 1)
          d.$wrapperEl
            .children(`[data-swiper-slide-index="${e.realIndex + h}"]`)
            .addClass(f);
      else
        for (let h = 0; h < s; h += 1) d.slides.eq(e.realIndex + h).addClass(f);
      let v = e.params.thumbs.autoScrollOffset,
        g = v && !d.params.loop;
      if (e.realIndex !== d.realIndex || g) {
        let h = d.activeIndex,
          p,
          E;
        if (d.params.loop) {
          d.slides.eq(h).hasClass(d.params.slideDuplicateClass) &&
            (d.loopFix(),
            (d._clientLeft = d.$wrapperEl[0].clientLeft),
            (h = d.activeIndex));
          let x = d.slides
              .eq(h)
              .prevAll(`[data-swiper-slide-index="${e.realIndex}"]`)
              .eq(0)
              .index(),
            m = d.slides
              .eq(h)
              .nextAll(`[data-swiper-slide-index="${e.realIndex}"]`)
              .eq(0)
              .index();
          typeof x > "u"
            ? (p = m)
            : typeof m > "u"
            ? (p = x)
            : m - h === h - x
            ? (p = d.params.slidesPerGroup > 1 ? m : h)
            : m - h < h - x
            ? (p = m)
            : (p = x),
            (E = e.activeIndex > e.previousIndex ? "next" : "prev");
        } else (p = e.realIndex), (E = p > e.previousIndex ? "next" : "prev");
        g && (p += E === "next" ? v : -1 * v),
          d.visibleSlidesIndexes &&
            d.visibleSlidesIndexes.indexOf(p) < 0 &&
            (d.params.centeredSlides
              ? p > h
                ? (p = p - Math.floor(l / 2) + 1)
                : (p = p + Math.floor(l / 2) - 1)
              : p > h && d.params.slidesPerGroup,
            d.slideTo(p, o ? 0 : void 0));
      }
    }
    n("beforeInit", () => {
      let { thumbs: o } = e.params;
      !o || !o.swiper || (c(), u(!0));
    }),
      n("slideChange update resize observerUpdate", () => {
        u();
      }),
      n("setTransition", (o, d) => {
        let l = e.thumbs.swiper;
        !l || l.destroyed || l.setTransition(d);
      }),
      n("beforeDestroy", () => {
        let o = e.thumbs.swiper;
        !o || o.destroyed || (i && o.destroy());
      }),
      Object.assign(e.thumbs, {
        init: c,
        update: u,
      });
  }
  function er({ swiper: e, extendParams: t, emit: n, once: r }) {
    t({
      freeMode: {
        enabled: !1,
        momentum: !0,
        momentumRatio: 1,
        momentumBounce: !0,
        momentumBounceRatio: 1,
        momentumVelocityRatio: 1,
        sticky: !1,
        minimumVelocity: 0.02,
      },
    });
    function i() {
      let u = e.getTranslate();
      e.setTranslate(u),
        e.setTransition(0),
        (e.touchEventsData.velocities.length = 0),
        e.freeMode.onTouchEnd({
          currentPos: e.rtl ? e.translate : -e.translate,
        });
    }
    function a() {
      let { touchEventsData: u, touches: o } = e;
      u.velocities.length === 0 &&
        u.velocities.push({
          position: o[e.isHorizontal() ? "startX" : "startY"],
          time: u.touchStartTime,
        }),
        u.velocities.push({
          position: o[e.isHorizontal() ? "currentX" : "currentY"],
          time: Ee(),
        });
    }
    function c({ currentPos: u }) {
      let {
          params: o,
          $wrapperEl: d,
          rtlTranslate: l,
          snapGrid: s,
          touchEventsData: f,
        } = e,
        g = Ee() - f.touchStartTime;
      if (u < -e.minTranslate()) {
        e.slideTo(e.activeIndex);
        return;
      }
      if (u > -e.maxTranslate()) {
        e.slides.length < s.length
          ? e.slideTo(s.length - 1)
          : e.slideTo(e.slides.length - 1);
        return;
      }
      if (o.freeMode.momentum) {
        if (f.velocities.length > 1) {
          let I = f.velocities.pop(),
            _ = f.velocities.pop(),
            D = I.position - _.position,
            H = I.time - _.time;
          (e.velocity = D / H),
            (e.velocity /= 2),
            Math.abs(e.velocity) < o.freeMode.minimumVelocity &&
              (e.velocity = 0),
            (H > 150 || Ee() - I.time > 300) && (e.velocity = 0);
        } else e.velocity = 0;
        (e.velocity *= o.freeMode.momentumVelocityRatio),
          (f.velocities.length = 0);
        let h = 1e3 * o.freeMode.momentumRatio,
          p = e.velocity * h,
          E = e.translate + p;
        l && (E = -E);
        let x = !1,
          m,
          $ = Math.abs(e.velocity) * 20 * o.freeMode.momentumBounceRatio,
          C;
        if (E < e.maxTranslate())
          o.freeMode.momentumBounce
            ? (E + e.maxTranslate() < -$ && (E = e.maxTranslate() - $),
              (m = e.maxTranslate()),
              (x = !0),
              (f.allowMomentumBounce = !0))
            : (E = e.maxTranslate()),
            o.loop && o.centeredSlides && (C = !0);
        else if (E > e.minTranslate())
          o.freeMode.momentumBounce
            ? (E - e.minTranslate() > $ && (E = e.minTranslate() + $),
              (m = e.minTranslate()),
              (x = !0),
              (f.allowMomentumBounce = !0))
            : (E = e.minTranslate()),
            o.loop && o.centeredSlides && (C = !0);
        else if (o.freeMode.sticky) {
          let I;
          for (let _ = 0; _ < s.length; _ += 1)
            if (s[_] > -E) {
              I = _;
              break;
            }
          Math.abs(s[I] - E) < Math.abs(s[I - 1] - E) ||
          e.swipeDirection === "next"
            ? (E = s[I])
            : (E = s[I - 1]),
            (E = -E);
        }
        if (
          (C &&
            r("transitionEnd", () => {
              e.loopFix();
            }),
          e.velocity !== 0)
        ) {
          if (
            (l
              ? (h = Math.abs((-E - e.translate) / e.velocity))
              : (h = Math.abs((E - e.translate) / e.velocity)),
            o.freeMode.sticky)
          ) {
            let I = Math.abs((l ? -E : E) - e.translate),
              _ = e.slidesSizesGrid[e.activeIndex];
            I < _
              ? (h = o.speed)
              : I < 2 * _
              ? (h = o.speed * 1.5)
              : (h = o.speed * 2.5);
          }
        } else if (o.freeMode.sticky) {
          e.slideToClosest();
          return;
        }
        o.freeMode.momentumBounce && x
          ? (e.updateProgress(m),
            e.setTransition(h),
            e.setTranslate(E),
            e.transitionStart(!0, e.swipeDirection),
            (e.animating = !0),
            d.transitionEnd(() => {
              !e ||
                e.destroyed ||
                !f.allowMomentumBounce ||
                (n("momentumBounce"),
                e.setTransition(o.speed),
                setTimeout(() => {
                  e.setTranslate(m),
                    d.transitionEnd(() => {
                      !e || e.destroyed || e.transitionEnd();
                    });
                }, 0));
            }))
          : e.velocity
          ? (n("_freeModeNoMomentumRelease"),
            e.updateProgress(E),
            e.setTransition(h),
            e.setTranslate(E),
            e.transitionStart(!0, e.swipeDirection),
            e.animating ||
              ((e.animating = !0),
              d.transitionEnd(() => {
                !e || e.destroyed || e.transitionEnd();
              })))
          : e.updateProgress(E),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
      } else if (o.freeMode.sticky) {
        e.slideToClosest();
        return;
      } else o.freeMode && n("_freeModeNoMomentumRelease");
      (!o.freeMode.momentum || g >= o.longSwipesMs) &&
        (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses());
    }
    Object.assign(e, {
      freeMode: {
        onTouchStart: i,
        onTouchMove: a,
        onTouchEnd: c,
      },
    });
  }
  function tr({ swiper: e, extendParams: t }) {
    t({
      grid: {
        rows: 1,
        fill: "column",
      },
    });
    let n,
      r,
      i,
      a = (o) => {
        let { slidesPerView: d } = e.params,
          { rows: l, fill: s } = e.params.grid;
        (r = n / l),
          (i = Math.floor(o / l)),
          Math.floor(o / l) === o / l ? (n = o) : (n = Math.ceil(o / l) * l),
          d !== "auto" && s === "row" && (n = Math.max(n, d * l));
      },
      c = (o, d, l, s) => {
        let { slidesPerGroup: f, spaceBetween: v } = e.params,
          { rows: g, fill: h } = e.params.grid,
          p,
          E,
          x;
        if (h === "row" && f > 1) {
          let m = Math.floor(o / (f * g)),
            $ = o - g * f * m,
            C = m === 0 ? f : Math.min(Math.ceil((l - m * g * f) / g), f);
          (x = Math.floor($ / C)),
            (E = $ - x * C + m * f),
            (p = E + (x * n) / g),
            d.css({
              "-webkit-order": p,
              order: p,
            });
        } else
          h === "column"
            ? ((E = Math.floor(o / g)),
              (x = o - E * g),
              (E > i || (E === i && x === g - 1)) &&
                ((x += 1), x >= g && ((x = 0), (E += 1))))
            : ((x = Math.floor(o / r)), (E = o - x * r));
        d.css(s("margin-top"), x !== 0 ? v && `${v}px` : "");
      },
      u = (o, d, l) => {
        let { spaceBetween: s, centeredSlides: f, roundLengths: v } = e.params,
          { rows: g } = e.params.grid;
        if (
          ((e.virtualSize = (o + s) * n),
          (e.virtualSize = Math.ceil(e.virtualSize / g) - s),
          e.$wrapperEl.css({
            [l("width")]: `${e.virtualSize + s}px`,
          }),
          f)
        ) {
          d.splice(0, d.length);
          let h = [];
          for (let p = 0; p < d.length; p += 1) {
            let E = d[p];
            v && (E = Math.floor(E)), d[p] < e.virtualSize + d[0] && h.push(E);
          }
          d.push(...h);
        }
      };
    e.grid = {
      initSlides: a,
      updateSlide: c,
      updateWrapperSize: u,
    };
  }
  function nr(e) {
    let t = this,
      { $wrapperEl: n, params: r } = t;
    if ((r.loop && t.loopDestroy(), typeof e == "object" && "length" in e))
      for (let i = 0; i < e.length; i += 1) e[i] && n.append(e[i]);
    else n.append(e);
    r.loop && t.loopCreate(), r.observer || t.update();
  }
  function rr(e) {
    let t = this,
      { params: n, $wrapperEl: r, activeIndex: i } = t;
    n.loop && t.loopDestroy();
    let a = i + 1;
    if (typeof e == "object" && "length" in e) {
      for (let c = 0; c < e.length; c += 1) e[c] && r.prepend(e[c]);
      a = i + e.length;
    } else r.prepend(e);
    n.loop && t.loopCreate(), n.observer || t.update(), t.slideTo(a, 0, !1);
  }
  function ir(e, t) {
    let n = this,
      { $wrapperEl: r, params: i, activeIndex: a } = n,
      c = a;
    i.loop &&
      ((c -= n.loopedSlides),
      n.loopDestroy(),
      (n.slides = r.children(`.${i.slideClass}`)));
    let u = n.slides.length;
    if (e <= 0) {
      n.prependSlide(t);
      return;
    }
    if (e >= u) {
      n.appendSlide(t);
      return;
    }
    let o = c > e ? c + 1 : c,
      d = [];
    for (let l = u - 1; l >= e; l -= 1) {
      let s = n.slides.eq(l);
      s.remove(), d.unshift(s);
    }
    if (typeof t == "object" && "length" in t) {
      for (let l = 0; l < t.length; l += 1) t[l] && r.append(t[l]);
      o = c > e ? c + t.length : c;
    } else r.append(t);
    for (let l = 0; l < d.length; l += 1) r.append(d[l]);
    i.loop && n.loopCreate(),
      i.observer || n.update(),
      i.loop ? n.slideTo(o + n.loopedSlides, 0, !1) : n.slideTo(o, 0, !1);
  }
  function ar(e) {
    let t = this,
      { params: n, $wrapperEl: r, activeIndex: i } = t,
      a = i;
    n.loop &&
      ((a -= t.loopedSlides),
      t.loopDestroy(),
      (t.slides = r.children(`.${n.slideClass}`)));
    let c = a,
      u;
    if (typeof e == "object" && "length" in e) {
      for (let o = 0; o < e.length; o += 1)
        (u = e[o]), t.slides[u] && t.slides.eq(u).remove(), u < c && (c -= 1);
      c = Math.max(c, 0);
    } else
      (u = e),
        t.slides[u] && t.slides.eq(u).remove(),
        u < c && (c -= 1),
        (c = Math.max(c, 0));
    n.loop && t.loopCreate(),
      n.observer || t.update(),
      n.loop ? t.slideTo(c + t.loopedSlides, 0, !1) : t.slideTo(c, 0, !1);
  }
  function or() {
    let e = this,
      t = [];
    for (let n = 0; n < e.slides.length; n += 1) t.push(n);
    e.removeSlide(t);
  }
  function sr({ swiper: e }) {
    Object.assign(e, {
      appendSlide: nr.bind(e),
      prependSlide: rr.bind(e),
      addSlide: ir.bind(e),
      removeSlide: ar.bind(e),
      removeAllSlides: or.bind(e),
    });
  }
  function ke(e) {
    let {
      effect: t,
      swiper: n,
      on: r,
      setTranslate: i,
      setTransition: a,
      overwriteParams: c,
      perspective: u,
      recreateShadows: o,
      getEffectParams: d,
    } = e;
    r("beforeInit", () => {
      if (n.params.effect !== t) return;
      n.classNames.push(`${n.params.containerModifierClass}${t}`),
        u && u() && n.classNames.push(`${n.params.containerModifierClass}3d`);
      let s = c ? c() : {};
      Object.assign(n.params, s), Object.assign(n.originalParams, s);
    }),
      r("setTranslate", () => {
        n.params.effect === t && i();
      }),
      r("setTransition", (s, f) => {
        n.params.effect === t && a(f);
      }),
      r("transitionEnd", () => {
        if (n.params.effect === t && o) {
          if (!d || !d().slideShadows) return;
          n.slides.each((s) => {
            n.$(s)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .remove();
          }),
            o();
        }
      });
    let l;
    r("virtualUpdate", () => {
      n.params.effect === t &&
        (n.slides.length || (l = !0),
        requestAnimationFrame(() => {
          l && n.slides && n.slides.length && (i(), (l = !1));
        }));
    });
  }
  function Ie(e, t) {
    return e.transformEl
      ? t.find(e.transformEl).css({
          "backface-visibility": "hidden",
          "-webkit-backface-visibility": "hidden",
        })
      : t;
  }
  function Fe({ swiper: e, duration: t, transformEl: n, allSlides: r }) {
    let { slides: i, activeIndex: a, $wrapperEl: c } = e;
    if (e.params.virtualTranslate && t !== 0) {
      let u = !1,
        o;
      r ? (o = n ? i.find(n) : i) : (o = n ? i.eq(a).find(n) : i.eq(a)),
        o.transitionEnd(() => {
          if (u || !e || e.destroyed) return;
          (u = !0), (e.animating = !1);
          let d = ["webkitTransitionEnd", "transitionend"];
          for (let l = 0; l < d.length; l += 1) c.trigger(d[l]);
        });
    }
  }
  function lr({ swiper: e, extendParams: t, on: n }) {
    t({
      fadeEffect: {
        crossFade: !1,
        transformEl: null,
      },
    }),
      ke({
        effect: "fade",
        swiper: e,
        on: n,
        setTranslate: () => {
          let { slides: a } = e,
            c = e.params.fadeEffect;
          for (let u = 0; u < a.length; u += 1) {
            let o = e.slides.eq(u),
              l = -o[0].swiperSlideOffset;
            e.params.virtualTranslate || (l -= e.translate);
            let s = 0;
            e.isHorizontal() || ((s = l), (l = 0));
            let f = e.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(o[0].progress), 0)
              : 1 + Math.min(Math.max(o[0].progress, -1), 0);
            Ie(c, o)
              .css({
                opacity: f,
              })
              .transform(`translate3d(${l}px, ${s}px, 0px)`);
          }
        },
        setTransition: (a) => {
          let { transformEl: c } = e.params.fadeEffect;
          (c ? e.slides.find(c) : e.slides).transition(a),
            Fe({
              swiper: e,
              duration: a,
              transformEl: c,
              allSlides: !0,
            });
        },
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !e.params.cssMode,
        }),
      });
  }
  function cr({ swiper: e, extendParams: t, on: n }) {
    t({
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    });
    let r = (u, o, d) => {
      let l = d
          ? u.find(".swiper-slide-shadow-left")
          : u.find(".swiper-slide-shadow-top"),
        s = d
          ? u.find(".swiper-slide-shadow-right")
          : u.find(".swiper-slide-shadow-bottom");
      l.length === 0 &&
        ((l = R(
          `<div class="swiper-slide-shadow-${d ? "left" : "top"}"></div>`
        )),
        u.append(l)),
        s.length === 0 &&
          ((s = R(
            `<div class="swiper-slide-shadow-${d ? "right" : "bottom"}"></div>`
          )),
          u.append(s)),
        l.length && (l[0].style.opacity = Math.max(-o, 0)),
        s.length && (s[0].style.opacity = Math.max(o, 0));
    };
    ke({
      effect: "cube",
      swiper: e,
      on: n,
      setTranslate: () => {
        let {
            $el: u,
            $wrapperEl: o,
            slides: d,
            width: l,
            height: s,
            rtlTranslate: f,
            size: v,
            browser: g,
          } = e,
          h = e.params.cubeEffect,
          p = e.isHorizontal(),
          E = e.virtual && e.params.virtual.enabled,
          x = 0,
          m;
        h.shadow &&
          (p
            ? ((m = o.find(".swiper-cube-shadow")),
              m.length === 0 &&
                ((m = R('<div class="swiper-cube-shadow"></div>')),
                o.append(m)),
              m.css({
                height: `${l}px`,
              }))
            : ((m = u.find(".swiper-cube-shadow")),
              m.length === 0 &&
                ((m = R('<div class="swiper-cube-shadow"></div>')),
                u.append(m))));
        for (let C = 0; C < d.length; C += 1) {
          let I = d.eq(C),
            _ = C;
          E && (_ = parseInt(I.attr("data-swiper-slide-index"), 10));
          let D = _ * 90,
            H = Math.floor(D / 360);
          f && ((D = -D), (H = Math.floor(-D / 360)));
          let z = Math.max(Math.min(I[0].progress, 1), -1),
            k = 0,
            S = 0,
            L = 0;
          _ % 4 === 0
            ? ((k = -H * 4 * v), (L = 0))
            : (_ - 1) % 4 === 0
            ? ((k = 0), (L = -H * 4 * v))
            : (_ - 2) % 4 === 0
            ? ((k = v + H * 4 * v), (L = v))
            : (_ - 3) % 4 === 0 && ((k = -v), (L = 3 * v + v * 4 * H)),
            f && (k = -k),
            p || ((S = k), (k = 0));
          let q = `rotateX(${p ? 0 : -D}deg) rotateY(${
            p ? D : 0
          }deg) translate3d(${k}px, ${S}px, ${L}px)`;
          z <= 1 &&
            z > -1 &&
            ((x = _ * 90 + z * 90), f && (x = -_ * 90 - z * 90)),
            I.transform(q),
            h.slideShadows && r(I, z, p);
        }
        if (
          (o.css({
            "-webkit-transform-origin": `50% 50% -${v / 2}px`,
            "transform-origin": `50% 50% -${v / 2}px`,
          }),
          h.shadow)
        )
          if (p)
            m.transform(
              `translate3d(0px, ${l / 2 + h.shadowOffset}px, ${
                -l / 2
              }px) rotateX(90deg) rotateZ(0deg) scale(${h.shadowScale})`
            );
          else {
            let C = Math.abs(x) - Math.floor(Math.abs(x) / 90) * 90,
              I =
                1.5 -
                (Math.sin((C * 2 * Math.PI) / 360) / 2 +
                  Math.cos((C * 2 * Math.PI) / 360) / 2),
              _ = h.shadowScale,
              D = h.shadowScale / I,
              H = h.shadowOffset;
            m.transform(
              `scale3d(${_}, 1, ${D}) translate3d(0px, ${s / 2 + H}px, ${
                -s / 2 / D
              }px) rotateX(-90deg)`
            );
          }
        let $ = g.isSafari || g.isWebView ? -v / 2 : 0;
        o.transform(
          `translate3d(0px,0,${$}px) rotateX(${
            e.isHorizontal() ? 0 : x
          }deg) rotateY(${e.isHorizontal() ? -x : 0}deg)`
        ),
          o[0].style.setProperty("--swiper-cube-translate-z", `${$}px`);
      },
      setTransition: (u) => {
        let { $el: o, slides: d } = e;
        d
          .transition(u)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(u),
          e.params.cubeEffect.shadow &&
            !e.isHorizontal() &&
            o.find(".swiper-cube-shadow").transition(u);
      },
      recreateShadows: () => {
        let u = e.isHorizontal();
        e.slides.each((o) => {
          let d = Math.max(Math.min(o.progress, 1), -1);
          r(R(o), d, u);
        });
      },
      getEffectParams: () => e.params.cubeEffect,
      perspective: () => !0,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: !1,
        virtualTranslate: !0,
      }),
    });
  }
  function Ae(e, t, n) {
    let r = `swiper-slide-shadow${n ? `-${n}` : ""}`,
      i = e.transformEl ? t.find(e.transformEl) : t,
      a = i.children(`.${r}`);
    return (
      a.length ||
        ((a = R(`<div class="swiper-slide-shadow${n ? `-${n}` : ""}"></div>`)),
        i.append(a)),
      a
    );
  }
  function dr({ swiper: e, extendParams: t, on: n }) {
    t({
      flipEffect: {
        slideShadows: !0,
        limitRotation: !0,
        transformEl: null,
      },
    });
    let r = (u, o, d) => {
      let l = e.isHorizontal()
          ? u.find(".swiper-slide-shadow-left")
          : u.find(".swiper-slide-shadow-top"),
        s = e.isHorizontal()
          ? u.find(".swiper-slide-shadow-right")
          : u.find(".swiper-slide-shadow-bottom");
      l.length === 0 && (l = Ae(d, u, e.isHorizontal() ? "left" : "top")),
        s.length === 0 && (s = Ae(d, u, e.isHorizontal() ? "right" : "bottom")),
        l.length && (l[0].style.opacity = Math.max(-o, 0)),
        s.length && (s[0].style.opacity = Math.max(o, 0));
    };
    ke({
      effect: "flip",
      swiper: e,
      on: n,
      setTranslate: () => {
        let { slides: u, rtlTranslate: o } = e,
          d = e.params.flipEffect;
        for (let l = 0; l < u.length; l += 1) {
          let s = u.eq(l),
            f = s[0].progress;
          e.params.flipEffect.limitRotation &&
            (f = Math.max(Math.min(s[0].progress, 1), -1));
          let v = s[0].swiperSlideOffset,
            h = -180 * f,
            p = 0,
            E = e.params.cssMode ? -v - e.translate : -v,
            x = 0;
          e.isHorizontal()
            ? o && (h = -h)
            : ((x = E), (E = 0), (p = -h), (h = 0)),
            (s[0].style.zIndex = -Math.abs(Math.round(f)) + u.length),
            d.slideShadows && r(s, f, d);
          let m = `translate3d(${E}px, ${x}px, 0px) rotateX(${p}deg) rotateY(${h}deg)`;
          Ie(d, s).transform(m);
        }
      },
      setTransition: (u) => {
        let { transformEl: o } = e.params.flipEffect;
        (o ? e.slides.find(o) : e.slides)
          .transition(u)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(u),
          Fe({
            swiper: e,
            duration: u,
            transformEl: o,
          });
      },
      recreateShadows: () => {
        let u = e.params.flipEffect;
        e.slides.each((o) => {
          let d = R(o),
            l = d[0].progress;
          e.params.flipEffect.limitRotation &&
            (l = Math.max(Math.min(o.progress, 1), -1)),
            r(d, l, u);
        });
      },
      getEffectParams: () => e.params.flipEffect,
      perspective: () => !0,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !e.params.cssMode,
      }),
    });
  }
  function ur({ swiper: e, extendParams: t, on: n }) {
    t({
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: !0,
        transformEl: null,
      },
    }),
      ke({
        effect: "coverflow",
        swiper: e,
        on: n,
        setTranslate: () => {
          let { width: a, height: c, slides: u, slidesSizesGrid: o } = e,
            d = e.params.coverflowEffect,
            l = e.isHorizontal(),
            s = e.translate,
            f = l ? -s + a / 2 : -s + c / 2,
            v = l ? d.rotate : -d.rotate,
            g = d.depth;
          for (let h = 0, p = u.length; h < p; h += 1) {
            let E = u.eq(h),
              x = o[h],
              m = E[0].swiperSlideOffset,
              $ = (f - m - x / 2) / x,
              C =
                typeof d.modifier == "function"
                  ? d.modifier($)
                  : $ * d.modifier,
              I = l ? v * C : 0,
              _ = l ? 0 : v * C,
              D = -g * Math.abs(C),
              H = d.stretch;
            typeof H == "string" &&
              H.indexOf("%") !== -1 &&
              (H = (parseFloat(d.stretch) / 100) * x);
            let z = l ? 0 : H * C,
              k = l ? H * C : 0,
              S = 1 - (1 - d.scale) * Math.abs(C);
            Math.abs(k) < 0.001 && (k = 0),
              Math.abs(z) < 0.001 && (z = 0),
              Math.abs(D) < 0.001 && (D = 0),
              Math.abs(I) < 0.001 && (I = 0),
              Math.abs(_) < 0.001 && (_ = 0),
              Math.abs(S) < 0.001 && (S = 0);
            let L = `translate3d(${k}px,${z}px,${D}px)  rotateX(${_}deg) rotateY(${I}deg) scale(${S})`;
            if (
              (Ie(d, E).transform(L),
              (E[0].style.zIndex = -Math.abs(Math.round(C)) + 1),
              d.slideShadows)
            ) {
              let j = l
                  ? E.find(".swiper-slide-shadow-left")
                  : E.find(".swiper-slide-shadow-top"),
                P = l
                  ? E.find(".swiper-slide-shadow-right")
                  : E.find(".swiper-slide-shadow-bottom");
              j.length === 0 && (j = Ae(d, E, l ? "left" : "top")),
                P.length === 0 && (P = Ae(d, E, l ? "right" : "bottom")),
                j.length && (j[0].style.opacity = C > 0 ? C : 0),
                P.length && (P[0].style.opacity = -C > 0 ? -C : 0);
            }
          }
        },
        setTransition: (a) => {
          let { transformEl: c } = e.params.coverflowEffect;
          (c ? e.slides.find(c) : e.slides)
            .transition(a)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(a);
        },
        perspective: () => !0,
        overwriteParams: () => ({
          watchSlidesProgress: !0,
        }),
      });
  }
  function fr({ swiper: e, extendParams: t, on: n }) {
    t({
      creativeEffect: {
        transformEl: null,
        limitProgress: 1,
        shadowPerProgress: !1,
        progressMultiplier: 1,
        perspective: !0,
        prev: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1,
        },
        next: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1,
        },
      },
    });
    let r = (c) => (typeof c == "string" ? c : `${c}px`);
    ke({
      effect: "creative",
      swiper: e,
      on: n,
      setTranslate: () => {
        let { slides: c, $wrapperEl: u, slidesSizesGrid: o } = e,
          d = e.params.creativeEffect,
          { progressMultiplier: l } = d,
          s = e.params.centeredSlides;
        if (s) {
          let f = o[0] / 2 - e.params.slidesOffsetBefore || 0;
          u.transform(`translateX(calc(50% - ${f}px))`);
        }
        for (let f = 0; f < c.length; f += 1) {
          let v = c.eq(f),
            g = v[0].progress,
            h = Math.min(
              Math.max(v[0].progress, -d.limitProgress),
              d.limitProgress
            ),
            p = h;
          s ||
            (p = Math.min(
              Math.max(v[0].originalProgress, -d.limitProgress),
              d.limitProgress
            ));
          let E = v[0].swiperSlideOffset,
            x = [e.params.cssMode ? -E - e.translate : -E, 0, 0],
            m = [0, 0, 0],
            $ = !1;
          e.isHorizontal() || ((x[1] = x[0]), (x[0] = 0));
          let C = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1,
          };
          h < 0 ? ((C = d.next), ($ = !0)) : h > 0 && ((C = d.prev), ($ = !0)),
            x.forEach((S, L) => {
              x[L] = `calc(${S}px + (${r(C.translate[L])} * ${Math.abs(
                h * l
              )}))`;
            }),
            m.forEach((S, L) => {
              m[L] = C.rotate[L] * Math.abs(h * l);
            }),
            (v[0].style.zIndex = -Math.abs(Math.round(g)) + c.length);
          let I = x.join(", "),
            _ = `rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`,
            D =
              p < 0
                ? `scale(${1 + (1 - C.scale) * p * l})`
                : `scale(${1 - (1 - C.scale) * p * l})`,
            H =
              p < 0 ? 1 + (1 - C.opacity) * p * l : 1 - (1 - C.opacity) * p * l,
            z = `translate3d(${I}) ${_} ${D}`;
          if (($ && C.shadow) || !$) {
            let S = v.children(".swiper-slide-shadow");
            if ((S.length === 0 && C.shadow && (S = Ae(d, v)), S.length)) {
              let L = d.shadowPerProgress ? h * (1 / d.limitProgress) : h;
              S[0].style.opacity = Math.min(Math.max(Math.abs(L), 0), 1);
            }
          }
          let k = Ie(d, v);
          k.transform(z).css({
            opacity: H,
          }),
            C.origin && k.css("transform-origin", C.origin);
        }
      },
      setTransition: (c) => {
        let { transformEl: u } = e.params.creativeEffect;
        (u ? e.slides.find(u) : e.slides)
          .transition(c)
          .find(".swiper-slide-shadow")
          .transition(c),
          Fe({
            swiper: e,
            duration: c,
            transformEl: u,
            allSlides: !0,
          });
      },
      perspective: () => e.params.creativeEffect.perspective,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !e.params.cssMode,
      }),
    });
  }
  function hr({ swiper: e, extendParams: t, on: n }) {
    t({
      cardsEffect: {
        slideShadows: !0,
        transformEl: null,
        rotate: !0,
        perSlideRotate: 2,
        perSlideOffset: 8,
      },
    }),
      ke({
        effect: "cards",
        swiper: e,
        on: n,
        setTranslate: () => {
          let { slides: a, activeIndex: c } = e,
            u = e.params.cardsEffect,
            { startTranslate: o, isTouched: d } = e.touchEventsData,
            l = e.translate;
          for (let s = 0; s < a.length; s += 1) {
            let f = a.eq(s),
              v = f[0].progress,
              g = Math.min(Math.max(v, -4), 4),
              h = f[0].swiperSlideOffset;
            e.params.centeredSlides &&
              !e.params.cssMode &&
              e.$wrapperEl.transform(`translateX(${e.minTranslate()}px)`),
              e.params.centeredSlides &&
                e.params.cssMode &&
                (h -= a[0].swiperSlideOffset);
            let p = e.params.cssMode ? -h - e.translate : -h,
              E = 0,
              x = -100 * Math.abs(g),
              m = 1,
              $ = -u.perSlideRotate * g,
              C = u.perSlideOffset - Math.abs(g) * 0.75,
              I =
                e.virtual && e.params.virtual.enabled ? e.virtual.from + s : s,
              _ =
                (I === c || I === c - 1) &&
                g > 0 &&
                g < 1 &&
                (d || e.params.cssMode) &&
                l < o,
              D =
                (I === c || I === c + 1) &&
                g < 0 &&
                g > -1 &&
                (d || e.params.cssMode) &&
                l > o;
            if (_ || D) {
              let S = (1 - Math.abs((Math.abs(g) - 0.5) / 0.5)) ** 0.5;
              ($ += -28 * g * S),
                (m += -0.5 * S),
                (C += 96 * S),
                (E = `${-25 * S * Math.abs(g)}%`);
            }
            if (
              (g < 0
                ? (p = `calc(${p}px + (${C * Math.abs(g)}%))`)
                : g > 0
                ? (p = `calc(${p}px + (-${C * Math.abs(g)}%))`)
                : (p = `${p}px`),
              !e.isHorizontal())
            ) {
              let S = E;
              (E = p), (p = S);
            }
            let H = g < 0 ? `${1 + (1 - m) * g}` : `${1 - (1 - m) * g}`,
              z = `
        translate3d(${p}, ${E}, ${x}px)
        rotateZ(${u.rotate ? $ : 0}deg)
        scale(${H})
      `;
            if (u.slideShadows) {
              let S = f.find(".swiper-slide-shadow");
              S.length === 0 && (S = Ae(u, f)),
                S.length &&
                  (S[0].style.opacity = Math.min(
                    Math.max((Math.abs(g) - 0.5) / 0.5, 0),
                    1
                  ));
            }
            (f[0].style.zIndex = -Math.abs(Math.round(v)) + a.length),
              Ie(u, f).transform(z);
          }
        },
        setTransition: (a) => {
          let { transformEl: c } = e.params.cardsEffect;
          (c ? e.slides.find(c) : e.slides)
            .transition(a)
            .find(".swiper-slide-shadow")
            .transition(a),
            Fe({
              swiper: e,
              duration: a,
              transformEl: c,
            });
        },
        perspective: () => !0,
        overwriteParams: () => ({
          watchSlidesProgress: !0,
          virtualTranslate: !e.params.cssMode,
        }),
      });
  }
  var Oo = [
    Hn,
    qn,
    Rn,
    jn,
    Vn,
    Fn,
    Gn,
    Wn,
    Xn,
    Yn,
    Un,
    Kn,
    Zn,
    Qn,
    Jn,
    er,
    tr,
    sr,
    lr,
    cr,
    dr,
    ur,
    fr,
    hr,
  ];
  nt.use(Oo);
  var De = Ar(ra());
  var ca = {
      update: null,
      begin: null,
      loopBegin: null,
      changeBegin: null,
      change: null,
      changeComplete: null,
      loopComplete: null,
      complete: null,
      loop: 1,
      direction: "normal",
      autoplay: !0,
      timelineOffset: 0,
    },
    br = {
      duration: 1e3,
      delay: 0,
      endDelay: 0,
      easing: "easeOutElastic(1, .5)",
      round: 0,
    },
    Do = [
      "translateX",
      "translateY",
      "translateZ",
      "rotate",
      "rotateX",
      "rotateY",
      "rotateZ",
      "scale",
      "scaleX",
      "scaleY",
      "scaleZ",
      "skew",
      "skewX",
      "skewY",
      "perspective",
      "matrix",
      "matrix3d",
    ],
    bt = {
      CSS: {},
      springs: {},
    };
  function Ne(e, t, n) {
    return Math.min(Math.max(e, t), n);
  }
  function ct(e, t) {
    return e.indexOf(t) > -1;
  }
  function gr(e, t) {
    return e.apply(null, t);
  }
  var U = {
    arr: function (e) {
      return Array.isArray(e);
    },
    obj: function (e) {
      return ct(Object.prototype.toString.call(e), "Object");
    },
    pth: function (e) {
      return U.obj(e) && e.hasOwnProperty("totalLength");
    },
    svg: function (e) {
      return e instanceof SVGElement;
    },
    inp: function (e) {
      return e instanceof HTMLInputElement;
    },
    dom: function (e) {
      return e.nodeType || U.svg(e);
    },
    str: function (e) {
      return typeof e == "string";
    },
    fnc: function (e) {
      return typeof e == "function";
    },
    und: function (e) {
      return typeof e > "u";
    },
    nil: function (e) {
      return U.und(e) || e === null;
    },
    hex: function (e) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
    },
    rgb: function (e) {
      return /^rgb/.test(e);
    },
    hsl: function (e) {
      return /^hsl/.test(e);
    },
    col: function (e) {
      return U.hex(e) || U.rgb(e) || U.hsl(e);
    },
    key: function (e) {
      return (
        !ca.hasOwnProperty(e) &&
        !br.hasOwnProperty(e) &&
        e !== "targets" &&
        e !== "keyframes"
      );
    },
  };
  function da(e) {
    var t = /\(([^)]+)\)/.exec(e);
    return t
      ? t[1].split(",").map(function (n) {
          return parseFloat(n);
        })
      : [];
  }
  function ua(e, t) {
    var n = da(e),
      r = Ne(U.und(n[0]) ? 1 : n[0], 0.1, 100),
      i = Ne(U.und(n[1]) ? 100 : n[1], 0.1, 100),
      a = Ne(U.und(n[2]) ? 10 : n[2], 0.1, 100),
      c = Ne(U.und(n[3]) ? 0 : n[3], 0.1, 100),
      u = Math.sqrt(i / r),
      o = a / (2 * Math.sqrt(i * r)),
      d = o < 1 ? u * Math.sqrt(1 - o * o) : 0,
      l = 1,
      s = o < 1 ? (o * u + -c) / d : -c + u;
    function f(g) {
      var h = t ? (t * g) / 1e3 : g;
      return (
        o < 1
          ? (h =
              Math.exp(-h * o * u) *
              (l * Math.cos(d * h) + s * Math.sin(d * h)))
          : (h = (l + s * h) * Math.exp(-h * u)),
        g === 0 || g === 1 ? g : 1 - h
      );
    }
    function v() {
      var g = bt.springs[e];
      if (g) return g;
      for (var h = 1 / 6, p = 0, E = 0; ; )
        if (((p += h), f(p) === 1)) {
          if ((E++, E >= 16)) break;
        } else E = 0;
      var x = p * h * 1e3;
      return (bt.springs[e] = x), x;
    }
    return t ? f : v;
  }
  function zo(e) {
    return (
      e === void 0 && (e = 10),
      function (t) {
        return Math.ceil(Ne(t, 1e-6, 1) * e) * (1 / e);
      }
    );
  }
  var Bo = (function () {
      var e = 11,
        t = 1 / (e - 1);
      function n(l, s) {
        return 1 - 3 * s + 3 * l;
      }
      function r(l, s) {
        return 3 * s - 6 * l;
      }
      function i(l) {
        return 3 * l;
      }
      function a(l, s, f) {
        return ((n(s, f) * l + r(s, f)) * l + i(s)) * l;
      }
      function c(l, s, f) {
        return 3 * n(s, f) * l * l + 2 * r(s, f) * l + i(s);
      }
      function u(l, s, f, v, g) {
        var h,
          p,
          E = 0;
        do
          (p = s + (f - s) / 2),
            (h = a(p, v, g) - l),
            h > 0 ? (f = p) : (s = p);
        while (Math.abs(h) > 1e-7 && ++E < 10);
        return p;
      }
      function o(l, s, f, v) {
        for (var g = 0; g < 4; ++g) {
          var h = c(s, f, v);
          if (h === 0) return s;
          var p = a(s, f, v) - l;
          s -= p / h;
        }
        return s;
      }
      function d(l, s, f, v) {
        if (!(0 <= l && l <= 1 && 0 <= f && f <= 1)) return;
        var g = new Float32Array(e);
        if (l !== s || f !== v)
          for (var h = 0; h < e; ++h) g[h] = a(h * t, l, f);
        function p(E) {
          for (var x = 0, m = 1, $ = e - 1; m !== $ && g[m] <= E; ++m) x += t;
          --m;
          var C = (E - g[m]) / (g[m + 1] - g[m]),
            I = x + C * t,
            _ = c(I, l, f);
          return _ >= 0.001
            ? o(E, I, l, f)
            : _ === 0
            ? I
            : u(E, x, x + t, l, f);
        }
        return function (E) {
          return (l === s && f === v) || E === 0 || E === 1 ? E : a(p(E), s, v);
        };
      }
      return d;
    })(),
    fa = (function () {
      var e = {
          linear: function () {
            return function (r) {
              return r;
            };
          },
        },
        t = {
          Sine: function () {
            return function (r) {
              return 1 - Math.cos((r * Math.PI) / 2);
            };
          },
          Expo: function () {
            return function (r) {
              return r ? Math.pow(2, 10 * r - 10) : 0;
            };
          },
          Circ: function () {
            return function (r) {
              return 1 - Math.sqrt(1 - r * r);
            };
          },
          Back: function () {
            return function (r) {
              return r * r * (3 * r - 2);
            };
          },
          Bounce: function () {
            return function (r) {
              for (var i, a = 4; r < ((i = Math.pow(2, --a)) - 1) / 11; );
              return (
                1 / Math.pow(4, 3 - a) -
                7.5625 * Math.pow((i * 3 - 2) / 22 - r, 2)
              );
            };
          },
          Elastic: function (r, i) {
            r === void 0 && (r = 1), i === void 0 && (i = 0.5);
            var a = Ne(r, 1, 10),
              c = Ne(i, 0.1, 2);
            return function (u) {
              return u === 0 || u === 1
                ? u
                : -a *
                    Math.pow(2, 10 * (u - 1)) *
                    Math.sin(
                      ((u - 1 - (c / (Math.PI * 2)) * Math.asin(1 / a)) *
                        (Math.PI * 2)) /
                        c
                    );
            };
          },
        },
        n = ["Quad", "Cubic", "Quart", "Quint"];
      return (
        n.forEach(function (r, i) {
          t[r] = function () {
            return function (a) {
              return Math.pow(a, i + 2);
            };
          };
        }),
        Object.keys(t).forEach(function (r) {
          var i = t[r];
          (e["easeIn" + r] = i),
            (e["easeOut" + r] = function (a, c) {
              return function (u) {
                return 1 - i(a, c)(1 - u);
              };
            }),
            (e["easeInOut" + r] = function (a, c) {
              return function (u) {
                return u < 0.5
                  ? i(a, c)(u * 2) / 2
                  : 1 - i(a, c)(u * -2 + 2) / 2;
              };
            }),
            (e["easeOutIn" + r] = function (a, c) {
              return function (u) {
                return u < 0.5
                  ? (1 - i(a, c)(1 - u * 2)) / 2
                  : (i(a, c)(u * 2 - 1) + 1) / 2;
              };
            });
        }),
        e
      );
    })();
  function xr(e, t) {
    if (U.fnc(e)) return e;
    var n = e.split("(")[0],
      r = fa[n],
      i = da(e);
    switch (n) {
      case "spring":
        return ua(e, t);
      case "cubicBezier":
        return gr(Bo, i);
      case "steps":
        return gr(zo, i);
      default:
        return gr(r, i);
    }
  }
  function ha(e) {
    try {
      var t = document.querySelectorAll(e);
      return t;
    } catch {
      return;
    }
  }
  function xt(e, t) {
    for (
      var n = e.length,
        r = arguments.length >= 2 ? arguments[1] : void 0,
        i = [],
        a = 0;
      a < n;
      a++
    )
      if (a in e) {
        var c = e[a];
        t.call(r, c, a, e) && i.push(c);
      }
    return i;
  }
  function Et(e) {
    return e.reduce(function (t, n) {
      return t.concat(U.arr(n) ? Et(n) : n);
    }, []);
  }
  function ia(e) {
    return U.arr(e)
      ? e
      : (U.str(e) && (e = ha(e) || e),
        e instanceof NodeList || e instanceof HTMLCollection
          ? [].slice.call(e)
          : [e]);
  }
  function Er(e, t) {
    return e.some(function (n) {
      return n === t;
    });
  }
  function Sr(e) {
    var t = {};
    for (var n in e) t[n] = e[n];
    return t;
  }
  function vr(e, t) {
    var n = Sr(e);
    for (var r in e) n[r] = t.hasOwnProperty(r) ? t[r] : e[r];
    return n;
  }
  function St(e, t) {
    var n = Sr(e);
    for (var r in t) n[r] = U.und(e[r]) ? t[r] : e[r];
    return n;
  }
  function No(e) {
    var t = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);
    return t ? "rgba(" + t[1] + ",1)" : e;
  }
  function Ho(e) {
    var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      n = e.replace(t, function (u, o, d, l) {
        return o + o + d + d + l + l;
      }),
      r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),
      i = parseInt(r[1], 16),
      a = parseInt(r[2], 16),
      c = parseInt(r[3], 16);
    return "rgba(" + i + "," + a + "," + c + ",1)";
  }
  function qo(e) {
    var t =
        /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) ||
        /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),
      n = parseInt(t[1], 10) / 360,
      r = parseInt(t[2], 10) / 100,
      i = parseInt(t[3], 10) / 100,
      a = t[4] || 1;
    function c(f, v, g) {
      return (
        g < 0 && (g += 1),
        g > 1 && (g -= 1),
        g < 1 / 6
          ? f + (v - f) * 6 * g
          : g < 1 / 2
          ? v
          : g < 2 / 3
          ? f + (v - f) * (2 / 3 - g) * 6
          : f
      );
    }
    var u, o, d;
    if (r == 0) u = o = d = i;
    else {
      var l = i < 0.5 ? i * (1 + r) : i + r - i * r,
        s = 2 * i - l;
      (u = c(s, l, n + 1 / 3)), (o = c(s, l, n)), (d = c(s, l, n - 1 / 3));
    }
    return "rgba(" + u * 255 + "," + o * 255 + "," + d * 255 + "," + a + ")";
  }
  function Ro(e) {
    if (U.rgb(e)) return No(e);
    if (U.hex(e)) return Ho(e);
    if (U.hsl(e)) return qo(e);
  }
  function Ge(e) {
    var t =
      /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
        e
      );
    if (t) return t[1];
  }
  function jo(e) {
    if (ct(e, "translate") || e === "perspective") return "px";
    if (ct(e, "rotate") || ct(e, "skew")) return "deg";
  }
  function yr(e, t) {
    return U.fnc(e) ? e(t.target, t.id, t.total) : e;
  }
  function He(e, t) {
    return e.getAttribute(t);
  }
  function Tr(e, t, n) {
    var r = Ge(t);
    if (Er([n, "deg", "rad", "turn"], r)) return t;
    var i = bt.CSS[t + n];
    if (!U.und(i)) return i;
    var a = 100,
      c = document.createElement(e.tagName),
      u =
        e.parentNode && e.parentNode !== document
          ? e.parentNode
          : document.body;
    u.appendChild(c), (c.style.position = "absolute"), (c.style.width = a + n);
    var o = a / c.offsetWidth;
    u.removeChild(c);
    var d = o * parseFloat(t);
    return (bt.CSS[t + n] = d), d;
  }
  function pa(e, t, n) {
    if (t in e.style) {
      var r = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
        i = e.style[t] || getComputedStyle(e).getPropertyValue(r) || "0";
      return n ? Tr(e, i, n) : i;
    }
  }
  function Cr(e, t) {
    if (U.dom(e) && !U.inp(e) && (!U.nil(He(e, t)) || (U.svg(e) && e[t])))
      return "attribute";
    if (U.dom(e) && Er(Do, t)) return "transform";
    if (U.dom(e) && t !== "transform" && pa(e, t)) return "css";
    if (e[t] != null) return "object";
  }
  function ma(e) {
    if (!!U.dom(e)) {
      for (
        var t = e.style.transform || "",
          n = /(\w+)\(([^)]*)\)/g,
          r = new Map(),
          i;
        (i = n.exec(t));

      )
        r.set(i[1], i[2]);
      return r;
    }
  }
  function Vo(e, t, n, r) {
    var i = ct(t, "scale") ? 1 : 0 + jo(t),
      a = ma(e).get(t) || i;
    return (
      n && (n.transforms.list.set(t, a), (n.transforms.last = t)),
      r ? Tr(e, a, r) : a
    );
  }
  function $r(e, t, n, r) {
    switch (Cr(e, t)) {
      case "transform":
        return Vo(e, t, r, n);
      case "css":
        return pa(e, t, n);
      case "attribute":
        return He(e, t);
      default:
        return e[t] || 0;
    }
  }
  function Mr(e, t) {
    var n = /^(\*=|\+=|-=)/.exec(e);
    if (!n) return e;
    var r = Ge(e) || 0,
      i = parseFloat(t),
      a = parseFloat(e.replace(n[0], ""));
    switch (n[0][0]) {
      case "+":
        return i + a + r;
      case "-":
        return i - a + r;
      case "*":
        return i * a + r;
    }
  }
  function ga(e, t) {
    if (U.col(e)) return Ro(e);
    if (/\s/g.test(e)) return e;
    var n = Ge(e),
      r = n ? e.substr(0, e.length - n.length) : e;
    return t ? r + t : r;
  }
  function kr(e, t) {
    return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
  }
  function Fo(e) {
    return Math.PI * 2 * He(e, "r");
  }
  function Go(e) {
    return He(e, "width") * 2 + He(e, "height") * 2;
  }
  function Wo(e) {
    return kr(
      {
        x: He(e, "x1"),
        y: He(e, "y1"),
      },
      {
        x: He(e, "x2"),
        y: He(e, "y2"),
      }
    );
  }
  function va(e) {
    for (var t = e.points, n = 0, r, i = 0; i < t.numberOfItems; i++) {
      var a = t.getItem(i);
      i > 0 && (n += kr(r, a)), (r = a);
    }
    return n;
  }
  function Xo(e) {
    var t = e.points;
    return va(e) + kr(t.getItem(t.numberOfItems - 1), t.getItem(0));
  }
  function ya(e) {
    if (e.getTotalLength) return e.getTotalLength();
    switch (e.tagName.toLowerCase()) {
      case "circle":
        return Fo(e);
      case "rect":
        return Go(e);
      case "line":
        return Wo(e);
      case "polyline":
        return va(e);
      case "polygon":
        return Xo(e);
    }
  }
  function Yo(e) {
    var t = ya(e);
    return e.setAttribute("stroke-dasharray", t), t;
  }
  function Uo(e) {
    for (var t = e.parentNode; U.svg(t) && U.svg(t.parentNode); )
      t = t.parentNode;
    return t;
  }
  function ba(e, t) {
    var n = t || {},
      r = n.el || Uo(e),
      i = r.getBoundingClientRect(),
      a = He(r, "viewBox"),
      c = i.width,
      u = i.height,
      o = n.viewBox || (a ? a.split(" ") : [0, 0, c, u]);
    return {
      el: r,
      viewBox: o,
      x: o[0] / 1,
      y: o[1] / 1,
      w: c,
      h: u,
      vW: o[2],
      vH: o[3],
    };
  }
  function Ko(e, t) {
    var n = U.str(e) ? ha(e)[0] : e,
      r = t || 100;
    return function (i) {
      return {
        property: i,
        el: n,
        svg: ba(n),
        totalLength: ya(n) * (r / 100),
      };
    };
  }
  function Zo(e, t, n) {
    function r(l) {
      l === void 0 && (l = 0);
      var s = t + l >= 1 ? t + l : 0;
      return e.el.getPointAtLength(s);
    }
    var i = ba(e.el, e.svg),
      a = r(),
      c = r(-1),
      u = r(1),
      o = n ? 1 : i.w / i.vW,
      d = n ? 1 : i.h / i.vH;
    switch (e.property) {
      case "x":
        return (a.x - i.x) * o;
      case "y":
        return (a.y - i.y) * d;
      case "angle":
        return (Math.atan2(u.y - c.y, u.x - c.x) * 180) / Math.PI;
    }
  }
  function aa(e, t) {
    var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
      r = ga(U.pth(e) ? e.totalLength : e, t) + "";
    return {
      original: r,
      numbers: r.match(n) ? r.match(n).map(Number) : [0],
      strings: U.str(e) || t ? r.split(n) : [],
    };
  }
  function Lr(e) {
    var t = e ? Et(U.arr(e) ? e.map(ia) : ia(e)) : [];
    return xt(t, function (n, r, i) {
      return i.indexOf(n) === r;
    });
  }
  function xa(e) {
    var t = Lr(e);
    return t.map(function (n, r) {
      return {
        target: n,
        id: r,
        total: t.length,
        transforms: {
          list: ma(n),
        },
      };
    });
  }
  function Qo(e, t) {
    var n = Sr(t);
    if ((/^spring/.test(n.easing) && (n.duration = ua(n.easing)), U.arr(e))) {
      var r = e.length,
        i = r === 2 && !U.obj(e[0]);
      i
        ? (e = {
            value: e,
          })
        : U.fnc(t.duration) || (n.duration = t.duration / r);
    }
    var a = U.arr(e) ? e : [e];
    return a
      .map(function (c, u) {
        var o =
          U.obj(c) && !U.pth(c)
            ? c
            : {
                value: c,
              };
        return (
          U.und(o.delay) && (o.delay = u ? 0 : t.delay),
          U.und(o.endDelay) &&
            (o.endDelay = u === a.length - 1 ? t.endDelay : 0),
          o
        );
      })
      .map(function (c) {
        return St(c, n);
      });
  }
  function Jo(e) {
    for (
      var t = xt(
          Et(
            e.map(function (a) {
              return Object.keys(a);
            })
          ),
          function (a) {
            return U.key(a);
          }
        ).reduce(function (a, c) {
          return a.indexOf(c) < 0 && a.push(c), a;
        }, []),
        n = {},
        r = function (a) {
          var c = t[a];
          n[c] = e.map(function (u) {
            var o = {};
            for (var d in u)
              U.key(d) ? d == c && (o.value = u[d]) : (o[d] = u[d]);
            return o;
          });
        },
        i = 0;
      i < t.length;
      i++
    )
      r(i);
    return n;
  }
  function es(e, t) {
    var n = [],
      r = t.keyframes;
    r && (t = St(Jo(r), t));
    for (var i in t)
      U.key(i) &&
        n.push({
          name: i,
          tweens: Qo(t[i], e),
        });
    return n;
  }
  function ts(e, t) {
    var n = {};
    for (var r in e) {
      var i = yr(e[r], t);
      U.arr(i) &&
        ((i = i.map(function (a) {
          return yr(a, t);
        })),
        i.length === 1 && (i = i[0])),
        (n[r] = i);
    }
    return (
      (n.duration = parseFloat(n.duration)), (n.delay = parseFloat(n.delay)), n
    );
  }
  function ns(e, t) {
    var n;
    return e.tweens.map(function (r) {
      var i = ts(r, t),
        a = i.value,
        c = U.arr(a) ? a[1] : a,
        u = Ge(c),
        o = $r(t.target, e.name, u, t),
        d = n ? n.to.original : o,
        l = U.arr(a) ? a[0] : d,
        s = Ge(l) || Ge(o),
        f = u || s;
      return (
        U.und(c) && (c = d),
        (i.from = aa(l, f)),
        (i.to = aa(Mr(c, l), f)),
        (i.start = n ? n.end : 0),
        (i.end = i.start + i.delay + i.duration + i.endDelay),
        (i.easing = xr(i.easing, i.duration)),
        (i.isPath = U.pth(a)),
        (i.isPathTargetInsideSVG = i.isPath && U.svg(t.target)),
        (i.isColor = U.col(i.from.original)),
        i.isColor && (i.round = 1),
        (n = i),
        i
      );
    });
  }
  var Ea = {
    css: function (e, t, n) {
      return (e.style[t] = n);
    },
    attribute: function (e, t, n) {
      return e.setAttribute(t, n);
    },
    object: function (e, t, n) {
      return (e[t] = n);
    },
    transform: function (e, t, n, r, i) {
      if ((r.list.set(t, n), t === r.last || i)) {
        var a = "";
        r.list.forEach(function (c, u) {
          a += u + "(" + c + ") ";
        }),
          (e.style.transform = a);
      }
    },
  };
  function Sa(e, t) {
    var n = xa(e);
    n.forEach(function (r) {
      for (var i in t) {
        var a = yr(t[i], r),
          c = r.target,
          u = Ge(a),
          o = $r(c, i, u, r),
          d = u || Ge(o),
          l = Mr(ga(a, d), o),
          s = Cr(c, i);
        Ea[s](c, i, l, r.transforms, !0);
      }
    });
  }
  function rs(e, t) {
    var n = Cr(e.target, t.name);
    if (n) {
      var r = ns(t, e),
        i = r[r.length - 1];
      return {
        type: n,
        property: t.name,
        animatable: e,
        tweens: r,
        duration: i.end,
        delay: r[0].delay,
        endDelay: i.endDelay,
      };
    }
  }
  function is(e, t) {
    return xt(
      Et(
        e.map(function (n) {
          return t.map(function (r) {
            return rs(n, r);
          });
        })
      ),
      function (n) {
        return !U.und(n);
      }
    );
  }
  function Ta(e, t) {
    var n = e.length,
      r = function (a) {
        return a.timelineOffset ? a.timelineOffset : 0;
      },
      i = {};
    return (
      (i.duration = n
        ? Math.max.apply(
            Math,
            e.map(function (a) {
              return r(a) + a.duration;
            })
          )
        : t.duration),
      (i.delay = n
        ? Math.min.apply(
            Math,
            e.map(function (a) {
              return r(a) + a.delay;
            })
          )
        : t.delay),
      (i.endDelay = n
        ? i.duration -
          Math.max.apply(
            Math,
            e.map(function (a) {
              return r(a) + a.duration - a.endDelay;
            })
          )
        : t.endDelay),
      i
    );
  }
  var oa = 0;
  function as(e) {
    var t = vr(ca, e),
      n = vr(br, e),
      r = es(n, e),
      i = xa(e.targets),
      a = is(i, r),
      c = Ta(a, n),
      u = oa;
    return (
      oa++,
      St(t, {
        id: u,
        children: [],
        animatables: i,
        animations: a,
        duration: c.duration,
        delay: c.delay,
        endDelay: c.endDelay,
      })
    );
  }
  var Oe = [],
    Ca = (function () {
      var e;
      function t() {
        !e &&
          (!sa() || !pe.suspendWhenDocumentHidden) &&
          Oe.length > 0 &&
          (e = requestAnimationFrame(n));
      }
      function n(i) {
        for (var a = Oe.length, c = 0; c < a; ) {
          var u = Oe[c];
          u.paused ? (Oe.splice(c, 1), a--) : (u.tick(i), c++);
        }
        e = c > 0 ? requestAnimationFrame(n) : void 0;
      }
      function r() {
        !pe.suspendWhenDocumentHidden ||
          (sa()
            ? (e = cancelAnimationFrame(e))
            : (Oe.forEach(function (i) {
                return i._onDocumentVisibility();
              }),
              Ca()));
      }
      return (
        typeof document < "u" &&
          document.addEventListener("visibilitychange", r),
        t
      );
    })();
  function sa() {
    return !!document && document.hidden;
  }
  function pe(e) {
    e === void 0 && (e = {});
    var t = 0,
      n = 0,
      r = 0,
      i,
      a = 0,
      c = null;
    function u(m) {
      var $ =
        window.Promise &&
        new Promise(function (C) {
          return (c = C);
        });
      return (m.finished = $), $;
    }
    var o = as(e),
      d = u(o);
    function l() {
      var m = o.direction;
      m !== "alternate" &&
        (o.direction = m !== "normal" ? "normal" : "reverse"),
        (o.reversed = !o.reversed),
        i.forEach(function ($) {
          return ($.reversed = o.reversed);
        });
    }
    function s(m) {
      return o.reversed ? o.duration - m : m;
    }
    function f() {
      (t = 0), (n = s(o.currentTime) * (1 / pe.speed));
    }
    function v(m, $) {
      $ && $.seek(m - $.timelineOffset);
    }
    function g(m) {
      if (o.reversePlayback) for (var C = a; C--; ) v(m, i[C]);
      else for (var $ = 0; $ < a; $++) v(m, i[$]);
    }
    function h(m) {
      for (var $ = 0, C = o.animations, I = C.length; $ < I; ) {
        var _ = C[$],
          D = _.animatable,
          H = _.tweens,
          z = H.length - 1,
          k = H[z];
        z &&
          (k =
            xt(H, function (ee) {
              return m < ee.end;
            })[0] || k);
        for (
          var S = Ne(m - k.start - k.delay, 0, k.duration) / k.duration,
            L = isNaN(S) ? 1 : k.easing(S),
            q = k.to.strings,
            j = k.round,
            P = [],
            N = k.to.numbers.length,
            B = void 0,
            W = 0;
          W < N;
          W++
        ) {
          var Y = void 0,
            ae = k.to.numbers[W],
            ve = k.from.numbers[W] || 0;
          k.isPath
            ? (Y = Zo(k.value, L * ae, k.isPathTargetInsideSVG))
            : (Y = ve + L * (ae - ve)),
            j && ((k.isColor && W > 2) || (Y = Math.round(Y * j) / j)),
            P.push(Y);
        }
        var Se = q.length;
        if (!Se) B = P[0];
        else {
          B = q[0];
          for (var me = 0; me < Se; me++) {
            var de = q[me],
              oe = q[me + 1],
              Q = P[me];
            isNaN(Q) || (oe ? (B += Q + oe) : (B += Q + " "));
          }
        }
        Ea[_.type](D.target, _.property, B, D.transforms),
          (_.currentValue = B),
          $++;
      }
    }
    function p(m) {
      o[m] && !o.passThrough && o[m](o);
    }
    function E() {
      o.remaining && o.remaining !== !0 && o.remaining--;
    }
    function x(m) {
      var $ = o.duration,
        C = o.delay,
        I = $ - o.endDelay,
        _ = s(m);
      (o.progress = Ne((_ / $) * 100, 0, 100)),
        (o.reversePlayback = _ < o.currentTime),
        i && g(_),
        !o.began && o.currentTime > 0 && ((o.began = !0), p("begin")),
        !o.loopBegan &&
          o.currentTime > 0 &&
          ((o.loopBegan = !0), p("loopBegin")),
        _ <= C && o.currentTime !== 0 && h(0),
        ((_ >= I && o.currentTime !== $) || !$) && h($),
        _ > C && _ < I
          ? (o.changeBegan ||
              ((o.changeBegan = !0),
              (o.changeCompleted = !1),
              p("changeBegin")),
            p("change"),
            h(_))
          : o.changeBegan &&
            ((o.changeCompleted = !0),
            (o.changeBegan = !1),
            p("changeComplete")),
        (o.currentTime = Ne(_, 0, $)),
        o.began && p("update"),
        m >= $ &&
          ((n = 0),
          E(),
          o.remaining
            ? ((t = r),
              p("loopComplete"),
              (o.loopBegan = !1),
              o.direction === "alternate" && l())
            : ((o.paused = !0),
              o.completed ||
                ((o.completed = !0),
                p("loopComplete"),
                p("complete"),
                !o.passThrough && "Promise" in window && (c(), (d = u(o))))));
    }
    return (
      (o.reset = function () {
        var m = o.direction;
        (o.passThrough = !1),
          (o.currentTime = 0),
          (o.progress = 0),
          (o.paused = !0),
          (o.began = !1),
          (o.loopBegan = !1),
          (o.changeBegan = !1),
          (o.completed = !1),
          (o.changeCompleted = !1),
          (o.reversePlayback = !1),
          (o.reversed = m === "reverse"),
          (o.remaining = o.loop),
          (i = o.children),
          (a = i.length);
        for (var $ = a; $--; ) o.children[$].reset();
        ((o.reversed && o.loop !== !0) ||
          (m === "alternate" && o.loop === 1)) &&
          o.remaining++,
          h(o.reversed ? o.duration : 0);
      }),
      (o._onDocumentVisibility = f),
      (o.set = function (m, $) {
        return Sa(m, $), o;
      }),
      (o.tick = function (m) {
        (r = m), t || (t = r), x((r + (n - t)) * pe.speed);
      }),
      (o.seek = function (m) {
        x(s(m));
      }),
      (o.pause = function () {
        (o.paused = !0), f();
      }),
      (o.play = function () {
        !o.paused ||
          (o.completed && o.reset(), (o.paused = !1), Oe.push(o), f(), Ca());
      }),
      (o.reverse = function () {
        l(), (o.completed = !o.reversed), f();
      }),
      (o.restart = function () {
        o.reset(), o.play();
      }),
      (o.remove = function (m) {
        var $ = Lr(m);
        $a($, o);
      }),
      o.reset(),
      o.autoplay && o.play(),
      o
    );
  }
  function la(e, t) {
    for (var n = t.length; n--; )
      Er(e, t[n].animatable.target) && t.splice(n, 1);
  }
  function $a(e, t) {
    var n = t.animations,
      r = t.children;
    la(e, n);
    for (var i = r.length; i--; ) {
      var a = r[i],
        c = a.animations;
      la(e, c), !c.length && !a.children.length && r.splice(i, 1);
    }
    !n.length && !r.length && t.pause();
  }
  function os(e) {
    for (var t = Lr(e), n = Oe.length; n--; ) {
      var r = Oe[n];
      $a(t, r);
    }
  }
  function ss(e, t) {
    t === void 0 && (t = {});
    var n = t.direction || "normal",
      r = t.easing ? xr(t.easing) : null,
      i = t.grid,
      a = t.axis,
      c = t.from || 0,
      u = c === "first",
      o = c === "center",
      d = c === "last",
      l = U.arr(e),
      s = parseFloat(l ? e[0] : e),
      f = l ? parseFloat(e[1]) : 0,
      v = Ge(l ? e[1] : e) || 0,
      g = t.start || 0 + (l ? s : 0),
      h = [],
      p = 0;
    return function (E, x, m) {
      if ((u && (c = 0), o && (c = (m - 1) / 2), d && (c = m - 1), !h.length)) {
        for (var $ = 0; $ < m; $++) {
          if (!i) h.push(Math.abs(c - $));
          else {
            var C = o ? (i[0] - 1) / 2 : c % i[0],
              I = o ? (i[1] - 1) / 2 : Math.floor(c / i[0]),
              _ = $ % i[0],
              D = Math.floor($ / i[0]),
              H = C - _,
              z = I - D,
              k = Math.sqrt(H * H + z * z);
            a === "x" && (k = -H), a === "y" && (k = -z), h.push(k);
          }
          p = Math.max.apply(Math, h);
        }
        r &&
          (h = h.map(function (L) {
            return r(L / p) * p;
          })),
          n === "reverse" &&
            (h = h.map(function (L) {
              return a ? (L < 0 ? L * -1 : -L) : Math.abs(p - L);
            }));
      }
      var S = l ? (f - s) / p : s;
      return g + S * (Math.round(h[x] * 100) / 100) + v;
    };
  }
  function ls(e) {
    e === void 0 && (e = {});
    var t = pe(e);
    return (
      (t.duration = 0),
      (t.add = function (n, r) {
        var i = Oe.indexOf(t),
          a = t.children;
        i > -1 && Oe.splice(i, 1);
        function c(f) {
          f.passThrough = !0;
        }
        for (var u = 0; u < a.length; u++) c(a[u]);
        var o = St(n, vr(br, e));
        o.targets = o.targets || e.targets;
        var d = t.duration;
        (o.autoplay = !1),
          (o.direction = t.direction),
          (o.timelineOffset = U.und(r) ? d : Mr(r, d)),
          c(t),
          t.seek(o.timelineOffset);
        var l = pe(o);
        c(l), a.push(l);
        var s = Ta(a, e);
        return (
          (t.delay = s.delay),
          (t.endDelay = s.endDelay),
          (t.duration = s.duration),
          t.seek(0),
          t.reset(),
          t.autoplay && t.play(),
          t
        );
      }),
      t
    );
  }
  pe.version = "3.2.1";
  pe.speed = 1;
  pe.suspendWhenDocumentHidden = !0;
  pe.running = Oe;
  pe.remove = os;
  pe.get = $r;
  pe.set = Sa;
  pe.convertPx = Tr;
  pe.path = Ko;
  pe.setDashoffset = Yo;
  pe.stagger = ss;
  pe.timeline = ls;
  pe.easing = xr;
  pe.penner = fa;
  pe.random = function (e, t) {
    return Math.floor(Math.random() * (t - e + 1)) + e;
  };
  var Ze = pe;
  function Pr(e, t, n, r) {
    (e.style.transform = `translate( ${n}%,  )`),
      (document.body.style.overflowX = "hidden");
    let i = `${r}%`,
      a = Ze.timeline({
        easing: "easeInOutSine",
        duration: t,
      });
    return (
      a.add({
        targets: e,
        translateY: i,
      }),
      a.finished
    );
  }
  function Ma(e, t) {
    e.style.opacity = 1;
    let n = Ze.timeline({
      easing: "linear",
      duration: t,
    });
    return (
      n.add({
        targets: e,
        opacity: 0,
      }),
      n.finished
    );
  }
  function ka(e, t) {
    e.style.opacity = 0;
    let n = Ze.timeline({
      easing: "linear",
      duration: t,
    });
    return (
      n.add({
        targets: e,
        opacity: 1,
      }),
      n.finished
    );
  }
  function Tt(e) {
    let t = e.container.querySelectorAll(".revealable"),
      n = Array.from(t);
    Ze.set(n, {
      translateY: "40%",
      opacity: 0,
    });
    let r = Ze.timeline();
    return (
      r.add({
        targets: n,
        opacity: {
          value: 1,
          duration: 1e3,
        },
        translateY: 0,
        duration: 700,
        stragger: Ze.stagger(200),
        easing: "easeInOutQuint",
      }),
      r.finished
    );
  }
  var Ct = class {
    constructor() {
      (this.links = document.querySelectorAll(".lightbox-trigger")),
        (this.lightbox = document.createElement("div")),
        (this.lightbox_inner = document.createElement("div")),
        (this.lightbox_loader = document.createElement("span")),
        (this.lightbox_close = document.createElement("button")),
        (this.lightbox_caption_container = document.createElement("div")),
        (this.lightbox_caption = document.createElement("div")),
        (this.current_link_id = 0),
        (this.touchstartX = 0),
        (this.touchendX = 0),
        this.init();
    }
    init() {
      this.buildLightBox(),
        this.lightbox.addEventListener("click", this.handleLightboxClick()),
        this.lightbox_close.addEventListener("click", (t) =>
          this.hideLightBox(t)
        ),
        this.lightbox.addEventListener(
          "touchstart",
          this.handleTouchStart(),
          !1
        ),
        this.lightbox.addEventListener("touchend", this.handleTouchEnd(), !1),
        document.addEventListener("keyup", (t) => {
          t.keyCode === 27
            ? this.hideLightBox()
            : t.keyCode === 37
            ? this.goToSlideOffset(-1)()
            : t.keyCode === 39 && this.goToSlideOffset(1)();
        }),
        window.addEventListener("resize", (t) => this.handleWindowResize(t));
      for (let t = 0; t < this.links.length; t += 1)
        this.links[t].setAttribute("data-slide-id", t.toString()),
          this.links[t].addEventListener(
            "click",
            this.handleLinkClick(this.links[t])
          );
    }
    buildLightBox() {
      (this.lightbox.className = "lightbox lightbox--disabled"),
        (this.lightbox_inner.className = "lightbox__inner"),
        (this.lightbox_loader.className = "lightbox__loader"),
        (this.lightbox_close.className =
          "lightbox__button lightbox__button--close"),
        (this.lightbox_caption_container.className = "lightbox__caption"),
        this.lightbox_close.setAttribute("aria-label", "Close lightbox"),
        this.lightbox.appendChild(this.lightbox_inner),
        this.lightbox.appendChild(this.lightbox_loader),
        this.lightbox.appendChild(this.lightbox_close),
        this.lightbox.insertBefore(
          this.lightbox_caption_container,
          this.lightbox_inner
        ),
        this.lightbox_caption_container.appendChild(this.lightbox_caption),
        document.body.insertBefore(this.lightbox, document.body.firstChild);
    }
    handleLightboxClick() {
      return (t) => {
        t.target === this.lightbox && this.hideLightBox();
      };
    }
    handleLinkClick(t) {
      return (n) => {
        n.preventDefault ? n.preventDefault() : (n.returnValue = !1),
          n.stopPropagation(),
          (this.current_link_id = parseInt(
            t.getAttribute("data-slide-id"),
            10
          )),
          this.updateLightBoxContent(),
          this.showLightBox();
      };
    }
    handleTouchStart() {
      return (t) => {
        this.touchstartX = t.changedTouches[0].screenX;
      };
    }
    handleTouchEnd() {
      return (t) => {
        (this.touchendX = t.changedTouches[0].screenX),
          this.touchendX + 50 < this.touchstartX && this.goToSlideOffset(1)(),
          this.touchendX - 50 > this.touchstartX && this.goToSlideOffset(-1)();
      };
    }
    handleWindowResize() {
      this.lightbox.classList.contains("lightbox--disabled") ||
        this.centreLightBoxContent(this.lightbox_inner.childNodes[0]);
    }
    centreLightBoxContent(t) {
      let n =
          "innerHeight" in window
            ? window.innerHeight
            : document.documentElement.offsetHeight,
        r = n - 80;
      if (((this.lightbox_inner.style.maxWidth = ""), t.offsetHeight > r)) {
        let i = t.offsetWidth / t.offsetHeight;
        this.lightbox_inner.style.maxWidth = (i * r).toString() + "px";
      }
      this.lightbox_inner.style.marginTop =
        Math.round((n - t.offsetHeight) / 2).toString() + "px";
    }
    updateLightBoxContent() {
      if (
        (this.lightbox.classList.add("lightbox--loading"),
        this.slideFromContent(
          this.links[this.current_link_id].getAttribute("data-lightbox-type"),
          this.links[this.current_link_id].getAttribute("href"),
          (t) => {
            this.clearLightBox(),
              this.lightbox_inner.appendChild(t),
              this.centreLightBoxContent(t),
              this.lightbox.classList.remove("lightbox--loading");
          }
        ),
        this.links[this.current_link_id].getAttribute("data-lightbox-caption"))
      ) {
        this.lightbox_caption.innerHTML = this.links[
          this.current_link_id
        ].getAttribute("data-lightbox-caption");
        return;
      }
      this.lightbox_caption.innerHTML = "";
    }
    slideFromContent(t, n, r) {
      let i;
      switch (t) {
        case "image": {
          (i = document.createElement("img")),
            i.addEventListener("load", () => {
              r(i);
            }),
            window.setTimeout(() => {
              i.src = n;
            }, 1);
          break;
        }
        case "video": {
          i = document.createElement("div");
          let a = document.createElement("video");
          (i.className = "flex-container"),
            i.appendChild(a),
            (a.autoplay = "autoplay"),
            (a.controls = !0),
            a.addEventListener("loadeddata", () => {
              r(i);
            }),
            window.setTimeout(() => {
              a.src = n;
            }, 1);
          break;
        }
        case "iframe": {
          i = document.createElement("div");
          let a = document.createElement("iframe");
          (i.className = "flex-container"),
            i.appendChild(a),
            (a.frameborder = 0),
            (a.allowfullscreen = !0),
            (a.src = n),
            r(i);
          break;
        }
      }
      return i;
    }
    goToSlideOffset(t) {
      return () => {
        let n =
          (this.links.length + (this.current_link_id + t)) % this.links.length;
        (this.current_link_id = n), this.updateLightBoxContent();
      };
    }
    clearLightBox() {
      this.lightbox_inner.innerHTML = "";
    }
    hideLightBox() {
      this.lightbox.classList.add("lightbox--disabled"), this.clearLightBox();
    }
    showLightBox() {
      this.lightbox.classList.remove("lightbox--disabled");
    }
  };
  var $t = class {
    constructor() {
      window.on_click_callback &&
        window.removeEventListener("click", window.on_click_callback),
        (window.on_click_callback = this.handleClick.bind(this)),
        window.addEventListener("click", window.on_click_callback);
    }
    handleClick(t) {
      t.target.id === "nav-toggle" && this.navToggle();
    }
    navToggle() {
      document.body.classList.toggle(
        "nav-open",
        !document.body.classList.contains("nav-open")
      );
    }
  };
  var wr = class {
    constructor(t, n, r, i, a = !1) {
      if (
        ((this.tag_managers = t),
        (this.categories = n),
        (this.providers = r),
        (this.provider_hash = i),
        window.addEventListener("click", (u) => {
          if ("cookieManagerAcceptAll" in u.target.dataset) {
            u.preventDefault(),
              this.savePreferences(Object.keys(this.providers)),
              this.closeCookieManagerUi(),
              this.closeCookieBannerUi(),
              this.applySavedPreferences(),
              this.setInputsFromPreferences(),
              this.hideButtons(),
              this.reloadPage();
            return;
          }
          if ("cookieManagerDenyAll" in u.target.dataset) {
            u.preventDefault(),
              this.savePreferences([]),
              this.closeCookieManagerUi(),
              this.closeCookieBannerUi(),
              this.applySavedPreferences(),
              this.setInputsFromPreferences(),
              this.hideButtons(),
              this.reloadPage();
            return;
          }
          if ("cookieManagerAcceptAllCategory" in u.target.dataset) {
            u.preventDefault();
            let o = (this.getSavedPreferences() || [])
              .concat(
                this.getProviderKeysInCategory(
                  u.target.dataset.cookieManagerAcceptAllCategory
                )
              )
              .filter((d, l, s) => s.indexOf(d) === l);
            this.savePreferences(o),
              this.applySavedPreferences(),
              this.setInputsFromPreferences(),
              this.hideButtons(),
              this.reloadPage();
            return;
          }
          if ("cookieManagerDenyAllCategory" in u.target.dataset) {
            u.preventDefault();
            let o = this.getProviderKeysInCategory(
                u.target.dataset.cookieManagerDenyAllCategory
              ),
              d = (this.getSavedPreferences() || []).filter(
                (l) => o.indexOf(l) === -1
              );
            this.savePreferences(d),
              this.applySavedPreferences(),
              this.setInputsFromPreferences(),
              this.hideButtons(),
              this.reloadPage();
            return;
          }
          if ("cookieManagerAcceptProvider" in u.target.dataset) {
            u.preventDefault();
            let o = (this.getSavedPreferences() || [])
              .concat([u.target.dataset.cookieManagerAcceptProvider])
              .filter((d, l, s) => s.indexOf(d) === l);
            this.savePreferences(o),
              this.applySavedPreferences(),
              this.setInputsFromPreferences(),
              this.hideButtons(),
              this.reloadPage();
            return;
          }
          if ("cookieManagerSaveChanges" in u.target.dataset) {
            u.preventDefault(),
              this.savePreferences(this.getPreferencesFromInputs()),
              this.closeCookieManagerUi(),
              this.applySavedPreferences(),
              this.hideButtons(),
              this.reloadPage();
            return;
          }
          if ("cookieManagerOpenUi" in u.target.dataset) {
            u.preventDefault(), this.openCookieManagerUi();
            return;
          }
        }),
        window.addEventListener("change", (u) => {
          ("cookieManagerCategoryPreference" in u.target.dataset ||
            "cookieManagerProviderPreference" in u.target.dataset) &&
            (this.showButtons(), this.forceSaveChanges());
        }),
        this.getSavedPreferences() === null)
      ) {
        this.showButtons(),
          a ? this.openCookieBannerUi() : this.openCookieManagerUi();
        return;
      }
      this.applySavedPreferences(), this.setInputsFromPreferences();
    }
    savePreferences(t) {
      let n = new Date();
      n.setTime(n.getTime() + 90 * 24 * 60 * 60 * 1e3);
      let r = [];
      for (let i = 0; i < t.length; i++)
        !Object.prototype.hasOwnProperty.call(this.providers, t[i]) ||
          this.getProviderIsMandatory(t[i]) ||
          r.push(t[i]);
      this.setCookie(
        "ten4_cookie_consent",
        this.provider_hash + "|" + r.join(","),
        n
      );
    }
    getSavedPreferences() {
      let t = this.getCookie("ten4_cookie_consent");
      if (t !== "") {
        let [n, r] = t.split("|");
        return n === this.provider_hash ? (r === "" ? [] : r.split(",")) : null;
      }
      return null;
    }
    getPreferencesFromInputs() {
      let t = [],
        n = document.querySelectorAll(
          "[data-cookie-manager-category-preference]"
        );
      for (let i = 0; i < n.length; i++)
        !n[i].checked ||
          (t = t.concat(
            this.getProviderKeysInCategory(
              n[i].dataset.cookieManagerCategoryPreference
            )
          ));
      let r = document.querySelectorAll(
        "[data-cookie-manager-provider-preference]"
      );
      for (let i = 0; i < r.length; i++)
        !r[i].checked || t.push(r[i].dataset.cookieManagerProviderPreference);
      return t.filter((i, a, c) => c.indexOf(i) === a);
    }
    setInputsFromPreferences() {
      let t = this.getSavedPreferences(),
        n = document.querySelectorAll(
          "[data-cookie-manager-provider-preference]"
        ),
        r = !1;
      for (let i = 0; i < n.length; i++) {
        if (t.indexOf(n[i].dataset.cookieManagerProviderPreference) === -1) {
          n[i].checked = !1;
          continue;
        }
        (n[i].checked = !0), (r = !0);
      }
      r && this.forceSaveChanges();
    }
    applySavedPreferences() {
      let t = this.getSavedPreferences();
      if (
        ((window.ten4_cookie_consent = t),
        this.injectHtml(this.tag_managers),
        t === null)
      )
        return;
      let n = {},
        r = {};
      e: for (let i in this.providers) {
        if (t.indexOf(i) === -1) {
          r[i] = this.providers[i];
          continue e;
        }
        n[i] = this.providers[i];
      }
      this.removeProviderCookies(r),
        this.injectHtml(Object.values(n)),
        this.renderProviderWrappers(n);
    }
    reloadPage() {
      window.location.reload();
    }
    getProviderIsMandatory(t) {
      let n = this.providers[t].categories;
      for (let r = 0; r < n.length; r++)
        if (!this.categories[n[r]].mandatory) return !1;
      return !0;
    }
    getProviderKeysInCategory(t) {
      let n = [];
      for (let r in this.providers)
        this.providers[r].categories.indexOf(t) !== -1 && n.push(r);
      return n;
    }
    openCookieManagerUi() {
      this.closeCookieBannerUi(),
        document.body.classList.add("cookie-manager-open");
    }
    closeCookieManagerUi() {
      document.body.classList.remove("cookie-manager-open");
    }
    openCookieBannerUi() {
      document.body.classList.add("cookie-banner-open");
    }
    closeCookieBannerUi() {
      document.body.classList.remove("cookie-banner-open");
    }
    showButtons() {
      document.body.classList.add("cookie-manager-buttons-visible");
    }
    hideButtons() {
      document.body.classList.remove("cookie-manager-buttons-visible");
    }
    forceSaveChanges() {
      document.body.classList.add("cookie-manager-save-changes");
    }
    removeProviderCookies(t) {
      for (let n in t)
        if (!this.getProviderIsMandatory(n))
          for (let r in t[n].cookies_dropped)
            r !== "ten4_cookie_consent" &&
              this.getCookie(r).length > 0 &&
              this.deleteCookie(r);
    }
    injectHtml(t) {
      let n = {
        head_end: "",
        body_end: "",
      };
      for (let r = 0; r < t.length; r++)
        if (typeof t[r].html < "u") {
          let i = t[r].html_injection_point || "body_end";
          if (!Object.prototype.hasOwnProperty.call(n, i))
            throw new Error("Invalid HTML injection point.");
          n[i] += t[r].html;
        }
      n.head_end.length > 0 && this.insertHTML(document.head, n.head_end),
        n.body_end.length > 0 && this.insertHTML(document.body, n.body_end);
    }
    renderProviderWrappers(t) {
      let n = document.querySelectorAll(".cookie-consent-wrapper");
      for (let r = 0; r < n.length; r++) {
        let i = n[r].getAttribute("data-provider-key");
        if (!Object.prototype.hasOwnProperty.call(t, i)) continue;
        let a = n[r].querySelector(".cookie-consent-wrapper__unblocked");
        if (!a) continue;
        let c = a.textContent;
        this.insertHTML(n[r], c, !0),
          n[r].classList.add("cookie-consent-wrapper--unblocked");
      }
    }
    insertHTML(t, n, r = !1) {
      let i = document.createRange();
      i.selectNode(t);
      let a = i.createContextualFragment(n);
      r && (t.innerHTML = ""), t.appendChild(a);
    }
    getCookie(t) {
      let r = ("; " + document.cookie).split("; " + t + "=");
      return r.length === 2 ? r.pop().split(";").shift() : "";
    }
    setCookie(t, n, r) {
      document.cookie =
        t +
        "=" +
        n +
        ";path=/;expires=" +
        r.toGMTString() +
        ";SameSite=Lax;Secure";
    }
    deleteCookie(t) {
      let n = window.location.hostname.split(".");
      for (; n.length > 1; )
        (document.cookie =
          t +
          "=;path=/;domain=" +
          n.join(".") +
          ";expires=Thu, 01 Jan 1970 00:00:01 GMT"),
          n.shift();
    }
  };
  (() => {
    let e = document.querySelector(".header"),
      t = document.querySelector(".footer--base"),
      n = document.querySelector(".back-to-top-button"),
      r = 500,
      i = [0];
    history.scrollRestoration && (history.scrollRestoration = "manual"),
      De.default.hooks.once((h) => {
        Tt(h.next), v(), g(), h.next.namespace === "home" && f(h.next);
      }),
      De.default.hooks.before(async (h) => {
        await new Promise((p) => {
          h.current.namespace === "home"
            ? (window.scrollTo(0, 0), setTimeout(p, 500))
            : p();
        }),
          c(),
          De.default.wrapper.classList.add("is-animating");
      }),
      De.default.hooks.enter((h) => {
        h.trigger !== "back" && i.push(De.default.history.current.scroll.y),
          u(h),
          o(h),
          d(h),
          window.dispatchEvent(new Event("newpageload"));
      }),
      De.default.hooks.after((h) => {
        h.trigger !== "back"
          ? window.scrollTo(0, 0)
          : window.scrollTo(0, i.pop()),
          De.default.wrapper.classList.remove("is-animating"),
          s(h.next.url.path, document.title),
          Tt(h.next),
          Ur(),
          Kr(),
          v(),
          g(),
          h.next.namespace === "home" && f(h.next),
          De.default.wrapper.classList.remove(h.current.namespace),
          De.default.wrapper.classList.add(h.next.namespace),
          h.next.namespace == "contact" && a();
      }),
      De.default.init({
        debug: !1,
        transitions: [
          {
            name: "default",
            leave({ current: h }) {
              Ma(h.container, r);
            },
            enter({ next: h }) {
              ka(h.container, r);
            },
          },
          {
            name: "home",
            to: {
              namespace: "home",
            },
            once: ({ next: h }) => Tt(h),
          },
          {
            name: "to-project",
            sync: !0,
            to: {
              namespace: ["project_archive"],
            },
            enter: ({ next: h }) => Pr(h.container, r, 100, 0),
          },
          {
            name: "project-close",
            sync: !0,
            from: {
              namespace: ["project_archive", "case_study"],
            },
            to: {
              namespace: ["architecture", "index"],
            },
            leave: ({ current: h }) => Pr(h.container, r, 0, 100),
            beforeEnter({ next: h }) {
              h.container.style.zIndex = -1;
            },
            afterEnter({ next: h }) {
              h.container.style.zIndex = 0;
            },
          },
        ],
      });
    function a() {
      new Promise((h) => {
        let p = document.createElement("script");
        p.setAttribute("src", "//embed.typeform.com/next/embed.js"),
          (p.onload = h),
          document.head.appendChild(p);
        let E = document.createElement("link");
        E.setAttribute("rel", "stylesheet"),
          E.setAttribute("href", "//embed.typeform.com/next/css/slider.css"),
          document.head.appendChild(E);
      }).then(() => {
        window.tf.load();
      });
    }
    function c() {
      document.body.classList.toggle("nav-open", !1);
    }
    function u(h) {
      if (
        ((e.classList = "header"),
        (t.classList = "footer footer--base"),
        h.next.namespace === "project_archive")
      ) {
        e.classList.add("header--hidden"), t.classList.add("footer--hidden");
        return;
      }
      (h.next.namespace === "case_study" || h.next.namespace === "services") &&
        e.classList.add("header--invert"),
        h.next.namespace === "home" &&
          (e.classList.add("header--logo-hidden"),
          t.classList.add("footer--hidden"),
          e.classList.add("header--invert"));
    }
    function o(h) {
      h.next.url.path === "/legal/cookies"
        ? document.body.classList.toggle("cookie-manager-open", !1)
        : l("ten4_cookie_consent") ||
          document.body.classList.toggle("cookie-manager-open", !0);
    }
    function d(h) {
      document.body.classList.toggle("home", h.next.namespace === "home");
    }
    function l(h) {
      let p = h + "=",
        x = decodeURIComponent(document.cookie).split(";");
      for (let m = 0; m < x.length; m++) {
        let $ = x[m];
        for (; $.charAt(0) === " "; ) $ = $.substring(1);
        if ($.indexOf(p) === 0) return $.substring(p.length, $.length);
      }
      return "";
    }
    function s(h, p) {
      window.dataLayer &&
        window.dataLayer.push({
          event: "PageView",
          virtualPagePath: h,
          virtualPageTitle: p,
        });
    }
    function f(h) {
      let p = h.container.querySelector(".scroll-container"),
        E = h.container.querySelectorAll(".scroll-container__section");
      if (!p && !E) return;
      n.addEventListener("click", () => {
        p.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      });
      let x = h.container.querySelector(".header"),
        m = h.container.querySelector(".carousel-nav"),
        $ = m.querySelector(".carousel-nav__ul"),
        C = h.container.querySelectorAll(".carousel-nav__item"),
        I = [
          "cgis-animations-cinemagraphs",
          "digital-twins",
          "marketing-films",
          "realspace",
          "virtual-showrooms",
          "virtual-tours",
        ];
      E.forEach((_) => {
        let D = _.querySelector(".hp-carousel");
        if (D) {
          let k = D.querySelector(".hp-carousel__viewport"),
            S = D.querySelector(".carousel__button--prev"),
            L = D.querySelector(".carousel__button--next"),
            q = (W) => {
              let Y = W.rootNode();
              Y.addEventListener("click", Y.focus);
            },
            j = (W) => {
              document.addEventListener("keyup", (ae) => {
                if (document.activeElement === W.rootNode())
                  switch (ae.code) {
                    case "ArrowLeft":
                      W.scrollPrev();
                      break;
                    case "ArrowRight":
                      W.scrollNext();
                      break;
                  }
              });
              let Y = Xr(N);
              N.on("select", Y);
            },
            N = _e(
              k,
              {
                loop: !0,
                align: "start",
              },
              [
                et({
                  selected: "viewing",
                }),
              ]
            );
          q(N), j(N);
          let B = qt(S, L, N);
          Ht(S, L, N), N.on("select", B), N.on("init", B);
        }
        let H = {
          root: document.querySelector(".scroll-container"),
          rootMargin: "0px",
          threshold: Rt(),
        };
        new IntersectionObserver((k) => {
          k.forEach((S) => {
            let L = S.target.querySelector(".viewing.carousel__slide--video"),
              q = S.target.id === "home-main",
              j,
              P;
            if (
              (L &&
                ((j = L.querySelector("video")),
                (P =
                  j.currentTime > 0 &&
                  !j.paused &&
                  !j.ended &&
                  j.readyState > j.HAVE_CURRENT_DATA)),
              j && S.intersectionRatio > 0.9
                ? P || j.play()
                : j && !S.isIntersecting && P && j.pause(),
              q && S.intersectionRatio < 0.9
                ? x.classList.contains("header--hide") ||
                  (x.classList.add("header--hide"),
                  n.classList.add("back-to-top-button--show"),
                  p.classList.add("scroll-container--top-gradient"))
                : q &&
                  S.intersectionRatio > 0.9 &&
                  x.classList.contains("header--hide") &&
                  (x.classList.remove("header--hide"),
                  n.classList.remove("back-to-top-button--show"),
                  p.classList.remove("scroll-container--top-gradient")),
              S.intersectionRatio > 0.7 && I.indexOf(S.target.id) !== -1)
            ) {
              m.classList.toggle("sticky", !0);
              let N = m.querySelector(`[data-id="${S.target.id}"]`);
              C.forEach((B) => {
                B.classList.toggle("carousel-nav__item--selected", !1);
              }),
                N.classList.toggle("carousel-nav__item--selected", !0),
                Nt() < _t.f.width &&
                  S.intersectionRatio === 1 &&
                  $.scrollTo({
                    top: 0,
                    left: N.offsetLeft - 20,
                    behavior: "smooth",
                  });
            } else
              I.indexOf(S.target.id) === -1 &&
                S.intersectionRatio > 0.5 &&
                m.classList.toggle("sticky", !1);
          });
        }, H).observe(_);
      });
    }
    function v() {
      let h = window.location.pathname.split("/"),
        p = document.getElementById("js-listing-filters"),
        E = document.querySelector(".results"),
        x = document.querySelector(".filter"),
        m = document.querySelector(".filter__clear"),
        $ = document.querySelector(".filter__applied-text");
      if (!p || !E) return;
      let C = document.querySelectorAll(".listing__item"),
        I = document.querySelector(".filter__toggle");
      I.addEventListener("click", () => {
        let S = I.classList.toggle("toggled");
        x.classList.toggle("filter-open"),
          (I.textContent = `${S ? "Hide filter" : "Show filter"}`);
      }),
        m.addEventListener("click", () => {
          z(), m.classList.remove("filter__clear--visible"), H(!0);
        });
      let _ = {
          rootMargin: "-300px 0px -100px 0px",
          threshold: Rt(),
        },
        D = new IntersectionObserver((S) => {
          S.forEach((L, q) => {
            let j = q * 100,
              P = L.target.querySelector("video"),
              N;
            P && L.intersectionRatio > 0.1
              ? N || P.play()
              : P && !L.isIntersecting && N && P.pause(),
              L.isIntersecting &&
                setTimeout(() => {
                  L.target.classList.remove("listing__item--hidden");
                }, j);
          });
        }, _);
      C.length &&
        C.forEach((S) => {
          D.observe(S);
        }),
        p.addEventListener("change", () => {
          H();
        });
      function H(S = !1) {
        let L = `${
          S ? "?" : "?" + new URLSearchParams(new FormData(p)).toString()
        }`;
        window.history.pushState(null, null, L),
          k(L),
          S || m.classList.add("filter__clear--visible");
      }
      function z() {
        let S = document.querySelectorAll(".filter__option-input");
        m.classList.remove("filter__clear--visible"),
          S.forEach((L) => {
            L.checked = !1;
          });
      }
      async function k(S) {
        try {
          let q = await (
            await fetch(S, {
              method: "GET",
              headers: {
                "Content-Type": "text/plain",
                "X-Requested-With": "XMLHttpRequest",
              },
            })
          ).text();
          E.innerHTML = q;
          let j = E.querySelector("[data-selected-category-text]");
          $.textContent = j.dataset.selectedCategoryText;
          let P = E.querySelectorAll(".listing__item"),
            N = E.querySelector("[data-filtered-filter-groups]");
          (p.innerHTML = N.innerHTML),
            N.remove(),
            P.length &&
              P.forEach((B) => {
                D.observe(B);
              });
        } catch (L) {
          console.log("Error: ", L);
        }
      }
    }
    function g() {
      let h = document.querySelector(".read-more"),
        p = document.querySelector(".read-more__button");
      !h ||
        p.addEventListener("click", () => {
          let E = p.classList.toggle("toggled");
          h.classList.toggle("read-more--open"),
            (p.textContent = `${E ? "Read less" : "Read more"}`);
        });
    }
  })();
  window.addEventListener("newpageload", () => {
    let e = document.querySelectorAll(".has-subnav");
    Array.prototype.forEach.call(e, function (t) {
      let n = null,
        r = t.querySelector("button");
      Nt() > _t.f.width &&
        (t.addEventListener("mouseover", function () {
          for (let i = 0; i < e.length; i++)
            e[i].parentElement.classList.remove("subnav-open"),
              r.setAttribute("aria-expanded", !1);
          this.parentElement.classList.add("subnav-open"),
            t.setAttribute("aria-expanded", !0),
            clearTimeout(n);
        }),
        t.addEventListener("mouseout", function () {
          n = setTimeout(function () {
            document.querySelector(".subnav-open") &&
              document
                .querySelector(".subnav-open")
                .classList.remove("subnav-open"),
              r.setAttribute("aria-expanded", !1);
          }, 500);
        })),
        t.querySelector("button").addEventListener("click", function () {
          return (
            this.parentNode.classList.contains("subnav-open")
              ? (document.body.classList.remove("subnav-open"),
                this.parentNode.classList.remove("subnav-open"),
                this.setAttribute("aria-expanded", !1))
              : (document.body.classList.add("subnav-open"),
                this.parentNode.classList.add("subnav-open"),
                this.setAttribute("aria-expanded", !0)),
            !1
          );
        });
    });
  });
  window.addEventListener("newpageload", () => {
    let e = 0,
      t = () => {
        let n = document.querySelector(".header"),
          r = document.querySelector("main"),
          i = window.pageYOffset || document.documentElement.scrollTop,
          a = r.getBoundingClientRect().top;
        a < -200
          ? n.classList.add("header--sticky")
          : n.classList.remove("header--sticky"),
          i < e && a < -500
            ? (n.classList.add("header--reveal-sticky"),
              document.body.classList.add("sticky-header-revealed"))
            : (n.classList.remove("header--reveal-sticky"),
              document.body.classList.remove("sticky-header-revealed")),
          (e = i <= 0 ? 0 : i);
      };
    window.removeEventListener("scroll", t),
      window.addEventListener("scroll", t);
  });
  window.addEventListener("newpageload", () => {
    !document.getElementById("nav-toggle") || new $t();
  });
  window.addEventListener("newpageload", () => {
    let e = document.querySelectorAll(".swiper"),
      t = [];
    e.forEach((n) => {
      let r = n.classList.contains("swiper--auto-height");
      t.push(
        new nt(n, {
          autoHeight: r,
          freeMode: {
            enabled: !0,
            momentum: !0,
          },
          slidesPerView: "auto",
          spaceBetween: 16,
          slidesOffsetAfter: 32,
          slidesOffsetBefore: 32,
          mousewheel: {
            enabled: !0,
            releaseOnEdges: !1,
          },
          pagination: {
            el: ".swiper__progress",
            type: "progressbar",
          },
          on: {
            slideChange: () => {
              let i = n.getBoundingClientRect();
              (i.top > 0 && i.bottom < window.innerHeight) ||
                window.scrollTo({
                  top:
                    i.top +
                    window.pageYOffset -
                    (window.innerHeight - n.scrollHeight) / 2,
                  behavior: "smooth",
                });
            },
          },
        })
      );
    });
  });
  window.addEventListener("newpageload", () => {
    let e = document.querySelectorAll(".carousel");
    if (!e) return;
    e.forEach((n) => {
      t(n);
    });
    function t(n) {
      let r = n.querySelector(".carousel__viewport"),
        i = JSON.parse(n.getAttribute("data-options")),
        a = n.querySelectorAll(".carousel__pip"),
        c = n.querySelector(".carousel__slide-count"),
        u = n.querySelector(".carousel__button--prev"),
        o = n.querySelector(".carousel__button--next"),
        d = n.querySelector(".carousel__refresh"),
        l = n.hasAttribute("data-autoplay"),
        s = n.classList.contains("carousel--full-fade"),
        f = n.querySelector(".carousel__partner-heading--dynamic"),
        v = n.getAttribute("data-autoplay-videos"),
        g = (C) => {
          let I = C.rootNode();
          I.addEventListener("click", I.focus);
        },
        h = (C) => {
          document.addEventListener("keyup", (I) => {
            if (document.activeElement === C.rootNode())
              switch (I.code) {
                case "ArrowLeft":
                  C.scrollPrev();
                  break;
                case "ArrowRight":
                  C.scrollNext();
                  break;
              }
          });
        },
        p,
        E = {},
        x = {
          loop: !0,
          align: "start",
        };
      for (p in x) Object.prototype.hasOwnProperty.call(x, p) && (E[p] = x[p]);
      for (p in i) Object.prototype.hasOwnProperty.call(i, p) && (E[p] = i[p]);
      s && ((E.inViewThreshold = 1), (E.speed = 20));
      let m;
      if (
        (l
          ? (m = _e(r, E, [
              et({
                selected: "viewing",
              }),
              pt({
                delay: 4e3,
              }),
            ]))
          : (m = _e(r, E, [
              et({
                selected: "viewing",
              }),
            ])),
        g(m),
        h(m),
        n.classList.contains("carousel--project") && m.rootNode().focus(),
        u && o)
      ) {
        let C = qt(u, o, m);
        Ht(u, o, m), m.on("select", C), m.on("init", C);
      }
      if (a.length) {
        let C = Fr(a, m);
        jr(a, m), m.on("select", C), m.on("init", C);
      }
      if (
        (d &&
          d.addEventListener("click", () => {
            m.scrollTo(0);
          }),
        c)
      ) {
        let C = c.querySelector(".carousel__slide-count-current");
        m.on("init", () => {
          C.innerHTML = m.selectedScrollSnap() + 1;
        }).on("select", () => {
          C.innerHTML = m.selectedScrollSnap() + 1;
        });
      }
      if (s) {
        let C = (_) => {
            let D = _ === "resize",
              H = D ? "remove" : "add";
            n.classList[H]("carousel--is-ready"), D && m.reInit();
          },
          I = Vr(m);
        m.on("init", C),
          m.on("init", I),
          m.on("select", I),
          m.on("resize", C),
          m.on("reInit", C),
          m.internalEngine().translate.toggleActive(!1),
          m.internalEngine().translate.clear();
      }
      if (f) {
        let C = Gr(f, m);
        m.on("init", C), m.on("select", C);
      }
      let $ = Wr(m, v);
      m.on("select", $);
    }
  });
  (() => {
    window.addEventListener("newpageload", () => {
      let n = document.querySelectorAll(".fold-out-toggle");
      !n ||
        n.forEach((r) => {
          r.addEventListener("click", (i) => {
            i.preventDefault(), e(r);
          });
        });
    });
    function e(n) {
      let r = document.querySelector(n.getAttribute("data-fold-out")),
        i = r.querySelector(".fold-out__close");
      r.classList.add("open"),
        document.body.classList.toggle("fold-out-open", !0),
        window.addEventListener("click", (a) => {
          a.target.classList.contains("fold-out") && t(r);
        }),
        i.addEventListener("click", () => {
          t(r);
        });
    }
    function t(n) {
      n.classList.remove("open"),
        document.body.classList.toggle("fold-out-open", !1);
    }
  })();
  (() => {
    function e(n) {
      let r = n.getAttribute("data-embed-url"),
        i = document.createElement("iframe");
      i.setAttribute("width", 1376),
        i.setAttribute("height", 617),
        i.setAttribute("src", r),
        i.setAttribute("title", "Embedded video content"),
        i.setAttribute("frameborder", 0),
        i.setAttribute("allowfullscreen", !0),
        i.setAttribute("allow", "autoplay"),
        n.classList.add("flex-container"),
        n.classList.add("video-embed--playing"),
        (n.innerHTML = ""),
        n.appendChild(i);
    }
    function t(n) {
      return (r) => {
        r.preventDefault(), e(n);
      };
    }
    window.addEventListener("newpageload", () => {
      let n = document.querySelectorAll(".video-embed");
      for (let r = 0; r < n.length; r += 1)
        n[r].addEventListener("click", t(n[r]));
    });
  })();
  (() => {
    function e(t) {
      let n = t.querySelector(".video-in-slideshow__video"),
        r = t.querySelector(".video-in-slideshow__video-poster");
      t.classList.toggle("video-in-slideshow--paused", !1),
        r && (r.style.display = "none"),
        n.play(),
        (n.controls = !n.controls);
    }
    window.addEventListener("newpageload", () => {
      let t = document.querySelectorAll(".video-in-slideshow");
      for (let n = 0; n < t.length; n += 1)
        t[n].addEventListener("click", () => {
          e(t[n]);
        });
    });
  })();
  window.addEventListener("newpageload", () => {
    let e = document.querySelectorAll(".project-block__before-after-wrapper");
    if (!e) return;
    let t = new IntersectionObserver(
      (n) => {
        n.forEach((r) => {
          r.isIntersecting &&
            r.target
              .querySelectorAll("video.project-block__before-after-item")
              .forEach((a) => {
                a.play();
              });
        });
      },
      {
        threshold: 1,
      }
    );
    e.forEach((n) => {
      let r = n.querySelector('input[type="range"]'),
        i = n.querySelector(".project-block__before-after-item--after");
      !i ||
        !r ||
        ((r.value = "200"),
        r.addEventListener("input", (a) => {
          let c = a.target.value / 4,
            u = c > 50 ? `calc( ${c}% - 1px )` : `${c}%`;
          if (((i.style.width = u), c === 100 || c === 0)) {
            i.style.border = 0;
            return;
          }
          i.style.border = null;
        }),
        n.classList.contains("project-block__before-after-wrapper--video") &&
          t.observe(n));
    });
  });
  (() => {
    window.addEventListener("newpageload", () => {
      let t = document.querySelectorAll(".iframe-container");
      if (!t) return;
      typeof window.IntersectionObserver > "u" &&
        t.forEach((r) => {
          e(r);
        });
      let n = new IntersectionObserver((r) => {
        r.forEach((i) => {
          i.isIntersecting && (e(i.target), n.unobserve(i.target));
        });
      });
      t.forEach((r) => {
        n.observe(r);
      });
    });
    function e(t) {
      let n = t.querySelector(".iframe-overlay"),
        r = t.querySelector(".tour");
      setTimeout(() => {
        n.classList.add("iframe-overlay--removed"), r.focus();
      }, 4e3);
    }
  })();
  window.addEventListener("newpageload", () => {
    let e = document.querySelector(".hero-media"),
      t = document.querySelector(".hero-media__poster");
    !e ||
      !t ||
      e.addEventListener("canplay", () => {
        t.classList.contains("hero-media__poster--faded") ||
          t.classList.add("hero-media__poster--faded");
      });
  });
  window.addEventListener("newpageload", () => {
    let e = document.querySelectorAll(".video-autoplay");
    if (!e) return;
    let t = new IntersectionObserver((n) => {
      n.forEach((r) => {
        r.intersectionRatio > 0 ? r.target.play() : r.target.pause();
      });
    });
    e.forEach((n) => {
      t.observe(n);
    });
  });
  window.addEventListener("newpageload", () => {
    let e = document.querySelectorAll(".project-block__video--controls");
    !e ||
      e.forEach((t) => {
        let n = t.querySelector(".video-controls"),
          r = t.querySelector(".project-block__video-poster"),
          i = t.querySelector(".project-block__video-play-button");
        !n ||
          ((i.onclick = () => {
            r && (r.style.display = "none"), n.play();
          }),
          (n.oncanplay = () => {
            t.classList.remove("project-block__video--loading");
          }),
          (n.onplaying = () => {
            t.classList.add("project-block__video--playing");
          }),
          (n.onpause = () => {
            t.classList.remove("project-block__video--playing");
          }));
      });
  });
  (() => {
    e(),
      window.addEventListener("newpageload", () => {
        e();
      });
    function e() {
      let t = document.querySelectorAll(".lazy");
      if (!!t)
        for (let n = 0; n < t.length; n++)
          t[n].complete
            ? window.setTimeout(() => {
                t[n].classList.add("loaded");
              }, 100 * n)
            : t[n].addEventListener("load", () => {
                t[n].classList.add("loaded");
              });
    }
  })();
  window.addEventListener("newpageload", () => {
    let e = document.querySelectorAll(".controlled-video");
    if (!e.length) return;
    let t = new IntersectionObserver((n) => {
      n.forEach((r) => {
        r.intersectionRatio <= 0 && r.target.pause();
      });
    });
    e.forEach((n) => {
      t.observe(n);
    });
  });
  window.addEventListener("newpageload", () => {
    let e = document.querySelector(".back-to-top");
    !e ||
      e.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      });
  });
  window.addEventListener("newpageload", () => {
    let e = document.querySelector(".parallax");
    if (!e) return;
    let t = e.querySelector(".hero__title");
    window.addEventListener(
      "scroll",
      () =>
        Yr(
          window.requestAnimationFrame(() => {
            let n = document.documentElement.scrollTop;
            (e.style.transform = `translate3d( 0, ${n * 0.2}px, 0)`),
              (t.style.transform = `translate3d( 0, ${n * -0.2}px, 0)`);
          })
        ),
      50
    );
  });
  window.addEventListener("newpageload", () => {
    new Ct();
  });
  window.addEventListener("newpageload", () => {
    let e = document.getElementById("locale-toggle");
    if (!e) return;
    document.body.classList.toggle("locale-open", !1),
      window.addEventListener("click", (n) => {
        if (
          (n.target.id === "locale-toggle" &&
            document.body.classList.toggle("locale-open", !0),
          n.target.classList.contains("header__locale-option"))
        ) {
          let r = new Date();
          r.setDate(r.getDate() + 1);
          let i = r.toGMTString();
          Qr(
            "ten4_locale_cookie",
            {
              manually_selected: !0,
            },
            i
          ),
            (window.location.href = n.target.dataset.url);
        }
      });
    let t = () => {
      e.getBoundingClientRect().top < 0 &&
        document.body.classList.remove("locale-open");
    };
    window.addEventListener("scroll", t);
  });
  // window.addEventListener("newpageload", () => {
  //   let t = Zr("ten4_locale_cookie"),
  //     n = t ? JSON.parse(t) : null;

  //   if (n && n.manually_selected === !0) return;

  //   let r = new Request("?action=geolocation/region/get-region");
  //   fetch(r)
  //     .then((i) => {
  //       if (!i.ok) throw new Error(`HTTP error! Status: ${i.status}`);
  //       return i.text();
  //     })
  //     .then((i) => {
  //       document.getElementById("locale-toggle").dataset.region !== i &&
  //         ((locale_link = document.querySelector(`#locale-link-${i}`)),
  //         locale_link && (window.location.href = locale_link.dataset.url));
  //     });
  // });
  window.addEventListener("newpageload", () => {
    let e = document.querySelector(".breadcrumbs-bar");
    if (!e) return;
    let t = e.parentElement,
      n = e.querySelector(".breadcrumbs-bar__back-to-top"),
      r = (a) => {
        a.forEach((c) => {
          if (c.isIntersecting) e.classList.remove("breadcrumbs-bar--sticky");
          else {
            if (c.boundingClientRect.top > 0) {
              e.classList.remove("breadcrumbs-bar--sticky");
              return;
            }
            e.classList.add("breadcrumbs-bar--sticky");
          }
        });
      };
    new IntersectionObserver(r).observe(t),
      n &&
        n.addEventListener("click", () => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        });
  });
  (() => {
    let e = document.querySelector(".back-to-top-button");
    e.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }),
      (window.onscroll = () => {
        document.body.getBoundingClientRect().top < -1e3
          ? e.classList.add("back-to-top-button--show")
          : e.classList.remove("back-to-top-button--show");
      }),
      window.addEventListener("newpageload", () => {
        e.classList.remove("back-to-top-button--show");
        let t = document.querySelector(".back-to-top");
        if (!t) return;
        new IntersectionObserver((r) => {
          r.forEach((i) => {
            i.isIntersecting
              ? e.classList.add("back-to-top-button--hide-override")
              : e.classList.remove("back-to-top-button--hide-override");
          });
        }).observe(t);
      });
  })();
  window.dispatchEvent(
    new Event("newpageload", {
      init: !0,
    })
  );
  return Ha(cs);
})();
//# sourceMappingURL=final.js.map
