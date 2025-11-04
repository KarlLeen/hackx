'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

// Image URLs - using local SVG files from public directory
const imgArrowLeft = "/arrow-left.svg";
const imgShare2 = "/share-2.svg";
const imgLine1 = "/Vector.svg";
const imgLine9 = "/Vector.svg";
const imgLine10 = "/Vector.svg";
const imgLine11 = "/Vector.svg";
const imgLine20 = "/Vector.svg";
const imgLine21 = "/Vector.svg";
const imgLine26 = "/Vector.svg";
const imgEllipse6 = "/Ellipse%206.svg";
const imgCheck = "/check.svg";
const imgEllipse7 = "/Ellipse%206-1.svg";
const imgEllipse8 = "/Ellipse%208.svg";
const imgXLogoSvg = "/x_logo.svg.svg";
const imgArtboard = "/Symbol.svg.svg";
const imgClock = "/Frame-2.svg"; // Using Frame-2 for clock icon
const imgFrame2 = "/Frame-2.svg";
const imgRectangle16 = "/Vector.svg";

interface SchedulePageProps {
  params: {
    id: string;
  };
}

export default function SchedulePage({ params }: SchedulePageProps) {
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

  // Mock schedule data - matching Figma design
  const scheduleData = {
    title: "ChainSpark Hackathon",
    status: "Live" as const,
    registrationClose: "12 days left",
    techStack: "All tech stack",
    level: "All levels",
    totalPrize: "50,000.00 USD",
    location: "Online",
    countdown: {
      days: 12,
      hours: 1,
      minutes: 42,
      seconds: 31,
    },
    events: [
      {
        dateRange: "Jun 17, 2025 19:00 - Jul 19, 2025 19:00",
        title: "Online Course 1: How to Build a Web3 Project from 0 to 1",
        description: "Learn how to plan, design, and launch your own Web3 project from scratch, covering everything from smart contracts and tokenomics to community building and go-to-market strategy.",
        speaker: {
          name: "Wizzy",
          username: "@WizzyOnChain",
          avatar: imgEllipse8,
          fullName: "Tom White Adressen",
          position: "Founder & CEO at A16Z",
        },
        dateTime: "Jun 26, 2025 20:00 (EST)",
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

        {/* Content Container */}
        <div className="flex-1 w-full flex justify-center">
          <div className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8 xl:px-12 py-6 md:py-8 lg:py-10">
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
                  {scheduleData.title}
                </h1>

                {/* Navigation Tabs */}
                <div className="relative mb-8 md:mb-10">
                  <div className="bg-white/10 rounded-lg h-12 md:h-14 px-4 flex items-center gap-12 md:gap-16 lg:gap-20 overflow-x-auto">
                    <Link href={`/hackathon/${params.id}`} className="text-white text-sm md:text-base hover:text-primary transition-colors whitespace-nowrap">
                      Overview
                    </Link>
                    <Link href={`/hackathon/${params.id}/prize-judge`} className="text-white text-sm md:text-base hover:text-primary transition-colors whitespace-nowrap">
                      Prize & Judge
                    </Link>
                    <Link href={`/hackathon/${params.id}/schedule`} className="relative bg-primary px-4 md:px-6 py-2 rounded-lg text-white text-sm md:text-base font-medium whitespace-nowrap">
                      Schedule
                    </Link>
                    <Link href={`/hackathon/${params.id}/submitted-projects`} className="text-white text-sm md:text-base hover:text-primary transition-colors whitespace-nowrap">
                      Submitted Projects
                    </Link>
                  </div>
                </div>

                {/* Schedule Table */}
                <div className="border border-border-darker rounded-lg overflow-hidden relative">
                  {/* Schedule Rows */}
                  <div className="relative">
                    {/* Vertical divider - main timeline at 227px */}
                    <div className="absolute left-[227px] top-0 bottom-0 w-px hidden lg:block">
                      <div className="h-full w-px relative">
                        <img alt="divider" className="block h-full w-full object-cover" src={imgLine20} />
                      </div>
                    </div>

                    {scheduleData.events.map((event, index) => {
                      const rowHeight = index === 0 ? 240 : 80; // First event is taller (240px), others are 80px
                      const topOffset = index === 0 ? 0 : index === 1 ? 80 : 80 * index;
                      
                      return (
                        <div 
                          key={index} 
                          className="relative border-b border-border-darker last:border-b-0"
                          style={{ minHeight: `${rowHeight}px` }}
                        >
                          {/* Timeline background image for second event (index 1) */}
                          {index === 1 && (
                            <div className="absolute left-0 top-0 w-[228px] h-[80px] hidden lg:block">
                              <img alt="timeline" className="block w-full h-full object-contain" src={imgRectangle16} />
                            </div>
                          )}

                          {/* Horizontal divider lines for left column */}
                          {index > 0 && (
                            <div className="absolute left-0 w-[227px] h-px hidden lg:block" style={{ top: '0' }}>
                              <div className="h-px w-full relative">
                                <img alt="divider" className="block w-full h-full" src={imgLine21} />
                              </div>
                            </div>
                          )}

                          <div className="flex flex-col lg:flex-row">
                            {/* Left Side - Date/Time */}
                            <div className="lg:w-[227px] flex-shrink-0 p-6 flex items-center relative">
                              {/* Blue highlight bar - all events */}
                              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
                              <div className="text-center lg:text-left relative z-10 pl-4">
                                {event.dateRange ? (
                                  <div className="flex flex-col leading-8">
                                    <p className="text-white text-base">{event.dateRange.split(' - ')[0]}</p>
                                    <p className="text-white text-base">{event.dateRange.split(' - ')[1]}</p>
                                  </div>
                                ) : (
                                  <p className="text-white text-base leading-8">{(event as any).date || ''}</p>
                                )}
                              </div>
                            </div>

                            {/* Right Side - Event Details */}
                            <div className="flex-1 p-6 relative">
                              {index === 0 && event.speaker ? (
                                <div className="relative">
                                  <h2 className="text-white text-xl md:text-2xl font-semibold mb-3">
                                    {event.title}
                                  </h2>
                                  <p className="text-white text-base md:text-lg opacity-80 mb-8 leading-relaxed">
                                    {event.description}
                                  </p>

                                  {/* Speaker Section */}
                                  <div className="mb-6">
                                    <div className="flex items-center gap-3 mb-4">
                                      <div className="w-5 h-5 relative">
                                        <img alt="speaker" className="block w-full h-full" src={imgFrame2} />
                                      </div>
                                      <p className="opacity-60 text-white text-base">Speaker</p>
                                    </div>

                                    <div className="flex items-start gap-3 mb-4">
                                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                        <img alt={event.speaker.name} className="block w-full h-full object-cover" src={event.speaker.avatar} />
                                      </div>
                                      <div>
                                        <p className="text-white text-base font-semibold">{event.speaker.name}</p>
                                        <p className="opacity-60 text-white text-sm">{event.speaker.username}</p>
                                      </div>
                                    </div>

                                    <div className="ml-14 space-y-2">
                                      <div className="flex items-start gap-2">
                                        <p className="opacity-60 text-white text-sm w-16">Name:</p>
                                        <p className="text-white text-sm">{event.speaker.fullName}</p>
                                      </div>
                                      <div className="flex items-start gap-2">
                                        <p className="opacity-60 text-white text-sm w-16">Position:</p>
                                        <p className="text-white text-sm">{event.speaker.position}</p>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Date & Time for first event */}
                                  <div className="flex items-center gap-3 mb-2">
                                    <div className="w-5 h-5 relative">
                                      <img alt="clock" className="block w-full h-full" src={imgClock} />
                                    </div>
                                    <p className="opacity-60 text-white text-base">Date & Time</p>
                                  </div>
                                  <p className="text-white text-base ml-8">{event.dateTime}</p>

                                  {/* Horizontal divider after first event details */}
                                  <div className="absolute left-0 right-0 bottom-0 h-px hidden lg:block">
                                    <img alt="divider" className="block w-full h-full" src={imgLine26} />
                                  </div>
                                </div>
                              ) : (
                                <>
                                  <h2 className="text-white text-lg md:text-xl font-semibold mb-2">
                                    {event.title || `Event ${index + 1}`}
                                  </h2>
                                  {event.description && (
                                    <p className="text-white text-base md:text-lg opacity-80 leading-relaxed">
                                      {event.description}
                                    </p>
                                  )}
                                </>
                              )}

                              {/* Horizontal divider between rows in right column */}
                              {index < scheduleData.events.length - 1 && (
                                <div className="absolute left-0 right-0 bottom-0 h-px hidden lg:block">
                                  <div className="h-px w-full relative">
                                    <img alt="divider" className="block w-full h-full" src={imgLine26} />
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
                      <p className="text-white text-sm">{scheduleData.registrationClose}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="opacity-60 text-white text-sm">Tech stack</p>
                      <p className="text-white text-sm">{scheduleData.techStack}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="opacity-60 text-white text-sm">Level</p>
                      <p className="text-white text-sm">{scheduleData.level}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="opacity-60 text-white text-sm">Total Prize</p>
                      <p className="text-white text-sm">{scheduleData.totalPrize}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="opacity-60 text-white text-sm">Location</p>
                      <p className="text-white text-sm">{scheduleData.location}</p>
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
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-white text-base md:text-lg font-medium">
                      Project Quests
                    </p>
                    <Link href={`/hackathon/${params.id}`} className="text-primary text-sm hover:text-primary/80">
                      See All
                    </Link>
                  </div>

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

