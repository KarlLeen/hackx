'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';

// Image URLs
const imgLine1 = "/Vector.svg";
const imgLine9 = "/Vector.svg";
const imgX = "/Vector.svg";
const imgIcon = "/Vector.svg";
const imgRectangle9 = "/Rectangle 227.png";
const imgRectangle10 = "/Rectangle 227.png";
const imgRectangle21 = "/Vector.svg";

// Project Sidebar Component
const ProjectSidebar: React.FC = () => {
  const pathname = usePathname();
  
  return (
    <aside className="fixed left-0 top-0 h-screen bg-bg-dark w-sidebar transition-all duration-300 z-20 md:w-sidebar-sm lg:w-sidebar hidden md:flex flex-col">
      <div className="relative flex flex-col h-full py-6 px-4 overflow-y-auto">
        {/* Logo Container */}
        <div className="mb-6 flex-shrink-0 h-12 w-12 ml-2">
          <img
            alt="HackX Logo"
            className="block w-full h-full object-contain"
            src="/Logo Container.svg"
          />
        </div>

        {/* Dashboard Container - Project specific */}
        <div className="flex flex-col gap-4 mb-6 relative pb-6">
          {/* Overview */}
          <Link href="/dashboard/projects/create" className={`relative py-2 px-1 block ${pathname === '/dashboard/projects/create' ? '' : ''}`}>
            {pathname === '/dashboard/projects/create' && (
              <div className="absolute left-1 right-1 top-0 bottom-0 bg-primary opacity-20 rounded-md"></div>
            )}
            <div className="relative flex gap-2 items-center px-2">
              <div className="w-4 h-4 relative shrink-0">
                <img alt="" className="block w-full h-full" src="/Vector.svg" />
              </div>
              <p className={`text-sm ${pathname === '/dashboard/projects/create' ? 'font-semibold text-primary' : 'font-normal text-text-secondary'}`}>Overview</p>
            </div>
          </Link>
          {/* Tech Stack */}
          <Link href="/dashboard/projects/create/tech-stack" className={`relative py-2 px-1 block ${pathname === '/dashboard/projects/create/tech-stack' ? '' : ''}`}>
            {pathname === '/dashboard/projects/create/tech-stack' && (
              <div className="absolute left-1 right-1 top-0 bottom-0 bg-primary opacity-20 rounded-md"></div>
            )}
            <div className="relative flex gap-2 items-center px-2">
              <div className="w-4 h-4 relative shrink-0">
                <img alt="" className="block w-full h-full" src="/Vector.svg" />
              </div>
              <p className={`text-sm ${pathname === '/dashboard/projects/create/tech-stack' ? 'font-semibold text-primary' : 'font-normal text-text-secondary'}`}>Tech Stack</p>
            </div>
          </Link>
          {/* Hackathon - with highlight background if on /hackathon */}
          <Link href="/dashboard/projects/create/hackathon" className={`relative py-2 px-1 block ${pathname === '/dashboard/projects/create/hackathon' ? '' : ''}`}>
            {pathname === '/dashboard/projects/create/hackathon' && (
              <div className="absolute left-1 right-1 top-0 bottom-0 bg-primary opacity-20 rounded-md"></div>
            )}
            <div className="relative flex gap-2 items-center px-2">
              <div className="w-4 h-4 relative shrink-0">
                <img alt="" className="block w-full h-full" src="/Vector.svg" />
              </div>
              <p className={`text-sm ${pathname === '/dashboard/projects/create/hackathon' ? 'font-semibold text-primary' : 'font-normal text-text-secondary'}`}>Hackathon</p>
            </div>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default function HackathonPage() {
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

  // Mock hackathon data
  const hackathons = [
    {
      id: '1',
      title: 'Web3 Innovate Jam',
      description: 'The Web3 Innovate Jam is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask Card, LI.FI, and USDC. This event aims to bridge the gap between traditional finance and decentralised ecosystems, promoting solutions that enhance user experiences, financial accessibility, and on-chain utility.',
      status: 'Live',
      image: imgRectangle9,
      registrationClose: 'Registration 12 days left',
      techStack: 'All tech stack',
      level: 'All levels accepted',
      totalPrize: '50,000.00 USD',
    },
    {
      id: '2',
      title: 'Coindora Hackfest',
      description: 'Coindora Hackfest was born from a simple but radical belief: true innovation shouldn\'t be strangled by black-box algorithms or centralized gatekeepers. In an era...',
      status: 'Live',
      image: imgRectangle10,
      registrationClose: 'Registration 12 days left',
      techStack: 'All tech stack',
      level: 'All levels accepted',
      totalPrize: '50,000.00 USD',
    },
  ];

  return (
    <div className="bg-bg-dark min-h-screen w-full flex relative">
      <ProjectSidebar />

      {/* Line1 - Vertical divider */}
      <div 
        ref={line1Ref}
        className="fixed top-0 bottom-0 w-px z-30 pointer-events-none hidden md:block"
        style={{
          left: 'clamp(60px, 8vw, 80px)',
        }}
      >
        <div className="h-full w-px relative">
          <img alt="divider" className="block h-full w-full" src={imgLine1} />
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen md:ml-sidebar-sm lg:ml-sidebar relative">
        {/* Header */}
        <Header />

        {/* Horizontal divider */}
        <div className="w-full h-px">
          <img alt="divider" className="block w-full h-full" src={imgLine9} />
        </div>

        {/* Content Container */}
        <div className="flex-1 w-full flex justify-center">
          <div className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8 xl:px-12 py-6 md:py-8 lg:py-10">
            {/* Top Actions */}
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <Link href="/dashboard/projects/create" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                <div className="w-5 h-5 relative">
                  <img alt="x" className="block w-full h-full" src={imgX} />
                </div>
                <span className="text-sm md:text-base">Save project draft & quit</span>
              </Link>

              <div className="flex items-center gap-4">
                <p className="text-[#14b92d] text-sm md:text-base font-medium">90% completed</p>
                <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-bold text-sm md:text-base transition-opacity flex items-center justify-center">
                  Create Project
                </button>
              </div>
            </div>

            {/* Page Title */}
            <h1 className="text-white text-xl md:text-2xl font-bold mb-8 md:mb-10 text-center">
              Create New Project
            </h1>

            {/* Progress Bar */}
            <div className="w-full max-w-[1284px] h-1 mb-8 md:mb-10">
              <img alt="progress" className="block w-full h-full" src={imgRectangle21} />
            </div>

            {/* Section Title */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4">
                Submit Project to Hackathon
              </h2>
              <p className="text-white text-sm md:text-base opacity-80 leading-relaxed max-w-2xl">
                Select an existing hackathon to submit your project to. This way your project will appear in hackathon project gallery early. You can always submit your project to hackathon later
              </p>
            </div>

            {/* Hackathons List */}
            <div className="flex flex-col gap-4 md:gap-6">
              {hackathons.map((hackathon) => (
                <div key={hackathon.id} className="border border-border-darker rounded-2xl p-4 md:p-6 flex flex-col lg:flex-row gap-6 hover:border-primary/30 transition-colors">
                  {/* Left Side - Content */}
                  <div className="flex-1 flex flex-col gap-6 md:gap-8">
                    {/* Title and Status */}
                    <div className="flex flex-wrap gap-2 items-center">
                      <h3 className="text-white text-base md:text-lg font-semibold">
                        {hackathon.title}
                      </h3>
                      <div className="bg-status-live rounded-full px-2.5 py-1 shrink-0">
                        <p className="font-semibold text-white text-xs md:text-sm">{hackathon.status}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="opacity-60 text-white text-sm md:text-base leading-relaxed line-clamp-2">
                      {hackathon.description}
                    </p>

                    {/* Hackathon Details */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                      <div className="flex flex-col gap-1.5 text-white">
                        <p className="opacity-60 text-xs md:text-sm">Registration close</p>
                        <p className="text-sm md:text-base font-medium">{hackathon.registrationClose}</p>
                      </div>
                      <div className="flex flex-col gap-1.5 text-white">
                        <p className="opacity-60 text-xs md:text-sm">Tech stack</p>
                        <p className="text-sm md:text-base font-medium">{hackathon.techStack}</p>
                      </div>
                      <div className="flex flex-col gap-1.5 text-white">
                        <p className="opacity-60 text-xs md:text-sm">Level</p>
                        <p className="text-sm md:text-base font-medium">{hackathon.level}</p>
                      </div>
                      <div className="flex flex-col gap-1.5 text-white">
                        <p className="opacity-60 text-xs md:text-sm">Total prize</p>
                        <p className="text-sm md:text-base font-medium">{hackathon.totalPrize}</p>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button className="bg-transparent hover:bg-primary/10 text-primary px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-sm md:text-base flex items-center gap-2 transition-colors self-start">
                      <span>Submit to this Hackathon</span>
                      <div className="w-3.5 h-3.5 relative">
                        <img alt="icon" className="block w-full h-full" src={imgIcon} />
                      </div>
                    </button>
                  </div>

                  {/* Right Side - Image */}
                  <div className="w-full lg:w-[362px] lg:shrink-0 rounded-lg overflow-hidden aspect-[362/196] relative">
                    {hackathon.id === '2' ? (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#000415] to-[#010b28] rounded-lg"></div>
                        <img
                          alt={hackathon.title}
                          className="absolute inset-0 w-full h-full object-contain"
                          src={hackathon.image}
                        />
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-[#0b0b0a] rounded-lg"></div>
                        <img
                          alt={hackathon.title}
                          className="absolute inset-0 w-full h-full object-contain"
                          src={hackathon.image}
                        />
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

