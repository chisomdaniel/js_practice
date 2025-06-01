import {readFile} from 'node:fs/promises';

export default function countStudents(path) {
    return readFile(path, {encoding: 'utf-8'}).then((content)=>{
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
    }).catch((error)=>{
        if (error.code === 'ENOENT') {
            throw new Error("Cannot load the database");
        }
        throw error;
    })
}

// countStudents("nope.csv")
//     .then(() => {
//         console.log("Done!");
//     })
//         .catch((error) => {
//         console.log(error);
//     });


countStudents("database.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });
console.log("After!");
    