'use strict';

function createBase(base) {

    const sumBases = (base1) => base + base1
    return sumBases;
}

const addSix = createBase(6);

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

// Do not change or remove anything below this line
module.exports = createBase;