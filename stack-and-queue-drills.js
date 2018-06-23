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
const peek = stack => stack.top.data;


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
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const stack1 = new Stack();

  //create and store display of stack1
  for (let i = 0; i < str.length; i ++){
    stack1.push(str[i]);
  }

  for (let i = 0; i < str.length; i ++){
    if (stack1.pop() !== str[i]) {
      return false;
    } 

    return true;
  }


};

// console.log(is_palindrome('hello')); //false
// console.log(is_palindrome('dad')); //true 
// console.log(is_palindrome('A man, a plan, a canal: Panama')); //true

//will take in a string on parens, 
//if and check if there are pairs
//if it's incorrect, returns position in the string

//input '((()))' // okay
//input '()(()' // Extra paren at index 2
//input '((()))(' //Extra paren at index 5
//NEED TO FIX PEEK FUNCTION if no top data exists
const matchingParatheses = (paratheses) =>{
  const openParens = new Stack();
  for(let i = 0; i < paratheses.length; i ++){
    const paren = paratheses[i];
    if (paren === '(') {
      openParens.push(paren);
    } else if  (paren === ')'){
      let top = openParens.top.data;
      //check to see if there are anymore parens to pop
      if (!top){
        return `There is an extra ')' paren at index ${i+1}`;
      } 
      openParens.pop();
    }    
    //check to see if there are left over '('
  }
  if (openParens.top.data){
    return 'There is an extra \'(\' paren';
  }

  return 'No hanging parens';

};

console.log(matchingParatheses('()'));