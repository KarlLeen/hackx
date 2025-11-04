'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

// Image URLs
const imgLine1 = "http://localhost:3845/assets/df1d21485e699bf1889d4c10443f439e65d15fe5.svg";
const imgLine9 = "http://localhost:3845/assets/c2166d7a118fbe0524d2f04202cebe7d7d794022.svg";
const imgSearch = "http://localhost:3845/assets/44b0646037128e86ca2352deb6762ae8e7ca5f42.svg";
const imgFrame2 = "http://localhost:3845/assets/70eb5a1fc500523b197e623cd621d288d29fc3a8.svg";
const imgEllipse2 = "http://localhost:3845/assets/8e05f16315242ec62575b9c606c2138ab7d7a6cc.svg";
const imgVector2 = "http://localhost:3845/assets/023f00816a6a21d486fc12594bb012cae0ec5ceb.svg";
const imgIcon = "http://localhost:3845/assets/4d84fbadd014768069fa6ee54df87cc5cc585185.svg";
const imgIcon1 = "http://localhost:3845/assets/d3cafabacd01b62f471d281228ba14c91debdf7f.svg";
const imgIcon2 = "http://localhost:3845/assets/82fac536b26f9119da87d6c50f90f1f4582c048d.svg";
const imgGroup2085663257 = "http://localhost:3845/assets/0415e37d3387b661b37f0c3668fffb623c5c518d.svg";
const imgRectangle9 = "http://localhost:3845/assets/f1e6e5ac581eef41cc19191985e2ab75c63a4868.png";
const imgRectangle10 = "http://localhost:3845/assets/4bf2362b61aae0bcce60002218ecbda7eaeed6fc.png";
const imgRectangle11 = "http://localhost:3845/assets/7f29d5082a5907a467abafc18cc3fb709f10e77a.png";
const imgRectangle12 = "http://localhost:3845/assets/6ca4fa119ef6adb0bb04f56c6c345c6daa65e6e9.png";
const imgRectangle28 = "http://localhost:3845/assets/b2ce8a469c0df88bec74e2d4b0202b3e03195a61.png";

