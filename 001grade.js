//QUESTION ONE
function gradeGenerator() {
    // const prompt = require('prompt-sync');

    let studentMarks = prompt('Enter your marks (0-100)');

    // let studentMarks = 80;

    // prompt("Enter student marks (0-100):");

    // Validate input range (0-100)
    if (studentMarks< 0 || studentMarks > 100 || isNaN(studentMarks)) {
        return "Not a number. Please enter a number between 0 and 100.";
    }

    // Determine grade based on marks
    let studentGrade;

    if (studentMarks< 40) {
        studentGrade = 'E';
    } else if (studentMarks >= 40 && studentMarks <= 49) {
        studentGrade = 'D';
    } else if (studentMarks >= 50 && studentMarks <= 59) {
        studentGrade = 'C';
    } else if (studentMarks >= 60 && studentMarks<= 79) {
        studentGrade = 'B';
    } else {
        studentGrade = 'A';
    }

    // return `The student grade is ${studentGrade}.`;

    console.log(`The student garde is ${studentGrade}`);

       // Display grade on HTML page
       let grade = document.getElementById('grade');
       grade.textContent = `The student garde is ${studentGrade}`;
   }