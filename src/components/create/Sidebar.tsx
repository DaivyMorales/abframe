import { useSidebar } from "@/store/SidebarStore";
import { ChangeEvent, useRef, useEffect, useState } from "react";
import { HiOutlineUser } from "react-icons/hi";
import { useSession } from "next-auth/react";

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
  } = useSidebar();

  const [errorTitleLenght, setErrorTitleLenght] = useState(false);

  const divRef = useRef<HTMLDivElement>(null);

  const { data: session, status } = useSession();

  useEffect(() => {
    divRef.current!.focus();
  }, []);

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
    <div className="h-full w-[350px] bg-[#242424] p-5">
      {status === "authenticated" && (
        <div className="flex flex-col items-start justify-start gap-3">
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
          {/* LETTERS */}
          <h4>Letters</h4>
          <div className="flex gap-2">
            <button
              onClick={() => setLetters(false)}
              className={`${!letters ? buttonActiveStyle : "border-neutral-600 text-neutral-600"} flex w-[50px] items-center justify-center gap-1 rounded-xl border-[1px] `}
            >
              <div
                className={`${!letters ? "bg-emerald-600" : "bg-neutral-700"} h-full w-[2px] -rotate-45 `}
              ></div>
            </button>
            <button
              onClick={() => setLetters(true)}
              className={`${letters ? buttonActiveStyle : "border-neutral-600 text-neutral-600"} flex w-[50px] flex-col items-center justify-center rounded-xl border-[1px]  px-1 py-1`}
            >
              <p className="text-alignment-button">ab</p>
            </button>
          </div>
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
          {/* CREDITS */}
          <h4>Credits</h4>
          <div className="flex gap-2">
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
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
