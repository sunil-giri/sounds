const audio = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

audio.forEach((val) => {
  const button = document.createElement("button");
  button.id = val;
  button.innerText = val;
  button.classList.add("btn");
  button.addEventListener("click", () => {
    audio.forEach((sound) => {
      document.getElementById(sound).pause();
      sound.currentIndex = 0;
    });
    document.getElementById(val).play();
  });
  const btn = document.getElementById("btn");
  btn.appendChild(button);
});
