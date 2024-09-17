
export function rgbToHex(r, g, b) {
    return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}


export function rgbFunctionToHex(rgb) {
    if(/rgb\(\d{1,3}%?,\d{1,3}%?,\d{1,3}%?\)/.test(rgb)) {
        const rgbArray = rgb.substring(rgb.indexOf("(") + 1, rgb.indexOf(")")).split(",");
        for (let i = 0; i < rgbArray.length; i++) {
            if (rgbArray[i].includes("%")) {
                rgbArray[i] = parseInt((rgbArray[i].substring(0, rgbArray[i].length - 1) / 100) * 255)
            }
        }
        return rgbToHex(parseInt(rgbArray[0]), parseInt(rgbArray[1]), parseInt(rgbArray[2]))
    }
    else{
        console.error("falsches Format")
        return ""

    }
}



export function hexToRgb(hex, isPercentage) {
    const s = hex.substring(hex.indexOf("#") + 1, hex.length)
    const a = [];
    if (isPercentage) {
        for (let i = 0; i < s.length; i+=2) {
            a.push(Math.round(((parseInt(s.substring(i,i+2),16))/255)*100) + "%")

        }

    }else {
        for (let i = 0; i < s.length; i += 2) {
            a.push(parseInt(s.substring(i, i + 2), 16))
        }
    }

    return `rgb(${a[0]},${a[1]},${a[2]})`


}

