//fork from https://github.com/tufu9441/maupassant-hexo/blob/master/source/js/fancybox.js
$(document).ready(function() {
    $('img').each(function() {
        if ($(this).parent().hasClass('fancybox')) return;
        if ($(this).hasClass('nofancybox')) return;
        var alt = this.alt;
        $(this).wrap('<a href="' + ($(this).attr('data-src') == null ? this.src : $(this).attr('data-src')) + '" title="' + alt + '" class="fancybox"></a>');
    });
    $(this).find('.fancybox').each(function(){
        $(this).attr('rel', 'article');
    });
});
$(document).ready(function() {
    $("a[href$='.jpg'],a[href$='.png'],a[href$='.gif'],a[href$='.webp']").attr('rel', 'gallery').fancybox({
        helpers : {
        title: { type: 'inside'}
        }
    });
});
