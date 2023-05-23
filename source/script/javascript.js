/*--------------------------------------------------------------
>>>  PRELOADER CODE START:
--------------------------------------------------------------*/

// jQuery(window).on('load', function () {

//     setTimeout(function(){
// 		jQuery(".preloader-background").css('transform','translateY(0)');
// 	}, 3000)

// 	setTimeout(function(){
// 		jQuery(".section-preloader").css('transform','translateY(-100%)');
// 		jQuery('html').css('overflowY', 'auto')
// 	}, 3700)
		
//   })

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
        	alert('Заявка успешно отправлена!');
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
        	alert('Заявка успешно отправлена!');
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
        setTimeout(function(){
			jQuery('html').css('overflow', 'hidden')
        }, 300)
    })

    jQuery('#menu-close').click(function(){
        jQuery('.section-menu').css('transform','translateX(-100%)');
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
		    jQuery('.gallery-counter').text( '01 / ')
		    jQuery('.gallery-number').text( '0' + this.items().length)
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
		jQuery('.gallery-counter').text( '0' + ++e.page.index + ' / ')
	 	jQuery('.gallery-number').text( '0' + e.item.count)
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

	jQuery('#map-slider-prev').click(function() {
	    owlMapSliderSlider.trigger('prev.owl.carousel', [300]);
	})

	jQuery('#map-slider-next').click(function() {
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
	let sectiontInformationMap = jQuery('.section-information').height();

	let heightToMap = sectionHeightHeader + sectionHeightProject + (sectionHeightMap / 4);

	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() >= heightToMap) {
			jQuery(".map-row-03").addClass("map-block-parallax");
		} else {
			jQuery(".map-row-03").removeClass("map-block-parallax");
		}
	});

	let heightToInformation = sectionHeightHeader + sectionHeightProject + sectionHeightMap + (sectiontInformationMap / 3);

	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() >= heightToInformation) {
			jQuery(".information-row-02").addClass("information-block-parallax");
		} else {
			jQuery(".information-row-02").removeClass("information-block-parallax");
		}
	});

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

jQuery('.call-close').click(function(){

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

		jQuery(".service-button-item").each(function () {
			const itemName = jQuery(this).attr('href')
			const itemNameSplit = itemName.split('#')[1]
		
			if (itemNameSplit === locationNameSplit) {
				jQuery(".service-button-item").removeClass('active');
				jQuery(this).addClass('active');
			}
		})
	}

	jQuery(".service-button-item").click(function () {
		jQuery(".service-button-item").removeClass('active');
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
	    start: [100, 200],
	    connect: true,
	    range: {
	        'min': 88.3,
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

	customSelect('select');

	jQuery('.open-plan-image').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-no-margins mfp-with-zoom plan-modal'
	});

	const apartmentArray = jQuery('.search-block-item');
	console.log(apartmentArray)

/*--------------------------------------------------------------
>>> APARTMENT SECTION CODE END.
--------------------------------------------------------------*/

});

/*--------------------------------------------------------------
>>> SERVICE BUTTONS CODE START:
--------------------------------------------------------------*/

jQuery(document).ready(function(){
	const locationName = location.href
	const locationNameSplit = locationName.split('#')[1]

	jQuery(".service-button-item").each(function () {
		const itemName = jQuery(this).attr('href')
		const itemNameSplit = itemName.split('#')[1]
	
		if (itemNameSplit === locationNameSplit) {
			jQuery(".service-button-item").removeClass('active');
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

	const homePosition = { lat: 43.208779, lng: 76.960729};
	const royalPosition = { lat: 43.203317018161705, lng: 76.97778167704082 };
	const gardenPosition = { lat: 43.21851563148002, lng: 76.91503194240826 };
	const mallPosition = { lat: 43.21822141072604, lng:76.9283651948656 };
	const theatrePosition = { lat: 43.226593916549426, lng: 76.94677567486151 };
	const terenkurPosition = { lat: 43.22317746947206, lng: 76.96757846513376 };
	const kokTobePosition = { lat: 43.23403437196063, lng: 76.9759018643498 };
	const dostykPosition = { lat: 43.233386112599, lng: 76.95671318922655};
	const colibriPosition = { lat: 43.23982305260296, lng: 76.95518730577388};

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

	const homeIcon =  'media/map/icon_01.svg';
	const royalIcon =  'media/map/icon_02.svg';
	const gardenIcon =  'media/map/icon_03.svg';
	const mallIcon = 'media/map/icon_04.svg';
	const theatreIcon = 'media/map/icon_05.svg';
	const terenkurIcon = 'media/map/icon_06.svg';
	const kokTobeIcon = 'media/map/icon_07.svg';
	const dostykIcon = 'media/map/icon_08.svg';
	const colibriIcon = 'media/map/icon_09.svg';

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

}

window.initMap = initMap;


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

jQuery('.map-close').click(function(){
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
})


/*--------------------------------------------------------------
>>> MAP CODE END.
--------------------------------------------------------------*/




