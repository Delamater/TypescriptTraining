//String
let myName = 'Bob';
// myName = 12;

// number
let myAge = 43.4;
// myAge = 'Bob';

// boolean
let hasHobbies = true;
// hasHobbies = 1;

// assign types
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';

// array
// let hobbies = ["Music", "Wood working"];
// console.log(hobbies[0]);
// console.log(typeof hobbies);
// // hobbies = [100]; // Type 'number' is not assignable to type 'string'.
// hobbies = ["A string"]; // Works

let hobbies: any[] = ["Music", "Wood working"];
hobbies = [100];
// hobbies = 100;

// tuples (just arrays with mixed types and limited number of items )
let address:[string,number] = ["Super street", 99];

// enum (makes numbers more expressive)
enum Color {
    Gray, 
    Green = 100,
    Blue
}

let myColor: Color = Color.Blue;
console.log(myColor); // Shows a value of 1 or 101

// any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3};
console.log(car);

// functions
function returnMyName(): string {
    return myName;
    // return myAge; // shows an error beacuse it was marked as a string
}

console.log(returnMyName());

// void
function sayHello(): void {
    console.log("Hello!");
    // return myName; // shows an error because of void designation
}

// arguement types
function multiply(value1: number,value2: number): number {
    return value1 * value2;
}

// console.log(multiply(2, 'Bob')); // error because parameters were typed in the function
console.log(multiply(10,2));

// function types
let myMultiply: (val1: number, val2: number) => number ;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5,2));