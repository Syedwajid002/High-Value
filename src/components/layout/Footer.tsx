import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import sha from './sha.png'
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-300 via-primary-700 to-primary-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 items-center">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={sha} alt="" className='size-32' />

            </div>
            <p className="text-neutral-400 mb-6">
              Connecting exceptional talent with leading companies worldwide. Your career journey starts here.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Linkedin size={20} />} href="https://linkedin.com" label="LinkedIn" />
              <SocialLink icon={<Twitter size={20} />} href="https://x.com/AMROWN" label="Twitter" />
              <SocialLink icon={<Facebook size={20} />} href="https://facebook.com" label="Facebook" />
              <SocialLink icon={<Instagram size={20} />} href="https://instagram.com" label="Instagram" />
            </div>
          </div>

          {/* For Job Seekers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Candidates</h3>
            <ul className="space-y-3">
              <FooterLink to="/jobs">Browse Jobs</FooterLink>
              <FooterLink to="/candidates">Career Resources</FooterLink>
              <FooterLink to="/candidates/profile">Create Profile</FooterLink>
              <FooterLink to="/candidates/saved-jobs">Saved Jobs</FooterLink>
              <FooterLink to="/candidates/applications">Job Applications</FooterLink>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Employers</h3>
            <ul className="space-y-3">
              <FooterLink to="/employers">Post a Job</FooterLink>
              <FooterLink to="/employers/pricing">Pricing</FooterLink>
              <FooterLink to="/employers/resources">Employer Resources</FooterLink>
              <FooterLink to="/employers/success-stories">Success Stories</FooterLink>
              <FooterLink to="/employers/talent-search">Talent Search</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4 text-neutral-400">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary-400 shrink-0 mt-1" />
                <div>
                  <p>Multiple Locations Across the globe</p>
                  <span>Warangal</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-primary-400" />
                <p>+91 8686647876</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-primary-400" />
                <p>contact@hvsolutions.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-neutral-500 mb-4 md:mb-0">
            &copy; {currentYear} High Value Recruitment Agency. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-neutral-500">
            <FooterLink to="/terms">Terms of Service</FooterLink>
            <FooterLink to="/privacy">Privacy Policy</FooterLink>
            <FooterLink to="/cookies">Cookie Policy</FooterLink>
            <FooterLink to="/accessibility">Accessibility</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary-500 hover:text-white transition-all duration-300"
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to}
        className="text-neutral-400 hover:text-primary-400 transition-colors duration-300"
      >
        {children}
      </Link>
    </li>
  );
};

export default Footer;