"use strict";

(function( $ ){
    // ABSOLUTE BOX WIDTH
    function absBlockWidth() {
        if( $(window).width() > 576 ) {
            $('.abs-box').each(function (index, element) {
                if ( !$(element).find('.abs-box-bg').length ) {
                    $(element).append('<div class="abs-box-bg"></div>');
                }
                if ( $(element).hasClass('abs-box-right')) {
                    $(element).find('.abs-box-bg').css('right', - ($(window).width() - $('.container').outerWidth()) / 2 );
                } else {
                    $(element).find('.abs-box-bg').css('left', - ($(window).width() - $('.container').outerWidth()) / 2 );
                }
            });
        }

        $('.image-full').each(function (index, element) {
            $(element).find('.image-full-box').css('left', - ($(window).width() - $('.container').outerWidth()) / 2 );
        });
    }

    // HOME ANIMATION

    $('.js-hero-slider').on('init', function(event, slick, currentSlide, nextSlide){
        TweenMax.set('#main-header', {
            y: "-80px",
            opacity: 0
        });
        TweenMax.set('.hero .slick-dots', {
            y: "40px",
            opacity: 0
        });
        TweenMax.set('.hero .slick-count', {
            y: "40px",
            opacity: 0
        });
        $('.hero-slide:first-child .hero-slide-inner').children().each(function (index, element) {
            TweenMax.set(element, {
                y: "80px",
                opacity: 0
            });
        });

        var heroHeight = $('.hero').outerHeight();
        var bgStart = $('.hero').attr('data-bgColorStart');
        var bgEnd = $('.hero').attr('data-bgColorEnd');

        $('.trans-layer').css({
            "background": "linear-gradient(40deg, rgba(" + bgStart + ",1) 0%, rgba(" + bgEnd + ",1) 100%)",
            "opacity": 1,
            "z-index": 9999999,
            "top": 0,
        });

        $('.hero').css({
            "opacity": 0
        });
        TweenMax.to('.trans-layer', 1, {
            height: heroHeight,
            ease: Power3.easeIn,
        });
        TweenMax.to('.hero', 0.01, {
            opacity: 1,
            delay: 0.99,
            onComplete: function() {
                TweenMax.to('#main-header', 0.5, {
                    y: "0px",
                    opacity: 1,
                    ease: Power1.easeOut
                });
                TweenMax.to('.hero .slick-dots', 0.5, {
                    y: "0px",
                    opacity: 1,
                    ease: Power1.easeOut
                });
                TweenMax.to('.hero .slick-count', 0.5, {
                    y: "0px",
                    opacity: 1,
                    ease: Power1.easeOut
                });
                setTimeout(function () {
                    $('.hero-slide:first-child .hero-slide-inner').children().each(function (index, element) {
                        index++;
                        TweenMax.to(element, 0.4 * index, {
                            y: "0",
                            opacity: 1,
                            ease: Power1.easeOut
                        });
                    });
                }, 400);

            }
        });
        TweenMax.to('.trans-layer', 1, {
            opacity: 0,
            delay: 1,
            onComplete: function() {
                TweenMax.set('.trans-layer', {
                    height: 0,
                    zIndex: 1
                });
            }
        });
    });



    $(window).on( "load", function () {
        absBlockWidth();

        if (!$('body').hasClass('home')) {
            TweenMax.set('#main-header', {
                y: "-80px",
                opacity: 0
            });
            TweenMax.to('#main-header', 1, {
                y: "0px",
                opacity: 1,
                ease: Power1.easeOut
            });
        }

        $('.fade-from-top').each(function (index, element) {
            var delay = $(this).attr('data-delay');
            if (!delay) delay = 0;
            ScrollReveal().reveal(element, {
                easing: 'ease-out',
                scale: 1,
                distance: '40px',
                duration: 500,
                viewFactor: 0.3,
                delay: delay,
                afterReveal: function (el) {
                    el.classList.add('is-visible');
                }
            });
        });

        $('.fade-from-top-children > *').each(function (index, element) {
            ScrollReveal().reveal(element, {
                easing: 'ease-out',
                scale: 1,
                distance: '40px',
                duration: 500,
                viewFactor: 0.3,
                delay: index,
                afterReveal: function (el) {
                    el.classList.add('is-visible');
                }
            });
        });

        $('.fade-in').each(function (index, element) {
            var delay = $(this).attr('data-delay');
            if (!delay) delay = 0;
            ScrollReveal().reveal(element, {
                easing: 'ease-out',
                scale: 1,
                opacity: 0,
                duration: 500,
                viewFactor: 0.3,
                delay: delay,
                afterReveal: function (el) {
                    el.classList.add('is-visible');
                }
            });
        });


        $('.slide-image-children img').each(function (index, element) {
            var delay = 0;
            var pos = '100%';
            if ( $(element).width() <= $(element).closest('.slide-image-children').width() / 2 + 30 ) {
                delay = (index % 2) == 0 ? 0 : 200;
            }
            ScrollReveal().reveal(element, {
                opacity: '0',
                duration: 600,
                viewFactor: 0.3,
                delay: delay,
                afterReveal: function (el) {
                    TweenMax.to(el, 0.5, {
                        x: '0%',
                        ease: Power1.easeOut
                    });
                },
                beforeReveal: function(el) {
                    TweenMax.set(el, {
                        x: pos
                    });
                },

            });
        });
        $('.slide-image-right').each(function (index, element) {
            var delay = $(this).attr('data-delay');
            if (!delay) delay = 0;
            ScrollReveal().reveal(element, {
                opacity: '0',
                duration: 600,
                viewFactor: 0.3,
                delay: parseInt(delay),
                afterReveal: function (el) {
                    TweenMax.to(el, 0.5, {
                        x: '0%',
                        ease: Power1.easeOut
                    });
                },
                beforeReveal: function(el) {
                    TweenMax.set(el, {
                        x: '-100%'
                    });
                },

            });
        });
        $('.slide-image-left').each(function (index, element) {
            var delay = $(this).attr('data-delay');
            if (!delay) delay = 0;
            ScrollReveal().reveal(element, {
                opacity: '0',
                duration: 600,
                viewFactor: 0.3,
                delay: parseInt(delay),
                afterReveal: function (el) {
                    TweenMax.to(el, 0.5, {
                        x: '0%',
                        ease: Power1.easeOut
                    });
                },
                beforeReveal: function(el) {
                    TweenMax.set(el, {
                        x: '100%'
                    });
                },

            });
        });

        $('.site-content.bg-lines').prepend('<div class="bg-lines__line container"><b></b><b></b><b></b><b></b><b></b></div>');
        $('.bg-lines .page-title, .bg-lines .hero, .bg-lines .hero-slide-inner').prepend('<div class="bg-lines__circle"><b></b><b></b><b></b><b></b></div>');


        if( $(window).width() > 768 ) {
            // FULL HEIGHT PAGE
            var minHeightContent = $(window).height() - $('#main-footer').outerHeight() - $('#main-header').outerHeight();
            if (minHeightContent < $(window).height()) {
                $('#main-content').css('min-height', minHeightContent);
            }
        } else {
            $('.brand-list').slick({
                infinite: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                arrows: false,
                draggable: true,
                swipe: true,
                dots: false,
            });
        }

        if( $(window).width() < 992 ) {
            $('.main-menu .sub-menu').each(function (index, element) {
                $(element).prev('a').closest('li').prepend('<span class="js-sub-menu toggle-sub-menu"></span>');
            });
        }

        $('.js-hero-slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
            var i = (currentSlide ? currentSlide : 0) + 1,
                j = slick.slideCount;
            if (i < 10) i = '0' + i;
            if (j < 10) j = '0' + j;
            slick.$slider.next('.js-slick-count').text(i + ' / ' + j);
        });

        $('.js-hero-slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var animatingElements = slick.$slides.eq(nextSlide).find('.hero-slide-inner').children();
            var $interval = 1;

            animatingElements.each(function (index, element) {
                if (!$(element).hasClass('bg-lines__circle')) {
                    TweenMax.set(element, {
                        x: "-80px",
                        opacity: 0
                    });
                    setTimeout(function () {
                        TweenMax.to(element, 0.4, {
                            x: "0",
                            opacity: 1,
                            ease: Power1.easeOut
                        });
                    },400 + 100 * $interval);
                    $interval++;
                }
            });
        });

        $('.js-hero-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnDotsHover: true,
            autoplay: false,
            autoplaySpeed: 5000,
            fade: true,
            arrows: false,
            draggable: false,
            swipe: false,
            dots: true,
            pauseOnHover: false,
            pauseOnFocus: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        draggable: true,
                        swipe: true
                    }
                }
            ]
        });

        $('.js-offices-carousel').on('init', function(event, slick, direction){
            $('.js-offices-dots').appendTo('.js-offices-nav');
            $(slick.$slides).each(function (index, element) {
                $('.js-offices-nav').append('<li><a href="#0" class="js-to-step" data-slide="'+index+'">'+$(element).find('.js-office-item-title').text()+'</a></li>');
            });
            $('.js-offices-nav li:first-child').addClass('slick-active');
        });

        $('.js-offices-carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            $('.js-offices-nav .slick-active').removeClass('slick-active');
            $('.js-offices-nav li').eq(nextSlide).addClass('slick-active');
        });

        $(document).on('click', '.js-to-step', function(event) {
            var nextSlide = $(this).attr('data-slide');
            $('.js-offices-carousel').slick('slickGoTo', nextSlide);
        });

        $('.js-offices-carousel').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            fade: true,
            arrows: false,
            draggable: false,
            swipe: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        draggable: true,
                        swipe: true
                    }
                }
            ]
        });

        $('.js-gallery a').simpleLightbox();


        $('.js-gallery').imagesLoaded().done(function () {
            var layoutMode = 'masonry';
            if( $(window).width() > 992 ) layoutMode = 'fitRows';

            $('.js-gallery').isotope({
                layoutMode: layoutMode,
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-item'
                }
            });
        });

    });

    $( window ).resize(function() {
        absBlockWidth();
    })﻿

    var lastScrollTop = 0;
    var scrollPoint = $(window).width() / 4;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > scrollPoint) {
            if (!$('#main-header').hasClass('sticky')) {
                $('#main-header').addClass('no-animate');
            } else {
                $('#main-header').removeClass('no-animate');
            }
            $('#main-header').addClass('sticky').css('transform', '');

        } else {
            if ($('#main-header').hasClass('sticky')) {
                $('#main-header').css({
                    'opacity': 0,
                    'transform': 'translateY(-50%)'
                });
                setTimeout(function () {
                    $('#main-header')
                        .removeClass('sticky sticky-down sticky-up')
                        .css({
                            'opacity': 1,
                            'transform': 'translateY(0)',
                        });
                },300);
            }

        }
        if (st < lastScrollTop){
            $('#main-header.sticky').addClass('sticky-up');
            $('#main-header.sticky').removeClass('sticky-down');
        } else {
            $('#main-header.sticky').removeClass('sticky-up');
            $('#main-header.sticky').addClass('sticky-down');
        }

        lastScrollTop = st;
    });


    $('.header-nav').on('click', function(e){
        e.preventDefault();
        var el = e.target;
        if ( $(el).is('#js-open-menu') ) {
            e.stopPropagation();

            $('#main-header').addClass('mob-menu-active');
            $('body').addClass('no-scroll');
            $('.page-backdrop').addClass('active');
            setTimeout(function () {
                $('#js-main-menu').addClass('active');
            }, 200);
        }else if( $(el).is('#js-close-menu') ){
            e.stopPropagation();

            $('#js-main-menu').removeClass('active');
            setTimeout(function () {
                $('.page-backdrop').removeClass('active');
                $('body').removeClass('no-scroll');
            }, 200);
            setTimeout(function () {
                $('#main-header').removeClass('mob-menu-active');
            }, 400);

        }else if( $(el).is('.nav-link') ){
            e.stopPropagation();

            var url = $(el).attr('href');

            TweenMax.to('#main-header', 0.2, {
                y: "-85px",
                ease: Power1.easeIn
            });
    
            if ($('body').hasClass('home')) {
                TweenMax.to('.hero', 0.6, {
                    opacity: 0,
                    ease: Power1.easeOut,
                    onComplete: function() {
                        window.location.href = url;
                    }
                });
                TweenMax.to('#main-footer, section:not(.hero)', 0.6, {
                    y: "150px",
                    opacity: 0,
                    ease: Power1.easeOut
                });
            } else {
                TweenMax.to('#main-content', 0.5, {
                    y: "100px",
                    opacity: 0,
                    ease: Power1.easeOut,
                    onComplete: function() {
                        window.location.href = url;
                    }
                });
            }
        }else if( $(el).is('.js-sub-menu') ){
            e.stopPropagation();
            $(el).toggleClass('active');
            $(el).closest('li').find('.sub-menu').slideToggle();
        }
    });

    $('#js-office-map-modal').on('show.bs.modal', function (e) {
        var title = $(e.relatedTarget).closest('.office-item').find('.js-office-item-title').text();
        var map = $(e.relatedTarget).closest('.office-item').find('.js-show-on-map-content iframe').clone();
        $(e.target).find('.modal-body').empty().append(map);
        $(e.target).find('.modal-title').text(title);
    });

    $('.js-project-filter').on('click', '.project-filter__btn', function (e) {
        e.preventDefault();
        $('.js-project-list .project-item.fade-from-top').removeClass('fade-from-top');
        ScrollReveal().clean('.project-item');
        if ( ! $(this).hasClass('active') ) {
            var filter = $(this).attr('data-filter');
            $(this).closest('.js-project-filter').find('.active').removeClass('active');
            $(this).addClass('active');
            $('.js-project-list').isotope({ filter: filter });
        }
    });



})(jQuery);