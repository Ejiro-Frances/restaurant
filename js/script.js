document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");
  const body = document.body;
  const searchImage = document.querySelector(".search-bar img");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    body.style.overflow = mobileMenu.classList.contains("active")
      ? "hidden"
      : "";
  });

  // Close mobile menu when clicking on a link
  const mobileLinks = document.querySelectorAll(".mobile-menu a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      mobileMenu.classList.remove("active");
      body.style.overflow = "";
    });
  });

  // Close mobile menu when resizing window beyond mobile breakpoint
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      hamburger.classList.remove("active");
      mobileMenu.classList.remove("active");
      body.style.overflow = "";
    }
  });
  // Open the search bar when the search button is clicked
  searchImage.addEventListener("click", function () {
    const searchInput = document.querySelector("#search");
    if (
      searchInput.style.display === "none" ||
      searchInput.style.display === ""
    ) {
      searchInput.style.display = "block";
    } else {
      searchInput.style.display = "none";
    }
  });
});
