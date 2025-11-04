'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Filters from '@/components/Filters';
import HackathonCard from '@/components/HackathonCard';

// Image URLs
const imgHackathonImage = "http://localhost:3845/assets/f1e6e5ac581eef41cc19191985e2ab75c63a4868.png";
const imgHackathonImage1 = "http://localhost:3845/assets/4bf2362b61aae0bcce60002218ecbda7eaeed6fc.png";
const imgHackathonImage2 = "http://localhost:3845/assets/7f29d5082a5907a467abafc18cc3fb709f10e77a.png";
const imgHackathonImage3 = "http://localhost:3845/assets/7b1f6271d02f96c64892c106af3ec0f8d4bcc53f.png";
const imgHackathonImage4 = "http://localhost:3845/assets/63b3ad30872bfc6485a1f5908dc6de664d7703e7.png";
const imgHackathonImage5 = "http://localhost:3845/assets/f131ff873c8f56b55ec0d4a2fb6a1aa29dc8c93a.png";

// Line1 divider image
const imgLine1 = "http://localhost:3845/assets/df1d21485e699bf1889d4c10443f439e65d15fe5.svg";

export default function Home() {
  const line1Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateLine1Position = () => {
      if (line1Ref.current) {
        if (window.innerWidth >= 1024) {
          line1Ref.current.style.left = 'clamp(200px, 15vw, 280px)';
        } else if (window.innerWidth >= 768) {
          line1Ref.current.style.left = 'clamp(60px, 8vw, 80px)';
        }
      }
    };

    updateLine1Position();
    window.addEventListener('resize', updateLine1Position);
    
    return () => {
      window.removeEventListener('resize', updateLine1Position);
    };
  }, []);

  return (
    <div className="bg-bg-dark min-h-screen w-full flex relative">
      <Sidebar />
      
      {/* Line1 - Vertical divider between sidebar and main content */}
      <div 
        ref={line1Ref}
        className="fixed top-0 bottom-0 w-px z-30 pointer-events-none hidden md:block"
        style={{
          left: 'clamp(60px, 8vw, 80px)',
        }}
      >
        <div className="h-full w-px relative">
          <img 
            alt="divider" 
            className="block h-full w-full" 
            src={imgLine1} 
          />
        </div>
      </div>
      
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen md:ml-sidebar-sm lg:ml-sidebar relative">
        {/* Header - full width */}
        <Header />

        {/* Content Container - centered within available space */}
        <div className="flex-1 w-full flex justify-center items-start px-4 md:px-8 lg:px-12 xl:px-16">
          <div className="w-full max-w-[1100px] 2xl:max-w-[1300px] py-6 md:py-8 lg:py-10">
          {/* Hero Section */}
          <div className="relative mb-6 md:mb-8 lg:mb-12">
            <Hero />
            
            {/* Featured Badge - positioned on hero */}
            <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-white flex gap-2 items-center justify-center px-2 py-1.5 rounded-full shadow-lg">
              <div className="w-4 h-4 relative">
                <img alt="featured" className="block w-full h-full" src="http://localhost:3845/assets/3de0b1b0e7c6fa7cf5c865e8de3967956fb82ce0.svg" />
              </div>
              <p className="font-bold text-primary text-xs md:text-sm">Featured</p>
            </div>

            {/* Start Register Button - positioned on hero */}
            <button className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 md:left-auto md:transform-none md:right-4 md:bottom-6 bg-white hover:bg-gray-100 flex gap-2 items-center justify-center px-4 py-2 md:px-6 md:py-3 rounded-md shadow-lg transition-colors">
              <span className="text-black text-xs md:text-sm font-medium">Start Register</span>
              <div className="w-4 h-4 relative">
                <img alt="arrow" className="block w-full h-full" src="http://localhost:3845/assets/aacd2dc73e6f796e683f01950ad87cf6728c5912.svg" />
              </div>
            </button>
          </div>

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 md:mb-8">
            <div className="flex-1">
              <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-3">
                Explore Hackathons
              </h1>
              <p className="text-white/80 text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed">
                Welcome to your hackathon dashboard! Manage projects, invite teammates, and track your hackathon journey with ease — all in one place.
              </p>
            </div>

                   {/* Host Button */}
                   <Link href="/host" className="bg-primary hover:bg-primary/90 flex gap-2 items-center justify-center px-4 py-2 md:px-6 md:py-3 rounded-md transition-colors shrink-0 self-start md:self-auto">
                     <div className="w-4 h-4 relative">
                       <img alt="plus" className="block w-full h-full" src="http://localhost:3845/assets/ddae953f8c9baa74b833804a68087bd52fb2aa90.svg" />
                     </div>
                     <span className="text-white text-sm md:text-base font-medium">Host a Hackaton</span>
                   </Link>
          </div>

          {/* Filters */}
          <div className="mb-6 md:mb-8">
            <Filters />
          </div>

          {/* Upcoming Hackathons */}
          <section className="mb-12 md:mb-16 lg:mb-20">
            <HackathonCard
              title="ChainSpark Hackathon"
              description="ChainSpark Hackathon was born from a simple but radical belief: true innovation shouldn't be strangled by black-box algorithms or centralized gatekeepers."
              status="Live"
              registrationClose="Registration 12 days left"
              techStack="All tech stack"
              level="All levels accepted"
              totalPrize="50,000.00 USD"
              participants="405"
              imageUrl={imgHackathonImage}
              isOnline={true}
            />
            <HackathonCard
              title="Web3 Innovate Jam"
              description="The Web3 Innovate Jam is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask Card, LI.FI, and USDC. This event aims to bridge the gap between traditional finance and decentralised ecosystems, promoting solutions that enhance user experiences, financial accessibility, and on-chain utility."
              status="Voting"
              votingClose="Voting 8 days left"
              techStack="All tech stack"
              level="All levels accepted"
              totalPrize="40,000.00 USD"
              participants="405"
              imageUrl={imgHackathonImage1}
              isOnline={true}
            />
            <HackathonCard
              title="Coindora Hackfest"
              description="Coindora Hackfest is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask Card, LI.FI, and USDC. This event aims to bridge the gap between traditional finance and decentralised ecosystems, promoting solutions that enhance user experiences, financial accessibility, and on-chain utility."
              status="Voting"
              votingClose="Voting 7 days left"
              techStack="All tech stack"
              level="All levels accepted"
              totalPrize="1,000.00 USD"
              participants="405"
              imageUrl={imgHackathonImage2}
              isOnline={true}
            />
            <HackathonCard
              title="Cryptovate Hack"
              description="Cryptovate Hack is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask Card, LI.FI, and USDC. This event aims to bridge the gap between traditional finance and decentralised ecosystems, promoting solutions that enhance user experiences, financial accessibility, and on-chain utility."
              status="Live"
              votingClose="Voting 8 days left"
              techStack="All tech stack"
              level="All levels accepted"
              totalPrize="40,000.00 USD"
              participants="405"
              imageUrl={imgHackathonImage3}
              isOnline={true}
            />
          </section>

          {/* Past Hackathons */}
          <section>
            <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8">
              Past Hackathons
            </h2>
            <div className="flex flex-col gap-4 md:gap-6">
            <HackathonCard
              title="Ledgeforge Hackathon. Chain Security Club"
              description="Ledgeforge Hackathon. Chain Security Club. Was born from a simple but radical belief: true innovation shouldn't be strangled by black-box algorithms"
              status="Ended"
              winner="Anounced"
              techStack="All tech stack"
              level="All levels accepted"
              totalPrize="50,000.00 USD"
              participants="405"
              imageUrl={imgHackathonImage4}
              isOnline={true}
            />
            <HackathonCard
              title="MetaMask Card Dev Cook-Off"
              description="The MetaMask Card Hackathon is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask Card, LI.FI, and USDC. This event aims to bridge the gap between traditional finance and decentralised ecosystems, promoting solutions that enhance user experiences, financial accessibility, and on-chain utility."
              status="Ended"
              winner="Anounced"
              techStack="All tech stack"
              level="All levels accepted"
              totalPrize="40,000.00 USD"
              participants="405"
              imageUrl={imgHackathonImage5}
              isOnline={true}
            />
            </div>
          </section>
          </div>
        </div>
      </main>
    </div>
  );
}
