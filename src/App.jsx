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
import LeetcodeButton from "./ui/LeetcodeButton"

export default function App() {
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