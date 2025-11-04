'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

// Image URLs - using local files from public directory where possible
const imgLine1 = "http://localhost:3845/assets/f91a75f3c3dadd030001e9216dd5e9d26c83e74f.svg";
const imgLine9 = "http://localhost:3845/assets/c2166d7a118fbe0524d2f04202cebe7d7d794022.svg";
const imgThumbsUp = "http://localhost:3845/assets/f093f0302a7365ff5030dba8702c653fc3f0a0fd.svg";
const imgArrowLeft = "/arrow-left.svg";
const imgArrowDown = "http://localhost:3845/assets/64b4344fe62ca5b09336d9929991f4443b145281.svg";
const imgFrame5 = "http://localhost:3845/assets/9cb41045f47c6331e54ed99e33d160e3bac34411.svg";
const imgGroup20856632871 = "/Group 2085663287 1.png";
const imgGroup2085663288 = "http://localhost:3845/assets/ac8e48745a979696cc1158f737557f88f13b9ce2.svg";
const imgGroup2085663289 = "http://localhost:3845/assets/27a4615b9caf78e2caec54ce140f3e80e39ee363.svg";
const imgGroup2085663290 = "http://localhost:3845/assets/3331af9f89a61fcb83f9d159517d97e37becbd5b.svg";
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

interface CourseDetailPageProps {
  params: {
    id: string;
  };
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
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

  // Mock course data - in real app, fetch based on params.id
  const courseData = {
    id: params.id,
    title: 'Monad Ecosystem',
    description: 'Monad is a high-performance, Ethereum-compatible Layer 1 blockchain designed to maximize throughput and minimize transaction costs. With innovations in MonadBFT consensus, Parallel Execution, and MonadDB, Monad achieves 10,000 TPS while maintaining full compatibility with the EVM and Ethereum ecosystem. Developers can seamlessly build dApps using Solidity, Foundry, Hardhat, and other familiar tools. If you\'re looking to explore Monad and master its core technology, this course will take you from the basics to hands-on development—getting you up and running in no time!',
    logo: courseLogos[params.id] || courseLogos['9'],
    logoBg: 'bg-[#200053]',
    certification: {
      by: 'Monad',
      type: 'certified' as const,
    },
    units: [
      { id: 1, title: 'Unit 1 — Monad Overview', progress: 100 },
      { id: 2, title: 'Unit 2 — Overview of Monad\'s Technical Architecture', progress: 0 },
      { id: 3, title: 'Unit 3 — Introduction to Monad Common Tools', progress: 0 },
    ],
    phases: [
      { id: 1, phase: 'PHASE 1', title: 'Monad Ecosystem — Overview', isExpanded: true },
      { id: 2, phase: 'PHASE 2', title: 'Build with Guided Projects', isExpanded: false },
      { id: 3, phase: 'PHASE 3', title: 'Explore More Resources on Monad', isExpanded: false },
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
          <div className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8 xl:px-12 py-6 md:py-8 lg:py-10">
            {/* Back Button */}
            <Link href="/courses" className="flex items-center gap-2 text-white hover:text-primary transition-colors mb-4 md:mb-6">
              <div className="w-4.5 h-4.5 relative">
                <img alt="back" className="block w-full h-full" src={imgArrowLeft} />
              </div>
              <span className="text-sm md:text-base">Back to Courses</span>
            </Link>

            {/* Course Header */}
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mb-8 md:mb-10">
              {/* Left Side - Title and Description */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <h1 className="text-white text-2xl md:text-3xl font-semibold">
                    {courseData.title}
                  </h1>
                  {courseData.certification && (
                    <div className="bg-primary rounded-full px-2.5 py-1 flex items-center gap-1 shrink-0">
                      <div className="w-2.5 h-2.5 relative">
                        <img alt="certified" className="block w-full h-full" src={imgThumbsUp} />
                      </div>
                      <p className="text-white text-xs font-medium">
                        Certified by {courseData.certification.by}
                      </p>
                    </div>
                  )}
                </div>
                <p className="text-white text-sm md:text-base opacity-80 leading-relaxed max-w-2xl">
                  {courseData.description}
                </p>
              </div>

              {/* Right Side - Logo */}
              <div className={`${courseData.logoBg} rounded-2xl p-[18px] w-[193px] h-[193px] flex items-center justify-center shrink-0`}>
                <img 
                  alt={courseData.title} 
                  className="w-full h-full object-contain max-w-[131px] max-h-[131px]" 
                  src={courseData.logo} 
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
                    {courseData.units.map((unit) => (
                      <Link
                        key={unit.id}
                        href={`/courses/${params.id}/unit/${unit.id}`}
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
                      <img alt="quiz" className="block w-full h-full object-cover" src={courseData.quiz.image} />
                    </div>
                    <p className="text-white text-sm md:text-base font-medium text-center">
                      {courseData.quiz.title}
                    </p>
                    <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2.5 rounded-md text-sm md:text-base font-medium transition-colors">
                      {courseData.quiz.buttonText}
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
                    {courseData.resources.map((resource) => (
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
                  {courseData.phases.slice(1).map((phase) => (
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
                    Upon completing the Monad Developer Quest you'll earn a certification from Monad.
                  </p>
                  <div className="w-full h-[217px] relative">
                    <img alt="certificate" className="block w-full h-full object-cover" src={imgGroup20856632871} />
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

