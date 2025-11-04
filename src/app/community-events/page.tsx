'use client';

import React, { useEffect, useRef, useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

// Image URLs - using local files from public directory
const imgLine1 = "/Vector.svg";
const imgLine9 = "/Vector.svg";
const imgSearch = "/search.svg";
const imgVector2 = "/Vector.svg";
const imgClock = "/Frame-2.svg";
const imgUsers = "/Frame-2.svg";
const imgClock1 = "/Frame-2.svg";
// Event images - need to be imported from Figma
// TODO: Import Rectangle 30, 31, 32 from Figma to /public/figma-exported/
const imgRectangle30 = "/figma-exported/Rectangle 30.png";
const imgRectangle31 = "/figma-exported/Rectangle 31.png";
const imgRectangle32 = "/figma-exported/Rectangle 32.png";

// Event type definition
interface Event {
  id: number;
  title: string;
  image: string;
  dateTime: string;
  location: string;
  organizers: string;
  type: string;
  status: string;
}

// Mock events data
const events: Event[] = [
    {
      id: 1,
      title: 'HackQuest x Monad Blitz Hangzhou',
      image: imgRectangle30,
      dateTime: 'Aug. 2, 03:00PM — Aug. 3, 03:00PM',
      location: 'Hangzhou, China',
      organizers: 'Mantle, Monad',
      type: 'Meetup',
      status: 'Past',
    },
    {
      id: 2,
      title: 'Sonic Labs Developer Meetup Shanghai',
      image: imgRectangle31,
      dateTime: 'Aug. 2, 03:00PM — Aug. 3, 03:00PM',
      location: 'Shanghai, China',
      organizers: 'Sonic, HackQuest',
      type: 'Meetup',
      status: 'Past',
    },
    {
      id: 3,
      title: 'Sonic x HackQuest Shanghai Meetup',
      image: imgRectangle32,
      dateTime: 'Aug. 2, 03:00PM — Aug. 3, 03:00PM',
      location: 'Shanghai, China',
      organizers: 'Sonic, HackQuest',
      type: 'Meetup',
      status: 'Past',
    },
    {
      id: 4,
      title: 'HackQuest x Monad Blitz Hangzhou',
      image: imgRectangle30,
      dateTime: 'Aug. 2, 03:00PM — Aug. 3, 03:00PM',
      location: 'Hangzhou, China',
      organizers: 'Mantle, Monad',
      type: 'Meetup',
      status: 'Past',
    },
    {
      id: 5,
      title: 'Sonic Labs Developer Meetup Shanghai',
      image: imgRectangle31,
      dateTime: 'Aug. 2, 03:00PM — Aug. 3, 03:00PM',
      location: 'Shanghai, China',
      organizers: 'Sonic, HackQuest',
      type: 'Meetup',
      status: 'Past',
    },
    {
      id: 6,
      title: 'Sonic x HackQuest Shanghai Meetup',
      image: imgRectangle32,
      dateTime: 'Aug. 2, 03:00PM — Aug. 3, 03:00PM',
      location: 'Shanghai, China',
      organizers: 'Sonic, HackQuest',
      type: 'Meetup',
      status: 'Past',
    },
  ];

export default function CommunityEventsPage() {
  const line1Ref = useRef<HTMLDivElement>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    if (selectedEvent) {
      setIsClosing(false);
      // 使用 requestAnimationFrame 确保初始状态在右侧，然后滑入
      requestAnimationFrame(() => {
        setIsOpen(true);
      });
    } else {
      setIsOpen(false);
    }
  }, [selectedEvent]);

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
            {/* Page Header */}
            <div className="mb-6 md:mb-8">
              <h1 className="text-white text-2xl md:text-3xl font-semibold mb-2">
                Global Events
              </h1>
              <p className="text-white text-sm md:text-base opacity-80">
                Build the future of Web3 together with us!
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2 mb-6 md:mb-8">
              <div className="border border-border-darker rounded-lg px-3 py-2 flex items-center gap-2">
                <span className="text-text-secondary text-sm">Status</span>
                <div className="flex items-center gap-1">
                  <span className="text-white text-sm">All</span>
                  <div className="h-1 w-2 relative shrink-0">
                    <img alt="" className="block w-full h-full" src={imgVector2} />
                  </div>
                </div>
              </div>
              <div className="border border-border-darker rounded-lg px-3 py-2 flex items-center gap-2">
                <span className="text-text-secondary text-sm">Country</span>
                <div className="flex items-center gap-1">
                  <span className="text-white text-sm">All</span>
                  <div className="h-1 w-2 relative shrink-0">
                    <img alt="" className="block w-full h-full" src={imgVector2} />
                  </div>
                </div>
              </div>
              <div className="border border-border-darker rounded-lg px-3 py-2 flex items-center gap-2">
                <span className="text-text-secondary text-sm">Location</span>
                <div className="flex items-center gap-1">
                  <span className="text-white text-sm">All</span>
                  <div className="h-1 w-2 relative shrink-0">
                    <img alt="" className="block w-full h-full" src={imgVector2} />
                  </div>
                </div>
              </div>
              <div className="border border-border-darker rounded-lg px-3 py-2 flex items-center gap-2">
                <span className="text-text-secondary text-sm">Type</span>
                <div className="flex items-center gap-1">
                  <span className="text-white text-sm">All</span>
                  <div className="h-1 w-2 relative shrink-0">
                    <img alt="" className="block w-full h-full" src={imgVector2} />
                  </div>
                </div>
              </div>
              <div className="border border-border-darker rounded-lg px-3 py-2 flex items-center gap-2">
                <span className="text-text-secondary text-sm">Sort By</span>
                <div className="flex items-center gap-1">
                  <span className="text-white text-sm">All</span>
                  <div className="h-1 w-2 relative shrink-0">
                    <img alt="" className="block w-full h-full" src={imgVector2} />
                  </div>
                </div>
              </div>
            </div>

            {/* Section Title */}
            <h2 className="text-white text-base md:text-lg font-semibold mb-6 md:mb-8">
              All Events
            </h2>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {events.map((event) => (
                <div key={event.id} className="border border-border-darker rounded-2xl overflow-hidden hover:border-primary/30 transition-colors">
                  {/* Event Image */}
                  <div className="w-full h-[137px] rounded-lg overflow-hidden mb-4">
                    <img
                      alt={event.title}
                      className="block w-full h-full object-cover"
                      src={event.image}
                    />
                  </div>

                  {/* Event Content */}
                  <div className="px-4 pb-4">
                    {/* Event Title */}
                    <h3 
                      className="text-white text-base font-bold mb-4 cursor-pointer hover:text-primary transition-colors"
                      onClick={() => setSelectedEvent(event)}
                    >
                      {event.title}
                    </h3>

                    {/* Date & Time */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-4 h-4 relative shrink-0">
                        <img alt="clock" className="block w-full h-full" src={imgClock} />
                      </div>
                      <p className="text-white text-sm opacity-60">
                        {event.dateTime}
                      </p>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-4 h-4 relative shrink-0">
                        <img alt="location" className="block w-full h-full" src={imgClock1} />
                      </div>
                      <p className="text-white text-sm opacity-60">
                        {event.location}
                      </p>
                    </div>

                    {/* Organizers */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-4 h-4 relative shrink-0">
                        <img alt="users" className="block w-full h-full" src={imgUsers} />
                      </div>
                      <p className="text-white text-sm opacity-60">
                        {event.organizers}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex gap-2 flex-wrap">
                      <div className="bg-primary/30 rounded-2xl px-3 py-1">
                        <p className="text-white text-xs font-semibold">
                          {event.type}
                        </p>
                      </div>
                      <div className="bg-[rgba(244,78,78,0.3)] rounded-2xl px-3 py-1">
                        <p className="text-white text-xs font-semibold">
                          {event.status}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Event Detail Modal - Rectangle 236 (Backdrop) and Rectangle 237 (Modal) */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-end justify-end">
          {/* Rectangle 236 - Backdrop */}
          <div 
            className={`fixed inset-0 bg-black/70 z-40 transition-opacity duration-300 ${
              isClosing ? 'opacity-0' : 'opacity-100'
            }`}
            onClick={() => {
              setIsClosing(true);
              setTimeout(() => setSelectedEvent(null), 300);
            }}
          />
          
          {/* Rectangle 237 - Modal sliding from right */}
          <div 
            className={`bg-bg-darker rounded-t-2xl w-full max-w-[616px] h-full max-h-screen overflow-y-auto relative z-50 transform transition-transform duration-300 ease-out ${
              isOpen && !isClosing ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setIsClosing(true);
                setTimeout(() => setSelectedEvent(null), 300);
              }}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white hover:text-primary transition-colors z-10"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              {/* Event Image */}
              <div className="w-full h-[200px] md:h-[250px] rounded-lg overflow-hidden mb-6">
                <img
                  alt={selectedEvent.title}
                  className="block w-full h-full object-cover"
                  src={selectedEvent.image}
                />
              </div>

              {/* Event Title */}
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">
                {selectedEvent.title}
              </h2>

              {/* Event Details */}
              <div className="space-y-4 mb-6">
                {/* Date & Time */}
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 relative shrink-0">
                    <img alt="clock" className="block w-full h-full" src={imgClock} />
                  </div>
                  <p className="text-white text-base opacity-80">
                    {selectedEvent.dateTime}
                  </p>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 relative shrink-0">
                    <img alt="location" className="block w-full h-full" src={imgClock1} />
                  </div>
                  <p className="text-white text-base opacity-80">
                    {selectedEvent.location}
                  </p>
                </div>

                {/* Organizers */}
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 relative shrink-0">
                    <img alt="users" className="block w-full h-full" src={imgUsers} />
                  </div>
                  <p className="text-white text-base opacity-80">
                    {selectedEvent.organizers}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap mb-6">
                <div className="bg-primary/30 rounded-2xl px-4 py-2">
                  <p className="text-white text-sm font-semibold">
                    {selectedEvent.type}
                  </p>
                </div>
                <div className="bg-[rgba(244,78,78,0.3)] rounded-2xl px-4 py-2">
                  <p className="text-white text-sm font-semibold">
                    {selectedEvent.status}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Register
                </button>
                <button className="flex-1 bg-bg-dark hover:bg-bg-dark/80 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-border-darker">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

