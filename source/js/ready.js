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
        $("#menu").toggleClass("h-wrapper mobile-menu");
        $("#container").toggleClass("translate");
    });
});
