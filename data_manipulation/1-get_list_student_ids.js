import getListStudents from "./0-get_list_students.js";

export function getListStudentIds(args) {
    if (args instanceof Array !== true) {
        return [];
    }

    let newList = args.map((value)=> {
        return value.id
    })

    return newList;
}

console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));
