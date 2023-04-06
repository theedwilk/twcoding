function changeToEnglish() {
  // Alterar o texto para inglês
  document.getElementById("titulo").innerHTML = "Welcome to my website"
  document.getElementById("texto").innerHTML =
    "This is my website. Thanks for visiting!"

  // Esconder o banner e os dois primeiros links da lista
  document.getElementById("banner").style.display = "none"
  var links = document.getElementsByTagName("li")
  links[0].style.display = "none"
  links[1].style.display = "none"
}
