var addToArrayForm = function(num, k) {

    let copy = [...num]

    let newNo = copy.join('')

    let sum = parseInt(newNo) + k

    // let ansW = []
    //
    // for(let i = 0; i< sum.length; i++){
    //     ansW.push(sum[i])
    // }

    console.log(Array.from(String(sum), Number))
};


console.log(addToArrayForm([1, 2, 0, 0], 34))