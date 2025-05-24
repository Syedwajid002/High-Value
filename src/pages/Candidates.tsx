import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, FileText, Users, PieChart, Star, Upload, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const resources = [
  {
    title: 'Resume Writing Tips',
    description: 'Learn how to create a standout resume that gets noticed by recruiters.',
    icon: <FileText size={24} />,
    link: '/resources/resume-tips'
  },
  {
    title: 'Interview Preparation',
    description: 'Master the art of interviewing with our comprehensive guide.',
    icon: <Users size={24} />,
    link: '/resources/interview-prep'
  },
  {
    title: 'Salary Negotiation',
    description: 'Strategies to help you negotiate the best compensation package.',
    icon: <PieChart size={24} />,
    link: '/resources/salary-negotiation'
  },
  {
    title: 'Career Development',
    description: 'Resources for continuous learning and professional growth.',
    icon: <Star size={24} />,
    link: '/resources/career-development'
  }
];

const testimonials = [
  {
    quote: "High Value Recruitment Agency helped me find a role that perfectly matched my skills and aspirations. I received multiple job offers within two weeks!",
    name: "Sarah Johnson",
    position: "Software Engineer",
    company: "TechCorp",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=120"
  },
  {
    quote: "The platform's job matching algorithm is incredible. It recommended positions I hadn't considered but that turned out to be perfect for my career path.",
    name: "Michael Chen",
    position: "UX Designer",
    company: "DesignHub",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=120"
  }
];

const Candidates: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-64 -top-64 w-[40rem] h-[40rem] rounded-full bg-primary-500 opacity-10"></div>
          <div className="absolute -left-32 -bottom-32 w-[30rem] h-[30rem] rounded-full bg-accent-500 opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Find Your Dream Career <span className="text-red-900">Today</span>
              </h1>
              <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
                Browse thousands of job opportunities and connect with top employers. Your perfect job match is just a search away.
              </p>
              
              <div className="bg-white rounded-xl shadow-xl p-1.5 mb-8">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-grow p-2 flex items-center">
                    <Search size={20} className="text-neutral-400 mr-2" />
                    <input
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
              </div>
              
              <div className="flex items-center text-neutral-200">
                <span className="mr-4">Popular searches:</span>
                <div className="flex flex-wrap gap-2">
                  <Link to="/jobs?category=tech" className="bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded-full text-sm">
                    Software Engineer
                  </Link>
                  <Link to="/jobs?category=marketing" className="bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded-full text-sm">
                    Marketing
                  </Link>
                  <Link to="/jobs?category=design" className="bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-1 rounded-full text-sm">
                    UX Design
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-neutral-600 text-lg">
              Our streamlined process helps you find and land your dream job in just a few steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <StepCard 
              number="1"
              title="Create Your Profile"
              description="Sign up and build your professional profile highlighting your skills and experience."
              icon={<FileText size={32} />}
              delay={0}
            />
            <StepCard 
              number="2"
              title="Discover Opportunities"
              description="Browse jobs matching your skills, experience, and career goals."
              icon={<Search size={32} />}
              delay={0.1}
            />
            <StepCard 
              number="3"
              title="Apply & Connect"
              description="Apply to positions with a single click and connect with employers."
              icon={<CheckCircle size={32} />}
              delay={0.2}
            />
          </div>
        </div>
      </section>
      
      {/* Upload Resume */}
      <section className="py-20 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-4">Upload Your Resume</h2>
                  <p className="text-neutral-600 mb-6">
                    Let employers find you. Upload your resume and make yourself visible to thousands of companies looking for talent like yours.
                  </p>
                  
                  <div className="mb-6 border-2 border-dashed border-neutral-300 rounded-lg p-8 text-center bg-neutral-50">
                    <Upload size={40} className="mx-auto mb-4 text-neutral-400" />
                    <p className="text-neutral-600 mb-3">Drag and drop your resume or</p>
                    <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                      Browse Files
                    </button>
                    <p className="mt-3 text-neutral-500 text-sm">Supported formats: PDF, DOCX, RTF</p>
                  </div>
                  
                  <div className="flex items-center">
                    <CheckCircle size={18} className="text-primary-500 mr-2" />
                    <span className="text-neutral-600">Employers can find you directly</span>
                  </div>
                </motion.div>
              </div>
              
              <div className="md:w-1/2 bg-gradient-to-br from-primary-600 to-primary-800 p-8 md:p-12 text-white">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold mb-4">Why Create a Profile?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-white text-primary-500 flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle size={14} />
                      </div>
                      <span>Get discovered by employers looking for your skills</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-white text-primary-500 flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle size={14} />
                      </div>
                      <span>Apply to jobs with a single click</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-white text-primary-500 flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle size={14} />
                      </div>
                      <span>Track your job applications in one place</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-white text-primary-500 flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle size={14} />
                      </div>
                      <span>Receive personalized job recommendations</span>
                    </li>
                  </ul>
                  
                  <button className="mt-8 px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-neutral-100 transition-colors">
                    Create Profile
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Career Resources */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Career Resources</h2>
            <p className="text-neutral-600 text-lg">
              Tools and guides to help you at every stage of your career journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <ResourceCard 
                key={index}
                title={resource.title}
                description={resource.description}
                icon={resource.icon}
                link={resource.link}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-neutral-600 text-lg">
              Hear from professionals who found their dream jobs through High Value Recruitment Agency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Job Search?</h2>
            <p className="text-xl text-white/90 mb-8">
              Create your profile today and take the first step towards your dream career.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register" className="btn bg-white text-primary-600 hover:bg-neutral-100">
                Create Your Profile
              </Link>
              <Link to="/jobs" className="btn bg-primary-500 bg-opacity-30 hover:bg-opacity-40 text-white">
                Browse Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="relative">
        <div className="w-20 h-20 bg-primary-50 text-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
          {icon}
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </motion.div>
  );
};

interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  index: number;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, icon, link, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={link} className="block h-full">
        <div className="bg-white border border-neutral-200 rounded-xl p-6 h-full hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-primary-50 text-primary-500 rounded-full flex items-center justify-center mb-4">
            {icon}
          </div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-neutral-600 mb-4">{description}</p>
          <div className="text-primary-500 font-medium flex items-center group">
            Learn More 
            <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

interface TestimonialCardProps {
  testimonial: {
    quote: string;
    name: string;
    position: string;
    company: string;
    avatar: string;
  };
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center mb-4">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-neutral-500 text-sm">{testimonial.position} at {testimonial.company}</p>
          </div>
        </div>
        <p className="text-neutral-700 italic">"{testimonial.quote}"</p>
      </div>
    </motion.div>
  );
};

export default Candidates;