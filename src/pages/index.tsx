import React, { useEffect, useRef } from "react";
import { HiMail } from "react-icons/hi";

function index() {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    divRef.current!.focus();
  }, []);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-8">
      <h1 className="text-center">
        Focus on Your Photos, <br /> not the Formatting
      </h1>

      <h3 className="text-center text-gray-400">
        Create visually stunning templates and frames for your image <br />
        comparisons
      </h3>
      <div className="flex flex-col items-center justify-start gap-2">
        <div
          ref={divRef}
          className="focus-div w-[250px] rounded-md border-[1px] border-slate-600 px-3 py-3 flex gap-2 items-center justify-center"
        >
          <HiMail size={15} />
          <input
            type="email"
            placeholder="youremail@abframe.com"
            className="placeholder:text-slate-500"
          />
        </div>
        <button className="flex items-center justify-center gap-3 rounded-md bg-[#FFBE18] px-7 py-3 text-[15px] font-semibold text-[#141616] text-white shadow-sm w-full">
          Join waitlist
        </button>
      </div>
    </div>
  );
}

export default index;
