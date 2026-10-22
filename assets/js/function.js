// 6. Знайти найдовше слово в рядку.
const findLongestWord = (text) => {
    const words = text.match(/[\p{L}\p{N}]+/gu) || [];
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, "");
};

console.log(findLongestWord(task6Text));
