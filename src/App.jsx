
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certification from "./components/Certification";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import CustomCursor from "./ui/CustomCursor";
import LeetcodeButton from "./ui/LeetcodeButton";
import SpiderSignal from "./components/SpiderLoader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Spider loader duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(timer);a
  }, []);

  // Show Spider Loader first
  if (isLoading) {
    return <SpiderSignal />;
  }

  // Then show the complete portfolio
  return (
    <div className="bg-slate-900 text-white min-h-screen cursor-none">
      <CustomCursor />
      <LeetcodeButton />

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certification />
      <Hobbies />
      <Footer />
      <Contact />
    </div>
  );
}
