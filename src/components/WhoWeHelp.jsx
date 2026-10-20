import Image from "next/image";
import Link from "next/link";

export default function WhoWeHelp() {
  const cards = [
    {
      title: "Adults",
      href: null,
      image: "/assets/who-adults.jpg",
      alt: "Two people sitting on a log at the beach facing lake",
      description:
        "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
    },
    {
      title: "Couples",
      href: "#who-we-help",
      image: "/assets/who-couples.jpg",
      alt: "A couple embracing on the beach",
      description:
        "Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
    },
    {
      title: "Children & Teens",
      href: "#who-we-help",
      image: "/assets/who-children.jpg",
      alt: "A boy carrying a girl on a beach",
      description:
        "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24" id="who-we-help">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        {/* Left-Aligned Headline */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-light text-[#2b2b2b]">
            Who we <span className="font-script text-[#86b3b3]">help</span>
          </h2>
        </div>

        {/* 3 Columns Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card) => (
            <article key={card.title} className="flex flex-col group">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 shadow-sm">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h4 className="text-2xl text-[#2b2b2b] mb-3">
                {card.href ? (
                  <Link
                    href={card.href}
                    className="hover:text-[#86b3b3] transition-colors"
                  >
                    {card.title}
                  </Link>
                ) : (
                  card.title
                )}
              </h4>

              <p className="text-[#444] text-[15px] leading-relaxed">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
