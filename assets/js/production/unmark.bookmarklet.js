/*! unmark Internal - https://unmark.it - 2020-10-06 - https://unmark.it/ */

if (void 0 === unmark)
    var unmark = {};
!function(l) {
    unmark.ajax = function(r, i, o, s, a, e) {
        e = void 0 === e || e;
        var n = "csrf_token=" + unmark.urlEncode(unmark.vars.csrf_token) + "&content_type=" + (a = void 0 !== a ? a : "json");
        o = unmark.empty(o) ? n : o + "&" + n,
        l.ajax({
            dataType: a,
            cache: !1,
            url: r,
            type: i.toUpperCase(),
            data: o,
            async: e,
            success: function(a) {
                l.isFunction(s) && s(a)
            },
            error: function(a, e, n) {
                var t = {
                    error: n,
                    status: e,
                    request: a,
                    url: r,
                    type: i.toUpperCase(),
                    data: o
                };
                l.isFunction(s) && s(t)
            }
        })
    }
    ,
    unmark.readQuery = function(a) {
        for (var e = window.location.search.substring(1).split("&"), n = 0; n < e.length; n++) {
            var t = e[n].split("=");
            if (t[0] == a)
                return t[1]
        }
        return !1
    }
    ,
    unmark.swapClass = function(a, e, n) {
        var t = a;
        if (-1 === e.indexOf("*"))
            return t.removeClass(e),
            n ? t.addClass(n) : t;
        var r = new RegExp("\\s" + e.replace(/\*/g, "[A-Za-z0-9-_]+").split(" ").join("\\s|\\s") + "\\s","g");
        return t.each(function(a, e) {
            for (var n = " " + e.className + " "; r.test(n); )
                n = n.replace(r, " ");
            e.className = l.trim(n)
        }),
        n ? t.addClass(n) : t
    }
    ,
    unmark.replaceSpecial = function(a) {
        if (null != a) {
            var e = null;
            for (var n in unmark.special_chars)
                e = new RegExp(n,"gi"),
                a = a.replace(e, unmark.special_chars[n])
        }
        return a
    }
    ,
    unmark.urlEncode = function(a) {
        return a = unmark.replaceSpecial(a),
        encodeURIComponent(a)
    }
    ,
    unmark.empty = function(a) {
        var e = null != a ? a.length : 0;
        return !1 === a || "" === a || null === a || 0 === a || void 0 === a || e < 1
    }
    ,
    unmark.createCookie = function(a, e, n) {
        if (n) {
            var t = new Date;
            t.setTime(t.getTime() + 24 * n * 60 * 60 * 1e3);
            var r = "; expires=" + t.toGMTString()
        } else
            r = "";
        document.cookie = a + "=" + e + r + "; path=/"
    }
    ,
    unmark.readCookie = function(a) {
        for (var e = a + "=", n = document.cookie.split(";"), t = 0; t < n.length; t++) {
            for (var r = n[t]; " " == r.charAt(0); )
                r = r.substring(1, r.length);
            if (0 == r.indexOf(e))
                return r.substring(e.length, r.length)
        }
        return null
    }
    ,
    unmark.prettyLink = function(a) {
        return "/" === (a = a.replace(/https?:\/\/(www.)?/, "")).substr(-1) && (a = a.substr(0, a.length - 1)),
        a
    }
    ,
    unmark.read_query_str = function(a) {
        a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var e = new RegExp("[\\?&]" + a + "=([^&#]*)").exec(location.search);
        return null == e ? "" : decodeURIComponent(e[1].replace(/\+/g, " "))
    }
    ,
    unmark.extendFunction = function(a, e) {
        var n, t, r;
        this[a] = (t = (n = this)[a],
        r = e,
        function() {
            var a = t.apply(n, arguments)
              , e = r.apply(n, arguments);
            return null !== e ? e : a
        }
        )
    }
}(window.jQuery),
function(d) {
    unmark.updateDom = function() {
        var a = d("div.marks").data("label-class");
        d("body").removeClass().addClass(a),
        unmark.page_setup(d("body").height())
    }
    ,
    unmark.sidebar_collapse = function() {
        d(".mark").removeClass("view-inactive").removeClass("view-active"),
        Modernizr.mq("only screen and (max-width: 768px)") ? (d(".sidebar-content").removeClass("active"),
        d("#unmark-wrapper").removeClass("sidebar-active"),
        d(".mobile-header").removeClass("shift-left")) : d(".sidebar-content").removeClass("active")
    }
    ,
    unmark.sidebar_expand = function(a) {
        var e = unmark.sidebar_content.find('a[data-action="sidebar_expand"] i');
        if (!0 === a)
            return unmark.sidebar_content.animate({
                width: "340px"
            }, 300, function() {
                e.removeClass("icon-heading_collapse").addClass("icon-heading_expand"),
                unmark.sidebar_content.removeClass("wide")
            });
        e.hasClass("icon-heading_collapse") ? unmark.sidebar_content.animate({
            width: "340px"
        }, 300, function() {
            e.removeClass("icon-heading_collapse").addClass("icon-heading_expand"),
            unmark.sidebar_content.removeClass("wide")
        }) : unmark.sidebar_content.animate({
            width: "340px"
        }, 300, function() {
            e.removeClass("icon-heading_expand").addClass("icon-heading_collapse"),
            unmark.sidebar_content.addClass("wide")
        })
    }
    ,
    unmark.interact_nav = function(a, e) {
        a.preventDefault(),
        unmark.sidebar_collapse();
        var n = e.data("panel") ? e.data("panel") : ""
          , t = "" !== n ? n.replace(/^#/, "") : ""
          , r = -1 !== t.indexOf("label")
          , i = -1 !== e.attr("href").indexOf("label")
          , o = -1 !== t.indexOf("tags")
          , s = -1 !== e.attr("href").indexOf("tag")
          , l = -1 !== t.indexOf("archive")
          , u = !1;
        return (r || i) && (n = "#" + (t = "panel-label"),
        u = !0),
        (o || s) && (n = "#" + (t = "panel-tags"),
        !o && s ? u = !0 : o && !s && (u = !1)),
        l && (u = !0),
        d(".menu-item").removeClass("active-menu"),
        d(".navigation-content").find("[data-menu='" + t + "']").addClass("active-menu"),
        "#panel-settings" !== n && d.pjax({
            url: e.attr("href"),
            container: ".main-content",
            timeout: 6e3
        }),
        d(".nav-panel").not(n).hide(),
        d(n).show(),
        Modernizr.mq("only screen and (max-width: 767px)") && u && unmark.mobile_nav(!0),
        !1
    }
    ,
    unmark.scrollPaginate = function(a) {
        var e, n, t, r, i = "", o = !1, s = window.unmark_current_page + 1, l = window.unmark_total_pages;
        1 != pages_already_loaded[s] && a.scrollTop() + a.innerHeight() >= a[0].scrollHeight && !0 !== o && s <= l && !0 !== pages_already_loaded[s] && !0 !== o && (o = !0,
        t = Hogan.compile(unmark.template.marks),
        e = window.location.pathname,
        pages_already_loaded[s] = !0,
        unmark.ajax(e + "/" + s, "post", "", function(a) {
            if (a.marks) {
                for (r = Object.keys(a.marks).length,
                n = 1; n < r; n++)
                    a.marks[n].prettyurl = unmark.prettyLink(a.marks[n].url),
                    i += t.render(a.marks[n]);
                unmark.main_content.find(".marks_list").append(i),
                window.unmark_current_page = s,
                o = !1
            }
        }))
    }
    ,
    unmark.updateCounts = function() {
        unmark.getData("stats", function(a) {
            var e = a.stats.archived
              , n = (a.stats.saved,
            a.stats.marks);
            d(".na-today").text(e.today),
            d(".ns-year").text(n["ages ago"])
        })
    }
    ,
    unmark.getData = function(a, e) {
        unmark.ajax("/marks/get/" + a, "post", "", e)
    }
    ,
    unmark.close_window = function(a) {
        if (a)
            return window.close();
        var e = d(".mark-added-note").find("textarea").val()
          , n = d(".mark-added-note").find("textarea").data("id");
        unmark.saveNotes(n, e),
        window.close()
    }
    ,
    unmark.dismiss_this = function(a) {
        a.parent().parent().fadeOut()
    }
    ,
    unmark.page_setup = function(a) {
        unmark.main_content.height(a),
        unmark.sidebar_content.height(a),
        d(".nav-panel").height(a),
        d("body").height(a)
    }
    ,
    unmark.overlay = function(a) {
        !0 === a ? (unmark.mainpanels.addClass("blurme"),
        d('<div id="unmark-overlay"></div>').appendTo(document.body),
        d("#unmark-overlay").fadeIn(200)) : (unmark.mainpanels.removeClass("blurme"),
        d("#unmark-overlay").fadeOut(400),
        d(".hiddenform").fadeOut(300),
        setTimeout(function() {
            d("#unmark-overlay").remove(),
            d(".hiddenform").hide()
        }, 500),
        d("#helperforms input").val(""))
    }
}(window.jQuery),
function(k) {
    var p = 0;
    unmark.show_mark_info = function(a) {
        var e, n = a.data("mark"), t = k("#" + n).html(), r = jQuery.parseJSON(t), o = n.replace("mark-data-", ""), s = k("#mark-" + o).find(".note-placeholder").text(), l = (a.data("nofade"),
        null != r.mark_title ? r.mark_title : r.title);
        r.mark_title = l;
        var u = ""
          , d = Object.keys(r.tags).length
          , m = 1;
        for (var c in r.tags)
            void 0 !== c && (u += m == d ? c.toString() : c.toString() + ",",
            m++);
        r.tags_string = u,
        Modernizr.mq("only screen and (min-width: 768px)") && (k(".mark").removeClass("view-inactive").removeClass("view-active"),
        k(".mark").not("#mark-" + o).addClass("view-inactive"),
        k("#mark-" + o).addClass("view-active")),
        k(".sidebar-content").addClass("active"),
        "" !== s && (r.notes = s),
        e = Hogan.compile(unmark.template.sidebar).render(r),
        Modernizr.mq("only screen and (max-width: 767px)") && k("#mobile-sidebar-show").trigger("click"),
        unmark.sidebar_mark_info.html(e),
        function a() {
            p = arguments[0] || p,
            isNaN(p) ? k("ul.sidebar-label-list").prepend(unmark.label_list(p)) : unmark.getData("labels", a),
            unmark.marks_addLabel()
        }(),
        unmark.sidebar_mark_info.fadeIn(400, function() {
            var e = k("#input-title")
              , n = k("#input-tags")
              , t = k("#input-notes");
            intervalSaveTitle = setInterval(function() {
                e.hasClass("contentsChanged") && (unmark.saveTitle(o, e.val()),
                k("#mark-" + o + " h2 a").html(e.val()),
                e.removeClass("contentsChanged"))
            }, 1e3),
            intervalSaveNotes = setInterval(function() {
                t.hasClass("contentsChanged") && (unmark.saveNotes(o, t.val()),
                t.removeClass("contentsChanged"))
            }, 1e3),
            e.on("keyup", function(a) {
                e.hasClass("contentsChanged") || e.addClass("contentsChanged")
            }),
            t.on("keyup", function(a) {
                t.hasClass("contentsChanged") || t.addClass("contentsChanged")
            }),
            unmark.ajax("/tags/getAutocomplete", "get", "", function(a) {
                if (tagList = [],
                a.error && console.log(a.error),
                !1 !== a.tags)
                    for (i = 0; i < Object.keys(a.tags).length; i++)
                        tagList.push({
                            text: a.tags[i].name
                        });
                for (mark_added_tags_value = u.split(","),
                i = 0; i < mark_added_tags_value.length; i++)
                    tagList.push({
                        text: mark_added_tags_value[i]
                    });
                var e;
                ajax_loading = !1,
                e = tagList,
                n.selectize({
                    plugins: ["remove_button", "restore_on_backspace"],
                    delimiter: ",",
                    openOnFocus: !1,
                    persist: !1,
                    createOnBlur: !0,
                    closeAfterSelect: !0,
                    labelField: "text",
                    valueField: "text",
                    searchField: "text",
                    options: e,
                    create: function(a) {
                        return {
                            value: a,
                            text: a
                        }
                    },
                    onChange: function(a) {
                        unmark.saveTags(o, a),
                        setTimeout(unmark.update_tag_count, 1e3)
                    }
                })
            })
        })
    }
    ,
    unmark.update_label_count = function() {
        var r = k("ul.label-list");
        unmark.getData("labels", function(a) {
            var e, n, t = a.labels;
            for (e in t)
                n = t[e].total_active_marks,
                r.find(".label-" + t[e].label_id + " span").text(n)
        })
    }
    ,
    unmark.update_tag_count = function() {
        var r = k("ul.tag-list");
        unmark.getData("tags", function(a) {
            var e, n = a.tags.popular, t = "";
            for (e in n)
                t += '<li class="tag-' + n[e].tag_id + '"><a href="/marks/tag/' + n[e].slug + '">#' + n[e].name + "</a><span>" + n[e].total + "</span></li>";
            r.html(t)
        })
    }
    ,
    unmark.mark_archive = function(a) {
        var e = a.data("id");
        unmark.ajax("/mark/archive/" + e, "post", "", function(a) {
            null !== a.mark.archived_on ? (k("#mark-" + e).fadeOut(),
            unmark.sidebar_collapse(),
            unmark.update_label_count()) : alert("Sorry, We could not archive this mark at this time.")
        })
    }
    ,
    unmark.mark_restore = function(a) {
        var e = a.data("id");
        unmark.ajax("/mark/restore/" + e, "post", "", function(a) {
            null === a.mark.archived_on ? (k("#mark-" + e).fadeOut(),
            unmark.sidebar_collapse(),
            unmark.update_label_count()) : alert("Sorry, We could not restore this mark at this time.")
        })
    }
    ,
    unmark.archive_all = function() {
        unmark.ajax("/marks/archive/old", "post", "", function(a) {
            !0 === a.archived ? window.location = "/marks" : alert("Sorry, We could not archive the links at this time. Please try again.")
        })
    }
    ,
    unmark.marks_editMarkInfo = function(a) {
        var i, o = a.next(), s = k(o).data("id");
        o.on("keydown", function(a) {
            k(this).addClass("contentsChanged")
        }),
        o.on("blur", function(a) {
            var e, n, t, r;
            a.preventDefault(),
            13 !== a.which && "blur" !== a.type || (o.hasClass("contentsChanged") || editable_mark_title.hasClass("contentsChanged")) && (e = editable_mark_title.text(),
            n = o.text(),
            t = s,
            "" !== e && (i = "title=" + unmark.urlEncode(e) + "&notes=" + unmark.urlEncode(n) + "&tags=" + unmark.urlEncode(t),
            unmark.ajax("/mark/edit/" + r, "post", i, function(a) {
                k("#mark-" + r).find(".note-placeholder").text(n)
            })),
            o.removeClass("contentsChanged"))
        })
    }
    ,
    unmark.saveTitle = function(e, a) {
        if ("" != a) {
            var n = "title=" + unmark.urlEncode(a);
            unmark.ajax("/mark/edit/" + e, "post", n, function(a) {
                unmark.update_mark_info(a, e)
            })
        }
    }
    ,
    unmark.saveNotes = function(e, a) {
        var n = "notes=" + unmark.urlEncode(a);
        unmark.ajax("/mark/edit/" + e, "post", n, function(a) {
            unmark.update_mark_info(a, e)
        })
    }
    ,
    unmark.saveTags = function(e, a) {
        "" == a && (a = "unmark:removeAllTags");
        var n = "tags=" + unmark.urlEncode(a);
        unmark.ajax("/mark/edit/" + e, "post", n, function(a) {
            unmark.update_mark_info(a, e)
        })
    }
    ,
    unmark.marks_addLabel = function() {
        var e, n, t, r, i, o, s, l = k(".sidebar-label-list"), u = k("#label-chosen"), d = k(".sidebar-label"), m = !1;
        l.length < 1 && (l = k(".label-choices"),
        d = k(".mark-added-label"),
        m = !0),
        l.find("a").unbind(),
        l.find("a").on("click", function(a) {
            a.preventDefault(),
            e = l.data("id"),
            n = k(this).attr("rel"),
            r = k(this).text(),
            i = k("body").attr("class"),
            o = new RegExp("label"),
            t = "label_id=" + n,
            s = k('.action[data-id="' + e + '"][data-action="marks_addLabel"]'),
            unmark.ajax("/mark/edit/" + e, "post", t, function(a) {
                u.text(r),
                m ? (k("#currLabel").text(r),
                unmark.swapClass(k("#currLabel"), "label-*", "label-" + n),
                unmark.swapClass(d, "label-*", "label-" + n)) : (s.text(r),
                unmark.swapClass(s, "label-*", "label-" + n),
                unmark.swapClass(d, "label-*", "label-" + n),
                unmark.swapClass(k("#mark-" + e), "label-*", "label-" + n)),
                unmark.update_label_count(),
                unmark.update_mark_info(a, e),
                o.test(i) && i !== "label-" + n && (k("#mark-" + e).fadeOut(),
                unmark.sidebar_collapse())
            })
        })
    }
    ,
    unmark.update_mark_info = function(a, e) {
        var n = a.mark;
        n = JSON.stringify(n),
        k("#mark-data-" + e).html(n)
    }
    ,
    unmark.label_list = function(a) {
        var e, n, t = a.labels, r = "";
        for (e in t)
            r += '<li class="label-' + (n = t[e]).label_id + '"><a href="#" rel="' + n.label_id + '"><span>' + n.name + "</span></a></li>";
        return r
    }
    ,
    unmark.delete_mark = function(a) {
        var e = a.data("id")
          , n = a.data("view");
        unmark.ajax("/mark/delete/" + e, "post", "", function(a) {
            "0" === a.mark.active ? "bookmarklet" === n ? unmark.close_window(!0) : (unmark.sidebar_collapse(),
            k("#mark-" + e).fadeOut()) : alert("This mark could not be deleted, please try again laster.")
        })
    }
}(window.jQuery),
function(d) {
    d(document).ready(function() {
        var a, e, n = d("#currLabel"), t = d(".quick-tag"), r = d(".mark-added"), o = d(".mark-added-notes-area"), s = d(".mark-added-tags-area"), l = d("ul.label-choices");
        function u(a) {
            var e = unmark.label_list(a);
            l.prepend(e),
            unmark.marks_addLabel()
        }
        a = r.data("label"),
        e = r.data("label-name"),
        n.addClass("label-" + a).text(e),
        unmark.ajax("/tags/getAutocomplete", "get", "", function(a) {
            if (tagList = [],
            a.error && console.log(a.error),
            !1 !== a.tags)
                for (i = 0; i < Object.keys(a.tags).length; i++)
                    tagList.push({
                        text: a.tags[i].name
                    });
            for (mark_added_tags_value = s.val().split(","),
            i = 0; i < mark_added_tags_value.length; i++)
                tagList.push({
                    text: mark_added_tags_value[i]
                });
            var e;
            ajax_loading = !1,
            e = tagList,
            s.selectize({
                plugins: ["remove_button", "restore_on_backspace"],
                delimiter: ",",
                openOnFocus: !1,
                persist: !1,
                createOnBlur: !0,
                closeAfterSelect: !0,
                labelField: "text",
                valueField: "text",
                searchField: "text",
                options: e,
                create: function(a) {
                    return {
                        value: a,
                        text: a
                    }
                },
                onChange: function(a) {
                    unmark.saveTags(s.data("mark-id"), a)
                }
            }),
            unmark.getData("labels", u)
        }),
        o.on("blur keydown", function(a) {
            if (13 === a.which || "blur" === a.type) {
                a.preventDefault();
                var e = d(this).val()
                  , n = d(this).data("id")
                  , t = d(".mark-added-info h1").text();
                unmark.saveNotes(n, e, t)
            }
        }),
        t.on("click", function(a) {
            var e = s[0].selectize;
            e.createItem(d(this).html().replace("#", "")),
            e.focus()
        })
    })
}(window.jQuery),
function($) {
    unmark.init = function() {
        this.nav_panel = $(".navigation-pane"),
        this.main_panel = $(".main-wrapper"),
        this.main_content = $(".main-content"),
        this.sidebar_content = $(".sidebar-content"),
        this.main_panel_width = unmark.main_panel.width(),
        this.sidebar_default = $(".sidebar-default"),
        this.sidebar_mark_info = $(".sidebar-mark-info"),
        this.body_height = $(window).outerHeight(!0),
        this.special_chars = {
            "\\+": "&#43;"
        },
        this.mainpanels = $("#unmark-wrapper"),
        this.hamburger = $(".mobile-header .menu-activator"),
        this.mobile_header = $(".mobile-header");
        var load = unmark.readQuery("load");
        !1 !== load && (unmark.overlay(!0),
        $("#" + load).show().animate({
            top: 0
        }, 1e3)),
        window.unmark_current_page = 1,
        Modernizr.mq("only screen and (min-width: 768px)") && $("body").animate({
            opacity: 1
        }, 1e3),
        $(".navigation-content a, .navigation-pane-links a, .label-list a, .tag-list a").on("click", function(a) {
            return unmark.interact_nav(a, $(this)),
            !1
        }),
        $(document).on("click", "button[data-action], .action", function(e) {
            e.preventDefault(),
            e.stopPropagation();
            var action = $(this).data("action"), funct;
            funct = eval("unmark." + action),
            funct($(this))
        }),
        $(document).on("click", ".sidebar-info-panel h4.prev-coll", function(a) {
            a.preventDefault();
            var e = $(this).next("section")
              , n = $(this).find("i");
            e.is(":visible") ? (n.removeClass("icon-up"),
            n.addClass("icon-down"),
            e.slideUp()) : (n.removeClass("icon-down"),
            n.addClass("icon-up"),
            e.slideDown())
        }),
        0 < $("#unmark").length && ($(document).on("submit", "#search-form", function(a) {
            $.pjax.submit(a, ".main-content")
        }),
        $(document).on("pjax:complete", function() {
            window.unmark_current_page = 1,
            unmark.main_content.scrollTop(0),
            unmark.main_content.find(".marks").hide().fadeIn(),
            unmark.updateDom()
        })),
        $("form.ajaxsbmt").on("submit", function(e) {
            e.preventDefault();
            var form = $(this)
              , formid = form.attr("id");
            funct = eval("unmark." + formid),
            funct(form, e)
        }),
        $("#helperforms input.field-input").on("keydown change", function() {
            $(this).parent().parent().find(".response-message").hide()
        }),
        $(document).on("click", "#unmarkModalClose", function(a) {
            return a.preventDefault(),
            unmark.overlay(!1)
        }),
        $(document).on("click", "#unmark-overlay", function(a) {
            return a.preventDefault(),
            unmark.overlay(!1)
        }),
        $(document).on("mouseenter", ".label-choices li, .sidebar-label-list li", function(a) {
            var e = $(this)
              , n = e.find("span").text()
              , t = e.attr("class");
            $("#label-chosen").show().text(n).removeClass().addClass(t)
        }),
        $(document).on("mouseleave", ".label-choices li, .sidebar-label-list li", function(a) {
            $("#label-chosen").show().hide()
        }),
        pages_already_loaded = [],
        unmark.main_content.on("scroll", function(a) {
            unmark.scrollPaginate($(this))
        }),
        $("#importerUnmark").change(function(a) {
            return $("#importForm").submit()
        }),
        $("#importerHTML").change(function(a) {
            return $("#importFormHTML").submit()
        }),
        $("#importerReadability").change(function(a) {
            return $("#importFormReadability").submit()
        }),
        $(unmark.hamburger).on("click", function(a) {
            return a.preventDefault(),
            $(unmark.hamburger).toggleClass("active"),
            $(unmark.mainpanels).removeClass("sidebar-active"),
            $(unmark.mainpanels).toggleClass("nav-active"),
            $(unmark.mobile_header).toggleClass("shift-right"),
            !1
        }),
        $("#navigation-close-overlay").on("click", function(a) {
            return a.preventDefault(),
            $(unmark.hamburger).removeClass("active"),
            $(unmark.mainpanels).removeClass("nav-active"),
            $(unmark.mobile_header).removeClass("shift-right"),
            !1
        }),
        $(".mobile-header #mobile-sidebar-show").on("click", function(a) {
            return a.preventDefault(),
            $("#unmark-wrapper").removeClass(),
            $("#unmark-wrapper").addClass("sidebar-active"),
            $(".mobile-header .menu-activator").removeClass("active"),
            $(unmark.mobile_header).addClass("shift-left"),
            $(this).toggleClass("active"),
            !1
        }),
        $("#sidebar-close-overlay").on("click", function(a) {
            return a.preventDefault(),
            $("#unmark-wrapper").removeClass("sidebar-active"),
            $(unmark.mobile_header).removeClass("shift-left"),
            $(".mobile-header #mobile-sidebar-show").removeClass("active"),
            !1
        }),
        $(document).on("click", ".marks-heading-bar .search-button", function(a) {
            return a.preventDefault(),
            $(".search-bar").fadeIn(300, function(a) {
                setTimeout("$('#search-input').focus();", 0)
            }),
            !1
        }),
        $(document).on("click", ".marks-heading-bar .search-bar .close-button", function(a) {
            return a.preventDefault(),
            $(this).closest(".search-bar").fadeOut(300),
            !1
        }),
        $(document).on("click", ".marks-heading-bar .add-mark-button", function(a) {
            a.preventDefault(),
            $(".add-mark-bar").fadeIn(300, function(a) {
                setTimeout("$('#add-mark-input').focus();", 0)
            })
        }),
        $(document).on("click", ".marks-heading-bar .add-mark-bar .close-button", function(a) {
            a.preventDefault(),
            $(this).closest(".add-mark-bar").fadeOut(300)
        })
    }
    ,
    $(document).ready(function() {
        unmark.init()
    })
}(window.jQuery);
