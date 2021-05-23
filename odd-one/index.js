


// const oddOne = (arr) => {
//
//     let checker = [1, 3, 5, 7, 9]
//
//     for (let num of arr) {
//         if (!checker.includes(num)) {
//             return
//         }
//     }
// }


var a = ['a', 'b', 'c', 'd'];
var b = ['a', 'b'];
var b1 = new Set(b);
var difference = [...new Set(a.filter(x => !b1.has(x)))];

console.log(difference)