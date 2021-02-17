const performance = require('perf_hooks').performance;

const words = ['kennedy']

const largeArray = new Array(1000).fill('kennedy')

let findWord = (words) => {
    let t0 = performance.now()
    for (let i = 0; i < words.length; i++) {
      if (words[i] === 'kennedy') {
          console.log("Found Word!!")
      }
    }

    let t1 = performance.now()

    console.log(`Call to find kennedy took ${t1-t0} milliseconds`)
}



findWord(largeArray)