import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Anxiety & Panic",
    eyebrow: "FIND ROOM TO BREATHE",
    description:
      "For the constant worry, racing thoughts, tension, or panic that can make it difficult to switch off. Therapy can help you understand your patterns, work with your nervous system, and develop practical ways to feel steadier in everyday life.",
    tags: ["CBT", "Mindfulness", "Body awareness"],
  },
  {
    number: "02",
    title: "Trauma & EMDR",
    eyebrow: "MOVE AT YOUR OWN PACE",
    description:
      "Past experiences can continue to shape how safe, confident, and connected you feel today. Trauma therapy is paced around your needs, with an emphasis on safety and stabilization. EMDR may be integrated when appropriate to help you process distressing experiences.",
    tags: ["EMDR", "Stabilization", "Grounding"],
  },
  {
    number: "03",
    title: "Burnout & Perfectionism",
    eyebrow: "A MORE SUSTAINABLE WAY FORWARD",
    description:
      "When years of pushing through leave you exhausted or disconnected from yourself, therapy can create space to pause. Together, we can explore high internal pressure, perfectionism, and work-related stress—and build ways of living and working that feel more sustainable.",
    tags: ["Stress", "Self-understanding", "Boundaries"],
  },
];

const faqs = [
  {
    question: "Who does Dr. Maya Reynolds work with?",
    answer:
      "Dr. Reynolds works with adults, including high-achieving professionals, entrepreneurs, and creatives who are navigating anxiety, panic, trauma, burnout, perfectionism, or persistent internal pressure.",
  },
  {
    question: "Do you offer in-person and online therapy?",
    answer:
      "Yes. Dr. Reynolds offers in-person therapy at her Santa Monica office and secure telehealth sessions for clients located in California.",
  },
  {
    question: "What approaches do you use?",
    answer:
      "Her approach may integrate cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques. The work is collaborative and tailored to the person rather than following a one-size-fits-all plan.",
  },
  {
    question: "What happens in the first session?",
    answer:
      "The first conversation is an opportunity to talk about what has been bringing you to therapy, what you hope might change, and what support could look like. Sessions are structured enough to feel supportive while leaving room for reflection and depth.",
  },
  {
    question: "Do I need to know exactly what is wrong before starting?",
    answer:
      "No. You can begin with what you have noticed—such as feeling on edge, overthinking, sleeping poorly, or feeling exhausted despite appearing to manage everything. You and Dr. Reynolds can explore those experiences together.",
  },
];

