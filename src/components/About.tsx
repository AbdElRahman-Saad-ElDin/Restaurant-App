import { Card } from "@/components/ui/card";
import restaurantInterior from "@/assets/restaurant-interior.jpg";

const About = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-deep-brown mb-6">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in 2010, Byte & Bite has been a cornerstone of culinary
              excellence in our community. Our passion for creating
              extraordinary dining experiences drives everything we do.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Chef Maria Rodriguez brings over 20 years of experience, having
              trained in renowned kitchens across Europe. Her innovative
              approach combines traditional techniques with modern creativity.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center bg-card/50 backdrop-blur-sm">
                <h3 className="font-serif text-2xl font-bold text-warm-orange mb-2">
                  15+
                </h3>
                <p className="text-muted-foreground">Years of Excellence</p>
              </Card>
              <Card className="p-6 text-center bg-card/50 backdrop-blur-sm">
                <h3 className="font-serif text-2xl font-bold text-warm-orange mb-2">
                  50+
                </h3>
                <p className="text-muted-foreground">Signature Dishes</p>
              </Card>
            </div>
          </div>

          <div className="relative">
            <img
              src={restaurantInterior}
              alt="Restaurant interior"
              className="rounded-lg shadow-elegant w-full"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-warm-orange/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/30 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
