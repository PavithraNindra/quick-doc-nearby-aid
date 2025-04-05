
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-medical flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12.5 21.5H8a1 1 0 0 1-1-1v-3.294a1 1 0 0 0-.35-.768l-4.3-3.79a1 1 0 0 1 0-1.496l4.3-3.79a1 1 0 0 0 .35-.768V4.5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v3.5"></path>
                  <path d="M16 10.5h6m-3-3v6"></path>
                </svg>
              </div>
              <span className="font-bold text-lg">QuickDoc</span>
            </div>
            <p className="text-gray-400 mb-4">
              Quick access to qualified medical professionals when you need them most.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-white">Find a Doctor</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Emergency Services</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Specialist Consultation</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Home Visits</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Telemedicine</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">How It Works</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Testimonials</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Cookie Policy</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">HIPAA Compliance</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white">Licensing</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} QuickDoc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
