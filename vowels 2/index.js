
const vowelsFunc = (word) => {
    //const vowels = ['a', 'e', 'i', 'o', 'u']
    const vowels = 'aeiou'

    for (let i = 0; i < word.length; i++) {

        if (vowels.indexOf(word[i]) === -1) {
            return 'No'
        }
    }

    return 'YES'
}



console.log(vowelsFunc('aeioj'))