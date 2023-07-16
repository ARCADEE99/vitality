"use client";

import Image from "next/image";
import Link from "next/link";
import MenuItems from "./MenuItems";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
    setIsFullscreen(false);
  };


  return (
    <nav className="flex items-center justify-between sm:px-6 xl:px-12 px-36 py-3 bg-text/90 text-white sticky top-0 z-50">
      <Link href="/" className="z-[999]">
        <Image
          src="/assets/images/logo.svg"
          alt="Vitality Digitals Logo"
          width={85}
          height={85}
          priority={true}
        />
      </Link>
      <div className="lg:hidden">
        <MenuItems />
      </div>
      <Link className="lg:hidden" href="#">
        <button className="hover:scale-95 ease-in duration-150 bg-gradient-to-r from-orange to-pink text-white px-[23px] py-[13px] text-[19px] font-button font-bold rounded-full leading-none">
          REACH NOW
        </button>
      </Link>
      <div className="lg:block hidden">
        <Hamburger
          direction="right"
          label="Show menu"
          toggled={isOpen}
          toggle={setOpen}
          onToggle={() => setIsFullscreen(!isFullscreen)}
        />
        {isOpen && <MenuItems isFullscreen={isFullscreen} toggleMenu={toggleMenu} />}
      </div>
    </nav>
  );
};

export default Nav;
