'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Shield, Facebook } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Intelligence', href: '#intelligence' },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'Coaching', href: '/coaching' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-200 border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-24 w-full justify-between">
          {/* Left: SIG Logo */}
          <div className="flex items-center">
            <Link href="/">
              <img src="/SIG_Logo.png" alt="SIG Logo" className="h-20 w-auto" />
            </Link>
          </div>
          {/* Right: Navigation/menu */}
          <div className="flex items-center">
            <div className="hidden md:flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-900 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <button className="gradient-border px-4 py-2 text-sm font-medium rounded-md hover:bg-blue-600/20 transition-all duration-300 text-gray-900">
                Get Started
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-blue-700 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-blue-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-900 hover:text-blue-700 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full mt-2 gradient-border px-4 py-2 text-sm font-medium rounded-md hover:bg-blue-600/20 transition-all duration-300 text-gray-900">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
