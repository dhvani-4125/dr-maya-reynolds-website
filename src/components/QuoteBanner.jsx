export default function QuoteBanner() {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-24 sm:py-36 px-6 text-center flex items-center justify-center"
      style={{ backgroundImage: `url('/assets/quote-banner.png')` }}
      aria-label="Inspirational quote"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#1c1c1c]/60" />

      {/* Quote Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.6rem] font-light text-[#fdfbf7] leading-relaxed">
          You deserve a place where your story is heard, valued, and understood.{" "}
          <em className="italic text-[#f4efe6]">
            Nothing will be too heavy for us to carry together.
          </em>
        </h2>
      </div>
    </section>
  );
}
