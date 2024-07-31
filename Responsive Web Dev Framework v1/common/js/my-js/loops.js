// LOOPS


// FOR LOOP----
////when you need to access the index of a variable inside your loop

for (initialExpression; conditional; incrementExpression) {
    statement;
};


// FOR...OF LOOP----
////when you need to iterate over an object (like an array), and you don't need to access the index of a variable, but just want to iterate over an iterable from start to finish

for (variable of iterable) {
    statement;
};


// FOR...IN LOOP----
////when you need to iterate over an object literal (an non-iterable object), and you don't need to access the index of a variable
////the variable ends up accessing the 'key' in each 'key: value' pair
////the object literals are not iterable because each key is not an index number, but rather a 'string'

for (variable in nonIteratable) {
    statement;
};


// WHILE LOOP----

let initialExpression;
while(conditional) {
    incrementExpression;
    statement; //before or after increment
};


// BREAK----
////place inside of any loop
if (conditional) {
    break;
}