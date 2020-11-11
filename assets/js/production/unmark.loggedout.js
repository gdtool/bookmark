/*! unmark Internal - https://unmark.it - 2020-10-06 - https://unmark.it/ */

if (void 0 === unmark)
    var unmark = {};
!function(u) {
    unmark.ajax = function(a, o, t, i, e, n) {
        n = void 0 === n || n;
        var r = "csrf_token=" + unmark.urlEncode(unmark.vars.csrf_token) + "&content_type=" + (e = void 0 !== e ? e : "json");
        t = unmark.empty(t) ? r : t + "&" + r,
        u.ajax({
            dataType: e,
            cache: !1,
            url: a,
            type: o.toUpperCase(),
            data: t,
            async: n,
            success: function(e) {
                u.isFunction(i) && i(e)
            },
            error: function(e, n, r) {
                var s = {
                    error: r,
                    status: n,
                    request: e,
                    url: a,
                    type: o.toUpperCase(),
                    data: t
                };
                u.isFunction(i) && i(s)
            }
        })
    }
    ,
    unmark.readQuery = function(e) {
        for (var n = window.location.search.substring(1).split("&"), r = 0; r < n.length; r++) {
            var s = n[r].split("=");
            if (s[0] == e)
                return s[1]
        }
        return !1
    }
    ,
    unmark.swapClass = function(e, n, r) {
        var s = e;
        if (-1 === n.indexOf("*"))
            return s.removeClass(n),
            r ? s.addClass(r) : s;
        var a = new RegExp("\\s" + n.replace(/\*/g, "[A-Za-z0-9-_]+").split(" ").join("\\s|\\s") + "\\s","g");
        return s.each(function(e, n) {
            for (var r = " " + n.className + " "; a.test(r); )
                r = r.replace(a, " ");
            n.className = u.trim(r)
        }),
        r ? s.addClass(r) : s
    }
    ,
    unmark.replaceSpecial = function(e) {
        if (null != e) {
            var n = null;
            for (var r in unmark.special_chars)
                n = new RegExp(r,"gi"),
                e = e.replace(n, unmark.special_chars[r])
        }
        return e
    }
    ,
    unmark.urlEncode = function(e) {
        return e = unmark.replaceSpecial(e),
        encodeURIComponent(e)
    }
    ,
    unmark.empty = function(e) {
        var n = null != e ? e.length : 0;
        return !1 === e || "" === e || null === e || 0 === e || void 0 === e || n < 1
    }
    ,
    unmark.createCookie = function(e, n, r) {
        if (r) {
            var s = new Date;
            s.setTime(s.getTime() + 24 * r * 60 * 60 * 1e3);
            var a = "; expires=" + s.toGMTString()
        } else
            a = "";
        document.cookie = e + "=" + n + a + "; path=/"
    }
    ,
    unmark.readCookie = function(e) {
        for (var n = e + "=", r = document.cookie.split(";"), s = 0; s < r.length; s++) {
            for (var a = r[s]; " " == a.charAt(0); )
                a = a.substring(1, a.length);
            if (0 == a.indexOf(n))
                return a.substring(n.length, a.length)
        }
        return null
    }
    ,
    unmark.prettyLink = function(e) {
        return "/" === (e = e.replace(/https?:\/\/(www.)?/, "")).substr(-1) && (e = e.substr(0, e.length - 1)),
        e
    }
    ,
    unmark.read_query_str = function(e) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var n = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
        return null == n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
    }
    ,
    unmark.extendFunction = function(e, n) {
        var r, s, a;
        this[e] = (s = (r = this)[e],
        a = n,
        function() {
            var e = s.apply(r, arguments)
              , n = a.apply(r, arguments);
            return null !== n ? n : e
        }
        )
    }
}(window.jQuery),
function(e) {
    e(document).ready(function() {
        var o = {};
        function t(e, n) {
            var r = e ? "error" : "";
            o.message.removeClass("error").addClass(r).text(n).fadeIn()
        }
        function i(e) {
            e ? o.submitbtn.find("i").removeClass("icon-go").addClass("icon-spinner") : o.submitbtn.find("i").removeClass("icon-spinner").addClass("icon-go")
        }
        function u() {
            i(!1),
            o.firstpass.val(""),
            o.secondpass.val("")
        }
        o.helper = e(".gethere"),
        o.helptrigger = e(".forgot-pass"),
        o.firstpass = e("#password"),
        o.secondpass = e("#password2"),
        o.submitbtn = e(".login-submit"),
        o.resetform = e("#unmarkReset"),
        o.message = e(".response-message"),
        o.helptrigger.on("click", function(e) {
            e.preventDefault(),
            o.helper.fadeToggle()
        }),
        o.firstpass.on("keypress change", function() {
            o.message.fadeOut()
        }),
        o.resetform.on("submit", function(e) {
            e.preventDefault();
            var n, r = o.firstpass.val(), s = o.secondpass.val(), a = unmark.vars.token;
            i(!0),
            r === s ? (n = "token=" + a + "&password=" + r,
            unmark.ajax("/tools/resetPassword", "post", n, function(e) {
                if (u(),
                e.success)
                    t(!1, "password has been changed"),
                    setTimeout(function() {
                        window.location.href = "/"
                    }, 3e3);
                else {
                    if (void 0 !== e.errors[91])
                        return t(!0, "Invalid Token");
                    t(!0, "密码必须同时包含大小写字母和至少一个数字.")
                }
            })) : (u(),
            t(!0, "密码不匹配."))
        })
    })
}(window.jQuery),
function(i) {
    i(document).ready(function() {
        var a = {};
        function o(e, n) {
            !0 === e ? a.login_wrapper.fadeOut(400, function() {
                i(this).hide(),
                a.login_spinner.fadeIn()
            }) : a.login_spinner.fadeOut(400, function() {
                i(this).hide(),
                a.login_wrapper.show().fadeIn(),
                n && s(!0, n)
            })
        }
        function t(e) {
            unmark.ajax("/login", "post", e, function(e) {
                var n;
                !0 === e.success ? (n = e.redirect_url,
                a.login_spinner.fadeOut(400, function() {
                    a.login_success.fadeIn(400, function() {
                        setTimeout(function() {
                            window.location.href = n
                        }, 800)
                    })
                })) : o(!1, e.message)
            })
        }
        function s(e, n) {
            var r = a.pass_wrapper.is(":visible") ? a.pass_wrapper : a.login_wrapper
              , s = e ? "error" : "";
            response = r.find(".response-message"),
            r.find("#password").val(""),
            response.removeClass("error").addClass(s).text(n).fadeIn()
        }
        a.message = i(".response-message"),
        a.login_wrapper = i(".loginWrapper"),
        a.login_spinner = i(".unmark-spinner"),
        a.login_success = i(".unmark-success"),
        a.login_form = i("#unmarkLogin"),
        a.pass_form = i("#unmarkForgotPass"),
        a.forget_submit = i(".forgot-submit"),
        a.input_fields = i("input.field-input"),
        a.input_email = i("#email"),
        a.helper_buttom = i(".forgot-pass"),
        a.pass_wrapper = i(".forgotPassWrapper"),
        a.login_page = i("#unmark_login_page"),
        a.about_page = i("#unmark_about_page"),
        a.input_email.focus(),
        a.login_form.on("submit", function(e) {
            e.preventDefault(),
            o(!0);
            var n = i("#email").val()
              , r = i("#password").val()
              , s = "email=" + unmark.urlEncode(n) + "&password=" + unmark.urlEncode(r);
            setTimeout(function() {
                t(s)
            }, 1500)
        }),
        a.pass_form.on("submit", function(e) {
            e.preventDefault(),
            a.forget_submit.find("i").removeClass("icon-go").addClass("icon-spinner");
            var n = i("#forgot_email").val()
              , r = "email=" + unmark.urlEncode(n);
            unmark.ajax("/tools/forgotPassword", "post", r, function(e) {
                e.success ? s(!1, "A confirmation link will be sent via email.") : s(!0, "发生错误"),
                a.forget_submit.find("i").removeClass("icon-spinner").addClass("icon-go")
            })
        }),
        a.input_fields.on("change", function() {
            a.message.slideUp()
        }),
        a.pass_form.find("input.field-input").on("keypress change", function(e) {
            a.forget_submit.fadeIn(),
            a.message.slideUp()
        }),
        a.helper_buttom.on("click", function(e) {
            e.preventDefault(),
            a.pass_wrapper.is(":visible") ? a.pass_wrapper.fadeOut(300, function() {
                i(this).hide(),
                o()
            }) : a.login_wrapper.fadeOut(300, function() {
                i(this).hide(),
                a.pass_wrapper.fadeIn(300)
            })
        }),
        i(".toggle_welcome").on("click", function(e) {
            var n;
            e.preventDefault(),
            (n = i(".login-page-bottom")).is(":visible") ? (n.fadeOut(),
            a.about_page.fadeOut().delay().fadeIn(800),
            a.login_page.animate({
                top: "-130%"
            }, 1e3)) : (a.about_page.fadeOut(),
            a.login_page.animate({
                top: "0"
            }, 1e3, function() {
                n.fadeIn(800)
            }))
        })
    })
}(window.jQuery),
"serviceWorker"in navigator && window.addEventListener("load", function() {
    navigator.serviceWorker.register("/service-worker.js").then(function(e) {
        console.log("ServiceWorker registration successful with scope: ", e.scope)
    }).catch(function(e) {})
}),
function(n) {
    function a(e, n, r) {
        var s = n ? "error" : "";
        e.parent().find(".response-message").removeClass("error").addClass(s).text(r).fadeIn()
    }
    function o(e, n) {
        var r = e.find(".login-submit i");
        n ? r.removeClass("icon-go").addClass("icon-spinner") : r.removeClass("icon-spinner").addClass("icon-go")
    }
    unmark.register_user = function(n) {
        var e, r = n.find("#email").val(), s = n.find("#password").val();
        if (s !== n.find("#password2").val())
            return a(n, !0, "The passwords must match.");
        o(n, !0),
        e = "email=" + unmark.urlEncode(r) + "&password=" + unmark.urlEncode(s),
        unmark.ajax("/register/user", "post", e, function(e) {
            e.success ? (a(n, !1, "You are now registered, logging you in..."),
            setTimeout(function() {
                window.location.href = "/"
            }, 2500)) : (o(n, !1),
            a(n, !0, e.message))
        })
    }
    ,
    n(document).ready(function() {
        n("#register_user").on("submit", function(e) {
            e.preventDefault(),
            unmark.register_user(n(this))
        })
    })
}(window.jQuery);

let deferredPrompt;
const addBtn = document.querySelector('.add-button');
//addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  //addBtn.style.display = 'block';

  addBtn.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    //addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});


