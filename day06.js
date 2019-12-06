'use strict'

// Part 1
// ======

let orbits = {};

function fillOrbits(input) {
    const orbitStrings = input.split("\n");
    orbitStrings.forEach(orbitString => {
        const [centerMass, orbiter] = orbitString.split(')');
        if (!orbits[orbiter]) {
            orbits[orbiter] = {children: [], parent: ''};
        }
        if (!orbits[centerMass]) {
            orbits[centerMass] = {children: [], parent: ''};
        }
        orbits[centerMass].children.push(orbiter);
        orbits[orbiter].parent = centerMass;
    });
}

function recursiveCount(mass, level) {
    let count = level;
    for (const child of orbits[mass].children) {
        count += recursiveCount(child, level + 1);
    }
    return count;
}

function findAllParents(mass) {
    let parents = [];
    while (mass !== 'COM') {
        mass = orbits[mass].parent;
        parents.push(mass);
    }
    return parents;
}

function findClosestTraversalDistance() {
    let yourParents = findAllParents('YOU');
    let santasParents = findAllParents('SAN');
    const yLength = yourParents.length;
    const sLength = santasParents.length;

    for (let i = 0; i < yLength; i++) {
        for (let j = 0; j < sLength; j++) {
            if (yourParents[i] === santasParents[j]) {
                return i + j;
            }
        }
    }
}

const part1 = input => {
    fillOrbits(input);
    return recursiveCount('COM', 0);
};

// Part 2
// ======

const part2 = input => {
    fillOrbits(input);
    return findClosestTraversalDistance();
};

module.exports = {part1, part2};
