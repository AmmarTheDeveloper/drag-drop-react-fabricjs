import { createContext, useContext, useState } from "react";

export const CanvasContext = createContext(null);

export const CanvasContextProvider = ({ children }) => {
  const [fabricCanvas, setFabricCanvas] = useState(null);
  const [selectedText, setSelectedText] = useState(null);
  const [fontSize, setFontSize] = useState(20);
  const [fontFamily, setFontFamily] = useState("serif");
  const [ur, setUR] = useState(null);

  return (
    <CanvasContext.Provider
      value={{
        fabricCanvas,
        setFabricCanvas,
        selectedText,
        setSelectedText,
        fontSize,
        setFontSize,
        fontFamily,
        setFontFamily,
        ur,
        setUR,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvasContext = () => useContext(CanvasContext);
