const stringsHrefFilter = (arr, condition) => {
    return arr.filter((url) => url.startsWith(condition));
};

console.log(stringsHrefFilter(stringsHref, "http://"));

const fileNamesFilter = (arr, condition) => {
    return arr.filter((url) => url.endsWith(condition));
};

console.log(fileNamesFilter(fileNames, ".html"));
