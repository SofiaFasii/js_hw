console.clear();
//1
document.querySelector('.check-replace').addEventListener('click', () => {
    const input = document.querySelector('.input-replace').value.trim();
    const p = document.getElementById('result-one');
    p.textContent = input;
})
//2
document.querySelector('.check-replace-img').addEventListener('click', () => {
    const img = document.querySelector('.replace-img');
    img.src = `https://picsum.photos/200?random=${Math.random()}`;
})
//3
document.querySelector('.check-replace-alt-href').addEventListener('click', () => {
    const img = document.querySelector('.img-17');
    const link = document.querySelector('.link-17');
    img.alt = 'Папуга';
    link.textContent = 'Minecraft крута вікіпедія';
    link.href = 'https://uk.wikipedia.org/wiki/Minecraft';
})
//4
document.querySelector('.check-elements').addEventListener('click', () => {
    const elements = document.querySelector('.elements');
    const firstElement = elements.firstElementChild;
    firstElement.textContent = 'Текст 7';
    firstElement.style.color = 'green';
})