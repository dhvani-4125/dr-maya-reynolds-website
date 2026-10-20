import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#f8f6f0] pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left: Primary Portrait Photo (Cols 1-5) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/assets/hero-family.jpg"
                alt="Family therapy on beach"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Center: Main Headline & CTA Copy (Cols 6-10) */}
          <div className="lg:col-span-5 max-w-xl">
            <span className="eyebrow mb-5 text-[#2b2b2b]">
              Online &amp; In-Person Counseling in Newbury Park &amp; Across CA
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-light leading-[1.25] text-[#2b2b2b] mb-6">
              Rebuild your foundation on solid ground and finally begin to{" "}
              <span className="font-script text-[#86b3b3]">thrive</span>.
            </h1>
            <p className="text-[15px] sm:text-[16px] text-[#3e3e3e] leading-relaxed mb-9">
              Specialized therapy for adults, couples, teens, and children to
              reflect, heal, and grow.
            </p>
            <div>
              <Link
                href="#contact"
                className="btn-sqs"
              >
                Book an Appointment
              </Link>
            </div>
          </div>

          {/* Right Edge: Vertical Peek Photo (Cols 11-12) */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="relative w-full aspect-[2/5] rounded-l-xl overflow-hidden shadow-sm opacity-90">
              <Image
                src="/assets/hero-child.jpg"
                alt="Child therapy on beach"
                fill
                priority
                sizes="220px"
                className="object-cover object-left"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
