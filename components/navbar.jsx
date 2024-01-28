"use client";
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import NavLink from './navlink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuNav from './menu';
import { Roboto_Mono } from 'next/font/google';

const RubikMono = Roboto_Mono({ subsets: ['latin'], weight: ['400'] })

const navLinks = [
  {
    title: "About",
    path: "#About",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-stone-700 bg-opacity-80'>
      <div className={RubikMono.className}>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
              <Link href={"/"} className='text-4xl md:text-5xl text-white'>
                <Image 
                src='/malamute.png'
                alt='foto panda'
                quality={100}
                width={50}
                height={50}
                />
              </Link>
              <div className='mobile-menu block md:hidden'>
                {!navbarOpen ? (
                  <button
                    onClick={() => setNavbarOpen(true)}
                    className="flex items-center px-3 py-2 border rounded border-white text-white hover:text-white hover:border-white"
                  >
                    <Bars3Icon className="h-5 w-5" />
                  </button>
                ) : (
                  <button
                    onClick={() => setNavbarOpen(false)}
                    className="flex items-center px-3 py-2 border rounded border-white text-white hover:text-white hover:border-white"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                )}
              </div>
              <div className='menu hidden md:block md:w-auto' id="navbar">
                  <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 text-white'>
                    {
                      navLinks.map((link, index) => (
                        <li key={index}>
                          <NavLink href={link.path} title={link.title} />
                        </li>
                    ))}
                  </ul>
              </div>
          </div>
          {navbarOpen ? <MenuNav links={navLinks} /> : null}
      </div>
    </nav>
  )
}

export default Navbar;
