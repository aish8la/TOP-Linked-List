export class LinkedList {
    #head = null;
    #tail = null;

    get head() {
        return this.#head;
    }

    get tail() {
        return this.#tail;
    }

    createNode(value, nextNode) {
        return new Node(value, nextNode);
    }

    //Add node to end of list
    append(value) {
        const newNode = this.createNode(value, null);
        if(this.#tail === null) {
            this.#head = this.#tail = newNode;
        } else {
            this.#tail.nextNode = newNode;
            this.#tail = newNode;
        }
    }

    //Add node to start of list
    prepend(value) {
        const newNode = this.createNode(value, this.#head);
        if(this.#head === null) {
            this.#head = this.#tail = newNode;
        } else {
            this.#head = newNode;
        }
    }

    size() {
        let currentNode = this.#head;
        let count = 0;

        while(currentNode !== null) {
            count++;
            currentNode = currentNode.nextNode;
        };

        return count;
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}