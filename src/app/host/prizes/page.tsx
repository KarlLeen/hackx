'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

// Image URLs
const imgLine1 = "/Vector.svg";
const imgLine9 = "/Vector.svg";
const imgX = "/Vector.svg";
const imgVector = "/Vector.svg";
const imgVector1 = "/Vector.svg";
const imgGroup1171277299 = "/Vector.svg";
const imgLine33 = "/Vector.svg";
const imgLine34 = "/Vector.svg";
const imgLine35 = "/Vector.svg";
const imgRectangle21 = "/Vector.svg";

export default function HostPrizesPage() {
  const line1Ref = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    prizeCohortName: '',
    numberOfWinners: 1,
    prizeAmount: '',
    prizeCohortDescription: '',
    evaluationCriteriaName: '',
    numberOfPoints: '',
    evaluationCriteriaDescription: '',
    judgingMode: 'Judges Only',
    votingMode: 'Project Scoring',
    maxVotePerJudge: '',
  });

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

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNumberChange = (field: string, delta: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: Math.max(1, (prev[field as keyof typeof prev] as number) + delta),
    }));
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
            {/* Horizontal divider */}
            <div className="w-full h-px mb-6">
              <img alt="divider" className="block w-full h-full" src={imgLine9} />
            </div>

            {/* Top Actions */}
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <Link href="/host" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                <div className="w-5 h-5 relative">
                  <img alt="x" className="block w-full h-full" src={imgX} />
                </div>
                <span className="text-sm md:text-base">Save hackathon draft & quit</span>
              </Link>

              <div className="flex items-center gap-4">
                <button className="text-primary text-sm md:text-base font-bold hover:text-primary/80 transition-colors">
                  Preview publication
                </button>
                <button className="bg-primary opacity-40 hover:opacity-60 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-bold text-sm md:text-base transition-opacity">
                  Publish Hackathon
                </button>
              </div>
            </div>

            {/* Page Title */}
            <h1 className="text-white text-xl md:text-2xl font-bold mb-8 md:mb-10 text-center">
              Add hackathon info
            </h1>

            {/* Progress Bar */}
            <div className="w-full max-w-[410px] h-1 mb-8 md:mb-10">
              <img alt="progress" className="block w-full h-full" src={imgRectangle21} />
            </div>

            {/* Prize Cohort Name Section */}
            <div className="flex items-center gap-2 mb-6 md:mb-8">
              <p className="text-white text-lg md:text-xl font-medium opacity-40">
                Enter Prize Cohort Name
              </p>
              <div className="w-[30px] h-px rotate-90">
                <img alt="divider" className="block w-full h-full" src={imgLine35} />
              </div>
              <Link href="/host/prizes" className="text-primary text-base hover:text-primary/80 transition-colors flex items-center gap-1">
                <span>details</span>
                <div className="w-2.5 h-1.5 relative">
                  <img alt="arrow" className="block w-full h-full" src={imgVector1} />
                </div>
              </Link>
            </div>

            {/* Form */}
            <div className="flex flex-col gap-6 md:gap-8">
              {/* Number of winners and Prize amount */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Number of winners */}
                <div className="flex flex-col gap-2 flex-1 md:max-w-[314px]">
                  <label className="text-white text-base font-normal">Number of winners</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={formData.numberOfWinners}
                      onChange={(e) => handleInputChange('numberOfWinners', parseInt(e.target.value) || 1)}
                      className="bg-bg-darker border border-border-dark rounded-lg h-14 px-4 pr-12 text-white text-base outline-none focus:border-primary transition-colors w-full"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-0.5">
                      <button
                        type="button"
                        onClick={() => handleNumberChange('numberOfWinners', 1)}
                        className="w-4 h-2 flex items-center justify-center"
                      >
                        <div className="w-4 h-2 relative">
                          <img alt="increase" className="block w-full h-full" src={imgGroup1171277299} />
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleNumberChange('numberOfWinners', -1)}
                        className="w-4 h-2 flex items-center justify-center transform rotate-180"
                      >
                        <div className="w-4 h-2 relative">
                          <img alt="decrease" className="block w-full h-full" src={imgGroup1171277299} />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Prize amount for each winner */}
                <div className="flex flex-col gap-2 flex-1 md:max-w-[314px]">
                  <label className="text-white text-base font-normal">Prize amount for each winner</label>
                  <input
                    type="text"
                    value={formData.prizeAmount}
                    onChange={(e) => handleInputChange('prizeAmount', e.target.value)}
                    placeholder="USD/tokens per winner"
                    className="bg-bg-darker border border-border-dark rounded-lg h-14 px-4 text-white text-base outline-none focus:border-primary transition-colors placeholder:opacity-40 placeholder:text-white w-full"
                  />
                </div>
              </div>

              {/* Prize cohort description */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-normal">Prize cohort description</label>
                <textarea
                  value={formData.prizeCohortDescription}
                  onChange={(e) => handleInputChange('prizeCohortDescription', e.target.value)}
                  placeholder="Prize cohort description"
                  className="bg-bg-darker border border-border-dark rounded-lg h-[330px] px-4 py-3 text-white text-base outline-none focus:border-primary transition-colors placeholder:opacity-40 placeholder:text-white resize-none"
                />
              </div>

              {/* Divider */}
              <div className="w-full h-px">
                <img alt="divider" className="block w-full h-full" src={imgLine33} />
              </div>

              {/* Evaluation Criteria Section */}
              <div className="flex flex-col gap-6 md:gap-8">
                {/* Evaluation criteria name and Number of points */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  {/* Evaluation criteria name */}
                  <div className="flex flex-col gap-2 flex-1 md:max-w-[314px]">
                    <label className="text-white text-base font-normal">Evaluation criteria name</label>
                    <input
                      type="text"
                      value={formData.evaluationCriteriaName}
                      onChange={(e) => handleInputChange('evaluationCriteriaName', e.target.value)}
                      placeholder="Enter evaluation criteria name"
                      className="bg-bg-darker border border-border-dark rounded-lg h-14 px-4 text-white text-base outline-none focus:border-primary transition-colors placeholder:opacity-40 placeholder:text-white w-full"
                    />
                  </div>

                  {/* Number of points */}
                  <div className="flex flex-col gap-2 flex-1 md:max-w-[314px]">
                    <label className="text-white text-base font-normal">Number of points</label>
                    <input
                      type="text"
                      value={formData.numberOfPoints}
                      onChange={(e) => handleInputChange('numberOfPoints', e.target.value)}
                      placeholder="Enter evaluation criteria name"
                      className="bg-bg-darker border border-border-dark rounded-lg h-14 px-4 text-white text-base outline-none focus:border-primary transition-colors placeholder:opacity-40 placeholder:text-white w-full"
                    />
                  </div>
                </div>

                {/* Evaluation criteria description */}
                <div className="flex flex-col gap-2">
                  <label className="text-white text-base font-normal">Evaluation criteria description</label>
                  <textarea
                    value={formData.evaluationCriteriaDescription}
                    onChange={(e) => handleInputChange('evaluationCriteriaDescription', e.target.value)}
                    placeholder="Enter evaluation criteria description"
                    className="bg-bg-darker border border-border-dark rounded-lg h-[122px] px-4 py-3 text-white text-base outline-none focus:border-primary transition-colors placeholder:opacity-40 placeholder:text-white resize-none"
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px">
                <img alt="divider" className="block w-full h-full" src={imgLine34} />
              </div>

              {/* Judging mode and Voting Mode */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Judging mode */}
                <div className="flex flex-col gap-2 flex-1 md:max-w-[314px]">
                  <label className="text-white text-base font-normal">Judging mode</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.judgingMode}
                      onChange={(e) => handleInputChange('judgingMode', e.target.value)}
                      className="bg-bg-darker border border-border-dark rounded-lg h-14 px-4 pr-12 text-white text-base outline-none focus:border-primary transition-colors w-full"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-3.5 h-2">
                      <img alt="dropdown" className="block w-full h-full" src={imgVector} />
                    </div>
                  </div>
                </div>

                {/* Voting Mode */}
                <div className="flex flex-col gap-2 flex-1 md:max-w-[314px]">
                  <label className="text-white text-base font-normal">Voting Mode</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.votingMode}
                      onChange={(e) => handleInputChange('votingMode', e.target.value)}
                      className="bg-bg-darker border border-border-dark rounded-lg h-14 px-4 pr-12 text-white text-base outline-none focus:border-primary transition-colors w-full"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-3.5 h-2">
                      <img alt="dropdown" className="block w-full h-full" src={imgVector} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Max vote per judge */}
              <div className="flex flex-col gap-2 md:max-w-[314px]">
                <label className="text-white text-base font-normal">Max vote per judge</label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.maxVotePerJudge}
                    onChange={(e) => handleInputChange('maxVotePerJudge', e.target.value)}
                    placeholder="Enter points"
                    className="bg-bg-darker border border-border-dark rounded-lg h-14 px-4 pr-12 text-white text-base outline-none focus:border-primary transition-colors placeholder:opacity-40 placeholder:text-white w-full"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-3.5 h-2">
                    <img alt="dropdown" className="block w-full h-full" src={imgVector} />
                  </div>
                </div>
              </div>

              {/* Add buttons */}
              <div className="flex flex-col gap-4">
                <button className="text-primary text-base hover:text-primary/80 transition-colors self-start">
                  + add evaluation criteria
                </button>
                <button className="text-primary text-base hover:text-primary/80 transition-colors self-start">
                  + add another prize cohort
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

