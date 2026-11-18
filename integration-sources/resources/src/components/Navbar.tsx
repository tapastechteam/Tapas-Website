'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NavLinkItem } from '@/types';

/**
 * Tapas Navigation Bar
 * Features the TAPAS logo on the left, primary navigation links with active underline,
 * "Join Tapas" CTA button on the right, and a responsive hamburger menu for mobile devices.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const navLinks: NavLinkItem[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Meditation', path: '/meditation' },
    { name: 'Events', path: '/events' },
    { name: 'Resources', path: '/resources' },
    { name: 'Team', path: '/team' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-[100] bg-tapas-soft border-b border-tapas-border w-full">
      <div className="w-full max-w-[1200px] mx-auto px-5 md:px-8 flex items-center justify-between h-[4.5rem] py-2">
        <Link href="/" className="flex items-center text-decoration-none" onClick={closeMenu}>
          <div className="relative h-[2.75rem] w-[140px]">
            <Image
              src="/images/tapas-logo.png"
              alt="TAPAS-PCE Logo"
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
              const active = isActive(item.path);
              return (
                <li key={item.name}>
                  <Link
                    href={item.path}
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

        {/* Desktop Join Button */}
        <div className="hidden min-[992px]:block">
          <Link
            href="/join"
            className="inline-flex items-center justify-center bg-tapas-accent text-white px-5 py-[0.6rem] rounded-[6px] text-[0.95rem] font-semibold transition-colors duration-200 hover:bg-tapas-accent-hover"
          >
            Join Tapas
          </Link>
        </div>

        {/* Hamburger Menu Toggle Button (Mobile) */}
        <button
          type="button"
          className="flex flex-col justify-center items-center w-10 h-10 p-1 bg-transparent border border-tapas-border rounded-[6px] gap-[5px] min-[992px]:hidden"
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
        <div className="flex flex-col bg-tapas-soft border-t border-tapas-border px-6 pt-5 pb-8 gap-5 min-[992px]:hidden">
          <ul className="list-none flex flex-col gap-4">
            {navLinks.map((item) => {
              const active = isActive(item.path);
              return (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={`text-[1.05rem] font-medium inline-block py-1 transition-colors duration-200 ${
                      active
                        ? 'text-tapas-accent underline underline-offset-[6px] decoration-2'
                        : 'text-tapas-text hover:text-tapas-accent'
                    }`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-2">
            <Link
              href="/join"
              className="block text-center bg-tapas-accent text-white px-5 py-3 rounded-[6px] font-semibold transition-colors duration-200 hover:bg-tapas-accent-hover"
              onClick={closeMenu}
            >
              Join Tapas
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
