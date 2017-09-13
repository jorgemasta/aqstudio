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
	
	/* ==============================================
		COUNTDOWN CALL
	=============================================== */

	if($.find('#counter')[0]) {
			$('#counter').countdown('2014/12/06 12:00:00').on('update.countdown', function(event) {
				var $this = $(this).html(event.strftime(''
					+ '<div class="counter-container"><div class="counter-box first"><div class="number">%-D</div><span>Day%!d<span></div>'
					+ '<div class="counter-box"><div class="number">%H</div><span>Hours</span></div>'
					+ '<div class="counter-box"><div class="number">%M</div><span>Minutes</span></div>'
					+ '<div class="counter-box last"><div class="number">%S</div><span>Seconds</span></div></div>'
				));
			});
		};

	/* ==============================================
		CONTACT FORM
	=============================================== */

		$('#contactform').submit(function(){

			var action = $(this).attr('action');

			$("#message").slideUp(750,function() {
			$('#message').hide();

			$('#submit')
				.after('<img src="assets/img/ajax-loader.gif" class="loader" />')
				.attr('disabled','disabled');

			$.post(action, {
				name: $('#name').val(),
				email: $('#email').val(),
				phone: $('#phone').val(),
				comments: $('#comments').val(),
			},
				function(data){
					document.getElementById('message').innerHTML = data;
					$('#message').slideDown('slow');
					$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
					$('#submit').removeAttr('disabled');
					if(data.match('success') != null) $('#contactform').slideUp('slow');
				}
			);

			});

			return false;

		});

	/* ==============================================
		OWL CAROUSEL
	=============================================== */

		$('#owl-demo').owlCarousel({
		  autoPlay: 3000, //Set AutoPlay to 3 seconds
		  items : 5,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,3]
		});

		$('#owl-testimonials, #owl-office').owlCarousel({
		  navigation : false,
		  slideSpeed : 300,
		  paginationSpeed : 400,
		  singleItem:true                              
		});
	 
	});
	
	$(window).load(function(){
	/* ==============================================
		STICKY NAVBAR CALL
	=============================================== */

		$("#header").sticky({ topSpacing: 0 });

	/* ==============================================
		PAGE PRELOADER
	=============================================== */

		jQuery("#preloader").delay(900).fadeOut(500); 
		
	});

	/* ==============================================
		OFF-CANVAS NAV
	=============================================== */
	
	$(function() {
		var $menu = $('nav#menu'),
			$html = $('html, body');

		$menu.mmenu({
			dragOpen: true
		});

		$menu.find( 'li > a' ).on( 'click',
			function()
			{
				var href = $(this).attr( 'href' );

				//  if the clicked link is linked to an anchor, scroll the page to that anchor 
				if ( href.slice( 0, 1 ) == '#' )
				{
					$menu.one(
						'closed.mm',
						function()
						{
							setTimeout(
								function()
								{
									$html.animate({
										scrollTop: $( href ).offset().top
									}); 
								}, 10
							);  
						}
					);                      
				}
			}
		);
	});

	/* ==============================================
		SMOOTH SCROLLING
	=============================================== */

	$('body').scrollspy();

		$(".navbar ul li a[href^='#']").on('click', function(e) {
			e.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
			scrollTop: $(this.hash).offset().top
			}, 1000, function(){
			window.location.hash = hash;
		});
	}); 

	/* = CUBE PORTFOLIO = */

    var gridContainer = $('#grid-container'),
	filtersContainer = $('#filters-container'),
	wrap, filtersCallback;


/*********************************
 init cubeportfolio
 *********************************/
