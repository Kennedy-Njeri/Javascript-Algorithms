var maximum69Number  = function(num) {

    let newArr = []

    let copy = num.toString().slice(0)

    for(let i = 0; i < copy.length; i++) {

        //console.log(copy[i])
        // //num[i] = num[i] === 9 ? 6 : 9
        let newNo

        if(copy[i] === '9'){
            newNo = '6'
        } else {
            newNo = '9'
        }

        let copyNew = copy.slice(0).split('')

        copyNew.splice(i, 1, newNo)

        let word = copyNew.join('')

         if(parseInt(word)){
            newArr.push(parseInt(word))
         }
        //console.log(typeof newArr[0])
         //console.log(copy.slice(0))
    }

    console.log(Math.max(...newArr))
};


console.log(maximum69Number(9669))