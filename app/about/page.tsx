"use client";
import Link from "next/link";
import Image from "next/image";

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
    img: "/ceo.png",
    quote: '"We build impact. Our designs, our schedules, our efficiency — all of it must serve people first."',
    accent: "#c9a84c",
    bg: "from-[#0f1f3d] to-[#1a3560]",
    delay: "0s",
  },
  {
    name: "M Nageswara Rao",
    role: "CMD",
    img: "/cmd(1).png",
    quote: '"Where others saw a barren stretch of land, he saw the beginnings of a dream — an integrated township that would one day buzz with life."',
    accent: "#c9a84c",
    bg: "from-[#1a1a1a] to-[#2d2d2d]",
    delay: "0.2s",
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
      <section className="py-16 bg-gradient-to-b from-[#0a0f1e] to-[#111827]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-white mb-2">OUR LEADERSHIP</h2>
          <div className="flex justify-center items-center gap-1 mb-12">
            <span className="w-6 h-1 bg-yellow-400/60 rounded" />
            <span className="w-10 h-1 bg-yellow-400 rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((t) => (
              <div
                key={t.name}
                className={`relative bg-gradient-to-br ${t.bg} rounded-2xl overflow-hidden
                  border border-yellow-400/20 shadow-2xl
                  hover:-translate-y-2 hover:shadow-yellow-400/10 hover:border-yellow-400/50
                  transition-all duration-500`}
                style={{ animationDelay: t.delay }}
              >
                {/* Gold top accent line */}
                <div className="h-1 w-full bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600" />

                <div className="p-8 flex flex-col items-center text-center">
                  {/* Photo with gold ring */}
                  <div className="relative mb-6">
                    <div className="w-28 h-28 rounded-full p-[3px] bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg shadow-yellow-500/30
                      animate-[spin_8s_linear_infinite]">
                      <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                        <Image
                          src={t.img}
                          alt={t.name}
                          width={112}
                          height={112}
                          className="w-full h-full object-cover object-top"
                          style={{ animation: "none" }}
                        />
                      </div>
                    </div>
                    {/* Stop inner image from spinning */}
                    <div className="absolute inset-[3px] rounded-full overflow-hidden">
                      <Image
                        src={t.img}
                        alt={t.name}
                        width={112}
                        height={112}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-white/80 text-sm leading-relaxed italic mb-6 max-w-xs">
                    {t.quote}
                  </p>

                  {/* Divider */}
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-4" />

                  <p className="font-bold text-white text-lg">{t.name}</p>
                  <p className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
