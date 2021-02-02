

const recursive = (n) => {
    if (n === 0) {
        // return no more work
        return
    }


    console.log(n)
    recursive(n -1)
}



recursive(5)




// imperative approach
// function countDownFrom(number) {
//     for (let i = number; i > 0; i--) {
//         console.log(i);
//     }
// }
//
// countDownFrom(5);