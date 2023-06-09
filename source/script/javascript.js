/*--------------------------------------------------------------
>>>  PRELOADER CODE START:
--------------------------------------------------------------*/

jQuery(window).on('load', function () {

    setTimeout(function(){
		jQuery(".preloader-background").css('transform','translateY(0)');
	}, 3000)

	setTimeout(function(){
		jQuery(".section-preloader").css('transform','translateY(-100%)');
		jQuery('html').css('overflowY', 'auto')
	}, 3700)
		
 })

/*--------------------------------------------------------------
>>>  PRELOADER CODE END.
--------------------------------------------------------------*/

jQuery(document).ready(function(){

/*--------------------------------------------------------------
>>> JQUERY FORM MASK CODE START:
--------------------------------------------------------------*/

	jQuery("form .phone-mask").click(function(){
	  jQuery(this).setCursorPosition(3);
	}).mask("+7(999) 999-9999");
	jQuery("form .phone-mask").mask("+7(999) 999-9999");

	jQuery.fn.setCursorPosition = function(pos) {
	  if (jQuery(this).get(0).setSelectionRange) {
	    jQuery(this).get(0).setSelectionRange(pos, pos);
	  } else if ($(this).get(0).createTextRange) {
	    var range = $(this).get(0).createTextRange();
	    range.collapse(true);
	    range.moveEnd('character', pos);
	    range.moveStart('character', pos);
	    range.select();
	  }
	};

/*--------------------------------------------------------------
>>> JQUERY FORM MASK CODE END.
--------------------------------------------------------------*/



/*--------------------------------------------------------------
>>> SENDING THE FORM START:
--------------------------------------------------------------*/
	
	function showSuccesfullMessageModal(){
		jQuery('.call-block-01').css('display','none');
		setTimeout(function(){
			jQuery(".call-background-01").removeClass("active");
			jQuery(".call-block").removeClass("active");
		}, 500)
		setTimeout(function(){
			jQuery(".call-background-02").removeClass("active");
		}, 600)
		setTimeout(function(){
			jQuery('.section-call').css('display','none');
			jQuery('html').css('overflowY', 'auto')
		}, 1400)
	}

	function showSuccesfullMessageSection(){
		jQuery('.form-block-01').css('display','none');
		jQuery('.form-block-02').css('display','block');
	}

	jQuery(".call-form").submit(function() {
        var th = jQuery(this);
        jQuery.ajax({
            type: "POST",
            url: "./mail.php",
            data: th.serialize()
        }).done(function() {
        	showSuccesfullMessageModal();
            setTimeout(function() {
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    jQuery(".form-form").submit(function() {
        var th = jQuery(this);
        jQuery.ajax({
            type: "POST",
            url: "./mail.php",
            data: th.serialize()
        }).done(function() {
        	showSuccesfullMessageSection();
            setTimeout(function() {
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

/*--------------------------------------------------------------
>>> SENDING THE FORM END.
--------------------------------------------------------------*/



/*--------------------------------------------------------------
>>> STICKY MENU START:
--------------------------------------------------------------*/

	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() >= 200) {
			jQuery(".header-menu-full").addClass('hidden');
		} else {
			jQuery(".header-menu-full").removeClass("hidden");
		}

		if (jQuery(this).scrollTop() >= 800) {
			jQuery(".header-menu-full").addClass("sticky");
		} else {
			jQuery(".header-menu-full").removeClass("sticky");
		}
	});

/*--------------------------------------------------------------
>>> STICKY MENU END.
--------------------------------------------------------------*/



/*--------------------------------------------------------------
>>>  MENU CODE START:
--------------------------------------------------------------*/

	jQuery('#menu-open').click(function(){
        jQuery('.section-menu').css('transform','translateX(0)');
        jQuery(".section-menu").addClass("visibility");
        setTimeout(function(){
			jQuery('html').css('overflow', 'hidden')
        }, 300)
    })

    jQuery('#menu-close').click(function(){
    	setTimeout(function(){
    	 	jQuery('.section-menu').css('transform','translateX(-100%)');
    	}, 400)
        jQuery(".section-menu").removeClass("visibility");
        jQuery('html').css('overflowY', 'auto')
    })

/*--------------------------------------------------------------
>>>  MENU CODE END.
--------------------------------------------------------------*/



/*--------------------------------------------------------------
>>> SLIDERS CODE START:
--------------------------------------------------------------*/

	jQuery('.gallery-slider').owlCarousel({
	    loop: true,
	    touchDrag: true,
	    mouseDrag: true,
	    nav: false,
	    dots: true,
	    autoWidth: false,
	    autoHeight: false,
	    autoplay: false,
	    items:1,
	    smartSpeed: 1000,
	    dotsContainer: '.gallery-progress',
	    onInitialized: function(e) {
		    jQuery('.gallery-counter').text( '1 / ')
		    jQuery('.gallery-number').text(this.items().length)
		}
	})

	let owlGallerySlider = jQuery('.gallery-slider');
	owlGallerySlider.owlCarousel();

	jQuery('#gallery-prev').click(function() {
	    owlGallerySlider.trigger('prev.owl.carousel', [300]);
	})

	jQuery('#gallery-next').click(function() {
	    owlGallerySlider.trigger('next.owl.carousel');
	})

	jQuery('.gallery-slider').on('changed.owl.carousel', function(e) {
		jQuery('.gallery-counter').text(++e.page.index + ' / ')
	 	jQuery('.gallery-number').text(e.item.count)
	});

	jQuery('.gallery-progress button').each(function() {
	    jQuery(this).attr('disabled', 'disabled')
	});

	jQuery('.map-slider').owlCarousel({
	    loop: true,
	    touchDrag: true,
	    mouseDrag: true,
	    nav: false,
	    dots: false,
	    autoWidth: false,
	    autoHeight: false,
	    autoplay: false,
	    items:1,
	})

	let owlMapSliderSlider = jQuery('.map-slider');
	owlMapSliderSlider.owlCarousel();

	jQuery('#map-slider-prev, #map-mini-slider-prev').click(function() {
	    owlMapSliderSlider.trigger('prev.owl.carousel', [300]);
	})

	jQuery('#map-slider-next, map-mini-slider-next').click(function() {
	    owlMapSliderSlider.trigger('next.owl.carousel');
	})

/*--------------------------------------------------------------
>>> SLIDERS CODE END.
--------------------------------------------------------------*/



/*--------------------------------------------------------------
>>> PARALLAX CODE START:
--------------------------------------------------------------*/

	let sectionHeightHeader = jQuery('.section-header').height();
	let sectionHeightProject = jQuery('.section-project').height();
	let sectionHeightMap = jQuery('.section-map').height();
	let sectiontInformation = jQuery('.section-information').height();

	gsap.registerPlugin(ScrollTrigger);


	if(jQuery(window).width() > 992){
		ScrollTrigger.create({
			trigger: ".project-trigger",
			start: "top 100px",
			end: "+=300",
			markers: false,
			pinSpacing: false,
			pin: true,
		})

		ScrollTrigger.create({
			trigger: ".map-container",
			start: "100px",
			end: `+=${sectionHeightMap + 200}`,
			markers: false,
			pin: true,
			pinSpacing: false,
		})

		ScrollTrigger.create({
			trigger: ".information-container",
			start: "300px",
			end: `+=${sectiontInformation + 200}`,
			markers: false,
			pin: true,
			pinSpacing: false,
		})
	} else {
		ScrollTrigger.killAll()
	}

/*--------------------------------------------------------------
>>> PARALLAX CODE END.
--------------------------------------------------------------*/



/*--------------------------------------------------------------
>>> CALL MODAL CODE START:
--------------------------------------------------------------*/

jQuery('.button-call').click(function(){
	jQuery('.section-call').css('display','block');
	jQuery('html').css('overflow', 'hidden')
	setTimeout(function(){
		jQuery(".call-background-01").addClass("active");
		jQuery(".call-block").addClass("active");
	}, 400)
	setTimeout(function(){
		jQuery(".call-background-02").addClass("active");
	}, 1100)
	setTimeout(function(){
		jQuery(".call-close").addClass("active");
	}, 1400)
})

jQuery('.call-close, .call-close-mobile').click(function(){
	setTimeout(function(){
		jQuery(".call-close").removeClass("active");
	}, 200)
	setTimeout(function(){
		jQuery(".call-background-01").removeClass("active");
		jQuery(".call-block").removeClass("active");
	}, 400)
	setTimeout(function(){
		jQuery(".call-background-02").removeClass("active");
	}, 800)
	setTimeout(function(){
		jQuery('.section-call').css('display','none');
		jQuery('html').css('overflowY', 'auto')
	}, 1200)
})


/*--------------------------------------------------------------
>>> CALL MODAL CODE END.
--------------------------------------------------------------*/


/*--------------------------------------------------------------
>>> SVG CODE START:
--------------------------------------------------------------*/

jQuery("img.img-svg").each(function () {
    var $img = jQuery(this);
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");
    jQuery.get(imgURL, function (data) {
        var $svg = jQuery(data).find("svg");
        if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass + " replaced-svg");
        }
        $svg = $svg.removeAttr("xmlns:a");
        if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
            $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"))
        }
        $img.replaceWith($svg);
    }, "xml");
});

/*--------------------------------------------------------------
>>> SVG CODE END.
--------------------------------------------------------------*/


/*--------------------------------------------------------------
>>> SERVICE SLIDER CODE START:
--------------------------------------------------------------*/

	jQuery('.service-slider-buttons').owlCarousel({
	    loop: false,
	    touchDrag: true,
	    mouseDrag: true,
	    nav: false,
	    dots: false,
	    autoWidth: false,
	    autoHeight: false,
	    autoplay: false,
	    items:5,
	    smartSpeed: 200,
	    URLhashListener:true,
	    startPosition: 'URLHash',
	    autoplay: false,
	    responsive:{
	        0:{
	            items: 5
	        },
	        500:{
	            items: 7
	        }
	    }
	})

	let owlServiceButtonsSlider = jQuery('.service-slider-buttons');
	owlServiceButtonsSlider.owlCarousel();

	jQuery('.service-slider').owlCarousel({
	    loop: false,
	    touchDrag: false,
	    mouseDrag: false,
	    nav: false,
	    dots: false,
	    autoWidth: false,
	    autoHeight: false,
	    autoplay: false,
	    items:1,
	    smartSpeed: 200,
	    URLhashListener:true,
	    startPosition: 'URLHash',
	    autoplay: false,
	})

	let owlServiceSlider = jQuery('.service-slider');
	owlServiceSlider.owlCarousel();

	jQuery('#service-prev').click(function() {
	    owlServiceSlider.trigger('prev.owl.carousel', [300]);
	    selectActiveElement();
	})

	jQuery('#service-next').click(function() {
	    owlServiceSlider.trigger('next.owl.carousel');
	    selectActiveElement();
	})

	function selectActiveElement(){
		const locationName = location.href
		const locationNameSplit = locationName.split('#')[1]

		jQuery(".service-button-container .service-button-item").each(function () {
			const itemName = jQuery(this).attr('href')
			const itemNameSplit = itemName.split('#')[1]

		
			if (itemNameSplit === locationNameSplit) {
				jQuery(".service-button-container .service-button-item").removeClass('active');
				jQuery(this).addClass('active');
			}
		})
	}

	jQuery(".service-button-container .service-button-item").click(function () {
		jQuery(".service-button-container .service-button-item").removeClass('active');
		jQuery(this).addClass('active');

		const locationName = location.href
		const locationNameSplit = locationName.split('#')[0]

		const itemName = jQuery(this).attr('href')
		const itemNameSplit = itemName.split('#')[1]

		location.href = locationNameSplit + '#' + itemNameSplit;
	})

/*--------------------------------------------------------------
>>> SERVICE SLIDER CODE END.
--------------------------------------------------------------*/


/*--------------------------------------------------------------
>>> APARTMENT SECTION CODE START:
--------------------------------------------------------------*/

	const range = document.getElementById('range');

	noUiSlider.create(range, {
	    start: [40, 200],
	    connect: true,
	    range: {
	        'min': 40,
	        'max': 260
	    },
	    behaviour: 'tap-drag',
	    tooltips: false,
	});

	const nodes = [
	    document.getElementById('lower-value'), // 0
	    document.getElementById('upper-value')  // 1
	];

	range.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
	    nodes[handle].innerHTML = `${values[handle].slice(0, -1)} м²`;
	});

	function selectButton(elem){
		jQuery('label.room').removeClass('selected');
		jQuery(elem).addClass('selected'); 
	}

	jQuery('label.room').click(function(){
		selectButton(this)
	})

	jQuery('.open-plan-image').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-no-margins mfp-with-zoom plan-modal'
	});

	customSelect('.block-select select');
	customSelect('.floor-select select');

	const filterElements = document.querySelectorAll('.search-block-item');
	const filterElementsCounter = document.querySelector('.search-element-counter');

	const blockSelectElement =  document.querySelector('.block-select select').customSelect;
	const floorSelectElement =  document.querySelector('.floor-select select').customSelect;
	const roomRadioElements =  document.querySelector('.radio-group');

	let minValue;
	let maxValue;

	function setDefaultValue(){
		console.log('Default')


		blockSelectElement.value = 1;
		floorSelectElement.value = 0;

		const radioInputButtons = document.querySelectorAll('input[name="rooms"]');
		const firstRadioInputButton = radioInputButtons[0]
		const radioLabelButtons = document.querySelectorAll('label.room');
		const firstRadioLabelButton = radioLabelButtons[0]

		jQuery('input[name="rooms"]:checked').removeAttr('checked');
		selectButton(firstRadioLabelButton);
		firstRadioInputButton.checked = true;

		range.noUiSlider.reset();

		getData();
	}

	function getValueOfBlock(){
		const blockSelectValue = blockSelectElement.value;
		return blockSelectValue;
	}

	function getValueOfFloor(){
		const floorSelectValue = floorSelectElement.value;
		return floorSelectValue;
	}

	function getValueOfRoom(){
		const roomRadioValue = $('input[name="rooms"]:checked').val();
		return roomRadioValue;
	}

	function getData(){
		const blockSelectValue = getValueOfBlock();
		const floorSelectValue = getValueOfFloor();
		const roomRadioValue = getValueOfRoom();

		filterElements.forEach(elem => {

			const elemBlock = Number(elem.querySelector('#block').innerHTML.split('Блок')[1]);
			const elemFloor = Number(elem.querySelector('#floor').innerHTML.split('')[0]);
			const elemRooms = Number(elem.querySelector('#room').innerHTML.split('')[0]);
			const elemArea  = Number(elem.querySelector('#area').innerHTML.split('м')[0])

			const equalBlock = (blockSelectValue == elemBlock);
			const equalFloor = (floorSelectValue == 0) || (floorSelectValue == elemFloor)
			const equalRooms = (roomRadioValue == 0) || (roomRadioValue == elemRooms)
			const equalArea  =  (elemArea <= maxValue) && (elemArea >=  minValue)

			if (!(equalBlock && equalFloor && equalRooms && equalArea)) {
				elem.classList.add('hidden');
				elem.classList.remove('active');
			} else {
				elem.classList.remove('hidden');
				elem.classList.add('active')
			}

		})

		let filterElementsActive = document.querySelectorAll('.search-block-item.active');
		filterElementsCounter.textContent = filterElementsActive.length;

		addActiveClassAfterRender();
	}

	jQuery('.block-select .custom-select-option').click(function(){
		setTimeout(getData, 100)
	})

	jQuery('.floor-select .custom-select-option').click(function(){
		setTimeout(getData, 100)
	})

	roomRadioElements.addEventListener('click', () => { 
		getData()
	});

	range.noUiSlider.on('update', function (values) {
		minValue = values[0];
		maxValue = values[1];

		getData()
	});

	function addActiveClassAfterRender(){
		const filterElementsActive = document.querySelectorAll('.search-block-item.active');

		if (!filterElementsActive.length) {
			jQuery('.plan-image-item').hide();
			return;
		} else {
			jQuery('.plan-image-item').show();
		}

		const firstElementAfterRender = filterElementsActive[0];
		const itemImage = firstElementAfterRender.querySelector('.item-image img').getAttribute('src');

		jQuery('.full-plan-01').attr('href', itemImage);
		jQuery('.full-plan-02').attr('href', itemImage);
		jQuery('.full-plan-01').find('img').attr('src', itemImage);

		jQuery('.search-block-item').removeClass('selected-item');
		firstElementAfterRender.classList.add('selected-item');
	}

	function addActiveClassAfterClick(elem){
		jQuery('.search-block-item').removeClass('selected-item');
		jQuery(elem).addClass('selected-item');

		const itemImage = elem.querySelector('.item-image img').getAttribute('src');

		jQuery('.full-plan-01').attr('href', itemImage);
		jQuery('.full-plan-02').attr('href', itemImage);
		jQuery('.full-plan-01').find('img').attr('src', itemImage);
	}

	jQuery('.search-block-item').click(function(){
		addActiveClassAfterClick(this);
	})

	if(jQuery(window).width() < 500){
		const selectFloor = jQuery('.input-block.floor-select');
		const buttonsRoom = jQuery('.input-block.buttons.apartments');
		const range = jQuery('.input-block.range');

		selectFloor.detach();
		buttonsRoom.detach();
		range.detach();

		jQuery(selectFloor).appendTo('.filter-floor')
		jQuery(buttonsRoom).appendTo('.filter-buttons')
		jQuery(range).appendTo('.filter-range')
	}

	jQuery('.filter-open').click(function(){
        jQuery('.section-filters').css('transform','translateX(0)');

        setTimeout(function(){
			jQuery('html').css('overflow', 'hidden')
        }, 300)

        setTimeout(function(){
			jQuery(".filters-close").addClass("active");
		}, 400)
    })

    jQuery('.filters-close, .filter-close-button').click(function(){
    	jQuery(".filters-close").removeClass("active");

    	setTimeout(function(){
			jQuery('.section-filters').css('transform','translateX(100%)');
		}, 300)

		setTimeout(function(){
			jQuery('html').css('overflowY', 'auto')
		}, 400)
    })

    jQuery('.filter-reset-button').click(function(){
    	setDefaultValue();
    })

/*--------------------------------------------------------------
>>> APARTMENT SECTION CODE END.
--------------------------------------------------------------*/


/*--------------------------------------------------------------
>>> COMPANY SECTION CODE START:
--------------------------------------------------------------*/

jQuery('.cases-slider').owlCarousel({
	    loop: true,
	    touchDrag: true,
	    mouseDrag: true,
	    nav: false,
	    dots: false,
	    autoWidth: false,
	    autoHeight: false,
	    autoplay: false,
	    items:1,
	    smartSpeed: 200,
	    autoplay: false,
	    margin: 10
	})

	let owlCasesSlider = jQuery('.cases-slider');
	owlCasesSlider.owlCarousel();

	jQuery('#cases-prev').click(function() {
	    owlCasesSlider.trigger('prev.owl.carousel', [300]);
	})

	jQuery('#cases-next').click(function() {
	    owlCasesSlider.trigger('next.owl.carousel');
	})

/*--------------------------------------------------------------
>>> COMPANY SECTION CODE END.
--------------------------------------------------------------*/


/*--------------------------------------------------------------
>>> BUILDS SECTION CODE START:
--------------------------------------------------------------*/


	// customSelect('.order-select select');

	// if(jQuery(window).width() < 705){
	// 	jQuery(".build-row-03 > div").hide();
	// 	jQuery(".info-label-block").hide();

	// 	setTimeout(getOrder, 200)

	// 	jQuery('.order-select .custom-select-option').click(function(){
	// 		setTimeout(getOrder, 300)
	// 	})

	// 	function getOrder(){
	// 		const orderSelectElement =  document.querySelector('.order-select select').customSelect;
	// 		const orderSelectValue = orderSelectElement.value;
	// 		showTab(orderSelectValue);
	// 		console.log(orderSelectValue)
	// 	}

	// 	function showTab(num){
	// 		switch(Number(num)) {
	// 			case 1:
	// 				jQuery(".build-row-03 > div").hide();
	// 				jQuery(".info-label-block").hide();
	// 				jQuery("#tab-block-01").fadeIn();
	// 				jQuery('#tab-01').fadeIn();

	// 				break;

	// 			case 2:
	// 				jQuery(".build-row-03 > div").hide();
	// 				jQuery(".info-label-block").hide();
	// 				jQuery("#tab-block-02").fadeIn();
	// 				jQuery('#tab-02').fadeIn();

	// 				break;

	// 			case 3:
	// 				jQuery(".build-row-03 > div").hide();
	// 				jQuery(".info-label-block").hide();
	// 				jQuery("#tab-block-03").fadeIn();
	// 				jQuery('#tab-03').fadeIn();

	// 				break;

	// 			default:
	// 				jQuery("#tab-block-01").fadeIn();
	// 				jQuery('#tab-01').fadeIn();
	// 		}
	// 	}

	// } else {
	// 	jQuery(".build-row-03 > div").hide();
	// 	jQuery(".button-tabs a:first").attr("class","active");
	// 	jQuery(".build-row-03 div:first").fadeIn();

	// 	jQuery(".info-label-block").hide();
	// 	jQuery(".info-label-block:first").fadeIn();

	// 	jQuery('.button-tabs a').click(function(e) {
	// 	    e.preventDefault();        
	// 	    jQuery(".build-row-03 > div").hide();
	// 	    jQuery(".button-tabs a").attr("class","");
	// 	    jQuery(this).attr("class","active");
	// 	    jQuery('#' + jQuery(this).attr('name')).fadeIn();
	// 	});

	// 	jQuery('a[name="tab-01"]').click(function(){
	// 		jQuery(".info-label-block").hide();
	// 		jQuery(".info-label-block:nth-child(1)").fadeIn();
	// 	})

	// 	jQuery('a[name="tab-02"]').click(function(){
	// 		jQuery(".info-label-block").hide();
	// 		jQuery(".info-label-block:nth-child(2)").fadeIn();
	// 	})

	// 	jQuery('a[name="tab-03"]').click(function(){
	// 		jQuery(".info-label-block").hide();
	// 		jQuery(".info-label-block:nth-child(3").fadeIn();
	// 	})
	// }

	// // Slider #1

	// jQuery('.build-slider-01').owlCarousel({
	//     loop: true,
	//     touchDrag: true,
	//     mouseDrag: true,
	//     nav: false,
	//     dots: false,
	//     autoWidth: false,
	//     autoHeight: false,
	//     autoplay: false,
	//     items:3,
	//     smartSpeed: 200,
	//     autoplay: false,
	//     margin: 48,
	//     responsive:{
	//         0:{
	//             items: 1
	//         },
	//         500:{
	//             items: 2,
	//             margin: 30,
	//         },
	//         701:{
	//         	items: 3
	//         }
	//     }
	// })

	// let owlBuildSlider_01 = jQuery('.build-slider-01');
	// owlBuildSlider_01.owlCarousel();

	// jQuery('#build-prev-01').click(function() {
	//     owlBuildSlider_01.trigger('prev.owl.carousel', [300]);
	// })

	// jQuery('#build-next-01').click(function() {
	//     owlBuildSlider_01.trigger('next.owl.carousel');
	// })

	// // Slider #2

	// jQuery('.build-slider-02').owlCarousel({
	//     loop: true,
	//     touchDrag: true,
	//     mouseDrag: true,
	//     nav: false,
	//     dots: false,
	//     autoWidth: false,
	//     autoHeight: false,
	//     autoplay: false,
	//     items:3,
	//     smartSpeed: 200,
	//     autoplay: false,
	//     margin: 48,
	//     responsive:{
	//         0:{
	//             items: 1
	//         },
	//         500:{
	//             items: 2,
	//             margin: 30,
	//         },
	//         701:{
	//         	items: 3
	//         }
	//     }
	// })

	// let owlBuildSlider_02 = jQuery('.build-slider-02');
	// owlBuildSlider_02.owlCarousel();

	// jQuery('#build-prev-02').click(function() {
	//     owlBuildSlider_02.trigger('prev.owl.carousel', [300]);
	// })

	// jQuery('#build-next-02').click(function() {
	//     owlBuildSlider_02.trigger('next.owl.carousel');
	// })

	// // Slider #3

	// jQuery('.build-slider-03').owlCarousel({
	//     loop: true,
	//     touchDrag: true,
	//     mouseDrag: true,
	//     nav: false,
	//     dots: false,
	//     autoWidth: false,
	//     autoHeight: false,
	//     autoplay: false,
	//     items:3,
	//     smartSpeed: 200,
	//     autoplay: false,
	//     margin: 48,
	//     responsive:{
	//         0:{
	//             items: 1
	//         },
	//         500:{
	//             items: 2,
	//             margin: 30,
	//         },
	//         701:{
	//         	items: 3
	//         }
	//     }
	// })

	// let owlBuildSlider_03 = jQuery('.build-slider-03');
	// owlBuildSlider_03.owlCarousel();

	// jQuery('#build-prev-03').click(function() {
	//     owlBuildSlider_03.trigger('prev.owl.carousel', [300]);
	// })

	// jQuery('#build-next-03').click(function() {
	//     owlBuildSlider_03.trigger('next.owl.carousel');
	// })

	// jQuery('.build-item-show').magnificPopup({
	// 	type: 'image',
	// 	closeOnContentClick: true,
	// 	mainClass: 'mfp-no-margins mfp-with-zoom build-modal'
	// });


/*--------------------------------------------------------------
>>> BUILS SECTION CODE END.
--------------------------------------------------------------*/


/*--------------------------------------------------------------
>>> LINKS CODE START:
--------------------------------------------------------------*/

	jQuery('.section-header a[href*="#"], .section-menu a[href*="#"], .section-questions a[href*="#"]').on("click", function(e){

		jQuery('.section-menu').css('transform','translateX(-100%)');
        jQuery('html').css('overflowY', 'auto')

	    let anchor = jQuery(this);
        jQuery('html, body').stop().animate({
            scrollTop: jQuery(anchor.attr('href')).offset().top
        }, 990);
        e.preventDefault();
	    return false;

	});

/*--------------------------------------------------------------
>>> LINKS CODE END.
--------------------------------------------------------------*/

});



/*--------------------------------------------------------------
>>> SERVICE BUTTONS CODE START:
--------------------------------------------------------------*/

jQuery(document).ready(function(){
	const locationName = location.href
	const locationNameSplit = locationName.split('#')[1]

	jQuery(".service-button-container .service-button-item").each(function () {
		const itemName = jQuery(this).attr('href')
		const itemNameSplit = itemName.split('#')[1]
	
		if (itemNameSplit === locationNameSplit) {
			jQuery(".service-button-container .service-button-item").removeClass('active');
			jQuery(this).addClass('active');
		}
	})
})

/*--------------------------------------------------------------
>>> SERVICE BUTTONS CODE END.
--------------------------------------------------------------*/


/*--------------------------------------------------------------
>>> MAP CODE START:
--------------------------------------------------------------*/

let map;

function initMap() {

	const homePosition     = { lat: 43.208779, 			lng: 76.960729};
	const royalPosition    = { lat: 43.203317018161705, lng: 76.97778167704082 };
	const gardenPosition   = { lat: 43.21851563148002,  lng: 76.91503194240826 };
	const mallPosition     = { lat: 43.21822141072604,  lng:76.9283651948656 };
	const theatrePosition  = { lat: 43.226593916549426, lng: 76.94677567486151 };
	const terenkurPosition = { lat: 43.22317746947206,  lng: 76.96757846513376 };
	const kokTobePosition  = { lat: 43.23403437196063,  lng: 76.9759018643498 };
	const dostykPosition   = { lat: 43.233386112599,    lng: 76.95671318922655};
	const colibriPosition  = { lat: 43.23982305260296,  lng: 76.95518730577388};
	const office 		   = { lat: 43.20186368926617,  lng: 76.84801294310257}

	const mapFooter = new google.maps.Map(document.getElementById("footer-map"), {
		center: homePosition,
		zoom: 14,
		styles: 
			[
			    {
			        "featureType": "administrative",
			        "elementType": "all",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#E0DCD5"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "color": "#d7bcb3"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "color": "#704a3c"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape",
			        "elementType": "labels.text.stroke",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape",
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "color": "#704a3c"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape.natural",
			        "elementType": "all",
			        "stylers": [
			        	{
			                "visibility": "on"
			            },
			            {
			                "color": "#C8CFC5"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape.natural.landcover",
			        "elementType": "all",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "color": "#c1cfba"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape.natural.terrain",
			        "elementType": "all",
			        "stylers": [
			            {
			                "color": "#9cad93"
			            },
			            {
			                "visibility": "on"
			            }
			        ]
			    },
			    {
			        "featureType": "poi",
			        "elementType": "all",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#d9c2b7"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "color": "#bf9d91"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "color": "#704a3c"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "labels.text.stroke",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "visibility": "off"
			            },
			            {
			                "hue": "#ff0000"
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#d9c2b7"
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "color": "#bf9d91"
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "color": "#704a3c"
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "labels.text.stroke",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "visibility": "off"
			            },
			            {
			                "hue": "#ff0000"
			            }
			        ]
			    },
			    {
			        "featureType": "road.local",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#d9c2b7"
			            }
			        ]
			    },
			    {
			        "featureType": "road.local",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "color": "#bf9d91"
			            },
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "road.local",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "color": "#704a3c"
			            }
			        ]
			    },
			    {
			        "featureType": "road.local",
			        "elementType": "labels.text.stroke",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "road.local",
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "color": "#704a3c"
			            }
			        ]
			    },
			    {
			        "featureType": "transit",
			        "elementType": "all",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "all",
			        "stylers": [
			            {
			                "color": "#adc2cb"
			            }
			        ]
			    }
			]
	});

	const map = new google.maps.Map(document.getElementById("map"), {
		center: theatrePosition,
		zoom: 13.9,
		styles: 
			[
			    {
			        "featureType": "administrative",
			        "elementType": "all",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#E0DCD5"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "color": "#d7bcb3"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "color": "#704a3c"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape",
			        "elementType": "labels.text.stroke",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape",
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "color": "#704a3c"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape.natural",
			        "elementType": "all",
			        "stylers": [
			        	{
			                "visibility": "on"
			            },
			            {
			                "color": "#C8CFC5"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape.natural.landcover",
			        "elementType": "all",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "color": "#c1cfba"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape.natural.terrain",
			        "elementType": "all",
			        "stylers": [
			            {
			                "color": "#9cad93"
			            },
			            {
			                "visibility": "on"
			            }
			        ]
			    },
			    {
			        "featureType": "poi",
			        "elementType": "all",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#d9c2b7"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "color": "#bf9d91"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "color": "#704a3c"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "labels.text.stroke",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "visibility": "off"
			            },
			            {
			                "hue": "#ff0000"
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#d9c2b7"
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "color": "#bf9d91"
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "color": "#704a3c"
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "labels.text.stroke",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "visibility": "off"
			            },
			            {
			                "hue": "#ff0000"
			            }
			        ]
			    },
			    {
			        "featureType": "road.local",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#d9c2b7"
			            }
			        ]
			    },
			    {
			        "featureType": "road.local",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "color": "#bf9d91"
			            },
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "road.local",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "color": "#704a3c"
			            }
			        ]
			    },
			    {
			        "featureType": "road.local",
			        "elementType": "labels.text.stroke",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "road.local",
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "color": "#704a3c"
			            }
			        ]
			    },
			    {
			        "featureType": "transit",
			        "elementType": "all",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "all",
			        "stylers": [
			            {
			                "color": "#adc2cb"
			            }
			        ]
			    }
			]
	});

	const homeIcon     = 'media/map/icon_01.svg';
	const royalIcon    = 'media/map/icon_02.svg';
	const gardenIcon   = 'media/map/icon_03.svg';
	const mallIcon     = 'media/map/icon_04.svg';
	const theatreIcon  = 'media/map/icon_05.svg';
	const terenkurIcon = 'media/map/icon_06.svg';
	const kokTobeIcon  = 'media/map/icon_07.svg';
	const dostykIcon   = 'media/map/icon_08.svg';
	const colibriIcon  = 'media/map/icon_09.svg';

	const officeIcon = 'media/map/icon_10.svg';

	const marker = new google.maps.Marker({
		position: homePosition,
		map: map,
		icon: homeIcon,
	});

	const marker_02 = new google.maps.Marker({
		position: royalPosition,
		map: map,
		icon: royalIcon,
	});

	const marker_03 = new google.maps.Marker({
		position: gardenPosition,
		map: map,
		icon: gardenIcon,
	});

	const marker_04 = new google.maps.Marker({
		position: mallPosition,
		map: map,
		icon: mallIcon,
	});

	const marker_05 = new google.maps.Marker({
		position: theatrePosition,
		map: map,
		icon: theatreIcon,
	});

	const marker_06 = new google.maps.Marker({
		position: terenkurPosition,
		map: map,
		icon: terenkurIcon,
	});

	const marker_07 = new google.maps.Marker({
		position: kokTobePosition,
		map: map,
		icon: kokTobeIcon,
	});

	const marker_08 = new google.maps.Marker({
		position: dostykPosition,
		map: map,
		icon: dostykIcon,
	});

	const marker_09 = new google.maps.Marker({
		position: colibriPosition,
		map: map,
		icon: colibriIcon,
	});

	const marker_10 = new google.maps.Marker({
		position: homePosition,
		map: mapFooter,
		icon: officeIcon,
	});

}

