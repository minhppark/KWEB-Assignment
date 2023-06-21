function changeBoxColor() {
    const box = document.querySelector('.box')
    const secondBox = box.nextElementSibling
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    secondBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}