gridContainer.cubeportfolio({
	defaultFilter: '*',
	animationType: 'quicksand',
	gapHorizontal: 16,
	gapVertical: 16,
	gridAdjustment: 'responsive',
	caption: 'zoom',
	displayType: 'sequentially',
	displayTypeSpeed: 100,

	// singlePageInline
	singlePageInlineDelegate: '.cbp-singlePageInline',
	singlePageInlinePosition: 'below',
	singlePageInlineShowCounter: true,
	singlePageInlineInFocus: true,
	singlePageInlineCallback: function (url, element) {

		// to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
		var t = this;

		$.ajax({
			url: url,
			type: 'GET',
			dataType: 'html',
			timeout: 5000
		})
			.done(function (result) {

				t.updateSinglePageInline(result);
				/*$('#mygallery').justifiedGallery({
					rowHeight : 300,
					lastRow : 'nojustify',
					margins : 3
				});*/
				console.log('doneee');

			})
			.fail(function () {
				t.updateSinglePageInline("Error! Please refresh the page!");
			});
	}
});


/*********************************
 add listener for filters
 *********************************/
if (filtersContainer.hasClass('cbp-l-filters-dropdown')) {

	wrap = filtersContainer.find('.cbp-l-filters-dropdownWrap');

	wrap.on({
		'mouseover.cbp': function () {
			wrap.addClass('cbp-l-filters-dropdownWrap-open');
		},
		'mouseleave.cbp': function () {
			wrap.removeClass('cbp-l-filters-dropdownWrap-open');
		}
	});

	filtersCallback = function (me) {
		wrap.find('.cbp-filter-item').removeClass('cbp-filter-item-active');

		wrap.find('.cbp-l-filters-dropdownHeader').text(me.text());

		me.addClass('cbp-filter-item-active');

		wrap.trigger('mouseleave.cbp');
	};

} else {
	filtersCallback = function (me) {
		me.addClass('cbp-filter-item-active').siblings().removeClass('cbp-filter-item-active');
	};
}

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


/*********************************
 add listener for load more
 *********************************/
$('.cbp-l-loadMore-button-link').on('click.cbp', function (e) {

	e.preventDefault();

	var clicks, me = $(this),
		oMsg;

	if (me.hasClass('cbp-l-loadMore-button-stop')) {
		return;
	}

	// get the number of times the loadMore link has been clicked
	clicks = $.data(this, 'numberOfClicks');
	clicks = (clicks) ? ++clicks : 1;
	$.data(this, 'numberOfClicks', clicks);

	// set loading status
	oMsg = me.text();
	me.text('LOADING...');

	// perform ajax request
	$.ajax({
		url: me.attr('href'),
		type: 'GET',
		dataType: 'HTML'
	}).done(function (result) {
		var items, itemsNext;

		// find current container
		items = $(result).filter(function () {
			return $(this).is('div' + '.cbp-loadMore-block' + clicks);
		});

		gridContainer.cubeportfolio('appendItems', items.html(),
			function () {
				// put the original message back
				me.text(oMsg);

				// check if we have more works
				itemsNext = $(result).filter(function () {
					return $(this).is('div' + '.cbp-loadMore-block' + (clicks + 1));
				});

				if (itemsNext.length === 0) {
					me.text('NO MORE WORKS');
					me.addClass('cbp-l-loadMore-button-stop');
				}

			});

	}).fail(function () {
		// error
	});

});
	/* ==============================================
		GOOGLE MAPS
	=============================================== */

		function initialize() {
		var myLatlng = new google.maps.LatLng(28.122075, -15.429742); // Change your location Latitude and Longitude 
		var mapOptions = {
		zoom: 15,
		center: myLatlng
		}
		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	// Disabled Map Scroll in Contact Page 
		map.setOptions({'scrollwheel': false});

	// Black and White style for Google Map
		var styles = [
		{
		stylers: [
		{ saturation: -100 }
		]
		},{
		featureType: "road",
		elementType: "geometry",
		stylers: [
		{ lightness: -8 },
		{ visibility: "simplified" }
		]
		},{
		featureType: "road",
		elementType: "labels",
		}
		];
		map.setOptions({styles: styles});

	// Google Map Maker 
		var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		});
		}

		google.maps.event.addDomListener(window, 'load', initialize);    
		
		
})(jQuery, window, document);
