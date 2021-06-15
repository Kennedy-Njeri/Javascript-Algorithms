// const kidsWithCandies = function(candies, extraCandies) {
//     let max = 0
//
//     let result = []
//
//     let output
//
//     for(let i = 0; i < candies.length; i++) {
//
//         let add = candies[i] + extraCandies
//
//         if( add > max) {
//             max += add
//             output = true
//             result.push(output)
//         } else {
//             output = false
//             result.push(output)
//         }
//     }
//
//     return result
// };
//
//
// console.log(kidsWithCandies([12, 1, 12], 10))



const kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies)

    let result = []


    for(let i = 0; i < candies.length; i++) {
        result.push(candies[i] + extraCandies >= max)
    }

    return result
};


console.log(kidsWithCandies([12, 1, 12], 10))

