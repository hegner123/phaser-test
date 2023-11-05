const GameWindow = {
  width: window.visualViewport?.width,
  height: window.visualViewport?.height,
  xCenter: window.visualViewport?.width ? window.visualViewport?.width / 2 : 0,
  yCenter: window.visualViewport?.height
    ? window.visualViewport?.height / 2
    : 0,
};

export default GameWindow;
