import {hexToRgb, rgbFunctionToHex, rgbToHex} from "./modules.js";
import rgbNotations from "./rgbNotations.js";


// User Story 1
console.log(rgbToHex(255, 120, 102))
console.log(rgbToHex(255, 255, 255))
console.log(rgbFunctionToHex("rgb(187,22%,88)"))
console.log(rgbFunctionToHex("rgb(22%,88)"))
console.log(hexToRgb(rgbFunctionToHex("rgb(187,22%,88)"),true))
console.log(hexToRgb(rgbFunctionToHex("rgb(187,22%,88)"),false))


// User Story 2

//const a = new rgbNotations("sjfsofps")
const b = new rgbNotations("#FFFFff")
const c = new rgbNotations("rgb(187,22,88)")
const d = new rgbNotations("rgb(187,22%,88)")

console.log(b.getHex())
console.log(b.getRGB())
console.log(b.getRGBPercent())

console.log(c.getHex())
console.log(c.getRGB())
console.log(c.getRGBPercent())

console.log(d.getHex())
console.log(d.getRGB())
console.log(d.getRGBPercent())