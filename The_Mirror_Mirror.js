// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

function mirrorString(text) {
//     Creates a mirror image of a string by appending its reversed version.

//   Args:
//       text: The original string.

//   Returns:
//       A new string with the original string appended by its reversed version.

  // Two approaches:

  // 1. Using the split(), reverse(), and join() methods:
  // return text + text.split("").reverse().join("");

  // 2. Using spread syntax and destructuring:
  return text + [...text].reverse().join("");
}

const originalText = "Hello, world!";
const mirroredText = mirrorString(originalText);

console.log("Original text:", originalText);
console.log("Mirrored text:", mirroredText);
  