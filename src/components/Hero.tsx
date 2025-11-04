import React from 'react';

const Hero: React.FC = () => {
  const imgHeroImage = "http://localhost:3845/assets/dec11002a58e7b355d188bb157c50e1be953064f.png";
  const imgFrame3 = "http://localhost:3845/assets/56a31b452d0f7cd9ed8df1b1615792ed6dbcd4b6.svg";
  const imgFrame4 = "http://localhost:3845/assets/aacd2dc73e6f796e683f01950ad87cf6728c5912.svg";
  const imgEllipse3 = "http://localhost:3845/assets/a1baba88f50749cb08f0826411853fca0aa6641a.svg";
  const imgEllipse4 = "http://localhost:3845/assets/dc46544932ad4d4bb024dd83969badf39053c742.svg";

  return (
    <div className="relative w-full aspect-[27/10] md:aspect-[110/40] rounded-lg overflow-hidden">
      {/* Hero Image */}
      <div className="relative h-full w-full rounded-lg overflow-hidden">
        <img 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover"
          src={imgHeroImage} 
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
      
      {/* Registration Info Overlay */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-3 md:gap-6 px-4 w-full max-w-5xl pointer-events-none">
        <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-2 flex flex-col gap-1 md:gap-2">
          <p className="opacity-60 text-white text-xs md:text-sm">Registration close</p>
          <p className="text-white text-sm md:text-base font-medium">Registration 12 days left</p>
        </div>
        <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-2 flex flex-col gap-1 md:gap-2">
          <p className="opacity-60 text-white text-xs md:text-sm">Tech stack</p>
          <p className="text-white text-sm md:text-base font-medium">All tech stacks</p>
        </div>
        <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-2 flex flex-col gap-1 md:gap-2">
          <p className="opacity-60 text-white text-xs md:text-sm">Level</p>
          <p className="text-white text-sm md:text-base font-medium">All levels accepted</p>
        </div>
        <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-2 flex flex-col gap-1 md:gap-2">
          <p className="opacity-60 text-white text-xs md:text-sm">Total prize</p>
          <p className="text-white text-sm md:text-base font-medium">50,000.00 USD</p>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 right-4 md:right-6 flex gap-2 items-center pointer-events-none">
        <div className="w-1.5 h-1.5 rounded-full bg-white relative">
          <img alt="" className="block w-full h-full" src={imgEllipse3} />
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-white/60 relative">
          <img alt="" className="block w-full h-full" src={imgEllipse4} />
        </div>
        <div className="w-1.5 h-1.5 rounded-full bg-white/60 relative">
          <img alt="" className="block w-full h-full" src={imgEllipse4} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

