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
