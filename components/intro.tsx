import React from "react";
import Image from "next/image";

export default function Intro() {
    return (
        <section>
            <div className="flex item-center justify-center">
                <div className="relative">
                    <Image 
                        src="/tamara.jpg"
                        alt="Tamara portrait"
                        width="192"
                        height="192"
                        quality={95}
                        priority={true}
                        className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white- shadow-xl"
                    />

                    <span className="absolute bottom-0 right-0 text-4xl">
                        👋
                    </span>
                </div>
            </div>
        </section>
    )

}