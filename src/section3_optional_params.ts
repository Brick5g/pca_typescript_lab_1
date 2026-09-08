// Write a function with one required and one optional parameter
// Hint: Use ? for optional parameters or provide a default value

// Your code here 👇

function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}
