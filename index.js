/*--$(document).ready(
    function(){
      $(".card").click(function()
      {
         $(".card").fadeToggle(1000); //alert("button clicked")

      })
      $(".carsd").mouseenter(function()
      {
          $(this).css({"background":"blue"})
      })
      $(".btsn").mouseleave(function()
      {
          $(this).css({"background":"green"})
         

      })
 
    }
)


              var myIndex = 0;
              carousel();
              
              function carousel() {
                var i;
                var x = document.getElementsByClassName("mySlides");
                for (i = 0; i < x.length; i++) {
                  x[i].style.display = "none";  
                }
                myIndex++;
                if (myIndex > x.length) {myIndex = 1}    
                x[myIndex-1].style.display = "block";  
                setTimeout(carousel, 2000); // Change image every 2 seconds
              }*/


              $('.carousel').carousel({
                interval: 3000
              })             
              

// You can also pass an optional settings object
// below listed default settings
$(document).ready(function() {
    
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
  
      /* Check the location of each desired element */
      $('.hideme').each( function(i){
          
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){
              
              $(this).animate({'opacity':'1'},500);
                  
          }
          
      }); 
  
  });
  
});