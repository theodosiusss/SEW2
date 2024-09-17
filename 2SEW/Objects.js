// User Story 1

const x = {
    y: {
        z: 42,
        z2: 42
    }
}

console.log(x.y.z)

const v = {
    v() {
        return {v: 42}
    }
}

console.log(v.v().v)

function numberMembers(obj) {
    return Object.keys(obj).length
}

function equals(obj1, obj2) {
    if (numberMembers(obj1) === numberMembers(obj2)) {
        for (const property of Object.getOwnPropertyNames(obj2)) {
            if (!(obj1.hasOwnProperty(property))) {
                return false;
            }
        }
        return true;
    }
    return false;
}

const a = {
    wuhu: 1,
    wuhi: 1,
    whi: "serer",
    whwe: 1,
    sigma: 27
}
const b = {
    wuhu: 1,
    wuhi: 1,
    whwe: 1,
    whi: 1,
    edwhi: 1,
}

console.log(equals(a, b))
console.log(numberMembers(x.y))