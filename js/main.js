//Loader

$(window).on("load", function(){
  $(".loader-wrapper").fadeOut("slow");
})



//Menu Button

$(document).ready(function() {
  $("#menu").click(function() {
    $("#navbar").fadeIn(500);
    $("#menu").fadeOut(500);
  });
});

$(document).ready(function() {
  $(".close-btn").click(function() {
    $("#navbar").fadeOut(500);
    $("#menu").fadeIn(500);
  });
});

$(document).ready(function() {
  $(".nav-links").click(function() {
    $("#navbar").fadeOut(500);
    $("#menu").fadeIn(500);
  });
});

$(document).ready(function() {
  $(".logo").click(function() {
    $("#navbar").fadeOut(500);
    $("#menu").fadeIn(500);
  });
});