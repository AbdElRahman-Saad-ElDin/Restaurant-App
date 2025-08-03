import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-deep-brown mb-6">
            Visit Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We look forward to welcoming you for an extraordinary dining
            experience. Reserve your table today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center bg-card/80 backdrop-blur-sm hover:shadow-warm transition-all duration-300">
            <CardContent className="p-0">
              <MapPin className="h-8 w-8 text-warm-orange mx-auto mb-4" />
              <h3 className="font-semibold text-deep-brown mb-2">Location</h3>
              <p className="text-muted-foreground text-sm">
                123 Culinary Avenue
                <br />
                Downtown District
                <br />
                New York, NY 10001
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 text-center bg-card/80 backdrop-blur-sm hover:shadow-warm transition-all duration-300">
            <CardContent className="p-0">
              <Phone className="h-8 w-8 text-warm-orange mx-auto mb-4" />
              <h3 className="font-semibold text-deep-brown mb-2">Phone</h3>
              <p className="text-muted-foreground text-sm">
                Reservations
                <br />
                (555) 123-4567
                <br />
                Call daily
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 text-center bg-card/80 backdrop-blur-sm hover:shadow-warm transition-all duration-300">
            <CardContent className="p-0">
              <Clock className="h-8 w-8 text-warm-orange mx-auto mb-4" />
              <h3 className="font-semibold text-deep-brown mb-2">Hours</h3>
              <p className="text-muted-foreground text-sm">
                Tue - Sat: 5:00 PM - 11:00 PM
                <br />
                Sunday: 4:00 PM - 10:00 PM
                <br />
                Monday: Closed
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 text-center bg-card/80 backdrop-blur-sm hover:shadow-warm transition-all duration-300">
            <CardContent className="p-0">
              <Mail className="h-8 w-8 text-warm-orange mx-auto mb-4" />
              <h3 className="font-semibold text-deep-brown mb-2">Email</h3>
              <p className="text-muted-foreground text-sm">
                reservations@
                <br />
                Byte&Bite.com
                <br />
                info@Byte&Bite.com
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link to="/reservation">
            <Button
              variant="reservation"
              size="lg"
              className="text-lg px-12 py-4 h-auto"
            >
              Make a Reservation
            </Button>
          </Link>
          <p className="text-muted-foreground mt-4">
            We recommend booking in advance. Same-day reservations subject to
            availability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
