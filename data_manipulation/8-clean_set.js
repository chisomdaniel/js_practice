function cleanSet(set, startString) {
    let newString = '';
    for (let i of set) {
        if (startString && i.startsWith(startString)) {
            newString += newString ? '-': '';
            newString += i.slice(i.indexOf(startString.slice(-1)) + 1);
        }
    }
    return newString;
}


console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
