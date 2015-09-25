$(document).ready(function() {

    $("body").on("click", "a", function() {
        $('html,body').animate({
            scrollTop: 0
        }, 300);
    });

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1200);
                return false;
            }
        }
    });




    var owlDownload = $(".carou-1").owlCarousel({
        items: 5,
        navigation: true,
        slideSpeed: 800,
        lazyEffect: "fade",
        transitionStyle: "fade",
        responsive: true,
        afterAction: function(elem) {}
    });


    $(".carou-1-prev").click(function() {
        owlDownload.trigger('owl.prev');
        return false;
    });

    $(".carou-1-next").click(function() {
        owlDownload.trigger('owl.next');
        return false;
    });

    var owlDownload2 = $(".carou-2").owlCarousel({
        items: 5,
        navigation: true,
        slideSpeed: 800,
        lazyEffect: "fade",
        transitionStyle: "fade",
        responsive: true,
        afterAction: function(elem) {}
    });

    $(".carou-2-prev").click(function() {
        owlDownload2.trigger('owl.prev');
        return false;
    });

    $(".carou-2-next").click(function() {
        owlDownload2.trigger('owl.next');
        return false;
    });





    var owlDownload3 = $(".carou-3").owlCarousel({
        items: 6,
        navigation: true,
        slideSpeed: 800,
        lazyEffect: "fade",
        transitionStyle: "fade",
        responsive: true,
        afterAction: function(elem) {}
    });


    $(".carou-3-prev").click(function() {
        owlDownload3.trigger('owl.prev');
        return false;
    });

    $(".carou-3-next").click(function() {
        owlDownload3.trigger('owl.next');
        return false;
    });


    /*=======================*/
    var mainSlider = $(".main-slider-fix").owlCarousel({
        items: 1,
        navigation: true,
        slideSpeed: 800,
        transitionStyle: "fadeUp",
        responsive: true,
        singleItem: true,
        afterAction: function(elem) {}
    });

    $(".prev-arr").click(function() {
        mainSlider.trigger('owl.prev');
        return false;
    });
    $(".next-arr").click(function() {
        mainSlider.trigger('owl.next');
        return false;
    });
    /*=======================*/



    /*=======================*/
    var single1 = $(".single-1").owlCarousel({
        items: 1,
        navigation: true,
        slideSpeed: 800,
        transitionStyle: "fadeUp",
        responsive: true,
        singleItem: true,
        afterAction: function(elem) {}
    });

    $(".single-1-prev").click(function() {
        single1.trigger('owl.prev');
        return false;
    });

    $(".single-1-next").click(function() {
        single1.trigger('owl.next');
        return false;
    });
    /*=======================*/

    /*=======================*/
    var single2 = $(".single-2").owlCarousel({
        items: 1,
        navigation: true,
        slideSpeed: 800,
        transitionStyle: "fadeUp",
        responsive: true,
        singleItem: true,
        afterAction: function(elem) {}
    });

    $(".single-2-prev").click(function() {
        single2.trigger('owl.prev');
        return false;
    });

    $(".single-2-next").click(function() {
        single2.trigger('owl.next');
        return false;
    });
    /*=======================*/


    /*=======================*/
    var single3 = $(".single-3").owlCarousel({
        items: 1,
        navigation: true,
        slideSpeed: 800,
        transitionStyle: "fadeUp",
        responsive: true,
        singleItem: true,
        afterAction: function(elem) {}
    });

    $(".single-3-prev").click(function() {
        single3.trigger('owl.prev');
        return false;
    });

    $(".single-3-next").click(function() {
        single3.trigger('owl.next');
        return false;
    });
    /*=======================*/

    $("body").on("mouseenter", ".user-top-panel", function() {
        $(".user-drop-down").css({
            display: "block"
        });
        $(".user-drop-down").stop().animate({
            opacity: 1
        }, 300);
    });


    $("body").on("mouseleave", ".user-top-panel", function() {
        $(".user-drop-down").stop().animate({
            opacity: 0
        }, 300, function() {
            $(".user-drop-down").css({
                display: "none"
            });
        });
    });

    /*
        $('#r_news_popup').mousewheel(function(event, delta) {
            event.stopPropagation();
            event.preventDefault();
        });
    */
    $("body").on("mouseenter", ".scroll-cell", function() {

    });

    $("body").on("focus", ".default-search", function() {
        $(".search-drop-down").css({
            display: "block"
        });
        $(".search-drop-down").stop().animate({
            opacity: 1
        }, 300);
    });

    $("body").on("click", ".search-drop-down,.search-cell-pad", function(event) {
        event.stopPropagation();
        event.preventDefault();
    });


    $("body").click(function(){
    		$(".search-drop-down").stop().animate({opacity:0},300,function(){
    			$(".search-drop-down").css({display:"none"});
    		});
    });



    /*
    	$("body").on("blur",".default-search",function(){
    		$(".search-drop-down").stop().animate({opacity:0},300,function(){
    			$(".search-drop-down").css({display:"none"});
    		});
    	});
    */


});
