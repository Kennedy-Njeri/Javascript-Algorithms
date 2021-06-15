



const duplicateSorted = (nums) => {
    // let newSet = new Set(nums)
    //
    // return Array.from(newSet)
    return [...new Set(nums)]
}


console.log(duplicateSorted([1, 1,2]))