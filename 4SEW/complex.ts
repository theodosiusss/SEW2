export default class Complex {

    private _real : number;
    private _imaginary : number;

    constructor(real: number | Complex = 0,imaginary: number = 0) {
        if(real instanceof Complex){
            this._real = real.real;
            this._imaginary = real.imaginary;
        }
        else {
            this._real = real;
            this._imaginary = imaginary;
        }
    }

    public add (real: number | Complex = 0,imaginary: number = 0) {
        if(real instanceof Complex){
            this._real += real.real
            this._imaginary += real.imaginary

        }
        else {

            this._real += real;
            this._imaginary += imaginary

        }
    }

    get real(): number {
        return this._real;
    }

    get imaginary(): number {
        return this._imaginary;
    }


    set real(value: number) {
        this._real = value;
    }

    set imaginary(value: number) {
        this._imaginary = value;
    }

   public toString(){

        if(this._imaginary > 0) {
            return `${this._real}+${this._imaginary}i`
        }
        if(this._imaginary < 0){
            return `${this._real}${this._imaginary}i`
        }
        if(this._imaginary === 0){
            return `${this._real}+i`

        }
    }

    public static equals(complex1 : Complex, complex2:Complex){

        return complex1.real === complex2.real && complex1.imaginary === complex2.imaginary;

    }
}

