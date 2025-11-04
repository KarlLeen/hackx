'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Image URLs
const imgMetamaskLogoPng = "http://localhost:3845/assets/c5416aeed5de3809166abafac8a489d5175e76ac.png";
const imgImage = "http://localhost:3845/assets/1a9133248add48a2881f12ab03551ef8a31e5ca5.png";
const imgCoinbaseIconPng = "http://localhost:3845/assets/c2ab0992ab80f1a96d7e985b4fc6533462550d4f.png";
const imgRabbyWalletIconJpeg = "http://localhost:3845/assets/e75e2436e5c7e425aa5449416e640968bae552e9.png";
const imgImgSqIrr7FzdlNjjEiG0SzAv2 = "http://localhost:3845/assets/6862ed372d7bc3b0eb9db2d03a5f38f533473ef5.png";
const imgLine7 = "http://localhost:3845/assets/440f370ed113575d9e380e6a6989a98175384be8.svg";
const imgVector2 = "http://localhost:3845/assets/eb9e074fb462b261625b3518bf7b756dce4ac714.svg";
const imgImgSqIrr7FzdlNjjEiG0SzAv1 = "http://localhost:3845/assets/9514c3af79c016f8fd2db738db4164c1a9e0e29b.svg";

export default function LoginPage() {
  const [email, setEmail] = useState('');

  return (
    <div className="bg-black min-h-screen w-full flex relative">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-12 md:py-16 relative z-10">
        <div className="w-full max-w-[466px]">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8 md:mb-12">
            <div className="h-8 w-12 relative">
              <img alt="logo" className="block w-full h-full object-contain" src="/Logo Container.svg" />
            </div>
          </div>

          {/* Welcome Title */}
          <h1 className="text-white text-3xl md:text-4xl font-medium mb-6 md:mb-8">
            Welcome!
          </h1>

          {/* Description */}
          <p className="text-white text-base md:text-lg opacity-60 text-center mb-8 md:mb-12 leading-relaxed">
            Hack X is a place to take part in a hackathon, create and manage one or to judge one.
            <br />
            Become a part of HackX community
          </p>

          {/* Divider Lines */}
          <div className="relative mb-6 md:mb-8">
            <div className="absolute left-0 top-1/2 w-[208px] h-px">
              <img alt="divider" className="block w-full h-full" src={imgLine7} />
            </div>
            <p className="text-white text-xs opacity-20 text-center tracking-wider">OR</p>
            <div className="absolute right-0 top-1/2 w-[208px] h-px">
              <img alt="divider" className="block w-full h-full" src={imgLine7} />
            </div>
          </div>

          {/* Email Input */}
          <div className="mb-6 md:mb-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full bg-bg-darker border border-border-dark rounded-lg h-16 px-4 text-text-secondary text-base outline-none focus:border-primary transition-colors placeholder:opacity-40 placeholder:text-text-secondary"
            />
          </div>

          {/* Wallet Options */}
          <div className="flex flex-col gap-2 mb-8 md:mb-12">
            <button className="bg-[#242425] hover:bg-[#2a2a2b] border border-[#242425] rounded-lg h-16 px-6 flex items-center gap-4 transition-colors">
              <div className="w-6 h-6 relative shrink-0">
                <img alt="Metamask" className="block w-full h-full object-contain" src={imgMetamaskLogoPng} />
              </div>
              <p className="text-text-secondary text-base font-medium">Metamask Wallet</p>
            </button>
            <button className="bg-[#242425] hover:bg-[#2a2a2b] border border-[#242425] rounded-lg h-16 px-6 flex items-center gap-4 transition-colors">
              <div className="w-6 h-6 relative shrink-0 rounded">
                <img alt="WalletConnect" className="block w-full h-full object-cover rounded" src={imgImage} />
              </div>
              <p className="text-text-secondary text-base font-medium">WalletConnect</p>
            </button>
            <button className="bg-[#242425] hover:bg-[#2a2a2b] border border-[#242425] rounded-lg h-16 px-6 flex items-center gap-4 transition-colors">
              <div className="w-6 h-6 relative shrink-0 rounded">
                <img alt="Coinbase" className="block w-full h-full object-contain rounded" src={imgCoinbaseIconPng} />
              </div>
              <p className="text-text-secondary text-base font-medium">Coinbase Wallet</p>
            </button>
            <button className="bg-[#242425] hover:bg-[#2a2a2b] border border-[#242425] rounded-lg h-16 px-6 flex items-center gap-4 transition-colors">
              <div className="w-6 h-6 relative shrink-0 rounded">
                <img alt="Rabby" className="block w-full h-full object-contain rounded" src={imgRabbyWalletIconJpeg} />
              </div>
              <p className="text-text-secondary text-base font-medium">Rabby Wallet</p>
            </button>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-white opacity-40">
            <Link href="/privacy" className="hover:opacity-60 transition-opacity">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:opacity-60 transition-opacity">
              Terms of use
            </Link>
            <Link href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
              x.com
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-bg-dark rounded-l-2xl">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-20">
            <img alt="background" className="absolute inset-0 w-full h-full object-cover" src={imgVector2} />
          </div>
          {/* Main image with mask */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-[1058px] max-h-[1313px]">
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{
                  maskImage: `url('${imgImgSqIrr7FzdlNjjEiG0SzAv1}')`,
                  WebkitMaskImage: `url('${imgImgSqIrr7FzdlNjjEiG0SzAv1}')`,
                  maskSize: 'cover',
                  maskPosition: 'center',
                  maskRepeat: 'no-repeat',
                }}
              >
                <img 
                  alt="login illustration" 
                  className="absolute inset-0 w-full h-full object-cover"
                  src={imgImgSqIrr7FzdlNjjEiG0SzAv2} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

