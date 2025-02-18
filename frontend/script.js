document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const modal = document.querySelector('.modal');
  const contactButtons = document.querySelectorAll("#contact-btn");
  const closeModalButton = document.querySelector('.close');
  const contactForm = document.getElementById("contact-form");
  const errorMessage = document.getElementById("error-message");

  menuToggle.addEventListener("click", (event) => {
    event.stopPropagation(); 
    navMenu.classList.toggle("active");
  });

  navMenu.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("active");
    }
  });

  contactButtons.forEach(button => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      modal.classList.add("active");
    });
  });

  closeModalButton.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("active");
    }
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      errorMessage.textContent = "Por favor, completa todos los campos.";
      return;
    }

    alert("Formulario enviado con éxito");
    modal.classList.remove("active");
    contactForm.reset();
    errorMessage.textContent = "";
  });
});
