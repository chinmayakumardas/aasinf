

"use client";
 
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { useRouter } from 'next/navigation';
 
export default function Footer() {
  const router = useRouter();
  const currentYear = new Date().getFullYear();
 
  return (
    <footer className="border-0 py-8 min-h-[50vh] flex flex-col justify-center">
      <div className="container mx-auto px-4 flex flex-col justify-around">
        {/* Row 1: Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left ">
          {/* Column 1: Address and Contact Details */}
          <div className="flex flex-col gap-4 ">
            <h2 className="text-base sm:text-xl font-bold">AAS Information Technology</h2>
           
            {/* Corporate Office */}
            <div className="flex flex-col gap-2 ">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-gray-500 flex-shrink-0" />
                <div className="flex flex-col items-start">
                  <strong className="text-sm">CORPORATE OFFICE</strong>
                  <p className="text-sm text-left">
                    Plot No. 52, Bapuji Nagar, Unit-1 Main Street,
                    Forest Park, Bhubaneswar, Khordha, Odisha, India 751009
                  </p>
                </div>
              </div>
            </div>
 
            {/* Registered Office */}
            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-gray-500 flex-shrink-0" />
                <div className="flex flex-col items-start">
                  <strong className="text-sm">REGISTERED OFFICE</strong>
                  <p className="text-sm text-left">
                    Sanara Chhaka, Jagatsinghpur,
                    Odisha, India, 754104
                  </p>
                </div>
              </div>
            </div>
 
            {/* Branch Office */}
            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-gray-500 flex-shrink-0" />
                <div className="flex flex-col items-start">
                  <strong className="text-sm">BRANCH OFFICE</strong>
                  <p className="text-sm text-left">
                    5678 Trade St,
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </div>
            </div>
          </div>
 
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about-us" className="hover:text-[#AF9A57]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-[#AF9A57]">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#AF9A57]">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#AF9A57]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/insights/case-studies" className="hover:text-[#AF9A57]">
                  Case studies
                </Link>
              </li>
            </ul>
          </div>
 
          {/* Column 3: Services Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services/ar-vr" className="hover:text-[#AF9A57]">
                  AR/VR
                </Link>
              </li>
              <li>
                <Link href="/services/data-analytics" className="hover:text-[#AF9A57]">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux" className="hover:text-[#AF9A57]">
                 UI/UX
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="hover:text-[#AF9A57]">
                  Web Development
                </Link>
              </li>
            </ul>
          </div>
 
          {/* Column 4: Social Icons and Contact */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <Link href="https://facebook.com" target="_blank">
                <Facebook className="w-6 h-6 text-blue-600" />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <Twitter className="w-6 h-6 text-blue-400" />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <Instagram className="w-6 h-6 text-pink-500" />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="w-6 h-6 text-blue-700" />
              </Link>
            </div>
 
            <div className="flex py-4 flex-col gap-4">
              <h3 className="text-lg font-semibold">Connect with us</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-center md:justify-start cursor-pointer hover:text-blue-500 transition-colors"
                     onClick={() => window.location.href = 'tel:+911234567890'}>
                  <Phone className="w-4 h-4 mr-2 text-blue-500" />
                  <span className="text-sm">+91 12345 67890</span>
                </div>
                <div className="flex items-center justify-center md:justify-start cursor-pointer hover:text-green-500 transition-colors"
                     onClick={() => window.location.href = 'mailto:info@aasit.com'}>
                  <Mail className="w-4 h-4 mr-2 text-green-500" />
                  <span className="text-sm">contact@aasint.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
 
        {/* Row 2: Copyright */}
        <div className="border-t border-gray-700 mt-8 py-4 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <div>Copyright {currentYear} AAS Information Technology Pvt. Ltd.</div>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" onClick={() => router.push('/admin')} className="hover:underline">Privacy Policy</Link>
            <span className="text-gray-400">|</span>
            <Link href="/cookies-policy" onClick={() => router.push('/admin')} className="hover:underline">Cookies</Link>
            <span className="text-gray-400">|</span>
            <Link href="/terms-of-service" onClick={() => router.push('/admin')} className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}