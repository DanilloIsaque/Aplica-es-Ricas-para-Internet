//função q altera a cor do fundo ou do texto. ela recebe uma operação
//e uma cor.
var corfundo,cortexto,nome;

function inicia(){
    if(localStorage.nome)// se for verdadeiro, já tenho coisa no local storage
    {
        corfundo=localStorage.corfundo;
        cortexto=localStorage.cortexto;
        nome=localStorage.nome;
        //chamamos a funcao defineCor(op,cor)
        defineCor(1,corfundo);
        defineCor(2,cortexto);
        document.getElementById("painel").innerHTML="bem vindo, " + nome+ "<hr>";
    
    }
}


function defineCor(op,cor){
    //se op=1 ,altere a cor do fundo, se igual a 2, muda a do texto
    if(op==1){
        document.body.style.backgroundColor=cor;
        //armazeno a cor em uma variavel
        corfundo=cor;
    }else{
        document.body.style.color=cor;
         //armazeno a cor em uma variavel
        cortexto=cor;
    }
}
function gravar(){
    var form = document.getElementById("fconf");
    nome= document.getElementById("fnome").value;
    //armazenar as informações no localStorage
    localStorage.corfundo=corfundo;
    localStorage.cortexto=cortexto;
    localStorage.nome=nome;
    form.style.display="none";

}

function mostrarOpcoes(){
    var form = document.getElementById("fconf");
    form.style.display= "block";
}

window.addEventListener("load",inicia);//chama a função dps da pagina ter sido carregada