import MainLayout from "../layouts/MainLayout";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import WorkSection from "../components/work/WorkSection";
import ExperimentsSection from "../components/experiments/ExperimentsSection";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <MainLayout>
      <Navbar />

      <>
        <Hero />
        <WorkSection />
        <ExperimentsSection />
      </>

      <Footer />
    </MainLayout>
  );
};

export default Home;