export default function HomePage() {
  return (
    <main id="top">
      <div className="topline">
        <span>DR. MAYA REYNOLDS, PSYD</span>
        <span>IN-PERSON IN SANTA MONICA · TELEHEALTH ACROSS CALIFORNIA</span>
      </div>

      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="Dr. Maya Reynolds home">
          <span className="wordmark-symbol">m.</span>
          <span className="wordmark-name">MAYA REYNOLDS<span>PSYD · CLINICAL PSYCHOLOGY</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#approach">My approach</a>
          <a href="#office">Our office</a>
          <a href="#faqs">FAQs</a>
        </nav>
        <a href="#contact" className="nav-cta">LET’S CONNECT <span>↗</span></a>
      </header>

      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow"><span className="eyebrow-line" /> THERAPY FOR ADULTS · SANTA MONICA, CA</p>
          <h1>You can look like you’re managing it all <em>and still feel overwhelmed.</em></h1>
          <p className="hero-deck">
            A thoughtful, grounded space to work through anxiety, trauma, and burnout—and find a steadier relationship with yourself.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="button button-dark">Explore working together <span>↗</span></a>
            <a href="#about" className="text-link">Get to know Dr. Reynolds <span>↓</span></a>
          </div>
          <div className="hero-note"><span className="note-dot" /> Warm, collaborative, evidence-informed care</div>
        </div>
        <div className="hero-art">
          <div className="hero-image-frame">
            <Image src="/assets/dr-maya-reynolds.png" alt="Dr. Maya Reynolds, PsyD" fill priority sizes="(max-width: 800px) 90vw, 42vw" className="hero-portrait" />
          </div>
          <div className="hero-stamp"><span>SPACE TO</span><strong>pause</strong><span>AND BEGIN AGAIN</span></div>
          <div className="hero-caption"><span>01 / 04</span><span>THERAPY THAT MEETS YOU WHERE YOU ARE</span></div>
        </div>
      </section>

      <section className="intro-band">
        <div className="intro-mark">“</div>
        <p>You don’t have to wait until everything falls apart to ask for support.</p>
        <span className="intro-side">A PLACE TO SLOW DOWN<br />AND MAKE SENSE OF THINGS</span>
      </section>

      <section className="about section-pad" id="about">
        <div className="section-kicker"><span>01</span><span>ABOUT DR. REYNOLDS</span></div>
        <div className="about-grid">
          <div className="about-heading">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>For the part of you that’s tired of <em>pushing through.</em></h2>
            <div className="about-photo">
              <Image src="/assets/maya-office-1.jpg" alt="The calm, light-filled therapy office in Santa Monica" fill sizes="(max-width: 800px) 90vw, 34vw" />
              <span>THE OFFICE · SANTA MONICA, CA</span>
            </div>
          </div>
          <div className="about-copy">
            <p className="lead">I’m Dr. Maya Reynolds, a licensed clinical psychologist based in Santa Monica, California.</p>
            <p>I work with adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I meet are thoughtful, self-aware, and high-achieving. From the outside, they may seem to be managing everything. Inside, they may feel exhausted, caught in overthinking, or constantly bracing for something to go wrong.</p>
            <p>My work often focuses on anxiety, panic, trauma, and burnout. We’ll make space to understand what you’re experiencing, including how stress can show up in your body, relationships, confidence, and sleep.</p>
            <p>I believe therapy works best when you feel respected, understood, and actively involved. My goal is not only to help ease symptoms, but to support insight, resilience, and a stronger relationship with yourself over time.</p>
            <div className="signature">Maya Reynolds<span>Licensed Clinical Psychologist · PsyD</span></div>
          </div>
        </div>
      </section>

      <section className="audience-band">
        <div className="audience-title">
          <p className="eyebrow">DOES THIS FEEL FAMILIAR?</p>
          <h2>You’re getting things done.<br /><em>But at what cost?</em></h2>
        </div>
        <div className="audience-list">
          <div><span>01</span><p>You’re successful on paper, but your mind rarely switches off.</p></div>
          <div><span>02</span><p>You replay conversations, second-guess decisions, or hold yourself to impossible standards.</p></div>
          <div><span>03</span><p>Old experiences still influence how safe, connected, or confident you feel.</p></div>
          <div><span>04</span><p>You’re tired of pushing through stress and want a more sustainable way to live.</p></div>
        </div>
        <p className="audience-footnote">You don’t need to identify with every point to begin.</p>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-kicker"><span>02</span><span>HOW I CAN HELP</span></div>
        <div className="services-heading">
          <div><p className="eyebrow">SUPPORT THAT STARTS WITH YOU</p><h2>We can begin with <em>what feels hardest.</em></h2></div>
          <p>Therapy is collaborative and tailored to your experiences, needs, and pace. These are three areas that often bring people to my practice.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top"><span>{service.number}</span><span className="service-star">✳</span></div>
              <p className="eyebrow">{service.eyebrow}</p>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a href="#contact" className="service-link">Explore therapy <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="approach-image">
          <Image src="/assets/maya-office-2.jpg" alt="A warm, uncluttered therapy room with natural light" fill sizes="(max-width: 800px) 100vw, 50vw" />
          <div className="image-label">A QUIET PLACE TO ARRIVE AS YOU ARE</div>
        </div>
        <div className="approach-copy">
          <div className="section-kicker"><span>03</span><span>MY APPROACH</span></div>
          <p className="eyebrow">WARM · COLLABORATIVE · GROUNDED</p>
          <h2>Practical tools.<br /><em>Space for depth.</em></h2>
          <p>Sessions are structured enough to feel supportive, while still leaving room for reflection and depth. We’ll work together to understand both the emotional and physiological sides of what you’re experiencing.</p>
          <p>My approach may integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques. The work is paced carefully, especially when addressing trauma, with attention to safety, stabilization, and feeling more regulated in daily life—not just during sessions.</p>
          <div className="approach-methods">
            <div><span>01</span><strong>CBT</strong><small>Notice patterns and develop practical tools.</small></div>
            <div><span>02</span><strong>EMDR</strong><small>Process difficult experiences when appropriate.</small></div>
            <div><span>03</span><strong>Mindfulness & body-oriented work</strong><small>Build awareness of what happens in mind and body.</small></div>
          </div>
        </div>
      </section>

      <section className="office-section section-pad" id="office" aria-labelledby="office-title">
        <div className="section-kicker"><span>04</span><span>OUR OFFICE</span></div>
        <div className="office-intro-grid">
          <div className="office-heading">
            <p className="eyebrow">A SPACE TO ARRIVE AS YOU ARE</p>
            <h2 id="office-title">Room to exhale.<br /><em>Space to be heard.</em></h2>
          </div>
          <div className="office-intro-copy">
            <p>The office is a quiet, private, and comfortable setting, shaped by natural light and an uncluttered feel. It is a place to slow down, reflect, and talk through what you’re experiencing without needing to have everything figured out first.</p>
            <p>Dr. Maya Reynolds offers in-person therapy in Santa Monica, as well as secure telehealth for clients located in California.</p>
            <div className="office-address"><span aria-hidden="true">⌖</span><div><strong>Santa Monica, California</strong><p>123th Street 45 W<br />Santa Monica, CA 90401</p></div></div>
          </div>
        </div>
        <div className="office-gallery">
          <figure className="office-gallery-main">
            <div className="office-gallery-image office-gallery-image-large">
              <Image src="/assets/maya-office-1.jpg" alt="Natural-light seating area in the therapy office" fill sizes="(max-width: 760px) 100vw, 55vw" />
            </div>
            <figcaption><span>01</span> A quiet, welcoming setting</figcaption>
          </figure>
          <figure className="office-gallery-secondary">
            <div className="office-gallery-image office-gallery-image-small">
              <Image src="/assets/maya-office-2.jpg" alt="Comfortable, uncluttered counselling space" fill sizes="(max-width: 760px) 100vw, 38vw" />
            </div>
            <figcaption><span>02</span> Space for reflection and conversation</figcaption>
          </figure>
        </div>
      </section>

      <section className="process section-pad">
        <div className="section-kicker"><span>05</span><span>WHAT WORKING TOGETHER CAN LOOK LIKE</span></div>
        <div className="process-heading"><p className="eyebrow">A GENTLE START</p><h2>There’s no need to have it all <em>figured out.</em></h2></div>
        <div className="process-grid">
          <article><span>01</span><h3>Start with your experience</h3><p>We’ll talk about what has been weighing on you, what you’ve noticed, and what you’d like to feel differently.</p></article>
          <article><span>02</span><h3>Build safety and understanding</h3><p>Together, we’ll look for patterns and create a pace that feels manageable, with safety and stabilization at the center.</p></article>
          <article><span>03</span><h3>Practice new ways forward</h3><p>We’ll draw on practical tools and deeper reflection to support more sustainable ways of relating to yourself and your life.</p></article>
        </div>
      </section>

      <section className="location" aria-labelledby="session-options-title">
        <div className="location-copy">
          <p className="eyebrow">IN-PERSON & ONLINE</p>
          <h2 id="session-options-title">A way of meeting that works for <em>you.</em></h2>
          <p>Therapy can happen in the office or through secure telehealth. Both options offer space to slow down, explore what is happening, and work collaboratively at a pace that feels manageable.</p>
          <div className="location-details"><span className="location-icon" aria-hidden="true">01</span><div><strong>In-person in Santa Monica</strong><span>123th Street 45 W<br />Santa Monica, CA 90401</span></div></div>
          <div className="location-details"><span className="location-icon" aria-hidden="true">02</span><div><strong>Secure California telehealth</strong><span>Online sessions for clients located in California.</span></div></div>
          <a href="#contact" className="button button-light">Explore getting started <span>↗</span></a>
        </div>
        <div className="location-photo">
          <Image src="/assets/maya-office-2.jpg" alt="A calm, naturally lit therapy room with comfortable seating" fill sizes="(max-width: 800px) 100vw, 45vw" />
          <div className="location-photo-note">Come as you are.<br />Begin where you are.</div>
        </div>
      </section>

      <section className="faqs section-pad" id="faqs">
        <div className="section-kicker"><span>06</span><span>COMMON QUESTIONS</span></div>
        <div className="faq-grid">
          <div className="faq-intro"><p className="eyebrow">BEFORE WE BEGIN</p><h2>A few things you might be <em>wondering.</em></h2><p>It’s okay to have questions before reaching out. Here are a few helpful starting points.</p></div>
          <div className="faq-list">
            {faqs.map((faq) => <details key={faq.question} className="faq-item"><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="final-cta" id="contact">
        <div className="cta-orbit orbit-one" /><div className="cta-orbit orbit-two" />
        <p className="eyebrow">WHEN YOU’RE READY</p>
        <h2>You don’t have to keep carrying it all <em>on your own.</em></h2>
        <p>Taking the first step can feel like a lot. You can start with a conversation about what you’re going through and what support might look like.</p>
        <a className="button button-dark" href="#office">Explore office & session options <span>↗</span></a>
        <small>Dr. Maya Reynolds, PsyD · Santa Monica, California</small>
      </section>

      <footer className="footer">
        <a href="#top" className="wordmark footer-wordmark"><span className="wordmark-symbol">m.</span><span className="wordmark-name">MAYA REYNOLDS<span>PSYD · CLINICAL PSYCHOLOGY</span></span></a>
        <p>Therapy for adults navigating anxiety, trauma, and burnout.</p>
        <div className="footer-links"><a href="#about">About</a><a href="#services">Services</a><a href="#approach">Approach</a><a href="#faqs">FAQs</a><a href="#contact">Contact</a></div>
        <div className="footer-bottom"><span>Santa Monica, CA · Telehealth across California</span><span>© 2026 Dr. Maya Reynolds, PsyD</span></div>
        <p className="disclaimer">This website is for informational purposes and does not provide emergency services or establish a therapist-client relationship.</p>
      </footer>
    </main>
  );
}
