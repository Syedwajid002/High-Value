import React from 'react';
import { ArrowRight, FileText, BuildingIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-8 h-full">
              <div className="p-6 md:p-8 text-white">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <FileText size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">For Job Seekers</h3>
                <p className="text-white/80 mb-6">
                  Create your profile, showcase your skills, and connect with top employers. Your next career opportunity is waiting for you.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-primary-400 rounded-full flex items-center justify-center mr-2">✓</span>
                    Access to thousands of exclusive job listings
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-primary-400 rounded-full flex items-center justify-center mr-2">✓</span>
                    Create a professional profile employers love
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-primary-400 rounded-full flex items-center justify-center mr-2">✓</span>
                    One-click application process
                  </li>
                </ul>
                <Link 
                  to="/candidates" 
                  className="group inline-flex items-center font-medium text-white border-b-2 border-primary-400 hover:border-white transition-colors"
                >
                  Find Your Dream Job
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-secondary-600 to-secondary-800 p-8 h-full">
              <div className="p-6 md:p-8 text-white">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <BuildingIcon size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">For Employers</h3>
                <p className="text-white/80 mb-6">
                  Find top talent for your organization with our comprehensive recruitment solutions. Post jobs and connect with qualified candidates.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-secondary-400 rounded-full flex items-center justify-center mr-2">✓</span>
                    Access to a pool of qualified professionals
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-secondary-400 rounded-full flex items-center justify-center mr-2">✓</span>
                    Smart matching with the right candidates
                  </li>
                  <li className="flex items-center">
                    <span className="w-5 h-5 bg-secondary-400 rounded-full flex items-center justify-center mr-2">✓</span>
                    Comprehensive employer dashboard
                  </li>
                </ul>
                <Link 
                  to="/employers" 
                  className="group inline-flex items-center font-medium text-white border-b-2 border-secondary-400 hover:border-white transition-colors"
                >
                  Post a Job
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;