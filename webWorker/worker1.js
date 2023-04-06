addEventListener('message', function(event){
    const inputNumber1 = event.data;
    const quadrado =inputNumber1**2;
    postMessage(quadrado);
})
