(this["webpackJsonp@sheepdex/interface"] =
  this["webpackJsonp@sheepdex/interface"] || []).push([
  [1],
  {
    1006: function (e, t) {
      function r(e) {
        if (o[e]) return o[e].exports;
        var t = (o[e] = { i: e, l: !1, exports: {} });
        return n[e].call(t.exports, t, t.exports, r), (t.l = !0), t.exports;
      }
      var n, o;
      e.exports =
        ((n = [
          function (e, t) {
            e.exports = function (e) {
              return e && e.__esModule ? e : { default: e };
            };
          },
          function (e, t) {
            e.exports = function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            };
          },
          function (e, t, r) {
            "use strict";
            function n() {
              return Math.floor(9e4 * Math.random()) + 1e4;
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.sendAsyncWrapper = function (e, t) {
                var r = this;
                return new Promise(function (o, a) {
                  r.sendAsync(
                    { jsonrpc: "2.0", id: n(), method: e, params: t || [] },
                    function (e, t) {
                      e ? a(e) : o(t.result);
                    }
                  );
                });
              }),
              (t.sendFortmaticAsyncWrapper = function (e) {
                var t = this;
                return new Promise(function (r, n) {
                  t.getProvider().sendFortmaticAsync(e, function (e, t) {
                    e ? n(e) : r(t ? t.result : {});
                  });
                });
              }),
              (t.randomId = n),
              (t.findExistingResponse = function (e, t) {
                for (var r = 0; r < e.length; r++)
                  if (e[r].id === t) return e[r];
                return null;
              });
          },
          function (e, t, r) {
            e.exports = r(4);
          },
          function (e, t, r) {
            "use strict";
            var n = r(0),
              o = n(r(1)),
              a = n(r(5)),
              i = r(2),
              s = {};
            e.exports = function e(t, r, n) {
              var u = this;
              if (
                ((0, o.default)(this, e),
                (this.fortmaticClient = "https://x2.fortmatic.com"),
                !t)
              )
                throw new Error(
                  "Please provide a Fortmatic API key that you acquired from the developer dashboard."
                );
              (this.apiKey = t),
                (this.options = n),
                (this.ethNetwork = r),
                (this.queryParams = btoa(
                  JSON.stringify({ API_KEY: t, ETH_NETWORK: r })
                )),
                (this.transactions = {
                  send: function (e, t) {
                    (e = new c("fm_composeSend", {
                      to: e.to,
                      value: e.amount,
                    })),
                      u.getProvider().sendFortmaticAsync(e, t);
                  },
                }),
                (this.getProvider = function () {
                  return (
                    s["fortmatic-".concat(u.queryParams)] ||
                      (s["fortmatic-".concat(u.queryParams)] = new a.default(
                        u.fortmaticClient,
                        { API_KEY: t, ETH_NETWORK: r }
                      )),
                    s["fortmatic-".concat(u.queryParams)]
                  );
                }),
                (this.user = {
                  login: function () {
                    return u.getProvider().enable();
                  },
                  logout: function () {
                    (u.getProvider().account = null),
                      (u.getProvider().network = null);
                    var e = new c("fm_logout");
                    return i.sendFortmaticAsyncWrapper.call(u, e);
                  },
                  getUser: function () {
                    var e = new c("fm_get_user");
                    return i.sendFortmaticAsyncWrapper.call(u, e);
                  },
                  getBalances: function () {
                    var e = new c("fm_get_balances");
                    return i.sendFortmaticAsyncWrapper.call(u, e);
                  },
                  getTransactions: function () {
                    var e = new c("fm_get_transactions");
                    return i.sendFortmaticAsyncWrapper.call(u, e);
                  },
                  isLoggedIn: function () {
                    var e = new c("fm_is_logged_in");
                    return i.sendFortmaticAsyncWrapper.call(u, e);
                  },
                  settings: function () {
                    var e = new c("fm_accountSettings");
                    return i.sendFortmaticAsyncWrapper.call(u, e);
                  },
                  deposit: function (e) {
                    return (
                      (e = new c("fm_deposit", e)),
                      i.sendFortmaticAsyncWrapper.call(u, e)
                    );
                  },
                }),
                (this.configure = function () {
                  var e =
                      0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = new c("fm_configure");
                  return (
                    (t.params = [e]), i.sendFortmaticAsyncWrapper.call(u, t)
                  );
                });
            };
            var c = function e(t, r) {
              (0, o.default)(this, e),
                (this.id = (0, i.randomId)()),
                (this.method = t),
                (this.params = r ? [r] : [{}]);
            };
          },
          function (e, t, r) {
            "use strict";
            var n = r(0);
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.default = void 0);
            var o,
              a,
              i,
              s,
              c = n(r(6)),
              u = n(r(9)),
              l = n(r(1)),
              f = n(r(10)),
              d = r(11),
              h = n(r(12)),
              p = r(2);
            (0, f.default)(m, [
              {
                key: "constructPostMessage",
                value: function () {
                  var e = this;
                  Object.keys(this.postMessages).map(function (t) {
                    e.postMessages[t] += "-".concat(e.queryParams);
                  });
                },
              },
              {
                key: "createOverlay",
                value: function () {
                  var e = this;
                  return new Promise(function (t, r) {
                    function n() {
                      var r, n;
                      !(function () {
                        var t = !0,
                          r = !1,
                          n = void 0;
                        try {
                          for (
                            var o,
                              a = document
                                .getElementsByClassName("fortmatic-iframe")
                                [Symbol.iterator]();
                            !(t = (o = a.next()).done);
                            t = !0
                          )
                            if (o.value.src.includes(e.queryParams)) return;
                        } catch (t) {
                          (r = !0), (n = t);
                        } finally {
                          try {
                            t || null == a.return || a.return();
                          } finally {
                            if (r) throw n;
                          }
                        }
                        return 1;
                      })() ||
                        (((n = document.createElement("style")).innerHTML =
                          h.default.css),
                        (n.type = "text/css"),
                        document.head.appendChild(n),
                        ((r = document.createElement("iframe")).className =
                          "fortmatic-iframe"),
                        (r.src = ""
                          .concat(e.fortmaticClient, "/send?params=")
                          .concat(e.queryParams)),
                        document.body.appendChild(r),
                        ((n = document.createElement("img")).src =
                          "https://static.fortmatic.com/assets/trans.gif"),
                        document.body.appendChild(n),
                        t({ iframe: r }));
                    }
                    -1 <
                    ["loaded", "interactive", "complete"].indexOf(
                      document.readyState
                    )
                      ? n()
                      : window.addEventListener("load", n.bind(e), !1);
                  });
                },
              },
              {
                key: "showOverlay",
                value:
                  ((s = (0, u.default)(
                    c.default.mark(function e() {
                      return c.default.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.overlay;
                              case 2:
                                e.sent.iframe.style.display = "block";
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return s.apply(this, arguments);
                  }),
              },
              {
                key: "hideOverlay",
                value:
                  ((i = (0, u.default)(
                    c.default.mark(function e() {
                      return c.default.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.overlay;
                              case 2:
                                e.sent.iframe.style.display = "none";
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return i.apply(this, arguments);
                  }),
              },
              {
                key: "sendAsync",
                value: function (e, t) {
                  0 < e.length
                    ? this.enqueue({
                        payload: {
                          id: (0, p.randomId)(),
                          batch: e.map(function (e) {
                            return (e.id = (0, p.randomId)()), e;
                          }),
                          method: "eth_batchRequest",
                        },
                        cb: t,
                      })
                    : this.enqueue({ payload: e, cb: t });
                },
              },
              {
                key: "sendFortmaticAsync",
                value: function (e, t) {
                  this.enqueue({ payload: e, cb: t, isNative: !0 });
                },
              },
              {
                key: "send",
                value: function (e, t) {
                  if ("string" == typeof e)
                    return p.sendAsyncWrapper.call(this, e, t);
                  if (!t) {
                    this.sendAsync(e, function () {});
                    var r = {};
                    switch (e.method) {
                      case "eth_accounts":
                        r = this.account ? [this.account] : [];
                        break;
                      case "eth_coinbase":
                        r = this.account;
                        break;
                      case "net_version":
                        r =
                          this.network ||
                          (this.options.API_KEY.startsWith("pk_live") ? 1 : 4);
                        break;
                      case "eth_uninstallFilter":
                        r = !0;
                        break;
                      default:
                        r = {};
                    }
                    return { id: e.id, jsonrpc: e.jsonrpc, result: r };
                  }
                  this.sendAsync(e, t);
                },
              },
              {
                key: "enqueue",
                value: function (e) {
                  this.queue.push(e), this.overlayReady && this.dequeue();
                },
              },
              {
                key: "dequeue",
                value:
                  ((a = (0, u.default)(
                    c.default.mark(function e() {
                      var t,
                        r,
                        n,
                        o = this;
                      return c.default.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (0 === this.queue.length)
                                  return e.abrupt("return");
                                e.next = 2;
                                break;
                              case 2:
                                if ((t = this.queue.shift()))
                                  return (
                                    (r = t.payload),
                                    (n = t.cb),
                                    (r.id = (0, p.randomId)()),
                                    (e.next = 9),
                                    this.postMessage(
                                      t.isNative
                                        ? this.postMessages
                                            .FORTMATIC_HANDLE_FORTMATIC_REQUEST
                                        : this.postMessages
                                            .FORTMATIC_HANDLE_REQUEST,
                                      t.payload
                                    )
                                  );
                                e.next = 11;
                                break;
                              case 9:
                                r.batch && 0 < r.batch.length
                                  ? (r.batch.forEach(function (e) {
                                      o.requests[e.id] = {
                                        parentId: r.id,
                                        payload: e,
                                        cb: function (e, t) {
                                          var n =
                                            o.requests[r.id].batchResponse;
                                          if (
                                            e &&
                                            e.response &&
                                            !(0, p.findExistingResponse)(
                                              n,
                                              e.response.id
                                            )
                                          )
                                            throw (
                                              (n.push({
                                                jsonrpc: "2.0",
                                                id: e.response.id,
                                                error: {
                                                  code: e.response.code,
                                                  message: e.response.message,
                                                },
                                              }),
                                              o.requests[r.id].cb(null, n),
                                              e.response)
                                            );
                                          if (
                                            t &&
                                            t.result &&
                                            !(0, p.findExistingResponse)(
                                              n,
                                              t.id
                                            )
                                          )
                                            return n.push(t);
                                          throw new Error(
                                            "Fortmatic: unexpected callback behavior"
                                          );
                                        },
                                      };
                                    }),
                                    (this.requests[r.id] = {
                                      payload: r,
                                      cb: n,
                                      batchResponse: [],
                                    }))
                                  : (this.requests[r.id] = {
                                      payload: r,
                                      cb: n,
                                    }),
                                  this.dequeue();
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function () {
                    return a.apply(this, arguments);
                  }),
              },
              {
                key: "postMessage",
                value:
                  ((o = (0, u.default)(
                    c.default.mark(function e(t, r) {
                      var n;
                      return c.default.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.overlay;
                              case 2:
                                if (!(n = e.sent).iframe.contentWindow) {
                                  e.next = 7;
                                  break;
                                }
                                n.iframe.contentWindow.postMessage(
                                  { msgType: t, payload: r },
                                  "*"
                                ),
                                  (e.next = 8);
                                break;
                              case 7:
                                throw new Error(
                                  "Fortmatic: Modal is not ready."
                                );
                              case 8:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  )),
                  function (e, t) {
                    return o.apply(this, arguments);
                  }),
              },
              {
                key: "enable",
                value: function () {
                  return p.sendAsyncWrapper.call(this, "eth_accounts");
                },
              },
              {
                key: "listenMessage",
                value: function () {
                  var e = this;
                  window.addEventListener("message", function (t) {
                    if (t.origin === e.fortmaticClient) {
                      var r,
                        n = t.data.response ? t.data.response.id : null;
                      switch (t.data.msgType) {
                        case e.postMessages.FORTMATIC_OVERLAY_READY:
                          (e.overlayReady = !0), e.dequeue();
                          break;
                        case e.postMessages.FORTMATIC_HANDLE_RESPONSE:
                          try {
                            e.requests[n].cb(null, t.data.response);
                            var o = e.requests[n].parentId;
                            o &&
                              e.requests[o].payload.batch.length ===
                                e.requests[o].batchResponse.length &&
                              e.requests[o].cb(
                                null,
                                e.requests[o].batchResponse
                              ),
                              "eth_accounts" === e.requests[n].payload.method
                                ? (e.account = t.data.response.result[0])
                                : "eth_coinbase" ===
                                  e.requests[n].payload.method
                                ? (e.account = t.data.response.result)
                                : "net_version" ===
                                    e.requests[n].payload.method &&
                                  (e.network = t.data.response.result);
                          } catch (t) {}
                          (e.isLoggedIn = !0), e.dequeue();
                          break;
                        case e.postMessages.FORTMATIC_HIDE_OVERLAY:
                          e.hideOverlay();
                          break;
                        case e.postMessages.FORTMATIC_SHOW_OVERLAY:
                          e.showOverlay();
                          break;
                        case e.postMessages.FORTMATIC_USER_LOGOUT:
                          (e.account = null),
                            (e.network = null),
                            (e.isLoggedIn = !1);
                          break;
                        case e.postMessages.FORTMATIC_UNAUTHORIZED_API_KEY:
                          throw (
                            ((e.overlayReady = !1),
                            new Error(
                              "Given API key is not authorized to access the resource."
                            ))
                          );
                        case e.postMessages.FORTMATIC_USER_DENIED:
                          n
                            ? ((r =
                                t.data.response && t.data.response.message
                                  ? t.data.response.message
                                  : "Fortmatic: Modal was closed without executing action!"),
                              (o =
                                t.data.response && t.data.response.code
                                  ? t.data.response.code
                                  : 1),
                              e.requests[n].cb({
                                message: r,
                                code: o,
                                response: t.data.response,
                              }))
                            : e.queue.forEach(function (e) {
                                return e.cb({
                                  message:
                                    "Fortmatic: Modal was closed without executing action!",
                                  code: 1,
                                });
                              }),
                            e.dequeue();
                      }
                    }
                  });
                },
              },
            ]),
              (u = m);
            function m(e, t) {
              if (
                ((0, l.default)(this, m),
                (this.fortmaticClient = e),
                (this.requests = {}),
                (this.queue = []),
                (this.account = null),
                (this.network = null),
                (this.isFortmatic = !0),
                (this.overlayReady = !1),
                (this.isLoggedIn = !1),
                (this.postMessages = {
                  FORTMATIC_HANDLE_BATCH_REQUEST:
                    "FORTMATIC_HANDLE_BATCH_REQUEST",
                  FORTMATIC_HANDLE_REQUEST: "FORTMATIC_HANDLE_REQUEST",
                  FORTMATIC_HANDLE_FORTMATIC_REQUEST:
                    "FORTMATIC_HANDLE_FORTMATIC_REQUEST",
                  FORTMATIC_HANDLE_RESPONSE: "FORTMATIC_HANDLE_RESPONSE",
                  FORTMATIC_OVERLAY_READY: "FORTMATIC_OVERLAY_READY",
                  FORTMATIC_SHOW_OVERLAY: "FORTMATIC_SHOW_OVERLAY",
                  FORTMATIC_HIDE_OVERLAY: "FORTMATIC_HIDE_OVERLAY",
                  FORTMATIC_USER_DENIED: "FORTMATIC_USER_DENIED",
                  FORTMATIC_USER_LOGOUT: "FORTMATIC_USER_LOGOUT",
                  FORTMATIC_UNAUTHORIZED_API_KEY:
                    "FORTMATIC_UNAUTHORIZED_API_KEY",
                }),
                !t.API_KEY)
              )
                throw new Error(
                  "Please provide a Fortmatic API key that you acquired from the developer dashboard."
                );
              (this.options = {
                API_KEY: t.API_KEY,
                ETH_NETWORK: t.ETH_NETWORK,
                DOMAIN_ORIGIN: window.location ? window.location.origin : "",
                version: d.version,
              }),
                (this.queryParams = btoa(JSON.stringify(this.options))),
                this.constructPostMessage(),
                (this.overlay = this.createOverlay()),
                this.listenMessage();
            }
            t.default = u;
          },
          function (e, t, r) {
            e.exports = r(7);
          },
          function (e, t, r) {
            var n =
                (function () {
                  return this || ("object" == typeof self && self);
                })() || Function("return this")(),
              o =
                n.regeneratorRuntime &&
                0 <=
                  Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime"),
              a = o && n.regeneratorRuntime;
            if (((n.regeneratorRuntime = void 0), (e.exports = r(8)), o))
              n.regeneratorRuntime = a;
            else
              try {
                delete n.regeneratorRuntime;
              } catch (e) {
                n.regeneratorRuntime = void 0;
              }
          },
          function (e, t) {
            !(function (t) {
              "use strict";
              var r,
                n,
                o,
                a,
                i,
                s,
                c,
                u = Object.prototype,
                l = u.hasOwnProperty,
                f =
                  (p = "function" == typeof Symbol ? Symbol : {}).iterator ||
                  "@@iterator",
                d = p.asyncIterator || "@@asyncIterator",
                h = p.toStringTag || "@@toStringTag",
                p = "object" == typeof e,
                m = t.regeneratorRuntime;
              function y(e, t, c, u) {
                var l, f, d, h;
                (t = t && t.prototype instanceof g ? t : g),
                  (t = Object.create(t.prototype)),
                  (u = new O(u || []));
                return (
                  (t._invoke =
                    ((l = e),
                    (f = c),
                    (d = u),
                    (h = n),
                    function (e, t) {
                      if (h === a)
                        throw new Error("Generator is already running");
                      if (h === i) {
                        if ("throw" === e) throw t;
                        return x();
                      }
                      for (d.method = e, d.arg = t; ; ) {
                        var c = d.delegate;
                        if (c) {
                          var u = (function e(t, n) {
                            var o;
                            if ((o = t.iterator[n.method]) === r) {
                              if (((n.delegate = null), "throw" === n.method)) {
                                if (
                                  t.iterator.return &&
                                  ((n.method = "return"),
                                  (n.arg = r),
                                  e(t, n),
                                  "throw" === n.method)
                                )
                                  return s;
                                (n.method = "throw"),
                                  (n.arg = new TypeError(
                                    "The iterator does not provide a 'throw' method"
                                  ));
                              }
                              return s;
                            }
                            return "throw" ===
                              (o = v(o, t.iterator, n.arg)).type
                              ? ((n.method = "throw"),
                                (n.arg = o.arg),
                                (n.delegate = null),
                                s)
                              : (o = o.arg)
                              ? o.done
                                ? ((n[t.resultName] = o.value),
                                  (n.next = t.nextLoc),
                                  "return" !== n.method &&
                                    ((n.method = "next"), (n.arg = r)),
                                  (n.delegate = null),
                                  s)
                                : o
                              : ((n.method = "throw"),
                                (n.arg = new TypeError(
                                  "iterator result is not an object"
                                )),
                                (n.delegate = null),
                                s);
                          })(c, d);
                          if (u) {
                            if (u === s) continue;
                            return u;
                          }
                        }
                        if ("next" === d.method) d.sent = d._sent = d.arg;
                        else if ("throw" === d.method) {
                          if (h === n) throw ((h = i), d.arg);
                          d.dispatchException(d.arg);
                        } else
                          "return" === d.method && d.abrupt("return", d.arg);
                        if (((h = a), "normal" === (u = v(l, f, d)).type)) {
                          if (((h = d.done ? i : o), u.arg === s)) continue;
                          return { value: u.arg, done: d.done };
                        }
                        "throw" === u.type &&
                          ((h = i), (d.method = "throw"), (d.arg = u.arg));
                      }
                    })),
                  t
                );
              }
              function v(e, t, r) {
                try {
                  return { type: "normal", arg: e.call(t, r) };
                } catch (e) {
                  return { type: "throw", arg: e };
                }
              }
              function g() {}
              function b() {}
              function _() {}
              function E(e) {
                ["next", "throw", "return"].forEach(function (t) {
                  e[t] = function (e) {
                    return this._invoke(t, e);
                  };
                });
              }
              function w(e) {
                var t;
                this._invoke = function (r, n) {
                  function o() {
                    return new Promise(function (t, o) {
                      !(function t(r, n, o, a) {
                        if ("throw" !== (r = v(e[r], e, n)).type) {
                          var i = r.arg;
                          return (n = i.value) &&
                            "object" == typeof n &&
                            l.call(n, "__await")
                            ? Promise.resolve(n.__await).then(
                                function (e) {
                                  t("next", e, o, a);
                                },
                                function (e) {
                                  t("throw", e, o, a);
                                }
                              )
                            : Promise.resolve(n).then(
                                function (e) {
                                  (i.value = e), o(i);
                                },
                                function (e) {
                                  return t("throw", e, o, a);
                                }
                              );
                        }
                        a(r.arg);
                      })(r, n, t, o);
                    });
                  }
                  return (t = t ? t.then(o, o) : o());
                };
              }
              function T(e) {
                var t = { tryLoc: e[0] };
                1 in e && (t.catchLoc = e[1]),
                  2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                  this.tryEntries.push(t);
              }
              function A(e) {
                var t = e.completion || {};
                (t.type = "normal"), delete t.arg, (e.completion = t);
              }
              function O(e) {
                (this.tryEntries = [{ tryLoc: "root" }]),
                  e.forEach(T, this),
                  this.reset(!0);
              }
              function R(e) {
                if (e) {
                  if ((t = e[f])) return t.call(e);
                  if ("function" == typeof e.next) return e;
                  if (!isNaN(e.length)) {
                    var t,
                      n = -1;
                    return ((t = function t() {
                      for (; ++n < e.length; )
                        if (l.call(e, n))
                          return (t.value = e[n]), (t.done = !1), t;
                      return (t.value = r), (t.done = !0), t;
                    }).next = t);
                  }
                }
                return { next: x };
              }
              function x() {
                return { value: r, done: !0 };
              }
              m
                ? p && (e.exports = m)
                : (((m = t.regeneratorRuntime = p ? e.exports : {}).wrap = y),
                  (n = "suspendedStart"),
                  (o = "suspendedYield"),
                  (a = "executing"),
                  (i = "completed"),
                  (s = {}),
                  ((t = {})[f] = function () {
                    return this;
                  }),
                  (p = (p = Object.getPrototypeOf) && p(p(R([])))) &&
                    p !== u &&
                    l.call(p, f) &&
                    (t = p),
                  (c = _.prototype = g.prototype = Object.create(t)),
                  ((b.prototype = c.constructor = _).constructor = b),
                  (_[h] = b.displayName = "GeneratorFunction"),
                  (m.isGeneratorFunction = function (e) {
                    return (
                      !!(e = "function" == typeof e && e.constructor) &&
                      (e === b ||
                        "GeneratorFunction" === (e.displayName || e.name))
                    );
                  }),
                  (m.mark = function (e) {
                    return (
                      Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, _)
                        : ((e.__proto__ = _),
                          h in e || (e[h] = "GeneratorFunction")),
                      (e.prototype = Object.create(c)),
                      e
                    );
                  }),
                  (m.awrap = function (e) {
                    return { __await: e };
                  }),
                  E(w.prototype),
                  (w.prototype[d] = function () {
                    return this;
                  }),
                  (m.AsyncIterator = w),
                  (m.async = function (e, t, r, n) {
                    var o = new w(y(e, t, r, n));
                    return m.isGeneratorFunction(t)
                      ? o
                      : o.next().then(function (e) {
                          return e.done ? e.value : o.next();
                        });
                  }),
                  E(c),
                  (c[h] = "Generator"),
                  (c[f] = function () {
                    return this;
                  }),
                  (c.toString = function () {
                    return "[object Generator]";
                  }),
                  (m.keys = function (e) {
                    var t,
                      r = [];
                    for (t in e) r.push(t);
                    return (
                      r.reverse(),
                      function t() {
                        for (; r.length; ) {
                          var n = r.pop();
                          if (n in e) return (t.value = n), (t.done = !1), t;
                        }
                        return (t.done = !0), t;
                      }
                    );
                  }),
                  (m.values = R),
                  (O.prototype = {
                    constructor: O,
                    reset: function (e) {
                      if (
                        ((this.prev = 0),
                        (this.next = 0),
                        (this.sent = this._sent = r),
                        (this.done = !1),
                        (this.delegate = null),
                        (this.method = "next"),
                        (this.arg = r),
                        this.tryEntries.forEach(A),
                        !e)
                      )
                        for (var t in this)
                          "t" === t.charAt(0) &&
                            l.call(this, t) &&
                            !isNaN(+t.slice(1)) &&
                            (this[t] = r);
                    },
                    stop: function () {
                      this.done = !0;
                      var e = this.tryEntries[0].completion;
                      if ("throw" === e.type) throw e.arg;
                      return this.rval;
                    },
                    dispatchException: function (e) {
                      if (this.done) throw e;
                      var t = this;
                      function n(n, o) {
                        return (
                          (i.type = "throw"),
                          (i.arg = e),
                          (t.next = n),
                          o && ((t.method = "next"), (t.arg = r)),
                          !!o
                        );
                      }
                      for (var o = this.tryEntries.length - 1; 0 <= o; --o) {
                        var a = this.tryEntries[o],
                          i = a.completion;
                        if ("root" === a.tryLoc) return n("end");
                        if (a.tryLoc <= this.prev) {
                          var s = l.call(a, "catchLoc"),
                            c = l.call(a, "finallyLoc");
                          if (s && c) {
                            if (this.prev < a.catchLoc)
                              return n(a.catchLoc, !0);
                            if (this.prev < a.finallyLoc)
                              return n(a.finallyLoc);
                          } else if (s) {
                            if (this.prev < a.catchLoc)
                              return n(a.catchLoc, !0);
                          } else {
                            if (!c)
                              throw new Error(
                                "try statement without catch or finally"
                              );
                            if (this.prev < a.finallyLoc)
                              return n(a.finallyLoc);
                          }
                        }
                      }
                    },
                    abrupt: function (e, t) {
                      for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                        var n = this.tryEntries[r];
                        if (
                          n.tryLoc <= this.prev &&
                          l.call(n, "finallyLoc") &&
                          this.prev < n.finallyLoc
                        ) {
                          var o = n;
                          break;
                        }
                      }
                      var a = (o =
                        o &&
                        ("break" === e || "continue" === e) &&
                        o.tryLoc <= t &&
                        t <= o.finallyLoc
                          ? null
                          : o)
                        ? o.completion
                        : {};
                      return (
                        (a.type = e),
                        (a.arg = t),
                        o
                          ? ((this.method = "next"),
                            (this.next = o.finallyLoc),
                            s)
                          : this.complete(a)
                      );
                    },
                    complete: function (e, t) {
                      if ("throw" === e.type) throw e.arg;
                      return (
                        "break" === e.type || "continue" === e.type
                          ? (this.next = e.arg)
                          : "return" === e.type
                          ? ((this.rval = this.arg = e.arg),
                            (this.method = "return"),
                            (this.next = "end"))
                          : "normal" === e.type && t && (this.next = t),
                        s
                      );
                    },
                    finish: function (e) {
                      for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var r = this.tryEntries[t];
                        if (r.finallyLoc === e)
                          return (
                            this.complete(r.completion, r.afterLoc), A(r), s
                          );
                      }
                    },
                    catch: function (e) {
                      for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var r = this.tryEntries[t];
                        if (r.tryLoc === e) {
                          var n,
                            o = r.completion;
                          return "throw" === o.type && ((n = o.arg), A(r)), n;
                        }
                      }
                      throw new Error("illegal catch attempt");
                    },
                    delegateYield: function (e, t, n) {
                      return (
                        (this.delegate = {
                          iterator: R(e),
                          resultName: t,
                          nextLoc: n,
                        }),
                        "next" === this.method && (this.arg = r),
                        s
                      );
                    },
                  }));
            })(
              (function () {
                return this || ("object" == typeof self && self);
              })() || Function("return this")()
            );
          },
          function (e, t) {
            function r(e, t, r, n, o, a, i) {
              try {
                var s = e[a](i),
                  c = s.value;
              } catch (e) {
                return r(e), 0;
              }
              s.done ? t(c) : Promise.resolve(c).then(n, o);
            }
            e.exports = function (e) {
              return function () {
                var t = this,
                  n = arguments;
                return new Promise(function (o, a) {
                  var i = e.apply(t, n);
                  function s(e) {
                    r(i, o, a, s, c, "next", e);
                  }
                  function c(e) {
                    r(i, o, a, s, c, "throw", e);
                  }
                  s(void 0);
                });
              };
            };
          },
          function (e, t) {
            function r(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n);
              }
            }
            e.exports = function (e, t, n) {
              return t && r(e.prototype, t), n && r(e, n), e;
            };
          },
          function (e) {
            e.exports = {
              name: "fortmatic",
              version: "1.1.3",
              description: "Fortmatic Javascript SDK",
              main: "lib/fortmatic.js",
              scripts: {
                build: "WEBPACK_ENV=production webpack",
                "build:dev":
                  "WEBPACK_ENV=development BABEL_ENV=development webpack --progress --colors --watch",
                test: "nyc --reporter=lcov --reporter=text-summary ava",
              },
              author: "Fortmatic <team@fortmatic.com> (https://fortmatic.com/)",
              license: "MIT",
              repository: {
                type: "git",
                url: "https://github.com/fortmatic/fortmatic-js",
              },
              keywords: [
                "Auth",
                "Login",
                "Web3",
                "Crypto",
                "Ethereum",
                "MetaMask",
                "Wallet",
                "Blockchain",
                "Dapp",
              ],
              homepage: "https://www.fortmatic.com",
              ava: {
                require: ["@babel/register"],
                files: ["test/**/*.spec.js"],
                babel: {
                  testOptions: {
                    presets: ["@babel/env"],
                    plugins: [
                      "@babel/plugin-proposal-function-bind",
                      "@babel/plugin-transform-runtime",
                    ],
                  },
                },
                verbose: !0,
              },
              nyc: {
                all: !1,
                "check-coverage": !0,
                "per-file": !0,
                lines: 80,
                statements: 80,
                functions: 80,
                branches: 80,
                include: ["src/**/*.js"],
                exclude: ["*/style.js"],
                require: [],
                reporter: ["html", "lcov"],
              },
              dependencies: { "@babel/runtime": "7.3.4" },
              devDependencies: {
                "@babel/core": "7.3.4",
                "@babel/plugin-proposal-function-bind": "7.2.0",
                "@babel/plugin-transform-modules-commonjs": "7.2.0",
                "@babel/plugin-transform-runtime": "7.3.4",
                "@babel/preset-env": "7.3.4",
                "@babel/register": "7.0.0",
                ava: "2.2.0",
                "babel-eslint": "10.0.1",
                "babel-loader": "8.0.5",
                eslint: "5.9.0",
                lodash: "4.17.11",
                nyc: "13.1.0",
                sinon: "7.1.1",
                webpack: "4.26.1",
                "webpack-cli": "3.1.2",
              },
            };
          },
          function (e, t, r) {
            "use strict";
            t.css =
              "\n  .fortmatic-iframe {\n    display: none;\n    position: fixed;\n    top: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    border: none;\n    border-radius: 0;\n    z-index: 2147483647;\n  }\n";
          },
        ]),
        (o = {}),
        (r.m = n),
        (r.c = o),
        (r.d = function (e, t, n) {
          r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (r.r = function (e) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (r.t = function (e, t) {
          if ((1 & t && (e = r(e)), 8 & t)) return e;
          if (4 & t && "object" == typeof e && e && e.__esModule) return e;
          var n = Object.create(null);
          if (
            (r.r(n),
            Object.defineProperty(n, "default", { enumerable: !0, value: e }),
            2 & t && "string" != typeof e)
          )
            for (var o in e)
              r.d(
                n,
                o,
                function (t) {
                  return e[t];
                }.bind(null, o)
              );
          return n;
        }),
        (r.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return r.d(t, "a", t), t;
        }),
        (r.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = ""),
        r((r.s = 3)));
    },
  },
]);
