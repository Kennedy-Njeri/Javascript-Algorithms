

function solution(N) {
    var enable_print = 0;

    while (N > 0) {

        enable_print = enable_print*10 + N%10

        N = Math.floor(N/10)
    }

    return enable_print
}


console.log(solution(54321))










// function solution(N) {
//     const reverse = N.toString().split('').reverse().join('')
//
//     if (N < 0) {
//         return parseInt(reverse) * -1
//     }
//
//     return parseInt(reverse)
// }


// console.log(solution(54321))