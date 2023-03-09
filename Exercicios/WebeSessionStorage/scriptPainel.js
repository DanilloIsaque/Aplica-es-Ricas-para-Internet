//função q altera a cor do fundo ou do texto. ela recebe uma operação
//e uma cor.
var corfundo,cortexto,nome;

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
    nome= document.getElementById("fnome").value;
    //armazenar as informações no localStorage
    localStorage.corfundo=corfundo;
    localStorage.cortexto=cortexto;
    localStorage.nome=nome;
}