class KeyedNode {
    constructor(key = null, value = null, nextNode = null) {
      this.key = key;
      this.value = value;
      this.nextNode = nextNode;
    }
  }

  class KeyedLinkedList {
    #head = null;
    #tail = null;
  
    get head() {
      return this.#head;
    }
  
    get tail() {
      return this.#tail;
    }

    createNode(key, value, nextNode) {
        return new KeyedNode(key, value, nextNode);
      }

    append(key, value) {
        const newNode = this.createNode(key, value, null);
        if (this.#tail === null) {
        this.#head = this.#tail = newNode;
        } else {
        this.#tail.nextNode = newNode;
        this.#tail = newNode;
        }
    }

    prepend(key, value) {
        const newNode = this.createNode(key, value, this.#head);
        if (this.#head === null) {
        this.#head = this.#tail = newNode;
        } else {
        this.#head = newNode;
        }
    }

    size() {
        let currentNode = this.#head;
        let count = 0;
    
        while (currentNode !== null) {
          count++;
          currentNode = currentNode.nextNode;
        }
    
        return count;
    }

    at(index) {
        if (index > this.size() - 1 || index < 0) return null;
    
        let currentNode = this.#head;
        let i = 0;
    
        while (index > i) {
          currentNode = currentNode.nextNode;
          i++;
        }
    
        return currentNode;
    }
    
    pop() {
        if (this.#head === null) return;
    
        let currentNode = this.#head;
    
        if (currentNode.nextNode === null) {
          this.#head = this.#tail = null;
          return;
        }
    
        //Iterates until next node is tail node
        while (currentNode.nextNode.nextNode !== null) {
          currentNode = currentNode.nextNode;
        }
    
        currentNode.nextNode = null;
        this.#tail = currentNode;
    }

    contains(key) {
        let currentNode = this.#head;
    
        while (currentNode !== null) {
          if (currentNode.key === key) return true;
          currentNode = currentNode.nextNode;
        }
    
        return false;
    }

  }