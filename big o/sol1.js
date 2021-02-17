const another = () => {
    return "hello"
}


const funChallenge = (input) => {
    let a = 5 // o(1) constant time
    a = 10  // o(1)

    for (let i = 0; i< input.length; i++ ) {
        another() // o(n) linear complexity
        let move = true  // o(n)
        a++ // o(n)
    }

    return a // o(1)
}

funChallenge([5, 6, 7, 8])

// hence (3 + 4n)