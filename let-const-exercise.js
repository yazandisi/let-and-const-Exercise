// Yazan Eldisi / SpringBoard 10.2 / 03.27.2022

// ES5 Global Constants

// var PI = 3.14;
// PI = 42; // stop me from doing this!

/* ES2015 Version */
const PI = 3.14;
PI = 42; // Will not work here.

/*

Quiz: 

What is the difference between var and let?

    You may reassign and redeclare using var, but redeclaring is not allowed with let. Var variables are hoisted, let is block scope.

What is the difference between var and const?

     You can not reassign or redeclare with const, unlike var. Var variables are hoisted, const is block scope.

What is the difference between let and const?

    You can reassign using let, but can not redeclare or reassign with const.

What is hoisting?

    When JS compiler reads a var variable it is pulled to the top of the scope they are declared in. 
    This is why var variables may be accessed before they are even defined.
    The same is true for Function declarations which yields to them being invoked before being defined in the code. 
*/
