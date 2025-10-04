"use client"

import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/Group (1).svg'
import MenuIcon from '../assets/Frame 3 (1).svg'
import ContactIcon from '../assets/Frame 77.svg'

export default function Navigation() {
  const location = useLocation()
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50  border-b border-white">
      <div className="flex items-center justify-between max-w-[100vw] mx-auto px-3 md:px-5 lg:px-4 py-2">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-center group relative">
          <img src={Logo} alt="Earth Properties Logo" className="h-10 w-auto group-hover:opacity-80 transition-opacity" />
          <div className="w-8 h-px bg-white my-1 opacity-60"></div>
          <div className="text-xs tracking-[0.4em] text-white font-sans">PROPERTIES</div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-12 font-serif text-md">
          <Link 
            to="/" 
            className={` tracking-wider transition-colors hover:text-gray-300 relative ${
              location.pathname === '/' ? 'text-white' : 'text-gray-400'
            }`}
          >
            HOME
            {location.pathname === '/' && <div className="absolute -bottom-2 left-0 right-0 h-px bg-white"></div>}
          </Link>
          <div className="w-px h-4 bg-white/30"></div>
          <Link 
            to="/projects" 
            className={` tracking-wider transition-colors hover:text-gray-300 relative ${
              location.pathname === '/projects' ? 'text-white' : 'text-gray-400'
            }`}
          >
            PROJECTS
            {location.pathname === '/projects' && <div className="absolute -bottom-2 left-0 right-0 h-px bg-white"></div>}
          </Link>
          <div className="w-px h-4 bg-white/30"></div>
          <Link 
            to="/about" 
            className={` tracking-wider transition-colors hover:text-gray-300 relative ${
              location.pathname === '/about' ? 'text-white' : 'text-gray-400'
            }`}
          >
            ABOUT
            {location.pathname === '/about' && <div className="absolute -bottom-2 left-0 right-0 h-px bg-white"></div>}
          </Link>
          <div className="w-px h-4 bg-white/30"></div>
          <Link 
            to="/contact" 
            className={` tracking-wider transition-colors hover:text-gray-300 relative ${
              location.pathname === '/contact' ? 'text-white' : 'text-gray-400'
            }`}
          >
            CONTACT
            {location.pathname === '/contact' && <div className="absolute -bottom-2 left-0 right-0 h-px bg-white"></div>}
          </Link>
        </div>

        {/* Contact and Menu Icons */}
        {/* <div className="flex items-center gap-6">
          <div className="w-px h-6 bg-white/30 hidden md:block"></div>
          <img 
            src={ContactIcon} 
            alt="Contact Us" 
            className="w-12 h-12 cursor-pointer hover:opacity-80 transition-opacity" 
          />
          <div className="w-px h-4 bg-white/30"></div>
          <img 
            src={MenuIcon} 
            alt="Menu" 
            className="w-10 h-10 cursor-pointer hover:opacity-80 transition-opacity" 
          />
        </div> */}
      </div>
    </nav>
  )
}
