// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { LampContainer } from "@/components/ui/lamp";
// import Link from "next/link";
 
// export default function LampDemo() {
//   return (
//     <LampContainer>
//       <motion.h1
//         initial={{ opacity: 0.5, y: 100 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//           delay: 0.3,
//           duration: 0.8,
//           ease: "easeInOut",
//         }}
//         className="mt-8 bg-gradient-to-br from-pink-200 to-pink-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
//       >
//        <Link href={"/art"}>YvonneWorks</Link>
//       </motion.h1>
//     </LampContainer>
//   );
// }

"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/image-slider";
import imgFeature1 from "@/img/art/Fuji_Dawn.jpg";
import imgFeature2 from "@/img/art/Summer_Breeze.jpg";
import imgFeature3 from "@/img/art/Wet_Bloom.jpg";
import imgFeature4 from "@/img/art/Withered_heart.jpg";
import Link from "next/link";

export default function ImagesSliderDemo() {
  const images = [
    "https://xrlplewixmqroqijycns.supabase.co/storage/v1/object/public/img/art/Fuji_Dawn.jpg",
    "https://xrlplewixmqroqijycns.supabase.co/storage/v1/object/public/img/art/Summer_Breeze.jpg",
    "https://xrlplewixmqroqijycns.supabase.co/storage/v1/object/public/img/art/Wet_Bloom.jpg",
    "https://xrlplewixmqroqijycns.supabase.co/storage/v1/object/public/img/art/Withered_heart.jpg"
  ];
  return (
    <ImagesSlider className="h-[100vh]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-4xl lg:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          YvonneWorks <br />
        </motion.p>
        <Link href={"/art"}>
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>Explore Artist Masterpieces →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </Link>
      </motion.div>
    </ImagesSlider>
  );
}
