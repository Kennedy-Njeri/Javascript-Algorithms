// check if a reversed string is equal to the initial string... returns true or false

const palindrome = (str) => {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    })
}


console.log(palindrome('abba'))


// using every
// const array1 = [1, 30, 39, 29, 10, 13, 50];
//
// const solution = array1.every((char) => {
//     return char < 40
// })
//
// console.log(solution)



module.exports = palindrome;



// const palindrome = (str) => {
//
//     const reversed = str.split('').reverse().join('')
//
//     console.log(reversed)
//
//     return str === reversed
//
//
// }


var isPalindrome = function(s) {
    let isPal = s.toLowerCase().replace(/[^a-zA-Z0-9]/g,"").split('').reverse().join('')
    //console.log(s.toLowerCase().replace(/[^a-zA-Z0-9]/g,""))
    //console.log(isPal)

    return isPal === s.toLowerCase().replace(/[^a-zA-Z0-9]/g,"")
};
