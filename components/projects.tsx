"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";


export default function Projects() {
    const { setActiveSection } = useActiveSectionContext();
    const { ref, inView } = useInView();

    // useEffect to keep external state of UI position with navigation
    useEffect(() => {
        if (inView) {
            setActiveSection("Projects");
        }        
    }, [inView, setActiveSection])

    return (
        <section ref={ref} id="projects" className="scroll-mt-28">
            <SectionHeading>My projects</SectionHeading>
            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project}/>
                        </ React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}
