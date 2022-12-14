import React from "react";

export const ColorModeContext = React.createContext({
  mode: "",
  setMode: () => {},
});

export default function ColorModeProvider(props) {
  const [mode, setmode] = React.useState(props.initialMode);

  function toggleMode() {
    if (mode === "dark") setMode("light");
    if (mode === "light") setMode("dark");
  }

  return (
    <ColorModeContext.Provider
      value={{ mode: mode, setMode: setmode, toggleMode: toggleMode }}
    >
      {props.children}
    </ColorModeContext.Provider>
  );
}
