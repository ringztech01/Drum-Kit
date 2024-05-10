//Detecting Button Pressed
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function clickEvent(){
        var letterClicked = this.innerHTML
        makeSound(letterClicked);
        buttonAnimation(letterClicked);
    });

//Decting Key Pressed
    document.addEventListener("keydown", function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
        });
}

//Making a Sound Based on Button or Key Pressed
function makeSound(key){
    switch (key) {
        case "w":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
        case "s":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            var tom_1 = new Audio('./sounds/tom-1.mp3');
            tom_1.play();
            break;
        case "j":
            var tom_2 = new Audio('./sounds/tom-2.mp3');
            tom_2.play();
            break;
        case "k":
            var tom_3 = new Audio('./sounds/tom-3.mp3');
            tom_3.play();
            break;
        case "l":
            var tom_4 = new Audio('./sounds/tom-4.mp3');
            tom_4.play();
            break;
        
        default:
            console.log(letterClicked)
            break;
       }

}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}

// document.addEventListener("keydown", function(event){
//     var letterTouch = event.key;

//     switch (letterTouch) {
//         case "w":
//             var crash = new Audio('./sounds/crash.mp3');
//             crash.play();
//             break;
//         case "a":
//             var kick = new Audio('./sounds/kick-bass.mp3');
//             kick.play();
//             break;
//         case "s":
//             var snare = new Audio('./sounds/snare.mp3');
//             snare.play();
//             break;
//         case "d":
//             var tom_1 = new Audio('./sounds/tom-1.mp3');
//             tom_1.play();
//             break;
//         case "j":
//             var tom_2 = new Audio('./sounds/tom-2.mp3');
//             tom_2.play();
//             break;
//         case "k":
//             var tom_3 = new Audio('./sounds/tom-3.mp3');
//             tom_3.play();
//             break;
//         case "l":
//             var tom_4 = new Audio('./sounds/tom-4.mp3');
//             tom_4.play();
//             break;
        
//         default:
//             console.log(letterTouch)
//             break;
//        }





// document.querySelectorAll(".drum")[1].addEventListener("click",function clickEvent(){
//     alert("I just got Clicked");
// })

// document.querySelectorAll(".drum")[2].addEventListener("click",function clickEvent(){
//     alert("I just got Clicked");
// })

// document.querySelectorAll(".drum")[3].addEventListener("click",function clickEvent(){
//     alert("I just got Clicked");
// })

// document.querySelectorAll(".drum")[4].addEventListener("click",function clickEvent(){
//     alert("I just got Clicked");
// })

// document.querySelectorAll(".drum")[5].addEventListener("click",function clickEvent(){
//     alert("I just got Clicked");
// })

// document.querySelectorAll(".drum")[].addEventListener("click",function clickEvent(){
//     alert("I just got Clicked");
// })
