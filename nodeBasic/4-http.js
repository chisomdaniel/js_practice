import {createServer} from 'node:http';

export let app = createServer((request, response)=>{
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Hello ALX!");
    response.end();
})

app.listen(1245);
