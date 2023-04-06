worker2= new Worker('worker2.js')
function calcularFatorial(){
    worker2.postMessage(document.getElementById('numFatorial').value)

}
worker2.addEventListener('message', function(event){
    let resultado = event.data
    document.getElementById('resultadoF').textContent="o resultado do fatorial do numero digitado é " + resultado;
})