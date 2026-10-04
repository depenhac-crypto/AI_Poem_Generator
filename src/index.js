function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: ["Generating poem..."],
    autoStart: true,
    loop: false,
    cursor: "",
  }).start();
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
