export default function getStudentsByLocation(students, city) {
    return students.filter((value)=>{
        return value.location === city;
    })
}

import getListStudents from "./0-get_list_students.js";

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));
