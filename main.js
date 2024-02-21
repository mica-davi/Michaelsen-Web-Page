document.getElementById("c_button").addEventListener("click", ChangeToC)
document.getElementById("web_button").addEventListener("click", ChangeToWeb)
document.getElementById("game_button").addEventListener("click", ChangeToGame)

function ChangeToC(skill){
    let newText = "C# é a linguagem em que tenho mais prática. Uso ela para estudar sobre Programação Orientada à Objetos e para grande parte dos meus projetos. Possuo também um conhecimento básico com XUnit e Fluent Assertions para realizar testes unitários.";
    document.getElementById("skill_text").innerHTML = newText;
}

function ChangeToWeb(skill){
    let newText = "Possuo conhecimento nas linguagens HTML, CSS e JavaScript. Este website foi feito completamente do 0 usando apenas essas ferramentas. Durante meus estudos também aprendi bastante sobre integração de banco de dados com Websites";
    document.getElementById("skill_text").innerHTML = newText;
}

function ChangeToGame(skill){
    let newText = "Há anos estudo sobre desenvolvimento de jogos na Unity, principalmente jogos em 2D. Estudar programação de jogos e game design é um hobby que pretendo tornar trabalho!";
    document.getElementById("skill_text").innerHTML = newText;
}