console.clear();

//1
function checkFields() {
    let stringOne = document.getElementById("stringOne").value;
    let stringTwo = document.getElementById("stringTwo").value;
    let resultElement = document.getElementById("result");
    let result = (stringOne.length !== 0 && stringTwo.length !==0)
        ? "Обидва поля заповнені"
        : (stringOne.length === 0 && stringTwo.length === 0)
            ? "Жодне поле не заповнене"
            : "Не всі поля заповнені";

    resultElement.textContent = result;
    resultElement.className = (stringOne.length !== 0 && stringTwo.length !== 0) 
        ? "success" 
        : (stringOne.length === 0 && stringTwo.length === 0)
            ? "error"
            : "warning";
    console.log(result);
};

//2
function checkSum(){
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;
    let resultElement = document.getElementById("result-two");
    let result2;

    if(numberOne === "" || numberTwo === ""){
        result2 = "Будь ласка, введіть обидва числа";
        resultElement.className = "error";
    }
    else{
        numberOne = parseFloat(numberOne);
        numberTwo = parseFloat(numberTwo);
        let sum = numberOne + numberTwo;
        if(sum > 10){
            result2 = "Сума більша за 10";
            resultElement.className = "success";
        }
        else{
            result2 = "Сума менша або дорівнює 10";
            resultElement.className = "success";
        }
    }
     resultElement.textContent = result2;
     console.log(result2);
}
//3

function checkJavaScript() {
    let text = document.getElementById("text-input").value;
    let resultElement = document.getElementById("result-three");
    let result;

    if (text === "") {
        result = "Будь ласка, введіть текст";
        resultElement.className = "error";
    } else if (text.includes("JavaScript")) {
        result = "Текст містить слово JavaScript";
        resultElement.className = "success";
    } else {
        result = "Текст не містить слово JavaScript";
        resultElement.className = "warning ";
    }

    resultElement.textContent = result;
    console.log(result);
}

function checkRange() {
    let number = document.getElementById("number-input").value;
    let resultElement = document.getElementById("result-four");
    let result;

    if (number === "") {
        result = "Будь ласка, введіть число";
        resultElement.className = "error";
    } else {
        number = parseFloat(number);
        if (number > 10 && number < 20) {
            result = "Число входить в діапазон від 10 до 20";
            resultElement.className = "success";
        } else {
            result = "Число не входить в діапазон від 10 до 20";
            resultElement.className = "warning";
        }
    }

    resultElement.textContent = result;
    console.log(result);
}

function checkForm() {
    let name = document.getElementById("name-input").value;
    let email = document.getElementById("email-input").value;
    let password = document.getElementById("password-input").value;
    let resultElement = document.getElementById("result-five");
    let result;

    if (name === "" || email === "" || password === "") {
        result = "Будь ласка, заповніть усі поля";
        resultElement.className = "error";
    } else if (name.length >= 3 && email.includes("@") && email.includes(".", email.indexOf("@")) && password.length >= 6) {
        result = "Всі поля заповнені коректно";
        resultElement.className = "success";
    } else {
        result = "Одне або кілька полів заповнені некоректно";
        resultElement.className = "error";
    }

    resultElement.textContent = result;
    console.log(result);}

function checkRedirectForm() {
    let name = document.getElementById("name-input-five").value;
    let email = document.getElementById("email-input-five").value;
    let password = document.getElementById("password-input-five").value;
    let resultElement = document.getElementById("result-five");
    let result;

    if (name === "" || email === "" || password === "") {
        result = "Будь ласка, заповніть усі поля";
        resultElement.className = "error";
    } else if (name.length >= 3 && email.includes("@") && email.includes(".", email.indexOf("@")) && password.length >= 6) {
        result = "Перенаправлення на іншу сторінку";
        resultElement.className = "success";
    } else {
        result = "Помилка: неправильне заповнення";
        resultElement.className = "error";
    }

    resultElement.textContent = result;
    console.log(result);
}