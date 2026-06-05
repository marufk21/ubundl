import DoctorLed from "./components/doctor-led";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import Hero from "./components/home";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <DoctorLed />
        <FAQ />
        <Footer />
      </div>
    </>
  );
};

export default App;
