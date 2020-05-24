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

    for (let name of names) {
        if (!word[name]) {
            word[name] = 1
        } else {
            word[name] ++
        }
    }

    return word
}



console.log(maxChars('Kennedy'))
