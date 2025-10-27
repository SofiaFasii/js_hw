console.clear();
//1
const elemValue = document.querySelector('.element-value');
let mas = ['JavaScript', 'HTML', 'CSS'];
function logItems(mas){
    let text = '';
    for(let i = 0; i<mas.length; i++){
        mas[i];
        text += `${i + 1} - ${mas[i]}<br>`;
    }
    elemValue.innerHTML = text;
    elemValue.className = 'success';
};
//2 
function calculateEngravingPrice(){
    let message = document.getElementById('input-engraving').value;
    let resultElement = document.getElementById('hw9-result-one')
    if(message === ''){
        resultElement.textContent = 'Будь ласка, введіть текст для гравіювання.';
        resultElement.className = 'error';
    }
    else{
        let words = message.trim().split(/\s+/);
        let total = words.length * 5;
        resultElement.textContent = `Кінцева ціна: ${total}.`;
        resultElement.className = 'success';
    }
};
//3
function findLongestWord(){
    let string = document.getElementById('input-string').value.trim();
    let resultElement = document.getElementById('hw9-result-two');
    let longestWord = '';

    if(string === ''){
        resultElement.textContent = 'Будь ласка, введіть слова.';
        resultElement.className = 'error';
        return;
    }
    let words = string.split(/\s+/);
    longestWord = words[0];
    for(let word of words){
        if(word.length > longestWord.length){
            longestWord = word
        }
    }
    resultElement.textContent = `Найдовше слово це: ${longestWord}`;
    resultElement.className = 'success';
}
//4
function findLW(){
    let inputFormat = document.getElementById('input-format').value.trim();
    let resultElement = document.getElementById('hw9-result-three');

    if(inputFormat === ''){
        resultElement.textContent = 'Введіть текст.';
        resultElement.className = 'error';
        return;
    }
    if(inputFormat.length > 40){
        inputFormat = inputFormat.slice(0, 40) + '...'
    }
    resultElement.textContent = `Ось відформатований текст: ${inputFormat}`;
    resultElement.className = 'success';
}
//5
function checkSpam(){
    let inputCheck = document.getElementById('input-check').value;
    let resultElement = document.getElementById('hw9-result-four');
    let text = inputCheck.toLowerCase();

    if(inputCheck === ''){
        resultElement.textContent = 'Введіть текст.';
        resultElement.className = 'error';
        return;
    }
    if(text.includes('spam') || text.includes('sale')){
        resultElement.textContent = 'Виявлено спам!⚠️';
        resultElement.className = 'error';
    }
    else{
        resultElement.textContent = 'Спаму не знайдено!✅';
        resultElement.className = 'success';
    }
}
//6
function askNumber(){
    let input = prompt('Введіть два числа через кому, наприклад: 5, 10.');
    let numbers = input.split(',').map(Number);
    let total = numbers[0] + numbers[1];
    let resultElement = document.getElementById('hw9-result-five');

    if(input === null){
        return
    }
    if(numbers.length !== 2|| numbers.some(isNaN)){
        alert('Будь ласка, введіть два числа через кому!')
        return;
    }
    resultElement.innerHTML = `Перше число: ${numbers[0]}<br>Друге число: ${numbers[1]}<br>Сума: ${total}`;
    resultElement.className = 'success';
}
//7
let logins = ['Olya', 'Kateryna', 'Vlad', 'Sofia', 'Dmytro'];

function  isLoginValid(login){
    return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login){
    return !allLogins.includes(login);
}

function addLogin(allLogins, login){
    if(!isLoginValid(login)){
        return 'Помилка! Логін повинен бути від 4 до 16 символів.'
    }
    if(!isLoginUnique(allLogins, login)){
        return 'Такий логін уже використовується!'
    }
    allLogins.push(login);
    return 'Логін успішно доданий!';
}

function handleLogin(){
    let inputLogin = document.getElementById('input-login').value.trim();
    let resultElement = document.getElementById('hw9-result-six');

    if(inputLogin === ''){
        resultElement.textContent = 'Будь ласка, введіть логін.';
        resultElement.className = 'error';
        return;
    }

    let message = addLogin(logins, inputLogin);
    resultElement.textContent = message;
    resultElement.className = message.includes('успішно') ? 'success' : 'error';
}