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

    const key = event.key;
    
    if(key === 'ArrowRight' || key.toLowerCase() === 'd'){
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        fullImage.src = galleryImages[currentImageIndex].src
    }
    else if(key === 'ArrowLeft' || key.toLowerCase() === 'a'){
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        fullImage.src = galleryImages[currentImageIndex].src
    }

    if(key === 'Escape') closeImage()
})

document.querySelector('.btn-closee').addEventListener('click', closeImage)