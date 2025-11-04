'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

// Image URLs - using local files from public directory
const imgLine1 = "/Vector.svg";
const imgLine9 = "/Vector.svg";
const imgLine11 = "/Vector.svg";
const imgLine12 = "/Vector.svg";
const imgLine55 = "/Vector.svg";
const imgArrowLeft = "/arrow-left.svg";
const imgShare2 = "/share-2.svg";
const imgXLogoSvg = "/x_logo.svg.svg";
const imgArtboard = "/Symbol.svg.svg";
const imgVector2 = "/Vector.svg";
const imgVector4 = "/Vector.svg";
// Camp images - using images from figma-exported
const imgCamp1 = "/figma-exported/HackQuest Africa- Co-Learning Camp .png";
const imgCamp2 = "/figma-exported/HackQuest Africa- Co-Learning Camp.png";

interface CampDetailPageProps {
  params: {
    id: string;
  };
}

export default function CampDetailPage({ params }: CampDetailPageProps) {
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

  // Mock camp data - in real app, fetch based on params.id
  const campData = {
    id: params.id,
    title: 'HackQuest Africa: Co-Learning Camp #4',
    description: `🚀 AthenaX Africa: Co-Learning Camp 4 – Zero Gravity Edition
Get ready to blast off into the fundamentals of Layer 1 development with HackQuest's OG Developer Track. Whether you're just starting out or want to sharpen your blockchain foundations, this 2-week camp is your launchpad into the world of L1 chains, protocols, and smart contract development.

Special thanks to our community partners HustlerDiaries & TokenED for supporting us in making this co-learning camp possible.`,
    keyDates: `📅 Key Dates
🗓️ Last Date to Register: 21st August 2025
🚀 Camp Starts: 22nd August 2025
🎓 Camp Ends: 6th September 2025`,
    limitedSpots: `🌀 Limited spots available! Don't miss your chance to learn Solidity, build on OG, and grow alongside a global developer community.
👉 Register now before 21st August 2025 and secure your seat!`,
    registration: {
      label: 'Registration',
      value: '12 days left',
    },
    campStart: {
      label: 'Camp Start',
      value: '11 August 2025',
    },
    campEnd: {
      label: 'Camp End',
      value: '19 August 2025',
    },
    location: {
      label: 'Location',
      value: 'Online',
    },
    timeline: [
      {
        date: 'Aug 22',
        title: 'Townhall 1',
        time: '8:00 AM — 10:00 PM',
      },
      {
        date: 'Aug 27',
        title: 'Townhall 2',
        time: '8:00 PM — 10:00 PM',
      },
      {
        date: 'Sep 02',
        title: 'Townhall 2',
        time: '8:00 PM — 10:00 PM',
      },
      {
        date: 'Sep 06',
        title: 'Townhall 3',
        time: '8:00 PM — 10:00 PM',
      },
    ],
    faq: [
      {
        question: 'Who can join the co-learning camp?',
        answer: '',
      },
      {
        question: 'What tracks are covered in the co-learning camp?',
        answer: 'Courses on 15+ popular blockchains, covering basics like syntax, advanced projects, and tools like smart contract frameworks and SDKs.',
      },
      {
        question: 'Who can join the co-learning camp?',
        answer: '',
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
        <div className="flex-1 w-full flex justify-center">
          <div className="w-full max-w-[1100px] 2xl:max-w-[1300px] px-4 md:px-8 lg:px-12 xl:px-16 py-6 md:py-8 lg:py-10">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* Main Content */}
              <div className="flex-1">
                {/* Back Button and Share Link */}
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <Link href="/learning-camps" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                    <div className="w-4 h-4 md:w-5 md:h-5 relative">
                      <img alt="back" className="block w-full h-full" src={imgArrowLeft} />
                    </div>
                    <span className="text-sm md:text-base">Back to Learning Camps</span>
                  </Link>
                  
                  <button className="flex items-center gap-2 border border-border-darker rounded-lg px-3 py-2 hover:border-primary/30 transition-colors">
                    <div className="w-4 h-4 relative">
                      <img alt="share" className="block w-full h-full" src={imgShare2} />
                    </div>
                    <span className="text-white text-sm md:text-base">Share Link</span>
                  </button>
                </div>

                {/* Camp Title */}
                <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 md:mb-8">
                  {campData.title}
                </h1>

                {/* Description */}
                <div className="text-white text-base md:text-lg leading-relaxed mb-6 whitespace-pre-line">
                  {campData.description}
                </div>

                {/* Horizontal divider */}
                <div className="w-full h-px mb-6">
                  <img alt="divider" className="block w-full h-full" src={imgLine12} />
                </div>

                {/* Key Dates */}
                <div className="text-white text-base md:text-lg leading-relaxed mb-6 whitespace-pre-line">
                  {campData.keyDates}
                </div>

                {/* Horizontal divider */}
                <div className="w-full h-px mb-6">
                  <img alt="divider" className="block w-full h-full" src={imgLine12} />
                </div>

                {/* Limited Spots */}
                <div className="text-white text-base md:text-lg leading-relaxed mb-8 md:mb-10 whitespace-pre-line">
                  {campData.limitedSpots}
                </div>

                {/* Timeline Section */}
                <div className="mb-8 md:mb-10">
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <h2 className="text-white text-lg md:text-xl font-semibold">Timeline</h2>
                    <button className="bg-bg-darker border border-border-darker rounded-lg px-4 py-2.5 hover:border-primary/30 transition-colors">
                      <span className="text-white text-sm md:text-base">Add to Calendar</span>
                    </button>
                  </div>

                  {/* Timeline Items */}
                  <div className="flex flex-col gap-6 md:gap-8">
                    {campData.timeline.map((item, index) => (
                      <div key={index} className="flex gap-6">
                        {/* Date */}
                        <div className="w-16 md:w-20 flex-shrink-0">
                          <p className="text-white text-sm opacity-60">{item.date}</p>
                        </div>

                        {/* Vertical line */}
                        <div className="w-px bg-border-darker relative flex-shrink-0">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full"></div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 pb-6 md:pb-8">
                          <h3 className="text-white text-sm md:text-base font-bold mb-1">{item.title}</h3>
                          <p className="text-white text-sm opacity-60">{item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Horizontal divider */}
                <div className="w-full h-px mb-6 md:mb-8">
                  <img alt="divider" className="block w-full h-full" src={imgLine12} />
                </div>

                {/* FAQ Section */}
                <div className="mb-8 md:mb-10">
                  <h2 className="text-white text-lg md:text-xl font-semibold mb-6 md:mb-8">Frequently Asked Questions</h2>
                  
                  <div className="flex flex-col gap-6 md:gap-8">
                    {campData.faq.map((item, index) => (
                      <div key={index}>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-white text-base font-semibold">{item.question}</h3>
                          <div className="w-2 h-2 relative">
                            <img alt="" className="block w-full h-full" src={imgVector4} />
                          </div>
                        </div>
                        {item.answer && (
                          <p className="text-white text-sm md:text-base leading-relaxed opacity-80">{item.answer}</p>
                        )}
                        {index < campData.faq.length - 1 && (
                          <div className="w-full h-px mt-4">
                            <img alt="divider" className="block w-full h-full" src={imgLine12} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="w-full lg:w-[358px] flex-shrink-0">
                <div className="border border-border-darker rounded-lg p-6">
                  {/* Registration Info */}
                  <div className="flex flex-col gap-4 mb-6">
                    <div className="flex items-center justify-between">
                      <p className="text-white text-sm opacity-60">{campData.registration.label}</p>
                      <p className="text-white text-sm text-right">{campData.registration.value}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-white text-sm opacity-60">{campData.campStart.label}</p>
                      <p className="text-white text-sm text-right">{campData.campStart.value}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-white text-sm opacity-60">{campData.campEnd.label}</p>
                      <p className="text-white text-sm text-right">{campData.campEnd.value}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-white text-sm opacity-60">{campData.location.label}</p>
                      <p className="text-white text-sm text-right">{campData.location.value}</p>
                    </div>
                  </div>

                  {/* Horizontal divider */}
                  <div className="w-full h-px mb-6">
                    <img alt="divider" className="block w-full h-full" src={imgLine11} />
                  </div>

                  {/* Links */}
                  <div className="mb-6">
                    <p className="text-white text-sm opacity-60 mb-4">Links</p>
                    <div className="flex gap-2">
                      <button className="border border-border-darker rounded-md w-10 h-10 flex items-center justify-center hover:border-primary/30 transition-colors">
                        <div className="w-4 h-4 opacity-60">
                          <img alt="x logo" className="block w-full h-full" src={imgXLogoSvg} />
                        </div>
                      </button>
                      <button className="border border-border-darker rounded-md w-10 h-10 flex items-center justify-center hover:border-primary/30 transition-colors">
                        <div className="w-4 h-4 opacity-60">
                          <img alt="symbol" className="block w-full h-full" src={imgArtboard} />
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Horizontal divider */}
                  <div className="w-full h-px mb-6">
                    <img alt="divider" className="block w-full h-full" src={imgLine11} />
                  </div>

                  {/* Register Button */}
                  <button className="w-full bg-primary hover:bg-primary/90 text-white px-4 py-5 rounded-lg font-medium text-lg md:text-xl transition-colors">
                    Register to Learning Camp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

