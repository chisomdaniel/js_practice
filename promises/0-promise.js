function getResponseFromAPI() {
    return Promise.resolve();
}

const response = getResponseFromAPI();
console.log(response instanceof Promise);
