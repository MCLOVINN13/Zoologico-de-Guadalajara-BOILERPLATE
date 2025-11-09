// Espera a que el contenido de la página cargue
document.addEventListener("DOMContentLoaded", function() {
  
  // 1. Selecciona el header
  const miHeader = document.querySelector(".header");

  // 2. Define la función que revisa el scroll
  function checkScroll() {
    // Revisa si el scroll vertical es mayor a 50px
    if (window.scrollY > 50) {
      miHeader.classList.add("header-scrolled");
    } else {
      miHeader.classList.remove("header-scrolled");
    }
  }

  // 3. "Escucha" el evento de scroll en la ventana
  window.addEventListener("scroll", checkScroll);

  // 4. Funcionalidad del menú de hamburguesa
  const menuButton = document.querySelector(".btn.btn-primary");
  const navMenu = document.querySelector(".nav-menu");

  menuButton.addEventListener("click", function() {
    navMenu.classList.toggle("nav-menu-visible");
  });
});