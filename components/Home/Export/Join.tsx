 import React from 'react'
import { Mail, MessageCircle, Clock } from 'lucide-react';

interface ContactDetail {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
  link?: string;
}

const Join = () => {

    const contactDetails: ContactDetail[] = [
    {
      icon: <Mail className="w-10 h-10" />,
      title: 'Email',
      value: 'pathumimadhubhashini@gmail.com',
      subtitle: 'For export inquiries'
    },
    {
      icon: <MessageCircle className="w-10 h-10" />,
      title: 'WhatsApp',
      value: '+94 76 743 4043',
      subtitle: '24/7 Available',
      link: 'https://wa.me/94767434043'
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: 'Response Time',
      value: 'Within 24 Hours',
      subtitle: 'Monday - Sunday'
    }
  ];

  return (
    <div>
        <section className="py-16 px-8 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-green-900 mb-8 text-center">
          Join With Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactDetails.map((contact: ContactDetail, index: number) => {
            const CardContent = (
              <div className="text-center p-6 bg-green-800 rounded-lg hover:bg-gray-200 transition-colors duration-300 group">
                <div className="flex justify-center mb-3 text-white group-hover:text-green-800">{contact.icon}</div>
                <h3 className="text-xl font-bold text-white group-hover:text-green-800 mb-2">{contact.title}</h3>
                <p className="text-white group-hover:text-green-800">{contact.value}</p>
                <p className="text-sm text-gray-200 group-hover:text-gray-600 mt-2">{contact.subtitle}</p>
              </div>
            );

            return contact.link ? (
              <a key={index} href={contact.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                {CardContent}
              </a>
            ) : (
              <div key={index}>
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section></div>
  )
}

export default Join