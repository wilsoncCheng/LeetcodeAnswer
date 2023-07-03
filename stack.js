class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class Stack {
    constructor() {
        this.first = null;
        this.last = null
        this.size = 0
    }
    push(val) {
        let newNode = new Node(val)
        if (this.first) {
            let temp = this.first
            this.first = newNode
            this.first.next = temp
        } else {
            this.first = newNode
            this.last = newNode
        }
        this.size++
        console.log(this)
    }
    pop() {
        if (!this.first) return null
        let temp = this.first
        if (temp == this.last) {
            this.last = null
        }
        this.first = temp.next
        this.size--
        console.log(this)
    }
}
const Stack_test = new Stack
Stack_test.push(1)
Stack_test.push(2)
Stack_test.push(3)
Stack_test.pop()
Stack_test.pop()
Stack_test.pop()
