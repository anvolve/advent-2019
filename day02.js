'use strict'

// Part 1
// ======

const part1 = input => {
  let memory = input.split(',').map(Number);
  
  memory[1] = 12;
  memory[2] = 2;

  for (let instructionPointer = 0; instructionPointer <= memory.length; instructionPointer += 4) {
    const opcode = memory[instructionPointer];
    const address1 = memory[instructionPointer + 1];
    const address2 = memory[instructionPointer + 2];
    const addressDestination = memory[instructionPointer + 3];
    switch (opcode) {
      case 1:
        memory[addressDestination] = memory[address1] + memory[address2];
        break;
      case 2:
        memory[addressDestination] = memory[address1] * memory[address2];
        break;
      case 99:
        return memory[0];
    }
  }
}

// Part 2
// ======

const part2 = input => {
  return input
}

module.exports = { part1, part2 }
