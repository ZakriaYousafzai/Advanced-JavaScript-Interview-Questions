// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

function magicalSortingHat(studentNames) {

  // Create an object to store sorted students
  const sortedStudents = {
    Gryffindor: [],
    Hufflepuff: [],
    Ravenclaw: [],
    Slytherin: [],
  };

  // Loop through each student name
  studentNames.forEach((student) => {
    const nameLength = student.length;

    // Assign student to a house based on name length
    if (nameLength < 6) {
      sortedStudents.Gryffindor.push(student);
    } else if (nameLength < 8) {
      sortedStudents.Hufflepuff.push(student);
    } else if (nameLength < 12) {
      sortedStudents.Ravenclaw.push(student);
    } else {
      sortedStudents.Slytherin.push(student);
    }
  });

  return sortedStudents;
}


const students = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Draco Malfoy", "Luna Lovegood", "Neville Longbottom", "William", "Max"];
const sorted = magicalSortingHat(students);

console.log(sorted);
