export default class Complex {
    constructor(real = 0, imaginary = 0) {
        if (real instanceof Complex) {
            this._real = real.real;
            this._imaginary = real.imaginary;
        }
        else {
            this._real = real;
            this._imaginary = imaginary;
        }
    }
    add(real = 0, imaginary = 0) {
        if (real instanceof Complex) {
            this._real += real.real;
            this._imaginary += real.imaginary;
        }
        else {
            this._real += real;
            this._imaginary += imaginary;
        }
    }
    get real() {
        return this._real;
    }
    get imaginary() {
        return this._imaginary;
    }
    set real(value) {
        this._real = value;
    }
    set imaginary(value) {
        this._imaginary = value;
    }
    toString() {
        if (this._imaginary > 0) {
            return `${this._real}+${this._imaginary}i`;
        }
        if (this._imaginary < 0) {
            return `${this._real}${this._imaginary}i`;
        }
        if (this._imaginary === 0) {
            return `${this._real}+i`;
        }
    }
    static equals(complex1, complex2) {
        return complex1.real === complex2.real && complex1.imaginary === complex2.imaginary;
    }
}
