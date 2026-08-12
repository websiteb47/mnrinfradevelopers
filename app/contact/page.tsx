"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">CONTACT US</h1>
          <div className="w-12 h-1 bg-white mb-4" />
          <p className="text-blue-200">We&apos;d love to hear from you. Reach out for any enquiries.</p>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
            {sent ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <p className="text-green-600 font-semibold text-lg">Message sent successfully!</p>
                <p className="text-gray-500 mt-2 text-sm">We&apos;ll get back to you shortly.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", phone: "", email: "", message: "" }); }}
                  className="mt-6 text-blue-600 text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell us about the property you're looking for..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">CONTACT INFO</h2>
              <p className="text-gray-500 text-sm mb-4">
                MNR Infra Developers — a real-estate developer operating in and around Vijayawada.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.59 1.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.77-.77a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Phone</p>
                    <a href="tel:+917396901149" className="text-blue-600 font-semibold hover:underline">
                      +91 73969 01149
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Address</p>
                    <p className="text-sm text-gray-700">Autonagar 100 Feet Road Bunder Road, Vijayawada</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Email</p>
                    <a href="mailto:contact@mnrinfradevelopers.com" className="text-blue-600 text-sm hover:underline">
                      contact@mnrinfradevelopers.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">SOCIAL MEDIA</h2>
              <div className="flex gap-3">
                {[
                  { label: "Facebook", icon: "f" },
                  { label: "Instagram", icon: "📷" },
                  { label: "YouTube", icon: "▶" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="w-10 h-10 border border-gray-200 rounded flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-colors text-sm font-bold"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7651.093293281527!2d80.66033854172696!3d16.498477874114325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6aa4ed7db5ba1e21%3A0xc4eb3630331834a1!2sMNR%20INFRA%20DEVELOPERS!5e0!3m2!1sen!2sin!4v1786508586524!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="MNR Infra Developers Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
