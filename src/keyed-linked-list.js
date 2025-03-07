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
  }