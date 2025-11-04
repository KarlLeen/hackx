'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

// Image URLs
const imgLine1 = "http://localhost:3845/assets/9fe7860903810d1463ec94add16342d67607475c.svg";
const imgLine9 = "http://localhost:3845/assets/c2166d7a118fbe0524d2f04202cebe7d7d794022.svg";
const imgVector2 = "http://localhost:3845/assets/e0c7f3ba84c1f9c5d5a0bebf100735b13142c730.svg";
const imgThumbsUp = "http://localhost:3845/assets/f093f0302a7365ff5030dba8702c653fc3f0a0fd.svg";
const imgGroup2085663279 = "http://localhost:3845/assets/05f711db6ce1785c2e1fb1156a11ef0acb3c5472.svg";
const imgSolanaSymbolPng = "http://localhost:3845/assets/a8140e1b13690138c87e52efa8d9d3e2317b3d86.png";
const imgSolanaSymbolPng1 = "http://localhost:3845/assets/1677a791c24911fe29a768b78fad65e4c9c96ee6.png";
const imgSolanaSymbolPng2 = "http://localhost:3845/assets/b112212b116160bc70922ea8cf0b9351782819f5.png";
const imgSolanaSymbolPng3 = "http://localhost:3845/assets/602253151f51307e062b03c20fd87d3ef0d4ce8a.png";
const imgSolanaSymbolPng4 = "http://localhost:3845/assets/a8bfdf07182f4b3d85195e1673216697c9dce727.png";
const imgSolanaSymbolPng5 = "http://localhost:3845/assets/59da3b3fddabcfabe261350a1cbaacb9dd745513.png";
const imgSolanaSymbolPng6 = "http://localhost:3845/assets/6982dbec8ca3a56849f9c7ad6b74dc1b3fb2b93a.png";
const imgSolanaSymbolPng7 = "http://localhost:3845/assets/764ed7e9432842a981dac95c091184e6e867291b.png";
const imgSolanaSymbolPng8 = "http://localhost:3845/assets/f15c7cfbe420a3d454959c67074df7bb91a35009.png";

interface Course {
  id: string;
  title: string;
  description: string;
  logo: string;
  logoBg: string;
  certification?: {
    by: string;
    type: 'certified' | 'in-progress';
  };
  tags: string[];
}

