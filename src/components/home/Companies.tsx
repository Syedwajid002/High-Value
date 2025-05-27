import React from 'react';
// import { motion } from 'framer-motion';

// const companyLogos = [
//   { name: 'Google', logoUrl: 'https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=120' },
//   { name: 'Microsoft', logoUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=120' },
//   { name: 'Apple', logoUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=120' },
//   { name: 'Amazon', logoUrl: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=120' },
//   { name: 'Netflix', logoUrl: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=120' },
//   { name: 'Facebook', logoUrl: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=120' },
// ];

const Companies: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-[#902537]">About High Value Recruitment Agency</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            We are the exclusive recruitment partner for Amrown, one of the fastest-growing and most innovative startups in the world. Tasked with hiring 500,000 professionals across India, we specialize in connecting talent with long-term opportunities in technology, operations, customer service, logistics, and more.


          </p>
        </div>

        {/* <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {companyLogos.map((company, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src={company.logoUrl} 
                  alt={`${company.name} logo`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default Companies;