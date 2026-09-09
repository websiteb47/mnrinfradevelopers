"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const amenities = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-white fill-none" strokeWidth="1.8">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
    title: "APPROVED LAYOUT", desc: "CRDA/RERA-approved layouts with clear title and regulatory compliance.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-white fill-none" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <path d="M2 9h20M9 21V9" />
      </svg>
    ),
    title: "ENTRANCE ARCH", desc: "Grand entrance arch with proper entry infrastructure for every layout.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-white fill-none" strokeWidth="1.8">
        <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" />
        <rect x="9" y="11" width="14" height="10" rx="1" />
        <circle cx="12" cy="16" r="1" fill="white" />
      </svg>
    ),
    title: "40 FT BT ROADS", desc: "Wide BT CC Roads — 40 ft, 33 ft internal roads properly laid out.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-white fill-none" strokeWidth="1.8">
        <path d="M12 2a5 5 0 0 1 5 5c0 4-5 11-5 11S7 11 7 7a5 5 0 0 1 5-5z" />
        <circle cx="12" cy="7" r="2" />
      </svg>
    ),
    title: "WATER TAP", desc: "Continuous water supply with overhead water tank storage.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-white fill-none" strokeWidth="1.8">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "ELECTRICITY", desc: "Flexibility for custom construction with electricity provisions.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-white fill-none" strokeWidth="1.8">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 5v3h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "CAR PARKING", desc: "Quality development with transparent, customer-friendly approach.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-white fill-none" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <path d="M3 3l18 18M21 3 3 21" />
      </svg>
    ),
    title: "COMPOUND WALL", desc: "Planned layouts with compound wall for investor-friendly value appreciation.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-white fill-none" strokeWidth="1.8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
        <path d="M14 2v6h6M12 18v-6M9 15h6" />
      </svg>
    ),
    title: "SPOT REGISTRATION", desc: "Trusted real estate company offering clear-title projects and spot registration.",
  },
];

const stats = [
  { value: "5+", label: "Years Completed" },
  { value: "200+", label: "Happy Families" },
  { value: "50+", label: "Associates" },
  { value: "10+", label: "Projects Completed" },
];

const recentProjects = [
  {
    title: "Open Plots In Capital Amaravathi",
    desc: "APCRDA-approved layouts with clear title and ready infrastructure near the capital region.",
    tag: "Amaravathi", color: "text-blue-600", bg: "bg-blue-50",
    img: "/plot1.JPG",
  },
  {
    title: "Open Plots For Sale In Mallavalli",
    desc: "Rapidly emerging real estate destination near APIIC Industrial Park with excellent connectivity.",
    tag: "Mallavalli", color: "text-purple-600", bg: "bg-purple-50",
    img: "/plot2.JPG",
  },
  {
    title: "Open Plots For Sale In Gannavaram",
    desc: "Progressive development near airport — good returns expected for early buyers.",
    tag: "Gannavaram", color: "text-green-600", bg: "bg-green-50",
    img: "/plot1.JPG",
  },
];

