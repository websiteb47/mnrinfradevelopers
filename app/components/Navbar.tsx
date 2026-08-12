"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white text-gray-800 sticky top-0 z-50 shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/MNR logo.png"
            alt="MNR Infra Developers"
            width={140}
            height={56}
            className="h-16 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                pathname === l.href ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-gray-700"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-gray-700 mb-1" />
          <span className="block w-6 h-0.5 bg-gray-700 mb-1" />
          <span className="block w-6 h-0.5 bg-gray-700" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-50 border-t border-gray-100 px-4 pb-4 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium py-2 border-b border-gray-100 transition-colors hover:text-blue-600 ${
                pathname === l.href ? "text-blue-600" : "text-gray-700"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
