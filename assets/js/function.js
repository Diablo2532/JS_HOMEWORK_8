const stringsHrefFilter = (arr, condition) => arr.filter((url) => url.startsWith(condition));
console.log(stringsHrefFilter(stringsHref, "http://"));

const fileNamesFilter = (arr, condition) => arr.filter((url) => url.endsWith(condition));
console.log(fileNamesFilter(fileNames, ".html"));

// 3. Замінити першу літеру кожного слова на "!".
const replaceFirstLetterOfEachWord = (text) => text.replace(/\b\w/g, "!");
console.log(replaceFirstLetterOfEachWord(task3Text));

// 4. Порахувати англійські та українські голосні літери.
const countVowels = (text) => (text.match(/[aeiouаеєиіїоуюя]/gi) || []).length;
console.log(countVowels(task4Text));
