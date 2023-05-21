function isValidNumber(a) {
	if (1 <= a && a <= 9) {
		if (parseFloat(a) === parseInt(a)) {
			console.log('true')
		}
		else
		console.log('false')
	}
	else 
		console.log('false')
}

isValidNumber(9)
isValidNumber('4.3')
isValidNumber('abc')
isValidNumber(2-1)
isValidNumber(3.5)
isValidNumber(3/0)