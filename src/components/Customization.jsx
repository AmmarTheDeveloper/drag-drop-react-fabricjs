import React, { useEffect } from "react";
import { FaBold, FaItalic, FaTrash, FaUnderline } from "react-icons/fa";
import { MdFormatAlignCenter } from "react-icons/md";
import FontSizeCounter from "./FontSizeCounter";
import { useCustomization } from "../hooks/useCustomization";
import { useCanvasContext } from "../context/context";

const Customization = () => {
  const { fontFamily, setFontFamily } = useCanvasContext();

  const {
    removeSelectedText,
    changeTextFontWeight,
    changeTextDecoration,
    changeTextFontStyle,
    alignTextCenter,
    changeFontFamily,
  } = useCustomization();

  function handleSelect(e) {
    setFontFamily(e.target.value);
  }

  useEffect(() => {
    changeFontFamily();
  }, [fontFamily]);
  return (
    <div>
      <section className="customization  p-4">
        {/* customizations */}
        <div className=" flex justify-center items-center gap-[30px]">
          <select
            onChange={handleSelect}
            value={fontFamily}
            className="shadow px-4 py-2 rounded-full"
          >
            <option value="serif" disabled>
              Font
            </option>
            <option value="Arial">Arial</option>
            <option value="Sans Serif">Sans Serif</option>
            <option value="Verdana">Verdana</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Georgia">Georgia</option>
            <option value="Courier New">Courier New</option>
          </select>
          <FontSizeCounter />
          {/* formats */}
          <div className="formats flex gap-[20px]">
            <button onClick={removeSelectedText} type="button">
              <FaTrash />
            </button>
            <button onClick={changeTextFontWeight} type="button">
              <FaBold />
            </button>
            <button onClick={changeTextFontStyle} type="button">
              <FaItalic />
            </button>
            <button onClick={alignTextCenter} type="button">
              <MdFormatAlignCenter />
            </button>
            <button onClick={changeTextDecoration} type="button">
              <FaUnderline />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customization;
