import { useSidebar } from "@/store/SidebarStore";

function Sidebar() {
  const { alignment, setAlignment, letters, setLetters } = useSidebar();

  const buttonActiveStyle = "border-emerald-500 text-emerald-300";

  return (
    <div className="h-full w-[350px] bg-[#242424] p-5">
      <div className="flex flex-col items-start justify-start gap-3">
        <h3>Alignment</h3>
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
        <h3>Letters</h3> 
        <div className="flex gap-2">
          <button
            onClick={() => setLetters(false)}
            className={`${!letters ? buttonActiveStyle : "border-neutral-600 text-neutral-600"} flex w-[50px] items-center justify-center gap-1 rounded-xl border-[1px] `}
          >
            <div className={`${!letters ? 'bg-emerald-600' : 'bg-neutral-700' } h-full w-[2px] -rotate-45 `}></div>
          </button>
          <button
            onClick={() => setLetters(true)}
            className={`${letters ? buttonActiveStyle : "border-neutral-600 text-neutral-600"} flex w-[50px] flex-col items-center justify-center rounded-xl border-[1px]  px-1 py-1`}
          >
            <p className="text-alignment-button">ab</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
