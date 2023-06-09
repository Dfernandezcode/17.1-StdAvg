const prompt = require("prompt-sync")();
const fs = require("fs");

const filePath = prompt("input filepath to process: ");

const calculateAverageGrade = (filePath, callback) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      callback(err);
    } else {
      const grades = JSON.parse(data);
      const students = {};

      grades.forEach((grade) => {
        if (!students[grade.name]) {
          students[grade.name] = {
            total: grade.mark,
            count: 1,
          };
        } else {
          students[grade.name].total += grade.mark;
          students[grade.name].count++;
        }
      });

      const averages = Object.keys(students).map((name) => {
        const avg = students[name].total / students[name].count;
        return { name, average: avg };
      });

      // Sort averages array by the average property in descending order
      averages.sort((a, b) => b.average - a.average);

      // Write the averages array to a new JSON file
      fs.writeFile("averages.json", JSON.stringify(averages), (err) => {
        if (err) {
          callback(err);
        } else {
          callback(null, averages);
        }
      });
    }
  });
};

calculateAverageGrade(filePath, (err, result) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("Average grades:", result);
  }
});
