import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Search, Clock, Phone, ExternalLink } from "lucide-react";

interface Location {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  distance: string;
}

const sampleLocations: Location[] = [
  {
    id: 1,
    name: "City Recycling Center",
    address: "123 Green Street, Downtown",
    phone: "(555) 123-4567",
    hours: "Mon-Sat: 8AM-6PM",
    distance: "0.8 miles",
  },
  {
    id: 2,
    name: "EcoHub Collection Point",
    address: "456 Sustainability Ave, Midtown",
    phone: "(555) 234-5678",
    hours: "Mon-Fri: 9AM-5PM",
    distance: "1.2 miles",
  },
  {
    id: 3,
    name: "Tech Recycle Station",
    address: "789 Innovation Blvd, Tech District",
    phone: "(555) 345-6789",
    hours: "Tue-Sun: 10AM-7PM",
    distance: "2.1 miles",
  },
];

export const DropOffLocations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locations] = useState<Location[]>(sampleLocations);

  const filteredLocations = locations.filter(loc =>
    loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    loc.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Find Drop-Off Locations</h2>
        <p className="text-muted-foreground">
          Locate e-waste collection centers near you
        </p>
      </div>

      <Card className="p-4 shadow-medium">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by location name or address..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" size="icon">
            <MapPin className="h-4 w-4" />
          </Button>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredLocations.map((location) => (
          <Card key={location.id} className="p-5 shadow-soft hover:shadow-medium transition-all">
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">{location.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{location.distance} away</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">{location.address}</p>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4 flex-shrink-0" />
                  <span className="text-xs">{location.hours}</span>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span className="text-xs">{location.phone}</span>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => window.open(`https://maps.google.com?q=${encodeURIComponent(location.address)}`, '_blank')}
              >
                <ExternalLink className="h-3 w-3 mr-2" />
                Get Directions
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {filteredLocations.length === 0 && (
        <Card className="p-8 text-center">
          <p className="text-muted-foreground">
            No locations found. Try a different search term.
          </p>
        </Card>
      )}
    </div>
  );
};
