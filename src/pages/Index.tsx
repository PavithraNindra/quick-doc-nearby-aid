
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import DoctorList from "@/components/DoctorList";
import Map from "@/components/Map";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <SearchBar />
        
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How QuickDoc Works</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We connect you with nearby qualified doctors who can provide immediate medical assistance, right when you need it.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto h-12 w-12 rounded-full bg-medical/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-medical" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Find Nearby</h3>
                <p className="text-gray-600 text-sm">
                  Search for qualified doctors in your area using your location.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto h-12 w-12 rounded-full bg-medical/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-medical" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Choose a Doctor</h3>
                <p className="text-gray-600 text-sm">
                  Select a doctor based on specialty, ratings, and availability.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto h-12 w-12 rounded-full bg-medical/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-medical" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Contact Instantly</h3>
                <p className="text-gray-600 text-sm">
                  Connect with the doctor through call, chat, or video consultation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto h-12 w-12 rounded-full bg-medical/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-medical" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Get Quick Help</h3>
                <p className="text-gray-600 text-sm">
                  Receive immediate medical assistance or schedule a home visit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Find Doctors On The Map</h2>
                <p className="text-gray-600 mb-6">
                  See all available doctors in your area with our interactive map. Quickly identify who's closest to you and get directions.
                </p>
                <Button className="bg-medical hover:bg-medical-dark mb-8">
                  Open Full Map
                </Button>
                <Map />
              </div>
              
              <div className="md:w-1/2">
                <DoctorList />
              </div>
            </div>
          </div>
        </div>
        
        <div className="py-12 bg-medical text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Need Emergency Help?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't wait during an emergency. Connect with qualified doctors now and get immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-medical font-medium">
                Find Nearby Doctors
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white/10 text-white">
                <Phone className="h-5 w-5 mr-2" />
                Emergency Call
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
