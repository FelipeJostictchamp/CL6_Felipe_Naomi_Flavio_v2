 // JavaScript-Code für das Hamburger-Menü
 function toggleDropdown() {
    var dropdown = document.getElementById("hamburger-menu-dropdown");
    dropdown.classList.toggle("active");
  }

  // JavaScript-Code für die Navigation und den Footer in das Hamburger-Menü verschieben
  window.addEventListener("DOMContentLoaded", function() {
    var navigation = document.querySelector(".navbar");
    var hamburgerMenu = document.querySelector(".hamburger-menu-dropdown");
    var footer = document.querySelector(".footer");

    hamburgerMenu.appendChild(navigation);
    hamburgerMenu.appendChild(footer);
  });