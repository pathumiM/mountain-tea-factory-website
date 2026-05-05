import React from 'react'
import { Package, Tag, CheckCircle, Ship, FileText, Globe } from 'lucide-react';

interface Capability {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Capabilities = () => {

  const capabilities: Capability[] = [
    {
      icon: <Package className="w-12 h-12 text-green-700" />,
      title: 'Bulk Orders',
      description: 'Handle orders from 100kg to 100,000kg+ with consistent quality. Flexible MOQ for new partnerships.'
    },
    {
      icon: <Tag className="w-12 h-12 text-green-700" />,
      title: 'Private Labeling',
      description: 'Custom packaging and branding services. We help you create your unique tea brand.'
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-green-700" />,
      title: 'Quality Assurance',
      description: 'ISO 22000 certified facility. Multi-stage testing ensures premium quality in every batch.'
    },
    {
      icon: <Ship className="w-12 h-12 text-green-700" />,
      title: 'Global Shipping',
      description: 'FOB, CIF, and door-to-door delivery. Partnership with major shipping lines worldwide.'
    },
    {
      icon: <FileText className="w-12 h-12 text-green-700" />,
      title: 'Full Documentation',
      description: 'Complete export documentation, customs clearance support, and certificate of origin.'
    },
    {
      icon: <Globe className="w-12 h-12 text-green-700" />,
      title: 'Compliance',
      description: 'Meet international standards: EU, FDA, HACCP, and organic certifications available.'
    }
  ];

  return (
    <div>
         <section className="py-16 px-8 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-green-900 mb-4 text-center">
          Our Export Capabilities
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Comprehensive solutions for international tea buyers and distributors
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability: Capability, index: number) => (
            <div key={index} className="bg-green-950 p-6 rounded-lg shadow-md border-l-4 border-gray- hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">{capability.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {capability.title}
              </h3>
              <p className="text-white leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Capabilities