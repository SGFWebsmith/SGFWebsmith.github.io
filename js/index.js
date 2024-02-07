document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav__list");

  hamburger.addEventListener("click", function () {
    navList.classList.toggle("is-active");
  });

  document.addEventListener("click", function (event) {
    if (
      event.target.closest(".nav__list") ||
      event.target.closest(".hamburger")
    ) {
      return;
    }
    navList.classList.remove("is-active");
  });
});
