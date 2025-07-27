console.clear();

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