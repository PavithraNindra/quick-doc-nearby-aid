
export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  imageUrl: string;
  rating: number;
  reviews: number;
  distance: string;
  availableNow: boolean;
  address: string;
  phone: string;
  email: string;
  bio: string;
  education: string[];
  languages: string[];
  insuranceAccepted: string[];
  latitude: number;
  longitude: number;
}

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Emergency Medicine",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 4.9,
    reviews: 124,
    distance: "0.8 miles",
    availableNow: true,
    address: "123 Medical Center Dr, Suite 101",
    phone: "(555) 123-4567",
    email: "sarah.johnson@example.com",
    bio: "Dr. Johnson is a board-certified emergency medicine physician with over 10 years of experience handling critical care situations. She specializes in rapid diagnosis and treatment of acute medical conditions.",
    education: [
      "MD, Harvard Medical School",
      "Residency in Emergency Medicine, Johns Hopkins Hospital"
    ],
    languages: ["English", "Spanish"],
    insuranceAccepted: ["Blue Cross", "Aetna", "UnitedHealthcare", "Medicare"],
    latitude: 37.7854,
    longitude: -122.4064
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Family Medicine",
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 4.7,
    reviews: 98,
    distance: "1.2 miles",
    availableNow: true,
    address: "456 Health Parkway, Suite 202",
    phone: "(555) 234-5678",
    email: "michael.chen@example.com",
    bio: "Dr. Chen provides comprehensive primary care with a focus on preventive medicine. He offers holistic treatment approaches and has extensive experience in managing chronic conditions and acute health issues.",
    education: [
      "MD, University of California, San Francisco",
      "Residency in Family Medicine, Stanford Medical Center"
    ],
    languages: ["English", "Mandarin"],
    insuranceAccepted: ["Blue Cross", "Cigna", "Kaiser Permanente", "Medicare"],
    latitude: 37.7814,
    longitude: -122.4124
  },
  {
    id: 3,
    name: "Dr. Amara Patel",
    specialty: "Pediatrics",
    imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 4.8,
    reviews: 112,
    distance: "1.5 miles",
    availableNow: false,
    address: "789 Children's Way, Suite 303",
    phone: "(555) 345-6789",
    email: "amara.patel@example.com",
    bio: "Dr. Patel is a compassionate pediatrician who specializes in newborn care, childhood development, and adolescent medicine. She takes a family-centered approach to healthcare and is dedicated to supporting children's physical and emotional wellbeing.",
    education: [
      "MD, Northwestern University",
      "Residency in Pediatrics, Children's Hospital of Philadelphia"
    ],
    languages: ["English", "Hindi", "Gujarati"],
    insuranceAccepted: ["Blue Shield", "Aetna", "UnitedHealthcare", "Medicaid"],
    latitude: 37.7894,
    longitude: -122.4154
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Cardiology",
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 4.9,
    reviews: 143,
    distance: "2.1 miles",
    availableNow: true,
    address: "1010 Heart Center Blvd, Suite 405",
    phone: "(555) 456-7890",
    email: "james.wilson@example.com",
    bio: "Dr. Wilson is an experienced cardiologist specializing in cardiovascular disease management, heart attack prevention, and emergency cardiac care. He uses the latest technologies and approaches to provide optimal care for patients with heart conditions.",
    education: [
      "MD, Yale School of Medicine",
      "Residency in Internal Medicine, Massachusetts General Hospital",
      "Fellowship in Cardiology, Cleveland Clinic"
    ],
    languages: ["English"],
    insuranceAccepted: ["Blue Cross", "Aetna", "Cigna", "Medicare", "Humana"],
    latitude: 37.7714,
    longitude: -122.4194
  },
  {
    id: 5,
    name: "Dr. Elena Rodriguez",
    specialty: "Internal Medicine",
    imageUrl: "https://images.unsplash.com/photo-1651008376662-d5f5dba4494c?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 4.6,
    reviews: 87,
    distance: "0.9 miles",
    availableNow: false,
    address: "222 Wellness Avenue, Suite 505",
    phone: "(555) 567-8901",
    email: "elena.rodriguez@example.com",
    bio: "Dr. Rodriguez is an internal medicine physician who focuses on adult healthcare, including diagnosis and treatment of complex illnesses and chronic disease management. She emphasizes preventive care and patient education in her practice.",
    education: [
      "MD, Columbia University College of Physicians and Surgeons",
      "Residency in Internal Medicine, New York-Presbyterian Hospital"
    ],
    languages: ["English", "Spanish", "Portuguese"],
    insuranceAccepted: ["Blue Cross", "UnitedHealthcare", "Medicare", "Oscar"],
    latitude: 37.7884,
    longitude: -122.4014
  },
  {
    id: 6,
    name: "Dr. Marcus Brown",
    specialty: "Emergency Medicine",
    imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&h=200&auto=format&fit=crop",
    rating: 4.8,
    reviews: 102,
    distance: "1.7 miles",
    availableNow: true,
    address: "333 Urgent Care Lane, Suite 606",
    phone: "(555) 678-9012",
    email: "marcus.brown@example.com",
    bio: "Dr. Brown specializes in emergency medicine with additional training in trauma care. He is experienced in handling critical situations requiring immediate medical intervention and has worked in some of the busiest emergency departments in the country.",
    education: [
      "MD, University of Michigan Medical School",
      "Residency in Emergency Medicine, Cook County Hospital",
      "Fellowship in Trauma Care, Shock Trauma Center"
    ],
    languages: ["English"],
    insuranceAccepted: ["Blue Cross", "Aetna", "Cigna", "Medicare", "Medicaid"],
    latitude: 37.7674,
    longitude: -122.4114
  }
];
