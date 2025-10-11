console.clear();

//1
let strHarmful = document.querySelector(".str-1");
let strUseful = document.querySelector(".str-2");

const harmful = ["Чіпси", "фастфуд", "кока-кола", "пончик"];
const useful = ["Яблуко", "банан", "виноград", "апельсин"];

strHarmful.textContent = `Було: ${harmful}`;
strUseful.textContent = `Було: ${useful}`;

function unite(){
    let text = "";
    for(let i = 0; i < harmful.length; i++){
        text += harmful[i];
        if(i < harmful.length - 1){
            text += " ✖ "
        }
    }
    strUseful.textContent = `Стало: ${useful.join(" ✔ ")}`;
    strUseful.className = "success";
    strHarmful.textContent = `Стало: ${text}`;
    strHarmful.className = "error";
}
//2
let container = document.querySelector(".cards-container")
let cards = ["Карточка-1", "Карточка-2", "Карточка-3", "Карточка-4", "Карточка-5"]

function renderCards(){
    container.textContent = ''
    for(let card of cards){
        const div = document.createElement("div")
        div.className = 'card'
        div.textContent = card
        container.appendChild(div)
    }
}
renderCards()

function toggleCard(){

}
function addCard(){

}
function updateCard(){

}