//Напишите проверку, которая позволит определить, является слово палиндромом или нет.

//Дополнительные функции
const First = (x) => x.toLowerCase().replace(/\s+/g, '');

const Second = (x) =>
  x.toLowerCase().replace(/\s+/g, '').split('').reverse().join('');

//Основная функция
function IsPalindrome(x) {
  return First(x) === Second(x)
    ? `Слово '${x}' является палиндромом`
    : `Слово '${x}' не является палиндромом`;
}

let a = 'Довод';

let b = 'А роза упала на лапу Азора';

let c = 'И так сегодня катит';

console.log(IsPalindrome(a));
console.log(IsPalindrome(b));
console.log(IsPalindrome(c));
