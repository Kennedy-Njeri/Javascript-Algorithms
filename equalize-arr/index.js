function equalizeArray(arr) {
    // Write your code here
    let map = {}

    for(let i = 0; i < arr.length; i++) {
        let char = arr[i]
        if (map[char]) {
            map[char]++
        } else {
            map[char] = 1
        }

    }
        let objectArr = Object.values(map)
        let maxVal = Math.max(...objectArr)

        return arr.length - maxVal


}


console.log(equalizeArray([2, 2, 5, 6]))