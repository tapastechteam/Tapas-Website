'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

/**
 * TAPAS Multi-page Navigation Bar
 * Routes: Home (/), About (/about), Team (/team), Events (/events), Gallery (/gallery), Resources (/resources), Join Us (/join)
 * Uses client-side routing with Next.js Link, active page highlighting, and responsive mobile menu.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Resources', href: '/resources' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-[100] bg-tapas-soft border-b border-tapas-border w-full shadow-xs">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between h-[4.25rem] sm:h-[4.5rem] py-2">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center text-decoration-none" onClick={closeMenu}>
          <div className="relative h-[2.4rem] sm:h-[2.75rem] w-[120px] sm:w-[140px]">
            <Image
              src="/images/tapas-logo.png"
              alt="TAPAS Logo"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden min-[992px]:block" aria-label="Main Navigation">
          <ul className="flex list-none gap-[1.75rem] items-center">
            {navLinks.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`text-[0.95rem] font-medium pb-1 relative transition-colors duration-200 ${
                      active
                        ? 'text-tapas-accent underline underline-offset-[6px] decoration-2'
                        : 'text-tapas-text hover:text-tapas-accent'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop Join CTA Button */}
        <div className="hidden min-[992px]:block">
          <Link
            href="/join"
            className="inline-flex items-center justify-center bg-tapas-accent text-white px-5 py-[0.6rem] min-h-[40px] rounded-[6px] text-[0.95rem] font-semibold transition-colors duration-200 hover:bg-tapas-accent-hover shadow-sm"
          >
            Join Us
          </Link>
        </div>

        {/* Hamburger Menu Toggle Button (Mobile) */}
        <button
          type="button"
          className="flex flex-col justify-center items-center w-11 h-11 p-2 bg-transparent border border-tapas-border rounded-[6px] gap-[5px] min-[992px]:hidden cursor-pointer"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`w-5 h-[2px] bg-tapas-text transition-transform duration-200 ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`w-5 h-[2px] bg-tapas-text transition-opacity duration-200 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`w-5 h-[2px] bg-tapas-text transition-transform duration-200 ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="flex flex-col bg-tapas-soft border-t border-tapas-border px-5 pt-4 pb-6 gap-3 min-[992px]:hidden">
          <ul className="list-none flex flex-col gap-1">
            {navLinks.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`text-[1.05rem] font-medium flex items-center py-2.5 px-2 rounded-[4px] min-h-[44px] transition-colors duration-200 ${
                      active
                        ? 'text-tapas-accent font-semibold bg-tapas-pastel/60'
                        : 'text-tapas-text hover:text-tapas-accent hover:bg-tapas-pastel/40'
                    }`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-2 pt-2 border-t border-tapas-border/60">
            <Link
              href="/join"
              className="flex items-center justify-center w-full text-center bg-tapas-accent text-white px-5 py-3 min-h-[44px] rounded-[6px] font-semibold transition-colors duration-200 hover:bg-tapas-accent-hover shadow-sm text-base"
              onClick={closeMenu}
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
