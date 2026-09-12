"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const featuredProperties = [
  {
    id: 1, slug: "capital-amaravathi-plot", badge: "For Sale",
    img: "/plot1.JPG", title: "Capital Amaravathi Plot",
    location: "Amaravathi, Andhra Pradesh",
    size: "200 sq yds", road: "40 ft BT Road", approval: "CRDA Approved",
  },
  {
    id: 2, slug: "vanukuru-open-plot", badge: "New Listing",
    img: "/plot2.JPG", title: "Vanukuru Open Plot",
    location: "Vanukuru, near Vijayawada",
    size: "150 sq yds", road: "33 ft Road", approval: "DTCP Approved",
  },
  {
    id: 3, slug: "gannavaram-premium-plot", badge: "Premium",
    img: "/plot3.JPG", title: "Gannavaram Premium Plot",
    location: "Gannavaram, Krishna Dist.",
    size: "300 sq yds", road: "60 ft BT Road", approval: "RERA Registered",
  },
];

function AnimatedCard({ p, index }: { p: typeof featuredProperties[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [saved, setSaved] = useState(false);

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
      className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(50px)",
        transition: `opacity 0.65s ease ${index * 0.15}s, transform 0.65s ease ${index * 0.15}s, box-shadow 0.3s, translate 0.3s`,
      }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden flex-shrink-0">
        <Image src={p.img} alt={p.title} fill
          className="object-cover group-hover:scale-105 transition-transform duration-700" />
        {/* gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {/* Badge */}
        <span className="absolute top-4 left-4 bg-white/95 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          {p.badge}
        </span>
        {/* Heart */}
        <button
          aria-label="Save"
          onClick={() => setSaved(!saved)}
          className="absolute top-4 right-4 w-9 h-9 bg-white/95 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
        >
          <svg className={`w-4 h-4 transition-colors duration-200 ${saved ? "fill-red-500 stroke-red-500" : "fill-none stroke-gray-400"}`}
            strokeWidth="2" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
        {/* Location overlay */}
        <div className="absolute bottom-3 left-4 flex items-center gap-1 text-white/90 text-xs">
          <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          {p.location}
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 text-base mb-4 group-hover:text-blue-700 transition-colors duration-300">
          {p.title}
        </h3>

        {/* Specs — SVG icons, no emoji */}
        <div className="flex gap-4 text-gray-500 text-xs border-t border-gray-100 pt-4 mb-5">
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#b08d57] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="1"/>
              <path d="M3 9h18M9 21V9"/>
            </svg>
            {p.size}
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#b08d57] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/>
              <rect x="9" y="11" width="14" height="10" rx="1"/>
            </svg>
            {p.road}
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            {p.approval}
          </div>
        </div>

        {/* CTA */}
        <Link href={`/properties/${p.slug}`}
          className="flex items-center justify-center gap-2 bg-[#1e3a5f] hover:bg-[#b08d57] text-white text-sm font-semibold py-3 rounded-xl transition-colors duration-300 mt-auto group/btn"
        >
          View Details
          <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200"
            fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function FeaturedCards() {
  return (
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
          {featuredProperties.map((p, i) => (
            <AnimatedCard key={p.id} p={p} index={i} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/properties"
            className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold px-8 py-3 rounded-full transition-colors text-sm">
            View All Properties
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
