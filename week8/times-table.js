function displayTimes() {
    const a = document.querySelector('#number');
    if (a.value >= 1 && a.value <= 9) {
        document.querySelector('#times-result').innerText = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(x => `${a.value} * ${x} = ${a.value*x}`).join('\n')
    }
    else {
        document.querySelector('#times-result').innerText = 'Input Error!'
    }
}