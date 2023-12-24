"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Intro() {
    return (
        <section>
            <div className="flex item-center justify-center">
                <div className="relative">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image 
                            src="/tamara.jpg"
                            alt="Tamara portrait"
                            width="192"
                            height="192"
                            quality={95}
                            priority={true}
                            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white- shadow-xl"
                        />
                        
                    </motion.div>

                    <motion.span className="absolute bottom-0 right-0 text-4xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>

            <p>
                <span className="font-bold">Hello, I'm Tamara.</span>
                I'm a {" "} <span className="font-bold">full-stack developer</span>
                with{" "} <span className="font-bold">2 years</span>
                of experience. I enjoy solving 
            </p>
        </section>
    )

}