"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-2 py-8 min-h-[50vh] flex flex-col justify-center">
      <div className="container mx-auto px-4 flex flex-col justify-around">
        {/* Row 1: Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Column 1: Address and Contact Details */}
          <div className="flex flex-col gap-2">
            <h2 className="text-xs sm:text-xl font-bold">AAS Information Technology</h2>
            <p className="mt-2 text-sm">
              <strong>CORPORATE OFFICE</strong>
              <br />
              Plot No. 52, Bapuji Nagar, Unit-1 Main Street, <br />
              Forest Park, Bhubaneswar, Khordha, Odisha, India 751009
            </p>

          
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/about-us" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-gray-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-gray-300">
                  Case studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/web-development" className="hover:text-gray-300">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/mobile-apps" className="hover:text-gray-300">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/cloud-services" className="hover:text-gray-300">
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link href="/consulting" className="hover:text-gray-300">
                  Consulting
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Column 4: Social Icons */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <Link href="https://facebook.com" target="_blank">
                <Facebook className="w-6 h-6 hover:text-blue-500" />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <Twitter className="w-6 h-6 hover:text-blue-400" />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <Instagram className="w-6 h-6 hover:text-pink-500" />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="w-6 h-6 hover:text-blue-600" />
              </Link>
            </div>
          </div>
        </div>

        {/* Row 2: Copyright */}
        <div className="border-t border-gray-700 mt-6 py-4 text-center text-sm flex flex-col md:flex-row justify-between">
          <div>Copyright© {new Date().getFullYear()} AAS Information Technology.</div>
          <div className="flex gap-2 mt-2 ">
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> | 
            <a href="/cookies-policy" className="hover:underline">Cookies</a> | 
            <a href="/terms-of-services" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}