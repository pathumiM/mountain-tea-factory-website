import React from 'react';
import { Award, Leaf, CheckCircle, Microscope, Heart, FileCheck } from 'lucide-react';

interface Certification {
  icon: React.ReactNode;
  name: string;
  type: string;
}

const Certification = () => {
  const certifications: Certification[] = [
    { icon: <Award className="w-10 h-10 text-green-700" />, name: 'ISO 22000', type: 'Food Safety' },
    { icon: <Leaf className="w-10 h-10 text-green-600" />, name: 'Organic', type: 'EU & USDA' },
    { icon: <CheckCircle className="w-10 h-10 text-green-700" />, name: 'HACCP', type: 'Certified' },
    { icon: <Microscope className="w-10 h-10 text-green-600" />, name: 'FDA', type: 'Approved' },
    { icon: <Heart className="w-10 h-10 text-green-700" />, name: 'Fair Trade', type: 'Certified' },
    { icon: <FileCheck className="w-10 h-10 text-green-600" />, name: 'Ceylon Tea', type: 'Logo License' }
  ];

  return (
    <div>
      <section className="py-16 px-8 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-green-900 mb-4 text-center">
            International Certifications
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Meeting global standards for quality and safety
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert: Certification, index: number) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-3">{cert.icon}</div>
                <p className="font-bold text-gray-900">{cert.name}</p>
                <p className="text-sm text-gray-600">{cert.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certification;