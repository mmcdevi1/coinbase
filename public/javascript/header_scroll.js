$(document).ready(function(){       
  var scroll_pos = 0;
  $(document).scroll(function() { 
      scroll_pos = $(this).scrollTop();
      if(scroll_pos > 150) {
          $("header").css('background-color', 'rgba(24,28,31,0.85)');
          $("#logo").attr('height', '50');
      } else {
          $("header").css('background-color', '');
          $("#logo").attr('height', '100');
      }
  });
   $(function() {
$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
});

   $(".rotate").textrotator({
      animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
      separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
      speed: 5000 // How many milliseconds until the next word show.
    });

});
