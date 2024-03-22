import Sidebar from "@/components/create/Sidebar";
import { useSidebar } from "@/store/SidebarStore";
import { useImage } from "@/store/ImagesStore";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import ButtonAddImage from "@/components/create/ButtonAddImage";
import Image from "next/image";
import { useSession } from "next-auth/react";
import * as htmlToImage from "html-to-image";
import { HiDownload } from "react-icons/hi";
import { FaRegTrashCan } from "react-icons/fa6";

function CreatePage() {
  const {
    alignment,
    letters,
    separation,
    title,
    font,
    credit,
    creditAlignment,
    colorPalette,
    AddColumns,
  } = useSidebar();
  const {
    aColumnImages,
    bColumnImages,
    cColumnImages,
    dColumnImages,
    setAColumnImages,
    setBColumnImages,
    setCColumnImages,
    setDColumnImages,
  } = useImage();

  console.log(aColumnImages);

  const [onHoverA, setOnHoverA] = useState(false);
  const [onHoverB, setOnHoverB] = useState(false);
  const [onHoverC, setOnHoverC] = useState(false);
  const [onHoverD, setOnHoverD] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);

  const { data: session, status } = useSession();

  const ref = useRef<HTMLDivElement>(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    htmlToImage
      .toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <div className="flex h-screen w-full items-start justify-between ">
      <div className="flex h-screen w-full flex-col items-center justify-center gap-3 ">
        <div className="flex h-[50px] w-full items-center justify-center border-b-[1px] border-neutral-700 bg-[#242424] py-8">
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.7 }}
            onClick={onButtonClick}
            className="w- gap-1x flex items-center justify-center rounded-lg border-[1px] border-emerald-400 bg-emerald-500 px-7 py-1 text-[15px] font-light text-white shadow-lg shadow-sm hover:shadow-emerald-800"
          >
            <HiDownload />
            Download PNG
          </motion.button>
        </div>
        <div className=" flex h-full w-full items-center justify-center">
          <div className="justify-center gap-4">
            {/* <button onClick={onButtonClick}>download</button> */}

            <motion.div
              ref={ref}
              id="abpicture"
              animate={alignment === "flex" ? { scale: 0.9 } : { scale: 1 }}
              className={`abpicture font-${font} flex min-w-[400px] flex-col items-center justify-center rounded-xl ${colorPalette.backgroundColor} p-7 font-medium shadow-lg`}
            >
              <h2 className={`font-bold ${colorPalette.titleColor}`}>
                {title}
              </h2>
              <div
                className={`${AddColumns.addCColumn || AddColumns.addDColumn ? "grid grid-cols-2" : alignment} items-center justify-center gap-3  `}
              >
                <div
                  onMouseEnter={() => setOnHoverA(true)}
                  onMouseLeave={() => setOnHoverA(loadingImage ? true : false)}
                  className="flex min-h-[140px] min-w-[140px] flex-col  items-center justify-center gap-4 p-4"
                >
                  <div
                    className={`${alignment === "flex flex-col" ? "flex" : "flex flex-col"}  items-center justify-center gap-3 rounded-xl`}
                  >
                    {/* <motion.img
                    src="https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36"
                    className="h-[100px] w-[100px] rounded-xl shadow-lg"
                    alt="Example image"
                    layout
                  /> */}
                    {aColumnImages.map((aCol) => (
                      <motion.div
                        className="relative"
                        onMouseEnter={() => setOnHoverA(true)}
                        onMouseLeave={() =>
                          setOnHoverA(loadingImage ? true : false)
                        }
                        layout
                      >
                        <img
                          key={aCol}
                          src={aCol}
                          alt="Example image"
                          className={`max-h-[100px] max-w-[100px] rounded-lg shadow-lg ${onHoverA ? "ring-[2px] ring-red-500 brightness-[0.9]" : ""}`}
                        />
                        {onHoverA && (
                          <motion.div
                            initial={{ scale: 0.4 }}
                            whileInView={{ scale: 1 }}
                            className="absolute right-9 top-9 cursor-pointer rounded-full bg-gray-200 p-2"
                            // onClick={() => setAColumnImages({})}
                            onClick={() => {
                              const removeImage = aColumnImages.filter(
                                (aColumn) => aColumn !== aCol,
                              );

                              setAColumnImages(removeImage);
                            }}
                          >
                            <FaRegTrashCan color="red" />
                          </motion.div>
                        )}
                      </motion.div>
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
                    {letters === "ab" ? (
                      <motion.p
                        key={1}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className={`${colorPalette.textColor}`}
                      >
                        A
                      </motion.p>
                    ) : letters === "12" ? (
                      <motion.p
                        key={1}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className={`${colorPalette.textColor}`}
                      >
                        1
                      </motion.p>
                    ) : (
                      <></>
                    )}
                  </AnimatePresence>
                </div>
                {AddColumns.addCColumn ||
                AddColumns.addDColumn ? null : separation === "or" ? (
                  <motion.p
                    className={`text-${colorPalette.spacingColor}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    or
                  </motion.p>
                ) : separation === "bar" ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={` rounded-full bg-${colorPalette.spacingColor} ${alignment === "flex" ? "h-[60px] w-[2px]" : "h-[2px] w-[80px]"}`}
                  />
                ) : separation === "vs" ? (
                  <motion.h3
                    className={`text-${colorPalette.spacingColor}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    vs
                  </motion.h3>
                ) : (
                  <></>
                )}

                {/* B */}
                <div
                  onMouseEnter={() => setOnHoverB(true)}
                  onMouseLeave={() => setOnHoverB(loadingImage ? true : false)}
                  className="flex min-h-[140px] min-w-[140px] flex-col  items-center justify-center gap-4 p-4"
                >
                  <div
                    className={`${alignment === "flex flex-col" ? "flex" : "flex flex-col"} items-center justify-center gap-3 rounded-xl`}
                  >
                    {bColumnImages.map((bCol) => (
                      <motion.img
                        key={bCol}
                        src={bCol}
                        alt="Example image"
                        className=" max-h-[100px] max-w-[100px] rounded-lg shadow-lg"
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
                    {letters === "ab" ? (
                      <motion.p
                        key={2}
                        initial={{ scale: 0, opacity: 0, rotate: "90deg" }}
                        animate={{ scale: 1, opacity: 1, rotate: "0deg" }}
                        transition={{ duration: 0.2 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className={`${colorPalette.textColor}`}
                      >
                        B
                      </motion.p>
                    ) : letters === "12" ? (
                      <motion.p
                        key={2}
                        initial={{ scale: 0, opacity: 0, rotate: "90deg" }}
                        animate={{ scale: 1, opacity: 1, rotate: "0deg" }}
                        transition={{ duration: 0.2 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className={`${colorPalette.textColor}`}
                      >
                        2
                      </motion.p>
                    ) : (
                      <></>
                    )}
                  </AnimatePresence>
                </div>

                {/* C */}
                {AddColumns.addCColumn && (
                  <div
                    onMouseEnter={() => setOnHoverC(true)}
                    onMouseLeave={() =>
                      setOnHoverC(loadingImage ? true : false)
                    }
                    className={`${!AddColumns.addDColumn && "col-span-2"} flex min-h-[140px] min-w-[140px] flex-col  items-center justify-center gap-4 p-4`}
                  >
                    <div
                      className={`${alignment === "flex flex-col" ? "flex" : "flex flex-col"} items-center justify-center gap-3 rounded-xl`}
                    >
                      {cColumnImages.map((bCol) => (
                        <motion.img
                          key={bCol}
                          src={bCol}
                          alt="Example image"
                          className=" max-h-[100px] max-w-[100px] rounded-lg shadow-lg"
                          layout
                        />
                      ))}

                      {onHoverC && (
                        <ButtonAddImage
                          loadingImage={loadingImage}
                          setLoadingImage={setLoadingImage}
                          setOnHover={setOnHoverC}
                          columnName="c"
                        />
                      )}
                    </div>
                    <AnimatePresence mode="popLayout">
                      {letters === "ab" ? (
                        <motion.p
                          key={2}
                          initial={{ scale: 0, opacity: 0, rotate: "90deg" }}
                          animate={{ scale: 1, opacity: 1, rotate: "0deg" }}
                          transition={{ duration: 0.2 }}
                          exit={{ opacity: 0, scale: 0 }}
                          className={`${colorPalette.textColor}`}
                        >
                          C
                        </motion.p>
                      ) : letters === "12" ? (
                        <motion.p
                          key={2}
                          initial={{ scale: 0, opacity: 0, rotate: "90deg" }}
                          animate={{ scale: 1, opacity: 1, rotate: "0deg" }}
                          transition={{ duration: 0.2 }}
                          exit={{ opacity: 0, scale: 0 }}
                          className={`${colorPalette.textColor}`}
                        >
                          3
                        </motion.p>
                      ) : (
                        <></>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                {AddColumns.addDColumn && (
                  <div
                    onMouseEnter={() => setOnHoverD(true)}
                    onMouseLeave={() =>
                      setOnHoverD(loadingImage ? true : false)
                    }
                    className="flex min-h-[140px] min-w-[140px] flex-col  items-center justify-center gap-4 p-4"
                  >
                    <div
                      className={`${alignment === "flex flex-col" ? "flex" : "flex flex-col"} items-center justify-center gap-3 rounded-xl`}
                    >
                      {dColumnImages.map((bCol) => (
                        <motion.img
                          key={bCol}
                          src={bCol}
                          alt="Example image"
                          className=" max-h-[100px] max-w-[100px] rounded-lg shadow-lg"
                          layout
                        />
                      ))}

                      {onHoverD && (
                        <ButtonAddImage
                          loadingImage={loadingImage}
                          setLoadingImage={setLoadingImage}
                          setOnHover={setOnHoverD}
                          columnName="d"
                        />
                      )}
                    </div>
                    <AnimatePresence mode="popLayout">
                      {letters === "ab" ? (
                        <motion.p
                          key={2}
                          initial={{ scale: 0, opacity: 0, rotate: "90deg" }}
                          animate={{ scale: 1, opacity: 1, rotate: "0deg" }}
                          transition={{ duration: 0.2 }}
                          exit={{ opacity: 0, scale: 0 }}
                          className={`${colorPalette.textColor}`}
                        >
                          D
                        </motion.p>
                      ) : letters === "12" ? (
                        <motion.p
                          key={2}
                          initial={{ scale: 0, opacity: 0, rotate: "90deg" }}
                          animate={{ scale: 1, opacity: 1, rotate: "0deg" }}
                          transition={{ duration: 0.2 }}
                          exit={{ opacity: 0, scale: 0 }}
                          className={`${colorPalette.textColor}`}
                        >
                          4
                        </motion.p>
                      ) : (
                        <></>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
              <AnimatePresence>
                {status === "authenticated" && credit && (
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className={`flex w-full justify-${creditAlignment} items-center`}
                  >
                    <div
                      className={`flex items-center justify-center gap-1 rounded-full border-[1px] ${colorPalette.borderCreditColor} pr-1`}
                    >
                      {session.user.image && (
                        <Image
                          height={19}
                          width={19}
                          src={session.user.image}
                          className="h-[19px] w-[19px] rounded-full"
                          alt="User image"
                        />
                      )}
                      <p className={`${colorPalette.textColor} text-[9px]`}>
                        {session.user.name}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default CreatePage;
