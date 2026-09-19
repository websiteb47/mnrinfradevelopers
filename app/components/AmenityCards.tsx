"use client";
import { useEffect, useRef, useState } from "react";

const amenities = [
  {
    title: "APPROVED LAYOUT",
    desc: "CRDA/RERA-approved layouts with clear title and regulatory compliance.",
    bg: "bg-[#e8f5e9]", iconBg: "bg-[#2e7d32]", titleColor: "text-[#2e7d32]", arrowBg: "bg-[#2e7d32]",
    bgImg: "/approved_layout.png",
    icon: (<svg viewBox="0 0 24 24" className="w-7 h-7 stroke-white fill-none" strokeWidth="1.8"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" /><path d="M9 21V12h6v9" /></svg>),
  },
  {
    title: "24/7 Security",
    desc: "Grand entrance arch with proper entry infrastructure for every layout.",
    bg: "bg-[#fff3e0]", iconBg: "bg-[#e65100]", titleColor: "text-[#e65100]", arrowBg: "bg-[#e65100]",
    bgImg: "security.png",
    icon: (<svg viewBox="0 0 24 24" className="w-7 h-7 stroke-white fill-none" strokeWidth="1.8"><rect x="2" y="3" width="20" height="18" rx="2" /><path d="M2 9h20M9 21V9" /></svg>),
  },
  {
    title: "40 FT BT ROADS",
    desc: "Wide BT CC Roads — 40 ft, 33 ft internal roads properly laid out.",
    bg: "bg-[#e3f2fd]", iconBg: "bg-[#1565c0]", titleColor: "text-[#1565c0]", arrowBg: "bg-[#1565c0]",
    bgImg: "/bt_road.png",
    icon: (<svg viewBox="0 0 24 24" className="w-7 h-7 stroke-white fill-none" strokeWidth="1.8"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" /><rect x="9" y="11" width="14" height="10" rx="1" /><circle cx="12" cy="16" r="1" fill="white" /></svg>),
  },
  {
    title: "WATER TAP",
    desc: "Continuous water supply with overhead water tank storage.",
    bg: "bg-[#e0f7fa]", iconBg: "bg-[#00838f]", titleColor: "text-[#00838f]", arrowBg: "bg-[#00838f]",
    bgImg: "/water_tap_new.png",
    icon: (<svg viewBox="0 0 24 24" className="w-7 h-7 stroke-white fill-none" strokeWidth="1.8"><path d="M12 2a5 5 0 0 1 5 5c0 4-5 11-5 11S7 11 7 7a5 5 0 0 1 5-5z" /><circle cx="12" cy="7" r="2" /></svg>),
  },
  {
    title: "ELECTRICITY",
    desc: "Flexibility for custom construction with electricity provisions.",
    bg: "bg-[#fffde7]", iconBg: "bg-[#f9a825]", titleColor: "text-[#f9a825]", arrowBg: "bg-[#f9a825]",
    bgImg: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=300&q=60",
    icon: (<svg viewBox="0 0 24 24" className="w-7 h-7 stroke-white fill-none" strokeWidth="1.8"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>),
  },
  {
    title: "CAR PARKING",
    desc: "Quality development with transparent, customer-friendly approach.",
    bg: "bg-[#fce4ec]", iconBg: "bg-[#c62828]", titleColor: "text-[#c62828]", arrowBg: "bg-[#c62828]",
    bgImg: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=300&q=60",
    icon: (<svg viewBox="0 0 24 24" className="w-7 h-7 stroke-white fill-none" strokeWidth="1.8"><rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h4l3 5v3h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>),
  },
  {
    title: "COMPOUND WALL",
    desc: "Planned layouts with compound wall for investor-friendly value appreciation.",
    bg: "bg-[#ede7f6]", iconBg: "bg-[#4527a0]", titleColor: "text-[#4527a0]", arrowBg: "bg-[#4527a0]",
    bgImg: "/compound_wall.png",
    icon: (<svg viewBox="0 0 24 24" className="w-7 h-7 stroke-white fill-none" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="1" /><path d="M3 9h18M3 15h18M9 3v18M15 3v18" /></svg>),
  },
  {
    title: "SPOT REGISTRATION",
    desc: "Trusted real estate company offering clear-title projects and spot registration.",
    bg: "bg-[#e8f5e9]", iconBg: "bg-[#1b5e20]", titleColor: "text-[#1b5e20]", arrowBg: "bg-[#1b5e20]",
    bgImg: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&q=60",
    icon: (<svg viewBox="0 0 24 24" className="w-7 h-7 stroke-white fill-none" strokeWidth="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" /><path d="M14 2v6h6M12 18v-6M9 15h6" /></svg>),
  },
];

function AnimatedCard({ a, index }: { a: typeof amenities[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const fromLeft = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative ${a.bg} rounded-2xl p-6 text-center cursor-pointer overflow-hidden
        shadow-sm hover:shadow-xl hover:-translate-y-2
        transition-all duration-500 ease-out`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : fromLeft ? "translateX(-60px)" : "translateX(60px)",
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s, box-shadow 0.3s`,
      }}
    >
      {/* Faint background illustration */}
      <div className="absolute inset-0 opacity-30 bg-cover bg-center bg-no-repeat rounded-2xl"
        style={{ backgroundImage: `url(${a.bgImg})` }} />

      {/* Icon circle */}
      <div className={`w-16 h-16 ${a.iconBg} rounded-full flex items-center justify-center mx-auto mb-4 shadow-md
        group-hover:scale-110 transition-transform duration-300`}>
        {a.icon}
      </div>

      <h3 className={`font-extrabold text-sm tracking-wide mb-2 ${a.titleColor}`}>
        {a.title}
      </h3>
      <p className="text-gray-500 text-xs leading-relaxed mb-5">{a.desc}</p>

      {/* Arrow button */}
      <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${a.arrowBg} text-white
        group-hover:scale-110 group-hover:translate-x-1
        transition-all duration-300 text-sm font-bold shadow`}>
        →
      </div>
    </div>
  );
}

export default function AmenityCards() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#f0faf0] to-white relative overflow-hidden">
      {/* Decorative leaves */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20"
        style={{ background: "radial-gradient(circle, #4ade80 0%, transparent 70%)" }} />
      <div className="absolute top-0 right-0 w-40 h-40 opacity-20"
        style={{ background: "radial-gradient(circle, #4ade80 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 relative">
        <h2 className="text-3xl font-extrabold text-center text-[#1b5e20] mb-1">OUR AMENITIES</h2>
        <div className="flex justify-center mb-2">
          <div className="w-12 h-1 bg-green-500 rounded" />
        </div>
        <p className="text-center text-gray-400 text-xs tracking-[0.3em] uppercase mb-10">
          Life Designed For A Better Tomorrow
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {amenities.map((a, i) => (
            <AnimatedCard key={a.title} a={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
