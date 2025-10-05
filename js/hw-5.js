console.clear();

//1
function checkDrink() {
    let selectedDrink = document.querySelector("input[name='drink']:checked");
    let resultElement = document.getElementById("hw5-result-one");
    let result;

    if (selectedDrink === null) {
        result = "Будь ласка, виберіть що вам подобається.";
        resultElement.className = "error";
    }
    else {
        let drink = selectedDrink.value;
        switch (drink) {
            case "coffee":
                result = "Ви вибрали каву.";
                resultElement.className = "success";
                break;
            case "tea":
                result = "Ви вибрали чай.";
                resultElement.className = "success";
                break;
            case "juice":
                result = "Ви вибрали сік.";
                resultElement.className = "success";
                break;
            case "other":
                result = "Ви вибрали інше.";
                resultElement.className = "success";
                break;
            default:
                result = "Невідомий вибір.";
                resultElement.className = "error";
                break;
        }
    }

    resultElement.textContent = result;
    console.log(result);
}
//2
function checkWeek(){
    let inputWeek = document.getElementById("input-week").value;
    let resultElement = document.getElementById("hw5-result-two");
    let resultTwo;

    if(inputWeek === ""){
        resultTwo = "Будь ласка, введіть день тижня.";
        resultElement.className = "error";
        }
    else{
       let week = inputWeek.toLowerCase();
        switch(week){
            case "понеділок":
                resultTwo = "Це робочий день.";
                resultElement.className = "success";
                break;
            case "вівторок":
                resultTwo = "Це робочий день.";
                resultElement.className = "success";
                break;
            case "середа":
                resultTwo = "Це робочий день.";
                resultElement.className = "success";
                break;
            case "четвер":
                resultTwo = "Це робочий день.";
                resultElement.className = "success";
                break;
            case "п'ятниця":
                resultTwo = "Це робочий день.";
                resultElement.className = "success";
                break;
            case "субота":
                resultTwo = "Це вихідний день.";
                resultElement.className = "success";
                break;
            case "неділя":
                resultTwo = "Це вихідний день.";
                resultElement.className = "success";
                break;
            default:
                resultTwo = "Це не день неділі.";
                resultElement.className = "error";
        }
    }

     resultElement.textContent = resultTwo;
     console.log(resultTwo)
}
//3
function checkMonth(){
    let inputMonth = document.getElementById("input-month").value;
    let resultElement = document.getElementById("hw5-result-three");
    let resultThree;

    if(inputMonth === ""){
        resultThree = "Будь ласка, введіть коректний номер місяця (1–12)."
        resultElement.className = "error";
    }
    else{
        let month = inputMonth;
        switch(month){
            case "1" :
                resultThree = "Це зима."
                resultElement.className = "success";
                break;
            case "2":
                resultThree = "Це зима."
                resultElement.className = "success";
                break;
            case "3":
                resultThree = "Це весна."
                resultElement.className = "success";
                break;
            case "4":
                resultThree = "Це весна."
                resultElement.className = "success";
                break;
            case "5":
                resultThree = "Це весна."
                resultElement.className = "success";
                break;
            case "6":
                resultThree = "Це літо."
                resultElement.className = "success";
                break;
            case "7":
                resultThree = "Це літо."
                resultElement.className = "success";
                break;
            case "8":
                resultThree = "Це літо."
                resultElement.className = "success";
                break;
            case "9":
                resultThree = "Це осінь."
                resultElement.className = "success";
                break;
            case "10":
                resultThree = "Це осінь."
                resultElement.className = "success";
                break;
            case "11":
                resultThree = "Це осінь."
                resultElement.className = "success";
                break;
            case "12":
                resultThree = "Це зима."
                resultElement.className = "success";
                break;
            default:
                resultThree = "Значення має бути (1-12)."
                resultElement.className = "error";

        }
    }
    resultElement.textContent = resultThree;
     console.log(resultThree)
}
//4
function checkColor(){
    let selectedColor = document.querySelector("input[name='color']:checked");
    let resultElement = document.getElementById("hw5-result-four");
    let resultFour;

    if(selectedColor === null){
        resultFour = "Будь ласка, виберіть колір.";
        resultElement.className = "error";
    }
    else{
        let color = selectedColor.value;
        switch(color){
            case "red":
                resultFour = "Стоп.";
                resultElement.className = "error";
                break;
            case "yellow":
                resultFour = "Чекай.";
                resultElement.className = "warning";
                break;
            case "green":
                resultFour = "Йти.";
                resultElement.className = "success";
                break;
            default:
                resultFour = "Невідомий колір.";
                resultElement.className = "error";
        }
    }
    resultElement.textContent = resultFour;
    console.log(resultFour);
}
//5
function checkOperation(){
    let inputNumOne = document.getElementById("input-num-one").value;
    let inputNumTwo = document.getElementById("input-num-two").value;
    let operator = document.getElementById("select-operator").value;
    let resultElement = document.getElementById("hw5-result-five");
    let resultFive;

    let number1 = parseFloat(inputNumOne);
    let number2 = parseFloat(inputNumTwo);

    if (inputNumOne === "" || inputNumTwo === "" || operator === "") {
        resultFive = "Будь ласка, введіть коректні числа та виберіть оператор.";
        resultElement.className = "error";
    }
    else if (isNaN(number1) || isNaN(number2)) {
        resultFive = "Будь ласка, введіть коректні числа та виберіть оператор.";
        resultElement.className = "error";
    }
    else if(operator === "/" && number2 === 0){
        resultFive = "Ділення на нуль неможливе!";
        resultElement.className = "error";
    }
    else {
        switch(operator){
            case "+":
                resultFive = `${number1} + ${number2} = ${number1 + number2}`;
                resultElement.className = "success";
                break;
            case "-":
                resultFive = `${number1} - ${number2} = ${number1 - number2}`;
                resultElement.className = "success";
                break;
            case "*":
                resultFive = `${number1} * ${number2} = ${number1 * number2}`;
                resultElement.className = "success";
                break;
            case "/":
                resultFive = `${number1} / ${number2} = ${number1 / number2}`;
                resultElement.className = "success";
                break;
            default:
                resultFive = "Будь ласка, виберіть коректний оператор";
                resultElement.className = "error";
        }
    }

    resultElement.textContent = resultFive;
    console.log(resultFive);
}