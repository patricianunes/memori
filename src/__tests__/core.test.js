import { createNewGame, play } from '../core';

const state0 = createNewGame(['👩‍💻', '🤯'], { row: 2, column: 2 });
console.log(state0);

const action0 = {
  type: 'PLAY',
  payload: {
    row: 0,
    column: 1,
  },
};

const state1 = play(state0, action0);
console.log(state1.board.flat());


const state2 = play(state1, {
  type: 'PLAY',
  payload: {
    row: 0,
    column: 0,
  },
});
console.log(state2);
const state2 = play(state1, {
  type: 'PLAY',
  payload: {
    row: 1,
    column: 1,
  },
});
console.log(state2);

const state3 = play(state2, {
  type: 'PLAY',
  payload: {
    row: 0,
    column: 0,
  },
});
console.log(state3.board.flat());

const state4 = play(state3, {
  type: 'PLAY',
  payload: {
    row: 1,
    column: 0,
  },
});
console.log(state4.board.flat());

const state5 = play(state4, {
  type: 'PLAY',
  payload: {
    row: 0,
    column: 1,
  },
});
console.log(state5.board.flat());

const state6 = play(state5, {
  type: 'PLAY',
  payload: {
    row: 1,
    column: 1,
  },
});
console.log(state6);

// createNewGame(['👩‍💻', '🤯', '🧠', '🤰🏻', '😱', '🇧🇷'], { row: 3, column: 4 });
// createNewGame(['👩‍💻', '🤯', '🧠', '🤰🏻', '😱', '🇧🇷', '🐷', '👵🏻'], { row: 4, column: 4 });