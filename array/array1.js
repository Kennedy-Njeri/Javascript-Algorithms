const letters = ['a', 'b', 'c', 'd', 'e']
// 4*4 = 16 bytes of storage


// push
letters.push('f') // o(1)

//pop
letters.pop() // o(1)



// unshift - add at the beginning of the array
// looped to realign the indexes // o(n)
letters.unshift('x')


// splice o(n)
letters.splice(2, 0, 'ken')


console.log(letters)




