import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Target, Clock, MapPin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

// Team data
const teamMembers = [
  {
    name: 'Jennifer Reynolds',
    position: 'CEO & Founder',
    bio: 'With over 15 years in recruitment and HR tech, Jennifer founded High value Recruitment Agency to transform how companies find talent.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120',
  },
  {
    name: 'Michael Chen',
    position: 'CTO',
    bio: 'Michael leads our technology team, focusing on building innovative solutions that connect employers with the right candidates.',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=120',
  },
  {
    name: 'Sarah Johnson',
    position: 'Head of Client Success',
    bio: 'Sarah ensures our clients achieve their recruitment goals by providing strategic guidance and support.',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=120',
  },
  {
    name: 'David Rodriguez',
    position: 'Director of Marketing',
    bio: 'David develops our marketing strategies, ensuring High value Recruitment Agency reaches both job seekers and employers effectively.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120',
  },
];

// Values data
const values = [
  {
    icon: <Users size={28} />,
    title: 'People First',
    description: 'We believe in putting people at the center of everything we do, focusing on creating meaningful connections between talent and opportunity.'
  },
  {
    icon: <Award size={28} />,
    title: 'Excellence',
    description: 'We strive for excellence in our platform, our service, and our relationships with clients and candidates.'
  },
  {
    icon: <Target size={28} />,
    title: 'Innovation',
    description: 'We continuously evolve our technology and approach to better serve the changing needs of the job market.'
  },
  {
    icon: <Clock size={28} />,
    title: 'Efficiency',
    description: 'We value efficiency in our processes and in the hiring solutions we provide to our clients.'
  },
];

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-64 -top-64 w-[40rem] h-[40rem] rounded-full bg-primary-500 opacity-10"></div>
          <div className="absolute -left-32 -bottom-32 w-[30rem] h-[30rem] rounded-full bg-secondary-500 opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About <span className="text-secondary-400">High value Recruitment Agency</span>
              </h1>
              <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
                We're on a mission to transform how companies find talent and how professionals discover opportunities. Our platform connects exceptional candidates with forward-thinking employers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-neutral-700 mb-4 leading-relaxed">
                High value Recruitment Agency was founded in 2020 with a simple yet powerful vision: to create a recruitment platform that truly understands the needs of both employers and job seekers.
              </p>
              <p className="text-neutral-700 mb-4 leading-relaxed">
                After years of working in traditional recruitment, our founder Jennifer Reynolds recognized the inefficiencies and disconnects in the hiring process. She assembled a team of industry experts and technology innovators to build a solution that would transform the recruitment landscape.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Today, High value Recruitment Agency has grown to serve thousands of companies and millions of job seekers worldwide, leveraging advanced technology to create meaningful connections between talent and opportunity.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-500 text-white p-4 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-neutral-600 text-lg">
              The principles that guide everything we do at High value Recruitment Agency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ValueCard 
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-neutral-600 text-lg">
              Meet the experts behind High value Recruitment Agency who are passionate about connecting talent with opportunity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard 
                key={index}
                member={member}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">8M+</div>
              <p>Registered Professionals</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">10K+</div>
              <p>Partner Companies</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">150K+</div>
              <p>Jobs Filled</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">25+</div>
              <p>Countries Served</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-neutral-50 rounded-2xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-neutral-600 mb-8">
                  Have questions about High value Recruitment Agency? We'd love to hear from you. Reach out to our team using the contact information below.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mr-4">
                      <MapPin size={20} className="text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Our Headquarters</h3>
                      <p className="text-neutral-600">11-24-786 Nakkalgutta HNK</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mr-4">
                      <Mail size={20} className="text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email Us</h3>
                      <p className="text-neutral-600">contact@High value Recruitment Agency.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mr-4">
                      <Phone size={20} className="text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Call Us</h3>
                      <p className="text-neutral-600">+91 709765435</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link to="/contact" className="btn btn-primary">
                    Contact Us
                  </Link>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold mb-6">Join Our Team</h3>
                <p className="mb-6">
                  We're always looking for talented individuals who are passionate about connecting people with opportunities. Explore our open positions and become part of our mission.
                </p>
                
                <h4 className="font-semibold mb-3">Why Work With Us:</h4>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-white text-primary-600 flex items-center justify-center mr-2">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>Innovative and dynamic work environment</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-white text-primary-600 flex items-center justify-center mr-2">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>Competitive benefits and compensation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-white text-primary-600 flex items-center justify-center mr-2">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>Professional growth and development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-white text-primary-600 flex items-center justify-center mr-2">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>Make a meaningful impact on people's careers</span>
                  </li>
                </ul>
                
                <Link to="/careers" className="btn bg-white text-primary-600 hover:bg-neutral-100">
                  View Open Positions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="bg-white rounded-xl shadow-sm p-6 h-full">
        <div className="w-14 h-14 bg-primary-50 text-primary-500 rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-neutral-600">{description}</p>
      </div>
    </motion.div>
  );
};

interface TeamMemberCardProps {
  member: {
    name: string;
    position: string;
    bio: string;
    avatar: string;
  };
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="bg-white rounded-xl shadow-sm overflow-hidden h-full">
        <img 
          src={member.avatar} 
          alt={member.name} 
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
          <p className="text-primary-500 mb-3">{member.position}</p>
          <p className="text-neutral-600">{member.bio}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;