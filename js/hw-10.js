console.clear();
//1
let pNumbers = document.querySelector(".numbers");
let pWords = document.querySelector(".words");

const numbers = [1, 5, 8, 12, 3, 15, 7, 20, 127];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк', 'кит'];

pNumbers.textContent = `Перший масив: ${numbers.join(", ")}`;
pWords.textContent = `Другий масив: ${words.join(", ")}`;

function countItems(array, condition){
    let count = 0;
    for(let item of array){
        if(condition(item)){
            count++;
        }
    }
    return count;
}

const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;

function checkCounter(){
    let resultElement = document.getElementById('hw10-result-one');
    resultElement.innerHTML = `Парних чисел: ${countItems(numbers, isEven)}<br> Чисел > 10: ${countItems(numbers, isLarge)}<br> Коротких слів: ${countItems(words, isShort)}`;
    resultElement.className = 'success';
}
//2
const calculate = (a, b, operation) => operation(a, b);