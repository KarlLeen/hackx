'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

// Image URLs - using local SVG files from public directory
const imgArrowLeft = "/arrow-left.svg";
const imgShare2 = "/share-2.svg";
const imgHackathonImage = "/figma-exported/Hackathon Image1.png";
const imgLine1 = "/Vector.svg";
const imgLine9 = "/Vector.svg";
const imgLine12 = "/Vector.svg";
const imgLine10 = "/Vector.svg";
const imgLine11 = "/Vector.svg";
const imgEllipse6 = "/Ellipse%206.svg";
const imgCheck = "/check.svg";
const imgEllipse7 = "/Ellipse%206-1.svg";
const imgXLogoSvg = "/x_logo.svg.svg";
const imgArtboard = "/Symbol.svg.svg";
const imgIcon = "/Icon.svg";

interface HackathonDetailPageProps {
  params: {
    id: string;
  };
}

export default function HackathonDetailPage({ params }: HackathonDetailPageProps) {
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

  // Mock data - later this can be fetched based on params.id
  const hackathonData = {
    title: "ChainSpark Hackathon",
    subtitle: "Calling All Builders, Dreamers, and Rule-Breakers!",
    description: "The crypto world is a wild ride—full of chaos, opportunity, and endless what-ifs. But one thing's for sure: innovation thrives where builders and storytellers collide. That's why FAIR3 and CARV are teaming up to launch the Tech Fairness Hackathon, a high-octane sprint to redefine the future of AI, Data, and Web3.",
    description2: "This isn't just another hackathon. It's a battlefield for fairness, a playground for disruptors, and a launchpad for the next wave of decentralized innovation. Whether you're an AI wizard",
    whyTitle: "Why ChainSpark Hackathon?",
    whySubtitle: "Saluting the Early Rebels—Redefining Data & Collaboration",
    whyDescription: "ChainSpark Hackathon was born from a simple but radical belief: true innovation shouldn't be strangled by black-box algorithms or centralized gatekeepers. In an era of platform monopolies and diluted creator value, Chainspark is rallying builders to forge a transparent, platform-agnostic, and verifiable future for data governance and the creator economy.",
    status: "Live" as const,
    registrationClose: "12 days left",
    techStack: "All tech stack",
    level: "All levels",
    totalPrize: "50,000.00 USD",
    location: "Online",
    imageUrl: imgHackathonImage,
    countdown: {
      days: 12,
      hours: 1,
      minutes: 42,
      seconds: 31,
    },
    prizes: [
      { amount: "18,000 USD", description: "Tech Fairness Exploration Awards (9 winners)" },
      { amount: "6,000 USD", description: "FAIR3 Public Infrastructure Awards (3 winners)" },
      { amount: "4,000 USD", description: "BNBChain Integration Awards (2 winners)" },
      { amount: "2,000 USD", description: "UnicornX Special Award (1 winners)" },
      { amount: "4,000 USD", description: "AI Agent Infrastructure on SVM Chain (2 winners)" },
      { amount: "4,000 USD", description: "Decentralized Data Orchestration with D.A.T.A. Framework (2 winners)" },
      { amount: "4,000 USD", description: "Modular Identity & Reputation with CARV ID (ERC-7231) (2 winners)" },
      { amount: "8,000 USD", description: "Open Innovation: AI × Web3 for Real World Use Cases (3 winners)" },
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

        {/* Content Container */}
        <div className="flex-1 w-full flex justify-center">
          <div className="w-full max-w-[1100px] 2xl:max-w-[1300px] px-4 md:px-8 lg:px-12 xl:px-16 py-6 md:py-8 lg:py-10">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* Main Content */}
              <div className="flex-1">
                {/* Back Button and Share Link */}
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <Link href="/" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                    <div className="w-4 h-4 md:w-5 md:h-5 relative">
                      <img alt="back" className="block w-full h-full" src={imgArrowLeft} />
                    </div>
                    <span className="text-sm md:text-base">Back to Hackathons</span>
                  </Link>
                  
                  <button className="flex items-center gap-2 border border-border-darker rounded-lg px-3 py-2 hover:border-primary/30 transition-colors">
                    <div className="w-4 h-4 relative">
                      <img alt="share" className="block w-full h-full" src={imgShare2} />
                    </div>
                    <span className="text-white text-sm md:text-base">Share Link</span>
                  </button>
                </div>

                {/* Horizontal divider */}
                <div className="w-full h-px mb-6">
                  <img alt="divider" className="block w-full h-full" src={imgLine9} />
                </div>

                {/* Hackathon Title */}
                <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 md:mb-8">
                  {hackathonData.title}
                </h1>

                {/* Navigation Tabs */}
                <div className="relative mb-8 md:mb-10">
                  <div className="bg-white/10 rounded-lg h-12 md:h-14 px-4 flex items-center gap-12 md:gap-16 lg:gap-20 overflow-x-auto">
                    <Link href={`/hackathon/${params.id}`} className="relative bg-primary px-4 md:px-6 py-2 rounded-lg text-white text-sm md:text-base font-medium whitespace-nowrap">
                      Overview
                    </Link>
                    <Link href={`/hackathon/${params.id}/prize-judge`} className="text-white text-sm md:text-base hover:text-primary transition-colors whitespace-nowrap">
                      Prize & Judge
                    </Link>
                    <Link href={`/hackathon/${params.id}/schedule`} className="text-white text-sm md:text-base hover:text-primary transition-colors whitespace-nowrap">
                      Schedule
                    </Link>
                    <Link href={`/hackathon/${params.id}/submitted-projects`} className="text-white text-sm md:text-base hover:text-primary transition-colors whitespace-nowrap">
                      Submitted Projects
                    </Link>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="relative w-full rounded-lg overflow-hidden aspect-video md:aspect-[1276/476] mb-6 md:mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#131a26] to-[#121925] rounded-lg"></div>
                  <img 
                    alt={hackathonData.title} 
                    className="absolute inset-0 w-full h-full object-contain rounded-lg"
                    src={hackathonData.imageUrl} 
                  />
                </div>

                {/* Description */}
                <div className="text-white mb-8 md:mb-12">
                  <h2 className="font-semibold text-lg md:text-xl mb-2">{hackathonData.title}</h2>
                  <p className="mb-4"></p>
                  <h2 className="font-semibold text-lg md:text-xl mb-2">{hackathonData.subtitle}</h2>
                  <p className="mb-4"></p>
                  <p className="opacity-80 text-base md:text-lg leading-relaxed mb-4">{hackathonData.description}</p>
                  <p className="opacity-80 text-base md:text-lg leading-relaxed">{hackathonData.description2}</p>
                </div>

                {/* Why Section - repeated 3 times with dividers */}
                {[1, 2, 3].map((index) => (
                  <div key={index} className="mb-10 md:mb-12">
                    <div className="mb-6 md:mb-10">
                      <h3 className="font-semibold text-lg md:text-xl text-white mb-2">
                        Why {hackathonData.title}?
                      </h3>
                      <p className="mb-2"></p>
                      <h4 className="font-semibold text-lg md:text-xl text-white mb-2">
                        {hackathonData.whySubtitle}
                      </h4>
                      <p className="mb-2"></p>
                      <p className="text-base md:text-lg text-white leading-relaxed">
                        <span className="font-semibold">{hackathonData.title}</span>{' '}
                        {hackathonData.whyDescription}
                      </p>
                    </div>
                    {index < 3 && (
                      <div className="w-full h-px my-6 md:my-10">
                        <img alt="divider" className="block w-full h-full" src={imgLine12} />
                      </div>
                    )}
                  </div>
                ))}

                {/* Prize Breakdown Section */}
                <div className="border border-border-darker rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 mb-8 md:mb-12">
                  {/* Left Side - Total Prize */}
                  <div className="md:w-[195px] flex-shrink-0">
                    <div className="flex flex-col items-center md:items-start">
                      <p className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {hackathonData.totalPrize.replace('.00', '')}
                      </p>
                      <p className="opacity-60 text-white text-sm md:text-base mb-6">
                        Available in Prizes
                      </p>
                      <button className="bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-lg font-bold text-sm md:text-base w-full md:w-auto flex items-center justify-center gap-2">
                        <span>Detail Breakdown</span>
                        <div className="w-3.5 h-3.5 relative">
                          <img alt="icon" className="block w-full h-full" src={imgIcon} />
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Right Side - Prize List */}
                  <div className="flex-1 border-l border-border-darker pl-6 md:pl-8">
                    <div className="flex flex-col gap-3">
                      {hackathonData.prizes.map((prize, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <p className="opacity-60 text-white text-xs md:text-sm flex-1">
                            {prize.description}
                          </p>
                          <p className="font-bold text-white text-sm md:text-base ml-4">
                            {prize.amount}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="lg:w-[358px] flex-shrink-0 flex flex-col gap-6">
                {/* Registration Card */}
                <div className="border border-border-darker rounded-lg p-4 md:p-6">
                  <p className="text-white text-base md:text-lg font-medium mb-4">
                    Left to register
                  </p>
                  
                  {/* Countdown */}
                  <div className="flex gap-1 mb-6">
                    <div className="bg-primary/10 rounded flex-1 flex flex-col items-center justify-center py-3">
                      <p className="text-2xl md:text-3xl font-bold text-white">12</p>
                      <p className="opacity-60 text-white text-xs">D</p>
                    </div>
                    <div className="bg-primary/10 rounded flex-1 flex flex-col items-center justify-center py-3">
                      <p className="text-2xl md:text-3xl font-bold text-white">01</p>
                      <p className="opacity-60 text-white text-xs">H</p>
                    </div>
                    <div className="bg-primary/10 rounded flex-1 flex flex-col items-center justify-center py-3">
                      <p className="text-2xl md:text-3xl font-bold text-white">42</p>
                      <p className="opacity-60 text-white text-xs">M</p>
                    </div>
                    <div className="bg-primary/10 rounded flex-1 flex flex-col items-center justify-center py-3">
                      <p className="text-2xl md:text-3xl font-bold text-white">31</p>
                      <p className="opacity-60 text-white text-xs">S</p>
                    </div>
                  </div>

                         {/* Register Button */}
                         <Link href={`/hackathon/${params.id}/register`} className="w-full bg-primary hover:bg-primary/90 text-white px-4 py-4 md:py-5 rounded-lg font-medium text-base md:text-xl flex items-center justify-center transition-colors">
                           Register to Hackathon
                         </Link>
                </div>

                {/* Info Card */}
                <div className="border border-border-darker rounded-lg p-4 md:p-6">
                  <div className="flex flex-col gap-4 mb-6">
                    <div className="flex items-center justify-between">
                      <p className="opacity-60 text-white text-sm">Registration</p>
                      <p className="text-white text-sm">{hackathonData.registrationClose}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="opacity-60 text-white text-sm">Tech stack</p>
                      <p className="text-white text-sm">{hackathonData.techStack}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="opacity-60 text-white text-sm">Level</p>
                      <p className="text-white text-sm">{hackathonData.level}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="opacity-60 text-white text-sm">Total Prize</p>
                      <p className="text-white text-sm">{hackathonData.totalPrize}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="opacity-60 text-white text-sm">Location</p>
                      <p className="text-white text-sm">{hackathonData.location}</p>
                    </div>
                  </div>

                  <div className="h-px w-full mb-4">
                    <img alt="divider" className="block w-full h-full" src={imgLine11} />
                  </div>

                  <p className="opacity-60 text-white text-sm mb-4">Links</p>
                  <div className="flex gap-2">
                    <div className="border border-border-darker rounded w-10 h-10 flex items-center justify-center">
                      <div className="w-4 h-4 relative opacity-60">
                        <img alt="x" className="block w-full h-full" src={imgXLogoSvg} />
                      </div>
                    </div>
                    <div className="border border-border-darker rounded w-10 h-10 flex items-center justify-center">
                      <div className="w-4.5 h-4.5 relative opacity-60">
                        <img alt="discord" className="block w-full h-full" src={imgArtboard} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Quests Card */}
                <div className="border border-border-darker rounded-lg p-4 md:p-6">
                  <p className="text-white text-base md:text-lg font-medium mb-4">
                    Project Quests
                  </p>

                  <div className="h-px w-full mb-4">
                    <img alt="divider" className="block w-full h-full" src={imgLine10} />
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-4.5 h-4.5 relative">
                          <img alt="check" className="block w-full h-full" src={imgEllipse6} />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-3 h-3 relative">
                            <img alt="check" className="block w-full h-full" src={imgCheck} />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-base font-medium">Join Telegram Group</p>
                        <p className="opacity-40 text-primary text-sm">Join Community</p>
                      </div>
                    </div>

                    <div className="h-px w-full">
                      <img alt="divider" className="block w-full h-full" src={imgLine10} />
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-4.5 h-4.5 relative">
                        <img alt="x" className="block w-full h-full" src={imgEllipse7} />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-3 h-3 relative">
                            <img alt="x logo" className="block w-full h-full" src={imgXLogoSvg} />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-base font-medium">
                          Follow Tech Fairness Hackathon
                        </p>
                        <p className="text-white text-base font-medium">on X</p>
                      </div>
                    </div>

                    <div className="h-px w-full">
                      <img alt="divider" className="block w-full h-full" src={imgLine10} />
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-4.5 h-4.5 relative">
                        <img alt="discord" className="block w-full h-full" src={imgEllipse7} />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-3 h-3 relative">
                            <img alt="discord logo" className="block w-full h-full" src={imgArtboard} />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-base font-medium">
                          Join Tech Fairness Hackathon
                        </p>
                        <p className="text-white text-base font-medium">on Discord</p>
                      </div>
                    </div>
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
