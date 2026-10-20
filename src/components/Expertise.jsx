import Link from "next/link";

export default function Expertise() {
  const column1 = [
    { label: "Dissociation", href: "#specialties" },
    { label: "Trauma", href: "#specialties" },
    { label: "Family conflict", href: null },
    { label: "Special needs parenting", href: "#specialties" },
    { label: "Depression", href: "#specialties" },
    { label: "marriage", href: "#who-we-help" },
  ];

  const column2 = [
    { label: "anxiety", href: "#specialties" },
    { label: "relationships", href: null },
    { label: "children", href: "#who-we-help" },
    { label: "teens", href: "#who-we-help" },
    { label: "intimacy & connection", href: "#who-we-help" },
    { label: "…and more.", href: null },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 border-t border-black/5" id="expertise">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-light text-[#2b2b2b] leading-[1.25]">
              Our areas of{" "}
              <span className="font-script text-[#86b3b3]">expertise</span>
            </h3>
          </div>

          {/* Right Area: Two Parallel Columns of Specialties */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12">
            {/* Sub-Column 1 */}
            <ul className="flex flex-col">
              {column1.map((item) => (
                <li
                  key={item.label}
                  className="py-3.5 border-b border-[#e4dfd5] transition-colors"
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="font-serif text-xl sm:text-2xl text-[#2b2b2b] hover:text-[#86b3b3] transition-colors block"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="font-serif text-xl sm:text-2xl text-[#2b2b2b] block">
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            {/* Sub-Column 2 */}
            <ul className="flex flex-col">
              {column2.map((item) => (
                <li
                  key={item.label}
                  className="py-3.5 border-b border-[#e4dfd5] transition-colors"
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="font-serif text-xl sm:text-2xl text-[#2b2b2b] hover:text-[#86b3b3] transition-colors block"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="font-serif text-xl sm:text-2xl text-[#2b2b2b] block">
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
