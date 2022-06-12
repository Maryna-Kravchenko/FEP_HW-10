function getArrowStrings() {
    let strings = [];

    while (true) {
        let string = prompt('Enter some string');
        if(string === '' || string === undefined) {
            break;
        } else {
            strings.push(`${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`);
        }
    }

    const sortStrings = strings.sort((first, second) => {
        return first.length - second.length;
    });

    return sortStrings;
}

console.log(getArrowStrings());
