import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Barbers from "@/components/Barbers";
import Booking from "@/components/Booking";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Barbers />
      <Booking />
      <About />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
