//MEnu Button

$(document).ready(function() {
  $("#menu").click(function() {
    $("#navbar").show(2000);
  });
});

$(document).ready(function() {
  $(".close-btn").click(function() {
    $("#navbar").hide(2000);
  });
});

$(document).ready(function() {
  $(".nav-links").click(function() {
    $("#navbar").hide();
  });
});