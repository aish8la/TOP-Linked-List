export class LinkedList {
    #head = null;
    #tail = null;

    createNode(value, nextNode) {
        return new Node(value, nextNode);
    }

    append(value) {
        const newNode = this.createNode(value, null);
        if(this.#tail === null) {
            this.#head = this.#tail = newNode;
        } else {
            this.#tail.nextNode = newNode;
            this.#tail = newNode;
        }
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}