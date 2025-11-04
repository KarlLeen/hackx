'use client';

import React, { useEffect, useRef } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

// Image URLs - using local files from public directory
const imgLine1 = "/Vector.svg";
const imgLine9 = "/Vector.svg";
const imgVector2 = "/Vector.svg";
// Organization images - using images from figma-exported
const imgAthenaX = "/figma-exported/AthenaX.png";
const imgMetaMask = "/figma-exported/MetaMask.png";
const img0G = "/figma-exported/0G.png";
// Icon - for buttons
const imgIcon = "/Icon.svg";

// Organization type definition
interface Organization {
  id: number;
  name: string;
  image: string;
  description: string;
}

// Mock organizations data
// First row: AthenaX, 0G, MetaMask
const organizations: Organization[] = [
  {
    id: 1,
    name: 'AthenaX',
    image: imgAthenaX,
    description: 'All-in-One Web3 Data & Research Access in-depth blockchain data analytics and cryptocurrency insights.',
  },
  {
    id: 2,
    name: '0G',
    image: img0G,
    description: 'Comprehensive blockchain monitoring tools for security audits and performance assessments.',
  },
  {
    id: 3,
    name: 'MetaMask',
    image: imgMetaMask,
    description: 'Advanced trading algorithms and real-time market analysis for cryptocurrency investors.',
  },
  {
    id: 4,
    name: 'AthenaX',
    image: imgAthenaX,
    description: 'All-in-One Web3 Data & Research Access in-depth blockchain data analytics and cryptocurrency insights.',
  },
  {
    id: 5,
    name: 'MetaMask',
    image: imgMetaMask,
    description: 'Advanced trading algorithms and real-time market analysis for cryptocurrency investors.',
  },
  {
    id: 6,
    name: '0G',
    image: img0G,
    description: 'Comprehensive blockchain monitoring tools for security audits and performance assessments.',
  },
];

export default function DiscussionSupportPage() {
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
          <div className="w-full max-w-[1100px] 2xl:max-w-[1300px] px-4 md:px-8 lg:px-12 xl:px-16 py-6 md:py-8 lg:py-10">
            {/* Page Header */}
            <div className="mb-6 md:mb-8">
              <h1 className="text-white text-2xl md:text-3xl font-semibold mb-4">
                Organization Hub
              </h1>
              <p className="text-white text-sm md:text-base opacity-80 leading-relaxed max-w-2xl">
                Discover and connect with leading Web3 ecosystems on HackQuest. From Layer 1 and Layer 2 blockchains to DeFi, GameFi, and infrastructure protocols, explore a diverse range of ecosystems shaping the decentralized future.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8 md:mb-12">
              <button className="bg-primary hover:bg-primary/90 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-sm md:text-base flex items-center justify-center gap-2 transition-colors">
                <span>Apply for Organizer</span>
                <div className="w-3.5 h-3.5 md:w-4 md:h-4 relative shrink-0">
                  <img alt="icon" className="block w-full h-full" src={imgIcon} />
                </div>
              </button>
              <button className="border border-primary hover:border-primary/80 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-sm md:text-base flex items-center justify-center gap-2 transition-colors">
                <span>Check my Application</span>
                <div className="w-3.5 h-3.5 md:w-4 md:h-4 relative shrink-0">
                  <img alt="icon" className="block w-full h-full" src={imgIcon} />
                </div>
              </button>
            </div>

            {/* My Organization Section */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-white text-base md:text-lg font-semibold mb-6 md:mb-8">
                My Organization
              </h2>

              {organizations.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 md:py-16">
                  <div className="w-[170px] h-[75px] relative mb-4">
                    <img alt="no organizations" className="block w-full h-full" src={imgVector2} />
                  </div>
                  <p className="text-white text-sm opacity-40">
                    No organizations yet
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {organizations.map((org) => (
                    <div
                      key={org.id}
                      className="border border-border-darker rounded-2xl p-4 md:p-6 hover:border-primary/30 transition-colors"
                    >
                      {/* Organization Image */}
                      <div className="w-18 h-18 md:w-20 md:h-20 rounded-lg overflow-hidden mb-4">
                        <img
                          alt={org.name}
                          className="block w-full h-full object-cover"
                          src={org.image}
                        />
                      </div>

                      {/* Organization Name */}
                      <h3 className="text-white text-base font-bold mb-2">
                        {org.name}
                      </h3>

                      {/* Organization Description */}
                      <p className="text-white text-sm opacity-60 leading-relaxed">
                        {org.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* My Organization Section (Second) */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-white text-base md:text-lg font-semibold mb-6 md:mb-8">
                My Organization
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {organizations.map((org) => (
                  <div
                    key={`second-${org.id}`}
                    className="border border-border-darker rounded-2xl p-4 md:p-6 hover:border-primary/30 transition-colors"
                  >
                    {/* Organization Image */}
                    <div className="w-18 h-18 md:w-20 md:h-20 rounded-lg overflow-hidden mb-4">
                      <img
                        alt={org.name}
                        className="block w-full h-full object-cover"
                        src={org.image}
                      />
                    </div>

                    {/* Organization Name */}
                    <h3 className="text-white text-base font-bold mb-2">
                      {org.name}
                    </h3>

                    {/* Organization Description */}
                    <p className="text-white text-sm opacity-60 leading-relaxed">
                      {org.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

