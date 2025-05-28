class ALXClass {
    constructor(size, location) {
        this._size = size;
        this._location = location;
    }

    valueOf() {
        return this._size;
    }

    toString() {
        return this._location;
    }
}

const hc = new ALXClass(12, "Mezzanine")
console.log(Number(hc));
console.log(String(hc));
