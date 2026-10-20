import Image from "next/image";

export default function HopeSection() {
  return (
    <section className="bg-[#f8f6f0] py-16 sm:py-24 border-t border-black/5" id="about">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left / Center Area: Headline + Two Text Columns (Cols 1-8) */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-light text-[#2b2b2b] leading-[1.3] mb-10 max-w-2xl">
              You’re holding onto hope that life can be better than it is right now.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-[15px] text-[#3e3e3e] leading-relaxed">
              <div>
                <p className="italic text-[#2b2b2b] mb-4">
                  At Conejo Valley Family Counseling we want to make that hope a reality.
                </p>
                <p>
                  Whether you're an adult seeking personal growth, looking to work through
                  your trauma, a couple working on your relationship, or a parent looking
                  for support for your child, we provide a compassionate and safe space to
                  help you navigate all of life’s ups and downs.
                </p>
              </div>

              <div>
                <p>
                  First and foremost, we believe what you’re going through is real, valid,
                  and worthy of support. Our team offers clients in the Newbury Park area
                  and across CA an environment to discover a new life and a deeper sense
                  of self in the midst of their struggles. As we tap into the power of
                  connection and understanding, you can find your footing again and take a
                  transformative path forward.
                </p>
              </div>
            </div>
          </div>

          {/* Right Area: Beach Scenic Image (Cols 9-12) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/assets/hope-beach.jpg"
                alt="Sandy beach with gentle ocean waves and cloudy sky"
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
