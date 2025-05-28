const request = require('request');

let res = request('http://127.0.0.1:8000/', (error, response, body)=>{
    // console.error('error: ', error);
    // console.log('body: ', body);
    let json = JSON.parse(body);
    // console.log(json);

    // for (let i of json.characters) {
    //     request(i, (error, response, body)=>{
    //         let character = JSON.parse(body)
    //         console.log(character.name);
    //     })
    // }
})

console.log(res);
