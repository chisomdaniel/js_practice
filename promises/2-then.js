function handleResponseFromAPI(promise) {
    promise.then((value) => {
        return {
            status: 200,
            body: 'success'
        }
    }, (err) => {
        return new Error();
    }).then((value) => {console.log('Got a response from the API', value)})
}


const promise = Promise.resolve();
let out = handleResponseFromAPI(promise);
