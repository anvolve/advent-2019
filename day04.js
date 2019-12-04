'use strict'

// Part 1
// ======

function findSolution(input, isValidPassword) {
    const range = input.split('-');
    const lowest = parseInt(range[0]);
    const highest = parseInt(range[1]);
    let counter = 0;

    for (let i = lowest; i <= highest; i++) {
        if (isValidPassword((i).toString(10).split(""))) {
            counter++;
        }
    }
    return counter;
}

const hasNoDecrease = digits => (!(digits[0] > digits[1] || digits[1] > digits[2] || digits[2] > digits[3] || digits[3] > digits[4] || digits[4] > digits[5]));

const part1 = input => {
    return findSolution(input, isValidPassword);

    function isValidPassword(digits) {
        const hasDouble = (digits[0] === digits[1] || digits[1] === digits[2] || digits[2] === digits[3] || digits[3] === digits[4] || digits[4] === digits[5]);
        return hasDouble && hasNoDecrease(digits);
    }
};

// Part 2
// ======

const part2 = input => {
    return findSolution(input, isValidPassword);

    function isValidPassword(digits) {
        const hasDoubleNotTriple = (
            (digits[0] === digits[1] && digits[1] !== digits[2])
            || (digits[1] === digits[2] && digits[0] !== digits[1] && digits[2] !== digits[3])
            || (digits[2] === digits[3] && digits[1] !== digits[2] && digits[3] !== digits[4])
            || (digits[3] === digits[4] && digits[2] !== digits[3] && digits[4] !== digits[5])
            || (digits[4] === digits[5] && digits[3] !== digits[4]));
        return hasDoubleNotTriple && hasNoDecrease(digits);
    }
};

module.exports = {part1, part2};