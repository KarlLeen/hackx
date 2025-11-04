'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

// Image URLs - using local files from public directory where possible
const imgLine1 = "/Vector.svg";
const imgLine9 = "/Vector.svg";
const imgThumbsUp = "/Vector.svg";
const imgArrowDown = "/Vector.svg";
const imgFrame5 = "/Vector.svg";
const imgGroup20856632871 = "/Group 2085663287 1.png";
const imgGroup2085663288 = "/Vector.svg";
const imgGroup2085663289 = "/Vector.svg";
const imgGroup2085663290 = "/Vector.svg";
const imgRectangle = "/Rectangle.png";
const imgRectangle1 = "/Rectangle-1.png";

// Course logos mapping
const courseLogos: { [key: string]: string } = {
  '1': '/solana_symbol.png.png',
  '2': '/solana_symbol.png-1.png',
  '3': '/solana_symbol.png-2.png',
  '4': '/solana_symbol.png-3.png',
  '5': '/solana_symbol.png-4.png',
  '6': '/solana_symbol.png-5.png',
  '7': '/solana_symbol.png-6.png',
  '8': '/solana_symbol.png-7.png',
  '9': '/solana_symbol.png-8.png',
};

export default function CertificationsPage() {
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

  // Mock certifications data - in real app, fetch from API
  const certifications = [
    {
      id: '9',
      title: 'Monad Ecosystem',
      logo: '/solana_symbol.png.png',
      logoBg: 'bg-[#200053]',
      certification: {
        by: 'Monad',
        type: 'certified' as const,
      },
      progress: 22,
      units: [
        { id: 1, title: 'Unit 1 — Monad Overview', progress: 100 },
        { id: 2, title: 'Unit 2 — Overview of Monad&apos;s Technical Architecture', progress: 0 },
        { id: 3, title: 'Unit 3 — Introduction to Monad Common Tools', progress: 0 },
      ],
      quiz: {
        title: 'Ace the quick quiz to snag an extra reward',
        image: imgRectangle,
        buttonText: 'Take a Quiz',
      },
      resources: [
        { id: 1, title: 'Monad Madness', description: 'A Million Dollar Pitch Competition', image: imgRectangle1 },
        { id: 2, title: 'Explorer', description: 'Monad blockchain explorer', image: imgRectangle1 },
        { id: 3, title: 'Faucet', description: 'Monad official faucet', image: imgRectangle1 },
      ],
      phases: [
        { id: 1, phase: 'PHASE 1', title: 'Monad Ecosystem — Overview', isExpanded: true },
        { id: 2, phase: 'PHASE 2', title: 'Build with Guided Projects', isExpanded: false },
        { id: 3, phase: 'PHASE 3', title: 'Explore More Resources on Monad', isExpanded: false },
      ],
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
            {/* Page Title */}
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 md:mb-10">
              My Certifications
            </h1>

            {/* Certifications List */}
            <div className="flex flex-col gap-8 md:gap-10">
              {certifications.map((cert) => (
                <div key={cert.id} className="border border-border-darker rounded-lg p-6 md:p-8">
                  {/* Course Header */}
                  <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mb-8 md:mb-10">
                    {/* Left Side - Title and Description */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-4">
                        <h2 className="text-white text-xl md:text-2xl font-semibold">
                          {cert.title}
                        </h2>
                        {cert.certification && (
                          <div className="bg-primary rounded-full px-2.5 py-1 flex items-center gap-1 shrink-0">
                            <div className="w-2.5 h-2.5 relative">
                              <img alt="certified" className="block w-full h-full" src={imgThumbsUp} />
                            </div>
                            <p className="text-white text-xs font-medium">
                              Certified by {cert.certification.by}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right Side - Logo */}
                    <div className={`${cert.logoBg} rounded-2xl p-[18px] w-[193px] h-[193px] flex items-center justify-center shrink-0`}>
                      <img
                        alt={cert.title}
                        className="w-full h-full object-contain max-w-[131px] max-h-[131px]"
                        src={cert.logo}
                      />
                    </div>
                  </div>

                  {/* Main Content Grid */}
                  <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                    {/* Left Side - Main Content */}
                    <div className="flex-1">
                      {/* Phase 1 - SYNTAX */}
                      <div className="mb-6 md:mb-8">
                        <div className="border border-border-darker rounded-lg p-4 mb-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-white text-[10px] opacity-40 mb-2">PHASE 1</p>
                              <p className="text-white text-base md:text-lg font-semibold">
                                Monad Ecosystem — Overview
                              </p>
                            </div>
                            <div className="w-6 h-6 relative rotate-180">
                              <img alt="arrow" className="block w-full h-full" src={imgArrowDown} />
                            </div>
                          </div>
                        </div>

                        {/* SYNTAX Section */}
                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 relative">
                              <img alt="syntax" className="block w-full h-full" src={imgGroup2085663288} />
                            </div>
                            <div>
                              <p className="text-white text-[10px] opacity-40">SYNTAX</p>
                              <p className="text-white text-xs font-semibold">Monad Fundamental Concepts</p>
                            </div>
                          </div>
                        </div>

                        {/* Units in Phase 1 */}
                        <div className="flex flex-col gap-4 md:gap-5 mb-6">
                          {cert.units.map((unit) => (
                            <Link
                              key={unit.id}
                              href={`/courses/${cert.id}/unit/${unit.id}`}
                              className="border border-border-darker rounded-lg p-4 flex items-center justify-between hover:border-primary transition-colors cursor-pointer"
                            >
                              <p className="text-white text-sm md:text-base font-semibold flex-1">
                                {unit.title}
                              </p>
                              <div className="flex gap-2 items-center shrink-0 w-[121px]">
                                <div className={`h-1 rounded-full w-[87px] ${
                                  unit.progress === 100 ? 'bg-[#14b92d]' : 'bg-[#2b3740]'
                                }`} />
                                <p className="text-white text-[10px] opacity-40 whitespace-nowrap">
                                  {unit.progress}%
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* QUIZ Section */}
                      <div className="mb-6 md:mb-8">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 relative">
                            <img alt="quiz" className="block w-full h-full" src={imgGroup2085663289} />
                          </div>
                          <div>
                            <p className="text-white text-[10px] opacity-40">QUIZ</p>
                            <p className="text-white text-xs font-semibold">Quiz 1</p>
                          </div>
                        </div>

                        <div className="border border-border-darker rounded-lg p-8 flex flex-col items-center gap-3.5">
                          <div className="w-[72px] h-[72px] relative">
                            <img alt="quiz" className="block w-full h-full object-cover" src={cert.quiz.image} />
                          </div>
                          <p className="text-white text-sm md:text-base font-medium text-center">
                            {cert.quiz.title}
                          </p>
                          <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2.5 rounded-md text-sm md:text-base font-medium transition-colors">
                            {cert.quiz.buttonText}
                          </button>
                        </div>
                      </div>

                      {/* RESOURCES Section */}
                      <div className="mb-6 md:mb-8">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 relative">
                            <img alt="resources" className="block w-full h-full" src={imgGroup2085663290} />
                          </div>
                          <div>
                            <p className="text-white text-[10px] opacity-40">RESOURCES</p>
                            <p className="text-white text-xs font-semibold">More Resources</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {cert.resources.map((resource) => (
                            <div key={resource.id} className="border border-border-darker rounded-lg p-4 flex flex-col gap-3.5">
                              <div className="w-[72px] h-[72px] relative">
                                <img alt={resource.title} className="block w-full h-full object-cover rounded" src={resource.image} />
                              </div>
                              <div>
                                <p className="text-white text-sm md:text-base font-medium mb-1">
                                  {resource.title}
                                </p>
                                <p className="text-white text-sm opacity-80">
                                  {resource.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Phase 2 and 3 */}
                      <div className="flex flex-col gap-4">
                        {cert.phases.slice(1).map((phase) => (
                          <div key={phase.id} className="bg-bg-dark border border-border-darker rounded-lg p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-white text-[10px] opacity-40 mb-2">{phase.phase}</p>
                                <p className="text-white text-base md:text-lg font-semibold">
                                  {phase.title}
                                </p>
                              </div>
                              <div className="w-6 h-6 relative">
                                <img alt="arrow" className="block w-full h-full" src={imgArrowDown} />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:w-[358px] flex-shrink-0">
                      <div className="border border-border-darker rounded-lg p-4 md:p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h2 className="text-white text-base md:text-lg font-semibold">
                            Monad Developer Certificate
                          </h2>
                          <div className="w-6 h-6 relative">
                            <img alt="icon" className="block w-full h-full" src={imgFrame5} />
                          </div>
                        </div>
                        <p className="text-white text-sm opacity-80 leading-relaxed mb-6">
                          Upon completing the Monad Developer Quest you&apos;ll earn a certification from Monad.
                        </p>
                        {/* Progress Bar */}
                        <div className="w-full h-1 bg-[#2b3740] rounded-full mb-4">
                          <div className="h-full bg-[#14b92d] rounded-full" style={{ width: `${cert.progress}%` }} />
                        </div>
                        <p className="text-white text-[10px] opacity-40 mb-6">
                          {cert.progress}%
                        </p>
                        <div className="w-full h-[217px] relative">
                          <img alt="certificate" className="block w-full h-full object-cover" src={imgGroup20856632871} />
                        </div>
                      </div>
                    </div>
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

