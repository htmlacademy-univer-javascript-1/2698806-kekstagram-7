/* eslint-disable no-unused-vars */

// 1. Функция для проверки длины строки
function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

// 2. Функция для проверки на палиндром
function isPalindrome(string) {
  const cleanString = string.toLowerCase().replaceAll(' ', '');
  const reversedString = cleanString.split('').reverse().join('');
  return cleanString === reversedString;
}

// 3. Функция для извлечения цифр
function extractDigits(input) {
  const stringInput = String(input);
  let result = '';

  for (let i = 0; i < stringInput.length; i++) {
    const char = stringInput[i];
    if (char >= '0' && char <= '9') {
      result += char;
    }
  }

  if (result === '') {
    return NaN;
  }

  return parseInt(result, 10);
}
