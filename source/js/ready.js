$(document).ready(function() {
    $(".m-nav a").hover(function() {
                $(this).prev().addClass("dot-hover")
    }, function() {
                $(this).prev().removeClass("dot-hover")
    })

    $("pre").addClass('prettyprint linenums').attr('style', 'overflow:auto;');
    $(".p-content code").addClass('prettyprint');
    prettyPrint();

    $(".navbar-icon").click(function() {
        if((!$(".navbar-icon").hasClass("icon-click")) && (!$(".navbar-icon").hasClass("icon-out")))
            $(".navbar-icon").toggleClass("icon-click");
        else
            $(".navbar-icon").toggleClass("icon-click icon-out");
        $("#menu").toggleClass("h-wrapper mobile-menu");
        $("#container").toggleClass("translate");
    });

    $("#container").click(function() {
        if($(".navbar-icon").hasClass("icon-click")) {
            $(".navbar-icon").toggleClass("icon-click icon-out");
            $("#menu").toggleClass("h-wrapper mobile-menu");
            $("#container").toggleClass("translate");
        }
    });

});
