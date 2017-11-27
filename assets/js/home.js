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
    });
    $(window).load(function(){
        
    /* ==============================================
        PAGE PRELOADER
    =============================================== */

        jQuery("#preloader").delay(600).fadeOut(500); 
        
    });
})(jQuery, window, document);
