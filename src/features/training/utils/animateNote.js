export const animateNote = (
  animating,
  red,
  green,
  blue,
  phase,
  setColorState
) => {
  if (!animating.current) {
    animating.current = true;
    const animationInterval = setInterval(() => {
      if (phase.current === 0) {
        red.current += 20;
        green.current += 20;
        blue.current += 20;
        setColorState({ r: red.current, g: green.current, b: blue.current });
        if (red.current === 200) {
          phase.current = 1;
        }
      } else {
        red.current -= 20;
        green.current -= 20;
        blue.current -= 20;
        setColorState({ r: red.current, g: green.current, b: blue.current });
        if (red.current === 0) {
          phase.current = 0;
          animating.current = false;
          clearInterval(animationInterval);
        }
      }
    }, 25);
  }
};
