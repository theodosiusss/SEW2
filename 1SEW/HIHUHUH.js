// Theodor Widmer , 4Bi


//User Story 1


function convert(amount) {
    const returnMap = new Map()
    let counter = 0;
    const coins = [100, 50, 20, 10, 5, 2, 1]
    if (amount < 0) {
        throw new Error('nur positive werte');
    }
    while (amount > 0) {

        if (amount - coins[counter] >= 0) {

            amount = amount - coins[counter];

            const stringOfCoin = coins[counter].toString()

            if (returnMap.get(stringOfCoin)) {
                returnMap.set(stringOfCoin, returnMap.get(stringOfCoin) + 1)
            } else {
                returnMap.set(stringOfCoin, 1)
            }
        } else {
            counter++;
        }
    }
    return returnMap;
}

console.log(convert(132))

// User case 2

const string1 = "eineM12121212uter helaoe23"
const number = 12317263294

console.log(string1)
console.log(rot13(string1))

console.log(number)
console.log(rot13(number))

function rot13(text) {
    let output = "";
    if (typeof text !== 'string') {
        text = text + "";
    }
    for (let i = 0; i < text.length; i++) {

        if (/^([a-zA-Z])$/.test(text.charAt(i))) {
            output += String.fromCharCode((text.charCodeAt(i)) + 13);
        } else {
            output += ((text.charAt(i)));
        }
    }
    return output;

}


// User Stroy 3

const array1 = ["penis", "andi", "apdi", "1z"]
console.log(sortLexical(array1))

function sortLexical(inputArray) {
    if (Array.isArray(inputArray) && typeof inputArray[0] === "string") {
        return inputArray.sort((a, b) => a.localeCompare(b))

    } else {
        console.error("falscher Datenyp")
        return [];
    }
}

// User Story 4

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array3 = ["hallo"];

console.log(createEvenArray(array2))
console.log(createEvenArray(array3))

function createEvenArray(numberArray) {
    if (Array.isArray(numberArray) && typeof numberArray[0] === "number") {
        return numberArray.filter(number => number % 2 === 0)

    } else {
        console.error("falscher Datenyp")
        return [];
    }
}

console.log(test(createEvenArray, array2, [1]))
console.log(test(createEvenArray, array2, [2, 4, 6, 8, 10]))

// User Story 5
function test(fu, arg, exp) {
    if (typeof fu(arg) === 'object' || typeof exp === "object") {
        return JSON.stringify(fu(arg)) === JSON.stringify(exp)

    }
    return (fu(arg) === exp);
}

// User Story 6
function generate(op) {

    if (op === "*") {
        return ((a, b) => a * b)
    } else if (op === "+") {
        return ((a, b) => a + b)
    } else if (op === "-") {
        return ((a, b) => a - b)
    } else if (op === "/") {
        return ((a, b) => a / b)
    } else {
        console.error("falsches zeichen ( bitte nur +,-,*,/")
    }

}

const mult = generate("*");
const divide = generate("/");

console.log(mult(5, 2));
console.log(divide(5, 2));

