"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true when page is scrolled down
      setIsScrolled(window.scrollY > 50);

      // Determine which section is currently in view
      const sections = ["home", "info", "countdown", "rsvp"];
      const sectionElements = sections.map(id =>
        document.getElementById(id)
      );

      const currentPosition = window.scrollY + 100;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= currentPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-wedding-brown font-display text-xl md:text-2xl font-bold">
          J & M
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {[
            { id: "home", label: "Home" },
            { id: "info", label: "Details" },
            { id: "countdown", label: "Countdown" },
            { id: "rsvp", label: "RSVP" }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-body text-sm transition-colors ${activeSection === item.id
                  ? "text-wedding-brown font-medium border-b-2 border-wedding-brown pb-1"
                  : "text-gray-600 hover:text-wedding-brown hover:border-b-2 hover:border-wedding-brown hover:pb-1"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-wedding-brown"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            {[
              { id: "home", label: "Home" },
              { id: "info", label: "Details" },
              { id: "countdown", label: "Countdown" },
              { id: "rsvp", label: "RSVP" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-body text-sm text-left py-2 transition-colors ${activeSection === item.id
                    ? "text-wedding-brown font-medium border-l-4 border-wedding-brown pl-2"
                    : "text-gray-600 hover:text-wedding-brown hover:border-l-4 hover:border-wedding-brown hover:pl-2"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
