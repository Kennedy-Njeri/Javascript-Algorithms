const sumOfUnique = function(nums) {

    //let sum = 0

    let unique = []

    //let sorted = nums.sort((a, b) => a - b)

    // let sorterArray = [...new Set(nums)]
    //
    // let sum = sorterArray.reduce((acc, cumm) => {
    //     return acc +=cumm
    // }, 0)

    for(let i = 0; i< nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] === nums[j]) {
               nums.pop()
               }
        }
    }

    return nums
    //return sorterArray
};


console.log(sumOfUnique([1,2,3,2]))