'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

// Image URLs - using local SVG files from public directory
const imgArrowLeft = "/arrow-left.svg";
const imgShare2 = "/share-2.svg";
const imgHackathonImage = "http://localhost:3845/assets/f1e6e5ac581eef41cc19191985e2ab75c63a4868.png";
const imgLine1 = "http://localhost:3845/assets/df1d21485e699bf1889d4c10443f439e65d15fe5.svg";
const imgLine9 = "http://localhost:3845/assets/c2166d7a118fbe0524d2f04202cebe7d7d794022.svg";
const imgLine12 = "http://localhost:3845/assets/5ba0a6750208482e33d1d86cbf79f9c5d67a95ae.svg";
const imgLine13 = "http://localhost:3845/assets/23852bd324c45dba39a65c338fab51e04bb38da9.svg";
const imgLine10 = "http://localhost:3845/assets/2bc18f7bfe8e85060706d15c2759a3435a6354bd.svg";
const imgLine11 = "http://localhost:3845/assets/2c4bff8d472180b19e586f40c250e4b6f61828d9.svg";
const imgEllipse6 = "/Ellipse%206.svg";
const imgCheck = "/check.svg";
const imgEllipse7ForQuest = "/Ellipse%206-1.svg";
const imgEllipse8 = "/Ellipse%208.svg";
const imgEllipse9 = "/Ellipse%209.svg";
const imgEllipse7 = "/Ellipse%207.svg";
const imgXLogoSvg = "/x_logo.svg.svg";
const imgArtboard = "/Symbol.svg.svg";

interface PrizeJudgePageProps {
  params: {
    id: string;
  };
}

