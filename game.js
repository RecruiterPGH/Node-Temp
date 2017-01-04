import readline from 'readline'

const reader = readline.createInterface({
	input:  process.stdin,
	output: process.stdout
})

reader.question('? ', (guess) => {
	console.log('you guessed ' + guess)
	reader.close()
})
