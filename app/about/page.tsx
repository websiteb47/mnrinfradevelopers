import Link from "next/link";

const values = [
  {
    icon: "🤝",
    title: "Integrity",
    desc: "We operate with full transparency in every transaction, ensuring customers always know where their investment stands.",
  },
  {
    icon: "🏆",
    title: "Quality",
    desc: "Every project we undertake is held to the highest standards of construction, planning, and legal compliance.",
  },
  {
    icon: "👥",
    title: "Customer First",
    desc: "We maintain open communication with our customers, ensuring they feel informed and secure in their investment.",
  },
  {
    icon: "🌱",
    title: "Long-Term Value",
    desc: "Real estate is not just about land and buildings. It's about trust, assets, and creating lasting value.",
  },
];

const team = [
  {
    name: "M Sai Yadav",
    role: "CEO",
    quote:
      '"We build impact. Our designs, our schedules, our efficiency — all of it must serve people first."',
    bg: "bg-gradient-to-br from-orange-400 to-red-400",
  },
  {
    name: "M Nageswara Rao",
    role: "CMD",
    quote:
      '"Where others saw a barren stretch of land, he saw the beginnings of a dream — an integrated township that would one day buzz with life."',
    bg: "bg-gradient-to-br from-blue-400 to-indigo-500",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#1e3a5f] text-white py-20">
        <div className="absolute inset-0 opacity-10 bg-[url('/globe.svg')] bg-cover" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <h1 className="text-4xl font-bold mb-2">ABOUT US</h1>
          <div className="w-12 h-1 bg-white mb-4" />
          <p className="text-blue-200 max-w-xl">
            Building Trust, Delivering Quality, and Shaping the Future of Vijayawada.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">ABOUT US</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <strong>MNR Infra Developers</strong> is a trusted name in real estate development in{" "}
              <strong>Vijayawada</strong>, committed to creating high-quality residential and commercial
              spaces that blend modern design with long-term value. With a strong focus on integrity,
              transparency, and customer satisfaction, we strive to deliver projects that meet the evolving
              lifestyle needs of today&apos;s buyers.
            </p>
            <p>
              Rooted in Vijayawada, MNR Infra Developers understands the region&apos;s growth potential and
              infrastructure development. Our projects are strategically located to offer excellent
              connectivity, thoughtful planning, and a peaceful living environment. From land development to
              residential ventures, we ensure every project meets high standards of quality and legal
              compliance.
            </p>
            <p>
              At MNR Infra Developers, we believe that real estate is not just about buying and selling
              land. It&apos;s about building futures, strengthening communities, and creating spaces where
              families can grow and thrive. Our experienced team works closely with customers at every
              stage, offering clear communication, timely delivery, and reliable after-sales support.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Core Values */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">OUR VISION, MISSION &amp; CORE VALUES</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex gap-4">
                <div className="text-3xl">{v.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{v.title}</h3>
                  <p className="text-gray-600 text-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[#1e3a5f] text-white rounded-xl p-8 text-center">
            <p className="text-lg mb-2 text-blue-200">
              &ldquo;Real estate is not just about land and buildings. It is about trust, assets, and creating lasting value.&rdquo;
            </p>
            <p className="text-2xl font-bold mt-4">
              &ldquo;LAND IS THE ONLY ASSET THAT GROWS EVEN WHILE YOU SLEEP&rdquo;
            </p>
            <Link
              href="/contact"
              className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              📞 CONTACT US
            </Link>
          </div>

          <blockquote className="mt-8 text-center text-gray-500 italic text-sm">
            &ldquo;GREAT DEVELOPMENTS BEGIN WITH GREAT PLANNING.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10">OUR LEADERSHIP</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((t) => (
              <div key={t.name} className={`${t.bg} text-white rounded-xl p-8`}>
                <div className="w-20 h-20 rounded-full bg-white/20 mx-auto mb-4 flex items-center justify-center text-3xl">
                  👤
                </div>
                <p className="text-white/90 leading-relaxed mb-6 text-sm text-center">{t.quote}</p>
                <div className="border-t border-white/30 pt-4 text-center">
                  <div className="w-8 h-0.5 bg-white/50 mx-auto mb-2" />
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-white/70">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
