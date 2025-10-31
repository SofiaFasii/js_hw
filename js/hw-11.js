console.clear();

const bankAccount = {
    ownerName: '',
    accountNumber: '',
    balance: 2573,
    login(name) {
        this.ownerName = name;
    },
    deposit(amount) {
        this.balance += amount;
    },
    withdraw(amount) {
        this.balance -= amount;
    }
}
const openModal = document.getElementById('open-modal');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const loginBtn = document.getElementById('login-btn');

openModal.addEventListener('click', () => modal.style.display = 'flex')
document.getElementById('close').addEventListener('click', () => modal.style.display = 'none')
window.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
})
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.style.display = 'none';
    }
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
