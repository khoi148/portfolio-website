/*!
 * Start Bootstrap - Freelancer v6.0.0 (https://startbootstrap.com/themes/freelancer)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
 */
console.log("script has loaded");

(function ($) {
  "use strict"; // Start of use strict

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 80,
  });

  // Collapse Navbar
  const navbarCollapse = () => {
    if ($("#mainNav").length) {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    }
  };
  // Alter Navbar when scrolled down
  const navbarAlter = () => {
    if ($("#mainNav").length) {
      if ($("#mainNav").offset().top > 400) {
        $("#mainNav").addClass("bg-secondary-scrolled");
      } else {
        $("#mainNav").removeClass("bg-secondary-scrolled");
      }
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  navbarAlter();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse, navbarAlter);

  // Floating label headings for the contact form
  $(function () {
    $("body")
      .on("input propertychange", ".floating-label-form-group", function (e) {
        $(this).toggleClass(
          "floating-label-form-group-with-value",
          !!$(e.target).val()
        );
      })
      .on("focus", ".floating-label-form-group", function () {
        $(this).addClass("floating-label-form-group-with-focus");
      })
      .on("blur", ".floating-label-form-group", function () {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
  });
})(jQuery); // End of use strict
