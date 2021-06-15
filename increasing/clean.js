function main(input) {
    // process.stdout.write("Hi, " + input + ".\n")

    // get the array from the input string
    // convert the string numbers to an array of numbers
    let newArr = input.split('\n')[2].split('').map(i => Number(i))
     //  console.log(`new arr`, newArr)


    // if the array is increasing return 'Yes'
    if (isIncreasingSeq(newArr)) {
        return 'Yes'
    }

    // otherwise go through the array to find out which element to remove not more than 2T times
    for (let i = 0; i < newArr.length > 0; i++) {

        // make a copy of the array
        let copy = newArr.slice(0);
        //console.log(copy)


        /*
        e.g get diff patterns of the array e.g if original array was [1, 2, 4, 3]
        so remove 4 and the array is increasing
        [ 2, 4, 3 ]
        [ 1, 4, 3 ]
        [ 1, 2, 3 ]
        */
        copy.splice(i, 1);
        //console.log(copy)

        if (isIncreasingSequence(copy)) {
            return 'Yes';
        }
    }
    return 'No'


}




/*
know whether the
array is increasing or not
if increasing return true
*/
const isIncreasingSeq = (arr) => {


    // know no of num to remove
    //let unWanted = 0


    // loop the elements in the array
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= arr[i + 1]) {
            //unWanted++
            //console.log(unWanted)
            //console.log(arr[i])
            return false;
        }
    }
    return true;
};


