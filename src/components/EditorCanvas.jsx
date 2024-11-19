import React, { useEffect, useRef } from "react";
import * as fabric from "fabric";
import { useCanvasContext } from "../context/context.jsx";
import { useCustomization } from "../hooks/useCustomization.js";
import UndoRedo from "../helper/UndoRedo.js";

const EditorCanvas = () => {
  const canvasEl = useRef(null);
  const { setUR, setFabricCanvas, setSelectedText } = useCanvasContext();
  const { handleTextSelection } = useCustomization();

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasEl.current, {
      height: canvasEl.current.clientHeight,
      width: canvasEl.current.clientWidth,
    });
    const ur = new UndoRedo(canvas);
    setUR(ur);
    setFabricCanvas(canvas);

    canvas.on("object:added", ur.updateState());
    canvas.on("object:removed", ur.updateState());
    canvas.on("object:modified", ur.updateState());

    canvas.on("selection:created", handleTextSelection);
    canvas.on("selection:updated", handleTextSelection);
    canvas.on("selection:cleared", () => setSelectedText(null));

    return () => {
      setFabricCanvas(null);

      canvas.off("selection:created", handleTextSelection);
      canvas.off("selection:updated", handleTextSelection);
      canvas.off("selection:cleared", () => setSelectedText(null));

      canvas.dispose();
    };
  }, [setFabricCanvas]);

  return (
    <section className="min-h-[500px] bg-gray-200 w-full flex justify-center px-2">
      <div className="max-w-[100%] w-[600px] bg-gray-400">
        <canvas ref={canvasEl} className="w-full h-full"></canvas>
      </div>
    </section>
  );
};

export default EditorCanvas;
