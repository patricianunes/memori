// Position = { row: number, column: number } ;
// Card = string;
// Spot = { card: Card, isOpen: boolean, hasMatched: boolean };
// Board = Spot[][];
// State = { board: Board, isGameOver: boolean };
const initialState = {
  board: [
    [
      { card: "🤯", isOpen: false, hasMatched: false },
      { card: "👩‍💻", isOpen: false, hasMatched: false }
    ],
    [
      { card: "👩‍💻", isOpen: false, hasMatched: false },
      { card: "🤯", isOpen: false, hasMatched: false }
    ]
  ],
  isGameOver: false
};

// Action = { type: string, payload: any };
