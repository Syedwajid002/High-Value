import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Senior Developer at TechCorp',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=120',
    quote: 'High Value Recruitment Agency helped me find a role that perfectly matched my skills and career aspirations. The process was smooth, and I was able to connect with top companies in my industry.',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    position: 'Product Manager at InnovateX',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=120',
    quote: 'After months of searching on other platforms, I found my dream job through High Value Recruitment Agency within weeks. Their personalized approach and quality job listings made all the difference.',
  },
  {
    id: 3,
    name: 'Emma Chang',
    position: 'UX Designer at DesignHub',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120',
    quote: 'As someone transitioning to a new career field, High Value Recruitment Agency provided invaluable resources and connections. Their platform is intuitive and the support team was incredibly helpful.',
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  
  const next = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };
  
  const prev = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  return (
    <section className="section bg-neutral-900 text-white">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-800">Success Stories</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Hear from professionals who found their perfect career match with High Value Recruitment Agency
            </p>
          </div>
          
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-neutral-800 rounded-2xl p-8 md:p-12"
              >
                <Quote size={48} className="text-primary-500 opacity-30 mb-4" />
                <blockquote className="text-xl md:text-2xl font-light mb-8 italic">
                  "{testimonials[current].quote}"
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src={testimonials[current].avatar} 
                    alt={testimonials[current].name} 
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold">{testimonials[current].name}</div>
                    <div className="text-neutral-400">{testimonials[current].position}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={prev}
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-500 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      current === index ? 'bg-primary-500' : 'bg-neutral-700 hover:bg-neutral-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={next}
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-500 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;