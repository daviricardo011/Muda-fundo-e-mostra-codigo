var titulo = document.getElementById("titulo");
var texto = document.getElementById("resultado");
var btn = document.getElementById("botao");

/* iria usar para fazer o titulo piscar, mas é mais simples fazer no css
function pisca(){
    const loop = setInterval(function(){
        let cores = '#' + Math.floor(Math.random() * (0xffffff+1)).toString(16).padStart(6, '0');
        titulo.style.color = cores;
    },1000);
}
*/

function mudaCorFundo(){
    const cor = '#' + Math.floor(Math.random() * (0xffffff+1)).toString(16).padStart(6, '0');
    document.body.style.backgroundColor = cor;
    texto.innerHTML = "O codigo hexadecimal dessa cor é: "+ cor;

}


// pisca();
btn.onclick = function (){
    mudaCorFundo();
}