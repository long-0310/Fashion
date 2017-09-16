(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        /*masonary active*/
        $(".product-list").masonry();

        /*owl carousel active*/
        $(".homepage-slider").owlCarousel({
        	items:1,
        	loop:true,
        	autoplay:true,
            lazyLoad : true,
        	dots:false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
        	nav:true,
        	navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"]
        });


        /*owl carousel active*/
        $(".product-promotions").owlCarousel({
            items:1,
            loop:true,
            autoplay:true,
            lazyLoad : true,
            dots:true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav:false,
        });

        $(".menu-trigger").on("click",function(){
            $(".off-canvas-menu,.off-canvas-overlay").addClass("active");
            return false;
        });

        $(".menu-close").on("click",function(){
            $(".off-canvas-menu,.off-canvas-overlay").removeClass("active");
        });

        $(".off-canvas-overlay").on("click",function(){
            $(".off-canvas-menu,.off-canvas-overlay,.main-search").removeClass("active");
        });

        /*search close*/

        $(".search-trigger").on("click",function(){
            $(".main-search,.off-canvas-overlay").addClass("active");
            return false;
        });

        $(".search-close").on("click",function(){
            $(".main-search,.off-canvas-overlay").removeClass("active");
        });
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	