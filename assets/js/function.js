
const fileNamesFilter = (arr, condition ) => {
    return arr.filter(
        (url) => url.endsWith(condition),
    );
};

console.log(fileNamesFilter(fileNames, ".html"));

