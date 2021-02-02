class Queue {
    constructor() {
        this.data = [8, 3, 4]
    }


    add(record) {
        return this.data.unshift(record)
    }

    remove() {
        return this.data.pop()
    }
}


const one = new Queue()
console.log(one.add(1))
console.log(one.data[0])
console.log(one.remove())
