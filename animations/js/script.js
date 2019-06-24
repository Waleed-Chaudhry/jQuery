$(function() {
  // jQuery goes here, as indicated by $ sign
  // Executed when the page is loaded (not including images)

  /* Fade */
  // CSS class selector
  // Given in ms, can also pass in 'fast' and 'slow'
  // $(".red-box").fadeOut(2000); // 2000 represents the time it takes to fade out
  // $(".red-box").fadeIn(1000); // Brings the box back in
  // $(".red-box").fadeTo(1000, 0.5); // Second argument represents the opacity

  // $(".green-box").fadeToggle(); // Makes an invisibly object visible, vice versa
  // $(".green-box").fadeToggle(); // Returns it to the original opacity level

  /* Showing and Hiding Elements */
  // $(".blue-box").hide(1000)
  // $(".blue-box").show(1000)
  // $(".blue-box").toggle()

  /* Moving Elements Up and Down */
  // $(".blue-box").slideUp(2000)
  // $(".blue-box").slideDown(2000)
  // $("p").hide()
  // $("p").slideDown(2000)

  /* Custom Animations */
  // $(".blue-box").animate({
  //   "margin-left": "+=200px", // += Simply moves it 200px in the given direction
  //    "opacity": 0,
  //    "height": "50px",
  //    "width": "50px",
  //    "margin-top": "25px"
  // }, 1000, "linear") // Second argument is time, third is style (animate the same in a given unit of time)

  /* Deplaying and Chaining Animations */
  // $(".red-box").fadeTo(1000, 0.2);
  // $(".green-box").delay(1000).fadeTo(1000, 0.5); // Delay makes it wait for 1s, can keep adding functions after fadeTo
  // $(".blue-box").fadeTo(1000, 0.5);

  /* Timing Animations using callbacks */
  $(".red-box").fadeTo(1000, 0, function() {
    $(".green-box").fadeTo(1000, 0.5, function() {
      $(".blue-box").fadeTo(1000, 0.5); // Blue Box animates after the green one, which fades after the red one
    });
  });
});