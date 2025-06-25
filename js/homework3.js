console.clear();

//1
let result = 5 + 5 + "5";
console.log(result, typeof result);
//2
let email = "sofiafasii@gmail.com"
console.log(email, email.includes("@"), email.length)
//3
let word1 = "My";
let word2 = "name";
let word3 = "is";
let fullName = word1 + " " + word2 + " " + word3 + " Viktor";
console.log(fullName);
//4
let userName = "Олександро";
let payment = 300;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);

let p = document.querySelectorAll("p");
p[0].textContent = `Result: ${result}, тип зміної result: ${typeof result}`;
p[1].textContent = `Моя пошта ${email}, чи містить вона символ @: ${email.includes("@")}, загальна кількість символів: ${email.length}`;
p[2].textContent = `fullName: ${fullName}`;
