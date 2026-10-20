import Image from "next/image";

export default function SunsetBanner() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Sunset Family Image (Cols 1-7) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/assets/honoring-banner.jpg"
                alt="Family of four standing on a beach holding hands at sunset"
                fill
                sizes="(max-width: 1024px) 100vw, 750px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Statement Text (Cols 8-12) */}
          <div className="lg:col-span-5 lg:pl-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-light text-[#2b2b2b] leading-[1.3]">
              Honoring where you’ve been{" "}
              <span className="font-script text-[#86b3b3]">&amp;</span> helping
              shape where you’re headed.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
