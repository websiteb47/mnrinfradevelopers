import Link from "next/link";

import Image from "next/image";

const properties = [
  {
    id: 1,
    title: "Open Plots In Capital Amaravathi",
    location: "Amaravathi, Andhra Pradesh",
    tag: "CRDA Approved", tagColor: "bg-blue-100 text-blue-700",
    img: "/plot1.JPG",
    desc: "MNR Infra Developers brings you a curated collection of open plots for sale in and around Amaravathi — each designed to offer the ideal foundation for your dream home or a smart investment.",
    highlights: [
      "CRDA / DTCP Approved Layouts – Ensuring legal clarity and genuine ownership.",
      "Wide Internal Roads (40 & 60 ft) – Infrastructure that supports growth and accessibility.",
      "Close to Essentials – Schools, business hubs, healthcare, and government planning zones nearby.",
      "Ideal for Investment or Homebuilding.",
    ],
    color: "border-blue-400", badge: "⭐ KEY HIGHLIGHTS",
  },
  {
    id: 2,
    title: "Open Plots For Sale In Vanukuru",
    location: "Vanukuru, near Vijayawada",
    tag: "Hot Location", tagColor: "bg-orange-100 text-orange-700",
    img: "/plot2.JPG",
    desc: "Open plots for sale in Vanukuru offer an excellent opportunity for homebuyers and investors seeking peaceful surroundings with strong growth potential.",
    highlights: [
      "Close proximity to Vijayawada city.",
      "Easy access to major highways and transportation.",
      "Peaceful suburban living with city connectivity.",
    ],
    color: "border-orange-400", badge: "WHY CHOOSE VANUKURU?",
  },
  {
    id: 3,
    title: "Open Plots For Sale In Yakamuru (Vuyyuru)",
    location: "Yakamuru, Vuyyuru",
    tag: "Emerging Zone", tagColor: "bg-green-100 text-green-700",
    img: "/plot3.JPG",
    desc: "Yakamuru has become a noteworthy destination for people looking to buy open plots for residential development, investment, or future home construction.",
    highlights: [
      "Proximity to Vijayawada and expanding infrastructure.",
      "Blend of tranquil living and urban convenience.",
      "Wide range of land and plot listings.",
    ],
    color: "border-green-400", badge: "DISCOVER YAKAMURU'S POTENTIAL",
  },
  {
    id: 4,
    title: "Open Plots For Sale In Mallavalli",
    location: "Mallavalli, Krishna District",
    tag: "APIIC Zone", tagColor: "bg-purple-100 text-purple-700",
    img: "/plot4.JPG",
    desc: "Mallavalli is rapidly emerging as one of the most promising real estate destinations in Andhra Pradesh, with excellent connectivity to Hanuman Junction, Nuzvid, Gannavaram, and Vijayawada.",
    highlights: [
      "Close to APIIC Industrial Park.",
      "Excellent connectivity to major junctions.",
      "Ideal for residential and long-term land investments.",
    ],
    color: "border-purple-400", badge: "STRATEGIC LOCATION",
  },
  {
    id: 5,
    title: "Open Plots For Sale In Pedamaddali (Pamarru)",
    location: "Pedamaddali, Krishna District",
    tag: "New Listing", tagColor: "bg-red-100 text-red-700",
    img: "/Amaravati Plots.png",
    desc: "Pedamaddali is one of the emerging land destinations near Vijayawada with strong growth potential, making it attractive for both homeowners and investors.",
    highlights: [
      "Good connectivity to key transport routes.",
      "Situated near Vijayawada–Gudivada and Vijayawada–Pamarru highways.",
      "Few kilometres from major bypass roads.",
    ],
    color: "border-red-400", badge: "STRATEGIC LOCATION AND CONNECTIVITY",
  },
  {
    id: 6,
    title: "Open Plots For Sale In Gannavaram",
    location: "Gannavaram, Andhra Pradesh",
    tag: "Airport Proximity", tagColor: "bg-yellow-100 text-yellow-700",
    img: "/open plot.png",
    desc: "Gannavaram's progressive development means land prices are expected to appreciate, offering good returns for early buyers near the airport.",
    highlights: [
      "Near Gannavaram Airport.",
      "Flexible plot sizes with clear documentation.",
      "Good returns expected for early buyers.",
    ],
    color: "border-yellow-400", badge: "AIRPORT CONNECTIVITY",
  },
];

export default function PropertiesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#1e3a5f] text-white py-24 overflow-hidden">
        {/* background pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #60a5fa 0%, transparent 50%), radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 40%)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1e3a5f]/80" />

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="text-blue-300 text-xs font-bold tracking-widest uppercase mb-4">MNR Infra Developers</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">Our Projects</h1>
          <div className="w-16 h-1 bg-blue-400 rounded mx-auto mb-5" />
          <p className="text-blue-200 text-base max-w-xl mx-auto leading-relaxed">
            Explore our curated CRDA/DTCP-approved open plot projects across Andhra Pradesh — strategically located for growth and investment.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8 text-sm">
            {["CRDA Approved", "Clear Title", "Spot Registration", "40ft BT Roads"].map((tag) => (
              <span key={tag} className="bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-medium">
                ✓ {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#b08d57] text-xs font-bold tracking-widest uppercase mb-2">Premium Listings</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Open Plots For Sale</h2>
            <p className="text-gray-400 text-sm max-w-lg mx-auto">
              MNR Infra Developers brings you trusted, CRDA-approved plots across key locations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {properties.map((p, idx) => {
              const slugMap: Record<number, string> = {
                1: "capital-amaravathi-plot",
                2: "vanukuru-open-plot",
                3: "open-plots-yakamuru",
                4: "open-plots-mallavalli",
                5: "open-plots-pedamaddali",
                6: "gannavaram-premium-plot",
              };
              return (
                <div key={p.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 flex flex-col border border-gray-100"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden flex-shrink-0">
                    <Image src={p.img} alt={p.title} fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700" />
                    {/* gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {/* Tag badge */}
                    <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full shadow ${p.tagColor}`}>
                      {p.tag}
                    </span>
                    {/* Location on image */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white text-xs">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      {p.location}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-blue-700 transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{p.desc}</p>

                    {/* Highlights */}
                    <div className="bg-gradient-to-br from-[#f0f7ff] to-[#e8f4ff] rounded-2xl p-4 mb-5 border border-blue-100">
                      <p className="text-xs font-bold text-blue-700 mb-2 flex items-center gap-1">
                        <span className="text-[#b08d57]">★</span> {p.badge}
                      </p>
                      <ul className="space-y-1.5">
                        {p.highlights.map((h, i) => (
                          <li key={i} className="text-xs text-gray-600 flex gap-2 items-start">
                            <span className="text-emerald-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Link href={`/properties/${slugMap[p.id]}`}
                      className="flex items-center justify-center gap-2 bg-[#1e3a5f] hover:bg-[#b08d57] text-white text-sm font-semibold py-3 rounded-xl transition-colors duration-300 mt-auto group/btn"
                    >
                      View Details
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#1e3a5f] text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to Invest in Your Future?</h2>
        <p className="text-blue-200 mb-6 max-w-xl mx-auto">
          Owning a plot in Amaravathi isn&apos;t just about land — it&apos;s about being part of a growth narrative.
        </p>
        <Link
          href="/contact"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full transition-colors inline-block"
        >
          Contact Us Today
        </Link>
      </section>
    </div>
  );
}
