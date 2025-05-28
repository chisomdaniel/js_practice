import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export function handleProfileSignup(firstName, lastName, fileName) {
    return signUpUser(fileName, lastName).then(
        (value)=> {
            return uploadPhoto(fileName).catch((value2) => {
                return [
                    {
                        status: 'passed',
                        value,
                    },
                    {
                        status: 'failed',
                        value: value2,
                    }
                ]
            });
        }
    );
}

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));
handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg").then((value)=>{console.log(value)});

