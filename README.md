# Type 'string' is not assignable to type 'number' in TypeScript
This repository demonstrates a common type error in TypeScript where a string is mistakenly assigned to a number type.

## Bug
The `greet` function takes a `person` argument of type string and a `date` argument of type Date. The function logs a greeting message to the console using template literals.

However, if you attempt to pass a number to the `person` parameter, TypeScript will throw an error because the type of the parameter is string and not number.

## Solution
To fix this, you need to either:

1. Change the type of the `person` parameter to `number` if you intend to accept numbers.
2. Change the arguments passed to the function to match the type of parameters in the function.

The solution file demonstrates how to modify the code to resolve the type error.  The improved function can handle strings and numbers appropriately, or you can add type checking to ensure valid types are always passed.