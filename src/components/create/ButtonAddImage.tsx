import React, { ChangeEvent, useState } from "react";
import { motion } from "framer-motion";
import { HiPlus } from "react-icons/hi";
import { useImage } from "@/store/ImagesStore";

type HandleImageUploadFunc = (event: ChangeEvent<HTMLInputElement>) => void;

interface ButtonAddImageProps {
  loadingImage: boolean;
  setLoadingImage: React.Dispatch<React.SetStateAction<boolean>>;
  setOnHover: React.Dispatch<React.SetStateAction<boolean>>;
  columnName: string;
}

function ButtonAddImage({
  loadingImage,
  setLoadingImage,
  setOnHover,
  columnName,
}: ButtonAddImageProps) {
  const {
    bColumnImages,
    setBColumnImages,
    aColumnImages,
    setAColumnImages,
    cColumnImages,
    setCColumnImages,
    dColumnImages,
    setDColumnImages,
  } = useImage();
  const handleImageUpload: HandleImageUploadFunc = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (columnName === "a") {
          setAColumnImages([...aColumnImages, reader.result as string]);
        } else if (columnName === "b") {
          setBColumnImages([...bColumnImages, reader.result as string]);
        } else if (columnName === "c") {
          setCColumnImages([...cColumnImages, reader.result as string]);
        } else if (columnName === "d") {
          setDColumnImages([...dColumnImages, reader.result as string]);
        }
        setLoadingImage(false);
      };
      reader.readAsDataURL(file);
      setOnHover(false);
    }
  };

  return (
    <motion.label
      initial={{ scale: 0.2 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      htmlFor="image-upload"
      className="cursor-pointer"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setLoadingImage(true)}
        className="flex items-center justify-center rounded-full bg-gray-200 p-2"
      >
        <HiPlus className="text-gray-500" />
      </motion.div>
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
    </motion.label>
  );
}

export default ButtonAddImage;
