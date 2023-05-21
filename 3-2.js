function getDivisors(a) {
	let arr = []
	for (let i = 0; i <= a; i++) {
		if (a % i === 0) {
			arr.push(i)
		}
	}
	console.log(arr)
}

getDivisors(5)
getDivisors(24)
getDivisors(196)