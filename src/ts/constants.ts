const GameWindow = {
  width: window.visualViewport?.width,
  height: window.visualViewport?.height,
  xCenter: window.visualViewport?.width ? window.visualViewport?.width / 2 : 0,
  yCenter: window.visualViewport?.height
    ? window.visualViewport?.height / 2
    : 0,
};

const row = 56;
const leftCode = 37;
const upCode = 38;
const rightCode = 39;
const downCode = 40;

export const keyCodes = {
  left: leftCode,
  up: upCode,
  right: rightCode,
  down: downCode,
};

export const physicsConfig = {
  gravity: { y: 200 },
  speed: 2,
};

export const SPRITE_SHEET = {
  idle: 0,
  idleBounce: row,
  walking: row * 2,
};

let placeholderImageElement = document.createElement("img");
placeholderImageElement.src = "https://via.placeholder.com/150";
placeholderImageElement.id = "placeholder";
placeholderImageElement.style.display = "none";
document.body.appendChild(placeholderImageElement);

export { placeholderImageElement };


export default GameWindow;
