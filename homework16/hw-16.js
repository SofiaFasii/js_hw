//1
class Account{
    constructor({ login, email }){
        this.login = login;
        this.email = email;
    }
    getInfo(){
        console.log(`Login: ${this.login}, Email: ${this.email}`)
    }
    getInfoTwo(){
        const text = `Login: ${this.login}, Email: ${this.email}`
        console.log(text)
        return text
    }
}
console.log(Account.prototype.getInfo)

const mango = new Account({
    login: 'Mangozedog',
    email: 'mango@dog.woof'
})
mango.getInfo()

const poly = new Account({
    login: 'Poly',
    email: 'poly@mail.com',
})
poly.getInfo()

const userLogin = document.querySelector('.user-login')
const userEmail = document.querySelector('.user-email')
const submitBtn = document.querySelector('.submit-btn')
const submitResult = document.getElementById('submit-result')

submitBtn.addEventListener('click', () => {
    if(!userLogin.value || !userEmail.value){
        submitResult.textContent = 'Спочатку введіть свої дані!'
        submitResult.className ='error'
    }
    else{
        const user = new Account({
            login: userLogin.value,
            email: userEmail.value
        })
        submitResult.textContent = user.getInfoTwo()
        submitResult.className = ''
    }
})
//2
console.log('--- 2 ---')
class User{
    constructor({name, age, followers}){
        this.name = name;
        this.age = age; 
        this.followers = followers;
    }
    getInfo(){
        console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`)
    }
    getInfoTwo(){
        const text = `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
        console.log(text)
        return text
    }
}
const mangoo = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
});
mangoo.getInfo()

const polyy = new User({
 name: 'Poly',
 age: 3,
 followers: 17,
});
polyy.getInfo();

const userName = document.querySelector('.your-name')
const userAge = document.querySelector('.your-age')
const userFollowers = document.querySelector('.your-followers')
const resultSubmit = document.getElementById('result-submit')

document.querySelector('.btn-submit').addEventListener('click', () => {
    if(!userName.value || !userAge.value || !userFollowers.value){
        resultSubmit.textContent = 'Спочатку заповніть всі поля!'
        resultSubmit.className ='error'
    }
    else{
        const user = new User({
            name: userName.value,
            age: userAge.value,
            followers: userFollowers.value
        })
        resultSubmit.textContent = user.getInfoTwo()
        resultSubmit.className = ''
    }
})
//3
console.log('--- 3 ---')

class Storage{
    constructor(items){
        this.items = items
    }
    getItems() {
        return this.items
    }
    addItem(item){
        this.items.push(item)
    }
    removeItem(item){
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
}
const storage = new Storage([
 'Нанітоіди',
 'Пролонгер',
 'Залізні жупи',
 'Антигравітатор',
]);

const items = storage.getItems();
console.table(items);
storage.addItem('Дроїд');
console.table(storage.items);
storage.removeItem('Пролонгер');
console.table(storage.items);
//4
console.log('--- 4 ---')

class StringBuilder{
    constructor(value){
        this._value = value
    }
    get value(){
        return this._value
    }
    append(str){
        this._value += str
    }
    prepend(str){
        this._value = str + this._value
    }
    pad(str){
        this._value = str + this._value + str
    }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value);

builder.prepend('^');
console.log(builder.value);

builder.pad('=');
console.log(builder.value);
//5
console.log('--- 5 ---')

class Car{
    #price

    static getSpecs(car){
        let obj = {
            maxSpeed: car.maxSpeed,
            speed: car.speed,
            isOn: car.isOn,
            distance: car.distance,
            price: car.price
        }
        console.log(obj)
    }
    constructor(obj){
        this.speed = 0;
        this.#price = obj.price;
        this.maxSpeed = obj.maxSpeed;
        this.isOn  = false;
        this.distance = 0;
    }
    get price(){
        return this.#price
    }
    set price(value){
        this.#price = value
    }
    turnOn(){
        this.isOn = true
    }
    turnOff(){
        this.isOn = false;
        this.speed = 0;
    }
    accelerate(value){
        if(this.speed + value <= this.maxSpeed){
            this.speed += value
        }
    }
    decelerate(value){
        if(this.speed - value >= 0){
            this.speed -= value
        }
    }
    drive(hours){
        if(this.isOn === true){
            this.distance += this.speed * hours
        }
    }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000