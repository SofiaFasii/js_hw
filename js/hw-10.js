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
const calculateInput = document.getElementById('calculate-input')

const insert = num => {
    if(calculateInput.value === 'Помилка' || calculateInput.value === 'Infinity'){
        calculateInput.value = '';
    }
    
    const lastNumber = calculateInput.value.split(/[\+\-\*\/\(\)]/).pop();
    if(num === '.' && lastNumber.includes('.')) return;

    const lastChar = calculateInput.value.slice(-1);
    if('+-*/'.includes(lastChar) && '+-*/'.includes(num)){
        calculateInput.value = calculateInput.value.slice(0, -1) + num;
        return;
    }
    calculateInput.value += num;
}
const clean = () => {
    calculateInput.value = '';
}
const back = () => {
    calculateInput.value = calculateInput.value.slice(0, -1);
}
const equal = () => {
    try{
        const result = eval(calculateInput.value);
        if(result === Infinity || isNaN(result)){
            calculateInput.value = 'Помилка'
        }
        else{
            calculateInput.value = result;
        }
    }
    catch{
        calculateInput.value = 'Помилка';
    }
}
//3
const message = document.getElementById('message');

function repeatMessage(times, messageCreator){
    for(let i = 0; i < times; i++){
        const msg = messageCreator(i);
        message.textContent += msg + '\n'
    }
}
document.getElementById('btn1').addEventListener('click', () => {
    message.textContent = '';
    repeatMessage(3, i => `Повідомлення № ${i + 1}`)
})
document.getElementById('btn2').addEventListener('click', () => {
    message.textContent = '';
    repeatMessage(5, i => `Зворотній лічильник: ${5 - i}`)
})
document.getElementById('btn3').addEventListener('click', () => {
    message.textContent = '';
    repeatMessage(10, i => `Випадкове число: ${Math.floor(Math.random() * 100)}`);
})
//4
const movieList = document.getElementById('movies-list');
const movies = ['Місія нездійсненна', 'Матриця', 'Інтерстеллар', 'Гаррі Поттер', 'Крик'];
function processMovies(movies, action){
    for(let i = 0; i < movies.length; i++){
        action(movies[i], i)
    }
}
document.getElementById('btn4').addEventListener('click', () => {
    movieList.textContent = ''; 
    processMovies(movies, (movie, index) => {
        movieList.textContent += `${index + 1}. ${movie}\n`;
    });
});
document.getElementById('btn5').addEventListener('click', () => {
    movieList.textContent = ''; 
    processMovies(movies, (movie, index) => {
        const rating = Math.floor(Math.random() * 5) + 1;
        movieList.textContent += `${index + 1}. ${movie} ⭐ ${rating}/5\n`;
    });
});
document.getElementById('btn6').addEventListener('click', () => {
    movieList.textContent = ''; 
    const emojis = ['🎬', '🤔', '😱', '😍', '🚀'];
    processMovies(movies, movie => {
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        movieList.textContent += `${emoji} ${movie}\n`;
    });
});