"use strict";

const navbar = document.querySelector("nav");

window.addEventListener("scroll", (scroll) => {
  let scrollVal = window.scrollY;
  if (scrollVal > 150) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});
