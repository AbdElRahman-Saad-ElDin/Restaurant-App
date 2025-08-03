import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Users, Phone, Mail, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";

const Reservation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    requests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation Request Submitted!",
      description:
        "We'll contact you within 24 hours to confirm your reservation.",
    });
  };

  const timeSlots = [
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
  ];

  const occasions = [
    "Birthday",
    "Anniversary",
    "Date Night",
    "Business Dinner",
    "Celebration",
    "Casual Dining",
    "Other",
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-deep-brown mb-4">
              Reserve Your Table
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us for an unforgettable culinary experience. Please fill out
              the form below and we'll confirm your reservation within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="bg-card/80 backdrop-blur-sm shadow-elegant">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-deep-brown">
                  Reservation Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="h-4 w-4 text-warm-orange" />
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="flex items-center gap-2"
                      >
                        <Mail className="h-4 w-4 text-warm-orange" />
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-warm-orange" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-background/50"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-warm-orange" />
                        Date
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-warm-orange" />
                        Time
                      </Label>
                      <Select
                        value={formData.time}
                        onValueChange={(value) =>
                          setFormData({ ...formData, time: value })
                        }
                      >
                        <SelectTrigger className="bg-background/50">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-warm-orange" />
                        Guests
                      </Label>
                      <Select
                        value={formData.guests}
                        onValueChange={(value) =>
                          setFormData({ ...formData, guests: value })
                        }
                      >
                        <SelectTrigger className="bg-background/50">
                          <SelectValue placeholder="# of guests" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "Guest" : "Guests"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Special Occasion</Label>
                    <Select
                      value={formData.occasion}
                      onValueChange={(value) =>
                        setFormData({ ...formData, occasion: value })
                      }
                    >
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Select occasion (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        {occasions.map((occasion) => (
                          <SelectItem key={occasion} value={occasion}>
                            {occasion}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="requests">Special Requests</Label>
                    <Textarea
                      id="requests"
                      placeholder="Dietary restrictions, seating preferences, etc."
                      value={formData.requests}
                      onChange={(e) =>
                        setFormData({ ...formData, requests: e.target.value })
                      }
                      className="bg-background/50 min-h-[100px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="reservation"
                    size="lg"
                    className="w-full"
                  >
                    Submit Reservation Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-card/80 backdrop-blur-sm shadow-warm">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-deep-brown">
                    Reservation Policy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>• Reservations are confirmed within 24 hours</p>
                  <p>• Tables are held for 15 minutes past reservation time</p>
                  <p>• Cancellations must be made 24 hours in advance</p>
                  <p>• Large parties (8+) may require a deposit</p>
                  <p>
                    • Special dietary needs can be accommodated with advance
                    notice
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm shadow-warm">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-deep-brown">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-warm-orange" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-warm-orange" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">
                        reservations@Byte&Bite.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-warm-orange" />
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-muted-foreground text-sm">
                        Tue-Sat: 5:00 PM - 11:00 PM
                        <br />
                        Sunday: 4:00 PM - 10:00 PM
                        <br />
                        Monday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
