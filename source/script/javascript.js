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
	
	jQuery(".contact-form").submit(function() {
        var th = jQuery(this);
        jQuery.ajax({
            type: "POST",
            url: "/mail.php",
            data: th.serialize()
        }).done(function() {
        	alert('Заявка успешно отправлена!');
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
	    jQuery('.gallery-number').text( '0' + this.items().length)}
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

	let allSectionHeight = sectionHeightHeader + sectionHeightProject;

	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() >= allSectionHeight) {
			jQuery(".map-row-03").addClass("map-block-parallax");
		} else {
			jQuery(".map-row-03").removeClass("map-block-parallax");
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

function showSuccesfullMessageModal(){
	jQuery('.call-block-01').css('display','none');
}

function showSuccesfullMessageSection(){
	jQuery('.form-block-01').css('display','none');
	jQuery('.form-block-02').css('display','block');
}


});