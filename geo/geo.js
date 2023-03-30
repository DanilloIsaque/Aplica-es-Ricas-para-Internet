// declarar uma funcao chamada getLocation, q será responsável por obter a localizacao do usuario
var lat
var lon
function getLocation(){

    //testar se não existe a localizacao
    if(!navigator.geolocation){// verifica se o navegador n tem essa api
        return null;
    }
        //se ele passar pelo erro, pegamos a localização
        //esta funcao chama o método getCurrentPosition do objeto navigator.geolocation, que solicita a posição atual do usuario, a funcao de callback fornecida(anonima,nesse caso)
        //é chamada com o argumento Position como argumento, que chamamos de pos
        navigator.geolocation.getCurrentPosition(function(pos){  //função anonima
            //selecionar o elemento html com o id lat e atualizar o conteudo de texto(innerText) 
            //com a latitude do objeto Position(pos.coords.latitude)

           lat = document.getElementById("lat").innerText = pos.coords.latitude;
            lon = document.getElementById("lon").innerText = pos.coords.longitude;

            iniMap()
        })
    
}
//chamar a funcao
 getLocation()

function iniMap() {
    // The location of Uluru
    const uluru = { lat: lat, lng: lon };
    
    // The map, centered at Uluru
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
    }