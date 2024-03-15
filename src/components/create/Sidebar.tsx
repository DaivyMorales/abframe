import { useSidebar } from "@/store/SidebarStore";

function Sidebar() {
  const { alignment, setAlignment } = useSidebar();

  const buttonAlignmentStyle = "border-emerald-500 text-emerald-300";

  return (
    <div className="h-full w-[350px] bg-[#242424] p-5">
      <div className="flex flex-col items-start justify-start gap-3">
        <h3>Alignment</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setAlignment("flex")}
            className={`${alignment === "flex" ? buttonAlignmentStyle : "border-neutral-600 text-neutral-600"} flex w-[50px] items-center justify-center gap-1 rounded-xl border-[1px]  px-2 py-1`}
          >
            <p className="text-alignment-button">a</p>
            <div className="h-[13px] w-[2px] rounded-full bg-neutral-600"></div>
            <p className="text-alignment-button">b</p>
          </button>
          <button
            onClick={() => setAlignment("flex flex-col")}
            className={`${alignment === "flex flex-col" ? buttonAlignmentStyle : "border-neutral-600 text-neutral-600"} flex w-[50px] flex-col items-center justify-center rounded-xl border-[1px]  px-2 py-1`}
          >
            <p className="text-alignment-button">a</p>
            <div className="h-[2px] w-[13px] rounded-full bg-neutral-600"></div>
            <p className="text-alignment-button">b</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
