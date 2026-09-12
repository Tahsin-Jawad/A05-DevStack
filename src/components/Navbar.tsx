import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-orange-400 via-pink-500 to-violet-600 text-sm font-bold text-white">
            &lt;/&gt;
          </div>

          <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-violet-600 bg-clip-text text-xl font-bold text-transparent">
            Dev Stack
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium text-gray-800 hover:text-pink-500">
            Home
          </a>
          <a href="#technologies" className="text-sm text-gray-500 hover:text-pink-500">
            Technologies
          </a>
          <a href="#projects" className="text-sm text-gray-500 hover:text-pink-500">
            Projects
          </a>
          <a href="#about" className="text-sm text-gray-500 hover:text-pink-500">
            About
          </a>
          <a href="#contact" className="text-sm text-gray-500 hover:text-pink-500">
            Contact
          </a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">
            Sign In
          </button>

          <button className="rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90">
            Sign Up
          </button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mr-1 text-2xl text-gray-700"
          >
            ☰
          </button>

          <button className="px-2 py-1 text-xs font-medium text-gray-600">
            Sign In
          </button>

          <button className="rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-violet-600 px-3 py-1.5 text-xs font-semibold text-white">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#technologies" onClick={() => setMenuOpen(false)}>
              Technologies
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;