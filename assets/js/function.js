const stringsHrefFilter = (arr, condition ) => {
    return arr.filter(
        (url) => url.startsWith(condition),
    );
};

console.log(stringsHrefFilter(stringsHref, "http://"));

//  почему в задании написано оставить в этом масиве хоть при фильтрации делается другой масив, а первоначальный масив обявлен через const 

