function generatePoem(event){
    event.preventDefault();

new Typewriter('#poem', {
  strings: "hellow there",
  autoStart: true,
  delay: 1,
  cursor: "",
});
}


let poemformElement= document.querySelector("#poem-generator");
poemformElement.addEventListener("submit", generatePoem);