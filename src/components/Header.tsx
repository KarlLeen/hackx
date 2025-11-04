'use client';

import React from 'react';
import Link from 'next/link';

const imgSearch = "/search.svg";
const imgFrame2 = "/Frame-2.svg";
const imgEllipse2 = "/Ellipse 2.svg";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-bg-dark border-b border-border-dark">
      <div className="w-full flex justify-center px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="w-full max-w-[1100px] 2xl:max-w-[1300px] flex items-center justify-between gap-4 py-3 md:py-4">
        {/* Search Container */}
        <div className="flex-1 max-w-2xl bg-bg-darker border border-border-dark rounded-lg h-10 md:h-12 px-3 md:px-6 flex items-center gap-2">
          <div className="w-5 h-5 relative shrink-0">
            <img alt="search" className="block w-full h-full" src={imgSearch} />
          </div>
          <input
            type="text"
            placeholder="Search for researches and audits on HackX"
            className="flex-1 bg-transparent text-text-secondary text-sm md:text-base outline-none placeholder:text-text-secondary"
          />
        </div>

        {/* Right Side: Notification and Profile */}
        <div className="flex items-center gap-3 md:gap-4 shrink-0">
          {/* Notification Icon */}
          <button className="w-6 h-6 md:w-8 md:h-8 relative hover:opacity-80 transition-opacity">
            <img alt="notification" className="block w-full h-full" src={imgFrame2} />
          </button>

          {/* Profile - Clickable to navigate to login */}
          <Link href="/login" className="w-10 h-10 md:w-12 md:h-12 relative rounded-full overflow-hidden hover:opacity-80 transition-opacity cursor-pointer">
            <img alt="profile" className="block w-full h-full object-cover" src={imgEllipse2} />
            <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-normal text-white text-sm md:text-base">
              C
            </span>
          </Link>
        </div>
      </div>
      </div>
      
      {/* Horizontal divider between sidebar and header content */}
      <div className="w-full h-px bg-[#2B3740]"></div>
    </header>
  );
};

export default Header;

