// import img100 from "../assets/oil.png";
import ind1 from "../assets/image3.jpeg";
import ind2 from "../assets/image4.jpeg";
import ind3 from "../assets/image6.jpg";

import { FaIndustry, FaShippingFast, FaGraduationCap, FaHospitalAlt, FaHotel } from "react-icons/fa";

export const industries = [
  {
    id: "oil-gas",
    title: "Oil & Gas Sector",
    // icon: <img src={img100} alt="icon" className="h-10 w-10 object-contain" />,
    features: [
      "Gas lockers", "PPGI cabinets", "Fireproof solutions",
      "Heavy-duty storage", "Custom oil storage", "Hazard protection",
      "Corrosion resistant units", "Safety cabinets"
    ],
    images: [ind1, ind2, ind3, ind1, ind2, ind3] // more than 5 images
  },
  {
    id: "industrial",
    title: "Industrial & Manufacturing Sector",
    // icon: <FaIndustry className="text-3xl text-primary" />,
    features: [
      "Tool cabinets", "Component storage", "PP cabinets",
      "Workbenches", "Machinery storage", "Assembly units",
      "Heavy shelving", "Custom racks"
    ],
    images: [ind2, ind3, ind1, ind2, ind3, ind1]
  },
  // ...other industries
];
