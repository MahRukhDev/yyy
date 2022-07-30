/*! For license information please see 5.a4f8c648.chunk.js.LICENSE.txt */
(this["webpackJsonp@sheepdex/interface"] =
  this["webpackJsonp@sheepdex/interface"] || []).push([
  [5],
  {
    1003: function (e, t, r) {
      "use strict";
      var n = r(7),
        i = r(366),
        o = r(367),
        a = r(1126),
        s = r(1107),
        u = r(1108);
      Object.defineProperty(t, "__esModule", { value: !0 });
      var c = r(113),
        f = c.__importDefault(r(1377)),
        l = c.__importDefault(r(1519)),
        h = c.__importDefault(r(1541)),
        d = r(1127),
        p = r(1554),
        v = r(1591),
        g = r(1595),
        _ = r(1596),
        m = r(1611),
        y = r(1627),
        w = r(1630);
      r = (function () {
        s(t, p);
        var e = u(t);
        function t(r) {
          var o;
          if (
            (i(this, t),
            ((o = e.call(this, {
              pollingInterval: r.pollingInterval || 8e3,
            })).bridge = "https://bridge.walletconnect.org"),
            (o.qrcode = !0),
            (o.qrcodeModal = l.default),
            (o.qrcodeModalOptions = void 0),
            (o.rpc = null),
            (o.infuraId = ""),
            (o.http = null),
            (o.isConnecting = !1),
            (o.connected = !1),
            (o.connectCallbacks = []),
            (o.accounts = []),
            (o.chainId = 1),
            (o.networkId = 1),
            (o.rpcUrl = ""),
            (o.enable = function () {
              return c.__awaiter(
                a(o),
                void 0,
                void 0,
                n.mark(function e() {
                  var t;
                  return n.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), this.getWalletConnector();
                          case 2:
                            if ((t = e.sent))
                              return (
                                this.start(),
                                this.subscribeWalletConnector(),
                                e.abrupt("return", t.accounts)
                              );
                            e.next = 9;
                            break;
                          case 9:
                            throw new Error(
                              "Failed to connect to WalleConnect"
                            );
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              );
            }),
            (o.request = function (e) {
              return c.__awaiter(
                a(o),
                void 0,
                void 0,
                n.mark(function t() {
                  return n.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return t.abrupt("return", this.send(e));
                          case 1:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              );
            }),
            (o.send = function (e, t) {
              return c.__awaiter(
                a(o),
                void 0,
                void 0,
                n.mark(function r() {
                  var i, o;
                  return n.wrap(
                    function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if ("string" == typeof e)
                              return (
                                (o = t),
                                "personal_sign" === (i = e) &&
                                  (o = d.parsePersonalSign(o)),
                                r.abrupt("return", this.sendAsyncPromise(i, o))
                              );
                            r.next = 5;
                            break;
                          case 5:
                            if (
                              ("personal_sign" ===
                                (e = Object.assign(
                                  { id: d.payloadId(), jsonrpc: "2.0" },
                                  e
                                )).method &&
                                (e.params = d.parsePersonalSign(e.params)),
                              t)
                            )
                              return this.sendAsync(e, t), r.abrupt("return");
                            r.next = 10;
                            break;
                          case 10:
                            return r.abrupt(
                              "return",
                              this.sendAsyncPromise(e.method, e.params)
                            );
                          case 11:
                          case "end":
                            return r.stop();
                        }
                    },
                    r,
                    this
                  );
                })
              );
            }),
            (o.onConnect = function (e) {
              o.connectCallbacks.push(e);
            }),
            (o.triggerConnect = function (e) {
              o.connectCallbacks &&
                o.connectCallbacks.length &&
                o.connectCallbacks.forEach(function (t) {
                  return t(e);
                });
            }),
            (o.bridge = r.connector
              ? r.connector.bridge
              : r.bridge || "https://bridge.walletconnect.org"),
            (o.qrcode = void 0 === r.qrcode || !1 !== r.qrcode),
            (o.qrcodeModal = r.qrcodeModal || o.qrcodeModal),
            (o.qrcodeModalOptions = r.qrcodeModalOptions),
            (o.wc =
              r.connector ||
              new f.default({
                bridge: o.bridge,
                qrcodeModal: o.qrcode ? o.qrcodeModal : void 0,
                qrcodeModalOptions: o.qrcodeModalOptions,
                clientMeta: null == r ? void 0 : r.clientMeta,
              })),
            (o.rpc = r.rpc || null),
            !(
              o.rpc ||
              (r.infuraId && "string" == typeof r.infuraId && r.infuraId.trim())
            ))
          )
            throw new Error(
              "Missing one of the required parameters: rpc or infuraId"
            );
          return (
            (o.infuraId = r.infuraId || ""),
            (o.chainId = void 0 !== r.chainId ? r.chainId : 1),
            (o.networkId = o.chainId),
            o.initialize(),
            o
          );
        }
        return (
          o(t, [
            {
              key: "isWalletConnect",
              get: function () {
                return !0;
              },
            },
            {
              key: "connector",
              get: function () {
                return this.wc;
              },
            },
            {
              key: "walletMeta",
              get: function () {
                return this.wc.peerMeta;
              },
            },
            {
              key: "disconnect",
              value: function () {
                return c.__awaiter(
                  this,
                  void 0,
                  void 0,
                  n.mark(function e() {
                    return n.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              this.close();
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "close",
              value: function () {
                return c.__awaiter(
                  this,
                  void 0,
                  void 0,
                  n.mark(function e() {
                    var t;
                    return n.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.getWalletConnector({
                                  disableSessionCreation: !0,
                                })
                              );
                            case 2:
                              return (
                                (t = e.sent), (e.next = 5), t.killSession()
                              );
                            case 5:
                              return (e.next = 7), this.onDisconnect();
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "handleRequest",
              value: function (e) {
                return c.__awaiter(
                  this,
                  void 0,
                  void 0,
                  n.mark(function t() {
                    var r, i, o;
                    return n.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (i = null),
                                (t.next = 4),
                                this.getWalletConnector()
                              );
                            case 4:
                              (o = t.sent),
                                (t.t0 = e.method),
                                (t.next =
                                  "wc_killSession" === t.t0
                                    ? 8
                                    : "eth_accounts" === t.t0
                                    ? 12
                                    : "eth_coinbase" === t.t0
                                    ? 14
                                    : "eth_chainId" === t.t0
                                    ? 16
                                    : "net_version" === t.t0
                                    ? 18
                                    : "eth_uninstallFilter" === t.t0
                                    ? 20
                                    : 23);
                              break;
                            case 8:
                              return (t.next = 10), this.close();
                            case 10:
                              return (i = null), t.abrupt("break", 26);
                            case 12:
                              return (i = o.accounts), t.abrupt("break", 26);
                            case 14:
                              return (i = o.accounts[0]), t.abrupt("break", 26);
                            case 16:
                              return (i = o.chainId), t.abrupt("break", 26);
                            case 18:
                              return (
                                (i = o.networkId || o.chainId),
                                t.abrupt("break", 26)
                              );
                            case 20:
                              return (
                                this.sendAsync(e, function (e) {
                                  return e;
                                }),
                                (i = !0),
                                t.abrupt("break", 26)
                              );
                            case 23:
                              return (t.next = 25), this.handleOtherRequests(e);
                            case 25:
                              r = t.sent;
                            case 26:
                              if (r) return t.abrupt("return", r);
                              t.next = 28;
                              break;
                            case 28:
                              return t.abrupt(
                                "return",
                                this.formatResponse(e, i)
                              );
                            case 31:
                              throw (
                                ((t.prev = 31),
                                (t.t1 = t.catch(0)),
                                this.emit("error", t.t1),
                                t.t1)
                              );
                            case 35:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this,
                      [[0, 31]]
                    );
                  })
                );
              },
            },
            {
              key: "handleOtherRequests",
              value: function (e) {
                return c.__awaiter(
                  this,
                  void 0,
                  void 0,
                  n.mark(function t() {
                    var r;
                    return n.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                !d.signingMethods.includes(e.method) &&
                                e.method.startsWith("eth_")
                              )
                                return t.abrupt(
                                  "return",
                                  this.handleReadRequests(e)
                                );
                              t.next = 2;
                              break;
                            case 2:
                              return (t.next = 4), this.getWalletConnector();
                            case 4:
                              return (
                                (r = t.sent),
                                (t.next = 7),
                                r.sendCustomRequest(e)
                              );
                            case 7:
                              return (
                                (r = t.sent),
                                t.abrupt("return", this.formatResponse(e, r))
                              );
                            case 9:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "handleReadRequests",
              value: function (e) {
                return c.__awaiter(
                  this,
                  void 0,
                  void 0,
                  n.mark(function t() {
                    var r;
                    return n.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (this.http) {
                                t.next = 4;
                                break;
                              }
                              throw (
                                ((r = new Error(
                                  "HTTP Connection not available"
                                )),
                                this.emit("error", r),
                                r)
                              );
                            case 4:
                              return t.abrupt("return", this.http.send(e));
                            case 5:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "formatResponse",
              value: function (e, t) {
                return { id: e.id, jsonrpc: e.jsonrpc, result: t };
              },
            },
            {
              key: "getWalletConnector",
              value: function () {
                var e = this,
                  t = (
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : {}
                  ).disableSessionCreation,
                  r = void 0 !== t && t;
                return new Promise(function (t, n) {
                  var i,
                    o = e.wc;
                  e.isConnecting
                    ? e.onConnect(function (e) {
                        return t(e);
                      })
                    : o.connected || r
                    ? (e.connected ||
                        ((e.connected = !0), e.updateState(o.session)),
                      t(o))
                    : ((e.isConnecting = !0),
                      (i = e.chainId ? { chainId: e.chainId } : void 0),
                      o.on("modal_closed", function () {
                        n(new Error("User closed modal"));
                      }),
                      o
                        .createSession(i)
                        .then(function () {
                          o.on("connect", function (r, i) {
                            return r
                              ? ((e.isConnecting = !1), n(r))
                              : ((e.isConnecting = !1),
                                (e.connected = !0),
                                i && e.updateState(i.params[0]),
                                e.emit("connect"),
                                e.triggerConnect(o),
                                void t(o));
                          });
                        })
                        .catch(function (t) {
                          (e.isConnecting = !1), n(t);
                        }));
                });
              },
            },
            {
              key: "subscribeWalletConnector",
              value: function () {
                return c.__awaiter(
                  this,
                  void 0,
                  void 0,
                  n.mark(function e() {
                    var t,
                      r = this;
                    return n.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.getWalletConnector();
                            case 2:
                              (t = e.sent).on("disconnect", function (e) {
                                e ? r.emit("error", e) : r.onDisconnect();
                              }),
                                t.on("session_update", function (e, t) {
                                  e
                                    ? r.emit("error", e)
                                    : r.updateState(t.params[0]);
                                });
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "onDisconnect",
              value: function () {
                return c.__awaiter(
                  this,
                  void 0,
                  void 0,
                  n.mark(function e() {
                    return n.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.stop();
                            case 2:
                              this.emit("close", 1e3, "Connection closed"),
                                this.emit(
                                  "disconnect",
                                  1e3,
                                  "Connection disconnected"
                                );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "updateState",
              value: function (e) {
                return c.__awaiter(
                  this,
                  void 0,
                  void 0,
                  n.mark(function t() {
                    var r, i, o, a;
                    return n.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              (r = e.accounts),
                                (i = e.chainId),
                                (o = e.networkId),
                                (a = e.rpcUrl),
                                (!this.accounts ||
                                  (r && this.accounts !== r)) &&
                                  ((this.accounts = r),
                                  this.emit("accountsChanged", r)),
                                (!this.chainId || (i && this.chainId !== i)) &&
                                  ((this.chainId = i),
                                  this.emit("chainChanged", i)),
                                (!this.networkId ||
                                  (o && this.networkId !== o)) &&
                                  ((this.networkId = o),
                                  this.emit("networkChanged", o)),
                                this.updateRpcUrl(this.chainId, a || "");
                            case 5:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "updateRpcUrl",
              value: function (e) {
                var t,
                  r = { infuraId: this.infuraId, custom: this.rpc || void 0 };
                (t =
                  (t =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : "") || d.getRpcUrl(e, r))
                  ? ((this.rpcUrl = t), this.updateHttpConnection())
                  : this.emit(
                      "error",
                      new Error("No RPC Url available for chainId: ".concat(e))
                    );
              },
            },
            {
              key: "updateHttpConnection",
              value: function () {
                var e = this;
                this.rpcUrl &&
                  ((this.http = new h.default(this.rpcUrl)),
                  this.http.on("payload", function (t) {
                    return e.emit("payload", t);
                  }),
                  this.http.on("error", function (t) {
                    return e.emit("error", t);
                  }));
              },
            },
            {
              key: "sendAsyncPromise",
              value: function (e, t) {
                var r = this;
                return new Promise(function (n, i) {
                  r.sendAsync(
                    {
                      id: d.payloadId(),
                      jsonrpc: "2.0",
                      method: e,
                      params: t || [],
                    },
                    function (e, t) {
                      e ? i(e) : n(t.result);
                    }
                  );
                });
              },
            },
            {
              key: "initialize",
              value: function () {
                var e = this;
                this.updateRpcUrl(this.chainId),
                  this.addProvider(
                    new g({
                      eth_hashrate: "0x00",
                      eth_mining: !1,
                      eth_syncing: !0,
                      net_listening: !0,
                      web3_clientVersion: "WalletConnect/v1.x.x/javascript",
                    })
                  ),
                  this.addProvider(new v()),
                  this.addProvider(new w()),
                  this.addProvider(new _()),
                  this.addProvider(new y()),
                  this.addProvider(new m(this.configWallet())),
                  this.addProvider({
                    handleRequest: function (t, r, i) {
                      return c.__awaiter(
                        e,
                        void 0,
                        void 0,
                        n.mark(function e() {
                          var r;
                          return n.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      (e.next = 3),
                                      this.handleRequest(t)
                                    );
                                  case 3:
                                    (r = (r = e.sent).result),
                                      i(null, r),
                                      (e.next = 11);
                                    break;
                                  case 8:
                                    (e.prev = 8), (e.t0 = e.catch(0)), i(e.t0);
                                  case 11:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this,
                            [[0, 8]]
                          );
                        })
                      );
                    },
                    setEngine: function (e) {
                      return e;
                    },
                  });
              },
            },
            {
              key: "configWallet",
              value: function () {
                var e = this;
                return {
                  getAccounts: function (t) {
                    return c.__awaiter(
                      e,
                      void 0,
                      void 0,
                      n.mark(function e() {
                        var r;
                        return n.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    this.getWalletConnector()
                                  );
                                case 3:
                                  (r = (r = e.sent).accounts) && r.length
                                    ? t(null, r)
                                    : t(new Error("Failed to get accounts")),
                                    (e.next = 11);
                                  break;
                                case 8:
                                  (e.prev = 8), (e.t0 = e.catch(0)), t(e.t0);
                                case 11:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[0, 8]]
                        );
                      })
                    );
                  },
                  processMessage: function (t, r) {
                    return c.__awaiter(
                      e,
                      void 0,
                      void 0,
                      n.mark(function e() {
                        var i;
                        return n.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    this.getWalletConnector()
                                  );
                                case 3:
                                  return (
                                    (i = e.sent),
                                    (e.next = 6),
                                    i.signMessage([t.from, t.data])
                                  );
                                case 6:
                                  (i = e.sent), r(null, i), (e.next = 13);
                                  break;
                                case 10:
                                  (e.prev = 10), (e.t0 = e.catch(0)), r(e.t0);
                                case 13:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[0, 10]]
                        );
                      })
                    );
                  },
                  processPersonalMessage: function (t, r) {
                    return c.__awaiter(
                      e,
                      void 0,
                      void 0,
                      n.mark(function e() {
                        var i;
                        return n.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    this.getWalletConnector()
                                  );
                                case 3:
                                  return (
                                    (i = e.sent),
                                    (e.next = 6),
                                    i.signPersonalMessage([t.data, t.from])
                                  );
                                case 6:
                                  (i = e.sent), r(null, i), (e.next = 13);
                                  break;
                                case 10:
                                  (e.prev = 10), (e.t0 = e.catch(0)), r(e.t0);
                                case 13:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[0, 10]]
                        );
                      })
                    );
                  },
                  processSignTransaction: function (t, r) {
                    return c.__awaiter(
                      e,
                      void 0,
                      void 0,
                      n.mark(function e() {
                        var i;
                        return n.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    this.getWalletConnector()
                                  );
                                case 3:
                                  return (
                                    (i = e.sent),
                                    (e.next = 6),
                                    i.signTransaction(t)
                                  );
                                case 6:
                                  (i = e.sent), r(null, i), (e.next = 13);
                                  break;
                                case 10:
                                  (e.prev = 10), (e.t0 = e.catch(0)), r(e.t0);
                                case 13:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[0, 10]]
                        );
                      })
                    );
                  },
                  processTransaction: function (t, r) {
                    return c.__awaiter(
                      e,
                      void 0,
                      void 0,
                      n.mark(function e() {
                        var i;
                        return n.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    this.getWalletConnector()
                                  );
                                case 3:
                                  return (
                                    (i = e.sent),
                                    (e.next = 6),
                                    i.sendTransaction(t)
                                  );
                                case 6:
                                  (i = e.sent), r(null, i), (e.next = 13);
                                  break;
                                case 10:
                                  (e.prev = 10), (e.t0 = e.catch(0)), r(e.t0);
                                case 13:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[0, 10]]
                        );
                      })
                    );
                  },
                  processTypedMessage: function (t, r) {
                    return c.__awaiter(
                      e,
                      void 0,
                      void 0,
                      n.mark(function e() {
                        var i;
                        return n.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    (e.next = 3),
                                    this.getWalletConnector()
                                  );
                                case 3:
                                  return (
                                    (i = e.sent),
                                    (e.next = 6),
                                    i.signTypedData([t.from, t.data])
                                  );
                                case 6:
                                  (i = e.sent), r(null, i), (e.next = 13);
                                  break;
                                case 10:
                                  (e.prev = 10), (e.t0 = e.catch(0)), r(e.t0);
                                case 13:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                          [[0, 10]]
                        );
                      })
                    );
                  },
                };
              },
            },
          ]),
          t
        );
      })();
      t.default = r;
    },
    1122: function (e, t, r) {
      "use strict";
      (function (e) {
        var n = r(1178),
          i =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = i(r(1272)),
          a = i(r(1391)),
          s = "hex",
          u = "utf8",
          c = "0";
        function f(e) {
          return new Uint8Array(e);
        }
        function l(e) {
          var t =
            1 < arguments.length && void 0 !== arguments[1] && arguments[1];
          e = e.toString(s);
          return t ? D(e) : e;
        }
        function h(e) {
          return e.toString(u);
        }
        function d(e) {
          return e.readUIntBE(0, e.length);
        }
        function p(e) {
          return a.default(e);
        }
        function v(e) {
          var t =
            1 < arguments.length && void 0 !== arguments[1] && arguments[1];
          return l(p(e), t);
        }
        function g(e) {
          return h(p(e));
        }
        function _(e) {
          return d(p(e));
        }
        function m(e) {
          return Array.from(e).map(S).join("");
        }
        function y(t) {
          return e.from(U(t), s);
        }
        function w(e) {
          return f(y(e));
        }
        function b(e) {
          return m(w(e));
        }
        function E(t) {
          return e.from(t, u);
        }
        function x(e) {
          return f(E(e));
        }
        function S(e) {
          return B((e >>> 0).toString(2));
        }
        function k(e) {
          return p(R(e));
        }
        function R(e) {
          return new Uint8Array(
            I(e).map(function (e) {
              return parseInt(e, 2);
            })
          );
        }
        function A(e, t) {
          return v(R(e), t);
        }
        function M(e) {
          return (
            !("string" != typeof e || !new RegExp(/^[01]+$/).test(e)) &&
            e.length % 8 == 0
          );
        }
        function T(e, t) {
          return (
            !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) &&
            (!t || e.length === 2 + 2 * t)
          );
        }
        function C(t) {
          return e.isBuffer(t);
        }
        function O(e) {
          return o.default.strict(e) && !C(e);
        }
        function P(e) {
          return !O(e) && !C(e) && void 0 !== e.byteLength;
        }
        function N(e) {
          var t =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : 8,
            r = e % t;
          return r ? ((e - r) / t) * t + t : e;
        }
        function I(e) {
          var t =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 8;
          t = B(e).match(new RegExp(".{".concat(t, "}"), "gi"));
          return Array.from(t || []);
        }
        function L(e) {
          return I(e).map(j).join("");
        }
        function B(e) {
          var t =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : 8,
            r =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : c;
          return H(e, N(e.length, t), r);
        }
        function H(e, t) {
          return q(
            e,
            t,
            !0,
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : c
          );
        }
        function U(e) {
          return e.replace(/^0x/, "");
        }
        function D(e) {
          return e.startsWith("0x") ? e : "0x".concat(e);
        }
        function j(e) {
          return e.split("").reverse().join("");
        }
        function q(e, t, r, n) {
          var i = 3 < arguments.length && void 0 !== n ? n : c;
          (n = t - e.length), (t = e);
          return 0 < n && ((n = i.repeat(n)), (t = r ? n + e : e + n)), t;
        }
        (t.bufferToArray = f),
          (t.bufferToHex = l),
          (t.bufferToUtf8 = h),
          (t.bufferToNumber = d),
          (t.bufferToBinary = function (e) {
            return m(f(e));
          }),
          (t.arrayToBuffer = p),
          (t.arrayToHex = v),
          (t.arrayToUtf8 = g),
          (t.arrayToNumber = _),
          (t.arrayToBinary = m),
          (t.hexToBuffer = y),
          (t.hexToArray = w),
          (t.hexToUtf8 = function (e) {
            return h(y(e));
          }),
          (t.hexToNumber = function (e) {
            return _(w(e));
          }),
          (t.hexToBinary = b),
          (t.utf8ToBuffer = E),
          (t.utf8ToArray = x),
          (t.utf8ToHex = function (e) {
            var t =
              1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            return l(E(e), t);
          }),
          (t.utf8ToNumber = function (e) {
            return (
              (function (e, t) {
                if (!e)
                  throw new Error("Number can only safely store up to 53 bits");
              })(!(void 0 === (e = parseInt(e, 10)))),
              e
            );
          }),
          (t.utf8ToBinary = function (e) {
            return m(x(e));
          }),
          (t.numberToBuffer = function (e) {
            return k(S(e));
          }),
          (t.numberToArray = function (e) {
            return R(S(e));
          }),
          (t.numberToHex = function (e, t) {
            return A(S(e), t);
          }),
          (t.numberToUtf8 = function (e) {
            return "".concat(e);
          }),
          (t.numberToBinary = S),
          (t.binaryToBuffer = k),
          (t.binaryToArray = R),
          (t.binaryToHex = A),
          (t.binaryToUtf8 = function (e) {
            return g(R(e));
          }),
          (t.binaryToNumber = function (e) {
            return _(R(e));
          }),
          (t.isBinaryString = M),
          (t.isHexString = T),
          (t.isBuffer = C),
          (t.isTypedArray = O),
          (t.isArrayBuffer = P),
          (t.getType = function (e) {
            return C(e)
              ? "buffer"
              : O(e)
              ? "typed-array"
              : P(e)
              ? "array-buffer"
              : Array.isArray(e)
              ? "array"
              : typeof e;
          }),
          (t.getEncoding = function (e) {
            return M(e) ? "binary" : T(e) ? s : u;
          }),
          (t.concatBuffers = function () {
            for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
              r[n] = arguments[n];
            return e.concat(r);
          }),
          (t.concatArrays = function () {
            for (
              var e = [], t = arguments.length, r = new Array(t), i = 0;
              i < t;
              i++
            )
              r[i] = arguments[i];
            return (
              r.forEach(function (t) {
                return (e = e.concat(Array.from(t)));
              }),
              new Uint8Array(n(e))
            );
          }),
          (t.trimLeft = function (e, t) {
            return 0 < (t = e.length - t) ? e.slice(t) : e;
          }),
          (t.trimRight = function (e, t) {
            return e.slice(0, t);
          }),
          (t.calcByteLength = N),
          (t.splitBytes = I),
          (t.swapBytes = L),
          (t.swapHex = function (e) {
            return A(L(b(e)));
          }),
          (t.sanitizeBytes = B),
          (t.padLeft = H),
          (t.padRight = function (e, t) {
            return q(
              e,
              t,
              !1,
              2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : c
            );
          }),
          (t.removeHexPrefix = U),
          (t.addHexPrefix = D),
          (t.sanitizeHex = function (e) {
            return (e = B((e = U(e)), 2)) && D(e);
          }),
          (t.removeHexLeadingZeros = function (e) {
            var t = e.startsWith("0x");
            return (
              (e = (e = U(e)).startsWith(c) ? e.substring(1) : e), t ? D(e) : e
            );
          });
      }.call(this, r(532).Buffer));
    },
    1123: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  });
              }
            : function (e, t, r, n) {
                e[(n = void 0 === n ? r : n)] = t[r];
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e)
              "default" === r || t.hasOwnProperty(r) || n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        i(r(1179), t),
        i(r(1278), t),
        i(r(1507), t),
        i(r(1508), t),
        i(r(1509), t);
    },
    1127: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(113);
      n.__exportStar(r(1267), t),
        n.__exportStar(r(1208), t),
        n.__exportStar(r(1271), t),
        n.__exportStar(r(1392), t),
        n.__exportStar(r(1273), t),
        n.__exportStar(r(1410), t),
        n.__exportStar(r(1411), t),
        n.__exportStar(r(1277), t),
        n.__exportStar(r(1276), t);
    },
    1132: function (e, t) {
      var r,
        n = [
          0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581,
          655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706,
          1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196,
          3362, 3532, 3706,
        ];
      (t.getSymbolSize = function (e) {
        if (!e) throw new Error('"version" cannot be null or undefined');
        if (e < 1 || 40 < e)
          throw new Error('"version" should be in range from 1 to 40');
        return 4 * e + 17;
      }),
        (t.getSymbolTotalCodewords = function (e) {
          return n[e];
        }),
        (t.getBCHDigit = function (e) {
          for (var t = 0; 0 !== e; ) t++, (e >>>= 1);
          return t;
        }),
        (t.setToSJISFunction = function (e) {
          if ("function" != typeof e)
            throw new Error('"toSJISFunc" is not a valid function.');
          r = e;
        }),
        (t.isKanjiModeEnabled = function () {
          return void 0 !== r;
        }),
        (t.toSJIS = function (e) {
          return r(e);
        });
    },
    1133: function (e, t, r) {
      var n = r(1337),
        i = r(1338);
      (t.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
        (t.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
        (t.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
        (t.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
        (t.MIXED = { bit: -1 }),
        (t.getCharCountIndicator = function (e, t) {
          if (!e.ccBits) throw new Error("Invalid mode: " + e);
          if (!n.isValid(t)) throw new Error("Invalid version: " + t);
          return 1 <= t && t < 10
            ? e.ccBits[0]
            : t < 27
            ? e.ccBits[1]
            : e.ccBits[2];
        }),
        (t.getBestModeForData = function (e) {
          return i.testNumeric(e)
            ? t.NUMERIC
            : i.testAlphanumeric(e)
            ? t.ALPHANUMERIC
            : i.testKanji(e)
            ? t.KANJI
            : t.BYTE;
        }),
        (t.toString = function (e) {
          if (e && e.id) return e.id;
          throw new Error("Invalid mode");
        }),
        (t.isValid = function (e) {
          return e && e.bit && e.ccBits;
        }),
        (t.from = function (e, r) {
          if (t.isValid(e)) return e;
          try {
            return (function (e) {
              if ("string" != typeof e)
                throw new Error("Param is not a string");
              switch (e.toLowerCase()) {
                case "numeric":
                  return t.NUMERIC;
                case "alphanumeric":
                  return t.ALPHANUMERIC;
                case "kanji":
                  return t.KANJI;
                case "byte":
                  return t.BYTE;
                default:
                  throw new Error("Unknown mode: " + e);
              }
            })(e);
          } catch (e) {
            return r;
          }
        });
    },
    1135: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isAsync = void 0);
      var n,
        i = (n = r(1579)) && n.__esModule ? n : { default: n },
        o = "function" == typeof Symbol;
      function a(e) {
        return o && "AsyncFunction" === e[Symbol.toStringTag];
      }
      (t.default = function (e) {
        return a(e) ? (0, i.default)(e) : e;
      }),
        (t.isAsync = a);
    },
    1147: function (e, t, r) {
      "use strict";
      var n = r(1230),
        i = (o.TYPED_ARRAY_SUPPORT = (function () {
          try {
            var e = new Uint8Array(1);
            return (
              (e.__proto__ = {
                __proto__: Uint8Array.prototype,
                foo: function () {
                  return 42;
                },
              }),
              42 === e.foo()
            );
          } catch (e) {
            return !1;
          }
        })())
          ? 2147483647
          : 1073741823;
      function o(e, t, r) {
        return o.TYPED_ARRAY_SUPPORT || this instanceof o
          ? "number" == typeof e
            ? u(this, e)
            : (function (e, t, r, n) {
                if ("number" == typeof t)
                  throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer &&
                  t instanceof ArrayBuffer
                  ? (function (e, t, r, n) {
                      if (r < 0 || t.byteLength < r)
                        throw new RangeError("'offset' is out of bounds");
                      if (t.byteLength < r + (n || 0))
                        throw new RangeError("'length' is out of bounds");
                      return (
                        (n =
                          void 0 === r && void 0 === n
                            ? new Uint8Array(t)
                            : void 0 === n
                            ? new Uint8Array(t, r)
                            : new Uint8Array(t, r, n)),
                        o.TYPED_ARRAY_SUPPORT
                          ? (n.__proto__ = o.prototype)
                          : (n = c(e, n)),
                        n
                      );
                    })(e, t, r, n)
                  : ("string" != typeof t
                      ? function (e, t) {
                          if (o.isBuffer(t)) {
                            var r = 0 | a(t.length),
                              n = s(e, r);
                            return 0 === n.length || t.copy(n, 0, 0, r), n;
                          }
                          if (t) {
                            if (
                              ("undefined" != typeof ArrayBuffer &&
                                t.buffer instanceof ArrayBuffer) ||
                              "length" in t
                            )
                              return "number" != typeof t.length ||
                                (function (e) {
                                  return e != e;
                                })(t.length)
                                ? s(e, 0)
                                : c(e, t);
                            if ("Buffer" === t.type && Array.isArray(t.data))
                              return c(e, t.data);
                          }
                          throw new TypeError(
                            "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                          );
                        }
                      : function (e, t) {
                          var r = 0 | l(t);
                          return (
                            (t = (e = s(e, r)).write(t)) !== r &&
                              (e = e.slice(0, t)),
                            e
                          );
                        })(e, t);
              })(this, e, t, r)
          : new o(e, t, r);
      }
      function a(e) {
        if (i <= e)
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              i.toString(16) +
              " bytes"
          );
        return 0 | e;
      }
      function s(e, t) {
        var r;
        return (
          o.TYPED_ARRAY_SUPPORT
            ? ((r = new Uint8Array(t)).__proto__ = o.prototype)
            : ((r = null === (r = e) ? new o(t) : r).length = t),
          r
        );
      }
      function u(e, t) {
        var r = s(e, t < 0 ? 0 : 0 | a(t));
        if (!o.TYPED_ARRAY_SUPPORT) for (var n = 0; n < t; ++n) r[n] = 0;
        return r;
      }
      function c(e, t) {
        for (
          var r = t.length < 0 ? 0 : 0 | a(t.length), n = s(e, r), i = 0;
          i < r;
          i += 1
        )
          n[i] = 255 & t[i];
        return n;
      }
      function f(e, t) {
        var r;
        t = t || 1 / 0;
        for (var n = e.length, i = null, o = [], a = 0; a < n; ++a) {
          if (55295 < (r = e.charCodeAt(a)) && r < 57344) {
            if (!i) {
              if (56319 < r) {
                -1 < (t -= 3) && o.push(239, 191, 189);
                continue;
              }
              if (a + 1 === n) {
                -1 < (t -= 3) && o.push(239, 191, 189);
                continue;
              }
              i = r;
              continue;
            }
            if (r < 56320) {
              -1 < (t -= 3) && o.push(239, 191, 189), (i = r);
              continue;
            }
            r = 65536 + (((i - 55296) << 10) | (r - 56320));
          } else i && -1 < (t -= 3) && o.push(239, 191, 189);
          if (((i = null), r < 128)) {
            if (--t < 0) break;
            o.push(r);
          } else if (r < 2048) {
            if ((t -= 2) < 0) break;
            o.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((t -= 3) < 0) break;
            o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else {
            if (!(r < 1114112)) throw new Error("Invalid code point");
            if ((t -= 4) < 0) break;
            o.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            );
          }
        }
        return o;
      }
      function l(e) {
        return o.isBuffer(e)
          ? e.length
          : "undefined" != typeof ArrayBuffer &&
            "function" == typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
          ? e.byteLength
          : 0 === (e = "string" != typeof e ? "" + e : e).length
          ? 0
          : f(e).length;
      }
      o.TYPED_ARRAY_SUPPORT &&
        ((o.prototype.__proto__ = Uint8Array.prototype),
        (o.__proto__ = Uint8Array),
        "undefined" != typeof Symbol &&
          Symbol.species &&
          o[Symbol.species] === o &&
          Object.defineProperty(o, Symbol.species, {
            value: null,
            configurable: !0,
            enumerable: !1,
            writable: !1,
          })),
        (o.prototype.write = function (e, t, r) {
          void 0 === t || (void 0 === r && "string" == typeof t)
            ? ((r = this.length), (t = 0))
            : isFinite(t) && ((t |= 0), isFinite(r) ? (r |= 0) : (r = void 0));
          var n = this.length - t;
          if (
            ((void 0 === r || n < r) && (r = n),
            (0 < e.length && (r < 0 || t < 0)) || t > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          return (function (e, t, r, n) {
            return (function (e, t, r, n) {
              for (
                var i = 0;
                i < n && !(i + r >= t.length || i >= e.length);
                ++i
              )
                t[i + r] = e[i];
              return i;
            })(f(t, e.length - r), e, r, n);
          })(this, e, t, r);
        }),
        (o.prototype.slice = function (e, t) {
          var r = this.length;
          if (
            ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : r < e && (e = r),
            (t = void 0 === t ? r : ~~t) < 0
              ? (t += r) < 0 && (t = 0)
              : r < t && (t = r),
            t < e && (t = e),
            o.TYPED_ARRAY_SUPPORT)
          )
            (i = this.subarray(e, t)).__proto__ = o.prototype;
          else
            for (var n = t - e, i = new o(n, void 0), a = 0; a < n; ++a)
              i[a] = this[a + e];
          return i;
        }),
        (o.prototype.copy = function (e, t, r, n) {
          if (
            ((r = r || 0),
            n || 0 === n || (n = this.length),
            t >= e.length && (t = e.length),
            (n = 0 < n && n < r ? r : n) === r)
          )
            return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if ((t = t || 0) < 0)
            throw new RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length)
            throw new RangeError("sourceStart out of bounds");
          if (n < 0) throw new RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length);
          var i,
            a = (n = e.length - t < n - r ? e.length - t + r : n) - r;
          if (this === e && r < t && t < n)
            for (i = a - 1; 0 <= i; --i) e[i + t] = this[i + r];
          else if (a < 1e3 || !o.TYPED_ARRAY_SUPPORT)
            for (i = 0; i < a; ++i) e[i + t] = this[i + r];
          else Uint8Array.prototype.set.call(e, this.subarray(r, r + a), t);
          return a;
        }),
        (o.prototype.fill = function (e, t, r) {
          var n;
          if (
            ("string" == typeof e
              ? ("string" == typeof t
                  ? ((t = 0), (r = this.length))
                  : "string" == typeof r && (r = this.length),
                1 !== e.length || ((n = e.charCodeAt(0)) < 256 && (e = n)))
              : "number" == typeof e && (e &= 255),
            t < 0 || this.length < t || this.length < r)
          )
            throw new RangeError("Out of range index");
          if (r <= t) return this;
          if (
            ((t >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            "number" == typeof (e = e || 0))
          )
            for (s = t; s < r; ++s) this[s] = e;
          else
            for (
              var i = o.isBuffer(e) ? e : new o(e), a = i.length, s = 0;
              s < r - t;
              ++s
            )
              this[s + t] = i[s % a];
          return this;
        }),
        (o.concat = function (e, t) {
          if (!n(e))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return s(null, 0);
          if (void 0 === t) for (a = t = 0; a < e.length; ++a) t += e[a].length;
          for (var r = u(null, t), i = 0, a = 0; a < e.length; ++a) {
            var c = e[a];
            if (!o.isBuffer(c))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            c.copy(r, i), (i += c.length);
          }
          return r;
        }),
        (o.byteLength = l),
        (o.prototype._isBuffer = !0),
        (o.isBuffer = function (e) {
          return !(null == e || !e._isBuffer);
        }),
        (e.exports.alloc = function (e) {
          return (e = new o(e)).fill(0), e;
        }),
        (e.exports.from = function (e) {
          return new o(e);
        });
    },
    1148: function (e, t, r) {
      "use strict";
      (function (t) {
        var n = r(1346),
          i = r(1570);
        function o(e) {
          if ("string" != typeof e)
            throw new Error(
              "[ethjs-util] while padding to even, value must be string, is currently " +
                typeof e +
                ", while padToEven."
            );
          return e.length % 2 ? "0" + e : e;
        }
        function a(e) {
          return "0x" + e.toString(16);
        }
        e.exports = {
          arrayContainsArray: function (e, t, r) {
            if (!0 !== Array.isArray(e))
              throw new Error(
                "[ethjs-util] method arrayContainsArray requires input 'superset' to be an array got type '" +
                  typeof e +
                  "'"
              );
            if (!0 !== Array.isArray(t))
              throw new Error(
                "[ethjs-util] method arrayContainsArray requires input 'subset' to be an array got type '" +
                  typeof t +
                  "'"
              );
            return t[Boolean(r) ? "some" : "every"](function (t) {
              return 0 <= e.indexOf(t);
            });
          },
          intToBuffer: function (e) {
            return (e = a(e)), new t(o(e.slice(2)), "hex");
          },
          getBinarySize: function (e) {
            if ("string" != typeof e)
              throw new Error(
                "[ethjs-util] while getting binary size, method getBinarySize requires input 'str' to be type String, got '" +
                  typeof e +
                  "'."
              );
            return t.byteLength(e, "utf8");
          },
          isHexPrefixed: n,
          stripHexPrefix: i,
          padToEven: o,
          intToHex: a,
          fromAscii: function (e) {
            for (var t = "", r = 0; r < e.length; r++) {
              var n = e.charCodeAt(r).toString(16);
              t += n.length < 2 ? "0" + n : n;
            }
            return "0x" + t;
          },
          fromUtf8: function (e) {
            return (
              "0x" + o(new t(e, "utf8").toString("hex")).replace(/^0+|0+$/g, "")
            );
          },
          toAscii: function (e) {
            var t = "",
              r = 0,
              n = e.length;
            for ("0x" === e.substring(0, 2) && (r = 2); r < n; r += 2) {
              var i = parseInt(e.substr(r, 2), 16);
              t += String.fromCharCode(i);
            }
            return t;
          },
          toUtf8: function (e) {
            return new t(o(i(e).replace(/^0+|0+$/g, "")), "hex").toString(
              "utf8"
            );
          },
          getKeys: function (e, t, r) {
            if (!Array.isArray(e))
              throw new Error(
                "[ethjs-util] method getKeys expecting type Array as 'params' input, got '" +
                  typeof e +
                  "'"
              );
            if ("string" != typeof t)
              throw new Error(
                "[ethjs-util] method getKeys expecting type String for input 'key' got '" +
                  typeof t +
                  "'."
              );
            for (var n = [], i = 0; i < e.length; i++) {
              var o = e[i][t];
              if (r && !o) o = "";
              else if ("string" != typeof o) throw new Error("invalid abi");
              n.push(o);
            }
            return n;
          },
          isHexString: function (e, t) {
            return (
              !("string" != typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) &&
              (!t || e.length === 2 + 2 * t)
            );
          },
        };
      }.call(this, r(532).Buffer));
    },
    1160: function (e, t, r) {
      "use strict";
      var n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        i = r(1343),
        o = i.keccak224,
        a = i.keccak384,
        s = i.keccak256,
        u = i.keccak512,
        c = r(1564),
        f = r(1233),
        l = r(1185),
        h = r(42),
        d = r(1129),
        p = r(1105).Buffer;
      Object.assign(t, r(1148)),
        (t.MAX_INTEGER = new h(
          "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
          16
        )),
        (t.TWO_POW256 = new h(
          "10000000000000000000000000000000000000000000000000000000000000000",
          16
        )),
        (t.KECCAK256_NULL_S =
          "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"),
        (t.SHA3_NULL_S = t.KECCAK256_NULL_S),
        (t.KECCAK256_NULL = p.from(t.KECCAK256_NULL_S, "hex")),
        (t.SHA3_NULL = t.KECCAK256_NULL),
        (t.KECCAK256_RLP_ARRAY_S =
          "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347"),
        (t.SHA3_RLP_ARRAY_S = t.KECCAK256_RLP_ARRAY_S),
        (t.KECCAK256_RLP_ARRAY = p.from(t.KECCAK256_RLP_ARRAY_S, "hex")),
        (t.SHA3_RLP_ARRAY = t.KECCAK256_RLP_ARRAY),
        (t.KECCAK256_RLP_S =
          "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"),
        (t.SHA3_RLP_S = t.KECCAK256_RLP_S),
        (t.KECCAK256_RLP = p.from(t.KECCAK256_RLP_S, "hex")),
        (t.SHA3_RLP = t.KECCAK256_RLP),
        (t.BN = h),
        (t.rlp = l),
        (t.secp256k1 = c),
        (t.zeros = function (e) {
          return p.allocUnsafe(e).fill(0);
        }),
        (t.zeroAddress = function () {
          var e = t.zeros(20);
          return t.bufferToHex(e);
        }),
        (t.setLengthLeft = t.setLength =
          function (e, r, n) {
            var i = t.zeros(r);
            return (
              (e = t.toBuffer(e)),
              n
                ? e.length < r
                  ? (e.copy(i), i)
                  : e.slice(0, r)
                : e.length < r
                ? (e.copy(i, r - e.length), i)
                : e.slice(-r)
            );
          }),
        (t.setLengthRight = function (e, r) {
          return t.setLength(e, r, !0);
        }),
        (t.unpad = t.stripZeros =
          function (e) {
            for (
              var r = (e = t.stripHexPrefix(e))[0];
              0 < e.length && "0" === r.toString();

            )
              r = (e = e.slice(1))[0];
            return e;
          }),
        (t.toBuffer = function (e) {
          if (!p.isBuffer(e))
            if (Array.isArray(e)) e = p.from(e);
            else if ("string" == typeof e)
              e = t.isHexString(e)
                ? p.from(t.padToEven(t.stripHexPrefix(e)), "hex")
                : p.from(e);
            else if ("number" == typeof e) e = t.intToBuffer(e);
            else if (null == e) e = p.allocUnsafe(0);
            else if (h.isBN(e)) e = e.toArrayLike(p);
            else {
              if (!e.toArray) throw new Error("invalid type");
              e = p.from(e.toArray());
            }
          return e;
        }),
        (t.bufferToInt = function (e) {
          return new h(t.toBuffer(e)).toNumber();
        }),
        (t.bufferToHex = function (e) {
          return "0x" + (e = t.toBuffer(e)).toString("hex");
        }),
        (t.fromSigned = function (e) {
          return new h(e).fromTwos(256);
        }),
        (t.toUnsigned = function (e) {
          return p.from(e.toTwos(256).toArray());
        }),
        (t.keccak = function (e, r) {
          switch (((e = t.toBuffer(e)), (r = r || 256))) {
            case 224:
              return o(e);
            case 256:
              return s(e);
            case 384:
              return a(e);
            case 512:
              return u(e);
            default:
              throw new Error("Invald algorithm: keccak" + r);
          }
        }),
        (t.keccak256 = function (e) {
          return t.keccak(e);
        }),
        (t.sha3 = t.keccak),
        (t.sha256 = function (e) {
          return (e = t.toBuffer(e)), d("sha256").update(e).digest();
        }),
        (t.ripemd160 = function (e, r) {
          return (
            (e = t.toBuffer(e)),
            (e = d("rmd160").update(e).digest()),
            !0 === r ? t.setLength(e, 32) : e
          );
        }),
        (t.rlphash = function (e) {
          return t.keccak(l.encode(e));
        }),
        (t.isValidPrivate = function (e) {
          return c.privateKeyVerify(e);
        }),
        (t.isValidPublic = function (e, t) {
          return 64 === e.length
            ? c.publicKeyVerify(p.concat([p.from([4]), e]))
            : !!t && c.publicKeyVerify(e);
        }),
        (t.pubToAddress = t.publicToAddress =
          function (e, r) {
            return (
              (e = t.toBuffer(e)),
              r && 64 !== e.length && (e = c.publicKeyConvert(e, !1).slice(1)),
              f(64 === e.length),
              t.keccak(e).slice(-20)
            );
          });
      var v = (t.privateToPublic = function (e) {
        return (e = t.toBuffer(e)), c.publicKeyCreate(e, !1).slice(1);
      });
      (t.importPublic = function (e) {
        return 64 !== (e = t.toBuffer(e)).length
          ? c.publicKeyConvert(e, !1).slice(1)
          : e;
      }),
        (t.ecsign = function (e, t) {
          return (
            (e = c.sign(e, t)),
            ((t = {}).r = e.signature.slice(0, 32)),
            (t.s = e.signature.slice(32, 64)),
            (t.v = e.recovery + 27),
            t
          );
        }),
        (t.hashPersonalMessage = function (e) {
          var r = t.toBuffer(
            "\x19Ethereum Signed Message:\n" + e.length.toString()
          );
          return t.keccak(p.concat([r, e]));
        }),
        (t.ecrecover = function (e, r, n, i) {
          if (
            ((i = p.concat([t.setLength(n, 32), t.setLength(i, 32)], 64)),
            0 != (r -= 27) && 1 != r)
          )
            throw new Error("Invalid signature v value");
          return (r = c.recover(e, i, r)), c.publicKeyConvert(r, !1).slice(1);
        }),
        (t.toRpcSig = function (e, r, n) {
          if (27 !== e && 28 !== e) throw new Error("Invalid recovery id");
          return t.bufferToHex(
            p.concat([
              t.setLengthLeft(r, 32),
              t.setLengthLeft(n, 32),
              t.toBuffer(e - 27),
            ])
          );
        }),
        (t.fromRpcSig = function (e) {
          if (65 !== (e = t.toBuffer(e)).length)
            throw new Error("Invalid signature length");
          var r = e[64];
          return (
            r < 27 && (r += 27), { v: r, r: e.slice(0, 32), s: e.slice(32, 64) }
          );
        }),
        (t.privateToAddress = function (e) {
          return t.publicToAddress(v(e));
        }),
        (t.isValidAddress = function (e) {
          return /^0x[0-9a-fA-F]{40}$/.test(e);
        }),
        (t.isZeroAddress = function (e) {
          return t.zeroAddress() === t.addHexPrefix(e);
        }),
        (t.toChecksumAddress = function (e) {
          e = t.stripHexPrefix(e).toLowerCase();
          for (
            var r = t.keccak(e).toString("hex"), n = "0x", i = 0;
            i < e.length;
            i++
          )
            8 <= parseInt(r[i], 16) ? (n += e[i].toUpperCase()) : (n += e[i]);
          return n;
        }),
        (t.isValidChecksumAddress = function (e) {
          return t.isValidAddress(e) && t.toChecksumAddress(e) === e;
        }),
        (t.generateAddress = function (e, r) {
          return (
            (e = t.toBuffer(e)),
            (r = (r = new h(r)).isZero() ? null : p.from(r.toArray())),
            t.rlphash([e, r]).slice(-20)
          );
        }),
        (t.isPrecompiled = function (e) {
          return 1 === (e = t.unpad(e)).length && 1 <= e[0] && e[0] <= 8;
        }),
        (t.addHexPrefix = function (e) {
          return "string" != typeof e || t.isHexPrefixed(e) ? e : "0x" + e;
        }),
        (t.isValidSignature = function (e, t, r, n) {
          var i = new h(
              "7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",
              16
            ),
            o = new h(
              "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",
              16
            );
          return (
            32 === t.length &&
            32 === r.length &&
            (27 === e || 28 === e) &&
            ((t = new h(t)),
            (r = new h(r)),
            !(t.isZero() || t.gt(o) || r.isZero() || r.gt(o)) &&
              (!1 !== n || 1 !== new h(r).cmp(i)))
          );
        }),
        (t.baToJSON = function (e) {
          if (p.isBuffer(e)) return "0x" + e.toString("hex");
          if (e instanceof Array) {
            for (var r = [], n = 0; n < e.length; n++) r.push(t.baToJSON(e[n]));
            return r;
          }
        }),
        (t.defineProperties = function (e, r, i) {
          if (
            ((e.raw = []),
            (e._fields = []),
            (e.toJSON = function (r) {
              if (r) {
                var n = {};
                return (
                  e._fields.forEach(function (t) {
                    n[t] = "0x" + e[t].toString("hex");
                  }),
                  n
                );
              }
              return t.baToJSON(this.raw);
            }),
            (e.serialize = function () {
              return l.encode(e.raw);
            }),
            r.forEach(function (r, n) {
              function i() {
                return e.raw[n];
              }
              function o(i) {
                "00" !== (i = t.toBuffer(i)).toString("hex") ||
                  r.allowZero ||
                  (i = p.allocUnsafe(0)),
                  r.allowLess && r.length
                    ? ((i = t.stripZeros(i)),
                      f(
                        r.length >= i.length,
                        "The field " +
                          r.name +
                          " must not have more " +
                          r.length +
                          " bytes"
                      ))
                    : (r.allowZero && 0 === i.length) ||
                      !r.length ||
                      f(
                        r.length === i.length,
                        "The field " +
                          r.name +
                          " must have byte length of " +
                          r.length
                      ),
                  (e.raw[n] = i);
              }
              e._fields.push(r.name),
                Object.defineProperty(e, r.name, {
                  enumerable: !0,
                  configurable: !0,
                  get: i,
                  set: o,
                }),
                r.default && (e[r.name] = r.default),
                r.alias &&
                  Object.defineProperty(e, r.alias, {
                    enumerable: !1,
                    configurable: !0,
                    set: o,
                    get: i,
                  });
            }),
            i)
          )
            if (
              ("string" == typeof i && (i = p.from(t.stripHexPrefix(i), "hex")),
              p.isBuffer(i) && (i = l.decode(i)),
              Array.isArray(i))
            ) {
              if (i.length > e._fields.length)
                throw new Error("wrong number of fields in data");
              i.forEach(function (r, n) {
                e[e._fields[n]] = t.toBuffer(r);
              });
            } else {
              if ("object" !== (void 0 === i ? "undefined" : n(i)))
                throw new Error("invalid data");
              var o = Object.keys(i);
              r.forEach(function (t) {
                -1 !== o.indexOf(t.name) && (e[t.name] = i[t.name]),
                  -1 !== o.indexOf(t.alias) && (e[t.alias] = i[t.alias]);
              });
            }
        });
    },
    1161: function (e, t) {
      e.exports = function () {};
    },
    1163: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.baToJSON =
            t.addHexPrefix =
            t.toUnsigned =
            t.fromSigned =
            t.bufferToHex =
            t.bufferToInt =
            t.toBuffer =
            t.stripZeros =
            t.unpad =
            t.setLengthRight =
            t.setLength =
            t.setLengthLeft =
            t.zeros =
              void 0);
        var n = r(1148),
          i = r(42);
        (t.zeros = function (t) {
          return e.allocUnsafe(t).fill(0);
        }),
          (t.setLengthLeft = function (e, r, n) {
            void 0 === n && (n = !1);
            var i = t.zeros(r);
            return (
              (e = t.toBuffer(e)),
              n
                ? e.length < r
                  ? (e.copy(i), i)
                  : e.slice(0, r)
                : e.length < r
                ? (e.copy(i, r - e.length), i)
                : e.slice(-r)
            );
          }),
          (t.setLength = t.setLengthLeft),
          (t.setLengthRight = function (e, r) {
            return t.setLength(e, r, !0);
          }),
          (t.unpad = function (e) {
            for (
              var t = (e = n.stripHexPrefix(e))[0];
              0 < e.length && "0" === t.toString();

            )
              t = (e = e.slice(1))[0];
            return e;
          }),
          (t.stripZeros = t.unpad),
          (t.toBuffer = function (t) {
            if (!e.isBuffer(t))
              if (Array.isArray(t)) t = e.from(t);
              else if ("string" == typeof t) {
                if (!n.isHexString(t))
                  throw new Error(
                    "Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: " +
                      t
                  );
                t = e.from(n.padToEven(n.stripHexPrefix(t)), "hex");
              } else if ("number" == typeof t) t = n.intToBuffer(t);
              else if (null == t) t = e.allocUnsafe(0);
              else if (i.isBN(t)) t = t.toArrayLike(e);
              else {
                if (!t.toArray) throw new Error("invalid type");
                t = e.from(t.toArray());
              }
            return t;
          }),
          (t.bufferToInt = function (e) {
            return new i(t.toBuffer(e)).toNumber();
          }),
          (t.bufferToHex = function (e) {
            return "0x" + (e = t.toBuffer(e)).toString("hex");
          }),
          (t.fromSigned = function (e) {
            return new i(e).fromTwos(256);
          }),
          (t.toUnsigned = function (t) {
            return e.from(t.toTwos(256).toArray());
          }),
          (t.addHexPrefix = function (e) {
            return "string" != typeof e || n.isHexPrefixed(e) ? e : "0x" + e;
          }),
          (t.baToJSON = function (r) {
            if (e.isBuffer(r)) return "0x" + r.toString("hex");
            if (r instanceof Array) {
              for (var n = [], i = 0; i < r.length; i++)
                n.push(t.baToJSON(r[i]));
              return n;
            }
          });
      }.call(this, r(532).Buffer));
    },
    1179: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ERROR_BAD_MAC =
          t.EMPTY_UINT_ARRAY =
          t.MAX_MSG_LENGTH =
          t.MAX_KEY_LENGTH =
          t.PREFIXED_KEY_LENGTH =
          t.MAC_LENGTH =
          t.IV_LENGTH =
          t.KEY_LENGTH =
          t.PREFIX_LENGTH =
          t.RIPEMD160_NODE_ALGO =
          t.SHA512_NODE_ALGO =
          t.SHA256_NODE_ALGO =
          t.HMAC_NODE_ALGO =
          t.AES_NODE_ALGO =
          t.SHA512_BROWSER_ALGO =
          t.SHA256_BROWSER_ALGO =
          t.HMAC_BROWSER =
          t.HMAC_BROWSER_ALGO =
          t.AES_BROWSER_ALGO =
          t.HMAC_LENGTH =
          t.AES_LENGTH =
          t.LENGTH_1024 =
          t.LENGTH_512 =
          t.LENGTH_256 =
          t.LENGTH_128 =
          t.LENGTH_64 =
          t.LENGTH_32 =
          t.LENGTH_16 =
          t.LENGTH_1 =
          t.LENGTH_0 =
          t.VERIFY_OP =
          t.SIGN_OP =
          t.DECRYPT_OP =
          t.ENCRYPT_OP =
          t.UTF8_ENC =
          t.HEX_ENC =
            void 0),
        (t.HEX_ENC = "hex"),
        (t.UTF8_ENC = "utf8"),
        (t.ENCRYPT_OP = "encrypt"),
        (t.DECRYPT_OP = "decrypt"),
        (t.SIGN_OP = "sign"),
        (t.VERIFY_OP = "verify"),
        (t.LENGTH_0 = 0),
        (t.LENGTH_1 = 1),
        (t.LENGTH_16 = 16),
        (t.LENGTH_32 = 32),
        (t.LENGTH_64 = 64),
        (t.LENGTH_128 = 128),
        (t.LENGTH_256 = 256),
        (t.LENGTH_512 = 512),
        (t.LENGTH_1024 = 1024),
        (t.AES_LENGTH = t.LENGTH_256),
        (t.HMAC_LENGTH = t.LENGTH_256),
        (t.AES_BROWSER_ALGO = "AES-CBC"),
        (t.HMAC_BROWSER_ALGO = "SHA-".concat(t.AES_LENGTH)),
        (t.HMAC_BROWSER = "HMAC"),
        (t.SHA256_BROWSER_ALGO = "SHA-256"),
        (t.SHA512_BROWSER_ALGO = "SHA-512"),
        (t.AES_NODE_ALGO = "aes-".concat(t.AES_LENGTH, "-cbc")),
        (t.HMAC_NODE_ALGO = "sha".concat(t.HMAC_LENGTH)),
        (t.SHA256_NODE_ALGO = "sha256"),
        (t.SHA512_NODE_ALGO = "sha512"),
        (t.RIPEMD160_NODE_ALGO = "ripemd160"),
        (t.PREFIX_LENGTH = t.LENGTH_1),
        (t.KEY_LENGTH = t.LENGTH_32),
        (t.IV_LENGTH = t.LENGTH_16),
        (t.MAC_LENGTH = t.LENGTH_32),
        (t.PREFIXED_KEY_LENGTH = t.KEY_LENGTH + t.PREFIX_LENGTH),
        (t.MAX_KEY_LENGTH = t.LENGTH_1024),
        (t.MAX_MSG_LENGTH = t.LENGTH_32),
        (t.EMPTY_UINT_ARRAY = new Uint8Array(t.LENGTH_0)),
        (t.ERROR_BAD_MAC = "Bad MAC");
    },
    1185: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getLength = t.decode = t.encode = void 0);
        var n = r(42);
        function i(e, t) {
          if ("00" === e.slice(0, 2))
            throw new Error("invalid RLP: extra zeros");
          return parseInt(e, t);
        }
        function o(t, r) {
          return t < 56
            ? e.from([t + r])
            : ((t = s(t)),
              (r = s(r + 55 + t.length / 2)),
              e.from(r + t, "hex"));
        }
        function a(e) {
          return "0x" === e.slice(0, 2);
        }
        function s(e) {
          if (e < 0)
            throw new Error("Invalid integer as argument, must be unsigned!");
          return (e = e.toString(16)).length % 2 ? "0" + e : e;
        }
        function u(t) {
          if (e.isBuffer(t)) return t;
          var r;
          if ("string" == typeof t)
            return a(t)
              ? e.from(
                  (r = "string" == typeof (r = t) && a(r) ? r.slice(2) : r)
                    .length % 2
                    ? "0" + r
                    : r,
                  "hex"
                )
              : e.from(t);
          if ("number" == typeof t || "bigint" == typeof t)
            return t ? ((r = s((r = t))), e.from(r, "hex")) : e.from([]);
          if (null == t) return e.from([]);
          if (t instanceof Uint8Array) return e.from(t);
          if (n.isBN(t)) return e.from(t.toArray());
          throw new Error("invalid type");
        }
        (t.encode = function t(r) {
          if (Array.isArray(r)) {
            for (var n = [], i = 0; i < r.length; i++) n.push(t(r[i]));
            var a = e.concat(n);
            return e.concat([o(a.length, 192), a]);
          }
          return 1 === (a = u(r)).length && a[0] < 128
            ? a
            : e.concat([o(a.length, 128), a]);
        }),
          (t.decode = function (t, r) {
            if ((void 0 === r && (r = !1), !t || 0 === t.length))
              return e.from([]);
            if (
              ((t = (function t(r) {
                var n,
                  o,
                  a,
                  s,
                  u = [],
                  c = r[0];
                if (c <= 127)
                  return { data: r.slice(0, 1), remainder: r.slice(1) };
                if (c <= 183) {
                  if (
                    ((f = c - 127),
                    (o = 128 === c ? e.from([]) : r.slice(1, f)),
                    2 === f && o[0] < 128)
                  )
                    throw new Error(
                      "invalid rlp encoding: byte must be less 0x80"
                    );
                  return { data: o, remainder: r.slice(f) };
                }
                if (c <= 191) {
                  if (((n = c - 182), r.length - 1 < n))
                    throw new Error(
                      "invalid RLP: not enough bytes for string length"
                    );
                  if ((f = i(r.slice(1, n).toString("hex"), 16)) <= 55)
                    throw new Error(
                      "invalid RLP: expected string length to be greater than 55"
                    );
                  if ((o = r.slice(n, f + n)).length < f)
                    throw new Error("invalid RLP: not enough bytes for string");
                  return { data: o, remainder: r.slice(f + n) };
                }
                if (c <= 247) {
                  for (f = c - 191, a = r.slice(1, f); a.length; )
                    (s = t(a)), u.push(s.data), (a = s.remainder);
                  return { data: u, remainder: r.slice(f) };
                }
                var f =
                  (n = c - 246) + (f = i(r.slice(1, n).toString("hex"), 16));
                if (f > r.length)
                  throw new Error(
                    "invalid rlp: total length is larger than the data"
                  );
                if (0 === (a = r.slice(n, f)).length)
                  throw new Error("invalid rlp, List has a invalid length");
                for (; a.length; )
                  (s = t(a)), u.push(s.data), (a = s.remainder);
                return { data: u, remainder: r.slice(f) };
              })(u(t))),
              r)
            )
              return t;
            if (0 !== t.remainder.length) throw new Error("invalid remainder");
            return t.data;
          }),
          (t.getLength = function (t) {
            if (!t || 0 === t.length) return e.from([]);
            var r = u(t);
            return (t = r[0]) <= 127
              ? r.length
              : t <= 183
              ? t - 127
              : t <= 191
              ? t - 182
              : t <= 247
              ? t - 191
              : (t -= 246) + i(r.slice(1, t).toString("hex"), 16);
          });
      }.call(this, r(532).Buffer));
    },
    1187: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          t |= 0;
          for (
            var r = Math.max(e.length - t, 0), n = Array(r), i = 0;
            i < r;
            i++
          )
            n[i] = e[t + i];
          return n;
        }),
        (e.exports = t.default);
    },
    1188: function (e, t, r) {
      var n = r(1237);
      function i() {}
      ((e.exports = i).prototype.setEngine = function (e) {
        var t = this;
        t.engine ||
          ((t.engine = e).on("block", function (e) {
            t.currentBlock = e;
          }),
          e.on("start", function () {
            t.start();
          }),
          e.on("stop", function () {
            t.stop();
          }));
      }),
        (i.prototype.handleRequest = function (e, t, r) {
          throw new Error("Subproviders should override `handleRequest`.");
        }),
        (i.prototype.emitPayload = function (e, t) {
          this.engine.sendAsync(n(e), t);
        }),
        (i.prototype.stop = function () {}),
        (i.prototype.start = function () {});
    },
    1208: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.infuraNetworks =
          t.stateMethods =
          t.signingMethods =
          t.reservedEvents =
            void 0),
        (t.reservedEvents = [
          "session_request",
          "session_update",
          "exchange_key",
          "connect",
          "disconnect",
          "display_uri",
          "modal_closed",
          "transport_open",
          "transport_close",
          "transport_error",
        ]),
        (t.signingMethods = [
          "eth_sendTransaction",
          "eth_signTransaction",
          "eth_sign",
          "eth_signTypedData",
          "eth_signTypedData_v1",
          "eth_signTypedData_v2",
          "eth_signTypedData_v3",
          "eth_signTypedData_v4",
          "personal_sign",
        ]),
        (t.stateMethods = ["eth_accounts", "eth_chainId", "net_version"]),
        (t.infuraNetworks = {
          1: "mainnet",
          3: "ropsten",
          4: "rinkeby",
          5: "goerli",
          42: "kovan",
        });
    },
    1209: function (e, t, r) {
      "use strict";
      var n = r(536);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.STANDARD_ERROR_MAP =
          t.SERVER_ERROR_CODE_RANGE =
          t.RESERVED_ERROR_CODES =
          t.SERVER_ERROR =
          t.INTERNAL_ERROR =
          t.INVALID_PARAMS =
          t.METHOD_NOT_FOUND =
          t.INVALID_REQUEST =
          t.PARSE_ERROR =
            void 0),
        (t.PARSE_ERROR = "PARSE_ERROR"),
        (t.INVALID_REQUEST = "INVALID_REQUEST"),
        (t.METHOD_NOT_FOUND = "METHOD_NOT_FOUND"),
        (t.INVALID_PARAMS = "INVALID_PARAMS"),
        (t.INTERNAL_ERROR = "INTERNAL_ERROR"),
        (t.SERVER_ERROR = "SERVER_ERROR"),
        (t.RESERVED_ERROR_CODES = [-32700, -32600, -32601, -32602, -32603]),
        (t.SERVER_ERROR_CODE_RANGE = [-32e3, -32099]),
        (t.STANDARD_ERROR_MAP =
          (n((r = {}), t.PARSE_ERROR, { code: -32700, message: "Parse error" }),
          n(r, t.INVALID_REQUEST, { code: -32600, message: "Invalid Request" }),
          n(r, t.METHOD_NOT_FOUND, {
            code: -32601,
            message: "Method not found",
          }),
          n(r, t.INVALID_PARAMS, { code: -32602, message: "Invalid params" }),
          n(r, t.INTERNAL_ERROR, { code: -32603, message: "Internal error" }),
          n(r, t.SERVER_ERROR, { code: -32e3, message: "Server error" }),
          r));
    },
    1210: function (e, t, r) {
      "use strict";
      var n = r(366);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IEvents = void 0),
        (t.IEvents = function e() {
          n(this, e);
        });
    },
    1211: function (e, t, r) {
      "use strict";
      var n = r(366),
        i = r(1107),
        o = r(1108);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IJsonRpcProvider =
          t.IBaseJsonRpcProvider =
          t.IJsonRpcConnection =
            void 0);
      var a = r(1210);
      r = (function (e) {
        i(r, e);
        var t = o(r);
        function r(e) {
          return n(this, r), t.call(this);
        }
        return r;
      })(a.IEvents);
      t.IJsonRpcConnection = r;
      var s = (function (e) {
        i(r, e);
        var t = o(r);
        function r() {
          return n(this, r), t.call(this);
        }
        return r;
      })(a.IEvents);
      (t.IBaseJsonRpcProvider = s),
        (t.IJsonRpcProvider = (function () {
          i(t, s);
          var e = o(t);
          function t(r) {
            return n(this, t), e.call(this);
          }
          return t;
        })());
    },
    1230: function (e, t) {
      var r = {}.toString;
      e.exports =
        Array.isArray ||
        function (e) {
          return "[object Array]" == r.call(e);
        };
    },
    1231: function (e, t) {
      (t.L = { bit: 1 }),
        (t.M = { bit: 0 }),
        (t.Q = { bit: 3 }),
        (t.H = { bit: 2 }),
        (t.isValid = function (e) {
          return e && void 0 !== e.bit && 0 <= e.bit && e.bit < 4;
        }),
        (t.from = function (e, r) {
          if (t.isValid(e)) return e;
          try {
            return (function (e) {
              if ("string" != typeof e)
                throw new Error("Param is not a string");
              switch (e.toLowerCase()) {
                case "l":
                case "low":
                  return t.L;
                case "m":
                case "medium":
                  return t.M;
                case "q":
                case "quartile":
                  return t.Q;
                case "h":
                case "high":
                  return t.H;
                default:
                  throw new Error("Unknown EC Level: " + e);
              }
            })(e);
          } catch (e) {
            return r;
          }
        });
    },
    1232: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n =
        ((i.prototype.addEventListener = function (e, t) {
          (e = e.toLowerCase()),
            (this.listeners[e] = this.listeners[e] || []),
            this.listeners[e].push(t.handleEvent || t);
        }),
        (i.prototype.removeEventListener = function (e, t) {
          (e = e.toLowerCase()),
            this.listeners[e] &&
              ((t = this.listeners[e].indexOf(t.handleEvent || t)) < 0 ||
                this.listeners[e].splice(t, 1));
        }),
        (i.prototype.dispatchEvent = function (e) {
          var t = e.type.toLowerCase();
          if ((e.target = this).listeners[t])
            for (var r = 0, n = this.listeners[t]; r < n.length; r++)
              n[r].call(this, e);
          return (t = this["on" + t]) && t.call(this, e), !0;
        }),
        i);
      function i() {
        this.listeners = {};
      }
      t.XMLHttpRequestEventTarget = n;
    },
    1233: function (e, t, r) {
      "use strict";
      (function (t) {
        var n = r(100);
        function i(e, t) {
          if (e === t) return 0;
          for (
            var r = e.length, n = t.length, i = 0, o = Math.min(r, n);
            i < o;
            ++i
          )
            if (e[i] !== t[i]) {
              (r = e[i]), (n = t[i]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }
        function o(e) {
          return t.Buffer && "function" == typeof t.Buffer.isBuffer
            ? t.Buffer.isBuffer(e)
            : !(null == e || !e._isBuffer);
        }
        var a = r(1134),
          s = Object.prototype.hasOwnProperty,
          u = Array.prototype.slice,
          c = "foo" === function () {}.name;
        function f(e) {
          return Object.prototype.toString.call(e);
        }
        function l(e) {
          return (
            !o(e) &&
            "function" == typeof t.ArrayBuffer &&
            ("function" == typeof ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e &&
                (e instanceof DataView ||
                  !!(e.buffer && e.buffer instanceof ArrayBuffer)))
          );
        }
        var h = (e.exports = m),
          d = /\s*function\s+([^\(\s]*)\s*/;
        function p(e) {
          if (a.isFunction(e))
            return c ? e.name : (e = e.toString().match(d)) && e[1];
        }
        function v(e, t) {
          return "string" != typeof e || e.length < t ? e : e.slice(0, t);
        }
        function g(e) {
          return c || !a.isFunction(e)
            ? a.inspect(e)
            : "[Function" + ((e = p(e)) ? ": " + e : "") + "]";
        }
        function _(e, t, r, n, i) {
          throw new h.AssertionError({
            message: r,
            actual: e,
            expected: t,
            operator: n,
            stackStartFunction: i,
          });
        }
        function m(e, t) {
          e || _(e, !0, t, "==", h.ok);
        }
        function y(e, t, r, n) {
          if (e === t) return !0;
          if (o(e) && o(t)) return 0 === i(e, t);
          if (a.isDate(e) && a.isDate(t)) return e.getTime() === t.getTime();
          if (a.isRegExp(e) && a.isRegExp(t))
            return (
              e.source === t.source &&
              e.global === t.global &&
              e.multiline === t.multiline &&
              e.lastIndex === t.lastIndex &&
              e.ignoreCase === t.ignoreCase
            );
          if (
            (null !== e && "object" == typeof e) ||
            (null !== t && "object" == typeof t)
          ) {
            if (
              l(e) &&
              l(t) &&
              f(e) === f(t) &&
              !(e instanceof Float32Array || e instanceof Float64Array)
            )
              return (
                0 === i(new Uint8Array(e.buffer), new Uint8Array(t.buffer))
              );
            if (o(e) !== o(t)) return !1;
            var s = (n = n || { actual: [], expected: [] }).actual.indexOf(e);
            return (
              (-1 !== s && s === n.expected.indexOf(t)) ||
              (n.actual.push(e),
              n.expected.push(t),
              (function (e, t, r, n) {
                if (null == e || null == t) return !1;
                if (a.isPrimitive(e) || a.isPrimitive(t)) return e === t;
                if (r && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t))
                  return !1;
                var i = w(e),
                  o = w(t);
                if ((i && !o) || (!i && o)) return !1;
                if (i) return y((e = u.call(e)), (t = u.call(t)), r);
                var s,
                  c,
                  f = x(e),
                  l = x(t);
                if (f.length !== l.length) return !1;
                for (f.sort(), l.sort(), c = f.length - 1; 0 <= c; c--)
                  if (f[c] !== l[c]) return !1;
                for (c = f.length - 1; 0 <= c; c--)
                  if (!y(e[(s = f[c])], t[s], r, n)) return !1;
                return !0;
              })(e, t, r, n))
            );
          }
          return r ? e === t : e == t;
        }
        function w(e) {
          return "[object Arguments]" == Object.prototype.toString.call(e);
        }
        function b(e, t) {
          if (e && t) {
            if ("[object RegExp]" == Object.prototype.toString.call(t))
              return t.test(e);
            try {
              if (e instanceof t) return 1;
            } catch (e) {}
            return Error.isPrototypeOf(t) ? void 0 : !0 === t.call({}, e);
          }
        }
        function E(e, t, r, n) {
          var i;
          if ("function" != typeof t)
            throw new TypeError('"block" argument must be a function');
          "string" == typeof r && ((n = r), (r = null)),
            (i = (function (e) {
              var t;
              try {
                e();
              } catch (e) {
                t = e;
              }
              return t;
            })(t)),
            (n =
              (r && r.name ? " (" + r.name + ")." : ".") + (n ? " " + n : ".")),
            e && !i && _(i, r, "Missing expected exception" + n);
          var o = "string" == typeof n;
          t = !e && i && !r;
          if (
            (((!e && a.isError(i) && o && b(i, r)) || t) &&
              _(i, r, "Got unwanted exception" + n),
            (e && i && r && !b(i, r)) || (!e && i))
          )
            throw i;
        }
        (h.AssertionError = function (e) {
          (this.name = "AssertionError"),
            (this.actual = e.actual),
            (this.expected = e.expected),
            (this.operator = e.operator),
            e.message
              ? ((this.message = e.message), (this.generatedMessage = !1))
              : ((this.message =
                  v(g((t = this).actual), 128) +
                  " " +
                  t.operator +
                  " " +
                  v(g(t.expected), 128)),
                (this.generatedMessage = !0));
          var t = e.stackStartFunction || _;
          Error.captureStackTrace
            ? Error.captureStackTrace(this, t)
            : (e = new Error()).stack &&
              ((e = e.stack),
              (t = p(t)),
              0 <= (t = e.indexOf("\n" + t)) &&
                ((t = e.indexOf("\n", t + 1)), (e = e.substring(t + 1))),
              (this.stack = e));
        }),
          a.inherits(h.AssertionError, Error),
          (h.fail = _),
          (h.ok = m),
          (h.equal = function (e, t, r) {
            e != t && _(e, t, r, "==", h.equal);
          }),
          (h.notEqual = function (e, t, r) {
            e == t && _(e, t, r, "!=", h.notEqual);
          }),
          (h.deepEqual = function (e, t, r) {
            y(e, t, !1) || _(e, t, r, "deepEqual", h.deepEqual);
          }),
          (h.deepStrictEqual = function (e, t, r) {
            y(e, t, !0) || _(e, t, r, "deepStrictEqual", h.deepStrictEqual);
          }),
          (h.notDeepEqual = function (e, t, r) {
            y(e, t, !1) && _(e, t, r, "notDeepEqual", h.notDeepEqual);
          }),
          (h.notDeepStrictEqual = function e(t, r, n) {
            y(t, r, !0) && _(t, r, n, "notDeepStrictEqual", e);
          }),
          (h.strictEqual = function (e, t, r) {
            e !== t && _(e, t, r, "===", h.strictEqual);
          }),
          (h.notStrictEqual = function (e, t, r) {
            e === t && _(e, t, r, "!==", h.notStrictEqual);
          }),
          (h.throws = function (e, t, r) {
            E(!0, e, t, r);
          }),
          (h.doesNotThrow = function (e, t, r) {
            E(!1, e, t, r);
          }),
          (h.ifError = function (e) {
            if (e) throw e;
          }),
          (h.strict = n(
            function e(t, r) {
              t || _(t, !0, r, "==", e);
            },
            h,
            {
              equal: h.strictEqual,
              deepEqual: h.deepStrictEqual,
              notEqual: h.notStrictEqual,
              notDeepEqual: h.notDeepStrictEqual,
            }
          )),
          (h.strict.strict = h.strict);
        var x =
          Object.keys ||
          function (e) {
            var t,
              r = [];
            for (t in e) s.call(e, t) && r.push(t);
            return r;
          };
      }.call(this, r(96)));
    },
    1235: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return function () {
            var t;
            null !== e && ((t = e), (e = null), t.apply(this, arguments));
          };
        }),
        (e.exports = t.default);
    },
    1236: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return function () {
            if (null === e) throw new Error("Callback was already called.");
            var t = e;
            (e = null), t.apply(this, arguments);
          };
        }),
        (e.exports = t.default);
    },
    1237: function (e, t, r) {
      var n = r(1590),
        i = r(148);
      e.exports = function (e) {
        return i({ id: n(), jsonrpc: "2.0", params: [] }, e);
      };
    },
    1238: function (e, t, r) {
      var n = r(366),
        i = r(367),
        o = r(1107),
        a = r(1108),
        s = r(1188);
      e.exports = (function () {
        "use strict";
        o(t, s);
        var e = a(t);
        function t(r) {
          var i;
          if ((n(this, t), (i = e.call(this)), !r))
            throw new Error(
              "JsonRpcEngineMiddlewareSubprovider - no constructorFn specified"
            );
          return (i._constructorFn = r), i;
        }
        return (
          i(t, [
            {
              key: "setEngine",
              value: function (e) {
                if (this.middleware)
                  throw new Error(
                    "JsonRpcEngineMiddlewareSubprovider - subprovider added to engine twice"
                  );
                var t = e._blockTracker;
                if (
                  !(t = this._constructorFn({
                    engine: e,
                    provider: e,
                    blockTracker: t,
                  }))
                )
                  throw new Error(
                    "JsonRpcEngineMiddlewareSubprovider - _constructorFn did not return middleware"
                  );
                if ("function" != typeof t)
                  throw new Error(
                    "JsonRpcEngineMiddlewareSubprovider - specified middleware is not a function"
                  );
                this.middleware = t;
              },
            },
            {
              key: "handleRequest",
              value: function (e, t, r) {
                var n = { id: e.id };
                this.middleware(
                  e,
                  n,
                  function (e) {
                    t(function (t, r, i) {
                      t
                        ? (delete n.result,
                          (n.error = { message: t.message || t }))
                        : (n.result = r),
                        e ? e(i) : i();
                    });
                  },
                  function (e) {
                    if (e) return r(e);
                    r(null, n.result);
                  }
                );
              },
            },
          ]),
          t
        );
      })();
    },
    1243: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ecdhUnsafe =
            t.ecdh =
            t.recover =
            t.verify =
            t.sign =
            t.signatureImportLax =
            t.signatureImport =
            t.signatureExport =
            t.signatureNormalize =
            t.publicKeyCombine =
            t.publicKeyTweakMul =
            t.publicKeyTweakAdd =
            t.publicKeyVerify =
            t.publicKeyConvert =
            t.publicKeyCreate =
            t.privateKeyTweakMul =
            t.privateKeyTweakAdd =
            t.privateKeyModInverse =
            t.privateKeyNegate =
            t.privateKeyImport =
            t.privateKeyExport =
            t.privateKeyVerify =
              void 0);
        var n = r(1344),
          i = r(1619),
          o = r(1620);
        (t.privateKeyVerify = function (e) {
          return 32 === e.length && n.privateKeyVerify(Uint8Array.from(e));
        }),
          (t.privateKeyExport = function (e, t) {
            if (32 !== e.length)
              throw new RangeError("private key length is invalid");
            var r = i.privateKeyExport(e, t);
            return o.privateKeyExport(e, r, t);
          }),
          (t.privateKeyImport = function (e) {
            if (
              null !== (e = o.privateKeyImport(e)) &&
              32 === e.length &&
              t.privateKeyVerify(e)
            )
              return e;
            throw new Error("couldn't import from DER format");
          }),
          (t.privateKeyNegate = function (t) {
            return e.from(n.privateKeyNegate(Uint8Array.from(t)));
          }),
          (t.privateKeyModInverse = function (t) {
            if (32 !== t.length)
              throw new Error("private key length is invalid");
            return e.from(i.privateKeyModInverse(Uint8Array.from(t)));
          }),
          (t.privateKeyTweakAdd = function (t, r) {
            return e.from(n.privateKeyTweakAdd(Uint8Array.from(t), r));
          }),
          (t.privateKeyTweakMul = function (t, r) {
            return e.from(
              n.privateKeyTweakMul(Uint8Array.from(t), Uint8Array.from(r))
            );
          }),
          (t.publicKeyCreate = function (t, r) {
            return e.from(n.publicKeyCreate(Uint8Array.from(t), r));
          }),
          (t.publicKeyConvert = function (t, r) {
            return e.from(n.publicKeyConvert(Uint8Array.from(t), r));
          }),
          (t.publicKeyVerify = function (e) {
            return (
              (33 === e.length || 65 === e.length) &&
              n.publicKeyVerify(Uint8Array.from(e))
            );
          }),
          (t.publicKeyTweakAdd = function (t, r, i) {
            return e.from(
              n.publicKeyTweakAdd(Uint8Array.from(t), Uint8Array.from(r), i)
            );
          }),
          (t.publicKeyTweakMul = function (t, r, i) {
            return e.from(
              n.publicKeyTweakMul(Uint8Array.from(t), Uint8Array.from(r), i)
            );
          }),
          (t.publicKeyCombine = function (t, r) {
            var i = [];
            return (
              t.forEach(function (e) {
                i.push(Uint8Array.from(e));
              }),
              e.from(n.publicKeyCombine(i, r))
            );
          }),
          (t.signatureNormalize = function (t) {
            return e.from(n.signatureNormalize(Uint8Array.from(t)));
          }),
          (t.signatureExport = function (t) {
            return e.from(n.signatureExport(Uint8Array.from(t)));
          }),
          (t.signatureImport = function (t) {
            return e.from(n.signatureImport(Uint8Array.from(t)));
          }),
          (t.signatureImportLax = function (e) {
            if (0 === e.length)
              throw new RangeError("signature length is invalid");
            if (null === (e = o.signatureImportLax(e)))
              throw new Error("couldn't parse DER signature");
            return i.signatureImport(e);
          }),
          (t.sign = function (t, r, i) {
            if (null === i) throw new TypeError("options should be an Object");
            var o = void 0;
            if (i) {
              if (((o = {}), null === i.data))
                throw new TypeError("options.data should be a Buffer");
              if (i.data) {
                if (32 != i.data.length)
                  throw new RangeError("options.data length is invalid");
                o.data = new Uint8Array(i.data);
              }
              if (null === i.noncefn)
                throw new TypeError("options.noncefn should be a Function");
              i.noncefn &&
                (o.noncefn = function (t, r, n, o, a) {
                  var s = null != n ? e.from(n) : null;
                  (n = null != o ? e.from(o) : null), (o = e.from(""));
                  return (
                    i.noncefn && (o = i.noncefn(e.from(t), e.from(r), s, n, a)),
                    new Uint8Array(o)
                  );
                });
            }
            return (
              (o = n.ecdsaSign(Uint8Array.from(t), Uint8Array.from(r), o)),
              { signature: e.from(o.signature), recovery: o.recid }
            );
          }),
          (t.verify = function (e, t, r) {
            return n.ecdsaVerify(Uint8Array.from(t), Uint8Array.from(e), r);
          }),
          (t.recover = function (t, r, i, o) {
            return e.from(
              n.ecdsaRecover(Uint8Array.from(r), i, Uint8Array.from(t), o)
            );
          }),
          (t.ecdh = function (t, r) {
            return e.from(n.ecdh(Uint8Array.from(t), Uint8Array.from(r), {}));
          }),
          (t.ecdhUnsafe = function (t, r, n) {
            if (33 !== t.length && 65 !== t.length)
              throw new RangeError("public key length is invalid");
            if (32 !== r.length)
              throw new RangeError("private key length is invalid");
            return e.from(
              i.ecdhUnsafe(Uint8Array.from(t), Uint8Array.from(r), n)
            );
          });
      }.call(this, r(532).Buffer));
    },
    1244: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.rlphash =
            t.ripemd160 =
            t.sha256 =
            t.keccak256 =
            t.keccak =
              void 0);
        var n = r(1343),
          i = n.keccak224,
          o = n.keccak384,
          a = n.keccak256,
          s = n.keccak512,
          u = r(1129),
          c = r(1148),
          f = r(1185),
          l = r(1163);
        (t.keccak = function (t, r) {
          switch (
            (void 0 === r && (r = 256),
            (t =
              "string" != typeof t || c.isHexString(t)
                ? l.toBuffer(t)
                : e.from(t, "utf8")),
            (r = r || 256))
          ) {
            case 224:
              return i(t);
            case 256:
              return a(t);
            case 384:
              return o(t);
            case 512:
              return s(t);
            default:
              throw new Error("Invald algorithm: keccak" + r);
          }
        }),
          (t.keccak256 = function (e) {
            return t.keccak(e);
          }),
          (t.sha256 = function (e) {
            return (e = l.toBuffer(e)), u("sha256").update(e).digest();
          }),
          (t.ripemd160 = function (e, t) {
            return (
              (e = l.toBuffer(e)),
              (e = u("rmd160").update(e).digest()),
              !0 === t ? l.setLength(e, 32) : e
            );
          }),
          (t.rlphash = function (e) {
            return t.keccak(f.encode(e));
          });
      }.call(this, r(532).Buffer));
    },
    1267: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(113);
      n.__exportStar(r(1268), t),
        n.__exportStar(r(1269), t),
        n.__exportStar(r(1270), t),
        n.__exportStar(r(1384), t),
        n.__exportStar(r(1385), t);
    },
    1268: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getClientMeta =
          t.getLocalStorage =
          t.getLocalStorageOrThrow =
          t.getCrypto =
          t.getCryptoOrThrow =
          t.getLocation =
          t.getLocationOrThrow =
          t.getNavigator =
          t.getNavigatorOrThrow =
          t.getDocument =
          t.getDocumentOrThrow =
          t.getFromWindowOrThrow =
          t.getFromWindow =
          t.isBrowser =
          t.isNode =
          t.isMobile =
          t.isIOS =
          t.detectOS =
          t.detectEnv =
            void 0);
      var n = (i = r(113)).__importStar(r(1379)),
        i = i.__importStar(r(1381)),
        o = r(1382);
      function a(e) {
        return o.detect(e);
      }
      function s() {
        var e = a();
        return e && e.os ? e.os : void 0;
      }
      function u() {
        var e = a();
        return !(!e || !e.name) && "node" === e.name.toLowerCase();
      }
      (t.detectEnv = a),
        (t.detectOS = s),
        (t.isIOS = function () {
          var e = s();
          return !!e && e.toLowerCase().includes("ios");
        }),
        (t.isMobile = function () {
          var e = s();
          return (
            !!e &&
            (e.toLowerCase().includes("android") ||
              e.toLowerCase().includes("ios"))
          );
        }),
        (t.isNode = u),
        (t.isBrowser = function () {
          return !u() && !!t.getNavigator();
        }),
        (t.getFromWindow = i.getFromWindow),
        (t.getFromWindowOrThrow = i.getFromWindowOrThrow),
        (t.getDocumentOrThrow = i.getDocumentOrThrow),
        (t.getDocument = i.getDocument),
        (t.getNavigatorOrThrow = i.getNavigatorOrThrow),
        (t.getNavigator = i.getNavigator),
        (t.getLocationOrThrow = i.getLocationOrThrow),
        (t.getLocation = i.getLocation),
        (t.getCryptoOrThrow = i.getCryptoOrThrow),
        (t.getCrypto = i.getCrypto),
        (t.getLocalStorageOrThrow = i.getLocalStorageOrThrow),
        (t.getLocalStorage = i.getLocalStorage),
        (t.getClientMeta = function () {
          return n.getWindowMetadata();
        });
    },
    1269: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.safeJsonStringify = t.safeJsonParse = void 0),
        (r = r(113).__importStar(r(1383))),
        (t.safeJsonParse = r.safeJsonParse),
        (t.safeJsonStringify = r.safeJsonStringify);
    },
    1270: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.removeLocal = t.getLocal = t.setLocal = void 0);
      var n = r(1269),
        i = r(1268);
      (t.setLocal = function (e, t) {
        var r = n.safeJsonStringify(t);
        (t = i.getLocalStorage()) && t.setItem(e, r);
      }),
        (t.getLocal = function (e) {
          var t = null,
            r = i.getLocalStorage();
          return r && (t = r.getItem(e)), n.safeJsonParse(t);
        }),
        (t.removeLocal = function (e) {
          var t = i.getLocalStorage();
          t && t.removeItem(e);
        });
    },
    1271: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.convertNumberToHex =
          t.convertNumberToUtf8 =
          t.convertNumberToArrayBuffer =
          t.convertNumberToBuffer =
          t.convertHexToNumber =
          t.convertHexToUtf8 =
          t.convertHexToArrayBuffer =
          t.convertHexToBuffer =
          t.convertUtf8ToNumber =
          t.convertUtf8ToHex =
          t.convertUtf8ToBuffer =
          t.convertUtf8ToArrayBuffer =
          t.concatBuffers =
          t.convertBufferToNumber =
          t.convertBufferToHex =
          t.convertBufferToUtf8 =
          t.convertBufferToArrayBuffer =
          t.concatArrayBuffers =
          t.convertArrayBufferToNumber =
          t.convertArrayBufferToHex =
          t.convertArrayBufferToUtf8 =
          t.convertArrayBufferToBuffer =
            void 0);
      var n = r(113),
        i = n.__importDefault(r(1386)),
        o = n.__importStar(r(1122));
      (t.convertArrayBufferToBuffer = function (e) {
        return o.arrayToBuffer(new Uint8Array(e));
      }),
        (t.convertArrayBufferToUtf8 = function (e) {
          return o.arrayToUtf8(new Uint8Array(e));
        }),
        (t.convertArrayBufferToHex = function (e, t) {
          return o.arrayToHex(new Uint8Array(e), !t);
        }),
        (t.convertArrayBufferToNumber = function (e) {
          return o.arrayToNumber(new Uint8Array(e));
        }),
        (t.concatArrayBuffers = function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return o.hexToArray(
            t
              .map(function (e) {
                return o.arrayToHex(new Uint8Array(e));
              })
              .join("")
          ).buffer;
        }),
        (t.convertBufferToArrayBuffer = function (e) {
          return o.bufferToArray(e).buffer;
        }),
        (t.convertBufferToUtf8 = function (e) {
          return o.bufferToUtf8(e);
        }),
        (t.convertBufferToHex = function (e, t) {
          return o.bufferToHex(e, !t);
        }),
        (t.convertBufferToNumber = function (e) {
          return o.bufferToNumber(e);
        }),
        (t.concatBuffers = function () {
          return o.concatBuffers.apply(o, arguments);
        }),
        (t.convertUtf8ToArrayBuffer = function (e) {
          return o.utf8ToArray(e).buffer;
        }),
        (t.convertUtf8ToBuffer = function (e) {
          return o.utf8ToBuffer(e);
        }),
        (t.convertUtf8ToHex = function (e, t) {
          return o.utf8ToHex(e, !t);
        }),
        (t.convertUtf8ToNumber = function (e) {
          return new i.default(e, 10).toNumber();
        }),
        (t.convertHexToBuffer = function (e) {
          return o.hexToBuffer(e);
        }),
        (t.convertHexToArrayBuffer = function (e) {
          return o.hexToArray(e).buffer;
        }),
        (t.convertHexToUtf8 = function (e) {
          return o.hexToUtf8(e);
        }),
        (t.convertHexToNumber = function (e) {
          return new i.default(o.removeHexPrefix(e), "hex").toNumber();
        }),
        (t.convertNumberToBuffer = function (e) {
          return o.numberToBuffer(e);
        }),
        (t.convertNumberToArrayBuffer = function (e) {
          return o.numberToArray(e).buffer;
        }),
        (t.convertNumberToUtf8 = function (e) {
          return new i.default(e).toString();
        }),
        (t.convertNumberToHex = function (e, t) {
          return (
            (e = o.removeHexPrefix(
              o.sanitizeHex(new i.default(e).toString(16))
            )),
            t ? e : o.addHexPrefix(e)
          );
        });
    },
    1272: function (e, t) {
      ((e.exports = i).strict = o), (i.loose = a);
      var r = Object.prototype.toString,
        n = {
          "[object Int8Array]": !0,
          "[object Int16Array]": !0,
          "[object Int32Array]": !0,
          "[object Uint8Array]": !0,
          "[object Uint8ClampedArray]": !0,
          "[object Uint16Array]": !0,
          "[object Uint32Array]": !0,
          "[object Float32Array]": !0,
          "[object Float64Array]": !0,
        };
      function i(e) {
        return o(e) || a(e);
      }
      function o(e) {
        return (
          e instanceof Int8Array ||
          e instanceof Int16Array ||
          e instanceof Int32Array ||
          e instanceof Uint8Array ||
          e instanceof Uint8ClampedArray ||
          e instanceof Uint16Array ||
          e instanceof Uint32Array ||
          e instanceof Float32Array ||
          e instanceof Float64Array
        );
      }
      function a(e) {
        return n[r.call(e)];
      }
    },
    1273: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getRpcUrl =
          t.getInfuraRpcUrl =
          t.logDeprecationWarning =
          t.uuid =
          t.payloadId =
          t.removeHexLeadingZeros =
          t.removeHexPrefix =
          t.addHexPrefix =
          t.sanitizeHex =
            void 0);
      var n = (i = r(113)).__importStar(r(1122)),
        i = i.__importStar(r(1395)),
        o = r(1208);
      function a(e, t) {
        var r;
        return (e = o.infuraNetworks[e])
          ? "https://".concat(e, ".infura.io/v3/").concat(t)
          : r;
      }
      (t.sanitizeHex = function (e) {
        return n.sanitizeHex(e);
      }),
        (t.addHexPrefix = function (e) {
          return n.addHexPrefix(e);
        }),
        (t.removeHexPrefix = function (e) {
          return n.removeHexPrefix(e);
        }),
        (t.removeHexLeadingZeros = function (e) {
          return n.removeHexLeadingZeros(n.addHexPrefix(e));
        }),
        (t.payloadId = i.payloadId),
        (t.uuid = function () {
          return (function (e, t) {
            for (
              t = e = "";
              e++ < 36;
              t +=
                (51 * e) & 52
                  ? (15 ^ e
                      ? 8 ^ (Math.random() * (20 ^ e ? 16 : 4))
                      : 4
                    ).toString(16)
                  : "-"
            );
            return t;
          })();
        }),
        (t.logDeprecationWarning = function () {}),
        (t.getInfuraRpcUrl = a),
        (t.getRpcUrl = function (e, t) {
          var r,
            n = a(e, t.infuraId);
          return t.custom && t.custom[e] ? (r = t.custom[e]) : n && (r = n), r;
        });
    },
    1274: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.validateJsonRpcError =
          t.getErrorByCode =
          t.getError =
          t.isValidErrorCode =
          t.isReservedErrorCode =
          t.isServerErrorCode =
            void 0);
      var n = r(1209);
      function i(e) {
        return n.RESERVED_ERROR_CODES.includes(e);
      }
      function o(e) {
        return "number" == typeof e;
      }
      function a(e) {
        return (
          Object.values(n.STANDARD_ERROR_MAP).find(function (t) {
            return t.code === e;
          }) || n.STANDARD_ERROR_MAP[n.INTERNAL_ERROR]
        );
      }
      (t.isServerErrorCode = function (e) {
        return (
          e <= n.SERVER_ERROR_CODE_RANGE[0] && e >= n.SERVER_ERROR_CODE_RANGE[1]
        );
      }),
        (t.isReservedErrorCode = i),
        (t.isValidErrorCode = o),
        (t.getError = function (e) {
          return Object.keys(n.STANDARD_ERROR_MAP).includes(e)
            ? n.STANDARD_ERROR_MAP[e]
            : n.STANDARD_ERROR_MAP[n.INTERNAL_ERROR];
        }),
        (t.getErrorByCode = a),
        (t.validateJsonRpcError = function (e) {
          if (void 0 === e.error.code)
            return { valid: !1, error: "Missing code for JSON-RPC error" };
          if (void 0 === e.error.message)
            return { valid: !1, error: "Missing message for JSON-RPC error" };
          if (!o(e.error.code))
            return {
              valid: !1,
              error: "Invalid error code type for JSON-RPC: ".concat(
                e.error.code
              ),
            };
          if (i(e.error.code)) {
            var t = a(e.error.code);
            if (
              t.message !== n.STANDARD_ERROR_MAP[n.INTERNAL_ERROR].message &&
              e.error.message === t.message
            )
              return {
                valid: !1,
                error: "Invalid error code message for JSON-RPC: ".concat(
                  e.error.code
                ),
              };
          }
          return { valid: !0 };
        });
    },
    1275: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  });
              }
            : function (e, t, r, n) {
                e[(n = void 0 === n ? r : n)] = t[r];
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e)
              "default" === r || t.hasOwnProperty(r) || n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        i(r(1397), t),
        i(r(1398), t);
    },
    1276: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isSilentPayload =
          t.isReservedEvent =
          t.isInternalEvent =
          t.isJsonRpcResponseError =
          t.isJsonRpcResponseSuccess =
          t.isJsonRpcRequest =
          t.isJsonRpcSubscription =
          t.isHexString =
          t.getEncoding =
          t.getType =
          t.isArrayBuffer =
          t.isTypedArray =
          t.isBuffer =
          t.isEmptyArray =
          t.isEmptyString =
            void 0);
      var n = r(113).__importStar(r(1122)),
        i = r(1208);
      (t.isEmptyString = function (e) {
        return "" === e || ("string" == typeof e && "" === e.trim());
      }),
        (t.isEmptyArray = function (e) {
          return !(e && e.length);
        }),
        (t.isBuffer = function (e) {
          return n.isBuffer(e);
        }),
        (t.isTypedArray = function (e) {
          return n.isTypedArray(e);
        }),
        (t.isArrayBuffer = function (e) {
          return n.isArrayBuffer(e);
        }),
        (t.getType = function (e) {
          return n.getType(e);
        }),
        (t.getEncoding = function (e) {
          return n.getEncoding(e);
        }),
        (t.isHexString = function (e, t) {
          return n.isHexString(e, t);
        }),
        (t.isJsonRpcSubscription = function (e) {
          return "object" == typeof e.params;
        }),
        (t.isJsonRpcRequest = function (e) {
          return void 0 !== e.method;
        }),
        (t.isJsonRpcResponseSuccess = function (e) {
          return void 0 !== e.result;
        }),
        (t.isJsonRpcResponseError = function (e) {
          return void 0 !== e.error;
        }),
        (t.isInternalEvent = function (e) {
          return void 0 !== e.event;
        }),
        (t.isReservedEvent = function (e) {
          return i.reservedEvents.includes(e) || e.startsWith("wc_");
        }),
        (t.isSilentPayload = function (e) {
          return (
            !!e.method.startsWith("wc_") || !i.signingMethods.includes(e.method)
          );
        });
    },
    1277: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.formatQueryString =
          t.parseQueryString =
          t.appendToQueryString =
          t.getQueryString =
            void 0);
      var n = r(113).__importStar(r(1412));
      function i(e) {
        return n.parse(e);
      }
      function o(e) {
        return n.stringify(e);
      }
      (t.getQueryString = function (e) {
        var t = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0;
        return void 0 !== t ? e.substr(t) : "";
      }),
        (t.appendToQueryString = function (e, t) {
          var r = i(e);
          return o((r = Object.assign(Object.assign({}, r), t)));
        }),
        (t.parseQueryString = i),
        (t.formatQueryString = o);
    },
    1278: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  });
              }
            : function (e, t, r, n) {
                e[(n = void 0 === n ? r : n)] = t[r];
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e)
              "default" === r || t.hasOwnProperty(r) || n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        i(r(1429), t),
        i(r(1430), t),
        i(r(1432), t);
    },
    1336: function (e, t, r) {
      var n = r(1231),
        i = [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4,
          4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8,
          10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6,
          11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23,
          25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12,
          23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29,
          40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51,
          60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74,
          24, 47, 65, 77, 25, 49, 68, 81,
        ],
        o = [
          7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48,
          72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110,
          160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308,
          104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280,
          408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650,
          224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504,
          750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952,
          1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140,
          1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350,
          1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590,
          1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
          2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
        ];
      (t.getBlocksCount = function (e, t) {
        switch (t) {
          case n.L:
            return i[4 * (e - 1) + 0];
          case n.M:
            return i[4 * (e - 1) + 1];
          case n.Q:
            return i[4 * (e - 1) + 2];
          case n.H:
            return i[4 * (e - 1) + 3];
          default:
            return;
        }
      }),
        (t.getTotalCodewordsCount = function (e, t) {
          switch (t) {
            case n.L:
              return o[4 * (e - 1) + 0];
            case n.M:
              return o[4 * (e - 1) + 1];
            case n.Q:
              return o[4 * (e - 1) + 2];
            case n.H:
              return o[4 * (e - 1) + 3];
            default:
              return;
          }
        });
    },
    1337: function (e, t) {
      t.isValid = function (e) {
        return !isNaN(e) && 1 <= e && e <= 40;
      };
    },
    1338: function (e, t) {
      var r =
          "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
        n =
          "(?:(?![A-Z0-9 $%*+\\-./:]|" +
          (r = r.replace(/u/g, "\\u")) +
          ")(?:.|[\r\n]))+";
      (t.KANJI = new RegExp(r, "g")),
        (t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
        (t.BYTE = new RegExp(n, "g")),
        (t.NUMERIC = new RegExp("[0-9]+", "g")),
        (t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g"));
      var i = new RegExp("^" + r + "$"),
        o = new RegExp("^[0-9]+$"),
        a = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      (t.testKanji = function (e) {
        return i.test(e);
      }),
        (t.testNumeric = function (e) {
          return o.test(e);
        }),
        (t.testAlphanumeric = function (e) {
          return a.test(e);
        });
    },
    1339: function (e, t) {
      function r(e) {
        if ("string" != typeof (e = "number" == typeof e ? e.toString() : e))
          throw new Error("Color should be defined as hex string");
        var t = e.slice().replace("#", "").split("");
        if (t.length < 3 || 5 === t.length || 8 < t.length)
          throw new Error("Invalid hex color: " + e);
        return (
          6 ===
            (t =
              3 === t.length || 4 === t.length
                ? Array.prototype.concat.apply(
                    [],
                    t.map(function (e) {
                      return [e, e];
                    })
                  )
                : t).length && t.push("F", "F"),
          {
            r: ((e = parseInt(t.join(""), 16)) >> 24) & 255,
            g: (e >> 16) & 255,
            b: (e >> 8) & 255,
            a: 255 & e,
            hex: "#" + t.slice(0, 6).join(""),
          }
        );
      }
      (t.getOptions = function (e) {
        (e = e || {}).color || (e.color = {});
        var t =
            void 0 === e.margin || null === e.margin || e.margin < 0
              ? 4
              : e.margin,
          n = e.width && 21 <= e.width ? e.width : void 0,
          i = e.scale || 4;
        return {
          width: n,
          scale: n ? 4 : i,
          margin: t,
          color: {
            dark: r(e.color.dark || "#000000ff"),
            light: r(e.color.light || "#ffffffff"),
          },
          type: e.type,
          rendererOpts: e.rendererOpts || {},
        };
      }),
        (t.getScale = function (e, t) {
          return t.width && t.width >= e + 2 * t.margin
            ? t.width / (e + 2 * t.margin)
            : t.scale;
        }),
        (t.getImageWidth = function (e, r) {
          var n = t.getScale(e, r);
          return Math.floor((e + 2 * r.margin) * n);
        }),
        (t.qrToImageData = function (e, r, n) {
          for (
            var i = r.modules.size,
              o = r.modules.data,
              a = t.getScale(i, n),
              s = Math.floor((i + 2 * n.margin) * a),
              u = n.margin * a,
              c = [n.color.light, n.color.dark],
              f = 0;
            f < s;
            f++
          )
            for (var l = 0; l < s; l++) {
              var h = 4 * (f * s + l),
                d = n.color.light;
              u <= f &&
                u <= l &&
                f < s - u &&
                l < s - u &&
                (d =
                  c[
                    o[Math.floor((f - u) / a) * i + Math.floor((l - u) / a)]
                      ? 1
                      : 0
                  ]),
                (e[h++] = d.r),
                (e[h++] = d.g),
                (e[h++] = d.b),
                (e[h] = d.a);
            }
        });
    },
    1340: function (e, t, r) {
      (function (e) {
        var n = r(1545),
          i = r(1342),
          o = r(148),
          a = r(1547),
          s = r(533),
          u = t;
        (u.request = function (t, r) {
          t = "string" == typeof t ? s.parse(t) : o(t);
          var i = -1 === e.location.protocol.search(/^https?:$/) ? "http:" : "",
            a = t.protocol || i,
            u = t.hostname || t.host,
            c = t.port;
          i = t.path || "/";
          return (
            u && -1 !== u.indexOf(":") && (u = "[" + u + "]"),
            (t.url = (u ? a + "//" + u : "") + (c ? ":" + c : "") + i),
            (t.method = (t.method || "GET").toUpperCase()),
            (t.headers = t.headers || {}),
            (t = new n(t)),
            r && t.on("response", r),
            t
          );
        }),
          (u.get = function (e, t) {
            return (t = u.request(e, t)).end(), t;
          }),
          (u.ClientRequest = n),
          (u.IncomingMessage = i.IncomingMessage),
          (u.Agent = function () {}),
          (u.Agent.defaultMaxSockets = 4),
          (u.globalAgent = new u.Agent()),
          (u.STATUS_CODES = a),
          (u.METHODS = [
            "CHECKOUT",
            "CONNECT",
            "COPY",
            "DELETE",
            "GET",
            "HEAD",
            "LOCK",
            "M-SEARCH",
            "MERGE",
            "MKACTIVITY",
            "MKCOL",
            "MOVE",
            "NOTIFY",
            "OPTIONS",
            "PATCH",
            "POST",
            "PROPFIND",
            "PROPPATCH",
            "PURGE",
            "PUT",
            "REPORT",
            "SEARCH",
            "SUBSCRIBE",
            "TRACE",
            "UNLOCK",
            "UNSUBSCRIBE",
          ]);
      }.call(this, r(96)));
    },
    1341: function (e, t, r) {
      (function (e) {
        (t.fetch = s(e.fetch) && s(e.ReadableStream)),
          (t.writableStream = s(e.WritableStream)),
          (t.abortController = s(e.AbortController)),
          (t.blobConstructor = !1);
        try {
          new Blob([new ArrayBuffer(1)]), (t.blobConstructor = !0);
        } catch (e) {}
        var r;
        function n() {
          if (void 0 !== r) return r;
          if (e.XMLHttpRequest) {
            r = new e.XMLHttpRequest();
            try {
              r.open("GET", e.XDomainRequest ? "/" : "https://example.com");
            } catch (e) {
              r = null;
            }
          } else r = null;
          return r;
        }
        function i(e) {
          var t = n();
          if (!t) return !1;
          try {
            return (t.responseType = e), t.responseType === e;
          } catch (e) {}
          return !1;
        }
        var o = void 0 !== e.ArrayBuffer,
          a = o && s(e.ArrayBuffer.prototype.slice);
        function s(e) {
          return "function" == typeof e;
        }
        (t.arraybuffer = t.fetch || (o && i("arraybuffer"))),
          (t.msstream = !t.fetch && a && i("ms-stream")),
          (t.mozchunkedarraybuffer =
            !t.fetch && o && i("moz-chunked-arraybuffer")),
          (t.overrideMimeType = t.fetch || (!!n() && s(n().overrideMimeType))),
          (t.vbArray = s(e.VBArray)),
          (r = null);
      }.call(this, r(96)));
    },
    1342: function (e, t, r) {
      (function (e, n, i) {
        var o = r(1341),
          a = r(300),
          s = r(1156),
          u = (t.readyStates = {
            UNSENT: 0,
            OPENED: 1,
            HEADERS_RECEIVED: 2,
            LOADING: 3,
            DONE: 4,
          }),
          c = (t.IncomingMessage = function (t, r, a, u) {
            var c = this;
            if (
              (s.Readable.call(c),
              (c._mode = a),
              (c.headers = {}),
              (c.rawHeaders = []),
              (c.trailers = {}),
              (c.rawTrailers = []),
              c.on("end", function () {
                e.nextTick(function () {
                  c.emit("close");
                });
              }),
              "fetch" === a)
            ) {
              if (
                ((c._fetchResponse = r),
                (c.url = r.url),
                (c.statusCode = r.status),
                (c.statusMessage = r.statusText),
                r.headers.forEach(function (e, t) {
                  (c.headers[t.toLowerCase()] = e), c.rawHeaders.push(t, e);
                }),
                o.writableStream)
              ) {
                a = new WritableStream({
                  write: function (e) {
                    return new Promise(function (t, r) {
                      c._destroyed
                        ? r()
                        : c.push(new i(e))
                        ? t()
                        : (c._resumeFetch = t);
                    });
                  },
                  close: function () {
                    n.clearTimeout(u), c._destroyed || c.push(null);
                  },
                  abort: function (e) {
                    c._destroyed || c.emit("error", e);
                  },
                });
                try {
                  return void r.body.pipeTo(a).catch(function (e) {
                    n.clearTimeout(u), c._destroyed || c.emit("error", e);
                  });
                } catch (t) {}
              }
              var f = r.body.getReader();
              !(function e() {
                f.read()
                  .then(function (t) {
                    if (!c._destroyed) {
                      if (t.done) return n.clearTimeout(u), void c.push(null);
                      c.push(new i(t.value)), e();
                    }
                  })
                  .catch(function (e) {
                    n.clearTimeout(u), c._destroyed || c.emit("error", e);
                  });
              })();
            } else
              (c._xhr = t),
                (c._pos = 0),
                (c.url = t.responseURL),
                (c.statusCode = t.status),
                (c.statusMessage = t.statusText),
                t
                  .getAllResponseHeaders()
                  .split(/\r?\n/)
                  .forEach(function (e) {
                    var t = e.match(/^([^:]+):\s*(.*)/);
                    t &&
                      ("set-cookie" === (e = t[1].toLowerCase())
                        ? (void 0 === c.headers[e] && (c.headers[e] = []),
                          c.headers[e].push(t[2]))
                        : void 0 !== c.headers[e]
                        ? (c.headers[e] += ", " + t[2])
                        : (c.headers[e] = t[2]),
                      c.rawHeaders.push(t[1], t[2]));
                  }),
                (c._charset = "x-user-defined"),
                o.overrideMimeType ||
                  (!(t = c.rawHeaders["mime-type"]) ||
                    ((t = t.match(/;\s*charset=([^;])(;|$)/)) &&
                      (c._charset = t[1].toLowerCase())),
                  c._charset || (c._charset = "utf-8"));
          });
        a(c, s.Readable),
          (c.prototype._read = function () {
            var e = this._resumeFetch;
            e && ((this._resumeFetch = null), e());
          }),
          (c.prototype._onXHRProgress = function () {
            var e = this,
              t = e._xhr,
              r = null;
            switch (e._mode) {
              case "text:vbarray":
                if (t.readyState !== u.DONE) break;
                try {
                  r = new n.VBArray(t.responseBody).toArray();
                } catch (t) {}
                if (null !== r) {
                  e.push(new i(r));
                  break;
                }
              case "text":
                try {
                  r = t.responseText;
                } catch (t) {
                  e._mode = "text:vbarray";
                  break;
                }
                if (r.length > e._pos) {
                  var o = r.substr(e._pos);
                  if ("x-user-defined" === e._charset) {
                    for (var a = new i(o.length), s = 0; s < o.length; s++)
                      a[s] = 255 & o.charCodeAt(s);
                    e.push(a);
                  } else e.push(o, e._charset);
                  e._pos = r.length;
                }
                break;
              case "arraybuffer":
                if (t.readyState !== u.DONE || !t.response) break;
                (r = t.response), e.push(new i(new Uint8Array(r)));
                break;
              case "moz-chunked-arraybuffer":
                if (((r = t.response), t.readyState !== u.LOADING || !r)) break;
                e.push(new i(new Uint8Array(r)));
                break;
              case "ms-stream":
                if (((r = t.response), t.readyState !== u.LOADING)) break;
                var c = new n.MSStreamReader();
                (c.onprogress = function () {
                  c.result.byteLength > e._pos &&
                    (e.push(new i(new Uint8Array(c.result.slice(e._pos)))),
                    (e._pos = c.result.byteLength));
                }),
                  (c.onload = function () {
                    e.push(null);
                  }),
                  c.readAsArrayBuffer(r);
            }
            e._xhr.readyState === u.DONE &&
              "ms-stream" !== e._mode &&
              e.push(null);
          });
      }.call(this, r(162), r(96), r(532).Buffer));
    },
    1343: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(1557),
        i = r(1558);
      (t.keccak224 = n.createHashFunction(function () {
        return i("keccak224");
      })),
        (t.keccak256 = n.createHashFunction(function () {
          return i("keccak256");
        })),
        (t.keccak384 = n.createHashFunction(function () {
          return i("keccak384");
        })),
        (t.keccak512 = n.createHashFunction(function () {
          return i("keccak512");
        }));
    },
    1344: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__awaiter) ||
          function (e, t, r, n) {
            return new (r = r || Promise)(function (i, o) {
              function a(e) {
                try {
                  u(n.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function s(e) {
                try {
                  u(n.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value) instanceof r
                      ? t
                      : new r(function (e) {
                          e(t);
                        })
                    ).then(a, s);
              }
              u((n = n.apply(e, t || [])).next());
            });
          },
        i =
          (this && this.__generator) ||
          function (e, t) {
            var r,
              n,
              i,
              o = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              },
              a = { next: s(0), throw: s(1), return: s(2) };
            return (
              "function" == typeof Symbol &&
                (a[Symbol.iterator] = function () {
                  return this;
                }),
              a
            );
            function s(a) {
              return function (s) {
                return (function (a) {
                  if (r) throw new TypeError("Generator is already executing.");
                  for (; o; )
                    try {
                      if (
                        ((r = 1),
                        n &&
                          (i =
                            2 & a[0]
                              ? n.return
                              : a[0]
                              ? n.throw || ((i = n.return) && i.call(n), 0)
                              : n.next) &&
                          !(i = i.call(n, a[1])).done)
                      )
                        return i;
                      switch (((n = 0), (a = i ? [2 & a[0], i.value] : a)[0])) {
                        case 0:
                        case 1:
                          i = a;
                          break;
                        case 4:
                          return o.label++, { value: a[1], done: !1 };
                        case 5:
                          o.label++, (n = a[1]), (a = [0]);
                          continue;
                        case 7:
                          (a = o.ops.pop()), o.trys.pop();
                          continue;
                        default:
                          if (
                            !(i = 0 < (i = o.trys).length && i[i.length - 1]) &&
                            (6 === a[0] || 2 === a[0])
                          ) {
                            o = 0;
                            continue;
                          }
                          if (
                            3 === a[0] &&
                            (!i || (a[1] > i[0] && a[1] < i[3]))
                          ) {
                            o.label = a[1];
                            break;
                          }
                          if (6 === a[0] && o.label < i[1]) {
                            (o.label = i[1]), (i = a);
                            break;
                          }
                          if (i && o.label < i[2]) {
                            (o.label = i[2]), o.ops.push(a);
                            break;
                          }
                          i[2] && o.ops.pop(), o.trys.pop();
                          continue;
                      }
                      a = t.call(e, o);
                    } catch (s) {
                      (a = [6, s]), (n = 0);
                    } finally {
                      r = i = 0;
                    }
                  if (5 & a[0]) throw a[1];
                  return { value: a[0] ? a[1] : void 0, done: !0 };
                })([a, s]);
              };
            }
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(1345),
        a = r(1567);
      (t.createPrivateKey = function () {
        return n(this, void 0, void 0, function () {
          var e;
          return i(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, a.getRandomBytes(32)];
              case 1:
                return (e = t.sent()), o.privateKeyVerify(e) ? [2, e] : [3, 0];
              case 2:
                return [2];
            }
          });
        });
      }),
        (t.createPrivateKeySync = function () {
          for (;;) {
            var e = a.getRandomBytesSync(32);
            if (o.privateKeyVerify(e)) return e;
          }
        }),
        (function (e) {
          for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
        })(r(1345));
    },
    1345: function (e, t, r) {
      e.exports = r(1565)(r(1566));
    },
    1346: function (e, t) {
      e.exports = function (e) {
        if ("string" != typeof e)
          throw new Error(
            "[is-hex-prefixed] value must be type 'string', is currently type " +
              typeof e +
              ", while checking isHexPrefixed."
          );
        return "0x" === e.slice(0, 2);
      };
    },
    1350: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t, r) {
          ((0, n.default)(e) ? h : d)(e, (0, f.default)(t), r);
        });
      var n = l(r(241)),
        i = l(r(1351)),
        o = l(r(1576)),
        a = l(r(1353)),
        s = l(r(1161)),
        u = l(r(1235)),
        c = l(r(1236)),
        f = l(r(1135));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function h(e, t, r) {
        r = (0, u.default)(r || s.default);
        var n = 0,
          o = 0,
          a = e.length;
        function f(e, t) {
          e ? r(e) : (++o !== a && t !== i.default) || r(null);
        }
        for (0 === a && r(null); n < a; n++) t(e[n], n, (0, c.default)(f));
      }
      var d = (0, a.default)(o.default, 1 / 0);
      e.exports = t.default;
    },
    1351: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = {}),
        (e.exports = t.default);
    },
    1352: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return function (t, r, u) {
            if (((u = (0, i.default)(u || n.default)), e <= 0 || !t))
              return u(null);
            var c = (0, o.default)(t),
              f = !1,
              l = 0,
              h = !1;
            function d(e, t) {
              if ((--l, e)) (f = !0), u(e);
              else {
                if (t === s.default || (f && l <= 0)) return (f = !0), u(null);
                h || p();
              }
            }
            function p() {
              for (h = !0; l < e && !f; ) {
                var t = c();
                if (null === t) return (f = !0), void (l <= 0 && u(null));
                (l += 1), r(t.value, t.key, (0, a.default)(d));
              }
              h = !1;
            }
            p();
          };
        });
      var n = u(r(1161)),
        i = u(r(1235)),
        o = u(r(1577)),
        a = u(r(1236)),
        s = u(r(1351));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    1353: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          return function (r, n, i) {
            return e(r, t, n, i);
          };
        }),
        (e.exports = t.default);
    },
    1354: function (e, t, r) {
      var n = r(1355);
      function i(e) {
        return "never" !== s(e);
      }
      function o(e) {
        var t = a(e);
        return t >= e.params.length
          ? e.params
          : "eth_getBlockByNumber" === e.method
          ? e.params.slice(1)
          : e.params.slice(0, t);
      }
      function a(e) {
        switch (e.method) {
          case "eth_getStorageAt":
            return 2;
          case "eth_getBalance":
          case "eth_getCode":
          case "eth_getTransactionCount":
          case "eth_call":
          case "eth_estimateGas":
            return 1;
          case "eth_getBlockByNumber":
            return 0;
          default:
            return;
        }
      }
      function s(e) {
        switch (e.method) {
          case "web3_clientVersion":
          case "web3_sha3":
          case "eth_protocolVersion":
          case "eth_getBlockTransactionCountByHash":
          case "eth_getUncleCountByBlockHash":
          case "eth_getCode":
          case "eth_getBlockByHash":
          case "eth_getTransactionByHash":
          case "eth_getTransactionByBlockHashAndIndex":
          case "eth_getTransactionReceipt":
          case "eth_getUncleByBlockHashAndIndex":
          case "eth_getCompilers":
          case "eth_compileLLL":
          case "eth_compileSolidity":
          case "eth_compileSerpent":
          case "shh_version":
            return "perma";
          case "eth_getBlockByNumber":
          case "eth_getBlockTransactionCountByNumber":
          case "eth_getUncleCountByBlockNumber":
          case "eth_getTransactionByBlockNumberAndIndex":
          case "eth_getUncleByBlockNumberAndIndex":
            return "fork";
          case "eth_gasPrice":
          case "eth_getBalance":
          case "eth_getStorageAt":
          case "eth_getTransactionCount":
          case "eth_call":
          case "eth_estimateGas":
          case "eth_getFilterLogs":
          case "eth_getLogs":
          case "eth_blockNumber":
            return "block";
          case "net_version":
          case "net_peerCount":
          case "net_listening":
          case "eth_syncing":
          case "eth_sign":
          case "eth_coinbase":
          case "eth_mining":
          case "eth_hashrate":
          case "eth_accounts":
          case "eth_sendTransaction":
          case "eth_sendRawTransaction":
          case "eth_newFilter":
          case "eth_newBlockFilter":
          case "eth_newPendingTransactionFilter":
          case "eth_uninstallFilter":
          case "eth_getFilterChanges":
          case "eth_getWork":
          case "eth_submitWork":
          case "eth_submitHashrate":
          case "db_putString":
          case "db_getString":
          case "db_putHex":
          case "db_getHex":
          case "shh_post":
          case "shh_newIdentity":
          case "shh_hasIdentity":
          case "shh_newGroup":
          case "shh_addToGroup":
          case "shh_newFilter":
          case "shh_uninstallFilter":
          case "shh_getFilterChanges":
          case "shh_getMessages":
            return "never";
        }
      }
      e.exports = {
        cacheIdentifierForPayload: function (e) {
          var t =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
          return i(e)
            ? ((t = t.includeBlockRef ? e.params : o(e)), e.method + ":" + n(t))
            : null;
        },
        canCache: i,
        blockTagForPayload: function (e) {
          var t = a(e);
          return t >= e.params.length ? null : e.params[t];
        },
        paramsWithoutBlockTag: o,
        blockTagParamIndex: a,
        cacheTypeForPayload: s,
      };
    },
    1355: function (e, t, r) {
      var n = "undefined" != typeof JSON ? JSON : r(1587);
      e.exports = function (e, t) {
        var r =
          (t = "function" == typeof (t = t || {}) ? { cmp: t } : t).space || "";
        "number" == typeof r && (r = Array(r + 1).join(" "));
        var a,
          s = "boolean" == typeof t.cycles && t.cycles,
          u =
            t.replacer ||
            function (e, t) {
              return t;
            },
          c =
            t.cmp &&
            ((a = t.cmp),
            function (e) {
              return function (t, r) {
                return (
                  (t = { key: t, value: e[t] }),
                  (r = { key: r, value: e[r] }),
                  a(t, r)
                );
              };
            }),
          f = [];
        return (function e(t, a, l, h) {
          var d = r ? "\n" + new Array(h + 1).join(r) : "",
            p = r ? ": " : ":";
          if (
            (l && l.toJSON && "function" == typeof l.toJSON && (l = l.toJSON()),
            void 0 !== (l = u.call(t, a, l)))
          ) {
            if ("object" != typeof l || null === l) return n.stringify(l);
            if (i(l)) {
              for (var v = [], g = 0; g < l.length; g++) {
                var _ = e(l, g, l[g], h + 1) || n.stringify(null);
                v.push(d + r + _);
              }
              return "[" + v.join(",") + d + "]";
            }
            if (-1 !== f.indexOf(l)) {
              if (s) return n.stringify("__cycle__");
              throw new TypeError("Converting circular structure to JSON");
            }
            f.push(l);
            var m = o(l).sort(c && c(l));
            for (v = [], g = 0; g < m.length; g++) {
              var y = e(l, (a = m[g]), l[a], h + 1);
              y && ((y = n.stringify(a) + p + y), v.push(d + r + y));
            }
            return f.splice(f.indexOf(l), 1), "{" + v.join(",") + d + "}";
          }
        })({ "": e }, "", e, 0);
      };
      var i =
          Array.isArray ||
          function (e) {
            return "[object Array]" === {}.toString.call(e);
          },
        o =
          Object.keys ||
          function (e) {
            var t,
              r =
                Object.prototype.hasOwnProperty ||
                function () {
                  return !0;
                },
              n = [];
            for (t in e) r.call(e, t) && n.push(t);
            return n;
          };
    },
    1377: function (e, t, r) {
      "use strict";
      var n = r(366),
        i = r(1107),
        o = r(1108);
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = r(113),
        s = a.__importDefault(r(1378)),
        u = a.__importStar(r(1425));
      s = (function (e) {
        i(r, e);
        var t = o(r);
        function r(e, i) {
          return (
            n(this, r),
            t.call(this, { cryptoLib: u, connectorOpts: e, pushServerOpts: i })
          );
        }
        return r;
      })(s.default);
      t.default = s;
    },
    1378: function (e, t, r) {
      "use strict";
      var n = r(7),
        i = r(366),
        o = r(367);
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = r(113),
        s = r(1127),
        u = a.__importDefault(r(1419)),
        c = r(1422),
        f = a.__importDefault(r(1423)),
        l = a.__importDefault(r(1424));
      r = (function () {
        function e(t) {
          if (
            (i(this, e),
            (this.protocol = "wc"),
            (this.version = 1),
            (this._bridge = ""),
            (this._key = null),
            (this._clientId = ""),
            (this._clientMeta = null),
            (this._peerId = ""),
            (this._peerMeta = null),
            (this._handshakeId = 0),
            (this._handshakeTopic = ""),
            (this._connected = !1),
            (this._accounts = []),
            (this._chainId = 0),
            (this._networkId = 0),
            (this._rpcUrl = ""),
            (this._eventManager = new f.default()),
            (this._clientMeta =
              s.getClientMeta() || t.connectorOpts.clientMeta || null),
            (this._cryptoLib = t.cryptoLib),
            (this._sessionStorage = t.sessionStorage || new l.default()),
            (this._qrcodeModal = t.connectorOpts.qrcodeModal),
            (this._qrcodeModalOptions = t.connectorOpts.qrcodeModalOptions),
            !t.connectorOpts.bridge &&
              !t.connectorOpts.uri &&
              !t.connectorOpts.session)
          )
            throw new Error(c.ERROR_MISSING_REQUIRED);
          t.connectorOpts.bridge && (this.bridge = t.connectorOpts.bridge),
            t.connectorOpts.uri && (this.uri = t.connectorOpts.uri);
          var r = t.connectorOpts.session || this._getStorageSession();
          r && (this.session = r),
            this.handshakeId &&
              this._subscribeToSessionResponse(
                this.handshakeId,
                "Session request rejected"
              ),
            (this._transport =
              t.transport ||
              new u.default({
                protocol: this.protocol,
                version: this.version,
                url: this.bridge,
                subscriptions: [this.clientId],
              })),
            this._subscribeToInternalEvents(),
            this._initTransport(),
            t.connectorOpts.uri && this._subscribeToSessionRequest(),
            t.pushServerOpts && this._registerPushServer(t.pushServerOpts);
        }
        return (
          o(e, [
            {
              key: "bridge",
              get: function () {
                return this._bridge;
              },
              set: function (e) {
                e && (this._bridge = e);
              },
            },
            {
              key: "key",
              get: function () {
                return this._key
                  ? s.convertArrayBufferToHex(this._key, !0)
                  : "";
              },
              set: function (e) {
                e && ((e = s.convertHexToArrayBuffer(e)), (this._key = e));
              },
            },
            {
              key: "clientId",
              get: function () {
                return (
                  this._clientId || (this._clientId = s.uuid()), this._clientId
                );
              },
              set: function (e) {
                e && (this._clientId = e);
              },
            },
            {
              key: "peerId",
              get: function () {
                return this._peerId;
              },
              set: function (e) {
                e && (this._peerId = e);
              },
            },
            {
              key: "clientMeta",
              get: function () {
                return (
                  this._clientMeta || (this._clientMeta = s.getClientMeta())
                );
              },
              set: function (e) {},
            },
            {
              key: "peerMeta",
              get: function () {
                return this._peerMeta;
              },
              set: function (e) {
                this._peerMeta = e;
              },
            },
            {
              key: "handshakeTopic",
              get: function () {
                return this._handshakeTopic;
              },
              set: function (e) {
                e && (this._handshakeTopic = e);
              },
            },
            {
              key: "handshakeId",
              get: function () {
                return this._handshakeId;
              },
              set: function (e) {
                e && (this._handshakeId = e);
              },
            },
            {
              key: "uri",
              get: function () {
                return this._formatUri();
              },
              set: function (e) {
                var t, r;
                e &&
                  ((t = (r = this._parseUri(e)).handshakeTopic),
                  (e = r.bridge),
                  (r = r.key),
                  (this.handshakeTopic = t),
                  (this.bridge = e),
                  (this.key = r));
              },
            },
            {
              key: "chainId",
              get: function () {
                return this._chainId;
              },
              set: function (e) {
                this._chainId = e;
              },
            },
            {
              key: "networkId",
              get: function () {
                return this._networkId;
              },
              set: function (e) {
                this._networkId = e;
              },
            },
            {
              key: "accounts",
              get: function () {
                return this._accounts;
              },
              set: function (e) {
                this._accounts = e;
              },
            },
            {
              key: "rpcUrl",
              get: function () {
                return this._rpcUrl;
              },
              set: function (e) {
                this._rpcUrl = e;
              },
            },
            {
              key: "connected",
              get: function () {
                return this._connected;
              },
              set: function (e) {},
            },
            {
              key: "pending",
              get: function () {
                return !!this._handshakeTopic;
              },
              set: function (e) {},
            },
            {
              key: "session",
              get: function () {
                return {
                  connected: this.connected,
                  accounts: this.accounts,
                  chainId: this.chainId,
                  bridge: this.bridge,
                  key: this.key,
                  clientId: this.clientId,
                  clientMeta: this.clientMeta,
                  peerId: this.peerId,
                  peerMeta: this.peerMeta,
                  handshakeId: this.handshakeId,
                  handshakeTopic: this.handshakeTopic,
                };
              },
              set: function (e) {
                e &&
                  ((this._connected = e.connected),
                  (this.accounts = e.accounts),
                  (this.chainId = e.chainId),
                  (this.bridge = e.bridge),
                  (this.key = e.key),
                  (this.clientId = e.clientId),
                  (this.clientMeta = e.clientMeta),
                  (this.peerId = e.peerId),
                  (this.peerMeta = e.peerMeta),
                  (this.handshakeId = e.handshakeId),
                  (this.handshakeTopic = e.handshakeTopic));
              },
            },
            {
              key: "on",
              value: function (e, t) {
                this._eventManager.subscribe({ event: e, callback: t });
              },
            },
            {
              key: "createInstantRequest",
              value: function (e) {
                return a.__awaiter(
                  this,
                  void 0,
                  void 0,
                  n.mark(function t() {
                    var r,
                      i,
                      o = this;
                    return n.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), this._generateKey();
                            case 2:
                              return (
                                (this._key = t.sent),
                                (i = this._formatRequest({
                                  method: "wc_instantRequest",
                                  params: [
                                    {
                                      peerId: this.clientId,
                                      peerMeta: this.clientMeta,
                                      request: this._formatRequest(e),
                                    },
                                  ],
                                })),
                                (this.handshakeId = i.id),
                                (this.handshakeTopic = s.uuid()),
                                this._eventManager.trigger({
                                  event: "display_uri",
                                  params: [this.uri],
                                }),
                                this.on("modal_closed", function () {
                                  throw new Error(
                                    c.ERROR_QRCODE_MODAL_USER_CLOSED
                                  );
                                }),
                                (r = function () {
                                  o.killSession();
                                }),
                                (t.prev = 9),
                                (t.next = 12),
                                this._sendCallRequest(i)
                              );
                            case 12:
                              return (i = t.sent) && r(), t.abrupt("return", i);
                            case 17:
                              throw (
                                ((t.prev = 17), (t.t0 = t.catch(9)), r(), t.t0)
                              );
                            case 21:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this,
                      [[9, 17]]
                    );
                  })
                );
              },
            },
            {
              key: "connect",
              value: function (e) {
                return a.__awaiter(
                  this,
                  void 0,
                  void 0,
                  n.mark(function t() {
                    var r = this;
                    return n.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (this._qrcodeModal) {
                                t.next = 2;
                                break;
                              }
                              throw new Error(
                                c.ERROR_QRCODE_MODAL_NOT_PROVIDED
                              );
                            case 2:
                              if (this.connected)
                                return t.abrupt("return", {
                                  chainId: this.chainId,
                                  accounts: this.accounts,
                                });
                              t.next = 4;
                              break;
                            case 4:
                              return (t.next = 6), this.createSession(e);
                            case 6:
                              return t.abrupt(
                                "return",
                                new Promise(function (e, t) {
                                  return a.__awaiter(
                                    r,
                                    void 0,
                                    void 0,
                                    n.mark(function r() {
                                      return n.wrap(
                                        function (r) {
                                          for (;;)
                                            switch ((r.prev = r.next)) {
                                              case 0:
                                                this.on(
                                                  "modal_closed",
                                                  function () {
                                                    return t(
                                                      new Error(
                                                        c.ERROR_QRCODE_MODAL_USER_CLOSED
                                                      )
                                                    );
                                                  }
                                                ),
                                                  this.on(
                                                    "connect",
                                                    function (r, n) {
                                                      return r
                                                        ? t(r)
                                                        : void e(n.params[0]);
                                                    }
                                                  );
                                              case 2:
                                              case "end":
                                                return r.stop();
                                            }
                                        },
                                        r,
                                        this
                                      );
                                    })
                                  );
                                })
                              );
                            case 7:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "createSession",
              value: function (e) {
                return a.__awaiter(
                  this,
                  void 0,
                  void 0,
                  n.mark(function t() {
                    var r;
                    return n.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (this._connected)
                                throw new Error(c.ERROR_SESSION_CONNECTED);
                              t.next = 2;
                              break;
                            case 2:
                              if (this.pending) return t.abrupt("return");
                              t.next = 4;
                              break;
                            case 4:
                              return (t.next = 6), this._generateKey();
                            case 6:
                              (this._key = t.sent),
                                (r = this._formatRequest({
                                  method: "wc_sessionRequest",
                                  params: [
                                    {
                                      peerId: this.clientId,
                                      peerMeta: this.clientMeta,
                                      chainId:
                                        e && e.chainId ? e.chainId : null,
                                    },
                                  ],
                                })),
                                (this.handshakeId = r.id),
                                (this.handshakeTopic = s.uuid()),
                                this._sendSessionRequest(
                                  r,
                                  "Session update rejected",
                                  { topic: this.handshakeTopic }
                                ),
                                this._eventManager.trigger({
                                  event: "display_uri",
                                  params: [this.uri],
                                });
                            case 12:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "approveSession",
              value: function (e) {
                if (this._connected) throw new Error(c.ERROR_SESSION_CONNECTED);
                (this.chainId = e.chainId),
                  (this.accounts = e.accounts),
                  (this.networkId = e.networkId || 0),
                  (this.rpcUrl = e.rpcUrl || ""),
                  (e = {
                    approved: !0,
                    chainId: this.chainId,
                    networkId: this.networkId,
                    accounts: this.accounts,
                    rpcUrl: this.rpcUrl,
                    peerId: this.clientId,
                    peerMeta: this.clientMeta,
                  }),
                  (e = { id: this.handshakeId, jsonrpc: "2.0", result: e }),
                  this._sendResponse(e),
                  (this._connected = !0),
                  this._setStorageSession(),
                  this._eventManager.trigger({
                    event: "connect",
                    params: [
                      {
                        peerId: this.peerId,
                        peerMeta: this.peerMeta,
                        chainId: this.chainId,
                        accounts: this.accounts,
                      },
                    ],
                  });
              },
            },
            {
              key: "rejectSession",
              value: function (e) {
                if (this._connected) throw new Error(c.ERROR_SESSION_CONNECTED);
                var t = e && e.message ? e.message : c.ERROR_SESSION_REJECTED;
                e = this._formatResponse({
                  id: this.handshakeId,
                  error: { message: t },
                });
                this._sendResponse(e),
                  (this._connected = !1),
                  this._eventManager.trigger({
                    event: "disconnect",
                    params: [{ message: t }],
                  }),
                  this._removeStorageSession();
              },
            },
            {
              key: "updateSession",
              value: function (e) {
                if (!this._connected)
                  throw new Error(c.ERROR_SESSION_DISCONNECTED);
                (this.chainId = e.chainId),
                  (this.accounts = e.accounts),
                  (this.networkId = e.networkId || 0),
                  (this.rpcUrl = e.rpcUrl || ""),
                  (e = {
                    approved: !0,
                    chainId: this.chainId,
                    networkId: this.networkId,
                    accounts: this.accounts,
                    rpcUrl: this.rpcUrl,
                  }),
                  (e = this._formatRequest({
                    method: "wc_sessionUpdate",
                    params: [e],
                  })),
                  this._sendSessionRequest(e, "Session update rejected"),
                  this._eventManager.trigger({
                    event: "session_update",
                    params: [
                      { chainId: this.chainId, accounts: this.accounts },
                    ],
                  }),
                  this._manageStorageSession();
              },
            },
            {
              key: "killSession",
              value: function (e) {
                return a.__awaiter(
                  this,
                  void 0,
                  void 0,
                  n.mark(function t() {
                    var r, i;
                    return n.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (r = e ? e.message : "Session Disconnected"),
                                (i = {
                                  approved: !1,
                                  chainId: null,
                                  networkId: null,
                                  accounts: null,
                                }),
                                (i = this._formatRequest({
                                  method: "wc_sessionUpdate",
                                  params: [i],
                                })),
                                (t.next = 5),
                                this._sendRequest(i)
                              );
                            case 5:
                              this._handleSessionDisconnect(r);
                            case 6:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "sendTransaction",
              value: function (e) {
                return a.__awaiter(
                  this,
                  void 0,
                  void 0,
                  n.mark(function t() {
                    var r;
                    return n.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (this._connected) {
                                t.next = 2;
                                break;
                              }
                              throw new Error(c.ERROR_SESSION_DISCONNECTED);
                            case 2:
                              return (
                                (r = s.parseTransactionData(e)),
                                (r = this._formatRequest({
                                  method: "eth_sendTransaction",
                                  params: [r],
                                })),
                                (t.next = 6),
                                this._sendCallRequest(r)
                              );
                            case 6:
                              return (r = t.sent), t.abrupt("return", r);
                            case 8:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "signTransaction",
              value: function (e) {
                return a.__awaiter(
                  this,
                  void 0,
                  void 0,
                  n.mark(function t() {
                    var r;
                    return n.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (this._connected) {
                                t.next = 2;
                                break;
                              }
                              throw new Error(c.ERROR_SESSION_DISCONNECTED);
                            case 2:
                              return (
                                (r = s.parseTransactionData(e)),
                                (r = this._formatRequest({
                                  method: "eth_signTransaction",
                                  params: [r],
                                })),
                                (t.next = 6),
                                this._sendCallRequest(r)
                              );
                            case 6:
                              return (r = t.sent), t.abrupt("return", r);
                            case 8:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "signMessage",
              value: function (e) {
                return a.__awaiter(
                  this,
                  void 0,
                  void 0,
                  n.mark(function t() {
                    var r;
                    return n.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (this._connected) {
                                t.next = 2;
                                break;
                              }
                              throw new Error(c.ERROR_SESSION_DISCONNECTED);
                            case 2:
                              return (
                                (r = this._formatRequest({
                                  method: "eth_sign",
                                  params: e,
                                })),
                                (t.next = 5),
                                this._sendCallRequest(r)
                              );
                            case 5:
                              return (r = t.sent), t.abrupt("return", r);
                            case 7:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "signPersonalMessage",
              value: function (e) {
                return a.__awaiter(
                  this,
                  void 0,
                  void 0,
                  n.mark(function t() {
                    var r;
                    return n.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (this._connected) {
                                t.next = 2;
                                break;
                              }
                              throw new Error(c.ERROR_SESSION_DISCONNECTED);
                            case 2:
                              return (
                                (e = s.parsePersonalSign(e)),
                                (r = this._formatRequest({
                                  method: "personal_sign",
                                  params: e,
                                })),
                                (t.next = 6),
                                this._sendCallRequest(r)
                              );
                            case 6:
                              return (r = t.sent), t.abrupt("return", r);
                            case 8:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "signTypedData",
              value: function (e) {
                return a.__awaiter(
                  this,
                  void 0,
                  void 0,
                  n.mark(function t() {
                    var r;
                    return n.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (this._connected) {
                                t.next = 2;
                                break;
                              }
                              throw new Error(c.ERROR_SESSION_DISCONNECTED);
                            case 2:
                              return (
                                (r = this._formatRequest({
                                  method: "eth_signTypedData",
                                  params: e,
                                })),
                                (t.next = 5),
                                this._sendCallRequest(r)
                              );
                            case 5:
                              return (r = t.sent), t.abrupt("return", r);
                            case 7:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "updateChain",
              value: function (e) {
                return a.__awaiter(
                  this,
                  void 0,
                  void 0,
                  n.mark(function t() {
                    var r;
                    return n.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (this._connected) {
                                t.next = 2;
                                break;
                              }
                              throw new Error("Session currently disconnected");
                            case 2:
                              return (
                                (r = this._formatRequest({
                                  method: "wallet_updateChain",
                                  params: [e],
                                })),
                                (t.next = 5),
                                this._sendCallRequest(r)
                              );
                            case 5:
                              return (r = t.sent), t.abrupt("return", r);
                            case 7:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "unsafeSend",
              value: function (e, t) {
                var r = this;
                return (
                  this._sendRequest(e, t),
                  new Promise(function (t, n) {
                    r._subscribeToResponse(e.id, function (e, r) {
                      if (e) n(e);
                      else {
                        if (!r) throw new Error(c.ERROR_MISSING_JSON_RPC);
                        t(r);
                      }
                    });
                  })
                );
              },
            },
            {
              key: "sendCustomRequest",
              value: function (e, t) {
                return a.__awaiter(
                  this,
                  void 0,
                  void 0,
                  n.mark(function r() {
                    var i;
                    return n.wrap(
                      function (r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              if (this._connected) {
                                r.next = 2;
                                break;
                              }
                              throw new Error(c.ERROR_SESSION_DISCONNECTED);
                            case 2:
                              (r.t0 = e.method),
                                (r.next =
                                  "eth_accounts" === r.t0
                                    ? 5
                                    : "eth_chainId" === r.t0
                                    ? 6
                                    : "eth_sendTransaction" === r.t0 ||
                                      "eth_signTransaction" === r.t0
                                    ? 7
                                    : "personal_sign" === r.t0
                                    ? 9
                                    : 11);
                              break;
                            case 5:
                              return r.abrupt("return", this.accounts);
                            case 6:
                              return r.abrupt(
                                "return",
                                s.convertNumberToHex(this.chainId)
                              );
                            case 7:
                              return (
                                e.params &&
                                  (e.params[0] = s.parseTransactionData(
                                    e.params[0]
                                  )),
                                r.abrupt("break", 12)
                              );
                            case 9:
                              return (
                                e.params &&
                                  (e.params = s.parsePersonalSign(e.params)),
                                r.abrupt("break", 12)
                              );
                            case 11:
                              return r.abrupt("break", 12);
                            case 12:
                              return (
                                (i = this._formatRequest(e)),
                                (r.next = 15),
                                this._sendCallRequest(i, t)
                              );
                            case 15:
                              return (i = r.sent), r.abrupt("return", i);
                            case 17:
                            case "end":
                              return r.stop();
                          }
                      },
                      r,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "approveRequest",
              value: function (e) {
                if (!s.isJsonRpcResponseSuccess(e))
                  throw new Error(c.ERROR_MISSING_RESULT);
                (e = this._formatResponse(e)), this._sendResponse(e);
              },
            },
            {
              key: "rejectRequest",
              value: function (e) {
                if (!s.isJsonRpcResponseError(e))
                  throw new Error(c.ERROR_MISSING_ERROR);
                (e = this._formatResponse(e)), this._sendResponse(e);
              },
            },
            {
              key: "_sendRequest",
              value: function (e, t) {
                return a.__awaiter(
                  this,
                  void 0,
                  void 0,
                  n.mark(function r() {
                    var i, o, a, u;
                    return n.wrap(
                      function (r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              return (
                                (i = this._formatRequest(e)),
                                (r.next = 3),
                                this._encrypt(i)
                              );
                            case 3:
                              (u = r.sent),
                                (o =
                                  void 0 !== (null == t ? void 0 : t.topic)
                                    ? t.topic
                                    : this.peerId),
                                (a = JSON.stringify(u)),
                                (u =
                                  void 0 !==
                                  (null == t ? void 0 : t.forcePushNotification)
                                    ? !t.forcePushNotification
                                    : s.isSilentPayload(i)),
                                this._transport.send(a, o, u);
                            case 8:
                            case "end":
                              return r.stop();
                          }
                      },
                      r,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "_sendResponse",
              value: function (e) {
                return a.__awaiter(
                  this,
                  void 0,
                  void 0,
                  n.mark(function t() {
                    var r, i;
                    return n.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), this._encrypt(e);
                            case 2:
                              (i = t.sent),
                                (r = this.peerId),
                                (i = JSON.stringify(i)),
                                this._transport.send(i, r, !0);
                            case 7:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "_sendSessionRequest",
              value: function (e, t, r) {
                return a.__awaiter(
                  this,
                  void 0,
                  void 0,
                  n.mark(function i() {
                    return n.wrap(
                      function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              this._sendRequest(e, r),
                                this._subscribeToSessionResponse(e.id, t);
                            case 2:
                            case "end":
                              return n.stop();
                          }
                      },
                      i,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "_sendCallRequest",
              value: function (e, t) {
                return (
                  this._sendRequest(e, t),
                  this._eventManager.trigger({
                    event: "call_request_sent",
                    params: [{ request: e, options: t }],
                  }),
                  s.isMobile() &&
                    s.signingMethods.includes(e.method) &&
                    (t = s.getLocal(s.mobileLinkChoiceKey)) &&
                    (window.location.href = t.href),
                  this._subscribeToCallResponse(e.id)
                );
              },
            },
            {
              key: "_formatRequest",
              value: function (e) {
                if (void 0 === e.method)
                  throw new Error(c.ERROR_MISSING_METHOD);
                return {
                  id: void 0 === e.id ? s.payloadId() : e.id,
                  jsonrpc: "2.0",
                  method: e.method,
                  params: void 0 === e.params ? [] : e.params,
                };
              },
            },
            {
              key: "_formatResponse",
              value: function (e) {
                if (void 0 === e.id) throw new Error(c.ERROR_MISSING_ID);
                var t = { id: e.id, jsonrpc: "2.0" };
                if (s.isJsonRpcResponseError(e)) {
                  var r = s.formatRpcError(e.error);
                  return Object.assign(Object.assign(Object.assign({}, t), e), {
                    error: r,
                  });
                }
                if (s.isJsonRpcResponseSuccess(e))
                  return Object.assign(Object.assign({}, t), e);
                throw new Error(c.ERROR_INVALID_RESPONSE);
              },
            },
            {
              key: "_handleSessionDisconnect",
              value: function (e) {
                (e = e || "Session Disconnected"),
                  this._connected ||
                    (this._qrcodeModal && this._qrcodeModal.close(),
                    s.removeLocal(s.mobileLinkChoiceKey)),
                  this._connected && (this._connected = !1),
                  this._handshakeId && (this._handshakeId = 0),
                  this._handshakeTopic && (this._handshakeTopic = ""),
                  this._eventManager.trigger({
                    event: "disconnect",
                    params: [{ message: e }],
                  }),
                  this._removeStorageSession(),
                  this._transport.close();
              },
            },
            {
              key: "_handleSessionResponse",
              value: function (e, t) {
                t && t.approved
                  ? (this._connected
                      ? (t.chainId && (this.chainId = t.chainId),
                        t.accounts && (this.accounts = t.accounts),
                        this._eventManager.trigger({
                          event: "session_update",
                          params: [
                            { chainId: this.chainId, accounts: this.accounts },
                          ],
                        }))
                      : ((this._connected = !0),
                        t.chainId && (this.chainId = t.chainId),
                        t.accounts && (this.accounts = t.accounts),
                        t.peerId && !this.peerId && (this.peerId = t.peerId),
                        t.peerMeta &&
                          !this.peerMeta &&
                          (this.peerMeta = t.peerMeta),
                        this._eventManager.trigger({
                          event: "connect",
                          params: [
                            {
                              peerId: this.peerId,
                              peerMeta: this.peerMeta,
                              chainId: this.chainId,
                              accounts: this.accounts,
                            },
                          ],
                        })),
                    this._manageStorageSession())
                  : this._handleSessionDisconnect(e);
              },
            },
            {
              key: "_handleIncomingMessages",
              value: function (e) {
                return a.__awaiter(
                  this,
                  void 0,
                  void 0,
                  n.mark(function t() {
                    var r, i;
                    return n.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                [this.clientId, this.handshakeTopic].includes(
                                  e.topic
                                )
                              ) {
                                t.next = 3;
                                break;
                              }
                              return t.abrupt("return");
                            case 3:
                              (t.prev = 3),
                                (r = JSON.parse(e.payload)),
                                (t.next = 10);
                              break;
                            case 7:
                              return (
                                (t.prev = 7),
                                (t.t0 = t.catch(3)),
                                t.abrupt("return")
                              );
                            case 10:
                              return (t.next = 12), this._decrypt(r);
                            case 12:
                              (i = t.sent) && this._eventManager.trigger(i);
                            case 14:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this,
                      [[3, 7]]
                    );
                  })
                );
              },
            },
            {
              key: "_subscribeToSessionRequest",
              value: function () {
                this._transport.subscribe(this.handshakeTopic);
              },
            },
            {
              key: "_subscribeToResponse",
              value: function (e, t) {
                this.on("response:".concat(e), t);
              },
            },
            {
              key: "_subscribeToSessionResponse",
              value: function (e, t) {
                var r = this;
                this._subscribeToResponse(e, function (e, n) {
                  e
                    ? r._handleSessionResponse(e.message)
                    : n.result
                    ? r._handleSessionResponse(t, n.result)
                    : n.error && n.error.message
                    ? r._handleSessionResponse(n.error.message)
                    : r._handleSessionResponse(t);
                });
              },
            },
            {
              key: "_subscribeToCallResponse",
              value: function (e) {
                var t = this;
                return new Promise(function (r, n) {
                  t._subscribeToResponse(e, function (e, t) {
                    e
                      ? n(e)
                      : t.result
                      ? r(t.result)
                      : t.error && t.error.message
                      ? n(new Error(t.error.message))
                      : n(new Error(c.ERROR_INVALID_RESPONSE));
                  });
                });
              },
            },
            {
              key: "_subscribeToInternalEvents",
              value: function () {
                var e = this;
                this.on("display_uri", function () {
                  e._qrcodeModal &&
                    e._qrcodeModal.open(
                      e.uri,
                      function () {
                        e._eventManager.trigger({
                          event: "modal_closed",
                          params: [],
                        });
                      },
                      e._qrcodeModalOptions
                    );
                }),
                  this.on("connect", function () {
                    e._qrcodeModal && e._qrcodeModal.close();
                  }),
                  this.on("wc_sessionRequest", function (t, r) {
                    t &&
                      e._eventManager.trigger({
                        event: "error",
                        params: [
                          {
                            code: "SESSION_REQUEST_ERROR",
                            message: t.toString(),
                          },
                        ],
                      }),
                      (e.handshakeId = r.id),
                      (e.peerId = r.params[0].peerId),
                      (e.peerMeta = r.params[0].peerMeta),
                      (r = Object.assign(Object.assign({}, r), {
                        method: "session_request",
                      })),
                      e._eventManager.trigger(r);
                  }),
                  this.on("wc_sessionUpdate", function (t, r) {
                    t && e._handleSessionResponse(t.message),
                      e._handleSessionResponse(
                        "Session disconnected",
                        r.params[0]
                      );
                  });
              },
            },
            {
              key: "_initTransport",
              value: function () {
                var e = this;
                this._transport.on("message", function (t) {
                  return e._handleIncomingMessages(t);
                }),
                  this._transport.on("open", function () {
                    return e._eventManager.trigger({
                      event: "transport_open",
                      params: [],
                    });
                  }),
                  this._transport.on("close", function () {
                    return e._eventManager.trigger({
                      event: "transport_close",
                      params: [],
                    });
                  }),
                  this._transport.on("error", function () {
                    return e._eventManager.trigger({
                      event: "transport_error",
                      params: ["Websocket connection failed"],
                    });
                  }),
                  this._transport.open();
              },
            },
            {
              key: "_formatUri",
              value: function () {
                var e = this.protocol,
                  t = this.handshakeTopic,
                  r = this.version,
                  n = encodeURIComponent(this.bridge),
                  i = this.key;
                return ""
                  .concat(e, ":")
                  .concat(t, "@")
                  .concat(r, "?bridge=")
                  .concat(n, "&key=")
                  .concat(i);
              },
            },
            {
              key: "_parseUri",
              value: function (e) {
                var t = s.parseWalletConnectUri(e);
                if (t.protocol !== this.protocol)
                  throw new Error(c.ERROR_INVALID_URI);
                if (!t.handshakeTopic)
                  throw Error(
                    "Invalid or missing handshakeTopic parameter value"
                  );
                var r = t.handshakeTopic;
                if (!t.bridge)
                  throw Error("Invalid or missing bridge url parameter value");
                if (((e = decodeURIComponent(t.bridge)), !t.key))
                  throw Error("Invalid or missing key parameter value");
                return { handshakeTopic: r, bridge: e, key: t.key };
              },
            },
            {
              key: "_generateKey",
              value: function () {
                return a.__awaiter(
                  this,
                  void 0,
                  void 0,
                  n.mark(function e() {
                    var t;
                    return n.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (this._cryptoLib)
                                return (
                                  (e.next = 3), this._cryptoLib.generateKey()
                                );
                              e.next = 5;
                              break;
                            case 3:
                              return (t = e.sent), e.abrupt("return", t);
                            case 5:
                              return e.abrupt("return", null);
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "_encrypt",
              value: function (e) {
                return a.__awaiter(
                  this,
                  void 0,
                  void 0,
                  n.mark(function t() {
                    var r;
                    return n.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (((r = this._key), this._cryptoLib && r))
                                return (
                                  (t.next = 4), this._cryptoLib.encrypt(e, r)
                                );
                              t.next = 6;
                              break;
                            case 4:
                              return (r = t.sent), t.abrupt("return", r);
                            case 6:
                              return t.abrupt("return", null);
                            case 7:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "_decrypt",
              value: function (e) {
                return a.__awaiter(
                  this,
                  void 0,
                  void 0,
                  n.mark(function t() {
                    var r;
                    return n.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (((r = this._key), this._cryptoLib && r))
                                return (
                                  (t.next = 4), this._cryptoLib.decrypt(e, r)
                                );
                              t.next = 6;
                              break;
                            case 4:
                              return (r = t.sent), t.abrupt("return", r);
                            case 6:
                              return t.abrupt("return", null);
                            case 7:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
              },
            },
            {
              key: "_getStorageSession",
              value: function () {
                var e = null;
                return this._sessionStorage
                  ? this._sessionStorage.getSession()
                  : e;
              },
            },
            {
              key: "_setStorageSession",
              value: function () {
                this._sessionStorage &&
                  this._sessionStorage.setSession(this.session);
              },
            },
            {
              key: "_removeStorageSession",
              value: function () {
                this._sessionStorage && this._sessionStorage.removeSession();
              },
            },
            {
              key: "_manageStorageSession",
              value: function () {
                this._connected
                  ? this._setStorageSession()
                  : this._removeStorageSession();
              },
            },
            {
              key: "_registerPushServer",
              value: function (e) {
                var t = this;
                if (!e.url || "string" != typeof e.url)
                  throw Error(
                    "Invalid or missing pushServerOpts.url parameter value"
                  );
                if (!e.type || "string" != typeof e.type)
                  throw Error(
                    "Invalid or missing pushServerOpts.type parameter value"
                  );
                if (!e.token || "string" != typeof e.token)
                  throw Error(
                    "Invalid or missing pushServerOpts.token parameter value"
                  );
                var r = {
                  bridge: this.bridge,
                  topic: this.clientId,
                  type: e.type,
                  token: e.token,
                  peerName: "",
                  language: e.language || "",
                };
                this.on("connect", function (i, o) {
                  return a.__awaiter(
                    t,
                    void 0,
                    void 0,
                    n.mark(function t() {
                      var a;
                      return n.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (i) throw i;
                                t.next = 2;
                                break;
                              case 2:
                                return (
                                  e.peerMeta &&
                                    ((a = o.params[0].peerMeta.name),
                                    (r.peerName = a)),
                                  (t.prev = 3),
                                  (t.next = 6),
                                  fetch("".concat(e.url, "/new"), {
                                    method: "POST",
                                    headers: {
                                      Accept: "application/json",
                                      "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify(r),
                                  })
                                );
                              case 6:
                                return (a = t.sent), (t.next = 9), a.json();
                              case 9:
                                if (t.sent.success) {
                                  t.next = 12;
                                  break;
                                }
                                throw Error(
                                  "Failed to register in Push Server"
                                );
                              case 12:
                                t.next = 17;
                                break;
                              case 14:
                                throw (
                                  ((t.prev = 14),
                                  (t.t0 = t.catch(3)),
                                  Error("Failed to register in Push Server"))
                                );
                              case 17:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[3, 14]]
                      );
                    })
                  );
                });
              },
            },
          ]),
          e
        );
      })();
      t.default = r;
    },
    1379: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(1380);
      t.getWindowMetadata = function () {
        var e, t;
        try {
          (e = n.getDocumentOrThrow()), (t = n.getLocationOrThrow());
        } catch (r) {
          return null;
        }
        function r() {
          for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          for (
            var i = e.getElementsByTagName("meta"), o = 0;
            o < i.length;
            o++
          ) {
            var a = (function (e) {
              var t = i[e];
              if (
                (e = ["itemprop", "property", "name"]
                  .map(function (e) {
                    return t.getAttribute(e);
                  })
                  .filter(function (e) {
                    return !!e && r.includes(e);
                  })).length &&
                e &&
                (e = t.getAttribute("content"))
              )
                return { v: e };
            })(o);
            if ("object" == typeof a) return a.v;
          }
          return "";
        }
        var i =
          r("name", "og:site_name", "og:title", "twitter:title") || e.title;
        return {
          description: r(
            "description",
            "og:description",
            "twitter:description",
            "keywords"
          ),
          url: t.origin,
          icons: (function () {
            for (
              var r = e.getElementsByTagName("link"), n = [], i = 0;
              i < r.length;
              i++
            ) {
              var o,
                a = r[i],
                s = a.getAttribute("rel");
              s &&
                -1 < s.toLowerCase().indexOf("icon") &&
                (s = a.getAttribute("href")) &&
                (-1 === s.toLowerCase().indexOf("https:") &&
                -1 === s.toLowerCase().indexOf("http:") &&
                0 !== s.indexOf("//")
                  ? ((o = t.protocol + "//" + t.host),
                    0 === s.indexOf("/")
                      ? (o += s)
                      : ((a = t.pathname.split("/")).pop(),
                        (o += a.join("/") + "/" + s)),
                    n.push(o))
                  : 0 === s.indexOf("//")
                  ? ((o = t.protocol + s), n.push(o))
                  : n.push(s));
            }
            return n;
          })(),
          name: i,
        };
      };
    },
    1380: function (e, t, r) {
      "use strict";
      function n(e) {
        var t = void 0;
        return "undefined" != typeof window && void 0 !== window[e]
          ? window[e]
          : t;
      }
      function i(e) {
        var t = n(e);
        if (!t) throw new Error("".concat(e, " is not defined in Window"));
        return t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getFromWindow = n),
        (t.getFromWindowOrThrow = i),
        (t.getDocumentOrThrow = function () {
          return i("document");
        }),
        (t.getDocument = function () {
          return n("document");
        }),
        (t.getNavigatorOrThrow = function () {
          return i("navigator");
        }),
        (t.getNavigator = function () {
          return n("navigator");
        }),
        (t.getLocationOrThrow = function () {
          return i("location");
        }),
        (t.getLocation = function () {
          return n("location");
        }),
        (t.getCryptoOrThrow = function () {
          return i("crypto");
        }),
        (t.getCrypto = function () {
          return n("crypto");
        }),
        (t.getLocalStorageOrThrow = function () {
          return i("localStorage");
        }),
        (t.getLocalStorage = function () {
          return n("localStorage");
        });
    },
    1381: function (e, t, r) {
      "use strict";
      function n(e) {
        var t = void 0;
        return "undefined" != typeof window && void 0 !== window[e]
          ? window[e]
          : t;
      }
      function i(e) {
        var t = n(e);
        if (!t) throw new Error("".concat(e, " is not defined in Window"));
        return t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getFromWindow = n),
        (t.getFromWindowOrThrow = i),
        (t.getDocumentOrThrow = function () {
          return i("document");
        }),
        (t.getDocument = function () {
          return n("document");
        }),
        (t.getNavigatorOrThrow = function () {
          return i("navigator");
        }),
        (t.getNavigator = function () {
          return n("navigator");
        }),
        (t.getLocationOrThrow = function () {
          return i("location");
        }),
        (t.getLocation = function () {
          return n("location");
        }),
        (t.getCryptoOrThrow = function () {
          return i("crypto");
        }),
        (t.getCrypto = function () {
          return n("crypto");
        }),
        (t.getLocalStorageOrThrow = function () {
          return i("localStorage");
        }),
        (t.getLocalStorage = function () {
          return n("localStorage");
        });
    },
    1382: function (e, t, r) {
      "use strict";
      r.r(t),
        function (e) {
          r.d(t, "BrowserInfo", function () {
            return n;
          }),
            r.d(t, "NodeInfo", function () {
              return i;
            }),
            r.d(t, "SearchBotDeviceInfo", function () {
              return o;
            }),
            r.d(t, "BotInfo", function () {
              return a;
            }),
            r.d(t, "ReactNativeInfo", function () {
              return s;
            }),
            r.d(t, "detect", function () {
              return l;
            }),
            r.d(t, "browserName", function () {
              return d;
            }),
            r.d(t, "parseUserAgent", function () {
              return p;
            }),
            r.d(t, "detectOS", function () {
              return v;
            }),
            r.d(t, "getNodeVersion", function () {
              return g;
            });
          var n = function (e, t, r) {
              (this.name = e),
                (this.version = t),
                (this.os = r),
                (this.type = "browser");
            },
            i = function (t) {
              (this.version = t),
                (this.type = "node"),
                (this.name = "node"),
                (this.os = e.platform);
            },
            o = function (e, t, r, n) {
              (this.name = e),
                (this.version = t),
                (this.os = r),
                (this.bot = n),
                (this.type = "bot-device");
            },
            a = function () {
              (this.type = "bot"),
                (this.bot = !0),
                (this.name = "bot"),
                (this.version = null),
                (this.os = null);
            },
            s = function () {
              (this.type = "react-native"),
                (this.name = "react-native"),
                (this.version = null),
                (this.os = null);
            },
            u =
              /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
            c = [
              ["aol", /AOLShield\/([0-9\._]+)/],
              ["edge", /Edge\/([0-9\._]+)/],
              ["edge-ios", /EdgiOS\/([0-9\._]+)/],
              ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
              ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
              ["samsung", /SamsungBrowser\/([0-9\.]+)/],
              ["silk", /\bSilk\/([0-9._-]+)\b/],
              ["miui", /MiuiBrowser\/([0-9\.]+)$/],
              ["beaker", /BeakerBrowser\/([0-9\.]+)/],
              ["edge-chromium", /EdgA?\/([0-9\.]+)/],
              [
                "chromium-webview",
                /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
              ],
              ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
              ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
              ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
              ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
              ["fxios", /FxiOS\/([0-9\.]+)/],
              ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
              ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
              ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
              ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
              ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
              ["ie", /MSIE\s(7\.0)/],
              ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
              ["android", /Android\s([0-9\.]+)/],
              ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
              ["safari", /Version\/([0-9\._]+).*Safari/],
              ["facebook", /FBAV\/([0-9\.]+)/],
              ["instagram", /Instagram\s([0-9\.]+)/],
              ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
              ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
              [
                "searchbot",
                /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
              ],
            ],
            f = [
              ["iOS", /iP(hone|od|ad)/],
              ["Android OS", /Android/],
              ["BlackBerry OS", /BlackBerry|BB10/],
              ["Windows Mobile", /IEMobile/],
              ["Amazon OS", /Kindle/],
              ["Windows 3.11", /Win16/],
              ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
              ["Windows 98", /(Windows 98)|(Win98)/],
              ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
              ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
              ["Windows Server 2003", /(Windows NT 5.2)/],
              ["Windows Vista", /(Windows NT 6.0)/],
              ["Windows 7", /(Windows NT 6.1)/],
              ["Windows 8", /(Windows NT 6.2)/],
              ["Windows 8.1", /(Windows NT 6.3)/],
              ["Windows 10", /(Windows NT 10.0)/],
              ["Windows ME", /Windows ME/],
              ["Open BSD", /OpenBSD/],
              ["Sun OS", /SunOS/],
              ["Chrome OS", /CrOS/],
              ["Linux", /(Linux)|(X11)/],
              ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
              ["QNX", /QNX/],
              ["BeOS", /BeOS/],
              ["OS/2", /OS\/2/],
            ];
          function l(e) {
            return e
              ? p(e)
              : "undefined" == typeof document &&
                "undefined" != typeof navigator &&
                "ReactNative" === navigator.product
              ? new s()
              : "undefined" != typeof navigator
              ? p(navigator.userAgent)
              : g();
          }
          function h(e) {
            return (
              "" !== e &&
              c.reduce(function (t, r) {
                var n = r[0];
                r = r[1];
                return t || (!!(r = r.exec(e)) && [n, r]);
              }, !1)
            );
          }
          function d(e) {
            return (e = h(e)) ? e[0] : null;
          }
          function p(e) {
            var t = h(e);
            if (!t) return null;
            var r = t[0],
              i = t[1];
            return "searchbot" === r
              ? new a()
              : ((t = i[1] && i[1].split(/[._]/).slice(0, 3))
                  ? t.length < 3 &&
                    (t = (function () {
                      for (var e = 0, t = 0, r = arguments.length; t < r; t++)
                        e += arguments[t].length;
                      var n = Array(e),
                        i = 0;
                      for (t = 0; t < r; t++)
                        for (
                          var o = arguments[t], a = 0, s = o.length;
                          a < s;
                          a++, i++
                        )
                          n[i] = o[a];
                      return n;
                    })(
                      t,
                      (function (e) {
                        for (var t = [], r = 0; r < e; r++) t.push("0");
                        return t;
                      })(3 - t.length)
                    ))
                  : (t = []),
                (i = t.join(".")),
                (t = v(e)),
                (e = u.exec(e)) && e[1]
                  ? new o(r, i, t, e[1])
                  : new n(r, i, t));
          }
          function v(e) {
            for (var t = 0, r = f.length; t < r; t++) {
              var n = f[t],
                i = n[0];
              if (n[1].exec(e)) return i;
            }
            return null;
          }
          function g() {
            return void 0 !== e && e.version ? new i(e.version.slice(1)) : null;
          }
        }.call(this, r(162));
    },
    1383: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.safeJsonParse = function (t) {
          try {
            return JSON.parse(t);
          } catch (e) {
            return t;
          }
        }),
        (t.safeJsonStringify = function (e) {
          return "string" == typeof e
            ? e
            : JSON.stringify(e, function (e, t) {
                return void 0 === t ? null : t;
              });
        });
    },
    1384: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getMobileLinkRegistry =
          t.getMobileRegistryEntry =
          t.saveMobileLinkInfo =
          t.formatIOSMobile =
          t.mobileLinkChoiceKey =
            void 0);
      var n = r(1270);
      function i(e, t) {
        return e.filter(function (e) {
          return e.name.toLowerCase().includes(t.toLowerCase());
        })[0];
      }
      (t.mobileLinkChoiceKey = "WALLETCONNECT_DEEPLINK_CHOICE"),
        (t.formatIOSMobile = function (e, t) {
          return (
            (e = encodeURIComponent(e)),
            t.universalLink
              ? "".concat(t.universalLink, "/wc?uri=").concat(e)
              : t.deepLink
              ? ""
                  .concat(t.deepLink)
                  .concat(t.deepLink.endsWith(":") ? "//" : "/", "wc?uri=")
                  .concat(e)
              : ""
          );
        }),
        (t.saveMobileLinkInfo = function (e) {
          var r = e.href.split("?")[0];
          n.setLocal(
            t.mobileLinkChoiceKey,
            Object.assign(Object.assign({}, e), { href: r })
          );
        }),
        (t.getMobileRegistryEntry = i),
        (t.getMobileLinkRegistry = function (e, t) {
          var r = e;
          return t && t.length
            ? t.map(function (t) {
                return i(e, t);
              })
            : r;
        });
    },
    1385: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.formatMobileRegistry =
          t.formatMobileRegistryEntry =
          t.getAppLogoUrl =
          t.getDappRegistryUrl =
          t.getWalletRegistryUrl =
            void 0);
      var n = "https://registry.walletconnect.org";
      function i(e) {
        return n + "/logo/sm/" + e + ".jpeg";
      }
      function o(e) {
        return {
          name: e.name || "",
          shortName: e.metadata.shortName || "",
          color: e.metadata.colors.primary || "",
          logo: e.id ? i(e.id) : "",
          universalLink: e.mobile.universal || "",
          deepLink: e.mobile.native || "",
        };
      }
      (t.getWalletRegistryUrl = function () {
        return n + "/data/wallets.json";
      }),
        (t.getDappRegistryUrl = function () {
          return n + "/data/dapps.json";
        }),
        (t.getAppLogoUrl = i),
        (t.formatMobileRegistryEntry = o),
        (t.formatMobileRegistry = function (e) {
          return Object.values(e)
            .filter(function (e) {
              return !!e.mobile.universal || !!e.mobile.native;
            })
            .map(o);
        });
    },
    1386: function (e, t, r) {
      (function (e) {
        !(function (e, t) {
          "use strict";
          function n(e, t) {
            if (!e) throw new Error(t || "Assertion failed");
          }
          function i(e, t) {
            function r() {}
            (e.super_ = t),
              (r.prototype = t.prototype),
              (e.prototype = new r()),
              (e.prototype.constructor = e);
          }
          function o(e, t, r) {
            if (o.isBN(e)) return e;
            (this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null) !== e &&
                (("le" !== t && "be" !== t) || ((r = t), (t = 10)),
                this._init(e || 0, t || 10, r || "be"));
          }
          var a;
          "object" == typeof e ? (e.exports = o) : (t.BN = o),
            ((o.BN = o).wordSize = 26);
          try {
            a = r(1387).Buffer;
          } catch (e) {}
          function s(e, t, r) {
            for (var n = 0, i = Math.min(e.length, r), o = t; o < i; o++) {
              var a = e.charCodeAt(o) - 48;
              (n <<= 4),
                (n |=
                  49 <= a && a <= 54
                    ? a - 49 + 10
                    : 17 <= a && a <= 22
                    ? a - 17 + 10
                    : 15 & a);
            }
            return n;
          }
          function u(e, t, r, n) {
            for (var i = 0, o = Math.min(e.length, r), a = t; a < o; a++) {
              var s = e.charCodeAt(a) - 48;
              (i *= n),
                (i += 49 <= s ? s - 49 + 10 : 17 <= s ? s - 17 + 10 : s);
            }
            return i;
          }
          (o.isBN = function (e) {
            return (
              e instanceof o ||
              (null !== e &&
                "object" == typeof e &&
                e.constructor.wordSize === o.wordSize &&
                Array.isArray(e.words))
            );
          }),
            (o.max = function (e, t) {
              return 0 < e.cmp(t) ? e : t;
            }),
            (o.min = function (e, t) {
              return e.cmp(t) < 0 ? e : t;
            }),
            (o.prototype._init = function (e, t, r) {
              if ("number" == typeof e) return this._initNumber(e, t, r);
              if ("object" == typeof e) return this._initArray(e, t, r);
              n((t = "hex" === t ? 16 : t) === (0 | t) && 2 <= t && t <= 36);
              var i = 0;
              "-" === (e = e.toString().replace(/\s+/g, ""))[0] && i++,
                16 === t ? this._parseHex(e, i) : this._parseBase(e, t, i),
                "-" === e[0] && (this.negative = 1),
                this.strip(),
                "le" === r && this._initArray(this.toArray(), t, r);
            }),
            (o.prototype._initNumber = function (e, t, r) {
              e < 0 && ((this.negative = 1), (e = -e)),
                e < 67108864
                  ? ((this.words = [67108863 & e]), (this.length = 1))
                  : e < 4503599627370496
                  ? ((this.words = [67108863 & e, (e / 67108864) & 67108863]),
                    (this.length = 2))
                  : (n(e < 9007199254740992),
                    (this.words = [67108863 & e, (e / 67108864) & 67108863, 1]),
                    (this.length = 3)),
                "le" === r && this._initArray(this.toArray(), t, r);
            }),
            (o.prototype._initArray = function (e, t, r) {
              if ((n("number" == typeof e.length), e.length <= 0))
                return (this.words = [0]), (this.length = 1), this;
              (this.length = Math.ceil(e.length / 3)),
                (this.words = new Array(this.length));
              for (var i, o, a = 0; a < this.length; a++) this.words[a] = 0;
              var s = 0;
              if ("be" === r)
                for (a = e.length - 1, i = 0; 0 <= a; a -= 3)
                  (o = e[a] | (e[a - 1] << 8) | (e[a - 2] << 16)),
                    (this.words[i] |= (o << s) & 67108863),
                    (this.words[i + 1] = (o >>> (26 - s)) & 67108863),
                    26 <= (s += 24) && ((s -= 26), i++);
              else if ("le" === r)
                for (i = a = 0; a < e.length; a += 3)
                  (o = e[a] | (e[a + 1] << 8) | (e[a + 2] << 16)),
                    (this.words[i] |= (o << s) & 67108863),
                    (this.words[i + 1] = (o >>> (26 - s)) & 67108863),
                    26 <= (s += 24) && ((s -= 26), i++);
              return this.strip();
            }),
            (o.prototype._parseHex = function (e, t) {
              (this.length = Math.ceil((e.length - t) / 6)),
                (this.words = new Array(this.length));
              for (var r, n = 0; n < this.length; n++) this.words[n] = 0;
              for (var i = 0, o = ((n = e.length - 6), 0); t <= n; n -= 6)
                (r = s(e, n, n + 6)),
                  (this.words[o] |= (r << i) & 67108863),
                  (this.words[o + 1] |= (r >>> (26 - i)) & 4194303),
                  26 <= (i += 24) && ((i -= 26), o++);
              n + 6 !== t &&
                ((r = s(e, t, n + 6)),
                (this.words[o] |= (r << i) & 67108863),
                (this.words[o + 1] |= (r >>> (26 - i)) & 4194303)),
                this.strip();
            }),
            (o.prototype._parseBase = function (e, t, r) {
              this.words = [0];
              for (var n = 0, i = (this.length = 1); i <= 67108863; i *= t) n++;
              i = (i / t) | 0;
              for (
                var o = e.length - r,
                  a = o % --n,
                  s = Math.min(o, o - a) + r,
                  c = 0,
                  f = r;
                f < s;
                f += n
              )
                (c = u(e, f, f + n, t)),
                  this.imuln(i),
                  this.words[0] + c < 67108864
                    ? (this.words[0] += c)
                    : this._iaddn(c);
              if (0 != a) {
                var l = 1;
                for (c = u(e, f, e.length, t), f = 0; f < a; f++) l *= t;
                this.imuln(l),
                  this.words[0] + c < 67108864
                    ? (this.words[0] += c)
                    : this._iaddn(c);
              }
            }),
            (o.prototype.copy = function (e) {
              e.words = new Array(this.length);
              for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
              (e.length = this.length),
                (e.negative = this.negative),
                (e.red = this.red);
            }),
            (o.prototype.clone = function () {
              var e = new o(null);
              return this.copy(e), e;
            }),
            (o.prototype._expand = function (e) {
              for (; this.length < e; ) this.words[this.length++] = 0;
              return this;
            }),
            (o.prototype.strip = function () {
              for (; 1 < this.length && 0 === this.words[this.length - 1]; )
                this.length--;
              return this._normSign();
            }),
            (o.prototype._normSign = function () {
              return (
                1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
              );
            }),
            (o.prototype.inspect = function () {
              return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
            });
          var c = [
              "",
              "0",
              "00",
              "000",
              "0000",
              "00000",
              "000000",
              "0000000",
              "00000000",
              "000000000",
              "0000000000",
              "00000000000",
              "000000000000",
              "0000000000000",
              "00000000000000",
              "000000000000000",
              "0000000000000000",
              "00000000000000000",
              "000000000000000000",
              "0000000000000000000",
              "00000000000000000000",
              "000000000000000000000",
              "0000000000000000000000",
              "00000000000000000000000",
              "000000000000000000000000",
              "0000000000000000000000000",
            ],
            f = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            l = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          function h(e, t, r) {
            r.negative = t.negative ^ e.negative;
            var n = (e.length + t.length) | 0,
              i =
                ((n = ((r.length = n) - 1) | 0),
                ((a = (0 | e.words[0]) * (0 | t.words[0])) / 67108864) | 0);
            r.words[0] = 67108863 & a;
            for (var o = 1; o < n; o++) {
              for (
                var a,
                  s = i >>> 26,
                  u = 67108863 & i,
                  c = Math.min(o, t.length - 1),
                  f = Math.max(0, o - e.length + 1);
                f <= c;
                f++
              )
                (s +=
                  ((a = (0 | e.words[(o - f) | 0]) * (0 | t.words[f]) + u) /
                    67108864) |
                  0),
                  (u = 67108863 & a);
              (r.words[o] = 0 | u), (i = 0 | s);
            }
            return 0 !== i ? (r.words[o] = 0 | i) : r.length--, r.strip();
          }
          (o.prototype.toString = function (e, t) {
            if (((t = 0 | t || 1), 16 === (e = e || 10) || "hex" === e)) {
              u = "";
              for (var r = 0, i = 0, o = 0; o < this.length; o++) {
                var a = this.words[o],
                  s = (16777215 & ((a << r) | i)).toString(16),
                  u =
                    0 !== (i = (a >>> (24 - r)) & 16777215) ||
                    o !== this.length - 1
                      ? c[6 - s.length] + s + u
                      : s + u;
                26 <= (r += 2) && ((r -= 26), o--);
              }
              for (0 !== i && (u = i.toString(16) + u); u.length % t != 0; )
                u = "0" + u;
              return 0 !== this.negative ? "-" + u : u;
            }
            if (e === (0 | e) && 2 <= e && e <= 36) {
              var h = f[e],
                d = l[e];
              for (u = "", (p = this.clone()).negative = 0; !p.isZero(); ) {
                var p,
                  v = p.modn(d).toString(e);
                u = (p = p.idivn(d)).isZero() ? v + u : c[h - v.length] + v + u;
              }
              for (this.isZero() && (u = "0" + u); u.length % t != 0; )
                u = "0" + u;
              return 0 !== this.negative ? "-" + u : u;
            }
            n(!1, "Base should be between 2 and 36");
          }),
            (o.prototype.toNumber = function () {
              var e = this.words[0];
              return (
                2 === this.length
                  ? (e += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                  ? (e += 4503599627370496 + 67108864 * this.words[1])
                  : 2 < this.length &&
                    n(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -e : e
              );
            }),
            (o.prototype.toJSON = function () {
              return this.toString(16);
            }),
            (o.prototype.toBuffer = function (e, t) {
              return n(void 0 !== a), this.toArrayLike(a, e, t);
            }),
            (o.prototype.toArray = function (e, t) {
              return this.toArrayLike(Array, e, t);
            }),
            (o.prototype.toArrayLike = function (e, t, r) {
              var i = this.byteLength(),
                o = r || Math.max(1, i);
              n(i <= o, "byte array longer than desired length"),
                n(0 < o, "Requested array length <= 0"),
                this.strip();
              t = "le" === t;
              var a,
                s,
                u = new e(o),
                c = this.clone();
              if (t) {
                for (s = 0; !c.isZero(); s++)
                  (a = c.andln(255)), c.iushrn(8), (u[s] = a);
                for (; s < o; s++) u[s] = 0;
              } else {
                for (s = 0; s < o - i; s++) u[s] = 0;
                for (s = 0; !c.isZero(); s++)
                  (a = c.andln(255)), c.iushrn(8), (u[o - s - 1] = a);
              }
              return u;
            }),
            Math.clz32
              ? (o.prototype._countBits = function (e) {
                  return 32 - Math.clz32(e);
                })
              : (o.prototype._countBits = function (e) {
                  var t = e;
                  e = 0;
                  return (
                    4096 <= t && ((e += 13), (t >>>= 13)),
                    64 <= t && ((e += 7), (t >>>= 7)),
                    8 <= t && ((e += 4), (t >>>= 4)),
                    2 <= t && ((e += 2), (t >>>= 2)),
                    e + t
                  );
                }),
            (o.prototype._zeroBits = function (e) {
              if (0 === e) return 26;
              var t = e;
              e = 0;
              return (
                0 == (8191 & t) && ((e += 13), (t >>>= 13)),
                0 == (127 & t) && ((e += 7), (t >>>= 7)),
                0 == (15 & t) && ((e += 4), (t >>>= 4)),
                0 == (3 & t) && ((e += 2), (t >>>= 2)),
                0 == (1 & t) && e++,
                e
              );
            }),
            (o.prototype.bitLength = function () {
              var e = this.words[this.length - 1];
              e = this._countBits(e);
              return 26 * (this.length - 1) + e;
            }),
            (o.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var e = 0, t = 0; t < this.length; t++) {
                var r = this._zeroBits(this.words[t]);
                if (((e += r), 26 !== r)) break;
              }
              return e;
            }),
            (o.prototype.byteLength = function () {
              return Math.ceil(this.bitLength() / 8);
            }),
            (o.prototype.toTwos = function (e) {
              return 0 !== this.negative
                ? this.abs().inotn(e).iaddn(1)
                : this.clone();
            }),
            (o.prototype.fromTwos = function (e) {
              return this.testn(e - 1)
                ? this.notn(e).iaddn(1).ineg()
                : this.clone();
            }),
            (o.prototype.isNeg = function () {
              return 0 !== this.negative;
            }),
            (o.prototype.neg = function () {
              return this.clone().ineg();
            }),
            (o.prototype.ineg = function () {
              return this.isZero() || (this.negative ^= 1), this;
            }),
            (o.prototype.iuor = function (e) {
              for (; this.length < e.length; ) this.words[this.length++] = 0;
              for (var t = 0; t < e.length; t++)
                this.words[t] = this.words[t] | e.words[t];
              return this.strip();
            }),
            (o.prototype.ior = function (e) {
              return n(0 == (this.negative | e.negative)), this.iuor(e);
            }),
            (o.prototype.or = function (e) {
              return this.length > e.length
                ? this.clone().ior(e)
                : e.clone().ior(this);
            }),
            (o.prototype.uor = function (e) {
              return this.length > e.length
                ? this.clone().iuor(e)
                : e.clone().iuor(this);
            }),
            (o.prototype.iuand = function (e) {
              for (
                var t = this.length > e.length ? e : this, r = 0;
                r < t.length;
                r++
              )
                this.words[r] = this.words[r] & e.words[r];
              return (this.length = t.length), this.strip();
            }),
            (o.prototype.iand = function (e) {
              return n(0 == (this.negative | e.negative)), this.iuand(e);
            }),
            (o.prototype.and = function (e) {
              return this.length > e.length
                ? this.clone().iand(e)
                : e.clone().iand(this);
            }),
            (o.prototype.uand = function (e) {
              return this.length > e.length
                ? this.clone().iuand(e)
                : e.clone().iuand(this);
            }),
            (o.prototype.iuxor = function (e) {
              for (
                var t,
                  r =
                    this.length > e.length ? ((t = this), e) : ((t = e), this),
                  n = 0;
                n < r.length;
                n++
              )
                this.words[n] = t.words[n] ^ r.words[n];
              if (this !== t)
                for (; n < t.length; n++) this.words[n] = t.words[n];
              return (this.length = t.length), this.strip();
            }),
            (o.prototype.ixor = function (e) {
              return n(0 == (this.negative | e.negative)), this.iuxor(e);
            }),
            (o.prototype.xor = function (e) {
              return this.length > e.length
                ? this.clone().ixor(e)
                : e.clone().ixor(this);
            }),
            (o.prototype.uxor = function (e) {
              return this.length > e.length
                ? this.clone().iuxor(e)
                : e.clone().iuxor(this);
            }),
            (o.prototype.inotn = function (e) {
              n("number" == typeof e && 0 <= e);
              var t = 0 | Math.ceil(e / 26);
              e %= 26;
              this._expand(t), 0 < e && t--;
              for (var r = 0; r < t; r++)
                this.words[r] = 67108863 & ~this.words[r];
              return (
                0 < e &&
                  (this.words[r] = ~this.words[r] & (67108863 >> (26 - e))),
                this.strip()
              );
            }),
            (o.prototype.notn = function (e) {
              return this.clone().inotn(e);
            }),
            (o.prototype.setn = function (e, t) {
              n("number" == typeof e && 0 <= e);
              var r = (e / 26) | 0;
              e %= 26;
              return (
                this._expand(1 + r),
                (this.words[r] = t
                  ? this.words[r] | (1 << e)
                  : this.words[r] & ~(1 << e)),
                this.strip()
              );
            }),
            (o.prototype.iadd = function (e) {
              var t, r;
              if (0 !== this.negative && 0 === e.negative)
                return (
                  (this.negative = 0),
                  (t = this.isub(e)),
                  (this.negative ^= 1),
                  this._normSign()
                );
              if (0 === this.negative && 0 !== e.negative)
                return (
                  (e.negative = 0),
                  (t = this.isub(e)),
                  (e.negative = 1),
                  t._normSign()
                );
              for (
                var n =
                    this.length > e.length ? ((r = this), e) : ((r = e), this),
                  i = 0,
                  o = 0;
                o < n.length;
                o++
              )
                (t = (0 | r.words[o]) + (0 | n.words[o]) + i),
                  (this.words[o] = 67108863 & t),
                  (i = t >>> 26);
              for (; 0 !== i && o < r.length; o++)
                (t = (0 | r.words[o]) + i),
                  (this.words[o] = 67108863 & t),
                  (i = t >>> 26);
              if (((this.length = r.length), 0 !== i))
                (this.words[this.length] = i), this.length++;
              else if (r !== this)
                for (; o < r.length; o++) this.words[o] = r.words[o];
              return this;
            }),
            (o.prototype.add = function (e) {
              var t;
              return 0 !== e.negative && 0 === this.negative
                ? ((e.negative = 0), (t = this.sub(e)), (e.negative ^= 1), t)
                : 0 === e.negative && 0 !== this.negative
                ? ((this.negative = 0),
                  (t = e.sub(this)),
                  (this.negative = 1),
                  t)
                : this.length > e.length
                ? this.clone().iadd(e)
                : e.clone().iadd(this);
            }),
            (o.prototype.isub = function (e) {
              if (0 !== e.negative) {
                e.negative = 0;
                var t = this.iadd(e);
                return (e.negative = 1), t._normSign();
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(e),
                  (this.negative = 1),
                  this._normSign()
                );
              var r,
                n = this.cmp(e);
              if (0 === n)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              for (
                var i = 0 < n ? ((r = this), e) : ((r = e), this), o = 0, a = 0;
                a < i.length;
                a++
              )
                (o = (t = (0 | r.words[a]) - (0 | i.words[a]) + o) >> 26),
                  (this.words[a] = 67108863 & t);
              for (; 0 !== o && a < r.length; a++)
                (o = (t = (0 | r.words[a]) + o) >> 26),
                  (this.words[a] = 67108863 & t);
              if (0 === o && a < r.length && r !== this)
                for (; a < r.length; a++) this.words[a] = r.words[a];
              return (
                (this.length = Math.max(this.length, a)),
                r !== this && (this.negative = 1),
                this.strip()
              );
            }),
            (o.prototype.sub = function (e) {
              return this.clone().isub(e);
            });
          var d = function (e, t, r) {
            var n,
              i,
              o,
              a = e.words,
              s = t.words,
              u = r.words,
              c = 8191 & (n = 0 | a[0]),
              f = n >>> 13,
              l = 8191 & (W = 0 | a[1]),
              h = W >>> 13,
              d = 8191 & (G = 0 | a[2]),
              p = G >>> 13,
              v = 8191 & (i = 0 | a[3]),
              g = i >>> 13,
              _ = 8191 & (V = 0 | a[4]),
              m = V >>> 13,
              y = 8191 & (J = 0 | a[5]),
              w = J >>> 13,
              b = 8191 & (o = 0 | a[6]),
              E = o >>> 13,
              x = 8191 & (Y = 0 | a[7]),
              S = Y >>> 13,
              k = 8191 & (Z = 0 | a[8]),
              R = Z >>> 13,
              A = 8191 & (X = 0 | a[9]),
              M = X >>> 13,
              T = 8191 & (Q = 0 | s[0]),
              C = Q >>> 13,
              O = 0 | s[1],
              P = 8191 & O,
              N = O >>> 13,
              I = 0 | s[2],
              L = 8191 & I,
              B = I >>> 13,
              H = 8191 & ($ = 0 | s[3]),
              U = $ >>> 13,
              D = 0 | s[4],
              j = 8191 & D,
              q = D >>> 13,
              K = 0 | s[5],
              z = 8191 & K,
              F = K >>> 13,
              W = 8191 & (n = 0 | s[6]),
              G = n >>> 13,
              V = 8191 & (i = 0 | s[7]),
              J = i >>> 13,
              Y = 8191 & (o = 0 | s[8]),
              Z = o >>> 13,
              X = 8191 & (a = 0 | s[9]),
              Q = a >>> 13;
            (r.negative = e.negative ^ t.negative), (r.length = 19);
            var $ =
                (((0 + Math.imul(c, T)) | 0) +
                  ((8191 &
                    (I = ((I = Math.imul(c, C)) + Math.imul(f, T)) | 0)) <<
                    13)) |
                0,
              ee =
                ((((D = Math.imul(f, C)) + (I >>> 13)) | 0) + ($ >>> 26)) | 0;
            return (
              ($ &= 67108863),
              (O = Math.imul(l, T)),
              (I = ((I = Math.imul(l, C)) + Math.imul(h, T)) | 0),
              (D = Math.imul(h, C)),
              (K =
                (((ee + ((O + Math.imul(c, P)) | 0)) | 0) +
                  ((8191 &
                    (I =
                      ((I = (I + Math.imul(c, N)) | 0) + Math.imul(f, P)) |
                      0)) <<
                    13)) |
                0),
              (ee =
                ((((D = (D + Math.imul(f, N)) | 0) + (I >>> 13)) | 0) +
                  (K >>> 26)) |
                0),
              (K &= 67108863),
              (O = Math.imul(d, T)),
              (I = ((I = Math.imul(d, C)) + Math.imul(p, T)) | 0),
              (D = Math.imul(p, C)),
              (O = (O + Math.imul(l, P)) | 0),
              (I = ((I = (I + Math.imul(l, N)) | 0) + Math.imul(h, P)) | 0),
              (D = (D + Math.imul(h, N)) | 0),
              (n =
                (((ee + ((O + Math.imul(c, L)) | 0)) | 0) +
                  ((8191 &
                    (I =
                      ((I = (I + Math.imul(c, B)) | 0) + Math.imul(f, L)) |
                      0)) <<
                    13)) |
                0),
              (ee =
                ((((D = (D + Math.imul(f, B)) | 0) + (I >>> 13)) | 0) +
                  (n >>> 26)) |
                0),
              (n &= 67108863),
              (O = Math.imul(v, T)),
              (I = ((I = Math.imul(v, C)) + Math.imul(g, T)) | 0),
              (D = Math.imul(g, C)),
              (O = (O + Math.imul(d, P)) | 0),
              (I = ((I = (I + Math.imul(d, N)) | 0) + Math.imul(p, P)) | 0),
              (D = (D + Math.imul(p, N)) | 0),
              (O = (O + Math.imul(l, L)) | 0),
              (I = ((I = (I + Math.imul(l, B)) | 0) + Math.imul(h, L)) | 0),
              (D = (D + Math.imul(h, B)) | 0),
              (i =
                (((ee + ((O + Math.imul(c, H)) | 0)) | 0) +
                  ((8191 &
                    (I =
                      ((I = (I + Math.imul(c, U)) | 0) + Math.imul(f, H)) |
                      0)) <<
                    13)) |
                0),
              (ee =
                ((((D = (D + Math.imul(f, U)) | 0) + (I >>> 13)) | 0) +
                  (i >>> 26)) |
                0),
              (i &= 67108863),
              (O = Math.imul(_, T)),
              (I = ((I = Math.imul(_, C)) + Math.imul(m, T)) | 0),
              (D = Math.imul(m, C)),
              (O = (O + Math.imul(v, P)) | 0),
              (I = ((I = (I + Math.imul(v, N)) | 0) + Math.imul(g, P)) | 0),
              (D = (D + Math.imul(g, N)) | 0),
              (O = (O + Math.imul(d, L)) | 0),
              (I = ((I = (I + Math.imul(d, B)) | 0) + Math.imul(p, L)) | 0),
              (D = (D + Math.imul(p, B)) | 0),
              (O = (O + Math.imul(l, H)) | 0),
              (I = ((I = (I + Math.imul(l, U)) | 0) + Math.imul(h, H)) | 0),
              (D = (D + Math.imul(h, U)) | 0),
              (o =
                (((ee + ((O + Math.imul(c, j)) | 0)) | 0) +
                  ((8191 &
                    (I =
                      ((I = (I + Math.imul(c, q)) | 0) + Math.imul(f, j)) |
                      0)) <<
                    13)) |
                0),
              (ee =
                ((((D = (D + Math.imul(f, q)) | 0) + (I >>> 13)) | 0) +
                  (o >>> 26)) |
                0),
              (o &= 67108863),
              (O = Math.imul(y, T)),
              (I = ((I = Math.imul(y, C)) + Math.imul(w, T)) | 0),
              (D = Math.imul(w, C)),
              (O = (O + Math.imul(_, P)) | 0),
              (I = ((I = (I + Math.imul(_, N)) | 0) + Math.imul(m, P)) | 0),
              (D = (D + Math.imul(m, N)) | 0),
              (O = (O + Math.imul(v, L)) | 0),
              (I = ((I = (I + Math.imul(v, B)) | 0) + Math.imul(g, L)) | 0),
              (D = (D + Math.imul(g, B)) | 0),
              (O = (O + Math.imul(d, H)) | 0),
              (I = ((I = (I + Math.imul(d, U)) | 0) + Math.imul(p, H)) | 0),
              (D = (D + Math.imul(p, U)) | 0),
              (O = (O + Math.imul(l, j)) | 0),
              (I = ((I = (I + Math.imul(l, q)) | 0) + Math.imul(h, j)) | 0),
              (D = (D + Math.imul(h, q)) | 0),
              (s =
                (((ee + ((O + Math.imul(c, z)) | 0)) | 0) +
                  ((8191 &
                    (I =
                      ((I = (I + Math.imul(c, F)) | 0) + Math.imul(f, z)) |
                      0)) <<
                    13)) |
                0),
              (ee =
                ((((D = (D + Math.imul(f, F)) | 0) + (I >>> 13)) | 0) +
                  (s >>> 26)) |
                0),
              (s &= 67108863),
              (O = Math.imul(b, T)),
              (I = ((I = Math.imul(b, C)) + Math.imul(E, T)) | 0),
              (D = Math.imul(E, C)),
              (O = (O + Math.imul(y, P)) | 0),
              (I = ((I = (I + Math.imul(y, N)) | 0) + Math.imul(w, P)) | 0),
              (D = (D + Math.imul(w, N)) | 0),
              (O = (O + Math.imul(_, L)) | 0),
              (I = ((I = (I + Math.imul(_, B)) | 0) + Math.imul(m, L)) | 0),
              (D = (D + Math.imul(m, B)) | 0),
              (O = (O + Math.imul(v, H)) | 0),
              (I = ((I = (I + Math.imul(v, U)) | 0) + Math.imul(g, H)) | 0),
              (D = (D + Math.imul(g, U)) | 0),
              (O = (O + Math.imul(d, j)) | 0),
              (I = ((I = (I + Math.imul(d, q)) | 0) + Math.imul(p, j)) | 0),
              (D = (D + Math.imul(p, q)) | 0),
              (O = (O + Math.imul(l, z)) | 0),
              (I = ((I = (I + Math.imul(l, F)) | 0) + Math.imul(h, z)) | 0),
              (D = (D + Math.imul(h, F)) | 0),
              (a =
                (((ee + ((O + Math.imul(c, W)) | 0)) | 0) +
                  ((8191 &
                    (I =
                      ((I = (I + Math.imul(c, G)) | 0) + Math.imul(f, W)) |
                      0)) <<
                    13)) |
                0),
              (ee =
                ((((D = (D + Math.imul(f, G)) | 0) + (I >>> 13)) | 0) +
                  (a >>> 26)) |
                0),
              (a &= 67108863),
              (O = Math.imul(x, T)),
              (I = ((I = Math.imul(x, C)) + Math.imul(S, T)) | 0),
              (D = Math.imul(S, C)),
              (O = (O + Math.imul(b, P)) | 0),
              (I = ((I = (I + Math.imul(b, N)) | 0) + Math.imul(E, P)) | 0),
              (D = (D + Math.imul(E, N)) | 0),
              (O = (O + Math.imul(y, L)) | 0),
              (I = ((I = (I + Math.imul(y, B)) | 0) + Math.imul(w, L)) | 0),
              (D = (D + Math.imul(w, B)) | 0),
              (O = (O + Math.imul(_, H)) | 0),
              (I = ((I = (I + Math.imul(_, U)) | 0) + Math.imul(m, H)) | 0),
              (D = (D + Math.imul(m, U)) | 0),
              (O = (O + Math.imul(v, j)) | 0),
              (I = ((I = (I + Math.imul(v, q)) | 0) + Math.imul(g, j)) | 0),
              (D = (D + Math.imul(g, q)) | 0),
              (O = (O + Math.imul(d, z)) | 0),
              (I = ((I = (I + Math.imul(d, F)) | 0) + Math.imul(p, z)) | 0),
              (D = (D + Math.imul(p, F)) | 0),
              (O = (O + Math.imul(l, W)) | 0),
              (I = ((I = (I + Math.imul(l, G)) | 0) + Math.imul(h, W)) | 0),
              (D = (D + Math.imul(h, G)) | 0),
              (e =
                (((ee + ((O + Math.imul(c, V)) | 0)) | 0) +
                  ((8191 &
                    (I =
                      ((I = (I + Math.imul(c, J)) | 0) + Math.imul(f, V)) |
                      0)) <<
                    13)) |
                0),
              (ee =
                ((((D = (D + Math.imul(f, J)) | 0) + (I >>> 13)) | 0) +
                  (e >>> 26)) |
                0),
              (e &= 67108863),
              (O = Math.imul(k, T)),
              (I = ((I = Math.imul(k, C)) + Math.imul(R, T)) | 0),
              (D = Math.imul(R, C)),
              (O = (O + Math.imul(x, P)) | 0),
              (I = ((I = (I + Math.imul(x, N)) | 0) + Math.imul(S, P)) | 0),
              (D = (D + Math.imul(S, N)) | 0),
              (O = (O + Math.imul(b, L)) | 0),
              (I = ((I = (I + Math.imul(b, B)) | 0) + Math.imul(E, L)) | 0),
              (D = (D + Math.imul(E, B)) | 0),
              (O = (O + Math.imul(y, H)) | 0),
              (I = ((I = (I + Math.imul(y, U)) | 0) + Math.imul(w, H)) | 0),
              (D = (D + Math.imul(w, U)) | 0),
              (O = (O + Math.imul(_, j)) | 0),
              (I = ((I = (I + Math.imul(_, q)) | 0) + Math.imul(m, j)) | 0),
              (D = (D + Math.imul(m, q)) | 0),
              (O = (O + Math.imul(v, z)) | 0),
              (I = ((I = (I + Math.imul(v, F)) | 0) + Math.imul(g, z)) | 0),
              (D = (D + Math.imul(g, F)) | 0),
              (O = (O + Math.imul(d, W)) | 0),
              (I = ((I = (I + Math.imul(d, G)) | 0) + Math.imul(p, W)) | 0),
              (D = (D + Math.imul(p, G)) | 0),
              (O = (O + Math.imul(l, V)) | 0),
              (I = ((I = (I + Math.imul(l, J)) | 0) + Math.imul(h, V)) | 0),
              (D = (D + Math.imul(h, J)) | 0),
              (t =
                (((ee + ((O + Math.imul(c, Y)) | 0)) | 0) +
                  ((8191 &
                    (I =
                      ((I = (I + Math.imul(c, Z)) | 0) + Math.imul(f, Y)) |
                      0)) <<
                    13)) |
                0),
              (ee =
                ((((D = (D + Math.imul(f, Z)) | 0) + (I >>> 13)) | 0) +
                  (t >>> 26)) |
                0),
              (t &= 67108863),
              (O = Math.imul(A, T)),
              (I = ((I = Math.imul(A, C)) + Math.imul(M, T)) | 0),
              (D = Math.imul(M, C)),
              (O = (O + Math.imul(k, P)) | 0),
              (I = ((I = (I + Math.imul(k, N)) | 0) + Math.imul(R, P)) | 0),
              (D = (D + Math.imul(R, N)) | 0),
              (O = (O + Math.imul(x, L)) | 0),
              (I = ((I = (I + Math.imul(x, B)) | 0) + Math.imul(S, L)) | 0),
              (D = (D + Math.imul(S, B)) | 0),
              (O = (O + Math.imul(b, H)) | 0),
              (I = ((I = (I + Math.imul(b, U)) | 0) + Math.imul(E, H)) | 0),
              (D = (D + Math.imul(E, U)) | 0),
              (O = (O + Math.imul(y, j)) | 0),
              (I = ((I = (I + Math.imul(y, q)) | 0) + Math.imul(w, j)) | 0),
              (D = (D + Math.imul(w, q)) | 0),
              (O = (O + Math.imul(_, z)) | 0),
              (I = ((I = (I + Math.imul(_, F)) | 0) + Math.imul(m, z)) | 0),
              (D = (D + Math.imul(m, F)) | 0),
              (O = (O + Math.imul(v, W)) | 0),
              (I = ((I = (I + Math.imul(v, G)) | 0) + Math.imul(g, W)) | 0),
              (D = (D + Math.imul(g, G)) | 0),
              (O = (O + Math.imul(d, V)) | 0),
              (I = ((I = (I + Math.imul(d, J)) | 0) + Math.imul(p, V)) | 0),
              (D = (D + Math.imul(p, J)) | 0),
              (O = (O + Math.imul(l, Y)) | 0),
              (I = ((I = (I + Math.imul(l, Z)) | 0) + Math.imul(h, Y)) | 0),
              (D = (D + Math.imul(h, Z)) | 0),
              (c =
                (((ee + ((O + Math.imul(c, X)) | 0)) | 0) +
                  ((8191 &
                    (I =
                      ((I = (I + Math.imul(c, Q)) | 0) + Math.imul(f, X)) |
                      0)) <<
                    13)) |
                0),
              (ee =
                ((((D = (D + Math.imul(f, Q)) | 0) + (I >>> 13)) | 0) +
                  (c >>> 26)) |
                0),
              (c &= 67108863),
              (O = Math.imul(A, P)),
              (I = ((I = Math.imul(A, N)) + Math.imul(M, P)) | 0),
              (D = Math.imul(M, N)),
              (O = (O + Math.imul(k, L)) | 0),
              (I = ((I = (I + Math.imul(k, B)) | 0) + Math.imul(R, L)) | 0),
              (D = (D + Math.imul(R, B)) | 0),
              (O = (O + Math.imul(x, H)) | 0),
              (I = ((I = (I + Math.imul(x, U)) | 0) + Math.imul(S, H)) | 0),
              (D = (D + Math.imul(S, U)) | 0),
              (O = (O + Math.imul(b, j)) | 0),
              (I = ((I = (I + Math.imul(b, q)) | 0) + Math.imul(E, j)) | 0),
              (D = (D + Math.imul(E, q)) | 0),
              (O = (O + Math.imul(y, z)) | 0),
              (I = ((I = (I + Math.imul(y, F)) | 0) + Math.imul(w, z)) | 0),
              (D = (D + Math.imul(w, F)) | 0),
              (O = (O + Math.imul(_, W)) | 0),
              (I = ((I = (I + Math.imul(_, G)) | 0) + Math.imul(m, W)) | 0),
              (D = (D + Math.imul(m, G)) | 0),
              (O = (O + Math.imul(v, V)) | 0),
              (I = ((I = (I + Math.imul(v, J)) | 0) + Math.imul(g, V)) | 0),
              (D = (D + Math.imul(g, J)) | 0),
              (O = (O + Math.imul(d, Y)) | 0),
              (I = ((I = (I + Math.imul(d, Z)) | 0) + Math.imul(p, Y)) | 0),
              (D = (D + Math.imul(p, Z)) | 0),
              (l =
                (((ee + ((O + Math.imul(l, X)) | 0)) | 0) +
                  ((8191 &
                    (I =
                      ((I = (I + Math.imul(l, Q)) | 0) + Math.imul(h, X)) |
                      0)) <<
                    13)) |
                0),
              (ee =
                ((((D = (D + Math.imul(h, Q)) | 0) + (I >>> 13)) | 0) +
                  (l >>> 26)) |
                0),
              (l &= 67108863),
              (O = Math.imul(A, L)),
              (I = ((I = Math.imul(A, B)) + Math.imul(M, L)) | 0),
              (D = Math.imul(M, B)),
              (O = (O + Math.imul(k, H)) | 0),
              (I = ((I = (I + Math.imul(k, U)) | 0) + Math.imul(R, H)) | 0),
              (D = (D + Math.imul(R, U)) | 0),
              (O = (O + Math.imul(x, j)) | 0),
              (I = ((I = (I + Math.imul(x, q)) | 0) + Math.imul(S, j)) | 0),
              (D = (D + Math.imul(S, q)) | 0),
              (O = (O + Math.imul(b, z)) | 0),
              (I = ((I = (I + Math.imul(b, F)) | 0) + Math.imul(E, z)) | 0),
              (D = (D + Math.imul(E, F)) | 0),
              (O = (O + Math.imul(y, W)) | 0),
              (I = ((I = (I + Math.imul(y, G)) | 0) + Math.imul(w, W)) | 0),
              (D = (D + Math.imul(w, G)) | 0),
              (O = (O + Math.imul(_, V)) | 0),
              (I = ((I = (I + Math.imul(_, J)) | 0) + Math.imul(m, V)) | 0),
              (D = (D + Math.imul(m, J)) | 0),
              (O = (O + Math.imul(v, Y)) | 0),
              (I = ((I = (I + Math.imul(v, Z)) | 0) + Math.imul(g, Y)) | 0),
              (D = (D + Math.imul(g, Z)) | 0),
              (d =
                (((ee + ((O + Math.imul(d, X)) | 0)) | 0) +
                  ((8191 &
                    (I =
                      ((I = (I + Math.imul(d, Q)) | 0) + Math.imul(p, X)) |
                      0)) <<
                    13)) |
                0),
              (ee =
                ((((D = (D + Math.imul(p, Q)) | 0) + (I >>> 13)) | 0) +
                  (d >>> 26)) |
                0),
              (d &= 67108863),
              (O = Math.imul(A, H)),
              (I = ((I = Math.imul(A, U)) + Math.imul(M, H)) | 0),
              (D = Math.imul(M, U)),
              (O = (O + Math.imul(k, j)) | 0),
              (I = ((I = (I + Math.imul(k, q)) | 0) + Math.imul(R, j)) | 0),
              (D = (D + Math.imul(R, q)) | 0),
              (O = (O + Math.imul(x, z)) | 0),
              (I = ((I = (I + Math.imul(x, F)) | 0) + Math.imul(S, z)) | 0),
              (D = (D + Math.imul(S, F)) | 0),
              (O = (O + Math.imul(b, W)) | 0),
              (I = ((I = (I + Math.imul(b, G)) | 0) + Math.imul(E, W)) | 0),
              (D = (D + Math.imul(E, G)) | 0),
              (O = (O + Math.imul(y, V)) | 0),
              (I = ((I = (I + Math.imul(y, J)) | 0) + Math.imul(w, V)) | 0),
              (D = (D + Math.imul(w, J)) | 0),
              (O = (O + Math.imul(_, Y)) | 0),
              (I = ((I = (I + Math.imul(_, Z)) | 0) + Math.imul(m, Y)) | 0),
              (D = (D + Math.imul(m, Z)) | 0),
              (v =
                (((ee + ((O + Math.imul(v, X)) | 0)) | 0) +
                  ((8191 &
                    (I =
                      ((I = (I + Math.imul(v, Q)) | 0) + Math.imul(g, X)) |
                      0)) <<
                    13)) |
                0),
              (ee =
                ((((D = (D + Math.imul(g, Q)) | 0) + (I >>> 13)) | 0) +
                  (v >>> 26)) |
                0),
              (v &= 67108863),
              (O = Math.imul(A, j)),
              (I = ((I = Math.imul(A, q)) + Math.imul(M, j)) | 0),
              (D = Math.imul(M, q)),
              (O = (O + Math.imul(k, z)) | 0),
              (I = ((I = (I + Math.imul(k, F)) | 0) + Math.imul(R, z)) | 0),
              (D = (D + Math.imul(R, F)) | 0),
              (O = (O + Math.imul(x, W)) | 0),
              (I = ((I = (I + Math.imul(x, G)) | 0) + Math.imul(S, W)) | 0),
              (D = (D + Math.imul(S, G)) | 0),
              (O = (O + Math.imul(b, V)) | 0),
              (I = ((I = (I + Math.imul(b, J)) | 0) + Math.imul(E, V)) | 0),
              (D = (D + Math.imul(E, J)) | 0),
              (O = (O + Math.imul(y, Y)) | 0),
              (I = ((I = (I + Math.imul(y, Z)) | 0) + Math.imul(w, Y)) | 0),
              (D = (D + Math.imul(w, Z)) | 0),
              (_ =
                (((ee + ((O + Math.imul(_, X)) | 0)) | 0) +
                  ((8191 &
                    (I =
                      ((I = (I + Math.imul(_, Q)) | 0) + Math.imul(m, X)) |
                      0)) <<
                    13)) |
                0),
              (ee =
                ((((D = (D + Math.imul(m, Q)) | 0) + (I >>> 13)) | 0) +
                  (_ >>> 26)) |
                0),
              (_ &= 67108863),
              (O = Math.imul(A, z)),
              (I = ((I = Math.imul(A, F)) + Math.imul(M, z)) | 0),
              (D = Math.imul(M, F)),
              (O = (O + Math.imul(k, W)) | 0),
              (I = ((I = (I + Math.imul(k, G)) | 0) + Math.imul(R, W)) | 0),
              (D = (D + Math.imul(R, G)) | 0),
              (O = (O + Math.imul(x, V)) | 0),
              (I = ((I = (I + Math.imul(x, J)) | 0) + Math.imul(S, V)) | 0),
              (D = (D + Math.imul(S, J)) | 0),
              (O = (O + Math.imul(b, Y)) | 0),
              (I = ((I = (I + Math.imul(b, Z)) | 0) + Math.imul(E, Y)) | 0),
              (D = (D + Math.imul(E, Z)) | 0),
              (y =
                (((ee + ((O + Math.imul(y, X)) | 0)) | 0) +
                  ((8191 &
                    (I =
                      ((I = (I + Math.imul(y, Q)) | 0) + Math.imul(w, X)) |
                      0)) <<
                    13)) |
                0),
              (ee =
                ((((D = (D + Math.imul(w, Q)) | 0) + (I >>> 13)) | 0) +
                  (y >>> 26)) |
                0),
              (y &= 67108863),
              (O = Math.imul(A, W)),
              (I = ((I = Math.imul(A, G)) + Math.imul(M, W)) | 0),
              (D = Math.imul(M, G)),
              (O = (O + Math.imul(k, V)) | 0),
              (I = ((I = (I + Math.imul(k, J)) | 0) + Math.imul(R, V)) | 0),
              (D = (D + Math.imul(R, J)) | 0),
              (O = (O + Math.imul(x, Y)) | 0),
              (I = ((I = (I + Math.imul(x, Z)) | 0) + Math.imul(S, Y)) | 0),
              (D = (D + Math.imul(S, Z)) | 0),
              (b =
                (((ee + ((O + Math.imul(b, X)) | 0)) | 0) +
                  ((8191 &
                    (I =
                      ((I = (I + Math.imul(b, Q)) | 0) + Math.imul(E, X)) |
                      0)) <<
                    13)) |
                0),
              (ee =
                ((((D = (D + Math.imul(E, Q)) | 0) + (I >>> 13)) | 0) +
                  (b >>> 26)) |
                0),
              (b &= 67108863),
              (O = Math.imul(A, V)),
              (I = ((I = Math.imul(A, J)) + Math.imul(M, V)) | 0),
              (D = Math.imul(M, J)),
              (O = (O + Math.imul(k, Y)) | 0),
              (I = ((I = (I + Math.imul(k, Z)) | 0) + Math.imul(R, Y)) | 0),
              (D = (D + Math.imul(R, Z)) | 0),
              (x =
                (((ee + ((O + Math.imul(x, X)) | 0)) | 0) +
                  ((8191 &
                    (I =
                      ((I = (I + Math.imul(x, Q)) | 0) + Math.imul(S, X)) |
                      0)) <<
                    13)) |
                0),
              (ee =
                ((((D = (D + Math.imul(S, Q)) | 0) + (I >>> 13)) | 0) +
                  (x >>> 26)) |
                0),
              (x &= 67108863),
              (O = Math.imul(A, Y)),
              (I = ((I = Math.imul(A, Z)) + Math.imul(M, Y)) | 0),
              (D = Math.imul(M, Z)),
              (k =
                (((ee + ((O + Math.imul(k, X)) | 0)) | 0) +
                  ((8191 &
                    (I =
                      ((I = (I + Math.imul(k, Q)) | 0) + Math.imul(R, X)) |
                      0)) <<
                    13)) |
                0),
              (ee =
                ((((D = (D + Math.imul(R, Q)) | 0) + (I >>> 13)) | 0) +
                  (k >>> 26)) |
                0),
              (k &= 67108863),
              (X =
                (((ee + Math.imul(A, X)) | 0) +
                  ((8191 &
                    (I = ((I = Math.imul(A, Q)) + Math.imul(M, X)) | 0)) <<
                    13)) |
                0),
              (ee =
                ((((D = Math.imul(M, Q)) + (I >>> 13)) | 0) + (X >>> 26)) | 0),
              (X &= 67108863),
              (u[0] = $),
              (u[1] = K),
              (u[2] = n),
              (u[3] = i),
              (u[4] = o),
              (u[5] = s),
              (u[6] = a),
              (u[7] = e),
              (u[8] = t),
              (u[9] = c),
              (u[10] = l),
              (u[11] = d),
              (u[12] = v),
              (u[13] = _),
              (u[14] = y),
              (u[15] = b),
              (u[16] = x),
              (u[17] = k),
              (u[18] = X),
              0 != ee && ((u[19] = ee), r.length++),
              r
            );
          };
          function p(e, t, r) {
            return new v().mulp(e, t, r);
          }
          function v(e, t) {
            (this.x = e), (this.y = t);
          }
          Math.imul || (d = h),
            (o.prototype.mulTo = function (e, t) {
              var r = this.length + e.length;
              return (t = (
                10 === this.length && 10 === e.length
                  ? d
                  : r < 63
                  ? h
                  : r < 1024
                  ? function (e, t, r) {
                      (r.negative = t.negative ^ e.negative),
                        (r.length = e.length + t.length);
                      for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                        for (
                          var a = i,
                            s = ((i = 0), 67108863 & n),
                            u = Math.min(o, t.length - 1),
                            c = Math.max(0, o - e.length + 1);
                          c <= u;
                          c++
                        ) {
                          var f,
                            l = (0 | e.words[o - c]) * (0 | t.words[c]);
                          s = 67108863 & (f = ((f = 67108863 & l) + s) | 0);
                          (i +=
                            (a =
                              ((a = (a + ((l / 67108864) | 0)) | 0) +
                                (f >>> 26)) |
                              0) >>> 26),
                            (a &= 67108863);
                        }
                        (r.words[o] = s), (n = a), (a = i);
                      }
                      return 0 !== n ? (r.words[o] = n) : r.length--, r.strip();
                    }
                  : p
              )(this, e, t));
            }),
            (v.prototype.makeRBT = function (e) {
              for (
                var t = new Array(e), r = o.prototype._countBits(e) - 1, n = 0;
                n < e;
                n++
              )
                t[n] = this.revBin(n, r, e);
              return t;
            }),
            (v.prototype.revBin = function (e, t, r) {
              if (0 === e || e === r - 1) return e;
              for (var n = 0, i = 0; i < t; i++)
                (n |= (1 & e) << (t - i - 1)), (e >>= 1);
              return n;
            }),
            (v.prototype.permute = function (e, t, r, n, i, o) {
              for (var a = 0; a < o; a++) (n[a] = t[e[a]]), (i[a] = r[e[a]]);
            }),
            (v.prototype.transform = function (e, t, r, n, i, o) {
              this.permute(o, e, t, r, n, i);
              for (var a = 1; a < i; a <<= 1)
                for (
                  var s = a << 1,
                    u = Math.cos((2 * Math.PI) / s),
                    c = Math.sin((2 * Math.PI) / s),
                    f = 0;
                  f < i;
                  f += s
                )
                  for (var l = u, h = c, d = 0; d < a; d++) {
                    var p = r[f + d],
                      v = n[f + d],
                      g = r[f + d + a],
                      _ = l * g - h * (m = n[f + d + a]),
                      m = l * m + h * g;
                    (r[f + d] = p + (g = _)),
                      (n[f + d] = v + m),
                      (r[f + d + a] = p - g),
                      (n[f + d + a] = v - m),
                      d !== s &&
                        ((_ = u * l - c * h), (h = u * h + c * l), (l = _));
                  }
            }),
            (v.prototype.guessLen13b = function (e, t) {
              e = 1 & (n = 1 | Math.max(t, e));
              for (var r = 0, n = (n / 2) | 0; n; n >>>= 1) r++;
              return 1 << (r + 1 + e);
            }),
            (v.prototype.conjugate = function (e, t, r) {
              if (!(r <= 1))
                for (var n = 0; n < r / 2; n++) {
                  var i = e[n];
                  (e[n] = e[r - n - 1]),
                    (e[r - n - 1] = i),
                    (i = t[n]),
                    (t[n] = -t[r - n - 1]),
                    (t[r - n - 1] = -i);
                }
            }),
            (v.prototype.normalize13b = function (e, t) {
              for (var r = 0, n = 0; n < t / 2; n++) {
                var i =
                  8192 * Math.round(e[2 * n + 1] / t) +
                  Math.round(e[2 * n] / t) +
                  r;
                (e[n] = 67108863 & i),
                  (r = i < 67108864 ? 0 : (i / 67108864) | 0);
              }
              return e;
            }),
            (v.prototype.convert13b = function (e, t, r, i) {
              for (var o = 0, a = 0; a < t; a++)
                (o += 0 | e[a]),
                  (r[2 * a] = 8191 & o),
                  (r[2 * a + 1] = 8191 & (o >>>= 13)),
                  (o >>>= 13);
              for (a = 2 * t; a < i; ++a) r[a] = 0;
              n(0 === o), n(0 == (-8192 & o));
            }),
            (v.prototype.stub = function (e) {
              for (var t = new Array(e), r = 0; r < e; r++) t[r] = 0;
              return t;
            }),
            (v.prototype.mulp = function (e, t, r) {
              var n = 2 * this.guessLen13b(e.length, t.length),
                i = this.makeRBT(n),
                o = this.stub(n),
                a = new Array(n),
                s = new Array(n),
                u = new Array(n),
                c = new Array(n),
                f = new Array(n),
                l = new Array(n),
                h = r.words;
              (h.length = n),
                this.convert13b(e.words, e.length, a, n),
                this.convert13b(t.words, t.length, c, n),
                this.transform(a, o, s, u, n, i),
                this.transform(c, o, f, l, n, i);
              for (var d = 0; d < n; d++) {
                var p = s[d] * f[d] - u[d] * l[d];
                (u[d] = s[d] * l[d] + u[d] * f[d]), (s[d] = p);
              }
              return (
                this.conjugate(s, u, n),
                this.transform(s, u, h, o, n, i),
                this.conjugate(h, o, n),
                this.normalize13b(h, n),
                (r.negative = e.negative ^ t.negative),
                (r.length = e.length + t.length),
                r.strip()
              );
            }),
            (o.prototype.mul = function (e) {
              var t = new o(null);
              return (
                (t.words = new Array(this.length + e.length)), this.mulTo(e, t)
              );
            }),
            (o.prototype.mulf = function (e) {
              var t = new o(null);
              return (
                (t.words = new Array(this.length + e.length)), p(this, e, t)
              );
            }),
            (o.prototype.imul = function (e) {
              return this.clone().mulTo(e, this);
            }),
            (o.prototype.imuln = function (e) {
              n("number" == typeof e), n(e < 67108864);
              for (var t = 0, r = 0; r < this.length; r++) {
                var i = (0 | this.words[r]) * e,
                  o = (67108863 & i) + (67108863 & t);
                (t >>= 26),
                  (t += (i / 67108864) | 0),
                  (t += o >>> 26),
                  (this.words[r] = 67108863 & o);
              }
              return 0 !== t && ((this.words[r] = t), this.length++), this;
            }),
            (o.prototype.muln = function (e) {
              return this.clone().imuln(e);
            }),
            (o.prototype.sqr = function () {
              return this.mul(this);
            }),
            (o.prototype.isqr = function () {
              return this.imul(this.clone());
            }),
            (o.prototype.pow = function (e) {
              var t = (function (e) {
                for (
                  var t = new Array(e.bitLength()), r = 0;
                  r < t.length;
                  r++
                ) {
                  var n = r % 26;
                  t[r] = (e.words[(r / 26) | 0] & (1 << n)) >>> n;
                }
                return t;
              })(e);
              if (0 === t.length) return new o(1);
              for (
                var r = this, n = 0;
                n < t.length && 0 === t[n];
                n++, r = r.sqr()
              );
              if (++n < t.length)
                for (var i = r.sqr(); n < t.length; n++, i = i.sqr())
                  0 !== t[n] && (r = r.mul(i));
              return r;
            }),
            (o.prototype.iushln = function (e) {
              n("number" == typeof e && 0 <= e);
              var t = e % 26,
                r = (e - t) / 26,
                i = (67108863 >>> (26 - t)) << (26 - t);
              if (0 != t) {
                for (var o = 0, a = 0; a < this.length; a++) {
                  var s = this.words[a] & i,
                    u = ((0 | this.words[a]) - s) << t;
                  (this.words[a] = u | o), (o = s >>> (26 - t));
                }
                o && ((this.words[a] = o), this.length++);
              }
              if (0 != r) {
                for (a = this.length - 1; 0 <= a; a--)
                  this.words[a + r] = this.words[a];
                for (a = 0; a < r; a++) this.words[a] = 0;
                this.length += r;
              }
              return this.strip();
            }),
            (o.prototype.ishln = function (e) {
              return n(0 === this.negative), this.iushln(e);
            }),
            (o.prototype.iushrn = function (e, t, r) {
              n("number" == typeof e && 0 <= e);
              var i = t ? (t - (t % 26)) / 26 : 0,
                o = e % 26,
                a = Math.min((e - o) / 26, this.length),
                s = 67108863 ^ ((67108863 >>> o) << o),
                u = r;
              if (((i -= a), (i = Math.max(0, i)), u)) {
                for (var c = 0; c < a; c++) u.words[c] = this.words[c];
                u.length = a;
              }
              if (0 !== a)
                if (this.length > a)
                  for (this.length -= a, c = 0; c < this.length; c++)
                    this.words[c] = this.words[c + a];
                else (this.words[0] = 0), (this.length = 1);
              var f = 0;
              for (c = this.length - 1; 0 <= c && (0 !== f || i <= c); c--) {
                var l = 0 | this.words[c];
                (this.words[c] = (f << (26 - o)) | (l >>> o)), (f = l & s);
              }
              return (
                u && 0 !== f && (u.words[u.length++] = f),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this.strip()
              );
            }),
            (o.prototype.ishrn = function (e, t, r) {
              return n(0 === this.negative), this.iushrn(e, t, r);
            }),
            (o.prototype.shln = function (e) {
              return this.clone().ishln(e);
            }),
            (o.prototype.ushln = function (e) {
              return this.clone().iushln(e);
            }),
            (o.prototype.shrn = function (e) {
              return this.clone().ishrn(e);
            }),
            (o.prototype.ushrn = function (e) {
              return this.clone().iushrn(e);
            }),
            (o.prototype.testn = function (e) {
              n("number" == typeof e && 0 <= e);
              var t = e % 26;
              e = (e - t) / 26;
              return !(this.length <= e) && !!(this.words[e] & (1 << t));
            }),
            (o.prototype.imaskn = function (e) {
              n("number" == typeof e && 0 <= e);
              var t = e % 26;
              e = (e - t) / 26;
              return (
                n(
                  0 === this.negative,
                  "imaskn works only with positive numbers"
                ),
                this.length <= e
                  ? this
                  : (0 != t && e++,
                    (this.length = Math.min(e, this.length)),
                    0 != t &&
                      (this.words[this.length - 1] &=
                        67108863 ^ ((67108863 >>> t) << t)),
                    this.strip())
              );
            }),
            (o.prototype.maskn = function (e) {
              return this.clone().imaskn(e);
            }),
            (o.prototype.iaddn = function (e) {
              return (
                n("number" == typeof e),
                n(e < 67108864),
                e < 0
                  ? this.isubn(-e)
                  : 0 !== this.negative
                  ? (1 === this.length && (0 | this.words[0]) < e
                      ? ((this.words[0] = e - (0 | this.words[0])),
                        (this.negative = 0))
                      : ((this.negative = 0),
                        this.isubn(e),
                        (this.negative = 1)),
                    this)
                  : this._iaddn(e)
              );
            }),
            (o.prototype._iaddn = function (e) {
              this.words[0] += e;
              for (var t = 0; t < this.length && 67108864 <= this.words[t]; t++)
                (this.words[t] -= 67108864),
                  t === this.length - 1
                    ? (this.words[t + 1] = 1)
                    : this.words[t + 1]++;
              return (this.length = Math.max(this.length, t + 1)), this;
            }),
            (o.prototype.isubn = function (e) {
              if ((n("number" == typeof e), n(e < 67108864), e < 0))
                return this.iaddn(-e);
              if (0 !== this.negative)
                return (
                  (this.negative = 0), this.iaddn(e), (this.negative = 1), this
                );
              if (
                ((this.words[0] -= e), 1 === this.length && this.words[0] < 0)
              )
                (this.words[0] = -this.words[0]), (this.negative = 1);
              else
                for (var t = 0; t < this.length && this.words[t] < 0; t++)
                  (this.words[t] += 67108864), --this.words[t + 1];
              return this.strip();
            }),
            (o.prototype.addn = function (e) {
              return this.clone().iaddn(e);
            }),
            (o.prototype.subn = function (e) {
              return this.clone().isubn(e);
            }),
            (o.prototype.iabs = function () {
              return (this.negative = 0), this;
            }),
            (o.prototype.abs = function () {
              return this.clone().iabs();
            }),
            (o.prototype._ishlnsubmul = function (e, t, r) {
              var i = e.length + r;
              this._expand(i);
              for (var o = 0, a = 0; a < e.length; a++) {
                var s = (0 | this.words[a + r]) + o,
                  u = (0 | e.words[a]) * t;
                o = ((s -= 67108863 & u) >> 26) - ((u / 67108864) | 0);
                this.words[a + r] = 67108863 & s;
              }
              for (; a < this.length - r; a++)
                (o = (s = (0 | this.words[a + r]) + o) >> 26),
                  (this.words[a + r] = 67108863 & s);
              if (0 === o) return this.strip();
              for (n(-1 === o), a = o = 0; a < this.length; a++)
                (o = (s = -(0 | this.words[a]) + o) >> 26),
                  (this.words[a] = 67108863 & s);
              return (this.negative = 1), this.strip();
            }),
            (o.prototype._wordDiv = function (e, t) {
              var r = (this.length, e.length),
                n = this.clone(),
                i = e,
                a = 0 | i.words[i.length - 1];
              0 != (r = 26 - this._countBits(a)) &&
                ((i = i.ushln(r)),
                n.iushln(r),
                (a = 0 | i.words[i.length - 1]));
              var s,
                u = n.length - i.length;
              if ("mod" !== t) {
                ((s = new o(null)).length = 1 + u),
                  (s.words = new Array(s.length));
                for (var c = 0; c < s.length; c++) s.words[c] = 0;
              }
              0 === (e = n.clone()._ishlnsubmul(i, 1, u)).negative &&
                ((n = e), s && (s.words[u] = 1));
              for (var f = u - 1; 0 <= f; f--) {
                var l =
                  67108864 * (0 | n.words[i.length + f]) +
                  (0 | n.words[i.length + f - 1]);
                l = Math.min((l / a) | 0, 67108863);
                for (n._ishlnsubmul(i, l, f); 0 !== n.negative; )
                  l--,
                    (n.negative = 0),
                    n._ishlnsubmul(i, 1, f),
                    n.isZero() || (n.negative ^= 1);
                s && (s.words[f] = l);
              }
              return (
                s && s.strip(),
                n.strip(),
                "div" !== t && 0 != r && n.iushrn(r),
                { div: s || null, mod: n }
              );
            }),
            (o.prototype.divmod = function (e, t, r) {
              return (
                n(!e.isZero()),
                this.isZero()
                  ? { div: new o(0), mod: new o(0) }
                  : 0 !== this.negative && 0 === e.negative
                  ? ((s = this.neg().divmod(e, t)),
                    "mod" !== t && (i = s.div.neg()),
                    "div" !== t &&
                      ((a = s.mod.neg()), r && 0 !== a.negative && a.iadd(e)),
                    { div: i, mod: a })
                  : 0 === this.negative && 0 !== e.negative
                  ? ((s = this.divmod(e.neg(), t)),
                    { div: (i = "mod" !== t ? s.div.neg() : i), mod: s.mod })
                  : 0 != (this.negative & e.negative)
                  ? ((s = this.neg().divmod(e.neg(), t)),
                    "div" !== t &&
                      ((a = s.mod.neg()), r && 0 !== a.negative && a.isub(e)),
                    { div: s.div, mod: a })
                  : e.length > this.length || this.cmp(e) < 0
                  ? { div: new o(0), mod: this }
                  : 1 === e.length
                  ? "div" === t
                    ? { div: this.divn(e.words[0]), mod: null }
                    : "mod" === t
                    ? { div: null, mod: new o(this.modn(e.words[0])) }
                    : {
                        div: this.divn(e.words[0]),
                        mod: new o(this.modn(e.words[0])),
                      }
                  : this._wordDiv(e, t)
              );
              var i, a, s;
            }),
            (o.prototype.div = function (e) {
              return this.divmod(e, "div", !1).div;
            }),
            (o.prototype.mod = function (e) {
              return this.divmod(e, "mod", !1).mod;
            }),
            (o.prototype.umod = function (e) {
              return this.divmod(e, "mod", !0).mod;
            }),
            (o.prototype.divRound = function (e) {
              var t = this.divmod(e);
              if (t.mod.isZero()) return t.div;
              var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                n = e.ushrn(1);
              e = e.andln(1);
              return (n = r.cmp(n)) < 0 || (1 === e && 0 === n)
                ? t.div
                : 0 !== t.div.negative
                ? t.div.isubn(1)
                : t.div.iaddn(1);
            }),
            (o.prototype.modn = function (e) {
              n(e <= 67108863);
              for (
                var t = (1 << 26) % e, r = 0, i = this.length - 1;
                0 <= i;
                i--
              )
                r = (t * r + (0 | this.words[i])) % e;
              return r;
            }),
            (o.prototype.idivn = function (e) {
              n(e <= 67108863);
              for (var t = 0, r = this.length - 1; 0 <= r; r--) {
                var i = (0 | this.words[r]) + 67108864 * t;
                (this.words[r] = (i / e) | 0), (t = i % e);
              }
              return this.strip();
            }),
            (o.prototype.divn = function (e) {
              return this.clone().idivn(e);
            }),
            (o.prototype.egcd = function (e) {
              n(0 === e.negative), n(!e.isZero());
              for (
                var t = this,
                  r = e.clone(),
                  i =
                    ((t = 0 !== t.negative ? t.umod(e) : t.clone()), new o(1)),
                  a = new o(0),
                  s = new o(0),
                  u = new o(1),
                  c = 0;
                t.isEven() && r.isEven();

              )
                t.iushrn(1), r.iushrn(1), ++c;
              for (var f = r.clone(), l = t.clone(); !t.isZero(); ) {
                for (
                  var h = 0, d = 1;
                  0 == (t.words[0] & d) && h < 26;
                  ++h, d <<= 1
                );
                if (0 < h)
                  for (t.iushrn(h); 0 < h--; )
                    (i.isOdd() || a.isOdd()) && (i.iadd(f), a.isub(l)),
                      i.iushrn(1),
                      a.iushrn(1);
                for (
                  var p = 0, v = 1;
                  0 == (r.words[0] & v) && p < 26;
                  ++p, v <<= 1
                );
                if (0 < p)
                  for (r.iushrn(p); 0 < p--; )
                    (s.isOdd() || u.isOdd()) && (s.iadd(f), u.isub(l)),
                      s.iushrn(1),
                      u.iushrn(1);
                0 <= t.cmp(r)
                  ? (t.isub(r), i.isub(s), a.isub(u))
                  : (r.isub(t), s.isub(i), u.isub(a));
              }
              return { a: s, b: u, gcd: r.iushln(c) };
            }),
            (o.prototype._invmp = function (e) {
              n(0 === e.negative), n(!e.isZero());
              for (
                var t,
                  r = this,
                  i = e.clone(),
                  a =
                    ((r = 0 !== r.negative ? r.umod(e) : r.clone()), new o(1)),
                  s = new o(0),
                  u = i.clone();
                0 < r.cmpn(1) && 0 < i.cmpn(1);

              ) {
                for (
                  var c = 0, f = 1;
                  0 == (r.words[0] & f) && c < 26;
                  ++c, f <<= 1
                );
                if (0 < c)
                  for (r.iushrn(c); 0 < c--; )
                    a.isOdd() && a.iadd(u), a.iushrn(1);
                for (
                  var l = 0, h = 1;
                  0 == (i.words[0] & h) && l < 26;
                  ++l, h <<= 1
                );
                if (0 < l)
                  for (i.iushrn(l); 0 < l--; )
                    s.isOdd() && s.iadd(u), s.iushrn(1);
                0 <= r.cmp(i) ? (r.isub(i), a.isub(s)) : (i.isub(r), s.isub(a));
              }
              return (t = 0 === r.cmpn(1) ? a : s).cmpn(0) < 0 && t.iadd(e), t;
            }),
            (o.prototype.gcd = function (e) {
              if (this.isZero()) return e.abs();
              if (e.isZero()) return this.abs();
              var t = this.clone(),
                r = e.clone();
              t.negative = 0;
              for (var n = (r.negative = 0); t.isEven() && r.isEven(); n++)
                t.iushrn(1), r.iushrn(1);
              for (;;) {
                for (; t.isEven(); ) t.iushrn(1);
                for (; r.isEven(); ) r.iushrn(1);
                var i = t.cmp(r);
                if (i < 0) {
                  var o = t;
                  (t = r), (r = o);
                } else if (0 === i || 0 === r.cmpn(1)) break;
                t.isub(r);
              }
              return r.iushln(n);
            }),
            (o.prototype.invm = function (e) {
              return this.egcd(e).a.umod(e);
            }),
            (o.prototype.isEven = function () {
              return 0 == (1 & this.words[0]);
            }),
            (o.prototype.isOdd = function () {
              return 1 == (1 & this.words[0]);
            }),
            (o.prototype.andln = function (e) {
              return this.words[0] & e;
            }),
            (o.prototype.bincn = function (e) {
              n("number" == typeof e);
              e = (e - (t = e % 26)) / 26;
              var t = 1 << t;
              if (this.length <= e)
                return this._expand(1 + e), (this.words[e] |= t), this;
              for (var r = t, i = e; 0 !== r && i < this.length; i++) {
                var o = 0 | this.words[i];
                r = (o += r) >>> 26;
                (o &= 67108863), (this.words[i] = o);
              }
              return 0 !== r && ((this.words[i] = r), this.length++), this;
            }),
            (o.prototype.isZero = function () {
              return 1 === this.length && 0 === this.words[0];
            }),
            (o.prototype.cmpn = function (e) {
              var t = e < 0;
              return 0 === this.negative || t
                ? 0 === this.negative && t
                  ? 1
                  : (this.strip(),
                    (e =
                      1 < this.length
                        ? 1
                        : (n((e = t ? -e : e) <= 67108863, "Number is too big"),
                          (t = 0 | this.words[0]) === e ? 0 : t < e ? -1 : 1)),
                    0 !== this.negative ? 0 | -e : e)
                : -1;
            }),
            (o.prototype.cmp = function (e) {
              return 0 !== this.negative && 0 === e.negative
                ? -1
                : 0 === this.negative && 0 !== e.negative
                ? 1
                : ((e = this.ucmp(e)), 0 !== this.negative ? 0 | -e : e);
            }),
            (o.prototype.ucmp = function (e) {
              if (this.length > e.length) return 1;
              if (this.length < e.length) return -1;
              for (var t = 0, r = this.length - 1; 0 <= r; r--) {
                var n = 0 | this.words[r],
                  i = 0 | e.words[r];
                if (n != i) {
                  n < i ? (t = -1) : i < n && (t = 1);
                  break;
                }
              }
              return t;
            }),
            (o.prototype.gtn = function (e) {
              return 1 === this.cmpn(e);
            }),
            (o.prototype.gt = function (e) {
              return 1 === this.cmp(e);
            }),
            (o.prototype.gten = function (e) {
              return 0 <= this.cmpn(e);
            }),
            (o.prototype.gte = function (e) {
              return 0 <= this.cmp(e);
            }),
            (o.prototype.ltn = function (e) {
              return -1 === this.cmpn(e);
            }),
            (o.prototype.lt = function (e) {
              return -1 === this.cmp(e);
            }),
            (o.prototype.lten = function (e) {
              return this.cmpn(e) <= 0;
            }),
            (o.prototype.lte = function (e) {
              return this.cmp(e) <= 0;
            }),
            (o.prototype.eqn = function (e) {
              return 0 === this.cmpn(e);
            }),
            (o.prototype.eq = function (e) {
              return 0 === this.cmp(e);
            }),
            (o.red = function (e) {
              return new E(e);
            }),
            (o.prototype.toRed = function (e) {
              return (
                n(!this.red, "Already a number in reduction context"),
                n(0 === this.negative, "red works only with positives"),
                e.convertTo(this)._forceRed(e)
              );
            }),
            (o.prototype.fromRed = function () {
              return (
                n(
                  this.red,
                  "fromRed works only with numbers in reduction context"
                ),
                this.red.convertFrom(this)
              );
            }),
            (o.prototype._forceRed = function (e) {
              return (this.red = e), this;
            }),
            (o.prototype.forceRed = function (e) {
              return (
                n(!this.red, "Already a number in reduction context"),
                this._forceRed(e)
              );
            }),
            (o.prototype.redAdd = function (e) {
              return (
                n(this.red, "redAdd works only with red numbers"),
                this.red.add(this, e)
              );
            }),
            (o.prototype.redIAdd = function (e) {
              return (
                n(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, e)
              );
            }),
            (o.prototype.redSub = function (e) {
              return (
                n(this.red, "redSub works only with red numbers"),
                this.red.sub(this, e)
              );
            }),
            (o.prototype.redISub = function (e) {
              return (
                n(this.red, "redISub works only with red numbers"),
                this.red.isub(this, e)
              );
            }),
            (o.prototype.redShl = function (e) {
              return (
                n(this.red, "redShl works only with red numbers"),
                this.red.shl(this, e)
              );
            }),
            (o.prototype.redMul = function (e) {
              return (
                n(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, e),
                this.red.mul(this, e)
              );
            }),
            (o.prototype.redIMul = function (e) {
              return (
                n(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, e),
                this.red.imul(this, e)
              );
            }),
            (o.prototype.redSqr = function () {
              return (
                n(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (o.prototype.redISqr = function () {
              return (
                n(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (o.prototype.redSqrt = function () {
              return (
                n(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (o.prototype.redInvm = function () {
              return (
                n(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (o.prototype.redNeg = function () {
              return (
                n(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (o.prototype.redPow = function (e) {
              return (
                n(this.red && !e.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, e)
              );
            });
          var g = { k256: null, p224: null, p192: null, p25519: null };
          function _(e, t) {
            (this.name = e),
              (this.p = new o(t, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new o(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp());
          }
          function m() {
            _.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
            );
          }
          function y() {
            _.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
            );
          }
          function w() {
            _.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
            );
          }
          function b() {
            _.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
            );
          }
          function E(e) {
            var t;
            "string" == typeof e
              ? ((t = o._prime(e)), (this.m = t.p), (this.prime = t))
              : (n(e.gtn(1), "modulus must be greater than 1"),
                (this.m = e),
                (this.prime = null));
          }
          function x(e) {
            E.call(this, e),
              (this.shift = this.m.bitLength()),
              this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new o(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv));
          }
          (_.prototype._tmp = function () {
            var e = new o(null);
            return (e.words = new Array(Math.ceil(this.n / 13))), e;
          }),
            (_.prototype.ireduce = function (e) {
              for (
                var t, r = e;
                this.split(r, this.tmp),
                  (t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()) >
                    this.n;

              );
              return (
                0 === (e = t < this.n ? -1 : r.ucmp(this.p))
                  ? ((r.words[0] = 0), (r.length = 1))
                  : 0 < e
                  ? r.isub(this.p)
                  : r.strip(),
                r
              );
            }),
            (_.prototype.split = function (e, t) {
              e.iushrn(this.n, 0, t);
            }),
            (_.prototype.imulK = function (e) {
              return e.imul(this.k);
            }),
            i(m, _),
            (m.prototype.split = function (e, t) {
              for (var r = Math.min(e.length, 9), n = 0; n < r; n++)
                t.words[n] = e.words[n];
              if (((t.length = r), e.length <= 9))
                return (e.words[0] = 0), void (e.length = 1);
              var i = e.words[9];
              for (
                t.words[t.length++] = 4194303 & i, n = 10;
                n < e.length;
                n++
              ) {
                var o = 0 | e.words[n];
                (e.words[n - 10] = ((4194303 & o) << 4) | (i >>> 22)), (i = o);
              }
              0 === (e.words[n - 10] = i >>>= 22) && 10 < e.length
                ? (e.length -= 10)
                : (e.length -= 9);
            }),
            (m.prototype.imulK = function (e) {
              (e.words[e.length] = 0),
                (e.words[e.length + 1] = 0),
                (e.length += 2);
              for (var t = 0, r = 0; r < e.length; r++) {
                var n = 0 | e.words[r];
                (t += 977 * n),
                  (e.words[r] = 67108863 & t),
                  (t = 64 * n + ((t / 67108864) | 0));
              }
              return (
                0 === e.words[e.length - 1] &&
                  (e.length--, 0 === e.words[e.length - 1] && e.length--),
                e
              );
            }),
            i(y, _),
            i(w, _),
            i(b, _),
            (b.prototype.imulK = function (e) {
              for (var t = 0, r = 0; r < e.length; r++) {
                var n = 19 * (0 | e.words[r]) + t,
                  i = 67108863 & n;
                (n >>>= 26), (e.words[r] = i), (t = n);
              }
              return 0 !== t && (e.words[e.length++] = t), e;
            }),
            (o._prime = function (e) {
              if (g[e]) return g[e];
              var t;
              if ("k256" === e) t = new m();
              else if ("p224" === e) t = new y();
              else if ("p192" === e) t = new w();
              else {
                if ("p25519" !== e) throw new Error("Unknown prime " + e);
                t = new b();
              }
              return (g[e] = t);
            }),
            (E.prototype._verify1 = function (e) {
              n(0 === e.negative, "red works only with positives"),
                n(e.red, "red works only with red numbers");
            }),
            (E.prototype._verify2 = function (e, t) {
              n(
                0 == (e.negative | t.negative),
                "red works only with positives"
              ),
                n(e.red && e.red === t.red, "red works only with red numbers");
            }),
            (E.prototype.imod = function (e) {
              return (
                this.prime ? this.prime.ireduce(e) : e.umod(this.m)
              )._forceRed(this);
            }),
            (E.prototype.neg = function (e) {
              return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this);
            }),
            (E.prototype.add = function (e, t) {
              return (
                this._verify2(e, t),
                0 <= (t = e.add(t)).cmp(this.m) && t.isub(this.m),
                t._forceRed(this)
              );
            }),
            (E.prototype.iadd = function (e, t) {
              return (
                this._verify2(e, t),
                0 <= (t = e.iadd(t)).cmp(this.m) && t.isub(this.m),
                t
              );
            }),
            (E.prototype.sub = function (e, t) {
              return (
                this._verify2(e, t),
                (t = e.sub(t)).cmpn(0) < 0 && t.iadd(this.m),
                t._forceRed(this)
              );
            }),
            (E.prototype.isub = function (e, t) {
              return (
                this._verify2(e, t),
                (t = e.isub(t)).cmpn(0) < 0 && t.iadd(this.m),
                t
              );
            }),
            (E.prototype.shl = function (e, t) {
              return this._verify1(e), this.imod(e.ushln(t));
            }),
            (E.prototype.imul = function (e, t) {
              return this._verify2(e, t), this.imod(e.imul(t));
            }),
            (E.prototype.mul = function (e, t) {
              return this._verify2(e, t), this.imod(e.mul(t));
            }),
            (E.prototype.isqr = function (e) {
              return this.imul(e, e.clone());
            }),
            (E.prototype.sqr = function (e) {
              return this.mul(e, e);
            }),
            (E.prototype.sqrt = function (e) {
              if (e.isZero()) return e.clone();
              var t = this.m.andln(3);
              if ((n(t % 2 == 1), 3 === t))
                return (t = this.m.add(new o(1)).iushrn(2)), this.pow(e, t);
              for (
                var r = this.m.subn(1), i = 0;
                !r.isZero() && 0 === r.andln(1);

              )
                i++, r.iushrn(1);
              n(!r.isZero());
              for (
                var a = new o(1).toRed(this),
                  s = a.redNeg(),
                  u = this.m.subn(1).iushrn(1),
                  c = new o(2 * (c = this.m.bitLength()) * c).toRed(this);
                0 !== this.pow(c, u).cmp(s);

              )
                c.redIAdd(s);
              for (
                var f = this.pow(c, r),
                  l = this.pow(e, r.addn(1).iushrn(1)),
                  h = this.pow(e, r),
                  d = i;
                0 !== h.cmp(a);

              ) {
                for (var p = h, v = 0; 0 !== p.cmp(a); v++) p = p.redSqr();
                n(v < d);
                var g = this.pow(f, new o(1).iushln(d - v - 1));
                (l = l.redMul(g)), (f = g.redSqr()), (h = h.redMul(f)), (d = v);
              }
              return l;
            }),
            (E.prototype.invm = function (e) {
              return 0 !== (e = e._invmp(this.m)).negative
                ? ((e.negative = 0), this.imod(e).redNeg())
                : this.imod(e);
            }),
            (E.prototype.pow = function (e, t) {
              if (t.isZero()) return new o(1).toRed(this);
              if (0 === t.cmpn(1)) return e.clone();
              var r = new Array(16);
              (r[0] = new o(1).toRed(this)), (r[1] = e);
              for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], e);
              var i = r[0],
                a = 0,
                s = 0,
                u = t.bitLength() % 26;
              for (0 === u && (u = 26), n = t.length - 1; 0 <= n; n--) {
                for (var c = t.words[n], f = u - 1; 0 <= f; f--) {
                  var l = (c >> f) & 1;
                  i !== r[0] && (i = this.sqr(i)),
                    0 != l || 0 !== a
                      ? ((a <<= 1),
                        (a |= l),
                        (4 === ++s || (0 === n && 0 === f)) &&
                          ((i = this.mul(i, r[a])), (a = s = 0)))
                      : (s = 0);
                }
                u = 26;
              }
              return i;
            }),
            (E.prototype.convertTo = function (e) {
              var t = e.umod(this.m);
              return t === e ? t.clone() : t;
            }),
            (E.prototype.convertFrom = function (e) {
              return ((e = e.clone()).red = null), e;
            }),
            (o.mont = function (e) {
              return new x(e);
            }),
            i(x, E),
            (x.prototype.convertTo = function (e) {
              return this.imod(e.ushln(this.shift));
            }),
            (x.prototype.convertFrom = function (e) {
              return ((e = this.imod(e.mul(this.rinv))).red = null), e;
            }),
            (x.prototype.imul = function (e, t) {
              return e.isZero() || t.isZero()
                ? ((e.words[0] = 0), (e.length = 1), e)
                : ((t = (e = e.imul(t))
                    .maskn(this.shift)
                    .mul(this.minv)
                    .imaskn(this.shift)
                    .mul(this.m)),
                  (t = e = e.isub(t).iushrn(this.shift)),
                  0 <= e.cmp(this.m)
                    ? (t = e.isub(this.m))
                    : e.cmpn(0) < 0 && (t = e.iadd(this.m)),
                  t._forceRed(this));
            }),
            (x.prototype.mul = function (e, t) {
              return e.isZero() || t.isZero()
                ? new o(0)._forceRed(this)
                : ((t = (e = e.mul(t))
                    .maskn(this.shift)
                    .mul(this.minv)
                    .imaskn(this.shift)
                    .mul(this.m)),
                  (t = e = e.isub(t).iushrn(this.shift)),
                  0 <= e.cmp(this.m)
                    ? (t = e.isub(this.m))
                    : e.cmpn(0) < 0 && (t = e.iadd(this.m)),
                  t._forceRed(this));
            }),
            (x.prototype.invm = function (e) {
              return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this);
            });
        })(e, this);
      }.call(this, r(163)(e)));
    },
    1391: function (e, t, r) {
      (function (t) {
        var n = r(1272).strict;
        e.exports = function (e) {
          if (n(e)) {
            var r = t.from(e.buffer);
            return e.byteLength !== e.buffer.byteLength
              ? r.slice(e.byteOffset, e.byteOffset + e.byteLength)
              : r;
          }
          return t.from(e);
        };
      }.call(this, r(532).Buffer));
    },
    1392: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parseTransactionData =
          t.parsePersonalSign =
          t.isValidAddress =
          t.toChecksumAddress =
            void 0);
      var n = r(1393),
        i = r(1271),
        o = r(1273),
        a = r(1276),
        s = r(1122);
      function u(e) {
        e = s.removeHexPrefix(e.toLowerCase());
        for (
          var t = s.removeHexPrefix(n.keccak_256(i.convertUtf8ToBuffer(e))),
            r = "",
            o = 0;
          o < e.length;
          o++
        )
          7 < parseInt(t[o], 16) ? (r += e[o].toUpperCase()) : (r += e[o]);
        return s.addHexPrefix(r);
      }
      (t.toChecksumAddress = u),
        (t.isValidAddress = function (e) {
          return (
            !!e &&
            "0x" === e.toLowerCase().substring(0, 2) &&
            !!/^(0x)?[0-9a-f]{40}$/i.test(e) &&
            (!(
              !/^(0x)?[0-9a-f]{40}$/.test(e) && !/^(0x)?[0-9A-F]{40}$/.test(e)
            ) ||
              e === u(e))
          );
        }),
        (t.parsePersonalSign = function (e) {
          return (
            a.isEmptyArray(e) ||
              a.isHexString(e[0]) ||
              (e[0] = i.convertUtf8ToHex(e[0])),
            e
          );
        }),
        (t.parseTransactionData = function (e) {
          if (void 0 === e.from || !t.isValidAddress(e.from))
            throw new Error(
              "Transaction object must include a valid 'from' value."
            );
          function r(e) {
            var t = e;
            return (
              ("number" != typeof e &&
                ("string" != typeof e || a.isEmptyString(e))) ||
                (a.isHexString(e)
                  ? "string" == typeof e && (t = o.sanitizeHex(e))
                  : (t = i.convertNumberToHex(e))),
              "string" == typeof t ? o.removeHexLeadingZeros(t) : t
            );
          }
          var n = {
              from: o.sanitizeHex(e.from),
              to: void 0 === e.to ? "" : o.sanitizeHex(e.to),
              gasPrice: void 0 === e.gasPrice ? "" : r(e.gasPrice),
              gas:
                void 0 === e.gas
                  ? void 0 === e.gasLimit
                    ? ""
                    : r(e.gasLimit)
                  : r(e.gas),
              value: void 0 === e.value ? "" : r(e.value),
              nonce: void 0 === e.nonce ? "" : r(e.nonce),
              data: void 0 === e.data ? "" : o.sanitizeHex(e.data) || "0x",
            },
            s = ["gasPrice", "gas", "value", "nonce"];
          return (
            Object.keys(n).forEach(function (e) {
              !n[e].trim().length && s.includes(e) && delete n[e];
            }),
            n
          );
        });
    },
    1393: function (e, t, r) {
      (function (n, i) {
        var o;
        !(function () {
          "use strict";
          var a = "input is invalid type",
            s = (_ = "object" == typeof window) ? window : {},
            u = !(_ = !s.JS_SHA3_NO_WINDOW && _) && "object" == typeof self;
          !s.JS_SHA3_NO_NODE_JS &&
          "object" == typeof n &&
          n.versions &&
          n.versions.node
            ? (s = i)
            : u && (s = self);
          var c = !s.JS_SHA3_NO_COMMON_JS && "object" == typeof e && e.exports,
            f = r(1394),
            l = !s.JS_SHA3_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
            h = "0123456789abcdef".split(""),
            d = [4, 1024, 262144, 67108864],
            p = [0, 8, 16, 24],
            v = [
              1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907,
              0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138,
              0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139,
              2147483648, 32905, 2147483648, 32771, 2147483648, 32770,
              2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648,
              2147516545, 2147483648, 32896, 2147483648, 2147483649, 0,
              2147516424, 2147483648,
            ],
            g = [224, 256, 384, 512],
            _ = [128, 256],
            m = ["hex", "buffer", "arrayBuffer", "array", "digest"],
            y = { 128: 168, 256: 136 };
          (!s.JS_SHA3_NO_NODE_JS && Array.isArray) ||
            (Array.isArray = function (e) {
              return "[object Array]" === Object.prototype.toString.call(e);
            }),
            !l ||
              (!s.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView) ||
              (ArrayBuffer.isView = function (e) {
                return (
                  "object" == typeof e &&
                  e.buffer &&
                  e.buffer.constructor === ArrayBuffer
                );
              });
          for (
            var w = function (e, t, r) {
                return function (n) {
                  return new I(e, t, e).update(n)[r]();
                };
              },
              b = function (e, t, r) {
                return function (n, i) {
                  return new I(e, t, i).update(n)[r]();
                };
              },
              E = function (e, t, r) {
                return function (t, n, i, o) {
                  return R["cshake" + e].update(t, n, i, o)[r]();
                };
              },
              x = function (e, t, r) {
                return function (t, n, i, o) {
                  return R["kmac" + e].update(t, n, i, o)[r]();
                };
              },
              S = function (e, t, r, n) {
                for (var i = 0; i < m.length; ++i) {
                  var o = m[i];
                  e[o] = t(r, n, o);
                }
                return e;
              },
              k = [
                {
                  name: "keccak",
                  padding: [1, 256, 65536, 16777216],
                  bits: g,
                  createMethod: (u = function (e, t) {
                    var r = w(e, t, "hex");
                    return (
                      (r.create = function () {
                        return new I(e, t, e);
                      }),
                      (r.update = function (e) {
                        return r.create().update(e);
                      }),
                      S(r, w, e, t)
                    );
                  }),
                },
                {
                  name: "sha3",
                  padding: [6, 1536, 393216, 100663296],
                  bits: g,
                  createMethod: u,
                },
                {
                  name: "shake",
                  padding: [31, 7936, 2031616, 520093696],
                  bits: _,
                  createMethod: function (e, t) {
                    var r = b(e, t, "hex");
                    return (
                      (r.create = function (r) {
                        return new I(e, t, r);
                      }),
                      (r.update = function (e, t) {
                        return r.create(t).update(e);
                      }),
                      S(r, b, e, t)
                    );
                  },
                },
                {
                  name: "cshake",
                  padding: d,
                  bits: _,
                  createMethod: function (e, t) {
                    var r = y[e],
                      n = E(e, 0, "hex");
                    return (
                      (n.create = function (n, i, o) {
                        return i || o
                          ? new I(e, t, n).bytepad([i, o], r)
                          : R["shake" + e].create(n);
                      }),
                      (n.update = function (e, t, r, i) {
                        return n.create(t, r, i).update(e);
                      }),
                      S(n, E, e, t)
                    );
                  },
                },
                {
                  name: "kmac",
                  padding: d,
                  bits: _,
                  createMethod: function (e, t) {
                    var r = y[e],
                      n = x(e, 0, "hex");
                    return (
                      (n.create = function (n, i, o) {
                        return new L(e, t, i)
                          .bytepad(["KMAC", o], r)
                          .bytepad([n], r);
                      }),
                      (n.update = function (e, t, r, i) {
                        return n.create(e, r, i).update(t);
                      }),
                      S(n, x, e, t)
                    );
                  },
                },
              ],
              R = {},
              A = [],
              M = 0;
            M < k.length;
            ++M
          )
            for (var T = k[M], C = T.bits, O = 0; O < C.length; ++O) {
              var P,
                N = T.name + "_" + C[O];
              A.push(N),
                (R[N] = T.createMethod(C[O], T.padding)),
                "sha3" !== T.name &&
                  ((P = T.name + C[O]), A.push(P), (R[P] = R[N]));
            }
          function I(e, t, r) {
            (this.blocks = []),
              (this.s = []),
              (this.padding = t),
              (this.outputBits = r),
              (this.reset = !0),
              (this.finalized = !1),
              (this.block = 0),
              (this.start = 0),
              (this.blockCount = (1600 - (e << 1)) >> 5),
              (this.byteCount = this.blockCount << 2),
              (this.outputBlocks = r >> 5),
              (this.extraBytes = (31 & r) >> 3);
            for (var n = 0; n < 50; ++n) this.s[n] = 0;
          }
          function L(e, t, r) {
            I.call(this, e, t, r);
          }
          (I.prototype.update = function (e) {
            if (this.finalized) throw new Error("finalize already called");
            var t,
              r = typeof e;
            if ("string" != r) {
              if ("object" != r) throw new Error(a);
              if (null === e) throw new Error(a);
              if (l && e.constructor === ArrayBuffer) e = new Uint8Array(e);
              else if (!(Array.isArray(e) || (l && ArrayBuffer.isView(e))))
                throw new Error(a);
              t = !0;
            }
            for (
              var n,
                i,
                o = this.blocks,
                s = this.byteCount,
                u = e.length,
                c = this.blockCount,
                f = 0,
                h = this.s;
              f < u;

            ) {
              if (this.reset)
                for (this.reset = !1, o[0] = this.block, n = 1; n < c + 1; ++n)
                  o[n] = 0;
              if (t)
                for (n = this.start; f < u && n < s; ++f)
                  o[n >> 2] |= e[f] << p[3 & n++];
              else
                for (n = this.start; f < u && n < s; ++f)
                  (i = e.charCodeAt(f)) < 128
                    ? (o[n >> 2] |= i << p[3 & n++])
                    : (i < 2048
                        ? (o[n >> 2] |= (192 | (i >> 6)) << p[3 & n++])
                        : (i < 55296 || 57344 <= i
                            ? (o[n >> 2] |= (224 | (i >> 12)) << p[3 & n++])
                            : ((i =
                                65536 +
                                (((1023 & i) << 10) |
                                  (1023 & e.charCodeAt(++f)))),
                              (o[n >> 2] |= (240 | (i >> 18)) << p[3 & n++]),
                              (o[n >> 2] |=
                                (128 | ((i >> 12) & 63)) << p[3 & n++])),
                          (o[n >> 2] |= (128 | ((i >> 6) & 63)) << p[3 & n++])),
                      (o[n >> 2] |= (128 | (63 & i)) << p[3 & n++]));
              if (s <= (this.lastByteIndex = n)) {
                for (this.start = n - s, this.block = o[c], n = 0; n < c; ++n)
                  h[n] ^= o[n];
                B(h), (this.reset = !0);
              } else this.start = n;
            }
            return this;
          }),
            (I.prototype.encode = function (e, t) {
              for (var r = 1, n = [(i = 255 & e)], i = 255 & (e >>= 8); 0 < i; )
                n.unshift(i), (i = 255 & (e >>= 8)), ++r;
              return t ? n.push(r) : n.unshift(r), this.update(n), n.length;
            }),
            (I.prototype.encodeString = function (e) {
              var t;
              if ("string" != (n = typeof e)) {
                if ("object" != n) throw new Error(a);
                if (null === e) throw new Error(a);
                if (l && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                else if (!(Array.isArray(e) || (l && ArrayBuffer.isView(e))))
                  throw new Error(a);
                t = !0;
              }
              var r = 0,
                n = e.length;
              if (t) r = n;
              else
                for (var i = 0; i < e.length; ++i) {
                  var o = e.charCodeAt(i);
                  o < 128
                    ? (r += 1)
                    : o < 2048
                    ? (r += 2)
                    : o < 55296 || 57344 <= o
                    ? (r += 3)
                    : ((o =
                        65536 +
                        (((1023 & o) << 10) | (1023 & e.charCodeAt(++i)))),
                      (r += 4));
                }
              return (r += this.encode(8 * r)), this.update(e), r;
            }),
            (I.prototype.bytepad = function (e, t) {
              for (var r = this.encode(t), n = 0; n < e.length; ++n)
                r += this.encodeString(e[n]);
              var i = [];
              return (i.length = t - (r % t)), this.update(i), this;
            }),
            (I.prototype.finalize = function () {
              if (!this.finalized) {
                this.finalized = !0;
                var e = this.blocks,
                  t = this.lastByteIndex,
                  r = this.blockCount,
                  n = this.s;
                if (
                  ((e[t >> 2] |= this.padding[3 & t]),
                  this.lastByteIndex === this.byteCount)
                )
                  for (e[0] = e[r], t = 1; t < r + 1; ++t) e[t] = 0;
                for (e[r - 1] |= 2147483648, t = 0; t < r; ++t) n[t] ^= e[t];
                B(n);
              }
            }),
            (I.prototype.toString = I.prototype.hex =
              function () {
                this.finalize();
                for (
                  var e,
                    t = this.blockCount,
                    r = this.s,
                    n = this.outputBlocks,
                    i = this.extraBytes,
                    o = 0,
                    a = 0,
                    s = "";
                  a < n;

                ) {
                  for (o = 0; o < t && a < n; ++o, ++a)
                    (e = r[o]),
                      (s +=
                        h[(e >> 4) & 15] +
                        h[15 & e] +
                        h[(e >> 12) & 15] +
                        h[(e >> 8) & 15] +
                        h[(e >> 20) & 15] +
                        h[(e >> 16) & 15] +
                        h[(e >> 28) & 15] +
                        h[(e >> 24) & 15]);
                  a % t == 0 && (B(r), (o = 0));
                }
                return (
                  i &&
                    ((e = r[o]),
                    (s += h[(e >> 4) & 15] + h[15 & e]),
                    1 < i && (s += h[(e >> 12) & 15] + h[(e >> 8) & 15]),
                    2 < i && (s += h[(e >> 20) & 15] + h[(e >> 16) & 15])),
                  s
                );
              }),
            (I.prototype.arrayBuffer = function () {
              this.finalize();
              for (
                var e = this.blockCount,
                  t = this.s,
                  r = this.outputBlocks,
                  n = this.extraBytes,
                  i = 0,
                  o = 0,
                  a = this.outputBits >> 3,
                  s = n ? new ArrayBuffer((r + 1) << 2) : new ArrayBuffer(a),
                  u = new Uint32Array(s);
                o < r;

              ) {
                for (i = 0; i < e && o < r; ++i, ++o) u[o] = t[i];
                o % e == 0 && B(t);
              }
              return n && ((u[i] = t[i]), (s = s.slice(0, a))), s;
            }),
            (I.prototype.buffer = I.prototype.arrayBuffer),
            (I.prototype.digest = I.prototype.array =
              function () {
                this.finalize();
                for (
                  var e,
                    t,
                    r = this.blockCount,
                    n = this.s,
                    i = this.outputBlocks,
                    o = this.extraBytes,
                    a = 0,
                    s = 0,
                    u = [];
                  s < i;

                ) {
                  for (a = 0; a < r && s < i; ++a, ++s)
                    (t = n[a]),
                      (u[(e = s << 2)] = 255 & t),
                      (u[e + 1] = (t >> 8) & 255),
                      (u[e + 2] = (t >> 16) & 255),
                      (u[e + 3] = (t >> 24) & 255);
                  s % r == 0 && B(n);
                }
                return (
                  o &&
                    ((t = n[a]),
                    (u[(e = s << 2)] = 255 & t),
                    1 < o && (u[e + 1] = (t >> 8) & 255),
                    2 < o && (u[e + 2] = (t >> 16) & 255)),
                  u
                );
              }),
            ((L.prototype = new I()).finalize = function () {
              return (
                this.encode(this.outputBits, !0),
                I.prototype.finalize.call(this)
              );
            });
          var B = function (e) {
            for (
              var t,
                r,
                n,
                i,
                o,
                a,
                s,
                u,
                c,
                f,
                l,
                h,
                d,
                p,
                g,
                _,
                m,
                y,
                w,
                b,
                E,
                x,
                S,
                k,
                R,
                A,
                M,
                T,
                C,
                O,
                P,
                N,
                I,
                L,
                B,
                H,
                U,
                D,
                j,
                q,
                K,
                z,
                F,
                W,
                G,
                V,
                J,
                Y,
                Z,
                X,
                Q = 0;
              Q < 48;
              Q += 2
            )
              (M = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40]),
                (T = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41]),
                (q = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42]),
                (j = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43]),
                (N = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44]),
                (P = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45]),
                (V = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46]),
                (G = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47]),
                (d = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]),
                (f =
                  (p = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^
                  ((j << 1) | (q >>> 31))),
                (e[0] ^= c = d ^ ((q << 1) | (j >>> 31))),
                (e[1] ^= f),
                (e[10] ^= c),
                (e[11] ^= f),
                (e[20] ^= c),
                (e[21] ^= f),
                (e[30] ^= c),
                (e[31] ^= f),
                (e[40] ^= c),
                (e[41] ^= f),
                (f = T ^ ((P << 1) | (N >>> 31))),
                (e[2] ^= c = M ^ ((N << 1) | (P >>> 31))),
                (e[3] ^= f),
                (e[12] ^= c),
                (e[13] ^= f),
                (e[22] ^= c),
                (e[23] ^= f),
                (e[32] ^= c),
                (e[33] ^= f),
                (e[42] ^= c),
                (e[43] ^= f),
                (f = j ^ ((G << 1) | (V >>> 31))),
                (e[4] ^= c = q ^ ((V << 1) | (G >>> 31))),
                (e[5] ^= f),
                (e[14] ^= c),
                (e[15] ^= f),
                (e[24] ^= c),
                (e[25] ^= f),
                (e[34] ^= c),
                (e[35] ^= f),
                (e[44] ^= c),
                (e[45] ^= f),
                (f = P ^ ((p << 1) | (d >>> 31))),
                (e[6] ^= c = N ^ ((d << 1) | (p >>> 31))),
                (e[7] ^= f),
                (e[16] ^= c),
                (e[17] ^= f),
                (e[26] ^= c),
                (e[27] ^= f),
                (e[36] ^= c),
                (e[37] ^= f),
                (e[46] ^= c),
                (e[47] ^= f),
                (f = G ^ ((T << 1) | (M >>> 31))),
                (e[8] ^= c = V ^ ((M << 1) | (T >>> 31))),
                (e[9] ^= f),
                (e[18] ^= c),
                (e[19] ^= f),
                (e[28] ^= c),
                (e[29] ^= f),
                (e[38] ^= c),
                (e[39] ^= f),
                (e[48] ^= c),
                (e[49] ^= f),
                (t = e[0]),
                (r = e[1]),
                (I = (e[11] << 4) | (e[10] >>> 28)),
                (L = (e[10] << 4) | (e[11] >>> 28)),
                (g = (e[20] << 3) | (e[21] >>> 29)),
                (_ = (e[21] << 3) | (e[20] >>> 29)),
                (J = (e[31] << 9) | (e[30] >>> 23)),
                (Y = (e[30] << 9) | (e[31] >>> 23)),
                (C = (e[40] << 18) | (e[41] >>> 14)),
                (O = (e[41] << 18) | (e[40] >>> 14)),
                (E = (e[2] << 1) | (e[3] >>> 31)),
                (x = (e[3] << 1) | (e[2] >>> 31)),
                (n = (e[13] << 12) | (e[12] >>> 20)),
                (i = (e[12] << 12) | (e[13] >>> 20)),
                (B = (e[22] << 10) | (e[23] >>> 22)),
                (H = (e[23] << 10) | (e[22] >>> 22)),
                (m = (e[33] << 13) | (e[32] >>> 19)),
                (y = (e[32] << 13) | (e[33] >>> 19)),
                (Z = (e[42] << 2) | (e[43] >>> 30)),
                (X = (e[43] << 2) | (e[42] >>> 30)),
                (K = (e[5] << 30) | (e[4] >>> 2)),
                (z = (e[4] << 30) | (e[5] >>> 2)),
                (S = (e[14] << 6) | (e[15] >>> 26)),
                (k = (e[15] << 6) | (e[14] >>> 26)),
                (o = (e[25] << 11) | (e[24] >>> 21)),
                (a = (e[24] << 11) | (e[25] >>> 21)),
                (U = (e[34] << 15) | (e[35] >>> 17)),
                (D = (e[35] << 15) | (e[34] >>> 17)),
                (w = (e[45] << 29) | (e[44] >>> 3)),
                (b = (e[44] << 29) | (e[45] >>> 3)),
                (l = (e[6] << 28) | (e[7] >>> 4)),
                (h = (e[7] << 28) | (e[6] >>> 4)),
                (F = (e[17] << 23) | (e[16] >>> 9)),
                (W = (e[16] << 23) | (e[17] >>> 9)),
                (R = (e[26] << 25) | (e[27] >>> 7)),
                (A = (e[27] << 25) | (e[26] >>> 7)),
                (s = (e[36] << 21) | (e[37] >>> 11)),
                (u = (e[37] << 21) | (e[36] >>> 11)),
                (j = (e[47] << 24) | (e[46] >>> 8)),
                (q = (e[46] << 24) | (e[47] >>> 8)),
                (P = (e[8] << 27) | (e[9] >>> 5)),
                (N = (e[9] << 27) | (e[8] >>> 5)),
                (d = (e[18] << 20) | (e[19] >>> 12)),
                (p = (e[19] << 20) | (e[18] >>> 12)),
                (G = (e[29] << 7) | (e[28] >>> 25)),
                (V = (e[28] << 7) | (e[29] >>> 25)),
                (M = (e[38] << 8) | (e[39] >>> 24)),
                (T = (e[39] << 8) | (e[38] >>> 24)),
                (c = (e[48] << 14) | (e[49] >>> 18)),
                (f = (e[49] << 14) | (e[48] >>> 18)),
                (e[0] = t ^ (~n & o)),
                (e[1] = r ^ (~i & a)),
                (e[10] = l ^ (~d & g)),
                (e[11] = h ^ (~p & _)),
                (e[20] = E ^ (~S & R)),
                (e[21] = x ^ (~k & A)),
                (e[30] = P ^ (~I & B)),
                (e[31] = N ^ (~L & H)),
                (e[40] = K ^ (~F & G)),
                (e[41] = z ^ (~W & V)),
                (e[2] = n ^ (~o & s)),
                (e[3] = i ^ (~a & u)),
                (e[12] = d ^ (~g & m)),
                (e[13] = p ^ (~_ & y)),
                (e[22] = S ^ (~R & M)),
                (e[23] = k ^ (~A & T)),
                (e[32] = I ^ (~B & U)),
                (e[33] = L ^ (~H & D)),
                (e[42] = F ^ (~G & J)),
                (e[43] = W ^ (~V & Y)),
                (e[4] = o ^ (~s & c)),
                (e[5] = a ^ (~u & f)),
                (e[14] = g ^ (~m & w)),
                (e[15] = _ ^ (~y & b)),
                (e[24] = R ^ (~M & C)),
                (e[25] = A ^ (~T & O)),
                (e[34] = B ^ (~U & j)),
                (e[35] = H ^ (~D & q)),
                (e[44] = G ^ (~J & Z)),
                (e[45] = V ^ (~Y & X)),
                (e[6] = s ^ (~c & t)),
                (e[7] = u ^ (~f & r)),
                (e[16] = m ^ (~w & l)),
                (e[17] = y ^ (~b & h)),
                (e[26] = M ^ (~C & E)),
                (e[27] = T ^ (~O & x)),
                (e[36] = U ^ (~j & P)),
                (e[37] = D ^ (~q & N)),
                (e[46] = J ^ (~Z & K)),
                (e[47] = Y ^ (~X & z)),
                (e[8] = c ^ (~t & n)),
                (e[9] = f ^ (~r & i)),
                (e[18] = w ^ (~l & d)),
                (e[19] = b ^ (~h & p)),
                (e[28] = C ^ (~E & S)),
                (e[29] = O ^ (~x & k)),
                (e[38] = j ^ (~P & I)),
                (e[39] = q ^ (~N & L)),
                (e[48] = Z ^ (~K & F)),
                (e[49] = X ^ (~z & W)),
                (e[0] ^= v[Q]),
                (e[1] ^= v[Q + 1]);
          };
          if (c) e.exports = R;
          else {
            for (M = 0; M < A.length; ++M) s[A[M]] = R[A[M]];
            f &&
              (void 0 ===
                (o = function () {
                  return R;
                }.call(t, r, t, e)) ||
                (e.exports = o));
          }
        })();
      }.call(this, r(162), r(96)));
    },
    1394: function (e, t) {
      (function (t) {
        e.exports = t;
      }.call(this, {}));
    },
    1395: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(113);
      n.__exportStar(r(1209), t),
        n.__exportStar(r(1274), t),
        n.__exportStar(r(1396), t),
        n.__exportStar(r(1399), t),
        n.__exportStar(r(1400), t),
        n.__exportStar(r(1401), t),
        n.__exportStar(r(1409), t);
    },
    1396: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isNodeJs = void 0);
      var n = r(113),
        i = r(1275);
      (t.isNodeJs = i.isNode), n.__exportStar(r(1275), t);
    },
    1397: function (e, t, r) {
      "use strict";
      (function (e) {
        function r() {
          return (
            (null == e ? void 0 : e.crypto) ||
            (null == e ? void 0 : e.msCrypto) ||
            {}
          );
        }
        function n() {
          var e = r();
          return e.subtle || e.webkitSubtle;
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isBrowserCryptoAvailable =
            t.getSubtleCrypto =
            t.getBrowerCrypto =
              void 0),
          (t.getBrowerCrypto = r),
          (t.getSubtleCrypto = n),
          (t.isBrowserCryptoAvailable = function () {
            return !!r() && !!n();
          });
      }.call(this, r(96)));
    },
    1398: function (e, t, r) {
      "use strict";
      (function (e) {
        function r() {
          return (
            "undefined" == typeof document &&
            "undefined" != typeof navigator &&
            "ReactNative" === navigator.product
          );
        }
        function n() {
          return (
            void 0 !== e && void 0 !== e.versions && void 0 !== e.versions.node
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isBrowser = t.isNode = t.isReactNative = void 0),
          (t.isReactNative = r),
          (t.isNode = n),
          (t.isBrowser = function () {
            return !r() && !n();
          });
      }.call(this, r(162)));
    },
    1399: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.formatErrorMessage =
          t.formatJsonRpcError =
          t.formatJsonRpcResult =
          t.formatJsonRpcRequest =
          t.payloadId =
            void 0);
      var n = r(1274),
        i = r(1209);
      function o() {
        return (
          Date.now() * Math.pow(10, 3) +
          Math.floor(Math.random() * Math.pow(10, 3))
        );
      }
      function a(e) {
        if (void 0 === e) return n.getError(i.INTERNAL_ERROR);
        if (
          ("string" == typeof e &&
            (e = Object.assign(Object.assign({}, n.getError(i.SERVER_ERROR)), {
              message: e,
            })),
          n.isReservedErrorCode(e.code) && (e = n.getErrorByCode(e.code)),
          !n.isServerErrorCode(e.code))
        )
          throw new Error("Error code is not in server code range");
        return e;
      }
      (t.payloadId = o),
        (t.formatJsonRpcRequest = function (e, t, r) {
          return { id: r || o(), jsonrpc: "2.0", method: e, params: t };
        }),
        (t.formatJsonRpcResult = function (e, t) {
          return { id: e, jsonrpc: "2.0", result: t };
        }),
        (t.formatJsonRpcError = function (e, t) {
          return { id: e, jsonrpc: "2.0", error: a(t) };
        }),
        (t.formatErrorMessage = a);
    },
    1400: function (e, t, r) {
      "use strict";
      function n(e) {
        return "*" === e;
      }
      function i(e) {
        return (
          !!n(e) ||
          (!!e.includes("*") &&
            2 === e.split("*").length &&
            1 ===
              e.split("*").filter(function (e) {
                return "" === e.trim();
              }).length)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isValidTrailingWildcardRoute =
          t.isValidLeadingWildcardRoute =
          t.isValidWildcardRoute =
          t.isValidDefaultRoute =
          t.isValidRoute =
            void 0),
        (t.isValidRoute = function (e) {
          return e.includes("*") ? i(e) : !/\W/g.test(e);
        }),
        (t.isValidDefaultRoute = n),
        (t.isValidWildcardRoute = i),
        (t.isValidLeadingWildcardRoute = function (e) {
          return !n(e) && i(e) && !e.split("*")[0].trim();
        }),
        (t.isValidTrailingWildcardRoute = function (e) {
          return !n(e) && i(e) && !e.split("*")[1].trim();
        });
    },
    1401: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r(113).__exportStar(r(1402), t);
    },
    1402: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(113);
      n.__exportStar(r(1403), t),
        n.__exportStar(r(1404), t),
        n.__exportStar(r(1210), t),
        n.__exportStar(r(1405), t),
        n.__exportStar(r(1211), t),
        n.__exportStar(r(1406), t),
        n.__exportStar(r(1407), t),
        n.__exportStar(r(1408), t);
    },
    1403: function (e, t, r) {
      "use strict";
      var n = r(1107),
        i = r(1108),
        o = r(366);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IBlockchainProvider =
          t.IBlockchainAuthenticator =
          t.IPendingRequests =
            void 0);
      var a = r(1210);
      r = r(1211);
      (t.IPendingRequests = function e(t) {
        o(this, e), (this.storage = t);
      }),
        (a = (function (e) {
          n(r, e);
          var t = i(r);
          function r(e) {
            var n;
            return o(this, r), ((n = t.call(this)).config = e), n;
          }
          return r;
        })(a.IEvents)),
        (t.IBlockchainAuthenticator = a),
        (r = (function (e) {
          n(r, e);
          var t = i(r);
          function r(e, n) {
            return o(this, r), t.call(this, e);
          }
          return r;
        })(r.IJsonRpcProvider)),
        (t.IBlockchainProvider = r);
    },
    1404: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    1405: function (e, t, r) {
      "use strict";
      var n = r(366),
        i = r(1107),
        o = r(1108);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IMultiServiceProvider = void 0),
        (r = (function (e) {
          i(r, e);
          var t = o(r);
          function r(e) {
            var i;
            return n(this, r), ((i = t.call(this)).config = e), i;
          }
          return r;
        })(r(1211).IBaseJsonRpcProvider)),
        (t.IMultiServiceProvider = r);
    },
    1406: function (e, t, r) {
      "use strict";
      var n = r(366);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IJsonRpcRouter = void 0),
        (t.IJsonRpcRouter = function e(t) {
          n(this, e), (this.routes = t);
        });
    },
    1407: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    1408: function (e, t, r) {
      "use strict";
      var n = r(366);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IJsonRpcValidator = void 0),
        (t.IJsonRpcValidator = function e(t) {
          n(this, e), (this.schemas = t);
        });
    },
    1409: function (e, t, r) {
      "use strict";
      function n(e) {
        return "id" in e && "jsonrpc" in e && "2.0" === e.jsonrpc;
      }
      function i(e) {
        return "result" in e;
      }
      function o(e) {
        return "error" in e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isJsonRpcValidationInvalid =
          t.isJsonRpcError =
          t.isJsonRpcResult =
          t.isJsonRpcResponse =
          t.isJsonRpcRequest =
          t.isJsonRpcPayload =
            void 0),
        (t.isJsonRpcPayload = n),
        (t.isJsonRpcRequest = function (e) {
          return n(e) && "method" in e;
        }),
        (t.isJsonRpcResponse = function (e) {
          return n(e) && (i(e) || o(e));
        }),
        (t.isJsonRpcResult = i),
        (t.isJsonRpcError = o),
        (t.isJsonRpcValidationInvalid = function (e) {
          return "error" in e && !1 === e.valid;
        });
    },
    1410: function (e, t, r) {
      "use strict";
      var n = r(7);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.formatRpcError = t.promisify = void 0);
      var i = r(113);
      (t.promisify = function (e, t) {
        var r = this;
        return function () {
          for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
            a[s] = arguments[s];
          return i.__awaiter(
            r,
            void 0,
            void 0,
            n.mark(function r() {
              return n.wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return r.abrupt(
                        "return",
                        new Promise(function (r, n) {
                          e.apply(
                            t,
                            [].concat(a, [
                              function (e, t) {
                                null == e && n(e), r(t);
                              },
                            ])
                          );
                        })
                      );
                    case 1:
                    case "end":
                      return r.stop();
                  }
              }, r);
            })
          );
        };
      }),
        (t.formatRpcError = function (e) {
          var t = e.message || "Failed or Rejected Request",
            r = -32e3;
          if (e && !e.code)
            switch (t) {
              case "Parse error":
                r = -32700;
                break;
              case "Invalid request":
                r = -32600;
                break;
              case "Method not found":
                r = -32601;
                break;
              case "Invalid params":
                r = -32602;
                break;
              case "Internal error":
                r = -32603;
                break;
              default:
                r = -32e3;
            }
          return { code: r, message: t };
        });
    },
    1411: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parseWalletConnectUri = t.isWalletConnectSession = void 0);
      var n = r(1277);
      (t.isWalletConnectSession = function (e) {
        return void 0 !== e.bridge;
      }),
        (t.parseWalletConnectUri = function (e) {
          var t = e.indexOf(":"),
            r = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
            i = e.substring(0, t),
            o = e.substring(t + 1, r);
          (t = {
            handshakeTopic: (o = (o = o).split("@"))[0],
            version: parseInt(o[1], 10),
          }),
            (r = void 0 !== r ? e.substr(r) : ""),
            (e = r),
            (r = {
              key: (e = n.parseQueryString(e)).key || "",
              bridge: e.bridge || "",
            });
          return Object.assign(Object.assign({ protocol: i }, t), r);
        });
    },
    1412: function (e, t, r) {
      "use strict";
      var n = r(1121),
        i = r(301),
        o = r(1178),
        a = r(1416),
        s = r(1417),
        u = r(1418);
      function c(e) {
        if ("string" != typeof e || 1 !== e.length)
          throw new TypeError(
            "arrayFormatSeparator must be single character string"
          );
      }
      function f(e, t) {
        return t.encode ? (t.strict ? a : encodeURIComponent)(e) : e;
      }
      function l(e, t) {
        return t.decode ? s(e) : e;
      }
      function h(e) {
        var t = e.indexOf("#");
        return -1 !== t ? e.slice(0, t) : e;
      }
      function d(e) {
        var t = (e = h(e)).indexOf("?");
        return -1 === t ? "" : e.slice(t + 1);
      }
      function p(e, t) {
        return (
          t.parseNumbers &&
          !Number.isNaN(Number(e)) &&
          "string" == typeof e &&
          "" !== e.trim()
            ? (e = Number(e))
            : !t.parseBooleans ||
              null === e ||
              ("true" !== e.toLowerCase() && "false" !== e.toLowerCase()) ||
              (e = "true" === e.toLowerCase()),
          e
        );
      }
      function v(e, t) {
        c(
          (t = Object.assign(
            {
              decode: !0,
              sort: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
              parseNumbers: !1,
              parseBooleans: !1,
            },
            t
          )).arrayFormatSeparator
        );
        var r = (function (e) {
            var t;
            switch (e.arrayFormat) {
              case "index":
                return function (e, r, n) {
                  (t = /\[(\d*)\]$/.exec(e)),
                    (e = e.replace(/\[\d*\]$/, "")),
                    t
                      ? (void 0 === n[e] && (n[e] = {}), (n[e][t[1]] = r))
                      : (n[e] = r);
                };
              case "bracket":
                return function (e, r, n) {
                  (t = /(\[\])$/.exec(e)),
                    (e = e.replace(/\[\]$/, "")),
                    t
                      ? void 0 !== n[e]
                        ? (n[e] = [].concat(n[e], r))
                        : (n[e] = [r])
                      : (n[e] = r);
                };
              case "comma":
              case "separator":
                return function (t, r, n) {
                  (r =
                    "string" == typeof r &&
                    -1 < r.split("").indexOf(e.arrayFormatSeparator)
                      ? r.split(e.arrayFormatSeparator).map(function (t) {
                          return l(t, e);
                        })
                      : null === r
                      ? r
                      : l(r, e)),
                    (n[t] = r);
                };
              default:
                return function (e, t, r) {
                  void 0 !== r[e] ? (r[e] = [].concat(r[e], t)) : (r[e] = t);
                };
            }
          })(t),
          o = Object.create(null);
        if ("string" != typeof e) return o;
        if (!(e = e.trim().replace(/^[?#&]/, ""))) return o;
        var a,
          s = i(e.split("&"));
        try {
          for (s.s(); !(a = s.n()).done; ) {
            var f = a.value,
              h = u(t.decode ? f.replace(/\+/g, " ") : f, "="),
              d = n(h, 2),
              v = d[0],
              g =
                void 0 === (g = d[1])
                  ? null
                  : ["comma", "separator"].includes(t.arrayFormat)
                  ? g
                  : l(g, t);
            r(l(v, t), g, o);
          }
        } catch (e) {
          s.e(e);
        } finally {
          s.f();
        }
        for (var _ = 0, m = Object.keys(o); _ < m.length; _++) {
          var y = m[_],
            w = o[y];
          if ("object" == typeof w && null !== w)
            for (var b = 0, E = Object.keys(w); b < E.length; b++) {
              var x = E[b];
              w[x] = p(w[x], t);
            }
          else o[y] = p(w, t);
        }
        return !1 === t.sort
          ? o
          : (!0 === t.sort
              ? Object.keys(o).sort()
              : Object.keys(o).sort(t.sort)
            ).reduce(function (e, t) {
              var r = o[t];
              return (
                Boolean(r) && "object" == typeof r && !Array.isArray(r)
                  ? (e[t] = (function e(t) {
                      return Array.isArray(t)
                        ? t.sort()
                        : "object" == typeof t
                        ? e(Object.keys(t))
                            .sort(function (e, t) {
                              return Number(e) - Number(t);
                            })
                            .map(function (e) {
                              return t[e];
                            })
                        : t;
                    })(r))
                  : (e[t] = r),
                e
              );
            }, Object.create(null));
      }
      (t.extract = d),
        (t.parse = v),
        (t.stringify = function (e, t) {
          if (!e) return "";
          c(
            (t = Object.assign(
              {
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
              },
              t
            )).arrayFormatSeparator
          );
          for (
            var r,
              n = (function (e) {
                switch (e.arrayFormat) {
                  case "index":
                    return function (t) {
                      return function (r, n) {
                        var i = r.length;
                        return void 0 === n ||
                          (e.skipNull && null === n) ||
                          (e.skipEmptyString && "" === n)
                          ? r
                          : [].concat(
                              o(r),
                              null === n
                                ? [[f(t, e), "[", i, "]"].join("")]
                                : [
                                    [f(t, e), "[", f(i, e), "]=", f(n, e)].join(
                                      ""
                                    ),
                                  ]
                            );
                      };
                    };
                  case "bracket":
                    return function (t) {
                      return function (r, n) {
                        return void 0 === n ||
                          (e.skipNull && null === n) ||
                          (e.skipEmptyString && "" === n)
                          ? r
                          : [].concat(
                              o(r),
                              null === n
                                ? [[f(t, e), "[]"].join("")]
                                : [[f(t, e), "[]=", f(n, e)].join("")]
                            );
                      };
                    };
                  case "comma":
                  case "separator":
                    return function (t) {
                      return function (r, n) {
                        return null == n || 0 === n.length
                          ? r
                          : 0 === r.length
                          ? [[f(t, e), "=", f(n, e)].join("")]
                          : [[r, f(n, e)].join(e.arrayFormatSeparator)];
                      };
                    };
                  default:
                    return function (t) {
                      return function (r, n) {
                        return void 0 === n ||
                          (e.skipNull && null === n) ||
                          (e.skipEmptyString && "" === n)
                          ? r
                          : [].concat(
                              o(r),
                              null === n
                                ? [f(t, e)]
                                : [[f(t, e), "=", f(n, e)].join("")]
                            );
                      };
                    };
                }
              })(t),
              i = {},
              a = 0,
              s = Object.keys(e);
            a < s.length;
            a++
          ) {
            var u = s[a];
            (r = u),
              (t.skipNull && null == e[r]) ||
                (t.skipEmptyString && "" === e[r]) ||
                (i[u] = e[u]);
          }
          var l = Object.keys(i);
          return (
            !1 !== t.sort && l.sort(t.sort),
            l
              .map(function (r) {
                var i = e[r];
                return void 0 === i
                  ? ""
                  : null === i
                  ? f(r, t)
                  : Array.isArray(i)
                  ? i.reduce(n(r), []).join("&")
                  : f(r, t) + "=" + f(i, t);
              })
              .filter(function (e) {
                return 0 < e.length;
              })
              .join("&")
          );
        }),
        (t.parseUrl = function (e, t) {
          t = Object.assign({ decode: !0 }, t);
          var r = u(e, "#"),
            i = ((r = (i = n(r, 2))[0]), i[1]);
          return Object.assign(
            { url: r.split("?")[0] || "", query: v(d(e), t) },
            t && t.parseFragmentIdentifier && i
              ? { fragmentIdentifier: l(i, t) }
              : {}
          );
        }),
        (t.stringifyUrl = function (e, r) {
          r = Object.assign({ encode: !0, strict: !0 }, r);
          var n = h(e.url).split("?")[0] || "",
            i = t.extract(e.url),
            o = t.parse(i, { sort: !1 }),
            a = Object.assign(o, e.query),
            s = (s = t.stringify(a, r)) && "?".concat(s);
          (o = ""),
            (o = o = -1 !== (a = (i = e.url).indexOf("#")) ? i.slice(a) : o);
          return (
            e.fragmentIdentifier &&
              (o = "#".concat(f(e.fragmentIdentifier, r))),
            "".concat(n).concat(s).concat(o)
          );
        });
    },
    1416: function (e, t, r) {
      "use strict";
      e.exports = function (e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
          return "%".concat(e.charCodeAt(0).toString(16).toUpperCase());
        });
      };
    },
    1417: function (e, t, r) {
      "use strict";
      var n = "%[a-f0-9]{2}",
        i = new RegExp(n, "gi"),
        o = new RegExp("(" + n + ")+", "gi");
      function a(t) {
        try {
          return decodeURIComponent(t);
        } catch (e) {
          for (var r = t.match(i), n = 1; n < r.length; n++)
            r = (t = (function e(t, r) {
              try {
                return decodeURIComponent(t.join(""));
              } catch (e) {}
              if (1 === t.length) return t;
              var n = t.slice(0, (r = r || 1));
              r = t.slice(r);
              return Array.prototype.concat.call([], e(n), e(r));
            })(r, n).join("")).match(i);
          return t;
        }
      }
      e.exports = function (t) {
        if ("string" != typeof t)
          throw new TypeError(
            "Expected `encodedURI` to be of type `string`, got `" +
              typeof t +
              "`"
          );
        try {
          return (t = t.replace(/\+/g, " ")), decodeURIComponent(t);
        } catch (e) {
          return (function (e) {
            for (
              var t = { "%FE%FF": "\ufffd\ufffd", "%FF%FE": "\ufffd\ufffd" },
                r = o.exec(e);
              r;

            ) {
              try {
                t[r[0]] = decodeURIComponent(r[0]);
              } catch (e) {
                var n = a(r[0]);
                n !== r[0] && (t[r[0]] = n);
              }
              r = o.exec(e);
            }
            t["%C2"] = "\ufffd";
            for (var i = Object.keys(t), s = 0; s < i.length; s++) {
              var u = i[s];
              e = e.replace(new RegExp(u, "g"), t[u]);
            }
            return e;
          })(t);
        }
      };
    },
    1418: function (e, t, r) {
      "use strict";
      e.exports = function (e, t) {
        if ("string" != typeof e || "string" != typeof t)
          throw new TypeError("Expected the arguments to be of type `string`");
        if ("" === t) return [e];
        var r = e.indexOf(t);
        return -1 === r ? [e] : [e.slice(0, r), e.slice(r + t.length)];
      };
    },
    1419: function (e, t, r) {
      "use strict";
      (function (e) {
        var n = r(7),
          i = r(366),
          o = r(367);
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = r(113),
          s = r(1127),
          u = a.__importDefault(r(1420)),
          c = void 0 !== e.WebSocket ? e.WebSocket : r(1421);
        e = (function () {
          function e(t) {
            var r = this;
            if (
              (i(this, e),
              (this._queue = []),
              (this._events = []),
              (this._subscriptions = []),
              (this._protocol = t.protocol),
              (this._version = t.version),
              (this._url = ""),
              (this._netMonitor = null),
              (this._socket = null),
              (this._nextSocket = null),
              (this._subscriptions = t.subscriptions || []),
              (this._netMonitor = t.netMonitor || new u.default()),
              !t.url || "string" != typeof t.url)
            )
              throw new Error("Missing or invalid WebSocket url");
            (this._url = t.url),
              this._netMonitor.on("online", function () {
                return r._socketCreate();
              });
          }
          return (
            o(e, [
              {
                key: "readyState",
                get: function () {
                  return this._socket ? this._socket.readyState : -1;
                },
                set: function (e) {},
              },
              {
                key: "connecting",
                get: function () {
                  return 0 === this.readyState;
                },
                set: function (e) {},
              },
              {
                key: "connected",
                get: function () {
                  return 1 === this.readyState;
                },
                set: function (e) {},
              },
              {
                key: "closing",
                get: function () {
                  return 2 === this.readyState;
                },
                set: function (e) {},
              },
              {
                key: "closed",
                get: function () {
                  return 3 === this.readyState;
                },
                set: function (e) {},
              },
              {
                key: "open",
                value: function () {
                  this._socketCreate();
                },
              },
              {
                key: "close",
                value: function () {
                  this._socketClose();
                },
              },
              {
                key: "send",
                value: function (e, t, r) {
                  if (!t || "string" != typeof t)
                    throw new Error("Missing or invalid topic field");
                  this._socketSend({
                    topic: t,
                    type: "pub",
                    payload: e,
                    silent: !!r,
                  });
                },
              },
              {
                key: "subscribe",
                value: function (e) {
                  this._socketSend({
                    topic: e,
                    type: "sub",
                    payload: "",
                    silent: !0,
                  });
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  this._events.push({ event: e, callback: t });
                },
              },
              {
                key: "_socketCreate",
                value: function () {
                  var e = this;
                  if (!this._nextSocket) {
                    var t,
                      r,
                      n,
                      i,
                      o =
                        ((t = this._url),
                        (r = this._protocol),
                        (n = this._version),
                        (i = (
                          t.startsWith("https")
                            ? t.replace("https", "wss")
                            : t.startsWith("http")
                            ? t.replace("http", "ws")
                            : t
                        ).split("?")),
                        (o = s.isBrowser()
                          ? {
                              protocol: r,
                              version: n,
                              env: "browser",
                              host:
                                (null === (t = s.getLocation()) || void 0 === t
                                  ? void 0
                                  : t.host) || "",
                            }
                          : {
                              protocol: r,
                              version: n,
                              env:
                                (null === (o = s.detectEnv()) || void 0 === o
                                  ? void 0
                                  : o.name) || "",
                            }),
                        (o = s.appendToQueryString(
                          s.getQueryString(i[1] || ""),
                          o
                        )),
                        i[0] + "?" + o);
                    if (((this._nextSocket = new c(o)), !this._nextSocket))
                      throw new Error("Failed to create socket");
                    (this._nextSocket.onmessage = function (t) {
                      return e._socketReceive(t);
                    }),
                      (this._nextSocket.onopen = function () {
                        return e._socketOpen();
                      }),
                      (this._nextSocket.onerror = function (t) {
                        return e._socketError(t);
                      }),
                      (this._nextSocket.onclose = function () {
                        (e._nextSocket = null), e._socketCreate();
                      });
                  }
                },
              },
              {
                key: "_socketOpen",
                value: function () {
                  this._socketClose(),
                    (this._socket = this._nextSocket),
                    (this._nextSocket = null),
                    this._queueSubscriptions(),
                    this._pushQueue();
                },
              },
              {
                key: "_socketClose",
                value: function () {
                  this._socket &&
                    ((this._socket.onclose = function () {}),
                    this._socket.close());
                },
              },
              {
                key: "_socketSend",
                value: function (e) {
                  var t = JSON.stringify(e);
                  this._socket && 1 === this._socket.readyState
                    ? this._socket.send(t)
                    : (this._setToQueue(e), this._socketCreate());
                },
              },
              {
                key: "_socketReceive",
                value: function (e) {
                  return a.__awaiter(
                    this,
                    void 0,
                    void 0,
                    n.mark(function t() {
                      var r, i;
                      return n.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                (t.prev = 0),
                                  (r = JSON.parse(e.data)),
                                  (t.next = 7);
                                break;
                              case 4:
                                return (
                                  (t.prev = 4),
                                  (t.t0 = t.catch(0)),
                                  t.abrupt("return")
                                );
                              case 7:
                                this._socketSend({
                                  topic: r.topic,
                                  type: "ack",
                                  payload: "",
                                  silent: !0,
                                }),
                                  this._socket &&
                                    1 === this._socket.readyState &&
                                    (i = this._events.filter(function (e) {
                                      return "message" === e.event;
                                    })) &&
                                    i.length &&
                                    i.forEach(function (e) {
                                      return e.callback(r);
                                    });
                              case 9:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[0, 4]]
                      );
                    })
                  );
                },
              },
              {
                key: "_socketError",
                value: function (e) {
                  var t = this._events.filter(function (e) {
                    return "error" === e.event;
                  });
                  t &&
                    t.length &&
                    t.forEach(function (t) {
                      return t.callback(e);
                    });
                },
              },
              {
                key: "_queueSubscriptions",
                value: function () {
                  var e = this;
                  this._subscriptions.forEach(function (t) {
                    return e._queue.push({
                      topic: t,
                      type: "sub",
                      payload: "",
                      silent: !0,
                    });
                  }),
                    (this._subscriptions = []);
                },
              },
              {
                key: "_setToQueue",
                value: function (e) {
                  this._queue.push(e);
                },
              },
              {
                key: "_pushQueue",
                value: function () {
                  var e = this;
                  this._queue.forEach(function (t) {
                    return e._socketSend(t);
                  }),
                    (this._queue = []);
                },
              },
            ]),
            e
          );
        })();
        t.default = e;
      }.call(this, r(96)));
    },
    1420: function (e, t, r) {
      "use strict";
      var n = r(366),
        i = r(367);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = (function () {
          function e() {
            var t = this;
            n(this, e),
              (this._eventEmitters = []),
              "undefined" != typeof window &&
                void 0 !== window.addEventListener &&
                (window.addEventListener("online", function () {
                  return t.trigger("online");
                }),
                window.addEventListener("offline", function () {
                  return t.trigger("offline");
                }));
          }
          return (
            i(e, [
              {
                key: "on",
                value: function (e, t) {
                  this._eventEmitters.push({ event: e, callback: t });
                },
              },
              {
                key: "trigger",
                value: function (e) {
                  var t = [];
                  (t = e
                    ? this._eventEmitters.filter(function (t) {
                        return t.event === e;
                      })
                    : t).forEach(function (e) {
                    e.callback();
                  });
                },
              },
            ]),
            e
          );
        })());
    },
    1421: function (e, t, r) {
      "use strict";
      e.exports = function () {
        throw new Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object"
        );
      };
    },
    1422: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ERROR_QRCODE_MODAL_USER_CLOSED =
          t.ERROR_QRCODE_MODAL_NOT_PROVIDED =
          t.ERROR_INVALID_URI =
          t.ERROR_INVALID_RESPONSE =
          t.ERROR_MISSING_REQUIRED =
          t.ERROR_MISSING_ID =
          t.ERROR_MISSING_METHOD =
          t.ERROR_MISSING_ERROR =
          t.ERROR_MISSING_RESULT =
          t.ERROR_MISSING_JSON_RPC =
          t.ERROR_SESSION_REJECTED =
          t.ERROR_SESSION_DISCONNECTED =
          t.ERROR_SESSION_CONNECTED =
            void 0),
        (t.ERROR_SESSION_CONNECTED = "Session currently connected"),
        (t.ERROR_SESSION_DISCONNECTED = "Session currently disconnected"),
        (t.ERROR_SESSION_REJECTED = "Session Rejected"),
        (t.ERROR_MISSING_JSON_RPC = "Missing JSON RPC response"),
        (t.ERROR_MISSING_RESULT =
          'JSON-RPC success response must include "result" field'),
        (t.ERROR_MISSING_ERROR =
          'JSON-RPC error response must include "error" field'),
        (t.ERROR_MISSING_METHOD =
          'JSON RPC request must have valid "method" value'),
        (t.ERROR_MISSING_ID = 'JSON RPC request must have valid "id" value'),
        (t.ERROR_MISSING_REQUIRED =
          "Missing one of the required parameters: bridge / uri / session"),
        (t.ERROR_INVALID_RESPONSE = "JSON RPC response format is invalid"),
        (t.ERROR_INVALID_URI = "URI format is invalid"),
        (t.ERROR_QRCODE_MODAL_NOT_PROVIDED = "QRCode Modal not provided"),
        (t.ERROR_QRCODE_MODAL_USER_CLOSED = "User close QRCode Modal");
    },
    1423: function (e, t, r) {
      "use strict";
      var n = r(366),
        i = r(367);
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(1127);
      r = (function () {
        function e() {
          n(this, e), (this._eventEmitters = []);
        }
        return (
          i(e, [
            {
              key: "subscribe",
              value: function (e) {
                this._eventEmitters.push(e);
              },
            },
            {
              key: "trigger",
              value: function (e) {
                var t = [],
                  r = o.isJsonRpcRequest(e)
                    ? e.method
                    : o.isJsonRpcResponseSuccess(e) ||
                      o.isJsonRpcResponseError(e)
                    ? "response:".concat(e.id)
                    : o.isInternalEvent(e)
                    ? e.event
                    : "";
                (t =
                  ((t = r
                    ? this._eventEmitters.filter(function (e) {
                        return e.event === r;
                      })
                    : t) &&
                    t.length) ||
                  o.isReservedEvent(r) ||
                  o.isInternalEvent(r)
                    ? t
                    : this._eventEmitters.filter(function (e) {
                        return "call_request" === e.event;
                      })).forEach(function (t) {
                  var r;
                  o.isJsonRpcResponseError(e)
                    ? ((r = new Error(e.error.message)), t.callback(r, null))
                    : t.callback(null, e);
                });
              },
            },
          ]),
          e
        );
      })();
      t.default = r;
    },
    1424: function (e, t, r) {
      "use strict";
      var n = r(366),
        i = r(367);
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(1127);
      t.default = (function () {
        function e() {
          n(this, e), (this.storageId = "walletconnect");
        }
        return (
          i(e, [
            {
              key: "getSession",
              value: function () {
                var e = null,
                  t = o.getLocal(this.storageId);
                return t && o.isWalletConnectSession(t) ? t : e;
              },
            },
            {
              key: "setSession",
              value: function (e) {
                return o.setLocal(this.storageId, e), e;
              },
            },
            {
              key: "removeSession",
              value: function () {
                o.removeLocal(this.storageId);
              },
            },
          ]),
          e
        );
      })();
    },
    1425: function (e, t, r) {
      "use strict";
      var n = r(7);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decrypt = t.encrypt = t.verifyHmac = t.generateKey = void 0);
      var i = r(113),
        o = i.__importStar(r(1426)),
        a = i.__importStar(r(1122)),
        s = r(1127);
      function u(e) {
        return i.__awaiter(
          this,
          void 0,
          void 0,
          n.mark(function t() {
            var r;
            return n.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (r = (e || 256) / 8),
                      (r = o.randomBytes(r)),
                      (r = s.convertBufferToArrayBuffer(a.arrayToBuffer(r))),
                      t.abrupt("return", r)
                    );
                  case 4:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
      }
      function c(e, t) {
        return i.__awaiter(
          this,
          void 0,
          void 0,
          n.mark(function r() {
            var i, s, u;
            return n.wrap(function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    return (
                      (i = a.hexToArray(e.data)),
                      (u = a.hexToArray(e.iv)),
                      (s = a.hexToArray(e.hmac)),
                      (s = a.arrayToHex(s, !1)),
                      (u = a.concatArrays(i, u)),
                      (r.next = 7),
                      o.hmacSha256Sign(t, u)
                    );
                  case 7:
                    if (
                      ((u = r.sent),
                      (u = a.arrayToHex(u, !1)),
                      a.removeHexPrefix(s) === a.removeHexPrefix(u))
                    )
                      return r.abrupt("return", !0);
                    r.next = 11;
                    break;
                  case 11:
                    return r.abrupt("return", !1);
                  case 12:
                  case "end":
                    return r.stop();
                }
            }, r);
          })
        );
      }
      (t.generateKey = u),
        (t.verifyHmac = c),
        (t.encrypt = function (e, t, r) {
          return i.__awaiter(
            this,
            void 0,
            void 0,
            n.mark(function i() {
              var c, f, l, h, d, p;
              return n.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      if (
                        ((c = a.bufferToArray(s.convertArrayBufferToBuffer(t))),
                        (n.t0 = r),
                        n.t0)
                      ) {
                        n.next = 6;
                        break;
                      }
                      return (n.next = 5), u(128);
                    case 5:
                      n.t0 = n.sent;
                    case 6:
                      return (
                        (h = n.t0),
                        (f = a.bufferToArray(s.convertArrayBufferToBuffer(h))),
                        (l = a.arrayToHex(f, !1)),
                        (h = JSON.stringify(e)),
                        (h = a.utf8ToArray(h)),
                        (n.next = 13),
                        o.aesCbcEncrypt(f, c, h)
                      );
                    case 13:
                      return (
                        (p = n.sent),
                        (d = a.arrayToHex(p, !1)),
                        (p = a.concatArrays(p, f)),
                        (n.next = 18),
                        o.hmacSha256Sign(c, p)
                      );
                    case 18:
                      return (
                        (p = n.sent),
                        (p = a.arrayToHex(p, !1)),
                        n.abrupt("return", { data: d, hmac: p, iv: l })
                      );
                    case 21:
                    case "end":
                      return n.stop();
                  }
              }, i);
            })
          );
        }),
        (t.decrypt = function (e, t) {
          return i.__awaiter(
            this,
            void 0,
            void 0,
            n.mark(function r() {
              var i, u, f, l;
              return n.wrap(
                function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if (
                          (i = a.bufferToArray(s.convertArrayBufferToBuffer(t)))
                        ) {
                          r.next = 3;
                          break;
                        }
                        throw new Error("Missing key: required for decryption");
                      case 3:
                        return (r.next = 5), c(e, i);
                      case 5:
                        if (r.sent) {
                          r.next = 8;
                          break;
                        }
                        return r.abrupt("return", null);
                      case 8:
                        return (
                          (u = a.hexToArray(e.data)),
                          (f = a.hexToArray(e.iv)),
                          (r.next = 12),
                          o.aesCbcDecrypt(f, i, u)
                        );
                      case 12:
                        (l = r.sent),
                          (l = a.arrayToUtf8(l)),
                          (r.prev = 14),
                          (l = JSON.parse(l)),
                          (r.next = 21);
                        break;
                      case 18:
                        return (
                          (r.prev = 18),
                          (r.t0 = r.catch(14)),
                          r.abrupt("return", null)
                        );
                      case 21:
                        return r.abrupt("return", l);
                      case 22:
                      case "end":
                        return r.stop();
                    }
                },
                r,
                null,
                [[14, 18]]
              );
            })
          );
        });
    },
    1426: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  });
              }
            : function (e, t, r, n) {
                e[(n = void 0 === n ? r : n)] = t[r];
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e)
              "default" === r || t.hasOwnProperty(r) || n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        i(r(1427), t),
        i(r(1123), t),
        i(r(1511), t),
        i(r(1514), t),
        i(r(1516), t);
    },
    1427: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  });
              }
            : function (e, t, r, n) {
                e[(n = void 0 === n ? r : n)] = t[r];
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e)
              "default" === r || t.hasOwnProperty(r) || n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        i(r(1428), t),
        i(r(1510), t);
    },
    1428: function (e, t, r) {
      "use strict";
      var n = r(7),
        i =
          (this && this.__awaiter) ||
          function (e, t, r, n) {
            return new (r = r || Promise)(function (i, o) {
              function a(e) {
                try {
                  u(n.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function s(e) {
                try {
                  u(n.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value) instanceof r
                      ? t
                      : new r(function (e) {
                          e(t);
                        })
                    ).then(a, s);
              }
              u((n = n.apply(e, t || [])).next());
            });
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.aesCbcDecrypt = t.aesCbcEncrypt = void 0);
      var o = r(1123);
      (t.aesCbcEncrypt = function (e, t, r) {
        return i(
          this,
          void 0,
          void 0,
          n.mark(function i() {
            var a;
            return n.wrap(function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    if (o.isBrowser())
                      return (n.next = 3), o.browserAesEncrypt(e, t, r);
                    n.next = 6;
                    break;
                  case 3:
                    (a = n.sent), (n.next = 7);
                    break;
                  case 6:
                    a = o.isNode()
                      ? o.nodeAesEncrypt(e, t, r)
                      : o.fallbackAesEncrypt(e, t, r);
                  case 7:
                    return n.abrupt("return", a);
                  case 8:
                  case "end":
                    return n.stop();
                }
            }, i);
          })
        );
      }),
        (t.aesCbcDecrypt = function (e, t, r) {
          return i(
            this,
            void 0,
            void 0,
            n.mark(function i() {
              var a;
              return n.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      if (o.isBrowser())
                        return (n.next = 3), o.browserAesDecrypt(e, t, r);
                      n.next = 6;
                      break;
                    case 3:
                      (a = n.sent), (n.next = 7);
                      break;
                    case 6:
                      a = o.isNode()
                        ? o.nodeAesDecrypt(e, t, r)
                        : o.fallbackAesDecrypt(e, t, r);
                    case 7:
                      return n.abrupt("return", a);
                    case 8:
                    case "end":
                      return n.stop();
                  }
              }, i);
            })
          );
        });
    },
    1429: function (e, t, r) {
      "use strict";
      (function (e) {
        var n = r(7),
          i =
            (this && this.__awaiter) ||
            function (e, t, r, n) {
              return new (r = r || Promise)(function (i, o) {
                function a(e) {
                  try {
                    u(n.next(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function s(e) {
                  try {
                    u(n.throw(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function u(e) {
                  var t;
                  e.done
                    ? i(e.value)
                    : ((t = e.value) instanceof r
                        ? t
                        : new r(function (e) {
                            e(t);
                          })
                      ).then(a, s);
                }
                u((n = n.apply(e, t || [])).next());
              });
            };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.browserSha512 =
            t.browserSha256 =
            t.browserHmacSha512Sign =
            t.browserHmacSha256Sign =
            t.browserAesDecrypt =
            t.browserAesEncrypt =
            t.browserImportKey =
            t.browserExportKey =
            t.getOps =
            t.getAlgo =
            t.getSubtleCrypto =
            t.getBrowerCrypto =
              void 0);
        var o = r(1179);
        function a() {
          return (
            (null == e ? void 0 : e.crypto) ||
            (null == e ? void 0 : e.msCrypto) ||
            {}
          );
        }
        function s() {
          var e = a();
          return e.subtle || e.webkitSubtle;
        }
        function u(e) {
          return e === o.AES_BROWSER_ALGO
            ? { length: o.AES_LENGTH, name: o.AES_BROWSER_ALGO }
            : { hash: { name: o.HMAC_BROWSER_ALGO }, name: o.HMAC_BROWSER };
        }
        function c(e) {
          return e === o.AES_BROWSER_ALGO
            ? [o.ENCRYPT_OP, o.DECRYPT_OP]
            : [o.SIGN_OP, o.VERIFY_OP];
        }
        function f(e) {
          var t =
            1 < arguments.length && void 0 !== arguments[1]
              ? arguments[1]
              : o.AES_BROWSER_ALGO;
          return i(
            this,
            void 0,
            void 0,
            n.mark(function r() {
              return n.wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return r.abrupt(
                        "return",
                        s().importKey("raw", e, u(t), !0, c(t))
                      );
                    case 1:
                    case "end":
                      return r.stop();
                  }
              }, r);
            })
          );
        }
        (t.getBrowerCrypto = a),
          (t.getSubtleCrypto = s),
          (t.getAlgo = u),
          (t.getOps = c),
          (t.browserExportKey = function (e) {
            return (
              (1 < arguments.length && void 0 !== arguments[1]) ||
                o.AES_BROWSER_ALGO,
              i(
                this,
                void 0,
                void 0,
                n.mark(function t() {
                  var r;
                  return n.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (r = s()),
                            (t.t0 = Uint8Array),
                            (t.next = 4),
                            r.exportKey("raw", e)
                          );
                        case 4:
                          return (
                            (t.t1 = t.sent), t.abrupt("return", new t.t0(t.t1))
                          );
                        case 6:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )
            );
          }),
          (t.browserImportKey = f),
          (t.browserAesEncrypt = function (e, t, r) {
            return i(
              this,
              void 0,
              void 0,
              n.mark(function i() {
                var a, u;
                return n.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (a = s()), (n.next = 3), f(t, o.AES_BROWSER_ALGO)
                        );
                      case 3:
                        return (
                          (u = n.sent),
                          (n.next = 6),
                          a.encrypt({ iv: e, name: o.AES_BROWSER_ALGO }, u, r)
                        );
                      case 6:
                        return (
                          (u = n.sent), n.abrupt("return", new Uint8Array(u))
                        );
                      case 8:
                      case "end":
                        return n.stop();
                    }
                }, i);
              })
            );
          }),
          (t.browserAesDecrypt = function (e, t, r) {
            return i(
              this,
              void 0,
              void 0,
              n.mark(function i() {
                var a, u;
                return n.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (a = s()), (n.next = 3), f(t, o.AES_BROWSER_ALGO)
                        );
                      case 3:
                        return (
                          (u = n.sent),
                          (n.next = 6),
                          a.decrypt({ iv: e, name: o.AES_BROWSER_ALGO }, u, r)
                        );
                      case 6:
                        return (
                          (u = n.sent), n.abrupt("return", new Uint8Array(u))
                        );
                      case 8:
                      case "end":
                        return n.stop();
                    }
                }, i);
              })
            );
          }),
          (t.browserHmacSha256Sign = function (e, t) {
            return i(
              this,
              void 0,
              void 0,
              n.mark(function r() {
                var i, a;
                return n.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (i = s()), (r.next = 3), f(e, o.HMAC_BROWSER);
                      case 3:
                        return (
                          (a = r.sent),
                          (r.next = 6),
                          i.sign(
                            { length: o.HMAC_LENGTH, name: o.HMAC_BROWSER },
                            a,
                            t
                          )
                        );
                      case 6:
                        return (
                          (a = r.sent), r.abrupt("return", new Uint8Array(a))
                        );
                      case 8:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            );
          }),
          (t.browserHmacSha512Sign = function (e, t) {
            return i(
              this,
              void 0,
              void 0,
              n.mark(function r() {
                var i, a;
                return n.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (i = s()), (r.next = 3), f(e, o.HMAC_BROWSER);
                      case 3:
                        return (
                          (a = r.sent),
                          (r.next = 6),
                          i.sign(
                            { length: o.LENGTH_512, name: o.HMAC_BROWSER },
                            a,
                            t
                          )
                        );
                      case 6:
                        return (
                          (a = r.sent), r.abrupt("return", new Uint8Array(a))
                        );
                      case 8:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            );
          }),
          (t.browserSha256 = function (e) {
            return i(
              this,
              void 0,
              void 0,
              n.mark(function t() {
                var r;
                return n.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (r = s()),
                          (t.next = 3),
                          r.digest({ name: o.SHA256_BROWSER_ALGO }, e)
                        );
                      case 3:
                        return (
                          (r = t.sent), t.abrupt("return", new Uint8Array(r))
                        );
                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
          }),
          (t.browserSha512 = function (e) {
            return i(
              this,
              void 0,
              void 0,
              n.mark(function t() {
                var r;
                return n.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (r = s()),
                          (t.next = 3),
                          r.digest({ name: o.SHA512_BROWSER_ALGO }, e)
                        );
                      case 3:
                        return (
                          (r = t.sent), t.abrupt("return", new Uint8Array(r))
                        );
                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
          });
      }.call(this, r(96)));
    },
    1430: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  });
              }
            : function (e, t, r, n) {
                e[(n = void 0 === n ? r : n)] = t[r];
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return i(t, e), t;
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.fallbackRipemd160 =
          t.fallbackSha512 =
          t.fallbackSha256 =
          t.fallbackHmacSha512Sign =
          t.fallbackHmacSha256Sign =
          t.fallbackAesDecrypt =
          t.fallbackAesEncrypt =
            void 0);
      var s = a(r(1431)),
        u = o(r(140)),
        c = r(1122),
        f = r(1179),
        l = r(1123);
      (t.fallbackAesEncrypt = function (e, t, r) {
        return (
          (e = new s.default.ModeOfOperation.cbc(t, e)),
          (r = l.pkcs7.pad(r)),
          (r = e.encrypt(r)),
          new Uint8Array(r)
        );
      }),
        (t.fallbackAesDecrypt = function (e, t, r) {
          return (
            (r = new s.default.ModeOfOperation.cbc(t, e).decrypt(r)),
            (r = new Uint8Array(r)),
            l.pkcs7.unpad(r)
          );
        }),
        (t.fallbackHmacSha256Sign = function (e, t) {
          return (
            (t = u.hmac(u[f.SHA256_NODE_ALGO], e).update(t).digest(f.HEX_ENC)),
            c.hexToArray(t)
          );
        }),
        (t.fallbackHmacSha512Sign = function (e, t) {
          return (
            (t = u.hmac(u[f.SHA512_NODE_ALGO], e).update(t).digest(f.HEX_ENC)),
            c.hexToArray(t)
          );
        }),
        (t.fallbackSha256 = function (e) {
          return (e = u.sha256().update(e).digest(f.HEX_ENC)), c.hexToArray(e);
        }),
        (t.fallbackSha512 = function (e) {
          return (e = u.sha512().update(e).digest(f.HEX_ENC)), c.hexToArray(e);
        }),
        (t.fallbackRipemd160 = function (e) {
          return (
            (e = u.ripemd160().update(e).digest(f.HEX_ENC)), c.hexToArray(e)
          );
        });
    },
    1431: function (e, t, r) {
      !(function () {
        "use strict";
        function t(e) {
          return parseInt(e) === e;
        }
        function r(e) {
          if (t(e.length)) {
            for (var r = 0; r < e.length; r++)
              if (!t(e[r]) || e[r] < 0 || 255 < e[r]) return;
            return 1;
          }
        }
        function n(e, n) {
          if (e.buffer && "Uint8Array" === e.name)
            return n
              ? e.slice
                ? e.slice()
                : Array.prototype.slice.call(e)
              : e;
          if (Array.isArray(e)) {
            if (!r(e)) throw new Error("Array contains invalid value: " + e);
            return new Uint8Array(e);
          }
          if (t(e.length) && r(e)) return new Uint8Array(e);
          throw new Error("unsupported array-like object");
        }
        function i(e) {
          return new Uint8Array(e);
        }
        function o(e, t, r, n, i) {
          (null == n && null == i) ||
            (e = e.slice ? e.slice(n, i) : Array.prototype.slice.call(e, n, i)),
            t.set(e, r);
        }
        var a,
          s = {
            toBytes: function (e) {
              var t = [],
                r = 0;
              for (e = encodeURI(e); r < e.length; ) {
                var i = e.charCodeAt(r++);
                37 === i
                  ? (t.push(parseInt(e.substr(r, 2), 16)), (r += 2))
                  : t.push(i);
              }
              return n(t);
            },
            fromBytes: function (e) {
              for (var t = [], r = 0; r < e.length; ) {
                var n = e[r];
                n < 128
                  ? (t.push(String.fromCharCode(n)), r++)
                  : 191 < n && n < 224
                  ? (t.push(
                      String.fromCharCode(((31 & n) << 6) | (63 & e[r + 1]))
                    ),
                    (r += 2))
                  : (t.push(
                      String.fromCharCode(
                        ((15 & n) << 12) |
                          ((63 & e[r + 1]) << 6) |
                          (63 & e[r + 2])
                      )
                    ),
                    (r += 3));
              }
              return t.join("");
            },
          },
          u =
            ((a = "0123456789abcdef"),
            {
              toBytes: function (e) {
                for (var t = [], r = 0; r < e.length; r += 2)
                  t.push(parseInt(e.substr(r, 2), 16));
                return t;
              },
              fromBytes: function (e) {
                for (var t = [], r = 0; r < e.length; r++) {
                  var n = e[r];
                  t.push(a[(240 & n) >> 4] + a[15 & n]);
                }
                return t.join("");
              },
            }),
          c = { 16: 10, 24: 12, 32: 14 },
          f = [
            1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94,
            188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145,
          ],
          l = [
            99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215,
            171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175,
            156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165,
            229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18,
            128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82,
            59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91,
            106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51,
            133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157,
            56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95,
            151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220,
            34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58,
            10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200,
            55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8,
            186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189,
            139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134,
            193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135,
            233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65,
            153, 45, 15, 176, 84, 187, 22,
          ],
          h = [
            82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215,
            251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196,
            222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11,
            66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162,
            73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212,
            164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185,
            218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188,
            211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202,
            63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79,
            103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172,
            116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110,
            71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190,
            27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120,
            205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89,
            39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122,
            159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200,
            235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38,
            225, 105, 20, 99, 85, 33, 12, 125,
          ],
          d = [
            3328402341, 4168907908, 4000806809, 4135287693, 4294111757,
            3597364157, 3731845041, 2445657428, 1613770832, 33620227,
            3462883241, 1445669757, 3892248089, 3050821474, 1303096294,
            3967186586, 2412431941, 528646813, 2311702848, 4202528135,
            4026202645, 2992200171, 2387036105, 4226871307, 1101901292,
            3017069671, 1604494077, 1169141738, 597466303, 1403299063,
            3832705686, 2613100635, 1974974402, 3791519004, 1033081774,
            1277568618, 1815492186, 2118074177, 4126668546, 2211236943,
            1748251740, 1369810420, 3521504564, 4193382664, 3799085459,
            2883115123, 1647391059, 706024767, 134480908, 2512897874,
            1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301,
            235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841,
            2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870,
            907746093, 3698224818, 3025820398, 1537253627, 2756858614,
            1983593293, 3084310113, 2108928974, 1378429307, 3722699582,
            1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436,
            1075847264, 3825007647, 2041688520, 3059440621, 3563743934,
            2378943302, 1740553945, 1916352843, 2487896798, 2555137236,
            2958579944, 2244988746, 3151024235, 3320835882, 1336584933,
            3992714006, 2252555205, 2588757463, 1714631509, 293963156,
            2319795663, 3925473552, 67240454, 4269768577, 2689618160,
            2017213508, 631218106, 1269344483, 2723238387, 1571005438,
            2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100,
            1673313503, 2008463041, 2950355573, 1109467491, 537923632,
            3858759450, 4260623118, 3218264685, 2177748300, 403442708,
            638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209,
            2479146071, 1437050866, 4236148354, 2050833735, 3362022572,
            3126681063, 840505643, 3866325909, 3227541664, 427917720,
            2655997905, 2749160575, 1143087718, 1412049534, 999329963,
            193497219, 2353415882, 3354324521, 1807268051, 672404540,
            2816401017, 3160301282, 369822493, 2916866934, 3688947771,
            1681011286, 1949973070, 336202270, 2454276571, 201721354,
            1210328172, 3093060836, 2680341085, 3184776046, 1135389935,
            3294782118, 965841320, 831886756, 3554993207, 4068047243,
            3588745010, 2345191491, 1849112409, 3664604599, 26054028,
            2983581028, 2622377682, 1235855840, 3630984372, 2891339514,
            4092916743, 3488279077, 3395642799, 4101667470, 1202630377,
            268961816, 1874508501, 4034427016, 1243948399, 1546530418,
            941366308, 1470539505, 1941222599, 2546386513, 3421038627,
            2715671932, 3899946140, 1042226977, 2521517021, 1639824860,
            227249030, 260737669, 3765465232, 2084453954, 1907733956,
            3429263018, 2420656344, 100860677, 4160157185, 470683154,
            3261161891, 1781871967, 2924959737, 1773779408, 394692241,
            2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851,
            571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662,
            1008606754, 361203602, 3387549984, 2278477385, 2857719295,
            1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935,
            1707065306, 3622233649, 2218934982, 3496503480, 2185314755,
            697932208, 1512910199, 504303377, 2075177163, 2824099068,
            1841019862, 739644986,
          ],
          p = [
            2781242211, 2230877308, 2582542199, 2381740923, 234877682,
            3184946027, 2984144751, 1418839493, 1348481072, 50462977,
            2848876391, 2102799147, 434634494, 1656084439, 3863849899,
            2599188086, 1167051466, 2636087938, 1082771913, 2281340285,
            368048890, 3954334041, 3381544775, 201060592, 3963727277,
            1739838676, 4250903202, 3930435503, 3206782108, 4149453988,
            2531553906, 1536934080, 3262494647, 484572669, 2923271059,
            1783375398, 1517041206, 1098792767, 49674231, 1334037708,
            1550332980, 4098991525, 886171109, 150598129, 2481090929,
            1940642008, 1398944049, 1059722517, 201851908, 1385547719,
            1699095331, 1587397571, 674240536, 2704774806, 252314885,
            3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483,
            1766729511, 3447698098, 2682942837, 454166793, 2652734339,
            1951935532, 775166490, 758520603, 3000790638, 4004797018,
            4217086112, 4137964114, 1299594043, 1639438038, 3464344499,
            2068982057, 1054729187, 1901997871, 2534638724, 4121318227,
            1757008337, 0, 750906861, 1614815264, 535035132, 3363418545,
            3988151131, 3201591914, 1183697867, 3647454910, 1265776953,
            3734260298, 3566750796, 3903871064, 1250283471, 1807470800,
            717615087, 3847203498, 384695291, 3313910595, 3617213773,
            1432761139, 2484176261, 3481945413, 283769337, 100925954,
            2180939647, 4037038160, 1148730428, 3123027871, 3813386408,
            4087501137, 4267549603, 3229630528, 2315620239, 2906624658,
            3156319645, 1215313976, 82966005, 3747855548, 3245848246,
            1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890,
            1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207,
            3431482436, 959321879, 1469301956, 4065699751, 2197585534,
            1199193405, 2898814052, 3887750493, 724703513, 2514908019,
            2696962144, 2551808385, 3516813135, 2141445340, 1715741218,
            2119445034, 2872807568, 2198571144, 3398190662, 700968686,
            3547052216, 1009259540, 2041044702, 3803995742, 487983883,
            1991105499, 1004265696, 1449407026, 1316239930, 504629770,
            3683797321, 168560134, 1816667172, 3837287516, 1570751170,
            1857934291, 4014189740, 2797888098, 2822345105, 2754712981,
            936633572, 2347923833, 852879335, 1133234376, 1500395319,
            3084545389, 2348912013, 1689376213, 3533459022, 3762923945,
            3034082412, 4205598294, 133428468, 634383082, 2949277029,
            2398386810, 3913789102, 403703816, 3580869306, 2297460856,
            1867130149, 1918643758, 607656988, 4049053350, 3346248884,
            1368901318, 600565992, 2090982877, 2632479860, 557719327,
            3717614411, 3697393085, 2249034635, 2232388234, 2430627952,
            1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830,
            303828494, 2747425121, 1600795957, 4188952407, 3496589753,
            2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800,
            3005978776, 857870609, 3151128937, 1890179545, 2298973838,
            2805175444, 3056442267, 574365214, 2450884487, 550103529,
            1233637070, 4289353045, 2018519080, 2057691103, 2399374476,
            4166623649, 2148108681, 387583245, 3664101311, 836232934,
            3330556482, 3100665960, 3280093505, 2955516313, 2002398509,
            287182607, 3413881008, 4238890068, 3597515707, 975967766,
          ],
          v = [
            1671808611, 2089089148, 2006576759, 2072901243, 4061003762,
            1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671,
            729634347, 4263110654, 3613570519, 2883997099, 1989864566,
            3393556426, 2191335298, 3376449993, 2106063485, 4195741690,
            1508618841, 1204391495, 4027317232, 2917941677, 3563566036,
            2734514082, 2951366063, 2629772188, 2767672228, 1922491506,
            3227229120, 3082974647, 4246528509, 2477669779, 644500518,
            911895606, 1061256767, 4144166391, 3427763148, 878471220,
            2784252325, 3845444069, 4043897329, 1905517169, 3631459288,
            827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891,
            405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066,
            2157648768, 3795705826, 3945188843, 661212711, 2999812018,
            1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803,
            1857215598, 1525593178, 2700827552, 1391895634, 994932283,
            3596728278, 3016654259, 695947817, 3812548067, 795958831,
            2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784,
            4229948412, 2982705585, 1542305371, 1790891114, 3410398667,
            3201918910, 961245753, 1256100938, 1289001036, 1491644504,
            3477767631, 3496721360, 4012557807, 2867154858, 4212583931,
            1137018435, 1305975373, 861234739, 2241073541, 1171229253,
            4178635257, 33948674, 2139225727, 1357946960, 1011120188,
            2679776671, 2833468328, 1374921297, 2751356323, 1086357568,
            2408187279, 2460827538, 2646352285, 944271416, 4110742005,
            3168756668, 3066132406, 3665145818, 560153121, 271589392,
            4279952895, 4077846003, 3530407890, 3444343245, 202643468,
            322250259, 3962553324, 1608629855, 2543990167, 1154254916,
            389623319, 3294073796, 2817676711, 2122513534, 1028094525,
            1689045092, 1575467613, 422261273, 1939203699, 1621147744,
            2174228865, 1339137615, 3699352540, 577127458, 712922154,
            2427141008, 2290289544, 1187679302, 3995715566, 3100863416,
            339486740, 3732514782, 1591917662, 186455563, 3681988059,
            3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734,
            611076132, 1558493276, 3260915650, 3547250131, 2901361580,
            1655096418, 2443721105, 2510565781, 3828863972, 2039214713,
            3878868455, 3359869896, 928607799, 1840765549, 2374762893,
            3580146133, 1322425422, 2850048425, 1823791212, 1459268694,
            4094161908, 3928346602, 1706019429, 2056189050, 2934523822,
            135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708,
            2800834470, 3032970164, 3327236038, 3894660072, 3715932637,
            1956440180, 522272287, 1272813131, 3185336765, 2340818315,
            2323976074, 1888542832, 1044544574, 3049550261, 1722469478,
            1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557,
            1475980887, 3117443513, 2257655686, 3243809217, 489110045,
            2662934430, 3778599393, 4162055160, 2561878936, 288563729,
            1773916777, 3648039385, 2391345038, 2493985684, 2612407707,
            505560094, 2274497927, 3911240169, 3460925390, 1442818645,
            678973480, 3749357023, 2358182796, 2717407649, 2306869641,
            219617805, 3218761151, 3862026214, 1120306242, 1756942440,
            1103331905, 2578459033, 762796589, 252780047, 2966125488,
            1425844308, 3151392187, 372911126,
          ],
          g = [
            1667474886, 2088535288, 2004326894, 2071694838, 4075949567,
            1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926,
            724270422, 4278065639, 3621216949, 2880169549, 1987484396,
            3402253711, 2189597983, 3385409673, 2105378810, 4210693615,
            1499065266, 1195886990, 4042263547, 2913856577, 3570689971,
            2728590687, 2947541573, 2627518243, 2762274643, 1920112356,
            3233831835, 3082273397, 4261223649, 2475929149, 640051788,
            909531756, 1061110142, 4160160501, 3435941763, 875846760,
            2779116625, 3857003729, 4059105529, 1903268834, 3638064043,
            825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861,
            404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396,
            2155911963, 3806477791, 3958056653, 656894286, 2998062463,
            1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878,
            1852748508, 1515908788, 2694904667, 1381168804, 993742198,
            3604373943, 3014905469, 690584402, 3823320797, 791638366,
            2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704,
            4244381667, 2981218425, 1532751286, 1785380564, 3419096717,
            3200178535, 960056178, 1246420628, 1280103576, 1482221744,
            3486468741, 3503319995, 4025428677, 2863326543, 4227536621,
            1128514950, 1296947098, 859002214, 2240123921, 1162203018,
            4193849577, 33687044, 2139062782, 1347481760, 1010582648,
            2678045221, 2829640523, 1364325282, 2745433693, 1077985408,
            2408548869, 2459086143, 2644360225, 943212656, 4126475505,
            3166494563, 3065430391, 3671750063, 555836226, 269496352,
            4294908645, 4092792573, 3537006015, 3452783745, 202118168,
            320025894, 3974901699, 1600119230, 2543297077, 1145359496,
            387397934, 3301201811, 2812801621, 2122220284, 1027426170,
            1684319432, 1566435258, 421079858, 1936954854, 1616945344,
            2172753945, 1330631070, 3705438115, 572679748, 707427924,
            2425400123, 2290647819, 1179044492, 4008585671, 3099120491,
            336870440, 3739122087, 1583276732, 185277718, 3688593069,
            3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084,
            606366792, 1549591736, 3267517855, 3553849021, 2897014595,
            1650632388, 2442242105, 2509612081, 3840161747, 2038008818,
            3890688725, 3368567691, 926374254, 1835907034, 2374863873,
            3587531953, 1313788572, 2846482505, 1819063512, 1448540844,
            4109633523, 3941213647, 1701162954, 2054852340, 2930698567,
            134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328,
            2795958615, 3031746419, 3334885783, 3907527627, 3722280097,
            1953799400, 522133822, 1263263126, 3183336545, 2341176845,
            2324333839, 1886425312, 1044267644, 3048588401, 1718004428,
            1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282,
            1465383342, 3115962473, 2256965911, 3250673817, 488449850,
            2661202215, 3789633753, 4177007595, 2560144171, 286339874,
            1768537042, 3654906025, 2391705863, 2492770099, 2610673197,
            505291324, 2273808917, 3924369609, 3469625735, 1431699370,
            673740880, 3755965093, 2358021891, 2711746649, 2307489801,
            218961690, 3217021541, 3873845719, 1111672452, 1751693520,
            1094828930, 2576986153, 757954394, 252645662, 2964376443,
            1414855848, 3149649517, 370555436,
          ],
          _ = [
            1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753,
            2902087851, 1273168787, 540080725, 2910219766, 2295101073,
            4110568485, 1340463100, 3307916247, 641025152, 3043140495,
            3736164937, 632953703, 1172967064, 1576976609, 3274667266,
            2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147,
            2505202138, 3569255213, 1484005843, 1239443753, 2395588676,
            1975683434, 4102977912, 2572697195, 666464733, 3202437046,
            4035489047, 3374361702, 2110667444, 1675577880, 3843699074,
            2538681184, 1649639237, 2976151520, 3144396420, 4269907996,
            4178062228, 1883793496, 2403728665, 2497604743, 1383856311,
            2876494627, 1917518562, 3810496343, 1716890410, 3001755655,
            800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362,
            3977675356, 2328828971, 2809771154, 4077384432, 1315562145,
            1708848333, 101039829, 3509871135, 3299278474, 875451293,
            2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582,
            3178106961, 1042385657, 2531067453, 3711829422, 1306967366,
            2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327,
            2302690252, 1742315127, 2968011453, 126454664, 3877198648,
            2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987,
            841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998,
            908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497,
            2472011535, 3035535058, 463180190, 2160117071, 1641816226,
            1517767529, 470948374, 3801332234, 3231722213, 1008918595,
            303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501,
            2943682380, 4003061179, 2743034109, 4144047775, 1551037884,
            1147550661, 1543208500, 2336434550, 3408119516, 3069049960,
            3102011747, 3610369226, 1113818384, 328671808, 2227573024,
            2236228733, 3535486456, 2935566865, 3341394285, 496906059,
            3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682,
            1206477858, 2835123396, 2700099354, 1451044056, 573804783,
            2269728455, 3644379585, 2362090238, 2564033334, 2801107407,
            2776292904, 3669462566, 1068351396, 742039012, 1350078989,
            1784663195, 1417561698, 4136440770, 2430122216, 775550814,
            2193862645, 2673705150, 1775276924, 1876241833, 3475313331,
            3366754619, 270040487, 3902563182, 3678124923, 3441850377,
            1851332852, 3969562369, 2203032232, 3868552805, 2868897406,
            566021896, 4011190502, 3135740889, 1248802510, 3936291284,
            699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047,
            4236429990, 3767586992, 866637845, 4043610186, 1106041591,
            2144161806, 395441711, 1984812685, 1139781709, 3433712980,
            3835036895, 2664543715, 1282050075, 3240894392, 1181045119,
            2640243204, 25965917, 4203181171, 4211818798, 3009879386,
            2463879762, 3910161971, 1842759443, 2597806476, 933301370,
            1509430414, 3943906441, 3467192302, 3076639029, 3776767469,
            2051518780, 2631065433, 1441952575, 404016761, 1942435775,
            1408749034, 1610459739, 3745345300, 2017778566, 3400528769,
            3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627,
            4279080257, 967311729, 135050206, 3635733660, 1683407248,
            2076935265, 3576870512, 1215061108, 3501741890,
          ],
          m = [
            1347548327, 1400783205, 3273267108, 2520393566, 3409685355,
            4045380933, 2880240216, 2471224067, 1428173050, 4138563181,
            2441661558, 636813900, 4233094615, 3620022987, 2149987652,
            2411029155, 1239331162, 1730525723, 2554718734, 3781033664,
            46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972,
            3955191162, 3667219033, 768917123, 3545789473, 692707433,
            1150208456, 1786102409, 2029293177, 1805211710, 3710368113,
            3065962831, 401639597, 1724457132, 3028143674, 409198410,
            2196052529, 1620529459, 1164071807, 3769721975, 2226875310,
            486441376, 2499348523, 1483753576, 428819965, 2274680428,
            3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120,
            53458370, 2592523643, 2782082824, 4063242375, 2988687269,
            3120694122, 1559041666, 730517276, 2460449204, 4042459122,
            2706270690, 3446004468, 3573941694, 533804130, 2328143614,
            2637442643, 2695033685, 839224033, 1973745387, 957055980,
            2856345839, 106852767, 1371368976, 4181598602, 1033297158,
            2933734917, 1179510461, 3046200461, 91341917, 1862534868,
            4284502037, 605657339, 2547432937, 3431546947, 2003294622,
            3182487618, 2282195339, 954669403, 3682191598, 1201765386,
            3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696,
            1315723890, 4227665663, 1443857720, 507358933, 657861945,
            1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535,
            3535072918, 2652609425, 1333838021, 2724322336, 1767536459,
            370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197,
            2918353863, 3106780840, 3356761769, 2237133081, 1286567175,
            3152976349, 4255350624, 2683765030, 3160175349, 3309594171,
            878443390, 1988838185, 3704300486, 1756818940, 1673061617,
            3403100636, 272786309, 1075025698, 545572369, 2105887268,
            4174560061, 296679730, 1841768865, 1260232239, 4091327024,
            3960309330, 3497509347, 1814803222, 2578018489, 4195456072,
            575138148, 3299409036, 446754879, 3629546796, 4011996048,
            3347532110, 3252238545, 4270639778, 915985419, 3483825537,
            681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820,
            1649704518, 3270937875, 3901806776, 1580087799, 4118987695,
            3198115200, 2087309459, 2842678573, 3016697106, 1003007129,
            2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319,
            2827177882, 1709610350, 2125135846, 136428751, 3874428392,
            3652904859, 3460984630, 3572145929, 3593056380, 2939266226,
            824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152,
            355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630,
            1296297904, 1422699085, 3756299780, 3818836405, 457992840,
            3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353,
            1521706781, 1385356242, 870912086, 325965383, 2358957921,
            2050466060, 2388260884, 2313884476, 4006521127, 901210569,
            3990953189, 1014646705, 1503449823, 1062597235, 2031621326,
            3212035895, 3931371469, 1533017514, 350174575, 2256028891,
            2177544179, 1052338372, 741876788, 1606591296, 1914052035,
            213705253, 2334669897, 1107234197, 1899603969, 3725069491,
            2631447780, 2422494913, 1635502980, 1893020342, 1950903388,
            1120974935,
          ],
          y = [
            2807058932, 1699970625, 2764249623, 1586903591, 1808481195,
            1173430173, 1487645946, 59984867, 4199882800, 1844882806,
            1989249228, 1277555970, 3623636965, 3419915562, 1149249077,
            2744104290, 1514790577, 459744698, 244860394, 3235995134,
            1963115311, 4027744588, 2544078150, 4190530515, 1608975247,
            2627016082, 2062270317, 1507497298, 2200818878, 567498868,
            1764313568, 3359936201, 2305455554, 2037970062, 1047239e3,
            1910319033, 1337376481, 2904027272, 2892417312, 984907214,
            1243112415, 830661914, 861968209, 2135253587, 2011214180,
            2927934315, 2686254721, 731183368, 1750626376, 4246310725,
            1820824798, 4172763771, 3542330227, 48394827, 2404901663,
            2871682645, 671593195, 3254988725, 2073724613, 145085239,
            2280796200, 2779915199, 1790575107, 2187128086, 472615631,
            3029510009, 4075877127, 3802222185, 4107101658, 3201631749,
            1646252340, 4270507174, 1402811438, 1436590835, 3778151818,
            3950355702, 3963161475, 4020912224, 2667994737, 273792366,
            2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892,
            3564045318, 369057872, 4213447064, 3919042237, 1137477952,
            2658625497, 1119727848, 2340947849, 1530455833, 4007360968,
            172466556, 266959938, 516552836, 0, 2256734592, 3980931627,
            1890328081, 1917742170, 4294704398, 945164165, 3575528878,
            958871085, 3647212047, 2787207260, 1423022939, 775562294,
            1739656202, 3876557655, 2530391278, 2443058075, 3310321856,
            547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690,
            387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201,
            122466165, 3720081049, 1627235199, 648017665, 4122762354,
            1002783846, 2117360635, 695634755, 3336358691, 4234721005,
            4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898,
            1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670,
            3822090177, 376187827, 3113855344, 1224348052, 1679968233,
            2361698556, 1058709744, 752375421, 2431590963, 1321699145,
            3519142200, 2734591178, 188127444, 2177869557, 3727205754,
            2384911031, 3215212461, 2648976442, 2450346104, 3432737375,
            1180849278, 331544205, 3102249176, 4150144569, 2952102595,
            2159976285, 2474404304, 766078933, 313773861, 2570832044,
            2108100632, 1668212892, 3145456443, 2013908262, 418672217,
            3070356634, 2594734927, 1852171925, 3867060991, 3473416636,
            3907448597, 2614737639, 919489135, 164948639, 2094410160,
            2997825956, 590424639, 2486224549, 1723872674, 3157750862,
            3399941250, 3501252752, 3625268135, 2555048196, 3673637356,
            1343127501, 4130281361, 3599595085, 2957853679, 1297403050,
            81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974,
            895287692, 1953757831, 1093597963, 492483431, 3528626907,
            1446242576, 1192455638, 1636604631, 209336225, 344873464,
            1015671571, 669961897, 3375740769, 3857572124, 2973530695,
            3747192018, 1933530610, 3464042516, 935293895, 3454686199,
            2858115069, 1863638845, 3683022916, 4085369519, 3292445032,
            875313188, 1080017571, 3279033885, 621591778, 1233856572,
            2504130317, 24197544, 3017672716, 3835484340, 3247465558,
            2220981195, 3060847922, 1551124588, 1463996600,
          ],
          w = [
            4104605777, 1097159550, 396673818, 660510266, 2875968315,
            2638606623, 4200115116, 3808662347, 821712160, 1986918061,
            3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325,
            2975484382, 3122358053, 3926825029, 4274053469, 796197571,
            1290801793, 1184342925, 3556361835, 2405426947, 2459735317,
            1836772287, 1381620373, 3196267988, 1948373848, 3764988233,
            3385345166, 3263785589, 2390325492, 1480485785, 3111247143,
            3780097726, 2293045232, 548169417, 3459953789, 3746175075,
            439452389, 1362321559, 1400849762, 1685577905, 1806599355,
            2174754046, 137073913, 1214797936, 1174215055, 3731654548,
            2079897426, 1943217067, 1258480242, 529487843, 1437280870,
            3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299,
            57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110,
            3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170,
            2330014213, 4142626212, 2213296395, 1626319424, 1906247262,
            1846563261, 562755902, 3708173718, 1040559837, 3871163981,
            1418573201, 3294430577, 114585348, 1343618912, 2566595609,
            3186202582, 1078185097, 3651041127, 3896688048, 2307622919,
            425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0,
            2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775,
            2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204,
            174567692, 1474760595, 4002861748, 2610011675, 3234156416,
            3693126241, 2001430874, 303699484, 2478443234, 2687165888,
            585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284,
            4044981591, 1963412655, 2581445614, 2137062819, 19308535,
            1928707164, 1715193156, 4219352155, 1126790795, 600235211,
            3992742070, 3841024952, 836553431, 1669664834, 2535604243,
            3323011204, 1243905413, 3141400786, 4180808110, 698445255,
            2653899549, 2989552604, 2253581325, 3252932727, 3004591147,
            1891211689, 2487810577, 3915653703, 4237083816, 4030667424,
            2100090966, 865136418, 1229899655, 953270745, 3399679628,
            3557504664, 4118925222, 2061379749, 3079546586, 2915017791,
            983426092, 2022837584, 1607244650, 2118541908, 2366882550,
            3635996816, 972512814, 3283088770, 1568718495, 3499326569,
            3576539503, 621982671, 2895723464, 410887952, 2623762152,
            1002142683, 645401037, 1494807662, 2595684844, 1335535747,
            2507040230, 4293295786, 3167684641, 367585007, 3885750714,
            1865862730, 2668221674, 2960971305, 2763173681, 1059270954,
            2777952454, 2724642869, 1320957812, 2194319100, 2429595872,
            2815956275, 77089521, 3973773121, 3444575871, 2448830231,
            1305906550, 4021308739, 2857194700, 2516901860, 3518358430,
            1787304780, 740276417, 1699839814, 1592394909, 2352307457,
            2272556026, 188821243, 1729977011, 3687994002, 274084841,
            3594982253, 3613494426, 2701949495, 4162096729, 322734571,
            2837966542, 1640576439, 484830689, 1202797690, 3537852828,
            4067639125, 349075736, 3342319475, 4157467219, 4255800159,
            1030690015, 1155237496, 2951971274, 1757691577, 607398968,
            2738905026, 499347990, 3794078908, 1011452712, 227885567,
            2818666809, 213114376, 3034881240, 1455525988, 3414450555,
            850817237, 1817998408, 3092726480,
          ],
          b = [
            0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554,
            708780849, 1883793496, 2118214995, 1817866830, 1649639237,
            1215061108, 1181045119, 1417561698, 1517767529, 3767586992,
            4003061179, 4236429990, 4069246893, 3635733660, 3602770327,
            3299278474, 3400528769, 2430122216, 2664543715, 2362090238,
            2193862645, 2835123396, 2801107407, 3035535058, 3135740889,
            3678124923, 3576870512, 3341394285, 3374361702, 3810496343,
            3977675356, 4279080257, 4043610186, 2876494627, 2776292904,
            3076639029, 3110650942, 2472011535, 2640243204, 2403728665,
            2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847,
            226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501,
            1509430414, 1942435775, 2110667444, 1876241833, 1641816226,
            2910219766, 2743034109, 2976151520, 3211623147, 2505202138,
            2606453969, 2302690252, 2269728455, 3711829422, 3543599269,
            3240894392, 3475313331, 3843699074, 3943906441, 4178062228,
            4144047775, 1306967366, 1139781709, 1374988112, 1610459739,
            1975683434, 2076935265, 1775276924, 1742315127, 1034867998,
            866637845, 566021896, 800440835, 92987698, 193195065, 429456164,
            395441711, 1984812685, 2017778566, 1784663195, 1683407248,
            1315562145, 1080094634, 1383856311, 1551037884, 101039829,
            135050206, 437757123, 337553864, 1042385657, 807962610, 573804783,
            742039012, 2531067453, 2564033334, 2328828971, 2227573024,
            2935566865, 2700099354, 3001755655, 3168937228, 3868552805,
            3902563182, 4203181171, 4102977912, 3736164937, 3501741890,
            3265478751, 3433712980, 1106041591, 1340463100, 1576976609,
            1408749034, 2043211483, 2009195472, 1708848333, 1809054150,
            832877231, 1068351396, 766945465, 599762354, 159417987, 126454664,
            361929877, 463180190, 2709260871, 2943682380, 3178106961,
            3009879386, 2572697195, 2538681184, 2236228733, 2336434550,
            3509871135, 3745345300, 3441850377, 3274667266, 3910161971,
            3877198648, 4110568485, 4211818798, 2597806476, 2497604743,
            2261089178, 2295101073, 2733856160, 2902087851, 3202437046,
            2968011453, 3936291284, 3835036895, 4136440770, 4169408201,
            3535486456, 3702665459, 3467192302, 3231722213, 2051518780,
            1951317047, 1716890410, 1750902305, 1113818384, 1282050075,
            1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761,
            841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234,
            4035489047, 4269907996, 3569255213, 3669462566, 3366754619,
            3332740144, 2631065433, 2463879762, 2160117071, 2395588676,
            2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362,
            270040487, 504459436, 875451293, 975658646, 675039627, 641025152,
            2084704233, 1917518562, 1615861247, 1851332852, 1147550661,
            1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972,
            632953703, 260388950, 25965917, 328671808, 496906059, 1206477858,
            1239443753, 1543208500, 1441952575, 2144161806, 1908694277,
            1675577880, 1842759443, 3610369226, 3644379585, 3408119516,
            3307916247, 4011190502, 3776767469, 4077384432, 4245618683,
            2809771154, 2842737049, 3144396420, 3043140495, 2673705150,
            2438237621, 2203032232, 2370213795,
          ],
          E = [
            0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694,
            824852259, 1483753576, 1400783205, 1315723890, 1164071807,
            1950903388, 2135319889, 1649704518, 1767536459, 2967507152,
            3152976349, 2801566410, 2918353863, 2631447780, 2547432937,
            2328143614, 2177544179, 3901806776, 3818836405, 4270639778,
            4118987695, 3299409036, 3483825537, 3535072918, 3652904859,
            2077965243, 1893020342, 1841768865, 1724457132, 1474502543,
            1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569,
            1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355,
            3224740454, 3710368113, 3593056380, 3875770207, 3960309330,
            4045380933, 4195456072, 2471224067, 2554718734, 2237133081,
            2388260884, 3212035895, 3028143674, 2842678573, 2724322336,
            4138563181, 4255350624, 3769721975, 3955191162, 3667219033,
            3516619604, 3431546947, 3347532110, 2933734917, 2782082824,
            3099667487, 3016697106, 2196052529, 2313884476, 2499348523,
            2683765030, 1179510461, 1296297904, 1347548327, 1533017514,
            1786102409, 1635502980, 2087309459, 2003294622, 507358933,
            355706840, 136428751, 53458370, 839224033, 957055980, 605657339,
            790073846, 2373340630, 2256028891, 2607439820, 2422494913,
            2706270690, 2856345839, 3075636216, 3160175349, 3573941694,
            3725069491, 3273267108, 3356761769, 4181598602, 4063242375,
            4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369,
            296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147,
            1945798516, 2029293177, 1239331162, 1120974935, 1606591296,
            1422699085, 4148292826, 4233094615, 3781033664, 3931371469,
            3682191598, 3497509347, 3446004468, 3328955385, 2939266226,
            2755636671, 3106780840, 2988687269, 2198438022, 2282195339,
            2501218972, 2652609425, 1201765386, 1286567175, 1371368976,
            1521706781, 1805211710, 1620529459, 2105887268, 1988838185,
            533804130, 350174575, 164439672, 46346101, 870912086, 954669403,
            636813900, 788204353, 2358957921, 2274680428, 2592523643,
            2441661558, 2695033685, 2880240216, 3065962831, 3182487618,
            3572145929, 3756299780, 3270937875, 3388507166, 4174560061,
            4091327024, 4006521127, 3854606378, 1014646705, 930369212,
            711349675, 560487590, 272786309, 457992840, 106852767, 223377554,
            1678381017, 1862534868, 1914052035, 2031621326, 1211247597,
            1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597,
            486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823,
            1385356242, 1333838021, 1150208456, 1973745387, 2125135846,
            1673061617, 1756818940, 2970356327, 3120694122, 2802849917,
            2887651696, 2637442643, 2520393566, 2334669897, 2149987652,
            3917234703, 3799141122, 4284502037, 4100872472, 3309594171,
            3460984630, 3545789473, 3629546796, 2050466060, 1899603969,
            1814803222, 1730525723, 1443857720, 1560382517, 1075025698,
            1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656,
            91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486,
            3620022987, 3874428392, 3990953189, 4042459122, 4227665663,
            2460449204, 2578018489, 2226875310, 2411029155, 3198115200,
            3046200461, 2827177882, 2743944855,
          ],
          x = [
            0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294,
            590424639, 1750626376, 1699970625, 1917742170, 2135253587,
            1551124588, 1367295589, 1180849278, 1265195639, 3501252752,
            3720081049, 3399941250, 3350065803, 3835484340, 3919042237,
            4270507174, 4085369519, 3102249176, 3051593425, 2734591178,
            2952102595, 2361698556, 2177869557, 2530391278, 2614737639,
            3145456443, 3060847922, 2708326185, 2892417312, 2404901663,
            2187128086, 2504130317, 2555048196, 3542330227, 3727205754,
            3375740769, 3292445032, 3876557655, 3926170974, 4246310725,
            4027744588, 1808481195, 1723872674, 1910319033, 2094410160,
            1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394,
            428169201, 344873464, 935293895, 984907214, 766078933, 547512796,
            1844882806, 1627235199, 2011214180, 2062270317, 1507497298,
            1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772,
            313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286,
            2957853679, 2807058932, 2858115069, 2305455554, 2220981195,
            2474404304, 2658625497, 3575528878, 3625268135, 3473416636,
            3254988725, 3778151818, 3963161475, 4213447064, 4130281361,
            3599595085, 3683022916, 3432737375, 3247465558, 3802222185,
            4020912224, 4172763771, 4122762354, 3201631749, 3017672716,
            2764249623, 2848461854, 2331590177, 2280796200, 2431590963,
            2648976442, 104699613, 188127444, 472615631, 287343814, 840019705,
            1058709744, 671593195, 621591778, 1852171925, 1668212892,
            1953757831, 2037970062, 1514790577, 1463996600, 1080017571,
            1297403050, 3673637356, 3623636965, 3235995134, 3454686199,
            4007360968, 3822090177, 4107101658, 4190530515, 2997825956,
            3215212461, 2830708150, 2779915199, 2256734592, 2340947849,
            2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431,
            1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845,
            2013908262, 1963115311, 1446242576, 1530455833, 1277555970,
            1093597963, 1636604631, 1820824798, 2073724613, 1989249228,
            1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910,
            331544205, 516552836, 1039717051, 821288114, 669961897, 719700128,
            2973530695, 3157750862, 2871682645, 2787207260, 2232435299,
            2283490410, 2667994737, 2450346104, 3647212047, 3564045318,
            3279033885, 3464042516, 3980931627, 3762502690, 4150144569,
            4199882800, 3070356634, 3121275539, 2904027272, 2686254721,
            2200818878, 2384911031, 2570832044, 2486224549, 3747192018,
            3528626907, 3310321856, 3359936201, 3950355702, 3867060991,
            4049844452, 4234721005, 1739656202, 1790575107, 2108100632,
            1890328081, 1402811438, 1586903591, 1233856572, 1149249077,
            266959938, 48394827, 369057872, 418672217, 1002783846, 919489135,
            567498868, 752375421, 209336225, 24197544, 376187827, 459744698,
            945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568,
            2117360635, 1933530610, 1343127501, 1560637892, 1243112415,
            1192455638, 3704280881, 3519142200, 3336358691, 3419915562,
            3907448597, 3857572124, 4075877127, 4294704398, 3029510009,
            3113855344, 2927934315, 2744104290, 2159976285, 2377486676,
            2594734927, 2544078150,
          ],
          S = [
            0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204,
            1059270954, 1214797936, 1097159550, 1517440620, 1400849762,
            1817998408, 1699839814, 2118541908, 2001430874, 2429595872,
            2581445614, 2194319100, 2345119218, 3034881240, 3186202582,
            2801699524, 2951971274, 3635996816, 3518358430, 3399679628,
            3283088770, 4237083816, 4118925222, 4002861748, 3885750714,
            1002142683, 850817237, 698445255, 548169417, 529487843, 377642221,
            227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577,
            1474760595, 1592394909, 1174215055, 1290801793, 2875968315,
            2724642869, 3111247143, 2960971305, 2405426947, 2253581325,
            2638606623, 2487810577, 3808662347, 3926825029, 4044981591,
            4162096729, 3342319475, 3459953789, 3576539503, 3693126241,
            1986918061, 2137062819, 1685577905, 1836772287, 1381620373,
            1532285339, 1078185097, 1229899655, 1040559837, 923313619,
            740276417, 621982671, 439452389, 322734571, 137073913, 19308535,
            3871163981, 4021308739, 4104605777, 4255800159, 3263785589,
            3414450555, 3499326569, 3651041127, 2933202493, 2815956275,
            3167684641, 3049390895, 2330014213, 2213296395, 2566595609,
            2448830231, 1305906550, 1155237496, 1607244650, 1455525988,
            1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376,
            396673818, 514443284, 562755902, 679998e3, 865136418, 983426092,
            3708173718, 3557504664, 3474729866, 3323011204, 4180808110,
            4030667424, 3945269170, 3794078908, 2507040230, 2623762152,
            2272556026, 2390325492, 2975484382, 3092726480, 2738905026,
            2857194700, 3973773121, 3856137295, 4274053469, 4157467219,
            3371096953, 3252932727, 3673476453, 3556361835, 2763173681,
            2915017791, 3064510765, 3215307299, 2156299017, 2307622919,
            2459735317, 2610011675, 2081048481, 1963412655, 1846563261,
            1729977011, 1480485785, 1362321559, 1243905413, 1126790795,
            878845905, 1030690015, 645401037, 796197571, 274084841, 425408743,
            38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568,
            4082475170, 4200115116, 3780097726, 3896688048, 2668221674,
            2516901860, 2366882550, 2216610296, 3141400786, 2989552604,
            2837966542, 2687165888, 1202797690, 1320957812, 1437280870,
            1554391400, 1669664834, 1787304780, 1906247262, 2022837584,
            265905162, 114585348, 499347990, 349075736, 736970802, 585122620,
            972512814, 821712160, 2595684844, 2478443234, 2293045232,
            2174754046, 3196267988, 3079546586, 2895723464, 2777952454,
            3537852828, 3687994002, 3234156416, 3385345166, 4142626212,
            4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952,
            292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068,
            1258480242, 1343618912, 1494807662, 1715193156, 1865862730,
            1948373848, 2100090966, 2701949495, 2818666809, 3004591147,
            3122358053, 2235061775, 2352307457, 2535604243, 2653899549,
            3915653703, 3764988233, 4219352155, 4067639125, 3444575871,
            3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211,
            718002117, 367585007, 484830689, 133361907, 251657213, 2041877159,
            1891211689, 1806599355, 1654886325, 1568718495, 1418573201,
            1335535747, 1184342925,
          ];
        function k(e) {
          for (var t = [], r = 0; r < e.length; r += 4)
            t.push(
              (e[r] << 24) | (e[r + 1] << 16) | (e[r + 2] << 8) | e[r + 3]
            );
          return t;
        }
        function R(e) {
          if (!(this instanceof R))
            throw Error("AES must be instanitated with `new`");
          Object.defineProperty(this, "key", { value: n(e, !0) }),
            this._prepare();
        }
        function A(e) {
          if (!(this instanceof A))
            throw Error("AES must be instanitated with `new`");
          (this.description = "Electronic Code Block"),
            (this.name = "ecb"),
            (this._aes = new R(e));
        }
        function M(e, t) {
          if (!(this instanceof M))
            throw Error("AES must be instanitated with `new`");
          if (
            ((this.description = "Cipher Block Chaining"),
            (this.name = "cbc"),
            t)
          ) {
            if (16 != t.length)
              throw new Error(
                "invalid initialation vector size (must be 16 bytes)"
              );
          } else t = i(16);
          (this._lastCipherblock = n(t, !0)), (this._aes = new R(e));
        }
        function T(e, t, r) {
          if (!(this instanceof T))
            throw Error("AES must be instanitated with `new`");
          if (
            ((this.description = "Cipher Feedback"), (this.name = "cfb"), t)
          ) {
            if (16 != t.length)
              throw new Error(
                "invalid initialation vector size (must be 16 size)"
              );
          } else t = i(16);
          (this.segmentSize = r = r || 1),
            (this._shiftRegister = n(t, !0)),
            (this._aes = new R(e));
        }
        function C(e, t) {
          if (!(this instanceof C))
            throw Error("AES must be instanitated with `new`");
          if (
            ((this.description = "Output Feedback"), (this.name = "ofb"), t)
          ) {
            if (16 != t.length)
              throw new Error(
                "invalid initialation vector size (must be 16 bytes)"
              );
          } else t = i(16);
          (this._lastPrecipher = n(t, !0)),
            (this._lastPrecipherIndex = 16),
            (this._aes = new R(e));
        }
        function O(e) {
          if (!(this instanceof O))
            throw Error("Counter must be instanitated with `new`");
          "number" == typeof (e = 0 === e || e ? e : 1)
            ? ((this._counter = i(16)), this.setValue(e))
            : this.setBytes(e);
        }
        function P(e, t) {
          if (!(this instanceof P))
            throw Error("AES must be instanitated with `new`");
          (this.description = "Counter"),
            (this.name = "ctr"),
            t instanceof O || (t = new O(t)),
            (this._counter = t),
            (this._remainingCounter = null),
            (this._remainingCounterIndex = 16),
            (this._aes = new R(e));
        }
        (R.prototype._prepare = function () {
          var e = c[this.key.length];
          if (null == e)
            throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
          (this._Ke = []), (this._Kd = []);
          for (var t = 0; t <= e; t++)
            this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
          var r,
            n = 4 * (e + 1),
            i = this.key.length / 4,
            o = k(this.key);
          for (t = 0; t < i; t++)
            (this._Ke[(r = t >> 2)][t % 4] = o[t]),
              (this._Kd[e - r][t % 4] = o[t]);
          for (var a, s = 0, u = i; u < n; ) {
            if (
              ((a = o[i - 1]),
              (o[0] ^=
                (l[(a >> 16) & 255] << 24) ^
                (l[(a >> 8) & 255] << 16) ^
                (l[255 & a] << 8) ^
                l[(a >> 24) & 255] ^
                (f[s] << 24)),
              (s += 1),
              8 != i)
            )
              for (t = 1; t < i; t++) o[t] ^= o[t - 1];
            else {
              for (t = 1; t < i / 2; t++) o[t] ^= o[t - 1];
              for (
                a = o[i / 2 - 1],
                  o[i / 2] ^=
                    l[255 & a] ^
                    (l[(a >> 8) & 255] << 8) ^
                    (l[(a >> 16) & 255] << 16) ^
                    (l[(a >> 24) & 255] << 24),
                  t = i / 2 + 1;
                t < i;
                t++
              )
                o[t] ^= o[t - 1];
            }
            for (t = 0; t < i && u < n; )
              (this._Ke[(h = u >> 2)][(d = u % 4)] = o[t]),
                (this._Kd[e - h][d] = o[t++]),
                u++;
          }
          for (var h = 1; h < e; h++)
            for (var d = 0; d < 4; d++)
              (a = this._Kd[h][d]),
                (this._Kd[h][d] =
                  b[(a >> 24) & 255] ^
                  E[(a >> 16) & 255] ^
                  x[(a >> 8) & 255] ^
                  S[255 & a]);
        }),
          (R.prototype.encrypt = function (e) {
            if (16 != e.length)
              throw new Error("invalid plaintext size (must be 16 bytes)");
            for (
              var t = this._Ke.length - 1, r = [0, 0, 0, 0], n = k(e), o = 0;
              o < 4;
              o++
            )
              n[o] ^= this._Ke[0][o];
            for (var a = 1; a < t; a++) {
              for (o = 0; o < 4; o++)
                r[o] =
                  d[(n[o] >> 24) & 255] ^
                  p[(n[(o + 1) % 4] >> 16) & 255] ^
                  v[(n[(o + 2) % 4] >> 8) & 255] ^
                  g[255 & n[(o + 3) % 4]] ^
                  this._Ke[a][o];
              n = r.slice();
            }
            var s,
              u = i(16);
            for (o = 0; o < 4; o++)
              (s = this._Ke[t][o]),
                (u[4 * o] = 255 & (l[(n[o] >> 24) & 255] ^ (s >> 24))),
                (u[4 * o + 1] =
                  255 & (l[(n[(o + 1) % 4] >> 16) & 255] ^ (s >> 16))),
                (u[4 * o + 2] =
                  255 & (l[(n[(o + 2) % 4] >> 8) & 255] ^ (s >> 8))),
                (u[4 * o + 3] = 255 & (l[255 & n[(o + 3) % 4]] ^ s));
            return u;
          }),
          (R.prototype.decrypt = function (e) {
            if (16 != e.length)
              throw new Error("invalid ciphertext size (must be 16 bytes)");
            for (
              var t = this._Kd.length - 1, r = [0, 0, 0, 0], n = k(e), o = 0;
              o < 4;
              o++
            )
              n[o] ^= this._Kd[0][o];
            for (var a = 1; a < t; a++) {
              for (o = 0; o < 4; o++)
                r[o] =
                  _[(n[o] >> 24) & 255] ^
                  m[(n[(o + 3) % 4] >> 16) & 255] ^
                  y[(n[(o + 2) % 4] >> 8) & 255] ^
                  w[255 & n[(o + 1) % 4]] ^
                  this._Kd[a][o];
              n = r.slice();
            }
            var s,
              u = i(16);
            for (o = 0; o < 4; o++)
              (s = this._Kd[t][o]),
                (u[4 * o] = 255 & (h[(n[o] >> 24) & 255] ^ (s >> 24))),
                (u[4 * o + 1] =
                  255 & (h[(n[(o + 3) % 4] >> 16) & 255] ^ (s >> 16))),
                (u[4 * o + 2] =
                  255 & (h[(n[(o + 2) % 4] >> 8) & 255] ^ (s >> 8))),
                (u[4 * o + 3] = 255 & (h[255 & n[(o + 1) % 4]] ^ s));
            return u;
          }),
          (A.prototype.encrypt = function (e) {
            if ((e = n(e)).length % 16 != 0)
              throw new Error(
                "invalid plaintext size (must be multiple of 16 bytes)"
              );
            for (var t = i(e.length), r = i(16), a = 0; a < e.length; a += 16)
              o(e, r, 0, a, a + 16), o((r = this._aes.encrypt(r)), t, a);
            return t;
          }),
          (A.prototype.decrypt = function (e) {
            if ((e = n(e)).length % 16 != 0)
              throw new Error(
                "invalid ciphertext size (must be multiple of 16 bytes)"
              );
            for (var t = i(e.length), r = i(16), a = 0; a < e.length; a += 16)
              o(e, r, 0, a, a + 16), o((r = this._aes.decrypt(r)), t, a);
            return t;
          }),
          (M.prototype.encrypt = function (e) {
            if ((e = n(e)).length % 16 != 0)
              throw new Error(
                "invalid plaintext size (must be multiple of 16 bytes)"
              );
            for (var t = i(e.length), r = i(16), a = 0; a < e.length; a += 16) {
              o(e, r, 0, a, a + 16);
              for (var s = 0; s < 16; s++) r[s] ^= this._lastCipherblock[s];
              (this._lastCipherblock = this._aes.encrypt(r)),
                o(this._lastCipherblock, t, a);
            }
            return t;
          }),
          (M.prototype.decrypt = function (e) {
            if ((e = n(e)).length % 16 != 0)
              throw new Error(
                "invalid ciphertext size (must be multiple of 16 bytes)"
              );
            for (var t = i(e.length), r = i(16), a = 0; a < e.length; a += 16) {
              o(e, r, 0, a, a + 16);
              r = this._aes.decrypt(r);
              for (var s = 0; s < 16; s++)
                t[a + s] = r[s] ^ this._lastCipherblock[s];
              o(e, this._lastCipherblock, 0, a, a + 16);
            }
            return t;
          }),
          (T.prototype.encrypt = function (e) {
            if (e.length % this.segmentSize != 0)
              throw new Error(
                "invalid plaintext size (must be segmentSize bytes)"
              );
            for (var t = n(e, !0), r = 0; r < t.length; r += this.segmentSize) {
              for (
                var i = this._aes.encrypt(this._shiftRegister), a = 0;
                a < this.segmentSize;
                a++
              )
                t[r + a] ^= i[a];
              o(this._shiftRegister, this._shiftRegister, 0, this.segmentSize),
                o(
                  t,
                  this._shiftRegister,
                  16 - this.segmentSize,
                  r,
                  r + this.segmentSize
                );
            }
            return t;
          }),
          (T.prototype.decrypt = function (e) {
            if (e.length % this.segmentSize != 0)
              throw new Error(
                "invalid ciphertext size (must be segmentSize bytes)"
              );
            for (var t = n(e, !0), r = 0; r < t.length; r += this.segmentSize) {
              for (
                var i = this._aes.encrypt(this._shiftRegister), a = 0;
                a < this.segmentSize;
                a++
              )
                t[r + a] ^= i[a];
              o(this._shiftRegister, this._shiftRegister, 0, this.segmentSize),
                o(
                  e,
                  this._shiftRegister,
                  16 - this.segmentSize,
                  r,
                  r + this.segmentSize
                );
            }
            return t;
          }),
          (C.prototype.decrypt = C.prototype.encrypt =
            function (e) {
              for (var t = n(e, !0), r = 0; r < t.length; r++)
                16 === this._lastPrecipherIndex &&
                  ((this._lastPrecipher = this._aes.encrypt(
                    this._lastPrecipher
                  )),
                  (this._lastPrecipherIndex = 0)),
                  (t[r] ^= this._lastPrecipher[this._lastPrecipherIndex++]);
              return t;
            }),
          (O.prototype.setValue = function (e) {
            if ("number" != typeof e || parseInt(e) != e)
              throw new Error("invalid counter value (must be an integer)");
            if (e > Number.MAX_SAFE_INTEGER)
              throw new Error("integer value out of safe range");
            for (var t = 15; 0 <= t; --t)
              (this._counter[t] = e % 256), (e = parseInt(e / 256));
          }),
          (O.prototype.setBytes = function (e) {
            if (16 != (e = n(e, !0)).length)
              throw new Error("invalid counter bytes size (must be 16 bytes)");
            this._counter = e;
          }),
          (O.prototype.increment = function () {
            for (var e = 15; 0 <= e; e--) {
              if (255 !== this._counter[e]) {
                this._counter[e]++;
                break;
              }
              this._counter[e] = 0;
            }
          }),
          (P.prototype.decrypt = P.prototype.encrypt =
            function (e) {
              for (var t = n(e, !0), r = 0; r < t.length; r++)
                16 === this._remainingCounterIndex &&
                  ((this._remainingCounter = this._aes.encrypt(
                    this._counter._counter
                  )),
                  (this._remainingCounterIndex = 0),
                  this._counter.increment()),
                  (t[r] ^=
                    this._remainingCounter[this._remainingCounterIndex++]);
              return t;
            }),
          (s = {
            AES: R,
            Counter: O,
            ModeOfOperation: { ecb: A, cbc: M, cfb: T, ofb: C, ctr: P },
            utils: { hex: u, utf8: s },
            padding: {
              pkcs7: {
                pad: function (e) {
                  var t = 16 - ((e = n(e, !0)).length % 16),
                    r = i(e.length + t);
                  o(e, r);
                  for (var a = e.length; a < r.length; a++) r[a] = t;
                  return r;
                },
                strip: function (e) {
                  if ((e = n(e, !0)).length < 16)
                    throw new Error("PKCS#7 invalid length");
                  var t = e[e.length - 1];
                  if (16 < t)
                    throw new Error("PKCS#7 padding byte out of range");
                  for (var r = e.length - t, a = 0; a < t; a++)
                    if (e[r + a] !== t)
                      throw new Error("PKCS#7 invalid padding byte");
                  var s = i(r);
                  return o(e, s, 0, 0, r), s;
                },
              },
            },
            _arrayTest: { coerceArray: n, createArray: i, copyArray: o },
          }),
          (e.exports = s);
      })();
    },
    1432: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.nodeRipemd160 =
          t.nodeSha512 =
          t.nodeSha256 =
          t.nodeHmacSha512Sign =
          t.nodeHmacSha256Sign =
          t.nodeAesDecrypt =
          t.nodeAesEncrypt =
            void 0);
      var i = n(r(1154)),
        o = r(1122),
        a = r(1179);
      (t.nodeAesEncrypt = function (e, t, r) {
        return (
          (e = i.default.createCipheriv(a.AES_NODE_ALGO, t, e)),
          o.bufferToArray(o.concatBuffers(e.update(r), e.final()))
        );
      }),
        (t.nodeAesDecrypt = function (e, t, r) {
          return (
            (e = i.default.createDecipheriv(a.AES_NODE_ALGO, t, e)),
            o.bufferToArray(o.concatBuffers(e.update(r), e.final()))
          );
        }),
        (t.nodeHmacSha256Sign = function (e, t) {
          return (
            (t = i.default
              .createHmac(a.HMAC_NODE_ALGO, new Uint8Array(e))
              .update(t)
              .digest()),
            o.bufferToArray(t)
          );
        }),
        (t.nodeHmacSha512Sign = function (e, t) {
          return (
            (t = i.default
              .createHmac(a.SHA512_NODE_ALGO, new Uint8Array(e))
              .update(t)
              .digest()),
            o.bufferToArray(t)
          );
        }),
        (t.nodeSha256 = function (e) {
          return (
            (e = i.default.createHash(a.SHA256_NODE_ALGO).update(e).digest()),
            o.bufferToArray(e)
          );
        }),
        (t.nodeSha512 = function (e) {
          return (
            (e = i.default.createHash(a.SHA512_NODE_ALGO).update(e).digest()),
            o.bufferToArray(e)
          );
        }),
        (t.nodeRipemd160 = function (e) {
          return (
            (e = i.default
              .createHash(a.RIPEMD160_NODE_ALGO)
              .update(e)
              .digest()),
            o.bufferToArray(e)
          );
        });
    },
    1507: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.pkcs7 = void 0);
      var n = [
        [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
        [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
        [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14],
        [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13],
        [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
        [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11],
        [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
        [9, 9, 9, 9, 9, 9, 9, 9, 9],
        [8, 8, 8, 8, 8, 8, 8, 8],
        [7, 7, 7, 7, 7, 7, 7],
        [6, 6, 6, 6, 6, 6],
        [5, 5, 5, 5, 5],
        [4, 4, 4, 4],
        [3, 3, 3],
        [2, 2],
        [1],
      ];
      t.pkcs7 = {
        pad: function (e) {
          var t = n[e.byteLength % 16 || 0],
            r = new Uint8Array(e.byteLength + t.length);
          return r.set(e), r.set(t, e.byteLength), r;
        },
        unpad: function (e) {
          return e.subarray(0, e.byteLength - e[e.byteLength - 1]);
        },
      };
    },
    1508: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    1509: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isConstantTime = t.isNode = t.isBrowser = t.assert = void 0);
        var n = r(1278);
        (t.assert = function (e, t) {
          if (!e) throw new Error(t || "Assertion failed");
        }),
          (t.isBrowser = function () {
            return !!n.getBrowerCrypto() && !!n.getSubtleCrypto();
          }),
          (t.isNode = function () {
            return (
              void 0 !== e &&
              void 0 !== e.versions &&
              void 0 !== e.versions.node
            );
          }),
          (t.isConstantTime = function (e, t) {
            if (e.length !== t.length) return !1;
            for (var r = 0, n = 0; n < e.length; n++) r |= e[n] ^ t[n];
            return 0 === r;
          });
      }.call(this, r(162)));
    },
    1510: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.aesCbcDecryptSync = t.aesCbcEncryptSync = void 0);
      var n = r(1123);
      (t.aesCbcEncryptSync = function (e, t, r) {
        return n.isNode()
          ? n.nodeAesEncrypt(e, t, r)
          : n.fallbackAesEncrypt(e, t, r);
      }),
        (t.aesCbcDecryptSync = function (e, t, r) {
          return n.isNode()
            ? n.nodeAesDecrypt(e, t, r)
            : n.fallbackAesDecrypt(e, t, r);
        });
    },
    1511: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  });
              }
            : function (e, t, r, n) {
                e[(n = void 0 === n ? r : n)] = t[r];
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e)
              "default" === r || t.hasOwnProperty(r) || n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        i(r(1512), t),
        i(r(1513), t);
    },
    1512: function (e, t, r) {
      "use strict";
      var n = r(7),
        i =
          (this && this.__awaiter) ||
          function (e, t, r, n) {
            return new (r = r || Promise)(function (i, o) {
              function a(e) {
                try {
                  u(n.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function s(e) {
                try {
                  u(n.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value) instanceof r
                      ? t
                      : new r(function (e) {
                          e(t);
                        })
                    ).then(a, s);
              }
              u((n = n.apply(e, t || [])).next());
            });
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hmacSha512Verify =
          t.hmacSha512Sign =
          t.hmacSha256Verify =
          t.hmacSha256Sign =
            void 0);
      var o = r(1123);
      (t.hmacSha256Sign = function (e, t) {
        return i(
          this,
          void 0,
          void 0,
          n.mark(function r() {
            var i;
            return n.wrap(function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    if (o.isBrowser())
                      return (r.next = 3), o.browserHmacSha256Sign(e, t);
                    r.next = 6;
                    break;
                  case 3:
                    (i = r.sent), (r.next = 7);
                    break;
                  case 6:
                    i = o.isNode()
                      ? o.nodeHmacSha256Sign(e, t)
                      : o.fallbackHmacSha256Sign(e, t);
                  case 7:
                    return r.abrupt("return", i);
                  case 8:
                  case "end":
                    return r.stop();
                }
            }, r);
          })
        );
      }),
        (t.hmacSha256Verify = function (e, t, r) {
          return i(
            this,
            void 0,
            void 0,
            n.mark(function i() {
              var a, s;
              return n.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      if (o.isBrowser())
                        return (n.next = 3), o.browserHmacSha256Sign(e, t);
                      n.next = 7;
                      break;
                    case 3:
                      (a = n.sent), (a = o.isConstantTime(a, r)), (n.next = 8);
                      break;
                    case 7:
                      a = o.isNode()
                        ? ((s = o.nodeHmacSha256Sign(e, t)),
                          o.isConstantTime(s, r))
                        : ((s = o.fallbackHmacSha256Sign(e, t)),
                          o.isConstantTime(s, r));
                    case 8:
                      return n.abrupt("return", a);
                    case 9:
                    case "end":
                      return n.stop();
                  }
              }, i);
            })
          );
        }),
        (t.hmacSha512Sign = function (e, t) {
          return i(
            this,
            void 0,
            void 0,
            n.mark(function r() {
              var i;
              return n.wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      if (o.isBrowser())
                        return (r.next = 3), o.browserHmacSha512Sign(e, t);
                      r.next = 6;
                      break;
                    case 3:
                      (i = r.sent), (r.next = 7);
                      break;
                    case 6:
                      i = o.isNode()
                        ? o.nodeHmacSha512Sign(e, t)
                        : o.fallbackHmacSha512Sign(e, t);
                    case 7:
                      return r.abrupt("return", i);
                    case 8:
                    case "end":
                      return r.stop();
                  }
              }, r);
            })
          );
        }),
        (t.hmacSha512Verify = function (e, t, r) {
          return i(
            this,
            void 0,
            void 0,
            n.mark(function i() {
              var a, s;
              return n.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (s = o.isNode()
                          ? ((a = o.nodeHmacSha512Sign(e, t)),
                            o.isConstantTime(a, r))
                          : ((s = o.fallbackHmacSha512Sign(e, t)),
                            o.isConstantTime(s, r))),
                        n.abrupt("return", s)
                      );
                    case 2:
                    case "end":
                      return n.stop();
                  }
              }, i);
            })
          );
        });
    },
    1513: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hmacSha512VerifySync =
          t.hmacSha512SignSync =
          t.hmacSha256VerifySync =
          t.hmacSha256SignSync =
            void 0);
      var n = r(1123);
      (t.hmacSha256SignSync = function (e, t) {
        return n.isNode()
          ? n.nodeHmacSha256Sign(e, t)
          : n.fallbackHmacSha256Sign(e, t);
      }),
        (t.hmacSha256VerifySync = function (e, t, r) {
          var i;
          return n.isNode()
            ? ((i = n.nodeHmacSha256Sign(e, t)), n.isConstantTime(i, r))
            : ((t = n.fallbackHmacSha256Sign(e, t)), n.isConstantTime(t, r));
        }),
        (t.hmacSha512SignSync = function (e, t) {
          return n.isNode()
            ? n.nodeHmacSha512Sign(e, t)
            : n.fallbackHmacSha512Sign(e, t);
        }),
        (t.hmacSha512VerifySync = function (e, t, r) {
          var i;
          return n.isNode()
            ? ((i = n.nodeHmacSha512Sign(e, t)), n.isConstantTime(i, r))
            : ((t = n.fallbackHmacSha512Sign(e, t)), n.isConstantTime(t, r));
        });
    },
    1514: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  });
              }
            : function (e, t, r, n) {
                e[(n = void 0 === n ? r : n)] = t[r];
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return i(t, e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.randomBytes = void 0);
      var a = o(r(1515));
      t.randomBytes = function (e) {
        return a.randomBytes(e);
      };
    },
    1515: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.randomBytes = void 0);
      var i = n(r(1154)),
        o = r(1122);
      t.randomBytes = function (e) {
        return (e = i.default.randomBytes(e)), o.bufferToArray(e);
      };
    },
    1516: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  });
              }
            : function (e, t, r, n) {
                e[(n = void 0 === n ? r : n)] = t[r];
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e)
              "default" === r || t.hasOwnProperty(r) || n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        i(r(1517), t),
        i(r(1518), t);
    },
    1517: function (e, t, r) {
      "use strict";
      var n = r(7),
        i =
          (this && this.__awaiter) ||
          function (e, t, r, n) {
            return new (r = r || Promise)(function (i, o) {
              function a(e) {
                try {
                  u(n.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function s(e) {
                try {
                  u(n.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function u(e) {
                var t;
                e.done
                  ? i(e.value)
                  : ((t = e.value) instanceof r
                      ? t
                      : new r(function (e) {
                          e(t);
                        })
                    ).then(a, s);
              }
              u((n = n.apply(e, t || [])).next());
            });
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ripemd160 = t.sha512 = t.sha256 = void 0);
      var o = r(1123);
      (t.sha256 = function (e) {
        return i(
          this,
          void 0,
          void 0,
          n.mark(function t() {
            var r;
            return n.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (((r = o.EMPTY_UINT_ARRAY), o.isBrowser()))
                      return (t.next = 4), o.browserSha256(e);
                    t.next = 7;
                    break;
                  case 4:
                    (r = t.sent), (t.next = 8);
                    break;
                  case 7:
                    r = o.isNode() ? o.nodeSha256(e) : o.fallbackSha256(e);
                  case 8:
                    return t.abrupt("return", r);
                  case 9:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
      }),
        (t.sha512 = function (e) {
          return i(
            this,
            void 0,
            void 0,
            n.mark(function t() {
              var r;
              return n.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((r = o.EMPTY_UINT_ARRAY), o.isBrowser()))
                        return (t.next = 4), o.browserSha512(e);
                      t.next = 7;
                      break;
                    case 4:
                      (r = t.sent), (t.next = 8);
                      break;
                    case 7:
                      r = o.isNode() ? o.nodeSha512(e) : o.fallbackSha512(e);
                    case 8:
                      return t.abrupt("return", r);
                    case 9:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
        }),
        (t.ripemd160 = function (e) {
          return i(
            this,
            void 0,
            void 0,
            n.mark(function t() {
              var r;
              return n.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        o.EMPTY_UINT_ARRAY,
                        (r = o.isNode()
                          ? o.nodeRipemd160(e)
                          : o.fallbackRipemd160(e)),
                        t.abrupt("return", r)
                      );
                    case 3:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
        });
    },
    1518: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ripemd160Sync = t.sha512Sync = t.sha256Sync = void 0);
      var n = r(1123);
      (t.sha256Sync = function (e) {
        return (
          n.EMPTY_UINT_ARRAY, n.isNode() ? n.nodeSha256(e) : n.fallbackSha256(e)
        );
      }),
        (t.sha512Sync = function (e) {
          return (
            n.EMPTY_UINT_ARRAY,
            n.isNode() ? n.nodeSha512(e) : n.fallbackSha512(e)
          );
        }),
        (t.ripemd160Sync = function (e) {
          return (
            n.EMPTY_UINT_ARRAY,
            n.isNode() ? n.nodeRipemd160(e) : n.fallbackRipemd160(e)
          );
        });
    },
    1519: function (e, t, r) {
      (function (t) {
        function n(e) {
          return e && "object" == typeof e && "default" in e ? e.default : e;
        }
        var i = r(1267),
          o = n(r(1520)),
          a = n(r(194)),
          s = r(1679),
          u = "walletconnect-wrapper",
          c = "walletconnect-style-sheet",
          f = "walletconnect-qrcode-modal",
          l = "walletconnect-qrcode-text";
        function h(e) {
          return s.createElement(
            "div",
            { className: "walletconnect-modal__header" },
            s.createElement("img", {
              src: "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E",
              className: "walletconnect-modal__headerLogo",
            }),
            s.createElement("p", null, "WalletConnect"),
            s.createElement(
              "div",
              {
                className: "walletconnect-modal__close__wrapper",
                onClick: e.onClose,
              },
              s.createElement(
                "div",
                {
                  id: "walletconnect-qrcode-close",
                  className: "walletconnect-modal__close__icon",
                },
                s.createElement("div", {
                  className: "walletconnect-modal__close__line1",
                }),
                s.createElement("div", {
                  className: "walletconnect-modal__close__line2",
                })
              )
            )
          );
        }
        function d(e) {
          return s.createElement(
            "a",
            {
              className: "walletconnect-connect__button",
              href: e.href,
              id: "walletconnect-connect-button-" + e.name,
              onClick: e.onClick,
              rel: "noopener noreferrer",
              style: { backgroundColor: e.color },
              target: "_blank",
            },
            e.name
          );
        }
        function p(e) {
          var t = e.color,
            r = e.href,
            n = e.name,
            i = e.logo;
          e = e.onClick;
          return s.createElement(
            "a",
            {
              className: "walletconnect-modal__base__row",
              href: r,
              onClick: e,
              rel: "noopener noreferrer",
              target: "_blank",
            },
            s.createElement(
              "h3",
              { className: "walletconnect-modal__base__row__h3" },
              n
            ),
            s.createElement(
              "div",
              { className: "walletconnect-modal__base__row__right" },
              s.createElement("div", {
                className: "walletconnect-modal__base__row__right__app-icon",
                style: {
                  background: "url('" + i + "') " + t,
                  backgroundSize: "100%",
                },
              }),
              s.createElement("img", {
                src: "data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E",
                className: "walletconnect-modal__base__row__right__caret",
              })
            )
          );
        }
        function v(e) {
          var t = e.color,
            r = e.href,
            n = e.name,
            i = e.logo;
          e = e.onClick;
          return s.createElement(
            "a",
            {
              className: "walletconnect-connect__button__icon_anchor",
              href: r,
              onClick: e,
              rel: "noopener noreferrer",
              target: "_blank",
            },
            s.createElement("div", {
              className: "walletconnect-connect__button__icon",
              style: {
                background: "url('" + i + "') " + t,
                backgroundSize: "100%",
              },
            }),
            s.createElement(
              "div",
              {
                style: { fontSize: (8 < n.length ? 2.5 : 2.7) + "vw" },
                className: "walletconnect-connect__button__text",
              },
              n
            )
          );
        }
        function g(e) {
          var t = i.isIOS(),
            r =
              e.qrcodeModalOptions && e.qrcodeModalOptions.mobileLinks
                ? e.qrcodeModalOptions.mobileLinks
                : void 0,
            n = (g = s.useState(1))[0],
            o = g[1],
            a = (c = s.useState(!1))[0],
            u = c[1],
            c = (g = s.useState([]))[0],
            f = g[1];
          s.useEffect(function () {
            !(function () {
              try {
                if (!t) return Promise.resolve();
                var e = (function (e, t) {
                  try {
                    var r = e();
                  } catch (e) {
                    return t(e);
                  }
                  return r && r.then ? r.then(void 0, t) : r;
                })(
                  function () {
                    var e = i.getWalletRegistryUrl();
                    return Promise.resolve(
                      fetch(e).then(function (e) {
                        return e.json();
                      })
                    ).then(function (e) {
                      (e = i.getMobileLinkRegistry(
                        i.formatMobileRegistry(e),
                        r
                      )),
                        f(e);
                    });
                  },
                  function (e) {
                    u(!0);
                  }
                );
                Promise.resolve(e && e.then ? e.then(function () {}) : void 0);
              } catch (e) {
                return Promise.reject(e);
              }
            })();
          }, []);
          var h = 5 < c.length,
            g = Math.ceil(c.length / 12),
            _ = [12 * (n - 1) + 1, 12 * n];
          c = c.length
            ? c.filter(function (e, t) {
                return _[0] <= t + 1 && t + 1 <= _[1];
              })
            : [];
          return s.createElement(
            "div",
            null,
            s.createElement(
              "p",
              { id: l, className: "walletconnect-qrcode__text" },
              t ? e.text.choose_preferred_wallet : e.text.connect_mobile_wallet
            ),
            s.createElement(
              "div",
              {
                className:
                  "walletconnect-connect__buttons__wrapper" +
                  (t ? (h ? "__wrap" : "") : "__android"),
              },
              t
                ? c.length
                  ? c.map(function (t) {
                      var r = t.color,
                        n = t.name,
                        o = t.shortName,
                        a = t.logo,
                        u = i.formatIOSMobile(e.uri, t);
                      t = s.useCallback(function () {
                        i.saveMobileLinkInfo({ name: n, href: u });
                      }, []);
                      return h
                        ? s.createElement(v, {
                            color: r,
                            href: u,
                            name: o,
                            logo: a,
                            onClick: t,
                          })
                        : s.createElement(p, {
                            color: r,
                            href: u,
                            name: n,
                            logo: a,
                            onClick: t,
                          });
                    })
                  : s.createElement(
                      s.Fragment,
                      null,
                      s.createElement(
                        "p",
                        null,
                        a ? "Something went wrong" : "Loading..."
                      )
                    )
                : s.createElement(d, {
                    name: e.text.connect,
                    color: "rgb(64, 153, 255)",
                    href: e.uri,
                    onClick: s.useCallback(function () {
                      i.saveMobileLinkInfo({ name: "Unknown", href: e.uri });
                    }, []),
                  })
            ),
            !!(t && 1 < g) &&
              s.createElement(
                "div",
                { className: "walletconnect-modal__footer" },
                Array(g)
                  .fill(0)
                  .map(function (e, t) {
                    var r = t + 1;
                    return s.createElement(
                      "a",
                      {
                        style: {
                          margin: "auto 10px",
                          fontWeight: n === r ? "bold" : "normal",
                        },
                        onClick: function () {
                          return o(r);
                        },
                      },
                      r
                    );
                  })
              )
          );
        }
        function _(e) {
          var t = !!e.message.trim();
          return s.createElement(
            "div",
            {
              className:
                "walletconnect-qrcode__notification" +
                (t ? " notification__show" : ""),
            },
            e.message
          );
        }
        function m(e) {
          var t = (i = s.useState(""))[0],
            r = i[1],
            n = s.useState(""),
            i = n[0],
            u = n[1];
          return (
            s.useEffect(function () {
              try {
                return Promise.resolve(
                  (function (e) {
                    try {
                      var t = "";
                      return Promise.resolve(
                        o.toString(e, { margin: 0, type: "svg" })
                      ).then(function (e) {
                        return (t =
                          "string" == typeof e
                            ? e.replace(
                                "<svg",
                                '<svg class="walletconnect-qrcode__image"'
                              )
                            : t);
                      });
                    } catch (e) {
                      return Promise.reject(e);
                    }
                  })(e.uri)
                ).then(function (e) {
                  u(e);
                });
              } catch (i) {
                Promise.reject(i);
              }
            }, []),
            s.createElement(
              "div",
              null,
              s.createElement(
                "p",
                { id: l, className: "walletconnect-qrcode__text" },
                e.text.scan_qrcode_with_wallet
              ),
              s.createElement("div", {
                dangerouslySetInnerHTML: { __html: i },
              }),
              s.createElement(
                "div",
                { className: "walletconnect-modal__footer" },
                s.createElement(
                  "a",
                  {
                    onClick: function () {
                      var t = a(e.uri);
                      r(t ? e.text.copied_to_clipboard : "Error"),
                        setInterval(function () {
                          return r("");
                        }, 1200);
                    },
                  },
                  e.text.copy_to_clipboard
                )
              ),
              s.createElement(_, { message: t })
            )
          );
        }
        function y(e) {
          var t = i.isMobile(),
            r = (o = s.useState(!t))[0],
            n = o[1],
            o = {
              text: e.text,
              uri: e.uri,
              qrcodeModalOptions: e.qrcodeModalOptions,
            };
          return s.createElement(
            "div",
            { id: f, className: "walletconnect-qrcode__base animated fadeIn" },
            s.createElement(
              "div",
              { className: "walletconnect-modal__base" },
              s.createElement(h, { onClose: e.onClose }),
              t &&
                s.createElement(
                  "div",
                  {
                    className:
                      "walletconnect-modal__mobile__toggle" +
                      (r ? " right__selected" : ""),
                  },
                  s.createElement("div", {
                    className: "walletconnect-modal__mobile__toggle_selector",
                  }),
                  s.createElement(
                    "a",
                    {
                      onClick: function () {
                        return n(!1);
                      },
                    },
                    e.text.mobile
                  ),
                  s.createElement(
                    "a",
                    {
                      onClick: function () {
                        return n(!0);
                      },
                    },
                    e.text.qrcode
                  )
                ),
              s.createElement(
                "div",
                null,
                r
                  ? s.createElement(m, Object.assign({}, o))
                  : s.createElement(g, Object.assign({}, o))
              )
            )
          );
        }
        "undefined" != typeof Symbol &&
          (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
          "undefined" != typeof Symbol &&
            (Symbol.asyncIterator ||
              (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
        var w = {
          de: {
            choose_preferred_wallet: "W\xe4hle bevorzugte Wallet",
            connect_mobile_wallet: "Verbinde mit Mobile Wallet",
            scan_qrcode_with_wallet:
              "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
            connect: "Verbinden",
            qrcode: "QR-Code",
            mobile: "Mobile",
            copy_to_clipboard: "In die Zwischenablage kopieren",
            copied_to_clipboard: "In die Zwischenablage kopiert!",
          },
          en: {
            choose_preferred_wallet: "Choose your preferred wallet",
            connect_mobile_wallet: "Connect to Mobile Wallet",
            scan_qrcode_with_wallet:
              "Scan QR code with a WalletConnect-compatible wallet",
            connect: "Connect",
            qrcode: "QR Code",
            mobile: "Mobile",
            copy_to_clipboard: "Copy to clipboard",
            copied_to_clipboard: "Copied to clipboard!",
          },
          es: {
            choose_preferred_wallet: "Elige tu billetera preferida",
            connect_mobile_wallet: "Conectar a billetera m\xf3vil",
            scan_qrcode_with_wallet:
              "Escanea el c\xf3digo QR con una billetera compatible con WalletConnect",
            connect: "Conectar",
            qrcode: "C\xf3digo QR",
            mobile: "M\xf3vil",
            copy_to_clipboard: "Copiar",
            copied_to_clipboard: "Copiado!",
          },
          fr: {
            choose_preferred_wallet:
              "Choisissez votre portefeuille pr\xe9f\xe9r\xe9",
            connect_mobile_wallet: "Se connecter au portefeuille mobile",
            scan_qrcode_with_wallet:
              "Scannez le QR code avec un portefeuille compatible WalletConnect",
            connect: "Se connecter",
            qrcode: "QR Code",
            mobile: "Mobile",
            copy_to_clipboard: "Copier",
            copied_to_clipboard: "Copi\xe9!",
          },
          ko: {
            choose_preferred_wallet:
              "\uc6d0\ud558\ub294 \uc9c0\uac11\uc744 \uc120\ud0dd\ud558\uc138\uc694",
            connect_mobile_wallet:
              "\ubaa8\ubc14\uc77c \uc9c0\uac11\uacfc \uc5f0\uacb0",
            scan_qrcode_with_wallet:
              "WalletConnect \uc9c0\uc6d0 \uc9c0\uac11\uc5d0\uc11c QR\ucf54\ub4dc\ub97c \uc2a4\uce94\ud558\uc138\uc694",
            connect: "\uc5f0\uacb0",
            qrcode: "QR \ucf54\ub4dc",
            mobile: "\ubaa8\ubc14\uc77c",
            copy_to_clipboard: "\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac",
            copied_to_clipboard:
              "\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4!",
          },
          pt: {
            choose_preferred_wallet: "Escolha sua carteira preferida",
            connect_mobile_wallet: "Conectar-se \xe0 carteira m\xf3vel",
            scan_qrcode_with_wallet:
              "Ler o c\xf3digo QR com uma carteira compat\xedvel com WalletConnect",
            connect: "Conectar",
            qrcode: "C\xf3digo QR",
            mobile: "M\xf3vel",
            copy_to_clipboard: "Copiar",
            copied_to_clipboard: "Copiado!",
          },
          zh: {
            choose_preferred_wallet: "\u9009\u62e9\u4f60\u7684\u94b1\u5305",
            connect_mobile_wallet:
              "\u8fde\u63a5\u81f3\u79fb\u52a8\u7aef\u94b1\u5305",
            scan_qrcode_with_wallet:
              "\u4f7f\u7528\u517c\u5bb9 WalletConnect \u7684\u94b1\u5305\u626b\u63cf\u4e8c\u7ef4\u7801",
            connect: "\u8fde\u63a5",
            qrcode: "\u4e8c\u7ef4\u7801",
            mobile: "\u79fb\u52a8",
            copy_to_clipboard: "\u590d\u5236\u5230\u526a\u8d34\u677f",
            copied_to_clipboard:
              "\u590d\u5236\u5230\u526a\u8d34\u677f\u6210\u529f\uff01",
          },
          fa: {
            choose_preferred_wallet:
              "\u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u062e\u0648\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f",
            connect_mobile_wallet:
              "\u0628\u0647 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0648\u0635\u0644 \u0634\u0648\u06cc\u062f",
            scan_qrcode_with_wallet:
              "\u06a9\u062f QR \u0631\u0627 \u0628\u0627 \u06cc\u06a9 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0633\u0627\u0632\u06af\u0627\u0631 \u0628\u0627 WalletConnect \u0627\u0633\u06a9\u0646 \u06a9\u0646\u06cc\u062f",
            connect: "\u0627\u062a\u0635\u0627\u0644",
            qrcode: "\u06a9\u062f QR",
            mobile: "\u0633\u06cc\u0627\u0631",
            copy_to_clipboard:
              "\u06a9\u067e\u06cc \u0628\u0647 \u06a9\u0644\u06cc\u067e \u0628\u0648\u0631\u062f",
            copied_to_clipboard:
              "\u062f\u0631 \u06a9\u0644\u06cc\u067e \u0628\u0648\u0631\u062f \u06a9\u067e\u06cc \u0634\u062f!",
          },
        };
        function b() {
          var e = i.getDocumentOrThrow(),
            t = e.getElementById(f);
          t &&
            ((t.className = t.className.replace("fadeIn", "fadeOut")),
            setTimeout(function () {
              var t = e.getElementById(u);
              t && e.body.removeChild(t);
            }, 300));
        }
        function E() {
          return (
            void 0 !== t && void 0 !== t.versions && void 0 !== t.versions.node
          );
        }
        e.exports = {
          open: function (e, t, r) {
            E()
              ? o.toString(e, { type: "terminal" }).then(console.log)
              : (function (e, t, r) {
                  (o = (a = i.getDocumentOrThrow()).getElementById(c)) &&
                    a.head.removeChild(o),
                    (o = a.createElement("style")).setAttribute("id", c),
                    (o.innerText =
                      ':root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 30px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,\n    "Open Sans", "Helvetica Neue", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url("images/wc-logo.svg") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 5vw;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  background-size: cover !important;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n'),
                    a.head.appendChild(o);
                  var n,
                    o,
                    a =
                      ((o = (a = i.getDocumentOrThrow()).createElement(
                        "div"
                      )).setAttribute("id", u),
                      a.body.appendChild(o),
                      o);
                  s.render(
                    s.createElement(y, {
                      text:
                        ((o =
                          i.getNavigatorOrThrow().language.split("-")[0] ||
                          "en"),
                        w[o] || w.en),
                      uri: e,
                      onClose:
                        ((n = t),
                        function () {
                          b(), n && n();
                        }),
                      qrcodeModalOptions: r,
                    }),
                    a
                  );
                })(e, t, r);
          },
          close: function () {
            E() || b();
          },
        };
      }.call(this, r(162)));
    },
    1520: function (e, t, r) {
      var n = r(1521),
        i = r(1522),
        o = r(1539),
        a = r(1540);
      function s(e, t, r, o, a) {
        var s,
          u = (s = [].slice.call(arguments, 1)).length;
        if (!(s = "function" == typeof s[u - 1]) && !n())
          throw new Error("Callback required as last argument");
        if (!s) {
          if (u < 1) throw new Error("Too few arguments provided");
          return (
            1 === u
              ? ((r = t), (t = o = void 0))
              : 2 !== u || t.getContext || ((o = r), (r = t), (t = void 0)),
            new Promise(function (n, a) {
              try {
                var s = i.create(r, o);
                n(e(s, t, o));
              } catch (n) {
                a(n);
              }
            })
          );
        }
        if (u < 2) throw new Error("Too few arguments provided");
        2 === u
          ? ((a = r), (r = t), (t = o = void 0))
          : 3 === u &&
            (t.getContext && void 0 === a
              ? ((a = o), (o = void 0))
              : ((a = o), (o = r), (r = t), (t = void 0)));
        try {
          var c = i.create(r, o);
          a(null, e(c, t, o));
        } catch (s) {
          a(s);
        }
      }
      (t.create = i.create),
        (t.toCanvas = s.bind(null, o.render)),
        (t.toDataURL = s.bind(null, o.renderToDataURL)),
        (t.toString = s.bind(null, function (e, t, r) {
          return a.render(e, r);
        }));
    },
    1521: function (e, t) {
      e.exports = function () {
        return (
          "function" == typeof Promise &&
          Promise.prototype &&
          Promise.prototype.then
        );
      };
    },
    1522: function (e, t, r) {
      var n = r(1147),
        i = r(1132),
        o = r(1231),
        a = r(1523),
        s = r(1524),
        u = r(1525),
        c = r(1526),
        f = r(1527),
        l = r(1336),
        h = r(1528),
        d = r(1531),
        p = r(1532),
        v = r(1133),
        g = r(1533),
        _ = r(1230);
      function m(e, t, r) {
        for (var n, i = e.size, o = p.getEncodedBits(t, r), a = 0; a < 15; a++)
          (n = 1 == ((o >> a) & 1)),
            a < 6
              ? e.set(a, 8, n, !0)
              : a < 8
              ? e.set(a + 1, 8, n, !0)
              : e.set(i - 15 + a, 8, n, !0),
            a < 8
              ? e.set(8, i - a - 1, n, !0)
              : a < 9
              ? e.set(8, 15 - a - 1 + 1, n, !0)
              : e.set(8, 15 - a - 1, n, !0);
        e.set(i - 8, 8, 1, !0);
      }
      function y(e, t, r) {
        var o = new a();
        for (
          r.forEach(function (t) {
            o.put(t.mode.bit, 4),
              o.put(t.getLength(), v.getCharCountIndicator(t.mode, e)),
              t.write(o);
          }),
            r =
              8 *
              (i.getSymbolTotalCodewords(e) - l.getTotalCodewordsCount(e, t)),
            o.getLengthInBits() + 4 <= r && o.put(0, 4);
          o.getLengthInBits() % 8 != 0;

        )
          o.putBit(0);
        for (var s = (r - o.getLengthInBits()) / 8, u = 0; u < s; u++)
          o.put(u % 2 ? 17 : 236, 8);
        return (function (e, t, r) {
          for (
            var o = i.getSymbolTotalCodewords(t),
              a = o - (a = l.getTotalCodewordsCount(t, r)),
              s = l.getBlocksCount(t, r),
              u = s - (o % s),
              c = ((r = Math.floor(o / s)), Math.floor(a / s)),
              f = c + 1,
              d = r - c,
              p = new h(d),
              v = 0,
              g = new Array(s),
              _ = new Array(s),
              m = 0,
              y = n.from(e.buffer),
              w = 0;
            w < s;
            w++
          ) {
            var b = w < u ? c : f;
            (g[w] = y.slice(v, v + b)),
              (_[w] = p.encode(g[w])),
              (v += b),
              (m = Math.max(m, b));
          }
          var E,
            x,
            S = n.alloc(o),
            k = 0;
          for (E = 0; E < m; E++)
            for (x = 0; x < s; x++) E < g[x].length && (S[k++] = g[x][E]);
          for (E = 0; E < d; E++) for (x = 0; x < s; x++) S[k++] = _[x][E];
          return S;
        })(o, e, t);
      }
      t.create = function (e, t) {
        if (void 0 === e || "" === e) throw new Error("No input text");
        var r,
          n,
          a = o.M;
        return (
          void 0 !== t &&
            ((a = o.from(t.errorCorrectionLevel, o.M)),
            (r = d.from(t.version)),
            (n = f.from(t.maskPattern)),
            t.toSJISFunc && i.setToSJISFunction(t.toSJISFunc)),
          (function (e, t, r, n) {
            var o;
            if (_(e)) o = g.fromArray(e);
            else {
              if ("string" != typeof e) throw new Error("Invalid data");
              var a,
                l = t;
              l || ((a = g.rawSplit(e)), (l = d.getBestVersionForData(a, r))),
                (o = g.fromString(e, l || 40));
            }
            if (!(e = d.getBestVersionForData(o, r)))
              throw new Error(
                "The amount of data is too big to be stored in a QR Code"
              );
            if (t) {
              if (t < e)
                throw new Error(
                  "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                    e +
                    ".\n"
                );
            } else t = e;
            return (
              (l = y(t, r, o)),
              (e = i.getSymbolSize(t)),
              (function (e, t) {
                for (
                  var r = e.size, n = c.getPositions(t), i = 0;
                  i < n.length;
                  i++
                )
                  for (var o = n[i][0], a = n[i][1], s = -1; s <= 7; s++)
                    if (!(o + s <= -1 || r <= o + s))
                      for (var u = -1; u <= 7; u++)
                        a + u <= -1 ||
                          r <= a + u ||
                          ((0 <= s && s <= 6 && (0 === u || 6 === u)) ||
                          (0 <= u && u <= 6 && (0 === s || 6 === s)) ||
                          (2 <= s && s <= 4 && 2 <= u && u <= 4)
                            ? e.set(o + s, a + u, !0, !0)
                            : e.set(o + s, a + u, !1, !0));
              })((e = new s(e)), t),
              (function (e) {
                for (var t = e.size, r = 8; r < t - 8; r++) {
                  var n = r % 2 == 0;
                  e.set(r, 6, n, !0), e.set(6, r, n, !0);
                }
              })(e),
              (function (e, t) {
                for (var r = u.getPositions(t), n = 0; n < r.length; n++)
                  for (var i = r[n][0], o = r[n][1], a = -2; a <= 2; a++)
                    for (var s = -2; s <= 2; s++)
                      -2 === a ||
                      2 === a ||
                      -2 === s ||
                      2 === s ||
                      (0 === a && 0 === s)
                        ? e.set(i + a, o + s, !0, !0)
                        : e.set(i + a, o + s, !1, !0);
              })(e, t),
              m(e, r, 0),
              7 <= t &&
                (function (e, t) {
                  for (
                    var r, n, i, o = e.size, a = d.getEncodedBits(t), s = 0;
                    s < 18;
                    s++
                  )
                    (r = Math.floor(s / 3)),
                      e.set(
                        r,
                        (n = (s % 3) + o - 8 - 3),
                        (i = 1 == ((a >> s) & 1)),
                        !0
                      ),
                      e.set(n, r, i, !0);
                })(e, t),
              (function (e, t) {
                for (
                  var r = e.size, n = -1, i = r - 1, o = 7, a = 0, s = r - 1;
                  0 < s;
                  s -= 2
                )
                  for (6 === s && s--; ; ) {
                    for (var u, c = 0; c < 2; c++)
                      e.isReserved(i, s - c) ||
                        ((u = !1),
                        a < t.length && (u = 1 == ((t[a] >>> o) & 1)),
                        e.set(i, s - c, u),
                        -1 === --o && (a++, (o = 7)));
                    if ((i += n) < 0 || r <= i) {
                      (i -= n), (n = -n);
                      break;
                    }
                  }
              })(e, l),
              isNaN(n) && (n = f.getBestMask(e, m.bind(null, e, r))),
              f.applyMask(n, e),
              m(e, r, n),
              {
                modules: e,
                version: t,
                errorCorrectionLevel: r,
                maskPattern: n,
                segments: o,
              }
            );
          })(e, r, a, n)
        );
      };
    },
    1523: function (e, t) {
      function r() {
        (this.buffer = []), (this.length = 0);
      }
      (r.prototype = {
        get: function (e) {
          var t = Math.floor(e / 8);
          return 1 == ((this.buffer[t] >>> (7 - (e % 8))) & 1);
        },
        put: function (e, t) {
          for (var r = 0; r < t; r++)
            this.putBit(1 == ((e >>> (t - r - 1)) & 1));
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (e) {
          var t = Math.floor(this.length / 8);
          this.buffer.length <= t && this.buffer.push(0),
            e && (this.buffer[t] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (e.exports = r);
    },
    1524: function (e, t, r) {
      var n = r(1147);
      function i(e) {
        if (!e || e < 1)
          throw new Error("BitMatrix size must be defined and greater than 0");
        (this.size = e),
          (this.data = n.alloc(e * e)),
          (this.reservedBit = n.alloc(e * e));
      }
      (i.prototype.set = function (e, t, r, n) {
        (t = e * this.size + t),
          (this.data[t] = r),
          n && (this.reservedBit[t] = !0);
      }),
        (i.prototype.get = function (e, t) {
          return this.data[e * this.size + t];
        }),
        (i.prototype.xor = function (e, t, r) {
          this.data[e * this.size + t] ^= r;
        }),
        (i.prototype.isReserved = function (e, t) {
          return this.reservedBit[e * this.size + t];
        }),
        (e.exports = i);
    },
    1525: function (e, t, r) {
      var n = r(1132).getSymbolSize;
      (t.getRowColCoords = function (e) {
        if (1 === e) return [];
        for (
          var t = Math.floor(e / 7) + 2,
            r = 145 === (e = n(e)) ? 26 : 2 * Math.ceil((e - 13) / (2 * t - 2)),
            i = [e - 7],
            o = 1;
          o < t - 1;
          o++
        )
          i[o] = i[o - 1] - r;
        return i.push(6), i.reverse();
      }),
        (t.getPositions = function (e) {
          for (
            var r = [], n = t.getRowColCoords(e), i = n.length, o = 0;
            o < i;
            o++
          )
            for (var a = 0; a < i; a++)
              (0 === o && 0 === a) ||
                (0 === o && a === i - 1) ||
                (o === i - 1 && 0 === a) ||
                r.push([n[o], n[a]]);
          return r;
        });
    },
    1526: function (e, t, r) {
      var n = r(1132).getSymbolSize;
      t.getPositions = function (e) {
        return [
          [0, 0],
          [(e = n(e)) - 7, 0],
          [0, e - 7],
        ];
      };
    },
    1527: function (e, t) {
      t.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      };
      (t.isValid = function (e) {
        return null != e && "" !== e && !isNaN(e) && 0 <= e && e <= 7;
      }),
        (t.from = function (e) {
          return t.isValid(e) ? parseInt(e, 10) : void 0;
        }),
        (t.getPenaltyN1 = function (e) {
          for (
            var t = e.size, r = 0, n = 0, i = 0, o = null, a = null, s = 0;
            s < t;
            s++
          ) {
            (n = i = 0), (o = a = null);
            for (var u = 0; u < t; u++) {
              var c = e.get(s, u);
              c === o ? n++ : (5 <= n && (r += n - 5 + 3), (o = c), (n = 1)),
                (c = e.get(u, s)) === a
                  ? i++
                  : (5 <= i && (r += i - 5 + 3), (a = c), (i = 1));
            }
            5 <= n && (r += n - 5 + 3), 5 <= i && (r += i - 5 + 3);
          }
          return r;
        }),
        (t.getPenaltyN2 = function (e) {
          for (var t = e.size, r = 0, n = 0; n < t - 1; n++)
            for (var i = 0; i < t - 1; i++) {
              var o =
                e.get(n, i) +
                e.get(n, i + 1) +
                e.get(n + 1, i) +
                e.get(n + 1, i + 1);
              (4 !== o && 0 !== o) || r++;
            }
          return 3 * r;
        }),
        (t.getPenaltyN3 = function (e) {
          for (var t = e.size, r = 0, n = 0, i = 0, o = 0; o < t; o++) {
            n = i = 0;
            for (var a = 0; a < t; a++)
              (n = ((n << 1) & 2047) | e.get(o, a)),
                10 <= a && (1488 === n || 93 === n) && r++,
                (i = ((i << 1) & 2047) | e.get(a, o)),
                10 <= a && (1488 === i || 93 === i) && r++;
          }
          return 40 * r;
        }),
        (t.getPenaltyN4 = function (e) {
          for (var t = 0, r = e.data.length, n = 0; n < r; n++) t += e.data[n];
          return 10 * Math.abs(Math.ceil((100 * t) / r / 5) - 10);
        }),
        (t.applyMask = function (e, r) {
          for (var n = r.size, i = 0; i < n; i++)
            for (var o = 0; o < n; o++)
              r.isReserved(o, i) ||
                r.xor(
                  o,
                  i,
                  (function (e, r, n) {
                    switch (e) {
                      case t.Patterns.PATTERN000:
                        return (r + n) % 2 == 0;
                      case t.Patterns.PATTERN001:
                        return r % 2 == 0;
                      case t.Patterns.PATTERN010:
                        return n % 3 == 0;
                      case t.Patterns.PATTERN011:
                        return (r + n) % 3 == 0;
                      case t.Patterns.PATTERN100:
                        return (Math.floor(r / 2) + Math.floor(n / 3)) % 2 == 0;
                      case t.Patterns.PATTERN101:
                        return ((r * n) % 2) + ((r * n) % 3) == 0;
                      case t.Patterns.PATTERN110:
                        return (((r * n) % 2) + ((r * n) % 3)) % 2 == 0;
                      case t.Patterns.PATTERN111:
                        return (((r * n) % 3) + ((r + n) % 2)) % 2 == 0;
                      default:
                        throw new Error("bad maskPattern:" + e);
                    }
                  })(e, o, i)
                );
        }),
        (t.getBestMask = function (e, r) {
          for (
            var n = Object.keys(t.Patterns).length, i = 0, o = 1 / 0, a = 0;
            a < n;
            a++
          ) {
            r(a), t.applyMask(a, e);
            var s =
              t.getPenaltyN1(e) +
              t.getPenaltyN2(e) +
              t.getPenaltyN3(e) +
              t.getPenaltyN4(e);
            t.applyMask(a, e), s < o && ((o = s), (i = a));
          }
          return i;
        });
    },
    1528: function (e, t, r) {
      var n = r(1147),
        i = r(1529),
        o = r(532).Buffer;
      function a(e) {
        (this.genPoly = void 0),
          (this.degree = e),
          this.degree && this.initialize(this.degree);
      }
      (a.prototype.initialize = function (e) {
        (this.degree = e), (this.genPoly = i.generateECPolynomial(this.degree));
      }),
        (a.prototype.encode = function (e) {
          if (!this.genPoly) throw new Error("Encoder not initialized");
          var t = n.alloc(this.degree),
            r = o.concat([e, t], e.length + this.degree);
          t = i.mod(r, this.genPoly);
          return 0 < (e = this.degree - t.length)
            ? ((r = n.alloc(this.degree)), t.copy(r, e), r)
            : t;
        }),
        (e.exports = a);
    },
    1529: function (e, t, r) {
      var n = r(1147),
        i = r(1530);
      (t.mul = function (e, t) {
        for (var r = n.alloc(e.length + t.length - 1), o = 0; o < e.length; o++)
          for (var a = 0; a < t.length; a++) r[o + a] ^= i.mul(e[o], t[a]);
        return r;
      }),
        (t.mod = function (e, t) {
          for (var r = n.from(e); 0 <= r.length - t.length; ) {
            for (var o = r[0], a = 0; a < t.length; a++) r[a] ^= i.mul(t[a], o);
            for (var s = 0; s < r.length && 0 === r[s]; ) s++;
            r = r.slice(s);
          }
          return r;
        }),
        (t.generateECPolynomial = function (e) {
          for (var r = n.from([1]), o = 0; o < e; o++)
            r = t.mul(r, [1, i.exp(o)]);
          return r;
        });
    },
    1530: function (e, t, r) {
      var n = (r = r(1147)).alloc(512),
        i = r.alloc(256);
      !(function () {
        for (var e = 1, t = 0; t < 255; t++)
          (n[t] = e), (i[e] = t), 256 & (e <<= 1) && (e ^= 285);
        for (t = 255; t < 512; t++) n[t] = n[t - 255];
      })(),
        (t.log = function (e) {
          if (e < 1) throw new Error("log(" + e + ")");
          return i[e];
        }),
        (t.exp = function (e) {
          return n[e];
        }),
        (t.mul = function (e, t) {
          return 0 === e || 0 === t ? 0 : n[i[e] + i[t]];
        });
    },
    1531: function (e, t, r) {
      var n = r(1132),
        i = r(1336),
        o = r(1231),
        a = r(1133),
        s = r(1337),
        u = r(1230),
        c = n.getBCHDigit(7973);
      function f(e, t) {
        return a.getCharCountIndicator(e, t) + 4;
      }
      (t.from = function (e, t) {
        return s.isValid(e) ? parseInt(e, 10) : t;
      }),
        (t.getCapacity = function (e, t, r) {
          if (!s.isValid(e)) throw new Error("Invalid QR Code version");
          if (
            (void 0 === r && (r = a.BYTE),
            (t =
              8 *
              (n.getSymbolTotalCodewords(e) - i.getTotalCodewordsCount(e, t))),
            r === a.MIXED)
          )
            return t;
          var o = t - f(r, e);
          switch (r) {
            case a.NUMERIC:
              return Math.floor((o / 10) * 3);
            case a.ALPHANUMERIC:
              return Math.floor((o / 11) * 2);
            case a.KANJI:
              return Math.floor(o / 13);
            default:
              return a.BYTE, Math.floor(o / 8);
          }
        }),
        (t.getBestVersionForData = function (e, r) {
          var n;
          r = o.from(r, o.M);
          if (u(e)) {
            if (1 < e.length)
              return (function (e, r) {
                for (var n = 1; n <= 40; n++)
                  if (
                    (function (e, t) {
                      var r = 0;
                      return (
                        e.forEach(function (e) {
                          var n = f(e.mode, t);
                          r += n + e.getBitsLength();
                        }),
                        r
                      );
                    })(e, n) <= t.getCapacity(n, r, a.MIXED)
                  )
                    return n;
              })(e, r);
            if (0 === e.length) return 1;
            n = e[0];
          } else n = e;
          return (function (e, r, n) {
            for (var i = 1; i <= 40; i++)
              if (r <= t.getCapacity(i, n, e)) return i;
          })(n.mode, n.getLength(), r);
        }),
        (t.getEncodedBits = function (e) {
          if (!s.isValid(e) || e < 7)
            throw new Error("Invalid QR Code version");
          for (var t = e << 12; 0 <= n.getBCHDigit(t) - c; )
            t ^= 7973 << (n.getBCHDigit(t) - c);
          return (e << 12) | t;
        });
    },
    1532: function (e, t, r) {
      var n = r(1132),
        i = n.getBCHDigit(1335);
      t.getEncodedBits = function (e, t) {
        for (var r = (t = (e.bit << 3) | t) << 10; 0 <= n.getBCHDigit(r) - i; )
          r ^= 1335 << (n.getBCHDigit(r) - i);
        return 21522 ^ ((t << 10) | r);
      };
    },
    1533: function (e, t, r) {
      var n = r(1133),
        i = r(1534),
        o = r(1535),
        a = r(1536),
        s = r(1537),
        u = r(1338),
        c = r(1132),
        f = r(1538);
      function l(e) {
        return unescape(encodeURIComponent(e)).length;
      }
      function h(e, t, r) {
        for (var n, i = []; null !== (n = e.exec(r)); )
          i.push({ data: n[0], index: n.index, mode: t, length: n[0].length });
        return i;
      }
      function d(e) {
        var t,
          r = h(u.NUMERIC, n.NUMERIC, e),
          i = h(u.ALPHANUMERIC, n.ALPHANUMERIC, e);
        e = c.isKanjiModeEnabled()
          ? ((t = h(u.BYTE, n.BYTE, e)), h(u.KANJI, n.KANJI, e))
          : ((t = h(u.BYTE_KANJI, n.BYTE, e)), []);
        return r
          .concat(i, t, e)
          .sort(function (e, t) {
            return e.index - t.index;
          })
          .map(function (e) {
            return { data: e.data, mode: e.mode, length: e.length };
          });
      }
      function p(e, t) {
        switch (t) {
          case n.NUMERIC:
            return i.getBitsLength(e);
          case n.ALPHANUMERIC:
            return o.getBitsLength(e);
          case n.KANJI:
            return s.getBitsLength(e);
          case n.BYTE:
            return a.getBitsLength(e);
        }
      }
      function v(e, t) {
        var r = n.getBestModeForData(e);
        if ((t = n.from(t, r)) !== n.BYTE && t.bit < r.bit)
          throw new Error(
            '"' +
              e +
              '" cannot be encoded with mode ' +
              n.toString(t) +
              ".\n Suggested mode is: " +
              n.toString(r)
          );
        switch ((t = t !== n.KANJI || c.isKanjiModeEnabled() ? t : n.BYTE)) {
          case n.NUMERIC:
            return new i(e);
          case n.ALPHANUMERIC:
            return new o(e);
          case n.KANJI:
            return new s(e);
          case n.BYTE:
            return new a(e);
        }
      }
      (t.fromArray = function (e) {
        return e.reduce(function (e, t) {
          return (
            "string" == typeof t
              ? e.push(v(t, null))
              : t.data && e.push(v(t.data, t.mode)),
            e
          );
        }, []);
      }),
        (t.fromString = function (e, r) {
          for (
            var i = (function (e, t) {
                for (
                  var r = {}, i = { start: {} }, o = ["start"], a = 0;
                  a < e.length;
                  a++
                ) {
                  for (var s = e[a], u = [], c = 0; c < s.length; c++) {
                    var f = s[c],
                      l = "" + a + c;
                    u.push(l), (r[l] = { node: f, lastCount: 0 }), (i[l] = {});
                    for (var h = 0; h < o.length; h++) {
                      var d = o[h];
                      r[d] && r[d].node.mode === f.mode
                        ? ((i[d][l] =
                            p(r[d].lastCount + f.length, f.mode) -
                            p(r[d].lastCount, f.mode)),
                          (r[d].lastCount += f.length))
                        : (r[d] && (r[d].lastCount = f.length),
                          (i[d][l] =
                            p(f.length, f.mode) +
                            4 +
                            n.getCharCountIndicator(f.mode, t)));
                    }
                  }
                  o = u;
                }
                for (h = 0; h < o.length; h++) i[o[h]].end = 0;
                return { map: i, table: r };
              })(
                (function (e) {
                  for (var t = [], r = 0; r < e.length; r++) {
                    var i = e[r];
                    switch (i.mode) {
                      case n.NUMERIC:
                        t.push([
                          i,
                          {
                            data: i.data,
                            mode: n.ALPHANUMERIC,
                            length: i.length,
                          },
                          { data: i.data, mode: n.BYTE, length: i.length },
                        ]);
                        break;
                      case n.ALPHANUMERIC:
                        t.push([
                          i,
                          { data: i.data, mode: n.BYTE, length: i.length },
                        ]);
                        break;
                      case n.KANJI:
                        t.push([
                          i,
                          { data: i.data, mode: n.BYTE, length: l(i.data) },
                        ]);
                        break;
                      case n.BYTE:
                        t.push([
                          { data: i.data, mode: n.BYTE, length: l(i.data) },
                        ]);
                    }
                  }
                  return t;
                })(d(e, c.isKanjiModeEnabled())),
                r
              ),
              o = f.find_path(i.map, "start", "end"),
              a = [],
              s = 1;
            s < o.length - 1;
            s++
          )
            a.push(i.table[o[s]].node);
          return t.fromArray(
            a.reduce(function (e, t) {
              var r = 0 <= e.length - 1 ? e[e.length - 1] : null;
              return (
                r && r.mode === t.mode
                  ? (e[e.length - 1].data += t.data)
                  : e.push(t),
                e
              );
            }, [])
          );
        }),
        (t.rawSplit = function (e) {
          return t.fromArray(d(e, c.isKanjiModeEnabled()));
        });
    },
    1534: function (e, t, r) {
      var n = r(1133);
      function i(e) {
        (this.mode = n.NUMERIC), (this.data = e.toString());
      }
      (i.getBitsLength = function (e) {
        return 10 * Math.floor(e / 3) + (e % 3 ? (e % 3) * 3 + 1 : 0);
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (e) {
          for (var t, r, n = 0; n + 3 <= this.data.length; n += 3)
            (t = this.data.substr(n, 3)), (r = parseInt(t, 10)), e.put(r, 10);
          var i = this.data.length - n;
          0 < i &&
            ((t = this.data.substr(n)),
            (r = parseInt(t, 10)),
            e.put(r, 3 * i + 1));
        }),
        (e.exports = i);
    },
    1535: function (e, t, r) {
      var n = r(1133),
        i = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          " ",
          "$",
          "%",
          "*",
          "+",
          "-",
          ".",
          "/",
          ":",
        ];
      function o(e) {
        (this.mode = n.ALPHANUMERIC), (this.data = e);
      }
      (o.getBitsLength = function (e) {
        return 11 * Math.floor(e / 2) + (e % 2) * 6;
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (e) {
          for (var t = 0; t + 2 <= this.data.length; t += 2) {
            var r = 45 * i.indexOf(this.data[t]);
            (r += i.indexOf(this.data[t + 1])), e.put(r, 11);
          }
          this.data.length % 2 && e.put(i.indexOf(this.data[t]), 6);
        }),
        (e.exports = o);
    },
    1536: function (e, t, r) {
      var n = r(1147),
        i = r(1133);
      function o(e) {
        (this.mode = i.BYTE), (this.data = n.from(e));
      }
      (o.getBitsLength = function (e) {
        return 8 * e;
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (e) {
          for (var t = 0, r = this.data.length; t < r; t++)
            e.put(this.data[t], 8);
        }),
        (e.exports = o);
    },
    1537: function (e, t, r) {
      var n = r(1133),
        i = r(1132);
      function o(e) {
        (this.mode = n.KANJI), (this.data = e);
      }
      (o.getBitsLength = function (e) {
        return 13 * e;
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (e) {
          for (var t = 0; t < this.data.length; t++) {
            var r = i.toSJIS(this.data[t]);
            if (33088 <= r && r <= 40956) r -= 33088;
            else {
              if (!(57408 <= r && r <= 60351))
                throw new Error(
                  "Invalid SJIS character: " +
                    this.data[t] +
                    "\nMake sure your charset is UTF-8"
                );
              r -= 49472;
            }
            e.put((r = 192 * ((r >>> 8) & 255) + (255 & r)), 13);
          }
        }),
        (e.exports = o);
    },
    1538: function (e, t, r) {
      "use strict";
      var n = {
        single_source_shortest_paths: function (e, t, r) {
          var i = {},
            o = {};
          o[t] = 0;
          var a,
            s,
            u,
            c,
            f,
            l,
            h,
            d = n.PriorityQueue.make();
          for (d.push(t, 0); !d.empty(); )
            for (u in ((s = (a = d.pop()).value),
            (c = a.cost),
            (f = e[s] || {})))
              f.hasOwnProperty(u) &&
                ((l = c + f[u]),
                (h = o[u]),
                (void 0 === o[u] || l < h) &&
                  ((o[u] = l), d.push(u, l), (i[u] = s)));
          if (void 0 === r || void 0 !== o[r]) return i;
          throw (
            ((r = ["Could not find a path from ", t, " to ", r, "."].join("")),
            new Error(r))
          );
        },
        extract_shortest_path_from_predecessor_list: function (e, t) {
          for (var r = [], n = t; n; ) r.push(n), e[n], (n = e[n]);
          return r.reverse(), r;
        },
        find_path: function (e, t, r) {
          return (
            (t = n.single_source_shortest_paths(e, t, r)),
            n.extract_shortest_path_from_predecessor_list(t, r)
          );
        },
        PriorityQueue: {
          make: function (e) {
            var t,
              r = n.PriorityQueue,
              i = {};
            for (t in ((e = e || {}), r)) r.hasOwnProperty(t) && (i[t] = r[t]);
            return (i.queue = []), (i.sorter = e.sorter || r.default_sorter), i;
          },
          default_sorter: function (e, t) {
            return e.cost - t.cost;
          },
          push: function (e, t) {
            this.queue.push({ value: e, cost: t }),
              this.queue.sort(this.sorter);
          },
          pop: function () {
            return this.queue.shift();
          },
          empty: function () {
            return 0 === this.queue.length;
          },
        },
      };
      e.exports = n;
    },
    1539: function (e, t, r) {
      var n = r(1339);
      (t.render = function (e, t, r) {
        var i = t;
        void 0 !== (o = r) || (t && t.getContext) || ((o = t), (t = void 0)),
          t ||
            (i = (function () {
              try {
                return document.createElement("canvas");
              } catch (e) {
                throw new Error("You need to specify a canvas element");
              }
            })());
        var o = n.getOptions(o),
          a = n.getImageWidth(e.modules.size, o);
        t = (r = i.getContext("2d")).createImageData(a, a);
        return (
          n.qrToImageData(t.data, e, o),
          (o = i),
          (a = a),
          r.clearRect(0, 0, o.width, o.height),
          o.style || (o.style = {}),
          (o.height = a),
          (o.width = a),
          (o.style.height = a + "px"),
          (o.style.width = a + "px"),
          r.putImageData(t, 0, 0),
          i
        );
      }),
        (t.renderToDataURL = function (e, r, n) {
          return (
            void 0 !== (n = n) ||
              (r && r.getContext) ||
              ((n = r), (r = void 0)),
            (n = n || {}),
            (e = t.render(e, r, n)),
            (r = n.type || "image/png"),
            (n = n.rendererOpts || {}),
            e.toDataURL(r, n.quality)
          );
        });
    },
    1540: function (e, t, r) {
      var n = r(1339);
      function i(e, t) {
        var r = e.a / 255;
        e = t + '="' + e.hex + '"';
        return r < 1
          ? e + " " + t + '-opacity="' + r.toFixed(2).slice(1) + '"'
          : e;
      }
      function o(e, t, r) {
        return (t = e + t), void 0 !== r && (t += " " + r), t;
      }
      t.render = function (e, t, r) {
        var a = n.getOptions(t),
          s = e.modules.size,
          u = e.modules.data;
        (t = s + 2 * a.margin),
          (e = a.color.light.a
            ? "<path " +
              i(a.color.light, "fill") +
              ' d="M0 0h' +
              t +
              "v" +
              t +
              'H0z"/>'
            : ""),
          (s =
            "<path " +
            i(a.color.dark, "stroke") +
            ' d="' +
            (function (e, t, r) {
              for (var n = "", i = 0, a = !1, s = 0, u = 0; u < e.length; u++) {
                var c = Math.floor(u % t),
                  f = Math.floor(u / t);
                c || a || (a = !0),
                  e[u]
                    ? (s++,
                      (0 < u && 0 < c && e[u - 1]) ||
                        ((n += a ? o("M", c + r, 0.5 + f + r) : o("m", i, 0)),
                        (i = 0),
                        (a = !1)),
                      (c + 1 < t && e[u + 1]) || ((n += o("h", s)), (s = 0)))
                    : i++;
              }
              return n;
            })(u, s, a.margin) +
            '"/>'),
          (s =
            '<svg xmlns="http://www.w3.org/2000/svg" ' +
            (a.width
              ? 'width="' + a.width + '" height="' + a.width + '" '
              : "") +
            'viewBox="0 0 ' +
            t +
            " " +
            t +
            '" shape-rendering="crispEdges">' +
            e +
            s +
            "</svg>\n");
        return "function" == typeof r && r(null, s), s;
      };
    },
    1541: function (e, t, r) {
      "use strict";
      var n = r(366),
        i = r(367),
        o = r(1107),
        a = r(1108);
      Object.defineProperty(t, "__esModule", { value: !0 });
      var s = r(113).__importDefault(r(1542)),
        u = r(1543),
        c = r(1127).getFromWindow("XMLHttpRequest") || u.XMLHttpRequest;
      s = (function (e) {
        o(r, e);
        var t = a(r);
        function r(e) {
          var i;
          return n(this, r), ((i = t.call(this)).url = e), i;
        }
        return (
          i(r, [
            {
              key: "formatError",
              value: function (e, t) {
                return {
                  error: {
                    message: t,
                    code:
                      2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : -1,
                  },
                  id: e.id,
                  jsonrpc: e.jsonrpc,
                };
              },
            },
            {
              key: "send",
              value: function (e, t) {
                var r = this;
                return new Promise(function (n) {
                  if ("eth_subscribe" === e.method) {
                    var i = r.formatError(
                      e,
                      "Subscriptions are not supported by this HTTP endpoint"
                    );
                    return r.emit("error", i), n(i);
                  }
                  function o(i, o) {
                    var u, c;
                    s ||
                      (a.abort(),
                      (s = !0),
                      t
                        ? t(i, o)
                        : ((u = e.id),
                          (c = e.jsonrpc),
                          (o = i
                            ? {
                                id: u,
                                jsonrpc: c,
                                error: { message: i.message, code: i.code },
                              }
                            : { id: u, jsonrpc: c, result: o }),
                          r.emit("payload", o),
                          n(o)));
                  }
                  var a = new c(),
                    s = !1;
                  a.open("POST", r.url, !0),
                    a.setRequestHeader("Content-Type", "application/json"),
                    (a.timeout = 6e4),
                    (a.onerror = o),
                    (a.ontimeout = o),
                    (a.onreadystatechange = function () {
                      if (4 === a.readyState)
                        try {
                          var e = JSON.parse(a.responseText);
                          o(e.error, e.result);
                        } catch (e) {
                          o(e);
                        }
                    }),
                    a.send(JSON.stringify(e));
                });
              },
            },
          ]),
          r
        );
      })(s.default);
      t.default = s;
    },
    1542: function (e, t, r) {
      "use strict";
      var n = Object.prototype.hasOwnProperty,
        i = "~";
      function o() {}
      function a(e, t, r) {
        (this.fn = e), (this.context = t), (this.once = r || !1);
      }
      function s(e, t, r, n, o) {
        if ("function" != typeof r)
          throw new TypeError("The listener must be a function");
        return (
          (o = new a(r, n || e, o)),
          (t = i ? i + t : t),
          e._events[t]
            ? e._events[t].fn
              ? (e._events[t] = [e._events[t], o])
              : e._events[t].push(o)
            : ((e._events[t] = o), e._eventsCount++),
          e
        );
      }
      function u(e, t) {
        0 == --e._eventsCount ? (e._events = new o()) : delete e._events[t];
      }
      function c() {
        (this._events = new o()), (this._eventsCount = 0);
      }
      Object.create &&
        ((o.prototype = Object.create(null)), new o().__proto__ || (i = !1)),
        (c.prototype.eventNames = function () {
          var e,
            t,
            r = [];
          if (0 === this._eventsCount) return r;
          for (t in (e = this._events))
            n.call(e, t) && r.push(i ? t.slice(1) : t);
          return Object.getOwnPropertySymbols
            ? r.concat(Object.getOwnPropertySymbols(e))
            : r;
        }),
        (c.prototype.listeners = function (e) {
          e = i ? i + e : e;
          var t = this._events[e];
          if (!t) return [];
          if (t.fn) return [t.fn];
          for (var r = 0, n = t.length, o = new Array(n); r < n; r++)
            o[r] = t[r].fn;
          return o;
        }),
        (c.prototype.listenerCount = function (e) {
          return (
            (e = i ? i + e : e),
            (e = this._events[e]) ? (e.fn ? 1 : e.length) : 0
          );
        }),
        (c.prototype.emit = function (e, t, r, n, o, a) {
          var s = i ? i + e : e;
          if (!this._events[s]) return !1;
          var u,
            c = this._events[s],
            f = arguments.length;
          if (c.fn) {
            switch ((c.once && this.removeListener(e, c.fn, void 0, !0), f)) {
              case 1:
                return c.fn.call(c.context), !0;
              case 2:
                return c.fn.call(c.context, t), !0;
              case 3:
                return c.fn.call(c.context, t, r), !0;
              case 4:
                return c.fn.call(c.context, t, r, n), !0;
              case 5:
                return c.fn.call(c.context, t, r, n, o), !0;
              case 6:
                return c.fn.call(c.context, t, r, n, o, a), !0;
            }
            for (d = 1, u = new Array(f - 1); d < f; d++)
              u[d - 1] = arguments[d];
            c.fn.apply(c.context, u);
          } else
            for (var l, h = c.length, d = 0; d < h; d++)
              switch (
                (c[d].once && this.removeListener(e, c[d].fn, void 0, !0), f)
              ) {
                case 1:
                  c[d].fn.call(c[d].context);
                  break;
                case 2:
                  c[d].fn.call(c[d].context, t);
                  break;
                case 3:
                  c[d].fn.call(c[d].context, t, r);
                  break;
                case 4:
                  c[d].fn.call(c[d].context, t, r, n);
                  break;
                default:
                  if (!u)
                    for (l = 1, u = new Array(f - 1); l < f; l++)
                      u[l - 1] = arguments[l];
                  c[d].fn.apply(c[d].context, u);
              }
          return !0;
        }),
        (c.prototype.on = function (e, t, r) {
          return s(this, e, t, r, !1);
        }),
        (c.prototype.once = function (e, t, r) {
          return s(this, e, t, r, !0);
        }),
        (c.prototype.removeListener = function (e, t, r, n) {
          if (((e = i ? i + e : e), !this._events[e])) return this;
          if (!t) return u(this, e), this;
          var o = this._events[e];
          if (o.fn)
            o.fn !== t ||
              (n && !o.once) ||
              (r && o.context !== r) ||
              u(this, e);
          else {
            for (var a = 0, s = [], c = o.length; a < c; a++)
              (o[a].fn !== t ||
                (n && !o[a].once) ||
                (r && o[a].context !== r)) &&
                s.push(o[a]);
            s.length
              ? (this._events[e] = 1 === s.length ? s[0] : s)
              : u(this, e);
          }
          return this;
        }),
        (c.prototype.removeAllListeners = function (e) {
          return (
            e
              ? ((e = i ? i + e : e), this._events[e] && u(this, e))
              : ((this._events = new o()), (this._eventsCount = 0)),
            this
          );
        }),
        (c.prototype.off = c.prototype.removeListener),
        (c.prototype.addListener = c.prototype.on),
        (c.prefixed = i),
        (e.exports = c.EventEmitter = c);
    },
    1543: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e) {
          for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
        })(r(1544)),
        (r = r(1232)),
        (t.XMLHttpRequestEventTarget = r.XMLHttpRequestEventTarget);
    },
    1544: function (e, t, r) {
      "use strict";
      (function (e, n) {
        var i,
          o =
            (this && this.__extends) ||
            ((i =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
              }),
            function (e, t) {
              function r() {
                this.constructor = e;
              }
              i(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((r.prototype = t.prototype), new r()));
            }),
          a =
            (this && this.__assign) ||
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var s,
          u = r(1340),
          c = r(1548),
          f = r(1549),
          l = r(533),
          h = r(1550),
          d = r(1551),
          p = r(1232),
          v = r(1552),
          g = r(1553);
        o(_, (s = p.XMLHttpRequestEventTarget)),
          (_.prototype.open = function (e, t, r, n, i) {
            if (
              (void 0 === r && (r = !0),
              (e = e.toUpperCase()),
              this._restrictedMethods[e])
            )
              throw new _.SecurityError(
                "HTTP method " + e + " is not allowed in XHR"
              );
            (i = this._parseUrl(t, n, i)),
              this.readyState === _.HEADERS_RECEIVED || this.readyState,
              (this._method = e),
              (this._url = i),
              (this._sync = !r),
              (this._headers = {}),
              (this._loweredHeaders = {}),
              (this._mimeOverride = null),
              this._setReadyState(_.OPENED),
              (this._request = null),
              (this._response = null),
              (this.status = 0),
              (this.statusText = ""),
              (this._responseParts = []),
              (this._responseHeaders = null),
              (this._loadedBytes = 0),
              (this._totalBytes = 0),
              (this._lengthComputable = !1);
          }),
          (_.prototype.setRequestHeader = function (e, t) {
            if (this.readyState !== _.OPENED)
              throw new _.InvalidStateError("XHR readyState must be OPENED");
            var r = e.toLowerCase();
            this._restrictedHeaders[r] ||
              /^sec-/.test(r) ||
              /^proxy-/.test(r) ||
              ((t = t.toString()),
              null != this._loweredHeaders[r]
                ? ((e = this._loweredHeaders[r]),
                  (this._headers[e] = this._headers[e] + ", " + t))
                : ((this._loweredHeaders[r] = e), (this._headers[e] = t)));
          }),
          (_.prototype.send = function (e) {
            if (this.readyState !== _.OPENED)
              throw new _.InvalidStateError("XHR readyState must be OPENED");
            if (this._request)
              throw new _.InvalidStateError("send() already called");
            switch (this._url.protocol) {
              case "file:":
                return this._sendFile(e);
              case "http:":
              case "https:":
                return this._sendHttp(e);
              default:
                throw new _.NetworkError(
                  "Unsupported protocol " + this._url.protocol
                );
            }
          }),
          (_.prototype.abort = function () {
            null != this._request &&
              (this._request.abort(),
              this._setError(),
              this._dispatchProgress("abort"),
              this._dispatchProgress("loadend"));
          }),
          (_.prototype.getResponseHeader = function (e) {
            if (null == this._responseHeaders || null == e) return null;
            var t = e.toLowerCase();
            return this._responseHeaders.hasOwnProperty(t)
              ? this._responseHeaders[e.toLowerCase()]
              : null;
          }),
          (_.prototype.getAllResponseHeaders = function () {
            var e = this;
            return null == this._responseHeaders
              ? ""
              : Object.keys(this._responseHeaders)
                  .map(function (t) {
                    return t + ": " + e._responseHeaders[t];
                  })
                  .join("\r\n");
          }),
          (_.prototype.overrideMimeType = function (e) {
            if (this.readyState === _.LOADING || this.readyState === _.DONE)
              throw new _.InvalidStateError(
                "overrideMimeType() not allowed in LOADING or DONE"
              );
            this._mimeOverride = e.toLowerCase();
          }),
          (_.prototype.nodejsSet = function (e) {
            if (
              ((this.nodejsHttpAgent = e.httpAgent || this.nodejsHttpAgent),
              (this.nodejsHttpsAgent = e.httpsAgent || this.nodejsHttpsAgent),
              e.hasOwnProperty("baseUrl"))
            ) {
              if (null != e.baseUrl && !l.parse(e.baseUrl, !1, !0).protocol)
                throw new _.SyntaxError("baseUrl must be an absolute URL");
              this.nodejsBaseUrl = e.baseUrl;
            }
          }),
          (_.nodejsSet = function (e) {
            _.prototype.nodejsSet(e);
          }),
          (_.prototype._setReadyState = function (e) {
            (this.readyState = e),
              this.dispatchEvent(new h.ProgressEvent("readystatechange"));
          }),
          (_.prototype._sendFile = function (e) {
            throw new Error("Protocol file: not implemented");
          }),
          (_.prototype._sendHttp = function (e) {
            if (this._sync)
              throw new Error("Synchronous XHR processing not implemented");
            (e =
              !e || ("GET" !== this._method && "HEAD" !== this._method)
                ? e || ""
                : null),
              this.upload._setData(e),
              this._finalizeHeaders(),
              this._sendHxxpRequest();
          }),
          (_.prototype._sendHxxpRequest = function () {
            var e = this;
            this.withCredentials &&
              ((t = _.cookieJar
                .getCookies(
                  g.CookieAccessInfo(
                    this._url.hostname,
                    this._url.pathname,
                    "https:" === this._url.protocol
                  )
                )
                .toValueString()),
              (this._headers.cookie = this._headers.cookie2 = t));
            var t = (r =
                "http:" === this._url.protocol
                  ? [u, this.nodejsHttpAgent]
                  : [c, this.nodejsHttpsAgent])[0],
              r = r[1],
              n = t.request.bind(t)({
                hostname: this._url.hostname,
                port: +this._url.port,
                path: this._url.path,
                auth: this._url.auth,
                method: this._method,
                headers: this._headers,
                agent: r,
              });
            (this._request = n),
              this.timeout &&
                n.setTimeout(this.timeout, function () {
                  return e._onHttpTimeout(n);
                }),
              n.on("response", function (t) {
                return e._onHttpResponse(n, t);
              }),
              n.on("error", function (t) {
                return e._onHttpRequestError(n, t);
              }),
              this.upload._startUpload(n),
              this._request === n && this._dispatchProgress("loadstart");
          }),
          (_.prototype._finalizeHeaders = function () {
            (this._headers = a(
              {},
              this._headers,
              {
                Connection: "keep-alive",
                Host: this._url.host,
                "User-Agent": this._userAgent,
              },
              this._anonymous ? { Referer: "about:blank" } : {}
            )),
              this.upload._finalizeHeaders(this._headers, this._loweredHeaders);
          }),
          (_.prototype._onHttpResponse = function (e, t) {
            var r = this;
            if (this._request === e) {
              if (
                (this.withCredentials &&
                  (t.headers["set-cookie"] || t.headers["set-cookie2"]) &&
                  _.cookieJar.setCookies(
                    t.headers["set-cookie"] || t.headers["set-cookie2"]
                  ),
                0 <= [301, 302, 303, 307, 308].indexOf(t.statusCode))
              )
                return (
                  (this._url = this._parseUrl(t.headers.location)),
                  (this._method = "GET"),
                  this._loweredHeaders["content-type"] &&
                    (delete this._headers[this._loweredHeaders["content-type"]],
                    delete this._loweredHeaders["content-type"]),
                  null != this._headers["Content-Type"] &&
                    delete this._headers["Content-Type"],
                  delete this._headers["Content-Length"],
                  this.upload._reset(),
                  this._finalizeHeaders(),
                  void this._sendHxxpRequest()
                );
              (this._response = t),
                this._response.on("data", function (e) {
                  return r._onHttpResponseData(t, e);
                }),
                this._response.on("end", function () {
                  return r._onHttpResponseEnd(t);
                }),
                this._response.on("close", function () {
                  return r._onHttpResponseClose(t);
                }),
                (this.responseUrl = this._url.href.split("#")[0]),
                (this.status = t.statusCode),
                (this.statusText = u.STATUS_CODES[this.status]),
                this._parseResponseHeaders(t),
                (e = this._responseHeaders["content-length"] || ""),
                (this._totalBytes = +e),
                (this._lengthComputable = !!e),
                this._setReadyState(_.HEADERS_RECEIVED);
            }
          }),
          (_.prototype._onHttpResponseData = function (e, t) {
            this._response === e &&
              (this._responseParts.push(new n(t)),
              (this._loadedBytes += t.length),
              this.readyState !== _.LOADING && this._setReadyState(_.LOADING),
              this._dispatchProgress("progress"));
          }),
          (_.prototype._onHttpResponseEnd = function (e) {
            this._response === e &&
              (this._parseResponse(),
              (this._request = null),
              (this._response = null),
              this._setReadyState(_.DONE),
              this._dispatchProgress("load"),
              this._dispatchProgress("loadend"));
          }),
          (_.prototype._onHttpResponseClose = function (e) {
            this._response === e &&
              ((e = this._request),
              this._setError(),
              e.abort(),
              this._setReadyState(_.DONE),
              this._dispatchProgress("error"),
              this._dispatchProgress("loadend"));
          }),
          (_.prototype._onHttpTimeout = function (e) {
            this._request === e &&
              (this._setError(),
              e.abort(),
              this._setReadyState(_.DONE),
              this._dispatchProgress("timeout"),
              this._dispatchProgress("loadend"));
          }),
          (_.prototype._onHttpRequestError = function (e, t) {
            this._request === e &&
              (this._setError(),
              e.abort(),
              this._setReadyState(_.DONE),
              this._dispatchProgress("error"),
              this._dispatchProgress("loadend"));
          }),
          (_.prototype._dispatchProgress = function (e) {
            ((e = new _.ProgressEvent(e)).lengthComputable =
              this._lengthComputable),
              (e.loaded = this._loadedBytes),
              (e.total = this._totalBytes),
              this.dispatchEvent(e);
          }),
          (_.prototype._setError = function () {
            (this._request = null),
              (this._response = null),
              (this._responseHeaders = null),
              (this._responseParts = null);
          }),
          (_.prototype._parseUrl = function (e, t, r) {
            var n =
                null == this.nodejsBaseUrl
                  ? e
                  : l.resolve(this.nodejsBaseUrl, e),
              i = l.parse(n, !1, !0);
            return (
              (i.hash = null),
              (n = (e = (i.auth || "").split(":"))[0]),
              (e = e[1]),
              (n || e || t || r) &&
                (i.auth = (t || n || "") + ":" + (r || e || "")),
              i
            );
          }),
          (_.prototype._parseResponseHeaders = function (e) {
            for (var t in ((this._responseHeaders = {}), e.headers)) {
              var r = t.toLowerCase();
              this._privateHeaders[r] ||
                (this._responseHeaders[r] = e.headers[t]);
            }
            null != this._mimeOverride &&
              (this._responseHeaders["content-type"] = this._mimeOverride);
          }),
          (_.prototype._parseResponse = function () {
            var e = n.concat(this._responseParts);
            switch (((this._responseParts = null), this.responseType)) {
              case "json":
                this.responseText = null;
                try {
                  this.response = JSON.parse(e.toString("utf-8"));
                } catch (t) {
                  this.response = null;
                }
                return;
              case "buffer":
                return (this.responseText = null), void (this.response = e);
              case "arraybuffer":
                this.responseText = null;
                for (
                  var t = new ArrayBuffer(e.length),
                    r = new Uint8Array(t),
                    i = 0;
                  i < e.length;
                  i++
                )
                  r[i] = e[i];
                return void (this.response = t);
              default:
                try {
                  this.responseText = e.toString(this._parseResponseEncoding());
                } catch (t) {
                  this.responseText = e.toString("binary");
                }
                this.response = this.responseText;
            }
          }),
          (_.prototype._parseResponseEncoding = function () {
            return (
              /;\s*charset=(.*)$/.exec(
                this._responseHeaders["content-type"] || ""
              )[1] || "utf-8"
            );
          }),
          (_.ProgressEvent = h.ProgressEvent),
          (_.InvalidStateError = d.InvalidStateError),
          (_.NetworkError = d.NetworkError),
          (_.SecurityError = d.SecurityError),
          (_.SyntaxError = d.SyntaxError),
          (_.XMLHttpRequestUpload = v.XMLHttpRequestUpload),
          (_.UNSENT = 0),
          (_.OPENED = 1),
          (_.HEADERS_RECEIVED = 2),
          (_.LOADING = 3),
          (_.DONE = 4),
          (_.cookieJar = g.CookieJar()),
          (d = _);
        function _(t) {
          void 0 === t && (t = {});
          var r = s.call(this) || this;
          return (
            (r.UNSENT = _.UNSENT),
            (r.OPENED = _.OPENED),
            (r.HEADERS_RECEIVED = _.HEADERS_RECEIVED),
            (r.LOADING = _.LOADING),
            (r.DONE = _.DONE),
            (r.onreadystatechange = null),
            (r.readyState = _.UNSENT),
            (r.response = null),
            (r.responseText = ""),
            (r.responseType = ""),
            (r.status = 0),
            (r.statusText = ""),
            (r.timeout = 0),
            (r.upload = new v.XMLHttpRequestUpload()),
            (r.responseUrl = ""),
            (r.withCredentials = !1),
            (r._method = null),
            (r._url = null),
            (r._sync = !1),
            (r._headers = {}),
            (r._loweredHeaders = {}),
            (r._mimeOverride = null),
            (r._request = null),
            (r._response = null),
            (r._responseParts = null),
            (r._responseHeaders = null),
            (r._aborting = null),
            (r._error = null),
            (r._loadedBytes = 0),
            (r._totalBytes = 0),
            (r._lengthComputable = !1),
            (r._restrictedMethods = { CONNECT: !0, TRACE: !0, TRACK: !0 }),
            (r._restrictedHeaders = {
              "accept-charset": !0,
              "accept-encoding": !0,
              "access-control-request-headers": !0,
              "access-control-request-method": !0,
              connection: !0,
              "content-length": !0,
              cookie: !0,
              cookie2: !0,
              date: !0,
              dnt: !0,
              expect: !0,
              host: !0,
              "keep-alive": !0,
              origin: !0,
              referer: !0,
              te: !0,
              trailer: !0,
              "transfer-encoding": !0,
              upgrade: !0,
              "user-agent": !0,
              via: !0,
            }),
            (r._privateHeaders = { "set-cookie": !0, "set-cookie2": !0 }),
            (r._userAgent =
              "Mozilla/5.0 (" +
              f.type() +
              " " +
              f.arch() +
              ") node.js/" +
              e.versions.node +
              " v8/" +
              e.versions.v8),
            (r._anonymous = t.anon || !1),
            r
          );
        }
        ((t.XMLHttpRequest = d).prototype.nodejsHttpAgent = u.globalAgent),
          (d.prototype.nodejsHttpsAgent = c.globalAgent),
          (d.prototype.nodejsBaseUrl = null);
      }.call(this, r(162), r(532).Buffer));
    },
    1545: function (e, t, r) {
      (function (t, n, i) {
        var o = r(1341),
          a = r(300),
          s = r(1342),
          u = r(1156),
          c = r(1546),
          f = s.IncomingMessage,
          l = s.readyStates;
        (s = e.exports =
          function (e) {
            var r = this;
            u.Writable.call(r),
              (r._opts = e),
              (r._body = []),
              (r._headers = {}),
              e.auth &&
                r.setHeader(
                  "Authorization",
                  "Basic " + new t(e.auth).toString("base64")
                ),
              Object.keys(e.headers).forEach(function (t) {
                r.setHeader(t, e.headers[t]);
              });
            var n,
              i = !0;
            if (
              "disable-fetch" === e.mode ||
              ("requestTimeout" in e && !o.abortController)
            )
              n = !(i = !1);
            else if ("prefer-streaming" === e.mode) n = !1;
            else if ("allow-wrong-content-type" === e.mode)
              n = !o.overrideMimeType;
            else {
              if (e.mode && "default" !== e.mode && "prefer-fast" !== e.mode)
                throw new Error("Invalid value for opts.mode");
              n = !0;
            }
            (r._mode =
              ((n = n),
              (i = i),
              o.fetch && i
                ? "fetch"
                : o.mozchunkedarraybuffer
                ? "moz-chunked-arraybuffer"
                : o.msstream
                ? "ms-stream"
                : o.arraybuffer && n
                ? "arraybuffer"
                : o.vbArray && n
                ? "text:vbarray"
                : "text")),
              (r._fetchTimer = null),
              r.on("finish", function () {
                r._onFinish();
              });
          }),
          a(s, u.Writable),
          (s.prototype.setHeader = function (e, t) {
            var r = e.toLowerCase();
            -1 === h.indexOf(r) && (this._headers[r] = { name: e, value: t });
          }),
          (s.prototype.getHeader = function (e) {
            return (e = this._headers[e.toLowerCase()]) ? e.value : null;
          }),
          (s.prototype.removeHeader = function (e) {
            delete this._headers[e.toLowerCase()];
          }),
          (s.prototype._onFinish = function () {
            var e = this;
            if (!e._destroyed) {
              var r = e._opts,
                a = e._headers,
                s = null;
              "GET" !== r.method &&
                "HEAD" !== r.method &&
                (s = o.arraybuffer
                  ? c(t.concat(e._body))
                  : o.blobConstructor
                  ? new n.Blob(
                      e._body.map(function (e) {
                        return c(e);
                      }),
                      { type: (a["content-type"] || {}).value || "" }
                    )
                  : t.concat(e._body).toString());
              var u = [];
              if (
                (Object.keys(a).forEach(function (e) {
                  var t = a[e].name;
                  e = a[e].value;
                  Array.isArray(e)
                    ? e.forEach(function (e) {
                        u.push([t, e]);
                      })
                    : u.push([t, e]);
                }),
                "fetch" === e._mode)
              ) {
                var f,
                  h = null;
                o.abortController &&
                  ((h = (f = new AbortController()).signal),
                  (e._fetchAbortController = f),
                  "requestTimeout" in r &&
                    0 !== r.requestTimeout &&
                    (e._fetchTimer = n.setTimeout(function () {
                      e.emit("requestTimeout"),
                        e._fetchAbortController &&
                          e._fetchAbortController.abort();
                    }, r.requestTimeout))),
                  n
                    .fetch(e._opts.url, {
                      method: e._opts.method,
                      headers: u,
                      body: s || void 0,
                      mode: "cors",
                      credentials: r.withCredentials
                        ? "include"
                        : "same-origin",
                      signal: h,
                    })
                    .then(
                      function (t) {
                        (e._fetchResponse = t), e._connect();
                      },
                      function (t) {
                        n.clearTimeout(e._fetchTimer),
                          e._destroyed || e.emit("error", t);
                      }
                    );
              } else {
                var d = (e._xhr = new n.XMLHttpRequest());
                try {
                  d.open(e._opts.method, e._opts.url, !0);
                } catch (r) {
                  return void i.nextTick(function () {
                    e.emit("error", r);
                  });
                }
                "responseType" in d && (d.responseType = e._mode.split(":")[0]),
                  "withCredentials" in d &&
                    (d.withCredentials = !!r.withCredentials),
                  "text" === e._mode &&
                    "overrideMimeType" in d &&
                    d.overrideMimeType("text/plain; charset=x-user-defined"),
                  "requestTimeout" in r &&
                    ((d.timeout = r.requestTimeout),
                    (d.ontimeout = function () {
                      e.emit("requestTimeout");
                    })),
                  u.forEach(function (e) {
                    d.setRequestHeader(e[0], e[1]);
                  }),
                  (e._response = null),
                  (d.onreadystatechange = function () {
                    switch (d.readyState) {
                      case l.LOADING:
                      case l.DONE:
                        e._onXHRProgress();
                    }
                  }),
                  "moz-chunked-arraybuffer" === e._mode &&
                    (d.onprogress = function () {
                      e._onXHRProgress();
                    }),
                  (d.onerror = function () {
                    e._destroyed || e.emit("error", new Error("XHR error"));
                  });
                try {
                  d.send(s);
                } catch (r) {
                  return void i.nextTick(function () {
                    e.emit("error", r);
                  });
                }
              }
            }
          }),
          (s.prototype._onXHRProgress = function () {
            !(function (e) {
              try {
                var t = e.status;
                return null !== t && 0 !== t;
              } catch (e) {
                return;
              }
            })(this._xhr) ||
              this._destroyed ||
              (this._response || this._connect(),
              this._response._onXHRProgress());
          }),
          (s.prototype._connect = function () {
            var e = this;
            e._destroyed ||
              ((e._response = new f(
                e._xhr,
                e._fetchResponse,
                e._mode,
                e._fetchTimer
              )),
              e._response.on("error", function (t) {
                e.emit("error", t);
              }),
              e.emit("response", e._response));
          }),
          (s.prototype._write = function (e, t, r) {
            this._body.push(e), r();
          }),
          (s.prototype.abort = s.prototype.destroy =
            function () {
              (this._destroyed = !0),
                n.clearTimeout(this._fetchTimer),
                this._response && (this._response._destroyed = !0),
                this._xhr
                  ? this._xhr.abort()
                  : this._fetchAbortController &&
                    this._fetchAbortController.abort();
            }),
          (s.prototype.end = function (e, t, r) {
            "function" == typeof e && ((r = e), (e = void 0)),
              u.Writable.prototype.end.call(this, e, t, r);
          }),
          (s.prototype.flushHeaders = function () {}),
          (s.prototype.setTimeout = function () {}),
          (s.prototype.setNoDelay = function () {}),
          (s.prototype.setSocketKeepAlive = function () {});
        var h = [
          "accept-charset",
          "accept-encoding",
          "access-control-request-headers",
          "access-control-request-method",
          "connection",
          "content-length",
          "cookie",
          "cookie2",
          "date",
          "dnt",
          "expect",
          "host",
          "keep-alive",
          "origin",
          "referer",
          "te",
          "trailer",
          "transfer-encoding",
          "upgrade",
          "via",
        ];
      }.call(this, r(532).Buffer, r(96), r(162)));
    },
    1546: function (e, t, r) {
      var n = r(532).Buffer;
      e.exports = function (e) {
        if (e instanceof Uint8Array) {
          if (0 === e.byteOffset && e.byteLength === e.buffer.byteLength)
            return e.buffer;
          if ("function" == typeof e.buffer.slice)
            return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
        }
        if (n.isBuffer(e)) {
          for (
            var t = new Uint8Array(e.length), r = e.length, i = 0;
            i < r;
            i++
          )
            t[i] = e[i];
          return t.buffer;
        }
        throw new Error("Argument must be a Buffer");
      };
    },
    1547: function (e, t) {
      e.exports = {
        100: "Continue",
        101: "Switching Protocols",
        102: "Processing",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        207: "Multi-Status",
        208: "Already Reported",
        226: "IM Used",
        300: "Multiple Choices",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        307: "Temporary Redirect",
        308: "Permanent Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Payload Too Large",
        414: "URI Too Long",
        415: "Unsupported Media Type",
        416: "Range Not Satisfiable",
        417: "Expectation Failed",
        418: "I'm a teapot",
        421: "Misdirected Request",
        422: "Unprocessable Entity",
        423: "Locked",
        424: "Failed Dependency",
        425: "Unordered Collection",
        426: "Upgrade Required",
        428: "Precondition Required",
        429: "Too Many Requests",
        431: "Request Header Fields Too Large",
        451: "Unavailable For Legal Reasons",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported",
        506: "Variant Also Negotiates",
        507: "Insufficient Storage",
        508: "Loop Detected",
        509: "Bandwidth Limit Exceeded",
        510: "Not Extended",
        511: "Network Authentication Required",
      };
    },
    1548: function (e, t, r) {
      var n,
        i = r(1340),
        o = r(533),
        a = e.exports;
      for (n in i) i.hasOwnProperty(n) && (a[n] = i[n]);
      function s(e) {
        if (
          ((e = "string" == typeof e ? o.parse(e) : e).protocol ||
            (e.protocol = "https:"),
          "https:" !== e.protocol)
        )
          throw new Error(
            'Protocol "' + e.protocol + '" not supported. Expected "https:"'
          );
        return e;
      }
      (a.request = function (e, t) {
        return (e = s(e)), i.request.call(this, e, t);
      }),
        (a.get = function (e, t) {
          return (e = s(e)), i.get.call(this, e, t);
        });
    },
    1549: function (e, t) {
      (t.endianness = function () {
        return "LE";
      }),
        (t.hostname = function () {
          return "undefined" != typeof location ? location.hostname : "";
        }),
        (t.loadavg = function () {
          return [];
        }),
        (t.uptime = function () {
          return 0;
        }),
        (t.freemem = function () {
          return Number.MAX_VALUE;
        }),
        (t.totalmem = function () {
          return Number.MAX_VALUE;
        }),
        (t.cpus = function () {
          return [];
        }),
        (t.type = function () {
          return "Browser";
        }),
        (t.release = function () {
          return "undefined" != typeof navigator ? navigator.appVersion : "";
        }),
        (t.networkInterfaces = t.getNetworkInterfaces =
          function () {
            return {};
          }),
        (t.arch = function () {
          return "javascript";
        }),
        (t.platform = function () {
          return "browser";
        }),
        (t.tmpdir = t.tmpDir =
          function () {
            return "/tmp";
          }),
        (t.EOL = "\n"),
        (t.homedir = function () {
          return "/";
        });
    },
    1550: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ProgressEvent = function (e) {
          (this.type = e),
            (this.bubbles = !1),
            (this.cancelable = !1),
            (this.loaded = 0),
            (this.lengthComputable = !1),
            (this.total = 0);
        });
    },
    1551: function (e, t, r) {
      "use strict";
      var n,
        i =
          (this && this.__extends) ||
          ((n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            }),
          function (e, t) {
            function r() {
              this.constructor = e;
            }
            n(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((r.prototype = t.prototype), new r()));
          });
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o,
        a = (i(s, (o = Error)), s);
      function s() {
        return (null !== o && o.apply(this, arguments)) || this;
      }
      t.SecurityError = a;
      var u;
      i(c, (u = Error)), (a = c);
      function c() {
        return (null !== u && u.apply(this, arguments)) || this;
      }
      t.InvalidStateError = a;
      var f;
      i(l, (f = Error)), (a = l);
      function l() {
        return (null !== f && f.apply(this, arguments)) || this;
      }
      t.NetworkError = a;
      var h;
      i(d, (h = Error)), (i = d);
      function d() {
        return (null !== h && h.apply(this, arguments)) || this;
      }
      t.SyntaxError = i;
    },
    1552: function (e, t, r) {
      "use strict";
      (function (e) {
        var n,
          i =
            (this && this.__extends) ||
            ((n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
              }),
            function (e, t) {
              function r() {
                this.constructor = e;
              }
              n(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((r.prototype = t.prototype), new r()));
            });
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o,
          a = r(1232);
        i(s, (o = a.XMLHttpRequestEventTarget)),
          (s.prototype._reset = function () {
            (this._contentType = null), (this._body = null);
          }),
          (s.prototype._setData = function (t) {
            if (null != t)
              if ("string" == typeof t)
                0 !== t.length &&
                  (this._contentType = "text/plain;charset=UTF-8"),
                  (this._body = new e(t, "utf-8"));
              else if (e.isBuffer(t)) this._body = t;
              else if (t instanceof ArrayBuffer) {
                for (
                  var r = new e(t.byteLength), n = new Uint8Array(t), i = 0;
                  i < t.byteLength;
                  i++
                )
                  r[i] = n[i];
                this._body = r;
              } else {
                if (!(t.buffer && t.buffer instanceof ArrayBuffer))
                  throw new Error("Unsupported send() data " + t);
                r = new e(t.byteLength);
                var o = t.byteOffset;
                for (n = new Uint8Array(t.buffer), i = 0; i < t.byteLength; i++)
                  r[i] = n[i + o];
                this._body = r;
              }
          }),
          (s.prototype._finalizeHeaders = function (e, t) {
            this._contentType &&
              !t["content-type"] &&
              (e["Content-Type"] = this._contentType),
              this._body &&
                (e["Content-Length"] = this._body.length.toString());
          }),
          (s.prototype._startUpload = function (e) {
            this._body && e.write(this._body), e.end();
          }),
          (i = s);
        function s() {
          var e = o.call(this) || this;
          return (e._contentType = null), (e._body = null), e._reset(), e;
        }
        t.XMLHttpRequestUpload = i;
      }.call(this, r(532).Buffer));
    },
    1553: function (e, t) {
      !(function () {
        "use strict";
        function e(t, r, n, i) {
          return this instanceof e
            ? ((this.domain = t || void 0),
              (this.path = r || "/"),
              (this.secure = !!n),
              (this.script = !!i),
              this)
            : new e(t, r, n, i);
        }
        function r(e, t, n) {
          return e instanceof r
            ? e
            : this instanceof r
            ? ((this.name = null),
              (this.value = null),
              (this.expiration_date = 1 / 0),
              (this.path = String(n || "/")),
              (this.explicit_path = !1),
              (this.domain = t || null),
              (this.explicit_domain = !1),
              (this.secure = !1),
              (this.noscript = !1),
              e && this.parse(e, t, n),
              this)
            : new r(e, t, n);
        }
        (e.All = Object.freeze(Object.create(null))),
          (t.CookieAccessInfo = e),
          ((t.Cookie = r).prototype.toString = function () {
            var e = [this.name + "=" + this.value];
            return (
              this.expiration_date !== 1 / 0 &&
                e.push(
                  "expires=" + new Date(this.expiration_date).toGMTString()
                ),
              this.domain && e.push("domain=" + this.domain),
              this.path && e.push("path=" + this.path),
              this.secure && e.push("secure"),
              this.noscript && e.push("httponly"),
              e.join("; ")
            );
          }),
          (r.prototype.toValueString = function () {
            return this.name + "=" + this.value;
          });
        var n = /[:](?=\s*[a-zA-Z0-9_\-]+\s*[=])/g;
        (r.prototype.parse = function (e, t, n) {
          if (this instanceof r) {
            var i,
              o = e.split(";").filter(function (e) {
                return !!e;
              }),
              a = o[0].match(/([^=]+)=([\s\S]*)/);
            if (!a) return;
            var s = a[1],
              u = a[2];
            if ("string" != typeof s || 0 === s.length || "string" != typeof u)
              return;
            for (this.name = s, this.value = u, i = 1; i < o.length; i += 1)
              switch (
                ((s = (a = o[i].match(/([^=]+)(?:=([\s\S]*))?/))[1]
                  .trim()
                  .toLowerCase()),
                (u = a[2]),
                s)
              ) {
                case "httponly":
                  this.noscript = !0;
                  break;
                case "expires":
                  this.expiration_date = u ? Number(Date.parse(u)) : 1 / 0;
                  break;
                case "path":
                  (this.path = u ? u.trim() : ""), (this.explicit_path = !0);
                  break;
                case "domain":
                  (this.domain = u ? u.trim() : ""),
                    (this.explicit_domain = !!this.domain);
                  break;
                case "secure":
                  this.secure = !0;
              }
            return (
              this.explicit_path || (this.path = n || "/"),
              this.explicit_domain || (this.domain = t),
              this
            );
          }
          return new r().parse(e, t, n);
        }),
          (r.prototype.matches = function (t) {
            return (
              t === e.All ||
              !(
                (this.noscript && t.script) ||
                (this.secure && !t.secure) ||
                !this.collidesWith(t)
              )
            );
          }),
          (r.prototype.collidesWith = function (e) {
            if ((this.path && !e.path) || (this.domain && !e.domain)) return !1;
            if (this.path && 0 !== e.path.indexOf(this.path)) return !1;
            if (this.explicit_path && 0 !== e.path.indexOf(this.path))
              return !1;
            var t = e.domain && e.domain.replace(/^[\.]/, ""),
              r = this.domain && this.domain.replace(/^[\.]/, "");
            return (
              r === t ||
              !r ||
              (!!this.explicit_domain &&
                -1 !== (e = t.indexOf(r)) &&
                e === t.length - r.length)
            );
          }),
          ((t.CookieJar = function e() {
            var t, n;
            return this instanceof e
              ? ((t = Object.create(null)),
                (this.setCookie = function (e, i, o) {
                  var a,
                    s = (e = new r(e, i, o)).expiration_date <= Date.now();
                  if (void 0 === t[e.name])
                    return !s && ((t[e.name] = [e]), t[e.name]);
                  for (n = t[e.name], a = 0; a < n.length; a += 1)
                    if (n[a].collidesWith(e))
                      return s
                        ? (n.splice(a, 1),
                          0 === n.length && delete t[e.name],
                          !1)
                        : (n[a] = e);
                  return !s && (n.push(e), e);
                }),
                (this.getCookie = function (e, r) {
                  var i, o;
                  if ((n = t[e]))
                    for (o = 0; o < n.length; o += 1)
                      if ((i = n[o]).expiration_date <= Date.now())
                        0 === n.length && delete t[i.name];
                      else if (i.matches(r)) return i;
                }),
                (this.getCookies = function (e) {
                  var r,
                    n,
                    i = [];
                  for (r in t) (n = this.getCookie(r, e)) && i.push(n);
                  return (
                    (i.toString = function () {
                      return i.join(":");
                    }),
                    (i.toValueString = function () {
                      return i
                        .map(function (e) {
                          return e.toValueString();
                        })
                        .join(";");
                    }),
                    i
                  );
                }),
                this)
              : new e();
          }).prototype.setCookies = function (e, t, i) {
            var o,
              a,
              s = [];
            for (
              e = (e = Array.isArray(e) ? e : e.split(n)).map(function (e) {
                return new r(e, t, i);
              }),
                o = 0;
              o < e.length;
              o += 1
            )
              (a = e[o]), this.setCookie(a, t, i) && s.push(a);
            return s;
          });
      })();
    },
    1554: function (e, t, r) {
      var n = r(368).EventEmitter,
        i = r(1134).inherits,
        o = r(1160),
        a = r(1347),
        s = r(1574),
        u = r(1583),
        c = r(1586),
        f = (r(1354), r(1237));
      function l(e) {
        n.call(this), this.setMaxListeners(30), (e = e || {});
        var t = { sendAsync: this._handleAsync.bind(this) };
        t = e.blockTrackerProvider || t;
        (this._blockTracker =
          e.blockTracker ||
          new a({
            provider: t,
            pollingInterval: e.pollingInterval || 4e3,
            setSkipCacheFlag: !0,
          })),
          (this._ready = new c()),
          (this.currentBlock = null),
          (this._providers = []);
      }
      i((e.exports = l), n),
        (l.prototype.start = function () {
          var e = this,
            t = this;
          t._ready.go(),
            t._blockTracker.on("latest", function (r) {
              t._getBlockByNumberWithRetry(r, function (r, n) {
                r
                  ? e.emit("error", r)
                  : n
                  ? ((r = n),
                    (r = {
                      number: o.toBuffer(r.number),
                      hash: o.toBuffer(r.hash),
                      parentHash: o.toBuffer(r.parentHash),
                      nonce: o.toBuffer(r.nonce),
                      mixHash: o.toBuffer(r.mixHash),
                      sha3Uncles: o.toBuffer(r.sha3Uncles),
                      logsBloom: o.toBuffer(r.logsBloom),
                      transactionsRoot: o.toBuffer(r.transactionsRoot),
                      stateRoot: o.toBuffer(r.stateRoot),
                      receiptsRoot: o.toBuffer(r.receiptRoot || r.receiptsRoot),
                      miner: o.toBuffer(r.miner),
                      difficulty: o.toBuffer(r.difficulty),
                      totalDifficulty: o.toBuffer(r.totalDifficulty),
                      size: o.toBuffer(r.size),
                      extraData: o.toBuffer(r.extraData),
                      gasLimit: o.toBuffer(r.gasLimit),
                      gasUsed: o.toBuffer(r.gasUsed),
                      timestamp: o.toBuffer(r.timestamp),
                      transactions: r.transactions,
                    }),
                    t._setCurrentBlock(r),
                    t.emit("rawBlock", n),
                    t.emit("latest", n))
                  : e.emit("error", new Error("Could not find block"));
              });
            }),
            t._blockTracker.on("sync", t.emit.bind(t, "sync")),
            t._blockTracker.on("error", t.emit.bind(t, "error")),
            (t._running = !0),
            t.emit("start");
        }),
        (l.prototype.stop = function () {
          this._blockTracker.removeAllListeners(),
            (this._running = !1),
            this.emit("stop");
        }),
        (l.prototype.isRunning = function () {
          return this._running;
        }),
        (l.prototype.addProvider = function (e, t) {
          "number" == typeof t
            ? this._providers.splice(t, 0, e)
            : this._providers.push(e),
            e.setEngine(this);
        }),
        (l.prototype.removeProvider = function (e) {
          if ((e = this._providers.indexOf(e)) < 0)
            throw new Error("Provider not found.");
          this._providers.splice(e, 1);
        }),
        (l.prototype.send = function (e) {
          throw new Error(
            "Web3ProviderEngine does not support synchronous requests."
          );
        }),
        (l.prototype.sendAsync = function (e, t) {
          var r = this;
          r._ready.await(function () {
            Array.isArray(e)
              ? s(e, r._handleAsync.bind(r), t)
              : r._handleAsync(e, t);
          });
        }),
        (l.prototype._getBlockByNumberWithRetry = function (e, t) {
          var r = this,
            n = 5;
          function i() {
            r._getBlockByNumber(e, o);
          }
          function o(e, r) {
            return e
              ? t(e)
              : r
              ? void t(null, r)
              : 0 < n
              ? (n--,
                void setTimeout(function () {
                  i();
                }, 1e3))
              : void t(null, null);
          }
          i();
        }),
        (l.prototype._getBlockByNumber = function (e, t) {
          (e = f({
            method: "eth_getBlockByNumber",
            params: [e, !1],
            skipCache: !0,
          })),
            this._handleAsync(e, function (e, r) {
              return e ? t(e) : t(null, r.result);
            });
        }),
        (l.prototype._handleAsync = function (e, t) {
          var r = this,
            n = -1,
            i = null,
            o = null,
            a = [];
          function s(r, n) {
            (o = r),
              (i = n),
              u(
                a,
                function (e, t) {
                  e ? e(o, i, t) : t();
                },
                function () {
                  var r = { id: e.id, jsonrpc: e.jsonrpc, result: i };
                  null != o
                    ? ((r.error = {
                        message: o.stack || o.message || o,
                        code: -32e3,
                      }),
                      t(o, r))
                    : t(null, r);
                }
              );
          }
          !(function t(i) {
            if (((n += 1), a.unshift(i), n >= r._providers.length))
              s(
                new Error(
                  'Request for method "' +
                    e.method +
                    '" not handled by any subprovider. Please check your subprovider configuration to ensure this method is handled.'
                )
              );
            else
              try {
                r._providers[n].handleRequest(e, t, s);
              } catch (t) {
                s(t);
              }
          })();
        }),
        (l.prototype._setCurrentBlock = function (e) {
          (this.currentBlock = e), this.emit("block", e);
        });
    },
    1557: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.createHashFunction = function (t) {
            return function (r) {
              var n = t();
              return n.update(r), e.from(n.digest());
            };
          });
      }.call(this, r(532).Buffer));
    },
    1558: function (e, t, r) {
      e.exports = r(1559)(r(1562));
    },
    1559: function (e, t, r) {
      var n = r(1560),
        i = r(1561);
      e.exports = function (e) {
        var t = n(e),
          r = i(e);
        return function (e, n) {
          switch ("string" == typeof e ? e.toLowerCase() : e) {
            case "keccak224":
              return new t(1152, 448, null, 224, n);
            case "keccak256":
              return new t(1088, 512, null, 256, n);
            case "keccak384":
              return new t(832, 768, null, 384, n);
            case "keccak512":
              return new t(576, 1024, null, 512, n);
            case "sha3-224":
              return new t(1152, 448, 6, 224, n);
            case "sha3-256":
              return new t(1088, 512, 6, 256, n);
            case "sha3-384":
              return new t(832, 768, 6, 384, n);
            case "sha3-512":
              return new t(576, 1024, 6, 512, n);
            case "shake128":
              return new r(1344, 256, 31, n);
            case "shake256":
              return new r(1088, 512, 31, n);
            default:
              throw new Error("Invald algorithm: " + e);
          }
        };
      };
    },
    1560: function (e, t, r) {
      (function (t) {
        var n = r(366),
          i = r(367),
          o = r(1107),
          a = r(1108),
          s = r(1155).Transform;
        e.exports = function (e) {
          return (function () {
            "use strict";
            o(u, s);
            var r = a(u);
            function u(t, i, o, a, s) {
              var c;
              return (
                n(this, u),
                ((c = r.call(this, s))._rate = t),
                (c._capacity = i),
                (c._delimitedSuffix = o),
                (c._hashBitLength = a),
                (c._options = s),
                (c._state = new e()),
                c._state.initialize(t, i),
                (c._finalized = !1),
                c
              );
            }
            return (
              i(u, [
                {
                  key: "_transform",
                  value: function (e, t, r) {
                    var n = null;
                    try {
                      this.update(e, t);
                    } catch (e) {
                      n = e;
                    }
                    r(n);
                  },
                },
                {
                  key: "_flush",
                  value: function (e) {
                    var t = null;
                    try {
                      this.push(this.digest());
                    } catch (e) {
                      t = e;
                    }
                    e(t);
                  },
                },
                {
                  key: "update",
                  value: function (e, r) {
                    if (!t.isBuffer(e) && "string" != typeof e)
                      throw new TypeError("Data must be a string or a buffer");
                    if (this._finalized)
                      throw new Error("Digest already called");
                    return (
                      t.isBuffer(e) || (e = t.from(e, r)),
                      this._state.absorb(e),
                      this
                    );
                  },
                },
                {
                  key: "digest",
                  value: function (e) {
                    if (this._finalized)
                      throw new Error("Digest already called");
                    (this._finalized = !0),
                      this._delimitedSuffix &&
                        this._state.absorbLastFewBits(this._delimitedSuffix);
                    var t = this._state.squeeze(this._hashBitLength / 8);
                    return (
                      void 0 !== e && (t = t.toString(e)), this._resetState(), t
                    );
                  },
                },
                {
                  key: "_resetState",
                  value: function () {
                    return (
                      this._state.initialize(this._rate, this._capacity), this
                    );
                  },
                },
                {
                  key: "_clone",
                  value: function () {
                    var e = new u(
                      this._rate,
                      this._capacity,
                      this._delimitedSuffix,
                      this._hashBitLength,
                      this._options
                    );
                    return (
                      this._state.copy(e._state),
                      (e._finalized = this._finalized),
                      e
                    );
                  },
                },
              ]),
              u
            );
          })();
        };
      }.call(this, r(532).Buffer));
    },
    1561: function (e, t, r) {
      (function (t) {
        var n = r(366),
          i = r(367),
          o = r(1107),
          a = r(1108),
          s = r(1155).Transform;
        e.exports = function (e) {
          return (function () {
            "use strict";
            o(u, s);
            var r = a(u);
            function u(t, i, o, a) {
              var s;
              return (
                n(this, u),
                ((s = r.call(this, a))._rate = t),
                (s._capacity = i),
                (s._delimitedSuffix = o),
                (s._options = a),
                (s._state = new e()),
                s._state.initialize(t, i),
                (s._finalized = !1),
                s
              );
            }
            return (
              i(u, [
                {
                  key: "_transform",
                  value: function (e, t, r) {
                    var n = null;
                    try {
                      this.update(e, t);
                    } catch (e) {
                      n = e;
                    }
                    r(n);
                  },
                },
                { key: "_flush", value: function () {} },
                {
                  key: "_read",
                  value: function (e) {
                    this.push(this.squeeze(e));
                  },
                },
                {
                  key: "update",
                  value: function (e, r) {
                    if (!t.isBuffer(e) && "string" != typeof e)
                      throw new TypeError("Data must be a string or a buffer");
                    if (this._finalized)
                      throw new Error("Squeeze already called");
                    return (
                      t.isBuffer(e) || (e = t.from(e, r)),
                      this._state.absorb(e),
                      this
                    );
                  },
                },
                {
                  key: "squeeze",
                  value: function (e, t) {
                    return (
                      this._finalized ||
                        ((this._finalized = !0),
                        this._state.absorbLastFewBits(this._delimitedSuffix)),
                      (e = this._state.squeeze(e)),
                      void 0 !== t ? e.toString(t) : e
                    );
                  },
                },
                {
                  key: "_resetState",
                  value: function () {
                    return (
                      this._state.initialize(this._rate, this._capacity), this
                    );
                  },
                },
                {
                  key: "_clone",
                  value: function () {
                    var e = new u(
                      this._rate,
                      this._capacity,
                      this._delimitedSuffix,
                      this._options
                    );
                    return (
                      this._state.copy(e._state),
                      (e._finalized = this._finalized),
                      e
                    );
                  },
                },
              ]),
              u
            );
          })();
        };
      }.call(this, r(532).Buffer));
    },
    1562: function (e, t, r) {
      (function (t) {
        var n = r(1563);
        function i() {
          (this.state = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0,
          ]),
            (this.blockSize = null),
            (this.count = 0),
            (this.squeezing = !1);
        }
        (i.prototype.initialize = function (e, t) {
          for (var r = 0; r < 50; ++r) this.state[r] = 0;
          (this.blockSize = e / 8), (this.count = 0), (this.squeezing = !1);
        }),
          (i.prototype.absorb = function (e) {
            for (var t = 0; t < e.length; ++t)
              (this.state[~~(this.count / 4)] ^=
                e[t] << ((this.count % 4) * 8)),
                (this.count += 1),
                this.count === this.blockSize &&
                  (n.p1600(this.state), (this.count = 0));
          }),
          (i.prototype.absorbLastFewBits = function (e) {
            (this.state[~~(this.count / 4)] ^= e << ((this.count % 4) * 8)),
              0 != (128 & e) &&
                this.count === this.blockSize - 1 &&
                n.p1600(this.state),
              (this.state[~~((this.blockSize - 1) / 4)] ^=
                128 << (((this.blockSize - 1) % 4) * 8)),
              n.p1600(this.state),
              (this.count = 0),
              (this.squeezing = !0);
          }),
          (i.prototype.squeeze = function (e) {
            this.squeezing || this.absorbLastFewBits(1);
            for (var r = t.alloc(e), i = 0; i < e; ++i)
              (r[i] =
                (this.state[~~(this.count / 4)] >>> ((this.count % 4) * 8)) &
                255),
                (this.count += 1),
                this.count === this.blockSize &&
                  (n.p1600(this.state), (this.count = 0));
            return r;
          }),
          (i.prototype.copy = function (e) {
            for (var t = 0; t < 50; ++t) e.state[t] = this.state[t];
            (e.blockSize = this.blockSize),
              (e.count = this.count),
              (e.squeezing = this.squeezing);
          }),
          (e.exports = i);
      }.call(this, r(532).Buffer));
    },
    1563: function (e, t) {
      var r = [
        1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
        2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136,
        0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905,
        2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648,
        32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896,
        2147483648, 2147483649, 0, 2147516424, 2147483648,
      ];
      t.p1600 = function (e) {
        for (var t = 0; t < 24; ++t) {
          var n = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40],
            i = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41],
            o = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42],
            a = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43],
            s = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44],
            u = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45],
            c = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46],
            f = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47],
            l =
              ($ = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^
              ((o << 1) | (a >>> 31)),
            h =
              (Q = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^
              ((a << 1) | (o >>> 31)),
            d = e[0] ^ l,
            p = e[1] ^ h,
            v = e[10] ^ l,
            g = e[11] ^ h,
            _ = e[20] ^ l,
            m = e[21] ^ h,
            y = e[30] ^ l,
            w = e[31] ^ h,
            b = e[40] ^ l,
            E = e[41] ^ h,
            x = e[2] ^ (l = n ^ ((s << 1) | (u >>> 31))),
            S = e[3] ^ (h = i ^ ((u << 1) | (s >>> 31))),
            k = e[12] ^ l,
            R = e[13] ^ h,
            A = e[22] ^ l,
            M = e[23] ^ h,
            T = e[32] ^ l,
            C = e[33] ^ h,
            O = e[42] ^ l,
            P = e[43] ^ h,
            N = e[4] ^ (l = o ^ ((c << 1) | (f >>> 31))),
            I = e[5] ^ (h = a ^ ((f << 1) | (c >>> 31))),
            L = e[14] ^ l,
            B = e[15] ^ h,
            H = e[24] ^ l,
            U = e[25] ^ h,
            D = e[34] ^ l,
            j = e[35] ^ h,
            q = e[44] ^ l,
            K = e[45] ^ h,
            z = e[6] ^ (l = s ^ (($ << 1) | (Q >>> 31))),
            F = e[7] ^ (h = u ^ ((Q << 1) | ($ >>> 31))),
            W = e[16] ^ l,
            G = e[17] ^ h,
            V = e[26] ^ l,
            J = e[27] ^ h,
            Y = e[36] ^ l,
            Z = e[37] ^ h,
            X = e[46] ^ l,
            Q =
              ((o = e[47] ^ h),
              (a = e[8] ^ (l = c ^ ((n << 1) | (i >>> 31)))),
              (s = e[9] ^ (h = f ^ ((i << 1) | (n >>> 31)))),
              (u = e[18] ^ l),
              e[19] ^ h),
            $ = e[28] ^ l;
          (c = e[29] ^ h),
            (f = e[38] ^ l),
            (i = e[39] ^ h),
            (n = e[48] ^ l),
            (l = e[49] ^ h),
            (h = d),
            (d = p),
            (p = (g << 4) | (v >>> 28)),
            (v = (v << 4) | (g >>> 28)),
            (g = (_ << 3) | (m >>> 29)),
            (m = (m << 3) | (_ >>> 29)),
            (_ = (w << 9) | (y >>> 23)),
            (y = (y << 9) | (w >>> 23)),
            (w = (b << 18) | (E >>> 14)),
            (E = (E << 18) | (b >>> 14)),
            (b = (x << 1) | (S >>> 31)),
            (S = (S << 1) | (x >>> 31)),
            (x = (R << 12) | (k >>> 20)),
            (k = (k << 12) | (R >>> 20)),
            (R = (A << 10) | (M >>> 22)),
            (M = (M << 10) | (A >>> 22)),
            (A = (C << 13) | (T >>> 19)),
            (T = (T << 13) | (C >>> 19)),
            (C = (O << 2) | (P >>> 30)),
            (P = (P << 2) | (O >>> 30)),
            (O = (I << 30) | (N >>> 2)),
            (N = (N << 30) | (I >>> 2)),
            (I = (L << 6) | (B >>> 26)),
            (B = (B << 6) | (L >>> 26)),
            (L = (U << 11) | (H >>> 21)),
            (H = (H << 11) | (U >>> 21)),
            (U = (D << 15) | (j >>> 17)),
            (j = (j << 15) | (D >>> 17)),
            (D = (K << 29) | (q >>> 3)),
            (q = (q << 29) | (K >>> 3)),
            (K = (z << 28) | (F >>> 4)),
            (F = (F << 28) | (z >>> 4)),
            (z = (G << 23) | (W >>> 9)),
            (W = (W << 23) | (G >>> 9)),
            (G = (V << 25) | (J >>> 7)),
            (J = (J << 25) | (V >>> 7)),
            (V = (Y << 21) | (Z >>> 11)),
            (Z = (Z << 21) | (Y >>> 11)),
            (Y = (o << 24) | (X >>> 8)),
            (X = (X << 24) | (o >>> 8)),
            (o = (a << 27) | (s >>> 5)),
            (s = (s << 27) | (a >>> 5)),
            (a = (u << 20) | (Q >>> 12)),
            (Q = (Q << 20) | (u >>> 12)),
            (u = (c << 7) | ($ >>> 25)),
            ($ = ($ << 7) | (c >>> 25)),
            (c = (f << 8) | (i >>> 24)),
            (i = (i << 8) | (f >>> 24)),
            (f = (n << 14) | (l >>> 18)),
            (n = (l << 14) | (n >>> 18));
          (e[0] = h ^ (~x & L)),
            (e[1] = d ^ (~k & H)),
            (e[10] = K ^ (~a & g)),
            (e[11] = F ^ (~Q & m)),
            (e[20] = b ^ (~I & G)),
            (e[21] = S ^ (~B & J)),
            (e[30] = o ^ (~p & R)),
            (e[31] = s ^ (~v & M)),
            (e[40] = O ^ (~z & u)),
            (e[41] = N ^ (~W & $)),
            (e[2] = x ^ (~L & V)),
            (e[3] = k ^ (~H & Z)),
            (e[12] = a ^ (~g & A)),
            (e[13] = Q ^ (~m & T)),
            (e[22] = I ^ (~G & c)),
            (e[23] = B ^ (~J & i)),
            (e[32] = p ^ (~R & U)),
            (e[33] = v ^ (~M & j)),
            (e[42] = z ^ (~u & _)),
            (e[43] = W ^ (~$ & y)),
            (e[4] = L ^ (~V & f)),
            (e[5] = H ^ (~Z & n)),
            (e[14] = g ^ (~A & D)),
            (e[15] = m ^ (~T & q)),
            (e[24] = G ^ (~c & w)),
            (e[25] = J ^ (~i & E)),
            (e[34] = R ^ (~U & Y)),
            (e[35] = M ^ (~j & X)),
            (e[44] = u ^ (~_ & C)),
            (e[45] = $ ^ (~y & P)),
            (e[6] = V ^ (~f & h)),
            (e[7] = Z ^ (~n & d)),
            (e[16] = A ^ (~D & K)),
            (e[17] = T ^ (~q & F)),
            (e[26] = c ^ (~w & b)),
            (e[27] = i ^ (~E & S)),
            (e[36] = U ^ (~Y & o)),
            (e[37] = j ^ (~X & s)),
            (e[46] = _ ^ (~C & O)),
            (e[47] = y ^ (~P & N)),
            (e[8] = f ^ (~h & x)),
            (e[9] = n ^ (~d & k)),
            (e[18] = D ^ (~K & a)),
            (e[19] = q ^ (~F & Q)),
            (e[28] = w ^ (~b & I)),
            (e[29] = E ^ (~S & B)),
            (e[38] = Y ^ (~o & p)),
            (e[39] = X ^ (~s & v)),
            (e[48] = C ^ (~O & z)),
            (e[49] = P ^ (~N & W)),
            (e[0] ^= r[2 * t]),
            (e[1] ^= r[2 * t + 1]);
        }
      };
    },
    1564: function (e, t, r) {
      "use strict";
      (function (t) {
        function n(e) {
          return 32 === e.length && i.privateKeyVerify(Uint8Array.from(e));
        }
        var i = r(1344),
          o = r(1568),
          a = r(1569);
        e.exports = {
          privateKeyVerify: n,
          privateKeyExport: function (e, t) {
            if (32 !== e.length)
              throw new RangeError("private key length is invalid");
            var r = o.privateKeyExport(e, t);
            return a.privateKeyExport(e, r, t);
          },
          privateKeyImport: function (e) {
            if (null !== (e = a.privateKeyImport(e)) && 32 === e.length && n(e))
              return e;
            throw new Error("couldn't import from DER format");
          },
          privateKeyNegate: function (e) {
            return t.from(i.privateKeyNegate(Uint8Array.from(e)));
          },
          privateKeyModInverse: function (e) {
            if (32 !== e.length)
              throw new Error("private key length is invalid");
            return t.from(o.privateKeyModInverse(Uint8Array.from(e)));
          },
          privateKeyTweakAdd: function (e, r) {
            return t.from(i.privateKeyTweakAdd(Uint8Array.from(e), r));
          },
          privateKeyTweakMul: function (e, r) {
            return t.from(
              i.privateKeyTweakMul(Uint8Array.from(e), Uint8Array.from(r))
            );
          },
          publicKeyCreate: function (e, r) {
            return t.from(i.publicKeyCreate(Uint8Array.from(e), r));
          },
          publicKeyConvert: function (e, r) {
            return t.from(i.publicKeyConvert(Uint8Array.from(e), r));
          },
          publicKeyVerify: function (e) {
            return (
              (33 === e.length || 65 === e.length) &&
              i.publicKeyVerify(Uint8Array.from(e))
            );
          },
          publicKeyTweakAdd: function (e, r, n) {
            return t.from(
              i.publicKeyTweakAdd(Uint8Array.from(e), Uint8Array.from(r), n)
            );
          },
          publicKeyTweakMul: function (e, r, n) {
            return t.from(
              i.publicKeyTweakMul(Uint8Array.from(e), Uint8Array.from(r), n)
            );
          },
          publicKeyCombine: function (e, r) {
            var n = [];
            return (
              e.forEach(function (e) {
                n.push(Uint8Array.from(e));
              }),
              t.from(i.publicKeyCombine(n, r))
            );
          },
          signatureNormalize: function (e) {
            return t.from(i.signatureNormalize(Uint8Array.from(e)));
          },
          signatureExport: function (e) {
            return t.from(i.signatureExport(Uint8Array.from(e)));
          },
          signatureImport: function (e) {
            return t.from(i.signatureImport(Uint8Array.from(e)));
          },
          signatureImportLax: function (e) {
            if (0 === e.length)
              throw new RangeError("signature length is invalid");
            if (null === (e = a.signatureImportLax(e)))
              throw new Error("couldn't parse DER signature");
            return o.signatureImport(e);
          },
          sign: function (e, r, n) {
            if (null === n) throw new TypeError("options should be an Object");
            var o = void 0;
            if (n) {
              if (((o = {}), null === n.data))
                throw new TypeError("options.data should be a Buffer");
              if (n.data) {
                if (32 !== n.data.length)
                  throw new RangeError("options.data length is invalid");
                o.data = new Uint8Array(n.data);
              }
              if (null === n.noncefn)
                throw new TypeError("options.noncefn should be a Function");
              n.noncefn &&
                (o.noncefn = function (e, r, i, o, a) {
                  var s = null != i ? t.from(i) : null;
                  (i = null != o ? t.from(o) : null), (o = t.from(""));
                  return (
                    n.noncefn && (o = n.noncefn(t.from(e), t.from(r), s, i, a)),
                    Uint8Array.from(o)
                  );
                });
            }
            return (
              (o = i.ecdsaSign(Uint8Array.from(e), Uint8Array.from(r), o)),
              { signature: t.from(o.signature), recovery: o.recid }
            );
          },
          verify: function (e, t, r) {
            return i.ecdsaVerify(Uint8Array.from(t), Uint8Array.from(e), r);
          },
          recover: function (e, r, n, o) {
            return t.from(
              i.ecdsaRecover(Uint8Array.from(r), n, Uint8Array.from(e), o)
            );
          },
          ecdh: function (e, r) {
            return t.from(i.ecdh(Uint8Array.from(e), Uint8Array.from(r), {}));
          },
          ecdhUnsafe: function (e, r, n) {
            if (33 !== e.length && 65 !== e.length)
              throw new RangeError("public key length is invalid");
            if (32 !== r.length)
              throw new RangeError("private key length is invalid");
            return t.from(
              o.ecdhUnsafe(Uint8Array.from(e), Uint8Array.from(r), n)
            );
          },
        };
      }.call(this, r(532).Buffer));
    },
    1565: function (e, t, r) {
      var n = r(301),
        i = "Impossible case. Please create issue.",
        o = "The tweak was out of range or the resulted private key is invalid",
        a = "The tweak was out of range or equal to zero",
        s = "Private Key is invalid",
        u = "Public Key could not be parsed",
        c = "Public Key serialization error",
        f = "The sum of the public keys is not valid",
        l = "Signature could not be parsed",
        h =
          "The nonce generation function failed, or the private key was invalid",
        d = "Public key could not be recover",
        p = "Scalar was invalid (zero or overflow)";
      function v(e, t) {
        if (!e) throw new Error(t);
      }
      function g(e, t, r) {
        var n;
        v(
          t instanceof Uint8Array,
          "Expected ".concat(e, " to be an Uint8Array")
        ),
          void 0 !== r &&
            (Array.isArray(r)
              ? ((n = r.join(", ")),
                (n = "Expected "
                  .concat(e, " to be an Uint8Array with length [")
                  .concat(n, "]")),
                v(r.includes(t.length), n))
              : ((e = "Expected "
                  .concat(e, " to be an Uint8Array with length ")
                  .concat(r)),
                v(t.length === r, e)));
      }
      function _(e) {
        v("Boolean" === y(e), "Expected compressed to be a Boolean");
      }
      function m(e, t) {
        var r =
            0 < arguments.length && void 0 !== e
              ? e
              : function (e) {
                  return new Uint8Array(e);
                },
          n = 1 < arguments.length ? t : void 0;
        return g("output", (r = "function" == typeof r ? r(n) : r), n), r;
      }
      function y(e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      }
      e.exports = function (e) {
        return {
          contextRandomize: function (t) {
            if (
              (v(
                null === t || t instanceof Uint8Array,
                "Expected seed to be an Uint8Array or null"
              ),
              null !== t && g("seed", t, 32),
              1 === e.contextRandomize(t))
            )
              throw new Error("Unknow error on context randomization");
          },
          privateKeyVerify: function (t) {
            return g("private key", t, 32), 0 === e.privateKeyVerify(t);
          },
          privateKeyNegate: function (t) {
            switch ((g("private key", t, 32), e.privateKeyNegate(t))) {
              case 0:
                return t;
              case 1:
                throw new Error(i);
            }
          },
          privateKeyTweakAdd: function (t, r) {
            switch (
              (g("private key", t, 32),
              g("tweak", r, 32),
              e.privateKeyTweakAdd(t, r))
            ) {
              case 0:
                return t;
              case 1:
                throw new Error(o);
            }
          },
          privateKeyTweakMul: function (t, r) {
            switch (
              (g("private key", t, 32),
              g("tweak", r, 32),
              e.privateKeyTweakMul(t, r))
            ) {
              case 0:
                return t;
              case 1:
                throw new Error(a);
            }
          },
          publicKeyVerify: function (t) {
            return g("public key", t, [33, 65]), 0 === e.publicKeyVerify(t);
          },
          publicKeyCreate: function (t) {
            var r =
                !(1 < arguments.length && void 0 !== arguments[1]) ||
                arguments[1],
              n = 2 < arguments.length ? arguments[2] : void 0;
            switch (
              (g("private key", t, 32),
              _(r),
              (n = m(n, r ? 33 : 65)),
              e.publicKeyCreate(n, t))
            ) {
              case 0:
                return n;
              case 1:
                throw new Error(s);
              case 2:
                throw new Error(c);
            }
          },
          publicKeyConvert: function (t) {
            var r =
                !(1 < arguments.length && void 0 !== arguments[1]) ||
                arguments[1],
              n = 2 < arguments.length ? arguments[2] : void 0;
            switch (
              (g("public key", t, [33, 65]),
              _(r),
              (n = m(n, r ? 33 : 65)),
              e.publicKeyConvert(n, t))
            ) {
              case 0:
                return n;
              case 1:
                throw new Error(u);
              case 2:
                throw new Error(c);
            }
          },
          publicKeyNegate: function (t) {
            var r =
                !(1 < arguments.length && void 0 !== arguments[1]) ||
                arguments[1],
              n = 2 < arguments.length ? arguments[2] : void 0;
            switch (
              (g("public key", t, [33, 65]),
              _(r),
              (n = m(n, r ? 33 : 65)),
              e.publicKeyNegate(n, t))
            ) {
              case 0:
                return n;
              case 1:
                throw new Error(u);
              case 2:
                throw new Error(i);
              case 3:
                throw new Error(c);
            }
          },
          publicKeyCombine: function (t) {
            var r =
                !(1 < arguments.length && void 0 !== arguments[1]) ||
                arguments[1],
              i = 2 < arguments.length ? arguments[2] : void 0;
            v(Array.isArray(t), "Expected public keys to be an Array"),
              v(
                0 < t.length,
                "Expected public keys array will have more than zero items"
              );
            var o,
              a = n(t);
            try {
              for (a.s(); !(o = a.n()).done; )
                g("public key", o.value, [33, 65]);
            } catch (t) {
              a.e(t);
            } finally {
              a.f();
            }
            switch ((_(r), (i = m(i, r ? 33 : 65)), e.publicKeyCombine(i, t))) {
              case 0:
                return i;
              case 1:
                throw new Error(u);
              case 2:
                throw new Error(f);
              case 3:
                throw new Error(c);
            }
          },
          publicKeyTweakAdd: function (t, r) {
            var n =
                !(2 < arguments.length && void 0 !== arguments[2]) ||
                arguments[2],
              i = 3 < arguments.length ? arguments[3] : void 0;
            switch (
              (g("public key", t, [33, 65]),
              g("tweak", r, 32),
              _(n),
              (i = m(i, n ? 33 : 65)),
              e.publicKeyTweakAdd(i, t, r))
            ) {
              case 0:
                return i;
              case 1:
                throw new Error(u);
              case 2:
                throw new Error(o);
            }
          },
          publicKeyTweakMul: function (t, r) {
            var n =
                !(2 < arguments.length && void 0 !== arguments[2]) ||
                arguments[2],
              i = 3 < arguments.length ? arguments[3] : void 0;
            switch (
              (g("public key", t, [33, 65]),
              g("tweak", r, 32),
              _(n),
              (i = m(i, n ? 33 : 65)),
              e.publicKeyTweakMul(i, t, r))
            ) {
              case 0:
                return i;
              case 1:
                throw new Error(u);
              case 2:
                throw new Error(a);
            }
          },
          signatureNormalize: function (t) {
            switch ((g("signature", t, 64), e.signatureNormalize(t))) {
              case 0:
                return t;
              case 1:
                throw new Error(l);
            }
          },
          signatureExport: function (t, r) {
            g("signature", t, 64);
            var n = { output: (r = m(r, 72)), outputlen: 72 };
            switch (e.signatureExport(n, t)) {
              case 0:
                return r.slice(0, n.outputlen);
              case 1:
                throw new Error(l);
              case 2:
                throw new Error(i);
            }
          },
          signatureImport: function (t, r) {
            switch (
              (g("signature", t), (r = m(r, 64)), e.signatureImport(r, t))
            ) {
              case 0:
                return r;
              case 1:
                throw new Error(l);
              case 2:
                throw new Error(i);
            }
          },
          ecdsaSign: function (t, r) {
            var n =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              o = 3 < arguments.length ? arguments[3] : void 0;
            g("message", t, 32),
              g("private key", r, 32),
              v("Object" === y(n), "Expected options to be an Object"),
              void 0 !== n.data && g("options.data", n.data),
              void 0 !== n.noncefn &&
                v(
                  "Function" === y(n.noncefn),
                  "Expected options.noncefn to be a Function"
                );
            var a = { signature: (o = m(o, 64)), recid: null };
            switch (e.ecdsaSign(a, t, r, n.data, n.noncefn)) {
              case 0:
                return a;
              case 1:
                throw new Error(h);
              case 2:
                throw new Error(i);
            }
          },
          ecdsaVerify: function (t, r, n) {
            switch (
              (g("signature", t, 64),
              g("message", r, 32),
              g("public key", n, [33, 65]),
              e.ecdsaVerify(t, r, n))
            ) {
              case 0:
                return !0;
              case 3:
                return !1;
              case 1:
                throw new Error(l);
              case 2:
                throw new Error(u);
            }
          },
          ecdsaRecover: function (t, r, n) {
            var o =
                !(3 < arguments.length && void 0 !== arguments[3]) ||
                arguments[3],
              a = 4 < arguments.length ? arguments[4] : void 0;
            switch (
              (g("signature", t, 64),
              v(
                "Number" === y(r) && 0 <= r && r <= 3,
                "Expected recovery id to be a Number within interval [0, 3]"
              ),
              g("message", n, 32),
              _(o),
              (a = m(a, o ? 33 : 65)),
              e.ecdsaRecover(a, t, r, n))
            ) {
              case 0:
                return a;
              case 1:
                throw new Error(l);
              case 2:
                throw new Error(d);
              case 3:
                throw new Error(i);
            }
          },
          ecdh: function (t, r) {
            var n =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              i = 3 < arguments.length ? arguments[3] : void 0;
            switch (
              (g("public key", t, [33, 65]),
              g("private key", r, 32),
              v("Object" === y(n), "Expected options to be an Object"),
              void 0 !== n.data && g("options.data", n.data),
              void 0 !== n.hashfn
                ? (v(
                    "Function" === y(n.hashfn),
                    "Expected options.hashfn to be a Function"
                  ),
                  void 0 !== n.xbuf && g("options.xbuf", n.xbuf, 32),
                  void 0 !== n.ybuf && g("options.ybuf", n.ybuf, 32),
                  g("output", i))
                : (i = m(i, 32)),
              e.ecdh(i, t, r, n.data, n.hashfn, n.xbuf, n.ybuf))
            ) {
              case 0:
                return i;
              case 1:
                throw new Error(u);
              case 2:
                throw new Error(p);
            }
          },
        };
      };
    },
    1566: function (e, t, r) {
      var n = new (r(1146).ec)("secp256k1"),
        i = n.curve,
        o = i.n.constructor;
      function a(e) {
        var t,
          r,
          a,
          s = e[0];
        switch (s) {
          case 2:
          case 3:
            return 33 !== e.length
              ? null
              : ((t = s),
                (r = e.subarray(1, 33)),
                0 <= (a = new o(r)).cmp(i.p)
                  ? null
                  : ((3 === t) !==
                      (r = (a = a.toRed(i.red))
                        .redSqr()
                        .redIMul(a)
                        .redIAdd(i.b)
                        .redSqrt()).isOdd() && (r = r.redNeg()),
                    n.keyPair({ pub: { x: a, y: r } })));
          case 4:
          case 6:
          case 7:
            return 65 !== e.length
              ? null
              : ((t = s),
                (a = e.subarray(1, 33)),
                (r = e.subarray(33, 65)),
                (a = new o(a)),
                (r = new o(r)),
                0 <= a.cmp(i.p) || 0 <= r.cmp(i.p)
                  ? null
                  : ((a = a.toRed(i.red)),
                    (r = r.toRed(i.red)),
                    (6 !== t && 7 !== t) || r.isOdd() === (7 === t)
                      ? ((t = a.redSqr().redIMul(a)),
                        r.redSqr().redISub(t.redIAdd(i.b)).isZero()
                          ? n.keyPair({ pub: { x: a, y: r } })
                          : null)
                      : null));
          default:
            return null;
        }
      }
      function s(e, t) {
        for (var r = t.encode(null, 33 === e.length), n = 0; n < e.length; ++n)
          e[n] = r[n];
      }
      e.exports = {
        contextRandomize: function () {
          return 0;
        },
        privateKeyVerify: function (e) {
          return (e = new o(e)).cmp(i.n) < 0 && !e.isZero() ? 0 : 1;
        },
        privateKeyNegate: function (e) {
          var t = new o(e);
          t = i.n.sub(t).umod(i.n).toArrayLike(Uint8Array, "be", 32);
          return e.set(t), 0;
        },
        privateKeyTweakAdd: function (e, t) {
          return 0 <= (t = new o(t)).cmp(i.n)
            ? 1
            : (t.iadd(new o(e)),
              0 <= t.cmp(i.n) && t.isub(i.n),
              t.isZero()
                ? 1
                : ((t = t.toArrayLike(Uint8Array, "be", 32)), e.set(t), 0));
        },
        privateKeyTweakMul: function (e, t) {
          return 0 <= (t = new o(t)).cmp(i.n) || t.isZero()
            ? 1
            : (t.imul(new o(e)),
              (t = (t = 0 <= t.cmp(i.n) ? t.umod(i.n) : t).toArrayLike(
                Uint8Array,
                "be",
                32
              )),
              e.set(t),
              0);
        },
        publicKeyVerify: function (e) {
          return null === a(e) ? 1 : 0;
        },
        publicKeyCreate: function (e, t) {
          var r = new o(t);
          return 0 <= r.cmp(i.n) || r.isZero()
            ? 1
            : (s(e, n.keyFromPrivate(t).getPublic()), 0);
        },
        publicKeyConvert: function (e, t) {
          return null === (t = a(t)) ? 1 : (s(e, t.getPublic()), 0);
        },
        publicKeyNegate: function (e, t) {
          return null === (t = a(t))
            ? 1
            : (((t = t.getPublic()).y = t.y.redNeg()), s(e, t), 0);
        },
        publicKeyCombine: function (e, t) {
          for (var r = new Array(t.length), n = 0; n < t.length; ++n)
            if (((r[n] = a(t[n])), null === r[n])) return 1;
          for (var i = r[0].getPublic(), o = 1; o < r.length; ++o)
            i = i.add(r[o].pub);
          return i.isInfinity() ? 2 : (s(e, i), 0);
        },
        publicKeyTweakAdd: function (e, t, r) {
          return null === (t = a(t))
            ? 1
            : 0 <= (r = new o(r)).cmp(i.n) ||
              (r = t.getPublic().add(i.g.mul(r))).isInfinity()
            ? 2
            : (s(e, r), 0);
        },
        publicKeyTweakMul: function (e, t, r) {
          return null === (t = a(t))
            ? 1
            : 0 <= (r = new o(r)).cmp(i.n) || r.isZero()
            ? 2
            : (s(e, t.getPublic().mul(r)), 0);
        },
        signatureNormalize: function (e) {
          var t = new o(e.subarray(0, 32)),
            r = new o(e.subarray(32, 64));
          return 0 <= t.cmp(i.n) || 0 <= r.cmp(i.n)
            ? 1
            : (1 === r.cmp(n.nh) &&
                e.set(i.n.sub(r).toArrayLike(Uint8Array, "be", 32), 32),
              0);
        },
        signatureExport: function (e, t) {
          var r = t.subarray(0, 32),
            n = t.subarray(32, 64);
          if (0 <= new o(r).cmp(i.n)) return 1;
          if (0 <= new o(n).cmp(i.n)) return 1;
          var a = (t = e.output).subarray(4, 37);
          (a[0] = 0), a.set(r, 1);
          for (
            var s = 33, u = 0;
            1 < s && 0 === a[u] && !(128 & a[u + 1]);
            --s, ++u
          );
          if (128 & (a = a.subarray(u))[0]) return 1;
          if (1 < s && 0 === a[0] && !(128 & a[1])) return 1;
          var c = t.subarray(39, 72);
          (c[0] = 0), c.set(n, 1);
          for (
            var f = 33, l = 0;
            1 < f && 0 === c[l] && !(128 & c[l + 1]);
            --f, ++l
          );
          return 128 & (c = c.subarray(l))[0] ||
            (1 < f && 0 === c[0] && !(128 & c[1]))
            ? 1
            : ((e.outputlen = 6 + s + f),
              (t[0] = 48),
              (t[1] = e.outputlen - 2),
              (t[2] = 2),
              (t[3] = a.length),
              t.set(a, 4),
              (t[4 + s] = 2),
              (t[5 + s] = c.length),
              t.set(c, 6 + s),
              0);
        },
        signatureImport: function (e, t) {
          if (t.length < 8) return 1;
          if (72 < t.length) return 1;
          if (48 !== t[0]) return 1;
          if (t[1] !== t.length - 2) return 1;
          if (2 !== t[2]) return 1;
          var r = t[3];
          if (0 === r) return 1;
          if (5 + r >= t.length) return 1;
          if (2 !== t[4 + r]) return 1;
          var n = t[5 + r];
          if (0 === n) return 1;
          if (6 + r + n !== t.length) return 1;
          if (128 & t[4]) return 1;
          if (1 < r && 0 === t[4] && !(128 & t[5])) return 1;
          if (128 & t[r + 6]) return 1;
          if (1 < n && 0 === t[r + 6] && !(128 & t[r + 7])) return 1;
          var a = t.subarray(4, 4 + r);
          if (
            32 < (a = 33 === a.length && 0 === a[0] ? a.subarray(1) : a).length
          )
            return 1;
          if (
            32 <
            (n =
              33 === (n = t.subarray(6 + r)).length && 0 === n[0]
                ? n.slice(1)
                : n).length
          )
            throw new Error("S length is too long");
          return (
            0 <= (a = new o(a)).cmp(i.n) && (a = new o(0)),
            0 <= (r = new o(t.subarray(6 + r))).cmp(i.n) && (r = new o(0)),
            e.set(a.toArrayLike(Uint8Array, "be", 32), 0),
            e.set(r.toArrayLike(Uint8Array, "be", 32), 32),
            0
          );
        },
        ecdsaSign: function (e, t, r, a, s) {
          var u;
          s &&
            ((u = s),
            (s = function (e) {
              if (
                !(
                  (e = u(t, r, null, a, e)) instanceof Uint8Array &&
                  32 === e.length
                )
              )
                throw new Error("This is the way");
              return new o(e);
            }));
          var c,
            f = new o(r);
          if (0 <= f.cmp(i.n) || f.isZero()) return 1;
          try {
            c = n.sign(t, r, { canonical: !0, k: s, pers: a });
          } catch (e) {
            return 1;
          }
          return (
            e.signature.set(c.r.toArrayLike(Uint8Array, "be", 32), 0),
            e.signature.set(c.s.toArrayLike(Uint8Array, "be", 32), 32),
            (e.recid = c.recoveryParam),
            0
          );
        },
        ecdsaVerify: function (e, t, r) {
          var s = { r: e.subarray(0, 32), s: e.subarray(32, 64) },
            u = new o(s.r);
          e = new o(s.s);
          return 0 <= u.cmp(i.n) || 0 <= e.cmp(i.n)
            ? 1
            : 1 === e.cmp(n.nh) || u.isZero() || e.isZero()
            ? 3
            : null === (r = a(r))
            ? 2
            : ((r = r.getPublic()), n.verify(t, s, r) ? 0 : 3);
        },
        ecdsaRecover: function (e, t, r, a) {
          var u,
            c = { r: t.slice(0, 32), s: t.slice(32, 64) },
            f = new o(c.r);
          t = new o(c.s);
          if (0 <= f.cmp(i.n) || 0 <= t.cmp(i.n)) return 1;
          if (f.isZero() || t.isZero()) return 2;
          try {
            u = n.recoverPubKey(a, c, r);
          } catch (e) {
            return 2;
          }
          return s(e, u), 0;
        },
        ecdh: function (e, t, r, s, u, c, f) {
          if (null === (t = a(t))) return 1;
          if (0 <= (r = new o(r)).cmp(i.n) || r.isZero()) return 2;
          if (((t = t.getPublic().mul(r)), void 0 === u)) {
            r = t.encode(null, !0);
            for (var l = n.hash().update(r).digest(), h = 0; h < 32; ++h)
              e[h] = l[h];
          } else {
            c = c || new Uint8Array(32);
            for (var d = t.getX().toArray("be", 32), p = 0; p < 32; ++p)
              c[p] = d[p];
            f = f || new Uint8Array(32);
            for (var v = t.getY().toArray("be", 32), g = 0; g < 32; ++g)
              f[g] = v[g];
            if (
              !((s = u(c, f, s)) instanceof Uint8Array && s.length === e.length)
            )
              return 2;
            e.set(s);
          }
          return 0;
        },
      };
    },
    1567: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(1128);
      (t.getRandomBytes = function (e) {
        return new Promise(function (t, r) {
          n(e, function (e, n) {
            e ? r(e) : t(n);
          });
        });
      }),
        (t.getRandomBytesSync = function (e) {
          return n(e);
        });
    },
    1568: function (e, t, r) {
      "use strict";
      (function (e) {
        var n = r(42),
          i = new (r(1146).ec)("secp256k1"),
          o = i.curve;
        (t.privateKeyExport = function (e, t) {
          if (0 <= (e = new n(e)).ucmp(o.n))
            throw new Error("couldn't export to DER format");
          return (e = i.g.mul(e)), a(e.getX(), e.getY(), t);
        }),
          (t.privateKeyModInverse = function (t) {
            if (0 <= (t = new n(t)).ucmp(o.n) || t.isZero())
              throw new Error("private key range is invalid");
            return t.invm(o.n).toArrayLike(e, "be", 32);
          }),
          (t.signatureImport = function (t) {
            var r = new n(t.r);
            return (
              0 <= r.ucmp(o.n) && (r = new n(0)),
              0 <= (t = new n(t.s)).ucmp(o.n) && (t = new n(0)),
              e.concat([r.toArrayLike(e, "be", 32), t.toArrayLike(e, "be", 32)])
            );
          }),
          (t.ecdhUnsafe = function (e, t, r) {
            if (
              ((e = i.keyFromPublic(e)),
              0 <= (t = new n(t)).ucmp(o.n) || t.isZero())
            )
              throw new Error("scalar was invalid (zero or overflow)");
            return (t = e.pub.mul(t)), a(t.getX(), t.getY(), r);
          });
        var a = function (t, r, n) {
          var i = void 0;
          return (
            n
              ? (((i = e.alloc(33))[0] = r.isOdd() ? 3 : 2),
                t.toArrayLike(e, "be", 32).copy(i, 1))
              : (((i = e.alloc(65))[0] = 4),
                t.toArrayLike(e, "be", 32).copy(i, 1),
                r.toArrayLike(e, "be", 32).copy(i, 33)),
            i
          );
        };
      }.call(this, r(532).Buffer));
    },
    1569: function (e, t, r) {
      "use strict";
      (function (e) {
        var r = e.from([
            48, 129, 211, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129,
            133, 48, 129, 130, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1,
            1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
            255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
            255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4,
            33, 2, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149,
            206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129,
            91, 22, 248, 23, 152, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255,
            255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230,
            175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161,
            36, 3, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          ]),
          n = e.from([
            48, 130, 1, 19, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160,
            129, 165, 48, 129, 162, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61,
            1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
            255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
            255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7,
            4, 65, 4, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149,
            206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129,
            91, 22, 248, 23, 152, 72, 58, 218, 119, 38, 163, 196, 101, 93, 164,
            251, 252, 14, 17, 8, 168, 253, 23, 180, 72, 166, 133, 84, 25, 156,
            71, 208, 143, 251, 16, 212, 184, 2, 33, 0, 255, 255, 255, 255, 255,
            255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174,
            220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2,
            1, 1, 161, 68, 3, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
          ]);
        (t.privateKeyExport = function (t, i, o) {
          var a = e.from(o ? r : n);
          return t.copy(a, o ? 8 : 9), i.copy(a, o ? 181 : 214), a;
        }),
          (t.privateKeyImport = function (e) {
            var t = e.length,
              r = 0;
            if (t < r + 1 || 48 !== e[r]) return null;
            if (t < (r += 1) + 1 || !(128 & e[r])) return null;
            var n = 127 & e[r];
            if (n < 1 || 2 < n) return null;
            if (t < (r += 1) + n) return null;
            var i = e[r + n - 1] | (1 < n ? e[r + n - 2] << 8 : 0);
            return t < (r += n) + i ||
              t < r + 3 ||
              2 !== e[r] ||
              1 !== e[r + 1] ||
              1 !== e[r + 2] ||
              t < (r += 3) + 2 ||
              4 !== e[r] ||
              32 < e[r + 1] ||
              t < r + 2 + e[r + 1]
              ? null
              : e.slice(r + 2, r + 2 + e[r + 1]);
          }),
          (t.signatureImportLax = function (t) {
            var r = e.alloc(32, 0),
              n = e.alloc(32, 0),
              i = t.length,
              o = 0;
            if (48 !== t[o++]) return null;
            var a = t[o++];
            if (128 & a && i < (o += a - 128)) return null;
            if (2 !== t[o++]) return null;
            var s = t[o++];
            if (128 & s) {
              if (i < o + (a = s - 128)) return null;
              for (; 0 < a && 0 === t[o]; o += 1, --a);
              for (s = 0; 0 < a; o += 1, --a) s = (s << 8) + t[o];
            }
            if (i - o < s) return null;
            var u = o;
            if (((o += s), 2 !== t[o++])) return null;
            var c = t[o++];
            if (128 & c) {
              if (i < o + (a = c - 128)) return null;
              for (; 0 < a && 0 === t[o]; o += 1, --a);
              for (c = 0; 0 < a; o += 1, --a) c = (c << 8) + t[o];
            }
            if (i - o < c) return null;
            var f = o;
            for (o += c; 0 < s && 0 === t[u]; --s, u += 1);
            if (32 < s) return null;
            for (
              (i = t.slice(u, u + s)).copy(r, 32 - i.length);
              0 < c && 0 === t[f];
              --c, f += 1
            );
            return 32 < c
              ? null
              : ((i = t.slice(f, f + c)).copy(n, 32 - i.length),
                { r: r, s: n });
          });
      }.call(this, r(532).Buffer));
    },
    1570: function (e, t, r) {
      var n = r(1346);
      e.exports = function (e) {
        return "string" == typeof e && n(e) ? e.slice(2) : e;
      };
    },
    1574: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = i(r(1575));
      r = i(r(1582));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.default = (0, n.default)(r.default)), (e.exports = t.default);
    },
    1575: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return function (t, r, o) {
            return e(n.default, t, (0, i.default)(r), o);
          };
        });
      var n = o(r(1350)),
        i = o(r(1135));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    1576: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t, r, o) {
          (0, n.default)(t)(e, (0, i.default)(r), o);
        });
      var n = o(r(1352)),
        i = o(r(1135));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    1577: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          if ((0, n.default)(e))
            return (function (e) {
              var t = -1,
                r = e.length;
              return function () {
                return ++t < r ? { value: e[t], key: t } : null;
              };
            })(e);
          var t = (0, i.default)(e);
          return t
            ? (function (e) {
                var t = -1;
                return function () {
                  var r = e.next();
                  return r.done ? null : (t++, { value: r.value, key: t });
                };
              })(t)
            : (function (e) {
                var t = (0, o.default)(e),
                  r = -1,
                  n = t.length;
                return function () {
                  var i = t[++r];
                  return r < n ? { value: e[i], key: i } : null;
                };
              })(e);
        });
      var n = a(r(241)),
        i = a(r(1578)),
        o = a(r(213));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    1578: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return n && e[n] && e[n]();
        });
      var n = "function" == typeof Symbol && Symbol.iterator;
      e.exports = t.default;
    },
    1579: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return (0, i.default)(function (t, r) {
            var i;
            try {
              i = e.apply(this, t);
            } catch (t) {
              return r(t);
            }
            (0, n.default)(i) && "function" == typeof i.then
              ? i.then(
                  function (e) {
                    s(r, null, e);
                  },
                  function (e) {
                    s(r, e.message ? e : new Error(e));
                  }
                )
              : r(null, i);
          });
        });
      var n = a(r(164)),
        i = a(r(1580)),
        o = a(r(1581));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t, r) {
        try {
          e(t, r);
        } catch (e) {
          (0, o.default)(u, e);
        }
      }
      function u(e) {
        throw e;
      }
      e.exports = t.default;
    },
    1580: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return function () {
            var t = (0, i.default)(arguments),
              r = t.pop();
            e.call(this, t, r);
          };
        });
      var n,
        i = (n = r(1187)) && n.__esModule ? n : { default: n };
      e.exports = t.default;
    },
    1581: function (e, t, r) {
      "use strict";
      (function (e, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.hasNextTick = t.hasSetImmediate = void 0),
          (t.fallback = u),
          (t.wrap = c);
        var i,
          o = (i = r(1187)) && i.__esModule ? i : { default: i },
          a = (t.hasSetImmediate = "function" == typeof e && e),
          s = (t.hasNextTick =
            "object" == typeof n && "function" == typeof n.nextTick);
        function u(e) {
          setTimeout(e, 0);
        }
        function c(e) {
          return function (t) {
            var r = (0, o.default)(arguments, 1);
            e(function () {
              t.apply(null, r);
            });
          };
        }
        (n = a ? e : s ? n.nextTick : u), (t.default = c(n));
      }.call(this, r(534).setImmediate, r(162)));
    },
    1582: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t, r, o) {
          (o = o || n.default), (t = t || []);
          var a = [],
            s = 0,
            u = (0, i.default)(r);
          e(
            t,
            function (e, t, r) {
              var n = s++;
              u(e, function (e, t) {
                (a[n] = t), r(e);
              });
            },
            function (e) {
              o(e, a);
            }
          );
        });
      var n = o(r(1161)),
        i = o(r(1135));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    1583: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = i(r(1584));
      r = i(r(1353));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.default = (0, r.default)(n.default, 1)), (e.exports = t.default);
    },
    1584: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t, r, a) {
          (0, n.default)(t)(e, (0, i.default)((0, o.default)(r)), a);
        });
      var n = a(r(1352)),
        i = a(r(1585)),
        o = a(r(1135));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    1585: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return function (t, r, n) {
            return e(t, n);
          };
        }),
        (e.exports = t.default);
    },
    1586: function (e, t, r) {
      var n = r(368).EventEmitter;
      function i() {
        n.call(this), (this.isLocked = !0);
      }
      (0, r(1134).inherits)((e.exports = i), n),
        (i.prototype.go = function () {
          (this.isLocked = !1), this.emit("unlock");
        }),
        (i.prototype.stop = function () {
          (this.isLocked = !0), this.emit("lock");
        }),
        (i.prototype.await = function (e) {
          this.isLocked ? this.once("unlock", e) : setTimeout(e);
        });
    },
    1587: function (e, t, r) {
      (t.parse = r(1588)), (t.stringify = r(1589));
    },
    1588: function (e, t) {
      function r() {
        var e,
          t = "";
        for ("-" === i && u((t = "-")); "0" <= i && i <= "9"; ) (t += i), u();
        if ("." === i) for (t += "."; u() && "0" <= i && i <= "9"; ) t += i;
        if ("e" === i || "E" === i)
          for (
            t += i, u(), ("-" !== i && "+" !== i) || ((t += i), u());
            "0" <= i && i <= "9";

          )
            (t += i), u();
        if (((e = +t), isFinite(e))) return e;
        s("Bad number");
      }
      var n,
        i,
        o,
        a = {
          '"': '"',
          "\\": "\\",
          "/": "/",
          b: "\b",
          f: "\f",
          n: "\n",
          r: "\r",
          t: "\t",
        },
        s = function (e) {
          throw { name: "SyntaxError", message: e, at: n, text: o };
        },
        u = function (e) {
          return (
            e && e !== i && s("Expected '" + e + "' instead of '" + i + "'"),
            (i = o.charAt(n)),
            (n += 1),
            i
          );
        },
        c = function () {
          var e,
            t,
            r,
            n = "";
          if ('"' === i)
            for (; u(); ) {
              if ('"' === i) return u(), n;
              if ("\\" === i)
                if ((u(), "u" === i)) {
                  for (
                    t = r = 0;
                    t < 4 && ((e = parseInt(u(), 16)), isFinite(e));
                    t += 1
                  )
                    r = 16 * r + e;
                  n += String.fromCharCode(r);
                } else {
                  if ("string" != typeof a[i]) break;
                  n += a[i];
                }
              else n += i;
            }
          s("Bad string");
        },
        f = function () {
          for (; i && i <= " "; ) u();
        },
        l = function () {
          switch ((f(), i)) {
            case "{":
              return (function () {
                var e,
                  t = {};
                if ("{" === i) {
                  if ((u("{"), f(), "}" === i)) return u("}"), t;
                  for (; i; ) {
                    if (
                      ((e = c()),
                      f(),
                      u(":"),
                      Object.hasOwnProperty.call(t, e) &&
                        s('Duplicate key "' + e + '"'),
                      (t[e] = l()),
                      f(),
                      "}" === i)
                    )
                      return u("}"), t;
                    u(","), f();
                  }
                }
                s("Bad object");
              })();
            case "[":
              return (function () {
                var e = [];
                if ("[" === i) {
                  if ((u("["), f(), "]" === i)) return u("]"), e;
                  for (; i; ) {
                    if ((e.push(l()), f(), "]" === i)) return u("]"), e;
                    u(","), f();
                  }
                }
                s("Bad array");
              })();
            case '"':
              return c();
            case "-":
              return r();
            default:
              return (
                "0" <= i && i <= "9"
                  ? r
                  : function () {
                      switch (i) {
                        case "t":
                          return u("t"), u("r"), u("u"), u("e"), !0;
                        case "f":
                          return u("f"), u("a"), u("l"), u("s"), u("e"), !1;
                        case "n":
                          return u("n"), u("u"), u("l"), u("l"), null;
                      }
                      s("Unexpected '" + i + "'");
                    }
              )();
          }
        };
      e.exports = function (e, t) {
        return (
          (o = e),
          (n = 0),
          (i = " "),
          (e = l()),
          f(),
          i && s("Syntax error"),
          "function" == typeof t
            ? (function e(r, n) {
                var i,
                  o,
                  a = r[n];
                if (a && "object" == typeof a)
                  for (i in a)
                    Object.prototype.hasOwnProperty.call(a, i) &&
                      (void 0 !== (o = e(a, i)) ? (a[i] = o) : delete a[i]);
                return t.call(r, n, a);
              })({ "": e }, "")
            : e
        );
      };
    },
    1589: function (e, t) {
      var r,
        n,
        i,
        o =
          /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        a = {
          "\b": "\\b",
          "\t": "\\t",
          "\n": "\\n",
          "\f": "\\f",
          "\r": "\\r",
          '"': '\\"',
          "\\": "\\\\",
        };
      function s(e) {
        return (
          (o.lastIndex = 0),
          o.test(e)
            ? '"' +
              e.replace(o, function (e) {
                var t = a[e];
                return "string" == typeof t
                  ? t
                  : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
              }) +
              '"'
            : '"' + e + '"'
        );
      }
      e.exports = function (e, t, o) {
        var a;
        if (((n = r = ""), "number" == typeof o))
          for (a = 0; a < o; a += 1) n += " ";
        else "string" == typeof o && (n = o);
        if (
          (i = t) &&
          "function" != typeof t &&
          ("object" != typeof t || "number" != typeof t.length)
        )
          throw new Error("JSON.stringify");
        return (function e(t, o) {
          var a,
            u,
            c,
            f,
            l,
            h = r,
            d = o[t];
          switch (
            (d &&
              "object" == typeof d &&
              "function" == typeof d.toJSON &&
              (d = d.toJSON(t)),
            typeof (d = "function" == typeof i ? i.call(o, t, d) : d))
          ) {
            case "string":
              return s(d);
            case "number":
              return isFinite(d) ? String(d) : "null";
            case "boolean":
            case "null":
              return String(d);
            case "object":
              if (!d) return "null";
              if (
                ((r += n),
                (l = []),
                "[object Array]" === Object.prototype.toString.apply(d))
              ) {
                for (f = d.length, a = 0; a < f; a += 1)
                  l[a] = e(a, d) || "null";
                return (
                  (c =
                    0 === l.length
                      ? "[]"
                      : r
                      ? "[\n" + r + l.join(",\n" + r) + "\n" + h + "]"
                      : "[" + l.join(",") + "]"),
                  (r = h),
                  c
                );
              }
              if (i && "object" == typeof i)
                for (f = i.length, a = 0; a < f; a += 1)
                  "string" == typeof (u = i[a]) &&
                    (c = e(u, d)) &&
                    l.push(s(u) + (r ? ": " : ":") + c);
              else
                for (u in d)
                  Object.prototype.hasOwnProperty.call(d, u) &&
                    (c = e(u, d)) &&
                    l.push(s(u) + (r ? ": " : ":") + c);
              return (
                (c =
                  0 === l.length
                    ? "{}"
                    : r
                    ? "{\n" + r + l.join(",\n" + r) + "\n" + h + "}"
                    : "{" + l.join(",") + "}"),
                (r = h),
                c
              );
          }
        })("", { "": e });
      };
    },
    1590: function (e, t) {
      e.exports = function () {
        return Math.floor(Number.MAX_SAFE_INTEGER * Math.random());
      };
    },
    1591: function (e, t, r) {
      var n = r(366),
        i = r(1107),
        o = r(1108),
        a = r(1238),
        s = r(1592);
      e.exports = (function () {
        "use strict";
        i(t, a);
        var e = o(t);
        function t(r) {
          return (
            n(this, t),
            e.call(this, function (e) {
              return (
                (e = e.blockTracker), s(Object.assign({ blockTracker: e }, r))
              );
            })
          );
        }
        return t;
      })();
    },
    1592: function (e, t, r) {
      var n = r(366),
        i = r(367),
        o = r(7),
        a = r(1110),
        s = r(1593),
        u = r(1594),
        c = [void 0, null, "<nil>"];
      e.exports = function () {
        var e = (
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
        ).blockTracker;
        if (!e)
          throw new Error(
            "createBlockCacheMiddleware - No BlockTracker specified"
          );
        var t = new f(),
          r = { perma: t, block: t, fork: t };
        return u(
          (function () {
            var n = a(
              o.mark(function n(i, a, u) {
                var c, f, l, h, d;
                return o.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (i.skipCache) return n.abrupt("return", u());
                        n.next = 2;
                        break;
                      case 2:
                        if (((h = s.cacheTypeForPayload(i)), (c = r[h]))) {
                          n.next = 6;
                          break;
                        }
                        return n.abrupt("return", u());
                      case 6:
                        if (c.canCacheRequest(i)) {
                          n.next = 8;
                          break;
                        }
                        return n.abrupt("return", u());
                      case 8:
                        if (
                          "earliest" !==
                          (f = (f = s.blockTagForPayload(i)) || "latest")
                        ) {
                          n.next = 14;
                          break;
                        }
                        (l = "0x00"), (n.next = 23);
                        break;
                      case 14:
                        if ("latest" === f)
                          return (n.next = 17), e.getLatestBlock();
                        n.next = 22;
                        break;
                      case 17:
                        (h = n.sent), t.clearBefore(h), (l = h), (n.next = 23);
                        break;
                      case 22:
                        l = f;
                      case 23:
                        return (n.next = 25), c.get(i, l);
                      case 25:
                        if (void 0 === (d = n.sent)) return (n.next = 29), u();
                        n.next = 33;
                        break;
                      case 29:
                        return (n.next = 31), c.set(i, l, a.result);
                      case 31:
                        n.next = 34;
                        break;
                      case 33:
                        a.result = d;
                      case 34:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            );
            return function (e, t, r) {
              return n.apply(this, arguments);
            };
          })()
        );
      };
      var f = (function () {
        "use strict";
        function e() {
          n(this, e), (this.cache = {});
        }
        var t, r;
        return (
          i(e, [
            {
              key: "getBlockCacheForPayload",
              value: function (e, t) {
                var r = Number.parseInt(t, 16);
                return (t = this.cache[r]) || (this.cache[r] = {});
              },
            },
            {
              key: "get",
              value:
                ((r = a(
                  o.mark(function e(t, r) {
                    var n, i;
                    return o.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if ((n = this.getBlockCacheForPayload(t, r))) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt("return");
                            case 3:
                              return (
                                (i = s.cacheIdentifierForPayload(t, !0)),
                                (i = n[i]),
                                e.abrupt("return", i)
                              );
                            case 6:
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
                  return r.apply(this, arguments);
                }),
            },
            {
              key: "set",
              value:
                ((t = a(
                  o.mark(function e(t, r, n) {
                    var i, a;
                    return o.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (this.canCacheResult(t, n)) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt("return");
                            case 3:
                              (i = this.getBlockCacheForPayload(t, r)),
                                (a = s.cacheIdentifierForPayload(t, !0)),
                                (i[a] = n);
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function (e, r, n) {
                  return t.apply(this, arguments);
                }),
            },
            {
              key: "canCacheRequest",
              value: function (e) {
                return !!s.canCache(e) && "pending" !== s.blockTagForPayload(e);
              },
            },
            {
              key: "canCacheResult",
              value: function (e, t) {
                if (!c.includes(t))
                  return !!(
                    ![
                      "eth_getTransactionByHash",
                      "eth_getTransactionReceipt",
                    ].includes(e.method) ||
                    (t &&
                      t.blockHash &&
                      "0x0000000000000000000000000000000000000000000000000000000000000000" !==
                        t.blockHash)
                  );
              },
            },
            {
              key: "clearBefore",
              value: function (e) {
                var t = this,
                  r = Number.parseInt(e, 16);
                Object.keys(t.cache)
                  .map(Number)
                  .filter(function (e) {
                    return e < r;
                  })
                  .forEach(function (e) {
                    return delete t.cache[e];
                  });
              },
            },
          ]),
          e
        );
      })();
    },
    1593: function (e, t, r) {
      var n = r(1355);
      function i(e) {
        return "never" !== s(e);
      }
      function o(e) {
        var t = a(e);
        return t >= e.params.length
          ? e.params
          : "eth_getBlockByNumber" === e.method
          ? e.params.slice(1)
          : e.params.slice(0, t);
      }
      function a(e) {
        switch (e.method) {
          case "eth_getStorageAt":
            return 2;
          case "eth_getBalance":
          case "eth_getCode":
          case "eth_getTransactionCount":
          case "eth_call":
            return 1;
          case "eth_getBlockByNumber":
            return 0;
          default:
            return;
        }
      }
      function s(e) {
        switch (e.method) {
          case "web3_clientVersion":
          case "web3_sha3":
          case "eth_protocolVersion":
          case "eth_getBlockTransactionCountByHash":
          case "eth_getUncleCountByBlockHash":
          case "eth_getCode":
          case "eth_getBlockByHash":
          case "eth_getTransactionByHash":
          case "eth_getTransactionByBlockHashAndIndex":
          case "eth_getTransactionReceipt":
          case "eth_getUncleByBlockHashAndIndex":
          case "eth_getCompilers":
          case "eth_compileLLL":
          case "eth_compileSolidity":
          case "eth_compileSerpent":
          case "shh_version":
          case "test_permaCache":
            return "perma";
          case "eth_getBlockByNumber":
          case "eth_getBlockTransactionCountByNumber":
          case "eth_getUncleCountByBlockNumber":
          case "eth_getTransactionByBlockNumberAndIndex":
          case "eth_getUncleByBlockNumberAndIndex":
          case "test_forkCache":
            return "fork";
          case "eth_gasPrice":
          case "eth_blockNumber":
          case "eth_getBalance":
          case "eth_getStorageAt":
          case "eth_getTransactionCount":
          case "eth_call":
          case "eth_estimateGas":
          case "eth_getFilterLogs":
          case "eth_getLogs":
          case "test_blockCache":
            return "block";
          case "net_version":
          case "net_peerCount":
          case "net_listening":
          case "eth_syncing":
          case "eth_sign":
          case "eth_coinbase":
          case "eth_mining":
          case "eth_hashrate":
          case "eth_accounts":
          case "eth_sendTransaction":
          case "eth_sendRawTransaction":
          case "eth_newFilter":
          case "eth_newBlockFilter":
          case "eth_newPendingTransactionFilter":
          case "eth_uninstallFilter":
          case "eth_getFilterChanges":
          case "eth_getWork":
          case "eth_submitWork":
          case "eth_submitHashrate":
          case "db_putString":
          case "db_getString":
          case "db_putHex":
          case "db_getHex":
          case "shh_post":
          case "shh_newIdentity":
          case "shh_hasIdentity":
          case "shh_newGroup":
          case "shh_addToGroup":
          case "shh_newFilter":
          case "shh_uninstallFilter":
          case "shh_getFilterChanges":
          case "shh_getMessages":
          case "test_neverCache":
            return "never";
        }
      }
      e.exports = {
        cacheIdentifierForPayload: function (e, t) {
          return (t = t ? o(e) : e.params), i(e) ? e.method + ":" + n(t) : null;
        },
        canCache: i,
        blockTagForPayload: function (e) {
          var t = a(e);
          return t >= e.params.length ? null : e.params[t];
        },
        paramsWithoutBlockTag: o,
        blockTagParamIndex: a,
        cacheTypeForPayload: s,
      };
    },
    1594: function (e, t, r) {
      var n = r(7),
        i = r(1110);
      e.exports = function (e) {
        return function (t, r, o, a) {
          var s,
            u,
            c,
            f = new Promise(function (e) {
              s = e;
            });
          e(
            t,
            r,
            (function () {
              var e = i(
                n.mark(function e() {
                  return n.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (c = !0),
                            o(function (e) {
                              (u = e), s();
                            }),
                            (e.next = 4),
                            f
                          );
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()
          )
            .then(
              i(
                n.mark(function e() {
                  return n.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (c) return (e.next = 3), f;
                          e.next = 6;
                          break;
                        case 3:
                          u(null), (e.next = 7);
                          break;
                        case 6:
                          a(null);
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )
            )
            .catch(function (e) {
              (u || a)(e);
            });
        };
      };
    },
    1595: function (e, t, r) {
      var n = r(1134).inherits;
      r = r(1188);
      function i(e) {
        this.staticResponses = e = e || {};
      }
      n((e.exports = i), r),
        (i.prototype.handleRequest = function (e, t, r) {
          var n = this.staticResponses[e.method];
          "function" == typeof n
            ? n(e, t, r)
            : void 0 !== n
            ? setTimeout(function () {
                return r(null, n);
              })
            : t();
        });
    },
    1596: function (e, t, r) {
      var n = r(366),
        i = r(1107),
        o = r(1108),
        a = r(1238),
        s = r(1356);
      e.exports = (function () {
        "use strict";
        i(t, a);
        var e = o(t);
        function t() {
          return (
            n(this, t),
            e.call(this, function (e) {
              var t = e.blockTracker,
                r = e.provider;
              return e.engine, s({ blockTracker: t, provider: r });
            })
          );
        }
        return t;
      })();
    },
    1611: function (e, t, r) {
      var n = r(1612),
        i = r(1613),
        o = r(1134).inherits,
        a = r(1160),
        s = r(1615),
        u = r(148),
        c = r(1625),
        f = r(1188),
        l = r(1626),
        h = /^[0-9A-Fa-f]+$/g;
      function d(e) {
        var t = this;
        (t.nonceLock = c(1)),
          e.getAccounts && (t.getAccounts = e.getAccounts),
          e.processTransaction && (t.processTransaction = e.processTransaction),
          e.processMessage && (t.processMessage = e.processMessage),
          e.processPersonalMessage &&
            (t.processPersonalMessage = e.processPersonalMessage),
          e.processTypedMessage &&
            (t.processTypedMessage = e.processTypedMessage),
          (t.approveTransaction = e.approveTransaction || t.autoApprove),
          (t.approveMessage = e.approveMessage || t.autoApprove),
          (t.approvePersonalMessage =
            e.approvePersonalMessage || t.autoApprove),
          (t.approveDecryptMessage = e.approveDecryptMessage || t.autoApprove),
          (t.approveEncryptionPublicKey =
            e.approveEncryptionPublicKey || t.autoApprove),
          (t.approveTypedMessage = e.approveTypedMessage || t.autoApprove),
          e.signTransaction &&
            (t.signTransaction = e.signTransaction || m("signTransaction")),
          e.signMessage && (t.signMessage = e.signMessage || m("signMessage")),
          e.signPersonalMessage &&
            (t.signPersonalMessage =
              e.signPersonalMessage || m("signPersonalMessage")),
          e.decryptMessage &&
            (t.decryptMessage = e.decryptMessage || m("decryptMessage")),
          e.encryptionPublicKey &&
            (t.encryptionPublicKey =
              e.encryptionPublicKey || m("encryptionPublicKey")),
          e.signTypedMessage &&
            (t.signTypedMessage = e.signTypedMessage || m("signTypedMessage")),
          e.recoverPersonalSignature &&
            (t.recoverPersonalSignature = e.recoverPersonalSignature),
          e.publishTransaction && (t.publishTransaction = e.publishTransaction),
          (t.estimateGas = e.estimateGas || t.estimateGas),
          (t.getGasPrice = e.getGasPrice || t.getGasPrice);
      }
      function p(e) {
        return e.toLowerCase();
      }
      function v(e) {
        return (e = a.addHexPrefix(e)), a.isValidAddress(e);
      }
      function g(e) {
        var t = a.addHexPrefix(e);
        return !a.isValidAddress(t) && _(e);
      }
      function _(e) {
        return (
          "string" == typeof e && "0x" === e.slice(0, 2) && e.slice(2).match(h)
        );
      }
      function m(e) {
        return function (t, r) {
          r(
            new Error(
              'ProviderEngine - HookedWalletSubprovider - Must provide "' +
                e +
                '" fn in constructor options'
            )
          );
        };
      }
      o((e.exports = d), f),
        (d.prototype.handleRequest = function (e, t, r) {
          var i,
            o,
            a,
            s,
            c,
            f,
            l,
            h,
            d = this;
          switch (
            ((d._parityRequests = {}), (d._parityRequestCount = 0), e.method)
          ) {
            case "eth_coinbase":
              return void d.getAccounts(function (e, t) {
                if (e) return r(e);
                (t = t[0] || null), r(null, t);
              });
            case "eth_accounts":
              return void d.getAccounts(function (e, t) {
                return e ? r(e) : void r(null, t);
              });
            case "eth_sendTransaction":
              return (
                (i = e.params[0]),
                void n(
                  [
                    function (e) {
                      return d.validateTransaction(i, e);
                    },
                    function (e) {
                      return d.processTransaction(i, e);
                    },
                  ],
                  r
                )
              );
            case "eth_signTransaction":
              return (
                (i = e.params[0]),
                void n(
                  [
                    function (e) {
                      return d.validateTransaction(i, e);
                    },
                    function (e) {
                      return d.processSignTransaction(i, e);
                    },
                  ],
                  r
                )
              );
            case "eth_sign":
              return (
                (c = e.params[0]),
                (s = e.params[1]),
                (a = e.params[2] || {}),
                (o = u(a, { from: c, data: s })),
                void n(
                  [
                    function (e) {
                      return d.validateMessage(o, e);
                    },
                    function (e) {
                      return d.processMessage(o, e);
                    },
                  ],
                  r
                )
              );
            case "personal_sign":
              return (
                (h = e.params[0]),
                g(e.params[1]) && v(h)
                  ? ((h =
                      "The eth_personalSign method requires params ordered "),
                    (h +=
                      "[message, address]. This was previously handled incorrectly, "),
                    (h += "and has been corrected automatically. "),
                    (h +=
                      "Please switch this param order for smooth behavior in the future."),
                    (c = e.params[0]),
                    (s = e.params[1]))
                  : ((s = e.params[0]), (c = e.params[1])),
                (a = e.params[2] || {}),
                (o = u(a, { from: c, data: s })),
                void n(
                  [
                    function (e) {
                      return d.validatePersonalMessage(o, e);
                    },
                    function (e) {
                      return d.processPersonalMessage(o, e);
                    },
                  ],
                  r
                )
              );
            case "eth_decryptMessage":
              return (
                (l = e.params[0]),
                g(e.params[1]) && v(l)
                  ? ((l =
                      "The eth_decryptMessage method requires params ordered "),
                    (l +=
                      "[message, address]. This was previously handled incorrectly, "),
                    (l += "and has been corrected automatically. "),
                    (l +=
                      "Please switch this param order for smooth behavior in the future."),
                    (c = e.params[0]),
                    (s = e.params[1]))
                  : ((s = e.params[0]), (c = e.params[1])),
                (a = e.params[2] || {}),
                (o = u(a, { from: c, data: s })),
                void n(
                  [
                    function (e) {
                      return d.validateDecryptMessage(o, e);
                    },
                    function (e) {
                      return d.processDecryptMessage(o, e);
                    },
                  ],
                  r
                )
              );
            case "encryption_public_key":
              return (
                (f = e.params[0]),
                void n(
                  [
                    function (e) {
                      return d.validateEncryptionPublicKey(f, e);
                    },
                    function (e) {
                      return d.processEncryptionPublicKey(f, e);
                    },
                  ],
                  r
                )
              );
            case "personal_ecRecover":
              return (function () {
                s = e.params[0];
                var t = e.params[1];
                (a = e.params[2] || {}),
                  (o = u(a, { sig: t, data: s })),
                  d.recoverPersonalSignature(o, r);
              })();
            case "eth_signTypedData":
            case "eth_signTypedData_v3":
            case "eth_signTypedData_v4":
              return (
                (h = e.params[0]),
                (l = e.params[1]),
                v(h) ? ((c = h), (s = l)) : ((s = h), (c = l)),
                (a = e.params[2] || {}),
                (o = u(a, { from: c, data: s })),
                void n(
                  [
                    function (e) {
                      return d.validateTypedMessage(o, e);
                    },
                    function (e) {
                      return d.processTypedMessage(o, e);
                    },
                  ],
                  r
                )
              );
            case "parity_postTransaction":
              return (i = e.params[0]), void d.parityPostTransaction(i, r);
            case "parity_postSign":
              return (
                (c = e.params[0]),
                (s = e.params[1]),
                void d.parityPostSign(c, s, r)
              );
            case "parity_checkRequest":
              return (c = e.params[0]), void d.parityCheckRequest(c, r);
            case "parity_defaultAccount":
              return void d.getAccounts(function (e, t) {
                if (e) return r(e);
                (t = t[0] || null), r(null, t);
              });
            default:
              return void t();
          }
        }),
        (d.prototype.getAccounts = function (e) {
          e(null, []);
        }),
        (d.prototype.processTransaction = function (e, t) {
          var r = this;
          n(
            [
              function (t) {
                return r.approveTransaction(e, t);
              },
              function (e, t) {
                return r.checkApproval("transaction", e, t);
              },
              function (t) {
                return r.finalizeAndSubmitTx(e, t);
              },
            ],
            t
          );
        }),
        (d.prototype.processSignTransaction = function (e, t) {
          var r = this;
          n(
            [
              function (t) {
                return r.approveTransaction(e, t);
              },
              function (e, t) {
                return r.checkApproval("transaction", e, t);
              },
              function (t) {
                return r.finalizeTx(e, t);
              },
            ],
            t
          );
        }),
        (d.prototype.processMessage = function (e, t) {
          var r = this;
          n(
            [
              function (t) {
                return r.approveMessage(e, t);
              },
              function (e, t) {
                return r.checkApproval("message", e, t);
              },
              function (t) {
                return r.signMessage(e, t);
              },
            ],
            t
          );
        }),
        (d.prototype.processPersonalMessage = function (e, t) {
          var r = this;
          n(
            [
              function (t) {
                return r.approvePersonalMessage(e, t);
              },
              function (e, t) {
                return r.checkApproval("message", e, t);
              },
              function (t) {
                return r.signPersonalMessage(e, t);
              },
            ],
            t
          );
        }),
        (d.prototype.processDecryptMessage = function (e, t) {
          var r = this;
          n(
            [
              function (t) {
                return r.approveDecryptMessage(e, t);
              },
              function (e, t) {
                return r.checkApproval("decryptMessage", e, t);
              },
              function (t) {
                return r.decryptMessage(e, t);
              },
            ],
            t
          );
        }),
        (d.prototype.processEncryptionPublicKey = function (e, t) {
          var r = this;
          n(
            [
              function (t) {
                return r.approveEncryptionPublicKey(e, t);
              },
              function (e, t) {
                return r.checkApproval("encryptionPublicKey", e, t);
              },
              function (t) {
                return r.encryptionPublicKey(e, t);
              },
            ],
            t
          );
        }),
        (d.prototype.processTypedMessage = function (e, t) {
          var r = this;
          n(
            [
              function (t) {
                return r.approveTypedMessage(e, t);
              },
              function (e, t) {
                return r.checkApproval("message", e, t);
              },
              function (t) {
                return r.signTypedMessage(e, t);
              },
            ],
            t
          );
        }),
        (d.prototype.autoApprove = function (e, t) {
          t(null, !0);
        }),
        (d.prototype.checkApproval = function (e, t, r) {
          r(t ? null : new Error("User denied " + e + " signature."));
        }),
        (d.prototype.parityPostTransaction = function (e, t) {
          var r = this,
            n = r._parityRequestCount,
            i = "0x".concat(n.toString(16));
          r._parityRequestCount++,
            r.emitPayload(
              { method: "eth_sendTransaction", params: [e] },
              function (e, t) {
                e
                  ? (r._parityRequests[i] = { error: e })
                  : ((t = t.result), (r._parityRequests[i] = t));
              }
            ),
            t(null, i);
        }),
        (d.prototype.parityPostSign = function (e, t, r) {
          var n = this,
            i = n._parityRequestCount,
            o = "0x".concat(i.toString(16));
          n._parityRequestCount++,
            n.emitPayload(
              { method: "eth_sign", params: [e, t] },
              function (e, t) {
                e
                  ? (n._parityRequests[o] = { error: e })
                  : ((t = t.result), (n._parityRequests[o] = t));
              }
            ),
            r(null, o);
        }),
        (d.prototype.parityCheckRequest = function (e, t) {
          return (e = this._parityRequests[e] || null)
            ? e.error
              ? t(e.error)
              : void t(null, e)
            : t(null, null);
        }),
        (d.prototype.recoverPersonalSignature = function (e, t) {
          var r;
          try {
            r = s.recoverPersonalSignature(e);
          } catch (e) {
            return t(e);
          }
          t(null, r);
        }),
        (d.prototype.validateTransaction = function (e, t) {
          if (void 0 === e.from)
            return t(
              new Error(
                "Undefined address - from address required to sign transaction."
              )
            );
          this.validateSender(e.from, function (r, n) {
            return r
              ? t(r)
              : n
              ? void t()
              : t(
                  new Error(
                    'Unknown address - unable to sign transaction for this address: "'.concat(
                      e.from,
                      '"'
                    )
                  )
                );
          });
        }),
        (d.prototype.validateMessage = function (e, t) {
          if (void 0 === e.from)
            return t(
              new Error(
                "Undefined address - from address required to sign message."
              )
            );
          this.validateSender(e.from, function (r, n) {
            return r
              ? t(r)
              : n
              ? void t()
              : t(
                  new Error(
                    'Unknown address - unable to sign message for this address: "'.concat(
                      e.from,
                      '"'
                    )
                  )
                );
          });
        }),
        (d.prototype.validatePersonalMessage = function (e, t) {
          return void 0 === e.from
            ? t(
                new Error(
                  "Undefined address - from address required to sign personal message."
                )
              )
            : void 0 === e.data
            ? t(
                new Error(
                  "Undefined message - message required to sign personal message."
                )
              )
            : _(e.data)
            ? void this.validateSender(e.from, function (r, n) {
                return r
                  ? t(r)
                  : n
                  ? void t()
                  : t(
                      new Error(
                        'Unknown address - unable to sign message for this address: "'.concat(
                          e.from,
                          '"'
                        )
                      )
                    );
              })
            : t(
                new Error(
                  "HookedWalletSubprovider - validateMessage - message was not encoded as hex."
                )
              );
        }),
        (d.prototype.validateDecryptMessage = function (e, t) {
          return void 0 === e.from
            ? t(
                new Error(
                  "Undefined address - from address required to decrypt message."
                )
              )
            : void 0 === e.data
            ? t(
                new Error(
                  "Undefined message - message required to decrypt message."
                )
              )
            : _(e.data)
            ? void this.validateSender(e.from, function (r, n) {
                return r
                  ? t(r)
                  : n
                  ? void t()
                  : t(
                      new Error(
                        'Unknown address - unable to decrypt message for this address: "'.concat(
                          e.from,
                          '"'
                        )
                      )
                    );
              })
            : t(
                new Error(
                  "HookedWalletSubprovider - validateDecryptMessage - message was not encoded as hex."
                )
              );
        }),
        (d.prototype.validateEncryptionPublicKey = function (e, t) {
          this.validateSender(e, function (r, n) {
            return r
              ? t(r)
              : n
              ? void t()
              : t(
                  new Error(
                    'Unknown address - unable to obtain encryption public key for this address: "'.concat(
                      e,
                      '"'
                    )
                  )
                );
          });
        }),
        (d.prototype.validateTypedMessage = function (e, t) {
          return void 0 === e.from
            ? t(
                new Error(
                  "Undefined address - from address required to sign typed data."
                )
              )
            : void 0 === e.data
            ? t(
                new Error(
                  "Undefined data - message required to sign typed data."
                )
              )
            : void this.validateSender(e.from, function (r, n) {
                return r
                  ? t(r)
                  : n
                  ? void t()
                  : t(
                      new Error(
                        'Unknown address - unable to sign message for this address: "'.concat(
                          e.from,
                          '"'
                        )
                      )
                    );
              });
        }),
        (d.prototype.validateSender = function (e, t) {
          if (!e) return t(null, !1);
          this.getAccounts(function (r, n) {
            if (r) return t(r);
            (n = -1 !== n.map(p).indexOf(e.toLowerCase())), t(null, n);
          });
        }),
        (d.prototype.finalizeAndSubmitTx = function (e, t) {
          var r = this;
          r.nonceLock.take(function () {
            n(
              [
                r.fillInTxExtras.bind(r, e),
                r.signTransaction.bind(r),
                r.publishTransaction.bind(r),
              ],
              function (e, n) {
                return r.nonceLock.leave(), e ? t(e) : void t(null, n);
              }
            );
          });
        }),
        (d.prototype.finalizeTx = function (e, t) {
          var r = this;
          r.nonceLock.take(function () {
            n(
              [r.fillInTxExtras.bind(r, e), r.signTransaction.bind(r)],
              function (n, i) {
                return (
                  r.nonceLock.leave(),
                  n ? t(n) : void t(null, { raw: i, tx: e })
                );
              }
            );
          });
        }),
        (d.prototype.publishTransaction = function (e, t) {
          this.emitPayload(
            { method: "eth_sendRawTransaction", params: [e] },
            function (e, r) {
              return e ? t(e) : void t(null, r.result);
            }
          );
        }),
        (d.prototype.estimateGas = function (e, t) {
          l(this.engine, e, t);
        }),
        (d.prototype.getGasPrice = function (e) {
          this.emitPayload(
            { method: "eth_gasPrice", params: [] },
            function (t, r) {
              return t ? e(t) : void e(null, r.result);
            }
          );
        }),
        (d.prototype.fillInTxExtras = function (e, t) {
          var r = e.from,
            n = {};
          void 0 === e.gasPrice && (n.gasPrice = this.getGasPrice.bind(this)),
            void 0 === e.nonce &&
              (n.nonce = this.emitPayload.bind(this, {
                method: "eth_getTransactionCount",
                params: [r, "pending"],
              })),
            void 0 === e.gas &&
              (n.gas = this.estimateGas.bind(this, {
                from: e.from,
                to: e.to,
                value: e.value,
                data: e.data,
                gas: e.gas,
                gasPrice: e.gasPrice,
                nonce: e.nonce,
              })),
            i(n, function (r, n) {
              if (r) return t(r);
              (r = {}),
                n.gasPrice && (r.gasPrice = n.gasPrice),
                n.nonce && (r.nonce = n.nonce.result),
                n.gas && (r.gas = n.gas),
                t(null, u(e, r));
            });
        });
    },
    1612: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          if (((t = (0, o.default)(t || i.default)), !(0, n.default)(e)))
            return t(
              new Error(
                "First argument to waterfall must be an array of functions"
              )
            );
          if (!e.length) return t();
          var r = 0;
          function c(t) {
            var n = (0, u.default)(e[r++]);
            t.push((0, s.default)(f)), n.apply(null, t);
          }
          function f(n) {
            if (n || r === e.length) return t.apply(null, arguments);
            c((0, a.default)(arguments, 1));
          }
          c([]);
        });
      var n = c(r(135)),
        i = c(r(1161)),
        o = c(r(1235)),
        a = c(r(1187)),
        s = c(r(1236)),
        u = c(r(1135));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    1613: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          (0, i.default)(n.default, e, t);
        });
      var n = o(r(1350)),
        i = o(r(1614));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    1614: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t, r) {
          r = r || n.default;
          var s = (0, i.default)(t) ? [] : {};
          e(
            t,
            function (e, t, r) {
              (0, a.default)(e)(function (e, n) {
                2 < arguments.length && (n = (0, o.default)(arguments, 1)),
                  (s[t] = n),
                  r(e);
              });
            },
            function (e) {
              r(e, s);
            }
          );
        });
      var n = s(r(1161)),
        i = s(r(241)),
        o = s(r(1187)),
        a = s(r(1135));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t.default;
    },
    1615: function (e, t, r) {
      var n = r(1160),
        i = r(1616);
      function o(e) {
        var t = new Error("Expect argument to be non-empty array");
        if ("object" != typeof e || !e.length) throw t;
        var r = e.map(function (e) {
            return "bytes" === e.type ? n.toBuffer(e.value) : e.value;
          }),
          o = e.map(function (e) {
            return e.type;
          }),
          a = e.map(function (e) {
            if (!e.name) throw t;
            return e.type + " " + e.name;
          });
        return i.soliditySHA3(
          ["bytes32", "bytes32"],
          [
            i.soliditySHA3(new Array(e.length).fill("string"), a),
            i.soliditySHA3(o, r),
          ]
        );
      }
      function a(e, t) {
        return (
          (t = n.toBuffer(t)),
          (t = n.fromRpcSig(t)),
          n.ecrecover(e, t.v, t.r, t.s)
        );
      }
      function s(e) {
        var t = n.toBuffer(e.data);
        return a(n.hashPersonalMessage(t), e.sig);
      }
      function u(e, t) {
        for (var r = "" + e; r.length < t; ) r = "0" + r;
        return r;
      }
      e.exports = {
        concatSig: function (e, t, r) {
          return (
            (t = n.fromSigned(t)),
            (r = n.fromSigned(r)),
            (e = n.bufferToInt(e)),
            (t = u(n.toUnsigned(t).toString("hex"), 64)),
            (r = u(n.toUnsigned(r).toString("hex"), 64)),
            (e = n.stripHexPrefix(n.intToHex(e))),
            n.addHexPrefix(t.concat(r, e)).toString("hex")
          );
        },
        normalize: function (e) {
          if (e) {
            if (
              ("number" == typeof e &&
                ((t = n.toBuffer(e)), (e = n.bufferToHex(t))),
              "string" == typeof e)
            )
              return n.addHexPrefix(e.toLowerCase());
            var t =
              "eth-sig-util.normalize() requires hex string or integer input.";
            throw ((t += " received " + typeof e + ": " + e), new Error(t));
          }
        },
        personalSign: function (e, t) {
          return (
            (t = n.toBuffer(t.data)),
            (t = n.hashPersonalMessage(t)),
            (e = n.ecsign(t, e)),
            n.bufferToHex(this.concatSig(e.v, e.r, e.s))
          );
        },
        recoverPersonalSignature: function (e) {
          return (e = s(e)), (e = n.publicToAddress(e)), n.bufferToHex(e);
        },
        extractPublicKey: function (e) {
          return "0x" + s(e).toString("hex");
        },
        typedSignatureHash: function (e) {
          return (e = o(e)), n.bufferToHex(e);
        },
        signTypedData: function (e, t) {
          return (
            (t = o(t.data)),
            (e = n.ecsign(t, e)),
            n.bufferToHex(this.concatSig(e.v, e.r, e.s))
          );
        },
        recoverTypedSignature: function (e) {
          return (
            (e = a(o(e.data), e.sig)),
            (e = n.publicToAddress(e)),
            n.bufferToHex(e)
          );
        },
      };
    },
    1616: function (e, t, r) {
      e.exports = r(1617);
    },
    1617: function (e, t, r) {
      (function (t) {
        function n() {}
        var i = r(1618),
          o = r(42);
        function a(e) {
          return e.startsWith("int[")
            ? "int256" + e.slice(3)
            : "int" === e
            ? "int256"
            : e.startsWith("uint[")
            ? "uint256" + e.slice(4)
            : "uint" === e
            ? "uint256"
            : e.startsWith("fixed[")
            ? "fixed128x128" + e.slice(5)
            : "fixed" === e
            ? "fixed128x128"
            : e.startsWith("ufixed[")
            ? "ufixed128x128" + e.slice(6)
            : "ufixed" === e
            ? "ufixed128x128"
            : e;
        }
        function s(e) {
          return parseInt(/^\D+(\d+)$/.exec(e)[1], 10);
        }
        function u(e) {
          return (
            (e = /^\D+(\d+)x(\d+)$/.exec(e)),
            [parseInt(e[1], 10), parseInt(e[2], 10)]
          );
        }
        function c(e) {
          return (e = e.match(/(.*)\[(.*?)\]$/))
            ? "" === e[2]
              ? "dynamic"
              : parseInt(e[2], 10)
            : null;
        }
        function f(e) {
          var t = typeof e;
          if ("string" == t)
            return i.isHexPrefixed(e)
              ? new o(i.stripHexPrefix(e), 16)
              : new o(e, 10);
          if ("number" == t) return new o(e);
          if (e.toArray) return e;
          throw new Error("Argument is not a number");
        }
        function l(e) {
          var t = /^(\w+)\((.*)\)$/.exec(e);
          if (3 !== t.length) throw new Error("Invalid method signature");
          return null !== (e = /^(.+)\):\((.+)$/.exec(t[2])) && 3 === e.length
            ? { method: t[1], args: e[1].split(","), retargs: e[2].split(",") }
            : (1 === (e = t[2].split(",")).length && "" === e[0] && (e = []),
              { method: t[1], args: e });
        }
        function h(e, r) {
          var n, a, l, d, v;
          if ("address" === e) return h("uint160", f(r));
          if ("bool" === e) return h("uint8", r ? 1 : 0);
          if ("string" === e) return h("bytes", t.from(r, "utf8"));
          if (p(e)) {
            if (void 0 === r.length) throw new Error("Not an array?");
            if ("dynamic" !== (n = c(e)) && 0 !== n && r.length > n)
              throw new Error("Elements exceed array size: " + n);
            for (d in ((l = []),
            (e = e.slice(0, e.lastIndexOf("["))),
            (r = "string" == typeof r ? JSON.parse(r) : r)))
              l.push(h(e, r[d]));
            return (
              "dynamic" === n && ((v = h("uint256", r.length)), l.unshift(v)),
              t.concat(l)
            );
          }
          if ("bytes" === e)
            return (
              (r = t.from(r)),
              (l = t.concat([h("uint256", r.length), r])),
              r.length % 32 != 0
                ? t.concat([l, i.zeros(32 - (r.length % 32))])
                : l
            );
          if (e.startsWith("bytes")) {
            if ((n = s(e)) < 1 || 32 < n)
              throw new Error("Invalid bytes<N> width: " + n);
            return i.setLengthRight(r, 32);
          }
          if (e.startsWith("uint")) {
            if ((n = s(e)) % 8 || n < 8 || 256 < n)
              throw new Error("Invalid uint<N> width: " + n);
            if ((a = f(r)).bitLength() > n)
              throw new Error(
                "Supplied uint exceeds width: " + n + " vs " + a.bitLength()
              );
            if (a < 0) throw new Error("Supplied uint is negative");
            return a.toArrayLike(t, "be", 32);
          }
          if (e.startsWith("int")) {
            if ((n = s(e)) % 8 || n < 8 || 256 < n)
              throw new Error("Invalid int<N> width: " + n);
            if ((a = f(r)).bitLength() > n)
              throw new Error(
                "Supplied int exceeds width: " + n + " vs " + a.bitLength()
              );
            return a.toTwos(256).toArrayLike(t, "be", 32);
          }
          if (e.startsWith("ufixed")) {
            if (((n = u(e)), (a = f(r)) < 0))
              throw new Error("Supplied ufixed is negative");
            return h("uint256", a.mul(new o(2).pow(new o(n[1]))));
          }
          if (e.startsWith("fixed"))
            return (n = u(e)), h("int256", f(r).mul(new o(2).pow(new o(n[1]))));
          throw new Error("Unsupported or invalid type: " + e);
        }
        function d(e) {
          var t;
          if (p(e)) {
            var r = c(e),
              n = d((n = e.slice(0, e.lastIndexOf("["))));
            return {
              isArray: !0,
              name: e,
              size: r,
              memoryUsage: "dynamic" === r ? 32 : n.memoryUsage * r,
              subArray: n,
            };
          }
          switch (e) {
            case "address":
              t = "uint160";
              break;
            case "bool":
              t = "uint8";
              break;
            case "string":
              t = "bytes";
          }
          if (
            ((n = { rawType: t, name: e, memoryUsage: 32 }),
            (e.startsWith("bytes") && "bytes" !== e) ||
            e.startsWith("uint") ||
            e.startsWith("int")
              ? (n.size = s(e))
              : (e.startsWith("ufixed") || e.startsWith("fixed")) &&
                (n.size = u(e)),
            e.startsWith("bytes") &&
              "bytes" !== e &&
              (n.size < 1 || 32 < n.size))
          )
            throw new Error("Invalid bytes<N> width: " + n.size);
          if (
            (e.startsWith("uint") || e.startsWith("int")) &&
            (n.size % 8 || n.size < 8 || 256 < n.size)
          )
            throw new Error("Invalid int/uint<N> width: " + n.size);
          return n;
        }
        function p(e) {
          return e.lastIndexOf("]") === e.length - 1;
        }
        function v(e, t) {
          return e.startsWith("address") || e.startsWith("bytes")
            ? "0x" + t.toString("hex")
            : t.toString();
        }
        (n.eventID = function (e, r) {
          return (
            (r = e + "(" + r.map(a).join(",") + ")"), i.keccak256(t.from(r))
          );
        }),
          (n.methodID = function (e, t) {
            return n.eventID(e, t).slice(0, 4);
          }),
          (n.rawEncode = function (e, r) {
            var n = [],
              i = [],
              o = 0;
            e.forEach(function (e) {
              p(e)
                ? ((e = c(e)), (o += "dynamic" !== e ? 32 * e : 32))
                : (o += 32);
            });
            for (var s = 0; s < e.length; s++) {
              var u = a(e[s]),
                f = h(u, r[s]);
              "string" === (u = u) || "bytes" === u || "dynamic" === c(u)
                ? (n.push(h("uint256", o)), i.push(f), (o += f.length))
                : n.push(f);
            }
            return t.concat(n.concat(i));
          }),
          (n.rawDecode = function (e, r) {
            var n = [];
            r = t.from(r);
            for (var i = 0, s = 0; s < e.length; s++) {
              var u = d(a(e[s])),
                c = (function e(r, n, i) {
                  var a, s, u, c;
                  if ("address" === (r = "string" == typeof r ? d(r) : r).name)
                    return e(r.rawType, n, i)
                      .toArrayLike(t, "be", 20)
                      .toString("hex");
                  if ("bool" === r.name)
                    return (
                      e(r.rawType, n, i).toString() === new o(1).toString()
                    );
                  if ("string" === r.name) {
                    var f = e(r.rawType, n, i);
                    return t.from(f, "utf8").toString();
                  }
                  if (r.isArray) {
                    for (
                      u = [],
                        a = r.size,
                        "dynamic" === r.size &&
                          ((i = e("uint256", n, i).toNumber()),
                          (a = e("uint256", n, i).toNumber()),
                          (i += 32)),
                        c = 0;
                      c < a;
                      c++
                    ) {
                      var l = e(r.subArray, n, i);
                      u.push(l), (i += r.subArray.memoryUsage);
                    }
                    return u;
                  }
                  if ("bytes" === r.name)
                    return (
                      (i = e("uint256", n, i).toNumber()),
                      (a = e("uint256", n, i).toNumber()),
                      n.slice(i + 32, i + 32 + a)
                    );
                  if (r.name.startsWith("bytes")) return n.slice(i, i + r.size);
                  if (r.name.startsWith("uint")) {
                    if (
                      (s = new o(n.slice(i, i + 32), 16, "be")).bitLength() >
                      r.size
                    )
                      throw new Error(
                        "Decoded int exceeds width: " +
                          r.size +
                          " vs " +
                          s.bitLength()
                      );
                    return s;
                  }
                  if (r.name.startsWith("int")) {
                    if (
                      (s = new o(n.slice(i, i + 32), 16, "be").fromTwos(
                        256
                      )).bitLength() > r.size
                    )
                      throw new Error(
                        "Decoded uint exceeds width: " +
                          r.size +
                          " vs " +
                          s.bitLength()
                      );
                    return s;
                  }
                  if (r.name.startsWith("ufixed")) {
                    if (
                      ((a = new o(2).pow(new o(r.size[1]))),
                      !(s = e("uint256", n, i)).mod(a).isZero())
                    )
                      throw new Error("Decimals not supported yet");
                    return s.div(a);
                  }
                  if (r.name.startsWith("fixed")) {
                    if (
                      ((a = new o(2).pow(new o(r.size[1]))),
                      !(s = e("int256", n, i)).mod(a).isZero())
                    )
                      throw new Error("Decimals not supported yet");
                    return s.div(a);
                  }
                  throw new Error("Unsupported or invalid type: " + r.name);
                })(u, r, i);
              (i += u.memoryUsage), n.push(c);
            }
            return n;
          }),
          (n.simpleEncode = function (e) {
            var r = Array.prototype.slice.call(arguments).slice(1),
              i = l(e);
            if (r.length !== i.args.length)
              throw new Error("Argument count mismatch");
            return t.concat([
              n.methodID(i.method, i.args),
              n.rawEncode(i.args, r),
            ]);
          }),
          (n.simpleDecode = function (e, t) {
            if (!(e = l(e)).retargs)
              throw new Error("No return values in method");
            return n.rawDecode(e.retargs, t);
          }),
          (n.stringify = function (e, t) {
            var r,
              n = [];
            for (r in e) {
              var i = e[r],
                o = t[r];
              o = /^[^\[]+\[.*\]$/.test(i)
                ? o
                    .map(function (e) {
                      return v(i, e);
                    })
                    .join(", ")
                : v(i, o);
              n.push(o);
            }
            return n;
          }),
          (n.solidityHexValue = function (e, r, o) {
            var a, u;
            if (p(e)) {
              var l = e.replace(/\[.*?\]/, "");
              if (!p(l)) {
                var h = c(e);
                if ("dynamic" !== h && 0 !== h && r.length > h)
                  throw new Error("Elements exceed array size: " + h);
              }
              return (
                (h = r.map(function (e) {
                  return n.solidityHexValue(l, e, 256);
                })),
                t.concat(h)
              );
            }
            if ("bytes" === e) return r;
            if ("string" === e) return t.from(r, "utf8");
            if ("bool" === e) {
              o = o || 8;
              var d = Array(o / 4).join("0");
              return t.from(r ? d + "1" : d + "0", "hex");
            }
            if ("address" === e)
              return (d = o ? o / 8 : 20), i.setLengthLeft(r, d);
            if (e.startsWith("bytes")) {
              if ((a = s(e)) < 1 || 32 < a)
                throw new Error("Invalid bytes<N> width: " + a);
              return i.setLengthRight(r, a);
            }
            if (e.startsWith("uint")) {
              if ((a = s(e)) % 8 || a < 8 || 256 < a)
                throw new Error("Invalid uint<N> width: " + a);
              if ((u = f(r)).bitLength() > a)
                throw new Error(
                  "Supplied uint exceeds width: " + a + " vs " + u.bitLength()
                );
              return u.toArrayLike(t, "be", (o = o || a) / 8);
            }
            if (e.startsWith("int")) {
              if ((a = s(e)) % 8 || a < 8 || 256 < a)
                throw new Error("Invalid int<N> width: " + a);
              if ((u = f(r)).bitLength() > a)
                throw new Error(
                  "Supplied int exceeds width: " + a + " vs " + u.bitLength()
                );
              return (o = o || a), u.toTwos(a).toArrayLike(t, "be", o / 8);
            }
            throw new Error("Unsupported or invalid type: " + e);
          }),
          (n.solidityPack = function (e, r) {
            if (e.length !== r.length)
              throw new Error("Number of types are not matching the values");
            for (var i = [], o = 0; o < e.length; o++) {
              var s = a(e[o]),
                u = r[o];
              i.push(n.solidityHexValue(s, u, null));
            }
            return t.concat(i);
          }),
          (n.soliditySHA3 = function (e, t) {
            return i.keccak256(n.solidityPack(e, t));
          }),
          (n.soliditySHA256 = function (e, t) {
            return i.sha256(n.solidityPack(e, t));
          }),
          (n.solidityRIPEMD160 = function (e, t) {
            return i.ripemd160(n.solidityPack(e, t), !0);
          }),
          (n.fromSerpent = function (e) {
            for (var t, r = [], n = 0; n < e.length; n++) {
              var i = e[n];
              if ("s" === i) r.push("bytes");
              else if ("b" === i) {
                for (
                  var o = "bytes", a = n + 1;
                  a < e.length && "0" <= (t = e[a]) && t <= "9";

                )
                  (o += e[a] - "0"), a++;
                (n = a - 1), r.push(o);
              } else if ("i" === i) r.push("int256");
              else {
                if ("a" !== i)
                  throw new Error("Unsupported or invalid type: " + i);
                r.push("int256[]");
              }
            }
            return r;
          }),
          (n.toSerpent = function (e) {
            for (var t = [], r = 0; r < e.length; r++) {
              var n = e[r];
              if ("bytes" === n) t.push("s");
              else if (n.startsWith("bytes")) t.push("b" + s(n));
              else if ("int256" === n) t.push("i");
              else {
                if ("int256[]" !== n)
                  throw new Error("Unsupported or invalid type: " + n);
                t.push("a");
              }
            }
            return t.join("");
          }),
          (e.exports = n);
      }.call(this, r(532).Buffer));
    },
    1618: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  });
              }
            : function (e, t, r, n) {
                e[(n = void 0 === n ? r : n)] = t[r];
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e)
              "default" === r || t.hasOwnProperty(r) || n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.secp256k1 = t.rlp = t.BN = void 0);
      var o = r(1243);
      t.secp256k1 = o;
      var a = r(1148);
      o = r(42);
      (t.BN = o),
        (o = r(1185)),
        (t.rlp = o),
        Object.assign(t, a),
        i(r(1621), t),
        i(r(1622), t),
        i(r(1244), t),
        i(r(1623), t),
        i(r(1163), t),
        i(r(1624), t);
    },
    1619: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = r(42),
          i = new (r(1146).ec)("secp256k1"),
          o = i.curve;
        (t.privateKeyExport = function (e, t) {
          if ((void 0 === t && (t = !0), 0 <= (e = new n(e)).ucmp(o.n)))
            throw new Error("couldn't export to DER format");
          return (e = i.g.mul(e)), a(e.getX(), e.getY(), t);
        }),
          (t.privateKeyModInverse = function (t) {
            if (0 <= (t = new n(t)).ucmp(o.n) || t.isZero())
              throw new Error("private key range is invalid");
            return t.invm(o.n).toArrayLike(e, "be", 32);
          }),
          (t.signatureImport = function (t) {
            var r = new n(t.r);
            return (
              0 <= r.ucmp(o.n) && (r = new n(0)),
              0 <= (t = new n(t.s)).ucmp(o.n) && (t = new n(0)),
              e.concat([r.toArrayLike(e, "be", 32), t.toArrayLike(e, "be", 32)])
            );
          }),
          (t.ecdhUnsafe = function (e, t, r) {
            if (
              (void 0 === r && (r = !0),
              (e = i.keyFromPublic(e)),
              0 <= (t = new n(t)).ucmp(o.n) || t.isZero())
            )
              throw new Error("scalar was invalid (zero or overflow)");
            return (t = e.pub.mul(t)), a(t.getX(), t.getY(), r);
          });
        var a = function (t, r, n) {
          var i;
          return (
            n
              ? (((i = e.alloc(33))[0] = r.isOdd() ? 3 : 2),
                t.toArrayLike(e, "be", 32).copy(i, 1))
              : (((i = e.alloc(65))[0] = 4),
                t.toArrayLike(e, "be", 32).copy(i, 1),
                r.toArrayLike(e, "be", 32).copy(i, 33)),
            i
          );
        };
      }.call(this, r(532).Buffer));
    },
    1620: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = e.from([
            48, 129, 211, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129,
            133, 48, 129, 130, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1,
            1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
            255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
            255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4,
            33, 2, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149,
            206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129,
            91, 22, 248, 23, 152, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255,
            255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230,
            175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161,
            36, 3, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          ]),
          n = e.from([
            48, 130, 1, 19, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160,
            129, 165, 48, 129, 162, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61,
            1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
            255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
            255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7,
            4, 65, 4, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149,
            206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129,
            91, 22, 248, 23, 152, 72, 58, 218, 119, 38, 163, 196, 101, 93, 164,
            251, 252, 14, 17, 8, 168, 253, 23, 180, 72, 166, 133, 84, 25, 156,
            71, 208, 143, 251, 16, 212, 184, 2, 33, 0, 255, 255, 255, 255, 255,
            255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174,
            220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2,
            1, 1, 161, 68, 3, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
          ]);
        (t.privateKeyExport = function (t, i, o) {
          var a = e.from((o = void 0 === o || o) ? r : n);
          return t.copy(a, o ? 8 : 9), i.copy(a, o ? 181 : 214), a;
        }),
          (t.privateKeyImport = function (e) {
            var t = e.length,
              r = 0;
            if (t < r + 1 || 48 !== e[r]) return null;
            if (t < (r += 1) + 1 || !(128 & e[r])) return null;
            var n = 127 & e[r];
            if (n < 1 || 2 < n) return null;
            if (t < (r += 1) + n) return null;
            var i = e[r + n - 1] | (1 < n ? e[r + n - 2] << 8 : 0);
            return t < (r += n) + i ||
              t < r + 3 ||
              2 !== e[r] ||
              1 !== e[r + 1] ||
              1 !== e[r + 2] ||
              t < (r += 3) + 2 ||
              4 !== e[r] ||
              32 < e[r + 1] ||
              t < r + 2 + e[r + 1]
              ? null
              : e.slice(r + 2, r + 2 + e[r + 1]);
          }),
          (t.signatureImportLax = function (t) {
            var r = e.alloc(32, 0),
              n = e.alloc(32, 0),
              i = t.length,
              o = 0;
            if (48 !== t[o++]) return null;
            var a = t[o++];
            if (128 & a && i < (o += a - 128)) return null;
            if (2 !== t[o++]) return null;
            var s = t[o++];
            if (128 & s) {
              if (i < o + (a = s - 128)) return null;
              for (; 0 < a && 0 === t[o]; o += 1, --a);
              for (s = 0; 0 < a; o += 1, --a) s = (s << 8) + t[o];
            }
            if (i - o < s) return null;
            var u = o;
            if (((o += s), 2 !== t[o++])) return null;
            var c = t[o++];
            if (128 & c) {
              if (i < o + (a = c - 128)) return null;
              for (; 0 < a && 0 === t[o]; o += 1, --a);
              for (c = 0; 0 < a; o += 1, --a) c = (c << 8) + t[o];
            }
            if (i - o < c) return null;
            var f = o;
            for (o += c; 0 < s && 0 === t[u]; --s, u += 1);
            if (32 < s) return null;
            for (
              (i = t.slice(u, u + s)).copy(r, 32 - i.length);
              0 < c && 0 === t[f];
              --c, f += 1
            );
            return 32 < c
              ? null
              : ((i = t.slice(f, f + c)).copy(n, 32 - i.length),
                { r: r, s: n });
          });
      }.call(this, r(532).Buffer));
    },
    1621: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.KECCAK256_RLP =
            t.KECCAK256_RLP_S =
            t.KECCAK256_RLP_ARRAY =
            t.KECCAK256_RLP_ARRAY_S =
            t.KECCAK256_NULL =
            t.KECCAK256_NULL_S =
            t.TWO_POW256 =
            t.MAX_INTEGER =
              void 0);
        var n = r(42);
        (t.MAX_INTEGER = new n(
          "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
          16
        )),
          (t.TWO_POW256 = new n(
            "10000000000000000000000000000000000000000000000000000000000000000",
            16
          )),
          (t.KECCAK256_NULL_S =
            "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"),
          (t.KECCAK256_NULL = e.from(t.KECCAK256_NULL_S, "hex")),
          (t.KECCAK256_RLP_ARRAY_S =
            "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347"),
          (t.KECCAK256_RLP_ARRAY = e.from(t.KECCAK256_RLP_ARRAY_S, "hex")),
          (t.KECCAK256_RLP_S =
            "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"),
          (t.KECCAK256_RLP = e.from(t.KECCAK256_RLP_S, "hex"));
      }.call(this, r(532).Buffer));
    },
    1622: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.importPublic =
            t.privateToPublic =
            t.privateToAddress =
            t.publicToAddress =
            t.pubToAddress =
            t.isValidPublic =
            t.isValidPrivate =
            t.isPrecompiled =
            t.generateAddress2 =
            t.generateAddress =
            t.isValidChecksumAddress =
            t.toChecksumAddress =
            t.isZeroAddress =
            t.isValidAddress =
            t.zeroAddress =
              void 0);
        var n = r(1233),
          i = r(1148),
          o = r(1243),
          a = r(42),
          s = r(1163),
          u = r(1244);
        (t.zeroAddress = function () {
          var e = s.zeros(20);
          return s.bufferToHex(e);
        }),
          (t.isValidAddress = function (e) {
            return /^0x[0-9a-fA-F]{40}$/.test(e);
          }),
          (t.isZeroAddress = function (e) {
            return t.zeroAddress() === s.addHexPrefix(e);
          }),
          (t.toChecksumAddress = function (e, t) {
            e = i.stripHexPrefix(e).toLowerCase();
            t = void 0 !== t ? t.toString() + "0x" : "";
            for (
              var r = u.keccak(t + e).toString("hex"), n = "0x", o = 0;
              o < e.length;
              o++
            )
              8 <= parseInt(r[o], 16) ? (n += e[o].toUpperCase()) : (n += e[o]);
            return n;
          }),
          (t.isValidChecksumAddress = function (e, r) {
            return t.isValidAddress(e) && t.toChecksumAddress(e, r) === e;
          }),
          (t.generateAddress = function (t, r) {
            return (
              (t = s.toBuffer(t)),
              ((r = new a(r)).isZero()
                ? u.rlphash([t, null])
                : u.rlphash([t, e.from(r.toArray())])
              ).slice(-20)
            );
          }),
          (t.generateAddress2 = function (t, r, i) {
            return (
              (t = s.toBuffer(t)),
              (r = s.toBuffer(r)),
              (i = s.toBuffer(i)),
              n(20 === t.length),
              n(32 === r.length),
              u
                .keccak256(
                  e.concat([e.from("ff", "hex"), t, r, u.keccak256(i)])
                )
                .slice(-20)
            );
          }),
          (t.isPrecompiled = function (e) {
            return 1 === (e = s.unpad(e)).length && 1 <= e[0] && e[0] <= 8;
          }),
          (t.isValidPrivate = function (e) {
            return o.privateKeyVerify(e);
          }),
          (t.isValidPublic = function (t, r) {
            return (
              void 0 === r && (r = !1),
              64 === t.length
                ? o.publicKeyVerify(e.concat([e.from([4]), t]))
                : !!r && o.publicKeyVerify(t)
            );
          }),
          (t.pubToAddress = function (e, t) {
            return (
              void 0 === t && (t = !1),
              (e = s.toBuffer(e)),
              t && 64 !== e.length && (e = o.publicKeyConvert(e, !1).slice(1)),
              n(64 === e.length),
              u.keccak(e).slice(-20)
            );
          }),
          (t.publicToAddress = t.pubToAddress),
          (t.privateToAddress = function (e) {
            return t.publicToAddress(t.privateToPublic(e));
          }),
          (t.privateToPublic = function (e) {
            return (e = s.toBuffer(e)), o.publicKeyCreate(e, !1).slice(1);
          }),
          (t.importPublic = function (e) {
            return 64 !== (e = s.toBuffer(e)).length
              ? o.publicKeyConvert(e, !1).slice(1)
              : e;
          });
      }.call(this, r(532).Buffer));
    },
    1623: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.hashPersonalMessage =
            t.isValidSignature =
            t.fromRpcSig =
            t.toRpcSig =
            t.ecrecover =
            t.ecsign =
              void 0);
        var n = r(1243),
          i = r(42),
          o = r(1163),
          a = r(1244);
        function s(e, t) {
          return t ? e - (2 * t + 35) : e - 27;
        }
        function u(e) {
          return 0 === e || 1 === e;
        }
        (t.ecsign = function (e, t, r) {
          return (
            (t = (e = n.sign(e, t)).recovery),
            {
              r: e.signature.slice(0, 32),
              s: e.signature.slice(32, 64),
              v: r ? t + (2 * r + 35) : t + 27,
            }
          );
        }),
          (t.ecrecover = function (t, r, i, a, c) {
            if (
              ((a = e.concat([o.setLength(i, 32), o.setLength(a, 32)], 64)),
              !u((c = s(r, c))))
            )
              throw new Error("Invalid signature v value");
            return (c = n.recover(t, a, c)), n.publicKeyConvert(c, !1).slice(1);
          }),
          (t.toRpcSig = function (t, r, n, i) {
            if (!u(s(t, i))) throw new Error("Invalid signature v value");
            return o.bufferToHex(
              e.concat([
                o.setLengthLeft(r, 32),
                o.setLengthLeft(n, 32),
                o.toBuffer(t),
              ])
            );
          }),
          (t.fromRpcSig = function (e) {
            var t = o.toBuffer(e);
            if (65 !== t.length) throw new Error("Invalid signature length");
            return (
              (e = t[64]) < 27 && (e += 27),
              { v: e, r: t.slice(0, 32), s: t.slice(32, 64) }
            );
          }),
          (t.isValidSignature = function (e, t, r, n, o) {
            void 0 === n && (n = !0);
            var a = new i(
                "7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",
                16
              ),
              c = new i(
                "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",
                16
              );
            return (
              32 === t.length &&
              32 === r.length &&
              !!u(s(e, o)) &&
              ((t = new i(t)),
              (r = new i(r)),
              !(t.isZero() || t.gt(c) || r.isZero() || r.gt(c)) &&
                (!n || 1 !== r.cmp(a)))
            );
          }),
          (t.hashPersonalMessage = function (t) {
            var r = e.from(
              "\x19Ethereum Signed Message:\n" + t.length.toString(),
              "utf-8"
            );
            return a.keccak(e.concat([r, t]));
          });
      }.call(this, r(532).Buffer));
    },
    1624: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defineProperties = void 0);
        var n = r(1233),
          i = r(1148),
          o = r(1185),
          a = r(1163);
        t.defineProperties = function (t, r, s) {
          if (
            ((t.raw = []),
            (t._fields = []),
            (t.toJSON = function (e) {
              if ((e = void 0 !== e && e)) {
                var r = {};
                return (
                  t._fields.forEach(function (e) {
                    r[e] = "0x" + t[e].toString("hex");
                  }),
                  r
                );
              }
              return a.baToJSON(t.raw);
            }),
            (t.serialize = function () {
              return o.encode(t.raw);
            }),
            r.forEach(function (r, i) {
              function o() {
                return t.raw[i];
              }
              function s(o) {
                "00" !== (o = a.toBuffer(o)).toString("hex") ||
                  r.allowZero ||
                  (o = e.allocUnsafe(0)),
                  r.allowLess && r.length
                    ? ((o = a.stripZeros(o)),
                      n(
                        r.length >= o.length,
                        "The field " +
                          r.name +
                          " must not have more " +
                          r.length +
                          " bytes"
                      ))
                    : (r.allowZero && 0 === o.length) ||
                      !r.length ||
                      n(
                        r.length === o.length,
                        "The field " +
                          r.name +
                          " must have byte length of " +
                          r.length
                      ),
                  (t.raw[i] = o);
              }
              t._fields.push(r.name),
                Object.defineProperty(t, r.name, {
                  enumerable: !0,
                  configurable: !0,
                  get: o,
                  set: s,
                }),
                r.default && (t[r.name] = r.default),
                r.alias &&
                  Object.defineProperty(t, r.alias, {
                    enumerable: !1,
                    configurable: !0,
                    set: s,
                    get: o,
                  });
            }),
            s)
          )
            if (
              ("string" == typeof s && (s = e.from(i.stripHexPrefix(s), "hex")),
              e.isBuffer(s) && (s = o.decode(s)),
              Array.isArray(s))
            ) {
              if (s.length > t._fields.length)
                throw new Error("wrong number of fields in data");
              s.forEach(function (e, r) {
                t[t._fields[r]] = a.toBuffer(e);
              });
            } else {
              if ("object" != typeof s) throw new Error("invalid data");
              var u = Object.keys(s);
              r.forEach(function (e) {
                -1 !== u.indexOf(e.name) && (t[e.name] = s[e.name]),
                  -1 !== u.indexOf(e.alias) && (t[e.alias] = s[e.alias]);
              });
            }
        };
      }.call(this, r(532).Buffer));
    },
    1625: function (e, t, r) {
      (function (t) {
        !(function () {
          "use strict";
          var r = function (e) {
            setTimeout(e, 0);
          };
          void 0 !== t &&
            t &&
            "function" == typeof t.nextTick &&
            (r = t.nextTick),
            (e.exports = function (e) {
              var t = {
                capacity: e || 1,
                current: 0,
                queue: [],
                firstHere: !1,
                take: function () {
                  var e;
                  e =
                    !1 === t.firstHere
                      ? (t.current++, (t.firstHere = !0), 1)
                      : 0;
                  var r = { n: 1 };
                  "function" == typeof arguments[0]
                    ? (r.task = arguments[0])
                    : (r.n = arguments[0]),
                    2 <= arguments.length &&
                      ("function" == typeof arguments[1]
                        ? (r.task = arguments[1])
                        : (r.n = arguments[1]));
                  var n = r.task;
                  if (
                    ((r.task = function () {
                      n(t.leave);
                    }),
                    t.current + r.n - e > t.capacity)
                  )
                    return (
                      1 === e && (t.current--, (t.firstHere = !1)),
                      t.queue.push(r)
                    );
                  (t.current += r.n - e),
                    r.task(t.leave),
                    1 === e && (t.firstHere = !1);
                },
                leave: function (e) {
                  if (((t.current -= e = e || 1), t.queue.length))
                    (e = t.queue[0]).n + t.current > t.capacity ||
                      (t.queue.shift(), (t.current += e.n), r(e.task));
                  else if (t.current < 0)
                    throw new Error("leave called too many times.");
                },
                available: function (e) {
                  return t.current + (e = e || 1) <= t.capacity;
                },
              };
              return t;
            });
        })();
      }.call(this, r(162)));
    },
    1626: function (e, t, r) {
      var n = r(1237);
      e.exports = function (e, t, r) {
        e.sendAsync(
          n({ method: "eth_estimateGas", params: [t] }),
          function (e, t) {
            return e
              ? "no contract code at given address" === e.message
                ? r(null, "0xcf08")
                : r(e)
              : void r(null, t.result);
          }
        );
      };
    },
    1627: function (e, t, r) {
      (function (t) {
        var n = r(1134).inherits,
          i = r(1628),
          o = r(1160),
          a = r(1188),
          s = r(1354).blockTagForPayload;
        function u(e) {
          this.nonceCache = {};
        }
        n((e.exports = u), a),
          (u.prototype.handleRequest = function (e, r, n) {
            var a = this;
            switch (e.method) {
              case "eth_getTransactionCount":
                var u = s(e),
                  c = e.params[0].toLowerCase(),
                  f = a.nonceCache[c];
                return void ("pending" === u
                  ? f
                    ? n(null, f)
                    : r(function (e, t, r) {
                        return e
                          ? r()
                          : (void 0 === a.nonceCache[c] &&
                              (a.nonceCache[c] = t),
                            void r());
                      })
                  : r());
              case "eth_sendRawTransaction":
                return void r(function (r, n, s) {
                  if (r) return s();
                  var u = e.params[0];
                  (u =
                    "0x" +
                    (r =
                      (o.stripHexPrefix(u),
                      t.from(o.stripHexPrefix(u), "hex"),
                      new i(t.from(o.stripHexPrefix(u), "hex"))))
                      .getSenderAddress()
                      .toString("hex")
                      .toLowerCase()),
                    (r = o.bufferToInt(r.nonce));
                  (r = (++r).toString(16)).length % 2 && (r = "0" + r),
                    (a.nonceCache[u] = r = "0x" + r),
                    s();
                });
              case "evm_revert":
                return (a.nonceCache = {}), void r();
              default:
                return void r();
            }
          });
      }.call(this, r(532).Buffer));
    },
    1628: function (e, t, r) {
      "use strict";
      (function (t) {
        var n = r(1160),
          i = r(1629),
          o = n.BN,
          a = new o(
            "7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",
            16
          ),
          s =
            ((u.prototype.toCreationAddress = function () {
              return "" === this.to.toString("hex");
            }),
            (u.prototype.hash = function (e) {
              var t = void 0;
              return (
                (e = void 0 === e || e)
                  ? (t = this.raw)
                  : 0 < this._chainId
                  ? ((e = this.raw.slice()),
                    (this.v = this._chainId),
                    (this.r = 0),
                    (this.s = 0),
                    (t = this.raw),
                    (this.raw = e))
                  : (t = this.raw.slice(0, 6)),
                n.rlphash(t)
              );
            }),
            (u.prototype.getChainId = function () {
              return this._chainId;
            }),
            (u.prototype.getSenderAddress = function () {
              if (this._from) return this._from;
              var e = this.getSenderPublicKey();
              return (this._from = n.publicToAddress(e)), this._from;
            }),
            (u.prototype.getSenderPublicKey = function () {
              if (
                !(
                  (this._senderPubKey && this._senderPubKey.length) ||
                  this.verifySignature()
                )
              )
                throw new Error("Invalid Signature");
              return this._senderPubKey;
            }),
            (u.prototype.verifySignature = function () {
              var e = this.hash(!1);
              if (this._homestead && 1 === new o(this.s).cmp(a)) return !1;
              try {
                var t = n.bufferToInt(this.v);
                0 < this._chainId && (t -= 2 * this._chainId + 8),
                  (this._senderPubKey = n.ecrecover(e, t, this.r, this.s));
              } catch (e) {
                return !1;
              }
              return !!this._senderPubKey;
            }),
            (u.prototype.sign = function (e) {
              var t = this.hash(!1);
              e = n.ecsign(t, e);
              0 < this._chainId && (e.v += 2 * this._chainId + 8),
                Object.assign(this, e);
            }),
            (u.prototype.getDataFee = function () {
              for (var e = this.raw[5], t = new o(0), r = 0; r < e.length; r++)
                0 === e[r]
                  ? t.iaddn(i.txDataZeroGas.v)
                  : t.iaddn(i.txDataNonZeroGas.v);
              return t;
            }),
            (u.prototype.getBaseFee = function () {
              var e = this.getDataFee().iaddn(i.txGas.v);
              return (
                this._homestead &&
                  this.toCreationAddress() &&
                  e.iaddn(i.txCreation.v),
                e
              );
            }),
            (u.prototype.getUpfrontCost = function () {
              return new o(this.gasLimit)
                .imul(new o(this.gasPrice))
                .iadd(new o(this.value));
            }),
            (u.prototype.validate = function (e) {
              var t = [];
              return (
                this.verifySignature() || t.push("Invalid Signature"),
                0 < this.getBaseFee().cmp(new o(this.gasLimit)) &&
                  t.push([
                    "gas limit is too low. Need at least " + this.getBaseFee(),
                  ]),
                void 0 === e || !1 === e ? 0 === t.length : t.join(" ")
              );
            }),
            u);
        function u(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, u),
            (e = e || {});
          var r = [
            { name: "nonce", length: 32, allowLess: !0, default: new t([]) },
            { name: "gasPrice", length: 32, allowLess: !0, default: new t([]) },
            {
              name: "gasLimit",
              alias: "gas",
              length: 32,
              allowLess: !0,
              default: new t([]),
            },
            { name: "to", allowZero: !0, length: 20, default: new t([]) },
            { name: "value", length: 32, allowLess: !0, default: new t([]) },
            { name: "data", alias: "input", allowZero: !0, default: new t([]) },
            { name: "v", allowZero: !0, default: new t([28]) },
            {
              name: "r",
              length: 32,
              allowZero: !0,
              allowLess: !0,
              default: new t([]),
            },
            {
              name: "s",
              length: 32,
              allowZero: !0,
              allowLess: !0,
              default: new t([]),
            },
          ];
          n.defineProperties(this, r, e),
            Object.defineProperty(this, "from", {
              enumerable: !0,
              configurable: !0,
              get: this.getSenderAddress.bind(this),
            }),
            (r = n.bufferToInt(this.v)),
            (r = Math.floor((r - 35) / 2)),
            (this._chainId = (r = r < 0 ? 0 : r) || e.chainId || 0),
            (this._homestead = !0);
        }
        e.exports = s;
      }.call(this, r(532).Buffer));
    },
    1629: function (e) {
      e.exports = JSON.parse(
        '{"genesisGasLimit":{"v":5000,"d":"Gas limit of the Genesis block."},"genesisDifficulty":{"v":17179869184,"d":"Difficulty of the Genesis block."},"genesisNonce":{"v":"0x0000000000000042","d":"the geneis nonce"},"genesisExtraData":{"v":"0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa","d":"extra data "},"genesisHash":{"v":"0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3","d":"genesis hash"},"genesisStateRoot":{"v":"0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544","d":"the genesis state root"},"minGasLimit":{"v":5000,"d":"Minimum the gas limit may ever be."},"gasLimitBoundDivisor":{"v":1024,"d":"The bound divisor of the gas limit, used in update calculations."},"minimumDifficulty":{"v":131072,"d":"The minimum that the difficulty may ever be."},"difficultyBoundDivisor":{"v":2048,"d":"The bound divisor of the difficulty, used in the update calculations."},"durationLimit":{"v":13,"d":"The decision boundary on the blocktime duration used to determine whether difficulty should go up or not."},"maximumExtraDataSize":{"v":32,"d":"Maximum size extra data may be after Genesis."},"epochDuration":{"v":30000,"d":"Duration between proof-of-work epochs."},"stackLimit":{"v":1024,"d":"Maximum size of VM stack allowed."},"callCreateDepth":{"v":1024,"d":"Maximum depth of call/create stack."},"tierStepGas":{"v":[0,2,3,5,8,10,20],"d":"Once per operation, for a selection of them."},"expGas":{"v":10,"d":"Once per EXP instuction."},"expByteGas":{"v":10,"d":"Times ceil(log256(exponent)) for the EXP instruction."},"sha3Gas":{"v":30,"d":"Once per SHA3 operation."},"sha3WordGas":{"v":6,"d":"Once per word of the SHA3 operation\'s data."},"sloadGas":{"v":50,"d":"Once per SLOAD operation."},"sstoreSetGas":{"v":20000,"d":"Once per SSTORE operation if the zeroness changes from zero."},"sstoreResetGas":{"v":5000,"d":"Once per SSTORE operation if the zeroness does not change from zero."},"sstoreRefundGas":{"v":15000,"d":"Once per SSTORE operation if the zeroness changes to zero."},"jumpdestGas":{"v":1,"d":"Refunded gas, once per SSTORE operation if the zeroness changes to zero."},"logGas":{"v":375,"d":"Per LOG* operation."},"logDataGas":{"v":8,"d":"Per byte in a LOG* operation\'s data."},"logTopicGas":{"v":375,"d":"Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas."},"createGas":{"v":32000,"d":"Once per CREATE operation & contract-creation transaction."},"callGas":{"v":40,"d":"Once per CALL operation & message call transaction."},"callStipend":{"v":2300,"d":"Free gas given at beginning of call."},"callValueTransferGas":{"v":9000,"d":"Paid for CALL when the value transfor is non-zero."},"callNewAccountGas":{"v":25000,"d":"Paid for CALL when the destination address didn\'t exist prior."},"suicideRefundGas":{"v":24000,"d":"Refunded following a suicide operation."},"memoryGas":{"v":3,"d":"Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL."},"quadCoeffDiv":{"v":512,"d":"Divisor for the quadratic particle of the memory cost equation."},"createDataGas":{"v":200,"d":""},"txGas":{"v":21000,"d":"Per transaction. NOTE: Not payable on data of calls between transactions."},"txCreation":{"v":32000,"d":"the cost of creating a contract via tx"},"txDataZeroGas":{"v":4,"d":"Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions."},"txDataNonZeroGas":{"v":68,"d":"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions."},"copyGas":{"v":3,"d":"Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added."},"ecrecoverGas":{"v":3000,"d":""},"sha256Gas":{"v":60,"d":""},"sha256WordGas":{"v":12,"d":""},"ripemd160Gas":{"v":600,"d":""},"ripemd160WordGas":{"v":120,"d":""},"identityGas":{"v":15,"d":""},"identityWordGas":{"v":3,"d":""},"minerReward":{"v":"5000000000000000000","d":"the amount a miner get rewarded for mining a block"},"ommerReward":{"v":"625000000000000000","d":"The amount of wei a miner of an uncle block gets for being inculded in the blockchain"},"niblingReward":{"v":"156250000000000000","d":"the amount a miner gets for inculding a uncle"},"homeSteadForkNumber":{"v":1150000,"d":"the block that the Homestead fork started at"},"homesteadRepriceForkNumber":{"v":2463000,"d":"the block that the Homestead Reprice (EIP150) fork started at"},"timebombPeriod":{"v":100000,"d":"Exponential difficulty timebomb period"},"freeBlockPeriod":{"v":2}}'
      );
    },
    1630: function (e, t, r) {
      var n = r(366),
        i = r(1107),
        o = r(1108),
        a = r(1238),
        s = r(1364);
      e.exports = (function () {
        "use strict";
        i(t, a);
        var e = o(t);
        function t() {
          return (
            n(this, t),
            e.call(this, function (e) {
              var t = e.blockTracker,
                r = e.provider,
                n = e.engine;
              (r = (t = s({ blockTracker: t, provider: r })).events),
                (t = t.middleware);
              return (
                r.on("notification", function (e) {
                  return n.emit("data", null, e);
                }),
                t
              );
            })
          );
        }
        return t;
      })();
    },
    1679: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "useState", function () {
          return G;
        }),
        r.d(t, "useReducer", function () {
          return V;
        }),
        r.d(t, "useEffect", function () {
          return J;
        }),
        r.d(t, "useLayoutEffect", function () {
          return Y;
        }),
        r.d(t, "useRef", function () {
          return Z;
        }),
        r.d(t, "useImperativeHandle", function () {
          return X;
        }),
        r.d(t, "useMemo", function () {
          return Q;
        }),
        r.d(t, "useCallback", function () {
          return $;
        }),
        r.d(t, "useContext", function () {
          return ee;
        }),
        r.d(t, "useDebugValue", function () {
          return te;
        }),
        r.d(t, "useErrorBoundary", function () {
          return re;
        }),
        r.d(t, "createElement", function () {
          return f;
        }),
        r.d(t, "createContext", function () {
          return C;
        }),
        r.d(t, "createRef", function () {
          return h;
        }),
        r.d(t, "Fragment", function () {
          return d;
        }),
        r.d(t, "Component", function () {
          return p;
        }),
        r.d(t, "version", function () {
          return He;
        }),
        r.d(t, "Children", function () {
          return _e;
        }),
        r.d(t, "render", function () {
          return Oe;
        }),
        r.d(t, "hydrate", function () {
          return Pe;
        }),
        r.d(t, "unmountComponentAtNode", function () {
          return qe;
        }),
        r.d(t, "createPortal", function () {
          return Me;
        }),
        r.d(t, "createFactory", function () {
          return Ue;
        }),
        r.d(t, "cloneElement", function () {
          return je;
        }),
        r.d(t, "isValidElement", function () {
          return De;
        }),
        r.d(t, "findDOMNode", function () {
          return Ke;
        }),
        r.d(t, "PureComponent", function () {
          return le;
        }),
        r.d(t, "memo", function () {
          return de;
        }),
        r.d(t, "forwardRef", function () {
          return ve;
        }),
        r.d(t, "unstable_batchedUpdates", function () {
          return ze;
        }),
        r.d(t, "Suspense", function () {
          return we;
        }),
        r.d(t, "SuspenseList", function () {
          return xe;
        }),
        r.d(t, "lazy", function () {
          return Ee;
        });
      var n,
        i,
        o = {},
        a = [],
        s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
      function u(e, t) {
        for (var r in t) e[r] = t[r];
        return e;
      }
      function c(e) {
        var t = e.parentNode;
        t && t.removeChild(e);
      }
      function f(e, t, r) {
        var n,
          i = arguments,
          o = {};
        for (n in t) "key" !== n && "ref" !== n && (o[n] = t[n]);
        if (3 < arguments.length)
          for (r = [r], n = 3; n < arguments.length; n++) r.push(i[n]);
        if (
          (null != r && (o.children = r),
          "function" == typeof e && null != e.defaultProps)
        )
          for (n in e.defaultProps)
            void 0 === o[n] && (o[n] = e.defaultProps[n]);
        return l(e, o, t && t.key, t && t.ref, null);
      }
      function l(e, t, r, i, o) {
        return (
          (i = {
            type: e,
            props: t,
            key: r,
            ref: i,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            constructor: void 0,
            __v: o,
          }),
          null == o && (i.__v = i),
          n.vnode && n.vnode(i),
          i
        );
      }
      function h() {
        return {};
      }
      function d(e) {
        return e.children;
      }
      function p(e, t) {
        (this.props = e), (this.context = t);
      }
      function v(e, t) {
        if (null == t) return e.__ ? v(e.__, e.__.__k.indexOf(e) + 1) : null;
        for (var r; t < e.__k.length; t++)
          if (null != (r = e.__k[t]) && null != r.__e) return r.__e;
        return "function" == typeof e.type ? v(e) : null;
      }
      function g(e) {
        ((!e.__d && (e.__d = !0) && I.push(e) && !L++) ||
          i !== n.debounceRendering) &&
          ((i = n.debounceRendering) || B)(_);
      }
      function _() {
        for (var e; (L = I.length); )
          (e = I.sort(function (e, t) {
            return e.__v.__b - t.__v.__b;
          })),
            (I = []),
            e.some(function (e) {
              var t, r, n, i, o;
              e.__d &&
                ((i = (n = (t = e).__v).__e),
                (o = t.__P) &&
                  ((r = []),
                  (o = x(
                    o,
                    n,
                    ((e = u({}, n)).__v = e),
                    t.__n,
                    void 0 !== o.ownerSVGElement,
                    null,
                    r,
                    null == i ? v(n) : i
                  )),
                  S(r, n),
                  o != i &&
                    (function e(t) {
                      var r, n;
                      if (null != (t = t.__) && null != t.__c) {
                        for (
                          t.__e = t.__c.base = null, r = 0;
                          r < t.__k.length;
                          r++
                        )
                          if (null != (n = t.__k[r]) && null != n.__e) {
                            t.__e = t.__c.base = n.__e;
                            break;
                          }
                        return e(t);
                      }
                    })(n)));
            });
      }
      function m(e, t, r, n, i, s, u, f, l) {
        var h,
          d,
          p,
          g,
          _,
          m,
          w,
          b = (r && r.__k) || a,
          E = b.length;
        if (
          (f == o && (f = null != s ? s[0] : E ? v(r, 0) : null),
          (h = 0),
          (t.__k = y(t.__k, function (r) {
            if (null != r) {
              if (
                ((r.__ = t),
                (r.__b = t.__b + 1),
                null === (p = b[h]) ||
                  (p && r.key == p.key && r.type === p.type))
              )
                b[h] = void 0;
              else
                for (d = 0; d < E; d++) {
                  if ((p = b[d]) && r.key == p.key && r.type === p.type) {
                    b[d] = void 0;
                    break;
                  }
                  p = null;
                }
              if (
                ((g = x(e, r, (p = p || o), n, i, s, u, f, l)),
                (d = r.ref) &&
                  p.ref != d &&
                  ((w = w || []),
                  p.ref && w.push(p.ref, null, r),
                  w.push(d, r.__c || g, r)),
                null != g)
              ) {
                var a;
                if ((null == m && (m = g), void 0 !== r.__d))
                  (a = r.__d), (r.__d = void 0);
                else if (s == p || g != f || null == g.parentNode) {
                  e: if (null == f || f.parentNode !== e)
                    e.appendChild(g), (a = null);
                  else {
                    for (_ = f, d = 0; (_ = _.nextSibling) && d < E; d += 2)
                      if (_ == g) break e;
                    e.insertBefore(g, f), (a = f);
                  }
                  "option" == t.type && (e.value = "");
                }
                (f = void 0 !== a ? a : g.nextSibling),
                  "function" == typeof t.type && (t.__d = f);
              } else f && p.__e == f && f.parentNode != e && (f = v(p));
            }
            return h++, r;
          })),
          (t.__e = m),
          null != s && "function" != typeof t.type)
        )
          for (h = s.length; h--; ) null != s[h] && c(s[h]);
        for (h = E; h--; ) null != b[h] && R(b[h], b[h]);
        if (w) for (h = 0; h < w.length; h++) k(w[h], w[++h], w[++h]);
      }
      function y(e, t, r) {
        if ((null == r && (r = []), null == e || "boolean" == typeof e))
          t && r.push(t(null));
        else if (Array.isArray(e))
          for (var n = 0; n < e.length; n++) y(e[n], t, r);
        else
          r.push(
            t
              ? t(
                  "string" == typeof e || "number" == typeof e
                    ? l(null, e, null, null, e)
                    : null != e.__e || null != e.__c
                    ? l(e.type, e.props, e.key, null, e.__v)
                    : e
                )
              : e
          );
        return r;
      }
      function w(e, t, r) {
        "-" === t[0]
          ? e.setProperty(t, r)
          : (e[t] =
              "number" == typeof r && !1 === s.test(t)
                ? r + "px"
                : null == r
                ? ""
                : r);
      }
      function b(e, t, r, n, i) {
        var o, a, s, u, c;
        if (
          (i
            ? "className" === t && (t = "class")
            : "class" === t && (t = "className"),
          "style" === t)
        )
          if (((o = e.style), "string" == typeof r)) o.cssText = r;
          else {
            if (("string" == typeof n && ((o.cssText = ""), (n = null)), n))
              for (u in n) (r && u in r) || w(o, u, "");
            if (r) for (c in r) (n && r[c] === n[c]) || w(o, c, r[c]);
          }
        else
          "o" === t[0] && "n" === t[1]
            ? ((a = t !== (t = t.replace(/Capture$/, ""))),
              (t = ((s = t.toLowerCase()) in e ? s : t).slice(2)),
              r
                ? (n || e.addEventListener(t, E, a),
                  ((e.l || (e.l = {}))[t] = r))
                : e.removeEventListener(t, E, a))
            : "list" !== t &&
              "tagName" !== t &&
              "form" !== t &&
              "type" !== t &&
              "size" !== t &&
              !i &&
              t in e
            ? (e[t] = null == r ? "" : r)
            : "function" != typeof r &&
              "dangerouslySetInnerHTML" !== t &&
              (t !== (t = t.replace(/^xlink:?/, ""))
                ? null == r || !1 === r
                  ? e.removeAttributeNS(
                      "http://www.w3.org/1999/xlink",
                      t.toLowerCase()
                    )
                  : e.setAttributeNS(
                      "http://www.w3.org/1999/xlink",
                      t.toLowerCase(),
                      r
                    )
                : null == r || (!1 === r && !/^ar/.test(t))
                ? e.removeAttribute(t)
                : e.setAttribute(t, r));
      }
      function E(e) {
        this.l[e.type](n.event ? n.event(e) : e);
      }
      function x(e, t, r, i, s, c, f, l, h) {
        var v,
          g,
          _,
          y,
          w,
          E,
          x,
          S,
          k,
          R,
          M = t.type;
        if (void 0 !== t.constructor) return null;
        (v = n.__b) && v(t);
        try {
          e: if ("function" == typeof M) {
            if (
              ((S = t.props),
              (k = (v = M.contextType) && i[v.__c]),
              (R = v ? (k ? k.props.value : v.__) : i),
              r.__c
                ? (x = (g = t.__c = r.__c).__ = g.__E)
                : ("prototype" in M && M.prototype.render
                    ? (t.__c = g = new M(S, R))
                    : ((t.__c = g = new p(S, R)),
                      (g.constructor = M),
                      (g.render = A)),
                  k && k.sub(g),
                  (g.props = S),
                  g.state || (g.state = {}),
                  (g.context = R),
                  (g.__n = i),
                  (_ = g.__d = !0),
                  (g.__h = [])),
              null == g.__s && (g.__s = g.state),
              null != M.getDerivedStateFromProps &&
                (g.__s == g.state && (g.__s = u({}, g.__s)),
                u(g.__s, M.getDerivedStateFromProps(S, g.__s))),
              (y = g.props),
              (w = g.state),
              _)
            )
              null == M.getDerivedStateFromProps &&
                null != g.componentWillMount &&
                g.componentWillMount(),
                null != g.componentDidMount && g.__h.push(g.componentDidMount);
            else {
              if (
                (null == M.getDerivedStateFromProps &&
                  S !== y &&
                  null != g.componentWillReceiveProps &&
                  g.componentWillReceiveProps(S, R),
                (!g.__e &&
                  null != g.shouldComponentUpdate &&
                  !1 === g.shouldComponentUpdate(S, g.__s, R)) ||
                  (t.__v === r.__v && !g.__))
              ) {
                for (
                  g.props = S,
                    g.state = g.__s,
                    t.__v !== r.__v && (g.__d = !1),
                    (g.__v = t).__e = r.__e,
                    t.__k = r.__k,
                    g.__h.length && f.push(g),
                    v = 0;
                  v < t.__k.length;
                  v++
                )
                  t.__k[v] && (t.__k[v].__ = t);
                break e;
              }
              null != g.componentWillUpdate &&
                g.componentWillUpdate(S, g.__s, R),
                null != g.componentDidUpdate &&
                  g.__h.push(function () {
                    g.componentDidUpdate(y, w, E);
                  });
            }
            (g.context = R),
              (g.props = S),
              (g.state = g.__s),
              (v = n.__r) && v(t),
              (g.__d = !1),
              (g.__v = t),
              (g.__P = e),
              (v = g.render(g.props, g.state, g.context)),
              (t.__k =
                null != v && v.type == d && null == v.key
                  ? v.props.children
                  : Array.isArray(v)
                  ? v
                  : [v]),
              null != g.getChildContext &&
                (i = u(u({}, i), g.getChildContext())),
              _ ||
                null == g.getSnapshotBeforeUpdate ||
                (E = g.getSnapshotBeforeUpdate(y, w)),
              m(e, t, r, i, s, c, f, l, h),
              (g.base = t.__e),
              g.__h.length && f.push(g),
              x && (g.__E = g.__ = null),
              (g.__e = !1);
          } else
            null == c && t.__v === r.__v
              ? ((t.__k = r.__k), (t.__e = r.__e))
              : (t.__e = (function (e, t, r, n, i, s, u, c) {
                  var f,
                    l,
                    h,
                    d,
                    p,
                    v = r.props,
                    g = t.props;
                  if (((i = "svg" === t.type || i), null != s))
                    for (f = 0; f < s.length; f++)
                      if (
                        null != (l = s[f]) &&
                        ((null === t.type
                          ? 3 === l.nodeType
                          : l.localName === t.type) ||
                          e == l)
                      ) {
                        (e = l), (s[f] = null);
                        break;
                      }
                  if (null == e) {
                    if (null === t.type) return document.createTextNode(g);
                    (e = i
                      ? document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          t.type
                        )
                      : document.createElement(t.type, g.is && { is: g.is })),
                      (s = null),
                      (c = !1);
                  }
                  if (null === t.type) v !== g && e.data != g && (e.data = g);
                  else {
                    if (
                      (null != s && (s = a.slice.call(e.childNodes)),
                      (h = (v = r.props || o).dangerouslySetInnerHTML),
                      (d = g.dangerouslySetInnerHTML),
                      !c)
                    ) {
                      if (v === o)
                        for (v = {}, p = 0; p < e.attributes.length; p++)
                          v[e.attributes[p].name] = e.attributes[p].value;
                      (d || h) &&
                        ((d && h && d.__html == h.__html) ||
                          (e.innerHTML = (d && d.__html) || ""));
                    }
                    (function (e, t, r, n, i) {
                      for (var o in r)
                        "children" === o ||
                          "key" === o ||
                          o in t ||
                          b(e, o, null, r[o], n);
                      for (o in t)
                        (i && "function" != typeof t[o]) ||
                          "children" === o ||
                          "key" === o ||
                          "value" === o ||
                          "checked" === o ||
                          r[o] === t[o] ||
                          b(e, o, t[o], r[o], n);
                    })(e, g, v, i, c),
                      d
                        ? (t.__k = [])
                        : ((t.__k = t.props.children),
                          m(
                            e,
                            t,
                            r,
                            n,
                            "foreignObject" !== t.type && i,
                            s,
                            u,
                            o,
                            c
                          )),
                      c ||
                        ("value" in g &&
                          void 0 !== (f = g.value) &&
                          f !== e.value &&
                          b(e, "value", f, v.value, !1),
                        "checked" in g &&
                          void 0 !== (f = g.checked) &&
                          f !== e.checked &&
                          b(e, "checked", f, v.checked, !1));
                  }
                  return e;
                })(r.__e, t, r, i, s, c, f, h));
          (v = n.diffed) && v(t);
        } catch (e) {
          (t.__v = null), n.__e(e, t, r);
        }
        return t.__e;
      }
      function S(e, t) {
        n.__c && n.__c(t, e),
          e.some(function (t) {
            try {
              (e = t.__h),
                (t.__h = []),
                e.some(function (e) {
                  e.call(t);
                });
            } catch (e) {
              n.__e(e, t.__v);
            }
          });
      }
      function k(e, t, r) {
        try {
          "function" == typeof e ? e(t) : (e.current = t);
        } catch (e) {
          n.__e(e, r);
        }
      }
      function R(e, t, r) {
        var i, o, a;
        if (
          (n.unmount && n.unmount(e),
          (i = e.ref) && ((i.current && i.current !== e.__e) || k(i, null, t)),
          r || "function" == typeof e.type || (r = null != (o = e.__e)),
          (e.__e = e.__d = void 0),
          null != (i = e.__c))
        ) {
          if (i.componentWillUnmount)
            try {
              i.componentWillUnmount();
            } catch (e) {
              n.__e(e, t);
            }
          i.base = i.__P = null;
        }
        if ((i = e.__k)) for (a = 0; a < i.length; a++) i[a] && R(i[a], t, r);
        null != o && c(o);
      }
      function A(e, t, r) {
        return this.constructor(e, r);
      }
      function M(e, t, r) {
        var i, s, u;
        n.__ && n.__(e, t),
          (s = (i = r === H) ? null : (r && r.__k) || t.__k),
          (e = f(d, null, [e])),
          (u = []),
          x(
            t,
            (((!i && r) || t).__k = e),
            s || o,
            o,
            void 0 !== t.ownerSVGElement,
            r && !i ? [r] : s ? null : a.slice.call(t.childNodes),
            u,
            r || o,
            i
          ),
          S(u, e);
      }
      function T(e, t) {
        M(e, t, H);
      }
      function C(e) {
        var t = {},
          r = {
            __c: "__cC" + U++,
            __: e,
            Consumer: function (e, t) {
              return e.children(t);
            },
            Provider: function (e) {
              var n,
                i = this;
              return (
                this.getChildContext ||
                  ((n = []),
                  (this.getChildContext = function () {
                    return (t[r.__c] = i), t;
                  }),
                  (this.shouldComponentUpdate = function (e) {
                    i.props.value !== e.value &&
                      n.some(function (t) {
                        (t.context = e.value), g(t);
                      });
                  }),
                  (this.sub = function (e) {
                    n.push(e);
                    var t = e.componentWillUnmount;
                    e.componentWillUnmount = function () {
                      n.splice(n.indexOf(e), 1), t && t.call(e);
                    };
                  })),
                e.children
              );
            },
          };
        return ((r.Consumer.contextType = r).Provider.__ = r);
      }
      (n = {
        __e: function (e, t) {
          for (var r, n; (t = t.__); )
            if ((r = t.__c) && !r.__)
              try {
                if (
                  (r.constructor &&
                    null != r.constructor.getDerivedStateFromError &&
                    ((n = !0),
                    r.setState(r.constructor.getDerivedStateFromError(e))),
                  null != r.componentDidCatch &&
                    ((n = !0), r.componentDidCatch(e)),
                  n)
                )
                  return g((r.__E = r));
              } catch (t) {
                e = t;
              }
          throw e;
        },
      }),
        (p.prototype.setState = function (e, t) {
          var r =
            this.__s !== this.state ? this.__s : (this.__s = u({}, this.state));
          (e = "function" == typeof e ? e(r, this.props) : e) && u(r, e),
            null != e && this.__v && (t && this.__h.push(t), g(this));
        }),
        (p.prototype.forceUpdate = function (e) {
          this.__v && ((this.__e = !0), e && this.__h.push(e), g(this));
        }),
        (p.prototype.render = d);
      var O,
        P,
        N,
        I = [],
        L = 0,
        B =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout,
        H = o,
        U = 0,
        D = 0,
        j = [],
        q = n.__r,
        K = n.diffed,
        z = n.__c,
        F = n.unmount;
      function W(e, t) {
        return (
          n.__h && n.__h(P, e, D || t),
          (D = 0),
          e >= (t = P.__H || (P.__H = { __: [], __h: [] })).__.length &&
            t.__.push({}),
          t.__[e]
        );
      }
      function G(e) {
        return (D = 1), V(se, e);
      }
      function V(e, t, r) {
        var n = W(O++, 2);
        return (
          n.__c ||
            ((n.__c = P),
            (n.__ = [
              r ? r(t) : se(void 0, t),
              function (t) {
                (t = e(n.__[0], t)),
                  n.__[0] !== t && ((n.__[0] = t), n.__c.setState({}));
              },
            ])),
          n.__
        );
      }
      function J(e, t) {
        var r = W(O++, 3);
        !n.__s && ae(r.__H, t) && ((r.__ = e), (r.__H = t), P.__H.__h.push(r));
      }
      function Y(e, t) {
        var r = W(O++, 4);
        !n.__s && ae(r.__H, t) && ((r.__ = e), (r.__H = t), P.__h.push(r));
      }
      function Z(e) {
        return (
          (D = 5),
          Q(function () {
            return { current: e };
          }, [])
        );
      }
      function X(e, t, r) {
        (D = 6),
          Y(
            function () {
              "function" == typeof e ? e(t()) : e && (e.current = t());
            },
            null == r ? r : r.concat(e)
          );
      }
      function Q(e, t) {
        var r = W(O++, 7);
        return ae(r.__H, t) ? ((r.__H = t), (r.__h = e), (r.__ = e())) : r.__;
      }
      function $(e, t) {
        return (
          (D = 8),
          Q(function () {
            return e;
          }, t)
        );
      }
      function ee(e) {
        var t = P.context[e.__c],
          r = W(O++, 9);
        return (
          (r.__c = e),
          t ? (null == r.__ && ((r.__ = !0), t.sub(P)), t.props.value) : e.__
        );
      }
      function te(e, t) {
        n.useDebugValue && n.useDebugValue(t ? t(e) : e);
      }
      function re(e) {
        var t = W(O++, 10),
          r = G();
        return (
          (t.__ = e),
          P.componentDidCatch ||
            (P.componentDidCatch = function (e) {
              t.__ && t.__(e), r[1](e);
            }),
          [
            r[0],
            function () {
              r[1](void 0);
            },
          ]
        );
      }
      function ne() {
        j.some(function (t) {
          if (t.__P)
            try {
              t.__H.__h.forEach(ie), t.__H.__h.forEach(oe), (t.__H.__h = []);
            } catch (e) {
              return (t.__H.__h = []), n.__e(e, t.__v), !0;
            }
        }),
          (j = []);
      }
      function ie(e) {
        e.t && e.t();
      }
      function oe(e) {
        var t = e.__();
        "function" == typeof t && (e.t = t);
      }
      function ae(e, t) {
        return (
          !e ||
          t.some(function (t, r) {
            return t !== e[r];
          })
        );
      }
      function se(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
      function ue(e, t) {
        for (var r in t) e[r] = t[r];
        return e;
      }
      function ce(e, t) {
        for (var r in e) if ("__source" !== r && !(r in t)) return !0;
        for (var n in t) if ("__source" !== n && e[n] !== t[n]) return !0;
        return !1;
      }
      (n.__r = function (e) {
        q && q(e),
          (O = 0),
          (P = e.__c).__H &&
            (P.__H.__h.forEach(ie), P.__H.__h.forEach(oe), (P.__H.__h = []));
      }),
        (n.diffed = function (e) {
          K && K(e);
          var t = e.__c;
          !t ||
            ((e = t.__H) &&
              e.__h.length &&
              ((1 !== j.push(t) && N === n.requestAnimationFrame) ||
                (
                  (N = n.requestAnimationFrame) ||
                  function (e) {
                    function t() {
                      clearTimeout(n), cancelAnimationFrame(r), setTimeout(e);
                    }
                    var r,
                      n = setTimeout(t, 100);
                    "undefined" != typeof window &&
                      (r = requestAnimationFrame(t));
                  }
                )(ne)));
        }),
        (n.__c = function (e, t) {
          t.some(function (r) {
            try {
              r.__h.forEach(ie),
                (r.__h = r.__h.filter(function (e) {
                  return !e.__ || oe(e);
                }));
            } catch (e) {
              t.some(function (e) {
                e.__h && (e.__h = []);
              }),
                (t = []),
                n.__e(e, r.__v);
            }
          }),
            z && z(e, t);
        }),
        (n.unmount = function (e) {
          F && F(e);
          var t = e.__c;
          if (t) {
            var r = t.__H;
            if (r)
              try {
                r.__.forEach(function (e) {
                  return e.t && e.t();
                });
              } catch (e) {
                n.__e(e, t.__v);
              }
          }
        });
      var fe,
        le =
          ((ge = fe = p),
          ((r = he).prototype = Object.create(ge.prototype)),
          ((r.prototype.constructor = r).__proto__ = ge),
          (he.prototype.shouldComponentUpdate = function (e, t) {
            return ce(this.props, e) || ce(this.state, t);
          }),
          he);
      function he(e) {
        return ((e = fe.call(this, e) || this).isPureReactComponent = !0), e;
      }
      function de(e, t) {
        function r(e) {
          var r = this.props.ref,
            n = r == e.ref;
          return (
            !n && r && (r.call ? r(null) : (r.current = null)),
            t ? !t(this.props, e) || !n : ce(this.props, e)
          );
        }
        function n(t) {
          return (this.shouldComponentUpdate = r), f(e, ue({}, t));
        }
        return (
          (n.prototype.isReactComponent = !0),
          (n.displayName = "Memo(" + (e.displayName || e.name) + ")"),
          (n.t = !0),
          n
        );
      }
      var pe = n.__b;
      function ve(e) {
        function t(t) {
          var r = ue({}, t);
          return delete r.ref, e(r, t.ref);
        }
        return (
          (t.prototype.isReactComponent = t.t = !0),
          (t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")"),
          t
        );
      }
      n.__b = function (e) {
        e.type && e.type.t && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
          pe && pe(e);
      };
      var ge = function (e, t) {
          return e
            ? y(e).reduce(function (e, r, n) {
                return e.concat(t(r, n));
              }, [])
            : null;
        },
        _e = {
          map: ge,
          forEach: ge,
          count: function (e) {
            return e ? y(e).length : 0;
          },
          only: function (e) {
            if (1 !== (e = y(e)).length)
              throw new Error("Children.only() expects only one child.");
            return e[0];
          },
          toArray: y,
        },
        me = n.__e;
      function ye(e) {
        return (
          e && (((e = ue({}, e)).__c = null), (e.__k = e.__k && e.__k.map(ye))),
          e
        );
      }
      function we() {
        (this.__u = 0), (this.o = null), (this.__b = null);
      }
      function be(e) {
        var t = e.__.__c;
        return t && t.u && t.u(e);
      }
      function Ee(e) {
        var t, r, n;
        function i(i) {
          if (
            (t ||
              (t = e()).then(
                function (e) {
                  r = e.default || e;
                },
                function (e) {
                  n = e;
                }
              ),
            n)
          )
            throw n;
          if (!r) throw t;
          return f(r, i);
        }
        return (i.displayName = "Lazy"), (i.t = !0), i;
      }
      function xe() {
        (this.i = null), (this.l = null);
      }
      function Se(e, t, r) {
        if (
          (++r[1] === r[0] && e.l.delete(t),
          e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.l.size))
        )
          for (r = e.i; r; ) {
            for (; 3 < r.length; ) r.pop()();
            if (r[1] < r[0]) break;
            e.i = r = r[2];
          }
      }
      (n.__e = function (e, t, r) {
        if (e.then)
          for (var n, i = t; (i = i.__); )
            if ((n = i.__c) && n.__c) return n.__c(e, t.__c);
        me(e, t, r);
      }),
        ((we.prototype = new p()).__c = function (e, t) {
          var r = this;
          function n() {
            o || ((o = !0), i ? i(a) : a());
          }
          null == r.o && (r.o = []), r.o.push(t);
          var i = be(r.__v),
            o = !1;
          (t.__c = t.componentWillUnmount),
            (t.componentWillUnmount = function () {
              n(), t.__c && t.__c();
            });
          var a = function () {
            var e;
            if (!--r.__u)
              for (
                r.__v.__k[0] = r.state.u, r.setState({ u: (r.__b = null) });
                (e = r.o.pop());

              )
                e.forceUpdate();
          };
          r.__u++ || r.setState({ u: (r.__b = r.__v.__k[0]) }), e.then(n, n);
        }),
        (we.prototype.render = function (e, t) {
          return (
            this.__b && ((this.__v.__k[0] = ye(this.__b)), (this.__b = null)),
            [f(p, null, t.u ? null : e.children), t.u && e.fallback]
          );
        }),
        ((xe.prototype = new p()).u = function (e) {
          var t = this,
            r = be(t.__v),
            n = t.l.get(e);
          return (
            n[0]++,
            function (i) {
              function o() {
                t.props.revealOrder ? (n.push(i), Se(t, e, n)) : i();
              }
              r ? r(o) : o();
            }
          );
        }),
        (xe.prototype.render = function (e) {
          (this.i = null), (this.l = new Map());
          var t = y(e.children);
          e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
          for (var r = t.length; r--; )
            this.l.set(t[r], (this.i = [1, 0, this.i]));
          return e.children;
        }),
        (xe.prototype.componentDidUpdate = xe.prototype.componentDidMount =
          function () {
            var e = this;
            e.l.forEach(function (t, r) {
              Se(e, r, t);
            });
          });
      var ke =
        (((ge = Re.prototype).getChildContext = function () {
          return this.props.context;
        }),
        (ge.render = function (e) {
          return e.children;
        }),
        Re);
      function Re() {}
      function Ae(e) {
        var t = this,
          r = e.container,
          n = f(ke, { context: t.context }, e.vnode);
        return (
          t.s &&
            t.s !== r &&
            (t.v.parentNode && t.s.removeChild(t.v), R(t.h), (t.p = !1)),
          e.vnode
            ? t.p
              ? ((r.__k = t.__k), M(n, r), (t.__k = r.__k))
              : ((t.v = document.createTextNode("")),
                T("", r),
                r.appendChild(t.v),
                (t.p = !0),
                M(n, (t.s = r), t.v),
                (t.__k = t.v.__k))
            : t.p && (t.v.parentNode && t.s.removeChild(t.v), R(t.h)),
          (t.h = n),
          (t.componentWillUnmount = function () {
            t.v.parentNode && t.s.removeChild(t.v), R(t.h);
          }),
          null
        );
      }
      function Me(e, t) {
        return f(Ae, { vnode: e, container: t });
      }
      var Te =
        /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
      p.prototype.isReactComponent = {};
      var Ce =
        ("undefined" != typeof Symbol &&
          Symbol.for &&
          Symbol.for("react.element")) ||
        60103;
      function Oe(e, t, r) {
        if (null == t.__k) for (; t.firstChild; ) t.removeChild(t.firstChild);
        return M(e, t), "function" == typeof r && r(), e ? e.__c : null;
      }
      function Pe(e, t, r) {
        return T(e, t), "function" == typeof r && r(), e ? e.__c : null;
      }
      var Ne = n.event;
      function Ie(e, t) {
        e["UNSAFE_" + t] &&
          !e[t] &&
          Object.defineProperty(e, t, {
            configurable: !1,
            get: function () {
              return this["UNSAFE_" + t];
            },
            set: function (e) {
              this["UNSAFE_" + t] = e;
            },
          });
      }
      n.event = function (e) {
        var t = !((e = Ne ? Ne(e) : e).persist = function () {}),
          r = !1,
          n = e.stopPropagation;
        e.stopPropagation = function () {
          n.call(e), (t = !0);
        };
        var i = e.preventDefault;
        return (
          (e.preventDefault = function () {
            i.call(e), (r = !0);
          }),
          (e.isPropagationStopped = function () {
            return t;
          }),
          (e.isDefaultPrevented = function () {
            return r;
          }),
          (e.nativeEvent = e)
        );
      };
      var Le = {
          configurable: !0,
          get: function () {
            return this.class;
          },
        },
        Be = n.vnode;
      n.vnode = function (e) {
        e.$$typeof = Ce;
        var t,
          r,
          n,
          i = e.type,
          o = e.props;
        if (i) {
          if (
            (o.class != o.className &&
              ((Le.enumerable = "className" in o),
              null != o.className && (o.class = o.className),
              Object.defineProperty(o, "className", Le)),
            "function" != typeof i)
          ) {
            for (n in (o.defaultValue &&
              void 0 !== o.value &&
              (o.value || 0 === o.value || (o.value = o.defaultValue),
              delete o.defaultValue),
            Array.isArray(o.value) &&
              o.multiple &&
              "select" === i &&
              (y(o.children).forEach(function (e) {
                -1 != o.value.indexOf(e.props.value) && (e.props.selected = !0);
              }),
              delete o.value),
            o))
              if ((t = Te.test(n))) break;
            if (t)
              for (n in ((r = e.props = {}), o))
                r[Te.test(n) ? n.replace(/[A-Z0-9]/, "-$&").toLowerCase() : n] =
                  o[n];
          }
          !(function () {
            var t = e.type,
              r = e.props;
            if (r && "string" == typeof t) {
              var n,
                i = {};
              for (n in r)
                /^on(Ani|Tra|Tou)/.test(n) &&
                  ((r[n.toLowerCase()] = r[n]), delete r[n]),
                  (i[n.toLowerCase()] = n);
              i.ondoubleclick &&
                ((r.ondblclick = r[i.ondoubleclick]),
                delete r[i.ondoubleclick]),
                i.onbeforeinput &&
                  ((r.onbeforeinput = r[i.onbeforeinput]),
                  delete r[i.onbeforeinput]),
                i.onchange &&
                  ("textarea" === t ||
                    ("input" === t.toLowerCase() &&
                      !/^fil|che|ra/i.test(r.type))) &&
                  (r[(t = i.oninput || "oninput")] ||
                    ((r[t] = r[i.onchange]), delete r[i.onchange]));
            }
          })(),
            "function" == typeof i &&
              !i.m &&
              i.prototype &&
              (Ie(i.prototype, "componentWillMount"),
              Ie(i.prototype, "componentWillReceiveProps"),
              Ie(i.prototype, "componentWillUpdate"),
              (i.m = !0));
        }
        Be && Be(e);
      };
      var He = "16.8.0";
      function Ue(e) {
        return f.bind(null, e);
      }
      function De(e) {
        return !!e && e.$$typeof === Ce;
      }
      function je(e) {
        return De(e)
          ? function (e, t) {
              var r, n;
              for (n in ((t = u(u({}, e.props), t)),
              2 < arguments.length && (t.children = a.slice.call(arguments, 2)),
              (r = {}),
              t))
                "key" !== n && "ref" !== n && (r[n] = t[n]);
              return l(e.type, r, t.key || e.key, t.ref || e.ref, null);
            }.apply(null, arguments)
          : e;
      }
      function qe(e) {
        return !!e.__k && (M(null, e), !0);
      }
      function Ke(e) {
        return (e && (e.base || (1 === e.nodeType && e))) || null;
      }
      var ze = function (e, t) {
        return e(t);
      };
      t.default = {
        useState: G,
        useReducer: V,
        useEffect: J,
        useLayoutEffect: Y,
        useRef: Z,
        useImperativeHandle: X,
        useMemo: Q,
        useCallback: $,
        useContext: ee,
        useDebugValue: te,
        version: "16.8.0",
        Children: _e,
        render: Oe,
        hydrate: Oe,
        unmountComponentAtNode: qe,
        createPortal: Me,
        createElement: f,
        createContext: C,
        createFactory: Ue,
        cloneElement: je,
        createRef: h,
        Fragment: d,
        isValidElement: De,
        findDOMNode: Ke,
        Component: p,
        PureComponent: le,
        memo: de,
        forwardRef: ve,
        unstable_batchedUpdates: ze,
        Suspense: we,
        SuspenseList: xe,
        lazy: Ee,
      };
    },
  },
]);
//# sourceMappingURL=5.a4f8c648.chunk.js.map
