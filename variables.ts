// Variable Declaration syntax
// We can declare the variables in four different ways.

// both type and initial value
// only the type
// only the initial value
// without type and initial value



// //Both type and Initial value
// Here, we define both the type and initial value of the variable.

// Syntax:
// let  [Indentifier] : [type-annotation]  = value ;
// var  [Indentifier] : [type-annotation]  = value ;
// const [Indentifier] : [type-annotation]  = value ;


// Example:
// var message: string = "Hello World" 
// var num: number =1000;
 
// console.log(message);
// console.log(num);

// //Only the type
// Only the type is declared. 
// Variable will get the value undefined. The const is not allowed here

// Syntax:
// let  [Indentifier] : [type-annotation];
// var  [Indentifier] : [type-annotation];
//const is not allowed without an initial value

var messageTwo:string;
// console.log(messageTwo);

// only the initial value
// Here, the variables are defined without type, but with an initial value. The Typescript infers the type from the value assigned to it.
// Syntax
 
// let  [Indentifier] = value;
// var  [Indentifier] = value;
// const  [Indentifier] = value; 


// Strict Mode Reserved Words
// The following code is restricted only in strict mode. else allowed. You can enable the strict mode by inserting the "strict": true in the tsconfig.json file.

// const public:string = "Hello Strict mode";
// console.log(public)