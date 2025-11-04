'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

// Image URLs - using local files from public directory
const imgLine1 = "http://localhost:3845/assets/f91a75f3c3dadd030001e9216dd5e9d26c83e74f.svg";
const imgLine9 = "http://localhost:3845/assets/c2166d7a118fbe0524d2f04202cebe7d7d794022.svg";

export default function MyCommunityPage() {
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

  // Mock community data
  const communities = [
    {
      id: 1,
      title: 'HackX India: Co-learning Camp 16',
      banner: '/Rectangle 227.png',
      avatar: '/Ellipse 20.svg',
      missions: 11,
      users: 1058,
      hasJoined: true,
    },
    {
      id: 2,
      title: 'HackX New York, HackX Meetup',
      banner: '/Rectangle 228.png',
      avatar: '/Ellipse 20-1.svg',
      missions: 11,
      users: 1058,
      hasJoined: false,
    },
    {
      id: 3,
      title: 'HackX Nigeria',
      banner: '/Rectangle 227-1.png',
      avatar: '/Ellipse 20-2.svg',
      missions: 11,
      users: 1058,
      hasJoined: false,
    },
    {
      id: 4,
      title: 'HackX Italy',
      banner: '/Rectangle 227-2.png',
      avatar: '/Ellipse 20-3.svg',
      missions: 11,
      users: 1058,
      hasJoined: false,
    },
    {
      id: 5,
      title: 'HackX India: Co-learning Camp 16',
      banner: '/Rectangle 227-3.png',
      avatar: '/Ellipse 20-4.svg',
      missions: 11,
      users: 1058,
      hasJoined: true,
    },
    {
      id: 6,
      title: 'HackX New York, HackX Meetup',
      banner: '/Rectangle 227-4.png',
      avatar: '/Ellipse 20-5.svg',
      missions: 11,
      users: 1058,
      hasJoined: false,
    },
    {
      id: 7,
      title: 'HackX Nigeria',
      banner: '/Rectangle 227-5.png',
      avatar: '/Ellipse 20-6.svg',
      missions: 11,
      users: 1058,
      hasJoined: false,
    },
    {
      id: 8,
      title: 'HackX Italy',
      banner: '/Rectangle 227-6.png',
      avatar: '/Ellipse 20.svg',
      missions: 11,
      users: 1058,
      hasJoined: false,
    },
  ];

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
            {/* Page Title */}
            <h1 className="text-white text-2xl md:text-3xl font-semibold mb-4">
              My Community
            </h1>
            <p className="text-white text-sm md:text-base opacity-80 mb-8 md:mb-10 max-w-2xl leading-relaxed">
              Welcome to the HackX community platform! Explore and join a variety of vibrant communities, connect with like-minded individuals, and collaborate on exciting projects. Let&apos;s build the future of Web3 together!
            </p>

            {/* Explore Community Section */}
            <div>
              <h2 className="text-white text-base md:text-lg font-semibold mb-6 md:mb-8">
                Explore Community
              </h2>

              {/* Communities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {communities.map((community) => (
                  <div key={community.id} className="border border-border-darker rounded-lg overflow-hidden">
                    {/* Banner Image */}
                    <div className="w-full h-[58px] relative">
                      <img
                        alt={community.title}
                        className="block w-full h-full object-cover"
                        src={community.banner}
                      />
                    </div>

                    {/* Community Info */}
                    <div className="p-4 md:p-6">
                      {/* Avatar and Title */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 relative shrink-0">
                          <img
                            alt={community.title}
                            className="block w-full h-full object-cover rounded-full"
                            src={community.avatar}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <Link href={`/my-community/${community.id}`}>
                            <h3 className="text-white text-sm md:text-base font-semibold mb-2 hover:text-primary transition-colors cursor-pointer">
                              {community.title}
                            </h3>
                          </Link>
                          <div className="flex flex-wrap gap-2">
                            <div className="bg-[#121213] rounded-lg px-3 py-2">
                              <p className="text-white text-xs">
                                {community.missions} missions
                              </p>
                            </div>
                            <div className="bg-[#121213] rounded-lg px-3 py-2">
                              <p className="text-white text-xs">
                                {community.users.toLocaleString()} users
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Join Button */}
                      {!community.hasJoined && (
                        <button className="w-full bg-[#121213] hover:bg-[#1a1a1d] text-white px-4 py-2.5 rounded-lg text-sm md:text-base font-medium transition-colors">
                          Join Community
                        </button>
                      )}
                    </div>
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

