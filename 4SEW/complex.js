"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Complex = /** @class */ (function () {
    function Complex(real, imaginary) {
        if (real === void 0) { real = 0; }
        if (imaginary === void 0) { imaginary = 0; }
        if (real instanceof Complex) {
            this._real = real.real;
            this._imaginary = real.imaginary;
        }
        else {
            this._real = real;
            this._imaginary = imaginary;
        }
    }
    Complex.prototype.add = function (real, imaginary) {
        if (real === void 0) { real = 0; }
        if (imaginary === void 0) { imaginary = 0; }
        if (real instanceof Complex) {
            this._real += real.real;
            this._imaginary += real.imaginary;
        }
        else {
            this._real += real;
            this._imaginary += imaginary;
        }
    };
    Object.defineProperty(Complex.prototype, "real", {
        get: function () {
            return this._real;
        },
        set: function (value) {
            this._real = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Complex.prototype, "imaginary", {
        get: function () {
            return this._imaginary;
        },
        set: function (value) {
            this._imaginary = value;
        },
        enumerable: false,
        configurable: true
    });
    Complex.prototype.toString = function () {
        return "".concat(this._real, " + ").concat(this._imaginary, "i");
    };
    Complex.equals = function (complex1, complex2) {
        return complex1.real === complex2.real && complex1.imaginary === complex2.imaginary;
    };
    return Complex;
}());
exports.default = Complex;
