import React, { useState } from "react";
import { links } from "@/lib/data";

type SectionName = (typeof links)[number]["name"]

export default function ActiveSectionContextProvider({ children }: {
    chilren: React.ReactNode;
}) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home');

    return children;
}