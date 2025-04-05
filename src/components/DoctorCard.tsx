
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Doctor } from "@/data/doctors";
import { MapPin, Star, Phone } from "lucide-react";
import { Link } from "react-router-dom";

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className="flex flex-col h-full">
          <div className="relative">
            <img
              src={doctor.imageUrl}
              alt={doctor.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="absolute top-3 right-3 bg-white py-1 px-2 rounded-full text-sm font-medium flex items-center">
              <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
              {doctor.rating}
            </div>
            {doctor.availableNow && (
              <div className="absolute top-3 left-3 bg-green-500 text-white py-1 px-3 rounded-full text-xs font-medium">
                Available Now
              </div>
            )}
          </div>
          
          <div className="p-5 flex-grow">
            <h3 className="font-bold text-lg mb-1">{doctor.name}</h3>
            <p className="text-gray-600 mb-2">{doctor.specialty}</p>
            
            <div className="flex items-center text-gray-500 mb-4">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{doctor.distance} away</span>
            </div>
            
            <div className="mt-4 space-y-2">
              <Link to={`/doctor/${doctor.id}`}>
                <Button variant="outline" className="w-full">View Profile</Button>
              </Link>
              <Button className="w-full bg-medical hover:bg-medical-dark">
                <Phone className="h-4 w-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
