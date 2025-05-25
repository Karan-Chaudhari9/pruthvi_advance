import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Health Packages", href: "/compare" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Book Appointment", href: "/appointment" }
  ];

  const services = [
    "Complete Blood Count",
    "Diabetes Testing",
    "Thyroid Profile",
    "Liver Function Test",
    "Home Sample Collection"
  ];

  const contactInfo = [
    { icon: Phone, text: "+91 98765 43210", href: "tel:+919876543210" },
    { icon: Mail, text: "info@pruthvilabs.com", href: "mailto:info@pruthvilabs.com" },
    { icon: Clock, text: "Mon-Sat: 7:00 AM - 9:00 PM" },
    { icon: MapPin, text: "123, Healthcare Avenue, Ahmedabad" }
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container px-4 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <Link href="/" className="block w-48">
              <Image
                src="/mainlogo.png"
                alt="Pruthvi Labs"
                width={250}
                height={150}
                className="h-auto"
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Pruthvi Advance Laboratory is a state-of-the-art diagnostic center committed to providing accurate, reliable, and timely diagnostic services with the highest standards of quality and patient care.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-primary hover:text-white border border-primary hover:bg-primary rounded-full p-2 transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary hover:text-white border border-primary hover:bg-primary rounded-full p-2 transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary hover:text-white border border-primary hover:bg-primary rounded-full p-2 transition-all duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary hover:text-white border border-primary hover:bg-primary rounded-full p-2 transition-all duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-primary inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-primary inline-block">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-600 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-primary inline-block">
              Contact Info
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <item.icon size={18} className="text-primary flex-shrink-0" />
                  {item.href ? (
                    <a 
                      href={item.href}
                      className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-gray-600 text-sm">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-white">
            <div className="flex items-center gap-2">
              <span>Developed by</span>
              <a 
                href="https://endsecure.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-semibold hover:text-gray-200 transition-colors duration-300"
              >
                EndSecure
              </a>
            </div>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-gray-200 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-200 transition-colors duration-300">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
