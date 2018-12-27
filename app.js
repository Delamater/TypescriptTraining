//String
var myName = 'Bob';
// myName = 12;
// number
var myAge = 43.4;
// myAge = 'Bob';
// boolean
var hasHobbies = true;
// hasHobbies = 1;
// assign types
var myRealAge;
myRealAge = 27;
// myRealAge = '27';
// array
// let hobbies = ["Music", "Wood working"];
// console.log(hobbies[0]);
// console.log(typeof hobbies);
// // hobbies = [100]; // Type 'number' is not assignable to type 'string'.
// hobbies = ["A string"]; // Works
var hobbies = ["Music", "Wood working"];
hobbies = [100];
// hobbies = 100;
// tuples (just arrays with mixed types and limited number of items )
var address = ["Super street", 99];
// enum (makes numbers more expressive)
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor); // Shows a value of 1 or 101
// any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
    // return myAge; // shows an error beacuse it was marked as a string
}
console.log(returnMyName());
// void
function sayHello() {
    console.log("Hello!");
    // return myName; // shows an error because of void designation
}
// arguement types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 'Bob')); // error because parameters were typed in the function
console.log(multiply(10, 2));
// function types
var myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
