"use strict";

const header = document.querySelector("header");

const toggleBtn = document.querySelector(".hamburger");

const links = document.querySelectorAll(".nav-links");

const arrowContact = document.querySelector(".contact-info i");

/* --------------- Scroll Reveal  --------------- */
let slideDown = {
  origin: "top",
  delay: 700,
  duration: 2500,
  distance: "60px",
};

ScrollReveal().reveal(".img-container", slideDown);
ScrollReveal().reveal(".title", slideDown);

/* --------------- Sticky NavBar  --------------- */

function stickyNavbar() {
  header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll", () => {
  stickyNavbar();
  activeLink();
});

/* --------------- Activate Link  --------------- */

function activeLink() {
  let sections = document.querySelectorAll("section[id]");
  let passedSections = Array.from(sections)
    .map((sct, i) => {
      return {
        y: sct.getBoundingClientRect().top - header.offsetHeight,
        id: i,
      };
    })
    .filter((sct) => sct.y <= 0);
}

activeLink();

/* --------------- NavBar Devices  --------------- */

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("open");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("open");
  });
});

/* --------------- Toggle Arrow  --------------- */

let height = +window.innerHeight;
let width = +window.innerWidth;
console.log(height, width);

function arrow() {
  if (width < 768) {
    arrowContact.classList.remove("fa-arrow-right");
    arrowContact.classList.add("fa-arrow-down");
  } else {
  }
}

arrow();
