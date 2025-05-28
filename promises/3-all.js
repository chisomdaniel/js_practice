import { uploadPhoto, createUser } from "./utils.js";

function handleProfileSignup() {
    // body firstName lastName
    uploadPhoto().then((value) => {
        createUser().then((value2) => {
            console.log(`${value.body} ${value2.firstName} ${value2.lastName}`);
        }).catch((value)=> {console.log('Signup system offline')});
    }).catch((value)=> {console.log('Signup system offline')});
}

handleProfileSignup();
