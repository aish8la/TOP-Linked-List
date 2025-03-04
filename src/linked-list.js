class LinkedList {
    #head = null;
    #tail = null;
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}