// remove constants
const printFirstItemThenFirstHalfThenSayHi100Times = (items) => {
    console.log(items[0])

    let middleIndex = Math.floor(items.length / 2)
    let index = 0

    while (index < middleIndex) {
        console.log(items[index])
        index++
    }

    for (let i = 0; i< 100; i++) {
        console.log("yes")
    }
}


printFirstItemThenFirstHalfThenSayHi100Times([1, 4, 8, 9, 10])

// (1 + n/2 + 100)

// hence o(n)