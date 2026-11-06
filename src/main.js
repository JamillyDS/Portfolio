// Menu Hamburguer
const btnMenu = document.getElementById("btn-menu");
const navBar = document.getElementById("menu");
const disable = document.getElementById("disable");

function toggleMenu() {
  navBar.classList.add("ativo");
}

function closeMenu() {
    navBar.classList.remove("ativo");
}

btnMenu.addEventListener("click", toggleMenu);
disable.addEventListener("click", closeMenu);
// Fim do Menu Hamburguer 

// Filtro dos Projetos 

const projetos = [
  {
    tipo: "Front",
    Nome: "Grid Landing Page: FrontEnd_Mentor",
    Descricao: ""
  }
]