import { useSidebar } from "@/store/SidebarStore";
import { ChangeEvent, useRef, useEffect, useState } from "react";
import { HiOutlineUser, HiMenuAlt2, HiMenu, HiMenuAlt3 } from "react-icons/hi";
import { useSession } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import html2canvas from "html2canvas";
import ColorsPalette from "./ColorsPalette";

function Sidebar() {
  const {
    alignment,
    setAlignment,
    letters,
    setLetters,
    separation,
    setSeparation,
    title,
    setTitle,
    font,
    setFont,
    credit,
    setCredit,
    creditAlignment,
    setCreditAlignment,
    colorPalette,
    setColorPalette,
  } = useSidebar();

  const [errorTitleLenght, setErrorTitleLenght] = useState(false);

  const divRef = useRef<HTMLDivElement>(null);

  const { data: session, status } = useSession();

  // useEffect(() => {
  //   divRef.current!.focus();
  // }, []);

  const downloadImage = async () => {
    const divToDownload = document.querySelector(".abpicture");
    if (divToDownload instanceof HTMLElement) {
      const canvas = await html2canvas(divToDownload);
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "image.png";
      link.href = imgData;
      link.click();
    }
  };

  const buttonActiveStyle = "border-emerald-500 text-emerald-300";

  const handleTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (inputValue.length >= 40) {
      setErrorTitleLenght(true);
    } else {
      setErrorTitleLenght(false);
      setTitle(inputValue);
    }
  };

  return (
    <div className="h-full w-[350px] border-l-[1px] border-neutral-700 bg-[#242424] p-5">
      {status === "authenticated" && (
        <div className="flex flex-col items-start justify-start gap-4">
          {/* TITLE */}
          <h4>Title</h4>
          <div className="flex flex-col items-start justify-start gap-1">
            <div
              ref={divRef}
              className={`${title ? (errorTitleLenght ? "border-red-500" : "border-emerald-600") : "border-neutral-600"} focus-div w-[200px] rounded-[6px] border-[1px] bg-[#303030] py-1 pl-3 pr-1`}
            >
              <input
                type="text"
                className={`${errorTitleLenght ? "text-red-400" : "text-white"} text-[14px] font-light placeholder:text-neutral-500`}
                onChange={handleTitle}
                placeholder="What do you prefer?"
              />
            </div>
            {errorTitleLenght && (
              <p className="text-[10px] font-light text-red-500">
                The maximum length for the title is 40 characters.
              </p>
            )}
          </div>
          <div className="h-[1px] w-full rounded-full bg-neutral-700" />
          {/* ALIGNMENT */}
          <h4>Alignment</h4>
          <div className="flex gap-2">
            <button
              onClick={() => setAlignment("flex")}
              className={`${alignment === "flex" ? buttonActiveStyle : "border-neutral-600 text-neutral-600"} flex w-[50px] items-center justify-center gap-1 rounded-xl border-[1px]  px-2 py-1`}
            >
              <p className="text-alignment-button">a</p>
              <div className="h-[13px] w-[2px] rounded-full bg-neutral-600"></div>
              <p className="text-alignment-button">b</p>
            </button>
            <button
              onClick={() => setAlignment("flex flex-col")}
              className={`${alignment === "flex flex-col" ? buttonActiveStyle : "border-neutral-600 text-neutral-600"} flex w-[50px] flex-col items-center justify-center rounded-xl border-[1px]  px-2 py-1`}
            >
              <p className="text-alignment-button">a</p>
              <div className="h-[2px] w-[13px] rounded-full bg-neutral-600"></div>
              <p className="text-alignment-button">b</p>
            </button>
          </div>
          <div className="h-[1px] w-full rounded-full bg-neutral-700" />
          {/* LETTERS */}
          <h4>Letters</h4>
          <div className="flex gap-2">
            <button
              onClick={() => setLetters("not")}
              className={`${letters === "not" ? buttonActiveStyle : "border-neutral-600 text-neutral-600"} flex w-[50px] items-center justify-center gap-1 rounded-xl border-[1px] `}
            >
              <div
                className={`${letters === "not" ? "bg-emerald-600" : "bg-neutral-700"} h-full w-[2px] -rotate-45 `}
              ></div>
            </button>
            <button
              onClick={() => setLetters("ab")}
              className={`${letters === "ab" ? buttonActiveStyle : "border-neutral-600 text-neutral-600"} flex w-[50px] flex-col items-center justify-center rounded-xl border-[1px]  px-1 py-1`}
            >
              <p className="text-alignment-button">ab</p>
            </button>
            <button
              onClick={() => setLetters("12")}
              className={`${letters === "12" ? buttonActiveStyle : "border-neutral-600 text-neutral-600"} flex w-[50px] flex-col items-center justify-center rounded-xl border-[1px]  px-1 py-1`}
            >
              <p className="text-alignment-button">1 2</p>
            </button>
          </div>
          <div className="h-[1px] w-full rounded-full bg-neutral-700" />
          {/* SPACING */}
          <h4>Spacing</h4>
          <div className="flex gap-2">
            <button
              onClick={() => setSeparation("not")}
              className={`${separation === "not" ? buttonActiveStyle : "border-neutral-600 text-neutral-600"} flex w-[50px] items-center justify-center gap-1 rounded-xl border-[1px] `}
            >
              <div
                className={`${separation === "not" ? "bg-emerald-600" : "bg-neutral-700"} h-full w-[2px] -rotate-45 `}
              ></div>
            </button>
            <button
              onClick={() => setSeparation("bar")}
              className={`${separation === "bar" ? buttonActiveStyle : "border-neutral-600 text-neutral-600"} flex w-[50px] items-center justify-center gap-1 rounded-xl border-[1px] `}
            >
              <div
                className={`${separation === "bar" ? "bg-emerald-600" : "bg-neutral-700"} h-full w-[2px]  `}
              ></div>
            </button>
            <button
              onClick={() => setSeparation("or")}
              className={`${separation === "or" ? buttonActiveStyle : "border-neutral-600 text-neutral-600"} flex w-[50px] flex-col items-center justify-center rounded-xl border-[1px]  px-1 py-1`}
            >
              <p className="text-alignment-button">or</p>
            </button>
            <button
              onClick={() => setSeparation("vs")}
              className={`${separation === "vs" ? buttonActiveStyle : "border-neutral-600 text-neutral-600"} flex w-[50px] flex-col items-center justify-center rounded-xl border-[1px]  px-1 py-1`}
            >
              <p className="text-alignment-button">vs</p>
            </button>
          </div>
          <div className="h-[1px] w-full rounded-full bg-neutral-700" />
          {/* FONTS */}
          <h4>Fonts</h4>
          <div className="flex gap-2">
            <button
              onClick={() => setFont("gabarito")}
              className={`font-gabarito ${font === "gabarito" ? buttonActiveStyle : "border-neutral-600 text-neutral-600"} flex w-[50px] flex-col items-center justify-center rounded-xl border-[1px]  px-1 py-1`}
            >
              <p className="text-alignment-button font-bold">Ga</p>
            </button>
            <button
              onClick={() => setFont("inter")}
              className={`font-inter ${font === "inter" ? buttonActiveStyle : "border-neutral-600 text-neutral-600"} flex w-[50px] flex-col items-center justify-center rounded-xl border-[1px]  px-1 py-1`}
            >
              <p className="text-alignment-button font-bold">In</p>
            </button>
            <button
              onClick={() => setFont("lato")}
              className={`font-lato ${font === "lato" ? buttonActiveStyle : "border-neutral-600 text-neutral-600"} flex w-[50px] flex-col items-center justify-center rounded-xl border-[1px]  px-1 py-1`}
            >
              <p className="text-alignment-button font-bold">La</p>
            </button>
          </div>
          <div className="h-[1px] w-full rounded-full bg-neutral-700" />
          {/* CREDITS */}
          <h4>Credits</h4>
          <div className="flex items-center justify-start gap-2">
            <button
              onClick={() => setCredit(false)}
              className={`${!credit ? buttonActiveStyle : "border-neutral-600 text-neutral-600"} flex h-[27px] w-[50px] items-center justify-center gap-1 rounded-xl border-[1px]`}
            >
              <div
                className={`${!credit ? "bg-emerald-600" : "bg-neutral-700"} h-full w-[2px] -rotate-45 `}
              ></div>
            </button>
            <button
              onClick={() => setCredit(true)}
              className={`${credit ? buttonActiveStyle : "border-neutral-600 text-neutral-600"} flex h-[27px] w-[50px] items-center justify-center gap-1 rounded-xl border-[1px]`}
            >
              <div
                className={`${credit ? "text-emerald-500" : "text-neutral-700"}  `}
              >
                {" "}
                <HiOutlineUser />
              </div>
            </button>
            {credit && (
              <>
                <div className="h-[10px] w-[1px] bg-slate-600" />
                <div className="flex items-center justify-start gap-1">
                  <button
                    onClick={() => setCreditAlignment("start")}
                    className={`${creditAlignment === "start" ? buttonActiveStyle : "border-neutral-600 text-neutral-600"} flex h-[27px] w-[30px] items-center justify-center gap-1 rounded-xl border-[1px]`}
                  >
                    <div
                      className={`${creditAlignment === "start" ? "text-emerald-300" : "text-neutral-700"} `}
                    >
                      <HiMenuAlt2 />
                    </div>
                  </button>
                  <button
                    onClick={() => setCreditAlignment("center")}
                    className={`${creditAlignment === "center" ? buttonActiveStyle : "border-neutral-600 text-neutral-600"} flex h-[27px] w-[30px] items-center justify-center gap-1 rounded-xl border-[1px]`}
                  >
                    <div
                      className={`${creditAlignment === "center" ? "text-emerald-300" : "text-neutral-700"} `}
                    >
                      <HiMenu />
                    </div>
                  </button>
                  <button
                    onClick={() => setCreditAlignment("end")}
                    className={`${creditAlignment === "end" ? buttonActiveStyle : "border-neutral-600 text-neutral-600"} flex h-[27px] w-[30px] items-center justify-center gap-1 rounded-xl border-[1px]`}
                  >
                    <div
                      className={`${creditAlignment === "end" ? "text-emerald-300" : "text-neutral-700"} `}
                    >
                      <HiMenuAlt3 />
                    </div>
                  </button>
                </div>
              </>
            )}
          </div>

          {/* BACKGROUND */}
          <div className="h-[1px] w-full rounded-full bg-neutral-700" />
          <h4>Color palette</h4>
          <ColorsPalette />
          {/* <button onClick={() => downloadImage()}>Download</button> */}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
