
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { doctors } from "@/data/doctors";
import { useParams, Link } from "react-router-dom";
import { MapPin, Star, Phone, Mail, ArrowLeft, Clock, Award, Globe } from "lucide-react";

const DoctorProfile = () => {
  const { id } = useParams<{ id: string }>();
  const doctor = doctors.find(d => d.id === Number(id));

  if (!doctor) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-12 flex-grow">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Doctor Not Found</h2>
            <p className="text-gray-600 mb-6">The doctor you're looking for doesn't exist.</p>
            <Link to="/">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-medical/5 py-6">
          <div className="container mx-auto px-4">
            <Link to="/" className="text-medical hover:underline inline-flex items-center mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Doctors
            </Link>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <img 
                    src={doctor.imageUrl} 
                    alt={doctor.name} 
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  
                  <Card className="mb-4">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-3">Contact Information</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <MapPin className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                          <div>
                            <p className="font-medium">Office Address</p>
                            <p className="text-gray-600">{doctor.address}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Phone className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                          <div>
                            <p className="font-medium">Phone</p>
                            <p className="text-gray-600">{doctor.phone}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Mail className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                          <div>
                            <p className="font-medium">Email</p>
                            <p className="text-gray-600">{doctor.email}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="space-y-3">
                    <Button className="w-full bg-emergency hover:bg-emergency-dark">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now
                    </Button>
                    <Button variant="outline" className="w-full">
                      Schedule Appointment
                    </Button>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h1 className="text-2xl md:text-3xl font-bold">{doctor.name}</h1>
                      <p className="text-gray-600">{doctor.specialty}</p>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="bg-gray-100 py-1 px-3 rounded-full flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                        <span className="font-medium">{doctor.rating}</span>
                        <span className="text-gray-500 ml-1">({doctor.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  
                  {doctor.availableNow && (
                    <div className="mb-6 bg-green-50 text-green-700 py-2 px-4 rounded-md inline-flex items-center">
                      <Clock className="h-5 w-5 mr-2" />
                      <span className="font-medium">Available Now</span>
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-3">About</h2>
                    <p className="text-gray-700 mb-4">
                      {doctor.bio}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center mb-3">
                          <Award className="h-5 w-5 text-medical mr-2" />
                          <h3 className="font-semibold">Education & Training</h3>
                        </div>
                        <ul className="space-y-2">
                          {doctor.education.map((edu, index) => (
                            <li key={index} className="text-gray-700">• {edu}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center mb-3">
                          <Globe className="h-5 w-5 text-medical mr-2" />
                          <h3 className="font-semibold">Languages</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {doctor.languages.map((language, index) => (
                            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {language}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-3">Insurance Accepted</h3>
                      <div className="flex flex-wrap gap-2">
                        {doctor.insuranceAccepted.map((insurance, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {insurance}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DoctorProfile;
