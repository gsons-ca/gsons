import Header from "./components/template-parts/Header";
import Hero from "./components/template-parts/Hero";
import WhyChooseUs from "./components/template-parts/WhyChooseUs";
import Vision from "./components/template-parts/Vision";
import Solutions from "./components/template-parts/Solutions";
import Statistics from "./components/template-parts/Statistics";
import Services from "./components/template-parts/Services";
import Testimonials from "./components/template-parts/Testimonials";
import CTA from "./components/template-parts/CTA";
import Footer from "./components/template-parts/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyChooseUs />
        <Vision />
        <Solutions />
        <Services />
        <Statistics />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
