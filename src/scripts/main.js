const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".menu__toggle");

if (menu && menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("menu--open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  document.querySelectorAll(".menu__link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("menu--open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open menu");
    });
  });
}
