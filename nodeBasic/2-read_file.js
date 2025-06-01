import {readFileSync} from 'node:fs'

function countStudents(path) {
    try {
        let content = readFileSync(path, "utf-8");
        content = content.trim().split('\n').slice(1);
        console.log('Number of students:', content.length);

        let csList = [];
        let sweList = [];
        for (let i of content) {
            let newList = i.split(',');
            if (newList[newList.length-1] === 'CS') {
                csList.push(newList[0]);
            } else if (newList[newList.length-1] === 'SWE') {
                sweList.push(newList[0]);
            }
        }
        console.log(`Number of students in CS: ${csList.length}. List: ${csList.join(', ')}`)
        console.log(`Number of students in SWE: ${sweList.length}. List: ${sweList.join(', ')}`)
    } catch(e) {
        if (e.code === "ENOENT") {
            throw new Error('Cannot load the database');
        }
        throw e;
    }
}

countStudents('database.csv');
