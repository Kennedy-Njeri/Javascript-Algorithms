const moveZeroes = function(nums) {

    let newArray = [...nums].sort((a, b) => a -b)

    for(let i = 0; i < newArray.length; i++) {

        if(newArray[i] === 0){
            let shiftedZeros = newArray.shift()
            newArray.push(shiftedZeros)
        }
    }

    return newArray
};


console.log(moveZeroes([0,1,0,3,12]))