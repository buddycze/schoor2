
$(function () {
  $("li").slideDown(980);

  var toggleHeading = () => {
    $("#mainHead").fadeToggle(500);
  }
  var toggleSides = () => {
    $('.sides .left-side').animate({
      left: "+=1000px"
    }, 2000, "swing", false);
    $('.sides .right-side').animate({
      left: "-=50%"
    }, 2000, "swing", false);
  }

  setTimeout(toggleHeading, 1000);
  setTimeout(toggleSides, 1000);
});
