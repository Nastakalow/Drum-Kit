class DrumKit {
  keys = document.querySelectorAll(".key");

  constructor() {
    window.addEventListener("keydown", this.playSound);
    this.keys.forEach((key) =>
      key.addEventListener("transitionend", this.removeTransition)
    );
  }

  playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  }

  removeTransition(e) {
    if (e.propertyName !== "transform") return;
    console.log(e.propertyName);
    this.classList.remove("playing");
  }
}

let obj = new DrumKit();
