var arr= [];






function add(){
   

   
    
    //aqui, ele puxa o dado inserido
    item = document.getElementById("itemli").value;
    arr.push(item);
    
    sessionStorage.vetor = JSON.stringify(arr);

    //aqui , eu chamo a ul e crio o li abaixo
    var ul= document.getElementById("dado");

    var li = document.createElement("li");
    // colocamos os atributos dela aqui
    li.setAttribute("id", "drag1");
    li.setAttribute("draggable","true");
    li.setAttribute("ondragstart","drag(event)");

    li.appendChild(document.createTextNode(item));

    ul.appendChild(li);
    
   
    
}
function allowDrop(ev){
    ev.preventDefault();
}
function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
   
}
function drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text")// tem q ser uma string;
    ev.target.appendChild(document.getElementById(data));
}