'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

// Image URLs
const imgLine1 = "/Vector.svg";
const imgLine9 = "/Vector.svg";
const imgX = "/Vector.svg";
const imgCalendar = "/Vector.svg";
const imgVector = "/Vector.svg";
const imgLine28 = "/Vector.svg";
const imgLine30 = "/Vector.svg";
const imgImage = "/Vector.svg";
const imgRectangle21 = "/Vector.svg";
const imgFrame = "/Vector.svg";
const imgFrame1 = "/Vector.svg";

export default function HostPage() {
  const line1Ref = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    hackathonName: '',
    shortDescription: '',
    registrationDuration: '',
    votingDuration: '',
    hackathonDuration: '',
    techStack: '',
    experienceLevel: '',
    location: '',
    xLink: '',
    description: '',
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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
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
              <Link href="/" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                <div className="w-5 h-5 relative">
                  <img alt="x" className="block w-full h-full" src={imgX} />
                </div>
                <span className="text-sm md:text-base">Save hackathon draft & quit</span>
              </Link>

              <div className="flex items-center gap-4">
                <button className="text-primary text-sm md:text-base font-bold hover:text-primary/80 transition-colors flex items-center justify-center">
                  Preview publication
                </button>
                <button className="bg-primary opacity-40 hover:opacity-60 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-bold text-sm md:text-base transition-opacity flex items-center justify-center">
                  Publish Hackathon
                </button>
              </div>
            </div>

            {/* Page Title */}
            <h1 className="text-white text-xl md:text-2xl font-bold mb-8 md:mb-10 text-center">
              Add hackathon info
            </h1>

            {/* Progress Bar */}
            <div className="w-full max-w-[119px] h-1 mb-8 md:mb-10">
              <img alt="progress" className="block w-full h-full" src={imgRectangle21} />
            </div>

            {/* Form */}
            <div className="flex flex-col gap-6 md:gap-8">
              {/* Hackathon Name */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-normal">Hackathon Name</label>
                <input
                  type="text"
                  value={formData.hackathonName}
                  onChange={(e) => handleInputChange('hackathonName', e.target.value)}
                  placeholder="Enter hackathon name"
                  className="bg-bg-darker border border-border-dark rounded-lg h-16 px-4 text-white text-lg outline-none focus:border-primary transition-colors placeholder:opacity-40 placeholder:text-white"
                />
              </div>

              {/* Hackathon Visual */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-normal">Hackathon visual</label>
                <div className="bg-bg-darker border border-border-dark rounded-lg h-[302px] w-full md:w-[535px] relative flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-6 h-6 mx-auto mb-2">
                      <img alt="image" className="block w-full h-full" src={imgImage} />
                    </div>
                    <p className="text-text-secondary text-xs mb-1">
                      Drag&apos;n&apos;drop a hackathon
                      <br />
                      visual here or:
                    </p>
                    <button className="text-primary text-sm font-semibold hover:text-primary/80 transition-colors flex items-center justify-center">
                      Click to browse
                    </button>
                  </div>
                </div>
              </div>

              {/* Short Description */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-normal">Short Description</label>
                <textarea
                  value={formData.shortDescription}
                  onChange={(e) => handleInputChange('shortDescription', e.target.value)}
                  placeholder="Short description that goes under key visual"
                  className="bg-bg-darker border border-border-dark rounded-lg h-[330px] px-4 py-3 text-white text-base outline-none focus:border-primary transition-colors placeholder:opacity-40 placeholder:text-white resize-none"
                />
              </div>

              {/* Registration Duration */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-normal">Registration duration</label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.registrationDuration}
                    onChange={(e) => handleInputChange('registrationDuration', e.target.value)}
                    placeholder="From — to dates"
                    className="bg-bg-darker border border-border-dark rounded-lg h-14 px-4 pr-12 text-white text-base outline-none focus:border-primary transition-colors placeholder:opacity-40 placeholder:text-white w-full md:w-[314px]"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6">
                    <img alt="calendar" className="block w-full h-full" src={imgCalendar} />
                  </div>
                </div>
              </div>

              {/* Voting Duration */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-normal">Voting duration</label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.votingDuration}
                    onChange={(e) => handleInputChange('votingDuration', e.target.value)}
                    placeholder="From — to dates"
                    className="bg-bg-darker border border-border-dark rounded-lg h-14 px-4 pr-12 text-white text-base outline-none focus:border-primary transition-colors placeholder:opacity-40 placeholder:text-white w-full md:w-[314px]"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6">
                    <img alt="calendar" className="block w-full h-full" src={imgCalendar} />
                  </div>
                </div>
              </div>

              {/* Hackathon Duration */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-normal">Hackathon duration</label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.hackathonDuration}
                    onChange={(e) => handleInputChange('hackathonDuration', e.target.value)}
                    placeholder="From — to dates"
                    className="bg-bg-darker border border-border-dark rounded-lg h-14 px-4 pr-12 text-white text-base outline-none focus:border-primary transition-colors placeholder:opacity-40 placeholder:text-white w-full md:w-[314px]"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6">
                    <img alt="calendar" className="block w-full h-full" src={imgCalendar} />
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-normal">Tech stack</label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.techStack}
                    onChange={(e) => handleInputChange('techStack', e.target.value)}
                    placeholder="Select tech stack"
                    className="bg-bg-darker border border-border-dark rounded-lg h-14 px-4 pr-12 text-white text-base outline-none focus:border-primary transition-colors placeholder:opacity-40 placeholder:text-white w-full md:w-[684px]"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-3.5 h-2">
                    <img alt="dropdown" className="block w-full h-full" src={imgVector} />
                  </div>
                </div>
              </div>

              {/* Experience Level */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-normal">Experience Level</label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.experienceLevel}
                    onChange={(e) => handleInputChange('experienceLevel', e.target.value)}
                    placeholder="Select experience level"
                    className="bg-bg-darker border border-border-dark rounded-lg h-14 px-4 pr-12 text-white text-base outline-none focus:border-primary transition-colors placeholder:opacity-40 placeholder:text-white w-full md:w-[684px]"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-3.5 h-2">
                    <img alt="dropdown" className="block w-full h-full" src={imgVector} />
                  </div>
                </div>
              </div>

              {/* Hackathon Location */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-normal">Hackathon location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="Enter hackathon location"
                  className="bg-bg-darker border border-border-dark rounded-lg h-14 px-4 text-white text-base outline-none focus:border-primary transition-colors placeholder:opacity-40 placeholder:text-white w-full md:w-[314px]"
                />
              </div>

              {/* Social Links */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-normal">Social links</label>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1 md:max-w-[184px]">
                    <input
                      type="text"
                      defaultValue="x.com"
                      readOnly
                      className="bg-bg-darker border border-border-dark rounded-lg h-14 px-4 pr-12 text-white text-base outline-none w-full"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-3.5 h-2">
                      <img alt="dropdown" className="block w-full h-full" src={imgVector} />
                    </div>
                  </div>
                  <div className="relative flex-1 md:max-w-[314px]">
                    <input
                      type="text"
                      value={formData.xLink}
                      onChange={(e) => handleInputChange('xLink', e.target.value)}
                      placeholder="Enter link to x.com"
                      className="bg-bg-darker border border-border-dark rounded-lg h-14 px-4 text-white text-base outline-none focus:border-primary transition-colors placeholder:opacity-40 placeholder:text-white w-full"
                    />
                  </div>
                </div>
                <button className="text-primary text-lg font-normal hover:text-primary/80 transition-colors flex items-center justify-center self-start">
                  + add another link
                </button>
              </div>

              {/* Full Description */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-normal">Full Description</label>
                <div className="bg-bg-darker border border-border-dark rounded-lg p-4 md:p-6 min-h-[550px]">
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Enter full description..."
                    className="w-full h-full bg-transparent text-white text-base outline-none resize-none placeholder:opacity-40 placeholder:text-white min-h-[500px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

