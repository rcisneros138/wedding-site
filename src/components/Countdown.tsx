"use client";

import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string; // Format: "YYYY-MM-DD"
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // If the target date has passed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Clean up on unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-white rounded-lg shadow p-4">
        <div className="text-4xl font-display text-wedding-brown mb-2">{timeLeft.days}</div>
        <div className="font-body text-sm uppercase">Days</div>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <div className="text-4xl font-display text-wedding-brown mb-2">{timeLeft.hours}</div>
        <div className="font-body text-sm uppercase">Hours</div>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <div className="text-4xl font-display text-wedding-brown mb-2">{timeLeft.minutes}</div>
        <div className="font-body text-sm uppercase">Minutes</div>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <div className="text-4xl font-display text-wedding-brown mb-2">{timeLeft.seconds}</div>
        <div className="font-body text-sm uppercase">Seconds</div>
      </div>
    </div>
  );
}
