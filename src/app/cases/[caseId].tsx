// pages/cases/[caseId].tsx
import { useRouter } from "next/router";
import casesData from "./../data/casesData"; // Import case details

const CaseDetail = () => {
  const router = useRouter();
  const { caseId } = router.query;
  const caseItem = casesData.find((c) => c.id === caseId);

  if (!caseItem) {
    return <p className="text-center text-xl py-10">Case not found</p>;
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-6">{caseItem.title}</h1>
        <div className="max-w-3xl mx-auto">
          <img
            src={caseItem.image}
            alt={caseItem.title}
            className="w-full h-auto rounded-lg shadow-md mb-6"
          />
          <p className="text-lg text-gray-700 mb-4">
            <strong>Patient Concern:</strong> {caseItem.concern}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Diagnosis:</strong> {caseItem.diagnosis}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Procedure:</strong> {caseItem.procedure}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Outcome:</strong> {caseItem.outcome}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseDetail;
