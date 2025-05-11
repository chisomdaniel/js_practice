class ALXCourse {
    constructor(name, length, students) {
        if (typeof name === 'string') {
            this._name = name;
        } else {
            throw TypeError('Name must be a string');
        }
        if (typeof length === 'number') {
            this._length = length;
        } else {
            throw TypeError('Length must be a number');
        }
        if (students instanceof Array === true) {
            this._students = students;
        } else {
            throw TypeError('Students must be an array');
        }      
    }

    get name() {
        return this._name;
    }

    set name(name) {
        if (typeof name === 'string') {
            this._name = name;
        } else {
            throw TypeError('Name must be a string');
        }
    }

    get length() {
        return this._length;
    }

    set length(length) {
        if (typeof length === 'number') {
            this._length = length;
        } else {
            throw TypeError('Length must be a number');
        }
    }

    get students() {
        return this._students;
    }

    set students(students) {
        if (students instanceof Array === true) {
            this._students = students;
        } else {
            throw TypeError('Students must be an array');
        }
    }
}

const c1 = new ALXCourse("ES6", 1, ["Bob", "Jane"])
console.log(c1.name);
c1.name = "Python 101";
console.log(c1);

try {
    c1.name = 12;
} 
catch(err) {
    console.log(err);
}

try {
    const c2 = new ALXCourse("ES6", "1", ["Bob", "Jane"]);
}
catch(err) {
    console.log(err);
}

