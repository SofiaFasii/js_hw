console.clear();

//1
let celsius = 23;
let fahrenheit = (celsius * 9/5) + 32;
console.log(`Тепература 23°C за Фарангейтом = ${fahrenheit}°F`);

//2 
let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log(`В червні місяці стільки годин ${hoursInMonth} і хвилин ${minutesInMonth}`);

//3
let health = 100;
let energy = 100;
health -= 20;
energy -= 30;
console.log(`Рівень здоров'я ${health} і рівень енергії ${energy} у гравця`)

//4
let totalPrice = 200;
let discount = 0.1;
let discountedPrice = totalPrice * (1 - discount);
console.log(`Сума зі знижкою ${discountedPrice}`);

//5
const floatNumber = 12.8;
let roundedDown = Math.floor(floatNumber);
console.log(`Округлене число: ${roundedDown}`);

//6
const floatString = "45.67";
let parsedFloat = parseFloat(floatString);
console.log(`Перетворене ціле число: ${parsedFloat}`);

//7
const intString = "123";
let parsedInt = parseInt(intString);
console.log(`Перетворене ціле число: ${parsedInt}`);

//8
let number = 49; 
let sqrtNumber = Math.sqrt(number);
console.log(`Квадратний корінь числа ${number} буде ${sqrtNumber}`);

//9
const integer = 42; 
const stringNumber = "256";
let convertedInt = parseInt(stringNumber); 
let convertedString = integer.toString(); 
console.log(`Перетворене в ціле число: ${convertedInt}`);
console.log(`Перетворене число в рядок: ${convertedString}`);

setInterval(function(){
    document.body.style.background =
        "rgb(" + randomN() +    "," + randomN() +    "," + randomN() +    ")"
}, 2000);

function randomN(){
     return Math.random()*255
};