// components/Cases.tsx
import React from "react";
import Link from "next/link";

const cases = [
  {
    id: "endo-case-1",
    title: "Endodontic Treatment",
    description: "Successfully treated a root canal case with precision.",
    image: "/PM-endo-2.jpeg",
  },
  {
    id: "anterior-tooth-restoration",
    title: "Anterior Tooth Restoration",
    description: "Restored an anterior tooth with composite resin for a natural look.",
    image: "/3_fillng_after.jpeg",
  },
  {
    id: "endo-case-2",
    title: "Endodontic Treatment",
    description: "Successfully treated a complex root canal case with precision.",
    image: "/molar-endo.jpeg",
  },
  {
    id: "scaling-polishing-1",
    title: "Scaling & Polishing",
    description: "Enhanced teeth brightness and improved aesthetics.",
    image: "/scaling_after_2.jpeg",
  },
  {
    id: "re-endo-case",
    title: "Re-Endodontic Treatment",
    description: "Successfully treated a complex re-root canal case with precision.",
    image: "/molar-re-endo.jpeg",
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    description: "Enhanced teeth brightness and improved aesthetics.",
    image: "/after_p-4.jpeg",
  },
  {
    id: "endo-case-3",
    title: "Endodontic Treatment",
    description: "Successfully treated a root canal case with precision.",
    image: "/CI-endo.jpeg",
  },
  {
    id: "scaling-polishing-2",
    title: "Scaling & Polishing",
    description: "Enhanced teeth brightness and improved aesthetics.",
    image: "/scaling_after_1.jpeg",
  },
  {
    id: "fixed-retainer",
    title: "Fixed Retainer",
    description: "Placed a fixed retainer to maintain teeth alignment.",
    image: "/retainer.jpeg",
  },
  {
    id: "endo-case-4",
    title: "Endodontic Treatment",
    description: "Successfully treated a root canal case with precision.",
    image: "/pm-endo.jpeg",
  },
  {
    id: "ebts-placements",
    title: "EBTS Placements",
    description: "Placed EBTS successfully.",
    image: "/ebts.jpeg",
  },
];

const Cases = () => {
  return (
    <section id="cases" className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Dental Cases</h2>
        <p className="text-lg text-center mb-10">
          Explore some of my dental cases, ranging from cosmetic to restorative treatments.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem) => (
            <Link key={caseItem.id} href={`/cases/${caseItem.id}`} passHref>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition cursor-pointer">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{caseItem.title}</h3>
                <p className="text-gray-600">{caseItem.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
