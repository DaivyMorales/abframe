import Sidebar from "@/components/create/Sidebar";
import { useSidebar } from "@/store/SidebarStore";
import { useImage } from "@/store/ImagesStore";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ButtonAddImage from "@/components/create/ButtonAddImage";
import Image from "next/image";
import { useSession } from "next-auth/react";

function CreatePage() {
  const {
    alignment,
    letters,
    separation,
    title,
    font,
    credit,
    creditAlignment,
  } = useSidebar();
  const { aColumnImages, bColumnImages } = useImage();

  const [onHoverA, setOnHoverA] = useState(false);
  const [onHoverB, setOnHoverB] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);

  const { data: session, status } = useSession();

  return (
    <div className="flex h-screen w-screen items-center justify-between">
      <div className="flex h-full w-full flex-col items-center justify-center gap-3">
        <div className="justify-center gap-4">
          <motion.div
            animate={alignment === "flex" ? { scale: 0.9 } : { scale: 1 }}
            className={`font-${font} flex min-w-[400px] flex-col items-center justify-center rounded-xl bg-white p-10 shadow-lg`}
          >
            <h2 className={`font-bold text-black`}>{title}</h2>
            <div className={`${alignment} items-center justify-center gap-3 `}>
              <div
                onMouseEnter={() => setOnHoverA(true)}
                onMouseLeave={() => setOnHoverA(loadingImage ? true : false)}
                className="flex min-h-[200px] min-w-[200px] flex-col  items-center justify-center gap-4 p-8"
              >
                <div
                  className={`${alignment === "flex flex-col" ? "flex" : "flex flex-col"}  items-center justify-center gap-3 rounded-xl`}
                >
                  <motion.img
                    src="https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36"
                    className="h-[100px] w-[100px] rounded-xl shadow-lg"
                    alt="Example image"
                    layout
                  />
                  {aColumnImages.map((aCol) => (
                    <motion.img
                      key={aCol}
                      src={aCol}
                      alt="Example image"
                      className="h-[100px] w-[100px] rounded-xl shadow-lg"
                      layout
                    />
                  ))}

                  {onHoverA && (
                    <ButtonAddImage
                      loadingImage={loadingImage}
                      setLoadingImage={setLoadingImage}
                      setOnHover={setOnHoverA}
                      columnName="a"
                    />
                  )}
                </div>
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
              ) : separation === "vs" ? (
                <motion.h3 initial={{ scale: 0 }} animate={{ scale: 1 }}>
                  vs
                </motion.h3>
              ) : (
                <></>
              )}

              <div
                onMouseEnter={() => setOnHoverB(true)}
                onMouseLeave={() => setOnHoverB(loadingImage ? true : false)}
                className="flex min-h-[200px] min-w-[200px] flex-col  items-center justify-center gap-4 p-8"
              >
                <div
                  className={`${alignment === "flex flex-col" ? "flex" : "flex flex-col"}  items-center justify-center gap-3 rounded-xl`}
                >
                  <motion.img
                    src="https://i.scdn.co/image/ab67616d00001e024718e2b124f79258be7bc452"
                    alt="Example image"
                    className="h-[100px] w-[100px] rounded-xl shadow-lg"
                    layout
                  />

                  {bColumnImages.map((bCol) => (
                    <motion.img
                      key={bCol}
                      src={bCol}
                      alt="Example image"
                      className="h-[100px] w-[100px] rounded-xl shadow-lg"
                      layout
                    />
                  ))}

                  {onHoverB && (
                    <ButtonAddImage
                      loadingImage={loadingImage}
                      setLoadingImage={setLoadingImage}
                      setOnHover={setOnHoverB}
                      columnName="b"
                    />
                  )}
                </div>
                <AnimatePresence mode="popLayout">
                  {letters ? (
                    <motion.p
                      key={2}
                      initial={{ scale: 0, opacity: 0, rotate: "90deg" }}
                      animate={{ scale: 1, opacity: 1, rotate: "0deg" }}
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
            </div>
            <AnimatePresence>
              {status === "authenticated" && credit && (
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className={`flex w-full justify-${creditAlignment} items-center`}
                >
                  <div className="flex items-center justify-center gap-1 rounded-lg border-[1px] border-neutral-100 p-1">
                    <img
                      src="https://pbs.twimg.com/profile_images/1760288011378446336/JoHs9jPA_400x400.jpg"
                      alt="User image"
                      className="h-[17px] w-[17px] rounded-full"
                    />
                    <p className="text-[9px]">{session.user.name}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default CreatePage;
