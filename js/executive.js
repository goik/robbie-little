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

    $(".js-prev-arr").click(function() {
        mainSlider.trigger('owl.prev');
        return false;
    });
    $(".js-next-arr").click(function() {
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

    $("body").on("mouseenter", ".user-top-panel,.top-nav-menu-items-list li", function() {
        $(this).find(".user-drop-down").css({
            display: "block"
        });
        $(this).find(".user-drop-down").stop().animate({
            opacity: 1
        }, 300);
    });


    $("body").on("mouseleave", ".user-top-panel,.top-nav-menu-items-list li", function() {
        $(this).find(".user-drop-down").stop().animate({
            opacity: 0
        }, 300, function() {
            $(this).css({
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


        $("#r_sign_up, #r_del_account, #r_subscribe_newsletter, #r_login_company, #r_forgot_password, #r_password_reset, #r_del_account, #r_sign_up, #r_sign_up_successfull").mousewheel(function(event, delta) {
            event.stopPropagation();
            event.preventDefault();
        });


        // .slide-pop-up
        $("body").on("click",".play-btn",function(){
            url= $(this).closest(".single-slider-item").find(".slide-item-container").text();
            videoContainer=$(this).closest(".single-slider-out-cell").find(".slide-pop-up");
            videoContainer.css({display:"block"}).stop().animate({opacity:1},300);
            $(this).closest(".single-slider-out-cell").find(".video-frame").attr("src",url);
            createFrame='<iframe  src="'+url+'" frameborder="0" class="video-frame" allowfullscreen></iframe>';
            $(this).closest(".single-slider-out-cell").find(".slide-pop-up-only").html("");
            $(".video-frame").remove();
            $('<iframe width="478" height="268" frameborder="0" class="video-frame" allowfullscreen></iframe>')
            .attr("src", "http://www.youtube.com/embed/" + url)
            .appendTo(".slide-pop-up-only");
            return false;
        });


        $("body").on("click",".js-close-video",function(){
            $(this).closest(".slide-pop-up").stop().animate({opacity:0},300,function(){
                $(this).css({display:"none"});
            });
            return false;
        });


/*        function toggleVideo(state) {
            // if state == 'hide', hide. Else: show video
            var div = document.getElementById("popupVid");
            var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
            div.style.display = state == 'hide' ? 'none' : '';
            func = state == 'hide' ? 'pauseVideo' : 'playVideo';
            iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
        }
*/





    var owlDownload_x = $(".large-slide-cell-inner").owlCarousel({
        items: 6,
        navigation: true,
        slideSpeed: 800,
        lazyEffect: "fade",
        transitionStyle: "fade",
        responsive: true,
        afterAction: function(elem) {}
    });


    $(".js-prev-arr-slider").click(function() {
        owlDownload_x.trigger('owl.prev');
        return false;
    });

    $(".js-next-arr-slider").click(function() {
        owlDownload_x.trigger('owl.next');
        return false;
    });


});



