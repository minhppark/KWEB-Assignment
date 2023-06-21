let total = 0
const itemPrice = {
    apple: 700,
    orange: 800,
    lemon: 900,
}

document.querySelectorAll('.add-to-cart').forEach(element => element.addEventListener('click', (event) => {
    const itemName = event.target.parentNode.parentNode.getAttribute('id')
    total += itemPrice[itemName]
    document.getElementById('cost').innerText = total
}))