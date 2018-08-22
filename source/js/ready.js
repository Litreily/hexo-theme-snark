$(document).ready(function() {
    $(".m-nav a").hover(function() {
                $(this).prev().addClass("dot-hover")
    }, function() {
                $(this).prev().removeClass("dot-hover")
    })
});
