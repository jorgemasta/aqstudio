(function ($, window, document, undefined) {
    'use strict';
	
	jQuery(document).ready(function(){
			   
	/* ==============================================
		REVOLUTION SLIDER
	=============================================== */
											
		jQuery('.tp-banner').show().revolution(
		{
			dottedOverlay:"none",
			delay:9000,
			startwidth:1170,
			startheight:700,
			hideThumbs:200,
			
			thumbWidth:100,
			thumbHeight:50,
			thumbAmount:5,
			
			navigationType:"none",
			navigationArrows:"solo",
			navigationStyle:"preview1",
			
			touchenabled:"off",
			onHoverStop:"off",
			
			swipe_velocity: 0.7,
			swipe_min_touches: 1,
			swipe_max_touches: 1,
			drag_block_vertical: false,
									
									
			keyboardNavigation:"off",
			
			navigationHAlign:"center",
			navigationVAlign:"bottom",
			navigationHOffset:0,
			navigationVOffset:20,

			soloArrowLeftHalign:"left",
			soloArrowLeftValign:"center",
			soloArrowLeftHOffset:20,
			soloArrowLeftVOffset:0,

			soloArrowRightHalign:"right",
			soloArrowRightValign:"center",
			soloArrowRightHOffset:20,
			soloArrowRightVOffset:0,
					
			shadow:0,
			fullWidth:"off",
			fullScreen:"on",

			spinner:"spinner0",
			
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,

			shuffle:"off",
			hideTimerBar:"on",
									
			forceFullWidth:"off",                       
			fullScreenAlignForce:"off",                     
			minFullScreenHeight:"400",                      
									
			hideThumbsOnMobile:"off",
			hideNavDelayOnMobile:1500,                      
			hideBulletsOnMobile:"off",
			hideArrowsOnMobile:"off",
			hideThumbsUnderResolution:0,
			
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			startWithSlide:0,
			fullScreenOffsetContainer: ".header",

			parallax:"scroll",
			parallaxBgFreeze:"on",
			parallaxLevels:[30],  
		});                                        

		
		(function () {

			window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {   

				return true;
			}

		})();

        /* = CUBE PORTFOLIO = */
    var gridContainer = $('#grid-container'),
	filtersContainer = $('#filters-container'),
    wrap, filtersCallback;
    
    $('.cbp-filter-item').click(function() {
        if ( $(this).hasClass( "entidades" ) ) {
            $(".entidades-container").show();
            $(".rehabilitacion-container").hide();
            $(".creacion-container").hide();
            return;
        } else if ( $(this).hasClass( "rehabilitacion" ) ) {
            $(".entidades-container").hide();
            $(".rehabilitacion-container").show();
            $(".creacion-container").hide();
            return;
        } else if ( $(this).hasClass( "creacion" ) ) {
            $(".entidades-container").hide();
            $(".rehabilitacion-container").hide();
            $(".creacion-container").show();
            return;
        } else {
            $(".entidades-container").hide();
            $(".rehabilitacion-container").hide();
            $(".creacion-container").hide();
        }
    });

    /*********************************
     init cubeportfolio
    *********************************/
    gridContainer.cubeportfolio({
        defaultFilter: '.reformas',
        animationType: 'quicksand',
        gapHorizontal: 16,
        gapVertical: 16,
        gridAdjustment: 'responsive',
        caption: 'zoom',
        displayType: 'sequentially',
        displayTypeSpeed: 100,
        layoutMode: 'grid',
        mediaQueries: [
        {
            width: 1100,
            cols: 3,
        }, {
            width: 767,
            cols: 3,
        }, {
            width: 480,
            cols: 1,
            options: {
                caption: '',
            }
        }],

        // singlePageInline
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'below',
        singlePageInlineShowCounter: true,
        singlePageInlineInFocus: true,
        singlePageInlineCallback: function (url, element) {

            // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
            var t = this;
            console.log('1');
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'html',
                timeout: 5000
            })
                .done(function (result) {
                    t.updateSinglePageInline(result);
                })
                .complete(function() {
                    $('.proyecto-galeria').slick({
                        dots: true,
                        infinite: true,
                        speed: 300,
                        slidesToShow: 1,
                        centerMode: true,
                        variableWidth: true
                    });
                    $('.proyecto-galeria').imagesLoaded( function() {
                        $('.proyecto-galeria').slick('slickGoTo', 0);
                    });
                })
                .fail(function () {
                    t.updateSinglePageInline("Error! Please refresh the page!");
                });
        }
    });

    /*********************************
     add listener for filters
    *********************************/

    filtersCallback = function (me) {
        me.addClass('cbp-filter-item-active').siblings().removeClass('cbp-filter-item-active');
    };

    filtersContainer.on('click.cbp', '.cbp-filter-item', function () {

        var me = $(this);

        if (me.hasClass('cbp-filter-item-active')) {
            return;
        }

        // get cubeportfolio data and check if is still animating (reposition) the items.
        if (!$.data(gridContainer[0], 'cubeportfolio').isAnimating) {
            filtersCallback.call(null, me);
        }

        // filter the items
        gridContainer.cubeportfolio('filter', me.data('filter'), function () {
        });

    });
	 
	});
	
	$(window).load(function(){

	/* ==============================================
		PAGE PRELOADER
	=============================================== */

		jQuery("#preloader").delay(600).fadeOut(500); 
		
	});

		
		
})(jQuery, window, document);
