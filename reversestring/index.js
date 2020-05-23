

const reverse = (str) => {
  return str.split('').reduce((reversed, character) => {
    return character + reversed
  }, '')
}







console.log(reverse('kennedy'))



module.exports = reverse


// const reverse = (str) => {
//   // solution 1
//   return str.split('').reverse().join('')
//   // const arr = str.split('')
//   // arr.reverse()
//   // return arr.join('')
// }

// solution 2
// const reverse = (str) => {
//
//   let reversed = ''
//
//   for (let word of str) {
//     //console.log(word)
//     console.log(word + reversed)
//     reversed = word + reversed
//   }
//
//   return reversed
//   // const arr = []
//   //
//   // for (let word of str.split('').reverse()) {
//   //   arr.push(word)
//   // }
//   // return arr.join('')
// }
