/*****************
*** USE STRICT ***
*****************/

"use strict";

/****************
*** Preloader ***
****************/

if (jQuery('.jayo-preloader').length) {
    jQuery(window).load(function() {
        jQuery( '.animation' ).delay(1000).fadeOut(300, function() {
            jQuery('.jayo-preloader').fadeOut(600);
        });
    })
}

/**********************
*** Main Navigation ***
**********************/

if (jQuery('.jayo-menu-wrapper').length) {

    jQuery(document).ready(function($) {
        $('.jayo-nav-icon').on('click', function(){
            $(this).toggleClass('open');
            $('.jayo-menu-wrapper .jayo-menu').toggleClass('open');
            $('.jayo-menu-wrapper .jayo-menu').fadeToggle(300);
        });
    });
}

/*************************
*** Page Header Slider ***
*************************/

if (jQuery('.jayo-page-header.slider').length) {
    jQuery(document).ready(function() {
        // Load slider if multiple images is added to post
        jQuery('.jayo-page-header.slider').owlCarousel({
            nav : false,
            loop : true,
            dots : false,
            autoplay : true,
            autoplayTimeout: 6000,
            margin : 0,
            stagePadding:0,
            items : 1,
            autoHeight : true,
            animateOut: 'fadeOut'
        })
    });
}

/*************************
*** Portfolio Template ***
*************************/

if (jQuery('.jayo-portfolio-template').length) {
    jQuery(document).ready(function($) {

        // The Filter
        if (jQuery('.jayo-portfolio-template .filter').length) {

            $('.jayo-filter-icon').on('click', function(){
                $('.jayo-filter-icon .icon').toggleClass('active');
                $('.jayo-portfolio-template .filter').toggleClass('active');
            });
             
            $('.jayo-portfolio-template .filter').on( 'click', 'a', function() {
                var filterValue = $(this).attr('data-filter');
                $container.isotope({ filter: filterValue });
            });
            $('.jayo-portfolio-template .filter li').on('click', function() {
                $('.jayo-portfolio-template .filter li.active').removeClass('active');
                $(this).addClass('active');
            });
        }

        // Load Items
        var $container = $('.jayo-portfolio-template .items').imagesLoaded( function() {
            $container.isotope({
                itemSelector: '.jayo-portfolio-template .item',
                transitionDuration: '.5s',
                hiddenStyle: {
                    opacity: 0
                },
                visibleStyle: {
                    opacity: 1
                }
            });
        });

        // Infinite Scroll Function
        if (jQuery('.jayo-portfolio-template .infinite_scroll').length) {

            $container.infinitescroll({
                navSelector  : '.jayo-portfolio-template .navigation',
                nextSelector : '.jayo-portfolio-template .navigation .next a',
                itemSelector : '.jayo-portfolio-template .items .item',
                animate : false,
            },

            // call Isotope as a callback
            function(newElements) {
                var $newElems = $(newElements).css('opacity', 0);
                $newElems.imagesLoaded(function(){
                    $newElems.animate({opacity: 1});
                    $container.isotope('appended', $newElems );
                });
            });
        }

    });
}

/*****************
*** Posts Page ***
*****************/

if (jQuery('.jayo-posts-page').length) {
    jQuery(document).ready(function($) {

        // Load Items
        var $container = $('.jayo-posts-page .blog-items').imagesLoaded( function() {
            $container.isotope({
                itemSelector: '.jayo-posts-page .blog-items .item',
                transitionDuration: '.5s',
                hiddenStyle: {
                    opacity: 0
                },
                visibleStyle: {
                    opacity: 1
                }
            });
        });

        // Infinite Scroll Function
        if (jQuery('.jayo-posts-page .infinite_scroll').length) {
            $container.infinitescroll({
                navSelector  : '.jayo-posts-page .navigation',
                nextSelector : '.jayo-posts-page .navigation .next a',
                itemSelector : '.jayo-posts-page .blog-items .item',
                animate : false,
            },

            // call Isotope as a callback
            function(newElements) {
                var $newElems = $(newElements).css('opacity', 0);
                $newElems.imagesLoaded(function(){
                    $newElems.animate({opacity: 1});
                    $container.isotope('appended', $newElems );
                });
            });
        }
    });
}

/*************************
*** Single Post Slider ***
*************************/

if (jQuery('.post-single-slideshow').length) {
    jQuery(document).ready(function() {
        // Load slider if multiple images is added to post
        jQuery('.post-single-slideshow').owlCarousel({
            nav : false,
            loop : true,
            dots : true,
            autoplay : true,
            autoplayTimeout: 6000,
            margin : 0,
            stagePadding:0,
            items : 1,
            autoHeight : true,
            animateOut: 'fadeOut'
        })
    });
}

/**********************************
*** About Template / Skill Bars ***
**********************************/

if (jQuery('.jayo-about-me-template .bars').length) {
    jQuery(document).ready(function($) {
        jQuery('.jayo-about-me-template .bars figure').each(function() {
            jQuery(this).appear(function() {
                jQuery(this).find('.skill-bar').animate({
                    width:jQuery(this).attr('data-percent')
                },1500);
            });
        }); 
    })
}

/****************************************
*** About Template / Clients Carousel ***
****************************************/

if (jQuery('.jayo-about-us-template .clients .logos.carousel').length) {
    jQuery(document).ready(function() {
        // Load slider if multiple images is added to post
        jQuery('.jayo-about-us-template .clients .logos.carousel').owlCarousel({
            lazyLoad : false,
            dots : false,
            nav : false,
            items : 6,
            loop : true,
            margin : 20,
            autoplay : true,
            autoplayTimeout:3000,
            responsive : {
                0 : {
                    items : 2,
                },

                480 : {
                    items : 4,
                },

                768 : {
                    items : 6,
                }
            }
        })
    });
}