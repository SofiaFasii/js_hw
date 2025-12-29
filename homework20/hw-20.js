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
    
    if(event.key === 'ArrowRight'){
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        fullImage.src = galleryImages[currentImageIndex].src
    }
    else if(event.key === 'ArrowLeft'){
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        fullImage.src = galleryImages[currentImageIndex].src
    }

    if(event.key === 'Escape') closeImage()
})

document.querySelector('.btn-closee').addEventListener('click', closeImage)