'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

// Image URLs - using local files from public directory
const imgLine1 = "/Vector.svg";
const imgLine9 = "/Vector.svg";
const imgArrowLeft = "/arrow-left.svg";
const imgXLogoSvg = "/x_logo.svg.svg";
const imgGlobe = "/figma-exported/globe.png";
const imgArtboard = "/Symbol.svg.svg";
const imgClock = "/Frame-2.svg";
const imgUsers = "/Frame-2.svg";
const imgClock1 = "/Frame-2.svg";
const imgIcon = "/Icon.svg";
// Banner and Avatar
const imgBanner = "/figma-exported/baner.png";
const imgAvatar = "/figma-exported/ATX.png";
// Hackathon images
const imgHackathonImage1 = "/figma-exported/Hackathon Image1.png";
const imgHackathonImage2 = "/figma-exported/Hackathon Image2.png";
// Event images
const imgRectangle30 = "/figma-exported/Rectangle 30.png";
const imgRectangle31 = "/figma-exported/Rectangle 31.png";
const imgRectangle32 = "/figma-exported/Rectangle 32.png";
// Camp images
const imgCamp1 = "/figma-exported/HackQuest Africa- Co-Learning Camp .png";
const imgCamp2 = "/figma-exported/HackQuest Africa- Co-Learning Camp.png";

interface OrganizationDetailPageProps {
  params: {
    id: string;
  };
}

