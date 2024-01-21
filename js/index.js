document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector(".nav__list");

    hamburger.addEventListener("click", function () {
      navList.classList.toggle("is-active");
    });
  });