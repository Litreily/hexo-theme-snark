// reference: https://fancyapps.com/fancybox/3/docs/
$(document).ready(function() {
    $('img').each(function() {
        if ($(this).parent().hasClass('fancybox')) return;
        if ($(this).hasClass('nofancybox')) return;
        var alt = this.alt;
        $(this).wrap('<a href="' + ($(this).attr('data-src') == null ? this.src : $(this).attr('data-src')) + '" data-fancybox="gallery"' + ' data-caption="' + alt + '" class="fancybox"></a>');
    });
    $(this).find('.fancybox').each(function(){
        $(this).attr('rel', 'article');
    });
});
$(document).ready(function() {
    $('[data-fancybox=gallery]').fancybox({
        buttons : [
          'zoom',
          //'share',
          'slideShow',
          'fullScreen',
          //'download',
          'thumbs',
          'close'
        ],
        // Transition effect between slides
        //
        // Possible values:
        //   false            - disable
        //   "fade'
        //   "slide'
        //   "circular'
        //   "tube'
        //   "zoom-in-out'
        //   "rotate'
        //
        transitionEffect: "slide",
    });
});

