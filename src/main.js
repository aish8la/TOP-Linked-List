import { LinkedList } from "./linked-list.js";
import { KeyedLinkedList } from "./keyed-linked-list.js";

// example uses class syntax - adjust as necessary
const list = new LinkedList();
const keyedList = new KeyedLinkedList();

// list.append("dog");
// list.append("cat");
// list.append("parrot");
// list.append("hamster");
// list.append("snake");
// list.append("turtle");
// console.log(list.toString());

keyedList.append("dog", "dog");
keyedList.append("cat","cat");
keyedList.append("parrot", "parrot");
keyedList.append("hamster", "hamster");
keyedList.append("snake", "snake");
keyedList.append("turtle", "turtle");
console.log(keyedList.toString());
