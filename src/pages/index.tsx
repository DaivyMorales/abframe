import React, { useEffect, useRef, useState } from "react";
import { HiMail, HiCheck, HiOutlineChevronDoubleDown } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import { api } from "@/utils/api";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { motion } from "framer-motion";
import { CgSpinner } from "react-icons/cg";
import Head from "next/head";
import ABComparison from "@/components/landing/ABComparison";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";

function Home() {
  const [loadingRequest, setloadingRequest] = useState(false);
  const [statusResponseWaitlist, setStatusResponseWaitlist] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  console.log(errorMessage);
  const divRef = useRef<HTMLDivElement>(null);

  const mutation = api.waitlist.create.useMutation();

  const router = useRouter();

  // useEffect(() => {
  //   divRef.current!.focus();
  // }, []);

  const isDesktop = useMediaQuery({ maxWidth: 1280 });

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

        if (error.message.includes("Email already exists")) {
          setErrorMessage("Email already exists, please use a different email");
        }
      }
    },
  });

  const { width, height } = useWindowSize();

  return (
    <>
      <Head>
        <title>ABFrame - Waitlist</title>
      </Head>

      <div className="grid min-h-full w-full grid-cols-1 flex-col gap-8  xl:grid-cols-2">
        {statusResponseWaitlist === 200 && !errorMessage ? (
          <Confetti
            width={width}
            height={height}
            tweenDuration={200}
            gravity={0.3}
          />
        ) : (
          ""
        )}
        <div className="flex h-full h-screen flex-col items-center justify-center gap-8 px-5">
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="text-center">
              Focus on your photos, <br /> not the formatting
            </h1>

            <h3 className="text-center text-gray-400">
              Create visually stunning templates and frames for your image{" "}
              <br />
              comparisons
            </h3>
          </div>
          <div className="flex flex-col items-center justify-start gap-16">
            <motion.button
              onClick={() => router.push("/create")}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className={`${statusResponseWaitlist === 200 ? "cursor-not-allowed bg-[#212121]" : "bg-emerald-400"} flex h-[50px] w-full items-center justify-center gap-3 rounded-md px-7 py-3 text-[15px] font-semibold text-[#141616] text-white shadow-sm`}
            >
              Create my A/B picture
            </motion.button>
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
                  <p className="bg-lime-900">Thaaaaanks youuuu 🎉</p>
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
          {isDesktop && (
            <div className="absolute -bottom-32 flex flex-col items-center justify-center gap-2 sm:-bottom-10">
              <p className="text-sm font-semibold">Look an example!</p>
              <HiOutlineChevronDoubleDown size={30} />
            </div>
          )}
        </div>
        <div>
          <ABComparison />
        </div>
      </div>
    </>
  );
}

export default Home;
