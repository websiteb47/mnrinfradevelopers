"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AmenityCards from "./components/AmenityCards";
import FeaturedCards from "./components/FeaturedCards";

const stats = [
  { value: "5+", label: "Years Completed" },
  { value: "200+", label: "Happy Families" },
  { value: "50+", label: "Associates" },
  { value: "10+", label: "Projects Completed" },
];

const recentProjects = [
  { title: "Open Plots In Capital Amaravathi", desc: "APCRDA-approved layouts with clear title and ready infrastructure near the capital region.", tag: "Amaravathi", color: "text-blue-600", img: "/plot4.JPG" },
  { title: "Open Plots For Sale In Mallavalli", desc: "Rapidly emerging real estate destination near APIIC Industrial Park with excellent connectivity.", tag: "Mallavalli", color: "text-purple-600", img: "/Amaravati Plots.png" },
  { title: "Open Plots For Sale In Gannavaram", desc: "Progressive development near airport — good returns expected for early buyers.", tag: "Gannavaram", color: "text-green-600", img: "/open plot.png" },
];

const lifestyleAmenities = [
  { title: "24/7 Security", desc: "Round-the-clock security with trained guards and CCTV surveillance.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { title: "Kids Play Area", desc: "Safe kids play area designed for fun, laughter, and joyful childhood moments.", img: "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?w=400&q=80" },
  { title: "Gym", desc: "Fully equipped modern gym with professional-grade equipment for all fitness levels.", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80" },
  { title: "Kids Pool", desc: "Safe and fun swimming pool designed especially for children to splash and play.", img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&q=80" },
  { title: "Fitness Park", desc: "Dedicated fitness park combining outdoor space with gym-style workout zones.", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80" },
  { title: "Multipurpose Hall", desc: "Spacious hall for community events, celebrations, and gatherings of all kinds.", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&q=80" },
  { title: "Hospital", desc: "Nearby hospital ensuring residents have quick access to quality healthcare.", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80" },
  { title: "Guest Rooms", desc: "Comfortable guest rooms available for visiting family and friends within the community.", img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80" },
];

// Desktop slides (landscape 16:9)
const desktopSlides = ["/slide1.png", "/slide2.png"];
// Mobile slides (portrait 9:16)
const mobileSlides = ["/mobileview banner1.png", "/mobileview banner2.png"];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const total = desktopSlides.length; // both arrays same length

  useEffect(() => {
    const t = setInterval(() => setCurrent((s) => (s + 1) % total), 5000);
    return () => clearInterval(t);
  }, [total]);

  return (
    <div>
      {/* ── HERO SLIDE ── */}
      <section className="relative w-full bg-black overflow-hidden">

        {/* Mobile portrait (visible below md) */}
        <div className="block md:hidden relative w-full" style={{ paddingBottom: "177.78%" }}>
          {mobileSlides.map((src, i) => (
            <Image key={src} src={src} alt={`MNR slide ${i + 1}`} fill
              className={`object-cover transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
              priority={i === 0} />
          ))}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {mobileSlides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-5 bg-white" : "w-1.5 bg-white/50"}`} />
            ))}
          </div>
          <button onClick={() => setCurrent((s) => (s - 1 + total) % total)} aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-black/40 rounded-full flex items-center justify-center text-white text-lg">‹</button>
          <button onClick={() => setCurrent((s) => (s + 1) % total)} aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-black/40 rounded-full flex items-center justify-center text-white text-lg">›</button>
        </div>

        {/* Desktop landscape (visible md and above) */}
        <div className="hidden md:block relative w-full" style={{ paddingBottom: "56.25%" }}>
          {desktopSlides.map((src, i) => (
            <Image key={src} src={src} alt={`MNR slide ${i + 1}`} fill
              className={`object-contain transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
              priority={i === 0} />
          ))}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {desktopSlides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-white" : "w-2 bg-white/50"}`} />
            ))}
          </div>
          <button onClick={() => setCurrent((s) => (s - 1 + total) % total)} aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/40 rounded-full flex items-center justify-center text-white text-xl">‹</button>
          <button onClick={() => setCurrent((s) => (s + 1) % total)} aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/40 rounded-full flex items-center justify-center text-white text-xl">›</button>
        </div>
      </section>

      {/* ── FEATURED COLLECTION ── */}
      <FeaturedCards />

      {/* ── WHY AMARAVATHI ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The real estate market in Amaravathi has been gaining tremendous momentum in recent years, thanks to rapid infrastructure development and increasing investor interest. Among the emerging residential investment options,{" "}
            <strong>MNR Infra Capital Amaravathi Plots</strong> have been drawing attention for their thoughtful planning, strategic location, and future-ready development potential.
          </p>
          <h2 className="text-xl font-bold text-gray-800 mb-3">Why Amaravathi Is Becoming a Real Estate Hotspot</h2>
          <ul className="space-y-2">
            {[
              "Growing connectivity with major highways, educational institutions, and business centres.",
              "Peaceful residential environment with urban conveniences developing rapidly.",
              "Investor-friendly real estate climate, making it ideal for long-term asset building.",
            ].map((item) => (
              <li key={item} className="flex gap-2 text-gray-600 text-sm">
                <span className="text-blue-500 mt-0.5">●</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── APARTMENT PLANS ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-1">APARTMENT PLANS</h2>
          <div className="flex justify-center items-center gap-1 mb-8">
            <span className="w-6 h-1 bg-blue-300 rounded" />
            <span className="w-10 h-1 bg-blue-600 rounded" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <Image src="/apartment plans1.JPG" alt="MNR Infra — Apartment Floor Plans" width={1200} height={700} className="w-full h-auto object-contain" />
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">Thoughtfully designed layouts to suit every lifestyle and budget.</p>
        </div>
      </section>

      {/* ── LIFESTYLE AMENITIES ── */}
      <section className="py-16 bg-[#f9f7f4]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-green-600 text-xs font-bold tracking-widest uppercase text-center mb-2">Community Living</p>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Lifestyle Amenities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {lifestyleAmenities.map((a) => (
              <div key={a.title} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-36 overflow-hidden">
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{a.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AMENITIES ── */}
      <AmenityCards />

      {/* ── STATS ── */}
      <section className="bg-[#1e3a5f] text-white py-14">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">OUR SUCCESS STORY</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-extrabold text-red-400 mb-1">{s.value}</div>
                <div className="text-xs text-gray-300 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECENT PROJECTS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-1">OUR RECENT PROJECTS</h2>
          <div className="flex justify-center items-center gap-1 mb-10">
            <span className="w-6 h-1 bg-blue-300 rounded" />
            <span className="w-10 h-1 bg-blue-600 rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
            {recentProjects.map((p) => (
              <div key={p.title} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow flex flex-col">
                <div className="h-44 relative overflow-hidden flex-shrink-0">
                  <Image src={p.img} alt={p.title} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className={`text-xs font-semibold uppercase tracking-wide ${p.color}`}>{p.tag}</span>
                  <h3 className={`font-bold text-sm mt-1 mb-2 ${p.color}`}>{p.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed flex-1">{p.desc}</p>
                  <Link href="/properties" className={`text-sm font-semibold ${p.color} hover:underline mt-auto`}>Read More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="bg-gray-50 py-6 text-center border-t border-gray-100">
        <p className="text-gray-500 text-sm italic">
          &ldquo;లక్ష్యం ఉన్నవాడు అవకాశాలు చూస్తాడు లక్ష్యం లేనివాడు అడ్డంకులు మాత్రమే చూస్తాడు&rdquo;
        </p>
      </section>
    </div>
  );
}
