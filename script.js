function toggleMode() {
  const html = document.documentElement // pegando html
  html.classList.toggle("light") // fazendo a troca das classes

  // pegar a tag image
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se estiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "banana")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto do Mayk Brito sorrindo, usando óculos, jaqueta, barba e um fundo indo do rosa para azul")
  }

  // se estiver sem light mode, manter a imagem normal
}
