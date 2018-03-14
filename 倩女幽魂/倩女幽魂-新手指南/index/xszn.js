function showtab(e) {
    $(".explain .excon h4").hide(), $(".explain .excon p").hide(), $(".explain .excon .r").hide(), $(".explain .excon .l").hide();
    var n = $(".explain .excon").eq(e);
    $(".explain .excon").hide().eq(e).show(), n.find(".l").delay(200).fadeIn(), n.find(".l").find("h4").delay(500).fadeIn(), n.find(".l").find("p").delay(900).fadeIn(), n.find(".r").delay(1400).fadeIn(), n.find(".r").find("h4").delay(1700).fadeIn(), n.find(".r").find("p").delay(2100).fadeIn()
}
$(function () {
    nie.config.copyRight.setWhite()
});
var body = $("html, body");
nie.define("xszn", function () {
    function e(e) {
        for (var n in e) {
            var i = document.createElement("img");
            i.src = e[n]
        }
    }

    function n() {
        var e = $(window).width();
        if (1200 > e && c.css("right", 0), 1800 > e && e > 1200 && c.css("right", "20px"), e > 1800 && 1920 > e) {
            var n = e / 1920 * 120;
            c.css("right", n)
        }
    }

    function i() {
        var e = $(".wrap >div"), n = $(".slide"), i = $(document).scrollTop(), s = "";
        e.each(function () {
            var e = $(this);
            return i > e.offset().top - 200 ? void(s = e.attr("data-class")) : !1
        });
        var t = n.find(".active");
        s && t.attr("data-href") != s && (t.removeClass("active"), n.find("[data-href=" + s + "]").addClass("active"))
    }

    function s(e) {
        {
            var n = e.mp4, i = e.hdmp4, s = e.shdmp4, t = e.width || 850, o = e.height || 480, a = ($(window).height() - o) / 2;
            document.documentElement.scrollTop + document.body.scrollTop + a
        }
        $(['<div class="pop_video_bg" style="height:' + $("body").height() + 'px;"></div>', '<div class="pop_video" style="margin-left:-' + t / 2 + "px;width:" + t + "px;height:" + o + "px;top:" + a + 'px;">', '<div id="pop_vv"></div>', '<a class="close_pv" href="javascript:void(0)" class="btn_close">x</a>', "</div>"].join("")).appendTo($("body")), $(".pop_video").show("fast", function () {
            $(this).css("overflow", "visible")
        }), l.init({
            videoOpt: {
                fat: "#pop_vv",
                width: t,
                height: o,
                movieUrl: n,
                HDmovieUrl: i,
                SHDmovieUrl: s,
                autoPlay: !0,
                wmode: "window",
                barrageActive: !1
            }
        })
    }

    var t = {
        dkf: "https://qnm.res.netease.com/pc/gw/20170419110340/img/xszn/job/person/dk_f_26ecd65.png",
        yr: "https://qnm.res.netease.com/pc/gw/20170419110340/img/xszn/job/person/ss_f_ef409cb.png",
        yrn: "https://qnm.res.netease.com/pc/gw/20170419110340/img/xszn/job/person/ss_m_28e7edf.png",
        js: "https://qnm.res.netease.com/pc/gw/20170419110340/img/xszn/job/person/js_m_046290b.png",
        jsn: "https://qnm.res.netease.com/pc/gw/20170419110340/img/xszn/job/person/js_f_7b64788.png",
        ss: "https://qnm.res.netease.com/pc/gw/20170419110340/img/xszn/job/person/fs_f_d1f3712.png",
        ssn: "https://qnm.res.netease.com/pc/gw/20170419110340/img/xszn/job/person/fs_m_7b09483.png",
        fs: "https://qnm.res.netease.com/pc/gw/20170419110340/img/xszn/job/person/mz_f_39e78e7.png",
        fsn: "https://qnm.res.netease.com/pc/gw/20170419110340/img/xszn/job/person/mz_m_eeec02f.png",
        ys: "https://qnm.res.netease.com/pc/gw/20170419110340/img/xszn/job/person/yr_f_44bd600.png",
        mz: "https://qnm.res.netease.com/pc/gw/20170419110340/img/xszn/job/person/yr_m_05e3741.png"
    };
    e(t);
    var o = nie.require("nie.util.shareV5"), a = $("#share_pic").attr("data-src"), d = $("#share_desc").html(), r = $("#share_title").html();
    o({
        fat: "#Mshare",
        type: 1,
        defShow: [23, 22, 2, 1, 3],
        title: r,
        img: a,
        content: d
    }), $(".sex a").on("mouseover", function () {
        var e = $(this);
        if (e.hasClass("active"))return !1;
        var n = e.attr("data-sex");
        e.siblings("a").removeClass("active"), e.addClass("active"), e.parent().siblings(".person").hide(), e.parent().siblings("." + n).show()
    }), $(".j-nav-list a").mouseover(function () {
        if (!$(this).hasClass("active")) {
            var e = $(this).parent().index();
            $(".j-content>div").find(".person").removeClass("cur"), $(".j-content>div").find(".tj").removeClass("cur"), $(".j-content>div").find(".title").removeClass("cur"), $(".j-content>div").find(".button").removeClass("cur"), $(".j-nav-list a").removeClass("active"), $(".j-nav-list li").eq(e).find("a").addClass("active"), $(".j-content>div").hide().eq(e).show();
            var n = $(".j-content>div").eq(e);
            n.find(".person").addClass("cur"), n.find(".tj").addClass("cur"), n.find(".title").addClass("cur"), n.find(".button").addClass("cur"), setTimeout(function () {
                n.find(".person").removeClass("cur"), n.find(".tj").removeClass("cur"), n.find(".title").removeClass("cur"), n.find(".button").removeClass("cur")
            }, 10)
        }
    }), $(".button img").hover(function () {
        var e = $(this);
        $(".button").find("div").hide(), e.next("div").show()
    }, function () {
        $(".button").find("div").hide();
        var e = $(this);
        e.next("div").hide()
    });
    var c = $(".slide"), p = $(window).scrollTop();
    p >= $(".block2").offset().top - 750 ? c.show() : c.hide(), $(window).scroll(function () {
        var e = $(window).scrollTop();
        e >= $(".block2").offset().top - 750 ? c.show() : c.hide()
    }), n(), $(window).resize(function () {
        n()
    }), i(), $(window).scroll(function () {
        i()
    }), $(".slide6").click(function () {
        body.animate({scrollTop: 0}, 800)
    });
    var l = nie.require("nie.util.bullet");
    $(".player").click(function (e) {
        e.preventDefault();
        var n = $(this).attr("mp4"), i = $(this).attr("hdmp4"), t = $(this).attr("shdmp4"), o = $(this).attr("data-size"), a = o && o.split(",") || [], d = a[0] || 850, r = a[1] || 480;
        s({mp4: n, hdmp4: i, shdmp4: t, width: d, height: r})
    }), $("body").delegate(".close_pv,.pop_video_bg", "click", function () {
        var e = $(".pop_video_bg, .pop_video");
        e.fadeIn(function () {
            e.remove()
        })
    });
    var f = [$(".block1").offset().top + 560, $(".block2").offset().top, $(".block3").offset().top, $(".block4").offset().top, $(".block5").offset().top];
    $(".slide li").on("click", function () {
        var e = $(this).index();
        body.animate({scrollTop: f[e] + 58}, 800)
    });
    var v = 0;
    $(".exnav li").on("click", function () {
        var e = $(this);
        if (!e.find("a").hasClass("active")) {
            var n = $(this).index();
            v = n, $(".prev").show(), $(".next").show(), 5 == n && $(".next").hide(), 0 == n && $(".prev").hide(), $(".exnav a").removeClass("active"), e.find("a").addClass("active"), showtab(n)
        }
    }), $(".next").click(function () {
        v += 1, $(".exnav a").removeClass("active"), $(".exnav li").eq(v).find("a").addClass("active"), showtab(v), $(".prev").show(), 5 == v && $(".next").hide()
    }), $(".prev").click(function () {
        v -= 1, $(".exnav a").removeClass("active"), $(".exnav li").eq(v).find("a").addClass("active"), showtab(v), $(".next").show(), 0 == v && $(".prev").hide()
    }), $(".fu").hover(function () {
        $(this).find("span").fadeIn()
    }, function () {
        $(this).find("span").fadeOut()
    })
});