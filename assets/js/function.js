const stringsHrefFilter = (arr, condition) => arr.filter((url) => url.startsWith(condition));
console.log(stringsHrefFilter(stringsHref, "http://"));

const fileNamesFilter = (arr, condition) => arr.filter((url) => url.endsWith(condition));
console.log(fileNamesFilter(fileNames, ".html"));

// 3. Замінити першу літеру кожного слова на "!".
const replaceFirstLetterOfEachWord = (text) => text.replace(/\b\w/g, "!");
console.log(replaceFirstLetterOfEachWord(task3Text));
