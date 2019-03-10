// utilities
// -------------------------------------------------------
let i = -1;
const next = () => {
  i = i + 1;
  return i;
};

// API
// -------------------------------------------------------

// createNewGame :: Card[] -> Position -> State
export const createNewGame = (cards, format) => {
  const deck = createDeck(cards); // [ '👩‍💻', '🤯', '👩‍💻', '🤯' ]

  // shuffle :: deck -> deck
  // shuffle(deck)

  const board = createBoard(deck, format); //

  return {
    board,
    isGameOver: false
  };
};

// play :: State -> Action -> State
export const play = (state, action) => {
  switch (action.type) {
    case "PLAY":
      const { row, column } = action.payload;
      let boardCopy = state.board
        .slice()
        .map((r, rIndex) =>
          r.map((c, cIndex) =>
            row === rIndex && column === cIndex ? { ...c, isOpen: true } : c
          )
        );

      const spot = Object.assign({}, boardCopy[row][column]);
      const matched = isThereAMatch(spot, state.board);
      const spotsOpen = state.board.flat().filter(s => s.isOpen);
      const spotsMatched = state.board.flat().filter(s => s.hasMatched);

      if (matched) {
        boardCopy = boardCopy.map(r =>
          r.map(c => (c.card === spot.card ? { ...c, hasMatched: true } : c))
        );
      } else {
        boardCopy = boardCopy.map(r =>
          r.map(c =>
            c.isOpen && !c.hasMatched && spotsOpen.length > spotsMatched
              ? { ...c, isOpen: false }
              : c
          )
        );
      }

      // if open (isOpen?), do nothing
      // open(row, column)

      return {
        ...state,
        board: [...boardCopy],
        isGameOver: boardCopy.flat().every(s => s.hasMatched)
      };
    default:
      return state;
  }
};

// private functions
// -------------------------------------------------------

// createBoard :: Deck -> Board
const createBoard = (deck, format) => {
  const spots = deck.map(makeSpot);
  return breakdown(spots, format);
};

// createDeck :: Card[] -> Card[]
const createDeck = cards => [...cards, ...cards];

// breakdown :: Spot[] -> Position -> Board
const breakdown = (spots, format) => {
  const { row, column } = format;
  const rows = Array.from(new Array(row));
  const columns = Array.from(new Array(column));
  const _spots = rows.map(_ => columns);
  return _spots.map(row => row.map(_ => spots[next()]));
};

// isThereAMatch :: Spot -> Board -> boolean
const isThereAMatch = (spot, board) =>
  board
    .flat()
    .filter(s => spot.card === s.card)
    .some(s => s.isOpen === true);

// makeSpot :: Card -> Spot
const makeSpot = card => ({
  card,
  isOpen: false,
  hasMatched: false
});
