var item;






function add(){
    




    sessionStorage.setItem("ITEM",item);
    
    item = document.getElementById("itemli").value;
    document.getElementById("adicionado").innerText=item;
   
    
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