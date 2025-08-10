import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search, MapPin, Briefcase, Filter, ChevronDown, X, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock job data
const allJobs = [
  {
    id: '1',
    title: 'Chief Human Resources Officer',
    company: 'Amrown',
    logo: 'https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=120',
    location: 'San Francisco, CA',
    salary: '$120,000 - $150,000',
    type: 'Full-time',
    category: 'tech',
    postedDate: '2 days ago',
    featured: true,
    description: 'We are looking for an experienced Chief Human Resources Officer to join our team...'
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'Amrown',
    logo: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=120',
    location: 'Remote',
    salary: '$110,000 - $135,000',
    type: 'Full-time',
    category: 'tech',
    postedDate: '1 day ago',
    featured: true,
    description: 'We\'re seeking a skilled Product Manager to lead our product development...'
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    company: 'Amrown',
    logo: 'https://images.pexels.com/photos/3182835/pexels-photo-3182835.jpeg?auto=compress&cs=tinysrgb&w=120',
    location: 'New York, NY',
    salary: '$95,000 - $120,000',
    type: 'Full-time',
    category: 'design',
    postedDate: '3 days ago',
    description: 'Join our creative team as a UX/UI Designer and help shape digital experiences...'
  },
  {
    id: '4',
    title: 'Talent Acquisition Heads (Zonal/State)',
    company: 'Amrown',
    logo: 'https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=120',
    location: 'Austin, TX',
    salary: '$130,000 - $160,000',
    type: 'Full-time',
    category: 'tech',
    postedDate: '5 days ago',
    description: 'We need a skilled Talent Acquisition Heads (Zonal/State) to improve our infrastructure...'
  },
  {
    id: '5',
    title: 'Financial Analyst',
    company: 'Amrown',
    logo: 'https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&w=120',
    location: 'Chicago, IL',
    salary: '$85,000 - $105,000',
    type: 'Full-time',
    category: 'finance',
    postedDate: '1 week ago',
    description: 'Join our finance team and help analyze financial data to drive business decisions...'
  },
  {
    id: '6',
    title: 'Marketing Specialist',
    company: 'Amrown',
    logo: 'https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=120',
    location: 'Remote',
    salary: '$70,000 - $90,000',
    type: 'Full-time',
    category: 'marketing',
    postedDate: '3 days ago',
    description: 'We\'re looking for a creative Marketing Specialist to help grow our brand...'
  },
  {
    id: '7',
    title: 'Performance Review Managers',
    company: 'Amrown',
    logo: 'https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=120',
    location: 'Boston, MA',
    salary: '$75,000 - $95,000',
    type: 'Full-time',
    category: 'healthcare',
    postedDate: '4 days ago',
    description: 'Join our healthcare team as a Registered Nurse providing patient care...'
  },
  {
    id: '8',
    title: 'HR Policy Compliance Officers',
    company: 'Amrown',
    logo: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=120',
    location: 'Seattle, WA',
    salary: '$125,000 - $155,000',
    type: 'Full-time',
    category: 'tech',
    postedDate: '2 days ago',
    featured: true,
    description: 'We\'re seeking a talented HR Policy Compliance Officers to analyze complex Policies...'
  }
];

const handleClick = () => {
  window.location.href = "https://forms.gle/RE4fqx1MGpuwvy8g6";
};

const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Temporary', 'Internship'];
const experienceLevels = ['Entry Level', 'Mid Level', 'Senior Level', 'Director', 'Executive'];
const categories = ['Tech', 'Finance', 'Healthcare', 'Marketing', 'Design', 'Sales'];

