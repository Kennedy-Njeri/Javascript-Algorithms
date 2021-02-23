
// o(n^2)
// const recurringChar = (num) => {
//    for (let i = 0; i < num.length; i++) {
//        for (let j = i + 1; j< num.length; j++) {
//            if (num[i] === num[j]) {
//                return num[i]
//            }
//        }
//    }
//
//    return undefined
// }


const recurringChar = (num) => {
   let map = {}

   for (let digit of num) {

       if (map[digit]) {
           return digit
       } else {
           map[digit] = digit
       }
       console.log(map)
   }
}


console.log(recurringChar([2, 5, 1, 1, 3, 5, 1, 2, 4])) // o(n)
// space complexity o(n)