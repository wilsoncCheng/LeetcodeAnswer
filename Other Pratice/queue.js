class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    push(val) {
        const newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            let temp = this.last
            this.last = newNode
            temp.next = newNode
        }
        this.size++
        console.log(this)
    }
    shift() {
        if (!this.first) return null
        let temp = this.first
        if (this.first == this.last) {
            this.last = null
        }
        this.first = temp.next
        this.size--
        console.log(this)
    }
}

let newQueue = new Queue
newQueue.push(3)
newQueue.push(1)
newQueue.push(8)
newQueue.shift()
newQueue.shift()
newQueue.shift()