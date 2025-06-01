import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Target, Clock, MapPin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

// Team data
const teamMembers =
{
  name: 'Mohd Muneer',
  position: 'CEO & Founder',
  bio: 'With over 15 years in recruitment and HR tech, Jennifer founded High Value Recruitment Agency to transform how companies find talent.',
  avatar: 'https://pbs.twimg.com/profile_images/1631766593578631169/k3W6R53P_400x400.jpg',
}
  ;

// Values data
const values = [
  {
    icon: <Users size={28} />,
    title: 'Exclusive Access',
    description: 'Jobs listed with us are only available through our agency.'
  },
  {
    icon: <Award size={28} />,
    title: 'Scale with Quality',
    description: 'We operate with advanced AI-powered screening, ensuring precision at scale.'
  },
  {
    icon: <Target size={28} />,
    title: 'Trusted by Visionaries',
    description: 'Amrown chose us for our integrity, delivery speed, and global hiring systems.'
  },
  {
    icon: <Clock size={28} />,
    title: 'Local & National Reach',
    description: '200+ regional offices across India with recruitment support in over 25 languages.'
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
                <span className="text-red-700">Who We Are
                </span>
              </h1>
              <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
                We are a high-value recruitment agency dedicated to delivering top-tier talent at extraordinary scale. Backed by a deep commitment to precision hiring and workforce transformation, our agency is proudly contracted to recruit 500,000 employees exclusively for Amrown, a global disruptor in technology, digital infrastructure, and human-centric innovation.

                Our mission is to redefine employment by aligning the right people with the right roles—across 200+ cities in India—within a framework of integrity, growth, and impact.

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
              <h2 className="text-3xl md:text-4xl font-bold mb-6"> Our Strategic Alliance with Amrown</h2>
              <p className="text-neutral-700 mb-4 leading-relaxed">
                In 2025, we signed an exclusive Memorandum of Understanding (MoU) with Amrown, a pioneering tech-driven startup poised to revolutionize industries across 80+ nations. Under this historic partnership:
                <ul>
                  <li>We will hire 500,000 employees for Amrown across India.</li>
                  <li>Recruitment spans multiple verticals: technology, support, logistics, finance, operations, design, HR, and more.</li>
                  <li>All placements are dedicated solely to Amrown’s ecosystem — making us their exclusive workforce partner.</li>
                </ul>

                <span>This collaboration marks one of the largest private recruitment initiatives in Indian history.</span>
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
              {/* <div className="absolute -bottom-6 -left-6 bg-primary-500 text-white p-4 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Years of Excellence</div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4"> What Makes Us Different
            </h2>
            <p className="text-neutral-600 text-lg">
              The principles that guide everything we do at High Value Recruitment Agency
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
        <div className="px-4 py-16 mx-auto w-full sm:max-w-full md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2" data-aos="fade-up">
            <div data-aos="fade-left">
              <div className="card relative my-2 lg:order-first">
                <div className="overflow-hidden border-4 border-red-900 rounded-full md:w-96 md:h-96 w-60 h-60 mx-auto">
                  {teamMembers?.avatar ? (
                    <img
                      className="object-cover md:w-96 md:h-96 rounded-full w-60 h-60 mx-auto"
                      src={teamMembers.avatar}
                      alt={teamMembers.name}

                    />
                  ) : (
                    <p>Loading image...</p>
                  )}
                </div>
              </div>
            </div>
            <div data-aos="fade-right" className='w-full'>
              <div className='my-10 lg:pl-10 w-full'>
                <h5 className="mb-4 text-4xl font-extrabold leading-none">
                  Our CEO
                </h5>
                <p className="mb-4 text-gray-900">
                  Our CEO, Muneer, is the driving force behind High Value Recruitment Agency. With over 10 years of experience in the recruitment and HR industry, he brings deep insight, strategic thinking, and a clear vision to the company. Under his leadership, we've grown into a trusted agency known for delivering high-quality talent and exceptional client service. Muneer’s commitment to excellence and innovation continues to inspire our team and shape the future of recruitment.
                </p>

                <p className="mb-6 text-gray-900">
                  Best regards,
                  <br />
                  {teamMembers?.name || "Loading name..."}
                </p>
              </div>
              <hr className="mb-5 border-gray-300 lg:hidden" />
            </div>
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
                  Have questions about High Value Recruitment Agency? We'd love to hear from you. Reach out to our team using the contact information below.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mr-4">
                      <MapPin size={20} className="text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Our Headquarters</h3>
                      <p className="text-neutral-600">Hanamkonda, Warangal</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mr-4">
                      <Mail size={20} className="text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email Us</h3>
                      <a
                        href="mailto:hvrasolutions@gmail.com"
                        className="text-Neutral-600 hover:text-primary-500 underline"
                      >
                        hvrasolutions@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mr-4">
                      <Phone size={20} className="text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Call Us</h3>
                      <p className="text-neutral-600">+91 8686647876</p>
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