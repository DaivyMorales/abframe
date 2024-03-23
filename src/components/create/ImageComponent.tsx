import { motion } from "framer-motion";
import { useImage } from "@/store/ImagesStore";
import { FaRegTrashCan } from "react-icons/fa6";

export interface ImageComponentProps {
  onHover: boolean;
  setOnHover: React.Dispatch<React.SetStateAction<boolean>>;
  col: string;
  loadingImage: boolean;
  columnName: string;
}

function ImageComponent({
  onHover,
  setOnHover,
  col,
  loadingImage,
  columnName,
}: ImageComponentProps) {
  const {
    setAColumnImages,
    aColumnImages,
    setBColumnImages,
    bColumnImages,
    setCColumnImages,
    cColumnImages,
    setDColumnImages,
    dColumnImages,
  } = useImage();

  return (
    <motion.div
      className="relative flex justify-center items-center"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(loadingImage ? true : false)}
      layout
    >
      <img
        key={col}
        src={col}
        alt="Example image"
        className={`max-h-[100px] max-w-[100px] rounded-lg ${onHover ? " brightness-[0.9]" : ""}`}
      />
      {onHover && (
        <motion.div
          initial={{ scale: 0.4 }}
          whileInView={{ scale: 1 }}
          className="absolute cursor-pointer rounded-full bg-gray-200 p-2 hover:bg-transparent hover:border-2 hover:border-red-500"
          onClick={() => {
            switch (columnName) {
              case "a":
                const removeImageA = aColumnImages.filter(
                  (aColumn) => aColumn !== col,
                );

                setAColumnImages(removeImageA);
                break;

              case "b":
                const removeImageB = bColumnImages.filter(
                  (bColumn) => bColumn !== col,
                );

                setBColumnImages(removeImageB);
                break;

              case "c":
                const removeImageC = cColumnImages.filter(
                  (cColumn) => cColumn !== col,
                );

                setCColumnImages(removeImageC);
                break;

              case "d":
                const removeImageD = dColumnImages.filter(
                  (dColumn) => dColumn !== col,
                );

                setDColumnImages(removeImageD);
                break;
              default:
                break;
            }
          }}
        >
          <FaRegTrashCan color="red" />
        </motion.div>
      )}
    </motion.div>
  );
}

export default ImageComponent;
