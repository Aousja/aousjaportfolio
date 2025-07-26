import Hero from "@/components/Hero";
import About from "@/components/about";
import Skill from "@/components/Skill";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main>
        <Hero />
        {/* Placeholder sections for future development */}

        <About />

        <Skill />

       <Project />
       
        <Contact />

        <Footer />
      
       
      </main>
    </div>
  );
};

export default Index;
