'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

// Image URLs
const imgLine1 = "http://localhost:3845/assets/df1d21485e699bf1889d4c10443f439e65d15fe5.svg";
const imgLine9 = "http://localhost:3845/assets/94b6c6a7cf479f5407ae1b8b4ba055c7d02103f5.svg";
const imgX = "http://localhost:3845/assets/a195f9869ab9283244e1ef1fdbb2a593ce435376.svg";
const imgLink = "http://localhost:3845/assets/d7a1b3ba44aadbc744de3e0ba5d7ab260ba3a220.svg";
const imgRectangle21 = "http://localhost:3845/assets/f76b6924dc8daa3e8742e922f54805badc8635eb.svg";
const imgLine34 = "http://localhost:3845/assets/d88efbaaab984cb6132485d589cb1a69fd2e1550.svg";
const imgLine35 = "http://localhost:3845/assets/710be7a5c90a93eb2924f9dd58776ba5621760ce.svg";
const imgLine36 = "http://localhost:3845/assets/8aa98f229232c462cb7fee926046697c8ac4f013.svg";
const imgVector = "http://localhost:3845/assets/e72245bdfbed5540d98385f345c472455b6597b1.svg";
const imgVector1 = "http://localhost:3845/assets/e5e7ab51865f9053d33ac5a74c0e986476ab5442.svg";
const imgUser = "http://localhost:3845/assets/d66f86862427f8435f9a833fb6cde6223518db6a.svg";
const imgUser1 = "http://localhost:3845/assets/8183fcc651646fc666bd83f5994bac67284a5078.svg";
const imgEllipse15 = "http://localhost:3845/assets/3f9458a93ba214624ea7a33c29bcdd67543645df.png";
const imgEllipse16 = "http://localhost:3845/assets/75b735215efa8e7bd2f1a24f4ccc41294111ddcc.png";

interface Judge {
  id: string;
  email: string;
  avatar: string;
  userIcon: string;
  status: 'Judge' | 'Invite pending';
  vectorIcon: string;
}

export default function HostJudgesPage() {
  const line1Ref = useRef<HTMLDivElement>(null);
  const [inviteLink, setInviteLink] = useState('https://hackx.com/invite/aoiudn...1231hf');
  const [email, setEmail] = useState('');

  // Mock judges data
  const [judges, setJudges] = useState<Judge[]>([
    {
      id: '1',
      email: 'user@example.com',
      avatar: imgEllipse16,
      userIcon: imgUser1,
      status: 'Judge',
      vectorIcon: imgVector1,
    },
    {
      id: '2',
      email: 'judgemail@exmpl.com',
      avatar: imgEllipse16,
      userIcon: imgUser1,
      status: 'Judge',
      vectorIcon: imgVector1,
    },
    {
      id: '3',
      email: 'usernamemail@domain.com',
      avatar: imgEllipse15,
      userIcon: imgUser,
      status: 'Invite pending',
      vectorIcon: imgVector,
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

  const handleCopyLink = () => {
    navigator.clipboard.writeText(inviteLink);
    // You can add a toast notification here
  };

  const handleSendInvite = () => {
    if (email) {
      // Add new judge to list
      const newJudge: Judge = {
        id: Date.now().toString(),
        email: email,
        avatar: imgEllipse16,
        userIcon: imgUser1,
        status: 'Invite pending',
        vectorIcon: imgVector,
      };
      setJudges([...judges, newJudge]);
      setEmail('');
    }
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
            <div className="w-full max-w-[733px] h-1 mb-8 md:mb-10">
              <img alt="progress" className="block w-full h-full" src={imgRectangle21} />
            </div>

            {/* Main Content Layout */}
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 relative">
              {/* Left Side - Judges List */}
              <div className="flex-1 max-w-[486px]">
                {/* Judges List */}
                <div className="flex flex-col gap-4">
                  {judges.map((judge, index) => (
                    <div key={judge.id} className="flex items-center justify-between gap-4">
                      {/* Judge Info */}
                      <div className="flex items-center gap-3 flex-1">
                        <div className="relative w-8 h-8 flex-shrink-0">
                          <img
                            alt={judge.email}
                            className="block w-full h-full object-cover rounded-full"
                            src={judge.avatar}
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-4 h-4 relative">
                              <img alt="user" className="block w-full h-full" src={judge.userIcon} />
                            </div>
                          </div>
                        </div>
                        <p className="text-white text-sm opacity-60">{judge.email}</p>
                      </div>

                      {/* Status */}
                      <div className="flex items-center gap-2">
                        <div className="w-3.5 h-2 relative">
                          <img alt="vector" className="block w-full h-full" src={judge.vectorIcon} />
                        </div>
                        <p className="text-white text-sm text-right opacity-60 whitespace-nowrap">{judge.status}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px mt-8 mb-8">
                  <img alt="divider" className="block w-full h-full" src={imgLine36} />
                </div>
              </div>

              {/* Vertical Divider - between left and right sections */}
              <div className="hidden lg:block absolute left-[486px] top-0 bottom-0 w-[248px] h-px rotate-90 origin-center">
                <div className="relative w-[248px] h-px">
                  <img alt="divider" className="block w-full h-full" src={imgLine34} />
                </div>
              </div>

              {/* Right Side - Invite Section */}
              <div className="flex-1 max-w-[486px]">
                {/* Invite Title */}
                <div className="mb-4">
                  <h2 className="text-white text-base md:text-lg font-medium mb-2">
                    Invite to judge hackathon
                  </h2>
                  <p className="text-white text-sm opacity-60">
                    Invite judges via invite link or email
                  </p>
                </div>

                {/* Invite Link Section */}
                <div className="flex gap-2 mb-4">
                  <div className="flex-1 bg-bg-darker border border-border-dark rounded-lg h-[42px] px-4 flex items-center gap-2 min-w-0">
                    <div className="w-4 h-4 relative shrink-0">
                      <img alt="link" className="block w-full h-full" src={imgLink} />
                    </div>
                    <p className="text-white text-sm opacity-60 truncate">{inviteLink}</p>
                  </div>
                  <button
                    onClick={handleCopyLink}
                    className="bg-[#202328] hover:bg-[#2a2d33] px-3 py-2 rounded-lg transition-colors shrink-0"
                  >
                    <span className="text-primary text-sm">Copy Link</span>
                  </button>
                </div>

                {/* Divider with "or" */}
                <div className="relative my-6">
                  <div className="absolute left-0 right-0 top-1/2 h-px">
                    <img alt="divider" className="block w-full h-full" src={imgLine35} />
                  </div>
                  <p className="text-white text-sm opacity-60 text-center relative z-10 bg-bg-dark px-2 inline-block">or</p>
                </div>

                {/* Email Invite Section */}
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                    className="flex-1 bg-bg-darker border border-border-dark rounded-lg h-[42px] px-4 text-white text-sm outline-none focus:border-primary transition-colors placeholder:opacity-60 placeholder:text-white"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSendInvite();
                      }
                    }}
                  />
                  <button
                    onClick={handleSendInvite}
                    className="bg-[#202328] hover:bg-[#2a2d33] px-3 py-2 rounded-lg transition-colors shrink-0"
                  >
                    <span className="text-primary text-sm">Send Invite</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

