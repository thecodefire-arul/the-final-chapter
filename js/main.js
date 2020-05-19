//Loader

$(window).on("load", function(){
  $(".loader-wrapper").fadeOut("slow");
})



//Menu Button

$(document).ready(function() {
  $("#menu").click(function() {
    $("#navbar").show(500);
    $("#menu").hide(500);
  });
});

$(document).ready(function() {
  $(".close-btn").click(function() {
    $("#navbar").hide(500);
    $("#menu").show(500);
  });
});

$(document).ready(function() {
  $(".nav-links").click(function() {
    $("#navbar").hide(500);
    $("#menu").show(500);
  });
});