import getListStudents from "./0-get_list_students.js";

export function getStudentIdsSum(students) {
    return students.reduce((prev, {id}) => {
        return prev + id;
    }, 0)
}

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);
