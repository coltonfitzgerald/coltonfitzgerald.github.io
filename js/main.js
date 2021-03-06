jQuery(document).ready(function ($) {
	function s() {
		e($(".cd-headline.letters").find("b")), a($(".cd-headline"))
	}

	function e(s) {
		s.each(function () {
			var s = $(this),
				e = s.text().split(""),
				a = s.hasClass("is-visible");
			for (i in e) s.parents(".rotate-2").length > 0 && (e[i] = "<em>" + e[i] + "</em>"), e[i] = a ? '<i class="in">' + e[i] + "</i>" : "<i>" + e[i] + "</i>";
			var n = e.join("");
			s.html(n).css("opacity", 1)
		})
	}

	function a(s) {
		var i = h;
		s.each(function () {
			var s = $(this);
			if (s.hasClass("loading-bar")) i = p, setTimeout(function () {
				s.find(".cd-words-wrapper").addClass("is-loading")
			}, u);
			else if (s.hasClass("clip")) {
				var e = s.find(".cd-words-wrapper"),
					a = e.width() + 10;
				e.css("width", a)
			} else if (!s.hasClass("type")) {
				var t = s.find(".cd-words-wrapper b"),
					d = 0;
				t.each(function () {
					var s = $(this).width();
					s > d && (d = s)
				}), s.find(".cd-words-wrapper").css("width", d)
			}
			setTimeout(function () {
				n(s.find(".is-visible").eq(0))
			}, i)
		})
	}

	function n(s) {
		var i = r(s);
		if (s.parents(".cd-headline").hasClass("type")) {
			var e = s.parent(".cd-words-wrapper");
			e.addClass("selected").removeClass("waiting"), setTimeout(function () {
				e.removeClass("selected"), s.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")
			}, w), setTimeout(function () {
				t(i, C)
			}, m)
		} else if (s.parents(".cd-headline").hasClass("letters")) {
			var a = s.children("i").length >= i.children("i").length ? !0 : !1;
			d(s.find("i").eq(0), s, a, f), l(i.find("i").eq(0), i, a, f)
		} else s.parents(".cd-headline").hasClass("clip") ? s.parents(".cd-words-wrapper").animate({
			width: "2px"
		}, v, function () {
			c(s, i), t(i)
		}) : s.parents(".cd-headline").hasClass("loading-bar") ? (s.parents(".cd-words-wrapper").removeClass("is-loading"), c(s, i), setTimeout(function () {
			n(i)
		}, p), setTimeout(function () {
			s.parents(".cd-words-wrapper").addClass("is-loading")
		}, u)) : (c(s, i), setTimeout(function () {
			n(i)
		}, h))
	}

	function t(s, i) {
		s.parents(".cd-headline").hasClass("type") ? (l(s.find("i").eq(0), s, !1, i), s.addClass("is-visible").removeClass("is-hidden")) : s.parents(".cd-headline").hasClass("clip") && s.parents(".cd-words-wrapper").animate({
			width: s.width() + 10
		}, v, function () {
			setTimeout(function () {
				n(s)
			}, T)
		})
	}

	function d(s, i, e, a) {
		if (s.removeClass("in").addClass("out"), s.is(":last-child") ? e && setTimeout(function () {
			n(r(i))
		}, h) : setTimeout(function () {
			d(s.next(), i, e, a)
		}, a), s.is(":last-child") && $("html").hasClass("no-csstransitions")) {
			var t = r(i);
			c(i, t)
		}
	}

	function l(s, i, e, a) {
		s.addClass("in").removeClass("out"), s.is(":last-child") ? (i.parents(".cd-headline").hasClass("type") && setTimeout(function () {
			i.parents(".cd-words-wrapper").addClass("waiting")
		}, 200), e || setTimeout(function () {
			n(i)
		}, h)) : setTimeout(function () {
			l(s.next(), i, e, a)
		}, a)
	}

	function r(s) {
		return s.is(":last-child") ? s.parent().children().eq(0) : s.next()
	}

	function o(s) {
		return s.is(":first-child") ? s.parent().children().last() : s.prev()
	}

	function c(s, i) {
		s.removeClass("is-visible").addClass("is-hidden"), i.removeClass("is-hidden").addClass("is-visible")
	}
	$(".button-collapse").sideNav(), $(".parallax").parallax(), $(".dropdown-button").dropdown();
	var h = 2500,
		p = 3800,
		u = p - 3e3,
		f = 50,
		C = 150,
		w = 500,
		m = w + 800,
		v = 600,
		T = 1500;
	s(), $(".year").html((new Date).getFullYear())
});