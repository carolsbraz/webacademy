const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

const storyText = "Estava com 94 fahrenheit lá fora, então :insertx: foi cantar. Quando chegou ao show ouviu tocarem :inserty:, e se assustou, então :insertz:. Carol gastou 300 euros com o show pra isso, a culpa era do :insertx: que se atrasou."
const insertX = ["Freddie", "John", "Paul"]
const insertY = ["sertanejo", "forró", "funk"];
const insertZ = ["correu desesperado", "tomou o microfone", "chorou"];

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;

    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);
    newStory = newStory.replace(":insertx:", xItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Carol", name);
  }

  if(document.getElementById("br").checked) {
    const weight = (Math.round(300 * 0.071429)) + " reais";
    const temperature =  (Math.round((94 - 32)/1.8)) + " celsius";

    newStory = newStory.replace("300 euros", weight);
    newStory = newStory.replace("94 fahrenheit", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}