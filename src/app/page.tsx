"use client";

import About from "@/components/About";
import Approach from "@/components/Approach";
import CompanyJourney from "@/components/companyJourney";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import Home from "@/components/Home";
import HomeNextPage from "@/components/HomeNextPage";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import Navbar from "@/components/Navbar";
// import Partners from "@/components/Partners";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import TechnologyStack from "@/components/TechnologyStack";
import WhoSection from "@/components/Who";
export default function HomePage() {
  return (
    <main>
      <Navbar />

      {/* Sections with IDs for scrolling */}
      <section id="home">
        <Home />
      </section>
      <section id="homenextpage">
        <HomeNextPage />
      </section>

      <section id="who">
        <WhoSection />
      </section>
         <section id="journey">
        <CompanyJourney />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="approach">
        <Approach />
      </section>
      <section id="technologystack">
        <TechnologyStack />
      </section>

      {/* <section id="portfolio">
        <Portfolio />
      </section> */}

      <section id="industry">
        <IndustriesWeServe />
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
