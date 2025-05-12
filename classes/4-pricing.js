import { Currency } from "./3-currency.js";

export class Pricing {
    constructor(amount, currency) {
        if (typeof amount === 'number') {
            this._amount = amount;
        } else {
            throw TypeError('Amount must be a string');
        }
        if (currency instanceof Currency === true) {
            this._currency = currency;
        } else {
            throw TypeError('Currency must be of type Currency');
        }
    }

    get amount() {
        return this._amount;
    }

    set amount(amount) {
        if (typeof amount === 'number') {
            this._amount = amount;
        } else {
            throw TypeError('Amount must be a string');
        }
    }

    get currency() {
        return this._currency;
    }

    set currency(currency) {
        if (students instanceof Currency === true) {
            this._currency = currency;
        } else {
            throw TypeError('Currency must be of type Currency');
        }
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
}

const p = new Pricing(100, new Currency("EUR", "Euro"))
console.log(p);
console.log(p.displayFullPrice());
