'use client';

import React, { useEffect, useRef } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import CommunityHeader from '@/components/CommunityHeader';

// Image URLs - using local files from public directory
const imgLine1 = "http://localhost:3845/assets/f91a75f3c3dadd030001e9216dd5e9d26c83e74f.svg";
const imgLine9 = "http://localhost:3845/assets/c2166d7a118fbe0524d2f04202cebe7d7d794022.svg";
const imgFrame5 = "/Frame-5.svg";

interface MissionPageProps {
  params: {
    id: string;
  };
}

export default function MissionPage({ params }: MissionPageProps) {
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
    banner: '/Rectangle 227.png',
    avatar: '/Ellipse 21.svg',
    users: 1355,
    userAvatars: [
      '/Ellipse 22.svg',
      '/Ellipse 23.svg',
      '/Ellipse 24.svg',
    ],
  };

  // Mock mission data
  const missions = [
    {
      id: 1,
      category: 'Social Media',
      title: 'Co-Learning Camp Acceptance post',
      reward: '100 points',
      refreshTime: null,
    },
    {
      id: 2,
      category: 'Social Media',
      title: 'Attendance in Town Hall 1',
      reward: '100 points',
      refreshTime: null,
    },
    {
      id: 3,
      category: 'Social Media',
      title: 'Attendance in Town Hall 1',
      reward: '100 points',
      refreshTime: null,
    },
    {
      id: 4,
      category: 'Social Media',
      title: 'Attendance in Town Hall 1',
      reward: '100 points',
      refreshTime: null,
    },
    {
      id: 5,
      category: 'Social Media',
      title: 'Experience Sharing on X/LinkedIn',
      reward: '100 points',
      refreshTime: 'Refresh everyday at 00:00',
    },
    {
      id: 6,
      category: 'Learning with HQ',
      title: 'Attendance in Town Hall 2',
      reward: '100 points',
      refreshTime: null,
    },
    {
      id: 7,
      category: 'Learning with HQ',
      title: 'Attendance in Town Hall 2',
      reward: '100 points',
      refreshTime: null,
    },
    {
      id: 8,
      category: 'Learning with HQ',
      title: 'Attendance in Town Hall 2',
      reward: '100 points',
      refreshTime: null,
    },
  ];

  // Group missions by category
  const missionsByCategory = missions.reduce((acc, mission) => {
    if (!acc[mission.category]) {
      acc[mission.category] = [];
    }
    acc[mission.category].push(mission);
    return acc;
  }, {} as Record<string, typeof missions>);

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
            <div className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8 xl:px-12 py-6 md:py-8">
              {Object.entries(missionsByCategory).map(([category, categoryMissions]) => (
                <div key={category} className="mb-8 md:mb-12">
                  {/* Category Title */}
                  <h2 className="text-white text-base md:text-lg font-semibold mb-6">
                    {category}
                  </h2>

                  {/* Missions Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {categoryMissions.map((mission) => (
                      <div
                        key={mission.id}
                        className="border border-[#2b3740] rounded-2xl p-4 md:p-6 relative h-[148px] flex flex-col justify-between"
                      >
                        <div className="flex-1 overflow-hidden">
                          {/* Mission Label */}
                          <p className="text-white text-xs opacity-60 mb-2">Mission</p>

                          {/* Mission Title */}
                          <h3 className="text-white text-base md:text-lg font-semibold mb-4">
                            {mission.title}
                          </h3>

                          {/* Reward Section */}
                          <div className="flex items-center gap-3 mb-2">
                            <p className="text-white text-xs opacity-60">Reward</p>
                            <div className="flex items-center gap-2">
                              <div className="w-4.5 h-4.5 relative">
                                <img alt="reward icon" className="block w-full h-full" src={imgFrame5} />
                              </div>
                              <p className="text-white text-base md:text-lg font-semibold">
                                {mission.reward}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-auto">
                          {/* Refresh Time */}
                          {mission.refreshTime && (
                            <p className="text-white text-xs opacity-60">
                              {mission.refreshTime}
                            </p>
                          )}
                          {!mission.refreshTime && <div></div>}

                          {/* Start Mission Button */}
                          <button className="bg-[#121213] hover:bg-[#1a1a1d] text-white px-4 py-2.5 rounded-lg text-sm md:text-base font-normal transition-colors h-[40px] flex items-center justify-center ml-auto">
                            Start Mission
                          </button>
                        </div>
                      </div>
                    ))}
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
