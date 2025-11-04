'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

// Image URLs
const imgLine1 = "http://localhost:3845/assets/df1d21485e699bf1889d4c10443f439e65d15fe5.svg";
const imgLine9 = "http://localhost:3845/assets/c2166d7a118fbe0524d2f04202cebe7d7d794022.svg";
const imgX = "http://localhost:3845/assets/4df8a0c12cf2499efefbcbeae2ab37513da90590.svg";
const imgRectangle21 = "http://localhost:3845/assets/7b919d9bb0f96e59bd31a339f27a531a9343716b.svg";
const imgLine27 = "http://localhost:3845/assets/17bbb40ed6cdaf68cd5a12145d20d26203ad683b.svg";
const logoContainerSvg = "/Logo Container.svg";

interface RegisterPageProps {
  params: {
    id: string;
  };
}

export default function RegisterPage({ params }: RegisterPageProps) {
  const [formData, setFormData] = useState({
    fullName: 'Jack Dorcey',
    githubLink: 'https://github.com/jackjackbits/bitchat/tree/main?tab=',
    twitterLink: 'https://x.com/0xlungu',
    telegramHandle: '',
    wechatHandle: '',
  });

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
      <div className="fixed top-0 bottom-0 w-px z-30 pointer-events-none hidden md:block" style={{ left: 'clamp(60px, 8vw, 80px)' }}>
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

            {/* Hackathon Title */}
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 md:mb-8">
              Tech Fairness Hackathon
            </h1>

            {/* Quit Registration Button */}
            <div className="flex items-center gap-2 mb-8 md:mb-10">
              <Link href={`/hackathon/${params.id}`} className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                <div className="w-5 h-5 relative">
                  <img alt="x" className="block w-full h-full" src={imgX} />
                </div>
                <span className="text-sm md:text-base">Quit registration</span>
              </Link>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1 mb-8 md:mb-10">
              <img alt="progress" className="block w-full h-full" src={imgRectangle21} />
            </div>

            {/* Registration Form */}
            <div className="flex justify-center">
              <div className="w-full max-w-[437px]">
                {/* Title */}
                <h2 className="text-white text-xl md:text-2xl font-semibold text-center mb-4">
                  Register to hackathon!
                </h2>

                {/* Description */}
                <p className="text-white text-sm md:text-base opacity-60 text-center mb-8 leading-relaxed">
                  We need some of your info to join the hackathon.
                  <br />
                  We&apos;ll save it and add it automatically next time
                </p>

                {/* Form Fields */}
                <div className="flex flex-col gap-6 mb-8">
                  {/* Full Name */}
                  <div className="relative">
                    <label className="block opacity-60 text-white text-sm mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full bg-bg-darker border border-border-dark rounded-lg h-14 px-3 text-white text-base outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Github Link */}
                  <div className="relative">
                    <label className="block opacity-60 text-white text-sm mb-2">
                      Github Link
                    </label>
                    <input
                      type="text"
                      value={formData.githubLink}
                      onChange={(e) => handleInputChange('githubLink', e.target.value)}
                      className="w-full bg-bg-darker border border-border-dark rounded-lg h-14 px-3 text-white text-base outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Twitter Link */}
                  <div className="relative">
                    <label className="block opacity-60 text-white text-sm mb-2">
                      Twitter Link <span className="italic">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.twitterLink}
                      onChange={(e) => handleInputChange('twitterLink', e.target.value)}
                      className="w-full bg-bg-darker border border-border-dark rounded-lg h-14 px-3 text-white text-base outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Telegram Handle */}
                  <div className="relative">
                    <label className="block opacity-60 text-white text-sm mb-2">
                      Telegram Handle
                    </label>
                    <input
                      type="text"
                      value={formData.telegramHandle}
                      onChange={(e) => handleInputChange('telegramHandle', e.target.value)}
                      placeholder="Your Telegram Handle"
                      className="w-full bg-bg-darker border border-primary rounded-lg h-14 px-3 text-white text-base outline-none focus:border-primary transition-colors placeholder:opacity-40 placeholder:text-white"
                    />
                  </div>

                  {/* WeChat Handle */}
                  <div className="relative">
                    <label className="block opacity-60 text-white text-sm mb-2">
                      WeChat Handle
                    </label>
                    <input
                      type="text"
                      value={formData.wechatHandle}
                      onChange={(e) => handleInputChange('wechatHandle', e.target.value)}
                      placeholder="Your WeChat Handle"
                      className="w-full bg-bg-darker border border-border-dark rounded-lg h-14 px-3 text-white text-base outline-none focus:border-primary transition-colors placeholder:opacity-40 placeholder:text-white"
                    />
                  </div>
                </div>

                {/* Divider */}
                <div className="flex justify-center mb-8">
                  <div className="w-[18px] h-px rotate-90">
                    <img alt="divider" className="block w-full h-full" src={imgLine27} />
                  </div>
                </div>

                {/* Finish Registration Button */}
                <button className="w-full bg-primary hover:bg-primary/90 text-white px-4 py-4 md:py-5 rounded-lg font-semibold text-base md:text-lg transition-colors">
                  Finish Registration
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

