"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileSubnav, setMobileSubnav] = useState({
    about: false,
    specialties: false,
    methods: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubnav = (key) => {
    setMobileSubnav((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#f8f6f0]/98 backdrop-blur-md shadow-sm border-b border-black/5"
          : "bg-[#f8f6f0] border-b border-black/5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="Conejo Valley Family Counseling"
            width={240}
            height={75}
            priority
            className="h-[68px] sm:h-[75px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary Navigation">
          {/* About Dropdown */}
          <div className="relative group py-2">
            <Link
              href="#about"
              className="group relative flex items-center gap-1.5 text-[0.92rem] font-medium tracking-wide text-[#2b2b2b] hover:text-[#2b2b2b]"
            >
              About
              <span className="w-1.5 h-1.5 border-r border-b border-current rotate-45 transition-transform duration-200 group-hover:-rotate-135 -translate-y-0.5" />
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#2b2b2b] transition-all duration-300 group-hover:w-full" />
            </Link>
            <div className="absolute top-full left-0 w-64 bg-white py-3 shadow-xl border border-[#e4dfd5] rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
              <div className="text-[0.7rem] font-bold tracking-widest text-[#515151] px-5 py-2 uppercase border-b border-[#e4dfd5]">
                Our Team
              </div>
              <div className="py-1 flex flex-col">
                {[
                  "Jennifer Anderson, LMFT",
                  "Candace Bletscher, AMFT",
                  "Heather Williams-Baumgart, AMFT",
                  "Samantha Johnson, AMFT",
                  "Autumn Bodily, AMFT",
                  "Rosa Gomez, AMFT",
                  "Chad Flores, AMFT",
                  "Simran Sidhu, AMFT",
                  "Jessica Jauregui, MA, AMFT",
                ].map((name) => (
                  <Link
                    key={name}
                    href="#team"
                    className="px-5 py-2 text-[0.88rem] text-[#2b2b2b] hover:bg-[#f8f6f0] hover:text-[#6fa0a0] transition-colors whitespace-nowrap"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Specialties Dropdown */}
          <div className="relative group py-2">
            <Link
              href="#specialties"
              className="group relative flex items-center gap-1.5 text-[0.92rem] font-medium tracking-wide text-[#2b2b2b] hover:text-[#2b2b2b]"
            >
              Specialties
              <span className="w-1.5 h-1.5 border-r border-b border-current rotate-45 transition-transform duration-200 group-hover:-rotate-135 -translate-y-0.5" />
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#2b2b2b] transition-all duration-300 group-hover:w-full" />
            </Link>
            <div className="absolute top-full left-0 w-64 bg-white py-3 shadow-xl border border-[#e4dfd5] rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
              <div className="py-1 flex flex-col">
                {[
                  { label: "Dissociation", href: "#specialties" },
                  { label: "Trauma", href: "#specialties" },
                  { label: "Special Needs Parenting", href: "#specialties" },
                  { label: "Couples", href: "#who-we-help" },
                  { label: "Children & Teens", href: "#who-we-help" },
                  { label: "Anxiety & Depression", href: "#expertise" },
                  { label: "Adoption", href: "#expertise" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="px-5 py-2 text-[0.88rem] text-[#2b2b2b] hover:bg-[#f8f6f0] hover:text-[#6fa0a0] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Methods Dropdown */}
          <div className="relative group py-2">
            <Link
              href="#methods"
              className="group relative flex items-center gap-1.5 text-[0.92rem] font-medium tracking-wide text-[#2b2b2b] hover:text-[#2b2b2b]"
            >
              Methods
              <span className="w-1.5 h-1.5 border-r border-b border-current rotate-45 transition-transform duration-200 group-hover:-rotate-135 -translate-y-0.5" />
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#2b2b2b] transition-all duration-300 group-hover:w-full" />
            </Link>
            <div className="absolute top-full left-0 w-60 bg-white py-3 shadow-xl border border-[#e4dfd5] rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
              <div className="py-1 flex flex-col">
                {[
                  { label: "EMDR", href: "#specialties" },
                  { label: "Brainspotting", href: "#methods" },
                  { label: "Somatic Therapy", href: "#methods" },
                  { label: "Parts Work Therapy", href: "#methods" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="px-5 py-2 text-[0.88rem] text-[#2b2b2b] hover:bg-[#f8f6f0] hover:text-[#6fa0a0] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* FAQs */}
          <Link
            href="#faqs"
            className="relative py-2 text-[0.92rem] font-medium tracking-wide text-[#2b2b2b] hover:text-[#2b2b2b] group"
          >
            FAQs
            <span className="absolute bottom-1 left-0 w-0 h-[1px] bg-[#2b2b2b] transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            href="#contact"
            className="btn-sqs-outline"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden p-2 text-[#2b2b2b] focus:outline-none"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileOpen}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-[#2b2b2b] transition-all duration-300 ${
                isMobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-[#2b2b2b] transition-opacity duration-300 ${
                isMobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-[#2b2b2b] transition-all duration-300 ${
                isMobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 top-[90px] bg-[#f8f6f0] z-40 px-8 py-8 flex flex-col justify-between overflow-y-auto lg:hidden transition-transform duration-400 ease-out ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6">
          <div>
            <button
              onClick={() => toggleSubnav("about")}
              className="w-full flex items-center justify-between font-serif text-2xl text-[#2b2b2b] py-1 text-left"
            >
              <span>About</span>
              <span
                className={`w-2 h-2 border-r-2 border-b-2 border-current transition-transform duration-200 ${
                  mobileSubnav.about ? "rotate-225" : "rotate-45"
                }`}
              />
            </button>
            {mobileSubnav.about && (
              <div className="mt-3 pl-4 border-l-2 border-[#86b3b3] flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#515151]">
                  Our Team
                </span>
                {[
                  "Jennifer Anderson, LMFT",
                  "Candace Bletscher, AMFT",
                  "Heather Williams-Baumgart, AMFT",
                  "Samantha Johnson, AMFT",
                  "Autumn Bodily, AMFT",
                  "Rosa Gomez, AMFT",
                  "Chad Flores, AMFT",
                  "Simran Sidhu, AMFT",
                  "Jessica Jauregui, MA, AMFT",
                ].map((name) => (
                  <Link
                    key={name}
                    href="#team"
                    onClick={() => setIsMobileOpen(false)}
                    className="text-[0.95rem] text-[#555] py-1 hover:text-[#86b3b3]"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleSubnav("specialties")}
              className="w-full flex items-center justify-between font-serif text-2xl text-[#2b2b2b] py-1 text-left"
            >
              <span>Specialties</span>
              <span
                className={`w-2 h-2 border-r-2 border-b-2 border-current transition-transform duration-200 ${
                  mobileSubnav.specialties ? "rotate-225" : "rotate-45"
                }`}
              />
            </button>
            {mobileSubnav.specialties && (
              <div className="mt-3 pl-4 border-l-2 border-[#86b3b3] flex flex-col gap-2">
                {[
                  { label: "Dissociation", href: "#specialties" },
                  { label: "Trauma", href: "#specialties" },
                  { label: "Special Needs Parenting", href: "#specialties" },
                  { label: "Couples", href: "#who-we-help" },
                  { label: "Children & Teens", href: "#who-we-help" },
                  { label: "Anxiety & Depression", href: "#expertise" },
                  { label: "Adoption", href: "#expertise" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-[0.95rem] text-[#555] py-1 hover:text-[#86b3b3]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleSubnav("methods")}
              className="w-full flex items-center justify-between font-serif text-2xl text-[#2b2b2b] py-1 text-left"
            >
              <span>Methods</span>
              <span
                className={`w-2 h-2 border-r-2 border-b-2 border-current transition-transform duration-200 ${
                  mobileSubnav.methods ? "rotate-225" : "rotate-45"
                }`}
              />
            </button>
            {mobileSubnav.methods && (
              <div className="mt-3 pl-4 border-l-2 border-[#86b3b3] flex flex-col gap-2">
                {[
                  { label: "EMDR", href: "#specialties" },
                  { label: "Brainspotting", href: "#methods" },
                  { label: "Somatic Therapy", href: "#methods" },
                  { label: "Parts Work Therapy", href: "#methods" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-[0.95rem] text-[#555] py-1 hover:text-[#86b3b3]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="#faqs"
            onClick={() => setIsMobileOpen(false)}
            className="font-serif text-2xl text-[#2b2b2b] py-1"
          >
            FAQs
          </Link>
        </div>

        <div className="pt-8">
          <Link
            href="#contact"
            onClick={() => setIsMobileOpen(false)}
            className="btn-sqs block text-center w-full py-3.5"
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}
