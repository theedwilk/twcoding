// Seleciona o link do primeiro submenu e seus elementos relacionados
const link = document.querySelector(".sub-menu-link");
const subMenu = document.querySelector(".sub-menu");
const iconOpen = document.querySelector(".icon-open");
const iconClose = document.querySelector(".icon-close");

// Seleciona o link do segundo submenu e seus elementos relacionados
const link2 = document.querySelector(".sub-menu-link2"); // Adicione uma classe ou ID ao link do segundo submenu
const subMenu2 = document.querySelector(".sub-menu2"); // Adicione uma classe ou ID ao segundo submenu
const iconOpen2 = document.querySelector(".icon-open2"); // Adicione uma classe ou ID ao ícone open do segundo submenu
const iconClose2 = document.querySelector(".icon-close2"); // Adicione uma classe ou ID ao ícone close do segundo submenu

// Adiciona um evento de clique ao link do primeiro submenu
link.addEventListener("click", function (e) {
  e.preventDefault();
  subMenu.classList.toggle("show");
  iconOpen.classList.toggle("hidden");
  iconClose.classList.toggle("hidden");
});

// Adiciona um evento de clique ao link do segundo submenu
link2.addEventListener("click", function (e) {
  e.preventDefault();
  subMenu2.classList.toggle("show");
  iconOpen2.classList.toggle("hidden2");
  iconClose2.classList.toggle("hidden2");
});
