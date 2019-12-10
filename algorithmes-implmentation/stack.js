// Study Refrence 
// https://www.coursera.org/lecture/data-structures/stacks-UdKzQ
// 

class Stack {
  constructor() {
    this.elments = [];
  }

  push(input) {
    this.elments.push(input);
  }

  pop() {
    if (this.isEmpty()) return true;
    this.elments.splice(this.elments.length - 1, 1);
  }

  isEmpty() {
    return this.elments.length == 0;
  }

  showStack() {
    console.log(this.elments);
  }
}

new_stack_object = new Stack();
new_stack_object.push(4);
new_stack_object.showStack();
new_stack_object.push(22);
new_stack_object.showStack();
new_stack_object.pop();
new_stack_object.showStack();

console.log("it is working fine ");
