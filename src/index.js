function showPoem(response){
  console.log("poem generated")

new Typewriter('#poem', {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});

}



function generatePoem(event){
    event.preventDefault();

let instructionElement =document.querySelector("#idea");
let prompt=`Generate a french poem about ${instructionElement.value}`;
let context="you are a very romantic poet and writer. Please generate a four sentences poem and sign with the author name at the end of the poem";
let apiKey="5eb0eof63a40df20e382fa4batcaf05e";
let apiURL=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<span class="blink">⌛Generating a poem about ${instructionElement.value} for you...Please wait</span>`;
axios.get(apiURL).then(showPoem);
}

let poemformElement= document.querySelector("#poem-generator");
poemformElement.addEventListener("submit", generatePoem);


