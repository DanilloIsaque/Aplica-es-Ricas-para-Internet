function play(){
    document.getElementById('vid').play();
}
function pause(){
    document.getElementById('vid').pause();
}
function mute(){
    var video = document.getElementById('vid');
    video.muted = true;
}
function forward(){
    var video = document.getElementById("vid");
    video.currentTime += 1;
  
}
function rewind(){
    var video = document.getElementById("vid");
    video.currentTime -= 1;
}
function full(){
    var video = document.getElementById('vid');
    video.requestFullscreen()
}