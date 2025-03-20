/*
Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Fixes have been applied using explicit type conversion methods like Number(), String(), or Boolean().
Annotations explain why each fix works.
*/

// Bug 1: Implicit conversion with subtraction works correctly, so no fix is needed
let result = "5" - 2;  // JavaScript converts "5" (string) to a number implicitly
console.log("The result is: " + result); // Output: 3 ✅ (No fix needed)

// Bug 2: Boolean conversion issue
// "false" (string) is a non-empty string, so it evaluates to true in a Boolean context.
let isValid = Boolean("false");  
if (isValid) {
    console.log("This is valid!"); // Unexpected output ✅
}

// Fix: Explicitly check if the value is the actual boolean false, not just a non-empty string
let isActuallyValid = ("false" === "true"); // Ensures proper validation
console.log("Is actually valid? " + isActuallyValid); // Output: false ✅

// Bug 3: String concatenation instead of addition
let age = "25";
let totalAge = Number(age) + 5;  // Convert "25" (string) to a number explicitly
console.log("Total Age: " + totalAge); // Output: 30 ✅ (Fixes unintended string concatenation)

/*
Part 2: Write Your Own Examples
Includes:
- One example of implicit type conversion.
- One example of explicit type conversion.
- An edge case demonstrating NaN, undefined, or null.
*/

// Implicit Type Conversion Example (Coercion)
let implicitExample = "10" * 2; // JavaScript automatically converts "10" to a number
console.log("Implicit Example:", implicitExample); // Output: 20 ✅

// Explicit Type Conversion Example
let explicitExample = String(100); // Convert number to string explicitly
console.log("Explicit Example:", explicitExample); // Output: "100" ✅

// Edge Case: Null Conversion
let nullConversion = Number(null); // Null converts to 0 when explicitly converted to a number
console.log("Null Conversion:", nullConversion); // Output: 0 ✅

let undefinedConversion = Number(undefined); // Undefined converts to NaN when explicitly converted
console.log("Undefined Conversion:", undefinedConversion); // Output: NaN ✅
