import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "../Assests/Logo.png";

export default function Footer() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const handleClick = () => {
    navigate("/"); // navigate to home
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top smoothly
  };
  return (
    <footer className="bg-white text-black/80 font-['Manrope']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div onClick={handleClick} className="cursor-pointer">
          <img
            src={Logo}
            alt="Dignisys Logo"
            className="h-16 mb-8 object-contain"
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-black font-bold text-lg mb-6">
              Important Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="hover:text-black hover:underline transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-black hover:underline transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-black hover:underline  transition-colors"
                >
                  Product Engineering
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  className="hover:text-black hover:underline transition-colors"
                >
                  Mission & Vision
                </a>
              </li>
              <li>
                <a
                  href="#career"
                  className="hover:text-black hover:underline transition-colors"
                >
                  Leadership Team
                </a>
              </li>
              <li>
                <a
                  href="#career"
                  className="hover:text-black hover:underline transition-colors"
                >
                  Career With Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-black hover:underline transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="hover:text-black hover:underline transition-colors"
                >
                  Logistics
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-black hover:underline transition-colors"
                >
                  Travel
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-black hover:underline transition-colors"
                >
                  BPO
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-black hover:underline transition-colors"
                >
                  KPO
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-black hover:underline transition-colors"
                >
                  Healthcare
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-black hover:underline transition-colors"
                >
                  Software Solution
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-bold text-lg mb-6">Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-black hover:underline transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-black hover:underline transition-colors"
                >
                  Terms Condition
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-black hover:underline transition-colors"
                >
                  Management
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-bold text-lg mb-6">Address</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-black font-semibold mb-2">USA</h4>
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">Dignisys, Inc.</span>
                  <br />8 The Green STE R, Dover, DE 19901
                </p>
              </div>
              <div>
                <h4 className="text-black font-semibold mb-2">INDIA</h4>
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">Dignisys Limited</span>
                  <br />
                  A-401, Tower A, Bestech Business Tower,
                  <br />
                  Sector – 66, Mohali 160066, PUNJAB
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 flex items-center justify-center rounded-full border border-yellow-500 text-yellow-500">
                  <Mail size={14} />
                </div>
                <a
                  href="mailto:contact@dignisys.com"
                  className="hover:text-black transition-colors"
                >
                  contact@dignisys.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 flex items-center justify-center rounded-full border border-yellow-500 text-yellow-500">
                  <Phone size={14} />
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <span>US: +1 (512) 817-0605</span>
                  <span>IN: +91 172 473-6486</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-start md:justify-end gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#F6F6F6] hover:bg-[#e8e1e1] rounded-full flex items-center justify-center hover:text-gray-900 transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#F6F6F6] hover:bg-[#e8e1e1] rounded-full flex items-center justify-center  transition-all duration-200"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#F6F6F6] hover:bg-[#e8e1e1] rounded-full flex items-center justify-center hover:text-gray-900 transition-all duration-200"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#F6F6F6] hover:bg-[#e8e1e1] rounded-full flex items-center justify-center hover:text-gray-900 transition-all duration-200"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="text-center text-sm">
            <p>&copy; Copyright 2021-{currentYear}. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
