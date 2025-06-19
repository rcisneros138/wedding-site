"use client";

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-wedding-pink z-0"></div>

      <div className="relative z-10 h-[800px] w-full max-w-[1440px] mx-auto">
        {/* Hero Squiggle Group - Desktop Only */}
        <div className="absolute hidden lg:block" style={{ left: 'calc(50% - 619px)', top: '188px' }}>
          {/* Squiggle Background */}
          <div className="absolute left-0 top-0 z-0">
            <img
              src="/images/hero-new/squiggle.svg"
              alt="Decorative squiggle"
              className="w-auto h-auto max-w-[1238px]"
              style={{
                filter: 'drop-shadow(8px -12px 4px rgba(0, 0, 0, 0.25))'
              }}
            />
          </div>

          {/* Title */}
          <div className="absolute left-[106px] top-[113px] z-10">
            <img
              src="/images/hero-new/title-squiggle.svg"
              alt="We're Getting Married"
              className="w-auto h-auto max-w-[1010px]"
            />
          </div>

          {/* Portrait */}
          <div className="absolute left-[387px] top-[334px] z-20">
            <img
              src="/images/hero-new/portrait.svg"
              alt="Couple portrait"
              className="w-auto h-auto max-w-[474px]"
            />
          </div>
        </div>

        {/* Mobile/Tablet Version - Centered Elements */}
        <div className="lg:hidden flex flex-col items-center justify-center h-full">
          {/* Title */}
          <div className="relative z-10 w-full px-4 mb-8">
            <img
              src="/images/hero-new/title-squiggle.svg"
              alt="We're Getting Married"
              className="w-full max-w-[600px] mx-auto"
            />
          </div>

          {/* Portrait */}
          <div className="relative z-20 w-full px-4 mb-8">
            <img
              src="/images/hero-new/portrait.svg"
              alt="Couple portrait"
              className="w-full max-w-[300px] mx-auto"
            />
          </div>
        </div>

        {/* Date and Location */}
        <div className="absolute left-1/2 bottom-[15%] transform -translate-x-1/2 z-20 text-center">
          <p className="text-xl md:text-2xl font-body text-wedding-brown">
            August 15, 2025 • Chicago, IL
          </p>
        </div>

        {/* Action Buttons */}
        <div className="absolute left-1/2 bottom-[5%] transform -translate-x-1/2 z-20 flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => {
              const rsvpSection = document.getElementById('rsvp');
              if (rsvpSection) {
                window.scrollTo({
                  top: rsvpSection.offsetTop - 80,
                  behavior: 'smooth'
                });
              }
            }}
            className="bg-wedding-brown text-white border-2 border-wedding-brown py-2 px-6 rounded-full font-body font-medium hover:bg-opacity-90 transition-all"
          >
            RSVP Now
          </button>
          <button
            onClick={() => {
              const infoSection = document.getElementById('info');
              if (infoSection) {
                window.scrollTo({
                  top: infoSection.offsetTop - 80,
                  behavior: 'smooth'
                });
              }
            }}
            className="bg-transparent text-wedding-brown border-2 border-wedding-brown py-2 px-6 rounded-full font-body font-medium hover:bg-wedding-brown hover:bg-opacity-10 transition-all"
          >
            View Details
          </button>
        </div>
      </div>
    </section>
  );
}
