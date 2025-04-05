
import { useState } from "react";
import { doctors } from "@/data/doctors";
import DoctorCard from "./DoctorCard";
import { Button } from "@/components/ui/button";

const DoctorList = () => {
  const [filter, setFilter] = useState("all");
  
  const filteredDoctors = filter === "available" 
    ? doctors.filter(doctor => doctor.availableNow)
    : doctors;

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Nearby Doctors</h2>
          <div className="flex gap-2">
            <Button 
              variant={filter === "all" ? "default" : "outline"} 
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-medical hover:bg-medical-dark" : ""}
            >
              All Doctors
            </Button>
            <Button 
              variant={filter === "available" ? "default" : "outline"} 
              onClick={() => setFilter("available")}
              className={filter === "available" ? "bg-medical hover:bg-medical-dark" : ""}
            >
              Available Now
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
        
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No doctors available that match your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorList;
