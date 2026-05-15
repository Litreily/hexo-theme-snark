$(document).ready(function () {

    // ── Mobile nav toggle ──────────────────────────────────────
    $(".navbar-icon").click(function () {
        if ((!$(".navbar-icon").hasClass("icon-click")) && (!$(".navbar-icon").hasClass("icon-out"))) {
            $(".navbar-icon").toggleClass("icon-click");
        } else {
            $(".navbar-icon").toggleClass("icon-click icon-out");
        }
        $("#menu").toggleClass("h-wrapper mobile-menu");
        $("#container").toggleClass("translate");
    });

    $("#container").click(function () {
        if ($(".navbar-icon").hasClass("icon-click")) {
            $(".navbar-icon").toggleClass("icon-click icon-out");
            $("#menu").toggleClass("h-wrapper mobile-menu");
            $("#container").toggleClass("translate");
        }
    });

    // ── Show cover image if set ────────────────────────────────
    $(".p-desc .p-pic").each(function () {
        if ($(this).find("img").length) {
            $(this).show();
        }
    });

    // ── Smooth active nav highlight ───────────────────────────
    var currentPath = window.location.pathname;
    $(".m-nav a").each(function () {
        var href = $(this).attr("href");
        if (href && currentPath.indexOf(href) === 0 && href !== "/") {
            $(this).css({ color: "var(--accent, #38bdf8)", background: "rgba(56,189,248,0.1)", borderRadius: "8px" });
        }
    });

    // ── Image lazy loading fallback ───────────────────────────
    if ("IntersectionObserver" in window) {
        var lazyImages = document.querySelectorAll("img[loading='lazy']");
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    observer.unobserve(img);
                }
            });
        });
        lazyImages.forEach(function (img) { observer.observe(img); });
    }

});
