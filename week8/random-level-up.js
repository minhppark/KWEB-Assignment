let level = 0
let attempts = 0
const prob = [100, 60, 36, 22, 13, 8, 5, 3, 2, 1]

function tryLevelUp() {
    setInterval(() => {
        attempts++
        if ((Math.random() * 100) < prob[level]) {
            level++
            document.getElementById('current-level').innerText = level
            document.getElementById('gauge-bar').style.width =  level * 10 + '%'
        }
        document.getElementById('attempts').innerText = attempts
        if (level >= 10) {
            clearInterval(tryLevelUp)
        }
    }, 50)
}