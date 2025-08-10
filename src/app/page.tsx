"use client";

import About from "@/components/About";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import WhoSection from "@/components/Who";

export default function HomePage() {
  return (
    <main>
      <Navbar />

      {/* Sections with IDs for scrolling */}
      <section id="home">
        <Home />
      </section>

      <section id="who">
        <WhoSection />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="approach">
        <Approach />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="partners">
        <Partners />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <GetInTouch />
      </section>

      <Footer />
    </main>
  );
}
