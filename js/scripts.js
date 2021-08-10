$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").removeClass("light-theme");
    $("body").addClass("dark-theme");
  });

  $("button#light").click(function() {
    $("body").removeClass("dark-theme");
    $("body").addClass("light-theme");
  });
});