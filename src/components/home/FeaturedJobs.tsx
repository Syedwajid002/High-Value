import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Briefcase, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Types
interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  salary: string;
  type: string;
  postedDate: string;
  featured?: boolean;
}

const handleClick = () => {
  window.location.href = "https://forms.gle/RE4fqx1MGpuwvy8g6";
};


// Mock data
const featuredJobs: Job[] = [
  {
    id: '1',
    title: 'Chief Human Resources Officer',
    company: 'Amrown',
    logo: 'https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=120',
    location: 'San Francisco, CA',
    salary: '$120,000 - $150,000',
    type: 'Full-time',
    postedDate: '2 days ago',
    featured: true
  },
  {
    id: '2',
    title: 'Talent Acquisition Heads (Zonal/State)',
    company: 'Amrown',
    logo: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=120',
    location: 'Remote',
    salary: '$110,000 - $135,000',
    type: 'Full-time',
    postedDate: '1 day ago',
    featured: true
  },
  {
    id: '3',
    title: 'Performance Review Managers',
    company: 'DesignHub',
    logo: 'https://images.pexels.com/photos/3182835/pexels-photo-3182835.jpeg?auto=compress&cs=tinysrgb&w=120',
    location: 'New York, NY',
    salary: '$95,000 - $120,000',
    type: 'Full-time',
    postedDate: '3 days ago'
  },
  {
    id: '4',
    title: 'HR Policy Compliance Officers',
    company: 'CloudSolutions',
    logo: 'https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=120',
    location: 'Austin, TX',
    salary: '$130,000 - $160,000',
    type: 'Full-time',
    postedDate: '5 days ago'
  }
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const FeaturedJobs: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-[#902537]">Featured Jobs</h2>
            <p className="text-neutral-600">Discover your next career opportunity</p>
          </div>
          <Link
            to="/jobs"
            className="mt-4 md:mt-0 group flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
          >
            View all jobs
            <ArrowUpRight size={18} className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <motion.div variants={item}>
      {/* <Link to={`/jobs/${job.id}`} className="block"> */}
      <Link to={`/jobs`} className="block">

        <div className="card group h-full flex flex-col">
          {job.featured && (
            <div className="inline-block absolute top-4 right-4 bg-accent-500 text-white text-xs font-medium px-2 py-1 rounded">
              Featured
            </div>
          )}

          <div className="flex items-center mb-4">
            <img
              src={job.logo}
              alt={`${job.company} logo`}
              className="w-12 h-12 object-cover rounded-md mr-3"
            />
            <div>
              <h3 className="font-semibold text-lg group-hover:text-primary-500 transition-colors">{job.title}</h3>
              <p className="text-neutral-600">{job.company}</p>
            </div>
          </div>

          <div className="flex-grow space-y-3 mb-4">
            <div className="flex items-center text-neutral-600">
              <MapPin size={16} className="mr-2 text-neutral-400" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center text-neutral-600">
              <DollarSign size={16} className="mr-2 text-neutral-400" />
              <span>{job.salary}</span>
            </div>
            <div className="flex items-center text-neutral-600">
              <Briefcase size={16} className="mr-2 text-neutral-400" />
              <span>{job.type}</span>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-neutral-200">
            <div className="flex items-center text-neutral-500">
              <Clock size={16} className="mr-2" />
              <span className="text-sm">{job.postedDate}</span>
            </div>
            <button className="text-primary-500 font-medium hover:underline"
              onClick={handleClick}
            >Apply</button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default FeaturedJobs;