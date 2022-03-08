$(document).ready(function(){
    $("#start").click(function(){
      $("#b-cookie").css("animation-iteration-count","infinite");
    });
  });
  $(document).ready(function(){
    $("#continue").click(function(){
      $("#b-cookie").css("animation-iteration-count","0");
    });
  });
  $(document).ready(function(){
    $("#end").click(function(){
      $("p").css("height", "200px").slideUp(2000);
      $("h3").css("color", "black");
    });
  });
  $(document).ready(function(){
    $(".btn1").click(function(){
  $(".hidden-cookie").css({
    visibility:"visible",
 
  }).toggle();
    });


  });

  