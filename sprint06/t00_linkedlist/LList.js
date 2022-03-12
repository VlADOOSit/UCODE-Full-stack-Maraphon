let LLData = require('./LLData');

module.exports.LList = class LList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    getFirst() {
        return this.head;
    }
    getLast() {
        let check = true;
        for (let tail = this.head; tail; tail = tail.next) {
            if (!tail.next) {
                check = false;
                return tail;
            }
        }
        if(check) {
            return null;
        }
    }
    add(value) {
        let node = new LLData(value)
        if (this.length !== 0) {
            let node = this.head;
            while (node.next) {
                node = node.next;
            }
            this.length++
            node.next = new LLData(value);
        } else {
            this.length++;
            this.head = node;
        }
        
    }
    addFromArray(arrayOfData) {
        for(let i = 0; i < arrayOfData.length; i++) {
            this.add(arrayOfData[i]);
        }
    }
    remove(value) {
        if (!this.head) { return false; }
        let check = true;
        for (let i = this.head; i.next; i = i.next) {
            if (i.next.data === value) {
                i.next = i.next.next;
                this.length--;
                check = false;
                return true;
            }
        }
        if(check) {
            return false;
        }
    }
    removeAll(value) {
        if (!this.head) {
            return;
        }
        for (let i = this.head; i.next; i = i.next) {
            if (i.next.data === value) {
                i.next = i.next.next;
                this.length--;
            }
        }
    }
    contains(value) {
        return [...this].includes(value);
    }
    clear() {
        this.head = null;
    }
    count() {
        return this.length;
    }
    toString() {
        return [...this].join(", ");
    }
    [Symbol.iterator] = function* () {
        for (let q = this.head; q; q = q.next) {
            yield q.value;
        }
    }
    filter(callback) {
        return [...this].filter(callback);
    }
}
