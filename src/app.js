import "bootstrap";
import "./style.css";

//si siempre se repite una parte como [Math.floor(Math.random() * 3) es mejor hacerla una función//
const reload = document.getElementById("reload");
reload.addEventListener("click", _ => {
  location.reload();
});
function random_word(words) {
  return words[Math.floor(Math.random() * 3)];
}

function generateexcuse() {
  let excuses = {
    guilt: ["My dog", "My brother", "My uncle", "My mom"],
    action: ["eat", "destroy", "burn", "throw away"],
    item: ["my homework", "my project", "my tesis", "my report"],
    time: ["yesterday", "an hour ago", "this morning", "the past week"]
  };

  let Guilt = random_word(excuses.guilt);
  let Action = random_word(excuses.action);
  let Item = random_word(excuses.item);
  let Time = random_word(excuses.time);

  return Guilt + " " + Action + " " + Item + " " + Time + " ";
}

//Mejor crear un boton para generar una excusa en vez de recargar la pagina
window.onload = function() {
  document.getElementById("excuse").innerHTML = generateexcuse();
};
