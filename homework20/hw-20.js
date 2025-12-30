//1
const galleryImages = document.querySelectorAll('.image');
const fullImageContainer = document.querySelector('.full-image-container')
const fullImage = document.querySelector('.full-image')

let currentImageIndex = 0;

function openImage(index){
    currentImageIndex = index;
    fullImage.src = galleryImages[index].src;
    fullImageContainer.style.display = 'flex';
}
function closeImage(){
    fullImageContainer.style.display = 'none'
}
galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        openImage(index)
    })
})

document.addEventListener('keydown', (event) => {
    if(fullImageContainer.style.display !== 'flex') return;
    
    if(event.key === 'ArrowRight' || event.key === 'd' || event.key === 'в'){
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        fullImage.src = galleryImages[currentImageIndex].src
    }
    else if(event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'ф'){
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        fullImage.src = galleryImages[currentImageIndex].src
    }

    if(event.key === 'Escape') closeImage()
})

document.querySelector('.btn-closee').addEventListener('click', closeImage)
//2
const input = document.querySelector('#controls input');
const renderBtn = document.querySelector('[data-action="render"]')
const destroyBtn = document.querySelector('[data-action="destroy"]')
const boxes = document.getElementById('boxes')

function randomColor(){
    return `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`
}
function createBoxes(amount){
    destroyBoxes()

    let size = 30;

    for(let i = 0; i < amount; i++){
        const div = document.createElement('div')

        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.margin = `5px`;
        div.style.backgroundColor = randomColor();

        size += 10
        boxes.appendChild(div)
    }
}

function destroyBoxes(){
    boxes.innerHTML = ''
}
destroyBtn.addEventListener('click', destroyBoxes)

renderBtn.addEventListener('click', () => {
    const amount = input.value;
    if(amount > 0){
        createBoxes(amount)
    }
})