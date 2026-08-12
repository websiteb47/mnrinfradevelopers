"use client";
import { useState } from "react";
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
    img: "/Amaravati Plots.png",
  },
  {
    title: "Open Plots For Sale In Mallavalli",
    desc: "Rapidly emerging real estate destination near APIIC Industrial Park with excellent connectivity.",
    tag: "Mallavalli", color: "text-purple-600", bg: "bg-purple-50",
    img: "/open plot.png",
  },
  {
    title: "Open Plots For Sale In Gannavaram",
    desc: "Progressive development near airport — good returns expected for early buyers.",
    tag: "Gannavaram", color: "text-green-600", bg: "bg-green-50",
    img: "/open plot.png",
  },
];

const types = ["Apartment", "Villa", "Open Plot", "Commercial", "Farm Land"];
const categories = ["Buy", "Rent", "Lease"];
const locations = ["Amaravathi", "Vanukuru", "Yakamuru", "Mallavalli", "Gannavaram", "Pedamaddali"];
const priceRanges = ["Under ₹10L", "₹10L – ₹25L", "₹25L – ₹50L", "₹50L – ₹1Cr", "Above ₹1Cr"];

export default function Home() {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [search, setSearch] = useState({ type: "", category: "", location: "", price: "", size: "", approval: "" });

  return (
    <div>
      {/* ── HERO with real banner image ── */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-white overflow-hidden">
        {/* Banner video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/hero banner video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Hero text */}
        <div className="relative z-10 text-center px-4 mb-10 mt-4">
          <p className="text-blue-300 text-xs tracking-widest uppercase mb-2">— Discover Your Dream Plot —</p>
          <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mb-3 drop-shadow-lg">
            Open Plots in<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Capital Amaravathi
            </span>
          </h1>
          <p className="text-white/80 text-sm max-w-xl mx-auto drop-shadow">
            Stop searching, start investing — MNR Infra Developers, Vijayawada
          </p>
        </div>

        {/* ── SEARCH BOX — overlaid on banner ── */}
        <div className="relative z-10 w-full max-w-4xl px-4 pb-12">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Main row */}
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
              <div className="p-4">
                <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Type</label>
                <select
                  value={search.type}
                  onChange={(e) => setSearch({ ...search, type: e.target.value })}
                  className="w-full text-sm text-gray-700 focus:outline-none bg-transparent"
                >
                  <option value="">All Types</option>
                  {types.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="p-4">
                <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Category</label>
                <select
                  value={search.category}
                  onChange={(e) => setSearch({ ...search, category: e.target.value })}
                  className="w-full text-sm text-gray-700 focus:outline-none bg-transparent"
                >
                  <option value="">Buy / Rent</option>
                  {categories.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div className="p-4">
                <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Location</label>
                <select
                  value={search.location}
                  onChange={(e) => setSearch({ ...search, location: e.target.value })}
                  className="w-full text-sm text-gray-700 focus:outline-none bg-transparent"
                >
                  <option value="">All Areas</option>
                  {locations.map((l) => <option key={l}>{l}</option>)}
                </select>
              </div>
              <div className="p-4 flex items-end">
                <Link
                  href="/properties"
                  className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm"
                >
                  Search Properties
                </Link>
              </div>
            </div>

            {/* Advanced toggle */}
            <div className="border-t border-gray-100">
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="w-full flex items-center justify-center gap-1 py-2.5 text-xs text-gray-400 hover:text-gray-600 transition-colors"
              >
                Advanced Search {showAdvanced ? "▲" : "▼"}
              </button>
              {showAdvanced && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 pb-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Price Range</label>
                    <select
                      value={search.price}
                      onChange={(e) => setSearch({ ...search, price: e.target.value })}
                      className="w-full text-sm text-gray-700 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-400"
                    >
                      <option value="">Any Price</option>
                      {priceRanges.map((p) => <option key={p}>{p}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Plot Size</label>
                    <select
                      value={search.size}
                      onChange={(e) => setSearch({ ...search, size: e.target.value })}
                      className="w-full text-sm text-gray-700 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-400"
                    >
                      <option value="">Any Size</option>
                      <option>100–200 sq yds</option>
                      <option>200–400 sq yds</option>
                      <option>400+ sq yds</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Approval</label>
                    <select
                      value={search.approval}
                      onChange={(e) => setSearch({ ...search, approval: e.target.value })}
                      className="w-full text-sm text-gray-700 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-400"
                    >
                      <option value="">Any</option>
                      <option>CRDA Approved</option>
                      <option>DTCP Approved</option>
                      <option>RERA Registered</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
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

      {/* ── AMENITIES ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-1">OUR AMENITIES</h2>
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
