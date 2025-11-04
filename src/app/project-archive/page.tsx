'use client';

import React, { useEffect, useRef } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

// Image URLs - using local files from public directory
const imgLine1 = "/Vector.svg";
const imgLine9 = "/Vector.svg";
const imgSearch = "/search.svg";
const imgVector2 = "/Vector.svg";
const imgHeart = "/heart.svg";
const imgFrame5 = "/Frame-5.svg";
const imgFrame6 = "/Frame-6.svg";
const imgFrame7 = "/Frame-7.svg";
const imgMapPin = "/map-pin.svg";

export default function ProjectArchivePage() {
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

  // Mock project data
  const highlightedProjects = [
    {
      id: 1,
      title: 'Dunk Verse',
      description: 'A Mobile Dapp which offers AI-Driven Quizzes, NFT-Powered Social Media, and Blockchain Betting fully on-chain.',
      image: '/source/3ae89711bfa7cb844849ef1d0b3239c72ae16fa8.jpg',
      likes: 55589,
      prize: 'Third Prize, Mantle APAC Hackathon',
      builders: [
        { name: 'John Coltrane', location: 'New York, USA', avatar: '/Ellipse 19.svg', projects: 3, rank: 'No. 1' },
        { name: 'User23434', location: 'New York, USA', avatar: '/Ellipse 19-1.svg', projects: 2, rank: 'No. 2' },
        { name: 'Dereck Jameson', location: 'New York, USA', avatar: '/Ellipse 19-2.svg', projects: 2, rank: 'No. 3' },
        { name: 'User123123123', location: 'You', avatar: '/Ellipse 19.svg', projects: 0, rank: 'No. 99+' },
      ],
    },
    {
      id: 2,
      title: 'SafeSend',
      description: 'Secure and authenticated transfers of Ether, Efrogs NFTs, and $CROAK tokens. relief from stress of misstype the address!',
      image: '/Rectangle 228.png',
      likes: 55589,
      prize: 'Third Prize, Mantle APAC Hackathon',
      builders: [
        { name: 'John Coltrane', location: 'New York, USA', avatar: '/Ellipse 19.svg', projects: 15, rank: 'No. 1' },
        { name: 'User23434', location: 'New York, USA', avatar: '/Ellipse 19-1.svg', projects: 12, rank: 'No. 2' },
        { name: 'Dereck Jameson', location: 'New York, USA', avatar: '/Ellipse 19-2.svg', projects: 11, rank: 'No. 3' },
        { name: 'User123123123', location: 'You', avatar: '/Ellipse 19.svg', projects: 0, rank: 'No. 99+' },
      ],
    },
  ];

  const allProjects = [
    {
      id: 1,
      title: 'Init Club Pro',
      description: 'Init Club Pro was born from a simple but radical belief: true innovation shouldn\'t ...',
      image: '/Rectangle 28.png',
      likes: 5,
      lastEdited: '6 days ago',
      builder: 'John McKenzie',
      tags: ['DeFi', 'Infra'],
    },
    {
      id: 2,
      title: 'Wiral',
      description: 'Wiral was born from a simple but radical belief: true innovation shouldn\'t ...',
      image: '/Rectangle 28-1.png',
      likes: 5,
      lastEdited: '6 days ago',
      builder: 'John McKenzie',
      tags: ['DeFi', 'Infra'],
    },
    {
      id: 3,
      title: 'Ward',
      description: 'Ward was born from a simple but radical belief: true innovation shouldn\'t ...',
      image: '/Rectangle 28-2.png',
      likes: 10,
      lastEdited: '6 days ago',
      builder: 'John McKenzie',
      tags: ['DeFi', 'Infra'],
    },
    {
      id: 4,
      title: 'Init Club Pro',
      description: 'Init Club Pro was born from a simple but radical belief: true innovation shouldn\'t ...',
      image: '/Rectangle 28.png',
      likes: 5,
      lastEdited: '6 days ago',
      builder: 'John McKenzie',
      tags: ['DeFi', 'Infra'],
    },
    {
      id: 5,
      title: 'Wiral',
      description: 'Wiral was born from a simple but radical belief: true innovation shouldn\'t ...',
      image: '/Rectangle 28-1.png',
      likes: 5,
      lastEdited: '6 days ago',
      builder: 'John McKenzie',
      tags: ['DeFi', 'Infra'],
    },
    {
      id: 6,
      title: 'Ward',
      description: 'Ward was born from a simple but radical belief: true innovation shouldn\'t ...',
      image: '/Rectangle 28-2.png',
      likes: 10,
      lastEdited: '6 days ago',
      builder: 'John McKenzie',
      tags: ['DeFi', 'Infra'],
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
          <div className="w-full max-w-[1400px] px-4 md:px-6 lg:px-8 xl:px-12 py-6 md:py-8 lg:py-10">
            {/* Page Title */}
            <h1 className="text-white text-2xl md:text-3xl font-semibold mb-4">
              Project Archive
            </h1>
            <p className="text-white text-sm md:text-base opacity-80 mb-8 md:mb-10 max-w-2xl">
              Welcome to the database where you can see all previous projects
              <br />
              from our past hackathons.
            </p>

            {/* Project Highlight Section */}
            <div className="mb-12 md:mb-16">
              <h2 className="text-white text-base md:text-lg font-semibold mb-6 md:mb-8">
                Project Highlight
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {highlightedProjects.map((project) => (
                  <div key={project.id} className="border border-border-darker rounded-lg overflow-hidden">
                    {/* Project Image */}
                    <div className="w-full h-[258px] relative">
                      <img
                        alt={project.title}
                        className="block w-full h-full object-cover"
                        src={project.image}
                      />
                    </div>

                    {/* Project Info */}
                    <div className="p-4 md:p-6">
                      <h3 className="text-white text-base md:text-lg font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white text-sm md:text-base opacity-80 mb-4 md:mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Likes and Prize */}
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="border border-border-darker rounded-lg px-3 py-2 flex items-center gap-2">
                          <div className="w-4 h-4 relative">
                            <img alt="heart" className="block w-full h-full" src={imgHeart} />
                          </div>
                          <p className="text-white text-xs md:text-sm">
                            {project.likes.toLocaleString()}
                          </p>
                        </div>
                        <div className="border border-border-darker rounded-lg px-3 py-2 flex items-center gap-2">
                          <div className="w-4 h-4 relative">
                            <img alt="prize" className="block w-full h-full" src={imgFrame7} />
                          </div>
                          <p className="text-white text-xs md:text-sm">
                            {project.prize}
                          </p>
                        </div>
                      </div>

                      {/* Builder Highlight */}
                      <div>
                        <h4 className="text-white text-sm md:text-base font-semibold mb-4">
                          Builder Highlight
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Most Hackathons Win */}
                          <div>
                            <p className="text-white text-sm font-semibold mb-4">
                              Most Hackathons Win
                            </p>
                            <div className="space-y-4">
                              {project.builders.slice(0, 2).map((builder, index) => (
                                <div
                                  key={index}
                                  className="bg-bg-darker border border-border-darker rounded-lg p-4 flex items-center gap-4"
                                >
                                  <div className="w-12 h-12 relative shrink-0">
                                    <img
                                      alt={builder.name}
                                      className="block w-full h-full object-cover rounded-full"
                                      src={builder.avatar}
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-white text-sm font-semibold truncate">
                                      {builder.name}
                                    </p>
                                    <div className="flex items-center gap-1 mt-1">
                                      <div className="w-3 h-3 relative shrink-0">
                                        <img alt="location" className="block w-full h-full" src={imgMapPin} />
                                      </div>
                                      <p className="text-white text-xs opacity-60 truncate">
                                        {builder.location}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2 shrink-0">
                                    <div className="bg-[#121213] rounded-lg px-3 py-2 flex items-center gap-1">
                                      <div className="w-6 h-6 relative">
                                        <img alt="projects" className="block w-full h-full" src={imgFrame5} />
                                      </div>
                                      <p className="text-white text-xs">
                                        {builder.projects}
                                      </p>
                                    </div>
                                    <div className="bg-[#121213] rounded-lg px-3 py-2">
                                      <p className="text-white text-xs text-right">
                                        {builder.rank}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Most Projects Built */}
                          <div>
                            <p className="text-white text-sm font-semibold mb-4">
                              Most Projects Built
                            </p>
                            <div className="space-y-4">
                              {project.builders.slice(2).map((builder, index) => (
                                <div
                                  key={index}
                                  className="bg-bg-darker border border-border-darker rounded-lg p-4 flex items-center gap-4"
                                >
                                  <div className="w-12 h-12 relative shrink-0">
                                    <img
                                      alt={builder.name}
                                      className="block w-full h-full object-cover rounded-full"
                                      src={builder.avatar}
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-white text-sm font-semibold truncate">
                                      {builder.name}
                                    </p>
                                    <div className="flex items-center gap-1 mt-1">
                                      <div className="w-3 h-3 relative shrink-0">
                                        <img alt="location" className="block w-full h-full" src={imgMapPin} />
                                      </div>
                                      <p className="text-white text-xs opacity-60 truncate">
                                        {builder.location}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2 shrink-0">
                                    <div className="bg-[#121213] rounded-lg px-3 py-2 flex items-center gap-1">
                                      <div className="w-6 h-6 relative">
                                        <img alt="projects" className="block w-full h-full" src={imgFrame6} />
                                      </div>
                                      <p className="text-white text-xs">
                                        {builder.projects}
                                      </p>
                                    </div>
                                    <div className="bg-[#121213] rounded-lg px-3 py-2">
                                      <p className="text-white text-xs text-right">
                                        {builder.rank}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* All Projects Section */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 md:mb-8">
                <h2 className="text-white text-base md:text-lg font-semibold">
                  All Projects
                </h2>
                {/* Filters */}
                <div className="flex flex-wrap gap-3">
                  <button className="border border-border-darker rounded-lg px-3 py-2 flex items-center gap-2 hover:border-primary transition-colors">
                    <span className="text-text-secondary text-sm">Sector</span>
                    <div className="flex items-center gap-1">
                      <span className="text-white text-sm">All</span>
                      <div className="h-1 w-2 relative shrink-0">
                        <img alt="" className="block w-full h-full" src={imgVector2} />
                      </div>
                    </div>
                  </button>
                  <button className="border border-border-darker rounded-lg px-3 py-2 flex items-center gap-2 hover:border-primary transition-colors">
                    <span className="text-text-secondary text-sm">Tech Stack</span>
                    <div className="flex items-center gap-1">
                      <span className="text-white text-sm">All</span>
                      <div className="h-1 w-2 relative shrink-0">
                        <img alt="" className="block w-full h-full" src={imgVector2} />
                      </div>
                    </div>
                  </button>
                  <button className="border border-border-darker rounded-lg px-3 py-2 flex items-center gap-2 hover:border-primary transition-colors">
                    <span className="text-text-secondary text-sm">Sort By</span>
                    <div className="flex items-center gap-1">
                      <span className="text-white text-sm">All</span>
                      <div className="h-1 w-2 relative shrink-0">
                        <img alt="" className="block w-full h-full" src={imgVector2} />
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {allProjects.map((project) => (
                  <div key={project.id} className="border border-border-darker rounded-2xl overflow-hidden hover:border-primary transition-colors">
                    {/* Project Image */}
                    <div className="w-[117.367px] h-[94px] relative">
                      <img
                        alt={project.title}
                        className="block w-full h-full object-cover rounded-lg"
                        src={project.image}
                      />
                      {/* Like Button */}
                      <div className="absolute top-2 right-2">
                        <div className={`border border-border-darker rounded-lg w-11 h-11 flex items-center justify-center ${
                          project.likes === 10 ? 'bg-primary' : 'bg-bg-darker'
                        }`}>
                          <div className="w-4 h-4 relative">
                            <img alt="heart" className="block w-full h-full" src={project.likes === 10 ? '/heart-2.svg' : '/heart-1.svg'} />
                          </div>
                          <p className="text-white text-xs ml-1">
                            {project.likes}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-4">
                      <h3 className="text-white text-base font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white text-sm opacity-60 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Metadata */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm opacity-60">Last edited</span>
                          <span className="text-white text-sm">{project.lastEdited}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm opacity-60">Builder</span>
                          <span className="text-white text-sm">{project.builder}</span>
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

