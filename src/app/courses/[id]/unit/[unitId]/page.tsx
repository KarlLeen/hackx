'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

// Image URLs - using local files from public directory
const imgLine1 = "/Vector.svg";
const imgLine9 = "/Vector.svg";
const imgArrowLeft = "/arrow-left.svg";
const imgX = "/x.svg";
const imgHelpCircle = "/help-circle.svg";

interface UnitDetailPageProps {
  params: {
    id: string;
    unitId: string;
  };
}

export default function UnitDetailPage({ params }: UnitDetailPageProps) {
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

  // Mock unit data - in real app, fetch based on params.id and params.unitId
  const unitData = {
    id: params.unitId,
    courseId: params.id,
    title: '1.1 Introduction',
    content: `Ethereum has become the backbone of the Web3 ecosystem, powering smart contracts and a broad range of decentralized applications (DApps) and DeFi projects. However, as blockchain adoption grows, Ethereum's scalability challenges—high gas fees, network congestion, and limited throughput—have become major roadblocks.

Monad emerges as a next-generation Layer 1 blockchain that is fully EVM-compatible, delivering exceptional throughput and low latency without compromising decentralization.

In this module, we'll explore the core concepts and technical innovations behind Monad. Let's begin~ 🚀`,
    progress: [
      { id: 1, completed: true },
      { id: 2, completed: false },
      { id: 3, completed: false },
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
        <div className="flex-1 w-full flex justify-center relative pb-24 md:pb-28">
          <div className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8 xl:px-12 py-6 md:py-8 lg:py-10">
            {/* Top Bar - Title, Logo, Help, Close */}
            <div className="flex items-center justify-between mb-8 md:mb-12 relative">
              {/* Logo Container - Left */}
              <div className="absolute left-0 top-0 h-8 w-[26px] shrink-0">
                <img
                  alt="HackX Logo"
                  className="block w-full h-full object-contain"
                  src="/Logo Container.svg"
                />
              </div>

              {/* Title - Center */}
              <div className="flex-1 flex justify-center">
                <h1 className="text-white text-sm md:text-base font-bold text-center">
                  {unitData.title}
                </h1>
              </div>

              {/* Right Side - Help and Close */}
              <div className="absolute right-0 top-0 flex items-center gap-4">
                <button className="w-5 h-5 relative hover:opacity-80 transition-opacity">
                  <img alt="help" className="block w-full h-full" src={imgHelpCircle} />
                </button>
                <Link
                  href={`/courses/${params.id}`}
                  className="w-5 h-5 relative hover:opacity-80 transition-opacity"
                >
                  <img alt="close" className="block w-full h-full" src={imgX} />
                </Link>
              </div>
            </div>

            {/* Main Content */}
            <div className="max-w-[800px] mx-auto">
              <div className="text-white text-base md:text-lg leading-relaxed whitespace-pre-line">
                {unitData.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 last:mb-0">
                    {paragraph || '\u00A0'}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Back and Continue */}
        <div className="fixed bottom-0 left-0 right-0 border-t border-border-dark bg-bg-dark z-40 md:pl-sidebar-sm lg:pl-sidebar">
          <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 xl:px-12 py-4 md:py-6">
            <div className="flex items-center justify-between">
              {/* Back Button - Left */}
              <Link
                href={`/courses/${params.id}`}
                className="flex items-center gap-2 text-white hover:text-primary transition-colors"
              >
                <div className="w-4.5 h-4.5 relative">
                  <img alt="back" className="block w-full h-full" src={imgArrowLeft} />
                </div>
                <span className="text-sm md:text-base">Back</span>
              </Link>

              {/* Progress Indicators - Center */}
              <div className="flex items-center gap-3">
                {unitData.progress.map((step) => (
                  <div
                    key={step.id}
                    className={`h-1 rounded-full w-[87px] ${
                      step.completed ? 'bg-[#14b92d]' : 'bg-[#2b3740]'
                    }`}
                  />
                ))}
              </div>

              {/* Continue Button - Right */}
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2.5 rounded-md text-sm md:text-base font-medium transition-colors">
                Continue
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

