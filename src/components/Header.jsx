import React from "react";
import { GrRedo, GrUndo } from "react-icons/gr";

const Header = () => {
  return (
    <section className="shadow py-2 px-4 flex items-center space-between border-b w-full">
      <div className="text-3xl font-[500]">DevEdit</div>
      <div className="flex-1 flex justify-center gap-[30px]">
        <button type="button" id="btnUndo">
          <GrUndo className="text-2xl" />
          <span className="text-[14px]">Undo</span>
        </button>
        <button id="btnRedo">
          <GrRedo className="text-2xl" />
          <span className="text-[14px]">Redo</span>
        </button>
      </div>
    </section>
  );
};

export default Header;
