'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

// Image URLs
const imgLine1 = "http://localhost:3845/assets/df1d21485e699bf1889d4c10443f439e65d15fe5.svg";
const imgLine9 = "http://localhost:3845/assets/94b6c6a7cf479f5407ae1b8b4ba055c7d02103f5.svg";
const imgX = "http://localhost:3845/assets/a195f9869ab9283244e1ef1fdbb2a593ce435376.svg";
const imgVector = "http://localhost:3845/assets/5ac551eb81fb00140535862cb29bd9c42f4942aa.svg";
const imgCheck = "http://localhost:3845/assets/c84a77e024e01cb29004e2cf9d76e026b9b9e202.svg";
const imgImage = "http://localhost:3845/assets/8fbf2f2b62f6a93ec35f628537aa3969e2f87ab5.svg";
const imgRectangle21 = "http://localhost:3845/assets/616f0ba0d3345595f43ae11fe78593a4fa20ca59.svg";
const imgLine34 = "http://localhost:3845/assets/0c1724c5b244beafdb699e4b6b0447799f607ac9.svg";

interface TimeSlot {
  id: string;
  dateRange?: string;
  date?: string;
  hackathonName: string;
  shortDescription: string;
  includeSpeaker: boolean;
  speakerPicture?: string;
  speakerXName: string;
  speakerXLink: string;
  speakerRealName: string;
  speakerWorkPlace: string;
}

