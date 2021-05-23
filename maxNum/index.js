const countNumArr = (arr) => {
    let map = {}
    let numb
    let max = 0

    for(let num of arr) {
        if(!map[num]) {
            map[num] = 1
        } else {
            map[num]++
        }
    }

    for(let chart in map) {
        if(map[chart] > max) {
            numb = map[chart]
        }
    }

    return {numb, map}
}


console.log(countNumArr([3 ,3 ,3 ,2 ,2]))