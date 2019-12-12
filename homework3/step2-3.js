'use strict';

// Use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
    let result = '';
    if (num < 0) {
        return result;
    } else {
        for (let i = 0; i < num; i++) {
            result += str;
        }
    }


    console.log(str, num, result);

    return result;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// Use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
    let result = '';
    if (num <= 0) {
        return result;
    } else {
        let i = 0;
        while (i < num) {

            result += str;
            i++

        }
    }



    console.log(str, num, result);

    return result;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// Use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
    let result = '';
    if (num <= 0) {
        return result;
    } else {
        let i = 0;
        do {
            i += 1;
            result += str;
        } while (i < num);
    }


    console.log(str, num, result);

    return result;
}

console.log('do-while', repeatStringNumTimesWithDoWhile('abc', 3));

// Do not change or remove anything below this line
/*module.exports = {
    repeatStringNumTimesWithFor,
    repeatStringNumTimesWithWhile,
    repeatStringNumTimesWithDoWhile,
};*/