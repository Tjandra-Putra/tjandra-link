var typed = new Typed(".type", {
  strings: ["page_", "world_"],
  typeSpeed: 80,
  backSpeed: 80,
  loop: true,
});

// Bg Music
var isPlaying = false;

var audio = document.getElementById("myMusic");
// audio.volume = 0.03;
audio.volume = 0.1;

// audio.play();

function musicHandler() {
  var audio = document.getElementById("myMusic");

  if (isPlaying === false) {
    isPlaying = true;
    audio.play();

    var iconPause = document.getElementById("pause");
    var iconPlay = document.getElementById("play");
    iconPlay.style.visibility = "visible";

    iconPause.style.visibility = "hidden";
  } else if (isPlaying === true) {
    isPlaying = false;
    audio.pause();

    var iconPause = document.getElementById("pause");
    var iconPlay = document.getElementById("play");
    iconPlay.style.visibility = "hidden";

    iconPause.style.visibility = "visible";
  }
}
