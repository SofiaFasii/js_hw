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
let toggleR = document.getElementById("toggle-rr")
let deleted = []
let isRemoved = false
function toggleRR(){
    if(!isRemoved){
        deleted = cards.splice(2, 1)
        isRemoved = true
        toggleR.textContent = 'Повернути карточку-3'
    }
    else{
        cards.splice(2, 0, deleted[0])
        deleted = []
        isRemoved = false
        toggleR.textContent = 'Видалити карточку-3'
    }
    renderCards()
}
let toggleA = document.getElementById('toggle-ar')
let isCardAdded = false

function  toggleAR(){
    const cardSix = "Карточка-6"
    if(!isCardAdded){
        cards.splice(5, 0, cardSix)
        isCardAdded = true
        toggleA.textContent = 'Видалити карточку-6'
    }
    else{
        cards.splice(5, 1)
        isCardAdded = false
        toggleA.textContent = 'Додати карточку-6'
    }
    renderCards()
}
let toggleUp = document.getElementById('update-card');
let isCardUp = false;
let previousCard;

function updateCard() {
    const newCard = "Карточка-92";
    if (!isCardUp) {
        previousCard = cards[3];
        cards.splice(3, 1, newCard);
        isCardUp = true;
        toggleUp.textContent = 'Повернути карточку-4';
    } else {
        cards.splice(3, 1, previousCard);
        isCardUp = false;
        toggleUp.textContent = 'Замінити карточку-4';
    }

    renderCards()
}