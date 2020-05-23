// check if a reversed string is equal to the initial string... returns true or false

const palindrome = (str) => {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    })
}


console.log(palindrome('abba'))


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
