"use client";

import React from "react";

export default function About() {
    return <section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40">
        <h2 className="text-3xl font-medium capitalize mb-8">About me</h2>
        <p className="mb-3">
            {`I'm part of the `}
            <span className="font-medium">Intuit Apprenticeship program </span> bringing underrepresented software engineers into tech. This brings me back to my physics and engineering roots since I got a few degrees from schools like Caltech.
        </p>
        
        <p className="mb-3">
            Previously, I applied tech to business situations and was promoted from an individual contributor to people manager, then head of customer and product <span className="font-medium">in two years</span>. Motivated to make a different type of impact, I also started a nonprofit to grow strong readers by third grade.
        </p>

        <p>
            {`Now I'm working alongside fellow 'can-do'ers `} building full stack applications and am <span className="font-medium">loving every minute</span>.
        </p>
    </section>
}