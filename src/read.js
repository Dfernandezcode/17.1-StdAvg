console.log("---START---");
const fs = require("fs");

// error control!

fs.readFile("./student-grades.json", (error, data) => {
  if (error) {
    console.log("Error reading file.");
    console.log(error);
  } else {
    try {
      const students = JSON.parse(data);
      console.log(students);
    } catch (parseError) {
      console.log("Error parsing file");
      console.log(parseError);
    }
  }

  // Put console.log in callback so it prints at end.
  console.log("---END---");
});
