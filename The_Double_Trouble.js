// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function doubleUniqueElements(arr) {
    // Doubles each element in an array, considering consecutive duplicates.
  
    // Args:
    //     arr: A list of numbers.
  
    // Returns:
    //     A new list with each element doubled, treating consecutive duplicates as one.
    
    const result = [];
    let prevSeen = null;
    for (const num of arr) {
      if (num !== prevSeen) {
        result.push(num * 2);
        prevSeen = num;
      } else {
        result.push(num);
      }
    }
    return result;
  }
  

  const originalArray = [1, 2, 2, 3, 4, 4, 5, 6, 6];
  const doubledArray = doubleUniqueElements(originalArray);
  
  console.log("Original array:", originalArray);
  console.log("Doubled array:", doubledArray);
  