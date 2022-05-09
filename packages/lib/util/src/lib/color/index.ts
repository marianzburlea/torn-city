export const getNuanceList = (hue: number, sat: number, alpha = 100) => {
  const stepList = [
    25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, 975,
  ];

  return {
    light: stepList.reduce(
      (a, c) => ({
        ...a,
        [`c${c}`]: `hsla(${hue}, ${sat}%, ${100 - c / 10}%, ${Math.abs(
          alpha / 100
        )})`,
      }),
      {}
    ),
    dark: stepList.reduce(
      (a, c) => ({
        ...a,
        [`c${c}`]: `hsla(${hue}, ${sat}%, ${c / 10}%, ${Math.abs(
          alpha / 100
        )})`,
      }),
      {}
    ),
  };
};
