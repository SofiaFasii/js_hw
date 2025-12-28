//1
const categories = document.querySelectorAll('#categories .itemm')
console.log(`У списку ${categories.length} категорії.`)

categories.forEach(category => {
    const title = document.querySelector('h4').textContent;
    const itemsCount = category.querySelectorAll('li').length;

    console.log(`Категорія: ${title}`);
    console.log(`Кількість елементів: ${itemsCount}`);
})
//2
const ingredients = [
 'Картопля',
 'Гриби',
 'Часник',
 'Помідори',
 'Зелень',
 'Приправи',
];

const ul = document.getElementById('ingredients')

const items = ingredients.map(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    return li
})
ul.append(...items)
//3
const images = [
 {
  url:
   'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'White and Black Long Fur Cat',
 },
 {
  url:
   'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
 },
 {
  url:
   'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Group of Horses Running',
 },
];

const gallery = document.getElementById('gallery')
const markup = images.map(({url, alt}) => `<li class="gallery-item"> <img src="${url}" alt="${alt}" class="gallery-img"> </li>`).join('')
gallery.insertAdjacentHTML('beforeend', markup)
//4
const valueSpan = document.getElementById('value')
const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')

let counterValue = 0;

function update(){
    valueSpan.textContent = counterValue
}
function decrement(){
    counterValue -= 1
    update()
}
function increment(){
    counterValue += 1
    update()
}

decrementBtn.addEventListener('click', decrement)
incrementBtn.addEventListener('click', increment)