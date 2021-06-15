


const runningSum = function(nums) {

    let sum = []

    let currentSum = 0

    for (let i = 0; i< nums.length; i++) {
       currentSum +=nums[i]
       sum.push(currentSum)
    }


    return sum
};




console.log(runningSum( [1,2,3,4]))