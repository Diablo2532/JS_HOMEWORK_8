// 4. Порахувати англійські та українські голосні літери.
const countVowels = (text) => (text.match(/[aeiouаеєиіїоуюя]/gi) || []).length;

console.log(countVowels(task4Text));
