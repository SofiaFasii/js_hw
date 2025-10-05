console.clear();

//1
let mas = [9, 8 ,11];
let numbers = document.querySelector(".numbers");
numbers.textContent = `Було: ${mas}`;
numbers.className = "error"

function checkTen(){
    mas[1] = 10;
    numbers.textContent = `Стало: ${mas}`;
    numbers.className = "success"
}
//2
const str = ["Рядок", "Рядок", "Рядок"];
let strings = document.querySelector(".strings");
strings.textContent = str.join("\n");

function addString(){
    let  resultElem = document.getElementById("hw7-result-1");

    str.push("Ще один рядок");
    strings.textContent = str.join("\n");

    resultElem.innerHTML = "Ви точно не хочете додати ще один рядок?";
    resultElem.className = "success";
}
//3
const num = [1, 7, 999];
let sum = document.querySelector(".sum");
sum.textContent = `${num.join(" + ")} =`;

function checkSum(){
    sum.textContent = `${num.join(" + ")} = ${num.reduce((a, b) => a + b ,0)}`
}
//4
const tipoMem = ["Коли", "дедлайн", "завтра, а", "ніч", "сьогодні😨"];
let show = document.querySelector(".show");
show.textContent = "тіпо мем😋"

function showMem(){
    let memText = "";
    for(let i = 0; i < tipoMem.length; i++){
        memText += tipoMem[i] + " "
    }
    show.textContent = memText;
}
//5
const elem = ["Код", "Привіт", "Сон", "JavaScript", "Чай"];
let elements = document.querySelector(".elements");
elements.textContent =  elem.join(" ");

function checkElem(){
    let text = "";
    for(let i = 0; i < elem.length; i++){
        if(elem[i].length > 5){
            text += elem[i] + " "
        }
    }
    elements.textContent = text
}
//6
const numb = [1, 32, 7, 198, 49, 201, 777, 64, 99, 505];
let maxNum = document.querySelector(".max-num");
maxNum.textContent = numb.join(", ");

function checkMax(){
    let max = Math.max(...numb);
    maxNum.textContent = max
}
//7
const numbs = [12, 7, 3, 18, 25, 4, 30, 9, 2, 15];
let evenNum = document.querySelector(".even-num");
evenNum.textContent = numbs.join(", ");

function checkEven(){
    let  resultElem = document.getElementById("hw7-result-2");

    let text = "";
    for(let i = 0; i < numbs.length; i++){
        if(numbs[i] % 2 === 0){
            text += numbs[i] + ", "
        }
    }
    evenNum.textContent = text;

    resultElem.innerHTML = "Фантазія закінчилася :(";
    resultElem.className = "error";
}