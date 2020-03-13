import preset from "@rebass/preset";

export default {
  ...preset,
  chartFillOpacity: 0.4,
  colors: {
    ...preset.colors,
    background: preset.colors.gray,
    messageBackground: "#0077cc1c"
  },
  fonts: {
    ...preset.fonts,
    body: "'Open Sans', sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace"
  }
};
