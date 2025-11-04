'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

// Image URLs
const imgLine1 = "/Vector.svg";
const imgLine9 = "/Vector.svg";
const imgVector2 = "/Vector.svg";
const imgThumbsUp = "/Vector.svg";
const imgGroup2085663279 = "/Vector.svg";
// Course logos
const imgSolana = "/figma-exported/solana.png";
const imgMantle = "/figma-exported/mantel.png";
const imgPolygon = "/figma-exported/Polygon Network.png";
const imgSui = "/figma-exported/sui.png";
const imgINJ = "/figma-exported/INJ.png";
const imgARB = "/figma-exported/ARB.png";
const imgLinea = "/figma-exported/Linea.png";
const imgSonic = "/figma-exported/sonic.png";
const imgMonad = "/figma-exported/monad.png";

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
      logo: imgSolana,
      logoBg: 'bg-black',
      certification: { by: 'Solana Labs', type: 'certified' },
      tags: ['Rust', 'Beginner-friendly', 'Certificate'],
    },
    {
      id: '2',
      title: 'Mantle Blockchain',
      description: 'Mantle Network, a fast-growing Ethereum L2, offers a hands-on path to mastering Solidity. You&apos;ll progress from basic syntax to advanced projects like launching tokens, NFTs, and even a "CryptoKitty."',
      logo: imgMantle,
      logoBg: 'bg-black',
      certification: { by: 'Mantle', type: 'certified' },
      tags: ['Rust', 'Beginner-friendly', 'Certificate'],
    },
    {
      id: '3',
      title: 'Polygon Network',
      description: 'Learn to build scalable decentralized applications on the Polygon network using Solidity and JavaScript. Master the intricacies of Layer 2 solutions and dive into real-world use cases.',
      logo: imgPolygon,
      logoBg: 'bg-white',
      certification: { by: 'Polygon', type: 'certified' },
      tags: ['Solidity', 'Intermediate', 'Certificate'],
    },
    {
      id: '4',
      title: 'Sui Developer',
      description: 'Sui is a high-performance Layer-1 blockchain platform that employs innovative parallel execution and object ownership models, greatly enhancing transaction processing speed and throughput. Sui supports smart contract development using the Move programming language, with a strong focus on security and asset ownership. In this Learning Track, we will explore the core features of Sui Network and the Move programming language, guiding you step-by-step through the development, testing, and deployment of smart contracts on Sui via practical projects.',
      logo: imgSui,
      logoBg: 'bg-black',
      certification: { by: 'Polygon', type: 'in-progress' },
      tags: ['Solidity', 'Intermediate', 'Certificate'],
    },
    {
      id: '5',
      title: 'Injective Developer',
      description: 'Injective is a lightning fast interoperable layer one blockchain optimized for building the premier Web3 finance applications. Injective uniquely provides developers with powerful plug-and-play financial infrastructure primitives, such as a high performance on-chain decentralized exchange infrastructure, decentralized bridges, oracles, and a composable smart contract layer with CosmWasm. Injective is incubated by Binance and is backed by prominent investors such as Jump Crypto, Pantera and Mark Cuban.',
      logo: imgINJ,
      logoBg: 'bg-[#14151a]',
      tags: ['Rust', 'Beginner-friendly', 'Certificate'],
    },
    {
      id: '6',
      title: 'Arbitrum Ecosystem',
      description: 'Arbitrum is the leading layer-2 (L2) that empowers users like you to explore and build in the largest layer-1 (L1) ecosystem, Ethereum. In this learning track, we will introduce the ecosystem and architecture of Arbitrum, learn Rust syntax and the Stylus library, and together build some classic projects such as a Bulls and Cows game, a token, an NFT, and DeFi smart vaults.',
      logo: imgARB,
      logoBg: 'bg-black',
      tags: ['Solidity', 'Intermediate', 'Certificate'],
    },
    {
      id: '7',
      title: 'Linea Blockchain',
      description: 'Linea Network, an Ethereum layer-2 (L2) solution, is one of the most promising advancements in Ethereum&apos;s scalability landscape. In this ecosystem, we will start with a comprehensive introduction to the Linea ecosystem, progressing from basic Solidity syntax to advanced guided projects. Through this journey, you will develop skills to launch tokens, implement NFT Dutch Auctions, and build a decentralized social DApp. All projects can be deployed on the Linea Mainnet or Testnet, offering practical, hands-on experience within the Linea ecosystem.',
      logo: imgLinea,
      logoBg: 'bg-black',
      tags: ['Haskell', 'Advanced', 'Certificate'],
    },
    {
      id: '8',
      title: 'Sonic Developer',
      description: 'Sonic is a high-performance network evolved from Fantom, aiming to address the blockchain "trilemma" of decentralization, security, and scalability. It achieves impressive performance with 10,000 TPS, sub-second finality, and transaction costs below $0.01. Additionally, Sonic introduces the innovative Fee Monetization (FeeM) mechanism, enhancing user experience and developer adoption, paving the way for the growth of decentralized ecosystems.',
      logo: imgSonic,
      logoBg: 'bg-white',
      tags: ['Rust', 'Beginner-friendly', 'Certificate'],
    },
    {
      id: '9',
      title: 'Monad Ecosystem',
      description: 'Monad is a high-performance, Ethereum-compatible Layer 1 blockchain designed to maximize throughput and minimize transaction costs. With innovations in MonadBFT consensus, Parallel Execution, and MonadDB, Monad achieves 10,000 TPS while maintaining full compatibility with the EVM and Ethereum ecosystem. Developers can seamlessly build dApps using Solidity, Foundry, Hardhat, and other familiar tools. If you&apos;re looking to explore Monad and master its core technology, this course will take you from the basics to hands-on development—getting you up and running in no time!',
      logo: imgMonad,
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
          <div className="w-full max-w-[1100px] 2xl:max-w-[1300px] px-4 md:px-8 lg:px-12 xl:px-16 py-6 md:py-8 lg:py-10">
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

