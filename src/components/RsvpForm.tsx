"use client";

import { useState, FormEvent } from "react";

export default function RsvpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "",
    guests: "1",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, attending: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // In a real application, you would send this data to your backend
      // For now, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form submitted:", formData);
      setIsSubmitted(true);
    } catch (err) {
      setError("There was an error submitting your RSVP. Please try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <h3 className="text-2xl font-display mb-4 text-wedding-brown">Thank You!</h3>
        <p className="font-body mb-6">
          Your RSVP has been received. We look forward to celebrating with you!
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-wedding-brown text-white py-2 px-6 rounded-full font-body font-medium hover:bg-opacity-90 transition-all"
        >
          Submit Another Response
        </button>
      </div>
    );
  }

  return (
    <form className="max-w-md mx-auto mb-12" onSubmit={handleSubmit}>
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="name" className="block font-body mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-brown"
          placeholder="Your Name"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block font-body mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-brown"
          placeholder="your.email@example.com"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-body mb-2">Will you be attending?</label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="attending"
              value="yes"
              checked={formData.attending === "yes"}
              onChange={handleRadioChange}
              className="mr-2"
              required
            />
            <span>Yes</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="attending"
              value="no"
              checked={formData.attending === "no"}
              onChange={handleRadioChange}
              className="mr-2"
            />
            <span>No</span>
          </label>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="guests" className="block font-body mb-2">
          Number of Guests
        </label>
        <select
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-brown"
        >
          <option value="1">Just me</option>
          <option value="2">2 people</option>
          <option value="3">3 people</option>
          <option value="4">4 people</option>
        </select>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-wedding-brown text-white py-4 px-8 rounded-full font-body font-medium hover:bg-opacity-90 transition-all disabled:opacity-70 text-xl shadow-lg"
        >
          {isSubmitting ? "Submitting..." : "Submit RSVP"}
        </button>
      </div>
    </form>
  );
}
