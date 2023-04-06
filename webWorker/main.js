//baixar extensaopra rodar

worker1= new Worker('worker1.js') // entre os parenteses é o nome do arquivo
// colocar o nome de qual webworker estou recebendo
function calcularQuadrado(){
    worker1.postMessage(document.getElementById('inputNumber1').value)
}

//receber a mensagem do worker1.js

worker1.addEventListener('message',function(event){ //event é o 'message'
    const quadrado = event.data;
    document.getElementById('resultado').textContent= "o quadrado do numero digitado é " + quadrado ;
})