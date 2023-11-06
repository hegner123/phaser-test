const GameWindow = {
  width: window.visualViewport?.width,
  height: window.visualViewport?.height,
  xCenter: window.visualViewport?.width ? window.visualViewport?.width / 2 : 0,
  yCenter: window.visualViewport?.height
    ? window.visualViewport?.height / 2
    : 0,
};

export const physicsConfig = {
  gravity: { y: 200 },
  speed: 2,
};

let placeholderImageElement = document.createElement("img");
placeholderImageElement.src = "https://via.placeholder.com/150";
placeholderImageElement.id = "placeholder";
placeholderImageElement.style.display = "none";
document.body.appendChild(placeholderImageElement);

export { placeholderImageElement };


export default GameWindow;