const Jobs: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categoryParam ? [categoryParam] : []
  );
  const [showFilters, setShowFilters] = useState(false);

  // Filter jobs based on search criteria
  const filteredJobs = allJobs.filter(job => {
    // Search query filter
    const matchesSearch = searchQuery === '' ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase());

    // Location filter
    const matchesLocation = selectedLocation === '' ||
      job.location.toLowerCase().includes(selectedLocation.toLowerCase());

    // Job type filter
    const matchesType = selectedType.length === 0 ||
      selectedType.some(type => job.type.toLowerCase() === type.toLowerCase());

    // Category filter
    const matchesCategory = selectedCategories.length === 0 ||
      selectedCategories.some(category => job.category.toLowerCase() === category.toLowerCase());

    return matchesSearch && matchesLocation && matchesType && matchesCategory;
  });

  const toggleJobType = (type: string) => {
    if (selectedType.includes(type)) {
      setSelectedType(selectedType.filter(t => t !== type));
    } else {
      setSelectedType([...selectedType, type]);
    }
  };

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedLocation('');
    setSelectedType([]);
    setSelectedCategories([]);
  };

  return (
    <div className="bg-neutral-50 min-h-screen">
      <div className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Job</h1>
            <p className="text-lg text-neutral-200 mb-8">
              Browse through thousands of full-time and part-time jobs near you
            </p>

            <div className="bg-white rounded-xl shadow-xl p-1.5">
              <div className="flex flex-col md:flex-row">
                <div className="flex-grow p-2 flex items-center">
                  <Search size={20} className="text-neutral-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Job title, keyword, or company"
                    className="w-full p-2 focus:outline-none text-neutral-800"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex-grow p-2 flex items-center border-t md:border-t-0 md:border-l border-neutral-200">
                  <MapPin size={20} className="text-neutral-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full p-2 focus:outline-none text-neutral-800"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                  />
                </div>
                <button
                  className="bg-primary-500 text-white font-medium px-6 py-4 rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center"
                >
                  Search Jobs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">
            {/* {filteredJobs.length} Jobs Available */}
            5000+ Jobs Available
          </h2>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-neutral-50 md:hidden"
          >
            <Filter size={18} />
            Filters
            <ChevronDown size={16} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`w-full md:w-1/4 bg-white rounded-xl shadow-sm p-6 mb-6 md:mb-0 md:sticky md:top-24 md:h-fit transition-all duration-300 ${showFilters ? 'block' : 'hidden md:block'
            }`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Filters</h3>
              {(selectedType.length > 0 || selectedCategories.length > 0 || selectedLocation) && (
                <button
                  onClick={clearFilters}
                  className="text-primary-500 text-sm font-medium hover:underline"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Job Type Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Job Type</h4>
              <div className="space-y-2">
                {jobTypes.map((type, index) => (
                  <label key={index} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-primary-500 rounded focus:ring-primary-500"
                      checked={selectedType.includes(type)}
                      onChange={() => toggleJobType(type)}
                    />
                    <span className="ml-2 text-neutral-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Experience Level Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Experience Level</h4>
              <div className="space-y-2">
                {experienceLevels.map((level, index) => (
                  <label key={index} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-primary-500 rounded focus:ring-primary-500"
                    />
                    <span className="ml-2 text-neutral-700">{level}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Categories Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Categories</h4>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <label key={index} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-primary-500 rounded focus:ring-primary-500"
                      checked={selectedCategories.includes(category.toLowerCase())}
                      onChange={() => toggleCategory(category.toLowerCase())}
                    />
                    <span className="ml-2 text-neutral-700">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Salary Range */}
            <div>
              <h4 className="font-medium mb-3">Salary Range</h4>
              <input
                type="range"
                min="30000"
                max="200000"
                step="10000"
                className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-neutral-500 mt-2">
                <span>$30k</span>
                <span>$200k+</span>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="w-full md:w-3/4">
            {selectedType.length > 0 || selectedCategories.length > 0 || selectedLocation || searchQuery ? (
              <div className="bg-white rounded-lg p-4 mb-6 flex flex-wrap gap-2 items-center">
                <span className="text-neutral-700 font-medium">Active Filters:</span>

                {searchQuery && (
                  <div className="flex items-center bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">
                    Search: {searchQuery}
                    <button onClick={() => setSearchQuery('')} className="ml-2">
                      <X size={14} />
                    </button>
                  </div>
                )}

                {selectedLocation && (
                  <div className="flex items-center bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">
                    Location: {selectedLocation}
                    <button onClick={() => setSelectedLocation('')} className="ml-2">
                      <X size={14} />
                    </button>
                  </div>
                )}

                {selectedType.map(type => (
                  <div key={type} className="flex items-center bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">
                    {type}
                    <button onClick={() => toggleJobType(type)} className="ml-2">
                      <X size={14} />
                    </button>
                  </div>
                ))}

                {selectedCategories.map(category => (
                  <div key={category} className="flex items-center bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm capitalize">
                    {category}
                    <button onClick={() => toggleCategory(category)} className="ml-2">
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            ) : null}

            {filteredJobs.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <img
                  src="https://images.pexels.com/photos/7516509/pexels-photo-7516509.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="No jobs found"
                  className="w-64 h-64 object-cover mx-auto mb-6 rounded-lg opacity-75"
                />
                <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
                <p className="text-neutral-600 mb-6">
                  We couldn't find any jobs matching your search criteria. Try adjusting your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="btn btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
              >
                {filteredJobs.map((job, index) => (
                  <JobCard key={job.id} job={job} index={index} />
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface JobCardProps {
  job: any;
  index: number;
}

const JobCard: React.FC<JobCardProps> = ({ job, index }) => {
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    navigate(`/jobs/${id}`)
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <div className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6" onClick={() => handleClick(job.id)}>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="flex items-start mb-4 md:mb-0">
            <img
              src={job.logo}
              alt={`${job.company} logo`}
              className="w-16 h-16 object-cover rounded-lg mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold group-hover:text-primary-500 transition-colors">
                {job.title}
                {job.featured && (
                  <span className="ml-2 bg-accent-500 text-white text-xs font-medium px-2 py-0.5 rounded">
                    Featured
                  </span>
                )}
              </h3>
              <p className="text-neutral-600">{job.company}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <div className="flex items-center text-neutral-500 text-sm">
                  <MapPin size={14} className="mr-1" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center text-neutral-500 text-sm">
                  <DollarSign size={14} className="mr-1" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center text-neutral-500 text-sm">
                  <Briefcase size={14} className="mr-1" />
                  <span>{job.type}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:ml-auto flex flex-col md:flex-row gap-3 items-center">
            <span className="text-sm text-neutral-500">{job.postedDate}</span>
            <button className="w-full md:w-auto px-5 py-2 bg-primary-50 text-primary-600 font-medium rounded-lg hover:bg-primary-100 transition-colors"
              onClick={handleClick}
            >
              Apply Now
            </button>
          </div>
        </div>

        <div className="mt-4 border-t border-neutral-100 pt-4">
          <p className="text-neutral-600 line-clamp-2">{job.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Jobs;