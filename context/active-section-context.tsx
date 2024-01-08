import React, { useState, createContext } from "react";
import { links } from "@/lib/data";

type SectionName = (typeof links)[number]["name"]

type ActiveSectionContextProviderProps = {
    chilren: React.ReactNode;
}

type ActiveSectionContext = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
}

// do not want to use value outside provider component so we use null for detaul context value
const ActiveSectionContext = createContext<ActiveSectionContextType>(null);

export default function ActiveSectionContextProvider({ children }: {
    ActiveSectionContextProviderProps;
}) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home');

    return <ActiveSectionContext.Provider value={{
        activeSection,
        setActiveSection
    }}>
        { children }
    </ActiveSectionContext.Provider>;
}