
import { useEffect, useRef } from "react";
import { doctors } from "@/data/doctors";

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // In a real application, we would use a proper mapping library like Google Maps or Mapbox
    // For now, we'll just render a placeholder that shows the concept
  }, []);

  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100 relative">
      <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
        <div className="text-gray-500 text-center p-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto mb-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
            />
          </svg>
          <p className="text-lg font-medium">Interactive Map</p>
          <p className="text-sm">
            In the full version, this will display a map with {doctors.length} nearby doctors
          </p>
        </div>
      </div>
      <div ref={mapRef} className="h-[400px] w-full" />
    </div>
  );
};

export default Map;
