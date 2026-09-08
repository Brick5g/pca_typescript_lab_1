// Write a function that accepts multiple types using union types
// Use typeof to check the actual type at runtime

// Your code here 👇
function formatId(id: string | number): string {
  if (typeof id === "string") {
    return id.toUpperCase()
  }

  return id.toString().padStart(5, "0")
}
