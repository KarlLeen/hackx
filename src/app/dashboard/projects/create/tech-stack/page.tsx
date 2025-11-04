'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';

// Image URLs
const imgLine1 = "/Vector.svg";
const imgLine9 = "/Vector.svg";
const imgX = "/Vector.svg";
const imgIcon = "/Vector.svg";
const imgGroup2085663257 = "/Vector.svg";
const imgLine28 = "/Vector.svg";
const imgLine30 = "/Vector.svg";
const imgX1 = "/Vector.svg";
const imgLine36 = "/Vector.svg";
const imgRectangle21 = "/Vector.svg";

// Project Sidebar Component
const ProjectSidebar: React.FC = () => {
  const pathname = usePathname();
  
  return (
    <aside className="fixed left-0 top-0 h-screen bg-bg-dark w-sidebar transition-all duration-300 z-20 md:w-sidebar-sm lg:w-sidebar hidden md:flex flex-col">
      <div className="relative flex flex-col h-full py-6 px-4 overflow-y-auto">
        {/* Logo Container */}
        <div className="mb-6 flex-shrink-0 h-12 w-12 ml-2">
          <img
            alt="HackX Logo"
            className="block w-full h-full object-contain"
            src="/Logo Container.svg"
          />
        </div>

        {/* Dashboard Container - Project specific */}
        <div className="flex flex-col gap-4 mb-6 relative pb-6">
          {/* Overview */}
          <Link href="/dashboard/projects/create" className={`relative py-2 px-1 block ${pathname === '/dashboard/projects/create' ? '' : ''}`}>
            {pathname === '/dashboard/projects/create' && (
              <div className="absolute left-1 right-1 top-0 bottom-0 bg-primary opacity-20 rounded-md"></div>
            )}
            <div className="relative flex gap-2 items-center px-2">
              <div className="w-4 h-4 relative shrink-0">
                <img alt="" className="block w-full h-full" src="/Vector.svg" />
              </div>
              <p className={`text-sm ${pathname === '/dashboard/projects/create' ? 'font-semibold text-primary' : 'font-normal text-text-secondary'}`}>Overview</p>
            </div>
          </Link>
          {/* Tech Stack - with highlight background if on /tech-stack */}
          <Link href="/dashboard/projects/create/tech-stack" className={`relative py-2 px-1 block ${pathname === '/dashboard/projects/create/tech-stack' ? '' : ''}`}>
            {pathname === '/dashboard/projects/create/tech-stack' && (
              <div className="absolute left-1 right-1 top-0 bottom-0 bg-primary opacity-20 rounded-md"></div>
            )}
            <div className="relative flex gap-2 items-center px-2">
              <div className="w-4 h-4 relative shrink-0">
                <img alt="" className="block w-full h-full" src="/Vector.svg" />
              </div>
              <p className={`text-sm ${pathname === '/dashboard/projects/create/tech-stack' ? 'font-semibold text-primary' : 'font-normal text-text-secondary'}`}>Tech Stack</p>
            </div>
          </Link>
          {/* Hackathon - with highlight background if on /hackathon */}
          <Link href="/dashboard/projects/create/hackathon" className={`relative py-2 px-1 block ${pathname === '/dashboard/projects/create/hackathon' ? '' : ''}`}>
            {pathname === '/dashboard/projects/create/hackathon' && (
              <div className="absolute left-1 right-1 top-0 bottom-0 bg-primary opacity-20 rounded-md"></div>
            )}
            <div className="relative flex gap-2 items-center px-2">
              <div className="w-4 h-4 relative shrink-0">
                <img alt="" className="block w-full h-full" src="/Vector.svg" />
              </div>
              <p className={`text-sm ${pathname === '/dashboard/projects/create/hackathon' ? 'font-semibold text-primary' : 'font-normal text-text-secondary'}`}>Hackathon</p>
            </div>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default function TechStackPage() {
  const line1Ref = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    githubLink: '',
    demoVideo: '',
    selectedTags: ['React', 'Next', 'Web3'] as string[],
    newTag: '',
  });

  const availableTags = ['React', 'Next', 'Vue', 'Web3', 'Ethers', 'Node', 'Java', 'Go', 'Python', 'Solidity', 'Rust', 'Move'];

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

  const handleTagToggle = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      selectedTags: prev.selectedTags.includes(tag)
        ? prev.selectedTags.filter(t => t !== tag)
        : [...prev.selectedTags, tag],
    }));
  };

  const handleRemoveTag = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      selectedTags: prev.selectedTags.filter(t => t !== tag),
    }));
  };

  const handleAddNewTag = () => {
    if (formData.newTag.trim() && !formData.selectedTags.includes(formData.newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        selectedTags: [...prev.selectedTags, prev.newTag.trim()],
        newTag: '',
      }));
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddNewTag();
    }
  };

  return (
    <div className="bg-bg-dark min-h-screen w-full flex relative">
      <ProjectSidebar />

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
            {/* Top Actions */}
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <Link href="/dashboard/projects/create" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                <div className="w-5 h-5 relative">
                  <img alt="x" className="block w-full h-full" src={imgX} />
                </div>
                <span className="text-sm md:text-base">Save project draft & quit</span>
              </Link>

              <div className="flex items-center gap-4">
                <p className="text-[#f44e4e] text-sm md:text-base font-medium">40% completed</p>
                <button className="bg-primary opacity-40 hover:opacity-60 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-bold text-sm md:text-base transition-opacity flex items-center justify-center">
                  Create Project
                </button>
              </div>
            </div>

            {/* Page Title */}
            <h1 className="text-white text-xl md:text-2xl font-bold mb-8 md:mb-10 text-center">
              Create New Project
            </h1>

            {/* Progress Bar */}
            <div className="w-full max-w-[401px] h-1 mb-8 md:mb-10">
              <img alt="progress" className="block w-full h-full" src={imgRectangle21} />
            </div>

            {/* Form */}
            <div className="flex flex-col gap-8 md:gap-10">
              {/* GitHub Link */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-normal">Github Link</label>
                <input
                  type="text"
                  value={formData.githubLink}
                  onChange={(e) => handleInputChange('githubLink', e.target.value)}
                  placeholder="https://"
                  className="bg-bg-darker border border-border-dark rounded-lg h-16 px-4 text-white text-lg outline-none focus:border-primary transition-colors placeholder:opacity-40 placeholder:text-white"
                />
              </div>

              {/* Demo Video */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-normal">Demo Video</label>
                <div className="relative bg-bg-darker border border-border-dark rounded-lg h-[302px] w-full max-w-[535px] flex items-center justify-center">
                  {/* Diagonal lines */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-[250px] h-px bg-border-dark rotate-[331deg] transform origin-center" style={{ top: 'calc(50% - 80px)', left: 'calc(50% - 125px)' }}>
                      <img alt="line" className="block w-full h-full" src={imgLine28} />
                    </div>
                    <div className="absolute w-[250px] h-px bg-border-dark rotate-[209deg] transform origin-center scale-y-[-1]" style={{ top: 'calc(50% - 80px)', left: 'calc(50% - 125px)' }}>
                      <img alt="line" className="block w-full h-full" src={imgLine30} />
                    </div>
                    <div className="absolute w-[250px] h-px bg-border-dark rotate-[331deg] transform origin-center" style={{ top: 'calc(50% + 80px)', left: 'calc(50% - 125px)' }}>
                      <img alt="line" className="block w-full h-full" src={imgLine28} />
                    </div>
                    <div className="absolute w-[250px] h-px bg-border-dark rotate-[209deg] transform origin-center scale-y-[-1]" style={{ top: 'calc(50% + 80px)', left: 'calc(50% - 125px)' }}>
                      <img alt="line" className="block w-full h-full" src={imgLine30} />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="relative z-10 flex gap-4">
                    <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-bold text-sm flex items-center gap-2 transition-colors">
                      <div className="w-3.5 h-3.5 relative rotate-90">
                        <img alt="icon" className="block w-full h-full" src={imgIcon} />
                      </div>
                      <span>Upload Video</span>
                    </button>
                    <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-bold text-sm flex items-center gap-2 transition-colors">
                      <div className="w-3.5 h-3.5 relative rotate-90">
                        <img alt="icon" className="block w-full h-full" src={imgGroup2085663257} />
                      </div>
                      <span>Add Video Link</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-col gap-3.5">
                <p className="text-white text-base font-normal">Tech Stack Tags</p>
                
                {/* Selected Tags and Input */}
                <div className="flex flex-wrap gap-2">
                  {formData.selectedTags.map((tag) => (
                    <div
                      key={tag}
                      className="bg-bg-darker border border-border-dark rounded-lg h-[51px] px-4 py-3 flex items-center gap-2 shrink-0"
                    >
                      <button
                        onClick={() => handleRemoveTag(tag)}
                        className="w-4 h-4 relative shrink-0 hover:opacity-80 transition-opacity"
                      >
                        <img alt="remove" className="block w-full h-full" src={imgX1} />
                      </button>
                      <p className="text-white text-base">{tag}</p>
                    </div>
                  ))}
                  {/* Add New Tag Input */}
                  <div className="bg-bg-darker border border-border-dark rounded-lg h-[51px] px-4 py-3 flex items-center gap-2 flex-1 min-w-[200px]">
                    <input
                      type="text"
                      value={formData.newTag}
                      onChange={(e) => handleInputChange('newTag', e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Enter Tag"
                      className="flex-1 bg-transparent border-0 text-white text-base outline-none placeholder:opacity-40 placeholder:text-white"
                    />
                    <div className="w-[17px] h-px relative">
                      <img alt="divider" className="block w-full h-full" src={imgLine36} />
                    </div>
                  </div>
                </div>

                {/* Available Tags */}
                <div className="flex flex-col gap-3.5">
                  <div className="flex flex-wrap gap-3.5">
                    {availableTags.slice(0, 5).map((tag) => (
                      <button
                        key={tag}
                        onClick={() => handleTagToggle(tag)}
                        disabled={formData.selectedTags.includes(tag)}
                        className={`border rounded-lg px-6 py-4 text-white text-base hover:border-primary transition-colors flex items-center justify-center ${
                          formData.selectedTags.includes(tag)
                            ? 'border-border-darker opacity-50 cursor-not-allowed'
                            : 'border-border-darker hover:border-primary'
                        }`}
                      >
                        + {tag}
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3.5">
                    {availableTags.slice(5, 10).map((tag) => (
                      <button
                        key={tag}
                        onClick={() => handleTagToggle(tag)}
                        disabled={formData.selectedTags.includes(tag)}
                        className={`border rounded-lg px-6 py-4 text-white text-base hover:border-primary transition-colors flex items-center justify-center ${
                          formData.selectedTags.includes(tag)
                            ? 'border-border-darker opacity-50 cursor-not-allowed'
                            : 'border-border-darker hover:border-primary'
                        }`}
                      >
                        + {tag}
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3.5">
                    {availableTags.slice(10).map((tag) => (
                      <button
                        key={tag}
                        onClick={() => handleTagToggle(tag)}
                        disabled={formData.selectedTags.includes(tag)}
                        className={`border rounded-lg px-6 py-4 text-white text-base hover:border-primary transition-colors flex items-center justify-center ${
                          formData.selectedTags.includes(tag)
                            ? 'border-border-darker opacity-50 cursor-not-allowed'
                            : 'border-border-darker hover:border-primary'
                        }`}
                      >
                        + {tag}
                      </button>
                    ))}
                    {/* Add New Tag Button */}
                    <button
                      onClick={handleAddNewTag}
                      className="border border-border-darker rounded-lg px-6 py-4 text-white text-base hover:border-primary transition-colors flex-1 min-w-[200px] flex items-center justify-center"
                    >
                      + Add New Tag
                    </button>
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

