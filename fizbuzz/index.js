// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz


// const fizzBuzz = (n) => {
//     for (let num = 1; num <= n; num++) {
//         if (num % 3 === 0 && num % 5 === 0) {
//             console.log("Fizzbuzz")
//         } else if (num % 3 === 0){
//             console.log("Fizz")
//         } else if (num % 5 === 0){
//             console.log("Buzz")
//         } else {
//             console.log(num)
//         }
//     }
// }


const fizzbuzz = (N) => {
    for(let i = 1; i <= N; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        } else if(i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0 ) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

console.log(fizzbuzz(15))



//console.log(fizzBuzz(50))