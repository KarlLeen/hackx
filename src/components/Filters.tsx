import React from 'react';

const imgVector2 = "/Vector.svg";

interface FilterItem {
  label: string;
  value: string;
}

const Filters: React.FC = () => {
  const filters: FilterItem[] = [
    { label: 'Total Prize', value: 'All' },
    { label: 'Ecosystem', value: 'All' },
    { label: 'Tech Stack', value: 'All' },
    { label: 'Status', value: 'Live, Upcoming' },
  ];

  return (
    <div className="flex flex-wrap gap-2 md:gap-3 items-center">
      {filters.map((filter, index) => (
        <button
          key={index}
          className="border border-border-darker rounded-md px-2.5 md:px-3 py-1.5 md:py-2 flex gap-2 items-center hover:border-primary/50 transition-colors text-left"
        >
          <span className="text-text-secondary text-xs md:text-sm whitespace-nowrap">{filter.label}</span>
          <div className="flex gap-1 items-center">
            <span className="text-white text-xs md:text-sm whitespace-nowrap">{filter.value}</span>
            <div className="h-1 w-2 relative shrink-0">
              <img alt="" className="block w-full h-full" src={imgVector2} />
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default Filters;

