for (var i = 0; i < document.querySelectorAll(".animal").length; i++) {
  document.querySelectorAll(".animal")[i].addEventListener("click", function() {
    var innerHtml = this.innerHTML;
    switch (innerHtml) {
      case "lion":
        var lion = new Audio("audio/lion.wav");
        lion.play();
        document.querySelector(".lionHeading").innerHTML = "🦁 Roar !!!";
        setTimeout(function() {
          document.querySelector(".lionHeading").innerHTML = "Lion";
        }, 1800);
        break;
      case "cat":
        var cat = new Audio("audio/cat.wav");
        cat.play();
        document.querySelector(".catHeading").innerHTML = "🐈 Meow !!!";
        setTimeout(function() {
          document.querySelector(".catHeading").innerHTML = "Cat";
        }, 2000);
        break;
      case "dog":
        var dog = new Audio("audio/dog.wav");
        dog.play();
        document.querySelector(".dogHeading").innerHTML = "🐕 Bark !!!";
        setTimeout(function() {
          document.querySelector(".dogHeading").innerHTML = "Dog";
        }, 6000);
        break;
      case "cow":
        var cow = new Audio("audio/cow.wav");
        cow.play();
        document.querySelector(".cowHeading").innerHTML = "🐄 Moo !!!";
        setTimeout(function() {
          document.querySelector(".cowHeading").innerHTML = "Cow";
        }, 2000);
        break;
      case "fox":
        var fox = new Audio("audio/fox.mp3");
        fox.play();
        document.querySelector(".foxHeading").innerHTML = "🦊 Howl !!!";
        setTimeout(function() {
          document.querySelector(".foxHeading").innerHTML = "Fox";
        }, 6000);
        break;
      case "goat":
        var goat = new Audio("audio/goat.mp3");
        goat.play();
        document.querySelector(".goatHeading").innerHTML = "🐐 Bleat !!!";
        setTimeout(function() {
          document.querySelector(".goatHeading").innerHTML = "Goat";
        }, 1000);
        break;
      case "sheep":
        var sheep = new Audio("audio/sheep.wav");
        sheep.play();
        document.querySelector(".sheepHeading").innerHTML = "🐑 Bleat !!!";
        setTimeout(function() {
          document.querySelector(".sheepHeading").innerHTML = "Sheep";
        }, 3000);
        break;
      case "horse":
        var horse = new Audio("audio/horse.wav");
        horse.play();
        document.querySelector(".horseHeading").innerHTML = "🐎 Neigh !!!";
        setTimeout(function() {
          document.querySelector(".horseHeading").innerHTML = "Horse";
        }, 2000);
        break;
      case "cock":
        var cock = new Audio("audio/cock.wav");
        cock.play();
        document.querySelector(".cockHeading").innerHTML = "🐓 Cock-a-doodle-do!!!";
        setTimeout(function() {
          document.querySelector(".cockHeading").innerHTML = "Chicken";
        }, 2000);
        break;
      case "elephant":
        var elephant = new Audio("audio/elephant.wav");
        elephant.play();
        document.querySelector(".elephantHeading").innerHTML = "🐘 Trumpet!!!";
        setTimeout(function() {
          document.querySelector(".elephantHeading").innerHTML = "Elephant";
        }, 2000);
        break;
      case "bear":
        var bear = new Audio("audio/bear.wav");
        bear.play();
        document.querySelector(".bearHeading").innerHTML = "🐻 Grumble!!!";
        setTimeout(function() {
          document.querySelector(".bearHeading").innerHTML = "Bear";
        }, 3500);
        break;
      case "wolf":
        var wolf = new Audio("audio/wolf.wav");
        wolf.play();
        document.querySelector(".wolfHeading").innerHTML = "🐺 Growl!!!"
        setTimeout(function() {
          document.querySelector(".wolfHeading").innerHTML = "Wolf";
        }, 5000);;
        break;
      case "monkey":
        var monkey = new Audio("audio/monkey.wav");
        monkey.play();
        document.querySelector(".monkeyHeading").innerHTML = "🐒 Gibber!!!";
        setTimeout(function() {
          document.querySelector(".monkeyHeading").innerHTML = "Monkey";
        }, 2000);
        break;
      case "tiger":
        var tiger = new Audio("audio/tiger.wav");
        tiger.play();
        document.querySelector(".tigerHeading").innerHTML = "🐅 Roar!!!";
        setTimeout(function() {
          document.querySelector(".tigerHeading").innerHTML = "Tiger";
        }, 6000);
        break;
      case "deer":
        var deer = new Audio("audio/deer.wav");
        deer.play();
        document.querySelector(".deerHeading").innerHTML = "🦌 Bleat!!!";
        setTimeout(function() {
          document.querySelector(".deerHeading").innerHTML = "Deer";
        }, 2000);
        break;
      case "rhino":
        var rhino = new Audio("audio/rhino.mp3");
        rhino.play();
        document.querySelector(".rhinoHeading").innerHTML = "🦏 Grunt & Growl!!!";
        setTimeout(function() {
          document.querySelector(".rhinoHeading").innerHTML = "Rhinoceros";
        }, 11500);
        break;
      case "rabbit":
        var rabbit = new Audio("audio/rabbit.mp3");
        rabbit.play();
        document.querySelector(".rabbitHeading").innerHTML = "🐇 Purring!!!";
        setTimeout(function() {
          document.querySelector(".rabbitHeading").innerHTML = "Rabbit";
        }, 5500);
        break;
      case "duck":
        var duck = new Audio("audio/duck.wav");
        duck.play();
        document.querySelector(".duckHeading").innerHTML = "🦆 Quack!!!";
        setTimeout(function() {
          document.querySelector(".duckHeading").innerHTML = "Duck";
        }, 3400);
        break;
      default:

    }

  })
};
