const mergedArray = (arr1, arr2) => {
    let merged = [...arr1, ...arr2]

    //merged.push(arr1, arr2)


    let sorted = merged.sort((a, b) => {
        return a - b
    })

    return sorted


}




console.log(mergedArray([3, 5, 6], [2, 9, 4]))