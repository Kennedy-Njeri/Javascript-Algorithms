const almostIncreasingSequence = (arr = []) => {

    if (isIncreasingSequence(arr)) {
        return true;
    };

    for (let i = 0; i < arr.length > 0; i++) {
        let copy = arr.slice(0);
        //console.log(copy)
        copy.splice(i, 1);
        console.log(copy)

        if (isIncreasingSequence(copy)) {
            return true;
        };
    };
    return false;
};

const isIncreasingSequence = (arr = []) => {

    let unWanted = 0

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= arr[i + 1]) {
            unWanted++
            //console.log(unWanted)
            //console.log(arr[i])
            return false;
        };
    };
    return true;
};

//console.log(isIncreasingSequence([1, 3, 4, 2, 1]))
//console.log(isIncreasingSequence([1, 3, 2]))
// console.log(almostIncreasingSequence([1, 3, 4, 2, 1]));
 console.log(almostIncreasingSequence([1, 2, 4, 3]));