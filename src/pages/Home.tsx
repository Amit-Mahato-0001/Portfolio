import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import WorkSection from "../components/work/WorkSection";
import ExperimentsSection from "../components/experiments/ExperimentsSection";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";

type ViewType = "home" | "about";

const Home = () => {
  const [view, setView] = useState<ViewType>("home");

  return (
    <MainLayout>

      <Navbar setView={setView} />

      {view === "home" && (
        <>
          <Hero />
          <WorkSection />
          <ExperimentsSection />
        </>
      )}

      {view === "about" && <About />}

      <Footer />

    </MainLayout>
  );
};

export default Home;