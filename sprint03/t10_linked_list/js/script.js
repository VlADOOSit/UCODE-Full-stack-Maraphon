class LinkedList {
    constructor(data) {
        this.data = data;
        this.next = 0;
    }
    add(value) {
        let index = 0;
        let temp = {};
        for (const item of this) {
            temp[index] = item;
            index++;
        }
        temp[index] = value;
        this.data = temp;
    }
    remove(value) {
        let index = 0;
        let temp = {};
        let rem_el = false;
        for (const item of this) {
            if (item === value && rem_el == false) {
                rem_el = true;
                continue;
            }
            temp[index] = item;
            index++;
            rem_el = false;
        }
        this.data = temp;
    }
    clear() {
        this.data = {};
    }
    [Symbol.iterator] = () => {
        return {
            current: this.next,
            structure: this.data,
            next() {
                if (this.structure[this.current] == undefined) {
                    return { done: true };
                } 
                else {
                    return { done: false, value: this.structure[this.current++] };
                }
            },
        };
    };
    count() {
        let index = 0;
        for (const item of this) {
            index++;
        }
        return index;
    }
    contains(value) {
        for (const item of this) {
            if (item == value) { return true; }
        }
        return false;
    }
    log() {
        let temp = Array.from(this);
        console.log(temp.join(", "));
    }
}

function createLinkedList(array) {
    return new LinkedList(array);
}