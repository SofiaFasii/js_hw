console.clear();
//1
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
const account = {
    balance: 0,
    transactions: [],
    id: 1,
    createTransaction(amount, type){
        return {id: this.id++,type, amount}
    },
    deposit(amount){
        this.balance += amount;
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(transaction)
    },
    withdraw(amount){
        if(amount > this.balance){
            alert('Недостатньо коштів!')
        }
        else{
            this.balance -= amount;
            const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
            this.transactions.push(transaction);
        }
    },
    getBalance(){
        return this.balance
    },
    history() {
        if(this.transactions.length === 0) return 'Поки ще немає транзакцій.';
        return this.transactions.map(item => `${item.type === Transaction.DEPOSIT ? 'Поповнення' : 'Зняття'}: ${item.amount} грн (id:${item.id})`).join('<br>');
    }
}
const balanceP = document.getElementById('balance');
const historyP = document.getElementById('history');

function upBalance(){
    balanceP.textContent = `Поточний баланс: ${account.getBalance()}грн.`;
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