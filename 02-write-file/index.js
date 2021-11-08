const fs = require('fs');
const path = require('path');
const readline = require('readline');
const process = require('process');

const txtPath = path.join(__dirname, 'text.txt');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let writeableStream = fs.createWriteStream(txtPath);

console.log('Hi. You can write your text here. Press "ENTER" to save the message to a file and move to a new line.');
console.log('To exit the program, enter the word "exit" or press the key combination Ctrl + C.');
console.log('Write your message:');
rl.on('line', (message) => {
  writeMessage(message);
});

const goodBuy = () => {
  console.log('Goodbuy! See you later!');
};

const writeMessage = (message) => {
  if (message === 'exit') {
    goodBuy();
    process.exit();
  }
  writeableStream.write(`${message} \n`);  
};

process.on('beforeExit', () => {
  goodBuy();
});
