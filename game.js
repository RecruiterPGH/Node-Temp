import readline from 'readline'
import Promise from 'bluebird'

const reader = readline.createInterface({
	input:  process.stdin,
	output: process.stdout
})
const question = Promise.promisify(reader.question)

(async () => {
	let guess = await question('?')
})()
