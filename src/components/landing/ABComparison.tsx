import React from "react";
import { HiBeaker, HiDownload, HiHand, HiPaperAirplane } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

function ABComparison() {
  return (
    <div className="comparison-container flex h-screen flex-col items-center justify-center p-5">
      <div className="relative grid grid-cols-3 w-[600px] gap-4 rounded-xl border-[1px] border-neutral-700 bg-[#212121] p-10 shadow-xl">
        <div className="absolute left-3 top-3 rounded-full border-[1px] border-neutral-700 px-[10px] py-1">
          <h2 className="text-xs font-semibold">1</h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="flex items-center justify-center rounded-full bg-neutral-200 p-3">
            <HiHand color="#212121" />
          </div>
          <h2>Load the images</h2>
        </div>
        <img
          src="https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36"
          className="h-[165px] w-[165px] rounded-lg"
          alt=""
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e024718e2b124f79258be7bc452"
          alt=""
          className="h-[165px] w-[165px] rounded-lg"
        />
      </div>
      <hr className="h-[50px] w-[1px] bg-neutral-700" />

      {/* AB EXAMPLE */}
      <div className="relative grid grid-cols-3 w-[600px] gap-4 rounded-xl border-[1px] border-neutral-700 bg-[#212121] p-10 shadow-xl">
        <div className="absolute left-3 top-3 rounded-full border-[1px] border-neutral-700 px-[9px] py-1">
          <h2 className="text-xs font-semibold">2</h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="rounded-full bg-neutral-200 p-3">
            <HiBeaker color="#212121" size={22} />
          </div>
          <h2>Choose the template</h2>
        </div>
        <div className="col-span-2 flex items-center justify-center rounded-lg bg-white">
          <div className="flex flex-col items-center justify-center gap-3 rounded-l-lg p-10">
            <img
              src="https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36"
              className="h-[90px] w-[90px] rounded-lg"
              alt=""
            />
            <h2 className="text-md xl font-light text-gray-300">A</h2>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 rounded-r-lg p-10 text-black">
            <img
              src="https://i.scdn.co/image/ab67616d00001e024718e2b124f79258be7bc452"
              alt=""
              className="h-[90px] w-[90px] rounded-lg"
            />
            <h2 className="text-md xl font-light text-gray-300 ">B</h2>
          </div>
        </div>
      </div>
      <hr className="h-[50px] w-[1px] bg-neutral-700" />

      {/* BUTTON DONWLOAD */}
      <div className="relative grid grid-cols-3 w-[600px] gap-4 rounded-xl border-[1px] border-neutral-700 bg-[#212121] p-10 shadow-xl">
        <div className="absolute left-3 top-3 rounded-full border-[1px] border-neutral-700 px-[9px] py-1">
          <h2 className="text-xs font-semibold">3</h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="rounded-full bg-neutral-200 p-3">
            <HiPaperAirplane color="#212121" size={22} />
          </div>
          <h2>Share it!</h2>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center gap-2">
          <button className=" flex h-[50px]  w-[200px] items-center justify-center gap-3 rounded-md border-[2px] border-emerald-500 bg-white px-7 py-3 text-[15px] font-semibold text-gray-400 shadow-lg shadow-emerald-900">
            Download
            <HiDownload />
          </button>
          <div className="flex gap-4 rounded-full border-[1px] border-neutral-700 px-3 py-2">
            <FaXTwitter />
            <FaLinkedin />
            <FaInstagram />
            <FaFacebook />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ABComparison;
