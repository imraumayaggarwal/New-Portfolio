// import {About, Contact, Experience, Hero, Projects} from "@/components/sections";
// import {Navbar, Footer} from "@/components/layout"
// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//       <Experience />
//       <Projects />
//       <Contact />
//       <Footer />
//     </>
//   );
// }

"use client";

import { useState } from "react";
import { About, Contact, Experience, Hero, Projects } from "@/components/sections";
import { Navbar, Footer } from "@/components/layout";
import { Preloader } from "@/components/sections";

export default function Home() {
  const [isDismissing, setIsDismissing] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#f2f2f2] overflow-x-hidden">
      {/* 1. YOUR NAVBAR (Triggers center-out roll in) */}
      <Navbar isRevealed={isDismissing} />

      {/* 2. YOUR REAL SECTIONS (Sits under preloader curtain; instantly revealed as it slides down) */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>

      {/* 3. PRELOADER (Chevron click slides curtain DOWN; collapses card to bottom-left) */}
      <Preloader
        isDismissing={isDismissing}
        onDismiss={() => setIsDismissing(true)}
        onRestore={() => setIsDismissing(false)}
      />
    </main>
  );
}