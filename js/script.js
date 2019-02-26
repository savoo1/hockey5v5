$(document).ready(function() {
  if ($(window).width() > 765) {
      if($(this).scrollTop()>=50){
          $(".navbar-default").css("margin-top", "0");
          $(".topmenu").css("margin-top", "-48px");
          $(".navbar-default").css("background", "#222222");
          $(".topmenu").css("background", "#222222");
      }else{
          $(".navbarmargin").css("margin-top", "48px");
          $(".topmenu").css("margin-top", "0");
          $(".navbar-default").css("background", "transparent");
          $(".topmenu").css("background", "transparent");
      }
  }else{
      $(".navbar-default").css("margin-top", "0px");
      $(".topmenu").css("margin-top", "0");
      $(".navbar-default").css("background", "#222222");
      $(".side-collapse").css("background", "#ffffff");
  }




    $( window ).resize(function() {
      if ($(window).width() > 765) {
          if($(this).scrollTop()>=50){
              $(".navbar-default").css("margin-top", "0");
              $(".topmenu").css("margin-top", "-48px");
              $(".navbar-default").css("background", "#222222");
              $(".topmenu").css("background", "#222222");
          }else{
              $(".navbarmargin").css("margin-top", "48px");
              $(".topmenu").css("margin-top", "0");
              $(".navbar-default").css("background", "transparent");
              $(".topmenu").css("background", "transparent");
          }
      }else{
          $(".navbar-default").css("margin-top", "0px");
          $(".topmenu").css("margin-top", "0");
          $(".navbar-default").css("background", "#222222");
          $(".side-collapse").css("background", "#ffffff");
      }
    });


    $(document).on('scroll', function() {
        if ($(window).width() > 765) {
            if($(this).scrollTop()>=50){
                $(".navbar-default").css("margin-top", "0");
                $(".topmenu").css("margin-top", "-48px");
                $(".navbar-default").css("background", "#222222");
                $(".topmenu").css("background", "#222222");
            }else{
                $(".navbarmargin").css("margin-top", "48px");
                $(".topmenu").css("margin-top", "0");
                $(".navbar-default").css("background", "transparent");
                $(".topmenu").css("background", "transparent");
            }
        }else{
            $(".navbar-default").css("margin-top", "0px");
            $(".topmenu").css("margin-top", "0");
            $(".navbar-default").css("background", "#222222");
            $(".side-collapse").css("background", "#ffffff");
        }
    });

    $("textarea").click(function() {
         $(this).height(100);
      });
});
