console.clear();

//1
let celsius = 23;
let fahrenheit = (celsius * 9/5) + 32;
console.log(celsius, fahrenheit);
//2
let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log(hoursInMonth, minutesInMonth);
//3
let health = 100;
let energy = 100;
health -= 20;
energy -= 30;
console.log(health, energy);
//4
let totalPrice = 200;
let discount = 0.1;
let discountedPrice = totalPrice * (1 - discount);
console.log(discountedPrice);
//5
const floatNumber = 12.8;
let roundedDown = Math.floor(floatNumber);
console.log(roundedDown);
//6
const floatString = "45.67";
let parsedFloat = parseFloat(floatString);
console.log(parsedFloat);
//7
const intString = "123";
let parsedInt = parseInt(intString);
console.log(parsedInt);
//8
let number = 49; 
let sqrtNumber = Math.sqrt(number);
console.log(number, sqrtNumber);
//9
const integer = 42; 
const stringNumber = "256";
let convertedInt = parseInt(stringNumber); 
let convertedString = integer.toString(); 
console.log(convertedInt, convertedString);

let p = document.querySelectorAll("p");
p[0].textContent = `Тепература ${celsius}°C за Фарангейтом буде: ${fahrenheit}°F`; 
p[1].textContent = `В червні місяці стільки годин ${hoursInMonth} і стільки хвилин ${minutesInMonth}`; 
p[2].textContent = `Рівень здоров'я у гравця ${health}, а рівень енергії ${energy}`; 
p[3].textContent = `Сума зі знижкою ${discountedPrice} і без знижки ${totalPrice}`; 
p[4].textContent = `Число без округлення: ${floatNumber} і з округленням: ${roundedDown} `; 
p[5].textContent = `Перетворення рядка у десяткове число: ${parsedFloat}`; 
p[6].textContent = `Перетворене рядка у ціле число: ${parsedInt}`; 
p[7].textContent = `Квадратний корінь числа ${number} буде: ${sqrtNumber}`; 
p[8].textContent = `Перетворення рядка в ціле число: ${convertedInt}`; 
p[9].textContent = `Перетворення числа в рядок: ${convertedString}`; 