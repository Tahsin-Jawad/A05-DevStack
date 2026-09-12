import { useState } from "react";
import logoText from "../assets/logo-text.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0714]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Mobile Menu Button */}
        <button
          className="btn btn-ghost btn-sm text-2xl text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Brand Logo Image */}
        <a href="#home" className="flex items-center gap-2">
          <img src={logoText} alt="Dev Stack Logo" className="h-9 object-contain" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-300 transition hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2">
          <button className="btn btn-ghost btn-sm text-gray-300">
            Sign In
          </button>

          <button className="btn btn-sm rounded-full border-0 brand-gradient text-white">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;