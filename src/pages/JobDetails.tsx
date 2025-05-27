import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, Clock, DollarSign, Briefcase, Share2, Bookmark, ChevronLeft, Heart, Building, GraduationCap, Users } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock job data
const job = {
  id: '1',
  title: 'Senior Frontend Developer',
  company: 'TechCorp',
  logo: 'https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=120',
  location: 'San Francisco, CA',
  salary: '$120,000 - $150,000',
  type: 'Full-time',
  category: 'tech',
  postedDate: '2 days ago',
  featured: true,
  description: 'We are looking for an experienced Frontend Developer to join our team and help us build beautiful, responsive web applications. The ideal candidate has a strong understanding of modern JavaScript frameworks, particularly React, and has experience building complex user interfaces.',
  responsibilities: [
    'Develop new user-facing features using React.js',
    'Build reusable components and libraries for future use',
    'Translate designs and wireframes into high-quality code',
    'Optimize components for maximum performance across a vast array of web-capable devices and browsers',
    'Coordinate with the design team to ensure seamless implementation of UI/UX designs',
    'Integrate with backend services and APIs',
    'Collaborate with other team members and stakeholders',
    'Troubleshoot and debug issues'
  ],
  requirements: [
    '5+ years of experience in frontend development',
    'Strong proficiency in JavaScript, including ES6+ features',
    'Thorough understanding of React.js and its core principles',
    'Experience with popular React workflows (Redux, Hooks, etc.)',
    'Knowledge of modern HTML/CSS standards and best practices',
    'Experience with responsive design and cross-browser compatibility',
    'Good understanding of SEO principles and ensuring that applications are accessible',
    'Excellent problem-solving skills and attention to detail'
  ],
  benefits: [
    'Competitive salary and equity package',
    'Comprehensive health, dental, and vision insurance',
    'Flexible work hours and remote work options',
    'Professional development budget',
    '401(k) matching',
    'Generous vacation policy',
    'Regular team events and activities',
    'Modern office with snacks and beverages'
  ],
  companyInfo: {
    name: 'TechCorp',
    description: 'TechCorp is a leading technology company focused on creating innovative web and mobile applications that solve real-world problems. Founded in 2010, we have grown to over 500 employees worldwide and have been recognized as one of the best places to work in tech.',
    employees: '500+',
    founded: '2010',
    industry: 'Technology',
    website: 'https://techcorp.example.com'
  }
};

const handleClick = () => {
  window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdmNo0MewBCoUJ8ZmYHm4HjwnKTg2enO4hmWhXJ0Gq5PQ5zKA/viewform?usp=header";
};

const JobDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="bg-neutral-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link to="/jobs" className="inline-flex items-center text-primary-600 hover:text-primary-700">
            <ChevronLeft size={16} className="mr-1" />
            Back to Jobs
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-white rounded-xl shadow-sm mb-8">
                {/* Job Header */}
                <div className="p-6 border-b border-neutral-100">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="w-16 h-16 object-cover rounded-lg mr-4 mb-4 md:mb-0"
                    />
                    <div>
                      <h1 className="text-2xl md:text-3xl font-bold mb-1">{job.title}</h1>
                      <p className="text-lg text-neutral-600 mb-3">{job.company}</p>
                      <div className="flex flex-wrap gap-3">
                        <div className="flex items-center text-neutral-500">
                          <MapPin size={16} className="mr-1" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center text-neutral-500">
                          <Calendar size={16} className="mr-1" />
                          <span>Posted {job.postedDate}</span>
                        </div>
                        <div className="flex items-center text-neutral-500">
                          <Clock size={16} className="mr-1" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Details */}
                <div className="p-6 border-b border-neutral-100 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mr-3">
                      <DollarSign size={20} className="text-primary-500" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Salary</p>
                      <p className="font-medium">{job.salary}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mr-3">
                      <Briefcase size={20} className="text-primary-500" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Job Type</p>
                      <p className="font-medium">{job.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mr-3">
                      <GraduationCap size={20} className="text-primary-500" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Experience</p>
                      <p className="font-medium">5+ years</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="p-6 flex flex-wrap gap-3">
                  <button className="btn btn-primary flex-grow md:flex-grow-0"
                    onClick={handleClick}>Apply Now</button>
                  <button className="btn btn-outline flex-grow md:flex-grow-0">
                    <Heart size={18} />
                    Save Job
                  </button>
                  <button className="p-3 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>

              {/* Job Description */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">Job Description</h2>
                <p className="text-neutral-700 mb-6 leading-relaxed">{job.description}</p>

                <h3 className="text-lg font-semibold mb-3">Responsibilities</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2 text-neutral-700">
                  {job.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2 text-neutral-700">
                  {job.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h3 className="text-lg font-semibold mb-3">Benefits</h3>
                <ul className="list-disc pl-5 space-y-2 text-neutral-700">
                  {job.benefits.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Apply Section */}
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl shadow-md p-8 text-white">
                <button className="text-2xl font-bold mb-3"
                  onClick={handleClick}
                >Ready to Apply?</button>
                <p className="mb-6 text-white/90">
                  Submit your application now and take the next step in your career journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn bg-white text-primary-600 hover:bg-neutral-100"
                    onClick={handleClick}>Apply Now</button>
                  <button className="btn bg-primary-400 bg-opacity-30 hover:bg-opacity-40">
                    Save for Later
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {/* Company Info */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Company Information</h2>
                <div className="mb-4">
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{job.companyInfo.name}</h3>
                <p className="text-neutral-600 mb-4">{job.companyInfo.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <Building size={16} className="text-neutral-500 mr-2" />
                    <p className="text-neutral-700">
                      <span className="font-medium">Industry:</span> {job.companyInfo.industry}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="text-neutral-500 mr-2" />
                    <p className="text-neutral-700">
                      <span className="font-medium">Company Size:</span> {job.companyInfo.employees}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="text-neutral-500 mr-2" />
                    <p className="text-neutral-700">
                      <span className="font-medium">Founded:</span> {job.companyInfo.founded}
                    </p>
                  </div>
                </div>

                <a
                  href={job.companyInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-primary-500 hover:underline"
                >
                  Visit Website
                </a>
              </div>

              {/* Similar Jobs */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Similar Jobs</h2>
                <div className="space-y-4">
                  {[...Array(3)].map((_, index) => (
                    <Link key={index} to={`/jobs/${index + 2}`} className="block">
                      <div className="p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors">
                        <h3 className="font-semibold mb-1 text-primary-600">
                          {index === 0 ? 'Frontend Developer' : index === 1 ? 'React Developer' : 'UI Engineer'}
                        </h3>
                        <p className="text-neutral-600 text-sm mb-2">
                          {index === 0 ? 'InnovateX' : index === 1 ? 'WebSolutions' : 'DigitalCraft'}
                        </p>
                        <div className="flex items-center text-neutral-500 text-sm">
                          <MapPin size={14} className="mr-1" />
                          <span>
                            {index === 0 ? 'Remote' : index === 1 ? 'New York, NY' : 'Seattle, WA'}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default JobDetails;