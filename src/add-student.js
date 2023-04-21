const prompt = require("prompt-sync")();

// add students to list
const askForStudents = () => {
  let gradesValid = false;
  let numberGrades = null;

  while (!gradesValid) {
    const nameString = prompt("Input student data: ");
    try {
      numberGrades = parseInt(nameString);
      if (typeof numberGrades === "number" && numberGrades > 0 && numberGrades < 5) {
        gradesValid = true;
      } else {
        console.log("please input student data");
      }
    } catch (error) {
      console.log("please input student data");
    }
  }
};

askForStudents();

// numbers of students to add
