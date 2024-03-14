import React from "react";

function Sidebar() {
  return (
    <div className="h-full w-[350px] bg-[#242424] p-5">
     <div className="flex flex-col items-start justify-start gap-3">
     <h3>Alignment</h3>
      <div className="flex gap-2">
      <button className="flex w-[50px] items-center justify-center gap-1 border-[1px] border-neutral-600 py-1 px-2 rounded-xl">
        <p className="text-alignment-button">a</p>
        <div className="bg-neutral-600 w-[2px] h-[13px] rounded-full"></div>
        <p className="text-alignment-button">b</p>
      </button>
      <button className="flex w-[50px] flex-col items-center justify-center border-[1px] border-neutral-600 py-1 px-2 rounded-xl">
        <p className="text-alignment-button">a</p>
        <div className="bg-neutral-600 w-[13px] h-[2px] rounded-full"></div>
        <p className="text-alignment-button">b</p>
      </button>
      </div>
     </div>
    </div>
  );
}

export default Sidebar;
