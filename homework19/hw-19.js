//1
const radioBtn = document.querySelectorAll('input[name="color"]');
const checkedBtn = document.querySelector('input[name="color"]:checked');
radioBtn.forEach(radio => {
    radio.addEventListener('change', () => {
        if(radio.checked){
            document.body.style.backgroundColor = radio.value;
            document.querySelector('.btn-back').style.backgroundColor = radio.value;
        }
    })
})
//2.1
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
    const value = nameInput.value.trim();
    nameOutput.textContent = value === '' ? 'незнайомець' : value;
})
//2.2
const validationInput = document.getElementById('validation-input');
validationInput.addEventListener('blur', () => {
    const length = Number(validationInput.dataset.length)
    const inputLength = validationInput.value.length
    validationInput.classList.remove('valid', 'invalid')
    if(inputLength === length){
        validationInput.classList.add('valid')
    }
    else{
        validationInput.classList.add('invalid')
    }
})
//3
const fontSizeControl = document.getElementById('font-size-control');
const text =  document.getElementById('text')

fontSizeControl.addEventListener('input', () => {
    text.style.fontSize = fontSizeControl.value + 'px'
})