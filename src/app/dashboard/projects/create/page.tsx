'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';

// Image URLs
const imgLine1 = "http://localhost:3845/assets/c7707a9d0ba7d4e9e65ba34bebdbc892f87f04ad.svg";
const imgLine9 = "http://localhost:3845/assets/94b6c6a7cf479f5407ae1b8b4ba055c7d02103f5.svg";
const imgX = "http://localhost:3845/assets/4df8a0c12cf2499efefbcbeae2ab37513da90590.svg";
const imgImage = "http://localhost:3845/assets/895a6ec9a1b757534bb68afb69d7a30cab09b093.svg";
const imgIcon = "http://localhost:3845/assets/eb8af76b2abed5952f8dda8eb9eb3cea74495147.svg";
const imgGroup2085663257 = "http://localhost:3845/assets/f4ddcb8ff3ee2bd18036f55200c68b27cfdc7330.svg";
const imgLine28 = "http://localhost:3845/assets/52e44c30084d3198c25a6c26fcfab4b6245d089e.svg";
const imgLine30 = "http://localhost:3845/assets/58bf7a82d3a30cd9205fa9f2df6a0eed0d1c7c64.svg";
const imgIcon1 = "http://localhost:3845/assets/7c40c95cd9efb1d343d1f5fe8a1c68d798c5e711.svg";
const imgIcon2 = "http://localhost:3845/assets/82a8b1265274aa2740eb7ffb367928c01b10cf9c.svg";
const imgIcon3 = "http://localhost:3845/assets/ae1f142afef927e12d004bf1457bad5be31debe1.svg";
const imgBold = "http://localhost:3845/assets/60b34fc5d7d1842e1d50e8594ef4fa05988536e9.svg";
const imgItalic = "http://localhost:3845/assets/019bf95e001ccf6aaec9f32cb5986986d3a531fe.svg";
const imgUnderline = "http://localhost:3845/assets/6b01cdac4df640d9cb9d780959f870c0cf066e1f.svg";
const imgStrikethrough = "http://localhost:3845/assets/acdf3cfc9a664c6932c0e340a127aaf6041527cc.svg";
const imgIcon4 = "http://localhost:3845/assets/da62e9c74b49e375371432498dff2e0b04a6fa1c.svg";
const imgIcon5 = "http://localhost:3845/assets/c429387627ce67766e321f05cab1487c93ef9e83.svg";
const imgTextColor = "http://localhost:3845/assets/5e2b0be33a0532332c8358266b9ce33fd1685747.svg";
const imgLink = "http://localhost:3845/assets/4f761e4a9785c159fda4a33625535587a9543007.svg";
const imgImage1 = "http://localhost:3845/assets/1f83510af987455b9e18fc099ab418ba14ab54b3.svg";
const imgIcon6 = "http://localhost:3845/assets/cc1cbd1a6dcd7bfb99483c48a3daa875499a46ac.svg";
const imgIcon7 = "http://localhost:3845/assets/01f7b5402d16456b96fdf428fa98bee1bb74fbca.svg";
const imgIcon8 = "http://localhost:3845/assets/8804cf3a8e632ecd5c1ed34b2562c5e7dc7fa2cb.svg";
const imgLine32 = "http://localhost:3845/assets/0f852d3bdfd68cd0b32f083fbb89f11b67dcf97b.svg";
const imgRectangle21 = "http://localhost:3845/assets/a570366e574a5d018f8569a582bd98c2a4b2fa0d.svg";

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
          {/* Overview - with highlight background */}
          <Link href="/dashboard/projects/create" className="relative py-2 px-1 block">
            {pathname === '/dashboard/projects/create' && (
              <div className="absolute left-1 right-1 top-0 bottom-0 bg-primary opacity-20 rounded-md"></div>
            )}
            <div className="relative flex gap-2 items-center px-2">
              <div className="w-4 h-4 relative shrink-0">
                <img alt="" className="block w-full h-full" src="http://localhost:3845/assets/6c09dfa991f48345d036992b86754bbd3f049ddf.svg" />
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
                <img alt="" className="block w-full h-full" src="http://localhost:3845/assets/56b9005476370aad1f43c7f8c294c7e1cd134b98.svg" />
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
                <img alt="" className="block w-full h-full" src="http://localhost:3845/assets/19fc70a1cb6b0d099d8efd941de16deb30bf796f.svg" />
              </div>
              <p className={`text-sm ${pathname === '/dashboard/projects/create/hackathon' ? 'font-semibold text-primary' : 'font-normal text-text-secondary'}`}>Hackathon</p>
            </div>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default function CreateProjectPage() {
  const line1Ref = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    projectName: '',
    projectIntro: '',
    pitchVideo: '',
    sectors: [] as string[],
    progressDuringHackathon: '',
    fundraisingStatus: '',
    fullDescription: '',
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

  const handleSectorToggle = (sector: string) => {
    setFormData(prev => ({
      ...prev,
      sectors: prev.sectors.includes(sector)
        ? prev.sectors.filter(s => s !== sector)
        : [...prev.sectors, sector],
    }));
  };

  const availableSectors = ['SocialFi', 'DeFI', 'NFT', 'Infra', 'Gaming', 'DAO', 'RWA', 'AI', 'Other'];

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
              <Link href="/dashboard" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                <div className="w-5 h-5 relative">
                  <img alt="x" className="block w-full h-full" src={imgX} />
                </div>
                <span className="text-sm md:text-base">Save project draft & quit</span>
              </Link>

              <div className="flex items-center gap-4">
                <p className="text-[#f44e4e] text-sm md:text-base font-medium">0% completed</p>
                <button className="bg-primary opacity-40 hover:opacity-60 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-bold text-sm md:text-base transition-opacity">
                  Create Project
                </button>
              </div>
            </div>

            {/* Page Title */}
            <h1 className="text-white text-xl md:text-2xl font-bold mb-8 md:mb-10 text-center">
              Create New Project
            </h1>

            {/* Progress Bar */}
            <div className="w-full max-w-[119px] h-1 mb-8 md:mb-10">
              <img alt="progress" className="block w-full h-full" src={imgRectangle21} />
            </div>

            {/* Form */}
            <div className="flex flex-col gap-8 md:gap-10">
              {/* Project Logo */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-normal">Project Logo</label>
                <div className="relative w-40 h-40 bg-bg-darker border border-border-dark rounded-lg flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center text-center">
                    <div className="w-6 h-6 relative mb-2">
                      <img alt="image upload" className="block w-full h-full" src={imgImage} />
                    </div>
                    <p className="text-[#738b9f] text-xs leading-tight mb-1">
                      Drag'n'drop project
                    </p>
                    <p className="text-[#738b9f] text-xs leading-tight mb-1">
                      logo here or:
                    </p>
                    <button className="text-primary text-sm font-semibold hover:text-primary/80 transition-colors">
                      Click to browse
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Name */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-normal">Project Name</label>
                <input
                  type="text"
                  value={formData.projectName}
                  onChange={(e) => handleInputChange('projectName', e.target.value)}
                  placeholder="Enter project name"
                  className="bg-bg-darker border border-border-dark rounded-lg h-16 px-4 text-white text-lg outline-none focus:border-primary transition-colors placeholder:opacity-40 placeholder:text-white"
                />
              </div>

              {/* Project Intro */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-normal">Project Intro</label>
                <textarea
                  value={formData.projectIntro}
                  onChange={(e) => handleInputChange('projectIntro', e.target.value)}
                  placeholder="Short project intro"
                  className="bg-bg-darker border border-border-dark rounded-lg h-[140px] px-4 py-3 text-white text-base outline-none focus:border-primary transition-colors placeholder:opacity-40 placeholder:text-white resize-none"
                />
              </div>

              {/* Pitch Video */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-normal">
                  Pitch Video <span className="italic text-[#797b7e]">(optional)</span>
                </label>
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

              {/* Sector */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-normal">Sector</label>
                <div className="flex flex-col gap-3.5">
                  <div className="flex flex-wrap gap-3.5">
                    {availableSectors.slice(0, 5).map((sector) => (
                      <button
                        key={sector}
                        onClick={() => handleSectorToggle(sector)}
                        className={`border border-[#738b9f] rounded-lg px-6 py-4 text-white text-base hover:border-primary transition-colors ${
                          formData.sectors.includes(sector) ? 'bg-primary/20 border-primary' : ''
                        }`}
                      >
                        + {sector}
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3.5">
                    {availableSectors.slice(5).map((sector) => (
                      <button
                        key={sector}
                        onClick={() => handleSectorToggle(sector)}
                        className={`border border-[#738b9f] rounded-lg px-6 py-4 text-white text-base hover:border-primary transition-colors ${
                          formData.sectors.includes(sector) ? 'bg-primary/20 border-primary' : ''
                        }`}
                      >
                        + {sector}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress During Hackathon */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-normal">Progress During Hackathon</label>
                <textarea
                  value={formData.progressDuringHackathon}
                  onChange={(e) => handleInputChange('progressDuringHackathon', e.target.value)}
                  placeholder="Describe what you have accomplished during the hackathon"
                  className="bg-bg-darker border border-border-dark rounded-lg h-[140px] px-4 py-3 text-white text-base outline-none focus:border-primary transition-colors placeholder:opacity-40 placeholder:text-white resize-none"
                />
              </div>

              {/* Fundraising Status */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-normal">Fundraising Status</label>
                <textarea
                  value={formData.fundraisingStatus}
                  onChange={(e) => handleInputChange('fundraisingStatus', e.target.value)}
                  placeholder="Have you raised any money already? How much do you need to finish the product? Etc."
                  className="bg-bg-darker border border-border-dark rounded-lg h-[140px] px-4 py-3 text-white text-base outline-none focus:border-primary transition-colors placeholder:opacity-40 placeholder:text-white resize-none"
                />
              </div>

              {/* Full Description */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-normal">Full Description</label>
                <div className="bg-bg-darker border border-border-dark rounded-lg h-[550px] flex flex-col">
                  {/* Text Editor Toolbar */}
                  <div className="flex items-center justify-between p-4 border-b border-border-dark">
                    {/* Text Format */}
                    <div className="flex items-center gap-3">
                      <div className="bg-[#2b3740] rounded px-2 py-1 flex items-center gap-2">
                        <span className="text-white text-base font-medium">Paragraph text</span>
                        <div className="w-7 h-7 relative">
                          <img alt="icon" className="block w-full h-full" src={imgIcon1} />
                        </div>
                      </div>
                      <div className="bg-[#2b3740] rounded flex items-center gap-2 h-9">
                        <button className="w-9 h-9 flex items-center justify-center">
                          <div className="w-5 h-5 relative">
                            <img alt="icon" className="block w-full h-full" src={imgIcon2} />
                          </div>
                        </button>
                        <span className="text-white text-base font-medium px-2">14</span>
                        <button className="w-9 h-9 flex items-center justify-center">
                          <div className="w-5 h-5 relative">
                            <img alt="icon" className="block w-full h-full" src={imgIcon3} />
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Text Style */}
                    <div className="flex items-center gap-3">
                      <button className="w-7 h-7 relative">
                        <img alt="bold" className="block w-full h-full" src={imgBold} />
                      </button>
                      <button className="w-7 h-7 relative">
                        <img alt="italic" className="block w-full h-full" src={imgItalic} />
                      </button>
                      <button className="w-7 h-7 relative">
                        <img alt="underline" className="block w-full h-full" src={imgUnderline} />
                      </button>
                      <button className="w-7 h-7 relative">
                        <img alt="strikethrough" className="block w-full h-full" src={imgStrikethrough} />
                      </button>
                      <div className="flex items-center">
                        <button className="w-7 h-7 relative">
                          <img alt="icon" className="block w-full h-full" src={imgIcon4} />
                        </button>
                        <button className="w-7 h-7 relative">
                          <img alt="icon" className="block w-full h-full" src={imgIcon5} />
                        </button>
                      </div>
                      <button className="w-7 h-7 relative">
                        <img alt="text color" className="block w-full h-full" src={imgTextColor} />
                      </button>
                      <div className="w-3 h-7 border-r border-[#738b9f] opacity-40"></div>
                    </div>

                    {/* Attachment */}
                    <div className="flex items-center gap-3">
                      <button className="w-7 h-7 relative">
                        <img alt="link" className="block w-full h-full" src={imgLink} />
                      </button>
                      <button className="w-7 h-7 relative">
                        <img alt="image" className="block w-full h-full" src={imgImage1} />
                      </button>
                      <div className="w-3 h-7 border-r border-[#738b9f] opacity-40"></div>
                    </div>

                    {/* Paragraph */}
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5">
                          <button className="w-7 h-7 relative">
                            <img alt="icon" className="block w-full h-full" src={imgIcon6} />
                          </button>
                          <button className="w-7 h-7 relative">
                            <img alt="icon" className="block w-full h-full" src={imgIcon5} />
                          </button>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <button className="w-7 h-7 relative">
                            <img alt="icon" className="block w-full h-full" src={imgIcon7} />
                          </button>
                          <button className="w-7 h-7 relative">
                            <img alt="icon" className="block w-full h-full" src={imgIcon5} />
                          </button>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <button className="w-7 h-7 relative">
                            <img alt="icon" className="block w-full h-full" src={imgIcon8} />
                          </button>
                          <button className="w-7 h-7 relative">
                            <img alt="icon" className="block w-full h-full" src={imgIcon5} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px">
                    <img alt="divider" className="block w-full h-full" src={imgLine32} />
                  </div>

                  {/* Text Editor Content */}
                  <textarea
                    value={formData.fullDescription}
                    onChange={(e) => handleInputChange('fullDescription', e.target.value)}
                    className="flex-1 bg-transparent border-0 px-4 py-3 text-white text-base outline-none resize-none"
                    placeholder=""
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

