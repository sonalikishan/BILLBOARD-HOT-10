var numberOfSongs = document.querySelectorAll(".song").length;

for (var i = 0; i < numberOfSongs; i++) {

  document.querySelectorAll(".song")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "1":
      var taylor = new Audio("sounds/anti-hero.mp3");
      taylor.play();
      break;

    case "2":
      var kill = new Audio("sounds/killbill.mp3");
      kill.play();
      break;

    case "3":
      var sam= new Audio('sounds/unholy.mp3');
      sam.play();
      break;

    case "4":
      var bebe = new Audio('sounds/imgood.mp3');
      bebe.play();
      break;

    case "5":
      var weeknd = new Audio('sounds/creepin.mp3');
      weeknd.play();
      break;

    case "6":
      var ariana = new Audio('sounds/die-for-you.mp3');
      ariana.play();
      break;

    case "7":
      var drake = new Audio('sounds/rich-flex.mp3');
      drake.play();
      break;

    case "8":
        var harry = new Audio('sounds/as-it-was.mp3');
        harry.play();
        break;

    case "9":
          var steve = new Audio('sounds/bad-habit.mp3');
          steve.play();
          break;

      case "10":
            var zach = new Audio('sounds/something-in-the-orange.mp3');
            zach.play();
            break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
