import React from 'react';
import Link from 'next/link';

interface HackathonCardProps {
  id?: string;
  title: string;
  description: string;
  status: 'Live' | 'Voting' | 'Ended';
  registrationClose?: string;
  votingClose?: string;
  winner?: string;
  techStack: string;
  level: string;
  totalPrize: string;
  participants: string;
  imageUrl: string;
  isOnline: boolean;
}

const HackathonCard: React.FC<HackathonCardProps> = ({
  id,
  title,
  description,
  status,
  registrationClose,
  votingClose,
  winner,
  techStack,
  level,
  totalPrize,
  participants,
  imageUrl,
  isOnline,
}) => {
  // Generate slug from title if id is not provided
  const hackathonId = id || title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  const statusBgColor = 
    status === 'Live' || status === 'Voting' 
      ? 'bg-status-live' 
      : 'bg-status-ended';

  return (
    <article className="border border-border-darker rounded-2xl p-4 md:p-6 flex flex-col lg:flex-row gap-4 md:gap-6 hover:border-primary/30 transition-colors">
      <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 flex-1">
        {/* Hackathon Header */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-2 items-center">
            <Link href={`/hackathon/${hackathonId}`}>
              <h3 className="font-semibold text-white text-base md:text-lg lg:text-xl hover:text-primary transition-colors cursor-pointer">
                {title}
              </h3>
            </Link>
            <div className={`${statusBgColor} rounded-full px-2.5 py-1 shrink-0`}>
              <p className="font-semibold text-white text-xs md:text-sm">{status}</p>
            </div>
          </div>
          <p className="opacity-60 text-white text-sm md:text-base leading-relaxed line-clamp-2 md:line-clamp-3">
            {description}
          </p>
        </div>

        {/* Hackathon Details - Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {registrationClose && (
            <div className="flex flex-col gap-1.5 text-white">
              <p className="opacity-60 text-xs md:text-sm">Registration close</p>
              <p className="text-sm md:text-base font-medium">{registrationClose}</p>
            </div>
          )}
          {votingClose && (
            <div className="flex flex-col gap-1.5 text-white">
              <p className="opacity-60 text-xs md:text-sm">Voting close</p>
              <p className="text-sm md:text-base font-medium">{votingClose}</p>
            </div>
          )}
          {winner && (
            <div className="flex flex-col gap-1.5 text-white">
              <p className="opacity-60 text-xs md:text-sm">Winner</p>
              <p className="text-sm md:text-base font-medium">{winner}</p>
            </div>
          )}
          <div className="flex flex-col gap-1.5 text-white">
            <p className="opacity-60 text-xs md:text-sm">Tech stack</p>
            <p className="text-sm md:text-base font-medium">{techStack}</p>
          </div>
          <div className="flex flex-col gap-1.5 text-white">
            <p className="opacity-60 text-xs md:text-sm">Level</p>
            <p className="text-sm md:text-base font-medium">{level}</p>
          </div>
          <div className="flex flex-col gap-1.5 text-white">
            <p className="opacity-60 text-xs md:text-sm">Total prize</p>
            <p className="text-sm md:text-base font-medium">{totalPrize}</p>
          </div>
        </div>

        {/* Hackathon Meta */}
        <div className="flex flex-wrap gap-2">
          {isOnline && (
            <div className="bg-white/30 rounded-full px-2.5 py-1">
              <p className="font-semibold text-white text-xs md:text-sm">Online</p>
            </div>
          )}
          <div className="bg-white/30 rounded-full px-2.5 py-1">
            <p className="font-semibold text-white text-xs md:text-sm">{participants} Participants</p>
          </div>
        </div>
      </div>

      {/* Hackathon Image */}
      <div className="w-full lg:w-[362px] lg:shrink-0 rounded-lg overflow-hidden aspect-[362/196]">
        <img 
          alt={title} 
          className="w-full h-full object-contain"
          src={imageUrl} 
        />
      </div>
    </article>
  );
};

export default HackathonCard;