export default function HostSchedulePage() {
  const line1Ref = useRef<HTMLDivElement>(null);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([
    {
      id: '1',
      dateRange: 'Jun 17, 2025 19:00 - Jul 19, 2025 19:00',
      hackathonName: '',
      shortDescription: '',
      includeSpeaker: false,
      speakerXName: '',
      speakerXLink: '',
      speakerRealName: '',
      speakerWorkPlace: '',
    },
    {
      id: '2',
      date: 'June 21, 2025 16:00',
      hackathonName: '',
      shortDescription: '',
      includeSpeaker: false,
      speakerXName: '',
      speakerXLink: '',
      speakerRealName: '',
      speakerWorkPlace: '',
    },
  ]);

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

  const handleTimeSlotChange = (id: string, field: string, value: string | boolean) => {
    setTimeSlots(prev => prev.map(slot => 
      slot.id === id ? { ...slot, [field]: value } : slot
    ));
  };

  const handleAddTimeSlot = () => {
    const newSlot: TimeSlot = {
      id: Date.now().toString(),
      date: '',
      hackathonName: '',
      shortDescription: '',
      includeSpeaker: false,
      speakerXName: '',
      speakerXLink: '',
      speakerRealName: '',
      speakerWorkPlace: '',
    };
    setTimeSlots([...timeSlots, newSlot]);
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
                <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-bold text-sm md:text-base transition-opacity">
                  Publish Hackathon
                </button>
              </div>
            </div>

            {/* Page Title */}
            <h1 className="text-white text-xl md:text-2xl font-bold mb-8 md:mb-10 text-center">
              Add hackathon info
            </h1>

            {/* Progress Bar */}
            <div className="w-full max-w-[1319px] h-1 mb-8 md:mb-10">
              <img alt="progress" className="block w-full h-full" src={imgRectangle21} />
            </div>

            {/* Time Slots */}
            <div className="flex flex-col gap-8 md:gap-12">
              {timeSlots.map((slot, index) => (
                <div key={slot.id} className="flex flex-col gap-6 md:gap-8">
                  {/* Date/Time Range */}
                  <div className="flex items-center gap-2">
                    {slot.dateRange ? (
                      <p className="text-white text-xl md:text-2xl font-medium">
                        {slot.dateRange}
                      </p>
                    ) : (
                      <>
                        <p className="text-white text-xl md:text-2xl font-medium">
                          {slot.date || 'Enter date'}
                        </p>
                        {index > 0 && (
                          <Link href="/host/schedule" className="text-primary text-base md:text-lg hover:text-primary/80 transition-colors flex items-center gap-1">
                            <span>details</span>
                            <div className="w-2.5 h-1.5 relative">
                              <img alt="arrow" className="block w-full h-full" src={imgVector} />
                            </div>
                          </Link>
                        )}
                      </>
                    )}
                  </div>

                  {/* Divider */}
                  {index < timeSlots.length - 1 && (
                    <div className="w-full h-px">
                      <img alt="divider" className="block w-full h-full" src={imgLine34} />
                    </div>
                  )}

                  {/* Hackathon Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-white text-base font-normal">Hackathon Name</label>
                    <input
                      type="text"
                      value={slot.hackathonName}
                      onChange={(e) => handleTimeSlotChange(slot.id, 'hackathonName', e.target.value)}
                      placeholder="Enter hackathon name"
                      className="bg-bg-darker border border-border-dark rounded-lg h-16 px-4 text-white text-lg outline-none focus:border-primary transition-colors placeholder:opacity-40 placeholder:text-white"
                    />
                  </div>

                  {/* Short Description */}
                  <div className="flex flex-col gap-2">
                    <label className="text-white text-base font-normal">Short Description</label>
                    <textarea
                      value={slot.shortDescription}
                      onChange={(e) => handleTimeSlotChange(slot.id, 'shortDescription', e.target.value)}
                      placeholder="Short description that goes under key visual"
                      className="bg-bg-darker border border-border-dark rounded-lg h-[330px] px-4 py-3 text-white text-base outline-none focus:border-primary transition-colors placeholder:opacity-40 placeholder:text-white resize-none"
                    />
                  </div>

                  {/* Include Speaker Checkbox */}
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={slot.includeSpeaker}
                      onChange={(e) => handleTimeSlotChange(slot.id, 'includeSpeaker', e.target.checked)}
                      className="w-4 h-4 bg-primary border-primary rounded focus:ring-primary focus:ring-2"
                    />
                    <label className="text-white text-base font-normal">Include Speaker</label>
                  </div>

                  {/* Speaker Fields (only shown if Include Speaker is checked) */}
                  {slot.includeSpeaker && (
                    <div className="flex flex-col gap-6 md:gap-8">
                      {/* Speaker Picture */}
                      <div className="flex flex-col gap-2">
                        <label className="text-white text-base font-normal">Speaker Picture</label>
                        <div className="relative w-40 h-40 bg-bg-darker border border-border-dark rounded-lg flex items-center justify-center">
                          {slot.speakerPicture ? (
                            <img
                              alt="speaker"
                              className="block w-full h-full object-cover rounded-lg"
                              src={slot.speakerPicture}
                            />
                          ) : (
                            <div className="flex flex-col items-center justify-center text-center">
                              <div className="w-6 h-6 relative mb-2">
                                <img alt="image upload" className="block w-full h-full" src={imgImage} />
                              </div>
                              <p className="text-[#738b9f] text-xs leading-tight mb-1">
                                Drag&apos;n&apos;drop project
                              </p>
                              <p className="text-[#738b9f] text-xs leading-tight mb-1">
                                logo here or:
                              </p>
                              <button className="text-primary text-sm font-semibold hover:text-primary/80 transition-colors">
                                Click to browse
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Speaker x.com name and link */}
                      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                        <div className="flex flex-col gap-2 flex-1 md:max-w-[314px]">
                          <label className="text-white text-base font-normal">Speaker x.com name</label>
                          <input
                            type="text"
                            value={slot.speakerXName}
                            onChange={(e) => handleTimeSlotChange(slot.id, 'speakerXName', e.target.value)}
                            placeholder="Enter speaker x.com name"
                            className="bg-bg-darker border border-border-dark rounded-lg h-14 px-4 text-white text-base outline-none focus:border-primary transition-colors placeholder:opacity-40 placeholder:text-white"
                          />
                        </div>
                        <div className="flex flex-col gap-2 flex-1 md:max-w-[314px]">
                          <label className="text-white text-base font-normal">Speaker x.com link</label>
                          <input
                            type="text"
                            value={slot.speakerXLink}
                            onChange={(e) => handleTimeSlotChange(slot.id, 'speakerXLink', e.target.value)}
                            placeholder="Enter speaker x.com link"
                            className="bg-bg-darker border border-border-dark rounded-lg h-14 px-4 text-white text-base outline-none focus:border-primary transition-colors placeholder:opacity-40 placeholder:text-white"
                          />
                        </div>
                      </div>

                      {/* Speaker real name and work place */}
                      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                        <div className="flex flex-col gap-2 flex-1 md:max-w-[314px]">
                          <label className="text-white text-base font-normal">Speaker real name</label>
                          <input
                            type="text"
                            value={slot.speakerRealName}
                            onChange={(e) => handleTimeSlotChange(slot.id, 'speakerRealName', e.target.value)}
                            placeholder="Enter speaker real name"
                            className="bg-bg-darker border border-border-dark rounded-lg h-14 px-4 text-white text-base outline-none focus:border-primary transition-colors placeholder:opacity-40 placeholder:text-white"
                          />
                        </div>
                        <div className="flex flex-col gap-2 flex-1 md:max-w-[314px]">
                          <label className="text-white text-base font-normal">Speaker work place & position</label>
                          <input
                            type="text"
                            value={slot.speakerWorkPlace}
                            onChange={(e) => handleTimeSlotChange(slot.id, 'speakerWorkPlace', e.target.value)}
                            placeholder="Enter speaker details"
                            className="bg-bg-darker border border-border-dark rounded-lg h-14 px-4 text-white text-base outline-none focus:border-primary transition-colors placeholder:opacity-40 placeholder:text-white"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Divider after last slot */}
                  {index === timeSlots.length - 1 && (
                    <div className="w-full h-px mt-4">
                      <img alt="divider" className="block w-full h-full" src={imgLine34} />
                    </div>
                  )}
                </div>
              ))}

              {/* Add another time slot button */}
              <button
                onClick={handleAddTimeSlot}
                className="text-primary text-base hover:text-primary/80 transition-colors self-start"
              >
                + add another time slot
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

