import React from 'react';
import { Search, FileText, Users, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <Search size={32} />,
    title: 'Search Jobs',
    description: 'Browse thousands of opportunities tailored to your skills and preferences.'
  },
  {
    icon: <FileText size={32} />,
    title: 'Create Profile',
    description: 'Build your professional profile to showcase your experience and abilities.'
  },
  {
    icon: <Users size={32} />,
    title: 'Apply & Connect',
    description: 'Apply to positions and connect directly with hiring managers.'
  },
  {
    icon: <Check size={32} />,
    title: 'Land Your Dream Job',
    description: 'Receive offers and start your career journey with confidence.'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="section bg-gradient-to-br from-primary-50 to-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#902537]">How High Value Recruitment Agency Works</h2>
          <p className="text-neutral-600 text-lg">
            Our streamlined process helps you find and land your dream job with ease
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                  {step.icon}
                </div>
                <div className="relative mb-8 h-0.5 bg-primary-100">
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-neutral-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;