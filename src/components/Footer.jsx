import React from 'react';
import SocialIcon from './SocialIcon';
import star from '../assets/images/star.png';
import logo_large from '../assets/images/logo_large.png';
import call from '../assets/images/call_icon.png';
import mail from '../assets/images/mail_icon.png';
import location from '../assets/images/location_icon.png';
import whatsapp from '../assets/images/whatsapp_icon.png';
import facebook from '../assets/images/facebook_icon.png';
import linkedin from '../assets/images/linkedin_icon.png';
import instagram from '../assets/images/instagram_icon.png';

const Footer = () => {
  const QuickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Safety & Quality', href: '#quality' },
    { name: 'Contact', href: '#contact' },
    { name: 'Our Team', href: '#team' },
    { name: 'Privacy Policy', href: '#privacy' }
  ];
  return (
    <footer className="bg-[#B0D79F] text-gray-700">
      <div className="container mx-auto px-6 pt-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="font-bold text-3xl mb-4 text-green-800"><img src={star} alt="Star Icon" className="inline-block mr-2 w-8 h-8" /><span className='border-b-3 border-[#7B2D26]'>Quick L</span>inks</h4>
            <ul className="space-y-2 mx-15">
              {QuickLinks.map((link, index) => (
                <li key={index}>
                  <img src={star} alt="Star Icon" className="inline-block mr-2 w-4 h-4" />
                  <a href={link.href} className="hover:text-green-700 text-lg">{link.name}</a></li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <img src={logo_large} alt="Fruto Foods Logo" className="mb-4 w-60 h-60" />
            <div className="flex space-x-4">
              <SocialIcon imgSrc={facebook} alt="Facebook" link="https://facebook.com" />
              <SocialIcon imgSrc={linkedin} alt="LinkedIn" link="https://linkedin.com" />
              <SocialIcon imgSrc={whatsapp} alt="WhatsApp" link="https://whatsapp.com" w={10} h={10} />
              <SocialIcon imgSrc={instagram} alt="Instagram" link="https://instagram.com" />

            </div>
          </div>
          <div className="text-center md:text-left ml-12">
            {/* Heading */}
            <h4 className="font-bold text-3xl mb-4 text-green-800 inline-block">
              <img
                src={star}
                alt="Fruto Foods Logo"
                className="inline-block mr-2 w-8 h-8 align-middle"
              />
              <span className="border-b-4 border-[#7B2D26]">Our Con</span>tacts
            </h4>

            {/* List Section */}
            <div className="mt-4 ml-8 inline-block text-left">
              <ul className="space-y-4 text-lg">
                <li className="flex items-center">
                  <img src={call} alt="Call Icon" className="mr-3 w-7 h-7" />
                  +91 98765 43210
                </li>
                <li className="flex items-center">
                  <img src={mail} alt="Mail Icon" className="mr-3 w-7 h-7" />
                  info@frutofoods.com
                </li>
                <li className="flex items-center">
                  <img src={location} alt="Location Icon" className="mr-3 w-5 h-5" />
                  #12-13-418/4, Street.no.1, Tarnaka, Hyderabad 5000017, Telangana state, India
                </li>
              </ul>
            </div>
          </div>

        </div>
        <div className="mt-12 pt-4 border-t-3 border-[#C33E2F] text-center text-sm text-gray-800 flex flex-col sm:flex-row justify-between">
          <p>Copyright © 2025 <span className='inline-block text-[#C33E2F] border-b-2 border-[#C33E2F]'><a href="#">Fruto Foods</a></span>. All Rights Reserved.</p>
          <p>Designed & Developed <span className='inline-block text-[#C33E2F] border-b-2 border-[#C33E2F]'><a href="#">TechFusion Hustlers</a></span></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;