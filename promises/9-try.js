import divideFunction from "./8-try.js";

function guardrail(mathFunction) {
    let queue = [];
    try {
        queue.push(mathFunction());
    } catch (error) {
        queue.push('Error: ' + error.message);
    }
    queue.push('Guardrail was processed');

    return queue;
}

console.log(guardrail(() => { return divideFunction(10, 2)}));
console.log(guardrail(() => { return divideFunction(10, 0)}));
