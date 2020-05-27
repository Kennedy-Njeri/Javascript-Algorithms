// const names = 'Kennedy'
//
// const word = {}
//
// for (let name of names) {
//     if (!word[name]) {
//         word[name] = 1
//     } else {
//         word[name] ++
//     }
// }
//
// console.log(word)


const maxChars = (names) => {
    const word = {}
    let max = 0
    let maxChar = ''

    for (let name of names) {
        if (!word[name]) {
            word[name] = 1
        } else {
            word[name] ++
        }
    }

    for (let name in word){
        if (word[name] > max) {
            max = word[name]
            maxChar = name
        }
    }

    return maxChar
}



console.log(maxChars('Kenndy'))


module.exports = maxChars;
