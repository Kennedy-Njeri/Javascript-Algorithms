

// const pairSums = (arr, sum) => {
//
//     let pairs = []
//
//     for(let i = 0; i< arr.length; i++) {
//
//         if (arr[i] + arr[i+1] === sum) {
//             pairs.push(arr[i], arr[i+1])
//             //return 'YES'
//         }
//
//     }
//
//
//     return pairs
// }
//
//
// console.log(pairSums([1, 2, 3, 4, ], 7))



const twoSum = function(nums, target) {
    let solution = []

    for(let i = 0; i< nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {

                solution.push(nums.indexOf(nums[i]), nums.indexOf(nums[j]))
            }
        }
    }

    // for(let i = 0; i < nums.length; i++) {
    //
    //     if (nums[i] + nums[i + 1] === target){
    //         solution.push(nums[i], nums[i + i])
    //     }
    // }

    return solution
};

console.log(twoSum([2,5,11,7], 9))