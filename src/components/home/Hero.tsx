import React, { useEffect, useRef } from 'react';
import { ArrowRight, Search, Building2, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-64 -top-64 w-[40rem] h-[40rem] rounded-full bg-primary-500 opacity-10"></div>
        <div className="absolute -left-32 -bottom-32 w-[30rem] h-[30rem] rounded-full bg-secondary-500 opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Find Your Dream Career With <span className="text-secondary-400">High value</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 mb-8">
              Connecting exceptional talent with world-class companies.
              Your perfect job match is just a search away.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white rounded-xl shadow-xl p-1.5 mb-8"
          >
            <div className="flex flex-col md:flex-row">
              <div className="flex-grow p-2 flex items-center">
                <Search size={20} className="text-neutral-400 mr-2" />
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Job title, keyword, or company"
                  className="w-full p-2 focus:outline-none text-neutral-800"
                />
              </div>
              <Link
                to="/jobs"
                className="bg-primary-500 text-white font-medium px-6 py-4 rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center"
              >
                Find Jobs <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-6 text-neutral-200"
          >
            <div className="flex items-center">
              <Briefcase size={18} className="mr-2" />
              <span>10,000+ Jobs</span>
            </div>
            <div className="flex items-center">
              <Building2 size={18} className="mr-2" />
              <span>1,500+ Companies</span>
            </div>
            <div className="flex items-center">
              <Users size={18} className="mr-2" />
              <span>8M+ Professionals</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto text-white fill-current">
          <path d="M0,96L80,85.3C160,75,320,53,480,48C640,43,800,53,960,58.7C1120,64,1280,64,1360,64L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;