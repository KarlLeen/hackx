'use client';

import React, { useEffect, useRef } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import CommunityHeader from '@/components/CommunityHeader';

// Image URLs - using local files from public directory
const imgLine1 = "/Vector.svg";
const imgLine9 = "/Vector.svg";
const imgFrame5 = "/Frame-5.svg";

interface CommunityDetailPageProps {
  params: {
    id: string;
  };
}

export default function CommunityDetailPage({ params }: CommunityDetailPageProps) {
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
    about: 'Co-Learning Camp 16 Partcipants Quests. Each completed mission gets you a point to elevate your role in the community.',
    roles: [
      {
        role: 'Graduate',
        requirement: '9,000 points',
        details: 'Participants have to complete the whole track to be considered as graduate',
        icon: imgFrame5,
      },
    ],
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
              {/* About Community Section */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-white text-base md:text-lg font-semibold mb-4">
                  About Community
                </h2>
                <p className="text-white text-sm md:text-base opacity-80 leading-relaxed max-w-2xl">
                  {communityData.about}
                </p>
              </div>

              {/* Community Roles Section */}
              <div>
                <h2 className="text-white text-base md:text-lg font-semibold mb-4">
                  Community Roles
                </h2>
                <p className="text-white text-sm md:text-base opacity-80 mb-6 leading-relaxed max-w-2xl">
                  Each completed mission gets you a point to elevate your role in the community.
                </p>

                {/* Roles Table */}
                <div className="border border-border-darker rounded-lg overflow-hidden">
                  {/* Table Header */}
                  <div className="bg-bg-darker border-b border-border-darker grid grid-cols-[1fr_1fr_2fr] gap-4 p-4">
                    <p className="text-white text-xs font-semibold opacity-56">Role</p>
                    <p className="text-white text-xs font-semibold opacity-56">Requirement</p>
                    <p className="text-white text-xs font-semibold opacity-56">Details</p>
                  </div>

                  {/* Table Rows */}
                  <div className="divide-y divide-border-darker">
                    {communityData.roles.map((role, index) => (
                      <div key={index} className="grid grid-cols-[1fr_1fr_2fr] gap-4 p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 relative shrink-0">
                            <img alt="role icon" className="block w-full h-full" src={role.icon} />
                          </div>
                          <p className="text-white text-sm md:text-base">{role.role}</p>
                        </div>
                        <p className="text-white text-sm md:text-base">{role.requirement}</p>
                        <p className="text-white text-sm md:text-base opacity-80">{role.details}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
