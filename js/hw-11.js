console.clear();

const bankAccount = {
    ownerName: '',
    accountNumber: '',
    balance: 2573,
    login(name){this.ownerName = name;},
    deposit(amount){this.balance += amount;},
    withdraw(amount){this.balance -= amount;}
}
const openModal = document.getElementById('open-modal');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const loginBtn = document.getElementById('login-btn');

openModal.addEventListener('click', () => modal.style.display = 'flex')
document.getElementById('close').addEventListener('click', () => modal.style.display = 'none')
window.addEventListener('click', event => {
    if (event.target === modal) modal.style.display = 'none';
})
document.addEventListener('keydown', event => {
    if (event.key === 'Escape'){modal.style.display = 'none';}
})
loginBtn.addEventListener('click', () => {
    const name = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (name && password) {
        bankAccount.login(name);

        modalContent.innerHTML = `
            <button id="close">&times;</button>
            <h2>Вітаю, ${bankAccount.ownerName}!</h2>
            <p id="result" style="color: #4b4b4b;">Сьогодні ви оберете?</p>
            <button class="btn-hw" id="deposit-btn">Поповнити рахунок</button>
            <button class="btn-hw" id="withdraw-btn">Зняти гроші</button>
            <br><br>
            <p id="balance">Баланс: ${bankAccount.balance} грн.</p>
        `;

        document.getElementById('close').addEventListener('click', () => modal.style.display = 'none')

        document.getElementById('deposit-btn').addEventListener('click', () => {
            const enterdPass = prompt('Введіть пароль для підтвердження');
            if (enterdPass === password) {
                const amount = Number(prompt('Скільки грошей хочете покласти?'));
                if (!isNaN(amount) && amount > 0) {
                    bankAccount.deposit(amount);
                    document.getElementById('balance').textContent = `Баланс: ${bankAccount.balance} грн.`;
                }
                else alert('Введіть правильну суму!');
            }
            else alert('Неправильний пароль!');
        });

        document.getElementById('withdraw-btn').addEventListener('click', () => {
            const enterdPass = prompt('Введіть пароль для підтвердження');
            if (enterdPass === password) {
                const amount = Number(prompt('Скільки грошей хочете зняти?'));
                if (isNaN(amount) || amount <= 0) {
                    alert('Введіть правильну суму!');
                } else if (amount > bankAccount.balance) {
                    alert('Недостатньо коштів на рахунку!');
                }
                else {
                    bankAccount.withdraw(amount);
                    document.getElementById('balance').textContent = `Баланс: ${bankAccount.balance} грн.`;
                }
            }
            else alert('Неправильний пароль!');
        });

    } else {
        alert('Введіть ім’я та пароль!');
    }
});
//2
const weather = {
    temperature: 0,
    humidity: 0,
    windSpeed: 0,
    forecast(){
        return this.temperature < 0;
    },
}
const openWeather = document.getElementById('weather-btn');
const modalWeather = document.getElementById('modal-weather');
const checkWeather = document.getElementById('check-weather');
const resultWeather = document.getElementById('result-weather');

openWeather.onclick = () => modalWeather.style.display = 'flex';
document.getElementById('close-weather').addEventListener('click', () => modalWeather.style.display = 'none');
window.onclick = event => {if(event.target === modalWeather) modalWeather.style.display = 'none'}

checkWeather.onclick = () => {
    const input = document.getElementById('input-weather').value.trim();
    

    if(!input){
        resultWeather.textContent = 'Введіть температуру!'
        resultWeather.className = 'error'
    }
    weather.temperature = Number(input);
    if(weather.forecast()){
        resultWeather.textContent = '❄️ Температура нижче 0°C!'
        resultWeather.style.color = '#1e6091';
    }
    else{
        resultWeather.textContent = '☀️ Температура вище або рівна 0°C!'
        resultWeather.style.color = '#ffcd2a';
    }
}
//3
const user = {
    name: '',
    email: '',
    password: '',
    register(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    },
    login(email, password){return this.email === email && this.password === password},
}
const openReg = document.getElementById('open-register');
const openLog = document.getElementById('open-login');

const modalReg = document.getElementById('modal-register');
const modalLog = document.getElementById('modal-login');
const modalUsr = document.getElementById('modal-user');

const regName = document.getElementById('reg-name');
const regGmail = document.getElementById('reg-gmail');
const regPass = document.getElementById('reg-password');

const logGmail = document.getElementById('log-gmail');
const logPass = document.getElementById('log-password');

const regBtn = document.getElementById('reg-btn');
const logBtn = document.getElementById('log-btn');

const usrGreeting = document.getElementById('usr-greeting');
const usrInput = document.getElementById('usr-input');
const usrBtn = document.getElementById('usr-btn');
const usrList = document.getElementById('usr-list');

openReg.onclick = () => modalReg.style.display = 'flex';
openLog.onclick = () => modalLog.style.display = 'flex';

document.getElementById('close-reg').onclick = () => modalReg.style.display = 'none';
document.getElementById('close-log').onclick = () => modalLog.style.display = 'none';
document.getElementById('close-usr').onclick = () => modalUsr.style.display = 'none';

regBtn.onclick = () => {
    const name = regName.value.trim();
    const gmail = regGmail.value.trim();
    const password = regPass.value.trim();
    if(name && gmail && password){
        user.register(name, gmail, password);
        alert('Реєстрація прошла успішно!');
        modalReg.style.display = 'none';
    }
    else alert('Заповніть усі поля!')
}
logBtn.onclick = () => {
    const gmail = logGmail.value.trim();
    const password = logPass.value.trim();
    if(user.login(gmail, password)){
        usrGreeting.textContent = `Вітаю, ${user.name}!`;
        modalUsr.style.display = 'flex';
        modalLog.style.display = 'none';
        renderTodo();
    }
    else alert('Невірний email або пароль!')
}
function loadTodo(){//розпаковуємо
    //localStorage - пам'ять браузера    а    getItem дозволяє щось там щюерішать  
    const raw = localStorage.getItem('todo');
    return raw ? JSON.parse(raw) : [];
    //JSON.stringify()	Перетворює об’єкт у текст	 "{"name":"Hello world"}"
    //JSON.parse()	Перетворює текст назад у об’єкт	 { name: "Hello world" }
}
function saveTodo(todo){//впаковуємо топто браузер не може зберегти масиви і тд а лише текст 
    localStorage.setItem('todo', JSON.stringify(todo));
}
function renderTodo(){
    usrList.innerHTML = '';
    const todo = loadTodo();
    todo.forEach((item, index) =>{
        const li = document.createElement('li');

        const doneBtn = document.createElement('button');
        doneBtn.textContent = '✅';
        doneBtn.style.marginRight = '10px';
        doneBtn.onclick = () => {
            item.done = !item.done;
            saveTodo(todo);
            renderTodo();
        };

        const span = document.createElement('span');
        span.textContent = item.text;
        if(item.done) span.style.textDecoration='line-through';

        const delBtn = document.createElement('button')
        delBtn.textContent = '❌';
        delBtn.style.marginLeft = '10px';
        delBtn.onclick = () => {
            todo.splice(index,1);
            saveTodo(todo);
            renderTodo();
        };

        li.appendChild(doneBtn);
        li.appendChild(span);
        li.appendChild(delBtn);
        usrList.appendChild(li);
    });
}
usrBtn.onclick = () => {
    const text = usrInput.value.trim();
    if(!text) return;
    const todo = loadTodo();
    todo.push({text, done:false});
    saveTodo(todo);
    usrInput.value = '';
    renderTodo();
}