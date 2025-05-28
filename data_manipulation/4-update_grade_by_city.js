import getListStudents from "./0-get_list_students.js";

function updateStudentGradeByCity(students, city, newGrades) {
    return students.map((value)=>{
        for (let i of newGrades) {
            if (i.studentId === value.id) {
                value.grade = i.grade;
                return value;
            }
        }
        value.grade = 'N/A';
        return value;
    }).filter((value)=>{
        return value.location === city;
    });
}

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));
