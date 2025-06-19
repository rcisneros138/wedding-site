"use client";

import Image from "next/image";
import Countdown from "@/components/Countdown";
import RsvpForm from "@/components/RsvpForm";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-20">
      <Navigation />

      {/* Hero Section - Full Width */}
      <Hero />

      <main className="w-full max-w-4xl mx-auto p-4 md:p-8">

        {/* Info Section */}
        <section id="info" className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-display mb-6 text-wedding-brown text-center">
            Our Special Day
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-display mb-4 text-wedding-brown">Ceremony</h3>
              <p className="font-body mb-2">3:00 PM - 4:00 PM</p>
              <p className="font-body mb-2">St. Mary's Cathedral</p>
              <p className="font-body mb-4">123 Wedding Lane, Chicago, IL</p>
              <button
                onClick={() => window.open('https://maps.google.com/?q=St.+Mary%27s+Cathedral+Chicago+IL', '_blank')}
                className="text-sm bg-wedding-brown text-white py-1 px-4 rounded-full font-body hover:bg-opacity-90 transition-all"
              >
                View Map
              </button>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-display mb-4 text-wedding-brown">Reception</h3>
              <p className="font-body mb-2">5:00 PM - 11:00 PM</p>
              <p className="font-body mb-2">Grand Ballroom</p>
              <p className="font-body mb-4">456 Celebration Ave, Chicago, IL</p>
              <button
                onClick={() => window.open('https://maps.google.com/?q=Grand+Ballroom+Chicago+IL', '_blank')}
                className="text-sm bg-wedding-brown text-white py-1 px-4 rounded-full font-body hover:bg-opacity-90 transition-all"
              >
                View Map
              </button>
            </div>
          </div>
        </section>

        {/* Countdown Section */}
        <section id="countdown" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display mb-6 text-wedding-brown">
            Countdown to Our Big Day
          </h2>

          <Countdown targetDate="2025-08-15" />
        </section>

        {/* RSVP Section */}
        <section id="rsvp" className="bg-white rounded-lg shadow-lg p-8 pb-24 mb-16 relative">
          <h2 className="text-3xl md:text-4xl font-display mb-6 text-wedding-brown text-center">
            RSVP
          </h2>

          <RsvpForm />
        </section>
      </main>

      <footer className="w-full max-w-4xl mx-auto text-center py-8">
        <p className="font-body text-sm">
          &copy; 2025 Our Wedding • Made with love
        </p>
      </footer>
    </div>
  );
}
