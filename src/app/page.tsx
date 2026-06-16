import {About, Contact, Experience, Hero, Projects} from "@/components/sections";
import {Navbar, Footer} from "@/components/layout"
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}