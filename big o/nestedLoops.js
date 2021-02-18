const printNumThenAllPairsSums = (numbers) => {
    // 0(n)
    console.log("these are the numbers")
    numbers.forEach((number) => {
        console.log(number)
    })


    // o(n^2)
    console.log("and these are their sums: ")
    numbers.forEach((firstNumber) => {
        numbers.forEach((secondNumber) => {
            console.log(firstNumber + secondNumber)
        })
    })
}

// o(n + n^2) // rule no 4...drop non-dominant terms
// hence o(n^2)

printNumThenAllPairsSums([1, 2, 3, 4, 5])