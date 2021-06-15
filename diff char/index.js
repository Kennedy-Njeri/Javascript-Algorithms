

const diffChar = (char) => {
    //return char.trim().toLowerCase().split('').sort().join('')
    let newChar = char.split('')

    const arrLetters = []

    let max = 0

    let charMap = {}

    for (let i = 0; i < newChar.length; i++) {
      if (!charMap[newChar[i]]) {
          charMap[newChar[i]] = 1
      } else {
          charMap[newChar[i]]++
      }
    }

    for (let letters in charMap) {
        if (charMap[letters] > max) {
            max = charMap[letters]
            arrLetters.push(letters)
        }
    }


    return {charMap, arrLetters}
}



console.log(diffChar('oomarrr'))