window.initMap = initMap;

// Open map functional

jQuery('.open-map').click(function(){

	const map = jQuery('#map');
	map.detach();
	jQuery(map).appendTo('#map-full')

	jQuery('.section-interactive-map').addClass('active')
	jQuery('html').css('overflow', 'hidden')

	setTimeout(function(){
		jQuery(".map-close").addClass("active");
	}, 600)
})

// Close map functional

jQuery('.map-close').click(function(){

	if(jQuery(window).width() < 500){

		const map = jQuery('#map-full #map-mobile');
		jQuery(".map-close").removeClass("active");

		setTimeout(function(){
			jQuery('.section-interactive-map').removeClass('active')
			jQuery('html').css('overflowY', 'auto')
		}, 300)

		setTimeout(function(){
			map.detach();
			jQuery(map).appendTo('.section-map-mobile .map-row-02');
		}, 500)

	} else {
		const map = jQuery('#map-full #map');

		jQuery(".map-close").removeClass("active");
		
		setTimeout(function(){
			jQuery('.section-interactive-map').removeClass('active')
			jQuery('html').css('overflowY', 'auto')
		}, 300)

		setTimeout(function(){
			map.detach();
			jQuery(map).appendTo('.map-column-02');
		}, 500)
	}

})

// Open mobile map functional

jQuery('.open-mobile-map').click(function(){

	const map = jQuery('#map-mobile');
	map.detach();
	jQuery(map).appendTo('#map-full')

	jQuery('.section-interactive-map').addClass('active')
	jQuery('html').css('overflow', 'hidden')

	setTimeout(function(){
		jQuery(".map-close").addClass("active");
	}, 300)
})


if(jQuery(window).width() < 500){
	const map = jQuery('#map');
	map.detach();
	jQuery(map).appendTo('#map-mobile')
}

if(jQuery(window).width() < 992){
	const map = jQuery('#footer-map');
	map.detach();
	jQuery(map).appendTo('#footer-map-mobile')
}

/*--------------------------------------------------------------
>>> MAP CODE END.
--------------------------------------------------------------*/

