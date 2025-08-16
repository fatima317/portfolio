// components/Skills.tsx
import React from "react";
import { FaTooth, FaLaptopCode } from "react-icons/fa";
import { CheckCircleIcon, DropletIcon } from "lucide-react"; 

const skills = [
  {
    category: "Dental Skills",
    icon: <FaTooth className="text-blue-500 w-10 h-10" />,
    items: [
      "Diagnosis & Consultation",
      "Scaling, Polishing & Teeth Whitening",
      "Endodontics",
      "Restorative Dentistry",
      "Conventional Braces & Clear Aligners",
      "Extractions",
      "Surgical Procedures (Flaps, Alveoplasty)",
      "Prosthodontics",
      "Pediatric Dentistry",
    ],
  },
  {
    category: "Facial Aesthetics Skills",
    icon: <DropletIcon className="text-purple-500 w-10 h-10" />,
    items: [
      "Face & Hair PRP",
      "Face & Hair PRF",
      "Mesotherapy",
      "Micro-needling",
      "BB Glow",
      "HydraFacial",
      "Vampire Facial",
    ]
  }
];

const Skills = () => {
  return (
    <section className="container mx-auto py-12 px-6">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Skills</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="flex justify-center mb-4">{skill.icon}</div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">{skill.category}</h3>
            <ul className="space-y-2">
              {skill.items.map((item, i) => (
                <li key={i} className="flex items-center text-gray-600">
                  <CheckCircleIcon className="text-blue-500 w-5 h-5 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
