$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 0&& $(this).scrollTop() <= 400) {
           $(".scroll").css("background", "#c0392b").css("transition", "0.5s");
        }
       else if ($(this).scrollTop() >= 500 && $(this).scrollTop() <= 900) {
          $(".scroll").css("background", "#e67e22").css("transition", "1.5s");
       }
       else if ($(this).scrollTop() >= 1000 && $(this).scrollTop() <= 1400) {
          $(".scroll").css("background", "#8e44ad").css("transition", "1.5s");
       }
       else if ($(this).scrollTop() >= 1400 && $(this).scrollTop() <= 1900) {
          $(".scroll").css("background", "#3498db").css("transition", "1.5s");
       }
       else if ($(this).scrollTop() >= 1800 && $(this).scrollTop() <= 2500) {
          $(".scroll").css("background", "#2ecc71").css("transition", "1.5s");
       }
       else if ($(this).scrollTop() >= 2200 && $(this).scrollTop() <= 2800) {
         $(".scroll").css("background", "#FB7BEF").css("transition", "1.5s");
      }
      else if ($(this).scrollTop() >= 2700 && $(this).scrollTop() <= 3200) {
         $(".scroll").css("background", "#900C3F").css("transition", "1.5s");
      }
      else if ($(this).scrollTop() >= 3100 && $(this).scrollTop() <= 3700) {
         $(".scroll").css("background", "#696A6B").css("transition", "1.5s");
      }
      else if ($(this).scrollTop() >= 3600 && $(this).scrollTop() <= 4100) {
         $(".scroll").css("background", "#FF67C5").css("transition", "1.5s");
      }
   });
});
