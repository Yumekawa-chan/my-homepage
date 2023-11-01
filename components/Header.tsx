"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = (
    <nav className="space-x-4">
      <Link href="/">
        <span className="hover:text-pink-200 cursor-pointer">Top</span>
      </Link>
      <Link href="/about">
        <span className="hover:text-pink-200 cursor-pointer">About me</span>
      </Link>
      <Link href="/application">
        <span className="hover:text-pink-200 cursor-pointer">Application</span>
      </Link>
      <Link href="/contact">
        <span className="hover:text-pink-200 cursor-pointer">Contact</span>
      </Link>
    </nav>
  );

  return (
    <header className="bg-pink-400 text-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image
              src="/girl.png"
              alt="Yumekawa Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <Link href="/">
              <span className="text-2xl font-bold hover:text-pink-200 cursor-pointer">
                Yumekawa Holdings
              </span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">{navLinks}</div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className="block h-1 w-6 bg-white mb-1"></span>
              <span className="block h-1 w-6 bg-white mb-1"></span>
              <span className="block h-1 w-6 bg-white"></span>
            </button>
          </div>
        </div>
        {isMenuOpen && <div className="md:hidden">{navLinks}</div>}
      </div>
    </header>
  );
}

export default Header;
