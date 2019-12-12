'use strict';

const arr2d = [
    [1, 2],
    [3, 4],
    [5, 6]
];
const arr3d = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];

function flattenArray2d(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let x = 0; x < arr[i].length; x++) {
            newArr.push(arr[i][x])
        }
    }

    console.log(newArr);
    return newArr;
}

function flattenArray3d(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        for (let x = 0; x < arr[i].length; x++) {
            for (let y = 0; y < arr[x].length; y++) {
                newArray.push(arr[i][x][y]);
            }
        }
    }

    console.log(arr);
    return newArray;
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
    flattenArray2d,
    flattenArray3d,
};