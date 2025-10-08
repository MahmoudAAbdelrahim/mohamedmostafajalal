'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '../Projects' },

  ];

  return (
    <nav className="bg-[#0a0f1a] shadow-lg p-4 flex justify-between items-center sticky top-0 z-50">
      
      {/* Logo */}
      <h1 className="text-2xl font-extrabold text-teal-400 cursor-pointer">
        Mohamed
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              onClick={() => setActive(item.name)}
              className={`text-lg font-medium transition-colors duration-300 ${
                active === item.name
                  ? 'text-teal-400 underline underline-offset-4'
                  : 'text-white hover:text-teal-400'
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop Button */}
      <a
        href="../contact"
        className="hidden md:inline-block ml-4 bg-teal-400 text-[#0a0f1a] px-5 py-2 rounded-lg font-semibold shadow-lg hover:bg-teal-500 transition-all duration-300"
      >
        Get in Touch
      </a>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setOpen(!open)}
      >
        {open ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-[#151f30] shadow-lg flex flex-col items-center gap-4 py-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => {
                setActive(item.name);
                setOpen(false);
              }}
              className={`text-lg font-medium transition-colors duration-300 ${
                active === item.name
                  ? 'text-teal-400 underline underline-offset-4'
                  : 'text-white hover:text-teal-400'
              }`}
            >
              {item.name}
            </a>
          ))}

          {/* Mobile Button */}
          <a
            href="/contact"
            className="mt-2 bg-teal-400 text-[#0a0f1a] px-5 py-2 rounded-lg font-semibold shadow-lg hover:bg-teal-500 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}
