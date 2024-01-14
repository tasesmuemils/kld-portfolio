import { motion } from "framer-motion";
import { useState } from "react";
import useMediaQuery from "../util/useMediaQuery";

const navMotion = {
  visible: {
    opacity: 1,

    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

export default function Nav() {
  const [toogle, setToogle] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");
  return (
    <nav className="relative mx-8 mb-24 flex justify-between items-center py-12 font-medium md:mx-16 lg:mx-32 bg-white z-30">
      <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        width="250"
        height={4}
        viewBox="0 0 250 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L428 2"
          stroke="#282828"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </svg>
      <div>
        <h2 className="font-bold">KLD</h2>
      </div>

      <h1 className="text-lg font-bold absolute bottom-15 left-1/2 -translate-x-1/2">
        <a href="/">KLD solutions</a>
      </h1>

      {matches && (
        <div className="flex gap-12">
          <a href="/">Sazinies Ar Mums</a>
        </div>
      )}

      {!matches && (
        <div
          onClick={() => setToogle((prevToogle) => !prevToogle)}
          className="space-y-1.5 cursor-pointer z-50"
        >
          <motion.span
            animate={{ rotateZ: toogle ? 45 : 0, y: toogle ? 8 : 0 }}
            className="block h-0.5 w-8 bg-black"
          ></motion.span>
          <motion.span
            animate={{ width: toogle ? 0 : 24 }}
            className="block h-0.5 w-6 bg-black"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toogle ? -45 : 0,
              y: toogle ? -8 : 0,
              width: toogle ? 32 : 16,
            }}
            className="block h-0.5 w-4 bg-black"
          ></motion.span>
        </div>
      )}

      {toogle && !matches && (
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 25 }}
          className="fixed flex justify-center items-center bg-white bottom-0 left-0 w-full h-screen"
        >
          <motion.div
            variants={navMotion}
            animate="visible"
            initial="hidden"
            className="flex flex-col gap-28 text-lg "
          >
            <motion.a variants={itemMotion} href="/">
              Sazinies Ar Mums
            </motion.a>
            {/* <motion.a variants={itemMotion} href="/services">
              Services
            </motion.a>
            <motion.a variants={itemMotion} href="/contact">
              Contact
            </motion.a> */}
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
}
