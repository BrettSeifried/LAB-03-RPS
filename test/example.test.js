import { didUserWin } from '../functions.js';
// import { getRandomThrow} from '../functions.js';
// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('user rock, comp scissor = Win', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'scissor');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('user paper, comp scissor = Loss', (expect) => {
    const expected = false;
    const actual = didUserWin('paper', 'scissor');
    expect.equal(actual, expected);
});

// test('test getRandomThrow', (expect) => {
//     const expected = getRandomThrow;
//     const actual = getRandomThrow;
//     expect.notequal(actual, expected);
// });