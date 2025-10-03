console.clear();

//1
let mas = [9, 8 ,11];
let p = document.querySelector(".numbers");
p.textContent = `Було: ${mas}`;
function checkTen(){
    mas[1] = 10;
    p.textContent = `Стало: ${mas}`;
}
