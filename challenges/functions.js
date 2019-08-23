// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters 
  * that you created
*/
function consume (num1, num2, callback){
  return callback(num1, num2);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(num1, num2){
  return num1 + num2;
}
function multiply(num1, num2){
  return num1 * num2;
}
function greeting(firstName, lastName){
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}


/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

// Although functions are blocked scoped, but they still obey the rule of global and blocked scopes
// think of a function as a car with tinted windows, whoever sits inside the car can see what's is going on outside but not vice versa.
// therefore in this context, nestedfunction() is a car with tinted window, it can access the variables in myFunction which in this case is it's immediate environment.
// nestedFunction() can also access the variables outside the myFunction scope which are in the global scope. (i.e it can make use of the external variable).
// functions can reach out to variables in its environmnt no matter how deeply nested the function is.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();