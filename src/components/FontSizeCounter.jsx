import React, { useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useCanvasContext } from "../context/context";
import { useCustomization } from "../hooks/useCustomization";

const FontSizeCounter = () => {
  const { fontSize, setFontSize } = useCanvasContext();
  const { changeTextSize } = useCustomization();

  useEffect(() => {
    changeTextSize();
  }, [fontSize]);

  const increment = () => {
    if (fontSize >= 50) {
      return setFontSize(50);
    }
    setFontSize((prev) => prev + 1);
  };

  const decrement = () => {
    if (fontSize == 0) return;
    setFontSize((prev) => prev - 1);
  };

  const handleChange = (e) => {
    if (e.target.value <= 0 || isNaN(parseInt(e.target.value))) {
      return setFontSize(0);
    }
    if (e.target.value > 50) {
      return setFontSize(50);
    }
    setFontSize(parseInt(e.target.value));
  };

  return (
    <div className="counter shadow p-2 rounded-full flex gap-[15px]">
      <button onClick={decrement} type="button" className="decrement">
        <FaMinus />
      </button>
      <input
        type="text"
        value={fontSize}
        onChange={handleChange}
        className="w-[50px] border-none outline-none text-center"
      />
      <button onClick={increment} type="button" className="increment">
        <FaPlus />
      </button>
    </div>
  );
};

export default FontSizeCounter;
