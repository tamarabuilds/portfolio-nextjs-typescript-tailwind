"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion, useInView } from "framer-motion";

export default function About() {
    const { ref, inView} = useInView();

    return (
        <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                {`I'm part of the `}
                <span className="font-medium">Intuit Apprenticeship program </span> bringing underrepresented software engineers into tech. This brings me back to my physics and engineering roots from when I got a few degrees from schools like Caltech.
            </p>
            
            <p className="mb-3">
                Previously, I applied tech to business situations and was promoted from an individual contributor to people manager, then head of customer and product <span className="font-medium">in two years</span>. Motivated to make a different type of impact, I also started a nonprofit to grow strong readers by third grade.
            </p>

            <p>
                {`Now, I'm hands on problem solving and working alongside fellow 'can-do'ers `} building full stack applications and am <span className="font-medium">loving every minute</span>.
            </p>
        </ motion.section>
    )
};