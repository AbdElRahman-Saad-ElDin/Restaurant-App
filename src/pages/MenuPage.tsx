import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { Leaf, Flame, Star } from "lucide-react";

const fullMenu = {
  appetizers: [
    {
      name: "Truffle Arancini",
      description:
        "Crispy risotto balls filled with truffle and parmesan, served with roasted tomato aioli",
      price: "$18",
      dietary: ["vegetarian"],
      featured: true,
    },
    {
      name: "Seared Scallops",
      description:
        "Pan-seared scallops with cauliflower purée and pancetta crisps",
      price: "$22",
      dietary: [],
      featured: false,
    },
    {
      name: "Burrata Caprese",
      description:
        "Fresh burrata with heirloom tomatoes, basil oil, and aged balsamic",
      price: "$16",
      dietary: ["vegetarian"],
      featured: false,
    },
    {
      name: "Duck Liver Mousse",
      description:
        "Silky duck liver mousse with cherry compote and toasted brioche",
      price: "$20",
      dietary: [],
      featured: true,
    },
  ],
  mains: [
    {
      name: "Wagyu Beef Tenderloin",
      description:
        "Premium wagyu with red wine reduction, truffle mashed potatoes, and seasonal vegetables",
      price: "$52",
      dietary: [],
      featured: true,
    },
    {
      name: "Lobster Thermidor",
      description:
        "Fresh Maine lobster in rich brandy cream sauce with herbs and gruyère",
      price: "$45",
      dietary: [],
      featured: true,
    },
    {
      name: "Truffle Risotto",
      description:
        "Creamy arborio rice with black truffle shavings, wild mushrooms, and aged parmesan",
      price: "$32",
      dietary: ["vegetarian"],
      featured: true,
    },
    {
      name: "Seared Duck Breast",
      description:
        "Pan-seared duck breast with cherry gastrique, roasted vegetables, and duck jus",
      price: "$38",
      dietary: [],
      featured: false,
    },
    {
      name: "Chilean Sea Bass",
      description:
        "Miso-glazed sea bass with baby bok choy and shiitake mushroom broth",
      price: "$42",
      dietary: [],
      featured: false,
    },
    {
      name: "Rack of Lamb",
      description:
        "Herb-crusted rack of lamb with ratatouille and rosemary jus",
      price: "$46",
      dietary: [],
      featured: false,
    },
  ],
  desserts: [
    {
      name: "Chocolate Soufflé",
      description:
        "Warm dark chocolate soufflé with vanilla bean ice cream and berry coulis",
      price: "$16",
      dietary: ["vegetarian"],
      featured: true,
    },
    {
      name: "Crème Brûlée",
      description:
        "Classic vanilla custard with caramelized sugar crust and fresh berries",
      price: "$14",
      dietary: ["vegetarian"],
      featured: false,
    },
    {
      name: "Tiramisu",
      description:
        "Traditional Italian tiramisu with espresso-soaked ladyfingers and mascarpone",
      price: "$15",
      dietary: ["vegetarian"],
      featured: false,
    },
    {
      name: "Lemon Tart",
      description:
        "Tart lemon curd in buttery pastry shell with candied lemon and mint",
      price: "$13",
      dietary: ["vegetarian"],
      featured: true,
    },
  ],
};

const wines = [
  {
    name: "Château Margaux 2015",
    description: "Bordeaux blend with notes of blackcurrant and cedar",
    price: "$450",
    type: "Red Wine",
  },
  {
    name: "Dom Pérignon 2010",
    description: "Vintage champagne with elegant bubbles and complexity",
    price: "$320",
    type: "Champagne",
  },
  {
    name: "Sancerre Loire Valley",
    description: "Crisp Sauvignon Blanc with mineral notes",
    price: "$65",
    type: "White Wine",
  },
  {
    name: "Barolo Brunate 2017",
    description: "Full-bodied Nebbiolo with rich tannins",
    price: "$180",
    type: "Red Wine",
  },
];

const MenuPage = () => {
  const renderMenuItem = (item: any, index: number) => (
    <Card
      key={index}
      className="p-6 hover:shadow-warm transition-all duration-300 bg-card/80 backdrop-blur-sm"
    >
      <CardContent className="p-0">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2">
            <h3 className="font-serif text-xl font-semibold text-deep-brown">
              {item.name}
            </h3>
            {item.featured && (
              <Star className="h-4 w-4 text-warm-orange fill-warm-orange" />
            )}
          </div>
          <span className="font-bold text-warm-orange text-lg">
            {item.price}
          </span>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-3">
          {item.description}
        </p>
        <div className="flex gap-2">
          {item.dietary?.includes("vegetarian") && (
            <Badge
              variant="secondary"
              className="bg-green-100 text-green-800 hover:bg-green-100"
            >
              <Leaf className="h-3 w-3 mr-1" />
              Vegetarian
            </Badge>
          )}
          {item.dietary?.includes("spicy") && (
            <Badge
              variant="secondary"
              className="bg-red-100 text-red-800 hover:bg-red-100"
            >
              <Flame className="h-3 w-3 mr-1" />
              Spicy
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-deep-brown mb-6">
              Our Menu
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our carefully curated selection of dishes, each crafted
              with the finest ingredients and prepared with passion. Our menu
              changes seasonally to showcase the best of each harvest.
            </p>
          </div>

          <section className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-deep-brown mb-8 text-center">
              Appetizers
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {fullMenu.appetizers.map((item, index) =>
                renderMenuItem(item, index)
              )}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-deep-brown mb-8 text-center">
              Main Courses
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {fullMenu.mains.map((item, index) => renderMenuItem(item, index))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-deep-brown mb-8 text-center">
              Desserts
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {fullMenu.desserts.map((item, index) =>
                renderMenuItem(item, index)
              )}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-deep-brown mb-8 text-center">
              Wine Selection
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {wines.map((wine, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-warm transition-all duration-300 bg-card/80 backdrop-blur-sm"
                >
                  <CardContent className="p-0">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-serif text-xl font-semibold text-deep-brown">
                        {wine.name}
                      </h3>
                      <span className="font-bold text-warm-orange text-lg">
                        {wine.price}
                      </span>
                    </div>
                    <Badge
                      variant="outline"
                      className="mb-3 border-warm-orange text-warm-orange"
                    >
                      {wine.type}
                    </Badge>
                    <p className="text-muted-foreground leading-relaxed">
                      {wine.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 text-center">
            <h3 className="font-serif text-2xl font-semibold text-deep-brown mb-4">
              Menu Notes
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-muted-foreground">
              <div>
                <Leaf className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <p className="font-medium mb-1">Dietary Options</p>
                <p className="text-sm">
                  Vegetarian and vegan options available. Please inform us of
                  any allergies.
                </p>
              </div>
              <div>
                <Star className="h-6 w-6 text-warm-orange mx-auto mb-2" />
                <p className="font-medium mb-1">Chef's Favorites</p>
                <p className="text-sm">
                  Items marked with a star are our chef's signature
                  recommendations.
                </p>
              </div>
              <div>
                <Flame className="h-6 w-6 text-red-600 mx-auto mb-2" />
                <p className="font-medium mb-1">Seasonal Menu</p>
                <p className="text-sm">
                  Our menu changes seasonally to feature the finest fresh
                  ingredients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
