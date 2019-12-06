'use strict'

// Part 1
// ======

let orbits = {};

function fillOrbits(input) {
    const orbitStrings = input.split("\n");
    orbitStrings.forEach(orbitString => {
        const [centerMass, orbiter] = orbitString.split(')');
        if (!orbits[orbiter]) {
            orbits[orbiter] = {children: []};
        }
        if (!orbits[centerMass]) {
            orbits[centerMass] = {children: []};
        }
        orbits[centerMass].children.push(orbiter);
    });
}

function recursiveCount(mass, level) {
    let count = level;
    for (const child of orbits[mass].children) {
        count += recursiveCount(child, level + 1);
    }
    return count;
}

const part1 = input => {
    fillOrbits(input);
    return recursiveCount('COM', 0);
};

// Part 2
// ======

const part2 = input => {
    return input
};

module.exports = {part1, part2};
