document.getElementById("c_button").addEventListener("click", ChangeToC)
document.getElementById("web_button").addEventListener("click", ChangeToWeb)
document.getElementById("game_button").addEventListener("click", ChangeToGame)

function ChangeToC(skill){
    let newText = "<span class='important-text'>C#</span> é a linguagem em que tenho <span class='important-text'>mais prática.</span> Uso ela para estudar sobre <span class='important-text'>Programação Orientada à Objetos</span> e para grande parte dos meus projetos. Possuo também um conhecimento básico com <span class='important-text'>XUnit e Fluent Assertions</span> para realizar testes unitários.";
    document.getElementById("skill_text").innerHTML = newText;
}

function ChangeToWeb(skill){
    let newText = "Possuo conhecimento nas linguagens <span class='important-text'>HTML, CSS e JavaScript.</span> Este website foi feito <span class='important-text'>completamente do 0</span> usando apenas essas ferramentas. Durante meus estudos também aprendi bastante sobre <span class='important-text'>integração de banco</span> de dados com Websites";
    document.getElementById("skill_text").innerHTML = newText;
}

function ChangeToGame(skill){
    let newText = "Há anos estudo sobre desenvolvimento de jogos na <span class='important-text'>Unity</span>, principalmente <span class='important-text'>jogos em 2D</span>. Estudar programação de jogos e game design é um hobby que pretendo tornar <span class='important-text'>trabalho!</span>";
    document.getElementById("skill_text").innerHTML = newText;
}