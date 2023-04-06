// Seleciona o link principal e o sub-menu
const link = document.querySelector(".sub-menu-link")
const subMenu = document.querySelector(".sub-menu")

// Adiciona um evento de clique ao link principal
link.addEventListener("click", function (e) {
  e.preventDefault() // impede que o link seja seguido

  // Adiciona ou remove a classe 'show' do sub-menu, para exibi-lo ou oculta-lo
  subMenu.classList.toggle("show")
})
