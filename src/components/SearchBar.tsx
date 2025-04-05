
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  onSearch?: (query: string, location: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query, location);
    }
  };

  const handleLocationDetect = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation("Current Location");
          // In a real app, we would use the coordinates to find the actual address
          // position.coords.latitude, position.coords.longitude
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 -mt-8 relative z-20 mx-4 md:mx-auto max-w-4xl">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search by specialty or doctor name"
            className="pl-10 h-12"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        
        <div className="flex-1 relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Enter your location"
            className="pl-10 h-12"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Button 
            type="button" 
            variant="ghost" 
            size="sm" 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-medical h-8"
            onClick={handleLocationDetect}
          >
            Detect
          </Button>
        </div>
        
        <Button type="submit" className="h-12 bg-medical hover:bg-medical-dark">
          Find Doctors
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
