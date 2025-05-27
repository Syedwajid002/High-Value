import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import sha from './sha.png'
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // const handleScroll = () => {
    //   const offset = window.scrollY;
    //   if (offset > 80) {
    //     setScrolled(true);
    //   } else {
    //     setScrolled(false);
    //   }
    // };

    //   window.addEventListener('scroll', handleScroll);

    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-3 glassmorphism shadow-sm"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={sha} alt="" className='size-24' />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" label="Home" active={location.pathname === '/'} />
          <div className="relative group">
            <button className="flex items-center gap-1 text-neutral-800 hover:text-primary-500 font-medium transition-colors">
              Jobs <ChevronDown size={16} />
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 p-3 rounded-lg bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link to="/jobs" className="block px-4 py-2 rounded-md hover:bg-neutral-50">Browse All Jobs</Link>
              <Link to="/jobs?category=tech" className="block px-4 py-2 rounded-md hover:bg-neutral-50">Technology</Link>
              <Link to="/jobs?category=finance" className="block px-4 py-2 rounded-md hover:bg-neutral-50">Finance</Link>
              <Link to="/jobs?category=healthcare" className="block px-4 py-2 rounded-md hover:bg-neutral-50">Healthcare</Link>
            </div>
          </div>
          <NavLink to="/employers" label="Employers" active={location.pathname === '/employers'} />
          <NavLink to="/candidates" label="Candidates" active={location.pathname === '/candidates'} />
          <NavLink to="/about" label="About" active={location.pathname === '/about'} />
          <NavLink to="/contact" label="Contact" active={location.pathname === '/contact'} />
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button aria-label="Search" className="p-2 text-neutral-600 hover:text-primary-500 transition-colors">
            <Search size={20} />
          </button>
          <Link to="/jobs" className="btn btn-outline">Find Jobs</Link>
          <Link to="/employers" className="btn btn-primary ">Post a Job</Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen py-4 opacity-100 visible' : 'max-h-0 py-0 opacity-0 invisible overflow-hidden'
          }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link to="/" className="py-2 text-lg">Home</Link>
          <Link to="/jobs" className="py-2 text-lg">Jobs</Link>
          <Link to="/employers" className="py-2 text-lg">Employers</Link>
          <Link to="/candidates" className="py-2 text-lg">Candidates</Link>
          <Link to="/about" className="py-2 text-lg">About</Link>
          <Link to="/contact" className="py-2 text-lg">Contact</Link>
          <div className="pt-4 border-t border-neutral-200">
            <Link to="/jobs" className="btn btn-outline w-full mb-3 justify-center">Find Jobs</Link>
            <Link to="/employers" className="btn btn-primary w-full justify-center">Post a Job</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  active: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, active }) => {
  return (
    <Link
      to={to}
      className={`relative text-base font-medium transition-colors ${active ? 'text-primary-500' : 'text-neutral-800 hover:text-primary-500'
        }`}
    >
      {label}
      {active && (
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-500" />
      )}
    </Link>
  );
};

export default Header;