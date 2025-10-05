console.clear();

//1
function checkNumbers(){
    let number = 1;
    let numbers = "";
    let numbersElement = document.getElementById("numbers");
    let resultElement = document.getElementById("hw6-result-one");

    while(number <= 10){
        console.log(number);
        numbers += number;
        if(number < 10){
            numbers += ", ";
            }
        number++
    }

    numbersElement.textContent = numbers + ".";
    resultElement.textContent = "Ось всі числа від 1 до 10.";
    resultElement.className = "success";
}
//2
function checkEvenNum(){
    let evenNum = "";
    let evenNumElement = document.getElementById("even-num");
    let resultElement = document.getElementById("hw6-result-two");

    for(let i = 2; i <= 20; i++){
        if(i % 2 !== 0){
            continue;
        }
        console.log(i);
        evenNum += i;
        if(i < 20){
            evenNum += ", "
        }
    }
    evenNumElement.textContent = evenNum + ".";
    resultElement.textContent = "Ось всі парні числа від 2 до 20.";
    resultElement.className = "success";
}
//3
function checkMult7(){
    let multSeven = document.getElementById("mult-seven");
    let resultElement = document.getElementById("hw6-result-three");

    for(let i = 1; i <= 10; i++){
        let result = i * 7;
        multSeven.innerHTML += `${i} * 7 = ${result} <br>`
    }
    resultElement.innerHTML = "Ось множення на 7.";
    resultElement.className = "success";
}
//4 не сильно зрозуміла це завданння
function checkN() { 
    let inputN = document.getElementById("hw6-input-one").value;
    let resultElement = document.getElementById("hw6-result-four");
    if (inputN <= 0) {
        resultElement.textContent = "Введіть коректне число більше за 0!";
        resultElement.className = "error";
        return; 
    }
    let printedNum = [];
    for (let i = 0; i < 350; i++) {
        if (i >= inputN) {
            break; 
        }
        console.log(i); 
        printedNum.push(i); 
    }
    resultElement.textContent = `Числа менші за ${inputN}: ${printedNum.join(", ")}`;
    resultElement.className = "success";
}
//5
function checkNumb() { 
    let numb = document.getElementById("numb");
    let resultElement = document.getElementById("hw6-result-five");
    let i = 1;

    let numbersArray = [];
    
    while (i <= 20) {
        if (i % 3 === 0) { 
            i++;
            continue; 
        }
        numbersArray.push(i);
        i++;
    }
    numb.textContent = numbersArray.join(", ") + ".";

    resultElement.textContent = "Числа 1–20 крім кратних трьох.";
    resultElement.className = "success";
}