export default function CoursesPage() {
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

  const courses: Course[] = [
    {
      id: '1',
      title: 'Solana Ecosystem',
      description: 'Built with Rust, Solana is known for speed and low costs. You&apos;ll learn Solana basics, smart contracts with Rust and Anchor, plus NFT contracts and game development.',
      logo: imgSolanaSymbolPng,
      logoBg: 'bg-black',
      certification: { by: 'Solana Labs', type: 'certified' },
      tags: ['Rust', 'Beginner-friendly', 'Certificate'],
    },
    {
      id: '2',
      title: 'Mantle Blockchain',
      description: 'Mantle Network, a fast-growing Ethereum L2, offers a hands-on path to mastering Solidity. You&apos;ll progress from basic syntax to advanced projects like launching tokens, NFTs, and even a "CryptoKitty."',
      logo: imgSolanaSymbolPng1,
      logoBg: 'bg-black',
      certification: { by: 'Mantle', type: 'certified' },
      tags: ['Rust', 'Beginner-friendly', 'Certificate'],
    },
    {
      id: '3',
      title: 'Polygon Network',
      description: 'Learn to build scalable decentralized applications on the Polygon network using Solidity and JavaScript. Master the intricacies of Layer 2 solutions and dive into real-world use cases.',
      logo: imgSolanaSymbolPng2,
      logoBg: 'bg-white',
      certification: { by: 'Polygon', type: 'certified' },
      tags: ['Solidity', 'Intermediate', 'Certificate'],
    },
    {
      id: '4',
      title: 'Sui Developer',
      description: 'Sui is a high-performance Layer-1 blockchain platform that employs innovative parallel execution and object ownership models, greatly enhancing transaction processing speed and throughput. Sui supports smart contract development using the Move programming language, with a strong focus on security and asset ownership. In this Learning Track, we will explore the core features of Sui Network and the Move programming language, guiding you step-by-step through the development, testing, and deployment of smart contracts on Sui via practical projects.',
      logo: imgSolanaSymbolPng3,
      logoBg: 'bg-black',
      certification: { by: 'Polygon', type: 'in-progress' },
      tags: ['Solidity', 'Intermediate', 'Certificate'],
    },
    {
      id: '5',
      title: 'Injective Developer',
      description: 'Injective is a lightning fast interoperable layer one blockchain optimized for building the premier Web3 finance applications. Injective uniquely provides developers with powerful plug-and-play financial infrastructure primitives, such as a high performance on-chain decentralized exchange infrastructure, decentralized bridges, oracles, and a composable smart contract layer with CosmWasm. Injective is incubated by Binance and is backed by prominent investors such as Jump Crypto, Pantera and Mark Cuban.',
      logo: imgSolanaSymbolPng4,
      logoBg: 'bg-[#14151a]',
      tags: ['Rust', 'Beginner-friendly', 'Certificate'],
    },
    {
      id: '6',
      title: 'Arbitrum Ecosystem',
      description: 'Arbitrum is the leading layer-2 (L2) that empowers users like you to explore and build in the largest layer-1 (L1) ecosystem, Ethereum. In this learning track, we will introduce the ecosystem and architecture of Arbitrum, learn Rust syntax and the Stylus library, and together build some classic projects such as a Bulls and Cows game, a token, an NFT, and DeFi smart vaults.',
      logo: imgSolanaSymbolPng5,
      logoBg: 'bg-black',
      tags: ['Solidity', 'Intermediate', 'Certificate'],
    },
    {
      id: '7',
      title: 'Linea Blockchain',
      description: 'Linea Network, an Ethereum layer-2 (L2) solution, is one of the most promising advancements in Ethereum&apos;s scalability landscape. In this ecosystem, we will start with a comprehensive introduction to the Linea ecosystem, progressing from basic Solidity syntax to advanced guided projects. Through this journey, you will develop skills to launch tokens, implement NFT Dutch Auctions, and build a decentralized social DApp. All projects can be deployed on the Linea Mainnet or Testnet, offering practical, hands-on experience within the Linea ecosystem.',
      logo: imgSolanaSymbolPng6,
      logoBg: 'bg-black',
      tags: ['Haskell', 'Advanced', 'Certificate'],
    },
    {
      id: '8',
      title: 'Sonic Developer',
      description: 'Sonic is a high-performance network evolved from Fantom, aiming to address the blockchain "trilemma" of decentralization, security, and scalability. It achieves impressive performance with 10,000 TPS, sub-second finality, and transaction costs below $0.01. Additionally, Sonic introduces the innovative Fee Monetization (FeeM) mechanism, enhancing user experience and developer adoption, paving the way for the growth of decentralized ecosystems.',
      logo: imgSolanaSymbolPng7,
      logoBg: 'bg-white',
      tags: ['Rust', 'Beginner-friendly', 'Certificate'],
    },
    {
      id: '9',
      title: 'Monad Ecosystem',
      description: 'Monad is a high-performance, Ethereum-compatible Layer 1 blockchain designed to maximize throughput and minimize transaction costs. With innovations in MonadBFT consensus, Parallel Execution, and MonadDB, Monad achieves 10,000 TPS while maintaining full compatibility with the EVM and Ethereum ecosystem. Developers can seamlessly build dApps using Solidity, Foundry, Hardhat, and other familiar tools. If you&apos;re looking to explore Monad and master its core technology, this course will take you from the basics to hands-on development—getting you up and running in no time!',
      logo: imgSolanaSymbolPng8,
      logoBg: 'bg-[#200053]',
      tags: ['Solidity', 'Intermediate', 'Certificate'],
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
              Learn Blockchain Development
            </h1>

            {/* Description */}
            <p className="text-white text-sm md:text-base opacity-80 mb-6 md:mb-8 leading-relaxed max-w-2xl">
              Dive deep into the world&apos;s leading ecosystems and explore their unique technologies, gain hands-on experience and insights into the tools shaping the future. By the end, you&apos;ll be ready to become a certified developer.
            </p>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
              <button className="border border-border-darker rounded-md px-3 py-2 flex gap-2 items-center hover:border-primary/50 transition-colors">
                <span className="text-text-secondary text-sm">Blockchain</span>
                <div className="flex gap-1 items-center">
                  <span className="text-white text-sm">All</span>
                  <div className="h-1 w-2 relative shrink-0">
                    <img alt="" className="block w-full h-full" src={imgVector2} />
                  </div>
                </div>
              </button>
              <button className="border border-border-darker rounded-md px-3 py-2 flex gap-2 items-center hover:border-primary/50 transition-colors">
                <span className="text-text-secondary text-sm">Language</span>
                <div className="flex gap-1 items-center">
                  <span className="text-white text-sm">All</span>
                  <div className="h-1 w-2 relative shrink-0">
                    <img alt="" className="block w-full h-full" src={imgVector2} />
                  </div>
                </div>
              </button>
              <button className="border border-border-darker rounded-md px-3 py-2 flex gap-2 items-center hover:border-primary/50 transition-colors">
                <span className="text-text-secondary text-sm">Level</span>
                <div className="flex gap-1 items-center">
                  <span className="text-white text-sm">All</span>
                  <div className="h-1 w-2 relative shrink-0">
                    <img alt="" className="block w-full h-full" src={imgVector2} />
                  </div>
                </div>
              </button>
              <button className="border border-border-darker rounded-md px-3 py-2 flex gap-2 items-center hover:border-primary/50 transition-colors">
                <span className="text-text-secondary text-sm">Certification</span>
                <div className="flex gap-1 items-center">
                  <span className="text-white text-sm">Yes</span>
                  <div className="h-1 w-2 relative shrink-0">
                    <img alt="" className="block w-full h-full" src={imgVector2} />
                  </div>
                </div>
              </button>
            </div>

            {/* Courses Grid */}
            <div className="flex flex-col gap-4 md:gap-6">
              {/* First Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {courses.slice(0, 3).map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
              {/* Second Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {courses.slice(3, 6).map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
              {/* Third Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {courses.slice(6, 9).map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Course Card Component
const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <div className="border border-border-darker rounded-2xl p-4 hover:border-primary/30 transition-colors">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <div className={`${course.logoBg} rounded-lg p-[18px] w-16 h-16 flex items-center justify-center shrink-0`}>
              <img 
                alt={course.title} 
                className="w-full h-full object-contain max-w-[52px] max-h-[52px]" 
                src={course.logo} 
              />
            </div>
            {course.certification && (
              <div className={`${
                course.certification.type === 'certified' ? 'bg-primary' : 'bg-[darkorange]'
              } rounded-full px-2.5 py-1 flex items-center gap-1 shrink-0`}>
                <div className="w-2.5 h-2.5 relative">
                  {course.certification.type === 'certified' ? (
                    <img alt="certified" className="block w-full h-full" src={imgThumbsUp} />
                  ) : (
                    <img alt="in-progress" className="block w-full h-full" src={imgGroup2085663279} />
                  )}
                </div>
                <p className="text-white text-xs font-medium">
                  {course.certification.type === 'certified' 
                    ? `Certified by ${course.certification.by}`
                    : 'In progress'
                  }
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Link href={`/courses/${course.id}`}>
              <h3 className="text-white text-base font-semibold hover:text-primary transition-colors cursor-pointer">
                {course.title}
              </h3>
            </Link>
            <p className="text-white text-sm opacity-80 leading-relaxed line-clamp-3">
              {course.description}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {course.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-white/30 text-white text-xs font-medium px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

