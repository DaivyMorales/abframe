import React, { useEffect, useRef } from "react";
import { HiMail } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import { api } from "@/utils/api";

function Home() {
  const divRef = useRef<HTMLDivElement>(null);

  const mutation = api.waitlist.create.useMutation();

  useEffect(() => {
    divRef.current!.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      const response = await mutation.mutateAsync({
        email: values.email,
      });
    },
  });

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center  gap-8">
      <div className="flex flex-col items-center justify-center gap-1">
        <h1 className="text-center">
          Focus on Your Photos, <br /> not the Formatting
        </h1>

        <h3 className="text-center text-gray-400">
          Create visually stunning templates and frames for your image <br />
          comparisons
        </h3>
      </div>
      <div className="flex flex-col items-center justify-start gap-16">
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
          <div
            ref={divRef}
            className="focus-div flex w-[250px] items-center justify-center gap-2 rounded-md border-[1px] border-slate-600 px-3 py-3"
          >
            <HiMail size={15} />
            <input
              name="email"
              onChange={formik.handleChange}
              type="email"
              placeholder="youremail@abframe.com"
              className="placeholder:text-slate-500"
            />
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-3 rounded-md bg-[#FFBE18] px-7 py-3 text-[15px] font-semibold text-[#141616] text-white shadow-sm"
          >
            Join waitlist
          </button>
        </form>
        {/* ME */}
        <section className="flex gap-3">
          <Link href={"https://twitter.com/_joaooo0_"} target="_blank">
            <Image
              src="/Me.jpg"
              alt="Joao's image"
              width={45}
              height={35}
              className="cursor-pointer rounded-full hover:brightness-[80%]"
              priority={true}
            />
          </Link>
          <div className="flex flex-col items-start justify-start">
            <p>Developed by Joao</p>
            <Link
              href={"https://twitter.com/_joaooo0_"}
              target="_blank"
              className="cursor-pointer text-[13px] text-slate-400 hover:text-slate-500"
            >
              @_joaooo0_
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
