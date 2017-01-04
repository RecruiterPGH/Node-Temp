import readline from 'readline'

const min = 1
    , max = 100
    , num = Math.floor(Math.random() * (max - min + 1)) + min
    , print = ::console.log

const prompt = readline.createInterface({
	input:  process.stdin,
	output: process.stdout
})

print(`I'm thinking of a number between ${min} and ${max}`)

;(function loop() {
	prompt.question('? ', guess => {
		if (guess == num) {
			print('correct!')
			prompt.close()
			return
		}
		print(num > guess ? 'higher' : 'lower')
		loop()
	})
}())
