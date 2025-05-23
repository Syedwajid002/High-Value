import React from 'react';
import { ArrowRight, CheckCircle, Building2, Users, PieChart, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Basic',
    price: '$199',
    description: 'Perfect for small businesses and startups',
    features: [
      'Post up to 5 jobs per month',
      'Access to candidate database',
      'Basic analytics dashboard',
      'Email support'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Professional',
    price: '$499',
    description: 'Ideal for growing companies',
    features: [
      'Post up to 15 jobs per month',
      'Advanced candidate filtering',
      'Featured job listings',
      'Comprehensive analytics',
      'Priority email and chat support'
    ],
    cta: 'Choose Professional',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with high-volume hiring',
    features: [
      'Unlimited job postings',
      'Dedicated account manager',
      'Custom integration options',
      'Advanced reporting and analytics',
      'Priority support 24/7',
      'Custom branding options'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

const Employers: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-700 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-64 -top-64 w-[40rem] h-[40rem] rounded-full bg-secondary-500 opacity-10"></div>
          <div className="absolute -left-32 -bottom-32 w-[30rem] h-[30rem] rounded-full bg-primary-500 opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Hire the Best Talent <span className="text-primary-400">Faster</span>
              </h1>
              <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
                Post your jobs to millions of qualified candidates and find the perfect match for your company. Our advanced matching algorithm connects you with the right talent.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/employers/post-job" className="btn bg-primary-500 hover:bg-primary-600 text-white">
                  Post a Job Now
                </Link>
                <Link to="/employers/solutions" className="btn bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white">
                  Explore Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-secondary-600 mb-2">8M+</div>
              <p className="text-neutral-600">Active Professionals</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-secondary-600 mb-2">94%</div>
              <p className="text-neutral-600">Placement Success Rate</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-secondary-600 mb-2">10,000+</div>
              <p className="text-neutral-600">Partner Companies</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-secondary-600 mb-2">18</div>
              <p className="text-neutral-600">Days Average Time-to-Hire</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose High value</h2>
            <p className="text-neutral-600 text-lg">
              Our comprehensive recruiting platform helps you streamline your hiring process and find the perfect candidates faster
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard 
              icon={<Building2 size={32} />}
              title="Company Branding"
              description="Showcase your company culture and values to attract candidates who align with your mission."
              delay={0}
            />
            <BenefitCard 
              icon={<Users size={32} />}
              title="Talent Matching"
              description="Our AI-powered matching system connects you with candidates who have the right skills and experience."
              delay={0.1}
            />
            <BenefitCard 
              icon={<PieChart size={32} />}
              title="Analytics Dashboard"
              description="Gain insights into your recruitment process with comprehensive analytics and reporting."
              delay={0.2}
            />
            <BenefitCard 
              icon={<LineChart size={32} />}
              title="Performance Tracking"
              description="Monitor the performance of your job listings and optimize for better results."
              delay={0.3}
            />
            <BenefitCard 
              icon={<CheckCircle size={32} />}
              title="Screening Tools"
              description="Save time with automated candidate screening and assessment tools."
              delay={0.4}
            />
            <BenefitCard 
              icon={<ArrowRight size={32} />}
              title="Streamlined Process"
              description="Simplify your hiring workflow from job posting to offer letter with our intuitive platform."
              delay={0.5}
            />
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-neutral-600 text-lg">
              Choose the plan that works best for your hiring needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <PricingCard key={index} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Next Great Hire?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of companies that trust High value to connect them with exceptional talent.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/employers/post-job" className="btn bg-white text-primary-600 hover:bg-neutral-100">
                Post a Job
              </Link>
              <Link to="/contact" className="btn bg-primary-500 bg-opacity-30 hover:bg-opacity-40 text-white">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
    >
      <div className="w-14 h-14 bg-secondary-50 text-secondary-500 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </motion.div>
  );
};

interface PricingCardProps {
  plan: {
    name: string;
    price: string;
    description: string;
    features: string[];
    cta: string;
    popular: boolean;
  };
  index: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
        plan.popular ? 'ring-2 ring-primary-500 relative' : ''
      }`}
    >
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          Most Popular
        </div>
      )}
      
      <div className={`p-6 ${plan.popular ? 'bg-primary-50' : 'bg-white'}`}>
        <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
        <p className="text-neutral-600 mb-4">{plan.description}</p>
        <div className="mb-4">
          <span className="text-3xl font-bold">{plan.price}</span>
          {plan.price !== 'Custom' && <span className="text-neutral-500">/month</span>}
        </div>
        
        <ul className="space-y-3 mb-6">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <CheckCircle size={18} className="text-primary-500 shrink-0 mt-0.5 mr-2" />
              <span className="text-neutral-600">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button 
          className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
            plan.popular 
              ? 'bg-primary-500 hover:bg-primary-600 text-white' 
              : 'bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-800'
          }`}
        >
          {plan.cta}
        </button>
      </div>
    </motion.div>
  );
};

export default Employers;