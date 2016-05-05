require("./jquery.appear.js");
require("./animate.min.css");
require("./jac.css");

$(function(){
	 $('*[data-animation]').addClass('animated');
	  //$('.animated').css("visibility","visible");
	 //alert("erer");
        $(".animated").appear();
        $(document.body).on("appear",".animated",function() {
        	//alert("ere");
            var elem = $(this);
            var animation = elem.data('animation');
            if ( !elem.hasClass('visible') ) {
                var animationDelay = elem.data('animation-delay');
                if ( animationDelay ) {

                    setTimeout(function(){
                        elem.addClass( animation + " visible" );
                    }, animationDelay);

                } else {
                    elem.addClass( animation + " visible" );
                }
            }
        });
});