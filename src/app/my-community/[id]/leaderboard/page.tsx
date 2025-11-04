'use client';

import React, { useEffect, useRef } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import CommunityHeader from '@/components/CommunityHeader';

// Image URLs - using local files from public directory
const imgLine1 = "/Vector.svg";
const imgLine9 = "/Vector.svg";
const imgMapPin = "/map-pin.svg";

interface LeaderboardPageProps {
  params: {
    id: string;
  };
}

export default function LeaderboardPage({ params }: LeaderboardPageProps) {
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
  const communityData = {
    id: params.id,
    title: 'HackX India: Co-learning Camp 16',
    banner: '/figma-exported/indieback.png',
    avatar: '/Ellipse 21.svg',
    users: 1355,
    userAvatars: [
      '/Ellipse 22.svg',
      '/Ellipse 23.svg',
      '/Ellipse 24.svg',
    ],
  };

  // Mock leaderboard data
  const leaderboard = [
    {
      id: 1,
      name: 'Maria Gonzalez',
      location: 'Los Angeles, USA',
      points: 580,
      rank: 1,
      avatar: '/Ellipse 19.svg',
    },
    {
      id: 2,
      name: 'Elliot Chen',
      location: 'Toronto, Canada',
      points: 570,
      rank: 2,
      avatar: '/Ellipse 19-1.svg',
    },
    {
      id: 3,
      name: 'Aisha Patel',
      location: 'Sydney, Australia',
      points: 550,
      rank: 3,
      avatar: '/Ellipse 19-2.svg',
    },
    {
      id: 4,
      name: 'Liam O\'Connor',
      location: 'Dublin, Ireland',
      points: 530,
      rank: 4,
      avatar: '/Ellipse 19.svg',
    },
    {
      id: 5,
      name: 'Chloe Brown',
      location: 'London, UK',
      points: 510,
      rank: 5,
      avatar: '/Ellipse 19-3.svg',
    },
    {
      id: 6,
      name: 'Rajiv Sharma',
      location: 'Mumbai, India',
      points: 490,
      rank: 6,
      avatar: '/Ellipse 19-4.svg',
    },
    {
      id: 7,
      name: 'Sofia Russo',
      location: 'Rome, Italy',
      points: 475,
      rank: 7,
      avatar: '/Ellipse 19.svg',
    },
    {
      id: 8,
      name: 'Jin Park',
      location: 'Seoul, South Korea',
      points: 460,
      rank: 8,
      avatar: '/Ellipse 19-5.svg',
    },
    {
      id: 9,
      name: 'Fatima Ahmed',
      location: 'Cairo, Egypt',
      points: 450,
      rank: 9,
      avatar: '/Ellipse 19-2.svg',
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
        <div className="flex-1 w-full">
          <CommunityHeader
            communityId={params.id}
            title={communityData.title}
            banner={communityData.banner}
            avatar={communityData.avatar}
            users={communityData.users}
            userAvatars={communityData.userAvatars}
          />

          {/* Content Area */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[1100px] 2xl:max-w-[1300px] px-4 md:px-8 lg:px-12 xl:px-16 py-6 md:py-8">
              {/* Leaderboard List */}
              <div className="flex flex-col gap-4">
                {leaderboard.map((entry) => (
                  <div
                    key={entry.id}
                    className="bg-bg-dark border border-border-darker rounded-lg p-4"
                  >
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="w-12 h-12 relative shrink-0">
                        <img
                          alt={entry.name}
                          className="block w-full h-full object-cover rounded-full"
                          src={entry.avatar}
                        />
                      </div>

                      {/* User Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col gap-1.5">
                          {/* Name */}
                          <p className="text-white text-sm md:text-base font-semibold">
                            {entry.name}
                          </p>
                          {/* Location */}
                          <div className="flex items-center gap-1">
                            <div className="w-2.5 h-2.5 relative shrink-0">
                              <img alt="location" className="block w-full h-full" src={imgMapPin} />
                            </div>
                            <p className="text-white text-xs opacity-60">
                              {entry.location}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Points and Rank */}
                      <div className="flex items-center gap-2">
                        {/* Points */}
                        <div className="bg-[#121213] rounded-lg px-3.5 py-2 h-[40px] flex items-center justify-center">
                          <p className="text-white text-xs">
                            Points: {entry.points}
                          </p>
                        </div>
                        {/* Rank */}
                        <div className="bg-[#121213] rounded-lg px-3.5 py-2 h-[40px] flex items-center justify-end">
                          <p className="text-white text-xs text-right">
                            No. {entry.rank}
                          </p>
                        </div>
                      </div>
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
