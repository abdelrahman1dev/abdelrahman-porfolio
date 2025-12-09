"use client";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Hamburger from "./Haburger";

export default function Nav() {

  const pathname = usePathname();


  const hideOn = [
    "/projects",
    "/projects/",
  ];

  const hideExact =pathname.startsWith('/projects/');
  const shouldHide = hideOn.includes(pathname) || hideExact;
  const [open, setOpen] = useState(false);

  const navItems = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
  ];

  const socialMedia = [
    { icon: <Facebook size={18} />, href: "/" },
    { icon: <Twitter size={18} />, href: "/" },
    { icon: <Instagram size={18} />, href: "/" },
  ];

  return (
    <header
      className={`
        fixed top-2 inset-x-0
        glass-nav
        mx-auto max-w-[90%]
        p-3 flex items-center justify-between
        z-100
        ${shouldHide ? 'hidden' : ''}
      `}
    >
      {/* LEFT: Logo + Hamburger */}
      <nav className="flex items-center justify-between w-full gap-6 lg:gap-20">
        <Link href="/">
          <h1 className="lg:text-3xl text-2xl font-semibold tracking-tight cursor-pointer">
            abdelrahman
          </h1>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-5">
          {navItems.map((item) => {

            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
                   <li key={item.text} >
              <Link
                href={item.href}
                className={`
                  ${isActive ? 'activnav' : ''}
                  
                  text-sm lg:text-base font-medium
                  hover:text-blue-600 transition-colors
                `}
              >
                {item.text}
              </Link>
            </li>
            )
})}

          {/* Desktop Socials */}
          <div className="flex items-center gap-3">
            {socialMedia.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="p-2 hover:text-blue-600 transition-colors"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </ul>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <Hamburger open={open} setOpen={setOpen} />
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <ul
        className={`
          nav-parent
          fixed inset-0
          bg-white
          flex flex-col items-center justify-center gap-6 text-center
          rounded-b-2xl shadow-xl
          transition-all duration-500
          lg:hidden
          ${open ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-5"}
        `}
      >
        {navItems.map((item, i) => (
          <li
            key={item.text}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: `${i * 70}ms` }}
            className={`
              text-lg p-2 cursor-pointer font-medium
              transform transition-all duration-300
              hover:text-blue-600
              ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
            `}
          >
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}

        {/* MOBILE SOCIALS */}
        <div className="flex gap-4 mt-4">
          {socialMedia.map((item, i) => (
            <Link key={i} href={item.href}>
              <div
                style={{ transitionDelay: `${(i + 1) * 70}ms` }}
                className={`
                  p-2 cursor-pointer transition-all duration-300 hover:text-blue-600
                  ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
                `}
              >
                {item.icon}
              </div>
            </Link>
          ))}
        </div>
      </ul>
    </header>
  );
}
