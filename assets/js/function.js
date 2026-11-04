const stringsHrefFilter = (arr, condition) =>
  arr.filter((url) => url.startsWith(condition));
console.log(stringsHrefFilter(stringsHref, "http://"));

const fileNamesFilter = (arr, condition) =>
  arr.filter((url) => url.endsWith(condition));
console.log(fileNamesFilter(fileNames, ".html"));

// 3. Замінити першу літеру кожного слова на "!".
const replaceFirstLetterOfEachWord = (text) => {
  const words = text.split(" ");
  const result = [];

  for (const word of words) {
    result.push(word ? `!${word.slice(1)}` : word);
  }

  return result.join(" ");
};
console.log(replaceFirstLetterOfEachWord(task3Text));

// 4. Порахувати англійські та українські голосні літери.
const countVowels = (text) => {
  const vowels = "aeiouyаеєиіїоуюя";
  let count = 0;

  for (const letter of text.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  return count;
};
console.log(countVowels(task4Text));

// 5. Паліндром без урахування пробілів і розділових знаків.

const isPalindrome = (text) => {
  const symbolsToIgnore = [" ", ",", ".", "!", "?", ";", ":", "-", "(", ")"];
  let normalized = "";
  let reversed = "";

  for (const symbol of text.toLowerCase()) {
    if (!symbolsToIgnore.includes(symbol)) {
      normalized += symbol;
    }
  }

  for (let index = normalized.length - 1; index >= 0; index--) {
    reversed += normalized[index];
  }

  return normalized === reversed;
};
console.log(isPalindrome(task5Text));

// 6. Знайти найдовше слово в рядку.
const findLongestWord = (text) => {
  const separators = [" ", ",", ".", "!", "?", ";", ":", "-", "(", ")"];
  let currentWord = "";
  let longestWord = "";

  for (const symbol of text) {
    if (separators.includes(symbol)) {
      if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
      }

      currentWord = "";
    } else {
      currentWord += symbol;
    }
  }

  return currentWord.length > longestWord.length ? currentWord : longestWord;
};
console.log(findLongestWord(task6Text));

// 7. Вивести рядок задом наперед.
const reverseText = (text) => [...text].reverse().join("");
console.log(reverseText(task7Text));

// 8. Повернути цілу частину числа, відкидаючи дробову частину до нуля.
const getIntegerPart = (number) => Math.trunc(number);
console.log(getIntegerPart(task8Number));

// 9. Запитати ім'я та показати його великими літерами.
const userName = prompt("Як тебе звати?");
if (userName !== null) {
  alert(userName.toUpperCase());
}

// 10. Перетворити дату з формату YYYY-DD-MM у DD.MM.YYYY.
const formatDate = (date) => {
  const [year, day, month] = date.split("-");
  return `${day}.${month}.${year}`;
};
console.log(formatDate(task10Date));

// 11. Порівняти два рядки незалежно від регістру.
const isEqual = (first, second) => first.toLowerCase() === second.toLowerCase();
task11Pairs.forEach(([first, second]) => {
  console.log(isEqual(first, second));
});
