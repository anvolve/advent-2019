'use strict'


function runIntcodeProgram(memory, input) {
    let output;

    let instructionPointer = 0;
    let paramModes;
    let param1;
    let param2;
    let param3;

    while (instructionPointer < memory.length) {
        const instructionCode = memory[instructionPointer];
        const opcode = instructionCode % 100;
        switch (opcode) {
            case 1:
                paramModes = parseParamModes(instructionCode, 3);
                param1 = fillParam(paramModes[0], memory, instructionPointer + 1);
                param2 = fillParam(paramModes[1], memory, instructionPointer + 2);
                param3 = fillParam('1', memory, instructionPointer + 3);

                memory[param3] = param1 + param2;

                instructionPointer += 4;
                break;
            case 2:
                paramModes = parseParamModes(instructionCode, 3);
                param1 = fillParam(paramModes[0], memory, instructionPointer + 1);
                param2 = fillParam(paramModes[1], memory, instructionPointer + 2);
                param3 = fillParam('1', memory, instructionPointer + 3);

                memory[param3] = param1 * param2;

                instructionPointer += 4;
                break;
            case 3:
                paramModes = parseParamModes(instructionCode, 1);
                param1 = fillParam('1', memory, instructionPointer + 1);

                memory[param1] = input;

                instructionPointer += 2;
                break;
            case 4:
                paramModes = parseParamModes(instructionCode, 1);
                param1 = fillParam('1', memory, instructionPointer + 1);

                output = memory[param1];
                console.log(output);

                instructionPointer += 2;
                break;
            case 99:
                instructionPointer = memory.length;
                break;
        }
    }
}

function parseParamModes(instructionCode, amount) {
    let paramModes = [];
    instructionCode = instructionCode.toString();
    const length = instructionCode.length;
    for (let i = 3; i < amount + 3; i++) {
        const paramMode = i > length ? '0' : instructionCode.charAt(length - i);
        paramModes.push(paramMode);
    }
    return paramModes;
}

function fillParam(paramMode, memory, instructionPointer) {
    switch (paramMode) {
        case '1':
            //immediate
            return memory[instructionPointer];
        case '0':
        default:
            //position
            return memory[memory[instructionPointer]];


    }
}

// Part 1
// ======

const part1 = input => {
    let initialMemory = input.split(',').map(Number);
    runIntcodeProgram(initialMemory, 1);
    return 0;
};

// Part 2
// ======

const part2 = input => {
    return input
};

module.exports = {part1, part2};

part1(process.argv[2]);
