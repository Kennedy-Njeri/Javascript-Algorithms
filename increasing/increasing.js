const incIndex = (arr) => {

    let unWantedElements = 0

    for (let i = 0; i < arr.length - 1; i++) {
        //console.log(arr.length - 1)
        if (arr[i] >= arr[i + 1]) {
            unWantedElements++
            console.log(arr[i])
            if (unWantedElements > 1){
                return false
            }
        }
    }


    // return true;
    // for (let i = 0; i < arr.length > 0; i++) {
    //     console.log(arr.length)
    //     let copy = arr.splice(0)
    //     copy.splice(i, 1)
    //     console.log(copy)
    // }

    return true
}


console.log(incIndex([1, 3, 4, 2, 1]))
//console.log(incIndex([1, 3, 2]));