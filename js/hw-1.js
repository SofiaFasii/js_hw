console.clear();

//1
let age = 14;
console.log(age);
//2
let name = "Sofia";
console.log(name);
//3
let isStudent = true;
console.log(isStudent);
//4
let myString = "Найкраща помста — великий успіх.";
console.log(myString);
//5
let myNumber = 87;
myNumber += 10;
console.log(myNumber);
//6
let myNull = null;
console.log("Null:", myNull);
//7
let userName = prompt("Введіть своє ім’я");
console.log("Тип змінної userName:", typeof userName);
alert("Ваше ім'я: " + userName);
//8
let userAnswer = confirm("Ви дійсно хочете покинути сторінку?");
console.log("Відповідь користувача:", userAnswer);
//9
alert("Увага! Дія може бути небезпечною.");
let continueAction = confirm("Ви впевнені, що хочете продовжити?");
console.log("Користувач хоче продовжити:", continueAction);

let p = document.querySelectorAll("p");
p[0].textContent = `Мій вік: ${age}`;
p[1].textContent = `Моє ім'я: ${name}`;
p[2].textContent = `Я студент GoITeens: ${isStudent}`;
p[3].textContent = `Моя цитата: ${myString}`;
p[4].textContent = `Мій улюблений номер: ${myNumber}`;
p[5].textContent = `Значення: ${myNull}`;
p[6].textContent = `Ваше ім'я: ${userName}`;
