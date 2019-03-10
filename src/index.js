import { createNewGame, play } from "./core";
import { drawUI } from "./ui";

window.MEMORI = {
  state: createNewGame(["🍗", "⚡️"], { row: 2, column: 2 })
};

const updateState = state => {
  window.MEMORI.state = state;
};

const $app = document.querySelector("#app");
const $canvas = document.querySelector("#canvas");
const $playButton = document.querySelector("#play");

const draw = state => {
  updateState(state);
  const html = drawUI(state);
  $canvas.innerHTML = html;
  $app.classList.add("is-playing");
  attachEvents();
};

const start = () => {
  draw(window.MEMORI.state);
};

const attachEvents = () => {
  const $spots = app.querySelectorAll(".spot");
  Array.from($spots).forEach($spot => {
    const position = $spot
      .getAttribute("data-position")
      .replace(/\s/, "")
      .split(",");
    const row = position[0];
    const column = position[1];

    $spot.addEventListener("click", _ => {
      const state = play(window.MEMORI.state, {
        type: "PLAY",
        payload: {
          row: parseInt(row, 10),
          column: parseInt(column, 10)
        }
      });
      draw(state);
    });
  });
};

(() => {
  $playButton.addEventListener("click", start, false);
})();
