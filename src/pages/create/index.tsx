import Sidebar from "@/components/create/Sidebar";
import { LuImage } from "react-icons/lu";

function CreatePage() {
  return (
    <div className="flex h-screen w-screen items-center justify-between">
      <div className="flex h-full w-full flex-col items-center justify-center gap-3">
        {/* <h2>A/B Test Templates</h2> */}
        <div className="flex justify-center gap-4">
          <div className="flex items-center justify-center gap-3 rounded-xl bg-[#242424] p-4 shadow-lg">
            <div className="h-[100px] w-[100px] rounded-xl border-[3px] border-dashed border-neutral-700 flex justify-center items-center">
                <p className="font-semibold text-neutral-500 text-lg">A</p>
            </div>
            <div className="h-[60px] w-[2px] bg-neutral-500" />
            <div className="h-[100px] w-[100px] rounded-xl border-[3px] border-dashed border-neutral-700 flex justify-center items-center">
                <p className="font-semibold text-neutral-500 text-lg">B</p>
            </div>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default CreatePage;
