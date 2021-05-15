// I want to create a class which works similarly to a stack. A Last in First out array
// It will allow me to store a certain number of calculations at most,
// and remove the oldest calculations once the number starts to be exceeded.
// This will allow athe calculator to keep undoing.

class FixedStack {
    constructor(length, items=[]) {
        this.length = length;
        this.items = Array.isArray(items) ? items.slice(length) : [items];
    }

    get length(){
        return this.length;
    }

    // Retrieve the last element in the stack, i.e. the most recent
    pop(){
        return this.items.pop();
    }

    // Remove the first value in the list and return it
    shift(){
        return this.items.shift();
    }

    // Push an element onto the end of the stack and resize the array <= length
    // Return the first element if it was removed, or null otherwise
    push(element){
        this.items.push(element);
        return (this.items.length > this.length) ? this.items.shift() : null;
    }

}
