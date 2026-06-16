const students = [
  { name: 'Aarav', marks: 78, passed: true, subject: 'Math' },
  { name: 'Diya', marks: 42, passed: false, subject: 'Science' },
  { name: 'Kabir', marks: 88, passed: true, subject: 'Math' },
  { name: 'Meera', marks: 65, passed: true, subject: 'English' },
  { name: 'Rohan', marks: 38, passed: false, subject: 'Science' },
  { name: 'Isha', marks: 92, passed: true, subject: 'Math' },
  { name: 'Vivaan', marks: 75, passed: true, subject: 'English' },
  { name: 'Anaya', marks: 70, passed: true, subject: 'Science' }
];
const filteredStudents = students.filter(
  student => student.passed && student.marks >= 70
);

console.log("Filtered Students:", filteredStudents);
const totalMarks = filteredStudents.reduce(
  (total, student) => total + student.marks,
  0
);

console.log("Total Marks:", totalMarks);
const subjectToppers = {};

filteredStudents.forEach(student => {
  if (
    !subjectToppers[student.subject] ||
    student.marks > subjectToppers[student.subject].marks
  ) {
    subjectToppers[student.subject] = {
      name: student.name,
      marks: student.marks,
      subject: student.subject
    };
  }
});

const toppers = Object.values(subjectToppers);

console.log("Subject Toppers:", toppers);