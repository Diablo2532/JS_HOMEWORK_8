// 5. Перевірити, чи є рядок паліндромом, ігноруючи пробіли та розділові знаки.
const isPalindrome = (text) => {
    const normalized = text.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "");
    return normalized === [...normalized].reverse().join("");
};

console.log(isPalindrome(task5Text));
