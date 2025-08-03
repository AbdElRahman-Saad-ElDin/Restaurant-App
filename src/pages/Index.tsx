import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="menu">
        <Menu />
      </div>
      <div id="contact">
        <Contact />
      </div>

      <footer className="bg-deep-brown text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">
                Byte & Bite
              </h3>
              <p className="text-cream leading-relaxed">
                Where culinary artistry meets exceptional service. Creating
                memorable dining experiences since 2010.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-warm-orange">
                Quick Links
              </h4>
              <div className="space-y-2">
                <a
                  href="#home"
                  className="block text-cream hover:text-warm-orange transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block text-cream hover:text-warm-orange transition-colors"
                >
                  About
                </a>
                <a
                  href="#menu"
                  className="block text-cream hover:text-warm-orange transition-colors"
                >
                  Menu
                </a>
                <a
                  href="#contact"
                  className="block text-cream hover:text-warm-orange transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-warm-orange">
                Contact Info
              </h4>
              <div className="space-y-2 text-cream">
                <p>123 Culinary Avenue</p>
                <p>New York, NY 10001</p>
                <p>(555) 123-4567</p>
                <p>reservations@Byte&Bite.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-warm-orange/30 mt-8 pt-8 text-center text-cream">
            <p>&copy; 2024 Byte & Bite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
