var numberOfDrums=document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfDrums; i++){
document.querySelectorAll(".drum")[i].addEventListener("click" ,function(){
    var buttonName=this.innerHTML;
    sound(buttonName);
    animateDrum(buttonName);
});
}
document.addEventListener("keydown" ,function(e){
  sound(e.key);
    animateDrum(e.key);
});
function sound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds//tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds//tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds//tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds//tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds//snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds//crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds//kick-bass.mp3");
            audio.play();
            break;
    }  
}

function animateDrum(key){
    var targetButton=document.querySelector("."+key);
    targetButton.classList.add("pressed");
    setTimeout(function(){
        targetButton.classList.remove("pressed");
    },100)
}
