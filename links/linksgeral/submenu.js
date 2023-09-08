// Seleciona o link principal, o sub-menu, o ícone open e o ícone close
const link = document.querySelector(".sub-menu-link");
const subMenu = document.querySelector(".sub-menu");
const iconOpen = document.querySelector(".icon-open");
const iconClose = document.querySelector(".icon-close");

// Adiciona um evento de clique ao link principal
link.addEventListener("click", function (e) {
  e.preventDefault(); // Impede que o link seja seguido

  // Adiciona ou remove a classe 'show' do sub-menu, para exibi-lo ou oculta-lo
  subMenu.classList.toggle("show");

  // Alterna entre as classes 'hidden' nos ícones para alternar a visibilidade
  iconOpen.classList.toggle("hidden");
  iconClose.classList.toggle("hidden");
});
