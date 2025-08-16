// components/Experience.tsx
import React from "react";

const experiences = [
  {
    role: "Associate Dentist",
    company: "Smile by Al-Khaleej Clinics",
    period: "2023-2024",
    description: "Worked on aligners, restorative procedures, and pediatric dentistry.",
  },
  {
    role: "Intern",
    company: "Aesthetics & Dental Studio",
    period: "2023",
    description: "Specialized in aesthetic procedures like PRP, micro-needling, and HydraFacial.",
  },
  {
    role: "House Officer",
    company: "Bahria University Medical and Dental College",
    period: "2021-2022",
    description: "Diagnosed and treated patients with oral care needs and prosthesis placement.",
  },
];

const Experience = () => {
  return (
    <section className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full"></div>
            <div className="ml-6">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-500">{exp.company} – {exp.period}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
