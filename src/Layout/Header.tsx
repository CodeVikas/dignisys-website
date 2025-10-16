import { useState, useEffect } from "react";
import { Menu, X, Mail, Phone, ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "../Assests/Logo.png";
import { servicesData } from "../utils/service";

export default function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About Us", href: "/#about" },
    {
      name: "Services",
      children: Object.keys(servicesData).map((key) => ({
        name: servicesData[key].title,
        href: `/services/${key}`,
      })),
    },
    { name: "Industries", href: "/#industries" },
    { name: "Career", href: "/career" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 ${
        isScrolled ? "bg-white shadow-sm" : "lg:bg-transparent bg-white"
      } transition-colors duration-300`}
    >
      <div
        className={`bg-white overflow-hidden transition-all duration-500 ${
          isScrolled ? "max-h-0 opacity-0" : "max-h-16 opacity-100"
        }`}
      >
        <div className="hidden sm:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-12 gap-6 text-sm">
            <a
              href="mailto:contact@dignisys.com"
              className="flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors"
            >
              <div className="w-7 h-7 flex items-center justify-center rounded-full border border-yellow-500 text-yellow-500">
                <Mail size={14} />
              </div>
              <span className="hidden sm:inline font-semibold">
                contact@dignisys.com
              </span>
            </a>
            <div className="flex items-center gap-4 text-gray-600">
              <a
                href="tel:+15128170605"
                className="flex items-center gap-2 hover:text-yellow-600 transition-colors "
              >
                <div className="w-7 h-7 flex items-center justify-center rounded-full border border-yellow-500 text-yellow-500">
                  <Phone size={14} />
                </div>
                <span className="font-bold">
                  US: <span className="font-semibold"> +1 (512) 817-0605</span>{" "}
                </span>
              </a>
              <a
                href="tel:+918452131121"
                className="hover:text-yellow-600 transition-colors font-semibold"
              >
                <span className="font-bold">
                  IN: <span className="font-semibold"> +1 (845) 213-1121</span>{" "}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl  mx-auto px-4 sm:px-6 ">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="py-2 cursor-pointer" onClick={() => navigate("/")}>
              <img
                src={Logo}
                alt="logo"
                className="w-32 sm:w-36 md:w-40 lg:w-48 h-auto object-contain"
              />
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <a
                  href={link.href}
                  className="text-gray-700 hover:text-black transition-colors duration-200 font-medium flex items-center gap-1 cursor-pointer"
                >
                  {link.name}
                  {link.children && <span className="ml-1">▼</span>}
                </a>

                {/* Dropdown */}
                {link.children && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md min-w-[200px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                    {link.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 hover:bg-yellow-50 hover:text-black transition-colors"
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <a
              href="#contact"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2.5 rounded-full font-semibold transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2"
            >
              Contact Us
              <span>→</span>
            </a>
          </nav>

          <button
            className="lg:hidden text-gray-700 "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-6 bg-white">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                  {link.children ? (
                    <>
                      <div
                        className="flex justify-between items-center px-4 py-2 text-black/80 hover:text-black font-medium cursor-pointer"
                        onClick={() =>
                          setMobileDropdown(
                            mobileDropdown === link.name ? null : link.name
                          )
                        }
                      >
                        <span>{link.name}</span>
                        {mobileDropdown === link.name ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </div>
                      {mobileDropdown === link.name && (
                        <div className="flex flex-col bg-gray-50 border-l-2 border-yellow-400 ml-4">
                          {link.children.map((child) => (
                            <a
                              key={child.name}
                              href={child.href}
                              className="px-4 py-2 text-black/70 hover:text-black hover:bg-yellow-50 transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {child.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={link.href}
                      className="px-4 py-2 text-black/80 hover:text-black font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}

              <a
                href="#contact"
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2.5 rounded-lg font-semibold text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
