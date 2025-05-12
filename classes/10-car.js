export class Car {
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    cloneCar() {
        return new this.constructor();
    }
}


// class TestCar extends Car {}

// const tc1 = new TestCar("Nissan", "Turbo", "Pink");
// const tc2 = tc1.cloneCar();

// console.log(tc1);
// console.log(tc1 instanceof TestCar);

// console.log(tc2);
// console.log(tc2 instanceof TestCar);

// console.log(tc1 == tc2);
