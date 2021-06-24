var singleNumber = function(nums) {
    let mapChar = {}

    let result

    for(let i = 0; i < nums.length; i++) {

        for(let j = i + 1; j < nums.length; j++){
            let first = nums[i]
            let second = nums[j]
            if(!first == second) {
                 result = first
            }
        }
    }

    // for(let char of nums){
    //     if(!mapChar[char]){
    //         result = char
    //        }
    // }

    //return result
    console.log(result)
};

console.log(singleNumber([4, 2, 2]))