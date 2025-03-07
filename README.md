# Linked List Implementation in JavaScript

## 📌 Overview
This project is a custom implementation of a **singly linked list** in JavaScript. It provides essential linked list operations, including adding, removing, searching, and traversing nodes. The implementation follows an **object-oriented approach**, using **ES6 classes** with **encapsulation** for better maintainability.

## 🚀 Features
- **Appending**: Add a node to the end of the list.
- **Prepending**: Add a node to the beginning of the list.
- **Size Calculation**: Get the number of nodes in the list.
- **Access by Index**: Retrieve a node at a specific position.
- **Remove Operations**:
  - Remove the last node (`pop`).
  - Remove a node at a given index (`removeAt`).
- **Search Operations**:
  - Check if a value exists (`contains`).
  - Find the index of a specific value (`find`).
- **Insertion at an Index**: Insert a node at a specific position.
- **String Representation**: Convert the list to a formatted string (`toString`).

## 🛠️ Installation
No external dependencies are required. To use this implementation:

1. Clone the repository or copy the `linked-list.js` file.
2. Import the `LinkedList` class in your JavaScript project:

```js
import { LinkedList } from './linked-list.js';
```

## 📜 Usage
### 1️⃣ Create a Linked List
```js
const list = new LinkedList();
```

### 2️⃣ Add Nodes
```js
list.append(10); // Adds 10 to the end
list.append(20); // Adds 20 after 10
list.prepend(5); // Adds 5 to the beginning
```

### 3️⃣ Get List Size
```js
console.log(list.size()); // Outputs: 3
```

### 4️⃣ Find Nodes by Index
```js
console.log(list.at(1)); // Outputs: Node containing 10
```

### 5️⃣ Remove Nodes
```js
list.pop(); // Removes last node (20)
list.removeAt(0); // Removes first node (5)
```

### 6️⃣ Check if a Value Exists
```js
console.log(list.contains(10)); // true
console.log(list.contains(50)); // false
```

### 7️⃣ Convert to String
```js
console.log(list.toString()); // "( 10 ) -> null"
```

## 🧪 Edge Cases Handled
- Removing the last node properly updates both `head` and `tail`.
- Removing from an empty list does nothing.
- Searching for an index out of bounds returns `null`.
- Inserting at an index greater than the list size is ignored.
- Removing the only node in the list sets both `head` and `tail` to `null`.

## 📌 Future Improvements
- Implement a **doubly linked list** for more efficient `removeAt()` operations.
- Add **reverse()** functionality to reverse the list in place.
- Support **iterators** for `for...of` loops.

---

💡 **Created with The Odin Project assignments in mind!** 🚀

