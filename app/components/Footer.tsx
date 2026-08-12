import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="font-bold text-lg mb-3">MNR INFRA DEVELOPERS</h3>
          <p className="text-sm text-gray-300 mb-4">
            MNR Infra Developers describes itself as a real-estate development
            company focussed on residential, commercial, and plotted projects.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
              </svg>
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">USEFUL LINKS</h3>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/properties" className="hover:text-white transition-colors">Open Plots</Link>
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/properties" className="hover:text-white transition-colors">Apartments</Link>
            <Link href="/properties" className="hover:text-white transition-colors">Projects</Link>
            <Link href="/properties" className="hover:text-white transition-colors">Villas</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
            <Link href="/properties" className="hover:text-white transition-colors">Farm Lands</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-3">CONTACT INFO</h3>
          <div className="space-y-2 text-sm text-gray-300">
            <p>MNR Infra Developers — a real-estate developer operating in and around Vijayawada.</p>
            <p className="flex items-center gap-2 text-blue-300 font-semibold">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.59 1.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.77-.77a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 73969 01149
            </p>
            <p>Autonagar 100 Feet Road Bunder Road, Vijayawada</p>
            <p>contact@mnrinfradevelopers.com</p>
          </div>

          {/* Subscribe */}
          <div className="mt-4">
            <p className="text-sm font-semibold mb-2">SUBSCRIBE NOW</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-white/10 border border-white/20 rounded-l px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-r transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-600 text-center text-sm py-3">
        Copyright © mnrinfradevelopers.com 2020
      </div>
    </footer>
  );
}
