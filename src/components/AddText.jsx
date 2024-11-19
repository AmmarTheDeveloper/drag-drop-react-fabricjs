import React from "react";
import { TfiText } from "react-icons/tfi";
import { useCanvasContext } from "../context/context.jsx";
import { Textbox } from "fabric";

const AddText = () => {
  const { fabricCanvas } = useCanvasContext();
  function add() {
    if (fabricCanvas) {
      const text = new Textbox("Edit Text", {
        left: 5,
        top: 5,
        fontSize: 20,
        borderColor: "black",
        borderOpacityWhenMoving: 0,
        fontFamily: "serif",
      });
      fabricCanvas?.add(text);
    }
  }
  console.log(fabricCanvas);

  return (
    <section className="border-t p-4">
      <div className="flex justify-center items-center ">
        <button
          onClick={add}
          className="shadow rounded-full px-4 py-2 text-black flex items-center gap-2 bg-gray-100"
        >
          <TfiText />
          Add Text
        </button>
      </div>
    </section>
  );
};

export default AddText;
