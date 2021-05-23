// Complete the pangrams function below.
//A pangram is a string that contains every letter of the alphabet.
// Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.
function pangrams(s) {
    let alphaLetters = 'abcdefghijklmnopqrstuvwxyz'
    let input = s.toLowerCase()

    for(let i = 0; i< alphaLetters.length; i++) {
        if(input.indexOf(alphaLetters[i]) === -1) {
            return "not pangram"
        }
    }

    return "pangram"

}


//console.log(pangrams('We promptly judged antique ivory buckles for the next prize'))
console.log(pangrams('We promptly judged antique ivory buckles for the prize'))