


const capitalizeSentece = () => {
    let sentence = 'kennedy njeri'

    const words = []

    for (let word of sentence.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1))
    }

    return words.join(' ')
}


console.log(capitalizeSentece())