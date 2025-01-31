class MyQueue {
    private queue: number[] 

    constructor () {
        this.queue = []
    }

    push(x: number): void {
        this.queue.push(x)
    }

    pop(): number {
        let res = this.queue[0]
        this.queue = this.queue.slice(1);
        return res;
    }

    peek(): number {
        return this.queue[0]
    }

    empty(): boolean {
        return this.queue.length === 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
