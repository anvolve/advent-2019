'use strict'

const fs = require('fs');
const readline = require('readline');

// Part 1
// ======

const part1 = input => {
  let result = 0;
  const input_values = input.split("\n");
  input_values.forEach(element => {
    element = (Math.floor(element / 3)) - 2;
    result += element;
  });
  return result;
}

// Part 2
// ======

const part2 = input => {
  let result = 0;
  const input_values = input.split("\n");
  input_values.forEach(element => {
    let mass = element;
    let fuel_needed = 0;
    let foo = 0;
    while (true) {
      foo = (Math.floor(mass / 3)) - 2;
      if (foo > 0) {
        fuel_needed += foo;
        mass = foo;
      } else {
        break;
      }
    }
    result += fuel_needed
  });
  return result;
}

module.exports = { part1, part2 }
