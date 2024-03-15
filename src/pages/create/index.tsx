import Sidebar from "@/components/create/Sidebar";
import { useSidebar } from "@/store/SidebarStore";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function CreatePage() {
  const { alignment, letters, separation } = useSidebar();

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex h-screen w-screen items-center justify-between">
      <div className="flex h-full w-full flex-col items-center justify-center gap-3">
        <div className=" justify-center gap-4">
          <motion.div
            animate={alignment === "flex" ? { scale: 0.9 } : { scale: 1 }}
            className={`${alignment} items-center justify-center gap-3 rounded-xl bg-white p-4 shadow-lg`}
          >
            <div className="flex h-[200px] w-[200px] flex-col items-center justify-center gap-3 rounded-xl">
              <motion.img
                src="https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36"
                className="h-[100px] w-[100px] rounded-xl shadow-lg"
                alt="Example image"
                layout
              />
              <AnimatePresence mode="popLayout">
                {letters ? (
                  <motion.p
                    key={1}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    exit={{ opacity: 0, scale: 0 }}
                  >
                    A
                  </motion.p>
                ) : (
                  <></>
                )}
              </AnimatePresence>
            </div>
            {separation === "or" ? (
              <motion.h3 initial={{ scale: 0 }} animate={{ scale: 1 }}>
                or
              </motion.h3>
            ) : separation === "bar" ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={` rounded-full bg-neutral-300 ${alignment === "flex" ? "h-[60px] w-[2px]" : "h-[2px] w-[80px]"}`}
              />
            ) : (
              <></>
            )}

            <div className="flex h-[200px] w-[200px] flex-col items-center justify-center gap-3 rounded-xl">
              <motion.img
                src="https://i.scdn.co/image/ab67616d00001e024718e2b124f79258be7bc452"
                alt="Example image"
                className="h-[100px] w-[100px] rounded-xl shadow-lg"
                layout
              />
              <AnimatePresence mode="popLayout">
                {letters ? (
                  <motion.p
                    key={2}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    exit={{ opacity: 0, scale: 0 }}
                  >
                    B
                  </motion.p>
                ) : (
                  <></>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default CreatePage;
