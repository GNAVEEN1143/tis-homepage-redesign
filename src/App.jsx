import "./App.css";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import About from "./components/sections/About";
import WhyTIS from "./components/sections/WhyTIS";
import Academics from "./components/sections/Academics";
import Campus from "./components/sections/Campus";
import Testimonials from "./components/sections/Testimonials";
import Admissions from "./components/sections/Admissions";
import Sports from "./components/sections/Sports";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/animation/ScrollProgress";
import CustomCursor from "./components/animation/CustomCursor";

function App() {
  return (
    <div className="app">
      <Navbar />

      <ScrollProgress />
      <CustomCursor />

      <main>
        <Hero />
        <Stats />
        <About />
        <WhyTIS />
        <Academics />
        <Campus />
        <Sports />
        <Testimonials />
        <Admissions />
      </main>

      <Footer />
    </div>
  );
}

export default App;