"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const floatingAnimation = {
  y: ["-100px", "100px"],
  transition: {
    y: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="mx-auto w-full flex-grow relative">
        <motion.div
          animate={floatingAnimation}
          className="opacity-0 absolute top-32 left-0 lg:opacity-100 transition-all duration-300"
          style={{ zIndex: 1 }}
        >
          <Image
            src="/assets/calender.png"
            alt="calendar"
            width={570}
            height={343}
          />
        </motion.div>
        <motion.div
          animate={floatingAnimation}
          className="opacity-0 absolute top-32 right-0 lg:opacity-100 transition-all duration-300"
          style={{ zIndex: 1 }}
        >
          <Image src="/assets/gift.png" alt="gift" width={570} height={343} />
        </motion.div>
        <Image
          src="/assets/cleanslate.jpg"
          alt="clean slate"
          width={2000}
          height={100}
          className="max-w-3xl w-full m-auto mt-16 md:mt-12"
          priority
        />
      </div>
      <div className="w-full bg-white mt-auto">
        <div className="max-w-3xl mx-auto pb-20">
          <Image
            src="/assets/cleanslate_caution.jpg"
            alt="clean slate caution"
            width={2000}
            height={100}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
