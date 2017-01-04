import readline from 'readline'

const min = 1
    , max = 100
    , num = Math.floor(Math.random() * (max - min + 1)) + min
    , prompt = readline.createInterface({
	input:  process.stdin,
	output: process.stdout
})
    , print = ::console.log

print(`I'm thinking of a number between ${min} and ${max}`)

(function loop() {
	prompt.question('? ', (guess) => {
		if (guess == num) {
			print('correct!')
			prompt.close()
		}
		prompt.close()
	})
}())
