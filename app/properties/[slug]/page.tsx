import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const properties = [
  {
    slug: "capital-amaravathi-plot",
    badge: "For Sale",
    img: "/plot1.JPG",
    title: "Capital Amaravathi Plot",
    location: "Amaravathi, Andhra Pradesh",
    size: "200 sq yds",
    road: "40 ft BT Road",
    approval: "CRDA Approved",
    desc: "MNR Infra Developers brings you a curated collection of open plots in and around Amaravathi — each designed to offer the ideal foundation for your dream home or a smart investment. With CRDA-approved layouts and clear title, these plots are ready for registration.",
    highlights: [
      "CRDA / DTCP Approved Layout",
      "Wide 40 ft BT Internal Roads",
      "Overhead Water Tank & Water Supply",
      "Electricity Provision",
      "Compound Wall",
      "Entrance Arch",
      "Spot Registration Available",
      "Close to Government Planning Zones",
    ],
  },
  {
    slug: "vanukuru-open-plot",
    badge: "New Listing",
    img: "/plot2.JPG",
    title: "Vanukuru Open Plot",
    location: "Vanukuru, near Vijayawada",
    size: "150 sq yds",
    road: "33 ft Road",
    approval: "DTCP Approved",
    desc: "Open plots for sale in Vanukuru offer an excellent opportunity for homebuyers and investors seeking peaceful surroundings with strong growth potential. Located in a rapidly developing region near Vijayawada, Vanukuru combines suburban calm with city connectivity.",
    highlights: [
      "DTCP Approved Layout",
      "33 ft Internal Roads",
      "Close proximity to Vijayawada city",
      "Easy access to major highways",
      "Water & Electricity Provisions",
      "Peaceful residential environment",
      "Spot Registration Available",
    ],
  },
  {
    slug: "gannavaram-premium-plot",
    badge: "Premium",
    img: "/plot3.JPG",
    title: "Gannavaram Premium Plot",
    location: "Gannavaram, Krishna Dist.",
    size: "300 sq yds",
    road: "60 ft BT Road",
    approval: "RERA Registered",
    desc: "Gannavaram's progressive development near the airport makes it a prime investment destination. Land prices are expected to appreciate, offering good returns for early buyers. Flexible plot sizes and clear documentation make this an attractive option for first-time buyers and investors.",
    highlights: [
      "RERA Registered Project",
      "Wide 60 ft BT Roads",
      "Near Gannavaram Airport",
      "Clear Title & Documentation",
      "Water & Electricity Ready",
      "Compound Wall & Entrance Arch",
      "Spot Registration Available",
      "High appreciation potential",
    ],
  },
  // All properties from the properties page
  {
    slug: "open-plots-mallavalli",
    badge: "APIIC Zone",
    img: "/plot4.JPG",
    title: "Open Plots For Sale In Mallavalli",
    location: "Mallavalli, Krishna District",
    size: "150–300 sq yds",
    road: "40 ft BT Road",
    approval: "DTCP Approved",
    desc: "Mallavalli, located near Vijayawada in Krishna District, is rapidly emerging as one of the most promising real estate destinations in Andhra Pradesh, with excellent connectivity to Hanuman Junction, Nuzvid, Gannavaram, and Vijayawada.",
    highlights: [
      "Close to APIIC Industrial Park",
      "Excellent highway connectivity",
      "DTCP Approved Layout",
      "40 ft BT Internal Roads",
      "Water & Electricity Provisions",
      "Spot Registration Available",
    ],
  },
  {
    slug: "open-plots-pedamaddali",
    badge: "New Listing",
    img: "/Amaravati Plots.png",
    title: "Open Plots For Sale In Pedamaddali",
    location: "Pedamaddali, Krishna District",
    size: "100–200 sq yds",
    road: "33 ft Road",
    approval: "DTCP Approved",
    desc: "Pedamaddali is one of the emerging land destinations near Vijayawada with strong growth potential. Situated near Vijayawada–Gudivada and Vijayawada–Pamarru highways, the area is making it attractive for both homeowners and investors.",
    highlights: [
      "Near Vijayawada–Gudivada Highway",
      "DTCP Approved Layout",
      "Clear title documentation",
      "Water & Electricity Provisions",
      "Spot Registration Available",
      "Future appreciation potential",
    ],
  },
  {
    slug: "open-plots-yakamuru",
    badge: "Emerging Zone",
    img: "/open plot.png",
    title: "Open Plots For Sale In Yakamuru",
    location: "Yakamuru, Vuyyuru",
    size: "150–250 sq yds",
    road: "40 ft BT Road",
    approval: "DTCP Approved",
    desc: "Yakamuru, located close to Vijayawada, has become a noteworthy destination for residential development, investment, or future home construction. It offers a blend of tranquil living and urban convenience.",
    highlights: [
      "Close to Vijayawada",
      "DTCP Approved Layout",
      "40 ft BT Internal Roads",
      "Peaceful suburban living",
      "Water & Electricity Provisions",
      "Spot Registration Available",
    ],
  },
];

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);
  if (!property) notFound();

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-72 md:h-96">
        <Image src={property.img} alt={property.title} fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <span className="inline-block bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full w-fit mb-3">
            {property.badge}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">{property.title}</h1>
          <p className="text-white/70 text-sm">📍 {property.location}</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        {/* Left — details */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold text-gray-900 mb-4">About This Property</h2>
          <p className="text-gray-600 leading-relaxed mb-8">{property.desc}</p>

          <h3 className="text-lg font-bold text-gray-900 mb-4">Key Highlights</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {property.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-green-500 mt-0.5 flex-shrink-0">✔</span> {h}
              </li>
            ))}
          </ul>

          {/* Specs */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { label: "Plot Size", value: property.size },
              { label: "Road Width", value: property.road },
              { label: "Approval", value: property.approval },
            ].map((s) => (
              <div key={s.label} className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{s.label}</p>
                <p className="font-bold text-gray-800 text-sm">{s.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — enquiry card */}
        <div className="md:col-span-1">
          <div className="bg-[#f9f6f1] rounded-2xl p-6 sticky top-28">
            <h3 className="font-bold text-gray-900 mb-1">Interested in this plot?</h3>
            <p className="text-gray-500 text-sm mb-5">Contact us for pricing and availability.</p>
            <Link
              href="/contact"
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors mb-3"
            >
              Enquire Now
            </Link>
            <a
              href="https://wa.me/917396901149"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold py-3 rounded-xl transition-colors"
            >
              WhatsApp Us
            </a>
            <div className="mt-5 pt-5 border-t border-gray-200 text-sm text-gray-500 space-y-2">
              <p>📞 <a href="tel:+917396901149" className="text-blue-600">+91 73969 01149</a></p>
              <p>📍 55/1/7/9, Patamata, Benz Circle, Vijayawada, AP 520010</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="max-w-5xl mx-auto px-6 pb-12">
        <Link href="/properties" className="text-sm text-blue-600 hover:underline">← Back to All Properties</Link>
      </div>
    </div>
  );
}