export default function PrizeJudgePage({ params }: PrizeJudgePageProps) {
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

  // Mock data
  const hackathonData = {
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
    prizes: [
      {
        number: 1,
        title: "Tech Fairness Exploration Awards (9 winners)",
        amount: "18,000 USD",
        description: "This track is open to all topics as long as your work addresses \"tech fairness.\" We welcome both builders and storytellers—whether you're coding a protocol, designing a governance interface, or building a meme engine.",
        suggestedDirections: [
          "Algorithm transparency and interpretability",
          "Data sovereignty and privacy protection",
          "Sustainable income in the AI era",
          "Creator-first infrastructure and anti-platform design",
          "Identity, reputation and governance frameworks",
          "Decentralized storytelling and public discourse tools",
          "Human-centered AI & Web3 interactions",
        ],
        judgingCriteria: "Judging criteria include originality, usability, impact, and alignment with the theme of fairness. Each selected team will receive 2,000 USD worth of FAIR3 tokens.",
        evaluationCriteria: [
          { name: "Originality", description: "Is the idea novel and imaginative? Does it offer a new take on an old problem?", maxScore: 20 },
          { name: "Relevance to Tech Fairness", description: "Does the project address core fairness challenges (algorithm transparency, data sovereignty, sustainable income, etc.)?", maxScore: 25 },
          { name: "Functionality & Implementation", description: "How well is the project executed? Is there a working demo or prototype?", maxScore: 20 },
          { name: "Impact & Usefulness", description: "Can this project be applied to real communities or users? Is it scalable or integrable?", maxScore: 20 },
          { name: "Design & Clarity", description: "Is the presentation intuitive? Is the design and documentation clear enough to be understood and used?", maxScore: 15 },
        ],
        judges: [
          { name: "Wizzy", username: "@WizzyOnChain", avatar: imgEllipse8 },
          { name: "Doodle", username: "@Doodlegenics", avatar: imgEllipse9 },
          { name: "lynk", username: "@lynk0x", avatar: imgEllipse7 },
        ],
        voting: {
          votingMode: "Project Scoring",
          judgingMode: "Judges Only",
          maxVotesPerJudge: 100,
        },
      },
      {
        number: 2,
        title: "FAIR3 Public Infrastructure Awards (3 winners)",
        amount: "6,000 USD",
        description: "This track is open to all topics as long as your work addresses \"tech fairness.\" We welcome both builders and storytellers—whether you're coding a protocol, designing a governance interface, or building a meme engine.",
        suggestedDirections: [
          "Algorithm transparency and interpretability",
          "Data sovereignty and privacy protection",
          "Sustainable income in the AI era",
          "Creator-first infrastructure and anti-platform design",
          "Identity, reputation and governance frameworks",
          "Decentralized storytelling and public discourse tools",
          "Human-centered AI & Web3 interactions",
        ],
        judgingCriteria: "Judging criteria include originality, usability, impact, and alignment with the theme of fairness. Each selected team will receive 2,000 USD worth of FAIR3 tokens.",
        evaluationCriteria: [
          { name: "Originality", description: "Is the idea novel and imaginative? Does it offer a new take on an old problem?", maxScore: 20 },
          { name: "Relevance to Tech Fairness", description: "Does the project address core fairness challenges (algorithm transparency, data sovereignty, sustainable income, etc.)?", maxScore: 25 },
          { name: "Functionality & Implementation", description: "How well is the project executed? Is there a working demo or prototype?", maxScore: 20 },
          { name: "Impact & Usefulness", description: "Can this project be applied to real communities or users? Is it scalable or integrable?", maxScore: 20 },
          { name: "Design & Clarity", description: "Is the presentation intuitive? Is the design and documentation clear enough to be understood and used?", maxScore: 15 },
        ],
        judges: [
          { name: "Wizzy", username: "@WizzyOnChain", avatar: imgEllipse8 },
          { name: "Doodle", username: "@Doodlegenics", avatar: imgEllipse9 },
          { name: "lynk", username: "@lynk0x", avatar: imgEllipse7 },
        ],
        voting: {
          votingMode: "Project Scoring",
          judgingMode: "Judges Only",
          maxVotesPerJudge: 100,
        },
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
                  {hackathonData.title}
                </h1>

                {/* Navigation Tabs */}
                <div className="relative mb-8 md:mb-10">
                  <div className="bg-white/10 rounded-lg h-12 md:h-14 px-4 flex items-center gap-16 md:gap-20">
                    <Link href={`/hackathon/${params.id}`} className="text-white text-sm md:text-base hover:text-primary transition-colors">
                      Overview
                    </Link>
                    <Link href={`/hackathon/${params.id}/prize-judge`} className="relative bg-primary px-6 py-2 rounded-lg text-white text-sm md:text-base font-medium">
                      Prize & Judge
                    </Link>
                    <Link href={`/hackathon/${params.id}/schedule`} className="text-white text-sm md:text-base hover:text-primary transition-colors">
                      Schedule
                    </Link>
                    <Link href={`/hackathon/${params.id}/submitted-projects`} className="text-white text-sm md:text-base hover:text-primary transition-colors">
                      Submitted Projects
                    </Link>
                  </div>
                </div>

                {/* Prize Cards */}
                <div className="flex flex-col gap-6 md:gap-8">
                  {hackathonData.prizes.map((prize, index) => (
                    <div key={index} className="border border-border-darker rounded-lg p-6 md:p-8">
                      {/* Prize Title */}
                      <h2 className="text-white text-xl md:text-2xl font-semibold mb-6">
                        {prize.number}. {prize.title}
                      </h2>

                      {/* Prize Content - Left and Right Layout */}
                      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                        {/* Left Side - Prize Amount */}
                        <div className="lg:w-[195px] flex-shrink-0">
                          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                            <p className="text-3xl md:text-4xl font-bold text-white mb-2">
                              {prize.amount}
                            </p>
                            <p className="opacity-60 text-white text-sm md:text-base mb-6 leading-relaxed">
                              {prize.title}
                            </p>
                          </div>
                        </div>

                        {/* Vertical divider */}
                        {index === 0 && (
                          <div className="hidden lg:block w-px h-[364px] relative">
                            <div className="absolute inset-0">
                              <img alt="divider" className="block w-full h-full object-cover" src={imgLine13} />
                            </div>
                          </div>
                        )}

                        {/* Right Side - Prize Details */}
                        <div className="flex-1">
                          <p className="text-white text-base md:text-lg leading-relaxed mb-4">
                            {prize.description}
                          </p>
                          <p className="text-white text-base md:text-lg leading-relaxed mb-4">
                            Suggested directions (not limited to):
                          </p>
                          <ul className="list-disc list-inside mb-6 space-y-2 text-white text-base md:text-lg leading-relaxed opacity-80">
                            {prize.suggestedDirections.map((direction, dirIndex) => (
                              <li key={dirIndex}>{direction}</li>
                            ))}
                          </ul>
                          <p className="text-white text-base md:text-lg leading-relaxed mb-6">
                            {prize.judgingCriteria}
                          </p>

                          {/* Evaluation Criteria Section */}
                          <div className="border-t border-border-darker pt-6 mb-6">
                            <h3 className="text-white text-lg md:text-xl font-semibold mb-4 text-center">
                              Evaluation Criteria
                            </h3>
                            <div className="flex items-center justify-between mb-4 pb-2 border-b border-border-darker">
                              <p className="opacity-60 text-white text-sm">Name</p>
                              <p className="opacity-60 text-white text-sm">Description</p>
                              <p className="opacity-60 text-white text-sm">Max Score</p>
                            </div>
                            <div className="space-y-4">
                              {prize.evaluationCriteria.map((criteria, critIndex) => (
                                <div key={critIndex} className="flex items-start justify-between gap-4 pb-4 border-b border-border-darker">
                                  <div className="flex-1">
                                    <p className="text-white text-sm md:text-base mb-2">{criteria.name}</p>
                                  </div>
                                  <div className="flex-1">
                                    <p className="opacity-80 text-white text-sm md:text-base leading-relaxed">{criteria.description}</p>
                                  </div>
                                  <div className="w-16 text-right">
                                    <p className="text-white text-sm md:text-base">{criteria.maxScore}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Voting Section */}
                          <div className="border-t border-border-darker pt-6 mb-6">
                            <h3 className="text-white text-lg md:text-xl font-semibold mb-4">Voting</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                <p className="opacity-60 text-white text-sm mb-1">Judging Mode</p>
                                <p className="text-white text-base font-semibold">{prize.voting.judgingMode}</p>
                              </div>
                              <div>
                                <p className="opacity-60 text-white text-sm mb-1">Voting Mode</p>
                                <p className="text-white text-base font-semibold">{prize.voting.votingMode}</p>
                              </div>
                              <div>
                                <p className="opacity-60 text-white text-sm mb-1">Max Votes per Judge</p>
                                <p className="text-white text-base font-semibold">{prize.voting.maxVotesPerJudge}</p>
                              </div>
                            </div>
                          </div>

                          {/* Judges Section */}
                          <div className="border-t border-border-darker pt-6">
                            <h3 className="text-white text-lg md:text-xl font-semibold mb-4">Judges</h3>
                            <div className="flex flex-wrap gap-6">
                              {prize.judges.map((judge, judgeIndex) => (
                                <div key={judgeIndex} className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                    <img alt={judge.name} className="block w-full h-full object-cover" src={judge.avatar} />
                                  </div>
                                  <div>
                                    <p className="text-white text-base font-semibold">{judge.name}</p>
                                    <p className="opacity-60 text-white text-sm">{judge.username}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
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
                      <p className="text-white text-sm">{hackathonData.registrationClose}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="opacity-60 text-white text-sm">Tech stack</p>
                      <p className="text-white text-sm">{hackathonData.techStack}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="opacity-60 text-white text-sm">Level</p>
                      <p className="text-white text-sm">{hackathonData.level}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="opacity-60 text-white text-sm">Total Prize</p>
                      <p className="text-white text-sm">{hackathonData.totalPrize}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="opacity-60 text-white text-sm">Location</p>
                      <p className="text-white text-sm">{hackathonData.location}</p>
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
                        <img alt="x" className="block w-full h-full" src={imgEllipse7ForQuest} />
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
                        <img alt="discord" className="block w-full h-full" src={imgEllipse7ForQuest} />
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

