import Link from "next/link";

export default function Specialties() {
  const column1 = [
    {
      title: "Trauma",
      description:
        "We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.",
    },
    {
      title: "Dissociation",
      description:
        "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
    },
  ];

  const column2 = [
    {
      title: "EMDR",
      description:
        "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
    },
    {
      title: "Special Needs Parenting",
      description:
        "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 border-t border-black/5" id="specialties">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-light text-[#2b2b2b] leading-[1.25]">
              Our <span className="font-script text-[#86b3b3]">specialties</span>{" "}
              include…
            </h3>
          </div>

          {/* Right Side: 2 Columns of Specialty Content */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
            {/* Column 1 */}
            <div className="flex flex-col gap-12">
              {column1.map((item) => (
                <article key={item.title}>
                  <h4 className="text-2xl text-[#2b2b2b] mb-3">
                    {item.title}
                  </h4>
                  <p className="text-[15px] text-[#444] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <Link
                    href="#contact"
                    className="link-underline"
                  >
                    Learn more &rarr;
                  </Link>
                </article>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-12">
              {column2.map((item) => (
                <article key={item.title}>
                  <h4 className="text-2xl text-[#2b2b2b] mb-3">
                    {item.title}
                  </h4>
                  <p className="text-[15px] text-[#444] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <Link
                    href="#contact"
                    className="link-underline"
                  >
                    Learn more &rarr;
                  </Link>
                </article>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
