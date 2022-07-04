for (var i = 0; i < document.querySelectorAll(".animal").length; i++) {
  document.querySelectorAll(".animal")[i].addEventListener("click", function() {
    var innerHtml = this.innerHTML;
    switch (innerHtml) {
      case "lion":
        var lion = new Audio("audio/lion.wav");
        lion.play();
        document.querySelector(".lionHeading").innerHTML = "🦁 Roar !!!";
        break;
      case "cat":
        var cat = new Audio("audio/cat.wav");
        cat.play();
        document.querySelector(".catHeading").innerHTML = "🐈 Meow !!!";
        break;
      case "dog":
        var dog = new Audio("audio/dog.wav");
        dog.play();
        document.querySelector(".dogHeading").innerHTML = "🐕 Bark !!!";
        break;
      case "cow":
        var cow = new Audio("audio/cow.wav");
        cow.play();
        document.querySelector(".cowHeading").innerHTML = "🐄 Moo !!!";
        break;
      case "fox":
        var fox = new Audio("audio/fox.mp3");
        fox.play();
        document.querySelector(".foxHeading").innerHTML = "🦊 Howl !!!";
        break;
      case "goat":
        var goat = new Audio("audio/goat.mp3");
        goat.play();
        document.querySelector(".goatHeading").innerHTML = "🐐 Bleat !!!";
        break;
        case "sheep":
          var sheep = new Audio("audio/sheep.wav");
          sheep.play();
          document.querySelector(".sheepHeading").innerHTML = "🐑 Bleat !!!";
          break;
          case "horse":
            var horse = new Audio("audio/horse.wav");
            horse.play();
            document.querySelector(".horseHeading").innerHTML = "🐎 Neigh !!!";
            break;
            case "cock":
              var cock = new Audio("audio/cock.wav");
              cock.play();
              document.querySelector(".cockHeading").innerHTML = "🐓 Cock-a-doodle-do!!!";
              break;
              case "elephant":
                var elephant = new Audio("audio/elephant.wav");
                elephant.play();
                document.querySelector(".elephantHeading").innerHTML = "🐘 Trumpet!!!";
                break;
                case "bear":
                  var bear = new Audio("audio/bear.wav");
                  bear.play();
                  document.querySelector(".bearHeading").innerHTML = "🐻 Grumble!!!";
                  break;
                  case "wolf":
                    var wolf = new Audio("audio/wolf.wav");
                    wolf.play();
                    document.querySelector(".wolfHeading").innerHTML = "🐺 Growl!!!";
                    break;
                    case "monkey":
                      var monkey = new Audio("audio/monkey.wav");
                      monkey.play();
                      document.querySelector(".monkeyHeading").innerHTML = "🐒 Gibber!!!";
                      break;
                      case "tiger":
                        var tiger = new Audio("audio/tiger.wav");
                        tiger.play();
                        document.querySelector(".tigerHeading").innerHTML = "🐒 Roar!!!";
                        break;
                        case "deer":
                          var deer = new Audio("audio/deer.wav");
                          deer.play();
                          document.querySelector(".deerHeading").innerHTML = "🦌 Bleat!!!";
                          break;
                          case "rhino":
                            var rhino = new Audio("audio/rhino.mp3");
                            rhino.play();
                            document.querySelector(".rhinoHeading").innerHTML = "🦏 Grunt & Growl!!!";
                            break;
                            case "rabbit":
                              var rabbit = new Audio("audio/rabbit.mp3");
                              rabbit.play();
                              document.querySelector(".rabbitHeading").innerHTML = "🐇 Purring!!!";
                              break;
                              case "duck":
                                var duck = new Audio("audio/duck.wav");
                                duck.play();
                                document.querySelector(".duckHeading").innerHTML = "🦆 Quack!!!";
                                break;
      default:

    }

  })
};
