// check if a reversed string is equal to the initial string... returns true or false

const palindrome = (str) => {

    const reversed = str.split('').reverse().join('')

    console.log(reversed)

    return str === reversed


}


console.log(palindrome('abba'))


module.exports = palindrome;
