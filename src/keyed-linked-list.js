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

    

  }