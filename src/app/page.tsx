import Image from "next/image";
import Link from "next/link";

import Header from "../components/Header";
import About from "../components/About";
import Techs from "../components/Techs";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div className=" scroll-container flex h-screen flex-col items-center justify-between py-8 gap-[100px]">
      
      <header>
        <Header />
      </header>

      <main className=" flex flex-col items-center justify-center gap-[90px]">
        <About />
        <Techs />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-white border-spacing-1 border-red-500 w-full">
        <Footer />
      </footer>

    </div>
  );
}
