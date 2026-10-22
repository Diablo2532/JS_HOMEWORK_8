// 10. Перетворити дату з формату YYYY-DD-MM у DD.MM.YYYY.
const formatDate = (date) => {
    const [year, day, month] = date.split("-");
    return `${day}.${month}.${year}`;
};

console.log(formatDate(task10Date));
