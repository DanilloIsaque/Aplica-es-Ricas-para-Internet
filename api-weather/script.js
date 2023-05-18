//executa a função anônima depois que toda a página for carregada
window.onload=function(){
    var url="https://api.openweathermap.org/data/2.5/weather?";
    var minhaAPI="a6f408216a6da04f50d1910b6b7b8c62";
    var resultado;
    var cidade;

    cidades.onchange=function(){
        //criando o objeto ajax dependendo do navegador
        var ajax= null;
        //se o navegador existir o XMLHttpRequest(),ele cria por essa por essa metodologia
        if(window.XMLHttpRequest){
            ajax = new XMLHttpRequest();
            
        }else if(window.ActiveXObject){
            ajax = new ActiveXObject("Msxml2.XMLHTTP");
        }
        
        cidade = cidades.value

        if(cidade !=0){
            //abre a pagina txt via GET
            ajax.open("GET", url + 'appid=' + minhaAPI + '&q=' + cidade + '&units=metric&lang=pt', true);
            //nao envia nada 
            ajax.send(null);
            //tenta identificar o estado do carregamennto do conteudo 
            ajax.onreadystatechange = function(){
                //verifica se o conteudo ja chegou no navegador 
                if(ajax.readyState== 4){
                    //verifica se o conteudo ja chegpu na pagina
                    if(ajax.status == 200){
                        //console.log(ajax.respondeText)
                    }
                }
    resultado = JSON.parse(ajax.responseText);
    console.log(resultado);
    console.log(resultado.name);
    console.log(resultado.main.temp_min);
    console.log(resultado.main.temp_max);
    console.log(resultado.weather[0].description);
            }
        }
    }


}



