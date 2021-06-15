// function find(array) {
//     var s = new Set;
//     return array.find(v => s.has(v) || !s.add(v));
// }
//
// console.log(find([2, 5, 1, 2, 3, 5, 1, 2, 4])); // 2
// console.log(find([2, 1, 1, 2, 3, 5, 1, 2, 4])); // 1
// console.log(find([2, 3, 4, 5]));                // undefined




// const maxChar = (word) => {
//     let charMap = { }
//     let newWord = word.replace(/\s/g, '').split('')
//     let max = 0
//     let maxWord = ''
//
//     for(let char of newWord) {
//         if(!charMap[char]) {
//             charMap[char] = 1
//         } else {
//             charMap[char]++
//         }
//     }
//
//
//
//     //return charMap
//
//     for(let objChar in charMap) {
//         if(charMap[objChar] > max) {
//             max = charMap[objChar]
//             maxWord = objChar
//         }
//     }
//
//
//     return { maxWord, max }
//
//
// }

console.log(maxChar('Pulkit is a dog'))