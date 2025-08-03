import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import signatureDishes from "@/assets/signature-dishes.jpg";

const menuItems = [
  {
    name: "Truffle Risotto",
    description: "Creamy arborio rice with black truffle shavings and parmesan",
    price: "$32"
  },
  {
    name: "Seared Duck Breast",
    description: "Pan-seared duck with cherry gastrique and roasted vegetables",
    price: "$38"
  },
  {
    name: "Lobster Thermidor",
    description: "Fresh lobster in rich brandy cream sauce with herbs",
    price: "$45"
  },
  {
    name: "Wagyu Beef Tenderloin",
    description: "Premium wagyu with red wine reduction and truffle mashed potatoes",
    price: "$52"
  },
  {
    name: "Chocolate Soufflé",
    description: "Warm chocolate soufflé with vanilla bean ice cream",
    price: "$16"
  },
  {
    name: "Crème Brûlée",
    description: "Classic vanilla custard with caramelized sugar crust",
    price: "$14"
  }
];

const Menu = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-deep-brown mb-6">
            Signature Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each dish is crafted with passion and the finest ingredients, 
            creating unforgettable flavors that celebrate culinary artistry.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <img 
              src={signatureDishes} 
              alt="Signature dishes" 
              className="rounded-lg shadow-elegant w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/20 to-transparent rounded-lg"></div>
          </div>
          
          <div className="space-y-6">
            {menuItems.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-warm transition-all duration-300 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-xl font-semibold text-deep-brown">
                      {item.name}
                    </h3>
                    <span className="font-bold text-warm-orange text-lg">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
            
            <div className="pt-6">
              <Link to="/menu">
                <Button variant="warm" size="lg" className="w-full">
                  View Full Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;