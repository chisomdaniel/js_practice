import { uploadPhoto, createUser } from './utils.js'

async function asyncUploadUser() {
    try {
        return {
            photo: await uploadPhoto(),
            user: await createUser(),
        }
    } catch (_) {
        return {
            photo: null,
            user: null,
        }
    }
}

const test = async () => {
    const value = await asyncUploadUser();
    console.log(value);
};

test();
