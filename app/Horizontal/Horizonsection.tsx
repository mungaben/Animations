"use client";

import React from "react";
import { HorizontalDta, THorizontalDta } from "./HorizontalDta";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Horizonsection = () => {
  const targetref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetref,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);
  return (
    <section className=" h-[500dvh] bg-background" ref={targetref}>
      <div className=" sticky top-0 h-screen flex bg-muted-foreground items-center overflow-hidden min-w-full  ">
        <motion.div className=" flex gap-4 min-w-full snap-x " style={{
            x
        }}>
         {
            Array(50).fill(0).map((_,i)=><div>
                <Image src={`https://picsum.photos/200/300?random=${i}`} width={500} height={500} alt={"random image"} className=" min-h-[500px] flex flex-1 w-[50dvw] min-w-[300px]  scroll-ml-6 inveted  "  />
            </div>
            )
         }
        </motion.div>
      </div>
    </section>
  );
};

export default Horizonsection;
