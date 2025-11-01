console.clear();
//1
const user = {
    name: 'Dmitry',
    hobby: 'reading',
    premium: true,
}
const userInfo = document.getElementById('user-info');
const change = document.getElementById('change');

function showUserInfo(){
    userInfo.innerHTML = '';
    const keys = Object.keys(user);
    for(const key of keys){
        const p = document.createElement('p');
        p.textContent = `${key}: ${user[key]}`;
        userInfo.appendChild(p)
    }
}
showUserInfo()
change.onclick = () => {
    user.mood = 'happy';
    user.hobby = 'skydiving';
    user.premium = false;
    showUserInfo()
}
//2
const countProps = obj => Object.keys(obj).length;
document.getElementById('count-btn').onclick = () => {
    const input = document.getElementById('obj-input').value;
    const result = document.getElementById('obj-result');

    try{
        const obj = JSON.parse(input);
        const count = countProps(obj);
        result.textContent = `У вашому об'єкті ${count} властивочтей.`
        result.className = 'success'
    }
    catch{
        result.textContent = `Введіть конкретний об'єкт.`
        result.className = 'error'
    }
}
//3-4
const employees = {
    Olga: 5,
    Maxim: 8,
    Sasha: 6,
}
const list = document.getElementById('employee-list');
for(let name in employees){
    const li = document.createElement('li');
    li.textContent = ` ${name}:  ${employees[name]} задач`;
    li.id = `emp-${name}`;
    list.appendChild(li);
}
function findBestEmployee(emp){
    let maxTasks = -1;
    let best = '';
    for(let name in emp){
        if(emp[name] > maxTasks){
            maxTasks = emp[name];
            best = name;
        }
    }
    return best;
}
document.getElementById('best-btn').onclick = () => {
    const bestName = findBestEmployee(employees);

    for(let name in employees){
        document.getElementById(`emp-${name}`).classList.remove('best');
    }
    document.getElementById(`emp-${bestName}`).classList.add('best');
}
const salaries = {
    Olga: 1000,
    Maxim: 1600,
    Sasha: 1200,
}
document.getElementById('salary-btn').onclick = () => {
    for(let name in salaries){
        document.getElementById(`emp-${name}`).textContent = `${name}: ${salaries[name]} грн`;
    }
}
//5
const movies = [
  {title: 'Дюна', director: 'Дені Вільньов', year: 2021},
  {title: 'Веном', director: 'Рубен Флейшер', year: 2018},
  {title: 'Зоряні війни: Епізод IX', director: 'Джей Джей Абрамс', year: 2019}
];
const propInput = document.getElementById('prop-input');
const propBtn = document.getElementById('prop-btn');
const propResult = document.getElementById('prop-result');

function getAllPropValues(arr, prop) {
  return arr.map(obj => obj[prop]).filter(value => value  !== undefined);
}
propBtn.onclick = () => {
  const prop = propInput.value.trim();
  propResult.className = 'success'
  if(!prop) {
    propResult.textContent = 'Введіть властивість!';
    propResult.className = 'error'
    return;
  }
  const values = getAllPropValues(movies, prop);
  if(values.length === 0) {
    propResult.textContent = `Властивість '${prop}' не знайдено.`;
    propResult.className = 'error'
  } else {
    propResult.textContent = values.join(', ');
  }
};
//6
const products = [
    {name: 'Яблуко', price: 5, quantity: 10},
    {name: 'Банан', price: 8, quantity: 7},
    {name: 'Апельсин', price: 6, quantity: 12},
]
function calculateTotalPrice(allProducts, productName) {
    const product = allProducts.find(item => item.name === productName);
    return product ? product.price * product.quantity : 0;
}
function showAllTotals() {
    const totalApple = calculateTotalPrice(products, 'Яблуко');
    const totalBanana = calculateTotalPrice(products, 'Банан');
    const totalOrange = calculateTotalPrice(products, 'Апельсин');

    const resultParagraph = document.getElementById('cost-res');
    resultParagraph.innerHTML = `
        Загальна вартість Яблук: ${totalApple} грн<br>
        Загальна вартість Бананів: ${totalBanana} грн<br>
        Загальна вартість Апельсинів: ${totalOrange} грн`;
}
document.getElementById('cost-btn').addEventListener('click', showAllTotals);
//7
const account = {
    balance: 0,
    transactions: [],
    deposit(amount){
        this.balance += amount;
        this.transactions.push({type: 'Поповнення на',amount});
    },
    withdraw(amount) {
        if (amount > this.balance) {
            alert('Недостатньо коштів!');
        }
        else {
            this.balance -= amount;
            this.transactions.push({type: 'Зняття на', amount});
        }
    },
    history(){
        if(this.transactions.length === 0){
            return 'Поки ще немає транзакцій.'
        }
        return this.transactions.map(item => `${item.type}: ${item.amount}грн`).join('<br>');
    }
}
const balanceP = document.getElementById('balance');
const historyP = document.getElementById('history');

function upBalance(){
    balanceP.textContent = `Поточний баланс: ${account.balance}грн.`;
}

document.getElementById('deposit-btn').onclick = () => {
    const amount = Number(prompt('Скільки грошей хочете покласти?'));
    if(amount > 0){
        account.deposit(amount);
        upBalance();
    }
    else alert('Введіть суму більше 0!')
}
document.getElementById('withdraw-btn').onclick = () => {
    const amount = Number(prompt('Скільки грошей хочете зняти?'));
    if(amount > 0){
        account.withdraw(amount);
        upBalance();
    }
    else alert('Введіть правильну суму!')
}
document.getElementById('history-btn').onclick = () => {
    historyP.innerHTML = `<b>Історія транзакцій:</b><br>${account.history()}`
}