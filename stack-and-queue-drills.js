'use strict';

const Stack = require('./stack');
const starTrek = new Stack();
const starTrek2 = new Stack();

// const Queue = require('./queue');
// const queue = new Queue();
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

// starTrek2.push('Kirk');
// starTrek2.push('Spock');
// starTrek2.push('McCoy');
// starTrek2.push('Scotty');


console.log(JSON.stringify(starTrek, null, 2));
//const peek = stack => console.log(stack.top.data);


const displayStack = stack => {
  if(!stack.top) return null;

  while(stack.top!==null){
    let lastItem = stack.pop(); console.log(lastItem);
  }
  
  return;
};


//console.log(displayStack(starTrek) === displayStack(starTrek2));

starTrek.pop();
starTrek.pop();
starTrek.push('Scotty');


//peek(starTrek);
//displayStack(starTrek);


const is_palindrome = str => {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const stack1 = new Stack();

  //create and store display of stack1
  for (let i = 0; i < str.length; i ++){
    stack1.push(str[i]);
  }


  const stack2 = new Stack();

  console.log(JSON.stringify(stack1, null, 2));
  // console.log(stack1.pop());
  // console.log(stack1.pop());
  // console.log(stack1.pop());

  // console.log(stack1.pop());
  // console.log(stack1.pop());

  while(stack1.top) {
    let popped = stack1.pop();
    console.log(stack2.push(popped));
    
  }
  ///pop stack1 then push into stack2
  //compare 'str' to newString created

};

is_palindrome('hello');