const lifestyleAmenities = [
  {
    title: "24/7 Security",
    desc: "Round-the-clock security with trained guards and CCTV surveillance for a safe community.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  },
  {
    title: "Kids Play Area",
    desc: "Safe kids play area designed for fun, laughter, and joyful childhood moments.",
    img: "https://images.unsplash.com/photo-1575783970733-1aaedde1db74?w=400&q=80",
  },
  {
    title: "Gym",
    desc: "Fully equipped modern gym with professional-grade equipment for all fitness levels.",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80",
  },
  {
    title: "Kids Pool",
    desc: "Safe and fun swimming pool designed especially for children to splash and play.",
    img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&q=80",
  },
  {
    title: "Fitness Park",
    desc: "Dedicated fitness park combining outdoor space with gym-style workout zones.",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
  },
  {
    title: "Multipurpose Hall",
    desc: "Spacious hall for community events, celebrations, and gatherings of all kinds.",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&q=80",
  },
  {
    title: "Hospital",
    desc: "Nearby hospital ensuring residents have quick access to quality healthcare at all times.",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=80",
  },
  {
    title: "Guest Rooms",
    desc: "Comfortable guest rooms available for visiting family and friends within the community.",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80",
  },
];

const featuredProperties = [
  {
    id: 1,
    slug: "capital-amaravathi-plot",
    badge: "For Sale",
    img: "/plot1.JPG",
    title: "Capital Amaravathi Plot",
    location: "Amaravathi, Andhra Pradesh",
    size: "200 sq yds",
    road: "40 ft BT Road",
    approval: "CRDA Approved",
  },
  {
    id: 2,
    slug: "vanukuru-open-plot",
    badge: "New Listing",
    img: "/plot2.JPG",
    title: "Vanukuru Open Plot",
    location: "Vanukuru, near Vijayawada",
    size: "150 sq yds",
    road: "33 ft Road",
    approval: "DTCP Approved",
  },
  {
    id: 3,
    slug: "gannavaram-premium-plot",
    badge: "Premium",
    img: "/plot1.JPG",
    title: "Gannavaram Premium Plot",
    location: "Gannavaram, Krishna Dist.",
    size: "300 sq yds",
    road: "60 ft BT Road",
    approval: "RERA Registered",
  },
];

const types = ["Apartment", "Villa", "Open Plot", "Commercial", "Farm Land"];
const categories = ["Buy", "Rent", "Lease"];
const locations = ["Amaravathi", "Vanukuru", "Yakamuru", "Mallavalli", "Gannavaram", "Pedamaddali"];
const priceRanges = ["Under ₹10L", "₹10L – ₹25L", "₹25L – ₹50L", "₹50L – ₹1Cr", "Above ₹1Cr"];

const slides = ["/slide1.png", "/slide2.png"];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((s) => (s + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* ── HERO SLIDE ── */}
      <section className="relative w-full overflow-hidden" style={{ height: "calc(100vh - 9rem)" }}>
        {slides.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`MNR Infra Developers slide ${i + 1}`}
            fill
            className={`object-cover object-center transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
            priority={i === 0}
          />
        ))}
        {/* Dot indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-white" : "w-2 bg-white/50"}`}
            />
          ))}
        </div>
        {/* Prev / Next arrows */}
        <button
          onClick={() => setCurrent((s) => (s - 1 + slides.length) % slides.length)}
          aria-label="Previous"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-colors"
        >
          ‹
        </button>
        <button
          onClick={() => setCurrent((s) => (s + 1) % slides.length)}
          aria-label="Next"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white transition-colors"
        >
          ›
        </button>
      </section>

      {/* ── FEATURED COLLECTION ── */}
      <section className="py-16 bg-[#f9f7f4]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-teal-700 text-xs font-bold tracking-widest uppercase mb-2">Featured Collection</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Plots worth seeing</h2>
            </div>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
              A handpicked selection of standout plots combining location, legal clarity, and long-term value.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((p) => (
              <div key={p.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {p.badge}
                  </span>
                  {/* Heart */}
                  <button aria-label="Save" className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-gray-400 hover:text-red-500 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </button>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-semibold text-gray-800 mb-1">{p.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{p.location}</p>
                  <div className="flex gap-4 text-gray-500 text-xs border-t border-gray-100 pt-3 mb-4">
                    <span>📐 {p.size}</span>
                    <span>🛣️ {p.road}</span>
                    <span>✅ {p.approval}</span>
                  </div>
                  <Link
                    href={`/properties/${p.slug}`}
                    className="block text-center bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/properties"
              className="inline-block border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold px-8 py-3 rounded-full transition-colors text-sm">
              View All Properties →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY AMARAVATHI ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The real estate market in Amaravathi has been gaining tremendous momentum in recent years, thanks to rapid infrastructure development and increasing investor interest. Among the emerging residential investment options,{" "}
            <strong>MNR Infra Capital Amaravathi Plots</strong> have been drawing attention for their thoughtful planning, strategic location, and future-ready development potential.
          </p>
          <h2 className="text-xl font-bold text-gray-800 mb-3">Why Amaravathi Is Becoming a Real Estate Hotspot</h2>
          <p className="text-gray-600 mb-3">
            Amaravathi, envisioned as an administrative and cultural hub, continues to grow with new infrastructure initiatives:
          </p>
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
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-1">APARTMENT PLANS</h2>
          <div className="flex justify-center items-center gap-1 mb-8">
            <span className="w-6 h-1 bg-blue-300 rounded" />
            <span className="w-10 h-1 bg-blue-600 rounded" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              src="/apartment plans1.JPG"
              alt="MNR Infra — Apartment Floor Plans"
              width={1200}
              height={700}
              className="w-full h-auto object-contain"
            />
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            Thoughtfully designed layouts to suit every lifestyle and budget.
          </p>
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
                  <img
                    src={a.img}
                    alt={a.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-1">Property Benefits</h2>
          <div className="flex justify-center items-center gap-1 mb-10">
            <span className="w-6 h-1 bg-blue-300 rounded" />
            <span className="w-10 h-1 bg-blue-600 rounded" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {amenities.map((a) => (
              <div
                key={a.title}
                className="group bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm
                  hover:shadow-2xl hover:-translate-y-3 hover:border-blue-200 hover:bg-gradient-to-b hover:from-white hover:to-blue-50
                  transition-all duration-300 ease-out cursor-pointer"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow
                  group-hover:scale-110 group-hover:bg-blue-700 group-hover:shadow-lg group-hover:shadow-blue-200
                  transition-all duration-300">
                  {a.icon}
                </div>
                <h3 className="font-bold text-sm mb-2 tracking-wide group-hover:text-blue-700 transition-colors duration-300">
                  {a.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                  {a.desc}
                </p>
                <div className="mt-4 text-blue-500 text-base font-bold
                  group-hover:translate-x-2 group-hover:text-blue-700
                  transition-transform duration-300 inline-block">
                  →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
          <h2 className="text-2xl font-bold text-center text-red-600 mb-1">OUR RECENT PROJECTS</h2>
          <div className="flex justify-center items-center gap-1 mb-10">
            <span className="w-6 h-1 bg-blue-300 rounded" />
            <span className="w-10 h-1 bg-blue-600 rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
            {recentProjects.map((p) => (
              <div key={p.title} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow flex flex-col">
                <div className="h-44 relative overflow-hidden flex-shrink-0">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className={`text-xs font-semibold uppercase tracking-wide ${p.color}`}>{p.tag}</span>
                  <h3 className={`font-bold text-sm mt-1 mb-2 ${p.color}`}>{p.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed flex-1">{p.desc}</p>
                  <Link href="/properties" className={`text-sm font-semibold ${p.color} hover:underline mt-auto`}>
                    Read More →
                  </Link>
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
