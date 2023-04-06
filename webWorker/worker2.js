addEventListener('message',function(event){
    let numFatorial= event.data
    let resultado = numFatorial;
    
    for(let x = 1 ; x<resultado;x++){
        resultado*=x
       
    }
    postMessage(resultado);
})