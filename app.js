var main = function() {
			
			// var top = document.body.scrollTop;
             var background_image = $("#full-screen-background-image")[0];
   //          var img1 = "http://cdn.wonderfulengineering.com/wp-content/uploads/2014/01/HD-Technology-Wallpaper.jpg"; 
   //          var img2 = "http://www.wallpapers10.net/wp-content/uploads/images/wallpapers10.net-abstract-143.jpg";
            //document.body.scrollTop = 0;

            window.onscroll = function() {

                if (document.body.scrollTop > 600 && background_image.src != "http://www.wallpapers10.net/wp-content/uploads/images/wallpapers10.net-abstract-143.jpg") {
                     background_image.src = "http://www.wallpapers10.net/wp-content/uploads/images/wallpapers10.net-abstract-143.jpg";
                     console.log("The second image is now visible");
                }  
                if (document.body.scrollTop < 600 && background_image.src != "http://cdn.wonderfulengineering.com/wp-content/uploads/2014/01/HD-Technology-Wallpaper.jpg") {
                    background_image.src = "http://cdn.wonderfulengineering.com/wp-content/uploads/2014/01/HD-Technology-Wallpaper.jpg";
                     console.log("The first image is now visible");
                }
                
                // $("#full-screen-background-image").animate({
                // 	width: "70%",
                // 	top: '+=0.1'
                // },
                // 10,
                // function() {
                // 	//completion block
                // }); 
                // background_image.style.left = (background_image.style.left + 20) + 'px';
                // console.log(background_image.style.left);
            };
       //This works
      //$('#full-screen-background-image')[0].src = "http://www.wallpapers10.net/wp-content/uploads/images/wallpapers10.net-abstract-143.jpg";
      //console.log($('#full-screen-background-image').prop('src'));

    // window.onResize = function(event) {
    // 	console.log(window.innerHeight);
    // }

    window.addEventListener('resize', function(){console.log(1);}, true);
};

$(document).ready(main);