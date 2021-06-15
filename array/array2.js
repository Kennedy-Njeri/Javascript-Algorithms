// const mergedArray = (arr1, arr2) => {
//     let merged = [...arr1, ...arr2]
//
//     //merged.push(arr1, arr2)
//
//
//     let sorted = merged.sort((a, b) => {
//         return a - b
//     })
//
//     return sorted
//
//
// }
//
//
//
//
// console.log(mergedArray([3, 5, 6], [2, 9, 4]))



var mergeTwoLists = function(l1, l2) {

    let merged = [...l1, ...l2]


    let sorted = merged.sort((a, b) => a - b)

    return sorted


};


console.log(mergeTwoLists([1,2,4], [1,3,4]))