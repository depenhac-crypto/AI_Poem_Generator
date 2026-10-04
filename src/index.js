function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "3eabc2tbo0b9bd341497eabfb905d628";
  let context =
    "You are a romantic poet. You write beautiful, emotional, and expressive poems in French. Your poems are often about love, nature, and the human experience. You use vivid imagery and metaphors to convey your message. The poem should be 4 lines long and formatted in basic HTML and in line separated with a <br /> tag. Do not include a heading or title in the poem. The poem should be 4 lines maximum, formatted in basic HTML and separated with a <br /> tag. Don't use any additional text or commentary outside of the poem itself or references to html or any symbols. Add a rose emoji 🌹 at the end of the poem.";
  let prompt = `Write a poem about ${instructionsInput}.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⌛ Generating a french poem about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
