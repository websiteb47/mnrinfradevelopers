"use client";
import { useEffect, useRef, useState } from "react";

const amenities = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-white fill-none" strokeWidth="1.8">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
    title: "APPROVED LAYOUT",
    desc: "CRDA/RERA-approved layouts with clear title and regulatory compliance.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-white fill-none" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <path d="M2 9h20M9 21V9" />
      </svg>
    ),
    title: "ENTRANCE ARCH",
    desc: "Grand entrance arch with proper entry infrastructure for every layout.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-white fill-none" strokeWidth="1.8">
        <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" />
        <rect x="9" y="11" width="14" height="10" rx="1" />
        <circle cx="12" cy="16" r="1" fill="white" />
      </svg>
    ),
    title: "40 FT BT ROADS",
    desc: "Wide BT CC Roads — 40 ft, 33 ft internal roads properly laid out.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-white fill-none" strokeWidth="1.8">
        <path d="M12 2a5 5 0 0 1 5 5c0 4-5 11-5 11S7 11 7 7a5 5 0 0 1 5-5z" />
        <circle cx="12" cy="7" r="2" />
      </svg>
    ),
    title: "WATER TAP",
    desc: "Continuous water supply with overhead water tank storage.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-white fill-none" strokeWidth="1.8">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "ELECTRICITY",
    desc: "Flexibility for custom construction with electricity provisions.",
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
    title: "CAR PARKING",
    desc: "Quality development with transparent, customer-friendly approach.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-white fill-none" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <path d="M3 3l18 18M21 3 3 21" />
      </svg>
    ),
    title: "COMPOUND WALL",
    desc: "Planned layouts with compound wall for investor-friendly value appreciation.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-white fill-none" strokeWidth="1.8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
        <path d="M14 2v6h6M12 18v-6M9 15h6" />
      </svg>
    ),
    title: "SPOT REGISTRATION",
    desc: "Trusted real estate company offering clear-title projects and spot registration.",
  },
];

function AnimatedCard({ a, index }: { a: typeof amenities[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group relative bg-white rounded-2xl p-6 text-center cursor-pointer overflow-hidden
        shadow-[0_2px_15px_rgba(0,0,0,0.06)] border border-gray-100
        hover:shadow-[0_8px_40px_rgba(37,99,235,0.18)] hover:border-blue-200 hover:-translate-y-2
        transition-all duration-500 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s, box-shadow 0.3s, border-color 0.3s`,
      }}
    >
      {/* Blue gradient bg on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-blue-600/10 transition-all duration-500 rounded-2xl" />

      {/* Icon circle */}
      <div className="relative w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-200
        group-hover:scale-110 group-hover:shadow-blue-400/40 group-hover:bg-blue-700
        transition-all duration-400">
        {a.icon}
      </div>

      <h3 className="relative font-extrabold text-sm tracking-wider text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
        {a.title}
      </h3>
      <p className="relative text-gray-400 text-xs leading-relaxed mb-4 group-hover:text-gray-500 transition-colors duration-300">
        {a.desc}
      </p>

      {/* Arrow */}
      <div className="relative inline-flex items-center justify-center w-8 h-8 rounded-full border border-blue-200 text-blue-500
        group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white
        group-hover:translate-x-1
        transition-all duration-300 text-sm font-bold">
        →
      </div>
    </div>
  );
}

export default function AmenityCards() {
  return (
    <section className="py-20 bg-[#f8faff]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-1 text-gray-900">OUR AMENITIES</h2>
        <div className="flex justify-center items-center gap-1 mb-12">
          <span className="w-6 h-1 bg-blue-300 rounded" />
          <span className="w-10 h-1 bg-blue-600 rounded" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {amenities.map((a, i) => (
            <AnimatedCard key={a.title} a={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
