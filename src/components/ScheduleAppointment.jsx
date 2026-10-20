import Image from "next/image";
import Link from "next/link";

export default function ScheduleAppointment() {
  return (
    <section className="bg-[#f8f6f0] py-16 sm:py-24" id="contact">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left: Narrow Seashell Photo (Cols 1-3) */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="relative aspect-[3/4.5] rounded-xl overflow-hidden shadow-sm max-w-[280px]">
              <Image
                src="/assets/schedule-shells-1.jpg"
                alt="A person picking up seashells on a sandy beach"
                fill
                sizes="280px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Center: Booking Headline & Copy (Cols 4-8) */}
          <div className="lg:col-span-5 text-center px-2 sm:px-6">
            <span className="eyebrow mb-4 text-[#2b2b2b]">
              Schedule An Appointment
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-light text-[#2b2b2b] leading-[1.25] mb-6">
              Find a therapist who is the right fit for{" "}
              <span className="font-script text-[#86b3b3]">you</span>.
            </h2>
            <p className="text-[15px] text-[#444] leading-relaxed mb-6">
              Coming to therapy is a courageous decision, and connecting with the
              right kind of therapist makes all the difference. We understand that
              your journey is personal, and we're here to support you with care
              and understanding every step of the way. Each member of our team
              brings dedicated expertise and a commitment to support you in your
              struggles. We want you to feel prioritized, understood, and
              empowered.
            </p>
            <p className="text-sm italic text-[#666] mb-8">
              Click the button below to schedule an appointment.
            </p>
            <div>
              <Link
                href="#contact"
                className="btn-sqs"
              >
                Book now
              </Link>
            </div>
          </div>

          {/* Right: Larger Seashell Photo (Cols 9-12) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-sm w-full max-w-[380px]">
              <Image
                src="/assets/schedule-shells-2.jpg"
                alt="Person pointing at shells on the beach with child"
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
