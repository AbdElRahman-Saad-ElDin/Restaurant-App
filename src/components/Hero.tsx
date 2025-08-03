import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroDish from "@/assets/hero-dish.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroDish}
          alt="Gourmet dish"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-brown/80 via-deep-brown/60 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center text-primary-foreground px-6 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Byte
          <span className="block text-warm-orange font-serif">& Bite</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-cream max-w-2xl mx-auto font-light">
          Experience culinary excellence where every dish tells a story of
          passion, creativity, and the finest ingredients.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/reservation">
            <Button
              variant="reservation"
              size="lg"
              className="text-lg px-8 py-4 h-auto"
            >
              Make Reservation
            </Button>
          </Link>
          <Link to="/menu">
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 h-auto bg-transparent border-cream text-cream hover:bg-cream hover:text-deep-brown"
            >
              View Menu
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cream animate-bounce">
        <div className="w-6 h-10 border-2 border-cream rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
