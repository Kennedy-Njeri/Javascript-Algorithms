

const pairSums = (arr, sum) => {

    let pairs = []

    for(let i = 0; i< arr.length; i++) {

        if (arr[i] + arr[i+1] === sum) {
            pairs.push(arr[i], arr[i+1])
            //return 'YES'
        }

    }


    return pairs
}


console.log(pairSums([1, 2, 3, 4, 5], 7))