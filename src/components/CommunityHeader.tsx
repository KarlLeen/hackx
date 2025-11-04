'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface CommunityHeaderProps {
  communityId: string;
  title: string;
  banner: string;
  avatar: string;
  users: number;
  userAvatars: string[];
}

export default function CommunityHeader({
  communityId,
  title,
  banner,
  avatar,
  users,
  userAvatars,
}: CommunityHeaderProps) {
  const pathname = usePathname();

  // Determine active tab
  const isOverview = pathname === `/my-community/${communityId}`;
  const isMission = pathname === `/my-community/${communityId}/mission`;
  const isLeaderboard = pathname === `/my-community/${communityId}/leaderboard`;

  return (
    <>
      {/* Community Banner */}
      <div className="w-full h-[298px] relative">
        <img
          alt={title}
          className="block w-full h-full object-cover"
          src={banner}
        />
        {/* Back Button */}
        <Link
          href="/my-community"
          className="absolute left-4 md:left-6 top-4 md:top-6 flex items-center gap-2 text-white hover:text-primary transition-colors"
        >
          <div className="w-4.5 h-4.5 relative">
            <img alt="back" className="block w-full h-full" src="/arrow-left.svg" />
          </div>
          <span className="text-sm md:text-base">Back to Communities</span>
        </Link>
      </div>

      {/* Community Header */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 md:gap-6 -mt-9 md:-mt-12 relative">
            {/* Left Side - Avatar and Title */}
            <div className="flex items-center gap-4 md:gap-6">
              <div className="w-16 h-16 md:w-20 md:h-20 relative shrink-0">
                <img
                  alt={title}
                  className="block w-full h-full object-cover rounded-full"
                  src={avatar}
                />
              </div>
              <div>
                <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
                  {title}
                </h1>
              </div>
            </div>

            {/* Right Side - User Avatars and Join Button */}
            <div className="flex items-center gap-4">
              {/* User Avatars */}
              <div className="flex items-center gap-2">
                {userAvatars.map((avatar, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 relative -ml-2 first:ml-0"
                    style={{ zIndex: userAvatars.length - index }}
                  >
                    <img
                      alt={`user ${index + 1}`}
                      className="block w-full h-full object-cover rounded-full border-2 border-bg-dark"
                      src={avatar}
                    />
                  </div>
                ))}
                <div className="bg-[#121213] rounded-full px-3 py-2 ml-2">
                  <p className="text-white text-xs">
                    {users.toLocaleString()} users
                  </p>
                </div>
              </div>

              {/* Join Button */}
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2.5 rounded-lg text-sm md:text-base font-semibold transition-colors">
                Join
              </button>
            </div>
          </div>

          {/* Navigation Bar */}
          <div className="mt-6 md:mt-8 relative">
            <div className="bg-white/10 h-[52px] rounded-lg relative w-[447px]">
              {/* Active Tab Background */}
              <div
                className={`absolute top-[2px] h-[48px] bg-primary rounded-lg transition-all duration-300 ${
                  isOverview ? 'left-[2px] w-[144px]' :
                  isMission ? 'left-[148px] w-[134px]' :
                  'left-[294px] w-[144px]'
                }`}
              />
              {/* Navigation Links */}
              <div className="relative flex items-center h-full px-4 gap-[72px]">
                <Link
                  href={`/my-community/${communityId}`}
                  className={`relative z-10 text-base font-normal transition-colors flex items-center justify-center h-full ${
                    isOverview ? 'text-white' : 'text-white/60'
                  }`}
                  style={{ width: '144px', textAlign: 'center' }}
                >
                  Overview
                </Link>
                <Link
                  href={`/my-community/${communityId}/mission`}
                  className={`relative z-10 text-base font-normal transition-colors flex items-center justify-center h-full ${
                    isMission ? 'text-white' : 'text-white/60'
                  }`}
                  style={{ width: '134px', textAlign: 'center' }}
                >
                  Mission
                </Link>
                <Link
                  href={`/my-community/${communityId}/leaderboard`}
                  className={`relative z-10 text-base font-normal transition-colors flex items-center justify-center h-full ${
                    isLeaderboard ? 'text-white' : 'text-white/60'
                  }`}
                  style={{ width: '144px', textAlign: 'center' }}
                >
                  Leaderboard
                </Link>
              </div>
            </div>
          </div>

          {/* Horizontal Divider */}
          <div className="w-full h-px mt-6 md:mt-8">
            <div className="h-full w-full bg-border-darker"></div>
          </div>
        </div>
      </div>
    </>
  );
}

