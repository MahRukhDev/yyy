(this["webpackJsonp@sheepdex/interface"] =
  this["webpackJsonp@sheepdex/interface"] || []).push([
  [6],
  {
    1004: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.WalletLink = e.WalletLinkProvider = void 0);
      var r = n(1245),
        i = n(1367),
        o = n(1245);
      Object.defineProperty(e, "WalletLinkProvider", {
        enumerable: !0,
        get: function () {
          return o.WalletLinkProvider;
        },
      });
      var s = n(1367);
      Object.defineProperty(e, "WalletLink", {
        enumerable: !0,
        get: function () {
          return s.WalletLink;
        },
      }),
        (e.default = i.WalletLink),
        "undefined" != typeof window &&
          ((window.WalletLink = i.WalletLink),
          (window.WalletLinkProvider = r.WalletLinkProvider));
    },
    1104: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return c;
      });
      var r = n(113),
        i = n(1166),
        o = n(1368),
        s = ((e = n(1111)), n(1250)),
        u = n(1165),
        a = n(1249),
        c = (function (t) {
          function e(n, r, i) {
            var s = t.call(this) || this;
            switch (
              ((s.syncErrorValue = null),
              (s.syncErrorThrown = !1),
              (s.syncErrorThrowable = !1),
              (s.isStopped = !1),
              arguments.length)
            ) {
              case 0:
                s.destination = o.a;
                break;
              case 1:
                if (!n) {
                  s.destination = o.a;
                  break;
                }
                if ("object" == typeof n) {
                  n instanceof e
                    ? ((s.syncErrorThrowable = n.syncErrorThrowable),
                      (s.destination = n).add(s))
                    : ((s.syncErrorThrowable = !0),
                      (s.destination = new l(s, n)));
                  break;
                }
              default:
                (s.syncErrorThrowable = !0),
                  (s.destination = new l(s, n, r, i));
            }
            return s;
          }
          return (
            r.__extends(e, t),
            (e.prototype[s.a] = function () {
              return this;
            }),
            (e.create = function (t, n, r) {
              return ((r = new e(t, n, r)).syncErrorThrowable = !1), r;
            }),
            (e.prototype.next = function (t) {
              this.isStopped || this._next(t);
            }),
            (e.prototype.error = function (t) {
              this.isStopped || ((this.isStopped = !0), this._error(t));
            }),
            (e.prototype.complete = function () {
              this.isStopped || ((this.isStopped = !0), this._complete());
            }),
            (e.prototype.unsubscribe = function () {
              this.closed ||
                ((this.isStopped = !0), t.prototype.unsubscribe.call(this));
            }),
            (e.prototype._next = function (t) {
              this.destination.next(t);
            }),
            (e.prototype._error = function (t) {
              this.destination.error(t), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.destination.complete(), this.unsubscribe();
            }),
            (e.prototype._unsubscribeAndRecycle = function () {
              var t = this._parentOrParents;
              return (
                (this._parentOrParents = null),
                this.unsubscribe(),
                (this.closed = !1),
                (this.isStopped = !1),
                (this._parentOrParents = t),
                this
              );
            }),
            e
          );
        })(e.a),
        l = (function (t) {
          function e(e, n, r, s) {
            var u,
              a = t.call(this) || this;
            return (
              (a._parentSubscriber = e),
              (e = a),
              Object(i.a)(n)
                ? (u = n)
                : n &&
                  ((u = n.next),
                  (r = n.error),
                  (s = n.complete),
                  n !== o.a &&
                    ((e = Object.create(n)),
                    Object(i.a)(e.unsubscribe) && a.add(e.unsubscribe.bind(e)),
                    (e.unsubscribe = a.unsubscribe.bind(a)))),
              (a._context = e),
              (a._next = u),
              (a._error = r),
              (a._complete = s),
              a
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype.next = function (t) {
              var e;
              !this.isStopped &&
                this._next &&
                ((e = this._parentSubscriber),
                u.a.useDeprecatedSynchronousErrorHandling &&
                e.syncErrorThrowable
                  ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
                  : this.__tryOrUnsub(this._next, t));
            }),
            (e.prototype.error = function (t) {
              if (!this.isStopped) {
                var e = this._parentSubscriber,
                  n = u.a.useDeprecatedSynchronousErrorHandling;
                if (this._error)
                  n && e.syncErrorThrowable
                    ? this.__tryOrSetError(e, this._error, t)
                    : this.__tryOrUnsub(this._error, t),
                    this.unsubscribe();
                else if (e.syncErrorThrowable)
                  n
                    ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0))
                    : Object(a.a)(t),
                    this.unsubscribe();
                else {
                  if ((this.unsubscribe(), n)) throw t;
                  Object(a.a)(t);
                }
              }
            }),
            (e.prototype.complete = function () {
              var t,
                e,
                n = this;
              this.isStopped ||
                ((t = this._parentSubscriber),
                this._complete &&
                  ((e = function () {
                    return n._complete.call(n._context);
                  }),
                  u.a.useDeprecatedSynchronousErrorHandling &&
                  t.syncErrorThrowable
                    ? this.__tryOrSetError(t, e)
                    : this.__tryOrUnsub(e)),
                this.unsubscribe());
            }),
            (e.prototype.__tryOrUnsub = function (t, e) {
              try {
                t.call(this._context, e);
              } catch (t) {
                if (
                  (this.unsubscribe(),
                  u.a.useDeprecatedSynchronousErrorHandling)
                )
                  throw t;
                Object(a.a)(t);
              }
            }),
            (e.prototype.__tryOrSetError = function (t, e, n) {
              if (!u.a.useDeprecatedSynchronousErrorHandling)
                throw new Error("bad call");
              try {
                e.call(this._context, n);
              } catch (e) {
                return u.a.useDeprecatedSynchronousErrorHandling
                  ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0))
                  : (Object(a.a)(e), !0);
              }
              return !1;
            }),
            (e.prototype._unsubscribe = function () {
              var t = this._parentSubscriber;
              (this._context = null),
                (this._parentSubscriber = null),
                t.unsubscribe();
            }),
            e
          );
        })(c);
    },
    1106: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return l;
      });
      var r = n(1253),
        i = n(1104),
        o = n(1250),
        s = n(1368),
        u = n(1137),
        a = n(1191),
        c = n(1165),
        l = (function () {
          function e(t) {
            (this._isScalar = !1), t && (this._subscribe = t);
          }
          return (
            (e.prototype.lift = function (t) {
              var n = new e();
              return (n.source = this), (n.operator = t), n;
            }),
            (e.prototype.subscribe = function (t, e, n) {
              var r = this.operator;
              n = (function (t, e, n) {
                if (t) {
                  if (t instanceof i.a) return t;
                  if (t[o.a]) return t[o.a]();
                }
                return t || e || n ? new i.a(t, e, n) : new i.a(s.a);
              })(t, e, n);
              if (
                (r
                  ? n.add(r.call(n, this.source))
                  : n.add(
                      this.source ||
                        (c.a.useDeprecatedSynchronousErrorHandling &&
                          !n.syncErrorThrowable)
                        ? this._subscribe(n)
                        : this._trySubscribe(n)
                    ),
                c.a.useDeprecatedSynchronousErrorHandling &&
                  n.syncErrorThrowable &&
                  ((n.syncErrorThrowable = !1), n.syncErrorThrown))
              )
                throw n.syncErrorValue;
              return n;
            }),
            (e.prototype._trySubscribe = function (e) {
              try {
                return this._subscribe(e);
              } catch (t) {
                c.a.useDeprecatedSynchronousErrorHandling &&
                  ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
                  Object(r.a)(e) && e.error(t);
              }
            }),
            (e.prototype.forEach = function (t, e) {
              var n = this;
              return new (e = h(e))(function (e, r) {
                var i = n.subscribe(
                  function (e) {
                    try {
                      t(e);
                    } catch (e) {
                      r(e), i && i.unsubscribe();
                    }
                  },
                  r,
                  e
                );
              });
            }),
            (e.prototype._subscribe = function (t) {
              var e = this.source;
              return e && e.subscribe(t);
            }),
            (e.prototype[u.a] = function () {
              return this;
            }),
            (e.prototype.pipe = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              return 0 === t.length ? this : Object(a.b)(t)(this);
            }),
            (e.prototype.toPromise = function (t) {
              var e = this;
              return new (t = h(t))(function (t, n) {
                var r;
                e.subscribe(
                  function (t) {
                    return (r = t);
                  },
                  function (t) {
                    return n(t);
                  },
                  function () {
                    return t(r);
                  }
                );
              });
            }),
            (e.create = function (t) {
              return new e(t);
            }),
            e
          );
        })();
      function h(t) {
        if (!(t = t || c.a.Promise || Promise))
          throw new Error("no Promise impl found");
        return t;
      }
    },
    1109: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      }),
        n.d(e, "b", function () {
          return u;
        }),
        n.d(e, "c", function () {
          return a;
        });
      var r = n(113),
        i = ((e = n(1104)), n(1106)),
        o = n(1204),
        s = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (n.parent = e), n;
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              this.parent.notifyNext(t);
            }),
            (e.prototype._error = function (t) {
              this.parent.notifyError(t), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.parent.notifyComplete(), this.unsubscribe();
            }),
            e
          );
        })(e.a),
        u =
          (e.a,
          (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              r.__extends(e, t),
              (e.prototype.notifyNext = function (t) {
                this.destination.next(t);
              }),
              (e.prototype.notifyError = function (t) {
                this.destination.error(t);
              }),
              (e.prototype.notifyComplete = function () {
                this.destination.complete();
              }),
              e
            );
          })(e.a));
      function a(t, e) {
        if (!e.closed) {
          if (t instanceof i.a) return t.subscribe(e);
          var n;
          try {
            n = Object(o.a)(t)(e);
          } catch (t) {
            e.error(t);
          }
          return n;
        }
      }
      e.a;
    },
    1111: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return u;
      });
      var r = n(1114),
        i = n(1252),
        o = n(1166),
        s = n(1251),
        u = (function () {
          function t(t) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              t && ((this._ctorUnsubscribe = !0), (this._unsubscribe = t));
          }
          var e;
          return (
            (t.prototype.unsubscribe = function () {
              var e;
              if (!this.closed) {
                var n = this._parentOrParents,
                  u = this._ctorUnsubscribe,
                  c = this._unsubscribe,
                  l = this._subscriptions;
                if (
                  ((this.closed = !0),
                  (this._parentOrParents = null),
                  (this._subscriptions = null),
                  n instanceof t)
                )
                  n.remove(this);
                else if (null !== n)
                  for (var h = 0; h < n.length; ++h) n[h].remove(this);
                if (Object(o.a)(c)) {
                  u && (this._unsubscribe = void 0);
                  try {
                    c.call(this);
                  } catch (n) {
                    e = n instanceof s.a ? a(n.errors) : [n];
                  }
                }
                if (Object(r.a)(l)) {
                  h = -1;
                  for (var f = l.length; ++h < f; ) {
                    var d = l[h];
                    if (Object(i.a)(d))
                      try {
                        d.unsubscribe();
                      } catch (n) {
                        (e = e || []),
                          n instanceof s.a
                            ? (e = e.concat(a(n.errors)))
                            : e.push(n);
                      }
                  }
                }
                if (e) throw new s.a(e);
              }
            }),
            (t.prototype.add = function (e) {
              var n,
                r = e;
              if (!e) return t.EMPTY;
              switch (typeof e) {
                case "function":
                  r = new t(e);
                case "object":
                  if (
                    r === this ||
                    r.closed ||
                    "function" != typeof r.unsubscribe
                  )
                    return r;
                  if (this.closed) return r.unsubscribe(), r;
                  r instanceof t ||
                    ((n = r), ((r = new t())._subscriptions = [n]));
                  break;
                default:
                  throw new Error(
                    "unrecognized teardown " + e + " added to Subscription."
                  );
              }
              var i = r._parentOrParents;
              if (null === i) r._parentOrParents = this;
              else if (i instanceof t) {
                if (i === this) return r;
                r._parentOrParents = [i, this];
              } else {
                if (-1 !== i.indexOf(this)) return r;
                i.push(this);
              }
              return (
                null === (i = this._subscriptions)
                  ? (this._subscriptions = [r])
                  : i.push(r),
                r
              );
            }),
            (t.prototype.remove = function (t) {
              var e = this._subscriptions;
              !e || (-1 !== (t = e.indexOf(t)) && e.splice(t, 1));
            }),
            (t.EMPTY = (((e = new t()).closed = !0), e)),
            t
          );
        })();
      function a(t) {
        return t.reduce(function (t, e) {
          return t.concat(e instanceof s.a ? e.errors : e);
        }, []);
      }
    },
    1112: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return c;
      }),
        n.d(e, "a", function () {
          return l;
        });
      var r = n(113),
        i = n(1106),
        o = ((e = n(1104)), n(1111)),
        s = n(1167),
        u = n(1369),
        a = n(1250),
        c = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (n.destination = e), n;
          }
          return r.__extends(e, t), e;
        })(e.a),
        l = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return (
              (e.observers = []),
              (e.closed = !1),
              (e.isStopped = !1),
              (e.hasError = !1),
              (e.thrownError = null),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype[a.a] = function () {
              return new c(this);
            }),
            (e.prototype.lift = function (t) {
              var e = new h(this, this);
              return (e.operator = t), e;
            }),
            (e.prototype.next = function (t) {
              if (this.closed) throw new s.a();
              if (!this.isStopped)
                for (
                  var e = this.observers, n = e.length, r = e.slice(), i = 0;
                  i < n;
                  i++
                )
                  r[i].next(t);
            }),
            (e.prototype.error = function (t) {
              if (this.closed) throw new s.a();
              (this.hasError = !0),
                (this.thrownError = t),
                (this.isStopped = !0);
              for (
                var e = this.observers, n = e.length, r = e.slice(), i = 0;
                i < n;
                i++
              )
                r[i].error(t);
              this.observers.length = 0;
            }),
            (e.prototype.complete = function () {
              if (this.closed) throw new s.a();
              this.isStopped = !0;
              for (
                var t = this.observers, e = t.length, n = t.slice(), r = 0;
                r < e;
                r++
              )
                n[r].complete();
              this.observers.length = 0;
            }),
            (e.prototype.unsubscribe = function () {
              (this.isStopped = !0),
                (this.closed = !0),
                (this.observers = null);
            }),
            (e.prototype._trySubscribe = function (e) {
              if (this.closed) throw new s.a();
              return t.prototype._trySubscribe.call(this, e);
            }),
            (e.prototype._subscribe = function (t) {
              if (this.closed) throw new s.a();
              return this.hasError
                ? (t.error(this.thrownError), o.a.EMPTY)
                : this.isStopped
                ? (t.complete(), o.a.EMPTY)
                : (this.observers.push(t), new u.a(this, t));
            }),
            (e.prototype.asObservable = function () {
              var t = new i.a();
              return (t.source = this), t;
            }),
            (e.create = function (t, e) {
              return new h(t, e);
            }),
            e
          );
        })(i.a),
        h = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (r.destination = e), (r.source = n), r;
          }
          return (
            r.__extends(e, t),
            (e.prototype.next = function (t) {
              var e = this.destination;
              e && e.next && e.next(t);
            }),
            (e.prototype.error = function (t) {
              var e = this.destination;
              e && e.error && this.destination.error(t);
            }),
            (e.prototype.complete = function () {
              var t = this.destination;
              t && t.complete && this.destination.complete();
            }),
            (e.prototype._subscribe = function (t) {
              return this.source ? this.source.subscribe(t) : o.a.EMPTY;
            }),
            e
          );
        })(l);
    },
    1113: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "a", function () {
          return i;
        });
      e = n(1176);
      var r = new (n(1170).a)(e.a),
        i = r;
    },
    1114: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r =
        Array.isArray ||
        function (t) {
          return t && "number" == typeof t.length;
        };
    },
    1115: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = n(113);
      n = n(1104);
      function i(t, e) {
        return function (n) {
          if ("function" != typeof t)
            throw new TypeError(
              "argument is not a function. Are you looking for `mapTo()`?"
            );
          return n.lift(new o(t, e));
        };
      }
      var o = (function () {
          function t(t, e) {
            (this.project = t), (this.thisArg = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new s(t, this.project, this.thisArg));
            }),
            t
          );
        })(),
        s = (function (t) {
          function e(e, n, r) {
            return (
              ((e = t.call(this, e) || this).project = n),
              (e.count = 0),
              (e.thisArg = r || e),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              var e;
              try {
                e = this.project.call(this.thisArg, t, this.count++);
              } catch (t) {
                return void this.destination.error(t);
              }
              this.destination.next(e);
            }),
            e
          );
        })(n.a);
    },
    1117: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return o;
        });
      var r = n(1106),
        i = new r.a(function (t) {
          return t.complete();
        });
      function o(t) {
        return t
          ? ((e = t),
            new r.a(function (t) {
              return e.schedule(function () {
                return t.complete();
              });
            }))
          : i;
        var e;
      }
    },
    1118: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      var r = n(1106),
        i = n(1204),
        o = n(1266);
      function s(t, e) {
        return e
          ? Object(o.a)(t, e)
          : t instanceof r.a
          ? t
          : new r.a(Object(i.a)(t));
      }
    },
    1119: function (t, e, n) {
      "use strict";
      function r(t) {
        return t && "function" == typeof t.schedule;
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    1125: function (t, e, n) {
      "use strict";
      function r(t) {
        return t;
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    1136: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "render", function () {
          return T;
        }),
        n.d(e, "hydrate", function () {
          return L;
        }),
        n.d(e, "createElement", function () {
          return p;
        }),
        n.d(e, "h", function () {
          return p;
        }),
        n.d(e, "Fragment", function () {
          return g;
        }),
        n.d(e, "createRef", function () {
          return v;
        }),
        n.d(e, "isValidElement", function () {
          return i;
        }),
        n.d(e, "Component", function () {
          return y;
        }),
        n.d(e, "cloneElement", function () {
          return R;
        }),
        n.d(e, "createContext", function () {
          return P;
        }),
        n.d(e, "toChildArray", function () {
          return k;
        }),
        n.d(e, "options", function () {
          return r;
        });
      var r,
        i,
        o,
        s,
        u,
        a,
        c = {},
        l = [],
        h = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      function f(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      }
      function d(t) {
        var e = t.parentNode;
        e && e.removeChild(t);
      }
      function p(t, e, n) {
        var r,
          i,
          o,
          s = arguments,
          u = {};
        for (o in e)
          "key" == o ? (r = e[o]) : "ref" == o ? (i = e[o]) : (u[o] = e[o]);
        if (3 < arguments.length)
          for (n = [n], o = 3; o < arguments.length; o++) n.push(s[o]);
        if (
          (null != n && (u.children = n),
          "function" == typeof t && null != t.defaultProps)
        )
          for (o in t.defaultProps)
            void 0 === u[o] && (u[o] = t.defaultProps[o]);
        return b(t, u, r, i, null);
      }
      function b(t, e, n, i, o) {
        return (
          (o = {
            type: t,
            props: e,
            key: n,
            ref: i,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: null == o ? ++r.__v : o,
          }),
          null != r.vnode && r.vnode(o),
          o
        );
      }
      function v() {
        return { current: null };
      }
      function g(t) {
        return t.children;
      }
      function y(t, e) {
        (this.props = t), (this.context = e);
      }
      function m(t, e) {
        if (null == e) return t.__ ? m(t.__, t.__.__k.indexOf(t) + 1) : null;
        for (var n; e < t.__k.length; e++)
          if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
        return "function" == typeof t.type ? m(t) : null;
      }
      function w(t) {
        ((!t.__d && (t.__d = !0) && o.push(t) && !_.__r++) ||
          u !== r.debounceRendering) &&
          ((u = r.debounceRendering) || s)(_);
      }
      function _() {
        for (var t; (_.__r = o.length); )
          (t = o.sort(function (t, e) {
            return t.__v.__b - e.__v.__b;
          })),
            (o = []),
            t.some(function (t) {
              var e, n, r, i, o;
              t.__d &&
                ((i = (r = (e = t).__v).__e),
                (o = e.__P) &&
                  ((n = []),
                  ((t = f({}, r)).__v = r.__v + 1),
                  I(
                    o,
                    r,
                    t,
                    e.__n,
                    void 0 !== o.ownerSVGElement,
                    null != r.__h ? [i] : null,
                    n,
                    null == i ? m(r) : i,
                    r.__h
                  ),
                  N(n, r),
                  r.__e != i &&
                    (function t(e) {
                      var n, r;
                      if (null != (e = e.__) && null != e.__c) {
                        for (
                          e.__e = e.__c.base = null, n = 0;
                          n < e.__k.length;
                          n++
                        )
                          if (null != (r = e.__k[n]) && null != r.__e) {
                            e.__e = e.__c.base = r.__e;
                            break;
                          }
                        return t(e);
                      }
                    })(r)));
            });
      }
      function x(t, e, n, i, o, s, u, a, h, f) {
        var p,
          v,
          y,
          w,
          _,
          x,
          k,
          S = (i && i.__k) || l,
          E = S.length;
        for (n.__k = [], p = 0; p < e.length; p++)
          if (
            null !=
            (w = n.__k[p] =
              null == (w = e[p]) || "boolean" == typeof w
                ? null
                : "string" == typeof w ||
                  "number" == typeof w ||
                  "bigint" == typeof w
                ? b(null, w, null, null, w)
                : Array.isArray(w)
                ? b(g, { children: w }, null, null, null)
                : 0 < w.__b
                ? b(w.type, w.props, w.key, null, w.__v)
                : w)
          ) {
            if (
              ((w.__ = n),
              (w.__b = n.__b + 1),
              null === (y = S[p]) || (y && w.key == y.key && w.type === y.type))
            )
              S[p] = void 0;
            else
              for (v = 0; v < E; v++) {
                if ((y = S[v]) && w.key == y.key && w.type === y.type) {
                  S[v] = void 0;
                  break;
                }
                y = null;
              }
            I(t, w, (y = y || c), o, s, u, a, h, f),
              (_ = w.__e),
              (v = w.ref) &&
                y.ref != v &&
                ((k = k || []),
                y.ref && k.push(y.ref, null, w),
                k.push(v, w.__c || _, w)),
              null != _
                ? (null == x && (x = _),
                  "function" == typeof w.type &&
                  null != w.__k &&
                  w.__k === y.__k
                    ? (w.__d = h =
                        (function t(e, n, r) {
                          var i, o;
                          for (i = 0; i < e.__k.length; i++)
                            (o = e.__k[i]) &&
                              ((o.__ = e),
                              (n =
                                "function" == typeof o.type
                                  ? t(o, n, r)
                                  : M(r, o, o, e.__k, o.__e, n)));
                          return n;
                        })(w, h, t))
                    : (h = M(t, w, y, S, _, h)),
                  f || "option" !== n.type
                    ? "function" == typeof n.type && (n.__d = h)
                    : (t.value = ""))
                : h && y.__e == h && h.parentNode != t && (h = m(y));
          }
        for (n.__e = x, p = E; p--; )
          null != S[p] &&
            ("function" == typeof n.type &&
              null != S[p].__e &&
              S[p].__e == n.__d &&
              (n.__d = m(i, p + 1)),
            (function t(e, n, i) {
              var o, s, u;
              if (
                (r.unmount && r.unmount(e),
                (o = e.ref) &&
                  ((o.current && o.current !== e.__e) || O(o, null, n)),
                i || "function" == typeof e.type || (i = null != (s = e.__e)),
                (e.__e = e.__d = void 0),
                null != (o = e.__c))
              ) {
                if (o.componentWillUnmount)
                  try {
                    o.componentWillUnmount();
                  } catch (e) {
                    r.__e(e, n);
                  }
                o.base = o.__P = null;
              }
              if ((o = e.__k))
                for (u = 0; u < o.length; u++) o[u] && t(o[u], n, i);
              null != s && d(s);
            })(S[p], S[p]));
        if (k) for (p = 0; p < k.length; p++) O(k[p], k[++p], k[++p]);
      }
      function k(t, e) {
        return (
          (e = e || []),
          null == t ||
            "boolean" == typeof t ||
            (Array.isArray(t)
              ? t.some(function (t) {
                  k(t, e);
                })
              : e.push(t)),
          e
        );
      }
      function M(t, e, n, r, i, o) {
        var s, u, a;
        if (void 0 !== e.__d) (s = e.__d), (e.__d = void 0);
        else if (null == n || i != o || null == i.parentNode)
          t: if (null == o || o.parentNode !== t) t.appendChild(i), (s = null);
          else {
            for (u = o, a = 0; (u = u.nextSibling) && a < r.length; a += 2)
              if (u == i) break t;
            t.insertBefore(i, o), (s = o);
          }
        return void 0 !== s ? s : i.nextSibling;
      }
      function S(t, e, n) {
        "-" === e[0]
          ? t.setProperty(e, n)
          : (t[e] =
              null == n
                ? ""
                : "number" != typeof n || h.test(e)
                ? n
                : n + "px");
      }
      function E(t, e, n, r, i) {
        var o;
        t: if ("style" === e)
          if ("string" == typeof n) t.style.cssText = n;
          else {
            if (("string" == typeof r && (t.style.cssText = r = ""), r))
              for (e in r) (n && e in n) || S(t.style, e, "");
            if (n) for (e in n) (r && n[e] === r[e]) || S(t.style, e, n[e]);
          }
        else if ("o" === e[0] && "n" === e[1])
          (o = e !== (e = e.replace(/Capture$/, ""))),
            (e = (e.toLowerCase() in t ? e.toLowerCase() : e).slice(2)),
            t.l || (t.l = {}),
            (t.l[e + o] = n),
            n
              ? r || t.addEventListener(e, o ? C : j, o)
              : t.removeEventListener(e, o ? C : j, o);
        else if ("dangerouslySetInnerHTML" !== e) {
          if (i) e = e.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
          else if (
            "href" !== e &&
            "list" !== e &&
            "form" !== e &&
            "tabIndex" !== e &&
            "download" !== e &&
            e in t
          )
            try {
              t[e] = null == n ? "" : n;
              break t;
            } catch (t) {}
          "function" == typeof n ||
            (null != n && (!1 !== n || ("a" === e[0] && "r" === e[1]))
              ? t.setAttribute(e, n)
              : t.removeAttribute(e));
        }
      }
      function j(t) {
        this.l[t.type + !1](r.event ? r.event(t) : t);
      }
      function C(t) {
        this.l[t.type + !0](r.event ? r.event(t) : t);
      }
      function I(t, e, n, i, o, s, u, a, h) {
        var p,
          b,
          v,
          m,
          w,
          _,
          k,
          M,
          S,
          j,
          C,
          I = e.type;
        if (void 0 === e.constructor) {
          null != n.__h &&
            ((h = n.__h), (a = e.__e = n.__e), (e.__h = null), (s = [a])),
            (p = r.__b) && p(e);
          try {
            t: if ("function" == typeof I) {
              if (
                ((M = e.props),
                (S = (p = I.contextType) && i[p.__c]),
                (j = p ? (S ? S.props.value : p.__) : i),
                n.__c
                  ? (k = (b = e.__c = n.__c).__ = b.__E)
                  : ("prototype" in I && I.prototype.render
                      ? (e.__c = b = new I(M, j))
                      : ((e.__c = b = new y(M, j)),
                        (b.constructor = I),
                        (b.render = A)),
                    S && S.sub(b),
                    (b.props = M),
                    b.state || (b.state = {}),
                    (b.context = j),
                    (b.__n = i),
                    (v = b.__d = !0),
                    (b.__h = [])),
                null == b.__s && (b.__s = b.state),
                null != I.getDerivedStateFromProps &&
                  (b.__s == b.state && (b.__s = f({}, b.__s)),
                  f(b.__s, I.getDerivedStateFromProps(M, b.__s))),
                (m = b.props),
                (w = b.state),
                v)
              )
                null == I.getDerivedStateFromProps &&
                  null != b.componentWillMount &&
                  b.componentWillMount(),
                  null != b.componentDidMount &&
                    b.__h.push(b.componentDidMount);
              else {
                if (
                  (null == I.getDerivedStateFromProps &&
                    M !== m &&
                    null != b.componentWillReceiveProps &&
                    b.componentWillReceiveProps(M, j),
                  (!b.__e &&
                    null != b.shouldComponentUpdate &&
                    !1 === b.shouldComponentUpdate(M, b.__s, j)) ||
                    e.__v === n.__v)
                ) {
                  (b.props = M),
                    (b.state = b.__s),
                    e.__v !== n.__v && (b.__d = !1),
                    ((b.__v = e).__e = n.__e),
                    (e.__k = n.__k),
                    e.__k.forEach(function (t) {
                      t && (t.__ = e);
                    }),
                    b.__h.length && u.push(b);
                  break t;
                }
                null != b.componentWillUpdate &&
                  b.componentWillUpdate(M, b.__s, j),
                  null != b.componentDidUpdate &&
                    b.__h.push(function () {
                      b.componentDidUpdate(m, w, _);
                    });
              }
              (b.context = j),
                (b.props = M),
                (b.state = b.__s),
                (p = r.__r) && p(e),
                (b.__d = !1),
                (b.__v = e),
                (b.__P = t),
                (p = b.render(b.props, b.state, b.context)),
                (b.state = b.__s),
                null != b.getChildContext &&
                  (i = f(f({}, i), b.getChildContext())),
                v ||
                  null == b.getSnapshotBeforeUpdate ||
                  (_ = b.getSnapshotBeforeUpdate(m, w)),
                (C =
                  null != p && p.type === g && null == p.key
                    ? p.props.children
                    : p),
                x(t, Array.isArray(C) ? C : [C], e, n, i, o, s, u, a, h),
                (b.base = e.__e),
                (e.__h = null),
                b.__h.length && u.push(b),
                k && (b.__E = b.__ = null),
                (b.__e = !1);
            } else
              null == s && e.__v === n.__v
                ? ((e.__k = n.__k), (e.__e = n.__e))
                : (e.__e = (function (t, e, n, r, i, o, s, u) {
                    var a,
                      h,
                      f,
                      p,
                      b = n.props,
                      v = e.props,
                      g = e.type,
                      y = 0;
                    if (("svg" === g && (i = !0), null != o))
                      for (; y < o.length; y++)
                        if (
                          (a = o[y]) &&
                          (a === t || (g ? a.localName == g : 3 == a.nodeType))
                        ) {
                          (t = a), (o[y] = null);
                          break;
                        }
                    if (null == t) {
                      if (null === g) return document.createTextNode(v);
                      (t = i
                        ? document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            g
                          )
                        : document.createElement(g, v.is && v)),
                        (o = null),
                        (u = !1);
                    }
                    if (null === g)
                      b === v || (u && t.data === v) || (t.data = v);
                    else {
                      if (
                        ((o = o && l.slice.call(t.childNodes)),
                        (h = (b = n.props || c).dangerouslySetInnerHTML),
                        (f = v.dangerouslySetInnerHTML),
                        !u)
                      ) {
                        if (null != o)
                          for (b = {}, p = 0; p < t.attributes.length; p++)
                            b[t.attributes[p].name] = t.attributes[p].value;
                        (f || h) &&
                          ((f &&
                            ((h && f.__html == h.__html) ||
                              f.__html === t.innerHTML)) ||
                            (t.innerHTML = (f && f.__html) || ""));
                      }
                      if (
                        ((function (t, e, n, r, i) {
                          for (var o in n)
                            "children" === o ||
                              "key" === o ||
                              o in e ||
                              E(t, o, null, n[o], r);
                          for (o in e)
                            (i && "function" != typeof e[o]) ||
                              "children" === o ||
                              "key" === o ||
                              "value" === o ||
                              "checked" === o ||
                              n[o] === e[o] ||
                              E(t, o, e[o], n[o], r);
                        })(t, v, b, i, u),
                        f)
                      )
                        e.__k = [];
                      else if (
                        ((y = e.props.children),
                        x(
                          t,
                          Array.isArray(y) ? y : [y],
                          e,
                          n,
                          r,
                          i && "foreignObject" !== g,
                          o,
                          s,
                          t.firstChild,
                          u
                        ),
                        null != o)
                      )
                        for (y = o.length; y--; ) null != o[y] && d(o[y]);
                      u ||
                        ("value" in v &&
                          void 0 !== (y = v.value) &&
                          (y !== t.value || ("progress" === g && !y)) &&
                          E(t, "value", y, b.value, !1),
                        "checked" in v &&
                          void 0 !== (y = v.checked) &&
                          y !== t.checked &&
                          E(t, "checked", y, b.checked, !1));
                    }
                    return t;
                  })(n.__e, e, n, i, o, s, u, h));
            (p = r.diffed) && p(e);
          } catch (t) {
            (e.__v = null),
              (!h && null == s) ||
                ((e.__e = a), (e.__h = !!h), (s[s.indexOf(a)] = null)),
              r.__e(t, e, n);
          }
        }
      }
      function N(t, e) {
        r.__c && r.__c(e, t),
          t.some(function (e) {
            try {
              (t = e.__h),
                (e.__h = []),
                t.some(function (t) {
                  t.call(e);
                });
            } catch (t) {
              r.__e(t, e.__v);
            }
          });
      }
      function O(t, e, n) {
        try {
          "function" == typeof t ? t(e) : (t.current = e);
        } catch (t) {
          r.__e(t, n);
        }
      }
      function A(t, e, n) {
        return this.constructor(t, n);
      }
      function T(t, e, n) {
        var i, o, s;
        r.__ && r.__(t, e),
          (o = (i = "function" == typeof n) ? null : (n && n.__k) || e.__k),
          (s = []),
          I(
            e,
            (t = ((!i && n) || e).__k = p(g, null, [t])),
            o || c,
            c,
            void 0 !== e.ownerSVGElement,
            !i && n
              ? [n]
              : !o && e.firstChild
              ? l.slice.call(e.childNodes)
              : null,
            s,
            !i && n ? n : o ? o.__e : e.firstChild,
            i
          ),
          N(s, t);
      }
      function L(t, e) {
        T(t, e, L);
      }
      function R(t, e, n) {
        var r,
          i,
          o,
          s = arguments,
          u = f({}, t.props);
        for (o in e)
          "key" == o ? (r = e[o]) : "ref" == o ? (i = e[o]) : (u[o] = e[o]);
        if (3 < arguments.length)
          for (n = [n], o = 3; o < arguments.length; o++) n.push(s[o]);
        return (
          null != n && (u.children = n),
          b(t.type, u, r || t.key, i || t.ref, null)
        );
      }
      function P(t, e) {
        return ((t = {
          __c: (e = "__cC" + a++),
          __: t,
          Consumer: function (t, e) {
            return t.children(e);
          },
          Provider: function (t) {
            var n, r;
            return (
              this.getChildContext ||
                ((n = []),
                (((r = {})[e] = this).getChildContext = function () {
                  return r;
                }),
                (this.shouldComponentUpdate = function (t) {
                  this.props.value !== t.value && n.some(w);
                }),
                (this.sub = function (t) {
                  n.push(t);
                  var e = t.componentWillUnmount;
                  t.componentWillUnmount = function () {
                    n.splice(n.indexOf(t), 1), e && e.call(t);
                  };
                })),
              t.children
            );
          },
        }).Provider.__ = t.Consumer.contextType =
          t);
      }
      (r = {
        __e: function (t, e) {
          for (var n, r, i; (e = e.__); )
            if ((n = e.__c) && !n.__)
              try {
                if (
                  ((r = n.constructor) &&
                    null != r.getDerivedStateFromError &&
                    (n.setState(r.getDerivedStateFromError(t)), (i = n.__d)),
                  null != n.componentDidCatch &&
                    (n.componentDidCatch(t), (i = n.__d)),
                  i)
                )
                  return (n.__E = n);
              } catch (e) {
                t = e;
              }
          throw t;
        },
        __v: 0,
      }),
        (i = function (t) {
          return null != t && void 0 === t.constructor;
        }),
        (y.prototype.setState = function (t, e) {
          var n =
            null != this.__s && this.__s !== this.state
              ? this.__s
              : (this.__s = f({}, this.state));
          (t = "function" == typeof t ? t(f({}, n), this.props) : t) && f(n, t),
            null != t && this.__v && (e && this.__h.push(e), w(this));
        }),
        (y.prototype.forceUpdate = function (t) {
          this.__v && ((this.__e = !0), t && this.__h.push(t), w(this));
        }),
        (y.prototype.render = g),
        (o = []),
        (s =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (a = _.__r = 0);
    },
    1137: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r =
        ("function" == typeof Symbol && Symbol.observable) || "@@observable";
    },
    1138: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = n(113),
        i = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            r.__extends(e, t),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              this.destination.next(e);
            }),
            (e.prototype.notifyError = function (t, e) {
              this.destination.error(t);
            }),
            (e.prototype.notifyComplete = function (t) {
              this.destination.complete();
            }),
            e
          );
        })(n(1104).a);
    },
    1139: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = n(113);
      n = n(1104);
      function i(t, e) {
        return function (n) {
          return n.lift(new o(t, e));
        };
      }
      var o = (function () {
          function t(t, e) {
            (this.predicate = t), (this.thisArg = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new s(t, this.predicate, this.thisArg));
            }),
            t
          );
        })(),
        s = (function (t) {
          function e(e, n, r) {
            return (
              ((e = t.call(this, e) || this).predicate = n),
              (e.thisArg = r),
              (e.count = 0),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              var e;
              try {
                e = this.predicate.call(this.thisArg, t, this.count++);
              } catch (t) {
                return void this.destination.error(t);
              }
              e && this.destination.next(t);
            }),
            e
          );
        })(n.a);
    },
    1140: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return u;
      });
      var r = n(113),
        i = (function (t) {
          function e(e, n, r) {
            var i = t.call(this) || this;
            return (
              (i.parent = e),
              (i.outerValue = n),
              (i.outerIndex = r),
              (i.index = 0),
              i
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              this.parent.notifyNext(
                this.outerValue,
                t,
                this.outerIndex,
                this.index++,
                this
              );
            }),
            (e.prototype._error = function (t) {
              this.parent.notifyError(t, this), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.parent.notifyComplete(this), this.unsubscribe();
            }),
            e
          );
        })(n(1104).a),
        o = n(1204),
        s = n(1106);
      function u(t, e, n, r, u) {
        if (!(u = void 0 === u ? new i(t, n, r) : u).closed)
          return e instanceof s.a ? e.subscribe(u) : Object(o.a)(e)(u);
      }
    },
    1149: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return s;
      }),
        n.d(e, "a", function () {
          return u;
        });
      var r = n(1117),
        i = n(1168),
        o = n(1195),
        s = s || {},
        u = (function () {
          function t(t, e, n) {
            (this.kind = t),
              (this.value = e),
              (this.error = n),
              (this.hasValue = "N" === t);
          }
          return (
            (t.prototype.observe = function (t) {
              switch (this.kind) {
                case "N":
                  return t.next && t.next(this.value);
                case "E":
                  return t.error && t.error(this.error);
                case "C":
                  return t.complete && t.complete();
              }
            }),
            (t.prototype.do = function (t, e, n) {
              switch (this.kind) {
                case "N":
                  return t && t(this.value);
                case "E":
                  return e && e(this.error);
                case "C":
                  return n && n();
              }
            }),
            (t.prototype.accept = function (t, e, n) {
              return t && "function" == typeof t.next
                ? this.observe(t)
                : this.do(t, e, n);
            }),
            (t.prototype.toObservable = function () {
              switch (this.kind) {
                case "N":
                  return Object(i.a)(this.value);
                case "E":
                  return Object(o.a)(this.error);
                case "C":
                  return Object(r.b)();
              }
              throw new Error("unexpected notification kind value");
            }),
            (t.createNext = function (e) {
              return void 0 !== e
                ? new t("N", e)
                : t.undefinedValueNotification;
            }),
            (t.createError = function (e) {
              return new t("E", void 0, e);
            }),
            (t.createComplete = function () {
              return t.completeNotification;
            }),
            (t.completeNotification = new t("C")),
            (t.undefinedValueNotification = new t("N", void 0)),
            t
          );
        })();
    },
    1150: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r = (function () {
        function t() {
          return (
            Error.call(this),
            (this.message = "argument out of range"),
            (this.name = "ArgumentOutOfRangeError"),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
    },
    1151: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r = (function () {
        function t() {
          return (
            Error.call(this),
            (this.message = "no elements in sequence"),
            (this.name = "EmptyError"),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
    },
    1152: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return u;
      }),
        n.d(e, "a", function () {
          return l;
        });
      var r = n(113),
        i = n(1115),
        o = n(1118),
        s = n(1109);
      function u(t, e, n) {
        return (
          void 0 === n && (n = Number.POSITIVE_INFINITY),
          "function" == typeof e
            ? function (r) {
                return r.pipe(
                  u(function (n, r) {
                    return Object(o.a)(t(n, r)).pipe(
                      Object(i.a)(function (t, i) {
                        return e(n, t, r, i);
                      })
                    );
                  }, n)
                );
              }
            : ("number" == typeof e && (n = e),
              function (e) {
                return e.lift(new a(t, n));
              })
        );
      }
      var a = (function () {
          function t(t, e) {
            void 0 === e && (e = Number.POSITIVE_INFINITY),
              (this.project = t),
              (this.concurrent = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new c(t, this.project, this.concurrent));
            }),
            t
          );
        })(),
        c = (function (t) {
          function e(e, n, r) {
            return (
              void 0 === r && (r = Number.POSITIVE_INFINITY),
              ((e = t.call(this, e) || this).project = n),
              (e.concurrent = r),
              (e.hasCompleted = !1),
              (e.buffer = []),
              (e.active = 0),
              (e.index = 0),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              this.active < this.concurrent
                ? this._tryNext(t)
                : this.buffer.push(t);
            }),
            (e.prototype._tryNext = function (t) {
              var e,
                n = this.index++;
              try {
                e = this.project(t, n);
              } catch (t) {
                return void this.destination.error(t);
              }
              this.active++, this._innerSub(e);
            }),
            (e.prototype._innerSub = function (t) {
              var e = new s.a(this),
                n = this.destination;
              n.add(e), (t = Object(s.c)(t, e)) !== e && n.add(t);
            }),
            (e.prototype._complete = function () {
              (this.hasCompleted = !0),
                0 === this.active &&
                  0 === this.buffer.length &&
                  this.destination.complete(),
                this.unsubscribe();
            }),
            (e.prototype.notifyNext = function (t) {
              this.destination.next(t);
            }),
            (e.prototype.notifyComplete = function () {
              var t = this.buffer;
              this.active--,
                0 < t.length
                  ? this._next(t.shift())
                  : 0 === this.active &&
                    this.hasCompleted &&
                    this.destination.complete();
            }),
            e
          );
        })(s.b),
        l = u;
    },
    1164: function (t, e, n) {
      "use strict";
      (function (t) {
        var r =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getFavicon =
            e.range =
            e.isBigNumber =
            e.ensureParsedJSONObject =
            e.ensureBN =
            e.ensureRegExpString =
            e.ensureIntNumber =
            e.ensureBuffer =
            e.ensureAddressString =
            e.ensureEvenLengthHexString =
            e.ensureHexString =
            e.isHexString =
            e.prepend0x =
            e.strip0x =
            e.has0xPrefix =
            e.hexStringFromIntNumber =
            e.intNumberFromHexString =
            e.bigIntStringFromBN =
            e.hexStringFromBuffer =
              void 0);
        var i = r(n(1190)),
          o = n(1246),
          s = /^[0-9]*$/,
          u = /^[a-f0-9]*$/;
        function a(t) {
          return t.startsWith("0x") || t.startsWith("0X");
        }
        function c(t) {
          return a(t) ? t.slice(2) : t;
        }
        function l(t) {
          return a(t) ? "0x" + t.slice(2) : "0x" + t;
        }
        function h(t) {
          return "string" == typeof t && ((t = c(t).toLowerCase()), u.test(t));
        }
        function f(t) {
          var e =
            1 < arguments.length && void 0 !== arguments[1] && arguments[1];
          if ("string" == typeof t) {
            var n = c(t).toLowerCase();
            if (u.test(n)) return o.HexString(e ? "0x" + n : n);
          }
          throw new Error('"'.concat(t, '" is not a hexadecimal string'));
        }
        function d(t) {
          var e =
            1 < arguments.length && void 0 !== arguments[1] && arguments[1];
          return (
            (t = f(t, !1)).length % 2 == 1 && (t = o.HexString("0" + t)),
            e ? o.HexString("0x" + t) : t
          );
        }
        function p(t) {
          if ("number" == typeof t && Number.isInteger(t))
            return o.IntNumber(t);
          if ("string" == typeof t) {
            if (s.test(t)) return o.IntNumber(Number(t));
            if (h(t))
              return o.IntNumber(new i.default(d(t, !1), 16).toNumber());
          }
          throw new Error("Not an integer: ".concat(t));
        }
        function b(t) {
          return (
            null != t &&
            "function" == typeof t.constructor &&
            "function" == typeof (t = t.constructor).config &&
            "number" == typeof t.EUCLID
          );
        }
        (e.hexStringFromBuffer = function (t) {
          var e =
            1 < arguments.length && void 0 !== arguments[1] && arguments[1];
          t = t.toString("hex");
          return o.HexString(e ? "0x" + t : t);
        }),
          (e.bigIntStringFromBN = function (t) {
            return o.BigIntString(t.toString(10));
          }),
          (e.intNumberFromHexString = function (t) {
            return o.IntNumber(new i.default(d(t, !1), 16).toNumber());
          }),
          (e.hexStringFromIntNumber = function (t) {
            return o.HexString("0x" + new i.default(t).toString(16));
          }),
          (e.has0xPrefix = a),
          (e.strip0x = c),
          (e.prepend0x = l),
          (e.isHexString = h),
          (e.ensureHexString = f),
          (e.ensureEvenLengthHexString = d),
          (e.ensureAddressString = function (t) {
            if ("string" == typeof t) {
              var e = c(t).toLowerCase();
              if (h(e) && 40 === e.length) return o.AddressString(l(e));
            }
            throw new Error("Invalid Ethereum address: ".concat(t));
          }),
          (e.ensureBuffer = function (e) {
            if (t.isBuffer(e)) return e;
            if ("string" != typeof e)
              throw new Error("Not binary data: ".concat(e));
            if (h(e)) {
              var n = d(e, !1);
              return t.from(n, "hex");
            }
            return t.from(e, "utf8");
          }),
          (e.ensureIntNumber = p),
          (e.ensureRegExpString = function (t) {
            if (t instanceof RegExp) return o.RegExpString(t.toString());
            throw new Error("Not a RegExp: ".concat(t));
          }),
          (e.ensureBN = function (t) {
            if (null != t && (i.default.isBN(t) || b(t)))
              return new i.default(t.toString(10), 10);
            if ("number" == typeof t) return new i.default(p(t));
            if ("string" == typeof t) {
              if (s.test(t)) return new i.default(t, 10);
              if (h(t)) return new i.default(d(t, !1), 16);
            }
            throw new Error("Not an integer: ".concat(t));
          }),
          (e.ensureParsedJSONObject = function (t) {
            if ("string" == typeof t) return JSON.parse(t);
            if ("object" == typeof t) return t;
            throw new Error("Not a JSON string or an object: ".concat(t));
          }),
          (e.isBigNumber = b),
          (e.range = function (t, e) {
            return Array.from({ length: e - t }, function (e, n) {
              return t + n;
            });
          }),
          (e.getFavicon = function () {
            var t =
                document.querySelector('link[sizes="192x192"]') ||
                document.querySelector('link[sizes="180x180"]') ||
                document.querySelector('link[rel="icon"]') ||
                document.querySelector('link[rel="shortcut icon"]'),
              e = (n = document.location).protocol,
              n = n.host;
            return !(t = t ? t.getAttribute("href") : null) ||
              t.startsWith("javascript:")
              ? null
              : t.startsWith("http://") ||
                t.startsWith("https://") ||
                t.startsWith("data:")
              ? t
              : t.startsWith("//")
              ? e + t
              : "".concat(e, "//").concat(n).concat(t);
          });
      }.call(this, n(532).Buffer));
    },
    1165: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = !1,
        i = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(t) {
            r = t;
          },
          get useDeprecatedSynchronousErrorHandling() {
            return r;
          },
        };
    },
    1166: function (t, e, n) {
      "use strict";
      function r(t) {
        return "function" == typeof t;
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    1167: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r = (function () {
        function t() {
          return (
            Error.call(this),
            (this.message = "object unsubscribed"),
            (this.name = "ObjectUnsubscribedError"),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
    },
    1168: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      var r = n(1119),
        i = n(1169),
        o = n(1257);
      function s() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = t[t.length - 1];
        return Object(r.a)(n) ? (t.pop(), Object(o.a)(t, n)) : Object(i.a)(t);
      }
    },
    1169: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      var r = n(1106),
        i = n(1370),
        o = n(1257);
      function s(t, e) {
        return e ? Object(o.a)(t, e) : new r.a(Object(i.a)(t));
      }
    },
    1170: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var r = n(113),
        i = n(1258),
        o = (function (t) {
          function e(n, r) {
            void 0 === r && (r = i.a.now);
            var o =
              t.call(this, n, function () {
                return e.delegate && e.delegate !== o ? e.delegate.now() : r();
              }) || this;
            return (o.actions = []), (o.active = !1), (o.scheduled = void 0), o;
          }
          return (
            r.__extends(e, t),
            (e.prototype.schedule = function (n, r, i) {
              return (
                void 0 === r && (r = 0),
                e.delegate && e.delegate !== this
                  ? e.delegate.schedule(n, r, i)
                  : t.prototype.schedule.call(this, n, r, i)
              );
            }),
            (e.prototype.flush = function (t) {
              var e,
                n = this.actions;
              if (this.active) n.push(t);
              else {
                this.active = !0;
                do {
                  if ((e = t.execute(t.state, t.delay))) break;
                } while ((t = n.shift()));
                if (((this.active = !1), e)) {
                  for (; (t = n.shift()); ) t.unsubscribe();
                  throw e;
                }
              }
            }),
            e
          );
        })(i.a);
    },
    1171: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var r = n(113),
        i = ((e = n(1112)), n(1111)),
        o = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.value = null), (e.hasNext = !1), (e.hasCompleted = !1), e;
          }
          return (
            r.__extends(e, t),
            (e.prototype._subscribe = function (e) {
              return this.hasError
                ? (e.error(this.thrownError), i.a.EMPTY)
                : this.hasCompleted && this.hasNext
                ? (e.next(this.value), e.complete(), i.a.EMPTY)
                : t.prototype._subscribe.call(this, e);
            }),
            (e.prototype.next = function (t) {
              this.hasCompleted || ((this.value = t), (this.hasNext = !0));
            }),
            (e.prototype.error = function (e) {
              this.hasCompleted || t.prototype.error.call(this, e);
            }),
            (e.prototype.complete = function () {
              (this.hasCompleted = !0),
                this.hasNext && t.prototype.next.call(this, this.value),
                t.prototype.complete.call(this);
            }),
            e
          );
        })(e.a);
    },
    1172: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r =
        "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
    },
    1173: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var r = n(1168),
        i = n(1260);
      function o() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return Object(i.a)()(r.a.apply(void 0, t));
      }
    },
    1174: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "audit", function () {
          return o;
        }),
        n.d(e, "auditTime", function () {
          return l;
        }),
        n.d(e, "buffer", function () {
          return h;
        }),
        n.d(e, "bufferCount", function () {
          return b;
        }),
        n.d(e, "bufferTime", function () {
          return w;
        }),
        n.d(e, "bufferToggle", function () {
          return N;
        }),
        n.d(e, "bufferWhen", function () {
          return T;
        }),
        n.d(e, "catchError", function () {
          return P;
        }),
        n.d(e, "combineAll", function () {
          return F;
        }),
        n.d(e, "combineLatest", function () {
          return U;
        }),
        n.d(e, "concat", function () {
          return H;
        }),
        n.d(e, "concatAll", function () {
          return Y.a;
        }),
        n.d(e, "concatMap", function () {
          return J;
        }),
        n.d(e, "concatMapTo", function () {
          return Z;
        }),
        n.d(e, "count", function () {
          return Q;
        }),
        n.d(e, "debounce", function () {
          return X;
        }),
        n.d(e, "debounceTime", function () {
          return nt;
        }),
        n.d(e, "defaultIfEmpty", function () {
          return st;
        }),
        n.d(e, "delay", function () {
          return ht;
        }),
        n.d(e, "delayWhen", function () {
          return bt;
        }),
        n.d(e, "dematerialize", function () {
          return wt;
        }),
        n.d(e, "distinct", function () {
          return kt;
        }),
        n.d(e, "distinctUntilChanged", function () {
          return Et;
        }),
        n.d(e, "distinctUntilKeyChanged", function () {
          return It;
        }),
        n.d(e, "elementAt", function () {
          return Wt;
        }),
        n.d(e, "endWith", function () {
          return Ut;
        }),
        n.d(e, "every", function () {
          return Vt;
        }),
        n.d(e, "exhaust", function () {
          return Gt;
        }),
        n.d(e, "exhaustMap", function () {
          return Kt;
        }),
        n.d(e, "expand", function () {
          return te;
        }),
        n.d(e, "filter", function () {
          return Ot.a;
        }),
        n.d(e, "finalize", function () {
          return re;
        }),
        n.d(e, "find", function () {
          return se;
        }),
        n.d(e, "findIndex", function () {
          return ce;
        }),
        n.d(e, "first", function () {
          return he;
        }),
        n.d(e, "groupBy", function () {
          return fe.b;
        }),
        n.d(e, "ignoreElements", function () {
          return de;
        }),
        n.d(e, "isEmpty", function () {
          return ve;
        }),
        n.d(e, "last", function () {
          return xe;
        }),
        n.d(e, "map", function () {
          return Qt.a;
        }),
        n.d(e, "mapTo", function () {
          return ke;
        }),
        n.d(e, "materialize", function () {
          return Ee;
        }),
        n.d(e, "max", function () {
          return Le;
        }),
        n.d(e, "merge", function () {
          return Pe;
        }),
        n.d(e, "mergeAll", function () {
          return De.a;
        }),
        n.d(e, "mergeMap", function () {
          return G.b;
        }),
        n.d(e, "flatMap", function () {
          return G.a;
        }),
        n.d(e, "mergeMapTo", function () {
          return ze;
        }),
        n.d(e, "mergeScan", function () {
          return Be;
        }),
        n.d(e, "min", function () {
          return qe;
        }),
        n.d(e, "multicast", function () {
          return Ve;
        }),
        n.d(e, "observeOn", function () {
          return Ye.b;
        }),
        n.d(e, "onErrorResumeNext", function () {
          return Ge;
        }),
        n.d(e, "pairwise", function () {
          return Qe;
        }),
        n.d(e, "partition", function () {
          return tn;
        }),
        n.d(e, "pluck", function () {
          return en;
        }),
        n.d(e, "publish", function () {
          return rn;
        }),
        n.d(e, "publishBehavior", function () {
          return sn;
        }),
        n.d(e, "publishLast", function () {
          return an;
        }),
        n.d(e, "publishReplay", function () {
          return ln;
        }),
        n.d(e, "race", function () {
          return fn;
        }),
        n.d(e, "reduce", function () {
          return Te;
        }),
        n.d(e, "repeat", function () {
          return dn;
        }),
        n.d(e, "repeatWhen", function () {
          return vn;
        }),
        n.d(e, "retry", function () {
          return mn;
        }),
        n.d(e, "retryWhen", function () {
          return xn;
        }),
        n.d(e, "refCount", function () {
          return Sn.a;
        }),
        n.d(e, "sample", function () {
          return En;
        }),
        n.d(e, "sampleTime", function () {
          return In;
        }),
        n.d(e, "scan", function () {
          return Ie;
        }),
        n.d(e, "sequenceEqual", function () {
          return Tn;
        }),
        n.d(e, "share", function () {
          return zn;
        }),
        n.d(e, "shareReplay", function () {
          return Bn;
        }),
        n.d(e, "single", function () {
          return Fn;
        }),
        n.d(e, "skip", function () {
          return Un;
        }),
        n.d(e, "skipLast", function () {
          return Yn;
        }),
        n.d(e, "skipUntil", function () {
          return Zn;
        }),
        n.d(e, "skipWhile", function () {
          return $n;
        }),
        n.d(e, "startWith", function () {
          return er;
        }),
        n.d(e, "subscribeOn", function () {
          return or;
        }),
        n.d(e, "switchAll", function () {
          return lr;
        }),
        n.d(e, "switchMap", function () {
          return ur;
        }),
        n.d(e, "switchMapTo", function () {
          return hr;
        }),
        n.d(e, "take", function () {
          return zt;
        }),
        n.d(e, "takeLast", function () {
          return me;
        }),
        n.d(e, "takeUntil", function () {
          return fr;
        }),
        n.d(e, "takeWhile", function () {
          return br;
        }),
        n.d(e, "tap", function () {
          return wr;
        }),
        n.d(e, "throttle", function () {
          return Mr;
        }),
        n.d(e, "throttleTime", function () {
          return jr;
        }),
        n.d(e, "throwIfEmpty", function () {
          return Tt;
        }),
        n.d(e, "timeInterval", function () {
          return Ar;
        }),
        n.d(e, "timeout", function () {
          return Br;
        }),
        n.d(e, "timeoutWith", function () {
          return Rr;
        }),
        n.d(e, "timestamp", function () {
          return Fr;
        }),
        n.d(e, "toArray", function () {
          return Ur;
        }),
        n.d(e, "window", function () {
          return Vr;
        }),
        n.d(e, "windowCount", function () {
          return Gr;
        }),
        n.d(e, "windowTime", function () {
          return Qr;
        }),
        n.d(e, "windowToggle", function () {
          return ri;
        }),
        n.d(e, "windowWhen", function () {
          return si;
        }),
        n.d(e, "withLatestFrom", function () {
          return ci;
        }),
        n.d(e, "zip", function () {
          return di;
        }),
        n.d(e, "zipAll", function () {
          return pi;
        });
      var r = n(113),
        i = n(1109);
      function o(t) {
        return function (e) {
          return e.lift(new s(t));
        };
      }
      var s = (function () {
          function t(t) {
            this.durationSelector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new u(t, this.durationSelector));
            }),
            t
          );
        })(),
        u = (function (t) {
          function e(e, n) {
            return (
              ((e = t.call(this, e) || this).durationSelector = n),
              (e.hasValue = !1),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              if (((this.value = t), (this.hasValue = !0), !this.throttled)) {
                var e = void 0;
                try {
                  e = (0, this.durationSelector)(t);
                } catch (t) {
                  return this.destination.error(t);
                }
                !(e = Object(i.c)(e, new i.a(this))) || e.closed
                  ? this.clearThrottle()
                  : this.add((this.throttled = e));
              }
            }),
            (e.prototype.clearThrottle = function () {
              var t = this.value,
                e = this.hasValue,
                n = this.throttled;
              n && (this.remove(n), (this.throttled = void 0), n.unsubscribe()),
                e &&
                  ((this.value = void 0),
                  (this.hasValue = !1),
                  this.destination.next(t));
            }),
            (e.prototype.notifyNext = function () {
              this.clearThrottle();
            }),
            (e.prototype.notifyComplete = function () {
              this.clearThrottle();
            }),
            e
          );
        })(i.b),
        a = n(1113),
        c = n(1263);
      function l(t, e) {
        return (
          void 0 === e && (e = a.a),
          o(function () {
            return Object(c.a)(t, e);
          })
        );
      }
      function h(t) {
        return function (e) {
          return e.lift(new f(t));
        };
      }
      var f = (function () {
          function t(t) {
            this.closingNotifier = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new d(t, this.closingNotifier));
            }),
            t
          );
        })(),
        d = (function (t) {
          function e(e, n) {
            return (
              ((e = t.call(this, e) || this).buffer = []),
              e.add(Object(i.c)(n, new i.a(e))),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              this.buffer.push(t);
            }),
            (e.prototype.notifyNext = function () {
              var t = this.buffer;
              (this.buffer = []), this.destination.next(t);
            }),
            e
          );
        })(i.b),
        p = n(1104);
      function b(t, e) {
        return (
          void 0 === e && (e = null),
          function (n) {
            return n.lift(new v(t, e));
          }
        );
      }
      var v = (function () {
          function t(t, e) {
            (this.bufferSize = t),
              (this.startBufferEvery = e),
              (this.subscriberClass = e && t !== e ? y : g);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new this.subscriberClass(
                  t,
                  this.bufferSize,
                  this.startBufferEvery
                )
              );
            }),
            t
          );
        })(),
        g = (function (t) {
          function e(e, n) {
            return (
              ((e = t.call(this, e) || this).bufferSize = n), (e.buffer = []), e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              var e = this.buffer;
              e.push(t),
                e.length == this.bufferSize &&
                  (this.destination.next(e), (this.buffer = []));
            }),
            (e.prototype._complete = function () {
              var e = this.buffer;
              0 < e.length && this.destination.next(e),
                t.prototype._complete.call(this);
            }),
            e
          );
        })(p.a),
        y = (function (t) {
          function e(e, n, r) {
            return (
              ((e = t.call(this, e) || this).bufferSize = n),
              (e.startBufferEvery = r),
              (e.buffers = []),
              (e.count = 0),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              var e = this.bufferSize,
                n = this.startBufferEvery,
                r = this.buffers,
                i = this.count;
              this.count++, i % n == 0 && r.push([]);
              for (var o = r.length; o--; ) {
                var s = r[o];
                s.push(t),
                  s.length === e && (r.splice(o, 1), this.destination.next(s));
              }
            }),
            (e.prototype._complete = function () {
              for (var e = this.buffers, n = this.destination; 0 < e.length; ) {
                var r = e.shift();
                0 < r.length && n.next(r);
              }
              t.prototype._complete.call(this);
            }),
            e
          );
        })(p.a),
        m = n(1119);
      function w(t) {
        var e = arguments.length,
          n = a.a;
        Object(m.a)(arguments[arguments.length - 1]) &&
          ((n = arguments[arguments.length - 1]), e--);
        var r = null;
        2 <= e && (r = arguments[1]);
        var i = Number.POSITIVE_INFINITY;
        return (
          3 <= e && (i = arguments[2]),
          function (e) {
            return e.lift(new _(t, r, i, n));
          }
        );
      }
      var _ = (function () {
          function t(t, e, n, r) {
            (this.bufferTimeSpan = t),
              (this.bufferCreationInterval = e),
              (this.maxBufferSize = n),
              (this.scheduler = r);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new k(
                  t,
                  this.bufferTimeSpan,
                  this.bufferCreationInterval,
                  this.maxBufferSize,
                  this.scheduler
                )
              );
            }),
            t
          );
        })(),
        x = function () {
          this.buffer = [];
        },
        k = (function (t) {
          function e(e, n, r, i, o) {
            var s = t.call(this, e) || this;
            return (
              (s.bufferTimeSpan = n),
              (s.bufferCreationInterval = r),
              (s.maxBufferSize = i),
              (s.scheduler = o),
              (s.contexts = []),
              (e = s.openContext()),
              (s.timespanOnly = null == r || r < 0),
              s.timespanOnly
                ? s.add(
                    (e.closeAction = o.schedule(M, n, {
                      subscriber: s,
                      context: e,
                      bufferTimeSpan: n,
                    }))
                  )
                : ((i = {
                    bufferTimeSpan: n,
                    bufferCreationInterval: r,
                    subscriber: s,
                    scheduler: o,
                  }),
                  s.add(
                    (e.closeAction = o.schedule(E, n, {
                      subscriber: s,
                      context: e,
                    }))
                  ),
                  s.add(o.schedule(S, r, i))),
              s
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              for (var e, n = this.contexts, r = n.length, i = 0; i < r; i++) {
                var o = n[i],
                  s = o.buffer;
                s.push(t), s.length == this.maxBufferSize && (e = o);
              }
              e && this.onBufferFull(e);
            }),
            (e.prototype._error = function (e) {
              (this.contexts.length = 0), t.prototype._error.call(this, e);
            }),
            (e.prototype._complete = function () {
              for (
                var e = this.contexts, n = this.destination;
                0 < e.length;

              ) {
                var r = e.shift();
                n.next(r.buffer);
              }
              t.prototype._complete.call(this);
            }),
            (e.prototype._unsubscribe = function () {
              this.contexts = null;
            }),
            (e.prototype.onBufferFull = function (t) {
              this.closeContext(t);
              var e = t.closeAction;
              e.unsubscribe(),
                this.remove(e),
                !this.closed &&
                  this.timespanOnly &&
                  ((t = this.openContext()),
                  (e = this.bufferTimeSpan),
                  this.add(
                    (t.closeAction = this.scheduler.schedule(M, e, {
                      subscriber: this,
                      context: t,
                      bufferTimeSpan: e,
                    }))
                  ));
            }),
            (e.prototype.openContext = function () {
              var t = new x();
              return this.contexts.push(t), t;
            }),
            (e.prototype.closeContext = function (t) {
              this.destination.next(t.buffer);
              var e = this.contexts;
              0 <= (e ? e.indexOf(t) : -1) && e.splice(e.indexOf(t), 1);
            }),
            e
          );
        })(p.a);
      function M(t) {
        var e = t.subscriber,
          n = t.context;
        n && e.closeContext(n),
          e.closed ||
            ((t.context = e.openContext()),
            (t.context.closeAction = this.schedule(t, t.bufferTimeSpan)));
      }
      function S(t) {
        var e = t.bufferCreationInterval,
          n = t.bufferTimeSpan,
          r = t.subscriber,
          i = t.scheduler,
          o = r.openContext();
        r.closed ||
          (r.add(
            (o.closeAction = i.schedule(E, n, { subscriber: r, context: o }))
          ),
          this.schedule(t, e));
      }
      function E(t) {
        var e = t.subscriber;
        t = t.context;
        e.closeContext(t);
      }
      var j = n(1111),
        C = n(1140),
        I = n(1138);
      function N(t, e) {
        return function (n) {
          return n.lift(new O(t, e));
        };
      }
      var O = (function () {
          function t(t, e) {
            (this.openings = t), (this.closingSelector = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new A(t, this.openings, this.closingSelector));
            }),
            t
          );
        })(),
        A = (function (t) {
          function e(e, n, r) {
            return (
              ((e = t.call(this, e) || this).closingSelector = r),
              (e.contexts = []),
              e.add(Object(C.a)(e, n)),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              for (var e = this.contexts, n = e.length, r = 0; r < n; r++)
                e[r].buffer.push(t);
            }),
            (e.prototype._error = function (e) {
              for (var n = this.contexts; 0 < n.length; ) {
                var r = n.shift();
                r.subscription.unsubscribe(),
                  (r.buffer = null),
                  (r.subscription = null);
              }
              (this.contexts = null), t.prototype._error.call(this, e);
            }),
            (e.prototype._complete = function () {
              for (var e = this.contexts; 0 < e.length; ) {
                var n = e.shift();
                this.destination.next(n.buffer),
                  n.subscription.unsubscribe(),
                  (n.buffer = null),
                  (n.subscription = null);
              }
              (this.contexts = null), t.prototype._complete.call(this);
            }),
            (e.prototype.notifyNext = function (t, e) {
              t ? this.closeBuffer(t) : this.openBuffer(e);
            }),
            (e.prototype.notifyComplete = function (t) {
              this.closeBuffer(t.context);
            }),
            (e.prototype.openBuffer = function (t) {
              try {
                var e = this.closingSelector.call(this, t);
                e && this.trySubscribe(e);
              } catch (t) {
                this._error(t);
              }
            }),
            (e.prototype.closeBuffer = function (t) {
              var e,
                n,
                r = this.contexts;
              r &&
                t &&
                ((e = t.buffer),
                (n = t.subscription),
                this.destination.next(e),
                r.splice(r.indexOf(t), 1),
                this.remove(n),
                n.unsubscribe());
            }),
            (e.prototype.trySubscribe = function (t) {
              var e = this.contexts,
                n = new j.a(),
                r = { buffer: [], subscription: n };
              e.push(r),
                !(t = Object(C.a)(this, t, r)) || t.closed
                  ? this.closeBuffer(r)
                  : ((t.context = r), this.add(t), n.add(t));
            }),
            e
          );
        })(I.a);
      function T(t) {
        return function (e) {
          return e.lift(new L(t));
        };
      }
      var L = (function () {
          function t(t) {
            this.closingSelector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new R(t, this.closingSelector));
            }),
            t
          );
        })(),
        R = (function (t) {
          function e(e, n) {
            return (
              ((e = t.call(this, e) || this).closingSelector = n),
              (e.subscribing = !1),
              e.openBuffer(),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              this.buffer.push(t);
            }),
            (e.prototype._complete = function () {
              var e = this.buffer;
              e && this.destination.next(e), t.prototype._complete.call(this);
            }),
            (e.prototype._unsubscribe = function () {
              (this.buffer = void 0), (this.subscribing = !1);
            }),
            (e.prototype.notifyNext = function () {
              this.openBuffer();
            }),
            (e.prototype.notifyComplete = function () {
              this.subscribing ? this.complete() : this.openBuffer();
            }),
            (e.prototype.openBuffer = function () {
              var t = this.closingSubscription;
              t && (this.remove(t), t.unsubscribe());
              var e = this.buffer;
              this.buffer && this.destination.next(e), (this.buffer = []);
              try {
                var n = (0, this.closingSelector)();
              } catch (t) {
                return this.error(t);
              }
              (t = new j.a()),
                (this.closingSubscription = t),
                this.add(t),
                (this.subscribing = !0),
                t.add(Object(i.c)(n, new i.a(this))),
                (this.subscribing = !1);
            }),
            e
          );
        })(i.b);
      function P(t) {
        return function (e) {
          var n = new D(t);
          e = e.lift(n);
          return (n.caught = e);
        };
      }
      var D = (function () {
          function t(t) {
            this.selector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new z(t, this.selector, this.caught));
            }),
            t
          );
        })(),
        z = (function (t) {
          function e(e, n, r) {
            return (
              ((e = t.call(this, e) || this).selector = n), (e.caught = r), e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype.error = function (e) {
              if (!this.isStopped) {
                var n = void 0;
                try {
                  n = this.selector(e, this.caught);
                } catch (e) {
                  return void t.prototype.error.call(this, e);
                }
                this._unsubscribeAndRecycle(),
                  (e = new i.a(this)),
                  this.add(e),
                  (n = Object(i.c)(n, e)) !== e && this.add(n);
              }
            }),
            e
          );
        })(i.b),
        B = n(1197);
      function F(t) {
        return function (e) {
          return e.lift(new B.a(t));
        };
      }
      var W = n(1114),
        q = n(1118);
      function U() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = null;
        return (
          "function" == typeof t[t.length - 1] && (n = t.pop()),
          1 === t.length && Object(W.a)(t[0]) && (t = t[0].slice()),
          function (e) {
            return e.lift.call(Object(q.a)([e].concat(t)), new B.a(n));
          }
        );
      }
      var V = n(1173);
      function H() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function (e) {
          return e.lift.call(V.a.apply(void 0, [e].concat(t)));
        };
      }
      var Y = n(1260),
        G = n(1152);
      function J(t, e) {
        return Object(G.b)(t, e, 1);
      }
      function Z(t, e) {
        return J(function () {
          return t;
        }, e);
      }
      function Q(t) {
        return function (e) {
          return e.lift(new K(t, e));
        };
      }
      var K = (function () {
          function t(t, e) {
            (this.predicate = t), (this.source = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new $(t, this.predicate, this.source));
            }),
            t
          );
        })(),
        $ = (function (t) {
          function e(e, n, r) {
            return (
              ((e = t.call(this, e) || this).predicate = n),
              (e.source = r),
              (e.count = 0),
              (e.index = 0),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              this.predicate ? this._tryPredicate(t) : this.count++;
            }),
            (e.prototype._tryPredicate = function (t) {
              var e;
              try {
                e = this.predicate(t, this.index++, this.source);
              } catch (t) {
                return void this.destination.error(t);
              }
              e && this.count++;
            }),
            (e.prototype._complete = function () {
              this.destination.next(this.count), this.destination.complete();
            }),
            e
          );
        })(p.a);
      function X(t) {
        return function (e) {
          return e.lift(new tt(t));
        };
      }
      var tt = (function () {
          function t(t) {
            this.durationSelector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new et(t, this.durationSelector));
            }),
            t
          );
        })(),
        et = (function (t) {
          function e(e, n) {
            return (
              ((e = t.call(this, e) || this).durationSelector = n),
              (e.hasValue = !1),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              try {
                var e = this.durationSelector.call(this, t);
                e && this._tryNext(t, e);
              } catch (t) {
                this.destination.error(t);
              }
            }),
            (e.prototype._complete = function () {
              this.emitValue(), this.destination.complete();
            }),
            (e.prototype._tryNext = function (t, e) {
              var n = this.durationSubscription;
              (this.value = t),
                (this.hasValue = !0),
                n && (n.unsubscribe(), this.remove(n)),
                (n = Object(i.c)(e, new i.a(this))) &&
                  !n.closed &&
                  this.add((this.durationSubscription = n));
            }),
            (e.prototype.notifyNext = function () {
              this.emitValue();
            }),
            (e.prototype.notifyComplete = function () {
              this.emitValue();
            }),
            (e.prototype.emitValue = function () {
              var e, n;
              this.hasValue &&
                ((e = this.value),
                (n = this.durationSubscription) &&
                  ((this.durationSubscription = void 0),
                  n.unsubscribe(),
                  this.remove(n)),
                (this.value = void 0),
                (this.hasValue = !1),
                t.prototype._next.call(this, e));
            }),
            e
          );
        })(i.b);
      function nt(t, e) {
        return (
          void 0 === e && (e = a.a),
          function (n) {
            return n.lift(new rt(t, e));
          }
        );
      }
      var rt = (function () {
          function t(t, e) {
            (this.dueTime = t), (this.scheduler = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new it(t, this.dueTime, this.scheduler));
            }),
            t
          );
        })(),
        it = (function (t) {
          function e(e, n, r) {
            return (
              ((e = t.call(this, e) || this).dueTime = n),
              (e.scheduler = r),
              (e.debouncedSubscription = null),
              (e.lastValue = null),
              (e.hasValue = !1),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              this.clearDebounce(),
                (this.lastValue = t),
                (this.hasValue = !0),
                this.add(
                  (this.debouncedSubscription = this.scheduler.schedule(
                    ot,
                    this.dueTime,
                    this
                  ))
                );
            }),
            (e.prototype._complete = function () {
              this.debouncedNext(), this.destination.complete();
            }),
            (e.prototype.debouncedNext = function () {
              var t;
              this.clearDebounce(),
                this.hasValue &&
                  ((t = this.lastValue),
                  (this.lastValue = null),
                  (this.hasValue = !1),
                  this.destination.next(t));
            }),
            (e.prototype.clearDebounce = function () {
              var t = this.debouncedSubscription;
              null !== t &&
                (this.remove(t),
                t.unsubscribe(),
                (this.debouncedSubscription = null));
            }),
            e
          );
        })(p.a);
      function ot(t) {
        t.debouncedNext();
      }
      function st(t) {
        return (
          void 0 === t && (t = null),
          function (e) {
            return e.lift(new ut(t));
          }
        );
      }
      var ut = (function () {
          function t(t) {
            this.defaultValue = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new at(t, this.defaultValue));
            }),
            t
          );
        })(),
        at = (function (t) {
          function e(e, n) {
            return (
              ((e = t.call(this, e) || this).defaultValue = n),
              (e.isEmpty = !0),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              (this.isEmpty = !1), this.destination.next(t);
            }),
            (e.prototype._complete = function () {
              this.isEmpty && this.destination.next(this.defaultValue),
                this.destination.complete();
            }),
            e
          );
        })(p.a);
      function ct(t) {
        return t instanceof Date && !isNaN(+t);
      }
      var lt = n(1149);
      function ht(t, e) {
        void 0 === e && (e = a.a);
        var n = ct(t) ? +t - e.now() : Math.abs(t);
        return function (t) {
          return t.lift(new ft(n, e));
        };
      }
      var ft = (function () {
          function t(t, e) {
            (this.delay = t), (this.scheduler = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new dt(t, this.delay, this.scheduler));
            }),
            t
          );
        })(),
        dt = (function (t) {
          function e(e, n, r) {
            return (
              ((e = t.call(this, e) || this).delay = n),
              (e.scheduler = r),
              (e.queue = []),
              (e.active = !1),
              (e.errored = !1),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.dispatch = function (t) {
              for (
                var e,
                  n = t.source,
                  r = n.queue,
                  i = t.scheduler,
                  o = t.destination;
                0 < r.length && r[0].time - i.now() <= 0;

              )
                r.shift().notification.observe(o);
              0 < r.length
                ? ((e = Math.max(0, r[0].time - i.now())), this.schedule(t, e))
                : (this.unsubscribe(), (n.active = !1));
            }),
            (e.prototype._schedule = function (t) {
              (this.active = !0),
                this.destination.add(
                  t.schedule(e.dispatch, this.delay, {
                    source: this,
                    destination: this.destination,
                    scheduler: t,
                  })
                );
            }),
            (e.prototype.scheduleNotification = function (t) {
              var e;
              !0 !== this.errored &&
                ((e = this.scheduler),
                (t = new pt(e.now() + this.delay, t)),
                this.queue.push(t),
                !1 === this.active && this._schedule(e));
            }),
            (e.prototype._next = function (t) {
              this.scheduleNotification(lt.a.createNext(t));
            }),
            (e.prototype._error = function (t) {
              (this.errored = !0),
                (this.queue = []),
                this.destination.error(t),
                this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.scheduleNotification(lt.a.createComplete()),
                this.unsubscribe();
            }),
            e
          );
        })(p.a),
        pt = function (t, e) {
          (this.time = t), (this.notification = e);
        };
      e = n(1106);
      function bt(t, e) {
        return e
          ? function (n) {
              return new yt(n, e).lift(new vt(t));
            }
          : function (e) {
              return e.lift(new vt(t));
            };
      }
      var vt = (function () {
          function t(t) {
            this.delayDurationSelector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new gt(t, this.delayDurationSelector));
            }),
            t
          );
        })(),
        gt = (function (t) {
          function e(e, n) {
            return (
              ((e = t.call(this, e) || this).delayDurationSelector = n),
              (e.completed = !1),
              (e.delayNotifierSubscriptions = []),
              (e.index = 0),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              this.destination.next(t),
                this.removeSubscription(i),
                this.tryComplete();
            }),
            (e.prototype.notifyError = function (t, e) {
              this._error(t);
            }),
            (e.prototype.notifyComplete = function (t) {
              (t = this.removeSubscription(t)) && this.destination.next(t),
                this.tryComplete();
            }),
            (e.prototype._next = function (t) {
              var e = this.index++;
              try {
                var n = this.delayDurationSelector(t, e);
                n && this.tryDelay(n, t);
              } catch (t) {
                this.destination.error(t);
              }
            }),
            (e.prototype._complete = function () {
              (this.completed = !0), this.tryComplete(), this.unsubscribe();
            }),
            (e.prototype.removeSubscription = function (t) {
              t.unsubscribe();
              var e = this.delayNotifierSubscriptions.indexOf(t);
              return (
                -1 !== e && this.delayNotifierSubscriptions.splice(e, 1),
                t.outerValue
              );
            }),
            (e.prototype.tryDelay = function (t, e) {
              (e = Object(C.a)(this, t, e)) &&
                !e.closed &&
                (this.destination.add(e),
                this.delayNotifierSubscriptions.push(e));
            }),
            (e.prototype.tryComplete = function () {
              this.completed &&
                0 === this.delayNotifierSubscriptions.length &&
                this.destination.complete();
            }),
            e
          );
        })(I.a),
        yt = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (r.source = e), (r.subscriptionDelay = n), r;
          }
          return (
            r.__extends(e, t),
            (e.prototype._subscribe = function (t) {
              this.subscriptionDelay.subscribe(new mt(t, this.source));
            }),
            e
          );
        })(e.a),
        mt = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (r.parent = e), (r.source = n), (r.sourceSubscribed = !1), r;
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              this.subscribeToSource();
            }),
            (e.prototype._error = function (t) {
              this.unsubscribe(), this.parent.error(t);
            }),
            (e.prototype._complete = function () {
              this.unsubscribe(), this.subscribeToSource();
            }),
            (e.prototype.subscribeToSource = function () {
              this.sourceSubscribed ||
                ((this.sourceSubscribed = !0),
                this.unsubscribe(),
                this.source.subscribe(this.parent));
            }),
            e
          );
        })(p.a);
      function wt() {
        return function (t) {
          return t.lift(new _t());
        };
      }
      var _t = (function () {
          function t() {}
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new xt(t));
            }),
            t
          );
        })(),
        xt = (function (t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              t.observe(this.destination);
            }),
            e
          );
        })(p.a);
      function kt(t, e) {
        return function (n) {
          return n.lift(new Mt(t, e));
        };
      }
      var Mt = (function () {
          function t(t, e) {
            (this.keySelector = t), (this.flushes = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new St(t, this.keySelector, this.flushes));
            }),
            t
          );
        })(),
        St = (function (t) {
          function e(e, n, r) {
            return (
              ((e = t.call(this, e) || this).keySelector = n),
              (e.values = new Set()),
              r && e.add(Object(i.c)(r, new i.a(e))),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype.notifyNext = function () {
              this.values.clear();
            }),
            (e.prototype.notifyError = function (t) {
              this._error(t);
            }),
            (e.prototype._next = function (t) {
              this.keySelector
                ? this._useKeySelector(t)
                : this._finalizeNext(t, t);
            }),
            (e.prototype._useKeySelector = function (t) {
              var e,
                n = this.destination;
              try {
                e = this.keySelector(t);
              } catch (t) {
                return void n.error(t);
              }
              this._finalizeNext(e, t);
            }),
            (e.prototype._finalizeNext = function (t, e) {
              var n = this.values;
              n.has(t) || (n.add(t), this.destination.next(e));
            }),
            e
          );
        })(i.b);
      function Et(t, e) {
        return function (n) {
          return n.lift(new jt(t, e));
        };
      }
      var jt = (function () {
          function t(t, e) {
            (this.compare = t), (this.keySelector = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Ct(t, this.compare, this.keySelector));
            }),
            t
          );
        })(),
        Ct = (function (t) {
          function e(e, n, r) {
            return (
              ((e = t.call(this, e) || this).keySelector = r),
              (e.hasKey = !1),
              "function" == typeof n && (e.compare = n),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype.compare = function (t, e) {
              return t === e;
            }),
            (e.prototype._next = function (t) {
              try {
                var e = this.keySelector,
                  n = e ? e(t) : t;
              } catch (t) {
                return this.destination.error(t);
              }
              if (((e = !1), this.hasKey))
                try {
                  e = (0, this.compare)(this.key, n);
                } catch (t) {
                  return this.destination.error(t);
                }
              else this.hasKey = !0;
              e || ((this.key = n), this.destination.next(t));
            }),
            e
          );
        })(p.a);
      function It(t, e) {
        return Et(function (n, r) {
          return e ? e(n[t], r[t]) : n[t] === r[t];
        });
      }
      var Nt = n(1150),
        Ot = n(1139),
        At = n(1151);
      function Tt(t) {
        return (
          void 0 === t && (t = Pt),
          function (e) {
            return e.lift(new Lt(t));
          }
        );
      }
      var Lt = (function () {
          function t(t) {
            this.errorFactory = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Rt(t, this.errorFactory));
            }),
            t
          );
        })(),
        Rt = (function (t) {
          function e(e, n) {
            return (
              ((e = t.call(this, e) || this).errorFactory = n),
              (e.hasValue = !1),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              (this.hasValue = !0), this.destination.next(t);
            }),
            (e.prototype._complete = function () {
              if (this.hasValue) return this.destination.complete();
              var t = void 0;
              try {
                t = this.errorFactory();
              } catch (e) {
                t = e;
              }
              this.destination.error(t);
            }),
            e
          );
        })(p.a);
      function Pt() {
        return new At.a();
      }
      var Dt = n(1117);
      function zt(t) {
        return function (e) {
          return 0 === t ? Object(Dt.b)() : e.lift(new Bt(t));
        };
      }
      var Bt = (function () {
          function t(t) {
            if (((this.total = t), this.total < 0)) throw new Nt.a();
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Ft(t, this.total));
            }),
            t
          );
        })(),
        Ft = (function (t) {
          function e(e, n) {
            return ((e = t.call(this, e) || this).total = n), (e.count = 0), e;
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              var e = this.total,
                n = ++this.count;
              n <= e &&
                (this.destination.next(t),
                n === e && (this.destination.complete(), this.unsubscribe()));
            }),
            e
          );
        })(p.a);
      function Wt(t, e) {
        if (t < 0) throw new Nt.a();
        var n = 2 <= arguments.length;
        return function (r) {
          return r.pipe(
            Object(Ot.a)(function (e, n) {
              return n === t;
            }),
            zt(1),
            n
              ? st(e)
              : Tt(function () {
                  return new Nt.a();
                })
          );
        };
      }
      var qt = n(1168);
      function Ut() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function (e) {
          return Object(V.a)(e, qt.a.apply(void 0, t));
        };
      }
      function Vt(t, e) {
        return function (n) {
          return n.lift(new Ht(t, e, n));
        };
      }
      var Ht = (function () {
          function t(t, e, n) {
            (this.predicate = t), (this.thisArg = e), (this.source = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Yt(t, this.predicate, this.thisArg, this.source)
              );
            }),
            t
          );
        })(),
        Yt = (function (t) {
          function e(e, n, r, i) {
            return (
              ((e = t.call(this, e) || this).predicate = n),
              (e.thisArg = r),
              (e.source = i),
              (e.index = 0),
              (e.thisArg = r || e),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype.notifyComplete = function (t) {
              this.destination.next(t), this.destination.complete();
            }),
            (e.prototype._next = function (t) {
              var e = !1;
              try {
                e = this.predicate.call(
                  this.thisArg,
                  t,
                  this.index++,
                  this.source
                );
              } catch (t) {
                return void this.destination.error(t);
              }
              e || this.notifyComplete(!1);
            }),
            (e.prototype._complete = function () {
              this.notifyComplete(!0);
            }),
            e
          );
        })(p.a);
      function Gt() {
        return function (t) {
          return t.lift(new Jt());
        };
      }
      var Jt = (function () {
          function t() {}
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Zt(t));
            }),
            t
          );
        })(),
        Zt = (function (t) {
          function e(e) {
            return (
              ((e = t.call(this, e) || this).hasCompleted = !1),
              (e.hasSubscription = !1),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              this.hasSubscription ||
                ((this.hasSubscription = !0),
                this.add(Object(i.c)(t, new i.a(this))));
            }),
            (e.prototype._complete = function () {
              (this.hasCompleted = !0),
                this.hasSubscription || this.destination.complete();
            }),
            (e.prototype.notifyComplete = function () {
              (this.hasSubscription = !1),
                this.hasCompleted && this.destination.complete();
            }),
            e
          );
        })(i.b),
        Qt = n(1115);
      function Kt(t, e) {
        return e
          ? function (n) {
              return n.pipe(
                Kt(function (n, r) {
                  return Object(q.a)(t(n, r)).pipe(
                    Object(Qt.a)(function (t, i) {
                      return e(n, t, r, i);
                    })
                  );
                })
              );
            }
          : function (e) {
              return e.lift(new $t(t));
            };
      }
      var $t = (function () {
          function t(t) {
            this.project = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Xt(t, this.project));
            }),
            t
          );
        })(),
        Xt = (function (t) {
          function e(e, n) {
            return (
              ((e = t.call(this, e) || this).project = n),
              (e.hasSubscription = !1),
              (e.hasCompleted = !1),
              (e.index = 0),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              this.hasSubscription || this.tryNext(t);
            }),
            (e.prototype.tryNext = function (t) {
              var e,
                n = this.index++;
              try {
                e = this.project(t, n);
              } catch (t) {
                return void this.destination.error(t);
              }
              (this.hasSubscription = !0), this._innerSub(e);
            }),
            (e.prototype._innerSub = function (t) {
              var e = new i.a(this),
                n = this.destination;
              n.add(e), (t = Object(i.c)(t, e)) !== e && n.add(t);
            }),
            (e.prototype._complete = function () {
              (this.hasCompleted = !0),
                this.hasSubscription || this.destination.complete(),
                this.unsubscribe();
            }),
            (e.prototype.notifyNext = function (t) {
              this.destination.next(t);
            }),
            (e.prototype.notifyError = function (t) {
              this.destination.error(t);
            }),
            (e.prototype.notifyComplete = function () {
              (this.hasSubscription = !1),
                this.hasCompleted && this.destination.complete();
            }),
            e
          );
        })(i.b);
      function te(t, e, n) {
        return (
          (e =
            ((e = void 0 === e ? Number.POSITIVE_INFINITY : e) || 0) < 1
              ? Number.POSITIVE_INFINITY
              : e),
          function (r) {
            return r.lift(new ee(t, e, n));
          }
        );
      }
      var ee = (function () {
          function t(t, e, n) {
            (this.project = t), (this.concurrent = e), (this.scheduler = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new ne(t, this.project, this.concurrent, this.scheduler)
              );
            }),
            t
          );
        })(),
        ne = (function (t) {
          function e(e, n, r, i) {
            return (
              ((e = t.call(this, e) || this).project = n),
              (e.concurrent = r),
              (e.scheduler = i),
              (e.index = 0),
              (e.active = 0),
              (e.hasCompleted = !1),
              r < Number.POSITIVE_INFINITY && (e.buffer = []),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.dispatch = function (t) {
              var e = t.subscriber,
                n = t.result,
                r = t.value;
              t = t.index;
              e.subscribeToProjection(n, r, t);
            }),
            (e.prototype._next = function (t) {
              var n = this.destination;
              if (n.closed) this._complete();
              else {
                var r = this.index++;
                if (this.active < this.concurrent) {
                  n.next(t);
                  try {
                    var i,
                      o = (0, this.project)(t, r);
                    this.scheduler
                      ? ((i = {
                          subscriber: this,
                          result: o,
                          value: t,
                          index: r,
                        }),
                        this.destination.add(
                          this.scheduler.schedule(e.dispatch, 0, i)
                        ))
                      : this.subscribeToProjection(o, t, r);
                  } catch (t) {
                    n.error(t);
                  }
                } else this.buffer.push(t);
              }
            }),
            (e.prototype.subscribeToProjection = function (t, e, n) {
              this.active++,
                this.destination.add(Object(i.c)(t, new i.a(this)));
            }),
            (e.prototype._complete = function () {
              (this.hasCompleted = !0),
                this.hasCompleted &&
                  0 === this.active &&
                  this.destination.complete(),
                this.unsubscribe();
            }),
            (e.prototype.notifyNext = function (t) {
              this._next(t);
            }),
            (e.prototype.notifyComplete = function () {
              var t = this.buffer;
              this.active--,
                t && 0 < t.length && this._next(t.shift()),
                this.hasCompleted &&
                  0 === this.active &&
                  this.destination.complete();
            }),
            e
          );
        })(i.b);
      function re(t) {
        return function (e) {
          return e.lift(new ie(t));
        };
      }
      var ie = (function () {
          function t(t) {
            this.callback = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new oe(t, this.callback));
            }),
            t
          );
        })(),
        oe = (function (t) {
          function e(e, n) {
            return (e = t.call(this, e) || this).add(new j.a(n)), e;
          }
          return r.__extends(e, t), e;
        })(p.a);
      function se(t, e) {
        if ("function" != typeof t)
          throw new TypeError("predicate is not a function");
        return function (n) {
          return n.lift(new ue(t, n, !1, e));
        };
      }
      var ue = (function () {
          function t(t, e, n, r) {
            (this.predicate = t),
              (this.source = e),
              (this.yieldIndex = n),
              (this.thisArg = r);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new ae(
                  t,
                  this.predicate,
                  this.source,
                  this.yieldIndex,
                  this.thisArg
                )
              );
            }),
            t
          );
        })(),
        ae = (function (t) {
          function e(e, n, r, i, o) {
            return (
              ((e = t.call(this, e) || this).predicate = n),
              (e.source = r),
              (e.yieldIndex = i),
              (e.thisArg = o),
              (e.index = 0),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype.notifyComplete = function (t) {
              var e = this.destination;
              e.next(t), e.complete(), this.unsubscribe();
            }),
            (e.prototype._next = function (t) {
              var e = this.predicate,
                n = this.thisArg,
                r = this.index++;
              try {
                e.call(n || this, t, r, this.source) &&
                  this.notifyComplete(this.yieldIndex ? r : t);
              } catch (t) {
                this.destination.error(t);
              }
            }),
            (e.prototype._complete = function () {
              this.notifyComplete(this.yieldIndex ? -1 : void 0);
            }),
            e
          );
        })(p.a);
      function ce(t, e) {
        return function (n) {
          return n.lift(new ue(t, n, !0, e));
        };
      }
      var le = n(1125);
      function he(t, e) {
        var n = 2 <= arguments.length;
        return function (r) {
          return r.pipe(
            t
              ? Object(Ot.a)(function (e, n) {
                  return t(e, n, r);
                })
              : le.a,
            zt(1),
            n
              ? st(e)
              : Tt(function () {
                  return new At.a();
                })
          );
        };
      }
      var fe = n(1193);
      function de() {
        return function (t) {
          return t.lift(new pe());
        };
      }
      var pe = (function () {
          function t() {}
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new be(t));
            }),
            t
          );
        })(),
        be = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return r.__extends(e, t), (e.prototype._next = function (t) {}), e;
        })(p.a);
      function ve() {
        return function (t) {
          return t.lift(new ge());
        };
      }
      var ge = (function () {
          function t() {}
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new ye(t));
            }),
            t
          );
        })(),
        ye = (function (t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          return (
            r.__extends(e, t),
            (e.prototype.notifyComplete = function (t) {
              var e = this.destination;
              e.next(t), e.complete();
            }),
            (e.prototype._next = function (t) {
              this.notifyComplete(!1);
            }),
            (e.prototype._complete = function () {
              this.notifyComplete(!0);
            }),
            e
          );
        })(p.a);
      function me(t) {
        return function (e) {
          return 0 === t ? Object(Dt.b)() : e.lift(new we(t));
        };
      }
      var we = (function () {
          function t(t) {
            if (((this.total = t), this.total < 0)) throw new Nt.a();
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new _e(t, this.total));
            }),
            t
          );
        })(),
        _e = (function (t) {
          function e(e, n) {
            return (
              ((e = t.call(this, e) || this).total = n),
              (e.ring = new Array()),
              (e.count = 0),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              var e = this.ring,
                n = this.total,
                r = this.count++;
              e.length < n ? e.push(t) : (e[r % n] = t);
            }),
            (e.prototype._complete = function () {
              var t = this.destination,
                e = this.count;
              if (0 < e)
                for (
                  var n = this.count >= this.total ? this.total : this.count,
                    r = this.ring,
                    i = 0;
                  i < n;
                  i++
                ) {
                  var o = e++ % n;
                  t.next(r[o]);
                }
              t.complete();
            }),
            e
          );
        })(p.a);
      function xe(t, e) {
        var n = 2 <= arguments.length;
        return function (r) {
          return r.pipe(
            t
              ? Object(Ot.a)(function (e, n) {
                  return t(e, n, r);
                })
              : le.a,
            me(1),
            n
              ? st(e)
              : Tt(function () {
                  return new At.a();
                })
          );
        };
      }
      function ke(t) {
        return function (e) {
          return e.lift(new Me(t));
        };
      }
      var Me = (function () {
          function t(t) {
            this.value = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Se(t, this.value));
            }),
            t
          );
        })(),
        Se = (function (t) {
          function e(e, n) {
            return ((e = t.call(this, e) || this).value = n), e;
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              this.destination.next(this.value);
            }),
            e
          );
        })(p.a);
      function Ee() {
        return function (t) {
          return t.lift(new je());
        };
      }
      var je = (function () {
          function t() {}
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Ce(t));
            }),
            t
          );
        })(),
        Ce = (function (t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              this.destination.next(lt.a.createNext(t));
            }),
            (e.prototype._error = function (t) {
              var e = this.destination;
              e.next(lt.a.createError(t)), e.complete();
            }),
            (e.prototype._complete = function () {
              var t = this.destination;
              t.next(lt.a.createComplete()), t.complete();
            }),
            e
          );
        })(p.a);
      function Ie(t, e) {
        var n = 2 <= arguments.length;
        return function (r) {
          return r.lift(new Ne(t, e, n));
        };
      }
      var Ne = (function () {
          function t(t, e, n) {
            void 0 === n && (n = !1),
              (this.accumulator = t),
              (this.seed = e),
              (this.hasSeed = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Oe(t, this.accumulator, this.seed, this.hasSeed)
              );
            }),
            t
          );
        })(),
        Oe = (function (t) {
          function e(e, n, r, i) {
            return (
              ((e = t.call(this, e) || this).accumulator = n),
              (e._seed = r),
              (e.hasSeed = i),
              (e.index = 0),
              e
            );
          }
          return (
            r.__extends(e, t),
            Object.defineProperty(e.prototype, "seed", {
              get: function () {
                return this._seed;
              },
              set: function (t) {
                (this.hasSeed = !0), (this._seed = t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype._next = function (t) {
              if (this.hasSeed) return this._tryNext(t);
              (this.seed = t), this.destination.next(t);
            }),
            (e.prototype._tryNext = function (t) {
              var e,
                n = this.index++;
              try {
                e = this.accumulator(this.seed, t, n);
              } catch (t) {
                this.destination.error(t);
              }
              (this.seed = e), this.destination.next(e);
            }),
            e
          );
        })(p.a),
        Ae = n(1191);
      function Te(t, e) {
        return 2 <= arguments.length
          ? function (n) {
              return Object(Ae.a)(Ie(t, e), me(1), st(e))(n);
            }
          : function (e) {
              return Object(Ae.a)(
                Ie(function (e, n, r) {
                  return t(e, n, r + 1);
                }),
                me(1)
              )(e);
            };
      }
      function Le(t) {
        return Te(
          "function" == typeof t
            ? function (e, n) {
                return 0 < t(e, n) ? e : n;
              }
            : function (t, e) {
                return e < t ? t : e;
              }
        );
      }
      var Re = n(1261);
      function Pe() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function (e) {
          return e.lift.call(Re.a.apply(void 0, [e].concat(t)));
        };
      }
      var De = n(1198);
      function ze(t, e, n) {
        return (
          void 0 === n && (n = Number.POSITIVE_INFINITY),
          "function" == typeof e
            ? Object(G.b)(
                function () {
                  return t;
                },
                e,
                n
              )
            : ("number" == typeof e && (n = e),
              Object(G.b)(function () {
                return t;
              }, n))
        );
      }
      function Be(t, e, n) {
        return (
          void 0 === n && (n = Number.POSITIVE_INFINITY),
          function (r) {
            return r.lift(new Fe(t, e, n));
          }
        );
      }
      var Fe = (function () {
          function t(t, e, n) {
            (this.accumulator = t), (this.seed = e), (this.concurrent = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new We(t, this.accumulator, this.seed, this.concurrent)
              );
            }),
            t
          );
        })(),
        We = (function (t) {
          function e(e, n, r, i) {
            return (
              ((e = t.call(this, e) || this).accumulator = n),
              (e.acc = r),
              (e.concurrent = i),
              (e.hasValue = !1),
              (e.hasCompleted = !1),
              (e.buffer = []),
              (e.active = 0),
              (e.index = 0),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              if (this.active < this.concurrent) {
                var e = this.index++,
                  n = this.destination,
                  r = void 0;
                try {
                  r = (0, this.accumulator)(this.acc, t, e);
                } catch (t) {
                  return n.error(t);
                }
                this.active++, this._innerSub(r);
              } else this.buffer.push(t);
            }),
            (e.prototype._innerSub = function (t) {
              var e = new i.a(this),
                n = this.destination;
              n.add(e), (t = Object(i.c)(t, e)) !== e && n.add(t);
            }),
            (e.prototype._complete = function () {
              (this.hasCompleted = !0),
                0 === this.active &&
                  0 === this.buffer.length &&
                  (!1 === this.hasValue && this.destination.next(this.acc),
                  this.destination.complete()),
                this.unsubscribe();
            }),
            (e.prototype.notifyNext = function (t) {
              var e = this.destination;
              (this.acc = t), (this.hasValue = !0), e.next(t);
            }),
            (e.prototype.notifyComplete = function () {
              var t = this.buffer;
              this.active--,
                0 < t.length
                  ? this._next(t.shift())
                  : 0 === this.active &&
                    this.hasCompleted &&
                    (!1 === this.hasValue && this.destination.next(this.acc),
                    this.destination.complete());
            }),
            e
          );
        })(i.b);
      function qe(t) {
        return Te(
          "function" == typeof t
            ? function (e, n) {
                return t(e, n) < 0 ? e : n;
              }
            : function (t, e) {
                return t < e ? t : e;
              }
        );
      }
      var Ue = n(1254);
      function Ve(t, e) {
        return function (n) {
          var r =
            "function" == typeof t
              ? t
              : function () {
                  return t;
                };
          if ("function" == typeof e) return n.lift(new He(r, e));
          var i = Object.create(n, Ue.b);
          return (i.source = n), (i.subjectFactory = r), i;
        };
      }
      var He = (function () {
          function t(t, e) {
            (this.subjectFactory = t), (this.selector = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              var n = this.selector,
                r = this.subjectFactory();
              return (t = n(r).subscribe(t)).add(e.subscribe(r)), t;
            }),
            t
          );
        })(),
        Ye = n(1256);
      function Ge() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return (
          1 === t.length && Object(W.a)(t[0]) && (t = t[0]),
          function (e) {
            return e.lift(new Je(t));
          }
        );
      }
      var Je = (function () {
          function t(t) {
            this.nextSources = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Ze(t, this.nextSources));
            }),
            t
          );
        })(),
        Ze = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.destination = e), (r.nextSources = n), r;
          }
          return (
            r.__extends(e, t),
            (e.prototype.notifyError = function () {
              this.subscribeToNextSource();
            }),
            (e.prototype.notifyComplete = function () {
              this.subscribeToNextSource();
            }),
            (e.prototype._error = function (t) {
              this.subscribeToNextSource(), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.subscribeToNextSource(), this.unsubscribe();
            }),
            (e.prototype.subscribeToNextSource = function () {
              var t,
                e,
                n = this.nextSources.shift();
              n
                ? ((t = new i.a(this)),
                  (e = this.destination).add(t),
                  (n = Object(i.c)(n, t)) !== t && e.add(n))
                : this.destination.complete();
            }),
            e
          );
        })(i.b);
      function Qe() {
        return function (t) {
          return t.lift(new Ke());
        };
      }
      var Ke = (function () {
          function t() {}
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new $e(t));
            }),
            t
          );
        })(),
        $e = (function (t) {
          function e(e) {
            return ((e = t.call(this, e) || this).hasPrev = !1), e;
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              var e;
              this.hasPrev ? (e = [this.prev, t]) : (this.hasPrev = !0),
                (this.prev = t),
                e && this.destination.next(e);
            }),
            e
          );
        })(p.a),
        Xe = n(1373);
      function tn(t, e) {
        return function (n) {
          return [Object(Ot.a)(t, e)(n), Object(Ot.a)(Object(Xe.a)(t, e))(n)];
        };
      }
      function en() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = t.length;
        if (0 === n) throw new Error("list of properties cannot be empty.");
        return function (e) {
          return Object(Qt.a)(
            ((r = t),
            (i = n),
            function (t) {
              for (var e = t, n = 0; n < i; n++) {
                var o = null != e ? e[r[n]] : void 0;
                if (void 0 === o) return;
                e = o;
              }
              return e;
            })
          )(e);
          var r, i;
        };
      }
      var nn = n(1112);
      function rn(t) {
        return t
          ? Ve(function () {
              return new nn.a();
            }, t)
          : Ve(new nn.a());
      }
      var on = n(1255);
      function sn(t) {
        return function (e) {
          return Ve(new on.a(t))(e);
        };
      }
      var un = n(1171);
      function an() {
        return function (t) {
          return Ve(new un.a())(t);
        };
      }
      var cn = n(1194);
      function ln(t, e, n, r) {
        var i = "function" == typeof n ? n : void 0,
          o = new cn.a(t, e, (r = n && "function" != typeof n ? n : r));
        return function (t) {
          return Ve(function () {
            return o;
          }, i)(t);
        };
      }
      var hn = n(1262);
      function fn() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function (e) {
          return (
            1 === t.length && Object(W.a)(t[0]) && (t = t[0]),
            e.lift.call(hn.a.apply(void 0, [e].concat(t)))
          );
        };
      }
      function dn(t) {
        return (
          void 0 === t && (t = -1),
          function (e) {
            return 0 === t
              ? Object(Dt.b)()
              : t < 0
              ? e.lift(new pn(-1, e))
              : e.lift(new pn(t - 1, e));
          }
        );
      }
      var pn = (function () {
          function t(t, e) {
            (this.count = t), (this.source = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new bn(t, this.count, this.source));
            }),
            t
          );
        })(),
        bn = (function (t) {
          function e(e, n, r) {
            return ((e = t.call(this, e) || this).count = n), (e.source = r), e;
          }
          return (
            r.__extends(e, t),
            (e.prototype.complete = function () {
              if (!this.isStopped) {
                var e = this.source,
                  n = this.count;
                if (0 === n) return t.prototype.complete.call(this);
                -1 < n && (this.count = n - 1),
                  e.subscribe(this._unsubscribeAndRecycle());
              }
            }),
            e
          );
        })(p.a);
      function vn(t) {
        return function (e) {
          return e.lift(new gn(t));
        };
      }
      var gn = (function () {
          function t(t) {
            this.notifier = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new yn(t, this.notifier, e));
            }),
            t
          );
        })(),
        yn = (function (t) {
          function e(e, n, r) {
            return (
              ((e = t.call(this, e) || this).notifier = n),
              (e.source = r),
              (e.sourceIsBeingSubscribedTo = !0),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype.notifyNext = function () {
              (this.sourceIsBeingSubscribedTo = !0),
                this.source.subscribe(this);
            }),
            (e.prototype.notifyComplete = function () {
              if (!1 === this.sourceIsBeingSubscribedTo)
                return t.prototype.complete.call(this);
            }),
            (e.prototype.complete = function () {
              if (((this.sourceIsBeingSubscribedTo = !1), !this.isStopped)) {
                if (
                  (this.retries || this.subscribeToRetries(),
                  !this.retriesSubscription || this.retriesSubscription.closed)
                )
                  return t.prototype.complete.call(this);
                this._unsubscribeAndRecycle(), this.notifications.next(void 0);
              }
            }),
            (e.prototype._unsubscribe = function () {
              var t = this.notifications,
                e = this.retriesSubscription;
              t && (t.unsubscribe(), (this.notifications = void 0)),
                e && (e.unsubscribe(), (this.retriesSubscription = void 0)),
                (this.retries = void 0);
            }),
            (e.prototype._unsubscribeAndRecycle = function () {
              var e = this._unsubscribe;
              return (
                (this._unsubscribe = null),
                t.prototype._unsubscribeAndRecycle.call(this),
                (this._unsubscribe = e),
                this
              );
            }),
            (e.prototype.subscribeToRetries = function () {
              this.notifications = new nn.a();
              try {
                var e = (0, this.notifier)(this.notifications);
              } catch (e) {
                return t.prototype.complete.call(this);
              }
              (this.retries = e),
                (this.retriesSubscription = Object(i.c)(e, new i.a(this)));
            }),
            e
          );
        })(i.b);
      function mn(t) {
        return (
          void 0 === t && (t = -1),
          function (e) {
            return e.lift(new wn(t, e));
          }
        );
      }
      var wn = (function () {
          function t(t, e) {
            (this.count = t), (this.source = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new _n(t, this.count, this.source));
            }),
            t
          );
        })(),
        _n = (function (t) {
          function e(e, n, r) {
            return ((e = t.call(this, e) || this).count = n), (e.source = r), e;
          }
          return (
            r.__extends(e, t),
            (e.prototype.error = function (e) {
              if (!this.isStopped) {
                var n = this.source,
                  r = this.count;
                if (0 === r) return t.prototype.error.call(this, e);
                -1 < r && (this.count = r - 1),
                  n.subscribe(this._unsubscribeAndRecycle());
              }
            }),
            e
          );
        })(p.a);
      function xn(t) {
        return function (e) {
          return e.lift(new kn(t, e));
        };
      }
      var kn = (function () {
          function t(t, e) {
            (this.notifier = t), (this.source = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Mn(t, this.notifier, this.source));
            }),
            t
          );
        })(),
        Mn = (function (t) {
          function e(e, n, r) {
            return (
              ((e = t.call(this, e) || this).notifier = n), (e.source = r), e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype.error = function (e) {
              if (!this.isStopped) {
                var n = this.errors,
                  r = this.retries,
                  o = this.retriesSubscription;
                if (r)
                  (this.errors = void 0), (this.retriesSubscription = void 0);
                else {
                  n = new nn.a();
                  try {
                    r = (0, this.notifier)(n);
                  } catch (e) {
                    return t.prototype.error.call(this, e);
                  }
                  o = Object(i.c)(r, new i.a(this));
                }
                this._unsubscribeAndRecycle(),
                  (this.errors = n),
                  (this.retries = r),
                  (this.retriesSubscription = o),
                  n.next(e);
              }
            }),
            (e.prototype._unsubscribe = function () {
              var t = this.errors,
                e = this.retriesSubscription;
              t && (t.unsubscribe(), (this.errors = void 0)),
                e && (e.unsubscribe(), (this.retriesSubscription = void 0)),
                (this.retries = void 0);
            }),
            (e.prototype.notifyNext = function () {
              var t = this._unsubscribe;
              (this._unsubscribe = null),
                this._unsubscribeAndRecycle(),
                (this._unsubscribe = t),
                this.source.subscribe(this);
            }),
            e
          );
        })(i.b),
        Sn = n(1192);
      function En(t) {
        return function (e) {
          return e.lift(new jn(t));
        };
      }
      var jn = (function () {
          function t(t) {
            this.notifier = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return (
                (t = new Cn(t)),
                (e = e.subscribe(t)).add(
                  Object(i.c)(this.notifier, new i.a(t))
                ),
                e
              );
            }),
            t
          );
        })(),
        Cn = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.hasValue = !1), e;
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              (this.value = t), (this.hasValue = !0);
            }),
            (e.prototype.notifyNext = function () {
              this.emitValue();
            }),
            (e.prototype.notifyComplete = function () {
              this.emitValue();
            }),
            (e.prototype.emitValue = function () {
              this.hasValue &&
                ((this.hasValue = !1), this.destination.next(this.value));
            }),
            e
          );
        })(i.b);
      function In(t, e) {
        return (
          void 0 === e && (e = a.a),
          function (n) {
            return n.lift(new Nn(t, e));
          }
        );
      }
      var Nn = (function () {
          function t(t, e) {
            (this.period = t), (this.scheduler = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new On(t, this.period, this.scheduler));
            }),
            t
          );
        })(),
        On = (function (t) {
          function e(e, n, r) {
            return (
              ((e = t.call(this, e) || this).period = n),
              (e.scheduler = r),
              (e.hasValue = !1),
              e.add(r.schedule(An, n, { subscriber: e, period: n })),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              (this.lastValue = t), (this.hasValue = !0);
            }),
            (e.prototype.notifyNext = function () {
              this.hasValue &&
                ((this.hasValue = !1), this.destination.next(this.lastValue));
            }),
            e
          );
        })(p.a);
      function An(t) {
        var e = t.subscriber,
          n = t.period;
        e.notifyNext(), this.schedule(t, n);
      }
      function Tn(t, e) {
        return function (n) {
          return n.lift(new Ln(t, e));
        };
      }
      var Ln = (function () {
          function t(t, e) {
            (this.compareTo = t), (this.comparator = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Rn(t, this.compareTo, this.comparator));
            }),
            t
          );
        })(),
        Rn = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (
              (i.compareTo = n),
              (i.comparator = r),
              (i._a = []),
              (i._b = []),
              (i._oneComplete = !1),
              i.destination.add(n.subscribe(new Pn(e, i))),
              i
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              this._oneComplete && 0 === this._b.length
                ? this.emit(!1)
                : (this._a.push(t), this.checkValues());
            }),
            (e.prototype._complete = function () {
              this._oneComplete
                ? this.emit(0 === this._a.length && 0 === this._b.length)
                : (this._oneComplete = !0),
                this.unsubscribe();
            }),
            (e.prototype.checkValues = function () {
              for (
                var t = this._a, e = this._b, n = this.comparator;
                0 < t.length && 0 < e.length;

              ) {
                var r = t.shift(),
                  i = e.shift(),
                  o = !1;
                try {
                  o = n ? n(r, i) : r === i;
                } catch (t) {
                  this.destination.error(t);
                }
                o || this.emit(!1);
              }
            }),
            (e.prototype.emit = function (t) {
              var e = this.destination;
              e.next(t), e.complete();
            }),
            (e.prototype.nextB = function (t) {
              this._oneComplete && 0 === this._a.length
                ? this.emit(!1)
                : (this._b.push(t), this.checkValues());
            }),
            (e.prototype.completeB = function () {
              this._oneComplete
                ? this.emit(0 === this._a.length && 0 === this._b.length)
                : (this._oneComplete = !0);
            }),
            e
          );
        })(p.a),
        Pn = (function (t) {
          function e(e, n) {
            return ((e = t.call(this, e) || this).parent = n), e;
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              this.parent.nextB(t);
            }),
            (e.prototype._error = function (t) {
              this.parent.error(t), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.parent.completeB(), this.unsubscribe();
            }),
            e
          );
        })(p.a);
      function Dn() {
        return new nn.a();
      }
      function zn() {
        return function (t) {
          return Object(Sn.a)()(Ve(Dn)(t));
        };
      }
      function Bn(t, e, n) {
        var r =
          t && "object" == typeof t
            ? t
            : { bufferSize: t, windowTime: e, refCount: !1, scheduler: n };
        return function (t) {
          return t.lift(
            ((t = (e = r).bufferSize),
            (o = void 0 === t ? Number.POSITIVE_INFINITY : t),
            (t = e.windowTime),
            (s = void 0 === t ? Number.POSITIVE_INFINITY : t),
            (u = e.refCount),
            (a = e.scheduler),
            (c = 0),
            (h = l = !1),
            function (t) {
              var e;
              c++,
                !n || l
                  ? ((l = !1),
                    (n = new cn.a(o, s, a)),
                    (e = n.subscribe(this)),
                    (i = t.subscribe({
                      next: function (t) {
                        n.next(t);
                      },
                      error: function (t) {
                        (l = !0), n.error(t);
                      },
                      complete: function () {
                        (h = !0), (i = void 0), n.complete();
                      },
                    })),
                    h && (i = void 0))
                  : (e = n.subscribe(this)),
                this.add(function () {
                  c--,
                    e.unsubscribe(),
                    (e = void 0),
                    i &&
                      !h &&
                      u &&
                      0 === c &&
                      (i.unsubscribe(), (n = i = void 0));
                });
            })
          );
          var e, n, i, o, s, u, a, c, l, h;
        };
      }
      function Fn(t) {
        return function (e) {
          return e.lift(new Wn(t, e));
        };
      }
      var Wn = (function () {
          function t(t, e) {
            (this.predicate = t), (this.source = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new qn(t, this.predicate, this.source));
            }),
            t
          );
        })(),
        qn = (function (t) {
          function e(e, n, r) {
            return (
              ((e = t.call(this, e) || this).predicate = n),
              (e.source = r),
              (e.seenValue = !1),
              (e.index = 0),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype.applySingleValue = function (t) {
              this.seenValue
                ? this.destination.error(
                    "Sequence contains more than one element"
                  )
                : ((this.seenValue = !0), (this.singleValue = t));
            }),
            (e.prototype._next = function (t) {
              var e = this.index++;
              this.predicate ? this.tryNext(t, e) : this.applySingleValue(t);
            }),
            (e.prototype.tryNext = function (t, e) {
              try {
                this.predicate(t, e, this.source) && this.applySingleValue(t);
              } catch (t) {
                this.destination.error(t);
              }
            }),
            (e.prototype._complete = function () {
              var t = this.destination;
              0 < this.index
                ? (t.next(this.seenValue ? this.singleValue : void 0),
                  t.complete())
                : t.error(new At.a());
            }),
            e
          );
        })(p.a);
      function Un(t) {
        return function (e) {
          return e.lift(new Vn(t));
        };
      }
      var Vn = (function () {
          function t(t) {
            this.total = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Hn(t, this.total));
            }),
            t
          );
        })(),
        Hn = (function (t) {
          function e(e, n) {
            return ((e = t.call(this, e) || this).total = n), (e.count = 0), e;
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              ++this.count > this.total && this.destination.next(t);
            }),
            e
          );
        })(p.a);
      function Yn(t) {
        return function (e) {
          return e.lift(new Gn(t));
        };
      }
      var Gn = (function () {
          function t(t) {
            if (((this._skipCount = t), this._skipCount < 0)) throw new Nt.a();
          }
          return (
            (t.prototype.call = function (t, e) {
              return 0 === this._skipCount
                ? e.subscribe(new p.a(t))
                : e.subscribe(new Jn(t, this._skipCount));
            }),
            t
          );
        })(),
        Jn = (function (t) {
          function e(e, n) {
            return (
              ((e = t.call(this, e) || this)._skipCount = n),
              (e._count = 0),
              (e._ring = new Array(n)),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              var e,
                n = this._skipCount,
                r = this._count++;
              r < n
                ? (this._ring[r] = t)
                : ((n = (e = this._ring)[(r %= n)]),
                  (e[r] = t),
                  this.destination.next(n));
            }),
            e
          );
        })(p.a);
      function Zn(t) {
        return function (e) {
          return e.lift(new Qn(t));
        };
      }
      var Qn = (function () {
          function t(t) {
            this.notifier = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Kn(t, this.notifier));
            }),
            t
          );
        })(),
        Kn = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (
              (r.hasValue = !1),
              (e = new i.a(r)),
              r.add(e),
              (r.innerSubscription = e),
              (n = Object(i.c)(n, e)) !== e &&
                (r.add(n), (r.innerSubscription = n)),
              r
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (e) {
              this.hasValue && t.prototype._next.call(this, e);
            }),
            (e.prototype.notifyNext = function () {
              (this.hasValue = !0),
                this.innerSubscription && this.innerSubscription.unsubscribe();
            }),
            (e.prototype.notifyComplete = function () {}),
            e
          );
        })(i.b);
      function $n(t) {
        return function (e) {
          return e.lift(new Xn(t));
        };
      }
      var Xn = (function () {
          function t(t) {
            this.predicate = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new tr(t, this.predicate));
            }),
            t
          );
        })(),
        tr = (function (t) {
          function e(e, n) {
            return (
              ((e = t.call(this, e) || this).predicate = n),
              (e.skipping = !0),
              (e.index = 0),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              var e = this.destination;
              this.skipping && this.tryCallPredicate(t),
                this.skipping || e.next(t);
            }),
            (e.prototype.tryCallPredicate = function (t) {
              try {
                var e = this.predicate(t, this.index++);
                this.skipping = Boolean(e);
              } catch (t) {
                this.destination.error(t);
              }
            }),
            e
          );
        })(p.a);
      function er() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = t[t.length - 1];
        return Object(m.a)(n)
          ? (t.pop(),
            function (e) {
              return Object(V.a)(t, e, n);
            })
          : function (e) {
              return Object(V.a)(t, e);
            };
      }
      var nr = n(1203),
        rr = n(1200),
        ir = (function (t) {
          function e(e, n, r) {
            void 0 === n && (n = 0), void 0 === r && (r = nr.a);
            var i = t.call(this) || this;
            return (
              (i.source = e),
              (i.delayTime = n),
              (i.scheduler = r),
              (!Object(rr.a)(n) || n < 0) && (i.delayTime = 0),
              (r && "function" == typeof r.schedule) || (i.scheduler = nr.a),
              i
            );
          }
          return (
            r.__extends(e, t),
            (e.create = function (t, n, r) {
              return new e(
                t,
                (n = void 0 === n ? 0 : n),
                (r = void 0 === r ? nr.a : r)
              );
            }),
            (e.dispatch = function (t) {
              var e = t.source;
              t = t.subscriber;
              return this.add(e.subscribe(t));
            }),
            (e.prototype._subscribe = function (t) {
              var n = this.delayTime,
                r = this.source;
              return this.scheduler.schedule(e.dispatch, n, {
                source: r,
                subscriber: t,
              });
            }),
            e
          );
        })(e.a);
      function or(t, e) {
        return (
          void 0 === e && (e = 0),
          function (n) {
            return n.lift(new sr(t, e));
          }
        );
      }
      var sr = (function () {
        function t(t, e) {
          (this.scheduler = t), (this.delay = e);
        }
        return (
          (t.prototype.call = function (t, e) {
            return new ir(e, this.delay, this.scheduler).subscribe(t);
          }),
          t
        );
      })();
      function ur(t, e) {
        return "function" == typeof e
          ? function (n) {
              return n.pipe(
                ur(function (n, r) {
                  return Object(q.a)(t(n, r)).pipe(
                    Object(Qt.a)(function (t, i) {
                      return e(n, t, r, i);
                    })
                  );
                })
              );
            }
          : function (e) {
              return e.lift(new ar(t));
            };
      }
      var ar = (function () {
          function t(t) {
            this.project = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new cr(t, this.project));
            }),
            t
          );
        })(),
        cr = (function (t) {
          function e(e, n) {
            return (
              ((e = t.call(this, e) || this).project = n), (e.index = 0), e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              var e,
                n = this.index++;
              try {
                e = this.project(t, n);
              } catch (t) {
                return void this.destination.error(t);
              }
              this._innerSub(e);
            }),
            (e.prototype._innerSub = function (t) {
              (e = this.innerSubscription) && e.unsubscribe();
              var e,
                n = new i.a(this);
              (e = this.destination).add(n),
                (this.innerSubscription = Object(i.c)(t, n)),
                this.innerSubscription !== n && e.add(this.innerSubscription);
            }),
            (e.prototype._complete = function () {
              var e = this.innerSubscription;
              (e && !e.closed) || t.prototype._complete.call(this),
                this.unsubscribe();
            }),
            (e.prototype._unsubscribe = function () {
              this.innerSubscription = void 0;
            }),
            (e.prototype.notifyComplete = function () {
              (this.innerSubscription = void 0),
                this.isStopped && t.prototype._complete.call(this);
            }),
            (e.prototype.notifyNext = function (t) {
              this.destination.next(t);
            }),
            e
          );
        })(i.b);
      function lr() {
        return ur(le.a);
      }
      function hr(t, e) {
        return e
          ? ur(function () {
              return t;
            }, e)
          : ur(function () {
              return t;
            });
      }
      function fr(t) {
        return function (e) {
          return e.lift(new dr(t));
        };
      }
      var dr = (function () {
          function t(t) {
            this.notifier = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              var n = new pr(t);
              return (t = Object(i.c)(this.notifier, new i.a(n))) &&
                !n.seenValue
                ? (n.add(t), e.subscribe(n))
                : n;
            }),
            t
          );
        })(),
        pr = (function (t) {
          function e(e) {
            return ((e = t.call(this, e) || this).seenValue = !1), e;
          }
          return (
            r.__extends(e, t),
            (e.prototype.notifyNext = function () {
              (this.seenValue = !0), this.complete();
            }),
            (e.prototype.notifyComplete = function () {}),
            e
          );
        })(i.b);
      function br(t, e) {
        return (
          void 0 === e && (e = !1),
          function (n) {
            return n.lift(new vr(t, e));
          }
        );
      }
      var vr = (function () {
          function t(t, e) {
            (this.predicate = t), (this.inclusive = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new gr(t, this.predicate, this.inclusive));
            }),
            t
          );
        })(),
        gr = (function (t) {
          function e(e, n, r) {
            return (
              ((e = t.call(this, e) || this).predicate = n),
              (e.inclusive = r),
              (e.index = 0),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              var e,
                n = this.destination;
              try {
                e = this.predicate(t, this.index++);
              } catch (t) {
                return void n.error(t);
              }
              this.nextOrComplete(t, e);
            }),
            (e.prototype.nextOrComplete = function (t, e) {
              var n = this.destination;
              Boolean(e)
                ? n.next(t)
                : (this.inclusive && n.next(t), n.complete());
            }),
            e
          );
        })(p.a),
        yr = n(1196),
        mr = n(1166);
      function wr(t, e, n) {
        return function (r) {
          return r.lift(new _r(t, e, n));
        };
      }
      var _r = (function () {
          function t(t, e, n) {
            (this.nextOrObserver = t), (this.error = e), (this.complete = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new xr(t, this.nextOrObserver, this.error, this.complete)
              );
            }),
            t
          );
        })(),
        xr = (function (t) {
          function e(e, n, r, i) {
            return (
              ((e = t.call(this, e) || this)._tapNext = yr.a),
              (e._tapError = yr.a),
              (e._tapComplete = yr.a),
              (e._tapError = r || yr.a),
              (e._tapComplete = i || yr.a),
              Object(mr.a)(n)
                ? ((e._context = e)._tapNext = n)
                : n &&
                  ((e._context = n),
                  (e._tapNext = n.next || yr.a),
                  (e._tapError = n.error || yr.a),
                  (e._tapComplete = n.complete || yr.a)),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              try {
                this._tapNext.call(this._context, t);
              } catch (t) {
                return void this.destination.error(t);
              }
              this.destination.next(t);
            }),
            (e.prototype._error = function (t) {
              try {
                this._tapError.call(this._context, t);
              } catch (t) {
                return void this.destination.error(t);
              }
              this.destination.error(t);
            }),
            (e.prototype._complete = function () {
              try {
                this._tapComplete.call(this._context);
              } catch (e) {
                return void this.destination.error(e);
              }
              return this.destination.complete();
            }),
            e
          );
        })(p.a),
        kr = { leading: !0, trailing: !1 };
      function Mr(t, e) {
        return (
          void 0 === e && (e = kr),
          function (n) {
            return n.lift(new Sr(t, !!e.leading, !!e.trailing));
          }
        );
      }
      var Sr = (function () {
          function t(t, e, n) {
            (this.durationSelector = t),
              (this.leading = e),
              (this.trailing = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Er(t, this.durationSelector, this.leading, this.trailing)
              );
            }),
            t
          );
        })(),
        Er = (function (t) {
          function e(e, n, r, i) {
            var o = t.call(this, e) || this;
            return (
              (o.destination = e),
              (o.durationSelector = n),
              (o._leading = r),
              (o._trailing = i),
              (o._hasValue = !1),
              o
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              (this._hasValue = !0),
                (this._sendValue = t),
                this._throttled ||
                  (this._leading ? this.send() : this.throttle(t));
            }),
            (e.prototype.send = function () {
              var t = this._hasValue,
                e = this._sendValue;
              t && (this.destination.next(e), this.throttle(e)),
                (this._hasValue = !1),
                (this._sendValue = void 0);
            }),
            (e.prototype.throttle = function (t) {
              (t = this.tryDurationSelector(t)) &&
                this.add((this._throttled = Object(i.c)(t, new i.a(this))));
            }),
            (e.prototype.tryDurationSelector = function (t) {
              try {
                return this.durationSelector(t);
              } catch (t) {
                return this.destination.error(t), null;
              }
            }),
            (e.prototype.throttlingDone = function () {
              var t = this._throttled,
                e = this._trailing;
              t && t.unsubscribe(),
                (this._throttled = void 0),
                e && this.send();
            }),
            (e.prototype.notifyNext = function () {
              this.throttlingDone();
            }),
            (e.prototype.notifyComplete = function () {
              this.throttlingDone();
            }),
            e
          );
        })(i.b);
      function jr(t, e, n) {
        return (
          void 0 === e && (e = a.a),
          void 0 === n && (n = kr),
          function (r) {
            return r.lift(new Cr(t, e, n.leading, n.trailing));
          }
        );
      }
      var Cr = (function () {
          function t(t, e, n, r) {
            (this.duration = t),
              (this.scheduler = e),
              (this.leading = n),
              (this.trailing = r);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Ir(
                  t,
                  this.duration,
                  this.scheduler,
                  this.leading,
                  this.trailing
                )
              );
            }),
            t
          );
        })(),
        Ir = (function (t) {
          function e(e, n, r, i, o) {
            return (
              ((e = t.call(this, e) || this).duration = n),
              (e.scheduler = r),
              (e.leading = i),
              (e.trailing = o),
              (e._hasTrailingValue = !1),
              (e._trailingValue = null),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              this.throttled
                ? this.trailing &&
                  ((this._trailingValue = t), (this._hasTrailingValue = !0))
                : (this.add(
                    (this.throttled = this.scheduler.schedule(
                      Nr,
                      this.duration,
                      { subscriber: this }
                    ))
                  ),
                  this.leading
                    ? this.destination.next(t)
                    : this.trailing &&
                      ((this._trailingValue = t),
                      (this._hasTrailingValue = !0)));
            }),
            (e.prototype._complete = function () {
              this._hasTrailingValue &&
                this.destination.next(this._trailingValue),
                this.destination.complete();
            }),
            (e.prototype.clearThrottle = function () {
              var t = this.throttled;
              t &&
                (this.trailing &&
                  this._hasTrailingValue &&
                  (this.destination.next(this._trailingValue),
                  (this._trailingValue = null),
                  (this._hasTrailingValue = !1)),
                t.unsubscribe(),
                this.remove(t),
                (this.throttled = null));
            }),
            e
          );
        })(p.a);
      function Nr(t) {
        t.subscriber.clearThrottle();
      }
      var Or = n(1199);
      function Ar(t) {
        return (
          void 0 === t && (t = a.a),
          function (e) {
            return Object(Or.a)(function () {
              return e.pipe(
                Ie(
                  function (e, n) {
                    return (
                      (e = e.current), { value: n, current: t.now(), last: e }
                    );
                  },
                  { current: t.now(), value: void 0, last: void 0 }
                ),
                Object(Qt.a)(function (t) {
                  var e = t.current,
                    n = t.last;
                  t = t.value;
                  return new Tr(t, e - n);
                })
              );
            });
          }
        );
      }
      var Tr = function (t, e) {
          (this.value = t), (this.interval = e);
        },
        Lr = n(1259);
      function Rr(t, e, n) {
        return (
          void 0 === n && (n = a.a),
          function (r) {
            var i = ct(t),
              o = i ? +t - n.now() : Math.abs(t);
            return r.lift(new Pr(o, i, e, n));
          }
        );
      }
      var Pr = (function () {
          function t(t, e, n, r) {
            (this.waitFor = t),
              (this.absoluteTimeout = e),
              (this.withObservable = n),
              (this.scheduler = r);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Dr(
                  t,
                  this.absoluteTimeout,
                  this.waitFor,
                  this.withObservable,
                  this.scheduler
                )
              );
            }),
            t
          );
        })(),
        Dr = (function (t) {
          function e(e, n, r, i, o) {
            return (
              ((e = t.call(this, e) || this).absoluteTimeout = n),
              (e.waitFor = r),
              (e.withObservable = i),
              (e.scheduler = o),
              e.scheduleTimeout(),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.dispatchTimeout = function (t) {
              var e = t.withObservable;
              t._unsubscribeAndRecycle(), t.add(Object(i.c)(e, new i.a(t)));
            }),
            (e.prototype.scheduleTimeout = function () {
              var t = this.action;
              t
                ? (this.action = t.schedule(this, this.waitFor))
                : this.add(
                    (this.action = this.scheduler.schedule(
                      e.dispatchTimeout,
                      this.waitFor,
                      this
                    ))
                  );
            }),
            (e.prototype._next = function (e) {
              this.absoluteTimeout || this.scheduleTimeout(),
                t.prototype._next.call(this, e);
            }),
            (e.prototype._unsubscribe = function () {
              (this.action = void 0),
                (this.scheduler = null),
                (this.withObservable = null);
            }),
            e
          );
        })(i.b),
        zr = n(1195);
      function Br(t, e) {
        return void 0 === e && (e = a.a), Rr(t, Object(zr.a)(new Lr.a()), e);
      }
      function Fr(t) {
        return (
          void 0 === t && (t = a.a),
          Object(Qt.a)(function (e) {
            return new Wr(e, t.now());
          })
        );
      }
      var Wr = function (t, e) {
        (this.value = t), (this.timestamp = e);
      };
      function qr(t, e, n) {
        return 0 === n ? [e] : (t.push(e), t);
      }
      function Ur() {
        return Te(qr, []);
      }
      function Vr(t) {
        return function (e) {
          return e.lift(new Hr(t));
        };
      }
      var Hr = (function () {
          function t(t) {
            this.windowBoundaries = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return (
                (t = new Yr(t)),
                (e = e.subscribe(t)).closed ||
                  t.add(Object(i.c)(this.windowBoundaries, new i.a(t))),
                e
              );
            }),
            t
          );
        })(),
        Yr = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (n.window = new nn.a()), e.next(n.window), n;
          }
          return (
            r.__extends(e, t),
            (e.prototype.notifyNext = function () {
              this.openWindow();
            }),
            (e.prototype.notifyError = function (t) {
              this._error(t);
            }),
            (e.prototype.notifyComplete = function () {
              this._complete();
            }),
            (e.prototype._next = function (t) {
              this.window.next(t);
            }),
            (e.prototype._error = function (t) {
              this.window.error(t), this.destination.error(t);
            }),
            (e.prototype._complete = function () {
              this.window.complete(), this.destination.complete();
            }),
            (e.prototype._unsubscribe = function () {
              this.window = null;
            }),
            (e.prototype.openWindow = function () {
              (e = this.window) && e.complete();
              var t = this.destination,
                e = (this.window = new nn.a());
              t.next(e);
            }),
            e
          );
        })(i.b);
      function Gr(t, e) {
        return (
          void 0 === e && (e = 0),
          function (n) {
            return n.lift(new Jr(t, e));
          }
        );
      }
      var Jr = (function () {
          function t(t, e) {
            (this.windowSize = t), (this.startWindowEvery = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Zr(t, this.windowSize, this.startWindowEvery)
              );
            }),
            t
          );
        })(),
        Zr = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (
              (i.destination = e),
              (i.windowSize = n),
              (i.startWindowEvery = r),
              (i.windows = [new nn.a()]),
              (i.count = 0),
              e.next(i.windows[0]),
              i
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              for (
                var e =
                    0 < this.startWindowEvery
                      ? this.startWindowEvery
                      : this.windowSize,
                  n = this.destination,
                  r = this.windowSize,
                  i = this.windows,
                  o = i.length,
                  s = 0;
                s < o && !this.closed;
                s++
              )
                i[s].next(t);
              0 <= (r = this.count - r + 1) &&
                r % e == 0 &&
                !this.closed &&
                i.shift().complete(),
                ++this.count % e != 0 ||
                  this.closed ||
                  ((e = new nn.a()), i.push(e), n.next(e));
            }),
            (e.prototype._error = function (t) {
              var e = this.windows;
              if (e) for (; 0 < e.length && !this.closed; ) e.shift().error(t);
              this.destination.error(t);
            }),
            (e.prototype._complete = function () {
              var t = this.windows;
              if (t)
                for (; 0 < t.length && !this.closed; ) t.shift().complete();
              this.destination.complete();
            }),
            (e.prototype._unsubscribe = function () {
              (this.count = 0), (this.windows = null);
            }),
            e
          );
        })(p.a);
      function Qr(t) {
        var e = a.a,
          n = null,
          r = Number.POSITIVE_INFINITY;
        return (
          Object(m.a)(arguments[3]) && (e = arguments[3]),
          Object(m.a)(arguments[2])
            ? (e = arguments[2])
            : Object(rr.a)(arguments[2]) && (r = Number(arguments[2])),
          Object(m.a)(arguments[1])
            ? (e = arguments[1])
            : Object(rr.a)(arguments[1]) && (n = Number(arguments[1])),
          function (i) {
            return i.lift(new Kr(t, n, r, e));
          }
        );
      }
      var Kr = (function () {
          function t(t, e, n, r) {
            (this.windowTimeSpan = t),
              (this.windowCreationInterval = e),
              (this.maxWindowSize = n),
              (this.scheduler = r);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Xr(
                  t,
                  this.windowTimeSpan,
                  this.windowCreationInterval,
                  this.maxWindowSize,
                  this.scheduler
                )
              );
            }),
            t
          );
        })(),
        $r = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e._numberOfNextedValues = 0), e;
          }
          return (
            r.__extends(e, t),
            (e.prototype.next = function (e) {
              this._numberOfNextedValues++, t.prototype.next.call(this, e);
            }),
            Object.defineProperty(e.prototype, "numberOfNextedValues", {
              get: function () {
                return this._numberOfNextedValues;
              },
              enumerable: !0,
              configurable: !0,
            }),
            e
          );
        })(nn.a),
        Xr = (function (t) {
          function e(e, n, r, i, o) {
            var s = t.call(this, e) || this;
            return (
              (s.destination = e),
              (s.windowTimeSpan = n),
              (s.windowCreationInterval = r),
              (s.maxWindowSize = i),
              (s.scheduler = o),
              (s.windows = []),
              (e = s.openWindow()),
              null !== r && 0 <= r
                ? ((i = {
                    windowTimeSpan: n,
                    windowCreationInterval: r,
                    subscriber: s,
                    scheduler: o,
                  }),
                  s.add(
                    o.schedule(ni, n, {
                      subscriber: s,
                      window: e,
                      context: null,
                    })
                  ),
                  s.add(o.schedule(ei, r, i)))
                : s.add(
                    o.schedule(ti, n, {
                      subscriber: s,
                      window: e,
                      windowTimeSpan: n,
                    })
                  ),
              s
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              for (var e = this.windows, n = e.length, r = 0; r < n; r++) {
                var i = e[r];
                i.closed ||
                  (i.next(t),
                  i.numberOfNextedValues >= this.maxWindowSize &&
                    this.closeWindow(i));
              }
            }),
            (e.prototype._error = function (t) {
              for (var e = this.windows; 0 < e.length; ) e.shift().error(t);
              this.destination.error(t);
            }),
            (e.prototype._complete = function () {
              for (var t = this.windows; 0 < t.length; ) {
                var e = t.shift();
                e.closed || e.complete();
              }
              this.destination.complete();
            }),
            (e.prototype.openWindow = function () {
              var t = new $r();
              return this.windows.push(t), this.destination.next(t), t;
            }),
            (e.prototype.closeWindow = function (t) {
              t.complete();
              var e = this.windows;
              e.splice(e.indexOf(t), 1);
            }),
            e
          );
        })(p.a);
      function ti(t) {
        var e = t.subscriber,
          n = t.windowTimeSpan,
          r = t.window;
        r && e.closeWindow(r), (t.window = e.openWindow()), this.schedule(t, n);
      }
      function ei(t) {
        var e = t.windowTimeSpan,
          n = t.subscriber,
          r = t.scheduler,
          i = t.windowCreationInterval,
          o = n.openWindow(),
          s = { action: this, subscription: null };
        (s.subscription = r.schedule(ni, e, {
          subscriber: n,
          window: o,
          context: s,
        })),
          this.add(s.subscription),
          this.schedule(t, i);
      }
      function ni(t) {
        var e = t.subscriber,
          n = t.window;
        (t = t.context) &&
          t.action &&
          t.subscription &&
          t.action.remove(t.subscription),
          e.closeWindow(n);
      }
      function ri(t, e) {
        return function (n) {
          return n.lift(new ii(t, e));
        };
      }
      var ii = (function () {
          function t(t, e) {
            (this.openings = t), (this.closingSelector = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new oi(t, this.openings, this.closingSelector)
              );
            }),
            t
          );
        })(),
        oi = (function (t) {
          function e(e, n, r) {
            return (
              ((e = t.call(this, e) || this).openings = n),
              (e.closingSelector = r),
              (e.contexts = []),
              e.add((e.openSubscription = Object(C.a)(e, n, n))),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              var e = this.contexts;
              if (e)
                for (var n = e.length, r = 0; r < n; r++) e[r].window.next(t);
            }),
            (e.prototype._error = function (e) {
              var n = this.contexts;
              if (((this.contexts = null), n))
                for (var r = n.length, i = -1; ++i < r; ) {
                  var o = n[i];
                  o.window.error(e), o.subscription.unsubscribe();
                }
              t.prototype._error.call(this, e);
            }),
            (e.prototype._complete = function () {
              var e = this.contexts;
              if (((this.contexts = null), e))
                for (var n = e.length, r = -1; ++r < n; ) {
                  var i = e[r];
                  i.window.complete(), i.subscription.unsubscribe();
                }
              t.prototype._complete.call(this);
            }),
            (e.prototype._unsubscribe = function () {
              var t = this.contexts;
              if (((this.contexts = null), t))
                for (var e = t.length, n = -1; ++n < e; ) {
                  var r = t[n];
                  r.window.unsubscribe(), r.subscription.unsubscribe();
                }
            }),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              if (t === this.openings) {
                var o = void 0;
                try {
                  o = (0, this.closingSelector)(e);
                } catch (t) {
                  return this.error(t);
                }
                var s = new nn.a(),
                  u = new j.a();
                e = { window: s, subscription: u };
                this.contexts.push(e),
                  (o = Object(C.a)(this, o, e)).closed
                    ? this.closeWindow(this.contexts.length - 1)
                    : ((o.context = e), u.add(o)),
                  this.destination.next(s);
              } else this.closeWindow(this.contexts.indexOf(t));
            }),
            (e.prototype.notifyError = function (t) {
              this.error(t);
            }),
            (e.prototype.notifyComplete = function (t) {
              t !== this.openSubscription &&
                this.closeWindow(this.contexts.indexOf(t.context));
            }),
            (e.prototype.closeWindow = function (t) {
              var e, n, r;
              -1 !== t &&
                ((n = (r = (e = this.contexts)[t]).window),
                (r = r.subscription),
                e.splice(t, 1),
                n.complete(),
                r.unsubscribe());
            }),
            e
          );
        })(I.a);
      function si(t) {
        return function (e) {
          return e.lift(new ui(t));
        };
      }
      var ui = (function () {
          function t(t) {
            this.closingSelector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new ai(t, this.closingSelector));
            }),
            t
          );
        })(),
        ai = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (
              (r.destination = e), (r.closingSelector = n), r.openWindow(), r
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              this.openWindow(i);
            }),
            (e.prototype.notifyError = function (t) {
              this._error(t);
            }),
            (e.prototype.notifyComplete = function (t) {
              this.openWindow(t);
            }),
            (e.prototype._next = function (t) {
              this.window.next(t);
            }),
            (e.prototype._error = function (t) {
              this.window.error(t),
                this.destination.error(t),
                this.unsubscribeClosingNotification();
            }),
            (e.prototype._complete = function () {
              this.window.complete(),
                this.destination.complete(),
                this.unsubscribeClosingNotification();
            }),
            (e.prototype.unsubscribeClosingNotification = function () {
              this.closingNotification &&
                this.closingNotification.unsubscribe();
            }),
            (e.prototype.openWindow = function (t) {
              (t = void 0 === t ? null : t) &&
                (this.remove(t), t.unsubscribe()),
                (t = this.window) && t.complete(),
                (t = this.window = new nn.a()),
                this.destination.next(t);
              try {
                var e = (0, this.closingSelector)();
              } catch (t) {
                return this.destination.error(t), void this.window.error(t);
              }
              this.add((this.closingNotification = Object(C.a)(this, e)));
            }),
            e
          );
        })(I.a);
      function ci() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function (e) {
          var n;
          return (
            "function" == typeof t[t.length - 1] && (n = t.pop()),
            e.lift(new li(t, n))
          );
        };
      }
      var li = (function () {
          function t(t, e) {
            (this.observables = t), (this.project = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new hi(t, this.observables, this.project));
            }),
            t
          );
        })(),
        hi = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            (i.observables = n), (i.project = r), (i.toRespond = []);
            var o = n.length;
            i.values = new Array(o);
            for (var s = 0; s < o; s++) i.toRespond.push(s);
            for (s = 0; s < o; s++) {
              var u = n[s];
              i.add(Object(C.a)(i, u, void 0, s));
            }
            return i;
          }
          return (
            r.__extends(e, t),
            (e.prototype.notifyNext = function (t, e, n) {
              (this.values[n] = e),
                0 < (e = this.toRespond).length &&
                  -1 !== (n = e.indexOf(n)) &&
                  e.splice(n, 1);
            }),
            (e.prototype.notifyComplete = function () {}),
            (e.prototype._next = function (t) {
              0 === this.toRespond.length &&
                ((t = [t].concat(this.values)),
                this.project ? this._tryProject(t) : this.destination.next(t));
            }),
            (e.prototype._tryProject = function (t) {
              var e;
              try {
                e = this.project.apply(this, t);
              } catch (t) {
                return void this.destination.error(t);
              }
              this.destination.next(e);
            }),
            e
          );
        })(I.a),
        fi = n(1201);
      function di() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function (e) {
          return e.lift.call(fi.b.apply(void 0, [e].concat(t)));
        };
      }
      function pi(t) {
        return function (e) {
          return e.lift(new fi.a(t));
        };
      }
    },
    1175: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "Observable", function () {
          return r.a;
        }),
        n.d(e, "ConnectableObservable", function () {
          return i.a;
        }),
        n.d(e, "GroupedObservable", function () {
          return o.a;
        }),
        n.d(e, "observable", function () {
          return s.a;
        }),
        n.d(e, "Subject", function () {
          return u.a;
        }),
        n.d(e, "BehaviorSubject", function () {
          return a.a;
        }),
        n.d(e, "ReplaySubject", function () {
          return c.a;
        }),
        n.d(e, "AsyncSubject", function () {
          return l.a;
        }),
        n.d(e, "asap", function () {
          return h.a;
        }),
        n.d(e, "asapScheduler", function () {
          return h.b;
        }),
        n.d(e, "async", function () {
          return f.a;
        }),
        n.d(e, "asyncScheduler", function () {
          return f.b;
        }),
        n.d(e, "queue", function () {
          return d.a;
        }),
        n.d(e, "queueScheduler", function () {
          return d.b;
        }),
        n.d(e, "animationFrame", function () {
          return y;
        }),
        n.d(e, "animationFrameScheduler", function () {
          return g;
        }),
        n.d(e, "VirtualTimeScheduler", function () {
          return m;
        }),
        n.d(e, "VirtualAction", function () {
          return w;
        }),
        n.d(e, "Scheduler", function () {
          return _.a;
        }),
        n.d(e, "Subscription", function () {
          return x.a;
        }),
        n.d(e, "Subscriber", function () {
          return k.a;
        }),
        n.d(e, "Notification", function () {
          return M.a;
        }),
        n.d(e, "NotificationKind", function () {
          return M.b;
        }),
        n.d(e, "pipe", function () {
          return S.a;
        }),
        n.d(e, "noop", function () {
          return E.a;
        }),
        n.d(e, "identity", function () {
          return j.a;
        }),
        n.d(e, "isObservable", function () {
          return C;
        }),
        n.d(e, "ArgumentOutOfRangeError", function () {
          return I.a;
        }),
        n.d(e, "EmptyError", function () {
          return N.a;
        }),
        n.d(e, "ObjectUnsubscribedError", function () {
          return O.a;
        }),
        n.d(e, "UnsubscriptionError", function () {
          return A.a;
        }),
        n.d(e, "TimeoutError", function () {
          return T.a;
        }),
        n.d(e, "bindCallback", function () {
          return z;
        }),
        n.d(e, "bindNodeCallback", function () {
          return W;
        }),
        n.d(e, "combineLatest", function () {
          return H.b;
        }),
        n.d(e, "concat", function () {
          return Y.a;
        }),
        n.d(e, "defer", function () {
          return G.a;
        }),
        n.d(e, "empty", function () {
          return J.b;
        }),
        n.d(e, "forkJoin", function () {
          return K;
        }),
        n.d(e, "from", function () {
          return Q.a;
        }),
        n.d(e, "fromEvent", function () {
          return tt;
        }),
        n.d(e, "fromEventPattern", function () {
          return et;
        }),
        n.d(e, "generate", function () {
          return nt;
        }),
        n.d(e, "iif", function () {
          return it;
        }),
        n.d(e, "interval", function () {
          return st;
        }),
        n.d(e, "merge", function () {
          return at.a;
        }),
        n.d(e, "never", function () {
          return lt;
        }),
        n.d(e, "of", function () {
          return ht.a;
        }),
        n.d(e, "onErrorResumeNext", function () {
          return ft;
        }),
        n.d(e, "pairs", function () {
          return dt;
        }),
        n.d(e, "partition", function () {
          return yt;
        }),
        n.d(e, "race", function () {
          return mt.a;
        }),
        n.d(e, "range", function () {
          return wt;
        }),
        n.d(e, "throwError", function () {
          return xt.a;
        }),
        n.d(e, "timer", function () {
          return kt.a;
        }),
        n.d(e, "using", function () {
          return Mt;
        }),
        n.d(e, "zip", function () {
          return St.b;
        }),
        n.d(e, "scheduled", function () {
          return Et.a;
        }),
        n.d(e, "EMPTY", function () {
          return J.a;
        }),
        n.d(e, "NEVER", function () {
          return ct;
        }),
        n.d(e, "config", function () {
          return jt.a;
        });
      var r = n(1106),
        i = n(1254),
        o = n(1193),
        s = n(1137),
        u = n(1112),
        a = n(1255),
        c = n(1194),
        l = n(1171),
        h = n(1203),
        f = n(1113),
        d = n(1205),
        p = n(113),
        b = n(1176),
        v = (function (t) {
          function e(e, n) {
            var r = t.call(this, e, n) || this;
            return (r.scheduler = e), (r.work = n), r;
          }
          return (
            p.__extends(e, t),
            (e.prototype.requestAsyncId = function (e, n, r) {
              return null !== (r = void 0 === r ? 0 : r) && 0 < r
                ? t.prototype.requestAsyncId.call(this, e, n, r)
                : (e.actions.push(this),
                  e.scheduled ||
                    (e.scheduled = requestAnimationFrame(function () {
                      return e.flush(null);
                    })));
            }),
            (e.prototype.recycleAsyncId = function (e, n, r) {
              if (
                (null !== (r = void 0 === r ? 0 : r) && 0 < r) ||
                (null === r && 0 < this.delay)
              )
                return t.prototype.recycleAsyncId.call(this, e, n, r);
              0 === e.actions.length &&
                (cancelAnimationFrame(n), (e.scheduled = void 0));
            }),
            e
          );
        })(b.a),
        g = new ((function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            p.__extends(e, t),
            (e.prototype.flush = function (t) {
              (this.active = !0), (this.scheduled = void 0);
              var e,
                n = this.actions,
                r = -1,
                i = n.length;
              t = t || n.shift();
              do {
                if ((e = t.execute(t.state, t.delay))) break;
              } while (++r < i && (t = n.shift()));
              if (((this.active = !1), e)) {
                for (; ++r < i && (t = n.shift()); ) t.unsubscribe();
                throw e;
              }
            }),
            e
          );
        })((e = n(1170)).a))(v),
        y = g,
        m = (function (t) {
          function e(e, n) {
            void 0 === e && (e = w),
              void 0 === n && (n = Number.POSITIVE_INFINITY);
            var r =
              t.call(this, e, function () {
                return r.frame;
              }) || this;
            return (r.maxFrames = n), (r.frame = 0), (r.index = -1), r;
          }
          return (
            p.__extends(e, t),
            (e.prototype.flush = function () {
              for (
                var t, e, n = this.actions, r = this.maxFrames;
                (e = n[0]) &&
                e.delay <= r &&
                (n.shift(),
                (this.frame = e.delay),
                !(t = e.execute(e.state, e.delay)));

              );
              if (t) {
                for (; (e = n.shift()); ) e.unsubscribe();
                throw t;
              }
            }),
            (e.frameTimeFactor = 10),
            e
          );
        })(e.a),
        w = (function (t) {
          function e(e, n, r) {
            void 0 === r && (r = e.index += 1);
            var i = t.call(this, e, n) || this;
            return (
              (i.scheduler = e),
              (i.work = n),
              (i.index = r),
              (i.active = !0),
              (i.index = e.index = r),
              i
            );
          }
          return (
            p.__extends(e, t),
            (e.prototype.schedule = function (n, r) {
              if ((void 0 === r && (r = 0), !this.id))
                return t.prototype.schedule.call(this, n, r);
              this.active = !1;
              var i = new e(this.scheduler, this.work);
              return this.add(i), i.schedule(n, r);
            }),
            (e.prototype.requestAsyncId = function (t, n, r) {
              return (
                (this.delay = t.frame + (r = void 0 === r ? 0 : r)),
                (t = t.actions).push(this),
                t.sort(e.sortActions),
                !0
              );
            }),
            (e.prototype.recycleAsyncId = function (t, e, n) {
              void 0 === n && (n = 0);
            }),
            (e.prototype._execute = function (e, n) {
              if (!0 === this.active)
                return t.prototype._execute.call(this, e, n);
            }),
            (e.sortActions = function (t, e) {
              return t.delay === e.delay
                ? t.index === e.index
                  ? 0
                  : t.index > e.index
                  ? 1
                  : -1
                : t.delay > e.delay
                ? 1
                : -1;
            }),
            e
          );
        })(b.a),
        _ = n(1258),
        x = n(1111),
        k = n(1104),
        M = n(1149),
        S = n(1191),
        E = n(1196),
        j = n(1125);
      function C(t) {
        return (
          !!t &&
          (t instanceof r.a ||
            ("function" == typeof t.lift && "function" == typeof t.subscribe))
        );
      }
      var I = n(1150),
        N = n(1151),
        O = n(1167),
        A = n(1251),
        T = n(1259),
        L = n(1115),
        R = n(1253),
        P = n(1114),
        D = n(1119);
      function z(t, e, n) {
        if (e) {
          if (!Object(D.a)(e))
            return function () {
              for (var r = [], i = 0; i < arguments.length; i++)
                r[i] = arguments[i];
              return z(t, n)
                .apply(void 0, r)
                .pipe(
                  Object(L.a)(function (t) {
                    return Object(P.a)(t) ? e.apply(void 0, t) : e(t);
                  })
                );
            };
          n = e;
        }
        return function () {
          for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
          var o,
            s = this,
            u = { context: s, subject: o, callbackFunc: t, scheduler: n };
          return new r.a(function (r) {
            if (n)
              return n.schedule(B, 0, { args: e, subscriber: r, params: u });
            if (!o) {
              o = new l.a();
              try {
                t.apply(
                  s,
                  e.concat([
                    function () {
                      for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                      o.next(t.length <= 1 ? t[0] : t), o.complete();
                    },
                  ])
                );
              } catch (r) {
                Object(R.a)(o) && o.error(r);
              }
            }
            return o.subscribe(r);
          });
        };
      }
      function B(t) {
        var e = this,
          n = t.args,
          r = t.subscriber,
          i = t.params,
          o = i.callbackFunc,
          s = ((t = i.context), i.scheduler);
        if (!(u = i.subject)) {
          var u = (i.subject = new l.a());
          try {
            o.apply(
              t,
              n.concat([
                function () {
                  for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  var r = t.length <= 1 ? t[0] : t;
                  e.add(s.schedule(F, 0, { value: r, subject: u }));
                },
              ])
            );
          } catch (t) {
            u.error(t);
          }
        }
        this.add(u.subscribe(r));
      }
      function F(t) {
        var e = t.value;
        (t = t.subject).next(e), t.complete();
      }
      function W(t, e, n) {
        if (e) {
          if (!Object(D.a)(e))
            return function () {
              for (var r = [], i = 0; i < arguments.length; i++)
                r[i] = arguments[i];
              return W(t, n)
                .apply(void 0, r)
                .pipe(
                  Object(L.a)(function (t) {
                    return Object(P.a)(t) ? e.apply(void 0, t) : e(t);
                  })
                );
            };
          n = e;
        }
        return function () {
          for (var e = [], i = 0; i < arguments.length; i++)
            e[i] = arguments[i];
          var o = {
            subject: void 0,
            args: e,
            callbackFunc: t,
            scheduler: n,
            context: this,
          };
          return new r.a(function (r) {
            var i = o.context,
              s = o.subject;
            if (n)
              return n.schedule(q, 0, { params: o, subscriber: r, context: i });
            if (!s) {
              s = o.subject = new l.a();
              try {
                t.apply(
                  i,
                  e.concat([
                    function () {
                      for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                      var n = t.shift();
                      n
                        ? s.error(n)
                        : (s.next(t.length <= 1 ? t[0] : t), s.complete());
                    },
                  ])
                );
              } catch (r) {
                Object(R.a)(s) && s.error(r);
              }
            }
            return s.subscribe(r);
          });
        };
      }
      function q(t) {
        var e = this,
          n = t.params,
          r = t.subscriber,
          i = t.context,
          o = n.callbackFunc,
          s = ((t = n.args), n.scheduler);
        if (!(u = n.subject)) {
          var u = (n.subject = new l.a());
          try {
            o.apply(
              i,
              t.concat([
                function () {
                  for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  var r = t.shift();
                  r
                    ? e.add(s.schedule(V, 0, { err: r, subject: u }))
                    : ((r = t.length <= 1 ? t[0] : t),
                      e.add(s.schedule(U, 0, { value: r, subject: u })));
                },
              ])
            );
          } catch (t) {
            this.add(s.schedule(V, 0, { err: t, subject: u }));
          }
        }
        this.add(u.subscribe(r));
      }
      function U(t) {
        var e = t.value;
        (t = t.subject).next(e), t.complete();
      }
      function V(t) {
        var e = t.err;
        t.subject.error(e);
      }
      var H = n(1197),
        Y = n(1173),
        G = n(1199),
        J = n(1117),
        Z = n(1252),
        Q = n(1118);
      function K() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        if (1 === t.length) {
          var n = t[0];
          if (Object(P.a)(n)) return $(n, null);
          if (Object(Z.a)(n) && Object.getPrototypeOf(n) === Object.prototype) {
            var r = Object.keys(n);
            return $(
              r.map(function (t) {
                return n[t];
              }),
              r
            );
          }
        }
        if ("function" != typeof t[t.length - 1]) return $(t, null);
        var i = t.pop();
        return $(
          (t = 1 === t.length && Object(P.a)(t[0]) ? t[0] : t),
          null
        ).pipe(
          Object(L.a)(function (t) {
            return i.apply(void 0, t);
          })
        );
      }
      function $(t, e) {
        return new r.a(function (n) {
          var r = t.length;
          if (0 !== r)
            for (var i = new Array(r), o = 0, s = 0, u = 0; u < r; u++)
              !(function (u) {
                var a = Object(Q.a)(t[u]),
                  c = !1;
                n.add(
                  a.subscribe({
                    next: function (t) {
                      c || ((c = !0), s++), (i[u] = t);
                    },
                    error: function (t) {
                      return n.error(t);
                    },
                    complete: function () {
                      (++o !== r && c) ||
                        (s === r &&
                          n.next(
                            e
                              ? e.reduce(function (t, e, n) {
                                  return (t[e] = i[n]), t;
                                }, {})
                              : i
                          ),
                        n.complete());
                    },
                  })
                );
              })(u);
          else n.complete();
        });
      }
      var X = n(1166);
      function tt(t, e, n, i) {
        return (
          Object(X.a)(n) && ((i = n), (n = void 0)),
          i
            ? tt(t, e, n).pipe(
                Object(L.a)(function (t) {
                  return Object(P.a)(t) ? i.apply(void 0, t) : i(t);
                })
              )
            : new r.a(function (r) {
                !(function t(e, n, r, i, o) {
                  var s;
                  if (
                    (function (t) {
                      return (
                        t &&
                        "function" == typeof t.addEventListener &&
                        "function" == typeof t.removeEventListener
                      );
                    })(e)
                  ) {
                    var u = e;
                    e.addEventListener(n, r, o),
                      (s = function () {
                        return u.removeEventListener(n, r, o);
                      });
                  } else if (
                    (function (t) {
                      return (
                        t &&
                        "function" == typeof t.on &&
                        "function" == typeof t.off
                      );
                    })(e)
                  ) {
                    var a = e;
                    e.on(n, r),
                      (s = function () {
                        return a.off(n, r);
                      });
                  } else if (
                    (function (t) {
                      return (
                        t &&
                        "function" == typeof t.addListener &&
                        "function" == typeof t.removeListener
                      );
                    })(e)
                  ) {
                    var c = e;
                    e.addListener(n, r),
                      (s = function () {
                        return c.removeListener(n, r);
                      });
                  } else {
                    if (!e || !e.length)
                      throw new TypeError("Invalid event target");
                    for (var l = 0, h = e.length; l < h; l++)
                      t(e[l], n, r, i, o);
                  }
                  i.add(s);
                })(
                  t,
                  e,
                  function (t) {
                    1 < arguments.length
                      ? r.next(Array.prototype.slice.call(arguments))
                      : r.next(t);
                  },
                  r,
                  n
                );
              })
        );
      }
      function et(t, e, n) {
        return n
          ? et(t, e).pipe(
              Object(L.a)(function (t) {
                return Object(P.a)(t) ? n.apply(void 0, t) : n(t);
              })
            )
          : new r.a(function (n) {
              function r() {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
                return n.next(1 === t.length ? t[0] : t);
              }
              var i;
              try {
                i = t(r);
              } catch (r) {
                return void n.error(r);
              }
              if (Object(X.a)(e))
                return function () {
                  return e(r, i);
                };
            });
      }
      function nt(t, e, n, i, o) {
        var s, u;
        return (
          1 == arguments.length
            ? ((u = t.initialState),
              (e = t.condition),
              (n = t.iterate),
              (s = t.resultSelector || j.a),
              (o = t.scheduler))
            : void 0 === i || Object(D.a)(i)
            ? ((u = t), (s = j.a), (o = i))
            : ((u = t), (s = i)),
          new r.a(function (t) {
            var r = u;
            if (o)
              return o.schedule(rt, 0, {
                subscriber: t,
                iterate: n,
                condition: e,
                resultSelector: s,
                state: r,
              });
            for (;;) {
              if (e) {
                var i = void 0;
                try {
                  i = e(r);
                } catch (r) {
                  return void t.error(r);
                }
                if (!i) {
                  t.complete();
                  break;
                }
              }
              i = void 0;
              try {
                i = s(r);
              } catch (r) {
                return void t.error(r);
              }
              if ((t.next(i), t.closed)) break;
              try {
                r = n(r);
              } catch (r) {
                return void t.error(r);
              }
            }
          })
        );
      }
      function rt(t) {
        var e,
          n = t.subscriber,
          r = t.condition;
        if (!n.closed) {
          if (t.needIterate)
            try {
              t.state = t.iterate(t.state);
            } catch (t) {
              return void n.error(t);
            }
          else t.needIterate = !0;
          if (r) {
            var i = void 0;
            try {
              i = r(t.state);
            } catch (t) {
              return void n.error(t);
            }
            if (!i) return void n.complete();
            if (n.closed) return;
          }
          try {
            e = t.resultSelector(t.state);
          } catch (t) {
            return void n.error(t);
          }
          if (!n.closed && (n.next(e), !n.closed)) return this.schedule(t);
        }
      }
      function it(t, e, n) {
        return (
          void 0 === e && (e = J.a),
          void 0 === n && (n = J.a),
          Object(G.a)(function () {
            return t() ? e : n;
          })
        );
      }
      var ot = n(1200);
      function st(t, e) {
        return (
          void 0 === t && (t = 0),
          void 0 === e && (e = f.a),
          (!Object(ot.a)(t) || t < 0) && (t = 0),
          (e && "function" == typeof e.schedule) || (e = f.a),
          new r.a(function (n) {
            return (
              n.add(
                e.schedule(ut, t, { subscriber: n, counter: 0, period: t })
              ),
              n
            );
          })
        );
      }
      function ut(t) {
        var e = t.subscriber,
          n = t.counter;
        t = t.period;
        e.next(n),
          this.schedule({ subscriber: e, counter: n + 1, period: t }, t);
      }
      var at = n(1261),
        ct = new r.a(E.a);
      function lt() {
        return ct;
      }
      var ht = n(1168);
      function ft() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        if (0 === t.length) return J.a;
        var n = t[0],
          i = t.slice(1);
        return 1 === t.length && Object(P.a)(n)
          ? ft.apply(void 0, n)
          : new r.a(function (t) {
              function e() {
                return t.add(ft.apply(void 0, i).subscribe(t));
              }
              return Object(Q.a)(n).subscribe({
                next: function (e) {
                  t.next(e);
                },
                error: e,
                complete: e,
              });
            });
      }
      function dt(t, e) {
        return e
          ? new r.a(function (n) {
              var r = Object.keys(t),
                i = new x.a();
              return (
                i.add(
                  e.schedule(pt, 0, {
                    keys: r,
                    index: 0,
                    subscriber: n,
                    subscription: i,
                    obj: t,
                  })
                ),
                i
              );
            })
          : new r.a(function (e) {
              for (
                var n = Object.keys(t), r = 0;
                r < n.length && !e.closed;
                r++
              ) {
                var i = n[r];
                t.hasOwnProperty(i) && e.next([i, t[i]]);
              }
              e.complete();
            });
      }
      function pt(t) {
        var e = t.keys,
          n = t.index,
          r = t.subscriber,
          i = t.subscription,
          o = t.obj;
        r.closed ||
          (n < e.length
            ? ((t = e[n]),
              r.next([t, o[t]]),
              i.add(
                this.schedule({
                  keys: e,
                  index: n + 1,
                  subscriber: r,
                  subscription: i,
                  obj: o,
                })
              ))
            : r.complete());
      }
      var bt = n(1373),
        vt = n(1204),
        gt = n(1139);
      function yt(t, e, n) {
        return [
          Object(gt.a)(e, n)(new r.a(Object(vt.a)(t))),
          Object(gt.a)(Object(bt.a)(e, n))(new r.a(Object(vt.a)(t))),
        ];
      }
      var mt = n(1262);
      function wt(t, e, n) {
        return (
          void 0 === t && (t = 0),
          new r.a(function (r) {
            void 0 === e && ((e = t), (t = 0));
            var i = 0,
              o = t;
            if (n)
              return n.schedule(_t, 0, {
                index: i,
                count: e,
                start: t,
                subscriber: r,
              });
            for (;;) {
              if (i++ >= e) {
                r.complete();
                break;
              }
              if ((r.next(o++), r.closed)) break;
            }
          })
        );
      }
      function _t(t) {
        var e = t.start,
          n = t.index,
          r = t.count,
          i = t.subscriber;
        r <= n
          ? i.complete()
          : (i.next(e),
            i.closed ||
              ((t.index = n + 1), (t.start = e + 1), this.schedule(t)));
      }
      var xt = n(1195),
        kt = n(1263);
      function Mt(t, e) {
        return new r.a(function (n) {
          var r, i;
          try {
            r = t();
          } catch (r) {
            return void n.error(r);
          }
          try {
            i = e(r);
          } catch (r) {
            return void n.error(r);
          }
          var o = (i ? Object(Q.a)(i) : J.a).subscribe(n);
          return function () {
            o.unsubscribe(), r && r.unsubscribe();
          };
        });
      }
      var St = n(1201),
        Et = n(1266),
        jt = n(1165);
    },
    1176: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = n(113),
        i = (function (t) {
          function e(e, n) {
            var r = t.call(this, e, n) || this;
            return (r.scheduler = e), (r.work = n), (r.pending = !1), r;
          }
          return (
            r.__extends(e, t),
            (e.prototype.schedule = function (t, e) {
              if ((void 0 === e && (e = 0), this.closed)) return this;
              this.state = t;
              var n = this.id;
              t = this.scheduler;
              return (
                null != n && (this.id = this.recycleAsyncId(t, n, e)),
                (this.pending = !0),
                (this.delay = e),
                (this.id = this.id || this.requestAsyncId(t, this.id, e)),
                this
              );
            }),
            (e.prototype.requestAsyncId = function (t, e, n) {
              return (
                void 0 === n && (n = 0), setInterval(t.flush.bind(t, this), n)
              );
            }),
            (e.prototype.recycleAsyncId = function (t, e, n) {
              if (
                null !== (n = void 0 === n ? 0 : n) &&
                this.delay === n &&
                !1 === this.pending
              )
                return e;
              clearInterval(e);
            }),
            (e.prototype.execute = function (t, e) {
              return this.closed
                ? new Error("executing a cancelled action")
                : ((this.pending = !1),
                  (e = this._execute(t, e))
                    ? e
                    : void (
                        !1 === this.pending &&
                        null != this.id &&
                        (this.id = this.recycleAsyncId(
                          this.scheduler,
                          this.id,
                          null
                        ))
                      ));
            }),
            (e.prototype._execute = function (t, e) {
              var n = !1,
                r = void 0;
              try {
                this.work(t);
              } catch (t) {
                (n = !0), (r = (!!t && t) || new Error(t));
              }
              if (n) return this.unsubscribe(), r;
            }),
            (e.prototype._unsubscribe = function () {
              var t = this.id,
                e = this.scheduler,
                n = e.actions,
                r = n.indexOf(this);
              (this.work = null),
                (this.state = null),
                (this.pending = !1),
                (this.scheduler = null),
                -1 !== r && n.splice(r, 1),
                null != t && (this.id = this.recycleAsyncId(e, t, null)),
                (this.delay = null);
            }),
            e
          );
        })(
          (function (t) {
            function e(e, n) {
              return t.call(this) || this;
            }
            return (
              r.__extends(e, t),
              (e.prototype.schedule = function (t, e) {
                return void 0 === e && (e = 0), this;
              }),
              e
            );
          })(n(1111).a)
        );
    },
    1190: function (t, e, n) {
      (function (t) {
        !(function (t, e) {
          "use strict";
          function r(t, e) {
            if (!t) throw new Error(e || "Assertion failed");
          }
          function i(t, e) {
            function n() {}
            (t.super_ = e),
              (n.prototype = e.prototype),
              (t.prototype = new n()),
              (t.prototype.constructor = t);
          }
          function o(t, e, n) {
            if (o.isBN(t)) return t;
            (this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null) !== t &&
                (("le" !== e && "be" !== e) || ((n = e), (e = 10)),
                this._init(t || 0, e || 10, n || "be"));
          }
          var s;
          "object" == typeof t ? (t.exports = o) : (e.BN = o),
            ((o.BN = o).wordSize = 26);
          try {
            s = (
              "undefined" != typeof window && void 0 !== window.Buffer
                ? window
                : n(1631)
            ).Buffer;
          } catch (t) {}
          function u(t, e) {
            return 48 <= (e = t.charCodeAt(e)) && e <= 57
              ? e - 48
              : 65 <= e && e <= 70
              ? e - 55
              : 97 <= e && e <= 102
              ? e - 87
              : void r(!1, "Invalid character in " + t);
          }
          function a(t, e, n) {
            var r = u(t, n);
            return e <= n - 1 && (r |= u(t, n - 1) << 4), r;
          }
          function c(t, e, n, i) {
            for (
              var o = 0, s = 0, u = Math.min(t.length, n), a = e;
              a < u;
              a++
            ) {
              var c = t.charCodeAt(a) - 48;
              (o *= i),
                (s = 49 <= c ? c - 49 + 10 : 17 <= c ? c - 17 + 10 : c),
                r(0 <= c && s < i, "Invalid character"),
                (o += s);
            }
            return o;
          }
          function l(t, e) {
            (t.words = e.words),
              (t.length = e.length),
              (t.negative = e.negative),
              (t.red = e.red);
          }
          if (
            ((o.isBN = function (t) {
              return (
                t instanceof o ||
                (null !== t &&
                  "object" == typeof t &&
                  t.constructor.wordSize === o.wordSize &&
                  Array.isArray(t.words))
              );
            }),
            (o.max = function (t, e) {
              return 0 < t.cmp(e) ? t : e;
            }),
            (o.min = function (t, e) {
              return t.cmp(e) < 0 ? t : e;
            }),
            (o.prototype._init = function (t, e, n) {
              if ("number" == typeof t) return this._initNumber(t, e, n);
              if ("object" == typeof t) return this._initArray(t, e, n);
              r((e = "hex" === e ? 16 : e) === (0 | e) && 2 <= e && e <= 36);
              var i = 0;
              "-" === (t = t.toString().replace(/\s+/g, ""))[0] &&
                (i++, (this.negative = 1)),
                i < t.length &&
                  (16 === e
                    ? this._parseHex(t, i, n)
                    : (this._parseBase(t, e, i),
                      "le" === n && this._initArray(this.toArray(), e, n)));
            }),
            (o.prototype._initNumber = function (t, e, n) {
              t < 0 && ((this.negative = 1), (t = -t)),
                t < 67108864
                  ? ((this.words = [67108863 & t]), (this.length = 1))
                  : t < 4503599627370496
                  ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                    (this.length = 2))
                  : (r(t < 9007199254740992),
                    (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                    (this.length = 3)),
                "le" === n && this._initArray(this.toArray(), e, n);
            }),
            (o.prototype._initArray = function (t, e, n) {
              if ((r("number" == typeof t.length), t.length <= 0))
                return (this.words = [0]), (this.length = 1), this;
              (this.length = Math.ceil(t.length / 3)),
                (this.words = new Array(this.length));
              for (var i, o, s = 0; s < this.length; s++) this.words[s] = 0;
              var u = 0;
              if ("be" === n)
                for (s = t.length - 1, i = 0; 0 <= s; s -= 3)
                  (o = t[s] | (t[s - 1] << 8) | (t[s - 2] << 16)),
                    (this.words[i] |= (o << u) & 67108863),
                    (this.words[i + 1] = (o >>> (26 - u)) & 67108863),
                    26 <= (u += 24) && ((u -= 26), i++);
              else if ("le" === n)
                for (i = s = 0; s < t.length; s += 3)
                  (o = t[s] | (t[s + 1] << 8) | (t[s + 2] << 16)),
                    (this.words[i] |= (o << u) & 67108863),
                    (this.words[i + 1] = (o >>> (26 - u)) & 67108863),
                    26 <= (u += 24) && ((u -= 26), i++);
              return this._strip();
            }),
            (o.prototype._parseHex = function (t, e, n) {
              (this.length = Math.ceil((t.length - e) / 6)),
                (this.words = new Array(this.length));
              for (var r = 0; r < this.length; r++) this.words[r] = 0;
              var i,
                o = 0,
                s = 0;
              if ("be" === n)
                for (r = t.length - 1; e <= r; r -= 2)
                  (i = a(t, e, r) << o),
                    (this.words[s] |= 67108863 & i),
                    18 <= o
                      ? ((o -= 18), (this.words[(s += 1)] |= i >>> 26))
                      : (o += 8);
              else
                for (
                  r = (t.length - e) % 2 == 0 ? e + 1 : e;
                  r < t.length;
                  r += 2
                )
                  (i = a(t, e, r) << o),
                    (this.words[s] |= 67108863 & i),
                    18 <= o
                      ? ((o -= 18), (this.words[(s += 1)] |= i >>> 26))
                      : (o += 8);
              this._strip();
            }),
            (o.prototype._parseBase = function (t, e, n) {
              this.words = [0];
              for (var r = 0, i = (this.length = 1); i <= 67108863; i *= e) r++;
              i = (i / e) | 0;
              for (
                var o = t.length - n,
                  s = o % --r,
                  u = Math.min(o, o - s) + n,
                  a = 0,
                  l = n;
                l < u;
                l += r
              )
                (a = c(t, l, l + r, e)),
                  this.imuln(i),
                  this.words[0] + a < 67108864
                    ? (this.words[0] += a)
                    : this._iaddn(a);
              if (0 != s) {
                var h = 1;
                for (a = c(t, l, t.length, e), l = 0; l < s; l++) h *= e;
                this.imuln(h),
                  this.words[0] + a < 67108864
                    ? (this.words[0] += a)
                    : this._iaddn(a);
              }
              this._strip();
            }),
            (o.prototype.copy = function (t) {
              t.words = new Array(this.length);
              for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
              (t.length = this.length),
                (t.negative = this.negative),
                (t.red = this.red);
            }),
            (o.prototype._move = function (t) {
              l(t, this);
            }),
            (o.prototype.clone = function () {
              var t = new o(null);
              return this.copy(t), t;
            }),
            (o.prototype._expand = function (t) {
              for (; this.length < t; ) this.words[this.length++] = 0;
              return this;
            }),
            (o.prototype._strip = function () {
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
            "undefined" != typeof Symbol && "function" == typeof Symbol.for)
          )
            try {
              o.prototype[Symbol.for("nodejs.util.inspect.custom")] = h;
            } catch (t) {
              o.prototype.inspect = h;
            }
          else o.prototype.inspect = h;
          function h() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          }
          var f = [
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
            d = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            p = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          function b(t, e, n) {
            n.negative = e.negative ^ t.negative;
            var r = (t.length + e.length) | 0,
              i =
                ((r = ((n.length = r) - 1) | 0),
                ((s = (0 | t.words[0]) * (0 | e.words[0])) / 67108864) | 0);
            n.words[0] = 67108863 & s;
            for (var o = 1; o < r; o++) {
              for (
                var s,
                  u = i >>> 26,
                  a = 67108863 & i,
                  c = Math.min(o, e.length - 1),
                  l = Math.max(0, o - t.length + 1);
                l <= c;
                l++
              )
                (u +=
                  ((s = (0 | t.words[(o - l) | 0]) * (0 | e.words[l]) + a) /
                    67108864) |
                  0),
                  (a = 67108863 & s);
              (n.words[o] = 0 | a), (i = 0 | u);
            }
            return 0 !== i ? (n.words[o] = 0 | i) : n.length--, n._strip();
          }
          (o.prototype.toString = function (t, e) {
            if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
              a = "";
              for (var n = 0, i = 0, o = 0; o < this.length; o++) {
                var s = this.words[o],
                  u = (16777215 & ((s << n) | i)).toString(16),
                  a =
                    0 !== (i = (s >>> (24 - n)) & 16777215) ||
                    o !== this.length - 1
                      ? f[6 - u.length] + u + a
                      : u + a;
                26 <= (n += 2) && ((n -= 26), o--);
              }
              for (0 !== i && (a = i.toString(16) + a); a.length % e != 0; )
                a = "0" + a;
              return 0 !== this.negative ? "-" + a : a;
            }
            if (t === (0 | t) && 2 <= t && t <= 36) {
              var c = d[t],
                l = p[t];
              for (a = "", (h = this.clone()).negative = 0; !h.isZero(); ) {
                var h,
                  b = h.modrn(l).toString(t);
                a = (h = h.idivn(l)).isZero() ? b + a : f[c - b.length] + b + a;
              }
              for (this.isZero() && (a = "0" + a); a.length % e != 0; )
                a = "0" + a;
              return 0 !== this.negative ? "-" + a : a;
            }
            r(!1, "Base should be between 2 and 36");
          }),
            (o.prototype.toNumber = function () {
              var t = this.words[0];
              return (
                2 === this.length
                  ? (t += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                  ? (t += 4503599627370496 + 67108864 * this.words[1])
                  : 2 < this.length &&
                    r(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -t : t
              );
            }),
            (o.prototype.toJSON = function () {
              return this.toString(16, 2);
            }),
            s &&
              (o.prototype.toBuffer = function (t, e) {
                return this.toArrayLike(s, t, e);
              }),
            (o.prototype.toArray = function (t, e) {
              return this.toArrayLike(Array, t, e);
            }),
            (o.prototype.toArrayLike = function (t, e, n) {
              this._strip();
              var i = this.byteLength();
              return (
                r(
                  i <= (n = n || Math.max(1, i)),
                  "byte array longer than desired length"
                ),
                r(0 < n, "Requested array length <= 0"),
                (n = n),
                (n = (t = t).allocUnsafe ? t.allocUnsafe(n) : new t(n)),
                this["_toArrayLike" + ("le" === e ? "LE" : "BE")](n, i),
                n
              );
            }),
            (o.prototype._toArrayLikeLE = function (t, e) {
              for (var n = 0, r = 0, i = 0, o = 0; i < this.length; i++) {
                var s = (this.words[i] << o) | r;
                (t[n++] = 255 & s),
                  n < t.length && (t[n++] = (s >> 8) & 255),
                  n < t.length && (t[n++] = (s >> 16) & 255),
                  6 === o
                    ? (n < t.length && (t[n++] = (s >> 24) & 255), (o = r = 0))
                    : ((r = s >>> 24), (o += 2));
              }
              if (n < t.length) for (t[n++] = r; n < t.length; ) t[n++] = 0;
            }),
            (o.prototype._toArrayLikeBE = function (t, e) {
              for (
                var n = t.length - 1, r = 0, i = 0, o = 0;
                i < this.length;
                i++
              ) {
                var s = (this.words[i] << o) | r;
                (t[n--] = 255 & s),
                  0 <= n && (t[n--] = (s >> 8) & 255),
                  0 <= n && (t[n--] = (s >> 16) & 255),
                  6 === o
                    ? (0 <= n && (t[n--] = (s >> 24) & 255), (o = r = 0))
                    : ((r = s >>> 24), (o += 2));
              }
              if (0 <= n) for (t[n--] = r; 0 <= n; ) t[n--] = 0;
            }),
            Math.clz32
              ? (o.prototype._countBits = function (t) {
                  return 32 - Math.clz32(t);
                })
              : (o.prototype._countBits = function (t) {
                  var e = t;
                  t = 0;
                  return (
                    4096 <= e && ((t += 13), (e >>>= 13)),
                    64 <= e && ((t += 7), (e >>>= 7)),
                    8 <= e && ((t += 4), (e >>>= 4)),
                    2 <= e && ((t += 2), (e >>>= 2)),
                    t + e
                  );
                }),
            (o.prototype._zeroBits = function (t) {
              if (0 === t) return 26;
              var e = t;
              t = 0;
              return (
                0 == (8191 & e) && ((t += 13), (e >>>= 13)),
                0 == (127 & e) && ((t += 7), (e >>>= 7)),
                0 == (15 & e) && ((t += 4), (e >>>= 4)),
                0 == (3 & e) && ((t += 2), (e >>>= 2)),
                0 == (1 & e) && t++,
                t
              );
            }),
            (o.prototype.bitLength = function () {
              var t = this.words[this.length - 1];
              t = this._countBits(t);
              return 26 * (this.length - 1) + t;
            }),
            (o.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var t = 0, e = 0; e < this.length; e++) {
                var n = this._zeroBits(this.words[e]);
                if (((t += n), 26 !== n)) break;
              }
              return t;
            }),
            (o.prototype.byteLength = function () {
              return Math.ceil(this.bitLength() / 8);
            }),
            (o.prototype.toTwos = function (t) {
              return 0 !== this.negative
                ? this.abs().inotn(t).iaddn(1)
                : this.clone();
            }),
            (o.prototype.fromTwos = function (t) {
              return this.testn(t - 1)
                ? this.notn(t).iaddn(1).ineg()
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
            (o.prototype.iuor = function (t) {
              for (; this.length < t.length; ) this.words[this.length++] = 0;
              for (var e = 0; e < t.length; e++)
                this.words[e] = this.words[e] | t.words[e];
              return this._strip();
            }),
            (o.prototype.ior = function (t) {
              return r(0 == (this.negative | t.negative)), this.iuor(t);
            }),
            (o.prototype.or = function (t) {
              return this.length > t.length
                ? this.clone().ior(t)
                : t.clone().ior(this);
            }),
            (o.prototype.uor = function (t) {
              return this.length > t.length
                ? this.clone().iuor(t)
                : t.clone().iuor(this);
            }),
            (o.prototype.iuand = function (t) {
              for (
                var e = this.length > t.length ? t : this, n = 0;
                n < e.length;
                n++
              )
                this.words[n] = this.words[n] & t.words[n];
              return (this.length = e.length), this._strip();
            }),
            (o.prototype.iand = function (t) {
              return r(0 == (this.negative | t.negative)), this.iuand(t);
            }),
            (o.prototype.and = function (t) {
              return this.length > t.length
                ? this.clone().iand(t)
                : t.clone().iand(this);
            }),
            (o.prototype.uand = function (t) {
              return this.length > t.length
                ? this.clone().iuand(t)
                : t.clone().iuand(this);
            }),
            (o.prototype.iuxor = function (t) {
              for (
                var e,
                  n =
                    this.length > t.length ? ((e = this), t) : ((e = t), this),
                  r = 0;
                r < n.length;
                r++
              )
                this.words[r] = e.words[r] ^ n.words[r];
              if (this !== e)
                for (; r < e.length; r++) this.words[r] = e.words[r];
              return (this.length = e.length), this._strip();
            }),
            (o.prototype.ixor = function (t) {
              return r(0 == (this.negative | t.negative)), this.iuxor(t);
            }),
            (o.prototype.xor = function (t) {
              return this.length > t.length
                ? this.clone().ixor(t)
                : t.clone().ixor(this);
            }),
            (o.prototype.uxor = function (t) {
              return this.length > t.length
                ? this.clone().iuxor(t)
                : t.clone().iuxor(this);
            }),
            (o.prototype.inotn = function (t) {
              r("number" == typeof t && 0 <= t);
              var e = 0 | Math.ceil(t / 26);
              t %= 26;
              this._expand(e), 0 < t && e--;
              for (var n = 0; n < e; n++)
                this.words[n] = 67108863 & ~this.words[n];
              return (
                0 < t &&
                  (this.words[n] = ~this.words[n] & (67108863 >> (26 - t))),
                this._strip()
              );
            }),
            (o.prototype.notn = function (t) {
              return this.clone().inotn(t);
            }),
            (o.prototype.setn = function (t, e) {
              r("number" == typeof t && 0 <= t);
              var n = (t / 26) | 0;
              t %= 26;
              return (
                this._expand(1 + n),
                (this.words[n] = e
                  ? this.words[n] | (1 << t)
                  : this.words[n] & ~(1 << t)),
                this._strip()
              );
            }),
            (o.prototype.iadd = function (t) {
              var e, n;
              if (0 !== this.negative && 0 === t.negative)
                return (
                  (this.negative = 0),
                  (e = this.isub(t)),
                  (this.negative ^= 1),
                  this._normSign()
                );
              if (0 === this.negative && 0 !== t.negative)
                return (
                  (t.negative = 0),
                  (e = this.isub(t)),
                  (t.negative = 1),
                  e._normSign()
                );
              for (
                var r =
                    this.length > t.length ? ((n = this), t) : ((n = t), this),
                  i = 0,
                  o = 0;
                o < r.length;
                o++
              )
                (e = (0 | n.words[o]) + (0 | r.words[o]) + i),
                  (this.words[o] = 67108863 & e),
                  (i = e >>> 26);
              for (; 0 !== i && o < n.length; o++)
                (e = (0 | n.words[o]) + i),
                  (this.words[o] = 67108863 & e),
                  (i = e >>> 26);
              if (((this.length = n.length), 0 !== i))
                (this.words[this.length] = i), this.length++;
              else if (n !== this)
                for (; o < n.length; o++) this.words[o] = n.words[o];
              return this;
            }),
            (o.prototype.add = function (t) {
              var e;
              return 0 !== t.negative && 0 === this.negative
                ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
                : 0 === t.negative && 0 !== this.negative
                ? ((this.negative = 0),
                  (e = t.sub(this)),
                  (this.negative = 1),
                  e)
                : this.length > t.length
                ? this.clone().iadd(t)
                : t.clone().iadd(this);
            }),
            (o.prototype.isub = function (t) {
              if (0 !== t.negative) {
                t.negative = 0;
                var e = this.iadd(t);
                return (t.negative = 1), e._normSign();
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(t),
                  (this.negative = 1),
                  this._normSign()
                );
              var n,
                r = this.cmp(t);
              if (0 === r)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              for (
                var i = 0 < r ? ((n = this), t) : ((n = t), this), o = 0, s = 0;
                s < i.length;
                s++
              )
                (o = (e = (0 | n.words[s]) - (0 | i.words[s]) + o) >> 26),
                  (this.words[s] = 67108863 & e);
              for (; 0 !== o && s < n.length; s++)
                (o = (e = (0 | n.words[s]) + o) >> 26),
                  (this.words[s] = 67108863 & e);
              if (0 === o && s < n.length && n !== this)
                for (; s < n.length; s++) this.words[s] = n.words[s];
              return (
                (this.length = Math.max(this.length, s)),
                n !== this && (this.negative = 1),
                this._strip()
              );
            }),
            (o.prototype.sub = function (t) {
              return this.clone().isub(t);
            });
          var v = function (t, e, n) {
            var r,
              i,
              o,
              s = t.words,
              u = e.words,
              a = n.words,
              c = 8191 & (r = 0 | s[0]),
              l = r >>> 13,
              h = 8191 & (H = 0 | s[1]),
              f = H >>> 13,
              d = 8191 & (Y = 0 | s[2]),
              p = Y >>> 13,
              b = 8191 & (i = 0 | s[3]),
              v = i >>> 13,
              g = 8191 & (G = 0 | s[4]),
              y = G >>> 13,
              m = 8191 & (J = 0 | s[5]),
              w = J >>> 13,
              _ = 8191 & (o = 0 | s[6]),
              x = o >>> 13,
              k = 8191 & (Z = 0 | s[7]),
              M = Z >>> 13,
              S = 8191 & (Q = 0 | s[8]),
              E = Q >>> 13,
              j = 8191 & (K = 0 | s[9]),
              C = K >>> 13,
              I = 8191 & ($ = 0 | u[0]),
              N = $ >>> 13,
              O = 0 | u[1],
              A = 8191 & O,
              T = O >>> 13,
              L = 0 | u[2],
              R = 8191 & L,
              P = L >>> 13,
              D = 8191 & (X = 0 | u[3]),
              z = X >>> 13,
              B = 0 | u[4],
              F = 8191 & B,
              W = B >>> 13,
              q = 0 | u[5],
              U = 8191 & q,
              V = q >>> 13,
              H = 8191 & (r = 0 | u[6]),
              Y = r >>> 13,
              G = 8191 & (i = 0 | u[7]),
              J = i >>> 13,
              Z = 8191 & (o = 0 | u[8]),
              Q = o >>> 13,
              K = 8191 & (s = 0 | u[9]),
              $ = s >>> 13;
            (n.negative = t.negative ^ e.negative), (n.length = 19);
            var X =
                (((0 + Math.imul(c, I)) | 0) +
                  ((8191 &
                    (L = ((L = Math.imul(c, N)) + Math.imul(l, I)) | 0)) <<
                    13)) |
                0,
              tt =
                ((((B = Math.imul(l, N)) + (L >>> 13)) | 0) + (X >>> 26)) | 0;
            return (
              (X &= 67108863),
              (O = Math.imul(h, I)),
              (L = ((L = Math.imul(h, N)) + Math.imul(f, I)) | 0),
              (B = Math.imul(f, N)),
              (q =
                (((tt + ((O + Math.imul(c, A)) | 0)) | 0) +
                  ((8191 &
                    (L =
                      ((L = (L + Math.imul(c, T)) | 0) + Math.imul(l, A)) |
                      0)) <<
                    13)) |
                0),
              (tt =
                ((((B = (B + Math.imul(l, T)) | 0) + (L >>> 13)) | 0) +
                  (q >>> 26)) |
                0),
              (q &= 67108863),
              (O = Math.imul(d, I)),
              (L = ((L = Math.imul(d, N)) + Math.imul(p, I)) | 0),
              (B = Math.imul(p, N)),
              (O = (O + Math.imul(h, A)) | 0),
              (L = ((L = (L + Math.imul(h, T)) | 0) + Math.imul(f, A)) | 0),
              (B = (B + Math.imul(f, T)) | 0),
              (r =
                (((tt + ((O + Math.imul(c, R)) | 0)) | 0) +
                  ((8191 &
                    (L =
                      ((L = (L + Math.imul(c, P)) | 0) + Math.imul(l, R)) |
                      0)) <<
                    13)) |
                0),
              (tt =
                ((((B = (B + Math.imul(l, P)) | 0) + (L >>> 13)) | 0) +
                  (r >>> 26)) |
                0),
              (r &= 67108863),
              (O = Math.imul(b, I)),
              (L = ((L = Math.imul(b, N)) + Math.imul(v, I)) | 0),
              (B = Math.imul(v, N)),
              (O = (O + Math.imul(d, A)) | 0),
              (L = ((L = (L + Math.imul(d, T)) | 0) + Math.imul(p, A)) | 0),
              (B = (B + Math.imul(p, T)) | 0),
              (O = (O + Math.imul(h, R)) | 0),
              (L = ((L = (L + Math.imul(h, P)) | 0) + Math.imul(f, R)) | 0),
              (B = (B + Math.imul(f, P)) | 0),
              (i =
                (((tt + ((O + Math.imul(c, D)) | 0)) | 0) +
                  ((8191 &
                    (L =
                      ((L = (L + Math.imul(c, z)) | 0) + Math.imul(l, D)) |
                      0)) <<
                    13)) |
                0),
              (tt =
                ((((B = (B + Math.imul(l, z)) | 0) + (L >>> 13)) | 0) +
                  (i >>> 26)) |
                0),
              (i &= 67108863),
              (O = Math.imul(g, I)),
              (L = ((L = Math.imul(g, N)) + Math.imul(y, I)) | 0),
              (B = Math.imul(y, N)),
              (O = (O + Math.imul(b, A)) | 0),
              (L = ((L = (L + Math.imul(b, T)) | 0) + Math.imul(v, A)) | 0),
              (B = (B + Math.imul(v, T)) | 0),
              (O = (O + Math.imul(d, R)) | 0),
              (L = ((L = (L + Math.imul(d, P)) | 0) + Math.imul(p, R)) | 0),
              (B = (B + Math.imul(p, P)) | 0),
              (O = (O + Math.imul(h, D)) | 0),
              (L = ((L = (L + Math.imul(h, z)) | 0) + Math.imul(f, D)) | 0),
              (B = (B + Math.imul(f, z)) | 0),
              (o =
                (((tt + ((O + Math.imul(c, F)) | 0)) | 0) +
                  ((8191 &
                    (L =
                      ((L = (L + Math.imul(c, W)) | 0) + Math.imul(l, F)) |
                      0)) <<
                    13)) |
                0),
              (tt =
                ((((B = (B + Math.imul(l, W)) | 0) + (L >>> 13)) | 0) +
                  (o >>> 26)) |
                0),
              (o &= 67108863),
              (O = Math.imul(m, I)),
              (L = ((L = Math.imul(m, N)) + Math.imul(w, I)) | 0),
              (B = Math.imul(w, N)),
              (O = (O + Math.imul(g, A)) | 0),
              (L = ((L = (L + Math.imul(g, T)) | 0) + Math.imul(y, A)) | 0),
              (B = (B + Math.imul(y, T)) | 0),
              (O = (O + Math.imul(b, R)) | 0),
              (L = ((L = (L + Math.imul(b, P)) | 0) + Math.imul(v, R)) | 0),
              (B = (B + Math.imul(v, P)) | 0),
              (O = (O + Math.imul(d, D)) | 0),
              (L = ((L = (L + Math.imul(d, z)) | 0) + Math.imul(p, D)) | 0),
              (B = (B + Math.imul(p, z)) | 0),
              (O = (O + Math.imul(h, F)) | 0),
              (L = ((L = (L + Math.imul(h, W)) | 0) + Math.imul(f, F)) | 0),
              (B = (B + Math.imul(f, W)) | 0),
              (u =
                (((tt + ((O + Math.imul(c, U)) | 0)) | 0) +
                  ((8191 &
                    (L =
                      ((L = (L + Math.imul(c, V)) | 0) + Math.imul(l, U)) |
                      0)) <<
                    13)) |
                0),
              (tt =
                ((((B = (B + Math.imul(l, V)) | 0) + (L >>> 13)) | 0) +
                  (u >>> 26)) |
                0),
              (u &= 67108863),
              (O = Math.imul(_, I)),
              (L = ((L = Math.imul(_, N)) + Math.imul(x, I)) | 0),
              (B = Math.imul(x, N)),
              (O = (O + Math.imul(m, A)) | 0),
              (L = ((L = (L + Math.imul(m, T)) | 0) + Math.imul(w, A)) | 0),
              (B = (B + Math.imul(w, T)) | 0),
              (O = (O + Math.imul(g, R)) | 0),
              (L = ((L = (L + Math.imul(g, P)) | 0) + Math.imul(y, R)) | 0),
              (B = (B + Math.imul(y, P)) | 0),
              (O = (O + Math.imul(b, D)) | 0),
              (L = ((L = (L + Math.imul(b, z)) | 0) + Math.imul(v, D)) | 0),
              (B = (B + Math.imul(v, z)) | 0),
              (O = (O + Math.imul(d, F)) | 0),
              (L = ((L = (L + Math.imul(d, W)) | 0) + Math.imul(p, F)) | 0),
              (B = (B + Math.imul(p, W)) | 0),
              (O = (O + Math.imul(h, U)) | 0),
              (L = ((L = (L + Math.imul(h, V)) | 0) + Math.imul(f, U)) | 0),
              (B = (B + Math.imul(f, V)) | 0),
              (s =
                (((tt + ((O + Math.imul(c, H)) | 0)) | 0) +
                  ((8191 &
                    (L =
                      ((L = (L + Math.imul(c, Y)) | 0) + Math.imul(l, H)) |
                      0)) <<
                    13)) |
                0),
              (tt =
                ((((B = (B + Math.imul(l, Y)) | 0) + (L >>> 13)) | 0) +
                  (s >>> 26)) |
                0),
              (s &= 67108863),
              (O = Math.imul(k, I)),
              (L = ((L = Math.imul(k, N)) + Math.imul(M, I)) | 0),
              (B = Math.imul(M, N)),
              (O = (O + Math.imul(_, A)) | 0),
              (L = ((L = (L + Math.imul(_, T)) | 0) + Math.imul(x, A)) | 0),
              (B = (B + Math.imul(x, T)) | 0),
              (O = (O + Math.imul(m, R)) | 0),
              (L = ((L = (L + Math.imul(m, P)) | 0) + Math.imul(w, R)) | 0),
              (B = (B + Math.imul(w, P)) | 0),
              (O = (O + Math.imul(g, D)) | 0),
              (L = ((L = (L + Math.imul(g, z)) | 0) + Math.imul(y, D)) | 0),
              (B = (B + Math.imul(y, z)) | 0),
              (O = (O + Math.imul(b, F)) | 0),
              (L = ((L = (L + Math.imul(b, W)) | 0) + Math.imul(v, F)) | 0),
              (B = (B + Math.imul(v, W)) | 0),
              (O = (O + Math.imul(d, U)) | 0),
              (L = ((L = (L + Math.imul(d, V)) | 0) + Math.imul(p, U)) | 0),
              (B = (B + Math.imul(p, V)) | 0),
              (O = (O + Math.imul(h, H)) | 0),
              (L = ((L = (L + Math.imul(h, Y)) | 0) + Math.imul(f, H)) | 0),
              (B = (B + Math.imul(f, Y)) | 0),
              (t =
                (((tt + ((O + Math.imul(c, G)) | 0)) | 0) +
                  ((8191 &
                    (L =
                      ((L = (L + Math.imul(c, J)) | 0) + Math.imul(l, G)) |
                      0)) <<
                    13)) |
                0),
              (tt =
                ((((B = (B + Math.imul(l, J)) | 0) + (L >>> 13)) | 0) +
                  (t >>> 26)) |
                0),
              (t &= 67108863),
              (O = Math.imul(S, I)),
              (L = ((L = Math.imul(S, N)) + Math.imul(E, I)) | 0),
              (B = Math.imul(E, N)),
              (O = (O + Math.imul(k, A)) | 0),
              (L = ((L = (L + Math.imul(k, T)) | 0) + Math.imul(M, A)) | 0),
              (B = (B + Math.imul(M, T)) | 0),
              (O = (O + Math.imul(_, R)) | 0),
              (L = ((L = (L + Math.imul(_, P)) | 0) + Math.imul(x, R)) | 0),
              (B = (B + Math.imul(x, P)) | 0),
              (O = (O + Math.imul(m, D)) | 0),
              (L = ((L = (L + Math.imul(m, z)) | 0) + Math.imul(w, D)) | 0),
              (B = (B + Math.imul(w, z)) | 0),
              (O = (O + Math.imul(g, F)) | 0),
              (L = ((L = (L + Math.imul(g, W)) | 0) + Math.imul(y, F)) | 0),
              (B = (B + Math.imul(y, W)) | 0),
              (O = (O + Math.imul(b, U)) | 0),
              (L = ((L = (L + Math.imul(b, V)) | 0) + Math.imul(v, U)) | 0),
              (B = (B + Math.imul(v, V)) | 0),
              (O = (O + Math.imul(d, H)) | 0),
              (L = ((L = (L + Math.imul(d, Y)) | 0) + Math.imul(p, H)) | 0),
              (B = (B + Math.imul(p, Y)) | 0),
              (O = (O + Math.imul(h, G)) | 0),
              (L = ((L = (L + Math.imul(h, J)) | 0) + Math.imul(f, G)) | 0),
              (B = (B + Math.imul(f, J)) | 0),
              (e =
                (((tt + ((O + Math.imul(c, Z)) | 0)) | 0) +
                  ((8191 &
                    (L =
                      ((L = (L + Math.imul(c, Q)) | 0) + Math.imul(l, Z)) |
                      0)) <<
                    13)) |
                0),
              (tt =
                ((((B = (B + Math.imul(l, Q)) | 0) + (L >>> 13)) | 0) +
                  (e >>> 26)) |
                0),
              (e &= 67108863),
              (O = Math.imul(j, I)),
              (L = ((L = Math.imul(j, N)) + Math.imul(C, I)) | 0),
              (B = Math.imul(C, N)),
              (O = (O + Math.imul(S, A)) | 0),
              (L = ((L = (L + Math.imul(S, T)) | 0) + Math.imul(E, A)) | 0),
              (B = (B + Math.imul(E, T)) | 0),
              (O = (O + Math.imul(k, R)) | 0),
              (L = ((L = (L + Math.imul(k, P)) | 0) + Math.imul(M, R)) | 0),
              (B = (B + Math.imul(M, P)) | 0),
              (O = (O + Math.imul(_, D)) | 0),
              (L = ((L = (L + Math.imul(_, z)) | 0) + Math.imul(x, D)) | 0),
              (B = (B + Math.imul(x, z)) | 0),
              (O = (O + Math.imul(m, F)) | 0),
              (L = ((L = (L + Math.imul(m, W)) | 0) + Math.imul(w, F)) | 0),
              (B = (B + Math.imul(w, W)) | 0),
              (O = (O + Math.imul(g, U)) | 0),
              (L = ((L = (L + Math.imul(g, V)) | 0) + Math.imul(y, U)) | 0),
              (B = (B + Math.imul(y, V)) | 0),
              (O = (O + Math.imul(b, H)) | 0),
              (L = ((L = (L + Math.imul(b, Y)) | 0) + Math.imul(v, H)) | 0),
              (B = (B + Math.imul(v, Y)) | 0),
              (O = (O + Math.imul(d, G)) | 0),
              (L = ((L = (L + Math.imul(d, J)) | 0) + Math.imul(p, G)) | 0),
              (B = (B + Math.imul(p, J)) | 0),
              (O = (O + Math.imul(h, Z)) | 0),
              (L = ((L = (L + Math.imul(h, Q)) | 0) + Math.imul(f, Z)) | 0),
              (B = (B + Math.imul(f, Q)) | 0),
              (c =
                (((tt + ((O + Math.imul(c, K)) | 0)) | 0) +
                  ((8191 &
                    (L =
                      ((L = (L + Math.imul(c, $)) | 0) + Math.imul(l, K)) |
                      0)) <<
                    13)) |
                0),
              (tt =
                ((((B = (B + Math.imul(l, $)) | 0) + (L >>> 13)) | 0) +
                  (c >>> 26)) |
                0),
              (c &= 67108863),
              (O = Math.imul(j, A)),
              (L = ((L = Math.imul(j, T)) + Math.imul(C, A)) | 0),
              (B = Math.imul(C, T)),
              (O = (O + Math.imul(S, R)) | 0),
              (L = ((L = (L + Math.imul(S, P)) | 0) + Math.imul(E, R)) | 0),
              (B = (B + Math.imul(E, P)) | 0),
              (O = (O + Math.imul(k, D)) | 0),
              (L = ((L = (L + Math.imul(k, z)) | 0) + Math.imul(M, D)) | 0),
              (B = (B + Math.imul(M, z)) | 0),
              (O = (O + Math.imul(_, F)) | 0),
              (L = ((L = (L + Math.imul(_, W)) | 0) + Math.imul(x, F)) | 0),
              (B = (B + Math.imul(x, W)) | 0),
              (O = (O + Math.imul(m, U)) | 0),
              (L = ((L = (L + Math.imul(m, V)) | 0) + Math.imul(w, U)) | 0),
              (B = (B + Math.imul(w, V)) | 0),
              (O = (O + Math.imul(g, H)) | 0),
              (L = ((L = (L + Math.imul(g, Y)) | 0) + Math.imul(y, H)) | 0),
              (B = (B + Math.imul(y, Y)) | 0),
              (O = (O + Math.imul(b, G)) | 0),
              (L = ((L = (L + Math.imul(b, J)) | 0) + Math.imul(v, G)) | 0),
              (B = (B + Math.imul(v, J)) | 0),
              (O = (O + Math.imul(d, Z)) | 0),
              (L = ((L = (L + Math.imul(d, Q)) | 0) + Math.imul(p, Z)) | 0),
              (B = (B + Math.imul(p, Q)) | 0),
              (h =
                (((tt + ((O + Math.imul(h, K)) | 0)) | 0) +
                  ((8191 &
                    (L =
                      ((L = (L + Math.imul(h, $)) | 0) + Math.imul(f, K)) |
                      0)) <<
                    13)) |
                0),
              (tt =
                ((((B = (B + Math.imul(f, $)) | 0) + (L >>> 13)) | 0) +
                  (h >>> 26)) |
                0),
              (h &= 67108863),
              (O = Math.imul(j, R)),
              (L = ((L = Math.imul(j, P)) + Math.imul(C, R)) | 0),
              (B = Math.imul(C, P)),
              (O = (O + Math.imul(S, D)) | 0),
              (L = ((L = (L + Math.imul(S, z)) | 0) + Math.imul(E, D)) | 0),
              (B = (B + Math.imul(E, z)) | 0),
              (O = (O + Math.imul(k, F)) | 0),
              (L = ((L = (L + Math.imul(k, W)) | 0) + Math.imul(M, F)) | 0),
              (B = (B + Math.imul(M, W)) | 0),
              (O = (O + Math.imul(_, U)) | 0),
              (L = ((L = (L + Math.imul(_, V)) | 0) + Math.imul(x, U)) | 0),
              (B = (B + Math.imul(x, V)) | 0),
              (O = (O + Math.imul(m, H)) | 0),
              (L = ((L = (L + Math.imul(m, Y)) | 0) + Math.imul(w, H)) | 0),
              (B = (B + Math.imul(w, Y)) | 0),
              (O = (O + Math.imul(g, G)) | 0),
              (L = ((L = (L + Math.imul(g, J)) | 0) + Math.imul(y, G)) | 0),
              (B = (B + Math.imul(y, J)) | 0),
              (O = (O + Math.imul(b, Z)) | 0),
              (L = ((L = (L + Math.imul(b, Q)) | 0) + Math.imul(v, Z)) | 0),
              (B = (B + Math.imul(v, Q)) | 0),
              (d =
                (((tt + ((O + Math.imul(d, K)) | 0)) | 0) +
                  ((8191 &
                    (L =
                      ((L = (L + Math.imul(d, $)) | 0) + Math.imul(p, K)) |
                      0)) <<
                    13)) |
                0),
              (tt =
                ((((B = (B + Math.imul(p, $)) | 0) + (L >>> 13)) | 0) +
                  (d >>> 26)) |
                0),
              (d &= 67108863),
              (O = Math.imul(j, D)),
              (L = ((L = Math.imul(j, z)) + Math.imul(C, D)) | 0),
              (B = Math.imul(C, z)),
              (O = (O + Math.imul(S, F)) | 0),
              (L = ((L = (L + Math.imul(S, W)) | 0) + Math.imul(E, F)) | 0),
              (B = (B + Math.imul(E, W)) | 0),
              (O = (O + Math.imul(k, U)) | 0),
              (L = ((L = (L + Math.imul(k, V)) | 0) + Math.imul(M, U)) | 0),
              (B = (B + Math.imul(M, V)) | 0),
              (O = (O + Math.imul(_, H)) | 0),
              (L = ((L = (L + Math.imul(_, Y)) | 0) + Math.imul(x, H)) | 0),
              (B = (B + Math.imul(x, Y)) | 0),
              (O = (O + Math.imul(m, G)) | 0),
              (L = ((L = (L + Math.imul(m, J)) | 0) + Math.imul(w, G)) | 0),
              (B = (B + Math.imul(w, J)) | 0),
              (O = (O + Math.imul(g, Z)) | 0),
              (L = ((L = (L + Math.imul(g, Q)) | 0) + Math.imul(y, Z)) | 0),
              (B = (B + Math.imul(y, Q)) | 0),
              (b =
                (((tt + ((O + Math.imul(b, K)) | 0)) | 0) +
                  ((8191 &
                    (L =
                      ((L = (L + Math.imul(b, $)) | 0) + Math.imul(v, K)) |
                      0)) <<
                    13)) |
                0),
              (tt =
                ((((B = (B + Math.imul(v, $)) | 0) + (L >>> 13)) | 0) +
                  (b >>> 26)) |
                0),
              (b &= 67108863),
              (O = Math.imul(j, F)),
              (L = ((L = Math.imul(j, W)) + Math.imul(C, F)) | 0),
              (B = Math.imul(C, W)),
              (O = (O + Math.imul(S, U)) | 0),
              (L = ((L = (L + Math.imul(S, V)) | 0) + Math.imul(E, U)) | 0),
              (B = (B + Math.imul(E, V)) | 0),
              (O = (O + Math.imul(k, H)) | 0),
              (L = ((L = (L + Math.imul(k, Y)) | 0) + Math.imul(M, H)) | 0),
              (B = (B + Math.imul(M, Y)) | 0),
              (O = (O + Math.imul(_, G)) | 0),
              (L = ((L = (L + Math.imul(_, J)) | 0) + Math.imul(x, G)) | 0),
              (B = (B + Math.imul(x, J)) | 0),
              (O = (O + Math.imul(m, Z)) | 0),
              (L = ((L = (L + Math.imul(m, Q)) | 0) + Math.imul(w, Z)) | 0),
              (B = (B + Math.imul(w, Q)) | 0),
              (g =
                (((tt + ((O + Math.imul(g, K)) | 0)) | 0) +
                  ((8191 &
                    (L =
                      ((L = (L + Math.imul(g, $)) | 0) + Math.imul(y, K)) |
                      0)) <<
                    13)) |
                0),
              (tt =
                ((((B = (B + Math.imul(y, $)) | 0) + (L >>> 13)) | 0) +
                  (g >>> 26)) |
                0),
              (g &= 67108863),
              (O = Math.imul(j, U)),
              (L = ((L = Math.imul(j, V)) + Math.imul(C, U)) | 0),
              (B = Math.imul(C, V)),
              (O = (O + Math.imul(S, H)) | 0),
              (L = ((L = (L + Math.imul(S, Y)) | 0) + Math.imul(E, H)) | 0),
              (B = (B + Math.imul(E, Y)) | 0),
              (O = (O + Math.imul(k, G)) | 0),
              (L = ((L = (L + Math.imul(k, J)) | 0) + Math.imul(M, G)) | 0),
              (B = (B + Math.imul(M, J)) | 0),
              (O = (O + Math.imul(_, Z)) | 0),
              (L = ((L = (L + Math.imul(_, Q)) | 0) + Math.imul(x, Z)) | 0),
              (B = (B + Math.imul(x, Q)) | 0),
              (m =
                (((tt + ((O + Math.imul(m, K)) | 0)) | 0) +
                  ((8191 &
                    (L =
                      ((L = (L + Math.imul(m, $)) | 0) + Math.imul(w, K)) |
                      0)) <<
                    13)) |
                0),
              (tt =
                ((((B = (B + Math.imul(w, $)) | 0) + (L >>> 13)) | 0) +
                  (m >>> 26)) |
                0),
              (m &= 67108863),
              (O = Math.imul(j, H)),
              (L = ((L = Math.imul(j, Y)) + Math.imul(C, H)) | 0),
              (B = Math.imul(C, Y)),
              (O = (O + Math.imul(S, G)) | 0),
              (L = ((L = (L + Math.imul(S, J)) | 0) + Math.imul(E, G)) | 0),
              (B = (B + Math.imul(E, J)) | 0),
              (O = (O + Math.imul(k, Z)) | 0),
              (L = ((L = (L + Math.imul(k, Q)) | 0) + Math.imul(M, Z)) | 0),
              (B = (B + Math.imul(M, Q)) | 0),
              (_ =
                (((tt + ((O + Math.imul(_, K)) | 0)) | 0) +
                  ((8191 &
                    (L =
                      ((L = (L + Math.imul(_, $)) | 0) + Math.imul(x, K)) |
                      0)) <<
                    13)) |
                0),
              (tt =
                ((((B = (B + Math.imul(x, $)) | 0) + (L >>> 13)) | 0) +
                  (_ >>> 26)) |
                0),
              (_ &= 67108863),
              (O = Math.imul(j, G)),
              (L = ((L = Math.imul(j, J)) + Math.imul(C, G)) | 0),
              (B = Math.imul(C, J)),
              (O = (O + Math.imul(S, Z)) | 0),
              (L = ((L = (L + Math.imul(S, Q)) | 0) + Math.imul(E, Z)) | 0),
              (B = (B + Math.imul(E, Q)) | 0),
              (k =
                (((tt + ((O + Math.imul(k, K)) | 0)) | 0) +
                  ((8191 &
                    (L =
                      ((L = (L + Math.imul(k, $)) | 0) + Math.imul(M, K)) |
                      0)) <<
                    13)) |
                0),
              (tt =
                ((((B = (B + Math.imul(M, $)) | 0) + (L >>> 13)) | 0) +
                  (k >>> 26)) |
                0),
              (k &= 67108863),
              (O = Math.imul(j, Z)),
              (L = ((L = Math.imul(j, Q)) + Math.imul(C, Z)) | 0),
              (B = Math.imul(C, Q)),
              (S =
                (((tt + ((O + Math.imul(S, K)) | 0)) | 0) +
                  ((8191 &
                    (L =
                      ((L = (L + Math.imul(S, $)) | 0) + Math.imul(E, K)) |
                      0)) <<
                    13)) |
                0),
              (tt =
                ((((B = (B + Math.imul(E, $)) | 0) + (L >>> 13)) | 0) +
                  (S >>> 26)) |
                0),
              (S &= 67108863),
              (K =
                (((tt + Math.imul(j, K)) | 0) +
                  ((8191 &
                    (L = ((L = Math.imul(j, $)) + Math.imul(C, K)) | 0)) <<
                    13)) |
                0),
              (tt =
                ((((B = Math.imul(C, $)) + (L >>> 13)) | 0) + (K >>> 26)) | 0),
              (K &= 67108863),
              (a[0] = X),
              (a[1] = q),
              (a[2] = r),
              (a[3] = i),
              (a[4] = o),
              (a[5] = u),
              (a[6] = s),
              (a[7] = t),
              (a[8] = e),
              (a[9] = c),
              (a[10] = h),
              (a[11] = d),
              (a[12] = b),
              (a[13] = g),
              (a[14] = m),
              (a[15] = _),
              (a[16] = k),
              (a[17] = S),
              (a[18] = K),
              0 != tt && ((a[19] = tt), n.length++),
              n
            );
          };
          function g(t, e, n) {
            (n.negative = e.negative ^ t.negative),
              (n.length = t.length + e.length);
            for (var r = 0, i = 0, o = 0; o < n.length - 1; o++) {
              for (
                var s = i,
                  u = ((i = 0), 67108863 & r),
                  a = Math.min(o, e.length - 1),
                  c = Math.max(0, o - t.length + 1);
                c <= a;
                c++
              ) {
                var l,
                  h = (0 | t.words[o - c]) * (0 | e.words[c]);
                u = 67108863 & (l = ((l = 67108863 & h) + u) | 0);
                (i +=
                  (s =
                    ((s = (s + ((h / 67108864) | 0)) | 0) + (l >>> 26)) | 0) >>>
                  26),
                  (s &= 67108863);
              }
              (n.words[o] = u), (r = s), (s = i);
            }
            return 0 !== r ? (n.words[o] = r) : n.length--, n._strip();
          }
          function y(t, e, n) {
            return g(t, e, n);
          }
          Math.imul || (v = b),
            (o.prototype.mulTo = function (t, e) {
              var n = this.length + t.length;
              return (e = (
                10 === this.length && 10 === t.length
                  ? v
                  : n < 63
                  ? b
                  : n < 1024
                  ? g
                  : y
              )(this, t, e));
            }),
            (o.prototype.mul = function (t) {
              var e = new o(null);
              return (
                (e.words = new Array(this.length + t.length)), this.mulTo(t, e)
              );
            }),
            (o.prototype.mulf = function (t) {
              var e = new o(null);
              return (
                (e.words = new Array(this.length + t.length)), y(this, t, e)
              );
            }),
            (o.prototype.imul = function (t) {
              return this.clone().mulTo(t, this);
            }),
            (o.prototype.imuln = function (t) {
              var e = t < 0;
              r("number" == typeof (t = e ? -t : t)), r(t < 67108864);
              for (var n = 0, i = 0; i < this.length; i++) {
                var o = (0 | this.words[i]) * t,
                  s = (67108863 & o) + (67108863 & n);
                (n >>= 26),
                  (n += (o / 67108864) | 0),
                  (n += s >>> 26),
                  (this.words[i] = 67108863 & s);
              }
              return (
                0 !== n && ((this.words[i] = n), this.length++),
                e ? this.ineg() : this
              );
            }),
            (o.prototype.muln = function (t) {
              return this.clone().imuln(t);
            }),
            (o.prototype.sqr = function () {
              return this.mul(this);
            }),
            (o.prototype.isqr = function () {
              return this.imul(this.clone());
            }),
            (o.prototype.pow = function (t) {
              var e = (function (t) {
                for (var e = new Array(t.bitLength()), n = 0; n < e.length; n++)
                  e[n] = (t.words[(n / 26) | 0] >>> n % 26) & 1;
                return e;
              })(t);
              if (0 === e.length) return new o(1);
              for (
                var n = this, r = 0;
                r < e.length && 0 === e[r];
                r++, n = n.sqr()
              );
              if (++r < e.length)
                for (var i = n.sqr(); r < e.length; r++, i = i.sqr())
                  0 !== e[r] && (n = n.mul(i));
              return n;
            }),
            (o.prototype.iushln = function (t) {
              r("number" == typeof t && 0 <= t);
              var e = t % 26,
                n = (t - e) / 26,
                i = (67108863 >>> (26 - e)) << (26 - e);
              if (0 != e) {
                for (var o = 0, s = 0; s < this.length; s++) {
                  var u = this.words[s] & i,
                    a = ((0 | this.words[s]) - u) << e;
                  (this.words[s] = a | o), (o = u >>> (26 - e));
                }
                o && ((this.words[s] = o), this.length++);
              }
              if (0 != n) {
                for (s = this.length - 1; 0 <= s; s--)
                  this.words[s + n] = this.words[s];
                for (s = 0; s < n; s++) this.words[s] = 0;
                this.length += n;
              }
              return this._strip();
            }),
            (o.prototype.ishln = function (t) {
              return r(0 === this.negative), this.iushln(t);
            }),
            (o.prototype.iushrn = function (t, e, n) {
              r("number" == typeof t && 0 <= t);
              var i = e ? (e - (e % 26)) / 26 : 0,
                o = t % 26,
                s = Math.min((t - o) / 26, this.length),
                u = 67108863 ^ ((67108863 >>> o) << o),
                a = n;
              if (((i -= s), (i = Math.max(0, i)), a)) {
                for (var c = 0; c < s; c++) a.words[c] = this.words[c];
                a.length = s;
              }
              if (0 !== s)
                if (this.length > s)
                  for (this.length -= s, c = 0; c < this.length; c++)
                    this.words[c] = this.words[c + s];
                else (this.words[0] = 0), (this.length = 1);
              var l = 0;
              for (c = this.length - 1; 0 <= c && (0 !== l || i <= c); c--) {
                var h = 0 | this.words[c];
                (this.words[c] = (l << (26 - o)) | (h >>> o)), (l = h & u);
              }
              return (
                a && 0 !== l && (a.words[a.length++] = l),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              );
            }),
            (o.prototype.ishrn = function (t, e, n) {
              return r(0 === this.negative), this.iushrn(t, e, n);
            }),
            (o.prototype.shln = function (t) {
              return this.clone().ishln(t);
            }),
            (o.prototype.ushln = function (t) {
              return this.clone().iushln(t);
            }),
            (o.prototype.shrn = function (t) {
              return this.clone().ishrn(t);
            }),
            (o.prototype.ushrn = function (t) {
              return this.clone().iushrn(t);
            }),
            (o.prototype.testn = function (t) {
              r("number" == typeof t && 0 <= t);
              var e = t % 26;
              t = (t - e) / 26;
              return !(this.length <= t) && !!(this.words[t] & (1 << e));
            }),
            (o.prototype.imaskn = function (t) {
              r("number" == typeof t && 0 <= t);
              var e = t % 26;
              t = (t - e) / 26;
              return (
                r(
                  0 === this.negative,
                  "imaskn works only with positive numbers"
                ),
                this.length <= t
                  ? this
                  : (0 != e && t++,
                    (this.length = Math.min(t, this.length)),
                    0 != e &&
                      (this.words[this.length - 1] &=
                        67108863 ^ ((67108863 >>> e) << e)),
                    this._strip())
              );
            }),
            (o.prototype.maskn = function (t) {
              return this.clone().imaskn(t);
            }),
            (o.prototype.iaddn = function (t) {
              return (
                r("number" == typeof t),
                r(t < 67108864),
                t < 0
                  ? this.isubn(-t)
                  : 0 !== this.negative
                  ? (1 === this.length && (0 | this.words[0]) <= t
                      ? ((this.words[0] = t - (0 | this.words[0])),
                        (this.negative = 0))
                      : ((this.negative = 0),
                        this.isubn(t),
                        (this.negative = 1)),
                    this)
                  : this._iaddn(t)
              );
            }),
            (o.prototype._iaddn = function (t) {
              this.words[0] += t;
              for (var e = 0; e < this.length && 67108864 <= this.words[e]; e++)
                (this.words[e] -= 67108864),
                  e === this.length - 1
                    ? (this.words[e + 1] = 1)
                    : this.words[e + 1]++;
              return (this.length = Math.max(this.length, e + 1)), this;
            }),
            (o.prototype.isubn = function (t) {
              if ((r("number" == typeof t), r(t < 67108864), t < 0))
                return this.iaddn(-t);
              if (0 !== this.negative)
                return (
                  (this.negative = 0), this.iaddn(t), (this.negative = 1), this
                );
              if (
                ((this.words[0] -= t), 1 === this.length && this.words[0] < 0)
              )
                (this.words[0] = -this.words[0]), (this.negative = 1);
              else
                for (var e = 0; e < this.length && this.words[e] < 0; e++)
                  (this.words[e] += 67108864), --this.words[e + 1];
              return this._strip();
            }),
            (o.prototype.addn = function (t) {
              return this.clone().iaddn(t);
            }),
            (o.prototype.subn = function (t) {
              return this.clone().isubn(t);
            }),
            (o.prototype.iabs = function () {
              return (this.negative = 0), this;
            }),
            (o.prototype.abs = function () {
              return this.clone().iabs();
            }),
            (o.prototype._ishlnsubmul = function (t, e, n) {
              var i = t.length + n;
              this._expand(i);
              for (var o = 0, s = 0; s < t.length; s++) {
                var u = (0 | this.words[s + n]) + o,
                  a = (0 | t.words[s]) * e;
                o = ((u -= 67108863 & a) >> 26) - ((a / 67108864) | 0);
                this.words[s + n] = 67108863 & u;
              }
              for (; s < this.length - n; s++)
                (o = (u = (0 | this.words[s + n]) + o) >> 26),
                  (this.words[s + n] = 67108863 & u);
              if (0 === o) return this._strip();
              for (r(-1 === o), s = o = 0; s < this.length; s++)
                (o = (u = -(0 | this.words[s]) + o) >> 26),
                  (this.words[s] = 67108863 & u);
              return (this.negative = 1), this._strip();
            }),
            (o.prototype._wordDiv = function (t, e) {
              var n = (this.length, t.length),
                r = this.clone(),
                i = t,
                s = 0 | i.words[i.length - 1];
              0 != (n = 26 - this._countBits(s)) &&
                ((i = i.ushln(n)),
                r.iushln(n),
                (s = 0 | i.words[i.length - 1]));
              var u,
                a = r.length - i.length;
              if ("mod" !== e) {
                ((u = new o(null)).length = 1 + a),
                  (u.words = new Array(u.length));
                for (var c = 0; c < u.length; c++) u.words[c] = 0;
              }
              0 === (t = r.clone()._ishlnsubmul(i, 1, a)).negative &&
                ((r = t), u && (u.words[a] = 1));
              for (var l = a - 1; 0 <= l; l--) {
                var h =
                  67108864 * (0 | r.words[i.length + l]) +
                  (0 | r.words[i.length + l - 1]);
                h = Math.min((h / s) | 0, 67108863);
                for (r._ishlnsubmul(i, h, l); 0 !== r.negative; )
                  h--,
                    (r.negative = 0),
                    r._ishlnsubmul(i, 1, l),
                    r.isZero() || (r.negative ^= 1);
                u && (u.words[l] = h);
              }
              return (
                u && u._strip(),
                r._strip(),
                "div" !== e && 0 != n && r.iushrn(n),
                { div: u || null, mod: r }
              );
            }),
            (o.prototype.divmod = function (t, e, n) {
              return (
                r(!t.isZero()),
                this.isZero()
                  ? { div: new o(0), mod: new o(0) }
                  : 0 !== this.negative && 0 === t.negative
                  ? ((u = this.neg().divmod(t, e)),
                    "mod" !== e && (i = u.div.neg()),
                    "div" !== e &&
                      ((s = u.mod.neg()), n && 0 !== s.negative && s.iadd(t)),
                    { div: i, mod: s })
                  : 0 === this.negative && 0 !== t.negative
                  ? ((u = this.divmod(t.neg(), e)),
                    { div: (i = "mod" !== e ? u.div.neg() : i), mod: u.mod })
                  : 0 != (this.negative & t.negative)
                  ? ((u = this.neg().divmod(t.neg(), e)),
                    "div" !== e &&
                      ((s = u.mod.neg()), n && 0 !== s.negative && s.isub(t)),
                    { div: u.div, mod: s })
                  : t.length > this.length || this.cmp(t) < 0
                  ? { div: new o(0), mod: this }
                  : 1 === t.length
                  ? "div" === e
                    ? { div: this.divn(t.words[0]), mod: null }
                    : "mod" === e
                    ? { div: null, mod: new o(this.modrn(t.words[0])) }
                    : {
                        div: this.divn(t.words[0]),
                        mod: new o(this.modrn(t.words[0])),
                      }
                  : this._wordDiv(t, e)
              );
              var i, s, u;
            }),
            (o.prototype.div = function (t) {
              return this.divmod(t, "div", !1).div;
            }),
            (o.prototype.mod = function (t) {
              return this.divmod(t, "mod", !1).mod;
            }),
            (o.prototype.umod = function (t) {
              return this.divmod(t, "mod", !0).mod;
            }),
            (o.prototype.divRound = function (t) {
              var e = this.divmod(t);
              if (e.mod.isZero()) return e.div;
              var n = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                r = t.ushrn(1);
              t = t.andln(1);
              return (r = n.cmp(r)) < 0 || (1 === t && 0 === r)
                ? e.div
                : 0 !== e.div.negative
                ? e.div.isubn(1)
                : e.div.iaddn(1);
            }),
            (o.prototype.modrn = function (t) {
              var e = t < 0;
              r((t = e ? -t : t) <= 67108863);
              for (
                var n = (1 << 26) % t, i = 0, o = this.length - 1;
                0 <= o;
                o--
              )
                i = (n * i + (0 | this.words[o])) % t;
              return e ? -i : i;
            }),
            (o.prototype.modn = function (t) {
              return this.modrn(t);
            }),
            (o.prototype.idivn = function (t) {
              var e = t < 0;
              r((t = e ? -t : t) <= 67108863);
              for (var n = 0, i = this.length - 1; 0 <= i; i--) {
                var o = (0 | this.words[i]) + 67108864 * n;
                (this.words[i] = (o / t) | 0), (n = o % t);
              }
              return this._strip(), e ? this.ineg() : this;
            }),
            (o.prototype.divn = function (t) {
              return this.clone().idivn(t);
            }),
            (o.prototype.egcd = function (t) {
              r(0 === t.negative), r(!t.isZero());
              for (
                var e = this,
                  n = t.clone(),
                  i =
                    ((e = 0 !== e.negative ? e.umod(t) : e.clone()), new o(1)),
                  s = new o(0),
                  u = new o(0),
                  a = new o(1),
                  c = 0;
                e.isEven() && n.isEven();

              )
                e.iushrn(1), n.iushrn(1), ++c;
              for (var l = n.clone(), h = e.clone(); !e.isZero(); ) {
                for (
                  var f = 0, d = 1;
                  0 == (e.words[0] & d) && f < 26;
                  ++f, d <<= 1
                );
                if (0 < f)
                  for (e.iushrn(f); 0 < f--; )
                    (i.isOdd() || s.isOdd()) && (i.iadd(l), s.isub(h)),
                      i.iushrn(1),
                      s.iushrn(1);
                for (
                  var p = 0, b = 1;
                  0 == (n.words[0] & b) && p < 26;
                  ++p, b <<= 1
                );
                if (0 < p)
                  for (n.iushrn(p); 0 < p--; )
                    (u.isOdd() || a.isOdd()) && (u.iadd(l), a.isub(h)),
                      u.iushrn(1),
                      a.iushrn(1);
                0 <= e.cmp(n)
                  ? (e.isub(n), i.isub(u), s.isub(a))
                  : (n.isub(e), u.isub(i), a.isub(s));
              }
              return { a: u, b: a, gcd: n.iushln(c) };
            }),
            (o.prototype._invmp = function (t) {
              r(0 === t.negative), r(!t.isZero());
              for (
                var e,
                  n = this,
                  i = t.clone(),
                  s =
                    ((n = 0 !== n.negative ? n.umod(t) : n.clone()), new o(1)),
                  u = new o(0),
                  a = i.clone();
                0 < n.cmpn(1) && 0 < i.cmpn(1);

              ) {
                for (
                  var c = 0, l = 1;
                  0 == (n.words[0] & l) && c < 26;
                  ++c, l <<= 1
                );
                if (0 < c)
                  for (n.iushrn(c); 0 < c--; )
                    s.isOdd() && s.iadd(a), s.iushrn(1);
                for (
                  var h = 0, f = 1;
                  0 == (i.words[0] & f) && h < 26;
                  ++h, f <<= 1
                );
                if (0 < h)
                  for (i.iushrn(h); 0 < h--; )
                    u.isOdd() && u.iadd(a), u.iushrn(1);
                0 <= n.cmp(i) ? (n.isub(i), s.isub(u)) : (i.isub(n), u.isub(s));
              }
              return (e = 0 === n.cmpn(1) ? s : u).cmpn(0) < 0 && e.iadd(t), e;
            }),
            (o.prototype.gcd = function (t) {
              if (this.isZero()) return t.abs();
              if (t.isZero()) return this.abs();
              var e = this.clone(),
                n = t.clone();
              e.negative = 0;
              for (var r = (n.negative = 0); e.isEven() && n.isEven(); r++)
                e.iushrn(1), n.iushrn(1);
              for (;;) {
                for (; e.isEven(); ) e.iushrn(1);
                for (; n.isEven(); ) n.iushrn(1);
                var i = e.cmp(n);
                if (i < 0) {
                  var o = e;
                  (e = n), (n = o);
                } else if (0 === i || 0 === n.cmpn(1)) break;
                e.isub(n);
              }
              return n.iushln(r);
            }),
            (o.prototype.invm = function (t) {
              return this.egcd(t).a.umod(t);
            }),
            (o.prototype.isEven = function () {
              return 0 == (1 & this.words[0]);
            }),
            (o.prototype.isOdd = function () {
              return 1 == (1 & this.words[0]);
            }),
            (o.prototype.andln = function (t) {
              return this.words[0] & t;
            }),
            (o.prototype.bincn = function (t) {
              r("number" == typeof t);
              t = (t - (e = t % 26)) / 26;
              var e = 1 << e;
              if (this.length <= t)
                return this._expand(1 + t), (this.words[t] |= e), this;
              for (var n = e, i = t; 0 !== n && i < this.length; i++) {
                var o = 0 | this.words[i];
                n = (o += n) >>> 26;
                (o &= 67108863), (this.words[i] = o);
              }
              return 0 !== n && ((this.words[i] = n), this.length++), this;
            }),
            (o.prototype.isZero = function () {
              return 1 === this.length && 0 === this.words[0];
            }),
            (o.prototype.cmpn = function (t) {
              var e = t < 0;
              return 0 === this.negative || e
                ? 0 === this.negative && e
                  ? 1
                  : (this._strip(),
                    (t =
                      1 < this.length
                        ? 1
                        : (r((t = e ? -t : t) <= 67108863, "Number is too big"),
                          (e = 0 | this.words[0]) === t ? 0 : e < t ? -1 : 1)),
                    0 !== this.negative ? 0 | -t : t)
                : -1;
            }),
            (o.prototype.cmp = function (t) {
              return 0 !== this.negative && 0 === t.negative
                ? -1
                : 0 === this.negative && 0 !== t.negative
                ? 1
                : ((t = this.ucmp(t)), 0 !== this.negative ? 0 | -t : t);
            }),
            (o.prototype.ucmp = function (t) {
              if (this.length > t.length) return 1;
              if (this.length < t.length) return -1;
              for (var e = 0, n = this.length - 1; 0 <= n; n--) {
                var r = 0 | this.words[n],
                  i = 0 | t.words[n];
                if (r != i) {
                  r < i ? (e = -1) : i < r && (e = 1);
                  break;
                }
              }
              return e;
            }),
            (o.prototype.gtn = function (t) {
              return 1 === this.cmpn(t);
            }),
            (o.prototype.gt = function (t) {
              return 1 === this.cmp(t);
            }),
            (o.prototype.gten = function (t) {
              return 0 <= this.cmpn(t);
            }),
            (o.prototype.gte = function (t) {
              return 0 <= this.cmp(t);
            }),
            (o.prototype.ltn = function (t) {
              return -1 === this.cmpn(t);
            }),
            (o.prototype.lt = function (t) {
              return -1 === this.cmp(t);
            }),
            (o.prototype.lten = function (t) {
              return this.cmpn(t) <= 0;
            }),
            (o.prototype.lte = function (t) {
              return this.cmp(t) <= 0;
            }),
            (o.prototype.eqn = function (t) {
              return 0 === this.cmpn(t);
            }),
            (o.prototype.eq = function (t) {
              return 0 === this.cmp(t);
            }),
            (o.red = function (t) {
              return new S(t);
            }),
            (o.prototype.toRed = function (t) {
              return (
                r(!this.red, "Already a number in reduction context"),
                r(0 === this.negative, "red works only with positives"),
                t.convertTo(this)._forceRed(t)
              );
            }),
            (o.prototype.fromRed = function () {
              return (
                r(
                  this.red,
                  "fromRed works only with numbers in reduction context"
                ),
                this.red.convertFrom(this)
              );
            }),
            (o.prototype._forceRed = function (t) {
              return (this.red = t), this;
            }),
            (o.prototype.forceRed = function (t) {
              return (
                r(!this.red, "Already a number in reduction context"),
                this._forceRed(t)
              );
            }),
            (o.prototype.redAdd = function (t) {
              return (
                r(this.red, "redAdd works only with red numbers"),
                this.red.add(this, t)
              );
            }),
            (o.prototype.redIAdd = function (t) {
              return (
                r(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, t)
              );
            }),
            (o.prototype.redSub = function (t) {
              return (
                r(this.red, "redSub works only with red numbers"),
                this.red.sub(this, t)
              );
            }),
            (o.prototype.redISub = function (t) {
              return (
                r(this.red, "redISub works only with red numbers"),
                this.red.isub(this, t)
              );
            }),
            (o.prototype.redShl = function (t) {
              return (
                r(this.red, "redShl works only with red numbers"),
                this.red.shl(this, t)
              );
            }),
            (o.prototype.redMul = function (t) {
              return (
                r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.mul(this, t)
              );
            }),
            (o.prototype.redIMul = function (t) {
              return (
                r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.imul(this, t)
              );
            }),
            (o.prototype.redSqr = function () {
              return (
                r(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (o.prototype.redISqr = function () {
              return (
                r(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (o.prototype.redSqrt = function () {
              return (
                r(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (o.prototype.redInvm = function () {
              return (
                r(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (o.prototype.redNeg = function () {
              return (
                r(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (o.prototype.redPow = function (t) {
              return (
                r(this.red && !t.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, t)
              );
            });
          var m = { k256: null, p224: null, p192: null, p25519: null };
          function w(t, e) {
            (this.name = t),
              (this.p = new o(e, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new o(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp());
          }
          function _() {
            w.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
            );
          }
          function x() {
            w.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
            );
          }
          function k() {
            w.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
            );
          }
          function M() {
            w.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
            );
          }
          function S(t) {
            var e;
            "string" == typeof t
              ? ((e = o._prime(t)), (this.m = e.p), (this.prime = e))
              : (r(t.gtn(1), "modulus must be greater than 1"),
                (this.m = t),
                (this.prime = null));
          }
          function E(t) {
            S.call(this, t),
              (this.shift = this.m.bitLength()),
              this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new o(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv));
          }
          (w.prototype._tmp = function () {
            var t = new o(null);
            return (t.words = new Array(Math.ceil(this.n / 13))), t;
          }),
            (w.prototype.ireduce = function (t) {
              for (
                var e, n = t;
                this.split(n, this.tmp),
                  (e = (n = (n = this.imulK(n)).iadd(this.tmp)).bitLength()) >
                    this.n;

              );
              return (
                0 === (t = e < this.n ? -1 : n.ucmp(this.p))
                  ? ((n.words[0] = 0), (n.length = 1))
                  : 0 < t
                  ? n.isub(this.p)
                  : void 0 !== n.strip
                  ? n.strip()
                  : n._strip(),
                n
              );
            }),
            (w.prototype.split = function (t, e) {
              t.iushrn(this.n, 0, e);
            }),
            (w.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            i(_, w),
            (_.prototype.split = function (t, e) {
              for (var n = Math.min(t.length, 9), r = 0; r < n; r++)
                e.words[r] = t.words[r];
              if (((e.length = n), t.length <= 9))
                return (t.words[0] = 0), void (t.length = 1);
              var i = t.words[9];
              for (
                e.words[e.length++] = 4194303 & i, r = 10;
                r < t.length;
                r++
              ) {
                var o = 0 | t.words[r];
                (t.words[r - 10] = ((4194303 & o) << 4) | (i >>> 22)), (i = o);
              }
              0 === (t.words[r - 10] = i >>>= 22) && 10 < t.length
                ? (t.length -= 10)
                : (t.length -= 9);
            }),
            (_.prototype.imulK = function (t) {
              (t.words[t.length] = 0),
                (t.words[t.length + 1] = 0),
                (t.length += 2);
              for (var e = 0, n = 0; n < t.length; n++) {
                var r = 0 | t.words[n];
                (e += 977 * r),
                  (t.words[n] = 67108863 & e),
                  (e = 64 * r + ((e / 67108864) | 0));
              }
              return (
                0 === t.words[t.length - 1] &&
                  (t.length--, 0 === t.words[t.length - 1] && t.length--),
                t
              );
            }),
            i(x, w),
            i(k, w),
            i(M, w),
            (M.prototype.imulK = function (t) {
              for (var e = 0, n = 0; n < t.length; n++) {
                var r = 19 * (0 | t.words[n]) + e,
                  i = 67108863 & r;
                (r >>>= 26), (t.words[n] = i), (e = r);
              }
              return 0 !== e && (t.words[t.length++] = e), t;
            }),
            (o._prime = function (t) {
              if (m[t]) return m[t];
              var e;
              if ("k256" === t) e = new _();
              else if ("p224" === t) e = new x();
              else if ("p192" === t) e = new k();
              else {
                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                e = new M();
              }
              return (m[t] = e);
            }),
            (S.prototype._verify1 = function (t) {
              r(0 === t.negative, "red works only with positives"),
                r(t.red, "red works only with red numbers");
            }),
            (S.prototype._verify2 = function (t, e) {
              r(
                0 == (t.negative | e.negative),
                "red works only with positives"
              ),
                r(t.red && t.red === e.red, "red works only with red numbers");
            }),
            (S.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : (l(t, t.umod(this.m)._forceRed(this)), t);
            }),
            (S.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (S.prototype.add = function (t, e) {
              return (
                this._verify2(t, e),
                0 <= (e = t.add(e)).cmp(this.m) && e.isub(this.m),
                e._forceRed(this)
              );
            }),
            (S.prototype.iadd = function (t, e) {
              return (
                this._verify2(t, e),
                0 <= (e = t.iadd(e)).cmp(this.m) && e.isub(this.m),
                e
              );
            }),
            (S.prototype.sub = function (t, e) {
              return (
                this._verify2(t, e),
                (e = t.sub(e)).cmpn(0) < 0 && e.iadd(this.m),
                e._forceRed(this)
              );
            }),
            (S.prototype.isub = function (t, e) {
              return (
                this._verify2(t, e),
                (e = t.isub(e)).cmpn(0) < 0 && e.iadd(this.m),
                e
              );
            }),
            (S.prototype.shl = function (t, e) {
              return this._verify1(t), this.imod(t.ushln(e));
            }),
            (S.prototype.imul = function (t, e) {
              return this._verify2(t, e), this.imod(t.imul(e));
            }),
            (S.prototype.mul = function (t, e) {
              return this._verify2(t, e), this.imod(t.mul(e));
            }),
            (S.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (S.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (S.prototype.sqrt = function (t) {
              if (t.isZero()) return t.clone();
              var e = this.m.andln(3);
              if ((r(e % 2 == 1), 3 === e))
                return (e = this.m.add(new o(1)).iushrn(2)), this.pow(t, e);
              for (
                var n = this.m.subn(1), i = 0;
                !n.isZero() && 0 === n.andln(1);

              )
                i++, n.iushrn(1);
              r(!n.isZero());
              for (
                var s = new o(1).toRed(this),
                  u = s.redNeg(),
                  a = this.m.subn(1).iushrn(1),
                  c = new o(2 * (c = this.m.bitLength()) * c).toRed(this);
                0 !== this.pow(c, a).cmp(u);

              )
                c.redIAdd(u);
              for (
                var l = this.pow(c, n),
                  h = this.pow(t, n.addn(1).iushrn(1)),
                  f = this.pow(t, n),
                  d = i;
                0 !== f.cmp(s);

              ) {
                for (var p = f, b = 0; 0 !== p.cmp(s); b++) p = p.redSqr();
                r(b < d);
                var v = this.pow(l, new o(1).iushln(d - b - 1));
                (h = h.redMul(v)), (l = v.redSqr()), (f = f.redMul(l)), (d = b);
              }
              return h;
            }),
            (S.prototype.invm = function (t) {
              return 0 !== (t = t._invmp(this.m)).negative
                ? ((t.negative = 0), this.imod(t).redNeg())
                : this.imod(t);
            }),
            (S.prototype.pow = function (t, e) {
              if (e.isZero()) return new o(1).toRed(this);
              if (0 === e.cmpn(1)) return t.clone();
              var n = new Array(16);
              (n[0] = new o(1).toRed(this)), (n[1] = t);
              for (var r = 2; r < n.length; r++) n[r] = this.mul(n[r - 1], t);
              var i = n[0],
                s = 0,
                u = 0,
                a = e.bitLength() % 26;
              for (0 === a && (a = 26), r = e.length - 1; 0 <= r; r--) {
                for (var c = e.words[r], l = a - 1; 0 <= l; l--) {
                  var h = (c >> l) & 1;
                  i !== n[0] && (i = this.sqr(i)),
                    0 != h || 0 !== s
                      ? ((s <<= 1),
                        (s |= h),
                        (4 === ++u || (0 === r && 0 === l)) &&
                          ((i = this.mul(i, n[s])), (s = u = 0)))
                      : (u = 0);
                }
                a = 26;
              }
              return i;
            }),
            (S.prototype.convertTo = function (t) {
              var e = t.umod(this.m);
              return e === t ? e.clone() : e;
            }),
            (S.prototype.convertFrom = function (t) {
              return ((t = t.clone()).red = null), t;
            }),
            (o.mont = function (t) {
              return new E(t);
            }),
            i(E, S),
            (E.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (E.prototype.convertFrom = function (t) {
              return ((t = this.imod(t.mul(this.rinv))).red = null), t;
            }),
            (E.prototype.imul = function (t, e) {
              return t.isZero() || e.isZero()
                ? ((t.words[0] = 0), (t.length = 1), t)
                : ((e = (t = t.imul(e))
                    .maskn(this.shift)
                    .mul(this.minv)
                    .imaskn(this.shift)
                    .mul(this.m)),
                  (e = t = t.isub(e).iushrn(this.shift)),
                  0 <= t.cmp(this.m)
                    ? (e = t.isub(this.m))
                    : t.cmpn(0) < 0 && (e = t.iadd(this.m)),
                  e._forceRed(this));
            }),
            (E.prototype.mul = function (t, e) {
              return t.isZero() || e.isZero()
                ? new o(0)._forceRed(this)
                : ((e = (t = t.mul(e))
                    .maskn(this.shift)
                    .mul(this.minv)
                    .imaskn(this.shift)
                    .mul(this.m)),
                  (e = t = t.isub(e).iushrn(this.shift)),
                  0 <= t.cmp(this.m)
                    ? (e = t.isub(this.m))
                    : t.cmpn(0) < 0 && (e = t.iadd(this.m)),
                  e._forceRed(this));
            }),
            (E.prototype.invm = function (t) {
              return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
            });
        })(t, this);
      }.call(this, n(163)(t)));
    },
    1191: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return o;
        });
      var r = n(1125);
      function i() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return o(t);
      }
      function o(t) {
        return 0 === t.length
          ? r.a
          : 1 === t.length
          ? t[0]
          : function (e) {
              return t.reduce(function (t, e) {
                return e(t);
              }, e);
            };
      }
    },
    1192: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = n(113);
      n = n(1104);
      function i() {
        return function (t) {
          return t.lift(new o(t));
        };
      }
      var o = (function () {
          function t(t) {
            this.connectable = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              var n = this.connectable;
              return (
                n._refCount++,
                (t = new s(t, n)),
                (e = e.subscribe(t)),
                t.closed || (t.connection = n.connect()),
                e
              );
            }),
            t
          );
        })(),
        s = (function (t) {
          function e(e, n) {
            return ((e = t.call(this, e) || this).connectable = n), e;
          }
          return (
            r.__extends(e, t),
            (e.prototype._unsubscribe = function () {
              var t,
                e = this.connectable;
              e
                ? ((this.connectable = null),
                  (t = e._refCount) <= 0
                    ? (this.connection = null)
                    : ((e._refCount = t - 1),
                      1 < t
                        ? (this.connection = null)
                        : ((t = this.connection),
                          (e = e._connection),
                          (this.connection = null),
                          !e || (t && e !== t) || e.unsubscribe())))
                : (this.connection = null);
            }),
            e
          );
        })(n.a);
    },
    1193: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return u;
      }),
        n.d(e, "a", function () {
          return h;
        });
      var r = n(113),
        i = n(1104),
        o = n(1111),
        s = ((e = n(1106)), n(1112));
      function u(t, e, n, r) {
        return function (i) {
          return i.lift(new a(t, e, n, r));
        };
      }
      var a = (function () {
          function t(t, e, n, r) {
            (this.keySelector = t),
              (this.elementSelector = e),
              (this.durationSelector = n),
              (this.subjectSelector = r);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new c(
                  t,
                  this.keySelector,
                  this.elementSelector,
                  this.durationSelector,
                  this.subjectSelector
                )
              );
            }),
            t
          );
        })(),
        c = (function (t) {
          function e(e, n, r, i, o) {
            return (
              ((e = t.call(this, e) || this).keySelector = n),
              (e.elementSelector = r),
              (e.durationSelector = i),
              (e.subjectSelector = o),
              (e.groups = null),
              (e.attemptedToUnsubscribe = !1),
              (e.count = 0),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              var e;
              try {
                e = this.keySelector(t);
              } catch (t) {
                return void this.error(t);
              }
              this._group(t, e);
            }),
            (e.prototype._group = function (t, e) {
              var n,
                r = this.groups,
                i = (r = r || (this.groups = new Map())).get(e);
              if (this.elementSelector)
                try {
                  n = this.elementSelector(t);
                } catch (t) {
                  this.error(t);
                }
              else n = t;
              if (
                !i &&
                ((i = this.subjectSelector
                  ? this.subjectSelector()
                  : new s.a()),
                r.set(e, i),
                (r = new h(e, i, this)),
                this.destination.next(r),
                this.durationSelector)
              ) {
                r = void 0;
                try {
                  r = this.durationSelector(new h(e, i));
                } catch (t) {
                  return void this.error(t);
                }
                this.add(r.subscribe(new l(e, i, this)));
              }
              i.closed || i.next(n);
            }),
            (e.prototype._error = function (t) {
              var e = this.groups;
              e &&
                (e.forEach(function (e, n) {
                  e.error(t);
                }),
                e.clear()),
                this.destination.error(t);
            }),
            (e.prototype._complete = function () {
              var t = this.groups;
              t &&
                (t.forEach(function (t, e) {
                  t.complete();
                }),
                t.clear()),
                this.destination.complete();
            }),
            (e.prototype.removeGroup = function (t) {
              this.groups.delete(t);
            }),
            (e.prototype.unsubscribe = function () {
              this.closed ||
                ((this.attemptedToUnsubscribe = !0),
                0 === this.count && t.prototype.unsubscribe.call(this));
            }),
            e
          );
        })(i.a),
        l = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, n) || this;
            return (i.key = e), (i.group = n), (i.parent = r), i;
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              this.complete();
            }),
            (e.prototype._unsubscribe = function () {
              var t = this.parent,
                e = this.key;
              (this.key = this.parent = null), t && t.removeGroup(e);
            }),
            e
          );
        })(i.a),
        h = (function (t) {
          function e(e, n, r) {
            var i = t.call(this) || this;
            return (
              (i.key = e), (i.groupSubject = n), (i.refCountSubscription = r), i
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._subscribe = function (t) {
              var e = new o.a(),
                n = this.refCountSubscription,
                r = this.groupSubject;
              return (
                n && !n.closed && e.add(new f(n)), e.add(r.subscribe(t)), e
              );
            }),
            e
          );
        })(e.a),
        f = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (n.parent = e).count++, n;
          }
          return (
            r.__extends(e, t),
            (e.prototype.unsubscribe = function () {
              var e = this.parent;
              e.closed ||
                this.closed ||
                (t.prototype.unsubscribe.call(this),
                --e.count,
                0 === e.count && e.attemptedToUnsubscribe && e.unsubscribe());
            }),
            e
          );
        })(o.a);
    },
    1194: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return c;
      });
      var r = n(113),
        i = ((e = n(1112)), n(1205)),
        o = n(1111),
        s = n(1256),
        u = n(1167),
        a = n(1369),
        c = (function (t) {
          function e(e, n, r) {
            void 0 === e && (e = Number.POSITIVE_INFINITY),
              void 0 === n && (n = Number.POSITIVE_INFINITY);
            var i = t.call(this) || this;
            return (
              (i.scheduler = r),
              (i._events = []),
              (i._infiniteTimeWindow = !1),
              (i._bufferSize = e < 1 ? 1 : e),
              (i._windowTime = n < 1 ? 1 : n),
              n === Number.POSITIVE_INFINITY
                ? ((i._infiniteTimeWindow = !0),
                  (i.next = i.nextInfiniteTimeWindow))
                : (i.next = i.nextTimeWindow),
              i
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype.nextInfiniteTimeWindow = function (e) {
              var n;
              this.isStopped ||
                ((n = this._events).push(e),
                n.length > this._bufferSize && n.shift()),
                t.prototype.next.call(this, e);
            }),
            (e.prototype.nextTimeWindow = function (e) {
              this.isStopped ||
                (this._events.push(new l(this._getNow(), e)),
                this._trimBufferThenGetEvents()),
                t.prototype.next.call(this, e);
            }),
            (e.prototype._subscribe = function (t) {
              var e,
                n = this._infiniteTimeWindow,
                r = n ? this._events : this._trimBufferThenGetEvents(),
                i = this.scheduler,
                c = r.length;
              if (this.closed) throw new u.a();
              if (
                ((e =
                  this.isStopped || this.hasError
                    ? o.a.EMPTY
                    : (this.observers.push(t), new a.a(this, t))),
                i && t.add((t = new s.a(t, i))),
                n)
              )
                for (var l = 0; l < c && !t.closed; l++) t.next(r[l]);
              else for (l = 0; l < c && !t.closed; l++) t.next(r[l].value);
              return (
                this.hasError
                  ? t.error(this.thrownError)
                  : this.isStopped && t.complete(),
                e
              );
            }),
            (e.prototype._getNow = function () {
              return (this.scheduler || i.a).now();
            }),
            (e.prototype._trimBufferThenGetEvents = function () {
              for (
                var t = this._getNow(),
                  e = this._bufferSize,
                  n = this._windowTime,
                  r = this._events,
                  i = r.length,
                  o = 0;
                o < i && !(t - r[o].time < n);

              )
                o++;
              return (
                0 < (o = e < i ? Math.max(o, i - e) : o) && r.splice(0, o), r
              );
            }),
            e
          );
        })(e.a),
        l = function (t, e) {
          (this.time = t), (this.value = e);
        };
    },
    1195: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = n(1106);
      function i(t, e) {
        return e
          ? new r.a(function (n) {
              return e.schedule(o, 0, { error: t, subscriber: n });
            })
          : new r.a(function (e) {
              return e.error(t);
            });
      }
      function o(t) {
        var e = t.error;
        t.subscriber.error(e);
      }
    },
    1196: function (t, e, n) {
      "use strict";
      function r() {}
      n.d(e, "a", function () {
        return r;
      });
    },
    1197: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return c;
      }),
        n.d(e, "a", function () {
          return l;
        });
      var r = n(113),
        i = n(1119),
        o = n(1114),
        s = ((e = n(1138)), n(1140)),
        u = n(1169),
        a = {};
      function c() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = void 0,
          r = void 0;
        return (
          Object(i.a)(t[t.length - 1]) && (r = t.pop()),
          "function" == typeof t[t.length - 1] && (n = t.pop()),
          1 === t.length && Object(o.a)(t[0]) && (t = t[0]),
          Object(u.a)(t, r).lift(new l(n))
        );
      }
      var l = (function () {
          function t(t) {
            this.resultSelector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new h(t, this.resultSelector));
            }),
            t
          );
        })(),
        h = (function (t) {
          function e(e, n) {
            return (
              ((e = t.call(this, e) || this).resultSelector = n),
              (e.active = 0),
              (e.values = []),
              (e.observables = []),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              this.values.push(a), this.observables.push(t);
            }),
            (e.prototype._complete = function () {
              var t = this.observables,
                e = t.length;
              if (0 === e) this.destination.complete();
              else {
                (this.active = e), (this.toRespond = e);
                for (var n = 0; n < e; n++) {
                  var r = t[n];
                  this.add(Object(s.a)(this, r, void 0, n));
                }
              }
            }),
            (e.prototype.notifyComplete = function (t) {
              0 == --this.active && this.destination.complete();
            }),
            (e.prototype.notifyNext = function (t, e, n) {
              var r = this.values,
                i = r[n];
              i = this.toRespond
                ? i === a
                  ? --this.toRespond
                  : this.toRespond
                : 0;
              (r[n] = e),
                0 === i &&
                  (this.resultSelector
                    ? this._tryResultSelector(r)
                    : this.destination.next(r.slice()));
            }),
            (e.prototype._tryResultSelector = function (t) {
              var e;
              try {
                e = this.resultSelector.apply(this, t);
              } catch (t) {
                return void this.destination.error(t);
              }
              this.destination.next(e);
            }),
            e
          );
        })(e.a);
    },
    1198: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var r = n(1152),
        i = n(1125);
      function o(t) {
        return (
          void 0 === t && (t = Number.POSITIVE_INFINITY), Object(r.b)(i.a, t)
        );
      }
    },
    1199: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      });
      var r = n(1106),
        i = n(1118),
        o = n(1117);
      function s(t) {
        return new r.a(function (e) {
          var n;
          try {
            n = t();
          } catch (n) {
            return void e.error(n);
          }
          return (n ? Object(i.a)(n) : Object(o.b)()).subscribe(e);
        });
      }
    },
    1200: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = n(1114);
      function i(t) {
        return !Object(r.a)(t) && 0 <= t - parseFloat(t) + 1;
      }
    },
    1201: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "a", function () {
          return c;
        });
      var r = n(113),
        i = n(1169),
        o = n(1114),
        s = ((e = n(1104)), n(1172)),
        u = n(1109);
      function a() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = t[t.length - 1];
        return (
          "function" == typeof n && t.pop(),
          Object(i.a)(t, void 0).lift(new c(n))
        );
      }
      var c = (function () {
          function t(t) {
            this.resultSelector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new l(t, this.resultSelector));
            }),
            t
          );
        })(),
        l = (function (t) {
          function e(e, n, r) {
            return (
              void 0 === r && (r = Object.create(null)),
              ((e = t.call(this, e) || this).resultSelector = n),
              (e.iterators = []),
              (e.active = 0),
              (e.resultSelector = "function" == typeof n ? n : void 0),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              var e = this.iterators;
              Object(o.a)(t)
                ? e.push(new f(t))
                : "function" == typeof t[s.a]
                ? e.push(new h(t[s.a]()))
                : e.push(new d(this.destination, this, t));
            }),
            (e.prototype._complete = function () {
              var t = this.iterators,
                e = t.length;
              if ((this.unsubscribe(), 0 !== e)) {
                this.active = e;
                for (var n = 0; n < e; n++) {
                  var r = t[n];
                  r.stillUnsubscribed
                    ? this.destination.add(r.subscribe())
                    : this.active--;
                }
              } else this.destination.complete();
            }),
            (e.prototype.notifyInactive = function () {
              this.active--, 0 === this.active && this.destination.complete();
            }),
            (e.prototype.checkIterators = function () {
              for (
                var t = this.iterators,
                  e = t.length,
                  n = this.destination,
                  r = 0;
                r < e;
                r++
              )
                if ("function" == typeof (s = t[r]).hasValue && !s.hasValue())
                  return;
              var i = !1,
                o = [];
              for (r = 0; r < e; r++) {
                var s,
                  u = (s = t[r]).next();
                if ((s.hasCompleted() && (i = !0), u.done))
                  return void n.complete();
                o.push(u.value);
              }
              this.resultSelector ? this._tryresultSelector(o) : n.next(o),
                i && n.complete();
            }),
            (e.prototype._tryresultSelector = function (t) {
              var e;
              try {
                e = this.resultSelector.apply(this, t);
              } catch (t) {
                return void this.destination.error(t);
              }
              this.destination.next(e);
            }),
            e
          );
        })(e.a),
        h = (function () {
          function t(t) {
            (this.iterator = t), (this.nextResult = t.next());
          }
          return (
            (t.prototype.hasValue = function () {
              return !0;
            }),
            (t.prototype.next = function () {
              var t = this.nextResult;
              return (this.nextResult = this.iterator.next()), t;
            }),
            (t.prototype.hasCompleted = function () {
              var t = this.nextResult;
              return Boolean(t && t.done);
            }),
            t
          );
        })(),
        f = (function () {
          function t(t) {
            (this.array = t),
              (this.index = 0),
              (this.length = 0),
              (this.length = t.length);
          }
          return (
            (t.prototype[s.a] = function () {
              return this;
            }),
            (t.prototype.next = function (t) {
              var e = this.index++,
                n = this.array;
              return e < this.length
                ? { value: n[e], done: !1 }
                : { value: null, done: !0 };
            }),
            (t.prototype.hasValue = function () {
              return this.array.length > this.index;
            }),
            (t.prototype.hasCompleted = function () {
              return this.array.length === this.index;
            }),
            t
          );
        })(),
        d = (function (t) {
          function e(e, n, r) {
            return (
              ((e = t.call(this, e) || this).parent = n),
              (e.observable = r),
              (e.stillUnsubscribed = !0),
              (e.buffer = []),
              (e.isComplete = !1),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype[s.a] = function () {
              return this;
            }),
            (e.prototype.next = function () {
              var t = this.buffer;
              return 0 === t.length && this.isComplete
                ? { value: null, done: !0 }
                : { value: t.shift(), done: !1 };
            }),
            (e.prototype.hasValue = function () {
              return 0 < this.buffer.length;
            }),
            (e.prototype.hasCompleted = function () {
              return 0 === this.buffer.length && this.isComplete;
            }),
            (e.prototype.notifyComplete = function () {
              0 < this.buffer.length
                ? ((this.isComplete = !0), this.parent.notifyInactive())
                : this.destination.complete();
            }),
            (e.prototype.notifyNext = function (t) {
              this.buffer.push(t), this.parent.checkIterators();
            }),
            (e.prototype.subscribe = function () {
              return Object(u.c)(this.observable, new u.a(this));
            }),
            e
          );
        })(u.b);
    },
    1202: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "useState", function () {
          return b;
        }),
        n.d(e, "useReducer", function () {
          return v;
        }),
        n.d(e, "useEffect", function () {
          return g;
        }),
        n.d(e, "useLayoutEffect", function () {
          return y;
        }),
        n.d(e, "useRef", function () {
          return m;
        }),
        n.d(e, "useImperativeHandle", function () {
          return w;
        }),
        n.d(e, "useMemo", function () {
          return _;
        }),
        n.d(e, "useCallback", function () {
          return x;
        }),
        n.d(e, "useContext", function () {
          return k;
        }),
        n.d(e, "useDebugValue", function () {
          return M;
        }),
        n.d(e, "useErrorBoundary", function () {
          return S;
        });
      var r,
        i,
        o,
        s = n(1136),
        u = 0,
        a = [],
        c = s.options.__b,
        l = s.options.__r,
        h = s.options.diffed,
        f = s.options.__c,
        d = s.options.unmount;
      function p(t, e) {
        return (
          s.options.__h && s.options.__h(i, t, u || e),
          (u = 0),
          t >= (e = i.__H || (i.__H = { __: [], __h: [] })).__.length &&
            e.__.push({}),
          e.__[t]
        );
      }
      function b(t) {
        return (u = 1), v(O, t);
      }
      function v(t, e, n) {
        var o = p(r++, 2);
        return (
          (o.t = t),
          o.__c ||
            ((o.__ = [
              n ? n(e) : O(void 0, e),
              function (t) {
                (t = o.t(o.__[0], t)),
                  o.__[0] !== t && ((o.__ = [t, o.__[1]]), o.__c.setState({}));
              },
            ]),
            (o.__c = i)),
          o.__
        );
      }
      function g(t, e) {
        var n = p(r++, 3);
        !s.options.__s &&
          N(n.__H, e) &&
          ((n.__ = t), (n.__H = e), i.__H.__h.push(n));
      }
      function y(t, e) {
        var n = p(r++, 4);
        !s.options.__s &&
          N(n.__H, e) &&
          ((n.__ = t), (n.__H = e), i.__h.push(n));
      }
      function m(t) {
        return (
          (u = 5),
          _(function () {
            return { current: t };
          }, [])
        );
      }
      function w(t, e, n) {
        (u = 6),
          y(
            function () {
              "function" == typeof t ? t(e()) : t && (t.current = e());
            },
            null == n ? n : n.concat(t)
          );
      }
      function _(t, e) {
        var n = p(r++, 7);
        return N(n.__H, e) && ((n.__ = t()), (n.__H = e), (n.__h = t)), n.__;
      }
      function x(t, e) {
        return (
          (u = 8),
          _(function () {
            return t;
          }, e)
        );
      }
      function k(t) {
        var e = i.context[t.__c],
          n = p(r++, 9);
        return (
          (n.__c = t),
          e ? (null == n.__ && ((n.__ = !0), e.sub(i)), e.props.value) : t.__
        );
      }
      function M(t, e) {
        s.options.useDebugValue && s.options.useDebugValue(e ? e(t) : t);
      }
      function S(t) {
        var e = p(r++, 10),
          n = b();
        return (
          (e.__ = t),
          i.componentDidCatch ||
            (i.componentDidCatch = function (t) {
              e.__ && e.__(t), n[1](t);
            }),
          [
            n[0],
            function () {
              n[1](void 0);
            },
          ]
        );
      }
      function E() {
        a.forEach(function (e) {
          if (e.__P)
            try {
              e.__H.__h.forEach(C), e.__H.__h.forEach(I), (e.__H.__h = []);
            } catch (t) {
              (e.__H.__h = []), s.options.__e(t, e.__v);
            }
        }),
          (a = []);
      }
      (s.options.__b = function (t) {
        (i = null), c && c(t);
      }),
        (s.options.__r = function (t) {
          l && l(t),
            (r = 0),
            (t = (i = t.__c).__H) &&
              (t.__h.forEach(C), t.__h.forEach(I), (t.__h = []));
        }),
        (s.options.diffed = function (t) {
          h && h(t),
            (t = t.__c) &&
              t.__H &&
              t.__H.__h.length &&
              ((1 !== a.push(t) && o === s.options.requestAnimationFrame) ||
                (
                  (o = s.options.requestAnimationFrame) ||
                  function (t) {
                    function e() {
                      clearTimeout(r),
                        j && cancelAnimationFrame(n),
                        setTimeout(t);
                    }
                    var n,
                      r = setTimeout(e, 100);
                    j && (n = requestAnimationFrame(e));
                  }
                )(E)),
            (i = void 0);
        }),
        (s.options.__c = function (t, e) {
          e.some(function (n) {
            try {
              n.__h.forEach(C),
                (n.__h = n.__h.filter(function (t) {
                  return !t.__ || I(t);
                }));
            } catch (t) {
              e.some(function (t) {
                t.__h && (t.__h = []);
              }),
                (e = []),
                s.options.__e(t, n.__v);
            }
          }),
            f && f(t, e);
        }),
        (s.options.unmount = function (t) {
          d && d(t);
          var e = t.__c;
          if (e && e.__H)
            try {
              e.__H.__.forEach(C);
            } catch (t) {
              s.options.__e(t, e.__v);
            }
        });
      var j = "function" == typeof requestAnimationFrame;
      function C(t) {
        var e = i;
        "function" == typeof t.__c && t.__c(), (i = e);
      }
      function I(t) {
        var e = i;
        (t.__c = t.__()), (i = e);
      }
      function N(t, e) {
        return (
          !t ||
          t.length !== e.length ||
          e.some(function (e, n) {
            return e !== t[n];
          })
        );
      }
      function O(t, e) {
        return "function" == typeof e ? e(t) : e;
      }
    },
    1203: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return c;
      }),
        n.d(e, "a", function () {
          return l;
        });
      var r = n(113),
        i = 1,
        o = Promise.resolve(),
        s = {};
      function u(t) {
        return t in s && (delete s[t], !0);
      }
      var a = function (t) {
          var e = i++;
          return (
            (s[e] = !0),
            o.then(function () {
              return u(e) && t();
            }),
            e
          );
        },
        c =
          ((e = (function (t) {
            function e(e, n) {
              var r = t.call(this, e, n) || this;
              return (r.scheduler = e), (r.work = n), r;
            }
            return (
              r.__extends(e, t),
              (e.prototype.requestAsyncId = function (e, n, r) {
                return null !== (r = void 0 === r ? 0 : r) && 0 < r
                  ? t.prototype.requestAsyncId.call(this, e, n, r)
                  : (e.actions.push(this),
                    e.scheduled || (e.scheduled = a(e.flush.bind(e, null))));
              }),
              (e.prototype.recycleAsyncId = function (e, n, r) {
                if (
                  (null !== (r = void 0 === r ? 0 : r) && 0 < r) ||
                  (null === r && 0 < this.delay)
                )
                  return t.prototype.recycleAsyncId.call(this, e, n, r);
                0 === e.actions.length &&
                  ((function (t) {
                    u(t);
                  })(n),
                  (e.scheduled = void 0));
              }),
              e
            );
          })(n(1176).a)),
          new ((function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              r.__extends(e, t),
              (e.prototype.flush = function (t) {
                (this.active = !0), (this.scheduled = void 0);
                var e,
                  n = this.actions,
                  r = -1,
                  i = n.length;
                t = t || n.shift();
                do {
                  if ((e = t.execute(t.state, t.delay))) break;
                } while (++r < i && (t = n.shift()));
                if (((this.active = !1), e)) {
                  for (; ++r < i && (t = n.shift()); ) t.unsubscribe();
                  throw e;
                }
              }),
              e
            );
          })(n(1170).a))(e)),
        l = c;
    },
    1204: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return l;
      });
      var r = n(1370),
        i = n(1249),
        o = n(1172),
        s = n(1137),
        u = n(1371),
        a = n(1372),
        c = n(1252),
        l = function (t) {
          if (t && "function" == typeof t[s.a])
            return (
              (l = t),
              function (t) {
                var e = l[s.a]();
                if ("function" != typeof e.subscribe)
                  throw new TypeError(
                    "Provided object does not correctly implement Symbol.observable"
                  );
                return e.subscribe(t);
              }
            );
          if (Object(u.a)(t)) return Object(r.a)(t);
          if (Object(a.a)(t))
            return (
              (n = t),
              function (t) {
                return (
                  n
                    .then(
                      function (e) {
                        t.closed || (t.next(e), t.complete());
                      },
                      function (e) {
                        return t.error(e);
                      }
                    )
                    .then(null, i.a),
                  t
                );
              }
            );
          if (t && "function" == typeof t[o.a])
            return (
              (e = t),
              function (t) {
                for (var n = e[o.a](); ; ) {
                  var r = void 0;
                  try {
                    r = n.next();
                  } catch (n) {
                    return t.error(n), t;
                  }
                  if (r.done) {
                    t.complete();
                    break;
                  }
                  if ((t.next(r.value), t.closed)) break;
                }
                return (
                  "function" == typeof n.return &&
                    t.add(function () {
                      n.return && n.return();
                    }),
                  t
                );
              }
            );
          var e, n, l;
          t = Object(c.a)(t) ? "an invalid object" : "'" + t + "'";
          throw new TypeError(
            "You provided " +
              t +
              " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable."
          );
        };
    },
    1205: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "a", function () {
          return o;
        });
      var r = n(113),
        i =
          ((e = (function (t) {
            function e(e, n) {
              var r = t.call(this, e, n) || this;
              return (r.scheduler = e), (r.work = n), r;
            }
            return (
              r.__extends(e, t),
              (e.prototype.schedule = function (e, n) {
                return 0 < (n = void 0 === n ? 0 : n)
                  ? t.prototype.schedule.call(this, e, n)
                  : ((this.delay = n),
                    (this.state = e),
                    this.scheduler.flush(this),
                    this);
              }),
              (e.prototype.execute = function (e, n) {
                return 0 < n || this.closed
                  ? t.prototype.execute.call(this, e, n)
                  : this._execute(e, n);
              }),
              (e.prototype.requestAsyncId = function (e, n, r) {
                return (null !== (r = void 0 === r ? 0 : r) && 0 < r) ||
                  (null === r && 0 < this.delay)
                  ? t.prototype.requestAsyncId.call(this, e, n, r)
                  : e.flush(this);
              }),
              e
            );
          })(n(1176).a)),
          new ((function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return r.__extends(e, t), e;
          })(n(1170).a))(e)),
        o = i;
    },
    1245: function (t, e, n) {
      "use strict";
      (function (t) {
        var r = n(7),
          i = n(1110),
          o = n(366),
          s = n(367),
          u = n(1126),
          a = n(1107),
          c = n(1108),
          l =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.WalletLinkProvider = void 0);
        var h = l(n(1190)),
          f = n(1164),
          d = l(n(1632)),
          p = n(1640),
          b = n(1641),
          v = n(1642),
          g = ((l = l(n(1189))), n(1644));
        l = (function (e) {
          a(R, e);
          var n,
            l,
            y,
            m,
            w,
            _,
            x,
            k,
            M,
            S,
            E,
            j,
            C,
            I,
            N,
            O,
            A,
            T,
            L = c(R);
          function R(t) {
            var e;
            if (
              (o(this, R),
              ((e = L.call(this))._filterPolyfill = new p.FilterPolyfill(u(e))),
              (e._subscriptionManager = new g.SubscriptionManager(u(e))),
              (e._relay = null),
              (e._addresses = []),
              (e._send = e.send),
              (e._sendAsync = e.sendAsync),
              !t.jsonRpcUrl)
            )
              throw new Error("jsonRpcUrl must be provided");
            return (
              (e._chainId = f.ensureIntNumber(t.chainId || 1)),
              (e._jsonRpcUrl = t.jsonRpcUrl),
              (e._overrideIsMetaMask = t.overrideIsMetaMask),
              (e._relayProvider = t.relayProvider),
              (e._storage = t.storage),
              (e._relayEventManager = t.relayEventManager),
              (t = f.prepend0x(e._chainId.toString(16))),
              e.emit("connect", { chainIdStr: t }),
              !(t = e._storage.getItem("Addresses")) ||
                ("" !== (t = t.split(" "))[0] &&
                  ((e._addresses = t), e.emit("accountsChanged", t))),
              e._subscriptionManager.events.on("notification", function (t) {
                e.emit("message", { type: t.method, data: t.params });
              }),
              0 < e._addresses.length && e.initializeRelay(),
              e
            );
          }
          return (
            s(R, [
              {
                key: "selectedAddress",
                get: function () {
                  return this._addresses[0] || void 0;
                },
              },
              {
                key: "networkVersion",
                get: function () {
                  return this._chainId.toString(10);
                },
              },
              {
                key: "chainId",
                get: function () {
                  return f.prepend0x(this._chainId.toString(16));
                },
              },
              {
                key: "isWalletLink",
                get: function () {
                  return !0;
                },
              },
              {
                key: "isMetaMask",
                get: function () {
                  return this._overrideIsMetaMask;
                },
              },
              {
                key: "host",
                get: function () {
                  return this._jsonRpcUrl;
                },
              },
              {
                key: "connected",
                get: function () {
                  return !0;
                },
              },
              {
                key: "isConnected",
                value: function () {
                  return !0;
                },
              },
              {
                key: "setProviderInfo",
                value: function (t, e) {
                  (this._jsonRpcUrl = t),
                    (this._chainId = f.ensureIntNumber(e)),
                    this.emit("chainChanged", this._chainId);
                },
              },
              {
                key: "setAppInfo",
                value: function (t, e) {
                  this.initializeRelay().then(function (n) {
                    return n.setAppInfo(t, e);
                  });
                },
              },
              {
                key: "enable",
                value:
                  ((T = i(
                    r.mark(function t() {
                      return r.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (0 < this._addresses.length)
                                  return t.abrupt("return", this._addresses);
                                t.next = 2;
                                break;
                              case 2:
                                return (
                                  (t.next = 4),
                                  this._send(
                                    b.JSONRPCMethod.eth_requestAccounts
                                  )
                                );
                              case 4:
                                return t.abrupt("return", t.sent);
                              case 5:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  )),
                  function () {
                    return T.apply(this, arguments);
                  }),
              },
              {
                key: "close",
                value: function () {
                  this.initializeRelay().then(function (t) {
                    return t.resetAndReload();
                  });
                },
              },
              {
                key: "send",
                value: function (t, e) {
                  var n = this;
                  return "string" != typeof t
                    ? "function" == typeof e
                      ? this._sendAsync(t, e)
                      : Array.isArray(t)
                      ? t.map(function (t) {
                          return n._sendRequest(t);
                        })
                      : this._sendRequest(t)
                    : ((e = Array.isArray(e) ? e : void 0 !== e ? [e] : []),
                      this._sendRequestAsync({
                        jsonrpc: "2.0",
                        id: 0,
                        method: t,
                        params: e,
                      }).then(function (t) {
                        return t.result;
                      }));
                },
              },
              {
                key: "sendAsync",
                value: function (t, e) {
                  if ("function" != typeof e)
                    throw new Error("callback is required");
                  var n, r;
                  Array.isArray(t)
                    ? ((n = e),
                      this._sendMultipleRequestsAsync(t)
                        .then(function (t) {
                          return n(null, t);
                        })
                        .catch(function (t) {
                          return n(t, null);
                        }))
                    : ((r = e),
                      this._sendRequestAsync(t)
                        .then(function (t) {
                          return r(null, t);
                        })
                        .catch(function (t) {
                          return r(t, null);
                        }));
                },
              },
              {
                key: "request",
                value:
                  ((A = i(
                    r.mark(function t(e) {
                      var n, i, o, s;
                      return r.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  !e ||
                                  "object" != typeof e ||
                                  Array.isArray(e)
                                )
                                  throw v.ethErrors.rpc.invalidRequest({
                                    message:
                                      "Expected a single, non-array, object argument.",
                                    data: e,
                                  });
                                t.next = 2;
                                break;
                              case 2:
                                if (
                                  ((n = e.method),
                                  (i = e.params),
                                  "string" != typeof n || 0 === n.length)
                                )
                                  throw v.ethErrors.rpc.invalidRequest({
                                    message:
                                      "'args.method' must be a non-empty string.",
                                    data: e,
                                  });
                                t.next = 5;
                                break;
                              case 5:
                                if (
                                  void 0 === i ||
                                  Array.isArray(i) ||
                                  ("object" == typeof i && null !== i)
                                ) {
                                  t.next = 7;
                                  break;
                                }
                                throw v.ethErrors.rpc.invalidRequest({
                                  message:
                                    "'args.params' must be an object or array if provided.",
                                  data: e,
                                });
                              case 7:
                                return (
                                  (o = void 0 === i ? [] : i),
                                  (s = this._relayEventManager.makeRequestId()),
                                  (t.next = 11),
                                  this._sendRequestAsync({
                                    method: n,
                                    params: o,
                                    jsonrpc: "2.0",
                                    id: s,
                                  })
                                );
                              case 11:
                                return (
                                  (s = t.sent), t.abrupt("return", s.result)
                                );
                              case 13:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  )),
                  function (t) {
                    return A.apply(this, arguments);
                  }),
              },
              {
                key: "scanQRCode",
                value:
                  ((O = i(
                    r.mark(function t(e) {
                      var n, i;
                      return r.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this.initializeRelay();
                              case 2:
                                return (
                                  (n = t.sent),
                                  (t.next = 5),
                                  n.scanQRCode(f.ensureRegExpString(e))
                                );
                              case 5:
                                if ("string" != typeof (i = t.sent).result)
                                  throw new Error("result was not a string");
                                t.next = 8;
                                break;
                              case 8:
                                return t.abrupt("return", i.result);
                              case 9:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  )),
                  function (t) {
                    return O.apply(this, arguments);
                  }),
              },
              {
                key: "arbitraryRequest",
                value:
                  ((N = i(
                    r.mark(function t(e) {
                      var n, i;
                      return r.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this.initializeRelay();
                              case 2:
                                return (
                                  (n = t.sent),
                                  (t.next = 5),
                                  n.arbitraryRequest(e)
                                );
                              case 5:
                                if ("string" != typeof (i = t.sent).result)
                                  throw new Error("result was not a string");
                                t.next = 8;
                                break;
                              case 8:
                                return t.abrupt("return", i.result);
                              case 9:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  )),
                  function (t) {
                    return N.apply(this, arguments);
                  }),
              },
              {
                key: "childRequestEthereumAccounts",
                value:
                  ((I = i(
                    r.mark(function t(e, n, i, o, s) {
                      var u;
                      return r.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this.initializeRelay();
                              case 2:
                                return (
                                  (u = t.sent),
                                  (t.next = 5),
                                  u.childRequestEthereumAccounts(e, n, i, o, s)
                                );
                              case 5:
                                return t.abrupt("return", !0);
                              case 6:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  )),
                  function (t, e, n, r, i) {
                    return I.apply(this, arguments);
                  }),
              },
              {
                key: "supportsSubscriptions",
                value: function () {
                  return !1;
                },
              },
              {
                key: "subscribe",
                value: function () {
                  throw new Error("Subscriptions are not supported");
                },
              },
              {
                key: "unsubscribe",
                value: function () {
                  throw new Error("Subscriptions are not supported");
                },
              },
              {
                key: "disconnect",
                value: function () {
                  return !0;
                },
              },
              {
                key: "_sendRequest",
                value: function (t) {
                  var e = { jsonrpc: "2.0", id: t.id },
                    n = t.method;
                  if (
                    ((e.result = this._handleSynchronousMethods(t)),
                    void 0 === e.result)
                  )
                    throw new Error(
                      "WalletLink does not support calling ".concat(
                        n,
                        " synchronously without "
                      ) +
                        "a callback. Please provide a callback parameter to call ".concat(
                          n,
                          " "
                        ) +
                        "asynchronously."
                    );
                  return e;
                },
              },
              {
                key: "_setAddresses",
                value: function (t) {
                  if (!Array.isArray(t))
                    throw new Error("addresses is not an array");
                  (this._addresses = t.map(function (t) {
                    return f.ensureAddressString(t);
                  })),
                    this.emit("accountsChanged", this._addresses),
                    this._storage.setItem("Addresses", t.join(" ")),
                    window.dispatchEvent(
                      new CustomEvent("walletlink:addresses", {
                        detail: this._addresses,
                      })
                    );
                },
              },
              {
                key: "_sendRequestAsync",
                value: function (t) {
                  var e = this;
                  return new Promise(function (n, r) {
                    try {
                      var i = e._handleSynchronousMethods(t);
                      if (void 0 !== i)
                        return n({ jsonrpc: "2.0", id: t.id, result: i });
                      var o = e._handleAsynchronousFilterMethods(t);
                      if (void 0 !== o)
                        return void o
                          .then(function (e) {
                            return n(
                              Object.assign(Object.assign({}, e), { id: t.id })
                            );
                          })
                          .catch(function (t) {
                            return r(t);
                          });
                      var s = e._handleSubscriptionMethods(t);
                      if (void 0 !== s)
                        return void s
                          .then(function (e) {
                            return n({
                              jsonrpc: "2.0",
                              id: t.id,
                              result: e.result,
                            });
                          })
                          .catch(function (t) {
                            return r(t);
                          });
                    } catch (i) {
                      return r(i);
                    }
                    e._handleAsynchronousMethods(t)
                      .then(function (e) {
                        return n(
                          Object.assign(Object.assign({}, e), { id: t.id })
                        );
                      })
                      .catch(function (t) {
                        return r(t);
                      });
                  });
                },
              },
              {
                key: "_sendMultipleRequestsAsync",
                value: function (t) {
                  var e = this;
                  return Promise.all(
                    t.map(function (t) {
                      return e._sendRequestAsync(t);
                    })
                  );
                },
              },
              {
                key: "_handleSynchronousMethods",
                value: function (t) {
                  var e = t.method,
                    n = t.params || [];
                  switch (e) {
                    case b.JSONRPCMethod.eth_accounts:
                      return this._eth_accounts();
                    case b.JSONRPCMethod.eth_coinbase:
                      return this._eth_coinbase();
                    case b.JSONRPCMethod.eth_uninstallFilter:
                      return this._eth_uninstallFilter(n);
                    case b.JSONRPCMethod.net_version:
                      return this._net_version();
                    default:
                      return;
                  }
                },
              },
              {
                key: "_handleAsynchronousMethods",
                value: function (t) {
                  var e = t.method,
                    n = t.params || [];
                  switch (e) {
                    case b.JSONRPCMethod.eth_requestAccounts:
                      return this._eth_requestAccounts();
                    case b.JSONRPCMethod.eth_sign:
                      return this._eth_sign(n);
                    case b.JSONRPCMethod.eth_ecRecover:
                      return this._eth_ecRecover(n);
                    case b.JSONRPCMethod.personal_sign:
                      return this._personal_sign(n);
                    case b.JSONRPCMethod.personal_ecRecover:
                      return this._personal_ecRecover(n);
                    case b.JSONRPCMethod.eth_signTransaction:
                      return this._eth_signTransaction(n);
                    case b.JSONRPCMethod.eth_sendRawTransaction:
                      return this._eth_sendRawTransaction(n);
                    case b.JSONRPCMethod.eth_sendTransaction:
                      return this._eth_sendTransaction(n);
                    case b.JSONRPCMethod.eth_signTypedData_v1:
                      return this._eth_signTypedData_v1(n);
                    case b.JSONRPCMethod.eth_signTypedData_v2:
                      return this._throwUnsupportedMethodError();
                    case b.JSONRPCMethod.eth_signTypedData_v3:
                      return this._eth_signTypedData_v3(n);
                    case b.JSONRPCMethod.eth_signTypedData_v4:
                    case b.JSONRPCMethod.eth_signTypedData:
                      return this._eth_signTypedData_v4(n);
                    case b.JSONRPCMethod.walletlink_arbitrary:
                      return this._walletlink_arbitrary(n);
                  }
                  return window
                    .fetch(this._jsonRpcUrl, {
                      method: "POST",
                      body: JSON.stringify(t),
                      mode: "cors",
                      headers: { "Content-Type": "application/json" },
                    })
                    .then(function (t) {
                      return t.json();
                    })
                    .then(function (t) {
                      if (!t) throw v.ethErrors.rpc.parse({});
                      var e = t;
                      if ((t = e.error)) throw v.serializeError(t);
                      return e;
                    });
                },
              },
              {
                key: "_handleAsynchronousFilterMethods",
                value: function (t) {
                  var e = t.method,
                    n = t.params || [];
                  switch (e) {
                    case b.JSONRPCMethod.eth_newFilter:
                      return this._eth_newFilter(n);
                    case b.JSONRPCMethod.eth_newBlockFilter:
                      return this._eth_newBlockFilter();
                    case b.JSONRPCMethod.eth_newPendingTransactionFilter:
                      return this._eth_newPendingTransactionFilter();
                    case b.JSONRPCMethod.eth_getFilterChanges:
                      return this._eth_getFilterChanges(n);
                    case b.JSONRPCMethod.eth_getFilterLogs:
                      return this._eth_getFilterLogs(n);
                  }
                },
              },
              {
                key: "_handleSubscriptionMethods",
                value: function (t) {
                  switch (t.method) {
                    case b.JSONRPCMethod.eth_subscribe:
                    case b.JSONRPCMethod.eth_unsubscribe:
                      return this._subscriptionManager.handleRequest(t);
                  }
                },
              },
              {
                key: "_isKnownAddress",
                value: function (t) {
                  try {
                    var e = f.ensureAddressString(t);
                    return this._addresses.includes(e);
                  } catch (t) {}
                  return !1;
                },
              },
              {
                key: "_ensureKnownAddress",
                value: function (t) {
                  if (!this._isKnownAddress(t))
                    throw new Error("Unknown Ethereum address");
                },
              },
              {
                key: "_prepareTransactionParams",
                value: function (e) {
                  var n = e.from
                    ? f.ensureAddressString(e.from)
                    : this.selectedAddress;
                  if (!n) throw new Error("Ethereum address is unavailable");
                  return (
                    this._ensureKnownAddress(n),
                    {
                      fromAddress: n,
                      toAddress: e.to ? f.ensureAddressString(e.to) : null,
                      weiValue:
                        null != e.value
                          ? f.ensureBN(e.value)
                          : new h.default(0),
                      data: e.data ? f.ensureBuffer(e.data) : t.alloc(0),
                      nonce:
                        null != e.nonce ? f.ensureIntNumber(e.nonce) : null,
                      gasPriceInWei:
                        null != e.gasPrice ? f.ensureBN(e.gasPrice) : null,
                      gasLimit: null != e.gas ? f.ensureBN(e.gas) : null,
                      chainId: this._chainId,
                    }
                  );
                },
              },
              {
                key: "_requireAuthorization",
                value: function () {
                  if (0 === this._addresses.length)
                    throw v.ethErrors.provider.unauthorized({});
                },
              },
              {
                key: "_throwUnsupportedMethodError",
                value: function () {
                  throw v.ethErrors.provider.unsupportedMethod({});
                },
              },
              {
                key: "_signEthereumMessage",
                value:
                  ((C = i(
                    r.mark(function t(e, n, i, o) {
                      var s;
                      return r.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  this._ensureKnownAddress(n),
                                  (t.prev = 1),
                                  (t.next = 4),
                                  this.initializeRelay()
                                );
                              case 4:
                                return (
                                  (s = t.sent),
                                  (t.next = 7),
                                  s.signEthereumMessage(e, n, i, o)
                                );
                              case 7:
                                return (
                                  (s = t.sent),
                                  t.abrupt("return", {
                                    jsonrpc: "2.0",
                                    id: 0,
                                    result: s.result,
                                  })
                                );
                              case 11:
                                if (
                                  ((t.prev = 11),
                                  (t.t0 = t.catch(1)),
                                  "string" == typeof t.t0.message &&
                                    t.t0.message.match(/(denied|rejected)/i))
                                )
                                  throw v.ethErrors.provider.userRejectedRequest(
                                    "User denied message signature"
                                  );
                                t.next = 15;
                                break;
                              case 15:
                                throw t.t0;
                              case 16:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[1, 11]]
                      );
                    })
                  )),
                  function (t, e, n, r) {
                    return C.apply(this, arguments);
                  }),
              },
              {
                key: "_ethereumAddressFromSignedMessage",
                value:
                  ((j = i(
                    r.mark(function t(e, n, i) {
                      var o;
                      return r.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), this.initializeRelay();
                              case 2:
                                return (
                                  (o = t.sent),
                                  (t.next = 5),
                                  o.ethereumAddressFromSignedMessage(e, n, i)
                                );
                              case 5:
                                return (
                                  (o = t.sent),
                                  t.abrupt("return", {
                                    jsonrpc: "2.0",
                                    id: 0,
                                    result: o.result,
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
                  )),
                  function (t, e, n) {
                    return j.apply(this, arguments);
                  }),
              },
              {
                key: "_eth_accounts",
                value: function () {
                  return this._addresses;
                },
              },
              {
                key: "_eth_coinbase",
                value: function () {
                  return this.selectedAddress || null;
                },
              },
              {
                key: "_net_version",
                value: function () {
                  return this._chainId.toString(10);
                },
              },
              {
                key: "_eth_requestAccounts",
                value:
                  ((E = i(
                    r.mark(function t() {
                      var e, n;
                      return r.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (0 < this._addresses.length)
                                  return t.abrupt(
                                    "return",
                                    Promise.resolve({
                                      jsonrpc: "2.0",
                                      id: 0,
                                      result: this._addresses,
                                    })
                                  );
                                t.next = 2;
                                break;
                              case 2:
                                return (
                                  (t.prev = 2),
                                  (t.next = 5),
                                  this.initializeRelay()
                                );
                              case 5:
                                return (
                                  (n = t.sent),
                                  (t.next = 8),
                                  n.requestEthereumAccounts()
                                );
                              case 8:
                                (e = t.sent), (t.next = 16);
                                break;
                              case 11:
                                if (
                                  ((t.prev = 11),
                                  (t.t0 = t.catch(2)),
                                  "string" == typeof t.t0.message &&
                                    t.t0.message.match(/(denied|rejected)/i))
                                )
                                  throw v.ethErrors.provider.userRejectedRequest(
                                    "User denied account authorization"
                                  );
                                t.next = 15;
                                break;
                              case 15:
                                throw t.t0;
                              case 16:
                                if (e.result) {
                                  t.next = 18;
                                  break;
                                }
                                throw new Error("accounts received is empty");
                              case 18:
                                return (
                                  this._setAddresses(e.result),
                                  t.abrupt("return", {
                                    jsonrpc: "2.0",
                                    id: 0,
                                    result: this._addresses,
                                  })
                                );
                              case 20:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[2, 11]]
                      );
                    })
                  )),
                  function () {
                    return E.apply(this, arguments);
                  }),
              },
              {
                key: "_eth_sign",
                value: function (t) {
                  this._requireAuthorization();
                  var e = f.ensureAddressString(t[0]);
                  t = f.ensureBuffer(t[1]);
                  return this._signEthereumMessage(t, e, !1);
                },
              },
              {
                key: "_eth_ecRecover",
                value: function (t) {
                  var e = f.ensureBuffer(t[0]);
                  t = f.ensureBuffer(t[1]);
                  return this._ethereumAddressFromSignedMessage(e, t, !1);
                },
              },
              {
                key: "_personal_sign",
                value: function (t) {
                  this._requireAuthorization();
                  var e = f.ensureBuffer(t[0]);
                  t = f.ensureAddressString(t[1]);
                  return this._signEthereumMessage(e, t, !0);
                },
              },
              {
                key: "_personal_ecRecover",
                value: function (t) {
                  var e = f.ensureBuffer(t[0]);
                  t = f.ensureBuffer(t[1]);
                  return this._ethereumAddressFromSignedMessage(e, t, !0);
                },
              },
              {
                key: "_eth_signTransaction",
                value:
                  ((S = i(
                    r.mark(function t(e) {
                      var n, i;
                      return r.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  this._requireAuthorization(),
                                  (n = this._prepareTransactionParams(
                                    e[0] || {}
                                  )),
                                  (t.prev = 2),
                                  (t.next = 5),
                                  this.initializeRelay()
                                );
                              case 5:
                                return (
                                  (i = t.sent),
                                  (t.next = 8),
                                  i.signEthereumTransaction(n)
                                );
                              case 8:
                                return (
                                  (i = t.sent),
                                  t.abrupt("return", {
                                    jsonrpc: "2.0",
                                    id: 0,
                                    result: i.result,
                                  })
                                );
                              case 12:
                                if (
                                  ((t.prev = 12),
                                  (t.t0 = t.catch(2)),
                                  "string" == typeof t.t0.message &&
                                    t.t0.message.match(/(denied|rejected)/i))
                                )
                                  throw v.ethErrors.provider.userRejectedRequest(
                                    "User denied transaction signature"
                                  );
                                t.next = 16;
                                break;
                              case 16:
                                throw t.t0;
                              case 17:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[2, 12]]
                      );
                    })
                  )),
                  function (t) {
                    return S.apply(this, arguments);
                  }),
              },
              {
                key: "_eth_sendRawTransaction",
                value:
                  ((M = i(
                    r.mark(function t(e) {
                      var n, i;
                      return r.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (n = f.ensureBuffer(e[0])),
                                  (t.next = 3),
                                  this.initializeRelay()
                                );
                              case 3:
                                return (
                                  (i = t.sent),
                                  (t.next = 6),
                                  i.submitEthereumTransaction(n, this._chainId)
                                );
                              case 6:
                                return (
                                  (i = t.sent),
                                  t.abrupt("return", {
                                    jsonrpc: "2.0",
                                    id: 0,
                                    result: i.result,
                                  })
                                );
                              case 8:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  )),
                  function (t) {
                    return M.apply(this, arguments);
                  }),
              },
              {
                key: "_eth_sendTransaction",
                value:
                  ((k = i(
                    r.mark(function t(e) {
                      var n, i;
                      return r.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  this._requireAuthorization(),
                                  (n = this._prepareTransactionParams(
                                    e[0] || {}
                                  )),
                                  (t.prev = 2),
                                  (t.next = 5),
                                  this.initializeRelay()
                                );
                              case 5:
                                return (
                                  (i = t.sent),
                                  (t.next = 8),
                                  i.signAndSubmitEthereumTransaction(n)
                                );
                              case 8:
                                return (
                                  (i = t.sent),
                                  t.abrupt("return", {
                                    jsonrpc: "2.0",
                                    id: 0,
                                    result: i.result,
                                  })
                                );
                              case 12:
                                if (
                                  ((t.prev = 12),
                                  (t.t0 = t.catch(2)),
                                  "string" == typeof t.t0.message &&
                                    t.t0.message.match(/(denied|rejected)/i))
                                )
                                  throw v.ethErrors.provider.userRejectedRequest(
                                    "User denied transaction signature"
                                  );
                                t.next = 16;
                                break;
                              case 16:
                                throw t.t0;
                              case 17:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[2, 12]]
                      );
                    })
                  )),
                  function (t) {
                    return k.apply(this, arguments);
                  }),
              },
              {
                key: "_eth_signTypedData_v1",
                value:
                  ((x = i(
                    r.mark(function t(e) {
                      var n, i, o;
                      return r.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  this._requireAuthorization(),
                                  (o = f.ensureParsedJSONObject(e[0])),
                                  (n = f.ensureAddressString(e[1])),
                                  this._ensureKnownAddress(n),
                                  (i = d.default.hashForSignTypedDataLegacy({
                                    data: o,
                                  })),
                                  (o = JSON.stringify(o, null, 2)),
                                  t.abrupt(
                                    "return",
                                    this._signEthereumMessage(i, n, !1, o)
                                  )
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
                  )),
                  function (t) {
                    return x.apply(this, arguments);
                  }),
              },
              {
                key: "_eth_signTypedData_v3",
                value:
                  ((_ = i(
                    r.mark(function t(e) {
                      var n, i, o;
                      return r.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  this._requireAuthorization(),
                                  (n = f.ensureAddressString(e[0])),
                                  (o = f.ensureParsedJSONObject(e[1])),
                                  this._ensureKnownAddress(n),
                                  (i = d.default.hashForSignTypedData_v3({
                                    data: o,
                                  })),
                                  (o = JSON.stringify(o, null, 2)),
                                  t.abrupt(
                                    "return",
                                    this._signEthereumMessage(i, n, !1, o)
                                  )
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
                  )),
                  function (t) {
                    return _.apply(this, arguments);
                  }),
              },
              {
                key: "_eth_signTypedData_v4",
                value:
                  ((w = i(
                    r.mark(function t(e) {
                      var n, i, o;
                      return r.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  this._requireAuthorization(),
                                  (n = f.ensureAddressString(e[0])),
                                  (o = f.ensureParsedJSONObject(e[1])),
                                  this._ensureKnownAddress(n),
                                  (i = d.default.hashForSignTypedData_v4({
                                    data: o,
                                  })),
                                  (o = JSON.stringify(o, null, 2)),
                                  t.abrupt(
                                    "return",
                                    this._signEthereumMessage(i, n, !1, o)
                                  )
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
                  )),
                  function (t) {
                    return w.apply(this, arguments);
                  }),
              },
              {
                key: "_walletlink_arbitrary",
                value:
                  ((m = i(
                    r.mark(function t(e) {
                      var n, i;
                      return r.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if ("string" != typeof (n = e[0]))
                                  throw new Error("parameter must be a string");
                                t.next = 3;
                                break;
                              case 3:
                                return (t.next = 5), this.arbitraryRequest(n);
                              case 5:
                                return (
                                  (i = t.sent),
                                  t.abrupt("return", {
                                    jsonrpc: "2.0",
                                    id: 0,
                                    result: i,
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
                  )),
                  function (t) {
                    return m.apply(this, arguments);
                  }),
              },
              {
                key: "_eth_uninstallFilter",
                value: function (t) {
                  return (
                    (t = f.ensureHexString(t[0])),
                    this._filterPolyfill.uninstallFilter(t)
                  );
                },
              },
              {
                key: "_eth_newFilter",
                value:
                  ((y = i(
                    r.mark(function t(e) {
                      var n;
                      return r.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (n = e[0]),
                                  (t.next = 3),
                                  this._filterPolyfill.newFilter(n)
                                );
                              case 3:
                                return (
                                  (n = t.sent),
                                  t.abrupt("return", {
                                    jsonrpc: "2.0",
                                    id: 0,
                                    result: n,
                                  })
                                );
                              case 5:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  )),
                  function (t) {
                    return y.apply(this, arguments);
                  }),
              },
              {
                key: "_eth_newBlockFilter",
                value:
                  ((l = i(
                    r.mark(function t() {
                      var e;
                      return r.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  this._filterPolyfill.newBlockFilter()
                                );
                              case 2:
                                return (
                                  (e = t.sent),
                                  t.abrupt("return", {
                                    jsonrpc: "2.0",
                                    id: 0,
                                    result: e,
                                  })
                                );
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  )),
                  function () {
                    return l.apply(this, arguments);
                  }),
              },
              {
                key: "_eth_newPendingTransactionFilter",
                value:
                  ((n = i(
                    r.mark(function t() {
                      var e;
                      return r.wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.next = 2),
                                  this._filterPolyfill.newPendingTransactionFilter()
                                );
                              case 2:
                                return (
                                  (e = t.sent),
                                  t.abrupt("return", {
                                    jsonrpc: "2.0",
                                    id: 0,
                                    result: e,
                                  })
                                );
                              case 4:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  )),
                  function () {
                    return n.apply(this, arguments);
                  }),
              },
              {
                key: "_eth_getFilterChanges",
                value: function (t) {
                  return (
                    (t = f.ensureHexString(t[0])),
                    this._filterPolyfill.getFilterChanges(t)
                  );
                },
              },
              {
                key: "_eth_getFilterLogs",
                value: function (t) {
                  return (
                    (t = f.ensureHexString(t[0])),
                    this._filterPolyfill.getFilterLogs(t)
                  );
                },
              },
              {
                key: "initializeRelay",
                value: function () {
                  var t = this;
                  return this._relay
                    ? Promise.resolve(this._relay)
                    : this._relayProvider().then(function (e) {
                        return (t._relay = e);
                      });
                },
              },
            ]),
            R
          );
        })(l.default);
        e.WalletLinkProvider = l;
      }.call(this, n(532).Buffer));
    },
    1246: function (t, e, n) {
      "use strict";
      function r() {
        return function (t) {
          return t;
        };
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.RegExpString =
          e.IntNumber =
          e.BigIntString =
          e.AddressString =
          e.HexString =
          e.OpaqueType =
            void 0),
        (e.OpaqueType = r),
        (e.HexString = function (t) {
          return t;
        }),
        (e.AddressString = function (t) {
          return t;
        }),
        (e.BigIntString = function (t) {
          return t;
        }),
        (e.IntNumber = function (t) {
          return Math.floor(t);
        }),
        (e.RegExpString = function (t) {
          return t;
        });
    },
    1247: function (t, e, n) {
      "use strict";
      var r = n(366),
        i = n(367),
        o = n(1107),
        s = n(1108),
        u = n(1360);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.EthereumProviderError = e.EthereumRpcError = void 0);
      var a = n(1361),
        c = (function (t) {
          o(n, t);
          var e = s(n);
          function n(t, i, o) {
            if ((r(this, n), !Number.isInteger(t)))
              throw new Error('"code" must be an integer.');
            if (!i || "string" != typeof i)
              throw new Error('"message" must be a nonempty string.');
            return (
              ((i = e.call(this, i)).code = t), void 0 !== o && (i.data = o), i
            );
          }
          return (
            i(n, [
              {
                key: "serialize",
                value: function () {
                  var t = { code: this.code, message: this.message };
                  return (
                    void 0 !== this.data && (t.data = this.data),
                    this.stack && (t.stack = this.stack),
                    t
                  );
                },
              },
              {
                key: "toString",
                value: function () {
                  return a.default(this.serialize(), l, 2);
                },
              },
            ]),
            n
          );
        })(u(Error));
      function l(t, e) {
        if ("[Circular]" !== e) return e;
      }
      (e.EthereumRpcError = c),
        (e.EthereumProviderError = (function () {
          o(e, c);
          var t = s(e);
          function e(n, i, o) {
            if (
              (r(this, e),
              (s = n),
              !(Number.isInteger(s) && 1e3 <= s && s <= 4999))
            )
              throw new Error(
                '"code" must be an integer such that: 1000 <= code <= 4999'
              );
            var s;
            return t.call(this, n, i, o);
          }
          return e;
        })());
    },
    1248: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.errorValues = e.errorCodes = void 0),
        (e.errorCodes = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603,
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901,
          },
        }),
        (e.errorValues = {
          "-32700": {
            standard: "JSON RPC 2.0",
            message:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          },
          "-32600": {
            standard: "JSON RPC 2.0",
            message: "The JSON sent is not a valid Request object.",
          },
          "-32601": {
            standard: "JSON RPC 2.0",
            message: "The method does not exist / is not available.",
          },
          "-32602": {
            standard: "JSON RPC 2.0",
            message: "Invalid method parameter(s).",
          },
          "-32603": {
            standard: "JSON RPC 2.0",
            message: "Internal JSON-RPC error.",
          },
          "-32000": { standard: "EIP-1474", message: "Invalid input." },
          "-32001": { standard: "EIP-1474", message: "Resource not found." },
          "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
          "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
          "-32004": { standard: "EIP-1474", message: "Method not supported." },
          "-32005": {
            standard: "EIP-1474",
            message: "Request limit exceeded.",
          },
          4001: { standard: "EIP-1193", message: "User rejected the request." },
          4100: {
            standard: "EIP-1193",
            message:
              "The requested account and/or method has not been authorized by the user.",
          },
          4200: {
            standard: "EIP-1193",
            message:
              "The requested method is not supported by this Ethereum provider.",
          },
          4900: {
            standard: "EIP-1193",
            message: "The provider is disconnected from all chains.",
          },
          4901: {
            standard: "EIP-1193",
            message: "The provider is disconnected from the specified chain.",
          },
        });
    },
    1249: function (t, e, n) {
      "use strict";
      function r(t) {
        setTimeout(function () {
          throw t;
        }, 0);
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    1250: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r =
        "function" == typeof Symbol
          ? Symbol("rxSubscriber")
          : "@@rxSubscriber_" + Math.random();
    },
    1251: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r = (function () {
        function t(t) {
          return (
            Error.call(this),
            (this.message = t
              ? t.length +
                " errors occurred during unsubscription:\n" +
                t
                  .map(function (t, e) {
                    return e + 1 + ") " + t.toString();
                  })
                  .join("\n  ")
              : ""),
            (this.name = "UnsubscriptionError"),
            (this.errors = t),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
    },
    1252: function (t, e, n) {
      "use strict";
      function r(t) {
        return null !== t && "object" == typeof t;
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    1253: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = n(1104);
      function i(t) {
        for (; t; ) {
          var e = (i = t).closed,
            n = i.destination,
            i = i.isStopped;
          if (e || i) return !1;
          t = n && n instanceof r.a ? n : null;
        }
        return !0;
      }
    },
    1254: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return c;
        });
      var r = n(113),
        i = n(1112),
        o = n(1106),
        s = ((e = n(1104)), n(1111)),
        u = n(1192),
        a = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (
              (r.source = e),
              (r.subjectFactory = n),
              (r._refCount = 0),
              (r._isComplete = !1),
              r
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._subscribe = function (t) {
              return this.getSubject().subscribe(t);
            }),
            (e.prototype.getSubject = function () {
              var t = this._subject;
              return (
                (t && !t.isStopped) || (this._subject = this.subjectFactory()),
                this._subject
              );
            }),
            (e.prototype.connect = function () {
              var t = this._connection;
              return (
                t ||
                  ((this._isComplete = !1),
                  (t = this._connection = new s.a()).add(
                    this.source.subscribe(new l(this.getSubject(), this))
                  ),
                  t.closed && ((this._connection = null), (t = s.a.EMPTY))),
                t
              );
            }),
            (e.prototype.refCount = function () {
              return Object(u.a)()(this);
            }),
            e
          );
        })(o.a),
        c = (function () {
          var t = a.prototype;
          return {
            operator: { value: null },
            _refCount: { value: 0, writable: !0 },
            _subject: { value: null, writable: !0 },
            _connection: { value: null, writable: !0 },
            _subscribe: { value: t._subscribe },
            _isComplete: { value: t._isComplete, writable: !0 },
            getSubject: { value: t.getSubject },
            connect: { value: t.connect },
            refCount: { value: t.refCount },
          };
        })(),
        l = (function (t) {
          function e(e, n) {
            return ((e = t.call(this, e) || this).connectable = n), e;
          }
          return (
            r.__extends(e, t),
            (e.prototype._error = function (e) {
              this._unsubscribe(), t.prototype._error.call(this, e);
            }),
            (e.prototype._complete = function () {
              (this.connectable._isComplete = !0),
                this._unsubscribe(),
                t.prototype._complete.call(this);
            }),
            (e.prototype._unsubscribe = function () {
              var t,
                e = this.connectable;
              e &&
                ((this.connectable = null),
                (t = e._connection),
                (e._refCount = 0),
                (e._subject = null),
                (e._connection = null),
                t && t.unsubscribe());
            }),
            e
          );
        })(i.b);
      e.a;
    },
    1255: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var r = n(113),
        i = ((e = n(1112)), n(1167)),
        o = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (n._value = e), n;
          }
          return (
            r.__extends(e, t),
            Object.defineProperty(e.prototype, "value", {
              get: function () {
                return this.getValue();
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype._subscribe = function (e) {
              var n = t.prototype._subscribe.call(this, e);
              return n && !n.closed && e.next(this._value), n;
            }),
            (e.prototype.getValue = function () {
              if (this.hasError) throw this.thrownError;
              if (this.closed) throw new i.a();
              return this._value;
            }),
            (e.prototype.next = function (e) {
              t.prototype.next.call(this, (this._value = e));
            }),
            e
          );
        })(e.a);
    },
    1256: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "a", function () {
          return u;
        });
      var r = n(113),
        i = ((e = n(1104)), n(1149));
      function o(t, e) {
        return (
          void 0 === e && (e = 0),
          function (n) {
            return n.lift(new s(t, e));
          }
        );
      }
      var s = (function () {
          function t(t, e) {
            void 0 === e && (e = 0), (this.scheduler = t), (this.delay = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new u(t, this.scheduler, this.delay));
            }),
            t
          );
        })(),
        u = (function (t) {
          function e(e, n, r) {
            return (
              void 0 === r && (r = 0),
              ((e = t.call(this, e) || this).scheduler = n),
              (e.delay = r),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.dispatch = function (t) {
              var e = t.notification;
              t = t.destination;
              e.observe(t), this.unsubscribe();
            }),
            (e.prototype.scheduleMessage = function (t) {
              this.destination.add(
                this.scheduler.schedule(
                  e.dispatch,
                  this.delay,
                  new a(t, this.destination)
                )
              );
            }),
            (e.prototype._next = function (t) {
              this.scheduleMessage(i.a.createNext(t));
            }),
            (e.prototype._error = function (t) {
              this.scheduleMessage(i.a.createError(t)), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.scheduleMessage(i.a.createComplete()), this.unsubscribe();
            }),
            e
          );
        })(e.a),
        a = function (t, e) {
          (this.notification = t), (this.destination = e);
        };
    },
    1257: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var r = n(1106),
        i = n(1111);
      function o(t, e) {
        return new r.a(function (n) {
          var r = new i.a(),
            o = 0;
          return (
            r.add(
              e.schedule(function () {
                o !== t.length
                  ? (n.next(t[o++]), n.closed || r.add(this.schedule()))
                  : n.complete();
              })
            ),
            r
          );
        });
      }
    },
    1258: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r = (function () {
        function t(e, n) {
          void 0 === n && (n = t.now),
            (this.SchedulerAction = e),
            (this.now = n);
        }
        return (
          (t.prototype.schedule = function (t, e, n) {
            return (
              void 0 === e && (e = 0),
              new this.SchedulerAction(this, t).schedule(n, e)
            );
          }),
          (t.now = function () {
            return Date.now();
          }),
          t
        );
      })();
    },
    1259: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r = (function () {
        function t() {
          return (
            Error.call(this),
            (this.message = "Timeout has occurred"),
            (this.name = "TimeoutError"),
            this
          );
        }
        return (t.prototype = Object.create(Error.prototype)), t;
      })();
    },
    1260: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = n(1198);
      function i() {
        return Object(r.a)(1);
      }
    },
    1261: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return u;
      });
      var r = n(1106),
        i = n(1119),
        o = n(1198),
        s = n(1169);
      function u() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = Number.POSITIVE_INFINITY,
          u = null,
          a = t[t.length - 1];
        return (
          Object(i.a)(a)
            ? ((u = t.pop()),
              1 < t.length &&
                "number" == typeof t[t.length - 1] &&
                (n = t.pop()))
            : "number" == typeof a && (n = t.pop()),
          null === u && 1 === t.length && t[0] instanceof r.a
            ? t[0]
            : Object(o.a)(n)(Object(s.a)(t, u))
        );
      }
    },
    1262: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return u;
      });
      var r = n(113),
        i = n(1114),
        o = n(1169),
        s = ((e = n(1138)), n(1140));
      function u() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        if (1 === t.length) {
          if (!Object(i.a)(t[0])) return t[0];
          t = t[0];
        }
        return Object(o.a)(t, void 0).lift(new a());
      }
      var a = (function () {
          function t() {}
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new c(t));
            }),
            t
          );
        })(),
        c = (function (t) {
          function e(e) {
            return (
              ((e = t.call(this, e) || this).hasFirst = !1),
              (e.observables = []),
              (e.subscriptions = []),
              e
            );
          }
          return (
            r.__extends(e, t),
            (e.prototype._next = function (t) {
              this.observables.push(t);
            }),
            (e.prototype._complete = function () {
              var t = this.observables,
                e = t.length;
              if (0 === e) this.destination.complete();
              else {
                for (var n = 0; n < e && !this.hasFirst; n++) {
                  var r = t[n];
                  r = Object(s.a)(this, r, void 0, n);
                  this.subscriptions && this.subscriptions.push(r), this.add(r);
                }
                this.observables = null;
              }
            }),
            (e.prototype.notifyNext = function (t, e, n) {
              if (!this.hasFirst) {
                this.hasFirst = !0;
                for (var r, i = 0; i < this.subscriptions.length; i++)
                  i !== n &&
                    ((r = this.subscriptions[i]).unsubscribe(), this.remove(r));
                this.subscriptions = null;
              }
              this.destination.next(e);
            }),
            e
          );
        })(e.a);
    },
    1263: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return u;
      });
      var r = n(1106),
        i = n(1113),
        o = n(1200),
        s = n(1119);
      function u(t, e, n) {
        void 0 === t && (t = 0);
        var u = -1;
        return (
          Object(o.a)(e)
            ? (u = Number(e) < 1 ? 1 : Number(e))
            : Object(s.a)(e) && (n = e),
          Object(s.a)(n) || (n = i.a),
          new r.a(function (e) {
            var r = Object(o.a)(t) ? t : +t - n.now();
            return n.schedule(a, r, { index: 0, period: u, subscriber: e });
          })
        );
      }
      function a(t) {
        var e = t.index,
          n = t.period,
          r = t.subscriber;
        if ((r.next(e), !r.closed)) {
          if (-1 === n) return r.complete();
          (t.index = e + 1), this.schedule(t, n);
        }
      }
    },
    1264: function (t, e, n) {
      "use strict";
      n.r(e),
        (e.default = function () {
          for (var t, e, n = 0, r = ""; n < arguments.length; )
            (t = arguments[n++]) &&
              (e = (function t(e) {
                var n,
                  r,
                  i = "";
                if ("string" == typeof e || "number" == typeof e) i += e;
                else if ("object" == typeof e)
                  if (Array.isArray(e))
                    for (n = 0; n < e.length; n++)
                      e[n] && (r = t(e[n])) && (i && (i += " "), (i += r));
                  else for (n in e) e[n] && (i && (i += " "), (i += n));
                return i;
              })(t)) &&
              (r && (r += " "), (r += e));
          return r;
        });
    },
    1265: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.RelayMessageType = void 0),
        ((e =
          e.RelayMessageType || (e.RelayMessageType = {})).SESSION_ID_REQUEST =
          "SESSION_ID_REQUEST"),
        (e.SESSION_ID_RESPONSE = "SESSION_ID_RESPONSE"),
        (e.LINKED = "LINKED"),
        (e.UNLINKED = "UNLINKED"),
        (e.WEB3_REQUEST = "WEB3_REQUEST"),
        (e.WEB3_REQUEST_CANCELED = "WEB3_REQUEST_CANCELED"),
        (e.WEB3_RESPONSE = "WEB3_RESPONSE");
    },
    1266: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return l;
      });
      var r = n(1106),
        i = n(1111),
        o = n(1137),
        s = n(1257),
        u = n(1172),
        a = n(1372),
        c = n(1371);
      function l(t, e) {
        if (null != t) {
          if ((d = t) && "function" == typeof d[o.a])
            return (
              (h = t),
              (f = e),
              new r.a(function (t) {
                var e = new i.a();
                return (
                  e.add(
                    f.schedule(function () {
                      var n = h[o.a]();
                      e.add(
                        n.subscribe({
                          next: function (n) {
                            e.add(
                              f.schedule(function () {
                                return t.next(n);
                              })
                            );
                          },
                          error: function (n) {
                            e.add(
                              f.schedule(function () {
                                return t.error(n);
                              })
                            );
                          },
                          complete: function () {
                            e.add(
                              f.schedule(function () {
                                return t.complete();
                              })
                            );
                          },
                        })
                      );
                    })
                  ),
                  e
                );
              })
            );
          if (Object(a.a)(t))
            return (
              (n = t),
              (l = e),
              new r.a(function (t) {
                var e = new i.a();
                return (
                  e.add(
                    l.schedule(function () {
                      return n.then(
                        function (n) {
                          e.add(
                            l.schedule(function () {
                              t.next(n),
                                e.add(
                                  l.schedule(function () {
                                    return t.complete();
                                  })
                                );
                            })
                          );
                        },
                        function (n) {
                          e.add(
                            l.schedule(function () {
                              return t.error(n);
                            })
                          );
                        }
                      );
                    })
                  ),
                  e
                );
              })
            );
          if (Object(c.a)(t)) return Object(s.a)(t, e);
          if (((d = t) && "function" == typeof d[u.a]) || "string" == typeof t)
            return (function (t, e) {
              if (!t) throw new Error("Iterable cannot be null");
              return new r.a(function (n) {
                var r,
                  o = new i.a();
                return (
                  o.add(function () {
                    r && "function" == typeof r.return && r.return();
                  }),
                  o.add(
                    e.schedule(function () {
                      (r = t[u.a]()),
                        o.add(
                          e.schedule(function () {
                            if (!n.closed) {
                              try {
                                var t = r.next(),
                                  e = t.value,
                                  i = t.done;
                              } catch (t) {
                                return void n.error(t);
                              }
                              i ? n.complete() : (n.next(e), this.schedule());
                            }
                          })
                        );
                    })
                  ),
                  o
                );
              });
            })(t, e);
        }
        var n, l, h, f, d;
        throw new TypeError(
          ((null !== t && typeof t) || t) + " is not observable"
        );
      }
    },
    1365: function (t, e, n) {
      (function (e) {
        var r = n(1633),
          i = n(1190);
        function o(t) {
          return e.allocUnsafe(t).fill(0);
        }
        function s(t, e, n) {
          var r = o(e);
          return (
            (t = u(t)),
            n
              ? t.length < e
                ? (t.copy(r), r)
                : t.slice(0, e)
              : t.length < e
              ? (t.copy(r, e - t.length), r)
              : t.slice(-e)
          );
        }
        function u(t) {
          if (!e.isBuffer(t))
            if (Array.isArray(t)) t = e.from(t);
            else if ("string" == typeof t)
              t = a(t)
                ? e.from((n = c(t)).length % 2 ? "0" + n : n, "hex")
                : e.from(t);
            else if ("number" == typeof t) t = intToBuffer(t);
            else if (null == t) t = e.allocUnsafe(0);
            else if (i.isBN(t)) t = t.toArrayLike(e);
            else {
              if (!t.toArray) throw new Error("invalid type");
              t = e.from(t.toArray());
            }
          var n;
          return t;
        }
        function a(t) {
          return "string" == typeof t && t.match(/^0x[0-9A-Fa-f]*$/);
        }
        function c(t) {
          return "string" == typeof t && t.startsWith("0x") ? t.slice(2) : t;
        }
        t.exports = {
          zeros: o,
          setLength: s,
          setLengthRight: function (t, e) {
            return s(t, e, !0);
          },
          isHexString: a,
          stripHexPrefix: c,
          toBuffer: u,
          bufferToHex: function (t) {
            return "0x" + (t = u(t)).toString("hex");
          },
          keccak: function (t, e) {
            return (
              (t = u(t)),
              r("keccak" + (e = e || 256))
                .update(t)
                .digest()
            );
          },
        };
      }.call(this, n(532).Buffer));
    },
    1366: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.serializeError =
          e.isValidCode =
          e.getMessageFromCode =
          e.JSON_RPC_SERVER_ERROR_MESSAGE =
            void 0);
      var r = n(1248),
        i = n(1247),
        o = { code: (n = r.errorCodes.rpc.internal), message: s(n) };
      function s(t) {
        var n =
          1 < arguments.length && void 0 !== arguments[1]
            ? arguments[1]
            : "Unspecified error message. This is a bug, please report it.";
        if (Number.isInteger(t)) {
          var i = t.toString();
          if (l(r.errorValues, i)) return r.errorValues[i].message;
          if (a(t)) return e.JSON_RPC_SERVER_ERROR_MESSAGE;
        }
        return n;
      }
      function u(t) {
        if (!Number.isInteger(t)) return !1;
        var e = t.toString();
        return !!r.errorValues[e] || !!a(t);
      }
      function a(t) {
        return -32099 <= t && t <= -32e3;
      }
      function c(t) {
        return t && "object" == typeof t && !Array.isArray(t)
          ? Object.assign({}, t)
          : t;
      }
      function l(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }
      (e.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error."),
        (e.getMessageFromCode = s),
        (e.isValidCode = u),
        (e.serializeError = function (t) {
          var e =
              void 0 ===
              (a = (n =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}).fallbackError)
                ? o
                : a,
            n = void 0 !== (a = n.shouldIncludeStack) && a;
          if (!e || !Number.isInteger(e.code) || "string" != typeof e.message)
            throw new Error(
              "Must provide fallback error with integer number code and string message."
            );
          if (t instanceof i.EthereumRpcError) return t.serialize();
          var r,
            a = {};
          return (
            t &&
            "object" == typeof t &&
            !Array.isArray(t) &&
            l(t, "code") &&
            u(t.code)
              ? ((a.code = (r = t).code),
                r.message && "string" == typeof r.message
                  ? ((a.message = r.message), l(r, "data") && (a.data = r.data))
                  : ((a.message = s(a.code)),
                    (a.data = { originalError: c(t) })))
              : ((a.code = e.code),
                (r = null === t || void 0 === t ? void 0 : t.message),
                (a.message = r && "string" == typeof r ? r : e.message),
                (a.data = { originalError: c(t) })),
            (e = null === t || void 0 === t ? void 0 : t.stack),
            n && t && e && "string" == typeof e && (a.stack = e),
            a
          );
        });
    },
    1367: function (t, e, n) {
      "use strict";
      var r = n(366),
        i = n(367),
        o =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.WalletLink = void 0);
      var s = o(n(533)),
        u = n(1645),
        a = n(1245),
        c = n(1646),
        l = n(1663),
        h = n(1676),
        f = n(1164),
        d =
          Object({
            NODE_ENV: "production",
            PUBLIC_URL: ".",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            FAST_REFRESH: !0,
            REACT_APP_ENV: "production",
            REACT_APP_INFURA_KEY: "099fc58e0de9451d80b18d7c74caa7c1",
            REACT_APP_PORTIS_ID: "c0e2bf01-4b08-4fd5-ac7b-8e26b58cd236",
            REACT_APP_FORTMATIC_KEY: "pk_live_F937DF033A1666BF",
            REACT_APP_GOOGLE_ANALYTICS_ID: "UA-128182339-4",
            REACT_APP_WALLETCONNECT_BRIDGE_URL:
              "https://uniswap.bridge.walletconnect.org",
          }).WALLETLINK_URL || "https://www.walletlink.org",
        p =
          Object({
            NODE_ENV: "production",
            PUBLIC_URL: ".",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            FAST_REFRESH: !0,
            REACT_APP_ENV: "production",
            REACT_APP_INFURA_KEY: "099fc58e0de9451d80b18d7c74caa7c1",
            REACT_APP_PORTIS_ID: "c0e2bf01-4b08-4fd5-ac7b-8e26b58cd236",
            REACT_APP_FORTMATIC_KEY: "pk_live_F937DF033A1666BF",
            REACT_APP_GOOGLE_ANALYTICS_ID: "UA-128182339-4",
            REACT_APP_WALLETCONNECT_BRIDGE_URL:
              "https://uniswap.bridge.walletconnect.org",
          }).WALLETLINK_VERSION ||
          n(1677).version ||
          "unknown";
      n = (function () {
        function t(e) {
          r(this, t),
            (this._appName = ""),
            (this._appLogoUrl = null),
            (this._relay = null),
            (this._relayEventManager = null);
          var n = e.walletLinkUrl || d,
            i =
              e.walletLinkUIConstructor ||
              function (t) {
                return new c.WalletLinkSdkUI(t);
              };
          void 0 === e.overrideIsMetaMask
            ? (this._overrideIsMetaMask = !1)
            : (this._overrideIsMetaMask = e.overrideIsMetaMask);
          var o = s.default.parse(n);
          o = "".concat(o.protocol, "//").concat(o.host);
          (this._storage = new u.ScopedLocalStorage("-walletlink:".concat(o))),
            this._storage.setItem("version", t.VERSION),
            void 0 === window.walletLinkExtension &&
              ((this._relayEventManager = new h.WalletLinkRelayEventManager()),
              (this._relay = new l.WalletLinkRelay({
                walletLinkUrl: n,
                version: p,
                darkMode: !!e.darkMode,
                walletLinkUIConstructor: i,
                storage: this._storage,
                relayEventManager: this._relayEventManager,
              })),
              this.setAppInfo(e.appName, e.appLogoUrl),
              this._relay.attachUI());
        }
        return (
          i(t, [
            {
              key: "makeWeb3Provider",
              value: function (t) {
                var e =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : 1;
                if (void 0 !== window.walletLinkExtension)
                  return (
                    ("boolean" == typeof window.walletLinkExtension.isCipher &&
                      window.walletLinkExtension.isCipher) ||
                      window.walletLinkExtension.setProviderInfo(t, e),
                    window.walletLinkExtension
                  );
                var n = this._relay;
                if (!n || !this._relayEventManager || !this._storage)
                  throw new Error("Relay not initialized, should never happen");
                return new a.WalletLinkProvider({
                  relayProvider: function () {
                    return Promise.resolve(n);
                  },
                  relayEventManager: this._relayEventManager,
                  storage: this._storage,
                  jsonRpcUrl: t,
                  chainId: e,
                  overrideIsMetaMask: this._overrideIsMetaMask,
                });
              },
            },
            {
              key: "setAppInfo",
              value: function (t, e) {
                (this._appName = t || "DApp"),
                  (this._appLogoUrl = e || f.getFavicon()),
                  void 0 !== window.walletLinkExtension
                    ? ("boolean" ==
                        typeof window.walletLinkExtension.isCipher &&
                        window.walletLinkExtension.isCipher) ||
                      window.walletLinkExtension.setAppInfo(
                        this._appName,
                        this._appLogoUrl
                      )
                    : null !== (e = this._relay) &&
                      void 0 !== e &&
                      e.setAppInfo(this._appName, this._appLogoUrl);
              },
            },
            {
              key: "disconnect",
              value: function () {
                var t;
                void 0 !== window.walletLinkExtension
                  ? window.walletLinkExtension.close()
                  : null !== (t = this._relay) &&
                    void 0 !== t &&
                    t.resetAndReload();
              },
            },
          ]),
          t
        );
      })();
      (e.WalletLink = n).VERSION = p;
    },
    1368: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var r = n(1165),
        i = n(1249),
        o = {
          closed: !0,
          next: function (t) {},
          error: function (t) {
            if (r.a.useDeprecatedSynchronousErrorHandling) throw t;
            Object(i.a)(t);
          },
          complete: function () {},
        };
    },
    1369: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = n(113),
        i = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (r.subject = e), (r.subscriber = n), (r.closed = !1), r;
          }
          return (
            r.__extends(e, t),
            (e.prototype.unsubscribe = function () {
              var t, e;
              this.closed ||
                ((this.closed = !0),
                (t = (e = this.subject).observers),
                (this.subject = null),
                !t ||
                  0 === t.length ||
                  e.isStopped ||
                  e.closed ||
                  (-1 !== (e = t.indexOf(this.subscriber)) && t.splice(e, 1)));
            }),
            e
          );
        })(n(1111).a);
    },
    1370: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r = function (t) {
        return function (e) {
          for (var n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
          e.complete();
        };
      };
    },
    1371: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r = function (t) {
        return t && "number" == typeof t.length && "function" != typeof t;
      };
    },
    1372: function (t, e, n) {
      "use strict";
      function r(t) {
        return (
          !!t && "function" != typeof t.subscribe && "function" == typeof t.then
        );
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    1373: function (t, e, n) {
      "use strict";
      function r(t, e) {
        function n() {
          return !n.pred.apply(n.thisArg, arguments);
        }
        return (n.pred = t), (n.thisArg = e), n;
      }
      n.d(e, "a", function () {
        return r;
      });
    },
    1374: function (t, e, n) {
      "use strict";
      (function (t) {
        var r = n(1121),
          i =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.QRCode = void 0);
        var o = n(1136),
          s = n(1202),
          u = i(n(1653));
        e.QRCode = function (e) {
          var n = s.useState(""),
            i = r(n, 2),
            a = ((n = i[0]), i[1]);
          return (
            s.useEffect(function () {
              var n = new u.default({
                content: e.content,
                background: e.bgColor || "#ffffff",
                color: e.fgColor || "#000000",
                container: "svg",
                ecl: "M",
                width: null !== (n = e.width) && void 0 !== n ? n : 256,
                height: null !== (n = e.height) && void 0 !== n ? n : 256,
                padding: 0,
                image: e.image,
              });
              n = t.from(n.svg(), "utf8").toString("base64");
              a("data:image/svg+xml;base64,".concat(n));
            }),
            n ? o.h("img", { src: n, alt: "QR Code" }) : null
          );
        };
      }.call(this, n(532).Buffer));
    },
    1375: function (t, e, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Spinner = void 0);
      var i = n(1136),
        o = r(n(1654));
      e.Spinner = function (t) {
        var e = null !== (e = t.size) && void 0 !== e ? e : 64;
        t = t.color || "#000";
        return i.h(
          "div",
          { class: "-walletlink-spinner" },
          i.h("style", null, o.default),
          i.h(
            "svg",
            {
              viewBox: "0 0 100 100",
              xmlns: "http://www.w3.org/2000/svg",
              style: { width: e, height: e },
            },
            i.h("circle", { style: { cx: 50, cy: 50, r: 45, stroke: t } })
          )
        );
      };
    },
    1376: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Web3Method = void 0),
        ((e = e.Web3Method || (e.Web3Method = {})).requestEthereumAccounts =
          "requestEthereumAccounts"),
        (e.signEthereumMessage = "signEthereumMessage"),
        (e.signEthereumTransaction = "signEthereumTransaction"),
        (e.submitEthereumTransaction = "submitEthereumTransaction"),
        (e.ethereumAddressFromSignedMessage =
          "ethereumAddressFromSignedMessage"),
        (e.scanQRCode = "scanQRCode"),
        (e.arbitrary = "arbitrary"),
        (e.childRequestEthereumAccounts = "childRequestEthereumAccounts");
    },
    1632: function (t, e, n) {
      (function (e) {
        var r = n(301),
          i = n(1121),
          o = n(1365),
          s = n(1639),
          u = {
            type: "object",
            properties: {
              types: {
                type: "object",
                additionalProperties: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      name: { type: "string" },
                      type: { type: "string" },
                    },
                    required: ["name", "type"],
                  },
                },
              },
              primaryType: { type: "string" },
              domain: { type: "object" },
              message: { type: "object" },
            },
            required: ["types", "primaryType", "domain", "message"],
          },
          a = {
            encodeData: function (t, n, u) {
              var a = this,
                c =
                  !(3 < arguments.length && void 0 !== arguments[3]) ||
                  arguments[3],
                l = ["bytes32"],
                h = [this.hashType(t, u)];
              if (c) {
                function f(t, n, r) {
                  if (void 0 !== u[n])
                    return [
                      "bytes32",
                      null == r
                        ? "0x0000000000000000000000000000000000000000000000000000000000000000"
                        : o.keccak(a.encodeData(n, r, u, c)),
                    ];
                  if (void 0 === r)
                    throw new Error(
                      "missing value for field "
                        .concat(t, " of type ")
                        .concat(n)
                    );
                  if ("bytes" === n) return ["bytes32", o.keccak(r)];
                  if ("string" === n)
                    return (
                      "string" == typeof r && (r = e.from(r, "utf8")),
                      ["bytes32", o.keccak(r)]
                    );
                  if (n.lastIndexOf("]") !== n.length - 1) return [n, r];
                  var l = n.slice(0, n.lastIndexOf("["));
                  r = r.map(function (e) {
                    return f(t, l, e);
                  });
                  return [
                    "bytes32",
                    o.keccak(
                      s.rawEncode(
                        r.map(function (t) {
                          return i(t, 1)[0];
                        }),
                        r.map(function (t) {
                          return i(t, 2)[1];
                        })
                      )
                    ),
                  ];
                }
                var d,
                  p = r(u[t]);
                try {
                  for (p.s(); !(d = p.n()).done; ) {
                    var b = d.value,
                      v = f(b.name, b.type, n[b.name]),
                      g = i(v, 2),
                      y = g[0],
                      m = g[1];
                    l.push(y), h.push(m);
                  }
                } catch (t) {
                  p.e(t);
                } finally {
                  p.f();
                }
              } else {
                var w,
                  _ = r(u[t]);
                try {
                  for (_.s(); !(w = _.n()).done; ) {
                    var x = w.value,
                      k = n[x.name];
                    if (void 0 !== k)
                      if ("bytes" === x.type)
                        l.push("bytes32"), (k = o.keccak(k)), h.push(k);
                      else if ("string" === x.type)
                        l.push("bytes32"),
                          "string" == typeof k && (k = e.from(k, "utf8")),
                          (k = o.keccak(k)),
                          h.push(k);
                      else if (void 0 !== u[x.type])
                        l.push("bytes32"),
                          (k = o.keccak(this.encodeData(x.type, k, u, c))),
                          h.push(k);
                      else {
                        if (x.type.lastIndexOf("]") === x.type.length - 1)
                          throw new Error(
                            "Arrays currently unimplemented in encodeData"
                          );
                        l.push(x.type), h.push(k);
                      }
                  }
                } catch (t) {
                  _.e(t);
                } finally {
                  _.f();
                }
              }
              return s.rawEncode(l, h);
            },
            encodeType: function (t, e) {
              var n,
                i = "",
                o = this.findTypeDependencies(t, e).filter(function (e) {
                  return e !== t;
                }),
                s = ((o = [t].concat(o.sort())), r(o));
              try {
                for (s.s(); !(n = s.n()).done; ) {
                  var u = n.value;
                  if (!e[u])
                    throw new Error("No type definition specified: " + u);
                  i +=
                    u +
                    "(" +
                    e[u]
                      .map(function (t) {
                        var e = t.name;
                        return t.type + " " + e;
                      })
                      .join(",") +
                    ")";
                }
              } catch (e) {
                s.e(e);
              } finally {
                s.f();
              }
              return i;
            },
            findTypeDependencies: function (t, e) {
              var n =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : [];
              if (((t = t.match(/^\w*/)[0]), n.includes(t) || void 0 === e[t]))
                return n;
              n.push(t);
              var i,
                o = r(e[t]);
              try {
                for (o.s(); !(i = o.n()).done; ) {
                  var s,
                    u = i.value,
                    a = r(this.findTypeDependencies(u.type, e, n));
                  try {
                    for (a.s(); !(s = a.n()).done; ) {
                      var c = s.value;
                      n.includes(c) || n.push(c);
                    }
                  } catch (t) {
                    a.e(t);
                  } finally {
                    a.f();
                  }
                }
              } catch (t) {
                o.e(t);
              } finally {
                o.f();
              }
              return n;
            },
            hashStruct: function (t, e, n) {
              return o.keccak(
                this.encodeData(
                  t,
                  e,
                  n,
                  !(3 < arguments.length && void 0 !== arguments[3]) ||
                    arguments[3]
                )
              );
            },
            hashType: function (t, e) {
              return o.keccak(this.encodeType(t, e));
            },
            sanitizeData: function (t) {
              var e,
                n = {};
              for (e in u.properties) t[e] && (n[e] = t[e]);
              return (
                n.types &&
                  (n.types = Object.assign({ EIP712Domain: [] }, n.types)),
                n
              );
            },
            hash: function (t) {
              var n =
                  !(1 < arguments.length && void 0 !== arguments[1]) ||
                  arguments[1],
                r = this.sanitizeData(t),
                i = [e.from("1901", "hex")];
              return (
                i.push(this.hashStruct("EIP712Domain", r.domain, r.types, n)),
                "EIP712Domain" !== r.primaryType &&
                  i.push(this.hashStruct(r.primaryType, r.message, r.types, n)),
                o.keccak(e.concat(i))
              );
            },
          };
        t.exports = {
          TYPED_MESSAGE_SCHEMA: u,
          TypedDataUtils: a,
          hashForSignTypedDataLegacy: function (t) {
            return (function (t) {
              var e = new Error("Expect argument to be non-empty array");
              if ("object" != typeof t || !t.length) throw e;
              var n = t.map(function (t) {
                  return "bytes" === t.type ? o.toBuffer(t.value) : t.value;
                }),
                r = t.map(function (t) {
                  return t.type;
                }),
                i = t.map(function (t) {
                  if (!t.name) throw e;
                  return t.type + " " + t.name;
                });
              return s.soliditySHA3(
                ["bytes32", "bytes32"],
                [
                  s.soliditySHA3(new Array(t.length).fill("string"), i),
                  s.soliditySHA3(r, n),
                ]
              );
            })(t.data);
          },
          hashForSignTypedData_v3: function (t) {
            return a.hash(t.data, !1);
          },
          hashForSignTypedData_v4: function (t) {
            return a.hash(t.data);
          },
        };
      }.call(this, n(532).Buffer));
    },
    1633: function (t, e, n) {
      t.exports = n(1634)(n(1637));
    },
    1634: function (t, e, n) {
      var r = n(1635),
        i = n(1636);
      t.exports = function (t) {
        var e = r(t),
          n = i(t);
        return function (t, r) {
          switch ("string" == typeof t ? t.toLowerCase() : t) {
            case "keccak224":
              return new e(1152, 448, null, 224, r);
            case "keccak256":
              return new e(1088, 512, null, 256, r);
            case "keccak384":
              return new e(832, 768, null, 384, r);
            case "keccak512":
              return new e(576, 1024, null, 512, r);
            case "sha3-224":
              return new e(1152, 448, 6, 224, r);
            case "sha3-256":
              return new e(1088, 512, 6, 256, r);
            case "sha3-384":
              return new e(832, 768, 6, 384, r);
            case "sha3-512":
              return new e(576, 1024, 6, 512, r);
            case "shake128":
              return new n(1344, 256, 31, r);
            case "shake256":
              return new n(1088, 512, 31, r);
            default:
              throw new Error("Invald algorithm: " + t);
          }
        };
      };
    },
    1635: function (t, e, n) {
      (function (e) {
        var r = n(366),
          i = n(367),
          o = n(1107),
          s = n(1108),
          u = n(1155).Transform;
        t.exports = function (t) {
          return (function () {
            "use strict";
            o(a, u);
            var n = s(a);
            function a(e, i, o, s, u) {
              var c;
              return (
                r(this, a),
                ((c = n.call(this, u))._rate = e),
                (c._capacity = i),
                (c._delimitedSuffix = o),
                (c._hashBitLength = s),
                (c._options = u),
                (c._state = new t()),
                c._state.initialize(e, i),
                (c._finalized = !1),
                c
              );
            }
            return (
              i(a, [
                {
                  key: "_transform",
                  value: function (t, e, n) {
                    var r = null;
                    try {
                      this.update(t, e);
                    } catch (t) {
                      r = t;
                    }
                    n(r);
                  },
                },
                {
                  key: "_flush",
                  value: function (t) {
                    var e = null;
                    try {
                      this.push(this.digest());
                    } catch (t) {
                      e = t;
                    }
                    t(e);
                  },
                },
                {
                  key: "update",
                  value: function (t, n) {
                    if (!e.isBuffer(t) && "string" != typeof t)
                      throw new TypeError("Data must be a string or a buffer");
                    if (this._finalized)
                      throw new Error("Digest already called");
                    return (
                      e.isBuffer(t) || (t = e.from(t, n)),
                      this._state.absorb(t),
                      this
                    );
                  },
                },
                {
                  key: "digest",
                  value: function (t) {
                    if (this._finalized)
                      throw new Error("Digest already called");
                    (this._finalized = !0),
                      this._delimitedSuffix &&
                        this._state.absorbLastFewBits(this._delimitedSuffix);
                    var e = this._state.squeeze(this._hashBitLength / 8);
                    return (
                      void 0 !== t && (e = e.toString(t)), this._resetState(), e
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
                    var t = new a(
                      this._rate,
                      this._capacity,
                      this._delimitedSuffix,
                      this._hashBitLength,
                      this._options
                    );
                    return (
                      this._state.copy(t._state),
                      (t._finalized = this._finalized),
                      t
                    );
                  },
                },
              ]),
              a
            );
          })();
        };
      }.call(this, n(532).Buffer));
    },
    1636: function (t, e, n) {
      (function (e) {
        var r = n(366),
          i = n(367),
          o = n(1107),
          s = n(1108),
          u = n(1155).Transform;
        t.exports = function (t) {
          return (function () {
            "use strict";
            o(a, u);
            var n = s(a);
            function a(e, i, o, s) {
              var u;
              return (
                r(this, a),
                ((u = n.call(this, s))._rate = e),
                (u._capacity = i),
                (u._delimitedSuffix = o),
                (u._options = s),
                (u._state = new t()),
                u._state.initialize(e, i),
                (u._finalized = !1),
                u
              );
            }
            return (
              i(a, [
                {
                  key: "_transform",
                  value: function (t, e, n) {
                    var r = null;
                    try {
                      this.update(t, e);
                    } catch (t) {
                      r = t;
                    }
                    n(r);
                  },
                },
                { key: "_flush", value: function () {} },
                {
                  key: "_read",
                  value: function (t) {
                    this.push(this.squeeze(t));
                  },
                },
                {
                  key: "update",
                  value: function (t, n) {
                    if (!e.isBuffer(t) && "string" != typeof t)
                      throw new TypeError("Data must be a string or a buffer");
                    if (this._finalized)
                      throw new Error("Squeeze already called");
                    return (
                      e.isBuffer(t) || (t = e.from(t, n)),
                      this._state.absorb(t),
                      this
                    );
                  },
                },
                {
                  key: "squeeze",
                  value: function (t, e) {
                    return (
                      this._finalized ||
                        ((this._finalized = !0),
                        this._state.absorbLastFewBits(this._delimitedSuffix)),
                      (t = this._state.squeeze(t)),
                      void 0 !== e ? t.toString(e) : t
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
                    var t = new a(
                      this._rate,
                      this._capacity,
                      this._delimitedSuffix,
                      this._options
                    );
                    return (
                      this._state.copy(t._state),
                      (t._finalized = this._finalized),
                      t
                    );
                  },
                },
              ]),
              a
            );
          })();
        };
      }.call(this, n(532).Buffer));
    },
    1637: function (t, e, n) {
      (function (e) {
        var r = n(1638);
        function i() {
          (this.state = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0,
          ]),
            (this.blockSize = null),
            (this.count = 0),
            (this.squeezing = !1);
        }
        (i.prototype.initialize = function (t, e) {
          for (var n = 0; n < 50; ++n) this.state[n] = 0;
          (this.blockSize = t / 8), (this.count = 0), (this.squeezing = !1);
        }),
          (i.prototype.absorb = function (t) {
            for (var e = 0; e < t.length; ++e)
              (this.state[~~(this.count / 4)] ^=
                t[e] << ((this.count % 4) * 8)),
                (this.count += 1),
                this.count === this.blockSize &&
                  (r.p1600(this.state), (this.count = 0));
          }),
          (i.prototype.absorbLastFewBits = function (t) {
            (this.state[~~(this.count / 4)] ^= t << ((this.count % 4) * 8)),
              0 != (128 & t) &&
                this.count === this.blockSize - 1 &&
                r.p1600(this.state),
              (this.state[~~((this.blockSize - 1) / 4)] ^=
                128 << (((this.blockSize - 1) % 4) * 8)),
              r.p1600(this.state),
              (this.count = 0),
              (this.squeezing = !0);
          }),
          (i.prototype.squeeze = function (t) {
            this.squeezing || this.absorbLastFewBits(1);
            for (var n = e.alloc(t), i = 0; i < t; ++i)
              (n[i] =
                (this.state[~~(this.count / 4)] >>> ((this.count % 4) * 8)) &
                255),
                (this.count += 1),
                this.count === this.blockSize &&
                  (r.p1600(this.state), (this.count = 0));
            return n;
          }),
          (i.prototype.copy = function (t) {
            for (var e = 0; e < 50; ++e) t.state[e] = this.state[e];
            (t.blockSize = this.blockSize),
              (t.count = this.count),
              (t.squeezing = this.squeezing);
          }),
          (t.exports = i);
      }.call(this, n(532).Buffer));
    },
    1638: function (t, e) {
      var n = [
        1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
        2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136,
        0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905,
        2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648,
        32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896,
        2147483648, 2147483649, 0, 2147516424, 2147483648,
      ];
      e.p1600 = function (t) {
        for (var e = 0; e < 24; ++e) {
          var r = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40],
            i = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41],
            o = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42],
            s = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43],
            u = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44],
            a = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45],
            c = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46],
            l = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47],
            h =
              (X = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]) ^
              ((o << 1) | (s >>> 31)),
            f =
              ($ = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]) ^
              ((s << 1) | (o >>> 31)),
            d = t[0] ^ h,
            p = t[1] ^ f,
            b = t[10] ^ h,
            v = t[11] ^ f,
            g = t[20] ^ h,
            y = t[21] ^ f,
            m = t[30] ^ h,
            w = t[31] ^ f,
            _ = t[40] ^ h,
            x = t[41] ^ f,
            k = t[2] ^ (h = r ^ ((u << 1) | (a >>> 31))),
            M = t[3] ^ (f = i ^ ((a << 1) | (u >>> 31))),
            S = t[12] ^ h,
            E = t[13] ^ f,
            j = t[22] ^ h,
            C = t[23] ^ f,
            I = t[32] ^ h,
            N = t[33] ^ f,
            O = t[42] ^ h,
            A = t[43] ^ f,
            T = t[4] ^ (h = o ^ ((c << 1) | (l >>> 31))),
            L = t[5] ^ (f = s ^ ((l << 1) | (c >>> 31))),
            R = t[14] ^ h,
            P = t[15] ^ f,
            D = t[24] ^ h,
            z = t[25] ^ f,
            B = t[34] ^ h,
            F = t[35] ^ f,
            W = t[44] ^ h,
            q = t[45] ^ f,
            U = t[6] ^ (h = u ^ ((X << 1) | ($ >>> 31))),
            V = t[7] ^ (f = a ^ (($ << 1) | (X >>> 31))),
            H = t[16] ^ h,
            Y = t[17] ^ f,
            G = t[26] ^ h,
            J = t[27] ^ f,
            Z = t[36] ^ h,
            Q = t[37] ^ f,
            K = t[46] ^ h,
            $ =
              ((o = t[47] ^ f),
              (s = t[8] ^ (h = c ^ ((r << 1) | (i >>> 31)))),
              (u = t[9] ^ (f = l ^ ((i << 1) | (r >>> 31)))),
              (a = t[18] ^ h),
              t[19] ^ f),
            X = t[28] ^ h;
          (c = t[29] ^ f),
            (l = t[38] ^ h),
            (i = t[39] ^ f),
            (r = t[48] ^ h),
            (h = t[49] ^ f),
            (f = d),
            (d = p),
            (p = (v << 4) | (b >>> 28)),
            (b = (b << 4) | (v >>> 28)),
            (v = (g << 3) | (y >>> 29)),
            (y = (y << 3) | (g >>> 29)),
            (g = (w << 9) | (m >>> 23)),
            (m = (m << 9) | (w >>> 23)),
            (w = (_ << 18) | (x >>> 14)),
            (x = (x << 18) | (_ >>> 14)),
            (_ = (k << 1) | (M >>> 31)),
            (M = (M << 1) | (k >>> 31)),
            (k = (E << 12) | (S >>> 20)),
            (S = (S << 12) | (E >>> 20)),
            (E = (j << 10) | (C >>> 22)),
            (C = (C << 10) | (j >>> 22)),
            (j = (N << 13) | (I >>> 19)),
            (I = (I << 13) | (N >>> 19)),
            (N = (O << 2) | (A >>> 30)),
            (A = (A << 2) | (O >>> 30)),
            (O = (L << 30) | (T >>> 2)),
            (T = (T << 30) | (L >>> 2)),
            (L = (R << 6) | (P >>> 26)),
            (P = (P << 6) | (R >>> 26)),
            (R = (z << 11) | (D >>> 21)),
            (D = (D << 11) | (z >>> 21)),
            (z = (B << 15) | (F >>> 17)),
            (F = (F << 15) | (B >>> 17)),
            (B = (q << 29) | (W >>> 3)),
            (W = (W << 29) | (q >>> 3)),
            (q = (U << 28) | (V >>> 4)),
            (V = (V << 28) | (U >>> 4)),
            (U = (Y << 23) | (H >>> 9)),
            (H = (H << 23) | (Y >>> 9)),
            (Y = (G << 25) | (J >>> 7)),
            (J = (J << 25) | (G >>> 7)),
            (G = (Z << 21) | (Q >>> 11)),
            (Q = (Q << 21) | (Z >>> 11)),
            (Z = (o << 24) | (K >>> 8)),
            (K = (K << 24) | (o >>> 8)),
            (o = (s << 27) | (u >>> 5)),
            (u = (u << 27) | (s >>> 5)),
            (s = (a << 20) | ($ >>> 12)),
            ($ = ($ << 20) | (a >>> 12)),
            (a = (c << 7) | (X >>> 25)),
            (X = (X << 7) | (c >>> 25)),
            (c = (l << 8) | (i >>> 24)),
            (i = (i << 8) | (l >>> 24)),
            (l = (r << 14) | (h >>> 18)),
            (r = (h << 14) | (r >>> 18));
          (t[0] = f ^ (~k & R)),
            (t[1] = d ^ (~S & D)),
            (t[10] = q ^ (~s & v)),
            (t[11] = V ^ (~$ & y)),
            (t[20] = _ ^ (~L & Y)),
            (t[21] = M ^ (~P & J)),
            (t[30] = o ^ (~p & E)),
            (t[31] = u ^ (~b & C)),
            (t[40] = O ^ (~U & a)),
            (t[41] = T ^ (~H & X)),
            (t[2] = k ^ (~R & G)),
            (t[3] = S ^ (~D & Q)),
            (t[12] = s ^ (~v & j)),
            (t[13] = $ ^ (~y & I)),
            (t[22] = L ^ (~Y & c)),
            (t[23] = P ^ (~J & i)),
            (t[32] = p ^ (~E & z)),
            (t[33] = b ^ (~C & F)),
            (t[42] = U ^ (~a & g)),
            (t[43] = H ^ (~X & m)),
            (t[4] = R ^ (~G & l)),
            (t[5] = D ^ (~Q & r)),
            (t[14] = v ^ (~j & B)),
            (t[15] = y ^ (~I & W)),
            (t[24] = Y ^ (~c & w)),
            (t[25] = J ^ (~i & x)),
            (t[34] = E ^ (~z & Z)),
            (t[35] = C ^ (~F & K)),
            (t[44] = a ^ (~g & N)),
            (t[45] = X ^ (~m & A)),
            (t[6] = G ^ (~l & f)),
            (t[7] = Q ^ (~r & d)),
            (t[16] = j ^ (~B & q)),
            (t[17] = I ^ (~W & V)),
            (t[26] = c ^ (~w & _)),
            (t[27] = i ^ (~x & M)),
            (t[36] = z ^ (~Z & o)),
            (t[37] = F ^ (~K & u)),
            (t[46] = g ^ (~N & O)),
            (t[47] = m ^ (~A & T)),
            (t[8] = l ^ (~f & k)),
            (t[9] = r ^ (~d & S)),
            (t[18] = B ^ (~q & s)),
            (t[19] = W ^ (~V & $)),
            (t[28] = w ^ (~_ & L)),
            (t[29] = x ^ (~M & P)),
            (t[38] = Z ^ (~o & p)),
            (t[39] = K ^ (~u & b)),
            (t[48] = N ^ (~O & U)),
            (t[49] = A ^ (~T & H)),
            (t[0] ^= n[2 * e]),
            (t[1] ^= n[2 * e + 1]);
        }
      };
    },
    1639: function (t, e, n) {
      (function (e) {
        var r = n(1365),
          i = n(1190);
        function o(t) {
          return t.startsWith("int[")
            ? "int256" + t.slice(3)
            : "int" === t
            ? "int256"
            : t.startsWith("uint[")
            ? "uint256" + t.slice(4)
            : "uint" === t
            ? "uint256"
            : t.startsWith("fixed[")
            ? "fixed128x128" + t.slice(5)
            : "fixed" === t
            ? "fixed128x128"
            : t.startsWith("ufixed[")
            ? "ufixed128x128" + t.slice(6)
            : "ufixed" === t
            ? "ufixed128x128"
            : t;
        }
        function s(t) {
          return parseInt(/^\D+(\d+)$/.exec(t)[1], 10);
        }
        function u(t) {
          return (
            (t = /^\D+(\d+)x(\d+)$/.exec(t)),
            [parseInt(t[1], 10), parseInt(t[2], 10)]
          );
        }
        function a(t) {
          return (t = t.match(/(.*)\[(.*?)\]$/))
            ? "" === t[2]
              ? "dynamic"
              : parseInt(t[2], 10)
            : null;
        }
        function c(t) {
          var e = typeof t;
          if ("string" == e)
            return r.isHexString(t)
              ? new i(r.stripHexPrefix(t), 16)
              : new i(t, 10);
          if ("number" == e) return new i(t);
          if (t.toArray) return t;
          throw new Error("Argument is not a number");
        }
        function l(t, n) {
          var o, h, f, d, p;
          if ("address" === t) return l("uint160", c(n));
          if ("bool" === t) return l("uint8", n ? 1 : 0);
          if ("string" === t) return l("bytes", new e(n, "utf8"));
          if ((p = t).lastIndexOf("]") === p.length - 1) {
            if (void 0 === n.length) throw new Error("Not an array?");
            if ("dynamic" !== (o = a(t)) && 0 !== o && n.length > o)
              throw new Error("Elements exceed array size: " + o);
            for (d in ((f = []),
            (t = t.slice(0, t.lastIndexOf("["))),
            (n = "string" == typeof n ? JSON.parse(n) : n)))
              f.push(l(t, n[d]));
            return (
              "dynamic" === o && ((p = l("uint256", n.length)), f.unshift(p)),
              e.concat(f)
            );
          }
          if ("bytes" === t)
            return (
              (n = new e(n)),
              (f = e.concat([l("uint256", n.length), n])),
              n.length % 32 != 0
                ? e.concat([f, r.zeros(32 - (n.length % 32))])
                : f
            );
          if (t.startsWith("bytes")) {
            if ((o = s(t)) < 1 || 32 < o)
              throw new Error("Invalid bytes<N> width: " + o);
            return r.setLengthRight(n, 32);
          }
          if (t.startsWith("uint")) {
            if ((o = s(t)) % 8 || o < 8 || 256 < o)
              throw new Error("Invalid uint<N> width: " + o);
            if ((h = c(n)).bitLength() > o)
              throw new Error(
                "Supplied uint exceeds width: " + o + " vs " + h.bitLength()
              );
            if (h < 0) throw new Error("Supplied uint is negative");
            return h.toArrayLike(e, "be", 32);
          }
          if (t.startsWith("int")) {
            if ((o = s(t)) % 8 || o < 8 || 256 < o)
              throw new Error("Invalid int<N> width: " + o);
            if ((h = c(n)).bitLength() > o)
              throw new Error(
                "Supplied int exceeds width: " + o + " vs " + h.bitLength()
              );
            return h.toTwos(256).toArrayLike(e, "be", 32);
          }
          if (t.startsWith("ufixed")) {
            if (((o = u(t)), (h = c(n)) < 0))
              throw new Error("Supplied ufixed is negative");
            return l("uint256", h.mul(new i(2).pow(new i(o[1]))));
          }
          if (t.startsWith("fixed"))
            return (o = u(t)), l("int256", c(n).mul(new i(2).pow(new i(o[1]))));
          throw new Error("Unsupported or invalid type: " + t);
        }
        function h(t, n) {
          if (t.length !== n.length)
            throw new Error("Number of types are not matching the values");
          for (var i, u, a = [], l = 0; l < t.length; l++) {
            var h = o(t[l]),
              f = n[l];
            if ("bytes" === h) a.push(f);
            else if ("string" === h) a.push(new e(f, "utf8"));
            else if ("bool" === h) a.push(new e(f ? "01" : "00", "hex"));
            else if ("address" === h) a.push(r.setLength(f, 20));
            else if (h.startsWith("bytes")) {
              if ((i = s(h)) < 1 || 32 < i)
                throw new Error("Invalid bytes<N> width: " + i);
              a.push(r.setLengthRight(f, i));
            } else if (h.startsWith("uint")) {
              if ((i = s(h)) % 8 || i < 8 || 256 < i)
                throw new Error("Invalid uint<N> width: " + i);
              if ((u = c(f)).bitLength() > i)
                throw new Error(
                  "Supplied uint exceeds width: " + i + " vs " + u.bitLength()
                );
              a.push(u.toArrayLike(e, "be", i / 8));
            } else {
              if (!h.startsWith("int"))
                throw new Error("Unsupported or invalid type: " + h);
              if ((i = s(h)) % 8 || i < 8 || 256 < i)
                throw new Error("Invalid int<N> width: " + i);
              if ((u = c(f)).bitLength() > i)
                throw new Error(
                  "Supplied int exceeds width: " + i + " vs " + u.bitLength()
                );
              a.push(u.toTwos(i).toArrayLike(e, "be", i / 8));
            }
          }
          return e.concat(a);
        }
        t.exports = {
          rawEncode: function (t, n) {
            var r,
              i = [],
              s = [],
              u = 32 * t.length;
            for (r in t) {
              var c = o(t[r]),
                h = l(c, n[r]);
              "string" === (c = c) || "bytes" === c || "dynamic" === a(c)
                ? (i.push(l("uint256", u)), s.push(h), (u += h.length))
                : i.push(h);
            }
            return e.concat(i.concat(s));
          },
          solidityPack: h,
          soliditySHA3: function (t, e) {
            return r.keccak(h(t, e));
          },
        };
      }.call(this, n(532).Buffer));
    },
    1640: function (t, e, n) {
      "use strict";
      var r = n(1178),
        i = n(7),
        o = n(1110),
        s = n(366),
        u = n(367);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.filterFromParam = e.FilterPolyfill = void 0);
      var a = n(1246),
        c = n(1164),
        l = { jsonrpc: "2.0", id: 0 };
      n = (function () {
        function t(e) {
          s(this, t),
            (this.logFilters = new Map()),
            (this.blockFilters = new Set()),
            (this.pendingTransactionFilters = new Set()),
            (this.cursors = new Map()),
            (this.timeouts = new Map()),
            (this.nextFilterId = a.IntNumber(1)),
            (this.provider = e);
        }
        var e, n, d, p, g, y, m, w, _, x;
        return (
          u(t, [
            {
              key: "newFilter",
              value:
                ((x = o(
                  i.mark(function t(e) {
                    var n, r;
                    return i.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (n = h(e)),
                                (r = this.makeFilterId()),
                                (t.next = 4),
                                this.setInitialCursorPosition(r, n.fromBlock)
                              );
                            case 4:
                              return (
                                t.sent,
                                this.logFilters.set(r, n),
                                this.setFilterTimeout(r),
                                t.abrupt("return", c.hexStringFromIntNumber(r))
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
                )),
                function (t) {
                  return x.apply(this, arguments);
                }),
            },
            {
              key: "newBlockFilter",
              value:
                ((_ = o(
                  i.mark(function t() {
                    var e;
                    return i.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (e = this.makeFilterId()),
                                (t.next = 3),
                                this.setInitialCursorPosition(e, "latest")
                              );
                            case 3:
                              return (
                                t.sent,
                                this.blockFilters.add(e),
                                this.setFilterTimeout(e),
                                t.abrupt("return", c.hexStringFromIntNumber(e))
                              );
                            case 8:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function () {
                  return _.apply(this, arguments);
                }),
            },
            {
              key: "newPendingTransactionFilter",
              value:
                ((w = o(
                  i.mark(function t() {
                    var e;
                    return i.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (e = this.makeFilterId()),
                                (t.next = 3),
                                this.setInitialCursorPosition(e, "latest")
                              );
                            case 3:
                              return (
                                t.sent,
                                this.pendingTransactionFilters.add(e),
                                this.setFilterTimeout(e),
                                t.abrupt("return", c.hexStringFromIntNumber(e))
                              );
                            case 8:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function () {
                  return w.apply(this, arguments);
                }),
            },
            {
              key: "uninstallFilter",
              value: function (t) {
                return (
                  (t = c.intNumberFromHexString(t)), this.deleteFilter(t), !0
                );
              },
            },
            {
              key: "getFilterChanges",
              value: function (t) {
                return (
                  (t = c.intNumberFromHexString(t)),
                  this.timeouts.has(t) && this.setFilterTimeout(t),
                  this.logFilters.has(t)
                    ? this.getLogFilterChanges(t)
                    : this.blockFilters.has(t)
                    ? this.getBlockFilterChanges(t)
                    : this.pendingTransactionFilters.has(t)
                    ? this.getPendingTransactionFilterChanges(t)
                    : Promise.resolve(b())
                );
              },
            },
            {
              key: "getFilterLogs",
              value:
                ((m = o(
                  i.mark(function t(e) {
                    var n;
                    return i.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                ((n = c.intNumberFromHexString(e)),
                                (n = this.logFilters.get(n)))
                              ) {
                                t.next = 4;
                                break;
                              }
                              return t.abrupt("return", b());
                            case 4:
                              return t.abrupt(
                                "return",
                                this.sendAsyncPromise(
                                  Object.assign(Object.assign({}, l), {
                                    method: "eth_getLogs",
                                    params: [f(n)],
                                  })
                                )
                              );
                            case 5:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function (t) {
                  return m.apply(this, arguments);
                }),
            },
            {
              key: "makeFilterId",
              value: function () {
                return a.IntNumber(++this.nextFilterId);
              },
            },
            {
              key: "sendAsyncPromise",
              value: function (t) {
                var e = this;
                return new Promise(function (n, r) {
                  e.provider.sendAsync(t, function (t, e) {
                    return t
                      ? r(t)
                      : Array.isArray(e) || null == e
                      ? r(
                          new Error(
                            "unexpected response received: ".concat(
                              JSON.stringify(e)
                            )
                          )
                        )
                      : void n(e);
                  });
                });
              },
            },
            {
              key: "deleteFilter",
              value: function (t) {
                this.logFilters.delete(t),
                  this.blockFilters.delete(t),
                  this.pendingTransactionFilters.delete(t),
                  this.cursors.delete(t),
                  this.timeouts.delete(t);
              },
            },
            {
              key: "getLogFilterChanges",
              value:
                ((y = o(
                  i.mark(function t(e) {
                    var n, o, s, u, h;
                    return i.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                ((n = this.logFilters.get(e)),
                                (o = this.cursors.get(e)) && n)
                              ) {
                                t.next = 4;
                                break;
                              }
                              return t.abrupt("return", b());
                            case 4:
                              return (t.next = 6), this.getCurrentBlockHeight();
                            case 6:
                              if (
                                ((h = t.sent),
                                (s = "latest" === n.toBlock ? h : n.toBlock),
                                h < o)
                              )
                                return t.abrupt("return", v());
                              t.next = 10;
                              break;
                            case 10:
                              if (o > n.toBlock) return t.abrupt("return", v());
                              t.next = 12;
                              break;
                            case 12:
                              return (
                                (t.next = 15),
                                this.sendAsyncPromise(
                                  Object.assign(Object.assign({}, l), {
                                    method: "eth_getLogs",
                                    params: [
                                      f(
                                        Object.assign(Object.assign({}, n), {
                                          fromBlock: o,
                                          toBlock: s,
                                        })
                                      ),
                                    ],
                                  })
                                )
                              );
                            case 15:
                              return (
                                (u = t.sent),
                                Array.isArray(u.result) &&
                                  ((h = u.result.map(function (t) {
                                    return c.intNumberFromHexString(
                                      t.blockNumber || "0x0"
                                    );
                                  })),
                                  (h = Math.max.apply(Math, r(h))) &&
                                    o < h &&
                                    ((h = a.IntNumber(h + 1)),
                                    this.cursors.set(e, h))),
                                t.abrupt("return", u)
                              );
                            case 18:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function (t) {
                  return y.apply(this, arguments);
                }),
            },
            {
              key: "getBlockFilterChanges",
              value:
                ((g = o(
                  i.mark(function t(e) {
                    var n,
                      r,
                      o,
                      s,
                      u = this;
                    return i.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if ((n = this.cursors.get(e))) {
                                t.next = 3;
                                break;
                              }
                              return t.abrupt("return", b());
                            case 3:
                              return (t.next = 5), this.getCurrentBlockHeight();
                            case 5:
                              if ((r = t.sent) < n)
                                return t.abrupt("return", v());
                              t.next = 8;
                              break;
                            case 8:
                              return (
                                (t.next = 11),
                                Promise.all(
                                  c.range(n, r + 1).map(function (t) {
                                    return u.getBlockHashByNumber(
                                      a.IntNumber(t)
                                    );
                                  })
                                )
                              );
                            case 11:
                              return (
                                (o = t.sent.filter(function (t) {
                                  return !!t;
                                })),
                                (s = a.IntNumber(n + o.length)),
                                this.cursors.set(e, s),
                                t.abrupt(
                                  "return",
                                  Object.assign(Object.assign({}, l), {
                                    result: o,
                                  })
                                )
                              );
                            case 16:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function (t) {
                  return g.apply(this, arguments);
                }),
            },
            {
              key: "getPendingTransactionFilterChanges",
              value:
                ((p = o(
                  i.mark(function t(e) {
                    return i.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return t.abrupt("return", Promise.resolve(v()));
                          case 1:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )),
                function (t) {
                  return p.apply(this, arguments);
                }),
            },
            {
              key: "setInitialCursorPosition",
              value:
                ((d = o(
                  i.mark(function t(e, n) {
                    var r;
                    return i.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), this.getCurrentBlockHeight();
                            case 2:
                              return (
                                (r = t.sent),
                                (r = "number" == typeof n && r < n ? n : r),
                                this.cursors.set(e, r),
                                t.abrupt("return", r)
                              );
                            case 6:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function (t, e) {
                  return d.apply(this, arguments);
                }),
            },
            {
              key: "setFilterTimeout",
              value: function (t) {
                var e = this,
                  n = this.timeouts.get(t);
                n && window.clearTimeout(n),
                  (n = window.setTimeout(function () {
                    e.deleteFilter(t);
                  }, 3e5)),
                  this.timeouts.set(t, n);
              },
            },
            {
              key: "getCurrentBlockHeight",
              value:
                ((n = o(
                  i.mark(function t() {
                    var e;
                    return i.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.next = 2),
                                this.sendAsyncPromise(
                                  Object.assign(Object.assign({}, l), {
                                    method: "eth_blockNumber",
                                    params: [],
                                  })
                                )
                              );
                            case 2:
                              return (
                                (e = (e = t.sent).result),
                                t.abrupt(
                                  "return",
                                  c.intNumberFromHexString(c.ensureHexString(e))
                                )
                              );
                            case 5:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function () {
                  return n.apply(this, arguments);
                }),
            },
            {
              key: "getBlockHashByNumber",
              value:
                ((e = o(
                  i.mark(function t(e) {
                    var n;
                    return i.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.next = 2),
                                this.sendAsyncPromise(
                                  Object.assign(Object.assign({}, l), {
                                    method: "eth_getBlockByNumber",
                                    params: [c.hexStringFromIntNumber(e), !1],
                                  })
                                )
                              );
                            case 2:
                              if (
                                (n = t.sent).result &&
                                "string" == typeof n.result.hash
                              )
                                return t.abrupt(
                                  "return",
                                  c.ensureHexString(n.result.hash)
                                );
                              t.next = 5;
                              break;
                            case 5:
                              return t.abrupt("return", null);
                            case 6:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function (t) {
                  return e.apply(this, arguments);
                }),
            },
          ]),
          t
        );
      })();
      function h(t) {
        return {
          fromBlock: d(t.fromBlock),
          toBlock: d(t.toBlock),
          addresses:
            void 0 === t.address
              ? null
              : Array.isArray(t.address)
              ? t.address
              : [t.address],
          topics: t.topics || [],
        };
      }
      function f(t) {
        var e = {
          fromBlock: p(t.fromBlock),
          toBlock: p(t.toBlock),
          topics: t.topics,
        };
        return null !== t.addresses && (e.address = t.addresses), e;
      }
      function d(t) {
        if (void 0 === t || "latest" === t || "pending" === t) return "latest";
        if ("earliest" === t) return a.IntNumber(0);
        if (c.isHexString(t)) return c.intNumberFromHexString(t);
        throw new Error("Invalid block option: ".concat(t));
      }
      function p(t) {
        return "latest" === t ? t : c.hexStringFromIntNumber(t);
      }
      function b() {
        return Object.assign(Object.assign({}, l), {
          error: { code: -32e3, message: "filter not found" },
        });
      }
      function v() {
        return Object.assign(Object.assign({}, l), { result: [] });
      }
      (e.FilterPolyfill = n), (e.filterFromParam = h);
    },
    1641: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.JSONRPCMethod = void 0),
        ((e = e.JSONRPCMethod || (e.JSONRPCMethod = {})).eth_accounts =
          "eth_accounts"),
        (e.eth_coinbase = "eth_coinbase"),
        (e.net_version = "net_version"),
        (e.eth_uninstallFilter = "eth_uninstallFilter"),
        (e.eth_requestAccounts = "eth_requestAccounts"),
        (e.eth_sign = "eth_sign"),
        (e.eth_ecRecover = "eth_ecRecover"),
        (e.personal_sign = "personal_sign"),
        (e.personal_ecRecover = "personal_ecRecover"),
        (e.eth_signTransaction = "eth_signTransaction"),
        (e.eth_sendRawTransaction = "eth_sendRawTransaction"),
        (e.eth_sendTransaction = "eth_sendTransaction"),
        (e.eth_signTypedData_v1 = "eth_signTypedData_v1"),
        (e.eth_signTypedData_v2 = "eth_signTypedData_v2"),
        (e.eth_signTypedData_v3 = "eth_signTypedData_v3"),
        (e.eth_signTypedData_v4 = "eth_signTypedData_v4"),
        (e.eth_signTypedData = "eth_signTypedData"),
        (e.walletlink_arbitrary = "walletlink_arbitrary"),
        (e.eth_subscribe = "eth_subscribe"),
        (e.eth_unsubscribe = "eth_unsubscribe"),
        (e.eth_newFilter = "eth_newFilter"),
        (e.eth_newBlockFilter = "eth_newBlockFilter"),
        (e.eth_newPendingTransactionFilter = "eth_newPendingTransactionFilter"),
        (e.eth_getFilterChanges = "eth_getFilterChanges"),
        (e.eth_getFilterLogs = "eth_getFilterLogs");
    },
    1642: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getMessageFromCode =
          e.serializeError =
          e.EthereumProviderError =
          e.EthereumRpcError =
          e.ethErrors =
          e.errorCodes =
            void 0);
      var r = n(1247);
      Object.defineProperty(e, "EthereumRpcError", {
        enumerable: !0,
        get: function () {
          return r.EthereumRpcError;
        },
      }),
        Object.defineProperty(e, "EthereumProviderError", {
          enumerable: !0,
          get: function () {
            return r.EthereumProviderError;
          },
        });
      var i = n(1366);
      Object.defineProperty(e, "serializeError", {
        enumerable: !0,
        get: function () {
          return i.serializeError;
        },
      }),
        Object.defineProperty(e, "getMessageFromCode", {
          enumerable: !0,
          get: function () {
            return i.getMessageFromCode;
          },
        });
      var o = n(1643);
      Object.defineProperty(e, "ethErrors", {
        enumerable: !0,
        get: function () {
          return o.ethErrors;
        },
      });
      var s = n(1248);
      Object.defineProperty(e, "errorCodes", {
        enumerable: !0,
        get: function () {
          return s.errorCodes;
        },
      });
    },
    1643: function (t, e, n) {
      "use strict";
      var r = n(1121);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ethErrors = void 0);
      var i = n(1247),
        o = n(1366),
        s = n(1248);
      function u(t, e) {
        var n = c(e);
        (n = (e = r(n, 2))[0]), (e = e[1]);
        return new i.EthereumRpcError(t, n || o.getMessageFromCode(t), e);
      }
      function a(t, e) {
        var n = c(e);
        (n = (e = r(n, 2))[0]), (e = e[1]);
        return new i.EthereumProviderError(t, n || o.getMessageFromCode(t), e);
      }
      function c(t) {
        if (t) {
          if ("string" == typeof t) return [t];
          if ("object" == typeof t && !Array.isArray(t)) {
            var e = t.message;
            t = t.data;
            if (e && "string" != typeof e)
              throw new Error("Must specify string message.");
            return [e || void 0, t];
          }
        }
        return [];
      }
      e.ethErrors = {
        rpc: {
          parse: function (t) {
            return u(s.errorCodes.rpc.parse, t);
          },
          invalidRequest: function (t) {
            return u(s.errorCodes.rpc.invalidRequest, t);
          },
          invalidParams: function (t) {
            return u(s.errorCodes.rpc.invalidParams, t);
          },
          methodNotFound: function (t) {
            return u(s.errorCodes.rpc.methodNotFound, t);
          },
          internal: function (t) {
            return u(s.errorCodes.rpc.internal, t);
          },
          server: function (t) {
            if (!t || "object" != typeof t || Array.isArray(t))
              throw new Error(
                "Ethereum RPC Server errors must provide single object argument."
              );
            var e = t.code;
            if (!Number.isInteger(e) || -32005 < e || e < -32099)
              throw new Error(
                '"code" must be an integer such that: -32099 <= code <= -32005'
              );
            return u(e, t);
          },
          invalidInput: function (t) {
            return u(s.errorCodes.rpc.invalidInput, t);
          },
          resourceNotFound: function (t) {
            return u(s.errorCodes.rpc.resourceNotFound, t);
          },
          resourceUnavailable: function (t) {
            return u(s.errorCodes.rpc.resourceUnavailable, t);
          },
          transactionRejected: function (t) {
            return u(s.errorCodes.rpc.transactionRejected, t);
          },
          methodNotSupported: function (t) {
            return u(s.errorCodes.rpc.methodNotSupported, t);
          },
          limitExceeded: function (t) {
            return u(s.errorCodes.rpc.limitExceeded, t);
          },
        },
        provider: {
          userRejectedRequest: function (t) {
            return a(s.errorCodes.provider.userRejectedRequest, t);
          },
          unauthorized: function (t) {
            return a(s.errorCodes.provider.unauthorized, t);
          },
          unsupportedMethod: function (t) {
            return a(s.errorCodes.provider.unsupportedMethod, t);
          },
          disconnected: function (t) {
            return a(s.errorCodes.provider.disconnected, t);
          },
          chainDisconnected: function (t) {
            return a(s.errorCodes.provider.chainDisconnected, t);
          },
          custom: function (t) {
            if (!t || "object" != typeof t || Array.isArray(t))
              throw new Error(
                "Ethereum Provider custom errors must provide single object argument."
              );
            var e = t.code,
              n = t.message;
            t = t.data;
            if (!n || "string" != typeof n)
              throw new Error('"message" must be a nonempty string');
            return new i.EthereumProviderError(e, n, t);
          },
        },
      };
    },
    1644: function (t, e, n) {
      "use strict";
      var r = n(7),
        i = n(1110),
        o = n(366),
        s = n(367);
      function u() {}
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.SubscriptionManager = void 0);
      var a = n(1347),
        c = n(1364);
      n = (function () {
        function t(e) {
          o(this, t);
          var n = new a({
            provider: e,
            pollingInterval: 15e3,
            setSkipCacheFlag: !0,
          });
          (e = (n = c({ blockTracker: n, provider: e })).events),
            (n = n.middleware);
          (this.events = e), (this.subscriptionMiddleware = n);
        }
        var e;
        return (
          s(t, [
            {
              key: "handleRequest",
              value:
                ((e = i(
                  r.mark(function t(e) {
                    var n;
                    return r.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (n = {}),
                                (t.next = 3),
                                this.subscriptionMiddleware(e, n, u, u)
                              );
                            case 3:
                              return t.abrupt("return", n);
                            case 4:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function (t) {
                  return e.apply(this, arguments);
                }),
            },
            {
              key: "destroy",
              value: function () {
                this.subscriptionMiddleware.destroy();
              },
            },
          ]),
          t
        );
      })();
      e.SubscriptionManager = n;
    },
    1645: function (t, e, n) {
      "use strict";
      var r = n(366),
        i = n(367);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ScopedLocalStorage = void 0),
        (n = (function () {
          function t(e) {
            r(this, t), (this.scope = e);
          }
          return (
            i(t, [
              {
                key: "setItem",
                value: function (t, e) {
                  localStorage.setItem(this.scopedKey(t), e);
                },
              },
              {
                key: "getItem",
                value: function (t) {
                  return localStorage.getItem(this.scopedKey(t));
                },
              },
              {
                key: "removeItem",
                value: function (t) {
                  localStorage.removeItem(this.scopedKey(t));
                },
              },
              {
                key: "clear",
                value: function () {
                  for (
                    var t = this.scopedKey(""), e = [], n = 0;
                    n < localStorage.length;
                    n++
                  ) {
                    var r = localStorage.key(n);
                    "string" == typeof r && r.startsWith(t) && e.push(r);
                  }
                  e.forEach(function (t) {
                    return localStorage.removeItem(t);
                  });
                },
              },
              {
                key: "scopedKey",
                value: function (t) {
                  return "".concat(this.scope, ":").concat(t);
                },
              },
            ]),
            t
          );
        })()),
        (e.ScopedLocalStorage = n);
    },
    1646: function (t, e, n) {
      "use strict";
      var r = n(366),
        i = n(367),
        o = n(1107),
        s = n(1108);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.WalletLinkSdkUI = void 0);
      var u = n(1647),
        a = n(1648),
        c = n(1650),
        l = n(1661);
      u = (function (t) {
        o(n, t);
        var e = s(n);
        function n(t) {
          var i;
          return (
            r(this, n),
            ((i = e.call(this, t)).attached = !1),
            (i.snackbar = new l.Snackbar({ darkMode: t.darkMode })),
            (i.linkFlow = new c.LinkFlow({
              darkMode: t.darkMode,
              version: t.version,
              sessionId: t.session.id,
              sessionSecret: t.session.secret,
              walletLinkUrl: t.walletLinkUrl,
              connected$: t.connected$,
              isParentConnection: !1,
            })),
            i
          );
        }
        return (
          i(n, [
            {
              key: "attach",
              value: function () {
                if (this.attached)
                  throw new Error("WalletLinkUI is already attached");
                var t = document.documentElement,
                  e = document.createElement("div");
                (e.className = "-walletlink-css-reset"),
                  t.appendChild(e),
                  this.linkFlow.attach(e),
                  this.snackbar.attach(e),
                  (this.attached = !0),
                  a.injectCssReset();
              },
            },
            {
              key: "requestEthereumAccounts",
              value: function (t) {
                this.linkFlow.open(t);
              },
            },
            {
              key: "hideRequestEthereumAccounts",
              value: function () {
                this.linkFlow.close();
              },
            },
            {
              key: "showConnecting",
              value: function (t) {
                return (
                  (t = {
                    message: "Confirm on phone",
                    menuItems: [
                      {
                        isRed: !0,
                        info: "Cancel transaction",
                        svgWidth: "11",
                        svgHeight: "11",
                        path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                        defaultFillRule: "inherit",
                        defaultClipRule: "inherit",
                        onClick: t.onCancel,
                      },
                      {
                        isRed: !1,
                        info: "Reset connection",
                        svgWidth: "10",
                        svgHeight: "11",
                        path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                        defaultFillRule: "evenodd",
                        defaultClipRule: "evenodd",
                        onClick: t.onResetConnection,
                      },
                    ],
                  }),
                  this.snackbar.presentItem(t)
                );
              },
            },
            {
              key: "reloadUI",
              value: function () {
                document.location.reload();
              },
            },
            {
              key: "inlineAccountsResponse",
              value: function () {
                return !1;
              },
            },
          ]),
          n
        );
      })(u.WalletLinkUI);
      e.WalletLinkSdkUI = u;
    },
    1647: function (t, e, n) {
      "use strict";
      var r = n(366);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.WalletLinkUI = void 0),
        (e.WalletLinkUI = function t(e) {
          r(this, t);
        });
    },
    1648: function (t, e, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.injectCssReset = void 0);
      var i = r(n(1649));
      e.injectCssReset = function () {
        var t = document.createElement("style");
        (t.type = "text/css"),
          t.appendChild(document.createTextNode(i.default)),
          document.documentElement.appendChild(t);
      };
    },
    1649: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default =
          '@namespace svg "http://www.w3.org/2000/svg";.-walletlink-css-reset,.-walletlink-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:transparent;background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;bottom:auto;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:block;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";right:auto;tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;width:auto;word-spacing:normal;z-index:auto}.-walletlink-css-reset *{box-sizing:border-box;display:initial;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-walletlink-css-reset [class*=container]{margin:0;padding:0}.-walletlink-css-reset style{display:none}');
    },
    1650: function (t, e, n) {
      "use strict";
      var r = n(366),
        i = n(367);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.LinkFlow = void 0);
      var o = n(1136),
        s = n(1175),
        u = n(1651),
        a = n(1174),
        c = n(1655);
      n = (function () {
        function t(e) {
          var n = this;
          r(this, t),
            (this.extensionUI$ = new s.BehaviorSubject({})),
            (this.subscriptions = new s.Subscription()),
            (this.isConnected = !1),
            (this.isOpen = !1),
            (this.onCancel = null),
            (this.root = null),
            (this.darkMode = e.darkMode),
            (this.version = e.version),
            (this.sessionId = e.sessionId),
            (this.sessionSecret = e.sessionSecret),
            (this.walletLinkUrl = e.walletLinkUrl),
            (this.isParentConnection = e.isParentConnection),
            (this.connected$ = e.connected$),
            fetch("https://api.wallet.coinbase.com/rpc/v2/getFeatureFlags")
              .then(function (t) {
                return t.json();
              })
              .then(function (t) {
                void 0 === (t = t.result.desktop.extension_ui)
                  ? n.extensionUI$.next({ value: !1 })
                  : n.extensionUI$.next({ value: t });
              })
              .catch(function (t) {
                n.extensionUI$.next({ value: !1 });
              });
        }
        return (
          i(t, [
            {
              key: "attach",
              value: function (t) {
                var e = this;
                (this.root = document.createElement("div")),
                  (this.root.className = "-walletlink-link-flow-root"),
                  t.appendChild(this.root),
                  this.render(),
                  this.subscriptions.add(
                    this.connected$.subscribe(function (t) {
                      e.isConnected !== t && ((e.isConnected = t), e.render());
                    })
                  );
              },
            },
            {
              key: "detach",
              value: function () {
                var t;
                this.root &&
                  (this.subscriptions.unsubscribe(),
                  o.render(null, this.root),
                  null !== (t = this.root.parentElement) &&
                    void 0 !== t &&
                    t.removeChild(this.root));
              },
            },
            {
              key: "open",
              value: function (t) {
                (this.isOpen = !0), (this.onCancel = t.onCancel), this.render();
              },
            },
            {
              key: "close",
              value: function () {
                (this.isOpen = !1), (this.onCancel = null), this.render();
              },
            },
            {
              key: "render",
              value: function () {
                var t,
                  e = this;
                this.root &&
                  ((t = this.extensionUI$
                    .pipe(
                      a.first(function (t) {
                        return void 0 !== t.value;
                      })
                    )
                    .subscribe(function (t) {
                      e.root &&
                        o.render(
                          t.value
                            ? o.h(c.TryExtensionLinkDialog, {
                                darkMode: e.darkMode,
                                version: e.version,
                                sessionId: e.sessionId,
                                sessionSecret: e.sessionSecret,
                                walletLinkUrl: e.walletLinkUrl,
                                isOpen: e.isOpen,
                                isConnected: e.isConnected,
                                isParentConnection: e.isParentConnection,
                                onCancel: e.onCancel,
                              })
                            : o.h(u.LinkDialog, {
                                darkMode: e.darkMode,
                                version: e.version,
                                sessionId: e.sessionId,
                                sessionSecret: e.sessionSecret,
                                walletLinkUrl: e.walletLinkUrl,
                                isOpen: e.isOpen,
                                isConnected: e.isConnected,
                                isParentConnection: e.isParentConnection,
                                onCancel: e.onCancel,
                              }),
                          e.root
                        );
                    })),
                  this.subscriptions.add(t));
              },
            },
          ]),
          t
        );
      })();
      e.LinkFlow = n;
    },
    1651: function (t, e, n) {
      "use strict";
      var r = n(1121),
        i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.LinkDialog = void 0);
      var o = i(n(1264)),
        s = n(1136),
        u = n(1202),
        a = i(n(1652)),
        c = n(1374),
        l = n(1375);
      e.LinkDialog = function (t) {
        var e,
          n = u.useState(!t.isOpen),
          i = (e = r(n, 2))[0],
          c = e[1],
          l = ((n = u.useState(!t.isOpen)), (n = (e = r(n, 2))[0]), e[1]);
        return (
          u.useEffect(
            function () {
              var e = t.isOpen,
                n = [
                  window.setTimeout(function () {
                    l(!e);
                  }, 10),
                ];
              return (
                e
                  ? c(!1)
                  : n.push(
                      window.setTimeout(function () {
                        c(!0);
                      }, 360)
                    ),
                function () {
                  n.forEach(window.clearTimeout);
                }
              );
            },
            [t.isOpen]
          ),
          s.h(
            "div",
            {
              class: o.default(
                "-walletlink-link-dialog-container",
                t.darkMode && "-walletlink-link-dialog-container-dark",
                i && "-walletlink-link-dialog-container-hidden"
              ),
            },
            s.h("style", null, a.default),
            s.h("div", {
              class: o.default(
                "-walletlink-link-dialog-backdrop",
                n && "-walletlink-link-dialog-backdrop-hidden"
              ),
            }),
            s.h(
              "div",
              { class: "-walletlink-link-dialog" },
              s.h(
                "div",
                {
                  class: o.default(
                    "-walletlink-link-dialog-box",
                    n && "-walletlink-link-dialog-box-hidden"
                  ),
                },
                s.h(h, {
                  darkMode: t.darkMode,
                  version: t.version,
                  sessionId: t.sessionId,
                  sessionSecret: t.sessionSecret,
                  walletLinkUrl: t.walletLinkUrl,
                  isConnected: t.isConnected,
                  isParentConnection: t.isParentConnection,
                }),
                t.onCancel && s.h(f, { onClick: t.onCancel })
              )
            )
          )
        );
      };
      var h = function (t) {
          var e = window.encodeURIComponent(t.walletLinkUrl),
            n = t.isParentConnection ? "parent-id" : "id";
          e = ""
            .concat(t.walletLinkUrl, "/#/link?")
            .concat(n, "=")
            .concat(t.sessionId, "&secret=")
            .concat(t.sessionSecret, "&server=")
            .concat(e, "&v=1");
          return s.h(
            "div",
            { class: "-walletlink-link-dialog-box-content" },
            s.h("h3", null, "Scan to", s.h("br", null), " Connect"),
            s.h(
              "div",
              { class: "-walletlink-link-dialog-box-content-qrcode" },
              s.h(
                "div",
                { class: "-walletlink-link-dialog-box-content-qrcode-wrapper" },
                s.h(c.QRCode, {
                  content: e,
                  width: 224,
                  height: 224,
                  fgColor: "#000",
                  bgColor: "transparent",
                })
              ),
              s.h("input", { type: "hidden", value: e }),
              !t.isConnected &&
                s.h(
                  "div",
                  {
                    class:
                      "-walletlink-link-dialog-box-content-qrcode-connecting",
                  },
                  s.h(l.Spinner, {
                    size: 128,
                    color: t.darkMode ? "#fff" : "#000",
                  }),
                  s.h("p", null, "Connecting...")
                ),
              s.h(
                "p",
                { title: "WalletLink v".concat(t.version) },
                "Powered by WalletLink"
              )
            ),
            s.h(
              "a",
              {
                href: "".concat(t.walletLinkUrl, "/#/wallets"),
                target: "_blank",
                rel: "noopener",
              },
              "Don\u2019t have a wallet app?"
            )
          );
        },
        f = function (t) {
          return s.h(
            "button",
            { class: "-walletlink-link-dialog-box-cancel", onClick: t.onClick },
            s.h("div", { class: "-walletlink-link-dialog-box-cancel-x" })
          );
        };
    },
    1652: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default =
          '.-walletlink-css-reset .-walletlink-link-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-walletlink-css-reset .-walletlink-link-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.33);transition:opacity .25s}.-walletlink-css-reset .-walletlink-link-dialog-backdrop-hidden{opacity:0}.-walletlink-css-reset .-walletlink-link-dialog-box{display:flex;position:relative;flex-direction:column;background-color:#f6f6f6;border-radius:16px;box-shadow:0px 16px 24px rgba(0,0,0,.1),0px 0px 8px rgba(0,0,0,.05);transform:scale(1);transition:opacity .25s,transform .25s;overflow:hidden}.-walletlink-css-reset .-walletlink-link-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-walletlink-css-reset .-walletlink-link-dialog-box-content{padding:24px;text-align:center}.-walletlink-css-reset .-walletlink-link-dialog-box-content h3{display:block;margin-bottom:24px;text-align:left;text-transform:uppercase;font-size:22px;font-weight:bold;line-height:1.2;color:#000}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode{position:relative;display:block;margin-bottom:24px;background-color:#f6f6f6;padding:16px;border-radius:16px;box-shadow:4px 4px 8px rgba(0,0,0,.15),-8px -8px 8px #fff;overflow:hidden}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode-wrapper{display:block;width:232px;height:232px;padding:4px;border-radius:4px;background:#f4f4f4;margin-bottom:16px}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode-wrapper img{display:block;width:224px;height:224px}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode>p{display:block;color:gray;font-weight:bold;font-size:12px;text-align:center}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode-connecting{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(246,246,246,.98)}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode-connecting p{margin-top:16px;color:#333;font-size:12px;font-weight:bold}.-walletlink-css-reset .-walletlink-link-dialog-box-content a{text-align:center;cursor:pointer;transition:color .1s;font-size:14px}.-walletlink-css-reset .-walletlink-link-dialog-box-content a,.-walletlink-css-reset .-walletlink-link-dialog-box-content a:link,.-walletlink-css-reset .-walletlink-link-dialog-box-content a:visited{color:#999}.-walletlink-css-reset .-walletlink-link-dialog-box-content a:hover,.-walletlink-css-reset .-walletlink-link-dialog-box-content a:active{color:#666;text-decoration:underline}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel{position:absolute;-webkit-appearance:none;display:flex;align-items:center;justify-content:center;top:24px;right:24px;width:24px;height:24px;border-radius:12px;background-color:#e7e7e7;cursor:pointer}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x{position:relative;display:block}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x::before,.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x::after{content:"";position:absolute;display:block;top:-1px;left:-7px;width:14px;height:2px;background-color:#999;transition:background-color .2s}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x::before{transform:rotate(45deg)}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x::after{transform:rotate(135deg)}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x-a,.-walletlink-css-reset .-walletlink-link-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x-b{background-color:#000}.-walletlink-css-reset .-walletlink-link-dialog-container{display:block}.-walletlink-css-reset .-walletlink-link-dialog-container-hidden{display:none}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box{background-color:#2a2a2a}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content h3{color:#ccc}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content-qrcode{background-color:#2a2a2a;box-shadow:4px 4px 8px rgba(0,0,0,.5),-8px -8px 8px #343434}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content-qrcode>p{color:#999}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content-qrcode-connecting{background:rgba(42,42,42,.98)}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content-qrcode-connecting p{color:#ddd}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a:link,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a:visited{color:#888}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a:hover,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a:active{color:#aaa}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel{background-color:#333}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel-x::before,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel-x::after{background-color:#aaa}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x::before,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x::after{background-color:#eee}');
    },
    1653: function (t, e) {
      function n(t) {
        (this.mode = i.MODE_8BIT_BYTE), (this.data = t), (this.parsedData = []);
        for (var e = 0, n = this.data.length; e < n; e++) {
          var r = [],
            o = this.data.charCodeAt(e);
          65536 < o
            ? ((r[0] = 240 | ((1835008 & o) >>> 18)),
              (r[1] = 128 | ((258048 & o) >>> 12)),
              (r[2] = 128 | ((4032 & o) >>> 6)),
              (r[3] = 128 | (63 & o)))
            : 2048 < o
            ? ((r[0] = 224 | ((61440 & o) >>> 12)),
              (r[1] = 128 | ((4032 & o) >>> 6)),
              (r[2] = 128 | (63 & o)))
            : 128 < o
            ? ((r[0] = 192 | ((1984 & o) >>> 6)), (r[1] = 128 | (63 & o)))
            : (r[0] = o),
            this.parsedData.push(r);
        }
        (this.parsedData = Array.prototype.concat.apply([], this.parsedData)),
          this.parsedData.length != this.data.length &&
            (this.parsedData.unshift(191),
            this.parsedData.unshift(187),
            this.parsedData.unshift(239));
      }
      function r(t, e) {
        (this.typeNumber = t),
          (this.errorCorrectLevel = e),
          (this.modules = null),
          (this.moduleCount = 0),
          (this.dataCache = null),
          (this.dataList = []);
      }
      (n.prototype = {
        getLength: function (t) {
          return this.parsedData.length;
        },
        write: function (t) {
          for (var e = 0, n = this.parsedData.length; e < n; e++)
            t.put(this.parsedData[e], 8);
        },
      }),
        (r.prototype = {
          addData: function (t) {
            (t = new n(t)), this.dataList.push(t), (this.dataCache = null);
          },
          isDark: function (t, e) {
            if (
              t < 0 ||
              this.moduleCount <= t ||
              e < 0 ||
              this.moduleCount <= e
            )
              throw new Error(t + "," + e);
            return this.modules[t][e];
          },
          getModuleCount: function () {
            return this.moduleCount;
          },
          make: function () {
            this.makeImpl(!1, this.getBestMaskPattern());
          },
          makeImpl: function (t, e) {
            (this.moduleCount = 4 * this.typeNumber + 17),
              (this.modules = new Array(this.moduleCount));
            for (var n = 0; n < this.moduleCount; n++) {
              this.modules[n] = new Array(this.moduleCount);
              for (var i = 0; i < this.moduleCount; i++)
                this.modules[n][i] = null;
            }
            this.setupPositionProbePattern(0, 0),
              this.setupPositionProbePattern(this.moduleCount - 7, 0),
              this.setupPositionProbePattern(0, this.moduleCount - 7),
              this.setupPositionAdjustPattern(),
              this.setupTimingPattern(),
              this.setupTypeInfo(t, e),
              7 <= this.typeNumber && this.setupTypeNumber(t),
              null == this.dataCache &&
                (this.dataCache = r.createData(
                  this.typeNumber,
                  this.errorCorrectLevel,
                  this.dataList
                )),
              this.mapData(this.dataCache, e);
          },
          setupPositionProbePattern: function (t, e) {
            for (var n = -1; n <= 7; n++)
              if (!(t + n <= -1 || this.moduleCount <= t + n))
                for (var r = -1; r <= 7; r++)
                  e + r <= -1 ||
                    this.moduleCount <= e + r ||
                    (this.modules[t + n][e + r] =
                      (0 <= n && n <= 6 && (0 == r || 6 == r)) ||
                      (0 <= r && r <= 6 && (0 == n || 6 == n)) ||
                      (2 <= n && n <= 4 && 2 <= r && r <= 4));
          },
          getBestMaskPattern: function () {
            for (var t = 0, e = 0, n = 0; n < 8; n++) {
              this.makeImpl(!0, n);
              var r = o.getLostPoint(this);
              (0 == n || r < t) && ((t = r), (e = n));
            }
            return e;
          },
          createMovieClip: function (t, e, n) {
            var r = t.createEmptyMovieClip(e, n);
            this.make();
            for (var i = 0; i < this.modules.length; i++)
              for (var o = +i, s = 0; s < this.modules[i].length; s++) {
                var u = +s;
                this.modules[i][s] &&
                  (r.beginFill(0, 100),
                  r.moveTo(u, o),
                  r.lineTo(1 + u, o),
                  r.lineTo(1 + u, 1 + o),
                  r.lineTo(u, 1 + o),
                  r.endFill());
              }
            return r;
          },
          setupTimingPattern: function () {
            for (var t = 8; t < this.moduleCount - 8; t++)
              null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
            for (var e = 8; e < this.moduleCount - 8; e++)
              null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0);
          },
          setupPositionAdjustPattern: function () {
            for (
              var t = o.getPatternPosition(this.typeNumber), e = 0;
              e < t.length;
              e++
            )
              for (var n = 0; n < t.length; n++) {
                var r = t[e],
                  i = t[n];
                if (null == this.modules[r][i])
                  for (var s = -2; s <= 2; s++)
                    for (var u = -2; u <= 2; u++)
                      this.modules[r + s][i + u] =
                        -2 == s ||
                        2 == s ||
                        -2 == u ||
                        2 == u ||
                        (0 == s && 0 == u);
              }
          },
          setupTypeNumber: function (t) {
            for (
              var e = o.getBCHTypeNumber(this.typeNumber), n = 0;
              n < 18;
              n++
            ) {
              var r = !t && 1 == ((e >> n) & 1);
              this.modules[Math.floor(n / 3)][
                (n % 3) + this.moduleCount - 8 - 3
              ] = r;
            }
            for (n = 0; n < 18; n++)
              (r = !t && 1 == ((e >> n) & 1)),
                (this.modules[(n % 3) + this.moduleCount - 8 - 3][
                  Math.floor(n / 3)
                ] = r);
          },
          setupTypeInfo: function (t, e) {
            e = (this.errorCorrectLevel << 3) | e;
            for (var n = o.getBCHTypeInfo(e), r = 0; r < 15; r++) {
              var i = !t && 1 == ((n >> r) & 1);
              r < 6
                ? (this.modules[r][8] = i)
                : r < 8
                ? (this.modules[r + 1][8] = i)
                : (this.modules[this.moduleCount - 15 + r][8] = i);
            }
            for (r = 0; r < 15; r++)
              (i = !t && 1 == ((n >> r) & 1)),
                r < 8
                  ? (this.modules[8][this.moduleCount - r - 1] = i)
                  : r < 9
                  ? (this.modules[8][15 - r - 1 + 1] = i)
                  : (this.modules[8][15 - r - 1] = i);
            this.modules[this.moduleCount - 8][8] = !t;
          },
          mapData: function (t, e) {
            for (
              var n = -1,
                r = this.moduleCount - 1,
                i = 7,
                s = 0,
                u = this.moduleCount - 1;
              0 < u;
              u -= 2
            )
              for (6 == u && u--; ; ) {
                for (var a, c, l = 0; l < 2; l++)
                  null == this.modules[r][u - l] &&
                    ((a = !1),
                    s < t.length && (a = 1 == ((t[s] >>> i) & 1)),
                    (c = o.getMask(e, r, u - l)),
                    (this.modules[r][u - l] = a = c ? !a : a),
                    -1 == --i && (s++, (i = 7)));
                if ((r += n) < 0 || this.moduleCount <= r) {
                  (r -= n), (n = -n);
                  break;
                }
              }
          },
        }),
        (r.PAD0 = 236),
        (r.PAD1 = 17),
        (r.createData = function (t, e, n) {
          for (
            var i = c.getRSBlocks(t, e), s = new l(), u = 0;
            u < n.length;
            u++
          ) {
            var a = n[u];
            s.put(a.mode, 4),
              s.put(a.getLength(), o.getLengthInBits(a.mode, t)),
              a.write(s);
          }
          var h = 0;
          for (u = 0; u < i.length; u++) h += i[u].dataCount;
          if (s.getLengthInBits() > 8 * h)
            throw new Error(
              "code length overflow. (" +
                s.getLengthInBits() +
                ">" +
                8 * h +
                ")"
            );
          for (
            s.getLengthInBits() + 4 <= 8 * h && s.put(0, 4);
            s.getLengthInBits() % 8 != 0;

          )
            s.putBit(!1);
          for (
            ;
            !(s.getLengthInBits() >= 8 * h) &&
            (s.put(r.PAD0, 8), !(s.getLengthInBits() >= 8 * h));

          )
            s.put(r.PAD1, 8);
          return r.createBytes(s, i);
        }),
        (r.createBytes = function (t, e) {
          for (
            var n = 0,
              r = 0,
              i = 0,
              s = new Array(e.length),
              u = new Array(e.length),
              c = 0;
            c < e.length;
            c++
          ) {
            var l = e[c].dataCount,
              h = e[c].totalCount - l;
            (r = Math.max(r, l)), (i = Math.max(i, h));
            s[c] = new Array(l);
            for (var f = 0; f < s[c].length; f++)
              s[c][f] = 255 & t.buffer[f + n];
            n += l;
            h = o.getErrorCorrectPolynomial(h);
            var d = new a(s[c], h.getLength() - 1).mod(h);
            for (
              u[c] = new Array(h.getLength() - 1), f = 0;
              f < u[c].length;
              f++
            ) {
              var p = f + d.getLength() - u[c].length;
              u[c][f] = 0 <= p ? d.get(p) : 0;
            }
          }
          var b = 0;
          for (f = 0; f < e.length; f++) b += e[f].totalCount;
          var v = new Array(b),
            g = 0;
          for (f = 0; f < r; f++)
            for (c = 0; c < e.length; c++)
              f < s[c].length && (v[g++] = s[c][f]);
          for (f = 0; f < i; f++)
            for (c = 0; c < e.length; c++)
              f < u[c].length && (v[g++] = u[c][f]);
          return v;
        });
      for (
        var i = {
            MODE_NUMBER: 1,
            MODE_ALPHA_NUM: 2,
            MODE_8BIT_BYTE: 4,
            MODE_KANJI: 8,
          },
          o = {
            PATTERN_POSITION_TABLE: [
              [],
              [6, 18],
              [6, 22],
              [6, 26],
              [6, 30],
              [6, 34],
              [6, 22, 38],
              [6, 24, 42],
              [6, 26, 46],
              [6, 28, 50],
              [6, 30, 54],
              [6, 32, 58],
              [6, 34, 62],
              [6, 26, 46, 66],
              [6, 26, 48, 70],
              [6, 26, 50, 74],
              [6, 30, 54, 78],
              [6, 30, 56, 82],
              [6, 30, 58, 86],
              [6, 34, 62, 90],
              [6, 28, 50, 72, 94],
              [6, 26, 50, 74, 98],
              [6, 30, 54, 78, 102],
              [6, 28, 54, 80, 106],
              [6, 32, 58, 84, 110],
              [6, 30, 58, 86, 114],
              [6, 34, 62, 90, 118],
              [6, 26, 50, 74, 98, 122],
              [6, 30, 54, 78, 102, 126],
              [6, 26, 52, 78, 104, 130],
              [6, 30, 56, 82, 108, 134],
              [6, 34, 60, 86, 112, 138],
              [6, 30, 58, 86, 114, 142],
              [6, 34, 62, 90, 118, 146],
              [6, 30, 54, 78, 102, 126, 150],
              [6, 24, 50, 76, 102, 128, 154],
              [6, 28, 54, 80, 106, 132, 158],
              [6, 32, 58, 84, 110, 136, 162],
              [6, 26, 54, 82, 110, 138, 166],
              [6, 30, 58, 86, 114, 142, 170],
            ],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function (t) {
              for (
                var e = t << 10;
                0 <= o.getBCHDigit(e) - o.getBCHDigit(o.G15);

              )
                e ^= o.G15 << (o.getBCHDigit(e) - o.getBCHDigit(o.G15));
              return ((t << 10) | e) ^ o.G15_MASK;
            },
            getBCHTypeNumber: function (t) {
              for (
                var e = t << 12;
                0 <= o.getBCHDigit(e) - o.getBCHDigit(o.G18);

              )
                e ^= o.G18 << (o.getBCHDigit(e) - o.getBCHDigit(o.G18));
              return (t << 12) | e;
            },
            getBCHDigit: function (t) {
              for (var e = 0; 0 != t; ) e++, (t >>>= 1);
              return e;
            },
            getPatternPosition: function (t) {
              return o.PATTERN_POSITION_TABLE[t - 1];
            },
            getMask: function (t, e, n) {
              switch (t) {
                case 0:
                  return (e + n) % 2 == 0;
                case 1:
                  return e % 2 == 0;
                case 2:
                  return n % 3 == 0;
                case 3:
                  return (e + n) % 3 == 0;
                case 4:
                  return (Math.floor(e / 2) + Math.floor(n / 3)) % 2 == 0;
                case 5:
                  return ((e * n) % 2) + ((e * n) % 3) == 0;
                case 6:
                  return (((e * n) % 2) + ((e * n) % 3)) % 2 == 0;
                case 7:
                  return (((e * n) % 3) + ((e + n) % 2)) % 2 == 0;
                default:
                  throw new Error("bad maskPattern:" + t);
              }
            },
            getErrorCorrectPolynomial: function (t) {
              for (var e = new a([1], 0), n = 0; n < t; n++)
                e = e.multiply(new a([1, s.gexp(n)], 0));
              return e;
            },
            getLengthInBits: function (t, e) {
              if (1 <= e && e < 10)
                switch (t) {
                  case i.MODE_NUMBER:
                    return 10;
                  case i.MODE_ALPHA_NUM:
                    return 9;
                  case i.MODE_8BIT_BYTE:
                  case i.MODE_KANJI:
                    return 8;
                  default:
                    throw new Error("mode:" + t);
                }
              else if (e < 27)
                switch (t) {
                  case i.MODE_NUMBER:
                    return 12;
                  case i.MODE_ALPHA_NUM:
                    return 11;
                  case i.MODE_8BIT_BYTE:
                    return 16;
                  case i.MODE_KANJI:
                    return 10;
                  default:
                    throw new Error("mode:" + t);
                }
              else {
                if (!(e < 41)) throw new Error("type:" + e);
                switch (t) {
                  case i.MODE_NUMBER:
                    return 14;
                  case i.MODE_ALPHA_NUM:
                    return 13;
                  case i.MODE_8BIT_BYTE:
                    return 16;
                  case i.MODE_KANJI:
                    return 12;
                  default:
                    throw new Error("mode:" + t);
                }
              }
            },
            getLostPoint: function (t) {
              for (var e = t.getModuleCount(), n = 0, r = 0; r < e; r++)
                for (var i = 0; i < e; i++) {
                  for (var o = 0, s = t.isDark(r, i), u = -1; u <= 1; u++)
                    if (!(r + u < 0 || e <= r + u))
                      for (var a = -1; a <= 1; a++)
                        i + a < 0 ||
                          e <= i + a ||
                          (0 == u && 0 == a) ||
                          (s == t.isDark(r + u, i + a) && o++);
                  5 < o && (n += 3 + o - 5);
                }
              for (r = 0; r < e - 1; r++)
                for (i = 0; i < e - 1; i++) {
                  var c = 0;
                  t.isDark(r, i) && c++,
                    t.isDark(r + 1, i) && c++,
                    t.isDark(r, i + 1) && c++,
                    t.isDark(r + 1, i + 1) && c++,
                    (0 != c && 4 != c) || (n += 3);
                }
              for (r = 0; r < e; r++)
                for (i = 0; i < e - 6; i++)
                  t.isDark(r, i) &&
                    !t.isDark(r, i + 1) &&
                    t.isDark(r, i + 2) &&
                    t.isDark(r, i + 3) &&
                    t.isDark(r, i + 4) &&
                    !t.isDark(r, i + 5) &&
                    t.isDark(r, i + 6) &&
                    (n += 40);
              for (i = 0; i < e; i++)
                for (r = 0; r < e - 6; r++)
                  t.isDark(r, i) &&
                    !t.isDark(r + 1, i) &&
                    t.isDark(r + 2, i) &&
                    t.isDark(r + 3, i) &&
                    t.isDark(r + 4, i) &&
                    !t.isDark(r + 5, i) &&
                    t.isDark(r + 6, i) &&
                    (n += 40);
              var l = 0;
              for (i = 0; i < e; i++)
                for (r = 0; r < e; r++) t.isDark(r, i) && l++;
              return n + (Math.abs((100 * l) / e / e - 50) / 5) * 10;
            },
          },
          s = {
            glog: function (t) {
              if (t < 1) throw new Error("glog(" + t + ")");
              return s.LOG_TABLE[t];
            },
            gexp: function (t) {
              for (; t < 0; ) t += 255;
              for (; 256 <= t; ) t -= 255;
              return s.EXP_TABLE[t];
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256),
          },
          u = 0;
        u < 8;
        u++
      )
        s.EXP_TABLE[u] = 1 << u;
      for (u = 8; u < 256; u++)
        s.EXP_TABLE[u] =
          s.EXP_TABLE[u - 4] ^
          s.EXP_TABLE[u - 5] ^
          s.EXP_TABLE[u - 6] ^
          s.EXP_TABLE[u - 8];
      for (u = 0; u < 255; u++) s.LOG_TABLE[s.EXP_TABLE[u]] = u;
      function a(t, e) {
        if (null == t.length) throw new Error(t.length + "/" + e);
        for (var n = 0; n < t.length && 0 == t[n]; ) n++;
        this.num = new Array(t.length - n + e);
        for (var r = 0; r < t.length - n; r++) this.num[r] = t[r + n];
      }
      function c(t, e) {
        (this.totalCount = t), (this.dataCount = e);
      }
      function l() {
        (this.buffer = []), (this.length = 0);
      }
      (a.prototype = {
        get: function (t) {
          return this.num[t];
        },
        getLength: function () {
          return this.num.length;
        },
        multiply: function (t) {
          for (
            var e = new Array(this.getLength() + t.getLength() - 1), n = 0;
            n < this.getLength();
            n++
          )
            for (var r = 0; r < t.getLength(); r++)
              e[n + r] ^= s.gexp(s.glog(this.get(n)) + s.glog(t.get(r)));
          return new a(e, 0);
        },
        mod: function (t) {
          if (this.getLength() - t.getLength() < 0) return this;
          for (
            var e = s.glog(this.get(0)) - s.glog(t.get(0)),
              n = new Array(this.getLength()),
              r = 0;
            r < this.getLength();
            r++
          )
            n[r] = this.get(r);
          for (r = 0; r < t.getLength(); r++)
            n[r] ^= s.gexp(s.glog(t.get(r)) + e);
          return new a(n, 0).mod(t);
        },
      }),
        (c.RS_BLOCK_TABLE = [
          [1, 26, 19],
          [1, 26, 16],
          [1, 26, 13],
          [1, 26, 9],
          [1, 44, 34],
          [1, 44, 28],
          [1, 44, 22],
          [1, 44, 16],
          [1, 70, 55],
          [1, 70, 44],
          [2, 35, 17],
          [2, 35, 13],
          [1, 100, 80],
          [2, 50, 32],
          [2, 50, 24],
          [4, 25, 9],
          [1, 134, 108],
          [2, 67, 43],
          [2, 33, 15, 2, 34, 16],
          [2, 33, 11, 2, 34, 12],
          [2, 86, 68],
          [4, 43, 27],
          [4, 43, 19],
          [4, 43, 15],
          [2, 98, 78],
          [4, 49, 31],
          [2, 32, 14, 4, 33, 15],
          [4, 39, 13, 1, 40, 14],
          [2, 121, 97],
          [2, 60, 38, 2, 61, 39],
          [4, 40, 18, 2, 41, 19],
          [4, 40, 14, 2, 41, 15],
          [2, 146, 116],
          [3, 58, 36, 2, 59, 37],
          [4, 36, 16, 4, 37, 17],
          [4, 36, 12, 4, 37, 13],
          [2, 86, 68, 2, 87, 69],
          [4, 69, 43, 1, 70, 44],
          [6, 43, 19, 2, 44, 20],
          [6, 43, 15, 2, 44, 16],
          [4, 101, 81],
          [1, 80, 50, 4, 81, 51],
          [4, 50, 22, 4, 51, 23],
          [3, 36, 12, 8, 37, 13],
          [2, 116, 92, 2, 117, 93],
          [6, 58, 36, 2, 59, 37],
          [4, 46, 20, 6, 47, 21],
          [7, 42, 14, 4, 43, 15],
          [4, 133, 107],
          [8, 59, 37, 1, 60, 38],
          [8, 44, 20, 4, 45, 21],
          [12, 33, 11, 4, 34, 12],
          [3, 145, 115, 1, 146, 116],
          [4, 64, 40, 5, 65, 41],
          [11, 36, 16, 5, 37, 17],
          [11, 36, 12, 5, 37, 13],
          [5, 109, 87, 1, 110, 88],
          [5, 65, 41, 5, 66, 42],
          [5, 54, 24, 7, 55, 25],
          [11, 36, 12],
          [5, 122, 98, 1, 123, 99],
          [7, 73, 45, 3, 74, 46],
          [15, 43, 19, 2, 44, 20],
          [3, 45, 15, 13, 46, 16],
          [1, 135, 107, 5, 136, 108],
          [10, 74, 46, 1, 75, 47],
          [1, 50, 22, 15, 51, 23],
          [2, 42, 14, 17, 43, 15],
          [5, 150, 120, 1, 151, 121],
          [9, 69, 43, 4, 70, 44],
          [17, 50, 22, 1, 51, 23],
          [2, 42, 14, 19, 43, 15],
          [3, 141, 113, 4, 142, 114],
          [3, 70, 44, 11, 71, 45],
          [17, 47, 21, 4, 48, 22],
          [9, 39, 13, 16, 40, 14],
          [3, 135, 107, 5, 136, 108],
          [3, 67, 41, 13, 68, 42],
          [15, 54, 24, 5, 55, 25],
          [15, 43, 15, 10, 44, 16],
          [4, 144, 116, 4, 145, 117],
          [17, 68, 42],
          [17, 50, 22, 6, 51, 23],
          [19, 46, 16, 6, 47, 17],
          [2, 139, 111, 7, 140, 112],
          [17, 74, 46],
          [7, 54, 24, 16, 55, 25],
          [34, 37, 13],
          [4, 151, 121, 5, 152, 122],
          [4, 75, 47, 14, 76, 48],
          [11, 54, 24, 14, 55, 25],
          [16, 45, 15, 14, 46, 16],
          [6, 147, 117, 4, 148, 118],
          [6, 73, 45, 14, 74, 46],
          [11, 54, 24, 16, 55, 25],
          [30, 46, 16, 2, 47, 17],
          [8, 132, 106, 4, 133, 107],
          [8, 75, 47, 13, 76, 48],
          [7, 54, 24, 22, 55, 25],
          [22, 45, 15, 13, 46, 16],
          [10, 142, 114, 2, 143, 115],
          [19, 74, 46, 4, 75, 47],
          [28, 50, 22, 6, 51, 23],
          [33, 46, 16, 4, 47, 17],
          [8, 152, 122, 4, 153, 123],
          [22, 73, 45, 3, 74, 46],
          [8, 53, 23, 26, 54, 24],
          [12, 45, 15, 28, 46, 16],
          [3, 147, 117, 10, 148, 118],
          [3, 73, 45, 23, 74, 46],
          [4, 54, 24, 31, 55, 25],
          [11, 45, 15, 31, 46, 16],
          [7, 146, 116, 7, 147, 117],
          [21, 73, 45, 7, 74, 46],
          [1, 53, 23, 37, 54, 24],
          [19, 45, 15, 26, 46, 16],
          [5, 145, 115, 10, 146, 116],
          [19, 75, 47, 10, 76, 48],
          [15, 54, 24, 25, 55, 25],
          [23, 45, 15, 25, 46, 16],
          [13, 145, 115, 3, 146, 116],
          [2, 74, 46, 29, 75, 47],
          [42, 54, 24, 1, 55, 25],
          [23, 45, 15, 28, 46, 16],
          [17, 145, 115],
          [10, 74, 46, 23, 75, 47],
          [10, 54, 24, 35, 55, 25],
          [19, 45, 15, 35, 46, 16],
          [17, 145, 115, 1, 146, 116],
          [14, 74, 46, 21, 75, 47],
          [29, 54, 24, 19, 55, 25],
          [11, 45, 15, 46, 46, 16],
          [13, 145, 115, 6, 146, 116],
          [14, 74, 46, 23, 75, 47],
          [44, 54, 24, 7, 55, 25],
          [59, 46, 16, 1, 47, 17],
          [12, 151, 121, 7, 152, 122],
          [12, 75, 47, 26, 76, 48],
          [39, 54, 24, 14, 55, 25],
          [22, 45, 15, 41, 46, 16],
          [6, 151, 121, 14, 152, 122],
          [6, 75, 47, 34, 76, 48],
          [46, 54, 24, 10, 55, 25],
          [2, 45, 15, 64, 46, 16],
          [17, 152, 122, 4, 153, 123],
          [29, 74, 46, 14, 75, 47],
          [49, 54, 24, 10, 55, 25],
          [24, 45, 15, 46, 46, 16],
          [4, 152, 122, 18, 153, 123],
          [13, 74, 46, 32, 75, 47],
          [48, 54, 24, 14, 55, 25],
          [42, 45, 15, 32, 46, 16],
          [20, 147, 117, 4, 148, 118],
          [40, 75, 47, 7, 76, 48],
          [43, 54, 24, 22, 55, 25],
          [10, 45, 15, 67, 46, 16],
          [19, 148, 118, 6, 149, 119],
          [18, 75, 47, 31, 76, 48],
          [34, 54, 24, 34, 55, 25],
          [20, 45, 15, 61, 46, 16],
        ]),
        (c.getRSBlocks = function (t, e) {
          var n = c.getRsBlockTable(t, e);
          if (null == n)
            throw new Error(
              "bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e
            );
          for (var r = n.length / 3, i = [], o = 0; o < r; o++)
            for (
              var s = n[3 * o + 0], u = n[3 * o + 1], a = n[3 * o + 2], l = 0;
              l < s;
              l++
            )
              i.push(new c(u, a));
          return i;
        }),
        (c.getRsBlockTable = function (t, e) {
          switch (e) {
            case 1:
              return c.RS_BLOCK_TABLE[4 * (t - 1) + 0];
            case 0:
              return c.RS_BLOCK_TABLE[4 * (t - 1) + 1];
            case 3:
              return c.RS_BLOCK_TABLE[4 * (t - 1) + 2];
            case 2:
              return c.RS_BLOCK_TABLE[4 * (t - 1) + 3];
            default:
              return;
          }
        }),
        (l.prototype = {
          get: function (t) {
            var e = Math.floor(t / 8);
            return 1 == ((this.buffer[e] >>> (7 - (t % 8))) & 1);
          },
          put: function (t, e) {
            for (var n = 0; n < e; n++)
              this.putBit(1 == ((t >>> (e - n - 1)) & 1));
          },
          getLengthInBits: function () {
            return this.length;
          },
          putBit: function (t) {
            var e = Math.floor(this.length / 8);
            this.buffer.length <= e && this.buffer.push(0),
              t && (this.buffer[e] |= 128 >>> this.length % 8),
              this.length++;
          },
        });
      var h = [
        [17, 14, 11, 7],
        [32, 26, 20, 14],
        [53, 42, 32, 24],
        [78, 62, 46, 34],
        [106, 84, 60, 44],
        [134, 106, 74, 58],
        [154, 122, 86, 64],
        [192, 152, 108, 84],
        [230, 180, 130, 98],
        [271, 213, 151, 119],
        [321, 251, 177, 137],
        [367, 287, 203, 155],
        [425, 331, 241, 177],
        [458, 362, 258, 194],
        [520, 412, 292, 220],
        [586, 450, 322, 250],
        [644, 504, 364, 280],
        [718, 560, 394, 310],
        [792, 624, 442, 338],
        [858, 666, 482, 382],
        [929, 711, 509, 403],
        [1003, 779, 565, 439],
        [1091, 857, 611, 461],
        [1171, 911, 661, 511],
        [1273, 997, 715, 535],
        [1367, 1059, 751, 593],
        [1465, 1125, 805, 625],
        [1528, 1190, 868, 658],
        [1628, 1264, 908, 698],
        [1732, 1370, 982, 742],
        [1840, 1452, 1030, 790],
        [1952, 1538, 1112, 842],
        [2068, 1628, 1168, 898],
        [2188, 1722, 1228, 958],
        [2303, 1809, 1283, 983],
        [2431, 1911, 1351, 1051],
        [2563, 1989, 1423, 1093],
        [2699, 2099, 1499, 1139],
        [2809, 2213, 1579, 1219],
        [2953, 2331, 1663, 1273],
      ];
      function f(t) {
        if (
          ((this.options = {
            padding: 4,
            width: 256,
            height: 256,
            typeNumber: 4,
            color: "#000000",
            background: "#ffffff",
            ecl: "M",
            image: { svg: "", width: 0, height: 0 },
          }),
          (t = "string" == typeof t ? { content: t } : t))
        )
          for (var e in t) this.options[e] = t[e];
        if ("string" != typeof this.options.content)
          throw new Error("Expected 'content' as string!");
        if (0 === this.options.content.length)
          throw new Error("Expected 'content' to be non-empty!");
        if (!(0 <= this.options.padding))
          throw new Error("Expected 'padding' value to be non-negative!");
        if (!(0 < this.options.width && 0 < this.options.height))
          throw new Error(
            "Expected 'width' or 'height' value to be higher than zero!"
          );
        var n = this.options.content,
          i = (function (t, e) {
            for (
              var n,
                r =
                  ((n = t),
                  (t = encodeURI(n)
                    .toString()
                    .replace(/\%[0-9a-fA-F]{2}/g, "a")).length +
                    (t.length != n ? 3 : 0)),
                i = 1,
                o = 0,
                s = 0,
                u = h.length;
              s <= u;
              s++
            ) {
              var a = h[s];
              if (!a)
                throw new Error(
                  "Content too long: expected " + o + " but got " + r
                );
              switch (e) {
                case "L":
                  o = a[0];
                  break;
                case "M":
                  o = a[1];
                  break;
                case "Q":
                  o = a[2];
                  break;
                case "H":
                  o = a[3];
                  break;
                default:
                  throw new Error("Unknwon error correction level: " + e);
              }
              if (r <= o) break;
              i++;
            }
            if (h.length < i) throw new Error("Content too long");
            return i;
          })(n, this.options.ecl),
          o = (function (t) {
            switch (t) {
              case "L":
                return 1;
              case "M":
                return 0;
              case "Q":
                return 3;
              case "H":
                return 2;
              default:
                throw new Error("Unknwon error correction level: " + t);
            }
          })(this.options.ecl);
        (this.qrcode = new r(i, o)), this.qrcode.addData(n), this.qrcode.make();
      }
      (f.prototype.svg = function (t) {
        var e = this.options || {},
          n = this.qrcode.modules;
        void 0 === t && (t = { container: e.container || "svg" });
        for (
          var r = void 0 === e.pretty || !!e.pretty,
            i = r ? "  " : "",
            o = r ? "\r\n" : "",
            s = e.width,
            u = e.height,
            a = n.length,
            c = s / (a + 2 * e.padding),
            l = u / (a + 2 * e.padding),
            h = void 0 !== e.join && !!e.join,
            f = void 0 !== e.swap && !!e.swap,
            d = void 0 === e.xmlDeclaration || !!e.xmlDeclaration,
            p = void 0 !== e.predefined && !!e.predefined,
            b = p
              ? i +
                '<defs><path id="qrmodule" d="M0 0 h' +
                l +
                " v" +
                c +
                ' H0 z" style="fill:' +
                e.color +
                ';shape-rendering:crispEdges;" /></defs>' +
                o
              : "",
            v =
              i +
              '<rect x="0" y="0" width="' +
              s +
              '" height="' +
              u +
              '" style="fill:' +
              e.background +
              ';shape-rendering:crispEdges;"/>' +
              o,
            g = "",
            y = "",
            m = 0;
          m < a;
          m++
        )
          for (var w, _, x, k, M = 0; M < a; M++)
            n[M][m] &&
              ((w = M * c + e.padding * c),
              (_ = m * l + e.padding * l),
              f && ((k = w), (w = _), (_ = k)),
              h
                ? ((x = c + w),
                  (k = l + _),
                  (w = Number.isInteger(w) ? Number(w) : w.toFixed(2)),
                  (_ = Number.isInteger(_) ? Number(_) : _.toFixed(2)),
                  (x = Number.isInteger(x) ? Number(x) : x.toFixed(2)),
                  (y +=
                    "M" +
                    w +
                    "," +
                    _ +
                    " V" +
                    (k = Number.isInteger(k) ? Number(k) : k.toFixed(2)) +
                    " H" +
                    x +
                    " V" +
                    _ +
                    " H" +
                    w +
                    " Z "))
                : (g += p
                    ? i +
                      '<use x="' +
                      w.toString() +
                      '" y="' +
                      _.toString() +
                      '" href="#qrmodule" />' +
                      o
                    : i +
                      '<rect x="' +
                      w.toString() +
                      '" y="' +
                      _.toString() +
                      '" width="' +
                      c +
                      '" height="' +
                      l +
                      '" style="fill:' +
                      e.color +
                      ';shape-rendering:crispEdges;"/>' +
                      o));
        h &&
          (g =
            i +
            '<path x="0" y="0" style="fill:' +
            e.color +
            ';shape-rendering:crispEdges;" d="' +
            y +
            '" />');
        var S,
          E,
          j = "";
        void 0 !== this.options.image &&
          this.options.image.svg &&
          ((S = (s * this.options.image.width) / 100),
          (r = u / 2 - (E = (u * this.options.image.height) / 100) / 2),
          (j += '<svg x="'
            .concat(s / 2 - S / 2, '" y="')
            .concat(r, '" width="')
            .concat(S, '" height="')
            .concat(
              E,
              '" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">'
            )),
          (j += this.options.image.svg + o),
          (j += "</svg>"));
        var C = "";
        switch (t.container) {
          case "svg":
            d && (C += '<?xml version="1.0" standalone="yes"?>' + o),
              (C +=
                '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' +
                s +
                '" height="' +
                u +
                '">' +
                o),
              (C += b + v + g),
              (C += j),
              (C += "</svg>");
            break;
          case "svg-viewbox":
            d && (C += '<?xml version="1.0" standalone="yes"?>' + o),
              (C +=
                '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' +
                s +
                " " +
                u +
                '">' +
                o),
              (C += b + v + g),
              (C += j),
              (C += "</svg>");
            break;
          case "g":
            (C += '<g width="' + s + '" height="' + u + '">' + o),
              (C += b + v + g),
              (C += j),
              (C += "</g>");
            break;
          default:
            C += (b + v + g + j).replace(/^\s+/, "");
        }
        return C;
      }),
        (t.exports = f);
    },
    1654: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default =
          ".-walletlink-css-reset .-walletlink-spinner{display:inline-block}.-walletlink-css-reset .-walletlink-spinner svg{display:inline-block;animation:2s linear infinite -walletlink-spinner-svg}.-walletlink-css-reset .-walletlink-spinner svg circle{animation:1.9s ease-in-out infinite both -walletlink-spinner-circle;display:block;fill:transparent;stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -walletlink-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -walletlink-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}");
    },
    1655: function (t, e, n) {
      "use strict";
      var r = n(1121),
        i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.TryExtensionLinkDialog = void 0);
      var o = i(n(1264)),
        s = i(n(1656)),
        u = i(n(1657)),
        a = i(n(1658)),
        c = i(n(1659)),
        l = i(n(1660)),
        h = n(1136),
        f = n(1202),
        d = n(1374),
        p = n(1375);
      e.TryExtensionLinkDialog = function (t) {
        var e,
          n = f.useState(!t.isOpen),
          i = (e = r(n, 2))[0],
          u = e[1],
          a = ((n = f.useState(!t.isOpen)), (n = (e = r(n, 2))[0]), e[1]);
        return (
          f.useEffect(
            function () {
              var e = t.isOpen,
                n = [
                  window.setTimeout(function () {
                    a(!e);
                  }, 10),
                ];
              return (
                e
                  ? u(!1)
                  : n.push(
                      window.setTimeout(function () {
                        u(!0);
                      }, 360)
                    ),
                function () {
                  n.forEach(window.clearTimeout);
                }
              );
            },
            [t.isOpen]
          ),
          h.h(
            "div",
            {
              class: o.default(
                "-walletlink-extension-dialog-container",
                i && "-walletlink-extension-dialog-container-hidden"
              ),
            },
            h.h("style", null, s.default),
            h.h("div", {
              class: o.default(
                "-walletlink-extension-dialog-backdrop",
                n && "-walletlink-extension-dialog-backdrop-hidden"
              ),
            }),
            h.h(
              "div",
              { class: "-walletlink-extension-dialog" },
              h.h(
                "div",
                {
                  class: o.default(
                    "-walletlink-extension-dialog-box",
                    n && "-walletlink-extension-dialog-box-hidden"
                  ),
                },
                h.h(b, {
                  onInstallClick: function () {
                    window.open(
                      "https://api.wallet.coinbase.com/rpc/v2/desktop/chrome",
                      "_blank"
                    );
                  },
                }),
                h.h(v, {
                  darkMode: t.darkMode,
                  version: t.version,
                  sessionId: t.sessionId,
                  sessionSecret: t.sessionSecret,
                  walletLinkUrl: t.walletLinkUrl,
                  isConnected: t.isConnected,
                  isParentConnection: t.isParentConnection,
                }),
                t.onCancel && h.h(y, { onClick: t.onCancel })
              )
            )
          )
        );
      };
      var b = function (t) {
          return h.h(
            "div",
            { class: "-walletlink-extension-dialog-box-top" },
            h.h(
              "div",
              { class: "-walletlink-extension-dialog-box-top-install-region" },
              h.h("h2", null, "Try Coinbase Wallet extension"),
              h.h("button", { onClick: t.onInstallClick }, "Install")
            ),
            h.h(
              "div",
              { class: "-walletlink-extension-dialog-box-top-info-region" },
              h.h(g, {
                icon: u.default,
                text: "Connect to crypto apps with one click",
              }),
              h.h(g, {
                icon: c.default,
                text: "Private keys remain secure on mobile app",
              }),
              h.h(g, {
                icon: a.default,
                text: "Compatible with all crypto apps",
              })
            )
          );
        },
        v = function (t) {
          var e = window.encodeURIComponent(t.walletLinkUrl),
            n = t.isParentConnection ? "parent-id" : "id";
          e = ""
            .concat(t.walletLinkUrl, "/#/link?")
            .concat(n, "=")
            .concat(t.sessionId, "&secret=")
            .concat(t.sessionSecret, "&server=")
            .concat(e, "&v=1");
          return h.h(
            "div",
            { class: "-walletlink-extension-dialog-box-bottom" },
            h.h(
              "div",
              {
                class:
                  "-walletlink-extension-dialog-box-bottom-description-region",
              },
              h.h("h2", null, "Or scan to connect"),
              h.h(
                "body",
                {
                  class: "-walletlink-extension-dialog-box-bottom-description",
                },
                "Open ",
                h.h(
                  "a",
                  { href: "https://wallet.coinbase.com/" },
                  "Coinbase Wallet"
                ),
                " on your mobile phone and scan"
              )
            ),
            h.h(
              "div",
              { class: "-walletlink-extension-dialog-box-bottom-qr-region" },
              h.h(
                "div",
                { class: "-walletlink-extension-dialog-box-bottom-qr-wrapper" },
                h.h(d.QRCode, {
                  content: e,
                  width: 150,
                  height: 150,
                  fgColor: "#000",
                  bgColor: "transparent",
                  image: { svg: l.default, width: 34, height: 34 },
                })
              ),
              h.h("input", { type: "hidden", value: e }),
              !t.isConnected &&
                h.h(
                  "div",
                  {
                    class:
                      "-walletlink-extension-dialog-box-bottom-qr-connecting",
                  },
                  h.h(p.Spinner, { size: 36, color: "#000" }),
                  h.h("p", null, "Connecting...")
                )
            )
          );
        },
        g = function (t) {
          return h.h(
            "div",
            { class: "-walletlink-extension-dialog-box-top-description" },
            h.h(
              "div",
              {
                class:
                  "-walletlink-extension-dialog-box-top-description-icon-wrapper",
              },
              h.h("img", { src: t.icon })
            ),
            h.h(
              "body",
              {
                class: "-walletlink-extension-dialog-box-top-description-text",
              },
              t.text
            )
          );
        },
        y = function (t) {
          return h.h(
            "button",
            {
              class: "-walletlink-extension-dialog-box-cancel",
              onClick: t.onClick,
            },
            h.h("div", { class: "-walletlink-extension-dialog-box-cancel-x" })
          );
        };
    },
    1656: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default =
          '.-walletlink-css-reset .-walletlink-extension-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-walletlink-css-reset .-walletlink-extension-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.5);transition:opacity .25s}.-walletlink-css-reset .-walletlink-extension-dialog-backdrop-hidden{opacity:0}.-walletlink-css-reset .-walletlink-extension-dialog-box{display:flex;position:relative;max-width:500px;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-walletlink-css-reset .-walletlink-extension-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-walletlink-css-reset .-walletlink-extension-dialog-box-top{display:flex;flex-direction:row;background-color:#fff;border-radius:8px;overflow:hidden;min-height:300px}.-walletlink-css-reset .-walletlink-extension-dialog-box-top-install-region{display:flex;flex-basis:50%;flex-direction:column;justify-content:center;padding:32px}.-walletlink-css-reset .-walletlink-extension-dialog-box-top-install-region button{display:block;border-radius:8px;background-color:#1652f0;color:#fff;width:90%;min-width:fit-content;height:44px;margin-top:16px;font-size:16px;padding-left:16px;padding-right:16px;cursor:pointer;font-weight:500;text-align:center}.-walletlink-css-reset .-walletlink-extension-dialog-box-top-info-region{display:flex;flex-basis:50%;flex-direction:column;justify-content:center;background-color:#fafbfc}.-walletlink-css-reset .-walletlink-extension-dialog-box-top-description{display:flex;flex-direction:row;align-items:center;padding-top:14px;padding-bottom:14px;padding-left:24px;padding-right:32px}.-walletlink-css-reset .-walletlink-extension-dialog-box-top-description-icon-wrapper{display:block;position:relative;width:40px;height:40px;flex-shrink:0;flex-grow:0;border-radius:20px;background-color:#fff;box-shadow:0px 0px 8px rgba(0,0,0,.04),0px 16px 24px rgba(0,0,0,.06)}.-walletlink-css-reset .-walletlink-extension-dialog-box-top-description-icon-wrapper img{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}.-walletlink-css-reset .-walletlink-extension-dialog-box-top-description-text{margin-left:16px;flex-grow:1;font-size:13px;line-height:19px;color:#000;align-self:center}.-walletlink-css-reset .-walletlink-extension-dialog-box-bottom{display:flex;flex-direction:row;overflow:hidden;border-radius:8px;background-color:#fff;margin-top:8px}.-walletlink-css-reset .-walletlink-extension-dialog-box-bottom-description-region{display:flex;flex-direction:column;justify-content:center;padding:32px;flex-grow:1}.-walletlink-css-reset .-walletlink-extension-dialog-box-bottom-description{font-size:13px;line-height:19px;margin-top:12px;color:#aaa}.-walletlink-css-reset .-walletlink-extension-dialog-box-bottom-description a{font-size:inherit;line-height:inherit;color:#1652f0;cursor:pointer}.-walletlink-css-reset .-walletlink-extension-dialog-box-bottom-qr-region{position:relative;flex-shrink:0;display:flex;flex-direction:column;justify-content:center;padding-left:24px;padding-right:24px;padding-top:16px;padding-bottom:16px}.-walletlink-css-reset .-walletlink-extension-dialog-box-bottom-qr-wrapper{position:relative;display:block;padding:8px;border-radius:8px;box-shadow:0px 4px 12px rgba(0,0,0,.1)}.-walletlink-css-reset .-walletlink-extension-dialog-box-bottom-qr-wrapper img{display:block}.-walletlink-css-reset .-walletlink-extension-dialog-box-bottom-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:rgba(255,255,255,.95)}.-walletlink-css-reset .-walletlink-extension-dialog-box-bottom-qr-connecting>p{font-size:12px;font-weight:bold;color:#000;margin-top:16px}.-walletlink-css-reset .-walletlink-extension-dialog-box-cancel{position:absolute;-webkit-appearance:none;display:flex;align-items:center;justify-content:center;top:16px;right:16px;width:24px;height:24px;border-radius:12px;background-color:#fafbfc;cursor:pointer}.-walletlink-css-reset .-walletlink-extension-dialog-box-cancel-x{position:relative;display:block;cursor:pointer}.-walletlink-css-reset .-walletlink-extension-dialog-box-cancel-x::before,.-walletlink-css-reset .-walletlink-extension-dialog-box-cancel-x::after{content:"";position:absolute;display:block;top:-1px;left:-7px;width:14px;height:1px;background-color:#000;transition:background-color .2s}.-walletlink-css-reset .-walletlink-extension-dialog-box-cancel-x::before{transform:rotate(45deg)}.-walletlink-css-reset .-walletlink-extension-dialog-box-cancel-x::after{transform:rotate(135deg)}.-walletlink-css-reset .-walletlink-extension-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x-a,.-walletlink-css-reset .-walletlink-extension-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x-b{background-color:#000}.-walletlink-css-reset .-walletlink-extension-dialog-container{display:block}.-walletlink-css-reset .-walletlink-extension-dialog-container-hidden{display:none}.-walletlink-css-reset .-walletlink-extension-dialog h2{display:block;text-align:left;font-size:22px;font-weight:600;line-height:28px;color:#000}');
    },
    1657: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1LjYzNSAyLjExN2EzLjg4OSAzLjg4OSAwIDAwLTUuNTIxIDBMNi44OSA1LjMzNWEzLjg5NCAzLjg5NCAwIDAwLTEuMDkgMy40MDRjLjA4My41MDYuMjY4IDEuMDExLjU1MyAxLjQ2Ni4xNTEuMjUzLjMzNi40NzIuNTM3LjY5MWwuNjIxLjYyNCAxLjE0MS0xLjE0Ni0uNjItLjYyNGEyLjEwNSAyLjEwNSAwIDAxLS40ODctLjc0MSAyLjM0IDIuMzQgMCAwMS41MDMtMi41MWwzLjIwNi0zLjIyYTIuMjkzIDIuMjkzIDAgMDEzLjIzOSAwYy44OS44OTQuODkgMi4zNDMgMCAzLjI1M2wtMS41MjcgMS41MzNjLjIzNC42NC4zMzUgMS4zMzEuMzAyIDIuMDA1bDIuMzgzLTIuMzkyYzEuNTEtMS41MzQgMS40OTMtNC4wMjgtLjAxNy01LjU2MXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBkPSJNMTEuMjcxIDcuNzQ1YTMuMTMgMy4xMyAwIDAwLS41NTQtLjY5bC0uNjItLjYyNC0xLjE0MiAxLjE0Ni42MjEuNjIzYy4yMTguMjIuMzg2LjQ4OS40ODcuNzU4LjMzNS44MjYuMTY3IDEuODItLjUwNCAyLjQ5NGwtMy4yMDUgMy4yMTlhMi4yOTMgMi4yOTMgMCAwMS0zLjI0IDAgMi4zMTYgMi4zMTYgMCAwMTAtMy4yNTJsMS41MjgtMS41MzRhNC44MTUgNC44MTUgMCAwMS0uMjg1LTIuMDA1bC0yLjM4MyAyLjM5M2EzLjkyNyAzLjkyNyAwIDAwMCA1LjU0NCAzLjkwOSAzLjkwOSAwIDAwNS41MzggMGwzLjIwNS0zLjIxOWEzLjk1OCAzLjk1OCAwIDAwMS4wOTEtMy40MDQgNC4yMTEgNC4yMTEgMCAwMC0uNTM3LTEuNDQ5eiIgZmlsbD0iIzE2NTJGMCIvPjwvc3ZnPg==");
    },
    1658: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTggMEMzLjU4IDAgMCAzLjU4IDAgOHMzLjU4IDggOCA4IDgtMy41OCA4LTgtMy41OC04LTgtOHptNS45MSA3aC0xLjk0Yy0uMS0xLjU3LS40Mi0zLS45MS00LjE1IDEuNDguODggMi41NSAyLjM4IDIuODUgNC4xNXpNOCAxNGMtLjQ1IDAtMS43Mi0xLjc3LTEuOTUtNWgzLjljLS4yMyAzLjIzLTEuNSA1LTEuOTUgNXpNNi4wNSA3QzYuMjggMy43NyA3LjU1IDIgOCAyYy40NSAwIDEuNzIgMS43NyAxLjk1IDVoLTMuOXpNNC45NCAyLjg1QzQuNDYgNCA0LjEzIDUuNDMgNC4wMyA3SDIuMDljLjMtMS43NyAxLjM3LTMuMjcgMi44NS00LjE1ek0yLjA5IDloMS45NGMuMSAxLjU3LjQyIDMgLjkxIDQuMTVBNS45OTggNS45OTggMCAwMTIuMDkgOXptOC45NyA0LjE1Yy40OC0xLjE1LjgxLTIuNTguOTEtNC4xNWgxLjk0YTUuOTk4IDUuOTk4IDAgMDEtMi44NSA0LjE1eiIgZmlsbD0iIzE2NTJGMCIvPjwvc3ZnPg==");
    },
    1659: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgN3Y5aDE0VjdIMXptNy41IDQuMzlWMTRoLTF2LTIuNjFjLS40NC0uMTktLjc1LS42My0uNzUtMS4xNGExLjI1IDEuMjUgMCAwMTIuNSAwYzAgLjUxLS4zMS45NS0uNzUgMS4xNHpNNS42NyA2VjQuMzNDNS42NyAzLjA1IDYuNzEgMiA4IDJzMi4zMyAxLjA1IDIuMzMgMi4zM1Y2aDJWNC4zM0MxMi4zMyAxLjk0IDEwLjM5IDAgOCAwUzMuNjcgMS45NCAzLjY3IDQuMzNWNmgyeiIgZmlsbD0iIzE2NTJGMCIvPjwvc3ZnPg==");
    },
    1660: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default =
          '<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n<circle cx="50" cy="50" r="50" fill="white"/>\n<circle cx="49.9996" cy="49.9996" r="43.6363" fill="#1B53E4"/>\n<circle cx="49.9996" cy="49.9996" r="43.6363" stroke="white"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M19.3379 49.9484C19.3379 66.8508 33.04 80.553 49.9425 80.553C66.8449 80.553 80.5471 66.8508 80.5471 49.9484C80.5471 33.0459 66.8449 19.3438 49.9425 19.3438C33.04 19.3438 19.3379 33.0459 19.3379 49.9484ZM44.0817 40.0799C41.8725 40.0799 40.0817 41.8708 40.0817 44.0799V55.8029C40.0817 58.012 41.8725 59.8029 44.0817 59.8029H55.8046C58.0138 59.8029 59.8046 58.012 59.8046 55.8029V44.0799C59.8046 41.8708 58.0138 40.0799 55.8046 40.0799H44.0817Z" fill="white"/>\n</svg>\n\n');
    },
    1661: function (t, e, n) {
      "use strict";
      var r = n(1121),
        i = n(366),
        o = n(367),
        s =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Snackbar = void 0);
      var u = s(n(1264)),
        a = n(1136),
        c = n(1202),
        l = s(n(1662));
      e.Snackbar = (function () {
        function t(e) {
          i(this, t),
            (this.items = new Map()),
            (this.nextItemKey = 0),
            (this.root = null),
            (this.darkMode = e.darkMode);
        }
        return (
          o(t, [
            {
              key: "attach",
              value: function (t) {
                (this.root = document.createElement("div")),
                  (this.root.className = "-walletlink-snackbar-root"),
                  t.appendChild(this.root),
                  this.render();
              },
            },
            {
              key: "presentItem",
              value: function (t) {
                var e = this,
                  n = this.nextItemKey++;
                return (
                  this.items.set(n, t),
                  this.render(),
                  function () {
                    e.items.delete(n), e.render();
                  }
                );
              },
            },
            {
              key: "clear",
              value: function () {
                this.items.clear(), this.render();
              },
            },
            {
              key: "render",
              value: function () {
                this.root &&
                  a.render(
                    a.h(
                      "div",
                      null,
                      a.h(
                        h,
                        { darkMode: this.darkMode },
                        Array.from(this.items.entries()).map(function (t) {
                          t = (e = r(t, 2))[0];
                          var e = e[1];
                          return a.h(f, Object.assign({}, e, { key: t }));
                        })
                      )
                    ),
                    this.root
                  );
              },
            },
          ]),
          t
        );
      })();
      var h = function (t) {
          return a.h(
            "div",
            { class: u.default("-walletlink-snackbar-container") },
            a.h("style", null, l.default),
            a.h("div", { class: "-walletlink-snackbar" }, t.children)
          );
        },
        f = function (t) {
          var e = t.message,
            n = t.menuItems,
            i = c.useState(!0),
            o = ((i = (t = r(i, 2))[0]), t[1]),
            s = ((t = c.useState(!1)), (t = r(t, 2))[0]),
            l = t[1];
          return (
            c.useEffect(function () {
              var t = [
                window.setTimeout(function () {
                  o(!1);
                }, 1),
                window.setTimeout(function () {
                  l(!0);
                }, 1e4),
              ];
              return function () {
                t.forEach(window.clearTimeout);
              };
            }),
            a.h(
              "div",
              {
                class: u.default(
                  "-walletlink-snackbar-instance",
                  i && "-walletlink-snackbar-instance-hidden",
                  s && "-walletlink-snackbar-instance-expanded"
                ),
              },
              a.h(
                "div",
                {
                  class: "-walletlink-snackbar-instance-header",
                  onClick: function () {
                    l(!s);
                  },
                },
                a.h("img", {
                  src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
                  class: "-walletlink-snackbar-instance-header-cblogo",
                }),
                a.h(
                  "div",
                  { class: "-walletlink-snackbar-instance-header-message" },
                  e
                ),
                a.h(
                  "div",
                  { class: "-gear-container" },
                  !s &&
                    a.h(
                      "svg",
                      {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      a.h("circle", {
                        cx: "12",
                        cy: "12",
                        r: "12",
                        fill: "#F5F7F8",
                      })
                    ),
                  a.h("img", {
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                    class: "-gear-icon",
                    title: "Expand",
                  })
                )
              ),
              n &&
                0 < n.length &&
                a.h(
                  "div",
                  { class: "-walletlink-snackbar-instance-menu" },
                  n.map(function (t, e) {
                    return a.h(
                      "div",
                      {
                        class: u.default(
                          "-walletlink-snackbar-instance-menu-item",
                          t.isRed &&
                            "-walletlink-snackbar-instance-menu-item-is-red"
                        ),
                        onClick: t.onClick,
                        key: e,
                      },
                      a.h(
                        "svg",
                        {
                          width: t.svgWidth,
                          height: t.svgHeight,
                          viewBox: "0 0 10 11",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        a.h("path", {
                          "fill-rule": t.defaultFillRule,
                          "clip-rule": t.defaultClipRule,
                          d: t.path,
                          fill: "#AAAAAA",
                        })
                      ),
                      a.h(
                        "span",
                        {
                          class: u.default(
                            "-walletlink-snackbar-instance-menu-item-info",
                            t.isRed &&
                              "-walletlink-snackbar-instance-menu-item-info-is-red"
                          ),
                        },
                        t.info
                      )
                    );
                  })
                )
            )
          );
        };
    },
    1662: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default =
          ".-walletlink-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-walletlink-css-reset .-gear-container *{user-select:none}.-walletlink-css-reset .-gear-container svg{opacity:0;position:absolute}.-walletlink-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-walletlink-css-reset .-walletlink-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-walletlink-css-reset .-walletlink-snackbar *{user-select:none}.-walletlink-css-reset .-walletlink-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-walletlink-css-reset .-walletlink-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-walletlink-css-reset .-walletlink-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-walletlink-css-reset .-walletlink-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-walletlink-css-reset .-walletlink-snackbar-instance-header *{cursor:pointer}.-walletlink-css-reset .-walletlink-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-walletlink-css-reset .-walletlink-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-walletlink-css-reset .-walletlink-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-walletlink-css-reset .-walletlink-snackbar-instance-expanded .-walletlink-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}");
    },
    1663: function (t, e, n) {
      "use strict";
      var r = n(366),
        i = n(367),
        o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: function () {
                      return e[n];
                    },
                  });
              }
            : function (t, e, n, r) {
                t[(r = void 0 === r ? n : r)] = e[n];
              }),
        s =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, e) {
                Object.defineProperty(t, "default", {
                  enumerable: !0,
                  value: e,
                });
              }
            : function (t, e) {
                t.default = e;
              }),
        u =
          (this && this.__decorate) ||
          function (t, e, n, r) {
            var i,
              o = arguments.length,
              s =
                o < 3
                  ? e
                  : null === r
                  ? (r = Object.getOwnPropertyDescriptor(e, n))
                  : r;
            if (
              "object" == typeof Reflect &&
              "function" == typeof Reflect.decorate
            )
              s = Reflect.decorate(t, e, n, r);
            else
              for (var u = t.length - 1; 0 <= u; u--)
                (i = t[u]) &&
                  (s = (o < 3 ? i(s) : 3 < o ? i(e, n, s) : i(e, n)) || s);
            return 3 < o && s && Object.defineProperty(e, n, s), s;
          },
        a =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var n in t)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(t, n) &&
                  o(e, t, n);
            return s(e, t), e;
          },
        c =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.WalletLinkRelay = void 0);
      var l = c(n(1664)),
        h = c(n(1154)),
        f = n(1175),
        d = n(1174),
        p = n(1665),
        b = n(1164),
        v = a(n(1669)),
        g = n(1670),
        y = n(1376),
        m = n(1671),
        w = n(1672),
        _ = n(1673),
        x = n(1674),
        k = n(1675);
      ((n = (function () {
        function t(e) {
          var n = this;
          r(this, t),
            (this.appName = ""),
            (this.appLogoUrl = null),
            (this.walletLinkUrl = e.walletLinkUrl),
            (this.storage = e.storage),
            (this.session =
              g.Session.load(e.storage) || new g.Session(e.storage).save()),
            (this.relayEventManager = e.relayEventManager),
            (this.connection = new p.WalletLinkConnection(
              this.session.id,
              this.session.key,
              this.walletLinkUrl
            )),
            this.connection.incomingEvent$
              .pipe(
                d.filter(function (t) {
                  return "Web3Response" === t.event;
                })
              )
              .subscribe({ next: this.handleIncomingEvent }),
            this.connection.sessionConfig$
              .pipe(
                d.filter(function (t) {
                  return !!t.metadata && "1" === t.metadata.__destroyed;
                })
              )
              .subscribe({ next: this.resetAndReload }),
            this.connection.sessionConfig$
              .pipe(
                d.filter(function (t) {
                  return t.metadata && void 0 !== t.metadata.WalletUsername;
                })
              )
              .pipe(
                d.map(function (t) {
                  return v.decrypt(t.metadata.WalletUsername, n.session.secret);
                })
              )
              .subscribe({
                next: function (t) {
                  n.storage.setItem(k.WALLET_USER_NAME_KEY, t);
                },
              }),
            (this.ui = e.walletLinkUIConstructor({
              walletLinkUrl: e.walletLinkUrl,
              version: e.version,
              darkMode: e.darkMode,
              session: this.session,
              connected$: this.connection.connected$,
            })),
            this.connection.connect();
        }
        return (
          i(t, [
            {
              key: "attachUI",
              value: function () {
                this.ui.attach();
              },
            },
            {
              key: "resetAndReload",
              value: function () {
                var t = this;
                this.connection
                  .setSessionMetadata("__destroyed", "1")
                  .pipe(
                    d.timeout(1e3),
                    d.catchError(function (t) {
                      return f.of(null);
                    })
                  )
                  .subscribe(function (e) {
                    t.connection.destroy(), t.storage.clear(), t.ui.reloadUI();
                  });
              },
            },
            {
              key: "setAppInfo",
              value: function (t, e) {
                (this.appName = t), (this.appLogoUrl = e);
              },
            },
            {
              key: "getStorageItem",
              value: function (t) {
                return this.storage.getItem(t);
              },
            },
            {
              key: "setStorageItem",
              value: function (t, e) {
                this.storage.setItem(t, e);
              },
            },
            {
              key: "childRequestEthereumAccounts",
              value: function (t, e, n, r, i) {
                return this.sendRequest({
                  method: y.Web3Method.childRequestEthereumAccounts,
                  params: {
                    sessionId: t,
                    sessionSecret: e,
                    appName: n,
                    appLogoURL: r,
                    appURL: i,
                  },
                });
              },
            },
            {
              key: "requestEthereumAccounts",
              value: function () {
                return this.sendRequest({
                  method: y.Web3Method.requestEthereumAccounts,
                  params: {
                    appName: this.appName,
                    appLogoUrl: this.appLogoUrl || null,
                  },
                });
              },
            },
            {
              key: "signEthereumMessage",
              value: function (t, e, n, r) {
                return this.sendRequest({
                  method: y.Web3Method.signEthereumMessage,
                  params: {
                    message: b.hexStringFromBuffer(t, !0),
                    address: e,
                    addPrefix: n,
                    typedDataJson: r || null,
                  },
                });
              },
            },
            {
              key: "ethereumAddressFromSignedMessage",
              value: function (t, e, n) {
                return this.sendRequest({
                  method: y.Web3Method.ethereumAddressFromSignedMessage,
                  params: {
                    message: b.hexStringFromBuffer(t, !0),
                    signature: b.hexStringFromBuffer(e, !0),
                    addPrefix: n,
                  },
                });
              },
            },
            {
              key: "signEthereumTransaction",
              value: function (t) {
                return this.sendRequest({
                  method: y.Web3Method.signEthereumTransaction,
                  params: {
                    fromAddress: t.fromAddress,
                    toAddress: t.toAddress,
                    weiValue: b.bigIntStringFromBN(t.weiValue),
                    data: b.hexStringFromBuffer(t.data, !0),
                    nonce: t.nonce,
                    gasPriceInWei: t.gasPriceInWei
                      ? b.bigIntStringFromBN(t.gasPriceInWei)
                      : null,
                    gasLimit: t.gasLimit
                      ? b.bigIntStringFromBN(t.gasLimit)
                      : null,
                    chainId: t.chainId,
                    shouldSubmit: !1,
                  },
                });
              },
            },
            {
              key: "signAndSubmitEthereumTransaction",
              value: function (t) {
                return this.sendRequest({
                  method: y.Web3Method.signEthereumTransaction,
                  params: {
                    fromAddress: t.fromAddress,
                    toAddress: t.toAddress,
                    weiValue: b.bigIntStringFromBN(t.weiValue),
                    data: b.hexStringFromBuffer(t.data, !0),
                    nonce: t.nonce,
                    gasPriceInWei: t.gasPriceInWei
                      ? b.bigIntStringFromBN(t.gasPriceInWei)
                      : null,
                    gasLimit: t.gasLimit
                      ? b.bigIntStringFromBN(t.gasLimit)
                      : null,
                    chainId: t.chainId,
                    shouldSubmit: !0,
                  },
                });
              },
            },
            {
              key: "submitEthereumTransaction",
              value: function (t, e) {
                return this.sendRequest({
                  method: y.Web3Method.submitEthereumTransaction,
                  params: {
                    signedTransaction: b.hexStringFromBuffer(t, !0),
                    chainId: e,
                  },
                });
              },
            },
            {
              key: "scanQRCode",
              value: function (t) {
                return this.sendRequest({
                  method: y.Web3Method.scanQRCode,
                  params: { regExp: t },
                });
              },
            },
            {
              key: "arbitraryRequest",
              value: function (t) {
                return this.sendRequest({
                  method: y.Web3Method.arbitrary,
                  params: { data: t },
                });
              },
            },
            {
              key: "sendRequest",
              value: function (e) {
                var n = this;
                return new Promise(function (r, i) {
                  function o() {
                    n.publishWeb3RequestCanceledEvent(u),
                      n.handleWeb3ResponseMessage(
                        x.Web3ResponseMessage({
                          id: u,
                          response: _.ErrorResponse(
                            e.method,
                            "User rejected request"
                          ),
                        })
                      ),
                      null != s && s();
                  }
                  var s = null,
                    u = h.default.randomBytes(8).toString("hex"),
                    a = e.method === y.Web3Method.requestEthereumAccounts;
                  if (a) {
                    var c =
                      (null ===
                        (c =
                          null === window || void 0 === window
                            ? void 0
                            : window.navigator) || void 0 === c
                        ? void 0
                        : c.userAgent) || null;
                    if (
                      c &&
                      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        c
                      )
                    )
                      return void (window.location.href =
                        "https://go.cb-w.com/kQz6p7iFFfb");
                    n.ui.inlineAccountsResponse()
                      ? n.ui.requestEthereumAccounts({
                          onCancel: o,
                          onAccounts: function (t) {
                            n.handleWeb3ResponseMessage(
                              x.Web3ResponseMessage({
                                id: u,
                                response: _.RequestEthereumAccountsResponse(t),
                              })
                            );
                          },
                        })
                      : n.ui.requestEthereumAccounts({ onCancel: o }),
                      t.accountRequestCallbackIds.add(u);
                  } else s = n.ui.showConnecting({ onCancel: o, onResetConnection: n.resetAndReload });
                  n.relayEventManager.callbacks.set(u, function (t) {
                    return (
                      n.ui.hideRequestEthereumAccounts(),
                      null != s && s(),
                      t.errorMessage ? i(new Error(t.errorMessage)) : void r(t)
                    );
                  }),
                    (a && n.ui.inlineAccountsResponse()) ||
                      n.publishWeb3RequestEvent(u, e);
                });
              },
            },
            {
              key: "publishWeb3RequestEvent",
              value: function (t, e) {
                var n = this,
                  r = w.Web3RequestMessage({ id: t, request: e });
                this.publishEvent("Web3Request", r, !0).subscribe({
                  error: function (t) {
                    n.handleWeb3ResponseMessage(
                      x.Web3ResponseMessage({
                        id: r.id,
                        response: {
                          method: r.request.method,
                          errorMessage: t.message,
                        },
                      })
                    );
                  },
                });
              },
            },
            {
              key: "publishWeb3RequestCanceledEvent",
              value: function (t) {
                (t = m.Web3RequestCanceledMessage(t)),
                  this.publishEvent("Web3RequestCanceled", t, !1).subscribe();
              },
            },
            {
              key: "publishEvent",
              value: function (t, e, n) {
                return (
                  (e = v.encrypt(
                    JSON.stringify(
                      Object.assign(Object.assign({}, e), {
                        origin: location.origin,
                      })
                    ),
                    this.session.secret
                  )),
                  this.connection.publishEvent(t, e, n)
                );
              },
            },
            {
              key: "handleIncomingEvent",
              value: function (t) {
                try {
                  e = JSON.parse(v.decrypt(t.data, this.session.secret));
                } catch (t) {
                  return;
                }
                var e = x.isWeb3ResponseMessage(e) ? e : null;
                e && this.handleWeb3ResponseMessage(e);
              },
            },
            {
              key: "handleWeb3ResponseMessage",
              value: function (e) {
                var n = this,
                  r = e.response;
                if (_.isRequestEthereumAccountsResponse(r))
                  return (
                    Array.from(t.accountRequestCallbackIds.values()).forEach(
                      function (t) {
                        return n.invokeCallback(
                          Object.assign(Object.assign({}, e), { id: t })
                        );
                      }
                    ),
                    void t.accountRequestCallbackIds.clear()
                  );
                this.invokeCallback(e);
              },
            },
            {
              key: "invokeCallback",
              value: function (t) {
                var e = this.relayEventManager.callbacks.get(t.id);
                e &&
                  (e(t.response),
                  this.relayEventManager.callbacks.delete(t.id));
              },
            },
          ]),
          t
        );
      })()).accountRequestCallbackIds = new Set()),
        u([l.default], n.prototype, "resetAndReload", null),
        u([l.default], n.prototype, "handleIncomingEvent", null),
        (e.WalletLinkRelay = n);
    },
    1664: function (t, e, n) {
      "use strict";
      var r, i;
      function o(t, e, n) {
        if (!n || typeof n.value !== r.typeOfFunction)
          throw new TypeError(
            "Only methods can be decorated with @bind. <" +
              e +
              "> is not a method!"
          );
        return {
          configurable: r.boolTrue,
          get: function () {
            var t = n.value.bind(this);
            return (
              Object.defineProperty(this, e, {
                value: t,
                configurable: r.boolTrue,
                writable: r.boolTrue,
              }),
              t
            );
          },
        };
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        ((i = r = r || {}).typeOfFunction = "function"),
        (i.boolTrue = !0),
        (e.bind = o),
        (e.default = o);
    },
    1665: function (t, e, n) {
      "use strict";
      var r = n(536),
        i = n(366),
        o = n(367);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.WalletLinkConnection = void 0);
      var s = n(1175),
        u = n(1174),
        a = n(1246),
        c = n(1666),
        l = n(1667),
        h = n(1668);
      n = (function () {
        function e(t, n, r) {
          var o = this,
            c =
              3 < arguments.length && void 0 !== arguments[3]
                ? arguments[3]
                : WebSocket;
          i(this, e),
            (this.sessionId = t),
            (this.sessionKey = n),
            (this.subscriptions = new s.Subscription()),
            (this.destroyed = !1),
            (this.lastHeartbeatResponse = 0),
            (this.nextReqId = a.IntNumber(1)),
            (this.connectedSubject = new s.BehaviorSubject(!1)),
            (this.linkedSubject = new s.BehaviorSubject(!1)),
            (this.sessionConfigSubject = new s.ReplaySubject(1));
          var h = new l.RxWebSocket(r + "/rpc", c);
          (this.ws = h),
            this.subscriptions.add(
              h.connectionState$
                .pipe(
                  u.skip(1),
                  u.filter(function (t) {
                    return t === l.ConnectionState.DISCONNECTED && !o.destroyed;
                  }),
                  u.delay(5e3),
                  u.filter(function (t) {
                    return !o.destroyed;
                  }),
                  u.flatMap(function (t) {
                    return h.connect();
                  }),
                  u.retry()
                )
                .subscribe()
            ),
            this.subscriptions.add(
              h.connectionState$
                .pipe(
                  u.skip(2),
                  u.switchMap(function (t) {
                    return s.iif(
                      function () {
                        return t === l.ConnectionState.CONNECTED;
                      },
                      o.authenticate().pipe(
                        u.tap(function (t) {
                          return o.sendIsLinked();
                        }),
                        u.tap(function (t) {
                          return o.sendGetSessionConfig();
                        }),
                        u.map(function (t) {
                          return !0;
                        })
                      ),
                      s.of(!1)
                    );
                  }),
                  u.distinctUntilChanged(),
                  u.catchError(function (t) {
                    return s.of(!1);
                  })
                )
                .subscribe(function (t) {
                  return o.connectedSubject.next(t);
                })
            ),
            this.subscriptions.add(
              h.connectionState$
                .pipe(
                  u.skip(1),
                  u.switchMap(function (t) {
                    return s.iif(function () {
                      return t === l.ConnectionState.CONNECTED;
                    }, s.timer(0, 1e4));
                  })
                )
                .subscribe(function (t) {
                  return 0 === t ? o.updateLastHeartbeat() : o.heartbeat();
                })
            ),
            this.subscriptions.add(
              h.incomingData$
                .pipe(
                  u.filter(function (t) {
                    return "h" === t;
                  })
                )
                .subscribe(function (t) {
                  return o.updateLastHeartbeat();
                })
            ),
            this.subscriptions.add(
              h.incomingJSONData$
                .pipe(
                  u.filter(function (t) {
                    return ["IsLinkedOK", "Linked"].includes(t.type);
                  })
                )
                .subscribe(function (t) {
                  o.linkedSubject.next(t.linked || 0 < t.onlineGuests);
                })
            ),
            this.subscriptions.add(
              h.incomingJSONData$
                .pipe(
                  u.filter(function (t) {
                    return [
                      "GetSessionConfigOK",
                      "SessionConfigUpdated",
                    ].includes(t.type);
                  })
                )
                .subscribe(function (t) {
                  o.sessionConfigSubject.next({
                    webhookId: t.webhookId,
                    webhookUrl: t.webhookUrl,
                    metadata: t.metadata,
                  });
                })
            );
        }
        return (
          o(e, [
            {
              key: "connect",
              value: function () {
                if (this.destroyed) throw new Error("instance is destroyed");
                this.ws.connect().subscribe();
              },
            },
            {
              key: "destroy",
              value: function () {
                this.subscriptions.unsubscribe(),
                  this.ws.disconnect(),
                  (this.destroyed = !0);
              },
            },
            {
              key: "connected$",
              get: function () {
                return this.connectedSubject.asObservable();
              },
            },
            {
              key: "onceConnected$",
              get: function () {
                return this.connected$.pipe(
                  u.filter(function (t) {
                    return t;
                  }),
                  u.take(1),
                  u.map(function () {})
                );
              },
            },
            {
              key: "linked$",
              get: function () {
                return this.linkedSubject.asObservable();
              },
            },
            {
              key: "onceLinked$",
              get: function () {
                return this.linked$.pipe(
                  u.filter(function (t) {
                    return t;
                  }),
                  u.take(1),
                  u.map(function () {})
                );
              },
            },
            {
              key: "sessionConfig$",
              get: function () {
                return this.sessionConfigSubject.asObservable();
              },
            },
            {
              key: "incomingEvent$",
              get: function () {
                return this.ws.incomingJSONData$.pipe(
                  u.filter(function (t) {
                    return (
                      "Event" === t.type &&
                      "string" == typeof t.sessionId &&
                      "string" == typeof t.eventId &&
                      "string" == typeof t.event &&
                      "string" == typeof t.data
                    );
                  }),
                  u.map(function (t) {
                    return t;
                  })
                );
              },
            },
            {
              key: "setSessionMetadata",
              value: function (t, e) {
                var n = this,
                  i = c.ClientMessageSetSessionConfig({
                    id: a.IntNumber(this.nextReqId++),
                    sessionId: this.sessionId,
                    metadata: r({}, t, e),
                  });
                return this.onceConnected$.pipe(
                  u.flatMap(function (t) {
                    return n.makeRequest(i);
                  }),
                  u.map(function (t) {
                    if (h.isServerMessageFail(t))
                      throw new Error(
                        t.error || "failed to set session metadata"
                      );
                  })
                );
              },
            },
            {
              key: "publishEvent",
              value: function (t, e) {
                var n = this,
                  r =
                    2 < arguments.length &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  i = c.ClientMessagePublishEvent({
                    id: a.IntNumber(this.nextReqId++),
                    sessionId: this.sessionId,
                    event: t,
                    data: e,
                    callWebhook: r,
                  });
                return this.onceLinked$.pipe(
                  u.flatMap(function (t) {
                    return n.makeRequest(i);
                  }),
                  u.map(function (t) {
                    if (h.isServerMessageFail(t))
                      throw new Error(t.error || "failed to publish event");
                    return t.eventId;
                  })
                );
              },
            },
            {
              key: "sendData",
              value: function (t) {
                this.ws.sendData(JSON.stringify(t));
              },
            },
            {
              key: "updateLastHeartbeat",
              value: function () {
                this.lastHeartbeatResponse = Date.now();
              },
            },
            {
              key: "heartbeat",
              value: function () {
                if (2e4 < Date.now() - this.lastHeartbeatResponse)
                  this.ws.disconnect();
                else
                  try {
                    this.ws.sendData("h");
                  } catch (t) {}
              },
            },
            {
              key: "makeRequest",
              value: function (t) {
                var e =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : 6e4,
                  n = t.id;
                try {
                  this.sendData(t);
                } catch (t) {
                  return s.throwError(t);
                }
                return this.ws.incomingJSONData$.pipe(
                  u.timeoutWith(
                    e,
                    s.throwError(new Error("request ".concat(n, " timed out")))
                  ),
                  u.filter(function (t) {
                    return t.id === n;
                  }),
                  u.take(1)
                );
              },
            },
            {
              key: "authenticate",
              value: function () {
                var t = c.ClientMessageHostSession({
                  id: a.IntNumber(this.nextReqId++),
                  sessionId: this.sessionId,
                  sessionKey: this.sessionKey,
                });
                return this.makeRequest(t).pipe(
                  u.map(function (t) {
                    if (h.isServerMessageFail(t))
                      throw new Error(t.error || "failed to authentcate");
                  })
                );
              },
            },
            {
              key: "sendIsLinked",
              value: function () {
                var t = c.ClientMessageIsLinked({
                  id: a.IntNumber(this.nextReqId++),
                  sessionId: this.sessionId,
                });
                this.sendData(t);
              },
            },
            {
              key: "sendGetSessionConfig",
              value: function () {
                var t = c.ClientMessageGetSessionConfig({
                  id: a.IntNumber(this.nextReqId++),
                  sessionId: this.sessionId,
                });
                this.sendData(t);
              },
            },
          ]),
          e
        );
      })();
      e.WalletLinkConnection = n;
    },
    1666: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ClientMessagePublishEvent =
          e.ClientMessageSetSessionConfig =
          e.ClientMessageGetSessionConfig =
          e.ClientMessageIsLinked =
          e.ClientMessageHostSession =
            void 0),
        (e.ClientMessageHostSession = function (t) {
          return Object.assign({ type: "HostSession" }, t);
        }),
        (e.ClientMessageIsLinked = function (t) {
          return Object.assign({ type: "IsLinked" }, t);
        }),
        (e.ClientMessageGetSessionConfig = function (t) {
          return Object.assign({ type: "GetSessionConfig" }, t);
        }),
        (e.ClientMessageSetSessionConfig = function (t) {
          return Object.assign({ type: "SetSessionConfig" }, t);
        }),
        (e.ClientMessagePublishEvent = function (t) {
          return Object.assign({ type: "PublishEvent" }, t);
        });
    },
    1667: function (t, e, n) {
      "use strict";
      var r = n(366),
        i = n(367);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.RxWebSocket = e.ConnectionState = void 0);
      var o,
        s = n(1175),
        u = n(1174);
      ((n = o = e.ConnectionState || (e.ConnectionState = {}))[
        (n.DISCONNECTED = 0)
      ] = "DISCONNECTED"),
        (n[(n.CONNECTING = 1)] = "CONNECTING"),
        (n[(n.CONNECTED = 2)] = "CONNECTED"),
        (n = (function () {
          function t(e) {
            var n =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : WebSocket;
            r(this, t),
              (this.WebSocketClass = n),
              (this.webSocket = null),
              (this.connectionStateSubject = new s.BehaviorSubject(
                o.DISCONNECTED
              )),
              (this.incomingDataSubject = new s.Subject()),
              (this.url = e.replace(/^http/, "ws"));
          }
          return (
            i(t, [
              {
                key: "connect",
                value: function () {
                  var t = this;
                  return this.webSocket
                    ? s.throwError(new Error("webSocket object is not null"))
                    : new s.Observable(function (e) {
                        var n;
                        try {
                          t.webSocket = n = new t.WebSocketClass(t.url);
                        } catch (n) {
                          return void e.error(n);
                        }
                        t.connectionStateSubject.next(o.CONNECTING),
                          (n.onclose = function (n) {
                            t.clearWebSocket(),
                              e.error(
                                new Error(
                                  "websocket error "
                                    .concat(n.code, ": ")
                                    .concat(n.reason)
                                )
                              ),
                              t.connectionStateSubject.next(o.DISCONNECTED);
                          }),
                          (n.onopen = function (n) {
                            e.next(),
                              e.complete(),
                              t.connectionStateSubject.next(o.CONNECTED);
                          }),
                          (n.onmessage = function (e) {
                            t.incomingDataSubject.next(e.data);
                          });
                      }).pipe(u.take(1));
                },
              },
              {
                key: "disconnect",
                value: function () {
                  var t = this.webSocket;
                  if (t) {
                    this.clearWebSocket(),
                      this.connectionStateSubject.next(o.DISCONNECTED);
                    try {
                      t.close();
                    } catch (t) {}
                  }
                },
              },
              {
                key: "connectionState$",
                get: function () {
                  return this.connectionStateSubject.asObservable();
                },
              },
              {
                key: "incomingData$",
                get: function () {
                  return this.incomingDataSubject.asObservable();
                },
              },
              {
                key: "incomingJSONData$",
                get: function () {
                  return this.incomingData$.pipe(
                    u.flatMap(function (t) {
                      var e;
                      try {
                        e = JSON.parse(t);
                      } catch (t) {
                        return s.empty();
                      }
                      return s.of(e);
                    })
                  );
                },
              },
              {
                key: "sendData",
                value: function (t) {
                  var e = this.webSocket;
                  if (!e) throw new Error("websocket is not connected");
                  e.send(t);
                },
              },
              {
                key: "clearWebSocket",
                value: function () {
                  var t = this.webSocket;
                  t &&
                    ((this.webSocket = null),
                    (t.onclose = null),
                    (t.onerror = null),
                    (t.onmessage = null),
                    (t.onopen = null));
                },
              },
            ]),
            t
          );
        })()),
        (e.RxWebSocket = n);
    },
    1668: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isServerMessageFail = void 0),
        (e.isServerMessageFail = function (t) {
          return (
            t &&
            "Fail" === t.type &&
            "number" == typeof t.id &&
            "string" == typeof t.sessionId &&
            "string" == typeof t.error
          );
        });
    },
    1669: function (t, e, n) {
      "use strict";
      (function (t) {
        var r =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.decrypt = e.encrypt = void 0);
        var i = r(n(1154));
        (e.encrypt = function (e, n) {
          var r = i.default.randomBytes(12);
          (n = i.default.createCipheriv("aes-256-gcm", t.from(n, "hex"), r)),
            (e = t.concat([n.update(t.from(e, "utf8")), n.final()]));
          return t.concat([r, n.getAuthTag(), e]).toString("hex");
        }),
          (e.decrypt = function (e, n) {
            var r = (o = t.from(e, "hex")).slice(0, 12),
              o = ((e = o.slice(12, 28)), o.slice(28));
            return (
              (r = i.default.createDecipheriv(
                "aes-256-gcm",
                t.from(n, "hex"),
                r
              )).setAuthTag(e),
              t.concat([r.update(o), r.final()]).toString("utf8")
            );
          });
      }.call(this, n(532).Buffer));
    },
    1670: function (t, e, n) {
      "use strict";
      var r = n(366),
        i = n(367),
        o =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Session = void 0);
      var s = o(n(1154)),
        u = n(1175),
        a = n(1174),
        c = "session:id",
        l = "session:secret",
        h = "session:linked";
      e.Session = (function () {
        function t(e, n, i, o) {
          r(this, t),
            (this._storage = e),
            (this._id = n || s.default.randomBytes(16).toString("hex")),
            (this._secret = i || s.default.randomBytes(32).toString("hex")),
            (this._key = s.default
              .createHash("sha256")
              .update(
                "".concat(this._id, ", ").concat(this._secret, " WalletLink"),
                "ascii"
              )
              .digest("hex")),
            (this._linked = !!o);
        }
        return (
          i(
            t,
            [
              {
                key: "id",
                get: function () {
                  return this._id;
                },
              },
              {
                key: "secret",
                get: function () {
                  return this._secret;
                },
              },
              {
                key: "key",
                get: function () {
                  return this._key;
                },
              },
              {
                key: "linked",
                get: function () {
                  return this._linked;
                },
                set: function (t) {
                  (this._linked = t), this.persistLinked();
                },
              },
              {
                key: "save",
                value: function () {
                  return (
                    this._storage.setItem(c, this._id),
                    this._storage.setItem(l, this._secret),
                    this.persistLinked(),
                    this
                  );
                },
              },
              {
                key: "persistLinked",
                value: function () {
                  this._storage.setItem(h, this._linked ? "1" : "0");
                },
              },
            ],
            [
              {
                key: "load",
                value: function (e) {
                  var n = e.getItem(c),
                    r = e.getItem(h),
                    i = e.getItem(l);
                  return n && i ? new t(e, n, i, "1" === r) : null;
                },
              },
              {
                key: "clear",
                value: function (t) {
                  t.removeItem(l), t.removeItem(c), t.removeItem(h);
                },
              },
              {
                key: "persistedSessionIdChange$",
                get: function () {
                  return u.fromEvent(window, "storage").pipe(
                    a.filter(function (t) {
                      return t.key === c;
                    }),
                    a.map(function (t) {
                      return {
                        oldValue: t.oldValue || null,
                        newValue: t.newValue || null,
                      };
                    })
                  );
                },
              },
            ]
          ),
          t
        );
      })();
    },
    1671: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Web3RequestCanceledMessage = void 0);
      var r = n(1265);
      e.Web3RequestCanceledMessage = function (t) {
        return { type: r.RelayMessageType.WEB3_REQUEST_CANCELED, id: t };
      };
    },
    1672: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Web3RequestMessage = void 0);
      var r = n(1265);
      e.Web3RequestMessage = function (t) {
        return Object.assign({ type: r.RelayMessageType.WEB3_REQUEST }, t);
      };
    },
    1673: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ChildRequestEthereumAccountsResponse =
          e.isRequestEthereumAccountsResponse =
          e.RequestEthereumAccountsResponse =
          e.ErrorResponse =
            void 0);
      var r = n(1376);
      (e.ErrorResponse = function (t, e) {
        return { method: t, errorMessage: e };
      }),
        (e.RequestEthereumAccountsResponse = function (t) {
          return { method: r.Web3Method.requestEthereumAccounts, result: t };
        }),
        (e.isRequestEthereumAccountsResponse = function (t) {
          return t && t.method === r.Web3Method.requestEthereumAccounts;
        }),
        (e.ChildRequestEthereumAccountsResponse = function (t) {
          return {
            method: r.Web3Method.childRequestEthereumAccounts,
            result: t,
          };
        });
    },
    1674: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isWeb3ResponseMessage = e.Web3ResponseMessage = void 0);
      var r = n(1265);
      (e.Web3ResponseMessage = function (t) {
        return Object.assign({ type: r.RelayMessageType.WEB3_RESPONSE }, t);
      }),
        (e.isWeb3ResponseMessage = function (t) {
          return t && t.type === r.RelayMessageType.WEB3_RESPONSE;
        });
    },
    1675: function (t, e, n) {
      "use strict";
      var r = n(366);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.WalletLinkRelayAbstract = e.WALLET_USER_NAME_KEY = void 0),
        (e.WALLET_USER_NAME_KEY = "walletUsername"),
        (e.WalletLinkRelayAbstract = function t() {
          r(this, t);
        });
    },
    1676: function (t, e, n) {
      "use strict";
      var r = n(366),
        i = n(367);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.WalletLinkRelayEventManager = void 0);
      var o = n(1164);
      e.WalletLinkRelayEventManager = (function () {
        function t() {
          r(this, t), (this._nextRequestId = 0), (this.callbacks = new Map());
        }
        return (
          i(t, [
            {
              key: "makeRequestId",
              value: function () {
                this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
                var t = this._nextRequestId,
                  e = o.prepend0x(t.toString(16));
                return this.callbacks.get(e) && this.callbacks.delete(e), t;
              },
            },
          ]),
          t
        );
      })();
    },
    1677: function (t) {
      t.exports = JSON.parse(
        '{"name":"walletlink","version":"2.1.3","description":"WalletLink JavaScript SDK","keywords":["cipher","cipherbrowser","coinbase","coinbasewallet","eth","ether","ethereum","etherium","injection","toshi","wallet","walletlink","web3"],"main":"dist/index.js","types":"dist/index.d.ts","repository":"https://github.com/walletlink/walletlink.git","author":"Coinbase, Inc.","license":"Apache-2.0","scripts":{"tsc":"tsc --noEmit --pretty","test":"jest","test:watch":"jest --watch","build":"node compile-assets.js && webpack --config webpack.config.js","build-chrome":"webpack --config webpack.config.chrome.js","build-npm":"tsc -p ./tsconfig.build.json","build:dev":"export WALLETLINK_URL=\'http://localhost:3000\'; yarn build && yarn build-chrome","build:dev:watch":"nodemon -e \'ts,tsx,js,json,css,scss,svg\' --ignore \'src/**/*-css.ts\' --ignore \'src/**/*-svg.ts\' --watch src/ --watch chrome/ --exec \'yarn build:dev\'","build:prod":"yarn build && yarn build-chrome && yarn build-npm && cp ./package.json ../README.md ../LICENSE build/npm && cp -a src/vendor-js build/npm/dist && sed -i.bak \'s|  \\"private\\": true,||g\' build/npm/package.json && rm -f build/npm/package.json.bak","lint":"tslint -p . \'src/**/*.ts{,x}\'","lint:watch":"nodemon -e ts,tsx,js,json,css,scss,svg --watch src/ --exec \'yarn tsc && yarn lint\'"},"dependencies":{"bind-decorator":"^1.0.11","bn.js":"^5.1.1","clsx":"^1.1.0","preact":"^10.5.9","rxjs":"^6.6.3","eth-rpc-errors":"4.0.2","@metamask/safe-event-emitter":"2.0.0","eth-json-rpc-filters":"4.2.2","eth-block-tracker":"4.4.3","json-rpc-engine":"6.1.0"},"devDependencies":{"@types/bn.js":"^4.11.6","@types/jest":"^26.0.19","@types/node":"^14.14.20","copy-webpack-plugin":"^6.4.1","core-js":"^3.8.2","jest":"^26.6.3","nodemon":"^2.0.6","raw-loader":"^4.0.2","regenerator-runtime":"^0.13.7","rxjs-tslint":"^0.1.7","sass":"^1.32.0","svgo":"^1.3.2","ts-jest":"^26.4.4","ts-loader":"^8.0.13","tslib":"^2.0.3","tslint":"^6.1.3","tslint-config-prettier":"^1.18.0","tslint-config-security":"^1.16.0","tslint-microsoft-contrib":"^6.2.0","typescript":"^4.1.3","webpack":"^4.44.2","webpack-cli":"^3.3.12","whatwg-fetch":"^3.5.0"},"engines":{"node":">= 10.0.0"},"jest":{"transform":{"^.+\\\\.tsx?$":"ts-jest"},"testEnvironment":"node","testPathIgnorePatterns":["<rootDir>/dist/","<rootDir>/node_modules/"],"testRegex":"(/__tests__/.*|\\\\.(test|spec))\\\\.(ts|tsx|js)$","moduleFileExtensions":["ts","js","json"]}}'
      );
    },
  },
]);
