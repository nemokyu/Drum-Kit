
var counter = document.querySelectorAll(".drum").length;
for (i=0; i< counter ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

        buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonPress(buttonInnerHTML);
    }
    )
 
};

document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;       
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
                break;      
    
        default: console.log(this.innerHTML)
            break;
    }
    buttonPress(event.key);
    
})


function makeSound(keyPressed) {
    switch (keyPressed) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;       
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
                break;      
    
        default: console.log(this.innerHTML)
            break;
    }
}
function buttonPress(currentKey) {
    var activeButton = document.querySelector("."+ currentKey)
    activeButton.classList.add("pressed")
    setTimeout(function() {activeButton.classList.remove("pressed")}, 100)
}

