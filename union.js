"use strict";
let unionVariable;
unionVariable = 1;
console.log(unionVariable);
unionVariable = "Hello";
console.log(unionVariable);
unionVariable = true;
console.log(unionVariable);
// type assertion allows us to override typescript
// and treat a variable as a diffirent type than it was
// originally declared as
function addWithUnion(arg1, arg2) {
    if (typeof arg1 === 'string' && arg2 === 'string') {
        return arg1.concat(arg2);
    }
    else if (typeof arg1 === 'number' && arg2 === 'number') {
        return arg1 + arg2;
    }
    // type assertion here
    return arg1 + arg2;
}
console.log(addWithUnion('Hello', 'Typescript'));
console.log(addWithUnion('Hello', 2));
console.log(addWithUnion(1, 2));
console.log(addWithUnion(1, "hello"));
