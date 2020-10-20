var buttonLength = document.querySelectorAll("button").length;
var button = document.querySelectorAll("button");

// First way to itterate over button
// for (var btn in button) {
//   if (button.hasOwnProperty(btn)) {
//     // console.log(button[btn])
//     button[btn].addEventListener("click", function (e) {
//       var buttonKey = e.target.innerHTML;
//       makesound(buttonKey);
//     });
//   }
// }

// Second way to itterate over button
for (let btn of button) {
    // console.log(btn);
    btn.addEventListener("click", function (e) {
    var buttonKey = e.target.innerHTML;
    makesound(buttonKey);
    animationBtn(buttonKey);
    })
}

// Third mettod to itterate over button
// Object.values(button).forEach(val => {
    //     // console.log(val);
    //     val.addEventListener("click", function (e) {
//     var buttonKey = e.target.innerHTML;
//     makesound(buttonKey);
//   });
// });

// Object.keys(button).forEach((key, index) => { console.log(key + " => " + index) });
// console.log(Object.entries(button));

// Fourth way to itterate over button 
// for (var i = 0; i < buttonLength; i++) {
//   button[i].addEventListener("click", function (e) {
//     var buttonKey = e.target.innerHTML;
//     // console.log(buttonKey);
//     makesound(buttonKey);
//   });
// }

document.addEventListener("keypress", function (event) {
  var keyboardKey = event.key;
  //   console.log(keyboardKey);
  makesound(keyboardKey);
  animationBtn(keyboardKey);
});

function makesound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log("key not work");
      break;
  }
}

function animationBtn(currentKey) {
    activeBtn=document.querySelector('.'+currentKey);
    // console.log(activeBtn);
    activeBtn.classList.add('pressed')
    setTimeout(() => {
        activeBtn.classList.remove('pressed')
        
    }, 100);
}