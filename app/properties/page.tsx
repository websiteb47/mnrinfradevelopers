import Link from "next/link";

import Image from "next/image";

const properties = [
  {
    id: 1,
    title: "Open Plots In Capital Amaravathi",
    location: "Amaravathi, Andhra Pradesh",
    tag: "CRDA Approved", tagColor: "bg-blue-100 text-blue-700",
    img: "/Amaravati Plots.png",
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
    img: "/open plot.png",
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
    img: "/open plot.png",
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
    img: "/open plot.png",
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
    img: "/open plot.png",
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
      <section className="relative bg-[#1e3a5f] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-400 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <h1 className="text-4xl font-bold mb-2">OUR PROJECTS</h1>
          <div className="w-12 h-1 bg-white mb-4" />
          <p className="text-blue-200">Explore our curated open plot projects across Andhra Pradesh</p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-purple-600 mb-2">Open Plots For Sale</h2>
          <p className="text-center text-gray-500 mb-10 text-sm">
            MNR Infra Developers brings you trusted, CRDA-approved plots across key locations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
            {properties.map((p) => (
              <div
                key={p.id}
                className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border-t-4 ${p.color} overflow-hidden flex flex-col`}
              >
                <div className="h-44 relative overflow-hidden flex-shrink-0">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${p.tagColor}`}>{p.tag}</span>
                    <span className="text-xs text-gray-400">📍 {p.location}</span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{p.desc}</p>
                  <div className="bg-blue-50 rounded-lg p-3 mb-4 flex-1">
                    <p className="text-xs font-bold text-blue-800 mb-2">⭐ {p.badge}</p>
                    <ul className="space-y-1">
                      {p.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-gray-700 flex gap-1">
                          <span className="text-green-500 mt-0.5">✔</span> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href="/contact"
                    className="block text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 rounded-lg transition-colors mt-auto"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            ))}
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
