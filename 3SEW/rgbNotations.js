import {hexToRgb, rgbFunctionToHex, rgbToHex} from "./modules.js";


class RgbNotations {
    color;


    constructor(color) {

        const regexRGB = /rgb\(\d{1,3}%?,\d{1,3}%?,\d{1,3}%?\)/
        const regexHex = /#[0-9A-Fa-f]{6}/


        if (regexRGB.test(color)) {

            this.color = rgbFunctionToHex(color);

        } else if (regexHex.test(color)) {

            this.color = color;
        } else {
            throw Error("falsche Eingabe bitte nur hex odder string format")
        }
    }

    getHex() {
        return this.color;
    }

    getRGB() {
        return hexToRgb(
            this.color, false
        )
    }

    getRGBPercent() {
        return hexToRgb(
            this.color, true
        )
    }
}

export default RgbNotations;