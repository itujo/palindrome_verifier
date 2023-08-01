import readline from 'readline';
import { isPalindrome } from './isPalindrome';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const promptMessage =
  'Digite algo para verificar se é palíndromo ou pressione "Ctrl + C" para sair: ';
rl.setPrompt(promptMessage);
rl.prompt();

function displayResult(input: string) {
  const resultMessage = isPalindrome(input)
    ? `${input} é um palíndromo!\n`
    : `${input} não é um palíndromo!\n`;
  console.log(resultMessage);
}

function startPalindromeCheck() {
  rl.on('line', (input) => {
    displayResult(input.trim());
    rl.prompt();
  });

  rl.on('close', () => {
    console.log('\nPrograma encerrado.');
    rl.close();
    process.exit(0);
  });
}

startPalindromeCheck();
