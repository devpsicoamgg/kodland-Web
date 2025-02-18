document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  menuToggle.addEventListener("click", (event) => {
    event.stopPropagation(); 
    navMenu.classList.toggle("active");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("active");
    }
  });

  navMenu.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });


});
