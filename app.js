var main = function() {
			
	document.body.scrollTop = 0;

    var background_image = $("#full-screen-background-image")[0];
    var img1 = "http://cdn.wonderfulengineering.com/wp-content/uploads/2014/01/HD-Technology-Wallpaper.jpg"; 
    var img2 = "http://www.wallpapers10.net/wp-content/uploads/images/wallpapers10.net-abstract-143.jpg";
    var scrollBy = 0;
    var lastScroll = 0;
    var window_height = window.innerHeight;       

    window.onscroll = function() {
    	
    	var top = document.body.scrollTop;

        if (top > window_height) {
        	if (background_image.src != img2){
        		background_image.src = img2;
            	console.log("The second image is now visible");
        	}
        	background_image.style.top = (-(top - (window_height * 2.2)) * 0.075) + 'px';
            
        }  else if (top < window_height) {
        	if (background_image.src != img1) {
        		background_image.src = img1;
            	console.log("The first image is now visible");
        	}
            background_image.style.top = -(top * 0.075) + 'px';
        }
        
        console.log(-(top - window_height));
    };

    window.addEventListener('resize', 
    	function(){
    		console.log(1);
    		window_height = window.innerHeight;
    	}, true);

};

$(document).ready(main);