export default function DashboardPage() {
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

  // Mock data
  const activeProjects = [
    {
      id: '1',
      title: 'Init Club Pro',
      description: 'FAIR3 was born from a simple but radical belief: true innovation shouldn\'t ...',
      image: imgRectangle28,
      lastEdited: '6 days ago',
    },
  ];

  const registeredHackathons = [
    {
      id: '1',
      title: 'ChainSpark Hackathon',
      description: 'ChainSpark Hackathon was born from a simple but radical belief: true innovation shouldn\'t be strangled by black-box algorithms or centralized gatekeepers.',
      status: 'Live',
      image: imgRectangle9,
      registrationClose: 'Registration 12 days left',
      techStack: 'All tech stack',
      level: 'All levels accepted',
      totalPrize: '50,000.00 USD',
    },
  ];

  const openVotingHackathons = [
    {
      id: '1',
      title: 'Web3 Innovate Jam',
      description: 'The Web3 Innovate Jam is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask Card, LI.FI, and USDC. This event aims to bridge the gap between traditional finance and decentralised ecosystems, promoting solutions that enhance user experiences, financial accessibility, and on-chain utility.',
      status: 'Voting',
      image: imgRectangle10,
      votingClose: 'Voting 8 days left',
      techStack: 'All tech stack',
      level: 'All levels accepted',
      totalPrize: '40,000.00 USD',
      isOnline: true,
      participants: '405',
      isJudgesOnly: true,
    },
    {
      id: '2',
      title: 'Coindora Hackfest',
      description: 'Coindora Hackfest is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask Card, LI.FI, and USDC. This event aims to bridge the gap between traditional finance and decentralised ecosystems, promoting solutions that enhance user experiences, financial accessibility, and on-chain utility.',
      status: 'Voting',
      image: imgRectangle11,
      votingClose: 'Voting 7 days left',
      techStack: 'All tech stack',
      level: 'All levels accepted',
      totalPrize: '1,000.00 USD',
      isOnline: true,
      participants: '405',
      isJudgesOnly: true,
    },
    {
      id: '3',
      title: 'Moca Network Identity',
      description: 'The MetaMask Card Hackathon is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask Card, LI.FI, and USDC. This event aims to bridge the gap between traditional finance and decentralised ecosystems, promoting solutions that enhance user experiences, financial accessibility, and on-chain utility.',
      status: 'Live',
      image: imgRectangle12,
      votingClose: 'Voting 8 days left',
      techStack: 'All tech stack',
      level: 'All levels accepted',
      totalPrize: '40,000.00 USD',
      isOnline: true,
      participants: '405',
      isJudgesOnly: true,
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
          <div className="w-full max-w-[1100px] 2xl:max-w-[1300px] px-4 md:px-8 lg:px-12 xl:px-16 py-6 md:py-8 lg:py-10">
            {/* Active Projects Section */}
            <section className="mb-12 md:mb-16 lg:mb-20">
              <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6 md:mb-8">
                Active Projects
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {/* Create New Project Card */}
                <Link href="/dashboard/projects/create" className="border border-primary border-dashed rounded-2xl p-6 flex flex-col items-center justify-center min-h-[303px] hover:border-primary/80 transition-colors cursor-pointer">
                  <div className="w-32 h-28 relative mb-4">
                    <img alt="create project" className="block w-full h-full" src={imgVector2} />
                  </div>
                  <p className="text-primary text-base font-semibold">Create New Project</p>
                </Link>

                {/* Active Project Cards */}
                {activeProjects.map((project) => (
                  <div key={project.id} className="border border-border-darker rounded-2xl p-4 md:p-6 hover:border-primary/30 transition-colors">
                    {/* Project Image */}
                    <div className="w-full h-[94px] rounded-lg overflow-hidden mb-4">
                      <img
                        alt={project.title}
                        className="w-full h-full object-cover"
                        src={project.image}
                      />
                    </div>

                    {/* Project Title */}
                    <h3 className="text-white text-base md:text-lg font-bold mb-2">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-white text-sm opacity-60 mb-4 leading-5 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button className="border border-border-darker rounded-lg w-10 h-10 flex items-center justify-center hover:border-primary/30 transition-colors">
                        <div className="w-6 h-6 relative">
                          <img alt="edit" className="block w-full h-full" src={imgGroup2085663257} />
                        </div>
                      </button>
                      <button className="border border-border-darker rounded-lg w-10 h-10 flex items-center justify-center hover:border-primary/30 transition-colors">
                        <div className="w-6 h-6 relative">
                          <img alt="more" className="block w-full h-full" src={imgIcon2} />
                        </div>
                      </button>
                    </div>

                    {/* Last Edited */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border-darker">
                      <p className="opacity-60 text-white text-sm">Last edited</p>
                      <p className="text-white text-sm">{project.lastEdited}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Registered Hackathons Section */}
            <section className="mb-12 md:mb-16 lg:mb-20">
              <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6 md:mb-8">
                Registered Hackathons
              </h2>
              
              <div className="flex flex-col gap-4 md:gap-6">
                {registeredHackathons.map((hackathon) => (
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

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-bold text-sm md:text-base flex items-center gap-2 transition-colors">
                          <span>Submit Project</span>
                          <div className="w-3.5 h-3.5 relative">
                            <img alt="icon" className="block w-full h-full" src={imgIcon} />
                          </div>
                        </button>
                        <button className="border border-primary rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:border-primary/80 transition-colors">
                          <div className="w-6 h-6 relative">
                            <img alt="icon" className="block w-full h-full" src={imgIcon1} />
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="w-full lg:w-[362px] lg:shrink-0 rounded-lg overflow-hidden aspect-[362/228] relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#131a26] to-[#121925] rounded-lg"></div>
                      <img
                        alt={hackathon.title}
                        className="absolute inset-0 w-full h-full object-contain"
                        src={hackathon.image}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Open Voting Section */}
            <section>
              <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6 md:mb-8">
                Open Voting
              </h2>
              
              <div className="flex flex-col gap-4 md:gap-6">
                {openVotingHackathons.map((hackathon) => (
                  <div key={hackathon.id} className="border border-border-darker rounded-2xl p-4 md:p-6 flex flex-col lg:flex-row gap-6 hover:border-primary/30 transition-colors">
                    {/* Left Side - Content */}
                    <div className="flex-1 flex flex-col gap-6 md:gap-8">
                      {/* Title and Status */}
                      <div className="flex flex-wrap gap-2 items-center">
                        <h3 className="text-white text-base md:text-lg font-semibold">
                          {hackathon.title}
                        </h3>
                        <div className={`${hackathon.status === 'Live' ? 'bg-status-live' : 'bg-status-live'} rounded-full px-2.5 py-1 shrink-0`}>
                          <p className="font-semibold text-white text-xs md:text-sm">{hackathon.status === 'Live' ? 'Live' : 'Voting'}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="opacity-60 text-white text-sm md:text-base leading-relaxed line-clamp-2">
                        {hackathon.description}
                      </p>

                      {/* Hackathon Details */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        <div className="flex flex-col gap-1.5 text-white">
                          <p className="opacity-60 text-xs md:text-sm">Voting close</p>
                          <p className="text-sm md:text-base font-medium">{hackathon.votingClose}</p>
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

                      {/* Hackathon Meta */}
                      <div className="flex flex-wrap gap-2">
                        {hackathon.isOnline && (
                          <div className="bg-white/30 rounded-full px-2.5 py-1">
                            <p className="font-semibold text-white text-xs md:text-sm">Online</p>
                          </div>
                        )}
                        <div className="bg-white/30 rounded-full px-2.5 py-1">
                          <p className="font-semibold text-white text-xs md:text-sm">{hackathon.participants} Participants</p>
                        </div>
                        {hackathon.isJudgesOnly && (
                          <div className="bg-white/30 rounded-full px-2.5 py-1">
                            <p className="font-semibold text-white text-xs md:text-sm">Judges Only</p>
                          </div>
                        )}
                      </div>
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
                      ) : hackathon.id === '3' ? (
                        <img
                          alt={hackathon.title}
                          className="w-full h-full object-cover"
                          src={hackathon.image}
                        />
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
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

