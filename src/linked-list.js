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

    at(index) {

        if(index > (this.size() - 1) || index < 0) return null;

        let currentNode = this.#head;
        let i = 0;

        while(index > i) {
            currentNode = currentNode.nextNode;
            i++;
        } 

        return currentNode;
    }

    pop() {
        if(this.#head === null) return;

        let currentNode = this.#head;

        if (currentNode.nextNode === null) {
            this.#head = this.#tail = null;
            return;
        }

        //Iterates until next node is tail node
        while(currentNode.nextNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }

        currentNode.nextNode = null;
        this.#tail = currentNode;
    }

    contains(value) {
        let currentNode = this.#head;

        while(currentNode !== null) {
            if (currentNode.value === value) return true;
            currentNode = currentNode.nextNode;
        }

        return false;
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}