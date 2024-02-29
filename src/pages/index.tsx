import React, { useEffect, useRef, useState } from "react";
import { HiMail, HiCheck } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import { api } from "@/utils/api";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { motion } from "framer-motion";
import { CgSpinner } from "react-icons/cg";

function Home() {
  const [loadingRequest, setloadingRequest] = useState(false);
  const [statusResponseWaitlist, setStatusResponseWaitlist] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const divRef = useRef<HTMLDivElement>(null);
  console.log(statusResponseWaitlist);

  const mutation = api.waitlist.create.useMutation();

  useEffect(() => {
    divRef.current!.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      setloadingRequest(true);
      try {
        const response = await mutation.mutateAsync({
          email: values.email,
        });

        if (response) {
          setloadingRequest(false);
          setStatusResponseWaitlist(200);
        }
      } catch (error: any) {
        setloadingRequest(false);
        setStatusResponseWaitlist(500);

        if (error.message.includes("Email alredy exists")) {
          setErrorMessage("Email already exists, please use a different email");
        }
      }
    },
  });

  const { width, height } = useWindowSize();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-8">
      {statusResponseWaitlist ? (
        <Confetti
          width={width}
          height={height}
          tweenDuration={200}
          gravity={0.3}
        />
      ) : (
        ""
      )}
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
            style={
              statusResponseWaitlist === 200 ? { borderColor: "#FFBE18" } : {}
            }
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
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            type="submit"
            className={`${statusResponseWaitlist === 200 ? "cursor-not-allowed bg-slate-500" : "bg-[#FFBE18]"} flex h-[50px] w-full items-center justify-center gap-3 rounded-md px-7 py-3 text-[15px] font-semibold text-[#141616] text-white shadow-sm`}
            disabled={statusResponseWaitlist === 200}
          >
            {loadingRequest ? (
              <div className="animate-spin">
                <CgSpinner size={20} />
              </div>
            ) : errorMessage.length > 0 ? (
              "Join waitlist"
            ) : statusResponseWaitlist === 200 ? (
              <HiCheck />
            ) : (
              "Join waitlist"
            )}
          </motion.button>
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
            {statusResponseWaitlist === 200 ? (
              <p className="bg-amber-900">Thaaaaanks youuuu 🎉</p>
            ) : (
              <p>Developed by Joao</p>
            )}
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
