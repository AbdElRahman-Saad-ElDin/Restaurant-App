import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "/menu" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="font-serif text-2xl font-bold text-deep-brown hover:text-warm-orange transition-colors"
          >
            Byte & Bite
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.href.startsWith("#") ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-warm-orange transition-colors duration-300"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-warm-orange transition-colors duration-300"
                >
                  {item.name}
                </Link>
              )
            )}
            <Link to="/reservation">
              <Button variant="warm" size="sm">
                Reserve Table
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) =>
                item.href.startsWith("#") ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-warm-orange transition-colors duration-300 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground hover:text-warm-orange transition-colors duration-300 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <Link to="/reservation" onClick={() => setIsOpen(false)}>
                <Button variant="warm" size="sm" className="w-fit">
                  Reserve Table
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
