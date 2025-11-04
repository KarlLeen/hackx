'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

// Image URLs - using local files from public directory
const imgArrowLeft = "/arrow-left.svg";
const imgShare2 = "/share-2.svg";
const imgLine1 = "/Vector.svg";
const imgLine9 = "/Vector.svg";
const imgLine10 = "/Vector.svg";
const imgLine11 = "/Vector.svg";
const imgEllipse6 = "/Ellipse%206.svg";
const imgCheck = "/check.svg";
const imgEllipse7 = "/Ellipse%206-1.svg";
const imgXLogoSvg = "/x_logo.svg.svg";
const imgArtboard = "/Symbol.svg.svg";
const imgHeart = "/Vector.svg";
const imgHeart1 = "/Vector.svg";
const imgRectangle28 = "/Rectangle%2028.png";
const imgRectangle29 = "/Rectangle%2028-1.png";
const imgRectangle30 = "/Rectangle%2028-2.png";

interface SubmittedProjectsPageProps {
  params: {
    id: string;
  };
}

export default function SubmittedProjectsPage({ params }: SubmittedProjectsPageProps) {
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

  // Mock projects data
  const projectsData = {
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
    projects: [
      {
        id: 1,
        title: "Init Club Pro",
        description: "Init Club Pro was born from a simple but radical belief: true innovation shouldn't ...",
        image: imgRectangle28,
        lastEdited: "6 days ago",
        builder: "John McKenzie",
        tags: ["DeFi", "Infra"],
        likes: 5,
        isLiked: false,
      },
      {
        id: 2,
        title: "Ward",
        description: "Ward was born from a simple but radical belief: true innovation shouldn't ...",
        image: imgRectangle30,
        lastEdited: "6 days ago",
        builder: "John McKenzie",
        tags: ["DeFi", "Infra"],
        likes: 10,
        isLiked: true,
      },
      {
        id: 3,
        title: "Wiral",
        description: "Wiral was born from a simple but radical belief: true innovation shouldn't ...",
        image: imgRectangle29,
        lastEdited: "6 days ago",
        builder: "John McKenzie",
        tags: ["DeFi", "Infra"],
        likes: 5,
        isLiked: false,
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

                {/* Page Title */}
                <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 md:mb-8">
                  Submitted Projects
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
                    <Link href={`/hackathon/${params.id}/schedule`} className="text-white text-sm md:text-base hover:text-primary transition-colors whitespace-nowrap">
                      Schedule
                    </Link>
                    <Link href={`/hackathon/${params.id}/submitted-projects`} className="relative bg-primary px-4 md:px-6 py-2 rounded-lg text-white text-sm md:text-base font-medium whitespace-nowrap">
                      Submitted Projects
                    </Link>
                  </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {projectsData.projects.map((project) => (
                    <div key={project.id} className="border border-border-darker rounded-2xl p-4 md:p-6 hover:border-primary/30 transition-colors relative">
                      {/* Like Button - positioned at top right */}
                      <div className="absolute top-4 right-4 md:top-6 md:right-6">
                        <button className={`border border-border-darker rounded-lg w-10 h-10 flex items-center justify-center gap-1 ${project.isLiked ? 'bg-primary' : 'bg-transparent'} hover:bg-primary/80 transition-colors`}>
                          <div className="w-4 h-4 relative">
                            <img alt="heart" className="block w-full h-full" src={project.isLiked ? imgHeart1 : imgHeart} />
                          </div>
                          <span className="text-white text-xs">{project.likes}</span>
                        </button>
                      </div>

                      {/* Project Image */}
                      <div className="w-[94px] h-[94px] rounded-lg overflow-hidden mb-4">
                        <img
                          alt={project.title}
                          className="w-full h-full object-cover"
                          src={project.image}
                        />
                      </div>

                      {/* Project Title */}
                      <h2 className="text-white text-base md:text-lg font-bold mb-2">
                        {project.title}
                      </h2>

                      {/* Project Description */}
                      <p className="text-white text-sm md:text-base opacity-60 mb-4 leading-5 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Project Meta */}
                      <div className="flex flex-col gap-3 mb-4">
                        <div className="flex items-center justify-between">
                          <p className="opacity-60 text-white text-sm">Last edited</p>
                          <p className="text-white text-sm">{project.lastEdited}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="opacity-60 text-white text-sm">Builder</p>
                          <p className="text-white text-sm">{project.builder}</p>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-primary/30 text-white text-xs font-semibold px-2.5 py-1 rounded-2xl"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
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
                      <p className="text-2xl md:text-3xl font-bold text-white">{projectsData.countdown.days}</p>
                      <p className="opacity-60 text-white text-xs">D</p>
                    </div>
                    <div className="bg-primary/10 rounded flex-1 flex flex-col items-center justify-center py-3">
                      <p className="text-2xl md:text-3xl font-bold text-white">{projectsData.countdown.hours}</p>
                      <p className="opacity-60 text-white text-xs">H</p>
                    </div>
                    <div className="bg-primary/10 rounded flex-1 flex flex-col items-center justify-center py-3">
                      <p className="text-2xl md:text-3xl font-bold text-white">{projectsData.countdown.minutes}</p>
                      <p className="opacity-60 text-white text-xs">M</p>
                    </div>
                    <div className="bg-primary/10 rounded flex-1 flex flex-col items-center justify-center py-3">
                      <p className="text-2xl md:text-3xl font-bold text-white">{projectsData.countdown.seconds}</p>
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
                      <p className="text-white text-sm">{projectsData.registrationClose}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="opacity-60 text-white text-sm">Tech stack</p>
                      <p className="text-white text-sm">{projectsData.techStack}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="opacity-60 text-white text-sm">Level</p>
                      <p className="text-white text-sm">{projectsData.level}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="opacity-60 text-white text-sm">Total Prize</p>
                      <p className="text-white text-sm">{projectsData.totalPrize}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="opacity-60 text-white text-sm">Location</p>
                      <p className="text-white text-sm">{projectsData.location}</p>
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

