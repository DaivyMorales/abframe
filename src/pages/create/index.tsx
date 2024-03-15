import Sidebar from "@/components/create/Sidebar";
import { useSidebar } from "@/store/SidebarStore";
import { motion, AnimatePresence } from "framer-motion";

function CreatePage() {
  const { alignment } = useSidebar();
  return (
    <div className="flex h-screen w-screen items-center justify-between">
      <div className="flex h-full w-full flex-col items-center justify-center gap-3">
        <div className=" justify-center gap-4">
          <AnimatePresence>
            <motion.div
              animate={alignment === "flex" ? { scale: 0.9 } : { scale: 1 }}
              exit={{ opacity: 0 }}
              className={`${alignment} items-center justify-center gap-3 rounded-xl bg-white p-4 shadow-lg`}
            >
              <div className="flex h-[200px] w-[200px] items-center justify-center rounded-xl">
                <img
                  src="https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36"
                  className="h-[100px] w-[100px] rounded-xl"
                  alt=""
                />
              </div>
              {/* <div
                className={` rounded-full bg-neutral-500 ${alignment === "flex" ? "h-[60px] w-[2px]" : "h-[2px] w-[80px]"}`}
              /> */}
              <h3>or</h3>
              <div className="flex h-[200px] w-[200px] items-center justify-center rounded-xl">
                <img
                  src="https://i.scdn.co/image/ab67616d00001e024718e2b124f79258be7bc452"
                  alt=""
                  className="h-[100px] w-[100px] rounded-xl"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default CreatePage;
