'use client';

import React, { useEffect, useRef } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

// Image URLs - using local files from public directory
const imgLine1 = "/Vector.svg";
const imgLine9 = "/Vector.svg";
const imgVector2 = "/Vector.svg";
// Camp images - using placeholder images from figma-exported, will need to be replaced with actual images
const imgCamp1 = "/figma-exported/Hackathon Image1.png";
const imgCamp2 = "/figma-exported/Hackathon Image2.png";
const imgCamp3 = "/figma-exported/Hackathon Image3.png";
// Register icon - using placeholder, will need to be replaced
const imgRegisterIcon = "/Vector.svg";

// Camp type definition
interface Camp {
  id: number;
  title: string;
  status: 'Ongoing' | 'Upcoming' | 'Planned';
  description: string;
  registrationInfo: {
    label: string;
    value: string;
  };
  date: string;
  location: string;
  image: string;
}

// Mock camps data
const camps: Camp[] = [
  {
    id: 1,
    title: 'HackQuest Africa: Co-Learning Camp #4',
    status: 'Ongoing',
    description: 'Get ready for a 2 week of virtual, self-placed, guide and collaborative odyssey into Web3 technology',
    registrationInfo: {
      label: 'Registration close',
      value: 'Registration 8 days left',
    },
    date: 'August 19 — September 11',
    location: 'Online',
    image: imgCamp1,
  },
  {
    id: 2,
    title: 'HackQuest Africa: Co-Learning Camp #5',
    status: 'Upcoming',
    description: 'Join us for another exciting 2 weeks of interactive learning and hands-on experience in the world of NFTs and blockchain.',
    registrationInfo: {
      label: 'Registration opens soon',
      value: 'Registration 21 days left',
    },
    date: 'October 1 — October 15',
    location: 'Online',
    image: imgCamp2,
  },
  {
    id: 3,
    title: 'HackQuest Africa: Co-Learning Camp #6',
    status: 'Planned',
    description: 'Dive deep into decentralized finance (DeFi) and explore innovative financial solutions in our upcoming camp.',
    registrationInfo: {
      label: 'Registration opening',
      value: 'Registration 60 days left',
    },
    date: 'November 1 — November 15',
    location: 'Online',
    image: imgCamp3,
  },
];

export default function LearningCampsPage() {
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

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'Ongoing':
      case 'Upcoming':
      case 'Planned':
        return 'bg-status-live';
      default:
        return 'bg-primary/30';
    }
  };

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
          <div className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8 xl:px-12 py-6 md:py-8 lg:py-10">
            {/* Page Header */}
            <div className="mb-6 md:mb-8">
              <h1 className="text-white text-2xl md:text-3xl font-semibold mb-2">
                Co-learning Camp
              </h1>
              <p className="text-white text-sm md:text-base opacity-80">
                Learn with the community, build your first Web3 project together with your peers.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2 mb-6 md:mb-8">
              <div className="border border-border-darker rounded-lg px-3 py-2 flex items-center gap-2">
                <span className="text-text-secondary text-sm">Status</span>
                <div className="flex items-center gap-1">
                  <span className="text-white text-sm">All</span>
                  <div className="h-1 w-2 relative shrink-0">
                    <img alt="" className="block w-full h-full" src={imgVector2} />
                  </div>
                </div>
              </div>
            </div>

            {/* Section Title */}
            <h2 className="text-white text-base md:text-lg font-semibold mb-6 md:mb-8">
              All Events
            </h2>

            {/* Camps List */}
            <div className="flex flex-col gap-4">
              {camps.map((camp) => (
                <div
                  key={camp.id}
                  className="border border-border-darker rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                >
                  {/* Camp Info */}
                  <div className="flex-1 flex flex-col gap-6 md:gap-8">
                    {/* Camp Header */}
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-white text-base md:text-lg font-semibold">
                          {camp.title}
                        </h3>
                        <div className={`${getStatusBgColor(camp.status)} rounded-2xl px-3 py-1`}>
                          <p className="text-white text-xs font-semibold">
                            {camp.status}
                          </p>
                        </div>
                      </div>
                      <p className="text-white text-sm md:text-base opacity-60 leading-relaxed max-w-2xl">
                        {camp.description}
                      </p>
                    </div>

                    {/* Camp Details */}
                    <div className="flex flex-wrap gap-6">
                      {/* Registration Info */}
                      <div className="flex flex-col gap-1.5">
                        <p className="text-white text-xs opacity-60">
                          {camp.registrationInfo.label}
                        </p>
                        <p className="text-white text-sm font-medium">
                          {camp.registrationInfo.value}
                        </p>
                      </div>

                      {/* When */}
                      <div className="flex flex-col gap-1.5">
                        <p className="text-white text-xs opacity-60">When</p>
                        <p className="text-white text-sm font-medium">
                          {camp.date}
                        </p>
                      </div>

                      {/* Where */}
                      <div className="flex flex-col gap-1.5">
                        <p className="text-white text-xs opacity-60">Where</p>
                        <p className="text-white text-sm font-medium">
                          {camp.location}
                        </p>
                      </div>
                    </div>

                    {/* Register Button */}
                    <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2.5 rounded-lg font-bold text-sm md:text-base flex items-center gap-2 transition-colors w-fit">
                      <span>Register</span>
                      <div className="w-3.5 h-3.5 relative shrink-0">
                        <img alt="register icon" className="block w-full h-full" src={imgRegisterIcon} />
                      </div>
                    </button>
                  </div>

                  {/* Camp Image */}
                  <div className="w-full md:w-[362px] h-[219px] relative shrink-0 rounded-lg overflow-hidden">
                    <img
                      alt={camp.title}
                      className="block w-full h-full object-cover"
                      src={camp.image}
                    />
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

