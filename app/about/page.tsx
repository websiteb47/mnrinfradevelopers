"use client";
import Link from "next/link";
import Image from "next/image";

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
    title: "Our Mission",
    desc: "To make quality land ownership accessible to every family seeking a better future.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Our Vision",
    desc: "To be the most trusted and transparent real estate developer in Andhra Pradesh.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Our Values",
    desc: "Integrity, transparency, and a people-first approach in everything we do.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Our Commitment",
    desc: "Creating lasting value for our customers, communities and future generations.",
  },
];

const stats = [
  { value: "33+", label: "Years of Excellence" },
  { value: "200+", label: "Happy Families" },
  { value: "10+", label: "Signature Projects" },
  { value: "100%", label: "Customer Focus" },
];

const values = [
  { title: "Integrity", desc: "Full transparency in every transaction." },
  { title: "Quality", desc: "Highest standards of construction and legal compliance." },
  { title: "Customer First", desc: "Open communication at every stage of the journey." },
  { title: "Long-Term Value", desc: "Building assets that grow with every generation." },
];

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="bg-[#f9f6f1] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#b08d57] text-xs font-bold tracking-widest uppercase mb-4">About Us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Building<br />Better Tomorrows
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm mb-8">
              At MNR Infra Developers, we believe a plot is more than land — it&apos;s the foundation
              for a better life. We are committed to creating spaces where families can live, grow, and belong.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#b08d57] hover:bg-[#9a7a48] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Our Journey →
            </Link>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl h-72 md:h-96 relative">
              <Image src="/mnr hero banner.JPG" alt="MNR Infra Developers" fill className="object-cover object-center" priority />
            </div>
            <div className="absolute bottom-6 right-0 bg-white rounded-2xl shadow-xl p-5 w-44">
              <p className="text-gray-900 font-bold text-base leading-snug mb-1">
                People<br />Properties<br />Possibilities
              </p>
              <div className="w-6 h-0.5 bg-[#b08d57] my-2" />
              <p className="text-gray-500 text-xs">Together for a brighter tomorrow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="bg-white py-14 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {pillars.map((p) => (
            <div key={p.title} className="text-center">
              <div className="w-14 h-14 rounded-full bg-[#f5ede0] flex items-center justify-center mx-auto mb-4 text-[#b08d57]">
                {p.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">{p.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CEO MESSAGE ── */}
      <section className="bg-[#f9f6f1] py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Photo with name below */}
          <div>
            <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/ceo.png" alt="M Sai Yadav — CEO" fill className="object-cover object-top" />
            </div>
            <div className="mt-4 text-center">
              <p className="font-bold text-gray-900 text-xl">M Sai Yadav</p>
              <p className="text-[#b08d57] text-sm font-semibold italic mt-0.5">CEO, MNR Infra Developers</p>
            </div>
          </div>
          {/* Message */}
          <div>
            <p className="text-[#b08d57] text-xs font-bold tracking-widest uppercase mb-3">CEO Message</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              A Plot for<br />Every Aspiration
            </h2>
            <div className="relative pl-6 mb-8">
              <span className="absolute left-0 top-0 text-[#b08d57] text-5xl leading-none font-serif">&ldquo;</span>
              <p className="text-gray-600 text-sm leading-relaxed italic">
                Our journey has always been about people — their dreams, their families and their future.
                Real estate is not just about land; it&apos;s about building stronger communities and
                brighter lives. We are committed to creating spaces that inspire, endure, and add value
                for generations to come.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-gray-300 hover:border-[#b08d57] text-gray-700 hover:text-[#b08d57] text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
            >
              Get In Touch →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CMD MESSAGE ── */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Message */}
          <div>
            <p className="text-[#b08d57] text-xs font-bold tracking-widest uppercase mb-3">CMD Message</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Where Vision<br />Meets the Ground
            </h2>
            <div className="relative pl-6 mb-8">
              <span className="absolute left-0 top-0 text-[#b08d57] text-5xl leading-none font-serif">&ldquo;</span>
              <p className="text-gray-600 text-sm leading-relaxed italic">
                Where others saw a barren stretch of land, I saw the beginnings of a dream — an integrated
                community that would one day buzz with life. Every plot we sell is a promise we keep to
                the families who trust us with their future.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-gray-300 hover:border-[#b08d57] text-gray-700 hover:text-[#b08d57] text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
            >
              Get In Touch →
            </Link>
          </div>
          {/* Photo with name below */}
          <div>
            <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl">
              <Image src="/cmd(1).png" alt="M Nageswara Rao — CMD" fill className="object-cover object-top" />
            </div>
            <div className="mt-4 text-center">
              <p className="font-bold text-gray-900 text-xl">M Nageswara Rao</p>
              <p className="text-[#b08d57] text-sm font-semibold italic mt-0.5">CMD, MNR Infra Developers</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#1a2e1a] text-white py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-extrabold text-[#c9a84c] mb-1">{s.value}</p>
              <p className="text-xs text-gray-300 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="bg-[#f9f6f1] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#b08d57] text-xs font-bold tracking-widest uppercase text-center mb-3">What Drives Us</p>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-[#b08d57] mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{v.title}</h3>
                  <p className="text-gray-600 text-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION QUOTE ── */}
      <section className="bg-[#1e3a5f] text-white py-14 text-center px-6">
        <p className="text-blue-200 text-sm max-w-xl mx-auto mb-4 italic">
          &ldquo;Real estate is not just about land and buildings. It is about trust, assets, and creating lasting value.&rdquo;
        </p>
        <p className="text-2xl font-bold max-w-2xl mx-auto mb-6">
          &ldquo;LAND IS THE ONLY ASSET THAT GROWS EVEN WHILE YOU SLEEP&rdquo;
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#b08d57] hover:bg-[#9a7a48] text-white font-semibold px-8 py-3 rounded-full transition-colors text-sm"
        >
          Contact Us →
        </Link>
      </section>

    </div>
  );
}
