import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import WorkSection from "../components/work/WorkSection";
import ExperimentsSection from "../components/experiments/ExperimentsSection";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";

type ViewType = "home" | "about";

const Home = () => {

  //view sirf home ya about hoga
  const [view, setView] = useState<ViewType>("home");

  return (
    <>
      <header>
        <Navbar setView={setView} />
      </header>

      <main>
        {view === "home" && (
          <>
            <Hero />
            <WorkSection />
            <ExperimentsSection />
          </>
        )}

        {view === "about" && <About />}
      </main>

      <Footer />
    </>
  );
};

export default Home;