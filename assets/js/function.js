// 11. Порівняти два рядки незалежно від регістру.
const isEqual = (first, second) => first.toLowerCase() === second.toLowerCase();

task11Pairs.forEach(([first, second]) => {
    console.log(isEqual(first, second));
});
