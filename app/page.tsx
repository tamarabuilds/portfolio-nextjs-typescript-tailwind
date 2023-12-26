import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivier from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivier />
      <About />
    </main>
  )
}
