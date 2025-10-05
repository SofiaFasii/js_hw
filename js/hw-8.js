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