import {createServer} from 'node:http';
import { readFile } from 'node:fs/promises';


export let app = createServer((request, response)=>{
    response.writeHead(200, {'Content-Type': 'text/plain'});
    if (request.url === "/") {
        response.write("Hello ALX!");
        response.end();
    } else if (request.url === "/students") {
        response.write("This is the list of our students\n");

        readFile(process.argv[2], {encoding: 'utf-8'}).then((content)=>{
                
            content = content.trim().split('\n').slice(1);
            response.write(`Number of students: ${content.length}\n`);
    
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
            response.write(`Number of students in CS: ${csList.length}. List: ${csList.join(', ')}\n`)
            response.write(`Number of students in SWE: ${sweList.length}. List: ${sweList.join(', ')}`)
            response.end();
        }).catch((error)=>{
            if (error.code === 'ENOENT') {
                throw new Error("Cannot load the database");
            }
            throw error;
        })
    };
})

app.listen(1245);
