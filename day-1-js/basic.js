// // Clousre Examples

function addCounter(){
    let counter = 0; // initially 0
    return function (){ // not naming function anything
        counter+=1;
        return counter;
    }
}


const add = addCounter(); // add is not “just a variable” — it’s actually a function object that carries its own private environment (counter).

add();
console.log(add());
console.log(add());

// //-------------------------------------------------------------------------------------------------------------------------------------------------------

console.log(y);
var y = 3 ;  // the output will be undefined by default js do the hoisting for var varible undefined at top ok not for initializtions


console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 4;

//-------------------------------------------------------------------------------------------------------------------------------------------------------

// asnyc and await are used to handle ansycornus function using promises

async function fetchdata() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data =  await response.json(); // here i forgot await due to which i get promise pending
    //The await keyword is used to wait for a promise to resolve.
    console.log(data);
}
fetchdata();
// i have to call the function to get output

// var has function scope or global scope we can say
// const and let has block scope . const once declare cannot reasign

function demo() {
  if (true) {
    var x = 10;   // function scoped
    let y = 20;   // block scoped
    const z = 30; // block scoped
  }
  console.log(x); // ✅ works (10)
  console.log(y); // ❌ ReferenceError
  console.log(z); // ❌ ReferenceError
}
demo();

