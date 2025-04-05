
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-medical-light to-medical py-16 md:py-24">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Emergency Doctors <span className="text-emergency">Near You</span>
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Quick access to qualified medical professionals when you need them most. Get immediate help from doctors in your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-medical font-medium">
                <MapPin className="mr-2 h-5 w-5" />
                Find Nearby Doctors
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white/10 text-white">
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=580&auto=format&fit=crop" 
                alt="Doctor helping patient" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-emergency flex items-center justify-center emergency-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-xs text-gray-500">Emergency Response</p>
                    <p className="font-semibold text-sm">Within 15 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="hidden md:block absolute top-0 right-0 w-1/3 h-full bg-medical opacity-10 -skew-x-12 transform origin-top-right"></div>
    </div>
  );
};

export default Hero;
