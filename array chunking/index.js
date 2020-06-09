// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// finding last element in an array
// var array = [1,2,3,4,5,6];
// var val = array[array.length - 1]; //ans=6
// console.log(val)



const chunk = (array, size) => {
    const chunked = []

    for (let element of array) {
        const last = chunked[chunked.length -1]
        console.log(last)

        if (!last || last.length === size) {
            chunked.push([element])
        } else {
            last.push(element)
        }
    }

    return chunked
}


console.log(chunk([1, 2, 5, 5, 7], 2))

module.exports = chunk;

