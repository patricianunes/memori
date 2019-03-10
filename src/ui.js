// drawUI :: State -> string
export const drawUI = state => `<div class="board">${drawBoard(state)}</div>`;

const drawBoard = state => {
  return state.board
    .map((row, rowIndex) =>
      row.map(
        (column, columnIndex) =>
          `<div
          class="spot ${column.isOpen ? "is-open" : "is-closed"}"
          data-position="${rowIndex}, ${columnIndex}"
          data-is-open="${column.isOpen}"
        >${column.card}</div>`
      )
    )
    .flat()
    .join("");
};