export default function OrganizationDetailPage({ params }: OrganizationDetailPageProps) {
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

  // Determine organization name based on id
  const getOrgName = (id: string) => {
    if (id === '1' || id === 'athenax') return 'AthenaX';
    if (id === '2' || id === '0g') return '0G';
    if (id === '3' || id === 'metamask') return 'MetaMask';
    return 'AthenaX'; // Default
  };

  const orgName = getOrgName(params.id);

  // Mock organization data - using AthenaX content for all
  const organizationData = {
    name: orgName,
    description: 'AthenaX is a cryptocurrency data and research analytics platform built to bring transparency to the cryptoeconomy. We empower investors, regulators, founders, builders, business developers.',
    hackathons: [
      {
        id: 1,
        title: 'ChainSpark Hackathon',
        status: 'Live',
        description: 'ChainSpark Hackathon was born from a simple but radical belief: true innovation shouldn\'t be strangled by black-box algorithms or centralized gatekeepers.',
        registrationClose: 'Registration 12 days left',
        techStack: 'All tech stack',
        level: 'All levels accepted',
        prize: '50,000.00 USD',
        location: 'Online',
        participants: '405 Participants',
        image: imgHackathonImage1,
      },
      {
        id: 2,
        title: 'Web3 Innovate Jam',
        status: 'Voting',
        description: 'The Web3 Innovate Jam is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask Card, LI.FI, and USDC. This event aims to bridge the gap between traditional finance and decentralised ecosystems, promoting solutions that enhance user experiences, financial accessibility, and on-chain utility.',
        votingClose: 'Voting 8 days left',
        techStack: 'All tech stack',
        level: 'All levels accepted',
        prize: '40,000.00 USD',
        location: 'Online',
        participants: '405 Participants',
        image: imgHackathonImage2,
      },
    ],
    events: [
      {
        id: 1,
        title: 'HackQuest x Monad Blitz Hangzhou',
        dateTime: 'Aug. 2, 03:00PM — Aug. 3, 03:00PM',
        location: 'Hangzhou, China',
        organizers: 'Mantle, Monad',
        type: 'Meetup',
        status: 'Past',
        image: imgRectangle30,
      },
      {
        id: 2,
        title: 'HackQuest x Monad Blitz Hangzhou',
        dateTime: 'Aug. 2, 03:00PM — Aug. 3, 03:00PM',
        location: 'Hangzhou, China',
        organizers: 'Mantle, Monad',
        type: 'Meetup',
        status: 'Past',
        image: imgRectangle30,
      },
      {
        id: 3,
        title: 'Sonic Labs Developer Meetup Shanghai',
        dateTime: 'Aug. 2, 03:00PM — Aug. 3, 03:00PM',
        location: 'Shanghai, China',
        organizers: 'Sonic, HackQuest',
        type: 'Meetup',
        status: 'Past',
        image: imgRectangle31,
      },
      {
        id: 4,
        title: 'Sonic x HackQuest Shanghai Meetup',
        dateTime: 'Aug. 2, 03:00PM — Aug. 3, 03:00PM',
        location: 'Shanghai, China',
        organizers: 'Sonic, HackQuest',
        type: 'Meetup',
        status: 'Past',
        image: imgRectangle32,
      },
      {
        id: 5,
        title: 'Sonic x HackQuest Shanghai Meetup',
        dateTime: 'Aug. 2, 03:00PM — Aug. 3, 03:00PM',
        location: 'Shanghai, China',
        organizers: 'Sonic, HackQuest',
        type: 'Meetup',
        status: 'Past',
        image: imgRectangle32,
      },
    ],
    camps: [
      {
        id: 1,
        title: 'HackQuest Africa: Co-Learning Camp #4',
        status: 'Ongoing',
        description: 'Get ready for a 2 week of virtual, self-placed, guide and collaborative odyssey into Web3 technology',
        registrationClose: 'Registration 8 days left',
        when: 'August 19 — September 11',
        where: 'Online',
        image: imgCamp1,
      },
      {
        id: 2,
        title: 'HackQuest Africa: Co-Learning Camp #5',
        status: 'Upcoming',
        description: 'Join us for another exciting 2 weeks of interactive learning and hands-on experience in the world of NFTs and blockchain.',
        registrationOpens: 'Registration 21 days left',
        when: 'October 1 — October 15',
        where: 'Online',
        image: imgCamp2,
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

        {/* Banner */}
        <div className="w-full h-[298px] relative">
          <img
            alt="banner"
            className="block w-full h-full object-cover"
            src={imgBanner}
          />
          {/* Back Button */}
          <Link
            href="/discussion-support"
            className="absolute left-4 md:left-6 top-4 md:top-6 bg-bg-darker border border-border-darker rounded-lg px-4 py-2 flex items-center gap-2 text-white hover:text-primary transition-colors"
          >
            <div className="w-4.5 h-4.5 relative">
              <img alt="back" className="block w-full h-full" src={imgArrowLeft} />
            </div>
            <span className="text-sm md:text-base">Back to Communities</span>
          </Link>
        </div>

        {/* Organization Header */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[1100px] 2xl:max-w-[1300px] px-4 md:px-8 lg:px-12 xl:px-16 py-6 md:py-8">
            <div className="flex items-start gap-4 md:gap-6 mb-6">
              {/* Avatar */}
              <div className="w-18 h-18 md:w-20 md:h-20 rounded-lg overflow-hidden flex-shrink-0 -mt-10 md:-mt-12 relative z-10 border-4 border-bg-dark">
                <img
                  alt={organizationData.name}
                  className="block w-full h-full object-cover"
                  src={imgAvatar}
                />
              </div>

              <div className="flex-1">
                {/* Organization Name */}
                <h1 className="text-white text-2xl md:text-3xl font-semibold mb-4">
                  {organizationData.name}
                </h1>

                {/* Description */}
                <p className="text-white text-sm md:text-base opacity-80 leading-relaxed mb-4 max-w-2xl">
                  {organizationData.description}
                </p>

                {/* Social Links */}
                <div className="flex gap-2">
                  <button className="border border-border-darker rounded-md w-10 h-10 flex items-center justify-center hover:border-primary/30 transition-colors">
                    <div className="w-4 h-4 opacity-60">
                      <img alt="x logo" className="block w-full h-full" src={imgXLogoSvg} />
                    </div>
                  </button>
                  <button className="border border-border-darker rounded-md w-10 h-10 flex items-center justify-center hover:border-primary/30 transition-colors">
                    <div className="w-4 h-4 opacity-60">
                      <img alt="globe" className="block w-full h-full" src={imgGlobe} />
                    </div>
                  </button>
                  <button className="border border-border-darker rounded-md w-10 h-10 flex items-center justify-center hover:border-primary/30 transition-colors">
                    <div className="w-4 h-4 opacity-60">
                      <img alt="symbol" className="block w-full h-full" src={imgArtboard} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-1 w-full flex justify-center">
          <div className="w-full max-w-[1100px] 2xl:max-w-[1300px] px-4 md:px-8 lg:px-12 xl:px-16 py-6 md:py-8 lg:py-10">
            {/* Hackathons Section */}
            <div className="mb-12 md:mb-16">
              <h2 className="text-white text-base md:text-lg font-semibold mb-6 md:mb-8">
                Hackathons
              </h2>

              <div className="flex flex-col gap-6 md:gap-8">
                {organizationData.hackathons.map((hackathon) => (
                  <div
                    key={hackathon.id}
                    className="border border-border-darker rounded-2xl p-4 md:p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
                  >
                    <div className="flex-1 flex flex-col gap-6 md:gap-8">
                      {/* Hackathon Header */}
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-white text-base md:text-lg font-semibold">
                            {hackathon.title}
                          </h3>
                          <div className={`rounded-2xl px-3 py-1 ${
                            hackathon.status === 'Live' ? 'bg-status-live' : 'bg-[rgba(78,244,103,0.3)]'
                          }`}>
                            <p className="text-white text-xs font-semibold">
                              {hackathon.status}
                            </p>
                          </div>
                        </div>
                        <p className="text-white text-sm md:text-base opacity-60 leading-relaxed max-w-2xl">
                          {hackathon.description}
                        </p>
                      </div>

                      {/* Hackathon Details */}
                      <div className="flex flex-wrap gap-6">
                        {hackathon.registrationClose && (
                          <div className="flex flex-col gap-1.5">
                            <p className="text-white text-xs opacity-60">
                              Registration close
                            </p>
                            <p className="text-white text-sm font-medium">
                              {hackathon.registrationClose}
                            </p>
                          </div>
                        )}
                        {hackathon.votingClose && (
                          <div className="flex flex-col gap-1.5">
                            <p className="text-white text-xs opacity-60">
                              Voting close
                            </p>
                            <p className="text-white text-sm font-medium">
                              {hackathon.votingClose}
                            </p>
                          </div>
                        )}
                        <div className="flex flex-col gap-1.5">
                          <p className="text-white text-xs opacity-60">Tech stack</p>
                          <p className="text-white text-sm font-medium">
                            {hackathon.techStack}
                          </p>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <p className="text-white text-xs opacity-60">Level</p>
                          <p className="text-white text-sm font-medium">
                            {hackathon.level}
                          </p>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <p className="text-white text-xs opacity-60">Total prize</p>
                          <p className="text-white text-sm font-medium">
                            {hackathon.prize}
                          </p>
                        </div>
                      </div>

                      {/* Hackathon Meta */}
                      <div className="flex flex-wrap gap-2">
                        <div className="bg-white/30 rounded-2xl px-3 py-1">
                          <p className="text-white text-xs font-semibold">
                            {hackathon.location}
                          </p>
                        </div>
                        <div className="bg-white/30 rounded-2xl px-3 py-1">
                          <p className="text-white text-xs font-semibold">
                            {hackathon.participants}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Hackathon Image */}
                    <div className="w-full lg:w-[362px] h-[196px] rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        alt={hackathon.title}
                        className="block w-full h-full object-cover"
                        src={hackathon.image}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Global Events Section */}
            <div className="mb-12 md:mb-16">
              <h2 className="text-white text-base md:text-lg font-semibold mb-6 md:mb-8">
                Global Events
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {organizationData.events.map((event) => (
                  <div
                    key={event.id}
                    className="border border-border-darker rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
                  >
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
                      <h3 className="text-white text-base font-bold mb-4">
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

            {/* Co-learning Camps Section */}
            <div className="mb-12 md:mb-16">
              <h2 className="text-white text-base md:text-lg font-semibold mb-6 md:mb-8">
                Co-learning Camps
              </h2>

              <div className="flex flex-col gap-4">
                {organizationData.camps.map((camp) => (
                  <div
                    key={camp.id}
                    className="border border-border-darker rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                  >
                    <div className="flex-1 flex flex-col gap-6 md:gap-8">
                      {/* Camp Header */}
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-white text-base md:text-lg font-semibold">
                            {camp.title}
                          </h3>
                          <div className="bg-status-live rounded-2xl px-3 py-1">
                            <p className="text-white text-xs font-semibold">
                              {camp.status}
                            </p>
                          </div>
                        </div>
                        <p className="text-white text-sm md:text-base opacity-60 leading-relaxed max-w-2xl">
                          {camp.description}
                        </p>
                      </div>

                      {/* Camp Details */}
                      <div className="flex flex-wrap gap-6">
                        {camp.registrationClose && (
                          <div className="flex flex-col gap-1.5">
                            <p className="text-white text-xs opacity-60">
                              Registration close
                            </p>
                            <p className="text-white text-sm font-medium">
                              {camp.registrationClose}
                            </p>
                          </div>
                        )}
                        {camp.registrationOpens && (
                          <div className="flex flex-col gap-1.5">
                            <p className="text-white text-xs opacity-60">
                              Registration opens soon
                            </p>
                            <p className="text-white text-sm font-medium">
                              {camp.registrationOpens}
                            </p>
                          </div>
                        )}
                        <div className="flex flex-col gap-1.5">
                          <p className="text-white text-xs opacity-60">When</p>
                          <p className="text-white text-sm font-medium">
                            {camp.when}
                          </p>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <p className="text-white text-xs opacity-60">Where</p>
                          <p className="text-white text-sm font-medium">
                            {camp.where}
                          </p>
                        </div>
                      </div>

                      {/* Register Button */}
                      <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2.5 md:px-6 md:py-3 rounded-lg font-bold text-sm md:text-base flex items-center justify-center gap-2 transition-colors w-fit">
                        <span>Register</span>
                        <div className="w-3.5 h-3.5 md:w-4 md:h-4 relative shrink-0">
                          <img alt="register icon" className="block w-full h-full" src={imgIcon} />
                        </div>
                      </button>
                    </div>

                    {/* Camp Image */}
                    <div className="w-full md:w-[362px] h-[219px] relative shrink-0 rounded-lg overflow-hidden">
                      <img
                        alt={camp.title}
                        className="block w-full h-full object-cover"
                        src={camp.image}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

