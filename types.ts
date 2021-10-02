// Typescript uses type annotation to specify the data type of the variable, function or function return value. It uses the syntax :[type], where type is the Typescript type. Once you have annotated an identifier to be of a certain type, you can only use it as that Type. The Typescript compiler throws an error if you use the identifier as a different type.


//Using the Type Annotation:
//We anotate type in ts file in the following way:
//1. Declear using "let or var" key word.
//2. Name the variable
//3. Add ":" after the name declearation
//4. Add the data type after the ":"
//5. Add "=" to assign value to your var
//6. Add your var initializer

//Example:
var cities:string[] = ['Lagos', 'Ibadan','India'];

console.log(cities);