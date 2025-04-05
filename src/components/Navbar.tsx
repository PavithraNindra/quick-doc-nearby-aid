
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-30">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-medical flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12.5 21.5H8a1 1 0 0 1-1-1v-3.294a1 1 0 0 0-.35-.768l-4.3-3.79a1 1 0 0 1 0-1.496l4.3-3.79a1 1 0 0 0 .35-.768V4.5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v3.5"></path>
              <path d="M16 10.5h6m-3-3v6"></path>
            </svg>
          </div>
          <span className="font-bold text-lg text-gray-900">QuickDoc</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-medical">Home</Link>
          <Link to="/doctors" className="text-gray-700 hover:text-medical">Find Doctors</Link>
          <Link to="/about" className="text-gray-700 hover:text-medical">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-medical">Contact</Link>
        </div>
        
        <Button className="bg-emergency hover:bg-emergency-dark transition-colors">
          <Phone className="h-4 w-4 mr-2" />
          Emergency Call
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
