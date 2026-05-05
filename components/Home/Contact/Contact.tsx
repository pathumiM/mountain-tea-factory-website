 'use client';
import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaMap } from 'react-icons/fa';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setStatus('');
    
    if (!name || !email || !message) {
      setStatus('error-Fill all fields!');
      setTimeout(() => setStatus(''), 5000);
      return;
    }
    
    if (!email.includes('@')) {
      setStatus('error-Invalid email!');
      setTimeout(() => setStatus(''), 5000);
      return;
    }
    
    setLoading(true);
    
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '',
          name, 
          email, 
          message,
          subject: 'New Contact Form Submission - Tea Factory',
          to: 'pathumimadhubhashini@gmail.com'
        })
      });
      
      if (res.ok) {
        setStatus('success-Message sent successfully!');
        setName(''); 
        setEmail(''); 
        setMessage('');
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error-Failed to send message!');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch {
      setStatus('error-Error sending message!');
      setTimeout(() => setStatus(''), 5000);
    }
    
    setLoading(false);
  };

  const isError = status.startsWith('error');
  const displayStatus = status.split('-')[1];

  return (
    <div className="min-h-screen py-20 px-4" style={{
      backgroundImage: 'url(/images/contactba.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg font-bold text-gray-600 max-w-2xl mx-auto">
            Get in touch with our tea factory. We're here to answer your questions and discuss your tea needs.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-6">
            
            {/* Location Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="text-emerald-900 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-900 mb-2">Location</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Tea Factory Road<br/>
                    Deniyaya, Sri Lanka 81500
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <FaPhoneAlt className="text-emerald-900 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-900 mb-2">Phone</h3>
                  <p className="text-gray-600">+94 41 227 1234</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <FaEnvelope className="text-emerald-900 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-900 mb-2">Email</h3>
                  <p className="text-gray-600">info@teafactory.lk</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <FaClock className="text-emerald-900 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-emerald-900 mb-2">Business Hours</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Mon-Fri: 8 AM - 5 PM<br/>
                    Sat: 9 AM - 2 PM<br/>
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-emerald-900 mb-4 flex items-center">
                <FaMap className="mr-2" /> Find Us
              </h3>
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31687.89012345678!2d80.55123456789012!3d6.345678901234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e1234567890a%3A0x1234567890abcdef!2sDeniyaya!5e0!3m2!1sen!2slk!4v1234567890123!5m2!1sen!2slk"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Tea Factory Location"
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 lg:p-10 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">Send us a Message</h2>
            
            {status && (
              <div className={`mb-6 p-4 rounded-lg border-l-4 ${
                isError 
                  ? 'bg-red-50 border-red-500 text-red-700' 
                  : 'bg-green-50 border-green-500 text-green-700'
              }`}>
                <p className="font-medium">{displayStatus}</p>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Enter Your Message..."
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors duration-200 resize-vertical"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white text-lg transition-all duration-300 ${
                  loading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-emerald-950 hover:bg-emerald-700 hover:shadow-lg transform hover:-translate-y-1'
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
