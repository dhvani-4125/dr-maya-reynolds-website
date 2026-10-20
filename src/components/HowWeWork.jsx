import Image from "next/image";
import Link from "next/link";

export default function HowWeWork() {
  return (
    <section className="bg-[#f8f6f0] py-16 sm:py-24" id="methods">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Area: Eyebrow + H2 + 2-Column Body Copy + CTA (Cols 1-8) */}
          <div className="lg:col-span-8">
            <span className="eyebrow mb-4 text-[#2b2b2b]">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-light text-[#2b2b2b] leading-[1.25] mb-8">
              We’re here to make a difference.
            </h2>

            {/* Two Columns of Body Copy */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-[15px] text-[#444] leading-relaxed mb-8">
              <div>
                <p className="italic text-[#2b2b2b] mb-4">
                  The clients we work with are balancing so many things at once,
                  it’s often hard for them to put themselves first.
                </p>
                <p>
                  Here, your needs are always top priority. Our team takes the
                  time to deeply listen to our clients in order to truly
                  understand their story and their struggles. We recognize that no
                  two people are the same and that personalized therapy means an
                  intentional, tailored approach. (You won’t find anything
                  “one-size-fits-all” here.) If you’re ready to do the work,
                  we’re ready to help.
                </p>
              </div>

              <div>
                <p>
                  Sometimes we may gently challenge you to look at things
                  differently and other times we may explore your emotions, all
                  while encouraging you to practice what you’ve learned in your
                  daily life. We take what we do seriously because we know how
                  important it is for you to heal from what’s hurting you,
                  discover a fulfilling life, and build meaningful relationships.
                  Our goal is to walk alongside you in this journey, offering
                  support and guidance as you uncover your strengths and embrace
                  what the future can hold for you.
                </p>
              </div>
            </div>

            <div>
              <Link
                href="#about"
                className="btn-sqs"
              >
                Learn more about us
              </Link>
            </div>
          </div>

          {/* Right Area: Vertical Photo (Cols 9-12) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/assets/how-we-work.jpg"
                alt="A woman and a child in white dresses dancing on a sandy beach during sunset"
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
