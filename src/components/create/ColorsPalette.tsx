import { useSidebar } from "@/store/SidebarStore";

function ColorsPalette() {
  const { colorPalette, setColorPalette } = useSidebar();

  const colorSelected = "ring-[3px] ring-emerald-600";

  return (
    <div>
      <div className="grid grid-cols-5 gap-2 w-full">
        <div
          onClick={() =>
            setColorPalette({
              backgroundColor: "bg-white",
              spacingColor: "neutral-300",
              titleColor: "text-neutral-800",
              textColor: "text-neutral-300",
              borderCreditColor: "border-neutral-300",
            })
          }
          className={`h-[40px] w-[40px] cursor-pointer rounded-lg bg-white ${colorPalette.backgroundColor === "bg-white" ? colorSelected : ""}`}
        />
        <div
          onClick={() =>
            setColorPalette({
              backgroundColor: "bg-neutral-800",
              spacingColor: "neutral-200",
              titleColor: "text-white",
              textColor: "text-neutral-200",
              borderCreditColor: "border-neutral-200",
            })
          }
          className={`h-[40px] w-[40px] cursor-pointer rounded-lg ${colorPalette.backgroundColor === "bg-neutral-800" ? colorSelected : ""}`}
        />

        <div
          onClick={() =>
            setColorPalette({
              backgroundColor: "bg-emerald-200",
              spacingColor: "emerald-400",
              titleColor: "text-emerald-700",
              textColor: "text-emerald-400",
              borderCreditColor: "border-emerald-400",
            })
          }
          className={`h-[40px] w-[40px] cursor-pointer rounded-lg bg-emerald-300 ${colorPalette.backgroundColor === "bg-emerald-200" ? colorSelected : ""}`}
        />
        <div
          onClick={() =>
            setColorPalette({
              backgroundColor: "bg-pink-200",
              spacingColor: "pink-400",
              titleColor: "text-pink-700",
              textColor: "text-pink-400",
              borderCreditColor: "border-pink-400",
            })
          }
          className={`h-[40px] w-[40px] cursor-pointer rounded-lg bg-pink-300 ${colorPalette.backgroundColor === "bg-pink-200" ? colorSelected : ""}`}
        />
        <div
          onClick={() =>
            setColorPalette({
              backgroundColor: "bg-indigo-200",
              spacingColor: "indigo-400",
              titleColor: "text-indigo-700",
              textColor: "text-indigo-400",
              borderCreditColor: "border-indigo-400",
            })
          }
          className={`h-[40px] w-[40px] cursor-pointer rounded-lg bg-indigo-300 ${colorPalette.backgroundColor === "bg-indigo-200" ? colorSelected : ""}`}
        />
        <div
          onClick={() =>
            setColorPalette({
              backgroundColor: "bg-rose-200",
              spacingColor: "rose-400",
              titleColor: "text-rose-700",
              textColor: "text-rose-400",
              borderCreditColor: "border-rose-400",
            })
          }
          className={`h-[40px] w-[40px] cursor-pointer rounded-lg bg-rose-300 ${colorPalette.backgroundColor === "bg-rose-200" ? colorSelected : ""}`}
        />
        <div
          onClick={() =>
            setColorPalette({
              backgroundColor: "bg-sky-200",
              spacingColor: "sky-400",
              titleColor: "text-sky-700",
              textColor: "text-sky-400",
              borderCreditColor: "border-sky-400",
            })
          }
          className={`h-[40px] w-[40px] cursor-pointer rounded-lg bg-sky-300 ${colorPalette.backgroundColor === "bg-sky-200" ? colorSelected : ""}`}
        />
      </div>
    </div>
  );
}

export default ColorsPalette;
