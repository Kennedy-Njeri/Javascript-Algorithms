// const vowels = (str) => {
//     let count = 0
//     const checker = ['a', 'e', 'i', 'o', 'u']
//
//     for (let char of str.toLowerCase()) {
//         if (checker.includes(char)) {
//             count++
//         }
//     }
//
//     return count
// }
//
// console.log(vowels('Kennedy'))


const vowels = (str) => {
    // g do not stop at 1st match i-case insensitive
    const matches = str.match(/[aeiou]/gi)

    return matches ? matches.length : 0
}


console.log(vowels('Kennedy'))
