function cntConsecutiveElements(array) {
    let result = "";
    let counter = 1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1]) {
            counter++;
        }
    }
    return result;
}


console.log(cntConsecutiveElements(["a", "b", "b", "a"]))
