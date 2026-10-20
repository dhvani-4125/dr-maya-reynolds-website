import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const teamMembers = [
    "Jennifer Anderson",
    "Heather Williams-Baumgart",
    "Autumn Bodily",
    "Candace Bletscher",
    "Samantha Johnson",
    "Rosa Gomez",
    "Chad Flores",
    "Simran Sidhu",
    "Jessica Jauregui",
  ];

  return (
    <footer className="bg-white border-t border-[#e4dfd5]" id="faqs">
      {/* Primary Footer */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Brand (Cols 1-4) */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/assets/logo.png"
                alt="Conejo Valley Family Counseling"
                width={220}
                height={68}
                className="h-[60px] w-auto object-contain"
              />
            </Link>
            <p className="text-[15px] text-[#555] leading-relaxed max-w-sm">
              We want to make getting started simple. You’re welcome to come into
              our office in Newbury Park or schedule virtual appointments from
              anywhere in CA—whatever works best for you.
            </p>
          </div>

          {/* Col 2: Navigate (Cols 5-6) */}
          <div className="lg:col-span-2">
            <h5 className="eyebrow mb-5 text-[#2b2b2b]">
              Navigate
            </h5>
            <ul className="flex flex-col gap-2.5 text-[15px] text-[#555]">
              <li>
                <Link href="/" className="hover:text-[#86b3b3] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#86b3b3] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="hover:text-[#86b3b3] transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#86b3b3] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact (Cols 7-9) */}
          <div className="lg:col-span-3">
            <h5 className="eyebrow mb-5 text-[#2b2b2b]">
              Contact
            </h5>
            <div className="flex flex-col gap-2 text-[15px] text-[#555]">
              <p>
                925 Broadbeck Dr<br />
                Suites 200 and 225<br />
                Newbury Park, CA 91320
              </p>
              <p>
                <a
                  href="mailto:info@conejovalleycounseling.com"
                  className="hover:text-[#86b3b3] transition-colors"
                >
                  info@conejovalleycounseling.com
                </a>
              </p>
              <p>
                <a
                  href="tel:8052423120"
                  className="hover:text-[#86b3b3] transition-colors"
                >
                  805.242.3120
                </a>
              </p>
              <p className="text-[14px] italic text-[#777] mt-2">
                Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, &amp;
                Simi Valley
              </p>
            </div>
          </div>

          {/* Col 4: Our Team (Cols 10-12) */}
          <div className="lg:col-span-3" id="team">
            <h5 className="eyebrow mb-5 text-[#2b2b2b]">
              Our Team
            </h5>
            <ul className="flex flex-col gap-2 text-[15px] text-[#555]">
              {teamMembers.map((member) => (
                <li key={member}>
                  <Link
                    href="#team"
                    className="hover:text-[#86b3b3] transition-colors"
                  >
                    {member}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Sub-Footer Legal Bar */}
      <div className="bg-[#2b2b2b] py-5 px-6 text-center text-[13px] tracking-wider text-[#a8a8a8]">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-center gap-2">
          <Link href="#" className="hover:text-[#86b3b3] transition-colors">
            Terms
          </Link>
          <span className="text-[#666]">|</span>
          <Link href="#" className="hover:text-[#86b3b3] transition-colors">
            Privacy Policy
          </Link>
          <span className="text-[#666]">|</span>
          <Link href="#" className="hover:text-[#86b3b3] transition-colors">
            Disclaimer
          </Link>
          <span className="text-[#666]">|</span>
          <span>
            Website by{" "}
            <a
              href="https://walkerstrategyco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e0e0e0] hover:text-[#86b3b3] transition-colors underline"
            >
              Walker Strategy Co.
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
