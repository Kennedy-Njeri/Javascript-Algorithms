function birthdayCakeCandles(candles) {
    // Write your code here
    let result = Math.max(...candles)

    let count = []

    for(let i = 0; i < candles.length; i++) {
        if(candles[i] === result) {
            count.push(candles[i])
        }
    }

    return count.length
}


console.log(birthdayCakeCandles([9, 4, 8, 9, 9]))