function getFullResponseFromAPI(success) {
    if (success) {
        return Promise.resolve({
            status: 200,
            body: 'Success'
        });
    }
    return Promise.reject('Error: The fake API is not working currently');
}

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));
