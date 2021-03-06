"use strict";

const monday = [{
        name: "Write a summary HTML/CSS",
        duration: 180
    },
    {
        name: "Some web development",
        duration: 120
    },
    {
        name: "Fix homework for class10",
        duration: 20
    },
    {
        name: "Talk to a lot of people",
        duration: 200
    }
];

const tuesday = [{
        name: "Keep writing summary",
        duration: 240
    },
    {
        name: "Some more web development",
        duration: 180
    },
    {
        name: "Staring out the window",
        duration: 10
    },
    {
        name: "Talk to a lot of people",
        duration: 200
    },
    {
        name: "Look at application assignments new students",
        duration: 40
    }
];

const maartjesTasks = monday.concat(tuesday);
console.log(maartjesTasks);
const maartjesHourlyRate = 20;

function computeEarnings(tasks, hourlyRate) {
    // Replace this comment and the next line with your code
    //STEP 1-A new array created from the durations
    const durationsInHours = tasks.map(elem => elem.duration / 60);
    //STEP 2- The durations less than 2 hours are filtered out.
    const durationsMoreThan2 = durationsInHours.filter(elem => elem >= 2);
    //STEP 3- Multiply the each duration by a per-hour rate for billing (use €20/hour) and sum it all up.
    const earningsMoreThan2 = durationsMoreThan2.reduce(
        (acc, val) => acc + val * hourlyRate,
        0
    );
    return earningsMoreThan2;
}

// eslint-disable-next-line no-unused-vars
const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);

// add code to convert `earnings` to a string rounded to two decimals (euro cents)

console.log(`Maartje has earned "€${earnings.toFixed(2)}"`);

// Do not change or remove anything below this line
module.exports = {
    maartjesTasks,
    maartjesHourlyRate,
    computeEarnings
};